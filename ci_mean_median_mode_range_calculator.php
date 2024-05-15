<?php
/*
Plugin Name: CI Mean median mode range calculator
Plugin URI: https://www.calculator.io/mean-median-mode-range-calculator/
Description: The Mean, Median, Mode, and Range calculator helps you find these statistics quickly and conveniently. Learn how to use this calculator's output by reading this article.
Version: 1.0.0
Author: Mean, Median, Mode, Range Calculator / www.calculator.io
Author URI: https://www.calculator.io/
License: GPLv2 or later
Text Domain: ci_mean_median_mode_range_calculator
*/

if (!defined('ABSPATH')) exit;

if (!function_exists('add_shortcode')) return "No direct call for Mean, Median, Mode, Range Calculator by www.calculator.io";

function display_calcio_ci_mean_median_mode_range_calculator(){
    $page = 'index.html';
    return '<h2><img src="' . esc_url(plugins_url('assets/images/icon-48.png', __FILE__ )) . '" width="48" height="48">Mean, Median, Mode, Range Calculator</h2><div><iframe style="background:transparent; overflow: scroll" src="' . esc_url(plugins_url($page, __FILE__ )) . '" width="100%" frameBorder="0" allowtransparency="true" onload="this.style.height = this.contentWindow.document.documentElement.scrollHeight + \'px\';" id="ci_mean_median_mode_range_calculator_iframe"></iframe></div>';
}


add_shortcode( 'ci_mean_median_mode_range_calculator', 'display_calcio_ci_mean_median_mode_range_calculator' );