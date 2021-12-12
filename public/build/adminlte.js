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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-6ea37d","vendors-node_modules_core-js_modules_es_array_filter_js-node_modules_core-js_modules_es_array-974e99"], () => (__webpack_exec__("./public/assets/js/adminlte.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vYnVpbGQvanMvQ2FyZFJlZnJlc2guanMiLCJ3ZWJwYWNrOi8vLy4uL2J1aWxkL2pzL0NhcmRXaWRnZXQuanMiLCJ3ZWJwYWNrOi8vLy4uL2J1aWxkL2pzL0NvbnRyb2xTaWRlYmFyLmpzIiwid2VicGFjazovLy8uLi9idWlsZC9qcy9EaXJlY3RDaGF0LmpzIiwid2VicGFjazovLy8uLi9idWlsZC9qcy9Ecm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vLi4vYnVpbGQvanMvRXhwYW5kYWJsZVRhYmxlLmpzIiwid2VicGFjazovLy8uLi9idWlsZC9qcy9GdWxsc2NyZWVuLmpzIiwid2VicGFjazovLy8uLi9idWlsZC9qcy9JRnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4uL2J1aWxkL2pzL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi4vYnVpbGQvanMvUHVzaE1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4uL2J1aWxkL2pzL1NpZGViYXJTZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4uL2J1aWxkL2pzL1RvYXN0cy5qcyIsIndlYnBhY2s6Ly8vLi4vYnVpbGQvanMvVG9kb0xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4uL2J1aWxkL2pzL1RyZWV2aWV3LmpzIl0sIm5hbWVzIjpbIk5BTUUiLCJEQVRBX0tFWSIsIkVWRU5UX0tFWSIsIkpRVUVSWV9OT19DT05GTElDVCIsIiQiLCJFVkVOVF9MT0FERUQiLCJFVkVOVF9PVkVSTEFZX0FEREVEIiwiRVZFTlRfT1ZFUkxBWV9SRU1PVkVEIiwiQ0xBU1NfTkFNRV9DQVJEIiwiU0VMRUNUT1JfQ0FSRCIsIlNFTEVDVE9SX0RBVEFfUkVGUkVTSCIsIkRlZmF1bHQiLCJzb3VyY2UiLCJzb3VyY2VTZWxlY3RvciIsInBhcmFtcyIsInRyaWdnZXIiLCJjb250ZW50IiwibG9hZEluQ29udGVudCIsImxvYWRPbkluaXQiLCJyZXNwb25zZVR5cGUiLCJvdmVybGF5VGVtcGxhdGUiLCJvbkxvYWRTdGFydCIsIm9uTG9hZERvbmUiLCJDYXJkUmVmcmVzaCIsImVsZW1lbnQiLCJsb2FkIiwicmVzcG9uc2UiLCJfYWRkT3ZlcmxheSIsIl9yZW1vdmVPdmVybGF5IiwiX2luaXQiLCJfalF1ZXJ5SW50ZXJmYWNlIiwiZGF0YSIsIl9vcHRpb25zIiwiY29uZmlnIiwiZXZlbnQiLCJFVkVOVF9FWFBBTkRFRCIsIkVWRU5UX0NPTExBUFNFRCIsIkVWRU5UX01BWElNSVpFRCIsIkVWRU5UX01JTklNSVpFRCIsIkVWRU5UX1JFTU9WRUQiLCJDTEFTU19OQU1FX0NPTExBUFNFRCIsIkNMQVNTX05BTUVfQ09MTEFQU0lORyIsIkNMQVNTX05BTUVfRVhQQU5ESU5HIiwiQ0xBU1NfTkFNRV9XQVNfQ09MTEFQU0VEIiwiQ0xBU1NfTkFNRV9NQVhJTUlaRUQiLCJTRUxFQ1RPUl9EQVRBX1JFTU9WRSIsIlNFTEVDVE9SX0RBVEFfQ09MTEFQU0UiLCJTRUxFQ1RPUl9EQVRBX01BWElNSVpFIiwiU0VMRUNUT1JfQ0FSRF9IRUFERVIiLCJTRUxFQ1RPUl9DQVJEX0JPRFkiLCJTRUxFQ1RPUl9DQVJEX0ZPT1RFUiIsImFuaW1hdGlvblNwZWVkIiwiY29sbGFwc2VUcmlnZ2VyIiwicmVtb3ZlVHJpZ2dlciIsIm1heGltaXplVHJpZ2dlciIsImNvbGxhcHNlSWNvbiIsImV4cGFuZEljb24iLCJtYXhpbWl6ZUljb24iLCJtaW5pbWl6ZUljb24iLCJDYXJkV2lkZ2V0IiwiY29sbGFwc2UiLCJleHBhbmQiLCJyZW1vdmUiLCJ0b2dnbGUiLCJtYXhpbWl6ZSIsImhlaWdodCIsIndpZHRoIiwidHJhbnNpdGlvbiIsIiRlbGVtZW50IiwibWluaW1pemUiLCJ0b2dnbGVNYXhpbWl6ZSIsIlNFTEVDVE9SX0NPTlRST0xfU0lERUJBUiIsIlNFTEVDVE9SX0NPTlRST0xfU0lERUJBUl9DT05URU5UIiwiU0VMRUNUT1JfREFUQV9UT0dHTEUiLCJTRUxFQ1RPUl9IRUFERVIiLCJTRUxFQ1RPUl9GT09URVIiLCJDTEFTU19OQU1FX0NPTlRST0xfU0lERUJBUl9BTklNQVRFIiwiQ0xBU1NfTkFNRV9DT05UUk9MX1NJREVCQVJfT1BFTiIsIkNMQVNTX05BTUVfQ09OVFJPTF9TSURFQkFSX1NMSURFIiwiQ0xBU1NfTkFNRV9MQVlPVVRfRklYRUQiLCJDTEFTU19OQU1FX05BVkJBUl9GSVhFRCIsIkNMQVNTX05BTUVfTkFWQkFSX1NNX0ZJWEVEIiwiQ0xBU1NfTkFNRV9OQVZCQVJfTURfRklYRUQiLCJDTEFTU19OQU1FX05BVkJBUl9MR19GSVhFRCIsIkNMQVNTX05BTUVfTkFWQkFSX1hMX0ZJWEVEIiwiQ0xBU1NfTkFNRV9GT09URVJfRklYRUQiLCJDTEFTU19OQU1FX0ZPT1RFUl9TTV9GSVhFRCIsIkNMQVNTX05BTUVfRk9PVEVSX01EX0ZJWEVEIiwiQ0xBU1NfTkFNRV9GT09URVJfTEdfRklYRUQiLCJDTEFTU19OQU1FX0ZPT1RFUl9YTF9GSVhFRCIsImNvbnRyb2xzaWRlYmFyU2xpZGUiLCJzY3JvbGxiYXJUaGVtZSIsInNjcm9sbGJhckF1dG9IaWRlIiwiQ29udHJvbFNpZGViYXIiLCIkYm9keSIsIiRodG1sIiwic2hvdyIsInNob3VsZENsb3NlIiwic2hvdWxkRml4SGVpZ2h0IiwiX2ZpeFNjcm9sbEhlaWdodCIsImhlaWdodHMiLCJzY3JvbGwiLCJ3aW5kb3ciLCJoZWFkZXIiLCJmb290ZXIiLCJwb3NpdGlvbnMiLCJib3R0b20iLCJNYXRoIiwidG9wIiwibmF2YmFyRml4ZWQiLCJmb290ZXJGaXhlZCIsIiRjb250cm9sU2lkZWJhciIsIiRjb250cm9sc2lkZWJhckNvbnRlbnQiLCJfZml4SGVpZ2h0Iiwic2lkZWJhckhlaWdodCIsImNsYXNzTmFtZSIsInNpemVBdXRvQ2FwYWJsZSIsInNjcm9sbGJhcnMiLCJhdXRvSGlkZSIsImNsaWNrU2Nyb2xsaW5nIiwib3BlcmF0aW9uIiwiRVZFTlRfVE9HR0xFRCIsIlNFTEVDVE9SX0RJUkVDVF9DSEFUIiwiQ0xBU1NfTkFNRV9ESVJFQ1RfQ0hBVF9PUEVOIiwiRGlyZWN0Q2hhdCIsIlNFTEVDVE9SX05BVkJBUiIsIlNFTEVDVE9SX0RST1BET1dOX01FTlUiLCJTRUxFQ1RPUl9EUk9QRE9XTl9NRU5VX0FDVElWRSIsIlNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSIsIkNMQVNTX05BTUVfRFJPUERPV05fUklHSFQiLCJDTEFTU19OQU1FX0RST1BET1dOX1NVQk1FTlUiLCJEcm9wZG93biIsInRvZ2dsZVN1Ym1lbnUiLCJmaXhQb3NpdGlvbiIsImxlZnQiLCJyaWdodCIsIm9mZnNldCIsInZpc2libGVQYXJ0IiwiX2NvbmZpZyIsInNldFRpbWVvdXQiLCJTRUxFQ1RPUl9UQUJMRSIsIlNFTEVDVE9SX0FSSUFfQVRUUiIsIkV4cGFuZGFibGVUYWJsZSIsImluaXQiLCIkdHlwZSIsInRvZ2dsZVJvdyIsInRpbWUiLCJTRUxFQ1RPUl9EQVRBX1dJREdFVCIsIlNFTEVDVE9SX0lDT04iLCJGdWxsc2NyZWVuIiwiZG9jdW1lbnQiLCJmdWxsc2NyZWVuIiwid2luZG93ZWQiLCJwbHVnaW4iLCJTRUxFQ1RPUl9EQVRBX1RPR0dMRV9DTE9TRSIsIlNFTEVDVE9SX0RBVEFfVE9HR0xFX1NDUk9MTF9MRUZUIiwiU0VMRUNUT1JfREFUQV9UT0dHTEVfU0NST0xMX1JJR0hUIiwiU0VMRUNUT1JfREFUQV9UT0dHTEVfRlVMTFNDUkVFTiIsIlNFTEVDVE9SX0NPTlRFTlRfV1JBUFBFUiIsIlNFTEVDVE9SX0NPTlRFTlRfSUZSQU1FIiwiU0VMRUNUT1JfVEFCX05BViIsIlNFTEVDVE9SX1RBQl9OQVZCQVJfTkFWIiwiU0VMRUNUT1JfVEFCX05BVkJBUl9OQVZfSVRFTSIsIlNFTEVDVE9SX1RBQl9DT05URU5UIiwiU0VMRUNUT1JfVEFCX0VNUFRZIiwiU0VMRUNUT1JfVEFCX0xPQURJTkciLCJTRUxFQ1RPUl9TSURFQkFSX01FTlVfSVRFTSIsIlNFTEVDVE9SX0hFQURFUl9NRU5VX0lURU0iLCJTRUxFQ1RPUl9IRUFERVJfRFJPUERPV05fSVRFTSIsIkNMQVNTX05BTUVfSUZSQU1FX01PREUiLCJDTEFTU19OQU1FX0ZVTExTQ1JFRU5fTU9ERSIsIm9uVGFiQ2xpY2siLCJvblRhYkNoYW5nZWQiLCJvblRhYkNyZWF0ZWQiLCJhdXRvSWZyYW1lTW9kZSIsImF1dG9JdGVtQWN0aXZlIiwiYXV0b1Nob3dOZXdUYWIiLCJsb2FkaW5nU2NyZWVuIiwidXNlTmF2YmFySXRlbXMiLCJzY3JvbGxPZmZzZXQiLCJzY3JvbGxCZWhhdmlvclN3YXAiLCJpY29uTWF4aW1pemUiLCJpY29uTWluaW1pemUiLCJJRnJhbWUiLCJjcmVhdGVUYWIiLCJ0YWJJZCIsIm5hdklkIiwibmV3TmF2SXRlbSIsIm5ld1RhYkl0ZW0iLCIkbG9hZGluZ1NjcmVlbiIsIm9wZW5UYWJTaWRlYmFyIiwiYXV0b09wZW4iLCIkaXRlbSIsInRpdGxlIiwibGluayIsInN3aXRjaFRhYiIsInJlbW92ZUFjdGl2ZVRhYiIsIiRuYXZJdGVtIiwiJG5hdkl0ZW1QYXJlbnQiLCJuYXZJdGVtSW5kZXgiLCJwcmV2TmF2SXRlbUluZGV4IiwidG9nZ2xlRnVsbHNjcmVlbiIsIl9uYXZTY3JvbGwiLCJsZWZ0UG9zIiwic2Nyb2xsTGVmdCIsIl9zZXR1cExpc3RlbmVycyIsImUiLCJtb3VzZWRvd24iLCJtb3VzZWRvd25JbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsIl9zZXRJdGVtQWN0aXZlIiwiJGhlYWRlck1lbnVJdGVtIiwiJGhlYWRlckRyb3Bkb3duSXRlbSIsIiRzaWRlYmFyTWVudUl0ZW0iLCJ0YWJFbXB0eSIsIndpbmRvd0hlaWdodCIsImNvbnRlbnRXcmFwcGVySGVpZ2h0IiwicGFyc2VGbG9hdCIsIm5hdmJhckhlaWdodCIsImFyZ3MiLCJTRUxFQ1RPUl9NQUlOX1NJREVCQVIiLCJTRUxFQ1RPUl9TSURFQkFSIiwiU0VMRUNUT1JfQ09OVEVOVCIsIlNFTEVDVE9SX0NPTlRST0xfU0lERUJBUl9CVE4iLCJTRUxFQ1RPUl9QVVNITUVOVV9CVE4iLCJTRUxFQ1RPUl9MT0dJTl9CT1giLCJTRUxFQ1RPUl9SRUdJU1RFUl9CT1giLCJDTEFTU19OQU1FX1NJREVCQVJfRk9DVVNFRCIsIkNMQVNTX05BTUVfQ09OVFJPTF9TSURFQkFSX1NMSURFX09QRU4iLCJDTEFTU19OQU1FX0xBWU9VVF9UT1BfTkFWIiwicGFuZWxBdXRvSGVpZ2h0IiwicGFuZWxBdXRvSGVpZ2h0TW9kZSIsImxvZ2luUmVnaXN0ZXJBdXRvSGVpZ2h0IiwiTGF5b3V0IiwiZml4TGF5b3V0SGVpZ2h0IiwiZXh0cmEiLCJjb250cm9sU2lkZWJhciIsInNpZGViYXIiLCJtYXgiLCIkY29udGVudFNlbGVjdG9yIiwiZml4TG9naW5SZWdpc3RlckhlaWdodCIsIiRzZWxlY3RvciIsImJveEhlaWdodCIsInBhcnNlSW50IiwiX21heCIsIk9iamVjdCIsIm51bWJlcnMiLCJfaXNGb290ZXJGaXhlZCIsIkVWRU5UX1NIT1dOIiwiU0VMRUNUT1JfVE9HR0xFX0JVVFRPTiIsIlNFTEVDVE9SX0JPRFkiLCJTRUxFQ1RPUl9PVkVSTEFZIiwiU0VMRUNUT1JfV1JBUFBFUiIsIkNMQVNTX05BTUVfT1BFTiIsIkNMQVNTX05BTUVfSVNfT1BFTklORyIsIkNMQVNTX05BTUVfQ0xPU0VEIiwiYXV0b0NvbGxhcHNlU2l6ZSIsImVuYWJsZVJlbWVtYmVyIiwibm9UcmFuc2l0aW9uQWZ0ZXJSZWxvYWQiLCJQdXNoTWVudSIsIiRib2R5U2VsZWN0b3IiLCJsb2NhbFN0b3JhZ2UiLCJhdXRvQ29sbGFwc2UiLCJyZXNpemUiLCJyZW1lbWJlciIsInRvZ2dsZVN0YXRlIiwib3ZlcmxheSIsImlkIiwiYnV0dG9uIiwiQ0xBU1NfTkFNRV9JQ09OX1NFQVJDSCIsIkNMQVNTX05BTUVfSUNPTl9DTE9TRSIsIkNMQVNTX05BTUVfSEVBREVSIiwiQ0xBU1NfTkFNRV9TRUFSQ0hfUkVTVUxUUyIsIkNMQVNTX05BTUVfTElTVF9HUk9VUCIsIlNFTEVDVE9SX05BVl9MSU5LIiwiU0VMRUNUT1JfTkFWX1RSRUVWSUVXIiwiU0VMRUNUT1JfU0VBUkNIX0lOUFVUIiwiU0VMRUNUT1JfU0VBUkNIX0JVVFRPTiIsIlNFTEVDVE9SX1NFQVJDSF9JQ09OIiwiU0VMRUNUT1JfU0VBUkNIX0xJU1RfR1JPVVAiLCJTRUxFQ1RPUl9TRUFSQ0hfUkVTVUxUUyIsIlNFTEVDVE9SX1NFQVJDSF9SRVNVTFRTX0dST1VQIiwiYXJyb3dTaWduIiwibWluTGVuZ3RoIiwibWF4UmVzdWx0cyIsImhpZ2hsaWdodE5hbWUiLCJoaWdobGlnaHRQYXRoIiwiaGlnaGxpZ2h0Q2xhc3MiLCJub3RGb3VuZFRleHQiLCJTZWFyY2hJdGVtcyIsIlNpZGViYXJTZWFyY2giLCJjbGFzcyIsInNlYXJjaCIsInNlYXJjaFZhbHVlIiwic2VhcmNoUmVzdWx0cyIsIml0ZW0iLCJlbmRSZXN1bHRzIiwicmVzdWx0Iiwib3BlbiIsImNsb3NlIiwiX3BhcnNlSXRlbSIsInBhdGgiLCJpdGVtT2JqZWN0IiwibmF2TGluayIsIm5hdlRyZWV2aWV3IiwibmFtZSIsIm5ld1BhdGgiLCJfdHJpbVRleHQiLCJ0cmltIiwidGV4dCIsIl9yZW5kZXJJdGVtIiwicmVnRXhwIiwiX2FkZE5vdEZvdW5kIiwidGltZXIiLCJjbGVhclRpbWVvdXQiLCIkZm9jdXNlZCIsIkVWRU5UX0lOSVQiLCJFVkVOVF9DUkVBVEVEIiwiU0VMRUNUT1JfQ09OVEFJTkVSX1RPUF9SSUdIVCIsIlNFTEVDVE9SX0NPTlRBSU5FUl9UT1BfTEVGVCIsIlNFTEVDVE9SX0NPTlRBSU5FUl9CT1RUT01fUklHSFQiLCJTRUxFQ1RPUl9DT05UQUlORVJfQk9UVE9NX0xFRlQiLCJDTEFTU19OQU1FX1RPUF9SSUdIVCIsIkNMQVNTX05BTUVfVE9QX0xFRlQiLCJDTEFTU19OQU1FX0JPVFRPTV9SSUdIVCIsIkNMQVNTX05BTUVfQk9UVE9NX0xFRlQiLCJQT1NJVElPTl9UT1BfUklHSFQiLCJQT1NJVElPTl9UT1BfTEVGVCIsIlBPU0lUSU9OX0JPVFRPTV9SSUdIVCIsIlBPU0lUSU9OX0JPVFRPTV9MRUZUIiwicG9zaXRpb24iLCJmaXhlZCIsImF1dG9oaWRlIiwiYXV0b3JlbW92ZSIsImRlbGF5IiwiZmFkZSIsImljb24iLCJpbWFnZSIsImltYWdlQWx0IiwiaW1hZ2VIZWlnaHQiLCJzdWJ0aXRsZSIsImJvZHkiLCJUb2FzdHMiLCJjcmVhdGUiLCJ0b2FzdCIsInRvYXN0SGVhZGVyIiwidG9hc3RJbWFnZSIsInRvYXN0Q2xvc2UiLCJfZ2V0Q29udGFpbmVySWQiLCJfcHJlcGFyZUNvbnRhaW5lciIsImNvbnRhaW5lciIsIm9wdGlvbiIsIkNMQVNTX05BTUVfVE9ET19MSVNUX0RPTkUiLCJvbkNoZWNrIiwib25VbkNoZWNrIiwiVG9kb0xpc3QiLCJjaGVjayIsInVuQ2hlY2siLCIkdG9nZ2xlU2VsZWN0b3IiLCJFVkVOVF9MT0FEX0RBVEFfQVBJIiwiU0VMRUNUT1JfTEkiLCJTRUxFQ1RPUl9MSU5LIiwiU0VMRUNUT1JfVFJFRVZJRVdfTUVOVSIsIlNFTEVDVE9SX09QRU4iLCJDTEFTU19OQU1FX1NJREVCQVJfQ09MTEFQU0VEIiwiYWNjb3JkaW9uIiwiZXhwYW5kU2lkZWJhciIsInNpZGViYXJCdXR0b25TZWxlY3RvciIsIlRyZWV2aWV3IiwiZXhwYW5kZWRFdmVudCIsIm9wZW5NZW51TGkiLCJwYXJlbnRMaSIsIm9wZW5UcmVldmlldyIsInRyZWV2aWV3TWVudSIsImNvbGxhcHNlZEV2ZW50IiwiJHJlbGF0aXZlVGFyZ2V0IiwiJHBhcmVudCIsImlzT3BlbiIsImVsZW1lbnRJZCIsIl9leHBhbmRTaWRlYmFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0FBU0E7Ozs7OztBQUtBLE1BQU1BLElBQUksR0FBVjtBQUNBLE1BQU1DLFFBQVEsR0FBZDtBQUNBLE1BQU1DLFNBQVMsU0FBZjtBQUNBLE1BQU1DLGtCQUFrQixHQUFHQyx5QkFBM0IsSUFBMkJBLENBQTNCO0FBRUEsTUFBTUMsWUFBWSxjQUFsQjtBQUNBLE1BQU1DLG1CQUFtQixxQkFBekI7QUFDQSxNQUFNQyxxQkFBcUIsdUJBQTNCO0FB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QVM7QUFDdEUsY0FBSSxDQUFKO0FBREZBO0FBR0QsSzs7V0FFRHdYLGMsR0FBQUEsMEJBQWlCO0FBQ2YsVUFBSXhYLHVDQUFKLDRCQUFJQSxDQUFKLEVBQXNEO0FBQ3BEQSw4QkFBRSxhQUFGQTtBQUNEO0FBQ0YsSyxDQUFBOzs7YUFJTTBCLGdCLEdBQVAsa0NBQWdDO0FBQzlCLGFBQU8sVUFBVSxZQUFZO0FBQzNCLFlBQUlDLElBQUksR0FBRzNCLGlDQUFYLFVBQVdBLENBQVg7O0FBQ0EsWUFBTTRCLFFBQVEsR0FBRzVCLDRDQUFzQkEsNEJBQXZDLElBQXVDQSxFQUF0QkEsQ0FBakI7O0FBRUEsWUFBSSxDQUFKLE1BQVc7QUFDVDJCLGNBQUksR0FBRyxhQUFhM0Isc0JBQWIsSUFBYUEsQ0FBYixFQUFQMkIsUUFBTyxDQUFQQTtBQUNBM0I7QUFDRDs7QUFFRCxZQUFJNkIsTUFBTSxLQUFWLFFBQXVCO0FBQ3JCRixjQUFJLENBQUpBLE1BQUksQ0FBSkE7QUFDRDtBQVhILE9BQU8sQ0FBUDtBQWFELEs7OztHQXZHR2tWLEU7QUEwR047Ozs7OztBQUtBN1csd0RBQWtDLFlBQU07QUFDdENBLHVEQUE2QixZQUFZO0FBQ3ZDNlcsY0FBUSxDQUFSQSxzQkFBK0I3VyxzQkFBL0I2VyxJQUErQjdXLENBQS9CNlc7QUFERjdXO0FBREZBO0FBTUE7Ozs7O0FBS0FBLHFDQUFhNlcsUUFBUSxDQUFyQjdXO0FBQ0FBOztBQUNBQSxnREFBd0IsWUFBWTtBQUNsQ0E7QUFDQSxXQUFPNlcsUUFBUSxDQUFmO0FBRkY3VyIsImZpbGUiOiJhZG1pbmx0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEFkbWluTFRFIENhcmRSZWZyZXNoLmpzXG4gKiBMaWNlbnNlIE1JVFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuY29uc3QgTkFNRSA9ICdDYXJkUmVmcmVzaCdcbmNvbnN0IERBVEFfS0VZID0gJ2x0ZS5jYXJkcmVmcmVzaCdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG5cbmNvbnN0IEVWRU5UX0xPQURFRCA9IGBsb2FkZWQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9PVkVSTEFZX0FEREVEID0gYG92ZXJsYXkuYWRkZWQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9PVkVSTEFZX1JFTU9WRUQgPSBgb3ZlcmxheS5yZW1vdmVkJHtFVkVOVF9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX0NBUkQgPSAnY2FyZCdcblxuY29uc3QgU0VMRUNUT1JfQ0FSRCA9IGAuJHtDTEFTU19OQU1FX0NBUkR9YFxuY29uc3QgU0VMRUNUT1JfREFUQV9SRUZSRVNIID0gJ1tkYXRhLWNhcmQtd2lkZ2V0PVwiY2FyZC1yZWZyZXNoXCJdJ1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBzb3VyY2U6ICcnLFxuICBzb3VyY2VTZWxlY3RvcjogJycsXG4gIHBhcmFtczoge30sXG4gIHRyaWdnZXI6IFNFTEVDVE9SX0RBVEFfUkVGUkVTSCxcbiAgY29udGVudDogJy5jYXJkLWJvZHknLFxuICBsb2FkSW5Db250ZW50OiB0cnVlLFxuICBsb2FkT25Jbml0OiB0cnVlLFxuICByZXNwb25zZVR5cGU6ICcnLFxuICBvdmVybGF5VGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwib3ZlcmxheVwiPjxpIGNsYXNzPVwiZmFzIGZhLTJ4IGZhLXN5bmMtYWx0IGZhLXNwaW5cIj48L2k+PC9kaXY+JyxcbiAgb25Mb2FkU3RhcnQoKSB7XG4gIH0sXG4gIG9uTG9hZERvbmUocmVzcG9uc2UpIHtcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfVxufVxuXG5jbGFzcyBDYXJkUmVmcmVzaCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHNldHRpbmdzKSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLl9wYXJlbnQgPSBlbGVtZW50LnBhcmVudHMoU0VMRUNUT1JfQ0FSRCkuZmlyc3QoKVxuICAgIHRoaXMuX3NldHRpbmdzID0gJC5leHRlbmQoe30sIERlZmF1bHQsIHNldHRpbmdzKVxuICAgIHRoaXMuX292ZXJsYXkgPSAkKHRoaXMuX3NldHRpbmdzLm92ZXJsYXlUZW1wbGF0ZSlcblxuICAgIGlmIChlbGVtZW50Lmhhc0NsYXNzKENMQVNTX05BTUVfQ0FSRCkpIHtcbiAgICAgIHRoaXMuX3BhcmVudCA9IGVsZW1lbnRcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fc2V0dGluZ3Muc291cmNlID09PSAnJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdTb3VyY2UgdXJsIHdhcyBub3QgZGVmaW5lZC4gUGxlYXNlIHNwZWNpZnkgYSB1cmwgaW4geW91ciBDYXJkUmVmcmVzaCBzb3VyY2Ugb3B0aW9uLicpXG4gICAgfVxuICB9XG5cbiAgbG9hZCgpIHtcbiAgICB0aGlzLl9hZGRPdmVybGF5KClcbiAgICB0aGlzLl9zZXR0aW5ncy5vbkxvYWRTdGFydC5jYWxsKCQodGhpcykpXG5cbiAgICAkLmdldCh0aGlzLl9zZXR0aW5ncy5zb3VyY2UsIHRoaXMuX3NldHRpbmdzLnBhcmFtcywgcmVzcG9uc2UgPT4ge1xuICAgICAgaWYgKHRoaXMuX3NldHRpbmdzLmxvYWRJbkNvbnRlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NldHRpbmdzLnNvdXJjZVNlbGVjdG9yICE9PSAnJykge1xuICAgICAgICAgIHJlc3BvbnNlID0gJChyZXNwb25zZSkuZmluZCh0aGlzLl9zZXR0aW5ncy5zb3VyY2VTZWxlY3RvcikuaHRtbCgpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9wYXJlbnQuZmluZCh0aGlzLl9zZXR0aW5ncy5jb250ZW50KS5odG1sKHJlc3BvbnNlKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9zZXR0aW5ncy5vbkxvYWREb25lLmNhbGwoJCh0aGlzKSwgcmVzcG9uc2UpXG4gICAgICB0aGlzLl9yZW1vdmVPdmVybGF5KClcbiAgICB9LCB0aGlzLl9zZXR0aW5ncy5yZXNwb25zZVR5cGUgIT09ICcnICYmIHRoaXMuX3NldHRpbmdzLnJlc3BvbnNlVHlwZSlcblxuICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcigkLkV2ZW50KEVWRU5UX0xPQURFRCkpXG4gIH1cblxuICBfYWRkT3ZlcmxheSgpIHtcbiAgICB0aGlzLl9wYXJlbnQuYXBwZW5kKHRoaXMuX292ZXJsYXkpXG4gICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKCQuRXZlbnQoRVZFTlRfT1ZFUkxBWV9BRERFRCkpXG4gIH1cblxuICBfcmVtb3ZlT3ZlcmxheSgpIHtcbiAgICB0aGlzLl9wYXJlbnQuZmluZCh0aGlzLl9vdmVybGF5KS5yZW1vdmUoKVxuICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcigkLkV2ZW50KEVWRU5UX09WRVJMQVlfUkVNT1ZFRCkpXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2luaXQoKSB7XG4gICAgJCh0aGlzKS5maW5kKHRoaXMuX3NldHRpbmdzLnRyaWdnZXIpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMubG9hZCgpXG4gICAgfSlcblxuICAgIGlmICh0aGlzLl9zZXR0aW5ncy5sb2FkT25Jbml0KSB7XG4gICAgICB0aGlzLmxvYWQoKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIGxldCBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuICAgIGNvbnN0IF9vcHRpb25zID0gJC5leHRlbmQoe30sIERlZmF1bHQsICQodGhpcykuZGF0YSgpKVxuXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICBkYXRhID0gbmV3IENhcmRSZWZyZXNoKCQodGhpcyksIF9vcHRpb25zKVxuICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCB0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyA/IGRhdGEgOiBjb25maWcpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnICYmIGNvbmZpZy5tYXRjaCgvbG9hZC8pKSB7XG4gICAgICBkYXRhW2NvbmZpZ10oKVxuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhLl9pbml0KCQodGhpcykpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogRGF0YSBBUElcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCBTRUxFQ1RPUl9EQVRBX1JFRlJFU0gsIGZ1bmN0aW9uIChldmVudCkge1xuICBpZiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBDYXJkUmVmcmVzaC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0aGlzKSwgJ2xvYWQnKVxufSlcblxuJCgoKSA9PiB7XG4gICQoU0VMRUNUT1JfREFUQV9SRUZSRVNIKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICBDYXJkUmVmcmVzaC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0aGlzKSlcbiAgfSlcbn0pXG5cbi8qKlxuICogalF1ZXJ5IEFQSVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbiQuZm5bTkFNRV0gPSBDYXJkUmVmcmVzaC5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gQ2FyZFJlZnJlc2hcbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gQ2FyZFJlZnJlc2guX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkUmVmcmVzaFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQWRtaW5MVEUgQ2FyZFdpZGdldC5qc1xuICogTGljZW5zZSBNSVRcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG4vKipcbiAqIENvbnN0YW50c1xuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmNvbnN0IE5BTUUgPSAnQ2FyZFdpZGdldCdcbmNvbnN0IERBVEFfS0VZID0gJ2x0ZS5jYXJkd2lkZ2V0J1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV1cblxuY29uc3QgRVZFTlRfRVhQQU5ERUQgPSBgZXhwYW5kZWQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DT0xMQVBTRUQgPSBgY29sbGFwc2VkJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTUFYSU1JWkVEID0gYG1heGltaXplZCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX01JTklNSVpFRCA9IGBtaW5pbWl6ZWQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9SRU1PVkVEID0gYHJlbW92ZWQke0VWRU5UX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfQ0FSRCA9ICdjYXJkJ1xuY29uc3QgQ0xBU1NfTkFNRV9DT0xMQVBTRUQgPSAnY29sbGFwc2VkLWNhcmQnXG5jb25zdCBDTEFTU19OQU1FX0NPTExBUFNJTkcgPSAnY29sbGFwc2luZy1jYXJkJ1xuY29uc3QgQ0xBU1NfTkFNRV9FWFBBTkRJTkcgPSAnZXhwYW5kaW5nLWNhcmQnXG5jb25zdCBDTEFTU19OQU1FX1dBU19DT0xMQVBTRUQgPSAnd2FzLWNvbGxhcHNlZCdcbmNvbnN0IENMQVNTX05BTUVfTUFYSU1JWkVEID0gJ21heGltaXplZC1jYXJkJ1xuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1JFTU9WRSA9ICdbZGF0YS1jYXJkLXdpZGdldD1cInJlbW92ZVwiXSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfQ09MTEFQU0UgPSAnW2RhdGEtY2FyZC13aWRnZXQ9XCJjb2xsYXBzZVwiXSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfTUFYSU1JWkUgPSAnW2RhdGEtY2FyZC13aWRnZXQ9XCJtYXhpbWl6ZVwiXSdcbmNvbnN0IFNFTEVDVE9SX0NBUkQgPSBgLiR7Q0xBU1NfTkFNRV9DQVJEfWBcbmNvbnN0IFNFTEVDVE9SX0NBUkRfSEVBREVSID0gJy5jYXJkLWhlYWRlcidcbmNvbnN0IFNFTEVDVE9SX0NBUkRfQk9EWSA9ICcuY2FyZC1ib2R5J1xuY29uc3QgU0VMRUNUT1JfQ0FSRF9GT09URVIgPSAnLmNhcmQtZm9vdGVyJ1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBhbmltYXRpb25TcGVlZDogJ25vcm1hbCcsXG4gIGNvbGxhcHNlVHJpZ2dlcjogU0VMRUNUT1JfREFUQV9DT0xMQVBTRSxcbiAgcmVtb3ZlVHJpZ2dlcjogU0VMRUNUT1JfREFUQV9SRU1PVkUsXG4gIG1heGltaXplVHJpZ2dlcjogU0VMRUNUT1JfREFUQV9NQVhJTUlaRSxcbiAgY29sbGFwc2VJY29uOiAnZmEtbWludXMnLFxuICBleHBhbmRJY29uOiAnZmEtcGx1cycsXG4gIG1heGltaXplSWNvbjogJ2ZhLWV4cGFuZCcsXG4gIG1pbmltaXplSWNvbjogJ2ZhLWNvbXByZXNzJ1xufVxuXG5jbGFzcyBDYXJkV2lkZ2V0IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgc2V0dGluZ3MpIHtcbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuX3BhcmVudCA9IGVsZW1lbnQucGFyZW50cyhTRUxFQ1RPUl9DQVJEKS5maXJzdCgpXG5cbiAgICBpZiAoZWxlbWVudC5oYXNDbGFzcyhDTEFTU19OQU1FX0NBUkQpKSB7XG4gICAgICB0aGlzLl9wYXJlbnQgPSBlbGVtZW50XG4gICAgfVxuXG4gICAgdGhpcy5fc2V0dGluZ3MgPSAkLmV4dGVuZCh7fSwgRGVmYXVsdCwgc2V0dGluZ3MpXG4gIH1cblxuICBjb2xsYXBzZSgpIHtcbiAgICB0aGlzLl9wYXJlbnQuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKS5jaGlsZHJlbihgJHtTRUxFQ1RPUl9DQVJEX0JPRFl9LCAke1NFTEVDVE9SX0NBUkRfRk9PVEVSfWApXG4gICAgICAuc2xpZGVVcCh0aGlzLl9zZXR0aW5ncy5hbmltYXRpb25TcGVlZCwgKCkgPT4ge1xuICAgICAgICB0aGlzLl9wYXJlbnQuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9DT0xMQVBTRUQpLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfQ09MTEFQU0lORylcbiAgICAgIH0pXG5cbiAgICB0aGlzLl9wYXJlbnQuZmluZChgPiAke1NFTEVDVE9SX0NBUkRfSEVBREVSfSAke3RoaXMuX3NldHRpbmdzLmNvbGxhcHNlVHJpZ2dlcn0gLiR7dGhpcy5fc2V0dGluZ3MuY29sbGFwc2VJY29ufWApXG4gICAgICAuYWRkQ2xhc3ModGhpcy5fc2V0dGluZ3MuZXhwYW5kSWNvbilcbiAgICAgIC5yZW1vdmVDbGFzcyh0aGlzLl9zZXR0aW5ncy5jb2xsYXBzZUljb24pXG5cbiAgICB0aGlzLl9lbGVtZW50LnRyaWdnZXIoJC5FdmVudChFVkVOVF9DT0xMQVBTRUQpLCB0aGlzLl9wYXJlbnQpXG4gIH1cblxuICBleHBhbmQoKSB7XG4gICAgdGhpcy5fcGFyZW50LmFkZENsYXNzKENMQVNTX05BTUVfRVhQQU5ESU5HKS5jaGlsZHJlbihgJHtTRUxFQ1RPUl9DQVJEX0JPRFl9LCAke1NFTEVDVE9SX0NBUkRfRk9PVEVSfWApXG4gICAgICAuc2xpZGVEb3duKHRoaXMuX3NldHRpbmdzLmFuaW1hdGlvblNwZWVkLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX3BhcmVudC5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX0NPTExBUFNFRCkucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9FWFBBTkRJTkcpXG4gICAgICB9KVxuXG4gICAgdGhpcy5fcGFyZW50LmZpbmQoYD4gJHtTRUxFQ1RPUl9DQVJEX0hFQURFUn0gJHt0aGlzLl9zZXR0aW5ncy5jb2xsYXBzZVRyaWdnZXJ9IC4ke3RoaXMuX3NldHRpbmdzLmV4cGFuZEljb259YClcbiAgICAgIC5hZGRDbGFzcyh0aGlzLl9zZXR0aW5ncy5jb2xsYXBzZUljb24pXG4gICAgICAucmVtb3ZlQ2xhc3ModGhpcy5fc2V0dGluZ3MuZXhwYW5kSWNvbilcblxuICAgIHRoaXMuX2VsZW1lbnQudHJpZ2dlcigkLkV2ZW50KEVWRU5UX0VYUEFOREVEKSwgdGhpcy5fcGFyZW50KVxuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIHRoaXMuX3BhcmVudC5zbGlkZVVwKClcbiAgICB0aGlzLl9lbGVtZW50LnRyaWdnZXIoJC5FdmVudChFVkVOVF9SRU1PVkVEKSwgdGhpcy5fcGFyZW50KVxuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLl9wYXJlbnQuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9DT0xMQVBTRUQpKSB7XG4gICAgICB0aGlzLmV4cGFuZCgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNvbGxhcHNlKClcbiAgfVxuXG4gIG1heGltaXplKCkge1xuICAgIHRoaXMuX3BhcmVudC5maW5kKGAke3RoaXMuX3NldHRpbmdzLm1heGltaXplVHJpZ2dlcn0gLiR7dGhpcy5fc2V0dGluZ3MubWF4aW1pemVJY29ufWApXG4gICAgICAuYWRkQ2xhc3ModGhpcy5fc2V0dGluZ3MubWluaW1pemVJY29uKVxuICAgICAgLnJlbW92ZUNsYXNzKHRoaXMuX3NldHRpbmdzLm1heGltaXplSWNvbilcbiAgICB0aGlzLl9wYXJlbnQuY3NzKHtcbiAgICAgIGhlaWdodDogdGhpcy5fcGFyZW50LmhlaWdodCgpLFxuICAgICAgd2lkdGg6IHRoaXMuX3BhcmVudC53aWR0aCgpLFxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAuMTVzJ1xuICAgIH0pLmRlbGF5KDE1MCkucXVldWUoZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgJGVsZW1lbnQgPSAkKHRoaXMpXG5cbiAgICAgICRlbGVtZW50LmFkZENsYXNzKENMQVNTX05BTUVfTUFYSU1JWkVEKVxuICAgICAgJCgnaHRtbCcpLmFkZENsYXNzKENMQVNTX05BTUVfTUFYSU1JWkVEKVxuICAgICAgaWYgKCRlbGVtZW50Lmhhc0NsYXNzKENMQVNTX05BTUVfQ09MTEFQU0VEKSkge1xuICAgICAgICAkZWxlbWVudC5hZGRDbGFzcyhDTEFTU19OQU1FX1dBU19DT0xMQVBTRUQpXG4gICAgICB9XG5cbiAgICAgICRlbGVtZW50LmRlcXVldWUoKVxuICAgIH0pXG5cbiAgICB0aGlzLl9lbGVtZW50LnRyaWdnZXIoJC5FdmVudChFVkVOVF9NQVhJTUlaRUQpLCB0aGlzLl9wYXJlbnQpXG4gIH1cblxuICBtaW5pbWl6ZSgpIHtcbiAgICB0aGlzLl9wYXJlbnQuZmluZChgJHt0aGlzLl9zZXR0aW5ncy5tYXhpbWl6ZVRyaWdnZXJ9IC4ke3RoaXMuX3NldHRpbmdzLm1pbmltaXplSWNvbn1gKVxuICAgICAgLmFkZENsYXNzKHRoaXMuX3NldHRpbmdzLm1heGltaXplSWNvbilcbiAgICAgIC5yZW1vdmVDbGFzcyh0aGlzLl9zZXR0aW5ncy5taW5pbWl6ZUljb24pXG4gICAgdGhpcy5fcGFyZW50LmNzcygnY3NzVGV4dCcsIGBoZWlnaHQ6ICR7dGhpcy5fcGFyZW50WzBdLnN0eWxlLmhlaWdodH0gIWltcG9ydGFudDsgd2lkdGg6ICR7dGhpcy5fcGFyZW50WzBdLnN0eWxlLndpZHRofSAhaW1wb3J0YW50OyB0cmFuc2l0aW9uOiBhbGwgLjE1cztgXG4gICAgKS5kZWxheSgxMCkucXVldWUoZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgJGVsZW1lbnQgPSAkKHRoaXMpXG5cbiAgICAgICRlbGVtZW50LnJlbW92ZUNsYXNzKENMQVNTX05BTUVfTUFYSU1JWkVEKVxuICAgICAgJCgnaHRtbCcpLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfTUFYSU1JWkVEKVxuICAgICAgJGVsZW1lbnQuY3NzKHtcbiAgICAgICAgaGVpZ2h0OiAnaW5oZXJpdCcsXG4gICAgICAgIHdpZHRoOiAnaW5oZXJpdCdcbiAgICAgIH0pXG4gICAgICBpZiAoJGVsZW1lbnQuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9XQVNfQ09MTEFQU0VEKSkge1xuICAgICAgICAkZWxlbWVudC5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX1dBU19DT0xMQVBTRUQpXG4gICAgICB9XG5cbiAgICAgICRlbGVtZW50LmRlcXVldWUoKVxuICAgIH0pXG5cbiAgICB0aGlzLl9lbGVtZW50LnRyaWdnZXIoJC5FdmVudChFVkVOVF9NSU5JTUlaRUQpLCB0aGlzLl9wYXJlbnQpXG4gIH1cblxuICB0b2dnbGVNYXhpbWl6ZSgpIHtcbiAgICBpZiAodGhpcy5fcGFyZW50Lmhhc0NsYXNzKENMQVNTX05BTUVfTUFYSU1JWkVEKSkge1xuICAgICAgdGhpcy5taW5pbWl6ZSgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLm1heGltaXplKClcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfaW5pdChjYXJkKSB7XG4gICAgdGhpcy5fcGFyZW50ID0gY2FyZFxuXG4gICAgJCh0aGlzKS5maW5kKHRoaXMuX3NldHRpbmdzLmNvbGxhcHNlVHJpZ2dlcikuY2xpY2soKCkgPT4ge1xuICAgICAgdGhpcy50b2dnbGUoKVxuICAgIH0pXG5cbiAgICAkKHRoaXMpLmZpbmQodGhpcy5fc2V0dGluZ3MubWF4aW1pemVUcmlnZ2VyKS5jbGljaygoKSA9PiB7XG4gICAgICB0aGlzLnRvZ2dsZU1heGltaXplKClcbiAgICB9KVxuXG4gICAgJCh0aGlzKS5maW5kKHRoaXMuX3NldHRpbmdzLnJlbW92ZVRyaWdnZXIpLmNsaWNrKCgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlKClcbiAgICB9KVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgbGV0IGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXG4gICAgY29uc3QgX29wdGlvbnMgPSAkLmV4dGVuZCh7fSwgRGVmYXVsdCwgJCh0aGlzKS5kYXRhKCkpXG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIGRhdGEgPSBuZXcgQ2FyZFdpZGdldCgkKHRoaXMpLCBfb3B0aW9ucylcbiAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgdHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycgPyBkYXRhIDogY29uZmlnKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyAmJiBjb25maWcubWF0Y2goL2NvbGxhcHNlfGV4cGFuZHxyZW1vdmV8dG9nZ2xlfG1heGltaXplfG1pbmltaXplfHRvZ2dsZU1heGltaXplLykpIHtcbiAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0Jykge1xuICAgICAgZGF0YS5faW5pdCgkKHRoaXMpKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIERhdGEgQVBJXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgU0VMRUNUT1JfREFUQV9DT0xMQVBTRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGlmIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIENhcmRXaWRnZXQuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGhpcyksICd0b2dnbGUnKVxufSlcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgU0VMRUNUT1JfREFUQV9SRU1PVkUsIGZ1bmN0aW9uIChldmVudCkge1xuICBpZiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBDYXJkV2lkZ2V0Ll9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRoaXMpLCAncmVtb3ZlJylcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsIFNFTEVDVE9SX0RBVEFfTUFYSU1JWkUsIGZ1bmN0aW9uIChldmVudCkge1xuICBpZiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBDYXJkV2lkZ2V0Ll9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRoaXMpLCAndG9nZ2xlTWF4aW1pemUnKVxufSlcblxuLyoqXG4gKiBqUXVlcnkgQVBJXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuJC5mbltOQU1FXSA9IENhcmRXaWRnZXQuX2pRdWVyeUludGVyZmFjZVxuJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IENhcmRXaWRnZXRcbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gQ2FyZFdpZGdldC5falF1ZXJ5SW50ZXJmYWNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRXaWRnZXRcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEFkbWluTFRFIENvbnRyb2xTaWRlYmFyLmpzXG4gKiBMaWNlbnNlIE1JVFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuY29uc3QgTkFNRSA9ICdDb250cm9sU2lkZWJhcidcbmNvbnN0IERBVEFfS0VZID0gJ2x0ZS5jb250cm9sc2lkZWJhcidcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG5cbmNvbnN0IEVWRU5UX0NPTExBUFNFRCA9IGBjb2xsYXBzZWQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9FWFBBTkRFRCA9IGBleHBhbmRlZCR7RVZFTlRfS0VZfWBcblxuY29uc3QgU0VMRUNUT1JfQ09OVFJPTF9TSURFQkFSID0gJy5jb250cm9sLXNpZGViYXInXG5jb25zdCBTRUxFQ1RPUl9DT05UUk9MX1NJREVCQVJfQ09OVEVOVCA9ICcuY29udHJvbC1zaWRlYmFyLWNvbnRlbnQnXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS13aWRnZXQ9XCJjb250cm9sLXNpZGViYXJcIl0nXG5jb25zdCBTRUxFQ1RPUl9IRUFERVIgPSAnLm1haW4taGVhZGVyJ1xuY29uc3QgU0VMRUNUT1JfRk9PVEVSID0gJy5tYWluLWZvb3RlcidcblxuY29uc3QgQ0xBU1NfTkFNRV9DT05UUk9MX1NJREVCQVJfQU5JTUFURSA9ICdjb250cm9sLXNpZGViYXItYW5pbWF0ZSdcbmNvbnN0IENMQVNTX05BTUVfQ09OVFJPTF9TSURFQkFSX09QRU4gPSAnY29udHJvbC1zaWRlYmFyLW9wZW4nXG5jb25zdCBDTEFTU19OQU1FX0NPTlRST0xfU0lERUJBUl9TTElERSA9ICdjb250cm9sLXNpZGViYXItc2xpZGUtb3BlbidcbmNvbnN0IENMQVNTX05BTUVfTEFZT1VUX0ZJWEVEID0gJ2xheW91dC1maXhlZCdcbmNvbnN0IENMQVNTX05BTUVfTkFWQkFSX0ZJWEVEID0gJ2xheW91dC1uYXZiYXItZml4ZWQnXG5jb25zdCBDTEFTU19OQU1FX05BVkJBUl9TTV9GSVhFRCA9ICdsYXlvdXQtc20tbmF2YmFyLWZpeGVkJ1xuY29uc3QgQ0xBU1NfTkFNRV9OQVZCQVJfTURfRklYRUQgPSAnbGF5b3V0LW1kLW5hdmJhci1maXhlZCdcbmNvbnN0IENMQVNTX05BTUVfTkFWQkFSX0xHX0ZJWEVEID0gJ2xheW91dC1sZy1uYXZiYXItZml4ZWQnXG5jb25zdCBDTEFTU19OQU1FX05BVkJBUl9YTF9GSVhFRCA9ICdsYXlvdXQteGwtbmF2YmFyLWZpeGVkJ1xuY29uc3QgQ0xBU1NfTkFNRV9GT09URVJfRklYRUQgPSAnbGF5b3V0LWZvb3Rlci1maXhlZCdcbmNvbnN0IENMQVNTX05BTUVfRk9PVEVSX1NNX0ZJWEVEID0gJ2xheW91dC1zbS1mb290ZXItZml4ZWQnXG5jb25zdCBDTEFTU19OQU1FX0ZPT1RFUl9NRF9GSVhFRCA9ICdsYXlvdXQtbWQtZm9vdGVyLWZpeGVkJ1xuY29uc3QgQ0xBU1NfTkFNRV9GT09URVJfTEdfRklYRUQgPSAnbGF5b3V0LWxnLWZvb3Rlci1maXhlZCdcbmNvbnN0IENMQVNTX05BTUVfRk9PVEVSX1hMX0ZJWEVEID0gJ2xheW91dC14bC1mb290ZXItZml4ZWQnXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGNvbnRyb2xzaWRlYmFyU2xpZGU6IHRydWUsXG4gIHNjcm9sbGJhclRoZW1lOiAnb3MtdGhlbWUtbGlnaHQnLFxuICBzY3JvbGxiYXJBdXRvSGlkZTogJ2wnXG59XG5cbi8qKlxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmNsYXNzIENvbnRyb2xTaWRlYmFyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWdcblxuICAgIHRoaXMuX2luaXQoKVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgY29sbGFwc2UoKSB7XG4gICAgY29uc3QgJGJvZHkgPSAkKCdib2R5JylcbiAgICBjb25zdCAkaHRtbCA9ICQoJ2h0bWwnKVxuXG4gICAgLy8gU2hvdyB0aGUgY29udHJvbCBzaWRlYmFyXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5jb250cm9sc2lkZWJhclNsaWRlKSB7XG4gICAgICAkaHRtbC5hZGRDbGFzcyhDTEFTU19OQU1FX0NPTlRST0xfU0lERUJBUl9BTklNQVRFKVxuICAgICAgJGJvZHkucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9DT05UUk9MX1NJREVCQVJfU0xJREUpLmRlbGF5KDMwMCkucXVldWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFNFTEVDVE9SX0NPTlRST0xfU0lERUJBUikuaGlkZSgpXG4gICAgICAgICRodG1sLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfQ09OVFJPTF9TSURFQkFSX0FOSU1BVEUpXG4gICAgICAgICQodGhpcykuZGVxdWV1ZSgpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICAkYm9keS5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX0NPTlRST0xfU0lERUJBUl9PUEVOKVxuICAgIH1cblxuICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcigkLkV2ZW50KEVWRU5UX0NPTExBUFNFRCkpXG4gIH1cblxuICBzaG93KCkge1xuICAgIGNvbnN0ICRib2R5ID0gJCgnYm9keScpXG4gICAgY29uc3QgJGh0bWwgPSAkKCdodG1sJylcblxuICAgIC8vIENvbGxhcHNlIHRoZSBjb250cm9sIHNpZGViYXJcbiAgICBpZiAodGhpcy5fY29uZmlnLmNvbnRyb2xzaWRlYmFyU2xpZGUpIHtcbiAgICAgICRodG1sLmFkZENsYXNzKENMQVNTX05BTUVfQ09OVFJPTF9TSURFQkFSX0FOSU1BVEUpXG4gICAgICAkKFNFTEVDVE9SX0NPTlRST0xfU0lERUJBUikuc2hvdygpLmRlbGF5KDEwKS5xdWV1ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICRib2R5LmFkZENsYXNzKENMQVNTX05BTUVfQ09OVFJPTF9TSURFQkFSX1NMSURFKS5kZWxheSgzMDApLnF1ZXVlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAkaHRtbC5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX0NPTlRST0xfU0lERUJBUl9BTklNQVRFKVxuICAgICAgICAgICQodGhpcykuZGVxdWV1ZSgpXG4gICAgICAgIH0pXG4gICAgICAgICQodGhpcykuZGVxdWV1ZSgpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICAkYm9keS5hZGRDbGFzcyhDTEFTU19OQU1FX0NPTlRST0xfU0lERUJBUl9PUEVOKVxuICAgIH1cblxuICAgIHRoaXMuX2ZpeEhlaWdodCgpXG4gICAgdGhpcy5fZml4U2Nyb2xsSGVpZ2h0KClcblxuICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcigkLkV2ZW50KEVWRU5UX0VYUEFOREVEKSlcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICBjb25zdCAkYm9keSA9ICQoJ2JvZHknKVxuICAgIGNvbnN0IHNob3VsZENsb3NlID0gJGJvZHkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9DT05UUk9MX1NJREVCQVJfT1BFTikgfHxcbiAgICAgICAgJGJvZHkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9DT05UUk9MX1NJREVCQVJfU0xJREUpXG5cbiAgICBpZiAoc2hvdWxkQ2xvc2UpIHtcbiAgICAgIC8vIENsb3NlIHRoZSBjb250cm9sIHNpZGViYXJcbiAgICAgIHRoaXMuY29sbGFwc2UoKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBPcGVuIHRoZSBjb250cm9sIHNpZGViYXJcbiAgICAgIHRoaXMuc2hvdygpXG4gICAgfVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9pbml0KCkge1xuICAgIHRoaXMuX2ZpeEhlaWdodCgpXG4gICAgdGhpcy5fZml4U2Nyb2xsSGVpZ2h0KClcblxuICAgICQod2luZG93KS5yZXNpemUoKCkgPT4ge1xuICAgICAgdGhpcy5fZml4SGVpZ2h0KClcbiAgICAgIHRoaXMuX2ZpeFNjcm9sbEhlaWdodCgpXG4gICAgfSlcblxuICAgICQod2luZG93KS5zY3JvbGwoKCkgPT4ge1xuICAgICAgY29uc3QgJGJvZHkgPSAkKCdib2R5JylcbiAgICAgIGNvbnN0IHNob3VsZEZpeEhlaWdodCA9ICRib2R5Lmhhc0NsYXNzKENMQVNTX05BTUVfQ09OVFJPTF9TSURFQkFSX09QRU4pIHx8XG4gICAgICAgICAgJGJvZHkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9DT05UUk9MX1NJREVCQVJfU0xJREUpXG5cbiAgICAgIGlmIChzaG91bGRGaXhIZWlnaHQpIHtcbiAgICAgICAgdGhpcy5fZml4U2Nyb2xsSGVpZ2h0KClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgX2ZpeFNjcm9sbEhlaWdodCgpIHtcbiAgICBjb25zdCAkYm9keSA9ICQoJ2JvZHknKVxuXG4gICAgaWYgKCEkYm9keS5oYXNDbGFzcyhDTEFTU19OQU1FX0xBWU9VVF9GSVhFRCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGhlaWdodHMgPSB7XG4gICAgICBzY3JvbGw6ICQoZG9jdW1lbnQpLmhlaWdodCgpLFxuICAgICAgd2luZG93OiAkKHdpbmRvdykuaGVpZ2h0KCksXG4gICAgICBoZWFkZXI6ICQoU0VMRUNUT1JfSEVBREVSKS5vdXRlckhlaWdodCgpLFxuICAgICAgZm9vdGVyOiAkKFNFTEVDVE9SX0ZPT1RFUikub3V0ZXJIZWlnaHQoKVxuICAgIH1cbiAgICBjb25zdCBwb3NpdGlvbnMgPSB7XG4gICAgICBib3R0b206IE1hdGguYWJzKChoZWlnaHRzLndpbmRvdyArICQod2luZG93KS5zY3JvbGxUb3AoKSkgLSBoZWlnaHRzLnNjcm9sbCksXG4gICAgICB0b3A6ICQod2luZG93KS5zY3JvbGxUb3AoKVxuICAgIH1cblxuICAgIGNvbnN0IG5hdmJhckZpeGVkID0gKFxuICAgICAgJGJvZHkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9OQVZCQVJfRklYRUQpIHx8XG4gICAgICAgICRib2R5Lmhhc0NsYXNzKENMQVNTX05BTUVfTkFWQkFSX1NNX0ZJWEVEKSB8fFxuICAgICAgICAkYm9keS5oYXNDbGFzcyhDTEFTU19OQU1FX05BVkJBUl9NRF9GSVhFRCkgfHxcbiAgICAgICAgJGJvZHkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9OQVZCQVJfTEdfRklYRUQpIHx8XG4gICAgICAgICRib2R5Lmhhc0NsYXNzKENMQVNTX05BTUVfTkFWQkFSX1hMX0ZJWEVEKVxuICAgICkgJiYgJChTRUxFQ1RPUl9IRUFERVIpLmNzcygncG9zaXRpb24nKSA9PT0gJ2ZpeGVkJ1xuXG4gICAgY29uc3QgZm9vdGVyRml4ZWQgPSAoXG4gICAgICAkYm9keS5oYXNDbGFzcyhDTEFTU19OQU1FX0ZPT1RFUl9GSVhFRCkgfHxcbiAgICAgICAgJGJvZHkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9GT09URVJfU01fRklYRUQpIHx8XG4gICAgICAgICRib2R5Lmhhc0NsYXNzKENMQVNTX05BTUVfRk9PVEVSX01EX0ZJWEVEKSB8fFxuICAgICAgICAkYm9keS5oYXNDbGFzcyhDTEFTU19OQU1FX0ZPT1RFUl9MR19GSVhFRCkgfHxcbiAgICAgICAgJGJvZHkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9GT09URVJfWExfRklYRUQpXG4gICAgKSAmJiAkKFNFTEVDVE9SX0ZPT1RFUikuY3NzKCdwb3NpdGlvbicpID09PSAnZml4ZWQnXG5cbiAgICBjb25zdCAkY29udHJvbFNpZGViYXIgPSAkKFNFTEVDVE9SX0NPTlRST0xfU0lERUJBUilcbiAgICBjb25zdCAkY29udHJvbHNpZGViYXJDb250ZW50ID0gJChgJHtTRUxFQ1RPUl9DT05UUk9MX1NJREVCQVJ9LCAke1NFTEVDVE9SX0NPTlRST0xfU0lERUJBUn0gJHtTRUxFQ1RPUl9DT05UUk9MX1NJREVCQVJfQ09OVEVOVH1gKVxuXG4gICAgaWYgKHBvc2l0aW9ucy50b3AgPT09IDAgJiYgcG9zaXRpb25zLmJvdHRvbSA9PT0gMCkge1xuICAgICAgJGNvbnRyb2xTaWRlYmFyLmNzcyh7XG4gICAgICAgIGJvdHRvbTogaGVpZ2h0cy5mb290ZXIsXG4gICAgICAgIHRvcDogaGVpZ2h0cy5oZWFkZXJcbiAgICAgIH0pXG4gICAgICAkY29udHJvbHNpZGViYXJDb250ZW50LmNzcygnaGVpZ2h0JywgaGVpZ2h0cy53aW5kb3cgLSAoaGVpZ2h0cy5oZWFkZXIgKyBoZWlnaHRzLmZvb3RlcikpXG4gICAgfSBlbHNlIGlmIChwb3NpdGlvbnMuYm90dG9tIDw9IGhlaWdodHMuZm9vdGVyKSB7XG4gICAgICBpZiAoZm9vdGVyRml4ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHRvcCA9IGhlaWdodHMuaGVhZGVyIC0gcG9zaXRpb25zLnRvcFxuICAgICAgICAkY29udHJvbFNpZGViYXIuY3NzKCdib3R0b20nLCBoZWlnaHRzLmZvb3RlciAtIHBvc2l0aW9ucy5ib3R0b20pLmNzcygndG9wJywgdG9wID49IDAgPyB0b3AgOiAwKVxuICAgICAgICAkY29udHJvbHNpZGViYXJDb250ZW50LmNzcygnaGVpZ2h0JywgaGVpZ2h0cy53aW5kb3cgLSAoaGVpZ2h0cy5mb290ZXIgLSBwb3NpdGlvbnMuYm90dG9tKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRjb250cm9sU2lkZWJhci5jc3MoJ2JvdHRvbScsIGhlaWdodHMuZm9vdGVyKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocG9zaXRpb25zLnRvcCA8PSBoZWlnaHRzLmhlYWRlcikge1xuICAgICAgaWYgKG5hdmJhckZpeGVkID09PSBmYWxzZSkge1xuICAgICAgICAkY29udHJvbFNpZGViYXIuY3NzKCd0b3AnLCBoZWlnaHRzLmhlYWRlciAtIHBvc2l0aW9ucy50b3ApXG4gICAgICAgICRjb250cm9sc2lkZWJhckNvbnRlbnQuY3NzKCdoZWlnaHQnLCBoZWlnaHRzLndpbmRvdyAtIChoZWlnaHRzLmhlYWRlciAtIHBvc2l0aW9ucy50b3ApKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGNvbnRyb2xTaWRlYmFyLmNzcygndG9wJywgaGVpZ2h0cy5oZWFkZXIpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChuYXZiYXJGaXhlZCA9PT0gZmFsc2UpIHtcbiAgICAgICRjb250cm9sU2lkZWJhci5jc3MoJ3RvcCcsIDApXG4gICAgICAkY29udHJvbHNpZGViYXJDb250ZW50LmNzcygnaGVpZ2h0JywgaGVpZ2h0cy53aW5kb3cpXG4gICAgfSBlbHNlIHtcbiAgICAgICRjb250cm9sU2lkZWJhci5jc3MoJ3RvcCcsIGhlaWdodHMuaGVhZGVyKVxuICAgIH1cbiAgfVxuXG4gIF9maXhIZWlnaHQoKSB7XG4gICAgY29uc3QgJGJvZHkgPSAkKCdib2R5JylcblxuICAgIGlmICghJGJvZHkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9MQVlPVVRfRklYRUQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBoZWlnaHRzID0ge1xuICAgICAgd2luZG93OiAkKHdpbmRvdykuaGVpZ2h0KCksXG4gICAgICBoZWFkZXI6ICQoU0VMRUNUT1JfSEVBREVSKS5vdXRlckhlaWdodCgpLFxuICAgICAgZm9vdGVyOiAkKFNFTEVDVE9SX0ZPT1RFUikub3V0ZXJIZWlnaHQoKVxuICAgIH1cblxuICAgIGxldCBzaWRlYmFySGVpZ2h0ID0gaGVpZ2h0cy53aW5kb3cgLSBoZWlnaHRzLmhlYWRlclxuXG4gICAgaWYgKFxuICAgICAgJGJvZHkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9GT09URVJfRklYRUQpIHx8XG4gICAgICAgICAgJGJvZHkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9GT09URVJfU01fRklYRUQpIHx8XG4gICAgICAgICAgJGJvZHkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9GT09URVJfTURfRklYRUQpIHx8XG4gICAgICAgICAgJGJvZHkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9GT09URVJfTEdfRklYRUQpIHx8XG4gICAgICAgICAgJGJvZHkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9GT09URVJfWExfRklYRUQpXG4gICAgKSB7XG4gICAgICBpZiAoJChTRUxFQ1RPUl9GT09URVIpLmNzcygncG9zaXRpb24nKSA9PT0gJ2ZpeGVkJykge1xuICAgICAgICBzaWRlYmFySGVpZ2h0ID0gaGVpZ2h0cy53aW5kb3cgLSBoZWlnaHRzLmhlYWRlciAtIGhlaWdodHMuZm9vdGVyXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgJGNvbnRyb2xTaWRlYmFyID0gJChgJHtTRUxFQ1RPUl9DT05UUk9MX1NJREVCQVJ9ICR7U0VMRUNUT1JfQ09OVFJPTF9TSURFQkFSX0NPTlRFTlR9YClcbiAgICAkY29udHJvbFNpZGViYXIuY3NzKCdoZWlnaHQnLCBzaWRlYmFySGVpZ2h0KVxuXG4gICAgaWYgKHR5cGVvZiAkLmZuLm92ZXJsYXlTY3JvbGxiYXJzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgJGNvbnRyb2xTaWRlYmFyLm92ZXJsYXlTY3JvbGxiYXJzKHtcbiAgICAgICAgY2xhc3NOYW1lOiB0aGlzLl9jb25maWcuc2Nyb2xsYmFyVGhlbWUsXG4gICAgICAgIHNpemVBdXRvQ2FwYWJsZTogdHJ1ZSxcbiAgICAgICAgc2Nyb2xsYmFyczoge1xuICAgICAgICAgIGF1dG9IaWRlOiB0aGlzLl9jb25maWcuc2Nyb2xsYmFyQXV0b0hpZGUsXG4gICAgICAgICAgY2xpY2tTY3JvbGxpbmc6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShvcGVyYXRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuICAgICAgY29uc3QgX29wdGlvbnMgPSAkLmV4dGVuZCh7fSwgRGVmYXVsdCwgJCh0aGlzKS5kYXRhKCkpXG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IENvbnRyb2xTaWRlYmFyKHRoaXMsIF9vcHRpb25zKVxuICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhW29wZXJhdGlvbl0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtvcGVyYXRpb259IGlzIG5vdCBhIGZ1bmN0aW9uYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtvcGVyYXRpb25dKClcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICpcbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gIENvbnRyb2xTaWRlYmFyLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRoaXMpLCAndG9nZ2xlJylcbn0pXG5cbi8qKlxuICogalF1ZXJ5IEFQSVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbiQuZm5bTkFNRV0gPSBDb250cm9sU2lkZWJhci5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gQ29udHJvbFNpZGViYXJcbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gQ29udHJvbFNpZGViYXIuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250cm9sU2lkZWJhclxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQWRtaW5MVEUgRGlyZWN0Q2hhdC5qc1xuICogTGljZW5zZSBNSVRcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG4vKipcbiAqIENvbnN0YW50c1xuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmNvbnN0IE5BTUUgPSAnRGlyZWN0Q2hhdCdcbmNvbnN0IERBVEFfS0VZID0gJ2x0ZS5kaXJlY3RjaGF0J1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV1cblxuY29uc3QgRVZFTlRfVE9HR0xFRCA9IGB0b2dnbGVkJHtFVkVOVF9LRVl9YFxuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS13aWRnZXQ9XCJjaGF0LXBhbmUtdG9nZ2xlXCJdJ1xuY29uc3QgU0VMRUNUT1JfRElSRUNUX0NIQVQgPSAnLmRpcmVjdC1jaGF0J1xuXG5jb25zdCBDTEFTU19OQU1FX0RJUkVDVF9DSEFUX09QRU4gPSAnZGlyZWN0LWNoYXQtY29udGFjdHMtb3BlbidcblxuLyoqXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuY2xhc3MgRGlyZWN0Q2hhdCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudFxuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgICQodGhpcy5fZWxlbWVudCkucGFyZW50cyhTRUxFQ1RPUl9ESVJFQ1RfQ0hBVCkuZmlyc3QoKS50b2dnbGVDbGFzcyhDTEFTU19OQU1FX0RJUkVDVF9DSEFUX09QRU4pXG4gICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKCQuRXZlbnQoRVZFTlRfVE9HR0xFRCkpXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBEaXJlY3RDaGF0KCQodGhpcykpXG4gICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKClcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICpcbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICBpZiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBEaXJlY3RDaGF0Ll9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRoaXMpLCAndG9nZ2xlJylcbn0pXG5cbi8qKlxuICogalF1ZXJ5IEFQSVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbiQuZm5bTkFNRV0gPSBEaXJlY3RDaGF0Ll9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBEaXJlY3RDaGF0XG4kLmZuW05BTUVdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIERpcmVjdENoYXQuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBEaXJlY3RDaGF0XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBBZG1pbkxURSBEcm9wZG93bi5qc1xuICogTGljZW5zZSBNSVRcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG4vKipcbiAqIENvbnN0YW50c1xuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmNvbnN0IE5BTUUgPSAnRHJvcGRvd24nXG5jb25zdCBEQVRBX0tFWSA9ICdsdGUuZHJvcGRvd24nXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG5cbmNvbnN0IFNFTEVDVE9SX05BVkJBUiA9ICcubmF2YmFyJ1xuY29uc3QgU0VMRUNUT1JfRFJPUERPV05fTUVOVSA9ICcuZHJvcGRvd24tbWVudSdcbmNvbnN0IFNFTEVDVE9SX0RST1BET1dOX01FTlVfQUNUSVZFID0gJy5kcm9wZG93bi1tZW51LnNob3cnXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUgPSAnW2RhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIl0nXG5cbmNvbnN0IENMQVNTX05BTUVfRFJPUERPV05fUklHSFQgPSAnZHJvcGRvd24tbWVudS1yaWdodCdcbmNvbnN0IENMQVNTX05BTUVfRFJPUERPV05fU1VCTUVOVSA9ICdkcm9wZG93bi1zdWJtZW51J1xuXG4vLyBUT0RPOiB0aGlzIGlzIHVudXNlZDsgc2hvdWxkIGJlIHJlbW92ZWQgYWxvbmcgd2l0aCB0aGUgZXh0ZW5kP1xuY29uc3QgRGVmYXVsdCA9IHtcbn1cblxuLyoqXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuY2xhc3MgRHJvcGRvd24ge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWdcbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudFxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgdG9nZ2xlU3VibWVudSgpIHtcbiAgICB0aGlzLl9lbGVtZW50LnNpYmxpbmdzKCkuc2hvdygpLnRvZ2dsZUNsYXNzKCdzaG93JylcblxuICAgIGlmICghdGhpcy5fZWxlbWVudC5uZXh0KCkuaGFzQ2xhc3MoJ3Nob3cnKSkge1xuICAgICAgdGhpcy5fZWxlbWVudC5wYXJlbnRzKFNFTEVDVE9SX0RST1BET1dOX01FTlUpLmZpcnN0KCkuZmluZCgnLnNob3cnKS5yZW1vdmVDbGFzcygnc2hvdycpLmhpZGUoKVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQucGFyZW50cygnbGkubmF2LWl0ZW0uZHJvcGRvd24uc2hvdycpLm9uKCdoaWRkZW4uYnMuZHJvcGRvd24nLCAoKSA9PiB7XG4gICAgICAkKCcuZHJvcGRvd24tc3VibWVudSAuc2hvdycpLnJlbW92ZUNsYXNzKCdzaG93JykuaGlkZSgpXG4gICAgfSlcbiAgfVxuXG4gIGZpeFBvc2l0aW9uKCkge1xuICAgIGNvbnN0ICRlbGVtZW50ID0gJChTRUxFQ1RPUl9EUk9QRE9XTl9NRU5VX0FDVElWRSlcblxuICAgIGlmICgkZWxlbWVudC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICgkZWxlbWVudC5oYXNDbGFzcyhDTEFTU19OQU1FX0RST1BET1dOX1JJR0hUKSkge1xuICAgICAgJGVsZW1lbnQuY3NzKHtcbiAgICAgICAgbGVmdDogJ2luaGVyaXQnLFxuICAgICAgICByaWdodDogMFxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgJGVsZW1lbnQuY3NzKHtcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgcmlnaHQ6ICdpbmhlcml0J1xuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBvZmZzZXQgPSAkZWxlbWVudC5vZmZzZXQoKVxuICAgIGNvbnN0IHdpZHRoID0gJGVsZW1lbnQud2lkdGgoKVxuICAgIGNvbnN0IHZpc2libGVQYXJ0ID0gJCh3aW5kb3cpLndpZHRoKCkgLSBvZmZzZXQubGVmdFxuXG4gICAgaWYgKG9mZnNldC5sZWZ0IDwgMCkge1xuICAgICAgJGVsZW1lbnQuY3NzKHtcbiAgICAgICAgbGVmdDogJ2luaGVyaXQnLFxuICAgICAgICByaWdodDogb2Zmc2V0LmxlZnQgLSA1XG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAodmlzaWJsZVBhcnQgPCB3aWR0aCkge1xuICAgICAgJGVsZW1lbnQuY3NzKHtcbiAgICAgICAgbGVmdDogJ2luaGVyaXQnLFxuICAgICAgICByaWdodDogMFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuICAgICAgY29uc3QgX2NvbmZpZyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCAkKHRoaXMpLmRhdGEoKSlcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgRHJvcGRvd24oJCh0aGlzKSwgX2NvbmZpZylcbiAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnID09PSAndG9nZ2xlU3VibWVudScgfHwgY29uZmlnID09PSAnZml4UG9zaXRpb24nKSB7XG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIERhdGEgQVBJXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuJChgJHtTRUxFQ1RPUl9EUk9QRE9XTl9NRU5VfSAke1NFTEVDVE9SX0RST1BET1dOX1RPR0dMRX1gKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuXG4gIERyb3Bkb3duLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRoaXMpLCAndG9nZ2xlU3VibWVudScpXG59KVxuXG4kKGAke1NFTEVDVE9SX05BVkJBUn0gJHtTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEV9YCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgaWYgKCQoZXZlbnQudGFyZ2V0KS5wYXJlbnQoKS5oYXNDbGFzcyhDTEFTU19OQU1FX0RST1BET1dOX1NVQk1FTlUpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBEcm9wZG93bi5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0aGlzKSwgJ2ZpeFBvc2l0aW9uJylcbiAgfSwgMSlcbn0pXG5cbi8qKlxuICogalF1ZXJ5IEFQSVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbiQuZm5bTkFNRV0gPSBEcm9wZG93bi5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gRHJvcGRvd25cbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gRHJvcGRvd24uX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93blxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQWRtaW5MVEUgRXhwYW5kYWJsZVRhYmxlLmpzXG4gKiBMaWNlbnNlIE1JVFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbi8qKlxuICAqIENvbnN0YW50c1xuICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgKi9cblxuY29uc3QgTkFNRSA9ICdFeHBhbmRhYmxlVGFibGUnXG5jb25zdCBEQVRBX0tFWSA9ICdsdGUuZXhwYW5kYWJsZVRhYmxlJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV1cblxuY29uc3QgRVZFTlRfRVhQQU5ERUQgPSBgZXhwYW5kZWQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DT0xMQVBTRUQgPSBgY29sbGFwc2VkJHtFVkVOVF9LRVl9YFxuXG5jb25zdCBTRUxFQ1RPUl9UQUJMRSA9ICcuZXhwYW5kYWJsZS10YWJsZSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLXdpZGdldD1cImV4cGFuZGFibGUtdGFibGVcIl0nXG5jb25zdCBTRUxFQ1RPUl9BUklBX0FUVFIgPSAnYXJpYS1leHBhbmRlZCdcblxuLyoqXG4gICogQ2xhc3MgRGVmaW5pdGlvblxuICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgKi9cbmNsYXNzIEV4cGFuZGFibGVUYWJsZSB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9uc1xuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG4gIH1cblxuICAvLyBQdWJsaWNcblxuICBpbml0KCkge1xuICAgICQoU0VMRUNUT1JfREFUQV9UT0dHTEUpLmVhY2goKF8sICRoZWFkZXIpID0+IHtcbiAgICAgIGNvbnN0ICR0eXBlID0gJCgkaGVhZGVyKS5hdHRyKFNFTEVDVE9SX0FSSUFfQVRUUilcbiAgICAgIGNvbnN0ICRib2R5ID0gJCgkaGVhZGVyKS5uZXh0KCkuY2hpbGRyZW4oKS5maXJzdCgpLmNoaWxkcmVuKClcbiAgICAgIGlmICgkdHlwZSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICRib2R5LnNob3coKVxuICAgICAgfSBlbHNlIGlmICgkdHlwZSA9PT0gJ2ZhbHNlJykge1xuICAgICAgICAkYm9keS5oaWRlKClcbiAgICAgICAgJGJvZHkucGFyZW50KCkucGFyZW50KCkuYWRkQ2xhc3MoJ2Qtbm9uZScpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHRvZ2dsZVJvdygpIHtcbiAgICBjb25zdCAkZWxlbWVudCA9IHRoaXMuX2VsZW1lbnRcbiAgICBjb25zdCB0aW1lID0gNTAwXG4gICAgY29uc3QgJHR5cGUgPSAkZWxlbWVudC5hdHRyKFNFTEVDVE9SX0FSSUFfQVRUUilcbiAgICBjb25zdCAkYm9keSA9ICRlbGVtZW50Lm5leHQoKS5jaGlsZHJlbigpLmZpcnN0KCkuY2hpbGRyZW4oKVxuXG4gICAgJGJvZHkuc3RvcCgpXG4gICAgaWYgKCR0eXBlID09PSAndHJ1ZScpIHtcbiAgICAgICRib2R5LnNsaWRlVXAodGltZSwgKCkgPT4ge1xuICAgICAgICAkZWxlbWVudC5uZXh0KCkuYWRkQ2xhc3MoJ2Qtbm9uZScpXG4gICAgICB9KVxuICAgICAgJGVsZW1lbnQuYXR0cihTRUxFQ1RPUl9BUklBX0FUVFIsICdmYWxzZScpXG4gICAgICAkZWxlbWVudC50cmlnZ2VyKCQuRXZlbnQoRVZFTlRfQ09MTEFQU0VEKSlcbiAgICB9IGVsc2UgaWYgKCR0eXBlID09PSAnZmFsc2UnKSB7XG4gICAgICAkZWxlbWVudC5uZXh0KCkucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpXG4gICAgICAkYm9keS5zbGlkZURvd24odGltZSlcbiAgICAgICRlbGVtZW50LmF0dHIoU0VMRUNUT1JfQVJJQV9BVFRSLCAndHJ1ZScpXG4gICAgICAkZWxlbWVudC50cmlnZ2VyKCQuRXZlbnQoRVZFTlRfRVhQQU5ERUQpKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKG9wZXJhdGlvbikge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IEV4cGFuZGFibGVUYWJsZSgkKHRoaXMpKVxuICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygb3BlcmF0aW9uID09PSAnc3RyaW5nJyAmJiBvcGVyYXRpb24ubWF0Y2goL2luaXR8dG9nZ2xlUm93LykpIHtcbiAgICAgICAgZGF0YVtvcGVyYXRpb25dKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICAqIERhdGEgQVBJXG4gICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAqL1xuJChTRUxFQ1RPUl9UQUJMRSkucmVhZHkoZnVuY3Rpb24gKCkge1xuICBFeHBhbmRhYmxlVGFibGUuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGhpcyksICdpbml0Jylcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoKSB7XG4gIEV4cGFuZGFibGVUYWJsZS5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0aGlzKSwgJ3RvZ2dsZVJvdycpXG59KVxuXG4vKipcbiAgKiBqUXVlcnkgQVBJXG4gICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAqL1xuXG4kLmZuW05BTUVdID0gRXhwYW5kYWJsZVRhYmxlLl9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBFeHBhbmRhYmxlVGFibGVcbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gRXhwYW5kYWJsZVRhYmxlLl9qUXVlcnlJbnRlcmZhY2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXhwYW5kYWJsZVRhYmxlXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBBZG1pbkxURSBGdWxsc2NyZWVuLmpzXG4gKiBMaWNlbnNlIE1JVFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuY29uc3QgTkFNRSA9ICdGdWxsc2NyZWVuJ1xuY29uc3QgREFUQV9LRVkgPSAnbHRlLmZ1bGxzY3JlZW4nXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG5cbmNvbnN0IFNFTEVDVE9SX0RBVEFfV0lER0VUID0gJ1tkYXRhLXdpZGdldD1cImZ1bGxzY3JlZW5cIl0nXG5jb25zdCBTRUxFQ1RPUl9JQ09OID0gYCR7U0VMRUNUT1JfREFUQV9XSURHRVR9IGlgXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIG1pbmltaXplSWNvbjogJ2ZhLWNvbXByZXNzLWFycm93cy1hbHQnLFxuICBtYXhpbWl6ZUljb246ICdmYS1leHBhbmQtYXJyb3dzLWFsdCdcbn1cblxuLyoqXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuY2xhc3MgRnVsbHNjcmVlbiB7XG4gIGNvbnN0cnVjdG9yKF9lbGVtZW50LCBfb3B0aW9ucykge1xuICAgIHRoaXMuZWxlbWVudCA9IF9lbGVtZW50XG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIERlZmF1bHQsIF9vcHRpb25zKVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmIChkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCB8fFxuICAgICAgZG9jdW1lbnQubW96RnVsbFNjcmVlbkVsZW1lbnQgfHxcbiAgICAgIGRvY3VtZW50LndlYmtpdEZ1bGxzY3JlZW5FbGVtZW50IHx8XG4gICAgICBkb2N1bWVudC5tc0Z1bGxzY3JlZW5FbGVtZW50KSB7XG4gICAgICB0aGlzLndpbmRvd2VkKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mdWxsc2NyZWVuKClcbiAgICB9XG4gIH1cblxuICBmdWxsc2NyZWVuKCkge1xuICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZXF1ZXN0RnVsbHNjcmVlbigpXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubXNSZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm1zUmVxdWVzdEZ1bGxzY3JlZW4oKVxuICAgIH1cblxuICAgICQoU0VMRUNUT1JfSUNPTikucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLm1heGltaXplSWNvbikuYWRkQ2xhc3ModGhpcy5vcHRpb25zLm1pbmltaXplSWNvbilcbiAgfVxuXG4gIHdpbmRvd2VkKCkge1xuICAgIGlmIChkb2N1bWVudC5leGl0RnVsbHNjcmVlbikge1xuICAgICAgZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKVxuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4pIHtcbiAgICAgIGRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuKClcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50Lm1zRXhpdEZ1bGxzY3JlZW4pIHtcbiAgICAgIGRvY3VtZW50Lm1zRXhpdEZ1bGxzY3JlZW4oKVxuICAgIH1cblxuICAgICQoU0VMRUNUT1JfSUNPTikucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLm1pbmltaXplSWNvbikuYWRkQ2xhc3ModGhpcy5vcHRpb25zLm1heGltaXplSWNvbilcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIGxldCBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICBkYXRhID0gJCh0aGlzKS5kYXRhKClcbiAgICB9XG5cbiAgICBjb25zdCBfb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IGRhdGEpXG4gICAgY29uc3QgcGx1Z2luID0gbmV3IEZ1bGxzY3JlZW4oJCh0aGlzKSwgX29wdGlvbnMpXG5cbiAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDogZGF0YSlcblxuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyAmJiBjb25maWcubWF0Y2goL3RvZ2dsZXxmdWxsc2NyZWVufHdpbmRvd2VkLykpIHtcbiAgICAgIHBsdWdpbltjb25maWddKClcbiAgICB9IGVsc2Uge1xuICAgICAgcGx1Z2luLmluaXQoKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAgKiBEYXRhIEFQSVxuICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgKi9cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsIFNFTEVDVE9SX0RBVEFfV0lER0VULCBmdW5jdGlvbiAoKSB7XG4gIEZ1bGxzY3JlZW4uX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGhpcyksICd0b2dnbGUnKVxufSlcblxuLyoqXG4gKiBqUXVlcnkgQVBJXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuJC5mbltOQU1FXSA9IEZ1bGxzY3JlZW4uX2pRdWVyeUludGVyZmFjZVxuJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IEZ1bGxzY3JlZW5cbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gRnVsbHNjcmVlbi5falF1ZXJ5SW50ZXJmYWNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZ1bGxzY3JlZW5cbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEFkbWluTFRFIElGcmFtZS5qc1xuICogTGljZW5zZSBNSVRcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG4vKipcbiAqIENvbnN0YW50c1xuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmNvbnN0IE5BTUUgPSAnSUZyYW1lJ1xuY29uc3QgREFUQV9LRVkgPSAnbHRlLmlmcmFtZSdcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV1cblxuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtd2lkZ2V0PVwiaWZyYW1lXCJdJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEVfQ0xPU0UgPSAnW2RhdGEtd2lkZ2V0PVwiaWZyYW1lLWNsb3NlXCJdJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEVfU0NST0xMX0xFRlQgPSAnW2RhdGEtd2lkZ2V0PVwiaWZyYW1lLXNjcm9sbGxlZnRcIl0nXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRV9TQ1JPTExfUklHSFQgPSAnW2RhdGEtd2lkZ2V0PVwiaWZyYW1lLXNjcm9sbHJpZ2h0XCJdJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEVfRlVMTFNDUkVFTiA9ICdbZGF0YS13aWRnZXQ9XCJpZnJhbWUtZnVsbHNjcmVlblwiXSdcbmNvbnN0IFNFTEVDVE9SX0NPTlRFTlRfV1JBUFBFUiA9ICcuY29udGVudC13cmFwcGVyJ1xuY29uc3QgU0VMRUNUT1JfQ09OVEVOVF9JRlJBTUUgPSBgJHtTRUxFQ1RPUl9DT05URU5UX1dSQVBQRVJ9IGlmcmFtZWBcbmNvbnN0IFNFTEVDVE9SX1RBQl9OQVYgPSBgJHtTRUxFQ1RPUl9EQVRBX1RPR0dMRX0uaWZyYW1lLW1vZGUgLm5hdmBcbmNvbnN0IFNFTEVDVE9SX1RBQl9OQVZCQVJfTkFWID0gYCR7U0VMRUNUT1JfREFUQV9UT0dHTEV9LmlmcmFtZS1tb2RlIC5uYXZiYXItbmF2YFxuY29uc3QgU0VMRUNUT1JfVEFCX05BVkJBUl9OQVZfSVRFTSA9IGAke1NFTEVDVE9SX1RBQl9OQVZCQVJfTkFWfSAubmF2LWl0ZW1gXG5jb25zdCBTRUxFQ1RPUl9UQUJfQ09OVEVOVCA9IGAke1NFTEVDVE9SX0RBVEFfVE9HR0xFfS5pZnJhbWUtbW9kZSAudGFiLWNvbnRlbnRgXG5jb25zdCBTRUxFQ1RPUl9UQUJfRU1QVFkgPSBgJHtTRUxFQ1RPUl9UQUJfQ09OVEVOVH0gLnRhYi1lbXB0eWBcbmNvbnN0IFNFTEVDVE9SX1RBQl9MT0FESU5HID0gYCR7U0VMRUNUT1JfVEFCX0NPTlRFTlR9IC50YWItbG9hZGluZ2BcbmNvbnN0IFNFTEVDVE9SX1NJREVCQVJfTUVOVV9JVEVNID0gJy5tYWluLXNpZGViYXIgLm5hdi1pdGVtID4gYS5uYXYtbGluaydcbmNvbnN0IFNFTEVDVE9SX0hFQURFUl9NRU5VX0lURU0gPSAnLm1haW4taGVhZGVyIC5uYXYtaXRlbSBhLm5hdi1saW5rJ1xuY29uc3QgU0VMRUNUT1JfSEVBREVSX0RST1BET1dOX0lURU0gPSAnLm1haW4taGVhZGVyIGEuZHJvcGRvd24taXRlbSdcbmNvbnN0IENMQVNTX05BTUVfSUZSQU1FX01PREUgPSAnaWZyYW1lLW1vZGUnXG5jb25zdCBDTEFTU19OQU1FX0ZVTExTQ1JFRU5fTU9ERSA9ICdpZnJhbWUtbW9kZS1mdWxsc2NyZWVuJ1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBvblRhYkNsaWNrKGl0ZW0pIHtcbiAgICByZXR1cm4gaXRlbVxuICB9LFxuICBvblRhYkNoYW5nZWQoaXRlbSkge1xuICAgIHJldHVybiBpdGVtXG4gIH0sXG4gIG9uVGFiQ3JlYXRlZChpdGVtKSB7XG4gICAgcmV0dXJuIGl0ZW1cbiAgfSxcbiAgYXV0b0lmcmFtZU1vZGU6IHRydWUsXG4gIGF1dG9JdGVtQWN0aXZlOiB0cnVlLFxuICBhdXRvU2hvd05ld1RhYjogdHJ1ZSxcbiAgbG9hZGluZ1NjcmVlbjogdHJ1ZSxcbiAgdXNlTmF2YmFySXRlbXM6IHRydWUsXG4gIHNjcm9sbE9mZnNldDogNDAsXG4gIHNjcm9sbEJlaGF2aW9yU3dhcDogZmFsc2UsXG4gIGljb25NYXhpbWl6ZTogJ2ZhLWV4cGFuZCcsXG4gIGljb25NaW5pbWl6ZTogJ2ZhLWNvbXByZXNzJ1xufVxuXG4vKipcbiAqIENsYXNzIERlZmluaXRpb25cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5jbGFzcyBJRnJhbWUge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWdcbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudFxuXG4gICAgdGhpcy5faW5pdCgpXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICBvblRhYkNsaWNrKGl0ZW0pIHtcbiAgICB0aGlzLl9jb25maWcub25UYWJDbGljayhpdGVtKVxuICB9XG5cbiAgb25UYWJDaGFuZ2VkKGl0ZW0pIHtcbiAgICB0aGlzLl9jb25maWcub25UYWJDaGFuZ2VkKGl0ZW0pXG4gIH1cblxuICBvblRhYkNyZWF0ZWQoaXRlbSkge1xuICAgIHRoaXMuX2NvbmZpZy5vblRhYkNyZWF0ZWQoaXRlbSlcbiAgfVxuXG4gIGNyZWF0ZVRhYih0aXRsZSwgbGluaywgdW5pcXVlTmFtZSwgYXV0b09wZW4pIHtcbiAgICBjb25zdCB0YWJJZCA9IGBwYW5lbC0ke3VuaXF1ZU5hbWV9LSR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCl9YFxuICAgIGNvbnN0IG5hdklkID0gYHRhYi0ke3VuaXF1ZU5hbWV9LSR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCl9YFxuXG4gICAgY29uc3QgbmV3TmF2SXRlbSA9IGA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj48YSBjbGFzcz1cIm5hdi1saW5rXCIgZGF0YS10b2dnbGU9XCJyb3dcIiBpZD1cIiR7bmF2SWR9XCIgaHJlZj1cIiMke3RhYklkfVwiIHJvbGU9XCJ0YWJcIiBhcmlhLWNvbnRyb2xzPVwiJHt0YWJJZH1cIiBhcmlhLXNlbGVjdGVkPVwiZmFsc2VcIj4ke3RpdGxlfTwvYT48L2xpPmBcbiAgICAkKFNFTEVDVE9SX1RBQl9OQVZCQVJfTkFWKS5hcHBlbmQobmV3TmF2SXRlbSlcblxuICAgIGNvbnN0IG5ld1RhYkl0ZW0gPSBgPGRpdiBjbGFzcz1cInRhYi1wYW5lIGZhZGVcIiBpZD1cIiR7dGFiSWR9XCIgcm9sZT1cInRhYnBhbmVsXCIgYXJpYS1sYWJlbGxlZGJ5PVwiJHtuYXZJZH1cIj48aWZyYW1lIHNyYz1cIiR7bGlua31cIj48L2lmcmFtZT48L2Rpdj5gXG4gICAgJChTRUxFQ1RPUl9UQUJfQ09OVEVOVCkuYXBwZW5kKG5ld1RhYkl0ZW0pXG5cbiAgICBpZiAoYXV0b09wZW4pIHtcbiAgICAgIGlmICh0aGlzLl9jb25maWcubG9hZGluZ1NjcmVlbikge1xuICAgICAgICBjb25zdCAkbG9hZGluZ1NjcmVlbiA9ICQoU0VMRUNUT1JfVEFCX0xPQURJTkcpXG4gICAgICAgICRsb2FkaW5nU2NyZWVuLmZhZGVJbigpXG4gICAgICAgICQoYCR7dGFiSWR9IGlmcmFtZWApLnJlYWR5KCgpID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2NvbmZpZy5sb2FkaW5nU2NyZWVuID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhpcy5zd2l0Y2hUYWIoYCMke25hdklkfWAsIHRoaXMuX2NvbmZpZy5sb2FkaW5nU2NyZWVuKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICRsb2FkaW5nU2NyZWVuLmZhZGVPdXQoKVxuICAgICAgICAgICAgfSwgdGhpcy5fY29uZmlnLmxvYWRpbmdTY3JlZW4pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3dpdGNoVGFiKGAjJHtuYXZJZH1gLCB0aGlzLl9jb25maWcubG9hZGluZ1NjcmVlbilcbiAgICAgICAgICAgICRsb2FkaW5nU2NyZWVuLmZhZGVPdXQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3dpdGNoVGFiKGAjJHtuYXZJZH1gKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMub25UYWJDcmVhdGVkKCQoYCMke25hdklkfWApKVxuICB9XG5cbiAgb3BlblRhYlNpZGViYXIoaXRlbSwgYXV0b09wZW4gPSB0aGlzLl9jb25maWcuYXV0b1Nob3dOZXdUYWIpIHtcbiAgICBsZXQgJGl0ZW0gPSAkKGl0ZW0pLmNsb25lKClcbiAgICBpZiAoJGl0ZW0uYXR0cignaHJlZicpID09PSB1bmRlZmluZWQpIHtcbiAgICAgICRpdGVtID0gJChpdGVtKS5wYXJlbnQoJ2EnKS5jbG9uZSgpXG4gICAgfVxuXG4gICAgJGl0ZW0uZmluZCgnLnJpZ2h0JykucmVtb3ZlKClcbiAgICBsZXQgdGl0bGUgPSAkaXRlbS5maW5kKCdwJykudGV4dCgpXG4gICAgaWYgKHRpdGxlID09PSAnJykge1xuICAgICAgdGl0bGUgPSAkaXRlbS50ZXh0KClcbiAgICB9XG5cbiAgICBjb25zdCBsaW5rID0gJGl0ZW0uYXR0cignaHJlZicpXG4gICAgaWYgKGxpbmsgPT09ICcjJyB8fCBsaW5rID09PSAnJyB8fCBsaW5rID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY3JlYXRlVGFiKHRpdGxlLCBsaW5rLCBsaW5rLnJlcGxhY2UoJy5odG1sJywgJycpLnJlcGxhY2UoJy4vJywgJycpLnJlcGxhY2VBbGwoJy8nLCAnLScpLCBhdXRvT3BlbilcbiAgfVxuXG4gIHN3aXRjaFRhYihpdGVtKSB7XG4gICAgY29uc3QgJGl0ZW0gPSAkKGl0ZW0pXG4gICAgY29uc3QgdGFiSWQgPSAkaXRlbS5hdHRyKCdocmVmJylcblxuICAgICQoU0VMRUNUT1JfVEFCX0VNUFRZKS5oaWRlKClcbiAgICAkKGAke1NFTEVDVE9SX1RBQl9OQVZCQVJfTkFWfSAuYWN0aXZlYCkudGFiKCdkaXNwb3NlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgdGhpcy5fZml4SGVpZ2h0KClcblxuICAgICRpdGVtLnRhYignc2hvdycpXG4gICAgJGl0ZW0ucGFyZW50cygnbGknKS5hZGRDbGFzcygnYWN0aXZlJylcbiAgICB0aGlzLm9uVGFiQ2hhbmdlZCgkaXRlbSlcblxuICAgIGlmICh0aGlzLl9jb25maWcuYXV0b0l0ZW1BY3RpdmUpIHtcbiAgICAgIHRoaXMuX3NldEl0ZW1BY3RpdmUoJChgJHt0YWJJZH0gaWZyYW1lYCkuYXR0cignc3JjJykpXG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlQWN0aXZlVGFiKCkge1xuICAgIGNvbnN0ICRuYXZJdGVtID0gJChgJHtTRUxFQ1RPUl9UQUJfTkFWQkFSX05BVl9JVEVNfS5hY3RpdmVgKVxuICAgIGNvbnN0ICRuYXZJdGVtUGFyZW50ID0gJG5hdkl0ZW0ucGFyZW50KClcbiAgICBjb25zdCBuYXZJdGVtSW5kZXggPSAkbmF2SXRlbS5pbmRleCgpXG4gICAgJG5hdkl0ZW0ucmVtb3ZlKClcbiAgICAkKCcudGFiLXBhbmUuYWN0aXZlJykucmVtb3ZlKClcblxuICAgIGlmICgkKFNFTEVDVE9SX1RBQl9DT05URU5UKS5jaGlsZHJlbigpLmxlbmd0aCA9PSAkKGAke1NFTEVDVE9SX1RBQl9FTVBUWX0sICR7U0VMRUNUT1JfVEFCX0xPQURJTkd9YCkubGVuZ3RoKSB7XG4gICAgICAkKFNFTEVDVE9SX1RBQl9FTVBUWSkuc2hvdygpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByZXZOYXZJdGVtSW5kZXggPSBuYXZJdGVtSW5kZXggLSAxXG4gICAgICB0aGlzLnN3aXRjaFRhYigkbmF2SXRlbVBhcmVudC5jaGlsZHJlbigpLmVxKHByZXZOYXZJdGVtSW5kZXgpLmZpbmQoJ2EnKSlcbiAgICB9XG4gIH1cblxuICB0b2dnbGVGdWxsc2NyZWVuKCkge1xuICAgIGlmICgkKCdib2R5JykuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9GVUxMU0NSRUVOX01PREUpKSB7XG4gICAgICAkKGAke1NFTEVDVE9SX0RBVEFfVE9HR0xFX0ZVTExTQ1JFRU59IGlgKS5yZW1vdmVDbGFzcyh0aGlzLl9jb25maWcuaWNvbk1pbmltaXplKS5hZGRDbGFzcyh0aGlzLl9jb25maWcuaWNvbk1heGltaXplKVxuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfRlVMTFNDUkVFTl9NT0RFKVxuICAgICAgJChgJHtTRUxFQ1RPUl9UQUJfRU1QVFl9LCAke1NFTEVDVE9SX1RBQl9MT0FESU5HfWApLmhlaWdodCgnYXV0bycpXG4gICAgICAkKFNFTEVDVE9SX0NPTlRFTlRfV1JBUFBFUikuaGVpZ2h0KCdhdXRvJylcbiAgICAgICQoU0VMRUNUT1JfQ09OVEVOVF9JRlJBTUUpLmhlaWdodCgnYXV0bycpXG4gICAgfSBlbHNlIHtcbiAgICAgICQoYCR7U0VMRUNUT1JfREFUQV9UT0dHTEVfRlVMTFNDUkVFTn0gaWApLnJlbW92ZUNsYXNzKHRoaXMuX2NvbmZpZy5pY29uTWF4aW1pemUpLmFkZENsYXNzKHRoaXMuX2NvbmZpZy5pY29uTWluaW1pemUpXG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9GVUxMU0NSRUVOX01PREUpXG4gICAgfVxuXG4gICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3Jlc2l6ZScpXG4gICAgdGhpcy5fZml4SGVpZ2h0KHRydWUpXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2luaXQoKSB7XG4gICAgaWYgKHdpbmRvdy5mcmFtZUVsZW1lbnQgJiYgdGhpcy5fY29uZmlnLmF1dG9JZnJhbWVNb2RlKSB7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9JRlJBTUVfTU9ERSlcbiAgICB9IGVsc2UgaWYgKCQoU0VMRUNUT1JfQ09OVEVOVF9XUkFQUEVSKS5oYXNDbGFzcyhDTEFTU19OQU1FX0lGUkFNRV9NT0RFKSkge1xuICAgICAgdGhpcy5fc2V0dXBMaXN0ZW5lcnMoKVxuICAgICAgdGhpcy5fZml4SGVpZ2h0KHRydWUpXG4gICAgfVxuICB9XG5cbiAgX25hdlNjcm9sbChvZmZzZXQpIHtcbiAgICBjb25zdCBsZWZ0UG9zID0gJChTRUxFQ1RPUl9UQUJfTkFWQkFSX05BVikuc2Nyb2xsTGVmdCgpXG4gICAgJChTRUxFQ1RPUl9UQUJfTkFWQkFSX05BVikuYW5pbWF0ZSh7IHNjcm9sbExlZnQ6IChsZWZ0UG9zICsgb2Zmc2V0KSB9LCAyNTAsICdsaW5lYXInKVxuICB9XG5cbiAgX3NldHVwTGlzdGVuZXJzKCkge1xuICAgICQod2luZG93KS5vbigncmVzaXplJywgKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX2ZpeEhlaWdodCgpXG4gICAgICB9LCAxKVxuICAgIH0pXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgU0VMRUNUT1JfU0lERUJBUl9NRU5VX0lURU0sIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB0aGlzLm9wZW5UYWJTaWRlYmFyKGUudGFyZ2V0KVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnVzZU5hdmJhckl0ZW1zKSB7XG4gICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBgJHtTRUxFQ1RPUl9IRUFERVJfTUVOVV9JVEVNfSwgJHtTRUxFQ1RPUl9IRUFERVJfRFJPUERPV05fSVRFTX1gLCBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHRoaXMub3BlblRhYlNpZGViYXIoZS50YXJnZXQpXG4gICAgICB9KVxuICAgIH1cblxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIFNFTEVDVE9SX1RBQl9OQVZCQVJfTkFWX0lURU0sIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB0aGlzLm9uVGFiQ2xpY2soZS50YXJnZXQpXG4gICAgICB0aGlzLnN3aXRjaFRhYihlLnRhcmdldClcbiAgICB9KVxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIFNFTEVDVE9SX0RBVEFfVE9HR0xFX0NMT1NFLCBlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgdGhpcy5yZW1vdmVBY3RpdmVUYWIoKVxuICAgIH0pXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgU0VMRUNUT1JfREFUQV9UT0dHTEVfRlVMTFNDUkVFTiwgZSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIHRoaXMudG9nZ2xlRnVsbHNjcmVlbigpXG4gICAgfSlcbiAgICBsZXQgbW91c2Vkb3duID0gZmFsc2VcbiAgICBsZXQgbW91c2Vkb3duSW50ZXJ2YWwgPSBudWxsXG4gICAgJChkb2N1bWVudCkub24oJ21vdXNlZG93bicsIFNFTEVDVE9SX0RBVEFfVE9HR0xFX1NDUk9MTF9MRUZULCBlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgY2xlYXJJbnRlcnZhbChtb3VzZWRvd25JbnRlcnZhbClcblxuICAgICAgbGV0IHsgc2Nyb2xsT2Zmc2V0IH0gPSB0aGlzLl9jb25maWdcblxuICAgICAgaWYgKCF0aGlzLl9jb25maWcuc2Nyb2xsQmVoYXZpb3JTd2FwKSB7XG4gICAgICAgIHNjcm9sbE9mZnNldCA9IC1zY3JvbGxPZmZzZXRcbiAgICAgIH1cblxuICAgICAgbW91c2Vkb3duID0gdHJ1ZVxuICAgICAgdGhpcy5fbmF2U2Nyb2xsKHNjcm9sbE9mZnNldClcblxuICAgICAgbW91c2Vkb3duSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX25hdlNjcm9sbChzY3JvbGxPZmZzZXQpXG4gICAgICB9LCAyNTApXG4gICAgfSlcbiAgICAkKGRvY3VtZW50KS5vbignbW91c2Vkb3duJywgU0VMRUNUT1JfREFUQV9UT0dHTEVfU0NST0xMX1JJR0hULCBlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgY2xlYXJJbnRlcnZhbChtb3VzZWRvd25JbnRlcnZhbClcblxuICAgICAgbGV0IHsgc2Nyb2xsT2Zmc2V0IH0gPSB0aGlzLl9jb25maWdcblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5zY3JvbGxCZWhhdmlvclN3YXApIHtcbiAgICAgICAgc2Nyb2xsT2Zmc2V0ID0gLXNjcm9sbE9mZnNldFxuICAgICAgfVxuXG4gICAgICBtb3VzZWRvd24gPSB0cnVlXG4gICAgICB0aGlzLl9uYXZTY3JvbGwoc2Nyb2xsT2Zmc2V0KVxuXG4gICAgICBtb3VzZWRvd25JbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgdGhpcy5fbmF2U2Nyb2xsKHNjcm9sbE9mZnNldClcbiAgICAgIH0sIDI1MClcbiAgICB9KVxuICAgICQoZG9jdW1lbnQpLm9uKCdtb3VzZXVwJywgKCkgPT4ge1xuICAgICAgaWYgKG1vdXNlZG93bikge1xuICAgICAgICBtb3VzZWRvd24gPSBmYWxzZVxuICAgICAgICBjbGVhckludGVydmFsKG1vdXNlZG93bkludGVydmFsKVxuICAgICAgICBtb3VzZWRvd25JbnRlcnZhbCA9IG51bGxcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgX3NldEl0ZW1BY3RpdmUoaHJlZikge1xuICAgICQoYCR7U0VMRUNUT1JfU0lERUJBUl9NRU5VX0lURU19LCAke1NFTEVDVE9SX0hFQURFUl9EUk9QRE9XTl9JVEVNfWApLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICQoU0VMRUNUT1JfSEVBREVSX01FTlVfSVRFTSkucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG5cbiAgICBjb25zdCAkaGVhZGVyTWVudUl0ZW0gPSAkKGAke1NFTEVDVE9SX0hFQURFUl9NRU5VX0lURU19W2hyZWYkPVwiJHtocmVmfVwiXWApXG4gICAgY29uc3QgJGhlYWRlckRyb3Bkb3duSXRlbSA9ICQoYCR7U0VMRUNUT1JfSEVBREVSX0RST1BET1dOX0lURU19W2hyZWYkPVwiJHtocmVmfVwiXWApXG4gICAgY29uc3QgJHNpZGViYXJNZW51SXRlbSA9ICQoYCR7U0VMRUNUT1JfU0lERUJBUl9NRU5VX0lURU19W2hyZWYkPVwiJHtocmVmfVwiXWApXG5cbiAgICAkaGVhZGVyTWVudUl0ZW0uZWFjaCgoaSwgZSkgPT4ge1xuICAgICAgJChlKS5wYXJlbnQoKS5hZGRDbGFzcygnYWN0aXZlJylcbiAgICB9KVxuICAgICRoZWFkZXJEcm9wZG93bkl0ZW0uZWFjaCgoaSwgZSkgPT4ge1xuICAgICAgJChlKS5hZGRDbGFzcygnYWN0aXZlJylcbiAgICB9KVxuICAgICRzaWRlYmFyTWVudUl0ZW0uZWFjaCgoaSwgZSkgPT4ge1xuICAgICAgJChlKS5hZGRDbGFzcygnYWN0aXZlJylcbiAgICAgICQoZSkucGFyZW50cygnLm5hdi10cmVldmlldycpLnByZXZBbGwoJy5uYXYtbGluaycpLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgIH0pXG4gIH1cblxuICBfZml4SGVpZ2h0KHRhYkVtcHR5ID0gZmFsc2UpIHtcbiAgICBpZiAoJCgnYm9keScpLmhhc0NsYXNzKENMQVNTX05BTUVfRlVMTFNDUkVFTl9NT0RFKSkge1xuICAgICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpXG4gICAgICAkKGAke1NFTEVDVE9SX1RBQl9FTVBUWX0sICR7U0VMRUNUT1JfVEFCX0xPQURJTkd9YCkuaGVpZ2h0KHdpbmRvd0hlaWdodClcbiAgICAgICQoU0VMRUNUT1JfQ09OVEVOVF9XUkFQUEVSKS5oZWlnaHQod2luZG93SGVpZ2h0KVxuICAgICAgJChTRUxFQ1RPUl9DT05URU5UX0lGUkFNRSkuaGVpZ2h0KHdpbmRvd0hlaWdodClcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29udGVudFdyYXBwZXJIZWlnaHQgPSBwYXJzZUZsb2F0KCQoU0VMRUNUT1JfQ09OVEVOVF9XUkFQUEVSKS5jc3MoJ21pbi1oZWlnaHQnKSlcbiAgICAgIGNvbnN0IG5hdmJhckhlaWdodCA9ICQoU0VMRUNUT1JfVEFCX05BVikub3V0ZXJIZWlnaHQoKVxuICAgICAgaWYgKHRhYkVtcHR5ID09IHRydWUpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgJChgJHtTRUxFQ1RPUl9UQUJfRU1QVFl9LCAke1NFTEVDVE9SX1RBQl9MT0FESU5HfWApLmhlaWdodChjb250ZW50V3JhcHBlckhlaWdodCAtIG5hdmJhckhlaWdodClcbiAgICAgICAgfSwgNTApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKFNFTEVDVE9SX0NPTlRFTlRfSUZSQU1FKS5oZWlnaHQoY29udGVudFdyYXBwZXJIZWlnaHQgLSBuYXZiYXJIZWlnaHQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2Uob3BlcmF0aW9uLCAuLi5hcmdzKSB7XG4gICAgbGV0IGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXG4gICAgY29uc3QgX29wdGlvbnMgPSAkLmV4dGVuZCh7fSwgRGVmYXVsdCwgJCh0aGlzKS5kYXRhKCkpXG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIGRhdGEgPSBuZXcgSUZyYW1lKHRoaXMsIF9vcHRpb25zKVxuICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb3BlcmF0aW9uID09PSAnc3RyaW5nJyAmJiBvcGVyYXRpb24ubWF0Y2goL2NyZWF0ZVRhYnxvcGVuVGFiU2lkZWJhcnxzd2l0Y2hUYWJ8cmVtb3ZlQWN0aXZlVGFiLykpIHtcbiAgICAgIGRhdGFbb3BlcmF0aW9uXSguLi5hcmdzKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIERhdGEgQVBJXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuJCh3aW5kb3cpLm9uKCdsb2FkJywgKCkgPT4ge1xuICBJRnJhbWUuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQoU0VMRUNUT1JfREFUQV9UT0dHTEUpKVxufSlcblxuLyoqXG4gKiBqUXVlcnkgQVBJXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuJC5mbltOQU1FXSA9IElGcmFtZS5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gSUZyYW1lXG4kLmZuW05BTUVdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIElGcmFtZS5falF1ZXJ5SW50ZXJmYWNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IElGcmFtZVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQWRtaW5MVEUgTGF5b3V0LmpzXG4gKiBMaWNlbnNlIE1JVFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuY29uc3QgTkFNRSA9ICdMYXlvdXQnXG5jb25zdCBEQVRBX0tFWSA9ICdsdGUubGF5b3V0J1xuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXVxuXG5jb25zdCBTRUxFQ1RPUl9IRUFERVIgPSAnLm1haW4taGVhZGVyJ1xuY29uc3QgU0VMRUNUT1JfTUFJTl9TSURFQkFSID0gJy5tYWluLXNpZGViYXInXG5jb25zdCBTRUxFQ1RPUl9TSURFQkFSID0gJy5tYWluLXNpZGViYXIgLnNpZGViYXInXG5jb25zdCBTRUxFQ1RPUl9DT05URU5UID0gJy5jb250ZW50LXdyYXBwZXInXG5jb25zdCBTRUxFQ1RPUl9DT05UUk9MX1NJREVCQVJfQ09OVEVOVCA9ICcuY29udHJvbC1zaWRlYmFyLWNvbnRlbnQnXG5jb25zdCBTRUxFQ1RPUl9DT05UUk9MX1NJREVCQVJfQlROID0gJ1tkYXRhLXdpZGdldD1cImNvbnRyb2wtc2lkZWJhclwiXSdcbmNvbnN0IFNFTEVDVE9SX0ZPT1RFUiA9ICcubWFpbi1mb290ZXInXG5jb25zdCBTRUxFQ1RPUl9QVVNITUVOVV9CVE4gPSAnW2RhdGEtd2lkZ2V0PVwicHVzaG1lbnVcIl0nXG5jb25zdCBTRUxFQ1RPUl9MT0dJTl9CT1ggPSAnLmxvZ2luLWJveCdcbmNvbnN0IFNFTEVDVE9SX1JFR0lTVEVSX0JPWCA9ICcucmVnaXN0ZXItYm94J1xuXG5jb25zdCBDTEFTU19OQU1FX1NJREVCQVJfRk9DVVNFRCA9ICdzaWRlYmFyLWZvY3VzZWQnXG5jb25zdCBDTEFTU19OQU1FX0xBWU9VVF9GSVhFRCA9ICdsYXlvdXQtZml4ZWQnXG5jb25zdCBDTEFTU19OQU1FX0NPTlRST0xfU0lERUJBUl9TTElERV9PUEVOID0gJ2NvbnRyb2wtc2lkZWJhci1zbGlkZS1vcGVuJ1xuY29uc3QgQ0xBU1NfTkFNRV9DT05UUk9MX1NJREVCQVJfT1BFTiA9ICdjb250cm9sLXNpZGViYXItb3BlbidcbmNvbnN0IENMQVNTX05BTUVfTEFZT1VUX1RPUF9OQVYgPSAnbGF5b3V0LXRvcC1uYXYnXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIHNjcm9sbGJhclRoZW1lOiAnb3MtdGhlbWUtbGlnaHQnLFxuICBzY3JvbGxiYXJBdXRvSGlkZTogJ2wnLFxuICBwYW5lbEF1dG9IZWlnaHQ6IHRydWUsXG4gIHBhbmVsQXV0b0hlaWdodE1vZGU6ICdtaW4taGVpZ2h0JyxcbiAgbG9naW5SZWdpc3RlckF1dG9IZWlnaHQ6IHRydWVcbn1cblxuLyoqXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuY2xhc3MgTGF5b3V0IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnXG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcblxuICAgIHRoaXMuX2luaXQoKVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgZml4TGF5b3V0SGVpZ2h0KGV4dHJhID0gbnVsbCkge1xuICAgIGNvbnN0ICRib2R5ID0gJCgnYm9keScpXG4gICAgbGV0IGNvbnRyb2xTaWRlYmFyID0gMFxuXG4gICAgaWYgKCRib2R5Lmhhc0NsYXNzKENMQVNTX05BTUVfQ09OVFJPTF9TSURFQkFSX1NMSURFX09QRU4pIHx8ICRib2R5Lmhhc0NsYXNzKENMQVNTX05BTUVfQ09OVFJPTF9TSURFQkFSX09QRU4pIHx8IGV4dHJhID09PSAnY29udHJvbF9zaWRlYmFyJykge1xuICAgICAgY29udHJvbFNpZGViYXIgPSAkKFNFTEVDVE9SX0NPTlRST0xfU0lERUJBUl9DT05URU5UKS5oZWlnaHQoKVxuICAgIH1cblxuICAgIGNvbnN0IGhlaWdodHMgPSB7XG4gICAgICB3aW5kb3c6ICQod2luZG93KS5oZWlnaHQoKSxcbiAgICAgIGhlYWRlcjogJChTRUxFQ1RPUl9IRUFERVIpLmxlbmd0aCAhPT0gMCA/ICQoU0VMRUNUT1JfSEVBREVSKS5vdXRlckhlaWdodCgpIDogMCxcbiAgICAgIGZvb3RlcjogJChTRUxFQ1RPUl9GT09URVIpLmxlbmd0aCAhPT0gMCA/ICQoU0VMRUNUT1JfRk9PVEVSKS5vdXRlckhlaWdodCgpIDogMCxcbiAgICAgIHNpZGViYXI6ICQoU0VMRUNUT1JfU0lERUJBUikubGVuZ3RoICE9PSAwID8gJChTRUxFQ1RPUl9TSURFQkFSKS5oZWlnaHQoKSA6IDAsXG4gICAgICBjb250cm9sU2lkZWJhclxuICAgIH1cblxuICAgIGNvbnN0IG1heCA9IHRoaXMuX21heChoZWlnaHRzKVxuICAgIGxldCBvZmZzZXQgPSB0aGlzLl9jb25maWcucGFuZWxBdXRvSGVpZ2h0XG5cbiAgICBpZiAob2Zmc2V0ID09PSB0cnVlKSB7XG4gICAgICBvZmZzZXQgPSAwXG4gICAgfVxuXG4gICAgY29uc3QgJGNvbnRlbnRTZWxlY3RvciA9ICQoU0VMRUNUT1JfQ09OVEVOVClcblxuICAgIGlmIChvZmZzZXQgIT09IGZhbHNlKSB7XG4gICAgICBpZiAobWF4ID09PSBoZWlnaHRzLmNvbnRyb2xTaWRlYmFyKSB7XG4gICAgICAgIGlmICgkYm9keS5oYXNDbGFzcyhDTEFTU19OQU1FX0xBWU9VVF9UT1BfTkFWKSkge1xuICAgICAgICAgICRjb250ZW50U2VsZWN0b3IuY3NzKHRoaXMuX2NvbmZpZy5wYW5lbEF1dG9IZWlnaHRNb2RlLCAobWF4ICsgb2Zmc2V0KSArIGhlaWdodHMuaGVhZGVyICsgaGVpZ2h0cy5mb290ZXIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJGNvbnRlbnRTZWxlY3Rvci5jc3ModGhpcy5fY29uZmlnLnBhbmVsQXV0b0hlaWdodE1vZGUsIChtYXggKyBvZmZzZXQpKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG1heCA9PT0gaGVpZ2h0cy53aW5kb3cpIHtcbiAgICAgICAgJGNvbnRlbnRTZWxlY3Rvci5jc3ModGhpcy5fY29uZmlnLnBhbmVsQXV0b0hlaWdodE1vZGUsIChtYXggKyBvZmZzZXQpIC0gaGVpZ2h0cy5oZWFkZXIgLSBoZWlnaHRzLmZvb3RlcilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRjb250ZW50U2VsZWN0b3IuY3NzKHRoaXMuX2NvbmZpZy5wYW5lbEF1dG9IZWlnaHRNb2RlLCAobWF4ICsgb2Zmc2V0KSAtIGhlaWdodHMuaGVhZGVyKVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5faXNGb290ZXJGaXhlZCgpKSB7XG4gICAgICAgICRjb250ZW50U2VsZWN0b3IuY3NzKHRoaXMuX2NvbmZpZy5wYW5lbEF1dG9IZWlnaHRNb2RlLCBwYXJzZUZsb2F0KCRjb250ZW50U2VsZWN0b3IuY3NzKHRoaXMuX2NvbmZpZy5wYW5lbEF1dG9IZWlnaHRNb2RlKSkgKyBoZWlnaHRzLmZvb3RlcilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoISRib2R5Lmhhc0NsYXNzKENMQVNTX05BTUVfTEFZT1VUX0ZJWEVEKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKG9mZnNldCAhPT0gZmFsc2UpIHtcbiAgICAgICRjb250ZW50U2VsZWN0b3IuY3NzKHRoaXMuX2NvbmZpZy5wYW5lbEF1dG9IZWlnaHRNb2RlLCAobWF4ICsgb2Zmc2V0KSAtIGhlaWdodHMuaGVhZGVyIC0gaGVpZ2h0cy5mb290ZXIpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiAkLmZuLm92ZXJsYXlTY3JvbGxiYXJzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgJChTRUxFQ1RPUl9TSURFQkFSKS5vdmVybGF5U2Nyb2xsYmFycyh7XG4gICAgICAgIGNsYXNzTmFtZTogdGhpcy5fY29uZmlnLnNjcm9sbGJhclRoZW1lLFxuICAgICAgICBzaXplQXV0b0NhcGFibGU6IHRydWUsXG4gICAgICAgIHNjcm9sbGJhcnM6IHtcbiAgICAgICAgICBhdXRvSGlkZTogdGhpcy5fY29uZmlnLnNjcm9sbGJhckF1dG9IaWRlLFxuICAgICAgICAgIGNsaWNrU2Nyb2xsaW5nOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgZml4TG9naW5SZWdpc3RlckhlaWdodCgpIHtcbiAgICBjb25zdCAkYm9keSA9ICQoJ2JvZHknKVxuICAgIGNvbnN0ICRzZWxlY3RvciA9ICQoYCR7U0VMRUNUT1JfTE9HSU5fQk9YfSwgJHtTRUxFQ1RPUl9SRUdJU1RFUl9CT1h9YClcblxuICAgIGlmICgkc2VsZWN0b3IubGVuZ3RoID09PSAwKSB7XG4gICAgICAkYm9keS5jc3MoJ2hlaWdodCcsICdhdXRvJylcbiAgICAgICQoJ2h0bWwnKS5jc3MoJ2hlaWdodCcsICdhdXRvJylcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYm94SGVpZ2h0ID0gJHNlbGVjdG9yLmhlaWdodCgpXG5cbiAgICAgIGlmICgkYm9keS5jc3ModGhpcy5fY29uZmlnLnBhbmVsQXV0b0hlaWdodE1vZGUpICE9PSBib3hIZWlnaHQpIHtcbiAgICAgICAgJGJvZHkuY3NzKHRoaXMuX2NvbmZpZy5wYW5lbEF1dG9IZWlnaHRNb2RlLCBib3hIZWlnaHQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9pbml0KCkge1xuICAgIC8vIEFjdGl2YXRlIGxheW91dCBoZWlnaHQgd2F0Y2hlclxuICAgIHRoaXMuZml4TGF5b3V0SGVpZ2h0KClcblxuICAgIGlmICh0aGlzLl9jb25maWcubG9naW5SZWdpc3RlckF1dG9IZWlnaHQgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuZml4TG9naW5SZWdpc3RlckhlaWdodCgpXG4gICAgfSBlbHNlIGlmICh0aGlzLl9jb25maWcubG9naW5SZWdpc3RlckF1dG9IZWlnaHQgPT09IHBhcnNlSW50KHRoaXMuX2NvbmZpZy5sb2dpblJlZ2lzdGVyQXV0b0hlaWdodCwgMTApKSB7XG4gICAgICBzZXRJbnRlcnZhbCh0aGlzLmZpeExvZ2luUmVnaXN0ZXJIZWlnaHQsIHRoaXMuX2NvbmZpZy5sb2dpblJlZ2lzdGVyQXV0b0hlaWdodClcbiAgICB9XG5cbiAgICAkKFNFTEVDVE9SX1NJREVCQVIpXG4gICAgICAub24oJ2NvbGxhcHNlZC5sdGUudHJlZXZpZXcgZXhwYW5kZWQubHRlLnRyZWV2aWV3JywgKCkgPT4ge1xuICAgICAgICB0aGlzLmZpeExheW91dEhlaWdodCgpXG4gICAgICB9KVxuXG4gICAgJChTRUxFQ1RPUl9QVVNITUVOVV9CVE4pXG4gICAgICAub24oJ2NvbGxhcHNlZC5sdGUucHVzaG1lbnUgc2hvd24ubHRlLnB1c2htZW51JywgKCkgPT4ge1xuICAgICAgICB0aGlzLmZpeExheW91dEhlaWdodCgpXG4gICAgICB9KVxuXG4gICAgJChTRUxFQ1RPUl9DT05UUk9MX1NJREVCQVJfQlROKVxuICAgICAgLm9uKCdjb2xsYXBzZWQubHRlLmNvbnRyb2xzaWRlYmFyJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmZpeExheW91dEhlaWdodCgpXG4gICAgICB9KVxuICAgICAgLm9uKCdleHBhbmRlZC5sdGUuY29udHJvbHNpZGViYXInLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuZml4TGF5b3V0SGVpZ2h0KCdjb250cm9sX3NpZGViYXInKVxuICAgICAgfSlcblxuICAgICQod2luZG93KS5yZXNpemUoKCkgPT4ge1xuICAgICAgdGhpcy5maXhMYXlvdXRIZWlnaHQoKVxuICAgIH0pXG5cbiAgICAkKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XG4gICAgICB0aGlzLmZpeExheW91dEhlaWdodCgpXG4gICAgfSlcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgJCgnYm9keS5ob2xkLXRyYW5zaXRpb24nKS5yZW1vdmVDbGFzcygnaG9sZC10cmFuc2l0aW9uJylcbiAgICB9LCA1MClcbiAgfVxuXG4gIF9tYXgobnVtYmVycykge1xuICAgIC8vIENhbGN1bGF0ZSB0aGUgbWF4aW11bSBudW1iZXIgaW4gYSBsaXN0XG4gICAgbGV0IG1heCA9IDBcblxuICAgIE9iamVjdC5rZXlzKG51bWJlcnMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGlmIChudW1iZXJzW2tleV0gPiBtYXgpIHtcbiAgICAgICAgbWF4ID0gbnVtYmVyc1trZXldXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBtYXhcbiAgfVxuXG4gIF9pc0Zvb3RlckZpeGVkKCkge1xuICAgIHJldHVybiAkKFNFTEVDVE9SX0ZPT1RFUikuY3NzKCdwb3NpdGlvbicpID09PSAnZml4ZWQnXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcgPSAnJykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXG4gICAgICBjb25zdCBfb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCAkKHRoaXMpLmRhdGEoKSlcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgTGF5b3V0KCQodGhpcyksIF9vcHRpb25zKVxuICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWcgPT09ICdpbml0JyB8fCBjb25maWcgPT09ICcnKSB7XG4gICAgICAgIGRhdGEuX2luaXQoKVxuICAgICAgfSBlbHNlIGlmIChjb25maWcgPT09ICdmaXhMYXlvdXRIZWlnaHQnIHx8IGNvbmZpZyA9PT0gJ2ZpeExvZ2luUmVnaXN0ZXJIZWlnaHQnKSB7XG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIERhdGEgQVBJXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuJCh3aW5kb3cpLm9uKCdsb2FkJywgKCkgPT4ge1xuICBMYXlvdXQuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQoJ2JvZHknKSlcbn0pXG5cbiQoYCR7U0VMRUNUT1JfU0lERUJBUn0gYWApLm9uKCdmb2N1c2luJywgKCkgPT4ge1xuICAkKFNFTEVDVE9SX01BSU5fU0lERUJBUikuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9TSURFQkFSX0ZPQ1VTRUQpXG59KVxuXG4kKGAke1NFTEVDVE9SX1NJREVCQVJ9IGFgKS5vbignZm9jdXNvdXQnLCAoKSA9PiB7XG4gICQoU0VMRUNUT1JfTUFJTl9TSURFQkFSKS5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX1NJREVCQVJfRk9DVVNFRClcbn0pXG5cbi8qKlxuICogalF1ZXJ5IEFQSVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbiQuZm5bTkFNRV0gPSBMYXlvdXQuX2pRdWVyeUludGVyZmFjZVxuJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IExheW91dFxuJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gIHJldHVybiBMYXlvdXQuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEFkbWluTFRFIFB1c2hNZW51LmpzXG4gKiBMaWNlbnNlIE1JVFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuY29uc3QgTkFNRSA9ICdQdXNoTWVudSdcbmNvbnN0IERBVEFfS0VZID0gJ2x0ZS5wdXNobWVudSdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG5cbmNvbnN0IEVWRU5UX0NPTExBUFNFRCA9IGBjb2xsYXBzZWQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcblxuY29uc3QgU0VMRUNUT1JfVE9HR0xFX0JVVFRPTiA9ICdbZGF0YS13aWRnZXQ9XCJwdXNobWVudVwiXSdcbmNvbnN0IFNFTEVDVE9SX0JPRFkgPSAnYm9keSdcbmNvbnN0IFNFTEVDVE9SX09WRVJMQVkgPSAnI3NpZGViYXItb3ZlcmxheSdcbmNvbnN0IFNFTEVDVE9SX1dSQVBQRVIgPSAnLndyYXBwZXInXG5cbmNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0VEID0gJ3NpZGViYXItY29sbGFwc2UnXG5jb25zdCBDTEFTU19OQU1FX09QRU4gPSAnc2lkZWJhci1vcGVuJ1xuY29uc3QgQ0xBU1NfTkFNRV9JU19PUEVOSU5HID0gJ3NpZGViYXItaXMtb3BlbmluZydcbmNvbnN0IENMQVNTX05BTUVfQ0xPU0VEID0gJ3NpZGViYXItY2xvc2VkJ1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBhdXRvQ29sbGFwc2VTaXplOiA5OTIsXG4gIGVuYWJsZVJlbWVtYmVyOiBmYWxzZSxcbiAgbm9UcmFuc2l0aW9uQWZ0ZXJSZWxvYWQ6IHRydWVcbn1cblxuLyoqXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuY2xhc3MgUHVzaE1lbnUge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLl9vcHRpb25zID0gJC5leHRlbmQoe30sIERlZmF1bHQsIG9wdGlvbnMpXG5cbiAgICBpZiAoJChTRUxFQ1RPUl9PVkVSTEFZKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuX2FkZE92ZXJsYXkoKVxuICAgIH1cblxuICAgIHRoaXMuX2luaXQoKVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgZXhwYW5kKCkge1xuICAgIGNvbnN0ICRib2R5U2VsZWN0b3IgPSAkKFNFTEVDVE9SX0JPRFkpXG5cbiAgICBpZiAodGhpcy5fb3B0aW9ucy5hdXRvQ29sbGFwc2VTaXplKSB7XG4gICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gdGhpcy5fb3B0aW9ucy5hdXRvQ29sbGFwc2VTaXplKSB7XG4gICAgICAgICRib2R5U2VsZWN0b3IuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9PUEVOKVxuICAgICAgfVxuICAgIH1cblxuICAgICRib2R5U2VsZWN0b3IuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9JU19PUEVOSU5HKS5yZW1vdmVDbGFzcyhgJHtDTEFTU19OQU1FX0NPTExBUFNFRH0gJHtDTEFTU19OQU1FX0NMT1NFRH1gKS5kZWxheSg1MCkucXVldWUoZnVuY3Rpb24gKCkge1xuICAgICAgJGJvZHlTZWxlY3Rvci5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX0lTX09QRU5JTkcpXG4gICAgICAkKHRoaXMpLmRlcXVldWUoKVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5fb3B0aW9ucy5lbmFibGVSZW1lbWJlcikge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHJlbWVtYmVyJHtFVkVOVF9LRVl9YCwgQ0xBU1NfTkFNRV9PUEVOKVxuICAgIH1cblxuICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcigkLkV2ZW50KEVWRU5UX1NIT1dOKSlcbiAgfVxuXG4gIGNvbGxhcHNlKCkge1xuICAgIGNvbnN0ICRib2R5U2VsZWN0b3IgPSAkKFNFTEVDVE9SX0JPRFkpXG5cbiAgICBpZiAodGhpcy5fb3B0aW9ucy5hdXRvQ29sbGFwc2VTaXplKSB7XG4gICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gdGhpcy5fb3B0aW9ucy5hdXRvQ29sbGFwc2VTaXplKSB7XG4gICAgICAgICRib2R5U2VsZWN0b3IucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9PUEVOKS5hZGRDbGFzcyhDTEFTU19OQU1FX0NMT1NFRClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAkYm9keVNlbGVjdG9yLmFkZENsYXNzKENMQVNTX05BTUVfQ09MTEFQU0VEKVxuXG4gICAgaWYgKHRoaXMuX29wdGlvbnMuZW5hYmxlUmVtZW1iZXIpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGByZW1lbWJlciR7RVZFTlRfS0VZfWAsIENMQVNTX05BTUVfQ09MTEFQU0VEKVxuICAgIH1cblxuICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcigkLkV2ZW50KEVWRU5UX0NPTExBUFNFRCkpXG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKCQoU0VMRUNUT1JfQk9EWSkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9DT0xMQVBTRUQpKSB7XG4gICAgICB0aGlzLmV4cGFuZCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29sbGFwc2UoKVxuICAgIH1cbiAgfVxuXG4gIGF1dG9Db2xsYXBzZShyZXNpemUgPSBmYWxzZSkge1xuICAgIGlmICghdGhpcy5fb3B0aW9ucy5hdXRvQ29sbGFwc2VTaXplKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCAkYm9keVNlbGVjdG9yID0gJChTRUxFQ1RPUl9CT0RZKVxuXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IHRoaXMuX29wdGlvbnMuYXV0b0NvbGxhcHNlU2l6ZSkge1xuICAgICAgaWYgKCEkYm9keVNlbGVjdG9yLmhhc0NsYXNzKENMQVNTX05BTUVfT1BFTikpIHtcbiAgICAgICAgdGhpcy5jb2xsYXBzZSgpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChyZXNpemUgPT09IHRydWUpIHtcbiAgICAgIGlmICgkYm9keVNlbGVjdG9yLmhhc0NsYXNzKENMQVNTX05BTUVfT1BFTikpIHtcbiAgICAgICAgJGJvZHlTZWxlY3Rvci5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX09QRU4pXG4gICAgICB9IGVsc2UgaWYgKCRib2R5U2VsZWN0b3IuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9DTE9TRUQpKSB7XG4gICAgICAgIHRoaXMuZXhwYW5kKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW1lbWJlcigpIHtcbiAgICBpZiAoIXRoaXMuX29wdGlvbnMuZW5hYmxlUmVtZW1iZXIpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0ICRib2R5ID0gJCgnYm9keScpXG4gICAgY29uc3QgdG9nZ2xlU3RhdGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgcmVtZW1iZXIke0VWRU5UX0tFWX1gKVxuXG4gICAgaWYgKHRvZ2dsZVN0YXRlID09PSBDTEFTU19OQU1FX0NPTExBUFNFRCkge1xuICAgICAgaWYgKHRoaXMuX29wdGlvbnMubm9UcmFuc2l0aW9uQWZ0ZXJSZWxvYWQpIHtcbiAgICAgICAgJGJvZHkuYWRkQ2xhc3MoJ2hvbGQtdHJhbnNpdGlvbicpLmFkZENsYXNzKENMQVNTX05BTUVfQ09MTEFQU0VEKS5kZWxheSg1MCkucXVldWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2hvbGQtdHJhbnNpdGlvbicpXG4gICAgICAgICAgJCh0aGlzKS5kZXF1ZXVlKClcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRib2R5LmFkZENsYXNzKENMQVNTX05BTUVfQ09MTEFQU0VEKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5fb3B0aW9ucy5ub1RyYW5zaXRpb25BZnRlclJlbG9hZCkge1xuICAgICAgJGJvZHkuYWRkQ2xhc3MoJ2hvbGQtdHJhbnNpdGlvbicpLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfQ09MTEFQU0VEKS5kZWxheSg1MCkucXVldWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdob2xkLXRyYW5zaXRpb24nKVxuICAgICAgICAkKHRoaXMpLmRlcXVldWUoKVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgJGJvZHkucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9DT0xMQVBTRUQpXG4gICAgfVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9pbml0KCkge1xuICAgIHRoaXMucmVtZW1iZXIoKVxuICAgIHRoaXMuYXV0b0NvbGxhcHNlKClcblxuICAgICQod2luZG93KS5yZXNpemUoKCkgPT4ge1xuICAgICAgdGhpcy5hdXRvQ29sbGFwc2UodHJ1ZSlcbiAgICB9KVxuICB9XG5cbiAgX2FkZE92ZXJsYXkoKSB7XG4gICAgY29uc3Qgb3ZlcmxheSA9ICQoJzxkaXYgLz4nLCB7XG4gICAgICBpZDogJ3NpZGViYXItb3ZlcmxheSdcbiAgICB9KVxuXG4gICAgb3ZlcmxheS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmNvbGxhcHNlKClcbiAgICB9KVxuXG4gICAgJChTRUxFQ1RPUl9XUkFQUEVSKS5hcHBlbmQob3ZlcmxheSlcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKG9wZXJhdGlvbikge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXG4gICAgICBjb25zdCBfb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCAkKHRoaXMpLmRhdGEoKSlcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgUHVzaE1lbnUodGhpcywgX29wdGlvbnMpXG4gICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBvcGVyYXRpb24gPT09ICdzdHJpbmcnICYmIG9wZXJhdGlvbi5tYXRjaCgvY29sbGFwc2V8ZXhwYW5kfHRvZ2dsZS8pKSB7XG4gICAgICAgIGRhdGFbb3BlcmF0aW9uXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIERhdGEgQVBJXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgU0VMRUNUT1JfVE9HR0xFX0JVVFRPTiwgZXZlbnQgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgbGV0IGJ1dHRvbiA9IGV2ZW50LmN1cnJlbnRUYXJnZXRcblxuICBpZiAoJChidXR0b24pLmRhdGEoJ3dpZGdldCcpICE9PSAncHVzaG1lbnUnKSB7XG4gICAgYnV0dG9uID0gJChidXR0b24pLmNsb3Nlc3QoU0VMRUNUT1JfVE9HR0xFX0JVVFRPTilcbiAgfVxuXG4gIFB1c2hNZW51Ll9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKGJ1dHRvbiksICd0b2dnbGUnKVxufSlcblxuJCh3aW5kb3cpLm9uKCdsb2FkJywgKCkgPT4ge1xuICBQdXNoTWVudS5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJChTRUxFQ1RPUl9UT0dHTEVfQlVUVE9OKSlcbn0pXG5cbi8qKlxuICogalF1ZXJ5IEFQSVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbiQuZm5bTkFNRV0gPSBQdXNoTWVudS5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gUHVzaE1lbnVcbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gUHVzaE1lbnUuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBQdXNoTWVudVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQWRtaW5MVEUgU2lkZWJhclNlYXJjaC5qc1xuICogTGljZW5zZSBNSVRcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQsIHsgdHJpbSB9IGZyb20gJ2pxdWVyeSdcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ1NpZGViYXJTZWFyY2gnXG5jb25zdCBEQVRBX0tFWSA9ICdsdGUuc2lkZWJhci1zZWFyY2gnXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG5cbmNvbnN0IENMQVNTX05BTUVfT1BFTiA9ICdzaWRlYmFyLXNlYXJjaC1vcGVuJ1xuY29uc3QgQ0xBU1NfTkFNRV9JQ09OX1NFQVJDSCA9ICdmYS1zZWFyY2gnXG5jb25zdCBDTEFTU19OQU1FX0lDT05fQ0xPU0UgPSAnZmEtdGltZXMnXG5jb25zdCBDTEFTU19OQU1FX0hFQURFUiA9ICduYXYtaGVhZGVyJ1xuY29uc3QgQ0xBU1NfTkFNRV9TRUFSQ0hfUkVTVUxUUyA9ICdzaWRlYmFyLXNlYXJjaC1yZXN1bHRzJ1xuY29uc3QgQ0xBU1NfTkFNRV9MSVNUX0dST1VQID0gJ2xpc3QtZ3JvdXAnXG5cbmNvbnN0IFNFTEVDVE9SX0RBVEFfV0lER0VUID0gJ1tkYXRhLXdpZGdldD1cInNpZGViYXItc2VhcmNoXCJdJ1xuY29uc3QgU0VMRUNUT1JfU0lERUJBUiA9ICcubWFpbi1zaWRlYmFyIC5uYXYtc2lkZWJhcidcbmNvbnN0IFNFTEVDVE9SX05BVl9MSU5LID0gJy5uYXYtbGluaydcbmNvbnN0IFNFTEVDVE9SX05BVl9UUkVFVklFVyA9ICcubmF2LXRyZWV2aWV3J1xuY29uc3QgU0VMRUNUT1JfU0VBUkNIX0lOUFVUID0gYCR7U0VMRUNUT1JfREFUQV9XSURHRVR9IC5mb3JtLWNvbnRyb2xgXG5jb25zdCBTRUxFQ1RPUl9TRUFSQ0hfQlVUVE9OID0gYCR7U0VMRUNUT1JfREFUQV9XSURHRVR9IC5idG5gXG5jb25zdCBTRUxFQ1RPUl9TRUFSQ0hfSUNPTiA9IGAke1NFTEVDVE9SX1NFQVJDSF9CVVRUT059IGlgXG5jb25zdCBTRUxFQ1RPUl9TRUFSQ0hfTElTVF9HUk9VUCA9IGAuJHtDTEFTU19OQU1FX0xJU1RfR1JPVVB9YFxuY29uc3QgU0VMRUNUT1JfU0VBUkNIX1JFU1VMVFMgPSBgLiR7Q0xBU1NfTkFNRV9TRUFSQ0hfUkVTVUxUU31gXG5jb25zdCBTRUxFQ1RPUl9TRUFSQ0hfUkVTVUxUU19HUk9VUCA9IGAke1NFTEVDVE9SX1NFQVJDSF9SRVNVTFRTfSAuJHtDTEFTU19OQU1FX0xJU1RfR1JPVVB9YFxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBhcnJvd1NpZ246ICctPicsXG4gIG1pbkxlbmd0aDogMyxcbiAgbWF4UmVzdWx0czogNyxcbiAgaGlnaGxpZ2h0TmFtZTogdHJ1ZSxcbiAgaGlnaGxpZ2h0UGF0aDogZmFsc2UsXG4gIGhpZ2hsaWdodENsYXNzOiAndGV4dC1saWdodCcsXG4gIG5vdEZvdW5kVGV4dDogJ05vIGVsZW1lbnQgZm91bmQhJ1xufVxuXG5jb25zdCBTZWFyY2hJdGVtcyA9IFtdXG5cbi8qKlxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbmNsYXNzIFNpZGViYXJTZWFyY2gge1xuICBjb25zdHJ1Y3RvcihfZWxlbWVudCwgX29wdGlvbnMpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBfZWxlbWVudFxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCBfb3B0aW9ucylcbiAgICB0aGlzLml0ZW1zID0gW11cbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIGluaXQoKSB7XG4gICAgaWYgKCQoU0VMRUNUT1JfREFUQV9XSURHRVQpLmxlbmd0aCA9PSAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoJChTRUxFQ1RPUl9EQVRBX1dJREdFVCkubmV4dChTRUxFQ1RPUl9TRUFSQ0hfUkVTVUxUUykubGVuZ3RoID09IDApIHtcbiAgICAgICQoU0VMRUNUT1JfREFUQV9XSURHRVQpLmFmdGVyKFxuICAgICAgICAkKCc8ZGl2IC8+JywgeyBjbGFzczogQ0xBU1NfTkFNRV9TRUFSQ0hfUkVTVUxUUyB9KVxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICgkKFNFTEVDVE9SX1NFQVJDSF9SRVNVTFRTKS5jaGlsZHJlbihTRUxFQ1RPUl9TRUFSQ0hfTElTVF9HUk9VUCkubGVuZ3RoID09IDApIHtcbiAgICAgICQoU0VMRUNUT1JfU0VBUkNIX1JFU1VMVFMpLmFwcGVuZChcbiAgICAgICAgJCgnPGRpdiAvPicsIHsgY2xhc3M6IENMQVNTX05BTUVfTElTVF9HUk9VUCB9KVxuICAgICAgKVxuICAgIH1cblxuICAgIHRoaXMuX2FkZE5vdEZvdW5kKClcblxuICAgICQoU0VMRUNUT1JfU0lERUJBUikuY2hpbGRyZW4oKS5lYWNoKChpLCBjaGlsZCkgPT4ge1xuICAgICAgdGhpcy5fcGFyc2VJdGVtKGNoaWxkKVxuICAgIH0pXG4gIH1cblxuICBzZWFyY2goKSB7XG4gICAgY29uc3Qgc2VhcmNoVmFsdWUgPSAkKFNFTEVDVE9SX1NFQVJDSF9JTlBVVCkudmFsKCkudG9Mb3dlckNhc2UoKVxuICAgIGlmIChzZWFyY2hWYWx1ZS5sZW5ndGggPCB0aGlzLm9wdGlvbnMubWluTGVuZ3RoKSB7XG4gICAgICAkKFNFTEVDVE9SX1NFQVJDSF9SRVNVTFRTX0dST1VQKS5lbXB0eSgpXG4gICAgICB0aGlzLl9hZGROb3RGb3VuZCgpXG4gICAgICB0aGlzLmNsb3NlKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHNlYXJjaFJlc3VsdHMgPSBTZWFyY2hJdGVtcy5maWx0ZXIoaXRlbSA9PiAoaXRlbS5uYW1lKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFZhbHVlKSlcbiAgICBjb25zdCBlbmRSZXN1bHRzID0gJChzZWFyY2hSZXN1bHRzLnNsaWNlKDAsIHRoaXMub3B0aW9ucy5tYXhSZXN1bHRzKSlcbiAgICAkKFNFTEVDVE9SX1NFQVJDSF9SRVNVTFRTX0dST1VQKS5lbXB0eSgpXG5cbiAgICBpZiAoZW5kUmVzdWx0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuX2FkZE5vdEZvdW5kKClcbiAgICB9IGVsc2Uge1xuICAgICAgZW5kUmVzdWx0cy5lYWNoKChpLCByZXN1bHQpID0+IHtcbiAgICAgICAgJChTRUxFQ1RPUl9TRUFSQ0hfUkVTVUxUU19HUk9VUCkuYXBwZW5kKHRoaXMuX3JlbmRlckl0ZW0ocmVzdWx0Lm5hbWUsIHJlc3VsdC5saW5rLCByZXN1bHQucGF0aCkpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMub3BlbigpXG4gIH1cblxuICBvcGVuKCkge1xuICAgICQoU0VMRUNUT1JfREFUQV9XSURHRVQpLnBhcmVudCgpLmFkZENsYXNzKENMQVNTX05BTUVfT1BFTilcbiAgICAkKFNFTEVDVE9SX1NFQVJDSF9JQ09OKS5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX0lDT05fU0VBUkNIKS5hZGRDbGFzcyhDTEFTU19OQU1FX0lDT05fQ0xPU0UpXG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICAkKFNFTEVDVE9SX0RBVEFfV0lER0VUKS5wYXJlbnQoKS5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX09QRU4pXG4gICAgJChTRUxFQ1RPUl9TRUFSQ0hfSUNPTikucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9JQ09OX0NMT1NFKS5hZGRDbGFzcyhDTEFTU19OQU1FX0lDT05fU0VBUkNIKVxuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICgkKFNFTEVDVE9SX0RBVEFfV0lER0VUKS5wYXJlbnQoKS5oYXNDbGFzcyhDTEFTU19OQU1FX09QRU4pKSB7XG4gICAgICB0aGlzLmNsb3NlKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGVuKClcbiAgICB9XG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX3BhcnNlSXRlbShpdGVtLCBwYXRoID0gW10pIHtcbiAgICBpZiAoJChpdGVtKS5oYXNDbGFzcyhDTEFTU19OQU1FX0hFQURFUikpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGl0ZW1PYmplY3QgPSB7fVxuICAgIGNvbnN0IG5hdkxpbmsgPSAkKGl0ZW0pLmNsb25lKCkuZmluZChgPiAke1NFTEVDVE9SX05BVl9MSU5LfWApXG4gICAgY29uc3QgbmF2VHJlZXZpZXcgPSAkKGl0ZW0pLmNsb25lKCkuZmluZChgPiAke1NFTEVDVE9SX05BVl9UUkVFVklFV31gKVxuXG4gICAgY29uc3QgbGluayA9IG5hdkxpbmsuYXR0cignaHJlZicpXG4gICAgY29uc3QgbmFtZSA9IG5hdkxpbmsuZmluZCgncCcpLmNoaWxkcmVuKCkucmVtb3ZlKCkuZW5kKCkudGV4dCgpXG5cbiAgICBpdGVtT2JqZWN0Lm5hbWUgPSB0aGlzLl90cmltVGV4dChuYW1lKVxuICAgIGl0ZW1PYmplY3QubGluayA9IGxpbmtcbiAgICBpdGVtT2JqZWN0LnBhdGggPSBwYXRoXG5cbiAgICBpZiAobmF2VHJlZXZpZXcubGVuZ3RoID09PSAwKSB7XG4gICAgICBTZWFyY2hJdGVtcy5wdXNoKGl0ZW1PYmplY3QpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5ld1BhdGggPSBpdGVtT2JqZWN0LnBhdGguY29uY2F0KFtpdGVtT2JqZWN0Lm5hbWVdKVxuICAgICAgbmF2VHJlZXZpZXcuY2hpbGRyZW4oKS5lYWNoKChpLCBjaGlsZCkgPT4ge1xuICAgICAgICB0aGlzLl9wYXJzZUl0ZW0oY2hpbGQsIG5ld1BhdGgpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIF90cmltVGV4dCh0ZXh0KSB7XG4gICAgcmV0dXJuIHRyaW0odGV4dC5yZXBsYWNlKC8oXFxyXFxufFxcbnxcXHIpL2dtLCAnICcpKVxuICB9XG5cbiAgX3JlbmRlckl0ZW0obmFtZSwgbGluaywgcGF0aCkge1xuICAgIHBhdGggPSBwYXRoLmpvaW4oYCAke3RoaXMub3B0aW9ucy5hcnJvd1NpZ259IGApXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmhpZ2hsaWdodE5hbWUgfHwgdGhpcy5vcHRpb25zLmhpZ2hsaWdodFBhdGgpIHtcbiAgICAgIGNvbnN0IHNlYXJjaFZhbHVlID0gJChTRUxFQ1RPUl9TRUFSQ0hfSU5QVVQpLnZhbCgpLnRvTG93ZXJDYXNlKClcbiAgICAgIGNvbnN0IHJlZ0V4cCA9IG5ldyBSZWdFeHAoc2VhcmNoVmFsdWUsICdnaScpXG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuaGlnaGxpZ2h0TmFtZSkge1xuICAgICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKFxuICAgICAgICAgIHJlZ0V4cCxcbiAgICAgICAgICBzdHIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGA8YiBjbGFzcz1cIiR7dGhpcy5vcHRpb25zLmhpZ2hsaWdodENsYXNzfVwiPiR7c3RyfTwvYj5gXG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuaGlnaGxpZ2h0UGF0aCkge1xuICAgICAgICBwYXRoID0gcGF0aC5yZXBsYWNlKFxuICAgICAgICAgIHJlZ0V4cCxcbiAgICAgICAgICBzdHIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGA8YiBjbGFzcz1cIiR7dGhpcy5vcHRpb25zLmhpZ2hsaWdodENsYXNzfVwiPiR7c3RyfTwvYj5gXG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGA8YSBocmVmPVwiJHtsaW5rfVwiIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtdGl0bGVcIj5cbiAgICAgICAgICAke25hbWV9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLXBhdGhcIj5cbiAgICAgICAgICAke3BhdGh9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9hPmBcbiAgfVxuXG4gIF9hZGROb3RGb3VuZCgpIHtcbiAgICAkKFNFTEVDVE9SX1NFQVJDSF9SRVNVTFRTX0dST1VQKS5hcHBlbmQodGhpcy5fcmVuZGVySXRlbSh0aGlzLm9wdGlvbnMubm90Rm91bmRUZXh0LCAnIycsIFtdKSlcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIGxldCBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICBkYXRhID0gJCh0aGlzKS5kYXRhKClcbiAgICB9XG5cbiAgICBjb25zdCBfb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IGRhdGEpXG4gICAgY29uc3QgcGx1Z2luID0gbmV3IFNpZGViYXJTZWFyY2goJCh0aGlzKSwgX29wdGlvbnMpXG5cbiAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDogZGF0YSlcblxuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyAmJiBjb25maWcubWF0Y2goL2luaXR8dG9nZ2xlfGNsb3NlfG9wZW58c2VhcmNoLykpIHtcbiAgICAgIHBsdWdpbltjb25maWddKClcbiAgICB9IGVsc2Uge1xuICAgICAgcGx1Z2luLmluaXQoKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIERhdGEgQVBJXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsIFNFTEVDVE9SX1NFQVJDSF9CVVRUT04sIGV2ZW50ID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gIFNpZGViYXJTZWFyY2guX2pRdWVyeUludGVyZmFjZS5jYWxsKCQoU0VMRUNUT1JfREFUQV9XSURHRVQpLCAndG9nZ2xlJylcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdrZXl1cCcsIFNFTEVDVE9SX1NFQVJDSF9JTlBVVCwgZXZlbnQgPT4ge1xuICBpZiAoZXZlbnQua2V5Q29kZSA9PSAzOCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAkKFNFTEVDVE9SX1NFQVJDSF9SRVNVTFRTX0dST1VQKS5jaGlsZHJlbigpLmxhc3QoKS5mb2N1cygpXG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoZXZlbnQua2V5Q29kZSA9PSA0MCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAkKFNFTEVDVE9SX1NFQVJDSF9SRVNVTFRTX0dST1VQKS5jaGlsZHJlbigpLmZpcnN0KCkuZm9jdXMoKVxuICAgIHJldHVyblxuICB9XG5cbiAgbGV0IHRpbWVyID0gMFxuICBjbGVhclRpbWVvdXQodGltZXIpXG4gIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgU2lkZWJhclNlYXJjaC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJChTRUxFQ1RPUl9EQVRBX1dJREdFVCksICdzZWFyY2gnKVxuICB9LCAxMDApXG59KVxuXG4kKGRvY3VtZW50KS5vbigna2V5ZG93bicsIFNFTEVDVE9SX1NFQVJDSF9SRVNVTFRTX0dST1VQLCBldmVudCA9PiB7XG4gIGNvbnN0ICRmb2N1c2VkID0gJCgnOmZvY3VzJylcblxuICBpZiAoZXZlbnQua2V5Q29kZSA9PSAzOCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIGlmICgkZm9jdXNlZC5pcygnOmZpcnN0LWNoaWxkJykpIHtcbiAgICAgICRmb2N1c2VkLnNpYmxpbmdzKCkubGFzdCgpLmZvY3VzKClcbiAgICB9IGVsc2Uge1xuICAgICAgJGZvY3VzZWQucHJldigpLmZvY3VzKClcbiAgICB9XG4gIH1cblxuICBpZiAoZXZlbnQua2V5Q29kZSA9PSA0MCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIGlmICgkZm9jdXNlZC5pcygnOmxhc3QtY2hpbGQnKSkge1xuICAgICAgJGZvY3VzZWQuc2libGluZ3MoKS5maXJzdCgpLmZvY3VzKClcbiAgICB9IGVsc2Uge1xuICAgICAgJGZvY3VzZWQubmV4dCgpLmZvY3VzKClcbiAgICB9XG4gIH1cbn0pXG5cbiQod2luZG93KS5vbignbG9hZCcsICgpID0+IHtcbiAgU2lkZWJhclNlYXJjaC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJChTRUxFQ1RPUl9EQVRBX1dJREdFVCksICdpbml0Jylcbn0pXG5cbi8qKlxuICogalF1ZXJ5IEFQSVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbiQuZm5bTkFNRV0gPSBTaWRlYmFyU2VhcmNoLl9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBTaWRlYmFyU2VhcmNoXG4kLmZuW05BTUVdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIFNpZGViYXJTZWFyY2guX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyU2VhcmNoXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBBZG1pbkxURSBUb2FzdHMuanNcbiAqIExpY2Vuc2UgTUlUXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ1RvYXN0cydcbmNvbnN0IERBVEFfS0VZID0gJ2x0ZS50b2FzdHMnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXVxuXG5jb25zdCBFVkVOVF9JTklUID0gYGluaXQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DUkVBVEVEID0gYGNyZWF0ZWQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9SRU1PVkVEID0gYHJlbW92ZWQke0VWRU5UX0tFWX1gXG5cbmNvbnN0IFNFTEVDVE9SX0NPTlRBSU5FUl9UT1BfUklHSFQgPSAnI3RvYXN0c0NvbnRhaW5lclRvcFJpZ2h0J1xuY29uc3QgU0VMRUNUT1JfQ09OVEFJTkVSX1RPUF9MRUZUID0gJyN0b2FzdHNDb250YWluZXJUb3BMZWZ0J1xuY29uc3QgU0VMRUNUT1JfQ09OVEFJTkVSX0JPVFRPTV9SSUdIVCA9ICcjdG9hc3RzQ29udGFpbmVyQm90dG9tUmlnaHQnXG5jb25zdCBTRUxFQ1RPUl9DT05UQUlORVJfQk9UVE9NX0xFRlQgPSAnI3RvYXN0c0NvbnRhaW5lckJvdHRvbUxlZnQnXG5cbmNvbnN0IENMQVNTX05BTUVfVE9QX1JJR0hUID0gJ3RvYXN0cy10b3AtcmlnaHQnXG5jb25zdCBDTEFTU19OQU1FX1RPUF9MRUZUID0gJ3RvYXN0cy10b3AtbGVmdCdcbmNvbnN0IENMQVNTX05BTUVfQk9UVE9NX1JJR0hUID0gJ3RvYXN0cy1ib3R0b20tcmlnaHQnXG5jb25zdCBDTEFTU19OQU1FX0JPVFRPTV9MRUZUID0gJ3RvYXN0cy1ib3R0b20tbGVmdCdcblxuY29uc3QgUE9TSVRJT05fVE9QX1JJR0hUID0gJ3RvcFJpZ2h0J1xuY29uc3QgUE9TSVRJT05fVE9QX0xFRlQgPSAndG9wTGVmdCdcbmNvbnN0IFBPU0lUSU9OX0JPVFRPTV9SSUdIVCA9ICdib3R0b21SaWdodCdcbmNvbnN0IFBPU0lUSU9OX0JPVFRPTV9MRUZUID0gJ2JvdHRvbUxlZnQnXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIHBvc2l0aW9uOiBQT1NJVElPTl9UT1BfUklHSFQsXG4gIGZpeGVkOiB0cnVlLFxuICBhdXRvaGlkZTogZmFsc2UsXG4gIGF1dG9yZW1vdmU6IHRydWUsXG4gIGRlbGF5OiAxMDAwLFxuICBmYWRlOiB0cnVlLFxuICBpY29uOiBudWxsLFxuICBpbWFnZTogbnVsbCxcbiAgaW1hZ2VBbHQ6IG51bGwsXG4gIGltYWdlSGVpZ2h0OiAnMjVweCcsXG4gIHRpdGxlOiBudWxsLFxuICBzdWJ0aXRsZTogbnVsbCxcbiAgY2xvc2U6IHRydWUsXG4gIGJvZHk6IG51bGwsXG4gIGNsYXNzOiBudWxsXG59XG5cbi8qKlxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5jbGFzcyBUb2FzdHMge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWdcbiAgICB0aGlzLl9wcmVwYXJlQ29udGFpbmVyKClcblxuICAgICQoJ2JvZHknKS50cmlnZ2VyKCQuRXZlbnQoRVZFTlRfSU5JVCkpXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICBjcmVhdGUoKSB7XG4gICAgY29uc3QgdG9hc3QgPSAkKCc8ZGl2IGNsYXNzPVwidG9hc3RcIiByb2xlPVwiYWxlcnRcIiBhcmlhLWxpdmU9XCJhc3NlcnRpdmVcIiBhcmlhLWF0b21pYz1cInRydWVcIi8+JylcblxuICAgIHRvYXN0LmRhdGEoJ2F1dG9oaWRlJywgdGhpcy5fY29uZmlnLmF1dG9oaWRlKVxuICAgIHRvYXN0LmRhdGEoJ2FuaW1hdGlvbicsIHRoaXMuX2NvbmZpZy5mYWRlKVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5jbGFzcykge1xuICAgICAgdG9hc3QuYWRkQ2xhc3ModGhpcy5fY29uZmlnLmNsYXNzKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcuZGVsYXkgJiYgdGhpcy5fY29uZmlnLmRlbGF5ICE9IDUwMCkge1xuICAgICAgdG9hc3QuZGF0YSgnZGVsYXknLCB0aGlzLl9jb25maWcuZGVsYXkpXG4gICAgfVxuXG4gICAgY29uc3QgdG9hc3RIZWFkZXIgPSAkKCc8ZGl2IGNsYXNzPVwidG9hc3QtaGVhZGVyXCI+JylcblxuICAgIGlmICh0aGlzLl9jb25maWcuaW1hZ2UgIT0gbnVsbCkge1xuICAgICAgY29uc3QgdG9hc3RJbWFnZSA9ICQoJzxpbWcgLz4nKS5hZGRDbGFzcygncm91bmRlZCBtci0yJykuYXR0cignc3JjJywgdGhpcy5fY29uZmlnLmltYWdlKS5hdHRyKCdhbHQnLCB0aGlzLl9jb25maWcuaW1hZ2VBbHQpXG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcuaW1hZ2VIZWlnaHQgIT0gbnVsbCkge1xuICAgICAgICB0b2FzdEltYWdlLmhlaWdodCh0aGlzLl9jb25maWcuaW1hZ2VIZWlnaHQpLndpZHRoKCdhdXRvJylcbiAgICAgIH1cblxuICAgICAgdG9hc3RIZWFkZXIuYXBwZW5kKHRvYXN0SW1hZ2UpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5pY29uICE9IG51bGwpIHtcbiAgICAgIHRvYXN0SGVhZGVyLmFwcGVuZCgkKCc8aSAvPicpLmFkZENsYXNzKCdtci0yJykuYWRkQ2xhc3ModGhpcy5fY29uZmlnLmljb24pKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcudGl0bGUgIT0gbnVsbCkge1xuICAgICAgdG9hc3RIZWFkZXIuYXBwZW5kKCQoJzxzdHJvbmcgLz4nKS5hZGRDbGFzcygnbXItYXV0bycpLmh0bWwodGhpcy5fY29uZmlnLnRpdGxlKSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnN1YnRpdGxlICE9IG51bGwpIHtcbiAgICAgIHRvYXN0SGVhZGVyLmFwcGVuZCgkKCc8c21hbGwgLz4nKS5odG1sKHRoaXMuX2NvbmZpZy5zdWJ0aXRsZSkpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5jbG9zZSA9PSB0cnVlKSB7XG4gICAgICBjb25zdCB0b2FzdENsb3NlID0gJCgnPGJ1dHRvbiBkYXRhLWRpc21pc3M9XCJ0b2FzdFwiIC8+JykuYXR0cigndHlwZScsICdidXR0b24nKS5hZGRDbGFzcygnbWwtMiBtYi0xIGNsb3NlJykuYXR0cignYXJpYS1sYWJlbCcsICdDbG9zZScpLmFwcGVuZCgnPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj4nKVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLnRpdGxlID09IG51bGwpIHtcbiAgICAgICAgdG9hc3RDbG9zZS50b2dnbGVDbGFzcygnbWwtMiBtbC1hdXRvJylcbiAgICAgIH1cblxuICAgICAgdG9hc3RIZWFkZXIuYXBwZW5kKHRvYXN0Q2xvc2UpXG4gICAgfVxuXG4gICAgdG9hc3QuYXBwZW5kKHRvYXN0SGVhZGVyKVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5ib2R5ICE9IG51bGwpIHtcbiAgICAgIHRvYXN0LmFwcGVuZCgkKCc8ZGl2IGNsYXNzPVwidG9hc3QtYm9keVwiIC8+JykuaHRtbCh0aGlzLl9jb25maWcuYm9keSkpXG4gICAgfVxuXG4gICAgJCh0aGlzLl9nZXRDb250YWluZXJJZCgpKS5wcmVwZW5kKHRvYXN0KVxuXG4gICAgY29uc3QgJGJvZHkgPSAkKCdib2R5JylcblxuICAgICRib2R5LnRyaWdnZXIoJC5FdmVudChFVkVOVF9DUkVBVEVEKSlcbiAgICB0b2FzdC50b2FzdCgnc2hvdycpXG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmF1dG9yZW1vdmUpIHtcbiAgICAgIHRvYXN0Lm9uKCdoaWRkZW4uYnMudG9hc3QnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuZGVsYXkoMjAwKS5yZW1vdmUoKVxuICAgICAgICAkYm9keS50cmlnZ2VyKCQuRXZlbnQoRVZFTlRfUkVNT1ZFRCkpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIF9nZXRDb250YWluZXJJZCgpIHtcbiAgICBpZiAodGhpcy5fY29uZmlnLnBvc2l0aW9uID09IFBPU0lUSU9OX1RPUF9SSUdIVCkge1xuICAgICAgcmV0dXJuIFNFTEVDVE9SX0NPTlRBSU5FUl9UT1BfUklHSFRcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnBvc2l0aW9uID09IFBPU0lUSU9OX1RPUF9MRUZUKSB7XG4gICAgICByZXR1cm4gU0VMRUNUT1JfQ09OVEFJTkVSX1RPUF9MRUZUXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5wb3NpdGlvbiA9PSBQT1NJVElPTl9CT1RUT01fUklHSFQpIHtcbiAgICAgIHJldHVybiBTRUxFQ1RPUl9DT05UQUlORVJfQk9UVE9NX1JJR0hUXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5wb3NpdGlvbiA9PSBQT1NJVElPTl9CT1RUT01fTEVGVCkge1xuICAgICAgcmV0dXJuIFNFTEVDVE9SX0NPTlRBSU5FUl9CT1RUT01fTEVGVFxuICAgIH1cbiAgfVxuXG4gIF9wcmVwYXJlQ29udGFpbmVyKCkge1xuICAgIGlmICgkKHRoaXMuX2dldENvbnRhaW5lcklkKCkpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gJCgnPGRpdiAvPicpLmF0dHIoJ2lkJywgdGhpcy5fZ2V0Q29udGFpbmVySWQoKS5yZXBsYWNlKCcjJywgJycpKVxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5wb3NpdGlvbiA9PSBQT1NJVElPTl9UT1BfUklHSFQpIHtcbiAgICAgICAgY29udGFpbmVyLmFkZENsYXNzKENMQVNTX05BTUVfVE9QX1JJR0hUKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9jb25maWcucG9zaXRpb24gPT0gUE9TSVRJT05fVE9QX0xFRlQpIHtcbiAgICAgICAgY29udGFpbmVyLmFkZENsYXNzKENMQVNTX05BTUVfVE9QX0xFRlQpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2NvbmZpZy5wb3NpdGlvbiA9PSBQT1NJVElPTl9CT1RUT01fUklHSFQpIHtcbiAgICAgICAgY29udGFpbmVyLmFkZENsYXNzKENMQVNTX05BTUVfQk9UVE9NX1JJR0hUKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9jb25maWcucG9zaXRpb24gPT0gUE9TSVRJT05fQk9UVE9NX0xFRlQpIHtcbiAgICAgICAgY29udGFpbmVyLmFkZENsYXNzKENMQVNTX05BTUVfQk9UVE9NX0xFRlQpXG4gICAgICB9XG5cbiAgICAgICQoJ2JvZHknKS5hcHBlbmQoY29udGFpbmVyKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcuZml4ZWQpIHtcbiAgICAgICQodGhpcy5fZ2V0Q29udGFpbmVySWQoKSkuYWRkQ2xhc3MoJ2ZpeGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgJCh0aGlzLl9nZXRDb250YWluZXJJZCgpKS5yZW1vdmVDbGFzcygnZml4ZWQnKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKG9wdGlvbiwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBfb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCBjb25maWcpXG4gICAgICBjb25zdCB0b2FzdCA9IG5ldyBUb2FzdHMoJCh0aGlzKSwgX29wdGlvbnMpXG5cbiAgICAgIGlmIChvcHRpb24gPT09ICdjcmVhdGUnKSB7XG4gICAgICAgIHRvYXN0W29wdGlvbl0oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBqUXVlcnkgQVBJXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuJC5mbltOQU1FXSA9IFRvYXN0cy5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gVG9hc3RzXG4kLmZuW05BTUVdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIFRvYXN0cy5falF1ZXJ5SW50ZXJmYWNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvYXN0c1xuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQWRtaW5MVEUgVG9kb0xpc3QuanNcbiAqIExpY2Vuc2UgTUlUXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ1RvZG9MaXN0J1xuY29uc3QgREFUQV9LRVkgPSAnbHRlLnRvZG9saXN0J1xuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXVxuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS13aWRnZXQ9XCJ0b2RvLWxpc3RcIl0nXG5jb25zdCBDTEFTU19OQU1FX1RPRE9fTElTVF9ET05FID0gJ2RvbmUnXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIG9uQ2hlY2soaXRlbSkge1xuICAgIHJldHVybiBpdGVtXG4gIH0sXG4gIG9uVW5DaGVjayhpdGVtKSB7XG4gICAgcmV0dXJuIGl0ZW1cbiAgfVxufVxuXG4vKipcbiAqIENsYXNzIERlZmluaXRpb25cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5jbGFzcyBUb2RvTGlzdCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZ1xuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG5cbiAgICB0aGlzLl9pbml0KClcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHRvZ2dsZShpdGVtKSB7XG4gICAgaXRlbS5wYXJlbnRzKCdsaScpLnRvZ2dsZUNsYXNzKENMQVNTX05BTUVfVE9ET19MSVNUX0RPTkUpXG4gICAgaWYgKCEkKGl0ZW0pLnByb3AoJ2NoZWNrZWQnKSkge1xuICAgICAgdGhpcy51bkNoZWNrKCQoaXRlbSkpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoZWNrKGl0ZW0pXG4gIH1cblxuICBjaGVjayhpdGVtKSB7XG4gICAgdGhpcy5fY29uZmlnLm9uQ2hlY2suY2FsbChpdGVtKVxuICB9XG5cbiAgdW5DaGVjayhpdGVtKSB7XG4gICAgdGhpcy5fY29uZmlnLm9uVW5DaGVjay5jYWxsKGl0ZW0pXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2luaXQoKSB7XG4gICAgY29uc3QgJHRvZ2dsZVNlbGVjdG9yID0gdGhpcy5fZWxlbWVudFxuXG4gICAgJHRvZ2dsZVNlbGVjdG9yLmZpbmQoJ2lucHV0OmNoZWNrYm94OmNoZWNrZWQnKS5wYXJlbnRzKCdsaScpLnRvZ2dsZUNsYXNzKENMQVNTX05BTUVfVE9ET19MSVNUX0RPTkUpXG4gICAgJHRvZ2dsZVNlbGVjdG9yLm9uKCdjaGFuZ2UnLCAnaW5wdXQ6Y2hlY2tib3gnLCBldmVudCA9PiB7XG4gICAgICB0aGlzLnRvZ2dsZSgkKGV2ZW50LnRhcmdldCkpXG4gICAgfSlcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gJCh0aGlzKS5kYXRhKClcbiAgICAgIH1cblxuICAgICAgY29uc3QgX29wdGlvbnMgPSAkLmV4dGVuZCh7fSwgRGVmYXVsdCwgdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiBkYXRhKVxuICAgICAgY29uc3QgcGx1Z2luID0gbmV3IFRvZG9MaXN0KCQodGhpcyksIF9vcHRpb25zKVxuXG4gICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDogZGF0YSlcblxuICAgICAgaWYgKGNvbmZpZyA9PT0gJ2luaXQnKSB7XG4gICAgICAgIHBsdWdpbltjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogRGF0YSBBUElcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG4kKHdpbmRvdykub24oJ2xvYWQnLCAoKSA9PiB7XG4gIFRvZG9MaXN0Ll9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKFNFTEVDVE9SX0RBVEFfVE9HR0xFKSlcbn0pXG5cbi8qKlxuICogalF1ZXJ5IEFQSVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbiQuZm5bTkFNRV0gPSBUb2RvTGlzdC5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gVG9kb0xpc3RcbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gVG9kb0xpc3QuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQWRtaW5MVEUgVHJlZXZpZXcuanNcbiAqIExpY2Vuc2UgTUlUXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ1RyZWV2aWV3J1xuY29uc3QgREFUQV9LRVkgPSAnbHRlLnRyZWV2aWV3J1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV1cblxuY29uc3QgRVZFTlRfRVhQQU5ERUQgPSBgZXhwYW5kZWQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DT0xMQVBTRUQgPSBgY29sbGFwc2VkJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTE9BRF9EQVRBX0FQSSA9IGBsb2FkJHtFVkVOVF9LRVl9YFxuXG5jb25zdCBTRUxFQ1RPUl9MSSA9ICcubmF2LWl0ZW0nXG5jb25zdCBTRUxFQ1RPUl9MSU5LID0gJy5uYXYtbGluaydcbmNvbnN0IFNFTEVDVE9SX1RSRUVWSUVXX01FTlUgPSAnLm5hdi10cmVldmlldydcbmNvbnN0IFNFTEVDVE9SX09QRU4gPSAnLm1lbnUtb3BlbidcbmNvbnN0IFNFTEVDVE9SX0RBVEFfV0lER0VUID0gJ1tkYXRhLXdpZGdldD1cInRyZWV2aWV3XCJdJ1xuXG5jb25zdCBDTEFTU19OQU1FX09QRU4gPSAnbWVudS1vcGVuJ1xuY29uc3QgQ0xBU1NfTkFNRV9JU19PUEVOSU5HID0gJ21lbnUtaXMtb3BlbmluZydcbmNvbnN0IENMQVNTX05BTUVfU0lERUJBUl9DT0xMQVBTRUQgPSAnc2lkZWJhci1jb2xsYXBzZSdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgdHJpZ2dlcjogYCR7U0VMRUNUT1JfREFUQV9XSURHRVR9ICR7U0VMRUNUT1JfTElOS31gLFxuICBhbmltYXRpb25TcGVlZDogMzAwLFxuICBhY2NvcmRpb246IHRydWUsXG4gIGV4cGFuZFNpZGViYXI6IGZhbHNlLFxuICBzaWRlYmFyQnV0dG9uU2VsZWN0b3I6ICdbZGF0YS13aWRnZXQ9XCJwdXNobWVudVwiXSdcbn1cblxuLyoqXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cbmNsYXNzIFRyZWV2aWV3IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnXG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIGluaXQoKSB7XG4gICAgJChgJHtTRUxFQ1RPUl9MSX0ke1NFTEVDVE9SX09QRU59ICR7U0VMRUNUT1JfVFJFRVZJRVdfTUVOVX1gKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKVxuICAgIHRoaXMuX3NldHVwTGlzdGVuZXJzKClcbiAgfVxuXG4gIGV4cGFuZCh0cmVldmlld01lbnUsIHBhcmVudExpKSB7XG4gICAgY29uc3QgZXhwYW5kZWRFdmVudCA9ICQuRXZlbnQoRVZFTlRfRVhQQU5ERUQpXG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmFjY29yZGlvbikge1xuICAgICAgY29uc3Qgb3Blbk1lbnVMaSA9IHBhcmVudExpLnNpYmxpbmdzKFNFTEVDVE9SX09QRU4pLmZpcnN0KClcbiAgICAgIGNvbnN0IG9wZW5UcmVldmlldyA9IG9wZW5NZW51TGkuZmluZChTRUxFQ1RPUl9UUkVFVklFV19NRU5VKS5maXJzdCgpXG4gICAgICB0aGlzLmNvbGxhcHNlKG9wZW5UcmVldmlldywgb3Blbk1lbnVMaSlcbiAgICB9XG5cbiAgICBwYXJlbnRMaS5hZGRDbGFzcyhDTEFTU19OQU1FX0lTX09QRU5JTkcpXG4gICAgdHJlZXZpZXdNZW51LnN0b3AoKS5zbGlkZURvd24odGhpcy5fY29uZmlnLmFuaW1hdGlvblNwZWVkLCAoKSA9PiB7XG4gICAgICBwYXJlbnRMaS5hZGRDbGFzcyhDTEFTU19OQU1FX09QRU4pXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoZXhwYW5kZWRFdmVudClcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5leHBhbmRTaWRlYmFyKSB7XG4gICAgICB0aGlzLl9leHBhbmRTaWRlYmFyKClcbiAgICB9XG4gIH1cblxuICBjb2xsYXBzZSh0cmVldmlld01lbnUsIHBhcmVudExpKSB7XG4gICAgY29uc3QgY29sbGFwc2VkRXZlbnQgPSAkLkV2ZW50KEVWRU5UX0NPTExBUFNFRClcblxuICAgIHBhcmVudExpLnJlbW92ZUNsYXNzKGAke0NMQVNTX05BTUVfSVNfT1BFTklOR30gJHtDTEFTU19OQU1FX09QRU59YClcbiAgICB0cmVldmlld01lbnUuc3RvcCgpLnNsaWRlVXAodGhpcy5fY29uZmlnLmFuaW1hdGlvblNwZWVkLCAoKSA9PiB7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoY29sbGFwc2VkRXZlbnQpXG4gICAgICB0cmVldmlld01lbnUuZmluZChgJHtTRUxFQ1RPUl9PUEVOfSA+ICR7U0VMRUNUT1JfVFJFRVZJRVdfTUVOVX1gKS5zbGlkZVVwKClcbiAgICAgIHRyZWV2aWV3TWVudS5maW5kKFNFTEVDVE9SX09QRU4pLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfT1BFTilcbiAgICB9KVxuICB9XG5cbiAgdG9nZ2xlKGV2ZW50KSB7XG4gICAgY29uc3QgJHJlbGF0aXZlVGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KVxuICAgIGNvbnN0ICRwYXJlbnQgPSAkcmVsYXRpdmVUYXJnZXQucGFyZW50KClcblxuICAgIGxldCB0cmVldmlld01lbnUgPSAkcGFyZW50LmZpbmQoYD4gJHtTRUxFQ1RPUl9UUkVFVklFV19NRU5VfWApXG5cbiAgICBpZiAoIXRyZWV2aWV3TWVudS5pcyhTRUxFQ1RPUl9UUkVFVklFV19NRU5VKSkge1xuICAgICAgaWYgKCEkcGFyZW50LmlzKFNFTEVDVE9SX0xJKSkge1xuICAgICAgICB0cmVldmlld01lbnUgPSAkcGFyZW50LnBhcmVudCgpLmZpbmQoYD4gJHtTRUxFQ1RPUl9UUkVFVklFV19NRU5VfWApXG4gICAgICB9XG5cbiAgICAgIGlmICghdHJlZXZpZXdNZW51LmlzKFNFTEVDVE9SX1RSRUVWSUVXX01FTlUpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIGNvbnN0IHBhcmVudExpID0gJHJlbGF0aXZlVGFyZ2V0LnBhcmVudHMoU0VMRUNUT1JfTEkpLmZpcnN0KClcbiAgICBjb25zdCBpc09wZW4gPSBwYXJlbnRMaS5oYXNDbGFzcyhDTEFTU19OQU1FX09QRU4pXG5cbiAgICBpZiAoaXNPcGVuKSB7XG4gICAgICB0aGlzLmNvbGxhcHNlKCQodHJlZXZpZXdNZW51KSwgcGFyZW50TGkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXhwYW5kKCQodHJlZXZpZXdNZW51KSwgcGFyZW50TGkpXG4gICAgfVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9zZXR1cExpc3RlbmVycygpIHtcbiAgICBjb25zdCBlbGVtZW50SWQgPSB0aGlzLl9lbGVtZW50LmF0dHIoJ2lkJykgIT09IHVuZGVmaW5lZCA/IGAjJHt0aGlzLl9lbGVtZW50LmF0dHIoJ2lkJyl9YCA6ICcnXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgYCR7ZWxlbWVudElkfSR7dGhpcy5fY29uZmlnLnRyaWdnZXJ9YCwgZXZlbnQgPT4ge1xuICAgICAgdGhpcy50b2dnbGUoZXZlbnQpXG4gICAgfSlcbiAgfVxuXG4gIF9leHBhbmRTaWRlYmFyKCkge1xuICAgIGlmICgkKCdib2R5JykuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9TSURFQkFSX0NPTExBUFNFRCkpIHtcbiAgICAgICQodGhpcy5fY29uZmlnLnNpZGViYXJCdXR0b25TZWxlY3RvcikuUHVzaE1lbnUoJ2V4cGFuZCcpXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcbiAgICAgIGNvbnN0IF9vcHRpb25zID0gJC5leHRlbmQoe30sIERlZmF1bHQsICQodGhpcykuZGF0YSgpKVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBUcmVldmlldygkKHRoaXMpLCBfb3B0aW9ucylcbiAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnID09PSAnaW5pdCcpIHtcbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogRGF0YSBBUElcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG4kKHdpbmRvdykub24oRVZFTlRfTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICAkKFNFTEVDVE9SX0RBVEFfV0lER0VUKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICBUcmVldmlldy5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0aGlzKSwgJ2luaXQnKVxuICB9KVxufSlcblxuLyoqXG4gKiBqUXVlcnkgQVBJXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuJC5mbltOQU1FXSA9IFRyZWV2aWV3Ll9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBUcmVldmlld1xuJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gIHJldHVybiBUcmVldmlldy5falF1ZXJ5SW50ZXJmYWNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyZWV2aWV3XG4iXSwic291cmNlUm9vdCI6IiJ9