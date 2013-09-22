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

        $this->raw = @file_get_contents('php://input');
        if (is_string($this->raw) && ($this->isPost || $this->isPut)) {
            $obj = json_decode($this->raw, true);
            if (!$this->validate($obj)) {
                // clear the invalid data.
                $this->raw = null;
            } else {
                $this->build = json_encode($obj['build']);
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
            $request->id = isset($_GET['build']) ? absint($_GET['build']) : null;
        }

        if (isset($request)) {
            global $wpdb;

            $result = null;
            $controller = new RestController($request);

            if ($request->isPost && !empty($request->build)) {
                $result = $controller->post($request->build);
            }

            echo json_encode(
                array(
                    "result" => $result,
                    "request" => $request
                )
            );
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

    function getList()
    {

    }

    // fetch item
    function get($id)
    {
    }

    // create or update
    function put($id, $data)
    {

    }

    // create new
    function post($data)
    {
        global $wpdb;

        $data = array(
            "unix_timestamp" => time(),
            "user_id" => $this->request->userLogin === false ? null : $this->request->userId,
            "user_login" => $this->request->userLogin === false ? null : $this->request->userLogin,
            "build" => $data
        );

        /** @var \wpdb $wpdb */
        $result = $wpdb->insert(WordPressPlugin::getTableName(), $data);

        return $result !== false ? $wpdb->insert_id : $result;
    }

    function delete($id)
    {

    }
}

$lp = new RequestRouter();
add_action('template_redirect', array($lp, 'leaguepress_api_redirect'));

class WordPressPlugin
{
    const lp_db_version = "1.0";
    const lp_db_tablename = "leaguepress";

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
        wp_register_script('leaguepress-bootstrap', plugins_url('/javascript/leaguepress.bootstrap.js', __FILE__));
        wp_register_script('leaguepress-handlebars', plugins_url('/javascript/leaguepress.handlebars.js', __FILE__));
        wp_register_script('leaguepress', plugins_url('/javascript/leaguepress.min.js', __FILE__));

        wp_enqueue_script('jquery');
        wp_enqueue_script('jquery-ui-core');
        wp_enqueue_script('jquery-ui-widget');
        wp_enqueue_script('jquery-ui-draggable');
        wp_enqueue_script('handlebars');
        wp_enqueue_script("leaguepress-bootstrap");
        wp_enqueue_script("leaguepress-handlebars");
        wp_enqueue_script('leaguepress');

        wp_register_style('leaguepress-style', plugins_url('/css/default/leaguepress.css', __FILE__));
        wp_enqueue_style('leaguepress-style');
    }

    function shortChampion($atts)
    {
        $code = $atts['code'];

        return sprintf(
            '<div style="display: inline-block"
                    data-champion-code="%s" class="champions-icon champions-%s"></div>',
            $code,
            $code
        );
    }

    function shortBuild($atts)
    {
        $code = $atts['code'];

        return sprintf(
            '<div id="build">
             <script type="text/javascript">
                (function($){
                    $(function(){
                        $("#build").leaguepressbuild({});
                    });
                })(jQuery);
             </script>
            ',
            $code,
            $code
        );
    }
}


add_shortcode('champion', array('\LeaguePress\WordPressPlugin', "shortChampion"));
add_shortcode('leaguepressbuild', array('\LeaguePress\WordPressPlugin', "shortBuild"));

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