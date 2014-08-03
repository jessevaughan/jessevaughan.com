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
define('DB_NAME', 'jessevaughan_com');

/** MySQL database username */
define('DB_USER', 'jessevaughancom');

/** MySQL database password */
define('DB_PASSWORD', 'nf5NWGTg');

/** MySQL hostname */
define('DB_HOST', 'mysql.jessevaughan.com');

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
define('AUTH_KEY',         'HvK*phLg2m#_h1k(Q?bxSxIFV2hsKL&VULAA0xEPC&HxKdZVBPgZ7nx6w#^_^BS^');
define('SECURE_AUTH_KEY',  'o6R;Q_@eEAg5??iuj6h)c9Roh49czybD9ll6"r;/t!@A2:I1S5Y7INR^LX302tvC');
define('LOGGED_IN_KEY',    'm$dKHD2Jj%Goc;PNcLFA;QJ34JL`7BKozJmm"IyiWJwD@Y)7_B&Bn`d|A/SB$n(Y');
define('NONCE_KEY',        'Cp)6%X26GdOSs|P2wBqD??54S#ym?POO;VlQAa0Rp"Ud|jg5V*F_RG6kd!fo3fTY');
define('AUTH_SALT',        '*a|8J_NmxuY9ZwyGfhn)%~f|ycf6E"IMj7QaTKi3*Y3CF+wmZ;FUQ^SZ:l5jX*tq');
define('SECURE_AUTH_SALT', 'U|1DAc3_HQ1a3V(q3ybbuX*et6Y1TJ)6s6F/mBmepwHnXb@Kbw`eiC4DmFPKc;V^');
define('LOGGED_IN_SALT',   'iiel5Cyo$Ey6tQ7i1_EmJ8Wz?^jY_&M?M~_|yf9W)lB6r%a`*2zjn7$4t511Ukt&');
define('NONCE_SALT',       'tniZz@I?qk1^g$EGi&M|JmtrrYMnSQM~dXol7;po+MY!cjG7to!~g_nFmZKdl6+c');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_ac9k6i_';

/**
 * Limits total Post Revisions saved per Post/Page.
 * Change or comment this line out if you would like to increase or remove the limit.
 */
define('WP_POST_REVISIONS',  10);

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

