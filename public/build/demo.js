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

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.concat.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $find = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").find;
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.for-each.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.for-each.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


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


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_array_slice_js-node_modules_core-js_modules_es_object-6f2024"], () => (__webpack_exec__("./public/assets/js/demo.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2pzL2RlbW8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuY29uY2F0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZmluZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuaW5kZXgtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5qb2luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5mb3ItZWFjaC5qcyJdLCJuYW1lcyI6WyIkIiwiY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIiwic3RyaW5nIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImNyZWF0ZVNraW5CbG9jayIsImNvbG9ycyIsImNhbGxiYWNrIiwibm9uZVNlbGVjdGVkIiwiJGJsb2NrIiwicmVwbGFjZSIsIiRkZWZhdWx0IiwidGV4dCIsIm9uIiwiYXBwZW5kIiwiZm9yRWFjaCIsImNvbG9yIiwiJGNvbG9yIiwiam9pbiIsImRhdGEiLCIkc2lkZWJhciIsIiRjb250YWluZXIiLCIkZGFya19tb2RlX2NoZWNrYm94IiwidHlwZSIsInZhbHVlIiwiY2hlY2tlZCIsImhhc0NsYXNzIiwiaXMiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiJGRhcmtfbW9kZV9jb250YWluZXIiLCIkaGVhZGVyX2ZpeGVkX2NoZWNrYm94IiwiJGhlYWRlcl9maXhlZF9jb250YWluZXIiLCIkZHJvcGRvd25fbGVnYWN5X29mZnNldF9jaGVja2JveCIsIiRkcm9wZG93bl9sZWdhY3lfb2Zmc2V0X2NvbnRhaW5lciIsIiRub19ib3JkZXJfY2hlY2tib3giLCIkbm9fYm9yZGVyX2NvbnRhaW5lciIsIiRzaWRlYmFyX2NvbGxhcHNlZF9jaGVja2JveCIsIndpbmRvdyIsInRyaWdnZXIiLCIkc2lkZWJhcl9jb2xsYXBzZWRfY29udGFpbmVyIiwiZG9jdW1lbnQiLCJwcm9wIiwiJHNpZGViYXJfZml4ZWRfY2hlY2tib3giLCIkc2lkZWJhcl9maXhlZF9jb250YWluZXIiLCIkc2lkZWJhcl9taW5pX2NoZWNrYm94IiwiJHNpZGViYXJfbWluaV9jb250YWluZXIiLCIkc2lkZWJhcl9taW5pX21kX2NoZWNrYm94IiwiJHNpZGViYXJfbWluaV9tZF9jb250YWluZXIiLCIkc2lkZWJhcl9taW5pX3hzX2NoZWNrYm94IiwiJHNpZGViYXJfbWluaV94c19jb250YWluZXIiLCIkZmxhdF9zaWRlYmFyX2NoZWNrYm94IiwiJGZsYXRfc2lkZWJhcl9jb250YWluZXIiLCIkbGVnYWN5X3NpZGViYXJfY2hlY2tib3giLCIkbGVnYWN5X3NpZGViYXJfY29udGFpbmVyIiwiJGNvbXBhY3Rfc2lkZWJhcl9jaGVja2JveCIsIiRjb21wYWN0X3NpZGViYXJfY29udGFpbmVyIiwiJGNoaWxkX2luZGVudF9zaWRlYmFyX2NoZWNrYm94IiwiJGNoaWxkX2luZGVudF9zaWRlYmFyX2NvbnRhaW5lciIsIiRjaGlsZF9oaWRlX3NpZGViYXJfY2hlY2tib3giLCIkY2hpbGRfaGlkZV9zaWRlYmFyX2NvbnRhaW5lciIsIiRub19leHBhbmRfc2lkZWJhcl9jaGVja2JveCIsIiRub19leHBhbmRfc2lkZWJhcl9jb250YWluZXIiLCIkZm9vdGVyX2ZpeGVkX2NoZWNrYm94IiwiJGZvb3Rlcl9maXhlZF9jb250YWluZXIiLCIkdGV4dF9zbV9ib2R5X2NoZWNrYm94IiwiJHRleHRfc21fYm9keV9jb250YWluZXIiLCIkdGV4dF9zbV9oZWFkZXJfY2hlY2tib3giLCIkdGV4dF9zbV9oZWFkZXJfY29udGFpbmVyIiwiJHRleHRfc21fYnJhbmRfY2hlY2tib3giLCIkdGV4dF9zbV9icmFuZF9jb250YWluZXIiLCIkdGV4dF9zbV9zaWRlYmFyX2NoZWNrYm94IiwiJHRleHRfc21fc2lkZWJhcl9jb250YWluZXIiLCIkdGV4dF9zbV9mb290ZXJfY2hlY2tib3giLCIkdGV4dF9zbV9mb290ZXJfY29udGFpbmVyIiwibmF2YmFyX2Rhcmtfc2tpbnMiLCJuYXZiYXJfbGlnaHRfc2tpbnMiLCJzaWRlYmFyX2NvbG9ycyIsImFjY2VudF9jb2xvcnMiLCJzaWRlYmFyX3NraW5zIiwiJG5hdmJhcl92YXJpYW50cyIsIm5hdmJhcl9hbGxfY29sb3JzIiwiY29uY2F0IiwiJG5hdmJhcl92YXJpYW50c19jb2xvcnMiLCIkbWFpbl9oZWFkZXIiLCJwYXJlbnQiLCJpbmRleE9mIiwiYWN0aXZlX25hdmJhcl9jb2xvciIsImNsYXNzTGlzdCIsImNsYXNzTmFtZSIsImZpbmQiLCIkYWNjZW50X3ZhcmlhbnRzIiwiYWNjZW50X2NsYXNzIiwiJGJvZHkiLCJza2luIiwiYWN0aXZlX2FjY2VudF9jb2xvciIsIiRzaWRlYmFyX3ZhcmlhbnRzX2RhcmsiLCIkc2lkZWJhcl9kYXJrX3ZhcmlhbnRzIiwic2lkZWJhcl9jbGFzcyIsIiRzaWRlYmFyX2xpZ2h0X3ZhcmlhbnRzIiwiYWN0aXZlX3NpZGViYXJfZGFya19jb2xvciIsIiRzaWRlYmFyX3ZhcmlhbnRzX2xpZ2h0IiwiYWN0aXZlX3NpZGViYXJfbGlnaHRfY29sb3IiLCJsb2dvX3NraW5zIiwiJGxvZ29fdmFyaWFudHMiLCIkY2xlYXJfYnRuIiwiaHJlZiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIiRsb2dvIiwiJGJyYW5kX3ZhcmlhbnRz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O0FBQ3JDLGNBQWMsbUJBQU8sQ0FBQyx1RkFBNkI7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBLEdBQUcsOERBQThEO0FBQ2pFO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDVFk7QUFDYjtBQUNBLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsZUFBZSxvSEFBOEM7QUFDN0QsMEJBQTBCLG1CQUFPLENBQUMsdUdBQXFDOztBQUV2RTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHLHdFQUF3RTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNwQlk7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLG9CQUFvQixtQkFBTyxDQUFDLHVGQUE2QjtBQUN6RCxzQkFBc0IsbUJBQU8sQ0FBQyw2RkFBZ0M7QUFDOUQsMEJBQTBCLG1CQUFPLENBQUMsdUdBQXFDOztBQUV2RTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHLHNFQUFzRTtBQUN6RTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQ2pCRCxhQUFhLG1CQUFPLENBQUMsdUVBQXFCO0FBQzFDLG1CQUFtQixtQkFBTyxDQUFDLHFGQUE0QjtBQUN2RCxjQUFjLG1CQUFPLENBQUMsdUZBQTZCO0FBQ25ELGtDQUFrQyxtQkFBTyxDQUFDLHVIQUE2Qzs7QUFFdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSIsImZpbGUiOiJkZW1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBZG1pbkxURSBEZW1vIE1lbnVcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLVxuICogWW91IHNob3VsZCBub3QgdXNlIHRoaXMgZmlsZSBpbiBwcm9kdWN0aW9uLlxuICogVGhpcyBmaWxlIGlzIGZvciBkZW1vIHB1cnBvc2VzIG9ubHkuXG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG5cbihmdW5jdGlvbiAoJCkge1xuICAndXNlIHN0cmljdCdcblxuICBmdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2tpbkJsb2NrKGNvbG9ycywgY2FsbGJhY2ssIG5vbmVTZWxlY3RlZCkge1xuICAgIHZhciAkYmxvY2sgPSAkKCc8c2VsZWN0IC8+Jywge1xuICAgICAgY2xhc3M6IG5vbmVTZWxlY3RlZCA/ICdjdXN0b20tc2VsZWN0IG1iLTMgYm9yZGVyLTAnIDogJ2N1c3RvbS1zZWxlY3QgbWItMyB0ZXh0LWxpZ2h0IGJvcmRlci0wICcgKyBjb2xvcnNbMF0ucmVwbGFjZSgvYWNjZW50LXxuYXZiYXItLywgJ2JnLScpXG4gICAgfSlcblxuICAgIGlmIChub25lU2VsZWN0ZWQpIHtcbiAgICAgIHZhciAkZGVmYXVsdCA9ICQoJzxvcHRpb24gLz4nLCB7XG4gICAgICAgIHRleHQ6ICdOb25lIFNlbGVjdGVkJ1xuICAgICAgfSlcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAkZGVmYXVsdC5vbignY2xpY2snLCBjYWxsYmFjaylcbiAgICAgIH1cblxuICAgICAgJGJsb2NrLmFwcGVuZCgkZGVmYXVsdClcbiAgICB9XG5cbiAgICBjb2xvcnMuZm9yRWFjaChmdW5jdGlvbiAoY29sb3IpIHtcbiAgICAgIHZhciAkY29sb3IgPSAkKCc8b3B0aW9uIC8+Jywge1xuICAgICAgICBjbGFzczogKHR5cGVvZiBjb2xvciA9PT0gJ29iamVjdCcgPyBjb2xvci5qb2luKCcgJykgOiBjb2xvcikucmVwbGFjZSgnbmF2YmFyLScsICdiZy0nKS5yZXBsYWNlKCdhY2NlbnQtJywgJ2JnLScpLFxuICAgICAgICB0ZXh0OiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoKHR5cGVvZiBjb2xvciA9PT0gJ29iamVjdCcgPyBjb2xvci5qb2luKCcgJykgOiBjb2xvcikucmVwbGFjZSgvbmF2YmFyLXxhY2NlbnQtfGJnLS8sICcnKS5yZXBsYWNlKCctJywgJyAnKSlcbiAgICAgIH0pXG5cbiAgICAgICRibG9jay5hcHBlbmQoJGNvbG9yKVxuXG4gICAgICAkY29sb3IuZGF0YSgnY29sb3InLCBjb2xvcilcblxuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICRjb2xvci5vbignY2xpY2snLCBjYWxsYmFjaylcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuICRibG9ja1xuICB9XG5cbiAgdmFyICRzaWRlYmFyID0gJCgnLmNvbnRyb2wtc2lkZWJhcicpXG4gIHZhciAkY29udGFpbmVyID0gJCgnPGRpdiAvPicsIHtcbiAgICBjbGFzczogJ3AtMyBjb250cm9sLXNpZGViYXItY29udGVudCdcbiAgfSlcblxuICAkc2lkZWJhci5hcHBlbmQoJGNvbnRhaW5lcilcblxuICAvLyBDaGVja2JveGVzXG5cbiAgJGNvbnRhaW5lci5hcHBlbmQoXG4gICAgJzxoNT5DdXN0b21pemUgQWRtaW5MVEU8L2g1PjxociBjbGFzcz1cIm1iLTJcIi8+J1xuICApXG5cbiAgdmFyICRkYXJrX21vZGVfY2hlY2tib3ggPSAkKCc8aW5wdXQgLz4nLCB7XG4gICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICB2YWx1ZTogMSxcbiAgICBjaGVja2VkOiAkKCdib2R5JykuaGFzQ2xhc3MoJ2RhcmstbW9kZScpLFxuICAgIGNsYXNzOiAnbXItMSdcbiAgfSkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2RhcmstbW9kZScpXG4gICAgfSBlbHNlIHtcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnZGFyay1tb2RlJylcbiAgICB9XG4gIH0pXG4gIHZhciAkZGFya19tb2RlX2NvbnRhaW5lciA9ICQoJzxkaXYgLz4nLCB7IGNsYXNzOiAnbWItNCcgfSkuYXBwZW5kKCRkYXJrX21vZGVfY2hlY2tib3gpLmFwcGVuZCgnPHNwYW4+RGFyayBNb2RlPC9zcGFuPicpXG4gICRjb250YWluZXIuYXBwZW5kKCRkYXJrX21vZGVfY29udGFpbmVyKVxuXG4gICRjb250YWluZXIuYXBwZW5kKCc8aDY+SGVhZGVyIE9wdGlvbnM8L2g2PicpXG4gIHZhciAkaGVhZGVyX2ZpeGVkX2NoZWNrYm94ID0gJCgnPGlucHV0IC8+Jywge1xuICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgdmFsdWU6IDEsXG4gICAgY2hlY2tlZDogJCgnYm9keScpLmhhc0NsYXNzKCdsYXlvdXQtbmF2YmFyLWZpeGVkJyksXG4gICAgY2xhc3M6ICdtci0xJ1xuICB9KS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnbGF5b3V0LW5hdmJhci1maXhlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbGF5b3V0LW5hdmJhci1maXhlZCcpXG4gICAgfVxuICB9KVxuICB2YXIgJGhlYWRlcl9maXhlZF9jb250YWluZXIgPSAkKCc8ZGl2IC8+JywgeyBjbGFzczogJ21iLTEnIH0pLmFwcGVuZCgkaGVhZGVyX2ZpeGVkX2NoZWNrYm94KS5hcHBlbmQoJzxzcGFuPkZpeGVkPC9zcGFuPicpXG4gICRjb250YWluZXIuYXBwZW5kKCRoZWFkZXJfZml4ZWRfY29udGFpbmVyKVxuXG4gIHZhciAkZHJvcGRvd25fbGVnYWN5X29mZnNldF9jaGVja2JveCA9ICQoJzxpbnB1dCAvPicsIHtcbiAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgIHZhbHVlOiAxLFxuICAgIGNoZWNrZWQ6ICQoJy5tYWluLWhlYWRlcicpLmhhc0NsYXNzKCdkcm9wZG93bi1sZWdhY3knKSxcbiAgICBjbGFzczogJ21yLTEnXG4gIH0pLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgJCgnLm1haW4taGVhZGVyJykuYWRkQ2xhc3MoJ2Ryb3Bkb3duLWxlZ2FjeScpXG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5tYWluLWhlYWRlcicpLnJlbW92ZUNsYXNzKCdkcm9wZG93bi1sZWdhY3knKVxuICAgIH1cbiAgfSlcbiAgdmFyICRkcm9wZG93bl9sZWdhY3lfb2Zmc2V0X2NvbnRhaW5lciA9ICQoJzxkaXYgLz4nLCB7IGNsYXNzOiAnbWItMScgfSkuYXBwZW5kKCRkcm9wZG93bl9sZWdhY3lfb2Zmc2V0X2NoZWNrYm94KS5hcHBlbmQoJzxzcGFuPkRyb3Bkb3duIExlZ2FjeSBPZmZzZXQ8L3NwYW4+JylcbiAgJGNvbnRhaW5lci5hcHBlbmQoJGRyb3Bkb3duX2xlZ2FjeV9vZmZzZXRfY29udGFpbmVyKVxuXG4gIHZhciAkbm9fYm9yZGVyX2NoZWNrYm94ID0gJCgnPGlucHV0IC8+Jywge1xuICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgdmFsdWU6IDEsXG4gICAgY2hlY2tlZDogJCgnLm1haW4taGVhZGVyJykuaGFzQ2xhc3MoJ2JvcmRlci1ib3R0b20tMCcpLFxuICAgIGNsYXNzOiAnbXItMSdcbiAgfSkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAkKCcubWFpbi1oZWFkZXInKS5hZGRDbGFzcygnYm9yZGVyLWJvdHRvbS0wJylcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLm1haW4taGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2JvcmRlci1ib3R0b20tMCcpXG4gICAgfVxuICB9KVxuICB2YXIgJG5vX2JvcmRlcl9jb250YWluZXIgPSAkKCc8ZGl2IC8+JywgeyBjbGFzczogJ21iLTQnIH0pLmFwcGVuZCgkbm9fYm9yZGVyX2NoZWNrYm94KS5hcHBlbmQoJzxzcGFuPk5vIGJvcmRlcjwvc3Bhbj4nKVxuICAkY29udGFpbmVyLmFwcGVuZCgkbm9fYm9yZGVyX2NvbnRhaW5lcilcblxuICAkY29udGFpbmVyLmFwcGVuZCgnPGg2PlNpZGViYXIgT3B0aW9uczwvaDY+JylcblxuICB2YXIgJHNpZGViYXJfY29sbGFwc2VkX2NoZWNrYm94ID0gJCgnPGlucHV0IC8+Jywge1xuICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgdmFsdWU6IDEsXG4gICAgY2hlY2tlZDogJCgnYm9keScpLmhhc0NsYXNzKCdzaWRlYmFyLWNvbGxhcHNlJyksXG4gICAgY2xhc3M6ICdtci0xJ1xuICB9KS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnc2lkZWJhci1jb2xsYXBzZScpXG4gICAgICAkKHdpbmRvdykudHJpZ2dlcigncmVzaXplJylcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdzaWRlYmFyLWNvbGxhcHNlJylcbiAgICAgICQod2luZG93KS50cmlnZ2VyKCdyZXNpemUnKVxuICAgIH1cbiAgfSlcbiAgdmFyICRzaWRlYmFyX2NvbGxhcHNlZF9jb250YWluZXIgPSAkKCc8ZGl2IC8+JywgeyBjbGFzczogJ21iLTEnIH0pLmFwcGVuZCgkc2lkZWJhcl9jb2xsYXBzZWRfY2hlY2tib3gpLmFwcGVuZCgnPHNwYW4+Q29sbGFwc2VkPC9zcGFuPicpXG4gICRjb250YWluZXIuYXBwZW5kKCRzaWRlYmFyX2NvbGxhcHNlZF9jb250YWluZXIpXG5cbiAgJChkb2N1bWVudCkub24oJ2NvbGxhcHNlZC5sdGUucHVzaG1lbnUnLCAnW2RhdGEtd2lkZ2V0PVwicHVzaG1lbnVcIl0nLCBmdW5jdGlvbiAoKSB7XG4gICAgJHNpZGViYXJfY29sbGFwc2VkX2NoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCB0cnVlKVxuICB9KVxuICAkKGRvY3VtZW50KS5vbignc2hvd24ubHRlLnB1c2htZW51JywgJ1tkYXRhLXdpZGdldD1cInB1c2htZW51XCJdJywgZnVuY3Rpb24gKCkge1xuICAgICRzaWRlYmFyX2NvbGxhcHNlZF9jaGVja2JveC5wcm9wKCdjaGVja2VkJywgZmFsc2UpXG4gIH0pXG5cbiAgdmFyICRzaWRlYmFyX2ZpeGVkX2NoZWNrYm94ID0gJCgnPGlucHV0IC8+Jywge1xuICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgdmFsdWU6IDEsXG4gICAgY2hlY2tlZDogJCgnYm9keScpLmhhc0NsYXNzKCdsYXlvdXQtZml4ZWQnKSxcbiAgICBjbGFzczogJ21yLTEnXG4gIH0pLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdsYXlvdXQtZml4ZWQnKVxuICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3Jlc2l6ZScpXG4gICAgfSBlbHNlIHtcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbGF5b3V0LWZpeGVkJylcbiAgICAgICQod2luZG93KS50cmlnZ2VyKCdyZXNpemUnKVxuICAgIH1cbiAgfSlcbiAgdmFyICRzaWRlYmFyX2ZpeGVkX2NvbnRhaW5lciA9ICQoJzxkaXYgLz4nLCB7IGNsYXNzOiAnbWItMScgfSkuYXBwZW5kKCRzaWRlYmFyX2ZpeGVkX2NoZWNrYm94KS5hcHBlbmQoJzxzcGFuPkZpeGVkPC9zcGFuPicpXG4gICRjb250YWluZXIuYXBwZW5kKCRzaWRlYmFyX2ZpeGVkX2NvbnRhaW5lcilcblxuICB2YXIgJHNpZGViYXJfbWluaV9jaGVja2JveCA9ICQoJzxpbnB1dCAvPicsIHtcbiAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgIHZhbHVlOiAxLFxuICAgIGNoZWNrZWQ6ICQoJ2JvZHknKS5oYXNDbGFzcygnc2lkZWJhci1taW5pJyksXG4gICAgY2xhc3M6ICdtci0xJ1xuICB9KS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnc2lkZWJhci1taW5pJylcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdzaWRlYmFyLW1pbmknKVxuICAgIH1cbiAgfSlcbiAgdmFyICRzaWRlYmFyX21pbmlfY29udGFpbmVyID0gJCgnPGRpdiAvPicsIHsgY2xhc3M6ICdtYi0xJyB9KS5hcHBlbmQoJHNpZGViYXJfbWluaV9jaGVja2JveCkuYXBwZW5kKCc8c3Bhbj5TaWRlYmFyIE1pbmk8L3NwYW4+JylcbiAgJGNvbnRhaW5lci5hcHBlbmQoJHNpZGViYXJfbWluaV9jb250YWluZXIpXG5cbiAgdmFyICRzaWRlYmFyX21pbmlfbWRfY2hlY2tib3ggPSAkKCc8aW5wdXQgLz4nLCB7XG4gICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICB2YWx1ZTogMSxcbiAgICBjaGVja2VkOiAkKCdib2R5JykuaGFzQ2xhc3MoJ3NpZGViYXItbWluaS1tZCcpLFxuICAgIGNsYXNzOiAnbXItMSdcbiAgfSkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ3NpZGViYXItbWluaS1tZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnc2lkZWJhci1taW5pLW1kJylcbiAgICB9XG4gIH0pXG4gIHZhciAkc2lkZWJhcl9taW5pX21kX2NvbnRhaW5lciA9ICQoJzxkaXYgLz4nLCB7IGNsYXNzOiAnbWItMScgfSkuYXBwZW5kKCRzaWRlYmFyX21pbmlfbWRfY2hlY2tib3gpLmFwcGVuZCgnPHNwYW4+U2lkZWJhciBNaW5pIE1EPC9zcGFuPicpXG4gICRjb250YWluZXIuYXBwZW5kKCRzaWRlYmFyX21pbmlfbWRfY29udGFpbmVyKVxuXG4gIHZhciAkc2lkZWJhcl9taW5pX3hzX2NoZWNrYm94ID0gJCgnPGlucHV0IC8+Jywge1xuICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgdmFsdWU6IDEsXG4gICAgY2hlY2tlZDogJCgnYm9keScpLmhhc0NsYXNzKCdzaWRlYmFyLW1pbmkteHMnKSxcbiAgICBjbGFzczogJ21yLTEnXG4gIH0pLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdzaWRlYmFyLW1pbmkteHMnKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3NpZGViYXItbWluaS14cycpXG4gICAgfVxuICB9KVxuICB2YXIgJHNpZGViYXJfbWluaV94c19jb250YWluZXIgPSAkKCc8ZGl2IC8+JywgeyBjbGFzczogJ21iLTEnIH0pLmFwcGVuZCgkc2lkZWJhcl9taW5pX3hzX2NoZWNrYm94KS5hcHBlbmQoJzxzcGFuPlNpZGViYXIgTWluaSBYUzwvc3Bhbj4nKVxuICAkY29udGFpbmVyLmFwcGVuZCgkc2lkZWJhcl9taW5pX3hzX2NvbnRhaW5lcilcblxuICB2YXIgJGZsYXRfc2lkZWJhcl9jaGVja2JveCA9ICQoJzxpbnB1dCAvPicsIHtcbiAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgIHZhbHVlOiAxLFxuICAgIGNoZWNrZWQ6ICQoJy5uYXYtc2lkZWJhcicpLmhhc0NsYXNzKCduYXYtZmxhdCcpLFxuICAgIGNsYXNzOiAnbXItMSdcbiAgfSkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAkKCcubmF2LXNpZGViYXInKS5hZGRDbGFzcygnbmF2LWZsYXQnKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKCcubmF2LXNpZGViYXInKS5yZW1vdmVDbGFzcygnbmF2LWZsYXQnKVxuICAgIH1cbiAgfSlcbiAgdmFyICRmbGF0X3NpZGViYXJfY29udGFpbmVyID0gJCgnPGRpdiAvPicsIHsgY2xhc3M6ICdtYi0xJyB9KS5hcHBlbmQoJGZsYXRfc2lkZWJhcl9jaGVja2JveCkuYXBwZW5kKCc8c3Bhbj5OYXYgRmxhdCBTdHlsZTwvc3Bhbj4nKVxuICAkY29udGFpbmVyLmFwcGVuZCgkZmxhdF9zaWRlYmFyX2NvbnRhaW5lcilcblxuICB2YXIgJGxlZ2FjeV9zaWRlYmFyX2NoZWNrYm94ID0gJCgnPGlucHV0IC8+Jywge1xuICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgdmFsdWU6IDEsXG4gICAgY2hlY2tlZDogJCgnLm5hdi1zaWRlYmFyJykuaGFzQ2xhc3MoJ25hdi1sZWdhY3knKSxcbiAgICBjbGFzczogJ21yLTEnXG4gIH0pLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgJCgnLm5hdi1zaWRlYmFyJykuYWRkQ2xhc3MoJ25hdi1sZWdhY3knKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKCcubmF2LXNpZGViYXInKS5yZW1vdmVDbGFzcygnbmF2LWxlZ2FjeScpXG4gICAgfVxuICB9KVxuICB2YXIgJGxlZ2FjeV9zaWRlYmFyX2NvbnRhaW5lciA9ICQoJzxkaXYgLz4nLCB7IGNsYXNzOiAnbWItMScgfSkuYXBwZW5kKCRsZWdhY3lfc2lkZWJhcl9jaGVja2JveCkuYXBwZW5kKCc8c3Bhbj5OYXYgTGVnYWN5IFN0eWxlPC9zcGFuPicpXG4gICRjb250YWluZXIuYXBwZW5kKCRsZWdhY3lfc2lkZWJhcl9jb250YWluZXIpXG5cbiAgdmFyICRjb21wYWN0X3NpZGViYXJfY2hlY2tib3ggPSAkKCc8aW5wdXQgLz4nLCB7XG4gICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICB2YWx1ZTogMSxcbiAgICBjaGVja2VkOiAkKCcubmF2LXNpZGViYXInKS5oYXNDbGFzcygnbmF2LWNvbXBhY3QnKSxcbiAgICBjbGFzczogJ21yLTEnXG4gIH0pLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgJCgnLm5hdi1zaWRlYmFyJykuYWRkQ2xhc3MoJ25hdi1jb21wYWN0JylcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLm5hdi1zaWRlYmFyJykucmVtb3ZlQ2xhc3MoJ25hdi1jb21wYWN0JylcbiAgICB9XG4gIH0pXG4gIHZhciAkY29tcGFjdF9zaWRlYmFyX2NvbnRhaW5lciA9ICQoJzxkaXYgLz4nLCB7IGNsYXNzOiAnbWItMScgfSkuYXBwZW5kKCRjb21wYWN0X3NpZGViYXJfY2hlY2tib3gpLmFwcGVuZCgnPHNwYW4+TmF2IENvbXBhY3Q8L3NwYW4+JylcbiAgJGNvbnRhaW5lci5hcHBlbmQoJGNvbXBhY3Rfc2lkZWJhcl9jb250YWluZXIpXG5cbiAgdmFyICRjaGlsZF9pbmRlbnRfc2lkZWJhcl9jaGVja2JveCA9ICQoJzxpbnB1dCAvPicsIHtcbiAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgIHZhbHVlOiAxLFxuICAgIGNoZWNrZWQ6ICQoJy5uYXYtc2lkZWJhcicpLmhhc0NsYXNzKCduYXYtY2hpbGQtaW5kZW50JyksXG4gICAgY2xhc3M6ICdtci0xJ1xuICB9KS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICQoJy5uYXYtc2lkZWJhcicpLmFkZENsYXNzKCduYXYtY2hpbGQtaW5kZW50JylcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLm5hdi1zaWRlYmFyJykucmVtb3ZlQ2xhc3MoJ25hdi1jaGlsZC1pbmRlbnQnKVxuICAgIH1cbiAgfSlcbiAgdmFyICRjaGlsZF9pbmRlbnRfc2lkZWJhcl9jb250YWluZXIgPSAkKCc8ZGl2IC8+JywgeyBjbGFzczogJ21iLTEnIH0pLmFwcGVuZCgkY2hpbGRfaW5kZW50X3NpZGViYXJfY2hlY2tib3gpLmFwcGVuZCgnPHNwYW4+TmF2IENoaWxkIEluZGVudDwvc3Bhbj4nKVxuICAkY29udGFpbmVyLmFwcGVuZCgkY2hpbGRfaW5kZW50X3NpZGViYXJfY29udGFpbmVyKVxuXG4gIHZhciAkY2hpbGRfaGlkZV9zaWRlYmFyX2NoZWNrYm94ID0gJCgnPGlucHV0IC8+Jywge1xuICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgdmFsdWU6IDEsXG4gICAgY2hlY2tlZDogJCgnLm5hdi1zaWRlYmFyJykuaGFzQ2xhc3MoJ25hdi1jb2xsYXBzZS1oaWRlLWNoaWxkJyksXG4gICAgY2xhc3M6ICdtci0xJ1xuICB9KS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICQoJy5uYXYtc2lkZWJhcicpLmFkZENsYXNzKCduYXYtY29sbGFwc2UtaGlkZS1jaGlsZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5uYXYtc2lkZWJhcicpLnJlbW92ZUNsYXNzKCduYXYtY29sbGFwc2UtaGlkZS1jaGlsZCcpXG4gICAgfVxuICB9KVxuICB2YXIgJGNoaWxkX2hpZGVfc2lkZWJhcl9jb250YWluZXIgPSAkKCc8ZGl2IC8+JywgeyBjbGFzczogJ21iLTEnIH0pLmFwcGVuZCgkY2hpbGRfaGlkZV9zaWRlYmFyX2NoZWNrYm94KS5hcHBlbmQoJzxzcGFuPk5hdiBDaGlsZCBIaWRlIG9uIENvbGxhcHNlPC9zcGFuPicpXG4gICRjb250YWluZXIuYXBwZW5kKCRjaGlsZF9oaWRlX3NpZGViYXJfY29udGFpbmVyKVxuXG4gIHZhciAkbm9fZXhwYW5kX3NpZGViYXJfY2hlY2tib3ggPSAkKCc8aW5wdXQgLz4nLCB7XG4gICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICB2YWx1ZTogMSxcbiAgICBjaGVja2VkOiAkKCcubWFpbi1zaWRlYmFyJykuaGFzQ2xhc3MoJ3NpZGViYXItbm8tZXhwYW5kJyksXG4gICAgY2xhc3M6ICdtci0xJ1xuICB9KS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICQoJy5tYWluLXNpZGViYXInKS5hZGRDbGFzcygnc2lkZWJhci1uby1leHBhbmQnKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKCcubWFpbi1zaWRlYmFyJykucmVtb3ZlQ2xhc3MoJ3NpZGViYXItbm8tZXhwYW5kJylcbiAgICB9XG4gIH0pXG4gIHZhciAkbm9fZXhwYW5kX3NpZGViYXJfY29udGFpbmVyID0gJCgnPGRpdiAvPicsIHsgY2xhc3M6ICdtYi00JyB9KS5hcHBlbmQoJG5vX2V4cGFuZF9zaWRlYmFyX2NoZWNrYm94KS5hcHBlbmQoJzxzcGFuPkRpc2FibGUgSG92ZXIvRm9jdXMgQXV0by1FeHBhbmQ8L3NwYW4+JylcbiAgJGNvbnRhaW5lci5hcHBlbmQoJG5vX2V4cGFuZF9zaWRlYmFyX2NvbnRhaW5lcilcblxuICAkY29udGFpbmVyLmFwcGVuZCgnPGg2PkZvb3RlciBPcHRpb25zPC9oNj4nKVxuICB2YXIgJGZvb3Rlcl9maXhlZF9jaGVja2JveCA9ICQoJzxpbnB1dCAvPicsIHtcbiAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgIHZhbHVlOiAxLFxuICAgIGNoZWNrZWQ6ICQoJ2JvZHknKS5oYXNDbGFzcygnbGF5b3V0LWZvb3Rlci1maXhlZCcpLFxuICAgIGNsYXNzOiAnbXItMSdcbiAgfSkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2xheW91dC1mb290ZXItZml4ZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2xheW91dC1mb290ZXItZml4ZWQnKVxuICAgIH1cbiAgfSlcbiAgdmFyICRmb290ZXJfZml4ZWRfY29udGFpbmVyID0gJCgnPGRpdiAvPicsIHsgY2xhc3M6ICdtYi00JyB9KS5hcHBlbmQoJGZvb3Rlcl9maXhlZF9jaGVja2JveCkuYXBwZW5kKCc8c3Bhbj5GaXhlZDwvc3Bhbj4nKVxuICAkY29udGFpbmVyLmFwcGVuZCgkZm9vdGVyX2ZpeGVkX2NvbnRhaW5lcilcblxuICAkY29udGFpbmVyLmFwcGVuZCgnPGg2PlNtYWxsIFRleHQgT3B0aW9uczwvaDY+JylcblxuICB2YXIgJHRleHRfc21fYm9keV9jaGVja2JveCA9ICQoJzxpbnB1dCAvPicsIHtcbiAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgIHZhbHVlOiAxLFxuICAgIGNoZWNrZWQ6ICQoJ2JvZHknKS5oYXNDbGFzcygndGV4dC1zbScpLFxuICAgIGNsYXNzOiAnbXItMSdcbiAgfSkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ3RleHQtc20nKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3RleHQtc20nKVxuICAgIH1cbiAgfSlcbiAgdmFyICR0ZXh0X3NtX2JvZHlfY29udGFpbmVyID0gJCgnPGRpdiAvPicsIHsgY2xhc3M6ICdtYi0xJyB9KS5hcHBlbmQoJHRleHRfc21fYm9keV9jaGVja2JveCkuYXBwZW5kKCc8c3Bhbj5Cb2R5PC9zcGFuPicpXG4gICRjb250YWluZXIuYXBwZW5kKCR0ZXh0X3NtX2JvZHlfY29udGFpbmVyKVxuXG4gIHZhciAkdGV4dF9zbV9oZWFkZXJfY2hlY2tib3ggPSAkKCc8aW5wdXQgLz4nLCB7XG4gICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICB2YWx1ZTogMSxcbiAgICBjaGVja2VkOiAkKCcubWFpbi1oZWFkZXInKS5oYXNDbGFzcygndGV4dC1zbScpLFxuICAgIGNsYXNzOiAnbXItMSdcbiAgfSkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAkKCcubWFpbi1oZWFkZXInKS5hZGRDbGFzcygndGV4dC1zbScpXG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5tYWluLWhlYWRlcicpLnJlbW92ZUNsYXNzKCd0ZXh0LXNtJylcbiAgICB9XG4gIH0pXG4gIHZhciAkdGV4dF9zbV9oZWFkZXJfY29udGFpbmVyID0gJCgnPGRpdiAvPicsIHsgY2xhc3M6ICdtYi0xJyB9KS5hcHBlbmQoJHRleHRfc21faGVhZGVyX2NoZWNrYm94KS5hcHBlbmQoJzxzcGFuPk5hdmJhcjwvc3Bhbj4nKVxuICAkY29udGFpbmVyLmFwcGVuZCgkdGV4dF9zbV9oZWFkZXJfY29udGFpbmVyKVxuXG4gIHZhciAkdGV4dF9zbV9icmFuZF9jaGVja2JveCA9ICQoJzxpbnB1dCAvPicsIHtcbiAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgIHZhbHVlOiAxLFxuICAgIGNoZWNrZWQ6ICQoJy5icmFuZC1saW5rJykuaGFzQ2xhc3MoJ3RleHQtc20nKSxcbiAgICBjbGFzczogJ21yLTEnXG4gIH0pLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgJCgnLmJyYW5kLWxpbmsnKS5hZGRDbGFzcygndGV4dC1zbScpXG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5icmFuZC1saW5rJykucmVtb3ZlQ2xhc3MoJ3RleHQtc20nKVxuICAgIH1cbiAgfSlcbiAgdmFyICR0ZXh0X3NtX2JyYW5kX2NvbnRhaW5lciA9ICQoJzxkaXYgLz4nLCB7IGNsYXNzOiAnbWItMScgfSkuYXBwZW5kKCR0ZXh0X3NtX2JyYW5kX2NoZWNrYm94KS5hcHBlbmQoJzxzcGFuPkJyYW5kPC9zcGFuPicpXG4gICRjb250YWluZXIuYXBwZW5kKCR0ZXh0X3NtX2JyYW5kX2NvbnRhaW5lcilcblxuICB2YXIgJHRleHRfc21fc2lkZWJhcl9jaGVja2JveCA9ICQoJzxpbnB1dCAvPicsIHtcbiAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgIHZhbHVlOiAxLFxuICAgIGNoZWNrZWQ6ICQoJy5uYXYtc2lkZWJhcicpLmhhc0NsYXNzKCd0ZXh0LXNtJyksXG4gICAgY2xhc3M6ICdtci0xJ1xuICB9KS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICQoJy5uYXYtc2lkZWJhcicpLmFkZENsYXNzKCd0ZXh0LXNtJylcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLm5hdi1zaWRlYmFyJykucmVtb3ZlQ2xhc3MoJ3RleHQtc20nKVxuICAgIH1cbiAgfSlcbiAgdmFyICR0ZXh0X3NtX3NpZGViYXJfY29udGFpbmVyID0gJCgnPGRpdiAvPicsIHsgY2xhc3M6ICdtYi0xJyB9KS5hcHBlbmQoJHRleHRfc21fc2lkZWJhcl9jaGVja2JveCkuYXBwZW5kKCc8c3Bhbj5TaWRlYmFyIE5hdjwvc3Bhbj4nKVxuICAkY29udGFpbmVyLmFwcGVuZCgkdGV4dF9zbV9zaWRlYmFyX2NvbnRhaW5lcilcblxuICB2YXIgJHRleHRfc21fZm9vdGVyX2NoZWNrYm94ID0gJCgnPGlucHV0IC8+Jywge1xuICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgdmFsdWU6IDEsXG4gICAgY2hlY2tlZDogJCgnLm1haW4tZm9vdGVyJykuaGFzQ2xhc3MoJ3RleHQtc20nKSxcbiAgICBjbGFzczogJ21yLTEnXG4gIH0pLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgJCgnLm1haW4tZm9vdGVyJykuYWRkQ2xhc3MoJ3RleHQtc20nKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKCcubWFpbi1mb290ZXInKS5yZW1vdmVDbGFzcygndGV4dC1zbScpXG4gICAgfVxuICB9KVxuICB2YXIgJHRleHRfc21fZm9vdGVyX2NvbnRhaW5lciA9ICQoJzxkaXYgLz4nLCB7IGNsYXNzOiAnbWItNCcgfSkuYXBwZW5kKCR0ZXh0X3NtX2Zvb3Rlcl9jaGVja2JveCkuYXBwZW5kKCc8c3Bhbj5Gb290ZXI8L3NwYW4+JylcbiAgJGNvbnRhaW5lci5hcHBlbmQoJHRleHRfc21fZm9vdGVyX2NvbnRhaW5lcilcblxuICAvLyBDb2xvciBBcnJheXNcblxuICB2YXIgbmF2YmFyX2Rhcmtfc2tpbnMgPSBbXG4gICAgJ25hdmJhci1wcmltYXJ5JyxcbiAgICAnbmF2YmFyLXNlY29uZGFyeScsXG4gICAgJ25hdmJhci1pbmZvJyxcbiAgICAnbmF2YmFyLXN1Y2Nlc3MnLFxuICAgICduYXZiYXItZGFuZ2VyJyxcbiAgICAnbmF2YmFyLWluZGlnbycsXG4gICAgJ25hdmJhci1wdXJwbGUnLFxuICAgICduYXZiYXItcGluaycsXG4gICAgJ25hdmJhci1uYXZ5JyxcbiAgICAnbmF2YmFyLWxpZ2h0Ymx1ZScsXG4gICAgJ25hdmJhci10ZWFsJyxcbiAgICAnbmF2YmFyLWN5YW4nLFxuICAgICduYXZiYXItZGFyaycsXG4gICAgJ25hdmJhci1ncmF5LWRhcmsnLFxuICAgICduYXZiYXItZ3JheSdcbiAgXVxuXG4gIHZhciBuYXZiYXJfbGlnaHRfc2tpbnMgPSBbXG4gICAgJ25hdmJhci1saWdodCcsXG4gICAgJ25hdmJhci13YXJuaW5nJyxcbiAgICAnbmF2YmFyLXdoaXRlJyxcbiAgICAnbmF2YmFyLW9yYW5nZSdcbiAgXVxuXG4gIHZhciBzaWRlYmFyX2NvbG9ycyA9IFtcbiAgICAnYmctcHJpbWFyeScsXG4gICAgJ2JnLXdhcm5pbmcnLFxuICAgICdiZy1pbmZvJyxcbiAgICAnYmctZGFuZ2VyJyxcbiAgICAnYmctc3VjY2VzcycsXG4gICAgJ2JnLWluZGlnbycsXG4gICAgJ2JnLWxpZ2h0Ymx1ZScsXG4gICAgJ2JnLW5hdnknLFxuICAgICdiZy1wdXJwbGUnLFxuICAgICdiZy1mdWNoc2lhJyxcbiAgICAnYmctcGluaycsXG4gICAgJ2JnLW1hcm9vbicsXG4gICAgJ2JnLW9yYW5nZScsXG4gICAgJ2JnLWxpbWUnLFxuICAgICdiZy10ZWFsJyxcbiAgICAnYmctb2xpdmUnXG4gIF1cblxuICB2YXIgYWNjZW50X2NvbG9ycyA9IFtcbiAgICAnYWNjZW50LXByaW1hcnknLFxuICAgICdhY2NlbnQtd2FybmluZycsXG4gICAgJ2FjY2VudC1pbmZvJyxcbiAgICAnYWNjZW50LWRhbmdlcicsXG4gICAgJ2FjY2VudC1zdWNjZXNzJyxcbiAgICAnYWNjZW50LWluZGlnbycsXG4gICAgJ2FjY2VudC1saWdodGJsdWUnLFxuICAgICdhY2NlbnQtbmF2eScsXG4gICAgJ2FjY2VudC1wdXJwbGUnLFxuICAgICdhY2NlbnQtZnVjaHNpYScsXG4gICAgJ2FjY2VudC1waW5rJyxcbiAgICAnYWNjZW50LW1hcm9vbicsXG4gICAgJ2FjY2VudC1vcmFuZ2UnLFxuICAgICdhY2NlbnQtbGltZScsXG4gICAgJ2FjY2VudC10ZWFsJyxcbiAgICAnYWNjZW50LW9saXZlJ1xuICBdXG5cbiAgdmFyIHNpZGViYXJfc2tpbnMgPSBbXG4gICAgJ3NpZGViYXItZGFyay1wcmltYXJ5JyxcbiAgICAnc2lkZWJhci1kYXJrLXdhcm5pbmcnLFxuICAgICdzaWRlYmFyLWRhcmstaW5mbycsXG4gICAgJ3NpZGViYXItZGFyay1kYW5nZXInLFxuICAgICdzaWRlYmFyLWRhcmstc3VjY2VzcycsXG4gICAgJ3NpZGViYXItZGFyay1pbmRpZ28nLFxuICAgICdzaWRlYmFyLWRhcmstbGlnaHRibHVlJyxcbiAgICAnc2lkZWJhci1kYXJrLW5hdnknLFxuICAgICdzaWRlYmFyLWRhcmstcHVycGxlJyxcbiAgICAnc2lkZWJhci1kYXJrLWZ1Y2hzaWEnLFxuICAgICdzaWRlYmFyLWRhcmstcGluaycsXG4gICAgJ3NpZGViYXItZGFyay1tYXJvb24nLFxuICAgICdzaWRlYmFyLWRhcmstb3JhbmdlJyxcbiAgICAnc2lkZWJhci1kYXJrLWxpbWUnLFxuICAgICdzaWRlYmFyLWRhcmstdGVhbCcsXG4gICAgJ3NpZGViYXItZGFyay1vbGl2ZScsXG4gICAgJ3NpZGViYXItbGlnaHQtcHJpbWFyeScsXG4gICAgJ3NpZGViYXItbGlnaHQtd2FybmluZycsXG4gICAgJ3NpZGViYXItbGlnaHQtaW5mbycsXG4gICAgJ3NpZGViYXItbGlnaHQtZGFuZ2VyJyxcbiAgICAnc2lkZWJhci1saWdodC1zdWNjZXNzJyxcbiAgICAnc2lkZWJhci1saWdodC1pbmRpZ28nLFxuICAgICdzaWRlYmFyLWxpZ2h0LWxpZ2h0Ymx1ZScsXG4gICAgJ3NpZGViYXItbGlnaHQtbmF2eScsXG4gICAgJ3NpZGViYXItbGlnaHQtcHVycGxlJyxcbiAgICAnc2lkZWJhci1saWdodC1mdWNoc2lhJyxcbiAgICAnc2lkZWJhci1saWdodC1waW5rJyxcbiAgICAnc2lkZWJhci1saWdodC1tYXJvb24nLFxuICAgICdzaWRlYmFyLWxpZ2h0LW9yYW5nZScsXG4gICAgJ3NpZGViYXItbGlnaHQtbGltZScsXG4gICAgJ3NpZGViYXItbGlnaHQtdGVhbCcsXG4gICAgJ3NpZGViYXItbGlnaHQtb2xpdmUnXG4gIF1cblxuICAvLyBOYXZiYXIgVmFyaWFudHNcblxuICAkY29udGFpbmVyLmFwcGVuZCgnPGg2Pk5hdmJhciBWYXJpYW50czwvaDY+JylcblxuICB2YXIgJG5hdmJhcl92YXJpYW50cyA9ICQoJzxkaXYgLz4nLCB7XG4gICAgY2xhc3M6ICdkLWZsZXgnXG4gIH0pXG4gIHZhciBuYXZiYXJfYWxsX2NvbG9ycyA9IG5hdmJhcl9kYXJrX3NraW5zLmNvbmNhdChuYXZiYXJfbGlnaHRfc2tpbnMpXG4gIHZhciAkbmF2YmFyX3ZhcmlhbnRzX2NvbG9ycyA9IGNyZWF0ZVNraW5CbG9jayhuYXZiYXJfYWxsX2NvbG9ycywgZnVuY3Rpb24gKCkge1xuICAgIHZhciBjb2xvciA9ICQodGhpcykuZGF0YSgnY29sb3InKVxuICAgIHZhciAkbWFpbl9oZWFkZXIgPSAkKCcubWFpbi1oZWFkZXInKVxuICAgICRtYWluX2hlYWRlci5yZW1vdmVDbGFzcygnbmF2YmFyLWRhcmsnKS5yZW1vdmVDbGFzcygnbmF2YmFyLWxpZ2h0JylcbiAgICBuYXZiYXJfYWxsX2NvbG9ycy5mb3JFYWNoKGZ1bmN0aW9uIChjb2xvcikge1xuICAgICAgJG1haW5faGVhZGVyLnJlbW92ZUNsYXNzKGNvbG9yKVxuICAgIH0pXG5cbiAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCkuYWRkQ2xhc3MoJ2N1c3RvbS1zZWxlY3QgbWItMyB0ZXh0LWxpZ2h0IGJvcmRlci0wICcpXG5cbiAgICBpZiAobmF2YmFyX2Rhcmtfc2tpbnMuaW5kZXhPZihjb2xvcikgPiAtMSkge1xuICAgICAgJG1haW5faGVhZGVyLmFkZENsYXNzKCduYXZiYXItZGFyaycpXG4gICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKGNvbG9yKS5hZGRDbGFzcygndGV4dC1saWdodCcpXG4gICAgfSBlbHNlIHtcbiAgICAgICRtYWluX2hlYWRlci5hZGRDbGFzcygnbmF2YmFyLWxpZ2h0JylcbiAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoY29sb3IpXG4gICAgfVxuXG4gICAgJG1haW5faGVhZGVyLmFkZENsYXNzKGNvbG9yKVxuICB9KVxuXG4gIHZhciBhY3RpdmVfbmF2YmFyX2NvbG9yID0gbnVsbFxuICAkKCcubWFpbi1oZWFkZXInKVswXS5jbGFzc0xpc3QuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgaWYgKG5hdmJhcl9hbGxfY29sb3JzLmluZGV4T2YoY2xhc3NOYW1lKSA+IC0xICYmIGFjdGl2ZV9uYXZiYXJfY29sb3IgPT09IG51bGwpIHtcbiAgICAgIGFjdGl2ZV9uYXZiYXJfY29sb3IgPSBjbGFzc05hbWUucmVwbGFjZSgnbmF2YmFyLScsICdiZy0nKVxuICAgIH1cbiAgfSlcblxuICAkbmF2YmFyX3ZhcmlhbnRzX2NvbG9ycy5maW5kKCdvcHRpb24uJyArIGFjdGl2ZV9uYXZiYXJfY29sb3IpLnByb3AoJ3NlbGVjdGVkJywgdHJ1ZSlcbiAgJG5hdmJhcl92YXJpYW50c19jb2xvcnMucmVtb3ZlQ2xhc3MoKS5hZGRDbGFzcygnY3VzdG9tLXNlbGVjdCBtYi0zIHRleHQtbGlnaHQgYm9yZGVyLTAgJykuYWRkQ2xhc3MoYWN0aXZlX25hdmJhcl9jb2xvcilcblxuICAkbmF2YmFyX3ZhcmlhbnRzLmFwcGVuZCgkbmF2YmFyX3ZhcmlhbnRzX2NvbG9ycylcblxuICAkY29udGFpbmVyLmFwcGVuZCgkbmF2YmFyX3ZhcmlhbnRzKVxuXG4gIC8vIFNpZGViYXIgQ29sb3JzXG5cbiAgJGNvbnRhaW5lci5hcHBlbmQoJzxoNj5BY2NlbnQgQ29sb3IgVmFyaWFudHM8L2g2PicpXG4gIHZhciAkYWNjZW50X3ZhcmlhbnRzID0gJCgnPGRpdiAvPicsIHtcbiAgICBjbGFzczogJ2QtZmxleCdcbiAgfSlcbiAgJGNvbnRhaW5lci5hcHBlbmQoJGFjY2VudF92YXJpYW50cylcbiAgJGNvbnRhaW5lci5hcHBlbmQoY3JlYXRlU2tpbkJsb2NrKGFjY2VudF9jb2xvcnMsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY29sb3IgPSAkKHRoaXMpLmRhdGEoJ2NvbG9yJylcbiAgICB2YXIgYWNjZW50X2NsYXNzID0gY29sb3JcbiAgICB2YXIgJGJvZHkgPSAkKCdib2R5JylcbiAgICBhY2NlbnRfY29sb3JzLmZvckVhY2goZnVuY3Rpb24gKHNraW4pIHtcbiAgICAgICRib2R5LnJlbW92ZUNsYXNzKHNraW4pXG4gICAgfSlcblxuICAgICRib2R5LmFkZENsYXNzKGFjY2VudF9jbGFzcylcbiAgfSwgdHJ1ZSkpXG5cbiAgdmFyIGFjdGl2ZV9hY2NlbnRfY29sb3IgPSBudWxsXG4gICQoJ2JvZHknKVswXS5jbGFzc0xpc3QuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgaWYgKGFjY2VudF9jb2xvcnMuaW5kZXhPZihjbGFzc05hbWUpID4gLTEgJiYgYWN0aXZlX2FjY2VudF9jb2xvciA9PT0gbnVsbCkge1xuICAgICAgYWN0aXZlX2FjY2VudF9jb2xvciA9IGNsYXNzTmFtZS5yZXBsYWNlKCduYXZiYXItJywgJ2JnLScpXG4gICAgfVxuICB9KVxuXG4gIC8vICRhY2NlbnRfdmFyaWFudHMuZmluZCgnb3B0aW9uLicgKyBhY3RpdmVfYWNjZW50X2NvbG9yKS5wcm9wKCdzZWxlY3RlZCcsIHRydWUpXG4gIC8vICRhY2NlbnRfdmFyaWFudHMucmVtb3ZlQ2xhc3MoKS5hZGRDbGFzcygnY3VzdG9tLXNlbGVjdCBtYi0zIHRleHQtbGlnaHQgYm9yZGVyLTAgJykuYWRkQ2xhc3MoYWN0aXZlX2FjY2VudF9jb2xvcilcblxuICAkY29udGFpbmVyLmFwcGVuZCgnPGg2PkRhcmsgU2lkZWJhciBWYXJpYW50czwvaDY+JylcbiAgdmFyICRzaWRlYmFyX3ZhcmlhbnRzX2RhcmsgPSAkKCc8ZGl2IC8+Jywge1xuICAgIGNsYXNzOiAnZC1mbGV4J1xuICB9KVxuICAkY29udGFpbmVyLmFwcGVuZCgkc2lkZWJhcl92YXJpYW50c19kYXJrKVxuICB2YXIgJHNpZGViYXJfZGFya192YXJpYW50cyA9IGNyZWF0ZVNraW5CbG9jayhzaWRlYmFyX2NvbG9ycywgZnVuY3Rpb24gKCkge1xuICAgIHZhciBjb2xvciA9ICQodGhpcykuZGF0YSgnY29sb3InKVxuICAgIHZhciBzaWRlYmFyX2NsYXNzID0gJ3NpZGViYXItZGFyay0nICsgY29sb3IucmVwbGFjZSgnYmctJywgJycpXG4gICAgdmFyICRzaWRlYmFyID0gJCgnLm1haW4tc2lkZWJhcicpXG4gICAgc2lkZWJhcl9za2lucy5mb3JFYWNoKGZ1bmN0aW9uIChza2luKSB7XG4gICAgICAkc2lkZWJhci5yZW1vdmVDbGFzcyhza2luKVxuICAgICAgJHNpZGViYXJfbGlnaHRfdmFyaWFudHMucmVtb3ZlQ2xhc3Moc2tpbi5yZXBsYWNlKCdzaWRlYmFyLWRhcmstJywgJ2JnLScpKS5yZW1vdmVDbGFzcygndGV4dC1saWdodCcpXG4gICAgfSlcblxuICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoKS5hZGRDbGFzcygnY3VzdG9tLXNlbGVjdCBtYi0zIHRleHQtbGlnaHQgYm9yZGVyLTAnKS5hZGRDbGFzcyhjb2xvcilcblxuICAgICRzaWRlYmFyX2xpZ2h0X3ZhcmlhbnRzLmZpbmQoJ29wdGlvbicpLnByb3AoJ3NlbGVjdGVkJywgZmFsc2UpXG4gICAgJHNpZGViYXIuYWRkQ2xhc3Moc2lkZWJhcl9jbGFzcylcbiAgICAkKCcuc2lkZWJhcicpLnJlbW92ZUNsYXNzKCdvcy10aGVtZS1kYXJrJykuYWRkQ2xhc3MoJ29zLXRoZW1lLWxpZ2h0JylcbiAgfSwgdHJ1ZSlcbiAgJGNvbnRhaW5lci5hcHBlbmQoJHNpZGViYXJfZGFya192YXJpYW50cylcblxuICB2YXIgYWN0aXZlX3NpZGViYXJfZGFya19jb2xvciA9IG51bGxcbiAgJCgnLm1haW4tc2lkZWJhcicpWzBdLmNsYXNzTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICB2YXIgY29sb3IgPSBjbGFzc05hbWUucmVwbGFjZSgnc2lkZWJhci1kYXJrLScsICdiZy0nKVxuICAgIGlmIChzaWRlYmFyX2NvbG9ycy5pbmRleE9mKGNvbG9yKSA+IC0xICYmIGFjdGl2ZV9zaWRlYmFyX2RhcmtfY29sb3IgPT09IG51bGwpIHtcbiAgICAgIGFjdGl2ZV9zaWRlYmFyX2RhcmtfY29sb3IgPSBjb2xvclxuICAgIH1cbiAgfSlcblxuICAkc2lkZWJhcl9kYXJrX3ZhcmlhbnRzLmZpbmQoJ29wdGlvbi4nICsgYWN0aXZlX3NpZGViYXJfZGFya19jb2xvcikucHJvcCgnc2VsZWN0ZWQnLCB0cnVlKVxuICAkc2lkZWJhcl9kYXJrX3ZhcmlhbnRzLnJlbW92ZUNsYXNzKCkuYWRkQ2xhc3MoJ2N1c3RvbS1zZWxlY3QgbWItMyB0ZXh0LWxpZ2h0IGJvcmRlci0wICcpLmFkZENsYXNzKGFjdGl2ZV9zaWRlYmFyX2RhcmtfY29sb3IpXG5cbiAgJGNvbnRhaW5lci5hcHBlbmQoJzxoNj5MaWdodCBTaWRlYmFyIFZhcmlhbnRzPC9oNj4nKVxuICB2YXIgJHNpZGViYXJfdmFyaWFudHNfbGlnaHQgPSAkKCc8ZGl2IC8+Jywge1xuICAgIGNsYXNzOiAnZC1mbGV4J1xuICB9KVxuICAkY29udGFpbmVyLmFwcGVuZCgkc2lkZWJhcl92YXJpYW50c19saWdodClcbiAgdmFyICRzaWRlYmFyX2xpZ2h0X3ZhcmlhbnRzID0gY3JlYXRlU2tpbkJsb2NrKHNpZGViYXJfY29sb3JzLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNvbG9yID0gJCh0aGlzKS5kYXRhKCdjb2xvcicpXG4gICAgdmFyIHNpZGViYXJfY2xhc3MgPSAnc2lkZWJhci1saWdodC0nICsgY29sb3IucmVwbGFjZSgnYmctJywgJycpXG4gICAgdmFyICRzaWRlYmFyID0gJCgnLm1haW4tc2lkZWJhcicpXG4gICAgc2lkZWJhcl9za2lucy5mb3JFYWNoKGZ1bmN0aW9uIChza2luKSB7XG4gICAgICAkc2lkZWJhci5yZW1vdmVDbGFzcyhza2luKVxuICAgICAgJHNpZGViYXJfZGFya192YXJpYW50cy5yZW1vdmVDbGFzcyhza2luLnJlcGxhY2UoJ3NpZGViYXItbGlnaHQtJywgJ2JnLScpKS5yZW1vdmVDbGFzcygndGV4dC1saWdodCcpXG4gICAgfSlcblxuICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoKS5hZGRDbGFzcygnY3VzdG9tLXNlbGVjdCBtYi0zIHRleHQtbGlnaHQgYm9yZGVyLTAnKS5hZGRDbGFzcyhjb2xvcilcblxuICAgICRzaWRlYmFyX2RhcmtfdmFyaWFudHMuZmluZCgnb3B0aW9uJykucHJvcCgnc2VsZWN0ZWQnLCBmYWxzZSlcbiAgICAkc2lkZWJhci5hZGRDbGFzcyhzaWRlYmFyX2NsYXNzKVxuICAgICQoJy5zaWRlYmFyJykucmVtb3ZlQ2xhc3MoJ29zLXRoZW1lLWxpZ2h0JykuYWRkQ2xhc3MoJ29zLXRoZW1lLWRhcmsnKVxuICB9LCB0cnVlKVxuICAkY29udGFpbmVyLmFwcGVuZCgkc2lkZWJhcl9saWdodF92YXJpYW50cylcblxuICB2YXIgYWN0aXZlX3NpZGViYXJfbGlnaHRfY29sb3IgPSBudWxsXG4gICQoJy5tYWluLXNpZGViYXInKVswXS5jbGFzc0xpc3QuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgdmFyIGNvbG9yID0gY2xhc3NOYW1lLnJlcGxhY2UoJ3NpZGViYXItbGlnaHQtJywgJ2JnLScpXG4gICAgaWYgKHNpZGViYXJfY29sb3JzLmluZGV4T2YoY29sb3IpID4gLTEgJiYgYWN0aXZlX3NpZGViYXJfbGlnaHRfY29sb3IgPT09IG51bGwpIHtcbiAgICAgIGFjdGl2ZV9zaWRlYmFyX2xpZ2h0X2NvbG9yID0gY29sb3JcbiAgICB9XG4gIH0pXG5cbiAgaWYgKGFjdGl2ZV9zaWRlYmFyX2xpZ2h0X2NvbG9yICE9PSBudWxsKSB7XG4gICAgJHNpZGViYXJfbGlnaHRfdmFyaWFudHMuZmluZCgnb3B0aW9uLicgKyBhY3RpdmVfc2lkZWJhcl9saWdodF9jb2xvcikucHJvcCgnc2VsZWN0ZWQnLCB0cnVlKVxuICAgICRzaWRlYmFyX2xpZ2h0X3ZhcmlhbnRzLnJlbW92ZUNsYXNzKCkuYWRkQ2xhc3MoJ2N1c3RvbS1zZWxlY3QgbWItMyB0ZXh0LWxpZ2h0IGJvcmRlci0wICcpLmFkZENsYXNzKGFjdGl2ZV9zaWRlYmFyX2xpZ2h0X2NvbG9yKVxuICB9XG5cbiAgdmFyIGxvZ29fc2tpbnMgPSBuYXZiYXJfYWxsX2NvbG9yc1xuICAkY29udGFpbmVyLmFwcGVuZCgnPGg2PkJyYW5kIExvZ28gVmFyaWFudHM8L2g2PicpXG4gIHZhciAkbG9nb192YXJpYW50cyA9ICQoJzxkaXYgLz4nLCB7XG4gICAgY2xhc3M6ICdkLWZsZXgnXG4gIH0pXG4gICRjb250YWluZXIuYXBwZW5kKCRsb2dvX3ZhcmlhbnRzKVxuICB2YXIgJGNsZWFyX2J0biA9ICQoJzxhIC8+Jywge1xuICAgIGhyZWY6ICcjJ1xuICB9KS50ZXh0KCdjbGVhcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdmFyICRsb2dvID0gJCgnLmJyYW5kLWxpbmsnKVxuICAgIGxvZ29fc2tpbnMuZm9yRWFjaChmdW5jdGlvbiAoc2tpbikge1xuICAgICAgJGxvZ28ucmVtb3ZlQ2xhc3Moc2tpbilcbiAgICB9KVxuICB9KVxuXG4gIHZhciAkYnJhbmRfdmFyaWFudHMgPSBjcmVhdGVTa2luQmxvY2sobG9nb19za2lucywgZnVuY3Rpb24gKCkge1xuICAgIHZhciBjb2xvciA9ICQodGhpcykuZGF0YSgnY29sb3InKVxuICAgIHZhciAkbG9nbyA9ICQoJy5icmFuZC1saW5rJylcblxuICAgIGlmIChjb2xvciA9PT0gJ25hdmJhci1saWdodCcgfHwgY29sb3IgPT09ICduYXZiYXItd2hpdGUnKSB7XG4gICAgICAkbG9nby5hZGRDbGFzcygndGV4dC1ibGFjaycpXG4gICAgfSBlbHNlIHtcbiAgICAgICRsb2dvLnJlbW92ZUNsYXNzKCd0ZXh0LWJsYWNrJylcbiAgICB9XG5cbiAgICBsb2dvX3NraW5zLmZvckVhY2goZnVuY3Rpb24gKHNraW4pIHtcbiAgICAgICRsb2dvLnJlbW92ZUNsYXNzKHNraW4pXG4gICAgfSlcblxuICAgIGlmIChjb2xvcikge1xuICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygpLmFkZENsYXNzKCdjdXN0b20tc2VsZWN0IG1iLTMgYm9yZGVyLTAnKS5hZGRDbGFzcyhjb2xvcikuYWRkQ2xhc3MoY29sb3IgIT09ICduYXZiYXItbGlnaHQnICYmIGNvbG9yICE9PSAnbmF2YmFyLXdoaXRlJyA/ICd0ZXh0LWxpZ2h0JyA6ICcnKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCkuYWRkQ2xhc3MoJ2N1c3RvbS1zZWxlY3QgbWItMyBib3JkZXItMCcpXG4gICAgfVxuXG4gICAgJGxvZ28uYWRkQ2xhc3MoY29sb3IpXG4gIH0sIHRydWUpLmFwcGVuZCgkY2xlYXJfYnRuKVxuICAkY29udGFpbmVyLmFwcGVuZCgkYnJhbmRfdmFyaWFudHMpXG5cbiAgdmFyIGFjdGl2ZV9icmFuZF9jb2xvciA9IG51bGxcbiAgJCgnLmJyYW5kLWxpbmsnKVswXS5jbGFzc0xpc3QuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgaWYgKGxvZ29fc2tpbnMuaW5kZXhPZihjbGFzc05hbWUpID4gLTEgJiYgYWN0aXZlX2JyYW5kX2NvbG9yID09PSBudWxsKSB7XG4gICAgICBhY3RpdmVfYnJhbmRfY29sb3IgPSBjbGFzc05hbWUucmVwbGFjZSgnbmF2YmFyLScsICdiZy0nKVxuICAgIH1cbiAgfSlcblxuICBpZiAoYWN0aXZlX2JyYW5kX2NvbG9yKSB7XG4gICAgJGJyYW5kX3ZhcmlhbnRzLmZpbmQoJ29wdGlvbi4nICsgYWN0aXZlX2JyYW5kX2NvbG9yKS5wcm9wKCdzZWxlY3RlZCcsIHRydWUpXG4gICAgJGJyYW5kX3ZhcmlhbnRzLnJlbW92ZUNsYXNzKCkuYWRkQ2xhc3MoJ2N1c3RvbS1zZWxlY3QgbWItMyB0ZXh0LWxpZ2h0IGJvcmRlci0wICcpLmFkZENsYXNzKGFjdGl2ZV9icmFuZF9jb2xvcilcbiAgfVxufSkoalF1ZXJ5KVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZvckVhY2g7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG5cbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnZm9yRWFjaCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxubW9kdWxlLmV4cG9ydHMgPSAhU1RSSUNUX01FVEhPRCA/IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgcmV0dXJuICRmb3JFYWNoKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1wcm90b3R5cGUtZm9yZWFjaCAtLSBzYWZlXG59IDogW10uZm9yRWFjaDtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSwgYXJndW1lbnQpIHtcbiAgdmFyIG1ldGhvZCA9IFtdW01FVEhPRF9OQU1FXTtcbiAgcmV0dXJuICEhbWV0aG9kICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1jYWxsLG5vLXRocm93LWxpdGVyYWwgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgICBtZXRob2QuY2FsbChudWxsLCBhcmd1bWVudCB8fCBmdW5jdGlvbiAoKSB7IHRocm93IDE7IH0sIDEpO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciBhcnJheVNwZWNpZXNDcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xuXG52YXIgSVNfQ09OQ0FUX1NQUkVBREFCTEUgPSB3ZWxsS25vd25TeW1ib2woJ2lzQ29uY2F0U3ByZWFkYWJsZScpO1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSAweDFGRkZGRkZGRkZGRkZGO1xudmFyIE1BWElNVU1fQUxMT1dFRF9JTkRFWF9FWENFRURFRCA9ICdNYXhpbXVtIGFsbG93ZWQgaW5kZXggZXhjZWVkZWQnO1xuXG4vLyBXZSBjYW4ndCB1c2UgdGhpcyBmZWF0dXJlIGRldGVjdGlvbiBpbiBWOCBzaW5jZSBpdCBjYXVzZXNcbi8vIGRlb3B0aW1pemF0aW9uIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjc5XG52YXIgSVNfQ09OQ0FUX1NQUkVBREFCTEVfU1VQUE9SVCA9IFY4X1ZFUlNJT04gPj0gNTEgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGFycmF5ID0gW107XG4gIGFycmF5W0lTX0NPTkNBVF9TUFJFQURBQkxFXSA9IGZhbHNlO1xuICByZXR1cm4gYXJyYXkuY29uY2F0KClbMF0gIT09IGFycmF5O1xufSk7XG5cbnZhciBTUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdjb25jYXQnKTtcblxudmFyIGlzQ29uY2F0U3ByZWFkYWJsZSA9IGZ1bmN0aW9uIChPKSB7XG4gIGlmICghaXNPYmplY3QoTykpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNwcmVhZGFibGUgPSBPW0lTX0NPTkNBVF9TUFJFQURBQkxFXTtcbiAgcmV0dXJuIHNwcmVhZGFibGUgIT09IHVuZGVmaW5lZCA/ICEhc3ByZWFkYWJsZSA6IGlzQXJyYXkoTyk7XG59O1xuXG52YXIgRk9SQ0VEID0gIUlTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgfHwgIVNQRUNJRVNfU1VQUE9SVDtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5jb25jYXRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuY29uY2F0XG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAaXNDb25jYXRTcHJlYWRhYmxlIGFuZCBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFycyAtLSByZXF1aXJlZCBmb3IgYC5sZW5ndGhgXG4gIGNvbmNhdDogZnVuY3Rpb24gY29uY2F0KGFyZykge1xuICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gICAgdmFyIEEgPSBhcnJheVNwZWNpZXNDcmVhdGUoTywgMCk7XG4gICAgdmFyIG4gPSAwO1xuICAgIHZhciBpLCBrLCBsZW5ndGgsIGxlbiwgRTtcbiAgICBmb3IgKGkgPSAtMSwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBFID0gaSA9PT0gLTEgPyBPIDogYXJndW1lbnRzW2ldO1xuICAgICAgaWYgKGlzQ29uY2F0U3ByZWFkYWJsZShFKSkge1xuICAgICAgICBsZW4gPSB0b0xlbmd0aChFLmxlbmd0aCk7XG4gICAgICAgIGlmIChuICsgbGVuID4gTUFYX1NBRkVfSU5URUdFUikgdGhyb3cgVHlwZUVycm9yKE1BWElNVU1fQUxMT1dFRF9JTkRFWF9FWENFRURFRCk7XG4gICAgICAgIGZvciAoayA9IDA7IGsgPCBsZW47IGsrKywgbisrKSBpZiAoayBpbiBFKSBjcmVhdGVQcm9wZXJ0eShBLCBuLCBFW2tdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChuID49IE1BWF9TQUZFX0lOVEVHRVIpIHRocm93IFR5cGVFcnJvcihNQVhJTVVNX0FMTE9XRURfSU5ERVhfRVhDRUVERUQpO1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShBLCBuKyssIEUpO1xuICAgICAgfVxuICAgIH1cbiAgICBBLmxlbmd0aCA9IG47XG4gICAgcmV0dXJuIEE7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGZpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZmluZDtcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpO1xuXG52YXIgRklORCA9ICdmaW5kJztcbnZhciBTS0lQU19IT0xFUyA9IHRydWU7XG5cbi8vIFNob3VsZG4ndCBza2lwIGhvbGVzXG5pZiAoRklORCBpbiBbXSkgQXJyYXkoMSlbRklORF0oZnVuY3Rpb24gKCkgeyBTS0lQU19IT0xFUyA9IGZhbHNlOyB9KTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5maW5kYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFNLSVBTX0hPTEVTIH0sIHtcbiAgZmluZDogZnVuY3Rpb24gZmluZChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xuICAgIHJldHVybiAkZmluZCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5hZGRUb1Vuc2NvcGFibGVzKEZJTkQpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mb3ItZWFjaCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1mb3JlYWNoIC0tIHNhZmVcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFtdLmZvckVhY2ggIT0gZm9yRWFjaCB9LCB7XG4gIGZvckVhY2g6IGZvckVhY2hcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWluZGV4b2YgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRpbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5kZXhPZjtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcblxudmFyIG5hdGl2ZUluZGV4T2YgPSBbXS5pbmRleE9mO1xuXG52YXIgTkVHQVRJVkVfWkVSTyA9ICEhbmF0aXZlSW5kZXhPZiAmJiAxIC8gWzFdLmluZGV4T2YoMSwgLTApIDwgMDtcbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnaW5kZXhPZicpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogTkVHQVRJVkVfWkVSTyB8fCAhU1RSSUNUX01FVEhPRCB9LCB7XG4gIGluZGV4T2Y6IGZ1bmN0aW9uIGluZGV4T2Yoc2VhcmNoRWxlbWVudCAvKiAsIGZyb21JbmRleCA9IDAgKi8pIHtcbiAgICByZXR1cm4gTkVHQVRJVkVfWkVST1xuICAgICAgLy8gY29udmVydCAtMCB0byArMFxuICAgICAgPyBuYXRpdmVJbmRleE9mLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgMFxuICAgICAgOiAkaW5kZXhPZih0aGlzLCBzZWFyY2hFbGVtZW50LCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xuXG52YXIgbmF0aXZlSm9pbiA9IFtdLmpvaW47XG5cbnZhciBFUzNfU1RSSU5HUyA9IEluZGV4ZWRPYmplY3QgIT0gT2JqZWN0O1xudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdqb2luJywgJywnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5qb2luYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmpvaW5cbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEVTM19TVFJJTkdTIHx8ICFTVFJJQ1RfTUVUSE9EIH0sIHtcbiAgam9pbjogZnVuY3Rpb24gam9pbihzZXBhcmF0b3IpIHtcbiAgICByZXR1cm4gbmF0aXZlSm9pbi5jYWxsKHRvSW5kZXhlZE9iamVjdCh0aGlzKSwgc2VwYXJhdG9yID09PSB1bmRlZmluZWQgPyAnLCcgOiBzZXBhcmF0b3IpO1xuICB9XG59KTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgRE9NSXRlcmFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvbS1pdGVyYWJsZXMnKTtcbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xuXG5mb3IgKHZhciBDT0xMRUNUSU9OX05BTUUgaW4gRE9NSXRlcmFibGVzKSB7XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW0NPTExFQ1RJT05fTkFNRV07XG4gIHZhciBDb2xsZWN0aW9uUHJvdG90eXBlID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgLy8gc29tZSBDaHJvbWUgdmVyc2lvbnMgaGF2ZSBub24tY29uZmlndXJhYmxlIG1ldGhvZHMgb24gRE9NVG9rZW5MaXN0XG4gIGlmIChDb2xsZWN0aW9uUHJvdG90eXBlICYmIENvbGxlY3Rpb25Qcm90b3R5cGUuZm9yRWFjaCAhPT0gZm9yRWFjaCkgdHJ5IHtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoQ29sbGVjdGlvblByb3RvdHlwZSwgJ2ZvckVhY2gnLCBmb3JFYWNoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBDb2xsZWN0aW9uUHJvdG90eXBlLmZvckVhY2ggPSBmb3JFYWNoO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9