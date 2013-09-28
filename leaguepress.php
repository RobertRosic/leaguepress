<?php

/*
Plugin Name: Leaguepress
Plugin URI: http://frisket.nl
Description:
Version: 1.0.0
Author: Lissenberg
Author URI:
License: MIT
*/

namespace LeaguePress;

include_once(dirname(__FILE__)."/library/libChampion.php");
include_once(dirname(__FILE__)."/library/libRune.php");
include_once(dirname(__FILE__)."/library/libMastery.php");

class Request
{
    public function __construct()
    {
        switch ($_SERVER["REQUEST_METHOD"]) {
            case 'POST':
                $this->isPost = true;
                break;
            case 'GET':
                $this->isGet = true;
                break;
            case 'DELETE':
                $this->isDelete = true;
                break;
            case 'PUT':
                $this->isPut = true;
                break;
        }

        if (isset($_GET['id'])) {
            $this->id = absint($_GET['id']);
        }

        $this->raw = @file_get_contents('php://input');
        if (is_string($this->raw) && ($this->isPost || $this->isPut)) {
            $obj = json_decode($this->raw, true);
            if (!$this->validate($obj)) {
                // clear the invalid data.
                $this->raw = null;
            } else {
                $this->decoded = $obj;
                $this->build = json_encode($obj);

                if (isset($obj['id'])) {
                    $this->id = absint($obj['id']);
                }
            }
        }

        /** @var \WP_User $user */
        $user = wp_get_current_user();
        $this->userId = $user->id;
        $this->userLogin = $user->user_login;
    }

    private function validate($obj)
    {
        if (!isset($obj['build'])) {
            return false;
        }

        return true;
    }

    protected $raw;
    public $build;
    public $decoded;
    public $id;
    public $userId;
    public $userLogin;
    public $isPost = false;
    public $isPut = false;
    public $isGet = false;
    public $isDelete = false;
}

class RequestRouter
{
    function leaguepress_api_redirect()
    {
        $request = null;

        // Is the current request for the LeaguePress API?
        $uri = $_SERVER['REQUEST_URI'];

        $matches = array();
        /*
         * GET  [wordpress]/leaguepress/build/
         * GET  [wordpress]/leaguepress/build/[id]
         * POST [wordpress]/leaguepress/build/ (create a new build)
         * PUT  [wordpress]/leaguepress/build/[id] (update a build or create new)
         * DELETE  [wordpress]/leaguepress/build/[id] (delete a build)
         */
        preg_match('/leaguepress\/([a-z]*)/', $uri, $matches);

        if (count($matches) > 0) {
            // TODO
        }

        /*
         * GET  [wordpress]/?leaguepress&build
         * GET  [wordpress]/?leaguepress&build=[id]
         * POST [wordpress]/leaguepress&build (create a new build)
         * PUT  [wordpress]/leaguepress&build=[id] (update a build or create new)
         * DELETE  [wordpress]/leaguepress&build=[id] (delete a build)
         */

        if (isset($_GET['leaguepress'])) {
            $request = new Request();
        }

        if (isset($request)) {
            header("content-type:application/json");

            try {
                $result = null;
                $controller = new RestController($request);

                // POST/PUT
                if (($request->isPost || $request->isPut) && !empty($request->build)) {
                    // with id
                    if (!empty($request->id)) {
                        $result = $controller->put($request->id, $request->build, $request->decoded->title, $request->decoded->description);
                    } // without id
                    else {
                        $result = $controller->post($request->build, $request->decoded->title, $request->decoded->description);
                    }
                    echo json_encode($result);
                }

                // GET
                if ($request->isGet) {
                    if (!empty($request->id)) {
                        echo json_encode($controller->get($request->id));
                    } else {
                        echo json_encode($controller->getList());
                    }
                }

                // DELETE
                if ($request->isDelete) {
                    echo json_encode($controller->delete($_GET['id']));
                }

            } catch (\Exception $e) {
                echo json_encode("error");
                exit;
            }

            exit;
        }
    }
}

class RestController
{
    private $request = null;

    public function __construct($request)
    {
        $this->request = $request;
    }

    public function auth()
    {
        // auth check
        if (!is_user_logged_in()) {
            throw new \Exception("Permission denied!");
        }
    }

    function getList()
    {
        /** @var \wpdb $wpdb */
        global $wpdb;

        $user = wp_get_current_user();
        $r = $wpdb->query("select * from wp_leaguepress where user_id = " . mysql_real_escape_string($user->id) . ' limit 0, 10');
        $result = $wpdb->last_result;

        $list = array();
        foreach ($result as $row) {
            $buildData = json_decode($row->build);
            $buildData->id = $row->id;

            array_push($list, $buildData);
        }

        return $list;
    }

    // fetch item
    function get($id)
    {
        /** @var \wpdb $wpdb */
        global $wpdb;

        $user = wp_get_current_user();
        $r = $wpdb->query("select * from wp_leaguepress where id = " . mysql_real_escape_string($id) . ' limit 0, 1');
        $result = $wpdb->last_result;

        if (is_array($result) && count($result) > 0) {
            $buildData = json_decode($result[0]->build);
            $buildData->id = $result[0]->id;
            return $buildData;
        }

        return null;
    }

    // create or update
    function put($id, $data, $title, $description)
    {
        $this->auth();

        /** @var \wpdb $wpdb */
        global $wpdb;

        $tableData = array(
            "unix_timestamp" => time(),
            "user_id" => $this->request->userLogin === false ? null : $this->request->userId,
            "user_login" => $this->request->userLogin === false ? null : $this->request->userLogin,
            "build" => $data,
            "title" => $title,
            "description" => $description
        );

        $user = wp_get_current_user();
        $result = $wpdb->update(WordPressPlugin::getTableName(), $tableData, array('ID' => $id, 'user_id' => $user->id));

        return $result;
    }

    // create new
    function post($data, $title, $description)
    {
        $this->auth();

        global $wpdb;

        $tableData = array(
            "unix_timestamp" => time(),
            "user_id" => $this->request->userLogin === false ? null : $this->request->userId,
            "user_login" => $this->request->userLogin === false ? null : $this->request->userLogin,
            "build" => $data,
            "title" => $title,
            "description" => $description
        );

        /** @var \wpdb $wpdb */
        $result = $wpdb->insert(WordPressPlugin::getTableName(), $tableData);

        return $result !== false ? $wpdb->insert_id : $result;
    }

    function delete($id)
    {
        $this->auth();

        /** @var \wpdb $wpdb */
        global $wpdb;

        $user = wp_get_current_user();
        $r = $wpdb->delete(WordPressPlugin::getTableName(), array('ID' => absint($id), 'user_id' => $user->id));
        return $r;
    }
}

$lp = new RequestRouter();
add_action('template_redirect', array($lp, 'leaguepress_api_redirect'));

class WordPressPlugin
{
    const lp_db_version = "1.0";
    const lp_db_tablename = "leaguepress";

    static function toCssCode($string)
    {
        return str_replace('_', '-', $string);
    }

    static function getTableName()
    {
        global $wpdb;
        $name = $wpdb->prefix . self::lp_db_tablename;
        return $name;
    }

    static function lp_install()
    {
        global $wpdb;
        $table_name = self::getTableName();
        $users_table_name = $wpdb->prefix . 'users';

        $sql = "CREATE TABLE $table_name (
                id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
                unix_timestamp INT UNSIGNED NOT NULL,
                user_id BIGINT UNSIGNED,
                user_login VARCHAR(60),
                build MEDIUMTEXT NOT NULL,
                title VARCHAR(500),
                description MEDIUMTEXT NOT NULL,
            UNIQUE KEY id (id),
            FOREIGN KEY (user_id)
                REFERENCES $users_table_name(id)
                ON DELETE SET NULL,
            FOREIGN KEY (user_login)
                REFERENCES $users_table_name(user_login)
                ON DELETE SET NULL
        );";

        require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
        dbDelta($sql);

        add_option("lp_db_version", self::lp_db_version);
    }

    function leaguepressscripts_method()
    {
        wp_register_script('handlebars', plugins_url('/javascript/handlebars.min.js', __FILE__));
        wp_register_script('leaguepress-config', plugins_url('/javascript/leaguepress.config.js', __FILE__));
        wp_register_script('leaguepress-handlebars', plugins_url('/javascript/leaguepress.handlebars.js', __FILE__));
        wp_register_script('leaguepress', plugins_url('/javascript/leaguepress.min.js', __FILE__));
        wp_register_script('leaguepress-bootstrap', plugins_url('/javascript/leaguepress.bootstrap.js', __FILE__));

        wp_enqueue_script('jquery');
        wp_enqueue_script('jquery-ui-core');
        wp_enqueue_script('jquery-ui-widget');
        wp_enqueue_script('jquery-ui-draggable');
        wp_enqueue_script('handlebars');
        wp_enqueue_script("leaguepress-config");
        wp_enqueue_script("leaguepress-handlebars");
        wp_enqueue_script('leaguepress');
        wp_enqueue_script("leaguepress-bootstrap");

        wp_register_style('leaguepress-style', plugins_url('/css/default/leaguepress.css', __FILE__));
        wp_enqueue_style('leaguepress-style');
    }

    function shortChampion($atts)
    {
        $code = $atts['code'];

        return sprintf(
            '<div style="display: inline-block" data-champion-code="%s" class="champions-icon champions-%s"></div>',
            $code,
            $code
        );
    }

    function shortLeaguePress($atts)
    {
        if (is_user_logged_in()) {
            $out = "";
            ob_start();
            include("lp-build.php");
            $out .= ob_get_clean();

            return $out;
        } else {
            return "[! Not logged in !]";
        }
    }

    function shortBuild($atts)
    {
        $id = absint($atts['id']);

        /** @var \wpdb $wpdb */
        global $wpdb;

        $user = wp_get_current_user();
        $r = $wpdb->query("select * from wp_leaguepress where id = " . mysql_real_escape_string($id) . ' limit 0, 1');
        $result = $wpdb->last_result;

        if (is_array($result) && count($result) > 0) {
            $build = json_decode($result[0]->build);
            $build->id = $result[0]->id;

            ob_start();
            include("lp-champion.php");
            echo ob_get_clean();
        }
    }
}


add_shortcode('champion', array('\LeaguePress\WordPressPlugin', "shortChampion"));
add_shortcode('leaguepressbuild', array('\LeaguePress\WordPressPlugin', "shortLeaguePress"));
add_shortcode('build', array('\LeaguePress\WordPressPlugin', "shortBuild"));

add_action('wp_enqueue_scripts', array('\LeaguePress\WordPressPlugin', 'leaguepressscripts_method'));
register_activation_hook(__FILE__, array('\LeaguePress\WordPressPlugin', "lp_install"));

// POSTMAN TEST
/*
    http://agent1.example.nl/wordpress/?leaguepress=&build=-100

    {
      "build": {
        "champion":"akali",
        "abilities": {
            "a1": [1,2,3,4,5],
            "a2": [6,7,8,9,10]
        }
      }
    }
*/