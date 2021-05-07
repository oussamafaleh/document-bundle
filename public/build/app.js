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
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var tributejs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tributejs */ "./node_modules/tributejs/dist/tribute.min.js");
/* harmony import */ var tributejs__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(tributejs__WEBPACK_IMPORTED_MODULE_16__);
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

      (prismjs__WEBPACK_IMPORTED_MODULE_15___default().languages.rule) = {
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
      var tribute = new (tributejs__WEBPACK_IMPORTED_MODULE_16___default())({
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
      rule.innerHTML = prismjs__WEBPACK_IMPORTED_MODULE_15___default().highlight(text.value, (prismjs__WEBPACK_IMPORTED_MODULE_15___default().languages.rule), 'rule');
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
      var url = 'http://localhost:8080/api/rule/compile';
      var xhr = new XMLHttpRequest();
      var body = {
        expression: text.value,
        expr_arg: ["label", "file_index"]
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
        console.log(results.scope + "hihi");
      }

      if (results.scope == 'danger') {
        document.getElementById('submit-rule').setAttribute("disabled", "true");
        console.log(results.scope);
      }
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_14__.Controller);



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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_array_slice_js-node_modules_core-js_modules_es_object-6f2024","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_bootstrap_dist_js_boo-4a5ecc"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vfC9cXC4oanx0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9mb2xkZXJfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvcnVsZV9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3M/M2ZiYSJdLCJuYW1lcyI6WyJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImFyZyIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwialF1ZXJ5IiwiZG9jdW1lbnQiLCJyZWFkeSIsIiQiLCJtb3ZlTEZvbGRlckxpc3QiLCJhamF4IiwibWV0aG9kIiwidXJsIiwiZm9sZGVyTW92aW5nSW4iLCJkYXRhIiwiaW5kZXgiLCJ0eXBlIiwidXNlcl9jb2RlIiwiZG9uZSIsInJlcyIsImVtcHR5IiwicmVzdWx0cyIsImFkZENsYXNzIiwidGV4dCIsInBhcmVudF9mb2xkZXIiLCJhcHBlbmRUbyIsImVhY2giLCJyb3dzIiwiaSIsImxpc3RJdGVtIiwibGlGb2xkZXIiLCJhdHRyIiwiZm9sZGVyVG9Nb3ZlIiwiY29kZSIsImxhYmVsIiwicGF0aCIsInJlcGxhY2UiLCJjb25zb2xlIiwibG9nIiwibW92ZUZvcm0iLCJzdWJtaXRCdXR0b24iLCJDb250cm9sbGVyIiwiUHJpc20iLCJwYXR0ZXJuIiwiZ2V0T3BlcmF0b3JzIiwib3BlcmF0b3JzIiwicnVsZUF1dG9jb21wbGV0ZSIsInRyaWJ1dGUiLCJUcmlidXRlIiwidmFsdWVzIiwic2VsZWN0VGVtcGxhdGUiLCJpdGVtIiwib3JpZ2luYWwiLCJrZXkiLCJtZW51SXRlbVRlbXBsYXRlIiwic3RyaW5nIiwiYXV0b2NvbXBsZXRlTW9kZSIsImF0dGFjaCIsImdldEVsZW1lbnRCeUlkIiwicnVsZSIsImZvY3VzIiwiaW5uZXJIVE1MIiwidmFsdWUiLCJzeW5jX3Njcm9sbCIsImVsZW1lbnQiLCJwcmV2ZW50RGVmYXVsdCIsImJlZm9yZV90YWIiLCJzbGljZSIsInNlbGVjdGlvblN0YXJ0IiwiYWZ0ZXJfdGFiIiwic2VsZWN0aW9uRW5kIiwibGVuZ3RoIiwiY3Vyc29yX3BvcyIsInJlc3VsdF9lbGVtZW50IiwicXVlcnlTZWxlY3RvciIsInNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJjYiIsIlVSTCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsIkpTT04iLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsIm9wZW4iLCJzZW5kIiwiYm9keSIsImV4cHJlc3Npb24iLCJleHByX2FyZyIsInNob3dBbGVydHMiLCJzZXRSZXF1ZXN0SGVhZGVyIiwic3RyaW5naWZ5IiwiY2xhc3NOYW1lIiwic2NvcGUiLCJhbGVydCIsInN0eWxlIiwiZGlzcGxheSIsInNldFRpbWVvdXQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJhcHAiLCJzdGFydFN0aW11bHVzQXBwIiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBJOzs7Ozs7Ozs7Ozs7Ozs7QUN2QkEsaUVBQWU7QUFDZixDQUFDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7V0FL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MUYsY0FBUSxDQUFDb0QsY0FBVCxDQUF3QixpQkFBeEIsRUFBMkNHLFNBQTNDLEdBQXVEeEMsT0FBTyxDQUFDNEUsS0FBL0Q7QUFDRDNGLGNBQVEsQ0FBQ29ELGNBQVQsQ0FBd0IsaUJBQXhCLEVBQTJDd0MsS0FBM0MsQ0FBaURDLE9BQWpELEdBQTJELE9BQTNEO0FBQ0FDLGdCQUFVLENBQUMsWUFBVTtBQUFDOUYsZ0JBQVEsQ0FBQ29ELGNBQVQsQ0FBd0IsaUJBQXhCLEVBQTJDd0MsS0FBM0MsQ0FBaURDLE9BQWpELEdBQTJELE1BQTNEO0FBQWtFLE9BQTlFLEVBQWdGLEtBQWhGLENBQVY7O0FBQ0EsVUFBRzlFLE9BQU8sQ0FBQzJFLEtBQVIsSUFBaUIsU0FBcEIsRUFBOEI7QUFDMUIxRixnQkFBUSxDQUFDb0QsY0FBVCxDQUF3QixhQUF4QixFQUF1QzJDLGVBQXZDLENBQXVELFVBQXZEO0FBQ0FoRSxlQUFPLENBQUNDLEdBQVIsQ0FBWWpCLE9BQU8sQ0FBQzJFLEtBQVIsR0FBYyxNQUExQjtBQUNIOztBQUFBLFVBQUczRSxPQUFPLENBQUMyRSxLQUFSLElBQWlCLFFBQXBCLEVBQTZCO0FBQ3pCMUYsZ0JBQVEsQ0FBQ29ELGNBQVQsQ0FBd0IsYUFBeEIsRUFBdUM0QyxZQUF2QyxDQUFvRCxVQUFwRCxFQUErRCxNQUEvRDtBQUNBakUsZUFBTyxDQUFDQyxHQUFSLENBQVlqQixPQUFPLENBQUMyRSxLQUFwQjtBQUNIO0FBRUw7Ozs7RUFsSXdCdkQsaUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYjdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7Q0FFQTs7QUFDTyxJQUFNOEQsR0FBRyxHQUFHQywwRUFBZ0IsQ0FBQ0MsMElBQUQsQ0FBNUIsQyxDQU9QO0FBQ0EsZ0U7Ozs7Ozs7Ozs7OztBQ1hBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9mb2xkZXJfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2ZvbGRlcl9jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9ydWxlX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9ydWxlX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuKGp8dClzeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQge0NvbnRyb2xsZXJ9IGZyb20gJ3N0aW11bHVzJztcbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuXG5cblxuICAgIGNvbm5lY3QoKSB7XG4gICAgfVxuXG5cblxuICAgIHN0b3BQcm9wYWdhdGlvbihldmVudCkge1xuICAgICAgICAvLyBUaGUgZXZlbnQgd29uJ3QgYmUgcHJvcGFnYXRlZCB1cCB0byB0aGUgZG9jdW1lbnQgTk9ERSBhbmRcbiAgICAgICAgLy8gdGhlcmVmb3JlIGRlbGVnYXRlZCBldmVudHMgd29uJ3QgYmUgZmlyZWRcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgZm9sZGVyTGlzdEZ1Y250aW9uKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGFyZyA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoJCkge1xuICAgICAgICAgICAgdmFyIG1vdmVMRm9sZGVyTGlzdCA9ICQoJ2RpdiNtb3ZlX2xpc3QnKVxuXG5cbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgICAgIHVybDogXCIvYXBpL2ZvbGRlci9saXN0LXN1Yi1pdGVtL1wiICsgYXJnLmZvbGRlck1vdmluZ0luLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IC0xLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImZvbGRlclwiLFxuICAgICAgICAgICAgICAgICAgICB1c2VyX2NvZGU6IFwiMDk3MDIyOWUtNDg2Ny00YWRhLWIwYWMtYTE5OTQ0NmNiYzIxXCJcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIG1vdmVMRm9sZGVyTGlzdC5lbXB0eSgpO1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLnJlc3VsdHMuZGF0YTtcblxuICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vZmlsbCBkcm9wZG93biBsaXN0IHdpdGggZm9sZGVyc1xuXG4gICAgICAgICAgICAgICAgJCgnPHNwYW4vPicpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnZHJvcGRvd24taXRlbSBkcm9wZG93bi1oZWFkZXInKVxuICAgICAgICAgICAgICAgICAgICAudGV4dChyZXMucmVzdWx0cy5wYXJlbnRfZm9sZGVyKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8obW92ZUxGb2xkZXJMaXN0KTtcbiAgICAgICAgICAgICAgICAkKCc8ZGl2Lz4nKVxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2Ryb3Bkb3duLWRpdmlkZXInKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8obW92ZUxGb2xkZXJMaXN0KTtcbiAgICAgICAgICAgICAgICAkLmVhY2goZGF0YS5yb3dzLCBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgICAgICAgICAvLyB2YXIgaWQgPSAnbW92ZV9saXN0JyArIGk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsaXN0SXRlbSA9ICQoJzxkaXYvPicpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2QtZmxleCAgZmxleC1yb3cgbS0yIGJvcmRlci1ib3R0b20nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKG1vdmVMRm9sZGVyTGlzdCk7XG4gICAgICAgICAgICAgICAgICAgICQoJzxkaXYvPicpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2Ryb3Bkb3duLWRpdmlkZXInKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKGxpc3RJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnPGkvPicpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2ZhcyBmYS1mb2xkZXIgbXItMicpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8obGlzdEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGlGb2xkZXIgPSAkKCc8YS8+JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdocmVmJywgXCIjXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1mb2xkZXItdG8tbW92ZScsIGFyZy5mb2xkZXJUb01vdmUpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1mb2xkZXItbW92aW5nLWluJywgZGF0YS5yb3dzW2ldLmNvZGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1hY3Rpb24nLCBcImNsaWNrLT5mb2xkZXIjZm9sZGVyTGlzdEZ1Y250aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGV4dChkYXRhLnJvd3NbaV0ubGFiZWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8obGlzdEl0ZW0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8qICoqKioqKioqXG4gICAgICAgICAgICAgICAgICAgICAgbW92ZSB0byBzcGVjaWZpYyBmb2xkZXIgY29udGVudCBpbiBkcm9wZG93biBsaXN0XG4gICAgICAgICAgICAgICAgICAgICAgYnkgcmVmaWxsaW5nIHRoZSBkcm9wZG93biBtZW51ICAgICAgICoqKioqKioqKioqKiogICovXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHVybCA9IGFyZy5wYXRoO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSB1cmwucmVwbGFjZShcIml0ZW1DXCIsIGFyZy5mb2xkZXJUb01vdmUpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSB1cmwucmVwbGFjZShcIm5ld1BhcmVudENcIiwgZGF0YS5yb3dzW2ldLmNvZGUpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSB1cmwucmVwbGFjZShcInVzZXJDXCIsIFwiMDk3MDIyOWUtNDg2Ny00YWRhLWIwYWMtYTE5OTQ0NmNiYzIxXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh1cmwpXG4gICAgICAgICAgICAgICAgICAgIGxldCBtb3ZlRm9ybSA9ICQoJzxmb3JtLz4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdtbC1hdXRvJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhY3Rpb24nLCB1cmwpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignbWV0aG9kJywgJ3Bvc3QnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKGxpc3RJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN1Ym1pdEJ1dHRvbiA9ICQoJzxidXR0b24vPicpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2J0biBidG4tYmxvY2sgYnRuLW91dGxpbmUtc2Vjb25kYXJ5ICBwLTAgbWItMScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cigndHlwZScsICdzdWJtaXQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKG1vdmVGb3JtKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnPGkvPicpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2ZhcyBmYS1jaGV2cm9uLWNpcmNsZS1kb3duIG1yLTEgbWwtMScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8oc3VibWl0QnV0dG9uKTtcblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG5cblxuICAgIH07XG59XG4iLCJpbXBvcnQge0NvbnRyb2xsZXJ9IGZyb20gJ3N0aW11bHVzJztcbmltcG9ydCBQcmlzbSBmcm9tICdwcmlzbWpzJztcbmltcG9ydCBUcmlidXRlIGZyb20gXCJ0cmlidXRlanNcIjtcbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgUHJpc20ubGFuZ3VhZ2VzLnJ1bGUgPSB7XG4gICAgICAgICAgICAnbnVtYmVyJzp7XG4gICAgICAgICAgICAgICAgcGF0dGVybiA6IC9bMC05XSsoPzpcXC5bMC05XSspPyhbRWVdW1xcK1xcLV1bMC05XSspPy9cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAncHVuY3R1YXRpb24nOntcbiAgICAgICAgICAgICAgICBwYXR0ZXJuIDogL1soKXt9OzosXS9cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnc3RyaW5nJzp7XG4gICAgICAgICAgICAgICAgcGF0dGVybiA6IC9cIlswLTlhLXpBLVotX10rXCIvXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ29wZXJhdG9yJzp7XG4gICAgICAgICAgICAgICAgcGF0dGVybiA6IC9cXGJbQS1aX10rXFxiLyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ2V0T3BlcmF0b3JzKChvcGVyYXRvcnMpPT57XG5cbiAgICAgICAgICAgIHRoaXMucnVsZUF1dG9jb21wbGV0ZShvcGVyYXRvcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbiAgICBydWxlQXV0b2NvbXBsZXRlKG9wZXJhdG9ycyl7XG5cbiAgICAgICAgdmFyIHRyaWJ1dGUgPSBuZXcgVHJpYnV0ZSh7XG4gICAgICAgICAgICB2YWx1ZXM6IG9wZXJhdG9ycyxcbiAgICAgICAgICAgIHNlbGVjdFRlbXBsYXRlOiBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICAgaXRlbS5vcmlnaW5hbC5rZXk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAvLyAgICBjb250YWluZXJDbGFzczogXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gdHJpYnV0ZS1jb250YWluZXJcIixcbiAgICAgICAgICAgIG1lbnVJdGVtVGVtcGxhdGU6IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gICAnPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPicraXRlbS5zdHJpbmcgKyAnPGkgY2xhc3M9XCJmYXIgZmEtcXVlc3Rpb24tY2lyY2xlIGhlbHBcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbXVsdGlDb2xsYXBzZUV4YW1wbGUyXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cIm11bHRpQ29sbGFwc2VFeGFtcGxlMlwiPjwvaT48L2Rpdj4nO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGF1dG9jb21wbGV0ZU1vZGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHRyaWJ1dGUuYXR0YWNoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdGluZ1wiKSk7XG4gICAgfVxuICAgIGhpZ2hsaWdodCgpe1xuXG4gICAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0aW5nXCIpO1xuXG4gICAgICAgIGxldCBydWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaWdobGlnaHRpbmctY29udGVudFwiKTtcblxuICAgICAgICBydWxlLmZvY3VzKCk7XG4gICAgICAgIHJ1bGUuaW5uZXJIVE1MID0gUHJpc20uaGlnaGxpZ2h0KHRleHQudmFsdWUsIFByaXNtLmxhbmd1YWdlcy5ydWxlLCAncnVsZScpO1xuICAgICAgICB0aGlzLnN5bmNfc2Nyb2xsKCB0ZXh0ICk7XG4gICAgfVxuXG4gICAgY2hlY2tfdGFiKCBldmVudCkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdGluZ1wiKTtcbiAgICAgICAgbGV0IGNvZGUgPSBlbGVtZW50LnZhbHVlO1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09IFwiVGFiXCIpIHtcbiAgICAgICAgICAgIC8qIFRhYiBrZXkgcHJlc3NlZCAqL1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gc3RvcCBub3JtYWxcbiAgICAgICAgICAgIGxldCBiZWZvcmVfdGFiID0gY29kZS5zbGljZSgwLCBlbGVtZW50LnNlbGVjdGlvblN0YXJ0KTsgLy8gdGV4dCBiZWZvcmUgdGFiXG4gICAgICAgICAgICBsZXQgYWZ0ZXJfdGFiID0gY29kZS5zbGljZShlbGVtZW50LnNlbGVjdGlvbkVuZCwgZWxlbWVudC52YWx1ZS5sZW5ndGgpOyAvLyB0ZXh0IGFmdGVyIHRhYlxuICAgICAgICAgICAgbGV0IGN1cnNvcl9wb3MgPSBlbGVtZW50LnNlbGVjdGlvbkVuZCArIDI7IC8vIGFmdGVyIHRhYiBwbGFjZWQsIHdoZXJlIGN1cnNvciBtb3ZlcyB0byAtIDIgZm9yIDIgc3BhY2VzXG4gICAgICAgICAgICBlbGVtZW50LnZhbHVlID0gYmVmb3JlX3RhYiArIFwiICBcIiArIGFmdGVyX3RhYjsgLy8gYWRkIHRhYiBjaGFyIC0gMiBzcGFjZXNcbiAgICAgICAgICAgIC8vIG1vdmUgY3Vyc29yXG4gICAgICAgICAgICBlbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gY3Vyc29yX3BvcztcbiAgICAgICAgICAgIGVsZW1lbnQuc2VsZWN0aW9uRW5kID0gY3Vyc29yX3BvcztcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHN5bmNfc2Nyb2xsKGVsZW1lbnQpIHtcbiAgICAgICAgLyogU2Nyb2xsIHJlc3VsdCB0byBzY3JvbGwgY29vcmRzIG9mIGV2ZW50IC0gc3luYyB3aXRoIHRleHRhcmVhICovXG4gICAgICAgIGxldCByZXN1bHRfZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGlnaGxpZ2h0aW5nXCIpO1xuICAgICAgICAvLyBHZXQgYW5kIHNldCB4IGFuZCB5XG4gICAgICAgIHJlc3VsdF9lbGVtZW50LnNjcm9sbFRvcCA9IGVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICByZXN1bHRfZWxlbWVudC5zY3JvbGxMZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgIH1cblxuICAgIGdldE9wZXJhdG9ycyggY2IpIHtcbiAgICAgICAgdmFyIFVSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9ydWxlXCI7XG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBbXTtcbiAgICAgICAgICAgIGlmKHhoci5yZWFkeVN0YXRlID09PSA0KXtcbiAgICAgICAgICAgICAgICBpZiAoICB4aHIuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KS5yZXN1bHRzLm9wZXJhdG9ycztcblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoeGhyLnN0YXR1cyA9PT0gNDAzKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2IoZGF0YSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfTtcbiAgICAgICAgeGhyLm9wZW4oXCJHRVRcIiwgVVJMICwgZmFsc2UpO1xuICAgICAgICB4aHIuc2VuZCgpO1xuICAgIH1cbiAgICBjb21waWxlKCApIHtcbiAgICAgICAgbGV0IHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRpbmdcIik7XG4gICAgICAgIHZhciB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9ydWxlL2NvbXBpbGUnO1xuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHZhciBib2R5ID0ge1xuICAgICAgICAgICAgZXhwcmVzc2lvbiA6IHRleHQudmFsdWUgLFxuICAgICAgICAgICAgZXhwcl9hcmcgOiBbXCJsYWJlbFwiLFwiZmlsZV9pbmRleFwiXVxuICAgICAgICB9XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiAge1xuICAgICAgICAgICAgaWYoeGhyLnJlYWR5U3RhdGUgPT09IDQpe1xuICAgICAgICAgICAgICAgIGlmICggIHhoci5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93QWxlcnRzKGRhdGEucmVzdWx0cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgdXJsICApO1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtdHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIik7XG4gICAgICAgIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KGJvZHkpKTtcbiAgICB9XG4gICAgIHNob3dBbGVydHMocmVzdWx0cykge1xuICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvb3RzdHJhcC1hbGVydCcpLmNsYXNzTmFtZSA9IFwiYWxlcnQgYWxlcnQtXCIrIHJlc3VsdHMuc2NvcGUgO1xuXG4gICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9vdHN0cmFwLWFsZXJ0JykuaW5uZXJIVE1MID0gcmVzdWx0cy5hbGVydCA7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib290c3RyYXAtYWxlcnQnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib290c3RyYXAtYWxlcnQnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnfSwgMTcwMDApO1xuICAgICAgICBpZihyZXN1bHRzLnNjb3BlID09ICdzdWNjZXNzJyl7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0LXJ1bGUnKS5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSA7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRzLnNjb3BlK1wiaGloaVwiKTtcbiAgICAgICAgfWlmKHJlc3VsdHMuc2NvcGUgPT0gJ2Rhbmdlcicpe1xuICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQtcnVsZScpLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsXCJ0cnVlXCIpIDtcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRzLnNjb3BlKTtcbiAgICAgICAgIH1cblxuICAgIH1cblxufVxuXG5cbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuXG5cbmltcG9ydCAndHJpYnV0ZWpzJztcbmltcG9ydCAnYm9vdHN0cmFwJztcbmltcG9ydCAnLi9ib290c3RyYXAnO1xuXG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC4oanx0KXN4PyQvXG4pKTtcblxuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==