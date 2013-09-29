SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `wp_leaguepress`
-- ----------------------------
DROP TABLE IF EXISTS `wp_leaguepress`;
CREATE TABLE `wp_leaguepress` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `unix_timestamp` int(10) unsigned NOT NULL,
  `user_id` bigint(20) unsigned DEFAULT NULL,
  `user_login` varchar(60) DEFAULT NULL,
  `build` mediumtext NOT NULL,
  `title` varchar(500) DEFAULT NULL,
  `description` mediumtext NOT NULL,
  UNIQUE KEY `id` (`id`),
  KEY `user_id` (`user_id`),
  KEY `user_login` (`user_login`)
) ENGINE=MyISAM AUTO_INCREMENT=70 DEFAULT CHARSET=latin1;

SET FOREIGN_KEY_CHECKS = 1;
