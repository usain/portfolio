<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'dylanjoh_pbpr');

/** MySQL database username */
define('DB_USER', 'dylanjoh_pbpr');

/** MySQL database password */
define('DB_PASSWORD', 'pbpr-adm1n');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'AYVCm 9PJ0oC9z5FYVP4o&Yw;VL#4.Dj7$1o(l_5&xjEE2G9Sp?X*Hot337P<;j5');
define('SECURE_AUTH_KEY',  '1h%U;JQ&} =&I&T{SW~r97|k=C;hyB#pxUKyfturE13])}D_@OxL%$k)O/X,{q?q');
define('LOGGED_IN_KEY',    '!^UnyE(*1FtGAL^yYT;:)%mn@C+&*fbCV3eVePM3qpYu*;k*eReJ@iiw!Pe]m|kC');
define('NONCE_KEY',        'M~3.0gvk2hSH~/Hf]*8%[bh]SSa0(7*@5IL}4[m+LQ;)f+tgp;`?|Pjd}0FQ)XR_');
define('AUTH_SALT',        '+um/7hzeIMWu2EH%5QI+m]pgu}>=#b(a+5x:Q$U&kx>_H$y9Vj; x:)OI([L!&8s');
define('SECURE_AUTH_SALT', ' <3pB8b=]:L+$Z9mpYG&;o^TEV<xGs%P3k~Y:/b:qHyl x0*-?03-XVdP:{D[jq]');
define('LOGGED_IN_SALT',   '5+$krXx^<=V~KkKMM2,LEO}+5L&5+jK| 1|<`b;I&Q O_]~3NC:qOWRQ$<zqqSyU');
define('NONCE_SALT',       'ZoP&;i>SCA>r`+agvx:@x6y8H1;JObGi]6$I@1Ml2rTq{I8lV:DZ%2/OKPxfuJ3r');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'pbpr_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
