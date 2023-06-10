<?php
/*
Plugin Name: Mean, Median, Mode, Range Calculator by Calculator.iO
Plugin URI: https://www.calculator.io/mean-median-mode-range-calculator/
Description: The Mean, Median, Mode, and Range calculator helps you find these statistics quickly and conveniently. Learn how to use this calculator's output by reading this article.
Version: 1.0.0
Author: Calculator.io
Author URI: https://www.calculator.io/
License: GPLv2 or later
Text Domain: ci_mean_median_mode_range_calculator
*/

if (!function_exists('add_shortcode')) die("No direct call");

function display_ci_mean_median_mode_range_calculator(){
    $page = 'index.html';
    return '<h2><a href="https://www.calculator.io/mean-median-mode-range-calculator/" target="_blank"><img src="' . plugins_url('assets/images/icon-48.png', __FILE__ ) . '" width="48" height="48"></a> Mean, Median, Mode, Range Calculator</h2><div><iframe style="background:transparent; overflow: scroll" src="' . plugins_url($page, __FILE__ ) . '" width="100%" frameBorder="0" allowtransparency="true" onload="this.style.height = this.contentWindow.document.documentElement.scrollHeight + \'px\';" id="ci_mean_median_mode_range_calculator_iframe"></iframe></div>';
}

add_shortcode( 'ci_mean_median_mode_range_calculator', 'display_ci_mean_median_mode_range_calculator' );