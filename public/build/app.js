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
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var tributejs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tributejs */ "./node_modules/tributejs/dist/tribute.min.js");
/* harmony import */ var tributejs__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(tributejs__WEBPACK_IMPORTED_MODULE_15__);
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
    value: function connect() {
      var _this = this;

      (prismjs__WEBPACK_IMPORTED_MODULE_14___default().languages.rule) = {
        'number': {
          pattern: /[0-9]+(?:\.[0-9]+)?([Ee][\+\-][0-9]+)?/
        },
        'punctuation': {
          pattern: /[(){};:,]/
        },
        'string': {
          pattern: /\\"[0-9a-zA-Z-_]+\\"/
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
      console.log(operators);
      var tribute = new (tributejs__WEBPACK_IMPORTED_MODULE_15___default())({
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
      rule.innerHTML = prismjs__WEBPACK_IMPORTED_MODULE_14___default().highlight(text.value, (prismjs__WEBPACK_IMPORTED_MODULE_14___default().languages.rule), 'rule');
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
            console.log(xhr.responseText);
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
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_13__.Controller);



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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_array_slice_js-node_modules_core-js_modules_es_object-6f2024","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_bootstrap_dist_js_boo-9b26db"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vfC9cXC4oanx0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9mb2xkZXJfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvcnVsZV9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3M/M2ZiYSJdLCJuYW1lcyI6WyJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImFyZyIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwialF1ZXJ5IiwiZG9jdW1lbnQiLCJyZWFkeSIsIiQiLCJtb3ZlTEZvbGRlckxpc3QiLCJhamF4IiwibWV0aG9kIiwidXJsIiwiZm9sZGVyTW92aW5nSW4iLCJkYXRhIiwiaW5kZXgiLCJ0eXBlIiwidXNlcl9jb2RlIiwiZG9uZSIsInJlcyIsImVtcHR5IiwicmVzdWx0cyIsImFkZENsYXNzIiwidGV4dCIsInBhcmVudF9mb2xkZXIiLCJhcHBlbmRUbyIsImVhY2giLCJyb3dzIiwiaSIsImxpc3RJdGVtIiwibGlGb2xkZXIiLCJhdHRyIiwiZm9sZGVyVG9Nb3ZlIiwiY29kZSIsImxhYmVsIiwicGF0aCIsInJlcGxhY2UiLCJjb25zb2xlIiwibG9nIiwibW92ZUZvcm0iLCJzdWJtaXRCdXR0b24iLCJDb250cm9sbGVyIiwiUHJpc20iLCJwYXR0ZXJuIiwiZ2V0T3BlcmF0b3JzIiwib3BlcmF0b3JzIiwicnVsZUF1dG9jb21wbGV0ZSIsInRyaWJ1dGUiLCJUcmlidXRlIiwidmFsdWVzIiwic2VsZWN0VGVtcGxhdGUiLCJpdGVtIiwib3JpZ2luYWwiLCJrZXkiLCJtZW51SXRlbVRlbXBsYXRlIiwic3RyaW5nIiwiYXV0b2NvbXBsZXRlTW9kZSIsImF0dGFjaCIsImdldEVsZW1lbnRCeUlkIiwicnVsZSIsImZvY3VzIiwiaW5uZXJIVE1MIiwidmFsdWUiLCJzeW5jX3Njcm9sbCIsImVsZW1lbnQiLCJwcmV2ZW50RGVmYXVsdCIsImJlZm9yZV90YWIiLCJzbGljZSIsInNlbGVjdGlvblN0YXJ0IiwiYWZ0ZXJfdGFiIiwic2VsZWN0aW9uRW5kIiwibGVuZ3RoIiwiY3Vyc29yX3BvcyIsInJlc3VsdF9lbGVtZW50IiwicXVlcnlTZWxlY3RvciIsInNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJjYiIsIlVSTCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInJlc3BvbnNlVGV4dCIsIkpTT04iLCJwYXJzZSIsIm9wZW4iLCJzZW5kIiwiYXBwIiwic3RhcnRTdGltdWx1c0FwcCIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwSTs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBLGlFQUFlO0FBQ2YsQ0FBQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNERDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O1dBS0ksbUJBQVUsQ0FDVDs7O1dBSUQseUJBQWdCQSxLQUFoQixFQUF1QjtBQUNuQjtBQUNBO0FBQ0FBLFdBQUssQ0FBQ0MsZUFBTjtBQUNIOzs7V0FFRCw0QkFBbUJELEtBQW5CLEVBQTBCO0FBQ3RCLFVBQU1FLEdBQUcsR0FBR0YsS0FBSyxDQUFDRyxhQUFOLENBQW9CQyxPQUFoQztBQUNBQyxZQUFN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QUMsU0FBRyxDQUFDUyxJQUFKO0FBQ0g7Ozs7RUE5RndCL0MsaUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYjdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7Q0FFQTs7QUFDTyxJQUFNZ0QsR0FBRyxHQUFHQywwRUFBZ0IsQ0FBQ0MsMElBQUQsQ0FBNUIsQyxDQU9QO0FBQ0EsZ0U7Ozs7Ozs7Ozs7OztBQ1hBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9mb2xkZXJfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2ZvbGRlcl9jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9ydWxlX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9ydWxlX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuKGp8dClzeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQge0NvbnRyb2xsZXJ9IGZyb20gJ3N0aW11bHVzJztcbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuXG5cblxuICAgIGNvbm5lY3QoKSB7XG4gICAgfVxuXG5cblxuICAgIHN0b3BQcm9wYWdhdGlvbihldmVudCkge1xuICAgICAgICAvLyBUaGUgZXZlbnQgd29uJ3QgYmUgcHJvcGFnYXRlZCB1cCB0byB0aGUgZG9jdW1lbnQgTk9ERSBhbmRcbiAgICAgICAgLy8gdGhlcmVmb3JlIGRlbGVnYXRlZCBldmVudHMgd29uJ3QgYmUgZmlyZWRcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgZm9sZGVyTGlzdEZ1Y250aW9uKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGFyZyA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoJCkge1xuICAgICAgICAgICAgdmFyIG1vdmVMRm9sZGVyTGlzdCA9ICQoJ2RpdiNtb3ZlX2xpc3QnKVxuXG5cbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgICAgIHVybDogXCIvYXBpL2ZvbGRlci9saXN0LXN1Yi1pdGVtL1wiICsgYXJnLmZvbGRlck1vdmluZ0luLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IC0xLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImZvbGRlclwiLFxuICAgICAgICAgICAgICAgICAgICB1c2VyX2NvZGU6IFwiMDk3MDIyOWUtNDg2Ny00YWRhLWIwYWMtYTE5OTQ0NmNiYzIxXCJcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIG1vdmVMRm9sZGVyTGlzdC5lbXB0eSgpO1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLnJlc3VsdHMuZGF0YTtcblxuICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vZmlsbCBkcm9wZG93biBsaXN0IHdpdGggZm9sZGVyc1xuXG4gICAgICAgICAgICAgICAgJCgnPHNwYW4vPicpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnZHJvcGRvd24taXRlbSBkcm9wZG93bi1oZWFkZXInKVxuICAgICAgICAgICAgICAgICAgICAudGV4dChyZXMucmVzdWx0cy5wYXJlbnRfZm9sZGVyKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8obW92ZUxGb2xkZXJMaXN0KTtcbiAgICAgICAgICAgICAgICAkKCc8ZGl2Lz4nKVxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2Ryb3Bkb3duLWRpdmlkZXInKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8obW92ZUxGb2xkZXJMaXN0KTtcbiAgICAgICAgICAgICAgICAkLmVhY2goZGF0YS5yb3dzLCBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgICAgICAgICAvLyB2YXIgaWQgPSAnbW92ZV9saXN0JyArIGk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsaXN0SXRlbSA9ICQoJzxkaXYvPicpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2QtZmxleCAgZmxleC1yb3cgbS0yIGJvcmRlci1ib3R0b20nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKG1vdmVMRm9sZGVyTGlzdCk7XG4gICAgICAgICAgICAgICAgICAgICQoJzxkaXYvPicpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2Ryb3Bkb3duLWRpdmlkZXInKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKGxpc3RJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnPGkvPicpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2ZhcyBmYS1mb2xkZXIgbXItMicpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8obGlzdEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGlGb2xkZXIgPSAkKCc8YS8+JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdocmVmJywgXCIjXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1mb2xkZXItdG8tbW92ZScsIGFyZy5mb2xkZXJUb01vdmUpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1mb2xkZXItbW92aW5nLWluJywgZGF0YS5yb3dzW2ldLmNvZGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1hY3Rpb24nLCBcImNsaWNrLT5mb2xkZXIjZm9sZGVyTGlzdEZ1Y250aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGV4dChkYXRhLnJvd3NbaV0ubGFiZWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8obGlzdEl0ZW0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8qICoqKioqKioqXG4gICAgICAgICAgICAgICAgICAgICAgbW92ZSB0byBzcGVjaWZpYyBmb2xkZXIgY29udGVudCBpbiBkcm9wZG93biBsaXN0XG4gICAgICAgICAgICAgICAgICAgICAgYnkgcmVmaWxsaW5nIHRoZSBkcm9wZG93biBtZW51ICAgICAgICoqKioqKioqKioqKiogICovXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHVybCA9IGFyZy5wYXRoO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSB1cmwucmVwbGFjZShcIml0ZW1DXCIsIGFyZy5mb2xkZXJUb01vdmUpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSB1cmwucmVwbGFjZShcIm5ld1BhcmVudENcIiwgZGF0YS5yb3dzW2ldLmNvZGUpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSB1cmwucmVwbGFjZShcInVzZXJDXCIsIFwiMDk3MDIyOWUtNDg2Ny00YWRhLWIwYWMtYTE5OTQ0NmNiYzIxXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh1cmwpXG4gICAgICAgICAgICAgICAgICAgIGxldCBtb3ZlRm9ybSA9ICQoJzxmb3JtLz4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdtbC1hdXRvJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhY3Rpb24nLCB1cmwpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignbWV0aG9kJywgJ3Bvc3QnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKGxpc3RJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN1Ym1pdEJ1dHRvbiA9ICQoJzxidXR0b24vPicpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2J0biBidG4tYmxvY2sgYnRuLW91dGxpbmUtc2Vjb25kYXJ5ICBwLTAgbWItMScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cigndHlwZScsICdzdWJtaXQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKG1vdmVGb3JtKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnPGkvPicpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2ZhcyBmYS1jaGV2cm9uLWNpcmNsZS1kb3duIG1yLTEgbWwtMScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8oc3VibWl0QnV0dG9uKTtcblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG5cblxuICAgIH07XG59XG4iLCJpbXBvcnQge0NvbnRyb2xsZXJ9IGZyb20gJ3N0aW11bHVzJztcbmltcG9ydCBQcmlzbSBmcm9tICdwcmlzbWpzJztcbmltcG9ydCBUcmlidXRlIGZyb20gXCJ0cmlidXRlanNcIjtcbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgUHJpc20ubGFuZ3VhZ2VzLnJ1bGUgPSB7XG4gICAgICAgICAgICAnbnVtYmVyJzp7XG4gICAgICAgICAgICAgICAgcGF0dGVybiA6IC9bMC05XSsoPzpcXC5bMC05XSspPyhbRWVdW1xcK1xcLV1bMC05XSspPy9cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAncHVuY3R1YXRpb24nOntcbiAgICAgICAgICAgICAgICBwYXR0ZXJuIDogL1soKXt9OzosXS9cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnc3RyaW5nJzp7XG4gICAgICAgICAgICAgICAgcGF0dGVybiA6IC9cXFxcXCJbMC05YS16QS1aLV9dK1xcXFxcIi9cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnb3BlcmF0b3InOntcbiAgICAgICAgICAgICAgICBwYXR0ZXJuIDogL1xcYltBLVpfXStcXGIvLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nZXRPcGVyYXRvcnMoKG9wZXJhdG9ycyk9PntcblxuICAgICAgICAgICAgdGhpcy5ydWxlQXV0b2NvbXBsZXRlKG9wZXJhdG9ycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuICAgIHJ1bGVBdXRvY29tcGxldGUob3BlcmF0b3JzKXtcblxuICAgICAgICBjb25zb2xlLmxvZyhvcGVyYXRvcnMpO1xuICAgICAgICB2YXIgdHJpYnV0ZSA9IG5ldyBUcmlidXRlKHtcbiAgICAgICAgICAgIHZhbHVlczogb3BlcmF0b3JzLFxuICAgICAgICAgICAgc2VsZWN0VGVtcGxhdGU6IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gICBpdGVtLm9yaWdpbmFsLmtleTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIC8vICAgIGNvbnRhaW5lckNsYXNzOiBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB0cmlidXRlLWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgbWVudUl0ZW1UZW1wbGF0ZTogZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAgICc8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+JytpdGVtLnN0cmluZyArICc8aSBjbGFzcz1cImZhciBmYS1xdWVzdGlvbi1jaXJjbGUgaGVscFwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNtdWx0aUNvbGxhcHNlRXhhbXBsZTJcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWNvbnRyb2xzPVwibXVsdGlDb2xsYXBzZUV4YW1wbGUyXCI+PC9pPjwvZGl2Pic7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXV0b2NvbXBsZXRlTW9kZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgdHJpYnV0ZS5hdHRhY2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0aW5nXCIpKTtcbiAgICB9XG4gICAgaGlnaGxpZ2h0KCl7XG5cbiAgICAgICAgbGV0IHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRpbmdcIik7XG5cbiAgICAgICAgbGV0IHJ1bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpZ2hsaWdodGluZy1jb250ZW50XCIpO1xuXG4gICAgICAgIHJ1bGUuZm9jdXMoKTtcbiAgICAgICAgcnVsZS5pbm5lckhUTUwgPSBQcmlzbS5oaWdobGlnaHQodGV4dC52YWx1ZSwgUHJpc20ubGFuZ3VhZ2VzLnJ1bGUsICdydWxlJyk7XG4gICAgICAgIHRoaXMuc3luY19zY3JvbGwoIHRleHQgKTtcbiAgICB9XG5cbiAgICBjaGVja190YWIoIGV2ZW50KSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0aW5nXCIpO1xuICAgICAgICBsZXQgY29kZSA9IGVsZW1lbnQudmFsdWU7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT0gXCJUYWJcIikge1xuICAgICAgICAgICAgLyogVGFiIGtleSBwcmVzc2VkICovXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBzdG9wIG5vcm1hbFxuICAgICAgICAgICAgbGV0IGJlZm9yZV90YWIgPSBjb2RlLnNsaWNlKDAsIGVsZW1lbnQuc2VsZWN0aW9uU3RhcnQpOyAvLyB0ZXh0IGJlZm9yZSB0YWJcbiAgICAgICAgICAgIGxldCBhZnRlcl90YWIgPSBjb2RlLnNsaWNlKGVsZW1lbnQuc2VsZWN0aW9uRW5kLCBlbGVtZW50LnZhbHVlLmxlbmd0aCk7IC8vIHRleHQgYWZ0ZXIgdGFiXG4gICAgICAgICAgICBsZXQgY3Vyc29yX3BvcyA9IGVsZW1lbnQuc2VsZWN0aW9uRW5kICsgMjsgLy8gYWZ0ZXIgdGFiIHBsYWNlZCwgd2hlcmUgY3Vyc29yIG1vdmVzIHRvIC0gMiBmb3IgMiBzcGFjZXNcbiAgICAgICAgICAgIGVsZW1lbnQudmFsdWUgPSBiZWZvcmVfdGFiICsgXCIgIFwiICsgYWZ0ZXJfdGFiOyAvLyBhZGQgdGFiIGNoYXIgLSAyIHNwYWNlc1xuICAgICAgICAgICAgLy8gbW92ZSBjdXJzb3JcbiAgICAgICAgICAgIGVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSBjdXJzb3JfcG9zO1xuICAgICAgICAgICAgZWxlbWVudC5zZWxlY3Rpb25FbmQgPSBjdXJzb3JfcG9zO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgc3luY19zY3JvbGwoZWxlbWVudCkge1xuICAgICAgICAvKiBTY3JvbGwgcmVzdWx0IHRvIHNjcm9sbCBjb29yZHMgb2YgZXZlbnQgLSBzeW5jIHdpdGggdGV4dGFyZWEgKi9cbiAgICAgICAgbGV0IHJlc3VsdF9lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoaWdobGlnaHRpbmdcIik7XG4gICAgICAgIC8vIEdldCBhbmQgc2V0IHggYW5kIHlcbiAgICAgICAgcmVzdWx0X2VsZW1lbnQuc2Nyb2xsVG9wID0gZWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgIHJlc3VsdF9lbGVtZW50LnNjcm9sbExlZnQgPSBlbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgfVxuXG4gICAgZ2V0T3BlcmF0b3JzKCBjYikge1xuICAgICAgICB2YXIgVVJMID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3J1bGVcIjtcbiAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IFtdO1xuICAgICAgICAgICAgaWYoeGhyLnJlYWR5U3RhdGUgPT09IDQpe1xuICAgICAgICAgICAgICAgIGlmICggIHhoci5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICBkYXRhID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KS5yZXN1bHRzLm9wZXJhdG9ycztcblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoeGhyLnN0YXR1cyA9PT0gNDAzKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2IoZGF0YSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfTtcbiAgICAgICAgeGhyLm9wZW4oXCJHRVRcIiwgVVJMICwgZmFsc2UpO1xuICAgICAgICB4aHIuc2VuZCgpO1xuICAgIH1cblxufVxuXG5cbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuXG5cbmltcG9ydCAndHJpYnV0ZWpzJztcbmltcG9ydCAnYm9vdHN0cmFwJztcbmltcG9ydCAnLi9ib290c3RyYXAnO1xuXG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC4oanx0KXN4PyQvXG4pKTtcblxuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==