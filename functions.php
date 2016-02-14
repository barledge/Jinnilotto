<?php
/**
 * Jinni Lotto functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Jinni_Lotto
 */

if ( ! function_exists( 'jinni_lotto_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function jinni_lotto_setup() {
	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on Jinni Lotto, use a find and replace
	 * to change 'jinni-lotto' to the name of your theme in all the template files.
	 */
	load_theme_textdomain( 'jinni-lotto', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'primary' => esc_html__( 'Primary', 'jinni-lotto' ),
	) );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );

	/*
	 * Enable support for Post Formats.
	 * See https://developer.wordpress.org/themes/functionality/post-formats/
	 */
	add_theme_support( 'post-formats', array(
		'aside',
		'image',
		'video',
		'quote',
		'link',
	) );

	// Set up the WordPress core custom background feature.
	add_theme_support( 'custom-background', apply_filters( 'jinni_lotto_custom_background_args', array(
		'default-color' => 'ffffff',
		'default-image' => '',
	) ) );

	show_admin_bar(false);
}
endif;
add_action( 'after_setup_theme', 'jinni_lotto_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function jinni_lotto_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'jinni_lotto_content_width', 640 );
}
add_action( 'after_setup_theme', 'jinni_lotto_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function jinni_lotto_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'jinni-lotto' ),
		'id'            => 'sidebar-1',
		'description'   => '',
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'jinni_lotto_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function jinni_lotto_scripts() {
	wp_enqueue_style( 'jinni-lotto-style', get_stylesheet_uri() );

	wp_enqueue_script( 'jinni-lotto-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20120206', true );

	wp_enqueue_script( 'jinni-lotto-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20130115', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'jinni_lotto_scripts' );


function powerballScripts() {
if ( is_page('powerball-ticket') ) { // this if statement will insure the following code only gets added to your wp site and not the admin page cause your code has no business in the admin page right unless that's your intentions
	// jquery
		wp_deregister_script('jquery'); // this deregisters the current jquery included in wordpress
		wp_register_script('jquery', ("http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"), false); // this registers the replacement jquery
		wp_enqueue_script('jquery'); // you can either let wp insert this for you or just delete this and add it directly to your template
	// your own script
		wp_register_script('yourscript', ( get_bloginfo('template_url') . 'assets/js/functions-powerball.js'), false); //first register your custom script
		wp_enqueue_script('swfobject'); // then let wp insert it for you or just delete this and add it directly to your template
        // just in case your also interested
	}
}
add_action( 'wp_print_scripts', 'powerballScripts'); // now just run the function


function mmils() {
	if ( is_page('megamillions-ticket') ) { // this if statement will insure the following code only gets added to your wp site and not the admin page cause your code has no business in the admin page right unless that's your intentions
		// jquery
		wp_deregister_script('jquery'); // this deregisters the current jquery included in wordpress
		wp_register_script('jquery', ("http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"), false); // this registers the replacement jquery
		wp_enqueue_script('jquery'); // you can either let wp insert this for you or just delete this and add it directly to your template
		// your own script
		wp_register_script('yourscript', ( get_bloginfo('template_url') . 'assets/js/functions-megamillions.js'), false); //first register your custom script
		wp_enqueue_script('swfobject'); // then let wp insert it for you or just delete this and add it directly to your template
		// just in case your also interested
	}
}
add_action( 'wp_print_scripts', 'mmils'); // now just run the function

function eurojackpot() {
if ( is_page('eurojackpot') ) { // this if statement will insure the following code only gets added to your wp site and not the admin page cause your code has no business in the admin page right unless that's your intentions
	// jquery
		wp_deregister_script('jquery'); // this deregisters the current jquery included in wordpress
		wp_register_script('jquery', ("http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"), false); // this registers the replacement jquery
		wp_enqueue_script('jquery'); // you can either let wp insert this for you or just delete this and add it directly to your template
	// your own script
		wp_register_script('yourscript', ( get_bloginfo('template_url') . 'assets/js/functions-eurojackpot.js'), false); //first register your custom script
		wp_enqueue_script('swfobject'); // then let wp insert it for you or just delete this and add it directly to your template
        // just in case your also interested
	}
}
add_action( 'wp_print_scripts', 'eurojackpot'); // now just run the function

function euromillionScripts() {
if ( is_page('euromillion-ticket') ) { // this if statement will insure the following code only gets added to your wp site and not the admin page cause your code has no business in the admin page right unless that's your intentions
	// jquery
		wp_deregister_script('jquery'); // this deregisters the current jquery included in wordpress
		wp_register_script('jquery', ("http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"), false); // this registers the replacement jquery
		wp_enqueue_script('jquery'); // you can either let wp insert this for you or just delete this and add it directly to your template
	// your own script
		wp_register_script('yourscript', ( get_bloginfo('template_url') . 'assets/js/functions-euromillions.js'), false); //first register your custom script
		wp_enqueue_script('swfobject'); // then let wp insert it for you or just delete this and add it directly to your template
        // just in case your also interested
	}
}
add_action( 'wp_print_scripts', 'euromillionScripts'); // now just run the function

function lotto649() {
if ( is_page('lotto-649-ticket') ) { // this if statement will insure the following code only gets added to your wp site and not the admin page cause your code has no business in the admin page right unless that's your intentions
	// jquery
		wp_deregister_script('jquery'); // this deregisters the current jquery included in wordpress
		wp_register_script('jquery', ("http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"), false); // this registers the replacement jquery
		wp_enqueue_script('jquery'); // you can either let wp insert this for you or just delete this and add it directly to your template
	// your own script
		wp_register_script('yourscript', ( get_bloginfo('template_url') . 'assets/js/functions-lotto649.js'), false); //first register your custom script
		wp_enqueue_script('swfobject'); // then let wp insert it for you or just delete this and add it directly to your template
        // just in case your also interested
	}
}
add_action( 'wp_print_scripts', 'lotto649'); // now just run the function

function bonnolottoScripts() {
if ( is_page('bonnolotto-ticket') ) { // this if statement will insure the following code only gets added to your wp site and not the admin page cause your code has no business in the admin page right unless that's your intentions
	// jquery
		wp_deregister_script('jquery'); // this deregisters the current jquery included in wordpress
		wp_register_script('jquery', ("http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"), false); // this registers the replacement jquery
		wp_enqueue_script('jquery'); // you can either let wp insert this for you or just delete this and add it directly to your template
	// your own script
		wp_register_script('yourscript', ( get_bloginfo('template_url') . 'assets/js/functions-bonnolotto.js'), false); //first register your custom script
		wp_enqueue_script('swfobject'); // then let wp insert it for you or just delete this and add it directly to your template
        // just in case your also interested
	}
}
add_action( 'wp_print_scripts', 'bonnolottoScripts'); // now just run the function

function elGordoScripts() {
if ( is_page('el-gordo-ticket') ) { // this if statement will insure the following code only gets added to your wp site and not the admin page cause your code has no business in the admin page right unless that's your intentions
	// jquery
		wp_deregister_script('jquery'); // this deregisters the current jquery included in wordpress
		wp_register_script('jquery', ("http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"), false); // this registers the replacement jquery
		wp_enqueue_script('jquery'); // you can either let wp insert this for you or just delete this and add it directly to your template
	// your own script
		wp_register_script('yourscript', ( get_bloginfo('template_url') . 'assets/js/funtions-elgordo.js'), false); //first register your custom script
		wp_enqueue_script('swfobject'); // then let wp insert it for you or just delete this and add it directly to your template
        // just in case your also interested
	}
}
add_action( 'wp_print_scripts', 'elGordoScripts'); // now just run the function

function laPrimitivaScripts() {
if ( is_page('la-primitiva-ticket') ) { // this if statement will insure the following code only gets added to your wp site and not the admin page cause your code has no business in the admin page right unless that's your intentions
	// jquery
		wp_deregister_script('jquery'); // this deregisters the current jquery included in wordpress
		wp_register_script('jquery', ("http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"), false); // this registers the replacement jquery
		wp_enqueue_script('jquery'); // you can either let wp insert this for you or just delete this and add it directly to your template
	// your own script
		wp_register_script('yourscript', ( get_bloginfo('template_url') . 'assets/js/funtions-laprimitiva.js'), false); //first register your custom script
		wp_enqueue_script('swfobject'); // then let wp insert it for you or just delete this and add it directly to your template
        // just in case your also interested
	}
}
add_action( 'wp_print_scripts', 'laPrimitivaScripts'); // now just run the function

function newYorkLottoScripts() {
if ( is_page('new-york-lotto-ticket') ) { // this if statement will insure the following code only gets added to your wp site and not the admin page cause your code has no business in the admin page right unless that's your intentions
	// jquery
		wp_deregister_script('jquery'); // this deregisters the current jquery included in wordpress
		wp_register_script('jquery', ("http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"), false); // this registers the replacement jquery
		wp_enqueue_script('jquery'); // you can either let wp insert this for you or just delete this and add it directly to your template
	// your own script
		wp_register_script('yourscript', ( get_bloginfo('template_url') . 'assets/js/funtions-newyork.js'), false); //first register your custom script
		wp_enqueue_script('swfobject'); // then let wp insert it for you or just delete this and add it directly to your template
        // just in case your also interested
	}
}
add_action( 'wp_print_scripts', 'newYorkLottoScripts'); // now just run the function

function superenaScripts() {
if ( is_page('superena-ticket') ) { // this if statement will insure the following code only gets added to your wp site and not the admin page cause your code has no business in the admin page right unless that's your intentions
	// jquery
		wp_deregister_script('jquery'); // this deregisters the current jquery included in wordpress
		wp_register_script('jquery', ("http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"), false); // this registers the replacement jquery
		wp_enqueue_script('jquery'); // you can either let wp insert this for you or just delete this and add it directly to your template
	// your own script
		wp_register_script('yourscript', ( get_bloginfo('template_url') . 'assets/js/funtions-superena.js'), false); //first register your custom script
		wp_enqueue_script('swfobject'); // then let wp insert it for you or just delete this and add it directly to your template
        // just in case your also interested
	}
}
add_action( 'wp_print_scripts', 'superenaScripts'); // now just run the function

function ukLottoScripts() {
if ( is_page('uk-lotto-ticket') ) { // this if statement will insure the following code only gets added to your wp site and not the admin page cause your code has no business in the admin page right unless that's your intentions
	// jquery
		wp_deregister_script('jquery'); // this deregisters the current jquery included in wordpress
		wp_register_script('jquery', ("http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"), false); // this registers the replacement jquery
		wp_enqueue_script('jquery'); // you can either let wp insert this for you or just delete this and add it directly to your template
	// your own script
		wp_register_script('yourscript', ( get_bloginfo('template_url') . 'assets/js/funtions-uklotto.js'), false); //first register your custom script
		wp_enqueue_script('swfobject'); // then let wp insert it for you or just delete this and add it directly to your template
        // just in case your also interested
	}
}
add_action( 'wp_print_scripts', 'ukLottoScripts'); // now just run the function

function countDownScripts() {
	if ( is_page('home') ) { // this if statement will insure the following code only gets added to your wp site and not the admin page cause your code has no business in the admin page right unless that's your intentions
		// jquery
		wp_deregister_script('jquery'); // this deregisters the current jquery included in wordpress
		wp_register_script('jquery', ("http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"), false); // this registers the replacement jquery
		wp_enqueue_script('jquery'); // you can either let wp insert this for you or just delete this and add it directly to your template
		// your own script
		wp_register_script('yourscript', ( get_bloginfo('template_url') . 'assets/js/jquery.countdown.js'), false); //first register your custom script
		wp_enqueue_script('swfobject'); // then let wp insert it for you or just delete this and add it directly to your template
		// just in case your also interested
	}
}
add_action( 'wp_print_scripts', 'countDownScripts'); // now just run the function





/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/inc/jetpack.php';


/* Custom Functions */