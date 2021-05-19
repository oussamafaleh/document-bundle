(self["webpackChunk"] = self["webpackChunk"] || []).push([["adminlte"],{

/***/ "./public/assets/js/adminlte.js":
/*!**************************************!*\
  !*** ./public/assets/js/adminlte.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");

__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");

__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");

__webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.string.link.js */ "./node_modules/core-js/modules/es.string.link.js");

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");

__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.fixed.js */ "./node_modules/core-js/modules/es.string.fixed.js");

__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * AdminLTE v3.1.0-rc (https://adminlte.io)
 * Copyright 2014-2020 Colorlib <https://colorlib.com>
 * Licensed under MIT (https://github.com/ColorlibHQ/AdminLTE/blob/master/LICENSE)
 */
(function (global, factory) {
  ( false ? 0 : _typeof(exports)) === 'object' && "object" !== 'undefined' ? factory(exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (0);
})(this, function (exports, $) {
  'use strict';

  function _interopDefaultLegacy(e) {
    return e && _typeof(e) === 'object' && 'default' in e ? e : {
      'default': e
    };
  }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);
  /**
   * --------------------------------------------
   * AdminLTE CardRefresh.js
   * License MIT
   * --------------------------------------------
   */

  /**
   * Constants
   * ====================================================
   */


  var NAME = 'CardRefresh';
  var DATA_KEY = 'lte.cardrefresh';
  var EVENT_KEY = "." + DATA_KEY;
  var JQUERY_NO_CONFLICT = $__default['default'].fn[NAME];
  var EVENT_LOADED = "loaded" + EVENT_KEY;
  var EVENT_OVERLAY_ADDED = "overlay.added" + EVENT_KEY;
  var EVENT_OVERLAY_REMOVED = "overlay.removed" + EVENT_KEY;
  var CLASS_NAME_CARD = 'card';
  var SELECTOR_CARD = "." + CLASS_NAME_CARD;
  var SELECTOR_DATA_REFRESH = '[data-card-widget="card-refresh"]';
  var Default = {
    source: '',
    sourceSelector: '',
    params: {},
    trigger: SELECTOR_DATA_REFRESH,
    content: '.card-body',
    loadInContent: true,
    loadOnInit: true,
    responseType: '',
    overlayTemplate: '<div class="overlay"><i class="fas fa-2x fa-sync-alt fa-spin"></i></div>',
    onLoadStart: function onLoadStart() {},
    onLoadDone: function onLoadDone(response) {
      return response;
    }
  };

  var CardRefresh = /*#__PURE__*/function () {
    function CardRefresh(element, settings) {
      this._element = element;
      this._parent = element.parents(SELECTOR_CARD).first();
      this._settings = $__default['default'].extend({}, Default, settings);
      this._overlay = $__default['default'](this._settings.overlayTemplate);

      if (element.hasClass(CLASS_NAME_CARD)) {
        this._parent = element;
      }

      if (this._settings.source === '') {
        throw new Error('Source url was not defined. Please specify a url in your CardRefresh source option.');
      }
    }

    var _proto = CardRefresh.prototype;

    _proto.load = function load() {
      var _this = this;

      this._addOverlay();

      this._settings.onLoadStart.call($__default['default'](this));

      $__default['default'].get(this._settings.source, this._settings.params, function (response) {
        if (_this._settings.loadInContent) {
          if (_this._settings.sourceSelector !== '') {
            response = $__default['default'](response).find(_this._settings.sourceSelector).html();
          }

          _this._parent.find(_this._settings.content).html(response);
        }

        _this._settings.onLoadDone.call($__default['default'](_this), response);

        _this._removeOverlay();
      }, this._settings.responseType !== '' && this._settings.responseType);
      $__default['default'](this._element).trigger($__default['default'].Event(EVENT_LOADED));
    };

    _proto._addOverlay = function _addOverlay() {
      this._parent.append(this._overlay);

      $__default['default'](this._element).trigger($__default['default'].Event(EVENT_OVERLAY_ADDED));
    };

    _proto._removeOverlay = function _removeOverlay() {
      this._parent.find(this._overlay).remove();

      $__default['default'](this._element).trigger($__default['default'].Event(EVENT_OVERLAY_REMOVED));
    } // Private
    ;

    _proto._init = function _init() {
      var _this2 = this;

      $__default['default'](this).find(this._settings.trigger).on('click', function () {
        _this2.load();
      });

      if (this._settings.loadOnInit) {
        this.load();
      }
    } // Static
    ;

    CardRefresh._jQueryInterface = function _jQueryInterface(config) {
      var data = $__default['default'](this).data(DATA_KEY);

      var _options = $__default['default'].extend({}, Default, $__default['default'](this).data());

      if (!data) {
        data = new CardRefresh($__default['default'](this), _options);
        $__default['default'](this).data(DATA_KEY, typeof config === 'string' ? data : config);
      }

      if (typeof config === 'string' && config.match(/load/)) {
        data[config]();
      } else {
        data._init($__default['default'](this));
      }
    };

    return CardRefresh;
  }();
  /**
   * Data API
   * ====================================================
   */


  $__default['default'](document).on('click', SELECTOR_DATA_REFRESH, function (event) {
    if (event) {
      event.preventDefault();
    }

    CardRefresh._jQueryInterface.call($__default['default'](this), 'load');
  });
  $__default['default'](function () {
    $__default['default'](SELECTOR_DATA_REFRESH).each(function () {
      CardRefresh._jQueryInterface.call($__default['default'](this));
    });
  });
  /**
   * jQuery API
   * ====================================================
   */

  $__default['default'].fn[NAME] = CardRefresh._jQueryInterface;
  $__default['default'].fn[NAME].Constructor = CardRefresh;

  $__default['default'].fn[NAME].noConflict = function () {
    $__default['default'].fn[NAME] = JQUERY_NO_CONFLICT;
    return CardRefresh._jQueryInterface;
  };
  /**
   * --------------------------------------------
   * AdminLTE CardWidget.js
   * License MIT
   * --------------------------------------------
   */

  /**
   * Constants
   * ====================================================
   */


  var NAME$1 = 'CardWidget';
  var DATA_KEY$1 = 'lte.cardwidget';
  var EVENT_KEY$1 = "." + DATA_KEY$1;
  var JQUERY_NO_CONFLICT$1 = $__default['default'].fn[NAME$1];
  var EVENT_EXPANDED = "expanded" + EVENT_KEY$1;
  var EVENT_COLLAPSED = "collapsed" + EVENT_KEY$1;
  var EVENT_MAXIMIZED = "maximized" + EVENT_KEY$1;
  var EVENT_MINIMIZED = "minimized" + EVENT_KEY$1;
  var EVENT_REMOVED = "removed" + EVENT_KEY$1;
  var CLASS_NAME_CARD$1 = 'card';
  var CLASS_NAME_COLLAPSED = 'collapsed-card';
  var CLASS_NAME_COLLAPSING = 'collapsing-card';
  var CLASS_NAME_EXPANDING = 'expanding-card';
  var CLASS_NAME_WAS_COLLAPSED = 'was-collapsed';
  var CLASS_NAME_MAXIMIZED = 'maximized-card';
  var SELECTOR_DATA_REMOVE = '[data-card-widget="remove"]';
  var SELECTOR_DATA_COLLAPSE = '[data-card-widget="collapse"]';
  var SELECTOR_DATA_MAXIMIZE = '[data-card-widget="maximize"]';
  var SELECTOR_CARD$1 = "." + CLASS_NAME_CARD$1;
  var SELECTOR_CARD_HEADER = '.card-header';
  var SELECTOR_CARD_BODY = '.card-body';
  var SELECTOR_CARD_FOOTER = '.card-footer';
  var Default$1 = {
    animationSpeed: 'normal',
    collapseTrigger: SELECTOR_DATA_COLLAPSE,
    removeTrigger: SELECTOR_DATA_REMOVE,
    maximizeTrigger: SELECTOR_DATA_MAXIMIZE,
    collapseIcon: 'fa-minus',
    expandIcon: 'fa-plus',
    maximizeIcon: 'fa-expand',
    minimizeIcon: 'fa-compress'
  };

  var CardWidget = /*#__PURE__*/function () {
    function CardWidget(element, settings) {
      this._element = element;
      this._parent = element.parents(SELECTOR_CARD$1).first();

      if (element.hasClass(CLASS_NAME_CARD$1)) {
        this._parent = element;
      }

      this._settings = $__default['default'].extend({}, Default$1, settings);
    }

    var _proto = CardWidget.prototype;

    _proto.collapse = function collapse() {
      var _this = this;

      this._parent.addClass(CLASS_NAME_COLLAPSING).children(SELECTOR_CARD_BODY + ", " + SELECTOR_CARD_FOOTER).slideUp(this._settings.animationSpeed, function () {
        _this._parent.addClass(CLASS_NAME_COLLAPSED).removeClass(CLASS_NAME_COLLAPSING);
      });

      this._parent.find("> " + SELECTOR_CARD_HEADER + " " + this._settings.collapseTrigger + " ." + this._settings.collapseIcon).addClass(this._settings.expandIcon).removeClass(this._settings.collapseIcon);

      this._element.trigger($__default['default'].Event(EVENT_COLLAPSED), this._parent);
    };

    _proto.expand = function expand() {
      var _this2 = this;

      this._parent.addClass(CLASS_NAME_EXPANDING).children(SELECTOR_CARD_BODY + ", " + SELECTOR_CARD_FOOTER).slideDown(this._settings.animationSpeed, function () {
        _this2._parent.removeClass(CLASS_NAME_COLLAPSED).removeClass(CLASS_NAME_EXPANDING);
      });

      this._parent.find("> " + SELECTOR_CARD_HEADER + " " + this._settings.collapseTrigger + " ." + this._settings.expandIcon).addClass(this._settings.collapseIcon).removeClass(this._settings.expandIcon);

      this._element.trigger($__default['default'].Event(EVENT_EXPANDED), this._parent);
    };

    _proto.remove = function remove() {
      this._parent.slideUp();

      this._element.trigger($__default['default'].Event(EVENT_REMOVED), this._parent);
    };

    _proto.toggle = function toggle() {
      if (this._parent.hasClass(CLASS_NAME_COLLAPSED)) {
        this.expand();
        return;
      }

      this.collapse();
    };

    _proto.maximize = function maximize() {
      this._parent.find(this._settings.maximizeTrigger + " ." + this._settings.maximizeIcon).addClass(this._settings.minimizeIcon).removeClass(this._settings.maximizeIcon);

      this._parent.css({
        height: this._parent.height(),
        width: this._parent.width(),
        transition: 'all .15s'
      }).delay(150).queue(function () {
        var $element = $__default['default'](this);
        $element.addClass(CLASS_NAME_MAXIMIZED);
        $__default['default']('html').addClass(CLASS_NAME_MAXIMIZED);

        if ($element.hasClass(CLASS_NAME_COLLAPSED)) {
          $element.addClass(CLASS_NAME_WAS_COLLAPSED);
        }

        $element.dequeue();
      });

      this._element.trigger($__default['default'].Event(EVENT_MAXIMIZED), this._parent);
    };

    _proto.minimize = function minimize() {
      this._parent.find(this._settings.maximizeTrigger + " ." + this._settings.minimizeIcon).addClass(this._settings.maximizeIcon).removeClass(this._settings.minimizeIcon);

      this._parent.css('cssText', "height: " + this._parent[0].style.height + " !important; width: " + this._parent[0].style.width + " !important; transition: all .15s;").delay(10).queue(function () {
        var $element = $__default['default'](this);
        $element.removeClass(CLASS_NAME_MAXIMIZED);
        $__default['default']('html').removeClass(CLASS_NAME_MAXIMIZED);
        $element.css({
          height: 'inherit',
          width: 'inherit'
        });

        if ($element.hasClass(CLASS_NAME_WAS_COLLAPSED)) {
          $element.removeClass(CLASS_NAME_WAS_COLLAPSED);
        }

        $element.dequeue();
      });

      this._element.trigger($__default['default'].Event(EVENT_MINIMIZED), this._parent);
    };

    _proto.toggleMaximize = function toggleMaximize() {
      if (this._parent.hasClass(CLASS_NAME_MAXIMIZED)) {
        this.minimize();
        return;
      }

      this.maximize();
    } // Private
    ;

    _proto._init = function _init(card) {
      var _this3 = this;

      this._parent = card;
      $__default['default'](this).find(this._settings.collapseTrigger).click(function () {
        _this3.toggle();
      });
      $__default['default'](this).find(this._settings.maximizeTrigger).click(function () {
        _this3.toggleMaximize();
      });
      $__default['default'](this).find(this._settings.removeTrigger).click(function () {
        _this3.remove();
      });
    } // Static
    ;

    CardWidget._jQueryInterface = function _jQueryInterface(config) {
      var data = $__default['default'](this).data(DATA_KEY$1);

      var _options = $__default['default'].extend({}, Default$1, $__default['default'](this).data());

      if (!data) {
        data = new CardWidget($__default['default'](this), _options);
        $__default['default'](this).data(DATA_KEY$1, typeof config === 'string' ? data : config);
      }

      if (typeof config === 'string' && config.match(/collapse|expand|remove|toggle|maximize|minimize|toggleMaximize/)) {
        data[config]();
      } else if (_typeof(config) === 'object') {
        data._init($__default['default'](this));
      }
    };

    return CardWidget;
  }();
  /**
   * Data API
   * ====================================================
   */


  $__default['default'](document).on('click', SELECTOR_DATA_COLLAPSE, function (event) {
    if (event) {
      event.preventDefault();
    }

    CardWidget._jQueryInterface.call($__default['default'](this), 'toggle');
  });
  $__default['default'](document).on('click', SELECTOR_DATA_REMOVE, function (event) {
    if (event) {
      event.preventDefault();
    }

    CardWidget._jQueryInterface.call($__default['default'](this), 'remove');
  });
  $__default['default'](document).on('click', SELECTOR_DATA_MAXIMIZE, function (event) {
    if (event) {
      event.preventDefault();
    }

    CardWidget._jQueryInterface.call($__default['default'](this), 'toggleMaximize');
  });
  /**
   * jQuery API
   * ====================================================
   */

  $__default['default'].fn[NAME$1] = CardWidget._jQueryInterface;
  $__default['default'].fn[NAME$1].Constructor = CardWidget;

  $__default['default'].fn[NAME$1].noConflict = function () {
    $__default['default'].fn[NAME$1] = JQUERY_NO_CONFLICT$1;
    return CardWidget._jQueryInterface;
  };
  /**
   * --------------------------------------------
   * AdminLTE ControlSidebar.js
   * License MIT
   * --------------------------------------------
   */

  /**
   * Constants
   * ====================================================
   */


  var NAME$2 = 'ControlSidebar';
  var DATA_KEY$2 = 'lte.controlsidebar';
  var EVENT_KEY$2 = "." + DATA_KEY$2;
  var JQUERY_NO_CONFLICT$2 = $__default['default'].fn[NAME$2];
  var EVENT_COLLAPSED$1 = "collapsed" + EVENT_KEY$2;
  var EVENT_EXPANDED$1 = "expanded" + EVENT_KEY$2;
  var SELECTOR_CONTROL_SIDEBAR = '.control-sidebar';
  var SELECTOR_CONTROL_SIDEBAR_CONTENT = '.control-sidebar-content';
  var SELECTOR_DATA_TOGGLE = '[data-widget="control-sidebar"]';
  var SELECTOR_HEADER = '.main-header';
  var SELECTOR_FOOTER = '.main-footer';
  var CLASS_NAME_CONTROL_SIDEBAR_ANIMATE = 'control-sidebar-animate';
  var CLASS_NAME_CONTROL_SIDEBAR_OPEN = 'control-sidebar-open';
  var CLASS_NAME_CONTROL_SIDEBAR_SLIDE = 'control-sidebar-slide-open';
  var CLASS_NAME_LAYOUT_FIXED = 'layout-fixed';
  var CLASS_NAME_NAVBAR_FIXED = 'layout-navbar-fixed';
  var CLASS_NAME_NAVBAR_SM_FIXED = 'layout-sm-navbar-fixed';
  var CLASS_NAME_NAVBAR_MD_FIXED = 'layout-md-navbar-fixed';
  var CLASS_NAME_NAVBAR_LG_FIXED = 'layout-lg-navbar-fixed';
  var CLASS_NAME_NAVBAR_XL_FIXED = 'layout-xl-navbar-fixed';
  var CLASS_NAME_FOOTER_FIXED = 'layout-footer-fixed';
  var CLASS_NAME_FOOTER_SM_FIXED = 'layout-sm-footer-fixed';
  var CLASS_NAME_FOOTER_MD_FIXED = 'layout-md-footer-fixed';
  var CLASS_NAME_FOOTER_LG_FIXED = 'layout-lg-footer-fixed';
  var CLASS_NAME_FOOTER_XL_FIXED = 'layout-xl-footer-fixed';
  var Default$2 = {
    controlsidebarSlide: true,
    scrollbarTheme: 'os-theme-light',
    scrollbarAutoHide: 'l'
  };
  /**
   * Class Definition
   * ====================================================
   */

  var ControlSidebar = /*#__PURE__*/function () {
    function ControlSidebar(element, config) {
      this._element = element;
      this._config = config;

      this._init();
    } // Public


    var _proto = ControlSidebar.prototype;

    _proto.collapse = function collapse() {
      var $body = $__default['default']('body');
      var $html = $__default['default']('html'); // Show the control sidebar

      if (this._config.controlsidebarSlide) {
        $html.addClass(CLASS_NAME_CONTROL_SIDEBAR_ANIMATE);
        $body.removeClass(CLASS_NAME_CONTROL_SIDEBAR_SLIDE).delay(300).queue(function () {
          $__default['default'](SELECTOR_CONTROL_SIDEBAR).hide();
          $html.removeClass(CLASS_NAME_CONTROL_SIDEBAR_ANIMATE);
          $__default['default'](this).dequeue();
        });
      } else {
        $body.removeClass(CLASS_NAME_CONTROL_SIDEBAR_OPEN);
      }

      $__default['default'](this._element).trigger($__default['default'].Event(EVENT_COLLAPSED$1));
    };

    _proto.show = function show() {
      var $body = $__default['default']('body');
      var $html = $__default['default']('html'); // Collapse the control sidebar

      if (this._config.controlsidebarSlide) {
        $html.addClass(CLASS_NAME_CONTROL_SIDEBAR_ANIMATE);
        $__default['default'](SELECTOR_CONTROL_SIDEBAR).show().delay(10).queue(function () {
          $body.addClass(CLASS_NAME_CONTROL_SIDEBAR_SLIDE).delay(300).queue(function () {
            $html.removeClass(CLASS_NAME_CONTROL_SIDEBAR_ANIMATE);
            $__default['default'](this).dequeue();
          });
          $__default['default'](this).dequeue();
        });
      } else {
        $body.addClass(CLASS_NAME_CONTROL_SIDEBAR_OPEN);
      }

      this._fixHeight();

      this._fixScrollHeight();

      $__default['default'](this._element).trigger($__default['default'].Event(EVENT_EXPANDED$1));
    };

    _proto.toggle = function toggle() {
      var $body = $__default['default']('body');
      var shouldClose = $body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_OPEN) || $body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_SLIDE);

      if (shouldClose) {
        // Close the control sidebar
        this.collapse();
      } else {
        // Open the control sidebar
        this.show();
      }
    } // Private
    ;

    _proto._init = function _init() {
      var _this = this;

      this._fixHeight();

      this._fixScrollHeight();

      $__default['default'](window).resize(function () {
        _this._fixHeight();

        _this._fixScrollHeight();
      });
      $__default['default'](window).scroll(function () {
        var $body = $__default['default']('body');
        var shouldFixHeight = $body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_OPEN) || $body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_SLIDE);

        if (shouldFixHeight) {
          _this._fixScrollHeight();
        }
      });
    };

    _proto._fixScrollHeight = function _fixScrollHeight() {
      var $body = $__default['default']('body');

      if (!$body.hasClass(CLASS_NAME_LAYOUT_FIXED)) {
        return;
      }

      var heights = {
        scroll: $__default['default'](document).height(),
        window: $__default['default'](window).height(),
        header: $__default['default'](SELECTOR_HEADER).outerHeight(),
        footer: $__default['default'](SELECTOR_FOOTER).outerHeight()
      };
      var positions = {
        bottom: Math.abs(heights.window + $__default['default'](window).scrollTop() - heights.scroll),
        top: $__default['default'](window).scrollTop()
      };
      var navbarFixed = ($body.hasClass(CLASS_NAME_NAVBAR_FIXED) || $body.hasClass(CLASS_NAME_NAVBAR_SM_FIXED) || $body.hasClass(CLASS_NAME_NAVBAR_MD_FIXED) || $body.hasClass(CLASS_NAME_NAVBAR_LG_FIXED) || $body.hasClass(CLASS_NAME_NAVBAR_XL_FIXED)) && $__default['default'](SELECTOR_HEADER).css('position') === 'fixed';
      var footerFixed = ($body.hasClass(CLASS_NAME_FOOTER_FIXED) || $body.hasClass(CLASS_NAME_FOOTER_SM_FIXED) || $body.hasClass(CLASS_NAME_FOOTER_MD_FIXED) || $body.hasClass(CLASS_NAME_FOOTER_LG_FIXED) || $body.hasClass(CLASS_NAME_FOOTER_XL_FIXED)) && $__default['default'](SELECTOR_FOOTER).css('position') === 'fixed';
      var $controlSidebar = $__default['default'](SELECTOR_CONTROL_SIDEBAR);
      var $controlsidebarContent = $__default['default'](SELECTOR_CONTROL_SIDEBAR + ", " + SELECTOR_CONTROL_SIDEBAR + " " + SELECTOR_CONTROL_SIDEBAR_CONTENT);

      if (positions.top === 0 && positions.bottom === 0) {
        $controlSidebar.css({
          bottom: heights.footer,
          top: heights.header
        });
        $controlsidebarContent.css('height', heights.window - (heights.header + heights.footer));
      } else if (positions.bottom <= heights.footer) {
        if (footerFixed === false) {
          var top = heights.header - positions.top;
          $controlSidebar.css('bottom', heights.footer - positions.bottom).css('top', top >= 0 ? top : 0);
          $controlsidebarContent.css('height', heights.window - (heights.footer - positions.bottom));
        } else {
          $controlSidebar.css('bottom', heights.footer);
        }
      } else if (positions.top <= heights.header) {
        if (navbarFixed === false) {
          $controlSidebar.css('top', heights.header - positions.top);
          $controlsidebarContent.css('height', heights.window - (heights.header - positions.top));
        } else {
          $controlSidebar.css('top', heights.header);
        }
      } else if (navbarFixed === false) {
        $controlSidebar.css('top', 0);
        $controlsidebarContent.css('height', heights.window);
      } else {
        $controlSidebar.css('top', heights.header);
      }
    };

    _proto._fixHeight = function _fixHeight() {
      var $body = $__default['default']('body');

      if (!$body.hasClass(CLASS_NAME_LAYOUT_FIXED)) {
        return;
      }

      var heights = {
        window: $__default['default'](window).height(),
        header: $__default['default'](SELECTOR_HEADER).outerHeight(),
        footer: $__default['default'](SELECTOR_FOOTER).outerHeight()
      };
      var sidebarHeight = heights.window - heights.header;

      if ($body.hasClass(CLASS_NAME_FOOTER_FIXED) || $body.hasClass(CLASS_NAME_FOOTER_SM_FIXED) || $body.hasClass(CLASS_NAME_FOOTER_MD_FIXED) || $body.hasClass(CLASS_NAME_FOOTER_LG_FIXED) || $body.hasClass(CLASS_NAME_FOOTER_XL_FIXED)) {
        if ($__default['default'](SELECTOR_FOOTER).css('position') === 'fixed') {
          sidebarHeight = heights.window - heights.header - heights.footer;
        }
      }

      var $controlSidebar = $__default['default'](SELECTOR_CONTROL_SIDEBAR + " " + SELECTOR_CONTROL_SIDEBAR_CONTENT);
      $controlSidebar.css('height', sidebarHeight);

      if (typeof $__default['default'].fn.overlayScrollbars !== 'undefined') {
        $controlSidebar.overlayScrollbars({
          className: this._config.scrollbarTheme,
          sizeAutoCapable: true,
          scrollbars: {
            autoHide: this._config.scrollbarAutoHide,
            clickScrolling: true
          }
        });
      }
    } // Static
    ;

    ControlSidebar._jQueryInterface = function _jQueryInterface(operation) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$2);

        var _options = $__default['default'].extend({}, Default$2, $__default['default'](this).data());

        if (!data) {
          data = new ControlSidebar(this, _options);
          $__default['default'](this).data(DATA_KEY$2, data);
        }

        if (data[operation] === 'undefined') {
          throw new Error(operation + " is not a function");
        }

        data[operation]();
      });
    };

    return ControlSidebar;
  }();
  /**
   *
   * Data Api implementation
   * ====================================================
   */


  $__default['default'](document).on('click', SELECTOR_DATA_TOGGLE, function (event) {
    event.preventDefault();

    ControlSidebar._jQueryInterface.call($__default['default'](this), 'toggle');
  });
  /**
   * jQuery API
   * ====================================================
   */

  $__default['default'].fn[NAME$2] = ControlSidebar._jQueryInterface;
  $__default['default'].fn[NAME$2].Constructor = ControlSidebar;

  $__default['default'].fn[NAME$2].noConflict = function () {
    $__default['default'].fn[NAME$2] = JQUERY_NO_CONFLICT$2;
    return ControlSidebar._jQueryInterface;
  };
  /**
   * --------------------------------------------
   * AdminLTE DirectChat.js
   * License MIT
   * --------------------------------------------
   */

  /**
   * Constants
   * ====================================================
   */


  var NAME$3 = 'DirectChat';
  var DATA_KEY$3 = 'lte.directchat';
  var EVENT_KEY$3 = "." + DATA_KEY$3;
  var JQUERY_NO_CONFLICT$3 = $__default['default'].fn[NAME$3];
  var EVENT_TOGGLED = "toggled" + EVENT_KEY$3;
  var SELECTOR_DATA_TOGGLE$1 = '[data-widget="chat-pane-toggle"]';
  var SELECTOR_DIRECT_CHAT = '.direct-chat';
  var CLASS_NAME_DIRECT_CHAT_OPEN = 'direct-chat-contacts-open';
  /**
   * Class Definition
   * ====================================================
   */

  var DirectChat = /*#__PURE__*/function () {
    function DirectChat(element) {
      this._element = element;
    }

    var _proto = DirectChat.prototype;

    _proto.toggle = function toggle() {
      $__default['default'](this._element).parents(SELECTOR_DIRECT_CHAT).first().toggleClass(CLASS_NAME_DIRECT_CHAT_OPEN);
      $__default['default'](this._element).trigger($__default['default'].Event(EVENT_TOGGLED));
    } // Static
    ;

    DirectChat._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$3);

        if (!data) {
          data = new DirectChat($__default['default'](this));
          $__default['default'](this).data(DATA_KEY$3, data);
        }

        data[config]();
      });
    };

    return DirectChat;
  }();
  /**
   *
   * Data Api implementation
   * ====================================================
   */


  $__default['default'](document).on('click', SELECTOR_DATA_TOGGLE$1, function (event) {
    if (event) {
      event.preventDefault();
    }

    DirectChat._jQueryInterface.call($__default['default'](this), 'toggle');
  });
  /**
   * jQuery API
   * ====================================================
   */

  $__default['default'].fn[NAME$3] = DirectChat._jQueryInterface;
  $__default['default'].fn[NAME$3].Constructor = DirectChat;

  $__default['default'].fn[NAME$3].noConflict = function () {
    $__default['default'].fn[NAME$3] = JQUERY_NO_CONFLICT$3;
    return DirectChat._jQueryInterface;
  };
  /**
   * --------------------------------------------
   * AdminLTE Dropdown.js
   * License MIT
   * --------------------------------------------
   */

  /**
   * Constants
   * ====================================================
   */


  var NAME$4 = 'Dropdown';
  var DATA_KEY$4 = 'lte.dropdown';
  var JQUERY_NO_CONFLICT$4 = $__default['default'].fn[NAME$4];
  var SELECTOR_NAVBAR = '.navbar';
  var SELECTOR_DROPDOWN_MENU = '.dropdown-menu';
  var SELECTOR_DROPDOWN_MENU_ACTIVE = '.dropdown-menu.show';
  var SELECTOR_DROPDOWN_TOGGLE = '[data-toggle="dropdown"]';
  var CLASS_NAME_DROPDOWN_RIGHT = 'dropdown-menu-right';
  var CLASS_NAME_DROPDOWN_SUBMENU = 'dropdown-submenu'; // TODO: this is unused; should be removed along with the extend?

  var Default$3 = {};
  /**
   * Class Definition
   * ====================================================
   */

  var Dropdown = /*#__PURE__*/function () {
    function Dropdown(element, config) {
      this._config = config;
      this._element = element;
    } // Public


    var _proto = Dropdown.prototype;

    _proto.toggleSubmenu = function toggleSubmenu() {
      this._element.siblings().show().toggleClass('show');

      if (!this._element.next().hasClass('show')) {
        this._element.parents(SELECTOR_DROPDOWN_MENU).first().find('.show').removeClass('show').hide();
      }

      this._element.parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function () {
        $__default['default']('.dropdown-submenu .show').removeClass('show').hide();
      });
    };

    _proto.fixPosition = function fixPosition() {
      var $element = $__default['default'](SELECTOR_DROPDOWN_MENU_ACTIVE);

      if ($element.length === 0) {
        return;
      }

      if ($element.hasClass(CLASS_NAME_DROPDOWN_RIGHT)) {
        $element.css({
          left: 'inherit',
          right: 0
        });
      } else {
        $element.css({
          left: 0,
          right: 'inherit'
        });
      }

      var offset = $element.offset();
      var width = $element.width();
      var visiblePart = $__default['default'](window).width() - offset.left;

      if (offset.left < 0) {
        $element.css({
          left: 'inherit',
          right: offset.left - 5
        });
      } else if (visiblePart < width) {
        $element.css({
          left: 'inherit',
          right: 0
        });
      }
    } // Static
    ;

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$4);

        var _config = $__default['default'].extend({}, Default$3, $__default['default'](this).data());

        if (!data) {
          data = new Dropdown($__default['default'](this), _config);
          $__default['default'](this).data(DATA_KEY$4, data);
        }

        if (config === 'toggleSubmenu' || config === 'fixPosition') {
          data[config]();
        }
      });
    };

    return Dropdown;
  }();
  /**
   * Data API
   * ====================================================
   */


  $__default['default'](SELECTOR_DROPDOWN_MENU + " " + SELECTOR_DROPDOWN_TOGGLE).on('click', function (event) {
    event.preventDefault();
    event.stopPropagation();

    Dropdown._jQueryInterface.call($__default['default'](this), 'toggleSubmenu');
  });
  $__default['default'](SELECTOR_NAVBAR + " " + SELECTOR_DROPDOWN_TOGGLE).on('click', function (event) {
    event.preventDefault();

    if ($__default['default'](event.target).parent().hasClass(CLASS_NAME_DROPDOWN_SUBMENU)) {
      return;
    }

    setTimeout(function () {
      Dropdown._jQueryInterface.call($__default['default'](this), 'fixPosition');
    }, 1);
  });
  /**
   * jQuery API
   * ====================================================
   */

  $__default['default'].fn[NAME$4] = Dropdown._jQueryInterface;
  $__default['default'].fn[NAME$4].Constructor = Dropdown;

  $__default['default'].fn[NAME$4].noConflict = function () {
    $__default['default'].fn[NAME$4] = JQUERY_NO_CONFLICT$4;
    return Dropdown._jQueryInterface;
  };
  /**
   * --------------------------------------------
   * AdminLTE ExpandableTable.js
   * License MIT
   * --------------------------------------------
   */

  /**
    * Constants
    * ====================================================
    */


  var NAME$5 = 'ExpandableTable';
  var DATA_KEY$5 = 'lte.expandableTable';
  var EVENT_KEY$4 = "." + DATA_KEY$5;
  var JQUERY_NO_CONFLICT$5 = $__default['default'].fn[NAME$5];
  var EVENT_EXPANDED$2 = "expanded" + EVENT_KEY$4;
  var EVENT_COLLAPSED$2 = "collapsed" + EVENT_KEY$4;
  var SELECTOR_TABLE = '.expandable-table';
  var SELECTOR_DATA_TOGGLE$2 = '[data-widget="expandable-table"]';
  var SELECTOR_ARIA_ATTR = 'aria-expanded';
  /**
    * Class Definition
    * ====================================================
    */

  var ExpandableTable = /*#__PURE__*/function () {
    function ExpandableTable(element, options) {
      this._options = options;
      this._element = element;
    } // Public


    var _proto = ExpandableTable.prototype;

    _proto.init = function init() {
      $__default['default'](SELECTOR_DATA_TOGGLE$2).each(function (_, $header) {
        var $type = $__default['default']($header).attr(SELECTOR_ARIA_ATTR);
        var $body = $__default['default']($header).next().children().first().children();

        if ($type === 'true') {
          $body.show();
        } else if ($type === 'false') {
          $body.hide();
          $body.parent().parent().addClass('d-none');
        }
      });
    };

    _proto.toggleRow = function toggleRow() {
      var $element = this._element;
      var time = 500;
      var $type = $element.attr(SELECTOR_ARIA_ATTR);
      var $body = $element.next().children().first().children();
      $body.stop();

      if ($type === 'true') {
        $body.slideUp(time, function () {
          $element.next().addClass('d-none');
        });
        $element.attr(SELECTOR_ARIA_ATTR, 'false');
        $element.trigger($__default['default'].Event(EVENT_COLLAPSED$2));
      } else if ($type === 'false') {
        $element.next().removeClass('d-none');
        $body.slideDown(time);
        $element.attr(SELECTOR_ARIA_ATTR, 'true');
        $element.trigger($__default['default'].Event(EVENT_EXPANDED$2));
      }
    } // Static
    ;

    ExpandableTable._jQueryInterface = function _jQueryInterface(operation) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$5);

        if (!data) {
          data = new ExpandableTable($__default['default'](this));
          $__default['default'](this).data(DATA_KEY$5, data);
        }

        if (typeof operation === 'string' && operation.match(/init|toggleRow/)) {
          data[operation]();
        }
      });
    };

    return ExpandableTable;
  }();
  /**
    * Data API
    * ====================================================
    */


  $__default['default'](SELECTOR_TABLE).ready(function () {
    ExpandableTable._jQueryInterface.call($__default['default'](this), 'init');
  });
  $__default['default'](document).on('click', SELECTOR_DATA_TOGGLE$2, function () {
    ExpandableTable._jQueryInterface.call($__default['default'](this), 'toggleRow');
  });
  /**
    * jQuery API
    * ====================================================
    */

  $__default['default'].fn[NAME$5] = ExpandableTable._jQueryInterface;
  $__default['default'].fn[NAME$5].Constructor = ExpandableTable;

  $__default['default'].fn[NAME$5].noConflict = function () {
    $__default['default'].fn[NAME$5] = JQUERY_NO_CONFLICT$5;
    return ExpandableTable._jQueryInterface;
  };
  /**
   * --------------------------------------------
   * AdminLTE Fullscreen.js
   * License MIT
   * --------------------------------------------
   */

  /**
   * Constants
   * ====================================================
   */


  var NAME$6 = 'Fullscreen';
  var DATA_KEY$6 = 'lte.fullscreen';
  var JQUERY_NO_CONFLICT$6 = $__default['default'].fn[NAME$6];
  var SELECTOR_DATA_WIDGET = '[data-widget="fullscreen"]';
  var SELECTOR_ICON = SELECTOR_DATA_WIDGET + " i";
  var Default$4 = {
    minimizeIcon: 'fa-compress-arrows-alt',
    maximizeIcon: 'fa-expand-arrows-alt'
  };
  /**
   * Class Definition
   * ====================================================
   */

  var Fullscreen = /*#__PURE__*/function () {
    function Fullscreen(_element, _options) {
      this.element = _element;
      this.options = $__default['default'].extend({}, Default$4, _options);
    } // Public


    var _proto = Fullscreen.prototype;

    _proto.toggle = function toggle() {
      if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
        this.windowed();
      } else {
        this.fullscreen();
      }
    };

    _proto.fullscreen = function fullscreen() {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }

      $__default['default'](SELECTOR_ICON).removeClass(this.options.maximizeIcon).addClass(this.options.minimizeIcon);
    };

    _proto.windowed = function windowed() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }

      $__default['default'](SELECTOR_ICON).removeClass(this.options.minimizeIcon).addClass(this.options.maximizeIcon);
    } // Static
    ;

    Fullscreen._jQueryInterface = function _jQueryInterface(config) {
      var data = $__default['default'](this).data(DATA_KEY$6);

      if (!data) {
        data = $__default['default'](this).data();
      }

      var _options = $__default['default'].extend({}, Default$4, _typeof(config) === 'object' ? config : data);

      var plugin = new Fullscreen($__default['default'](this), _options);
      $__default['default'](this).data(DATA_KEY$6, _typeof(config) === 'object' ? config : data);

      if (typeof config === 'string' && config.match(/toggle|fullscreen|windowed/)) {
        plugin[config]();
      } else {
        plugin.init();
      }
    };

    return Fullscreen;
  }();
  /**
    * Data API
    * ====================================================
    */


  $__default['default'](document).on('click', SELECTOR_DATA_WIDGET, function () {
    Fullscreen._jQueryInterface.call($__default['default'](this), 'toggle');
  });
  /**
   * jQuery API
   * ====================================================
   */

  $__default['default'].fn[NAME$6] = Fullscreen._jQueryInterface;
  $__default['default'].fn[NAME$6].Constructor = Fullscreen;

  $__default['default'].fn[NAME$6].noConflict = function () {
    $__default['default'].fn[NAME$6] = JQUERY_NO_CONFLICT$6;
    return Fullscreen._jQueryInterface;
  };
  /**
   * --------------------------------------------
   * AdminLTE IFrame.js
   * License MIT
   * --------------------------------------------
   */

  /**
   * Constants
   * ====================================================
   */


  var NAME$7 = 'IFrame';
  var DATA_KEY$7 = 'lte.iframe';
  var JQUERY_NO_CONFLICT$7 = $__default['default'].fn[NAME$7];
  var SELECTOR_DATA_TOGGLE$3 = '[data-widget="iframe"]';
  var SELECTOR_DATA_TOGGLE_CLOSE = '[data-widget="iframe-close"]';
  var SELECTOR_DATA_TOGGLE_SCROLL_LEFT = '[data-widget="iframe-scrollleft"]';
  var SELECTOR_DATA_TOGGLE_SCROLL_RIGHT = '[data-widget="iframe-scrollright"]';
  var SELECTOR_DATA_TOGGLE_FULLSCREEN = '[data-widget="iframe-fullscreen"]';
  var SELECTOR_CONTENT_WRAPPER = '.content-wrapper';
  var SELECTOR_CONTENT_IFRAME = SELECTOR_CONTENT_WRAPPER + " iframe";
  var SELECTOR_TAB_NAV = SELECTOR_DATA_TOGGLE$3 + ".iframe-mode .nav";
  var SELECTOR_TAB_NAVBAR_NAV = SELECTOR_DATA_TOGGLE$3 + ".iframe-mode .navbar-nav";
  var SELECTOR_TAB_NAVBAR_NAV_ITEM = SELECTOR_TAB_NAVBAR_NAV + " .nav-item";
  var SELECTOR_TAB_CONTENT = SELECTOR_DATA_TOGGLE$3 + ".iframe-mode .tab-content";
  var SELECTOR_TAB_EMPTY = SELECTOR_TAB_CONTENT + " .tab-empty";
  var SELECTOR_TAB_LOADING = SELECTOR_TAB_CONTENT + " .tab-loading";
  var SELECTOR_SIDEBAR_MENU_ITEM = '.main-sidebar .nav-item > a.nav-link';
  var SELECTOR_HEADER_MENU_ITEM = '.main-header .nav-item a.nav-link';
  var SELECTOR_HEADER_DROPDOWN_ITEM = '.main-header a.dropdown-item';
  var CLASS_NAME_IFRAME_MODE = 'iframe-mode';
  var CLASS_NAME_FULLSCREEN_MODE = 'iframe-mode-fullscreen';
  var Default$5 = {
    onTabClick: function onTabClick(item) {
      return item;
    },
    onTabChanged: function onTabChanged(item) {
      return item;
    },
    onTabCreated: function onTabCreated(item) {
      return item;
    },
    autoIframeMode: true,
    autoItemActive: true,
    autoShowNewTab: true,
    loadingScreen: true,
    useNavbarItems: true,
    scrollOffset: 40,
    scrollBehaviorSwap: false,
    iconMaximize: 'fa-expand',
    iconMinimize: 'fa-compress'
  };
  /**
   * Class Definition
   * ====================================================
   */

  var IFrame = /*#__PURE__*/function () {
    function IFrame(element, config) {
      this._config = config;
      this._element = element;

      this._init();
    } // Public


    var _proto = IFrame.prototype;

    _proto.onTabClick = function onTabClick(item) {
      this._config.onTabClick(item);
    };

    _proto.onTabChanged = function onTabChanged(item) {
      this._config.onTabChanged(item);
    };

    _proto.onTabCreated = function onTabCreated(item) {
      this._config.onTabCreated(item);
    };

    _proto.createTab = function createTab(title, link, uniqueName, autoOpen) {
      var _this = this;

      var tabId = "panel-" + uniqueName + "-" + Math.floor(Math.random() * 1000);
      var navId = "tab-" + uniqueName + "-" + Math.floor(Math.random() * 1000);
      var newNavItem = "<li class=\"nav-item\" role=\"presentation\"><a class=\"nav-link\" data-toggle=\"row\" id=\"" + navId + "\" href=\"#" + tabId + "\" role=\"tab\" aria-controls=\"" + tabId + "\" aria-selected=\"false\">" + title + "</a></li>";
      $__default['default'](SELECTOR_TAB_NAVBAR_NAV).append(newNavItem);
      var newTabItem = "<div class=\"tab-pane fade\" id=\"" + tabId + "\" role=\"tabpanel\" aria-labelledby=\"" + navId + "\"><iframe src=\"" + link + "\"></iframe></div>";
      $__default['default'](SELECTOR_TAB_CONTENT).append(newTabItem);

      if (autoOpen) {
        if (this._config.loadingScreen) {
          var $loadingScreen = $__default['default'](SELECTOR_TAB_LOADING);
          $loadingScreen.fadeIn();
          $__default['default'](tabId + " iframe").ready(function () {
            if (typeof _this._config.loadingScreen === 'number') {
              _this.switchTab("#" + navId, _this._config.loadingScreen);

              setTimeout(function () {
                $loadingScreen.fadeOut();
              }, _this._config.loadingScreen);
            } else {
              _this.switchTab("#" + navId, _this._config.loadingScreen);

              $loadingScreen.fadeOut();
            }
          });
        } else {
          this.switchTab("#" + navId);
        }
      }

      this.onTabCreated($__default['default']("#" + navId));
    };

    _proto.openTabSidebar = function openTabSidebar(item, autoOpen) {
      if (autoOpen === void 0) {
        autoOpen = this._config.autoShowNewTab;
      }

      var $item = $__default['default'](item).clone();

      if ($item.attr('href') === undefined) {
        $item = $__default['default'](item).parent('a').clone();
      }

      $item.find('.right').remove();
      var title = $item.find('p').text();

      if (title === '') {
        title = $item.text();
      }

      var link = $item.attr('href');

      if (link === '#' || link === '' || link === undefined) {
        return;
      }

      this.createTab(title, link, link.replace('.html', '').replace('./', '').replaceAll('/', '-'), autoOpen);
    };

    _proto.switchTab = function switchTab(item) {
      var $item = $__default['default'](item);
      var tabId = $item.attr('href');
      $__default['default'](SELECTOR_TAB_EMPTY).hide();
      $__default['default'](SELECTOR_TAB_NAVBAR_NAV + " .active").tab('dispose').removeClass('active');

      this._fixHeight();

      $item.tab('show');
      $item.parents('li').addClass('active');
      this.onTabChanged($item);

      if (this._config.autoItemActive) {
        this._setItemActive($__default['default'](tabId + " iframe").attr('src'));
      }
    };

    _proto.removeActiveTab = function removeActiveTab() {
      var $navItem = $__default['default'](SELECTOR_TAB_NAVBAR_NAV_ITEM + ".active");
      var $navItemParent = $navItem.parent();
      var navItemIndex = $navItem.index();
      $navItem.remove();
      $__default['default']('.tab-pane.active').remove();

      if ($__default['default'](SELECTOR_TAB_CONTENT).children().length == $__default['default'](SELECTOR_TAB_EMPTY + ", " + SELECTOR_TAB_LOADING).length) {
        $__default['default'](SELECTOR_TAB_EMPTY).show();
      } else {
        var prevNavItemIndex = navItemIndex - 1;
        this.switchTab($navItemParent.children().eq(prevNavItemIndex).find('a'));
      }
    };

    _proto.toggleFullscreen = function toggleFullscreen() {
      if ($__default['default']('body').hasClass(CLASS_NAME_FULLSCREEN_MODE)) {
        $__default['default'](SELECTOR_DATA_TOGGLE_FULLSCREEN + " i").removeClass(this._config.iconMinimize).addClass(this._config.iconMaximize);
        $__default['default']('body').removeClass(CLASS_NAME_FULLSCREEN_MODE);
        $__default['default'](SELECTOR_TAB_EMPTY + ", " + SELECTOR_TAB_LOADING).height('auto');
        $__default['default'](SELECTOR_CONTENT_WRAPPER).height('auto');
        $__default['default'](SELECTOR_CONTENT_IFRAME).height('auto');
      } else {
        $__default['default'](SELECTOR_DATA_TOGGLE_FULLSCREEN + " i").removeClass(this._config.iconMaximize).addClass(this._config.iconMinimize);
        $__default['default']('body').addClass(CLASS_NAME_FULLSCREEN_MODE);
      }

      $__default['default'](window).trigger('resize');

      this._fixHeight(true);
    } // Private
    ;

    _proto._init = function _init() {
      if (window.frameElement && this._config.autoIframeMode) {
        $__default['default']('body').addClass(CLASS_NAME_IFRAME_MODE);
      } else if ($__default['default'](SELECTOR_CONTENT_WRAPPER).hasClass(CLASS_NAME_IFRAME_MODE)) {
        this._setupListeners();

        this._fixHeight(true);
      }
    };

    _proto._navScroll = function _navScroll(offset) {
      var leftPos = $__default['default'](SELECTOR_TAB_NAVBAR_NAV).scrollLeft();
      $__default['default'](SELECTOR_TAB_NAVBAR_NAV).animate({
        scrollLeft: leftPos + offset
      }, 250, 'linear');
    };

    _proto._setupListeners = function _setupListeners() {
      var _this2 = this;

      $__default['default'](window).on('resize', function () {
        setTimeout(function () {
          _this2._fixHeight();
        }, 1);
      });
      $__default['default'](document).on('click', SELECTOR_SIDEBAR_MENU_ITEM, function (e) {
        e.preventDefault();

        _this2.openTabSidebar(e.target);
      });

      if (this._config.useNavbarItems) {
        $__default['default'](document).on('click', SELECTOR_HEADER_MENU_ITEM + ", " + SELECTOR_HEADER_DROPDOWN_ITEM, function (e) {
          e.preventDefault();

          _this2.openTabSidebar(e.target);
        });
      }

      $__default['default'](document).on('click', SELECTOR_TAB_NAVBAR_NAV_ITEM, function (e) {
        e.preventDefault();

        _this2.onTabClick(e.target);

        _this2.switchTab(e.target);
      });
      $__default['default'](document).on('click', SELECTOR_DATA_TOGGLE_CLOSE, function (e) {
        e.preventDefault();

        _this2.removeActiveTab();
      });
      $__default['default'](document).on('click', SELECTOR_DATA_TOGGLE_FULLSCREEN, function (e) {
        e.preventDefault();

        _this2.toggleFullscreen();
      });
      var mousedown = false;
      var mousedownInterval = null;
      $__default['default'](document).on('mousedown', SELECTOR_DATA_TOGGLE_SCROLL_LEFT, function (e) {
        e.preventDefault();
        clearInterval(mousedownInterval);
        var scrollOffset = _this2._config.scrollOffset;

        if (!_this2._config.scrollBehaviorSwap) {
          scrollOffset = -scrollOffset;
        }

        mousedown = true;

        _this2._navScroll(scrollOffset);

        mousedownInterval = setInterval(function () {
          _this2._navScroll(scrollOffset);
        }, 250);
      });
      $__default['default'](document).on('mousedown', SELECTOR_DATA_TOGGLE_SCROLL_RIGHT, function (e) {
        e.preventDefault();
        clearInterval(mousedownInterval);
        var scrollOffset = _this2._config.scrollOffset;

        if (_this2._config.scrollBehaviorSwap) {
          scrollOffset = -scrollOffset;
        }

        mousedown = true;

        _this2._navScroll(scrollOffset);

        mousedownInterval = setInterval(function () {
          _this2._navScroll(scrollOffset);
        }, 250);
      });
      $__default['default'](document).on('mouseup', function () {
        if (mousedown) {
          mousedown = false;
          clearInterval(mousedownInterval);
          mousedownInterval = null;
        }
      });
    };

    _proto._setItemActive = function _setItemActive(href) {
      $__default['default'](SELECTOR_SIDEBAR_MENU_ITEM + ", " + SELECTOR_HEADER_DROPDOWN_ITEM).removeClass('active');
      $__default['default'](SELECTOR_HEADER_MENU_ITEM).parent().removeClass('active');
      var $headerMenuItem = $__default['default'](SELECTOR_HEADER_MENU_ITEM + "[href$=\"" + href + "\"]");
      var $headerDropdownItem = $__default['default'](SELECTOR_HEADER_DROPDOWN_ITEM + "[href$=\"" + href + "\"]");
      var $sidebarMenuItem = $__default['default'](SELECTOR_SIDEBAR_MENU_ITEM + "[href$=\"" + href + "\"]");
      $headerMenuItem.each(function (i, e) {
        $__default['default'](e).parent().addClass('active');
      });
      $headerDropdownItem.each(function (i, e) {
        $__default['default'](e).addClass('active');
      });
      $sidebarMenuItem.each(function (i, e) {
        $__default['default'](e).addClass('active');
        $__default['default'](e).parents('.nav-treeview').prevAll('.nav-link').addClass('active');
      });
    };

    _proto._fixHeight = function _fixHeight(tabEmpty) {
      if (tabEmpty === void 0) {
        tabEmpty = false;
      }

      if ($__default['default']('body').hasClass(CLASS_NAME_FULLSCREEN_MODE)) {
        var windowHeight = $__default['default'](window).height();
        $__default['default'](SELECTOR_TAB_EMPTY + ", " + SELECTOR_TAB_LOADING).height(windowHeight);
        $__default['default'](SELECTOR_CONTENT_WRAPPER).height(windowHeight);
        $__default['default'](SELECTOR_CONTENT_IFRAME).height(windowHeight);
      } else {
        var contentWrapperHeight = parseFloat($__default['default'](SELECTOR_CONTENT_WRAPPER).css('min-height'));
        var navbarHeight = $__default['default'](SELECTOR_TAB_NAV).outerHeight();

        if (tabEmpty == true) {
          setTimeout(function () {
            $__default['default'](SELECTOR_TAB_EMPTY + ", " + SELECTOR_TAB_LOADING).height(contentWrapperHeight - navbarHeight);
          }, 50);
        } else {
          $__default['default'](SELECTOR_CONTENT_IFRAME).height(contentWrapperHeight - navbarHeight);
        }
      }
    } // Static
    ;

    IFrame._jQueryInterface = function _jQueryInterface(operation) {
      var data = $__default['default'](this).data(DATA_KEY$7);

      var _options = $__default['default'].extend({}, Default$5, $__default['default'](this).data());

      if (!data) {
        data = new IFrame(this, _options);
        $__default['default'](this).data(DATA_KEY$7, data);
      }

      if (typeof operation === 'string' && operation.match(/createTab|openTabSidebar|switchTab|removeActiveTab/)) {
        var _data;

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        (_data = data)[operation].apply(_data, args);
      }
    };

    return IFrame;
  }();
  /**
   * Data API
   * ====================================================
   */


  $__default['default'](window).on('load', function () {
    IFrame._jQueryInterface.call($__default['default'](SELECTOR_DATA_TOGGLE$3));
  });
  /**
   * jQuery API
   * ====================================================
   */

  $__default['default'].fn[NAME$7] = IFrame._jQueryInterface;
  $__default['default'].fn[NAME$7].Constructor = IFrame;

  $__default['default'].fn[NAME$7].noConflict = function () {
    $__default['default'].fn[NAME$7] = JQUERY_NO_CONFLICT$7;
    return IFrame._jQueryInterface;
  };
  /**
   * --------------------------------------------
   * AdminLTE Layout.js
   * License MIT
   * --------------------------------------------
   */

  /**
   * Constants
   * ====================================================
   */


  var NAME$8 = 'Layout';
  var DATA_KEY$8 = 'lte.layout';
  var JQUERY_NO_CONFLICT$8 = $__default['default'].fn[NAME$8];
  var SELECTOR_HEADER$1 = '.main-header';
  var SELECTOR_MAIN_SIDEBAR = '.main-sidebar';
  var SELECTOR_SIDEBAR = '.main-sidebar .sidebar';
  var SELECTOR_CONTENT = '.content-wrapper';
  var SELECTOR_CONTROL_SIDEBAR_CONTENT$1 = '.control-sidebar-content';
  var SELECTOR_CONTROL_SIDEBAR_BTN = '[data-widget="control-sidebar"]';
  var SELECTOR_FOOTER$1 = '.main-footer';
  var SELECTOR_PUSHMENU_BTN = '[data-widget="pushmenu"]';
  var SELECTOR_LOGIN_BOX = '.login-box';
  var SELECTOR_REGISTER_BOX = '.register-box';
  var CLASS_NAME_SIDEBAR_FOCUSED = 'sidebar-focused';
  var CLASS_NAME_LAYOUT_FIXED$1 = 'layout-fixed';
  var CLASS_NAME_CONTROL_SIDEBAR_SLIDE_OPEN = 'control-sidebar-slide-open';
  var CLASS_NAME_CONTROL_SIDEBAR_OPEN$1 = 'control-sidebar-open';
  var CLASS_NAME_LAYOUT_TOP_NAV = 'layout-top-nav';
  var Default$6 = {
    scrollbarTheme: 'os-theme-light',
    scrollbarAutoHide: 'l',
    panelAutoHeight: true,
    panelAutoHeightMode: 'min-height',
    loginRegisterAutoHeight: true
  };
  /**
   * Class Definition
   * ====================================================
   */

  var Layout = /*#__PURE__*/function () {
    function Layout(element, config) {
      this._config = config;
      this._element = element;

      this._init();
    } // Public


    var _proto = Layout.prototype;

    _proto.fixLayoutHeight = function fixLayoutHeight(extra) {
      if (extra === void 0) {
        extra = null;
      }

      var $body = $__default['default']('body');
      var controlSidebar = 0;

      if ($body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_SLIDE_OPEN) || $body.hasClass(CLASS_NAME_CONTROL_SIDEBAR_OPEN$1) || extra === 'control_sidebar') {
        controlSidebar = $__default['default'](SELECTOR_CONTROL_SIDEBAR_CONTENT$1).height();
      }

      var heights = {
        window: $__default['default'](window).height(),
        header: $__default['default'](SELECTOR_HEADER$1).length !== 0 ? $__default['default'](SELECTOR_HEADER$1).outerHeight() : 0,
        footer: $__default['default'](SELECTOR_FOOTER$1).length !== 0 ? $__default['default'](SELECTOR_FOOTER$1).outerHeight() : 0,
        sidebar: $__default['default'](SELECTOR_SIDEBAR).length !== 0 ? $__default['default'](SELECTOR_SIDEBAR).height() : 0,
        controlSidebar: controlSidebar
      };

      var max = this._max(heights);

      var offset = this._config.panelAutoHeight;

      if (offset === true) {
        offset = 0;
      }

      var $contentSelector = $__default['default'](SELECTOR_CONTENT);

      if (offset !== false) {
        if (max === heights.controlSidebar) {
          if ($body.hasClass(CLASS_NAME_LAYOUT_TOP_NAV)) {
            $contentSelector.css(this._config.panelAutoHeightMode, max + offset + heights.header + heights.footer);
          } else {
            $contentSelector.css(this._config.panelAutoHeightMode, max + offset);
          }
        } else if (max === heights.window) {
          $contentSelector.css(this._config.panelAutoHeightMode, max + offset - heights.header - heights.footer);
        } else {
          $contentSelector.css(this._config.panelAutoHeightMode, max + offset - heights.header);
        }

        if (this._isFooterFixed()) {
          $contentSelector.css(this._config.panelAutoHeightMode, parseFloat($contentSelector.css(this._config.panelAutoHeightMode)) + heights.footer);
        }
      }

      if (!$body.hasClass(CLASS_NAME_LAYOUT_FIXED$1)) {
        return;
      }

      if (offset !== false) {
        $contentSelector.css(this._config.panelAutoHeightMode, max + offset - heights.header - heights.footer);
      }

      if (typeof $__default['default'].fn.overlayScrollbars !== 'undefined') {
        $__default['default'](SELECTOR_SIDEBAR).overlayScrollbars({
          className: this._config.scrollbarTheme,
          sizeAutoCapable: true,
          scrollbars: {
            autoHide: this._config.scrollbarAutoHide,
            clickScrolling: true
          }
        });
      }
    };

    _proto.fixLoginRegisterHeight = function fixLoginRegisterHeight() {
      var $body = $__default['default']('body');
      var $selector = $__default['default'](SELECTOR_LOGIN_BOX + ", " + SELECTOR_REGISTER_BOX);

      if ($selector.length === 0) {
        $body.css('height', 'auto');
        $__default['default']('html').css('height', 'auto');
      } else {
        var boxHeight = $selector.height();

        if ($body.css(this._config.panelAutoHeightMode) !== boxHeight) {
          $body.css(this._config.panelAutoHeightMode, boxHeight);
        }
      }
    } // Private
    ;

    _proto._init = function _init() {
      var _this = this; // Activate layout height watcher


      this.fixLayoutHeight();

      if (this._config.loginRegisterAutoHeight === true) {
        this.fixLoginRegisterHeight();
      } else if (this._config.loginRegisterAutoHeight === parseInt(this._config.loginRegisterAutoHeight, 10)) {
        setInterval(this.fixLoginRegisterHeight, this._config.loginRegisterAutoHeight);
      }

      $__default['default'](SELECTOR_SIDEBAR).on('collapsed.lte.treeview expanded.lte.treeview', function () {
        _this.fixLayoutHeight();
      });
      $__default['default'](SELECTOR_PUSHMENU_BTN).on('collapsed.lte.pushmenu shown.lte.pushmenu', function () {
        _this.fixLayoutHeight();
      });
      $__default['default'](SELECTOR_CONTROL_SIDEBAR_BTN).on('collapsed.lte.controlsidebar', function () {
        _this.fixLayoutHeight();
      }).on('expanded.lte.controlsidebar', function () {
        _this.fixLayoutHeight('control_sidebar');
      });
      $__default['default'](window).resize(function () {
        _this.fixLayoutHeight();
      });
      $__default['default'](document).ready(function () {
        _this.fixLayoutHeight();
      });
      setTimeout(function () {
        $__default['default']('body.hold-transition').removeClass('hold-transition');
      }, 50);
    };

    _proto._max = function _max(numbers) {
      // Calculate the maximum number in a list
      var max = 0;
      Object.keys(numbers).forEach(function (key) {
        if (numbers[key] > max) {
          max = numbers[key];
        }
      });
      return max;
    };

    _proto._isFooterFixed = function _isFooterFixed() {
      return $__default['default'](SELECTOR_FOOTER$1).css('position') === 'fixed';
    } // Static
    ;

    Layout._jQueryInterface = function _jQueryInterface(config) {
      if (config === void 0) {
        config = '';
      }

      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$8);

        var _options = $__default['default'].extend({}, Default$6, $__default['default'](this).data());

        if (!data) {
          data = new Layout($__default['default'](this), _options);
          $__default['default'](this).data(DATA_KEY$8, data);
        }

        if (config === 'init' || config === '') {
          data._init();
        } else if (config === 'fixLayoutHeight' || config === 'fixLoginRegisterHeight') {
          data[config]();
        }
      });
    };

    return Layout;
  }();
  /**
   * Data API
   * ====================================================
   */


  $__default['default'](window).on('load', function () {
    Layout._jQueryInterface.call($__default['default']('body'));
  });
  $__default['default'](SELECTOR_SIDEBAR + " a").on('focusin', function () {
    $__default['default'](SELECTOR_MAIN_SIDEBAR).addClass(CLASS_NAME_SIDEBAR_FOCUSED);
  });
  $__default['default'](SELECTOR_SIDEBAR + " a").on('focusout', function () {
    $__default['default'](SELECTOR_MAIN_SIDEBAR).removeClass(CLASS_NAME_SIDEBAR_FOCUSED);
  });
  /**
   * jQuery API
   * ====================================================
   */

  $__default['default'].fn[NAME$8] = Layout._jQueryInterface;
  $__default['default'].fn[NAME$8].Constructor = Layout;

  $__default['default'].fn[NAME$8].noConflict = function () {
    $__default['default'].fn[NAME$8] = JQUERY_NO_CONFLICT$8;
    return Layout._jQueryInterface;
  };
  /**
   * --------------------------------------------
   * AdminLTE PushMenu.js
   * License MIT
   * --------------------------------------------
   */

  /**
   * Constants
   * ====================================================
   */


  var NAME$9 = 'PushMenu';
  var DATA_KEY$9 = 'lte.pushmenu';
  var EVENT_KEY$5 = "." + DATA_KEY$9;
  var JQUERY_NO_CONFLICT$9 = $__default['default'].fn[NAME$9];
  var EVENT_COLLAPSED$3 = "collapsed" + EVENT_KEY$5;
  var EVENT_SHOWN = "shown" + EVENT_KEY$5;
  var SELECTOR_TOGGLE_BUTTON = '[data-widget="pushmenu"]';
  var SELECTOR_BODY = 'body';
  var SELECTOR_OVERLAY = '#sidebar-overlay';
  var SELECTOR_WRAPPER = '.wrapper';
  var CLASS_NAME_COLLAPSED$1 = 'sidebar-collapse';
  var CLASS_NAME_OPEN = 'sidebar-open';
  var CLASS_NAME_IS_OPENING = 'sidebar-is-opening';
  var CLASS_NAME_CLOSED = 'sidebar-closed';
  var Default$7 = {
    autoCollapseSize: 992,
    enableRemember: false,
    noTransitionAfterReload: true
  };
  /**
   * Class Definition
   * ====================================================
   */

  var PushMenu = /*#__PURE__*/function () {
    function PushMenu(element, options) {
      this._element = element;
      this._options = $__default['default'].extend({}, Default$7, options);

      if ($__default['default'](SELECTOR_OVERLAY).length === 0) {
        this._addOverlay();
      }

      this._init();
    } // Public


    var _proto = PushMenu.prototype;

    _proto.expand = function expand() {
      var $bodySelector = $__default['default'](SELECTOR_BODY);

      if (this._options.autoCollapseSize) {
        if ($__default['default'](window).width() <= this._options.autoCollapseSize) {
          $bodySelector.addClass(CLASS_NAME_OPEN);
        }
      }

      $bodySelector.addClass(CLASS_NAME_IS_OPENING).removeClass(CLASS_NAME_COLLAPSED$1 + " " + CLASS_NAME_CLOSED).delay(50).queue(function () {
        $bodySelector.removeClass(CLASS_NAME_IS_OPENING);
        $__default['default'](this).dequeue();
      });

      if (this._options.enableRemember) {
        localStorage.setItem("remember" + EVENT_KEY$5, CLASS_NAME_OPEN);
      }

      $__default['default'](this._element).trigger($__default['default'].Event(EVENT_SHOWN));
    };

    _proto.collapse = function collapse() {
      var $bodySelector = $__default['default'](SELECTOR_BODY);

      if (this._options.autoCollapseSize) {
        if ($__default['default'](window).width() <= this._options.autoCollapseSize) {
          $bodySelector.removeClass(CLASS_NAME_OPEN).addClass(CLASS_NAME_CLOSED);
        }
      }

      $bodySelector.addClass(CLASS_NAME_COLLAPSED$1);

      if (this._options.enableRemember) {
        localStorage.setItem("remember" + EVENT_KEY$5, CLASS_NAME_COLLAPSED$1);
      }

      $__default['default'](this._element).trigger($__default['default'].Event(EVENT_COLLAPSED$3));
    };

    _proto.toggle = function toggle() {
      if ($__default['default'](SELECTOR_BODY).hasClass(CLASS_NAME_COLLAPSED$1)) {
        this.expand();
      } else {
        this.collapse();
      }
    };

    _proto.autoCollapse = function autoCollapse(resize) {
      if (resize === void 0) {
        resize = false;
      }

      if (!this._options.autoCollapseSize) {
        return;
      }

      var $bodySelector = $__default['default'](SELECTOR_BODY);

      if ($__default['default'](window).width() <= this._options.autoCollapseSize) {
        if (!$bodySelector.hasClass(CLASS_NAME_OPEN)) {
          this.collapse();
        }
      } else if (resize === true) {
        if ($bodySelector.hasClass(CLASS_NAME_OPEN)) {
          $bodySelector.removeClass(CLASS_NAME_OPEN);
        } else if ($bodySelector.hasClass(CLASS_NAME_CLOSED)) {
          this.expand();
        }
      }
    };

    _proto.remember = function remember() {
      if (!this._options.enableRemember) {
        return;
      }

      var $body = $__default['default']('body');
      var toggleState = localStorage.getItem("remember" + EVENT_KEY$5);

      if (toggleState === CLASS_NAME_COLLAPSED$1) {
        if (this._options.noTransitionAfterReload) {
          $body.addClass('hold-transition').addClass(CLASS_NAME_COLLAPSED$1).delay(50).queue(function () {
            $__default['default'](this).removeClass('hold-transition');
            $__default['default'](this).dequeue();
          });
        } else {
          $body.addClass(CLASS_NAME_COLLAPSED$1);
        }
      } else if (this._options.noTransitionAfterReload) {
        $body.addClass('hold-transition').removeClass(CLASS_NAME_COLLAPSED$1).delay(50).queue(function () {
          $__default['default'](this).removeClass('hold-transition');
          $__default['default'](this).dequeue();
        });
      } else {
        $body.removeClass(CLASS_NAME_COLLAPSED$1);
      }
    } // Private
    ;

    _proto._init = function _init() {
      var _this = this;

      this.remember();
      this.autoCollapse();
      $__default['default'](window).resize(function () {
        _this.autoCollapse(true);
      });
    };

    _proto._addOverlay = function _addOverlay() {
      var _this2 = this;

      var overlay = $__default['default']('<div />', {
        id: 'sidebar-overlay'
      });
      overlay.on('click', function () {
        _this2.collapse();
      });
      $__default['default'](SELECTOR_WRAPPER).append(overlay);
    } // Static
    ;

    PushMenu._jQueryInterface = function _jQueryInterface(operation) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$9);

        var _options = $__default['default'].extend({}, Default$7, $__default['default'](this).data());

        if (!data) {
          data = new PushMenu(this, _options);
          $__default['default'](this).data(DATA_KEY$9, data);
        }

        if (typeof operation === 'string' && operation.match(/collapse|expand|toggle/)) {
          data[operation]();
        }
      });
    };

    return PushMenu;
  }();
  /**
   * Data API
   * ====================================================
   */


  $__default['default'](document).on('click', SELECTOR_TOGGLE_BUTTON, function (event) {
    event.preventDefault();
    var button = event.currentTarget;

    if ($__default['default'](button).data('widget') !== 'pushmenu') {
      button = $__default['default'](button).closest(SELECTOR_TOGGLE_BUTTON);
    }

    PushMenu._jQueryInterface.call($__default['default'](button), 'toggle');
  });
  $__default['default'](window).on('load', function () {
    PushMenu._jQueryInterface.call($__default['default'](SELECTOR_TOGGLE_BUTTON));
  });
  /**
   * jQuery API
   * ====================================================
   */

  $__default['default'].fn[NAME$9] = PushMenu._jQueryInterface;
  $__default['default'].fn[NAME$9].Constructor = PushMenu;

  $__default['default'].fn[NAME$9].noConflict = function () {
    $__default['default'].fn[NAME$9] = JQUERY_NO_CONFLICT$9;
    return PushMenu._jQueryInterface;
  };
  /**
   * --------------------------------------------
   * AdminLTE SidebarSearch.js
   * License MIT
   * --------------------------------------------
   */

  /**
   * Constants
   * ====================================================
   */


  var NAME$a = 'SidebarSearch';
  var DATA_KEY$a = 'lte.sidebar-search';
  var JQUERY_NO_CONFLICT$a = $__default['default'].fn[NAME$a];
  var CLASS_NAME_OPEN$1 = 'sidebar-search-open';
  var CLASS_NAME_ICON_SEARCH = 'fa-search';
  var CLASS_NAME_ICON_CLOSE = 'fa-times';
  var CLASS_NAME_HEADER = 'nav-header';
  var CLASS_NAME_SEARCH_RESULTS = 'sidebar-search-results';
  var CLASS_NAME_LIST_GROUP = 'list-group';
  var SELECTOR_DATA_WIDGET$1 = '[data-widget="sidebar-search"]';
  var SELECTOR_SIDEBAR$1 = '.main-sidebar .nav-sidebar';
  var SELECTOR_NAV_LINK = '.nav-link';
  var SELECTOR_NAV_TREEVIEW = '.nav-treeview';
  var SELECTOR_SEARCH_INPUT = SELECTOR_DATA_WIDGET$1 + " .form-control";
  var SELECTOR_SEARCH_BUTTON = SELECTOR_DATA_WIDGET$1 + " .btn";
  var SELECTOR_SEARCH_ICON = SELECTOR_SEARCH_BUTTON + " i";
  var SELECTOR_SEARCH_LIST_GROUP = "." + CLASS_NAME_LIST_GROUP;
  var SELECTOR_SEARCH_RESULTS = "." + CLASS_NAME_SEARCH_RESULTS;
  var SELECTOR_SEARCH_RESULTS_GROUP = SELECTOR_SEARCH_RESULTS + " ." + CLASS_NAME_LIST_GROUP;
  var Default$8 = {
    arrowSign: '->',
    minLength: 3,
    maxResults: 7,
    highlightName: true,
    highlightPath: false,
    highlightClass: 'text-light',
    notFoundText: 'No element found!'
  };
  var SearchItems = [];
  /**
   * Class Definition
   * ====================================================
   */

  var SidebarSearch = /*#__PURE__*/function () {
    function SidebarSearch(_element, _options) {
      this.element = _element;
      this.options = $__default['default'].extend({}, Default$8, _options);
      this.items = [];
    } // Public


    var _proto = SidebarSearch.prototype;

    _proto.init = function init() {
      var _this = this;

      if ($__default['default'](SELECTOR_DATA_WIDGET$1).length == 0) {
        return;
      }

      if ($__default['default'](SELECTOR_DATA_WIDGET$1).next(SELECTOR_SEARCH_RESULTS).length == 0) {
        $__default['default'](SELECTOR_DATA_WIDGET$1).after($__default['default']('<div />', {
          "class": CLASS_NAME_SEARCH_RESULTS
        }));
      }

      if ($__default['default'](SELECTOR_SEARCH_RESULTS).children(SELECTOR_SEARCH_LIST_GROUP).length == 0) {
        $__default['default'](SELECTOR_SEARCH_RESULTS).append($__default['default']('<div />', {
          "class": CLASS_NAME_LIST_GROUP
        }));
      }

      this._addNotFound();

      $__default['default'](SELECTOR_SIDEBAR$1).children().each(function (i, child) {
        _this._parseItem(child);
      });
    };

    _proto.search = function search() {
      var _this2 = this;

      var searchValue = $__default['default'](SELECTOR_SEARCH_INPUT).val().toLowerCase();

      if (searchValue.length < this.options.minLength) {
        $__default['default'](SELECTOR_SEARCH_RESULTS_GROUP).empty();

        this._addNotFound();

        this.close();
        return;
      }

      var searchResults = SearchItems.filter(function (item) {
        return item.name.toLowerCase().includes(searchValue);
      });
      var endResults = $__default['default'](searchResults.slice(0, this.options.maxResults));
      $__default['default'](SELECTOR_SEARCH_RESULTS_GROUP).empty();

      if (endResults.length === 0) {
        this._addNotFound();
      } else {
        endResults.each(function (i, result) {
          $__default['default'](SELECTOR_SEARCH_RESULTS_GROUP).append(_this2._renderItem(result.name, result.link, result.path));
        });
      }

      this.open();
    };

    _proto.open = function open() {
      $__default['default'](SELECTOR_DATA_WIDGET$1).parent().addClass(CLASS_NAME_OPEN$1);
      $__default['default'](SELECTOR_SEARCH_ICON).removeClass(CLASS_NAME_ICON_SEARCH).addClass(CLASS_NAME_ICON_CLOSE);
    };

    _proto.close = function close() {
      $__default['default'](SELECTOR_DATA_WIDGET$1).parent().removeClass(CLASS_NAME_OPEN$1);
      $__default['default'](SELECTOR_SEARCH_ICON).removeClass(CLASS_NAME_ICON_CLOSE).addClass(CLASS_NAME_ICON_SEARCH);
    };

    _proto.toggle = function toggle() {
      if ($__default['default'](SELECTOR_DATA_WIDGET$1).parent().hasClass(CLASS_NAME_OPEN$1)) {
        this.close();
      } else {
        this.open();
      }
    } // Private
    ;

    _proto._parseItem = function _parseItem(item, path) {
      var _this3 = this;

      if (path === void 0) {
        path = [];
      }

      if ($__default['default'](item).hasClass(CLASS_NAME_HEADER)) {
        return;
      }

      var itemObject = {};
      var navLink = $__default['default'](item).clone().find("> " + SELECTOR_NAV_LINK);
      var navTreeview = $__default['default'](item).clone().find("> " + SELECTOR_NAV_TREEVIEW);
      var link = navLink.attr('href');
      var name = navLink.find('p').children().remove().end().text();
      itemObject.name = this._trimText(name);
      itemObject.link = link;
      itemObject.path = path;

      if (navTreeview.length === 0) {
        SearchItems.push(itemObject);
      } else {
        var newPath = itemObject.path.concat([itemObject.name]);
        navTreeview.children().each(function (i, child) {
          _this3._parseItem(child, newPath);
        });
      }
    };

    _proto._trimText = function _trimText(text) {
      return $.trim(text.replace(/(\r\n|\n|\r)/gm, ' '));
    };

    _proto._renderItem = function _renderItem(name, link, path) {
      var _this4 = this;

      path = path.join(" " + this.options.arrowSign + " ");

      if (this.options.highlightName || this.options.highlightPath) {
        var searchValue = $__default['default'](SELECTOR_SEARCH_INPUT).val().toLowerCase();
        var regExp = new RegExp(searchValue, 'gi');

        if (this.options.highlightName) {
          name = name.replace(regExp, function (str) {
            return "<b class=\"" + _this4.options.highlightClass + "\">" + str + "</b>";
          });
        }

        if (this.options.highlightPath) {
          path = path.replace(regExp, function (str) {
            return "<b class=\"" + _this4.options.highlightClass + "\">" + str + "</b>";
          });
        }
      }

      return "<a href=\"" + link + "\" class=\"list-group-item\">\n        <div class=\"search-title\">\n          " + name + "\n        </div>\n        <div class=\"search-path\">\n          " + path + "\n        </div>\n      </a>";
    };

    _proto._addNotFound = function _addNotFound() {
      $__default['default'](SELECTOR_SEARCH_RESULTS_GROUP).append(this._renderItem(this.options.notFoundText, '#', []));
    } // Static
    ;

    SidebarSearch._jQueryInterface = function _jQueryInterface(config) {
      var data = $__default['default'](this).data(DATA_KEY$a);

      if (!data) {
        data = $__default['default'](this).data();
      }

      var _options = $__default['default'].extend({}, Default$8, _typeof(config) === 'object' ? config : data);

      var plugin = new SidebarSearch($__default['default'](this), _options);
      $__default['default'](this).data(DATA_KEY$a, _typeof(config) === 'object' ? config : data);

      if (typeof config === 'string' && config.match(/init|toggle|close|open|search/)) {
        plugin[config]();
      } else {
        plugin.init();
      }
    };

    return SidebarSearch;
  }();
  /**
   * Data API
   * ====================================================
   */


  $__default['default'](document).on('click', SELECTOR_SEARCH_BUTTON, function (event) {
    event.preventDefault();

    SidebarSearch._jQueryInterface.call($__default['default'](SELECTOR_DATA_WIDGET$1), 'toggle');
  });
  $__default['default'](document).on('keyup', SELECTOR_SEARCH_INPUT, function (event) {
    if (event.keyCode == 38) {
      event.preventDefault();
      $__default['default'](SELECTOR_SEARCH_RESULTS_GROUP).children().last().focus();
      return;
    }

    if (event.keyCode == 40) {
      event.preventDefault();
      $__default['default'](SELECTOR_SEARCH_RESULTS_GROUP).children().first().focus();
      return;
    }

    var timer = 0;
    clearTimeout(timer);
    timer = setTimeout(function () {
      SidebarSearch._jQueryInterface.call($__default['default'](SELECTOR_DATA_WIDGET$1), 'search');
    }, 100);
  });
  $__default['default'](document).on('keydown', SELECTOR_SEARCH_RESULTS_GROUP, function (event) {
    var $focused = $__default['default'](':focus');

    if (event.keyCode == 38) {
      event.preventDefault();

      if ($focused.is(':first-child')) {
        $focused.siblings().last().focus();
      } else {
        $focused.prev().focus();
      }
    }

    if (event.keyCode == 40) {
      event.preventDefault();

      if ($focused.is(':last-child')) {
        $focused.siblings().first().focus();
      } else {
        $focused.next().focus();
      }
    }
  });
  $__default['default'](window).on('load', function () {
    SidebarSearch._jQueryInterface.call($__default['default'](SELECTOR_DATA_WIDGET$1), 'init');
  });
  /**
   * jQuery API
   * ====================================================
   */

  $__default['default'].fn[NAME$a] = SidebarSearch._jQueryInterface;
  $__default['default'].fn[NAME$a].Constructor = SidebarSearch;

  $__default['default'].fn[NAME$a].noConflict = function () {
    $__default['default'].fn[NAME$a] = JQUERY_NO_CONFLICT$a;
    return SidebarSearch._jQueryInterface;
  };
  /**
   * --------------------------------------------
   * AdminLTE Toasts.js
   * License MIT
   * --------------------------------------------
   */

  /**
   * Constants
   * ====================================================
   */


  var NAME$b = 'Toasts';
  var DATA_KEY$b = 'lte.toasts';
  var EVENT_KEY$6 = "." + DATA_KEY$b;
  var JQUERY_NO_CONFLICT$b = $__default['default'].fn[NAME$b];
  var EVENT_INIT = "init" + EVENT_KEY$6;
  var EVENT_CREATED = "created" + EVENT_KEY$6;
  var EVENT_REMOVED$1 = "removed" + EVENT_KEY$6;
  var SELECTOR_CONTAINER_TOP_RIGHT = '#toastsContainerTopRight';
  var SELECTOR_CONTAINER_TOP_LEFT = '#toastsContainerTopLeft';
  var SELECTOR_CONTAINER_BOTTOM_RIGHT = '#toastsContainerBottomRight';
  var SELECTOR_CONTAINER_BOTTOM_LEFT = '#toastsContainerBottomLeft';
  var CLASS_NAME_TOP_RIGHT = 'toasts-top-right';
  var CLASS_NAME_TOP_LEFT = 'toasts-top-left';
  var CLASS_NAME_BOTTOM_RIGHT = 'toasts-bottom-right';
  var CLASS_NAME_BOTTOM_LEFT = 'toasts-bottom-left';
  var POSITION_TOP_RIGHT = 'topRight';
  var POSITION_TOP_LEFT = 'topLeft';
  var POSITION_BOTTOM_RIGHT = 'bottomRight';
  var POSITION_BOTTOM_LEFT = 'bottomLeft';
  var Default$9 = {
    position: POSITION_TOP_RIGHT,
    fixed: true,
    autohide: false,
    autoremove: true,
    delay: 1000,
    fade: true,
    icon: null,
    image: null,
    imageAlt: null,
    imageHeight: '25px',
    title: null,
    subtitle: null,
    close: true,
    body: null,
    "class": null
  };
  /**
   * Class Definition
   * ====================================================
   */

  var Toasts = /*#__PURE__*/function () {
    function Toasts(element, config) {
      this._config = config;

      this._prepareContainer();

      $__default['default']('body').trigger($__default['default'].Event(EVENT_INIT));
    } // Public


    var _proto = Toasts.prototype;

    _proto.create = function create() {
      var toast = $__default['default']('<div class="toast" role="alert" aria-live="assertive" aria-atomic="true"/>');
      toast.data('autohide', this._config.autohide);
      toast.data('animation', this._config.fade);

      if (this._config["class"]) {
        toast.addClass(this._config["class"]);
      }

      if (this._config.delay && this._config.delay != 500) {
        toast.data('delay', this._config.delay);
      }

      var toastHeader = $__default['default']('<div class="toast-header">');

      if (this._config.image != null) {
        var toastImage = $__default['default']('<img />').addClass('rounded mr-2').attr('src', this._config.image).attr('alt', this._config.imageAlt);

        if (this._config.imageHeight != null) {
          toastImage.height(this._config.imageHeight).width('auto');
        }

        toastHeader.append(toastImage);
      }

      if (this._config.icon != null) {
        toastHeader.append($__default['default']('<i />').addClass('mr-2').addClass(this._config.icon));
      }

      if (this._config.title != null) {
        toastHeader.append($__default['default']('<strong />').addClass('mr-auto').html(this._config.title));
      }

      if (this._config.subtitle != null) {
        toastHeader.append($__default['default']('<small />').html(this._config.subtitle));
      }

      if (this._config.close == true) {
        var toastClose = $__default['default']('<button data-dismiss="toast" />').attr('type', 'button').addClass('ml-2 mb-1 close').attr('aria-label', 'Close').append('<span aria-hidden="true">&times;</span>');

        if (this._config.title == null) {
          toastClose.toggleClass('ml-2 ml-auto');
        }

        toastHeader.append(toastClose);
      }

      toast.append(toastHeader);

      if (this._config.body != null) {
        toast.append($__default['default']('<div class="toast-body" />').html(this._config.body));
      }

      $__default['default'](this._getContainerId()).prepend(toast);
      var $body = $__default['default']('body');
      $body.trigger($__default['default'].Event(EVENT_CREATED));
      toast.toast('show');

      if (this._config.autoremove) {
        toast.on('hidden.bs.toast', function () {
          $__default['default'](this).delay(200).remove();
          $body.trigger($__default['default'].Event(EVENT_REMOVED$1));
        });
      }
    } // Static
    ;

    _proto._getContainerId = function _getContainerId() {
      if (this._config.position == POSITION_TOP_RIGHT) {
        return SELECTOR_CONTAINER_TOP_RIGHT;
      }

      if (this._config.position == POSITION_TOP_LEFT) {
        return SELECTOR_CONTAINER_TOP_LEFT;
      }

      if (this._config.position == POSITION_BOTTOM_RIGHT) {
        return SELECTOR_CONTAINER_BOTTOM_RIGHT;
      }

      if (this._config.position == POSITION_BOTTOM_LEFT) {
        return SELECTOR_CONTAINER_BOTTOM_LEFT;
      }
    };

    _proto._prepareContainer = function _prepareContainer() {
      if ($__default['default'](this._getContainerId()).length === 0) {
        var container = $__default['default']('<div />').attr('id', this._getContainerId().replace('#', ''));

        if (this._config.position == POSITION_TOP_RIGHT) {
          container.addClass(CLASS_NAME_TOP_RIGHT);
        } else if (this._config.position == POSITION_TOP_LEFT) {
          container.addClass(CLASS_NAME_TOP_LEFT);
        } else if (this._config.position == POSITION_BOTTOM_RIGHT) {
          container.addClass(CLASS_NAME_BOTTOM_RIGHT);
        } else if (this._config.position == POSITION_BOTTOM_LEFT) {
          container.addClass(CLASS_NAME_BOTTOM_LEFT);
        }

        $__default['default']('body').append(container);
      }

      if (this._config.fixed) {
        $__default['default'](this._getContainerId()).addClass('fixed');
      } else {
        $__default['default'](this._getContainerId()).removeClass('fixed');
      }
    } // Static
    ;

    Toasts._jQueryInterface = function _jQueryInterface(option, config) {
      return this.each(function () {
        var _options = $__default['default'].extend({}, Default$9, config);

        var toast = new Toasts($__default['default'](this), _options);

        if (option === 'create') {
          toast[option]();
        }
      });
    };

    return Toasts;
  }();
  /**
   * jQuery API
   * ====================================================
   */


  $__default['default'].fn[NAME$b] = Toasts._jQueryInterface;
  $__default['default'].fn[NAME$b].Constructor = Toasts;

  $__default['default'].fn[NAME$b].noConflict = function () {
    $__default['default'].fn[NAME$b] = JQUERY_NO_CONFLICT$b;
    return Toasts._jQueryInterface;
  };
  /**
   * --------------------------------------------
   * AdminLTE TodoList.js
   * License MIT
   * --------------------------------------------
   */

  /**
   * Constants
   * ====================================================
   */


  var NAME$c = 'TodoList';
  var DATA_KEY$c = 'lte.todolist';
  var JQUERY_NO_CONFLICT$c = $__default['default'].fn[NAME$c];
  var SELECTOR_DATA_TOGGLE$4 = '[data-widget="todo-list"]';
  var CLASS_NAME_TODO_LIST_DONE = 'done';
  var Default$a = {
    onCheck: function onCheck(item) {
      return item;
    },
    onUnCheck: function onUnCheck(item) {
      return item;
    }
  };
  /**
   * Class Definition
   * ====================================================
   */

  var TodoList = /*#__PURE__*/function () {
    function TodoList(element, config) {
      this._config = config;
      this._element = element;

      this._init();
    } // Public


    var _proto = TodoList.prototype;

    _proto.toggle = function toggle(item) {
      item.parents('li').toggleClass(CLASS_NAME_TODO_LIST_DONE);

      if (!$__default['default'](item).prop('checked')) {
        this.unCheck($__default['default'](item));
        return;
      }

      this.check(item);
    };

    _proto.check = function check(item) {
      this._config.onCheck.call(item);
    };

    _proto.unCheck = function unCheck(item) {
      this._config.onUnCheck.call(item);
    } // Private
    ;

    _proto._init = function _init() {
      var _this = this;

      var $toggleSelector = this._element;
      $toggleSelector.find('input:checkbox:checked').parents('li').toggleClass(CLASS_NAME_TODO_LIST_DONE);
      $toggleSelector.on('change', 'input:checkbox', function (event) {
        _this.toggle($__default['default'](event.target));
      });
    } // Static
    ;

    TodoList._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$c);

        if (!data) {
          data = $__default['default'](this).data();
        }

        var _options = $__default['default'].extend({}, Default$a, _typeof(config) === 'object' ? config : data);

        var plugin = new TodoList($__default['default'](this), _options);
        $__default['default'](this).data(DATA_KEY$c, _typeof(config) === 'object' ? config : data);

        if (config === 'init') {
          plugin[config]();
        }
      });
    };

    return TodoList;
  }();
  /**
   * Data API
   * ====================================================
   */


  $__default['default'](window).on('load', function () {
    TodoList._jQueryInterface.call($__default['default'](SELECTOR_DATA_TOGGLE$4));
  });
  /**
   * jQuery API
   * ====================================================
   */

  $__default['default'].fn[NAME$c] = TodoList._jQueryInterface;
  $__default['default'].fn[NAME$c].Constructor = TodoList;

  $__default['default'].fn[NAME$c].noConflict = function () {
    $__default['default'].fn[NAME$c] = JQUERY_NO_CONFLICT$c;
    return TodoList._jQueryInterface;
  };
  /**
   * --------------------------------------------
   * AdminLTE Treeview.js
   * License MIT
   * --------------------------------------------
   */

  /**
   * Constants
   * ====================================================
   */


  var NAME$d = 'Treeview';
  var DATA_KEY$d = 'lte.treeview';
  var EVENT_KEY$7 = "." + DATA_KEY$d;
  var JQUERY_NO_CONFLICT$d = $__default['default'].fn[NAME$d];
  var EVENT_EXPANDED$3 = "expanded" + EVENT_KEY$7;
  var EVENT_COLLAPSED$4 = "collapsed" + EVENT_KEY$7;
  var EVENT_LOAD_DATA_API = "load" + EVENT_KEY$7;
  var SELECTOR_LI = '.nav-item';
  var SELECTOR_LINK = '.nav-link';
  var SELECTOR_TREEVIEW_MENU = '.nav-treeview';
  var SELECTOR_OPEN = '.menu-open';
  var SELECTOR_DATA_WIDGET$2 = '[data-widget="treeview"]';
  var CLASS_NAME_OPEN$2 = 'menu-open';
  var CLASS_NAME_IS_OPENING$1 = 'menu-is-opening';
  var CLASS_NAME_SIDEBAR_COLLAPSED = 'sidebar-collapse';
  var Default$b = {
    trigger: SELECTOR_DATA_WIDGET$2 + " " + SELECTOR_LINK,
    animationSpeed: 300,
    accordion: true,
    expandSidebar: false,
    sidebarButtonSelector: '[data-widget="pushmenu"]'
  };
  /**
   * Class Definition
   * ====================================================
   */

  var Treeview = /*#__PURE__*/function () {
    function Treeview(element, config) {
      this._config = config;
      this._element = element;
    } // Public


    var _proto = Treeview.prototype;

    _proto.init = function init() {
      $__default['default']("" + SELECTOR_LI + SELECTOR_OPEN + " " + SELECTOR_TREEVIEW_MENU).css('display', 'block');

      this._setupListeners();
    };

    _proto.expand = function expand(treeviewMenu, parentLi) {
      var _this = this;

      var expandedEvent = $__default['default'].Event(EVENT_EXPANDED$3);

      if (this._config.accordion) {
        var openMenuLi = parentLi.siblings(SELECTOR_OPEN).first();
        var openTreeview = openMenuLi.find(SELECTOR_TREEVIEW_MENU).first();
        this.collapse(openTreeview, openMenuLi);
      }

      parentLi.addClass(CLASS_NAME_IS_OPENING$1);
      treeviewMenu.stop().slideDown(this._config.animationSpeed, function () {
        parentLi.addClass(CLASS_NAME_OPEN$2);
        $__default['default'](_this._element).trigger(expandedEvent);
      });

      if (this._config.expandSidebar) {
        this._expandSidebar();
      }
    };

    _proto.collapse = function collapse(treeviewMenu, parentLi) {
      var _this2 = this;

      var collapsedEvent = $__default['default'].Event(EVENT_COLLAPSED$4);
      parentLi.removeClass(CLASS_NAME_IS_OPENING$1 + " " + CLASS_NAME_OPEN$2);
      treeviewMenu.stop().slideUp(this._config.animationSpeed, function () {
        $__default['default'](_this2._element).trigger(collapsedEvent);
        treeviewMenu.find(SELECTOR_OPEN + " > " + SELECTOR_TREEVIEW_MENU).slideUp();
        treeviewMenu.find(SELECTOR_OPEN).removeClass(CLASS_NAME_OPEN$2);
      });
    };

    _proto.toggle = function toggle(event) {
      var $relativeTarget = $__default['default'](event.currentTarget);
      var $parent = $relativeTarget.parent();
      var treeviewMenu = $parent.find("> " + SELECTOR_TREEVIEW_MENU);

      if (!treeviewMenu.is(SELECTOR_TREEVIEW_MENU)) {
        if (!$parent.is(SELECTOR_LI)) {
          treeviewMenu = $parent.parent().find("> " + SELECTOR_TREEVIEW_MENU);
        }

        if (!treeviewMenu.is(SELECTOR_TREEVIEW_MENU)) {
          return;
        }
      }

      event.preventDefault();
      var parentLi = $relativeTarget.parents(SELECTOR_LI).first();
      var isOpen = parentLi.hasClass(CLASS_NAME_OPEN$2);

      if (isOpen) {
        this.collapse($__default['default'](treeviewMenu), parentLi);
      } else {
        this.expand($__default['default'](treeviewMenu), parentLi);
      }
    } // Private
    ;

    _proto._setupListeners = function _setupListeners() {
      var _this3 = this;

      var elementId = this._element.attr('id') !== undefined ? "#" + this._element.attr('id') : '';
      $__default['default'](document).on('click', "" + elementId + this._config.trigger, function (event) {
        _this3.toggle(event);
      });
    };

    _proto._expandSidebar = function _expandSidebar() {
      if ($__default['default']('body').hasClass(CLASS_NAME_SIDEBAR_COLLAPSED)) {
        $__default['default'](this._config.sidebarButtonSelector).PushMenu('expand');
      }
    } // Static
    ;

    Treeview._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$d);

        var _options = $__default['default'].extend({}, Default$b, $__default['default'](this).data());

        if (!data) {
          data = new Treeview($__default['default'](this), _options);
          $__default['default'](this).data(DATA_KEY$d, data);
        }

        if (config === 'init') {
          data[config]();
        }
      });
    };

    return Treeview;
  }();
  /**
   * Data API
   * ====================================================
   */


  $__default['default'](window).on(EVENT_LOAD_DATA_API, function () {
    $__default['default'](SELECTOR_DATA_WIDGET$2).each(function () {
      Treeview._jQueryInterface.call($__default['default'](this), 'init');
    });
  });
  /**
   * jQuery API
   * ====================================================
   */

  $__default['default'].fn[NAME$d] = Treeview._jQueryInterface;
  $__default['default'].fn[NAME$d].Constructor = Treeview;

  $__default['default'].fn[NAME$d].noConflict = function () {
    $__default['default'].fn[NAME$d] = JQUERY_NO_CONFLICT$d;
    return Treeview._jQueryInterface;
  };

  exports.CardRefresh = CardRefresh;
  exports.CardWidget = CardWidget;
  exports.ControlSidebar = ControlSidebar;
  exports.DirectChat = DirectChat;
  exports.Dropdown = Dropdown;
  exports.ExpandableTable = ExpandableTable;
  exports.Fullscreen = Fullscreen;
  exports.IFrame = IFrame;
  exports.Layout = Layout;
  exports.PushMenu = PushMenu;
  exports.SidebarSearch = SidebarSearch;
  exports.Toasts = Toasts;
  exports.TodoList = TodoList;
  exports.Treeview = Treeview;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

/***/ }),

/***/ "./node_modules/core-js/internals/number-parse-float.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/number-parse-float.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var $parseFloat = global.parseFloat;
var FORCED = 1 / $parseFloat(whitespaces + '-0') !== -Infinity;

// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
module.exports = FORCED ? function parseFloat(string) {
  var trimmedString = trim(String(string));
  var result = $parseFloat(trimmedString);
  return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),

/***/ "./node_modules/core-js/internals/number-parse-int.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/number-parse-int.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var $parseInt = global.parseInt;
var hex = /^[+-]?0[Xx]/;
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22;

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(String(string));
  return $parseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "./node_modules/core-js/internals/same-value.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/same-value.js ***!
  \******************************************************/
/***/ ((module) => {

// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
// eslint-disable-next-line es/no-object-is -- safe
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-trim-forced.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim-forced.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-trim.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "./node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/***/ ((module) => {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


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

/***/ "./node_modules/core-js/modules/es.object.keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.keys.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var nativeKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-float.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-float.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var parseFloatImplementation = __webpack_require__(/*! ../internals/number-parse-float */ "./node_modules/core-js/internals/number-parse-float.js");

// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
$({ global: true, forced: parseFloat != parseFloatImplementation }, {
  parseFloat: parseFloatImplementation
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-int.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-int.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var parseIntImplementation = __webpack_require__(/*! ../internals/number-parse-int */ "./node_modules/core-js/internals/number-parse-int.js");

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != parseIntImplementation }, {
  parseInt: parseIntImplementation
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.fixed.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.fixed.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createHTML = __webpack_require__(/*! ../internals/create-html */ "./node_modules/core-js/internals/create-html.js");
var forcedStringHTMLMethod = __webpack_require__(/*! ../internals/string-html-forced */ "./node_modules/core-js/internals/string-html-forced.js");

// `String.prototype.fixed` method
// https://tc39.es/ecma262/#sec-string.prototype.fixed
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('fixed') }, {
  fixed: function fixed() {
    return createHTML(this, 'tt', '', '');
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.link.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.link.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createHTML = __webpack_require__(/*! ../internals/create-html */ "./node_modules/core-js/internals/create-html.js");
var forcedStringHTMLMethod = __webpack_require__(/*! ../internals/string-html-forced */ "./node_modules/core-js/internals/string-html-forced.js");

// `String.prototype.link` method
// https://tc39.es/ecma262/#sec-string.prototype.link
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('link') }, {
  link: function link(url) {
    return createHTML(this, 'a', 'href', url);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.search.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.search.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var sameValue = __webpack_require__(/*! ../internals/same-value */ "./node_modules/core-js/internals/same-value.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

// @@search logic
fixRegExpWellKnownSymbolLogic('search', 1, function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.es/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible(this);
      var searcher = regexp == undefined ? undefined : regexp[SEARCH];
      return searcher !== undefined ? searcher.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative(nativeSearch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.trim.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.trim.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var forcedStringTrimMethod = __webpack_require__(/*! ../internals/string-trim-forced */ "./node_modules/core-js/internals/string-trim-forced.js");

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-6ea37d","vendors-node_modules_core-js_internals_create-html_js-node_modules_core-js_internals_string-h-3e7116"], () => (__webpack_exec__("./public/assets/js/adminlte.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vYnVpbGQvanMvQ2FyZFJlZnJlc2guanMiLCJ3ZWJwYWNrOi8vLy4uL2J1aWxkL2pzL0NhcmRXaWRnZXQuanMiLCJ3ZWJwYWNrOi8vLy4uL2J1aWxkL2pzL0NvbnRyb2xTaWRlYmFyLmpzIiwid2VicGFjazovLy8uLi9idWlsZC9qcy9EaXJlY3RDaGF0LmpzIiwid2VicGFjazovLy8uLi9idWlsZC9qcy9Ecm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vLi4vYnVpbGQvanMvRXhwYW5kYWJsZVRhYmxlLmpzIiwid2VicGFjazovLy8uLi9idWlsZC9qcy9GdWxsc2NyZWVuLmpzIiwid2VicGFjazovLy8uLi9idWlsZC9qcy9JRnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4uL2J1aWxkL2pzL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi4vYnVpbGQvanMvUHVzaE1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4uL2J1aWxkL2pzL1NpZGViYXJTZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4uL2J1aWxkL2pzL1RvYXN0cy5qcyIsIndlYnBhY2s6Ly8vLi4vYnVpbGQvanMvVG9kb0xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4uL2J1aWxkL2pzL1RyZWV2aWV3LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9udW1iZXItcGFyc2UtZmxvYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL251bWJlci1wYXJzZS1pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NhbWUtdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N0cmluZy10cmltLWZvcmNlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLXRyaW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3doaXRlc3BhY2VzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuam9pbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucGFyc2UtZmxvYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5wYXJzZS1pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuZml4ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcubGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcudHJpbS5qcyJdLCJuYW1lcyI6WyJOQU1FIiwiREFUQV9LRVkiLCJFVkVOVF9LRVkiLCJKUVVFUllfTk9fQ09ORkxJQ1QiLCIkIiwiRVZFTlRfTE9BREVEIiwiRVZFTlRfT1ZFUkxBWV9BRERFRCIsIkVWRU5UX09WRVJMQVlfUkVNT1ZFRCIsIkNMQVNTX05BTUVfQ0FSRCIsIlNFTEVDVE9SX0NBUkQiLCJTRUxFQ1RPUl9EQVRBX1JFRlJFU0giLCJEZWZhdWx0Iiwic291cmNlIiwic291cmNlU2VsZWN0b3IiLCJwYXJhbXMiLCJ0cmlnZ2VyIiwiY29udGVudCIsImxvYWRJbkNvbnRlbnQiLCJsb2FkT25Jbml0IiwicmVzcG9uc2VUeXBlIiwib3ZlcmxheVRlbXBsYXRlIiwib25Mb2FkU3RhcnQiLCJvbkxvYWREb25lIiwiQ2FyZFJlZnJlc2giLCJlbGVtZW50IiwibG9hZCIsInJlc3BvbnNlIiwiX2FkZE92ZXJsYXkiLCJfcmVtb3ZlT3ZlcmxheSIsIl9pbml0IiwiX2pRdWVyeUludGVyZmFjZSIsImRhdGEiLCJfb3B0aW9ucyIsImNvbmZpZyIsImV2ZW50IiwiRVZFTlRfRVhQQU5ERUQiLCJFVkVOVF9DT0xMQVBTRUQiLCJFVkVOVF9NQVhJTUlaRUQiLCJFVkVOVF9NSU5JTUlaRUQiLCJFVkVOVF9SRU1PVkVEIiwiQ0xBU1NfTkFNRV9DT0xMQVBTRUQiLCJDTEFTU19OQU1FX0NPTExBUFNJTkciLCJDTEFTU19OQU1FX0VYUEFORElORyIsIkNMQVNTX05BTUVfV0FTX0NPTExBUFNFRCIsIkNMQVNTX05BTUVfTUFYSU1JWkVEIiwiU0VMRUNUT1JfREFUQV9SRU1PVkUiLCJTRUxFQ1RPUl9EQVRBX0NPTExBUFNFIiwiU0VMRUNUT1JfREFUQV9NQVhJTUlaRSIsIlNFTEVDVE9SX0NBUkRfSEVBREVSIiwiU0VMRUNUT1JfQ0FSRF9CT0RZIiwiU0VMRUNUT1JfQ0FSRF9GT09URVIiLCJhbmltYXRpb25TcGVlZCIsImNvbGxhcHNlVHJpZ2dlciIsInJlbW92ZVRyaWdnZXIiLCJtYXhpbWl6ZVRyaWdnZXIiLCJjb2xsYXBzZUljb24iLCJleHBhbmRJY29uIiwibWF4aW1pemVJY29uIiwibWluaW1pemVJY29uIiwiQ2FyZFdpZGdldCIsImNvbGxhcHNlIiwiZXhwYW5kIiwicmVtb3ZlIiwidG9nZ2xlIiwibWF4aW1pemUiLCJoZWlnaHQiLCJ3aWR0aCIsInRyYW5zaXRpb24iLCIkZWxlbWVudCIsIm1pbmltaXplIiwidG9nZ2xlTWF4aW1pemUiLCJTRUxFQ1RPUl9DT05UUk9MX1NJREVCQVIiLCJTRUxFQ1RPUl9DT05UUk9MX1NJREVCQVJfQ09OVEVOVCIsIlNFTEVDVE9SX0RBVEFfVE9HR0xFIiwiU0VMRUNUT1JfSEVBREVSIiwiU0VMRUNUT1JfRk9PVEVSIiwiQ0xBU1NfTkFNRV9DT05UUk9MX1NJREVCQVJfQU5JTUFURSIsIkNMQVNTX05BTUVfQ09OVFJPTF9TSURFQkFSX09QRU4iLCJDTEFTU19OQU1FX0NPTlRST0xfU0lERUJBUl9TTElERSIsIkNMQVNTX05BTUVfTEFZT1VUX0ZJWEVEIiwiQ0xBU1NfTkFNRV9OQVZCQVJfRklYRUQiLCJDTEFTU19OQU1FX05BVkJBUl9TTV9GSVhFRCIsIkNMQVNTX05BTUVfTkFWQkFSX01EX0ZJWEVEIiwiQ0xBU1NfTkFNRV9OQVZCQVJfTEdfRklYRUQiLCJDTEFTU19OQU1FX05BVkJBUl9YTF9GSVhFRCIsIkNMQVNTX05BTUVfRk9PVEVSX0ZJWEVEIiwiQ0xBU1NfTkFNRV9GT09URVJfU01fRklYRUQiLCJDTEFTU19OQU1FX0ZPT1RFUl9NRF9GSVhFRCIsIkNMQVNTX05BTUVfRk9PVEVSX0xHX0ZJWEVEIiwiQ0xBU1NfTkFNRV9GT09URVJfWExfRklYRUQiLCJjb250cm9sc2lkZWJhclNsaWRlIiwic2Nyb2xsYmFyVGhlbWUiLCJzY3JvbGxiYXJBdXRvSGlkZSIsIkNvbnRyb2xTaWRlYmFyIiwiJGJvZHkiLCIkaHRtbCIsInNob3ciLCJzaG91bGRDbG9zZSIsInNob3VsZEZpeEhlaWdodCIsIl9maXhTY3JvbGxIZWlnaHQiLCJoZWlnaHRzIiwic2Nyb2xsIiwid2luZG93IiwiaGVhZGVyIiwiZm9vdGVyIiwicG9zaXRpb25zIiwiYm90dG9tIiwiTWF0aCIsInRvcCIsIm5hdmJhckZpeGVkIiwiZm9vdGVyRml4ZWQiLCIkY29udHJvbFNpZGViYXIiLCIkY29udHJvbHNpZGViYXJDb250ZW50IiwiX2ZpeEhlaWdodCIsInNpZGViYXJIZWlnaHQiLCJjbGFzc05hbWUiLCJzaXplQXV0b0NhcGFibGUiLCJzY3JvbGxiYXJzIiwiYXV0b0hpZGUiLCJjbGlja1Njcm9sbGluZyIsIm9wZXJhdGlvbiIsIkVWRU5UX1RPR0dMRUQiLCJTRUxFQ1RPUl9ESVJFQ1RfQ0hBVCIsIkNMQVNTX05BTUVfRElSRUNUX0NIQVRfT1BFTiIsIkRpcmVjdENoYXQiLCJTRUxFQ1RPUl9OQVZCQVIiLCJTRUxFQ1RPUl9EUk9QRE9XTl9NRU5VIiwiU0VMRUNUT1JfRFJPUERPV05fTUVOVV9BQ1RJVkUiLCJTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUiLCJDTEFTU19OQU1FX0RST1BET1dOX1JJR0hUIiwiQ0xBU1NfTkFNRV9EUk9QRE9XTl9TVUJNRU5VIiwiRHJvcGRvd24iLCJ0b2dnbGVTdWJtZW51IiwiZml4UG9zaXRpb24iLCJsZWZ0IiwicmlnaHQiLCJvZmZzZXQiLCJ2aXNpYmxlUGFydCIsIl9jb25maWciLCJzZXRUaW1lb3V0IiwiU0VMRUNUT1JfVEFCTEUiLCJTRUxFQ1RPUl9BUklBX0FUVFIiLCJFeHBhbmRhYmxlVGFibGUiLCJpbml0IiwiJHR5cGUiLCJ0b2dnbGVSb3ciLCJ0aW1lIiwiU0VMRUNUT1JfREFUQV9XSURHRVQiLCJTRUxFQ1RPUl9JQ09OIiwiRnVsbHNjcmVlbiIsImRvY3VtZW50IiwiZnVsbHNjcmVlbiIsIndpbmRvd2VkIiwicGx1Z2luIiwiU0VMRUNUT1JfREFUQV9UT0dHTEVfQ0xPU0UiLCJTRUxFQ1RPUl9EQVRBX1RPR0dMRV9TQ1JPTExfTEVGVCIsIlNFTEVDVE9SX0RBVEFfVE9HR0xFX1NDUk9MTF9SSUdIVCIsIlNFTEVDVE9SX0RBVEFfVE9HR0xFX0ZVTExTQ1JFRU4iLCJTRUxFQ1RPUl9DT05URU5UX1dSQVBQRVIiLCJTRUxFQ1RPUl9DT05URU5UX0lGUkFNRSIsIlNFTEVDVE9SX1RBQl9OQVYiLCJTRUxFQ1RPUl9UQUJfTkFWQkFSX05BViIsIlNFTEVDVE9SX1RBQl9OQVZCQVJfTkFWX0lURU0iLCJTRUxFQ1RPUl9UQUJfQ09OVEVOVCIsIlNFTEVDVE9SX1RBQl9FTVBUWSIsIlNFTEVDVE9SX1RBQl9MT0FESU5HIiwiU0VMRUNUT1JfU0lERUJBUl9NRU5VX0lURU0iLCJTRUxFQ1RPUl9IRUFERVJfTUVOVV9JVEVNIiwiU0VMRUNUT1JfSEVBREVSX0RST1BET1dOX0lURU0iLCJDTEFTU19OQU1FX0lGUkFNRV9NT0RFIiwiQ0xBU1NfTkFNRV9GVUxMU0NSRUVOX01PREUiLCJvblRhYkNsaWNrIiwib25UYWJDaGFuZ2VkIiwib25UYWJDcmVhdGVkIiwiYXV0b0lmcmFtZU1vZGUiLCJhdXRvSXRlbUFjdGl2ZSIsImF1dG9TaG93TmV3VGFiIiwibG9hZGluZ1NjcmVlbiIsInVzZU5hdmJhckl0ZW1zIiwic2Nyb2xsT2Zmc2V0Iiwic2Nyb2xsQmVoYXZpb3JTd2FwIiwiaWNvbk1heGltaXplIiwiaWNvbk1pbmltaXplIiwiSUZyYW1lIiwiY3JlYXRlVGFiIiwidGFiSWQiLCJuYXZJZCIsIm5ld05hdkl0ZW0iLCJuZXdUYWJJdGVtIiwiJGxvYWRpbmdTY3JlZW4iLCJvcGVuVGFiU2lkZWJhciIsImF1dG9PcGVuIiwiJGl0ZW0iLCJ0aXRsZSIsImxpbmsiLCJzd2l0Y2hUYWIiLCJyZW1vdmVBY3RpdmVUYWIiLCIkbmF2SXRlbSIsIiRuYXZJdGVtUGFyZW50IiwibmF2SXRlbUluZGV4IiwicHJldk5hdkl0ZW1JbmRleCIsInRvZ2dsZUZ1bGxzY3JlZW4iLCJfbmF2U2Nyb2xsIiwibGVmdFBvcyIsInNjcm9sbExlZnQiLCJfc2V0dXBMaXN0ZW5lcnMiLCJlIiwibW91c2Vkb3duIiwibW91c2Vkb3duSW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJfc2V0SXRlbUFjdGl2ZSIsIiRoZWFkZXJNZW51SXRlbSIsIiRoZWFkZXJEcm9wZG93bkl0ZW0iLCIkc2lkZWJhck1lbnVJdGVtIiwidGFiRW1wdHkiLCJ3aW5kb3dIZWlnaHQiLCJjb250ZW50V3JhcHBlckhlaWdodCIsInBhcnNlRmxvYXQiLCJuYXZiYXJIZWlnaHQiLCJhcmdzIiwiU0VMRUNUT1JfTUFJTl9TSURFQkFSIiwiU0VMRUNUT1JfU0lERUJBUiIsIlNFTEVDVE9SX0NPTlRFTlQiLCJTRUxFQ1RPUl9DT05UUk9MX1NJREVCQVJfQlROIiwiU0VMRUNUT1JfUFVTSE1FTlVfQlROIiwiU0VMRUNUT1JfTE9HSU5fQk9YIiwiU0VMRUNUT1JfUkVHSVNURVJfQk9YIiwiQ0xBU1NfTkFNRV9TSURFQkFSX0ZPQ1VTRUQiLCJDTEFTU19OQU1FX0NPTlRST0xfU0lERUJBUl9TTElERV9PUEVOIiwiQ0xBU1NfTkFNRV9MQVlPVVRfVE9QX05BViIsInBhbmVsQXV0b0hlaWdodCIsInBhbmVsQXV0b0hlaWdodE1vZGUiLCJsb2dpblJlZ2lzdGVyQXV0b0hlaWdodCIsIkxheW91dCIsImZpeExheW91dEhlaWdodCIsImV4dHJhIiwiY29udHJvbFNpZGViYXIiLCJzaWRlYmFyIiwibWF4IiwiJGNvbnRlbnRTZWxlY3RvciIsImZpeExvZ2luUmVnaXN0ZXJIZWlnaHQiLCIkc2VsZWN0b3IiLCJib3hIZWlnaHQiLCJwYXJzZUludCIsIl9tYXgiLCJPYmplY3QiLCJudW1iZXJzIiwiX2lzRm9vdGVyRml4ZWQiLCJFVkVOVF9TSE9XTiIsIlNFTEVDVE9SX1RPR0dMRV9CVVRUT04iLCJTRUxFQ1RPUl9CT0RZIiwiU0VMRUNUT1JfT1ZFUkxBWSIsIlNFTEVDVE9SX1dSQVBQRVIiLCJDTEFTU19OQU1FX09QRU4iLCJDTEFTU19OQU1FX0lTX09QRU5JTkciLCJDTEFTU19OQU1FX0NMT1NFRCIsImF1dG9Db2xsYXBzZVNpemUiLCJlbmFibGVSZW1lbWJlciIsIm5vVHJhbnNpdGlvbkFmdGVyUmVsb2FkIiwiUHVzaE1lbnUiLCIkYm9keVNlbGVjdG9yIiwibG9jYWxTdG9yYWdlIiwiYXV0b0NvbGxhcHNlIiwicmVzaXplIiwicmVtZW1iZXIiLCJ0b2dnbGVTdGF0ZSIsIm92ZXJsYXkiLCJpZCIsImJ1dHRvbiIsIkNMQVNTX05BTUVfSUNPTl9TRUFSQ0giLCJDTEFTU19OQU1FX0lDT05fQ0xPU0UiLCJDTEFTU19OQU1FX0hFQURFUiIsIkNMQVNTX05BTUVfU0VBUkNIX1JFU1VMVFMiLCJDTEFTU19OQU1FX0xJU1RfR1JPVVAiLCJTRUxFQ1RPUl9OQVZfTElOSyIsIlNFTEVDVE9SX05BVl9UUkVFVklFVyIsIlNFTEVDVE9SX1NFQVJDSF9JTlBVVCIsIlNFTEVDVE9SX1NFQVJDSF9CVVRUT04iLCJTRUxFQ1RPUl9TRUFSQ0hfSUNPTiIsIlNFTEVDVE9SX1NFQVJDSF9MSVNUX0dST1VQIiwiU0VMRUNUT1JfU0VBUkNIX1JFU1VMVFMiLCJTRUxFQ1RPUl9TRUFSQ0hfUkVTVUxUU19HUk9VUCIsImFycm93U2lnbiIsIm1pbkxlbmd0aCIsIm1heFJlc3VsdHMiLCJoaWdobGlnaHROYW1lIiwiaGlnaGxpZ2h0UGF0aCIsImhpZ2hsaWdodENsYXNzIiwibm90Rm91bmRUZXh0IiwiU2VhcmNoSXRlbXMiLCJTaWRlYmFyU2VhcmNoIiwiY2xhc3MiLCJzZWFyY2giLCJzZWFyY2hWYWx1ZSIsInNlYXJjaFJlc3VsdHMiLCJpdGVtIiwiZW5kUmVzdWx0cyIsInJlc3VsdCIsIm9wZW4iLCJjbG9zZSIsIl9wYXJzZUl0ZW0iLCJwYXRoIiwiaXRlbU9iamVjdCIsIm5hdkxpbmsiLCJuYXZUcmVldmlldyIsIm5hbWUiLCJuZXdQYXRoIiwiX3RyaW1UZXh0IiwidHJpbSIsInRleHQiLCJfcmVuZGVySXRlbSIsInJlZ0V4cCIsIl9hZGROb3RGb3VuZCIsInRpbWVyIiwiY2xlYXJUaW1lb3V0IiwiJGZvY3VzZWQiLCJFVkVOVF9JTklUIiwiRVZFTlRfQ1JFQVRFRCIsIlNFTEVDVE9SX0NPTlRBSU5FUl9UT1BfUklHSFQiLCJTRUxFQ1RPUl9DT05UQUlORVJfVE9QX0xFRlQiLCJTRUxFQ1RPUl9DT05UQUlORVJfQk9UVE9NX1JJR0hUIiwiU0VMRUNUT1JfQ09OVEFJTkVSX0JPVFRPTV9MRUZUIiwiQ0xBU1NfTkFNRV9UT1BfUklHSFQiLCJDTEFTU19OQU1FX1RPUF9MRUZUIiwiQ0xBU1NfTkFNRV9CT1RUT01fUklHSFQiLCJDTEFTU19OQU1FX0JPVFRPTV9MRUZUIiwiUE9TSVRJT05fVE9QX1JJR0hUIiwiUE9TSVRJT05fVE9QX0xFRlQiLCJQT1NJVElPTl9CT1RUT01fUklHSFQiLCJQT1NJVElPTl9CT1RUT01fTEVGVCIsInBvc2l0aW9uIiwiZml4ZWQiLCJhdXRvaGlkZSIsImF1dG9yZW1vdmUiLCJkZWxheSIsImZhZGUiLCJpY29uIiwiaW1hZ2UiLCJpbWFnZUFsdCIsImltYWdlSGVpZ2h0Iiwic3VidGl0bGUiLCJib2R5IiwiVG9hc3RzIiwiY3JlYXRlIiwidG9hc3QiLCJ0b2FzdEhlYWRlciIsInRvYXN0SW1hZ2UiLCJ0b2FzdENsb3NlIiwiX2dldENvbnRhaW5lcklkIiwiX3ByZXBhcmVDb250YWluZXIiLCJjb250YWluZXIiLCJvcHRpb24iLCJDTEFTU19OQU1FX1RPRE9fTElTVF9ET05FIiwib25DaGVjayIsIm9uVW5DaGVjayIsIlRvZG9MaXN0IiwiY2hlY2siLCJ1bkNoZWNrIiwiJHRvZ2dsZVNlbGVjdG9yIiwiRVZFTlRfTE9BRF9EQVRBX0FQSSIsIlNFTEVDVE9SX0xJIiwiU0VMRUNUT1JfTElOSyIsIlNFTEVDVE9SX1RSRUVWSUVXX01FTlUiLCJTRUxFQ1RPUl9PUEVOIiwiQ0xBU1NfTkFNRV9TSURFQkFSX0NPTExBUFNFRCIsImFjY29yZGlvbiIsImV4cGFuZFNpZGViYXIiLCJzaWRlYmFyQnV0dG9uU2VsZWN0b3IiLCJUcmVldmlldyIsImV4cGFuZGVkRXZlbnQiLCJvcGVuTWVudUxpIiwicGFyZW50TGkiLCJvcGVuVHJlZXZpZXciLCJ0cmVldmlld01lbnUiLCJjb2xsYXBzZWRFdmVudCIsIiRyZWxhdGl2ZVRhcmdldCIsIiRwYXJlbnQiLCJpc09wZW4iLCJlbGVtZW50SWQiLCJfZXhwYW5kU2lkZWJhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztBQVNBOzs7Ozs7QUFLQSxNQUFNQSxJQUFJLEdBQVY7QUFDQSxNQUFNQyxRQUFRLEdBQWQ7QUFDQSxNQUFNQyxTQUFTLFNBQWY7QUFDQSxNQUFNQyxrQkFBa0IsR0FBR0MseUJBQTNCLElBQTJCQSxDQUEzQjtBQUVBLE1BQU1DLFlBQVksY0FBbEI7QUFDQSxNQUFNQyxtQkFBbUIscUJBQXpCO0FBQ0EsTUFBTUMscUJBQXFCLHVCQUEzQjtBQUVBLE1BQU1DLGVBQWUsR0FBckI7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WUFBWSwyR0FBd0M7QUFDcEQsNkJBQTZCLG1CQUFPLENBQUMsK0ZBQWlDOztBQUV0RTtBQUNBO0FBQ0EsR0FBRyx3RUFBd0U7QUFDM0U7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJhZG1pbmx0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEFkbWluTFRFIENhcmRSZWZyZXNoLmpzXG4gKiBMaWNlbnNlIE1JVFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuY29uc3QgTkFNRSA9ICdDYXJkUmVmcmVzaCdcbmNvbnN0IERBVEFfS0VZID0gJ2x0ZS5jYXJkcmVmcmVzaCdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG5cbmNvbnN0IEVWRU5UX0xPQURFRCA9IGBsb2FkZWQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9PVkVSTEFZX0FEREVEID0gYG92ZXJsYXkuYWRkZWQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9PVkVSTEFZX1JFTU9WRUQgPSBgb3ZlcmxheS5yZW1vdmVkJHtFVkVOVF9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX0NBUkQgPSAnY2FyZCdcblxuY29uc3QgU0VMRUNUT1JfQ0FSRCA9IGAuJHtDTEFTU19OQU1FX0NBUkR9YFxuY29uc3QgU0VMRUNUT1JfREFUQV9SRUZSRVNIID0gJ1tkYXRhLWNhcmQtd2lkZ2V0PVwiY2FyZC1yZWZyZXNoXCJdJ1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBzb3VyY2U6ICcnLFxuICBzb3VyY2VTZWxlY3RvcjogJycsXG4gIHBhcmFtczoge30sXG4gIHRyaWdnZXI6IFNFTEVDVE9SX0RBVEFfUkVGUkVTSCxcbiAgY29udGVudDogJy5jYXJkLWJvZHknLFxuICBsb2FkSW5Db250ZW50OiB0cnVlLFxuICBsb2FkT25Jbml0OiB0cnVlLFxuICByZXNwb25zZVR5cGU6ICcnLFxuICBvdmVybGF5VGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwib3ZlcmxheVwiPjxpIGNsYXNzPVwiZmFzIGZhLTJ4IGZhLXN5bmMtYWx0IGZhLXNwaW5cIj48L2k+PC9kaXY+JyxcbiAgb25Mb2FkU3RhcnQoKSB7XG4gIH0sXG4gIG9uTG9hZERvbmUocmVzcG9uc2UpIHtcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfVxufVxuXG5jbGFzcyBDYXJkUmVmcmVzaCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHNldHRpbmdzKSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLl9wYXJlbnQgPSBlbGVtZW50LnBhcmVudHMoU0VMRUNUT1JfQ0FSRCkuZmlyc3QoKVxuICAgIHRoaXMuX3NldHRpbmdzID0gJC5leHRlbmQoe30sIERlZmF1bHQsIHNldHRpbmdzKVxuICAgIHRoaXMuX292ZXJsYXkgPSAkKHRoaXMuX3NldHRpbmdzLm92ZXJsYXlUZW1wbGF0ZSlcblxuICAgIGlmIChlbGVtZW50Lmhhc0NsYXNzKENMQVNTX05BTUVfQ0FSRCkpIHtcbiAgICAgIHRoaXMuX3BhcmVudCA9IGVsZW1lbnRcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fc2V0dGluZ3Muc291cmNlID09PSAnJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdTb3VyY2UgdXJsIHdhcyBub3QgZGVmaW5lZC4gUGxlYXNlIHNwZWNpZnkgYSB1cmwgaW4geW91ciBDYXJkUmVmcmVzaCBzb3VyY2Ugb3B0aW9uLicpXG4gICAgfVxuICB9XG5cbiAgbG9hZCgpIHtcbiAgICB0aGlzLl9hZGRPdmVybGF5KClcbiAgICB0aGlzLl9zZXR0aW5ncy5vbkxvYWRTdGFydC5jYWxsKCQodGhpcykpXG5cbiAgICAkLmdldCh0aGlzLl9zZXR0aW5ncy5zb3VyY2UsIHRoaXMuX3NldHRpbmdzLnBhcmFtcywgcmVzcG9uc2UgPT4ge1xuICAgICAgaWYgKHRoaXMuX3NldHRpbmdzLmxvYWRJbkNvbnRlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NldHRpbmdzLnNvdXJjZVNlbGVjdG9yICE9PSAnJykge1xuICAgICAgICAgIHJlc3BvbnNlID0gJChyZXNwb25zZSkuZmluZCh0aGlzLl9zZXR0aW5ncy5zb3VyY2VTZWxlY3RvcikuaHRtbCgpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9wYXJlbnQuZmluZCh0aGlzLl9zZXR0aW5ncy5jb250ZW50KS5odG1sKHJlc3BvbnNlKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9zZXR0aW5ncy5vbkxvYWREb25lLmNhbGwoJCh0aGlzKSwgcmVzcG9uc2UpXG4gICAgICB0aGlzLl9yZW1vdmVPdmVybGF5KClcbiAgICB9LCB0aGlzLl9zZXR0aW5ncy5yZXNwb25zZVR5cGUgIT09ICcnICYmIHRoaXMuX3NldHRpbmdzLnJlc3BvbnNlVHlwZSlcblxuICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcigkLkV2ZW50KEVWRU5UX0xPQURFRCkpXG4gIH1cblxuICBfYWRkT3ZlcmxheSgpIHtcbiAgICB0aGlzLl9wYXJlbnQuYXBwZW5kKHRoaXMuX292ZXJsYXkpXG4gICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKCQuRXZlbnQoRVZFTlRfT1ZFUkxBWV9BRERFRCkpXG4gIH1cblxuICBfcmVtb3ZlT3ZlcmxheSgpIHtcbiAgICB0aGlzLl9wYXJlbnQuZmluZCh0aGlzLl9vdmVybGF5KS5yZW1vdmUoKVxuICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcigkLkV2ZW50KEVWRU5UX09WRVJMQVlfUkVNT1ZFRCkpXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2luaXQoKSB7XG4gICAgJCh0aGlzKS5maW5kKHRoaXMuX3NldHRpbmdzLnRyaWdnZXIpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMubG9hZCgpXG4gICAgfSlcblxuICAgIGlmICh0aGlzLl9zZXR0aW5ncy5sb2FkT25Jbml0KSB7XG4gICAgICB0aGlzLmxvYWQoKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIGxldCBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuICAgIGNvbnN0IF9vcHRpb25zID0gJC5leHRlbmQoe30sIERlZmF1bHQsICQodGhpcykuZGF0YSgpKVxuXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICBkYXRhID0gbmV3IENhcmRSZWZyZXNoKCQodGhpcyksIF9vcHRpb25zKVxuICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCB0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyA/IGRhdGEgOiBjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnICYmIGNvbmZpZy5tYXRjaCgvbG9hZC8pKSB7XG4gICAgICBkYXRhW2NvbmZpZ10oKVxuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhLl9pbml0KCQodGhpcykpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogRGF0YSBBUElcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCBTRUxFQ1RPUl9EQVRBX1JFRlJFU0gsIGZ1bmN0aW9uIChldmVudCkge1xuICBpZiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBDYXJkUmVmcmVzaC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0aGlzKSwgJ2xvYWQnKVxufSlcblxuJCgoKSA9PiB7XG4gICQoU0VMRUNUT1JfREFUQV9SRUZSRVNIKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICBDYXJkUmVmcmVzaC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0aGlzKSlcbiAgfSlcbn0pXG5cbi8qKlxuICogalF1ZXJ5IEFQSVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbiQuZm5bTkFNRV0gPSBDYXJkUmVmcmVzaC5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gQ2FyZFJlZnJlc2hcbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gQ2FyZFJlZnJlc2guX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkUmVmcmVzaFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQWRtaW5MVEUgQ2FyZFdpZGdldC5qc1xuICogTGljZW5zZSBNSVRcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG4vKipcbiAqIENvbnN0YW50c1xuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmNvbnN0IE5BTUUgPSAnQ2FyZFdpZGdldCdcbmNvbnN0IERBVEFfS0VZID0gJ2x0ZS5jYXJkd2lkZ2V0J1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV1cblxuY29uc3QgRVZFTlRfRVhQQU5ERUQgPSBgZXhwYW5kZWQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DT0xMQVBTRUQgPSBgY29sbGFwc2VkJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTUFYSU1JWkVEID0gYG1heGltaXplZCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX01JTklNSVpFRCA9IGBtaW5pbWl6ZWQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9SRU1PVkVEID0gYHJlbW92ZWQke0VWRU5UX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfQ0FSRCA9ICdjYXJkJ1xuY29uc3QgQ0xBU1NfTkFNRV9DT0xMQVBTRUQgPSAnY29sbGFwc2VkLWNhcmQnXG5jb25zdCBDTEFTU19OQU1FX0NPTExBUFNJTkcgPSAnY29sbGFwc2luZy1jYXJkJ1xuY29uc3QgQ0xBU1NfTkFNRV9FWFBBTkRJTkcgPSAnZXhwYW5kaW5nLWNhcmQnXG5jb25zdCBDTEFTU19OQU1FX1dBU19DT0xMQVBTRUQgPSAnd2FzLWNvbGxhcHNlZCdcbmNvbnN0IENMQVNTX05BTUVfTUFYSU1JWkVEID0gJ21heGltaXplZC1jYXJkJ1xuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1JFTU9WRSA9ICdbZGF0YS1jYXJkLXdpZGdldD1cInJlbW92ZVwiXSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfQ09MTEFQU0UgPSAnW2RhdGEtY2FyZC13aWRnZXQ9XCJjb2xsYXBzZVwiXSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfTUFYSU1JWkUgPSAnW2RhdGEtY2FyZC13aWRnZXQ9XCJtYXhpbWl6ZVwiXSdcbmNvbnN0IFNFTEVDVE9SX0NBUkQgPSBgLiR7Q0xBU1NfTkFNRV9DQVJEfWBcbmNvbnN0IFNFTEVDVE9SX0NBUkRfSEVBREVSID0gJy5jYXJkLWhlYWRlcidcbmNvbnN0IFNFTEVDVE9SX0NBUkRfQk9EWSA9ICcuY2FyZC1ib2R5J1xuY29uc3QgU0VMRUNUT1JfQ0FSRF9GT09URVIgPSAnLmNhcmQtZm9vdGVyJ1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBhbmltYXRpb25TcGVlZDogJ25vcm1hbCcsXG4gIGNvbGxhcHNlVHJpZ2dlcjogU0VMRUNUT1JfREFUQV9DT0xMQVBTRSxcbiAgcmVtb3ZlVHJpZ2dlcjogU0VMRUNUT1JfREFUQV9SRU1PVkUsXG4gIG1heGltaXplVHJpZ2dlcjogU0VMRUNUT1JfREFUQV9NQVhJTUlaRSxcbiAgY29sbGFwc2VJY29uOiAnZmEtbWludXMnLFxuICBleHBhbmRJY29uOiAnZmEtcGx1cycsXG4gIG1heGltaXplSWNvbjogJ2ZhLWV4cGFuZCcsXG4gIG1pbmltaXplSWNvbjogJ2ZhLWNvbXByZXNzJ1xufVxuXG5jbGFzcyBDYXJkV2lkZ2V0IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgc2V0dGluZ3MpIHtcbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuX3BhcmVudCA9IGVsZW1lbnQucGFyZW50cyhTRUxFQ1RPUl9DQVJEKS5maXJzdCgpXG5cbiAgICBpZiAoZWxlbWVudC5oYXNDbGFzcyhDTEFTU19OQU1FX0NBUkQpKSB7XG4gICAgICB0aGlzLl9wYXJlbnQgPSBlbGVtZW50XG4gICAgfVxuXG4gICAgdGhpcy5fc2V0dGluZ3MgPSAkLmV4dGVuZCh7fSwgRGVmYXVsdCwgc2V0dGluZ3MpXG4gIH1cblxuICBjb2xsYXBzZSgpIHtcbiAgICB0aGlzLl9wYXJlbnQuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKS5jaGlsZHJlbihgJHtTRUxFQ1RPUl9DQVJEX0JPRFl9LCAke1NFTEVDVE9SX0NBUkRfRk9PVEVSfWApXG4gICAgICAuc2xpZGVVcCh0aGlzLl9zZXR0aW5ncy5hbmltYXRpb25TcGVlZCwgKCkgPT4ge1xuICAgICAgICB0aGlzLl9wYXJlbnQuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9DT0xMQVBTRUQpLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfQ09MTEFQU0lORylcbiAgICAgIH0pXG5cbiAgICB0aGlzLl9wYXJlbnQuZmluZChgPiAke1NFTEVDVE9SX0NBUkRfSEVBREVSfSAke3RoaXMuX3NldHRpbmdzLmNvbGxhcHNlVHJpZ2dlcn0gLiR7dGhpcy5fc2V0dGluZ3MuY29sbGFwc2VJY29ufWApXG4gICAgICAuYWRkQ2xhc3ModGhpcy5fc2V0dGluZ3MuZXhwYW5kSWNvbilcbiAgICAgIC5yZW1vdmVDbGFzcyh0aGlzLl9zZXR0aW5ncy5jb2xsYXBzZUljb24pXG5cbiAgICB0aGlzLl9lbGVtZW50LnRyaWdnZXIoJC5FdmVudChFVkVOVF9DT0xMQVBTRUQpLCB0aGlzLl9wYXJlbnQpXG4gIH1cblxuICBleHBhbmQoKSB7XG4gICAgdGhpcy5fcGFyZW50LmFkZENsYXNzKENMQVNTX05BTUVfRVhQQU5ESU5HKS5jaGlsZHJlbihgJHtTRUxFQ1RPUl9DQVJEX0JPRFl9LCAke1NFTEVDVE9SX0NBUkRfRk9PVEVSfWApXG4gICAgICAuc2xpZGVEb3duKHRoaXMuX3NldHRpbmdzLmFuaW1hdGlvblNwZWVkLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX3BhcmVudC5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX0NPTExBUFNFRCkucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9FWFBBTkRJTkcpXG4gICAgICB9KVxuXG4gICAgdGhpcy5fcGFyZW50LmZpbmQoYD4gJHtTRUxFQ1RPUl9DQVJEX0hFQURFUn0gJHt0aGlzLl9zZXR0aW5ncy5jb2xsYXBzZVRyaWdnZXJ9IC4ke3RoaXMuX3NldHRpbmdzLmV4cGFuZEljb259YClcbiAgICAgIC5hZGRDbGFzcyh0aGlzLl9zZXR0aW5ncy5jb2xsYXBzZUljb24pXG4gICAgICAucmVtb3ZlQ2xhc3ModGhpcy5fc2V0dGluZ3MuZXhwYW5kSWNvbilcblxuICAgIHRoaXMuX2VsZW1lbnQudHJpZ2dlcigkLkV2ZW50KEVWRU5UX0VYUEFOREVEKSwgdGhpcy5fcGFyZW50KVxuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIHRoaXMuX3BhcmVudC5zbGlkZVVwKClcbiAgICB0aGlzLl9lbGVtZW50LnRyaWdnZXIoJC5FdmVudChFVkVOVF9SRU1PVkVEKSwgdGhpcy5fcGFyZW50KVxuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLl9wYXJlbnQuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9DT0xMQVBTRUQpKSB7XG4gICAgICB0aGlzLmV4cGFuZCgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNvbGxhcHNlKClcbiAgfVxuXG4gIG1heGltaXplKCkge1xuICAgIHRoaXMuX3BhcmVudC5maW5kKGAke3RoaXMuX3NldHRpbmdzLm1heGltaXplVHJpZ2dlcn0gLiR7dGhpcy5fc2V0dGluZ3MubWF4aW1pemVJY29ufWApXG4gICAgICAuYWRkQ2xhc3ModGhpcy5fc2V0dGluZ3MubWluaW1pemVJY29uKVxuICAgICAgLnJlbW92ZUNsYXNzKHRoaXMuX3NldHRpbmdzLm1heGltaXplSWNvbilcbiAgICB0aGlzLl9wYXJlbnQuY3NzKHtcbiAgICAgIGhlaWdodDogdGhpcy5fcGFyZW50LmhlaWdodCgpLFxuICAgICAgd2lkdGg6IHRoaXMuX3BhcmVudC53aWR0aCgpLFxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAuMTVzJ1xuICAgIH0pLmRlbGF5KDE1MCkucXVldWUoZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgJGVsZW1lbnQgPSAkKHRoaXMpXG5cbiAgICAgICRlbGVtZW50LmFkZENsYXNzKENMQVNTX05BTUVfTUFYSU1JWkVEKVxuICAgICAgJCgnaHRtbCcpLmFkZENsYXNzKENMQVNTX05BTUVfTUFYSU1JWkVEKVxuICAgICAgaWYgKCRlbGVtZW50Lmhhc0NsYXNzKENMQVNTX05BTUVfQ09MTEFQU0VEKSkge1xuICAgICAgICAkZWxlbWVudC5hZGRDbGFzcyhDTEFTU19OQU1FX1dBU19DT0xMQVBTRUQpXG4gICAgICB9XG5cbiAgICAgICRlbGVtZW50LmRlcXVldWUoKVxuICAgIH0pXG5cbiAgICB0aGlzLl9lbGVtZW50LnRyaWdnZXIoJC5FdmVudChFVkVOVF9NQVhJTUlaRUQpLCB0aGlzLl9wYXJlbnQpXG4gIH1cblxuICBtaW5pbWl6ZSgpIHtcbiAgICB0aGlzLl9wYXJlbnQuZmluZChgJHt0aGlzLl9zZXR0aW5ncy5tYXhpbWl6ZVRyaWdnZXJ9IC4ke3RoaXMuX3NldHRpbmdzLm1pbmltaXplSWNvbn1gKVxuICAgICAgLmFkZENsYXNzKHRoaXMuX3NldHRpbmdzLm1heGltaXplSWNvbilcbiAgICAgIC5yZW1vdmVDbGFzcyh0aGlzLl9zZXR0aW5ncy5taW5pbWl6ZUljb24pXG4gICAgdGhpcy5fcGFyZW50LmNzcygnY3NzVGV4dCcsIGBoZWlnaHQ6ICR7dGhpcy5fcGFyZW50WzBdLnN0eWxlLmhlaWdodH0gIWltcG9ydGFudDsgd2lkdGg6ICR7dGhpcy5fcGFyZW50WzBdLnN0eWxlLndpZHRofSAhaW1wb3J0YW50OyB0cmFuc2l0aW9uOiBhbGwgLjE1cztgXG4gICAgKS5kZWxheSgxMCkucXVldWUoZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgJGVsZW1lbnQgPSAkKHRoaXMpXG5cbiAgICAgICRlbGVtZW50LnJlbW92ZUNsYXNzKENMQVNTX05BTUVfTUFYSU1JWkVEKVxuICAgICAgJCgnaHRtbCcpLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfTUFYSU1JWkVEKVxuICAgICAgJGVsZW1lbnQuY3NzKHtcbiAgICAgICAgaGVpZ2h0OiAnaW5oZXJpdCcsXG4gICAgICAgIHdpZHRoOiAnaW5oZXJpdCdcbiAgICAgIH0pXG4gICAgICBpZiAoJGVsZW1lbnQuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9XQVNfQ09MTEFQU0VEKSkge1xuICAgICAgICAkZWxlbWVudC5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX1dBU19DT0xMQVBTRUQpXG4gICAgICB9XG5cbiAgICAgICRlbGVtZW50LmRlcXVldWUoKVxuICAgIH0pXG5cbiAgICB0aGlzLl9lbGVtZW50LnRyaWdnZXIoJC5FdmVudChFVkVOVF9NSU5JTUlaRUQpLCB0aGlzLl9wYXJlbnQpXG4gIH1cblxuICB0b2dnbGVNYXhpbWl6ZSgpIHtcbiAgICBpZiAodGhpcy5fcGFyZW50Lmhhc0NsYXNzKENMQVNTX05BTUVfTUFYSU1JWkVEKSkge1xuICAgICAgdGhpcy5taW5pbWl6ZSgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLm1heGltaXplKClcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfaW5pdChjYXJkKSB7XG4gICAgdGhpcy5fcGFyZW50ID0gY2FyZFxuXG4gICAgJCh0aGlzKS5maW5kKHRoaXMuX3NldHRpbmdzLmNvbGxhcHNlVHJpZ2dlcikuY2xpY2soKCkgPT4ge1xuICAgICAgdGhpcy50b2dnbGUoKVxuICAgIH0pXG5cbiAgICAkKHRoaXMpLmZpbmQodGhpcy5fc2V0dGluZ3MubWF4aW1pemVUcmlnZ2VyKS5jbGljaygoKSA9PiB7XG4gICAgICB0aGlzLnRvZ2dsZU1heGltaXplKClcbiAgICB9KVxuXG4gICAgJCh0aGlzKS5maW5kKHRoaXMuX3NldHRpbmdzLnJlbW92ZVRyaWdnZXIpLmNsaWNrKCgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlKClcbiAgICB9KVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgbGV0IGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXG4gICAgY29uc3QgX29wdGlvbnMgPSAkLmV4dGVuZCh7fSwgRGVmYXVsdCwgJCh0aGlzKS5kYXRhKCkpXG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIGRhdGEgPSBuZXcgQ2FyZFdpZGdldCgkKHRoaXMpLCBfb3B0aW9ucylcbiAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgdHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycgPyBkYXRhIDogY29uZmlnKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyAmJiBjb25maWcubWF0Y2goL2NvbGxhcHNlfGV4cGFuZHxyZW1vdmV8dG9nZ2xlfG1heGltaXplfG1pbmltaXplfHRvZ2dsZU1heGltaXplLykpIHtcbiAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0Jykge1xuICAgICAgZGF0YS5faW5pdCgkKHRoaXMpKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIERhdGEgQVBJXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgU0VMRUNUT1JfREFUQV9DT0xMQVBTRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGlmIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIENhcmRXaWRnZXQuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGhpcyksICd0b2dnbGUnKVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgU0VMRUNUT1JfREFUQV9SRU1PVkUsIGZ1bmN0aW9uIChldmVudCkge1xuICBpZiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBDYXJkV2lkZ2V0Ll9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRoaXMpLCAncmVtb3ZlJylcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsIFNFTEVDVE9SX0RBVEFfTUFYSU1JWkUsIGZ1bmN0aW9uIChldmVudCkge1xuICBpZiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBDYXJkV2lkZ2V0Ll9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRoaXMpLCAndG9nZ2xlTWF4aW1pemUnKVxufSlcblxuLyoqXG4gKiBqUXVlcnkgQVBJXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuJC5mbltOQU1FXSA9IENhcmRXaWRnZXQuX2pRdWVyeUludGVyZmFjZVxuJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IENhcmRXaWRnZXRcbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gQ2FyZFdpZGdldC5falF1ZXJ5SW50ZXJmYWNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRXaWRnZXRcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEFkbWluTFRFIENvbnRyb2xTaWRlYmFyLmpzXG4gKiBMaWNlbnNlIE1JVFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuY29uc3QgTkFNRSA9ICdDb250cm9sU2lkZWJhcidcbmNvbnN0IERBVEFfS0VZID0gJ2x0ZS5jb250cm9sc2lkZWJhcidcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG5cbmNvbnN0IEVWRU5UX0NPTExBUFNFRCA9IGBjb2xsYXBzZWQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9FWFBBTkRFRCA9IGBleHBhbmRlZCR7RVZFTlRfS0VZfWBcblxuY29uc3QgU0VMRUNUT1JfQ09OVFJPTF9TSURFQkFSID0gJy5jb250cm9sLXNpZGViYXInXG5jb25zdCBTRUxFQ1RPUl9DT05UUk9MX1NJREVCQVJfQ09OVEVOVCA9ICcuY29udHJvbC1zaWRlYmFyLWNvbnRlbnQnXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS13aWRnZXQ9XCJjb250cm9sLXNpZGViYXJcIl0nXG5jb25zdCBTRUxFQ1RPUl9IRUFERVIgPSAnLm1haW4taGVhZGVyJ1xuY29uc3QgU0VMRUNUT1JfRk9PVEVSID0gJy5tYWluLWZvb3RlcidcblxuY29uc3QgQ0xBU1NfTkFNRV9DT05UUk9MX1NJREVCQVJfQU5JTUFURSA9ICdjb250cm9sLXNpZGViYXItYW5pbWF0ZSdcbmNvbnN0IENMQVNTX05BTUVfQ09OVFJPTF9TSURFQkFSX09QRU4gPSAnY29udHJvbC1zaWRlYmFyLW9wZW4nXG5jb25zdCBDTEFTU19OQU1FX0NPTlRST0xfU0lERUJBUl9TTElERSA9ICdjb250cm9sLXNpZGViYXItc2xpZGUtb3BlbidcbmNvbnN0IENMQVNTX05BTUVfTEFZT1VUX0ZJWEVEID0gJ2xheW91dC1maXhlZCdcbmNvbnN0IENMQVNTX05BTUVfTkFWQkFSX0ZJWEVEID0gJ2xheW91dC1uYXZiYXItZml4ZWQnXG5jb25zdCBDTEFTU19OQU1FX05BVkJBUl9TTV9GSVhFRCA9ICdsYXlvdXQtc20tbmF2YmFyLWZpeGVkJ1xuY29uc3QgQ0xBU1NfTkFNRV9OQVZCQVJfTURfRklYRUQgPSAnbGF5b3V0LW1kLW5hdmJhci1maXhlZCdcbmNvbnN0IENMQVNTX05BTUVfTkFWQkFSX0xHX0ZJWEVEID0gJ2xheW91dC1sZy1uYXZiYXItZml4ZWQnXG5jb25zdCBDTEFTU19OQU1FX05BVkJBUl9YTF9GSVhFRCA9ICdsYXlvdXQteGwtbmF2YmFyLWZpeGVkJ1xuY29uc3QgQ0xBU1NfTkFNRV9GT09URVJfRklYRUQgPSAnbGF5b3V0LWZvb3Rlci1maXhlZCdcbmNvbnN0IENMQVNTX05BTUVfRk9PVEVSX1NNX0ZJWEVEID0gJ2xheW91dC1zbS1mb290ZXItZml4ZWQnXG5jb25zdCBDTEFTU19OQU1FX0ZPT1RFUl9NRF9GSVhFRCA9ICdsYXlvdXQtbWQtZm9vdGVyLWZpeGVkJ1xuY29uc3QgQ0xBU1NfTkFNRV9GT09URVJfTEdfRklYRUQgPSAnbGF5b3V0LWxnLWZvb3Rlci1maXhlZCdcbmNvbnN0IENMQVNTX05BTUVfRk9PVEVSX1hMX0ZJWEVEID0gJ2xheW91dC14bC1mb290ZXItZml4ZWQnXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGNvbnRyb2xzaWRlYmFyU2xpZGU6IHRydWUsXG4gIHNjcm9sbGJhclRoZW1lOiAnb3MtdGhlbWUtbGlnaHQnLFxuICBzY3JvbGxiYXJBdXRvSGlkZTogJ2wnXG59XG5cbi8qKlxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmNsYXNzIENvbnRyb2xTaWRlYmFyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWdcblxuICAgIHRoaXMuX2luaXQoKVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgY29sbGFwc2UoKSB7XG4gICAgY29uc3QgJGJvZHkgPSAkKCdib2R5JylcbiAgICBjb25zdCAkaHRtbCA9ICQoJ2h0bWwnKVxuXG4gICAgLy8gU2hvdyB0aGUgY29udHJvbCBzaWRlYmFyXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5jb250cm9sc2lkZWJhclNsaWRlKSB7XG4gICAgICAkaHRtbC5hZGRDbGFzcyhDTEFTU19OQU1FX0NPTlRST0xfU0lERUJBUl9BTklNQVRFKVxuICAgICAgJGJvZHkucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9DT05UUk9MX1NJREVCQVJfU0xJREUpLmRlbGF5KDMwMCkucXVldWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFNFTEVDVE9SX0NPTlRST0xfU0lERUJBUikuaGlkZSgpXG4gICAgICAgICRodG1sLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfQ09OVFJPTF9TSURFQkFSX0FOSU1BVEUpXG4gICAgICAgICQodGhpcykuZGVxdWV1ZSgpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICAkYm9keS5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX0NPTlRST0xfU0lERUJBUl9PUEVOKVxuICAgIH1cblxuICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcigkLkV2ZW50KEVWRU5UX0NPTExBUFNFRCkpXG4gIH1cblxuICBzaG93KCkge1xuICAgIGNvbnN0ICRib2R5ID0gJCgnYm9keScpXG4gICAgY29uc3QgJGh0bWwgPSAkKCdodG1sJylcblxuICAgIC8vIENvbGxhcHNlIHRoZSBjb250cm9sIHNpZGViYXJcbiAgICBpZiAodGhpcy5fY29uZmlnLmNvbnRyb2xzaWRlYmFyU2xpZGUpIHtcbiAgICAgICRodG1sLmFkZENsYXNzKENMQVNTX05BTUVfQ09OVFJPTF9TSURFQkFSX0FOSU1BVEUpXG4gICAgICAkKFNFTEVDVE9SX0NPTlRST0xfU0lERUJBUikuc2hvdygpLmRlbGF5KDEwKS5xdWV1ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICRib2R5LmFkZENsYXNzKENMQVNTX05BTUVfQ09OVFJPTF9TSURFQkFSX1NMSURFKS5kZWxheSgzMDApLnF1ZXVlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAkaHRtbC5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX0NPTlRST0xfU0lERUJBUl9BTklNQVRFKVxuICAgICAgICAgICQodGhpcykuZGVxdWV1ZSgpXG4gICAgICAgIH0pXG4gICAgICAgICQodGhpcykuZGVxdWV1ZSgpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICAkYm9keS5hZGRDbGFzcyhDTEFTU19OQU1FX0NPTlRST0xfU0lERUJBUl9PUEVOKVxuICAgIH1cblxuICAgIHRoaXMuX2ZpeEhlaWdodCgpXG4gICAgdGhpcy5fZml4U2Nyb2xsSGVpZ2h0KClcblxuICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcigkLkV2ZW50KEVWRU5UX0VYUEFOREVEKSlcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICBjb25zdCAkYm9keSA9ICQoJ2JvZHknKVxuICAgIGNvbnN0IHNob3VsZENsb3NlID0gJGJvZHkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9DT05UUk9MX1NJREVCQVJfT1BFTikgfHxcbiAgICAgICAgJGJvZHkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9DT05UUk9MX1NJREVCQVJfU0xJREUpXG5cbiAgICBpZiAoc2hvdWxkQ2xvc2UpIHtcbiAgICAgIC8vIENsb3NlIHRoZSBjb250cm9sIHNpZGViYXJcbiAgICAgIHRoaXMuY29sbGFwc2UoKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBPcGVuIHRoZSBjb250cm9sIHNpZGViYXJcbiAgICAgIHRoaXMuc2hvdygpXG4gICAgfVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9pbml0KCkge1xuICAgIHRoaXMuX2ZpeEhlaWdodCgpXG4gICAgdGhpcy5fZml4U2Nyb2xsSGVpZ2h0KClcblxuICAgICQod2luZG93KS5yZXNpemUoKCkgPT4ge1xuICAgICAgdGhpcy5fZml4SGVpZ2h0KClcbiAgICAgIHRoaXMuX2ZpeFNjcm9sbEhlaWdodCgpXG4gICAgfSlcblxuICAgICQod2luZG93KS5zY3JvbGwoKCkgPT4ge1xuICAgICAgY29uc3QgJGJvZHkgPSAkKCdib2R5JylcbiAgICAgIGNvbnN0IHNob3VsZEZpeEhlaWdodCA9ICRib2R5Lmhhc0NsYXNzKENMQVNTX05BTUVfQ09OVFJPTF9TSURFQkFSX09QRU4pIHx8XG4gICAgICAgICAgJGJvZHkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9DT05UUk9MX1NJREVCQVJfU0xJREUpXG5cbiAgICAgIGlmIChzaG91bGRGaXhIZWlnaHQpIHtcbiAgICAgICAgdGhpcy5fZml4U2Nyb2xsSGVpZ2h0KClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgX2ZpeFNjcm9sbEhlaWdodCgpIHtcbiAgICBjb25zdCAkYm9keSA9ICQoJ2JvZHknKVxuXG4gICAgaWYgKCEkYm9keS5oYXNDbGFzcyhDTEFTU19OQU1FX0xBWU9VVF9GSVhFRCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGhlaWdodHMgPSB7XG4gICAgICBzY3JvbGw6ICQoZG9jdW1lbnQpLmhlaWdodCgpLFxuICAgICAgd2luZG93OiAkKHdpbmRvdykuaGVpZ2h0KCksXG4gICAgICBoZWFkZXI6ICQoU0VMRUNUT1JfSEVBREVSKS5vdXRlckhlaWdodCgpLFxuICAgICAgZm9vdGVyOiAkKFNFTEVDVE9SX0ZPT1RFUikub3V0ZXJIZWlnaHQoKVxuICAgIH1cbiAgICBjb25zdCBwb3NpdGlvbnMgPSB7XG4gICAgICBib3R0b206IE1hdGguYWJzKChoZWlnaHRzLndpbmRvdyArICQod2luZG93KS5zY3JvbGxUb3AoKSkgLSBoZWlnaHRzLnNjcm9sbCksXG4gICAgICB0b3A6ICQod2luZG93KS5zY3JvbGxUb3AoKVxuICAgIH1cblxuICAgIGNvbnN0IG5hdmJhckZpeGVkID0gKFxuICAgICAgJGJvZHkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9OQVZCQVJfRklYRUQpIHx8XG4gICAgICAgICRib2R5Lmhhc0NsYXNzKENMQVNTX05BTUVfTkFWQkFSX1NNX0ZJWEVEKSB8fFxuICAgICAgICAkYm9keS5oYXNDbGFzcyhDTEFTU19OQU1FX05BVkJBUl9NRF9GSVhFRCkgfHxcbiAgICAgICAgJGJvZHkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9OQVZCQVJfTEdfRklYRUQpIHx8XG4gICAgICAgICRib2R5Lmhhc0NsYXNzKENMQVNTX05BTUVfTkFWQkFSX1hMX0ZJWEVEKVxuICAgICkgJiYgJChTRUxFQ1RPUl9IRUFERVIpLmNzcygncG9zaXRpb24nKSA9PT0gJ2ZpeGVkJ1xuXG4gICAgY29uc3QgZm9vdGVyRml4ZWQgPSAoXG4gICAgICAkYm9keS5oYXNDbGFzcyhDTEFTU19OQU1FX0ZPT1RFUl9GSVhFRCkgfHxcbiAgICAgICAgJGJvZHkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9GT09URVJfU01fRklYRUQpIHx8XG4gICAgICAgICRib2R5Lmhhc0NsYXNzKENMQVNTX05BTUVfRk9PVEVSX01EX0ZJWEVEKSB8fFxuICAgICAgICAkYm9keS5oYXNDbGFzcyhDTEFTU19OQU1FX0ZPT1RFUl9MR19GSVhFRCkgfHxcbiAgICAgICAgJGJvZHkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9GT09URVJfWExfRklYRUQpXG4gICAgKSAmJiAkKFNFTEVDVE9SX0ZPT1RFUikuY3NzKCdwb3NpdGlvbicpID09PSAnZml4ZWQnXG5cbiAgICBjb25zdCAkY29udHJvbFNpZGViYXIgPSAkKFNFTEVDVE9SX0NPTlRST0xfU0lERUJBUilcbiAgICBjb25zdCAkY29udHJvbHNpZGViYXJDb250ZW50ID0gJChgJHtTRUxFQ1RPUl9DT05UUk9MX1NJREVCQVJ9LCAke1NFTEVDVE9SX0NPTlRST0xfU0lERUJBUn0gJHtTRUxFQ1RPUl9DT05UUk9MX1NJREVCQVJfQ09OVEVOVH1gKVxuXG4gICAgaWYgKHBvc2l0aW9ucy50b3AgPT09IDAgJiYgcG9zaXRpb25zLmJvdHRvbSA9PT0gMCkge1xuICAgICAgJGNvbnRyb2xTaWRlYmFyLmNzcyh7XG4gICAgICAgIGJvdHRvbTogaGVpZ2h0cy5mb290ZXIsXG4gICAgICAgIHRvcDogaGVpZ2h0cy5oZWFkZXJcbiAgICAgIH0pXG4gICAgICAkY29udHJvbHNpZGViYXJDb250ZW50LmNzcygnaGVpZ2h0JywgaGVpZ2h0cy53aW5kb3cgLSAoaGVpZ2h0cy5oZWFkZXIgKyBoZWlnaHRzLmZvb3RlcikpXG4gICAgfSBlbHNlIGlmIChwb3NpdGlvbnMuYm90dG9tIDw9IGhlaWdodHMuZm9vdGVyKSB7XG4gICAgICBpZiAoZm9vdGVyRml4ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHRvcCA9IGhlaWdodHMuaGVhZGVyIC0gcG9zaXRpb25zLnRvcFxuICAgICAgICAkY29udHJvbFNpZGViYXIuY3NzKCdib3R0b20nLCBoZWlnaHRzLmZvb3RlciAtIHBvc2l0aW9ucy5ib3R0b20pLmNzcygndG9wJywgdG9wID49IDAgPyB0b3AgOiAwKVxuICAgICAgICAkY29udHJvbHNpZGViYXJDb250ZW50LmNzcygnaGVpZ2h0JywgaGVpZ2h0cy53aW5kb3cgLSAoaGVpZ2h0cy5mb290ZXIgLSBwb3NpdGlvbnMuYm90dG9tKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRjb250cm9sU2lkZWJhci5jc3MoJ2JvdHRvbScsIGhlaWdodHMuZm9vdGVyKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocG9zaXRpb25zLnRvcCA8PSBoZWlnaHRzLmhlYWRlcikge1xuICAgICAgaWYgKG5hdmJhckZpeGVkID09PSBmYWxzZSkge1xuICAgICAgICAkY29udHJvbFNpZGViYXIuY3NzKCd0b3AnLCBoZWlnaHRzLmhlYWRlciAtIHBvc2l0aW9ucy50b3ApXG4gICAgICAgICRjb250cm9sc2lkZWJhckNvbnRlbnQuY3NzKCdoZWlnaHQnLCBoZWlnaHRzLndpbmRvdyAtIChoZWlnaHRzLmhlYWRlciAtIHBvc2l0aW9ucy50b3ApKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGNvbnRyb2xTaWRlYmFyLmNzcygndG9wJywgaGVpZ2h0cy5oZWFkZXIpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChuYXZiYXJGaXhlZCA9PT0gZmFsc2UpIHtcbiAgICAgICRjb250cm9sU2lkZWJhci5jc3MoJ3RvcCcsIDApXG4gICAgICAkY29udHJvbHNpZGViYXJDb250ZW50LmNzcygnaGVpZ2h0JywgaGVpZ2h0cy53aW5kb3cpXG4gICAgfSBlbHNlIHtcbiAgICAgICRjb250cm9sU2lkZWJhci5jc3MoJ3RvcCcsIGhlaWdodHMuaGVhZGVyKVxuICAgIH1cbiAgfVxuXG4gIF9maXhIZWlnaHQoKSB7XG4gICAgY29uc3QgJGJvZHkgPSAkKCdib2R5JylcblxuICAgIGlmICghJGJvZHkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9MQVlPVVRfRklYRUQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBoZWlnaHRzID0ge1xuICAgICAgd2luZG93OiAkKHdpbmRvdykuaGVpZ2h0KCksXG4gICAgICBoZWFkZXI6ICQoU0VMRUNUT1JfSEVBREVSKS5vdXRlckhlaWdodCgpLFxuICAgICAgZm9vdGVyOiAkKFNFTEVDVE9SX0ZPT1RFUikub3V0ZXJIZWlnaHQoKVxuICAgIH1cblxuICAgIGxldCBzaWRlYmFySGVpZ2h0ID0gaGVpZ2h0cy53aW5kb3cgLSBoZWlnaHRzLmhlYWRlclxuXG4gICAgaWYgKFxuICAgICAgJGJvZHkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9GT09URVJfRklYRUQpIHx8XG4gICAgICAgICAgJGJvZHkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9GT09URVJfU01fRklYRUQpIHx8XG4gICAgICAgICAgJGJvZHkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9GT09URVJfTURfRklYRUQpIHx8XG4gICAgICAgICAgJGJvZHkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9GT09URVJfTEdfRklYRUQpIHx8XG4gICAgICAgICAgJGJvZHkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9GT09URVJfWExfRklYRUQpXG4gICAgKSB7XG4gICAgICBpZiAoJChTRUxFQ1RPUl9GT09URVIpLmNzcygncG9zaXRpb24nKSA9PT0gJ2ZpeGVkJykge1xuICAgICAgICBzaWRlYmFySGVpZ2h0ID0gaGVpZ2h0cy53aW5kb3cgLSBoZWlnaHRzLmhlYWRlciAtIGhlaWdodHMuZm9vdGVyXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgJGNvbnRyb2xTaWRlYmFyID0gJChgJHtTRUxFQ1RPUl9DT05UUk9MX1NJREVCQVJ9ICR7U0VMRUNUT1JfQ09OVFJPTF9TSURFQkFSX0NPTlRFTlR9YClcbiAgICAkY29udHJvbFNpZGViYXIuY3NzKCdoZWlnaHQnLCBzaWRlYmFySGVpZ2h0KVxuXG4gICAgaWYgKHR5cGVvZiAkLmZuLm92ZXJsYXlTY3JvbGxiYXJzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgJGNvbnRyb2xTaWRlYmFyLm92ZXJsYXlTY3JvbGxiYXJzKHtcbiAgICAgICAgY2xhc3NOYW1lOiB0aGlzLl9jb25maWcuc2Nyb2xsYmFyVGhlbWUsXG4gICAgICAgIHNpemVBdXRvQ2FwYWJsZTogdHJ1ZSxcbiAgICAgICAgc2Nyb2xsYmFyczoge1xuICAgICAgICAgIGF1dG9IaWRlOiB0aGlzLl9jb25maWcuc2Nyb2xsYmFyQXV0b0hpZGUsXG4gICAgICAgICAgY2xpY2tTY3JvbGxpbmc6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShvcGVyYXRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuICAgICAgY29uc3QgX29wdGlvbnMgPSAkLmV4dGVuZCh7fSwgRGVmYXVsdCwgJCh0aGlzKS5kYXRhKCkpXG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IENvbnRyb2xTaWRlYmFyKHRoaXMsIF9vcHRpb25zKVxuICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhW29wZXJhdGlvbl0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtvcGVyYXRpb259IGlzIG5vdCBhIGZ1bmN0aW9uYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtvcGVyYXRpb25dKClcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICpcbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gIENvbnRyb2xTaWRlYmFyLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRoaXMpLCAndG9nZ2xlJylcbn0pXG5cbi8qKlxuICogalF1ZXJ5IEFQSVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbiQuZm5bTkFNRV0gPSBDb250cm9sU2lkZWJhci5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gQ29udHJvbFNpZGViYXJcbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gQ29udHJvbFNpZGViYXIuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250cm9sU2lkZWJhclxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQWRtaW5MVEUgRGlyZWN0Q2hhdC5qc1xuICogTGljZW5zZSBNSVRcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG4vKipcbiAqIENvbnN0YW50c1xuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmNvbnN0IE5BTUUgPSAnRGlyZWN0Q2hhdCdcbmNvbnN0IERBVEFfS0VZID0gJ2x0ZS5kaXJlY3RjaGF0J1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV1cblxuY29uc3QgRVZFTlRfVE9HR0xFRCA9IGB0b2dnbGVkJHtFVkVOVF9LRVl9YFxuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS13aWRnZXQ9XCJjaGF0LXBhbmUtdG9nZ2xlXCJdJ1xuY29uc3QgU0VMRUNUT1JfRElSRUNUX0NIQVQgPSAnLmRpcmVjdC1jaGF0J1xuXG5jb25zdCBDTEFTU19OQU1FX0RJUkVDVF9DSEFUX09QRU4gPSAnZGlyZWN0LWNoYXQtY29udGFjdHMtb3BlbidcblxuLyoqXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuY2xhc3MgRGlyZWN0Q2hhdCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudFxuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgICQodGhpcy5fZWxlbWVudCkucGFyZW50cyhTRUxFQ1RPUl9ESVJFQ1RfQ0hBVCkuZmlyc3QoKS50b2dnbGVDbGFzcyhDTEFTU19OQU1FX0RJUkVDVF9DSEFUX09QRU4pXG4gICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKCQuRXZlbnQoRVZFTlRfVE9HR0xFRCkpXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBEaXJlY3RDaGF0KCQodGhpcykpXG4gICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKClcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICpcbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICBpZiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBEaXJlY3RDaGF0Ll9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRoaXMpLCAndG9nZ2xlJylcbn0pXG5cbi8qKlxuICogalF1ZXJ5IEFQSVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbiQuZm5bTkFNRV0gPSBEaXJlY3RDaGF0Ll9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBEaXJlY3RDaGF0XG4kLmZuW05BTUVdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIERpcmVjdENoYXQuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBEaXJlY3RDaGF0XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBBZG1pbkxURSBEcm9wZG93bi5qc1xuICogTGljZW5zZSBNSVRcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG4vKipcbiAqIENvbnN0YW50c1xuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmNvbnN0IE5BTUUgPSAnRHJvcGRvd24nXG5jb25zdCBEQVRBX0tFWSA9ICdsdGUuZHJvcGRvd24nXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG5cbmNvbnN0IFNFTEVDVE9SX05BVkJBUiA9ICcubmF2YmFyJ1xuY29uc3QgU0VMRUNUT1JfRFJPUERPV05fTUVOVSA9ICcuZHJvcGRvd24tbWVudSdcbmNvbnN0IFNFTEVDVE9SX0RST1BET1dOX01FTlVfQUNUSVZFID0gJy5kcm9wZG93bi1tZW51LnNob3cnXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUgPSAnW2RhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIl0nXG5cbmNvbnN0IENMQVNTX05BTUVfRFJPUERPV05fUklHSFQgPSAnZHJvcGRvd24tbWVudS1yaWdodCdcbmNvbnN0IENMQVNTX05BTUVfRFJPUERPV05fU1VCTUVOVSA9ICdkcm9wZG93bi1zdWJtZW51J1xuXG4vLyBUT0RPOiB0aGlzIGlzIHVudXNlZDsgc2hvdWxkIGJlIHJlbW92ZWQgYWxvbmcgd2l0aCB0aGUgZXh0ZW5kP1xuY29uc3QgRGVmYXVsdCA9IHtcbn1cblxuLyoqXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuY2xhc3MgRHJvcGRvd24ge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWdcbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudFxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgdG9nZ2xlU3VibWVudSgpIHtcbiAgICB0aGlzLl9lbGVtZW50LnNpYmxpbmdzKCkuc2hvdygpLnRvZ2dsZUNsYXNzKCdzaG93JylcblxuICAgIGlmICghdGhpcy5fZWxlbWVudC5uZXh0KCkuaGFzQ2xhc3MoJ3Nob3cnKSkge1xuICAgICAgdGhpcy5fZWxlbWVudC5wYXJlbnRzKFNFTEVDVE9SX0RST1BET1dOX01FTlUpLmZpcnN0KCkuZmluZCgnLnNob3cnKS5yZW1vdmVDbGFzcygnc2hvdycpLmhpZGUoKVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQucGFyZW50cygnbGkubmF2LWl0ZW0uZHJvcGRvd24uc2hvdycpLm9uKCdoaWRkZW4uYnMuZHJvcGRvd24nLCAoKSA9PiB7XG4gICAgICAkKCcuZHJvcGRvd24tc3VibWVudSAuc2hvdycpLnJlbW92ZUNsYXNzKCdzaG93JykuaGlkZSgpXG4gICAgfSlcbiAgfVxuXG4gIGZpeFBvc2l0aW9uKCkge1xuICAgIGNvbnN0ICRlbGVtZW50ID0gJChTRUxFQ1RPUl9EUk9QRE9XTl9NRU5VX0FDVElWRSlcblxuICAgIGlmICgkZWxlbWVudC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICgkZWxlbWVudC5oYXNDbGFzcyhDTEFTU19OQU1FX0RST1BET1dOX1JJR0hUKSkge1xuICAgICAgJGVsZW1lbnQuY3NzKHtcbiAgICAgICAgbGVmdDogJ2luaGVyaXQnLFxuICAgICAgICByaWdodDogMFxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgJGVsZW1lbnQuY3NzKHtcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgcmlnaHQ6ICdpbmhlcml0J1xuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBvZmZzZXQgPSAkZWxlbWVudC5vZmZzZXQoKVxuICAgIGNvbnN0IHdpZHRoID0gJGVsZW1lbnQud2lkdGgoKVxuICAgIGNvbnN0IHZpc2libGVQYXJ0ID0gJCh3aW5kb3cpLndpZHRoKCkgLSBvZmZzZXQubGVmdFxuXG4gICAgaWYgKG9mZnNldC5sZWZ0IDwgMCkge1xuICAgICAgJGVsZW1lbnQuY3NzKHtcbiAgICAgICAgbGVmdDogJ2luaGVyaXQnLFxuICAgICAgICByaWdodDogb2Zmc2V0LmxlZnQgLSA1XG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAodmlzaWJsZVBhcnQgPCB3aWR0aCkge1xuICAgICAgJGVsZW1lbnQuY3NzKHtcbiAgICAgICAgbGVmdDogJ2luaGVyaXQnLFxuICAgICAgICByaWdodDogMFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuICAgICAgY29uc3QgX2NvbmZpZyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCAkKHRoaXMpLmRhdGEoKSlcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgRHJvcGRvd24oJCh0aGlzKSwgX2NvbmZpZylcbiAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnID09PSAndG9nZ2xlU3VibWVudScgfHwgY29uZmlnID09PSAnZml4UG9zaXRpb24nKSB7XG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIERhdGEgQVBJXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuJChgJHtTRUxFQ1RPUl9EUk9QRE9XTl9NRU5VfSAke1NFTEVDVE9SX0RST1BET1dOX1RPR0dMRX1gKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuXG4gIERyb3Bkb3duLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRoaXMpLCAndG9nZ2xlU3VibWVudScpXG59KVxuXG4kKGAke1NFTEVDVE9SX05BVkJBUn0gJHtTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEV9YCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgaWYgKCQoZXZlbnQudGFyZ2V0KS5wYXJlbnQoKS5oYXNDbGFzcyhDTEFTU19OQU1FX0RST1BET1dOX1NVQk1FTlUpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBEcm9wZG93bi5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0aGlzKSwgJ2ZpeFBvc2l0aW9uJylcbiAgfSwgMSlcbn0pXG5cbi8qKlxuICogalF1ZXJ5IEFQSVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbiQuZm5bTkFNRV0gPSBEcm9wZG93bi5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gRHJvcGRvd25cbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gRHJvcGRvd24uX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93blxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQWRtaW5MVEUgRXhwYW5kYWJsZVRhYmxlLmpzXG4gKiBMaWNlbnNlIE1JVFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbi8qKlxuICAqIENvbnN0YW50c1xuICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgKi9cblxuY29uc3QgTkFNRSA9ICdFeHBhbmRhYmxlVGFibGUnXG5jb25zdCBEQVRBX0tFWSA9ICdsdGUuZXhwYW5kYWJsZVRhYmxlJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV1cblxuY29uc3QgRVZFTlRfRVhQQU5ERUQgPSBgZXhwYW5kZWQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DT0xMQVBTRUQgPSBgY29sbGFwc2VkJHtFVkVOVF9LRVl9YFxuXG5jb25zdCBTRUxFQ1RPUl9UQUJMRSA9ICcuZXhwYW5kYWJsZS10YWJsZSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLXdpZGdldD1cImV4cGFuZGFibGUtdGFibGVcIl0nXG5jb25zdCBTRUxFQ1RPUl9BUklBX0FUVFIgPSAnYXJpYS1leHBhbmRlZCdcblxuLyoqXG4gICogQ2xhc3MgRGVmaW5pdGlvblxuICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgKi9cbmNsYXNzIEV4cGFuZGFibGVUYWJsZSB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9uc1xuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG4gIH1cblxuICAvLyBQdWJsaWNcblxuICBpbml0KCkge1xuICAgICQoU0VMRUNUT1JfREFUQV9UT0dHTEUpLmVhY2goKF8sICRoZWFkZXIpID0+IHtcbiAgICAgIGNvbnN0ICR0eXBlID0gJCgkaGVhZGVyKS5hdHRyKFNFTEVDVE9SX0FSSUFfQVRUUilcbiAgICAgIGNvbnN0ICRib2R5ID0gJCgkaGVhZGVyKS5uZXh0KCkuY2hpbGRyZW4oKS5maXJzdCgpLmNoaWxkcmVuKClcbiAgICAgIGlmICgkdHlwZSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICRib2R5LnNob3coKVxuICAgICAgfSBlbHNlIGlmICgkdHlwZSA9PT0gJ2ZhbHNlJykge1xuICAgICAgICAkYm9keS5oaWRlKClcbiAgICAgICAgJGJvZHkucGFyZW50KCkucGFyZW50KCkuYWRkQ2xhc3MoJ2Qtbm9uZScpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHRvZ2dsZVJvdygpIHtcbiAgICBjb25zdCAkZWxlbWVudCA9IHRoaXMuX2VsZW1lbnRcbiAgICBjb25zdCB0aW1lID0gNTAwXG4gICAgY29uc3QgJHR5cGUgPSAkZWxlbWVudC5hdHRyKFNFTEVDVE9SX0FSSUFfQVRUUilcbiAgICBjb25zdCAkYm9keSA9ICRlbGVtZW50Lm5leHQoKS5jaGlsZHJlbigpLmZpcnN0KCkuY2hpbGRyZW4oKVxuXG4gICAgJGJvZHkuc3RvcCgpXG4gICAgaWYgKCR0eXBlID09PSAndHJ1ZScpIHtcbiAgICAgICRib2R5LnNsaWRlVXAodGltZSwgKCkgPT4ge1xuICAgICAgICAkZWxlbWVudC5uZXh0KCkuYWRkQ2xhc3MoJ2Qtbm9uZScpXG4gICAgICB9KVxuICAgICAgJGVsZW1lbnQuYXR0cihTRUxFQ1RPUl9BUklBX0FUVFIsICdmYWxzZScpXG4gICAgICAkZWxlbWVudC50cmlnZ2VyKCQuRXZlbnQoRVZFTlRfQ09MTEFQU0VEKSlcbiAgICB9IGVsc2UgaWYgKCR0eXBlID09PSAnZmFsc2UnKSB7XG4gICAgICAkZWxlbWVudC5uZXh0KCkucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpXG4gICAgICAkYm9keS5zbGlkZURvd24odGltZSlcbiAgICAgICRlbGVtZW50LmF0dHIoU0VMRUNUT1JfQVJJQV9BVFRSLCAndHJ1ZScpXG4gICAgICAkZWxlbWVudC50cmlnZ2VyKCQuRXZlbnQoRVZFTlRfRVhQQU5ERUQpKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKG9wZXJhdGlvbikge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IEV4cGFuZGFibGVUYWJsZSgkKHRoaXMpKVxuICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygb3BlcmF0aW9uID09PSAnc3RyaW5nJyAmJiBvcGVyYXRpb24ubWF0Y2goL2luaXR8dG9nZ2xlUm93LykpIHtcbiAgICAgICAgZGF0YVtvcGVyYXRpb25dKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICAqIERhdGEgQVBJXG4gICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAqL1xuJChTRUxFQ1RPUl9UQUJMRSkucmVhZHkoZnVuY3Rpb24gKCkge1xuICBFeHBhbmRhYmxlVGFibGUuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGhpcyksICdpbml0Jylcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoKSB7XG4gIEV4cGFuZGFibGVUYWJsZS5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0aGlzKSwgJ3RvZ2dsZVJvdycpXG59KVxuXG4vKipcbiAgKiBqUXVlcnkgQVBJXG4gICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAqL1xuXG4kLmZuW05BTUVdID0gRXhwYW5kYWJsZVRhYmxlLl9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBFeHBhbmRhYmxlVGFibGVcbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gRXhwYW5kYWJsZVRhYmxlLl9qUXVlcnlJbnRlcmZhY2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXhwYW5kYWJsZVRhYmxlXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBBZG1pbkxURSBGdWxsc2NyZWVuLmpzXG4gKiBMaWNlbnNlIE1JVFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuY29uc3QgTkFNRSA9ICdGdWxsc2NyZWVuJ1xuY29uc3QgREFUQV9LRVkgPSAnbHRlLmZ1bGxzY3JlZW4nXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG5cbmNvbnN0IFNFTEVDVE9SX0RBVEFfV0lER0VUID0gJ1tkYXRhLXdpZGdldD1cImZ1bGxzY3JlZW5cIl0nXG5jb25zdCBTRUxFQ1RPUl9JQ09OID0gYCR7U0VMRUNUT1JfREFUQV9XSURHRVR9IGlgXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIG1pbmltaXplSWNvbjogJ2ZhLWNvbXByZXNzLWFycm93cy1hbHQnLFxuICBtYXhpbWl6ZUljb246ICdmYS1leHBhbmQtYXJyb3dzLWFsdCdcbn1cblxuLyoqXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuY2xhc3MgRnVsbHNjcmVlbiB7XG4gIGNvbnN0cnVjdG9yKF9lbGVtZW50LCBfb3B0aW9ucykge1xuICAgIHRoaXMuZWxlbWVudCA9IF9lbGVtZW50XG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIERlZmF1bHQsIF9vcHRpb25zKVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmIChkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCB8fFxuICAgICAgZG9jdW1lbnQubW96RnVsbFNjcmVlbkVsZW1lbnQgfHxcbiAgICAgIGRvY3VtZW50LndlYmtpdEZ1bGxzY3JlZW5FbGVtZW50IHx8XG4gICAgICBkb2N1bWVudC5tc0Z1bGxzY3JlZW5FbGVtZW50KSB7XG4gICAgICB0aGlzLndpbmRvd2VkKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mdWxsc2NyZWVuKClcbiAgICB9XG4gIH1cblxuICBmdWxsc2NyZWVuKCkge1xuICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZXF1ZXN0RnVsbHNjcmVlbigpXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubXNSZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm1zUmVxdWVzdEZ1bGxzY3JlZW4oKVxuICAgIH1cblxuICAgICQoU0VMRUNUT1JfSUNPTikucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLm1heGltaXplSWNvbikuYWRkQ2xhc3ModGhpcy5vcHRpb25zLm1pbmltaXplSWNvbilcbiAgfVxuXG4gIHdpbmRvd2VkKCkge1xuICAgIGlmIChkb2N1bWVudC5leGl0RnVsbHNjcmVlbikge1xuICAgICAgZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKVxuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4pIHtcbiAgICAgIGRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuKClcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50Lm1zRXhpdEZ1bGxzY3JlZW4pIHtcbiAgICAgIGRvY3VtZW50Lm1zRXhpdEZ1bGxzY3JlZW4oKVxuICAgIH1cblxuICAgICQoU0VMRUNUT1JfSUNPTikucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLm1pbmltaXplSWNvbikuYWRkQ2xhc3ModGhpcy5vcHRpb25zLm1heGltaXplSWNvbilcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIGxldCBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICBkYXRhID0gJCh0aGlzKS5kYXRhKClcbiAgICB9XG5cbiAgICBjb25zdCBfb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IGRhdGEpXG4gICAgY29uc3QgcGx1Z2luID0gbmV3IEZ1bGxzY3JlZW4oJCh0aGlzKSwgX29wdGlvbnMpXG5cbiAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDogZGF0YSlcblxuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyAmJiBjb25maWcubWF0Y2goL3RvZ2dsZXxmdWxsc2NyZWVufHdpbmRvd2VkLykpIHtcbiAgICAgIHBsdWdpbltjb25maWddKClcbiAgICB9IGVsc2Uge1xuICAgICAgcGx1Z2luLmluaXQoKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAgKiBEYXRhIEFQSVxuICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgKi9cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsIFNFTEVDVE9SX0RBVEFfV0lER0VULCBmdW5jdGlvbiAoKSB7XG4gIEZ1bGxzY3JlZW4uX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGhpcyksICd0b2dnbGUnKVxufSlcblxuLyoqXG4gKiBqUXVlcnkgQVBJXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuJC5mbltOQU1FXSA9IEZ1bGxzY3JlZW4uX2pRdWVyeUludGVyZmFjZVxuJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IEZ1bGxzY3JlZW5cbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gRnVsbHNjcmVlbi5falF1ZXJ5SW50ZXJmYWNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZ1bGxzY3JlZW5cbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEFkbWluTFRFIElGcmFtZS5qc1xuICogTGljZW5zZSBNSVRcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG4vKipcbiAqIENvbnN0YW50c1xuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmNvbnN0IE5BTUUgPSAnSUZyYW1lJ1xuY29uc3QgREFUQV9LRVkgPSAnbHRlLmlmcmFtZSdcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV1cblxuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtd2lkZ2V0PVwiaWZyYW1lXCJdJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEVfQ0xPU0UgPSAnW2RhdGEtd2lkZ2V0PVwiaWZyYW1lLWNsb3NlXCJdJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEVfU0NST0xMX0xFRlQgPSAnW2RhdGEtd2lkZ2V0PVwiaWZyYW1lLXNjcm9sbGxlZnRcIl0nXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRV9TQ1JPTExfUklHSFQgPSAnW2RhdGEtd2lkZ2V0PVwiaWZyYW1lLXNjcm9sbHJpZ2h0XCJdJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEVfRlVMTFNDUkVFTiA9ICdbZGF0YS13aWRnZXQ9XCJpZnJhbWUtZnVsbHNjcmVlblwiXSdcbmNvbnN0IFNFTEVDVE9SX0NPTlRFTlRfV1JBUFBFUiA9ICcuY29udGVudC13cmFwcGVyJ1xuY29uc3QgU0VMRUNUT1JfQ09OVEVOVF9JRlJBTUUgPSBgJHtTRUxFQ1RPUl9DT05URU5UX1dSQVBQRVJ9IGlmcmFtZWBcbmNvbnN0IFNFTEVDVE9SX1RBQl9OQVYgPSBgJHtTRUxFQ1RPUl9EQVRBX1RPR0dMRX0uaWZyYW1lLW1vZGUgLm5hdmBcbmNvbnN0IFNFTEVDVE9SX1RBQl9OQVZCQVJfTkFWID0gYCR7U0VMRUNUT1JfREFUQV9UT0dHTEV9LmlmcmFtZS1tb2RlIC5uYXZiYXItbmF2YFxuY29uc3QgU0VMRUNUT1JfVEFCX05BVkJBUl9OQVZfSVRFTSA9IGAke1NFTEVDVE9SX1RBQl9OQVZCQVJfTkFWfSAubmF2LWl0ZW1gXG5jb25zdCBTRUxFQ1RPUl9UQUJfQ09OVEVOVCA9IGAke1NFTEVDVE9SX0RBVEFfVE9HR0xFfS5pZnJhbWUtbW9kZSAudGFiLWNvbnRlbnRgXG5jb25zdCBTRUxFQ1RPUl9UQUJfRU1QVFkgPSBgJHtTRUxFQ1RPUl9UQUJfQ09OVEVOVH0gLnRhYi1lbXB0eWBcbmNvbnN0IFNFTEVDVE9SX1RBQl9MT0FESU5HID0gYCR7U0VMRUNUT1JfVEFCX0NPTlRFTlR9IC50YWItbG9hZGluZ2BcbmNvbnN0IFNFTEVDVE9SX1NJREVCQVJfTUVOVV9JVEVNID0gJy5tYWluLXNpZGViYXIgLm5hdi1pdGVtID4gYS5uYXYtbGluaydcbmNvbnN0IFNFTEVDVE9SX0hFQURFUl9NRU5VX0lURU0gPSAnLm1haW4taGVhZGVyIC5uYXYtaXRlbSBhLm5hdi1saW5rJ1xuY29uc3QgU0VMRUNUT1JfSEVBREVSX0RST1BET1dOX0lURU0gPSAnLm1haW4taGVhZGVyIGEuZHJvcGRvd24taXRlbSdcbmNvbnN0IENMQVNTX05BTUVfSUZSQU1FX01PREUgPSAnaWZyYW1lLW1vZGUnXG5jb25zdCBDTEFTU19OQU1FX0ZVTExTQ1JFRU5fTU9ERSA9ICdpZnJhbWUtbW9kZS1mdWxsc2NyZWVuJ1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBvblRhYkNsaWNrKGl0ZW0pIHtcbiAgICByZXR1cm4gaXRlbVxuICB9LFxuICBvblRhYkNoYW5nZWQoaXRlbSkge1xuICAgIHJldHVybiBpdGVtXG4gIH0sXG4gIG9uVGFiQ3JlYXRlZChpdGVtKSB7XG4gICAgcmV0dXJuIGl0ZW1cbiAgfSxcbiAgYXV0b0lmcmFtZU1vZGU6IHRydWUsXG4gIGF1dG9JdGVtQWN0aXZlOiB0cnVlLFxuICBhdXRvU2hvd05ld1RhYjogdHJ1ZSxcbiAgbG9hZGluZ1NjcmVlbjogdHJ1ZSxcbiAgdXNlTmF2YmFySXRlbXM6IHRydWUsXG4gIHNjcm9sbE9mZnNldDogNDAsXG4gIHNjcm9sbEJlaGF2aW9yU3dhcDogZmFsc2UsXG4gIGljb25NYXhpbWl6ZTogJ2ZhLWV4cGFuZCcsXG4gIGljb25NaW5pbWl6ZTogJ2ZhLWNvbXByZXNzJ1xufVxuXG4vKipcbiAqIENsYXNzIERlZmluaXRpb25cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5jbGFzcyBJRnJhbWUge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWdcbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudFxuXG4gICAgdGhpcy5faW5pdCgpXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICBvblRhYkNsaWNrKGl0ZW0pIHtcbiAgICB0aGlzLl9jb25maWcub25UYWJDbGljayhpdGVtKVxuICB9XG5cbiAgb25UYWJDaGFuZ2VkKGl0ZW0pIHtcbiAgICB0aGlzLl9jb25maWcub25UYWJDaGFuZ2VkKGl0ZW0pXG4gIH1cblxuICBvblRhYkNyZWF0ZWQoaXRlbSkge1xuICAgIHRoaXMuX2NvbmZpZy5vblRhYkNyZWF0ZWQoaXRlbSlcbiAgfVxuXG4gIGNyZWF0ZVRhYih0aXRsZSwgbGluaywgdW5pcXVlTmFtZSwgYXV0b09wZW4pIHtcbiAgICBjb25zdCB0YWJJZCA9IGBwYW5lbC0ke3VuaXF1ZU5hbWV9LSR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCl9YFxuICAgIGNvbnN0IG5hdklkID0gYHRhYi0ke3VuaXF1ZU5hbWV9LSR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCl9YFxuXG4gICAgY29uc3QgbmV3TmF2SXRlbSA9IGA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj48YSBjbGFzcz1cIm5hdi1saW5rXCIgZGF0YS10b2dnbGU9XCJyb3dcIiBpZD1cIiR7bmF2SWR9XCIgaHJlZj1cIiMke3RhYklkfVwiIHJvbGU9XCJ0YWJcIiBhcmlhLWNvbnRyb2xzPVwiJHt0YWJJZH1cIiBhcmlhLXNlbGVjdGVkPVwiZmFsc2VcIj4ke3RpdGxlfTwvYT48L2xpPmBcbiAgICAkKFNFTEVDVE9SX1RBQl9OQVZCQVJfTkFWKS5hcHBlbmQobmV3TmF2SXRlbSlcblxuICAgIGNvbnN0IG5ld1RhYkl0ZW0gPSBgPGRpdiBjbGFzcz1cInRhYi1wYW5lIGZhZGVcIiBpZD1cIiR7dGFiSWR9XCIgcm9sZT1cInRhYnBhbmVsXCIgYXJpYS1sYWJlbGxlZGJ5PVwiJHtuYXZJZH1cIj48aWZyYW1lIHNyYz1cIiR7bGlua31cIj48L2lmcmFtZT48L2Rpdj5gXG4gICAgJChTRUxFQ1RPUl9UQUJfQ09OVEVOVCkuYXBwZW5kKG5ld1RhYkl0ZW0pXG5cbiAgICBpZiAoYXV0b09wZW4pIHtcbiAgICAgIGlmICh0aGlzLl9jb25maWcubG9hZGluZ1NjcmVlbikge1xuICAgICAgICBjb25zdCAkbG9hZGluZ1NjcmVlbiA9ICQoU0VMRUNUT1JfVEFCX0xPQURJTkcpXG4gICAgICAgICRsb2FkaW5nU2NyZWVuLmZhZGVJbigpXG4gICAgICAgICQoYCR7dGFiSWR9IGlmcmFtZWApLnJlYWR5KCgpID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2NvbmZpZy5sb2FkaW5nU2NyZWVuID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhpcy5zd2l0Y2hUYWIoYCMke25hdklkfWAsIHRoaXMuX2NvbmZpZy5sb2FkaW5nU2NyZWVuKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICRsb2FkaW5nU2NyZWVuLmZhZGVPdXQoKVxuICAgICAgICAgICAgfSwgdGhpcy5fY29uZmlnLmxvYWRpbmdTY3JlZW4pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3dpdGNoVGFiKGAjJHtuYXZJZH1gLCB0aGlzLl9jb25maWcubG9hZGluZ1NjcmVlbilcbiAgICAgICAgICAgICRsb2FkaW5nU2NyZWVuLmZhZGVPdXQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3dpdGNoVGFiKGAjJHtuYXZJZH1gKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMub25UYWJDcmVhdGVkKCQoYCMke25hdklkfWApKVxuICB9XG5cbiAgb3BlblRhYlNpZGViYXIoaXRlbSwgYXV0b09wZW4gPSB0aGlzLl9jb25maWcuYXV0b1Nob3dOZXdUYWIpIHtcbiAgICBsZXQgJGl0ZW0gPSAkKGl0ZW0pLmNsb25lKClcbiAgICBpZiAoJGl0ZW0uYXR0cignaHJlZicpID09PSB1bmRlZmluZWQpIHtcbiAgICAgICRpdGVtID0gJChpdGVtKS5wYXJlbnQoJ2EnKS5jbG9uZSgpXG4gICAgfVxuXG4gICAgJGl0ZW0uZmluZCgnLnJpZ2h0JykucmVtb3ZlKClcbiAgICBsZXQgdGl0bGUgPSAkaXRlbS5maW5kKCdwJykudGV4dCgpXG4gICAgaWYgKHRpdGxlID09PSAnJykge1xuICAgICAgdGl0bGUgPSAkaXRlbS50ZXh0KClcbiAgICB9XG5cbiAgICBjb25zdCBsaW5rID0gJGl0ZW0uYXR0cignaHJlZicpXG4gICAgaWYgKGxpbmsgPT09ICcjJyB8fCBsaW5rID09PSAnJyB8fCBsaW5rID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY3JlYXRlVGFiKHRpdGxlLCBsaW5rLCBsaW5rLnJlcGxhY2UoJy5odG1sJywgJycpLnJlcGxhY2UoJy4vJywgJycpLnJlcGxhY2VBbGwoJy8nLCAnLScpLCBhdXRvT3BlbilcbiAgfVxuXG4gIHN3aXRjaFRhYihpdGVtKSB7XG4gICAgY29uc3QgJGl0ZW0gPSAkKGl0ZW0pXG4gICAgY29uc3QgdGFiSWQgPSAkaXRlbS5hdHRyKCdocmVmJylcblxuICAgICQoU0VMRUNUT1JfVEFCX0VNUFRZKS5oaWRlKClcbiAgICAkKGAke1NFTEVDVE9SX1RBQl9OQVZCQVJfTkFWfSAuYWN0aXZlYCkudGFiKCdkaXNwb3NlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgdGhpcy5fZml4SGVpZ2h0KClcblxuICAgICRpdGVtLnRhYignc2hvdycpXG4gICAgJGl0ZW0ucGFyZW50cygnbGknKS5hZGRDbGFzcygnYWN0aXZlJylcbiAgICB0aGlzLm9uVGFiQ2hhbmdlZCgkaXRlbSlcblxuICAgIGlmICh0aGlzLl9jb25maWcuYXV0b0l0ZW1BY3RpdmUpIHtcbiAgICAgIHRoaXMuX3NldEl0ZW1BY3RpdmUoJChgJHt0YWJJZH0gaWZyYW1lYCkuYXR0cignc3JjJykpXG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlQWN0aXZlVGFiKCkge1xuICAgIGNvbnN0ICRuYXZJdGVtID0gJChgJHtTRUxFQ1RPUl9UQUJfTkFWQkFSX05BVl9JVEVNfS5hY3RpdmVgKVxuICAgIGNvbnN0ICRuYXZJdGVtUGFyZW50ID0gJG5hdkl0ZW0ucGFyZW50KClcbiAgICBjb25zdCBuYXZJdGVtSW5kZXggPSAkbmF2SXRlbS5pbmRleCgpXG4gICAgJG5hdkl0ZW0ucmVtb3ZlKClcbiAgICAkKCcudGFiLXBhbmUuYWN0aXZlJykucmVtb3ZlKClcblxuICAgIGlmICgkKFNFTEVDVE9SX1RBQl9DT05URU5UKS5jaGlsZHJlbigpLmxlbmd0aCA9PSAkKGAke1NFTEVDVE9SX1RBQl9FTVBUWX0sICR7U0VMRUNUT1JfVEFCX0xPQURJTkd9YCkubGVuZ3RoKSB7XG4gICAgICAkKFNFTEVDVE9SX1RBQl9FTVBUWSkuc2hvdygpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByZXZOYXZJdGVtSW5kZXggPSBuYXZJdGVtSW5kZXggLSAxXG4gICAgICB0aGlzLnN3aXRjaFRhYigkbmF2SXRlbVBhcmVudC5jaGlsZHJlbigpLmVxKHByZXZOYXZJdGVtSW5kZXgpLmZpbmQoJ2EnKSlcbiAgICB9XG4gIH1cblxuICB0b2dnbGVGdWxsc2NyZWVuKCkge1xuICAgIGlmICgkKCdib2R5JykuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9GVUxMU0NSRUVOX01PREUpKSB7XG4gICAgICAkKGAke1NFTEVDVE9SX0RBVEFfVE9HR0xFX0ZVTExTQ1JFRU59IGlgKS5yZW1vdmVDbGFzcyh0aGlzLl9jb25maWcuaWNvbk1pbmltaXplKS5hZGRDbGFzcyh0aGlzLl9jb25maWcuaWNvbk1heGltaXplKVxuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfRlVMTFNDUkVFTl9NT0RFKVxuICAgICAgJChgJHtTRUxFQ1RPUl9UQUJfRU1QVFl9LCAke1NFTEVDVE9SX1RBQl9MT0FESU5HfWApLmhlaWdodCgnYXV0bycpXG4gICAgICAkKFNFTEVDVE9SX0NPTlRFTlRfV1JBUFBFUikuaGVpZ2h0KCdhdXRvJylcbiAgICAgICQoU0VMRUNUT1JfQ09OVEVOVF9JRlJBTUUpLmhlaWdodCgnYXV0bycpXG4gICAgfSBlbHNlIHtcbiAgICAgICQoYCR7U0VMRUNUT1JfREFUQV9UT0dHTEVfRlVMTFNDUkVFTn0gaWApLnJlbW92ZUNsYXNzKHRoaXMuX2NvbmZpZy5pY29uTWF4aW1pemUpLmFkZENsYXNzKHRoaXMuX2NvbmZpZy5pY29uTWluaW1pemUpXG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9GVUxMU0NSRUVOX01PREUpXG4gICAgfVxuXG4gICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3Jlc2l6ZScpXG4gICAgdGhpcy5fZml4SGVpZ2h0KHRydWUpXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2luaXQoKSB7XG4gICAgaWYgKHdpbmRvdy5mcmFtZUVsZW1lbnQgJiYgdGhpcy5fY29uZmlnLmF1dG9JZnJhbWVNb2RlKSB7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9JRlJBTUVfTU9ERSlcbiAgICB9IGVsc2UgaWYgKCQoU0VMRUNUT1JfQ09OVEVOVF9XUkFQUEVSKS5oYXNDbGFzcyhDTEFTU19OQU1FX0lGUkFNRV9NT0RFKSkge1xuICAgICAgdGhpcy5fc2V0dXBMaXN0ZW5lcnMoKVxuICAgICAgdGhpcy5fZml4SGVpZ2h0KHRydWUpXG4gICAgfVxuICB9XG5cbiAgX25hdlNjcm9sbChvZmZzZXQpIHtcbiAgICBjb25zdCBsZWZ0UG9zID0gJChTRUxFQ1RPUl9UQUJfTkFWQkFSX05BVikuc2Nyb2xsTGVmdCgpXG4gICAgJChTRUxFQ1RPUl9UQUJfTkFWQkFSX05BVikuYW5pbWF0ZSh7IHNjcm9sbExlZnQ6IChsZWZ0UG9zICsgb2Zmc2V0KSB9LCAyNTAsICdsaW5lYXInKVxuICB9XG5cbiAgX3NldHVwTGlzdGVuZXJzKCkge1xuICAgICQod2luZG93KS5vbigncmVzaXplJywgKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX2ZpeEhlaWdodCgpXG4gICAgICB9LCAxKVxuICAgIH0pXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgU0VMRUNUT1JfU0lERUJBUl9NRU5VX0lURU0sIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB0aGlzLm9wZW5UYWJTaWRlYmFyKGUudGFyZ2V0KVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnVzZU5hdmJhckl0ZW1zKSB7XG4gICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBgJHtTRUxFQ1RPUl9IRUFERVJfTUVOVV9JVEVNfSwgJHtTRUxFQ1RPUl9IRUFERVJfRFJPUERPV05fSVRFTX1gLCBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHRoaXMub3BlblRhYlNpZGViYXIoZS50YXJnZXQpXG4gICAgICB9KVxuICAgIH1cblxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIFNFTEVDVE9SX1RBQl9OQVZCQVJfTkFWX0lURU0sIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB0aGlzLm9uVGFiQ2xpY2soZS50YXJnZXQpXG4gICAgICB0aGlzLnN3aXRjaFRhYihlLnRhcmdldClcbiAgICB9KVxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIFNFTEVDVE9SX0RBVEFfVE9HR0xFX0NMT1NFLCBlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgdGhpcy5yZW1vdmVBY3RpdmVUYWIoKVxuICAgIH0pXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgU0VMRUNUT1JfREFUQV9UT0dHTEVfRlVMTFNDUkVFTiwgZSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIHRoaXMudG9nZ2xlRnVsbHNjcmVlbigpXG4gICAgfSlcbiAgICBsZXQgbW91c2Vkb3duID0gZmFsc2VcbiAgICBsZXQgbW91c2Vkb3duSW50ZXJ2YWwgPSBudWxsXG4gICAgJChkb2N1bWVudCkub24oJ21vdXNlZG93bicsIFNFTEVDVE9SX0RBVEFfVE9HR0xFX1NDUk9MTF9MRUZULCBlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgY2xlYXJJbnRlcnZhbChtb3VzZWRvd25JbnRlcnZhbClcblxuICAgICAgbGV0IHsgc2Nyb2xsT2Zmc2V0IH0gPSB0aGlzLl9jb25maWdcblxuICAgICAgaWYgKCF0aGlzLl9jb25maWcuc2Nyb2xsQmVoYXZpb3JTd2FwKSB7XG4gICAgICAgIHNjcm9sbE9mZnNldCA9IC1zY3JvbGxPZmZzZXRcbiAgICAgIH1cblxuICAgICAgbW91c2Vkb3duID0gdHJ1ZVxuICAgICAgdGhpcy5fbmF2U2Nyb2xsKHNjcm9sbE9mZnNldClcblxuICAgICAgbW91c2Vkb3duSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX25hdlNjcm9sbChzY3JvbGxPZmZzZXQpXG4gICAgICB9LCAyNTApXG4gICAgfSlcbiAgICAkKGRvY3VtZW50KS5vbignbW91c2Vkb3duJywgU0VMRUNUT1JfREFUQV9UT0dHTEVfU0NST0xMX1JJR0hULCBlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgY2xlYXJJbnRlcnZhbChtb3VzZWRvd25JbnRlcnZhbClcblxuICAgICAgbGV0IHsgc2Nyb2xsT2Zmc2V0IH0gPSB0aGlzLl9jb25maWdcblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5zY3JvbGxCZWhhdmlvclN3YXApIHtcbiAgICAgICAgc2Nyb2xsT2Zmc2V0ID0gLXNjcm9sbE9mZnNldFxuICAgICAgfVxuXG4gICAgICBtb3VzZWRvd24gPSB0cnVlXG4gICAgICB0aGlzLl9uYXZTY3JvbGwoc2Nyb2xsT2Zmc2V0KVxuXG4gICAgICBtb3VzZWRvd25JbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgdGhpcy5fbmF2U2Nyb2xsKHNjcm9sbE9mZnNldClcbiAgICAgIH0sIDI1MClcbiAgICB9KVxuICAgICQoZG9jdW1lbnQpLm9uKCdtb3VzZXVwJywgKCkgPT4ge1xuICAgICAgaWYgKG1vdXNlZG93bikge1xuICAgICAgICBtb3VzZWRvd24gPSBmYWxzZVxuICAgICAgICBjbGVhckludGVydmFsKG1vdXNlZG93bkludGVydmFsKVxuICAgICAgICBtb3VzZWRvd25JbnRlcnZhbCA9IG51bGxcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgX3NldEl0ZW1BY3RpdmUoaHJlZikge1xuICAgICQoYCR7U0VMRUNUT1JfU0lERUJBUl9NRU5VX0lURU19LCAke1NFTEVDVE9SX0hFQURFUl9EUk9QRE9XTl9JVEVNfWApLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICQoU0VMRUNUT1JfSEVBREVSX01FTlVfSVRFTSkucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG5cbiAgICBjb25zdCAkaGVhZGVyTWVudUl0ZW0gPSAkKGAke1NFTEVDVE9SX0hFQURFUl9NRU5VX0lURU19W2hyZWYkPVwiJHtocmVmfVwiXWApXG4gICAgY29uc3QgJGhlYWRlckRyb3Bkb3duSXRlbSA9ICQoYCR7U0VMRUNUT1JfSEVBREVSX0RST1BET1dOX0lURU19W2hyZWYkPVwiJHtocmVmfVwiXWApXG4gICAgY29uc3QgJHNpZGViYXJNZW51SXRlbSA9ICQoYCR7U0VMRUNUT1JfU0lERUJBUl9NRU5VX0lURU19W2hyZWYkPVwiJHtocmVmfVwiXWApXG5cbiAgICAkaGVhZGVyTWVudUl0ZW0uZWFjaCgoaSwgZSkgPT4ge1xuICAgICAgJChlKS5wYXJlbnQoKS5hZGRDbGFzcygnYWN0aXZlJylcbiAgICB9KVxuICAgICRoZWFkZXJEcm9wZG93bkl0ZW0uZWFjaCgoaSwgZSkgPT4ge1xuICAgICAgJChlKS5hZGRDbGFzcygnYWN0aXZlJylcbiAgICB9KVxuICAgICRzaWRlYmFyTWVudUl0ZW0uZWFjaCgoaSwgZSkgPT4ge1xuICAgICAgJChlKS5hZGRDbGFzcygnYWN0aXZlJylcbiAgICAgICQoZSkucGFyZW50cygnLm5hdi10cmVldmlldycpLnByZXZBbGwoJy5uYXYtbGluaycpLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgIH0pXG4gIH1cblxuICBfZml4SGVpZ2h0KHRhYkVtcHR5ID0gZmFsc2UpIHtcbiAgICBpZiAoJCgnYm9keScpLmhhc0NsYXNzKENMQVNTX05BTUVfRlVMTFNDUkVFTl9NT0RFKSkge1xuICAgICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpXG4gICAgICAkKGAke1NFTEVDVE9SX1RBQl9FTVBUWX0sICR7U0VMRUNUT1JfVEFCX0xPQURJTkd9YCkuaGVpZ2h0KHdpbmRvd0hlaWdodClcbiAgICAgICQoU0VMRUNUT1JfQ09OVEVOVF9XUkFQUEVSKS5oZWlnaHQod2luZG93SGVpZ2h0KVxuICAgICAgJChTRUxFQ1RPUl9DT05URU5UX0lGUkFNRSkuaGVpZ2h0KHdpbmRvd0hlaWdodClcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29udGVudFdyYXBwZXJIZWlnaHQgPSBwYXJzZUZsb2F0KCQoU0VMRUNUT1JfQ09OVEVOVF9XUkFQUEVSKS5jc3MoJ21pbi1oZWlnaHQnKSlcbiAgICAgIGNvbnN0IG5hdmJhckhlaWdodCA9ICQoU0VMRUNUT1JfVEFCX05BVikub3V0ZXJIZWlnaHQoKVxuICAgICAgaWYgKHRhYkVtcHR5ID09IHRydWUpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgJChgJHtTRUxFQ1RPUl9UQUJfRU1QVFl9LCAke1NFTEVDVE9SX1RBQl9MT0FESU5HfWApLmhlaWdodChjb250ZW50V3JhcHBlckhlaWdodCAtIG5hdmJhckhlaWdodClcbiAgICAgICAgfSwgNTApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKFNFTEVDVE9SX0NPTlRFTlRfSUZSQU1FKS5oZWlnaHQoY29udGVudFdyYXBwZXJIZWlnaHQgLSBuYXZiYXJIZWlnaHQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2Uob3BlcmF0aW9uLCAuLi5hcmdzKSB7XG4gICAgbGV0IGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXG4gICAgY29uc3QgX29wdGlvbnMgPSAkLmV4dGVuZCh7fSwgRGVmYXVsdCwgJCh0aGlzKS5kYXRhKCkpXG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIGRhdGEgPSBuZXcgSUZyYW1lKHRoaXMsIF9vcHRpb25zKVxuICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb3BlcmF0aW9uID09PSAnc3RyaW5nJyAmJiBvcGVyYXRpb24ubWF0Y2goL2NyZWF0ZVRhYnxvcGVuVGFiU2lkZWJhcnxzd2l0Y2hUYWJ8cmVtb3ZlQWN0aXZlVGFiLykpIHtcbiAgICAgIGRhdGFbb3BlcmF0aW9uXSguLi5hcmdzKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIERhdGEgQVBJXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuJCh3aW5kb3cpLm9uKCdsb2FkJywgKCkgPT4ge1xuICBJRnJhbWUuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQoU0VMRUNUT1JfREFUQV9UT0dHTEUpKVxufSlcblxuLyoqXG4gKiBqUXVlcnkgQVBJXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuJC5mbltOQU1FXSA9IElGcmFtZS5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gSUZyYW1lXG4kLmZuW05BTUVdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIElGcmFtZS5falF1ZXJ5SW50ZXJmYWNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IElGcmFtZVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQWRtaW5MVEUgTGF5b3V0LmpzXG4gKiBMaWNlbnNlIE1JVFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuY29uc3QgTkFNRSA9ICdMYXlvdXQnXG5jb25zdCBEQVRBX0tFWSA9ICdsdGUubGF5b3V0J1xuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXVxuXG5jb25zdCBTRUxFQ1RPUl9IRUFERVIgPSAnLm1haW4taGVhZGVyJ1xuY29uc3QgU0VMRUNUT1JfTUFJTl9TSURFQkFSID0gJy5tYWluLXNpZGViYXInXG5jb25zdCBTRUxFQ1RPUl9TSURFQkFSID0gJy5tYWluLXNpZGViYXIgLnNpZGViYXInXG5jb25zdCBTRUxFQ1RPUl9DT05URU5UID0gJy5jb250ZW50LXdyYXBwZXInXG5jb25zdCBTRUxFQ1RPUl9DT05UUk9MX1NJREVCQVJfQ09OVEVOVCA9ICcuY29udHJvbC1zaWRlYmFyLWNvbnRlbnQnXG5jb25zdCBTRUxFQ1RPUl9DT05UUk9MX1NJREVCQVJfQlROID0gJ1tkYXRhLXdpZGdldD1cImNvbnRyb2wtc2lkZWJhclwiXSdcbmNvbnN0IFNFTEVDVE9SX0ZPT1RFUiA9ICcubWFpbi1mb290ZXInXG5jb25zdCBTRUxFQ1RPUl9QVVNITUVOVV9CVE4gPSAnW2RhdGEtd2lkZ2V0PVwicHVzaG1lbnVcIl0nXG5jb25zdCBTRUxFQ1RPUl9MT0dJTl9CT1ggPSAnLmxvZ2luLWJveCdcbmNvbnN0IFNFTEVDVE9SX1JFR0lTVEVSX0JPWCA9ICcucmVnaXN0ZXItYm94J1xuXG5jb25zdCBDTEFTU19OQU1FX1NJREVCQVJfRk9DVVNFRCA9ICdzaWRlYmFyLWZvY3VzZWQnXG5jb25zdCBDTEFTU19OQU1FX0xBWU9VVF9GSVhFRCA9ICdsYXlvdXQtZml4ZWQnXG5jb25zdCBDTEFTU19OQU1FX0NPTlRST0xfU0lERUJBUl9TTElERV9PUEVOID0gJ2NvbnRyb2wtc2lkZWJhci1zbGlkZS1vcGVuJ1xuY29uc3QgQ0xBU1NfTkFNRV9DT05UUk9MX1NJREVCQVJfT1BFTiA9ICdjb250cm9sLXNpZGViYXItb3BlbidcbmNvbnN0IENMQVNTX05BTUVfTEFZT1VUX1RPUF9OQVYgPSAnbGF5b3V0LXRvcC1uYXYnXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIHNjcm9sbGJhclRoZW1lOiAnb3MtdGhlbWUtbGlnaHQnLFxuICBzY3JvbGxiYXJBdXRvSGlkZTogJ2wnLFxuICBwYW5lbEF1dG9IZWlnaHQ6IHRydWUsXG4gIHBhbmVsQXV0b0hlaWdodE1vZGU6ICdtaW4taGVpZ2h0JyxcbiAgbG9naW5SZWdpc3RlckF1dG9IZWlnaHQ6IHRydWVcbn1cblxuLyoqXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuY2xhc3MgTGF5b3V0IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnXG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcblxuICAgIHRoaXMuX2luaXQoKVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgZml4TGF5b3V0SGVpZ2h0KGV4dHJhID0gbnVsbCkge1xuICAgIGNvbnN0ICRib2R5ID0gJCgnYm9keScpXG4gICAgbGV0IGNvbnRyb2xTaWRlYmFyID0gMFxuXG4gICAgaWYgKCRib2R5Lmhhc0NsYXNzKENMQVNTX05BTUVfQ09OVFJPTF9TSURFQkFSX1NMSURFX09QRU4pIHx8ICRib2R5Lmhhc0NsYXNzKENMQVNTX05BTUVfQ09OVFJPTF9TSURFQkFSX09QRU4pIHx8IGV4dHJhID09PSAnY29udHJvbF9zaWRlYmFyJykge1xuICAgICAgY29udHJvbFNpZGViYXIgPSAkKFNFTEVDVE9SX0NPTlRST0xfU0lERUJBUl9DT05URU5UKS5oZWlnaHQoKVxuICAgIH1cblxuICAgIGNvbnN0IGhlaWdodHMgPSB7XG4gICAgICB3aW5kb3c6ICQod2luZG93KS5oZWlnaHQoKSxcbiAgICAgIGhlYWRlcjogJChTRUxFQ1RPUl9IRUFERVIpLmxlbmd0aCAhPT0gMCA/ICQoU0VMRUNUT1JfSEVBREVSKS5vdXRlckhlaWdodCgpIDogMCxcbiAgICAgIGZvb3RlcjogJChTRUxFQ1RPUl9GT09URVIpLmxlbmd0aCAhPT0gMCA/ICQoU0VMRUNUT1JfRk9PVEVSKS5vdXRlckhlaWdodCgpIDogMCxcbiAgICAgIHNpZGViYXI6ICQoU0VMRUNUT1JfU0lERUJBUikubGVuZ3RoICE9PSAwID8gJChTRUxFQ1RPUl9TSURFQkFSKS5oZWlnaHQoKSA6IDAsXG4gICAgICBjb250cm9sU2lkZWJhclxuICAgIH1cblxuICAgIGNvbnN0IG1heCA9IHRoaXMuX21heChoZWlnaHRzKVxuICAgIGxldCBvZmZzZXQgPSB0aGlzLl9jb25maWcucGFuZWxBdXRvSGVpZ2h0XG5cbiAgICBpZiAob2Zmc2V0ID09PSB0cnVlKSB7XG4gICAgICBvZmZzZXQgPSAwXG4gICAgfVxuXG4gICAgY29uc3QgJGNvbnRlbnRTZWxlY3RvciA9ICQoU0VMRUNUT1JfQ09OVEVOVClcblxuICAgIGlmIChvZmZzZXQgIT09IGZhbHNlKSB7XG4gICAgICBpZiAobWF4ID09PSBoZWlnaHRzLmNvbnRyb2xTaWRlYmFyKSB7XG4gICAgICAgIGlmICgkYm9keS5oYXNDbGFzcyhDTEFTU19OQU1FX0xBWU9VVF9UT1BfTkFWKSkge1xuICAgICAgICAgICRjb250ZW50U2VsZWN0b3IuY3NzKHRoaXMuX2NvbmZpZy5wYW5lbEF1dG9IZWlnaHRNb2RlLCAobWF4ICsgb2Zmc2V0KSArIGhlaWdodHMuaGVhZGVyICsgaGVpZ2h0cy5mb290ZXIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJGNvbnRlbnRTZWxlY3Rvci5jc3ModGhpcy5fY29uZmlnLnBhbmVsQXV0b0hlaWdodE1vZGUsIChtYXggKyBvZmZzZXQpKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG1heCA9PT0gaGVpZ2h0cy53aW5kb3cpIHtcbiAgICAgICAgJGNvbnRlbnRTZWxlY3Rvci5jc3ModGhpcy5fY29uZmlnLnBhbmVsQXV0b0hlaWdodE1vZGUsIChtYXggKyBvZmZzZXQpIC0gaGVpZ2h0cy5oZWFkZXIgLSBoZWlnaHRzLmZvb3RlcilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRjb250ZW50U2VsZWN0b3IuY3NzKHRoaXMuX2NvbmZpZy5wYW5lbEF1dG9IZWlnaHRNb2RlLCAobWF4ICsgb2Zmc2V0KSAtIGhlaWdodHMuaGVhZGVyKVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5faXNGb290ZXJGaXhlZCgpKSB7XG4gICAgICAgICRjb250ZW50U2VsZWN0b3IuY3NzKHRoaXMuX2NvbmZpZy5wYW5lbEF1dG9IZWlnaHRNb2RlLCBwYXJzZUZsb2F0KCRjb250ZW50U2VsZWN0b3IuY3NzKHRoaXMuX2NvbmZpZy5wYW5lbEF1dG9IZWlnaHRNb2RlKSkgKyBoZWlnaHRzLmZvb3RlcilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoISRib2R5Lmhhc0NsYXNzKENMQVNTX05BTUVfTEFZT1VUX0ZJWEVEKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKG9mZnNldCAhPT0gZmFsc2UpIHtcbiAgICAgICRjb250ZW50U2VsZWN0b3IuY3NzKHRoaXMuX2NvbmZpZy5wYW5lbEF1dG9IZWlnaHRNb2RlLCAobWF4ICsgb2Zmc2V0KSAtIGhlaWdodHMuaGVhZGVyIC0gaGVpZ2h0cy5mb290ZXIpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiAkLmZuLm92ZXJsYXlTY3JvbGxiYXJzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgJChTRUxFQ1RPUl9TSURFQkFSKS5vdmVybGF5U2Nyb2xsYmFycyh7XG4gICAgICAgIGNsYXNzTmFtZTogdGhpcy5fY29uZmlnLnNjcm9sbGJhclRoZW1lLFxuICAgICAgICBzaXplQXV0b0NhcGFibGU6IHRydWUsXG4gICAgICAgIHNjcm9sbGJhcnM6IHtcbiAgICAgICAgICBhdXRvSGlkZTogdGhpcy5fY29uZmlnLnNjcm9sbGJhckF1dG9IaWRlLFxuICAgICAgICAgIGNsaWNrU2Nyb2xsaW5nOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgZml4TG9naW5SZWdpc3RlckhlaWdodCgpIHtcbiAgICBjb25zdCAkYm9keSA9ICQoJ2JvZHknKVxuICAgIGNvbnN0ICRzZWxlY3RvciA9ICQoYCR7U0VMRUNUT1JfTE9HSU5fQk9YfSwgJHtTRUxFQ1RPUl9SRUdJU1RFUl9CT1h9YClcblxuICAgIGlmICgkc2VsZWN0b3IubGVuZ3RoID09PSAwKSB7XG4gICAgICAkYm9keS5jc3MoJ2hlaWdodCcsICdhdXRvJylcbiAgICAgICQoJ2h0bWwnKS5jc3MoJ2hlaWdodCcsICdhdXRvJylcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYm94SGVpZ2h0ID0gJHNlbGVjdG9yLmhlaWdodCgpXG5cbiAgICAgIGlmICgkYm9keS5jc3ModGhpcy5fY29uZmlnLnBhbmVsQXV0b0hlaWdodE1vZGUpICE9PSBib3hIZWlnaHQpIHtcbiAgICAgICAgJGJvZHkuY3NzKHRoaXMuX2NvbmZpZy5wYW5lbEF1dG9IZWlnaHRNb2RlLCBib3hIZWlnaHQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9pbml0KCkge1xuICAgIC8vIEFjdGl2YXRlIGxheW91dCBoZWlnaHQgd2F0Y2hlclxuICAgIHRoaXMuZml4TGF5b3V0SGVpZ2h0KClcblxuICAgIGlmICh0aGlzLl9jb25maWcubG9naW5SZWdpc3RlckF1dG9IZWlnaHQgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuZml4TG9naW5SZWdpc3RlckhlaWdodCgpXG4gICAgfSBlbHNlIGlmICh0aGlzLl9jb25maWcubG9naW5SZWdpc3RlckF1dG9IZWlnaHQgPT09IHBhcnNlSW50KHRoaXMuX2NvbmZpZy5sb2dpblJlZ2lzdGVyQXV0b0hlaWdodCwgMTApKSB7XG4gICAgICBzZXRJbnRlcnZhbCh0aGlzLmZpeExvZ2luUmVnaXN0ZXJIZWlnaHQsIHRoaXMuX2NvbmZpZy5sb2dpblJlZ2lzdGVyQXV0b0hlaWdodClcbiAgICB9XG5cbiAgICAkKFNFTEVDVE9SX1NJREVCQVIpXG4gICAgICAub24oJ2NvbGxhcHNlZC5sdGUudHJlZXZpZXcgZXhwYW5kZWQubHRlLnRyZWV2aWV3JywgKCkgPT4ge1xuICAgICAgICB0aGlzLmZpeExheW91dEhlaWdodCgpXG4gICAgICB9KVxuXG4gICAgJChTRUxFQ1RPUl9QVVNITUVOVV9CVE4pXG4gICAgICAub24oJ2NvbGxhcHNlZC5sdGUucHVzaG1lbnUgc2hvd24ubHRlLnB1c2htZW51JywgKCkgPT4ge1xuICAgICAgICB0aGlzLmZpeExheW91dEhlaWdodCgpXG4gICAgICB9KVxuXG4gICAgJChTRUxFQ1RPUl9DT05UUk9MX1NJREVCQVJfQlROKVxuICAgICAgLm9uKCdjb2xsYXBzZWQubHRlLmNvbnRyb2xzaWRlYmFyJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmZpeExheW91dEhlaWdodCgpXG4gICAgICB9KVxuICAgICAgLm9uKCdleHBhbmRlZC5sdGUuY29udHJvbHNpZGViYXInLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuZml4TGF5b3V0SGVpZ2h0KCdjb250cm9sX3NpZGViYXInKVxuICAgICAgfSlcblxuICAgICQod2luZG93KS5yZXNpemUoKCkgPT4ge1xuICAgICAgdGhpcy5maXhMYXlvdXRIZWlnaHQoKVxuICAgIH0pXG5cbiAgICAkKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XG4gICAgICB0aGlzLmZpeExheW91dEhlaWdodCgpXG4gICAgfSlcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgJCgnYm9keS5ob2xkLXRyYW5zaXRpb24nKS5yZW1vdmVDbGFzcygnaG9sZC10cmFuc2l0aW9uJylcbiAgICB9LCA1MClcbiAgfVxuXG4gIF9tYXgobnVtYmVycykge1xuICAgIC8vIENhbGN1bGF0ZSB0aGUgbWF4aW11bSBudW1iZXIgaW4gYSBsaXN0XG4gICAgbGV0IG1heCA9IDBcblxuICAgIE9iamVjdC5rZXlzKG51bWJlcnMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGlmIChudW1iZXJzW2tleV0gPiBtYXgpIHtcbiAgICAgICAgbWF4ID0gbnVtYmVyc1trZXldXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBtYXhcbiAgfVxuXG4gIF9pc0Zvb3RlckZpeGVkKCkge1xuICAgIHJldHVybiAkKFNFTEVDVE9SX0ZPT1RFUikuY3NzKCdwb3NpdGlvbicpID09PSAnZml4ZWQnXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcgPSAnJykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXG4gICAgICBjb25zdCBfb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCAkKHRoaXMpLmRhdGEoKSlcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgTGF5b3V0KCQodGhpcyksIF9vcHRpb25zKVxuICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWcgPT09ICdpbml0JyB8fCBjb25maWcgPT09ICcnKSB7XG4gICAgICAgIGRhdGEuX2luaXQoKVxuICAgICAgfSBlbHNlIGlmIChjb25maWcgPT09ICdmaXhMYXlvdXRIZWlnaHQnIHx8IGNvbmZpZyA9PT0gJ2ZpeExvZ2luUmVnaXN0ZXJIZWlnaHQnKSB7XG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIERhdGEgQVBJXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuJCh3aW5kb3cpLm9uKCdsb2FkJywgKCkgPT4ge1xuICBMYXlvdXQuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQoJ2JvZHknKSlcbn0pXG5cbiQoYCR7U0VMRUNUT1JfU0lERUJBUn0gYWApLm9uKCdmb2N1c2luJywgKCkgPT4ge1xuICAkKFNFTEVDVE9SX01BSU5fU0lERUJBUikuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9TSURFQkFSX0ZPQ1VTRUQpXG59KVxuXG4kKGAke1NFTEVDVE9SX1NJREVCQVJ9IGFgKS5vbignZm9jdXNvdXQnLCAoKSA9PiB7XG4gICQoU0VMRUNUT1JfTUFJTl9TSURFQkFSKS5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX1NJREVCQVJfRk9DVVNFRClcbn0pXG5cbi8qKlxuICogalF1ZXJ5IEFQSVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbiQuZm5bTkFNRV0gPSBMYXlvdXQuX2pRdWVyeUludGVyZmFjZVxuJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IExheW91dFxuJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gIHJldHVybiBMYXlvdXQuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEFkbWluTFRFIFB1c2hNZW51LmpzXG4gKiBMaWNlbnNlIE1JVFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuY29uc3QgTkFNRSA9ICdQdXNoTWVudSdcbmNvbnN0IERBVEFfS0VZID0gJ2x0ZS5wdXNobWVudSdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG5cbmNvbnN0IEVWRU5UX0NPTExBUFNFRCA9IGBjb2xsYXBzZWQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcblxuY29uc3QgU0VMRUNUT1JfVE9HR0xFX0JVVFRPTiA9ICdbZGF0YS13aWRnZXQ9XCJwdXNobWVudVwiXSdcbmNvbnN0IFNFTEVDVE9SX0JPRFkgPSAnYm9keSdcbmNvbnN0IFNFTEVDVE9SX09WRVJMQVkgPSAnI3NpZGViYXItb3ZlcmxheSdcbmNvbnN0IFNFTEVDVE9SX1dSQVBQRVIgPSAnLndyYXBwZXInXG5cbmNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0VEID0gJ3NpZGViYXItY29sbGFwc2UnXG5jb25zdCBDTEFTU19OQU1FX09QRU4gPSAnc2lkZWJhci1vcGVuJ1xuY29uc3QgQ0xBU1NfTkFNRV9JU19PUEVOSU5HID0gJ3NpZGViYXItaXMtb3BlbmluZydcbmNvbnN0IENMQVNTX05BTUVfQ0xPU0VEID0gJ3NpZGViYXItY2xvc2VkJ1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBhdXRvQ29sbGFwc2VTaXplOiA5OTIsXG4gIGVuYWJsZVJlbWVtYmVyOiBmYWxzZSxcbiAgbm9UcmFuc2l0aW9uQWZ0ZXJSZWxvYWQ6IHRydWVcbn1cblxuLyoqXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuY2xhc3MgUHVzaE1lbnUge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLl9vcHRpb25zID0gJC5leHRlbmQoe30sIERlZmF1bHQsIG9wdGlvbnMpXG5cbiAgICBpZiAoJChTRUxFQ1RPUl9PVkVSTEFZKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuX2FkZE92ZXJsYXkoKVxuICAgIH1cblxuICAgIHRoaXMuX2luaXQoKVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgZXhwYW5kKCkge1xuICAgIGNvbnN0ICRib2R5U2VsZWN0b3IgPSAkKFNFTEVDVE9SX0JPRFkpXG5cbiAgICBpZiAodGhpcy5fb3B0aW9ucy5hdXRvQ29sbGFwc2VTaXplKSB7XG4gICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gdGhpcy5fb3B0aW9ucy5hdXRvQ29sbGFwc2VTaXplKSB7XG4gICAgICAgICRib2R5U2VsZWN0b3IuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9PUEVOKVxuICAgICAgfVxuICAgIH1cblxuICAgICRib2R5U2VsZWN0b3IuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9JU19PUEVOSU5HKS5yZW1vdmVDbGFzcyhgJHtDTEFTU19OQU1FX0NPTExBUFNFRH0gJHtDTEFTU19OQU1FX0NMT1NFRH1gKS5kZWxheSg1MCkucXVldWUoZnVuY3Rpb24gKCkge1xuICAgICAgJGJvZHlTZWxlY3Rvci5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX0lTX09QRU5JTkcpXG4gICAgICAkKHRoaXMpLmRlcXVldWUoKVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5fb3B0aW9ucy5lbmFibGVSZW1lbWJlcikge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHJlbWVtYmVyJHtFVkVOVF9LRVl9YCwgQ0xBU1NfTkFNRV9PUEVOKVxuICAgIH1cblxuICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcigkLkV2ZW50KEVWRU5UX1NIT1dOKSlcbiAgfVxuXG4gIGNvbGxhcHNlKCkge1xuICAgIGNvbnN0ICRib2R5U2VsZWN0b3IgPSAkKFNFTEVDVE9SX0JPRFkpXG5cbiAgICBpZiAodGhpcy5fb3B0aW9ucy5hdXRvQ29sbGFwc2VTaXplKSB7XG4gICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gdGhpcy5fb3B0aW9ucy5hdXRvQ29sbGFwc2VTaXplKSB7XG4gICAgICAgICRib2R5U2VsZWN0b3IucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9PUEVOKS5hZGRDbGFzcyhDTEFTU19OQU1FX0NMT1NFRClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAkYm9keVNlbGVjdG9yLmFkZENsYXNzKENMQVNTX05BTUVfQ09MTEFQU0VEKVxuXG4gICAgaWYgKHRoaXMuX29wdGlvbnMuZW5hYmxlUmVtZW1iZXIpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGByZW1lbWJlciR7RVZFTlRfS0VZfWAsIENMQVNTX05BTUVfQ09MTEFQU0VEKVxuICAgIH1cblxuICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcigkLkV2ZW50KEVWRU5UX0NPTExBUFNFRCkpXG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKCQoU0VMRUNUT1JfQk9EWSkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9DT0xMQVBTRUQpKSB7XG4gICAgICB0aGlzLmV4cGFuZCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29sbGFwc2UoKVxuICAgIH1cbiAgfVxuXG4gIGF1dG9Db2xsYXBzZShyZXNpemUgPSBmYWxzZSkge1xuICAgIGlmICghdGhpcy5fb3B0aW9ucy5hdXRvQ29sbGFwc2VTaXplKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCAkYm9keVNlbGVjdG9yID0gJChTRUxFQ1RPUl9CT0RZKVxuXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IHRoaXMuX29wdGlvbnMuYXV0b0NvbGxhcHNlU2l6ZSkge1xuICAgICAgaWYgKCEkYm9keVNlbGVjdG9yLmhhc0NsYXNzKENMQVNTX05BTUVfT1BFTikpIHtcbiAgICAgICAgdGhpcy5jb2xsYXBzZSgpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChyZXNpemUgPT09IHRydWUpIHtcbiAgICAgIGlmICgkYm9keVNlbGVjdG9yLmhhc0NsYXNzKENMQVNTX05BTUVfT1BFTikpIHtcbiAgICAgICAgJGJvZHlTZWxlY3Rvci5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX09QRU4pXG4gICAgICB9IGVsc2UgaWYgKCRib2R5U2VsZWN0b3IuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9DTE9TRUQpKSB7XG4gICAgICAgIHRoaXMuZXhwYW5kKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW1lbWJlcigpIHtcbiAgICBpZiAoIXRoaXMuX29wdGlvbnMuZW5hYmxlUmVtZW1iZXIpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0ICRib2R5ID0gJCgnYm9keScpXG4gICAgY29uc3QgdG9nZ2xlU3RhdGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgcmVtZW1iZXIke0VWRU5UX0tFWX1gKVxuXG4gICAgaWYgKHRvZ2dsZVN0YXRlID09PSBDTEFTU19OQU1FX0NPTExBUFNFRCkge1xuICAgICAgaWYgKHRoaXMuX29wdGlvbnMubm9UcmFuc2l0aW9uQWZ0ZXJSZWxvYWQpIHtcbiAgICAgICAgJGJvZHkuYWRkQ2xhc3MoJ2hvbGQtdHJhbnNpdGlvbicpLmFkZENsYXNzKENMQVNTX05BTUVfQ09MTEFQU0VEKS5kZWxheSg1MCkucXVldWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2hvbGQtdHJhbnNpdGlvbicpXG4gICAgICAgICAgJCh0aGlzKS5kZXF1ZXVlKClcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRib2R5LmFkZENsYXNzKENMQVNTX05BTUVfQ09MTEFQU0VEKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5fb3B0aW9ucy5ub1RyYW5zaXRpb25BZnRlclJlbG9hZCkge1xuICAgICAgJGJvZHkuYWRkQ2xhc3MoJ2hvbGQtdHJhbnNpdGlvbicpLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfQ09MTEFQU0VEKS5kZWxheSg1MCkucXVldWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdob2xkLXRyYW5zaXRpb24nKVxuICAgICAgICAkKHRoaXMpLmRlcXVldWUoKVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgJGJvZHkucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9DT0xMQVBTRUQpXG4gICAgfVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9pbml0KCkge1xuICAgIHRoaXMucmVtZW1iZXIoKVxuICAgIHRoaXMuYXV0b0NvbGxhcHNlKClcblxuICAgICQod2luZG93KS5yZXNpemUoKCkgPT4ge1xuICAgICAgdGhpcy5hdXRvQ29sbGFwc2UodHJ1ZSlcbiAgICB9KVxuICB9XG5cbiAgX2FkZE92ZXJsYXkoKSB7XG4gICAgY29uc3Qgb3ZlcmxheSA9ICQoJzxkaXYgLz4nLCB7XG4gICAgICBpZDogJ3NpZGViYXItb3ZlcmxheSdcbiAgICB9KVxuXG4gICAgb3ZlcmxheS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmNvbGxhcHNlKClcbiAgICB9KVxuXG4gICAgJChTRUxFQ1RPUl9XUkFQUEVSKS5hcHBlbmQob3ZlcmxheSlcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKG9wZXJhdGlvbikge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXG4gICAgICBjb25zdCBfb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCAkKHRoaXMpLmRhdGEoKSlcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgUHVzaE1lbnUodGhpcywgX29wdGlvbnMpXG4gICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBvcGVyYXRpb24gPT09ICdzdHJpbmcnICYmIG9wZXJhdGlvbi5tYXRjaCgvY29sbGFwc2V8ZXhwYW5kfHRvZ2dsZS8pKSB7XG4gICAgICAgIGRhdGFbb3BlcmF0aW9uXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIERhdGEgQVBJXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgU0VMRUNUT1JfVE9HR0xFX0JVVFRPTiwgZXZlbnQgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgbGV0IGJ1dHRvbiA9IGV2ZW50LmN1cnJlbnRUYXJnZXRcblxuICBpZiAoJChidXR0b24pLmRhdGEoJ3dpZGdldCcpICE9PSAncHVzaG1lbnUnKSB7XG4gICAgYnV0dG9uID0gJChidXR0b24pLmNsb3Nlc3QoU0VMRUNUT1JfVE9HR0xFX0JVVFRPTilcbiAgfVxuXG4gIFB1c2hNZW51Ll9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKGJ1dHRvbiksICd0b2dnbGUnKVxufSlcblxuJCh3aW5kb3cpLm9uKCdsb2FkJywgKCkgPT4ge1xuICBQdXNoTWVudS5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJChTRUxFQ1RPUl9UT0dHTEVfQlVUVE9OKSlcbn0pXG5cbi8qKlxuICogalF1ZXJ5IEFQSVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbiQuZm5bTkFNRV0gPSBQdXNoTWVudS5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gUHVzaE1lbnVcbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gUHVzaE1lbnUuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBQdXNoTWVudVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQWRtaW5MVEUgU2lkZWJhclNlYXJjaC5qc1xuICogTGljZW5zZSBNSVRcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQsIHsgdHJpbSB9IGZyb20gJ2pxdWVyeSdcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ1NpZGViYXJTZWFyY2gnXG5jb25zdCBEQVRBX0tFWSA9ICdsdGUuc2lkZWJhci1zZWFyY2gnXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG5cbmNvbnN0IENMQVNTX05BTUVfT1BFTiA9ICdzaWRlYmFyLXNlYXJjaC1vcGVuJ1xuY29uc3QgQ0xBU1NfTkFNRV9JQ09OX1NFQVJDSCA9ICdmYS1zZWFyY2gnXG5jb25zdCBDTEFTU19OQU1FX0lDT05fQ0xPU0UgPSAnZmEtdGltZXMnXG5jb25zdCBDTEFTU19OQU1FX0hFQURFUiA9ICduYXYtaGVhZGVyJ1xuY29uc3QgQ0xBU1NfTkFNRV9TRUFSQ0hfUkVTVUxUUyA9ICdzaWRlYmFyLXNlYXJjaC1yZXN1bHRzJ1xuY29uc3QgQ0xBU1NfTkFNRV9MSVNUX0dST1VQID0gJ2xpc3QtZ3JvdXAnXG5cbmNvbnN0IFNFTEVDVE9SX0RBVEFfV0lER0VUID0gJ1tkYXRhLXdpZGdldD1cInNpZGViYXItc2VhcmNoXCJdJ1xuY29uc3QgU0VMRUNUT1JfU0lERUJBUiA9ICcubWFpbi1zaWRlYmFyIC5uYXYtc2lkZWJhcidcbmNvbnN0IFNFTEVDVE9SX05BVl9MSU5LID0gJy5uYXYtbGluaydcbmNvbnN0IFNFTEVDVE9SX05BVl9UUkVFVklFVyA9ICcubmF2LXRyZWV2aWV3J1xuY29uc3QgU0VMRUNUT1JfU0VBUkNIX0lOUFVUID0gYCR7U0VMRUNUT1JfREFUQV9XSURHRVR9IC5mb3JtLWNvbnRyb2xgXG5jb25zdCBTRUxFQ1RPUl9TRUFSQ0hfQlVUVE9OID0gYCR7U0VMRUNUT1JfREFUQV9XSURHRVR9IC5idG5gXG5jb25zdCBTRUxFQ1RPUl9TRUFSQ0hfSUNPTiA9IGAke1NFTEVDVE9SX1NFQVJDSF9CVVRUT059IGlgXG5jb25zdCBTRUxFQ1RPUl9TRUFSQ0hfTElTVF9HUk9VUCA9IGAuJHtDTEFTU19OQU1FX0xJU1RfR1JPVVB9YFxuY29uc3QgU0VMRUNUT1JfU0VBUkNIX1JFU1VMVFMgPSBgLiR7Q0xBU1NfTkFNRV9TRUFSQ0hfUkVTVUxUU31gXG5jb25zdCBTRUxFQ1RPUl9TRUFSQ0hfUkVTVUxUU19HUk9VUCA9IGAke1NFTEVDVE9SX1NFQVJDSF9SRVNVTFRTfSAuJHtDTEFTU19OQU1FX0xJU1RfR1JPVVB9YFxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBhcnJvd1NpZ246ICctPicsXG4gIG1pbkxlbmd0aDogMyxcbiAgbWF4UmVzdWx0czogNyxcbiAgaGlnaGxpZ2h0TmFtZTogdHJ1ZSxcbiAgaGlnaGxpZ2h0UGF0aDogZmFsc2UsXG4gIGhpZ2hsaWdodENsYXNzOiAndGV4dC1saWdodCcsXG4gIG5vdEZvdW5kVGV4dDogJ05vIGVsZW1lbnQgZm91bmQhJ1xufVxuXG5jb25zdCBTZWFyY2hJdGVtcyA9IFtdXG5cbi8qKlxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmNsYXNzIFNpZGViYXJTZWFyY2gge1xuICBjb25zdHJ1Y3RvcihfZWxlbWVudCwgX29wdGlvbnMpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBfZWxlbWVudFxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCBfb3B0aW9ucylcbiAgICB0aGlzLml0ZW1zID0gW11cbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIGluaXQoKSB7XG4gICAgaWYgKCQoU0VMRUNUT1JfREFUQV9XSURHRVQpLmxlbmd0aCA9PSAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoJChTRUxFQ1RPUl9EQVRBX1dJREdFVCkubmV4dChTRUxFQ1RPUl9TRUFSQ0hfUkVTVUxUUykubGVuZ3RoID09IDApIHtcbiAgICAgICQoU0VMRUNUT1JfREFUQV9XSURHRVQpLmFmdGVyKFxuICAgICAgICAkKCc8ZGl2IC8+JywgeyBjbGFzczogQ0xBU1NfTkFNRV9TRUFSQ0hfUkVTVUxUUyB9KVxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICgkKFNFTEVDVE9SX1NFQVJDSF9SRVNVTFRTKS5jaGlsZHJlbihTRUxFQ1RPUl9TRUFSQ0hfTElTVF9HUk9VUCkubGVuZ3RoID09IDApIHtcbiAgICAgICQoU0VMRUNUT1JfU0VBUkNIX1JFU1VMVFMpLmFwcGVuZChcbiAgICAgICAgJCgnPGRpdiAvPicsIHsgY2xhc3M6IENMQVNTX05BTUVfTElTVF9HUk9VUCB9KVxuICAgICAgKVxuICAgIH1cblxuICAgIHRoaXMuX2FkZE5vdEZvdW5kKClcblxuICAgICQoU0VMRUNUT1JfU0lERUJBUikuY2hpbGRyZW4oKS5lYWNoKChpLCBjaGlsZCkgPT4ge1xuICAgICAgdGhpcy5fcGFyc2VJdGVtKGNoaWxkKVxuICAgIH0pXG4gIH1cblxuICBzZWFyY2goKSB7XG4gICAgY29uc3Qgc2VhcmNoVmFsdWUgPSAkKFNFTEVDVE9SX1NFQVJDSF9JTlBVVCkudmFsKCkudG9Mb3dlckNhc2UoKVxuICAgIGlmIChzZWFyY2hWYWx1ZS5sZW5ndGggPCB0aGlzLm9wdGlvbnMubWluTGVuZ3RoKSB7XG4gICAgICAkKFNFTEVDVE9SX1NFQVJDSF9SRVNVTFRTX0dST1VQKS5lbXB0eSgpXG4gICAgICB0aGlzLl9hZGROb3RGb3VuZCgpXG4gICAgICB0aGlzLmNsb3NlKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHNlYXJjaFJlc3VsdHMgPSBTZWFyY2hJdGVtcy5maWx0ZXIoaXRlbSA9PiAoaXRlbS5uYW1lKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFZhbHVlKSlcbiAgICBjb25zdCBlbmRSZXN1bHRzID0gJChzZWFyY2hSZXN1bHRzLnNsaWNlKDAsIHRoaXMub3B0aW9ucy5tYXhSZXN1bHRzKSlcbiAgICAkKFNFTEVDVE9SX1NFQVJDSF9SRVNVTFRTX0dST1VQKS5lbXB0eSgpXG5cbiAgICBpZiAoZW5kUmVzdWx0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuX2FkZE5vdEZvdW5kKClcbiAgICB9IGVsc2Uge1xuICAgICAgZW5kUmVzdWx0cy5lYWNoKChpLCByZXN1bHQpID0+IHtcbiAgICAgICAgJChTRUxFQ1RPUl9TRUFSQ0hfUkVTVUxUU19HUk9VUCkuYXBwZW5kKHRoaXMuX3JlbmRlckl0ZW0ocmVzdWx0Lm5hbWUsIHJlc3VsdC5saW5rLCByZXN1bHQucGF0aCkpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMub3BlbigpXG4gIH1cblxuICBvcGVuKCkge1xuICAgICQoU0VMRUNUT1JfREFUQV9XSURHRVQpLnBhcmVudCgpLmFkZENsYXNzKENMQVNTX05BTUVfT1BFTilcbiAgICAkKFNFTEVDVE9SX1NFQVJDSF9JQ09OKS5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX0lDT05fU0VBUkNIKS5hZGRDbGFzcyhDTEFTU19OQU1FX0lDT05fQ0xPU0UpXG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICAkKFNFTEVDVE9SX0RBVEFfV0lER0VUKS5wYXJlbnQoKS5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX09QRU4pXG4gICAgJChTRUxFQ1RPUl9TRUFSQ0hfSUNPTikucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9JQ09OX0NMT1NFKS5hZGRDbGFzcyhDTEFTU19OQU1FX0lDT05fU0VBUkNIKVxuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICgkKFNFTEVDVE9SX0RBVEFfV0lER0VUKS5wYXJlbnQoKS5oYXNDbGFzcyhDTEFTU19OQU1FX09QRU4pKSB7XG4gICAgICB0aGlzLmNsb3NlKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGVuKClcbiAgICB9XG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX3BhcnNlSXRlbShpdGVtLCBwYXRoID0gW10pIHtcbiAgICBpZiAoJChpdGVtKS5oYXNDbGFzcyhDTEFTU19OQU1FX0hFQURFUikpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGl0ZW1PYmplY3QgPSB7fVxuICAgIGNvbnN0IG5hdkxpbmsgPSAkKGl0ZW0pLmNsb25lKCkuZmluZChgPiAke1NFTEVDVE9SX05BVl9MSU5LfWApXG4gICAgY29uc3QgbmF2VHJlZXZpZXcgPSAkKGl0ZW0pLmNsb25lKCkuZmluZChgPiAke1NFTEVDVE9SX05BVl9UUkVFVklFV31gKVxuXG4gICAgY29uc3QgbGluayA9IG5hdkxpbmsuYXR0cignaHJlZicpXG4gICAgY29uc3QgbmFtZSA9IG5hdkxpbmsuZmluZCgncCcpLmNoaWxkcmVuKCkucmVtb3ZlKCkuZW5kKCkudGV4dCgpXG5cbiAgICBpdGVtT2JqZWN0Lm5hbWUgPSB0aGlzLl90cmltVGV4dChuYW1lKVxuICAgIGl0ZW1PYmplY3QubGluayA9IGxpbmtcbiAgICBpdGVtT2JqZWN0LnBhdGggPSBwYXRoXG5cbiAgICBpZiAobmF2VHJlZXZpZXcubGVuZ3RoID09PSAwKSB7XG4gICAgICBTZWFyY2hJdGVtcy5wdXNoKGl0ZW1PYmplY3QpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5ld1BhdGggPSBpdGVtT2JqZWN0LnBhdGguY29uY2F0KFtpdGVtT2JqZWN0Lm5hbWVdKVxuICAgICAgbmF2VHJlZXZpZXcuY2hpbGRyZW4oKS5lYWNoKChpLCBjaGlsZCkgPT4ge1xuICAgICAgICB0aGlzLl9wYXJzZUl0ZW0oY2hpbGQsIG5ld1BhdGgpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIF90cmltVGV4dCh0ZXh0KSB7XG4gICAgcmV0dXJuIHRyaW0odGV4dC5yZXBsYWNlKC8oXFxyXFxufFxcbnxcXHIpL2dtLCAnICcpKVxuICB9XG5cbiAgX3JlbmRlckl0ZW0obmFtZSwgbGluaywgcGF0aCkge1xuICAgIHBhdGggPSBwYXRoLmpvaW4oYCAke3RoaXMub3B0aW9ucy5hcnJvd1NpZ259IGApXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmhpZ2hsaWdodE5hbWUgfHwgdGhpcy5vcHRpb25zLmhpZ2hsaWdodFBhdGgpIHtcbiAgICAgIGNvbnN0IHNlYXJjaFZhbHVlID0gJChTRUxFQ1RPUl9TRUFSQ0hfSU5QVVQpLnZhbCgpLnRvTG93ZXJDYXNlKClcbiAgICAgIGNvbnN0IHJlZ0V4cCA9IG5ldyBSZWdFeHAoc2VhcmNoVmFsdWUsICdnaScpXG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuaGlnaGxpZ2h0TmFtZSkge1xuICAgICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKFxuICAgICAgICAgIHJlZ0V4cCxcbiAgICAgICAgICBzdHIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGA8YiBjbGFzcz1cIiR7dGhpcy5vcHRpb25zLmhpZ2hsaWdodENsYXNzfVwiPiR7c3RyfTwvYj5gXG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuaGlnaGxpZ2h0UGF0aCkge1xuICAgICAgICBwYXRoID0gcGF0aC5yZXBsYWNlKFxuICAgICAgICAgIHJlZ0V4cCxcbiAgICAgICAgICBzdHIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGA8YiBjbGFzcz1cIiR7dGhpcy5vcHRpb25zLmhpZ2hsaWdodENsYXNzfVwiPiR7c3RyfTwvYj5gXG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGA8YSBocmVmPVwiJHtsaW5rfVwiIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtdGl0bGVcIj5cbiAgICAgICAgICAke25hbWV9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLXBhdGhcIj5cbiAgICAgICAgICAke3BhdGh9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9hPmBcbiAgfVxuXG4gIF9hZGROb3RGb3VuZCgpIHtcbiAgICAkKFNFTEVDVE9SX1NFQVJDSF9SRVNVTFRTX0dST1VQKS5hcHBlbmQodGhpcy5fcmVuZGVySXRlbSh0aGlzLm9wdGlvbnMubm90Rm91bmRUZXh0LCAnIycsIFtdKSlcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIGxldCBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICBkYXRhID0gJCh0aGlzKS5kYXRhKClcbiAgICB9XG5cbiAgICBjb25zdCBfb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IGRhdGEpXG4gICAgY29uc3QgcGx1Z2luID0gbmV3IFNpZGViYXJTZWFyY2goJCh0aGlzKSwgX29wdGlvbnMpXG5cbiAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDogZGF0YSlcblxuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyAmJiBjb25maWcubWF0Y2goL2luaXR8dG9nZ2xlfGNsb3NlfG9wZW58c2VhcmNoLykpIHtcbiAgICAgIHBsdWdpbltjb25maWddKClcbiAgICB9IGVsc2Uge1xuICAgICAgcGx1Z2luLmluaXQoKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIERhdGEgQVBJXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsIFNFTEVDVE9SX1NFQVJDSF9CVVRUT04sIGV2ZW50ID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gIFNpZGViYXJTZWFyY2guX2pRdWVyeUludGVyZmFjZS5jYWxsKCQoU0VMRUNUT1JfREFUQV9XSURHRVQpLCAndG9nZ2xlJylcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdrZXl1cCcsIFNFTEVDVE9SX1NFQVJDSF9JTlBVVCwgZXZlbnQgPT4ge1xuICBpZiAoZXZlbnQua2V5Q29kZSA9PSAzOCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAkKFNFTEVDVE9SX1NFQVJDSF9SRVNVTFRTX0dST1VQKS5jaGlsZHJlbigpLmxhc3QoKS5mb2N1cygpXG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoZXZlbnQua2V5Q29kZSA9PSA0MCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAkKFNFTEVDVE9SX1NFQVJDSF9SRVNVTFRTX0dST1VQKS5jaGlsZHJlbigpLmZpcnN0KCkuZm9jdXMoKVxuICAgIHJldHVyblxuICB9XG5cbiAgbGV0IHRpbWVyID0gMFxuICBjbGVhclRpbWVvdXQodGltZXIpXG4gIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgU2lkZWJhclNlYXJjaC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJChTRUxFQ1RPUl9EQVRBX1dJREdFVCksICdzZWFyY2gnKVxuICB9LCAxMDApXG59KVxuXG4kKGRvY3VtZW50KS5vbigna2V5ZG93bicsIFNFTEVDVE9SX1NFQVJDSF9SRVNVTFRTX0dST1VQLCBldmVudCA9PiB7XG4gIGNvbnN0ICRmb2N1c2VkID0gJCgnOmZvY3VzJylcblxuICBpZiAoZXZlbnQua2V5Q29kZSA9PSAzOCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIGlmICgkZm9jdXNlZC5pcygnOmZpcnN0LWNoaWxkJykpIHtcbiAgICAgICRmb2N1c2VkLnNpYmxpbmdzKCkubGFzdCgpLmZvY3VzKClcbiAgICB9IGVsc2Uge1xuICAgICAgJGZvY3VzZWQucHJldigpLmZvY3VzKClcbiAgICB9XG4gIH1cblxuICBpZiAoZXZlbnQua2V5Q29kZSA9PSA0MCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIGlmICgkZm9jdXNlZC5pcygnOmxhc3QtY2hpbGQnKSkge1xuICAgICAgJGZvY3VzZWQuc2libGluZ3MoKS5maXJzdCgpLmZvY3VzKClcbiAgICB9IGVsc2Uge1xuICAgICAgJGZvY3VzZWQubmV4dCgpLmZvY3VzKClcbiAgICB9XG4gIH1cbn0pXG5cbiQod2luZG93KS5vbignbG9hZCcsICgpID0+IHtcbiAgU2lkZWJhclNlYXJjaC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJChTRUxFQ1RPUl9EQVRBX1dJREdFVCksICdpbml0Jylcbn0pXG5cbi8qKlxuICogalF1ZXJ5IEFQSVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbiQuZm5bTkFNRV0gPSBTaWRlYmFyU2VhcmNoLl9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBTaWRlYmFyU2VhcmNoXG4kLmZuW05BTUVdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIFNpZGViYXJTZWFyY2guX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyU2VhcmNoXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBBZG1pbkxURSBUb2FzdHMuanNcbiAqIExpY2Vuc2UgTUlUXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ1RvYXN0cydcbmNvbnN0IERBVEFfS0VZID0gJ2x0ZS50b2FzdHMnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXVxuXG5jb25zdCBFVkVOVF9JTklUID0gYGluaXQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DUkVBVEVEID0gYGNyZWF0ZWQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9SRU1PVkVEID0gYHJlbW92ZWQke0VWRU5UX0tFWX1gXG5cbmNvbnN0IFNFTEVDVE9SX0NPTlRBSU5FUl9UT1BfUklHSFQgPSAnI3RvYXN0c0NvbnRhaW5lclRvcFJpZ2h0J1xuY29uc3QgU0VMRUNUT1JfQ09OVEFJTkVSX1RPUF9MRUZUID0gJyN0b2FzdHNDb250YWluZXJUb3BMZWZ0J1xuY29uc3QgU0VMRUNUT1JfQ09OVEFJTkVSX0JPVFRPTV9SSUdIVCA9ICcjdG9hc3RzQ29udGFpbmVyQm90dG9tUmlnaHQnXG5jb25zdCBTRUxFQ1RPUl9DT05UQUlORVJfQk9UVE9NX0xFRlQgPSAnI3RvYXN0c0NvbnRhaW5lckJvdHRvbUxlZnQnXG5cbmNvbnN0IENMQVNTX05BTUVfVE9QX1JJR0hUID0gJ3RvYXN0cy10b3AtcmlnaHQnXG5jb25zdCBDTEFTU19OQU1FX1RPUF9MRUZUID0gJ3RvYXN0cy10b3AtbGVmdCdcbmNvbnN0IENMQVNTX05BTUVfQk9UVE9NX1JJR0hUID0gJ3RvYXN0cy1ib3R0b20tcmlnaHQnXG5jb25zdCBDTEFTU19OQU1FX0JPVFRPTV9MRUZUID0gJ3RvYXN0cy1ib3R0b20tbGVmdCdcblxuY29uc3QgUE9TSVRJT05fVE9QX1JJR0hUID0gJ3RvcFJpZ2h0J1xuY29uc3QgUE9TSVRJT05fVE9QX0xFRlQgPSAndG9wTGVmdCdcbmNvbnN0IFBPU0lUSU9OX0JPVFRPTV9SSUdIVCA9ICdib3R0b21SaWdodCdcbmNvbnN0IFBPU0lUSU9OX0JPVFRPTV9MRUZUID0gJ2JvdHRvbUxlZnQnXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIHBvc2l0aW9uOiBQT1NJVElPTl9UT1BfUklHSFQsXG4gIGZpeGVkOiB0cnVlLFxuICBhdXRvaGlkZTogZmFsc2UsXG4gIGF1dG9yZW1vdmU6IHRydWUsXG4gIGRlbGF5OiAxMDAwLFxuICBmYWRlOiB0cnVlLFxuICBpY29uOiBudWxsLFxuICBpbWFnZTogbnVsbCxcbiAgaW1hZ2VBbHQ6IG51bGwsXG4gIGltYWdlSGVpZ2h0OiAnMjVweCcsXG4gIHRpdGxlOiBudWxsLFxuICBzdWJ0aXRsZTogbnVsbCxcbiAgY2xvc2U6IHRydWUsXG4gIGJvZHk6IG51bGwsXG4gIGNsYXNzOiBudWxsXG59XG5cbi8qKlxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5jbGFzcyBUb2FzdHMge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWdcbiAgICB0aGlzLl9wcmVwYXJlQ29udGFpbmVyKClcblxuICAgICQoJ2JvZHknKS50cmlnZ2VyKCQuRXZlbnQoRVZFTlRfSU5JVCkpXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICBjcmVhdGUoKSB7XG4gICAgY29uc3QgdG9hc3QgPSAkKCc8ZGl2IGNsYXNzPVwidG9hc3RcIiByb2xlPVwiYWxlcnRcIiBhcmlhLWxpdmU9XCJhc3NlcnRpdmVcIiBhcmlhLWF0b21pYz1cInRydWVcIi8+JylcblxuICAgIHRvYXN0LmRhdGEoJ2F1dG9oaWRlJywgdGhpcy5fY29uZmlnLmF1dG9oaWRlKVxuICAgIHRvYXN0LmRhdGEoJ2FuaW1hdGlvbicsIHRoaXMuX2NvbmZpZy5mYWRlKVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5jbGFzcykge1xuICAgICAgdG9hc3QuYWRkQ2xhc3ModGhpcy5fY29uZmlnLmNsYXNzKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcuZGVsYXkgJiYgdGhpcy5fY29uZmlnLmRlbGF5ICE9IDUwMCkge1xuICAgICAgdG9hc3QuZGF0YSgnZGVsYXknLCB0aGlzLl9jb25maWcuZGVsYXkpXG4gICAgfVxuXG4gICAgY29uc3QgdG9hc3RIZWFkZXIgPSAkKCc8ZGl2IGNsYXNzPVwidG9hc3QtaGVhZGVyXCI+JylcblxuICAgIGlmICh0aGlzLl9jb25maWcuaW1hZ2UgIT0gbnVsbCkge1xuICAgICAgY29uc3QgdG9hc3RJbWFnZSA9ICQoJzxpbWcgLz4nKS5hZGRDbGFzcygncm91bmRlZCBtci0yJykuYXR0cignc3JjJywgdGhpcy5fY29uZmlnLmltYWdlKS5hdHRyKCdhbHQnLCB0aGlzLl9jb25maWcuaW1hZ2VBbHQpXG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcuaW1hZ2VIZWlnaHQgIT0gbnVsbCkge1xuICAgICAgICB0b2FzdEltYWdlLmhlaWdodCh0aGlzLl9jb25maWcuaW1hZ2VIZWlnaHQpLndpZHRoKCdhdXRvJylcbiAgICAgIH1cblxuICAgICAgdG9hc3RIZWFkZXIuYXBwZW5kKHRvYXN0SW1hZ2UpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5pY29uICE9IG51bGwpIHtcbiAgICAgIHRvYXN0SGVhZGVyLmFwcGVuZCgkKCc8aSAvPicpLmFkZENsYXNzKCdtci0yJykuYWRkQ2xhc3ModGhpcy5fY29uZmlnLmljb24pKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcudGl0bGUgIT0gbnVsbCkge1xuICAgICAgdG9hc3RIZWFkZXIuYXBwZW5kKCQoJzxzdHJvbmcgLz4nKS5hZGRDbGFzcygnbXItYXV0bycpLmh0bWwodGhpcy5fY29uZmlnLnRpdGxlKSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnN1YnRpdGxlICE9IG51bGwpIHtcbiAgICAgIHRvYXN0SGVhZGVyLmFwcGVuZCgkKCc8c21hbGwgLz4nKS5odG1sKHRoaXMuX2NvbmZpZy5zdWJ0aXRsZSkpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5jbG9zZSA9PSB0cnVlKSB7XG4gICAgICBjb25zdCB0b2FzdENsb3NlID0gJCgnPGJ1dHRvbiBkYXRhLWRpc21pc3M9XCJ0b2FzdFwiIC8+JykuYXR0cigndHlwZScsICdidXR0b24nKS5hZGRDbGFzcygnbWwtMiBtYi0xIGNsb3NlJykuYXR0cignYXJpYS1sYWJlbCcsICdDbG9zZScpLmFwcGVuZCgnPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj4nKVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLnRpdGxlID09IG51bGwpIHtcbiAgICAgICAgdG9hc3RDbG9zZS50b2dnbGVDbGFzcygnbWwtMiBtbC1hdXRvJylcbiAgICAgIH1cblxuICAgICAgdG9hc3RIZWFkZXIuYXBwZW5kKHRvYXN0Q2xvc2UpXG4gICAgfVxuXG4gICAgdG9hc3QuYXBwZW5kKHRvYXN0SGVhZGVyKVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5ib2R5ICE9IG51bGwpIHtcbiAgICAgIHRvYXN0LmFwcGVuZCgkKCc8ZGl2IGNsYXNzPVwidG9hc3QtYm9keVwiIC8+JykuaHRtbCh0aGlzLl9jb25maWcuYm9keSkpXG4gICAgfVxuXG4gICAgJCh0aGlzLl9nZXRDb250YWluZXJJZCgpKS5wcmVwZW5kKHRvYXN0KVxuXG4gICAgY29uc3QgJGJvZHkgPSAkKCdib2R5JylcblxuICAgICRib2R5LnRyaWdnZXIoJC5FdmVudChFVkVOVF9DUkVBVEVEKSlcbiAgICB0b2FzdC50b2FzdCgnc2hvdycpXG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmF1dG9yZW1vdmUpIHtcbiAgICAgIHRvYXN0Lm9uKCdoaWRkZW4uYnMudG9hc3QnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuZGVsYXkoMjAwKS5yZW1vdmUoKVxuICAgICAgICAkYm9keS50cmlnZ2VyKCQuRXZlbnQoRVZFTlRfUkVNT1ZFRCkpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIF9nZXRDb250YWluZXJJZCgpIHtcbiAgICBpZiAodGhpcy5fY29uZmlnLnBvc2l0aW9uID09IFBPU0lUSU9OX1RPUF9SSUdIVCkge1xuICAgICAgcmV0dXJuIFNFTEVDVE9SX0NPTlRBSU5FUl9UT1BfUklHSFRcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnBvc2l0aW9uID09IFBPU0lUSU9OX1RPUF9MRUZUKSB7XG4gICAgICByZXR1cm4gU0VMRUNUT1JfQ09OVEFJTkVSX1RPUF9MRUZUXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5wb3NpdGlvbiA9PSBQT1NJVElPTl9CT1RUT01fUklHSFQpIHtcbiAgICAgIHJldHVybiBTRUxFQ1RPUl9DT05UQUlORVJfQk9UVE9NX1JJR0hUXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5wb3NpdGlvbiA9PSBQT1NJVElPTl9CT1RUT01fTEVGVCkge1xuICAgICAgcmV0dXJuIFNFTEVDVE9SX0NPTlRBSU5FUl9CT1RUT01fTEVGVFxuICAgIH1cbiAgfVxuXG4gIF9wcmVwYXJlQ29udGFpbmVyKCkge1xuICAgIGlmICgkKHRoaXMuX2dldENvbnRhaW5lcklkKCkpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gJCgnPGRpdiAvPicpLmF0dHIoJ2lkJywgdGhpcy5fZ2V0Q29udGFpbmVySWQoKS5yZXBsYWNlKCcjJywgJycpKVxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5wb3NpdGlvbiA9PSBQT1NJVElPTl9UT1BfUklHSFQpIHtcbiAgICAgICAgY29udGFpbmVyLmFkZENsYXNzKENMQVNTX05BTUVfVE9QX1JJR0hUKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9jb25maWcucG9zaXRpb24gPT0gUE9TSVRJT05fVE9QX0xFRlQpIHtcbiAgICAgICAgY29udGFpbmVyLmFkZENsYXNzKENMQVNTX05BTUVfVE9QX0xFRlQpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2NvbmZpZy5wb3NpdGlvbiA9PSBQT1NJVElPTl9CT1RUT01fUklHSFQpIHtcbiAgICAgICAgY29udGFpbmVyLmFkZENsYXNzKENMQVNTX05BTUVfQk9UVE9NX1JJR0hUKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9jb25maWcucG9zaXRpb24gPT0gUE9TSVRJT05fQk9UVE9NX0xFRlQpIHtcbiAgICAgICAgY29udGFpbmVyLmFkZENsYXNzKENMQVNTX05BTUVfQk9UVE9NX0xFRlQpXG4gICAgICB9XG5cbiAgICAgICQoJ2JvZHknKS5hcHBlbmQoY29udGFpbmVyKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcuZml4ZWQpIHtcbiAgICAgICQodGhpcy5fZ2V0Q29udGFpbmVySWQoKSkuYWRkQ2xhc3MoJ2ZpeGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgJCh0aGlzLl9nZXRDb250YWluZXJJZCgpKS5yZW1vdmVDbGFzcygnZml4ZWQnKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKG9wdGlvbiwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBfb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCBjb25maWcpXG4gICAgICBjb25zdCB0b2FzdCA9IG5ldyBUb2FzdHMoJCh0aGlzKSwgX29wdGlvbnMpXG5cbiAgICAgIGlmIChvcHRpb24gPT09ICdjcmVhdGUnKSB7XG4gICAgICAgIHRvYXN0W29wdGlvbl0oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBqUXVlcnkgQVBJXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuJC5mbltOQU1FXSA9IFRvYXN0cy5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gVG9hc3RzXG4kLmZuW05BTUVdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIFRvYXN0cy5falF1ZXJ5SW50ZXJmYWNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvYXN0c1xuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQWRtaW5MVEUgVG9kb0xpc3QuanNcbiAqIExpY2Vuc2UgTUlUXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ1RvZG9MaXN0J1xuY29uc3QgREFUQV9LRVkgPSAnbHRlLnRvZG9saXN0J1xuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXVxuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS13aWRnZXQ9XCJ0b2RvLWxpc3RcIl0nXG5jb25zdCBDTEFTU19OQU1FX1RPRE9fTElTVF9ET05FID0gJ2RvbmUnXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIG9uQ2hlY2soaXRlbSkge1xuICAgIHJldHVybiBpdGVtXG4gIH0sXG4gIG9uVW5DaGVjayhpdGVtKSB7XG4gICAgcmV0dXJuIGl0ZW1cbiAgfVxufVxuXG4vKipcbiAqIENsYXNzIERlZmluaXRpb25cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5jbGFzcyBUb2RvTGlzdCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZ1xuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG5cbiAgICB0aGlzLl9pbml0KClcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHRvZ2dsZShpdGVtKSB7XG4gICAgaXRlbS5wYXJlbnRzKCdsaScpLnRvZ2dsZUNsYXNzKENMQVNTX05BTUVfVE9ET19MSVNUX0RPTkUpXG4gICAgaWYgKCEkKGl0ZW0pLnByb3AoJ2NoZWNrZWQnKSkge1xuICAgICAgdGhpcy51bkNoZWNrKCQoaXRlbSkpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoZWNrKGl0ZW0pXG4gIH1cblxuICBjaGVjayhpdGVtKSB7XG4gICAgdGhpcy5fY29uZmlnLm9uQ2hlY2suY2FsbChpdGVtKVxuICB9XG5cbiAgdW5DaGVjayhpdGVtKSB7XG4gICAgdGhpcy5fY29uZmlnLm9uVW5DaGVjay5jYWxsKGl0ZW0pXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2luaXQoKSB7XG4gICAgY29uc3QgJHRvZ2dsZVNlbGVjdG9yID0gdGhpcy5fZWxlbWVudFxuXG4gICAgJHRvZ2dsZVNlbGVjdG9yLmZpbmQoJ2lucHV0OmNoZWNrYm94OmNoZWNrZWQnKS5wYXJlbnRzKCdsaScpLnRvZ2dsZUNsYXNzKENMQVNTX05BTUVfVE9ET19MSVNUX0RPTkUpXG4gICAgJHRvZ2dsZVNlbGVjdG9yLm9uKCdjaGFuZ2UnLCAnaW5wdXQ6Y2hlY2tib3gnLCBldmVudCA9PiB7XG4gICAgICB0aGlzLnRvZ2dsZSgkKGV2ZW50LnRhcmdldCkpXG4gICAgfSlcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gJCh0aGlzKS5kYXRhKClcbiAgICAgIH1cblxuICAgICAgY29uc3QgX29wdGlvbnMgPSAkLmV4dGVuZCh7fSwgRGVmYXVsdCwgdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiBkYXRhKVxuICAgICAgY29uc3QgcGx1Z2luID0gbmV3IFRvZG9MaXN0KCQodGhpcyksIF9vcHRpb25zKVxuXG4gICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDogZGF0YSlcblxuICAgICAgaWYgKGNvbmZpZyA9PT0gJ2luaXQnKSB7XG4gICAgICAgIHBsdWdpbltjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogRGF0YSBBUElcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG4kKHdpbmRvdykub24oJ2xvYWQnLCAoKSA9PiB7XG4gIFRvZG9MaXN0Ll9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKFNFTEVDVE9SX0RBVEFfVE9HR0xFKSlcbn0pXG5cbi8qKlxuICogalF1ZXJ5IEFQSVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbiQuZm5bTkFNRV0gPSBUb2RvTGlzdC5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gVG9kb0xpc3RcbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gVG9kb0xpc3QuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQWRtaW5MVEUgVHJlZXZpZXcuanNcbiAqIExpY2Vuc2UgTUlUXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ1RyZWV2aWV3J1xuY29uc3QgREFUQV9LRVkgPSAnbHRlLnRyZWV2aWV3J1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV1cblxuY29uc3QgRVZFTlRfRVhQQU5ERUQgPSBgZXhwYW5kZWQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DT0xMQVBTRUQgPSBgY29sbGFwc2VkJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTE9BRF9EQVRBX0FQSSA9IGBsb2FkJHtFVkVOVF9LRVl9YFxuXG5jb25zdCBTRUxFQ1RPUl9MSSA9ICcubmF2LWl0ZW0nXG5jb25zdCBTRUxFQ1RPUl9MSU5LID0gJy5uYXYtbGluaydcbmNvbnN0IFNFTEVDVE9SX1RSRUVWSUVXX01FTlUgPSAnLm5hdi10cmVldmlldydcbmNvbnN0IFNFTEVDVE9SX09QRU4gPSAnLm1lbnUtb3BlbidcbmNvbnN0IFNFTEVDVE9SX0RBVEFfV0lER0VUID0gJ1tkYXRhLXdpZGdldD1cInRyZWV2aWV3XCJdJ1xuXG5jb25zdCBDTEFTU19OQU1FX09QRU4gPSAnbWVudS1vcGVuJ1xuY29uc3QgQ0xBU1NfTkFNRV9JU19PUEVOSU5HID0gJ21lbnUtaXMtb3BlbmluZydcbmNvbnN0IENMQVNTX05BTUVfU0lERUJBUl9DT0xMQVBTRUQgPSAnc2lkZWJhci1jb2xsYXBzZSdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgdHJpZ2dlcjogYCR7U0VMRUNUT1JfREFUQV9XSURHRVR9ICR7U0VMRUNUT1JfTElOS31gLFxuICBhbmltYXRpb25TcGVlZDogMzAwLFxuICBhY2NvcmRpb246IHRydWUsXG4gIGV4cGFuZFNpZGViYXI6IGZhbHNlLFxuICBzaWRlYmFyQnV0dG9uU2VsZWN0b3I6ICdbZGF0YS13aWRnZXQ9XCJwdXNobWVudVwiXSdcbn1cblxuLyoqXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cbmNsYXNzIFRyZWV2aWV3IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnXG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIGluaXQoKSB7XG4gICAgJChgJHtTRUxFQ1RPUl9MSX0ke1NFTEVDVE9SX09QRU59ICR7U0VMRUNUT1JfVFJFRVZJRVdfTUVOVX1gKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKVxuICAgIHRoaXMuX3NldHVwTGlzdGVuZXJzKClcbiAgfVxuXG4gIGV4cGFuZCh0cmVldmlld01lbnUsIHBhcmVudExpKSB7XG4gICAgY29uc3QgZXhwYW5kZWRFdmVudCA9ICQuRXZlbnQoRVZFTlRfRVhQQU5ERUQpXG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmFjY29yZGlvbikge1xuICAgICAgY29uc3Qgb3Blbk1lbnVMaSA9IHBhcmVudExpLnNpYmxpbmdzKFNFTEVDVE9SX09QRU4pLmZpcnN0KClcbiAgICAgIGNvbnN0IG9wZW5UcmVldmlldyA9IG9wZW5NZW51TGkuZmluZChTRUxFQ1RPUl9UUkVFVklFV19NRU5VKS5maXJzdCgpXG4gICAgICB0aGlzLmNvbGxhcHNlKG9wZW5UcmVldmlldywgb3Blbk1lbnVMaSlcbiAgICB9XG5cbiAgICBwYXJlbnRMaS5hZGRDbGFzcyhDTEFTU19OQU1FX0lTX09QRU5JTkcpXG4gICAgdHJlZXZpZXdNZW51LnN0b3AoKS5zbGlkZURvd24odGhpcy5fY29uZmlnLmFuaW1hdGlvblNwZWVkLCAoKSA9PiB7XG4gICAgICBwYXJlbnRMaS5hZGRDbGFzcyhDTEFTU19OQU1FX09QRU4pXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoZXhwYW5kZWRFdmVudClcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5leHBhbmRTaWRlYmFyKSB7XG4gICAgICB0aGlzLl9leHBhbmRTaWRlYmFyKClcbiAgICB9XG4gIH1cblxuICBjb2xsYXBzZSh0cmVldmlld01lbnUsIHBhcmVudExpKSB7XG4gICAgY29uc3QgY29sbGFwc2VkRXZlbnQgPSAkLkV2ZW50KEVWRU5UX0NPTExBUFNFRClcblxuICAgIHBhcmVudExpLnJlbW92ZUNsYXNzKGAke0NMQVNTX05BTUVfSVNfT1BFTklOR30gJHtDTEFTU19OQU1FX09QRU59YClcbiAgICB0cmVldmlld01lbnUuc3RvcCgpLnNsaWRlVXAodGhpcy5fY29uZmlnLmFuaW1hdGlvblNwZWVkLCAoKSA9PiB7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoY29sbGFwc2VkRXZlbnQpXG4gICAgICB0cmVldmlld01lbnUuZmluZChgJHtTRUxFQ1RPUl9PUEVOfSA+ICR7U0VMRUNUT1JfVFJFRVZJRVdfTUVOVX1gKS5zbGlkZVVwKClcbiAgICAgIHRyZWV2aWV3TWVudS5maW5kKFNFTEVDVE9SX09QRU4pLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfT1BFTilcbiAgICB9KVxuICB9XG5cbiAgdG9nZ2xlKGV2ZW50KSB7XG4gICAgY29uc3QgJHJlbGF0aXZlVGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KVxuICAgIGNvbnN0ICRwYXJlbnQgPSAkcmVsYXRpdmVUYXJnZXQucGFyZW50KClcblxuICAgIGxldCB0cmVldmlld01lbnUgPSAkcGFyZW50LmZpbmQoYD4gJHtTRUxFQ1RPUl9UUkVFVklFV19NRU5VfWApXG5cbiAgICBpZiAoIXRyZWV2aWV3TWVudS5pcyhTRUxFQ1RPUl9UUkVFVklFV19NRU5VKSkge1xuICAgICAgaWYgKCEkcGFyZW50LmlzKFNFTEVDVE9SX0xJKSkge1xuICAgICAgICB0cmVldmlld01lbnUgPSAkcGFyZW50LnBhcmVudCgpLmZpbmQoYD4gJHtTRUxFQ1RPUl9UUkVFVklFV19NRU5VfWApXG4gICAgICB9XG5cbiAgICAgIGlmICghdHJlZXZpZXdNZW51LmlzKFNFTEVDVE9SX1RSRUVWSUVXX01FTlUpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIGNvbnN0IHBhcmVudExpID0gJHJlbGF0aXZlVGFyZ2V0LnBhcmVudHMoU0VMRUNUT1JfTEkpLmZpcnN0KClcbiAgICBjb25zdCBpc09wZW4gPSBwYXJlbnRMaS5oYXNDbGFzcyhDTEFTU19OQU1FX09QRU4pXG5cbiAgICBpZiAoaXNPcGVuKSB7XG4gICAgICB0aGlzLmNvbGxhcHNlKCQodHJlZXZpZXdNZW51KSwgcGFyZW50TGkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXhwYW5kKCQodHJlZXZpZXdNZW51KSwgcGFyZW50TGkpXG4gICAgfVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9zZXR1cExpc3RlbmVycygpIHtcbiAgICBjb25zdCBlbGVtZW50SWQgPSB0aGlzLl9lbGVtZW50LmF0dHIoJ2lkJykgIT09IHVuZGVmaW5lZCA/IGAjJHt0aGlzLl9lbGVtZW50LmF0dHIoJ2lkJyl9YCA6ICcnXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgYCR7ZWxlbWVudElkfSR7dGhpcy5fY29uZmlnLnRyaWdnZXJ9YCwgZXZlbnQgPT4ge1xuICAgICAgdGhpcy50b2dnbGUoZXZlbnQpXG4gICAgfSlcbiAgfVxuXG4gIF9leHBhbmRTaWRlYmFyKCkge1xuICAgIGlmICgkKCdib2R5JykuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9TSURFQkFSX0NPTExBUFNFRCkpIHtcbiAgICAgICQodGhpcy5fY29uZmlnLnNpZGViYXJCdXR0b25TZWxlY3RvcikuUHVzaE1lbnUoJ2V4cGFuZCcpXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcbiAgICAgIGNvbnN0IF9vcHRpb25zID0gJC5leHRlbmQoe30sIERlZmF1bHQsICQodGhpcykuZGF0YSgpKVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBUcmVldmlldygkKHRoaXMpLCBfb3B0aW9ucylcbiAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnID09PSAnaW5pdCcpIHtcbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogRGF0YSBBUElcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG4kKHdpbmRvdykub24oRVZFTlRfTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICAkKFNFTEVDVE9SX0RBVEFfV0lER0VUKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICBUcmVldmlldy5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0aGlzKSwgJ2luaXQnKVxuICB9KVxufSlcblxuLyoqXG4gKiBqUXVlcnkgQVBJXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuJC5mbltOQU1FXSA9IFRyZWV2aWV3Ll9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBUcmVldmlld1xuJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gIHJldHVybiBUcmVldmlldy5falF1ZXJ5SW50ZXJmYWNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyZWV2aWV3XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciAkcGFyc2VGbG9hdCA9IGdsb2JhbC5wYXJzZUZsb2F0O1xudmFyIEZPUkNFRCA9IDEgLyAkcGFyc2VGbG9hdCh3aGl0ZXNwYWNlcyArICctMCcpICE9PSAtSW5maW5pdHk7XG5cbi8vIGBwYXJzZUZsb2F0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcGFyc2VmbG9hdC1zdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gRk9SQ0VEID8gZnVuY3Rpb24gcGFyc2VGbG9hdChzdHJpbmcpIHtcbiAgdmFyIHRyaW1tZWRTdHJpbmcgPSB0cmltKFN0cmluZyhzdHJpbmcpKTtcbiAgdmFyIHJlc3VsdCA9ICRwYXJzZUZsb2F0KHRyaW1tZWRTdHJpbmcpO1xuICByZXR1cm4gcmVzdWx0ID09PSAwICYmIHRyaW1tZWRTdHJpbmcuY2hhckF0KDApID09ICctJyA/IC0wIDogcmVzdWx0O1xufSA6ICRwYXJzZUZsb2F0O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB0cmltID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy10cmltJykudHJpbTtcbnZhciB3aGl0ZXNwYWNlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93aGl0ZXNwYWNlcycpO1xuXG52YXIgJHBhcnNlSW50ID0gZ2xvYmFsLnBhcnNlSW50O1xudmFyIGhleCA9IC9eWystXT8wW1h4XS87XG52YXIgRk9SQ0VEID0gJHBhcnNlSW50KHdoaXRlc3BhY2VzICsgJzA4JykgIT09IDggfHwgJHBhcnNlSW50KHdoaXRlc3BhY2VzICsgJzB4MTYnKSAhPT0gMjI7XG5cbi8vIGBwYXJzZUludGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXBhcnNlaW50LXN0cmluZy1yYWRpeFxubW9kdWxlLmV4cG9ydHMgPSBGT1JDRUQgPyBmdW5jdGlvbiBwYXJzZUludChzdHJpbmcsIHJhZGl4KSB7XG4gIHZhciBTID0gdHJpbShTdHJpbmcoc3RyaW5nKSk7XG4gIHJldHVybiAkcGFyc2VJbnQoUywgKHJhZGl4ID4+PiAwKSB8fCAoaGV4LnRlc3QoUykgPyAxNiA6IDEwKSk7XG59IDogJHBhcnNlSW50O1xuIiwiLy8gYFNhbWVWYWx1ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXNhbWV2YWx1ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1pcyAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5pcyB8fCBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gIHJldHVybiB4ID09PSB5ID8geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHkgOiB4ICE9IHggJiYgeSAhPSB5O1xufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciBub24gPSAnXFx1MjAwQlxcdTAwODVcXHUxODBFJztcblxuLy8gY2hlY2sgdGhhdCBhIG1ldGhvZCB3b3JrcyB3aXRoIHRoZSBjb3JyZWN0IGxpc3Rcbi8vIG9mIHdoaXRlc3BhY2VzIGFuZCBoYXMgYSBjb3JyZWN0IG5hbWVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FKSB7XG4gIHJldHVybiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICEhd2hpdGVzcGFjZXNbTUVUSE9EX05BTUVdKCkgfHwgbm9uW01FVEhPRF9OQU1FXSgpICE9IG5vbiB8fCB3aGl0ZXNwYWNlc1tNRVRIT0RfTkFNRV0ubmFtZSAhPT0gTUVUSE9EX05BTUU7XG4gIH0pO1xufTtcbiIsInZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciB3aGl0ZXNwYWNlID0gJ1snICsgd2hpdGVzcGFjZXMgKyAnXSc7XG52YXIgbHRyaW0gPSBSZWdFeHAoJ14nICsgd2hpdGVzcGFjZSArIHdoaXRlc3BhY2UgKyAnKicpO1xudmFyIHJ0cmltID0gUmVnRXhwKHdoaXRlc3BhY2UgKyB3aGl0ZXNwYWNlICsgJyokJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbSwgdHJpbVN0YXJ0LCB0cmltRW5kLCB0cmltTGVmdCwgdHJpbVJpZ2h0IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzKSB7XG4gICAgdmFyIHN0cmluZyA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKCR0aGlzKSk7XG4gICAgaWYgKFRZUEUgJiAxKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShsdHJpbSwgJycpO1xuICAgIGlmIChUWVBFICYgMikgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UocnRyaW0sICcnKTtcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbUxlZnQsIHRyaW1TdGFydCB9YCBtZXRob2RzXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltc3RhcnRcbiAgc3RhcnQ6IGNyZWF0ZU1ldGhvZCgxKSxcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltUmlnaHQsIHRyaW1FbmQgfWAgbWV0aG9kc1xuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbWVuZFxuICBlbmQ6IGNyZWF0ZU1ldGhvZCgyKSxcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUudHJpbWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltXG4gIHRyaW06IGNyZWF0ZU1ldGhvZCgzKVxufTtcbiIsIi8vIGEgc3RyaW5nIG9mIGFsbCB2YWxpZCB1bmljb2RlIHdoaXRlc3BhY2VzXG5tb2R1bGUuZXhwb3J0cyA9ICdcXHUwMDA5XFx1MDAwQVxcdTAwMEJcXHUwMDBDXFx1MDAwRFxcdTAwMjBcXHUwMEEwXFx1MTY4MFxcdTIwMDBcXHUyMDAxXFx1MjAwMicgK1xuICAnXFx1MjAwM1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMEFcXHUyMDJGXFx1MjA1RlxcdTMwMDBcXHUyMDI4XFx1MjAyOVxcdUZFRkYnO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xuXG52YXIgbmF0aXZlSm9pbiA9IFtdLmpvaW47XG5cbnZhciBFUzNfU1RSSU5HUyA9IEluZGV4ZWRPYmplY3QgIT0gT2JqZWN0O1xudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdqb2luJywgJywnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5qb2luYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmpvaW5cbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEVTM19TVFJJTkdTIHx8ICFTVFJJQ1RfTUVUSE9EIH0sIHtcbiAgam9pbjogZnVuY3Rpb24gam9pbihzZXBhcmF0b3IpIHtcbiAgICByZXR1cm4gbmF0aXZlSm9pbi5jYWxsKHRvSW5kZXhlZE9iamVjdCh0aGlzKSwgc2VwYXJhdG9yID09PSB1bmRlZmluZWQgPyAnLCcgOiBzZXBhcmF0b3IpO1xuICB9XG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIG5hdGl2ZUtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG52YXIgRkFJTFNfT05fUFJJTUlUSVZFUyA9IGZhaWxzKGZ1bmN0aW9uICgpIHsgbmF0aXZlS2V5cygxKTsgfSk7XG5cbi8vIGBPYmplY3Qua2V5c2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5rZXlzXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBGQUlMU19PTl9QUklNSVRJVkVTIH0sIHtcbiAga2V5czogZnVuY3Rpb24ga2V5cyhpdCkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH1cbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgcGFyc2VGbG9hdEltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL251bWJlci1wYXJzZS1mbG9hdCcpO1xuXG4vLyBgcGFyc2VGbG9hdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXBhcnNlZmxvYXQtc3RyaW5nXG4kKHsgZ2xvYmFsOiB0cnVlLCBmb3JjZWQ6IHBhcnNlRmxvYXQgIT0gcGFyc2VGbG9hdEltcGxlbWVudGF0aW9uIH0sIHtcbiAgcGFyc2VGbG9hdDogcGFyc2VGbG9hdEltcGxlbWVudGF0aW9uXG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHBhcnNlSW50SW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbnVtYmVyLXBhcnNlLWludCcpO1xuXG4vLyBgcGFyc2VJbnRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1wYXJzZWludC1zdHJpbmctcmFkaXhcbiQoeyBnbG9iYWw6IHRydWUsIGZvcmNlZDogcGFyc2VJbnQgIT0gcGFyc2VJbnRJbXBsZW1lbnRhdGlvbiB9LCB7XG4gIHBhcnNlSW50OiBwYXJzZUludEltcGxlbWVudGF0aW9uXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGNyZWF0ZUhUTUwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLWh0bWwnKTtcbnZhciBmb3JjZWRTdHJpbmdIVE1MTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy1odG1sLWZvcmNlZCcpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS5maXhlZGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuZml4ZWRcbiQoeyB0YXJnZXQ6ICdTdHJpbmcnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBmb3JjZWRTdHJpbmdIVE1MTWV0aG9kKCdmaXhlZCcpIH0sIHtcbiAgZml4ZWQ6IGZ1bmN0aW9uIGZpeGVkKCkge1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICd0dCcsICcnLCAnJyk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgY3JlYXRlSFRNTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtaHRtbCcpO1xudmFyIGZvcmNlZFN0cmluZ0hUTUxNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLWh0bWwtZm9yY2VkJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLmxpbmtgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLmxpbmtcbiQoeyB0YXJnZXQ6ICdTdHJpbmcnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBmb3JjZWRTdHJpbmdIVE1MTWV0aG9kKCdsaW5rJykgfSwge1xuICBsaW5rOiBmdW5jdGlvbiBsaW5rKHVybCkge1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdhJywgJ2hyZWYnLCB1cmwpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmaXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBzYW1lVmFsdWUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2FtZS12YWx1ZScpO1xudmFyIHJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcblxuLy8gQEBzZWFyY2ggbG9naWNcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdzZWFyY2gnLCAxLCBmdW5jdGlvbiAoU0VBUkNILCBuYXRpdmVTZWFyY2gsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnNlYXJjaGAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnNlYXJjaFxuICAgIGZ1bmN0aW9uIHNlYXJjaChyZWdleHApIHtcbiAgICAgIHZhciBPID0gcmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKTtcbiAgICAgIHZhciBzZWFyY2hlciA9IHJlZ2V4cCA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiByZWdleHBbU0VBUkNIXTtcbiAgICAgIHJldHVybiBzZWFyY2hlciAhPT0gdW5kZWZpbmVkID8gc2VhcmNoZXIuY2FsbChyZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW1NFQVJDSF0oU3RyaW5nKE8pKTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAc2VhcmNoXWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAc2VhcmNoXG4gICAgZnVuY3Rpb24gKHJlZ2V4cCkge1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShuYXRpdmVTZWFyY2gsIHJlZ2V4cCwgdGhpcyk7XG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG5cbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHJlZ2V4cCk7XG4gICAgICB2YXIgUyA9IFN0cmluZyh0aGlzKTtcblxuICAgICAgdmFyIHByZXZpb3VzTGFzdEluZGV4ID0gcngubGFzdEluZGV4O1xuICAgICAgaWYgKCFzYW1lVmFsdWUocHJldmlvdXNMYXN0SW5kZXgsIDApKSByeC5sYXN0SW5kZXggPSAwO1xuICAgICAgdmFyIHJlc3VsdCA9IHJlZ0V4cEV4ZWMocngsIFMpO1xuICAgICAgaWYgKCFzYW1lVmFsdWUocngubGFzdEluZGV4LCBwcmV2aW91c0xhc3RJbmRleCkpIHJ4Lmxhc3RJbmRleCA9IHByZXZpb3VzTGFzdEluZGV4O1xuICAgICAgcmV0dXJuIHJlc3VsdCA9PT0gbnVsbCA/IC0xIDogcmVzdWx0LmluZGV4O1xuICAgIH1cbiAgXTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xudmFyIGZvcmNlZFN0cmluZ1RyaW1NZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0tZm9yY2VkJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnRyaW1gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1cbiQoeyB0YXJnZXQ6ICdTdHJpbmcnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBmb3JjZWRTdHJpbmdUcmltTWV0aG9kKCd0cmltJykgfSwge1xuICB0cmltOiBmdW5jdGlvbiB0cmltKCkge1xuICAgIHJldHVybiAkdHJpbSh0aGlzKTtcbiAgfVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9