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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vfC9cXC4oanx0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9mb2xkZXJfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvcnVsZV9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3MiXSwibmFtZXMiOlsiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJhcmciLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCIkIiwibW92ZUxGb2xkZXJMaXN0IiwiYWpheCIsIm1ldGhvZCIsInVybCIsImZvbGRlck1vdmluZ0luIiwiZGF0YSIsImluZGV4IiwidHlwZSIsInVzZXJfY29kZSIsImRvbmUiLCJyZXMiLCJlbXB0eSIsInJlc3VsdHMiLCJhZGRDbGFzcyIsInRleHQiLCJwYXJlbnRfZm9sZGVyIiwiYXBwZW5kVG8iLCJlYWNoIiwicm93cyIsImkiLCJsaXN0SXRlbSIsImxpRm9sZGVyIiwiYXR0ciIsImZvbGRlclRvTW92ZSIsImNvZGUiLCJsYWJlbCIsInBhdGgiLCJyZXBsYWNlIiwiY29uc29sZSIsImxvZyIsIm1vdmVGb3JtIiwic3VibWl0QnV0dG9uIiwiQ29udHJvbGxlciIsIlByaXNtIiwicGF0dGVybiIsImdldE9wZXJhdG9ycyIsIm9wZXJhdG9ycyIsInJ1bGVBdXRvY29tcGxldGUiLCJ0cmlidXRlIiwiVHJpYnV0ZSIsInZhbHVlcyIsInNlbGVjdFRlbXBsYXRlIiwiaXRlbSIsIm9yaWdpbmFsIiwia2V5IiwibWVudUl0ZW1UZW1wbGF0ZSIsInN0cmluZyIsImF1dG9jb21wbGV0ZU1vZGUiLCJhdHRhY2giLCJnZXRFbGVtZW50QnlJZCIsInJ1bGUiLCJmb2N1cyIsImlubmVySFRNTCIsInZhbHVlIiwic3luY19zY3JvbGwiLCJlbGVtZW50IiwicHJldmVudERlZmF1bHQiLCJiZWZvcmVfdGFiIiwic2xpY2UiLCJzZWxlY3Rpb25TdGFydCIsImFmdGVyX3RhYiIsInNlbGVjdGlvbkVuZCIsImxlbmd0aCIsImN1cnNvcl9wb3MiLCJyZXN1bHRfZWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwiY2IiLCJVUkwiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJvcGVuIiwic2VuZCIsImJvZHkiLCJleHByZXNzaW9uIiwiZXhwcl9hcmciLCJzaG93QWxlcnRzIiwic2V0UmVxdWVzdEhlYWRlciIsInN0cmluZ2lmeSIsImNsYXNzTmFtZSIsInNjb3BlIiwiYWxlcnQiLCJzdHlsZSIsImRpc3BsYXkiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiYXBwIiwic3RhcnRTdGltdWx1c0FwcCIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwSTs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBLGlFQUFlO0FBQ2YsQ0FBQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNERDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O1dBS0ksbUJB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QVEsQ0FBQ29ELGNBQVQsQ0FBd0IsaUJBQXhCLEVBQTJDRyxTQUEzQyxHQUF1RHhDLE9BQU8sQ0FBQzRFLEtBQS9EO0FBQ0QzRixjQUFRLENBQUNvRCxjQUFULENBQXdCLGlCQUF4QixFQUEyQ3dDLEtBQTNDLENBQWlEQyxPQUFqRCxHQUEyRCxPQUEzRDtBQUNBQyxnQkFBVSxDQUFDLFlBQVU7QUFBQzlGLGdCQUFRLENBQUNvRCxjQUFULENBQXdCLGlCQUF4QixFQUEyQ3dDLEtBQTNDLENBQWlEQyxPQUFqRCxHQUEyRCxNQUEzRDtBQUFrRSxPQUE5RSxFQUFnRixLQUFoRixDQUFWOztBQUNBLFVBQUc5RSxPQUFPLENBQUMyRSxLQUFSLElBQWlCLFNBQXBCLEVBQThCO0FBQzFCMUYsZ0JBQVEsQ0FBQ29ELGNBQVQsQ0FBd0IsYUFBeEIsRUFBdUMyQyxlQUF2QyxDQUF1RCxVQUF2RDtBQUNBaEUsZUFBTyxDQUFDQyxHQUFSLENBQVlqQixPQUFPLENBQUMyRSxLQUFSLEdBQWMsTUFBMUI7QUFDSDs7QUFBQSxVQUFHM0UsT0FBTyxDQUFDMkUsS0FBUixJQUFpQixRQUFwQixFQUE2QjtBQUN6QjFGLGdCQUFRLENBQUNvRCxjQUFULENBQXdCLGFBQXhCLEVBQXVDNEMsWUFBdkMsQ0FBb0QsVUFBcEQsRUFBK0QsTUFBL0Q7QUFDQWpFLGVBQU8sQ0FBQ0MsR0FBUixDQUFZakIsT0FBTyxDQUFDMkUsS0FBcEI7QUFDSDtBQUVMOzs7O0VBbEl3QnZELGlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2I3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0NBRUE7O0FBQ08sSUFBTThELEdBQUcsR0FBR0MsMEVBQWdCLENBQUNDLDBJQUFELENBQTVCLEMsQ0FPUDtBQUNBLGdFOzs7Ozs7Ozs7Ozs7QUNYQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vZm9sZGVyX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9mb2xkZXJfY29udHJvbGxlci5qc1wiLFxuXHRcIi4vcnVsZV9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvcnVsZV9jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLihqfHQpc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiaW1wb3J0IHtDb250cm9sbGVyfSBmcm9tICdzdGltdWx1cyc7XG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcblxuXG5cbiAgICBjb25uZWN0KCkge1xuICAgIH1cblxuXG5cbiAgICBzdG9wUHJvcGFnYXRpb24oZXZlbnQpIHtcbiAgICAgICAgLy8gVGhlIGV2ZW50IHdvbid0IGJlIHByb3BhZ2F0ZWQgdXAgdG8gdGhlIGRvY3VtZW50IE5PREUgYW5kXG4gICAgICAgIC8vIHRoZXJlZm9yZSBkZWxlZ2F0ZWQgZXZlbnRzIHdvbid0IGJlIGZpcmVkXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIGZvbGRlckxpc3RGdWNudGlvbihldmVudCkge1xuICAgICAgICBjb25zdCBhcmcgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCQpIHtcbiAgICAgICAgICAgIHZhciBtb3ZlTEZvbGRlckxpc3QgPSAkKCdkaXYjbW92ZV9saXN0JylcblxuXG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgICAgICB1cmw6IFwiL2FwaS9mb2xkZXIvbGlzdC1zdWItaXRlbS9cIiArIGFyZy5mb2xkZXJNb3ZpbmdJbixcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiAtMSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJmb2xkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgdXNlcl9jb2RlOiBcIjA5NzAyMjllLTQ4NjctNGFkYS1iMGFjLWExOTk0NDZjYmMyMVwiXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KS5kb25lKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICBtb3ZlTEZvbGRlckxpc3QuZW1wdHkoKTtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlcy5yZXN1bHRzLmRhdGE7XG5cbiAgICAgICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL2ZpbGwgZHJvcGRvd24gbGlzdCB3aXRoIGZvbGRlcnNcblxuICAgICAgICAgICAgICAgICQoJzxzcGFuLz4nKVxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2Ryb3Bkb3duLWl0ZW0gZHJvcGRvd24taGVhZGVyJylcbiAgICAgICAgICAgICAgICAgICAgLnRleHQocmVzLnJlc3VsdHMucGFyZW50X2ZvbGRlcilcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKG1vdmVMRm9sZGVyTGlzdCk7XG4gICAgICAgICAgICAgICAgJCgnPGRpdi8+JylcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdkcm9wZG93bi1kaXZpZGVyJylcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKG1vdmVMRm9sZGVyTGlzdCk7XG4gICAgICAgICAgICAgICAgJC5lYWNoKGRhdGEucm93cywgZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdmFyIGlkID0gJ21vdmVfbGlzdCcgKyBpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGlzdEl0ZW0gPSAkKCc8ZGl2Lz4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdkLWZsZXggIGZsZXgtcm93IG0tMiBib3JkZXItYm90dG9tJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhtb3ZlTEZvbGRlckxpc3QpO1xuICAgICAgICAgICAgICAgICAgICAkKCc8ZGl2Lz4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdkcm9wZG93bi1kaXZpZGVyJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhsaXN0SXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICQoJzxpLz4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdmYXMgZmEtZm9sZGVyIG1yLTInKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKGxpc3RJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxpRm9sZGVyID0gJCgnPGEvPicpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignaHJlZicsIFwiI1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZm9sZGVyLXRvLW1vdmUnLCBhcmcuZm9sZGVyVG9Nb3ZlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtZm9sZGVyLW1vdmluZy1pbicsIGRhdGEucm93c1tpXS5jb2RlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtYWN0aW9uJywgXCJjbGljay0+Zm9sZGVyI2ZvbGRlckxpc3RGdWNudGlvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQoZGF0YS5yb3dzW2ldLmxhYmVsKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKGxpc3RJdGVtKTtcblxuICAgICAgICAgICAgICAgICAgICAvKiAqKioqKioqKlxuICAgICAgICAgICAgICAgICAgICAgIG1vdmUgdG8gc3BlY2lmaWMgZm9sZGVyIGNvbnRlbnQgaW4gZHJvcGRvd24gbGlzdFxuICAgICAgICAgICAgICAgICAgICAgIGJ5IHJlZmlsbGluZyB0aGUgZHJvcGRvd24gbWVudSAgICAgICAqKioqKioqKioqKioqICAqL1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB1cmwgPSBhcmcucGF0aDtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UoXCJpdGVtQ1wiLCBhcmcuZm9sZGVyVG9Nb3ZlKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UoXCJuZXdQYXJlbnRDXCIsIGRhdGEucm93c1tpXS5jb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UoXCJ1c2VyQ1wiLCBcIjA5NzAyMjllLTQ4NjctNGFkYS1iMGFjLWExOTk0NDZjYmMyMVwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codXJsKVxuICAgICAgICAgICAgICAgICAgICBsZXQgbW92ZUZvcm0gPSAkKCc8Zm9ybS8+JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnbWwtYXV0bycpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYWN0aW9uJywgdXJsKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ21ldGhvZCcsICdwb3N0JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhsaXN0SXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzdWJtaXRCdXR0b24gPSAkKCc8YnV0dG9uLz4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdidG4gYnRuLWJsb2NrIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSAgcC0wIG1iLTEnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3R5cGUnLCAnc3VibWl0JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhtb3ZlRm9ybSk7XG4gICAgICAgICAgICAgICAgICAgICQoJzxpLz4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdmYXMgZmEtY2hldnJvbi1jaXJjbGUtZG93biBtci0xIG1sLTEnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKHN1Ym1pdEJ1dHRvbik7XG5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuXG5cbiAgICB9O1xufVxuIiwiaW1wb3J0IHtDb250cm9sbGVyfSBmcm9tICdzdGltdWx1cyc7XG5pbXBvcnQgUHJpc20gZnJvbSAncHJpc21qcyc7XG5pbXBvcnQgVHJpYnV0ZSBmcm9tIFwidHJpYnV0ZWpzXCI7XG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIFByaXNtLmxhbmd1YWdlcy5ydWxlID0ge1xuICAgICAgICAgICAgJ251bWJlcic6e1xuICAgICAgICAgICAgICAgIHBhdHRlcm4gOiAvWzAtOV0rKD86XFwuWzAtOV0rKT8oW0VlXVtcXCtcXC1dWzAtOV0rKT8vXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3B1bmN0dWF0aW9uJzp7XG4gICAgICAgICAgICAgICAgcGF0dGVybiA6IC9bKCl7fTs6LF0vXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3N0cmluZyc6e1xuICAgICAgICAgICAgICAgIHBhdHRlcm4gOiAvXCJbMC05YS16QS1aLV9dK1wiL1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdvcGVyYXRvcic6e1xuICAgICAgICAgICAgICAgIHBhdHRlcm4gOiAvXFxiW0EtWl9dK1xcYi8sXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdldE9wZXJhdG9ycygob3BlcmF0b3JzKT0+e1xuXG4gICAgICAgICAgICB0aGlzLnJ1bGVBdXRvY29tcGxldGUob3BlcmF0b3JzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG4gICAgcnVsZUF1dG9jb21wbGV0ZShvcGVyYXRvcnMpe1xuXG4gICAgICAgIHZhciB0cmlidXRlID0gbmV3IFRyaWJ1dGUoe1xuICAgICAgICAgICAgdmFsdWVzOiBvcGVyYXRvcnMsXG4gICAgICAgICAgICBzZWxlY3RUZW1wbGF0ZTogZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAgIGl0ZW0ub3JpZ2luYWwua2V5O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgLy8gICAgY29udGFpbmVyQ2xhc3M6IFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHRyaWJ1dGUtY29udGFpbmVyXCIsXG4gICAgICAgICAgICBtZW51SXRlbVRlbXBsYXRlOiBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICAgJzxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj4nK2l0ZW0uc3RyaW5nICsgJzxpIGNsYXNzPVwiZmFyIGZhLXF1ZXN0aW9uLWNpcmNsZSBoZWxwXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI211bHRpQ29sbGFwc2VFeGFtcGxlMlwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtY29udHJvbHM9XCJtdWx0aUNvbGxhcHNlRXhhbXBsZTJcIj48L2k+PC9kaXY+JztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhdXRvY29tcGxldGVNb2RlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICB0cmlidXRlLmF0dGFjaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRpbmdcIikpO1xuICAgIH1cbiAgICBoaWdobGlnaHQoKXtcblxuICAgICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdGluZ1wiKTtcblxuICAgICAgICBsZXQgcnVsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlnaGxpZ2h0aW5nLWNvbnRlbnRcIik7XG5cbiAgICAgICAgcnVsZS5mb2N1cygpO1xuICAgICAgICBydWxlLmlubmVySFRNTCA9IFByaXNtLmhpZ2hsaWdodCh0ZXh0LnZhbHVlLCBQcmlzbS5sYW5ndWFnZXMucnVsZSwgJ3J1bGUnKTtcbiAgICAgICAgdGhpcy5zeW5jX3Njcm9sbCggdGV4dCApO1xuICAgIH1cblxuICAgIGNoZWNrX3RhYiggZXZlbnQpIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRpbmdcIik7XG4gICAgICAgIGxldCBjb2RlID0gZWxlbWVudC52YWx1ZTtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PSBcIlRhYlwiKSB7XG4gICAgICAgICAgICAvKiBUYWIga2V5IHByZXNzZWQgKi9cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIHN0b3Agbm9ybWFsXG4gICAgICAgICAgICBsZXQgYmVmb3JlX3RhYiA9IGNvZGUuc2xpY2UoMCwgZWxlbWVudC5zZWxlY3Rpb25TdGFydCk7IC8vIHRleHQgYmVmb3JlIHRhYlxuICAgICAgICAgICAgbGV0IGFmdGVyX3RhYiA9IGNvZGUuc2xpY2UoZWxlbWVudC5zZWxlY3Rpb25FbmQsIGVsZW1lbnQudmFsdWUubGVuZ3RoKTsgLy8gdGV4dCBhZnRlciB0YWJcbiAgICAgICAgICAgIGxldCBjdXJzb3JfcG9zID0gZWxlbWVudC5zZWxlY3Rpb25FbmQgKyAyOyAvLyBhZnRlciB0YWIgcGxhY2VkLCB3aGVyZSBjdXJzb3IgbW92ZXMgdG8gLSAyIGZvciAyIHNwYWNlc1xuICAgICAgICAgICAgZWxlbWVudC52YWx1ZSA9IGJlZm9yZV90YWIgKyBcIiAgXCIgKyBhZnRlcl90YWI7IC8vIGFkZCB0YWIgY2hhciAtIDIgc3BhY2VzXG4gICAgICAgICAgICAvLyBtb3ZlIGN1cnNvclxuICAgICAgICAgICAgZWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IGN1cnNvcl9wb3M7XG4gICAgICAgICAgICBlbGVtZW50LnNlbGVjdGlvbkVuZCA9IGN1cnNvcl9wb3M7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBzeW5jX3Njcm9sbChlbGVtZW50KSB7XG4gICAgICAgIC8qIFNjcm9sbCByZXN1bHQgdG8gc2Nyb2xsIGNvb3JkcyBvZiBldmVudCAtIHN5bmMgd2l0aCB0ZXh0YXJlYSAqL1xuICAgICAgICBsZXQgcmVzdWx0X2VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hpZ2hsaWdodGluZ1wiKTtcbiAgICAgICAgLy8gR2V0IGFuZCBzZXQgeCBhbmQgeVxuICAgICAgICByZXN1bHRfZWxlbWVudC5zY3JvbGxUb3AgPSBlbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgcmVzdWx0X2VsZW1lbnQuc2Nyb2xsTGVmdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICB9XG5cbiAgICBnZXRPcGVyYXRvcnMoIGNiKSB7XG4gICAgICAgIHZhciBVUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvcnVsZVwiO1xuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0gW107XG4gICAgICAgICAgICBpZih4aHIucmVhZHlTdGF0ZSA9PT0gNCl7XG4gICAgICAgICAgICAgICAgaWYgKCAgeGhyLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCkucmVzdWx0cy5vcGVyYXRvcnM7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHhoci5zdGF0dXMgPT09IDQwMykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhID0gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNiKGRhdGEpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH07XG4gICAgICAgIHhoci5vcGVuKFwiR0VUXCIsIFVSTCAsIGZhbHNlKTtcbiAgICAgICAgeGhyLnNlbmQoKTtcbiAgICB9XG4gICAgY29tcGlsZSggKSB7XG4gICAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0aW5nXCIpO1xuICAgICAgICB2YXIgdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvcnVsZS9jb21waWxlJztcbiAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB2YXIgYm9keSA9IHtcbiAgICAgICAgICAgIGV4cHJlc3Npb24gOiB0ZXh0LnZhbHVlICxcbiAgICAgICAgICAgIGV4cHJfYXJnIDogW1wibGFiZWxcIixcImZpbGVfaW5kZXhcIl1cbiAgICAgICAgfVxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4gIHtcbiAgICAgICAgICAgIGlmKHhoci5yZWFkeVN0YXRlID09PSA0KXtcbiAgICAgICAgICAgICAgICBpZiAoICB4aHIuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0FsZXJ0cyhkYXRhLnJlc3VsdHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIHVybCAgKTtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIpO1xuICAgICAgICB4aHIuc2VuZChKU09OLnN0cmluZ2lmeShib2R5KSk7XG4gICAgfVxuICAgICBzaG93QWxlcnRzKHJlc3VsdHMpIHtcbiAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib290c3RyYXAtYWxlcnQnKS5jbGFzc05hbWUgPSBcImFsZXJ0IGFsZXJ0LVwiKyByZXN1bHRzLnNjb3BlIDtcblxuICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvb3RzdHJhcC1hbGVydCcpLmlubmVySFRNTCA9IHJlc3VsdHMuYWxlcnQgO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9vdHN0cmFwLWFsZXJ0Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9vdHN0cmFwLWFsZXJ0Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJ30sIDE3MDAwKTtcbiAgICAgICAgaWYocmVzdWx0cy5zY29wZSA9PSAnc3VjY2Vzcycpe1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC1ydWxlJykucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIikgO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0cy5zY29wZStcImhpaGlcIik7XG4gICAgICAgIH1pZihyZXN1bHRzLnNjb3BlID09ICdkYW5nZXInKXtcbiAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0LXJ1bGUnKS5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLFwidHJ1ZVwiKSA7XG4gICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0cy5zY29wZSk7XG4gICAgICAgICB9XG5cbiAgICB9XG5cbn1cblxuXG4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcblxuXG5pbXBvcnQgJ3RyaWJ1dGVqcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcCc7XG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcblxuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuKGp8dClzeD8kL1xuKSk7XG5cblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=