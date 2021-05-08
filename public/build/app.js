(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$":
/*!*****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.(j|t)sx?$ ***!
  \*****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./folder_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/folder_controller.js",
	"./rule_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/rule_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/folder_controller.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/folder_controller.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_15__);
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */



var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {}
  }, {
    key: "stopPropagation",
    value: function stopPropagation(event) {
      // The event won't be propagated up to the document NODE and
      // therefore delegated events won't be fired
      event.stopPropagation();
    }
  }, {
    key: "folderListFucntion",
    value: function folderListFucntion(event) {
      var arg = event.currentTarget.dataset;
      jQuery(document).ready(function ($) {
        var moveLFolderList = $('div#move_list');
        $.ajax({
          method: "GET",
          url: "/api/folder/list-sub-item/" + arg.folderMovingIn,
          data: {
            index: -1,
            type: "folder",
            user_code: "0970229e-4867-4ada-b0ac-a199446cbc21"
          }
        }).done(function (res) {
          moveLFolderList.empty();
          var data = res.results.data; ///////////////////////fill dropdown list with folders

          $('<span/>').addClass('dropdown-item dropdown-header').text(res.results.parent_folder).appendTo(moveLFolderList);
          $('<div/>').addClass('dropdown-divider').appendTo(moveLFolderList);
          $.each(data.rows, function (i) {
            // var id = 'move_list' + i;
            var listItem = $('<div/>').addClass('d-flex  flex-row m-2 border-bottom').appendTo(moveLFolderList);
            $('<div/>').addClass('dropdown-divider').appendTo(listItem);
            $('<i/>').addClass('fas fa-folder mr-2').appendTo(listItem);
            var liFolder = $('<a/>').attr('href', "#").attr('data-folder-to-move', arg.folderToMove).attr('data-folder-moving-in', data.rows[i].code).attr('data-action', "click->folder#folderListFucntion").text(data.rows[i].label).appendTo(listItem);
            /* ********
              move to specific folder content in dropdown list
              by refilling the dropdown menu       *************  */

            var url = arg.path;
            url = url.replace("itemC", arg.folderToMove);
            url = url.replace("newParentC", data.rows[i].code);
            url = url.replace("userC", "0970229e-4867-4ada-b0ac-a199446cbc21");
            console.log(url);
            var moveForm = $('<form/>').addClass('ml-auto').attr('action', url).attr('method', 'post').appendTo(listItem);
            var submitButton = $('<button/>').addClass('btn btn-block btn-outline-secondary  p-0 mb-1').attr('type', 'submit').appendTo(moveForm);
            $('<i/>').addClass('fas fa-chevron-circle-down mr-1 ml-1').appendTo(submitButton);
          });
        });
      });
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_14__.Controller);



/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/rule_controller.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/rule_controller.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var tributejs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tributejs */ "./node_modules/tributejs/dist/tribute.min.js");
/* harmony import */ var tributejs__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(tributejs__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var chip_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! chip-input */ "./node_modules/chip-input/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      var _this = this;

      (prismjs__WEBPACK_IMPORTED_MODULE_18___default().languages.rule) = {
        'number': {
          pattern: /[0-9]+(?:\.[0-9]+)?([Ee][\+\-][0-9]+)?/
        },
        'punctuation': {
          pattern: /[(){};:,]/
        },
        'string': {
          pattern: /"[0-9a-zA-Z-_]+"/
        },
        'operator': {
          pattern: /\b[A-Z_]+\b/
        }
      };
      this.getOperators(function (operators) {
        _this.ruleAutocomplete(operators);
      });
    }
  }, {
    key: "ruleAutocomplete",
    value: function ruleAutocomplete(operators) {
      var tribute = new (tributejs__WEBPACK_IMPORTED_MODULE_19___default())({
        values: operators,
        selectTemplate: function selectTemplate(item) {
          return item.original.key;
        },
        //    containerClass: "d-flex justify-content-between tribute-container",
        menuItemTemplate: function menuItemTemplate(item) {
          return '<div class="d-flex justify-content-between">' + item.string + '<i class="far fa-question-circle help" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2"></i></div>';
        },
        autocompleteMode: true
      });
      tribute.attach(document.getElementById("editing"));
    }
  }, {
    key: "highlight",
    value: function highlight() {
      var text = document.getElementById("editing");
      var rule = document.getElementById("highlighting-content");
      rule.focus();
      rule.innerHTML = prismjs__WEBPACK_IMPORTED_MODULE_18___default().highlight(text.value, (prismjs__WEBPACK_IMPORTED_MODULE_18___default().languages.rule), 'rule');
      this.sync_scroll(text);
    }
  }, {
    key: "check_tab",
    value: function check_tab(event) {
      var element = document.getElementById("editing");
      var code = element.value;

      if (event.key == "Tab") {
        /* Tab key pressed */
        event.preventDefault(); // stop normal

        var before_tab = code.slice(0, element.selectionStart); // text before tab

        var after_tab = code.slice(element.selectionEnd, element.value.length); // text after tab

        var cursor_pos = element.selectionEnd + 2; // after tab placed, where cursor moves to - 2 for 2 spaces

        element.value = before_tab + "  " + after_tab; // add tab char - 2 spaces
        // move cursor

        element.selectionStart = cursor_pos;
        element.selectionEnd = cursor_pos;
      }
    }
  }, {
    key: "sync_scroll",
    value: function sync_scroll(element) {
      /* Scroll result to scroll coords of event - sync with textarea */
      var result_element = document.querySelector("#highlighting"); // Get and set x and y

      result_element.scrollTop = element.scrollTop;
      result_element.scrollLeft = element.scrollLeft;
    }
  }, {
    key: "getOperators",
    value: function getOperators(cb) {
      var URL = "http://localhost:8080/api/rule";
      var xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        var data = [];

        if (xhr.readyState === 4) {
          if (xhr.status == 200) {
            data = JSON.parse(xhr.responseText).results.operators;
          } else if (xhr.status === 403) {
            data = [];
          }

          cb(data);
        }
      };

      xhr.open("GET", URL, false);
      xhr.send();
    }
  }, {
    key: "compile",
    value: function compile() {
      var _this2 = this;

      var text = document.getElementById("editing");
      var ruleVars = document.getElementById("rule-vars");
      var url = 'http://localhost:8080/api/rule/compile';
      var xhr = new XMLHttpRequest();
      var body = {
        expression: text.value,
        expr_arg: this.getRuleVars(ruleVars.chips)
      };

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);

            _this2.showAlerts(data.results);
          }
        }
      };

      xhr.open("POST", url);
      xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
      xhr.send(JSON.stringify(body));
    }
  }, {
    key: "showAlerts",
    value: function showAlerts(results) {
      document.getElementById('bootstrap-alert').className = "alert alert-" + results.scope;
      document.getElementById('bootstrap-alert').innerHTML = results.alert;
      document.getElementById('bootstrap-alert').style.display = 'block';
      setTimeout(function () {
        document.getElementById('bootstrap-alert').style.display = 'none';
      }, 17000);

      if (results.scope == 'success') {
        document.getElementById('submit-rule').removeAttribute("disabled");
      }

      if (results.scope == 'danger') {
        document.getElementById('submit-rule').setAttribute("disabled", "true");
      }
    }
  }, {
    key: "getRuleVars",
    value: function getRuleVars(args) {
      var expr_arg = [];

      var _iterator = _createForOfIteratorHelper(args),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var arg = _step.value;
          expr_arg.push(arg.label);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      console.log(expr_arg);
      return expr_arg;
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_17__.Controller);



/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var tributejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tributejs */ "./node_modules/tributejs/dist/tribute.min.js");
/* harmony import */ var tributejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tributejs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)





/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);

 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$")); // register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_array_slice_js-node_modules_core-js_modules_es_object-6f2024","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_bootstrap_dist_js_boo-bcec70"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vfC9cXC4oanx0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9mb2xkZXJfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvcnVsZV9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3MiXSwibmFtZXMiOlsiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJhcmciLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCIkIiwibW92ZUxGb2xkZXJMaXN0IiwiYWpheCIsIm1ldGhvZCIsInVybCIsImZvbGRlck1vdmluZ0luIiwiZGF0YSIsImluZGV4IiwidHlwZSIsInVzZXJfY29kZSIsImRvbmUiLCJyZXMiLCJlbXB0eSIsInJlc3VsdHMiLCJhZGRDbGFzcyIsInRleHQiLCJwYXJlbnRfZm9sZGVyIiwiYXBwZW5kVG8iLCJlYWNoIiwicm93cyIsImkiLCJsaXN0SXRlbSIsImxpRm9sZGVyIiwiYXR0ciIsImZvbGRlclRvTW92ZSIsImNvZGUiLCJsYWJlbCIsInBhdGgiLCJyZXBsYWNlIiwiY29uc29sZSIsImxvZyIsIm1vdmVGb3JtIiwic3VibWl0QnV0dG9uIiwiQ29udHJvbGxlciIsIlByaXNtIiwicGF0dGVybiIsImdldE9wZXJhdG9ycyIsIm9wZXJhdG9ycyIsInJ1bGVBdXRvY29tcGxldGUiLCJ0cmlidXRlIiwiVHJpYnV0ZSIsInZhbHVlcyIsInNlbGVjdFRlbXBsYXRlIiwiaXRlbSIsIm9yaWdpbmFsIiwia2V5IiwibWVudUl0ZW1UZW1wbGF0ZSIsInN0cmluZyIsImF1dG9jb21wbGV0ZU1vZGUiLCJhdHRhY2giLCJnZXRFbGVtZW50QnlJZCIsInJ1bGUiLCJmb2N1cyIsImlubmVySFRNTCIsInZhbHVlIiwic3luY19zY3JvbGwiLCJlbGVtZW50IiwicHJldmVudERlZmF1bHQiLCJiZWZvcmVfdGFiIiwic2xpY2UiLCJzZWxlY3Rpb25TdGFydCIsImFmdGVyX3RhYiIsInNlbGVjdGlvbkVuZCIsImxlbmd0aCIsImN1cnNvcl9wb3MiLCJyZXN1bHRfZWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwiY2IiLCJVUkwiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJvcGVuIiwic2VuZCIsInJ1bGVWYXJzIiwiYm9keSIsImV4cHJlc3Npb24iLCJleHByX2FyZyIsImdldFJ1bGVWYXJzIiwiY2hpcHMiLCJzaG93QWxlcnRzIiwic2V0UmVxdWVzdEhlYWRlciIsInN0cmluZ2lmeSIsImNsYXNzTmFtZSIsInNjb3BlIiwiYWxlcnQiLCJzdHlsZSIsImRpc3BsYXkiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiYXJncyIsInB1c2giLCJhcHAiLCJzdGFydFN0aW11bHVzQXBwIiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBJOzs7Ozs7Ozs7Ozs7Ozs7QUN2QkEsaUVBQWU7QUFDZixDQUFDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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UUFBUDtBQUNIOzs7O0VBNUl3Qm5ELGlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2Q3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0NBRUE7O0FBQ08sSUFBTW1FLEdBQUcsR0FBR0MsMEVBQWdCLENBQUNDLDBJQUFELENBQTVCLEMsQ0FPUDtBQUNBLGdFOzs7Ozs7Ozs7Ozs7QUNYQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vZm9sZGVyX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9mb2xkZXJfY29udHJvbGxlci5qc1wiLFxuXHRcIi4vcnVsZV9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvcnVsZV9jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLihqfHQpc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiaW1wb3J0IHtDb250cm9sbGVyfSBmcm9tICdzdGltdWx1cyc7XG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcblxuXG5cbiAgICBjb25uZWN0KCkge1xuICAgIH1cblxuXG5cbiAgICBzdG9wUHJvcGFnYXRpb24oZXZlbnQpIHtcbiAgICAgICAgLy8gVGhlIGV2ZW50IHdvbid0IGJlIHByb3BhZ2F0ZWQgdXAgdG8gdGhlIGRvY3VtZW50IE5PREUgYW5kXG4gICAgICAgIC8vIHRoZXJlZm9yZSBkZWxlZ2F0ZWQgZXZlbnRzIHdvbid0IGJlIGZpcmVkXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIGZvbGRlckxpc3RGdWNudGlvbihldmVudCkge1xuICAgICAgICBjb25zdCBhcmcgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCQpIHtcbiAgICAgICAgICAgIHZhciBtb3ZlTEZvbGRlckxpc3QgPSAkKCdkaXYjbW92ZV9saXN0JylcblxuXG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgICAgICB1cmw6IFwiL2FwaS9mb2xkZXIvbGlzdC1zdWItaXRlbS9cIiArIGFyZy5mb2xkZXJNb3ZpbmdJbixcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiAtMSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJmb2xkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgdXNlcl9jb2RlOiBcIjA5NzAyMjllLTQ4NjctNGFkYS1iMGFjLWExOTk0NDZjYmMyMVwiXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KS5kb25lKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICBtb3ZlTEZvbGRlckxpc3QuZW1wdHkoKTtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlcy5yZXN1bHRzLmRhdGE7XG5cbiAgICAgICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL2ZpbGwgZHJvcGRvd24gbGlzdCB3aXRoIGZvbGRlcnNcblxuICAgICAgICAgICAgICAgICQoJzxzcGFuLz4nKVxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2Ryb3Bkb3duLWl0ZW0gZHJvcGRvd24taGVhZGVyJylcbiAgICAgICAgICAgICAgICAgICAgLnRleHQocmVzLnJlc3VsdHMucGFyZW50X2ZvbGRlcilcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKG1vdmVMRm9sZGVyTGlzdCk7XG4gICAgICAgICAgICAgICAgJCgnPGRpdi8+JylcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdkcm9wZG93bi1kaXZpZGVyJylcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKG1vdmVMRm9sZGVyTGlzdCk7XG4gICAgICAgICAgICAgICAgJC5lYWNoKGRhdGEucm93cywgZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdmFyIGlkID0gJ21vdmVfbGlzdCcgKyBpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGlzdEl0ZW0gPSAkKCc8ZGl2Lz4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdkLWZsZXggIGZsZXgtcm93IG0tMiBib3JkZXItYm90dG9tJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhtb3ZlTEZvbGRlckxpc3QpO1xuICAgICAgICAgICAgICAgICAgICAkKCc8ZGl2Lz4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdkcm9wZG93bi1kaXZpZGVyJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhsaXN0SXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICQoJzxpLz4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdmYXMgZmEtZm9sZGVyIG1yLTInKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKGxpc3RJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxpRm9sZGVyID0gJCgnPGEvPicpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignaHJlZicsIFwiI1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZm9sZGVyLXRvLW1vdmUnLCBhcmcuZm9sZGVyVG9Nb3ZlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZm9sZGVyLW1vdmluZy1pbicsIGRhdGEucm93c1tpXS5jb2RlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtYWN0aW9uJywgXCJjbGljay0+Zm9sZGVyI2ZvbGRlckxpc3RGdWNudGlvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQoZGF0YS5yb3dzW2ldLmxhYmVsKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKGxpc3RJdGVtKTtcblxuICAgICAgICAgICAgICAgICAgICAvKiAqKioqKioqKlxuICAgICAgICAgICAgICAgICAgICAgIG1vdmUgdG8gc3BlY2lmaWMgZm9sZGVyIGNvbnRlbnQgaW4gZHJvcGRvd24gbGlzdFxuICAgICAgICAgICAgICAgICAgICAgIGJ5IHJlZmlsbGluZyB0aGUgZHJvcGRvd24gbWVudSAgICAgICAqKioqKioqKioqKioqICAqL1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB1cmwgPSBhcmcucGF0aDtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UoXCJpdGVtQ1wiLCBhcmcuZm9sZGVyVG9Nb3ZlKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UoXCJuZXdQYXJlbnRDXCIsIGRhdGEucm93c1tpXS5jb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UoXCJ1c2VyQ1wiLCBcIjA5NzAyMjllLTQ4NjctNGFkYS1iMGFjLWExOTk0NDZjYmMyMVwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codXJsKVxuICAgICAgICAgICAgICAgICAgICBsZXQgbW92ZUZvcm0gPSAkKCc8Zm9ybS8+JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnbWwtYXV0bycpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYWN0aW9uJywgdXJsKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ21ldGhvZCcsICdwb3N0JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhsaXN0SXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzdWJtaXRCdXR0b24gPSAkKCc8YnV0dG9uLz4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdidG4gYnRuLWJsb2NrIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSAgcC0wIG1iLTEnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3R5cGUnLCAnc3VibWl0JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhtb3ZlRm9ybSk7XG4gICAgICAgICAgICAgICAgICAgICQoJzxpLz4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdmYXMgZmEtY2hldnJvbi1jaXJjbGUtZG93biBtci0xIG1sLTEnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKHN1Ym1pdEJ1dHRvbik7XG5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuXG5cbiAgICB9O1xufVxuIiwiaW1wb3J0IHtDb250cm9sbGVyfSBmcm9tICdzdGltdWx1cyc7XG5pbXBvcnQgUHJpc20gZnJvbSAncHJpc21qcyc7XG5pbXBvcnQgVHJpYnV0ZSBmcm9tIFwidHJpYnV0ZWpzXCI7XG5pbXBvcnQge0NvbXBvbmVudENoaXBJbnB1dH0gZnJvbSAnY2hpcC1pbnB1dCc7XG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIFByaXNtLmxhbmd1YWdlcy5ydWxlID0ge1xuICAgICAgICAgICAgJ251bWJlcic6e1xuICAgICAgICAgICAgICAgIHBhdHRlcm4gOiAvWzAtOV0rKD86XFwuWzAtOV0rKT8oW0VlXVtcXCtcXC1dWzAtOV0rKT8vXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3B1bmN0dWF0aW9uJzp7XG4gICAgICAgICAgICAgICAgcGF0dGVybiA6IC9bKCl7fTs6LF0vXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3N0cmluZyc6e1xuICAgICAgICAgICAgICAgIHBhdHRlcm4gOiAvXCJbMC05YS16QS1aLV9dK1wiL1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdvcGVyYXRvcic6e1xuICAgICAgICAgICAgICAgIHBhdHRlcm4gOiAvXFxiW0EtWl9dK1xcYi8sXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdldE9wZXJhdG9ycygob3BlcmF0b3JzKT0+e1xuXG4gICAgICAgICAgICB0aGlzLnJ1bGVBdXRvY29tcGxldGUob3BlcmF0b3JzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG4gICAgcnVsZUF1dG9jb21wbGV0ZShvcGVyYXRvcnMpe1xuXG4gICAgICAgIHZhciB0cmlidXRlID0gbmV3IFRyaWJ1dGUoe1xuICAgICAgICAgICAgdmFsdWVzOiBvcGVyYXRvcnMsXG4gICAgICAgICAgICBzZWxlY3RUZW1wbGF0ZTogZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAgIGl0ZW0ub3JpZ2luYWwua2V5O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgLy8gICAgY29udGFpbmVyQ2xhc3M6IFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHRyaWJ1dGUtY29udGFpbmVyXCIsXG4gICAgICAgICAgICBtZW51SXRlbVRlbXBsYXRlOiBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICAgJzxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj4nK2l0ZW0uc3RyaW5nICsgJzxpIGNsYXNzPVwiZmFyIGZhLXF1ZXN0aW9uLWNpcmNsZSBoZWxwXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI211bHRpQ29sbGFwc2VFeGFtcGxlMlwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtY29udHJvbHM9XCJtdWx0aUNvbGxhcHNlRXhhbXBsZTJcIj48L2k+PC9kaXY+JztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhdXRvY29tcGxldGVNb2RlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICB0cmlidXRlLmF0dGFjaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRpbmdcIikpO1xuICAgIH1cbiAgICBoaWdobGlnaHQoKXtcblxuICAgICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdGluZ1wiKTtcblxuICAgICAgICBsZXQgcnVsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlnaGxpZ2h0aW5nLWNvbnRlbnRcIik7XG5cbiAgICAgICAgcnVsZS5mb2N1cygpO1xuICAgICAgICBydWxlLmlubmVySFRNTCA9IFByaXNtLmhpZ2hsaWdodCh0ZXh0LnZhbHVlLCBQcmlzbS5sYW5ndWFnZXMucnVsZSwgJ3J1bGUnKTtcbiAgICAgICAgdGhpcy5zeW5jX3Njcm9sbCggdGV4dCApO1xuICAgIH1cblxuICAgIGNoZWNrX3RhYiggZXZlbnQpIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRpbmdcIik7XG4gICAgICAgIGxldCBjb2RlID0gZWxlbWVudC52YWx1ZTtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PSBcIlRhYlwiKSB7XG4gICAgICAgICAgICAvKiBUYWIga2V5IHByZXNzZWQgKi9cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIHN0b3Agbm9ybWFsXG4gICAgICAgICAgICBsZXQgYmVmb3JlX3RhYiA9IGNvZGUuc2xpY2UoMCwgZWxlbWVudC5zZWxlY3Rpb25TdGFydCk7IC8vIHRleHQgYmVmb3JlIHRhYlxuICAgICAgICAgICAgbGV0IGFmdGVyX3RhYiA9IGNvZGUuc2xpY2UoZWxlbWVudC5zZWxlY3Rpb25FbmQsIGVsZW1lbnQudmFsdWUubGVuZ3RoKTsgLy8gdGV4dCBhZnRlciB0YWJcbiAgICAgICAgICAgIGxldCBjdXJzb3JfcG9zID0gZWxlbWVudC5zZWxlY3Rpb25FbmQgKyAyOyAvLyBhZnRlciB0YWIgcGxhY2VkLCB3aGVyZSBjdXJzb3IgbW92ZXMgdG8gLSAyIGZvciAyIHNwYWNlc1xuICAgICAgICAgICAgZWxlbWVudC52YWx1ZSA9IGJlZm9yZV90YWIgKyBcIiAgXCIgKyBhZnRlcl90YWI7IC8vIGFkZCB0YWIgY2hhciAtIDIgc3BhY2VzXG4gICAgICAgICAgICAvLyBtb3ZlIGN1cnNvclxuICAgICAgICAgICAgZWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IGN1cnNvcl9wb3M7XG4gICAgICAgICAgICBlbGVtZW50LnNlbGVjdGlvbkVuZCA9IGN1cnNvcl9wb3M7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBzeW5jX3Njcm9sbChlbGVtZW50KSB7XG4gICAgICAgIC8qIFNjcm9sbCByZXN1bHQgdG8gc2Nyb2xsIGNvb3JkcyBvZiBldmVudCAtIHN5bmMgd2l0aCB0ZXh0YXJlYSAqL1xuICAgICAgICBsZXQgcmVzdWx0X2VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hpZ2hsaWdodGluZ1wiKTtcbiAgICAgICAgLy8gR2V0IGFuZCBzZXQgeCBhbmQgeVxuICAgICAgICByZXN1bHRfZWxlbWVudC5zY3JvbGxUb3AgPSBlbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgcmVzdWx0X2VsZW1lbnQuc2Nyb2xsTGVmdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICB9XG5cbiAgICBnZXRPcGVyYXRvcnMoIGNiKSB7XG4gICAgICAgIHZhciBVUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvcnVsZVwiO1xuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0gW107XG4gICAgICAgICAgICBpZih4aHIucmVhZHlTdGF0ZSA9PT0gNCl7XG4gICAgICAgICAgICAgICAgaWYgKCAgeGhyLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCkucmVzdWx0cy5vcGVyYXRvcnM7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHhoci5zdGF0dXMgPT09IDQwMykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhID0gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNiKGRhdGEpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH07XG4gICAgICAgIHhoci5vcGVuKFwiR0VUXCIsIFVSTCAsIGZhbHNlKTtcbiAgICAgICAgeGhyLnNlbmQoKTtcbiAgICB9XG4gICAgY29tcGlsZSggKSB7XG4gICAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0aW5nXCIpO1xuICAgICAgICBsZXQgcnVsZVZhcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJ1bGUtdmFyc1wiKTtcblxuICAgICAgICB2YXIgdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvcnVsZS9jb21waWxlJztcbiAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB2YXIgYm9keSA9IHtcbiAgICAgICAgICAgIGV4cHJlc3Npb24gOiB0ZXh0LnZhbHVlICxcbiAgICAgICAgICAgIGV4cHJfYXJnIDogdGhpcy5nZXRSdWxlVmFycyhydWxlVmFycy5jaGlwcylcbiAgICAgICAgfVxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4gIHtcbiAgICAgICAgICAgIGlmKHhoci5yZWFkeVN0YXRlID09PSA0KXtcbiAgICAgICAgICAgICAgICBpZiAoICB4aHIuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0FsZXJ0cyhkYXRhLnJlc3VsdHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIHVybCAgKTtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIpO1xuICAgICAgICB4aHIuc2VuZChKU09OLnN0cmluZ2lmeShib2R5KSk7XG4gICAgfVxuICAgICBzaG93QWxlcnRzKHJlc3VsdHMpIHtcbiAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib290c3RyYXAtYWxlcnQnKS5jbGFzc05hbWUgPSBcImFsZXJ0IGFsZXJ0LVwiKyByZXN1bHRzLnNjb3BlIDtcblxuICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvb3RzdHJhcC1hbGVydCcpLmlubmVySFRNTCA9IHJlc3VsdHMuYWxlcnQgO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9vdHN0cmFwLWFsZXJ0Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9vdHN0cmFwLWFsZXJ0Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJ30sIDE3MDAwKTtcbiAgICAgICAgaWYocmVzdWx0cy5zY29wZSA9PSAnc3VjY2Vzcycpe1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC1ydWxlJykucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIikgO1xuICAgICAgICB9aWYocmVzdWx0cy5zY29wZSA9PSAnZGFuZ2VyJyl7XG4gICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC1ydWxlJykuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIixcInRydWVcIikgO1xuICAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZ2V0UnVsZVZhcnMoYXJncykge1xuXG4gICAgICAgIGxldCBleHByX2FyZyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBhcmcgb2YgYXJncykge1xuICAgICAgICAgICAgZXhwcl9hcmcucHVzaChhcmcubGFiZWwpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGV4cHJfYXJnKTtcbiAgICAgICAgcmV0dXJuIGV4cHJfYXJnO1xuICAgIH1cbn1cblxuXG4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcblxuXG5pbXBvcnQgJ3RyaWJ1dGVqcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcCc7XG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcblxuXG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC4oanx0KXN4PyQvXG4pKTtcblxuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==