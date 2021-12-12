(self["webpackChunk"] = self["webpackChunk"] || []).push([["demo"],{

/***/ "./public/assets/js/demo.js":
/*!**********************************!*\
  !*** ./public/assets/js/demo.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

/**
 * AdminLTE Demo Menu
 * ------------------
 * You should not use this file in production.
 * This file is for demo purposes only.
 */

/* eslint-disable camelcase */
(function ($) {
  'use strict';

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function createSkinBlock(colors, callback, noneSelected) {
    var $block = $('<select />', {
      "class": noneSelected ? 'custom-select mb-3 border-0' : 'custom-select mb-3 text-light border-0 ' + colors[0].replace(/accent-|navbar-/, 'bg-')
    });

    if (noneSelected) {
      var $default = $('<option />', {
        text: 'None Selected'
      });

      if (callback) {
        $default.on('click', callback);
      }

      $block.append($default);
    }

    colors.forEach(function (color) {
      var $color = $('<option />', {
        "class": (_typeof(color) === 'object' ? color.join(' ') : color).replace('navbar-', 'bg-').replace('accent-', 'bg-'),
        text: capitalizeFirstLetter((_typeof(color) === 'object' ? color.join(' ') : color).replace(/navbar-|accent-|bg-/, '').replace('-', ' '))
      });
      $block.append($color);
      $color.data('color', color);

      if (callback) {
        $color.on('click', callback);
      }
    });
    return $block;
  }

  var $sidebar = $('.control-sidebar');
  var $container = $('<div />', {
    "class": 'p-3 control-sidebar-content'
  });
  $sidebar.append($container); // Checkboxes

  $container.append('<h5>Customize AdminLTE</h5><hr class="mb-2"/>');
  var $dark_mode_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('body').hasClass('dark-mode'),
    "class": 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('body').addClass('dark-mode');
    } else {
      $('body').removeClass('dark-mode');
    }
  });
  var $dark_mode_container = $('<div />', {
    "class": 'mb-4'
  }).append($dark_mode_checkbox).append('<span>Dark Mode</span>');
  $container.append($dark_mode_container);
  $container.append('<h6>Header Options</h6>');
  var $header_fixed_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('body').hasClass('layout-navbar-fixed'),
    "class": 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('body').addClass('layout-navbar-fixed');
    } else {
      $('body').removeClass('layout-navbar-fixed');
    }
  });
  var $header_fixed_container = $('<div />', {
    "class": 'mb-1'
  }).append($header_fixed_checkbox).append('<span>Fixed</span>');
  $container.append($header_fixed_container);
  var $dropdown_legacy_offset_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.main-header').hasClass('dropdown-legacy'),
    "class": 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-header').addClass('dropdown-legacy');
    } else {
      $('.main-header').removeClass('dropdown-legacy');
    }
  });
  var $dropdown_legacy_offset_container = $('<div />', {
    "class": 'mb-1'
  }).append($dropdown_legacy_offset_checkbox).append('<span>Dropdown Legacy Offset</span>');
  $container.append($dropdown_legacy_offset_container);
  var $no_border_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.main-header').hasClass('border-bottom-0'),
    "class": 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-header').addClass('border-bottom-0');
    } else {
      $('.main-header').removeClass('border-bottom-0');
    }
  });
  var $no_border_container = $('<div />', {
    "class": 'mb-4'
  }).append($no_border_checkbox).append('<span>No border</span>');
  $container.append($no_border_container);
  $container.append('<h6>Sidebar Options</h6>');
  var $sidebar_collapsed_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('body').hasClass('sidebar-collapse'),
    "class": 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('body').addClass('sidebar-collapse');
      $(window).trigger('resize');
    } else {
      $('body').removeClass('sidebar-collapse');
      $(window).trigger('resize');
    }
  });
  var $sidebar_collapsed_container = $('<div />', {
    "class": 'mb-1'
  }).append($sidebar_collapsed_checkbox).append('<span>Collapsed</span>');
  $container.append($sidebar_collapsed_container);
  $(document).on('collapsed.lte.pushmenu', '[data-widget="pushmenu"]', function () {
    $sidebar_collapsed_checkbox.prop('checked', true);
  });
  $(document).on('shown.lte.pushmenu', '[data-widget="pushmenu"]', function () {
    $sidebar_collapsed_checkbox.prop('checked', false);
  });
  var $sidebar_fixed_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('body').hasClass('layout-fixed'),
    "class": 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('body').addClass('layout-fixed');
      $(window).trigger('resize');
    } else {
      $('body').removeClass('layout-fixed');
      $(window).trigger('resize');
    }
  });
  var $sidebar_fixed_container = $('<div />', {
    "class": 'mb-1'
  }).append($sidebar_fixed_checkbox).append('<span>Fixed</span>');
  $container.append($sidebar_fixed_container);
  var $sidebar_mini_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('body').hasClass('sidebar-mini'),
    "class": 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('body').addClass('sidebar-mini');
    } else {
      $('body').removeClass('sidebar-mini');
    }
  });
  var $sidebar_mini_container = $('<div />', {
    "class": 'mb-1'
  }).append($sidebar_mini_checkbox).append('<span>Sidebar Mini</span>');
  $container.append($sidebar_mini_container);
  var $sidebar_mini_md_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('body').hasClass('sidebar-mini-md'),
    "class": 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('body').addClass('sidebar-mini-md');
    } else {
      $('body').removeClass('sidebar-mini-md');
    }
  });
  var $sidebar_mini_md_container = $('<div />', {
    "class": 'mb-1'
  }).append($sidebar_mini_md_checkbox).append('<span>Sidebar Mini MD</span>');
  $container.append($sidebar_mini_md_container);
  var $sidebar_mini_xs_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('body').hasClass('sidebar-mini-xs'),
    "class": 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('body').addClass('sidebar-mini-xs');
    } else {
      $('body').removeClass('sidebar-mini-xs');
    }
  });
  var $sidebar_mini_xs_container = $('<div />', {
    "class": 'mb-1'
  }).append($sidebar_mini_xs_checkbox).append('<span>Sidebar Mini XS</span>');
  $container.append($sidebar_mini_xs_container);
  var $flat_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasClass('nav-flat'),
    "class": 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('nav-flat');
    } else {
      $('.nav-sidebar').removeClass('nav-flat');
    }
  });
  var $flat_sidebar_container = $('<div />', {
    "class": 'mb-1'
  }).append($flat_sidebar_checkbox).append('<span>Nav Flat Style</span>');
  $container.append($flat_sidebar_container);
  var $legacy_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasClass('nav-legacy'),
    "class": 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('nav-legacy');
    } else {
      $('.nav-sidebar').removeClass('nav-legacy');
    }
  });
  var $legacy_sidebar_container = $('<div />', {
    "class": 'mb-1'
  }).append($legacy_sidebar_checkbox).append('<span>Nav Legacy Style</span>');
  $container.append($legacy_sidebar_container);
  var $compact_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasClass('nav-compact'),
    "class": 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('nav-compact');
    } else {
      $('.nav-sidebar').removeClass('nav-compact');
    }
  });
  var $compact_sidebar_container = $('<div />', {
    "class": 'mb-1'
  }).append($compact_sidebar_checkbox).append('<span>Nav Compact</span>');
  $container.append($compact_sidebar_container);
  var $child_indent_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasClass('nav-child-indent'),
    "class": 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('nav-child-indent');
    } else {
      $('.nav-sidebar').removeClass('nav-child-indent');
    }
  });
  var $child_indent_sidebar_container = $('<div />', {
    "class": 'mb-1'
  }).append($child_indent_sidebar_checkbox).append('<span>Nav Child Indent</span>');
  $container.append($child_indent_sidebar_container);
  var $child_hide_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasClass('nav-collapse-hide-child'),
    "class": 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('nav-collapse-hide-child');
    } else {
      $('.nav-sidebar').removeClass('nav-collapse-hide-child');
    }
  });
  var $child_hide_sidebar_container = $('<div />', {
    "class": 'mb-1'
  }).append($child_hide_sidebar_checkbox).append('<span>Nav Child Hide on Collapse</span>');
  $container.append($child_hide_sidebar_container);
  var $no_expand_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.main-sidebar').hasClass('sidebar-no-expand'),
    "class": 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-sidebar').addClass('sidebar-no-expand');
    } else {
      $('.main-sidebar').removeClass('sidebar-no-expand');
    }
  });
  var $no_expand_sidebar_container = $('<div />', {
    "class": 'mb-4'
  }).append($no_expand_sidebar_checkbox).append('<span>Disable Hover/Focus Auto-Expand</span>');
  $container.append($no_expand_sidebar_container);
  $container.append('<h6>Footer Options</h6>');
  var $footer_fixed_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('body').hasClass('layout-footer-fixed'),
    "class": 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('body').addClass('layout-footer-fixed');
    } else {
      $('body').removeClass('layout-footer-fixed');
    }
  });
  var $footer_fixed_container = $('<div />', {
    "class": 'mb-4'
  }).append($footer_fixed_checkbox).append('<span>Fixed</span>');
  $container.append($footer_fixed_container);
  $container.append('<h6>Small Text Options</h6>');
  var $text_sm_body_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('body').hasClass('text-sm'),
    "class": 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('body').addClass('text-sm');
    } else {
      $('body').removeClass('text-sm');
    }
  });
  var $text_sm_body_container = $('<div />', {
    "class": 'mb-1'
  }).append($text_sm_body_checkbox).append('<span>Body</span>');
  $container.append($text_sm_body_container);
  var $text_sm_header_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.main-header').hasClass('text-sm'),
    "class": 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-header').addClass('text-sm');
    } else {
      $('.main-header').removeClass('text-sm');
    }
  });
  var $text_sm_header_container = $('<div />', {
    "class": 'mb-1'
  }).append($text_sm_header_checkbox).append('<span>Navbar</span>');
  $container.append($text_sm_header_container);
  var $text_sm_brand_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.brand-link').hasClass('text-sm'),
    "class": 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.brand-link').addClass('text-sm');
    } else {
      $('.brand-link').removeClass('text-sm');
    }
  });
  var $text_sm_brand_container = $('<div />', {
    "class": 'mb-1'
  }).append($text_sm_brand_checkbox).append('<span>Brand</span>');
  $container.append($text_sm_brand_container);
  var $text_sm_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasClass('text-sm'),
    "class": 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('text-sm');
    } else {
      $('.nav-sidebar').removeClass('text-sm');
    }
  });
  var $text_sm_sidebar_container = $('<div />', {
    "class": 'mb-1'
  }).append($text_sm_sidebar_checkbox).append('<span>Sidebar Nav</span>');
  $container.append($text_sm_sidebar_container);
  var $text_sm_footer_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.main-footer').hasClass('text-sm'),
    "class": 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-footer').addClass('text-sm');
    } else {
      $('.main-footer').removeClass('text-sm');
    }
  });
  var $text_sm_footer_container = $('<div />', {
    "class": 'mb-4'
  }).append($text_sm_footer_checkbox).append('<span>Footer</span>');
  $container.append($text_sm_footer_container); // Color Arrays

  var navbar_dark_skins = ['navbar-primary', 'navbar-secondary', 'navbar-info', 'navbar-success', 'navbar-danger', 'navbar-indigo', 'navbar-purple', 'navbar-pink', 'navbar-navy', 'navbar-lightblue', 'navbar-teal', 'navbar-cyan', 'navbar-dark', 'navbar-gray-dark', 'navbar-gray'];
  var navbar_light_skins = ['navbar-light', 'navbar-warning', 'navbar-white', 'navbar-orange'];
  var sidebar_colors = ['bg-primary', 'bg-warning', 'bg-info', 'bg-danger', 'bg-success', 'bg-indigo', 'bg-lightblue', 'bg-navy', 'bg-purple', 'bg-fuchsia', 'bg-pink', 'bg-maroon', 'bg-orange', 'bg-lime', 'bg-teal', 'bg-olive'];
  var accent_colors = ['accent-primary', 'accent-warning', 'accent-info', 'accent-danger', 'accent-success', 'accent-indigo', 'accent-lightblue', 'accent-navy', 'accent-purple', 'accent-fuchsia', 'accent-pink', 'accent-maroon', 'accent-orange', 'accent-lime', 'accent-teal', 'accent-olive'];
  var sidebar_skins = ['sidebar-dark-primary', 'sidebar-dark-warning', 'sidebar-dark-info', 'sidebar-dark-danger', 'sidebar-dark-success', 'sidebar-dark-indigo', 'sidebar-dark-lightblue', 'sidebar-dark-navy', 'sidebar-dark-purple', 'sidebar-dark-fuchsia', 'sidebar-dark-pink', 'sidebar-dark-maroon', 'sidebar-dark-orange', 'sidebar-dark-lime', 'sidebar-dark-teal', 'sidebar-dark-olive', 'sidebar-light-primary', 'sidebar-light-warning', 'sidebar-light-info', 'sidebar-light-danger', 'sidebar-light-success', 'sidebar-light-indigo', 'sidebar-light-lightblue', 'sidebar-light-navy', 'sidebar-light-purple', 'sidebar-light-fuchsia', 'sidebar-light-pink', 'sidebar-light-maroon', 'sidebar-light-orange', 'sidebar-light-lime', 'sidebar-light-teal', 'sidebar-light-olive']; // Navbar Variants

  $container.append('<h6>Navbar Variants</h6>');
  var $navbar_variants = $('<div />', {
    "class": 'd-flex'
  });
  var navbar_all_colors = navbar_dark_skins.concat(navbar_light_skins);
  var $navbar_variants_colors = createSkinBlock(navbar_all_colors, function () {
    var color = $(this).data('color');
    var $main_header = $('.main-header');
    $main_header.removeClass('navbar-dark').removeClass('navbar-light');
    navbar_all_colors.forEach(function (color) {
      $main_header.removeClass(color);
    });
    $(this).parent().removeClass().addClass('custom-select mb-3 text-light border-0 ');

    if (navbar_dark_skins.indexOf(color) > -1) {
      $main_header.addClass('navbar-dark');
      $(this).parent().addClass(color).addClass('text-light');
    } else {
      $main_header.addClass('navbar-light');
      $(this).parent().addClass(color);
    }

    $main_header.addClass(color);
  });
  var active_navbar_color = null;
  $('.main-header')[0].classList.forEach(function (className) {
    if (navbar_all_colors.indexOf(className) > -1 && active_navbar_color === null) {
      active_navbar_color = className.replace('navbar-', 'bg-');
    }
  });
  $navbar_variants_colors.find('option.' + active_navbar_color).prop('selected', true);
  $navbar_variants_colors.removeClass().addClass('custom-select mb-3 text-light border-0 ').addClass(active_navbar_color);
  $navbar_variants.append($navbar_variants_colors);
  $container.append($navbar_variants); // Sidebar Colors

  $container.append('<h6>Accent Color Variants</h6>');
  var $accent_variants = $('<div />', {
    "class": 'd-flex'
  });
  $container.append($accent_variants);
  $container.append(createSkinBlock(accent_colors, function () {
    var color = $(this).data('color');
    var accent_class = color;
    var $body = $('body');
    accent_colors.forEach(function (skin) {
      $body.removeClass(skin);
    });
    $body.addClass(accent_class);
  }, true));
  var active_accent_color = null;
  $('body')[0].classList.forEach(function (className) {
    if (accent_colors.indexOf(className) > -1 && active_accent_color === null) {
      active_accent_color = className.replace('navbar-', 'bg-');
    }
  }); // $accent_variants.find('option.' + active_accent_color).prop('selected', true)
  // $accent_variants.removeClass().addClass('custom-select mb-3 text-light border-0 ').addClass(active_accent_color)

  $container.append('<h6>Dark Sidebar Variants</h6>');
  var $sidebar_variants_dark = $('<div />', {
    "class": 'd-flex'
  });
  $container.append($sidebar_variants_dark);
  var $sidebar_dark_variants = createSkinBlock(sidebar_colors, function () {
    var color = $(this).data('color');
    var sidebar_class = 'sidebar-dark-' + color.replace('bg-', '');
    var $sidebar = $('.main-sidebar');
    sidebar_skins.forEach(function (skin) {
      $sidebar.removeClass(skin);
      $sidebar_light_variants.removeClass(skin.replace('sidebar-dark-', 'bg-')).removeClass('text-light');
    });
    $(this).parent().removeClass().addClass('custom-select mb-3 text-light border-0').addClass(color);
    $sidebar_light_variants.find('option').prop('selected', false);
    $sidebar.addClass(sidebar_class);
    $('.sidebar').removeClass('os-theme-dark').addClass('os-theme-light');
  }, true);
  $container.append($sidebar_dark_variants);
  var active_sidebar_dark_color = null;
  $('.main-sidebar')[0].classList.forEach(function (className) {
    var color = className.replace('sidebar-dark-', 'bg-');

    if (sidebar_colors.indexOf(color) > -1 && active_sidebar_dark_color === null) {
      active_sidebar_dark_color = color;
    }
  });
  $sidebar_dark_variants.find('option.' + active_sidebar_dark_color).prop('selected', true);
  $sidebar_dark_variants.removeClass().addClass('custom-select mb-3 text-light border-0 ').addClass(active_sidebar_dark_color);
  $container.append('<h6>Light Sidebar Variants</h6>');
  var $sidebar_variants_light = $('<div />', {
    "class": 'd-flex'
  });
  $container.append($sidebar_variants_light);
  var $sidebar_light_variants = createSkinBlock(sidebar_colors, function () {
    var color = $(this).data('color');
    var sidebar_class = 'sidebar-light-' + color.replace('bg-', '');
    var $sidebar = $('.main-sidebar');
    sidebar_skins.forEach(function (skin) {
      $sidebar.removeClass(skin);
      $sidebar_dark_variants.removeClass(skin.replace('sidebar-light-', 'bg-')).removeClass('text-light');
    });
    $(this).parent().removeClass().addClass('custom-select mb-3 text-light border-0').addClass(color);
    $sidebar_dark_variants.find('option').prop('selected', false);
    $sidebar.addClass(sidebar_class);
    $('.sidebar').removeClass('os-theme-light').addClass('os-theme-dark');
  }, true);
  $container.append($sidebar_light_variants);
  var active_sidebar_light_color = null;
  $('.main-sidebar')[0].classList.forEach(function (className) {
    var color = className.replace('sidebar-light-', 'bg-');

    if (sidebar_colors.indexOf(color) > -1 && active_sidebar_light_color === null) {
      active_sidebar_light_color = color;
    }
  });

  if (active_sidebar_light_color !== null) {
    $sidebar_light_variants.find('option.' + active_sidebar_light_color).prop('selected', true);
    $sidebar_light_variants.removeClass().addClass('custom-select mb-3 text-light border-0 ').addClass(active_sidebar_light_color);
  }

  var logo_skins = navbar_all_colors;
  $container.append('<h6>Brand Logo Variants</h6>');
  var $logo_variants = $('<div />', {
    "class": 'd-flex'
  });
  $container.append($logo_variants);
  var $clear_btn = $('<a />', {
    href: '#'
  }).text('clear').on('click', function (e) {
    e.preventDefault();
    var $logo = $('.brand-link');
    logo_skins.forEach(function (skin) {
      $logo.removeClass(skin);
    });
  });
  var $brand_variants = createSkinBlock(logo_skins, function () {
    var color = $(this).data('color');
    var $logo = $('.brand-link');

    if (color === 'navbar-light' || color === 'navbar-white') {
      $logo.addClass('text-black');
    } else {
      $logo.removeClass('text-black');
    }

    logo_skins.forEach(function (skin) {
      $logo.removeClass(skin);
    });

    if (color) {
      $(this).parent().removeClass().addClass('custom-select mb-3 border-0').addClass(color).addClass(color !== 'navbar-light' && color !== 'navbar-white' ? 'text-light' : '');
    } else {
      $(this).parent().removeClass().addClass('custom-select mb-3 border-0');
    }

    $logo.addClass(color);
  }, true).append($clear_btn);
  $container.append($brand_variants);
  var active_brand_color = null;
  $('.brand-link')[0].classList.forEach(function (className) {
    if (logo_skins.indexOf(className) > -1 && active_brand_color === null) {
      active_brand_color = className.replace('navbar-', 'bg-');
    }
  });

  if (active_brand_color) {
    $brand_variants.find('option.' + active_brand_color).prop('selected', true);
    $brand_variants.removeClass().addClass('custom-select mb-3 text-light border-0 ').addClass(active_brand_color);
  }
})(jQuery);

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.index-of.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.index-of.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable es/no-array-prototype-indexof -- required for testing */
var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.join.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.join.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var nativeJoin = [].join;

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-6ea37d"], () => (__webpack_exec__("./public/assets/js/demo.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2pzL2RlbW8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pbmRleC1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmpvaW4uanMiXSwibmFtZXMiOlsiJCIsImNhcGl0YWxpemVGaXJzdExldHRlciIsInN0cmluZyIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJjcmVhdGVTa2luQmxvY2siLCJjb2xvcnMiLCJjYWxsYmFjayIsIm5vbmVTZWxlY3RlZCIsIiRibG9jayIsInJlcGxhY2UiLCIkZGVmYXVsdCIsInRleHQiLCJvbiIsImFwcGVuZCIsImZvckVhY2giLCJjb2xvciIsIiRjb2xvciIsImpvaW4iLCJkYXRhIiwiJHNpZGViYXIiLCIkY29udGFpbmVyIiwiJGRhcmtfbW9kZV9jaGVja2JveCIsInR5cGUiLCJ2YWx1ZSIsImNoZWNrZWQiLCJoYXNDbGFzcyIsImlzIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsIiRkYXJrX21vZGVfY29udGFpbmVyIiwiJGhlYWRlcl9maXhlZF9jaGVja2JveCIsIiRoZWFkZXJfZml4ZWRfY29udGFpbmVyIiwiJGRyb3Bkb3duX2xlZ2FjeV9vZmZzZXRfY2hlY2tib3giLCIkZHJvcGRvd25fbGVnYWN5X29mZnNldF9jb250YWluZXIiLCIkbm9fYm9yZGVyX2NoZWNrYm94IiwiJG5vX2JvcmRlcl9jb250YWluZXIiLCIkc2lkZWJhcl9jb2xsYXBzZWRfY2hlY2tib3giLCJ3aW5kb3ciLCJ0cmlnZ2VyIiwiJHNpZGViYXJfY29sbGFwc2VkX2NvbnRhaW5lciIsImRvY3VtZW50IiwicHJvcCIsIiRzaWRlYmFyX2ZpeGVkX2NoZWNrYm94IiwiJHNpZGViYXJfZml4ZWRfY29udGFpbmVyIiwiJHNpZGViYXJfbWluaV9jaGVja2JveCIsIiRzaWRlYmFyX21pbmlfY29udGFpbmVyIiwiJHNpZGViYXJfbWluaV9tZF9jaGVja2JveCIsIiRzaWRlYmFyX21pbmlfbWRfY29udGFpbmVyIiwiJHNpZGViYXJfbWluaV94c19jaGVja2JveCIsIiRzaWRlYmFyX21pbmlfeHNfY29udGFpbmVyIiwiJGZsYXRfc2lkZWJhcl9jaGVja2JveCIsIiRmbGF0X3NpZGViYXJfY29udGFpbmVyIiwiJGxlZ2FjeV9zaWRlYmFyX2NoZWNrYm94IiwiJGxlZ2FjeV9zaWRlYmFyX2NvbnRhaW5lciIsIiRjb21wYWN0X3NpZGViYXJfY2hlY2tib3giLCIkY29tcGFjdF9zaWRlYmFyX2NvbnRhaW5lciIsIiRjaGlsZF9pbmRlbnRfc2lkZWJhcl9jaGVja2JveCIsIiRjaGlsZF9pbmRlbnRfc2lkZWJhcl9jb250YWluZXIiLCIkY2hpbGRfaGlkZV9zaWRlYmFyX2NoZWNrYm94IiwiJGNoaWxkX2hpZGVfc2lkZWJhcl9jb250YWluZXIiLCIkbm9fZXhwYW5kX3NpZGViYXJfY2hlY2tib3giLCIkbm9fZXhwYW5kX3NpZGViYXJfY29udGFpbmVyIiwiJGZvb3Rlcl9maXhlZF9jaGVja2JveCIsIiRmb290ZXJfZml4ZWRfY29udGFpbmVyIiwiJHRleHRfc21fYm9keV9jaGVja2JveCIsIiR0ZXh0X3NtX2JvZHlfY29udGFpbmVyIiwiJHRleHRfc21faGVhZGVyX2NoZWNrYm94IiwiJHRleHRfc21faGVhZGVyX2NvbnRhaW5lciIsIiR0ZXh0X3NtX2JyYW5kX2NoZWNrYm94IiwiJHRleHRfc21fYnJhbmRfY29udGFpbmVyIiwiJHRleHRfc21fc2lkZWJhcl9jaGVja2JveCIsIiR0ZXh0X3NtX3NpZGViYXJfY29udGFpbmVyIiwiJHRleHRfc21fZm9vdGVyX2NoZWNrYm94IiwiJHRleHRfc21fZm9vdGVyX2NvbnRhaW5lciIsIm5hdmJhcl9kYXJrX3NraW5zIiwibmF2YmFyX2xpZ2h0X3NraW5zIiwic2lkZWJhcl9jb2xvcnMiLCJhY2NlbnRfY29sb3JzIiwic2lkZWJhcl9za2lucyIsIiRuYXZiYXJfdmFyaWFudHMiLCJuYXZiYXJfYWxsX2NvbG9ycyIsImNvbmNhdCIsIiRuYXZiYXJfdmFyaWFudHNfY29sb3JzIiwiJG1haW5faGVhZGVyIiwicGFyZW50IiwiaW5kZXhPZiIsImFjdGl2ZV9uYXZiYXJfY29sb3IiLCJjbGFzc0xpc3QiLCJjbGFzc05hbWUiLCJmaW5kIiwiJGFjY2VudF92YXJpYW50cyIsImFjY2VudF9jbGFzcyIsIiRib2R5Iiwic2tpbiIsImFjdGl2ZV9hY2NlbnRfY29sb3IiLCIkc2lkZWJhcl92YXJpYW50c19kYXJrIiwiJHNpZGViYXJfZGFya192YXJpYW50cyIsInNpZGViYXJfY2xhc3MiLCIkc2lkZWJhcl9saWdodF92YXJpYW50cyIsImFjdGl2ZV9zaWRlYmFyX2RhcmtfY29sb3IiLCIkc2lkZWJhcl92YXJpYW50c19saWdodCIsImFjdGl2ZV9zaWRlYmFyX2xpZ2h0X2NvbG9yIiwibG9nb19za2lucyIsIiRsb2dvX3ZhcmlhbnRzIiwiJGNsZWFyX2J0biIsImhyZWYiLCJlIiwicHJldmVudERlZmF1bHQiLCIkbG9nbyIsIiRicmFuZF92YXJpYW50cyIsImFjdGl2ZV9icmFuZF9jb2xvciIsImpRdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBLENBQUMsVUFBVUEsQ0FBVixFQUFhO0FBQ1o7O0FBRUEsV0FBU0MscUJBQVQsQ0FBK0JDLE1BQS9CLEVBQXVDO0FBQ3JDLFdBQU9BLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLENBQWQsRUFBaUJDLFdBQWpCLEtBQWlDRixNQUFNLENBQUNHLEtBQVAsQ0FBYSxDQUFiLENBQXhDO0FBQ0Q7O0FBRUQsV0FBU0MsZUFBVCxDQUF5QkMsTUFBekIsRUFBaUNDLFFBQWpDLEVBQTJDQyxZQUEzQyxFQUF5RDtBQUN2RCxRQUFJQyxNQUFNLEdBQUdWLENBQUMsQ0FBQyxZQUFELEVBQWU7QUFDM0IsZUFB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S0FBSyxJQUFqRSxFQUF1RTtBQUNyRUEsd0JBQWtCLEdBQUd0QixTQUFTLENBQUMvRSxPQUFWLENBQWtCLFNBQWxCLEVBQTZCLEtBQTdCLENBQXJCO0FBQ0Q7QUFDRixHQUpEOztBQU1BLE1BQUlxRyxrQkFBSixFQUF3QjtBQUN0QkQsbUJBQWUsQ0FBQ3BCLElBQWhCLENBQXFCLFlBQVlxQixrQkFBakMsRUFBcURyRSxJQUFyRCxDQUEwRCxVQUExRCxFQUFzRSxJQUF0RTtBQUNBb0UsbUJBQWUsQ0FBQ2pGLFdBQWhCLEdBQThCRCxRQUE5QixDQUF1Qyx5Q0FBdkMsRUFBa0ZBLFFBQWxGLENBQTJGbUYsa0JBQTNGO0FBQ0Q7QUFDRixDQXBxQkQsRUFvcUJHQyxNQXBxQkgsRTs7Ozs7Ozs7Ozs7QUNUYTtBQUNiO0FBQ0EsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxlQUFlLG9IQUE4QztBQUM3RCwwQkFBMEIsbUJBQU8sQ0FBQyx1R0FBcUM7O0FBRXZFOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUcsd0VBQXdFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ3BCWTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsb0JBQW9CLG1CQUFPLENBQUMsdUZBQTZCO0FBQ3pELHNCQUFzQixtQkFBTyxDQUFDLDZGQUFnQztBQUM5RCwwQkFBMEIsbUJBQU8sQ0FBQyx1R0FBcUM7O0FBRXZFOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUcsc0VBQXNFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiZGVtby5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQWRtaW5MVEUgRGVtbyBNZW51XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFlvdSBzaG91bGQgbm90IHVzZSB0aGlzIGZpbGUgaW4gcHJvZHVjdGlvbi5cbiAqIFRoaXMgZmlsZSBpcyBmb3IgZGVtbyBwdXJwb3NlcyBvbmx5LlxuICovXG5cbi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuXG4oZnVuY3Rpb24gKCQpIHtcbiAgJ3VzZSBzdHJpY3QnXG5cbiAgZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNraW5CbG9jayhjb2xvcnMsIGNhbGxiYWNrLCBub25lU2VsZWN0ZWQpIHtcbiAgICB2YXIgJGJsb2NrID0gJCgnPHNlbGVjdCAvPicsIHtcbiAgICAgIGNsYXNzOiBub25lU2VsZWN0ZWQgPyAnY3VzdG9tLXNlbGVjdCBtYi0zIGJvcmRlci0wJyA6ICdjdXN0b20tc2VsZWN0IG1iLTMgdGV4dC1saWdodCBib3JkZXItMCAnICsgY29sb3JzWzBdLnJlcGxhY2UoL2FjY2VudC18bmF2YmFyLS8sICdiZy0nKVxuICAgIH0pXG5cbiAgICBpZiAobm9uZVNlbGVjdGVkKSB7XG4gICAgICB2YXIgJGRlZmF1bHQgPSAkKCc8b3B0aW9uIC8+Jywge1xuICAgICAgICB0ZXh0OiAnTm9uZSBTZWxlY3RlZCdcbiAgICAgIH0pXG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgJGRlZmF1bHQub24oJ2NsaWNrJywgY2FsbGJhY2spXG4gICAgICB9XG5cbiAgICAgICRibG9jay5hcHBlbmQoJGRlZmF1bHQpXG4gICAgfVxuXG4gICAgY29sb3JzLmZvckVhY2goZnVuY3Rpb24gKGNvbG9yKSB7XG4gICAgICB2YXIgJGNvbG9yID0gJCgnPG9wdGlvbiAvPicsIHtcbiAgICAgICAgY2xhc3M6ICh0eXBlb2YgY29sb3IgPT09ICdvYmplY3QnID8gY29sb3Iuam9pbignICcpIDogY29sb3IpLnJlcGxhY2UoJ25hdmJhci0nLCAnYmctJykucmVwbGFjZSgnYWNjZW50LScsICdiZy0nKSxcbiAgICAgICAgdGV4dDogY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKCh0eXBlb2YgY29sb3IgPT09ICdvYmplY3QnID8gY29sb3Iuam9pbignICcpIDogY29sb3IpLnJlcGxhY2UoL25hdmJhci18YWNjZW50LXxiZy0vLCAnJykucmVwbGFjZSgnLScsICcgJykpXG4gICAgICB9KVxuXG4gICAgICAkYmxvY2suYXBwZW5kKCRjb2xvcilcblxuICAgICAgJGNvbG9yLmRhdGEoJ2NvbG9yJywgY29sb3IpXG5cbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAkY29sb3Iub24oJ2NsaWNrJywgY2FsbGJhY2spXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiAkYmxvY2tcbiAgfVxuXG4gIHZhciAkc2lkZWJhciA9ICQoJy5jb250cm9sLXNpZGViYXInKVxuICB2YXIgJGNvbnRhaW5lciA9ICQoJzxkaXYgLz4nLCB7XG4gICAgY2xhc3M6ICdwLTMgY29udHJvbC1zaWRlYmFyLWNvbnRlbnQnXG4gIH0pXG5cbiAgJHNpZGViYXIuYXBwZW5kKCRjb250YWluZXIpXG5cbiAgLy8gQ2hlY2tib3hlc1xuXG4gICRjb250YWluZXIuYXBwZW5kKFxuICAgICc8aDU+Q3VzdG9taXplIEFkbWluTFRFPC9oNT48aHIgY2xhc3M9XCJtYi0yXCIvPidcbiAgKVxuXG4gIHZhciAkZGFya19tb2RlX2NoZWNrYm94ID0gJCgnPGlucHV0IC8+Jywge1xuICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgdmFsdWU6IDEsXG4gICAgY2hlY2tlZDogJCgnYm9keScpLmhhc0NsYXNzKCdkYXJrLW1vZGUnKSxcbiAgICBjbGFzczogJ21yLTEnXG4gIH0pLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdkYXJrLW1vZGUnKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2RhcmstbW9kZScpXG4gICAgfVxuICB9KVxuICB2YXIgJGRhcmtfbW9kZV9jb250YWluZXIgPSAkKCc8ZGl2IC8+JywgeyBjbGFzczogJ21iLTQnIH0pLmFwcGVuZCgkZGFya19tb2RlX2NoZWNrYm94KS5hcHBlbmQoJzxzcGFuPkRhcmsgTW9kZTwvc3Bhbj4nKVxuICAkY29udGFpbmVyLmFwcGVuZCgkZGFya19tb2RlX2NvbnRhaW5lcilcblxuICAkY29udGFpbmVyLmFwcGVuZCgnPGg2PkhlYWRlciBPcHRpb25zPC9oNj4nKVxuICB2YXIgJGhlYWRlcl9maXhlZF9jaGVja2JveCA9ICQoJzxpbnB1dCAvPicsIHtcbiAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgIHZhbHVlOiAxLFxuICAgIGNoZWNrZWQ6ICQoJ2JvZHknKS5oYXNDbGFzcygnbGF5b3V0LW5hdmJhci1maXhlZCcpLFxuICAgIGNsYXNzOiAnbXItMSdcbiAgfSkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2xheW91dC1uYXZiYXItZml4ZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2xheW91dC1uYXZiYXItZml4ZWQnKVxuICAgIH1cbiAgfSlcbiAgdmFyICRoZWFkZXJfZml4ZWRfY29udGFpbmVyID0gJCgnPGRpdiAvPicsIHsgY2xhc3M6ICdtYi0xJyB9KS5hcHBlbmQoJGhlYWRlcl9maXhlZF9jaGVja2JveCkuYXBwZW5kKCc8c3Bhbj5GaXhlZDwvc3Bhbj4nKVxuICAkY29udGFpbmVyLmFwcGVuZCgkaGVhZGVyX2ZpeGVkX2NvbnRhaW5lcilcblxuICB2YXIgJGRyb3Bkb3duX2xlZ2FjeV9vZmZzZXRfY2hlY2tib3ggPSAkKCc8aW5wdXQgLz4nLCB7XG4gICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICB2YWx1ZTogMSxcbiAgICBjaGVja2VkOiAkKCcubWFpbi1oZWFkZXInKS5oYXNDbGFzcygnZHJvcGRvd24tbGVnYWN5JyksXG4gICAgY2xhc3M6ICdtci0xJ1xuICB9KS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICQoJy5tYWluLWhlYWRlcicpLmFkZENsYXNzKCdkcm9wZG93bi1sZWdhY3knKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKCcubWFpbi1oZWFkZXInKS5yZW1vdmVDbGFzcygnZHJvcGRvd24tbGVnYWN5JylcbiAgICB9XG4gIH0pXG4gIHZhciAkZHJvcGRvd25fbGVnYWN5X29mZnNldF9jb250YWluZXIgPSAkKCc8ZGl2IC8+JywgeyBjbGFzczogJ21iLTEnIH0pLmFwcGVuZCgkZHJvcGRvd25fbGVnYWN5X29mZnNldF9jaGVja2JveCkuYXBwZW5kKCc8c3Bhbj5Ecm9wZG93biBMZWdhY3kgT2Zmc2V0PC9zcGFuPicpXG4gICRjb250YWluZXIuYXBwZW5kKCRkcm9wZG93bl9sZWdhY3lfb2Zmc2V0X2NvbnRhaW5lcilcblxuICB2YXIgJG5vX2JvcmRlcl9jaGVja2JveCA9ICQoJzxpbnB1dCAvPicsIHtcbiAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgIHZhbHVlOiAxLFxuICAgIGNoZWNrZWQ6ICQoJy5tYWluLWhlYWRlcicpLmhhc0NsYXNzKCdib3JkZXItYm90dG9tLTAnKSxcbiAgICBjbGFzczogJ21yLTEnXG4gIH0pLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgJCgnLm1haW4taGVhZGVyJykuYWRkQ2xhc3MoJ2JvcmRlci1ib3R0b20tMCcpXG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5tYWluLWhlYWRlcicpLnJlbW92ZUNsYXNzKCdib3JkZXItYm90dG9tLTAnKVxuICAgIH1cbiAgfSlcbiAgdmFyICRub19ib3JkZXJfY29udGFpbmVyID0gJCgnPGRpdiAvPicsIHsgY2xhc3M6ICdtYi00JyB9KS5hcHBlbmQoJG5vX2JvcmRlcl9jaGVja2JveCkuYXBwZW5kKCc8c3Bhbj5ObyBib3JkZXI8L3NwYW4+JylcbiAgJGNvbnRhaW5lci5hcHBlbmQoJG5vX2JvcmRlcl9jb250YWluZXIpXG5cbiAgJGNvbnRhaW5lci5hcHBlbmQoJzxoNj5TaWRlYmFyIE9wdGlvbnM8L2g2PicpXG5cbiAgdmFyICRzaWRlYmFyX2NvbGxhcHNlZF9jaGVja2JveCA9ICQoJzxpbnB1dCAvPicsIHtcbiAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgIHZhbHVlOiAxLFxuICAgIGNoZWNrZWQ6ICQoJ2JvZHknKS5oYXNDbGFzcygnc2lkZWJhci1jb2xsYXBzZScpLFxuICAgIGNsYXNzOiAnbXItMSdcbiAgfSkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ3NpZGViYXItY29sbGFwc2UnKVxuICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3Jlc2l6ZScpXG4gICAgfSBlbHNlIHtcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnc2lkZWJhci1jb2xsYXBzZScpXG4gICAgICAkKHdpbmRvdykudHJpZ2dlcigncmVzaXplJylcbiAgICB9XG4gIH0pXG4gIHZhciAkc2lkZWJhcl9jb2xsYXBzZWRfY29udGFpbmVyID0gJCgnPGRpdiAvPicsIHsgY2xhc3M6ICdtYi0xJyB9KS5hcHBlbmQoJHNpZGViYXJfY29sbGFwc2VkX2NoZWNrYm94KS5hcHBlbmQoJzxzcGFuPkNvbGxhcHNlZDwvc3Bhbj4nKVxuICAkY29udGFpbmVyLmFwcGVuZCgkc2lkZWJhcl9jb2xsYXBzZWRfY29udGFpbmVyKVxuXG4gICQoZG9jdW1lbnQpLm9uKCdjb2xsYXBzZWQubHRlLnB1c2htZW51JywgJ1tkYXRhLXdpZGdldD1cInB1c2htZW51XCJdJywgZnVuY3Rpb24gKCkge1xuICAgICRzaWRlYmFyX2NvbGxhcHNlZF9jaGVja2JveC5wcm9wKCdjaGVja2VkJywgdHJ1ZSlcbiAgfSlcbiAgJChkb2N1bWVudCkub24oJ3Nob3duLmx0ZS5wdXNobWVudScsICdbZGF0YS13aWRnZXQ9XCJwdXNobWVudVwiXScsIGZ1bmN0aW9uICgpIHtcbiAgICAkc2lkZWJhcl9jb2xsYXBzZWRfY2hlY2tib3gucHJvcCgnY2hlY2tlZCcsIGZhbHNlKVxuICB9KVxuXG4gIHZhciAkc2lkZWJhcl9maXhlZF9jaGVja2JveCA9ICQoJzxpbnB1dCAvPicsIHtcbiAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgIHZhbHVlOiAxLFxuICAgIGNoZWNrZWQ6ICQoJ2JvZHknKS5oYXNDbGFzcygnbGF5b3V0LWZpeGVkJyksXG4gICAgY2xhc3M6ICdtci0xJ1xuICB9KS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnbGF5b3V0LWZpeGVkJylcbiAgICAgICQod2luZG93KS50cmlnZ2VyKCdyZXNpemUnKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2xheW91dC1maXhlZCcpXG4gICAgICAkKHdpbmRvdykudHJpZ2dlcigncmVzaXplJylcbiAgICB9XG4gIH0pXG4gIHZhciAkc2lkZWJhcl9maXhlZF9jb250YWluZXIgPSAkKCc8ZGl2IC8+JywgeyBjbGFzczogJ21iLTEnIH0pLmFwcGVuZCgkc2lkZWJhcl9maXhlZF9jaGVja2JveCkuYXBwZW5kKCc8c3Bhbj5GaXhlZDwvc3Bhbj4nKVxuICAkY29udGFpbmVyLmFwcGVuZCgkc2lkZWJhcl9maXhlZF9jb250YWluZXIpXG5cbiAgdmFyICRzaWRlYmFyX21pbmlfY2hlY2tib3ggPSAkKCc8aW5wdXQgLz4nLCB7XG4gICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICB2YWx1ZTogMSxcbiAgICBjaGVja2VkOiAkKCdib2R5JykuaGFzQ2xhc3MoJ3NpZGViYXItbWluaScpLFxuICAgIGNsYXNzOiAnbXItMSdcbiAgfSkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ3NpZGViYXItbWluaScpXG4gICAgfSBlbHNlIHtcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnc2lkZWJhci1taW5pJylcbiAgICB9XG4gIH0pXG4gIHZhciAkc2lkZWJhcl9taW5pX2NvbnRhaW5lciA9ICQoJzxkaXYgLz4nLCB7IGNsYXNzOiAnbWItMScgfSkuYXBwZW5kKCRzaWRlYmFyX21pbmlfY2hlY2tib3gpLmFwcGVuZCgnPHNwYW4+U2lkZWJhciBNaW5pPC9zcGFuPicpXG4gICRjb250YWluZXIuYXBwZW5kKCRzaWRlYmFyX21pbmlfY29udGFpbmVyKVxuXG4gIHZhciAkc2lkZWJhcl9taW5pX21kX2NoZWNrYm94ID0gJCgnPGlucHV0IC8+Jywge1xuICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgdmFsdWU6IDEsXG4gICAgY2hlY2tlZDogJCgnYm9keScpLmhhc0NsYXNzKCdzaWRlYmFyLW1pbmktbWQnKSxcbiAgICBjbGFzczogJ21yLTEnXG4gIH0pLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdzaWRlYmFyLW1pbmktbWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3NpZGViYXItbWluaS1tZCcpXG4gICAgfVxuICB9KVxuICB2YXIgJHNpZGViYXJfbWluaV9tZF9jb250YWluZXIgPSAkKCc8ZGl2IC8+JywgeyBjbGFzczogJ21iLTEnIH0pLmFwcGVuZCgkc2lkZWJhcl9taW5pX21kX2NoZWNrYm94KS5hcHBlbmQoJzxzcGFuPlNpZGViYXIgTWluaSBNRDwvc3Bhbj4nKVxuICAkY29udGFpbmVyLmFwcGVuZCgkc2lkZWJhcl9taW5pX21kX2NvbnRhaW5lcilcblxuICB2YXIgJHNpZGViYXJfbWluaV94c19jaGVja2JveCA9ICQoJzxpbnB1dCAvPicsIHtcbiAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgIHZhbHVlOiAxLFxuICAgIGNoZWNrZWQ6ICQoJ2JvZHknKS5oYXNDbGFzcygnc2lkZWJhci1taW5pLXhzJyksXG4gICAgY2xhc3M6ICdtci0xJ1xuICB9KS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnc2lkZWJhci1taW5pLXhzJylcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdzaWRlYmFyLW1pbmkteHMnKVxuICAgIH1cbiAgfSlcbiAgdmFyICRzaWRlYmFyX21pbmlfeHNfY29udGFpbmVyID0gJCgnPGRpdiAvPicsIHsgY2xhc3M6ICdtYi0xJyB9KS5hcHBlbmQoJHNpZGViYXJfbWluaV94c19jaGVja2JveCkuYXBwZW5kKCc8c3Bhbj5TaWRlYmFyIE1pbmkgWFM8L3NwYW4+JylcbiAgJGNvbnRhaW5lci5hcHBlbmQoJHNpZGViYXJfbWluaV94c19jb250YWluZXIpXG5cbiAgdmFyICRmbGF0X3NpZGViYXJfY2hlY2tib3ggPSAkKCc8aW5wdXQgLz4nLCB7XG4gICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICB2YWx1ZTogMSxcbiAgICBjaGVja2VkOiAkKCcubmF2LXNpZGViYXInKS5oYXNDbGFzcygnbmF2LWZsYXQnKSxcbiAgICBjbGFzczogJ21yLTEnXG4gIH0pLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgJCgnLm5hdi1zaWRlYmFyJykuYWRkQ2xhc3MoJ25hdi1mbGF0JylcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLm5hdi1zaWRlYmFyJykucmVtb3ZlQ2xhc3MoJ25hdi1mbGF0JylcbiAgICB9XG4gIH0pXG4gIHZhciAkZmxhdF9zaWRlYmFyX2NvbnRhaW5lciA9ICQoJzxkaXYgLz4nLCB7IGNsYXNzOiAnbWItMScgfSkuYXBwZW5kKCRmbGF0X3NpZGViYXJfY2hlY2tib3gpLmFwcGVuZCgnPHNwYW4+TmF2IEZsYXQgU3R5bGU8L3NwYW4+JylcbiAgJGNvbnRhaW5lci5hcHBlbmQoJGZsYXRfc2lkZWJhcl9jb250YWluZXIpXG5cbiAgdmFyICRsZWdhY3lfc2lkZWJhcl9jaGVja2JveCA9ICQoJzxpbnB1dCAvPicsIHtcbiAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgIHZhbHVlOiAxLFxuICAgIGNoZWNrZWQ6ICQoJy5uYXYtc2lkZWJhcicpLmhhc0NsYXNzKCduYXYtbGVnYWN5JyksXG4gICAgY2xhc3M6ICdtci0xJ1xuICB9KS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICQoJy5uYXYtc2lkZWJhcicpLmFkZENsYXNzKCduYXYtbGVnYWN5JylcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLm5hdi1zaWRlYmFyJykucmVtb3ZlQ2xhc3MoJ25hdi1sZWdhY3knKVxuICAgIH1cbiAgfSlcbiAgdmFyICRsZWdhY3lfc2lkZWJhcl9jb250YWluZXIgPSAkKCc8ZGl2IC8+JywgeyBjbGFzczogJ21iLTEnIH0pLmFwcGVuZCgkbGVnYWN5X3NpZGViYXJfY2hlY2tib3gpLmFwcGVuZCgnPHNwYW4+TmF2IExlZ2FjeSBTdHlsZTwvc3Bhbj4nKVxuICAkY29udGFpbmVyLmFwcGVuZCgkbGVnYWN5X3NpZGViYXJfY29udGFpbmVyKVxuXG4gIHZhciAkY29tcGFjdF9zaWRlYmFyX2NoZWNrYm94ID0gJCgnPGlucHV0IC8+Jywge1xuICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgdmFsdWU6IDEsXG4gICAgY2hlY2tlZDogJCgnLm5hdi1zaWRlYmFyJykuaGFzQ2xhc3MoJ25hdi1jb21wYWN0JyksXG4gICAgY2xhc3M6ICdtci0xJ1xuICB9KS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICQoJy5uYXYtc2lkZWJhcicpLmFkZENsYXNzKCduYXYtY29tcGFjdCcpXG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5uYXYtc2lkZWJhcicpLnJlbW92ZUNsYXNzKCduYXYtY29tcGFjdCcpXG4gICAgfVxuICB9KVxuICB2YXIgJGNvbXBhY3Rfc2lkZWJhcl9jb250YWluZXIgPSAkKCc8ZGl2IC8+JywgeyBjbGFzczogJ21iLTEnIH0pLmFwcGVuZCgkY29tcGFjdF9zaWRlYmFyX2NoZWNrYm94KS5hcHBlbmQoJzxzcGFuPk5hdiBDb21wYWN0PC9zcGFuPicpXG4gICRjb250YWluZXIuYXBwZW5kKCRjb21wYWN0X3NpZGViYXJfY29udGFpbmVyKVxuXG4gIHZhciAkY2hpbGRfaW5kZW50X3NpZGViYXJfY2hlY2tib3ggPSAkKCc8aW5wdXQgLz4nLCB7XG4gICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICB2YWx1ZTogMSxcbiAgICBjaGVja2VkOiAkKCcubmF2LXNpZGViYXInKS5oYXNDbGFzcygnbmF2LWNoaWxkLWluZGVudCcpLFxuICAgIGNsYXNzOiAnbXItMSdcbiAgfSkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAkKCcubmF2LXNpZGViYXInKS5hZGRDbGFzcygnbmF2LWNoaWxkLWluZGVudCcpXG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5uYXYtc2lkZWJhcicpLnJlbW92ZUNsYXNzKCduYXYtY2hpbGQtaW5kZW50JylcbiAgICB9XG4gIH0pXG4gIHZhciAkY2hpbGRfaW5kZW50X3NpZGViYXJfY29udGFpbmVyID0gJCgnPGRpdiAvPicsIHsgY2xhc3M6ICdtYi0xJyB9KS5hcHBlbmQoJGNoaWxkX2luZGVudF9zaWRlYmFyX2NoZWNrYm94KS5hcHBlbmQoJzxzcGFuPk5hdiBDaGlsZCBJbmRlbnQ8L3NwYW4+JylcbiAgJGNvbnRhaW5lci5hcHBlbmQoJGNoaWxkX2luZGVudF9zaWRlYmFyX2NvbnRhaW5lcilcblxuICB2YXIgJGNoaWxkX2hpZGVfc2lkZWJhcl9jaGVja2JveCA9ICQoJzxpbnB1dCAvPicsIHtcbiAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgIHZhbHVlOiAxLFxuICAgIGNoZWNrZWQ6ICQoJy5uYXYtc2lkZWJhcicpLmhhc0NsYXNzKCduYXYtY29sbGFwc2UtaGlkZS1jaGlsZCcpLFxuICAgIGNsYXNzOiAnbXItMSdcbiAgfSkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAkKCcubmF2LXNpZGViYXInKS5hZGRDbGFzcygnbmF2LWNvbGxhcHNlLWhpZGUtY2hpbGQnKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKCcubmF2LXNpZGViYXInKS5yZW1vdmVDbGFzcygnbmF2LWNvbGxhcHNlLWhpZGUtY2hpbGQnKVxuICAgIH1cbiAgfSlcbiAgdmFyICRjaGlsZF9oaWRlX3NpZGViYXJfY29udGFpbmVyID0gJCgnPGRpdiAvPicsIHsgY2xhc3M6ICdtYi0xJyB9KS5hcHBlbmQoJGNoaWxkX2hpZGVfc2lkZWJhcl9jaGVja2JveCkuYXBwZW5kKCc8c3Bhbj5OYXYgQ2hpbGQgSGlkZSBvbiBDb2xsYXBzZTwvc3Bhbj4nKVxuICAkY29udGFpbmVyLmFwcGVuZCgkY2hpbGRfaGlkZV9zaWRlYmFyX2NvbnRhaW5lcilcblxuICB2YXIgJG5vX2V4cGFuZF9zaWRlYmFyX2NoZWNrYm94ID0gJCgnPGlucHV0IC8+Jywge1xuICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgdmFsdWU6IDEsXG4gICAgY2hlY2tlZDogJCgnLm1haW4tc2lkZWJhcicpLmhhc0NsYXNzKCdzaWRlYmFyLW5vLWV4cGFuZCcpLFxuICAgIGNsYXNzOiAnbXItMSdcbiAgfSkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAkKCcubWFpbi1zaWRlYmFyJykuYWRkQ2xhc3MoJ3NpZGViYXItbm8tZXhwYW5kJylcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLm1haW4tc2lkZWJhcicpLnJlbW92ZUNsYXNzKCdzaWRlYmFyLW5vLWV4cGFuZCcpXG4gICAgfVxuICB9KVxuICB2YXIgJG5vX2V4cGFuZF9zaWRlYmFyX2NvbnRhaW5lciA9ICQoJzxkaXYgLz4nLCB7IGNsYXNzOiAnbWItNCcgfSkuYXBwZW5kKCRub19leHBhbmRfc2lkZWJhcl9jaGVja2JveCkuYXBwZW5kKCc8c3Bhbj5EaXNhYmxlIEhvdmVyL0ZvY3VzIEF1dG8tRXhwYW5kPC9zcGFuPicpXG4gICRjb250YWluZXIuYXBwZW5kKCRub19leHBhbmRfc2lkZWJhcl9jb250YWluZXIpXG5cbiAgJGNvbnRhaW5lci5hcHBlbmQoJzxoNj5Gb290ZXIgT3B0aW9uczwvaDY+JylcbiAgdmFyICRmb290ZXJfZml4ZWRfY2hlY2tib3ggPSAkKCc8aW5wdXQgLz4nLCB7XG4gICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICB2YWx1ZTogMSxcbiAgICBjaGVja2VkOiAkKCdib2R5JykuaGFzQ2xhc3MoJ2xheW91dC1mb290ZXItZml4ZWQnKSxcbiAgICBjbGFzczogJ21yLTEnXG4gIH0pLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdsYXlvdXQtZm9vdGVyLWZpeGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdsYXlvdXQtZm9vdGVyLWZpeGVkJylcbiAgICB9XG4gIH0pXG4gIHZhciAkZm9vdGVyX2ZpeGVkX2NvbnRhaW5lciA9ICQoJzxkaXYgLz4nLCB7IGNsYXNzOiAnbWItNCcgfSkuYXBwZW5kKCRmb290ZXJfZml4ZWRfY2hlY2tib3gpLmFwcGVuZCgnPHNwYW4+Rml4ZWQ8L3NwYW4+JylcbiAgJGNvbnRhaW5lci5hcHBlbmQoJGZvb3Rlcl9maXhlZF9jb250YWluZXIpXG5cbiAgJGNvbnRhaW5lci5hcHBlbmQoJzxoNj5TbWFsbCBUZXh0IE9wdGlvbnM8L2g2PicpXG5cbiAgdmFyICR0ZXh0X3NtX2JvZHlfY2hlY2tib3ggPSAkKCc8aW5wdXQgLz4nLCB7XG4gICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICB2YWx1ZTogMSxcbiAgICBjaGVja2VkOiAkKCdib2R5JykuaGFzQ2xhc3MoJ3RleHQtc20nKSxcbiAgICBjbGFzczogJ21yLTEnXG4gIH0pLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCd0ZXh0LXNtJylcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCd0ZXh0LXNtJylcbiAgICB9XG4gIH0pXG4gIHZhciAkdGV4dF9zbV9ib2R5X2NvbnRhaW5lciA9ICQoJzxkaXYgLz4nLCB7IGNsYXNzOiAnbWItMScgfSkuYXBwZW5kKCR0ZXh0X3NtX2JvZHlfY2hlY2tib3gpLmFwcGVuZCgnPHNwYW4+Qm9keTwvc3Bhbj4nKVxuICAkY29udGFpbmVyLmFwcGVuZCgkdGV4dF9zbV9ib2R5X2NvbnRhaW5lcilcblxuICB2YXIgJHRleHRfc21faGVhZGVyX2NoZWNrYm94ID0gJCgnPGlucHV0IC8+Jywge1xuICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgdmFsdWU6IDEsXG4gICAgY2hlY2tlZDogJCgnLm1haW4taGVhZGVyJykuaGFzQ2xhc3MoJ3RleHQtc20nKSxcbiAgICBjbGFzczogJ21yLTEnXG4gIH0pLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgJCgnLm1haW4taGVhZGVyJykuYWRkQ2xhc3MoJ3RleHQtc20nKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKCcubWFpbi1oZWFkZXInKS5yZW1vdmVDbGFzcygndGV4dC1zbScpXG4gICAgfVxuICB9KVxuICB2YXIgJHRleHRfc21faGVhZGVyX2NvbnRhaW5lciA9ICQoJzxkaXYgLz4nLCB7IGNsYXNzOiAnbWItMScgfSkuYXBwZW5kKCR0ZXh0X3NtX2hlYWRlcl9jaGVja2JveCkuYXBwZW5kKCc8c3Bhbj5OYXZiYXI8L3NwYW4+JylcbiAgJGNvbnRhaW5lci5hcHBlbmQoJHRleHRfc21faGVhZGVyX2NvbnRhaW5lcilcblxuICB2YXIgJHRleHRfc21fYnJhbmRfY2hlY2tib3ggPSAkKCc8aW5wdXQgLz4nLCB7XG4gICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICB2YWx1ZTogMSxcbiAgICBjaGVja2VkOiAkKCcuYnJhbmQtbGluaycpLmhhc0NsYXNzKCd0ZXh0LXNtJyksXG4gICAgY2xhc3M6ICdtci0xJ1xuICB9KS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICQoJy5icmFuZC1saW5rJykuYWRkQ2xhc3MoJ3RleHQtc20nKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKCcuYnJhbmQtbGluaycpLnJlbW92ZUNsYXNzKCd0ZXh0LXNtJylcbiAgICB9XG4gIH0pXG4gIHZhciAkdGV4dF9zbV9icmFuZF9jb250YWluZXIgPSAkKCc8ZGl2IC8+JywgeyBjbGFzczogJ21iLTEnIH0pLmFwcGVuZCgkdGV4dF9zbV9icmFuZF9jaGVja2JveCkuYXBwZW5kKCc8c3Bhbj5CcmFuZDwvc3Bhbj4nKVxuICAkY29udGFpbmVyLmFwcGVuZCgkdGV4dF9zbV9icmFuZF9jb250YWluZXIpXG5cbiAgdmFyICR0ZXh0X3NtX3NpZGViYXJfY2hlY2tib3ggPSAkKCc8aW5wdXQgLz4nLCB7XG4gICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICB2YWx1ZTogMSxcbiAgICBjaGVja2VkOiAkKCcubmF2LXNpZGViYXInKS5oYXNDbGFzcygndGV4dC1zbScpLFxuICAgIGNsYXNzOiAnbXItMSdcbiAgfSkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAkKCcubmF2LXNpZGViYXInKS5hZGRDbGFzcygndGV4dC1zbScpXG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5uYXYtc2lkZWJhcicpLnJlbW92ZUNsYXNzKCd0ZXh0LXNtJylcbiAgICB9XG4gIH0pXG4gIHZhciAkdGV4dF9zbV9zaWRlYmFyX2NvbnRhaW5lciA9ICQoJzxkaXYgLz4nLCB7IGNsYXNzOiAnbWItMScgfSkuYXBwZW5kKCR0ZXh0X3NtX3NpZGViYXJfY2hlY2tib3gpLmFwcGVuZCgnPHNwYW4+U2lkZWJhciBOYXY8L3NwYW4+JylcbiAgJGNvbnRhaW5lci5hcHBlbmQoJHRleHRfc21fc2lkZWJhcl9jb250YWluZXIpXG5cbiAgdmFyICR0ZXh0X3NtX2Zvb3Rlcl9jaGVja2JveCA9ICQoJzxpbnB1dCAvPicsIHtcbiAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgIHZhbHVlOiAxLFxuICAgIGNoZWNrZWQ6ICQoJy5tYWluLWZvb3RlcicpLmhhc0NsYXNzKCd0ZXh0LXNtJyksXG4gICAgY2xhc3M6ICdtci0xJ1xuICB9KS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICQoJy5tYWluLWZvb3RlcicpLmFkZENsYXNzKCd0ZXh0LXNtJylcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLm1haW4tZm9vdGVyJykucmVtb3ZlQ2xhc3MoJ3RleHQtc20nKVxuICAgIH1cbiAgfSlcbiAgdmFyICR0ZXh0X3NtX2Zvb3Rlcl9jb250YWluZXIgPSAkKCc8ZGl2IC8+JywgeyBjbGFzczogJ21iLTQnIH0pLmFwcGVuZCgkdGV4dF9zbV9mb290ZXJfY2hlY2tib3gpLmFwcGVuZCgnPHNwYW4+Rm9vdGVyPC9zcGFuPicpXG4gICRjb250YWluZXIuYXBwZW5kKCR0ZXh0X3NtX2Zvb3Rlcl9jb250YWluZXIpXG5cbiAgLy8gQ29sb3IgQXJyYXlzXG5cbiAgdmFyIG5hdmJhcl9kYXJrX3NraW5zID0gW1xuICAgICduYXZiYXItcHJpbWFyeScsXG4gICAgJ25hdmJhci1zZWNvbmRhcnknLFxuICAgICduYXZiYXItaW5mbycsXG4gICAgJ25hdmJhci1zdWNjZXNzJyxcbiAgICAnbmF2YmFyLWRhbmdlcicsXG4gICAgJ25hdmJhci1pbmRpZ28nLFxuICAgICduYXZiYXItcHVycGxlJyxcbiAgICAnbmF2YmFyLXBpbmsnLFxuICAgICduYXZiYXItbmF2eScsXG4gICAgJ25hdmJhci1saWdodGJsdWUnLFxuICAgICduYXZiYXItdGVhbCcsXG4gICAgJ25hdmJhci1jeWFuJyxcbiAgICAnbmF2YmFyLWRhcmsnLFxuICAgICduYXZiYXItZ3JheS1kYXJrJyxcbiAgICAnbmF2YmFyLWdyYXknXG4gIF1cblxuICB2YXIgbmF2YmFyX2xpZ2h0X3NraW5zID0gW1xuICAgICduYXZiYXItbGlnaHQnLFxuICAgICduYXZiYXItd2FybmluZycsXG4gICAgJ25hdmJhci13aGl0ZScsXG4gICAgJ25hdmJhci1vcmFuZ2UnXG4gIF1cblxuICB2YXIgc2lkZWJhcl9jb2xvcnMgPSBbXG4gICAgJ2JnLXByaW1hcnknLFxuICAgICdiZy13YXJuaW5nJyxcbiAgICAnYmctaW5mbycsXG4gICAgJ2JnLWRhbmdlcicsXG4gICAgJ2JnLXN1Y2Nlc3MnLFxuICAgICdiZy1pbmRpZ28nLFxuICAgICdiZy1saWdodGJsdWUnLFxuICAgICdiZy1uYXZ5JyxcbiAgICAnYmctcHVycGxlJyxcbiAgICAnYmctZnVjaHNpYScsXG4gICAgJ2JnLXBpbmsnLFxuICAgICdiZy1tYXJvb24nLFxuICAgICdiZy1vcmFuZ2UnLFxuICAgICdiZy1saW1lJyxcbiAgICAnYmctdGVhbCcsXG4gICAgJ2JnLW9saXZlJ1xuICBdXG5cbiAgdmFyIGFjY2VudF9jb2xvcnMgPSBbXG4gICAgJ2FjY2VudC1wcmltYXJ5JyxcbiAgICAnYWNjZW50LXdhcm5pbmcnLFxuICAgICdhY2NlbnQtaW5mbycsXG4gICAgJ2FjY2VudC1kYW5nZXInLFxuICAgICdhY2NlbnQtc3VjY2VzcycsXG4gICAgJ2FjY2VudC1pbmRpZ28nLFxuICAgICdhY2NlbnQtbGlnaHRibHVlJyxcbiAgICAnYWNjZW50LW5hdnknLFxuICAgICdhY2NlbnQtcHVycGxlJyxcbiAgICAnYWNjZW50LWZ1Y2hzaWEnLFxuICAgICdhY2NlbnQtcGluaycsXG4gICAgJ2FjY2VudC1tYXJvb24nLFxuICAgICdhY2NlbnQtb3JhbmdlJyxcbiAgICAnYWNjZW50LWxpbWUnLFxuICAgICdhY2NlbnQtdGVhbCcsXG4gICAgJ2FjY2VudC1vbGl2ZSdcbiAgXVxuXG4gIHZhciBzaWRlYmFyX3NraW5zID0gW1xuICAgICdzaWRlYmFyLWRhcmstcHJpbWFyeScsXG4gICAgJ3NpZGViYXItZGFyay13YXJuaW5nJyxcbiAgICAnc2lkZWJhci1kYXJrLWluZm8nLFxuICAgICdzaWRlYmFyLWRhcmstZGFuZ2VyJyxcbiAgICAnc2lkZWJhci1kYXJrLXN1Y2Nlc3MnLFxuICAgICdzaWRlYmFyLWRhcmstaW5kaWdvJyxcbiAgICAnc2lkZWJhci1kYXJrLWxpZ2h0Ymx1ZScsXG4gICAgJ3NpZGViYXItZGFyay1uYXZ5JyxcbiAgICAnc2lkZWJhci1kYXJrLXB1cnBsZScsXG4gICAgJ3NpZGViYXItZGFyay1mdWNoc2lhJyxcbiAgICAnc2lkZWJhci1kYXJrLXBpbmsnLFxuICAgICdzaWRlYmFyLWRhcmstbWFyb29uJyxcbiAgICAnc2lkZWJhci1kYXJrLW9yYW5nZScsXG4gICAgJ3NpZGViYXItZGFyay1saW1lJyxcbiAgICAnc2lkZWJhci1kYXJrLXRlYWwnLFxuICAgICdzaWRlYmFyLWRhcmstb2xpdmUnLFxuICAgICdzaWRlYmFyLWxpZ2h0LXByaW1hcnknLFxuICAgICdzaWRlYmFyLWxpZ2h0LXdhcm5pbmcnLFxuICAgICdzaWRlYmFyLWxpZ2h0LWluZm8nLFxuICAgICdzaWRlYmFyLWxpZ2h0LWRhbmdlcicsXG4gICAgJ3NpZGViYXItbGlnaHQtc3VjY2VzcycsXG4gICAgJ3NpZGViYXItbGlnaHQtaW5kaWdvJyxcbiAgICAnc2lkZWJhci1saWdodC1saWdodGJsdWUnLFxuICAgICdzaWRlYmFyLWxpZ2h0LW5hdnknLFxuICAgICdzaWRlYmFyLWxpZ2h0LXB1cnBsZScsXG4gICAgJ3NpZGViYXItbGlnaHQtZnVjaHNpYScsXG4gICAgJ3NpZGViYXItbGlnaHQtcGluaycsXG4gICAgJ3NpZGViYXItbGlnaHQtbWFyb29uJyxcbiAgICAnc2lkZWJhci1saWdodC1vcmFuZ2UnLFxuICAgICdzaWRlYmFyLWxpZ2h0LWxpbWUnLFxuICAgICdzaWRlYmFyLWxpZ2h0LXRlYWwnLFxuICAgICdzaWRlYmFyLWxpZ2h0LW9saXZlJ1xuICBdXG5cbiAgLy8gTmF2YmFyIFZhcmlhbnRzXG5cbiAgJGNvbnRhaW5lci5hcHBlbmQoJzxoNj5OYXZiYXIgVmFyaWFudHM8L2g2PicpXG5cbiAgdmFyICRuYXZiYXJfdmFyaWFudHMgPSAkKCc8ZGl2IC8+Jywge1xuICAgIGNsYXNzOiAnZC1mbGV4J1xuICB9KVxuICB2YXIgbmF2YmFyX2FsbF9jb2xvcnMgPSBuYXZiYXJfZGFya19za2lucy5jb25jYXQobmF2YmFyX2xpZ2h0X3NraW5zKVxuICB2YXIgJG5hdmJhcl92YXJpYW50c19jb2xvcnMgPSBjcmVhdGVTa2luQmxvY2sobmF2YmFyX2FsbF9jb2xvcnMsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY29sb3IgPSAkKHRoaXMpLmRhdGEoJ2NvbG9yJylcbiAgICB2YXIgJG1haW5faGVhZGVyID0gJCgnLm1haW4taGVhZGVyJylcbiAgICAkbWFpbl9oZWFkZXIucmVtb3ZlQ2xhc3MoJ25hdmJhci1kYXJrJykucmVtb3ZlQ2xhc3MoJ25hdmJhci1saWdodCcpXG4gICAgbmF2YmFyX2FsbF9jb2xvcnMuZm9yRWFjaChmdW5jdGlvbiAoY29sb3IpIHtcbiAgICAgICRtYWluX2hlYWRlci5yZW1vdmVDbGFzcyhjb2xvcilcbiAgICB9KVxuXG4gICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygpLmFkZENsYXNzKCdjdXN0b20tc2VsZWN0IG1iLTMgdGV4dC1saWdodCBib3JkZXItMCAnKVxuXG4gICAgaWYgKG5hdmJhcl9kYXJrX3NraW5zLmluZGV4T2YoY29sb3IpID4gLTEpIHtcbiAgICAgICRtYWluX2hlYWRlci5hZGRDbGFzcygnbmF2YmFyLWRhcmsnKVxuICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcyhjb2xvcikuYWRkQ2xhc3MoJ3RleHQtbGlnaHQnKVxuICAgIH0gZWxzZSB7XG4gICAgICAkbWFpbl9oZWFkZXIuYWRkQ2xhc3MoJ25hdmJhci1saWdodCcpXG4gICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKGNvbG9yKVxuICAgIH1cblxuICAgICRtYWluX2hlYWRlci5hZGRDbGFzcyhjb2xvcilcbiAgfSlcblxuICB2YXIgYWN0aXZlX25hdmJhcl9jb2xvciA9IG51bGxcbiAgJCgnLm1haW4taGVhZGVyJylbMF0uY2xhc3NMaXN0LmZvckVhY2goZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgIGlmIChuYXZiYXJfYWxsX2NvbG9ycy5pbmRleE9mKGNsYXNzTmFtZSkgPiAtMSAmJiBhY3RpdmVfbmF2YmFyX2NvbG9yID09PSBudWxsKSB7XG4gICAgICBhY3RpdmVfbmF2YmFyX2NvbG9yID0gY2xhc3NOYW1lLnJlcGxhY2UoJ25hdmJhci0nLCAnYmctJylcbiAgICB9XG4gIH0pXG5cbiAgJG5hdmJhcl92YXJpYW50c19jb2xvcnMuZmluZCgnb3B0aW9uLicgKyBhY3RpdmVfbmF2YmFyX2NvbG9yKS5wcm9wKCdzZWxlY3RlZCcsIHRydWUpXG4gICRuYXZiYXJfdmFyaWFudHNfY29sb3JzLnJlbW92ZUNsYXNzKCkuYWRkQ2xhc3MoJ2N1c3RvbS1zZWxlY3QgbWItMyB0ZXh0LWxpZ2h0IGJvcmRlci0wICcpLmFkZENsYXNzKGFjdGl2ZV9uYXZiYXJfY29sb3IpXG5cbiAgJG5hdmJhcl92YXJpYW50cy5hcHBlbmQoJG5hdmJhcl92YXJpYW50c19jb2xvcnMpXG5cbiAgJGNvbnRhaW5lci5hcHBlbmQoJG5hdmJhcl92YXJpYW50cylcblxuICAvLyBTaWRlYmFyIENvbG9yc1xuXG4gICRjb250YWluZXIuYXBwZW5kKCc8aDY+QWNjZW50IENvbG9yIFZhcmlhbnRzPC9oNj4nKVxuICB2YXIgJGFjY2VudF92YXJpYW50cyA9ICQoJzxkaXYgLz4nLCB7XG4gICAgY2xhc3M6ICdkLWZsZXgnXG4gIH0pXG4gICRjb250YWluZXIuYXBwZW5kKCRhY2NlbnRfdmFyaWFudHMpXG4gICRjb250YWluZXIuYXBwZW5kKGNyZWF0ZVNraW5CbG9jayhhY2NlbnRfY29sb3JzLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNvbG9yID0gJCh0aGlzKS5kYXRhKCdjb2xvcicpXG4gICAgdmFyIGFjY2VudF9jbGFzcyA9IGNvbG9yXG4gICAgdmFyICRib2R5ID0gJCgnYm9keScpXG4gICAgYWNjZW50X2NvbG9ycy5mb3JFYWNoKGZ1bmN0aW9uIChza2luKSB7XG4gICAgICAkYm9keS5yZW1vdmVDbGFzcyhza2luKVxuICAgIH0pXG5cbiAgICAkYm9keS5hZGRDbGFzcyhhY2NlbnRfY2xhc3MpXG4gIH0sIHRydWUpKVxuXG4gIHZhciBhY3RpdmVfYWNjZW50X2NvbG9yID0gbnVsbFxuICAkKCdib2R5JylbMF0uY2xhc3NMaXN0LmZvckVhY2goZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgIGlmIChhY2NlbnRfY29sb3JzLmluZGV4T2YoY2xhc3NOYW1lKSA+IC0xICYmIGFjdGl2ZV9hY2NlbnRfY29sb3IgPT09IG51bGwpIHtcbiAgICAgIGFjdGl2ZV9hY2NlbnRfY29sb3IgPSBjbGFzc05hbWUucmVwbGFjZSgnbmF2YmFyLScsICdiZy0nKVxuICAgIH1cbiAgfSlcblxuICAvLyAkYWNjZW50X3ZhcmlhbnRzLmZpbmQoJ29wdGlvbi4nICsgYWN0aXZlX2FjY2VudF9jb2xvcikucHJvcCgnc2VsZWN0ZWQnLCB0cnVlKVxuICAvLyAkYWNjZW50X3ZhcmlhbnRzLnJlbW92ZUNsYXNzKCkuYWRkQ2xhc3MoJ2N1c3RvbS1zZWxlY3QgbWItMyB0ZXh0LWxpZ2h0IGJvcmRlci0wICcpLmFkZENsYXNzKGFjdGl2ZV9hY2NlbnRfY29sb3IpXG5cbiAgJGNvbnRhaW5lci5hcHBlbmQoJzxoNj5EYXJrIFNpZGViYXIgVmFyaWFudHM8L2g2PicpXG4gIHZhciAkc2lkZWJhcl92YXJpYW50c19kYXJrID0gJCgnPGRpdiAvPicsIHtcbiAgICBjbGFzczogJ2QtZmxleCdcbiAgfSlcbiAgJGNvbnRhaW5lci5hcHBlbmQoJHNpZGViYXJfdmFyaWFudHNfZGFyaylcbiAgdmFyICRzaWRlYmFyX2RhcmtfdmFyaWFudHMgPSBjcmVhdGVTa2luQmxvY2soc2lkZWJhcl9jb2xvcnMsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY29sb3IgPSAkKHRoaXMpLmRhdGEoJ2NvbG9yJylcbiAgICB2YXIgc2lkZWJhcl9jbGFzcyA9ICdzaWRlYmFyLWRhcmstJyArIGNvbG9yLnJlcGxhY2UoJ2JnLScsICcnKVxuICAgIHZhciAkc2lkZWJhciA9ICQoJy5tYWluLXNpZGViYXInKVxuICAgIHNpZGViYXJfc2tpbnMuZm9yRWFjaChmdW5jdGlvbiAoc2tpbikge1xuICAgICAgJHNpZGViYXIucmVtb3ZlQ2xhc3Moc2tpbilcbiAgICAgICRzaWRlYmFyX2xpZ2h0X3ZhcmlhbnRzLnJlbW92ZUNsYXNzKHNraW4ucmVwbGFjZSgnc2lkZWJhci1kYXJrLScsICdiZy0nKSkucmVtb3ZlQ2xhc3MoJ3RleHQtbGlnaHQnKVxuICAgIH0pXG5cbiAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCkuYWRkQ2xhc3MoJ2N1c3RvbS1zZWxlY3QgbWItMyB0ZXh0LWxpZ2h0IGJvcmRlci0wJykuYWRkQ2xhc3MoY29sb3IpXG5cbiAgICAkc2lkZWJhcl9saWdodF92YXJpYW50cy5maW5kKCdvcHRpb24nKS5wcm9wKCdzZWxlY3RlZCcsIGZhbHNlKVxuICAgICRzaWRlYmFyLmFkZENsYXNzKHNpZGViYXJfY2xhc3MpXG4gICAgJCgnLnNpZGViYXInKS5yZW1vdmVDbGFzcygnb3MtdGhlbWUtZGFyaycpLmFkZENsYXNzKCdvcy10aGVtZS1saWdodCcpXG4gIH0sIHRydWUpXG4gICRjb250YWluZXIuYXBwZW5kKCRzaWRlYmFyX2RhcmtfdmFyaWFudHMpXG5cbiAgdmFyIGFjdGl2ZV9zaWRlYmFyX2RhcmtfY29sb3IgPSBudWxsXG4gICQoJy5tYWluLXNpZGViYXInKVswXS5jbGFzc0xpc3QuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgdmFyIGNvbG9yID0gY2xhc3NOYW1lLnJlcGxhY2UoJ3NpZGViYXItZGFyay0nLCAnYmctJylcbiAgICBpZiAoc2lkZWJhcl9jb2xvcnMuaW5kZXhPZihjb2xvcikgPiAtMSAmJiBhY3RpdmVfc2lkZWJhcl9kYXJrX2NvbG9yID09PSBudWxsKSB7XG4gICAgICBhY3RpdmVfc2lkZWJhcl9kYXJrX2NvbG9yID0gY29sb3JcbiAgICB9XG4gIH0pXG5cbiAgJHNpZGViYXJfZGFya192YXJpYW50cy5maW5kKCdvcHRpb24uJyArIGFjdGl2ZV9zaWRlYmFyX2RhcmtfY29sb3IpLnByb3AoJ3NlbGVjdGVkJywgdHJ1ZSlcbiAgJHNpZGViYXJfZGFya192YXJpYW50cy5yZW1vdmVDbGFzcygpLmFkZENsYXNzKCdjdXN0b20tc2VsZWN0IG1iLTMgdGV4dC1saWdodCBib3JkZXItMCAnKS5hZGRDbGFzcyhhY3RpdmVfc2lkZWJhcl9kYXJrX2NvbG9yKVxuXG4gICRjb250YWluZXIuYXBwZW5kKCc8aDY+TGlnaHQgU2lkZWJhciBWYXJpYW50czwvaDY+JylcbiAgdmFyICRzaWRlYmFyX3ZhcmlhbnRzX2xpZ2h0ID0gJCgnPGRpdiAvPicsIHtcbiAgICBjbGFzczogJ2QtZmxleCdcbiAgfSlcbiAgJGNvbnRhaW5lci5hcHBlbmQoJHNpZGViYXJfdmFyaWFudHNfbGlnaHQpXG4gIHZhciAkc2lkZWJhcl9saWdodF92YXJpYW50cyA9IGNyZWF0ZVNraW5CbG9jayhzaWRlYmFyX2NvbG9ycywgZnVuY3Rpb24gKCkge1xuICAgIHZhciBjb2xvciA9ICQodGhpcykuZGF0YSgnY29sb3InKVxuICAgIHZhciBzaWRlYmFyX2NsYXNzID0gJ3NpZGViYXItbGlnaHQtJyArIGNvbG9yLnJlcGxhY2UoJ2JnLScsICcnKVxuICAgIHZhciAkc2lkZWJhciA9ICQoJy5tYWluLXNpZGViYXInKVxuICAgIHNpZGViYXJfc2tpbnMuZm9yRWFjaChmdW5jdGlvbiAoc2tpbikge1xuICAgICAgJHNpZGViYXIucmVtb3ZlQ2xhc3Moc2tpbilcbiAgICAgICRzaWRlYmFyX2RhcmtfdmFyaWFudHMucmVtb3ZlQ2xhc3Moc2tpbi5yZXBsYWNlKCdzaWRlYmFyLWxpZ2h0LScsICdiZy0nKSkucmVtb3ZlQ2xhc3MoJ3RleHQtbGlnaHQnKVxuICAgIH0pXG5cbiAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCkuYWRkQ2xhc3MoJ2N1c3RvbS1zZWxlY3QgbWItMyB0ZXh0LWxpZ2h0IGJvcmRlci0wJykuYWRkQ2xhc3MoY29sb3IpXG5cbiAgICAkc2lkZWJhcl9kYXJrX3ZhcmlhbnRzLmZpbmQoJ29wdGlvbicpLnByb3AoJ3NlbGVjdGVkJywgZmFsc2UpXG4gICAgJHNpZGViYXIuYWRkQ2xhc3Moc2lkZWJhcl9jbGFzcylcbiAgICAkKCcuc2lkZWJhcicpLnJlbW92ZUNsYXNzKCdvcy10aGVtZS1saWdodCcpLmFkZENsYXNzKCdvcy10aGVtZS1kYXJrJylcbiAgfSwgdHJ1ZSlcbiAgJGNvbnRhaW5lci5hcHBlbmQoJHNpZGViYXJfbGlnaHRfdmFyaWFudHMpXG5cbiAgdmFyIGFjdGl2ZV9zaWRlYmFyX2xpZ2h0X2NvbG9yID0gbnVsbFxuICAkKCcubWFpbi1zaWRlYmFyJylbMF0uY2xhc3NMaXN0LmZvckVhY2goZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgIHZhciBjb2xvciA9IGNsYXNzTmFtZS5yZXBsYWNlKCdzaWRlYmFyLWxpZ2h0LScsICdiZy0nKVxuICAgIGlmIChzaWRlYmFyX2NvbG9ycy5pbmRleE9mKGNvbG9yKSA+IC0xICYmIGFjdGl2ZV9zaWRlYmFyX2xpZ2h0X2NvbG9yID09PSBudWxsKSB7XG4gICAgICBhY3RpdmVfc2lkZWJhcl9saWdodF9jb2xvciA9IGNvbG9yXG4gICAgfVxuICB9KVxuXG4gIGlmIChhY3RpdmVfc2lkZWJhcl9saWdodF9jb2xvciAhPT0gbnVsbCkge1xuICAgICRzaWRlYmFyX2xpZ2h0X3ZhcmlhbnRzLmZpbmQoJ29wdGlvbi4nICsgYWN0aXZlX3NpZGViYXJfbGlnaHRfY29sb3IpLnByb3AoJ3NlbGVjdGVkJywgdHJ1ZSlcbiAgICAkc2lkZWJhcl9saWdodF92YXJpYW50cy5yZW1vdmVDbGFzcygpLmFkZENsYXNzKCdjdXN0b20tc2VsZWN0IG1iLTMgdGV4dC1saWdodCBib3JkZXItMCAnKS5hZGRDbGFzcyhhY3RpdmVfc2lkZWJhcl9saWdodF9jb2xvcilcbiAgfVxuXG4gIHZhciBsb2dvX3NraW5zID0gbmF2YmFyX2FsbF9jb2xvcnNcbiAgJGNvbnRhaW5lci5hcHBlbmQoJzxoNj5CcmFuZCBMb2dvIFZhcmlhbnRzPC9oNj4nKVxuICB2YXIgJGxvZ29fdmFyaWFudHMgPSAkKCc8ZGl2IC8+Jywge1xuICAgIGNsYXNzOiAnZC1mbGV4J1xuICB9KVxuICAkY29udGFpbmVyLmFwcGVuZCgkbG9nb192YXJpYW50cylcbiAgdmFyICRjbGVhcl9idG4gPSAkKCc8YSAvPicsIHtcbiAgICBocmVmOiAnIydcbiAgfSkudGV4dCgnY2xlYXInKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHZhciAkbG9nbyA9ICQoJy5icmFuZC1saW5rJylcbiAgICBsb2dvX3NraW5zLmZvckVhY2goZnVuY3Rpb24gKHNraW4pIHtcbiAgICAgICRsb2dvLnJlbW92ZUNsYXNzKHNraW4pXG4gICAgfSlcbiAgfSlcblxuICB2YXIgJGJyYW5kX3ZhcmlhbnRzID0gY3JlYXRlU2tpbkJsb2NrKGxvZ29fc2tpbnMsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY29sb3IgPSAkKHRoaXMpLmRhdGEoJ2NvbG9yJylcbiAgICB2YXIgJGxvZ28gPSAkKCcuYnJhbmQtbGluaycpXG5cbiAgICBpZiAoY29sb3IgPT09ICduYXZiYXItbGlnaHQnIHx8IGNvbG9yID09PSAnbmF2YmFyLXdoaXRlJykge1xuICAgICAgJGxvZ28uYWRkQ2xhc3MoJ3RleHQtYmxhY2snKVxuICAgIH0gZWxzZSB7XG4gICAgICAkbG9nby5yZW1vdmVDbGFzcygndGV4dC1ibGFjaycpXG4gICAgfVxuXG4gICAgbG9nb19za2lucy5mb3JFYWNoKGZ1bmN0aW9uIChza2luKSB7XG4gICAgICAkbG9nby5yZW1vdmVDbGFzcyhza2luKVxuICAgIH0pXG5cbiAgICBpZiAoY29sb3IpIHtcbiAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoKS5hZGRDbGFzcygnY3VzdG9tLXNlbGVjdCBtYi0zIGJvcmRlci0wJykuYWRkQ2xhc3MoY29sb3IpLmFkZENsYXNzKGNvbG9yICE9PSAnbmF2YmFyLWxpZ2h0JyAmJiBjb2xvciAhPT0gJ25hdmJhci13aGl0ZScgPyAndGV4dC1saWdodCcgOiAnJylcbiAgICB9IGVsc2Uge1xuICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygpLmFkZENsYXNzKCdjdXN0b20tc2VsZWN0IG1iLTMgYm9yZGVyLTAnKVxuICAgIH1cblxuICAgICRsb2dvLmFkZENsYXNzKGNvbG9yKVxuICB9LCB0cnVlKS5hcHBlbmQoJGNsZWFyX2J0bilcbiAgJGNvbnRhaW5lci5hcHBlbmQoJGJyYW5kX3ZhcmlhbnRzKVxuXG4gIHZhciBhY3RpdmVfYnJhbmRfY29sb3IgPSBudWxsXG4gICQoJy5icmFuZC1saW5rJylbMF0uY2xhc3NMaXN0LmZvckVhY2goZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgIGlmIChsb2dvX3NraW5zLmluZGV4T2YoY2xhc3NOYW1lKSA+IC0xICYmIGFjdGl2ZV9icmFuZF9jb2xvciA9PT0gbnVsbCkge1xuICAgICAgYWN0aXZlX2JyYW5kX2NvbG9yID0gY2xhc3NOYW1lLnJlcGxhY2UoJ25hdmJhci0nLCAnYmctJylcbiAgICB9XG4gIH0pXG5cbiAgaWYgKGFjdGl2ZV9icmFuZF9jb2xvcikge1xuICAgICRicmFuZF92YXJpYW50cy5maW5kKCdvcHRpb24uJyArIGFjdGl2ZV9icmFuZF9jb2xvcikucHJvcCgnc2VsZWN0ZWQnLCB0cnVlKVxuICAgICRicmFuZF92YXJpYW50cy5yZW1vdmVDbGFzcygpLmFkZENsYXNzKCdjdXN0b20tc2VsZWN0IG1iLTMgdGV4dC1saWdodCBib3JkZXItMCAnKS5hZGRDbGFzcyhhY3RpdmVfYnJhbmRfY29sb3IpXG4gIH1cbn0pKGpRdWVyeSlcbiIsIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLWFycmF5LXByb3RvdHlwZS1pbmRleG9mIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkaW5kZXhPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluZGV4T2Y7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG5cbnZhciBuYXRpdmVJbmRleE9mID0gW10uaW5kZXhPZjtcblxudmFyIE5FR0FUSVZFX1pFUk8gPSAhIW5hdGl2ZUluZGV4T2YgJiYgMSAvIFsxXS5pbmRleE9mKDEsIC0wKSA8IDA7XG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ2luZGV4T2YnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5pbmRleE9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2ZcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IE5FR0FUSVZFX1pFUk8gfHwgIVNUUklDVF9NRVRIT0QgfSwge1xuICBpbmRleE9mOiBmdW5jdGlvbiBpbmRleE9mKHNlYXJjaEVsZW1lbnQgLyogLCBmcm9tSW5kZXggPSAwICovKSB7XG4gICAgcmV0dXJuIE5FR0FUSVZFX1pFUk9cbiAgICAgIC8vIGNvbnZlcnQgLTAgdG8gKzBcbiAgICAgID8gbmF0aXZlSW5kZXhPZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IDBcbiAgICAgIDogJGluZGV4T2YodGhpcywgc2VhcmNoRWxlbWVudCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcblxudmFyIG5hdGl2ZUpvaW4gPSBbXS5qb2luO1xuXG52YXIgRVMzX1NUUklOR1MgPSBJbmRleGVkT2JqZWN0ICE9IE9iamVjdDtcbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnam9pbicsICcsJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuam9pbmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5qb2luXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBFUzNfU1RSSU5HUyB8fCAhU1RSSUNUX01FVEhPRCB9LCB7XG4gIGpvaW46IGZ1bmN0aW9uIGpvaW4oc2VwYXJhdG9yKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUpvaW4uY2FsbCh0b0luZGV4ZWRPYmplY3QodGhpcyksIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkID8gJywnIDogc2VwYXJhdG9yKTtcbiAgfVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9