<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'EYMksTzpf+AnbvkCkmS9oA2TgalUmirKxoBpAOgKS+/n4+ddw78RYdpCdKV/uXlRWM9aenPvYT74Xk7xQxaCtA==');
define('SECURE_AUTH_KEY',  'zwzsCDd4eRJSv8AQPptZ2+hEjOrhyZZkWzTLozm2cfu6wdfOnrmkaOUQIUYPWJfdzc0MauShUbdq1cNId+vtSw==');
define('LOGGED_IN_KEY',    'bzUVMTkhqWQJ+ACIjBXQYdgkxsLzLvcRNU2yfIkoUrDgNYoBvprHw0hiGBc6MwrTk2hLuriAE1NG7iINffiIdA==');
define('NONCE_KEY',        'QK1fLIrIu+KDPZ31ygM8rKoSh5B0Zzc660N5LpZElfYH3d25ZAZU5ALWzw1o9vRWm6SwA0KG1x35Z3H9bJhHSQ==');
define('AUTH_SALT',        'QU1Mj1XtyoVMdgQRIses4eNvzZQ6onFMDuooQljO0flQOFnZ0xIHm+QGQytfxgoyb2ntC5YpX8hHe/1IavHZeg==');
define('SECURE_AUTH_SALT', 'WcvB5PoNywHLb7dyZAIv4SVTdIMOFm5N/GlDQnCNcvVxhDhDb0eD0NIFkMg8Hwntg8+BEDqQc+FiyvmQNq7bxA==');
define('LOGGED_IN_SALT',   'oFnMX5FuoUOp42v/bf6Mh1dNAz2cusjoirpjz1G6YA+HZ8Ze8vBLm12GDBAUisFgnRUoVlaTxWm/YQTy/4ODwg==');
define('NONCE_SALT',       'p66jU/jcR2ofYagz32311C7+nGfiN1ehRqklJ2DsaIj5lfilCSGKSwcYt+XqXcFkeuTRkRNnXcb4LL0xuTLY3Q==');


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

/**
 * remember change url:
 * define( 'HEADLESS_MODE_CLIENT_URL', 'https://hiroy.club' );
 */
