(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$":
/*!*****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.(j|t)sx?$ ***!
  \*****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./doceditor_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/doceditor_controller.js",
	"./fileicon_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/fileicon_controller.js",
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

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/doceditor_controller.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/doceditor_controller.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
/* harmony import */ var _DocDecoupledEditor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../DocDecoupledEditor */ "./assets/DocDecoupledEditor.js");
/* harmony import */ var _ckeditor_ckeditor5_inspector__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ckeditor/ckeditor5-inspector */ "./node_modules/@ckeditor/ckeditor5-inspector/build/inspector.js");
/* harmony import */ var _ckeditor_ckeditor5_inspector__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_inspector__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _texttemplating__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../texttemplating */ "./assets/texttemplating.js");
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
//import ExportPdf from '@ckeditor/ckeditor5-export-pdf/src/exportpdf';

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

      _DocDecoupledEditor__WEBPACK_IMPORTED_MODULE_19__.default.create(document.querySelector('.document-editor__editable'), {
        typing: {
          transformations: {
            extra: [{
              from: /(\[{2})([a-z]+)(\]{2})$/,
              to: function to(matches) {
                return [null, _this.changeTemplateItem(matches), null];
              } //  //

            }]
          }
        }
      }).then(function (editor) {
        _ckeditor_ckeditor5_inspector__WEBPACK_IMPORTED_MODULE_20___default().attach(editor);
        var toolbarContainer = document.querySelector('.document-editor__toolbar');
        toolbarContainer.appendChild(editor.ui.view.toolbar.element);
        window.editor = editor;
        _this.editor = editor;
      })["catch"](function (err) {
        console.error(err);
      });
    }
  }, {
    key: "textTestCallback",
    value: function textTestCallback(range) {
      if (!range.collapsed) {
        return null;
      }

      return _DocDecoupledEditor__WEBPACK_IMPORTED_MODULE_19__.default.plugins.textMatch.match(range, matchCallback);
    }
  }, {
    key: "matchCallback",
    value: function matchCallback(text, offset) {
      var pattern = /\[{2}([A-z]|\])*$/,
          match = text.slice(0, offset).match(pattern);

      if (!match) {
        return null;
      }

      return {
        start: match.index,
        end: offset
      };
    }
  }, {
    key: "dataCallback",
    value: function dataCallback(matchInfo, callback) {
      var data = PLACEHOLDERS.filter(function (item) {
        var itemName = '[[' + item.name + ']]';
        return itemName.indexOf(matchInfo.query.toLowerCase()) == 0;
      });
      callback(data);
    }
  }, {
    key: "changeTemplateItem",
    value: function changeTemplateItem(match) {
      return match[1];
    }
  }, {
    key: "addPleholder",
    value: function addPleholder(id) {
      var item = {
        id: id,
        question: "",
        type: "input"
      };
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_18__.Controller);

_defineProperty(_default, "targets", ["doc-variables"]);



/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/fileicon_controller.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/fileicon_controller.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
/* harmony import */ var pretty_file_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! pretty-file-icons */ "./node_modules/pretty-file-icons/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_14__);
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



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
      console.log(this.filename);
      this.getIcon(this.filename); // console.log(process);
    }
  }, {
    key: "getIcon",
    value: function getIcon(fileName) {
      var item = pretty_file_icons__WEBPACK_IMPORTED_MODULE_13__.getIcon(this.element.getAttribute('id'));
      var img = document.createElement('img');
      img.src = '/assets/img/svg/' + item + '.svg';
      img.setAttribute('alt', item);
      img.setAttribute('title', item);
      this.element.appendChild(img);
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_12__.Controller);

_defineProperty(_default, "values", {
  filename: String
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

/***/ "./assets/DocDecoupledEditor.js":
/*!**************************************!*\
  !*** ./assets/DocDecoupledEditor.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DecoupledEditor)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ckeditor_ckeditor5_editor_decoupled_src_decouplededitor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ckeditor/ckeditor5-editor-decoupled/src/decouplededitor */ "./node_modules/@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor.js");
/* harmony import */ var _ckeditor_ckeditor5_typing_src_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ckeditor/ckeditor5-typing/src/input */ "./node_modules/@ckeditor/ckeditor5-typing/src/input.js");
/* harmony import */ var _ckeditor_ckeditor5_essentials_src_essentials__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ckeditor/ckeditor5-essentials/src/essentials */ "./node_modules/@ckeditor/ckeditor5-essentials/src/essentials.js");
/* harmony import */ var _ckeditor_ckeditor5_alignment_src_alignment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ckeditor/ckeditor5-alignment/src/alignment */ "./node_modules/@ckeditor/ckeditor5-alignment/src/alignment.js");
/* harmony import */ var _ckeditor_ckeditor5_font_src_fontsize__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ckeditor/ckeditor5-font/src/fontsize */ "./node_modules/@ckeditor/ckeditor5-font/src/fontsize.js");
/* harmony import */ var _ckeditor_ckeditor5_font_src_fontfamily__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ckeditor/ckeditor5-font/src/fontfamily */ "./node_modules/@ckeditor/ckeditor5-font/src/fontfamily.js");
/* harmony import */ var _ckeditor_ckeditor5_font_src_fontcolor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ckeditor/ckeditor5-font/src/fontcolor */ "./node_modules/@ckeditor/ckeditor5-font/src/fontcolor.js");
/* harmony import */ var _ckeditor_ckeditor5_font_src_fontbackgroundcolor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ckeditor/ckeditor5-font/src/fontbackgroundcolor */ "./node_modules/@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js");
/* harmony import */ var _ckeditor_ckeditor5_adapter_ckfinder_src_uploadadapter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter */ "./node_modules/@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter.js");
/* harmony import */ var _ckeditor_ckeditor5_autoformat_src_autoformat__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ckeditor/ckeditor5-autoformat/src/autoformat */ "./node_modules/@ckeditor/ckeditor5-autoformat/src/autoformat.js");
/* harmony import */ var _ckeditor_ckeditor5_basic_styles_src_bold__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ckeditor/ckeditor5-basic-styles/src/bold */ "./node_modules/@ckeditor/ckeditor5-basic-styles/src/bold.js");
/* harmony import */ var _ckeditor_ckeditor5_basic_styles_src_italic__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ckeditor/ckeditor5-basic-styles/src/italic */ "./node_modules/@ckeditor/ckeditor5-basic-styles/src/italic.js");
/* harmony import */ var _ckeditor_ckeditor5_basic_styles_src_strikethrough__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ckeditor/ckeditor5-basic-styles/src/strikethrough */ "./node_modules/@ckeditor/ckeditor5-basic-styles/src/strikethrough.js");
/* harmony import */ var _ckeditor_ckeditor5_basic_styles_src_underline__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ckeditor/ckeditor5-basic-styles/src/underline */ "./node_modules/@ckeditor/ckeditor5-basic-styles/src/underline.js");
/* harmony import */ var _ckeditor_ckeditor5_block_quote_src_blockquote__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ckeditor/ckeditor5-block-quote/src/blockquote */ "./node_modules/@ckeditor/ckeditor5-block-quote/src/blockquote.js");
/* harmony import */ var _ckeditor_ckeditor5_ckfinder_src_ckfinder__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ckeditor/ckeditor5-ckfinder/src/ckfinder */ "./node_modules/@ckeditor/ckeditor5-ckfinder/src/ckfinder.js");
/* harmony import */ var _ckeditor_ckeditor5_easy_image_src_easyimage__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ckeditor/ckeditor5-easy-image/src/easyimage */ "./node_modules/@ckeditor/ckeditor5-easy-image/src/easyimage.js");
/* harmony import */ var _ckeditor_ckeditor5_heading_src_heading__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ckeditor/ckeditor5-heading/src/heading */ "./node_modules/@ckeditor/ckeditor5-heading/src/heading.js");
/* harmony import */ var _ckeditor_ckeditor5_image_src_image__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ckeditor/ckeditor5-image/src/image */ "./node_modules/@ckeditor/ckeditor5-image/src/image.js");
/* harmony import */ var _ckeditor_ckeditor5_image_src_imagecaption__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @ckeditor/ckeditor5-image/src/imagecaption */ "./node_modules/@ckeditor/ckeditor5-image/src/imagecaption.js");
/* harmony import */ var _ckeditor_ckeditor5_image_src_imagestyle__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @ckeditor/ckeditor5-image/src/imagestyle */ "./node_modules/@ckeditor/ckeditor5-image/src/imagestyle.js");
/* harmony import */ var _ckeditor_ckeditor5_image_src_imagetoolbar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @ckeditor/ckeditor5-image/src/imagetoolbar */ "./node_modules/@ckeditor/ckeditor5-image/src/imagetoolbar.js");
/* harmony import */ var _ckeditor_ckeditor5_image_src_imageupload__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ckeditor/ckeditor5-image/src/imageupload */ "./node_modules/@ckeditor/ckeditor5-image/src/imageupload.js");
/* harmony import */ var _ckeditor_ckeditor5_indent_src_indent__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @ckeditor/ckeditor5-indent/src/indent */ "./node_modules/@ckeditor/ckeditor5-indent/src/indent.js");
/* harmony import */ var _ckeditor_ckeditor5_indent_src_indentblock__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @ckeditor/ckeditor5-indent/src/indentblock */ "./node_modules/@ckeditor/ckeditor5-indent/src/indentblock.js");
/* harmony import */ var _ckeditor5_link_src_template__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./ckeditor5-link/src/template */ "./assets/ckeditor5-link/src/template.js");
/* harmony import */ var _ckeditor_ckeditor5_link_src_link__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @ckeditor/ckeditor5-link/src/link */ "./node_modules/@ckeditor/ckeditor5-link/src/link.js");
/* harmony import */ var _ckeditor_ckeditor5_list_src_list__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @ckeditor/ckeditor5-list/src/list */ "./node_modules/@ckeditor/ckeditor5-list/src/list.js");
/* harmony import */ var _ckeditor_ckeditor5_media_embed_src_mediaembed__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @ckeditor/ckeditor5-media-embed/src/mediaembed */ "./node_modules/@ckeditor/ckeditor5-media-embed/src/mediaembed.js");
/* harmony import */ var _ckeditor_ckeditor5_paragraph_src_paragraph__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @ckeditor/ckeditor5-paragraph/src/paragraph */ "./node_modules/@ckeditor/ckeditor5-paragraph/src/paragraph.js");
/* harmony import */ var _ckeditor_ckeditor5_paste_from_office_src_pastefromoffice__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @ckeditor/ckeditor5-paste-from-office/src/pastefromoffice */ "./node_modules/@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js");
/* harmony import */ var _ckeditor_ckeditor5_table_src_table__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @ckeditor/ckeditor5-table/src/table */ "./node_modules/@ckeditor/ckeditor5-table/src/table.js");
/* harmony import */ var _ckeditor_ckeditor5_table_src_tabletoolbar__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @ckeditor/ckeditor5-table/src/tabletoolbar */ "./node_modules/@ckeditor/ckeditor5-table/src/tabletoolbar.js");
/* harmony import */ var _ckeditor_ckeditor5_cloud_services_src_cloudservices__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @ckeditor/ckeditor5-cloud-services/src/cloudservices */ "./node_modules/@ckeditor/ckeditor5-cloud-services/src/cloudservices.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }













function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




































var DecoupledEditor = /*#__PURE__*/function (_DecoupledEditorBase) {
  _inherits(DecoupledEditor, _DecoupledEditorBase);

  var _super = _createSuper(DecoupledEditor);

  function DecoupledEditor() {
    _classCallCheck(this, DecoupledEditor);

    return _super.apply(this, arguments);
  }

  return DecoupledEditor;
}(_ckeditor_ckeditor5_editor_decoupled_src_decouplededitor__WEBPACK_IMPORTED_MODULE_11__.default); // Plugins to include in the build.



DecoupledEditor.builtinPlugins = [_ckeditor_ckeditor5_essentials_src_essentials__WEBPACK_IMPORTED_MODULE_13__.default, _ckeditor_ckeditor5_alignment_src_alignment__WEBPACK_IMPORTED_MODULE_14__.default, _ckeditor_ckeditor5_font_src_fontsize__WEBPACK_IMPORTED_MODULE_15__.default, _ckeditor_ckeditor5_font_src_fontfamily__WEBPACK_IMPORTED_MODULE_16__.default, _ckeditor_ckeditor5_font_src_fontcolor__WEBPACK_IMPORTED_MODULE_17__.default, _ckeditor_ckeditor5_font_src_fontbackgroundcolor__WEBPACK_IMPORTED_MODULE_18__.default, _ckeditor_ckeditor5_adapter_ckfinder_src_uploadadapter__WEBPACK_IMPORTED_MODULE_19__.default, _ckeditor_ckeditor5_autoformat_src_autoformat__WEBPACK_IMPORTED_MODULE_20__.default, _ckeditor_ckeditor5_basic_styles_src_bold__WEBPACK_IMPORTED_MODULE_21__.default, _ckeditor_ckeditor5_basic_styles_src_italic__WEBPACK_IMPORTED_MODULE_22__.default, _ckeditor_ckeditor5_basic_styles_src_strikethrough__WEBPACK_IMPORTED_MODULE_23__.default, _ckeditor_ckeditor5_basic_styles_src_underline__WEBPACK_IMPORTED_MODULE_24__.default, _ckeditor_ckeditor5_block_quote_src_blockquote__WEBPACK_IMPORTED_MODULE_25__.default, _ckeditor_ckeditor5_ckfinder_src_ckfinder__WEBPACK_IMPORTED_MODULE_26__.default, _ckeditor_ckeditor5_easy_image_src_easyimage__WEBPACK_IMPORTED_MODULE_27__.default, _ckeditor_ckeditor5_heading_src_heading__WEBPACK_IMPORTED_MODULE_28__.default, _ckeditor_ckeditor5_image_src_image__WEBPACK_IMPORTED_MODULE_29__.default, _ckeditor_ckeditor5_image_src_imagecaption__WEBPACK_IMPORTED_MODULE_30__.default, _ckeditor_ckeditor5_image_src_imagestyle__WEBPACK_IMPORTED_MODULE_31__.default, _ckeditor_ckeditor5_image_src_imagetoolbar__WEBPACK_IMPORTED_MODULE_32__.default, _ckeditor_ckeditor5_image_src_imageupload__WEBPACK_IMPORTED_MODULE_33__.default, _ckeditor_ckeditor5_indent_src_indent__WEBPACK_IMPORTED_MODULE_34__.default, _ckeditor_ckeditor5_indent_src_indentblock__WEBPACK_IMPORTED_MODULE_35__.default, _ckeditor_ckeditor5_link_src_link__WEBPACK_IMPORTED_MODULE_37__.default, _ckeditor_ckeditor5_list_src_list__WEBPACK_IMPORTED_MODULE_38__.default, _ckeditor_ckeditor5_media_embed_src_mediaembed__WEBPACK_IMPORTED_MODULE_39__.default, _ckeditor_ckeditor5_paragraph_src_paragraph__WEBPACK_IMPORTED_MODULE_40__.default, _ckeditor_ckeditor5_paste_from_office_src_pastefromoffice__WEBPACK_IMPORTED_MODULE_41__.default, _ckeditor_ckeditor5_table_src_table__WEBPACK_IMPORTED_MODULE_42__.default, _ckeditor_ckeditor5_table_src_tabletoolbar__WEBPACK_IMPORTED_MODULE_43__.default, _ckeditor5_link_src_template__WEBPACK_IMPORTED_MODULE_36__.default, _ckeditor_ckeditor5_cloud_services_src_cloudservices__WEBPACK_IMPORTED_MODULE_44__.default]; // Editor configuration.

DecoupledEditor.defaultConfig = {
  toolbar: {
    items: ['template', '|', 'heading', '|', 'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor', '|', 'bold', 'italic', 'underline', 'strikethrough', '|', 'alignment', '|', 'numberedList', 'bulletedList', '|', 'indent', 'outdent', '|', 'blockquote', 'imageUpload', 'insertTable', 'mediaEmbed', '|', 'undo', 'redo']
  },
  image: {
    styles: ['full', 'alignLeft', 'alignRight'],
    toolbar: ['imageStyle:alignLeft', 'imageStyle:full', 'imageStyle:alignRight', '|', 'imageTextAlternative']
  },
  table: {
    contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
  },
  // This value must be kept in sync with the language defined in webpack.config.js.
  language: 'en'
};

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





__webpack_require__(/*! process */ "./node_modules/process/browser.js");

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

/***/ "./assets/ckeditor5-link/src/canceltemplatecommand.js":
/*!************************************************************!*\
  !*** ./assets/ckeditor5-link/src/canceltemplatecommand.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CancelTemplateCommand)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _ckeditor_ckeditor5_core_src_command__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ckeditor/ckeditor5-core/src/command */ "./node_modules/@ckeditor/ckeditor5-core/src/command.js");
/* harmony import */ var _ckeditor_ckeditor5_typing_src_utils_findattributerange__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ckeditor/ckeditor5-typing/src/utils/findattributerange */ "./node_modules/@ckeditor/ckeditor5-typing/src/utils/findattributerange.js");
/* harmony import */ var _ckeditor_ckeditor5_utils_src_first__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ckeditor/ckeditor5-utils/src/first */ "./node_modules/@ckeditor/ckeditor5-utils/src/first.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./utils */ "./assets/ckeditor5-link/src/utils.js");
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

/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module link/unlinkcommand
 */




/**
 * The unlink command. It is used by the {@link module:link/link~Link link plugin}.
 *
 * @extends module:core/command~Command
 */

var CancelTemplateCommand = /*#__PURE__*/function (_Command) {
  _inherits(CancelTemplateCommand, _Command);

  var _super = _createSuper(CancelTemplateCommand);

  function CancelTemplateCommand() {
    _classCallCheck(this, CancelTemplateCommand);

    return _super.apply(this, arguments);
  }

  _createClass(CancelTemplateCommand, [{
    key: "refresh",
    value:
    /**
     * @inheritDoc
     */
    function refresh() {
      var model = this.editor.model;
      var doc = model.document;
      var selectedElement = (0,_ckeditor_ckeditor5_utils_src_first__WEBPACK_IMPORTED_MODULE_18__.default)(doc.selection.getSelectedBlocks()); // A check for the `LinkImage` plugin. If the selection contains an image element, get values from the element.
      // Currently the selection reads attributes from text nodes only. See #7429 and #7465.

      if ((0,_utils__WEBPACK_IMPORTED_MODULE_19__.isImageAllowed)(selectedElement, model.schema)) {
        this.isEnabled = model.schema.checkAttribute(selectedElement, 'linkHref');
      } else {
        this.isEnabled = model.schema.checkAttributeInSelection(doc.selection, 'linkHref');
      }
    }
    /**
     * Executes the command.
     *
     * When the selection is collapsed, it removes the `linkHref` attribute from each node with the same `linkHref` attribute value.
     * When the selection is non-collapsed, it removes the `linkHref` attribute from each node in selected ranges.
     *
     * # Decorators
     *
     * If {@link module:link/link~LinkConfig#decorators `config.link.decorators`} is specified,
     * all configured decorators are removed together with the `linkHref` attribute.
     *
     * @fires execute
     */

  }, {
    key: "execute",
    value: function execute() {
      var editor = this.editor;
      var model = this.editor.model;
      var selection = model.document.selection;
      var linkCommand = editor.commands.get('link');
      model.change(function (writer) {
        // Get ranges to unlink.
        var rangesToUnlink = selection.isCollapsed ? [(0,_ckeditor_ckeditor5_typing_src_utils_findattributerange__WEBPACK_IMPORTED_MODULE_17__.default)(selection.getFirstPosition(), 'linkHref', selection.getAttribute('linkHref'), model)] : model.schema.getValidRanges(selection.getRanges(), 'linkHref'); // Remove `linkHref` attribute from specified ranges.

        var _iterator = _createForOfIteratorHelper(rangesToUnlink),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var range = _step.value;
            writer.removeAttribute('linkHref', range); // If there are registered custom attributes, then remove them during unlink.

            if (linkCommand) {
              var _iterator2 = _createForOfIteratorHelper(linkCommand.manualDecorators),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var manualDecorator = _step2.value;
                  writer.removeAttribute(manualDecorator.id, range);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });
    }
  }]);

  return CancelTemplateCommand;
}(_ckeditor_ckeditor5_core_src_command__WEBPACK_IMPORTED_MODULE_16__.default);



/***/ }),

/***/ "./assets/ckeditor5-link/src/template-command.js":
/*!*******************************************************!*\
  !*** ./assets/ckeditor5-link/src/template-command.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TemplateCommand)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _ckeditor_ckeditor5_core_src_command__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ckeditor/ckeditor5-core/src/command */ "./node_modules/@ckeditor/ckeditor5-core/src/command.js");
/* harmony import */ var _ckeditor_ckeditor5_typing_src_utils_findattributerange__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ckeditor/ckeditor5-typing/src/utils/findattributerange */ "./node_modules/@ckeditor/ckeditor5-typing/src/utils/findattributerange.js");
/* harmony import */ var _ckeditor_ckeditor5_utils_src___WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ckeditor/ckeditor5-utils/src/ */ "./node_modules/@ckeditor/ckeditor5-utils/src/index.js");
/* harmony import */ var _utils_automaticdecorators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./utils/automaticdecorators */ "./assets/ckeditor5-link/src/utils/automaticdecorators.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./utils */ "./assets/ckeditor5-link/src/utils.js");
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

/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module link/linkcommand
 */





/**
 * The link command. It is used by the {@link module:link/link~Link link feature}.
 *
 * @extends module:core/command~Command
 */

var TemplateCommand = /*#__PURE__*/function (_Command) {
  _inherits(TemplateCommand, _Command);

  var _super = _createSuper(TemplateCommand);

  /**
   * The value of the `'linkHref'` attribute if the start of the selection is located in a node with this attribute.
   *
   * @observable
   * @readonly
   * @member {Object|undefined} #value
   */
  function TemplateCommand(editor) {
    var _this;

    _classCallCheck(this, TemplateCommand);

    _this = _super.call(this, editor);
    /**
     * A collection of {@link module:link/utils~ManualDecorator manual decorators}
     * corresponding to the {@link module:link/link~LinkConfig#decorators decorator configuration}.
     *
     * You can consider it a model with states of manual decorators added to the currently selected link.
     *
     * @readonly
     * @type {module:utils/collection~Collection}
     */

    _this.manualDecorators = new _ckeditor_ckeditor5_utils_src___WEBPACK_IMPORTED_MODULE_21__.Collection();
    return _this;
  }
  /**
   * Synchronizes the state of {@link #manualDecorators} with the currently present elements in the model.
   */


  _createClass(TemplateCommand, [{
    key: "restoreManualDecoratorStates",
    value: function restoreManualDecoratorStates() {
      console.log(this.manualDecorators);

      var _iterator = _createForOfIteratorHelper(this.manualDecorators),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var manualDecorator = _step.value;
          manualDecorator.value = this._getDecoratorStateFromModel(manualDecorator.id);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    /**
     * @inheritDoc
     */

  }, {
    key: "refresh",
    value: function refresh() {
      var model = this.editor.model;
      var doc = model.document;
      var selectedElement = (0,_ckeditor_ckeditor5_utils_src___WEBPACK_IMPORTED_MODULE_21__.first)(doc.selection.getSelectedBlocks()); // A check for the `LinkImage` plugin. If the selection contains an element, get values from the element.
      // Currently the selection reads attributes from text nodes only. See #7429 and #7465.

      if ((0,_utils__WEBPACK_IMPORTED_MODULE_23__.isImageAllowed)(selectedElement, model.schema)) {
        this.value = selectedElement.getAttribute('templateVar');
        this.isEnabled = model.schema.checkAttribute(selectedElement, 'templateVar');
      } else {
        this.value = doc.selection.getAttribute('templateVar');
        this.isEnabled = model.schema.checkAttributeInSelection(doc.selection, 'templateVar');
      }

      var _iterator2 = _createForOfIteratorHelper(this.manualDecorators),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var manualDecorator = _step2.value;
          manualDecorator.value = this._getDecoratorStateFromModel(manualDecorator.id);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
    /**
     * Executes the command.
     *
     * When the selection is non-collapsed, the `linkHref` attribute will be applied to nodes inside the selection, but only to
     * those nodes where the `linkHref` attribute is allowed (disallowed nodes will be omitted).
     *
     * When the selection is collapsed and is not inside the text with the `linkHref` attribute, a
     * new {@link module:engine/model/text~Text text node} with the `linkHref` attribute will be inserted in place of the caret, but
     * only if such element is allowed in this place. The `_data` of the inserted text will equal the `href` parameter.
     * The selection will be updated to wrap the just inserted text node.
     *
     * When the selection is collapsed and inside the text with the `linkHref` attribute, the attribute value will be updated.
     *
     * # Decorators and model attribute management
     *
     * There is an optional argument to this command that applies or removes model
     * {@glink framework/guides/architecture/editing-engine#text-attributes text attributes} brought by
     * {@link module:link/utils~ManualDecorator manual link decorators}.
     *
     * Text attribute names in the model correspond to the entries in the {@link module:link/link~LinkConfig#decorators configuration}.
     * For every decorator configured, a model text attribute exists with the "link" prefix. For example, a `'linkMyDecorator'` attribute
     * corresponds to `'myDecorator'` in the configuration.
     *
     * To learn more about link decorators, check out the {@link module:link/link~LinkConfig#decorators `config.link.decorators`}
     * documentation.
     *
     * Here is how to manage decorator attributes with the link command:
     *
     *		const linkCommand = editor.commands.get( 'link' );
     *
     *		// Adding a new decorator attribute.
     *		linkCommand.execute( 'http://example.com', {
     *			linkIsExternal: true
     *		} );
     *
     *		// Removing a decorator attribute from the selection.
     *		linkCommand.execute( 'http://example.com', {
     *			linkIsExternal: false
     *		} );
     *
     *		// Adding multiple decorator attributes at the same time.
     *		linkCommand.execute( 'http://example.com', {
     *			linkIsExternal: true,
     *			linkIsDownloadable: true,
     *		} );
     *
     *		// Removing and adding decorator attributes at the same time.
     *		linkCommand.execute( 'http://example.com', {
     *			linkIsExternal: false,
     *			linkFoo: true,
     *			linkIsDownloadable: false,
     *		} );
     *
     * **Note**: If the decorator attribute name is not specified, its state remains untouched.
     *
     * **Note**: {@link module:link/unlinkcommand~UnlinkCommand#execute `Canceltemplatecommand#execute()`} removes all
     * decorator attributes.
     *
     * @fires execute
     * @param {Object} templateVar Template destination.
     * @param {Object} [manualDecoratorIds={}] The information about manual decorator attributes to be applied or removed upon execution.
     */

  }, {
    key: "execute",
    value: function execute(templateVar) {
      var _this2 = this;

      var manualDecoratorIds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      console.log(templateVar);
      console.log(manualDecoratorIds);
      var model = this.editor.model;
      var selection = model.document.selection; // Stores information about manual decorators to turn them on/off when command is applied.

      var truthyManualDecorators = [];
      var falsyManualDecorators = [];

      for (var name in manualDecoratorIds) {
        if (manualDecoratorIds[name]) {
          truthyManualDecorators.push(name);
        } else {
          falsyManualDecorators.push(name);
        }
      }

      model.change(function (writer) {
        // If selection is collapsed then update selected link or insert new one at the place of caret.
        if (selection.isCollapsed) {
          var position = selection.getFirstPosition(); // When selection is inside text with `linkHref` attribute.

          if (selection.hasAttribute('templateVar')) {
            // Then update `linkHref` value.
            var varRange = (0,_ckeditor_ckeditor5_typing_src_utils_findattributerange__WEBPACK_IMPORTED_MODULE_20__.default)(position, 'templateVar', selection.getAttribute('templateVar'), model);
            writer.setAttribute('templateVar', templateVar.id, varRange);
            model.schema.setAttributeProperties('templateVar', {
              type: templateVar.type
            });
            truthyManualDecorators.forEach(function (item) {
              writer.setAttribute(item, true, varRange);
            });
            falsyManualDecorators.forEach(function (item) {
              writer.removeAttribute(item, varRange);
            }); // Put the selection at the end of the updated link.

            writer.setSelection(writer.createPositionAfter(varRange.end.nodeBefore));
          } // If not then insert text node with `linkHref` attribute in place of caret.
          // However, since selection is collapsed, attribute value will be used as data for text node.
          // So, if `templateVar.label` is empty, do not create text node.
          else if (templateVar.id !== '') {
              var attributes = (0,_ckeditor_ckeditor5_utils_src___WEBPACK_IMPORTED_MODULE_21__.toMap)(selection.getAttributes());
              attributes.set('templateVar', templateVar.id);
              model.schema.setAttributeProperties('templateVar', {
                type: templateVar.type
              });
              truthyManualDecorators.forEach(function (item) {
                attributes.set(item, true);
              });

              var _model$insertContent = model.insertContent(writer.createText(templateVar.id, attributes), position),
                  positionAfter = _model$insertContent.end; // Put the selection at the end of the inserted link.
              // Using end of range returned from insertContent in case nodes with the same attributes got merged.


              writer.setSelection(positionAfter);
            } // Remove the `linkHref` attribute and all link decorators from the selection.
          // It stops adding a new content into the link element.


          ['templateVar'].concat(truthyManualDecorators, falsyManualDecorators).forEach(function (item) {
            writer.removeSelectionAttribute(item);
          });
        } else {
          // If selection has non-collapsed ranges, we change attribute on nodes inside those ranges
          // omitting nodes where the `linkHref` attribute is disallowed.
          var ranges = model.schema.getValidRanges(selection.getRanges(), 'templateVar'); // But for the first, check whether the `linkHref` attribute is allowed on selected blocks (e.g. the "image" element).

          var allowedRanges = [];

          var _iterator3 = _createForOfIteratorHelper(selection.getSelectedBlocks()),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var element = _step3.value;

              if (model.schema.checkAttribute(element, 'templateVar')) {
                allowedRanges.push(writer.createRangeOn(element));
              }
            } // Ranges that accept the `linkHref` attribute. Since we will iterate over `allowedRanges`, let's clone it.

          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          var rangesToUpdate = allowedRanges.slice(); // For all selection ranges we want to check whether given range is inside an element that accepts the `linkHref` attribute.
          // If so, we don't want to propagate applying the attribute to its children.

          var _iterator4 = _createForOfIteratorHelper(ranges),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var range = _step4.value;

              if (_this2._isRangeToUpdate(range, allowedRanges)) {
                rangesToUpdate.push(range);
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          var _iterator5 = _createForOfIteratorHelper(rangesToUpdate),
              _step5;

          try {
            var _loop = function _loop() {
              var range = _step5.value;
              writer.setAttribute('templateVar', templateVar.id, range);
              model.schema.setAttributeProperties('templateVar', {
                type: templateVar.type
              });
              truthyManualDecorators.forEach(function (item) {
                writer.setAttribute(item, true, range);
              });
              falsyManualDecorators.forEach(function (item) {
                writer.removeAttribute(item, range);
              });
            };

            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              _loop();
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        }
      });
    }
    /**
     * Provides information whether a decorator with a given name is present in the currently processed selection.
     *
     * @private
     * @param {String} decoratorName The name of the manual decorator used in the model
     * @returns {Boolean} The information whether a given decorator is currently present in the selection.
     */

  }, {
    key: "_getDecoratorStateFromModel",
    value: function _getDecoratorStateFromModel(decoratorName) {
      var model = this.editor.model;
      var doc = model.document;
      var selectedElement = (0,_ckeditor_ckeditor5_utils_src___WEBPACK_IMPORTED_MODULE_21__.first)(doc.selection.getSelectedBlocks()); // A check for the `LinkImage` plugin. If the selection contains an element, get values from the element.
      // Currently the selection reads attributes from text nodes only. See #7429 and #7465.

      if ((0,_utils__WEBPACK_IMPORTED_MODULE_23__.isImageAllowed)(selectedElement, model.schema)) {
        return selectedElement.getAttribute(decoratorName);
      }

      return doc.selection.getAttribute(decoratorName);
    }
    /**
     * Checks whether specified `range` is inside an element that accepts the `linkHref` attribute.
     *
     * @private
     * @param {module:engine/view/range~Range} range A range to check.
     * @param {Array.<module:engine/view/range~Range>} allowedRanges An array of ranges created on elements where the attribute is accepted.
     * @returns {Boolean}
     */

  }, {
    key: "_isRangeToUpdate",
    value: function _isRangeToUpdate(range, allowedRanges) {
      var _iterator6 = _createForOfIteratorHelper(allowedRanges),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var allowedRange = _step6.value;

          // A range is inside an element that will have the `linkHref` attribute. Do not modify its nodes.
          if (allowedRange.containsRange(range)) {
            return false;
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      return true;
    }
  }]);

  return TemplateCommand;
}(_ckeditor_ckeditor5_core_src_command__WEBPACK_IMPORTED_MODULE_19__.default);



/***/ }),

/***/ "./assets/ckeditor5-link/src/template-editing.js":
/*!*******************************************************!*\
  !*** ./assets/ckeditor5-link/src/template-editing.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TemplateEditing)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.anchor.js */ "./node_modules/core-js/modules/es.string.anchor.js");
/* harmony import */ var core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _ckeditor_ckeditor5_core_src_plugin__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ckeditor/ckeditor5-core/src/plugin */ "./node_modules/@ckeditor/ckeditor5-core/src/plugin.js");
/* harmony import */ var _ckeditor_ckeditor5_engine_src_view_observer_mouseobserver__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ckeditor/ckeditor5-engine/src/view/observer/mouseobserver */ "./node_modules/@ckeditor/ckeditor5-engine/src/view/observer/mouseobserver.js");
/* harmony import */ var _ckeditor_ckeditor5_typing_src__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ckeditor/ckeditor5-typing/src */ "./node_modules/@ckeditor/ckeditor5-typing/src/index.js");
/* harmony import */ var _ckeditor_ckeditor5_clipboard_src_clipboardpipeline__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ckeditor/ckeditor5-clipboard/src/clipboardpipeline */ "./node_modules/@ckeditor/ckeditor5-clipboard/src/clipboardpipeline.js");
/* harmony import */ var _ckeditor_ckeditor5_utils_src_keyboard__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ckeditor/ckeditor5-utils/src/keyboard */ "./node_modules/@ckeditor/ckeditor5-utils/src/keyboard.js");
/* harmony import */ var _template_command_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./template-command.js */ "./assets/ckeditor5-link/src/template-command.js");
/* harmony import */ var _canceltemplatecommand__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./canceltemplatecommand */ "./assets/ckeditor5-link/src/canceltemplatecommand.js");
/* harmony import */ var _utils_manualdecorator__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./utils/manualdecorator */ "./assets/ckeditor5-link/src/utils/manualdecorator.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./utils */ "./assets/ckeditor5-link/src/utils.js");
/* harmony import */ var _theme_template_css__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../theme/template.css */ "./assets/ckeditor5-link/theme/template.css");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





















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

/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module link/linkediting
 */










var HIGHLIGHT_SELECTED_CLASS = 'ck-template_selected';
var DECORATOR_MANUAL = 'manual';
/**
 * The link engine feature.
 *
 * It introduces the `templateVar="url"` attribute in the model which renders to the view as a `<a href="url">` element
 * as well as `'template'` and `'unlink'` commands.
 *
 * @extends module:core/plugin~Plugin
 */

var TemplateEditing = /*#__PURE__*/function (_Plugin) {
  _inherits(TemplateEditing, _Plugin);

  var _super = _createSuper(TemplateEditing);

  /**
   * @inheritDoc
   */
  function TemplateEditing(editor) {
    var _this;

    _classCallCheck(this, TemplateEditing);

    _this = _super.call(this, editor);
    editor.config.define('template', {
      addTargetToExternalLinks: false
    });
    return _this;
  }
  /**
   * @inheritDoc
   */


  _createClass(TemplateEditing, [{
    key: "init",
    value: function init() {
      var editor = this.editor; // Allow link attribute on all inline nodes.

      editor.model.schema.extend('$text', {
        allowAttributes: 'templateVar'
      });
      editor.conversion["for"]('dataDowncast').attributeToElement({
        model: 'templateVar',
        view: _utils__WEBPACK_IMPORTED_MODULE_27__.createTemplateElement
      });
      editor.conversion["for"]('editingDowncast').attributeToElement({
        model: 'templateVar',
        view: function view(id, conversionApi) {
          console.log(id);
          return (0,_utils__WEBPACK_IMPORTED_MODULE_27__.createTemplateElement)(id, conversionApi);
        }
      });
      editor.conversion["for"]('upcast').elementToAttribute({
        view: {
          name: 'span',
          attributes: {
            id: true
          }
        },
        model: {
          key: 'templateVar',
          value: function value(viewElement) {
            return viewElement.getAttribute('id');
          }
        }
      }); // Create linking commands.

      editor.commands.add('template', new _template_command_js__WEBPACK_IMPORTED_MODULE_24__.default(editor));
      editor.commands.add('canceltemplate', new _canceltemplatecommand__WEBPACK_IMPORTED_MODULE_25__.default(editor)); // const linkDecorators = getLocalizedDecorators( editor.t, normalizeDecorators( editor.config.get( 'link.decorators' ) ) );
      //
      //
      // this._enableManualDecorators( linkDecorators.filter( item => item.mode === DECORATOR_MANUAL ) );
      // Enable two-step caret movement for `templateVar` attribute.

      var twoStepCaretMovementPlugin = editor.plugins.get(_ckeditor_ckeditor5_typing_src__WEBPACK_IMPORTED_MODULE_21__.TwoStepCaretMovement);
      twoStepCaretMovementPlugin.registerAttribute('templateVar'); // Setup highlight over selected link.

      (0,_ckeditor_ckeditor5_typing_src__WEBPACK_IMPORTED_MODULE_21__.inlineHighlight)(editor, 'templateVar', 'span', HIGHLIGHT_SELECTED_CLASS); // Change the attributes of the selection in certain situations after the link was inserted into the document.

      this._enableInsertContentSelectionAttributesFixer(); // Handle a click at the beginning/end of a link element.


      this._enableClickingAfterLink(); // Handle typing over the link.


      this._enableTypingOverLink(); // Handle removing the content after the link element.


      this._handleDeleteContentAfterLink();
    }
    /**
     * Processes an array of configured {@link module:link/link~LinkDecoratorManualDefinition manual decorators},
     * transforms them into {@link module:link/utils~ManualDecorator} instances and stores them in the
     * {@link module:link/linkcommand~TemplateCommand#manualDecorators} collection (a model for manual decorators state).
     *
     * Also registers an {@link module:engine/conversion/downcasthelpers~DowncastHelpers#attributeToElement attribute-to-element}
     * converter for each manual decorator and extends the {@link module:engine/model/schema~Schema model's schema}
     * with adequate model attributes.
     *
     * @private
     * @param {Array.<module:link/link~LinkDecoratorManualDefinition>} manualDecoratorDefinitions
     */

  }, {
    key: "_enableManualDecorators",
    value: function _enableManualDecorators(manualDecoratorDefinitions) {
      if (!manualDecoratorDefinitions.length) {
        return;
      }

      var editor = this.editor;
      var command = editor.commands.get('template');
      var manualDecorators = command.manualDecorators;
      manualDecoratorDefinitions.forEach(function (decorator) {
        editor.model.schema.extend('$text', {
          allowAttributes: decorator.id
        }); // Keeps reference to manual decorator to decode its name to attributes during downcast.

        manualDecorators.add(new _utils_manualdecorator__WEBPACK_IMPORTED_MODULE_26__.default(decorator));
        editor.conversion["for"]('downcast').attributeToElement({
          model: decorator.id,
          view: function view(manualDecoratorName, _ref) {
            var writer = _ref.writer;

            if (manualDecoratorName) {
              var attributes = manualDecorators.get(decorator.id).attributes;
              var element = writer.createAttributeElement('span', attributes, {
                priority: 5
              });
              writer.setCustomProperty('template', true, element);
              console.log('id');
              return element;
            }
          }
        });
        editor.conversion["for"]('upcast').elementToAttribute({
          view: {
            name: 'span',
            attributes: manualDecorators.get(decorator.id).attributes
          },
          model: {
            key: decorator.id
          }
        });
      });
    }
    /**
     * Starts listening to {@link module:engine/model/model~Model#event:insertContent} and corrects the model
     * selection attributes if the selection is at the end of a link after inserting the content.
     *
     * The purpose of this action is to improve the overall UX because the user is no longer "trapped" by the
     * `templateVar` attribute of the selection and they can type a "clean" (`templateVar`–less) text right away.
     *
     * See https://github.com/ckeditor/ckeditor5/issues/6053.
     *
     * @private
     */

  }, {
    key: "_enableInsertContentSelectionAttributesFixer",
    value: function _enableInsertContentSelectionAttributesFixer() {
      var editor = this.editor;
      var model = editor.model;
      var selection = model.document.selection;
      var linkCommand = editor.commands.get('template');
      this.listenTo(model, 'insertContent', function () {
        var nodeBefore = selection.anchor.nodeBefore;
        var nodeAfter = selection.anchor.nodeAfter; // NOTE: ↰ and ↱ represent the gravity of the selection.
        // The only truly valid case is:
        //
        //		                                 ↰
        //		...<$text templateVar="foo">INSERTED[]</$text>
        //
        // If the selection is not "trapped" by the `templateVar` attribute after inserting, there's nothing
        // to fix there.

        if (!selection.hasAttribute('templateVar')) {
          return;
        } // Filter out the following case where a link with the same href (e.g. <a href="foo">INSERTED</a>) is inserted
        // in the middle of an existing link:
        //
        // Before insertion:
        //		                       ↰
        //		<$text templateVar="foo">l[]ink</$text>
        //
        // Expected after insertion:
        //		                               ↰
        //		<$text templateVar="foo">lINSERTED[]ink</$text>
        //


        if (!nodeBefore) {
          return;
        } // Filter out the following case where the selection has the "templateVar" attribute because the
        // gravity is overridden and some text with another attribute (e.g. <b>INSERTED</b>) is inserted:
        //
        // Before insertion:
        //
        //		                       ↱
        //		<$text templateVar="foo">[]link</$text>
        //
        // Expected after insertion:
        //
        //		                                                          ↱
        //		<$text bold="true">INSERTED</$text><$text templateVar="foo">[]link</$text>
        //


        if (!nodeBefore.hasAttribute('templateVar')) {
          return;
        } // Filter out the following case where a link is a inserted in the middle (or before) another link
        // (different URLs, so they will not merge). In this (let's say weird) case, we can leave the selection
        // attributes as they are because the user will end up writing in one link or another anyway.
        //
        // Before insertion:
        //
        //		                       ↰
        //		<$text templateVar="foo">l[]ink</$text>
        //
        // Expected after insertion:
        //
        //		                                                             ↰
        //		<$text templateVar="foo">l</$text><$text templateVar="bar">INSERTED[]</$text><$text templateVar="foo">ink</$text>
        //


        if (nodeAfter && nodeAfter.hasAttribute('templateVar')) {
          return;
        }

        model.change(function (writer) {
          removeLinkAttributesFromSelection(writer, linkCommand.manualDecorators);
        });
      }, {
        priority: 'low'
      });
    }
    /**
     * Starts listening to {@link module:engine/view/document~Document#event:mousedown} and
     * {@link module:engine/view/document~Document#event:selectionChange} and puts the selection before/after a link node
     * if clicked at the beginning/ending of the link.
     *
     * The purpose of this action is to allow typing around the link node directly after a click.
     *
     * See https://github.com/ckeditor/ckeditor5/issues/1016.
     *
     * @private
     */

  }, {
    key: "_enableClickingAfterLink",
    value: function _enableClickingAfterLink() {
      var editor = this.editor;
      var linkCommand = editor.commands.get('template');
      editor.editing.view.addObserver(_ckeditor_ckeditor5_engine_src_view_observer_mouseobserver__WEBPACK_IMPORTED_MODULE_20__.default);
      var clicked = false; // Detect the click.

      this.listenTo(editor.editing.view.document, 'mousedown', function () {
        clicked = true;
      }); // When the selection has changed...

      this.listenTo(editor.editing.view.document, 'selectionChange', function () {
        if (!clicked) {
          return;
        } // ...and it was caused by the click...


        clicked = false;
        var selection = editor.model.document.selection; // ...and no text is selected...

        if (!selection.isCollapsed) {
          return;
        } // ...and clicked text is the link...


        if (!selection.hasAttribute('templateVar')) {
          return;
        }

        var position = selection.getFirstPosition();
        var linkRange = (0,_ckeditor_ckeditor5_typing_src__WEBPACK_IMPORTED_MODULE_21__.findAttributeRange)(position, 'templateVar', selection.getAttribute('templateVar'), editor.model); // ...check whether clicked start/end boundary of the link.
        // If so, remove the `templateVar` attribute.

        if (position.isTouching(linkRange.start) || position.isTouching(linkRange.end)) {
          editor.model.change(function (writer) {
            removeLinkAttributesFromSelection(writer, linkCommand.manualDecorators);
          });
        }
      });
    }
    /**
     * Starts listening to {@link module:engine/model/model~Model#deleteContent} and {@link module:engine/model/model~Model#insertContent}
     * and checks whether typing over the link. If so, attributes of removed text are preserved and applied to the inserted text.
     *
     * The purpose of this action is to allow modifying a text without loosing the `templateVar` attribute (and other).
     *
     * See https://github.com/ckeditor/ckeditor5/issues/4762.
     *
     * @private
     */

  }, {
    key: "_enableTypingOverLink",
    value: function _enableTypingOverLink() {
      var editor = this.editor;
      var view = editor.editing.view; // Selection attributes when started typing over the link.

      var selectionAttributes; // Whether pressed `Backspace` or `Delete`. If so, attributes should not be preserved.

      var deletedContent; // Detect pressing `Backspace` / `Delete`.

      this.listenTo(view.document, 'delete', function () {
        deletedContent = true;
      }, {
        priority: 'high'
      }); // Listening to `model#deleteContent` allows detecting whether selected content was a link.
      // If so, before removing the element, we will copy its attributes.

      this.listenTo(editor.model, 'deleteContent', function () {
        var selection = editor.model.document.selection; // Copy attributes only if anything is selected.

        if (selection.isCollapsed) {
          return;
        } // When the content was deleted, do not preserve attributes.


        if (deletedContent) {
          deletedContent = false;
          return;
        } // Enabled only when typing.


        if (!isTyping(editor)) {
          return;
        }

        if (shouldCopyAttributes(editor.model)) {
          selectionAttributes = selection.getAttributes();
        }
      }, {
        priority: 'high'
      }); // Listening to `model#insertContent` allows detecting the content insertion.
      // We want to apply attributes that were removed while typing over the link.

      this.listenTo(editor.model, 'insertContent', function (evt, _ref2) {
        var _ref3 = _slicedToArray(_ref2, 1),
            element = _ref3[0];

        deletedContent = false; // Enabled only when typing.

        if (!isTyping(editor)) {
          return;
        }

        if (!selectionAttributes) {
          return;
        }

        editor.model.change(function (writer) {
          var _iterator = _createForOfIteratorHelper(selectionAttributes),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _step$value = _slicedToArray(_step.value, 2),
                  attribute = _step$value[0],
                  value = _step$value[1];

              writer.setAttribute(attribute, value, element);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        });
        selectionAttributes = null;
      }, {
        priority: 'high'
      });
    }
    /**
     * Starts listening to {@link module:engine/model/model~Model#deleteContent} and checks whether
     * removing a content right after the "templateVar" attribute.
     *
     * If so, the selection should not preserve the `templateVar` attribute. However, if
     * the {@link module:typing/twostepcaretmovement~TwoStepCaretMovement} plugin is active and
     * the selection has the "templateVar" attribute due to overriden gravity (at the end), the `templateVar` attribute should stay untouched.
     *
     * The purpose of this action is to allow removing the link text and keep the selection outside the link.
     *
     * See https://github.com/ckeditor/ckeditor5/issues/7521.
     *
     * @private
     */

  }, {
    key: "_handleDeleteContentAfterLink",
    value: function _handleDeleteContentAfterLink() {
      var editor = this.editor;
      var model = editor.model;
      var selection = model.document.selection;
      var view = editor.editing.view;
      var linkCommand = editor.commands.get('template'); // A flag whether attributes `templateVar` attribute should be preserved.

      var shouldPreserveAttributes = false; // A flag whether the `Backspace` key was pressed.

      var hasBackspacePressed = false; // Detect pressing `Backspace`.

      this.listenTo(view.document, 'delete', function (evt, data) {
        hasBackspacePressed = data.domEvent.keyCode === _ckeditor_ckeditor5_utils_src_keyboard__WEBPACK_IMPORTED_MODULE_23__.keyCodes.backspace;
      }, {
        priority: 'high'
      }); // Before removing the content, check whether the selection is inside a link or at the end of link but with 2-SCM enabled.
      // If so, we want to preserve link attributes.

      this.listenTo(model, 'deleteContent', function () {
        // Reset the state.
        shouldPreserveAttributes = false;
        var position = selection.getFirstPosition();
        var templateVar = selection.getAttribute('templateVar');

        if (!templateVar) {
          return;
        }

        var linkRange = (0,_ckeditor_ckeditor5_typing_src__WEBPACK_IMPORTED_MODULE_21__.findAttributeRange)(position, 'templateVar', templateVar, model); // Preserve `templateVar` attribute if the selection is in the middle of the link or
        // the selection is at the end of the link and 2-SCM is activated.

        shouldPreserveAttributes = linkRange.containsPosition(position) || linkRange.end.isEqual(position);
      }, {
        priority: 'high'
      }); // After removing the content, check whether the current selection should preserve the `templateVar` attribute.

      this.listenTo(model, 'deleteContent', function () {
        // If didn't press `Backspace`.
        if (!hasBackspacePressed) {
          return;
        }

        hasBackspacePressed = false; // Disable the mechanism if inside a link (`<$text url="foo">F[]oo</$text>` or <$text url="foo">Foo[]</$text>`).

        if (shouldPreserveAttributes) {
          return;
        } // Use `model.enqueueChange()` in order to execute the callback at the end of the changes process.


        editor.model.enqueueChange(function (writer) {
          removeLinkAttributesFromSelection(writer, linkCommand.manualDecorators);
        });
      }, {
        priority: 'low'
      });
    }
  }], [{
    key: "pluginName",
    get:
    /**
     * @inheritDoc
     */
    function get() {
      return 'TextTemplateEditing';
    }
    /**
     * @inheritDoc
     */

  }, {
    key: "requires",
    get: function get() {
      // Clipboard is required for handling cut and paste events while typing over the link.
      return [_ckeditor_ckeditor5_typing_src__WEBPACK_IMPORTED_MODULE_21__.TwoStepCaretMovement, _ckeditor_ckeditor5_typing_src__WEBPACK_IMPORTED_MODULE_21__.Input, _ckeditor_ckeditor5_clipboard_src_clipboardpipeline__WEBPACK_IMPORTED_MODULE_22__.default];
    }
  }]);

  return TemplateEditing;
}(_ckeditor_ckeditor5_core_src_plugin__WEBPACK_IMPORTED_MODULE_19__.default); // Make the selection free of link-related model attributes.
// All link-related model attributes start with "link". That includes not only "templateVar"
// but also all decorator attributes (they have dynamic names).
//
// @param {module:engine/model/writer~Writer} writer
// @param {module:utils/collection~Collection} manualDecorators




function removeLinkAttributesFromSelection(writer, manualDecorators) {
  writer.removeSelectionAttribute('templateVar');

  var _iterator2 = _createForOfIteratorHelper(manualDecorators),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var decorator = _step2.value;
      writer.removeSelectionAttribute(decorator.id);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
} // Checks whether selection's attributes should be copied to the new inserted text.
//
// @param {module:engine/model/model~Model} model
// @returns {Boolean}


function shouldCopyAttributes(model) {
  var selection = model.document.selection;
  var firstPosition = selection.getFirstPosition();
  var lastPosition = selection.getLastPosition();
  var nodeAtFirstPosition = firstPosition.nodeAfter; // The text link node does not exist...

  if (!nodeAtFirstPosition) {
    return false;
  } // ...or it isn't the text node...


  if (!nodeAtFirstPosition.is('$text')) {
    return false;
  } // ...or isn't the link.


  if (!nodeAtFirstPosition.hasAttribute('templateVar')) {
    return false;
  } // `textNode` = the position is inside the link element.
  // `nodeBefore` = the position is at the end of the link element.


  var nodeAtLastPosition = lastPosition.textNode || lastPosition.nodeBefore; // If both references the same node selection contains a single text node.

  if (nodeAtFirstPosition === nodeAtLastPosition) {
    return true;
  } // If nodes are not equal, maybe the link nodes has defined additional attributes inside.
  // First, we need to find the entire link range.


  var linkRange = (0,_ckeditor_ckeditor5_typing_src__WEBPACK_IMPORTED_MODULE_21__.findAttributeRange)(firstPosition, 'templateVar', nodeAtFirstPosition.getAttribute('templateVar'), model); // Then we can check whether selected range is inside the found link range. If so, attributes should be preserved.

  return linkRange.containsRange(model.createRange(firstPosition, lastPosition), true);
} // Checks whether provided changes were caused by typing.
//
// @params {module:core/editor/editor~Editor} editor
// @returns {Boolean}


function isTyping(editor) {
  var input = editor.plugins.get('Input');
  return input.isInput(editor.model.change(function (writer) {
    return writer.batch;
  }));
}

/***/ }),

/***/ "./assets/ckeditor5-link/src/template-ui.js":
/*!**************************************************!*\
  !*** ./assets/ckeditor5-link/src/template-ui.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TemplateUi)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.reflect.get.js */ "./node_modules/core-js/modules/es.reflect.get.js");
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _ckeditor_ckeditor5_core_src_plugin__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ckeditor/ckeditor5-core/src/plugin */ "./node_modules/@ckeditor/ckeditor5-core/src/plugin.js");
/* harmony import */ var _ckeditor_ckeditor5_engine_src_view_observer_clickobserver__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ckeditor/ckeditor5-engine/src/view/observer/clickobserver */ "./node_modules/@ckeditor/ckeditor5-engine/src/view/observer/clickobserver.js");
/* harmony import */ var _ckeditor_ckeditor5_ui_src__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ckeditor/ckeditor5-ui/src */ "./node_modules/@ckeditor/ckeditor5-ui/src/index.js");
/* harmony import */ var _ui_template_form_view__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ui/template-form-view */ "./assets/ckeditor5-link/src/ui/template-form-view.js");
/* harmony import */ var _ui_template_actions_view__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ui/template-actions-view */ "./assets/ckeditor5-link/src/ui/template-actions-view.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./utils */ "./assets/ckeditor5-link/src/utils.js");
/* harmony import */ var _theme_icons_temlateIcon_svg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../theme/icons/temlateIcon.svg */ "./assets/ckeditor5-link/theme/icons/temlateIcon.svg");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module link/linkui
 */







var VISUAL_SELECTION_MARKER_NAME = 'template-ui';
/**
 * The link UI plugin. It introduces the `'template'` and `'canceltemplate'` buttons and support for the <kbd>Ctrl+K</kbd> keystroke.
 *
 * It uses the
 * {@link module:ui/panel/balloon/contextualballoon~ContextualBalloon contextual balloon plugin}.
 *
 * @extends module:core/plugin~Plugin
 */

var TemplateUi = /*#__PURE__*/function (_Plugin) {
  _inherits(TemplateUi, _Plugin);

  var _super = _createSuper(TemplateUi);

  function TemplateUi() {
    _classCallCheck(this, TemplateUi);

    return _super.apply(this, arguments);
  }

  _createClass(TemplateUi, [{
    key: "init",
    value:
    /**
     * @inheritDoc
     */
    function init() {
      var editor = this.editor;
      editor.editing.view.addObserver(_ckeditor_ckeditor5_engine_src_view_observer_clickobserver__WEBPACK_IMPORTED_MODULE_19__.default);
      /**
       * The actions view displayed inside of the balloon.
       *
       * @member {module:link/ui/linkactionsview~TemplateActionsView}
       */

      this.actionsView = this._createActionsView();
      /**
       * The form view displayed inside the balloon.
       *
       * @member {module:link/ui/linkformview~LinkFormView}
       */

      this.formView = this._createFormView();
      /**
       * The contextual balloon plugin instance.
       *
       * @private
       * @member {module:ui/panel/balloon/contextualballoon~ContextualBalloon}
       */

      this._balloon = editor.plugins.get(_ckeditor_ckeditor5_ui_src__WEBPACK_IMPORTED_MODULE_20__.ContextualBalloon); // Create toolbar buttons.

      this._createToolbarLinkButton(); // Attach lifecycle actions to the the balloon.


      this._enableUserBalloonInteractions(); // Renders a fake visual selection marker on an expanded selection.


      editor.conversion["for"]('editingDowncast').markerToHighlight({
        model: VISUAL_SELECTION_MARKER_NAME,
        view: {
          classes: ['ck-fake-link-selection']
        }
      }); // Renders a fake visual selection marker on a collapsed selection.

      editor.conversion["for"]('editingDowncast').markerToElement({
        model: VISUAL_SELECTION_MARKER_NAME,
        view: {
          name: 'span',
          classes: ['ck-fake-link-selection', 'ck-fake-link-selection_collapsed']
        }
      });
    }
    /**
     * @inheritDoc
     */

  }, {
    key: "destroy",
    value: function destroy() {
      _get(_getPrototypeOf(TemplateUi.prototype), "destroy", this).call(this); // Destroy created UI components as they are not automatically destroyed (see ckeditor5#1341).


      this.formView.destroy();
    }
    /**
     * Creates the {@link module:link/ui/linkactionsview~TemplateActionsView} instance.
     *
     * @private
     * @returns {module:link/ui/linkactionsview~TemplateActionsView} The link actions view instance.
     */

  }, {
    key: "_createActionsView",
    value: function _createActionsView() {
      var _this = this;

      var editor = this.editor;
      var actionsView = new _ui_template_actions_view__WEBPACK_IMPORTED_MODULE_22__.default(editor.locale);
      var templateCommand = editor.commands.get('template');
      var cancelTemplateCommand = editor.commands.get('canceltemplate');
      actionsView.bind('href').to(templateCommand, 'value');
      actionsView.editButtonView.bind('isEnabled').to(templateCommand);
      actionsView.unlinkButtonView.bind('isEnabled').to(cancelTemplateCommand); // Execute unlink command after clicking on the "Edit" button.

      this.listenTo(actionsView, 'edit', function () {
        _this._addFormView();
      }); // Execute unlink command after clicking on the "Unlink" button.

      this.listenTo(actionsView, 'canceltemplate', function () {
        editor.execute('canceltemplate');

        _this._hideUI();
      }); // Close the panel on esc key press when the **actions have focus**.

      actionsView.keystrokes.set('Esc', function (data, cancel) {
        _this._hideUI();

        cancel();
      }); // Open the form view on Ctrl+K when the **actions have focus**..

      actionsView.keystrokes.set(_utils__WEBPACK_IMPORTED_MODULE_23__.LINK_KEYSTROKE, function (data, cancel) {
        _this._addFormView();

        cancel();
      });
      return actionsView;
    }
    /**
     * Creates the {@link module:link/ui/linkformview~LinkFormView} instance.
     *
     * @private
     * @returns {module:link/ui/linkformview~LinkFormView} The link form view instance.
     */

  }, {
    key: "_createFormView",
    value: function _createFormView() {
      var _this2 = this;

      var editor = this.editor;
      var templateCommand = editor.commands.get('template');
      var formView = new _ui_template_form_view__WEBPACK_IMPORTED_MODULE_21__.default(editor.locale, templateCommand);
      formView.labelInputView.fieldView.bind('value').to(templateCommand, 'value'); // Form elements should be read-only when corresponding commands are disabled.

      formView.labelInputView.bind('isReadOnly').to(templateCommand, 'isEnabled', function (value) {
        return !value;
      });
      formView.saveButtonView.bind('isEnabled').to(templateCommand); // Execute link command after clicking the "Save" button.

      this.listenTo(formView, 'submit', function () {
        var label = formView.typeInputView.fieldView.buttonView.label;
        var templateVar = {
          id: formView.labelInputView.fieldView.element.value,
          type: label
        }; // const { value } = formView.labelInputView.fieldView.element;
        // const parsedUrl = addLinkProtocolIfApplicable( value, defaultProtocol );

        editor.execute('template', templateVar, formView.getDecoratorSwitchesState());

        _this2._closeFormView();
      }); // Hide the panel after clicking the "Cancel" button.

      this.listenTo(formView, 'cancel', function () {
        _this2._closeFormView();
      }); // Close the panel on esc key press when the **form has focus**.

      formView.keystrokes.set('Esc', function (data, cancel) {
        _this2._closeFormView();

        cancel();
      });
      return formView;
    }
    /**
     * Creates a toolbar Template button. Clicking this button will show
     * a {@link #_balloon} attached to the selection.
     *
     * @private
     */

  }, {
    key: "_createToolbarLinkButton",
    value: function _createToolbarLinkButton() {
      var _this3 = this;

      var editor = this.editor;
      var templateCommand = editor.commands.get('template');
      var t = editor.t; // Handle the `Ctrl+K` keystroke and show the panel.

      editor.keystrokes.set(_utils__WEBPACK_IMPORTED_MODULE_23__.LINK_KEYSTROKE, function (keyEvtData, cancel) {
        // Prevent focusing the search bar in FF, Chrome and Edge. See https://github.com/ckeditor/ckeditor5/issues/4811.
        cancel();

        if (templateCommand.isEnabled) {
          _this3._showUI(true);
        }
      });
      editor.ui.componentFactory.add('template', function (locale) {
        var button = new _ckeditor_ckeditor5_ui_src__WEBPACK_IMPORTED_MODULE_20__.ButtonView(locale);
        button.isEnabled = true;
        button.label = t('Var Define');
        button.icon = _theme_icons_temlateIcon_svg__WEBPACK_IMPORTED_MODULE_24__.default;
        button.keystroke = _utils__WEBPACK_IMPORTED_MODULE_23__.LINK_KEYSTROKE;
        button.tooltip = true;
        button.isToggleable = true; // Bind button to the command.

        button.bind('isEnabled').to(templateCommand, 'isEnabled');
        button.bind('isOn').to(templateCommand, 'value', function (value) {
          return !!value;
        }); // Show the panel on button click.

        _this3.listenTo(button, 'execute', function () {
          return _this3._showUI(true);
        });

        return button;
      });
    }
    /**
     * Attaches actions that control whether the balloon panel containing the
     * {@link #formView} is visible or not.
     *
     * @private
     */

  }, {
    key: "_enableUserBalloonInteractions",
    value: function _enableUserBalloonInteractions() {
      var _this4 = this;

      var viewDocument = this.editor.editing.view.document; // Handle click on view document and show panel when selection is placed inside the link element.
      // Keep panel open until selection will be inside the same link element.

      this.listenTo(viewDocument, 'click', function () {
        var parentLink = _this4._getSelectedLinkElement();

        if (parentLink) {
          // Then show panel but keep focus inside editor editable.
          _this4._showUI();
        }
      }); // Focus the form if the balloon is visible and the Tab key has been pressed.

      this.editor.keystrokes.set('Tab', function (data, cancel) {
        if (_this4._areActionsVisible && !_this4.actionsView.focusTracker.isFocused) {
          _this4.actionsView.focus();

          cancel();
        }
      }, {
        // Use the high priority because the link UI navigation is more important
        // than other feature's actions, e.g. list indentation.
        // https://github.com/ckeditor/ckeditor5-link/issues/146
        priority: 'high'
      }); // Close the panel on the Esc key press when the editable has focus and the balloon is visible.

      this.editor.keystrokes.set('Esc', function (data, cancel) {
        if (_this4._isUIVisible) {
          _this4._hideUI();

          cancel();
        }
      }); // Close on click outside of balloon panel element.

      (0,_ckeditor_ckeditor5_ui_src__WEBPACK_IMPORTED_MODULE_20__.clickOutsideHandler)({
        emitter: this.formView,
        activator: function activator() {
          return _this4._isUIInPanel;
        },
        contextElements: [this._balloon.view.element],
        callback: function callback() {
          return _this4._hideUI();
        }
      });
    }
    /**
     * Adds the {@link #actionsView} to the {@link #_balloon}.
     *
     * @protected
     */

  }, {
    key: "_addActionsView",
    value: function _addActionsView() {
      if (this._areActionsInPanel) {
        return;
      }

      this._balloon.add({
        view: this.actionsView,
        position: this._getBalloonPositionData()
      });
    }
    /**
     * Adds the {@link #formView} to the {@link #_balloon}.
     *
     * @protected
     */

  }, {
    key: "_addFormView",
    value: function _addFormView() {
      if (this._isFormInPanel) {
        return;
      }

      var editor = this.editor;
      var templateCommand = editor.commands.get('template');
      this.formView.disableCssTransitions();

      this._balloon.add({
        view: this.formView,
        position: this._getBalloonPositionData()
      }); // Select input when form view is currently visible.


      if (this._balloon.visibleView === this.formView) {
        this.formView.labelInputView.fieldView.select();
      }

      this.formView.enableCssTransitions(); // Make sure that each time the panel shows up, the URL field remains in sync with the value of
      // the command. If the user typed in the input, then canceled the balloon (`urlInputView.fieldView#value` stays
      // unaltered) and re-opened it without changing the value of the link command (e.g. because they
      // clicked the same link), they would see the old value instead of the actual value of the command.
      // https://github.com/ckeditor/ckeditor5-link/issues/78
      // https://github.com/ckeditor/ckeditor5-link/issues/123

      this.formView.labelInputView.fieldView.element.value = templateCommand.value || '';
    }
    /**
     * Closes the form view. Decides whether the balloon should be hidden completely or if the action view should be shown. This is
     * decided upon the link command value (which has a value if the document selection is in the link).
     *
     * Additionally, if any {@link module:link/link~LinkConfig#decorators} are defined in the editor configuration, the state of
     * switch buttons responsible for manual decorator handling is restored.
     *
     * @private
     */

  }, {
    key: "_closeFormView",
    value: function _closeFormView() {
      var templateCommand = this.editor.commands.get('template'); // Restore manual decorator states to represent the current model state. This case is important to reset the switch buttons
      // when the user cancels the editing form.

      templateCommand.restoreManualDecoratorStates();

      if (templateCommand.value !== undefined) {
        this._removeFormView();
      } else {
        this._hideUI();
      }
    }
    /**
     * Removes the {@link #formView} from the {@link #_balloon}.
     *
     * @protected
     */

  }, {
    key: "_removeFormView",
    value: function _removeFormView() {
      if (this._isFormInPanel) {
        // Blur the input element before removing it from DOM to prevent issues in some browsers.
        // See https://github.com/ckeditor/ckeditor5/issues/1501.
        this.formView.saveButtonView.focus();

        this._balloon.remove(this.formView); // Because the form has an input which has focus, the focus must be brought back
        // to the editor. Otherwise, it would be lost.


        this.editor.editing.view.focus();

        this._hideFakeVisualSelection();
      }
    }
    /**
     * Shows the correct UI type. It is either {@link #formView} or {@link #actionsView}.
     *
     * @param {Boolean} forceVisible
     * @private
     */

  }, {
    key: "_showUI",
    value: function _showUI() {
      var forceVisible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      // When there's no link under the selection, go straight to the editing UI.
      if (!this._getSelectedLinkElement()) {
        // Show visual selection on a text without a link when the contextual balloon is displayed.
        // See https://github.com/ckeditor/ckeditor5/issues/4721.
        this._showFakeVisualSelection();

        this._addActionsView(); // Be sure panel with link is visible.


        if (forceVisible) {
          this._balloon.showStack('main');
        }

        this._addFormView();
      } // If there's a link under the selection...
      else {
          // Go to the editing UI if actions are already visible.
          if (this._areActionsVisible) {
            this._addFormView();
          } // Otherwise display just the actions UI.
          else {
              this._addActionsView();
            } // Be sure panel with link is visible.


          if (forceVisible) {
            this._balloon.showStack('main');
          }
        } // Begin responding to ui#update once the UI is added.


      this._startUpdatingUI();
    }
    /**
     * Removes the {@link #formView} from the {@link #_balloon}.
     *
     * See {@link #_addFormView}, {@link #_addActionsView}.
     *
     * @protected
     */

  }, {
    key: "_hideUI",
    value: function _hideUI() {
      if (!this._isUIInPanel) {
        return;
      }

      var editor = this.editor;
      this.stopListening(editor.ui, 'update');
      this.stopListening(this._balloon, 'change:visibleView'); // Make sure the focus always gets back to the editable _before_ removing the focused form view.
      // Doing otherwise causes issues in some browsers. See https://github.com/ckeditor/ckeditor5-link/issues/193.

      editor.editing.view.focus(); // Remove form first because it's on top of the stack.

      this._removeFormView(); // Then remove the actions view because it's beneath the form.


      this._balloon.remove(this.actionsView);

      this._hideFakeVisualSelection();
    }
    /**
     * Makes the UI react to the {@link module:core/editor/editorui~EditorUI#event:update} event to
     * reposition itself when the editor UI should be refreshed.
     *
     * See: {@link #_hideUI} to learn when the UI stops reacting to the `update` event.
     *
     * @protected
     */

  }, {
    key: "_startUpdatingUI",
    value: function _startUpdatingUI() {
      var _this5 = this;

      var editor = this.editor;
      var viewDocument = editor.editing.view.document;

      var prevSelectedLink = this._getSelectedLinkElement();

      var prevSelectionParent = getSelectionParent();

      var update = function update() {
        var selectedLink = _this5._getSelectedLinkElement();

        var selectionParent = getSelectionParent(); // Hide the panel if:
        //
        // * the selection went out of the EXISTING link element. E.g. user moved the caret out
        //   of the link,
        // * the selection went to a different parent when creating a NEW link. E.g. someone
        //   else modified the document.
        // * the selection has expanded (e.g. displaying link actions then pressing SHIFT+Right arrow).
        //
        // Note: #_getSelectedLinkElement will return a link for a non-collapsed selection only
        // when fully selected.

        if (prevSelectedLink && !selectedLink || !prevSelectedLink && selectionParent !== prevSelectionParent) {
          _this5._hideUI();
        } // Update the position of the panel when:
        //  * link panel is in the visible stack
        //  * the selection remains in the original link element,
        //  * there was no link element in the first place, i.e. creating a new link
        else if (_this5._isUIVisible) {
            // If still in a link element, simply update the position of the balloon.
            // If there was no link (e.g. inserting one), the balloon must be moved
            // to the new position in the editing view (a new native DOM range).
            _this5._balloon.updatePosition(_this5._getBalloonPositionData());
          }

        prevSelectedLink = selectedLink;
        prevSelectionParent = selectionParent;
      };

      function getSelectionParent() {
        return viewDocument.selection.focus.getAncestors().reverse().find(function (node) {
          return node.is('element');
        });
      }

      this.listenTo(editor.ui, 'update', update);
      this.listenTo(this._balloon, 'change:visibleView', update);
    }
    /**
     * Returns `true` when {@link #formView} is in the {@link #_balloon}.
     *
     * @readonly
     * @protected
     * @type {Boolean}
     */

  }, {
    key: "_isFormInPanel",
    get: function get() {
      return this._balloon.hasView(this.formView);
    }
    /**
     * Returns `true` when {@link #actionsView} is in the {@link #_balloon}.
     *
     * @readonly
     * @protected
     * @type {Boolean}
     */

  }, {
    key: "_areActionsInPanel",
    get: function get() {
      return this._balloon.hasView(this.actionsView);
    }
    /**
     * Returns `true` when {@link #actionsView} is in the {@link #_balloon} and it is
     * currently visible.
     *
     * @readonly
     * @protected
     * @type {Boolean}
     */

  }, {
    key: "_areActionsVisible",
    get: function get() {
      return this._balloon.visibleView === this.actionsView;
    }
    /**
     * Returns `true` when {@link #actionsView} or {@link #formView} is in the {@link #_balloon}.
     *
     * @readonly
     * @protected
     * @type {Boolean}
     */

  }, {
    key: "_isUIInPanel",
    get: function get() {
      return this._isFormInPanel || this._areActionsInPanel;
    }
    /**
     * Returns `true` when {@link #actionsView} or {@link #formView} is in the {@link #_balloon} and it is
     * currently visible.
     *
     * @readonly
     * @protected
     * @type {Boolean}
     */

  }, {
    key: "_isUIVisible",
    get: function get() {
      var visibleView = this._balloon.visibleView;
      return visibleView == this.formView || this._areActionsVisible;
    }
    /**
     * Returns positioning options for the {@link #_balloon}. They control the way the balloon is attached
     * to the target element or selection.
     *
     * If the selection is collapsed and inside a link element, the panel will be attached to the
     * entire link element. Otherwise, it will be attached to the selection.
     *
     * @private
     * @returns {module:utils/dom/position~Options}
     */

  }, {
    key: "_getBalloonPositionData",
    value: function _getBalloonPositionData() {
      var view = this.editor.editing.view;
      var model = this.editor.model;
      var viewDocument = view.document;
      var target = null;

      if (model.markers.has(VISUAL_SELECTION_MARKER_NAME)) {
        // There are cases when we highlight selection using a marker (#7705, #4721).
        var markerViewElements = Array.from(this.editor.editing.mapper.markerNameToElements(VISUAL_SELECTION_MARKER_NAME));
        var newRange = view.createRange(view.createPositionBefore(markerViewElements[0]), view.createPositionAfter(markerViewElements[markerViewElements.length - 1]));
        target = view.domConverter.viewRangeToDom(newRange);
      } else {
        var targetLink = this._getSelectedLinkElement();

        var range = viewDocument.selection.getFirstRange();
        target = targetLink ? // When selection is inside link element, then attach panel to this element.
        view.domConverter.mapViewToDom(targetLink) : // Otherwise attach panel to the selection.
        view.domConverter.viewRangeToDom(range);
      }

      return {
        target: target
      };
    }
    /**
     * Returns the link {@link module:engine/view/attributeelement~AttributeElement} under
     * the {@link module:engine/view/document~Document editing view's} selection or `null`
     * if there is none.
     *
     * **Note**: For a non–collapsed selection, the link element is only returned when **fully**
     * selected and the **only** element within the selection boundaries.
     *
     * @private
     * @returns {module:engine/view/attributeelement~AttributeElement|null}
     */

  }, {
    key: "_getSelectedLinkElement",
    value: function _getSelectedLinkElement() {
      var view = this.editor.editing.view;
      var selection = view.document.selection;

      if (selection.isCollapsed) {
        return findLinkElementAncestor(selection.getFirstPosition());
      } else {
        // The range for fully selected link is usually anchored in adjacent text nodes.
        // Trim it to get closer to the actual link element.
        var range = selection.getFirstRange().getTrimmed();
        var startLink = findLinkElementAncestor(range.start);
        var endLink = findLinkElementAncestor(range.end);

        if (!startLink || startLink != endLink) {
          return null;
        } // Check if the link element is fully selected.


        if (view.createRangeIn(startLink).getTrimmed().isEqual(range)) {
          return startLink;
        } else {
          return null;
        }
      }
    }
    /**
     * Displays a fake visual selection when the contextual balloon is displayed.
     *
     * This adds a 'link-ui' marker into the document that is rendered as a highlight on selected text fragment.
     *
     * @private
     */

  }, {
    key: "_showFakeVisualSelection",
    value: function _showFakeVisualSelection() {
      var model = this.editor.model;
      model.change(function (writer) {
        var range = model.document.selection.getFirstRange();

        if (model.markers.has(VISUAL_SELECTION_MARKER_NAME)) {
          writer.updateMarker(VISUAL_SELECTION_MARKER_NAME, {
            range: range
          });
        } else {
          if (range.start.isAtEnd) {
            var startPosition = range.start.getLastMatchingPosition(function (_ref) {
              var item = _ref.item;
              return !model.schema.isContent(item);
            }, {
              boundaries: range
            });
            writer.addMarker(VISUAL_SELECTION_MARKER_NAME, {
              usingOperation: false,
              affectsData: false,
              range: writer.createRange(startPosition, range.end)
            });
          } else {
            writer.addMarker(VISUAL_SELECTION_MARKER_NAME, {
              usingOperation: false,
              affectsData: false,
              range: range
            });
          }
        }
      });
    }
    /**
     * Hides the fake visual selection created in {@link #_showFakeVisualSelection}.
     *
     * @private
     */

  }, {
    key: "_hideFakeVisualSelection",
    value: function _hideFakeVisualSelection() {
      var model = this.editor.model;

      if (model.markers.has(VISUAL_SELECTION_MARKER_NAME)) {
        model.change(function (writer) {
          writer.removeMarker(VISUAL_SELECTION_MARKER_NAME);
        });
      }
    }
  }], [{
    key: "requires",
    get:
    /**
     * @inheritDoc
     */
    function get() {
      return [_ckeditor_ckeditor5_ui_src__WEBPACK_IMPORTED_MODULE_20__.ContextualBalloon];
    }
    /**
     * @inheritDoc
     */

  }, {
    key: "pluginName",
    get: function get() {
      return 'TextTemplateUI';
    }
  }]);

  return TemplateUi;
}(_ckeditor_ckeditor5_core_src_plugin__WEBPACK_IMPORTED_MODULE_18__.default); // Returns a link element if there's one among the ancestors of the provided `Position`.
//
// @private
// @param {module:engine/view/position~Position} View position to analyze.
// @returns {module:engine/view/attributeelement~AttributeElement|null} Template element at the position or null.




function findLinkElementAncestor(position) {
  return position.getAncestors().find(function (ancestor) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_23__.isLinkElement)(ancestor);
  });
}

/***/ }),

/***/ "./assets/ckeditor5-link/src/template.js":
/*!***********************************************!*\
  !*** ./assets/ckeditor5-link/src/template.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Template)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ckeditor_ckeditor5_core_src_plugin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ckeditor/ckeditor5-core/src/plugin */ "./node_modules/@ckeditor/ckeditor5-core/src/plugin.js");
/* harmony import */ var _template_editing__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./template-editing */ "./assets/ckeditor5-link/src/template-editing.js");
/* harmony import */ var _template_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./template-ui */ "./assets/ckeditor5-link/src/template-ui.js");
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

/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module link/link
 */



/**
 * The link plugin.
 *
 * This is a "glue" plugin that loads the {@link module:link/linkediting~LinkEditing link editing feature}
 * and {@link module:link/linkui~TemplateUi link UI feature}.
 *
 * @extends module:core/plugin~Plugin
 */

var Template = /*#__PURE__*/function (_Plugin) {
  _inherits(Template, _Plugin);

  var _super = _createSuper(Template);

  function Template() {
    _classCallCheck(this, Template);

    return _super.apply(this, arguments);
  }

  _createClass(Template, null, [{
    key: "requires",
    get:
    /**
     * @inheritDoc
     */
    function get() {
      return [_template_editing__WEBPACK_IMPORTED_MODULE_13__.default, _template_ui__WEBPACK_IMPORTED_MODULE_14__.default];
    }
    /**
     * @inheritDoc
     */

  }, {
    key: "pluginName",
    get: function get() {
      return 'TextTemplating';
    }
  }]);

  return Template;
}(_ckeditor_ckeditor5_core_src_plugin__WEBPACK_IMPORTED_MODULE_12__.default);
/**
 * The configuration of the {@link module:link/link~Link} feature.
 *
 * Read more in {@link module:link/link~LinkConfig}.
 *
 * @member {module:link/link~LinkConfig} module:core/editor/editorconfig~EditorConfig#link
 */

/**
 * The configuration of the {@link module:link/link~Link link feature}.
 *
 *		ClassicEditor
 *			.create( editorElement, {
 * 				link:  ... // Template feature configuration.
 *			} )
 *			.then( ... )
 *			.catch( ... );
 *
 * See {@link module:core/editor/editorconfig~EditorConfig all editor options}.
 * @interface LinkConfig
 */

/**
 * When set, the editor will add the given protocol to the link when the user creates a link without one.
 * For example, when the user is creating a link and types `ckeditor.com` in the link form input, during link submission
 * the editor will automatically add the `http://` protocol, so the link will look as follows: `http://ckeditor.com`.
 *
 * The feature also provides email address auto-detection. When you submit `hello@example.com`,
 * the plugin will automatically change it to `mailto:hello@example.com`.
 *
 * 		ClassicEditor
 *			.create( editorElement, {
 * 				link: {
 * 					defaultProtocol: 'http://'
 * 				}
 *			} )
 *			.then( ... )
 *			.catch( ... );
 *
 * **NOTE:** If no configuration is provided, the editor will not auto-fix the links.
 *
 * @member {String} module:link/link~LinkConfig#defaultProtocol
 */

/**
 * When set to `true`, the `target="blank"` and `rel="noopener noreferrer"` attributes are automatically added to all external links
 * in the editor. "External links" are all links in the editor content starting with `http`, `https`, or `//`.
 *
 *		ClassicEditor
 *			.create( editorElement, {
 *				link: {
 *					addTargetToExternalLinks: true
 *				}
 *			} )
 *			.then( ... )
 *			.catch( ... );
 *
 * Internally, this option activates a predefined {@link module:link/link~LinkConfig#decorators automatic link decorator}
 * that extends all external links with the `target` and `rel` attributes.
 *
 * **Note**: To control the `target` and `rel` attributes of specific links in the edited content, a dedicated
 * {@link module:link/link~LinkDecoratorManualDefinition manual} decorator must be defined in the
 * {@link module:link/link~LinkConfig#decorators `config.link.decorators`} array. In such scenario,
 * the `config.link.addTargetToExternalLinks` option should remain `undefined` or `false` to not interfere with the manual decorator.
 *
 * It is possible to add other {@link module:link/link~LinkDecoratorAutomaticDefinition automatic}
 * or {@link module:link/link~LinkDecoratorManualDefinition manual} link decorators when this option is active.
 *
 * More information about decorators can be found in the {@link module:link/link~LinkConfig#decorators decorators configuration}
 * reference.
 *
 * @default false
 * @member {Boolean} module:link/link~LinkConfig#addTargetToExternalLinks
 */

/**
 * Decorators provide an easy way to configure and manage additional link attributes in the editor content. There are
 * two types of link decorators:
 *
 * * {@link module:link/link~LinkDecoratorAutomaticDefinition Automatic} &ndash; They match links against pre–defined rules and
 * manage their attributes based on the results.
 * * {@link module:link/link~LinkDecoratorManualDefinition Manual} &ndash; They allow users to control link attributes individually,
 *  using the editor UI.
 *
 * Template decorators are defined as objects with key-value pairs, where the key is the name provided for a given decorator and the
 * value is the decorator definition.
 *
 * The name of the decorator also corresponds to the {@glink framework/guides/architecture/editing-engine#text-attributes text attribute}
 * in the model. For instance, the `isExternal` decorator below is represented as a `linkIsExternal` attribute in the model.
 *
 *		ClassicEditor
 *			.create( editorElement, {
 *				link: {
 *					decorators: {
 *						isExternal: {
 *							mode: 'automatic',
 *							callback: url => url.startsWith( 'http://' ),
 *							attributes: {
 *								target: '_blank',
 *								rel: 'noopener noreferrer'
 *							}
 *						},
 *						isDownloadable: {
 *							mode: 'manual',
 *							label: 'Downloadable',
 *							attributes: {
 *								download: 'file.png',
 *							}
 *						},
 *						// ...
 *					}
 *				}
 *			} )
 *			.then( ... )
 *			.catch( ... );
 *
 * To learn more about the configuration syntax, check out the {@link module:link/link~LinkDecoratorAutomaticDefinition automatic}
 * and {@link module:link/link~LinkDecoratorManualDefinition manual} decorator option reference.
 *
 * **Warning:** Currently, link decorators work independently of one another and no conflict resolution mechanism exists.
 * For example, configuring the `target` attribute using both an automatic and a manual decorator at the same time could end up with
 * quirky results. The same applies if multiple manual or automatic decorators were defined for the same attribute.
 *
 * **Note**: Since the `target` attribute management for external links is a common use case, there is a predefined automatic decorator
 * dedicated for that purpose which can be enabled by turning a single option on. Check out the
 * {@link module:link/link~LinkConfig#addTargetToExternalLinks `config.link.addTargetToExternalLinks`}
 * configuration description to learn more.
 *
 * See also the {@glink features/link#custom-link-attributes-decorators link feature guide} for more information.
 *
 * @member {Object.<String, module:link/link~LinkDecoratorDefinition>} module:link/link~LinkConfig#decorators
 */

/**
 * A link decorator definition. Two types implement this defition:
 *
 * * {@link module:link/link~LinkDecoratorManualDefinition}
 * * {@link module:link/link~LinkDecoratorAutomaticDefinition}
 *
 * Refer to their document for more information about available options or to the
 * {@glink features/link#custom-link-attributes-decorators link feature guide} for general information.
 *
 * @interface LinkDecoratorDefinition
 */

/**
 * Template decorator type.
 *
 * Check out the {@glink features/link#custom-link-attributes-decorators link feature guide} for more information.
 *
 * @member {'manual'|'automatic'} module:link/link~LinkDecoratorDefinition#mode
 */

/**
 * Describes an automatic {@link module:link/link~LinkConfig#decorators link decorator}. This decorator type matches
 * all links in the editor content against a function that decides whether the link should receive a pre–defined set of attributes.
 *
 * It takes an object with key-value pairs of attributes and a callback function that must return a Boolean value based on the link's
 * `href` (URL). When the callback returns `true`, attributes are applied to the link.
 *
 * For example, to add the `target="_blank"` attribute to all links in the editor starting with `http://`, the
 * configuration could look like this:
 *
 *		{
 *			mode: 'automatic',
 *			callback: url => url.startsWith( 'http://' ),
 *			attributes: {
 *				target: '_blank'
 *			}
 *		}
 *
 * **Note**: Since the `target` attribute management for external links is a common use case, there is a predefined automatic decorator
 * dedicated for that purpose that can be enabled by turning a single option on. Check out the
 * {@link module:link/link~LinkConfig#addTargetToExternalLinks `config.link.addTargetToExternalLinks`}
 * configuration description to learn more.
 *
 * @typedef {Object} module:link/link~LinkDecoratorAutomaticDefinition
 * @property {'automatic'} mode Template decorator type. It is `'automatic'` for all automatic decorators.
 * @property {Function} callback Takes a `url` as a parameter and returns `true` if the `attributes` should be applied to the link.
 * @property {Object} attributes Key-value pairs used as link attributes added to the output during the
 * {@glink framework/guides/architecture/editing-engine#conversion downcasting}.
 * Attributes should follow the {@link module:engine/view/elementdefinition~ElementDefinition} syntax.
 */

/**
 * Describes a manual {@link module:link/link~LinkConfig#decorators link decorator}. This decorator type is represented in
 * the link feature's {@link module:link/linkui user interface} as a switch that the user can use to control the presence
 * of a predefined set of attributes.
 *
 * For instance, to allow the users to manually control the presence of the `target="_blank"` and
 * `rel="noopener noreferrer"` attributes on specific links, the decorator could look as follows:
 *
 *		{
 *			mode: 'manual',
 *			label: 'Open in a new tab',
 *			defaultValue: true,
 *			attributes: {
 *				target: '_blank',
 *				rel: 'noopener noreferrer'
 *			}
 *		}
 *
 * @typedef {Object} module:link/link~LinkDecoratorManualDefinition
 * @property {'manual'} mode Template decorator type. It is `'manual'` for all manual decorators.
 * @property {String} label The label of the UI button that the user can use to control the presence of link attributes.
 * @property {Object} attributes Key-value pairs used as link attributes added to the output during the
 * {@glink framework/guides/architecture/editing-engine#conversion downcasting}.
 * Attributes should follow the {@link module:engine/view/elementdefinition~ElementDefinition} syntax.
 * @property {Boolean} [defaultValue] Controls whether the decorator is "on" by default.
 */




/***/ }),

/***/ "./assets/ckeditor5-link/src/ui/template-actions-view.js":
/*!***************************************************************!*\
  !*** ./assets/ckeditor5-link/src/ui/template-actions-view.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TemplateActionsView)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.reflect.get.js */ "./node_modules/core-js/modules/es.reflect.get.js");
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _ckeditor_ckeditor5_ui_src__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ckeditor/ckeditor5-ui/src */ "./node_modules/@ckeditor/ckeditor5-ui/src/index.js");
/* harmony import */ var _ckeditor_ckeditor5_utils_src__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ckeditor/ckeditor5-utils/src */ "./node_modules/@ckeditor/ckeditor5-utils/src/index.js");
/* harmony import */ var _ckeditor_ckeditor5_core_src__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ckeditor/ckeditor5-core/src */ "./node_modules/@ckeditor/ckeditor5-core/src/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../utils */ "./assets/ckeditor5-link/src/utils.js");
/* harmony import */ var _ckeditor_ckeditor5_ui_theme_components_responsive_form_responsiveform_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ckeditor/ckeditor5-ui/theme/components/responsive-form/responsiveform.css */ "./node_modules/@ckeditor/ckeditor5-ui/theme/components/responsive-form/responsiveform.css");
/* harmony import */ var _theme_templateactions_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../theme/templateactions.css */ "./assets/ckeditor5-link/theme/templateactions.css");
/* harmony import */ var _theme_icons_unlink_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../theme/icons/unlink.svg */ "./assets/ckeditor5-link/theme/icons/unlink.svg");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module link/ui/linkactionsview
 */



 // See: #8833.
// eslint-disable-next-line ckeditor5-rules/ckeditor-imports




/**
 * The link actions view class. This view displays the link preview, allows
 * unlinking or editing the link.
 *
 * @extends module:ui/view~View
 */

var TemplateActionsView = /*#__PURE__*/function (_View) {
  _inherits(TemplateActionsView, _View);

  var _super = _createSuper(TemplateActionsView);

  /**
   * @inheritDoc
   */
  function TemplateActionsView(locale) {
    var _this;

    _classCallCheck(this, TemplateActionsView);

    _this = _super.call(this, locale);
    var t = locale.t;
    /**
     * Tracks information about DOM focus in the actions.
     *
     * @readonly
     * @member {module:utils/focustracker~FocusTracker}
     */

    _this.focusTracker = new _ckeditor_ckeditor5_utils_src__WEBPACK_IMPORTED_MODULE_18__.FocusTracker();
    /**
     * An instance of the {@link module:utils/keystrokehandler~KeystrokeHandler}.
     *
     * @readonly
     * @member {module:utils/keystrokehandler~KeystrokeHandler}
     */

    _this.keystrokes = new _ckeditor_ckeditor5_utils_src__WEBPACK_IMPORTED_MODULE_18__.KeystrokeHandler();
    /**
     * The href preview view.
     *
     * @member {module:ui/view~View}
     */

    _this.previewButtonView = _this._createPreviewButton();
    /**
     * The unlink button view.
     *
     * @member {module:ui/button/buttonview~ButtonView}
     */

    _this.unlinkButtonView = _this._createButton(t('Unlink'), _theme_icons_unlink_svg__WEBPACK_IMPORTED_MODULE_23__.default, 'unlink');
    /**
     * The edit link button view.
     *
     * @member {module:ui/button/buttonview~ButtonView}
     */

    _this.editButtonView = _this._createButton(t('Edit link'), _ckeditor_ckeditor5_core_src__WEBPACK_IMPORTED_MODULE_19__.icons.pencil, 'edit');
    /**
     * The value of the "href" attribute of the link to use in the {@link #previewButtonView}.
     *
     * @observable
     * @member {String}
     */

    _this.set('href');
    /**
     * A collection of views that can be focused in the view.
     *
     * @readonly
     * @protected
     * @member {module:ui/viewcollection~ViewCollection}
     */


    _this._focusables = new _ckeditor_ckeditor5_ui_src__WEBPACK_IMPORTED_MODULE_17__.ViewCollection();
    /**
     * Helps cycling over {@link #_focusables} in the view.
     *
     * @readonly
     * @protected
     * @member {module:ui/focuscycler~FocusCycler}
     */

    _this._focusCycler = new _ckeditor_ckeditor5_ui_src__WEBPACK_IMPORTED_MODULE_17__.FocusCycler({
      focusables: _this._focusables,
      focusTracker: _this.focusTracker,
      keystrokeHandler: _this.keystrokes,
      actions: {
        // Navigate fields backwards using the Shift + Tab keystroke.
        focusPrevious: 'shift + tab',
        // Navigate fields forwards using the Tab key.
        focusNext: 'tab'
      }
    });

    _this.setTemplate({
      tag: 'div',
      attributes: {
        "class": ['ck', 'ck-link-actions', 'ck-responsive-form'],
        // https://github.com/ckeditor/ckeditor5-link/issues/90
        tabindex: '-1'
      },
      children: [_this.previewButtonView, _this.editButtonView, _this.unlinkButtonView]
    });

    return _this;
  }
  /**
   * @inheritDoc
   */


  _createClass(TemplateActionsView, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      _get(_getPrototypeOf(TemplateActionsView.prototype), "render", this).call(this);

      var childViews = [this.previewButtonView, this.editButtonView, this.unlinkButtonView];
      childViews.forEach(function (v) {
        // Register the view as focusable.
        _this2._focusables.add(v); // Register the view in the focus tracker.


        _this2.focusTracker.add(v.element);
      }); // Start listening for the keystrokes coming from #element.

      this.keystrokes.listenTo(this.element);
    }
    /**
     * Focuses the fist {@link #_focusables} in the actions.
     */

  }, {
    key: "focus",
    value: function focus() {
      this._focusCycler.focusFirst();
    }
    /**
     * Creates a button view.
     *
     * @private
     * @param {String} label The button label.
     * @param {String} icon The button icon.
     * @param {String} [eventName] An event name that the `ButtonView#execute` event will be delegated to.
     * @returns {module:ui/button/buttonview~ButtonView} The button view instance.
     */

  }, {
    key: "_createButton",
    value: function _createButton(label, icon, eventName) {
      var button = new _ckeditor_ckeditor5_ui_src__WEBPACK_IMPORTED_MODULE_17__.ButtonView(this.locale);
      button.set({
        label: label,
        icon: icon,
        tooltip: true
      });
      button.delegate('execute').to(this, eventName);
      return button;
    }
    /**
     * Creates a link href preview button.
     *
     * @private
     * @returns {module:ui/button/buttonview~ButtonView} The button view instance.
     */

  }, {
    key: "_createPreviewButton",
    value: function _createPreviewButton() {
      var button = new _ckeditor_ckeditor5_ui_src__WEBPACK_IMPORTED_MODULE_17__.ButtonView(this.locale);
      var bind = this.bindTemplate;
      var t = this.t;
      button.set({
        withText: true,
        tooltip: t('Open link in new tab')
      });
      button.extendTemplate({
        attributes: {
          "class": ['ck', 'ck-link-actions__preview'],
          href: bind.to('href', function (href) {
            return href && (0,_utils__WEBPACK_IMPORTED_MODULE_20__.ensureSafeUrl)(href);
          }),
          target: '_blank',
          rel: 'noopener noreferrer'
        }
      });
      button.bind('label').to(this, 'href', function (href) {
        return href || t('This link has no URL');
      });
      button.bind('isEnabled').to(this, 'href', function (href) {
        return !!href;
      });
      button.template.tag = 'a';
      button.template.eventListeners = {};
      return button;
    }
  }]);

  return TemplateActionsView;
}(_ckeditor_ckeditor5_ui_src__WEBPACK_IMPORTED_MODULE_17__.View);
/**
 * Fired when the {@link #editButtonView} is clicked.
 *
 * @event edit
 */

/**
 * Fired when the {@link #unlinkButtonView} is clicked.
 *
 * @event unlink
 */




/***/ }),

/***/ "./assets/ckeditor5-link/src/ui/template-form-view.js":
/*!************************************************************!*\
  !*** ./assets/ckeditor5-link/src/ui/template-form-view.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TemplateFormView)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.some.js */ "./node_modules/core-js/modules/es.array.some.js");
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.reflect.get.js */ "./node_modules/core-js/modules/es.reflect.get.js");
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _ckeditor_ckeditor5_ui_src__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ckeditor/ckeditor5-ui/src */ "./node_modules/@ckeditor/ckeditor5-ui/src/index.js");
/* harmony import */ var _ckeditor_ckeditor5_ui_src_dropdown_button_splitbuttonview__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ckeditor/ckeditor5-ui/src/dropdown/button/splitbuttonview */ "./node_modules/@ckeditor/ckeditor5-ui/src/dropdown/button/splitbuttonview.js");
/* harmony import */ var _ckeditor_ckeditor5_utils_src__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ckeditor/ckeditor5-utils/src */ "./node_modules/@ckeditor/ckeditor5-utils/src/index.js");
/* harmony import */ var _ckeditor_ckeditor5_core_src__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ckeditor/ckeditor5-core/src */ "./node_modules/@ckeditor/ckeditor5-core/src/index.js");
/* harmony import */ var _ckeditor_ckeditor5_ui_theme_components_responsive_form_responsiveform_css__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @ckeditor/ckeditor5-ui/theme/components/responsive-form/responsiveform.css */ "./node_modules/@ckeditor/ckeditor5-ui/theme/components/responsive-form/responsiveform.css");
/* harmony import */ var _theme_templateform_css__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../theme/templateform.css */ "./assets/ckeditor5-link/theme/templateform.css");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




























function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module link/ui/linkformview
 */



 // See: #8833.
// eslint-disable-next-line ckeditor5-rules/ckeditor-imports



/**
 * The link form view controller class.
 *
 * See {@link module:link/ui/linkformview~LinkFormView}.
 *
 * @extends module:ui/view~View
 */

var TemplateFormView = /*#__PURE__*/function (_View) {
  _inherits(TemplateFormView, _View);

  var _super = _createSuper(TemplateFormView);

  /**
   * Creates an instance of the {@link module:link/ui/linkformview~LinkFormView} class.
   *
   * Also see {@link #render}.
   *
   * @param {module:utils/locale~Locale} [locale] The localization services instance.
   * @param {module:link/linkcommand~LinkCommand} linkCommand Reference to {@link module:link/linkcommand~LinkCommand}.
   * @param {String} [protocol] A value of a protocol to be displayed in the input's placeholder.
   */
  function TemplateFormView(locale, linkCommand) {
    var _this;

    _classCallCheck(this, TemplateFormView);

    _this = _super.call(this, locale);
    var t = locale.t;
    /**
     * Tracks information about DOM focus in the form.
     *
     * @readonly
     * @member {module:utils/focustracker~FocusTracker}
     */

    _this.focusTracker = new _ckeditor_ckeditor5_utils_src__WEBPACK_IMPORTED_MODULE_28__.FocusTracker();
    /**
     * An instance of the {@link module:utils/keystrokehandler~KeystrokeHandler}.
     *
     * @readonly
     * @member {module:utils/keystrokehandler~KeystrokeHandler}
     */

    _this.keystrokes = new _ckeditor_ckeditor5_utils_src__WEBPACK_IMPORTED_MODULE_28__.KeystrokeHandler();
    /**
     * The URL input view.
     *
     * @member {module:ui/labeledfield/labeledfieldview~LabeledFieldView}
     */

    _this.labelInputView = _this._createTextInput('Attached Label');
    /**
    * The URL input view.
    *
    * @member {module:ui/labeledfield/labeledfieldview~LabeledFieldView}
    */

    _this.typeInputView = _this._createDropDownInput('Template Variable Type');
    /**
    /**
    * The Save button view.
    *
    * @member {module:ui/button/buttonview~ButtonView}
    */

    _this.saveButtonView = _this._createButton(t('Save'), _ckeditor_ckeditor5_core_src__WEBPACK_IMPORTED_MODULE_29__.icons.check, 'ck-button-save');
    _this.saveButtonView.type = 'submit';
    /**
     * The Cancel button view.
     *
     * @member {module:ui/button/buttonview~ButtonView}
     */

    _this.cancelButtonView = _this._createButton(t('Cancel'), _ckeditor_ckeditor5_core_src__WEBPACK_IMPORTED_MODULE_29__.icons.cancel, 'ck-button-cancel', 'cancel');
    /**
     * A collection of {@link module:ui/button/switchbuttonview~SwitchButtonView},
     * which corresponds to {@link module:link/linkcommand~LinkCommand#manualDecorators manual decorators}
     * configured in the editor.
     *
     * @private
     * @readonly
     * @type {module:ui/viewcollection~ViewCollection}
     */

    _this._manualDecoratorSwitches = _this._createManualDecoratorSwitches(linkCommand);
    /**
     * A collection of child views in the form.
     *
     * @readonly
     * @type {module:ui/viewcollection~ViewCollection}
     */

    _this.children = _this._createFormChildren(linkCommand.manualDecorators);
    /**
     * A collection of views that can be focused in the form.
     *
     * @readonly
     * @protected
     * @member {module:ui/viewcollection~ViewCollection}
     */

    _this._focusables = new _ckeditor_ckeditor5_ui_src__WEBPACK_IMPORTED_MODULE_26__.ViewCollection();
    /**
     * Helps cycling over {@link #_focusables} in the form.
     *
     * @readonly
     * @protected
     * @member {module:ui/focuscycler~FocusCycler}
     */

    _this._focusCycler = new _ckeditor_ckeditor5_ui_src__WEBPACK_IMPORTED_MODULE_26__.FocusCycler({
      focusables: _this._focusables,
      focusTracker: _this.focusTracker,
      keystrokeHandler: _this.keystrokes,
      actions: {
        // Navigate form fields backwards using the Shift + Tab keystroke.
        focusPrevious: 'shift + tab',
        // Navigate form fields forwards using the Tab key.
        focusNext: 'tab'
      }
    });
    var classList = ['ck', 'ck-link-form', 'ck-responsive-form'];

    if (linkCommand.manualDecorators.length) {
      classList.push('ck-link-form_layout-vertical', 'ck-vertical-form');
    }

    _this.setTemplate({
      tag: 'form',
      attributes: {
        "class": classList,
        // https://github.com/ckeditor/ckeditor5-link/issues/90
        tabindex: '-1'
      },
      children: _this.children
    });

    (0,_ckeditor_ckeditor5_ui_src__WEBPACK_IMPORTED_MODULE_26__.injectCssTransitionDisabler)(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Obtains the state of the {@link module:ui/button/switchbuttonview~SwitchButtonView switch buttons} representing
   * {@link module:link/linkcommand~LinkCommand#manualDecorators manual link decorators}
   * in the {@link module:link/ui/linkformview~LinkFormView}.
   *
   * @returns {Object.<String,Boolean>} Key-value pairs, where the key is the name of the decorator and the value is
   * its state.
   */


  _createClass(TemplateFormView, [{
    key: "getDecoratorSwitchesState",
    value: function getDecoratorSwitchesState() {
      return Array.from(this._manualDecoratorSwitches).reduce(function (accumulator, switchButton) {
        accumulator[switchButton.name] = switchButton.isOn;
        return accumulator;
      }, {});
    }
    /**
     * @inheritDoc
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      _get(_getPrototypeOf(TemplateFormView.prototype), "render", this).call(this);

      (0,_ckeditor_ckeditor5_ui_src__WEBPACK_IMPORTED_MODULE_26__.submitHandler)({
        view: this
      });
      var childViews = [this.labelInputView, this.typeInputView].concat(_toConsumableArray(this._manualDecoratorSwitches), [this.saveButtonView, this.cancelButtonView]);
      childViews.forEach(function (v) {
        // Register the view as focusable.
        _this2._focusables.add(v); // Register the view in the focus tracker.


        _this2.focusTracker.add(v.element);
      }); // Start listening for the keystrokes coming from #element.

      this.keystrokes.listenTo(this.element);
    }
    /**
     * Focuses the fist {@link #_focusables} in the form.
     */

  }, {
    key: "focus",
    value: function focus() {
      this._focusCycler.focusFirst();
    }
    /**
     * Creates a labeled input view.
     *
     * @private
     * @returns {module:ui/labeledfield/labeledfieldview~LabeledFieldView} Labeled field view instance.
     */

  }, {
    key: "_createTextInput",
    value: function _createTextInput(label) {
      var t = this.locale.t;
      var labeledInput = new _ckeditor_ckeditor5_ui_src__WEBPACK_IMPORTED_MODULE_26__.LabeledFieldView(this.locale, _ckeditor_ckeditor5_ui_src__WEBPACK_IMPORTED_MODULE_26__.createLabeledInputText);
      labeledInput.label = t(label);
      return labeledInput;
    }
    /**
     * Creates a labeled input view.
     *
     * @private
     * @returns {module:ui/labeledfield/labeledfieldview~LabeledFieldView} Labeled field view instance.
     */

  }, {
    key: "_createDropDownInput",
    value: function _createDropDownInput(label) {
      var _this3 = this;

      var createLabeledDropdown = function createLabeledDropdown(labeledFieldView, viewUid, statusUid) {
        var dropdownView = (0,_ckeditor_ckeditor5_ui_src__WEBPACK_IMPORTED_MODULE_26__.createDropdown)(labeledFieldView.locale, _ckeditor_ckeditor5_ui_src_dropdown_button_splitbuttonview__WEBPACK_IMPORTED_MODULE_27__.default);
        dropdownView.set({
          id: viewUid,
          ariaDescribedById: statusUid
        });
        dropdownView.buttonView.set({
          tooltip: true,
          withText: true
        });
        var buttons = []; // Add another component to the array of toolbar items.

        buttons.push(_this3._createDropdownButton('Short text')); // Add another component to the array of toolbar items.

        buttons.push(_this3._createDropdownButton('Long text')); // Create a dropdown with a toolbar inside the panel.

        (0,_ckeditor_ckeditor5_ui_src__WEBPACK_IMPORTED_MODULE_26__.addToolbarToDropdown)(dropdownView, buttons); // The default icon is align left as we do not support RTL yet (see #3).
        // Change icon to reflect current selection's alignment.

        dropdownView.bind('isEnabled').toMany(buttons, 'isEnabled', function () {
          for (var _len = arguments.length, areEnabled = new Array(_len), _key = 0; _key < _len; _key++) {
            areEnabled[_key] = arguments[_key];
          }

          return areEnabled.some(function (isEnabled) {
            return isEnabled;
          });
        });
        dropdownView.buttonView.bind('label').toMany(buttons, 'isOn', function () {
          for (var _len2 = arguments.length, areActive = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            areActive[_key2] = arguments[_key2];
          }

          // Get the index of an active button.
          var index = areActive.findIndex(function (value) {
            return value;
          }); // If none of the commands is active, display either defaultIcon or the first button's icon.

          if (index < 0) {
            return buttons[0].label;
          } // Return active button's icon.


          return buttons[index].label;
        });
        dropdownView.toolbarView.isVertical = true; // Enable button if any of the buttons is enabled.

        return dropdownView;
      };

      var t = this.locale.t;
      var labeledInput = new _ckeditor_ckeditor5_ui_src__WEBPACK_IMPORTED_MODULE_26__.LabeledFieldView(this.locale, createLabeledDropdown);
      return labeledInput;
    }
    /**
     * Creates a button view.
     *
     * @private
     * @param {String} label The button label.
     * @param {String} icon The button icon.
     * @param {String} className The additional button CSS class name.
     * @param {String} [eventName] An event name that the `ButtonView#execute` event will be delegated to.
     * @returns {module:ui/button/buttonview~ButtonView} The button view instance.
     */

  }, {
    key: "_createButton",
    value: function _createButton(label, icon, className, eventName) {
      var button = new _ckeditor_ckeditor5_ui_src__WEBPACK_IMPORTED_MODULE_26__.ButtonView(this.locale);
      button.set({
        label: label,
        icon: icon,
        tooltip: true
      });

      if (typeof className !== 'undefined') {
        button.extendTemplate({
          attributes: {
            "class": className
          }
        });
      }

      if (eventName) {
        button.delegate('execute').to(this, eventName);
      }

      return button;
    }
  }, {
    key: "_createDropdownButton",
    value: function _createDropdownButton(label) {
      var button = new _ckeditor_ckeditor5_ui_src__WEBPACK_IMPORTED_MODULE_26__.ButtonView(this.locale);
      button.set({
        isEnabled: true,
        label: label,
        tooltip: true,
        withText: true
      }); // Execute command.

      this.listenTo(button, 'execute', function () {
        button.isOn = true;
      });
      return button;
    }
    /**
     * Populates {@link module:ui/viewcollection~ViewCollection} of {@link module:ui/button/switchbuttonview~SwitchButtonView}
     * made based on {@link module:link/linkcommand~LinkCommand#manualDecorators}.
     *
     * @private
     * @param {module:link/linkcommand~LinkCommand} linkCommand A reference to the link command.
     * @returns {module:ui/viewcollection~ViewCollection} of switch buttons.
     */

  }, {
    key: "_createManualDecoratorSwitches",
    value: function _createManualDecoratorSwitches(linkCommand) {
      var _this4 = this;

      var switches = this.createCollection();

      var _iterator = _createForOfIteratorHelper(linkCommand.manualDecorators),
          _step;

      try {
        var _loop = function _loop() {
          var manualDecorator = _step.value;
          var switchButton = new _ckeditor_ckeditor5_ui_src__WEBPACK_IMPORTED_MODULE_26__.SwitchButtonView(_this4.locale);
          switchButton.set({
            name: manualDecorator.id,
            label: manualDecorator.label,
            withText: true
          });
          switchButton.bind('isOn').toMany([manualDecorator, linkCommand], 'value', function (decoratorValue, commandValue) {
            return commandValue === undefined && decoratorValue === undefined ? manualDecorator.defaultValue : decoratorValue;
          });
          switchButton.on('execute', function () {
            manualDecorator.set('value', !switchButton.isOn);
          });
          switches.add(switchButton);
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return switches;
    }
    /**
     * Populates the {@link #children} collection of the form.
     *
     * If {@link module:link/linkcommand~LinkCommand#manualDecorators manual decorators} are configured in the editor, it creates an
     * additional `View` wrapping all {@link #_manualDecoratorSwitches} switch buttons corresponding
     * to these decorators.
     *
     * @private
     * @param {module:utils/collection~Collection} manualDecorators A reference to
     * the collection of manual decorators stored in the link command.
     * @returns {module:ui/viewcollection~ViewCollection} The children of link form view.
     */

  }, {
    key: "_createFormChildren",
    value: function _createFormChildren(manualDecorators) {
      var children = this.createCollection();
      children.add(this.labelInputView);
      children.add(this.typeInputView);

      if (manualDecorators.length) {
        var additionalButtonsView = new _ckeditor_ckeditor5_ui_src__WEBPACK_IMPORTED_MODULE_26__.View();
        additionalButtonsView.setTemplate({
          tag: 'ul',
          children: this._manualDecoratorSwitches.map(function (switchButton) {
            return {
              tag: 'li',
              children: [switchButton],
              attributes: {
                "class": ['ck', 'ck-list__item']
              }
            };
          }),
          attributes: {
            "class": ['ck', 'ck-reset', 'ck-list']
          }
        });
        children.add(additionalButtonsView);
      }

      children.add(this.saveButtonView);
      children.add(this.cancelButtonView);
      return children;
    }
  }]);

  return TemplateFormView;
}(_ckeditor_ckeditor5_ui_src__WEBPACK_IMPORTED_MODULE_26__.View);
/**
 * Fired when the form view is submitted (when one of the children triggered the submit event),
 * for example with a click on {@link #saveButtonView}.
 *
 * @event submit
 */

/**
 * Fired when the form view is canceled, for example with a click on {@link #cancelButtonView}.
 *
 * @event cancel
 */




/***/ }),

/***/ "./assets/ckeditor5-link/src/utils.js":
/*!********************************************!*\
  !*** ./assets/ckeditor5-link/src/utils.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LINK_KEYSTROKE": () => (/* binding */ LINK_KEYSTROKE),
/* harmony export */   "isLinkElement": () => (/* binding */ isLinkElement),
/* harmony export */   "createTemplateElement": () => (/* binding */ createTemplateElement),
/* harmony export */   "ensureSafeUrl": () => (/* binding */ ensureSafeUrl),
/* harmony export */   "getLocalizedDecorators": () => (/* binding */ getLocalizedDecorators),
/* harmony export */   "normalizeDecorators": () => (/* binding */ normalizeDecorators),
/* harmony export */   "isImageAllowed": () => (/* binding */ isImageAllowed),
/* harmony export */   "isEmail": () => (/* binding */ isEmail),
/* harmony export */   "addLinkProtocolIfApplicable": () => (/* binding */ addLinkProtocolIfApplicable)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/upperFirst.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




















/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module link/utils
 */

var ATTRIBUTE_WHITESPACES = /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g; // eslint-disable-line no-control-regex

var SAFE_URL = /^(?:(?:https?|ftps?|mailto):|[^a-z]|[a-z+.-]+(?:[^a-z+.:-]|$))/i; // Simplified email test - should be run over previously found URL.

var EMAIL_REG_EXP = /^[\S]+@((?![-_])(?:[-\w\u00a1-\uffff]{0,63}[^-_]\.))+(?:[a-z\u00a1-\uffff]{2,})$/i; // The regex checks for the protocol syntax ('xxxx://' or 'xxxx:')
// or non-word characters at the beginning of the link ('/', '#' etc.).

var PROTOCOL_REG_EXP = /^((\w+:(\/{2,})?)|(\W))/i;
var HIGHLIGHT_CLASS = 'ck-template';
/**
 * A keystroke used by the {@link module:link/linkui~TemplateUi link UI feature}.
 */

var LINK_KEYSTROKE = 'Ctrl+E';
/**
 * Returns `true` if a given view node is the link element.
 *
 * @param {module:engine/view/node~Node} node
 * @returns {Boolean}
 */

function isLinkElement(node) {
  return node.is('attributeElement') && !!node.getCustomProperty('link');
}
/**
 * Creates a link {@link module:engine/view/attributeelement~AttributeElement} with the provided `href` attribute.
 *
 * @param {String} href
 * @param {module:engine/conversion/downcastdispatcher~DowncastConversionApi} conversionApi
 * @returns {module:engine/view/attributeelement~AttributeElement}
 */

function createTemplateElement(id, _ref) {
  var writer = _ref.writer;
  // Priority 5 - https://github.com/ckeditor/ckeditor5-link/issues/121.
  var linkElement = writer.createAttributeElement('span', {
    "class": HIGHLIGHT_CLASS
  }, {
    id: id
  }, {
    priority: 5
  });
  writer.setCustomProperty('id', true, linkElement);
  return linkElement;
}
/**
 * Returns a safe URL based on a given value.
 *
 * A URL is considered safe if it is safe for the user (does not contain any malicious code).
 *
 * If a URL is considered unsafe, a simple `"#"` is returned.
 *
 * @protected
 * @param {*} url
 * @returns {String} Safe URL.
 */

function ensureSafeUrl(url) {
  url = String(url);
  return isSafeUrl(url) ? url : '#';
} // Checks whether the given URL is safe for the user (does not contain any malicious code).
//
// @param {String} url URL to check.

function isSafeUrl(url) {
  var normalizedUrl = url.replace(ATTRIBUTE_WHITESPACES, '');
  return normalizedUrl.match(SAFE_URL);
}
/**
 * Returns the {@link module:link/link~LinkConfig#decorators `config.link.decorators`} configuration processed
 * to respect the locale of the editor, i.e. to display the {@link module:link/link~LinkDecoratorManualDefinition label}
 * in the correct language.
 *
 * **Note**: Only the few most commonly used labels are translated automatically. Other labels should be manually
 * translated in the {@link module:link/link~LinkConfig#decorators `config.link.decorators`} configuration.
 *
 * @param {module:utils/locale~Locale#t} t shorthand for {@link module:utils/locale~Locale#t Locale#t}
 * @param {Array.<module:link/link~LinkDecoratorDefinition>} The decorator reference
 * where the label values should be localized.
 * @returns {Array.<module:link/link~LinkDecoratorDefinition>}
 */


function getLocalizedDecorators(t, decorators) {
  var localizedDecoratorsLabels = {
    'Open in a new tab': t('Open in a new tab'),
    'Downloadable': t('Downloadable')
  };
  decorators.forEach(function (decorator) {
    if (decorator.label && localizedDecoratorsLabels[decorator.label]) {
      decorator.label = localizedDecoratorsLabels[decorator.label];
    }

    return decorator;
  });
  return decorators;
}
/**
 * Converts an object with defined decorators to a normalized array of decorators. The `id` key is added for each decorator and
 * is used as the attribute's name in the model.
 *
 * @param {Object.<String, module:link/link~LinkDecoratorDefinition>} decorators
 * @returns {Array.<module:link/link~LinkDecoratorDefinition>}
 */

function normalizeDecorators(decorators) {
  var retArray = [];

  if (decorators) {
    for (var _i = 0, _Object$entries = Object.entries(decorators); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];

      var decorator = Object.assign({}, value, {
        id: "link".concat((0,lodash_es__WEBPACK_IMPORTED_MODULE_18__.default)(key))
      });
      retArray.push(decorator);
    }
  }

  return retArray;
}
/**
 * Returns `true` if the specified `element` is an image and it can be linked (the element allows having the `linkHref` attribute).
 *
 * @params {module:engine/model/element~Element|null} element
 * @params {module:engine/model/schema~Schema} schema
 * @returns {Boolean}
 */

function isImageAllowed(element, schema) {
  if (!element) {
    return false;
  }

  return element.is('element', 'image') && schema.checkAttribute('image', 'linkHref');
}
/**
 * Returns `true` if the specified `value` is an email.
 *
 * @params {String} value
 * @returns {Boolean}
 */

function isEmail(value) {
  return EMAIL_REG_EXP.test(value);
}
/**
 * Adds the protocol prefix to the specified `link` when:
 *
 * * it does not contain it already, and there is a {@link module:link/link~LinkConfig#defaultProtocol `defaultProtocol` }
 * configuration value provided,
 * * or the link is an email address.
 *
 *
 * @params {String} link
 * @params {String} defaultProtocol
 * @returns {Boolean}
 */

function addLinkProtocolIfApplicable(link, defaultProtocol) {
  var protocol = isEmail(link) ? 'mailto:' : defaultProtocol;
  var isProtocolNeeded = !!protocol && !PROTOCOL_REG_EXP.test(link);
  return link && isProtocolNeeded ? protocol + link : link;
}

/***/ }),

/***/ "./assets/ckeditor5-link/src/utils/automaticdecorators.js":
/*!****************************************************************!*\
  !*** ./assets/ckeditor5-link/src/utils/automaticdecorators.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AutomaticDecorators)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var ckeditor5_src_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ckeditor5/src/utils */ "./node_modules/ckeditor5/src/utils.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module link/utils
 */

/**
 * Helper class that ties together all {@link module:link/link~LinkDecoratorAutomaticDefinition} and provides
 * the {@link module:engine/conversion/downcasthelpers~DowncastHelpers#attributeToElement downcast dispatchers} for them.
 */

var AutomaticDecorators = /*#__PURE__*/function () {
  function AutomaticDecorators() {
    _classCallCheck(this, AutomaticDecorators);

    /**
     * Stores the definition of {@link module:link/link~LinkDecoratorAutomaticDefinition automatic decorators}.
     * This data is used as a source for a downcast dispatcher to create a proper conversion to output data.
     *
     * @private
     * @type {Set}
     */
    this._definitions = new Set();
  }
  /**
   * Gives information about the number of decorators stored in the {@link module:link/utils~AutomaticDecorators} instance.
   *
   * @readonly
   * @protected
   * @type {Number}
   */


  _createClass(AutomaticDecorators, [{
    key: "length",
    get: function get() {
      return this._definitions.size;
    }
    /**
     * Adds automatic decorator objects or an array with them to be used during downcasting.
     *
     * @param {module:link/link~LinkDecoratorAutomaticDefinition|Array.<module:link/link~LinkDecoratorAutomaticDefinition>} item
     * A configuration object of automatic rules for decorating links. It might also be an array of such objects.
     */

  }, {
    key: "add",
    value: function add(item) {
      var _this = this;

      if (Array.isArray(item)) {
        item.forEach(function (item) {
          return _this._definitions.add(item);
        });
      } else {
        this._definitions.add(item);
      }
    }
    /**
     * Provides the conversion helper used in the {@link module:engine/conversion/downcasthelpers~DowncastHelpers#add} method.
     *
     * @returns {Function} A dispatcher function used as conversion helper
     * in {@link module:engine/conversion/downcasthelpers~DowncastHelpers#add}.
     */

  }, {
    key: "getDispatcher",
    value: function getDispatcher() {
      var _this2 = this;

      return function (dispatcher) {
        dispatcher.on('attribute:linkHref', function (evt, data, conversionApi) {
          // There is only test as this behavior decorates links and
          // it is run before dispatcher which actually consumes this node.
          // This allows on writing own dispatcher with highest priority,
          // which blocks both native converter and this additional decoration.
          if (!conversionApi.consumable.test(data.item, 'attribute:linkHref')) {
            return;
          }

          var viewWriter = conversionApi.writer;
          var viewSelection = viewWriter.document.selection;

          var _iterator = _createForOfIteratorHelper(_this2._definitions),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var item = _step.value;
              var viewElement = viewWriter.createAttributeElement('a', item.attributes, {
                priority: 5
              });
              viewWriter.setCustomProperty('link', true, viewElement);

              if (item.callback(data.attributeNewValue)) {
                if (data.item.is('selection')) {
                  viewWriter.wrap(viewSelection.getFirstRange(), viewElement);
                } else {
                  viewWriter.wrap(conversionApi.mapper.toViewRange(data.range), viewElement);
                }
              } else {
                viewWriter.unwrap(conversionApi.mapper.toViewRange(data.range), viewElement);
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }, {
          priority: 'high'
        });
      };
    }
    /**
     * Provides the conversion helper used in the {@link module:engine/conversion/downcasthelpers~DowncastHelpers#add} method
     * when linking images.
     *
     * @returns {Function} A dispatcher function used as conversion helper
     * in {@link module:engine/conversion/downcasthelpers~DowncastHelpers#add}.
     */

  }, {
    key: "getDispatcherForLinkedImage",
    value: function getDispatcherForLinkedImage() {
      var _this3 = this;

      return function (dispatcher) {
        dispatcher.on('attribute:linkHref:image', function (evt, data, conversionApi) {
          var viewFigure = conversionApi.mapper.toViewElement(data.item);
          var linkInImage = Array.from(viewFigure.getChildren()).find(function (child) {
            return child.name === 'a';
          });

          var _iterator2 = _createForOfIteratorHelper(_this3._definitions),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var item = _step2.value;
              var attributes = (0,ckeditor5_src_utils__WEBPACK_IMPORTED_MODULE_16__.toMap)(item.attributes);

              if (item.callback(data.attributeNewValue)) {
                var _iterator3 = _createForOfIteratorHelper(attributes),
                    _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var _step3$value = _slicedToArray(_step3.value, 2),
                        key = _step3$value[0],
                        val = _step3$value[1];

                    if (key === 'class') {
                      conversionApi.writer.addClass(val, linkInImage);
                    } else {
                      conversionApi.writer.setAttribute(key, val, linkInImage);
                    }
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              } else {
                var _iterator4 = _createForOfIteratorHelper(attributes),
                    _step4;

                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    var _step4$value = _slicedToArray(_step4.value, 2),
                        _key = _step4$value[0],
                        _val = _step4$value[1];

                    if (_key === 'class') {
                      conversionApi.writer.removeClass(_val, linkInImage);
                    } else {
                      conversionApi.writer.removeAttribute(_key, linkInImage);
                    }
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        });
      };
    }
  }]);

  return AutomaticDecorators;
}();



/***/ }),

/***/ "./assets/ckeditor5-link/src/utils/manualdecorator.js":
/*!************************************************************!*\
  !*** ./assets/ckeditor5-link/src/utils/manualdecorator.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ManualDecorator)
/* harmony export */ });
/* harmony import */ var ckeditor5_src_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ckeditor5/src/utils */ "./node_modules/ckeditor5/src/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module link/utils
 */

/**
 * Helper class that stores manual decorators with observable {@link module:link/utils~ManualDecorator#value}
 * to support integration with the UI state. An instance of this class is a model with the state of individual manual decorators.
 * These decorators are kept as collections in {@link module:link/linkcommand~LinkCommand#manualDecorators}.
 *
 * @mixes module:utils/observablemixin~ObservableMixin
 */

var ManualDecorator =
/**
 * Creates a new instance of {@link module:link/utils~ManualDecorator}.
 *
 * @param {Object} config
 * @param {String} config.id The name of the attribute used in the model that represents a given manual decorator.
 * For example: `'linkIsExternal'`.
 * @param {String} config.label The label used in the user interface to toggle the manual decorator.
 * @param {Object} config.attributes A set of attributes added to output data when the decorator is active for a specific link.
 * Attributes should keep the format of attributes defined in {@link module:engine/view/elementdefinition~ElementDefinition}.
 * @param {Boolean} [config.defaultValue] Controls whether the decorator is "on" by default.
 */
function ManualDecorator(_ref) {
  var id = _ref.id,
      label = _ref.label,
      attributes = _ref.attributes,
      defaultValue = _ref.defaultValue;

  _classCallCheck(this, ManualDecorator);

  /**
   * An ID of a manual decorator which is the name of the attribute in the model, for example: 'linkManualDecorator0'.
   *
   * @type {String}
   */
  this.id = id;
  /**
   * The value of the current manual decorator. It reflects its state from the UI.
   *
   * @observable
   * @member {Boolean} module:link/utils~ManualDecorator#value
   */

  this.set('value');
  /**
   * The default value of manual decorator.
   *
   * @type {Boolean}
   */

  this.defaultValue = defaultValue;
  /**
   * The label used in the user interface to toggle the manual decorator.
   *
   * @type {String}
   */

  this.label = label;
  /**
   * A set of attributes added to downcasted data when the decorator is activated for a specific link.
   * Attributes should be added in a form of attributes defined in {@link module:engine/view/elementdefinition~ElementDefinition}.
   *
   * @type {Object}
   */

  this.attributes = attributes;
};


(0,ckeditor5_src_utils__WEBPACK_IMPORTED_MODULE_0__.mix)(ManualDecorator, ckeditor5_src_utils__WEBPACK_IMPORTED_MODULE_0__.ObservableMixin);

/***/ }),

/***/ "./assets/texttemplating.js":
/*!**********************************!*\
  !*** ./assets/texttemplating.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TextTemplating)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.anchor.js */ "./node_modules/core-js/modules/es.string.anchor.js");
/* harmony import */ var core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _ckeditor_ckeditor5_core_src_plugin__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ckeditor/ckeditor5-core/src/plugin */ "./node_modules/@ckeditor/ckeditor5-core/src/plugin.js");
/* harmony import */ var _ckeditor_ckeditor5_typing_src_textwatcher__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ckeditor/ckeditor5-typing/src/textwatcher */ "./node_modules/@ckeditor/ckeditor5-typing/src/textwatcher.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/escapeRegExp.js");
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



 // All named transformations.

var TRANSFORMATIONS = {
  // Common symbols:
  copyright: {
    from: '(c)',
    to: '©'
  },
  registeredTrademark: {
    from: '(r)',
    to: '®'
  },
  trademark: {
    from: '(tm)',
    to: '™'
  },
  // Mathematical:
  oneHalf: {
    from: '1/2',
    to: '½'
  },
  oneThird: {
    from: '1/3',
    to: '⅓'
  },
  twoThirds: {
    from: '2/3',
    to: '⅔'
  },
  oneForth: {
    from: '1/4',
    to: '¼'
  },
  threeQuarters: {
    from: '3/4',
    to: '¾'
  },
  lessThanOrEqual: {
    from: '<=',
    to: '≤'
  },
  greaterThanOrEqual: {
    from: '>=',
    to: '≥'
  },
  notEqual: {
    from: '!=',
    to: '≠'
  },
  arrowLeft: {
    from: '<-',
    to: '←'
  },
  arrowRight: {
    from: '->',
    to: '→'
  },
  // Typography:
  horizontalEllipsis: {
    from: '...',
    to: '…'
  },
  enDash: {
    from: /(^| )(--)( )$/,
    to: [null, '–', null]
  },
  emDash: {
    from: /(^| )(---)( )$/,
    to: [null, '—', null]
  },
  // Quotations:
  // English, US
  quotesPrimary: {
    from: buildQuotesRegExp('"'),
    to: [null, '“', null, '”']
  },
  quotesSecondary: {
    from: buildQuotesRegExp('\''),
    to: [null, '‘', null, '’']
  },
  // English, UK
  quotesPrimaryEnGb: {
    from: buildQuotesRegExp('\''),
    to: [null, '‘', null, '’']
  },
  quotesSecondaryEnGb: {
    from: buildQuotesRegExp('"'),
    to: [null, '“', null, '”']
  },
  // Polish
  quotesPrimaryPl: {
    from: buildQuotesRegExp('"'),
    to: [null, '„', null, '”']
  },
  quotesSecondaryPl: {
    from: buildQuotesRegExp('\''),
    to: [null, '‚', null, '’']
  }
}; // Transformation groups.

var TRANSFORMATION_GROUPS = {
  symbols: ['copyright', 'registeredTrademark', 'trademark'],
  mathematical: ['oneHalf', 'oneThird', 'twoThirds', 'oneForth', 'threeQuarters', 'lessThanOrEqual', 'greaterThanOrEqual', 'notEqual', 'arrowLeft', 'arrowRight'],
  typography: ['horizontalEllipsis', 'enDash', 'emDash'],
  quotes: ['quotesPrimary', 'quotesSecondary']
}; // A set of default transformations provided by the feature.

var DEFAULT_TRANSFORMATIONS = ['symbols', 'mathematical', 'typography', 'quotes'];
/**
 * The text transformation plugin.
 *
 * @extends module:core/plugin~Plugin
 */

var TextTemplating = /*#__PURE__*/function (_Plugin) {
  _inherits(TextTemplating, _Plugin);

  var _super = _createSuper(TextTemplating);

  /**
   * @inheritDoc
   */
  function TextTemplating(editor) {
    var _this;

    _classCallCheck(this, TextTemplating);

    _this = _super.call(this, editor);
    editor.config.define('typing', {
      transformations: {
        include: DEFAULT_TRANSFORMATIONS
      }
    });
    return _this;
  }
  /**
   * @inheritDoc
   */


  _createClass(TextTemplating, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      var model = this.editor.model;
      var modelSelection = model.document.selection;
      modelSelection.on('change:range', function () {
        // Disable plugin when selection is inside a code block.
        _this2.isEnabled = !modelSelection.anchor.parent.is('element', 'codeBlock');
      });

      this._enableTransformationWatchers();
    }
    /**
     * Create new TextWatcher listening to the editor for typing and selection events.
     *
     * @private
     */

  }, {
    key: "_enableTransformationWatchers",
    value: function _enableTransformationWatchers() {
      var editor = this.editor;
      var model = editor.model;
      var input = editor.plugins.get('Input');
      var normalizedTransformations = normalizeTransformations(editor.config.get('typing.transformations'));

      var testCallback = function testCallback(text) {
        var _iterator = _createForOfIteratorHelper(normalizedTransformations),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var normalizedTransformation = _step.value;
            var from = normalizedTransformation.from;
            var match = from.test(text);

            if (match) {
              return {
                normalizedTransformation: normalizedTransformation
              };
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      };

      var watcherCallback = function watcherCallback(evt, data) {
        if (!input.isInput(data.batch)) {
          return;
        }

        var _data$normalizedTrans = data.normalizedTransformation,
            from = _data$normalizedTrans.from,
            to = _data$normalizedTrans.to;
        var matches = from.exec(data.text);
        var replaces = to(matches.slice(1));
        var matchedRange = data.range;
        var changeIndex = matches.index;
        model.enqueueChange(function (writer) {
          for (var i = 1; i < matches.length; i++) {
            var match = matches[i];
            var replaceWith = replaces[i - 1];
            console.log(match);

            if (replaceWith == null) {
              changeIndex += match.length;
              continue;
            }

            var replacePosition = matchedRange.start.getShiftedBy(changeIndex);
            var replaceRange = model.createRange(replacePosition, replacePosition.getShiftedBy(match.length));
            var attributes = getTextAttributesAfterPosition(replacePosition);
            var options = {
              range: replaceRange,
              usingOperation: false
            };
            writer.addMarker(match, options);
            model.insertContent(writer.createText(replaceWith, attributes), replaceRange);
            console.log(editor.model.markers);
            changeIndex += replaceWith.length;
          }
        });
      };

      var watcher = new _ckeditor_ckeditor5_typing_src_textwatcher__WEBPACK_IMPORTED_MODULE_28__.default(editor.model, testCallback);
      watcher.on('matched:data', watcherCallback);
      watcher.bind('isEnabled').to(this); // watcher.on( 'unmatched', unwatcherCallback );
      // const pattern = /(\\[{2})([a-z]+)(\\]{2})$/;
      //
      // const matcher = new Matcher( pattern );
      // var childCount = editor.model.document.getRoot().childCount;
      // if (editor.model.document.getRoot().childCount > 0){
      // 	let found = matcher.matchAll(editor.model.document.getRoot().getChild(childCount -1));
      // 	console.log(editor.model.document.getRoot().getChild(childCount -1));
      // 	console.log (matcher.matchAll(editor.model.document.getRoot().getChild(childCount -1)));
      //
      // }
    }
  }], [{
    key: "pluginName",
    get:
    /**
     * @inheritDoc
     */
    function get() {
      return 'TextTemplating';
    }
  }]);

  return TextTemplating;
}(_ckeditor_ckeditor5_core_src_plugin__WEBPACK_IMPORTED_MODULE_27__.default); // Normalizes the configuration `from` parameter value.
// The normalized value for the `from` parameter is a RegExp instance. If the passed `from` is already a RegExp instance,
// it is returned unchanged.
//
// @param {String|RegExp} from
// @returns {RegExp}




function normalizeFrom(from) {
  if (typeof from == 'string') {
    return new RegExp("(".concat((0,lodash_es__WEBPACK_IMPORTED_MODULE_29__.default)(from), ")$"));
  } // `from` is already a regular expression.


  return from;
} // Normalizes the configuration `to` parameter value.
// The normalized value for the `to` parameter is a function that takes an array and returns an array. See more in the
// configuration description. If the passed `to` is already a function, it is returned unchanged.
//
// @param {String|Array.<null|String>|Function} to
// @returns {Function}


function normalizeTo(to) {
  if (typeof to == 'string') {
    return function () {
      return [to];
    };
  } else if (to instanceof Array) {
    return function () {
      return to;
    };
  } // `to` is already a function.


  return to;
} // For given `position` returns attributes for the text that is after that position.
// The text can be in the same text node as the position (`foo[]bar`) or in the next text node (`foo[]<$text bold="true">bar</$text>`).
//
// @param {module:engine/model/position~Position} position
// @returns {Iterable.<*>}


function getTextAttributesAfterPosition(position) {
  var textNode = position.textNode ? position.textNode : position.nodeAfter;
  return textNode.getAttributes();
} // Returns a RegExp pattern string that detects a sentence inside a quote.
//
// @param {String} quoteCharacter The character to create a pattern for.
// @returns {String}


function buildQuotesRegExp(quoteCharacter) {
  return new RegExp("(^|\\s)(".concat(quoteCharacter, ")([^").concat(quoteCharacter, "]*)(").concat(quoteCharacter, ")$"));
} // Reads text transformation config and returns normalized array of transformations objects.
//
// @param {module:typing/textTemplating~TextTemplatingDescription} config
// @returns {Array.<{from:String,to:Function}>}


function normalizeTransformations(config) {
  var extra = config.extra || [];
  var remove = config.remove || [];

  var isNotRemoved = function isNotRemoved(transformation) {
    return !remove.includes(transformation);
  };

  var configured = config.include.concat(extra).filter(isNotRemoved);
  return expandGroupsAndRemoveDuplicates(configured).filter(isNotRemoved) // Filter out 'remove' transformations as they might be set in group
  .map(function (transformation) {
    return TRANSFORMATIONS[transformation] || transformation;
  }).map(function (transformation) {
    return {
      from: normalizeFrom(transformation.from),
      to: normalizeTo(transformation.to)
    };
  });
} // Reads definitions and expands named groups if needed to transformation names.
// This method also removes duplicated named transformations if any.
//
// @param {Array.<String|Object>} definitions
// @returns {Array.<String|Object>}


function expandGroupsAndRemoveDuplicates(definitions) {
  // Set is using to make sure that transformation names are not duplicated.
  var definedTransformations = new Set();

  var _iterator2 = _createForOfIteratorHelper(definitions),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var transformationOrGroup = _step2.value;

      if (TRANSFORMATION_GROUPS[transformationOrGroup]) {
        var _iterator3 = _createForOfIteratorHelper(TRANSFORMATION_GROUPS[transformationOrGroup]),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var transformation = _step3.value;
            definedTransformations.add(transformation);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      } else {
        definedTransformations.add(transformationOrGroup);
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return Array.from(definedTransformations);
}

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/ckeditor5-link/theme/template.css":
/*!**************************************************!*\
  !*** ./assets/ckeditor5-link/theme/template.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/ckeditor5-link/theme/templateactions.css":
/*!*********************************************************!*\
  !*** ./assets/ckeditor5-link/theme/templateactions.css ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/ckeditor5-link/theme/templateform.css":
/*!******************************************************!*\
  !*** ./assets/ckeditor5-link/theme/templateform.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/ckeditor5-link/theme/icons/temlateIcon.svg":
/*!***********************************************************!*\
  !*** ./assets/ckeditor5-link/theme/icons/temlateIcon.svg ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generated by IcoMoon.io -->\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\">\n<path fill=\"#444444\" d=\"M2.1 3.1c0.2 1.3 0.4 1.6 0.4 2.9 0 0.8-1.5 1.5-1.5 1.5v1c0 0 1.5 0.7 1.5 1.5 0 1.3-0.2 1.6-0.4 2.9-0.3 2.1 0.8 3.1 1.8 3.1s2.1 0 2.1 0v-2c0 0-1.8 0.2-1.8-1 0-0.9 0.2-0.9 0.4-2.9 0.1-0.9-0.5-1.6-1.1-2.1 0.6-0.5 1.2-1.1 1.1-2-0.3-2-0.4-2-0.4-2.9 0-1.2 1.8-1.1 1.8-1.1v-2c0 0-1 0-2.1 0s-2.1 1-1.8 3.1z\"></path>\n<path fill=\"#444444\" d=\"M13.9 3.1c-0.2 1.3-0.4 1.6-0.4 2.9 0 0.8 1.5 1.5 1.5 1.5v1c0 0-1.5 0.7-1.5 1.5 0 1.3 0.2 1.6 0.4 2.9 0.3 2.1-0.8 3.1-1.8 3.1s-2.1 0-2.1 0v-2c0 0 1.8 0.2 1.8-1 0-0.9-0.2-0.9-0.4-2.9-0.1-0.9 0.5-1.6 1.1-2.1-0.6-0.5-1.2-1.1-1.1-2 0.2-2 0.4-2 0.4-2.9 0-1.2-1.8-1.1-1.8-1.1v-2c0 0 1 0 2.1 0s2.1 1 1.8 3.1z\"></path>\n</svg>\n");

/***/ }),

/***/ "./assets/ckeditor5-link/theme/icons/unlink.svg":
/*!******************************************************!*\
  !*** ./assets/ckeditor5-link/theme/icons/unlink.svg ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m11.077 15 .991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184zm4.919 10.562-1.414 1.414a.75.75 0 1 1-1.06-1.06l1.414-1.415-1.415-1.414a.75.75 0 0 1 1.061-1.06l1.414 1.414 1.414-1.415a.75.75 0 0 1 1.061 1.061l-1.414 1.414 1.414 1.415a.75.75 0 0 1-1.06 1.06l-1.415-1.414z\"/></svg>");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-6ea37d","vendors-node_modules_core-js_internals_create-html_js-node_modules_core-js_internals_string-h-3e7116","vendors-node_modules_ckeditor_ckeditor5-adapter-ckfinder_src_uploadadapter_js-node_modules_ck-1c8385"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vfC9cXC4oanx0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9kb2NlZGl0b3JfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvZmlsZWljb25fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvZm9sZGVyX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL3J1bGVfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvRG9jRGVjb3VwbGVkRWRpdG9yLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY2tlZGl0b3I1LWxpbmsvc3JjL2NhbmNlbHRlbXBsYXRlY29tbWFuZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY2tlZGl0b3I1LWxpbmsvc3JjL3RlbXBsYXRlLWNvbW1hbmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NrZWRpdG9yNS1saW5rL3NyYy90ZW1wbGF0ZS1lZGl0aW5nLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ja2VkaXRvcjUtbGluay9zcmMvdGVtcGxhdGUtdWkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NrZWRpdG9yNS1saW5rL3NyYy90ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY2tlZGl0b3I1LWxpbmsvc3JjL3VpL3RlbXBsYXRlLWFjdGlvbnMtdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY2tlZGl0b3I1LWxpbmsvc3JjL3VpL3RlbXBsYXRlLWZvcm0tdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY2tlZGl0b3I1LWxpbmsvc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ja2VkaXRvcjUtbGluay9zcmMvdXRpbHMvYXV0b21hdGljZGVjb3JhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY2tlZGl0b3I1LWxpbmsvc3JjL3V0aWxzL21hbnVhbGRlY29yYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdGV4dHRlbXBsYXRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzPzNmYmEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NrZWRpdG9yNS1saW5rL3RoZW1lL3RlbXBsYXRlLmNzcz80MDUyIiwid2VicGFjazovLy8uL2Fzc2V0cy9ja2VkaXRvcjUtbGluay90aGVtZS90ZW1wbGF0ZWFjdGlvbnMuY3NzP2ZiNzUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NrZWRpdG9yNS1saW5rL3RoZW1lL3RlbXBsYXRlZm9ybS5jc3M/YzgxMCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY2tlZGl0b3I1LWxpbmsvdGhlbWUvaWNvbnMvdGVtbGF0ZUljb24uc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9ja2VkaXRvcjUtbGluay90aGVtZS9pY29ucy91bmxpbmsuc3ZnIl0sIm5hbWVzIjpbIkRlY291cGxlZEVkaXRvciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInR5cGluZyIsInRyYW5zZm9ybWF0aW9ucyIsImV4dHJhIiwiZnJvbSIsInRvIiwibWF0Y2hlcyIsImNoYW5nZVRlbXBsYXRlSXRlbSIsInRoZW4iLCJlZGl0b3IiLCJDS0VkaXRvckluc3BlY3RvciIsInRvb2xiYXJDb250YWluZXIiLCJhcHBlbmRDaGlsZCIsInVpIiwidmlldyIsInRvb2xiYXIiLCJlbGVtZW50Iiwid2luZG93IiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwicmFuZ2UiLCJjb2xsYXBzZWQiLCJtYXRjaENhbGxiYWNrIiwidGV4dCIsIm9mZnNldCIsInBhdHRlcm4iLCJtYXRjaCIsInNsaWNlIiwic3RhcnQiLCJpbmRleCIsImVuZCIsIm1hdGNoSW5mbyIsImNhbGxiYWNrIiwiZGF0YSIsIlBMQUNFSE9MREVSUyIsImZpbHRlciIsIml0ZW0iLCJpdGVtTmFtZSIsIm5hbWUiLCJpbmRleE9mIiwicXVlcnkiLCJ0b0xvd2VyQ2FzZSIsImlkIiwicXVlc3Rpb24iLCJ0eXBlIiwiQ29udHJvbGxlciIsImxvZyIsImZpbGVuYW1lIiwiZ2V0SWNvbiIsImZpbGVOYW1lIiwicHJldHR5RmlsZUljb25zIiwiZ2V0QXR0cmlidXRlIiwiaW1nIiwiY3JlYXRlRWxlbWVudCIsInNyYyIsInNldEF0dHJpYnV0ZSIsIlN0cmluZyIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiYXJnIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJqUXVlcnkiLCJyZWFkeSIsIiQiLCJtb3ZlTEZvbGRlckxpc3QiLCJhamF4IiwibWV0aG9kIiwidXJsIiwiZm9sZGVyTW92aW5nSW4iLCJ1c2VyX2NvZGUiLCJkb25lIiwicmVzIiwiZW1wdHkiLCJyZXN1bHRzIiwiYWRkQ2xhc3MiLCJwYXJlbnRfZm9sZGVyIiwiYXBwZW5kVG8iLCJlYWNoIiwicm93cyIsImkiLCJsaXN0SXRlbSIsImxpRm9sZGVyIiwiYXR0ciIsImZvbGRlclRvTW92ZSIsImNvZGUiLCJsYWJlbCIsInBhdGgiLCJyZXBsYWNlIiwibW92ZUZvcm0iLCJzdWJtaXRCdXR0b24iLCJQcmlzbSIsImdldE9wZXJhdG9ycyIsIm9wZXJhdG9ycyIsInJ1bGVBdXRvY29tcGxldGUiLCJ0cmlidXRlIiwiVHJpYnV0ZSIsInZhbHVlcyIsInNlbGVjdFRlbXBsYXRlIiwib3JpZ2luYWwiLCJrZXkiLCJtZW51SXRlbVRlbXBsYXRlIiwic3RyaW5nIiwiYXV0b2NvbXBsZXRlTW9kZSIsImF0dGFjaCIsImdldEVsZW1lbnRCeUlkIiwicnVsZSIsImZvY3VzIiwiaW5uZXJIVE1MIiwidmFsdWUiLCJzeW5jX3Njcm9sbCIsInByZXZlbnREZWZhdWx0IiwiYmVmb3JlX3RhYiIsInNlbGVjdGlvblN0YXJ0IiwiYWZ0ZXJfdGFiIiwic2VsZWN0aW9uRW5kIiwibGVuZ3RoIiwiY3Vyc29yX3BvcyIsInJlc3VsdF9lbGVtZW50Iiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsImNiIiwiVVJMIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0Iiwib3BlbiIsInNlbmQiLCJydWxlVmFycyIsImJvZHkiLCJleHByZXNzaW9uIiwiZXhwcl9hcmciLCJnZXRSdWxlVmFycyIsImNoaXBzIiwic2hvd0FsZXJ0cyIsInNldFJlcXVlc3RIZWFkZXIiLCJzdHJpbmdpZnkiLCJjbGFzc05hbWUiLCJzY29wZSIsImFsZXJ0Iiwic3R5bGUiLCJkaXNwbGF5Iiwic2V0VGltZW91dCIsInJlbW92ZUF0dHJpYnV0ZSIsImFyZ3MiLCJwdXNoIiwiRGVjb3VwbGVkRWRpdG9yQmFzZSIsImJ1aWx0aW5QbHVnaW5zIiwiRXNzZW50aWFscyIsIkFsaWdubWVudCIsIkZvbnRTaXplIiwiRm9udEZhbWlseSIsIkZvbnRDb2xvciIsIkZvbnRCYWNrZ3JvdW5kQ29sb3IiLCJVcGxvYWRBZGFwdGVyIiwiQXV0b2Zvcm1hdCIsIkJvbGQiLCJJdGFsaWMiLCJTdHJpa2V0aHJvdWdoIiwiVW5kZXJsaW5lIiwiQmxvY2tRdW90ZSIsIkNLRmluZGVyIiwiRWFzeUltYWdlIiwiSGVhZGluZyIsIkltYWdlIiwiSW1hZ2VDYXB0aW9uIiwiSW1hZ2VTdHlsZSIsIkltYWdlVG9vbGJhciIsIkltYWdlVXBsb2FkIiwiSW5kZW50IiwiSW5kZW50QmxvY2siLCJMaW5rIiwiTGlzdCIsIk1lZGlhRW1iZWQiLCJQYXJhZ3JhcGgiLCJQYXN0ZUZyb21PZmZpY2UiLCJUYWJsZSIsIlRhYmxlVG9vbGJhciIsIlRlbXBsYXRlIiwiQ2xvdWRTZXJ2aWNlcyIsImRlZmF1bHRDb25maWciLCJpdGVtcyIsImltYWdlIiwic3R5bGVzIiwidGFibGUiLCJjb250ZW50VG9vbGJhciIsImxhbmd1YWdlIiwicmVxdWlyZSIsImFwcCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJDYW5jZWxUZW1wbGF0ZUNvbW1hbmQiLCJtb2RlbCIsImRvYyIsInNlbGVjdGVkRWxlbWVudCIsImZpcnN0Iiwic2VsZWN0aW9uIiwiZ2V0U2VsZWN0ZWRCbG9ja3MiLCJpc0ltYWdlQWxsb3dlZCIsInNjaGVtYSIsImlzRW5hYmxlZCIsImNoZWNrQXR0cmlidXRlIiwiY2hlY2tBdHRyaWJ1dGVJblNlbGVjdGlvbiIsImxpbmtDb21tYW5kIiwiY29tbWFuZHMiLCJnZXQiLCJjaGFuZ2UiLCJ3cml0ZXIiLCJyYW5nZXNUb1VubGluayIsImlzQ29sbGFwc2VkIiwiZmluZEF0dHJpYnV0ZVJhbmdlIiwiZ2V0Rmlyc3RQb3NpdGlvbiIsImdldFZhbGlkUmFuZ2VzIiwiZ2V0UmFuZ2VzIiwibWFudWFsRGVjb3JhdG9ycyIsIm1hbnVhbERlY29yYXRvciIsIkNvbW1hbmQiLCJUZW1wbGF0ZUNvbW1hbmQiLCJDb2xsZWN0aW9uIiwiX2dldERlY29yYXRvclN0YXRlRnJvbU1vZGVsIiwidGVtcGxhdGVWYXIiLCJtYW51YWxEZWNvcmF0b3JJZHMiLCJ0cnV0aHlNYW51YWxEZWNvcmF0b3JzIiwiZmFsc3lNYW51YWxEZWNvcmF0b3JzIiwicG9zaXRpb24iLCJoYXNBdHRyaWJ1dGUiLCJ2YXJSYW5nZSIsInNldEF0dHJpYnV0ZVByb3BlcnRpZXMiLCJmb3JFYWNoIiwic2V0U2VsZWN0aW9uIiwiY3JlYXRlUG9zaXRpb25BZnRlciIsIm5vZGVCZWZvcmUiLCJhdHRyaWJ1dGVzIiwidG9NYXAiLCJnZXRBdHRyaWJ1dGVzIiwic2V0IiwiaW5zZXJ0Q29udGVudCIsImNyZWF0ZVRleHQiLCJwb3NpdGlvbkFmdGVyIiwicmVtb3ZlU2VsZWN0aW9uQXR0cmlidXRlIiwicmFuZ2VzIiwiYWxsb3dlZFJhbmdlcyIsImNyZWF0ZVJhbmdlT24iLCJyYW5nZXNUb1VwZGF0ZSIsIl9pc1JhbmdlVG9VcGRhdGUiLCJkZWNvcmF0b3JOYW1lIiwiYWxsb3dlZFJhbmdlIiwiY29udGFpbnNSYW5nZSIsIkhJR0hMSUdIVF9TRUxFQ1RFRF9DTEFTUyIsIkRFQ09SQVRPUl9NQU5VQUwiLCJUZW1wbGF0ZUVkaXRpbmciLCJjb25maWciLCJkZWZpbmUiLCJhZGRUYXJnZXRUb0V4dGVybmFsTGlua3MiLCJleHRlbmQiLCJhbGxvd0F0dHJpYnV0ZXMiLCJjb252ZXJzaW9uIiwiYXR0cmlidXRlVG9FbGVtZW50IiwiY3JlYXRlVGVtcGxhdGVFbGVtZW50IiwiY29udmVyc2lvbkFwaSIsImVsZW1lbnRUb0F0dHJpYnV0ZSIsInZpZXdFbGVtZW50IiwiYWRkIiwidHdvU3RlcENhcmV0TW92ZW1lbnRQbHVnaW4iLCJwbHVnaW5zIiwiVHdvU3RlcENhcmV0TW92ZW1lbnQiLCJyZWdpc3RlckF0dHJpYnV0ZSIsImlubGluZUhpZ2hsaWdodCIsIl9lbmFibGVJbnNlcnRDb250ZW50U2VsZWN0aW9uQXR0cmlidXRlc0ZpeGVyIiwiX2VuYWJsZUNsaWNraW5nQWZ0ZXJMaW5rIiwiX2VuYWJsZVR5cGluZ092ZXJMaW5rIiwiX2hhbmRsZURlbGV0ZUNvbnRlbnRBZnRlckxpbmsiLCJtYW51YWxEZWNvcmF0b3JEZWZpbml0aW9ucyIsImNvbW1hbmQiLCJkZWNvcmF0b3IiLCJNYW51YWxEZWNvcmF0b3IiLCJtYW51YWxEZWNvcmF0b3JOYW1lIiwiY3JlYXRlQXR0cmlidXRlRWxlbWVudCIsInByaW9yaXR5Iiwic2V0Q3VzdG9tUHJvcGVydHkiLCJsaXN0ZW5UbyIsImFuY2hvciIsIm5vZGVBZnRlciIsInJlbW92ZUxpbmtBdHRyaWJ1dGVzRnJvbVNlbGVjdGlvbiIsImVkaXRpbmciLCJhZGRPYnNlcnZlciIsIk1vdXNlT2JzZXJ2ZXIiLCJjbGlja2VkIiwibGlua1JhbmdlIiwiaXNUb3VjaGluZyIsInNlbGVjdGlvbkF0dHJpYnV0ZXMiLCJkZWxldGVkQ29udGVudCIsImlzVHlwaW5nIiwic2hvdWxkQ29weUF0dHJpYnV0ZXMiLCJldnQiLCJhdHRyaWJ1dGUiLCJzaG91bGRQcmVzZXJ2ZUF0dHJpYnV0ZXMiLCJoYXNCYWNrc3BhY2VQcmVzc2VkIiwiZG9tRXZlbnQiLCJrZXlDb2RlIiwia2V5Q29kZXMiLCJjb250YWluc1Bvc2l0aW9uIiwiaXNFcXVhbCIsImVucXVldWVDaGFuZ2UiLCJJbnB1dCIsIkNsaXBib2FyZFBpcGVsaW5lIiwiUGx1Z2luIiwiZmlyc3RQb3NpdGlvbiIsImxhc3RQb3NpdGlvbiIsImdldExhc3RQb3NpdGlvbiIsIm5vZGVBdEZpcnN0UG9zaXRpb24iLCJpcyIsIm5vZGVBdExhc3RQb3NpdGlvbiIsInRleHROb2RlIiwiY3JlYXRlUmFuZ2UiLCJpbnB1dCIsImlzSW5wdXQiLCJiYXRjaCIsIlZJU1VBTF9TRUxFQ1RJT05fTUFSS0VSX05BTUUiLCJUZW1wbGF0ZVVpIiwiQ2xpY2tPYnNlcnZlciIsImFjdGlvbnNWaWV3IiwiX2NyZWF0ZUFjdGlvbnNWaWV3IiwiZm9ybVZpZXciLCJfY3JlYXRlRm9ybVZpZXciLCJfYmFsbG9vbiIsIkNvbnRleHR1YWxCYWxsb29uIiwiX2NyZWF0ZVRvb2xiYXJMaW5rQnV0dG9uIiwiX2VuYWJsZVVzZXJCYWxsb29uSW50ZXJhY3Rpb25zIiwibWFya2VyVG9IaWdobGlnaHQiLCJjbGFzc2VzIiwibWFya2VyVG9FbGVtZW50IiwiZGVzdHJveSIsIlRlbXBsYXRlQWN0aW9uc1ZpZXciLCJsb2NhbGUiLCJ0ZW1wbGF0ZUNvbW1hbmQiLCJjYW5jZWxUZW1wbGF0ZUNvbW1hbmQiLCJiaW5kIiwiZWRpdEJ1dHRvblZpZXciLCJ1bmxpbmtCdXR0b25WaWV3IiwiX2FkZEZvcm1WaWV3IiwiZXhlY3V0ZSIsIl9oaWRlVUkiLCJrZXlzdHJva2VzIiwiY2FuY2VsIiwiTElOS19LRVlTVFJPS0UiLCJUZW1wbGF0ZUZvcm1WaWV3IiwibGFiZWxJbnB1dFZpZXciLCJmaWVsZFZpZXciLCJzYXZlQnV0dG9uVmlldyIsInR5cGVJbnB1dFZpZXciLCJidXR0b25WaWV3IiwiZ2V0RGVjb3JhdG9yU3dpdGNoZXNTdGF0ZSIsIl9jbG9zZUZvcm1WaWV3IiwidCIsImtleUV2dERhdGEiLCJfc2hvd1VJIiwiY29tcG9uZW50RmFjdG9yeSIsImJ1dHRvbiIsIkJ1dHRvblZpZXciLCJpY29uIiwiVGVtbGF0ZUljb24iLCJrZXlzdHJva2UiLCJ0b29sdGlwIiwiaXNUb2dnbGVhYmxlIiwidmlld0RvY3VtZW50IiwicGFyZW50TGluayIsIl9nZXRTZWxlY3RlZExpbmtFbGVtZW50IiwiX2FyZUFjdGlvbnNWaXNpYmxlIiwiZm9jdXNUcmFja2VyIiwiaXNGb2N1c2VkIiwiX2lzVUlWaXNpYmxlIiwiY2xpY2tPdXRzaWRlSGFuZGxlciIsImVtaXR0ZXIiLCJhY3RpdmF0b3IiLCJfaXNVSUluUGFuZWwiLCJjb250ZXh0RWxlbWVudHMiLCJfYXJlQWN0aW9uc0luUGFuZWwiLCJfZ2V0QmFsbG9vblBvc2l0aW9uRGF0YSIsIl9pc0Zvcm1JblBhbmVsIiwiZGlzYWJsZUNzc1RyYW5zaXRpb25zIiwidmlzaWJsZVZpZXciLCJzZWxlY3QiLCJlbmFibGVDc3NUcmFuc2l0aW9ucyIsInJlc3RvcmVNYW51YWxEZWNvcmF0b3JTdGF0ZXMiLCJ1bmRlZmluZWQiLCJfcmVtb3ZlRm9ybVZpZXciLCJyZW1vdmUiLCJfaGlkZUZha2VWaXN1YWxTZWxlY3Rpb24iLCJmb3JjZVZpc2libGUiLCJfc2hvd0Zha2VWaXN1YWxTZWxlY3Rpb24iLCJfYWRkQWN0aW9uc1ZpZXciLCJzaG93U3RhY2siLCJfc3RhcnRVcGRhdGluZ1VJIiwic3RvcExpc3RlbmluZyIsInByZXZTZWxlY3RlZExpbmsiLCJwcmV2U2VsZWN0aW9uUGFyZW50IiwiZ2V0U2VsZWN0aW9uUGFyZW50IiwidXBkYXRlIiwic2VsZWN0ZWRMaW5rIiwic2VsZWN0aW9uUGFyZW50IiwidXBkYXRlUG9zaXRpb24iLCJnZXRBbmNlc3RvcnMiLCJyZXZlcnNlIiwiZmluZCIsIm5vZGUiLCJoYXNWaWV3IiwidGFyZ2V0IiwibWFya2VycyIsImhhcyIsIm1hcmtlclZpZXdFbGVtZW50cyIsIkFycmF5IiwibWFwcGVyIiwibWFya2VyTmFtZVRvRWxlbWVudHMiLCJuZXdSYW5nZSIsImNyZWF0ZVBvc2l0aW9uQmVmb3JlIiwiZG9tQ29udmVydGVyIiwidmlld1JhbmdlVG9Eb20iLCJ0YXJnZXRMaW5rIiwiZ2V0Rmlyc3RSYW5nZSIsIm1hcFZpZXdUb0RvbSIsImZpbmRMaW5rRWxlbWVudEFuY2VzdG9yIiwiZ2V0VHJpbW1lZCIsInN0YXJ0TGluayIsImVuZExpbmsiLCJjcmVhdGVSYW5nZUluIiwidXBkYXRlTWFya2VyIiwiaXNBdEVuZCIsInN0YXJ0UG9zaXRpb24iLCJnZXRMYXN0TWF0Y2hpbmdQb3NpdGlvbiIsImlzQ29udGVudCIsImJvdW5kYXJpZXMiLCJhZGRNYXJrZXIiLCJ1c2luZ09wZXJhdGlvbiIsImFmZmVjdHNEYXRhIiwicmVtb3ZlTWFya2VyIiwiYW5jZXN0b3IiLCJpc0xpbmtFbGVtZW50IiwiRm9jdXNUcmFja2VyIiwiS2V5c3Ryb2tlSGFuZGxlciIsInByZXZpZXdCdXR0b25WaWV3IiwiX2NyZWF0ZVByZXZpZXdCdXR0b24iLCJfY3JlYXRlQnV0dG9uIiwidW5saW5rSWNvbiIsImljb25zIiwiX2ZvY3VzYWJsZXMiLCJWaWV3Q29sbGVjdGlvbiIsIl9mb2N1c0N5Y2xlciIsIkZvY3VzQ3ljbGVyIiwiZm9jdXNhYmxlcyIsImtleXN0cm9rZUhhbmRsZXIiLCJhY3Rpb25zIiwiZm9jdXNQcmV2aW91cyIsImZvY3VzTmV4dCIsInNldFRlbXBsYXRlIiwidGFnIiwidGFiaW5kZXgiLCJjaGlsZHJlbiIsImNoaWxkVmlld3MiLCJ2IiwiZm9jdXNGaXJzdCIsImV2ZW50TmFtZSIsImRlbGVnYXRlIiwiYmluZFRlbXBsYXRlIiwid2l0aFRleHQiLCJleHRlbmRUZW1wbGF0ZSIsImhyZWYiLCJlbnN1cmVTYWZlVXJsIiwicmVsIiwidGVtcGxhdGUiLCJldmVudExpc3RlbmVycyIsIlZpZXciLCJfY3JlYXRlVGV4dElucHV0IiwiX2NyZWF0ZURyb3BEb3duSW5wdXQiLCJjYW5jZWxCdXR0b25WaWV3IiwiX21hbnVhbERlY29yYXRvclN3aXRjaGVzIiwiX2NyZWF0ZU1hbnVhbERlY29yYXRvclN3aXRjaGVzIiwiX2NyZWF0ZUZvcm1DaGlsZHJlbiIsImNsYXNzTGlzdCIsImluamVjdENzc1RyYW5zaXRpb25EaXNhYmxlciIsInJlZHVjZSIsImFjY3VtdWxhdG9yIiwic3dpdGNoQnV0dG9uIiwiaXNPbiIsInN1Ym1pdEhhbmRsZXIiLCJsYWJlbGVkSW5wdXQiLCJMYWJlbGVkRmllbGRWaWV3IiwiY3JlYXRlTGFiZWxlZElucHV0VGV4dCIsImNyZWF0ZUxhYmVsZWREcm9wZG93biIsImxhYmVsZWRGaWVsZFZpZXciLCJ2aWV3VWlkIiwic3RhdHVzVWlkIiwiZHJvcGRvd25WaWV3IiwiY3JlYXRlRHJvcGRvd24iLCJTcGxpdEJ1dHRvblZpZXciLCJhcmlhRGVzY3JpYmVkQnlJZCIsImJ1dHRvbnMiLCJfY3JlYXRlRHJvcGRvd25CdXR0b24iLCJhZGRUb29sYmFyVG9Ecm9wZG93biIsInRvTWFueSIsImFyZUVuYWJsZWQiLCJzb21lIiwiYXJlQWN0aXZlIiwiZmluZEluZGV4IiwidG9vbGJhclZpZXciLCJpc1ZlcnRpY2FsIiwic3dpdGNoZXMiLCJjcmVhdGVDb2xsZWN0aW9uIiwiU3dpdGNoQnV0dG9uVmlldyIsImRlY29yYXRvclZhbHVlIiwiY29tbWFuZFZhbHVlIiwiZGVmYXVsdFZhbHVlIiwib24iLCJhZGRpdGlvbmFsQnV0dG9uc1ZpZXciLCJtYXAiLCJBVFRSSUJVVEVfV0hJVEVTUEFDRVMiLCJTQUZFX1VSTCIsIkVNQUlMX1JFR19FWFAiLCJQUk9UT0NPTF9SRUdfRVhQIiwiSElHSExJR0hUX0NMQVNTIiwiZ2V0Q3VzdG9tUHJvcGVydHkiLCJsaW5rRWxlbWVudCIsImlzU2FmZVVybCIsIm5vcm1hbGl6ZWRVcmwiLCJnZXRMb2NhbGl6ZWREZWNvcmF0b3JzIiwiZGVjb3JhdG9ycyIsImxvY2FsaXplZERlY29yYXRvcnNMYWJlbHMiLCJub3JtYWxpemVEZWNvcmF0b3JzIiwicmV0QXJyYXkiLCJPYmplY3QiLCJlbnRyaWVzIiwiYXNzaWduIiwidXBwZXJGaXJzdCIsImlzRW1haWwiLCJ0ZXN0IiwiYWRkTGlua1Byb3RvY29sSWZBcHBsaWNhYmxlIiwibGluayIsImRlZmF1bHRQcm90b2NvbCIsInByb3RvY29sIiwiaXNQcm90b2NvbE5lZWRlZCIsIkF1dG9tYXRpY0RlY29yYXRvcnMiLCJfZGVmaW5pdGlvbnMiLCJTZXQiLCJzaXplIiwiaXNBcnJheSIsImRpc3BhdGNoZXIiLCJjb25zdW1hYmxlIiwidmlld1dyaXRlciIsInZpZXdTZWxlY3Rpb24iLCJhdHRyaWJ1dGVOZXdWYWx1ZSIsIndyYXAiLCJ0b1ZpZXdSYW5nZSIsInVud3JhcCIsInZpZXdGaWd1cmUiLCJ0b1ZpZXdFbGVtZW50IiwibGlua0luSW1hZ2UiLCJnZXRDaGlsZHJlbiIsImNoaWxkIiwidmFsIiwicmVtb3ZlQ2xhc3MiLCJtaXgiLCJPYnNlcnZhYmxlTWl4aW4iLCJUUkFOU0ZPUk1BVElPTlMiLCJjb3B5cmlnaHQiLCJyZWdpc3RlcmVkVHJhZGVtYXJrIiwidHJhZGVtYXJrIiwib25lSGFsZiIsIm9uZVRoaXJkIiwidHdvVGhpcmRzIiwib25lRm9ydGgiLCJ0aHJlZVF1YXJ0ZXJzIiwibGVzc1RoYW5PckVxdWFsIiwiZ3JlYXRlclRoYW5PckVxdWFsIiwibm90RXF1YWwiLCJhcnJvd0xlZnQiLCJhcnJvd1JpZ2h0IiwiaG9yaXpvbnRhbEVsbGlwc2lzIiwiZW5EYXNoIiwiZW1EYXNoIiwicXVvdGVzUHJpbWFyeSIsImJ1aWxkUXVvdGVzUmVnRXhwIiwicXVvdGVzU2Vjb25kYXJ5IiwicXVvdGVzUHJpbWFyeUVuR2IiLCJxdW90ZXNTZWNvbmRhcnlFbkdiIiwicXVvdGVzUHJpbWFyeVBsIiwicXVvdGVzU2Vjb25kYXJ5UGwiLCJUUkFOU0ZPUk1BVElPTl9HUk9VUFMiLCJzeW1ib2xzIiwibWF0aGVtYXRpY2FsIiwidHlwb2dyYXBoeSIsInF1b3RlcyIsIkRFRkFVTFRfVFJBTlNGT1JNQVRJT05TIiwiVGV4dFRlbXBsYXRpbmciLCJpbmNsdWRlIiwibW9kZWxTZWxlY3Rpb24iLCJwYXJlbnQiLCJfZW5hYmxlVHJhbnNmb3JtYXRpb25XYXRjaGVycyIsIm5vcm1hbGl6ZWRUcmFuc2Zvcm1hdGlvbnMiLCJub3JtYWxpemVUcmFuc2Zvcm1hdGlvbnMiLCJ0ZXN0Q2FsbGJhY2siLCJub3JtYWxpemVkVHJhbnNmb3JtYXRpb24iLCJ3YXRjaGVyQ2FsbGJhY2siLCJleGVjIiwicmVwbGFjZXMiLCJtYXRjaGVkUmFuZ2UiLCJjaGFuZ2VJbmRleCIsInJlcGxhY2VXaXRoIiwicmVwbGFjZVBvc2l0aW9uIiwiZ2V0U2hpZnRlZEJ5IiwicmVwbGFjZVJhbmdlIiwiZ2V0VGV4dEF0dHJpYnV0ZXNBZnRlclBvc2l0aW9uIiwib3B0aW9ucyIsIndhdGNoZXIiLCJUZXh0V2F0Y2hlciIsIm5vcm1hbGl6ZUZyb20iLCJSZWdFeHAiLCJlc2NhcGVSZWdFeHAiLCJub3JtYWxpemVUbyIsInF1b3RlQ2hhcmFjdGVyIiwiaXNOb3RSZW1vdmVkIiwidHJhbnNmb3JtYXRpb24iLCJpbmNsdWRlcyIsImNvbmZpZ3VyZWQiLCJjb25jYXQiLCJleHBhbmRHcm91cHNBbmRSZW1vdmVEdXBsaWNhdGVzIiwiZGVmaW5pdGlvbnMiLCJkZWZpbmVkVHJhbnNmb3JtYXRpb25zIiwidHJhbnNmb3JtYXRpb25Pckdyb3VwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBJOzs7Ozs7Ozs7Ozs7Ozs7QUN6QkEsaUVBQWU7QUFDZixDQUFDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0REO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFD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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdFBBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtDQUlBO0FBQ0E7O0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUNxQjJCLG1COzs7OztBQUNwQjtBQUNEO0FBQ0E7QUFDQywrQkFBYUMsTUFBYixFQUFzQjtBQUFBOztBQUFBOztBQUNyQiw4QkFBT0EsTUFBUDtBQUVBLFFBQU1vQixDQUFDLEdBQUdwQixNQUFNLENBQUNvQixDQUFqQjtBQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDRSxVQUFLZSxZQUFMLEdBQW9CLElBQUlxRSx3RUFBSixFQUFwQjtBQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDRSxVQUFLL0YsVUFBTCxHQUFrQixJQUFJZ0csNEVBQUosRUFBbEI7QUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUNFLFVBQUtDLGlCQUFMLEdBQXlCLE1BQUtDLG9CQUFMLEVBQXpCO0FBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFDRSxVQUFLdEcsZ0JBQUwsR0FBd0IsTUFBS3VHLGFBQUwsQ0FBb0J4RixDQUFDLENBQUUsUUFBRixDQUFyQixFQUFtQ3lGLDZEQUFuQyxFQUErQyxRQUEvQyxDQUF4QjtBQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBQ0UsVUFBS3pHLGNBQUwsR0FBc0IsTUFBS3dHLGFBQUwsQ0FBb0J4RixDQUFDLENBQUUsV0FBRixDQUFyQixFQUFzQzBGLHVFQUF0QyxFQUFvRCxNQUFwRCxDQUF0QjtBQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDRSxVQUFLak4sR0FBTCxDQUFVLE1BQVY7QUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0UsVUFBS2tOLFdBQUwsR0FBbUIsSUFBSUMsdUVBQUosRUFBbkI7QUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDRSxVQUFLQyxZQUFMLEdBQW9CLElBQUlDLG9FQUFKLENBQWlCO0FBQ3BDQyxnQkFBVSxFQUFFLE1BQUtKLFdBRG1CO0FBRXBDNUUsa0JBQVksRUFBRSxNQUFLQSxZQUZpQjtBQUdwQ2lGLHNCQUFnQixFQUFFLE1BQUszRyxVQUhhO0FBSXBDNEcsYUFBTyxFQUFFO0FBQ1I7QUFDQUMscUJBQWEsRUFBRSxhQUZQO0FBSVI7QUFDQUMsaUJBQVMsRUFBRTtBQUxIO0FBSjJCLEtBQWpCLENBQXBCOztBQWFBLFVBQUtDLFdBQUwsQ0FBa0I7QUFDakJDLFNBQUcsRUFBRSxLQURZO0FBR2pCL04sZ0JBQVUsRUFBRTtBQUNYLGlCQUFPLENBQ04sSUFETSxFQUVOLGlCQUZNLEVBR04sb0JBSE0sQ0FESTtBQU9YO0FBQ0FnTyxnQkFBUSxFQUFFO0FBUkMsT0FISztBQWNqQkMsY0FBUSxFQUFFLENBQ1QsTUFBS2pCLGlCQURJLEVBRVQsTUFBS3RHLGNBRkksRUFHVCxNQUFLQyxnQkFISTtBQWRPLEtBQWxCOztBQS9FcUI7QUFtR3JCO0FBRUQ7QUFDRDtBQUNBOzs7OztXQUNDLGtCQUFTO0FBQUE7O0FBQ1I7O0FBRUEsVUFBTXVILFVBQVUsR0FBRyxDQUNsQixLQUFLbEIsaUJBRGEsRUFFbEIsS0FBS3RHLGNBRmEsRUFHbEIsS0FBS0MsZ0JBSGEsQ0FBbkI7QUFNQXVILGdCQUFVLENBQUN0TyxPQUFYLENBQW9CLFVBQUF1TyxDQUFDLEVBQUk7QUFDeEI7QUFDQSxjQUFJLENBQUNkLFdBQUwsQ0FBaUJ2TCxHQUFqQixDQUFzQnFNLENBQXRCLEVBRndCLENBSXhCOzs7QUFDQSxjQUFJLENBQUMxRixZQUFMLENBQWtCM0csR0FBbEIsQ0FBdUJxTSxDQUFDLENBQUNoYyxPQUF6QjtBQUNBLE9BTkQsRUFUUSxDQWlCUjs7QUFDQSxXQUFLNFUsVUFBTCxDQUFnQi9ELFFBQWhCLENBQTBCLEtBQUs3USxPQUEvQjtBQUNBO0FBRUQ7QUFDRDtBQUNBOzs7O1dBQ0MsaUJBQVE7QUFDUCxXQUFLb2IsWUFBTCxDQUFrQmEsVUFBbEI7QUFDQTtBQUVEO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztXQUNDLHVCQUFlMVgsS0FBZixFQUFzQnNSLElBQXRCLEVBQTRCcUcsU0FBNUIsRUFBd0M7QUFDdkMsVUFBTXZHLE1BQU0sR0FBRyxJQUFJQyxtRUFBSixDQUFnQixLQUFLekIsTUFBckIsQ0FBZjtBQUVBd0IsWUFBTSxDQUFDM0gsR0FBUCxDQUFZO0FBQ1h6SixhQUFLLEVBQUxBLEtBRFc7QUFFWHNSLFlBQUksRUFBSkEsSUFGVztBQUdYRyxlQUFPLEVBQUU7QUFIRSxPQUFaO0FBTUFMLFlBQU0sQ0FBQ3dHLFFBQVAsQ0FBaUIsU0FBakIsRUFBNkI5YyxFQUE3QixDQUFpQyxJQUFqQyxFQUF1QzZjLFNBQXZDO0FBRUEsYUFBT3ZHLE1BQVA7QUFDQTtBQUVEO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztXQUNDLGdDQUF1QjtBQUN0QixVQUFNQSxNQUFNLEdBQUcsSUFBSUMsbUVBQUosQ0FBZ0IsS0FBS3pCLE1BQXJCLENBQWY7QUFDQSxVQUFNRyxJQUFJLEdBQUcsS0FBSzhILFlBQWxCO0FBQ0EsVUFBTTdHLENBQUMsR0FBRyxLQUFLQSxDQUFmO0FBRUFJLFlBQU0sQ0FBQzNILEdBQVAsQ0FBWTtBQUNYcU8sZ0JBQVEsRUFBRSxJQURDO0FBRVhyRyxlQUFPLEVBQUVULENBQUMsQ0FBRSxzQkFBRjtBQUZDLE9BQVo7QUFLQUksWUFBTSxDQUFDMkcsY0FBUCxDQUF1QjtBQUN0QnpPLGtCQUFVLEVBQUU7QUFDWCxtQkFBTyxDQUNOLElBRE0sRUFFTiwwQkFGTSxDQURJO0FBS1gwTyxjQUFJLEVBQUVqSSxJQUFJLENBQUNqVixFQUFMLENBQVMsTUFBVCxFQUFpQixVQUFBa2QsSUFBSTtBQUFBLG1CQUFJQSxJQUFJLElBQUlDLHNEQUFhLENBQUVELElBQUYsQ0FBekI7QUFBQSxXQUFyQixDQUxLO0FBTVgzRCxnQkFBTSxFQUFFLFFBTkc7QUFPWDZELGFBQUcsRUFBRTtBQVBNO0FBRFUsT0FBdkI7QUFZQTlHLFlBQU0sQ0FBQ3JCLElBQVAsQ0FBYSxPQUFiLEVBQXVCalYsRUFBdkIsQ0FBMkIsSUFBM0IsRUFBaUMsTUFBakMsRUFBeUMsVUFBQWtkLElBQUksRUFBSTtBQUNoRCxlQUFPQSxJQUFJLElBQUloSCxDQUFDLENBQUUsc0JBQUYsQ0FBaEI7QUFDQSxPQUZEO0FBSUFJLFlBQU0sQ0FBQ3JCLElBQVAsQ0FBYSxXQUFiLEVBQTJCalYsRUFBM0IsQ0FBK0IsSUFBL0IsRUFBcUMsTUFBckMsRUFBNkMsVUFBQWtkLElBQUk7QUFBQSxlQUFJLENBQUMsQ0FBQ0EsSUFBTjtBQUFBLE9BQWpEO0FBRUE1RyxZQUFNLENBQUMrRyxRQUFQLENBQWdCZCxHQUFoQixHQUFzQixHQUF0QjtBQUNBakcsWUFBTSxDQUFDK0csUUFBUCxDQUFnQkMsY0FBaEIsR0FBaUMsRUFBakM7QUFFQSxhQUFPaEgsTUFBUDtBQUNBOzs7O0VBck0rQ2lILDZEO0FBd01qRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOU9BO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBYUE7QUFDQTtDQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUNxQjdILGdCOzs7OztBQUNwQjtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQyw0QkFBYVosTUFBYixFQUFxQm5JLFdBQXJCLEVBQW1DO0FBQUE7O0FBQUE7O0FBQ2xDLDhCQUFPbUksTUFBUDtBQUVBLFFBQU1vQixDQUFDLEdBQUdwQixNQUFNLENBQUNvQixDQUFqQjtBQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDRSxVQUFLZSxZQUFMLEdBQW9CLElBQUlxRSx3RUFBSixFQUFwQjtBQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDRSxVQUFLL0YsVUFBTCxHQUFrQixJQUFJZ0csNEVBQUosRUFBbEI7QUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUNFLFVBQUs1RixjQUFMLEdBQXNCLE1BQUs2SCxnQkFBTCxDQUFzQixnQkFBdEIsQ0FBdEI7QUFBOEQ7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7O0FBQ0UsVUFBSzFILGFBQUwsR0FBcUIsTUFBSzJILG9CQUFMLENBQTBCLHdCQUExQixDQUFyQjtBQUF5RTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVFLFVBQUs1SCxjQUFMLEdBQXNCLE1BQUs2RixhQUFMLENBQW9CeEYsQ0FBQyxDQUFFLE1BQUYsQ0FBckIsRUFBaUMwRixzRUFBakMsRUFBOEMsZ0JBQTlDLENBQXRCO0FBQ0EsVUFBSy9GLGNBQUwsQ0FBb0JyVCxJQUFwQixHQUEyQixRQUEzQjtBQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBQ0UsVUFBS2tiLGdCQUFMLEdBQXdCLE1BQUtoQyxhQUFMLENBQW9CeEYsQ0FBQyxDQUFFLFFBQUYsQ0FBckIsRUFBbUMwRix1RUFBbkMsRUFBaUQsa0JBQWpELEVBQXFFLFFBQXJFLENBQXhCO0FBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNFLFVBQUsrQix3QkFBTCxHQUFnQyxNQUFLQyw4QkFBTCxDQUFxQ2pSLFdBQXJDLENBQWhDO0FBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNFLFVBQUs4UCxRQUFMLEdBQWdCLE1BQUtvQixtQkFBTCxDQUEwQmxSLFdBQVcsQ0FBQ1csZ0JBQXRDLENBQWhCO0FBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0UsVUFBS3VPLFdBQUwsR0FBbUIsSUFBSUMsdUVBQUosRUFBbkI7QUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDRSxVQUFLQyxZQUFMLEdBQW9CLElBQUlDLG9FQUFKLENBQWlCO0FBQ3BDQyxnQkFBVSxFQUFFLE1BQUtKLFdBRG1CO0FBRXBDNUUsa0JBQVksRUFBRSxNQUFLQSxZQUZpQjtBQUdwQ2lGLHNCQUFnQixFQUFFLE1BQUszRyxVQUhhO0FBSXBDNEcsYUFBTyxFQUFFO0FBQ1I7QUFDQUMscUJBQWEsRUFBRSxhQUZQO0FBSVI7QUFDQUMsaUJBQVMsRUFBRTtBQUxIO0FBSjJCLEtBQWpCLENBQXBCO0FBYUEsUUFBTXlCLFNBQVMsR0FBRyxDQUFFLElBQUYsRUFBUSxjQUFSLEVBQXdCLG9CQUF4QixDQUFsQjs7QUFFQSxRQUFLblIsV0FBVyxDQUFDVyxnQkFBWixDQUE2QnRHLE1BQWxDLEVBQTJDO0FBQzFDOFcsZUFBUyxDQUFDNVUsSUFBVixDQUFnQiw4QkFBaEIsRUFBZ0Qsa0JBQWhEO0FBQ0E7O0FBRUQsVUFBS29ULFdBQUwsQ0FBa0I7QUFDakJDLFNBQUcsRUFBRSxNQURZO0FBR2pCL04sZ0JBQVUsRUFBRTtBQUNYLGlCQUFPc1AsU0FESTtBQUdYO0FBQ0F0QixnQkFBUSxFQUFFO0FBSkMsT0FISztBQVVqQkMsY0FBUSxFQUFFLE1BQUtBO0FBVkUsS0FBbEI7O0FBYUFzQiw0RkFBMkIsK0JBQTNCO0FBbkhrQztBQW9IbEM7QUFFRDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztXQUNDLHFDQUE0QjtBQUMzQixhQUFPcEUsS0FBSyxDQUFDNVosSUFBTixDQUFZLEtBQUs0ZCx3QkFBakIsRUFBNENLLE1BQTVDLENBQW9ELFVBQUVDLFdBQUYsRUFBZUMsWUFBZixFQUFpQztBQUMzRkQsbUJBQVcsQ0FBRUMsWUFBWSxDQUFDaGMsSUFBZixDQUFYLEdBQW1DZ2MsWUFBWSxDQUFDQyxJQUFoRDtBQUNBLGVBQU9GLFdBQVA7QUFDQSxPQUhNLEVBR0osRUFISSxDQUFQO0FBSUE7QUFFRDtBQUNEO0FBQ0E7Ozs7V0FDQyxrQkFBUztBQUFBOztBQUNSOztBQUVBRyxnRkFBYSxDQUFFO0FBQ2QzZCxZQUFJLEVBQUU7QUFEUSxPQUFGLENBQWI7QUFJQSxVQUFNaWMsVUFBVSxJQUNmLEtBQUsvRyxjQURVLEVBRWYsS0FBS0csYUFGVSw0QkFHWixLQUFLNkgsd0JBSE8sSUFJZixLQUFLOUgsY0FKVSxFQUtmLEtBQUs2SCxnQkFMVSxFQUFoQjtBQVFBaEIsZ0JBQVUsQ0FBQ3RPLE9BQVgsQ0FBb0IsVUFBQXVPLENBQUMsRUFBSTtBQUN4QjtBQUNBLGNBQUksQ0FBQ2QsV0FBTCxDQUFpQnZMLEdBQWpCLENBQXNCcU0sQ0FBdEIsRUFGd0IsQ0FJeEI7OztBQUNBLGNBQUksQ0FBQzFGLFlBQUwsQ0FBa0IzRyxHQUFsQixDQUF1QnFNLENBQUMsQ0FBQ2hjLE9BQXpCO0FBQ0EsT0FORCxFQWZRLENBdUJSOztBQUNBLFdBQUs0VSxVQUFMLENBQWdCL0QsUUFBaEIsQ0FBMEIsS0FBSzdRLE9BQS9CO0FBQ0E7QUFFRDtBQUNEO0FBQ0E7Ozs7V0FDQyxpQkFBUTtBQUNQLFdBQUtvYixZQUFMLENBQWtCYSxVQUFsQjtBQUNBO0FBRUQ7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0MsMEJBQWlCMVgsS0FBakIsRUFBd0I7QUFDdkIsVUFBTWdSLENBQUMsR0FBRyxLQUFLcEIsTUFBTCxDQUFZb0IsQ0FBdEI7QUFDQSxVQUFNbUksWUFBWSxHQUFHLElBQUlDLHlFQUFKLENBQXNCLEtBQUt4SixNQUEzQixFQUFtQ3lKLCtFQUFuQyxDQUFyQjtBQUVBRixrQkFBWSxDQUFDblosS0FBYixHQUFxQmdSLENBQUMsQ0FBRWhSLEtBQUYsQ0FBdEI7QUFFQSxhQUFPbVosWUFBUDtBQUNBO0FBQ0Q7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0MsOEJBQXFCblosS0FBckIsRUFBNEI7QUFBQTs7QUFDM0IsVUFBTXNaLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBRUMsZ0JBQUYsRUFBb0JDLE9BQXBCLEVBQTZCQyxTQUE3QixFQUEyQztBQUV4RSxZQUFNQyxZQUFZLEdBQUdDLDJFQUFjLENBQUVKLGdCQUFnQixDQUFDM0osTUFBbkIsRUFBNEJnSyxnR0FBNUIsQ0FBbkM7QUFFQUYsb0JBQVksQ0FBQ2pRLEdBQWIsQ0FBa0I7QUFDakJyTSxZQUFFLEVBQUVvYyxPQURhO0FBRWpCSywyQkFBaUIsRUFBRUo7QUFGRixTQUFsQjtBQUlBQyxvQkFBWSxDQUFDN0ksVUFBYixDQUF3QnBILEdBQXhCLENBQTZCO0FBQzVCZ0ksaUJBQU8sRUFBRSxJQURtQjtBQUU1QnFHLGtCQUFRLEVBQUU7QUFGa0IsU0FBN0I7QUFLQSxZQUFNZ0MsT0FBTyxHQUFHLEVBQWhCLENBYndFLENBY3hFOztBQUNBQSxlQUFPLENBQUM5VixJQUFSLENBQWMsTUFBSSxDQUFDK1YscUJBQUwsQ0FBNEIsWUFBNUIsQ0FBZCxFQWZ3RSxDQWlCeEU7O0FBQ0FELGVBQU8sQ0FBQzlWLElBQVIsQ0FBYyxNQUFJLENBQUMrVixxQkFBTCxDQUE2QixXQUE3QixDQUFkLEVBbEJ3RSxDQW9CeEU7O0FBQ0FDLHlGQUFvQixDQUFFTixZQUFGLEVBQWdCSSxPQUFoQixDQUFwQixDQXJCd0UsQ0F1QnhFO0FBRUE7O0FBQ0FKLG9CQUFZLENBQUMzSixJQUFiLENBQW1CLFdBQW5CLEVBQWlDa0ssTUFBakMsQ0FBeUNILE9BQXpDLEVBQWtELFdBQWxELEVBQStEO0FBQUEsNENBQUtJLFVBQUw7QUFBS0Esc0JBQUw7QUFBQTs7QUFBQSxpQkFBcUJBLFVBQVUsQ0FBQ0MsSUFBWCxDQUFpQixVQUFBN1MsU0FBUztBQUFBLG1CQUFJQSxTQUFKO0FBQUEsV0FBMUIsQ0FBckI7QUFBQSxTQUEvRDtBQUVBb1Msb0JBQVksQ0FBQzdJLFVBQWIsQ0FBd0JkLElBQXhCLENBQThCLE9BQTlCLEVBQXdDa0ssTUFBeEMsQ0FBZ0RILE9BQWhELEVBQXlELE1BQXpELEVBQWlFLFlBQW9CO0FBQUEsNkNBQWZNLFNBQWU7QUFBZkEscUJBQWU7QUFBQTs7QUFDcEY7QUFDQSxjQUFNN2QsS0FBSyxHQUFHNmQsU0FBUyxDQUFDQyxTQUFWLENBQXFCLFVBQUE5WSxLQUFLO0FBQUEsbUJBQUlBLEtBQUo7QUFBQSxXQUExQixDQUFkLENBRm9GLENBR3BGOztBQUNBLGNBQUtoRixLQUFLLEdBQUcsQ0FBYixFQUFpQjtBQUNoQixtQkFBT3VkLE9BQU8sQ0FBRSxDQUFGLENBQVAsQ0FBYTlaLEtBQXBCO0FBQ0EsV0FObUYsQ0FRcEY7OztBQUNBLGlCQUFPOFosT0FBTyxDQUFFdmQsS0FBRixDQUFQLENBQWlCeUQsS0FBeEI7QUFDQSxTQVZEO0FBV0EwWixvQkFBWSxDQUFDWSxXQUFiLENBQXlCQyxVQUF6QixHQUFzQyxJQUF0QyxDQXZDd0UsQ0F3Q3hFOztBQUNBLGVBQU9iLFlBQVA7QUFDQSxPQTFDRDs7QUEyQ0EsVUFBTTFJLENBQUMsR0FBRyxLQUFLcEIsTUFBTCxDQUFZb0IsQ0FBdEI7QUFDQSxVQUFNbUksWUFBWSxHQUFHLElBQUlDLHlFQUFKLENBQXNCLEtBQUt4SixNQUEzQixFQUFtQzBKLHFCQUFuQyxDQUFyQjtBQUtBLGFBQU9ILFlBQVA7QUFDQTtBQUNEO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0MsdUJBQWVuWixLQUFmLEVBQXNCc1IsSUFBdEIsRUFBNEI5TixTQUE1QixFQUF1Q21VLFNBQXZDLEVBQW1EO0FBQ2xELFVBQU12RyxNQUFNLEdBQUcsSUFBSUMsbUVBQUosQ0FBZ0IsS0FBS3pCLE1BQXJCLENBQWY7QUFFQXdCLFlBQU0sQ0FBQzNILEdBQVAsQ0FBWTtBQUNYekosYUFBSyxFQUFMQSxLQURXO0FBRVhzUixZQUFJLEVBQUpBLElBRlc7QUFHWEcsZUFBTyxFQUFFO0FBSEUsT0FBWjs7QUFLQSxVQUFJLE9BQU9qTyxTQUFQLEtBQXFCLFdBQXpCLEVBQXNDO0FBRXJDNE4sY0FBTSxDQUFDMkcsY0FBUCxDQUF1QjtBQUN0QnpPLG9CQUFVLEVBQUU7QUFDWCxxQkFBTzlGO0FBREk7QUFEVSxTQUF2QjtBQUtBOztBQUVELFVBQUttVSxTQUFMLEVBQWlCO0FBQ2hCdkcsY0FBTSxDQUFDd0csUUFBUCxDQUFpQixTQUFqQixFQUE2QjljLEVBQTdCLENBQWlDLElBQWpDLEVBQXVDNmMsU0FBdkM7QUFDQTs7QUFDRCxhQUFPdkcsTUFBUDtBQUNBOzs7V0FDRCwrQkFBdUJwUixLQUF2QixFQUErQjtBQUM5QixVQUFNb1IsTUFBTSxHQUFHLElBQUlDLG1FQUFKLENBQWdCLEtBQUt6QixNQUFyQixDQUFmO0FBRUF3QixZQUFNLENBQUMzSCxHQUFQLENBQVk7QUFDWG5DLGlCQUFTLEVBQUcsSUFERDtBQUVYdEgsYUFBSyxFQUFHQSxLQUZHO0FBR1h5UixlQUFPLEVBQUUsSUFIRTtBQUlYcUcsZ0JBQVEsRUFBRTtBQUpDLE9BQVosRUFIOEIsQ0FTOUI7O0FBQ0EsV0FBS3hMLFFBQUwsQ0FBZThFLE1BQWYsRUFBdUIsU0FBdkIsRUFBa0MsWUFBTTtBQUN2Q0EsY0FBTSxDQUFDNkgsSUFBUCxHQUFjLElBQWQ7QUFDQSxPQUZEO0FBR0EsYUFBTzdILE1BQVA7QUFDQTtBQUVEO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDQyx3Q0FBZ0MzSixXQUFoQyxFQUE4QztBQUFBOztBQUM3QyxVQUFNK1MsUUFBUSxHQUFHLEtBQUtDLGdCQUFMLEVBQWpCOztBQUQ2QyxpREFHZGhULFdBQVcsQ0FBQ1csZ0JBSEU7QUFBQTs7QUFBQTtBQUFBO0FBQUEsY0FHakNDLGVBSGlDO0FBSTVDLGNBQU0yUSxZQUFZLEdBQUcsSUFBSTBCLHlFQUFKLENBQXNCLE1BQUksQ0FBQzlLLE1BQTNCLENBQXJCO0FBRUFvSixzQkFBWSxDQUFDdlAsR0FBYixDQUFrQjtBQUNqQnpNLGdCQUFJLEVBQUVxTCxlQUFlLENBQUNqTCxFQURMO0FBRWpCNEMsaUJBQUssRUFBRXFJLGVBQWUsQ0FBQ3JJLEtBRk47QUFHakI4WCxvQkFBUSxFQUFFO0FBSE8sV0FBbEI7QUFNQWtCLHNCQUFZLENBQUNqSixJQUFiLENBQW1CLE1BQW5CLEVBQTRCa0ssTUFBNUIsQ0FBb0MsQ0FBRTVSLGVBQUYsRUFBbUJaLFdBQW5CLENBQXBDLEVBQXNFLE9BQXRFLEVBQStFLFVBQUVrVCxjQUFGLEVBQWtCQyxZQUFsQixFQUFvQztBQUNsSCxtQkFBT0EsWUFBWSxLQUFLN0gsU0FBakIsSUFBOEI0SCxjQUFjLEtBQUs1SCxTQUFqRCxHQUE2RDFLLGVBQWUsQ0FBQ3dTLFlBQTdFLEdBQTRGRixjQUFuRztBQUNBLFdBRkQ7QUFJQTNCLHNCQUFZLENBQUM4QixFQUFiLENBQWlCLFNBQWpCLEVBQTRCLFlBQU07QUFDakN6UywyQkFBZSxDQUFDb0IsR0FBaEIsQ0FBcUIsT0FBckIsRUFBOEIsQ0FBQ3VQLFlBQVksQ0FBQ0MsSUFBNUM7QUFDQSxXQUZEO0FBSUF1QixrQkFBUSxDQUFDcFAsR0FBVCxDQUFjNE4sWUFBZDtBQXBCNEM7O0FBRzdDLDREQUE4RDtBQUFBO0FBa0I3RDtBQXJCNEM7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUF1QjdDLGFBQU93QixRQUFQO0FBQ0E7QUFFRDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDQyw2QkFBcUJwUyxnQkFBckIsRUFBd0M7QUFDdkMsVUFBTW1QLFFBQVEsR0FBRyxLQUFLa0QsZ0JBQUwsRUFBakI7QUFFQWxELGNBQVEsQ0FBQ25NLEdBQVQsQ0FBYyxLQUFLcUYsY0FBbkI7QUFDQThHLGNBQVEsQ0FBQ25NLEdBQVQsQ0FBYyxLQUFLd0YsYUFBbkI7O0FBRUEsVUFBS3hJLGdCQUFnQixDQUFDdEcsTUFBdEIsRUFBK0I7QUFDOUIsWUFBTWlaLHFCQUFxQixHQUFHLElBQUkxQyw2REFBSixFQUE5QjtBQUVBMEMsNkJBQXFCLENBQUMzRCxXQUF0QixDQUFtQztBQUNsQ0MsYUFBRyxFQUFFLElBRDZCO0FBRWxDRSxrQkFBUSxFQUFFLEtBQUtrQix3QkFBTCxDQUE4QnVDLEdBQTlCLENBQW1DLFVBQUFoQyxZQUFZO0FBQUEsbUJBQU07QUFDOUQzQixpQkFBRyxFQUFFLElBRHlEO0FBRTlERSxzQkFBUSxFQUFFLENBQUV5QixZQUFGLENBRm9EO0FBRzlEMVAsd0JBQVUsRUFBRTtBQUNYLHlCQUFPLENBQ04sSUFETSxFQUVOLGVBRk07QUFESTtBQUhrRCxhQUFOO0FBQUEsV0FBL0MsQ0FGd0I7QUFZbENBLG9CQUFVLEVBQUU7QUFDWCxxQkFBTyxDQUNOLElBRE0sRUFFTixVQUZNLEVBR04sU0FITTtBQURJO0FBWnNCLFNBQW5DO0FBb0JBaU8sZ0JBQVEsQ0FBQ25NLEdBQVQsQ0FBYzJQLHFCQUFkO0FBQ0E7O0FBRUR4RCxjQUFRLENBQUNuTSxHQUFULENBQWMsS0FBS3VGLGNBQW5CO0FBQ0E0RyxjQUFRLENBQUNuTSxHQUFULENBQWMsS0FBS29OLGdCQUFuQjtBQUVBLGFBQU9qQixRQUFQO0FBQ0E7Ozs7RUE5WDRDYyw2RDtBQWlZOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqYkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNNEMscUJBQXFCLEdBQUcsNkRBQTlCLEMsQ0FBNkY7O0FBQzdGLElBQU1DLFFBQVEsR0FBRyxpRUFBakIsQyxDQUVBOztBQUNBLElBQU1DLGFBQWEsR0FBRyxtRkFBdEIsQyxDQUVBO0FBQ0E7O0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsMEJBQXpCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLGFBQXhCO0FBQ0E7QUFDQTtBQUNBOztBQUNPLElBQU05SyxjQUFjLEdBQUcsUUFBdkI7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBUzRGLGFBQVQsQ0FBd0JoQyxJQUF4QixFQUErQjtBQUNyQyxTQUFPQSxJQUFJLENBQUM5RixFQUFMLENBQVMsa0JBQVQsS0FBaUMsQ0FBQyxDQUFDOEYsSUFBSSxDQUFDbUgsaUJBQUwsQ0FBd0IsTUFBeEIsQ0FBMUM7QUFDQTtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVN0USxxQkFBVCxDQUFnQzVOLEVBQWhDLFFBQWlEO0FBQUEsTUFBWHlLLE1BQVcsUUFBWEEsTUFBVztBQUN2RDtBQUNBLE1BQU0wVCxXQUFXLEdBQUcxVCxNQUFNLENBQUNzRSxzQkFBUCxDQUErQixNQUEvQixFQUF3QztBQUFFLGFBQU9rUDtBQUFULEdBQXhDLEVBQW1FO0FBQUVqZSxNQUFFLEVBQUdBO0FBQVAsR0FBbkUsRUFBZ0Y7QUFBRWdQLFlBQVEsRUFBRTtBQUFaLEdBQWhGLENBQXBCO0FBQ0F2RSxRQUFNLENBQUN3RSxpQkFBUCxDQUEwQixJQUExQixFQUFnQyxJQUFoQyxFQUFzQ2tQLFdBQXRDO0FBRUEsU0FBT0EsV0FBUDtBQUNBO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTdEQsYUFBVCxDQUF3Qm5aLEdBQXhCLEVBQThCO0FBQ3BDQSxLQUFHLEdBQUdaLE1BQU0sQ0FBRVksR0FBRixDQUFaO0FBRUEsU0FBTzBjLFNBQVMsQ0FBRTFjLEdBQUYsQ0FBVCxHQUFtQkEsR0FBbkIsR0FBeUIsR0FBaEM7QUFDQSxDLENBRUQ7QUFDQTtBQUNBOztBQUNBLFNBQVMwYyxTQUFULENBQW9CMWMsR0FBcEIsRUFBMEI7QUFDekIsTUFBTTJjLGFBQWEsR0FBRzNjLEdBQUcsQ0FBQ29CLE9BQUosQ0FBYSthLHFCQUFiLEVBQW9DLEVBQXBDLENBQXRCO0FBRUEsU0FBT1EsYUFBYSxDQUFDcmYsS0FBZCxDQUFxQjhlLFFBQXJCLENBQVA7QUFDQTtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxTQUFTUSxzQkFBVCxDQUFpQzFLLENBQWpDLEVBQW9DMkssVUFBcEMsRUFBaUQ7QUFDdkQsTUFBTUMseUJBQXlCLEdBQUc7QUFDakMseUJBQXFCNUssQ0FBQyxDQUFFLG1CQUFGLENBRFc7QUFFakMsb0JBQWdCQSxDQUFDLENBQUUsY0FBRjtBQUZnQixHQUFsQztBQUtBMkssWUFBVSxDQUFDelMsT0FBWCxDQUFvQixVQUFBOEMsU0FBUyxFQUFJO0FBQ2hDLFFBQUtBLFNBQVMsQ0FBQ2hNLEtBQVYsSUFBbUI0Yix5QkFBeUIsQ0FBRTVQLFNBQVMsQ0FBQ2hNLEtBQVosQ0FBakQsRUFBdUU7QUFDdEVnTSxlQUFTLENBQUNoTSxLQUFWLEdBQWtCNGIseUJBQXlCLENBQUU1UCxTQUFTLENBQUNoTSxLQUFaLENBQTNDO0FBQ0E7O0FBQ0QsV0FBT2dNLFNBQVA7QUFDQSxHQUxEO0FBT0EsU0FBTzJQLFVBQVA7QUFDQTtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNFLG1CQUFULENBQThCRixVQUE5QixFQUEyQztBQUNqRCxNQUFNRyxRQUFRLEdBQUcsRUFBakI7O0FBRUEsTUFBS0gsVUFBTCxFQUFrQjtBQUNqQix1Q0FBOEJJLE1BQU0sQ0FBQ0MsT0FBUCxDQUFnQkwsVUFBaEIsQ0FBOUIscUNBQTZEO0FBQXZEO0FBQUEsVUFBUTdhLEdBQVI7QUFBQSxVQUFhUyxLQUFiOztBQUNMLFVBQU15SyxTQUFTLEdBQUcrUCxNQUFNLENBQUNFLE1BQVAsQ0FDakIsRUFEaUIsRUFFakIxYSxLQUZpQixFQUdqQjtBQUFFbkUsVUFBRSxnQkFBVThlLG1EQUFVLENBQUVwYixHQUFGLENBQXBCO0FBQUosT0FIaUIsQ0FBbEI7QUFLQWdiLGNBQVEsQ0FBQzlYLElBQVQsQ0FBZWdJLFNBQWY7QUFDQTtBQUNEOztBQUVELFNBQU84UCxRQUFQO0FBQ0E7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTMVUsY0FBVCxDQUF5QjNMLE9BQXpCLEVBQWtDNEwsTUFBbEMsRUFBMkM7QUFDakQsTUFBSyxDQUFDNUwsT0FBTixFQUFnQjtBQUNmLFdBQU8sS0FBUDtBQUNBOztBQUVELFNBQU9BLE9BQU8sQ0FBQzRTLEVBQVIsQ0FBWSxTQUFaLEVBQXVCLE9BQXZCLEtBQW9DaEgsTUFBTSxDQUFDRSxjQUFQLENBQXVCLE9BQXZCLEVBQWdDLFVBQWhDLENBQTNDO0FBQ0E7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBUzRVLE9BQVQsQ0FBa0I1YSxLQUFsQixFQUEwQjtBQUNoQyxTQUFPNFosYUFBYSxDQUFDaUIsSUFBZCxDQUFvQjdhLEtBQXBCLENBQVA7QUFDQTtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTOGEsMkJBQVQsQ0FBc0NDLElBQXRDLEVBQTRDQyxlQUE1QyxFQUE4RDtBQUNwRSxNQUFNQyxRQUFRLEdBQUdMLE9BQU8sQ0FBRUcsSUFBRixDQUFQLEdBQWtCLFNBQWxCLEdBQThCQyxlQUEvQztBQUNBLE1BQU1FLGdCQUFnQixHQUFHLENBQUMsQ0FBQ0QsUUFBRixJQUFjLENBQUNwQixnQkFBZ0IsQ0FBQ2dCLElBQWpCLENBQXVCRSxJQUF2QixDQUF4QztBQUVBLFNBQU9BLElBQUksSUFBSUcsZ0JBQVIsR0FBMkJELFFBQVEsR0FBR0YsSUFBdEMsR0FBNkNBLElBQXBEO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVLRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztJQUNxQkksbUI7QUFDcEIsaUNBQWM7QUFBQTs7QUFDYjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNFLFNBQUtDLFlBQUwsR0FBb0IsSUFBSUMsR0FBSixFQUFwQjtBQUNBO0FBRUQ7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O1NBQ0MsZUFBYTtBQUNaLGFBQU8sS0FBS0QsWUFBTCxDQUFrQkUsSUFBekI7QUFDQTtBQUVEO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztXQUNDLGFBQUsvZixJQUFMLEVBQVk7QUFBQTs7QUFDWCxVQUFLMlgsS0FBSyxDQUFDcUksT0FBTixDQUFlaGdCLElBQWYsQ0FBTCxFQUE2QjtBQUM1QkEsWUFBSSxDQUFDb00sT0FBTCxDQUFjLFVBQUFwTSxJQUFJO0FBQUEsaUJBQUksS0FBSSxDQUFDNmYsWUFBTCxDQUFrQnZSLEdBQWxCLENBQXVCdE8sSUFBdkIsQ0FBSjtBQUFBLFNBQWxCO0FBQ0EsT0FGRCxNQUVPO0FBQ04sYUFBSzZmLFlBQUwsQ0FBa0J2UixHQUFsQixDQUF1QnRPLElBQXZCO0FBQ0E7QUFDRDtBQUVEO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztXQUNDLHlCQUFnQjtBQUFBOztBQUNmLGFBQU8sVUFBQWlnQixVQUFVLEVBQUk7QUFDcEJBLGtCQUFVLENBQUNqQyxFQUFYLENBQWUsb0JBQWYsRUFBcUMsVUFBRTFOLEdBQUYsRUFBT3pRLElBQVAsRUFBYXNPLGFBQWIsRUFBZ0M7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFLLENBQUNBLGFBQWEsQ0FBQytSLFVBQWQsQ0FBeUJaLElBQXpCLENBQStCemYsSUFBSSxDQUFDRyxJQUFwQyxFQUEwQyxvQkFBMUMsQ0FBTixFQUF5RTtBQUN4RTtBQUNBOztBQUNELGNBQU1tZ0IsVUFBVSxHQUFHaFMsYUFBYSxDQUFDcEQsTUFBakM7QUFDQSxjQUFNcVYsYUFBYSxHQUFHRCxVQUFVLENBQUN6aUIsUUFBWCxDQUFvQjBNLFNBQTFDOztBQVRvRSxxREFXaEQsTUFBSSxDQUFDeVYsWUFYMkM7QUFBQTs7QUFBQTtBQVdwRSxnRUFBd0M7QUFBQSxrQkFBNUI3ZixJQUE0QjtBQUN2QyxrQkFBTXFPLFdBQVcsR0FBRzhSLFVBQVUsQ0FBQzlRLHNCQUFYLENBQW1DLEdBQW5DLEVBQXdDclAsSUFBSSxDQUFDd00sVUFBN0MsRUFBeUQ7QUFDNUU4Qyx3QkFBUSxFQUFFO0FBRGtFLGVBQXpELENBQXBCO0FBR0E2USx3QkFBVSxDQUFDNVEsaUJBQVgsQ0FBOEIsTUFBOUIsRUFBc0MsSUFBdEMsRUFBNENsQixXQUE1Qzs7QUFDQSxrQkFBS3JPLElBQUksQ0FBQ0osUUFBTCxDQUFlQyxJQUFJLENBQUN3Z0IsaUJBQXBCLENBQUwsRUFBK0M7QUFDOUMsb0JBQUt4Z0IsSUFBSSxDQUFDRyxJQUFMLENBQVV1UixFQUFWLENBQWMsV0FBZCxDQUFMLEVBQW1DO0FBQ2xDNE8sNEJBQVUsQ0FBQ0csSUFBWCxDQUFpQkYsYUFBYSxDQUFDakksYUFBZCxFQUFqQixFQUFnRDlKLFdBQWhEO0FBQ0EsaUJBRkQsTUFFTztBQUNOOFIsNEJBQVUsQ0FBQ0csSUFBWCxDQUFpQm5TLGFBQWEsQ0FBQ3lKLE1BQWQsQ0FBcUIySSxXQUFyQixDQUFrQzFnQixJQUFJLENBQUNiLEtBQXZDLENBQWpCLEVBQWlFcVAsV0FBakU7QUFDQTtBQUNELGVBTkQsTUFNTztBQUNOOFIsMEJBQVUsQ0FBQ0ssTUFBWCxDQUFtQnJTLGFBQWEsQ0FBQ3lKLE1BQWQsQ0FBcUIySSxXQUFyQixDQUFrQzFnQixJQUFJLENBQUNiLEtBQXZDLENBQW5CLEVBQW1FcVAsV0FBbkU7QUFDQTtBQUNEO0FBekJtRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBMEJwRSxTQTFCRCxFQTBCRztBQUFFaUIsa0JBQVEsRUFBRTtBQUFaLFNBMUJIO0FBMkJBLE9BNUJEO0FBNkJBO0FBRUQ7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDQyx1Q0FBOEI7QUFBQTs7QUFDN0IsYUFBTyxVQUFBMlEsVUFBVSxFQUFJO0FBQ3BCQSxrQkFBVSxDQUFDakMsRUFBWCxDQUFlLDBCQUFmLEVBQTJDLFVBQUUxTixHQUFGLEVBQU96USxJQUFQLEVBQWFzTyxhQUFiLEVBQWdDO0FBQzFFLGNBQU1zUyxVQUFVLEdBQUd0UyxhQUFhLENBQUN5SixNQUFkLENBQXFCOEksYUFBckIsQ0FBb0M3Z0IsSUFBSSxDQUFDRyxJQUF6QyxDQUFuQjtBQUNBLGNBQU0yZ0IsV0FBVyxHQUFHaEosS0FBSyxDQUFDNVosSUFBTixDQUFZMGlCLFVBQVUsQ0FBQ0csV0FBWCxFQUFaLEVBQXVDeEosSUFBdkMsQ0FBNkMsVUFBQXlKLEtBQUs7QUFBQSxtQkFBSUEsS0FBSyxDQUFDM2dCLElBQU4sS0FBZSxHQUFuQjtBQUFBLFdBQWxELENBQXBCOztBQUYwRSxzREFJdEQsTUFBSSxDQUFDMmYsWUFKaUQ7QUFBQTs7QUFBQTtBQUkxRSxtRUFBd0M7QUFBQSxrQkFBNUI3ZixJQUE0QjtBQUN2QyxrQkFBTXdNLFVBQVUsR0FBR0MsMkRBQUssQ0FBRXpNLElBQUksQ0FBQ3dNLFVBQVAsQ0FBeEI7O0FBRUEsa0JBQUt4TSxJQUFJLENBQUNKLFFBQUwsQ0FBZUMsSUFBSSxDQUFDd2dCLGlCQUFwQixDQUFMLEVBQStDO0FBQUEsNERBQ2xCN1QsVUFEa0I7QUFBQTs7QUFBQTtBQUM5Qyx5RUFBeUM7QUFBQTtBQUFBLHdCQUEzQnhJLEdBQTJCO0FBQUEsd0JBQXRCOGMsR0FBc0I7O0FBQ3hDLHdCQUFLOWMsR0FBRyxLQUFLLE9BQWIsRUFBdUI7QUFDdEJtSyxtQ0FBYSxDQUFDcEQsTUFBZCxDQUFxQnhJLFFBQXJCLENBQStCdWUsR0FBL0IsRUFBb0NILFdBQXBDO0FBQ0EscUJBRkQsTUFFTztBQUNOeFMsbUNBQWEsQ0FBQ3BELE1BQWQsQ0FBcUI1SixZQUFyQixDQUFtQzZDLEdBQW5DLEVBQXdDOGMsR0FBeEMsRUFBNkNILFdBQTdDO0FBQ0E7QUFDRDtBQVA2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUTlDLGVBUkQsTUFRTztBQUFBLDREQUNzQm5VLFVBRHRCO0FBQUE7O0FBQUE7QUFDTix5RUFBeUM7QUFBQTtBQUFBLHdCQUEzQnhJLElBQTJCO0FBQUEsd0JBQXRCOGMsSUFBc0I7O0FBQ3hDLHdCQUFLOWMsSUFBRyxLQUFLLE9BQWIsRUFBdUI7QUFDdEJtSyxtQ0FBYSxDQUFDcEQsTUFBZCxDQUFxQmdXLFdBQXJCLENBQWtDRCxJQUFsQyxFQUF1Q0gsV0FBdkM7QUFDQSxxQkFGRCxNQUVPO0FBQ054UyxtQ0FBYSxDQUFDcEQsTUFBZCxDQUFxQi9ELGVBQXJCLENBQXNDaEQsSUFBdEMsRUFBMkMyYyxXQUEzQztBQUNBO0FBQ0Q7QUFQSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUU47QUFDRDtBQXhCeUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXlCMUUsU0F6QkQ7QUEwQkEsT0EzQkQ7QUE0QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlIRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUNxQnhSLGU7QUFDcEI7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNDLCtCQUF1RDtBQUFBLE1BQXhDN08sRUFBd0MsUUFBeENBLEVBQXdDO0FBQUEsTUFBcEM0QyxLQUFvQyxRQUFwQ0EsS0FBb0M7QUFBQSxNQUE3QnNKLFVBQTZCLFFBQTdCQSxVQUE2QjtBQUFBLE1BQWpCdVIsWUFBaUIsUUFBakJBLFlBQWlCOztBQUFBOztBQUN0RDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0UsT0FBS3pkLEVBQUwsR0FBVUEsRUFBVjtBQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDRSxPQUFLcU0sR0FBTCxDQUFVLE9BQVY7QUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUNFLE9BQUtvUixZQUFMLEdBQW9CQSxZQUFwQjtBQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBQ0UsT0FBSzdhLEtBQUwsR0FBYUEsS0FBYjtBQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDRSxPQUFLc0osVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxDOzs7QUFHRndVLHdEQUFHLENBQUU3UixlQUFGLEVBQW1COFIsZ0VBQW5CLENBQUgsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRUE7QUFDQztDQUdEOztBQUNBLElBQU1DLGVBQWUsR0FBRztBQUN2QjtBQUNBQyxXQUFTLEVBQUU7QUFBRXBqQixRQUFJLEVBQUUsS0FBUjtBQUFlQyxNQUFFLEVBQUU7QUFBbkIsR0FGWTtBQUd2Qm9qQixxQkFBbUIsRUFBRTtBQUFFcmpCLFFBQUksRUFBRSxLQUFSO0FBQWVDLE1BQUUsRUFBRTtBQUFuQixHQUhFO0FBSXZCcWpCLFdBQVMsRUFBRTtBQUFFdGpCLFFBQUksRUFBRSxNQUFSO0FBQWdCQyxNQUFFLEVBQUU7QUFBcEIsR0FKWTtBQU12QjtBQUNBc2pCLFNBQU8sRUFBRTtBQUFFdmpCLFFBQUksRUFBRSxLQUFSO0FBQWVDLE1BQUUsRUFBRTtBQUFuQixHQVBjO0FBUXZCdWpCLFVBQVEsRUFBRTtBQUFFeGpCLFFBQUksRUFBRSxLQUFSO0FBQWVDLE1BQUUsRUFBRTtBQUFuQixHQVJhO0FBU3ZCd2pCLFdBQVMsRUFBRTtBQUFFempCLFFBQUksRUFBRSxLQUFSO0FBQWVDLE1BQUUsRUFBRTtBQUFuQixHQVRZO0FBVXZCeWpCLFVBQVEsRUFBRTtBQUFFMWpCLFFBQUksRUFBRSxLQUFSO0FBQWVDLE1BQUUsRUFBRTtBQUFuQixHQVZhO0FBV3ZCMGpCLGVBQWEsRUFBRTtBQUFFM2pCLFFBQUksRUFBRSxLQUFSO0FBQWVDLE1BQUUsRUFBRTtBQUFuQixHQVhRO0FBWXZCMmpCLGlCQUFlLEVBQUU7QUFBRTVqQixRQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFFLEVBQUU7QUFBbEIsR0FaTTtBQWF2QjRqQixvQkFBa0IsRUFBRTtBQUFFN2pCLFFBQUksRUFBRSxJQUFSO0FBQWNDLE1BQUUsRUFBRTtBQUFsQixHQWJHO0FBY3ZCNmpCLFVBQVEsRUFBRTtBQUFFOWpCLFFBQUksRUFBRSxJQUFSO0FBQWNDLE1BQUUsRUFBRTtBQUFsQixHQWRhO0FBZXZCOGpCLFdBQVMsRUFBRTtBQUFFL2pCLFFBQUksRUFBRSxJQUFSO0FBQWNDLE1BQUUsRUFBRTtBQUFsQixHQWZZO0FBZ0J2QitqQixZQUFVLEVBQUU7QUFBRWhrQixRQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFFLEVBQUU7QUFBbEIsR0FoQlc7QUFrQnZCO0FBQ0Fna0Isb0JBQWtCLEVBQUU7QUFBRWprQixRQUFJLEVBQUUsS0FBUjtBQUFlQyxNQUFFLEVBQUU7QUFBbkIsR0FuQkc7QUFvQnZCaWtCLFFBQU0sRUFBRTtBQUFFbGtCLFFBQUksRUFBRSxlQUFSO0FBQXlCQyxNQUFFLEVBQUUsQ0FBRSxJQUFGLEVBQVEsR0FBUixFQUFhLElBQWI7QUFBN0IsR0FwQmU7QUFxQnZCa2tCLFFBQU0sRUFBRTtBQUFFbmtCLFFBQUksRUFBRSxnQkFBUjtBQUEwQkMsTUFBRSxFQUFFLENBQUUsSUFBRixFQUFRLEdBQVIsRUFBYSxJQUFiO0FBQTlCLEdBckJlO0FBc0J2QjtBQUNBO0FBQ0Fta0IsZUFBYSxFQUFFO0FBQUVwa0IsUUFBSSxFQUFFcWtCLGlCQUFpQixDQUFFLEdBQUYsQ0FBekI7QUFBa0Nwa0IsTUFBRSxFQUFFLENBQUUsSUFBRixFQUFRLEdBQVIsRUFBYSxJQUFiLEVBQW1CLEdBQW5CO0FBQXRDLEdBeEJRO0FBeUJ2QnFrQixpQkFBZSxFQUFFO0FBQUV0a0IsUUFBSSxFQUFFcWtCLGlCQUFpQixDQUFFLElBQUYsQ0FBekI7QUFBbUNwa0IsTUFBRSxFQUFFLENBQUUsSUFBRixFQUFRLEdBQVIsRUFBYSxJQUFiLEVBQW1CLEdBQW5CO0FBQXZDLEdBekJNO0FBMkJ2QjtBQUNBc2tCLG1CQUFpQixFQUFFO0FBQUV2a0IsUUFBSSxFQUFFcWtCLGlCQUFpQixDQUFFLElBQUYsQ0FBekI7QUFBbUNwa0IsTUFBRSxFQUFFLENBQUUsSUFBRixFQUFRLEdBQVIsRUFBYSxJQUFiLEVBQW1CLEdBQW5CO0FBQXZDLEdBNUJJO0FBNkJ2QnVrQixxQkFBbUIsRUFBRTtBQUFFeGtCLFFBQUksRUFBRXFrQixpQkFBaUIsQ0FBRSxHQUFGLENBQXpCO0FBQWtDcGtCLE1BQUUsRUFBRSxDQUFFLElBQUYsRUFBUSxHQUFSLEVBQWEsSUFBYixFQUFtQixHQUFuQjtBQUF0QyxHQTdCRTtBQStCdkI7QUFDQXdrQixpQkFBZSxFQUFFO0FBQUV6a0IsUUFBSSxFQUFFcWtCLGlCQUFpQixDQUFFLEdBQUYsQ0FBekI7QUFBa0Nwa0IsTUFBRSxFQUFFLENBQUUsSUFBRixFQUFRLEdBQVIsRUFBYSxJQUFiLEVBQW1CLEdBQW5CO0FBQXRDLEdBaENNO0FBaUN2QnlrQixtQkFBaUIsRUFBRTtBQUFFMWtCLFFBQUksRUFBRXFrQixpQkFBaUIsQ0FBRSxJQUFGLENBQXpCO0FBQW1DcGtCLE1BQUUsRUFBRSxDQUFFLElBQUYsRUFBUSxHQUFSLEVBQWEsSUFBYixFQUFtQixHQUFuQjtBQUF2QztBQWpDSSxDQUF4QixDLENBb0NBOztBQUNBLElBQU0wa0IscUJBQXFCLEdBQUc7QUFDN0JDLFNBQU8sRUFBRSxDQUFFLFdBQUYsRUFBZSxxQkFBZixFQUFzQyxXQUF0QyxDQURvQjtBQUU3QkMsY0FBWSxFQUFFLENBQ2IsU0FEYSxFQUNGLFVBREUsRUFDVSxXQURWLEVBQ3VCLFVBRHZCLEVBQ21DLGVBRG5DLEVBRWIsaUJBRmEsRUFFTSxvQkFGTixFQUU0QixVQUY1QixFQUdiLFdBSGEsRUFHQSxZQUhBLENBRmU7QUFPN0JDLFlBQVUsRUFBRSxDQUFFLG9CQUFGLEVBQXdCLFFBQXhCLEVBQWtDLFFBQWxDLENBUGlCO0FBUTdCQyxRQUFNLEVBQUUsQ0FBRSxlQUFGLEVBQW1CLGlCQUFuQjtBQVJxQixDQUE5QixDLENBV0E7O0FBQ0EsSUFBTUMsdUJBQXVCLEdBQUcsQ0FDL0IsU0FEK0IsRUFFL0IsY0FGK0IsRUFHL0IsWUFIK0IsRUFJL0IsUUFKK0IsQ0FBaEM7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUNxQkMsYzs7Ozs7QUFRcEI7QUFDRDtBQUNBO0FBQ0MsMEJBQWE1a0IsTUFBYixFQUFzQjtBQUFBOztBQUFBOztBQUNyQiw4QkFBT0EsTUFBUDtBQUVBQSxVQUFNLENBQUN1UCxNQUFQLENBQWNDLE1BQWQsQ0FBc0IsUUFBdEIsRUFBZ0M7QUFDL0IvUCxxQkFBZSxFQUFFO0FBQ2hCb2xCLGVBQU8sRUFBRUY7QUFETztBQURjLEtBQWhDO0FBSHFCO0FBUXJCO0FBRUQ7QUFDRDtBQUNBOzs7OztXQUNDLGdCQUFPO0FBQUE7O0FBQ04sVUFBTS9ZLEtBQUssR0FBRyxLQUFLNUwsTUFBTCxDQUFZNEwsS0FBMUI7QUFDQSxVQUFNa1osY0FBYyxHQUFHbFosS0FBSyxDQUFDdE0sUUFBTixDQUFlME0sU0FBdEM7QUFFQThZLG9CQUFjLENBQUNsRixFQUFmLENBQW1CLGNBQW5CLEVBQW1DLFlBQU07QUFDeEM7QUFDQSxjQUFJLENBQUN4VCxTQUFMLEdBQWlCLENBQUMwWSxjQUFjLENBQUN6VCxNQUFmLENBQXNCMFQsTUFBdEIsQ0FBNkI1UixFQUE3QixDQUFpQyxTQUFqQyxFQUE0QyxXQUE1QyxDQUFsQjtBQUNBLE9BSEQ7O0FBS0EsV0FBSzZSLDZCQUFMO0FBQ0E7QUFFRDtBQUNEO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0MseUNBQWdDO0FBQy9CLFVBQU1obEIsTUFBTSxHQUFHLEtBQUtBLE1BQXBCO0FBQ0EsVUFBTTRMLEtBQUssR0FBRzVMLE1BQU0sQ0FBQzRMLEtBQXJCO0FBQ0EsVUFBTTJILEtBQUssR0FBR3ZULE1BQU0sQ0FBQ29RLE9BQVAsQ0FBZTNELEdBQWYsQ0FBb0IsT0FBcEIsQ0FBZDtBQUNBLFVBQU13WSx5QkFBeUIsR0FBR0Msd0JBQXdCLENBQUVsbEIsTUFBTSxDQUFDdVAsTUFBUCxDQUFjOUMsR0FBZCxDQUFtQix3QkFBbkIsQ0FBRixDQUExRDs7QUFFQSxVQUFNMFksWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQXBrQixJQUFJLEVBQUk7QUFBQSxtREFDWWtrQix5QkFEWjtBQUFBOztBQUFBO0FBQzVCLDhEQUFvRTtBQUFBLGdCQUF4REcsd0JBQXdEO0FBQ25FLGdCQUFNemxCLElBQUksR0FBR3lsQix3QkFBd0IsQ0FBQ3psQixJQUF0QztBQUNBLGdCQUFNdUIsS0FBSyxHQUFHdkIsSUFBSSxDQUFDdWhCLElBQUwsQ0FBV25nQixJQUFYLENBQWQ7O0FBRUEsZ0JBQUtHLEtBQUwsRUFBYTtBQUNaLHFCQUFPO0FBQUVra0Isd0NBQXdCLEVBQXhCQTtBQUFGLGVBQVA7QUFDQTtBQUNEO0FBUjJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTNUIsT0FURDs7QUFXQSxVQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUVuVCxHQUFGLEVBQU96USxJQUFQLEVBQWlCO0FBQ3hDLFlBQUssQ0FBQzhSLEtBQUssQ0FBQ0MsT0FBTixDQUFlL1IsSUFBSSxDQUFDZ1MsS0FBcEIsQ0FBTixFQUFvQztBQUNuQztBQUNBOztBQUVELG9DQUFxQmhTLElBQUksQ0FBQzJqQix3QkFBMUI7QUFBQSxZQUFRemxCLElBQVIseUJBQVFBLElBQVI7QUFBQSxZQUFjQyxFQUFkLHlCQUFjQSxFQUFkO0FBRUEsWUFBTUMsT0FBTyxHQUFHRixJQUFJLENBQUMybEIsSUFBTCxDQUFXN2pCLElBQUksQ0FBQ1YsSUFBaEIsQ0FBaEI7QUFDQSxZQUFNd2tCLFFBQVEsR0FBRzNsQixFQUFFLENBQUVDLE9BQU8sQ0FBQ3NCLEtBQVIsQ0FBZSxDQUFmLENBQUYsQ0FBbkI7QUFFQSxZQUFNcWtCLFlBQVksR0FBRy9qQixJQUFJLENBQUNiLEtBQTFCO0FBRUEsWUFBSTZrQixXQUFXLEdBQUc1bEIsT0FBTyxDQUFDd0IsS0FBMUI7QUFFQXVLLGFBQUssQ0FBQytHLGFBQU4sQ0FBcUIsVUFBQWhHLE1BQU0sRUFBSTtBQUM5QixlQUFNLElBQUluSSxDQUFDLEdBQUcsQ0FBZCxFQUFpQkEsQ0FBQyxHQUFHM0UsT0FBTyxDQUFDK0csTUFBN0IsRUFBcUNwQyxDQUFDLEVBQXRDLEVBQTJDO0FBQzFDLGdCQUFNdEQsS0FBSyxHQUFHckIsT0FBTyxDQUFFMkUsQ0FBRixDQUFyQjtBQUNBLGdCQUFNa2hCLFdBQVcsR0FBR0gsUUFBUSxDQUFFL2dCLENBQUMsR0FBRyxDQUFOLENBQTVCO0FBQ0E5RCxtQkFBTyxDQUFDNEIsR0FBUixDQUFZcEIsS0FBWjs7QUFDQSxnQkFBS3drQixXQUFXLElBQUksSUFBcEIsRUFBMkI7QUFDMUJELHlCQUFXLElBQUl2a0IsS0FBSyxDQUFDMEYsTUFBckI7QUFFQTtBQUNBOztBQUVELGdCQUFNK2UsZUFBZSxHQUFHSCxZQUFZLENBQUNwa0IsS0FBYixDQUFtQndrQixZQUFuQixDQUFpQ0gsV0FBakMsQ0FBeEI7QUFDQSxnQkFBTUksWUFBWSxHQUFHamEsS0FBSyxDQUFDMEgsV0FBTixDQUFtQnFTLGVBQW5CLEVBQW9DQSxlQUFlLENBQUNDLFlBQWhCLENBQThCMWtCLEtBQUssQ0FBQzBGLE1BQXBDLENBQXBDLENBQXJCO0FBQ0EsZ0JBQU13SCxVQUFVLEdBQUcwWCw4QkFBOEIsQ0FBRUgsZUFBRixDQUFqRDtBQUNBLGdCQUFNSSxPQUFPLEdBQUc7QUFBRW5sQixtQkFBSyxFQUFHaWxCLFlBQVY7QUFBd0JoTCw0QkFBYyxFQUFFO0FBQXhDLGFBQWhCO0FBQ0FsTyxrQkFBTSxDQUFDaU8sU0FBUCxDQUFrQjFaLEtBQWxCLEVBQXlCNmtCLE9BQXpCO0FBQ0FuYSxpQkFBSyxDQUFDNEMsYUFBTixDQUFxQjdCLE1BQU0sQ0FBQzhCLFVBQVAsQ0FBbUJpWCxXQUFuQixFQUFnQ3RYLFVBQWhDLENBQXJCLEVBQW1FeVgsWUFBbkU7QUFDQW5sQixtQkFBTyxDQUFDNEIsR0FBUixDQUFZdEMsTUFBTSxDQUFDNEwsS0FBUCxDQUFhd04sT0FBekI7QUFDQXFNLHVCQUFXLElBQUlDLFdBQVcsQ0FBQzllLE1BQTNCO0FBQ0E7QUFDRCxTQXBCRDtBQXFCQSxPQW5DRDs7QUFxQ0EsVUFBTW9mLE9BQU8sR0FBRyxJQUFJQyxnRkFBSixDQUFpQmptQixNQUFNLENBQUM0TCxLQUF4QixFQUErQnVaLFlBQS9CLENBQWhCO0FBRUFhLGFBQU8sQ0FBQ3BHLEVBQVIsQ0FBWSxjQUFaLEVBQTRCeUYsZUFBNUI7QUFDQVcsYUFBTyxDQUFDblIsSUFBUixDQUFjLFdBQWQsRUFBNEJqVixFQUE1QixDQUFnQyxJQUFoQyxFQXpEK0IsQ0EyRC9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQTlHRDtBQUNEO0FBQ0E7QUFDQyxtQkFBd0I7QUFDdkIsYUFBTyxnQkFBUDtBQUNBOzs7O0VBTjBDa1QseUUsR0FrSDVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQSxTQUFTb1QsYUFBVCxDQUF3QnZtQixJQUF4QixFQUErQjtBQUM5QixNQUFLLE9BQU9BLElBQVAsSUFBZSxRQUFwQixFQUErQjtBQUM5QixXQUFPLElBQUl3bUIsTUFBSixZQUFpQkMsbURBQVksQ0FBRXptQixJQUFGLENBQTdCLFFBQVA7QUFDQSxHQUg2QixDQUs5Qjs7O0FBQ0EsU0FBT0EsSUFBUDtBQUNBLEMsQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVMwbUIsV0FBVCxDQUFzQnptQixFQUF0QixFQUEyQjtBQUMxQixNQUFLLE9BQU9BLEVBQVAsSUFBYSxRQUFsQixFQUE2QjtBQUM1QixXQUFPO0FBQUEsYUFBTSxDQUFFQSxFQUFGLENBQU47QUFBQSxLQUFQO0FBQ0EsR0FGRCxNQUVPLElBQUtBLEVBQUUsWUFBWTJaLEtBQW5CLEVBQTJCO0FBQ2pDLFdBQU87QUFBQSxhQUFNM1osRUFBTjtBQUFBLEtBQVA7QUFDQSxHQUx5QixDQU8xQjs7O0FBQ0EsU0FBT0EsRUFBUDtBQUNBLEMsQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFTa21CLDhCQUFULENBQXlDbFksUUFBekMsRUFBb0Q7QUFDbkQsTUFBTXlGLFFBQVEsR0FBR3pGLFFBQVEsQ0FBQ3lGLFFBQVQsR0FBb0J6RixRQUFRLENBQUN5RixRQUE3QixHQUF3Q3pGLFFBQVEsQ0FBQzBELFNBQWxFO0FBRUEsU0FBTytCLFFBQVEsQ0FBQy9FLGFBQVQsRUFBUDtBQUNBLEMsQ0FFRDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBUzBWLGlCQUFULENBQTRCc0MsY0FBNUIsRUFBNkM7QUFDNUMsU0FBTyxJQUFJSCxNQUFKLG1CQUF3QkcsY0FBeEIsaUJBQStDQSxjQUEvQyxpQkFBc0VBLGNBQXRFLFFBQVA7QUFDQSxDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVNwQix3QkFBVCxDQUFtQzNWLE1BQW5DLEVBQTRDO0FBQzNDLE1BQU03UCxLQUFLLEdBQUc2UCxNQUFNLENBQUM3UCxLQUFQLElBQWdCLEVBQTlCO0FBQ0EsTUFBTXFZLE1BQU0sR0FBR3hJLE1BQU0sQ0FBQ3dJLE1BQVAsSUFBaUIsRUFBaEM7O0FBQ0EsTUFBTXdPLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFDLGNBQWM7QUFBQSxXQUFJLENBQUN6TyxNQUFNLENBQUMwTyxRQUFQLENBQWlCRCxjQUFqQixDQUFMO0FBQUEsR0FBbkM7O0FBRUEsTUFBTUUsVUFBVSxHQUFHblgsTUFBTSxDQUFDc1YsT0FBUCxDQUFlOEIsTUFBZixDQUF1QmpuQixLQUF2QixFQUErQmlDLE1BQS9CLENBQXVDNGtCLFlBQXZDLENBQW5CO0FBRUEsU0FBT0ssK0JBQStCLENBQUVGLFVBQUYsQ0FBL0IsQ0FDTC9rQixNQURLLENBQ0c0a0IsWUFESCxFQUNrQjtBQURsQixHQUVMekcsR0FGSyxDQUVBLFVBQUEwRyxjQUFjO0FBQUEsV0FBSTFELGVBQWUsQ0FBRTBELGNBQUYsQ0FBZixJQUFxQ0EsY0FBekM7QUFBQSxHQUZkLEVBR0wxRyxHQUhLLENBR0EsVUFBQTBHLGNBQWM7QUFBQSxXQUFNO0FBQ3pCN21CLFVBQUksRUFBRXVtQixhQUFhLENBQUVNLGNBQWMsQ0FBQzdtQixJQUFqQixDQURNO0FBRXpCQyxRQUFFLEVBQUV5bUIsV0FBVyxDQUFFRyxjQUFjLENBQUM1bUIsRUFBakI7QUFGVSxLQUFOO0FBQUEsR0FIZCxDQUFQO0FBT0EsQyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVNnbkIsK0JBQVQsQ0FBMENDLFdBQTFDLEVBQXdEO0FBQ3ZEO0FBQ0EsTUFBTUMsc0JBQXNCLEdBQUcsSUFBSXBGLEdBQUosRUFBL0I7O0FBRnVELDhDQUlsQm1GLFdBSmtCO0FBQUE7O0FBQUE7QUFJdkQsMkRBQW1EO0FBQUEsVUFBdkNFLHFCQUF1Qzs7QUFDbEQsVUFBS3pDLHFCQUFxQixDQUFFeUMscUJBQUYsQ0FBMUIsRUFBc0Q7QUFBQSxvREFDdkJ6QyxxQkFBcUIsQ0FBRXlDLHFCQUFGLENBREU7QUFBQTs7QUFBQTtBQUNyRCxpRUFBK0U7QUFBQSxnQkFBbkVQLGNBQW1FO0FBQzlFTSxrQ0FBc0IsQ0FBQzVXLEdBQXZCLENBQTRCc1csY0FBNUI7QUFDQTtBQUhvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSXJELE9BSkQsTUFJTztBQUNOTSw4QkFBc0IsQ0FBQzVXLEdBQXZCLENBQTRCNlcscUJBQTVCO0FBQ0E7QUFDRDtBQVpzRDtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWN2RCxTQUFPeE4sS0FBSyxDQUFDNVosSUFBTixDQUFZbW5CLHNCQUFaLENBQVA7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNoUkQ7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxpRUFBZSw4L0I7Ozs7Ozs7Ozs7Ozs7OztBQ0FmLGlFQUFlLG8wQiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vZG9jZWRpdG9yX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9kb2NlZGl0b3JfY29udHJvbGxlci5qc1wiLFxuXHRcIi4vZmlsZWljb25fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2ZpbGVpY29uX2NvbnRyb2xsZXIuanNcIixcblx0XCIuL2ZvbGRlcl9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvZm9sZGVyX2NvbnRyb2xsZXIuanNcIixcblx0XCIuL3J1bGVfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL3J1bGVfY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC4oanx0KXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsImltcG9ydCB7Q29udHJvbGxlcn0gZnJvbSAnc3RpbXVsdXMnO1xuaW1wb3J0IERlY291cGxlZEVkaXRvciBmcm9tICcuLi9Eb2NEZWNvdXBsZWRFZGl0b3InO1xuaW1wb3J0IENLRWRpdG9ySW5zcGVjdG9yIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtaW5zcGVjdG9yJztcbmltcG9ydCBUZXh0VGVtcGxhdGluZyBmcm9tICcuLi90ZXh0dGVtcGxhdGluZyc7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG4vL2ltcG9ydCBFeHBvcnRQZGYgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1leHBvcnQtcGRmL3NyYy9leHBvcnRwZGYnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBzdGF0aWMgdGFyZ2V0cyA9IFtcImRvYy12YXJpYWJsZXNcIl1cblxuXG4gICAgY29ubmVjdCgpIHtcblxuICAgICAgICBEZWNvdXBsZWRFZGl0b3JcbiAgICAgICAgICAgIC5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvY3VtZW50LWVkaXRvcl9fZWRpdGFibGUnKSwge1xuXG4gICAgICAgICAgICAgICAgdHlwaW5nOiB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybWF0aW9uczoge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogLyhcXFt7Mn0pKFthLXpdKykoXFxdezJ9KSQvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzogbWF0Y2hlcyA9PiBbbnVsbCwgdGhpcy5jaGFuZ2VUZW1wbGF0ZUl0ZW0obWF0Y2hlcyksIG51bGxdLy8gIC8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGVkaXRvciA9PiB7XG5cblxuICAgICAgICAgICAgICAgIENLRWRpdG9ySW5zcGVjdG9yLmF0dGFjaCggZWRpdG9yICk7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9vbGJhckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb2N1bWVudC1lZGl0b3JfX3Rvb2xiYXInKTtcbiAgICAgICAgICAgICAgICB0b29sYmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRvci51aS52aWV3LnRvb2xiYXIuZWxlbWVudCk7XG5cblxuICAgICAgICAgICAgICAgIHdpbmRvdy5lZGl0b3IgPSBlZGl0b3I7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0b3IgPSBlZGl0b3I7XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIHRleHRUZXN0Q2FsbGJhY2socmFuZ2UpIHtcbiAgICAgICAgaWYgKCFyYW5nZS5jb2xsYXBzZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIERlY291cGxlZEVkaXRvci5wbHVnaW5zLnRleHRNYXRjaC5tYXRjaChyYW5nZSwgbWF0Y2hDYWxsYmFjayk7XG4gICAgfVxuXG4gICAgbWF0Y2hDYWxsYmFjayh0ZXh0LCBvZmZzZXQpIHtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSAvXFxbezJ9KFtBLXpdfFxcXSkqJC8sXG4gICAgICAgICAgICBtYXRjaCA9IHRleHQuc2xpY2UoMCwgb2Zmc2V0KVxuICAgICAgICAgICAgICAgIC5tYXRjaChwYXR0ZXJuKTtcblxuICAgICAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGFydDogbWF0Y2guaW5kZXgsXG4gICAgICAgICAgICBlbmQ6IG9mZnNldFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGRhdGFDYWxsYmFjayhtYXRjaEluZm8sIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBkYXRhID0gUExBQ0VIT0xERVJTLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgdmFyIGl0ZW1OYW1lID0gJ1tbJyArIGl0ZW0ubmFtZSArICddXSc7XG4gICAgICAgICAgICByZXR1cm4gaXRlbU5hbWUuaW5kZXhPZihtYXRjaEluZm8ucXVlcnkudG9Mb3dlckNhc2UoKSkgPT0gMDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgfVxuXG4gICAgY2hhbmdlVGVtcGxhdGVJdGVtKG1hdGNoKSB7XG5cbiAgICAgICAgcmV0dXJuIG1hdGNoWzFdO1xuICAgIH1cbiAgICBhZGRQbGVob2xkZXIoIGlkICl7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB7XG4gICAgICAgICAgICBpZCA6IGlkLFxuICAgICAgICAgICAgcXVlc3Rpb24gOiBcIlwiLFxuICAgICAgICAgICAgdHlwZSA6IFwiaW5wdXRcIlxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHtDb250cm9sbGVyfSBmcm9tICdzdGltdWx1cyc7XG5cbmltcG9ydCBwcmV0dHlGaWxlSWNvbnMgZnJvbSAncHJldHR5LWZpbGUtaWNvbnMnO1xuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG5cbiAgICBzdGF0aWMgdmFsdWVzID0geyBmaWxlbmFtZTogU3RyaW5nIH1cblxuICAgIGNvbm5lY3QoKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5maWxlbmFtZSk7XG4gICAgICAgIHRoaXMuZ2V0SWNvbih0aGlzLmZpbGVuYW1lKTtcbiAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9jZXNzKTtcbiAgICB9XG5cblxuICAgIGdldEljb24oZmlsZU5hbWUpe1xuICAgICAgICB2YXIgaXRlbSA9IHByZXR0eUZpbGVJY29ucy5nZXRJY29uKHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJykpXG4gICAgICAgIHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaW1nLnNyYyA9ICcvYXNzZXRzL2ltZy9zdmcvJyArIGl0ZW0gKyAnLnN2Zyc7XG4gICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsIGl0ZW0pO1xuICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCd0aXRsZScsIGl0ZW0pO1xuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoaW1nKSA7XG5cbiAgICB9XG59XG4iLCJpbXBvcnQge0NvbnRyb2xsZXJ9IGZyb20gJ3N0aW11bHVzJztcbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuXG5cblxuICAgIGNvbm5lY3QoKSB7XG4gICAgfVxuXG5cblxuICAgIHN0b3BQcm9wYWdhdGlvbihldmVudCkge1xuICAgICAgICAvLyBUaGUgZXZlbnQgd29uJ3QgYmUgcHJvcGFnYXRlZCB1cCB0byB0aGUgZG9jdW1lbnQgTk9ERSBhbmRcbiAgICAgICAgLy8gdGhlcmVmb3JlIGRlbGVnYXRlZCBldmVudHMgd29uJ3QgYmUgZmlyZWRcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgZm9sZGVyTGlzdEZ1Y250aW9uKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGFyZyA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoJCkge1xuICAgICAgICAgICAgdmFyIG1vdmVMRm9sZGVyTGlzdCA9ICQoJ2RpdiNtb3ZlX2xpc3QnKVxuXG5cbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgICAgIHVybDogXCIvYXBpL2ZvbGRlci9saXN0LXN1Yi1pdGVtL1wiICsgYXJnLmZvbGRlck1vdmluZ0luLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IC0xLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImZvbGRlclwiLFxuICAgICAgICAgICAgICAgICAgICB1c2VyX2NvZGU6IFwiMDk3MDIyOWUtNDg2Ny00YWRhLWIwYWMtYTE5OTQ0NmNiYzIxXCJcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIG1vdmVMRm9sZGVyTGlzdC5lbXB0eSgpO1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLnJlc3VsdHMuZGF0YTtcblxuICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vZmlsbCBkcm9wZG93biBsaXN0IHdpdGggZm9sZGVyc1xuXG4gICAgICAgICAgICAgICAgJCgnPHNwYW4vPicpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnZHJvcGRvd24taXRlbSBkcm9wZG93bi1oZWFkZXInKVxuICAgICAgICAgICAgICAgICAgICAudGV4dChyZXMucmVzdWx0cy5wYXJlbnRfZm9sZGVyKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8obW92ZUxGb2xkZXJMaXN0KTtcbiAgICAgICAgICAgICAgICAkKCc8ZGl2Lz4nKVxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2Ryb3Bkb3duLWRpdmlkZXInKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8obW92ZUxGb2xkZXJMaXN0KTtcbiAgICAgICAgICAgICAgICAkLmVhY2goZGF0YS5yb3dzLCBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgICAgICAgICAvLyB2YXIgaWQgPSAnbW92ZV9saXN0JyArIGk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsaXN0SXRlbSA9ICQoJzxkaXYvPicpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2QtZmxleCAgZmxleC1yb3cgbS0yIGJvcmRlci1ib3R0b20nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKG1vdmVMRm9sZGVyTGlzdCk7XG4gICAgICAgICAgICAgICAgICAgICQoJzxkaXYvPicpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2Ryb3Bkb3duLWRpdmlkZXInKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKGxpc3RJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnPGkvPicpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2ZhcyBmYS1mb2xkZXIgbXItMicpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8obGlzdEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGlGb2xkZXIgPSAkKCc8YS8+JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdocmVmJywgXCIjXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1mb2xkZXItdG8tbW92ZScsIGFyZy5mb2xkZXJUb01vdmUpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1mb2xkZXItbW92aW5nLWluJywgZGF0YS5yb3dzW2ldLmNvZGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1hY3Rpb24nLCBcImNsaWNrLT5mb2xkZXIjZm9sZGVyTGlzdEZ1Y250aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGV4dChkYXRhLnJvd3NbaV0ubGFiZWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8obGlzdEl0ZW0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8qICoqKioqKioqXG4gICAgICAgICAgICAgICAgICAgICAgbW92ZSB0byBzcGVjaWZpYyBmb2xkZXIgY29udGVudCBpbiBkcm9wZG93biBsaXN0XG4gICAgICAgICAgICAgICAgICAgICAgYnkgcmVmaWxsaW5nIHRoZSBkcm9wZG93biBtZW51ICAgICAgICoqKioqKioqKioqKiogICovXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHVybCA9IGFyZy5wYXRoO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSB1cmwucmVwbGFjZShcIml0ZW1DXCIsIGFyZy5mb2xkZXJUb01vdmUpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSB1cmwucmVwbGFjZShcIm5ld1BhcmVudENcIiwgZGF0YS5yb3dzW2ldLmNvZGUpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSB1cmwucmVwbGFjZShcInVzZXJDXCIsIFwiMDk3MDIyOWUtNDg2Ny00YWRhLWIwYWMtYTE5OTQ0NmNiYzIxXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh1cmwpXG4gICAgICAgICAgICAgICAgICAgIGxldCBtb3ZlRm9ybSA9ICQoJzxmb3JtLz4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdtbC1hdXRvJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhY3Rpb24nLCB1cmwpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignbWV0aG9kJywgJ3Bvc3QnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKGxpc3RJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN1Ym1pdEJ1dHRvbiA9ICQoJzxidXR0b24vPicpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2J0biBidG4tYmxvY2sgYnRuLW91dGxpbmUtc2Vjb25kYXJ5ICBwLTAgbWItMScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cigndHlwZScsICdzdWJtaXQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKG1vdmVGb3JtKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnPGkvPicpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2ZhcyBmYS1jaGV2cm9uLWNpcmNsZS1kb3duIG1yLTEgbWwtMScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8oc3VibWl0QnV0dG9uKTtcblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG5cblxuICAgIH07XG59XG4iLCJpbXBvcnQge0NvbnRyb2xsZXJ9IGZyb20gJ3N0aW11bHVzJztcbmltcG9ydCBQcmlzbSBmcm9tICdwcmlzbWpzJztcbmltcG9ydCBUcmlidXRlIGZyb20gXCJ0cmlidXRlanNcIjtcbmltcG9ydCB7Q29tcG9uZW50Q2hpcElucHV0fSBmcm9tICdjaGlwLWlucHV0Jztcbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgUHJpc20ubGFuZ3VhZ2VzLnJ1bGUgPSB7XG4gICAgICAgICAgICAnbnVtYmVyJzp7XG4gICAgICAgICAgICAgICAgcGF0dGVybiA6IC9bMC05XSsoPzpcXC5bMC05XSspPyhbRWVdW1xcK1xcLV1bMC05XSspPy9cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAncHVuY3R1YXRpb24nOntcbiAgICAgICAgICAgICAgICBwYXR0ZXJuIDogL1soKXt9OzosXS9cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnc3RyaW5nJzp7XG4gICAgICAgICAgICAgICAgcGF0dGVybiA6IC9cIlswLTlhLXpBLVotX10rXCIvXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ29wZXJhdG9yJzp7XG4gICAgICAgICAgICAgICAgcGF0dGVybiA6IC9cXGJbQS1aX10rXFxiLyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ2V0T3BlcmF0b3JzKChvcGVyYXRvcnMpPT57XG5cbiAgICAgICAgICAgIHRoaXMucnVsZUF1dG9jb21wbGV0ZShvcGVyYXRvcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbiAgICBydWxlQXV0b2NvbXBsZXRlKG9wZXJhdG9ycyl7XG5cbiAgICAgICAgdmFyIHRyaWJ1dGUgPSBuZXcgVHJpYnV0ZSh7XG4gICAgICAgICAgICB2YWx1ZXM6IG9wZXJhdG9ycyxcbiAgICAgICAgICAgIHNlbGVjdFRlbXBsYXRlOiBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICAgaXRlbS5vcmlnaW5hbC5rZXk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAvLyAgICBjb250YWluZXJDbGFzczogXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gdHJpYnV0ZS1jb250YWluZXJcIixcbiAgICAgICAgICAgIG1lbnVJdGVtVGVtcGxhdGU6IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gICAnPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPicraXRlbS5zdHJpbmcgKyAnPGkgY2xhc3M9XCJmYXIgZmEtcXVlc3Rpb24tY2lyY2xlIGhlbHBcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbXVsdGlDb2xsYXBzZUV4YW1wbGUyXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cIm11bHRpQ29sbGFwc2VFeGFtcGxlMlwiPjwvaT48L2Rpdj4nO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGF1dG9jb21wbGV0ZU1vZGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHRyaWJ1dGUuYXR0YWNoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdGluZ1wiKSk7XG4gICAgfVxuICAgIGhpZ2hsaWdodCgpe1xuXG4gICAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0aW5nXCIpO1xuXG4gICAgICAgIGxldCBydWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaWdobGlnaHRpbmctY29udGVudFwiKTtcblxuICAgICAgICBydWxlLmZvY3VzKCk7XG4gICAgICAgIHJ1bGUuaW5uZXJIVE1MID0gUHJpc20uaGlnaGxpZ2h0KHRleHQudmFsdWUsIFByaXNtLmxhbmd1YWdlcy5ydWxlLCAncnVsZScpO1xuICAgICAgICB0aGlzLnN5bmNfc2Nyb2xsKCB0ZXh0ICk7XG4gICAgfVxuXG4gICAgY2hlY2tfdGFiKCBldmVudCkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdGluZ1wiKTtcbiAgICAgICAgbGV0IGNvZGUgPSBlbGVtZW50LnZhbHVlO1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09IFwiVGFiXCIpIHtcbiAgICAgICAgICAgIC8qIFRhYiBrZXkgcHJlc3NlZCAqL1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gc3RvcCBub3JtYWxcbiAgICAgICAgICAgIGxldCBiZWZvcmVfdGFiID0gY29kZS5zbGljZSgwLCBlbGVtZW50LnNlbGVjdGlvblN0YXJ0KTsgLy8gdGV4dCBiZWZvcmUgdGFiXG4gICAgICAgICAgICBsZXQgYWZ0ZXJfdGFiID0gY29kZS5zbGljZShlbGVtZW50LnNlbGVjdGlvbkVuZCwgZWxlbWVudC52YWx1ZS5sZW5ndGgpOyAvLyB0ZXh0IGFmdGVyIHRhYlxuICAgICAgICAgICAgbGV0IGN1cnNvcl9wb3MgPSBlbGVtZW50LnNlbGVjdGlvbkVuZCArIDI7IC8vIGFmdGVyIHRhYiBwbGFjZWQsIHdoZXJlIGN1cnNvciBtb3ZlcyB0byAtIDIgZm9yIDIgc3BhY2VzXG4gICAgICAgICAgICBlbGVtZW50LnZhbHVlID0gYmVmb3JlX3RhYiArIFwiICBcIiArIGFmdGVyX3RhYjsgLy8gYWRkIHRhYiBjaGFyIC0gMiBzcGFjZXNcbiAgICAgICAgICAgIC8vIG1vdmUgY3Vyc29yXG4gICAgICAgICAgICBlbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gY3Vyc29yX3BvcztcbiAgICAgICAgICAgIGVsZW1lbnQuc2VsZWN0aW9uRW5kID0gY3Vyc29yX3BvcztcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHN5bmNfc2Nyb2xsKGVsZW1lbnQpIHtcbiAgICAgICAgLyogU2Nyb2xsIHJlc3VsdCB0byBzY3JvbGwgY29vcmRzIG9mIGV2ZW50IC0gc3luYyB3aXRoIHRleHRhcmVhICovXG4gICAgICAgIGxldCByZXN1bHRfZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGlnaGxpZ2h0aW5nXCIpO1xuICAgICAgICAvLyBHZXQgYW5kIHNldCB4IGFuZCB5XG4gICAgICAgIHJlc3VsdF9lbGVtZW50LnNjcm9sbFRvcCA9IGVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICByZXN1bHRfZWxlbWVudC5zY3JvbGxMZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgIH1cblxuICAgIGdldE9wZXJhdG9ycyggY2IpIHtcbiAgICAgICAgdmFyIFVSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9ydWxlXCI7XG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBbXTtcbiAgICAgICAgICAgIGlmKHhoci5yZWFkeVN0YXRlID09PSA0KXtcbiAgICAgICAgICAgICAgICBpZiAoICB4aHIuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KS5yZXN1bHRzLm9wZXJhdG9ycztcblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoeGhyLnN0YXR1cyA9PT0gNDAzKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2IoZGF0YSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfTtcbiAgICAgICAgeGhyLm9wZW4oXCJHRVRcIiwgVVJMICwgZmFsc2UpO1xuICAgICAgICB4aHIuc2VuZCgpO1xuICAgIH1cbiAgICBjb21waWxlKCApIHtcbiAgICAgICAgbGV0IHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRpbmdcIik7XG4gICAgICAgIGxldCBydWxlVmFycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicnVsZS12YXJzXCIpO1xuXG4gICAgICAgIHZhciB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9ydWxlL2NvbXBpbGUnO1xuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHZhciBib2R5ID0ge1xuICAgICAgICAgICAgZXhwcmVzc2lvbiA6IHRleHQudmFsdWUgLFxuICAgICAgICAgICAgZXhwcl9hcmcgOiB0aGlzLmdldFJ1bGVWYXJzKHJ1bGVWYXJzLmNoaXBzKVxuICAgICAgICB9XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiAge1xuICAgICAgICAgICAgaWYoeGhyLnJlYWR5U3RhdGUgPT09IDQpe1xuICAgICAgICAgICAgICAgIGlmICggIHhoci5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93QWxlcnRzKGRhdGEucmVzdWx0cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgdXJsICApO1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtdHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIik7XG4gICAgICAgIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KGJvZHkpKTtcbiAgICB9XG4gICAgIHNob3dBbGVydHMocmVzdWx0cykge1xuICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvb3RzdHJhcC1hbGVydCcpLmNsYXNzTmFtZSA9IFwiYWxlcnQgYWxlcnQtXCIrIHJlc3VsdHMuc2NvcGUgO1xuXG4gICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9vdHN0cmFwLWFsZXJ0JykuaW5uZXJIVE1MID0gcmVzdWx0cy5hbGVydCA7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib290c3RyYXAtYWxlcnQnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib290c3RyYXAtYWxlcnQnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnfSwgMTcwMDApO1xuICAgICAgICBpZihyZXN1bHRzLnNjb3BlID09ICdzdWNjZXNzJyl7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0LXJ1bGUnKS5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSA7XG4gICAgICAgIH1pZihyZXN1bHRzLnNjb3BlID09ICdkYW5nZXInKXtcbiAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0LXJ1bGUnKS5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLFwidHJ1ZVwiKSA7XG4gICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBnZXRSdWxlVmFycyhhcmdzKSB7XG5cbiAgICAgICAgbGV0IGV4cHJfYXJnID0gW107XG4gICAgICAgIGZvciAobGV0IGFyZyBvZiBhcmdzKSB7XG4gICAgICAgICAgICBleHByX2FyZy5wdXNoKGFyZy5sYWJlbCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coZXhwcl9hcmcpO1xuICAgICAgICByZXR1cm4gZXhwcl9hcmc7XG4gICAgfVxufVxuXG5cbiIsImltcG9ydCBEZWNvdXBsZWRFZGl0b3JCYXNlICBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWVkaXRvci1kZWNvdXBsZWQvc3JjL2RlY291cGxlZGVkaXRvcic7XG5pbXBvcnQgSW5wdXQgIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtdHlwaW5nL3NyYy9pbnB1dCc7XG5pbXBvcnQgRXNzZW50aWFscyBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWVzc2VudGlhbHMvc3JjL2Vzc2VudGlhbHMnO1xuaW1wb3J0IEFsaWdubWVudCBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWFsaWdubWVudC9zcmMvYWxpZ25tZW50JztcbmltcG9ydCBGb250U2l6ZSBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWZvbnQvc3JjL2ZvbnRzaXplJztcbmltcG9ydCBGb250RmFtaWx5IGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtZm9udC9zcmMvZm9udGZhbWlseSc7XG5pbXBvcnQgRm9udENvbG9yIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtZm9udC9zcmMvZm9udGNvbG9yJztcbmltcG9ydCBGb250QmFja2dyb3VuZENvbG9yIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtZm9udC9zcmMvZm9udGJhY2tncm91bmRjb2xvcic7XG5pbXBvcnQgVXBsb2FkQWRhcHRlciBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWFkYXB0ZXItY2tmaW5kZXIvc3JjL3VwbG9hZGFkYXB0ZXInO1xuaW1wb3J0IEF1dG9mb3JtYXQgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1hdXRvZm9ybWF0L3NyYy9hdXRvZm9ybWF0JztcbmltcG9ydCBCb2xkIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtYmFzaWMtc3R5bGVzL3NyYy9ib2xkJztcbmltcG9ydCBJdGFsaWMgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1iYXNpYy1zdHlsZXMvc3JjL2l0YWxpYyc7XG5pbXBvcnQgU3RyaWtldGhyb3VnaCBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWJhc2ljLXN0eWxlcy9zcmMvc3RyaWtldGhyb3VnaCc7XG5pbXBvcnQgVW5kZXJsaW5lIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtYmFzaWMtc3R5bGVzL3NyYy91bmRlcmxpbmUnO1xuaW1wb3J0IEJsb2NrUXVvdGUgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1ibG9jay1xdW90ZS9zcmMvYmxvY2txdW90ZSc7XG5pbXBvcnQgQ0tGaW5kZXIgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1ja2ZpbmRlci9zcmMvY2tmaW5kZXInO1xuaW1wb3J0IEVhc3lJbWFnZSBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWVhc3ktaW1hZ2Uvc3JjL2Vhc3lpbWFnZSc7XG5pbXBvcnQgSGVhZGluZyBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWhlYWRpbmcvc3JjL2hlYWRpbmcnO1xuaW1wb3J0IEltYWdlIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtaW1hZ2Uvc3JjL2ltYWdlJztcbmltcG9ydCBJbWFnZUNhcHRpb24gZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1pbWFnZS9zcmMvaW1hZ2VjYXB0aW9uJztcbmltcG9ydCBJbWFnZVN0eWxlIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtaW1hZ2Uvc3JjL2ltYWdlc3R5bGUnO1xuaW1wb3J0IEltYWdlVG9vbGJhciBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWltYWdlL3NyYy9pbWFnZXRvb2xiYXInO1xuaW1wb3J0IEltYWdlVXBsb2FkIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtaW1hZ2Uvc3JjL2ltYWdldXBsb2FkJztcbmltcG9ydCBJbmRlbnQgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1pbmRlbnQvc3JjL2luZGVudCc7XG5pbXBvcnQgSW5kZW50QmxvY2sgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1pbmRlbnQvc3JjL2luZGVudGJsb2NrJztcbmltcG9ydCBUZW1wbGF0ZSBmcm9tICcuL2NrZWRpdG9yNS1saW5rL3NyYy90ZW1wbGF0ZSc7XG5pbXBvcnQgTGluayBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWxpbmsvc3JjL2xpbmsnO1xuaW1wb3J0IExpc3QgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1saXN0L3NyYy9saXN0JztcbmltcG9ydCBNZWRpYUVtYmVkIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtbWVkaWEtZW1iZWQvc3JjL21lZGlhZW1iZWQnO1xuaW1wb3J0IFBhcmFncmFwaCBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LXBhcmFncmFwaC9zcmMvcGFyYWdyYXBoJztcbmltcG9ydCBQYXN0ZUZyb21PZmZpY2UgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1wYXN0ZS1mcm9tLW9mZmljZS9zcmMvcGFzdGVmcm9tb2ZmaWNlJztcbmltcG9ydCBUYWJsZSBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LXRhYmxlL3NyYy90YWJsZSc7XG5pbXBvcnQgVGFibGVUb29sYmFyIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtdGFibGUvc3JjL3RhYmxldG9vbGJhcic7XG5pbXBvcnQgQ2xvdWRTZXJ2aWNlcyBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWNsb3VkLXNlcnZpY2VzL3NyYy9jbG91ZHNlcnZpY2VzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVjb3VwbGVkRWRpdG9yIGV4dGVuZHMgRGVjb3VwbGVkRWRpdG9yQmFzZSB7fVxuXG4vLyBQbHVnaW5zIHRvIGluY2x1ZGUgaW4gdGhlIGJ1aWxkLlxuRGVjb3VwbGVkRWRpdG9yLmJ1aWx0aW5QbHVnaW5zID0gW1xuICAgIEVzc2VudGlhbHMsXG4gICAgQWxpZ25tZW50LFxuICAgIEZvbnRTaXplLFxuICAgIEZvbnRGYW1pbHksXG4gICAgRm9udENvbG9yLFxuICAgIEZvbnRCYWNrZ3JvdW5kQ29sb3IsXG4gICAgVXBsb2FkQWRhcHRlcixcbiAgICBBdXRvZm9ybWF0LFxuICAgIEJvbGQsXG4gICAgSXRhbGljLFxuICAgIFN0cmlrZXRocm91Z2gsXG4gICAgVW5kZXJsaW5lLFxuICAgIEJsb2NrUXVvdGUsXG4gICAgQ0tGaW5kZXIsXG4gICAgRWFzeUltYWdlLFxuICAgIEhlYWRpbmcsXG4gICAgSW1hZ2UsXG4gICAgSW1hZ2VDYXB0aW9uLFxuICAgIEltYWdlU3R5bGUsXG4gICAgSW1hZ2VUb29sYmFyLFxuICAgIEltYWdlVXBsb2FkLFxuICAgIEluZGVudCxcbiAgICBJbmRlbnRCbG9jayxcbiAgICBMaW5rLFxuICAgIExpc3QsXG4gICAgTWVkaWFFbWJlZCxcbiAgICBQYXJhZ3JhcGgsXG4gICAgUGFzdGVGcm9tT2ZmaWNlLFxuICAgIFRhYmxlLFxuICAgIFRhYmxlVG9vbGJhcixcbiAgICBUZW1wbGF0ZSxcbiAgICBDbG91ZFNlcnZpY2VzXG5cbl07XG5cbi8vIEVkaXRvciBjb25maWd1cmF0aW9uLlxuRGVjb3VwbGVkRWRpdG9yLmRlZmF1bHRDb25maWcgPSB7XG4gICAgdG9vbGJhcjoge1xuICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgJ3RlbXBsYXRlJyxcbiAgICAgICAgICAgICd8JyxcbiAgICAgICAgICAgICdoZWFkaW5nJyxcbiAgICAgICAgICAgICd8JyxcbiAgICAgICAgICAgICdmb250ZmFtaWx5JyxcbiAgICAgICAgICAgICdmb250c2l6ZScsXG4gICAgICAgICAgICAnZm9udENvbG9yJyxcbiAgICAgICAgICAgICdmb250QmFja2dyb3VuZENvbG9yJyxcbiAgICAgICAgICAgICd8JyxcbiAgICAgICAgICAgICdib2xkJyxcbiAgICAgICAgICAgICdpdGFsaWMnLFxuICAgICAgICAgICAgJ3VuZGVybGluZScsXG4gICAgICAgICAgICAnc3RyaWtldGhyb3VnaCcsXG4gICAgICAgICAgICAnfCcsXG4gICAgICAgICAgICAnYWxpZ25tZW50JyxcbiAgICAgICAgICAgICd8JyxcbiAgICAgICAgICAgICdudW1iZXJlZExpc3QnLFxuICAgICAgICAgICAgJ2J1bGxldGVkTGlzdCcsXG4gICAgICAgICAgICAnfCcsXG4gICAgICAgICAgICAnaW5kZW50JyxcbiAgICAgICAgICAgICdvdXRkZW50JyxcbiAgICAgICAgICAgICd8JyxcbiAgICAgICAgICAgICdibG9ja3F1b3RlJyxcbiAgICAgICAgICAgICdpbWFnZVVwbG9hZCcsXG4gICAgICAgICAgICAnaW5zZXJ0VGFibGUnLFxuICAgICAgICAgICAgJ21lZGlhRW1iZWQnLFxuICAgICAgICAgICAgJ3wnLFxuICAgICAgICAgICAgJ3VuZG8nLFxuICAgICAgICAgICAgJ3JlZG8nXG4gICAgICAgIF1cbiAgICB9LFxuICAgIGltYWdlOiB7XG4gICAgICAgIHN0eWxlczogW1xuICAgICAgICAgICAgJ2Z1bGwnLFxuICAgICAgICAgICAgJ2FsaWduTGVmdCcsXG4gICAgICAgICAgICAnYWxpZ25SaWdodCdcbiAgICAgICAgXSxcbiAgICAgICAgdG9vbGJhcjogW1xuICAgICAgICAgICAgJ2ltYWdlU3R5bGU6YWxpZ25MZWZ0JyxcbiAgICAgICAgICAgICdpbWFnZVN0eWxlOmZ1bGwnLFxuICAgICAgICAgICAgJ2ltYWdlU3R5bGU6YWxpZ25SaWdodCcsXG4gICAgICAgICAgICAnfCcsXG4gICAgICAgICAgICAnaW1hZ2VUZXh0QWx0ZXJuYXRpdmUnXG4gICAgICAgIF1cbiAgICB9LFxuICAgIHRhYmxlOiB7XG4gICAgICAgIGNvbnRlbnRUb29sYmFyOiBbXG4gICAgICAgICAgICAndGFibGVDb2x1bW4nLFxuICAgICAgICAgICAgJ3RhYmxlUm93JyxcbiAgICAgICAgICAgICdtZXJnZVRhYmxlQ2VsbHMnXG4gICAgICAgIF1cbiAgICB9LFxuICAgIC8vIFRoaXMgdmFsdWUgbXVzdCBiZSBrZXB0IGluIHN5bmMgd2l0aCB0aGUgbGFuZ3VhZ2UgZGVmaW5lZCBpbiB3ZWJwYWNrLmNvbmZpZy5qcy5cbiAgICBsYW5ndWFnZTogJ2VuJ1xufTtcbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuXG5cbmltcG9ydCAndHJpYnV0ZWpzJztcbmltcG9ydCAnYm9vdHN0cmFwJztcbmltcG9ydCAnLi9ib290c3RyYXAnO1xucmVxdWlyZSgncHJvY2VzcycpOyIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5Jztcbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLihqfHQpc3g/JC9cbikpO1xuXG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCIvKipcbiAqIEBsaWNlbnNlIENvcHlyaWdodCAoYykgMjAwMy0yMDIxLCBDS1NvdXJjZSAtIEZyZWRlcmljbyBLbmFiYmVuLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogRm9yIGxpY2Vuc2luZywgc2VlIExJQ0VOU0UubWQgb3IgaHR0cHM6Ly9ja2VkaXRvci5jb20vbGVnYWwvY2tlZGl0b3Itb3NzLWxpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGluay91bmxpbmtjb21tYW5kXG4gKi9cblxuaW1wb3J0ICBDb21tYW5kICBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWNvcmUvc3JjL2NvbW1hbmQnO1xuaW1wb3J0ICBmaW5kQXR0cmlidXRlUmFuZ2UgIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtdHlwaW5nL3NyYy91dGlscy9maW5kYXR0cmlidXRlcmFuZ2UnO1xuaW1wb3J0ICBmaXJzdCAgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS11dGlscy9zcmMvZmlyc3QnO1xuXG5pbXBvcnQgeyBpc0ltYWdlQWxsb3dlZCB9IGZyb20gJy4vdXRpbHMnO1xuXG4vKipcbiAqIFRoZSB1bmxpbmsgY29tbWFuZC4gSXQgaXMgdXNlZCBieSB0aGUge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt+TGluayBsaW5rIHBsdWdpbn0uXG4gKlxuICogQGV4dGVuZHMgbW9kdWxlOmNvcmUvY29tbWFuZH5Db21tYW5kXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbmNlbFRlbXBsYXRlQ29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xuXHQvKipcblx0ICogQGluaGVyaXREb2Ncblx0ICovXG5cdHJlZnJlc2goKSB7XG5cdFx0Y29uc3QgbW9kZWwgPSB0aGlzLmVkaXRvci5tb2RlbDtcblx0XHRjb25zdCBkb2MgPSBtb2RlbC5kb2N1bWVudDtcblxuXHRcdGNvbnN0IHNlbGVjdGVkRWxlbWVudCA9IGZpcnN0KCBkb2Muc2VsZWN0aW9uLmdldFNlbGVjdGVkQmxvY2tzKCkgKTtcblxuXHRcdC8vIEEgY2hlY2sgZm9yIHRoZSBgTGlua0ltYWdlYCBwbHVnaW4uIElmIHRoZSBzZWxlY3Rpb24gY29udGFpbnMgYW4gaW1hZ2UgZWxlbWVudCwgZ2V0IHZhbHVlcyBmcm9tIHRoZSBlbGVtZW50LlxuXHRcdC8vIEN1cnJlbnRseSB0aGUgc2VsZWN0aW9uIHJlYWRzIGF0dHJpYnV0ZXMgZnJvbSB0ZXh0IG5vZGVzIG9ubHkuIFNlZSAjNzQyOSBhbmQgIzc0NjUuXG5cdFx0aWYgKCBpc0ltYWdlQWxsb3dlZCggc2VsZWN0ZWRFbGVtZW50LCBtb2RlbC5zY2hlbWEgKSApIHtcblx0XHRcdHRoaXMuaXNFbmFibGVkID0gbW9kZWwuc2NoZW1hLmNoZWNrQXR0cmlidXRlKCBzZWxlY3RlZEVsZW1lbnQsICdsaW5rSHJlZicgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5pc0VuYWJsZWQgPSBtb2RlbC5zY2hlbWEuY2hlY2tBdHRyaWJ1dGVJblNlbGVjdGlvbiggZG9jLnNlbGVjdGlvbiwgJ2xpbmtIcmVmJyApO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBFeGVjdXRlcyB0aGUgY29tbWFuZC5cblx0ICpcblx0ICogV2hlbiB0aGUgc2VsZWN0aW9uIGlzIGNvbGxhcHNlZCwgaXQgcmVtb3ZlcyB0aGUgYGxpbmtIcmVmYCBhdHRyaWJ1dGUgZnJvbSBlYWNoIG5vZGUgd2l0aCB0aGUgc2FtZSBgbGlua0hyZWZgIGF0dHJpYnV0ZSB2YWx1ZS5cblx0ICogV2hlbiB0aGUgc2VsZWN0aW9uIGlzIG5vbi1jb2xsYXBzZWQsIGl0IHJlbW92ZXMgdGhlIGBsaW5rSHJlZmAgYXR0cmlidXRlIGZyb20gZWFjaCBub2RlIGluIHNlbGVjdGVkIHJhbmdlcy5cblx0ICpcblx0ICogIyBEZWNvcmF0b3JzXG5cdCAqXG5cdCAqIElmIHtAbGluayBtb2R1bGU6bGluay9saW5rfkxpbmtDb25maWcjZGVjb3JhdG9ycyBgY29uZmlnLmxpbmsuZGVjb3JhdG9yc2B9IGlzIHNwZWNpZmllZCxcblx0ICogYWxsIGNvbmZpZ3VyZWQgZGVjb3JhdG9ycyBhcmUgcmVtb3ZlZCB0b2dldGhlciB3aXRoIHRoZSBgbGlua0hyZWZgIGF0dHJpYnV0ZS5cblx0ICpcblx0ICogQGZpcmVzIGV4ZWN1dGVcblx0ICovXG5cdGV4ZWN1dGUoKSB7XG5cdFx0Y29uc3QgZWRpdG9yID0gdGhpcy5lZGl0b3I7XG5cdFx0Y29uc3QgbW9kZWwgPSB0aGlzLmVkaXRvci5tb2RlbDtcblx0XHRjb25zdCBzZWxlY3Rpb24gPSBtb2RlbC5kb2N1bWVudC5zZWxlY3Rpb247XG5cdFx0Y29uc3QgbGlua0NvbW1hbmQgPSBlZGl0b3IuY29tbWFuZHMuZ2V0KCAnbGluaycgKTtcblxuXHRcdG1vZGVsLmNoYW5nZSggd3JpdGVyID0+IHtcblx0XHRcdC8vIEdldCByYW5nZXMgdG8gdW5saW5rLlxuXHRcdFx0Y29uc3QgcmFuZ2VzVG9VbmxpbmsgPSBzZWxlY3Rpb24uaXNDb2xsYXBzZWQgP1xuXHRcdFx0XHRbIGZpbmRBdHRyaWJ1dGVSYW5nZShcblx0XHRcdFx0XHRzZWxlY3Rpb24uZ2V0Rmlyc3RQb3NpdGlvbigpLFxuXHRcdFx0XHRcdCdsaW5rSHJlZicsXG5cdFx0XHRcdFx0c2VsZWN0aW9uLmdldEF0dHJpYnV0ZSggJ2xpbmtIcmVmJyApLFxuXHRcdFx0XHRcdG1vZGVsXG5cdFx0XHRcdCkgXSA6XG5cdFx0XHRcdG1vZGVsLnNjaGVtYS5nZXRWYWxpZFJhbmdlcyggc2VsZWN0aW9uLmdldFJhbmdlcygpLCAnbGlua0hyZWYnICk7XG5cblx0XHRcdC8vIFJlbW92ZSBgbGlua0hyZWZgIGF0dHJpYnV0ZSBmcm9tIHNwZWNpZmllZCByYW5nZXMuXG5cdFx0XHRmb3IgKCBjb25zdCByYW5nZSBvZiByYW5nZXNUb1VubGluayApIHtcblx0XHRcdFx0d3JpdGVyLnJlbW92ZUF0dHJpYnV0ZSggJ2xpbmtIcmVmJywgcmFuZ2UgKTtcblx0XHRcdFx0Ly8gSWYgdGhlcmUgYXJlIHJlZ2lzdGVyZWQgY3VzdG9tIGF0dHJpYnV0ZXMsIHRoZW4gcmVtb3ZlIHRoZW0gZHVyaW5nIHVubGluay5cblx0XHRcdFx0aWYgKCBsaW5rQ29tbWFuZCApIHtcblx0XHRcdFx0XHRmb3IgKCBjb25zdCBtYW51YWxEZWNvcmF0b3Igb2YgbGlua0NvbW1hbmQubWFudWFsRGVjb3JhdG9ycyApIHtcblx0XHRcdFx0XHRcdHdyaXRlci5yZW1vdmVBdHRyaWJ1dGUoIG1hbnVhbERlY29yYXRvci5pZCwgcmFuZ2UgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2UgQ29weXJpZ2h0IChjKSAyMDAzLTIwMjEsIENLU291cmNlIC0gRnJlZGVyaWNvIEtuYWJiZW4uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBGb3IgbGljZW5zaW5nLCBzZWUgTElDRU5TRS5tZCBvciBodHRwczovL2NrZWRpdG9yLmNvbS9sZWdhbC9ja2VkaXRvci1vc3MtbGljZW5zZVxuICovXG5cbi8qKlxuICogQG1vZHVsZSBsaW5rL2xpbmtjb21tYW5kXG4gKi9cblxuaW1wb3J0ICBDb21tYW5kICBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWNvcmUvc3JjL2NvbW1hbmQnO1xuaW1wb3J0ICBmaW5kQXR0cmlidXRlUmFuZ2UgIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtdHlwaW5nL3NyYy91dGlscy9maW5kYXR0cmlidXRlcmFuZ2UnO1xuaW1wb3J0IHsgQ29sbGVjdGlvbiwgdG9NYXAsIGZpcnN0IH0gZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS11dGlscy9zcmMvJztcblxuaW1wb3J0IEF1dG9tYXRpY0RlY29yYXRvcnMgZnJvbSAnLi91dGlscy9hdXRvbWF0aWNkZWNvcmF0b3JzJztcbmltcG9ydCB7IGlzSW1hZ2VBbGxvd2VkIH0gZnJvbSAnLi91dGlscyc7XG5cbi8qKlxuICogVGhlIGxpbmsgY29tbWFuZC4gSXQgaXMgdXNlZCBieSB0aGUge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt+TGluayBsaW5rIGZlYXR1cmV9LlxuICpcbiAqIEBleHRlbmRzIG1vZHVsZTpjb3JlL2NvbW1hbmR+Q29tbWFuZFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZW1wbGF0ZUNvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcblx0LyoqXG5cdCAqIFRoZSB2YWx1ZSBvZiB0aGUgYCdsaW5rSHJlZidgIGF0dHJpYnV0ZSBpZiB0aGUgc3RhcnQgb2YgdGhlIHNlbGVjdGlvbiBpcyBsb2NhdGVkIGluIGEgbm9kZSB3aXRoIHRoaXMgYXR0cmlidXRlLlxuXHQgKlxuXHQgKiBAb2JzZXJ2YWJsZVxuXHQgKiBAcmVhZG9ubHlcblx0ICogQG1lbWJlciB7T2JqZWN0fHVuZGVmaW5lZH0gI3ZhbHVlXG5cdCAqL1xuXG5cdGNvbnN0cnVjdG9yKCBlZGl0b3IgKSB7XG5cdFx0c3VwZXIoIGVkaXRvciApO1xuXG5cdFx0LyoqXG5cdFx0ICogQSBjb2xsZWN0aW9uIG9mIHtAbGluayBtb2R1bGU6bGluay91dGlsc35NYW51YWxEZWNvcmF0b3IgbWFudWFsIGRlY29yYXRvcnN9XG5cdFx0ICogY29ycmVzcG9uZGluZyB0byB0aGUge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt+TGlua0NvbmZpZyNkZWNvcmF0b3JzIGRlY29yYXRvciBjb25maWd1cmF0aW9ufS5cblx0XHQgKlxuXHRcdCAqIFlvdSBjYW4gY29uc2lkZXIgaXQgYSBtb2RlbCB3aXRoIHN0YXRlcyBvZiBtYW51YWwgZGVjb3JhdG9ycyBhZGRlZCB0byB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGxpbmsuXG5cdFx0ICpcblx0XHQgKiBAcmVhZG9ubHlcblx0XHQgKiBAdHlwZSB7bW9kdWxlOnV0aWxzL2NvbGxlY3Rpb25+Q29sbGVjdGlvbn1cblx0XHQgKi9cblx0XHR0aGlzLm1hbnVhbERlY29yYXRvcnMgPSBuZXcgQ29sbGVjdGlvbigpO1xuXG5cblxuXHR9XG5cblx0LyoqXG5cdCAqIFN5bmNocm9uaXplcyB0aGUgc3RhdGUgb2Yge0BsaW5rICNtYW51YWxEZWNvcmF0b3JzfSB3aXRoIHRoZSBjdXJyZW50bHkgcHJlc2VudCBlbGVtZW50cyBpbiB0aGUgbW9kZWwuXG5cdCAqL1xuXHRyZXN0b3JlTWFudWFsRGVjb3JhdG9yU3RhdGVzKCkge1xuXHRcdGNvbnNvbGUubG9nKHRoaXMubWFudWFsRGVjb3JhdG9ycyApO1xuXHRcdGZvciAoIGNvbnN0IG1hbnVhbERlY29yYXRvciBvZiB0aGlzLm1hbnVhbERlY29yYXRvcnMgKSB7XG5cdFx0XHRtYW51YWxEZWNvcmF0b3IudmFsdWUgPSB0aGlzLl9nZXREZWNvcmF0b3JTdGF0ZUZyb21Nb2RlbCggbWFudWFsRGVjb3JhdG9yLmlkICk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEBpbmhlcml0RG9jXG5cdCAqL1xuXHRyZWZyZXNoKCkge1xuXHRcdGNvbnN0IG1vZGVsID0gdGhpcy5lZGl0b3IubW9kZWw7XG5cdFx0Y29uc3QgZG9jID0gbW9kZWwuZG9jdW1lbnQ7XG5cblx0XHRjb25zdCBzZWxlY3RlZEVsZW1lbnQgPSBmaXJzdCggZG9jLnNlbGVjdGlvbi5nZXRTZWxlY3RlZEJsb2NrcygpICk7XG5cblx0XHQvLyBBIGNoZWNrIGZvciB0aGUgYExpbmtJbWFnZWAgcGx1Z2luLiBJZiB0aGUgc2VsZWN0aW9uIGNvbnRhaW5zIGFuIGVsZW1lbnQsIGdldCB2YWx1ZXMgZnJvbSB0aGUgZWxlbWVudC5cblx0XHQvLyBDdXJyZW50bHkgdGhlIHNlbGVjdGlvbiByZWFkcyBhdHRyaWJ1dGVzIGZyb20gdGV4dCBub2RlcyBvbmx5LiBTZWUgIzc0MjkgYW5kICM3NDY1LlxuXHRcdGlmICggaXNJbWFnZUFsbG93ZWQoIHNlbGVjdGVkRWxlbWVudCwgbW9kZWwuc2NoZW1hICkgKSB7XG5cdFx0XHR0aGlzLnZhbHVlID0gc2VsZWN0ZWRFbGVtZW50LmdldEF0dHJpYnV0ZSggJ3RlbXBsYXRlVmFyJyApO1xuXHRcdFx0dGhpcy5pc0VuYWJsZWQgPSBtb2RlbC5zY2hlbWEuY2hlY2tBdHRyaWJ1dGUoIHNlbGVjdGVkRWxlbWVudCwgJ3RlbXBsYXRlVmFyJyApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnZhbHVlID0gZG9jLnNlbGVjdGlvbi5nZXRBdHRyaWJ1dGUoICd0ZW1wbGF0ZVZhcicgKTtcblx0XHRcdHRoaXMuaXNFbmFibGVkID0gbW9kZWwuc2NoZW1hLmNoZWNrQXR0cmlidXRlSW5TZWxlY3Rpb24oIGRvYy5zZWxlY3Rpb24sICd0ZW1wbGF0ZVZhcicgKTtcblx0XHR9XG5cblx0XHRmb3IgKCBjb25zdCBtYW51YWxEZWNvcmF0b3Igb2YgdGhpcy5tYW51YWxEZWNvcmF0b3JzICkge1xuXHRcdFx0bWFudWFsRGVjb3JhdG9yLnZhbHVlID0gdGhpcy5fZ2V0RGVjb3JhdG9yU3RhdGVGcm9tTW9kZWwoIG1hbnVhbERlY29yYXRvci5pZCApO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBFeGVjdXRlcyB0aGUgY29tbWFuZC5cblx0ICpcblx0ICogV2hlbiB0aGUgc2VsZWN0aW9uIGlzIG5vbi1jb2xsYXBzZWQsIHRoZSBgbGlua0hyZWZgIGF0dHJpYnV0ZSB3aWxsIGJlIGFwcGxpZWQgdG8gbm9kZXMgaW5zaWRlIHRoZSBzZWxlY3Rpb24sIGJ1dCBvbmx5IHRvXG5cdCAqIHRob3NlIG5vZGVzIHdoZXJlIHRoZSBgbGlua0hyZWZgIGF0dHJpYnV0ZSBpcyBhbGxvd2VkIChkaXNhbGxvd2VkIG5vZGVzIHdpbGwgYmUgb21pdHRlZCkuXG5cdCAqXG5cdCAqIFdoZW4gdGhlIHNlbGVjdGlvbiBpcyBjb2xsYXBzZWQgYW5kIGlzIG5vdCBpbnNpZGUgdGhlIHRleHQgd2l0aCB0aGUgYGxpbmtIcmVmYCBhdHRyaWJ1dGUsIGFcblx0ICogbmV3IHtAbGluayBtb2R1bGU6ZW5naW5lL21vZGVsL3RleHR+VGV4dCB0ZXh0IG5vZGV9IHdpdGggdGhlIGBsaW5rSHJlZmAgYXR0cmlidXRlIHdpbGwgYmUgaW5zZXJ0ZWQgaW4gcGxhY2Ugb2YgdGhlIGNhcmV0LCBidXRcblx0ICogb25seSBpZiBzdWNoIGVsZW1lbnQgaXMgYWxsb3dlZCBpbiB0aGlzIHBsYWNlLiBUaGUgYF9kYXRhYCBvZiB0aGUgaW5zZXJ0ZWQgdGV4dCB3aWxsIGVxdWFsIHRoZSBgaHJlZmAgcGFyYW1ldGVyLlxuXHQgKiBUaGUgc2VsZWN0aW9uIHdpbGwgYmUgdXBkYXRlZCB0byB3cmFwIHRoZSBqdXN0IGluc2VydGVkIHRleHQgbm9kZS5cblx0ICpcblx0ICogV2hlbiB0aGUgc2VsZWN0aW9uIGlzIGNvbGxhcHNlZCBhbmQgaW5zaWRlIHRoZSB0ZXh0IHdpdGggdGhlIGBsaW5rSHJlZmAgYXR0cmlidXRlLCB0aGUgYXR0cmlidXRlIHZhbHVlIHdpbGwgYmUgdXBkYXRlZC5cblx0ICpcblx0ICogIyBEZWNvcmF0b3JzIGFuZCBtb2RlbCBhdHRyaWJ1dGUgbWFuYWdlbWVudFxuXHQgKlxuXHQgKiBUaGVyZSBpcyBhbiBvcHRpb25hbCBhcmd1bWVudCB0byB0aGlzIGNvbW1hbmQgdGhhdCBhcHBsaWVzIG9yIHJlbW92ZXMgbW9kZWxcblx0ICoge0BnbGluayBmcmFtZXdvcmsvZ3VpZGVzL2FyY2hpdGVjdHVyZS9lZGl0aW5nLWVuZ2luZSN0ZXh0LWF0dHJpYnV0ZXMgdGV4dCBhdHRyaWJ1dGVzfSBicm91Z2h0IGJ5XG5cdCAqIHtAbGluayBtb2R1bGU6bGluay91dGlsc35NYW51YWxEZWNvcmF0b3IgbWFudWFsIGxpbmsgZGVjb3JhdG9yc30uXG5cdCAqXG5cdCAqIFRleHQgYXR0cmlidXRlIG5hbWVzIGluIHRoZSBtb2RlbCBjb3JyZXNwb25kIHRvIHRoZSBlbnRyaWVzIGluIHRoZSB7QGxpbmsgbW9kdWxlOmxpbmsvbGlua35MaW5rQ29uZmlnI2RlY29yYXRvcnMgY29uZmlndXJhdGlvbn0uXG5cdCAqIEZvciBldmVyeSBkZWNvcmF0b3IgY29uZmlndXJlZCwgYSBtb2RlbCB0ZXh0IGF0dHJpYnV0ZSBleGlzdHMgd2l0aCB0aGUgXCJsaW5rXCIgcHJlZml4LiBGb3IgZXhhbXBsZSwgYSBgJ2xpbmtNeURlY29yYXRvcidgIGF0dHJpYnV0ZVxuXHQgKiBjb3JyZXNwb25kcyB0byBgJ215RGVjb3JhdG9yJ2AgaW4gdGhlIGNvbmZpZ3VyYXRpb24uXG5cdCAqXG5cdCAqIFRvIGxlYXJuIG1vcmUgYWJvdXQgbGluayBkZWNvcmF0b3JzLCBjaGVjayBvdXQgdGhlIHtAbGluayBtb2R1bGU6bGluay9saW5rfkxpbmtDb25maWcjZGVjb3JhdG9ycyBgY29uZmlnLmxpbmsuZGVjb3JhdG9yc2B9XG5cdCAqIGRvY3VtZW50YXRpb24uXG5cdCAqXG5cdCAqIEhlcmUgaXMgaG93IHRvIG1hbmFnZSBkZWNvcmF0b3IgYXR0cmlidXRlcyB3aXRoIHRoZSBsaW5rIGNvbW1hbmQ6XG5cdCAqXG5cdCAqXHRcdGNvbnN0IGxpbmtDb21tYW5kID0gZWRpdG9yLmNvbW1hbmRzLmdldCggJ2xpbmsnICk7XG5cdCAqXG5cdCAqXHRcdC8vIEFkZGluZyBhIG5ldyBkZWNvcmF0b3IgYXR0cmlidXRlLlxuXHQgKlx0XHRsaW5rQ29tbWFuZC5leGVjdXRlKCAnaHR0cDovL2V4YW1wbGUuY29tJywge1xuXHQgKlx0XHRcdGxpbmtJc0V4dGVybmFsOiB0cnVlXG5cdCAqXHRcdH0gKTtcblx0ICpcblx0ICpcdFx0Ly8gUmVtb3ZpbmcgYSBkZWNvcmF0b3IgYXR0cmlidXRlIGZyb20gdGhlIHNlbGVjdGlvbi5cblx0ICpcdFx0bGlua0NvbW1hbmQuZXhlY3V0ZSggJ2h0dHA6Ly9leGFtcGxlLmNvbScsIHtcblx0ICpcdFx0XHRsaW5rSXNFeHRlcm5hbDogZmFsc2Vcblx0ICpcdFx0fSApO1xuXHQgKlxuXHQgKlx0XHQvLyBBZGRpbmcgbXVsdGlwbGUgZGVjb3JhdG9yIGF0dHJpYnV0ZXMgYXQgdGhlIHNhbWUgdGltZS5cblx0ICpcdFx0bGlua0NvbW1hbmQuZXhlY3V0ZSggJ2h0dHA6Ly9leGFtcGxlLmNvbScsIHtcblx0ICpcdFx0XHRsaW5rSXNFeHRlcm5hbDogdHJ1ZSxcblx0ICpcdFx0XHRsaW5rSXNEb3dubG9hZGFibGU6IHRydWUsXG5cdCAqXHRcdH0gKTtcblx0ICpcblx0ICpcdFx0Ly8gUmVtb3ZpbmcgYW5kIGFkZGluZyBkZWNvcmF0b3IgYXR0cmlidXRlcyBhdCB0aGUgc2FtZSB0aW1lLlxuXHQgKlx0XHRsaW5rQ29tbWFuZC5leGVjdXRlKCAnaHR0cDovL2V4YW1wbGUuY29tJywge1xuXHQgKlx0XHRcdGxpbmtJc0V4dGVybmFsOiBmYWxzZSxcblx0ICpcdFx0XHRsaW5rRm9vOiB0cnVlLFxuXHQgKlx0XHRcdGxpbmtJc0Rvd25sb2FkYWJsZTogZmFsc2UsXG5cdCAqXHRcdH0gKTtcblx0ICpcblx0ICogKipOb3RlKio6IElmIHRoZSBkZWNvcmF0b3IgYXR0cmlidXRlIG5hbWUgaXMgbm90IHNwZWNpZmllZCwgaXRzIHN0YXRlIHJlbWFpbnMgdW50b3VjaGVkLlxuXHQgKlxuXHQgKiAqKk5vdGUqKjoge0BsaW5rIG1vZHVsZTpsaW5rL3VubGlua2NvbW1hbmR+VW5saW5rQ29tbWFuZCNleGVjdXRlIGBDYW5jZWx0ZW1wbGF0ZWNvbW1hbmQjZXhlY3V0ZSgpYH0gcmVtb3ZlcyBhbGxcblx0ICogZGVjb3JhdG9yIGF0dHJpYnV0ZXMuXG5cdCAqXG5cdCAqIEBmaXJlcyBleGVjdXRlXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSB0ZW1wbGF0ZVZhciBUZW1wbGF0ZSBkZXN0aW5hdGlvbi5cblx0ICogQHBhcmFtIHtPYmplY3R9IFttYW51YWxEZWNvcmF0b3JJZHM9e31dIFRoZSBpbmZvcm1hdGlvbiBhYm91dCBtYW51YWwgZGVjb3JhdG9yIGF0dHJpYnV0ZXMgdG8gYmUgYXBwbGllZCBvciByZW1vdmVkIHVwb24gZXhlY3V0aW9uLlxuXHQgKi9cblx0ZXhlY3V0ZSggdGVtcGxhdGVWYXIsIG1hbnVhbERlY29yYXRvcklkcyA9IHt9ICkge1xuXHRcdGNvbnNvbGUubG9nKHRlbXBsYXRlVmFyKTtcblx0XHRjb25zb2xlLmxvZyhtYW51YWxEZWNvcmF0b3JJZHMpO1xuXHRcdGNvbnN0IG1vZGVsID0gdGhpcy5lZGl0b3IubW9kZWw7XG5cdFx0Y29uc3Qgc2VsZWN0aW9uID0gbW9kZWwuZG9jdW1lbnQuc2VsZWN0aW9uO1xuXHRcdC8vIFN0b3JlcyBpbmZvcm1hdGlvbiBhYm91dCBtYW51YWwgZGVjb3JhdG9ycyB0byB0dXJuIHRoZW0gb24vb2ZmIHdoZW4gY29tbWFuZCBpcyBhcHBsaWVkLlxuXHRcdGNvbnN0IHRydXRoeU1hbnVhbERlY29yYXRvcnMgPSBbXTtcblx0XHRjb25zdCBmYWxzeU1hbnVhbERlY29yYXRvcnMgPSBbXTtcblxuXHRcdGZvciAoIGNvbnN0IG5hbWUgaW4gbWFudWFsRGVjb3JhdG9ySWRzICkge1xuXHRcdFx0aWYgKCBtYW51YWxEZWNvcmF0b3JJZHNbIG5hbWUgXSApIHtcblx0XHRcdFx0dHJ1dGh5TWFudWFsRGVjb3JhdG9ycy5wdXNoKCBuYW1lICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmYWxzeU1hbnVhbERlY29yYXRvcnMucHVzaCggbmFtZSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdG1vZGVsLmNoYW5nZSggd3JpdGVyID0+IHtcblx0XHRcdC8vIElmIHNlbGVjdGlvbiBpcyBjb2xsYXBzZWQgdGhlbiB1cGRhdGUgc2VsZWN0ZWQgbGluayBvciBpbnNlcnQgbmV3IG9uZSBhdCB0aGUgcGxhY2Ugb2YgY2FyZXQuXG5cdFx0XHRpZiAoIHNlbGVjdGlvbi5pc0NvbGxhcHNlZCApIHtcblx0XHRcdFx0Y29uc3QgcG9zaXRpb24gPSBzZWxlY3Rpb24uZ2V0Rmlyc3RQb3NpdGlvbigpO1xuXG5cdFx0XHRcdC8vIFdoZW4gc2VsZWN0aW9uIGlzIGluc2lkZSB0ZXh0IHdpdGggYGxpbmtIcmVmYCBhdHRyaWJ1dGUuXG5cdFx0XHRcdGlmICggc2VsZWN0aW9uLmhhc0F0dHJpYnV0ZSggJ3RlbXBsYXRlVmFyJyApICkge1xuXHRcdFx0XHRcdC8vIFRoZW4gdXBkYXRlIGBsaW5rSHJlZmAgdmFsdWUuXG5cdFx0XHRcdFx0Y29uc3QgdmFyUmFuZ2UgPSBmaW5kQXR0cmlidXRlUmFuZ2UoIHBvc2l0aW9uLCAndGVtcGxhdGVWYXInLCBzZWxlY3Rpb24uZ2V0QXR0cmlidXRlKCAndGVtcGxhdGVWYXInICksIG1vZGVsICk7XG5cblx0XHRcdFx0XHR3cml0ZXIuc2V0QXR0cmlidXRlKCAndGVtcGxhdGVWYXInLCB0ZW1wbGF0ZVZhci5pZCwgdmFyUmFuZ2UgKTtcblx0XHRcdFx0XHRtb2RlbC5zY2hlbWEuc2V0QXR0cmlidXRlUHJvcGVydGllcyggJ3RlbXBsYXRlVmFyJywge1xuXHRcdFx0XHRcdFx0dHlwZTogdGVtcGxhdGVWYXIudHlwZVxuXHRcdFx0XHRcdH0gKTtcblxuXG5cdFx0XHRcdFx0dHJ1dGh5TWFudWFsRGVjb3JhdG9ycy5mb3JFYWNoKCBpdGVtID0+IHtcblx0XHRcdFx0XHRcdHdyaXRlci5zZXRBdHRyaWJ1dGUoIGl0ZW0sIHRydWUsIHZhclJhbmdlICk7XG5cdFx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdFx0ZmFsc3lNYW51YWxEZWNvcmF0b3JzLmZvckVhY2goIGl0ZW0gPT4ge1xuXHRcdFx0XHRcdFx0d3JpdGVyLnJlbW92ZUF0dHJpYnV0ZSggaXRlbSwgdmFyUmFuZ2UgKTtcblx0XHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0XHQvLyBQdXQgdGhlIHNlbGVjdGlvbiBhdCB0aGUgZW5kIG9mIHRoZSB1cGRhdGVkIGxpbmsuXG5cdFx0XHRcdFx0d3JpdGVyLnNldFNlbGVjdGlvbiggd3JpdGVyLmNyZWF0ZVBvc2l0aW9uQWZ0ZXIoIHZhclJhbmdlLmVuZC5ub2RlQmVmb3JlICkgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBJZiBub3QgdGhlbiBpbnNlcnQgdGV4dCBub2RlIHdpdGggYGxpbmtIcmVmYCBhdHRyaWJ1dGUgaW4gcGxhY2Ugb2YgY2FyZXQuXG5cdFx0XHRcdC8vIEhvd2V2ZXIsIHNpbmNlIHNlbGVjdGlvbiBpcyBjb2xsYXBzZWQsIGF0dHJpYnV0ZSB2YWx1ZSB3aWxsIGJlIHVzZWQgYXMgZGF0YSBmb3IgdGV4dCBub2RlLlxuXHRcdFx0XHQvLyBTbywgaWYgYHRlbXBsYXRlVmFyLmxhYmVsYCBpcyBlbXB0eSwgZG8gbm90IGNyZWF0ZSB0ZXh0IG5vZGUuXG5cdFx0XHRcdGVsc2UgaWYgKCB0ZW1wbGF0ZVZhci5pZCAhPT0gJycgKSB7XG5cdFx0XHRcdFx0Y29uc3QgYXR0cmlidXRlcyA9IHRvTWFwKCBzZWxlY3Rpb24uZ2V0QXR0cmlidXRlcygpICk7XG5cblx0XHRcdFx0XHRhdHRyaWJ1dGVzLnNldCggJ3RlbXBsYXRlVmFyJywgdGVtcGxhdGVWYXIuaWQgKTtcblx0XHRcdFx0XHRtb2RlbC5zY2hlbWEuc2V0QXR0cmlidXRlUHJvcGVydGllcyggJ3RlbXBsYXRlVmFyJywge1xuXHRcdFx0XHRcdFx0dHlwZTogdGVtcGxhdGVWYXIudHlwZVxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHR0cnV0aHlNYW51YWxEZWNvcmF0b3JzLmZvckVhY2goIGl0ZW0gPT4ge1xuXHRcdFx0XHRcdFx0YXR0cmlidXRlcy5zZXQoIGl0ZW0sIHRydWUgKTtcblx0XHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0XHRjb25zdCB7IGVuZDogcG9zaXRpb25BZnRlciB9ID0gbW9kZWwuaW5zZXJ0Q29udGVudCggd3JpdGVyLmNyZWF0ZVRleHQoIHRlbXBsYXRlVmFyLmlkLCBhdHRyaWJ1dGVzICksIHBvc2l0aW9uICk7XG5cblx0XHRcdFx0XHQvLyBQdXQgdGhlIHNlbGVjdGlvbiBhdCB0aGUgZW5kIG9mIHRoZSBpbnNlcnRlZCBsaW5rLlxuXHRcdFx0XHRcdC8vIFVzaW5nIGVuZCBvZiByYW5nZSByZXR1cm5lZCBmcm9tIGluc2VydENvbnRlbnQgaW4gY2FzZSBub2RlcyB3aXRoIHRoZSBzYW1lIGF0dHJpYnV0ZXMgZ290IG1lcmdlZC5cblx0XHRcdFx0XHR3cml0ZXIuc2V0U2VsZWN0aW9uKCBwb3NpdGlvbkFmdGVyICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBSZW1vdmUgdGhlIGBsaW5rSHJlZmAgYXR0cmlidXRlIGFuZCBhbGwgbGluayBkZWNvcmF0b3JzIGZyb20gdGhlIHNlbGVjdGlvbi5cblx0XHRcdFx0Ly8gSXQgc3RvcHMgYWRkaW5nIGEgbmV3IGNvbnRlbnQgaW50byB0aGUgbGluayBlbGVtZW50LlxuXHRcdFx0XHRbICd0ZW1wbGF0ZVZhcicsIC4uLnRydXRoeU1hbnVhbERlY29yYXRvcnMsIC4uLmZhbHN5TWFudWFsRGVjb3JhdG9ycyBdLmZvckVhY2goIGl0ZW0gPT4ge1xuXHRcdFx0XHRcdHdyaXRlci5yZW1vdmVTZWxlY3Rpb25BdHRyaWJ1dGUoIGl0ZW0gKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gSWYgc2VsZWN0aW9uIGhhcyBub24tY29sbGFwc2VkIHJhbmdlcywgd2UgY2hhbmdlIGF0dHJpYnV0ZSBvbiBub2RlcyBpbnNpZGUgdGhvc2UgcmFuZ2VzXG5cdFx0XHRcdC8vIG9taXR0aW5nIG5vZGVzIHdoZXJlIHRoZSBgbGlua0hyZWZgIGF0dHJpYnV0ZSBpcyBkaXNhbGxvd2VkLlxuXHRcdFx0XHRjb25zdCByYW5nZXMgPSBtb2RlbC5zY2hlbWEuZ2V0VmFsaWRSYW5nZXMoIHNlbGVjdGlvbi5nZXRSYW5nZXMoKSwgJ3RlbXBsYXRlVmFyJyApO1xuXG5cdFx0XHRcdC8vIEJ1dCBmb3IgdGhlIGZpcnN0LCBjaGVjayB3aGV0aGVyIHRoZSBgbGlua0hyZWZgIGF0dHJpYnV0ZSBpcyBhbGxvd2VkIG9uIHNlbGVjdGVkIGJsb2NrcyAoZS5nLiB0aGUgXCJpbWFnZVwiIGVsZW1lbnQpLlxuXHRcdFx0XHRjb25zdCBhbGxvd2VkUmFuZ2VzID0gW107XG5cblx0XHRcdFx0Zm9yICggY29uc3QgZWxlbWVudCBvZiBzZWxlY3Rpb24uZ2V0U2VsZWN0ZWRCbG9ja3MoKSApIHtcblx0XHRcdFx0XHRpZiAoIG1vZGVsLnNjaGVtYS5jaGVja0F0dHJpYnV0ZSggZWxlbWVudCwgJ3RlbXBsYXRlVmFyJyApICkge1xuXHRcdFx0XHRcdFx0YWxsb3dlZFJhbmdlcy5wdXNoKCB3cml0ZXIuY3JlYXRlUmFuZ2VPbiggZWxlbWVudCApICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gUmFuZ2VzIHRoYXQgYWNjZXB0IHRoZSBgbGlua0hyZWZgIGF0dHJpYnV0ZS4gU2luY2Ugd2Ugd2lsbCBpdGVyYXRlIG92ZXIgYGFsbG93ZWRSYW5nZXNgLCBsZXQncyBjbG9uZSBpdC5cblx0XHRcdFx0Y29uc3QgcmFuZ2VzVG9VcGRhdGUgPSBhbGxvd2VkUmFuZ2VzLnNsaWNlKCk7XG5cblx0XHRcdFx0Ly8gRm9yIGFsbCBzZWxlY3Rpb24gcmFuZ2VzIHdlIHdhbnQgdG8gY2hlY2sgd2hldGhlciBnaXZlbiByYW5nZSBpcyBpbnNpZGUgYW4gZWxlbWVudCB0aGF0IGFjY2VwdHMgdGhlIGBsaW5rSHJlZmAgYXR0cmlidXRlLlxuXHRcdFx0XHQvLyBJZiBzbywgd2UgZG9uJ3Qgd2FudCB0byBwcm9wYWdhdGUgYXBwbHlpbmcgdGhlIGF0dHJpYnV0ZSB0byBpdHMgY2hpbGRyZW4uXG5cdFx0XHRcdGZvciAoIGNvbnN0IHJhbmdlIG9mIHJhbmdlcyApIHtcblx0XHRcdFx0XHRpZiAoIHRoaXMuX2lzUmFuZ2VUb1VwZGF0ZSggcmFuZ2UsIGFsbG93ZWRSYW5nZXMgKSApIHtcblx0XHRcdFx0XHRcdHJhbmdlc1RvVXBkYXRlLnB1c2goIHJhbmdlICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yICggY29uc3QgcmFuZ2Ugb2YgcmFuZ2VzVG9VcGRhdGUgKSB7XG5cdFx0XHRcdFx0d3JpdGVyLnNldEF0dHJpYnV0ZSggJ3RlbXBsYXRlVmFyJywgdGVtcGxhdGVWYXIuaWQsIHJhbmdlICk7XG5cdFx0XHRcdFx0bW9kZWwuc2NoZW1hLnNldEF0dHJpYnV0ZVByb3BlcnRpZXMoICd0ZW1wbGF0ZVZhcicsIHtcblx0XHRcdFx0XHRcdHR5cGU6IHRlbXBsYXRlVmFyLnR5cGVcblx0XHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0XHR0cnV0aHlNYW51YWxEZWNvcmF0b3JzLmZvckVhY2goIGl0ZW0gPT4ge1xuXHRcdFx0XHRcdFx0d3JpdGVyLnNldEF0dHJpYnV0ZSggaXRlbSwgdHJ1ZSwgcmFuZ2UgKTtcblx0XHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0XHRmYWxzeU1hbnVhbERlY29yYXRvcnMuZm9yRWFjaCggaXRlbSA9PiB7XG5cdFx0XHRcdFx0XHR3cml0ZXIucmVtb3ZlQXR0cmlidXRlKCBpdGVtLCByYW5nZSApO1xuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBQcm92aWRlcyBpbmZvcm1hdGlvbiB3aGV0aGVyIGEgZGVjb3JhdG9yIHdpdGggYSBnaXZlbiBuYW1lIGlzIHByZXNlbnQgaW4gdGhlIGN1cnJlbnRseSBwcm9jZXNzZWQgc2VsZWN0aW9uLlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gZGVjb3JhdG9yTmFtZSBUaGUgbmFtZSBvZiB0aGUgbWFudWFsIGRlY29yYXRvciB1c2VkIGluIHRoZSBtb2RlbFxuXHQgKiBAcmV0dXJucyB7Qm9vbGVhbn0gVGhlIGluZm9ybWF0aW9uIHdoZXRoZXIgYSBnaXZlbiBkZWNvcmF0b3IgaXMgY3VycmVudGx5IHByZXNlbnQgaW4gdGhlIHNlbGVjdGlvbi5cblx0ICovXG5cdF9nZXREZWNvcmF0b3JTdGF0ZUZyb21Nb2RlbCggZGVjb3JhdG9yTmFtZSApIHtcblx0XHRjb25zdCBtb2RlbCA9IHRoaXMuZWRpdG9yLm1vZGVsO1xuXHRcdGNvbnN0IGRvYyA9IG1vZGVsLmRvY3VtZW50O1xuXG5cdFx0Y29uc3Qgc2VsZWN0ZWRFbGVtZW50ID0gZmlyc3QoIGRvYy5zZWxlY3Rpb24uZ2V0U2VsZWN0ZWRCbG9ja3MoKSApO1xuXG5cdFx0Ly8gQSBjaGVjayBmb3IgdGhlIGBMaW5rSW1hZ2VgIHBsdWdpbi4gSWYgdGhlIHNlbGVjdGlvbiBjb250YWlucyBhbiBlbGVtZW50LCBnZXQgdmFsdWVzIGZyb20gdGhlIGVsZW1lbnQuXG5cdFx0Ly8gQ3VycmVudGx5IHRoZSBzZWxlY3Rpb24gcmVhZHMgYXR0cmlidXRlcyBmcm9tIHRleHQgbm9kZXMgb25seS4gU2VlICM3NDI5IGFuZCAjNzQ2NS5cblx0XHRpZiAoIGlzSW1hZ2VBbGxvd2VkKCBzZWxlY3RlZEVsZW1lbnQsIG1vZGVsLnNjaGVtYSApICkge1xuXHRcdFx0cmV0dXJuIHNlbGVjdGVkRWxlbWVudC5nZXRBdHRyaWJ1dGUoIGRlY29yYXRvck5hbWUgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZG9jLnNlbGVjdGlvbi5nZXRBdHRyaWJ1dGUoIGRlY29yYXRvck5hbWUgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVja3Mgd2hldGhlciBzcGVjaWZpZWQgYHJhbmdlYCBpcyBpbnNpZGUgYW4gZWxlbWVudCB0aGF0IGFjY2VwdHMgdGhlIGBsaW5rSHJlZmAgYXR0cmlidXRlLlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge21vZHVsZTplbmdpbmUvdmlldy9yYW5nZX5SYW5nZX0gcmFuZ2UgQSByYW5nZSB0byBjaGVjay5cblx0ICogQHBhcmFtIHtBcnJheS48bW9kdWxlOmVuZ2luZS92aWV3L3JhbmdlflJhbmdlPn0gYWxsb3dlZFJhbmdlcyBBbiBhcnJheSBvZiByYW5nZXMgY3JlYXRlZCBvbiBlbGVtZW50cyB3aGVyZSB0aGUgYXR0cmlidXRlIGlzIGFjY2VwdGVkLlxuXHQgKiBAcmV0dXJucyB7Qm9vbGVhbn1cblx0ICovXG5cdF9pc1JhbmdlVG9VcGRhdGUoIHJhbmdlLCBhbGxvd2VkUmFuZ2VzICkge1xuXHRcdGZvciAoIGNvbnN0IGFsbG93ZWRSYW5nZSBvZiBhbGxvd2VkUmFuZ2VzICkge1xuXHRcdFx0Ly8gQSByYW5nZSBpcyBpbnNpZGUgYW4gZWxlbWVudCB0aGF0IHdpbGwgaGF2ZSB0aGUgYGxpbmtIcmVmYCBhdHRyaWJ1dGUuIERvIG5vdCBtb2RpZnkgaXRzIG5vZGVzLlxuXHRcdFx0aWYgKCBhbGxvd2VkUmFuZ2UuY29udGFpbnNSYW5nZSggcmFuZ2UgKSApIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlIENvcHlyaWdodCAoYykgMjAwMy0yMDIxLCBDS1NvdXJjZSAtIEZyZWRlcmljbyBLbmFiYmVuLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogRm9yIGxpY2Vuc2luZywgc2VlIExJQ0VOU0UubWQgb3IgaHR0cHM6Ly9ja2VkaXRvci5jb20vbGVnYWwvY2tlZGl0b3Itb3NzLWxpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGluay9saW5rZWRpdGluZ1xuICovXG5cbmltcG9ydCAgUGx1Z2luICBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWNvcmUvc3JjL3BsdWdpbic7XG5pbXBvcnQgIE1vdXNlT2JzZXJ2ZXIgIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtZW5naW5lL3NyYy92aWV3L29ic2VydmVyL21vdXNlb2JzZXJ2ZXInO1xuaW1wb3J0IHsgSW5wdXQsIFR3b1N0ZXBDYXJldE1vdmVtZW50LCBpbmxpbmVIaWdobGlnaHQsIGZpbmRBdHRyaWJ1dGVSYW5nZSB9IGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtdHlwaW5nL3NyYyc7XG5pbXBvcnQgIENsaXBib2FyZFBpcGVsaW5lICBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWNsaXBib2FyZC9zcmMvY2xpcGJvYXJkcGlwZWxpbmUnO1xuaW1wb3J0IHsga2V5Q29kZXMgfSBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LXV0aWxzL3NyYy9rZXlib2FyZCc7XG5cbmltcG9ydCBUZW1wbGF0ZUNvbW1hbmQgZnJvbSAnLi90ZW1wbGF0ZS1jb21tYW5kLmpzJztcbmltcG9ydCBDYW5jZWxUZW1wbGF0ZUNvbW1hbmQgZnJvbSAnLi9jYW5jZWx0ZW1wbGF0ZWNvbW1hbmQnO1xuaW1wb3J0IE1hbnVhbERlY29yYXRvciBmcm9tICcuL3V0aWxzL21hbnVhbGRlY29yYXRvcic7XG5pbXBvcnQge1xuXHRjcmVhdGVMaW5rRWxlbWVudCxcblx0Y3JlYXRlVGVtcGxhdGVFbGVtZW50LFxuXHRlbnN1cmVTYWZlVXJsLFxuXHRnZXRMb2NhbGl6ZWREZWNvcmF0b3JzLFxuXHRub3JtYWxpemVEZWNvcmF0b3JzXG59IGZyb20gJy4vdXRpbHMnO1xuXG5pbXBvcnQgJy4uL3RoZW1lL3RlbXBsYXRlLmNzcyc7XG5cbmNvbnN0IEhJR0hMSUdIVF9TRUxFQ1RFRF9DTEFTUyA9ICdjay10ZW1wbGF0ZV9zZWxlY3RlZCc7XG5cbmNvbnN0IERFQ09SQVRPUl9NQU5VQUwgPSAnbWFudWFsJztcblxuLyoqXG4gKiBUaGUgbGluayBlbmdpbmUgZmVhdHVyZS5cbiAqXG4gKiBJdCBpbnRyb2R1Y2VzIHRoZSBgdGVtcGxhdGVWYXI9XCJ1cmxcImAgYXR0cmlidXRlIGluIHRoZSBtb2RlbCB3aGljaCByZW5kZXJzIHRvIHRoZSB2aWV3IGFzIGEgYDxhIGhyZWY9XCJ1cmxcIj5gIGVsZW1lbnRcbiAqIGFzIHdlbGwgYXMgYCd0ZW1wbGF0ZSdgIGFuZCBgJ3VubGluaydgIGNvbW1hbmRzLlxuICpcbiAqIEBleHRlbmRzIG1vZHVsZTpjb3JlL3BsdWdpbn5QbHVnaW5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVtcGxhdGVFZGl0aW5nIGV4dGVuZHMgUGx1Z2luIHtcblx0LyoqXG5cdCAqIEBpbmhlcml0RG9jXG5cdCAqL1xuXHRzdGF0aWMgZ2V0IHBsdWdpbk5hbWUoKSB7XG5cdFx0cmV0dXJuICdUZXh0VGVtcGxhdGVFZGl0aW5nJztcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5oZXJpdERvY1xuXHQgKi9cblx0c3RhdGljIGdldCByZXF1aXJlcygpIHtcblx0XHQvLyBDbGlwYm9hcmQgaXMgcmVxdWlyZWQgZm9yIGhhbmRsaW5nIGN1dCBhbmQgcGFzdGUgZXZlbnRzIHdoaWxlIHR5cGluZyBvdmVyIHRoZSBsaW5rLlxuXHRcdHJldHVybiBbIFR3b1N0ZXBDYXJldE1vdmVtZW50LCBJbnB1dCwgQ2xpcGJvYXJkUGlwZWxpbmUgXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5oZXJpdERvY1xuXHQgKi9cblx0Y29uc3RydWN0b3IoIGVkaXRvciApIHtcblx0XHRzdXBlciggZWRpdG9yICk7XG5cblx0XHRlZGl0b3IuY29uZmlnLmRlZmluZSggJ3RlbXBsYXRlJywge1xuXHRcdFx0YWRkVGFyZ2V0VG9FeHRlcm5hbExpbmtzOiBmYWxzZVxuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5oZXJpdERvY1xuXHQgKi9cblx0aW5pdCgpIHtcblx0XHRjb25zdCBlZGl0b3IgPSB0aGlzLmVkaXRvcjtcblxuXHRcdC8vIEFsbG93IGxpbmsgYXR0cmlidXRlIG9uIGFsbCBpbmxpbmUgbm9kZXMuXG5cdFx0ZWRpdG9yLm1vZGVsLnNjaGVtYS5leHRlbmQoICckdGV4dCcsIHsgYWxsb3dBdHRyaWJ1dGVzOiAndGVtcGxhdGVWYXInIH0gKTtcblxuXHRcdGVkaXRvci5jb252ZXJzaW9uLmZvciggJ2RhdGFEb3duY2FzdCcgKVxuXHRcdFx0LmF0dHJpYnV0ZVRvRWxlbWVudCggeyBtb2RlbDogJ3RlbXBsYXRlVmFyJywgdmlldzogY3JlYXRlVGVtcGxhdGVFbGVtZW50IH0gKTtcblxuXHRcdGVkaXRvci5jb252ZXJzaW9uLmZvciggJ2VkaXRpbmdEb3duY2FzdCcgKVxuXHRcdFx0LmF0dHJpYnV0ZVRvRWxlbWVudCggeyBtb2RlbDogJ3RlbXBsYXRlVmFyJywgdmlldzogKCBpZCwgY29udmVyc2lvbkFwaSApID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coaWQpO1xuXHRcdFx0XHRyZXR1cm4gY3JlYXRlVGVtcGxhdGVFbGVtZW50KCAgaWQgLCBjb252ZXJzaW9uQXBpICk7XG5cdFx0XHR9IH0gKTtcblxuXHRcdGVkaXRvci5jb252ZXJzaW9uLmZvciggJ3VwY2FzdCcgKVxuXHRcdFx0LmVsZW1lbnRUb0F0dHJpYnV0ZSgge1xuXHRcdFx0XHR2aWV3OiB7XG5cdFx0XHRcdFx0bmFtZTogJ3NwYW4nLFxuXHRcdFx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0XHRcdGlkOiB0cnVlXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRtb2RlbDoge1xuXHRcdFx0XHRcdGtleTogJ3RlbXBsYXRlVmFyJyxcblx0XHRcdFx0XHR2YWx1ZTogdmlld0VsZW1lbnQgPT4gdmlld0VsZW1lbnQuZ2V0QXR0cmlidXRlKCAnaWQnIClcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXG5cdFx0Ly8gQ3JlYXRlIGxpbmtpbmcgY29tbWFuZHMuXG5cdFx0ZWRpdG9yLmNvbW1hbmRzLmFkZCggJ3RlbXBsYXRlJywgbmV3IFRlbXBsYXRlQ29tbWFuZCggZWRpdG9yICkgKTtcblx0XHRlZGl0b3IuY29tbWFuZHMuYWRkKCAnY2FuY2VsdGVtcGxhdGUnLCBuZXcgQ2FuY2VsVGVtcGxhdGVDb21tYW5kKCBlZGl0b3IgKSApO1xuXG5cdFx0Ly8gY29uc3QgbGlua0RlY29yYXRvcnMgPSBnZXRMb2NhbGl6ZWREZWNvcmF0b3JzKCBlZGl0b3IudCwgbm9ybWFsaXplRGVjb3JhdG9ycyggZWRpdG9yLmNvbmZpZy5nZXQoICdsaW5rLmRlY29yYXRvcnMnICkgKSApO1xuXHRcdC8vXG5cdFx0Ly9cblx0XHQvLyB0aGlzLl9lbmFibGVNYW51YWxEZWNvcmF0b3JzKCBsaW5rRGVjb3JhdG9ycy5maWx0ZXIoIGl0ZW0gPT4gaXRlbS5tb2RlID09PSBERUNPUkFUT1JfTUFOVUFMICkgKTtcblxuXHRcdC8vIEVuYWJsZSB0d28tc3RlcCBjYXJldCBtb3ZlbWVudCBmb3IgYHRlbXBsYXRlVmFyYCBhdHRyaWJ1dGUuXG5cdFx0Y29uc3QgdHdvU3RlcENhcmV0TW92ZW1lbnRQbHVnaW4gPSBlZGl0b3IucGx1Z2lucy5nZXQoIFR3b1N0ZXBDYXJldE1vdmVtZW50ICk7XG5cdFx0dHdvU3RlcENhcmV0TW92ZW1lbnRQbHVnaW4ucmVnaXN0ZXJBdHRyaWJ1dGUoICd0ZW1wbGF0ZVZhcicgKTtcblxuXHRcdC8vIFNldHVwIGhpZ2hsaWdodCBvdmVyIHNlbGVjdGVkIGxpbmsuXG5cdFx0aW5saW5lSGlnaGxpZ2h0KCBlZGl0b3IsICd0ZW1wbGF0ZVZhcicsICdzcGFuJywgSElHSExJR0hUX1NFTEVDVEVEX0NMQVNTICk7XG5cblx0XHQvLyBDaGFuZ2UgdGhlIGF0dHJpYnV0ZXMgb2YgdGhlIHNlbGVjdGlvbiBpbiBjZXJ0YWluIHNpdHVhdGlvbnMgYWZ0ZXIgdGhlIGxpbmsgd2FzIGluc2VydGVkIGludG8gdGhlIGRvY3VtZW50LlxuXHRcdHRoaXMuX2VuYWJsZUluc2VydENvbnRlbnRTZWxlY3Rpb25BdHRyaWJ1dGVzRml4ZXIoKTtcblxuXHRcdC8vIEhhbmRsZSBhIGNsaWNrIGF0IHRoZSBiZWdpbm5pbmcvZW5kIG9mIGEgbGluayBlbGVtZW50LlxuXHRcdHRoaXMuX2VuYWJsZUNsaWNraW5nQWZ0ZXJMaW5rKCk7XG5cblx0XHQvLyBIYW5kbGUgdHlwaW5nIG92ZXIgdGhlIGxpbmsuXG5cdFx0dGhpcy5fZW5hYmxlVHlwaW5nT3ZlckxpbmsoKTtcblxuXHRcdC8vIEhhbmRsZSByZW1vdmluZyB0aGUgY29udGVudCBhZnRlciB0aGUgbGluayBlbGVtZW50LlxuXHRcdHRoaXMuX2hhbmRsZURlbGV0ZUNvbnRlbnRBZnRlckxpbmsoKTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIFByb2Nlc3NlcyBhbiBhcnJheSBvZiBjb25maWd1cmVkIHtAbGluayBtb2R1bGU6bGluay9saW5rfkxpbmtEZWNvcmF0b3JNYW51YWxEZWZpbml0aW9uIG1hbnVhbCBkZWNvcmF0b3JzfSxcblx0ICogdHJhbnNmb3JtcyB0aGVtIGludG8ge0BsaW5rIG1vZHVsZTpsaW5rL3V0aWxzfk1hbnVhbERlY29yYXRvcn0gaW5zdGFuY2VzIGFuZCBzdG9yZXMgdGhlbSBpbiB0aGVcblx0ICoge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmtjb21tYW5kflRlbXBsYXRlQ29tbWFuZCNtYW51YWxEZWNvcmF0b3JzfSBjb2xsZWN0aW9uIChhIG1vZGVsIGZvciBtYW51YWwgZGVjb3JhdG9ycyBzdGF0ZSkuXG5cdCAqXG5cdCAqIEFsc28gcmVnaXN0ZXJzIGFuIHtAbGluayBtb2R1bGU6ZW5naW5lL2NvbnZlcnNpb24vZG93bmNhc3RoZWxwZXJzfkRvd25jYXN0SGVscGVycyNhdHRyaWJ1dGVUb0VsZW1lbnQgYXR0cmlidXRlLXRvLWVsZW1lbnR9XG5cdCAqIGNvbnZlcnRlciBmb3IgZWFjaCBtYW51YWwgZGVjb3JhdG9yIGFuZCBleHRlbmRzIHRoZSB7QGxpbmsgbW9kdWxlOmVuZ2luZS9tb2RlbC9zY2hlbWF+U2NoZW1hIG1vZGVsJ3Mgc2NoZW1hfVxuXHQgKiB3aXRoIGFkZXF1YXRlIG1vZGVsIGF0dHJpYnV0ZXMuXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7QXJyYXkuPG1vZHVsZTpsaW5rL2xpbmt+TGlua0RlY29yYXRvck1hbnVhbERlZmluaXRpb24+fSBtYW51YWxEZWNvcmF0b3JEZWZpbml0aW9uc1xuXHQgKi9cblx0X2VuYWJsZU1hbnVhbERlY29yYXRvcnMoIG1hbnVhbERlY29yYXRvckRlZmluaXRpb25zICkge1xuXHRcdGlmICggIW1hbnVhbERlY29yYXRvckRlZmluaXRpb25zLmxlbmd0aCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBlZGl0b3IgPSB0aGlzLmVkaXRvcjtcblx0XHRjb25zdCBjb21tYW5kID0gZWRpdG9yLmNvbW1hbmRzLmdldCggJ3RlbXBsYXRlJyApO1xuXHRcdGNvbnN0IG1hbnVhbERlY29yYXRvcnMgPSBjb21tYW5kLm1hbnVhbERlY29yYXRvcnM7XG5cblx0XHRtYW51YWxEZWNvcmF0b3JEZWZpbml0aW9ucy5mb3JFYWNoKCBkZWNvcmF0b3IgPT4ge1xuXHRcdFx0ZWRpdG9yLm1vZGVsLnNjaGVtYS5leHRlbmQoICckdGV4dCcsIHsgYWxsb3dBdHRyaWJ1dGVzOiBkZWNvcmF0b3IuaWQgfSApO1xuXG5cdFx0XHQvLyBLZWVwcyByZWZlcmVuY2UgdG8gbWFudWFsIGRlY29yYXRvciB0byBkZWNvZGUgaXRzIG5hbWUgdG8gYXR0cmlidXRlcyBkdXJpbmcgZG93bmNhc3QuXG5cdFx0XHRtYW51YWxEZWNvcmF0b3JzLmFkZCggbmV3IE1hbnVhbERlY29yYXRvciggZGVjb3JhdG9yICkgKTtcblxuXHRcdFx0ZWRpdG9yLmNvbnZlcnNpb24uZm9yKCAnZG93bmNhc3QnICkuYXR0cmlidXRlVG9FbGVtZW50KCB7XG5cblx0XHRcdFx0bW9kZWw6IGRlY29yYXRvci5pZCxcblx0XHRcdFx0dmlldzogKCBtYW51YWxEZWNvcmF0b3JOYW1lLCB7IHdyaXRlciB9ICkgPT4ge1xuXHRcdFx0XHRcdGlmICggbWFudWFsRGVjb3JhdG9yTmFtZSApIHtcblx0XHRcdFx0XHRcdGNvbnN0IGF0dHJpYnV0ZXMgPSBtYW51YWxEZWNvcmF0b3JzLmdldCggZGVjb3JhdG9yLmlkICkuYXR0cmlidXRlcztcblx0XHRcdFx0XHRcdGNvbnN0IGVsZW1lbnQgPSB3cml0ZXIuY3JlYXRlQXR0cmlidXRlRWxlbWVudCggJ3NwYW4nLCBhdHRyaWJ1dGVzLCB7IHByaW9yaXR5OiA1IH0gKTtcblx0XHRcdFx0XHRcdHdyaXRlci5zZXRDdXN0b21Qcm9wZXJ0eSggJ3RlbXBsYXRlJywgdHJ1ZSwgZWxlbWVudCApO1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ2lkJyk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZWxlbWVudDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gfSApO1xuXG5cdFx0XHRlZGl0b3IuY29udmVyc2lvbi5mb3IoICd1cGNhc3QnICkuZWxlbWVudFRvQXR0cmlidXRlKCB7XG5cdFx0XHRcdHZpZXc6IHtcblx0XHRcdFx0XHRuYW1lOiAnc3BhbicsXG5cdFx0XHRcdFx0YXR0cmlidXRlczogbWFudWFsRGVjb3JhdG9ycy5nZXQoIGRlY29yYXRvci5pZCApLmF0dHJpYnV0ZXNcblx0XHRcdFx0fSxcblx0XHRcdFx0bW9kZWw6IHtcblx0XHRcdFx0XHRrZXk6IGRlY29yYXRvci5pZFxuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFN0YXJ0cyBsaXN0ZW5pbmcgdG8ge0BsaW5rIG1vZHVsZTplbmdpbmUvbW9kZWwvbW9kZWx+TW9kZWwjZXZlbnQ6aW5zZXJ0Q29udGVudH0gYW5kIGNvcnJlY3RzIHRoZSBtb2RlbFxuXHQgKiBzZWxlY3Rpb24gYXR0cmlidXRlcyBpZiB0aGUgc2VsZWN0aW9uIGlzIGF0IHRoZSBlbmQgb2YgYSBsaW5rIGFmdGVyIGluc2VydGluZyB0aGUgY29udGVudC5cblx0ICpcblx0ICogVGhlIHB1cnBvc2Ugb2YgdGhpcyBhY3Rpb24gaXMgdG8gaW1wcm92ZSB0aGUgb3ZlcmFsbCBVWCBiZWNhdXNlIHRoZSB1c2VyIGlzIG5vIGxvbmdlciBcInRyYXBwZWRcIiBieSB0aGVcblx0ICogYHRlbXBsYXRlVmFyYCBhdHRyaWJ1dGUgb2YgdGhlIHNlbGVjdGlvbiBhbmQgdGhleSBjYW4gdHlwZSBhIFwiY2xlYW5cIiAoYHRlbXBsYXRlVmFyYOKAk2xlc3MpIHRleHQgcmlnaHQgYXdheS5cblx0ICpcblx0ICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ja2VkaXRvci9ja2VkaXRvcjUvaXNzdWVzLzYwNTMuXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfZW5hYmxlSW5zZXJ0Q29udGVudFNlbGVjdGlvbkF0dHJpYnV0ZXNGaXhlcigpIHtcblx0XHRjb25zdCBlZGl0b3IgPSB0aGlzLmVkaXRvcjtcblx0XHRjb25zdCBtb2RlbCA9IGVkaXRvci5tb2RlbDtcblx0XHRjb25zdCBzZWxlY3Rpb24gPSBtb2RlbC5kb2N1bWVudC5zZWxlY3Rpb247XG5cdFx0Y29uc3QgbGlua0NvbW1hbmQgPSBlZGl0b3IuY29tbWFuZHMuZ2V0KCAndGVtcGxhdGUnICk7XG5cblx0XHR0aGlzLmxpc3RlblRvKCBtb2RlbCwgJ2luc2VydENvbnRlbnQnLCAoKSA9PiB7XG5cdFx0XHRjb25zdCBub2RlQmVmb3JlID0gc2VsZWN0aW9uLmFuY2hvci5ub2RlQmVmb3JlO1xuXHRcdFx0Y29uc3Qgbm9kZUFmdGVyID0gc2VsZWN0aW9uLmFuY2hvci5ub2RlQWZ0ZXI7XG5cblx0XHRcdC8vIE5PVEU6IOKGsCBhbmQg4oaxIHJlcHJlc2VudCB0aGUgZ3Jhdml0eSBvZiB0aGUgc2VsZWN0aW9uLlxuXG5cdFx0XHQvLyBUaGUgb25seSB0cnVseSB2YWxpZCBjYXNlIGlzOlxuXHRcdFx0Ly9cblx0XHRcdC8vXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKGsFxuXHRcdFx0Ly9cdFx0Li4uPCR0ZXh0IHRlbXBsYXRlVmFyPVwiZm9vXCI+SU5TRVJURURbXTwvJHRleHQ+XG5cdFx0XHQvL1xuXHRcdFx0Ly8gSWYgdGhlIHNlbGVjdGlvbiBpcyBub3QgXCJ0cmFwcGVkXCIgYnkgdGhlIGB0ZW1wbGF0ZVZhcmAgYXR0cmlidXRlIGFmdGVyIGluc2VydGluZywgdGhlcmUncyBub3RoaW5nXG5cdFx0XHQvLyB0byBmaXggdGhlcmUuXG5cdFx0XHRpZiAoICFzZWxlY3Rpb24uaGFzQXR0cmlidXRlKCAndGVtcGxhdGVWYXInICkgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRmlsdGVyIG91dCB0aGUgZm9sbG93aW5nIGNhc2Ugd2hlcmUgYSBsaW5rIHdpdGggdGhlIHNhbWUgaHJlZiAoZS5nLiA8YSBocmVmPVwiZm9vXCI+SU5TRVJURUQ8L2E+KSBpcyBpbnNlcnRlZFxuXHRcdFx0Ly8gaW4gdGhlIG1pZGRsZSBvZiBhbiBleGlzdGluZyBsaW5rOlxuXHRcdFx0Ly9cblx0XHRcdC8vIEJlZm9yZSBpbnNlcnRpb246XG5cdFx0XHQvL1x0XHQgICAgICAgICAgICAgICAgICAgICAgIOKGsFxuXHRcdFx0Ly9cdFx0PCR0ZXh0IHRlbXBsYXRlVmFyPVwiZm9vXCI+bFtdaW5rPC8kdGV4dD5cblx0XHRcdC8vXG5cdFx0XHQvLyBFeHBlY3RlZCBhZnRlciBpbnNlcnRpb246XG5cdFx0XHQvL1x0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oawXG5cdFx0XHQvL1x0XHQ8JHRleHQgdGVtcGxhdGVWYXI9XCJmb29cIj5sSU5TRVJURURbXWluazwvJHRleHQ+XG5cdFx0XHQvL1xuXHRcdFx0aWYgKCAhbm9kZUJlZm9yZSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBGaWx0ZXIgb3V0IHRoZSBmb2xsb3dpbmcgY2FzZSB3aGVyZSB0aGUgc2VsZWN0aW9uIGhhcyB0aGUgXCJ0ZW1wbGF0ZVZhclwiIGF0dHJpYnV0ZSBiZWNhdXNlIHRoZVxuXHRcdFx0Ly8gZ3Jhdml0eSBpcyBvdmVycmlkZGVuIGFuZCBzb21lIHRleHQgd2l0aCBhbm90aGVyIGF0dHJpYnV0ZSAoZS5nLiA8Yj5JTlNFUlRFRDwvYj4pIGlzIGluc2VydGVkOlxuXHRcdFx0Ly9cblx0XHRcdC8vIEJlZm9yZSBpbnNlcnRpb246XG5cdFx0XHQvL1xuXHRcdFx0Ly9cdFx0ICAgICAgICAgICAgICAgICAgICAgICDihrFcblx0XHRcdC8vXHRcdDwkdGV4dCB0ZW1wbGF0ZVZhcj1cImZvb1wiPltdbGluazwvJHRleHQ+XG5cdFx0XHQvL1xuXHRcdFx0Ly8gRXhwZWN0ZWQgYWZ0ZXIgaW5zZXJ0aW9uOlxuXHRcdFx0Ly9cblx0XHRcdC8vXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDihrFcblx0XHRcdC8vXHRcdDwkdGV4dCBib2xkPVwidHJ1ZVwiPklOU0VSVEVEPC8kdGV4dD48JHRleHQgdGVtcGxhdGVWYXI9XCJmb29cIj5bXWxpbms8LyR0ZXh0PlxuXHRcdFx0Ly9cblx0XHRcdGlmICggIW5vZGVCZWZvcmUuaGFzQXR0cmlidXRlKCAndGVtcGxhdGVWYXInICkgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRmlsdGVyIG91dCB0aGUgZm9sbG93aW5nIGNhc2Ugd2hlcmUgYSBsaW5rIGlzIGEgaW5zZXJ0ZWQgaW4gdGhlIG1pZGRsZSAob3IgYmVmb3JlKSBhbm90aGVyIGxpbmtcblx0XHRcdC8vIChkaWZmZXJlbnQgVVJMcywgc28gdGhleSB3aWxsIG5vdCBtZXJnZSkuIEluIHRoaXMgKGxldCdzIHNheSB3ZWlyZCkgY2FzZSwgd2UgY2FuIGxlYXZlIHRoZSBzZWxlY3Rpb25cblx0XHRcdC8vIGF0dHJpYnV0ZXMgYXMgdGhleSBhcmUgYmVjYXVzZSB0aGUgdXNlciB3aWxsIGVuZCB1cCB3cml0aW5nIGluIG9uZSBsaW5rIG9yIGFub3RoZXIgYW55d2F5LlxuXHRcdFx0Ly9cblx0XHRcdC8vIEJlZm9yZSBpbnNlcnRpb246XG5cdFx0XHQvL1xuXHRcdFx0Ly9cdFx0ICAgICAgICAgICAgICAgICAgICAgICDihrBcblx0XHRcdC8vXHRcdDwkdGV4dCB0ZW1wbGF0ZVZhcj1cImZvb1wiPmxbXWluazwvJHRleHQ+XG5cdFx0XHQvL1xuXHRcdFx0Ly8gRXhwZWN0ZWQgYWZ0ZXIgaW5zZXJ0aW9uOlxuXHRcdFx0Ly9cblx0XHRcdC8vXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDihrBcblx0XHRcdC8vXHRcdDwkdGV4dCB0ZW1wbGF0ZVZhcj1cImZvb1wiPmw8LyR0ZXh0PjwkdGV4dCB0ZW1wbGF0ZVZhcj1cImJhclwiPklOU0VSVEVEW108LyR0ZXh0PjwkdGV4dCB0ZW1wbGF0ZVZhcj1cImZvb1wiPmluazwvJHRleHQ+XG5cdFx0XHQvL1xuXHRcdFx0aWYgKCBub2RlQWZ0ZXIgJiYgbm9kZUFmdGVyLmhhc0F0dHJpYnV0ZSggJ3RlbXBsYXRlVmFyJyApICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdG1vZGVsLmNoYW5nZSggd3JpdGVyID0+IHtcblx0XHRcdFx0cmVtb3ZlTGlua0F0dHJpYnV0ZXNGcm9tU2VsZWN0aW9uKCB3cml0ZXIsIGxpbmtDb21tYW5kLm1hbnVhbERlY29yYXRvcnMgKTtcblx0XHRcdH0gKTtcblx0XHR9LCB7IHByaW9yaXR5OiAnbG93JyB9ICk7XG5cdH1cblxuXHQvKipcblx0ICogU3RhcnRzIGxpc3RlbmluZyB0byB7QGxpbmsgbW9kdWxlOmVuZ2luZS92aWV3L2RvY3VtZW50fkRvY3VtZW50I2V2ZW50Om1vdXNlZG93bn0gYW5kXG5cdCAqIHtAbGluayBtb2R1bGU6ZW5naW5lL3ZpZXcvZG9jdW1lbnR+RG9jdW1lbnQjZXZlbnQ6c2VsZWN0aW9uQ2hhbmdlfSBhbmQgcHV0cyB0aGUgc2VsZWN0aW9uIGJlZm9yZS9hZnRlciBhIGxpbmsgbm9kZVxuXHQgKiBpZiBjbGlja2VkIGF0IHRoZSBiZWdpbm5pbmcvZW5kaW5nIG9mIHRoZSBsaW5rLlxuXHQgKlxuXHQgKiBUaGUgcHVycG9zZSBvZiB0aGlzIGFjdGlvbiBpcyB0byBhbGxvdyB0eXBpbmcgYXJvdW5kIHRoZSBsaW5rIG5vZGUgZGlyZWN0bHkgYWZ0ZXIgYSBjbGljay5cblx0ICpcblx0ICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ja2VkaXRvci9ja2VkaXRvcjUvaXNzdWVzLzEwMTYuXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfZW5hYmxlQ2xpY2tpbmdBZnRlckxpbmsoKSB7XG5cdFx0Y29uc3QgZWRpdG9yID0gdGhpcy5lZGl0b3I7XG5cdFx0Y29uc3QgbGlua0NvbW1hbmQgPSBlZGl0b3IuY29tbWFuZHMuZ2V0KCAndGVtcGxhdGUnICk7XG5cblx0XHRlZGl0b3IuZWRpdGluZy52aWV3LmFkZE9ic2VydmVyKCBNb3VzZU9ic2VydmVyICk7XG5cblx0XHRsZXQgY2xpY2tlZCA9IGZhbHNlO1xuXG5cdFx0Ly8gRGV0ZWN0IHRoZSBjbGljay5cblx0XHR0aGlzLmxpc3RlblRvKCBlZGl0b3IuZWRpdGluZy52aWV3LmRvY3VtZW50LCAnbW91c2Vkb3duJywgKCkgPT4ge1xuXHRcdFx0Y2xpY2tlZCA9IHRydWU7XG5cdFx0fSApO1xuXG5cdFx0Ly8gV2hlbiB0aGUgc2VsZWN0aW9uIGhhcyBjaGFuZ2VkLi4uXG5cdFx0dGhpcy5saXN0ZW5UbyggZWRpdG9yLmVkaXRpbmcudmlldy5kb2N1bWVudCwgJ3NlbGVjdGlvbkNoYW5nZScsICgpID0+IHtcblx0XHRcdGlmICggIWNsaWNrZWQgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gLi4uYW5kIGl0IHdhcyBjYXVzZWQgYnkgdGhlIGNsaWNrLi4uXG5cdFx0XHRjbGlja2VkID0gZmFsc2U7XG5cblx0XHRcdGNvbnN0IHNlbGVjdGlvbiA9IGVkaXRvci5tb2RlbC5kb2N1bWVudC5zZWxlY3Rpb247XG5cblx0XHRcdC8vIC4uLmFuZCBubyB0ZXh0IGlzIHNlbGVjdGVkLi4uXG5cdFx0XHRpZiAoICFzZWxlY3Rpb24uaXNDb2xsYXBzZWQgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gLi4uYW5kIGNsaWNrZWQgdGV4dCBpcyB0aGUgbGluay4uLlxuXHRcdFx0aWYgKCAhc2VsZWN0aW9uLmhhc0F0dHJpYnV0ZSggJ3RlbXBsYXRlVmFyJyApICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHBvc2l0aW9uID0gc2VsZWN0aW9uLmdldEZpcnN0UG9zaXRpb24oKTtcblx0XHRcdGNvbnN0IGxpbmtSYW5nZSA9IGZpbmRBdHRyaWJ1dGVSYW5nZSggcG9zaXRpb24sICd0ZW1wbGF0ZVZhcicsIHNlbGVjdGlvbi5nZXRBdHRyaWJ1dGUoICd0ZW1wbGF0ZVZhcicgKSwgZWRpdG9yLm1vZGVsICk7XG5cblx0XHRcdC8vIC4uLmNoZWNrIHdoZXRoZXIgY2xpY2tlZCBzdGFydC9lbmQgYm91bmRhcnkgb2YgdGhlIGxpbmsuXG5cdFx0XHQvLyBJZiBzbywgcmVtb3ZlIHRoZSBgdGVtcGxhdGVWYXJgIGF0dHJpYnV0ZS5cblx0XHRcdGlmICggcG9zaXRpb24uaXNUb3VjaGluZyggbGlua1JhbmdlLnN0YXJ0ICkgfHwgcG9zaXRpb24uaXNUb3VjaGluZyggbGlua1JhbmdlLmVuZCApICkge1xuXHRcdFx0XHRlZGl0b3IubW9kZWwuY2hhbmdlKCB3cml0ZXIgPT4ge1xuXHRcdFx0XHRcdHJlbW92ZUxpbmtBdHRyaWJ1dGVzRnJvbVNlbGVjdGlvbiggd3JpdGVyLCBsaW5rQ29tbWFuZC5tYW51YWxEZWNvcmF0b3JzICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogU3RhcnRzIGxpc3RlbmluZyB0byB7QGxpbmsgbW9kdWxlOmVuZ2luZS9tb2RlbC9tb2RlbH5Nb2RlbCNkZWxldGVDb250ZW50fSBhbmQge0BsaW5rIG1vZHVsZTplbmdpbmUvbW9kZWwvbW9kZWx+TW9kZWwjaW5zZXJ0Q29udGVudH1cblx0ICogYW5kIGNoZWNrcyB3aGV0aGVyIHR5cGluZyBvdmVyIHRoZSBsaW5rLiBJZiBzbywgYXR0cmlidXRlcyBvZiByZW1vdmVkIHRleHQgYXJlIHByZXNlcnZlZCBhbmQgYXBwbGllZCB0byB0aGUgaW5zZXJ0ZWQgdGV4dC5cblx0ICpcblx0ICogVGhlIHB1cnBvc2Ugb2YgdGhpcyBhY3Rpb24gaXMgdG8gYWxsb3cgbW9kaWZ5aW5nIGEgdGV4dCB3aXRob3V0IGxvb3NpbmcgdGhlIGB0ZW1wbGF0ZVZhcmAgYXR0cmlidXRlIChhbmQgb3RoZXIpLlxuXHQgKlxuXHQgKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2NrZWRpdG9yL2NrZWRpdG9yNS9pc3N1ZXMvNDc2Mi5cblx0ICpcblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9lbmFibGVUeXBpbmdPdmVyTGluaygpIHtcblx0XHRjb25zdCBlZGl0b3IgPSB0aGlzLmVkaXRvcjtcblx0XHRjb25zdCB2aWV3ID0gZWRpdG9yLmVkaXRpbmcudmlldztcblxuXHRcdC8vIFNlbGVjdGlvbiBhdHRyaWJ1dGVzIHdoZW4gc3RhcnRlZCB0eXBpbmcgb3ZlciB0aGUgbGluay5cblx0XHRsZXQgc2VsZWN0aW9uQXR0cmlidXRlcztcblxuXHRcdC8vIFdoZXRoZXIgcHJlc3NlZCBgQmFja3NwYWNlYCBvciBgRGVsZXRlYC4gSWYgc28sIGF0dHJpYnV0ZXMgc2hvdWxkIG5vdCBiZSBwcmVzZXJ2ZWQuXG5cdFx0bGV0IGRlbGV0ZWRDb250ZW50O1xuXG5cdFx0Ly8gRGV0ZWN0IHByZXNzaW5nIGBCYWNrc3BhY2VgIC8gYERlbGV0ZWAuXG5cdFx0dGhpcy5saXN0ZW5Ubyggdmlldy5kb2N1bWVudCwgJ2RlbGV0ZScsICgpID0+IHtcblx0XHRcdGRlbGV0ZWRDb250ZW50ID0gdHJ1ZTtcblx0XHR9LCB7IHByaW9yaXR5OiAnaGlnaCcgfSApO1xuXG5cdFx0Ly8gTGlzdGVuaW5nIHRvIGBtb2RlbCNkZWxldGVDb250ZW50YCBhbGxvd3MgZGV0ZWN0aW5nIHdoZXRoZXIgc2VsZWN0ZWQgY29udGVudCB3YXMgYSBsaW5rLlxuXHRcdC8vIElmIHNvLCBiZWZvcmUgcmVtb3ZpbmcgdGhlIGVsZW1lbnQsIHdlIHdpbGwgY29weSBpdHMgYXR0cmlidXRlcy5cblx0XHR0aGlzLmxpc3RlblRvKCBlZGl0b3IubW9kZWwsICdkZWxldGVDb250ZW50JywgKCkgPT4ge1xuXHRcdFx0Y29uc3Qgc2VsZWN0aW9uID0gZWRpdG9yLm1vZGVsLmRvY3VtZW50LnNlbGVjdGlvbjtcblxuXHRcdFx0Ly8gQ29weSBhdHRyaWJ1dGVzIG9ubHkgaWYgYW55dGhpbmcgaXMgc2VsZWN0ZWQuXG5cdFx0XHRpZiAoIHNlbGVjdGlvbi5pc0NvbGxhcHNlZCApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBXaGVuIHRoZSBjb250ZW50IHdhcyBkZWxldGVkLCBkbyBub3QgcHJlc2VydmUgYXR0cmlidXRlcy5cblx0XHRcdGlmICggZGVsZXRlZENvbnRlbnQgKSB7XG5cdFx0XHRcdGRlbGV0ZWRDb250ZW50ID0gZmFsc2U7XG5cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBFbmFibGVkIG9ubHkgd2hlbiB0eXBpbmcuXG5cdFx0XHRpZiAoICFpc1R5cGluZyggZWRpdG9yICkgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCBzaG91bGRDb3B5QXR0cmlidXRlcyggZWRpdG9yLm1vZGVsICkgKSB7XG5cdFx0XHRcdHNlbGVjdGlvbkF0dHJpYnV0ZXMgPSBzZWxlY3Rpb24uZ2V0QXR0cmlidXRlcygpO1xuXHRcdFx0fVxuXHRcdH0sIHsgcHJpb3JpdHk6ICdoaWdoJyB9ICk7XG5cblx0XHQvLyBMaXN0ZW5pbmcgdG8gYG1vZGVsI2luc2VydENvbnRlbnRgIGFsbG93cyBkZXRlY3RpbmcgdGhlIGNvbnRlbnQgaW5zZXJ0aW9uLlxuXHRcdC8vIFdlIHdhbnQgdG8gYXBwbHkgYXR0cmlidXRlcyB0aGF0IHdlcmUgcmVtb3ZlZCB3aGlsZSB0eXBpbmcgb3ZlciB0aGUgbGluay5cblx0XHR0aGlzLmxpc3RlblRvKCBlZGl0b3IubW9kZWwsICdpbnNlcnRDb250ZW50JywgKCBldnQsIFsgZWxlbWVudCBdICkgPT4ge1xuXHRcdFx0ZGVsZXRlZENvbnRlbnQgPSBmYWxzZTtcblxuXHRcdFx0Ly8gRW5hYmxlZCBvbmx5IHdoZW4gdHlwaW5nLlxuXHRcdFx0aWYgKCAhaXNUeXBpbmcoIGVkaXRvciApICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmICggIXNlbGVjdGlvbkF0dHJpYnV0ZXMgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0ZWRpdG9yLm1vZGVsLmNoYW5nZSggd3JpdGVyID0+IHtcblx0XHRcdFx0Zm9yICggY29uc3QgWyBhdHRyaWJ1dGUsIHZhbHVlIF0gb2Ygc2VsZWN0aW9uQXR0cmlidXRlcyApIHtcblx0XHRcdFx0XHR3cml0ZXIuc2V0QXR0cmlidXRlKCBhdHRyaWJ1dGUsIHZhbHVlLCBlbGVtZW50ICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblxuXHRcdFx0c2VsZWN0aW9uQXR0cmlidXRlcyA9IG51bGw7XG5cdFx0fSwgeyBwcmlvcml0eTogJ2hpZ2gnIH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTdGFydHMgbGlzdGVuaW5nIHRvIHtAbGluayBtb2R1bGU6ZW5naW5lL21vZGVsL21vZGVsfk1vZGVsI2RlbGV0ZUNvbnRlbnR9IGFuZCBjaGVja3Mgd2hldGhlclxuXHQgKiByZW1vdmluZyBhIGNvbnRlbnQgcmlnaHQgYWZ0ZXIgdGhlIFwidGVtcGxhdGVWYXJcIiBhdHRyaWJ1dGUuXG5cdCAqXG5cdCAqIElmIHNvLCB0aGUgc2VsZWN0aW9uIHNob3VsZCBub3QgcHJlc2VydmUgdGhlIGB0ZW1wbGF0ZVZhcmAgYXR0cmlidXRlLiBIb3dldmVyLCBpZlxuXHQgKiB0aGUge0BsaW5rIG1vZHVsZTp0eXBpbmcvdHdvc3RlcGNhcmV0bW92ZW1lbnR+VHdvU3RlcENhcmV0TW92ZW1lbnR9IHBsdWdpbiBpcyBhY3RpdmUgYW5kXG5cdCAqIHRoZSBzZWxlY3Rpb24gaGFzIHRoZSBcInRlbXBsYXRlVmFyXCIgYXR0cmlidXRlIGR1ZSB0byBvdmVycmlkZW4gZ3Jhdml0eSAoYXQgdGhlIGVuZCksIHRoZSBgdGVtcGxhdGVWYXJgIGF0dHJpYnV0ZSBzaG91bGQgc3RheSB1bnRvdWNoZWQuXG5cdCAqXG5cdCAqIFRoZSBwdXJwb3NlIG9mIHRoaXMgYWN0aW9uIGlzIHRvIGFsbG93IHJlbW92aW5nIHRoZSBsaW5rIHRleHQgYW5kIGtlZXAgdGhlIHNlbGVjdGlvbiBvdXRzaWRlIHRoZSBsaW5rLlxuXHQgKlxuXHQgKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2NrZWRpdG9yL2NrZWRpdG9yNS9pc3N1ZXMvNzUyMS5cblx0ICpcblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9oYW5kbGVEZWxldGVDb250ZW50QWZ0ZXJMaW5rKCkge1xuXHRcdGNvbnN0IGVkaXRvciA9IHRoaXMuZWRpdG9yO1xuXHRcdGNvbnN0IG1vZGVsID0gZWRpdG9yLm1vZGVsO1xuXHRcdGNvbnN0IHNlbGVjdGlvbiA9IG1vZGVsLmRvY3VtZW50LnNlbGVjdGlvbjtcblx0XHRjb25zdCB2aWV3ID0gZWRpdG9yLmVkaXRpbmcudmlldztcblx0XHRjb25zdCBsaW5rQ29tbWFuZCA9IGVkaXRvci5jb21tYW5kcy5nZXQoICd0ZW1wbGF0ZScgKTtcblxuXHRcdC8vIEEgZmxhZyB3aGV0aGVyIGF0dHJpYnV0ZXMgYHRlbXBsYXRlVmFyYCBhdHRyaWJ1dGUgc2hvdWxkIGJlIHByZXNlcnZlZC5cblx0XHRsZXQgc2hvdWxkUHJlc2VydmVBdHRyaWJ1dGVzID0gZmFsc2U7XG5cblx0XHQvLyBBIGZsYWcgd2hldGhlciB0aGUgYEJhY2tzcGFjZWAga2V5IHdhcyBwcmVzc2VkLlxuXHRcdGxldCBoYXNCYWNrc3BhY2VQcmVzc2VkID0gZmFsc2U7XG5cblx0XHQvLyBEZXRlY3QgcHJlc3NpbmcgYEJhY2tzcGFjZWAuXG5cdFx0dGhpcy5saXN0ZW5Ubyggdmlldy5kb2N1bWVudCwgJ2RlbGV0ZScsICggZXZ0LCBkYXRhICkgPT4ge1xuXHRcdFx0aGFzQmFja3NwYWNlUHJlc3NlZCA9IGRhdGEuZG9tRXZlbnQua2V5Q29kZSA9PT0ga2V5Q29kZXMuYmFja3NwYWNlO1xuXHRcdH0sIHsgcHJpb3JpdHk6ICdoaWdoJyB9ICk7XG5cblx0XHQvLyBCZWZvcmUgcmVtb3ZpbmcgdGhlIGNvbnRlbnQsIGNoZWNrIHdoZXRoZXIgdGhlIHNlbGVjdGlvbiBpcyBpbnNpZGUgYSBsaW5rIG9yIGF0IHRoZSBlbmQgb2YgbGluayBidXQgd2l0aCAyLVNDTSBlbmFibGVkLlxuXHRcdC8vIElmIHNvLCB3ZSB3YW50IHRvIHByZXNlcnZlIGxpbmsgYXR0cmlidXRlcy5cblx0XHR0aGlzLmxpc3RlblRvKCBtb2RlbCwgJ2RlbGV0ZUNvbnRlbnQnLCAoKSA9PiB7XG5cdFx0XHQvLyBSZXNldCB0aGUgc3RhdGUuXG5cdFx0XHRzaG91bGRQcmVzZXJ2ZUF0dHJpYnV0ZXMgPSBmYWxzZTtcblxuXHRcdFx0Y29uc3QgcG9zaXRpb24gPSBzZWxlY3Rpb24uZ2V0Rmlyc3RQb3NpdGlvbigpO1xuXHRcdFx0Y29uc3QgdGVtcGxhdGVWYXIgPSBzZWxlY3Rpb24uZ2V0QXR0cmlidXRlKCAndGVtcGxhdGVWYXInICk7XG5cblx0XHRcdGlmICggIXRlbXBsYXRlVmFyICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGxpbmtSYW5nZSA9IGZpbmRBdHRyaWJ1dGVSYW5nZSggcG9zaXRpb24sICd0ZW1wbGF0ZVZhcicsIHRlbXBsYXRlVmFyLCBtb2RlbCApO1xuXG5cdFx0XHQvLyBQcmVzZXJ2ZSBgdGVtcGxhdGVWYXJgIGF0dHJpYnV0ZSBpZiB0aGUgc2VsZWN0aW9uIGlzIGluIHRoZSBtaWRkbGUgb2YgdGhlIGxpbmsgb3Jcblx0XHRcdC8vIHRoZSBzZWxlY3Rpb24gaXMgYXQgdGhlIGVuZCBvZiB0aGUgbGluayBhbmQgMi1TQ00gaXMgYWN0aXZhdGVkLlxuXHRcdFx0c2hvdWxkUHJlc2VydmVBdHRyaWJ1dGVzID0gbGlua1JhbmdlLmNvbnRhaW5zUG9zaXRpb24oIHBvc2l0aW9uICkgfHwgbGlua1JhbmdlLmVuZC5pc0VxdWFsKCBwb3NpdGlvbiApO1xuXHRcdH0sIHsgcHJpb3JpdHk6ICdoaWdoJyB9ICk7XG5cblx0XHQvLyBBZnRlciByZW1vdmluZyB0aGUgY29udGVudCwgY2hlY2sgd2hldGhlciB0aGUgY3VycmVudCBzZWxlY3Rpb24gc2hvdWxkIHByZXNlcnZlIHRoZSBgdGVtcGxhdGVWYXJgIGF0dHJpYnV0ZS5cblx0XHR0aGlzLmxpc3RlblRvKCBtb2RlbCwgJ2RlbGV0ZUNvbnRlbnQnLCAoKSA9PiB7XG5cdFx0XHQvLyBJZiBkaWRuJ3QgcHJlc3MgYEJhY2tzcGFjZWAuXG5cdFx0XHRpZiAoICFoYXNCYWNrc3BhY2VQcmVzc2VkICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGhhc0JhY2tzcGFjZVByZXNzZWQgPSBmYWxzZTtcblxuXHRcdFx0Ly8gRGlzYWJsZSB0aGUgbWVjaGFuaXNtIGlmIGluc2lkZSBhIGxpbmsgKGA8JHRleHQgdXJsPVwiZm9vXCI+Rltdb288LyR0ZXh0PmAgb3IgPCR0ZXh0IHVybD1cImZvb1wiPkZvb1tdPC8kdGV4dD5gKS5cblx0XHRcdGlmICggc2hvdWxkUHJlc2VydmVBdHRyaWJ1dGVzICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIFVzZSBgbW9kZWwuZW5xdWV1ZUNoYW5nZSgpYCBpbiBvcmRlciB0byBleGVjdXRlIHRoZSBjYWxsYmFjayBhdCB0aGUgZW5kIG9mIHRoZSBjaGFuZ2VzIHByb2Nlc3MuXG5cdFx0XHRlZGl0b3IubW9kZWwuZW5xdWV1ZUNoYW5nZSggd3JpdGVyID0+IHtcblx0XHRcdFx0cmVtb3ZlTGlua0F0dHJpYnV0ZXNGcm9tU2VsZWN0aW9uKCB3cml0ZXIsIGxpbmtDb21tYW5kLm1hbnVhbERlY29yYXRvcnMgKTtcblx0XHRcdH0gKTtcblx0XHR9LCB7IHByaW9yaXR5OiAnbG93JyB9ICk7XG5cdH1cbn1cblxuLy8gTWFrZSB0aGUgc2VsZWN0aW9uIGZyZWUgb2YgbGluay1yZWxhdGVkIG1vZGVsIGF0dHJpYnV0ZXMuXG4vLyBBbGwgbGluay1yZWxhdGVkIG1vZGVsIGF0dHJpYnV0ZXMgc3RhcnQgd2l0aCBcImxpbmtcIi4gVGhhdCBpbmNsdWRlcyBub3Qgb25seSBcInRlbXBsYXRlVmFyXCJcbi8vIGJ1dCBhbHNvIGFsbCBkZWNvcmF0b3IgYXR0cmlidXRlcyAodGhleSBoYXZlIGR5bmFtaWMgbmFtZXMpLlxuLy9cbi8vIEBwYXJhbSB7bW9kdWxlOmVuZ2luZS9tb2RlbC93cml0ZXJ+V3JpdGVyfSB3cml0ZXJcbi8vIEBwYXJhbSB7bW9kdWxlOnV0aWxzL2NvbGxlY3Rpb25+Q29sbGVjdGlvbn0gbWFudWFsRGVjb3JhdG9yc1xuZnVuY3Rpb24gcmVtb3ZlTGlua0F0dHJpYnV0ZXNGcm9tU2VsZWN0aW9uKCB3cml0ZXIsIG1hbnVhbERlY29yYXRvcnMgKSB7XG5cdHdyaXRlci5yZW1vdmVTZWxlY3Rpb25BdHRyaWJ1dGUoICd0ZW1wbGF0ZVZhcicgKTtcblxuXHRmb3IgKCBjb25zdCBkZWNvcmF0b3Igb2YgbWFudWFsRGVjb3JhdG9ycyApIHtcblx0XHR3cml0ZXIucmVtb3ZlU2VsZWN0aW9uQXR0cmlidXRlKCBkZWNvcmF0b3IuaWQgKTtcblx0fVxufVxuXG4vLyBDaGVja3Mgd2hldGhlciBzZWxlY3Rpb24ncyBhdHRyaWJ1dGVzIHNob3VsZCBiZSBjb3BpZWQgdG8gdGhlIG5ldyBpbnNlcnRlZCB0ZXh0LlxuLy9cbi8vIEBwYXJhbSB7bW9kdWxlOmVuZ2luZS9tb2RlbC9tb2RlbH5Nb2RlbH0gbW9kZWxcbi8vIEByZXR1cm5zIHtCb29sZWFufVxuZnVuY3Rpb24gc2hvdWxkQ29weUF0dHJpYnV0ZXMoIG1vZGVsICkge1xuXHRjb25zdCBzZWxlY3Rpb24gPSBtb2RlbC5kb2N1bWVudC5zZWxlY3Rpb247XG5cdGNvbnN0IGZpcnN0UG9zaXRpb24gPSBzZWxlY3Rpb24uZ2V0Rmlyc3RQb3NpdGlvbigpO1xuXHRjb25zdCBsYXN0UG9zaXRpb24gPSBzZWxlY3Rpb24uZ2V0TGFzdFBvc2l0aW9uKCk7XG5cdGNvbnN0IG5vZGVBdEZpcnN0UG9zaXRpb24gPSBmaXJzdFBvc2l0aW9uLm5vZGVBZnRlcjtcblxuXHQvLyBUaGUgdGV4dCBsaW5rIG5vZGUgZG9lcyBub3QgZXhpc3QuLi5cblx0aWYgKCAhbm9kZUF0Rmlyc3RQb3NpdGlvbiApIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyAuLi5vciBpdCBpc24ndCB0aGUgdGV4dCBub2RlLi4uXG5cdGlmICggIW5vZGVBdEZpcnN0UG9zaXRpb24uaXMoICckdGV4dCcgKSApIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyAuLi5vciBpc24ndCB0aGUgbGluay5cblx0aWYgKCAhbm9kZUF0Rmlyc3RQb3NpdGlvbi5oYXNBdHRyaWJ1dGUoICd0ZW1wbGF0ZVZhcicgKSApIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyBgdGV4dE5vZGVgID0gdGhlIHBvc2l0aW9uIGlzIGluc2lkZSB0aGUgbGluayBlbGVtZW50LlxuXHQvLyBgbm9kZUJlZm9yZWAgPSB0aGUgcG9zaXRpb24gaXMgYXQgdGhlIGVuZCBvZiB0aGUgbGluayBlbGVtZW50LlxuXHRjb25zdCBub2RlQXRMYXN0UG9zaXRpb24gPSBsYXN0UG9zaXRpb24udGV4dE5vZGUgfHwgbGFzdFBvc2l0aW9uLm5vZGVCZWZvcmU7XG5cblx0Ly8gSWYgYm90aCByZWZlcmVuY2VzIHRoZSBzYW1lIG5vZGUgc2VsZWN0aW9uIGNvbnRhaW5zIGEgc2luZ2xlIHRleHQgbm9kZS5cblx0aWYgKCBub2RlQXRGaXJzdFBvc2l0aW9uID09PSBub2RlQXRMYXN0UG9zaXRpb24gKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHQvLyBJZiBub2RlcyBhcmUgbm90IGVxdWFsLCBtYXliZSB0aGUgbGluayBub2RlcyBoYXMgZGVmaW5lZCBhZGRpdGlvbmFsIGF0dHJpYnV0ZXMgaW5zaWRlLlxuXHQvLyBGaXJzdCwgd2UgbmVlZCB0byBmaW5kIHRoZSBlbnRpcmUgbGluayByYW5nZS5cblx0Y29uc3QgbGlua1JhbmdlID0gZmluZEF0dHJpYnV0ZVJhbmdlKCBmaXJzdFBvc2l0aW9uLCAndGVtcGxhdGVWYXInLCBub2RlQXRGaXJzdFBvc2l0aW9uLmdldEF0dHJpYnV0ZSggJ3RlbXBsYXRlVmFyJyApLCBtb2RlbCApO1xuXG5cdC8vIFRoZW4gd2UgY2FuIGNoZWNrIHdoZXRoZXIgc2VsZWN0ZWQgcmFuZ2UgaXMgaW5zaWRlIHRoZSBmb3VuZCBsaW5rIHJhbmdlLiBJZiBzbywgYXR0cmlidXRlcyBzaG91bGQgYmUgcHJlc2VydmVkLlxuXHRyZXR1cm4gbGlua1JhbmdlLmNvbnRhaW5zUmFuZ2UoIG1vZGVsLmNyZWF0ZVJhbmdlKCBmaXJzdFBvc2l0aW9uLCBsYXN0UG9zaXRpb24gKSwgdHJ1ZSApO1xufVxuXG4vLyBDaGVja3Mgd2hldGhlciBwcm92aWRlZCBjaGFuZ2VzIHdlcmUgY2F1c2VkIGJ5IHR5cGluZy5cbi8vXG4vLyBAcGFyYW1zIHttb2R1bGU6Y29yZS9lZGl0b3IvZWRpdG9yfkVkaXRvcn0gZWRpdG9yXG4vLyBAcmV0dXJucyB7Qm9vbGVhbn1cbmZ1bmN0aW9uIGlzVHlwaW5nKCBlZGl0b3IgKSB7XG5cdGNvbnN0IGlucHV0ID0gZWRpdG9yLnBsdWdpbnMuZ2V0KCAnSW5wdXQnICk7XG5cblx0cmV0dXJuIGlucHV0LmlzSW5wdXQoIGVkaXRvci5tb2RlbC5jaGFuZ2UoIHdyaXRlciA9PiB3cml0ZXIuYmF0Y2ggKSApO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZSBDb3B5cmlnaHQgKGMpIDIwMDMtMjAyMSwgQ0tTb3VyY2UgLSBGcmVkZXJpY28gS25hYmJlbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIEZvciBsaWNlbnNpbmcsIHNlZSBMSUNFTlNFLm1kIG9yIGh0dHBzOi8vY2tlZGl0b3IuY29tL2xlZ2FsL2NrZWRpdG9yLW9zcy1saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGxpbmsvbGlua3VpXG4gKi9cblxuaW1wb3J0ICBQbHVnaW4gIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtY29yZS9zcmMvcGx1Z2luJztcbmltcG9ydCAgQ2xpY2tPYnNlcnZlciAgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1lbmdpbmUvc3JjL3ZpZXcvb2JzZXJ2ZXIvY2xpY2tvYnNlcnZlcic7XG5pbXBvcnQgeyBCdXR0b25WaWV3LCBDb250ZXh0dWFsQmFsbG9vbiwgY2xpY2tPdXRzaWRlSGFuZGxlciB9IGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtdWkvc3JjJztcblxuaW1wb3J0IFRlbXBsYXRlRm9ybVZpZXcgZnJvbSAnLi91aS90ZW1wbGF0ZS1mb3JtLXZpZXcnO1xuaW1wb3J0IFRlbXBsYXRlQWN0aW9uc1ZpZXcgZnJvbSAnLi91aS90ZW1wbGF0ZS1hY3Rpb25zLXZpZXcnO1xuaW1wb3J0IHsgIGlzTGlua0VsZW1lbnQsIExJTktfS0VZU1RST0tFIH0gZnJvbSAnLi91dGlscyc7XG5cbmltcG9ydCBUZW1sYXRlSWNvbiBmcm9tICcuLi90aGVtZS9pY29ucy90ZW1sYXRlSWNvbi5zdmcnO1xuXG5jb25zdCBWSVNVQUxfU0VMRUNUSU9OX01BUktFUl9OQU1FID0gJ3RlbXBsYXRlLXVpJztcblxuLyoqXG4gKiBUaGUgbGluayBVSSBwbHVnaW4uIEl0IGludHJvZHVjZXMgdGhlIGAndGVtcGxhdGUnYCBhbmQgYCdjYW5jZWx0ZW1wbGF0ZSdgIGJ1dHRvbnMgYW5kIHN1cHBvcnQgZm9yIHRoZSA8a2JkPkN0cmwrSzwva2JkPiBrZXlzdHJva2UuXG4gKlxuICogSXQgdXNlcyB0aGVcbiAqIHtAbGluayBtb2R1bGU6dWkvcGFuZWwvYmFsbG9vbi9jb250ZXh0dWFsYmFsbG9vbn5Db250ZXh0dWFsQmFsbG9vbiBjb250ZXh0dWFsIGJhbGxvb24gcGx1Z2lufS5cbiAqXG4gKiBAZXh0ZW5kcyBtb2R1bGU6Y29yZS9wbHVnaW5+UGx1Z2luXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlbXBsYXRlVWkgZXh0ZW5kcyBQbHVnaW4ge1xuXHQvKipcblx0ICogQGluaGVyaXREb2Ncblx0ICovXG5cdHN0YXRpYyBnZXQgcmVxdWlyZXMoKSB7XG5cdFx0cmV0dXJuIFsgQ29udGV4dHVhbEJhbGxvb24gXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5oZXJpdERvY1xuXHQgKi9cblx0c3RhdGljIGdldCBwbHVnaW5OYW1lKCkge1xuXHRcdHJldHVybiAnVGV4dFRlbXBsYXRlVUknO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbmhlcml0RG9jXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdGNvbnN0IGVkaXRvciA9IHRoaXMuZWRpdG9yO1xuXG5cdFx0ZWRpdG9yLmVkaXRpbmcudmlldy5hZGRPYnNlcnZlciggQ2xpY2tPYnNlcnZlciApO1xuXG5cdFx0LyoqXG5cdFx0ICogVGhlIGFjdGlvbnMgdmlldyBkaXNwbGF5ZWQgaW5zaWRlIG9mIHRoZSBiYWxsb29uLlxuXHRcdCAqXG5cdFx0ICogQG1lbWJlciB7bW9kdWxlOmxpbmsvdWkvbGlua2FjdGlvbnN2aWV3flRlbXBsYXRlQWN0aW9uc1ZpZXd9XG5cdFx0ICovXG5cdFx0dGhpcy5hY3Rpb25zVmlldyA9IHRoaXMuX2NyZWF0ZUFjdGlvbnNWaWV3KCk7XG5cblx0XHQvKipcblx0XHQgKiBUaGUgZm9ybSB2aWV3IGRpc3BsYXllZCBpbnNpZGUgdGhlIGJhbGxvb24uXG5cdFx0ICpcblx0XHQgKiBAbWVtYmVyIHttb2R1bGU6bGluay91aS9saW5rZm9ybXZpZXd+TGlua0Zvcm1WaWV3fVxuXHRcdCAqL1xuXHRcdHRoaXMuZm9ybVZpZXcgPSB0aGlzLl9jcmVhdGVGb3JtVmlldygpO1xuXG5cdFx0LyoqXG5cdFx0ICogVGhlIGNvbnRleHR1YWwgYmFsbG9vbiBwbHVnaW4gaW5zdGFuY2UuXG5cdFx0ICpcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqIEBtZW1iZXIge21vZHVsZTp1aS9wYW5lbC9iYWxsb29uL2NvbnRleHR1YWxiYWxsb29ufkNvbnRleHR1YWxCYWxsb29ufVxuXHRcdCAqL1xuXHRcdHRoaXMuX2JhbGxvb24gPSBlZGl0b3IucGx1Z2lucy5nZXQoIENvbnRleHR1YWxCYWxsb29uICk7XG5cblx0XHQvLyBDcmVhdGUgdG9vbGJhciBidXR0b25zLlxuXHRcdHRoaXMuX2NyZWF0ZVRvb2xiYXJMaW5rQnV0dG9uKCk7XG5cblx0XHQvLyBBdHRhY2ggbGlmZWN5Y2xlIGFjdGlvbnMgdG8gdGhlIHRoZSBiYWxsb29uLlxuXHRcdHRoaXMuX2VuYWJsZVVzZXJCYWxsb29uSW50ZXJhY3Rpb25zKCk7XG5cblx0XHQvLyBSZW5kZXJzIGEgZmFrZSB2aXN1YWwgc2VsZWN0aW9uIG1hcmtlciBvbiBhbiBleHBhbmRlZCBzZWxlY3Rpb24uXG5cdFx0ZWRpdG9yLmNvbnZlcnNpb24uZm9yKCAnZWRpdGluZ0Rvd25jYXN0JyApLm1hcmtlclRvSGlnaGxpZ2h0KCB7XG5cdFx0XHRtb2RlbDogVklTVUFMX1NFTEVDVElPTl9NQVJLRVJfTkFNRSxcblx0XHRcdHZpZXc6IHtcblx0XHRcdFx0Y2xhc3NlczogWyAnY2stZmFrZS1saW5rLXNlbGVjdGlvbicgXVxuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdC8vIFJlbmRlcnMgYSBmYWtlIHZpc3VhbCBzZWxlY3Rpb24gbWFya2VyIG9uIGEgY29sbGFwc2VkIHNlbGVjdGlvbi5cblx0XHRlZGl0b3IuY29udmVyc2lvbi5mb3IoICdlZGl0aW5nRG93bmNhc3QnICkubWFya2VyVG9FbGVtZW50KCB7XG5cdFx0XHRtb2RlbDogVklTVUFMX1NFTEVDVElPTl9NQVJLRVJfTkFNRSxcblx0XHRcdHZpZXc6IHtcblx0XHRcdFx0bmFtZTogJ3NwYW4nLFxuXHRcdFx0XHRjbGFzc2VzOiBbICdjay1mYWtlLWxpbmstc2VsZWN0aW9uJywgJ2NrLWZha2UtbGluay1zZWxlY3Rpb25fY29sbGFwc2VkJyBdXG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbmhlcml0RG9jXG5cdCAqL1xuXHRkZXN0cm95KCkge1xuXHRcdHN1cGVyLmRlc3Ryb3koKTtcblxuXHRcdC8vIERlc3Ryb3kgY3JlYXRlZCBVSSBjb21wb25lbnRzIGFzIHRoZXkgYXJlIG5vdCBhdXRvbWF0aWNhbGx5IGRlc3Ryb3llZCAoc2VlIGNrZWRpdG9yNSMxMzQxKS5cblx0XHR0aGlzLmZvcm1WaWV3LmRlc3Ryb3koKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIHRoZSB7QGxpbmsgbW9kdWxlOmxpbmsvdWkvbGlua2FjdGlvbnN2aWV3flRlbXBsYXRlQWN0aW9uc1ZpZXd9IGluc3RhbmNlLlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcmV0dXJucyB7bW9kdWxlOmxpbmsvdWkvbGlua2FjdGlvbnN2aWV3flRlbXBsYXRlQWN0aW9uc1ZpZXd9IFRoZSBsaW5rIGFjdGlvbnMgdmlldyBpbnN0YW5jZS5cblx0ICovXG5cdF9jcmVhdGVBY3Rpb25zVmlldygpIHtcblx0XHRjb25zdCBlZGl0b3IgPSB0aGlzLmVkaXRvcjtcblx0XHRjb25zdCBhY3Rpb25zVmlldyA9IG5ldyBUZW1wbGF0ZUFjdGlvbnNWaWV3KCBlZGl0b3IubG9jYWxlICk7XG5cdFx0Y29uc3QgdGVtcGxhdGVDb21tYW5kID0gZWRpdG9yLmNvbW1hbmRzLmdldCggJ3RlbXBsYXRlJyApO1xuXHRcdGNvbnN0IGNhbmNlbFRlbXBsYXRlQ29tbWFuZCA9IGVkaXRvci5jb21tYW5kcy5nZXQoICdjYW5jZWx0ZW1wbGF0ZScgKTtcblxuXHRcdGFjdGlvbnNWaWV3LmJpbmQoICdocmVmJyApLnRvKCB0ZW1wbGF0ZUNvbW1hbmQsICd2YWx1ZScgKTtcblx0XHRhY3Rpb25zVmlldy5lZGl0QnV0dG9uVmlldy5iaW5kKCAnaXNFbmFibGVkJyApLnRvKCB0ZW1wbGF0ZUNvbW1hbmQgKTtcblx0XHRhY3Rpb25zVmlldy51bmxpbmtCdXR0b25WaWV3LmJpbmQoICdpc0VuYWJsZWQnICkudG8oIGNhbmNlbFRlbXBsYXRlQ29tbWFuZCApO1xuXG5cdFx0Ly8gRXhlY3V0ZSB1bmxpbmsgY29tbWFuZCBhZnRlciBjbGlja2luZyBvbiB0aGUgXCJFZGl0XCIgYnV0dG9uLlxuXHRcdHRoaXMubGlzdGVuVG8oIGFjdGlvbnNWaWV3LCAnZWRpdCcsICgpID0+IHtcblx0XHRcdHRoaXMuX2FkZEZvcm1WaWV3KCk7XG5cdFx0fSApO1xuXG5cdFx0Ly8gRXhlY3V0ZSB1bmxpbmsgY29tbWFuZCBhZnRlciBjbGlja2luZyBvbiB0aGUgXCJVbmxpbmtcIiBidXR0b24uXG5cdFx0dGhpcy5saXN0ZW5UbyggYWN0aW9uc1ZpZXcsICdjYW5jZWx0ZW1wbGF0ZScsICgpID0+IHtcblx0XHRcdGVkaXRvci5leGVjdXRlKCAnY2FuY2VsdGVtcGxhdGUnICk7XG5cdFx0XHR0aGlzLl9oaWRlVUkoKTtcblx0XHR9ICk7XG5cblx0XHQvLyBDbG9zZSB0aGUgcGFuZWwgb24gZXNjIGtleSBwcmVzcyB3aGVuIHRoZSAqKmFjdGlvbnMgaGF2ZSBmb2N1cyoqLlxuXHRcdGFjdGlvbnNWaWV3LmtleXN0cm9rZXMuc2V0KCAnRXNjJywgKCBkYXRhLCBjYW5jZWwgKSA9PiB7XG5cdFx0XHR0aGlzLl9oaWRlVUkoKTtcblx0XHRcdGNhbmNlbCgpO1xuXHRcdH0gKTtcblxuXHRcdC8vIE9wZW4gdGhlIGZvcm0gdmlldyBvbiBDdHJsK0sgd2hlbiB0aGUgKiphY3Rpb25zIGhhdmUgZm9jdXMqKi4uXG5cdFx0YWN0aW9uc1ZpZXcua2V5c3Ryb2tlcy5zZXQoIExJTktfS0VZU1RST0tFLCAoIGRhdGEsIGNhbmNlbCApID0+IHtcblx0XHRcdHRoaXMuX2FkZEZvcm1WaWV3KCk7XG5cdFx0XHRjYW5jZWwoKTtcblx0XHR9ICk7XG5cblx0XHRyZXR1cm4gYWN0aW9uc1ZpZXc7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlcyB0aGUge0BsaW5rIG1vZHVsZTpsaW5rL3VpL2xpbmtmb3Jtdmlld35MaW5rRm9ybVZpZXd9IGluc3RhbmNlLlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcmV0dXJucyB7bW9kdWxlOmxpbmsvdWkvbGlua2Zvcm12aWV3fkxpbmtGb3JtVmlld30gVGhlIGxpbmsgZm9ybSB2aWV3IGluc3RhbmNlLlxuXHQgKi9cblx0X2NyZWF0ZUZvcm1WaWV3KCkge1xuXHRcdGNvbnN0IGVkaXRvciA9IHRoaXMuZWRpdG9yO1xuXHRcdGNvbnN0IHRlbXBsYXRlQ29tbWFuZCA9IGVkaXRvci5jb21tYW5kcy5nZXQoICd0ZW1wbGF0ZScgKTtcblxuXHRcdGNvbnN0IGZvcm1WaWV3ID0gbmV3IFRlbXBsYXRlRm9ybVZpZXcoIGVkaXRvci5sb2NhbGUsIHRlbXBsYXRlQ29tbWFuZCApO1xuXG5cdFx0Zm9ybVZpZXcubGFiZWxJbnB1dFZpZXcuZmllbGRWaWV3LmJpbmQoICd2YWx1ZScgKS50byggdGVtcGxhdGVDb21tYW5kLCAndmFsdWUnICk7XG5cblx0XHQvLyBGb3JtIGVsZW1lbnRzIHNob3VsZCBiZSByZWFkLW9ubHkgd2hlbiBjb3JyZXNwb25kaW5nIGNvbW1hbmRzIGFyZSBkaXNhYmxlZC5cblx0XHRmb3JtVmlldy5sYWJlbElucHV0Vmlldy5iaW5kKCAnaXNSZWFkT25seScgKS50byggdGVtcGxhdGVDb21tYW5kLCAnaXNFbmFibGVkJywgdmFsdWUgPT4gIXZhbHVlICk7XG5cblx0XHRmb3JtVmlldy5zYXZlQnV0dG9uVmlldy5iaW5kKCAnaXNFbmFibGVkJyApLnRvKCB0ZW1wbGF0ZUNvbW1hbmQgKTtcblxuXHRcdC8vIEV4ZWN1dGUgbGluayBjb21tYW5kIGFmdGVyIGNsaWNraW5nIHRoZSBcIlNhdmVcIiBidXR0b24uXG5cdFx0dGhpcy5saXN0ZW5UbyggZm9ybVZpZXcsICdzdWJtaXQnLCAoKSA9PiB7XG5cdFx0XHRjb25zdCB7bGFiZWx9ICA9IGZvcm1WaWV3LnR5cGVJbnB1dFZpZXcuZmllbGRWaWV3LmJ1dHRvblZpZXc7XG5cdFx0XHRjb25zdCB0ZW1wbGF0ZVZhciA9IHtcblx0XHRcdFx0aWQgOiBmb3JtVmlldy5sYWJlbElucHV0Vmlldy5maWVsZFZpZXcuZWxlbWVudC52YWx1ZSxcblx0XHRcdFx0dHlwZSA6IGxhYmVsXG5cdFx0XHR9XG5cdFx0XHQvLyBjb25zdCB7IHZhbHVlIH0gPSBmb3JtVmlldy5sYWJlbElucHV0Vmlldy5maWVsZFZpZXcuZWxlbWVudDtcblx0XHRcdC8vIGNvbnN0IHBhcnNlZFVybCA9IGFkZExpbmtQcm90b2NvbElmQXBwbGljYWJsZSggdmFsdWUsIGRlZmF1bHRQcm90b2NvbCApO1xuXHRcdFx0ZWRpdG9yLmV4ZWN1dGUoICd0ZW1wbGF0ZScsIHRlbXBsYXRlVmFyLCBmb3JtVmlldy5nZXREZWNvcmF0b3JTd2l0Y2hlc1N0YXRlKCkgKTtcblx0XHRcdHRoaXMuX2Nsb3NlRm9ybVZpZXcoKTtcblx0XHR9ICk7XG5cblx0XHQvLyBIaWRlIHRoZSBwYW5lbCBhZnRlciBjbGlja2luZyB0aGUgXCJDYW5jZWxcIiBidXR0b24uXG5cdFx0dGhpcy5saXN0ZW5UbyggZm9ybVZpZXcsICdjYW5jZWwnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLl9jbG9zZUZvcm1WaWV3KCk7XG5cdFx0fSApO1xuXG5cdFx0Ly8gQ2xvc2UgdGhlIHBhbmVsIG9uIGVzYyBrZXkgcHJlc3Mgd2hlbiB0aGUgKipmb3JtIGhhcyBmb2N1cyoqLlxuXHRcdGZvcm1WaWV3LmtleXN0cm9rZXMuc2V0KCAnRXNjJywgKCBkYXRhLCBjYW5jZWwgKSA9PiB7XG5cdFx0XHR0aGlzLl9jbG9zZUZvcm1WaWV3KCk7XG5cdFx0XHRjYW5jZWwoKTtcblx0XHR9ICk7XG5cblx0XHRyZXR1cm4gZm9ybVZpZXc7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIHRvb2xiYXIgVGVtcGxhdGUgYnV0dG9uLiBDbGlja2luZyB0aGlzIGJ1dHRvbiB3aWxsIHNob3dcblx0ICogYSB7QGxpbmsgI19iYWxsb29ufSBhdHRhY2hlZCB0byB0aGUgc2VsZWN0aW9uLlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X2NyZWF0ZVRvb2xiYXJMaW5rQnV0dG9uKCkge1xuXHRcdGNvbnN0IGVkaXRvciA9IHRoaXMuZWRpdG9yO1xuXHRcdGNvbnN0IHRlbXBsYXRlQ29tbWFuZCA9IGVkaXRvci5jb21tYW5kcy5nZXQoICd0ZW1wbGF0ZScgKTtcblx0XHRjb25zdCB0ID0gZWRpdG9yLnQ7XG5cblx0XHQvLyBIYW5kbGUgdGhlIGBDdHJsK0tgIGtleXN0cm9rZSBhbmQgc2hvdyB0aGUgcGFuZWwuXG5cdFx0ZWRpdG9yLmtleXN0cm9rZXMuc2V0KCBMSU5LX0tFWVNUUk9LRSwgKCBrZXlFdnREYXRhLCBjYW5jZWwgKSA9PiB7XG5cdFx0XHQvLyBQcmV2ZW50IGZvY3VzaW5nIHRoZSBzZWFyY2ggYmFyIGluIEZGLCBDaHJvbWUgYW5kIEVkZ2UuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vY2tlZGl0b3IvY2tlZGl0b3I1L2lzc3Vlcy80ODExLlxuXHRcdFx0Y2FuY2VsKCk7XG5cblx0XHRcdGlmICggdGVtcGxhdGVDb21tYW5kLmlzRW5hYmxlZCApIHtcblx0XHRcdFx0dGhpcy5fc2hvd1VJKCB0cnVlICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0ZWRpdG9yLnVpLmNvbXBvbmVudEZhY3RvcnkuYWRkKCAndGVtcGxhdGUnLCBsb2NhbGUgPT4ge1xuXHRcdFx0Y29uc3QgYnV0dG9uID0gbmV3IEJ1dHRvblZpZXcoIGxvY2FsZSApO1xuXG5cdFx0XHRidXR0b24uaXNFbmFibGVkID0gdHJ1ZTtcblx0XHRcdGJ1dHRvbi5sYWJlbCA9IHQoICdWYXIgRGVmaW5lJyApO1xuXHRcdFx0YnV0dG9uLmljb24gPSBUZW1sYXRlSWNvbjtcblx0XHRcdGJ1dHRvbi5rZXlzdHJva2UgPSBMSU5LX0tFWVNUUk9LRTtcblx0XHRcdGJ1dHRvbi50b29sdGlwID0gdHJ1ZTtcblx0XHRcdGJ1dHRvbi5pc1RvZ2dsZWFibGUgPSB0cnVlO1xuXG5cdFx0XHQvLyBCaW5kIGJ1dHRvbiB0byB0aGUgY29tbWFuZC5cblx0XHRcdGJ1dHRvbi5iaW5kKCAnaXNFbmFibGVkJyApLnRvKCB0ZW1wbGF0ZUNvbW1hbmQsICdpc0VuYWJsZWQnICk7XG5cdFx0XHRidXR0b24uYmluZCggJ2lzT24nICkudG8oIHRlbXBsYXRlQ29tbWFuZCwgJ3ZhbHVlJywgdmFsdWUgPT4gISF2YWx1ZSApO1xuXG5cdFx0XHQvLyBTaG93IHRoZSBwYW5lbCBvbiBidXR0b24gY2xpY2suXG5cdFx0XHR0aGlzLmxpc3RlblRvKCBidXR0b24sICdleGVjdXRlJywgKCkgPT4gdGhpcy5fc2hvd1VJKCB0cnVlICkgKTtcblxuXHRcdFx0cmV0dXJuIGJ1dHRvbjtcblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogQXR0YWNoZXMgYWN0aW9ucyB0aGF0IGNvbnRyb2wgd2hldGhlciB0aGUgYmFsbG9vbiBwYW5lbCBjb250YWluaW5nIHRoZVxuXHQgKiB7QGxpbmsgI2Zvcm1WaWV3fSBpcyB2aXNpYmxlIG9yIG5vdC5cblx0ICpcblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9lbmFibGVVc2VyQmFsbG9vbkludGVyYWN0aW9ucygpIHtcblx0XHRjb25zdCB2aWV3RG9jdW1lbnQgPSB0aGlzLmVkaXRvci5lZGl0aW5nLnZpZXcuZG9jdW1lbnQ7XG5cblx0XHQvLyBIYW5kbGUgY2xpY2sgb24gdmlldyBkb2N1bWVudCBhbmQgc2hvdyBwYW5lbCB3aGVuIHNlbGVjdGlvbiBpcyBwbGFjZWQgaW5zaWRlIHRoZSBsaW5rIGVsZW1lbnQuXG5cdFx0Ly8gS2VlcCBwYW5lbCBvcGVuIHVudGlsIHNlbGVjdGlvbiB3aWxsIGJlIGluc2lkZSB0aGUgc2FtZSBsaW5rIGVsZW1lbnQuXG5cdFx0dGhpcy5saXN0ZW5Ubyggdmlld0RvY3VtZW50LCAnY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRjb25zdCBwYXJlbnRMaW5rID0gdGhpcy5fZ2V0U2VsZWN0ZWRMaW5rRWxlbWVudCgpO1xuXG5cdFx0XHRpZiAoIHBhcmVudExpbmsgKSB7XG5cdFx0XHRcdC8vIFRoZW4gc2hvdyBwYW5lbCBidXQga2VlcCBmb2N1cyBpbnNpZGUgZWRpdG9yIGVkaXRhYmxlLlxuXHRcdFx0XHR0aGlzLl9zaG93VUkoKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0XHQvLyBGb2N1cyB0aGUgZm9ybSBpZiB0aGUgYmFsbG9vbiBpcyB2aXNpYmxlIGFuZCB0aGUgVGFiIGtleSBoYXMgYmVlbiBwcmVzc2VkLlxuXHRcdHRoaXMuZWRpdG9yLmtleXN0cm9rZXMuc2V0KCAnVGFiJywgKCBkYXRhLCBjYW5jZWwgKSA9PiB7XG5cdFx0XHRpZiAoIHRoaXMuX2FyZUFjdGlvbnNWaXNpYmxlICYmICF0aGlzLmFjdGlvbnNWaWV3LmZvY3VzVHJhY2tlci5pc0ZvY3VzZWQgKSB7XG5cdFx0XHRcdHRoaXMuYWN0aW9uc1ZpZXcuZm9jdXMoKTtcblx0XHRcdFx0Y2FuY2VsKCk7XG5cdFx0XHR9XG5cdFx0fSwge1xuXHRcdFx0Ly8gVXNlIHRoZSBoaWdoIHByaW9yaXR5IGJlY2F1c2UgdGhlIGxpbmsgVUkgbmF2aWdhdGlvbiBpcyBtb3JlIGltcG9ydGFudFxuXHRcdFx0Ly8gdGhhbiBvdGhlciBmZWF0dXJlJ3MgYWN0aW9ucywgZS5nLiBsaXN0IGluZGVudGF0aW9uLlxuXHRcdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL2NrZWRpdG9yL2NrZWRpdG9yNS1saW5rL2lzc3Vlcy8xNDZcblx0XHRcdHByaW9yaXR5OiAnaGlnaCdcblx0XHR9ICk7XG5cblx0XHQvLyBDbG9zZSB0aGUgcGFuZWwgb24gdGhlIEVzYyBrZXkgcHJlc3Mgd2hlbiB0aGUgZWRpdGFibGUgaGFzIGZvY3VzIGFuZCB0aGUgYmFsbG9vbiBpcyB2aXNpYmxlLlxuXHRcdHRoaXMuZWRpdG9yLmtleXN0cm9rZXMuc2V0KCAnRXNjJywgKCBkYXRhLCBjYW5jZWwgKSA9PiB7XG5cdFx0XHRpZiAoIHRoaXMuX2lzVUlWaXNpYmxlICkge1xuXHRcdFx0XHR0aGlzLl9oaWRlVUkoKTtcblx0XHRcdFx0Y2FuY2VsKCk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0Ly8gQ2xvc2Ugb24gY2xpY2sgb3V0c2lkZSBvZiBiYWxsb29uIHBhbmVsIGVsZW1lbnQuXG5cdFx0Y2xpY2tPdXRzaWRlSGFuZGxlcigge1xuXHRcdFx0ZW1pdHRlcjogdGhpcy5mb3JtVmlldyxcblx0XHRcdGFjdGl2YXRvcjogKCkgPT4gdGhpcy5faXNVSUluUGFuZWwsXG5cdFx0XHRjb250ZXh0RWxlbWVudHM6IFsgdGhpcy5fYmFsbG9vbi52aWV3LmVsZW1lbnQgXSxcblx0XHRcdGNhbGxiYWNrOiAoKSA9PiB0aGlzLl9oaWRlVUkoKVxuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBBZGRzIHRoZSB7QGxpbmsgI2FjdGlvbnNWaWV3fSB0byB0aGUge0BsaW5rICNfYmFsbG9vbn0uXG5cdCAqXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICovXG5cdF9hZGRBY3Rpb25zVmlldygpIHtcblx0XHRpZiAoIHRoaXMuX2FyZUFjdGlvbnNJblBhbmVsICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuX2JhbGxvb24uYWRkKCB7XG5cdFx0XHR2aWV3OiB0aGlzLmFjdGlvbnNWaWV3LFxuXHRcdFx0cG9zaXRpb246IHRoaXMuX2dldEJhbGxvb25Qb3NpdGlvbkRhdGEoKVxuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBBZGRzIHRoZSB7QGxpbmsgI2Zvcm1WaWV3fSB0byB0aGUge0BsaW5rICNfYmFsbG9vbn0uXG5cdCAqXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICovXG5cdF9hZGRGb3JtVmlldygpIHtcblx0XHRpZiAoIHRoaXMuX2lzRm9ybUluUGFuZWwgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgZWRpdG9yID0gdGhpcy5lZGl0b3I7XG5cdFx0Y29uc3QgdGVtcGxhdGVDb21tYW5kID0gZWRpdG9yLmNvbW1hbmRzLmdldCggJ3RlbXBsYXRlJyApO1xuXG5cdFx0dGhpcy5mb3JtVmlldy5kaXNhYmxlQ3NzVHJhbnNpdGlvbnMoKTtcblxuXHRcdHRoaXMuX2JhbGxvb24uYWRkKCB7XG5cdFx0XHR2aWV3OiB0aGlzLmZvcm1WaWV3LFxuXHRcdFx0cG9zaXRpb246IHRoaXMuX2dldEJhbGxvb25Qb3NpdGlvbkRhdGEoKVxuXHRcdH0gKTtcblxuXHRcdC8vIFNlbGVjdCBpbnB1dCB3aGVuIGZvcm0gdmlldyBpcyBjdXJyZW50bHkgdmlzaWJsZS5cblx0XHRpZiAoIHRoaXMuX2JhbGxvb24udmlzaWJsZVZpZXcgPT09IHRoaXMuZm9ybVZpZXcgKSB7XG5cdFx0XHR0aGlzLmZvcm1WaWV3LmxhYmVsSW5wdXRWaWV3LmZpZWxkVmlldy5zZWxlY3QoKTtcblx0XHR9XG5cblx0XHR0aGlzLmZvcm1WaWV3LmVuYWJsZUNzc1RyYW5zaXRpb25zKCk7XG5cblx0XHQvLyBNYWtlIHN1cmUgdGhhdCBlYWNoIHRpbWUgdGhlIHBhbmVsIHNob3dzIHVwLCB0aGUgVVJMIGZpZWxkIHJlbWFpbnMgaW4gc3luYyB3aXRoIHRoZSB2YWx1ZSBvZlxuXHRcdC8vIHRoZSBjb21tYW5kLiBJZiB0aGUgdXNlciB0eXBlZCBpbiB0aGUgaW5wdXQsIHRoZW4gY2FuY2VsZWQgdGhlIGJhbGxvb24gKGB1cmxJbnB1dFZpZXcuZmllbGRWaWV3I3ZhbHVlYCBzdGF5c1xuXHRcdC8vIHVuYWx0ZXJlZCkgYW5kIHJlLW9wZW5lZCBpdCB3aXRob3V0IGNoYW5naW5nIHRoZSB2YWx1ZSBvZiB0aGUgbGluayBjb21tYW5kIChlLmcuIGJlY2F1c2UgdGhleVxuXHRcdC8vIGNsaWNrZWQgdGhlIHNhbWUgbGluayksIHRoZXkgd291bGQgc2VlIHRoZSBvbGQgdmFsdWUgaW5zdGVhZCBvZiB0aGUgYWN0dWFsIHZhbHVlIG9mIHRoZSBjb21tYW5kLlxuXHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ja2VkaXRvci9ja2VkaXRvcjUtbGluay9pc3N1ZXMvNzhcblx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vY2tlZGl0b3IvY2tlZGl0b3I1LWxpbmsvaXNzdWVzLzEyM1xuXHRcdHRoaXMuZm9ybVZpZXcubGFiZWxJbnB1dFZpZXcuZmllbGRWaWV3LmVsZW1lbnQudmFsdWUgPSB0ZW1wbGF0ZUNvbW1hbmQudmFsdWUgfHwgJyc7XG5cdH1cblxuXHQvKipcblx0ICogQ2xvc2VzIHRoZSBmb3JtIHZpZXcuIERlY2lkZXMgd2hldGhlciB0aGUgYmFsbG9vbiBzaG91bGQgYmUgaGlkZGVuIGNvbXBsZXRlbHkgb3IgaWYgdGhlIGFjdGlvbiB2aWV3IHNob3VsZCBiZSBzaG93bi4gVGhpcyBpc1xuXHQgKiBkZWNpZGVkIHVwb24gdGhlIGxpbmsgY29tbWFuZCB2YWx1ZSAod2hpY2ggaGFzIGEgdmFsdWUgaWYgdGhlIGRvY3VtZW50IHNlbGVjdGlvbiBpcyBpbiB0aGUgbGluaykuXG5cdCAqXG5cdCAqIEFkZGl0aW9uYWxseSwgaWYgYW55IHtAbGluayBtb2R1bGU6bGluay9saW5rfkxpbmtDb25maWcjZGVjb3JhdG9yc30gYXJlIGRlZmluZWQgaW4gdGhlIGVkaXRvciBjb25maWd1cmF0aW9uLCB0aGUgc3RhdGUgb2Zcblx0ICogc3dpdGNoIGJ1dHRvbnMgcmVzcG9uc2libGUgZm9yIG1hbnVhbCBkZWNvcmF0b3IgaGFuZGxpbmcgaXMgcmVzdG9yZWQuXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfY2xvc2VGb3JtVmlldygpIHtcblx0XHRjb25zdCB0ZW1wbGF0ZUNvbW1hbmQgPSB0aGlzLmVkaXRvci5jb21tYW5kcy5nZXQoICd0ZW1wbGF0ZScgKTtcblxuXHRcdC8vIFJlc3RvcmUgbWFudWFsIGRlY29yYXRvciBzdGF0ZXMgdG8gcmVwcmVzZW50IHRoZSBjdXJyZW50IG1vZGVsIHN0YXRlLiBUaGlzIGNhc2UgaXMgaW1wb3J0YW50IHRvIHJlc2V0IHRoZSBzd2l0Y2ggYnV0dG9uc1xuXHRcdC8vIHdoZW4gdGhlIHVzZXIgY2FuY2VscyB0aGUgZWRpdGluZyBmb3JtLlxuXHRcdHRlbXBsYXRlQ29tbWFuZC5yZXN0b3JlTWFudWFsRGVjb3JhdG9yU3RhdGVzKCk7XG5cblx0XHRpZiAoIHRlbXBsYXRlQ29tbWFuZC52YWx1ZSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0dGhpcy5fcmVtb3ZlRm9ybVZpZXcoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5faGlkZVVJKCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFJlbW92ZXMgdGhlIHtAbGluayAjZm9ybVZpZXd9IGZyb20gdGhlIHtAbGluayAjX2JhbGxvb259LlxuXHQgKlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHRfcmVtb3ZlRm9ybVZpZXcoKSB7XG5cdFx0aWYgKCB0aGlzLl9pc0Zvcm1JblBhbmVsICkge1xuXHRcdFx0Ly8gQmx1ciB0aGUgaW5wdXQgZWxlbWVudCBiZWZvcmUgcmVtb3ZpbmcgaXQgZnJvbSBET00gdG8gcHJldmVudCBpc3N1ZXMgaW4gc29tZSBicm93c2Vycy5cblx0XHRcdC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vY2tlZGl0b3IvY2tlZGl0b3I1L2lzc3Vlcy8xNTAxLlxuXHRcdFx0dGhpcy5mb3JtVmlldy5zYXZlQnV0dG9uVmlldy5mb2N1cygpO1xuXG5cdFx0XHR0aGlzLl9iYWxsb29uLnJlbW92ZSggdGhpcy5mb3JtVmlldyApO1xuXG5cdFx0XHQvLyBCZWNhdXNlIHRoZSBmb3JtIGhhcyBhbiBpbnB1dCB3aGljaCBoYXMgZm9jdXMsIHRoZSBmb2N1cyBtdXN0IGJlIGJyb3VnaHQgYmFja1xuXHRcdFx0Ly8gdG8gdGhlIGVkaXRvci4gT3RoZXJ3aXNlLCBpdCB3b3VsZCBiZSBsb3N0LlxuXHRcdFx0dGhpcy5lZGl0b3IuZWRpdGluZy52aWV3LmZvY3VzKCk7XG5cblx0XHRcdHRoaXMuX2hpZGVGYWtlVmlzdWFsU2VsZWN0aW9uKCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFNob3dzIHRoZSBjb3JyZWN0IFVJIHR5cGUuIEl0IGlzIGVpdGhlciB7QGxpbmsgI2Zvcm1WaWV3fSBvciB7QGxpbmsgI2FjdGlvbnNWaWV3fS5cblx0ICpcblx0ICogQHBhcmFtIHtCb29sZWFufSBmb3JjZVZpc2libGVcblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9zaG93VUkoIGZvcmNlVmlzaWJsZSA9IGZhbHNlICkge1xuXHRcdC8vIFdoZW4gdGhlcmUncyBubyBsaW5rIHVuZGVyIHRoZSBzZWxlY3Rpb24sIGdvIHN0cmFpZ2h0IHRvIHRoZSBlZGl0aW5nIFVJLlxuXHRcdGlmICggIXRoaXMuX2dldFNlbGVjdGVkTGlua0VsZW1lbnQoKSApIHtcblx0XHRcdC8vIFNob3cgdmlzdWFsIHNlbGVjdGlvbiBvbiBhIHRleHQgd2l0aG91dCBhIGxpbmsgd2hlbiB0aGUgY29udGV4dHVhbCBiYWxsb29uIGlzIGRpc3BsYXllZC5cblx0XHRcdC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vY2tlZGl0b3IvY2tlZGl0b3I1L2lzc3Vlcy80NzIxLlxuXHRcdFx0dGhpcy5fc2hvd0Zha2VWaXN1YWxTZWxlY3Rpb24oKTtcblxuXHRcdFx0dGhpcy5fYWRkQWN0aW9uc1ZpZXcoKTtcblxuXHRcdFx0Ly8gQmUgc3VyZSBwYW5lbCB3aXRoIGxpbmsgaXMgdmlzaWJsZS5cblx0XHRcdGlmICggZm9yY2VWaXNpYmxlICkge1xuXHRcdFx0XHR0aGlzLl9iYWxsb29uLnNob3dTdGFjayggJ21haW4nICk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX2FkZEZvcm1WaWV3KCk7XG5cdFx0fVxuXHRcdC8vIElmIHRoZXJlJ3MgYSBsaW5rIHVuZGVyIHRoZSBzZWxlY3Rpb24uLi5cblx0XHRlbHNlIHtcblx0XHRcdC8vIEdvIHRvIHRoZSBlZGl0aW5nIFVJIGlmIGFjdGlvbnMgYXJlIGFscmVhZHkgdmlzaWJsZS5cblx0XHRcdGlmICggdGhpcy5fYXJlQWN0aW9uc1Zpc2libGUgKSB7XG5cdFx0XHRcdHRoaXMuX2FkZEZvcm1WaWV3KCk7XG5cdFx0XHR9XG5cdFx0XHQvLyBPdGhlcndpc2UgZGlzcGxheSBqdXN0IHRoZSBhY3Rpb25zIFVJLlxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHRoaXMuX2FkZEFjdGlvbnNWaWV3KCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEJlIHN1cmUgcGFuZWwgd2l0aCBsaW5rIGlzIHZpc2libGUuXG5cdFx0XHRpZiAoIGZvcmNlVmlzaWJsZSApIHtcblx0XHRcdFx0dGhpcy5fYmFsbG9vbi5zaG93U3RhY2soICdtYWluJyApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEJlZ2luIHJlc3BvbmRpbmcgdG8gdWkjdXBkYXRlIG9uY2UgdGhlIFVJIGlzIGFkZGVkLlxuXHRcdHRoaXMuX3N0YXJ0VXBkYXRpbmdVSSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlbW92ZXMgdGhlIHtAbGluayAjZm9ybVZpZXd9IGZyb20gdGhlIHtAbGluayAjX2JhbGxvb259LlxuXHQgKlxuXHQgKiBTZWUge0BsaW5rICNfYWRkRm9ybVZpZXd9LCB7QGxpbmsgI19hZGRBY3Rpb25zVmlld30uXG5cdCAqXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICovXG5cdF9oaWRlVUkoKSB7XG5cdFx0aWYgKCAhdGhpcy5faXNVSUluUGFuZWwgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgZWRpdG9yID0gdGhpcy5lZGl0b3I7XG5cblx0XHR0aGlzLnN0b3BMaXN0ZW5pbmcoIGVkaXRvci51aSwgJ3VwZGF0ZScgKTtcblx0XHR0aGlzLnN0b3BMaXN0ZW5pbmcoIHRoaXMuX2JhbGxvb24sICdjaGFuZ2U6dmlzaWJsZVZpZXcnICk7XG5cblx0XHQvLyBNYWtlIHN1cmUgdGhlIGZvY3VzIGFsd2F5cyBnZXRzIGJhY2sgdG8gdGhlIGVkaXRhYmxlIF9iZWZvcmVfIHJlbW92aW5nIHRoZSBmb2N1c2VkIGZvcm0gdmlldy5cblx0XHQvLyBEb2luZyBvdGhlcndpc2UgY2F1c2VzIGlzc3VlcyBpbiBzb21lIGJyb3dzZXJzLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2NrZWRpdG9yL2NrZWRpdG9yNS1saW5rL2lzc3Vlcy8xOTMuXG5cdFx0ZWRpdG9yLmVkaXRpbmcudmlldy5mb2N1cygpO1xuXG5cdFx0Ly8gUmVtb3ZlIGZvcm0gZmlyc3QgYmVjYXVzZSBpdCdzIG9uIHRvcCBvZiB0aGUgc3RhY2suXG5cdFx0dGhpcy5fcmVtb3ZlRm9ybVZpZXcoKTtcblxuXHRcdC8vIFRoZW4gcmVtb3ZlIHRoZSBhY3Rpb25zIHZpZXcgYmVjYXVzZSBpdCdzIGJlbmVhdGggdGhlIGZvcm0uXG5cdFx0dGhpcy5fYmFsbG9vbi5yZW1vdmUoIHRoaXMuYWN0aW9uc1ZpZXcgKTtcblxuXHRcdHRoaXMuX2hpZGVGYWtlVmlzdWFsU2VsZWN0aW9uKCk7XG5cdH1cblxuXHQvKipcblx0ICogTWFrZXMgdGhlIFVJIHJlYWN0IHRvIHRoZSB7QGxpbmsgbW9kdWxlOmNvcmUvZWRpdG9yL2VkaXRvcnVpfkVkaXRvclVJI2V2ZW50OnVwZGF0ZX0gZXZlbnQgdG9cblx0ICogcmVwb3NpdGlvbiBpdHNlbGYgd2hlbiB0aGUgZWRpdG9yIFVJIHNob3VsZCBiZSByZWZyZXNoZWQuXG5cdCAqXG5cdCAqIFNlZToge0BsaW5rICNfaGlkZVVJfSB0byBsZWFybiB3aGVuIHRoZSBVSSBzdG9wcyByZWFjdGluZyB0byB0aGUgYHVwZGF0ZWAgZXZlbnQuXG5cdCAqXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICovXG5cdF9zdGFydFVwZGF0aW5nVUkoKSB7XG5cdFx0Y29uc3QgZWRpdG9yID0gdGhpcy5lZGl0b3I7XG5cdFx0Y29uc3Qgdmlld0RvY3VtZW50ID0gZWRpdG9yLmVkaXRpbmcudmlldy5kb2N1bWVudDtcblxuXHRcdGxldCBwcmV2U2VsZWN0ZWRMaW5rID0gdGhpcy5fZ2V0U2VsZWN0ZWRMaW5rRWxlbWVudCgpO1xuXHRcdGxldCBwcmV2U2VsZWN0aW9uUGFyZW50ID0gZ2V0U2VsZWN0aW9uUGFyZW50KCk7XG5cblx0XHRjb25zdCB1cGRhdGUgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBzZWxlY3RlZExpbmsgPSB0aGlzLl9nZXRTZWxlY3RlZExpbmtFbGVtZW50KCk7XG5cdFx0XHRjb25zdCBzZWxlY3Rpb25QYXJlbnQgPSBnZXRTZWxlY3Rpb25QYXJlbnQoKTtcblxuXHRcdFx0Ly8gSGlkZSB0aGUgcGFuZWwgaWY6XG5cdFx0XHQvL1xuXHRcdFx0Ly8gKiB0aGUgc2VsZWN0aW9uIHdlbnQgb3V0IG9mIHRoZSBFWElTVElORyBsaW5rIGVsZW1lbnQuIEUuZy4gdXNlciBtb3ZlZCB0aGUgY2FyZXQgb3V0XG5cdFx0XHQvLyAgIG9mIHRoZSBsaW5rLFxuXHRcdFx0Ly8gKiB0aGUgc2VsZWN0aW9uIHdlbnQgdG8gYSBkaWZmZXJlbnQgcGFyZW50IHdoZW4gY3JlYXRpbmcgYSBORVcgbGluay4gRS5nLiBzb21lb25lXG5cdFx0XHQvLyAgIGVsc2UgbW9kaWZpZWQgdGhlIGRvY3VtZW50LlxuXHRcdFx0Ly8gKiB0aGUgc2VsZWN0aW9uIGhhcyBleHBhbmRlZCAoZS5nLiBkaXNwbGF5aW5nIGxpbmsgYWN0aW9ucyB0aGVuIHByZXNzaW5nIFNISUZUK1JpZ2h0IGFycm93KS5cblx0XHRcdC8vXG5cdFx0XHQvLyBOb3RlOiAjX2dldFNlbGVjdGVkTGlua0VsZW1lbnQgd2lsbCByZXR1cm4gYSBsaW5rIGZvciBhIG5vbi1jb2xsYXBzZWQgc2VsZWN0aW9uIG9ubHlcblx0XHRcdC8vIHdoZW4gZnVsbHkgc2VsZWN0ZWQuXG5cdFx0XHRpZiAoICggcHJldlNlbGVjdGVkTGluayAmJiAhc2VsZWN0ZWRMaW5rICkgfHxcblx0XHRcdFx0KCAhcHJldlNlbGVjdGVkTGluayAmJiBzZWxlY3Rpb25QYXJlbnQgIT09IHByZXZTZWxlY3Rpb25QYXJlbnQgKSApIHtcblx0XHRcdFx0dGhpcy5faGlkZVVJKCk7XG5cdFx0XHR9XG5cdFx0XHQvLyBVcGRhdGUgdGhlIHBvc2l0aW9uIG9mIHRoZSBwYW5lbCB3aGVuOlxuXHRcdFx0Ly8gICogbGluayBwYW5lbCBpcyBpbiB0aGUgdmlzaWJsZSBzdGFja1xuXHRcdFx0Ly8gICogdGhlIHNlbGVjdGlvbiByZW1haW5zIGluIHRoZSBvcmlnaW5hbCBsaW5rIGVsZW1lbnQsXG5cdFx0XHQvLyAgKiB0aGVyZSB3YXMgbm8gbGluayBlbGVtZW50IGluIHRoZSBmaXJzdCBwbGFjZSwgaS5lLiBjcmVhdGluZyBhIG5ldyBsaW5rXG5cdFx0XHRlbHNlIGlmICggdGhpcy5faXNVSVZpc2libGUgKSB7XG5cdFx0XHRcdC8vIElmIHN0aWxsIGluIGEgbGluayBlbGVtZW50LCBzaW1wbHkgdXBkYXRlIHRoZSBwb3NpdGlvbiBvZiB0aGUgYmFsbG9vbi5cblx0XHRcdFx0Ly8gSWYgdGhlcmUgd2FzIG5vIGxpbmsgKGUuZy4gaW5zZXJ0aW5nIG9uZSksIHRoZSBiYWxsb29uIG11c3QgYmUgbW92ZWRcblx0XHRcdFx0Ly8gdG8gdGhlIG5ldyBwb3NpdGlvbiBpbiB0aGUgZWRpdGluZyB2aWV3IChhIG5ldyBuYXRpdmUgRE9NIHJhbmdlKS5cblx0XHRcdFx0dGhpcy5fYmFsbG9vbi51cGRhdGVQb3NpdGlvbiggdGhpcy5fZ2V0QmFsbG9vblBvc2l0aW9uRGF0YSgpICk7XG5cdFx0XHR9XG5cblx0XHRcdHByZXZTZWxlY3RlZExpbmsgPSBzZWxlY3RlZExpbms7XG5cdFx0XHRwcmV2U2VsZWN0aW9uUGFyZW50ID0gc2VsZWN0aW9uUGFyZW50O1xuXHRcdH07XG5cblx0XHRmdW5jdGlvbiBnZXRTZWxlY3Rpb25QYXJlbnQoKSB7XG5cdFx0XHRyZXR1cm4gdmlld0RvY3VtZW50LnNlbGVjdGlvbi5mb2N1cy5nZXRBbmNlc3RvcnMoKVxuXHRcdFx0XHQucmV2ZXJzZSgpXG5cdFx0XHRcdC5maW5kKCBub2RlID0+IG5vZGUuaXMoICdlbGVtZW50JyApICk7XG5cdFx0fVxuXG5cdFx0dGhpcy5saXN0ZW5UbyggZWRpdG9yLnVpLCAndXBkYXRlJywgdXBkYXRlICk7XG5cdFx0dGhpcy5saXN0ZW5UbyggdGhpcy5fYmFsbG9vbiwgJ2NoYW5nZTp2aXNpYmxlVmlldycsIHVwZGF0ZSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgYHRydWVgIHdoZW4ge0BsaW5rICNmb3JtVmlld30gaXMgaW4gdGhlIHtAbGluayAjX2JhbGxvb259LlxuXHQgKlxuXHQgKiBAcmVhZG9ubHlcblx0ICogQHByb3RlY3RlZFxuXHQgKiBAdHlwZSB7Qm9vbGVhbn1cblx0ICovXG5cdGdldCBfaXNGb3JtSW5QYW5lbCgpIHtcblx0XHRyZXR1cm4gdGhpcy5fYmFsbG9vbi5oYXNWaWV3KCB0aGlzLmZvcm1WaWV3ICk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBgdHJ1ZWAgd2hlbiB7QGxpbmsgI2FjdGlvbnNWaWV3fSBpcyBpbiB0aGUge0BsaW5rICNfYmFsbG9vbn0uXG5cdCAqXG5cdCAqIEByZWFkb25seVxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEB0eXBlIHtCb29sZWFufVxuXHQgKi9cblx0Z2V0IF9hcmVBY3Rpb25zSW5QYW5lbCgpIHtcblx0XHRyZXR1cm4gdGhpcy5fYmFsbG9vbi5oYXNWaWV3KCB0aGlzLmFjdGlvbnNWaWV3ICk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBgdHJ1ZWAgd2hlbiB7QGxpbmsgI2FjdGlvbnNWaWV3fSBpcyBpbiB0aGUge0BsaW5rICNfYmFsbG9vbn0gYW5kIGl0IGlzXG5cdCAqIGN1cnJlbnRseSB2aXNpYmxlLlxuXHQgKlxuXHQgKiBAcmVhZG9ubHlcblx0ICogQHByb3RlY3RlZFxuXHQgKiBAdHlwZSB7Qm9vbGVhbn1cblx0ICovXG5cdGdldCBfYXJlQWN0aW9uc1Zpc2libGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2JhbGxvb24udmlzaWJsZVZpZXcgPT09IHRoaXMuYWN0aW9uc1ZpZXc7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBgdHJ1ZWAgd2hlbiB7QGxpbmsgI2FjdGlvbnNWaWV3fSBvciB7QGxpbmsgI2Zvcm1WaWV3fSBpcyBpbiB0aGUge0BsaW5rICNfYmFsbG9vbn0uXG5cdCAqXG5cdCAqIEByZWFkb25seVxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEB0eXBlIHtCb29sZWFufVxuXHQgKi9cblx0Z2V0IF9pc1VJSW5QYW5lbCgpIHtcblx0XHRyZXR1cm4gdGhpcy5faXNGb3JtSW5QYW5lbCB8fCB0aGlzLl9hcmVBY3Rpb25zSW5QYW5lbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIGB0cnVlYCB3aGVuIHtAbGluayAjYWN0aW9uc1ZpZXd9IG9yIHtAbGluayAjZm9ybVZpZXd9IGlzIGluIHRoZSB7QGxpbmsgI19iYWxsb29ufSBhbmQgaXQgaXNcblx0ICogY3VycmVudGx5IHZpc2libGUuXG5cdCAqXG5cdCAqIEByZWFkb25seVxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEB0eXBlIHtCb29sZWFufVxuXHQgKi9cblx0Z2V0IF9pc1VJVmlzaWJsZSgpIHtcblx0XHRjb25zdCB2aXNpYmxlVmlldyA9IHRoaXMuX2JhbGxvb24udmlzaWJsZVZpZXc7XG5cblx0XHRyZXR1cm4gdmlzaWJsZVZpZXcgPT0gdGhpcy5mb3JtVmlldyB8fCB0aGlzLl9hcmVBY3Rpb25zVmlzaWJsZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHBvc2l0aW9uaW5nIG9wdGlvbnMgZm9yIHRoZSB7QGxpbmsgI19iYWxsb29ufS4gVGhleSBjb250cm9sIHRoZSB3YXkgdGhlIGJhbGxvb24gaXMgYXR0YWNoZWRcblx0ICogdG8gdGhlIHRhcmdldCBlbGVtZW50IG9yIHNlbGVjdGlvbi5cblx0ICpcblx0ICogSWYgdGhlIHNlbGVjdGlvbiBpcyBjb2xsYXBzZWQgYW5kIGluc2lkZSBhIGxpbmsgZWxlbWVudCwgdGhlIHBhbmVsIHdpbGwgYmUgYXR0YWNoZWQgdG8gdGhlXG5cdCAqIGVudGlyZSBsaW5rIGVsZW1lbnQuIE90aGVyd2lzZSwgaXQgd2lsbCBiZSBhdHRhY2hlZCB0byB0aGUgc2VsZWN0aW9uLlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcmV0dXJucyB7bW9kdWxlOnV0aWxzL2RvbS9wb3NpdGlvbn5PcHRpb25zfVxuXHQgKi9cblx0X2dldEJhbGxvb25Qb3NpdGlvbkRhdGEoKSB7XG5cdFx0Y29uc3QgdmlldyA9IHRoaXMuZWRpdG9yLmVkaXRpbmcudmlldztcblx0XHRjb25zdCBtb2RlbCA9IHRoaXMuZWRpdG9yLm1vZGVsO1xuXHRcdGNvbnN0IHZpZXdEb2N1bWVudCA9IHZpZXcuZG9jdW1lbnQ7XG5cdFx0bGV0IHRhcmdldCA9IG51bGw7XG5cblx0XHRpZiAoIG1vZGVsLm1hcmtlcnMuaGFzKCBWSVNVQUxfU0VMRUNUSU9OX01BUktFUl9OQU1FICkgKSB7XG5cdFx0XHQvLyBUaGVyZSBhcmUgY2FzZXMgd2hlbiB3ZSBoaWdobGlnaHQgc2VsZWN0aW9uIHVzaW5nIGEgbWFya2VyICgjNzcwNSwgIzQ3MjEpLlxuXHRcdFx0Y29uc3QgbWFya2VyVmlld0VsZW1lbnRzID0gQXJyYXkuZnJvbSggdGhpcy5lZGl0b3IuZWRpdGluZy5tYXBwZXIubWFya2VyTmFtZVRvRWxlbWVudHMoIFZJU1VBTF9TRUxFQ1RJT05fTUFSS0VSX05BTUUgKSApO1xuXHRcdFx0Y29uc3QgbmV3UmFuZ2UgPSB2aWV3LmNyZWF0ZVJhbmdlKFxuXHRcdFx0XHR2aWV3LmNyZWF0ZVBvc2l0aW9uQmVmb3JlKCBtYXJrZXJWaWV3RWxlbWVudHNbIDAgXSApLFxuXHRcdFx0XHR2aWV3LmNyZWF0ZVBvc2l0aW9uQWZ0ZXIoIG1hcmtlclZpZXdFbGVtZW50c1sgbWFya2VyVmlld0VsZW1lbnRzLmxlbmd0aCAtIDEgXSApXG5cdFx0XHQpO1xuXG5cdFx0XHR0YXJnZXQgPSB2aWV3LmRvbUNvbnZlcnRlci52aWV3UmFuZ2VUb0RvbSggbmV3UmFuZ2UgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgdGFyZ2V0TGluayA9IHRoaXMuX2dldFNlbGVjdGVkTGlua0VsZW1lbnQoKTtcblx0XHRcdGNvbnN0IHJhbmdlID0gdmlld0RvY3VtZW50LnNlbGVjdGlvbi5nZXRGaXJzdFJhbmdlKCk7XG5cblx0XHRcdHRhcmdldCA9IHRhcmdldExpbmsgP1xuXHRcdFx0XHQvLyBXaGVuIHNlbGVjdGlvbiBpcyBpbnNpZGUgbGluayBlbGVtZW50LCB0aGVuIGF0dGFjaCBwYW5lbCB0byB0aGlzIGVsZW1lbnQuXG5cdFx0XHRcdHZpZXcuZG9tQ29udmVydGVyLm1hcFZpZXdUb0RvbSggdGFyZ2V0TGluayApIDpcblx0XHRcdFx0Ly8gT3RoZXJ3aXNlIGF0dGFjaCBwYW5lbCB0byB0aGUgc2VsZWN0aW9uLlxuXHRcdFx0XHR2aWV3LmRvbUNvbnZlcnRlci52aWV3UmFuZ2VUb0RvbSggcmFuZ2UgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4geyB0YXJnZXQgfTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBsaW5rIHtAbGluayBtb2R1bGU6ZW5naW5lL3ZpZXcvYXR0cmlidXRlZWxlbWVudH5BdHRyaWJ1dGVFbGVtZW50fSB1bmRlclxuXHQgKiB0aGUge0BsaW5rIG1vZHVsZTplbmdpbmUvdmlldy9kb2N1bWVudH5Eb2N1bWVudCBlZGl0aW5nIHZpZXcnc30gc2VsZWN0aW9uIG9yIGBudWxsYFxuXHQgKiBpZiB0aGVyZSBpcyBub25lLlxuXHQgKlxuXHQgKiAqKk5vdGUqKjogRm9yIGEgbm9u4oCTY29sbGFwc2VkIHNlbGVjdGlvbiwgdGhlIGxpbmsgZWxlbWVudCBpcyBvbmx5IHJldHVybmVkIHdoZW4gKipmdWxseSoqXG5cdCAqIHNlbGVjdGVkIGFuZCB0aGUgKipvbmx5KiogZWxlbWVudCB3aXRoaW4gdGhlIHNlbGVjdGlvbiBib3VuZGFyaWVzLlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcmV0dXJucyB7bW9kdWxlOmVuZ2luZS92aWV3L2F0dHJpYnV0ZWVsZW1lbnR+QXR0cmlidXRlRWxlbWVudHxudWxsfVxuXHQgKi9cblx0X2dldFNlbGVjdGVkTGlua0VsZW1lbnQoKSB7XG5cdFx0Y29uc3QgdmlldyA9IHRoaXMuZWRpdG9yLmVkaXRpbmcudmlldztcblx0XHRjb25zdCBzZWxlY3Rpb24gPSB2aWV3LmRvY3VtZW50LnNlbGVjdGlvbjtcblxuXHRcdGlmICggc2VsZWN0aW9uLmlzQ29sbGFwc2VkICkge1xuXHRcdFx0cmV0dXJuIGZpbmRMaW5rRWxlbWVudEFuY2VzdG9yKCBzZWxlY3Rpb24uZ2V0Rmlyc3RQb3NpdGlvbigpICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIFRoZSByYW5nZSBmb3IgZnVsbHkgc2VsZWN0ZWQgbGluayBpcyB1c3VhbGx5IGFuY2hvcmVkIGluIGFkamFjZW50IHRleHQgbm9kZXMuXG5cdFx0XHQvLyBUcmltIGl0IHRvIGdldCBjbG9zZXIgdG8gdGhlIGFjdHVhbCBsaW5rIGVsZW1lbnQuXG5cdFx0XHRjb25zdCByYW5nZSA9IHNlbGVjdGlvbi5nZXRGaXJzdFJhbmdlKCkuZ2V0VHJpbW1lZCgpO1xuXHRcdFx0Y29uc3Qgc3RhcnRMaW5rID0gZmluZExpbmtFbGVtZW50QW5jZXN0b3IoIHJhbmdlLnN0YXJ0ICk7XG5cdFx0XHRjb25zdCBlbmRMaW5rID0gZmluZExpbmtFbGVtZW50QW5jZXN0b3IoIHJhbmdlLmVuZCApO1xuXG5cdFx0XHRpZiAoICFzdGFydExpbmsgfHwgc3RhcnRMaW5rICE9IGVuZExpbmsgKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDaGVjayBpZiB0aGUgbGluayBlbGVtZW50IGlzIGZ1bGx5IHNlbGVjdGVkLlxuXHRcdFx0aWYgKCB2aWV3LmNyZWF0ZVJhbmdlSW4oIHN0YXJ0TGluayApLmdldFRyaW1tZWQoKS5pc0VxdWFsKCByYW5nZSApICkge1xuXHRcdFx0XHRyZXR1cm4gc3RhcnRMaW5rO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIERpc3BsYXlzIGEgZmFrZSB2aXN1YWwgc2VsZWN0aW9uIHdoZW4gdGhlIGNvbnRleHR1YWwgYmFsbG9vbiBpcyBkaXNwbGF5ZWQuXG5cdCAqXG5cdCAqIFRoaXMgYWRkcyBhICdsaW5rLXVpJyBtYXJrZXIgaW50byB0aGUgZG9jdW1lbnQgdGhhdCBpcyByZW5kZXJlZCBhcyBhIGhpZ2hsaWdodCBvbiBzZWxlY3RlZCB0ZXh0IGZyYWdtZW50LlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X3Nob3dGYWtlVmlzdWFsU2VsZWN0aW9uKCkge1xuXHRcdGNvbnN0IG1vZGVsID0gdGhpcy5lZGl0b3IubW9kZWw7XG5cblx0XHRtb2RlbC5jaGFuZ2UoIHdyaXRlciA9PiB7XG5cdFx0XHRjb25zdCByYW5nZSA9IG1vZGVsLmRvY3VtZW50LnNlbGVjdGlvbi5nZXRGaXJzdFJhbmdlKCk7XG5cblx0XHRcdGlmICggbW9kZWwubWFya2Vycy5oYXMoIFZJU1VBTF9TRUxFQ1RJT05fTUFSS0VSX05BTUUgKSApIHtcblx0XHRcdFx0d3JpdGVyLnVwZGF0ZU1hcmtlciggVklTVUFMX1NFTEVDVElPTl9NQVJLRVJfTkFNRSwgeyByYW5nZSB9ICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoIHJhbmdlLnN0YXJ0LmlzQXRFbmQgKSB7XG5cdFx0XHRcdFx0Y29uc3Qgc3RhcnRQb3NpdGlvbiA9IHJhbmdlLnN0YXJ0LmdldExhc3RNYXRjaGluZ1Bvc2l0aW9uKFxuXHRcdFx0XHRcdFx0KCB7IGl0ZW0gfSApID0+ICFtb2RlbC5zY2hlbWEuaXNDb250ZW50KCBpdGVtICksXG5cdFx0XHRcdFx0XHR7IGJvdW5kYXJpZXM6IHJhbmdlIH1cblx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0d3JpdGVyLmFkZE1hcmtlciggVklTVUFMX1NFTEVDVElPTl9NQVJLRVJfTkFNRSwge1xuXHRcdFx0XHRcdFx0dXNpbmdPcGVyYXRpb246IGZhbHNlLFxuXHRcdFx0XHRcdFx0YWZmZWN0c0RhdGE6IGZhbHNlLFxuXHRcdFx0XHRcdFx0cmFuZ2U6IHdyaXRlci5jcmVhdGVSYW5nZSggc3RhcnRQb3NpdGlvbiwgcmFuZ2UuZW5kIClcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0d3JpdGVyLmFkZE1hcmtlciggVklTVUFMX1NFTEVDVElPTl9NQVJLRVJfTkFNRSwge1xuXHRcdFx0XHRcdFx0dXNpbmdPcGVyYXRpb246IGZhbHNlLFxuXHRcdFx0XHRcdFx0YWZmZWN0c0RhdGE6IGZhbHNlLFxuXHRcdFx0XHRcdFx0cmFuZ2Vcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogSGlkZXMgdGhlIGZha2UgdmlzdWFsIHNlbGVjdGlvbiBjcmVhdGVkIGluIHtAbGluayAjX3Nob3dGYWtlVmlzdWFsU2VsZWN0aW9ufS5cblx0ICpcblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9oaWRlRmFrZVZpc3VhbFNlbGVjdGlvbigpIHtcblx0XHRjb25zdCBtb2RlbCA9IHRoaXMuZWRpdG9yLm1vZGVsO1xuXG5cdFx0aWYgKCBtb2RlbC5tYXJrZXJzLmhhcyggVklTVUFMX1NFTEVDVElPTl9NQVJLRVJfTkFNRSApICkge1xuXHRcdFx0bW9kZWwuY2hhbmdlKCB3cml0ZXIgPT4ge1xuXHRcdFx0XHR3cml0ZXIucmVtb3ZlTWFya2VyKCBWSVNVQUxfU0VMRUNUSU9OX01BUktFUl9OQU1FICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9XG59XG5cbi8vIFJldHVybnMgYSBsaW5rIGVsZW1lbnQgaWYgdGhlcmUncyBvbmUgYW1vbmcgdGhlIGFuY2VzdG9ycyBvZiB0aGUgcHJvdmlkZWQgYFBvc2l0aW9uYC5cbi8vXG4vLyBAcHJpdmF0ZVxuLy8gQHBhcmFtIHttb2R1bGU6ZW5naW5lL3ZpZXcvcG9zaXRpb25+UG9zaXRpb259IFZpZXcgcG9zaXRpb24gdG8gYW5hbHl6ZS5cbi8vIEByZXR1cm5zIHttb2R1bGU6ZW5naW5lL3ZpZXcvYXR0cmlidXRlZWxlbWVudH5BdHRyaWJ1dGVFbGVtZW50fG51bGx9IFRlbXBsYXRlIGVsZW1lbnQgYXQgdGhlIHBvc2l0aW9uIG9yIG51bGwuXG5mdW5jdGlvbiBmaW5kTGlua0VsZW1lbnRBbmNlc3RvciggcG9zaXRpb24gKSB7XG5cdHJldHVybiBwb3NpdGlvbi5nZXRBbmNlc3RvcnMoKS5maW5kKCBhbmNlc3RvciA9PiBpc0xpbmtFbGVtZW50KCBhbmNlc3RvciApICk7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlIENvcHlyaWdodCAoYykgMjAwMy0yMDIxLCBDS1NvdXJjZSAtIEZyZWRlcmljbyBLbmFiYmVuLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogRm9yIGxpY2Vuc2luZywgc2VlIExJQ0VOU0UubWQgb3IgaHR0cHM6Ly9ja2VkaXRvci5jb20vbGVnYWwvY2tlZGl0b3Itb3NzLWxpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGluay9saW5rXG4gKi9cblxuaW1wb3J0IFBsdWdpbiBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWNvcmUvc3JjL3BsdWdpbic7XG5pbXBvcnQgVGVtcGxhdGVFZGl0aW5nIGZyb20gJy4vdGVtcGxhdGUtZWRpdGluZyc7XG5pbXBvcnQgVGVtcGxhdGVVaSBmcm9tICcuL3RlbXBsYXRlLXVpJztcblxuLyoqXG4gKiBUaGUgbGluayBwbHVnaW4uXG4gKlxuICogVGhpcyBpcyBhIFwiZ2x1ZVwiIHBsdWdpbiB0aGF0IGxvYWRzIHRoZSB7QGxpbmsgbW9kdWxlOmxpbmsvbGlua2VkaXRpbmd+TGlua0VkaXRpbmcgbGluayBlZGl0aW5nIGZlYXR1cmV9XG4gKiBhbmQge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt1aX5UZW1wbGF0ZVVpIGxpbmsgVUkgZmVhdHVyZX0uXG4gKlxuICogQGV4dGVuZHMgbW9kdWxlOmNvcmUvcGx1Z2luflBsdWdpblxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZW1wbGF0ZSBleHRlbmRzIFBsdWdpbiB7XG5cdC8qKlxuXHQgKiBAaW5oZXJpdERvY1xuXHQgKi9cblx0c3RhdGljIGdldCByZXF1aXJlcygpIHtcblx0XHRyZXR1cm4gWyBUZW1wbGF0ZUVkaXRpbmcsIFRlbXBsYXRlVWkgXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5oZXJpdERvY1xuXHQgKi9cblx0c3RhdGljIGdldCBwbHVnaW5OYW1lKCkge1xuXHRcdHJldHVybiAnVGV4dFRlbXBsYXRpbmcnO1xuXHR9XG59XG5cbi8qKlxuICogVGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIHtAbGluayBtb2R1bGU6bGluay9saW5rfkxpbmt9IGZlYXR1cmUuXG4gKlxuICogUmVhZCBtb3JlIGluIHtAbGluayBtb2R1bGU6bGluay9saW5rfkxpbmtDb25maWd9LlxuICpcbiAqIEBtZW1iZXIge21vZHVsZTpsaW5rL2xpbmt+TGlua0NvbmZpZ30gbW9kdWxlOmNvcmUvZWRpdG9yL2VkaXRvcmNvbmZpZ35FZGl0b3JDb25maWcjbGlua1xuICovXG5cbi8qKlxuICogVGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIHtAbGluayBtb2R1bGU6bGluay9saW5rfkxpbmsgbGluayBmZWF0dXJlfS5cbiAqXG4gKlx0XHRDbGFzc2ljRWRpdG9yXG4gKlx0XHRcdC5jcmVhdGUoIGVkaXRvckVsZW1lbnQsIHtcbiAqIFx0XHRcdFx0bGluazogIC4uLiAvLyBUZW1wbGF0ZSBmZWF0dXJlIGNvbmZpZ3VyYXRpb24uXG4gKlx0XHRcdH0gKVxuICpcdFx0XHQudGhlbiggLi4uIClcbiAqXHRcdFx0LmNhdGNoKCAuLi4gKTtcbiAqXG4gKiBTZWUge0BsaW5rIG1vZHVsZTpjb3JlL2VkaXRvci9lZGl0b3Jjb25maWd+RWRpdG9yQ29uZmlnIGFsbCBlZGl0b3Igb3B0aW9uc30uXG4gKiBAaW50ZXJmYWNlIExpbmtDb25maWdcbiAqL1xuXG4vKipcbiAqIFdoZW4gc2V0LCB0aGUgZWRpdG9yIHdpbGwgYWRkIHRoZSBnaXZlbiBwcm90b2NvbCB0byB0aGUgbGluayB3aGVuIHRoZSB1c2VyIGNyZWF0ZXMgYSBsaW5rIHdpdGhvdXQgb25lLlxuICogRm9yIGV4YW1wbGUsIHdoZW4gdGhlIHVzZXIgaXMgY3JlYXRpbmcgYSBsaW5rIGFuZCB0eXBlcyBgY2tlZGl0b3IuY29tYCBpbiB0aGUgbGluayBmb3JtIGlucHV0LCBkdXJpbmcgbGluayBzdWJtaXNzaW9uXG4gKiB0aGUgZWRpdG9yIHdpbGwgYXV0b21hdGljYWxseSBhZGQgdGhlIGBodHRwOi8vYCBwcm90b2NvbCwgc28gdGhlIGxpbmsgd2lsbCBsb29rIGFzIGZvbGxvd3M6IGBodHRwOi8vY2tlZGl0b3IuY29tYC5cbiAqXG4gKiBUaGUgZmVhdHVyZSBhbHNvIHByb3ZpZGVzIGVtYWlsIGFkZHJlc3MgYXV0by1kZXRlY3Rpb24uIFdoZW4geW91IHN1Ym1pdCBgaGVsbG9AZXhhbXBsZS5jb21gLFxuICogdGhlIHBsdWdpbiB3aWxsIGF1dG9tYXRpY2FsbHkgY2hhbmdlIGl0IHRvIGBtYWlsdG86aGVsbG9AZXhhbXBsZS5jb21gLlxuICpcbiAqIFx0XHRDbGFzc2ljRWRpdG9yXG4gKlx0XHRcdC5jcmVhdGUoIGVkaXRvckVsZW1lbnQsIHtcbiAqIFx0XHRcdFx0bGluazoge1xuICogXHRcdFx0XHRcdGRlZmF1bHRQcm90b2NvbDogJ2h0dHA6Ly8nXG4gKiBcdFx0XHRcdH1cbiAqXHRcdFx0fSApXG4gKlx0XHRcdC50aGVuKCAuLi4gKVxuICpcdFx0XHQuY2F0Y2goIC4uLiApO1xuICpcbiAqICoqTk9URToqKiBJZiBubyBjb25maWd1cmF0aW9uIGlzIHByb3ZpZGVkLCB0aGUgZWRpdG9yIHdpbGwgbm90IGF1dG8tZml4IHRoZSBsaW5rcy5cbiAqXG4gKiBAbWVtYmVyIHtTdHJpbmd9IG1vZHVsZTpsaW5rL2xpbmt+TGlua0NvbmZpZyNkZWZhdWx0UHJvdG9jb2xcbiAqL1xuXG4vKipcbiAqIFdoZW4gc2V0IHRvIGB0cnVlYCwgdGhlIGB0YXJnZXQ9XCJibGFua1wiYCBhbmQgYHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcImAgYXR0cmlidXRlcyBhcmUgYXV0b21hdGljYWxseSBhZGRlZCB0byBhbGwgZXh0ZXJuYWwgbGlua3NcbiAqIGluIHRoZSBlZGl0b3IuIFwiRXh0ZXJuYWwgbGlua3NcIiBhcmUgYWxsIGxpbmtzIGluIHRoZSBlZGl0b3IgY29udGVudCBzdGFydGluZyB3aXRoIGBodHRwYCwgYGh0dHBzYCwgb3IgYC8vYC5cbiAqXG4gKlx0XHRDbGFzc2ljRWRpdG9yXG4gKlx0XHRcdC5jcmVhdGUoIGVkaXRvckVsZW1lbnQsIHtcbiAqXHRcdFx0XHRsaW5rOiB7XG4gKlx0XHRcdFx0XHRhZGRUYXJnZXRUb0V4dGVybmFsTGlua3M6IHRydWVcbiAqXHRcdFx0XHR9XG4gKlx0XHRcdH0gKVxuICpcdFx0XHQudGhlbiggLi4uIClcbiAqXHRcdFx0LmNhdGNoKCAuLi4gKTtcbiAqXG4gKiBJbnRlcm5hbGx5LCB0aGlzIG9wdGlvbiBhY3RpdmF0ZXMgYSBwcmVkZWZpbmVkIHtAbGluayBtb2R1bGU6bGluay9saW5rfkxpbmtDb25maWcjZGVjb3JhdG9ycyBhdXRvbWF0aWMgbGluayBkZWNvcmF0b3J9XG4gKiB0aGF0IGV4dGVuZHMgYWxsIGV4dGVybmFsIGxpbmtzIHdpdGggdGhlIGB0YXJnZXRgIGFuZCBgcmVsYCBhdHRyaWJ1dGVzLlxuICpcbiAqICoqTm90ZSoqOiBUbyBjb250cm9sIHRoZSBgdGFyZ2V0YCBhbmQgYHJlbGAgYXR0cmlidXRlcyBvZiBzcGVjaWZpYyBsaW5rcyBpbiB0aGUgZWRpdGVkIGNvbnRlbnQsIGEgZGVkaWNhdGVkXG4gKiB7QGxpbmsgbW9kdWxlOmxpbmsvbGlua35MaW5rRGVjb3JhdG9yTWFudWFsRGVmaW5pdGlvbiBtYW51YWx9IGRlY29yYXRvciBtdXN0IGJlIGRlZmluZWQgaW4gdGhlXG4gKiB7QGxpbmsgbW9kdWxlOmxpbmsvbGlua35MaW5rQ29uZmlnI2RlY29yYXRvcnMgYGNvbmZpZy5saW5rLmRlY29yYXRvcnNgfSBhcnJheS4gSW4gc3VjaCBzY2VuYXJpbyxcbiAqIHRoZSBgY29uZmlnLmxpbmsuYWRkVGFyZ2V0VG9FeHRlcm5hbExpbmtzYCBvcHRpb24gc2hvdWxkIHJlbWFpbiBgdW5kZWZpbmVkYCBvciBgZmFsc2VgIHRvIG5vdCBpbnRlcmZlcmUgd2l0aCB0aGUgbWFudWFsIGRlY29yYXRvci5cbiAqXG4gKiBJdCBpcyBwb3NzaWJsZSB0byBhZGQgb3RoZXIge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt+TGlua0RlY29yYXRvckF1dG9tYXRpY0RlZmluaXRpb24gYXV0b21hdGljfVxuICogb3Ige0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt+TGlua0RlY29yYXRvck1hbnVhbERlZmluaXRpb24gbWFudWFsfSBsaW5rIGRlY29yYXRvcnMgd2hlbiB0aGlzIG9wdGlvbiBpcyBhY3RpdmUuXG4gKlxuICogTW9yZSBpbmZvcm1hdGlvbiBhYm91dCBkZWNvcmF0b3JzIGNhbiBiZSBmb3VuZCBpbiB0aGUge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt+TGlua0NvbmZpZyNkZWNvcmF0b3JzIGRlY29yYXRvcnMgY29uZmlndXJhdGlvbn1cbiAqIHJlZmVyZW5jZS5cbiAqXG4gKiBAZGVmYXVsdCBmYWxzZVxuICogQG1lbWJlciB7Qm9vbGVhbn0gbW9kdWxlOmxpbmsvbGlua35MaW5rQ29uZmlnI2FkZFRhcmdldFRvRXh0ZXJuYWxMaW5rc1xuICovXG5cbi8qKlxuICogRGVjb3JhdG9ycyBwcm92aWRlIGFuIGVhc3kgd2F5IHRvIGNvbmZpZ3VyZSBhbmQgbWFuYWdlIGFkZGl0aW9uYWwgbGluayBhdHRyaWJ1dGVzIGluIHRoZSBlZGl0b3IgY29udGVudC4gVGhlcmUgYXJlXG4gKiB0d28gdHlwZXMgb2YgbGluayBkZWNvcmF0b3JzOlxuICpcbiAqICoge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt+TGlua0RlY29yYXRvckF1dG9tYXRpY0RlZmluaXRpb24gQXV0b21hdGljfSAmbmRhc2g7IFRoZXkgbWF0Y2ggbGlua3MgYWdhaW5zdCBwcmXigJNkZWZpbmVkIHJ1bGVzIGFuZFxuICogbWFuYWdlIHRoZWlyIGF0dHJpYnV0ZXMgYmFzZWQgb24gdGhlIHJlc3VsdHMuXG4gKiAqIHtAbGluayBtb2R1bGU6bGluay9saW5rfkxpbmtEZWNvcmF0b3JNYW51YWxEZWZpbml0aW9uIE1hbnVhbH0gJm5kYXNoOyBUaGV5IGFsbG93IHVzZXJzIHRvIGNvbnRyb2wgbGluayBhdHRyaWJ1dGVzIGluZGl2aWR1YWxseSxcbiAqICB1c2luZyB0aGUgZWRpdG9yIFVJLlxuICpcbiAqIFRlbXBsYXRlIGRlY29yYXRvcnMgYXJlIGRlZmluZWQgYXMgb2JqZWN0cyB3aXRoIGtleS12YWx1ZSBwYWlycywgd2hlcmUgdGhlIGtleSBpcyB0aGUgbmFtZSBwcm92aWRlZCBmb3IgYSBnaXZlbiBkZWNvcmF0b3IgYW5kIHRoZVxuICogdmFsdWUgaXMgdGhlIGRlY29yYXRvciBkZWZpbml0aW9uLlxuICpcbiAqIFRoZSBuYW1lIG9mIHRoZSBkZWNvcmF0b3IgYWxzbyBjb3JyZXNwb25kcyB0byB0aGUge0BnbGluayBmcmFtZXdvcmsvZ3VpZGVzL2FyY2hpdGVjdHVyZS9lZGl0aW5nLWVuZ2luZSN0ZXh0LWF0dHJpYnV0ZXMgdGV4dCBhdHRyaWJ1dGV9XG4gKiBpbiB0aGUgbW9kZWwuIEZvciBpbnN0YW5jZSwgdGhlIGBpc0V4dGVybmFsYCBkZWNvcmF0b3IgYmVsb3cgaXMgcmVwcmVzZW50ZWQgYXMgYSBgbGlua0lzRXh0ZXJuYWxgIGF0dHJpYnV0ZSBpbiB0aGUgbW9kZWwuXG4gKlxuICpcdFx0Q2xhc3NpY0VkaXRvclxuICpcdFx0XHQuY3JlYXRlKCBlZGl0b3JFbGVtZW50LCB7XG4gKlx0XHRcdFx0bGluazoge1xuICpcdFx0XHRcdFx0ZGVjb3JhdG9yczoge1xuICpcdFx0XHRcdFx0XHRpc0V4dGVybmFsOiB7XG4gKlx0XHRcdFx0XHRcdFx0bW9kZTogJ2F1dG9tYXRpYycsXG4gKlx0XHRcdFx0XHRcdFx0Y2FsbGJhY2s6IHVybCA9PiB1cmwuc3RhcnRzV2l0aCggJ2h0dHA6Ly8nICksXG4gKlx0XHRcdFx0XHRcdFx0YXR0cmlidXRlczoge1xuICpcdFx0XHRcdFx0XHRcdFx0dGFyZ2V0OiAnX2JsYW5rJyxcbiAqXHRcdFx0XHRcdFx0XHRcdHJlbDogJ25vb3BlbmVyIG5vcmVmZXJyZXInXG4gKlx0XHRcdFx0XHRcdFx0fVxuICpcdFx0XHRcdFx0XHR9LFxuICpcdFx0XHRcdFx0XHRpc0Rvd25sb2FkYWJsZToge1xuICpcdFx0XHRcdFx0XHRcdG1vZGU6ICdtYW51YWwnLFxuICpcdFx0XHRcdFx0XHRcdGxhYmVsOiAnRG93bmxvYWRhYmxlJyxcbiAqXHRcdFx0XHRcdFx0XHRhdHRyaWJ1dGVzOiB7XG4gKlx0XHRcdFx0XHRcdFx0XHRkb3dubG9hZDogJ2ZpbGUucG5nJyxcbiAqXHRcdFx0XHRcdFx0XHR9XG4gKlx0XHRcdFx0XHRcdH0sXG4gKlx0XHRcdFx0XHRcdC8vIC4uLlxuICpcdFx0XHRcdFx0fVxuICpcdFx0XHRcdH1cbiAqXHRcdFx0fSApXG4gKlx0XHRcdC50aGVuKCAuLi4gKVxuICpcdFx0XHQuY2F0Y2goIC4uLiApO1xuICpcbiAqIFRvIGxlYXJuIG1vcmUgYWJvdXQgdGhlIGNvbmZpZ3VyYXRpb24gc3ludGF4LCBjaGVjayBvdXQgdGhlIHtAbGluayBtb2R1bGU6bGluay9saW5rfkxpbmtEZWNvcmF0b3JBdXRvbWF0aWNEZWZpbml0aW9uIGF1dG9tYXRpY31cbiAqIGFuZCB7QGxpbmsgbW9kdWxlOmxpbmsvbGlua35MaW5rRGVjb3JhdG9yTWFudWFsRGVmaW5pdGlvbiBtYW51YWx9IGRlY29yYXRvciBvcHRpb24gcmVmZXJlbmNlLlxuICpcbiAqICoqV2FybmluZzoqKiBDdXJyZW50bHksIGxpbmsgZGVjb3JhdG9ycyB3b3JrIGluZGVwZW5kZW50bHkgb2Ygb25lIGFub3RoZXIgYW5kIG5vIGNvbmZsaWN0IHJlc29sdXRpb24gbWVjaGFuaXNtIGV4aXN0cy5cbiAqIEZvciBleGFtcGxlLCBjb25maWd1cmluZyB0aGUgYHRhcmdldGAgYXR0cmlidXRlIHVzaW5nIGJvdGggYW4gYXV0b21hdGljIGFuZCBhIG1hbnVhbCBkZWNvcmF0b3IgYXQgdGhlIHNhbWUgdGltZSBjb3VsZCBlbmQgdXAgd2l0aFxuICogcXVpcmt5IHJlc3VsdHMuIFRoZSBzYW1lIGFwcGxpZXMgaWYgbXVsdGlwbGUgbWFudWFsIG9yIGF1dG9tYXRpYyBkZWNvcmF0b3JzIHdlcmUgZGVmaW5lZCBmb3IgdGhlIHNhbWUgYXR0cmlidXRlLlxuICpcbiAqICoqTm90ZSoqOiBTaW5jZSB0aGUgYHRhcmdldGAgYXR0cmlidXRlIG1hbmFnZW1lbnQgZm9yIGV4dGVybmFsIGxpbmtzIGlzIGEgY29tbW9uIHVzZSBjYXNlLCB0aGVyZSBpcyBhIHByZWRlZmluZWQgYXV0b21hdGljIGRlY29yYXRvclxuICogZGVkaWNhdGVkIGZvciB0aGF0IHB1cnBvc2Ugd2hpY2ggY2FuIGJlIGVuYWJsZWQgYnkgdHVybmluZyBhIHNpbmdsZSBvcHRpb24gb24uIENoZWNrIG91dCB0aGVcbiAqIHtAbGluayBtb2R1bGU6bGluay9saW5rfkxpbmtDb25maWcjYWRkVGFyZ2V0VG9FeHRlcm5hbExpbmtzIGBjb25maWcubGluay5hZGRUYXJnZXRUb0V4dGVybmFsTGlua3NgfVxuICogY29uZmlndXJhdGlvbiBkZXNjcmlwdGlvbiB0byBsZWFybiBtb3JlLlxuICpcbiAqIFNlZSBhbHNvIHRoZSB7QGdsaW5rIGZlYXR1cmVzL2xpbmsjY3VzdG9tLWxpbmstYXR0cmlidXRlcy1kZWNvcmF0b3JzIGxpbmsgZmVhdHVyZSBndWlkZX0gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogQG1lbWJlciB7T2JqZWN0LjxTdHJpbmcsIG1vZHVsZTpsaW5rL2xpbmt+TGlua0RlY29yYXRvckRlZmluaXRpb24+fSBtb2R1bGU6bGluay9saW5rfkxpbmtDb25maWcjZGVjb3JhdG9yc1xuICovXG5cbi8qKlxuICogQSBsaW5rIGRlY29yYXRvciBkZWZpbml0aW9uLiBUd28gdHlwZXMgaW1wbGVtZW50IHRoaXMgZGVmaXRpb246XG4gKlxuICogKiB7QGxpbmsgbW9kdWxlOmxpbmsvbGlua35MaW5rRGVjb3JhdG9yTWFudWFsRGVmaW5pdGlvbn1cbiAqICoge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt+TGlua0RlY29yYXRvckF1dG9tYXRpY0RlZmluaXRpb259XG4gKlxuICogUmVmZXIgdG8gdGhlaXIgZG9jdW1lbnQgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgYXZhaWxhYmxlIG9wdGlvbnMgb3IgdG8gdGhlXG4gKiB7QGdsaW5rIGZlYXR1cmVzL2xpbmsjY3VzdG9tLWxpbmstYXR0cmlidXRlcy1kZWNvcmF0b3JzIGxpbmsgZmVhdHVyZSBndWlkZX0gZm9yIGdlbmVyYWwgaW5mb3JtYXRpb24uXG4gKlxuICogQGludGVyZmFjZSBMaW5rRGVjb3JhdG9yRGVmaW5pdGlvblxuICovXG5cbi8qKlxuICogVGVtcGxhdGUgZGVjb3JhdG9yIHR5cGUuXG4gKlxuICogQ2hlY2sgb3V0IHRoZSB7QGdsaW5rIGZlYXR1cmVzL2xpbmsjY3VzdG9tLWxpbmstYXR0cmlidXRlcy1kZWNvcmF0b3JzIGxpbmsgZmVhdHVyZSBndWlkZX0gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogQG1lbWJlciB7J21hbnVhbCd8J2F1dG9tYXRpYyd9IG1vZHVsZTpsaW5rL2xpbmt+TGlua0RlY29yYXRvckRlZmluaXRpb24jbW9kZVxuICovXG5cbi8qKlxuICogRGVzY3JpYmVzIGFuIGF1dG9tYXRpYyB7QGxpbmsgbW9kdWxlOmxpbmsvbGlua35MaW5rQ29uZmlnI2RlY29yYXRvcnMgbGluayBkZWNvcmF0b3J9LiBUaGlzIGRlY29yYXRvciB0eXBlIG1hdGNoZXNcbiAqIGFsbCBsaW5rcyBpbiB0aGUgZWRpdG9yIGNvbnRlbnQgYWdhaW5zdCBhIGZ1bmN0aW9uIHRoYXQgZGVjaWRlcyB3aGV0aGVyIHRoZSBsaW5rIHNob3VsZCByZWNlaXZlIGEgcHJl4oCTZGVmaW5lZCBzZXQgb2YgYXR0cmlidXRlcy5cbiAqXG4gKiBJdCB0YWtlcyBhbiBvYmplY3Qgd2l0aCBrZXktdmFsdWUgcGFpcnMgb2YgYXR0cmlidXRlcyBhbmQgYSBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IG11c3QgcmV0dXJuIGEgQm9vbGVhbiB2YWx1ZSBiYXNlZCBvbiB0aGUgbGluaydzXG4gKiBgaHJlZmAgKFVSTCkuIFdoZW4gdGhlIGNhbGxiYWNrIHJldHVybnMgYHRydWVgLCBhdHRyaWJ1dGVzIGFyZSBhcHBsaWVkIHRvIHRoZSBsaW5rLlxuICpcbiAqIEZvciBleGFtcGxlLCB0byBhZGQgdGhlIGB0YXJnZXQ9XCJfYmxhbmtcImAgYXR0cmlidXRlIHRvIGFsbCBsaW5rcyBpbiB0aGUgZWRpdG9yIHN0YXJ0aW5nIHdpdGggYGh0dHA6Ly9gLCB0aGVcbiAqIGNvbmZpZ3VyYXRpb24gY291bGQgbG9vayBsaWtlIHRoaXM6XG4gKlxuICpcdFx0e1xuICpcdFx0XHRtb2RlOiAnYXV0b21hdGljJyxcbiAqXHRcdFx0Y2FsbGJhY2s6IHVybCA9PiB1cmwuc3RhcnRzV2l0aCggJ2h0dHA6Ly8nICksXG4gKlx0XHRcdGF0dHJpYnV0ZXM6IHtcbiAqXHRcdFx0XHR0YXJnZXQ6ICdfYmxhbmsnXG4gKlx0XHRcdH1cbiAqXHRcdH1cbiAqXG4gKiAqKk5vdGUqKjogU2luY2UgdGhlIGB0YXJnZXRgIGF0dHJpYnV0ZSBtYW5hZ2VtZW50IGZvciBleHRlcm5hbCBsaW5rcyBpcyBhIGNvbW1vbiB1c2UgY2FzZSwgdGhlcmUgaXMgYSBwcmVkZWZpbmVkIGF1dG9tYXRpYyBkZWNvcmF0b3JcbiAqIGRlZGljYXRlZCBmb3IgdGhhdCBwdXJwb3NlIHRoYXQgY2FuIGJlIGVuYWJsZWQgYnkgdHVybmluZyBhIHNpbmdsZSBvcHRpb24gb24uIENoZWNrIG91dCB0aGVcbiAqIHtAbGluayBtb2R1bGU6bGluay9saW5rfkxpbmtDb25maWcjYWRkVGFyZ2V0VG9FeHRlcm5hbExpbmtzIGBjb25maWcubGluay5hZGRUYXJnZXRUb0V4dGVybmFsTGlua3NgfVxuICogY29uZmlndXJhdGlvbiBkZXNjcmlwdGlvbiB0byBsZWFybiBtb3JlLlxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IG1vZHVsZTpsaW5rL2xpbmt+TGlua0RlY29yYXRvckF1dG9tYXRpY0RlZmluaXRpb25cbiAqIEBwcm9wZXJ0eSB7J2F1dG9tYXRpYyd9IG1vZGUgVGVtcGxhdGUgZGVjb3JhdG9yIHR5cGUuIEl0IGlzIGAnYXV0b21hdGljJ2AgZm9yIGFsbCBhdXRvbWF0aWMgZGVjb3JhdG9ycy5cbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNhbGxiYWNrIFRha2VzIGEgYHVybGAgYXMgYSBwYXJhbWV0ZXIgYW5kIHJldHVybnMgYHRydWVgIGlmIHRoZSBgYXR0cmlidXRlc2Agc2hvdWxkIGJlIGFwcGxpZWQgdG8gdGhlIGxpbmsuXG4gKiBAcHJvcGVydHkge09iamVjdH0gYXR0cmlidXRlcyBLZXktdmFsdWUgcGFpcnMgdXNlZCBhcyBsaW5rIGF0dHJpYnV0ZXMgYWRkZWQgdG8gdGhlIG91dHB1dCBkdXJpbmcgdGhlXG4gKiB7QGdsaW5rIGZyYW1ld29yay9ndWlkZXMvYXJjaGl0ZWN0dXJlL2VkaXRpbmctZW5naW5lI2NvbnZlcnNpb24gZG93bmNhc3Rpbmd9LlxuICogQXR0cmlidXRlcyBzaG91bGQgZm9sbG93IHRoZSB7QGxpbmsgbW9kdWxlOmVuZ2luZS92aWV3L2VsZW1lbnRkZWZpbml0aW9ufkVsZW1lbnREZWZpbml0aW9ufSBzeW50YXguXG4gKi9cblxuLyoqXG4gKiBEZXNjcmliZXMgYSBtYW51YWwge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt+TGlua0NvbmZpZyNkZWNvcmF0b3JzIGxpbmsgZGVjb3JhdG9yfS4gVGhpcyBkZWNvcmF0b3IgdHlwZSBpcyByZXByZXNlbnRlZCBpblxuICogdGhlIGxpbmsgZmVhdHVyZSdzIHtAbGluayBtb2R1bGU6bGluay9saW5rdWkgdXNlciBpbnRlcmZhY2V9IGFzIGEgc3dpdGNoIHRoYXQgdGhlIHVzZXIgY2FuIHVzZSB0byBjb250cm9sIHRoZSBwcmVzZW5jZVxuICogb2YgYSBwcmVkZWZpbmVkIHNldCBvZiBhdHRyaWJ1dGVzLlxuICpcbiAqIEZvciBpbnN0YW5jZSwgdG8gYWxsb3cgdGhlIHVzZXJzIHRvIG1hbnVhbGx5IGNvbnRyb2wgdGhlIHByZXNlbmNlIG9mIHRoZSBgdGFyZ2V0PVwiX2JsYW5rXCJgIGFuZFxuICogYHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcImAgYXR0cmlidXRlcyBvbiBzcGVjaWZpYyBsaW5rcywgdGhlIGRlY29yYXRvciBjb3VsZCBsb29rIGFzIGZvbGxvd3M6XG4gKlxuICpcdFx0e1xuICpcdFx0XHRtb2RlOiAnbWFudWFsJyxcbiAqXHRcdFx0bGFiZWw6ICdPcGVuIGluIGEgbmV3IHRhYicsXG4gKlx0XHRcdGRlZmF1bHRWYWx1ZTogdHJ1ZSxcbiAqXHRcdFx0YXR0cmlidXRlczoge1xuICpcdFx0XHRcdHRhcmdldDogJ19ibGFuaycsXG4gKlx0XHRcdFx0cmVsOiAnbm9vcGVuZXIgbm9yZWZlcnJlcidcbiAqXHRcdFx0fVxuICpcdFx0fVxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IG1vZHVsZTpsaW5rL2xpbmt+TGlua0RlY29yYXRvck1hbnVhbERlZmluaXRpb25cbiAqIEBwcm9wZXJ0eSB7J21hbnVhbCd9IG1vZGUgVGVtcGxhdGUgZGVjb3JhdG9yIHR5cGUuIEl0IGlzIGAnbWFudWFsJ2AgZm9yIGFsbCBtYW51YWwgZGVjb3JhdG9ycy5cbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBsYWJlbCBUaGUgbGFiZWwgb2YgdGhlIFVJIGJ1dHRvbiB0aGF0IHRoZSB1c2VyIGNhbiB1c2UgdG8gY29udHJvbCB0aGUgcHJlc2VuY2Ugb2YgbGluayBhdHRyaWJ1dGVzLlxuICogQHByb3BlcnR5IHtPYmplY3R9IGF0dHJpYnV0ZXMgS2V5LXZhbHVlIHBhaXJzIHVzZWQgYXMgbGluayBhdHRyaWJ1dGVzIGFkZGVkIHRvIHRoZSBvdXRwdXQgZHVyaW5nIHRoZVxuICoge0BnbGluayBmcmFtZXdvcmsvZ3VpZGVzL2FyY2hpdGVjdHVyZS9lZGl0aW5nLWVuZ2luZSNjb252ZXJzaW9uIGRvd25jYXN0aW5nfS5cbiAqIEF0dHJpYnV0ZXMgc2hvdWxkIGZvbGxvdyB0aGUge0BsaW5rIG1vZHVsZTplbmdpbmUvdmlldy9lbGVtZW50ZGVmaW5pdGlvbn5FbGVtZW50RGVmaW5pdGlvbn0gc3ludGF4LlxuICogQHByb3BlcnR5IHtCb29sZWFufSBbZGVmYXVsdFZhbHVlXSBDb250cm9scyB3aGV0aGVyIHRoZSBkZWNvcmF0b3IgaXMgXCJvblwiIGJ5IGRlZmF1bHQuXG4gKi9cbiIsIi8qKlxuICogQGxpY2Vuc2UgQ29weXJpZ2h0IChjKSAyMDAzLTIwMjEsIENLU291cmNlIC0gRnJlZGVyaWNvIEtuYWJiZW4uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBGb3IgbGljZW5zaW5nLCBzZWUgTElDRU5TRS5tZCBvciBodHRwczovL2NrZWRpdG9yLmNvbS9sZWdhbC9ja2VkaXRvci1vc3MtbGljZW5zZVxuICovXG5cbi8qKlxuICogQG1vZHVsZSBsaW5rL3VpL2xpbmthY3Rpb25zdmlld1xuICovXG5cbmltcG9ydCB7IEJ1dHRvblZpZXcsIFZpZXcsIFZpZXdDb2xsZWN0aW9uLCBGb2N1c0N5Y2xlciB9IGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtdWkvc3JjJztcbmltcG9ydCB7IEZvY3VzVHJhY2tlciwgS2V5c3Ryb2tlSGFuZGxlciB9IGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtdXRpbHMvc3JjJztcbmltcG9ydCB7IGljb25zIH0gZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1jb3JlL3NyYyc7XG5cbmltcG9ydCB7IGVuc3VyZVNhZmVVcmwgfSBmcm9tICcuLi91dGlscyc7XG5cbi8vIFNlZTogIzg4MzMuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2tlZGl0b3I1LXJ1bGVzL2NrZWRpdG9yLWltcG9ydHNcbmltcG9ydCAnQGNrZWRpdG9yL2NrZWRpdG9yNS11aS90aGVtZS9jb21wb25lbnRzL3Jlc3BvbnNpdmUtZm9ybS9yZXNwb25zaXZlZm9ybS5jc3MnO1xuaW1wb3J0ICcuLi8uLi90aGVtZS90ZW1wbGF0ZWFjdGlvbnMuY3NzJztcblxuaW1wb3J0IHVubGlua0ljb24gZnJvbSAnLi4vLi4vdGhlbWUvaWNvbnMvdW5saW5rLnN2Zyc7XG5cbi8qKlxuICogVGhlIGxpbmsgYWN0aW9ucyB2aWV3IGNsYXNzLiBUaGlzIHZpZXcgZGlzcGxheXMgdGhlIGxpbmsgcHJldmlldywgYWxsb3dzXG4gKiB1bmxpbmtpbmcgb3IgZWRpdGluZyB0aGUgbGluay5cbiAqXG4gKiBAZXh0ZW5kcyBtb2R1bGU6dWkvdmlld35WaWV3XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlbXBsYXRlQWN0aW9uc1ZpZXcgZXh0ZW5kcyBWaWV3IHtcblx0LyoqXG5cdCAqIEBpbmhlcml0RG9jXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggbG9jYWxlICkge1xuXHRcdHN1cGVyKCBsb2NhbGUgKTtcblxuXHRcdGNvbnN0IHQgPSBsb2NhbGUudDtcblxuXHRcdC8qKlxuXHRcdCAqIFRyYWNrcyBpbmZvcm1hdGlvbiBhYm91dCBET00gZm9jdXMgaW4gdGhlIGFjdGlvbnMuXG5cdFx0ICpcblx0XHQgKiBAcmVhZG9ubHlcblx0XHQgKiBAbWVtYmVyIHttb2R1bGU6dXRpbHMvZm9jdXN0cmFja2VyfkZvY3VzVHJhY2tlcn1cblx0XHQgKi9cblx0XHR0aGlzLmZvY3VzVHJhY2tlciA9IG5ldyBGb2N1c1RyYWNrZXIoKTtcblxuXHRcdC8qKlxuXHRcdCAqIEFuIGluc3RhbmNlIG9mIHRoZSB7QGxpbmsgbW9kdWxlOnV0aWxzL2tleXN0cm9rZWhhbmRsZXJ+S2V5c3Ryb2tlSGFuZGxlcn0uXG5cdFx0ICpcblx0XHQgKiBAcmVhZG9ubHlcblx0XHQgKiBAbWVtYmVyIHttb2R1bGU6dXRpbHMva2V5c3Ryb2tlaGFuZGxlcn5LZXlzdHJva2VIYW5kbGVyfVxuXHRcdCAqL1xuXHRcdHRoaXMua2V5c3Ryb2tlcyA9IG5ldyBLZXlzdHJva2VIYW5kbGVyKCk7XG5cblx0XHQvKipcblx0XHQgKiBUaGUgaHJlZiBwcmV2aWV3IHZpZXcuXG5cdFx0ICpcblx0XHQgKiBAbWVtYmVyIHttb2R1bGU6dWkvdmlld35WaWV3fVxuXHRcdCAqL1xuXHRcdHRoaXMucHJldmlld0J1dHRvblZpZXcgPSB0aGlzLl9jcmVhdGVQcmV2aWV3QnV0dG9uKCk7XG5cblx0XHQvKipcblx0XHQgKiBUaGUgdW5saW5rIGJ1dHRvbiB2aWV3LlxuXHRcdCAqXG5cdFx0ICogQG1lbWJlciB7bW9kdWxlOnVpL2J1dHRvbi9idXR0b252aWV3fkJ1dHRvblZpZXd9XG5cdFx0ICovXG5cdFx0dGhpcy51bmxpbmtCdXR0b25WaWV3ID0gdGhpcy5fY3JlYXRlQnV0dG9uKCB0KCAnVW5saW5rJyApLCB1bmxpbmtJY29uLCAndW5saW5rJyApO1xuXG5cdFx0LyoqXG5cdFx0ICogVGhlIGVkaXQgbGluayBidXR0b24gdmlldy5cblx0XHQgKlxuXHRcdCAqIEBtZW1iZXIge21vZHVsZTp1aS9idXR0b24vYnV0dG9udmlld35CdXR0b25WaWV3fVxuXHRcdCAqL1xuXHRcdHRoaXMuZWRpdEJ1dHRvblZpZXcgPSB0aGlzLl9jcmVhdGVCdXR0b24oIHQoICdFZGl0IGxpbmsnICksIGljb25zLnBlbmNpbCwgJ2VkaXQnICk7XG5cblx0XHQvKipcblx0XHQgKiBUaGUgdmFsdWUgb2YgdGhlIFwiaHJlZlwiIGF0dHJpYnV0ZSBvZiB0aGUgbGluayB0byB1c2UgaW4gdGhlIHtAbGluayAjcHJldmlld0J1dHRvblZpZXd9LlxuXHRcdCAqXG5cdFx0ICogQG9ic2VydmFibGVcblx0XHQgKiBAbWVtYmVyIHtTdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5zZXQoICdocmVmJyApO1xuXG5cdFx0LyoqXG5cdFx0ICogQSBjb2xsZWN0aW9uIG9mIHZpZXdzIHRoYXQgY2FuIGJlIGZvY3VzZWQgaW4gdGhlIHZpZXcuXG5cdFx0ICpcblx0XHQgKiBAcmVhZG9ubHlcblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQG1lbWJlciB7bW9kdWxlOnVpL3ZpZXdjb2xsZWN0aW9uflZpZXdDb2xsZWN0aW9ufVxuXHRcdCAqL1xuXHRcdHRoaXMuX2ZvY3VzYWJsZXMgPSBuZXcgVmlld0NvbGxlY3Rpb24oKTtcblxuXHRcdC8qKlxuXHRcdCAqIEhlbHBzIGN5Y2xpbmcgb3ZlciB7QGxpbmsgI19mb2N1c2FibGVzfSBpbiB0aGUgdmlldy5cblx0XHQgKlxuXHRcdCAqIEByZWFkb25seVxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAbWVtYmVyIHttb2R1bGU6dWkvZm9jdXNjeWNsZXJ+Rm9jdXNDeWNsZXJ9XG5cdFx0ICovXG5cdFx0dGhpcy5fZm9jdXNDeWNsZXIgPSBuZXcgRm9jdXNDeWNsZXIoIHtcblx0XHRcdGZvY3VzYWJsZXM6IHRoaXMuX2ZvY3VzYWJsZXMsXG5cdFx0XHRmb2N1c1RyYWNrZXI6IHRoaXMuZm9jdXNUcmFja2VyLFxuXHRcdFx0a2V5c3Ryb2tlSGFuZGxlcjogdGhpcy5rZXlzdHJva2VzLFxuXHRcdFx0YWN0aW9uczoge1xuXHRcdFx0XHQvLyBOYXZpZ2F0ZSBmaWVsZHMgYmFja3dhcmRzIHVzaW5nIHRoZSBTaGlmdCArIFRhYiBrZXlzdHJva2UuXG5cdFx0XHRcdGZvY3VzUHJldmlvdXM6ICdzaGlmdCArIHRhYicsXG5cblx0XHRcdFx0Ly8gTmF2aWdhdGUgZmllbGRzIGZvcndhcmRzIHVzaW5nIHRoZSBUYWIga2V5LlxuXHRcdFx0XHRmb2N1c05leHQ6ICd0YWInXG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0dGhpcy5zZXRUZW1wbGF0ZSgge1xuXHRcdFx0dGFnOiAnZGl2JyxcblxuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRjbGFzczogW1xuXHRcdFx0XHRcdCdjaycsXG5cdFx0XHRcdFx0J2NrLWxpbmstYWN0aW9ucycsXG5cdFx0XHRcdFx0J2NrLXJlc3BvbnNpdmUtZm9ybSdcblx0XHRcdFx0XSxcblxuXHRcdFx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vY2tlZGl0b3IvY2tlZGl0b3I1LWxpbmsvaXNzdWVzLzkwXG5cdFx0XHRcdHRhYmluZGV4OiAnLTEnXG5cdFx0XHR9LFxuXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHR0aGlzLnByZXZpZXdCdXR0b25WaWV3LFxuXHRcdFx0XHR0aGlzLmVkaXRCdXR0b25WaWV3LFxuXHRcdFx0XHR0aGlzLnVubGlua0J1dHRvblZpZXdcblx0XHRcdF1cblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogQGluaGVyaXREb2Ncblx0ICovXG5cdHJlbmRlcigpIHtcblx0XHRzdXBlci5yZW5kZXIoKTtcblxuXHRcdGNvbnN0IGNoaWxkVmlld3MgPSBbXG5cdFx0XHR0aGlzLnByZXZpZXdCdXR0b25WaWV3LFxuXHRcdFx0dGhpcy5lZGl0QnV0dG9uVmlldyxcblx0XHRcdHRoaXMudW5saW5rQnV0dG9uVmlld1xuXHRcdF07XG5cblx0XHRjaGlsZFZpZXdzLmZvckVhY2goIHYgPT4ge1xuXHRcdFx0Ly8gUmVnaXN0ZXIgdGhlIHZpZXcgYXMgZm9jdXNhYmxlLlxuXHRcdFx0dGhpcy5fZm9jdXNhYmxlcy5hZGQoIHYgKTtcblxuXHRcdFx0Ly8gUmVnaXN0ZXIgdGhlIHZpZXcgaW4gdGhlIGZvY3VzIHRyYWNrZXIuXG5cdFx0XHR0aGlzLmZvY3VzVHJhY2tlci5hZGQoIHYuZWxlbWVudCApO1xuXHRcdH0gKTtcblxuXHRcdC8vIFN0YXJ0IGxpc3RlbmluZyBmb3IgdGhlIGtleXN0cm9rZXMgY29taW5nIGZyb20gI2VsZW1lbnQuXG5cdFx0dGhpcy5rZXlzdHJva2VzLmxpc3RlblRvKCB0aGlzLmVsZW1lbnQgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBGb2N1c2VzIHRoZSBmaXN0IHtAbGluayAjX2ZvY3VzYWJsZXN9IGluIHRoZSBhY3Rpb25zLlxuXHQgKi9cblx0Zm9jdXMoKSB7XG5cdFx0dGhpcy5fZm9jdXNDeWNsZXIuZm9jdXNGaXJzdCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBidXR0b24gdmlldy5cblx0ICpcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IGxhYmVsIFRoZSBidXR0b24gbGFiZWwuXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBpY29uIFRoZSBidXR0b24gaWNvbi5cblx0ICogQHBhcmFtIHtTdHJpbmd9IFtldmVudE5hbWVdIEFuIGV2ZW50IG5hbWUgdGhhdCB0aGUgYEJ1dHRvblZpZXcjZXhlY3V0ZWAgZXZlbnQgd2lsbCBiZSBkZWxlZ2F0ZWQgdG8uXG5cdCAqIEByZXR1cm5zIHttb2R1bGU6dWkvYnV0dG9uL2J1dHRvbnZpZXd+QnV0dG9uVmlld30gVGhlIGJ1dHRvbiB2aWV3IGluc3RhbmNlLlxuXHQgKi9cblx0X2NyZWF0ZUJ1dHRvbiggbGFiZWwsIGljb24sIGV2ZW50TmFtZSApIHtcblx0XHRjb25zdCBidXR0b24gPSBuZXcgQnV0dG9uVmlldyggdGhpcy5sb2NhbGUgKTtcblxuXHRcdGJ1dHRvbi5zZXQoIHtcblx0XHRcdGxhYmVsLFxuXHRcdFx0aWNvbixcblx0XHRcdHRvb2x0aXA6IHRydWVcblx0XHR9ICk7XG5cblx0XHRidXR0b24uZGVsZWdhdGUoICdleGVjdXRlJyApLnRvKCB0aGlzLCBldmVudE5hbWUgKTtcblxuXHRcdHJldHVybiBidXR0b247XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIGxpbmsgaHJlZiBwcmV2aWV3IGJ1dHRvbi5cblx0ICpcblx0ICogQHByaXZhdGVcblx0ICogQHJldHVybnMge21vZHVsZTp1aS9idXR0b24vYnV0dG9udmlld35CdXR0b25WaWV3fSBUaGUgYnV0dG9uIHZpZXcgaW5zdGFuY2UuXG5cdCAqL1xuXHRfY3JlYXRlUHJldmlld0J1dHRvbigpIHtcblx0XHRjb25zdCBidXR0b24gPSBuZXcgQnV0dG9uVmlldyggdGhpcy5sb2NhbGUgKTtcblx0XHRjb25zdCBiaW5kID0gdGhpcy5iaW5kVGVtcGxhdGU7XG5cdFx0Y29uc3QgdCA9IHRoaXMudDtcblxuXHRcdGJ1dHRvbi5zZXQoIHtcblx0XHRcdHdpdGhUZXh0OiB0cnVlLFxuXHRcdFx0dG9vbHRpcDogdCggJ09wZW4gbGluayBpbiBuZXcgdGFiJyApXG5cdFx0fSApO1xuXG5cdFx0YnV0dG9uLmV4dGVuZFRlbXBsYXRlKCB7XG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGNsYXNzOiBbXG5cdFx0XHRcdFx0J2NrJyxcblx0XHRcdFx0XHQnY2stbGluay1hY3Rpb25zX19wcmV2aWV3J1xuXHRcdFx0XHRdLFxuXHRcdFx0XHRocmVmOiBiaW5kLnRvKCAnaHJlZicsIGhyZWYgPT4gaHJlZiAmJiBlbnN1cmVTYWZlVXJsKCBocmVmICkgKSxcblx0XHRcdFx0dGFyZ2V0OiAnX2JsYW5rJyxcblx0XHRcdFx0cmVsOiAnbm9vcGVuZXIgbm9yZWZlcnJlcidcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0XHRidXR0b24uYmluZCggJ2xhYmVsJyApLnRvKCB0aGlzLCAnaHJlZicsIGhyZWYgPT4ge1xuXHRcdFx0cmV0dXJuIGhyZWYgfHwgdCggJ1RoaXMgbGluayBoYXMgbm8gVVJMJyApO1xuXHRcdH0gKTtcblxuXHRcdGJ1dHRvbi5iaW5kKCAnaXNFbmFibGVkJyApLnRvKCB0aGlzLCAnaHJlZicsIGhyZWYgPT4gISFocmVmICk7XG5cblx0XHRidXR0b24udGVtcGxhdGUudGFnID0gJ2EnO1xuXHRcdGJ1dHRvbi50ZW1wbGF0ZS5ldmVudExpc3RlbmVycyA9IHt9O1xuXG5cdFx0cmV0dXJuIGJ1dHRvbjtcblx0fVxufVxuXG4vKipcbiAqIEZpcmVkIHdoZW4gdGhlIHtAbGluayAjZWRpdEJ1dHRvblZpZXd9IGlzIGNsaWNrZWQuXG4gKlxuICogQGV2ZW50IGVkaXRcbiAqL1xuXG4vKipcbiAqIEZpcmVkIHdoZW4gdGhlIHtAbGluayAjdW5saW5rQnV0dG9uVmlld30gaXMgY2xpY2tlZC5cbiAqXG4gKiBAZXZlbnQgdW5saW5rXG4gKi9cbiIsIi8qKlxuICogQGxpY2Vuc2UgQ29weXJpZ2h0IChjKSAyMDAzLTIwMjEsIENLU291cmNlIC0gRnJlZGVyaWNvIEtuYWJiZW4uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBGb3IgbGljZW5zaW5nLCBzZWUgTElDRU5TRS5tZCBvciBodHRwczovL2NrZWRpdG9yLmNvbS9sZWdhbC9ja2VkaXRvci1vc3MtbGljZW5zZVxuICovXG5cbi8qKlxuICogQG1vZHVsZSBsaW5rL3VpL2xpbmtmb3Jtdmlld1xuICovXG5cbmltcG9ydCB7XG5cdEJ1dHRvblZpZXcsXG5cdEZvY3VzQ3ljbGVyLFxuXHRMYWJlbGVkRmllbGRWaWV3LFxuXHRTd2l0Y2hCdXR0b25WaWV3LFxuXHRWaWV3LFxuXHRWaWV3Q29sbGVjdGlvbixcblx0Y3JlYXRlTGFiZWxlZElucHV0VGV4dCxcblx0aW5qZWN0Q3NzVHJhbnNpdGlvbkRpc2FibGVyLFxuXHRzdWJtaXRIYW5kbGVyLFxuXHRhZGRUb29sYmFyVG9Ecm9wZG93bixcblx0Y3JlYXRlRHJvcGRvd25cbn0gZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS11aS9zcmMnO1xuaW1wb3J0IFNwbGl0QnV0dG9uVmlldyBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LXVpL3NyYy9kcm9wZG93bi9idXR0b24vc3BsaXRidXR0b252aWV3JztcbmltcG9ydCB7IEZvY3VzVHJhY2tlciwgS2V5c3Ryb2tlSGFuZGxlciB9IGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtdXRpbHMvc3JjJztcbmltcG9ydCB7IGljb25zIH0gZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1jb3JlL3NyYyc7XG4vLyBTZWU6ICM4ODMzLlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNrZWRpdG9yNS1ydWxlcy9ja2VkaXRvci1pbXBvcnRzXG5pbXBvcnQgJ0Bja2VkaXRvci9ja2VkaXRvcjUtdWkvdGhlbWUvY29tcG9uZW50cy9yZXNwb25zaXZlLWZvcm0vcmVzcG9uc2l2ZWZvcm0uY3NzJztcbmltcG9ydCAnLi4vLi4vdGhlbWUvdGVtcGxhdGVmb3JtLmNzcyc7XG5cbi8qKlxuICogVGhlIGxpbmsgZm9ybSB2aWV3IGNvbnRyb2xsZXIgY2xhc3MuXG4gKlxuICogU2VlIHtAbGluayBtb2R1bGU6bGluay91aS9saW5rZm9ybXZpZXd+TGlua0Zvcm1WaWV3fS5cbiAqXG4gKiBAZXh0ZW5kcyBtb2R1bGU6dWkvdmlld35WaWV3XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlbXBsYXRlRm9ybVZpZXcgZXh0ZW5kcyBWaWV3IHtcblx0LyoqXG5cdCAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgdGhlIHtAbGluayBtb2R1bGU6bGluay91aS9saW5rZm9ybXZpZXd+TGlua0Zvcm1WaWV3fSBjbGFzcy5cblx0ICpcblx0ICogQWxzbyBzZWUge0BsaW5rICNyZW5kZXJ9LlxuXHQgKlxuXHQgKiBAcGFyYW0ge21vZHVsZTp1dGlscy9sb2NhbGV+TG9jYWxlfSBbbG9jYWxlXSBUaGUgbG9jYWxpemF0aW9uIHNlcnZpY2VzIGluc3RhbmNlLlxuXHQgKiBAcGFyYW0ge21vZHVsZTpsaW5rL2xpbmtjb21tYW5kfkxpbmtDb21tYW5kfSBsaW5rQ29tbWFuZCBSZWZlcmVuY2UgdG8ge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmtjb21tYW5kfkxpbmtDb21tYW5kfS5cblx0ICogQHBhcmFtIHtTdHJpbmd9IFtwcm90b2NvbF0gQSB2YWx1ZSBvZiBhIHByb3RvY29sIHRvIGJlIGRpc3BsYXllZCBpbiB0aGUgaW5wdXQncyBwbGFjZWhvbGRlci5cblx0ICovXG5cdGNvbnN0cnVjdG9yKCBsb2NhbGUsIGxpbmtDb21tYW5kICkge1xuXHRcdHN1cGVyKCBsb2NhbGUgKTtcblxuXHRcdGNvbnN0IHQgPSBsb2NhbGUudDtcblxuXHRcdC8qKlxuXHRcdCAqIFRyYWNrcyBpbmZvcm1hdGlvbiBhYm91dCBET00gZm9jdXMgaW4gdGhlIGZvcm0uXG5cdFx0ICpcblx0XHQgKiBAcmVhZG9ubHlcblx0XHQgKiBAbWVtYmVyIHttb2R1bGU6dXRpbHMvZm9jdXN0cmFja2VyfkZvY3VzVHJhY2tlcn1cblx0XHQgKi9cblx0XHR0aGlzLmZvY3VzVHJhY2tlciA9IG5ldyBGb2N1c1RyYWNrZXIoKTtcblxuXHRcdC8qKlxuXHRcdCAqIEFuIGluc3RhbmNlIG9mIHRoZSB7QGxpbmsgbW9kdWxlOnV0aWxzL2tleXN0cm9rZWhhbmRsZXJ+S2V5c3Ryb2tlSGFuZGxlcn0uXG5cdFx0ICpcblx0XHQgKiBAcmVhZG9ubHlcblx0XHQgKiBAbWVtYmVyIHttb2R1bGU6dXRpbHMva2V5c3Ryb2tlaGFuZGxlcn5LZXlzdHJva2VIYW5kbGVyfVxuXHRcdCAqL1xuXHRcdHRoaXMua2V5c3Ryb2tlcyA9IG5ldyBLZXlzdHJva2VIYW5kbGVyKCk7XG5cblx0XHQvKipcblx0XHQgKiBUaGUgVVJMIGlucHV0IHZpZXcuXG5cdFx0ICpcblx0XHQgKiBAbWVtYmVyIHttb2R1bGU6dWkvbGFiZWxlZGZpZWxkL2xhYmVsZWRmaWVsZHZpZXd+TGFiZWxlZEZpZWxkVmlld31cblx0XHQgKi9cblx0XHR0aGlzLmxhYmVsSW5wdXRWaWV3ID0gdGhpcy5fY3JlYXRlVGV4dElucHV0KCdBdHRhY2hlZCBMYWJlbCcpOy8qKlxuXHRcdCAqIFRoZSBVUkwgaW5wdXQgdmlldy5cblx0XHQgKlxuXHRcdCAqIEBtZW1iZXIge21vZHVsZTp1aS9sYWJlbGVkZmllbGQvbGFiZWxlZGZpZWxkdmlld35MYWJlbGVkRmllbGRWaWV3fVxuXHRcdCAqL1xuXHRcdHRoaXMudHlwZUlucHV0VmlldyA9IHRoaXMuX2NyZWF0ZURyb3BEb3duSW5wdXQoJ1RlbXBsYXRlIFZhcmlhYmxlIFR5cGUnKTsvKipcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBTYXZlIGJ1dHRvbiB2aWV3LlxuXHRcdCAqXG5cdFx0ICogQG1lbWJlciB7bW9kdWxlOnVpL2J1dHRvbi9idXR0b252aWV3fkJ1dHRvblZpZXd9XG5cdFx0ICovXG5cdFx0dGhpcy5zYXZlQnV0dG9uVmlldyA9IHRoaXMuX2NyZWF0ZUJ1dHRvbiggdCggJ1NhdmUnICksIGljb25zLmNoZWNrLCAnY2stYnV0dG9uLXNhdmUnICk7XG5cdFx0dGhpcy5zYXZlQnV0dG9uVmlldy50eXBlID0gJ3N1Ym1pdCc7XG5cblx0XHQvKipcblx0XHQgKiBUaGUgQ2FuY2VsIGJ1dHRvbiB2aWV3LlxuXHRcdCAqXG5cdFx0ICogQG1lbWJlciB7bW9kdWxlOnVpL2J1dHRvbi9idXR0b252aWV3fkJ1dHRvblZpZXd9XG5cdFx0ICovXG5cdFx0dGhpcy5jYW5jZWxCdXR0b25WaWV3ID0gdGhpcy5fY3JlYXRlQnV0dG9uKCB0KCAnQ2FuY2VsJyApLCBpY29ucy5jYW5jZWwsICdjay1idXR0b24tY2FuY2VsJywgJ2NhbmNlbCcgKTtcblxuXHRcdC8qKlxuXHRcdCAqIEEgY29sbGVjdGlvbiBvZiB7QGxpbmsgbW9kdWxlOnVpL2J1dHRvbi9zd2l0Y2hidXR0b252aWV3flN3aXRjaEJ1dHRvblZpZXd9LFxuXHRcdCAqIHdoaWNoIGNvcnJlc3BvbmRzIHRvIHtAbGluayBtb2R1bGU6bGluay9saW5rY29tbWFuZH5MaW5rQ29tbWFuZCNtYW51YWxEZWNvcmF0b3JzIG1hbnVhbCBkZWNvcmF0b3JzfVxuXHRcdCAqIGNvbmZpZ3VyZWQgaW4gdGhlIGVkaXRvci5cblx0XHQgKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICogQHJlYWRvbmx5XG5cdFx0ICogQHR5cGUge21vZHVsZTp1aS92aWV3Y29sbGVjdGlvbn5WaWV3Q29sbGVjdGlvbn1cblx0XHQgKi9cblx0XHR0aGlzLl9tYW51YWxEZWNvcmF0b3JTd2l0Y2hlcyA9IHRoaXMuX2NyZWF0ZU1hbnVhbERlY29yYXRvclN3aXRjaGVzKCBsaW5rQ29tbWFuZCApO1xuXG5cdFx0LyoqXG5cdFx0ICogQSBjb2xsZWN0aW9uIG9mIGNoaWxkIHZpZXdzIGluIHRoZSBmb3JtLlxuXHRcdCAqXG5cdFx0ICogQHJlYWRvbmx5XG5cdFx0ICogQHR5cGUge21vZHVsZTp1aS92aWV3Y29sbGVjdGlvbn5WaWV3Q29sbGVjdGlvbn1cblx0XHQgKi9cblx0XHR0aGlzLmNoaWxkcmVuID0gdGhpcy5fY3JlYXRlRm9ybUNoaWxkcmVuKCBsaW5rQ29tbWFuZC5tYW51YWxEZWNvcmF0b3JzICk7XG5cblx0XHQvKipcblx0XHQgKiBBIGNvbGxlY3Rpb24gb2Ygdmlld3MgdGhhdCBjYW4gYmUgZm9jdXNlZCBpbiB0aGUgZm9ybS5cblx0XHQgKlxuXHRcdCAqIEByZWFkb25seVxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAbWVtYmVyIHttb2R1bGU6dWkvdmlld2NvbGxlY3Rpb25+Vmlld0NvbGxlY3Rpb259XG5cdFx0ICovXG5cdFx0dGhpcy5fZm9jdXNhYmxlcyA9IG5ldyBWaWV3Q29sbGVjdGlvbigpO1xuXG5cdFx0LyoqXG5cdFx0ICogSGVscHMgY3ljbGluZyBvdmVyIHtAbGluayAjX2ZvY3VzYWJsZXN9IGluIHRoZSBmb3JtLlxuXHRcdCAqXG5cdFx0ICogQHJlYWRvbmx5XG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEBtZW1iZXIge21vZHVsZTp1aS9mb2N1c2N5Y2xlcn5Gb2N1c0N5Y2xlcn1cblx0XHQgKi9cblx0XHR0aGlzLl9mb2N1c0N5Y2xlciA9IG5ldyBGb2N1c0N5Y2xlcigge1xuXHRcdFx0Zm9jdXNhYmxlczogdGhpcy5fZm9jdXNhYmxlcyxcblx0XHRcdGZvY3VzVHJhY2tlcjogdGhpcy5mb2N1c1RyYWNrZXIsXG5cdFx0XHRrZXlzdHJva2VIYW5kbGVyOiB0aGlzLmtleXN0cm9rZXMsXG5cdFx0XHRhY3Rpb25zOiB7XG5cdFx0XHRcdC8vIE5hdmlnYXRlIGZvcm0gZmllbGRzIGJhY2t3YXJkcyB1c2luZyB0aGUgU2hpZnQgKyBUYWIga2V5c3Ryb2tlLlxuXHRcdFx0XHRmb2N1c1ByZXZpb3VzOiAnc2hpZnQgKyB0YWInLFxuXG5cdFx0XHRcdC8vIE5hdmlnYXRlIGZvcm0gZmllbGRzIGZvcndhcmRzIHVzaW5nIHRoZSBUYWIga2V5LlxuXHRcdFx0XHRmb2N1c05leHQ6ICd0YWInXG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0Y29uc3QgY2xhc3NMaXN0ID0gWyAnY2snLCAnY2stbGluay1mb3JtJywgJ2NrLXJlc3BvbnNpdmUtZm9ybScgXTtcblxuXHRcdGlmICggbGlua0NvbW1hbmQubWFudWFsRGVjb3JhdG9ycy5sZW5ndGggKSB7XG5cdFx0XHRjbGFzc0xpc3QucHVzaCggJ2NrLWxpbmstZm9ybV9sYXlvdXQtdmVydGljYWwnLCAnY2stdmVydGljYWwtZm9ybScgKTtcblx0XHR9XG5cblx0XHR0aGlzLnNldFRlbXBsYXRlKCB7XG5cdFx0XHR0YWc6ICdmb3JtJyxcblxuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRjbGFzczogY2xhc3NMaXN0LFxuXG5cdFx0XHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ja2VkaXRvci9ja2VkaXRvcjUtbGluay9pc3N1ZXMvOTBcblx0XHRcdFx0dGFiaW5kZXg6ICctMSdcblx0XHRcdH0sXG5cblx0XHRcdGNoaWxkcmVuOiB0aGlzLmNoaWxkcmVuXG5cdFx0fSApO1xuXG5cdFx0aW5qZWN0Q3NzVHJhbnNpdGlvbkRpc2FibGVyKCB0aGlzICk7XG5cdH1cblxuXHQvKipcblx0ICogT2J0YWlucyB0aGUgc3RhdGUgb2YgdGhlIHtAbGluayBtb2R1bGU6dWkvYnV0dG9uL3N3aXRjaGJ1dHRvbnZpZXd+U3dpdGNoQnV0dG9uVmlldyBzd2l0Y2ggYnV0dG9uc30gcmVwcmVzZW50aW5nXG5cdCAqIHtAbGluayBtb2R1bGU6bGluay9saW5rY29tbWFuZH5MaW5rQ29tbWFuZCNtYW51YWxEZWNvcmF0b3JzIG1hbnVhbCBsaW5rIGRlY29yYXRvcnN9XG5cdCAqIGluIHRoZSB7QGxpbmsgbW9kdWxlOmxpbmsvdWkvbGlua2Zvcm12aWV3fkxpbmtGb3JtVmlld30uXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtPYmplY3QuPFN0cmluZyxCb29sZWFuPn0gS2V5LXZhbHVlIHBhaXJzLCB3aGVyZSB0aGUga2V5IGlzIHRoZSBuYW1lIG9mIHRoZSBkZWNvcmF0b3IgYW5kIHRoZSB2YWx1ZSBpc1xuXHQgKiBpdHMgc3RhdGUuXG5cdCAqL1xuXHRnZXREZWNvcmF0b3JTd2l0Y2hlc1N0YXRlKCkge1xuXHRcdHJldHVybiBBcnJheS5mcm9tKCB0aGlzLl9tYW51YWxEZWNvcmF0b3JTd2l0Y2hlcyApLnJlZHVjZSggKCBhY2N1bXVsYXRvciwgc3dpdGNoQnV0dG9uICkgPT4ge1xuXHRcdFx0YWNjdW11bGF0b3JbIHN3aXRjaEJ1dHRvbi5uYW1lIF0gPSBzd2l0Y2hCdXR0b24uaXNPbjtcblx0XHRcdHJldHVybiBhY2N1bXVsYXRvcjtcblx0XHR9LCB7fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbmhlcml0RG9jXG5cdCAqL1xuXHRyZW5kZXIoKSB7XG5cdFx0c3VwZXIucmVuZGVyKCk7XG5cblx0XHRzdWJtaXRIYW5kbGVyKCB7XG5cdFx0XHR2aWV3OiB0aGlzXG5cdFx0fSApO1xuXG5cdFx0Y29uc3QgY2hpbGRWaWV3cyA9IFtcblx0XHRcdHRoaXMubGFiZWxJbnB1dFZpZXcsXG5cdFx0XHR0aGlzLnR5cGVJbnB1dFZpZXcsXG5cdFx0XHQuLi50aGlzLl9tYW51YWxEZWNvcmF0b3JTd2l0Y2hlcyxcblx0XHRcdHRoaXMuc2F2ZUJ1dHRvblZpZXcsXG5cdFx0XHR0aGlzLmNhbmNlbEJ1dHRvblZpZXdcblx0XHRdO1xuXG5cdFx0Y2hpbGRWaWV3cy5mb3JFYWNoKCB2ID0+IHtcblx0XHRcdC8vIFJlZ2lzdGVyIHRoZSB2aWV3IGFzIGZvY3VzYWJsZS5cblx0XHRcdHRoaXMuX2ZvY3VzYWJsZXMuYWRkKCB2ICk7XG5cblx0XHRcdC8vIFJlZ2lzdGVyIHRoZSB2aWV3IGluIHRoZSBmb2N1cyB0cmFja2VyLlxuXHRcdFx0dGhpcy5mb2N1c1RyYWNrZXIuYWRkKCB2LmVsZW1lbnQgKTtcblx0XHR9ICk7XG5cblx0XHQvLyBTdGFydCBsaXN0ZW5pbmcgZm9yIHRoZSBrZXlzdHJva2VzIGNvbWluZyBmcm9tICNlbGVtZW50LlxuXHRcdHRoaXMua2V5c3Ryb2tlcy5saXN0ZW5UbyggdGhpcy5lbGVtZW50ICk7XG5cdH1cblxuXHQvKipcblx0ICogRm9jdXNlcyB0aGUgZmlzdCB7QGxpbmsgI19mb2N1c2FibGVzfSBpbiB0aGUgZm9ybS5cblx0ICovXG5cdGZvY3VzKCkge1xuXHRcdHRoaXMuX2ZvY3VzQ3ljbGVyLmZvY3VzRmlyc3QoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgbGFiZWxlZCBpbnB1dCB2aWV3LlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcmV0dXJucyB7bW9kdWxlOnVpL2xhYmVsZWRmaWVsZC9sYWJlbGVkZmllbGR2aWV3fkxhYmVsZWRGaWVsZFZpZXd9IExhYmVsZWQgZmllbGQgdmlldyBpbnN0YW5jZS5cblx0ICovXG5cdF9jcmVhdGVUZXh0SW5wdXQobGFiZWwpIHtcblx0XHRjb25zdCB0ID0gdGhpcy5sb2NhbGUudDtcblx0XHRjb25zdCBsYWJlbGVkSW5wdXQgPSBuZXcgTGFiZWxlZEZpZWxkVmlldyggdGhpcy5sb2NhbGUsIGNyZWF0ZUxhYmVsZWRJbnB1dFRleHQgKTtcblxuXHRcdGxhYmVsZWRJbnB1dC5sYWJlbCA9IHQoIGxhYmVsICk7XG5cblx0XHRyZXR1cm4gbGFiZWxlZElucHV0O1xuXHR9XG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgbGFiZWxlZCBpbnB1dCB2aWV3LlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcmV0dXJucyB7bW9kdWxlOnVpL2xhYmVsZWRmaWVsZC9sYWJlbGVkZmllbGR2aWV3fkxhYmVsZWRGaWVsZFZpZXd9IExhYmVsZWQgZmllbGQgdmlldyBpbnN0YW5jZS5cblx0ICovXG5cdF9jcmVhdGVEcm9wRG93bklucHV0KGxhYmVsKSB7XG5cdFx0Y29uc3QgY3JlYXRlTGFiZWxlZERyb3Bkb3duID0gKCBsYWJlbGVkRmllbGRWaWV3LCB2aWV3VWlkLCBzdGF0dXNVaWQgKSA9PntcblxuXHRcdFx0Y29uc3QgZHJvcGRvd25WaWV3ID0gY3JlYXRlRHJvcGRvd24oIGxhYmVsZWRGaWVsZFZpZXcubG9jYWxlICwgU3BsaXRCdXR0b25WaWV3ICk7XG5cblx0XHRcdGRyb3Bkb3duVmlldy5zZXQoIHtcblx0XHRcdFx0aWQ6IHZpZXdVaWQsXG5cdFx0XHRcdGFyaWFEZXNjcmliZWRCeUlkOiBzdGF0dXNVaWRcblx0XHRcdH0gKTtcblx0XHRcdGRyb3Bkb3duVmlldy5idXR0b25WaWV3LnNldCgge1xuXHRcdFx0XHR0b29sdGlwOiB0cnVlLFxuXHRcdFx0XHR3aXRoVGV4dDogdHJ1ZSxcblx0XHRcdH0gKTtcblxuXHRcdFx0Y29uc3QgYnV0dG9ucyA9IFtdO1xuXHRcdFx0Ly8gQWRkIGFub3RoZXIgY29tcG9uZW50IHRvIHRoZSBhcnJheSBvZiB0b29sYmFyIGl0ZW1zLlxuXHRcdFx0YnV0dG9ucy5wdXNoKCB0aGlzLl9jcmVhdGVEcm9wZG93bkJ1dHRvbiggJ1Nob3J0IHRleHQnICkpO1xuXG5cdFx0XHQvLyBBZGQgYW5vdGhlciBjb21wb25lbnQgdG8gdGhlIGFycmF5IG9mIHRvb2xiYXIgaXRlbXMuXG5cdFx0XHRidXR0b25zLnB1c2goIHRoaXMuX2NyZWF0ZURyb3Bkb3duQnV0dG9uKCAgJ0xvbmcgdGV4dCcgKSApO1xuXG5cdFx0XHQvLyBDcmVhdGUgYSBkcm9wZG93biB3aXRoIGEgdG9vbGJhciBpbnNpZGUgdGhlIHBhbmVsLlxuXHRcdFx0YWRkVG9vbGJhclRvRHJvcGRvd24oIGRyb3Bkb3duVmlldywgYnV0dG9ucyApO1xuXG5cdFx0XHQvLyBUaGUgZGVmYXVsdCBpY29uIGlzIGFsaWduIGxlZnQgYXMgd2UgZG8gbm90IHN1cHBvcnQgUlRMIHlldCAoc2VlICMzKS5cblxuXHRcdFx0Ly8gQ2hhbmdlIGljb24gdG8gcmVmbGVjdCBjdXJyZW50IHNlbGVjdGlvbidzIGFsaWdubWVudC5cblx0XHRcdGRyb3Bkb3duVmlldy5iaW5kKCAnaXNFbmFibGVkJyApLnRvTWFueSggYnV0dG9ucywgJ2lzRW5hYmxlZCcsICggLi4uYXJlRW5hYmxlZCApID0+IGFyZUVuYWJsZWQuc29tZSggaXNFbmFibGVkID0+IGlzRW5hYmxlZCApICk7XG5cblx0XHRcdGRyb3Bkb3duVmlldy5idXR0b25WaWV3LmJpbmQoICdsYWJlbCcgKS50b01hbnkoIGJ1dHRvbnMsICdpc09uJywgKCAuLi5hcmVBY3RpdmUgKSA9PiB7XG5cdFx0XHRcdC8vIEdldCB0aGUgaW5kZXggb2YgYW4gYWN0aXZlIGJ1dHRvbi5cblx0XHRcdFx0Y29uc3QgaW5kZXggPSBhcmVBY3RpdmUuZmluZEluZGV4KCB2YWx1ZSA9PiB2YWx1ZSApO1xuXHRcdFx0XHQvLyBJZiBub25lIG9mIHRoZSBjb21tYW5kcyBpcyBhY3RpdmUsIGRpc3BsYXkgZWl0aGVyIGRlZmF1bHRJY29uIG9yIHRoZSBmaXJzdCBidXR0b24ncyBpY29uLlxuXHRcdFx0XHRpZiAoIGluZGV4IDwgMCApIHtcblx0XHRcdFx0XHRyZXR1cm4gYnV0dG9uc1sgMCBdLmxhYmVsO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gUmV0dXJuIGFjdGl2ZSBidXR0b24ncyBpY29uLlxuXHRcdFx0XHRyZXR1cm4gYnV0dG9uc1sgaW5kZXggXS5sYWJlbDtcblx0XHRcdH0gKTtcblx0XHRcdGRyb3Bkb3duVmlldy50b29sYmFyVmlldy5pc1ZlcnRpY2FsID0gdHJ1ZTtcblx0XHRcdC8vIEVuYWJsZSBidXR0b24gaWYgYW55IG9mIHRoZSBidXR0b25zIGlzIGVuYWJsZWQuXG5cdFx0XHRyZXR1cm4gZHJvcGRvd25WaWV3O1xuXHRcdH1cblx0XHRjb25zdCB0ID0gdGhpcy5sb2NhbGUudDtcblx0XHRjb25zdCBsYWJlbGVkSW5wdXQgPSBuZXcgTGFiZWxlZEZpZWxkVmlldyggdGhpcy5sb2NhbGUsIGNyZWF0ZUxhYmVsZWREcm9wZG93biApO1xuXG5cblxuXG5cdFx0cmV0dXJuIGxhYmVsZWRJbnB1dDtcblx0fVxuXHQvKipcblx0ICogQ3JlYXRlcyBhIGJ1dHRvbiB2aWV3LlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gbGFiZWwgVGhlIGJ1dHRvbiBsYWJlbC5cblx0ICogQHBhcmFtIHtTdHJpbmd9IGljb24gVGhlIGJ1dHRvbiBpY29uLlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIFRoZSBhZGRpdGlvbmFsIGJ1dHRvbiBDU1MgY2xhc3MgbmFtZS5cblx0ICogQHBhcmFtIHtTdHJpbmd9IFtldmVudE5hbWVdIEFuIGV2ZW50IG5hbWUgdGhhdCB0aGUgYEJ1dHRvblZpZXcjZXhlY3V0ZWAgZXZlbnQgd2lsbCBiZSBkZWxlZ2F0ZWQgdG8uXG5cdCAqIEByZXR1cm5zIHttb2R1bGU6dWkvYnV0dG9uL2J1dHRvbnZpZXd+QnV0dG9uVmlld30gVGhlIGJ1dHRvbiB2aWV3IGluc3RhbmNlLlxuXHQgKi9cblx0X2NyZWF0ZUJ1dHRvbiggbGFiZWwsIGljb24sIGNsYXNzTmFtZSwgZXZlbnROYW1lICkge1xuXHRcdGNvbnN0IGJ1dHRvbiA9IG5ldyBCdXR0b25WaWV3KCB0aGlzLmxvY2FsZSApO1xuXG5cdFx0YnV0dG9uLnNldCgge1xuXHRcdFx0bGFiZWwsXG5cdFx0XHRpY29uLFxuXHRcdFx0dG9vbHRpcDogdHJ1ZVxuXHRcdH0gKTtcblx0XHRpZiAodHlwZW9mIGNsYXNzTmFtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcblxuXHRcdFx0YnV0dG9uLmV4dGVuZFRlbXBsYXRlKCB7XG5cdFx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0XHRjbGFzczogY2xhc3NOYW1lXG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRpZiAoIGV2ZW50TmFtZSApIHtcblx0XHRcdGJ1dHRvbi5kZWxlZ2F0ZSggJ2V4ZWN1dGUnICkudG8oIHRoaXMsIGV2ZW50TmFtZSApO1xuXHRcdH1cblx0XHRyZXR1cm4gYnV0dG9uO1xuXHR9XG5cdF9jcmVhdGVEcm9wZG93bkJ1dHRvbiggbGFiZWwgKSB7XG5cdFx0Y29uc3QgYnV0dG9uID0gbmV3IEJ1dHRvblZpZXcoIHRoaXMubG9jYWxlICk7XG5cblx0XHRidXR0b24uc2V0KCB7XG5cdFx0XHRpc0VuYWJsZWQgOiB0cnVlLFxuXHRcdFx0bGFiZWwgOiBsYWJlbCxcblx0XHRcdHRvb2x0aXA6IHRydWUsXG5cdFx0XHR3aXRoVGV4dDogdHJ1ZVxuXHRcdH0gKTtcblx0XHQvLyBFeGVjdXRlIGNvbW1hbmQuXG5cdFx0dGhpcy5saXN0ZW5UbyggYnV0dG9uLCAnZXhlY3V0ZScsICgpID0+IHtcblx0XHRcdGJ1dHRvbi5pc09uID0gdHJ1ZTtcblx0XHR9ICk7XG5cdFx0cmV0dXJuIGJ1dHRvbjtcblx0fVxuXG5cdC8qKlxuXHQgKiBQb3B1bGF0ZXMge0BsaW5rIG1vZHVsZTp1aS92aWV3Y29sbGVjdGlvbn5WaWV3Q29sbGVjdGlvbn0gb2Yge0BsaW5rIG1vZHVsZTp1aS9idXR0b24vc3dpdGNoYnV0dG9udmlld35Td2l0Y2hCdXR0b25WaWV3fVxuXHQgKiBtYWRlIGJhc2VkIG9uIHtAbGluayBtb2R1bGU6bGluay9saW5rY29tbWFuZH5MaW5rQ29tbWFuZCNtYW51YWxEZWNvcmF0b3JzfS5cblx0ICpcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHttb2R1bGU6bGluay9saW5rY29tbWFuZH5MaW5rQ29tbWFuZH0gbGlua0NvbW1hbmQgQSByZWZlcmVuY2UgdG8gdGhlIGxpbmsgY29tbWFuZC5cblx0ICogQHJldHVybnMge21vZHVsZTp1aS92aWV3Y29sbGVjdGlvbn5WaWV3Q29sbGVjdGlvbn0gb2Ygc3dpdGNoIGJ1dHRvbnMuXG5cdCAqL1xuXHRfY3JlYXRlTWFudWFsRGVjb3JhdG9yU3dpdGNoZXMoIGxpbmtDb21tYW5kICkge1xuXHRcdGNvbnN0IHN3aXRjaGVzID0gdGhpcy5jcmVhdGVDb2xsZWN0aW9uKCk7XG5cblx0XHRmb3IgKCBjb25zdCBtYW51YWxEZWNvcmF0b3Igb2YgbGlua0NvbW1hbmQubWFudWFsRGVjb3JhdG9ycyApIHtcblx0XHRcdGNvbnN0IHN3aXRjaEJ1dHRvbiA9IG5ldyBTd2l0Y2hCdXR0b25WaWV3KCB0aGlzLmxvY2FsZSApO1xuXG5cdFx0XHRzd2l0Y2hCdXR0b24uc2V0KCB7XG5cdFx0XHRcdG5hbWU6IG1hbnVhbERlY29yYXRvci5pZCxcblx0XHRcdFx0bGFiZWw6IG1hbnVhbERlY29yYXRvci5sYWJlbCxcblx0XHRcdFx0d2l0aFRleHQ6IHRydWVcblx0XHRcdH0gKTtcblxuXHRcdFx0c3dpdGNoQnV0dG9uLmJpbmQoICdpc09uJyApLnRvTWFueSggWyBtYW51YWxEZWNvcmF0b3IsIGxpbmtDb21tYW5kIF0sICd2YWx1ZScsICggZGVjb3JhdG9yVmFsdWUsIGNvbW1hbmRWYWx1ZSApID0+IHtcblx0XHRcdFx0cmV0dXJuIGNvbW1hbmRWYWx1ZSA9PT0gdW5kZWZpbmVkICYmIGRlY29yYXRvclZhbHVlID09PSB1bmRlZmluZWQgPyBtYW51YWxEZWNvcmF0b3IuZGVmYXVsdFZhbHVlIDogZGVjb3JhdG9yVmFsdWU7XG5cdFx0XHR9ICk7XG5cblx0XHRcdHN3aXRjaEJ1dHRvbi5vbiggJ2V4ZWN1dGUnLCAoKSA9PiB7XG5cdFx0XHRcdG1hbnVhbERlY29yYXRvci5zZXQoICd2YWx1ZScsICFzd2l0Y2hCdXR0b24uaXNPbiApO1xuXHRcdFx0fSApO1xuXG5cdFx0XHRzd2l0Y2hlcy5hZGQoIHN3aXRjaEJ1dHRvbiApO1xuXHRcdH1cblxuXHRcdHJldHVybiBzd2l0Y2hlcztcblx0fVxuXG5cdC8qKlxuXHQgKiBQb3B1bGF0ZXMgdGhlIHtAbGluayAjY2hpbGRyZW59IGNvbGxlY3Rpb24gb2YgdGhlIGZvcm0uXG5cdCAqXG5cdCAqIElmIHtAbGluayBtb2R1bGU6bGluay9saW5rY29tbWFuZH5MaW5rQ29tbWFuZCNtYW51YWxEZWNvcmF0b3JzIG1hbnVhbCBkZWNvcmF0b3JzfSBhcmUgY29uZmlndXJlZCBpbiB0aGUgZWRpdG9yLCBpdCBjcmVhdGVzIGFuXG5cdCAqIGFkZGl0aW9uYWwgYFZpZXdgIHdyYXBwaW5nIGFsbCB7QGxpbmsgI19tYW51YWxEZWNvcmF0b3JTd2l0Y2hlc30gc3dpdGNoIGJ1dHRvbnMgY29ycmVzcG9uZGluZ1xuXHQgKiB0byB0aGVzZSBkZWNvcmF0b3JzLlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge21vZHVsZTp1dGlscy9jb2xsZWN0aW9ufkNvbGxlY3Rpb259IG1hbnVhbERlY29yYXRvcnMgQSByZWZlcmVuY2UgdG9cblx0ICogdGhlIGNvbGxlY3Rpb24gb2YgbWFudWFsIGRlY29yYXRvcnMgc3RvcmVkIGluIHRoZSBsaW5rIGNvbW1hbmQuXG5cdCAqIEByZXR1cm5zIHttb2R1bGU6dWkvdmlld2NvbGxlY3Rpb25+Vmlld0NvbGxlY3Rpb259IFRoZSBjaGlsZHJlbiBvZiBsaW5rIGZvcm0gdmlldy5cblx0ICovXG5cdF9jcmVhdGVGb3JtQ2hpbGRyZW4oIG1hbnVhbERlY29yYXRvcnMgKSB7XG5cdFx0Y29uc3QgY2hpbGRyZW4gPSB0aGlzLmNyZWF0ZUNvbGxlY3Rpb24oKTtcblxuXHRcdGNoaWxkcmVuLmFkZCggdGhpcy5sYWJlbElucHV0VmlldyApO1xuXHRcdGNoaWxkcmVuLmFkZCggdGhpcy50eXBlSW5wdXRWaWV3ICk7XG5cblx0XHRpZiAoIG1hbnVhbERlY29yYXRvcnMubGVuZ3RoICkge1xuXHRcdFx0Y29uc3QgYWRkaXRpb25hbEJ1dHRvbnNWaWV3ID0gbmV3IFZpZXcoKTtcblxuXHRcdFx0YWRkaXRpb25hbEJ1dHRvbnNWaWV3LnNldFRlbXBsYXRlKCB7XG5cdFx0XHRcdHRhZzogJ3VsJyxcblx0XHRcdFx0Y2hpbGRyZW46IHRoaXMuX21hbnVhbERlY29yYXRvclN3aXRjaGVzLm1hcCggc3dpdGNoQnV0dG9uID0+ICgge1xuXHRcdFx0XHRcdHRhZzogJ2xpJyxcblx0XHRcdFx0XHRjaGlsZHJlbjogWyBzd2l0Y2hCdXR0b24gXSxcblx0XHRcdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdFx0XHRjbGFzczogW1xuXHRcdFx0XHRcdFx0XHQnY2snLFxuXHRcdFx0XHRcdFx0XHQnY2stbGlzdF9faXRlbSdcblx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gKSApLFxuXHRcdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdFx0Y2xhc3M6IFtcblx0XHRcdFx0XHRcdCdjaycsXG5cdFx0XHRcdFx0XHQnY2stcmVzZXQnLFxuXHRcdFx0XHRcdFx0J2NrLWxpc3QnXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0XHRjaGlsZHJlbi5hZGQoIGFkZGl0aW9uYWxCdXR0b25zVmlldyApO1xuXHRcdH1cblxuXHRcdGNoaWxkcmVuLmFkZCggdGhpcy5zYXZlQnV0dG9uVmlldyApO1xuXHRcdGNoaWxkcmVuLmFkZCggdGhpcy5jYW5jZWxCdXR0b25WaWV3ICk7XG5cblx0XHRyZXR1cm4gY2hpbGRyZW47XG5cdH1cbn1cblxuLyoqXG4gKiBGaXJlZCB3aGVuIHRoZSBmb3JtIHZpZXcgaXMgc3VibWl0dGVkICh3aGVuIG9uZSBvZiB0aGUgY2hpbGRyZW4gdHJpZ2dlcmVkIHRoZSBzdWJtaXQgZXZlbnQpLFxuICogZm9yIGV4YW1wbGUgd2l0aCBhIGNsaWNrIG9uIHtAbGluayAjc2F2ZUJ1dHRvblZpZXd9LlxuICpcbiAqIEBldmVudCBzdWJtaXRcbiAqL1xuXG4vKipcbiAqIEZpcmVkIHdoZW4gdGhlIGZvcm0gdmlldyBpcyBjYW5jZWxlZCwgZm9yIGV4YW1wbGUgd2l0aCBhIGNsaWNrIG9uIHtAbGluayAjY2FuY2VsQnV0dG9uVmlld30uXG4gKlxuICogQGV2ZW50IGNhbmNlbFxuICovXG4iLCIvKipcbiAqIEBsaWNlbnNlIENvcHlyaWdodCAoYykgMjAwMy0yMDIxLCBDS1NvdXJjZSAtIEZyZWRlcmljbyBLbmFiYmVuLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogRm9yIGxpY2Vuc2luZywgc2VlIExJQ0VOU0UubWQgb3IgaHR0cHM6Ly9ja2VkaXRvci5jb20vbGVnYWwvY2tlZGl0b3Itb3NzLWxpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGluay91dGlsc1xuICovXG5cbmltcG9ydCB7IHVwcGVyRmlyc3QgfSBmcm9tICdsb2Rhc2gtZXMnO1xuXG5jb25zdCBBVFRSSUJVVEVfV0hJVEVTUEFDRVMgPSAvW1xcdTAwMDAtXFx1MDAyMFxcdTAwQTBcXHUxNjgwXFx1MTgwRVxcdTIwMDAtXFx1MjAyOVxcdTIwNWZcXHUzMDAwXS9nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnRyb2wtcmVnZXhcbmNvbnN0IFNBRkVfVVJMID0gL14oPzooPzpodHRwcz98ZnRwcz98bWFpbHRvKTp8W15hLXpdfFthLXorLi1dKyg/OlteYS16Ky46LV18JCkpL2k7XG5cbi8vIFNpbXBsaWZpZWQgZW1haWwgdGVzdCAtIHNob3VsZCBiZSBydW4gb3ZlciBwcmV2aW91c2x5IGZvdW5kIFVSTC5cbmNvbnN0IEVNQUlMX1JFR19FWFAgPSAvXltcXFNdK0AoKD8hWy1fXSkoPzpbLVxcd1xcdTAwYTEtXFx1ZmZmZl17MCw2M31bXi1fXVxcLikpKyg/OlthLXpcXHUwMGExLVxcdWZmZmZdezIsfSkkL2k7XG5cbi8vIFRoZSByZWdleCBjaGVja3MgZm9yIHRoZSBwcm90b2NvbCBzeW50YXggKCd4eHh4Oi8vJyBvciAneHh4eDonKVxuLy8gb3Igbm9uLXdvcmQgY2hhcmFjdGVycyBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBsaW5rICgnLycsICcjJyBldGMuKS5cbmNvbnN0IFBST1RPQ09MX1JFR19FWFAgPSAvXigoXFx3KzooXFwvezIsfSk/KXwoXFxXKSkvaTtcbmNvbnN0IEhJR0hMSUdIVF9DTEFTUyA9ICdjay10ZW1wbGF0ZSc7XG4vKipcbiAqIEEga2V5c3Ryb2tlIHVzZWQgYnkgdGhlIHtAbGluayBtb2R1bGU6bGluay9saW5rdWl+VGVtcGxhdGVVaSBsaW5rIFVJIGZlYXR1cmV9LlxuICovXG5leHBvcnQgY29uc3QgTElOS19LRVlTVFJPS0UgPSAnQ3RybCtFJztcblxuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiBhIGdpdmVuIHZpZXcgbm9kZSBpcyB0aGUgbGluayBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmVuZ2luZS92aWV3L25vZGV+Tm9kZX0gbm9kZVxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xpbmtFbGVtZW50KCBub2RlICkge1xuXHRyZXR1cm4gbm9kZS5pcyggJ2F0dHJpYnV0ZUVsZW1lbnQnICkgJiYgISFub2RlLmdldEN1c3RvbVByb3BlcnR5KCAnbGluaycgKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbGluayB7QGxpbmsgbW9kdWxlOmVuZ2luZS92aWV3L2F0dHJpYnV0ZWVsZW1lbnR+QXR0cmlidXRlRWxlbWVudH0gd2l0aCB0aGUgcHJvdmlkZWQgYGhyZWZgIGF0dHJpYnV0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaHJlZlxuICogQHBhcmFtIHttb2R1bGU6ZW5naW5lL2NvbnZlcnNpb24vZG93bmNhc3RkaXNwYXRjaGVyfkRvd25jYXN0Q29udmVyc2lvbkFwaX0gY29udmVyc2lvbkFwaVxuICogQHJldHVybnMge21vZHVsZTplbmdpbmUvdmlldy9hdHRyaWJ1dGVlbGVtZW50fkF0dHJpYnV0ZUVsZW1lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUZW1wbGF0ZUVsZW1lbnQoIGlkLCB7IHdyaXRlciB9ICkge1xuXHQvLyBQcmlvcml0eSA1IC0gaHR0cHM6Ly9naXRodWIuY29tL2NrZWRpdG9yL2NrZWRpdG9yNS1saW5rL2lzc3Vlcy8xMjEuXG5cdGNvbnN0IGxpbmtFbGVtZW50ID0gd3JpdGVyLmNyZWF0ZUF0dHJpYnV0ZUVsZW1lbnQoICdzcGFuJywgIHsgY2xhc3M6IEhJR0hMSUdIVF9DTEFTUyB9LHsgaWQgOiBpZCB9LCB7IHByaW9yaXR5OiA1IH0gKTtcblx0d3JpdGVyLnNldEN1c3RvbVByb3BlcnR5KCAnaWQnLCB0cnVlLCBsaW5rRWxlbWVudCApO1xuXG5cdHJldHVybiBsaW5rRWxlbWVudDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc2FmZSBVUkwgYmFzZWQgb24gYSBnaXZlbiB2YWx1ZS5cbiAqXG4gKiBBIFVSTCBpcyBjb25zaWRlcmVkIHNhZmUgaWYgaXQgaXMgc2FmZSBmb3IgdGhlIHVzZXIgKGRvZXMgbm90IGNvbnRhaW4gYW55IG1hbGljaW91cyBjb2RlKS5cbiAqXG4gKiBJZiBhIFVSTCBpcyBjb25zaWRlcmVkIHVuc2FmZSwgYSBzaW1wbGUgYFwiI1wiYCBpcyByZXR1cm5lZC5cbiAqXG4gKiBAcHJvdGVjdGVkXG4gKiBAcGFyYW0geyp9IHVybFxuICogQHJldHVybnMge1N0cmluZ30gU2FmZSBVUkwuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbnN1cmVTYWZlVXJsKCB1cmwgKSB7XG5cdHVybCA9IFN0cmluZyggdXJsICk7XG5cblx0cmV0dXJuIGlzU2FmZVVybCggdXJsICkgPyB1cmwgOiAnIyc7XG59XG5cbi8vIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBVUkwgaXMgc2FmZSBmb3IgdGhlIHVzZXIgKGRvZXMgbm90IGNvbnRhaW4gYW55IG1hbGljaW91cyBjb2RlKS5cbi8vXG4vLyBAcGFyYW0ge1N0cmluZ30gdXJsIFVSTCB0byBjaGVjay5cbmZ1bmN0aW9uIGlzU2FmZVVybCggdXJsICkge1xuXHRjb25zdCBub3JtYWxpemVkVXJsID0gdXJsLnJlcGxhY2UoIEFUVFJJQlVURV9XSElURVNQQUNFUywgJycgKTtcblxuXHRyZXR1cm4gbm9ybWFsaXplZFVybC5tYXRjaCggU0FGRV9VUkwgKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSB7QGxpbmsgbW9kdWxlOmxpbmsvbGlua35MaW5rQ29uZmlnI2RlY29yYXRvcnMgYGNvbmZpZy5saW5rLmRlY29yYXRvcnNgfSBjb25maWd1cmF0aW9uIHByb2Nlc3NlZFxuICogdG8gcmVzcGVjdCB0aGUgbG9jYWxlIG9mIHRoZSBlZGl0b3IsIGkuZS4gdG8gZGlzcGxheSB0aGUge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt+TGlua0RlY29yYXRvck1hbnVhbERlZmluaXRpb24gbGFiZWx9XG4gKiBpbiB0aGUgY29ycmVjdCBsYW5ndWFnZS5cbiAqXG4gKiAqKk5vdGUqKjogT25seSB0aGUgZmV3IG1vc3QgY29tbW9ubHkgdXNlZCBsYWJlbHMgYXJlIHRyYW5zbGF0ZWQgYXV0b21hdGljYWxseS4gT3RoZXIgbGFiZWxzIHNob3VsZCBiZSBtYW51YWxseVxuICogdHJhbnNsYXRlZCBpbiB0aGUge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt+TGlua0NvbmZpZyNkZWNvcmF0b3JzIGBjb25maWcubGluay5kZWNvcmF0b3JzYH0gY29uZmlndXJhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTp1dGlscy9sb2NhbGV+TG9jYWxlI3R9IHQgc2hvcnRoYW5kIGZvciB7QGxpbmsgbW9kdWxlOnV0aWxzL2xvY2FsZX5Mb2NhbGUjdCBMb2NhbGUjdH1cbiAqIEBwYXJhbSB7QXJyYXkuPG1vZHVsZTpsaW5rL2xpbmt+TGlua0RlY29yYXRvckRlZmluaXRpb24+fSBUaGUgZGVjb3JhdG9yIHJlZmVyZW5jZVxuICogd2hlcmUgdGhlIGxhYmVsIHZhbHVlcyBzaG91bGQgYmUgbG9jYWxpemVkLlxuICogQHJldHVybnMge0FycmF5Ljxtb2R1bGU6bGluay9saW5rfkxpbmtEZWNvcmF0b3JEZWZpbml0aW9uPn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2FsaXplZERlY29yYXRvcnMoIHQsIGRlY29yYXRvcnMgKSB7XG5cdGNvbnN0IGxvY2FsaXplZERlY29yYXRvcnNMYWJlbHMgPSB7XG5cdFx0J09wZW4gaW4gYSBuZXcgdGFiJzogdCggJ09wZW4gaW4gYSBuZXcgdGFiJyApLFxuXHRcdCdEb3dubG9hZGFibGUnOiB0KCAnRG93bmxvYWRhYmxlJyApXG5cdH07XG5cblx0ZGVjb3JhdG9ycy5mb3JFYWNoKCBkZWNvcmF0b3IgPT4ge1xuXHRcdGlmICggZGVjb3JhdG9yLmxhYmVsICYmIGxvY2FsaXplZERlY29yYXRvcnNMYWJlbHNbIGRlY29yYXRvci5sYWJlbCBdICkge1xuXHRcdFx0ZGVjb3JhdG9yLmxhYmVsID0gbG9jYWxpemVkRGVjb3JhdG9yc0xhYmVsc1sgZGVjb3JhdG9yLmxhYmVsIF07XG5cdFx0fVxuXHRcdHJldHVybiBkZWNvcmF0b3I7XG5cdH0gKTtcblxuXHRyZXR1cm4gZGVjb3JhdG9ycztcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhbiBvYmplY3Qgd2l0aCBkZWZpbmVkIGRlY29yYXRvcnMgdG8gYSBub3JtYWxpemVkIGFycmF5IG9mIGRlY29yYXRvcnMuIFRoZSBgaWRgIGtleSBpcyBhZGRlZCBmb3IgZWFjaCBkZWNvcmF0b3IgYW5kXG4gKiBpcyB1c2VkIGFzIHRoZSBhdHRyaWJ1dGUncyBuYW1lIGluIHRoZSBtb2RlbC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdC48U3RyaW5nLCBtb2R1bGU6bGluay9saW5rfkxpbmtEZWNvcmF0b3JEZWZpbml0aW9uPn0gZGVjb3JhdG9yc1xuICogQHJldHVybnMge0FycmF5Ljxtb2R1bGU6bGluay9saW5rfkxpbmtEZWNvcmF0b3JEZWZpbml0aW9uPn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZURlY29yYXRvcnMoIGRlY29yYXRvcnMgKSB7XG5cdGNvbnN0IHJldEFycmF5ID0gW107XG5cblx0aWYgKCBkZWNvcmF0b3JzICkge1xuXHRcdGZvciAoIGNvbnN0IFsga2V5LCB2YWx1ZSBdIG9mIE9iamVjdC5lbnRyaWVzKCBkZWNvcmF0b3JzICkgKSB7XG5cdFx0XHRjb25zdCBkZWNvcmF0b3IgPSBPYmplY3QuYXNzaWduKFxuXHRcdFx0XHR7fSxcblx0XHRcdFx0dmFsdWUsXG5cdFx0XHRcdHsgaWQ6IGBsaW5rJHsgdXBwZXJGaXJzdCgga2V5ICkgfWAgfVxuXHRcdFx0KTtcblx0XHRcdHJldEFycmF5LnB1c2goIGRlY29yYXRvciApO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiByZXRBcnJheTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgc3BlY2lmaWVkIGBlbGVtZW50YCBpcyBhbiBpbWFnZSBhbmQgaXQgY2FuIGJlIGxpbmtlZCAodGhlIGVsZW1lbnQgYWxsb3dzIGhhdmluZyB0aGUgYGxpbmtIcmVmYCBhdHRyaWJ1dGUpLlxuICpcbiAqIEBwYXJhbXMge21vZHVsZTplbmdpbmUvbW9kZWwvZWxlbWVudH5FbGVtZW50fG51bGx9IGVsZW1lbnRcbiAqIEBwYXJhbXMge21vZHVsZTplbmdpbmUvbW9kZWwvc2NoZW1hflNjaGVtYX0gc2NoZW1hXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzSW1hZ2VBbGxvd2VkKCBlbGVtZW50LCBzY2hlbWEgKSB7XG5cdGlmICggIWVsZW1lbnQgKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIGVsZW1lbnQuaXMoICdlbGVtZW50JywgJ2ltYWdlJyApICYmIHNjaGVtYS5jaGVja0F0dHJpYnV0ZSggJ2ltYWdlJywgJ2xpbmtIcmVmJyApO1xufVxuXG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBzcGVjaWZpZWQgYHZhbHVlYCBpcyBhbiBlbWFpbC5cbiAqXG4gKiBAcGFyYW1zIHtTdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRW1haWwoIHZhbHVlICkge1xuXHRyZXR1cm4gRU1BSUxfUkVHX0VYUC50ZXN0KCB2YWx1ZSApO1xufVxuXG4vKipcbiAqIEFkZHMgdGhlIHByb3RvY29sIHByZWZpeCB0byB0aGUgc3BlY2lmaWVkIGBsaW5rYCB3aGVuOlxuICpcbiAqICogaXQgZG9lcyBub3QgY29udGFpbiBpdCBhbHJlYWR5LCBhbmQgdGhlcmUgaXMgYSB7QGxpbmsgbW9kdWxlOmxpbmsvbGlua35MaW5rQ29uZmlnI2RlZmF1bHRQcm90b2NvbCBgZGVmYXVsdFByb3RvY29sYCB9XG4gKiBjb25maWd1cmF0aW9uIHZhbHVlIHByb3ZpZGVkLFxuICogKiBvciB0aGUgbGluayBpcyBhbiBlbWFpbCBhZGRyZXNzLlxuICpcbiAqXG4gKiBAcGFyYW1zIHtTdHJpbmd9IGxpbmtcbiAqIEBwYXJhbXMge1N0cmluZ30gZGVmYXVsdFByb3RvY29sXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZExpbmtQcm90b2NvbElmQXBwbGljYWJsZSggbGluaywgZGVmYXVsdFByb3RvY29sICkge1xuXHRjb25zdCBwcm90b2NvbCA9IGlzRW1haWwoIGxpbmsgKSA/ICdtYWlsdG86JyA6IGRlZmF1bHRQcm90b2NvbDtcblx0Y29uc3QgaXNQcm90b2NvbE5lZWRlZCA9ICEhcHJvdG9jb2wgJiYgIVBST1RPQ09MX1JFR19FWFAudGVzdCggbGluayApO1xuXG5cdHJldHVybiBsaW5rICYmIGlzUHJvdG9jb2xOZWVkZWQgPyBwcm90b2NvbCArIGxpbmsgOiBsaW5rO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZSBDb3B5cmlnaHQgKGMpIDIwMDMtMjAyMSwgQ0tTb3VyY2UgLSBGcmVkZXJpY28gS25hYmJlbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIEZvciBsaWNlbnNpbmcsIHNlZSBMSUNFTlNFLm1kLlxuICovXG5cbi8qKlxuICogQG1vZHVsZSBsaW5rL3V0aWxzXG4gKi9cblxuaW1wb3J0IHsgdG9NYXAgfSBmcm9tICdja2VkaXRvcjUvc3JjL3V0aWxzJztcblxuLyoqXG4gKiBIZWxwZXIgY2xhc3MgdGhhdCB0aWVzIHRvZ2V0aGVyIGFsbCB7QGxpbmsgbW9kdWxlOmxpbmsvbGlua35MaW5rRGVjb3JhdG9yQXV0b21hdGljRGVmaW5pdGlvbn0gYW5kIHByb3ZpZGVzXG4gKiB0aGUge0BsaW5rIG1vZHVsZTplbmdpbmUvY29udmVyc2lvbi9kb3duY2FzdGhlbHBlcnN+RG93bmNhc3RIZWxwZXJzI2F0dHJpYnV0ZVRvRWxlbWVudCBkb3duY2FzdCBkaXNwYXRjaGVyc30gZm9yIHRoZW0uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9tYXRpY0RlY29yYXRvcnMge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHQvKipcblx0XHQgKiBTdG9yZXMgdGhlIGRlZmluaXRpb24gb2Yge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt+TGlua0RlY29yYXRvckF1dG9tYXRpY0RlZmluaXRpb24gYXV0b21hdGljIGRlY29yYXRvcnN9LlxuXHRcdCAqIFRoaXMgZGF0YSBpcyB1c2VkIGFzIGEgc291cmNlIGZvciBhIGRvd25jYXN0IGRpc3BhdGNoZXIgdG8gY3JlYXRlIGEgcHJvcGVyIGNvbnZlcnNpb24gdG8gb3V0cHV0IGRhdGEuXG5cdFx0ICpcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqIEB0eXBlIHtTZXR9XG5cdFx0ICovXG5cdFx0dGhpcy5fZGVmaW5pdGlvbnMgPSBuZXcgU2V0KCk7XG5cdH1cblxuXHQvKipcblx0ICogR2l2ZXMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIG51bWJlciBvZiBkZWNvcmF0b3JzIHN0b3JlZCBpbiB0aGUge0BsaW5rIG1vZHVsZTpsaW5rL3V0aWxzfkF1dG9tYXRpY0RlY29yYXRvcnN9IGluc3RhbmNlLlxuXHQgKlxuXHQgKiBAcmVhZG9ubHlcblx0ICogQHByb3RlY3RlZFxuXHQgKiBAdHlwZSB7TnVtYmVyfVxuXHQgKi9cblx0Z2V0IGxlbmd0aCgpIHtcblx0XHRyZXR1cm4gdGhpcy5fZGVmaW5pdGlvbnMuc2l6ZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBBZGRzIGF1dG9tYXRpYyBkZWNvcmF0b3Igb2JqZWN0cyBvciBhbiBhcnJheSB3aXRoIHRoZW0gdG8gYmUgdXNlZCBkdXJpbmcgZG93bmNhc3RpbmcuXG5cdCAqXG5cdCAqIEBwYXJhbSB7bW9kdWxlOmxpbmsvbGlua35MaW5rRGVjb3JhdG9yQXV0b21hdGljRGVmaW5pdGlvbnxBcnJheS48bW9kdWxlOmxpbmsvbGlua35MaW5rRGVjb3JhdG9yQXV0b21hdGljRGVmaW5pdGlvbj59IGl0ZW1cblx0ICogQSBjb25maWd1cmF0aW9uIG9iamVjdCBvZiBhdXRvbWF0aWMgcnVsZXMgZm9yIGRlY29yYXRpbmcgbGlua3MuIEl0IG1pZ2h0IGFsc28gYmUgYW4gYXJyYXkgb2Ygc3VjaCBvYmplY3RzLlxuXHQgKi9cblx0YWRkKCBpdGVtICkge1xuXHRcdGlmICggQXJyYXkuaXNBcnJheSggaXRlbSApICkge1xuXHRcdFx0aXRlbS5mb3JFYWNoKCBpdGVtID0+IHRoaXMuX2RlZmluaXRpb25zLmFkZCggaXRlbSApICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX2RlZmluaXRpb25zLmFkZCggaXRlbSApO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBQcm92aWRlcyB0aGUgY29udmVyc2lvbiBoZWxwZXIgdXNlZCBpbiB0aGUge0BsaW5rIG1vZHVsZTplbmdpbmUvY29udmVyc2lvbi9kb3duY2FzdGhlbHBlcnN+RG93bmNhc3RIZWxwZXJzI2FkZH0gbWV0aG9kLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZGlzcGF0Y2hlciBmdW5jdGlvbiB1c2VkIGFzIGNvbnZlcnNpb24gaGVscGVyXG5cdCAqIGluIHtAbGluayBtb2R1bGU6ZW5naW5lL2NvbnZlcnNpb24vZG93bmNhc3RoZWxwZXJzfkRvd25jYXN0SGVscGVycyNhZGR9LlxuXHQgKi9cblx0Z2V0RGlzcGF0Y2hlcigpIHtcblx0XHRyZXR1cm4gZGlzcGF0Y2hlciA9PiB7XG5cdFx0XHRkaXNwYXRjaGVyLm9uKCAnYXR0cmlidXRlOmxpbmtIcmVmJywgKCBldnQsIGRhdGEsIGNvbnZlcnNpb25BcGkgKSA9PiB7XG5cdFx0XHRcdC8vIFRoZXJlIGlzIG9ubHkgdGVzdCBhcyB0aGlzIGJlaGF2aW9yIGRlY29yYXRlcyBsaW5rcyBhbmRcblx0XHRcdFx0Ly8gaXQgaXMgcnVuIGJlZm9yZSBkaXNwYXRjaGVyIHdoaWNoIGFjdHVhbGx5IGNvbnN1bWVzIHRoaXMgbm9kZS5cblx0XHRcdFx0Ly8gVGhpcyBhbGxvd3Mgb24gd3JpdGluZyBvd24gZGlzcGF0Y2hlciB3aXRoIGhpZ2hlc3QgcHJpb3JpdHksXG5cdFx0XHRcdC8vIHdoaWNoIGJsb2NrcyBib3RoIG5hdGl2ZSBjb252ZXJ0ZXIgYW5kIHRoaXMgYWRkaXRpb25hbCBkZWNvcmF0aW9uLlxuXHRcdFx0XHRpZiAoICFjb252ZXJzaW9uQXBpLmNvbnN1bWFibGUudGVzdCggZGF0YS5pdGVtLCAnYXR0cmlidXRlOmxpbmtIcmVmJyApICkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCB2aWV3V3JpdGVyID0gY29udmVyc2lvbkFwaS53cml0ZXI7XG5cdFx0XHRcdGNvbnN0IHZpZXdTZWxlY3Rpb24gPSB2aWV3V3JpdGVyLmRvY3VtZW50LnNlbGVjdGlvbjtcblxuXHRcdFx0XHRmb3IgKCBjb25zdCBpdGVtIG9mIHRoaXMuX2RlZmluaXRpb25zICkge1xuXHRcdFx0XHRcdGNvbnN0IHZpZXdFbGVtZW50ID0gdmlld1dyaXRlci5jcmVhdGVBdHRyaWJ1dGVFbGVtZW50KCAnYScsIGl0ZW0uYXR0cmlidXRlcywge1xuXHRcdFx0XHRcdFx0cHJpb3JpdHk6IDVcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0dmlld1dyaXRlci5zZXRDdXN0b21Qcm9wZXJ0eSggJ2xpbmsnLCB0cnVlLCB2aWV3RWxlbWVudCApO1xuXHRcdFx0XHRcdGlmICggaXRlbS5jYWxsYmFjayggZGF0YS5hdHRyaWJ1dGVOZXdWYWx1ZSApICkge1xuXHRcdFx0XHRcdFx0aWYgKCBkYXRhLml0ZW0uaXMoICdzZWxlY3Rpb24nICkgKSB7XG5cdFx0XHRcdFx0XHRcdHZpZXdXcml0ZXIud3JhcCggdmlld1NlbGVjdGlvbi5nZXRGaXJzdFJhbmdlKCksIHZpZXdFbGVtZW50ICk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR2aWV3V3JpdGVyLndyYXAoIGNvbnZlcnNpb25BcGkubWFwcGVyLnRvVmlld1JhbmdlKCBkYXRhLnJhbmdlICksIHZpZXdFbGVtZW50ICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHZpZXdXcml0ZXIudW53cmFwKCBjb252ZXJzaW9uQXBpLm1hcHBlci50b1ZpZXdSYW5nZSggZGF0YS5yYW5nZSApLCB2aWV3RWxlbWVudCApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSwgeyBwcmlvcml0eTogJ2hpZ2gnIH0gKTtcblx0XHR9O1xuXHR9XG5cblx0LyoqXG5cdCAqIFByb3ZpZGVzIHRoZSBjb252ZXJzaW9uIGhlbHBlciB1c2VkIGluIHRoZSB7QGxpbmsgbW9kdWxlOmVuZ2luZS9jb252ZXJzaW9uL2Rvd25jYXN0aGVscGVyc35Eb3duY2FzdEhlbHBlcnMjYWRkfSBtZXRob2Rcblx0ICogd2hlbiBsaW5raW5nIGltYWdlcy5cblx0ICpcblx0ICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGRpc3BhdGNoZXIgZnVuY3Rpb24gdXNlZCBhcyBjb252ZXJzaW9uIGhlbHBlclxuXHQgKiBpbiB7QGxpbmsgbW9kdWxlOmVuZ2luZS9jb252ZXJzaW9uL2Rvd25jYXN0aGVscGVyc35Eb3duY2FzdEhlbHBlcnMjYWRkfS5cblx0ICovXG5cdGdldERpc3BhdGNoZXJGb3JMaW5rZWRJbWFnZSgpIHtcblx0XHRyZXR1cm4gZGlzcGF0Y2hlciA9PiB7XG5cdFx0XHRkaXNwYXRjaGVyLm9uKCAnYXR0cmlidXRlOmxpbmtIcmVmOmltYWdlJywgKCBldnQsIGRhdGEsIGNvbnZlcnNpb25BcGkgKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHZpZXdGaWd1cmUgPSBjb252ZXJzaW9uQXBpLm1hcHBlci50b1ZpZXdFbGVtZW50KCBkYXRhLml0ZW0gKTtcblx0XHRcdFx0Y29uc3QgbGlua0luSW1hZ2UgPSBBcnJheS5mcm9tKCB2aWV3RmlndXJlLmdldENoaWxkcmVuKCkgKS5maW5kKCBjaGlsZCA9PiBjaGlsZC5uYW1lID09PSAnYScgKTtcblxuXHRcdFx0XHRmb3IgKCBjb25zdCBpdGVtIG9mIHRoaXMuX2RlZmluaXRpb25zICkge1xuXHRcdFx0XHRcdGNvbnN0IGF0dHJpYnV0ZXMgPSB0b01hcCggaXRlbS5hdHRyaWJ1dGVzICk7XG5cblx0XHRcdFx0XHRpZiAoIGl0ZW0uY2FsbGJhY2soIGRhdGEuYXR0cmlidXRlTmV3VmFsdWUgKSApIHtcblx0XHRcdFx0XHRcdGZvciAoIGNvbnN0IFsga2V5LCB2YWwgXSBvZiBhdHRyaWJ1dGVzICkge1xuXHRcdFx0XHRcdFx0XHRpZiAoIGtleSA9PT0gJ2NsYXNzJyApIHtcblx0XHRcdFx0XHRcdFx0XHRjb252ZXJzaW9uQXBpLndyaXRlci5hZGRDbGFzcyggdmFsLCBsaW5rSW5JbWFnZSApO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnZlcnNpb25BcGkud3JpdGVyLnNldEF0dHJpYnV0ZSgga2V5LCB2YWwsIGxpbmtJbkltYWdlICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Zm9yICggY29uc3QgWyBrZXksIHZhbCBdIG9mIGF0dHJpYnV0ZXMgKSB7XG5cdFx0XHRcdFx0XHRcdGlmICgga2V5ID09PSAnY2xhc3MnICkge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnZlcnNpb25BcGkud3JpdGVyLnJlbW92ZUNsYXNzKCB2YWwsIGxpbmtJbkltYWdlICk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29udmVyc2lvbkFwaS53cml0ZXIucmVtb3ZlQXR0cmlidXRlKCBrZXksIGxpbmtJbkltYWdlICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9O1xuXHR9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlIENvcHlyaWdodCAoYykgMjAwMy0yMDIxLCBDS1NvdXJjZSAtIEZyZWRlcmljbyBLbmFiYmVuLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogRm9yIGxpY2Vuc2luZywgc2VlIExJQ0VOU0UubWQgb3IgaHR0cHM6Ly9ja2VkaXRvci5jb20vbGVnYWwvY2tlZGl0b3Itb3NzLWxpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGluay91dGlsc1xuICovXG5cbmltcG9ydCB7IE9ic2VydmFibGVNaXhpbiwgbWl4IH0gZnJvbSAnY2tlZGl0b3I1L3NyYy91dGlscyc7XG5cbi8qKlxuICogSGVscGVyIGNsYXNzIHRoYXQgc3RvcmVzIG1hbnVhbCBkZWNvcmF0b3JzIHdpdGggb2JzZXJ2YWJsZSB7QGxpbmsgbW9kdWxlOmxpbmsvdXRpbHN+TWFudWFsRGVjb3JhdG9yI3ZhbHVlfVxuICogdG8gc3VwcG9ydCBpbnRlZ3JhdGlvbiB3aXRoIHRoZSBVSSBzdGF0ZS4gQW4gaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBpcyBhIG1vZGVsIHdpdGggdGhlIHN0YXRlIG9mIGluZGl2aWR1YWwgbWFudWFsIGRlY29yYXRvcnMuXG4gKiBUaGVzZSBkZWNvcmF0b3JzIGFyZSBrZXB0IGFzIGNvbGxlY3Rpb25zIGluIHtAbGluayBtb2R1bGU6bGluay9saW5rY29tbWFuZH5MaW5rQ29tbWFuZCNtYW51YWxEZWNvcmF0b3JzfS5cbiAqXG4gKiBAbWl4ZXMgbW9kdWxlOnV0aWxzL29ic2VydmFibGVtaXhpbn5PYnNlcnZhYmxlTWl4aW5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFudWFsRGVjb3JhdG9yIHtcblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2Yge0BsaW5rIG1vZHVsZTpsaW5rL3V0aWxzfk1hbnVhbERlY29yYXRvcn0uXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcblx0ICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5pZCBUaGUgbmFtZSBvZiB0aGUgYXR0cmlidXRlIHVzZWQgaW4gdGhlIG1vZGVsIHRoYXQgcmVwcmVzZW50cyBhIGdpdmVuIG1hbnVhbCBkZWNvcmF0b3IuXG5cdCAqIEZvciBleGFtcGxlOiBgJ2xpbmtJc0V4dGVybmFsJ2AuXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcubGFiZWwgVGhlIGxhYmVsIHVzZWQgaW4gdGhlIHVzZXIgaW50ZXJmYWNlIHRvIHRvZ2dsZSB0aGUgbWFudWFsIGRlY29yYXRvci5cblx0ICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZy5hdHRyaWJ1dGVzIEEgc2V0IG9mIGF0dHJpYnV0ZXMgYWRkZWQgdG8gb3V0cHV0IGRhdGEgd2hlbiB0aGUgZGVjb3JhdG9yIGlzIGFjdGl2ZSBmb3IgYSBzcGVjaWZpYyBsaW5rLlxuXHQgKiBBdHRyaWJ1dGVzIHNob3VsZCBrZWVwIHRoZSBmb3JtYXQgb2YgYXR0cmlidXRlcyBkZWZpbmVkIGluIHtAbGluayBtb2R1bGU6ZW5naW5lL3ZpZXcvZWxlbWVudGRlZmluaXRpb25+RWxlbWVudERlZmluaXRpb259LlxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IFtjb25maWcuZGVmYXVsdFZhbHVlXSBDb250cm9scyB3aGV0aGVyIHRoZSBkZWNvcmF0b3IgaXMgXCJvblwiIGJ5IGRlZmF1bHQuXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggeyBpZCwgbGFiZWwsIGF0dHJpYnV0ZXMsIGRlZmF1bHRWYWx1ZSB9ICkge1xuXHRcdC8qKlxuXHRcdCAqIEFuIElEIG9mIGEgbWFudWFsIGRlY29yYXRvciB3aGljaCBpcyB0aGUgbmFtZSBvZiB0aGUgYXR0cmlidXRlIGluIHRoZSBtb2RlbCwgZm9yIGV4YW1wbGU6ICdsaW5rTWFudWFsRGVjb3JhdG9yMCcuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSB7U3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMuaWQgPSBpZDtcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSB2YWx1ZSBvZiB0aGUgY3VycmVudCBtYW51YWwgZGVjb3JhdG9yLiBJdCByZWZsZWN0cyBpdHMgc3RhdGUgZnJvbSB0aGUgVUkuXG5cdFx0ICpcblx0XHQgKiBAb2JzZXJ2YWJsZVxuXHRcdCAqIEBtZW1iZXIge0Jvb2xlYW59IG1vZHVsZTpsaW5rL3V0aWxzfk1hbnVhbERlY29yYXRvciN2YWx1ZVxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0KCAndmFsdWUnICk7XG5cblx0XHQvKipcblx0XHQgKiBUaGUgZGVmYXVsdCB2YWx1ZSBvZiBtYW51YWwgZGVjb3JhdG9yLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUge0Jvb2xlYW59XG5cdFx0ICovXG5cdFx0dGhpcy5kZWZhdWx0VmFsdWUgPSBkZWZhdWx0VmFsdWU7XG5cblx0XHQvKipcblx0XHQgKiBUaGUgbGFiZWwgdXNlZCBpbiB0aGUgdXNlciBpbnRlcmZhY2UgdG8gdG9nZ2xlIHRoZSBtYW51YWwgZGVjb3JhdG9yLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUge1N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLmxhYmVsID0gbGFiZWw7XG5cblx0XHQvKipcblx0XHQgKiBBIHNldCBvZiBhdHRyaWJ1dGVzIGFkZGVkIHRvIGRvd25jYXN0ZWQgZGF0YSB3aGVuIHRoZSBkZWNvcmF0b3IgaXMgYWN0aXZhdGVkIGZvciBhIHNwZWNpZmljIGxpbmsuXG5cdFx0ICogQXR0cmlidXRlcyBzaG91bGQgYmUgYWRkZWQgaW4gYSBmb3JtIG9mIGF0dHJpYnV0ZXMgZGVmaW5lZCBpbiB7QGxpbmsgbW9kdWxlOmVuZ2luZS92aWV3L2VsZW1lbnRkZWZpbml0aW9ufkVsZW1lbnREZWZpbml0aW9ufS5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICovXG5cdFx0dGhpcy5hdHRyaWJ1dGVzID0gYXR0cmlidXRlcztcblx0fVxufVxuXG5taXgoIE1hbnVhbERlY29yYXRvciwgT2JzZXJ2YWJsZU1peGluICk7XG4iLCJcbmltcG9ydCBQbHVnaW4gZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1jb3JlL3NyYy9wbHVnaW4nO1xuIGltcG9ydCBUZXh0V2F0Y2hlciBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LXR5cGluZy9zcmMvdGV4dHdhdGNoZXInO1xuIGltcG9ydCB7IGVzY2FwZVJlZ0V4cCB9IGZyb20gJ2xvZGFzaC1lcyc7XG5cbi8vIEFsbCBuYW1lZCB0cmFuc2Zvcm1hdGlvbnMuXG5jb25zdCBUUkFOU0ZPUk1BVElPTlMgPSB7XG5cdC8vIENvbW1vbiBzeW1ib2xzOlxuXHRjb3B5cmlnaHQ6IHsgZnJvbTogJyhjKScsIHRvOiAnwqknIH0sXG5cdHJlZ2lzdGVyZWRUcmFkZW1hcms6IHsgZnJvbTogJyhyKScsIHRvOiAnwq4nIH0sXG5cdHRyYWRlbWFyazogeyBmcm9tOiAnKHRtKScsIHRvOiAn4oSiJyB9LFxuXG5cdC8vIE1hdGhlbWF0aWNhbDpcblx0b25lSGFsZjogeyBmcm9tOiAnMS8yJywgdG86ICfCvScgfSxcblx0b25lVGhpcmQ6IHsgZnJvbTogJzEvMycsIHRvOiAn4oWTJyB9LFxuXHR0d29UaGlyZHM6IHsgZnJvbTogJzIvMycsIHRvOiAn4oWUJyB9LFxuXHRvbmVGb3J0aDogeyBmcm9tOiAnMS80JywgdG86ICfCvCcgfSxcblx0dGhyZWVRdWFydGVyczogeyBmcm9tOiAnMy80JywgdG86ICfCvicgfSxcblx0bGVzc1RoYW5PckVxdWFsOiB7IGZyb206ICc8PScsIHRvOiAn4omkJyB9LFxuXHRncmVhdGVyVGhhbk9yRXF1YWw6IHsgZnJvbTogJz49JywgdG86ICfiiaUnIH0sXG5cdG5vdEVxdWFsOiB7IGZyb206ICchPScsIHRvOiAn4omgJyB9LFxuXHRhcnJvd0xlZnQ6IHsgZnJvbTogJzwtJywgdG86ICfihpAnIH0sXG5cdGFycm93UmlnaHQ6IHsgZnJvbTogJy0+JywgdG86ICfihpInIH0sXG5cblx0Ly8gVHlwb2dyYXBoeTpcblx0aG9yaXpvbnRhbEVsbGlwc2lzOiB7IGZyb206ICcuLi4nLCB0bzogJ+KApicgfSxcblx0ZW5EYXNoOiB7IGZyb206IC8oXnwgKSgtLSkoICkkLywgdG86IFsgbnVsbCwgJ+KAkycsIG51bGwgXSB9LFxuXHRlbURhc2g6IHsgZnJvbTogLyhefCApKC0tLSkoICkkLywgdG86IFsgbnVsbCwgJ+KAlCcsIG51bGwgXSB9LFxuXHQvLyBRdW90YXRpb25zOlxuXHQvLyBFbmdsaXNoLCBVU1xuXHRxdW90ZXNQcmltYXJ5OiB7IGZyb206IGJ1aWxkUXVvdGVzUmVnRXhwKCAnXCInICksIHRvOiBbIG51bGwsICfigJwnLCBudWxsLCAn4oCdJyBdIH0sXG5cdHF1b3Rlc1NlY29uZGFyeTogeyBmcm9tOiBidWlsZFF1b3Rlc1JlZ0V4cCggJ1xcJycgKSwgdG86IFsgbnVsbCwgJ+KAmCcsIG51bGwsICfigJknIF0gfSxcblxuXHQvLyBFbmdsaXNoLCBVS1xuXHRxdW90ZXNQcmltYXJ5RW5HYjogeyBmcm9tOiBidWlsZFF1b3Rlc1JlZ0V4cCggJ1xcJycgKSwgdG86IFsgbnVsbCwgJ+KAmCcsIG51bGwsICfigJknIF0gfSxcblx0cXVvdGVzU2Vjb25kYXJ5RW5HYjogeyBmcm9tOiBidWlsZFF1b3Rlc1JlZ0V4cCggJ1wiJyApLCB0bzogWyBudWxsLCAn4oCcJywgbnVsbCwgJ+KAnScgXSB9LFxuXG5cdC8vIFBvbGlzaFxuXHRxdW90ZXNQcmltYXJ5UGw6IHsgZnJvbTogYnVpbGRRdW90ZXNSZWdFeHAoICdcIicgKSwgdG86IFsgbnVsbCwgJ+KAnicsIG51bGwsICfigJ0nIF0gfSxcblx0cXVvdGVzU2Vjb25kYXJ5UGw6IHsgZnJvbTogYnVpbGRRdW90ZXNSZWdFeHAoICdcXCcnICksIHRvOiBbIG51bGwsICfigJonLCBudWxsLCAn4oCZJyBdIH1cbn07XG5cbi8vIFRyYW5zZm9ybWF0aW9uIGdyb3Vwcy5cbmNvbnN0IFRSQU5TRk9STUFUSU9OX0dST1VQUyA9IHtcblx0c3ltYm9sczogWyAnY29weXJpZ2h0JywgJ3JlZ2lzdGVyZWRUcmFkZW1hcmsnLCAndHJhZGVtYXJrJyBdLFxuXHRtYXRoZW1hdGljYWw6IFtcblx0XHQnb25lSGFsZicsICdvbmVUaGlyZCcsICd0d29UaGlyZHMnLCAnb25lRm9ydGgnLCAndGhyZWVRdWFydGVycycsXG5cdFx0J2xlc3NUaGFuT3JFcXVhbCcsICdncmVhdGVyVGhhbk9yRXF1YWwnLCAnbm90RXF1YWwnLFxuXHRcdCdhcnJvd0xlZnQnLCAnYXJyb3dSaWdodCdcblx0XSxcblx0dHlwb2dyYXBoeTogWyAnaG9yaXpvbnRhbEVsbGlwc2lzJywgJ2VuRGFzaCcsICdlbURhc2gnIF0sXG5cdHF1b3RlczogWyAncXVvdGVzUHJpbWFyeScsICdxdW90ZXNTZWNvbmRhcnknIF1cbn07XG5cbi8vIEEgc2V0IG9mIGRlZmF1bHQgdHJhbnNmb3JtYXRpb25zIHByb3ZpZGVkIGJ5IHRoZSBmZWF0dXJlLlxuY29uc3QgREVGQVVMVF9UUkFOU0ZPUk1BVElPTlMgPSBbXG5cdCdzeW1ib2xzJyxcblx0J21hdGhlbWF0aWNhbCcsXG5cdCd0eXBvZ3JhcGh5Jyxcblx0J3F1b3Rlcydcbl07XG5cbi8qKlxuICogVGhlIHRleHQgdHJhbnNmb3JtYXRpb24gcGx1Z2luLlxuICpcbiAqIEBleHRlbmRzIG1vZHVsZTpjb3JlL3BsdWdpbn5QbHVnaW5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dFRlbXBsYXRpbmcgZXh0ZW5kcyBQbHVnaW4ge1xuXHQvKipcblx0ICogQGluaGVyaXREb2Ncblx0ICovXG5cdHN0YXRpYyBnZXQgcGx1Z2luTmFtZSgpIHtcblx0XHRyZXR1cm4gJ1RleHRUZW1wbGF0aW5nJztcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5oZXJpdERvY1xuXHQgKi9cblx0Y29uc3RydWN0b3IoIGVkaXRvciApIHtcblx0XHRzdXBlciggZWRpdG9yICk7XG5cblx0XHRlZGl0b3IuY29uZmlnLmRlZmluZSggJ3R5cGluZycsIHtcblx0XHRcdHRyYW5zZm9ybWF0aW9uczoge1xuXHRcdFx0XHRpbmNsdWRlOiBERUZBVUxUX1RSQU5TRk9STUFUSU9OU1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5oZXJpdERvY1xuXHQgKi9cblx0aW5pdCgpIHtcblx0XHRjb25zdCBtb2RlbCA9IHRoaXMuZWRpdG9yLm1vZGVsO1xuXHRcdGNvbnN0IG1vZGVsU2VsZWN0aW9uID0gbW9kZWwuZG9jdW1lbnQuc2VsZWN0aW9uO1xuXG5cdFx0bW9kZWxTZWxlY3Rpb24ub24oICdjaGFuZ2U6cmFuZ2UnLCAoKSA9PiB7XG5cdFx0XHQvLyBEaXNhYmxlIHBsdWdpbiB3aGVuIHNlbGVjdGlvbiBpcyBpbnNpZGUgYSBjb2RlIGJsb2NrLlxuXHRcdFx0dGhpcy5pc0VuYWJsZWQgPSAhbW9kZWxTZWxlY3Rpb24uYW5jaG9yLnBhcmVudC5pcyggJ2VsZW1lbnQnLCAnY29kZUJsb2NrJyApO1xuXHRcdH0gKTtcblxuXHRcdHRoaXMuX2VuYWJsZVRyYW5zZm9ybWF0aW9uV2F0Y2hlcnMoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGUgbmV3IFRleHRXYXRjaGVyIGxpc3RlbmluZyB0byB0aGUgZWRpdG9yIGZvciB0eXBpbmcgYW5kIHNlbGVjdGlvbiBldmVudHMuXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfZW5hYmxlVHJhbnNmb3JtYXRpb25XYXRjaGVycygpIHtcblx0XHRjb25zdCBlZGl0b3IgPSB0aGlzLmVkaXRvcjtcblx0XHRjb25zdCBtb2RlbCA9IGVkaXRvci5tb2RlbDtcblx0XHRjb25zdCBpbnB1dCA9IGVkaXRvci5wbHVnaW5zLmdldCggJ0lucHV0JyApO1xuXHRcdGNvbnN0IG5vcm1hbGl6ZWRUcmFuc2Zvcm1hdGlvbnMgPSBub3JtYWxpemVUcmFuc2Zvcm1hdGlvbnMoIGVkaXRvci5jb25maWcuZ2V0KCAndHlwaW5nLnRyYW5zZm9ybWF0aW9ucycgKSApO1xuXG5cdFx0Y29uc3QgdGVzdENhbGxiYWNrID0gdGV4dCA9PiB7XG5cdFx0XHRmb3IgKCBjb25zdCBub3JtYWxpemVkVHJhbnNmb3JtYXRpb24gb2Ygbm9ybWFsaXplZFRyYW5zZm9ybWF0aW9ucyApIHtcblx0XHRcdFx0Y29uc3QgZnJvbSA9IG5vcm1hbGl6ZWRUcmFuc2Zvcm1hdGlvbi5mcm9tO1xuXHRcdFx0XHRjb25zdCBtYXRjaCA9IGZyb20udGVzdCggdGV4dCApO1xuXG5cdFx0XHRcdGlmICggbWF0Y2ggKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHsgbm9ybWFsaXplZFRyYW5zZm9ybWF0aW9uIH07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Y29uc3Qgd2F0Y2hlckNhbGxiYWNrID0gKCBldnQsIGRhdGEgKSA9PiB7XG5cdFx0XHRpZiAoICFpbnB1dC5pc0lucHV0KCBkYXRhLmJhdGNoICkgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgeyBmcm9tLCB0byB9ID0gZGF0YS5ub3JtYWxpemVkVHJhbnNmb3JtYXRpb247XG5cblx0XHRcdGNvbnN0IG1hdGNoZXMgPSBmcm9tLmV4ZWMoIGRhdGEudGV4dCApO1xuXHRcdFx0Y29uc3QgcmVwbGFjZXMgPSB0byggbWF0Y2hlcy5zbGljZSggMSApICk7XG5cblx0XHRcdGNvbnN0IG1hdGNoZWRSYW5nZSA9IGRhdGEucmFuZ2U7XG5cblx0XHRcdGxldCBjaGFuZ2VJbmRleCA9IG1hdGNoZXMuaW5kZXg7XG5cblx0XHRcdG1vZGVsLmVucXVldWVDaGFuZ2UoIHdyaXRlciA9PiB7XG5cdFx0XHRcdGZvciAoIGxldCBpID0gMTsgaSA8IG1hdGNoZXMubGVuZ3RoOyBpKysgKSB7XG5cdFx0XHRcdFx0Y29uc3QgbWF0Y2ggPSBtYXRjaGVzWyBpIF07XG5cdFx0XHRcdFx0Y29uc3QgcmVwbGFjZVdpdGggPSByZXBsYWNlc1sgaSAtIDEgXTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhtYXRjaCk7XG5cdFx0XHRcdFx0aWYgKCByZXBsYWNlV2l0aCA9PSBudWxsICkge1xuXHRcdFx0XHRcdFx0Y2hhbmdlSW5kZXggKz0gbWF0Y2gubGVuZ3RoO1xuXG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjb25zdCByZXBsYWNlUG9zaXRpb24gPSBtYXRjaGVkUmFuZ2Uuc3RhcnQuZ2V0U2hpZnRlZEJ5KCBjaGFuZ2VJbmRleCApO1xuXHRcdFx0XHRcdGNvbnN0IHJlcGxhY2VSYW5nZSA9IG1vZGVsLmNyZWF0ZVJhbmdlKCByZXBsYWNlUG9zaXRpb24sIHJlcGxhY2VQb3NpdGlvbi5nZXRTaGlmdGVkQnkoIG1hdGNoLmxlbmd0aCApICk7XG5cdFx0XHRcdFx0Y29uc3QgYXR0cmlidXRlcyA9IGdldFRleHRBdHRyaWJ1dGVzQWZ0ZXJQb3NpdGlvbiggcmVwbGFjZVBvc2l0aW9uICk7XG5cdFx0XHRcdFx0Y29uc3Qgb3B0aW9ucyA9IHsgcmFuZ2UgOiByZXBsYWNlUmFuZ2UsIHVzaW5nT3BlcmF0aW9uOiBmYWxzZSB9XG5cdFx0XHRcdFx0d3JpdGVyLmFkZE1hcmtlciggbWF0Y2gsIG9wdGlvbnMgKTtcblx0XHRcdFx0XHRtb2RlbC5pbnNlcnRDb250ZW50KCB3cml0ZXIuY3JlYXRlVGV4dCggcmVwbGFjZVdpdGgsIGF0dHJpYnV0ZXMgKSwgcmVwbGFjZVJhbmdlICk7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZWRpdG9yLm1vZGVsLm1hcmtlcnMpO1xuXHRcdFx0XHRcdGNoYW5nZUluZGV4ICs9IHJlcGxhY2VXaXRoLmxlbmd0aDtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdH07XG5cblx0XHRjb25zdCB3YXRjaGVyID0gbmV3IFRleHRXYXRjaGVyKCBlZGl0b3IubW9kZWwsIHRlc3RDYWxsYmFjayApO1xuXG5cdFx0d2F0Y2hlci5vbiggJ21hdGNoZWQ6ZGF0YScsIHdhdGNoZXJDYWxsYmFjayApO1xuXHRcdHdhdGNoZXIuYmluZCggJ2lzRW5hYmxlZCcgKS50byggdGhpcyApO1xuXG5cdFx0Ly8gd2F0Y2hlci5vbiggJ3VubWF0Y2hlZCcsIHVud2F0Y2hlckNhbGxiYWNrICk7XG5cdFx0Ly8gY29uc3QgcGF0dGVybiA9IC8oXFxcXFt7Mn0pKFthLXpdKykoXFxcXF17Mn0pJC87XG5cdFx0Ly9cblx0XHQvLyBjb25zdCBtYXRjaGVyID0gbmV3IE1hdGNoZXIoIHBhdHRlcm4gKTtcblx0XHQvLyB2YXIgY2hpbGRDb3VudCA9IGVkaXRvci5tb2RlbC5kb2N1bWVudC5nZXRSb290KCkuY2hpbGRDb3VudDtcblx0XHQvLyBpZiAoZWRpdG9yLm1vZGVsLmRvY3VtZW50LmdldFJvb3QoKS5jaGlsZENvdW50ID4gMCl7XG5cdFx0Ly8gXHRsZXQgZm91bmQgPSBtYXRjaGVyLm1hdGNoQWxsKGVkaXRvci5tb2RlbC5kb2N1bWVudC5nZXRSb290KCkuZ2V0Q2hpbGQoY2hpbGRDb3VudCAtMSkpO1xuXHRcdC8vIFx0Y29uc29sZS5sb2coZWRpdG9yLm1vZGVsLmRvY3VtZW50LmdldFJvb3QoKS5nZXRDaGlsZChjaGlsZENvdW50IC0xKSk7XG5cdFx0Ly8gXHRjb25zb2xlLmxvZyAobWF0Y2hlci5tYXRjaEFsbChlZGl0b3IubW9kZWwuZG9jdW1lbnQuZ2V0Um9vdCgpLmdldENoaWxkKGNoaWxkQ291bnQgLTEpKSk7XG5cdFx0Ly9cblx0XHQvLyB9XG5cdH1cbn1cblxuLy8gTm9ybWFsaXplcyB0aGUgY29uZmlndXJhdGlvbiBgZnJvbWAgcGFyYW1ldGVyIHZhbHVlLlxuLy8gVGhlIG5vcm1hbGl6ZWQgdmFsdWUgZm9yIHRoZSBgZnJvbWAgcGFyYW1ldGVyIGlzIGEgUmVnRXhwIGluc3RhbmNlLiBJZiB0aGUgcGFzc2VkIGBmcm9tYCBpcyBhbHJlYWR5IGEgUmVnRXhwIGluc3RhbmNlLFxuLy8gaXQgaXMgcmV0dXJuZWQgdW5jaGFuZ2VkLlxuLy9cbi8vIEBwYXJhbSB7U3RyaW5nfFJlZ0V4cH0gZnJvbVxuLy8gQHJldHVybnMge1JlZ0V4cH1cbmZ1bmN0aW9uIG5vcm1hbGl6ZUZyb20oIGZyb20gKSB7XG5cdGlmICggdHlwZW9mIGZyb20gPT0gJ3N0cmluZycgKSB7XG5cdFx0cmV0dXJuIG5ldyBSZWdFeHAoIGAoJHsgZXNjYXBlUmVnRXhwKCBmcm9tICkgfSkkYCApO1xuXHR9XG5cblx0Ly8gYGZyb21gIGlzIGFscmVhZHkgYSByZWd1bGFyIGV4cHJlc3Npb24uXG5cdHJldHVybiBmcm9tO1xufVxuXG4vLyBOb3JtYWxpemVzIHRoZSBjb25maWd1cmF0aW9uIGB0b2AgcGFyYW1ldGVyIHZhbHVlLlxuLy8gVGhlIG5vcm1hbGl6ZWQgdmFsdWUgZm9yIHRoZSBgdG9gIHBhcmFtZXRlciBpcyBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYW4gYXJyYXkgYW5kIHJldHVybnMgYW4gYXJyYXkuIFNlZSBtb3JlIGluIHRoZVxuLy8gY29uZmlndXJhdGlvbiBkZXNjcmlwdGlvbi4gSWYgdGhlIHBhc3NlZCBgdG9gIGlzIGFscmVhZHkgYSBmdW5jdGlvbiwgaXQgaXMgcmV0dXJuZWQgdW5jaGFuZ2VkLlxuLy9cbi8vIEBwYXJhbSB7U3RyaW5nfEFycmF5LjxudWxsfFN0cmluZz58RnVuY3Rpb259IHRvXG4vLyBAcmV0dXJucyB7RnVuY3Rpb259XG5mdW5jdGlvbiBub3JtYWxpemVUbyggdG8gKSB7XG5cdGlmICggdHlwZW9mIHRvID09ICdzdHJpbmcnICkge1xuXHRcdHJldHVybiAoKSA9PiBbIHRvIF07XG5cdH0gZWxzZSBpZiAoIHRvIGluc3RhbmNlb2YgQXJyYXkgKSB7XG5cdFx0cmV0dXJuICgpID0+IHRvO1xuXHR9XG5cblx0Ly8gYHRvYCBpcyBhbHJlYWR5IGEgZnVuY3Rpb24uXG5cdHJldHVybiB0bztcbn1cblxuLy8gRm9yIGdpdmVuIGBwb3NpdGlvbmAgcmV0dXJucyBhdHRyaWJ1dGVzIGZvciB0aGUgdGV4dCB0aGF0IGlzIGFmdGVyIHRoYXQgcG9zaXRpb24uXG4vLyBUaGUgdGV4dCBjYW4gYmUgaW4gdGhlIHNhbWUgdGV4dCBub2RlIGFzIHRoZSBwb3NpdGlvbiAoYGZvb1tdYmFyYCkgb3IgaW4gdGhlIG5leHQgdGV4dCBub2RlIChgZm9vW108JHRleHQgYm9sZD1cInRydWVcIj5iYXI8LyR0ZXh0PmApLlxuLy9cbi8vIEBwYXJhbSB7bW9kdWxlOmVuZ2luZS9tb2RlbC9wb3NpdGlvbn5Qb3NpdGlvbn0gcG9zaXRpb25cbi8vIEByZXR1cm5zIHtJdGVyYWJsZS48Kj59XG5mdW5jdGlvbiBnZXRUZXh0QXR0cmlidXRlc0FmdGVyUG9zaXRpb24oIHBvc2l0aW9uICkge1xuXHRjb25zdCB0ZXh0Tm9kZSA9IHBvc2l0aW9uLnRleHROb2RlID8gcG9zaXRpb24udGV4dE5vZGUgOiBwb3NpdGlvbi5ub2RlQWZ0ZXI7XG5cblx0cmV0dXJuIHRleHROb2RlLmdldEF0dHJpYnV0ZXMoKTtcbn1cblxuLy8gUmV0dXJucyBhIFJlZ0V4cCBwYXR0ZXJuIHN0cmluZyB0aGF0IGRldGVjdHMgYSBzZW50ZW5jZSBpbnNpZGUgYSBxdW90ZS5cbi8vXG4vLyBAcGFyYW0ge1N0cmluZ30gcXVvdGVDaGFyYWN0ZXIgVGhlIGNoYXJhY3RlciB0byBjcmVhdGUgYSBwYXR0ZXJuIGZvci5cbi8vIEByZXR1cm5zIHtTdHJpbmd9XG5mdW5jdGlvbiBidWlsZFF1b3Rlc1JlZ0V4cCggcXVvdGVDaGFyYWN0ZXIgKSB7XG5cdHJldHVybiBuZXcgUmVnRXhwKCBgKF58XFxcXHMpKCR7IHF1b3RlQ2hhcmFjdGVyIH0pKFteJHsgcXVvdGVDaGFyYWN0ZXIgfV0qKSgkeyBxdW90ZUNoYXJhY3RlciB9KSRgICk7XG59XG5cbi8vIFJlYWRzIHRleHQgdHJhbnNmb3JtYXRpb24gY29uZmlnIGFuZCByZXR1cm5zIG5vcm1hbGl6ZWQgYXJyYXkgb2YgdHJhbnNmb3JtYXRpb25zIG9iamVjdHMuXG4vL1xuLy8gQHBhcmFtIHttb2R1bGU6dHlwaW5nL3RleHRUZW1wbGF0aW5nflRleHRUZW1wbGF0aW5nRGVzY3JpcHRpb259IGNvbmZpZ1xuLy8gQHJldHVybnMge0FycmF5Ljx7ZnJvbTpTdHJpbmcsdG86RnVuY3Rpb259Pn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZVRyYW5zZm9ybWF0aW9ucyggY29uZmlnICkge1xuXHRjb25zdCBleHRyYSA9IGNvbmZpZy5leHRyYSB8fCBbXTtcblx0Y29uc3QgcmVtb3ZlID0gY29uZmlnLnJlbW92ZSB8fCBbXTtcblx0Y29uc3QgaXNOb3RSZW1vdmVkID0gdHJhbnNmb3JtYXRpb24gPT4gIXJlbW92ZS5pbmNsdWRlcyggdHJhbnNmb3JtYXRpb24gKTtcblxuXHRjb25zdCBjb25maWd1cmVkID0gY29uZmlnLmluY2x1ZGUuY29uY2F0KCBleHRyYSApLmZpbHRlciggaXNOb3RSZW1vdmVkICk7XG5cblx0cmV0dXJuIGV4cGFuZEdyb3Vwc0FuZFJlbW92ZUR1cGxpY2F0ZXMoIGNvbmZpZ3VyZWQgKVxuXHRcdC5maWx0ZXIoIGlzTm90UmVtb3ZlZCApIC8vIEZpbHRlciBvdXQgJ3JlbW92ZScgdHJhbnNmb3JtYXRpb25zIGFzIHRoZXkgbWlnaHQgYmUgc2V0IGluIGdyb3VwXG5cdFx0Lm1hcCggdHJhbnNmb3JtYXRpb24gPT4gVFJBTlNGT1JNQVRJT05TWyB0cmFuc2Zvcm1hdGlvbiBdIHx8IHRyYW5zZm9ybWF0aW9uIClcblx0XHQubWFwKCB0cmFuc2Zvcm1hdGlvbiA9PiAoIHtcblx0XHRcdGZyb206IG5vcm1hbGl6ZUZyb20oIHRyYW5zZm9ybWF0aW9uLmZyb20gKSxcblx0XHRcdHRvOiBub3JtYWxpemVUbyggdHJhbnNmb3JtYXRpb24udG8gKVxuXHRcdH0gKSApO1xufVxuXG4vLyBSZWFkcyBkZWZpbml0aW9ucyBhbmQgZXhwYW5kcyBuYW1lZCBncm91cHMgaWYgbmVlZGVkIHRvIHRyYW5zZm9ybWF0aW9uIG5hbWVzLlxuLy8gVGhpcyBtZXRob2QgYWxzbyByZW1vdmVzIGR1cGxpY2F0ZWQgbmFtZWQgdHJhbnNmb3JtYXRpb25zIGlmIGFueS5cbi8vXG4vLyBAcGFyYW0ge0FycmF5LjxTdHJpbmd8T2JqZWN0Pn0gZGVmaW5pdGlvbnNcbi8vIEByZXR1cm5zIHtBcnJheS48U3RyaW5nfE9iamVjdD59XG5mdW5jdGlvbiBleHBhbmRHcm91cHNBbmRSZW1vdmVEdXBsaWNhdGVzKCBkZWZpbml0aW9ucyApIHtcblx0Ly8gU2V0IGlzIHVzaW5nIHRvIG1ha2Ugc3VyZSB0aGF0IHRyYW5zZm9ybWF0aW9uIG5hbWVzIGFyZSBub3QgZHVwbGljYXRlZC5cblx0Y29uc3QgZGVmaW5lZFRyYW5zZm9ybWF0aW9ucyA9IG5ldyBTZXQoKTtcblxuXHRmb3IgKCBjb25zdCB0cmFuc2Zvcm1hdGlvbk9yR3JvdXAgb2YgZGVmaW5pdGlvbnMgKSB7XG5cdFx0aWYgKCBUUkFOU0ZPUk1BVElPTl9HUk9VUFNbIHRyYW5zZm9ybWF0aW9uT3JHcm91cCBdICkge1xuXHRcdFx0Zm9yICggY29uc3QgdHJhbnNmb3JtYXRpb24gb2YgVFJBTlNGT1JNQVRJT05fR1JPVVBTWyB0cmFuc2Zvcm1hdGlvbk9yR3JvdXAgXSApIHtcblx0XHRcdFx0ZGVmaW5lZFRyYW5zZm9ybWF0aW9ucy5hZGQoIHRyYW5zZm9ybWF0aW9uICk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRlZmluZWRUcmFuc2Zvcm1hdGlvbnMuYWRkKCB0cmFuc2Zvcm1hdGlvbk9yR3JvdXAgKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gQXJyYXkuZnJvbSggZGVmaW5lZFRyYW5zZm9ybWF0aW9ucyApO1xufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZXhwb3J0IGRlZmF1bHQgXCI8P3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJ1dGYtOFxcXCI/PlxcbjwhLS0gR2VuZXJhdGVkIGJ5IEljb01vb24uaW8gLS0+XFxuPCFET0NUWVBFIHN2ZyBQVUJMSUMgXFxcIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOXFxcIiBcXFwiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkXFxcIj5cXG48c3ZnIHZlcnNpb249XFxcIjEuMVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgd2lkdGg9XFxcIjE2XFxcIiBoZWlnaHQ9XFxcIjE2XFxcIiB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiPlxcbjxwYXRoIGZpbGw9XFxcIiM0NDQ0NDRcXFwiIGQ9XFxcIk0yLjEgMy4xYzAuMiAxLjMgMC40IDEuNiAwLjQgMi45IDAgMC44LTEuNSAxLjUtMS41IDEuNXYxYzAgMCAxLjUgMC43IDEuNSAxLjUgMCAxLjMtMC4yIDEuNi0wLjQgMi45LTAuMyAyLjEgMC44IDMuMSAxLjggMy4xczIuMSAwIDIuMSAwdi0yYzAgMC0xLjggMC4yLTEuOC0xIDAtMC45IDAuMi0wLjkgMC40LTIuOSAwLjEtMC45LTAuNS0xLjYtMS4xLTIuMSAwLjYtMC41IDEuMi0xLjEgMS4xLTItMC4zLTItMC40LTItMC40LTIuOSAwLTEuMiAxLjgtMS4xIDEuOC0xLjF2LTJjMCAwLTEgMC0yLjEgMHMtMi4xIDEtMS44IDMuMXpcXFwiPjwvcGF0aD5cXG48cGF0aCBmaWxsPVxcXCIjNDQ0NDQ0XFxcIiBkPVxcXCJNMTMuOSAzLjFjLTAuMiAxLjMtMC40IDEuNi0wLjQgMi45IDAgMC44IDEuNSAxLjUgMS41IDEuNXYxYzAgMC0xLjUgMC43LTEuNSAxLjUgMCAxLjMgMC4yIDEuNiAwLjQgMi45IDAuMyAyLjEtMC44IDMuMS0xLjggMy4xcy0yLjEgMC0yLjEgMHYtMmMwIDAgMS44IDAuMiAxLjgtMSAwLTAuOS0wLjItMC45LTAuNC0yLjktMC4xLTAuOSAwLjUtMS42IDEuMS0yLjEtMC42LTAuNS0xLjItMS4xLTEuMS0yIDAuMi0yIDAuNC0yIDAuNC0yLjkgMC0xLjItMS44LTEuMS0xLjgtMS4xdi0yYzAgMCAxIDAgMi4xIDBzMi4xIDEgMS44IDMuMXpcXFwiPjwvcGF0aD5cXG48L3N2Zz5cXG5cIiIsImV4cG9ydCBkZWZhdWx0IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMjAgMjBcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6bTQuOTE5IDEwLjU2Mi0xLjQxNCAxLjQxNGEuNzUuNzUgMCAxIDEtMS4wNi0xLjA2bDEuNDE0LTEuNDE1LTEuNDE1LTEuNDE0YS43NS43NSAwIDAgMSAxLjA2MS0xLjA2bDEuNDE0IDEuNDE0IDEuNDE0LTEuNDE1YS43NS43NSAwIDAgMSAxLjA2MSAxLjA2MWwtMS40MTQgMS40MTQgMS40MTQgMS40MTVhLjc1Ljc1IDAgMCAxLTEuMDYgMS4wNmwtMS40MTUtMS40MTR6XFxcIi8+PC9zdmc+XCIiXSwic291cmNlUm9vdCI6IiJ9