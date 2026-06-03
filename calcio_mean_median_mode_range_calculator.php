<?php
/*
Plugin Name: Mean, Median, Mode, Range Calculator by Calculator.iO
Plugin URI: https://www.calculator.io/mean-median-mode-range-calculator/
Description: Instantly calculate the mean, median, mode, and range of any data set. Our free statistics calculator makes finding central tendency fast, easy, and accurate!
Version: 1.0.0
Author: www.calculator.io / Mean, Median, Mode, Range Calculator
Author URI: https://www.calculator.io/
License: GPLv2 or later
Text Domain: calcio_mean_median_mode_range_calculator
*/

if (!defined('ABSPATH')) exit;

if (!function_exists('add_shortcode')) return "No direct call for Mean, Median, Mode, Range Calculator by www.calculator.io";

function calcio_mean_median_mode_range_calculator_shortcode(){
    $page = 'index.html';
    return '<h2><img src="' . esc_url(plugins_url('assets/images/icon-48.png', __FILE__ )) . '" width="48" height="48">Mean, Median, Mode, Range Calculator</h2><div><iframe style="background:transparent; overflow: scroll" src="' . esc_url(plugins_url($page, __FILE__ )) . '" width="100%" frameBorder="0" allowtransparency="true" onload="this.style.height = this.contentWindow.document.documentElement.scrollHeight + \'px\';" id="calcio_mean_median_mode_range_calculator_iframe"></iframe></div>';
}


add_shortcode( 'calcio_mean_median_mode_range_calculator', 'calcio_mean_median_mode_range_calculator_shortcode' );