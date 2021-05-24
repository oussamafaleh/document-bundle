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
/* harmony import */ var _ckeditor_ckeditor5_page_break_src_pagebreak__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ckeditor/ckeditor5-page-break/src/pagebreak */ "./node_modules/@ckeditor/ckeditor5-page-break/src/pagebreak.js");
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



DecoupledEditor.builtinPlugins = [_ckeditor_ckeditor5_essentials_src_essentials__WEBPACK_IMPORTED_MODULE_13__.default, _ckeditor_ckeditor5_alignment_src_alignment__WEBPACK_IMPORTED_MODULE_14__.default, _ckeditor_ckeditor5_font_src_fontsize__WEBPACK_IMPORTED_MODULE_15__.default, _ckeditor_ckeditor5_font_src_fontfamily__WEBPACK_IMPORTED_MODULE_16__.default, _ckeditor_ckeditor5_font_src_fontcolor__WEBPACK_IMPORTED_MODULE_17__.default, _ckeditor_ckeditor5_font_src_fontbackgroundcolor__WEBPACK_IMPORTED_MODULE_18__.default, _ckeditor_ckeditor5_adapter_ckfinder_src_uploadadapter__WEBPACK_IMPORTED_MODULE_19__.default, _ckeditor_ckeditor5_autoformat_src_autoformat__WEBPACK_IMPORTED_MODULE_20__.default, _ckeditor_ckeditor5_basic_styles_src_bold__WEBPACK_IMPORTED_MODULE_21__.default, _ckeditor_ckeditor5_basic_styles_src_italic__WEBPACK_IMPORTED_MODULE_22__.default, _ckeditor_ckeditor5_basic_styles_src_strikethrough__WEBPACK_IMPORTED_MODULE_23__.default, _ckeditor_ckeditor5_basic_styles_src_underline__WEBPACK_IMPORTED_MODULE_24__.default, _ckeditor_ckeditor5_block_quote_src_blockquote__WEBPACK_IMPORTED_MODULE_25__.default, _ckeditor_ckeditor5_ckfinder_src_ckfinder__WEBPACK_IMPORTED_MODULE_26__.default, _ckeditor_ckeditor5_easy_image_src_easyimage__WEBPACK_IMPORTED_MODULE_27__.default, _ckeditor_ckeditor5_heading_src_heading__WEBPACK_IMPORTED_MODULE_28__.default, _ckeditor_ckeditor5_image_src_image__WEBPACK_IMPORTED_MODULE_29__.default, _ckeditor_ckeditor5_image_src_imagecaption__WEBPACK_IMPORTED_MODULE_30__.default, _ckeditor_ckeditor5_image_src_imagestyle__WEBPACK_IMPORTED_MODULE_31__.default, _ckeditor_ckeditor5_image_src_imagetoolbar__WEBPACK_IMPORTED_MODULE_32__.default, _ckeditor_ckeditor5_image_src_imageupload__WEBPACK_IMPORTED_MODULE_33__.default, _ckeditor_ckeditor5_indent_src_indent__WEBPACK_IMPORTED_MODULE_34__.default, _ckeditor_ckeditor5_indent_src_indentblock__WEBPACK_IMPORTED_MODULE_35__.default, _ckeditor_ckeditor5_link_src_link__WEBPACK_IMPORTED_MODULE_37__.default, _ckeditor_ckeditor5_list_src_list__WEBPACK_IMPORTED_MODULE_38__.default, _ckeditor_ckeditor5_media_embed_src_mediaembed__WEBPACK_IMPORTED_MODULE_39__.default, _ckeditor_ckeditor5_paragraph_src_paragraph__WEBPACK_IMPORTED_MODULE_40__.default, _ckeditor_ckeditor5_paste_from_office_src_pastefromoffice__WEBPACK_IMPORTED_MODULE_41__.default, _ckeditor_ckeditor5_table_src_table__WEBPACK_IMPORTED_MODULE_42__.default, _ckeditor_ckeditor5_table_src_tabletoolbar__WEBPACK_IMPORTED_MODULE_43__.default, _ckeditor5_link_src_template__WEBPACK_IMPORTED_MODULE_36__.default, _ckeditor_ckeditor5_page_break_src_pagebreak__WEBPACK_IMPORTED_MODULE_12__.default, _ckeditor_ckeditor5_cloud_services_src_cloudservices__WEBPACK_IMPORTED_MODULE_44__.default]; // Editor configuration.

DecoupledEditor.defaultConfig = {
  toolbar: {
    items: ['template', 'template-save', '|', 'heading', '|', 'pageBreak', '|', 'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor', '|', 'bold', 'italic', 'underline', 'strikethrough', '|', 'alignment', '|', 'numberedList', 'bulletedList', '|', 'indent', 'outdent', '|', 'blockquote', 'imageUpload', 'insertTable', 'mediaEmbed', '|', 'undo', 'redo']
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
        this.isEnabled = model.schema.checkAttribute(selectedElement, 'templateVar');
      } else {
        this.isEnabled = model.schema.checkAttributeInSelection(doc.selection, 'templateVar');
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
      var linkCommand = editor.commands.get('template');
      model.change(function (writer) {
        // Get ranges to unlink.
        var rangesToUnlink = selection.isCollapsed ? [(0,_ckeditor_ckeditor5_typing_src_utils_findattributerange__WEBPACK_IMPORTED_MODULE_17__.default)(selection.getFirstPosition(), 'templateVar', selection.getAttribute('templateVar'), model)] : model.schema.getValidRanges(selection.getRanges(), 'templateVar'); // Remove `linkHref` attribute from specified ranges.

        var _iterator = _createForOfIteratorHelper(rangesToUnlink),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var range = _step.value;
            writer.removeAttribute('templateVar', range); // If there are registered custom attributes, then remove them during unlink.

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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./utils */ "./assets/ckeditor5-link/src/utils.js");
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

      if ((0,_utils__WEBPACK_IMPORTED_MODULE_22__.isImageAllowed)(selectedElement, model.schema)) {
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
            writer.setAttribute('templateVar-type', templateVar.type, varRange);
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
              attributes.set('templateVar-type', templateVar.type);
              truthyManualDecorators.forEach(function (item) {
                attributes.set(item, true);
              });

              var _model$insertContent = model.insertContent(writer.createText(templateVar.id, attributes), position),
                  positionAfter = _model$insertContent.end; // Put the selection at the end of the inserted link.
              // Using end of range returned from insertContent in case nodes with the same attributes got merged.


              writer.setSelection(positionAfter);
            } // Remove the `linkHref` attribute and all link decorators from the selection.
          // It stops adding a new content into the link element.


          ['templateVar', 'templateVar-type'].concat(truthyManualDecorators, falsyManualDecorators).forEach(function (item) {
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
              writer.setAttribute('templateVar-type', templateVar.type, range);
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

      if ((0,_utils__WEBPACK_IMPORTED_MODULE_22__.isImageAllowed)(selectedElement, model.schema)) {
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
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.anchor.js */ "./node_modules/core-js/modules/es.string.anchor.js");
/* harmony import */ var core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_3__);
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
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_9__);
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
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _ckeditor_ckeditor5_core_src_plugin__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ckeditor/ckeditor5-core/src/plugin */ "./node_modules/@ckeditor/ckeditor5-core/src/plugin.js");
/* harmony import */ var _ckeditor_ckeditor5_engine_src_view_observer_mouseobserver__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ckeditor/ckeditor5-engine/src/view/observer/mouseobserver */ "./node_modules/@ckeditor/ckeditor5-engine/src/view/observer/mouseobserver.js");
/* harmony import */ var _ckeditor_ckeditor5_typing_src__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ckeditor/ckeditor5-typing/src */ "./node_modules/@ckeditor/ckeditor5-typing/src/index.js");
/* harmony import */ var _ckeditor_ckeditor5_clipboard_src_clipboardpipeline__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ckeditor/ckeditor5-clipboard/src/clipboardpipeline */ "./node_modules/@ckeditor/ckeditor5-clipboard/src/clipboardpipeline.js");
/* harmony import */ var _ckeditor_ckeditor5_utils_src_keyboard__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ckeditor/ckeditor5-utils/src/keyboard */ "./node_modules/@ckeditor/ckeditor5-utils/src/keyboard.js");
/* harmony import */ var _template_command_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./template-command.js */ "./assets/ckeditor5-link/src/template-command.js");
/* harmony import */ var _canceltemplatecommand__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./canceltemplatecommand */ "./assets/ckeditor5-link/src/canceltemplatecommand.js");
/* harmony import */ var _utils_manualdecorator__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./utils/manualdecorator */ "./assets/ckeditor5-link/src/utils/manualdecorator.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./utils */ "./assets/ckeditor5-link/src/utils.js");
/* harmony import */ var _theme_template_css__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../theme/template.css */ "./assets/ckeditor5-link/theme/template.css");
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
      editor.model.schema.extend('$text', {
        allowAttributes: 'templateVar-type'
      });
      editor.conversion["for"]('dataDowncast').attributeToElement({
        model: 'templateVar',
        view: _utils__WEBPACK_IMPORTED_MODULE_28__.createTemplateElement
      });
      editor.conversion["for"]('editingDowncast').attributeToElement({
        model: 'templateVar',
        view: function view(id, conversionApi) {
          return (0,_utils__WEBPACK_IMPORTED_MODULE_28__.createTemplateElement)(id, conversionApi);
        }
      });
      editor.conversion["for"]('downcast').attributeToElement({
        model: 'templateVar-type',
        view: function view(type, _ref) {
          var writer = _ref.writer;
          var element = writer.createAttributeElement('span', {
            'data-template-type': type
          }, {
            priority: 5
          });
          writer.setCustomProperty('template', true, element);
          return element;
        }
      });
      editor.conversion["for"]('upcast').elementToAttribute({
        view: {
          name: 'span',
          attributes: ['data-template-type']
        },
        model: {
          key: 'templateVar-type',
          value: function value(viewElement) {
            return viewElement.getAttribute('data-template-type');
          }
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
            return viewElement.getAttribute('data-template-var');
          }
        }
      }); // Create linking commands.

      editor.commands.add('template', new _template_command_js__WEBPACK_IMPORTED_MODULE_25__.default(editor));
      editor.commands.add('canceltemplate', new _canceltemplatecommand__WEBPACK_IMPORTED_MODULE_26__.default(editor));
      var linkDecorators = (0,_utils__WEBPACK_IMPORTED_MODULE_28__.getLocalizedDecorators)(editor.t, (0,_utils__WEBPACK_IMPORTED_MODULE_28__.normalizeDecorators)(editor.config.get('template.decorators'))); //
      //

      this._enableManualDecorators(linkDecorators.filter(function (item) {
        return item.mode === DECORATOR_MANUAL;
      })); // Enable two-step caret movement for `templateVar` attribute.


      var twoStepCaretMovementPlugin = editor.plugins.get(_ckeditor_ckeditor5_typing_src__WEBPACK_IMPORTED_MODULE_22__.TwoStepCaretMovement);
      twoStepCaretMovementPlugin.registerAttribute('templateVar'); // Setup highlight over selected link.

      (0,_ckeditor_ckeditor5_typing_src__WEBPACK_IMPORTED_MODULE_22__.inlineHighlight)(editor, 'templateVar', 'span', HIGHLIGHT_SELECTED_CLASS); // Change the attributes of the selection in certain situations after the link was inserted into the document.

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

        manualDecorators.add(new _utils_manualdecorator__WEBPACK_IMPORTED_MODULE_27__.default(decorator));
        console.log(manualDecorators);
        editor.conversion["for"]('downcast').attributeToElement({
          model: decorator.id,
          view: function view(manualDecoratorName, _ref2) {
            var writer = _ref2.writer;

            if (manualDecoratorName) {
              var attributes = manualDecorators.get(decorator.id).attributes;
              var element = writer.createAttributeElement('span', attributes, {
                priority: 5
              });
              writer.setCustomProperty('template', true, element);
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
      editor.editing.view.addObserver(_ckeditor_ckeditor5_engine_src_view_observer_mouseobserver__WEBPACK_IMPORTED_MODULE_21__.default);
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
        var linkRange = (0,_ckeditor_ckeditor5_typing_src__WEBPACK_IMPORTED_MODULE_22__.findAttributeRange)(position, 'templateVar', selection.getAttribute('templateVar'), editor.model); // ...check whether clicked start/end boundary of the link.
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

      this.listenTo(editor.model, 'insertContent', function (evt, _ref3) {
        var _ref4 = _slicedToArray(_ref3, 1),
            element = _ref4[0];

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
        hasBackspacePressed = data.domEvent.keyCode === _ckeditor_ckeditor5_utils_src_keyboard__WEBPACK_IMPORTED_MODULE_24__.keyCodes.backspace;
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

        var linkRange = (0,_ckeditor_ckeditor5_typing_src__WEBPACK_IMPORTED_MODULE_22__.findAttributeRange)(position, 'templateVar', templateVar, model); // Preserve `templateVar` attribute if the selection is in the middle of the link or
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
      return [_ckeditor_ckeditor5_typing_src__WEBPACK_IMPORTED_MODULE_22__.TwoStepCaretMovement, _ckeditor_ckeditor5_typing_src__WEBPACK_IMPORTED_MODULE_22__.Input, _ckeditor_ckeditor5_clipboard_src_clipboardpipeline__WEBPACK_IMPORTED_MODULE_23__.default];
    }
  }]);

  return TemplateEditing;
}(_ckeditor_ckeditor5_core_src_plugin__WEBPACK_IMPORTED_MODULE_20__.default); // Make the selection free of link-related model attributes.
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


  var linkRange = (0,_ckeditor_ckeditor5_typing_src__WEBPACK_IMPORTED_MODULE_22__.findAttributeRange)(firstPosition, 'templateVar', nodeAtFirstPosition.getAttribute('templateVar'), model); // Then we can check whether selected range is inside the found link range. If so, attributes should be preserved.

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
/* harmony import */ var _ui_template_save_view__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ui/template-save-view */ "./assets/ckeditor5-link/src/ui/template-save-view.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./utils */ "./assets/ckeditor5-link/src/utils.js");
/* harmony import */ var _theme_icons_temlateIcon_svg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../theme/icons/temlateIcon.svg */ "./assets/ckeditor5-link/theme/icons/temlateIcon.svg");
/* harmony import */ var _theme_icons_file_export_solid_svg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../theme/icons/file-export-solid.svg */ "./assets/ckeditor5-link/theme/icons/file-export-solid.svg");
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
       * The actions view displayed inside of the balloon.
       *
       * @member {module:link/ui/linkactionsview~TemplateActionsView}
       */

      this.saveView = this._createSaveView();
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

      this._balloon = editor.plugins.get(_ckeditor_ckeditor5_ui_src__WEBPACK_IMPORTED_MODULE_20__.ContextualBalloon);
      this._panel = editor.plugins.get(_ckeditor_ckeditor5_ui_src__WEBPACK_IMPORTED_MODULE_20__.BalloonPanelView); // Create toolbar buttons.

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

      actionsView.keystrokes.set(_utils__WEBPACK_IMPORTED_MODULE_24__.TEMPLATE_KEYSTROKE, function (data, cancel) {
        _this._addFormView();

        cancel();
      });
      return actionsView;
    }
  }, {
    key: "_createSaveView",
    value: function _createSaveView() {
      var _this2 = this;

      var editor = this.editor;
      var actionsView = new _ui_template_save_view__WEBPACK_IMPORTED_MODULE_23__.default(editor.locale); // Execute unlink command after clicking on the "Edit" button.

      this.listenTo(actionsView, 'save', function () {
        _this2._addFormView();
      }); // Execute unlink command after clicking on the "Unlink" button.

      this.listenTo(actionsView, 'canceltemplate', function () {
        editor.execute('canceltemplate');

        _this2._hideUI();
      }); // Close the panel on esc key press when the **actions have focus**.

      actionsView.keystrokes.set('Esc', function (data, cancel) {
        _this2._hideUI();

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
      var _this3 = this;

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

        _this3._closeFormView();
      }); // Hide the panel after clicking the "Cancel" button.

      this.listenTo(formView, 'cancel', function () {
        _this3._closeFormView();
      }); // Close the panel on esc key press when the **form has focus**.

      formView.keystrokes.set('Esc', function (data, cancel) {
        _this3._closeFormView();

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
      var _this4 = this;

      var editor = this.editor;
      var templateCommand = editor.commands.get('template');
      var t = editor.t; // Handle the `Ctrl+K` keystroke and show the panel.

      editor.keystrokes.set(_utils__WEBPACK_IMPORTED_MODULE_24__.TEMPLATE_KEYSTROKE, function (keyEvtData, cancel) {
        // Prevent focusing the search bar in FF, Chrome and Edge. See https://github.com/ckeditor/ckeditor5/issues/4811.
        cancel();

        if (templateCommand.isEnabled) {
          _this4._showUI(true);
        }
      });
      editor.ui.componentFactory.add('template', function (locale) {
        var button = new _ckeditor_ckeditor5_ui_src__WEBPACK_IMPORTED_MODULE_20__.ButtonView(locale);
        button.isEnabled = true;
        button.label = t('Var Define');
        button.icon = _theme_icons_temlateIcon_svg__WEBPACK_IMPORTED_MODULE_25__.default;
        button.keystroke = _utils__WEBPACK_IMPORTED_MODULE_24__.TEMPLATE_KEYSTROKE;
        button.tooltip = true;
        button.isToggleable = true; // Bind button to the command.

        button.bind('isEnabled').to(templateCommand, 'isEnabled');
        button.bind('isOn').to(templateCommand, 'value', function (value) {
          return !!value;
        }); // Show the panel on button click.

        _this4.listenTo(button, 'execute', function () {
          return _this4._showUI(true);
        });

        return button;
      });
      editor.ui.componentFactory.add('template-save', function (locale) {
        var button = new _ckeditor_ckeditor5_ui_src__WEBPACK_IMPORTED_MODULE_20__.ButtonView(locale);
        button.isEnabled = true;
        button.label = t('Save Template');
        button.icon = _theme_icons_file_export_solid_svg__WEBPACK_IMPORTED_MODULE_26__.default;
        button.tooltip = true;
        button.isToggleable = true; // Bind button to the command.

        button.bind('isEnabled').to(templateCommand, 'isEnabled');
        button.bind('isOn').to(templateCommand, 'value', function (value) {
          return !!value;
        }); // Show the panel on button click.

        _this4.listenTo(button, 'execute', function () {
          return _this4._addSaveView();
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
      var _this5 = this;

      var viewDocument = this.editor.editing.view.document; // Handle click on view document and show panel when selection is placed inside the link element.
      // Keep panel open until selection will be inside the same link element.

      this.listenTo(viewDocument, 'click', function () {
        var parentLink = _this5._getSelectedLinkElement();

        if (parentLink) {
          // Then show panel but keep focus inside editor editable.
          _this5._showUI();
        }
      }); // Focus the form if the balloon is visible and the Tab key has been pressed.

      this.editor.keystrokes.set('Tab', function (data, cancel) {
        if (_this5._areActionsVisible && !_this5.actionsView.focusTracker.isFocused) {
          _this5.actionsView.focus();

          cancel();
        }
      }, {
        // Use the high priority because the link UI navigation is more important
        // than other feature's actions, e.g. list indentation.
        // https://github.com/ckeditor/ckeditor5-link/issues/146
        priority: 'high'
      }); // Close the panel on the Esc key press when the editable has focus and the balloon is visible.

      this.editor.keystrokes.set('Esc', function (data, cancel) {
        if (_this5._isUIVisible) {
          _this5._hideUI();

          cancel();
        }
      }); // Close on click outside of balloon panel element.

      (0,_ckeditor_ckeditor5_ui_src__WEBPACK_IMPORTED_MODULE_20__.clickOutsideHandler)({
        emitter: this.formView,
        activator: function activator() {
          return _this5._isUIInPanel;
        },
        contextElements: [this._balloon.view.element],
        callback: function callback() {
          return _this5._hideUI();
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
  }, {
    key: "_addSaveView",
    value: function _addSaveView() {
      var positions = _ckeditor_ckeditor5_ui_src__WEBPACK_IMPORTED_MODULE_20__.BalloonPanelView.defaultPositions;
      var target = document.body.querySelector('.document-editor');
      console.log(positions.northArrowSouth);

      this._panel.content.add(this.saveView);

      this._panel.render();

      this._panel.pin({
        target: target,
        positions: [positions.northArrowSouth]
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
      var _this6 = this;

      var editor = this.editor;
      var viewDocument = editor.editing.view.document;

      var prevSelectedLink = this._getSelectedLinkElement();

      var prevSelectionParent = getSelectionParent();

      var update = function update() {
        var selectedLink = _this6._getSelectedLinkElement();

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
          _this6._hideUI();
        } // Update the position of the panel when:
        //  * link panel is in the visible stack
        //  * the selection remains in the original link element,
        //  * there was no link element in the first place, i.e. creating a new link
        else if (_this6._isUIVisible) {
            // If still in a link element, simply update the position of the balloon.
            // If there was no link (e.g. inserting one), the balloon must be moved
            // to the new position in the editing view (a new native DOM range).
            _this6._balloon.updatePosition(_this6._getBalloonPositionData());
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
      return [_ckeditor_ckeditor5_ui_src__WEBPACK_IMPORTED_MODULE_20__.ContextualBalloon, _ckeditor_ckeditor5_ui_src__WEBPACK_IMPORTED_MODULE_20__.BalloonPanelView];
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
    return (0,_utils__WEBPACK_IMPORTED_MODULE_24__.isLinkElement)(ancestor);
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

    _this.unlinkButtonView = _this._createButton(t('Cancel Template Var'), _theme_icons_unlink_svg__WEBPACK_IMPORTED_MODULE_23__.default, 'cancelTemplate');
    /**
     * The edit link button view.
     *
     * @member {module:ui/button/buttonview~ButtonView}
     */

    _this.editButtonView = _this._createButton(t('Edit Template Var'), _ckeditor_ckeditor5_core_src__WEBPACK_IMPORTED_MODULE_19__.icons.pencil, 'edit');
    /**
     * The value of the "href" attribute of the link to use in the {@link #previewButtonView}.
     *
     * @observable
     * @member {String}
     */

    _this.set('data-template-var');
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
        tooltip: t('template valiable id')
      });
      button.extendTemplate({
        attributes: {
          "class": ['ck', 'ck-link-actions__preview'],
          id: bind.to('id', function (id) {
            return id;
          }),
          target: '_blank',
          rel: 'noopener noreferrer'
        }
      });
      button.bind('label').to(this, 'data-template-var', function (id) {
        return id || t('This variable has no id');
      });
      button.bind('isEnabled').to(this, 'data-template-var', function (id) {
        return !!id;
      });
      button.template.tag = 'span';
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

    _this.labelInputView = _this._createTextInput('Set variable Id');
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

/***/ "./assets/ckeditor5-link/src/ui/template-save-view.js":
/*!************************************************************!*\
  !*** ./assets/ckeditor5-link/src/ui/template-save-view.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TemplateSaveView)
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

var TemplateSaveView = /*#__PURE__*/function (_View) {
  _inherits(TemplateSaveView, _View);

  var _super = _createSuper(TemplateSaveView);

  /**
   * @inheritDoc
   */
  function TemplateSaveView(locale) {
    var _this;

    _classCallCheck(this, TemplateSaveView);

    _this = _super.call(this, locale);
    var t = locale.t;
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

    _this.unlinkButtonView = _this._createButton(t('Cancel Template Var'), _theme_icons_unlink_svg__WEBPACK_IMPORTED_MODULE_23__.default, 'cancelTemplate');
    /**
     * The edit link button view.
     *
     * @member {module:ui/button/buttonview~ButtonView}
     */

    _this.editButtonView = _this._createButton(t('Edit Template Var'), _ckeditor_ckeditor5_core_src__WEBPACK_IMPORTED_MODULE_19__.icons.pencil, 'edit');
    /**
     * The value of the "href" attribute of the link to use in the {@link #previewButtonView}.
     *
     * @observable
     * @member {String}
     */

    _this.set('data-template-var');

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


  _createClass(TemplateSaveView, [{
    key: "render",
    value: function render() {
      _get(_getPrototypeOf(TemplateSaveView.prototype), "render", this).call(this);

      var childViews = [this.previewButtonView, this.editButtonView, this.unlinkButtonView];
      childViews.forEach(function (v) {}); // Start listening for the keystrokes coming from #element.

      this.keystrokes.listenTo(this.element);
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
        tooltip: t('template valiable id')
      });
      button.extendTemplate({
        attributes: {
          "class": ['ck', 'ck-link-actions__preview'],
          id: bind.to('id', function (id) {
            return id;
          }),
          target: '_blank',
          rel: 'noopener noreferrer'
        }
      });
      button.bind('label').to(this, 'data-template-var', function (id) {
        return id || t('This variable has no id');
      });
      button.bind('isEnabled').to(this, 'data-template-var', function (id) {
        return !!id;
      });
      button.template.tag = 'span';
      button.template.eventListeners = {};
      return button;
    }
  }]);

  return TemplateSaveView;
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

/***/ "./assets/ckeditor5-link/src/utils.js":
/*!********************************************!*\
  !*** ./assets/ckeditor5-link/src/utils.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TEMPLATE_KEYSTROKE": () => (/* binding */ TEMPLATE_KEYSTROKE),
/* harmony export */   "SAVE_KEYSTROKE": () => (/* binding */ SAVE_KEYSTROKE),
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
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_10__);
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
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/upperFirst.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

var TEMPLATE_KEYSTROKE = 'Ctrl+E';
var SAVE_KEYSTROKE = 'Ctrl+Shift+S';
/**
 * Returns `true` if a given view node is the link element.
 *
 * @param {module:engine/view/node~Node} node
 * @returns {Boolean}
 */

function isLinkElement(node) {
  return node.is('attributeElement') && !!node.getCustomProperty('template');
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
  //if(id !== null){
  // Priority 5 - https://github.com/ckeditor/ckeditor5-link/issues/121.
  var linkElement = writer.createAttributeElement('span', {
    "class": HIGHLIGHT_CLASS,
    'data-template-var': id
  }, {
    priority: 5
  });
  writer.setCustomProperty('template', true, linkElement);
  return linkElement; //}
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
        id: "link".concat((0,lodash_es__WEBPACK_IMPORTED_MODULE_20__.default)(key))
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
/**
 * A plugin that converts custom attributes for elements that are wrapped in <figure> in the view.
 */

var CustomFigureAttributes = /*#__PURE__*/function () {
  /**
   * Plugin's constructor - receives an editor instance on creation.
   */
  function CustomFigureAttributes(editor) {
    _classCallCheck(this, CustomFigureAttributes);

    // Save reference to the editor.
    this.editor = editor;
  }
  /**
   * Sets the conversion up and extends the table & image features schema.
   *
   * Schema extending must be done in the "afterInit()" call because plugins define their schema in "init()".
   */


  _createClass(CustomFigureAttributes, [{
    key: "afterInit",
    value: function afterInit() {
      var editor = this.editor; // Define on which elements the CSS classes should be preserved:

      setupCustomClassConversion('img', 'image', editor);
      setupCustomClassConversion('table', 'table', editor);
      editor.conversion["for"]('upcast').add(upcastCustomClasses('figure'), {
        priority: 'low'
      }); // Define custom attributes that should be preserved.

      setupCustomAttributeConversion('img', 'image', 'id', editor);
      setupCustomAttributeConversion('table', 'table', 'id', editor);
    }
  }]);

  return CustomFigureAttributes;
}();
/**
 * Sets up a conversion that preserves classes on <img> and <table> elements.
 */


function setupCustomClassConversion(viewElementName, modelElementName, editor) {
  // The 'customClass' attribute stores custom classes from the data in the model so that schema definitions allow this attribute.
  editor.model.schema.extend(modelElementName, {
    allowAttributes: ['customClass']
  }); // Defines upcast converters for the <img> and <table> elements with a "low" priority so they are run after the default converters.

  editor.conversion["for"]('upcast').add(upcastCustomClasses(viewElementName), {
    priority: 'low'
  }); // Defines downcast converters for a model element with a "low" priority so they are run after the default converters.
  // Use `downcastCustomClassesToFigure` if you want to keep your classes on <figure> element or `downcastCustomClassesToChild`
  // if you would like to keep your classes on a <figure> child element, i.e. <img>.

  editor.conversion["for"]('downcast').add(downcastCustomClassesToFigure(modelElementName), {
    priority: 'low'
  }); // editor.conversion.for( 'downcast' ).add( downcastCustomClassesToChild( viewElementName, modelElementName ), { priority: 'low' } );
}
/**
 * Sets up a conversion for a custom attribute on the view elements contained inside a <figure>.
 *
 * This method:
 * - Adds proper schema rules.
 * - Adds an upcast converter.
 * - Adds a downcast converter.
 */


function setupCustomAttributeConversion(viewElementName, modelElementName, viewAttribute, editor) {
  // Extends the schema to store an attribute in the model.
  var modelAttribute = "custom".concat(viewAttribute);
  editor.model.schema.extend(modelElementName, {
    allowAttributes: [modelAttribute]
  });
  editor.conversion["for"]('upcast').add(upcastAttribute(viewElementName, viewAttribute, modelAttribute));
  editor.conversion["for"]('downcast').add(downcastAttribute(modelElementName, viewElementName, viewAttribute, modelAttribute));
}
/**
 * Creates an upcast converter that will pass all classes from the view element to the model element.
 */


function upcastCustomClasses(elementName) {
  return function (dispatcher) {
    return dispatcher.on("element:".concat(elementName), function (evt, data, conversionApi) {
      var viewItem = data.viewItem;
      var modelRange = data.modelRange;
      var modelElement = modelRange && modelRange.start.nodeAfter;

      if (!modelElement) {
        return;
      } // The upcast conversion picks up classes from the base element and from the <figure> element so it should be extensible.


      var currentAttributeValue = modelElement.getAttribute('customClass') || [];
      currentAttributeValue.push.apply(currentAttributeValue, _toConsumableArray(viewItem.getClassNames()));
      conversionApi.writer.setAttribute('customClass', currentAttributeValue, modelElement);
    });
  };
}
/**
 * Creates a downcast converter that adds classes defined in the `customClass` attribute to a <figure> element.
 *
 * This converter expects that the view element is nested in a <figure> element.
 */


function downcastCustomClassesToFigure(modelElementName) {
  return function (dispatcher) {
    return dispatcher.on("insert:".concat(modelElementName), function (evt, data, conversionApi) {
      var modelElement = data.item;
      var viewFigure = conversionApi.mapper.toViewElement(modelElement);

      if (!viewFigure) {
        return;
      } // The code below assumes that classes are set on the <figure> element.


      conversionApi.writer.addClass(modelElement.getAttribute('customClass'), viewFigure);
    });
  };
}
/**
 * Creates a downcast converter that adds classes defined in the `customClass` attribute to a <figure> child element.
 *
 * This converter expects that the view element is nested in a <figure> element.
 */


function downcastCustomClassesToChild(viewElementName, modelElementName) {
  return function (dispatcher) {
    return dispatcher.on("insert:".concat(modelElementName), function (evt, data, conversionApi) {
      var modelElement = data.item;
      var viewFigure = conversionApi.mapper.toViewElement(modelElement);

      if (!viewFigure) {
        return;
      } // The code below assumes that classes are set on the element inside the <figure>.


      var viewElement = findViewChild(viewFigure, viewElementName, conversionApi);
      conversionApi.writer.addClass(modelElement.getAttribute('customClass'), viewElement);
    });
  };
}
/**
 * Helper method that searches for a given view element in all children of the model element.
 *
 * @param {module:engine/view/item~Item} viewElement
 * @param {String} viewElementName
 * @param {module:engine/conversion/downcastdispatcher~DowncastConversionApi} conversionApi
 * @return {module:engine/view/item~Item}
 */


function findViewChild(viewElement, viewElementName, conversionApi) {
  var viewChildren = Array.from(conversionApi.writer.createRangeIn(viewElement).getItems());
  return viewChildren.find(function (item) {
    return item.is('element', viewElementName);
  });
}
/**
 * Returns the custom attribute upcast converter.
 */


function upcastAttribute(viewElementName, viewAttribute, modelAttribute) {
  return function (dispatcher) {
    return dispatcher.on("element:".concat(viewElementName), function (evt, data, conversionApi) {
      var viewItem = data.viewItem;
      var modelRange = data.modelRange;
      var modelElement = modelRange && modelRange.start.nodeAfter;

      if (!modelElement) {
        return;
      }

      conversionApi.writer.setAttribute(modelAttribute, viewItem.getAttribute(viewAttribute), modelElement);
    });
  };
}
/**
 * Returns the custom attribute downcast converter.
 */


function downcastAttribute(modelElementName, viewElementName, viewAttribute, modelAttribute) {
  return function (dispatcher) {
    return dispatcher.on("insert:".concat(modelElementName), function (evt, data, conversionApi) {
      var modelElement = data.item;
      var viewFigure = conversionApi.mapper.toViewElement(modelElement);
      var viewElement = findViewChild(viewFigure, viewElementName, conversionApi);

      if (!viewElement) {
        return;
      }

      conversionApi.writer.setAttribute(viewAttribute, modelElement.getAttribute(modelAttribute), viewElement);
    });
  };
}

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

/***/ "./assets/ckeditor5-link/theme/icons/file-export-solid.svg":
/*!*****************************************************************!*\
  !*** ./assets/ckeditor5-link/theme/icons/file-export-solid.svg ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"file-export\" class=\"svg-inline--fa fa-file-export fa-w-18\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\"><path fill=\"currentColor\" d=\"M384 121.9c0-6.3-2.5-12.4-7-16.9L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128zM571 308l-95.7-96.4c-10.1-10.1-27.4-3-27.4 11.3V288h-64v64h64v65.2c0 14.3 17.3 21.4 27.4 11.3L571 332c6.6-6.6 6.6-17.4 0-24zm-379 28v-32c0-8.8 7.2-16 16-16h176V160H248c-13.2 0-24-10.8-24-24V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V352H208c-8.8 0-16-7.2-16-16z\"></path></svg>");

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-6ea37d","vendors-node_modules_core-js_internals_create-html_js-node_modules_core-js_internals_string-h-3e7116","vendors-node_modules_ckeditor_ckeditor5-adapter-ckfinder_src_uploadadapter_js-node_modules_ck-a55e36"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vfC9cXC4oanx0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9kb2NlZGl0b3JfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvZmlsZWljb25fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvZm9sZGVyX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL3J1bGVfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvRG9jRGVjb3VwbGVkRWRpdG9yLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY2tlZGl0b3I1LWxpbmsvc3JjL2NhbmNlbHRlbXBsYXRlY29tbWFuZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY2tlZGl0b3I1LWxpbmsvc3JjL3RlbXBsYXRlLWNvbW1hbmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NrZWRpdG9yNS1saW5rL3NyYy90ZW1wbGF0ZS1lZGl0aW5nLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ja2VkaXRvcjUtbGluay9zcmMvdGVtcGxhdGUtdWkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NrZWRpdG9yNS1saW5rL3NyYy90ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY2tlZGl0b3I1LWxpbmsvc3JjL3VpL3RlbXBsYXRlLWFjdGlvbnMtdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY2tlZGl0b3I1LWxpbmsvc3JjL3VpL3RlbXBsYXRlLWZvcm0tdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY2tlZGl0b3I1LWxpbmsvc3JjL3VpL3RlbXBsYXRlLXNhdmUtdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY2tlZGl0b3I1LWxpbmsvc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ja2VkaXRvcjUtbGluay9zcmMvdXRpbHMvbWFudWFsZGVjb3JhdG9yLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy90ZXh0dGVtcGxhdGluZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NrZWRpdG9yNS1saW5rL3RoZW1lL3RlbXBsYXRlLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY2tlZGl0b3I1LWxpbmsvdGhlbWUvdGVtcGxhdGVhY3Rpb25zLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY2tlZGl0b3I1LWxpbmsvdGhlbWUvdGVtcGxhdGVmb3JtLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY2tlZGl0b3I1LWxpbmsvdGhlbWUvaWNvbnMvZmlsZS1leHBvcnQtc29saWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9ja2VkaXRvcjUtbGluay90aGVtZS9pY29ucy90ZW1sYXRlSWNvbi5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NrZWRpdG9yNS1saW5rL3RoZW1lL2ljb25zL3VubGluay5zdmciXSwibmFtZXMiOlsiRGVjb3VwbGVkRWRpdG9yIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidHlwaW5nIiwidHJhbnNmb3JtYXRpb25zIiwiZXh0cmEiLCJmcm9tIiwidG8iLCJtYXRjaGVzIiwiY2hhbmdlVGVtcGxhdGVJdGVtIiwidGhlbiIsImVkaXRvciIsIkNLRWRpdG9ySW5zcGVjdG9yIiwidG9vbGJhckNvbnRhaW5lciIsImFwcGVuZENoaWxkIiwidWkiLCJ2aWV3IiwidG9vbGJhciIsImVsZW1lbnQiLCJ3aW5kb3ciLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJyYW5nZSIsImNvbGxhcHNlZCIsIm1hdGNoQ2FsbGJhY2siLCJ0ZXh0Iiwib2Zmc2V0IiwicGF0dGVybiIsIm1hdGNoIiwic2xpY2UiLCJzdGFydCIsImluZGV4IiwiZW5kIiwibWF0Y2hJbmZvIiwiY2FsbGJhY2siLCJkYXRhIiwiUExBQ0VIT0xERVJTIiwiZmlsdGVyIiwiaXRlbSIsIml0ZW1OYW1lIiwibmFtZSIsImluZGV4T2YiLCJxdWVyeSIsInRvTG93ZXJDYXNlIiwiaWQiLCJxdWVzdGlvbiIsInR5cGUiLCJDb250cm9sbGVyIiwibG9nIiwiZmlsZW5hbWUiLCJnZXRJY29uIiwiZmlsZU5hbWUiLCJwcmV0dHlGaWxlSWNvbnMiLCJnZXRBdHRyaWJ1dGUiLCJpbWciLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwic2V0QXR0cmlidXRlIiwiU3RyaW5nIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJhcmciLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImpRdWVyeSIsInJlYWR5IiwiJCIsIm1vdmVMRm9sZGVyTGlzdCIsImFqYXgiLCJtZXRob2QiLCJ1cmwiLCJmb2xkZXJNb3ZpbmdJbiIsInVzZXJfY29kZSIsImRvbmUiLCJyZXMiLCJlbXB0eSIsInJlc3VsdHMiLCJhZGRDbGFzcyIsInBhcmVudF9mb2xkZXIiLCJhcHBlbmRUbyIsImVhY2giLCJyb3dzIiwiaSIsImxpc3RJdGVtIiwibGlGb2xkZXIiLCJhdHRyIiwiZm9sZGVyVG9Nb3ZlIiwiY29kZSIsImxhYmVsIiwicGF0aCIsInJlcGxhY2UiLCJtb3ZlRm9ybSIsInN1Ym1pdEJ1dHRvbiIsIlByaXNtIiwiZ2V0T3BlcmF0b3JzIiwib3BlcmF0b3JzIiwicnVsZUF1dG9jb21wbGV0ZSIsInRyaWJ1dGUiLCJUcmlidXRlIiwidmFsdWVzIiwic2VsZWN0VGVtcGxhdGUiLCJvcmlnaW5hbCIsImtleSIsIm1lbnVJdGVtVGVtcGxhdGUiLCJzdHJpbmciLCJhdXRvY29tcGxldGVNb2RlIiwiYXR0YWNoIiwiZ2V0RWxlbWVudEJ5SWQiLCJydWxlIiwiZm9jdXMiLCJpbm5lckhUTUwiLCJ2YWx1ZSIsInN5bmNfc2Nyb2xsIiwicHJldmVudERlZmF1bHQiLCJiZWZvcmVfdGFiIiwic2VsZWN0aW9uU3RhcnQiLCJhZnRlcl90YWIiLCJzZWxlY3Rpb25FbmQiLCJsZW5ndGgiLCJjdXJzb3JfcG9zIiwicmVzdWx0X2VsZW1lbnQiLCJzY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwiY2IiLCJVUkwiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJvcGVuIiwic2VuZCIsInJ1bGVWYXJzIiwiYm9keSIsImV4cHJlc3Npb24iLCJleHByX2FyZyIsImdldFJ1bGVWYXJzIiwiY2hpcHMiLCJzaG93QWxlcnRzIiwic2V0UmVxdWVzdEhlYWRlciIsInN0cmluZ2lmeSIsImNsYXNzTmFtZSIsInNjb3BlIiwiYWxlcnQiLCJzdHlsZSIsImRpc3BsYXkiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQXR0cmlidXRlIiwiYXJncyIsInB1c2giLCJEZWNvdXBsZWRFZGl0b3JCYXNlIiwiYnVpbHRpblBsdWdpbnMiLCJFc3NlbnRpYWxzIiwiQWxpZ25tZW50IiwiRm9udFNpemUiLCJGb250RmFtaWx5IiwiRm9udENvbG9yIiwiRm9udEJhY2tncm91bmRDb2xvciIsIlVwbG9hZEFkYXB0ZXIiLCJBdXRvZm9ybWF0IiwiQm9sZCIsIkl0YWxpYyIsIlN0cmlrZXRocm91Z2giLCJVbmRlcmxpbmUiLCJCbG9ja1F1b3RlIiwiQ0tGaW5kZXIiLCJFYXN5SW1hZ2UiLCJIZWFkaW5nIiwiSW1hZ2UiLCJJbWFnZUNhcHRpb24iLCJJbWFnZVN0eWxlIiwiSW1hZ2VUb29sYmFyIiwiSW1hZ2VVcGxvYWQiLCJJbmRlbnQiLCJJbmRlbnRCbG9jayIsIkxpbmsiLCJMaXN0IiwiTWVkaWFFbWJlZCIsIlBhcmFncmFwaCIsIlBhc3RlRnJvbU9mZmljZSIsIlRhYmxlIiwiVGFibGVUb29sYmFyIiwiVGVtcGxhdGUiLCJQYWdlQnJlYWsiLCJDbG91ZFNlcnZpY2VzIiwiZGVmYXVsdENvbmZpZyIsIml0ZW1zIiwiaW1hZ2UiLCJzdHlsZXMiLCJ0YWJsZSIsImNvbnRlbnRUb29sYmFyIiwibGFuZ3VhZ2UiLCJyZXF1aXJlIiwiYXBwIiwic3RhcnRTdGltdWx1c0FwcCIsIkNhbmNlbFRlbXBsYXRlQ29tbWFuZCIsIm1vZGVsIiwiZG9jIiwic2VsZWN0ZWRFbGVtZW50IiwiZmlyc3QiLCJzZWxlY3Rpb24iLCJnZXRTZWxlY3RlZEJsb2NrcyIsImlzSW1hZ2VBbGxvd2VkIiwic2NoZW1hIiwiaXNFbmFibGVkIiwiY2hlY2tBdHRyaWJ1dGUiLCJjaGVja0F0dHJpYnV0ZUluU2VsZWN0aW9uIiwibGlua0NvbW1hbmQiLCJjb21tYW5kcyIsImdldCIsImNoYW5nZSIsIndyaXRlciIsInJhbmdlc1RvVW5saW5rIiwiaXNDb2xsYXBzZWQiLCJmaW5kQXR0cmlidXRlUmFuZ2UiLCJnZXRGaXJzdFBvc2l0aW9uIiwiZ2V0VmFsaWRSYW5nZXMiLCJnZXRSYW5nZXMiLCJtYW51YWxEZWNvcmF0b3JzIiwibWFudWFsRGVjb3JhdG9yIiwiQ29tbWFuZCIsIlRlbXBsYXRlQ29tbWFuZCIsIkNvbGxlY3Rpb24iLCJfZ2V0RGVjb3JhdG9yU3RhdGVGcm9tTW9kZWwiLCJ0ZW1wbGF0ZVZhciIsIm1hbnVhbERlY29yYXRvcklkcyIsInRydXRoeU1hbnVhbERlY29yYXRvcnMiLCJmYWxzeU1hbnVhbERlY29yYXRvcnMiLCJwb3NpdGlvbiIsImhhc0F0dHJpYnV0ZSIsInZhclJhbmdlIiwiZm9yRWFjaCIsInNldFNlbGVjdGlvbiIsImNyZWF0ZVBvc2l0aW9uQWZ0ZXIiLCJub2RlQmVmb3JlIiwiYXR0cmlidXRlcyIsInRvTWFwIiwiZ2V0QXR0cmlidXRlcyIsInNldCIsImluc2VydENvbnRlbnQiLCJjcmVhdGVUZXh0IiwicG9zaXRpb25BZnRlciIsInJlbW92ZVNlbGVjdGlvbkF0dHJpYnV0ZSIsInJhbmdlcyIsImFsbG93ZWRSYW5nZXMiLCJjcmVhdGVSYW5nZU9uIiwicmFuZ2VzVG9VcGRhdGUiLCJfaXNSYW5nZVRvVXBkYXRlIiwiZGVjb3JhdG9yTmFtZSIsImFsbG93ZWRSYW5nZSIsImNvbnRhaW5zUmFuZ2UiLCJISUdITElHSFRfU0VMRUNURURfQ0xBU1MiLCJERUNPUkFUT1JfTUFOVUFMIiwiVGVtcGxhdGVFZGl0aW5nIiwiY29uZmlnIiwiZGVmaW5lIiwiYWRkVGFyZ2V0VG9FeHRlcm5hbExpbmtzIiwiZXh0ZW5kIiwiYWxsb3dBdHRyaWJ1dGVzIiwiY29udmVyc2lvbiIsImF0dHJpYnV0ZVRvRWxlbWVudCIsImNyZWF0ZVRlbXBsYXRlRWxlbWVudCIsImNvbnZlcnNpb25BcGkiLCJjcmVhdGVBdHRyaWJ1dGVFbGVtZW50IiwicHJpb3JpdHkiLCJzZXRDdXN0b21Qcm9wZXJ0eSIsImVsZW1lbnRUb0F0dHJpYnV0ZSIsInZpZXdFbGVtZW50IiwiYWRkIiwibGlua0RlY29yYXRvcnMiLCJnZXRMb2NhbGl6ZWREZWNvcmF0b3JzIiwidCIsIm5vcm1hbGl6ZURlY29yYXRvcnMiLCJfZW5hYmxlTWFudWFsRGVjb3JhdG9ycyIsIm1vZGUiLCJ0d29TdGVwQ2FyZXRNb3ZlbWVudFBsdWdpbiIsInBsdWdpbnMiLCJUd29TdGVwQ2FyZXRNb3ZlbWVudCIsInJlZ2lzdGVyQXR0cmlidXRlIiwiaW5saW5lSGlnaGxpZ2h0IiwiX2VuYWJsZUluc2VydENvbnRlbnRTZWxlY3Rpb25BdHRyaWJ1dGVzRml4ZXIiLCJfZW5hYmxlQ2xpY2tpbmdBZnRlckxpbmsiLCJfZW5hYmxlVHlwaW5nT3ZlckxpbmsiLCJfaGFuZGxlRGVsZXRlQ29udGVudEFmdGVyTGluayIsIm1hbnVhbERlY29yYXRvckRlZmluaXRpb25zIiwiY29tbWFuZCIsImRlY29yYXRvciIsIk1hbnVhbERlY29yYXRvciIsIm1hbnVhbERlY29yYXRvck5hbWUiLCJsaXN0ZW5UbyIsImFuY2hvciIsIm5vZGVBZnRlciIsInJlbW92ZUxpbmtBdHRyaWJ1dGVzRnJvbVNlbGVjdGlvbiIsImVkaXRpbmciLCJhZGRPYnNlcnZlciIsIk1vdXNlT2JzZXJ2ZXIiLCJjbGlja2VkIiwibGlua1JhbmdlIiwiaXNUb3VjaGluZyIsInNlbGVjdGlvbkF0dHJpYnV0ZXMiLCJkZWxldGVkQ29udGVudCIsImlzVHlwaW5nIiwic2hvdWxkQ29weUF0dHJpYnV0ZXMiLCJldnQiLCJhdHRyaWJ1dGUiLCJzaG91bGRQcmVzZXJ2ZUF0dHJpYnV0ZXMiLCJoYXNCYWNrc3BhY2VQcmVzc2VkIiwiZG9tRXZlbnQiLCJrZXlDb2RlIiwia2V5Q29kZXMiLCJjb250YWluc1Bvc2l0aW9uIiwiaXNFcXVhbCIsImVucXVldWVDaGFuZ2UiLCJJbnB1dCIsIkNsaXBib2FyZFBpcGVsaW5lIiwiUGx1Z2luIiwiZmlyc3RQb3NpdGlvbiIsImxhc3RQb3NpdGlvbiIsImdldExhc3RQb3NpdGlvbiIsIm5vZGVBdEZpcnN0UG9zaXRpb24iLCJpcyIsIm5vZGVBdExhc3RQb3NpdGlvbiIsInRleHROb2RlIiwiY3JlYXRlUmFuZ2UiLCJpbnB1dCIsImlzSW5wdXQiLCJiYXRjaCIsIlZJU1VBTF9TRUxFQ1RJT05fTUFSS0VSX05BTUUiLCJUZW1wbGF0ZVVpIiwiQ2xpY2tPYnNlcnZlciIsImFjdGlvbnNWaWV3IiwiX2NyZWF0ZUFjdGlvbnNWaWV3Iiwic2F2ZVZpZXciLCJfY3JlYXRlU2F2ZVZpZXciLCJmb3JtVmlldyIsIl9jcmVhdGVGb3JtVmlldyIsIl9iYWxsb29uIiwiQ29udGV4dHVhbEJhbGxvb24iLCJfcGFuZWwiLCJCYWxsb29uUGFuZWxWaWV3IiwiX2NyZWF0ZVRvb2xiYXJMaW5rQnV0dG9uIiwiX2VuYWJsZVVzZXJCYWxsb29uSW50ZXJhY3Rpb25zIiwibWFya2VyVG9IaWdobGlnaHQiLCJjbGFzc2VzIiwibWFya2VyVG9FbGVtZW50IiwiZGVzdHJveSIsIlRlbXBsYXRlQWN0aW9uc1ZpZXciLCJsb2NhbGUiLCJ0ZW1wbGF0ZUNvbW1hbmQiLCJjYW5jZWxUZW1wbGF0ZUNvbW1hbmQiLCJiaW5kIiwiZWRpdEJ1dHRvblZpZXciLCJ1bmxpbmtCdXR0b25WaWV3IiwiX2FkZEZvcm1WaWV3IiwiZXhlY3V0ZSIsIl9oaWRlVUkiLCJrZXlzdHJva2VzIiwiY2FuY2VsIiwiVEVNUExBVEVfS0VZU1RST0tFIiwiVGVtcGxhdGVTYXZlVmlldyIsIlRlbXBsYXRlRm9ybVZpZXciLCJsYWJlbElucHV0VmlldyIsImZpZWxkVmlldyIsInNhdmVCdXR0b25WaWV3IiwidHlwZUlucHV0VmlldyIsImJ1dHRvblZpZXciLCJnZXREZWNvcmF0b3JTd2l0Y2hlc1N0YXRlIiwiX2Nsb3NlRm9ybVZpZXciLCJrZXlFdnREYXRhIiwiX3Nob3dVSSIsImNvbXBvbmVudEZhY3RvcnkiLCJidXR0b24iLCJCdXR0b25WaWV3IiwiaWNvbiIsIlRlbWxhdGVJY29uIiwia2V5c3Ryb2tlIiwidG9vbHRpcCIsImlzVG9nZ2xlYWJsZSIsIlNhdmVUZW1wbGF0ZSIsIl9hZGRTYXZlVmlldyIsInZpZXdEb2N1bWVudCIsInBhcmVudExpbmsiLCJfZ2V0U2VsZWN0ZWRMaW5rRWxlbWVudCIsIl9hcmVBY3Rpb25zVmlzaWJsZSIsImZvY3VzVHJhY2tlciIsImlzRm9jdXNlZCIsIl9pc1VJVmlzaWJsZSIsImNsaWNrT3V0c2lkZUhhbmRsZXIiLCJlbWl0dGVyIiwiYWN0aXZhdG9yIiwiX2lzVUlJblBhbmVsIiwiY29udGV4dEVsZW1lbnRzIiwiX2FyZUFjdGlvbnNJblBhbmVsIiwiX2dldEJhbGxvb25Qb3NpdGlvbkRhdGEiLCJwb3NpdGlvbnMiLCJ0YXJnZXQiLCJub3J0aEFycm93U291dGgiLCJjb250ZW50IiwicmVuZGVyIiwicGluIiwiX2lzRm9ybUluUGFuZWwiLCJkaXNhYmxlQ3NzVHJhbnNpdGlvbnMiLCJ2aXNpYmxlVmlldyIsInNlbGVjdCIsImVuYWJsZUNzc1RyYW5zaXRpb25zIiwicmVzdG9yZU1hbnVhbERlY29yYXRvclN0YXRlcyIsInVuZGVmaW5lZCIsIl9yZW1vdmVGb3JtVmlldyIsInJlbW92ZSIsIl9oaWRlRmFrZVZpc3VhbFNlbGVjdGlvbiIsImZvcmNlVmlzaWJsZSIsIl9zaG93RmFrZVZpc3VhbFNlbGVjdGlvbiIsIl9hZGRBY3Rpb25zVmlldyIsInNob3dTdGFjayIsIl9zdGFydFVwZGF0aW5nVUkiLCJzdG9wTGlzdGVuaW5nIiwicHJldlNlbGVjdGVkTGluayIsInByZXZTZWxlY3Rpb25QYXJlbnQiLCJnZXRTZWxlY3Rpb25QYXJlbnQiLCJ1cGRhdGUiLCJzZWxlY3RlZExpbmsiLCJzZWxlY3Rpb25QYXJlbnQiLCJ1cGRhdGVQb3NpdGlvbiIsImdldEFuY2VzdG9ycyIsInJldmVyc2UiLCJmaW5kIiwibm9kZSIsImhhc1ZpZXciLCJtYXJrZXJzIiwiaGFzIiwibWFya2VyVmlld0VsZW1lbnRzIiwiQXJyYXkiLCJtYXBwZXIiLCJtYXJrZXJOYW1lVG9FbGVtZW50cyIsIm5ld1JhbmdlIiwiY3JlYXRlUG9zaXRpb25CZWZvcmUiLCJkb21Db252ZXJ0ZXIiLCJ2aWV3UmFuZ2VUb0RvbSIsInRhcmdldExpbmsiLCJnZXRGaXJzdFJhbmdlIiwibWFwVmlld1RvRG9tIiwiZmluZExpbmtFbGVtZW50QW5jZXN0b3IiLCJnZXRUcmltbWVkIiwic3RhcnRMaW5rIiwiZW5kTGluayIsImNyZWF0ZVJhbmdlSW4iLCJ1cGRhdGVNYXJrZXIiLCJpc0F0RW5kIiwic3RhcnRQb3NpdGlvbiIsImdldExhc3RNYXRjaGluZ1Bvc2l0aW9uIiwiaXNDb250ZW50IiwiYm91bmRhcmllcyIsImFkZE1hcmtlciIsInVzaW5nT3BlcmF0aW9uIiwiYWZmZWN0c0RhdGEiLCJyZW1vdmVNYXJrZXIiLCJhbmNlc3RvciIsImlzTGlua0VsZW1lbnQiLCJGb2N1c1RyYWNrZXIiLCJLZXlzdHJva2VIYW5kbGVyIiwicHJldmlld0J1dHRvblZpZXciLCJfY3JlYXRlUHJldmlld0J1dHRvbiIsIl9jcmVhdGVCdXR0b24iLCJ1bmxpbmtJY29uIiwiaWNvbnMiLCJfZm9jdXNhYmxlcyIsIlZpZXdDb2xsZWN0aW9uIiwiX2ZvY3VzQ3ljbGVyIiwiRm9jdXNDeWNsZXIiLCJmb2N1c2FibGVzIiwia2V5c3Ryb2tlSGFuZGxlciIsImFjdGlvbnMiLCJmb2N1c1ByZXZpb3VzIiwiZm9jdXNOZXh0Iiwic2V0VGVtcGxhdGUiLCJ0YWciLCJ0YWJpbmRleCIsImNoaWxkcmVuIiwiY2hpbGRWaWV3cyIsInYiLCJmb2N1c0ZpcnN0IiwiZXZlbnROYW1lIiwiZGVsZWdhdGUiLCJiaW5kVGVtcGxhdGUiLCJ3aXRoVGV4dCIsImV4dGVuZFRlbXBsYXRlIiwicmVsIiwidGVtcGxhdGUiLCJldmVudExpc3RlbmVycyIsIlZpZXciLCJfY3JlYXRlVGV4dElucHV0IiwiX2NyZWF0ZURyb3BEb3duSW5wdXQiLCJjYW5jZWxCdXR0b25WaWV3IiwiX21hbnVhbERlY29yYXRvclN3aXRjaGVzIiwiX2NyZWF0ZU1hbnVhbERlY29yYXRvclN3aXRjaGVzIiwiX2NyZWF0ZUZvcm1DaGlsZHJlbiIsImNsYXNzTGlzdCIsImluamVjdENzc1RyYW5zaXRpb25EaXNhYmxlciIsInJlZHVjZSIsImFjY3VtdWxhdG9yIiwic3dpdGNoQnV0dG9uIiwiaXNPbiIsInN1Ym1pdEhhbmRsZXIiLCJsYWJlbGVkSW5wdXQiLCJMYWJlbGVkRmllbGRWaWV3IiwiY3JlYXRlTGFiZWxlZElucHV0VGV4dCIsImNyZWF0ZUxhYmVsZWREcm9wZG93biIsImxhYmVsZWRGaWVsZFZpZXciLCJ2aWV3VWlkIiwic3RhdHVzVWlkIiwiZHJvcGRvd25WaWV3IiwiY3JlYXRlRHJvcGRvd24iLCJTcGxpdEJ1dHRvblZpZXciLCJhcmlhRGVzY3JpYmVkQnlJZCIsImJ1dHRvbnMiLCJfY3JlYXRlRHJvcGRvd25CdXR0b24iLCJhZGRUb29sYmFyVG9Ecm9wZG93biIsInRvTWFueSIsImFyZUVuYWJsZWQiLCJzb21lIiwiYXJlQWN0aXZlIiwiZmluZEluZGV4IiwidG9vbGJhclZpZXciLCJpc1ZlcnRpY2FsIiwic3dpdGNoZXMiLCJjcmVhdGVDb2xsZWN0aW9uIiwiU3dpdGNoQnV0dG9uVmlldyIsImRlY29yYXRvclZhbHVlIiwiY29tbWFuZFZhbHVlIiwiZGVmYXVsdFZhbHVlIiwib24iLCJhZGRpdGlvbmFsQnV0dG9uc1ZpZXciLCJtYXAiLCJBVFRSSUJVVEVfV0hJVEVTUEFDRVMiLCJTQUZFX1VSTCIsIkVNQUlMX1JFR19FWFAiLCJQUk9UT0NPTF9SRUdfRVhQIiwiSElHSExJR0hUX0NMQVNTIiwiU0FWRV9LRVlTVFJPS0UiLCJnZXRDdXN0b21Qcm9wZXJ0eSIsImxpbmtFbGVtZW50IiwiZW5zdXJlU2FmZVVybCIsImlzU2FmZVVybCIsIm5vcm1hbGl6ZWRVcmwiLCJkZWNvcmF0b3JzIiwibG9jYWxpemVkRGVjb3JhdG9yc0xhYmVscyIsInJldEFycmF5IiwiT2JqZWN0IiwiZW50cmllcyIsImFzc2lnbiIsInVwcGVyRmlyc3QiLCJpc0VtYWlsIiwidGVzdCIsImFkZExpbmtQcm90b2NvbElmQXBwbGljYWJsZSIsImxpbmsiLCJkZWZhdWx0UHJvdG9jb2wiLCJwcm90b2NvbCIsImlzUHJvdG9jb2xOZWVkZWQiLCJDdXN0b21GaWd1cmVBdHRyaWJ1dGVzIiwic2V0dXBDdXN0b21DbGFzc0NvbnZlcnNpb24iLCJ1cGNhc3RDdXN0b21DbGFzc2VzIiwic2V0dXBDdXN0b21BdHRyaWJ1dGVDb252ZXJzaW9uIiwidmlld0VsZW1lbnROYW1lIiwibW9kZWxFbGVtZW50TmFtZSIsImRvd25jYXN0Q3VzdG9tQ2xhc3Nlc1RvRmlndXJlIiwidmlld0F0dHJpYnV0ZSIsIm1vZGVsQXR0cmlidXRlIiwidXBjYXN0QXR0cmlidXRlIiwiZG93bmNhc3RBdHRyaWJ1dGUiLCJlbGVtZW50TmFtZSIsImRpc3BhdGNoZXIiLCJ2aWV3SXRlbSIsIm1vZGVsUmFuZ2UiLCJtb2RlbEVsZW1lbnQiLCJjdXJyZW50QXR0cmlidXRlVmFsdWUiLCJnZXRDbGFzc05hbWVzIiwidmlld0ZpZ3VyZSIsInRvVmlld0VsZW1lbnQiLCJkb3duY2FzdEN1c3RvbUNsYXNzZXNUb0NoaWxkIiwiZmluZFZpZXdDaGlsZCIsInZpZXdDaGlsZHJlbiIsImdldEl0ZW1zIiwibWl4IiwiT2JzZXJ2YWJsZU1peGluIiwiVFJBTlNGT1JNQVRJT05TIiwiY29weXJpZ2h0IiwicmVnaXN0ZXJlZFRyYWRlbWFyayIsInRyYWRlbWFyayIsIm9uZUhhbGYiLCJvbmVUaGlyZCIsInR3b1RoaXJkcyIsIm9uZUZvcnRoIiwidGhyZWVRdWFydGVycyIsImxlc3NUaGFuT3JFcXVhbCIsImdyZWF0ZXJUaGFuT3JFcXVhbCIsIm5vdEVxdWFsIiwiYXJyb3dMZWZ0IiwiYXJyb3dSaWdodCIsImhvcml6b250YWxFbGxpcHNpcyIsImVuRGFzaCIsImVtRGFzaCIsInF1b3Rlc1ByaW1hcnkiLCJidWlsZFF1b3Rlc1JlZ0V4cCIsInF1b3Rlc1NlY29uZGFyeSIsInF1b3Rlc1ByaW1hcnlFbkdiIiwicXVvdGVzU2Vjb25kYXJ5RW5HYiIsInF1b3Rlc1ByaW1hcnlQbCIsInF1b3Rlc1NlY29uZGFyeVBsIiwiVFJBTlNGT1JNQVRJT05fR1JPVVBTIiwic3ltYm9scyIsIm1hdGhlbWF0aWNhbCIsInR5cG9ncmFwaHkiLCJxdW90ZXMiLCJERUZBVUxUX1RSQU5TRk9STUFUSU9OUyIsIlRleHRUZW1wbGF0aW5nIiwiaW5jbHVkZSIsIm1vZGVsU2VsZWN0aW9uIiwicGFyZW50IiwiX2VuYWJsZVRyYW5zZm9ybWF0aW9uV2F0Y2hlcnMiLCJub3JtYWxpemVkVHJhbnNmb3JtYXRpb25zIiwibm9ybWFsaXplVHJhbnNmb3JtYXRpb25zIiwidGVzdENhbGxiYWNrIiwibm9ybWFsaXplZFRyYW5zZm9ybWF0aW9uIiwid2F0Y2hlckNhbGxiYWNrIiwiZXhlYyIsInJlcGxhY2VzIiwibWF0Y2hlZFJhbmdlIiwiY2hhbmdlSW5kZXgiLCJyZXBsYWNlV2l0aCIsInJlcGxhY2VQb3NpdGlvbiIsImdldFNoaWZ0ZWRCeSIsInJlcGxhY2VSYW5nZSIsImdldFRleHRBdHRyaWJ1dGVzQWZ0ZXJQb3NpdGlvbiIsIm9wdGlvbnMiLCJ3YXRjaGVyIiwiVGV4dFdhdGNoZXIiLCJub3JtYWxpemVGcm9tIiwiUmVnRXhwIiwiZXNjYXBlUmVnRXhwIiwibm9ybWFsaXplVG8iLCJxdW90ZUNoYXJhY3RlciIsImlzTm90UmVtb3ZlZCIsInRyYW5zZm9ybWF0aW9uIiwiaW5jbHVkZXMiLCJjb25maWd1cmVkIiwiY29uY2F0IiwiZXhwYW5kR3JvdXBzQW5kUmVtb3ZlRHVwbGljYXRlcyIsImRlZmluaXRpb25zIiwiZGVmaW5lZFRyYW5zZm9ybWF0aW9ucyIsIlNldCIsInRyYW5zZm9ybWF0aW9uT3JHcm91cCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwSTs7Ozs7Ozs7Ozs7Ozs7O0FDekJBLGlFQUFlO0FBQ2YsQ0FBQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNERDtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7V0FLSSxtQkFBVTtBQUFBOztBQUVOQSxzRUFBQSxDQUNZQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsNEJBQXZCLENBRFosRUFDa0U7QUFFMURDLGNBQU0sRUFBRTtBQUNKQyx5QkFBZSxFQUFFO0FBRWJDLGlCQUFLLEVBQUUsQ0FDSDtBQUNJQyxrQkFBSSxFQUFFLHlCQURWO0FBRUlDLGdCQUFFLEVBQUUsWUFBQUMsT0FBTztBQUFBLHVCQUFJLENBQUMsSUFBRCxFQUFPLEtBQUksQ0FBQ0Msa0JBQUwsQ0FBd0JELE9BQXhCLENBQVAsRUFBeUMsSUFBekMsQ0FBSjtBQUFBLGVBRmYsQ0FFaUU7O0FBRmpFLGFBREc7QUFGTTtBQURiO0FBRmtELE9BRGxFLEVBZ0JLRSxJQWhCTCxDQWdCVSxVQUFBQyxNQUFNLEVBQUk7QUFHWkMsb0ZBQUEsQ0FBMEJELE1BQTFCO0FB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Ozs7Ozs7O0FDNXdCRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUNxQmxSLFE7Ozs7Ozs7Ozs7Ozs7O0FBQ3BCO0FBQ0Q7QUFDQTtBQUNDLG1CQUFzQjtBQUNyQixhQUFPLENBQUV1RSx1REFBRixFQUFtQjJFLGtEQUFuQixDQUFQO0FBQ0E7QUFFRDtBQUNEO0FBQ0E7Ozs7U0FDQyxlQUF3QjtBQUN2QixhQUFPLGdCQUFQO0FBQ0E7Ozs7RUFib0NiLHlFO0FBZ0J0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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LEdBQUosRUFBL0I7O0FBRnVELDhDQUlsQkYsV0FKa0I7QUFBQTs7QUFBQTtBQUl2RCwyREFBbUQ7QUFBQSxVQUF2Q0cscUJBQXVDOztBQUNsRCxVQUFLMUMscUJBQXFCLENBQUUwQyxxQkFBRixDQUExQixFQUFzRDtBQUFBLG9EQUN2QjFDLHFCQUFxQixDQUFFMEMscUJBQUYsQ0FERTtBQUFBOztBQUFBO0FBQ3JELGlFQUErRTtBQUFBLGdCQUFuRVIsY0FBbUU7QUFDOUVNLGtDQUFzQixDQUFDNVgsR0FBdkIsQ0FBNEJzWCxjQUE1QjtBQUNBO0FBSG9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJckQsT0FKRCxNQUlPO0FBQ05NLDhCQUFzQixDQUFDNVgsR0FBdkIsQ0FBNEI4WCxxQkFBNUI7QUFDQTtBQUNEO0FBWnNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBY3ZELFNBQU8zTixLQUFLLENBQUM3YSxJQUFOLENBQVlzb0Isc0JBQVosQ0FBUDtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2hSRDs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLGlFQUFlLHNuQjs7Ozs7Ozs7Ozs7Ozs7O0FDQWYsaUVBQWUsOC9COzs7Ozs7Ozs7Ozs7Ozs7QUNBZixpRUFBZSxvMEIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2RvY2VkaXRvcl9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvZG9jZWRpdG9yX2NvbnRyb2xsZXIuanNcIixcblx0XCIuL2ZpbGVpY29uX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9maWxlaWNvbl9jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9mb2xkZXJfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2ZvbGRlcl9jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9ydWxlX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9ydWxlX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuKGp8dClzeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQge0NvbnRyb2xsZXJ9IGZyb20gJ3N0aW11bHVzJztcbmltcG9ydCBEZWNvdXBsZWRFZGl0b3IgZnJvbSAnLi4vRG9jRGVjb3VwbGVkRWRpdG9yJztcbmltcG9ydCBDS0VkaXRvckluc3BlY3RvciBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWluc3BlY3Rvcic7XG5pbXBvcnQgVGV4dFRlbXBsYXRpbmcgZnJvbSAnLi4vdGV4dHRlbXBsYXRpbmcnO1xuXG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuLy9pbXBvcnQgRXhwb3J0UGRmIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtZXhwb3J0LXBkZi9zcmMvZXhwb3J0cGRmJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgc3RhdGljIHRhcmdldHMgPSBbXCJkb2MtdmFyaWFibGVzXCJdXG5cblxuICAgIGNvbm5lY3QoKSB7XG5cbiAgICAgICAgRGVjb3VwbGVkRWRpdG9yXG4gICAgICAgICAgICAuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb2N1bWVudC1lZGl0b3JfX2VkaXRhYmxlJyksIHtcblxuICAgICAgICAgICAgICAgIHR5cGluZzoge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1hdGlvbnM6IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmE6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb206IC8oXFxbezJ9KShbYS16XSspKFxcXXsyfSkkLyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IG1hdGNoZXMgPT4gW251bGwsIHRoaXMuY2hhbmdlVGVtcGxhdGVJdGVtKG1hdGNoZXMpLCBudWxsXS8vICAvL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZWRpdG9yID0+IHtcblxuXG4gICAgICAgICAgICAgICAgQ0tFZGl0b3JJbnNwZWN0b3IuYXR0YWNoKCBlZGl0b3IgKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0b29sYmFyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvY3VtZW50LWVkaXRvcl9fdG9vbGJhcicpO1xuICAgICAgICAgICAgICAgIHRvb2xiYXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdG9yLnVpLnZpZXcudG9vbGJhci5lbGVtZW50KTtcblxuXG4gICAgICAgICAgICAgICAgd2luZG93LmVkaXRvciA9IGVkaXRvcjtcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRvciA9IGVkaXRvcjtcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgdGV4dFRlc3RDYWxsYmFjayhyYW5nZSkge1xuICAgICAgICBpZiAoIXJhbmdlLmNvbGxhcHNlZCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gRGVjb3VwbGVkRWRpdG9yLnBsdWdpbnMudGV4dE1hdGNoLm1hdGNoKHJhbmdlLCBtYXRjaENhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBtYXRjaENhbGxiYWNrKHRleHQsIG9mZnNldCkge1xuICAgICAgICB2YXIgcGF0dGVybiA9IC9cXFt7Mn0oW0Etel18XFxdKSokLyxcbiAgICAgICAgICAgIG1hdGNoID0gdGV4dC5zbGljZSgwLCBvZmZzZXQpXG4gICAgICAgICAgICAgICAgLm1hdGNoKHBhdHRlcm4pO1xuXG4gICAgICAgIGlmICghbWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXJ0OiBtYXRjaC5pbmRleCxcbiAgICAgICAgICAgIGVuZDogb2Zmc2V0XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZGF0YUNhbGxiYWNrKG1hdGNoSW5mbywgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGRhdGEgPSBQTEFDRUhPTERFUlMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICB2YXIgaXRlbU5hbWUgPSAnW1snICsgaXRlbS5uYW1lICsgJ11dJztcbiAgICAgICAgICAgIHJldHVybiBpdGVtTmFtZS5pbmRleE9mKG1hdGNoSW5mby5xdWVyeS50b0xvd2VyQ2FzZSgpKSA9PSAwO1xuICAgICAgICB9KTtcblxuICAgICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VUZW1wbGF0ZUl0ZW0obWF0Y2gpIHtcblxuICAgICAgICByZXR1cm4gbWF0Y2hbMV07XG4gICAgfVxuICAgIGFkZFBsZWhvbGRlciggaWQgKXtcbiAgICAgICAgY29uc3QgaXRlbSA9IHtcbiAgICAgICAgICAgIGlkIDogaWQsXG4gICAgICAgICAgICBxdWVzdGlvbiA6IFwiXCIsXG4gICAgICAgICAgICB0eXBlIDogXCJpbnB1dFwiXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQge0NvbnRyb2xsZXJ9IGZyb20gJ3N0aW11bHVzJztcblxuaW1wb3J0IHByZXR0eUZpbGVJY29ucyBmcm9tICdwcmV0dHktZmlsZS1pY29ucyc7XG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcblxuICAgIHN0YXRpYyB2YWx1ZXMgPSB7IGZpbGVuYW1lOiBTdHJpbmcgfVxuXG4gICAgY29ubmVjdCgpIHtcblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVuYW1lKTtcbiAgICAgICAgdGhpcy5nZXRJY29uKHRoaXMuZmlsZW5hbWUpO1xuICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2Nlc3MpO1xuICAgIH1cblxuXG4gICAgZ2V0SWNvbihmaWxlTmFtZSl7XG4gICAgICAgIHZhciBpdGVtID0gcHJldHR5RmlsZUljb25zLmdldEljb24odGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKSlcbiAgICAgICAgdmFyIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBpbWcuc3JjID0gJy9hc3NldHMvaW1nL3N2Zy8nICsgaXRlbSArICcuc3ZnJztcbiAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgaXRlbSk7XG4gICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgaXRlbSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChpbWcpIDtcblxuICAgIH1cbn1cbiIsImltcG9ydCB7Q29udHJvbGxlcn0gZnJvbSAnc3RpbXVsdXMnO1xuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG5cblxuXG4gICAgY29ubmVjdCgpIHtcbiAgICB9XG5cblxuXG4gICAgc3RvcFByb3BhZ2F0aW9uKGV2ZW50KSB7XG4gICAgICAgIC8vIFRoZSBldmVudCB3b24ndCBiZSBwcm9wYWdhdGVkIHVwIHRvIHRoZSBkb2N1bWVudCBOT0RFIGFuZFxuICAgICAgICAvLyB0aGVyZWZvcmUgZGVsZWdhdGVkIGV2ZW50cyB3b24ndCBiZSBmaXJlZFxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICBmb2xkZXJMaXN0RnVjbnRpb24oZXZlbnQpIHtcbiAgICAgICAgY29uc3QgYXJnID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgkKSB7XG4gICAgICAgICAgICB2YXIgbW92ZUxGb2xkZXJMaXN0ID0gJCgnZGl2I21vdmVfbGlzdCcpXG5cblxuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgdXJsOiBcIi9hcGkvZm9sZGVyL2xpc3Qtc3ViLWl0ZW0vXCIgKyBhcmcuZm9sZGVyTW92aW5nSW4sXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBpbmRleDogLTEsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZm9sZGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIHVzZXJfY29kZTogXCIwOTcwMjI5ZS00ODY3LTRhZGEtYjBhYy1hMTk5NDQ2Y2JjMjFcIlxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgbW92ZUxGb2xkZXJMaXN0LmVtcHR5KCk7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMucmVzdWx0cy5kYXRhO1xuXG4gICAgICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9maWxsIGRyb3Bkb3duIGxpc3Qgd2l0aCBmb2xkZXJzXG5cbiAgICAgICAgICAgICAgICAkKCc8c3Bhbi8+JylcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdkcm9wZG93bi1pdGVtIGRyb3Bkb3duLWhlYWRlcicpXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0KHJlcy5yZXN1bHRzLnBhcmVudF9mb2xkZXIpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhtb3ZlTEZvbGRlckxpc3QpO1xuICAgICAgICAgICAgICAgICQoJzxkaXYvPicpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnZHJvcGRvd24tZGl2aWRlcicpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhtb3ZlTEZvbGRlckxpc3QpO1xuICAgICAgICAgICAgICAgICQuZWFjaChkYXRhLnJvd3MsIGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHZhciBpZCA9ICdtb3ZlX2xpc3QnICsgaTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxpc3RJdGVtID0gJCgnPGRpdi8+JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnZC1mbGV4ICBmbGV4LXJvdyBtLTIgYm9yZGVyLWJvdHRvbScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8obW92ZUxGb2xkZXJMaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgJCgnPGRpdi8+JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnZHJvcGRvd24tZGl2aWRlcicpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8obGlzdEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAkKCc8aS8+JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnZmFzIGZhLWZvbGRlciBtci0yJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhsaXN0SXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsaUZvbGRlciA9ICQoJzxhLz4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2hyZWYnLCBcIiNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWZvbGRlci10by1tb3ZlJywgYXJnLmZvbGRlclRvTW92ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWZvbGRlci1tb3ZpbmctaW4nLCBkYXRhLnJvd3NbaV0uY29kZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWFjdGlvbicsIFwiY2xpY2stPmZvbGRlciNmb2xkZXJMaXN0RnVjbnRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KGRhdGEucm93c1tpXS5sYWJlbClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhsaXN0SXRlbSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLyogKioqKioqKipcbiAgICAgICAgICAgICAgICAgICAgICBtb3ZlIHRvIHNwZWNpZmljIGZvbGRlciBjb250ZW50IGluIGRyb3Bkb3duIGxpc3RcbiAgICAgICAgICAgICAgICAgICAgICBieSByZWZpbGxpbmcgdGhlIGRyb3Bkb3duIG1lbnUgICAgICAgKioqKioqKioqKioqKiAgKi9cblxuICAgICAgICAgICAgICAgICAgICBsZXQgdXJsID0gYXJnLnBhdGg7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IHVybC5yZXBsYWNlKFwiaXRlbUNcIiwgYXJnLmZvbGRlclRvTW92ZSk7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IHVybC5yZXBsYWNlKFwibmV3UGFyZW50Q1wiLCBkYXRhLnJvd3NbaV0uY29kZSk7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IHVybC5yZXBsYWNlKFwidXNlckNcIiwgXCIwOTcwMjI5ZS00ODY3LTRhZGEtYjBhYy1hMTk5NDQ2Y2JjMjFcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHVybClcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1vdmVGb3JtID0gJCgnPGZvcm0vPicpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ21sLWF1dG8nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FjdGlvbicsIHVybClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdtZXRob2QnLCAncG9zdCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8obGlzdEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3VibWl0QnV0dG9uID0gJCgnPGJ1dHRvbi8+JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnYnRuIGJ0bi1ibG9jayBidG4tb3V0bGluZS1zZWNvbmRhcnkgIHAtMCBtYi0xJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCd0eXBlJywgJ3N1Ym1pdCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8obW92ZUZvcm0pO1xuICAgICAgICAgICAgICAgICAgICAkKCc8aS8+JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnZmFzIGZhLWNoZXZyb24tY2lyY2xlLWRvd24gbXItMSBtbC0xJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhzdWJtaXRCdXR0b24pO1xuXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcblxuXG4gICAgfTtcbn1cbiIsImltcG9ydCB7Q29udHJvbGxlcn0gZnJvbSAnc3RpbXVsdXMnO1xuaW1wb3J0IFByaXNtIGZyb20gJ3ByaXNtanMnO1xuaW1wb3J0IFRyaWJ1dGUgZnJvbSBcInRyaWJ1dGVqc1wiO1xuaW1wb3J0IHtDb21wb25lbnRDaGlwSW5wdXR9IGZyb20gJ2NoaXAtaW5wdXQnO1xuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICBQcmlzbS5sYW5ndWFnZXMucnVsZSA9IHtcbiAgICAgICAgICAgICdudW1iZXInOntcbiAgICAgICAgICAgICAgICBwYXR0ZXJuIDogL1swLTldKyg/OlxcLlswLTldKyk/KFtFZV1bXFwrXFwtXVswLTldKyk/L1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdwdW5jdHVhdGlvbic6e1xuICAgICAgICAgICAgICAgIHBhdHRlcm4gOiAvWygpe307OixdL1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdzdHJpbmcnOntcbiAgICAgICAgICAgICAgICBwYXR0ZXJuIDogL1wiWzAtOWEtekEtWi1fXStcIi9cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnb3BlcmF0b3InOntcbiAgICAgICAgICAgICAgICBwYXR0ZXJuIDogL1xcYltBLVpfXStcXGIvLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nZXRPcGVyYXRvcnMoKG9wZXJhdG9ycyk9PntcblxuICAgICAgICAgICAgdGhpcy5ydWxlQXV0b2NvbXBsZXRlKG9wZXJhdG9ycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuICAgIHJ1bGVBdXRvY29tcGxldGUob3BlcmF0b3JzKXtcblxuICAgICAgICB2YXIgdHJpYnV0ZSA9IG5ldyBUcmlidXRlKHtcbiAgICAgICAgICAgIHZhbHVlczogb3BlcmF0b3JzLFxuICAgICAgICAgICAgc2VsZWN0VGVtcGxhdGU6IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gICBpdGVtLm9yaWdpbmFsLmtleTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIC8vICAgIGNvbnRhaW5lckNsYXNzOiBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB0cmlidXRlLWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgbWVudUl0ZW1UZW1wbGF0ZTogZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAgICc8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+JytpdGVtLnN0cmluZyArICc8aSBjbGFzcz1cImZhciBmYS1xdWVzdGlvbi1jaXJjbGUgaGVscFwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNtdWx0aUNvbGxhcHNlRXhhbXBsZTJcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWNvbnRyb2xzPVwibXVsdGlDb2xsYXBzZUV4YW1wbGUyXCI+PC9pPjwvZGl2Pic7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXV0b2NvbXBsZXRlTW9kZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgdHJpYnV0ZS5hdHRhY2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0aW5nXCIpKTtcbiAgICB9XG4gICAgaGlnaGxpZ2h0KCl7XG5cbiAgICAgICAgbGV0IHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRpbmdcIik7XG5cbiAgICAgICAgbGV0IHJ1bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpZ2hsaWdodGluZy1jb250ZW50XCIpO1xuXG4gICAgICAgIHJ1bGUuZm9jdXMoKTtcbiAgICAgICAgcnVsZS5pbm5lckhUTUwgPSBQcmlzbS5oaWdobGlnaHQodGV4dC52YWx1ZSwgUHJpc20ubGFuZ3VhZ2VzLnJ1bGUsICdydWxlJyk7XG4gICAgICAgIHRoaXMuc3luY19zY3JvbGwoIHRleHQgKTtcbiAgICB9XG5cbiAgICBjaGVja190YWIoIGV2ZW50KSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0aW5nXCIpO1xuICAgICAgICBsZXQgY29kZSA9IGVsZW1lbnQudmFsdWU7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT0gXCJUYWJcIikge1xuICAgICAgICAgICAgLyogVGFiIGtleSBwcmVzc2VkICovXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBzdG9wIG5vcm1hbFxuICAgICAgICAgICAgbGV0IGJlZm9yZV90YWIgPSBjb2RlLnNsaWNlKDAsIGVsZW1lbnQuc2VsZWN0aW9uU3RhcnQpOyAvLyB0ZXh0IGJlZm9yZSB0YWJcbiAgICAgICAgICAgIGxldCBhZnRlcl90YWIgPSBjb2RlLnNsaWNlKGVsZW1lbnQuc2VsZWN0aW9uRW5kLCBlbGVtZW50LnZhbHVlLmxlbmd0aCk7IC8vIHRleHQgYWZ0ZXIgdGFiXG4gICAgICAgICAgICBsZXQgY3Vyc29yX3BvcyA9IGVsZW1lbnQuc2VsZWN0aW9uRW5kICsgMjsgLy8gYWZ0ZXIgdGFiIHBsYWNlZCwgd2hlcmUgY3Vyc29yIG1vdmVzIHRvIC0gMiBmb3IgMiBzcGFjZXNcbiAgICAgICAgICAgIGVsZW1lbnQudmFsdWUgPSBiZWZvcmVfdGFiICsgXCIgIFwiICsgYWZ0ZXJfdGFiOyAvLyBhZGQgdGFiIGNoYXIgLSAyIHNwYWNlc1xuICAgICAgICAgICAgLy8gbW92ZSBjdXJzb3JcbiAgICAgICAgICAgIGVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSBjdXJzb3JfcG9zO1xuICAgICAgICAgICAgZWxlbWVudC5zZWxlY3Rpb25FbmQgPSBjdXJzb3JfcG9zO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgc3luY19zY3JvbGwoZWxlbWVudCkge1xuICAgICAgICAvKiBTY3JvbGwgcmVzdWx0IHRvIHNjcm9sbCBjb29yZHMgb2YgZXZlbnQgLSBzeW5jIHdpdGggdGV4dGFyZWEgKi9cbiAgICAgICAgbGV0IHJlc3VsdF9lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoaWdobGlnaHRpbmdcIik7XG4gICAgICAgIC8vIEdldCBhbmQgc2V0IHggYW5kIHlcbiAgICAgICAgcmVzdWx0X2VsZW1lbnQuc2Nyb2xsVG9wID0gZWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgIHJlc3VsdF9lbGVtZW50LnNjcm9sbExlZnQgPSBlbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgfVxuXG4gICAgZ2V0T3BlcmF0b3JzKCBjYikge1xuICAgICAgICB2YXIgVVJMID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3J1bGVcIjtcbiAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IFtdO1xuICAgICAgICAgICAgaWYoeGhyLnJlYWR5U3RhdGUgPT09IDQpe1xuICAgICAgICAgICAgICAgIGlmICggIHhoci5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpLnJlc3VsdHMub3BlcmF0b3JzO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh4aHIuc3RhdHVzID09PSA0MDMpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYihkYXRhKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9O1xuICAgICAgICB4aHIub3BlbihcIkdFVFwiLCBVUkwgLCBmYWxzZSk7XG4gICAgICAgIHhoci5zZW5kKCk7XG4gICAgfVxuICAgIGNvbXBpbGUoICkge1xuICAgICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdGluZ1wiKTtcbiAgICAgICAgbGV0IHJ1bGVWYXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJydWxlLXZhcnNcIik7XG5cbiAgICAgICAgdmFyIHVybCA9ICdodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3J1bGUvY29tcGlsZSc7XG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgdmFyIGJvZHkgPSB7XG4gICAgICAgICAgICBleHByZXNzaW9uIDogdGV4dC52YWx1ZSAsXG4gICAgICAgICAgICBleHByX2FyZyA6IHRoaXMuZ2V0UnVsZVZhcnMocnVsZVZhcnMuY2hpcHMpXG4gICAgICAgIH1cbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+ICB7XG4gICAgICAgICAgICBpZih4aHIucmVhZHlTdGF0ZSA9PT0gNCl7XG4gICAgICAgICAgICAgICAgaWYgKCAgeGhyLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dBbGVydHMoZGF0YS5yZXN1bHRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgfVxuICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgdXJsICApO1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtdHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIik7XG4gICAgICAgIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KGJvZHkpKTtcbiAgICB9XG4gICAgIHNob3dBbGVydHMocmVzdWx0cykge1xuICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvb3RzdHJhcC1hbGVydCcpLmNsYXNzTmFtZSA9IFwiYWxlcnQgYWxlcnQtXCIrIHJlc3VsdHMuc2NvcGUgO1xuXG4gICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9vdHN0cmFwLWFsZXJ0JykuaW5uZXJIVE1MID0gcmVzdWx0cy5hbGVydCA7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib290c3RyYXAtYWxlcnQnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib290c3RyYXAtYWxlcnQnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnfSwgMTcwMDApO1xuICAgICAgICBpZihyZXN1bHRzLnNjb3BlID09ICdzdWNjZXNzJyl7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0LXJ1bGUnKS5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSA7XG4gICAgICAgIH1pZihyZXN1bHRzLnNjb3BlID09ICdkYW5nZXInKXtcbiAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0LXJ1bGUnKS5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLFwidHJ1ZVwiKSA7XG4gICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBnZXRSdWxlVmFycyhhcmdzKSB7XG5cbiAgICAgICAgbGV0IGV4cHJfYXJnID0gW107XG4gICAgICAgIGZvciAobGV0IGFyZyBvZiBhcmdzKSB7XG4gICAgICAgICAgICBleHByX2FyZy5wdXNoKGFyZy5sYWJlbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV4cHJfYXJnO1xuICAgIH1cbn1cblxuXG4iLCJpbXBvcnQgRGVjb3VwbGVkRWRpdG9yQmFzZSAgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1lZGl0b3ItZGVjb3VwbGVkL3NyYy9kZWNvdXBsZWRlZGl0b3InO1xuaW1wb3J0IFBhZ2VCcmVhayBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LXBhZ2UtYnJlYWsvc3JjL3BhZ2VicmVhayc7XG5pbXBvcnQgRXNzZW50aWFscyBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWVzc2VudGlhbHMvc3JjL2Vzc2VudGlhbHMnO1xuaW1wb3J0IEFsaWdubWVudCBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWFsaWdubWVudC9zcmMvYWxpZ25tZW50JztcbmltcG9ydCBGb250U2l6ZSBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWZvbnQvc3JjL2ZvbnRzaXplJztcbmltcG9ydCBGb250RmFtaWx5IGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtZm9udC9zcmMvZm9udGZhbWlseSc7XG5pbXBvcnQgRm9udENvbG9yIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtZm9udC9zcmMvZm9udGNvbG9yJztcbmltcG9ydCBGb250QmFja2dyb3VuZENvbG9yIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtZm9udC9zcmMvZm9udGJhY2tncm91bmRjb2xvcic7XG5pbXBvcnQgVXBsb2FkQWRhcHRlciBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWFkYXB0ZXItY2tmaW5kZXIvc3JjL3VwbG9hZGFkYXB0ZXInO1xuaW1wb3J0IEF1dG9mb3JtYXQgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1hdXRvZm9ybWF0L3NyYy9hdXRvZm9ybWF0JztcbmltcG9ydCBCb2xkIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtYmFzaWMtc3R5bGVzL3NyYy9ib2xkJztcbmltcG9ydCBJdGFsaWMgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1iYXNpYy1zdHlsZXMvc3JjL2l0YWxpYyc7XG5pbXBvcnQgU3RyaWtldGhyb3VnaCBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWJhc2ljLXN0eWxlcy9zcmMvc3RyaWtldGhyb3VnaCc7XG5pbXBvcnQgVW5kZXJsaW5lIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtYmFzaWMtc3R5bGVzL3NyYy91bmRlcmxpbmUnO1xuaW1wb3J0IEJsb2NrUXVvdGUgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1ibG9jay1xdW90ZS9zcmMvYmxvY2txdW90ZSc7XG5pbXBvcnQgQ0tGaW5kZXIgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1ja2ZpbmRlci9zcmMvY2tmaW5kZXInO1xuaW1wb3J0IEVhc3lJbWFnZSBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWVhc3ktaW1hZ2Uvc3JjL2Vhc3lpbWFnZSc7XG5pbXBvcnQgSGVhZGluZyBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWhlYWRpbmcvc3JjL2hlYWRpbmcnO1xuaW1wb3J0IEltYWdlIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtaW1hZ2Uvc3JjL2ltYWdlJztcbmltcG9ydCBJbWFnZUNhcHRpb24gZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1pbWFnZS9zcmMvaW1hZ2VjYXB0aW9uJztcbmltcG9ydCBJbWFnZVN0eWxlIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtaW1hZ2Uvc3JjL2ltYWdlc3R5bGUnO1xuaW1wb3J0IEltYWdlVG9vbGJhciBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWltYWdlL3NyYy9pbWFnZXRvb2xiYXInO1xuaW1wb3J0IEltYWdlVXBsb2FkIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtaW1hZ2Uvc3JjL2ltYWdldXBsb2FkJztcbmltcG9ydCBJbmRlbnQgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1pbmRlbnQvc3JjL2luZGVudCc7XG5pbXBvcnQgSW5kZW50QmxvY2sgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1pbmRlbnQvc3JjL2luZGVudGJsb2NrJztcbmltcG9ydCBUZW1wbGF0ZSBmcm9tICcuL2NrZWRpdG9yNS1saW5rL3NyYy90ZW1wbGF0ZSc7XG5pbXBvcnQgTGluayBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWxpbmsvc3JjL2xpbmsnO1xuaW1wb3J0IExpc3QgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1saXN0L3NyYy9saXN0JztcbmltcG9ydCBNZWRpYUVtYmVkIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtbWVkaWEtZW1iZWQvc3JjL21lZGlhZW1iZWQnO1xuaW1wb3J0IFBhcmFncmFwaCBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LXBhcmFncmFwaC9zcmMvcGFyYWdyYXBoJztcbmltcG9ydCBQYXN0ZUZyb21PZmZpY2UgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1wYXN0ZS1mcm9tLW9mZmljZS9zcmMvcGFzdGVmcm9tb2ZmaWNlJztcbmltcG9ydCBUYWJsZSBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LXRhYmxlL3NyYy90YWJsZSc7XG5pbXBvcnQgVGFibGVUb29sYmFyIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtdGFibGUvc3JjL3RhYmxldG9vbGJhcic7XG5pbXBvcnQgQ2xvdWRTZXJ2aWNlcyBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWNsb3VkLXNlcnZpY2VzL3NyYy9jbG91ZHNlcnZpY2VzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVjb3VwbGVkRWRpdG9yIGV4dGVuZHMgRGVjb3VwbGVkRWRpdG9yQmFzZSB7fVxuXG4vLyBQbHVnaW5zIHRvIGluY2x1ZGUgaW4gdGhlIGJ1aWxkLlxuRGVjb3VwbGVkRWRpdG9yLmJ1aWx0aW5QbHVnaW5zID0gW1xuICAgIEVzc2VudGlhbHMsXG4gICAgQWxpZ25tZW50LFxuICAgIEZvbnRTaXplLFxuICAgIEZvbnRGYW1pbHksXG4gICAgRm9udENvbG9yLFxuICAgIEZvbnRCYWNrZ3JvdW5kQ29sb3IsXG4gICAgVXBsb2FkQWRhcHRlcixcbiAgICBBdXRvZm9ybWF0LFxuICAgIEJvbGQsXG4gICAgSXRhbGljLFxuICAgIFN0cmlrZXRocm91Z2gsXG4gICAgVW5kZXJsaW5lLFxuICAgIEJsb2NrUXVvdGUsXG4gICAgQ0tGaW5kZXIsXG4gICAgRWFzeUltYWdlLFxuICAgIEhlYWRpbmcsXG4gICAgSW1hZ2UsXG4gICAgSW1hZ2VDYXB0aW9uLFxuICAgIEltYWdlU3R5bGUsXG4gICAgSW1hZ2VUb29sYmFyLFxuICAgIEltYWdlVXBsb2FkLFxuICAgIEluZGVudCxcbiAgICBJbmRlbnRCbG9jayxcbiAgICBMaW5rLFxuICAgIExpc3QsXG4gICAgTWVkaWFFbWJlZCxcbiAgICBQYXJhZ3JhcGgsXG4gICAgUGFzdGVGcm9tT2ZmaWNlLFxuICAgIFRhYmxlLFxuICAgIFRhYmxlVG9vbGJhcixcbiAgICBUZW1wbGF0ZSxcbiAgICBQYWdlQnJlYWssXG4gICAgQ2xvdWRTZXJ2aWNlc1xuXG5dO1xuXG4vLyBFZGl0b3IgY29uZmlndXJhdGlvbi5cbkRlY291cGxlZEVkaXRvci5kZWZhdWx0Q29uZmlnID0ge1xuICAgIHRvb2xiYXI6IHtcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICd0ZW1wbGF0ZScsXG4gICAgICAgICAgICAndGVtcGxhdGUtc2F2ZScsXG4gICAgICAgICAgICAnfCcsXG4gICAgICAgICAgICAnaGVhZGluZycsXG4gICAgICAgICAgICAnfCcsXG4gICAgICAgICAgICAncGFnZUJyZWFrJyxcbiAgICAgICAgICAgICd8JyxcbiAgICAgICAgICAgICdmb250ZmFtaWx5JyxcbiAgICAgICAgICAgICdmb250c2l6ZScsXG4gICAgICAgICAgICAnZm9udENvbG9yJyxcbiAgICAgICAgICAgICdmb250QmFja2dyb3VuZENvbG9yJyxcbiAgICAgICAgICAgICd8JyxcbiAgICAgICAgICAgICdib2xkJyxcbiAgICAgICAgICAgICdpdGFsaWMnLFxuICAgICAgICAgICAgJ3VuZGVybGluZScsXG4gICAgICAgICAgICAnc3RyaWtldGhyb3VnaCcsXG4gICAgICAgICAgICAnfCcsXG4gICAgICAgICAgICAnYWxpZ25tZW50JyxcbiAgICAgICAgICAgICd8JyxcbiAgICAgICAgICAgICdudW1iZXJlZExpc3QnLFxuICAgICAgICAgICAgJ2J1bGxldGVkTGlzdCcsXG4gICAgICAgICAgICAnfCcsXG4gICAgICAgICAgICAnaW5kZW50JyxcbiAgICAgICAgICAgICdvdXRkZW50JyxcbiAgICAgICAgICAgICd8JyxcbiAgICAgICAgICAgICdibG9ja3F1b3RlJyxcbiAgICAgICAgICAgICdpbWFnZVVwbG9hZCcsXG4gICAgICAgICAgICAnaW5zZXJ0VGFibGUnLFxuICAgICAgICAgICAgJ21lZGlhRW1iZWQnLFxuICAgICAgICAgICAgJ3wnLFxuICAgICAgICAgICAgJ3VuZG8nLFxuICAgICAgICAgICAgJ3JlZG8nXG4gICAgICAgIF1cbiAgICB9LFxuICAgIGltYWdlOiB7XG4gICAgICAgIHN0eWxlczogW1xuICAgICAgICAgICAgJ2Z1bGwnLFxuICAgICAgICAgICAgJ2FsaWduTGVmdCcsXG4gICAgICAgICAgICAnYWxpZ25SaWdodCdcbiAgICAgICAgXSxcbiAgICAgICAgdG9vbGJhcjogW1xuICAgICAgICAgICAgJ2ltYWdlU3R5bGU6YWxpZ25MZWZ0JyxcbiAgICAgICAgICAgICdpbWFnZVN0eWxlOmZ1bGwnLFxuICAgICAgICAgICAgJ2ltYWdlU3R5bGU6YWxpZ25SaWdodCcsXG4gICAgICAgICAgICAnfCcsXG4gICAgICAgICAgICAnaW1hZ2VUZXh0QWx0ZXJuYXRpdmUnXG4gICAgICAgIF1cbiAgICB9LFxuICAgIHRhYmxlOiB7XG4gICAgICAgIGNvbnRlbnRUb29sYmFyOiBbXG4gICAgICAgICAgICAndGFibGVDb2x1bW4nLFxuICAgICAgICAgICAgJ3RhYmxlUm93JyxcbiAgICAgICAgICAgICdtZXJnZVRhYmxlQ2VsbHMnXG4gICAgICAgIF1cbiAgICB9LFxuICAgIC8vIFRoaXMgdmFsdWUgbXVzdCBiZSBrZXB0IGluIHN5bmMgd2l0aCB0aGUgbGFuZ3VhZ2UgZGVmaW5lZCBpbiB3ZWJwYWNrLmNvbmZpZy5qcy5cbiAgICBsYW5ndWFnZTogJ2VuJ1xufTtcbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuXG5cbmltcG9ydCAndHJpYnV0ZWpzJztcbmltcG9ydCAnYm9vdHN0cmFwJztcbmltcG9ydCAnLi9ib290c3RyYXAnO1xucmVxdWlyZSgncHJvY2VzcycpOyIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5Jztcbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLihqfHQpc3g/JC9cbikpO1xuXG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCIvKipcbiAqIEBsaWNlbnNlIENvcHlyaWdodCAoYykgMjAwMy0yMDIxLCBDS1NvdXJjZSAtIEZyZWRlcmljbyBLbmFiYmVuLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogRm9yIGxpY2Vuc2luZywgc2VlIExJQ0VOU0UubWQgb3IgaHR0cHM6Ly9ja2VkaXRvci5jb20vbGVnYWwvY2tlZGl0b3Itb3NzLWxpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGluay91bmxpbmtjb21tYW5kXG4gKi9cblxuaW1wb3J0ICBDb21tYW5kICBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWNvcmUvc3JjL2NvbW1hbmQnO1xuaW1wb3J0ICBmaW5kQXR0cmlidXRlUmFuZ2UgIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtdHlwaW5nL3NyYy91dGlscy9maW5kYXR0cmlidXRlcmFuZ2UnO1xuaW1wb3J0ICBmaXJzdCAgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS11dGlscy9zcmMvZmlyc3QnO1xuXG5pbXBvcnQgeyBpc0ltYWdlQWxsb3dlZCB9IGZyb20gJy4vdXRpbHMnO1xuXG4vKipcbiAqIFRoZSB1bmxpbmsgY29tbWFuZC4gSXQgaXMgdXNlZCBieSB0aGUge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt+TGluayBsaW5rIHBsdWdpbn0uXG4gKlxuICogQGV4dGVuZHMgbW9kdWxlOmNvcmUvY29tbWFuZH5Db21tYW5kXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbmNlbFRlbXBsYXRlQ29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xuXHQvKipcblx0ICogQGluaGVyaXREb2Ncblx0ICovXG5cdHJlZnJlc2goKSB7XG5cdFx0Y29uc3QgbW9kZWwgPSB0aGlzLmVkaXRvci5tb2RlbDtcblx0XHRjb25zdCBkb2MgPSBtb2RlbC5kb2N1bWVudDtcblxuXHRcdGNvbnN0IHNlbGVjdGVkRWxlbWVudCA9IGZpcnN0KCBkb2Muc2VsZWN0aW9uLmdldFNlbGVjdGVkQmxvY2tzKCkgKTtcblxuXHRcdC8vIEEgY2hlY2sgZm9yIHRoZSBgTGlua0ltYWdlYCBwbHVnaW4uIElmIHRoZSBzZWxlY3Rpb24gY29udGFpbnMgYW4gaW1hZ2UgZWxlbWVudCwgZ2V0IHZhbHVlcyBmcm9tIHRoZSBlbGVtZW50LlxuXHRcdC8vIEN1cnJlbnRseSB0aGUgc2VsZWN0aW9uIHJlYWRzIGF0dHJpYnV0ZXMgZnJvbSB0ZXh0IG5vZGVzIG9ubHkuIFNlZSAjNzQyOSBhbmQgIzc0NjUuXG5cdFx0aWYgKCBpc0ltYWdlQWxsb3dlZCggc2VsZWN0ZWRFbGVtZW50LCBtb2RlbC5zY2hlbWEgKSApIHtcblx0XHRcdHRoaXMuaXNFbmFibGVkID0gbW9kZWwuc2NoZW1hLmNoZWNrQXR0cmlidXRlKCBzZWxlY3RlZEVsZW1lbnQsICd0ZW1wbGF0ZVZhcicgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5pc0VuYWJsZWQgPSBtb2RlbC5zY2hlbWEuY2hlY2tBdHRyaWJ1dGVJblNlbGVjdGlvbiggZG9jLnNlbGVjdGlvbiwgJ3RlbXBsYXRlVmFyJyApO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBFeGVjdXRlcyB0aGUgY29tbWFuZC5cblx0ICpcblx0ICogV2hlbiB0aGUgc2VsZWN0aW9uIGlzIGNvbGxhcHNlZCwgaXQgcmVtb3ZlcyB0aGUgYGxpbmtIcmVmYCBhdHRyaWJ1dGUgZnJvbSBlYWNoIG5vZGUgd2l0aCB0aGUgc2FtZSBgbGlua0hyZWZgIGF0dHJpYnV0ZSB2YWx1ZS5cblx0ICogV2hlbiB0aGUgc2VsZWN0aW9uIGlzIG5vbi1jb2xsYXBzZWQsIGl0IHJlbW92ZXMgdGhlIGBsaW5rSHJlZmAgYXR0cmlidXRlIGZyb20gZWFjaCBub2RlIGluIHNlbGVjdGVkIHJhbmdlcy5cblx0ICpcblx0ICogIyBEZWNvcmF0b3JzXG5cdCAqXG5cdCAqIElmIHtAbGluayBtb2R1bGU6bGluay9saW5rfkxpbmtDb25maWcjZGVjb3JhdG9ycyBgY29uZmlnLmxpbmsuZGVjb3JhdG9yc2B9IGlzIHNwZWNpZmllZCxcblx0ICogYWxsIGNvbmZpZ3VyZWQgZGVjb3JhdG9ycyBhcmUgcmVtb3ZlZCB0b2dldGhlciB3aXRoIHRoZSBgbGlua0hyZWZgIGF0dHJpYnV0ZS5cblx0ICpcblx0ICogQGZpcmVzIGV4ZWN1dGVcblx0ICovXG5cdGV4ZWN1dGUoKSB7XG5cdFx0Y29uc3QgZWRpdG9yID0gdGhpcy5lZGl0b3I7XG5cdFx0Y29uc3QgbW9kZWwgPSB0aGlzLmVkaXRvci5tb2RlbDtcblx0XHRjb25zdCBzZWxlY3Rpb24gPSBtb2RlbC5kb2N1bWVudC5zZWxlY3Rpb247XG5cdFx0Y29uc3QgbGlua0NvbW1hbmQgPSBlZGl0b3IuY29tbWFuZHMuZ2V0KCAndGVtcGxhdGUnICk7XG5cblx0XHRtb2RlbC5jaGFuZ2UoIHdyaXRlciA9PiB7XG5cdFx0XHQvLyBHZXQgcmFuZ2VzIHRvIHVubGluay5cblx0XHRcdGNvbnN0IHJhbmdlc1RvVW5saW5rID0gc2VsZWN0aW9uLmlzQ29sbGFwc2VkID9cblx0XHRcdFx0WyBmaW5kQXR0cmlidXRlUmFuZ2UoXG5cdFx0XHRcdFx0c2VsZWN0aW9uLmdldEZpcnN0UG9zaXRpb24oKSxcblx0XHRcdFx0XHQndGVtcGxhdGVWYXInLFxuXHRcdFx0XHRcdHNlbGVjdGlvbi5nZXRBdHRyaWJ1dGUoICd0ZW1wbGF0ZVZhcicgKSxcblx0XHRcdFx0XHRtb2RlbFxuXHRcdFx0XHQpIF0gOlxuXHRcdFx0XHRtb2RlbC5zY2hlbWEuZ2V0VmFsaWRSYW5nZXMoIHNlbGVjdGlvbi5nZXRSYW5nZXMoKSwgJ3RlbXBsYXRlVmFyJyApO1xuXG5cdFx0XHQvLyBSZW1vdmUgYGxpbmtIcmVmYCBhdHRyaWJ1dGUgZnJvbSBzcGVjaWZpZWQgcmFuZ2VzLlxuXHRcdFx0Zm9yICggY29uc3QgcmFuZ2Ugb2YgcmFuZ2VzVG9VbmxpbmsgKSB7XG5cdFx0XHRcdHdyaXRlci5yZW1vdmVBdHRyaWJ1dGUoICd0ZW1wbGF0ZVZhcicsIHJhbmdlICk7XG5cdFx0XHRcdC8vIElmIHRoZXJlIGFyZSByZWdpc3RlcmVkIGN1c3RvbSBhdHRyaWJ1dGVzLCB0aGVuIHJlbW92ZSB0aGVtIGR1cmluZyB1bmxpbmsuXG5cdFx0XHRcdGlmICggbGlua0NvbW1hbmQgKSB7XG5cdFx0XHRcdFx0Zm9yICggY29uc3QgbWFudWFsRGVjb3JhdG9yIG9mIGxpbmtDb21tYW5kLm1hbnVhbERlY29yYXRvcnMgKSB7XG5cdFx0XHRcdFx0XHR3cml0ZXIucmVtb3ZlQXR0cmlidXRlKCBtYW51YWxEZWNvcmF0b3IuaWQsIHJhbmdlICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlIENvcHlyaWdodCAoYykgMjAwMy0yMDIxLCBDS1NvdXJjZSAtIEZyZWRlcmljbyBLbmFiYmVuLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogRm9yIGxpY2Vuc2luZywgc2VlIExJQ0VOU0UubWQgb3IgaHR0cHM6Ly9ja2VkaXRvci5jb20vbGVnYWwvY2tlZGl0b3Itb3NzLWxpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGluay9saW5rY29tbWFuZFxuICovXG5cbmltcG9ydCAgQ29tbWFuZCAgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1jb3JlL3NyYy9jb21tYW5kJztcbmltcG9ydCAgZmluZEF0dHJpYnV0ZVJhbmdlICBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LXR5cGluZy9zcmMvdXRpbHMvZmluZGF0dHJpYnV0ZXJhbmdlJztcbmltcG9ydCB7IENvbGxlY3Rpb24sIHRvTWFwLCBmaXJzdCB9IGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtdXRpbHMvc3JjLyc7XG5cbmltcG9ydCB7IGlzSW1hZ2VBbGxvd2VkIH0gZnJvbSAnLi91dGlscyc7XG5cbi8qKlxuICogVGhlIGxpbmsgY29tbWFuZC4gSXQgaXMgdXNlZCBieSB0aGUge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt+TGluayBsaW5rIGZlYXR1cmV9LlxuICpcbiAqIEBleHRlbmRzIG1vZHVsZTpjb3JlL2NvbW1hbmR+Q29tbWFuZFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZW1wbGF0ZUNvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcblx0LyoqXG5cdCAqIFRoZSB2YWx1ZSBvZiB0aGUgYCdsaW5rSHJlZidgIGF0dHJpYnV0ZSBpZiB0aGUgc3RhcnQgb2YgdGhlIHNlbGVjdGlvbiBpcyBsb2NhdGVkIGluIGEgbm9kZSB3aXRoIHRoaXMgYXR0cmlidXRlLlxuXHQgKlxuXHQgKiBAb2JzZXJ2YWJsZVxuXHQgKiBAcmVhZG9ubHlcblx0ICogQG1lbWJlciB7T2JqZWN0fHVuZGVmaW5lZH0gI3ZhbHVlXG5cdCAqL1xuXG5cdGNvbnN0cnVjdG9yKCBlZGl0b3IgKSB7XG5cdFx0c3VwZXIoIGVkaXRvciApO1xuXG5cdFx0LyoqXG5cdFx0ICogQSBjb2xsZWN0aW9uIG9mIHtAbGluayBtb2R1bGU6bGluay91dGlsc35NYW51YWxEZWNvcmF0b3IgbWFudWFsIGRlY29yYXRvcnN9XG5cdFx0ICogY29ycmVzcG9uZGluZyB0byB0aGUge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt+TGlua0NvbmZpZyNkZWNvcmF0b3JzIGRlY29yYXRvciBjb25maWd1cmF0aW9ufS5cblx0XHQgKlxuXHRcdCAqIFlvdSBjYW4gY29uc2lkZXIgaXQgYSBtb2RlbCB3aXRoIHN0YXRlcyBvZiBtYW51YWwgZGVjb3JhdG9ycyBhZGRlZCB0byB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGxpbmsuXG5cdFx0ICpcblx0XHQgKiBAcmVhZG9ubHlcblx0XHQgKiBAdHlwZSB7bW9kdWxlOnV0aWxzL2NvbGxlY3Rpb25+Q29sbGVjdGlvbn1cblx0XHQgKi9cblx0XHR0aGlzLm1hbnVhbERlY29yYXRvcnMgPSBuZXcgQ29sbGVjdGlvbigpO1xuXG5cblxuXHR9XG5cblx0LyoqXG5cdCAqIFN5bmNocm9uaXplcyB0aGUgc3RhdGUgb2Yge0BsaW5rICNtYW51YWxEZWNvcmF0b3JzfSB3aXRoIHRoZSBjdXJyZW50bHkgcHJlc2VudCBlbGVtZW50cyBpbiB0aGUgbW9kZWwuXG5cdCAqL1xuXHRyZXN0b3JlTWFudWFsRGVjb3JhdG9yU3RhdGVzKCkge1xuXHRcdGZvciAoIGNvbnN0IG1hbnVhbERlY29yYXRvciBvZiB0aGlzLm1hbnVhbERlY29yYXRvcnMgKSB7XG5cdFx0XHRtYW51YWxEZWNvcmF0b3IudmFsdWUgPSB0aGlzLl9nZXREZWNvcmF0b3JTdGF0ZUZyb21Nb2RlbCggbWFudWFsRGVjb3JhdG9yLmlkICk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEBpbmhlcml0RG9jXG5cdCAqL1xuXHRyZWZyZXNoKCkge1xuXHRcdGNvbnN0IG1vZGVsID0gdGhpcy5lZGl0b3IubW9kZWw7XG5cdFx0Y29uc3QgZG9jID0gbW9kZWwuZG9jdW1lbnQ7XG5cblx0XHRjb25zdCBzZWxlY3RlZEVsZW1lbnQgPSBmaXJzdCggZG9jLnNlbGVjdGlvbi5nZXRTZWxlY3RlZEJsb2NrcygpICk7XG5cblx0XHQvLyBBIGNoZWNrIGZvciB0aGUgYExpbmtJbWFnZWAgcGx1Z2luLiBJZiB0aGUgc2VsZWN0aW9uIGNvbnRhaW5zIGFuIGVsZW1lbnQsIGdldCB2YWx1ZXMgZnJvbSB0aGUgZWxlbWVudC5cblx0XHQvLyBDdXJyZW50bHkgdGhlIHNlbGVjdGlvbiByZWFkcyBhdHRyaWJ1dGVzIGZyb20gdGV4dCBub2RlcyBvbmx5LiBTZWUgIzc0MjkgYW5kICM3NDY1LlxuXHRcdGlmICggaXNJbWFnZUFsbG93ZWQoIHNlbGVjdGVkRWxlbWVudCwgbW9kZWwuc2NoZW1hICkgKSB7XG5cdFx0XHR0aGlzLnZhbHVlID0gc2VsZWN0ZWRFbGVtZW50LmdldEF0dHJpYnV0ZSggJ3RlbXBsYXRlVmFyJyApO1xuXHRcdFx0dGhpcy5pc0VuYWJsZWQgPSBtb2RlbC5zY2hlbWEuY2hlY2tBdHRyaWJ1dGUoIHNlbGVjdGVkRWxlbWVudCwgJ3RlbXBsYXRlVmFyJyApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnZhbHVlID0gZG9jLnNlbGVjdGlvbi5nZXRBdHRyaWJ1dGUoICd0ZW1wbGF0ZVZhcicgKTtcblx0XHRcdHRoaXMuaXNFbmFibGVkID0gbW9kZWwuc2NoZW1hLmNoZWNrQXR0cmlidXRlSW5TZWxlY3Rpb24oIGRvYy5zZWxlY3Rpb24sICd0ZW1wbGF0ZVZhcicgKTtcblx0XHR9XG5cblx0XHRmb3IgKCBjb25zdCBtYW51YWxEZWNvcmF0b3Igb2YgdGhpcy5tYW51YWxEZWNvcmF0b3JzICkge1xuXHRcdFx0bWFudWFsRGVjb3JhdG9yLnZhbHVlID0gdGhpcy5fZ2V0RGVjb3JhdG9yU3RhdGVGcm9tTW9kZWwoIG1hbnVhbERlY29yYXRvci5pZCApO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBFeGVjdXRlcyB0aGUgY29tbWFuZC5cblx0ICpcblx0ICogV2hlbiB0aGUgc2VsZWN0aW9uIGlzIG5vbi1jb2xsYXBzZWQsIHRoZSBgbGlua0hyZWZgIGF0dHJpYnV0ZSB3aWxsIGJlIGFwcGxpZWQgdG8gbm9kZXMgaW5zaWRlIHRoZSBzZWxlY3Rpb24sIGJ1dCBvbmx5IHRvXG5cdCAqIHRob3NlIG5vZGVzIHdoZXJlIHRoZSBgbGlua0hyZWZgIGF0dHJpYnV0ZSBpcyBhbGxvd2VkIChkaXNhbGxvd2VkIG5vZGVzIHdpbGwgYmUgb21pdHRlZCkuXG5cdCAqXG5cdCAqIFdoZW4gdGhlIHNlbGVjdGlvbiBpcyBjb2xsYXBzZWQgYW5kIGlzIG5vdCBpbnNpZGUgdGhlIHRleHQgd2l0aCB0aGUgYGxpbmtIcmVmYCBhdHRyaWJ1dGUsIGFcblx0ICogbmV3IHtAbGluayBtb2R1bGU6ZW5naW5lL21vZGVsL3RleHR+VGV4dCB0ZXh0IG5vZGV9IHdpdGggdGhlIGBsaW5rSHJlZmAgYXR0cmlidXRlIHdpbGwgYmUgaW5zZXJ0ZWQgaW4gcGxhY2Ugb2YgdGhlIGNhcmV0LCBidXRcblx0ICogb25seSBpZiBzdWNoIGVsZW1lbnQgaXMgYWxsb3dlZCBpbiB0aGlzIHBsYWNlLiBUaGUgYF9kYXRhYCBvZiB0aGUgaW5zZXJ0ZWQgdGV4dCB3aWxsIGVxdWFsIHRoZSBgaHJlZmAgcGFyYW1ldGVyLlxuXHQgKiBUaGUgc2VsZWN0aW9uIHdpbGwgYmUgdXBkYXRlZCB0byB3cmFwIHRoZSBqdXN0IGluc2VydGVkIHRleHQgbm9kZS5cblx0ICpcblx0ICogV2hlbiB0aGUgc2VsZWN0aW9uIGlzIGNvbGxhcHNlZCBhbmQgaW5zaWRlIHRoZSB0ZXh0IHdpdGggdGhlIGBsaW5rSHJlZmAgYXR0cmlidXRlLCB0aGUgYXR0cmlidXRlIHZhbHVlIHdpbGwgYmUgdXBkYXRlZC5cblx0ICpcblx0ICogIyBEZWNvcmF0b3JzIGFuZCBtb2RlbCBhdHRyaWJ1dGUgbWFuYWdlbWVudFxuXHQgKlxuXHQgKiBUaGVyZSBpcyBhbiBvcHRpb25hbCBhcmd1bWVudCB0byB0aGlzIGNvbW1hbmQgdGhhdCBhcHBsaWVzIG9yIHJlbW92ZXMgbW9kZWxcblx0ICoge0BnbGluayBmcmFtZXdvcmsvZ3VpZGVzL2FyY2hpdGVjdHVyZS9lZGl0aW5nLWVuZ2luZSN0ZXh0LWF0dHJpYnV0ZXMgdGV4dCBhdHRyaWJ1dGVzfSBicm91Z2h0IGJ5XG5cdCAqIHtAbGluayBtb2R1bGU6bGluay91dGlsc35NYW51YWxEZWNvcmF0b3IgbWFudWFsIGxpbmsgZGVjb3JhdG9yc30uXG5cdCAqXG5cdCAqIFRleHQgYXR0cmlidXRlIG5hbWVzIGluIHRoZSBtb2RlbCBjb3JyZXNwb25kIHRvIHRoZSBlbnRyaWVzIGluIHRoZSB7QGxpbmsgbW9kdWxlOmxpbmsvbGlua35MaW5rQ29uZmlnI2RlY29yYXRvcnMgY29uZmlndXJhdGlvbn0uXG5cdCAqIEZvciBldmVyeSBkZWNvcmF0b3IgY29uZmlndXJlZCwgYSBtb2RlbCB0ZXh0IGF0dHJpYnV0ZSBleGlzdHMgd2l0aCB0aGUgXCJsaW5rXCIgcHJlZml4LiBGb3IgZXhhbXBsZSwgYSBgJ2xpbmtNeURlY29yYXRvcidgIGF0dHJpYnV0ZVxuXHQgKiBjb3JyZXNwb25kcyB0byBgJ215RGVjb3JhdG9yJ2AgaW4gdGhlIGNvbmZpZ3VyYXRpb24uXG5cdCAqXG5cdCAqIFRvIGxlYXJuIG1vcmUgYWJvdXQgbGluayBkZWNvcmF0b3JzLCBjaGVjayBvdXQgdGhlIHtAbGluayBtb2R1bGU6bGluay9saW5rfkxpbmtDb25maWcjZGVjb3JhdG9ycyBgY29uZmlnLmxpbmsuZGVjb3JhdG9yc2B9XG5cdCAqIGRvY3VtZW50YXRpb24uXG5cdCAqXG5cdCAqIEhlcmUgaXMgaG93IHRvIG1hbmFnZSBkZWNvcmF0b3IgYXR0cmlidXRlcyB3aXRoIHRoZSBsaW5rIGNvbW1hbmQ6XG5cdCAqXG5cdCAqXHRcdGNvbnN0IGxpbmtDb21tYW5kID0gZWRpdG9yLmNvbW1hbmRzLmdldCggJ2xpbmsnICk7XG5cdCAqXG5cdCAqXHRcdC8vIEFkZGluZyBhIG5ldyBkZWNvcmF0b3IgYXR0cmlidXRlLlxuXHQgKlx0XHRsaW5rQ29tbWFuZC5leGVjdXRlKCAnaHR0cDovL2V4YW1wbGUuY29tJywge1xuXHQgKlx0XHRcdGxpbmtJc0V4dGVybmFsOiB0cnVlXG5cdCAqXHRcdH0gKTtcblx0ICpcblx0ICpcdFx0Ly8gUmVtb3ZpbmcgYSBkZWNvcmF0b3IgYXR0cmlidXRlIGZyb20gdGhlIHNlbGVjdGlvbi5cblx0ICpcdFx0bGlua0NvbW1hbmQuZXhlY3V0ZSggJ2h0dHA6Ly9leGFtcGxlLmNvbScsIHtcblx0ICpcdFx0XHRsaW5rSXNFeHRlcm5hbDogZmFsc2Vcblx0ICpcdFx0fSApO1xuXHQgKlxuXHQgKlx0XHQvLyBBZGRpbmcgbXVsdGlwbGUgZGVjb3JhdG9yIGF0dHJpYnV0ZXMgYXQgdGhlIHNhbWUgdGltZS5cblx0ICpcdFx0bGlua0NvbW1hbmQuZXhlY3V0ZSggJ2h0dHA6Ly9leGFtcGxlLmNvbScsIHtcblx0ICpcdFx0XHRsaW5rSXNFeHRlcm5hbDogdHJ1ZSxcblx0ICpcdFx0XHRsaW5rSXNEb3dubG9hZGFibGU6IHRydWUsXG5cdCAqXHRcdH0gKTtcblx0ICpcblx0ICpcdFx0Ly8gUmVtb3ZpbmcgYW5kIGFkZGluZyBkZWNvcmF0b3IgYXR0cmlidXRlcyBhdCB0aGUgc2FtZSB0aW1lLlxuXHQgKlx0XHRsaW5rQ29tbWFuZC5leGVjdXRlKCAnaHR0cDovL2V4YW1wbGUuY29tJywge1xuXHQgKlx0XHRcdGxpbmtJc0V4dGVybmFsOiBmYWxzZSxcblx0ICpcdFx0XHRsaW5rRm9vOiB0cnVlLFxuXHQgKlx0XHRcdGxpbmtJc0Rvd25sb2FkYWJsZTogZmFsc2UsXG5cdCAqXHRcdH0gKTtcblx0ICpcblx0ICogKipOb3RlKio6IElmIHRoZSBkZWNvcmF0b3IgYXR0cmlidXRlIG5hbWUgaXMgbm90IHNwZWNpZmllZCwgaXRzIHN0YXRlIHJlbWFpbnMgdW50b3VjaGVkLlxuXHQgKlxuXHQgKiAqKk5vdGUqKjoge0BsaW5rIG1vZHVsZTpsaW5rL3VubGlua2NvbW1hbmR+VW5saW5rQ29tbWFuZCNleGVjdXRlIGBDYW5jZWx0ZW1wbGF0ZWNvbW1hbmQjZXhlY3V0ZSgpYH0gcmVtb3ZlcyBhbGxcblx0ICogZGVjb3JhdG9yIGF0dHJpYnV0ZXMuXG5cdCAqXG5cdCAqIEBmaXJlcyBleGVjdXRlXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSB0ZW1wbGF0ZVZhciBUZW1wbGF0ZSBkZXN0aW5hdGlvbi5cblx0ICogQHBhcmFtIHtPYmplY3R9IFttYW51YWxEZWNvcmF0b3JJZHM9e31dIFRoZSBpbmZvcm1hdGlvbiBhYm91dCBtYW51YWwgZGVjb3JhdG9yIGF0dHJpYnV0ZXMgdG8gYmUgYXBwbGllZCBvciByZW1vdmVkIHVwb24gZXhlY3V0aW9uLlxuXHQgKi9cblx0ZXhlY3V0ZSggdGVtcGxhdGVWYXIsIG1hbnVhbERlY29yYXRvcklkcyA9IHt9ICkge1xuXG5cdFx0Y29uc3QgbW9kZWwgPSB0aGlzLmVkaXRvci5tb2RlbDtcblx0XHRjb25zdCBzZWxlY3Rpb24gPSBtb2RlbC5kb2N1bWVudC5zZWxlY3Rpb247XG5cdFx0Ly8gU3RvcmVzIGluZm9ybWF0aW9uIGFib3V0IG1hbnVhbCBkZWNvcmF0b3JzIHRvIHR1cm4gdGhlbSBvbi9vZmYgd2hlbiBjb21tYW5kIGlzIGFwcGxpZWQuXG5cdFx0Y29uc3QgdHJ1dGh5TWFudWFsRGVjb3JhdG9ycyA9IFtdO1xuXHRcdGNvbnN0IGZhbHN5TWFudWFsRGVjb3JhdG9ycyA9IFtdO1xuXG5cdFx0Zm9yICggY29uc3QgbmFtZSBpbiBtYW51YWxEZWNvcmF0b3JJZHMgKSB7XG5cdFx0XHRpZiAoIG1hbnVhbERlY29yYXRvcklkc1sgbmFtZSBdICkge1xuXHRcdFx0XHR0cnV0aHlNYW51YWxEZWNvcmF0b3JzLnB1c2goIG5hbWUgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZhbHN5TWFudWFsRGVjb3JhdG9ycy5wdXNoKCBuYW1lICk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdG1vZGVsLmNoYW5nZSggd3JpdGVyID0+IHtcblx0XHRcdC8vIElmIHNlbGVjdGlvbiBpcyBjb2xsYXBzZWQgdGhlbiB1cGRhdGUgc2VsZWN0ZWQgbGluayBvciBpbnNlcnQgbmV3IG9uZSBhdCB0aGUgcGxhY2Ugb2YgY2FyZXQuXG5cdFx0XHRpZiAoIHNlbGVjdGlvbi5pc0NvbGxhcHNlZCApIHtcblx0XHRcdFx0Y29uc3QgcG9zaXRpb24gPSBzZWxlY3Rpb24uZ2V0Rmlyc3RQb3NpdGlvbigpO1xuXG5cdFx0XHRcdC8vIFdoZW4gc2VsZWN0aW9uIGlzIGluc2lkZSB0ZXh0IHdpdGggYGxpbmtIcmVmYCBhdHRyaWJ1dGUuXG5cdFx0XHRcdGlmICggc2VsZWN0aW9uLmhhc0F0dHJpYnV0ZSggJ3RlbXBsYXRlVmFyJyApICkge1xuXHRcdFx0XHRcdC8vIFRoZW4gdXBkYXRlIGBsaW5rSHJlZmAgdmFsdWUuXG5cdFx0XHRcdFx0Y29uc3QgdmFyUmFuZ2UgPSBmaW5kQXR0cmlidXRlUmFuZ2UoIHBvc2l0aW9uLCAndGVtcGxhdGVWYXInLCBzZWxlY3Rpb24uZ2V0QXR0cmlidXRlKCAndGVtcGxhdGVWYXInICksIG1vZGVsICk7XG5cblx0XHRcdFx0XHR3cml0ZXIuc2V0QXR0cmlidXRlKCAndGVtcGxhdGVWYXInLCB0ZW1wbGF0ZVZhci5pZCwgdmFyUmFuZ2UgKTtcblx0XHRcdFx0XHR3cml0ZXIuc2V0QXR0cmlidXRlKCAndGVtcGxhdGVWYXItdHlwZScsIHRlbXBsYXRlVmFyLnR5cGUsIHZhclJhbmdlICk7XG5cblxuXG5cdFx0XHRcdFx0dHJ1dGh5TWFudWFsRGVjb3JhdG9ycy5mb3JFYWNoKCBpdGVtID0+IHtcblx0XHRcdFx0XHRcdHdyaXRlci5zZXRBdHRyaWJ1dGUoIGl0ZW0sIHRydWUsIHZhclJhbmdlICk7XG5cdFx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdFx0ZmFsc3lNYW51YWxEZWNvcmF0b3JzLmZvckVhY2goIGl0ZW0gPT4ge1xuXHRcdFx0XHRcdFx0d3JpdGVyLnJlbW92ZUF0dHJpYnV0ZSggaXRlbSwgdmFyUmFuZ2UgKTtcblx0XHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0XHQvLyBQdXQgdGhlIHNlbGVjdGlvbiBhdCB0aGUgZW5kIG9mIHRoZSB1cGRhdGVkIGxpbmsuXG5cdFx0XHRcdFx0d3JpdGVyLnNldFNlbGVjdGlvbiggd3JpdGVyLmNyZWF0ZVBvc2l0aW9uQWZ0ZXIoIHZhclJhbmdlLmVuZC5ub2RlQmVmb3JlICkgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBJZiBub3QgdGhlbiBpbnNlcnQgdGV4dCBub2RlIHdpdGggYGxpbmtIcmVmYCBhdHRyaWJ1dGUgaW4gcGxhY2Ugb2YgY2FyZXQuXG5cdFx0XHRcdC8vIEhvd2V2ZXIsIHNpbmNlIHNlbGVjdGlvbiBpcyBjb2xsYXBzZWQsIGF0dHJpYnV0ZSB2YWx1ZSB3aWxsIGJlIHVzZWQgYXMgZGF0YSBmb3IgdGV4dCBub2RlLlxuXHRcdFx0XHQvLyBTbywgaWYgYHRlbXBsYXRlVmFyLmxhYmVsYCBpcyBlbXB0eSwgZG8gbm90IGNyZWF0ZSB0ZXh0IG5vZGUuXG5cdFx0XHRcdGVsc2UgaWYgKCB0ZW1wbGF0ZVZhci5pZCAhPT0gJycgKSB7XG5cdFx0XHRcdFx0Y29uc3QgYXR0cmlidXRlcyA9IHRvTWFwKCBzZWxlY3Rpb24uZ2V0QXR0cmlidXRlcygpICk7XG5cblx0XHRcdFx0XHRhdHRyaWJ1dGVzLnNldCggJ3RlbXBsYXRlVmFyJywgdGVtcGxhdGVWYXIuaWQgKTtcblxuXHRcdFx0XHRcdGF0dHJpYnV0ZXMuc2V0KCAndGVtcGxhdGVWYXItdHlwZScsIHRlbXBsYXRlVmFyLnR5cGUgKTtcblx0XHRcdFx0XHR0cnV0aHlNYW51YWxEZWNvcmF0b3JzLmZvckVhY2goIGl0ZW0gPT4ge1xuXHRcdFx0XHRcdFx0YXR0cmlidXRlcy5zZXQoIGl0ZW0sIHRydWUgKTtcblx0XHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0XHRjb25zdCB7IGVuZDogcG9zaXRpb25BZnRlciB9ID0gbW9kZWwuaW5zZXJ0Q29udGVudCggd3JpdGVyLmNyZWF0ZVRleHQoIHRlbXBsYXRlVmFyLmlkLCBhdHRyaWJ1dGVzICksIHBvc2l0aW9uICk7XG5cblx0XHRcdFx0XHQvLyBQdXQgdGhlIHNlbGVjdGlvbiBhdCB0aGUgZW5kIG9mIHRoZSBpbnNlcnRlZCBsaW5rLlxuXHRcdFx0XHRcdC8vIFVzaW5nIGVuZCBvZiByYW5nZSByZXR1cm5lZCBmcm9tIGluc2VydENvbnRlbnQgaW4gY2FzZSBub2RlcyB3aXRoIHRoZSBzYW1lIGF0dHJpYnV0ZXMgZ290IG1lcmdlZC5cblx0XHRcdFx0XHR3cml0ZXIuc2V0U2VsZWN0aW9uKCBwb3NpdGlvbkFmdGVyICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBSZW1vdmUgdGhlIGBsaW5rSHJlZmAgYXR0cmlidXRlIGFuZCBhbGwgbGluayBkZWNvcmF0b3JzIGZyb20gdGhlIHNlbGVjdGlvbi5cblx0XHRcdFx0Ly8gSXQgc3RvcHMgYWRkaW5nIGEgbmV3IGNvbnRlbnQgaW50byB0aGUgbGluayBlbGVtZW50LlxuXHRcdFx0XHRbICd0ZW1wbGF0ZVZhcicsJ3RlbXBsYXRlVmFyLXR5cGUnLCAuLi50cnV0aHlNYW51YWxEZWNvcmF0b3JzLCAuLi5mYWxzeU1hbnVhbERlY29yYXRvcnMgXS5mb3JFYWNoKCBpdGVtID0+IHtcblx0XHRcdFx0XHR3cml0ZXIucmVtb3ZlU2VsZWN0aW9uQXR0cmlidXRlKCBpdGVtICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIElmIHNlbGVjdGlvbiBoYXMgbm9uLWNvbGxhcHNlZCByYW5nZXMsIHdlIGNoYW5nZSBhdHRyaWJ1dGUgb24gbm9kZXMgaW5zaWRlIHRob3NlIHJhbmdlc1xuXHRcdFx0XHQvLyBvbWl0dGluZyBub2RlcyB3aGVyZSB0aGUgYGxpbmtIcmVmYCBhdHRyaWJ1dGUgaXMgZGlzYWxsb3dlZC5cblx0XHRcdFx0Y29uc3QgcmFuZ2VzID0gbW9kZWwuc2NoZW1hLmdldFZhbGlkUmFuZ2VzKCBzZWxlY3Rpb24uZ2V0UmFuZ2VzKCksICd0ZW1wbGF0ZVZhcicgKTtcblxuXHRcdFx0XHQvLyBCdXQgZm9yIHRoZSBmaXJzdCwgY2hlY2sgd2hldGhlciB0aGUgYGxpbmtIcmVmYCBhdHRyaWJ1dGUgaXMgYWxsb3dlZCBvbiBzZWxlY3RlZCBibG9ja3MgKGUuZy4gdGhlIFwiaW1hZ2VcIiBlbGVtZW50KS5cblx0XHRcdFx0Y29uc3QgYWxsb3dlZFJhbmdlcyA9IFtdO1xuXG5cdFx0XHRcdGZvciAoIGNvbnN0IGVsZW1lbnQgb2Ygc2VsZWN0aW9uLmdldFNlbGVjdGVkQmxvY2tzKCkgKSB7XG5cdFx0XHRcdFx0aWYgKCBtb2RlbC5zY2hlbWEuY2hlY2tBdHRyaWJ1dGUoIGVsZW1lbnQsICd0ZW1wbGF0ZVZhcicgKSApIHtcblx0XHRcdFx0XHRcdGFsbG93ZWRSYW5nZXMucHVzaCggd3JpdGVyLmNyZWF0ZVJhbmdlT24oIGVsZW1lbnQgKSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFJhbmdlcyB0aGF0IGFjY2VwdCB0aGUgYGxpbmtIcmVmYCBhdHRyaWJ1dGUuIFNpbmNlIHdlIHdpbGwgaXRlcmF0ZSBvdmVyIGBhbGxvd2VkUmFuZ2VzYCwgbGV0J3MgY2xvbmUgaXQuXG5cdFx0XHRcdGNvbnN0IHJhbmdlc1RvVXBkYXRlID0gYWxsb3dlZFJhbmdlcy5zbGljZSgpO1xuXG5cdFx0XHRcdC8vIEZvciBhbGwgc2VsZWN0aW9uIHJhbmdlcyB3ZSB3YW50IHRvIGNoZWNrIHdoZXRoZXIgZ2l2ZW4gcmFuZ2UgaXMgaW5zaWRlIGFuIGVsZW1lbnQgdGhhdCBhY2NlcHRzIHRoZSBgbGlua0hyZWZgIGF0dHJpYnV0ZS5cblx0XHRcdFx0Ly8gSWYgc28sIHdlIGRvbid0IHdhbnQgdG8gcHJvcGFnYXRlIGFwcGx5aW5nIHRoZSBhdHRyaWJ1dGUgdG8gaXRzIGNoaWxkcmVuLlxuXHRcdFx0XHRmb3IgKCBjb25zdCByYW5nZSBvZiByYW5nZXMgKSB7XG5cdFx0XHRcdFx0aWYgKCB0aGlzLl9pc1JhbmdlVG9VcGRhdGUoIHJhbmdlLCBhbGxvd2VkUmFuZ2VzICkgKSB7XG5cdFx0XHRcdFx0XHRyYW5nZXNUb1VwZGF0ZS5wdXNoKCByYW5nZSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZvciAoIGNvbnN0IHJhbmdlIG9mIHJhbmdlc1RvVXBkYXRlICkge1xuXHRcdFx0XHRcdHdyaXRlci5zZXRBdHRyaWJ1dGUoICd0ZW1wbGF0ZVZhcicsIHRlbXBsYXRlVmFyLmlkLCByYW5nZSApO1xuXHRcdFx0XHRcdHdyaXRlci5zZXRBdHRyaWJ1dGUoICd0ZW1wbGF0ZVZhci10eXBlJywgdGVtcGxhdGVWYXIudHlwZSwgcmFuZ2UgKTtcblxuXG5cdFx0XHRcdFx0dHJ1dGh5TWFudWFsRGVjb3JhdG9ycy5mb3JFYWNoKCBpdGVtID0+IHtcblx0XHRcdFx0XHRcdHdyaXRlci5zZXRBdHRyaWJ1dGUoIGl0ZW0sIHRydWUsIHJhbmdlICk7XG5cdFx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdFx0ZmFsc3lNYW51YWxEZWNvcmF0b3JzLmZvckVhY2goIGl0ZW0gPT4ge1xuXHRcdFx0XHRcdFx0d3JpdGVyLnJlbW92ZUF0dHJpYnV0ZSggaXRlbSwgcmFuZ2UgKTtcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogUHJvdmlkZXMgaW5mb3JtYXRpb24gd2hldGhlciBhIGRlY29yYXRvciB3aXRoIGEgZ2l2ZW4gbmFtZSBpcyBwcmVzZW50IGluIHRoZSBjdXJyZW50bHkgcHJvY2Vzc2VkIHNlbGVjdGlvbi5cblx0ICpcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IGRlY29yYXRvck5hbWUgVGhlIG5hbWUgb2YgdGhlIG1hbnVhbCBkZWNvcmF0b3IgdXNlZCBpbiB0aGUgbW9kZWxcblx0ICogQHJldHVybnMge0Jvb2xlYW59IFRoZSBpbmZvcm1hdGlvbiB3aGV0aGVyIGEgZ2l2ZW4gZGVjb3JhdG9yIGlzIGN1cnJlbnRseSBwcmVzZW50IGluIHRoZSBzZWxlY3Rpb24uXG5cdCAqL1xuXHRfZ2V0RGVjb3JhdG9yU3RhdGVGcm9tTW9kZWwoIGRlY29yYXRvck5hbWUgKSB7XG5cdFx0Y29uc3QgbW9kZWwgPSB0aGlzLmVkaXRvci5tb2RlbDtcblx0XHRjb25zdCBkb2MgPSBtb2RlbC5kb2N1bWVudDtcblxuXHRcdGNvbnN0IHNlbGVjdGVkRWxlbWVudCA9IGZpcnN0KCBkb2Muc2VsZWN0aW9uLmdldFNlbGVjdGVkQmxvY2tzKCkgKTtcblxuXHRcdC8vIEEgY2hlY2sgZm9yIHRoZSBgTGlua0ltYWdlYCBwbHVnaW4uIElmIHRoZSBzZWxlY3Rpb24gY29udGFpbnMgYW4gZWxlbWVudCwgZ2V0IHZhbHVlcyBmcm9tIHRoZSBlbGVtZW50LlxuXHRcdC8vIEN1cnJlbnRseSB0aGUgc2VsZWN0aW9uIHJlYWRzIGF0dHJpYnV0ZXMgZnJvbSB0ZXh0IG5vZGVzIG9ubHkuIFNlZSAjNzQyOSBhbmQgIzc0NjUuXG5cdFx0aWYgKCBpc0ltYWdlQWxsb3dlZCggc2VsZWN0ZWRFbGVtZW50LCBtb2RlbC5zY2hlbWEgKSApIHtcblx0XHRcdHJldHVybiBzZWxlY3RlZEVsZW1lbnQuZ2V0QXR0cmlidXRlKCBkZWNvcmF0b3JOYW1lICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRvYy5zZWxlY3Rpb24uZ2V0QXR0cmlidXRlKCBkZWNvcmF0b3JOYW1lICk7XG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2tzIHdoZXRoZXIgc3BlY2lmaWVkIGByYW5nZWAgaXMgaW5zaWRlIGFuIGVsZW1lbnQgdGhhdCBhY2NlcHRzIHRoZSBgbGlua0hyZWZgIGF0dHJpYnV0ZS5cblx0ICpcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHttb2R1bGU6ZW5naW5lL3ZpZXcvcmFuZ2V+UmFuZ2V9IHJhbmdlIEEgcmFuZ2UgdG8gY2hlY2suXG5cdCAqIEBwYXJhbSB7QXJyYXkuPG1vZHVsZTplbmdpbmUvdmlldy9yYW5nZX5SYW5nZT59IGFsbG93ZWRSYW5nZXMgQW4gYXJyYXkgb2YgcmFuZ2VzIGNyZWF0ZWQgb24gZWxlbWVudHMgd2hlcmUgdGhlIGF0dHJpYnV0ZSBpcyBhY2NlcHRlZC5cblx0ICogQHJldHVybnMge0Jvb2xlYW59XG5cdCAqL1xuXHRfaXNSYW5nZVRvVXBkYXRlKCByYW5nZSwgYWxsb3dlZFJhbmdlcyApIHtcblx0XHRmb3IgKCBjb25zdCBhbGxvd2VkUmFuZ2Ugb2YgYWxsb3dlZFJhbmdlcyApIHtcblx0XHRcdC8vIEEgcmFuZ2UgaXMgaW5zaWRlIGFuIGVsZW1lbnQgdGhhdCB3aWxsIGhhdmUgdGhlIGBsaW5rSHJlZmAgYXR0cmlidXRlLiBEbyBub3QgbW9kaWZ5IGl0cyBub2Rlcy5cblx0XHRcdGlmICggYWxsb3dlZFJhbmdlLmNvbnRhaW5zUmFuZ2UoIHJhbmdlICkgKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZSBDb3B5cmlnaHQgKGMpIDIwMDMtMjAyMSwgQ0tTb3VyY2UgLSBGcmVkZXJpY28gS25hYmJlbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIEZvciBsaWNlbnNpbmcsIHNlZSBMSUNFTlNFLm1kIG9yIGh0dHBzOi8vY2tlZGl0b3IuY29tL2xlZ2FsL2NrZWRpdG9yLW9zcy1saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGxpbmsvbGlua2VkaXRpbmdcbiAqL1xuXG5pbXBvcnQgIFBsdWdpbiAgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1jb3JlL3NyYy9wbHVnaW4nO1xuaW1wb3J0ICBNb3VzZU9ic2VydmVyICBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWVuZ2luZS9zcmMvdmlldy9vYnNlcnZlci9tb3VzZW9ic2VydmVyJztcbmltcG9ydCB7IElucHV0LCBUd29TdGVwQ2FyZXRNb3ZlbWVudCwgaW5saW5lSGlnaGxpZ2h0LCBmaW5kQXR0cmlidXRlUmFuZ2UgfSBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LXR5cGluZy9zcmMnO1xuaW1wb3J0ICBDbGlwYm9hcmRQaXBlbGluZSAgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1jbGlwYm9hcmQvc3JjL2NsaXBib2FyZHBpcGVsaW5lJztcbmltcG9ydCB7IGtleUNvZGVzIH0gZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS11dGlscy9zcmMva2V5Ym9hcmQnO1xuXG5pbXBvcnQgVGVtcGxhdGVDb21tYW5kIGZyb20gJy4vdGVtcGxhdGUtY29tbWFuZC5qcyc7XG5pbXBvcnQgQ2FuY2VsVGVtcGxhdGVDb21tYW5kIGZyb20gJy4vY2FuY2VsdGVtcGxhdGVjb21tYW5kJztcbmltcG9ydCBNYW51YWxEZWNvcmF0b3IgZnJvbSAnLi91dGlscy9tYW51YWxkZWNvcmF0b3InO1xuaW1wb3J0IHtcblx0Y3JlYXRlVGVtcGxhdGVFbGVtZW50LFxuXHRnZXRMb2NhbGl6ZWREZWNvcmF0b3JzLFxuXHRub3JtYWxpemVEZWNvcmF0b3JzXG59IGZyb20gJy4vdXRpbHMnO1xuXG5pbXBvcnQgJy4uL3RoZW1lL3RlbXBsYXRlLmNzcyc7XG5cbmNvbnN0IEhJR0hMSUdIVF9TRUxFQ1RFRF9DTEFTUyA9ICdjay10ZW1wbGF0ZV9zZWxlY3RlZCc7XG5cbmNvbnN0IERFQ09SQVRPUl9NQU5VQUwgPSAnbWFudWFsJztcblxuLyoqXG4gKiBUaGUgbGluayBlbmdpbmUgZmVhdHVyZS5cbiAqXG4gKiBJdCBpbnRyb2R1Y2VzIHRoZSBgdGVtcGxhdGVWYXI9XCJ1cmxcImAgYXR0cmlidXRlIGluIHRoZSBtb2RlbCB3aGljaCByZW5kZXJzIHRvIHRoZSB2aWV3IGFzIGEgYDxhIGhyZWY9XCJ1cmxcIj5gIGVsZW1lbnRcbiAqIGFzIHdlbGwgYXMgYCd0ZW1wbGF0ZSdgIGFuZCBgJ3VubGluaydgIGNvbW1hbmRzLlxuICpcbiAqIEBleHRlbmRzIG1vZHVsZTpjb3JlL3BsdWdpbn5QbHVnaW5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVtcGxhdGVFZGl0aW5nIGV4dGVuZHMgUGx1Z2luIHtcblx0LyoqXG5cdCAqIEBpbmhlcml0RG9jXG5cdCAqL1xuXHRzdGF0aWMgZ2V0IHBsdWdpbk5hbWUoKSB7XG5cdFx0cmV0dXJuICdUZXh0VGVtcGxhdGVFZGl0aW5nJztcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5oZXJpdERvY1xuXHQgKi9cblx0c3RhdGljIGdldCByZXF1aXJlcygpIHtcblx0XHQvLyBDbGlwYm9hcmQgaXMgcmVxdWlyZWQgZm9yIGhhbmRsaW5nIGN1dCBhbmQgcGFzdGUgZXZlbnRzIHdoaWxlIHR5cGluZyBvdmVyIHRoZSBsaW5rLlxuXHRcdHJldHVybiBbIFR3b1N0ZXBDYXJldE1vdmVtZW50LCBJbnB1dCwgQ2xpcGJvYXJkUGlwZWxpbmUgXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5oZXJpdERvY1xuXHQgKi9cblx0Y29uc3RydWN0b3IoIGVkaXRvciApIHtcblx0XHRzdXBlciggZWRpdG9yICk7XG5cblx0XHRlZGl0b3IuY29uZmlnLmRlZmluZSggJ3RlbXBsYXRlJywge1xuXHRcdFx0YWRkVGFyZ2V0VG9FeHRlcm5hbExpbmtzOiBmYWxzZVxuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5oZXJpdERvY1xuXHQgKi9cblx0aW5pdCgpIHtcblx0XHRjb25zdCBlZGl0b3IgPSB0aGlzLmVkaXRvcjtcblxuXHRcdC8vIEFsbG93IGxpbmsgYXR0cmlidXRlIG9uIGFsbCBpbmxpbmUgbm9kZXMuXG5cdFx0ZWRpdG9yLm1vZGVsLnNjaGVtYS5leHRlbmQoICckdGV4dCcsIHsgYWxsb3dBdHRyaWJ1dGVzOiAndGVtcGxhdGVWYXInIH0gKTtcblxuXHRcdGVkaXRvci5tb2RlbC5zY2hlbWEuZXh0ZW5kKCAnJHRleHQnLCB7IGFsbG93QXR0cmlidXRlczogJ3RlbXBsYXRlVmFyLXR5cGUnIH0gKTtcblx0XHRlZGl0b3IuY29udmVyc2lvbi5mb3IoICdkYXRhRG93bmNhc3QnIClcblx0XHRcdC5hdHRyaWJ1dGVUb0VsZW1lbnQoIHsgbW9kZWw6ICd0ZW1wbGF0ZVZhcicsIHZpZXc6IGNyZWF0ZVRlbXBsYXRlRWxlbWVudCB9ICk7XG5cblx0XHRlZGl0b3IuY29udmVyc2lvbi5mb3IoICdlZGl0aW5nRG93bmNhc3QnIClcblx0XHRcdC5hdHRyaWJ1dGVUb0VsZW1lbnQoIHsgbW9kZWw6ICd0ZW1wbGF0ZVZhcicsIHZpZXc6ICggaWQsIGNvbnZlcnNpb25BcGkgKSA9PiB7XG5cblx0XHRcdFx0cmV0dXJuIGNyZWF0ZVRlbXBsYXRlRWxlbWVudCggIGlkICwgY29udmVyc2lvbkFwaSApO1xuXHRcdFx0fSB9ICk7XG5cblxuXHRcdGVkaXRvci5jb252ZXJzaW9uLmZvciggJ2Rvd25jYXN0JyApLmF0dHJpYnV0ZVRvRWxlbWVudCgge1xuXG5cdFx0XHRtb2RlbDogJ3RlbXBsYXRlVmFyLXR5cGUnLFxuXHRcdFx0dmlldzogKCB0eXBlLCB7IHdyaXRlciB9ICkgPT4ge1xuXG5cdFx0XHRcdFx0Y29uc3QgZWxlbWVudCA9IHdyaXRlci5jcmVhdGVBdHRyaWJ1dGVFbGVtZW50KCAnc3BhbicsIHsnZGF0YS10ZW1wbGF0ZS10eXBlJzp0eXBlfSwgeyBwcmlvcml0eTogNSB9ICk7XG5cdFx0XHRcdFx0d3JpdGVyLnNldEN1c3RvbVByb3BlcnR5KCAndGVtcGxhdGUnLCB0cnVlLCBlbGVtZW50ICk7XG5cdFx0XHRcdFx0cmV0dXJuIGVsZW1lbnQ7XG5cblx0XHRcdH0gfSApO1xuXG5cdFx0ZWRpdG9yLmNvbnZlcnNpb24uZm9yKCAndXBjYXN0JyApLmVsZW1lbnRUb0F0dHJpYnV0ZSgge1xuXHRcdFx0dmlldzoge1xuXHRcdFx0XHRuYW1lOiAnc3BhbicsXG5cdFx0XHRcdGF0dHJpYnV0ZXM6IFsnZGF0YS10ZW1wbGF0ZS10eXBlJ11cblxuXG5cdFx0XHR9LFxuXHRcdFx0bW9kZWw6IHtcblx0XHRcdFx0a2V5OiAndGVtcGxhdGVWYXItdHlwZScsXG5cdFx0XHRcdHZhbHVlOiB2aWV3RWxlbWVudCA9PiB2aWV3RWxlbWVudC5nZXRBdHRyaWJ1dGUoICdkYXRhLXRlbXBsYXRlLXR5cGUnIClcblx0XHRcdH1cblx0XHR9ICk7XG5cdFx0ZWRpdG9yLmNvbnZlcnNpb24uZm9yKCAndXBjYXN0JyApXG5cdFx0XHQuZWxlbWVudFRvQXR0cmlidXRlKCB7XG5cdFx0XHRcdHZpZXc6IHtcblx0XHRcdFx0XHRuYW1lOiAnc3BhbicsXG5cdFx0XHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRcdFx0aWQ6IHRydWVcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG1vZGVsOiB7XG5cdFx0XHRcdFx0a2V5OiAndGVtcGxhdGVWYXInLFxuXHRcdFx0XHRcdHZhbHVlOiB2aWV3RWxlbWVudCA9PiB2aWV3RWxlbWVudC5nZXRBdHRyaWJ1dGUoICdkYXRhLXRlbXBsYXRlLXZhcicgKVxuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cblx0XHQvLyBDcmVhdGUgbGlua2luZyBjb21tYW5kcy5cblx0XHRlZGl0b3IuY29tbWFuZHMuYWRkKCAndGVtcGxhdGUnLCBuZXcgVGVtcGxhdGVDb21tYW5kKCBlZGl0b3IgKSApO1xuXHRcdGVkaXRvci5jb21tYW5kcy5hZGQoICdjYW5jZWx0ZW1wbGF0ZScsIG5ldyBDYW5jZWxUZW1wbGF0ZUNvbW1hbmQoIGVkaXRvciApICk7XG5cblx0XHQgY29uc3QgbGlua0RlY29yYXRvcnMgPSBnZXRMb2NhbGl6ZWREZWNvcmF0b3JzKCBlZGl0b3IudCwgbm9ybWFsaXplRGVjb3JhdG9ycyggZWRpdG9yLmNvbmZpZy5nZXQoICd0ZW1wbGF0ZS5kZWNvcmF0b3JzJyApICkgKTtcblx0XHQvL1xuXHRcdC8vXG5cdFx0IHRoaXMuX2VuYWJsZU1hbnVhbERlY29yYXRvcnMoIGxpbmtEZWNvcmF0b3JzLmZpbHRlciggaXRlbSA9PiBpdGVtLm1vZGUgPT09IERFQ09SQVRPUl9NQU5VQUwgKSApO1xuXG5cdFx0Ly8gRW5hYmxlIHR3by1zdGVwIGNhcmV0IG1vdmVtZW50IGZvciBgdGVtcGxhdGVWYXJgIGF0dHJpYnV0ZS5cblx0XHRjb25zdCB0d29TdGVwQ2FyZXRNb3ZlbWVudFBsdWdpbiA9IGVkaXRvci5wbHVnaW5zLmdldCggVHdvU3RlcENhcmV0TW92ZW1lbnQgKTtcblx0XHR0d29TdGVwQ2FyZXRNb3ZlbWVudFBsdWdpbi5yZWdpc3RlckF0dHJpYnV0ZSggJ3RlbXBsYXRlVmFyJyApO1xuXG5cdFx0Ly8gU2V0dXAgaGlnaGxpZ2h0IG92ZXIgc2VsZWN0ZWQgbGluay5cblx0XHRpbmxpbmVIaWdobGlnaHQoIGVkaXRvciwgJ3RlbXBsYXRlVmFyJywgJ3NwYW4nLCBISUdITElHSFRfU0VMRUNURURfQ0xBU1MgKTtcblxuXHRcdC8vIENoYW5nZSB0aGUgYXR0cmlidXRlcyBvZiB0aGUgc2VsZWN0aW9uIGluIGNlcnRhaW4gc2l0dWF0aW9ucyBhZnRlciB0aGUgbGluayB3YXMgaW5zZXJ0ZWQgaW50byB0aGUgZG9jdW1lbnQuXG5cdFx0dGhpcy5fZW5hYmxlSW5zZXJ0Q29udGVudFNlbGVjdGlvbkF0dHJpYnV0ZXNGaXhlcigpO1xuXG5cdFx0Ly8gSGFuZGxlIGEgY2xpY2sgYXQgdGhlIGJlZ2lubmluZy9lbmQgb2YgYSBsaW5rIGVsZW1lbnQuXG5cdFx0dGhpcy5fZW5hYmxlQ2xpY2tpbmdBZnRlckxpbmsoKTtcblxuXHRcdC8vIEhhbmRsZSB0eXBpbmcgb3ZlciB0aGUgbGluay5cblx0XHR0aGlzLl9lbmFibGVUeXBpbmdPdmVyTGluaygpO1xuXG5cdFx0Ly8gSGFuZGxlIHJlbW92aW5nIHRoZSBjb250ZW50IGFmdGVyIHRoZSBsaW5rIGVsZW1lbnQuXG5cdFx0dGhpcy5faGFuZGxlRGVsZXRlQ29udGVudEFmdGVyTGluaygpO1xuXHR9XG5cblxuXHQvKipcblx0ICogUHJvY2Vzc2VzIGFuIGFycmF5IG9mIGNvbmZpZ3VyZWQge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt+TGlua0RlY29yYXRvck1hbnVhbERlZmluaXRpb24gbWFudWFsIGRlY29yYXRvcnN9LFxuXHQgKiB0cmFuc2Zvcm1zIHRoZW0gaW50byB7QGxpbmsgbW9kdWxlOmxpbmsvdXRpbHN+TWFudWFsRGVjb3JhdG9yfSBpbnN0YW5jZXMgYW5kIHN0b3JlcyB0aGVtIGluIHRoZVxuXHQgKiB7QGxpbmsgbW9kdWxlOmxpbmsvbGlua2NvbW1hbmR+VGVtcGxhdGVDb21tYW5kI21hbnVhbERlY29yYXRvcnN9IGNvbGxlY3Rpb24gKGEgbW9kZWwgZm9yIG1hbnVhbCBkZWNvcmF0b3JzIHN0YXRlKS5cblx0ICpcblx0ICogQWxzbyByZWdpc3RlcnMgYW4ge0BsaW5rIG1vZHVsZTplbmdpbmUvY29udmVyc2lvbi9kb3duY2FzdGhlbHBlcnN+RG93bmNhc3RIZWxwZXJzI2F0dHJpYnV0ZVRvRWxlbWVudCBhdHRyaWJ1dGUtdG8tZWxlbWVudH1cblx0ICogY29udmVydGVyIGZvciBlYWNoIG1hbnVhbCBkZWNvcmF0b3IgYW5kIGV4dGVuZHMgdGhlIHtAbGluayBtb2R1bGU6ZW5naW5lL21vZGVsL3NjaGVtYX5TY2hlbWEgbW9kZWwncyBzY2hlbWF9XG5cdCAqIHdpdGggYWRlcXVhdGUgbW9kZWwgYXR0cmlidXRlcy5cblx0ICpcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtBcnJheS48bW9kdWxlOmxpbmsvbGlua35MaW5rRGVjb3JhdG9yTWFudWFsRGVmaW5pdGlvbj59IG1hbnVhbERlY29yYXRvckRlZmluaXRpb25zXG5cdCAqL1xuXHRfZW5hYmxlTWFudWFsRGVjb3JhdG9ycyggbWFudWFsRGVjb3JhdG9yRGVmaW5pdGlvbnMgKSB7XG5cdFx0aWYgKCAhbWFudWFsRGVjb3JhdG9yRGVmaW5pdGlvbnMubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGVkaXRvciA9IHRoaXMuZWRpdG9yO1xuXHRcdGNvbnN0IGNvbW1hbmQgPSBlZGl0b3IuY29tbWFuZHMuZ2V0KCAndGVtcGxhdGUnICk7XG5cdFx0Y29uc3QgbWFudWFsRGVjb3JhdG9ycyA9IGNvbW1hbmQubWFudWFsRGVjb3JhdG9ycztcblxuXHRcdG1hbnVhbERlY29yYXRvckRlZmluaXRpb25zLmZvckVhY2goIGRlY29yYXRvciA9PiB7XG5cdFx0XHRlZGl0b3IubW9kZWwuc2NoZW1hLmV4dGVuZCggJyR0ZXh0JywgeyBhbGxvd0F0dHJpYnV0ZXM6IGRlY29yYXRvci5pZCB9ICk7XG5cblx0XHRcdC8vIEtlZXBzIHJlZmVyZW5jZSB0byBtYW51YWwgZGVjb3JhdG9yIHRvIGRlY29kZSBpdHMgbmFtZSB0byBhdHRyaWJ1dGVzIGR1cmluZyBkb3duY2FzdC5cblx0XHRcdG1hbnVhbERlY29yYXRvcnMuYWRkKCBuZXcgTWFudWFsRGVjb3JhdG9yKCBkZWNvcmF0b3IgKSApO1xuXHRcdFx0Y29uc29sZS5sb2cobWFudWFsRGVjb3JhdG9ycyk7XG5cdFx0XHRlZGl0b3IuY29udmVyc2lvbi5mb3IoICdkb3duY2FzdCcgKS5hdHRyaWJ1dGVUb0VsZW1lbnQoIHtcblxuXHRcdFx0XHRtb2RlbDogZGVjb3JhdG9yLmlkLFxuXHRcdFx0XHR2aWV3OiAoIG1hbnVhbERlY29yYXRvck5hbWUsIHsgd3JpdGVyIH0gKSA9PiB7XG5cdFx0XHRcdFx0aWYgKCBtYW51YWxEZWNvcmF0b3JOYW1lICkge1xuXHRcdFx0XHRcdFx0Y29uc3QgYXR0cmlidXRlcyA9IG1hbnVhbERlY29yYXRvcnMuZ2V0KCBkZWNvcmF0b3IuaWQgKS5hdHRyaWJ1dGVzO1xuXHRcdFx0XHRcdFx0Y29uc3QgZWxlbWVudCA9IHdyaXRlci5jcmVhdGVBdHRyaWJ1dGVFbGVtZW50KCAnc3BhbicsIGF0dHJpYnV0ZXMsIHsgcHJpb3JpdHk6IDUgfSApO1xuXHRcdFx0XHRcdFx0d3JpdGVyLnNldEN1c3RvbVByb3BlcnR5KCAndGVtcGxhdGUnLCB0cnVlLCBlbGVtZW50ICk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZWxlbWVudDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gfSApO1xuXG5cdFx0XHRlZGl0b3IuY29udmVyc2lvbi5mb3IoICd1cGNhc3QnICkuZWxlbWVudFRvQXR0cmlidXRlKCB7XG5cdFx0XHRcdHZpZXc6IHtcblx0XHRcdFx0XHRuYW1lOiAnc3BhbicsXG5cdFx0XHRcdFx0YXR0cmlidXRlczogbWFudWFsRGVjb3JhdG9ycy5nZXQoIGRlY29yYXRvci5pZCApLmF0dHJpYnV0ZXNcblx0XHRcdFx0fSxcblx0XHRcdFx0bW9kZWw6IHtcblx0XHRcdFx0XHRrZXk6IGRlY29yYXRvci5pZFxuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFN0YXJ0cyBsaXN0ZW5pbmcgdG8ge0BsaW5rIG1vZHVsZTplbmdpbmUvbW9kZWwvbW9kZWx+TW9kZWwjZXZlbnQ6aW5zZXJ0Q29udGVudH0gYW5kIGNvcnJlY3RzIHRoZSBtb2RlbFxuXHQgKiBzZWxlY3Rpb24gYXR0cmlidXRlcyBpZiB0aGUgc2VsZWN0aW9uIGlzIGF0IHRoZSBlbmQgb2YgYSBsaW5rIGFmdGVyIGluc2VydGluZyB0aGUgY29udGVudC5cblx0ICpcblx0ICogVGhlIHB1cnBvc2Ugb2YgdGhpcyBhY3Rpb24gaXMgdG8gaW1wcm92ZSB0aGUgb3ZlcmFsbCBVWCBiZWNhdXNlIHRoZSB1c2VyIGlzIG5vIGxvbmdlciBcInRyYXBwZWRcIiBieSB0aGVcblx0ICogYHRlbXBsYXRlVmFyYCBhdHRyaWJ1dGUgb2YgdGhlIHNlbGVjdGlvbiBhbmQgdGhleSBjYW4gdHlwZSBhIFwiY2xlYW5cIiAoYHRlbXBsYXRlVmFyYOKAk2xlc3MpIHRleHQgcmlnaHQgYXdheS5cblx0ICpcblx0ICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ja2VkaXRvci9ja2VkaXRvcjUvaXNzdWVzLzYwNTMuXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfZW5hYmxlSW5zZXJ0Q29udGVudFNlbGVjdGlvbkF0dHJpYnV0ZXNGaXhlcigpIHtcblx0XHRjb25zdCBlZGl0b3IgPSB0aGlzLmVkaXRvcjtcblx0XHRjb25zdCBtb2RlbCA9IGVkaXRvci5tb2RlbDtcblx0XHRjb25zdCBzZWxlY3Rpb24gPSBtb2RlbC5kb2N1bWVudC5zZWxlY3Rpb247XG5cdFx0Y29uc3QgbGlua0NvbW1hbmQgPSBlZGl0b3IuY29tbWFuZHMuZ2V0KCAndGVtcGxhdGUnICk7XG5cblx0XHR0aGlzLmxpc3RlblRvKCBtb2RlbCwgJ2luc2VydENvbnRlbnQnLCAoKSA9PiB7XG5cdFx0XHRjb25zdCBub2RlQmVmb3JlID0gc2VsZWN0aW9uLmFuY2hvci5ub2RlQmVmb3JlO1xuXHRcdFx0Y29uc3Qgbm9kZUFmdGVyID0gc2VsZWN0aW9uLmFuY2hvci5ub2RlQWZ0ZXI7XG5cblx0XHRcdC8vIE5PVEU6IOKGsCBhbmQg4oaxIHJlcHJlc2VudCB0aGUgZ3Jhdml0eSBvZiB0aGUgc2VsZWN0aW9uLlxuXG5cdFx0XHQvLyBUaGUgb25seSB0cnVseSB2YWxpZCBjYXNlIGlzOlxuXHRcdFx0Ly9cblx0XHRcdC8vXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKGsFxuXHRcdFx0Ly9cdFx0Li4uPCR0ZXh0IHRlbXBsYXRlVmFyPVwiZm9vXCI+SU5TRVJURURbXTwvJHRleHQ+XG5cdFx0XHQvL1xuXHRcdFx0Ly8gSWYgdGhlIHNlbGVjdGlvbiBpcyBub3QgXCJ0cmFwcGVkXCIgYnkgdGhlIGB0ZW1wbGF0ZVZhcmAgYXR0cmlidXRlIGFmdGVyIGluc2VydGluZywgdGhlcmUncyBub3RoaW5nXG5cdFx0XHQvLyB0byBmaXggdGhlcmUuXG5cdFx0XHRpZiAoICFzZWxlY3Rpb24uaGFzQXR0cmlidXRlKCAndGVtcGxhdGVWYXInICkgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRmlsdGVyIG91dCB0aGUgZm9sbG93aW5nIGNhc2Ugd2hlcmUgYSBsaW5rIHdpdGggdGhlIHNhbWUgaHJlZiAoZS5nLiA8YSBocmVmPVwiZm9vXCI+SU5TRVJURUQ8L2E+KSBpcyBpbnNlcnRlZFxuXHRcdFx0Ly8gaW4gdGhlIG1pZGRsZSBvZiBhbiBleGlzdGluZyBsaW5rOlxuXHRcdFx0Ly9cblx0XHRcdC8vIEJlZm9yZSBpbnNlcnRpb246XG5cdFx0XHQvL1x0XHQgICAgICAgICAgICAgICAgICAgICAgIOKGsFxuXHRcdFx0Ly9cdFx0PCR0ZXh0IHRlbXBsYXRlVmFyPVwiZm9vXCI+bFtdaW5rPC8kdGV4dD5cblx0XHRcdC8vXG5cdFx0XHQvLyBFeHBlY3RlZCBhZnRlciBpbnNlcnRpb246XG5cdFx0XHQvL1x0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oawXG5cdFx0XHQvL1x0XHQ8JHRleHQgdGVtcGxhdGVWYXI9XCJmb29cIj5sSU5TRVJURURbXWluazwvJHRleHQ+XG5cdFx0XHQvL1xuXHRcdFx0aWYgKCAhbm9kZUJlZm9yZSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBGaWx0ZXIgb3V0IHRoZSBmb2xsb3dpbmcgY2FzZSB3aGVyZSB0aGUgc2VsZWN0aW9uIGhhcyB0aGUgXCJ0ZW1wbGF0ZVZhclwiIGF0dHJpYnV0ZSBiZWNhdXNlIHRoZVxuXHRcdFx0Ly8gZ3Jhdml0eSBpcyBvdmVycmlkZGVuIGFuZCBzb21lIHRleHQgd2l0aCBhbm90aGVyIGF0dHJpYnV0ZSAoZS5nLiA8Yj5JTlNFUlRFRDwvYj4pIGlzIGluc2VydGVkOlxuXHRcdFx0Ly9cblx0XHRcdC8vIEJlZm9yZSBpbnNlcnRpb246XG5cdFx0XHQvL1xuXHRcdFx0Ly9cdFx0ICAgICAgICAgICAgICAgICAgICAgICDihrFcblx0XHRcdC8vXHRcdDwkdGV4dCB0ZW1wbGF0ZVZhcj1cImZvb1wiPltdbGluazwvJHRleHQ+XG5cdFx0XHQvL1xuXHRcdFx0Ly8gRXhwZWN0ZWQgYWZ0ZXIgaW5zZXJ0aW9uOlxuXHRcdFx0Ly9cblx0XHRcdC8vXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDihrFcblx0XHRcdC8vXHRcdDwkdGV4dCBib2xkPVwidHJ1ZVwiPklOU0VSVEVEPC8kdGV4dD48JHRleHQgdGVtcGxhdGVWYXI9XCJmb29cIj5bXWxpbms8LyR0ZXh0PlxuXHRcdFx0Ly9cblx0XHRcdGlmICggIW5vZGVCZWZvcmUuaGFzQXR0cmlidXRlKCAndGVtcGxhdGVWYXInICkgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRmlsdGVyIG91dCB0aGUgZm9sbG93aW5nIGNhc2Ugd2hlcmUgYSBsaW5rIGlzIGEgaW5zZXJ0ZWQgaW4gdGhlIG1pZGRsZSAob3IgYmVmb3JlKSBhbm90aGVyIGxpbmtcblx0XHRcdC8vIChkaWZmZXJlbnQgVVJMcywgc28gdGhleSB3aWxsIG5vdCBtZXJnZSkuIEluIHRoaXMgKGxldCdzIHNheSB3ZWlyZCkgY2FzZSwgd2UgY2FuIGxlYXZlIHRoZSBzZWxlY3Rpb25cblx0XHRcdC8vIGF0dHJpYnV0ZXMgYXMgdGhleSBhcmUgYmVjYXVzZSB0aGUgdXNlciB3aWxsIGVuZCB1cCB3cml0aW5nIGluIG9uZSBsaW5rIG9yIGFub3RoZXIgYW55d2F5LlxuXHRcdFx0Ly9cblx0XHRcdC8vIEJlZm9yZSBpbnNlcnRpb246XG5cdFx0XHQvL1xuXHRcdFx0Ly9cdFx0ICAgICAgICAgICAgICAgICAgICAgICDihrBcblx0XHRcdC8vXHRcdDwkdGV4dCB0ZW1wbGF0ZVZhcj1cImZvb1wiPmxbXWluazwvJHRleHQ+XG5cdFx0XHQvL1xuXHRcdFx0Ly8gRXhwZWN0ZWQgYWZ0ZXIgaW5zZXJ0aW9uOlxuXHRcdFx0Ly9cblx0XHRcdC8vXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDihrBcblx0XHRcdC8vXHRcdDwkdGV4dCB0ZW1wbGF0ZVZhcj1cImZvb1wiPmw8LyR0ZXh0PjwkdGV4dCB0ZW1wbGF0ZVZhcj1cImJhclwiPklOU0VSVEVEW108LyR0ZXh0PjwkdGV4dCB0ZW1wbGF0ZVZhcj1cImZvb1wiPmluazwvJHRleHQ+XG5cdFx0XHQvL1xuXHRcdFx0aWYgKCBub2RlQWZ0ZXIgJiYgbm9kZUFmdGVyLmhhc0F0dHJpYnV0ZSggJ3RlbXBsYXRlVmFyJyApICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdG1vZGVsLmNoYW5nZSggd3JpdGVyID0+IHtcblx0XHRcdFx0cmVtb3ZlTGlua0F0dHJpYnV0ZXNGcm9tU2VsZWN0aW9uKCB3cml0ZXIsIGxpbmtDb21tYW5kLm1hbnVhbERlY29yYXRvcnMgKTtcblx0XHRcdH0gKTtcblx0XHR9LCB7IHByaW9yaXR5OiAnbG93JyB9ICk7XG5cdH1cblxuXHQvKipcblx0ICogU3RhcnRzIGxpc3RlbmluZyB0byB7QGxpbmsgbW9kdWxlOmVuZ2luZS92aWV3L2RvY3VtZW50fkRvY3VtZW50I2V2ZW50Om1vdXNlZG93bn0gYW5kXG5cdCAqIHtAbGluayBtb2R1bGU6ZW5naW5lL3ZpZXcvZG9jdW1lbnR+RG9jdW1lbnQjZXZlbnQ6c2VsZWN0aW9uQ2hhbmdlfSBhbmQgcHV0cyB0aGUgc2VsZWN0aW9uIGJlZm9yZS9hZnRlciBhIGxpbmsgbm9kZVxuXHQgKiBpZiBjbGlja2VkIGF0IHRoZSBiZWdpbm5pbmcvZW5kaW5nIG9mIHRoZSBsaW5rLlxuXHQgKlxuXHQgKiBUaGUgcHVycG9zZSBvZiB0aGlzIGFjdGlvbiBpcyB0byBhbGxvdyB0eXBpbmcgYXJvdW5kIHRoZSBsaW5rIG5vZGUgZGlyZWN0bHkgYWZ0ZXIgYSBjbGljay5cblx0ICpcblx0ICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ja2VkaXRvci9ja2VkaXRvcjUvaXNzdWVzLzEwMTYuXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfZW5hYmxlQ2xpY2tpbmdBZnRlckxpbmsoKSB7XG5cdFx0Y29uc3QgZWRpdG9yID0gdGhpcy5lZGl0b3I7XG5cdFx0Y29uc3QgbGlua0NvbW1hbmQgPSBlZGl0b3IuY29tbWFuZHMuZ2V0KCAndGVtcGxhdGUnICk7XG5cblx0XHRlZGl0b3IuZWRpdGluZy52aWV3LmFkZE9ic2VydmVyKCBNb3VzZU9ic2VydmVyICk7XG5cblx0XHRsZXQgY2xpY2tlZCA9IGZhbHNlO1xuXG5cdFx0Ly8gRGV0ZWN0IHRoZSBjbGljay5cblx0XHR0aGlzLmxpc3RlblRvKCBlZGl0b3IuZWRpdGluZy52aWV3LmRvY3VtZW50LCAnbW91c2Vkb3duJywgKCkgPT4ge1xuXHRcdFx0Y2xpY2tlZCA9IHRydWU7XG5cdFx0fSApO1xuXG5cdFx0Ly8gV2hlbiB0aGUgc2VsZWN0aW9uIGhhcyBjaGFuZ2VkLi4uXG5cdFx0dGhpcy5saXN0ZW5UbyggZWRpdG9yLmVkaXRpbmcudmlldy5kb2N1bWVudCwgJ3NlbGVjdGlvbkNoYW5nZScsICgpID0+IHtcblx0XHRcdGlmICggIWNsaWNrZWQgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gLi4uYW5kIGl0IHdhcyBjYXVzZWQgYnkgdGhlIGNsaWNrLi4uXG5cdFx0XHRjbGlja2VkID0gZmFsc2U7XG5cblx0XHRcdGNvbnN0IHNlbGVjdGlvbiA9IGVkaXRvci5tb2RlbC5kb2N1bWVudC5zZWxlY3Rpb247XG5cblx0XHRcdC8vIC4uLmFuZCBubyB0ZXh0IGlzIHNlbGVjdGVkLi4uXG5cdFx0XHRpZiAoICFzZWxlY3Rpb24uaXNDb2xsYXBzZWQgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gLi4uYW5kIGNsaWNrZWQgdGV4dCBpcyB0aGUgbGluay4uLlxuXHRcdFx0aWYgKCAhc2VsZWN0aW9uLmhhc0F0dHJpYnV0ZSggJ3RlbXBsYXRlVmFyJyApICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHBvc2l0aW9uID0gc2VsZWN0aW9uLmdldEZpcnN0UG9zaXRpb24oKTtcblx0XHRcdGNvbnN0IGxpbmtSYW5nZSA9IGZpbmRBdHRyaWJ1dGVSYW5nZSggcG9zaXRpb24sICd0ZW1wbGF0ZVZhcicsIHNlbGVjdGlvbi5nZXRBdHRyaWJ1dGUoICd0ZW1wbGF0ZVZhcicgKSwgZWRpdG9yLm1vZGVsICk7XG5cblx0XHRcdC8vIC4uLmNoZWNrIHdoZXRoZXIgY2xpY2tlZCBzdGFydC9lbmQgYm91bmRhcnkgb2YgdGhlIGxpbmsuXG5cdFx0XHQvLyBJZiBzbywgcmVtb3ZlIHRoZSBgdGVtcGxhdGVWYXJgIGF0dHJpYnV0ZS5cblx0XHRcdGlmICggcG9zaXRpb24uaXNUb3VjaGluZyggbGlua1JhbmdlLnN0YXJ0ICkgfHwgcG9zaXRpb24uaXNUb3VjaGluZyggbGlua1JhbmdlLmVuZCApICkge1xuXHRcdFx0XHRlZGl0b3IubW9kZWwuY2hhbmdlKCB3cml0ZXIgPT4ge1xuXHRcdFx0XHRcdHJlbW92ZUxpbmtBdHRyaWJ1dGVzRnJvbVNlbGVjdGlvbiggd3JpdGVyLCBsaW5rQ29tbWFuZC5tYW51YWxEZWNvcmF0b3JzICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogU3RhcnRzIGxpc3RlbmluZyB0byB7QGxpbmsgbW9kdWxlOmVuZ2luZS9tb2RlbC9tb2RlbH5Nb2RlbCNkZWxldGVDb250ZW50fSBhbmQge0BsaW5rIG1vZHVsZTplbmdpbmUvbW9kZWwvbW9kZWx+TW9kZWwjaW5zZXJ0Q29udGVudH1cblx0ICogYW5kIGNoZWNrcyB3aGV0aGVyIHR5cGluZyBvdmVyIHRoZSBsaW5rLiBJZiBzbywgYXR0cmlidXRlcyBvZiByZW1vdmVkIHRleHQgYXJlIHByZXNlcnZlZCBhbmQgYXBwbGllZCB0byB0aGUgaW5zZXJ0ZWQgdGV4dC5cblx0ICpcblx0ICogVGhlIHB1cnBvc2Ugb2YgdGhpcyBhY3Rpb24gaXMgdG8gYWxsb3cgbW9kaWZ5aW5nIGEgdGV4dCB3aXRob3V0IGxvb3NpbmcgdGhlIGB0ZW1wbGF0ZVZhcmAgYXR0cmlidXRlIChhbmQgb3RoZXIpLlxuXHQgKlxuXHQgKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2NrZWRpdG9yL2NrZWRpdG9yNS9pc3N1ZXMvNDc2Mi5cblx0ICpcblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9lbmFibGVUeXBpbmdPdmVyTGluaygpIHtcblx0XHRjb25zdCBlZGl0b3IgPSB0aGlzLmVkaXRvcjtcblx0XHRjb25zdCB2aWV3ID0gZWRpdG9yLmVkaXRpbmcudmlldztcblxuXHRcdC8vIFNlbGVjdGlvbiBhdHRyaWJ1dGVzIHdoZW4gc3RhcnRlZCB0eXBpbmcgb3ZlciB0aGUgbGluay5cblx0XHRsZXQgc2VsZWN0aW9uQXR0cmlidXRlcztcblxuXHRcdC8vIFdoZXRoZXIgcHJlc3NlZCBgQmFja3NwYWNlYCBvciBgRGVsZXRlYC4gSWYgc28sIGF0dHJpYnV0ZXMgc2hvdWxkIG5vdCBiZSBwcmVzZXJ2ZWQuXG5cdFx0bGV0IGRlbGV0ZWRDb250ZW50O1xuXG5cdFx0Ly8gRGV0ZWN0IHByZXNzaW5nIGBCYWNrc3BhY2VgIC8gYERlbGV0ZWAuXG5cdFx0dGhpcy5saXN0ZW5Ubyggdmlldy5kb2N1bWVudCwgJ2RlbGV0ZScsICgpID0+IHtcblx0XHRcdGRlbGV0ZWRDb250ZW50ID0gdHJ1ZTtcblx0XHR9LCB7IHByaW9yaXR5OiAnaGlnaCcgfSApO1xuXG5cdFx0Ly8gTGlzdGVuaW5nIHRvIGBtb2RlbCNkZWxldGVDb250ZW50YCBhbGxvd3MgZGV0ZWN0aW5nIHdoZXRoZXIgc2VsZWN0ZWQgY29udGVudCB3YXMgYSBsaW5rLlxuXHRcdC8vIElmIHNvLCBiZWZvcmUgcmVtb3ZpbmcgdGhlIGVsZW1lbnQsIHdlIHdpbGwgY29weSBpdHMgYXR0cmlidXRlcy5cblx0XHR0aGlzLmxpc3RlblRvKCBlZGl0b3IubW9kZWwsICdkZWxldGVDb250ZW50JywgKCkgPT4ge1xuXHRcdFx0Y29uc3Qgc2VsZWN0aW9uID0gZWRpdG9yLm1vZGVsLmRvY3VtZW50LnNlbGVjdGlvbjtcblxuXHRcdFx0Ly8gQ29weSBhdHRyaWJ1dGVzIG9ubHkgaWYgYW55dGhpbmcgaXMgc2VsZWN0ZWQuXG5cdFx0XHRpZiAoIHNlbGVjdGlvbi5pc0NvbGxhcHNlZCApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBXaGVuIHRoZSBjb250ZW50IHdhcyBkZWxldGVkLCBkbyBub3QgcHJlc2VydmUgYXR0cmlidXRlcy5cblx0XHRcdGlmICggZGVsZXRlZENvbnRlbnQgKSB7XG5cdFx0XHRcdGRlbGV0ZWRDb250ZW50ID0gZmFsc2U7XG5cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBFbmFibGVkIG9ubHkgd2hlbiB0eXBpbmcuXG5cdFx0XHRpZiAoICFpc1R5cGluZyggZWRpdG9yICkgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCBzaG91bGRDb3B5QXR0cmlidXRlcyggZWRpdG9yLm1vZGVsICkgKSB7XG5cdFx0XHRcdHNlbGVjdGlvbkF0dHJpYnV0ZXMgPSBzZWxlY3Rpb24uZ2V0QXR0cmlidXRlcygpO1xuXHRcdFx0fVxuXHRcdH0sIHsgcHJpb3JpdHk6ICdoaWdoJyB9ICk7XG5cblx0XHQvLyBMaXN0ZW5pbmcgdG8gYG1vZGVsI2luc2VydENvbnRlbnRgIGFsbG93cyBkZXRlY3RpbmcgdGhlIGNvbnRlbnQgaW5zZXJ0aW9uLlxuXHRcdC8vIFdlIHdhbnQgdG8gYXBwbHkgYXR0cmlidXRlcyB0aGF0IHdlcmUgcmVtb3ZlZCB3aGlsZSB0eXBpbmcgb3ZlciB0aGUgbGluay5cblx0XHR0aGlzLmxpc3RlblRvKCBlZGl0b3IubW9kZWwsICdpbnNlcnRDb250ZW50JywgKCBldnQsIFsgZWxlbWVudCBdICkgPT4ge1xuXHRcdFx0ZGVsZXRlZENvbnRlbnQgPSBmYWxzZTtcblxuXHRcdFx0Ly8gRW5hYmxlZCBvbmx5IHdoZW4gdHlwaW5nLlxuXHRcdFx0aWYgKCAhaXNUeXBpbmcoIGVkaXRvciApICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmICggIXNlbGVjdGlvbkF0dHJpYnV0ZXMgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0ZWRpdG9yLm1vZGVsLmNoYW5nZSggd3JpdGVyID0+IHtcblx0XHRcdFx0Zm9yICggY29uc3QgWyBhdHRyaWJ1dGUsIHZhbHVlIF0gb2Ygc2VsZWN0aW9uQXR0cmlidXRlcyApIHtcblx0XHRcdFx0XHR3cml0ZXIuc2V0QXR0cmlidXRlKCBhdHRyaWJ1dGUsIHZhbHVlLCBlbGVtZW50ICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblxuXHRcdFx0c2VsZWN0aW9uQXR0cmlidXRlcyA9IG51bGw7XG5cdFx0fSwgeyBwcmlvcml0eTogJ2hpZ2gnIH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTdGFydHMgbGlzdGVuaW5nIHRvIHtAbGluayBtb2R1bGU6ZW5naW5lL21vZGVsL21vZGVsfk1vZGVsI2RlbGV0ZUNvbnRlbnR9IGFuZCBjaGVja3Mgd2hldGhlclxuXHQgKiByZW1vdmluZyBhIGNvbnRlbnQgcmlnaHQgYWZ0ZXIgdGhlIFwidGVtcGxhdGVWYXJcIiBhdHRyaWJ1dGUuXG5cdCAqXG5cdCAqIElmIHNvLCB0aGUgc2VsZWN0aW9uIHNob3VsZCBub3QgcHJlc2VydmUgdGhlIGB0ZW1wbGF0ZVZhcmAgYXR0cmlidXRlLiBIb3dldmVyLCBpZlxuXHQgKiB0aGUge0BsaW5rIG1vZHVsZTp0eXBpbmcvdHdvc3RlcGNhcmV0bW92ZW1lbnR+VHdvU3RlcENhcmV0TW92ZW1lbnR9IHBsdWdpbiBpcyBhY3RpdmUgYW5kXG5cdCAqIHRoZSBzZWxlY3Rpb24gaGFzIHRoZSBcInRlbXBsYXRlVmFyXCIgYXR0cmlidXRlIGR1ZSB0byBvdmVycmlkZW4gZ3Jhdml0eSAoYXQgdGhlIGVuZCksIHRoZSBgdGVtcGxhdGVWYXJgIGF0dHJpYnV0ZSBzaG91bGQgc3RheSB1bnRvdWNoZWQuXG5cdCAqXG5cdCAqIFRoZSBwdXJwb3NlIG9mIHRoaXMgYWN0aW9uIGlzIHRvIGFsbG93IHJlbW92aW5nIHRoZSBsaW5rIHRleHQgYW5kIGtlZXAgdGhlIHNlbGVjdGlvbiBvdXRzaWRlIHRoZSBsaW5rLlxuXHQgKlxuXHQgKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2NrZWRpdG9yL2NrZWRpdG9yNS9pc3N1ZXMvNzUyMS5cblx0ICpcblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9oYW5kbGVEZWxldGVDb250ZW50QWZ0ZXJMaW5rKCkge1xuXHRcdGNvbnN0IGVkaXRvciA9IHRoaXMuZWRpdG9yO1xuXHRcdGNvbnN0IG1vZGVsID0gZWRpdG9yLm1vZGVsO1xuXHRcdGNvbnN0IHNlbGVjdGlvbiA9IG1vZGVsLmRvY3VtZW50LnNlbGVjdGlvbjtcblx0XHRjb25zdCB2aWV3ID0gZWRpdG9yLmVkaXRpbmcudmlldztcblx0XHRjb25zdCBsaW5rQ29tbWFuZCA9IGVkaXRvci5jb21tYW5kcy5nZXQoICd0ZW1wbGF0ZScgKTtcblxuXHRcdC8vIEEgZmxhZyB3aGV0aGVyIGF0dHJpYnV0ZXMgYHRlbXBsYXRlVmFyYCBhdHRyaWJ1dGUgc2hvdWxkIGJlIHByZXNlcnZlZC5cblx0XHRsZXQgc2hvdWxkUHJlc2VydmVBdHRyaWJ1dGVzID0gZmFsc2U7XG5cblx0XHQvLyBBIGZsYWcgd2hldGhlciB0aGUgYEJhY2tzcGFjZWAga2V5IHdhcyBwcmVzc2VkLlxuXHRcdGxldCBoYXNCYWNrc3BhY2VQcmVzc2VkID0gZmFsc2U7XG5cblx0XHQvLyBEZXRlY3QgcHJlc3NpbmcgYEJhY2tzcGFjZWAuXG5cdFx0dGhpcy5saXN0ZW5Ubyggdmlldy5kb2N1bWVudCwgJ2RlbGV0ZScsICggZXZ0LCBkYXRhICkgPT4ge1xuXHRcdFx0aGFzQmFja3NwYWNlUHJlc3NlZCA9IGRhdGEuZG9tRXZlbnQua2V5Q29kZSA9PT0ga2V5Q29kZXMuYmFja3NwYWNlO1xuXHRcdH0sIHsgcHJpb3JpdHk6ICdoaWdoJyB9ICk7XG5cblx0XHQvLyBCZWZvcmUgcmVtb3ZpbmcgdGhlIGNvbnRlbnQsIGNoZWNrIHdoZXRoZXIgdGhlIHNlbGVjdGlvbiBpcyBpbnNpZGUgYSBsaW5rIG9yIGF0IHRoZSBlbmQgb2YgbGluayBidXQgd2l0aCAyLVNDTSBlbmFibGVkLlxuXHRcdC8vIElmIHNvLCB3ZSB3YW50IHRvIHByZXNlcnZlIGxpbmsgYXR0cmlidXRlcy5cblx0XHR0aGlzLmxpc3RlblRvKCBtb2RlbCwgJ2RlbGV0ZUNvbnRlbnQnLCAoKSA9PiB7XG5cdFx0XHQvLyBSZXNldCB0aGUgc3RhdGUuXG5cdFx0XHRzaG91bGRQcmVzZXJ2ZUF0dHJpYnV0ZXMgPSBmYWxzZTtcblxuXHRcdFx0Y29uc3QgcG9zaXRpb24gPSBzZWxlY3Rpb24uZ2V0Rmlyc3RQb3NpdGlvbigpO1xuXHRcdFx0Y29uc3QgdGVtcGxhdGVWYXIgPSBzZWxlY3Rpb24uZ2V0QXR0cmlidXRlKCAndGVtcGxhdGVWYXInICk7XG5cblx0XHRcdGlmICggIXRlbXBsYXRlVmFyICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGxpbmtSYW5nZSA9IGZpbmRBdHRyaWJ1dGVSYW5nZSggcG9zaXRpb24sICd0ZW1wbGF0ZVZhcicsIHRlbXBsYXRlVmFyLCBtb2RlbCApO1xuXG5cdFx0XHQvLyBQcmVzZXJ2ZSBgdGVtcGxhdGVWYXJgIGF0dHJpYnV0ZSBpZiB0aGUgc2VsZWN0aW9uIGlzIGluIHRoZSBtaWRkbGUgb2YgdGhlIGxpbmsgb3Jcblx0XHRcdC8vIHRoZSBzZWxlY3Rpb24gaXMgYXQgdGhlIGVuZCBvZiB0aGUgbGluayBhbmQgMi1TQ00gaXMgYWN0aXZhdGVkLlxuXHRcdFx0c2hvdWxkUHJlc2VydmVBdHRyaWJ1dGVzID0gbGlua1JhbmdlLmNvbnRhaW5zUG9zaXRpb24oIHBvc2l0aW9uICkgfHwgbGlua1JhbmdlLmVuZC5pc0VxdWFsKCBwb3NpdGlvbiApO1xuXHRcdH0sIHsgcHJpb3JpdHk6ICdoaWdoJyB9ICk7XG5cblx0XHQvLyBBZnRlciByZW1vdmluZyB0aGUgY29udGVudCwgY2hlY2sgd2hldGhlciB0aGUgY3VycmVudCBzZWxlY3Rpb24gc2hvdWxkIHByZXNlcnZlIHRoZSBgdGVtcGxhdGVWYXJgIGF0dHJpYnV0ZS5cblx0XHR0aGlzLmxpc3RlblRvKCBtb2RlbCwgJ2RlbGV0ZUNvbnRlbnQnLCAoKSA9PiB7XG5cdFx0XHQvLyBJZiBkaWRuJ3QgcHJlc3MgYEJhY2tzcGFjZWAuXG5cdFx0XHRpZiAoICFoYXNCYWNrc3BhY2VQcmVzc2VkICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGhhc0JhY2tzcGFjZVByZXNzZWQgPSBmYWxzZTtcblxuXHRcdFx0Ly8gRGlzYWJsZSB0aGUgbWVjaGFuaXNtIGlmIGluc2lkZSBhIGxpbmsgKGA8JHRleHQgdXJsPVwiZm9vXCI+Rltdb288LyR0ZXh0PmAgb3IgPCR0ZXh0IHVybD1cImZvb1wiPkZvb1tdPC8kdGV4dD5gKS5cblx0XHRcdGlmICggc2hvdWxkUHJlc2VydmVBdHRyaWJ1dGVzICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIFVzZSBgbW9kZWwuZW5xdWV1ZUNoYW5nZSgpYCBpbiBvcmRlciB0byBleGVjdXRlIHRoZSBjYWxsYmFjayBhdCB0aGUgZW5kIG9mIHRoZSBjaGFuZ2VzIHByb2Nlc3MuXG5cdFx0XHRlZGl0b3IubW9kZWwuZW5xdWV1ZUNoYW5nZSggd3JpdGVyID0+IHtcblx0XHRcdFx0cmVtb3ZlTGlua0F0dHJpYnV0ZXNGcm9tU2VsZWN0aW9uKCB3cml0ZXIsIGxpbmtDb21tYW5kLm1hbnVhbERlY29yYXRvcnMgKTtcblx0XHRcdH0gKTtcblx0XHR9LCB7IHByaW9yaXR5OiAnbG93JyB9ICk7XG5cdH1cbn1cblxuLy8gTWFrZSB0aGUgc2VsZWN0aW9uIGZyZWUgb2YgbGluay1yZWxhdGVkIG1vZGVsIGF0dHJpYnV0ZXMuXG4vLyBBbGwgbGluay1yZWxhdGVkIG1vZGVsIGF0dHJpYnV0ZXMgc3RhcnQgd2l0aCBcImxpbmtcIi4gVGhhdCBpbmNsdWRlcyBub3Qgb25seSBcInRlbXBsYXRlVmFyXCJcbi8vIGJ1dCBhbHNvIGFsbCBkZWNvcmF0b3IgYXR0cmlidXRlcyAodGhleSBoYXZlIGR5bmFtaWMgbmFtZXMpLlxuLy9cbi8vIEBwYXJhbSB7bW9kdWxlOmVuZ2luZS9tb2RlbC93cml0ZXJ+V3JpdGVyfSB3cml0ZXJcbi8vIEBwYXJhbSB7bW9kdWxlOnV0aWxzL2NvbGxlY3Rpb25+Q29sbGVjdGlvbn0gbWFudWFsRGVjb3JhdG9yc1xuZnVuY3Rpb24gcmVtb3ZlTGlua0F0dHJpYnV0ZXNGcm9tU2VsZWN0aW9uKCB3cml0ZXIsIG1hbnVhbERlY29yYXRvcnMgKSB7XG5cdHdyaXRlci5yZW1vdmVTZWxlY3Rpb25BdHRyaWJ1dGUoICd0ZW1wbGF0ZVZhcicgKTtcblxuXHRmb3IgKCBjb25zdCBkZWNvcmF0b3Igb2YgbWFudWFsRGVjb3JhdG9ycyApIHtcblx0XHR3cml0ZXIucmVtb3ZlU2VsZWN0aW9uQXR0cmlidXRlKCBkZWNvcmF0b3IuaWQgKTtcblx0fVxufVxuXG4vLyBDaGVja3Mgd2hldGhlciBzZWxlY3Rpb24ncyBhdHRyaWJ1dGVzIHNob3VsZCBiZSBjb3BpZWQgdG8gdGhlIG5ldyBpbnNlcnRlZCB0ZXh0LlxuLy9cbi8vIEBwYXJhbSB7bW9kdWxlOmVuZ2luZS9tb2RlbC9tb2RlbH5Nb2RlbH0gbW9kZWxcbi8vIEByZXR1cm5zIHtCb29sZWFufVxuZnVuY3Rpb24gc2hvdWxkQ29weUF0dHJpYnV0ZXMoIG1vZGVsICkge1xuXHRjb25zdCBzZWxlY3Rpb24gPSBtb2RlbC5kb2N1bWVudC5zZWxlY3Rpb247XG5cdGNvbnN0IGZpcnN0UG9zaXRpb24gPSBzZWxlY3Rpb24uZ2V0Rmlyc3RQb3NpdGlvbigpO1xuXHRjb25zdCBsYXN0UG9zaXRpb24gPSBzZWxlY3Rpb24uZ2V0TGFzdFBvc2l0aW9uKCk7XG5cdGNvbnN0IG5vZGVBdEZpcnN0UG9zaXRpb24gPSBmaXJzdFBvc2l0aW9uLm5vZGVBZnRlcjtcblxuXHQvLyBUaGUgdGV4dCBsaW5rIG5vZGUgZG9lcyBub3QgZXhpc3QuLi5cblx0aWYgKCAhbm9kZUF0Rmlyc3RQb3NpdGlvbiApIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyAuLi5vciBpdCBpc24ndCB0aGUgdGV4dCBub2RlLi4uXG5cdGlmICggIW5vZGVBdEZpcnN0UG9zaXRpb24uaXMoICckdGV4dCcgKSApIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyAuLi5vciBpc24ndCB0aGUgbGluay5cblx0aWYgKCAhbm9kZUF0Rmlyc3RQb3NpdGlvbi5oYXNBdHRyaWJ1dGUoICd0ZW1wbGF0ZVZhcicgKSApIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyBgdGV4dE5vZGVgID0gdGhlIHBvc2l0aW9uIGlzIGluc2lkZSB0aGUgbGluayBlbGVtZW50LlxuXHQvLyBgbm9kZUJlZm9yZWAgPSB0aGUgcG9zaXRpb24gaXMgYXQgdGhlIGVuZCBvZiB0aGUgbGluayBlbGVtZW50LlxuXHRjb25zdCBub2RlQXRMYXN0UG9zaXRpb24gPSBsYXN0UG9zaXRpb24udGV4dE5vZGUgfHwgbGFzdFBvc2l0aW9uLm5vZGVCZWZvcmU7XG5cblx0Ly8gSWYgYm90aCByZWZlcmVuY2VzIHRoZSBzYW1lIG5vZGUgc2VsZWN0aW9uIGNvbnRhaW5zIGEgc2luZ2xlIHRleHQgbm9kZS5cblx0aWYgKCBub2RlQXRGaXJzdFBvc2l0aW9uID09PSBub2RlQXRMYXN0UG9zaXRpb24gKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHQvLyBJZiBub2RlcyBhcmUgbm90IGVxdWFsLCBtYXliZSB0aGUgbGluayBub2RlcyBoYXMgZGVmaW5lZCBhZGRpdGlvbmFsIGF0dHJpYnV0ZXMgaW5zaWRlLlxuXHQvLyBGaXJzdCwgd2UgbmVlZCB0byBmaW5kIHRoZSBlbnRpcmUgbGluayByYW5nZS5cblx0Y29uc3QgbGlua1JhbmdlID0gZmluZEF0dHJpYnV0ZVJhbmdlKCBmaXJzdFBvc2l0aW9uLCAndGVtcGxhdGVWYXInLCBub2RlQXRGaXJzdFBvc2l0aW9uLmdldEF0dHJpYnV0ZSggJ3RlbXBsYXRlVmFyJyApLCBtb2RlbCApO1xuXG5cdC8vIFRoZW4gd2UgY2FuIGNoZWNrIHdoZXRoZXIgc2VsZWN0ZWQgcmFuZ2UgaXMgaW5zaWRlIHRoZSBmb3VuZCBsaW5rIHJhbmdlLiBJZiBzbywgYXR0cmlidXRlcyBzaG91bGQgYmUgcHJlc2VydmVkLlxuXHRyZXR1cm4gbGlua1JhbmdlLmNvbnRhaW5zUmFuZ2UoIG1vZGVsLmNyZWF0ZVJhbmdlKCBmaXJzdFBvc2l0aW9uLCBsYXN0UG9zaXRpb24gKSwgdHJ1ZSApO1xufVxuXG4vLyBDaGVja3Mgd2hldGhlciBwcm92aWRlZCBjaGFuZ2VzIHdlcmUgY2F1c2VkIGJ5IHR5cGluZy5cbi8vXG4vLyBAcGFyYW1zIHttb2R1bGU6Y29yZS9lZGl0b3IvZWRpdG9yfkVkaXRvcn0gZWRpdG9yXG4vLyBAcmV0dXJucyB7Qm9vbGVhbn1cbmZ1bmN0aW9uIGlzVHlwaW5nKCBlZGl0b3IgKSB7XG5cdGNvbnN0IGlucHV0ID0gZWRpdG9yLnBsdWdpbnMuZ2V0KCAnSW5wdXQnICk7XG5cblx0cmV0dXJuIGlucHV0LmlzSW5wdXQoIGVkaXRvci5tb2RlbC5jaGFuZ2UoIHdyaXRlciA9PiB3cml0ZXIuYmF0Y2ggKSApO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZSBDb3B5cmlnaHQgKGMpIDIwMDMtMjAyMSwgQ0tTb3VyY2UgLSBGcmVkZXJpY28gS25hYmJlbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIEZvciBsaWNlbnNpbmcsIHNlZSBMSUNFTlNFLm1kIG9yIGh0dHBzOi8vY2tlZGl0b3IuY29tL2xlZ2FsL2NrZWRpdG9yLW9zcy1saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGxpbmsvbGlua3VpXG4gKi9cblxuaW1wb3J0ICBQbHVnaW4gIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtY29yZS9zcmMvcGx1Z2luJztcbmltcG9ydCAgQ2xpY2tPYnNlcnZlciAgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1lbmdpbmUvc3JjL3ZpZXcvb2JzZXJ2ZXIvY2xpY2tvYnNlcnZlcic7XG5pbXBvcnQgeyBCdXR0b25WaWV3LCBDb250ZXh0dWFsQmFsbG9vbiwgY2xpY2tPdXRzaWRlSGFuZGxlciAsQmFsbG9vblBhbmVsVmlld30gZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS11aS9zcmMnO1xuXG5pbXBvcnQgVGVtcGxhdGVGb3JtVmlldyBmcm9tICcuL3VpL3RlbXBsYXRlLWZvcm0tdmlldyc7XG5pbXBvcnQgVGVtcGxhdGVBY3Rpb25zVmlldyBmcm9tICcuL3VpL3RlbXBsYXRlLWFjdGlvbnMtdmlldyc7XG5pbXBvcnQgVGVtcGxhdGVTYXZlVmlldyBmcm9tICcuL3VpL3RlbXBsYXRlLXNhdmUtdmlldyc7XG5pbXBvcnQgeyAgaXNMaW5rRWxlbWVudCwgVEVNUExBVEVfS0VZU1RST0tFICwgU0FWRV9LRVlTVFJPS0UgfSBmcm9tICcuL3V0aWxzJztcblxuaW1wb3J0IFRlbWxhdGVJY29uIGZyb20gJy4uL3RoZW1lL2ljb25zL3RlbWxhdGVJY29uLnN2Zyc7XG5pbXBvcnQgU2F2ZVRlbXBsYXRlIGZyb20gJy4uL3RoZW1lL2ljb25zL2ZpbGUtZXhwb3J0LXNvbGlkLnN2Zyc7XG5jb25zdCBWSVNVQUxfU0VMRUNUSU9OX01BUktFUl9OQU1FID0gJ3RlbXBsYXRlLXVpJztcblxuLyoqXG4gKiBUaGUgbGluayBVSSBwbHVnaW4uIEl0IGludHJvZHVjZXMgdGhlIGAndGVtcGxhdGUnYCBhbmQgYCdjYW5jZWx0ZW1wbGF0ZSdgIGJ1dHRvbnMgYW5kIHN1cHBvcnQgZm9yIHRoZSA8a2JkPkN0cmwrSzwva2JkPiBrZXlzdHJva2UuXG4gKlxuICogSXQgdXNlcyB0aGVcbiAqIHtAbGluayBtb2R1bGU6dWkvcGFuZWwvYmFsbG9vbi9jb250ZXh0dWFsYmFsbG9vbn5Db250ZXh0dWFsQmFsbG9vbiBjb250ZXh0dWFsIGJhbGxvb24gcGx1Z2lufS5cbiAqXG4gKiBAZXh0ZW5kcyBtb2R1bGU6Y29yZS9wbHVnaW5+UGx1Z2luXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlbXBsYXRlVWkgZXh0ZW5kcyBQbHVnaW4ge1xuXHQvKipcblx0ICogQGluaGVyaXREb2Ncblx0ICovXG5cdHN0YXRpYyBnZXQgcmVxdWlyZXMoKSB7XG5cdFx0cmV0dXJuIFsgQ29udGV4dHVhbEJhbGxvb24gLEJhbGxvb25QYW5lbFZpZXddO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbmhlcml0RG9jXG5cdCAqL1xuXHRzdGF0aWMgZ2V0IHBsdWdpbk5hbWUoKSB7XG5cdFx0cmV0dXJuICdUZXh0VGVtcGxhdGVVSSc7XG5cdH1cblxuXHQvKipcblx0ICogQGluaGVyaXREb2Ncblx0ICovXG5cdGluaXQoKSB7XG5cdFx0Y29uc3QgZWRpdG9yID0gdGhpcy5lZGl0b3I7XG5cblx0XHRlZGl0b3IuZWRpdGluZy52aWV3LmFkZE9ic2VydmVyKCBDbGlja09ic2VydmVyICk7XG5cblx0XHQvKipcblx0XHQgKiBUaGUgYWN0aW9ucyB2aWV3IGRpc3BsYXllZCBpbnNpZGUgb2YgdGhlIGJhbGxvb24uXG5cdFx0ICpcblx0XHQgKiBAbWVtYmVyIHttb2R1bGU6bGluay91aS9saW5rYWN0aW9uc3ZpZXd+VGVtcGxhdGVBY3Rpb25zVmlld31cblx0XHQgKi9cblx0XHR0aGlzLmFjdGlvbnNWaWV3ID0gdGhpcy5fY3JlYXRlQWN0aW9uc1ZpZXcoKTtcblx0XHQvKipcblx0XHQgKiBUaGUgYWN0aW9ucyB2aWV3IGRpc3BsYXllZCBpbnNpZGUgb2YgdGhlIGJhbGxvb24uXG5cdFx0ICpcblx0XHQgKiBAbWVtYmVyIHttb2R1bGU6bGluay91aS9saW5rYWN0aW9uc3ZpZXd+VGVtcGxhdGVBY3Rpb25zVmlld31cblx0XHQgKi9cblx0XHR0aGlzLnNhdmVWaWV3ID0gdGhpcy5fY3JlYXRlU2F2ZVZpZXcoKTtcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBmb3JtIHZpZXcgZGlzcGxheWVkIGluc2lkZSB0aGUgYmFsbG9vbi5cblx0XHQgKlxuXHRcdCAqIEBtZW1iZXIge21vZHVsZTpsaW5rL3VpL2xpbmtmb3Jtdmlld35MaW5rRm9ybVZpZXd9XG5cdFx0ICovXG5cdFx0dGhpcy5mb3JtVmlldyA9IHRoaXMuX2NyZWF0ZUZvcm1WaWV3KCk7XG5cblx0XHQvKipcblx0XHQgKiBUaGUgY29udGV4dHVhbCBiYWxsb29uIHBsdWdpbiBpbnN0YW5jZS5cblx0XHQgKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICogQG1lbWJlciB7bW9kdWxlOnVpL3BhbmVsL2JhbGxvb24vY29udGV4dHVhbGJhbGxvb25+Q29udGV4dHVhbEJhbGxvb259XG5cdFx0ICovXG5cdFx0dGhpcy5fYmFsbG9vbiA9IGVkaXRvci5wbHVnaW5zLmdldCggQ29udGV4dHVhbEJhbGxvb24gKTtcblx0XHR0aGlzLl9wYW5lbCA9IGVkaXRvci5wbHVnaW5zLmdldCggQmFsbG9vblBhbmVsVmlldyApO1xuXG5cdFx0Ly8gQ3JlYXRlIHRvb2xiYXIgYnV0dG9ucy5cblx0XHR0aGlzLl9jcmVhdGVUb29sYmFyTGlua0J1dHRvbigpO1xuXG5cdFx0Ly8gQXR0YWNoIGxpZmVjeWNsZSBhY3Rpb25zIHRvIHRoZSB0aGUgYmFsbG9vbi5cblx0XHR0aGlzLl9lbmFibGVVc2VyQmFsbG9vbkludGVyYWN0aW9ucygpO1xuXG5cdFx0Ly8gUmVuZGVycyBhIGZha2UgdmlzdWFsIHNlbGVjdGlvbiBtYXJrZXIgb24gYW4gZXhwYW5kZWQgc2VsZWN0aW9uLlxuXHRcdGVkaXRvci5jb252ZXJzaW9uLmZvciggJ2VkaXRpbmdEb3duY2FzdCcgKS5tYXJrZXJUb0hpZ2hsaWdodCgge1xuXHRcdFx0bW9kZWw6IFZJU1VBTF9TRUxFQ1RJT05fTUFSS0VSX05BTUUsXG5cdFx0XHR2aWV3OiB7XG5cdFx0XHRcdGNsYXNzZXM6IFsgJ2NrLWZha2UtbGluay1zZWxlY3Rpb24nIF1cblx0XHRcdH1cblx0XHR9ICk7XG5cblx0XHQvLyBSZW5kZXJzIGEgZmFrZSB2aXN1YWwgc2VsZWN0aW9uIG1hcmtlciBvbiBhIGNvbGxhcHNlZCBzZWxlY3Rpb24uXG5cdFx0ZWRpdG9yLmNvbnZlcnNpb24uZm9yKCAnZWRpdGluZ0Rvd25jYXN0JyApLm1hcmtlclRvRWxlbWVudCgge1xuXHRcdFx0bW9kZWw6IFZJU1VBTF9TRUxFQ1RJT05fTUFSS0VSX05BTUUsXG5cdFx0XHR2aWV3OiB7XG5cdFx0XHRcdG5hbWU6ICdzcGFuJyxcblx0XHRcdFx0Y2xhc3NlczogWyAnY2stZmFrZS1saW5rLXNlbGVjdGlvbicsICdjay1mYWtlLWxpbmstc2VsZWN0aW9uX2NvbGxhcHNlZCcgXVxuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5oZXJpdERvY1xuXHQgKi9cblx0ZGVzdHJveSgpIHtcblx0XHRzdXBlci5kZXN0cm95KCk7XG5cblx0XHQvLyBEZXN0cm95IGNyZWF0ZWQgVUkgY29tcG9uZW50cyBhcyB0aGV5IGFyZSBub3QgYXV0b21hdGljYWxseSBkZXN0cm95ZWQgKHNlZSBja2VkaXRvcjUjMTM0MSkuXG5cdFx0dGhpcy5mb3JtVmlldy5kZXN0cm95KCk7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlcyB0aGUge0BsaW5rIG1vZHVsZTpsaW5rL3VpL2xpbmthY3Rpb25zdmlld35UZW1wbGF0ZUFjdGlvbnNWaWV3fSBpbnN0YW5jZS5cblx0ICpcblx0ICogQHByaXZhdGVcblx0ICogQHJldHVybnMge21vZHVsZTpsaW5rL3VpL2xpbmthY3Rpb25zdmlld35UZW1wbGF0ZUFjdGlvbnNWaWV3fSBUaGUgbGluayBhY3Rpb25zIHZpZXcgaW5zdGFuY2UuXG5cdCAqL1xuXHRfY3JlYXRlQWN0aW9uc1ZpZXcoKSB7XG5cdFx0Y29uc3QgZWRpdG9yID0gdGhpcy5lZGl0b3I7XG5cdFx0Y29uc3QgYWN0aW9uc1ZpZXcgPSBuZXcgVGVtcGxhdGVBY3Rpb25zVmlldyggZWRpdG9yLmxvY2FsZSApO1xuXHRcdGNvbnN0IHRlbXBsYXRlQ29tbWFuZCA9IGVkaXRvci5jb21tYW5kcy5nZXQoICd0ZW1wbGF0ZScgKTtcblx0XHRjb25zdCBjYW5jZWxUZW1wbGF0ZUNvbW1hbmQgPSBlZGl0b3IuY29tbWFuZHMuZ2V0KCAnY2FuY2VsdGVtcGxhdGUnICk7XG5cblx0XHRhY3Rpb25zVmlldy5iaW5kKCAnaHJlZicgKS50byggdGVtcGxhdGVDb21tYW5kLCAndmFsdWUnICk7XG5cdFx0YWN0aW9uc1ZpZXcuZWRpdEJ1dHRvblZpZXcuYmluZCggJ2lzRW5hYmxlZCcgKS50byggdGVtcGxhdGVDb21tYW5kICk7XG5cdFx0YWN0aW9uc1ZpZXcudW5saW5rQnV0dG9uVmlldy5iaW5kKCAnaXNFbmFibGVkJyApLnRvKCBjYW5jZWxUZW1wbGF0ZUNvbW1hbmQgKTtcblxuXHRcdC8vIEV4ZWN1dGUgdW5saW5rIGNvbW1hbmQgYWZ0ZXIgY2xpY2tpbmcgb24gdGhlIFwiRWRpdFwiIGJ1dHRvbi5cblx0XHR0aGlzLmxpc3RlblRvKCBhY3Rpb25zVmlldywgJ2VkaXQnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLl9hZGRGb3JtVmlldygpO1xuXHRcdH0gKTtcblxuXHRcdC8vIEV4ZWN1dGUgdW5saW5rIGNvbW1hbmQgYWZ0ZXIgY2xpY2tpbmcgb24gdGhlIFwiVW5saW5rXCIgYnV0dG9uLlxuXHRcdHRoaXMubGlzdGVuVG8oIGFjdGlvbnNWaWV3LCAnY2FuY2VsdGVtcGxhdGUnLCAoKSA9PiB7XG5cdFx0XHRlZGl0b3IuZXhlY3V0ZSggJ2NhbmNlbHRlbXBsYXRlJyApO1xuXHRcdFx0dGhpcy5faGlkZVVJKCk7XG5cdFx0fSApO1xuXG5cdFx0Ly8gQ2xvc2UgdGhlIHBhbmVsIG9uIGVzYyBrZXkgcHJlc3Mgd2hlbiB0aGUgKiphY3Rpb25zIGhhdmUgZm9jdXMqKi5cblx0XHRhY3Rpb25zVmlldy5rZXlzdHJva2VzLnNldCggJ0VzYycsICggZGF0YSwgY2FuY2VsICkgPT4ge1xuXHRcdFx0dGhpcy5faGlkZVVJKCk7XG5cdFx0XHRjYW5jZWwoKTtcblx0XHR9ICk7XG5cblx0XHQvLyBPcGVuIHRoZSBmb3JtIHZpZXcgb24gQ3RybCtLIHdoZW4gdGhlICoqYWN0aW9ucyBoYXZlIGZvY3VzKiouLlxuXHRcdGFjdGlvbnNWaWV3LmtleXN0cm9rZXMuc2V0KCBURU1QTEFURV9LRVlTVFJPS0UsICggZGF0YSwgY2FuY2VsICkgPT4ge1xuXHRcdFx0dGhpcy5fYWRkRm9ybVZpZXcoKTtcblx0XHRcdGNhbmNlbCgpO1xuXHRcdH0gKTtcblxuXHRcdHJldHVybiBhY3Rpb25zVmlldztcblx0fVxuXG5cdF9jcmVhdGVTYXZlVmlldygpIHtcblx0XHRjb25zdCBlZGl0b3IgPSB0aGlzLmVkaXRvcjtcblx0XHRjb25zdCBhY3Rpb25zVmlldyA9IG5ldyBUZW1wbGF0ZVNhdmVWaWV3KCBlZGl0b3IubG9jYWxlICk7XG5cblx0XHQvLyBFeGVjdXRlIHVubGluayBjb21tYW5kIGFmdGVyIGNsaWNraW5nIG9uIHRoZSBcIkVkaXRcIiBidXR0b24uXG5cdFx0dGhpcy5saXN0ZW5UbyggYWN0aW9uc1ZpZXcsICdzYXZlJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5fYWRkRm9ybVZpZXcoKTtcblx0XHR9ICk7XG5cblx0XHQvLyBFeGVjdXRlIHVubGluayBjb21tYW5kIGFmdGVyIGNsaWNraW5nIG9uIHRoZSBcIlVubGlua1wiIGJ1dHRvbi5cblx0XHR0aGlzLmxpc3RlblRvKCBhY3Rpb25zVmlldywgJ2NhbmNlbHRlbXBsYXRlJywgKCkgPT4ge1xuXHRcdFx0ZWRpdG9yLmV4ZWN1dGUoICdjYW5jZWx0ZW1wbGF0ZScgKTtcblx0XHRcdHRoaXMuX2hpZGVVSSgpO1xuXHRcdH0gKTtcblxuXHRcdC8vIENsb3NlIHRoZSBwYW5lbCBvbiBlc2Mga2V5IHByZXNzIHdoZW4gdGhlICoqYWN0aW9ucyBoYXZlIGZvY3VzKiouXG5cdFx0YWN0aW9uc1ZpZXcua2V5c3Ryb2tlcy5zZXQoICdFc2MnLCAoIGRhdGEsIGNhbmNlbCApID0+IHtcblx0XHRcdHRoaXMuX2hpZGVVSSgpO1xuXHRcdFx0Y2FuY2VsKCk7XG5cdFx0fSApO1xuXG5cblxuXHRcdHJldHVybiBhY3Rpb25zVmlldztcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIHRoZSB7QGxpbmsgbW9kdWxlOmxpbmsvdWkvbGlua2Zvcm12aWV3fkxpbmtGb3JtVmlld30gaW5zdGFuY2UuXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEByZXR1cm5zIHttb2R1bGU6bGluay91aS9saW5rZm9ybXZpZXd+TGlua0Zvcm1WaWV3fSBUaGUgbGluayBmb3JtIHZpZXcgaW5zdGFuY2UuXG5cdCAqL1xuXHRfY3JlYXRlRm9ybVZpZXcoKSB7XG5cdFx0Y29uc3QgZWRpdG9yID0gdGhpcy5lZGl0b3I7XG5cdFx0Y29uc3QgdGVtcGxhdGVDb21tYW5kID0gZWRpdG9yLmNvbW1hbmRzLmdldCggJ3RlbXBsYXRlJyApO1xuXG5cdFx0Y29uc3QgZm9ybVZpZXcgPSBuZXcgVGVtcGxhdGVGb3JtVmlldyggZWRpdG9yLmxvY2FsZSwgdGVtcGxhdGVDb21tYW5kICk7XG5cblx0XHRmb3JtVmlldy5sYWJlbElucHV0Vmlldy5maWVsZFZpZXcuYmluZCggJ3ZhbHVlJyApLnRvKCB0ZW1wbGF0ZUNvbW1hbmQsICd2YWx1ZScgKTtcblxuXHRcdC8vIEZvcm0gZWxlbWVudHMgc2hvdWxkIGJlIHJlYWQtb25seSB3aGVuIGNvcnJlc3BvbmRpbmcgY29tbWFuZHMgYXJlIGRpc2FibGVkLlxuXHRcdGZvcm1WaWV3LmxhYmVsSW5wdXRWaWV3LmJpbmQoICdpc1JlYWRPbmx5JyApLnRvKCB0ZW1wbGF0ZUNvbW1hbmQsICdpc0VuYWJsZWQnLCB2YWx1ZSA9PiAhdmFsdWUgKTtcblxuXHRcdGZvcm1WaWV3LnNhdmVCdXR0b25WaWV3LmJpbmQoICdpc0VuYWJsZWQnICkudG8oIHRlbXBsYXRlQ29tbWFuZCApO1xuXG5cdFx0Ly8gRXhlY3V0ZSBsaW5rIGNvbW1hbmQgYWZ0ZXIgY2xpY2tpbmcgdGhlIFwiU2F2ZVwiIGJ1dHRvbi5cblx0XHR0aGlzLmxpc3RlblRvKCBmb3JtVmlldywgJ3N1Ym1pdCcsICgpID0+IHtcblx0XHRcdGNvbnN0IHtsYWJlbH0gID0gZm9ybVZpZXcudHlwZUlucHV0Vmlldy5maWVsZFZpZXcuYnV0dG9uVmlldztcblx0XHRcdGNvbnN0IHRlbXBsYXRlVmFyID0ge1xuXHRcdFx0XHRpZCA6IGZvcm1WaWV3LmxhYmVsSW5wdXRWaWV3LmZpZWxkVmlldy5lbGVtZW50LnZhbHVlLFxuXHRcdFx0XHR0eXBlIDogbGFiZWxcblx0XHRcdH1cblx0XHRcdC8vIGNvbnN0IHsgdmFsdWUgfSA9IGZvcm1WaWV3LmxhYmVsSW5wdXRWaWV3LmZpZWxkVmlldy5lbGVtZW50O1xuXHRcdFx0Ly8gY29uc3QgcGFyc2VkVXJsID0gYWRkTGlua1Byb3RvY29sSWZBcHBsaWNhYmxlKCB2YWx1ZSwgZGVmYXVsdFByb3RvY29sICk7XG5cdFx0XHRlZGl0b3IuZXhlY3V0ZSggJ3RlbXBsYXRlJywgdGVtcGxhdGVWYXIsIGZvcm1WaWV3LmdldERlY29yYXRvclN3aXRjaGVzU3RhdGUoKSApO1xuXHRcdFx0dGhpcy5fY2xvc2VGb3JtVmlldygpO1xuXHRcdH0gKTtcblxuXHRcdC8vIEhpZGUgdGhlIHBhbmVsIGFmdGVyIGNsaWNraW5nIHRoZSBcIkNhbmNlbFwiIGJ1dHRvbi5cblx0XHR0aGlzLmxpc3RlblRvKCBmb3JtVmlldywgJ2NhbmNlbCcsICgpID0+IHtcblx0XHRcdHRoaXMuX2Nsb3NlRm9ybVZpZXcoKTtcblx0XHR9ICk7XG5cblx0XHQvLyBDbG9zZSB0aGUgcGFuZWwgb24gZXNjIGtleSBwcmVzcyB3aGVuIHRoZSAqKmZvcm0gaGFzIGZvY3VzKiouXG5cdFx0Zm9ybVZpZXcua2V5c3Ryb2tlcy5zZXQoICdFc2MnLCAoIGRhdGEsIGNhbmNlbCApID0+IHtcblx0XHRcdHRoaXMuX2Nsb3NlRm9ybVZpZXcoKTtcblx0XHRcdGNhbmNlbCgpO1xuXHRcdH0gKTtcblxuXHRcdHJldHVybiBmb3JtVmlldztcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgdG9vbGJhciBUZW1wbGF0ZSBidXR0b24uIENsaWNraW5nIHRoaXMgYnV0dG9uIHdpbGwgc2hvd1xuXHQgKiBhIHtAbGluayAjX2JhbGxvb259IGF0dGFjaGVkIHRvIHRoZSBzZWxlY3Rpb24uXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfY3JlYXRlVG9vbGJhckxpbmtCdXR0b24oKSB7XG5cdFx0Y29uc3QgZWRpdG9yID0gdGhpcy5lZGl0b3I7XG5cdFx0Y29uc3QgdGVtcGxhdGVDb21tYW5kID0gZWRpdG9yLmNvbW1hbmRzLmdldCggJ3RlbXBsYXRlJyApO1xuXHRcdGNvbnN0IHQgPSBlZGl0b3IudDtcblxuXHRcdC8vIEhhbmRsZSB0aGUgYEN0cmwrS2Aga2V5c3Ryb2tlIGFuZCBzaG93IHRoZSBwYW5lbC5cblx0XHRlZGl0b3Iua2V5c3Ryb2tlcy5zZXQoIFRFTVBMQVRFX0tFWVNUUk9LRSwgKCBrZXlFdnREYXRhLCBjYW5jZWwgKSA9PiB7XG5cdFx0XHQvLyBQcmV2ZW50IGZvY3VzaW5nIHRoZSBzZWFyY2ggYmFyIGluIEZGLCBDaHJvbWUgYW5kIEVkZ2UuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vY2tlZGl0b3IvY2tlZGl0b3I1L2lzc3Vlcy80ODExLlxuXHRcdFx0Y2FuY2VsKCk7XG5cblx0XHRcdGlmICggdGVtcGxhdGVDb21tYW5kLmlzRW5hYmxlZCApIHtcblx0XHRcdFx0dGhpcy5fc2hvd1VJKCB0cnVlICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0ZWRpdG9yLnVpLmNvbXBvbmVudEZhY3RvcnkuYWRkKCAndGVtcGxhdGUnLCBsb2NhbGUgPT4ge1xuXHRcdFx0Y29uc3QgYnV0dG9uID0gbmV3IEJ1dHRvblZpZXcoIGxvY2FsZSApO1xuXG5cdFx0XHRidXR0b24uaXNFbmFibGVkID0gdHJ1ZTtcblx0XHRcdGJ1dHRvbi5sYWJlbCA9IHQoICdWYXIgRGVmaW5lJyApO1xuXHRcdFx0YnV0dG9uLmljb24gPSBUZW1sYXRlSWNvbjtcblx0XHRcdGJ1dHRvbi5rZXlzdHJva2UgPSBURU1QTEFURV9LRVlTVFJPS0U7XG5cdFx0XHRidXR0b24udG9vbHRpcCA9IHRydWU7XG5cdFx0XHRidXR0b24uaXNUb2dnbGVhYmxlID0gdHJ1ZTtcblxuXHRcdFx0Ly8gQmluZCBidXR0b24gdG8gdGhlIGNvbW1hbmQuXG5cdFx0XHRidXR0b24uYmluZCggJ2lzRW5hYmxlZCcgKS50byggdGVtcGxhdGVDb21tYW5kLCAnaXNFbmFibGVkJyApO1xuXHRcdFx0YnV0dG9uLmJpbmQoICdpc09uJyApLnRvKCB0ZW1wbGF0ZUNvbW1hbmQsICd2YWx1ZScsIHZhbHVlID0+ICEhdmFsdWUgKTtcblxuXHRcdFx0Ly8gU2hvdyB0aGUgcGFuZWwgb24gYnV0dG9uIGNsaWNrLlxuXHRcdFx0dGhpcy5saXN0ZW5UbyggYnV0dG9uLCAnZXhlY3V0ZScsICgpID0+IHRoaXMuX3Nob3dVSSggdHJ1ZSApICk7XG5cblx0XHRcdHJldHVybiBidXR0b247XG5cdFx0fSApO1xuXHRcdGVkaXRvci51aS5jb21wb25lbnRGYWN0b3J5LmFkZCggJ3RlbXBsYXRlLXNhdmUnLCBsb2NhbGUgPT4ge1xuXHRcdFx0Y29uc3QgYnV0dG9uID0gbmV3IEJ1dHRvblZpZXcoIGxvY2FsZSApO1xuXG5cdFx0XHRidXR0b24uaXNFbmFibGVkID0gdHJ1ZTtcblx0XHRcdGJ1dHRvbi5sYWJlbCA9IHQoICdTYXZlIFRlbXBsYXRlJyApO1xuXHRcdFx0YnV0dG9uLmljb24gPSBTYXZlVGVtcGxhdGU7XG5cdFx0XHRidXR0b24udG9vbHRpcCA9IHRydWU7XG5cdFx0XHRidXR0b24uaXNUb2dnbGVhYmxlID0gdHJ1ZTtcblxuXHRcdFx0Ly8gQmluZCBidXR0b24gdG8gdGhlIGNvbW1hbmQuXG5cdFx0XHRidXR0b24uYmluZCggJ2lzRW5hYmxlZCcgKS50byggdGVtcGxhdGVDb21tYW5kLCAnaXNFbmFibGVkJyApO1xuXHRcdFx0YnV0dG9uLmJpbmQoICdpc09uJyApLnRvKCB0ZW1wbGF0ZUNvbW1hbmQsICd2YWx1ZScsIHZhbHVlID0+ICEhdmFsdWUgKTtcblxuXHRcdFx0Ly8gU2hvdyB0aGUgcGFuZWwgb24gYnV0dG9uIGNsaWNrLlxuXHRcdFx0dGhpcy5saXN0ZW5UbyggYnV0dG9uLCAnZXhlY3V0ZScsICgpID0+IHRoaXMuX2FkZFNhdmVWaWV3KCApICk7XG5cblx0XHRcdHJldHVybiBidXR0b247XG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEF0dGFjaGVzIGFjdGlvbnMgdGhhdCBjb250cm9sIHdoZXRoZXIgdGhlIGJhbGxvb24gcGFuZWwgY29udGFpbmluZyB0aGVcblx0ICoge0BsaW5rICNmb3JtVmlld30gaXMgdmlzaWJsZSBvciBub3QuXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfZW5hYmxlVXNlckJhbGxvb25JbnRlcmFjdGlvbnMoKSB7XG5cdFx0Y29uc3Qgdmlld0RvY3VtZW50ID0gdGhpcy5lZGl0b3IuZWRpdGluZy52aWV3LmRvY3VtZW50O1xuXG5cdFx0Ly8gSGFuZGxlIGNsaWNrIG9uIHZpZXcgZG9jdW1lbnQgYW5kIHNob3cgcGFuZWwgd2hlbiBzZWxlY3Rpb24gaXMgcGxhY2VkIGluc2lkZSB0aGUgbGluayBlbGVtZW50LlxuXHRcdC8vIEtlZXAgcGFuZWwgb3BlbiB1bnRpbCBzZWxlY3Rpb24gd2lsbCBiZSBpbnNpZGUgdGhlIHNhbWUgbGluayBlbGVtZW50LlxuXHRcdHRoaXMubGlzdGVuVG8oIHZpZXdEb2N1bWVudCwgJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0Y29uc3QgcGFyZW50TGluayA9IHRoaXMuX2dldFNlbGVjdGVkTGlua0VsZW1lbnQoKTtcblxuXHRcdFx0aWYgKCBwYXJlbnRMaW5rICkge1xuXHRcdFx0XHQvLyBUaGVuIHNob3cgcGFuZWwgYnV0IGtlZXAgZm9jdXMgaW5zaWRlIGVkaXRvciBlZGl0YWJsZS5cblx0XHRcdFx0dGhpcy5fc2hvd1VJKCk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0Ly8gRm9jdXMgdGhlIGZvcm0gaWYgdGhlIGJhbGxvb24gaXMgdmlzaWJsZSBhbmQgdGhlIFRhYiBrZXkgaGFzIGJlZW4gcHJlc3NlZC5cblx0XHR0aGlzLmVkaXRvci5rZXlzdHJva2VzLnNldCggJ1RhYicsICggZGF0YSwgY2FuY2VsICkgPT4ge1xuXHRcdFx0aWYgKCB0aGlzLl9hcmVBY3Rpb25zVmlzaWJsZSAmJiAhdGhpcy5hY3Rpb25zVmlldy5mb2N1c1RyYWNrZXIuaXNGb2N1c2VkICkge1xuXHRcdFx0XHR0aGlzLmFjdGlvbnNWaWV3LmZvY3VzKCk7XG5cdFx0XHRcdGNhbmNlbCgpO1xuXHRcdFx0fVxuXHRcdH0sIHtcblx0XHRcdC8vIFVzZSB0aGUgaGlnaCBwcmlvcml0eSBiZWNhdXNlIHRoZSBsaW5rIFVJIG5hdmlnYXRpb24gaXMgbW9yZSBpbXBvcnRhbnRcblx0XHRcdC8vIHRoYW4gb3RoZXIgZmVhdHVyZSdzIGFjdGlvbnMsIGUuZy4gbGlzdCBpbmRlbnRhdGlvbi5cblx0XHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ja2VkaXRvci9ja2VkaXRvcjUtbGluay9pc3N1ZXMvMTQ2XG5cdFx0XHRwcmlvcml0eTogJ2hpZ2gnXG5cdFx0fSApO1xuXG5cdFx0Ly8gQ2xvc2UgdGhlIHBhbmVsIG9uIHRoZSBFc2Mga2V5IHByZXNzIHdoZW4gdGhlIGVkaXRhYmxlIGhhcyBmb2N1cyBhbmQgdGhlIGJhbGxvb24gaXMgdmlzaWJsZS5cblx0XHR0aGlzLmVkaXRvci5rZXlzdHJva2VzLnNldCggJ0VzYycsICggZGF0YSwgY2FuY2VsICkgPT4ge1xuXHRcdFx0aWYgKCB0aGlzLl9pc1VJVmlzaWJsZSApIHtcblx0XHRcdFx0dGhpcy5faGlkZVVJKCk7XG5cdFx0XHRcdGNhbmNlbCgpO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdC8vIENsb3NlIG9uIGNsaWNrIG91dHNpZGUgb2YgYmFsbG9vbiBwYW5lbCBlbGVtZW50LlxuXHRcdGNsaWNrT3V0c2lkZUhhbmRsZXIoIHtcblx0XHRcdGVtaXR0ZXI6IHRoaXMuZm9ybVZpZXcsXG5cdFx0XHRhY3RpdmF0b3I6ICgpID0+IHRoaXMuX2lzVUlJblBhbmVsLFxuXHRcdFx0Y29udGV4dEVsZW1lbnRzOiBbIHRoaXMuX2JhbGxvb24udmlldy5lbGVtZW50IF0sXG5cdFx0XHRjYWxsYmFjazogKCkgPT4gdGhpcy5faGlkZVVJKClcblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogQWRkcyB0aGUge0BsaW5rICNhY3Rpb25zVmlld30gdG8gdGhlIHtAbGluayAjX2JhbGxvb259LlxuXHQgKlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHRfYWRkQWN0aW9uc1ZpZXcoKSB7XG5cdFx0aWYgKCB0aGlzLl9hcmVBY3Rpb25zSW5QYW5lbCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLl9iYWxsb29uLmFkZCgge1xuXHRcdFx0dmlldzogdGhpcy5hY3Rpb25zVmlldyxcblx0XHRcdHBvc2l0aW9uOiB0aGlzLl9nZXRCYWxsb29uUG9zaXRpb25EYXRhKClcblx0XHR9ICk7XG5cdH1cblx0X2FkZFNhdmVWaWV3KCkge1xuXG5cdFx0Y29uc3QgcG9zaXRpb25zID0gQmFsbG9vblBhbmVsVmlldy5kZWZhdWx0UG9zaXRpb25zO1xuXHRcdGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvciggJy5kb2N1bWVudC1lZGl0b3InKTtcblx0XHRjb25zb2xlLmxvZyhwb3NpdGlvbnMubm9ydGhBcnJvd1NvdXRoKTtcblx0XHR0aGlzLl9wYW5lbC5jb250ZW50LmFkZCh0aGlzLnNhdmVWaWV3XG5cblxuXHRcdCk7XG5cdFx0dGhpcy5fcGFuZWwucmVuZGVyKCk7XG5cdFx0dGhpcy5fcGFuZWwucGluKCB7XG5cdFx0XHR0YXJnZXQ6IHRhcmdldCxcblx0XHRcdHBvc2l0aW9uczogW1xuXHRcdFx0XHRwb3NpdGlvbnMubm9ydGhBcnJvd1NvdXRoLFxuXHRcdFx0XVxuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBBZGRzIHRoZSB7QGxpbmsgI2Zvcm1WaWV3fSB0byB0aGUge0BsaW5rICNfYmFsbG9vbn0uXG5cdCAqXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICovXG5cdF9hZGRGb3JtVmlldygpIHtcblx0XHRpZiAoIHRoaXMuX2lzRm9ybUluUGFuZWwgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgZWRpdG9yID0gdGhpcy5lZGl0b3I7XG5cdFx0Y29uc3QgdGVtcGxhdGVDb21tYW5kID0gZWRpdG9yLmNvbW1hbmRzLmdldCggJ3RlbXBsYXRlJyApO1xuXG5cdFx0dGhpcy5mb3JtVmlldy5kaXNhYmxlQ3NzVHJhbnNpdGlvbnMoKTtcblxuXHRcdHRoaXMuX2JhbGxvb24uYWRkKCB7XG5cdFx0XHR2aWV3OiB0aGlzLmZvcm1WaWV3LFxuXHRcdFx0cG9zaXRpb246IHRoaXMuX2dldEJhbGxvb25Qb3NpdGlvbkRhdGEoKVxuXHRcdH0gKTtcblxuXHRcdC8vIFNlbGVjdCBpbnB1dCB3aGVuIGZvcm0gdmlldyBpcyBjdXJyZW50bHkgdmlzaWJsZS5cblx0XHRpZiAoIHRoaXMuX2JhbGxvb24udmlzaWJsZVZpZXcgPT09IHRoaXMuZm9ybVZpZXcgKSB7XG5cdFx0XHR0aGlzLmZvcm1WaWV3LmxhYmVsSW5wdXRWaWV3LmZpZWxkVmlldy5zZWxlY3QoKTtcblx0XHR9XG5cblx0XHR0aGlzLmZvcm1WaWV3LmVuYWJsZUNzc1RyYW5zaXRpb25zKCk7XG5cblx0XHQvLyBNYWtlIHN1cmUgdGhhdCBlYWNoIHRpbWUgdGhlIHBhbmVsIHNob3dzIHVwLCB0aGUgVVJMIGZpZWxkIHJlbWFpbnMgaW4gc3luYyB3aXRoIHRoZSB2YWx1ZSBvZlxuXHRcdC8vIHRoZSBjb21tYW5kLiBJZiB0aGUgdXNlciB0eXBlZCBpbiB0aGUgaW5wdXQsIHRoZW4gY2FuY2VsZWQgdGhlIGJhbGxvb24gKGB1cmxJbnB1dFZpZXcuZmllbGRWaWV3I3ZhbHVlYCBzdGF5c1xuXHRcdC8vIHVuYWx0ZXJlZCkgYW5kIHJlLW9wZW5lZCBpdCB3aXRob3V0IGNoYW5naW5nIHRoZSB2YWx1ZSBvZiB0aGUgbGluayBjb21tYW5kIChlLmcuIGJlY2F1c2UgdGhleVxuXHRcdC8vIGNsaWNrZWQgdGhlIHNhbWUgbGluayksIHRoZXkgd291bGQgc2VlIHRoZSBvbGQgdmFsdWUgaW5zdGVhZCBvZiB0aGUgYWN0dWFsIHZhbHVlIG9mIHRoZSBjb21tYW5kLlxuXHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ja2VkaXRvci9ja2VkaXRvcjUtbGluay9pc3N1ZXMvNzhcblx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vY2tlZGl0b3IvY2tlZGl0b3I1LWxpbmsvaXNzdWVzLzEyM1xuXHRcdHRoaXMuZm9ybVZpZXcubGFiZWxJbnB1dFZpZXcuZmllbGRWaWV3LmVsZW1lbnQudmFsdWUgPSB0ZW1wbGF0ZUNvbW1hbmQudmFsdWUgfHwgJyc7XG5cdH1cblxuXHQvKipcblx0ICogQ2xvc2VzIHRoZSBmb3JtIHZpZXcuIERlY2lkZXMgd2hldGhlciB0aGUgYmFsbG9vbiBzaG91bGQgYmUgaGlkZGVuIGNvbXBsZXRlbHkgb3IgaWYgdGhlIGFjdGlvbiB2aWV3IHNob3VsZCBiZSBzaG93bi4gVGhpcyBpc1xuXHQgKiBkZWNpZGVkIHVwb24gdGhlIGxpbmsgY29tbWFuZCB2YWx1ZSAod2hpY2ggaGFzIGEgdmFsdWUgaWYgdGhlIGRvY3VtZW50IHNlbGVjdGlvbiBpcyBpbiB0aGUgbGluaykuXG5cdCAqXG5cdCAqIEFkZGl0aW9uYWxseSwgaWYgYW55IHtAbGluayBtb2R1bGU6bGluay9saW5rfkxpbmtDb25maWcjZGVjb3JhdG9yc30gYXJlIGRlZmluZWQgaW4gdGhlIGVkaXRvciBjb25maWd1cmF0aW9uLCB0aGUgc3RhdGUgb2Zcblx0ICogc3dpdGNoIGJ1dHRvbnMgcmVzcG9uc2libGUgZm9yIG1hbnVhbCBkZWNvcmF0b3IgaGFuZGxpbmcgaXMgcmVzdG9yZWQuXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfY2xvc2VGb3JtVmlldygpIHtcblx0XHRjb25zdCB0ZW1wbGF0ZUNvbW1hbmQgPSB0aGlzLmVkaXRvci5jb21tYW5kcy5nZXQoICd0ZW1wbGF0ZScgKTtcblxuXHRcdC8vIFJlc3RvcmUgbWFudWFsIGRlY29yYXRvciBzdGF0ZXMgdG8gcmVwcmVzZW50IHRoZSBjdXJyZW50IG1vZGVsIHN0YXRlLiBUaGlzIGNhc2UgaXMgaW1wb3J0YW50IHRvIHJlc2V0IHRoZSBzd2l0Y2ggYnV0dG9uc1xuXHRcdC8vIHdoZW4gdGhlIHVzZXIgY2FuY2VscyB0aGUgZWRpdGluZyBmb3JtLlxuXHRcdHRlbXBsYXRlQ29tbWFuZC5yZXN0b3JlTWFudWFsRGVjb3JhdG9yU3RhdGVzKCk7XG5cblx0XHRpZiAoIHRlbXBsYXRlQ29tbWFuZC52YWx1ZSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0dGhpcy5fcmVtb3ZlRm9ybVZpZXcoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5faGlkZVVJKCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFJlbW92ZXMgdGhlIHtAbGluayAjZm9ybVZpZXd9IGZyb20gdGhlIHtAbGluayAjX2JhbGxvb259LlxuXHQgKlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHRfcmVtb3ZlRm9ybVZpZXcoKSB7XG5cdFx0aWYgKCB0aGlzLl9pc0Zvcm1JblBhbmVsICkge1xuXHRcdFx0Ly8gQmx1ciB0aGUgaW5wdXQgZWxlbWVudCBiZWZvcmUgcmVtb3ZpbmcgaXQgZnJvbSBET00gdG8gcHJldmVudCBpc3N1ZXMgaW4gc29tZSBicm93c2Vycy5cblx0XHRcdC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vY2tlZGl0b3IvY2tlZGl0b3I1L2lzc3Vlcy8xNTAxLlxuXHRcdFx0dGhpcy5mb3JtVmlldy5zYXZlQnV0dG9uVmlldy5mb2N1cygpO1xuXG5cdFx0XHR0aGlzLl9iYWxsb29uLnJlbW92ZSggdGhpcy5mb3JtVmlldyApO1xuXG5cdFx0XHQvLyBCZWNhdXNlIHRoZSBmb3JtIGhhcyBhbiBpbnB1dCB3aGljaCBoYXMgZm9jdXMsIHRoZSBmb2N1cyBtdXN0IGJlIGJyb3VnaHQgYmFja1xuXHRcdFx0Ly8gdG8gdGhlIGVkaXRvci4gT3RoZXJ3aXNlLCBpdCB3b3VsZCBiZSBsb3N0LlxuXHRcdFx0dGhpcy5lZGl0b3IuZWRpdGluZy52aWV3LmZvY3VzKCk7XG5cblx0XHRcdHRoaXMuX2hpZGVGYWtlVmlzdWFsU2VsZWN0aW9uKCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFNob3dzIHRoZSBjb3JyZWN0IFVJIHR5cGUuIEl0IGlzIGVpdGhlciB7QGxpbmsgI2Zvcm1WaWV3fSBvciB7QGxpbmsgI2FjdGlvbnNWaWV3fS5cblx0ICpcblx0ICogQHBhcmFtIHtCb29sZWFufSBmb3JjZVZpc2libGVcblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9zaG93VUkoIGZvcmNlVmlzaWJsZSA9IGZhbHNlICkge1xuXHRcdC8vIFdoZW4gdGhlcmUncyBubyBsaW5rIHVuZGVyIHRoZSBzZWxlY3Rpb24sIGdvIHN0cmFpZ2h0IHRvIHRoZSBlZGl0aW5nIFVJLlxuXHRcdGlmICggIXRoaXMuX2dldFNlbGVjdGVkTGlua0VsZW1lbnQoKSApIHtcblx0XHRcdC8vIFNob3cgdmlzdWFsIHNlbGVjdGlvbiBvbiBhIHRleHQgd2l0aG91dCBhIGxpbmsgd2hlbiB0aGUgY29udGV4dHVhbCBiYWxsb29uIGlzIGRpc3BsYXllZC5cblx0XHRcdC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vY2tlZGl0b3IvY2tlZGl0b3I1L2lzc3Vlcy80NzIxLlxuXHRcdFx0dGhpcy5fc2hvd0Zha2VWaXN1YWxTZWxlY3Rpb24oKTtcblxuXHRcdFx0dGhpcy5fYWRkQWN0aW9uc1ZpZXcoKTtcblxuXHRcdFx0Ly8gQmUgc3VyZSBwYW5lbCB3aXRoIGxpbmsgaXMgdmlzaWJsZS5cblx0XHRcdGlmICggZm9yY2VWaXNpYmxlICkge1xuXHRcdFx0XHR0aGlzLl9iYWxsb29uLnNob3dTdGFjayggJ21haW4nICk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX2FkZEZvcm1WaWV3KCk7XG5cdFx0fVxuXHRcdC8vIElmIHRoZXJlJ3MgYSBsaW5rIHVuZGVyIHRoZSBzZWxlY3Rpb24uLi5cblx0XHRlbHNlIHtcblx0XHRcdC8vIEdvIHRvIHRoZSBlZGl0aW5nIFVJIGlmIGFjdGlvbnMgYXJlIGFscmVhZHkgdmlzaWJsZS5cblx0XHRcdGlmICggdGhpcy5fYXJlQWN0aW9uc1Zpc2libGUgKSB7XG5cdFx0XHRcdHRoaXMuX2FkZEZvcm1WaWV3KCk7XG5cdFx0XHR9XG5cdFx0XHQvLyBPdGhlcndpc2UgZGlzcGxheSBqdXN0IHRoZSBhY3Rpb25zIFVJLlxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHRoaXMuX2FkZEFjdGlvbnNWaWV3KCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEJlIHN1cmUgcGFuZWwgd2l0aCBsaW5rIGlzIHZpc2libGUuXG5cdFx0XHRpZiAoIGZvcmNlVmlzaWJsZSApIHtcblx0XHRcdFx0dGhpcy5fYmFsbG9vbi5zaG93U3RhY2soICdtYWluJyApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEJlZ2luIHJlc3BvbmRpbmcgdG8gdWkjdXBkYXRlIG9uY2UgdGhlIFVJIGlzIGFkZGVkLlxuXHRcdHRoaXMuX3N0YXJ0VXBkYXRpbmdVSSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlbW92ZXMgdGhlIHtAbGluayAjZm9ybVZpZXd9IGZyb20gdGhlIHtAbGluayAjX2JhbGxvb259LlxuXHQgKlxuXHQgKiBTZWUge0BsaW5rICNfYWRkRm9ybVZpZXd9LCB7QGxpbmsgI19hZGRBY3Rpb25zVmlld30uXG5cdCAqXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICovXG5cdF9oaWRlVUkoKSB7XG5cdFx0aWYgKCAhdGhpcy5faXNVSUluUGFuZWwgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgZWRpdG9yID0gdGhpcy5lZGl0b3I7XG5cblx0XHR0aGlzLnN0b3BMaXN0ZW5pbmcoIGVkaXRvci51aSwgJ3VwZGF0ZScgKTtcblx0XHR0aGlzLnN0b3BMaXN0ZW5pbmcoIHRoaXMuX2JhbGxvb24sICdjaGFuZ2U6dmlzaWJsZVZpZXcnICk7XG5cblx0XHQvLyBNYWtlIHN1cmUgdGhlIGZvY3VzIGFsd2F5cyBnZXRzIGJhY2sgdG8gdGhlIGVkaXRhYmxlIF9iZWZvcmVfIHJlbW92aW5nIHRoZSBmb2N1c2VkIGZvcm0gdmlldy5cblx0XHQvLyBEb2luZyBvdGhlcndpc2UgY2F1c2VzIGlzc3VlcyBpbiBzb21lIGJyb3dzZXJzLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2NrZWRpdG9yL2NrZWRpdG9yNS1saW5rL2lzc3Vlcy8xOTMuXG5cdFx0ZWRpdG9yLmVkaXRpbmcudmlldy5mb2N1cygpO1xuXG5cdFx0Ly8gUmVtb3ZlIGZvcm0gZmlyc3QgYmVjYXVzZSBpdCdzIG9uIHRvcCBvZiB0aGUgc3RhY2suXG5cdFx0dGhpcy5fcmVtb3ZlRm9ybVZpZXcoKTtcblxuXHRcdC8vIFRoZW4gcmVtb3ZlIHRoZSBhY3Rpb25zIHZpZXcgYmVjYXVzZSBpdCdzIGJlbmVhdGggdGhlIGZvcm0uXG5cdFx0dGhpcy5fYmFsbG9vbi5yZW1vdmUoIHRoaXMuYWN0aW9uc1ZpZXcgKTtcblxuXHRcdHRoaXMuX2hpZGVGYWtlVmlzdWFsU2VsZWN0aW9uKCk7XG5cdH1cblxuXHQvKipcblx0ICogTWFrZXMgdGhlIFVJIHJlYWN0IHRvIHRoZSB7QGxpbmsgbW9kdWxlOmNvcmUvZWRpdG9yL2VkaXRvcnVpfkVkaXRvclVJI2V2ZW50OnVwZGF0ZX0gZXZlbnQgdG9cblx0ICogcmVwb3NpdGlvbiBpdHNlbGYgd2hlbiB0aGUgZWRpdG9yIFVJIHNob3VsZCBiZSByZWZyZXNoZWQuXG5cdCAqXG5cdCAqIFNlZToge0BsaW5rICNfaGlkZVVJfSB0byBsZWFybiB3aGVuIHRoZSBVSSBzdG9wcyByZWFjdGluZyB0byB0aGUgYHVwZGF0ZWAgZXZlbnQuXG5cdCAqXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICovXG5cdF9zdGFydFVwZGF0aW5nVUkoKSB7XG5cdFx0Y29uc3QgZWRpdG9yID0gdGhpcy5lZGl0b3I7XG5cdFx0Y29uc3Qgdmlld0RvY3VtZW50ID0gZWRpdG9yLmVkaXRpbmcudmlldy5kb2N1bWVudDtcblxuXHRcdGxldCBwcmV2U2VsZWN0ZWRMaW5rID0gdGhpcy5fZ2V0U2VsZWN0ZWRMaW5rRWxlbWVudCgpO1xuXHRcdGxldCBwcmV2U2VsZWN0aW9uUGFyZW50ID0gZ2V0U2VsZWN0aW9uUGFyZW50KCk7XG5cblx0XHRjb25zdCB1cGRhdGUgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBzZWxlY3RlZExpbmsgPSB0aGlzLl9nZXRTZWxlY3RlZExpbmtFbGVtZW50KCk7XG5cdFx0XHRjb25zdCBzZWxlY3Rpb25QYXJlbnQgPSBnZXRTZWxlY3Rpb25QYXJlbnQoKTtcblxuXHRcdFx0Ly8gSGlkZSB0aGUgcGFuZWwgaWY6XG5cdFx0XHQvL1xuXHRcdFx0Ly8gKiB0aGUgc2VsZWN0aW9uIHdlbnQgb3V0IG9mIHRoZSBFWElTVElORyBsaW5rIGVsZW1lbnQuIEUuZy4gdXNlciBtb3ZlZCB0aGUgY2FyZXQgb3V0XG5cdFx0XHQvLyAgIG9mIHRoZSBsaW5rLFxuXHRcdFx0Ly8gKiB0aGUgc2VsZWN0aW9uIHdlbnQgdG8gYSBkaWZmZXJlbnQgcGFyZW50IHdoZW4gY3JlYXRpbmcgYSBORVcgbGluay4gRS5nLiBzb21lb25lXG5cdFx0XHQvLyAgIGVsc2UgbW9kaWZpZWQgdGhlIGRvY3VtZW50LlxuXHRcdFx0Ly8gKiB0aGUgc2VsZWN0aW9uIGhhcyBleHBhbmRlZCAoZS5nLiBkaXNwbGF5aW5nIGxpbmsgYWN0aW9ucyB0aGVuIHByZXNzaW5nIFNISUZUK1JpZ2h0IGFycm93KS5cblx0XHRcdC8vXG5cdFx0XHQvLyBOb3RlOiAjX2dldFNlbGVjdGVkTGlua0VsZW1lbnQgd2lsbCByZXR1cm4gYSBsaW5rIGZvciBhIG5vbi1jb2xsYXBzZWQgc2VsZWN0aW9uIG9ubHlcblx0XHRcdC8vIHdoZW4gZnVsbHkgc2VsZWN0ZWQuXG5cdFx0XHRpZiAoICggcHJldlNlbGVjdGVkTGluayAmJiAhc2VsZWN0ZWRMaW5rICkgfHxcblx0XHRcdFx0KCAhcHJldlNlbGVjdGVkTGluayAmJiBzZWxlY3Rpb25QYXJlbnQgIT09IHByZXZTZWxlY3Rpb25QYXJlbnQgKSApIHtcblx0XHRcdFx0dGhpcy5faGlkZVVJKCk7XG5cdFx0XHR9XG5cdFx0XHQvLyBVcGRhdGUgdGhlIHBvc2l0aW9uIG9mIHRoZSBwYW5lbCB3aGVuOlxuXHRcdFx0Ly8gICogbGluayBwYW5lbCBpcyBpbiB0aGUgdmlzaWJsZSBzdGFja1xuXHRcdFx0Ly8gICogdGhlIHNlbGVjdGlvbiByZW1haW5zIGluIHRoZSBvcmlnaW5hbCBsaW5rIGVsZW1lbnQsXG5cdFx0XHQvLyAgKiB0aGVyZSB3YXMgbm8gbGluayBlbGVtZW50IGluIHRoZSBmaXJzdCBwbGFjZSwgaS5lLiBjcmVhdGluZyBhIG5ldyBsaW5rXG5cdFx0XHRlbHNlIGlmICggdGhpcy5faXNVSVZpc2libGUgKSB7XG5cdFx0XHRcdC8vIElmIHN0aWxsIGluIGEgbGluayBlbGVtZW50LCBzaW1wbHkgdXBkYXRlIHRoZSBwb3NpdGlvbiBvZiB0aGUgYmFsbG9vbi5cblx0XHRcdFx0Ly8gSWYgdGhlcmUgd2FzIG5vIGxpbmsgKGUuZy4gaW5zZXJ0aW5nIG9uZSksIHRoZSBiYWxsb29uIG11c3QgYmUgbW92ZWRcblx0XHRcdFx0Ly8gdG8gdGhlIG5ldyBwb3NpdGlvbiBpbiB0aGUgZWRpdGluZyB2aWV3IChhIG5ldyBuYXRpdmUgRE9NIHJhbmdlKS5cblx0XHRcdFx0dGhpcy5fYmFsbG9vbi51cGRhdGVQb3NpdGlvbiggdGhpcy5fZ2V0QmFsbG9vblBvc2l0aW9uRGF0YSgpICk7XG5cdFx0XHR9XG5cblx0XHRcdHByZXZTZWxlY3RlZExpbmsgPSBzZWxlY3RlZExpbms7XG5cdFx0XHRwcmV2U2VsZWN0aW9uUGFyZW50ID0gc2VsZWN0aW9uUGFyZW50O1xuXHRcdH07XG5cblx0XHRmdW5jdGlvbiBnZXRTZWxlY3Rpb25QYXJlbnQoKSB7XG5cdFx0XHRyZXR1cm4gdmlld0RvY3VtZW50LnNlbGVjdGlvbi5mb2N1cy5nZXRBbmNlc3RvcnMoKVxuXHRcdFx0XHQucmV2ZXJzZSgpXG5cdFx0XHRcdC5maW5kKCBub2RlID0+IG5vZGUuaXMoICdlbGVtZW50JyApICk7XG5cdFx0fVxuXG5cdFx0dGhpcy5saXN0ZW5UbyggZWRpdG9yLnVpLCAndXBkYXRlJywgdXBkYXRlICk7XG5cdFx0dGhpcy5saXN0ZW5UbyggdGhpcy5fYmFsbG9vbiwgJ2NoYW5nZTp2aXNpYmxlVmlldycsIHVwZGF0ZSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgYHRydWVgIHdoZW4ge0BsaW5rICNmb3JtVmlld30gaXMgaW4gdGhlIHtAbGluayAjX2JhbGxvb259LlxuXHQgKlxuXHQgKiBAcmVhZG9ubHlcblx0ICogQHByb3RlY3RlZFxuXHQgKiBAdHlwZSB7Qm9vbGVhbn1cblx0ICovXG5cdGdldCBfaXNGb3JtSW5QYW5lbCgpIHtcblx0XHRyZXR1cm4gdGhpcy5fYmFsbG9vbi5oYXNWaWV3KCB0aGlzLmZvcm1WaWV3ICk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBgdHJ1ZWAgd2hlbiB7QGxpbmsgI2FjdGlvbnNWaWV3fSBpcyBpbiB0aGUge0BsaW5rICNfYmFsbG9vbn0uXG5cdCAqXG5cdCAqIEByZWFkb25seVxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEB0eXBlIHtCb29sZWFufVxuXHQgKi9cblx0Z2V0IF9hcmVBY3Rpb25zSW5QYW5lbCgpIHtcblx0XHRyZXR1cm4gdGhpcy5fYmFsbG9vbi5oYXNWaWV3KCB0aGlzLmFjdGlvbnNWaWV3ICk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBgdHJ1ZWAgd2hlbiB7QGxpbmsgI2FjdGlvbnNWaWV3fSBpcyBpbiB0aGUge0BsaW5rICNfYmFsbG9vbn0gYW5kIGl0IGlzXG5cdCAqIGN1cnJlbnRseSB2aXNpYmxlLlxuXHQgKlxuXHQgKiBAcmVhZG9ubHlcblx0ICogQHByb3RlY3RlZFxuXHQgKiBAdHlwZSB7Qm9vbGVhbn1cblx0ICovXG5cdGdldCBfYXJlQWN0aW9uc1Zpc2libGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2JhbGxvb24udmlzaWJsZVZpZXcgPT09IHRoaXMuYWN0aW9uc1ZpZXc7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBgdHJ1ZWAgd2hlbiB7QGxpbmsgI2FjdGlvbnNWaWV3fSBvciB7QGxpbmsgI2Zvcm1WaWV3fSBpcyBpbiB0aGUge0BsaW5rICNfYmFsbG9vbn0uXG5cdCAqXG5cdCAqIEByZWFkb25seVxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEB0eXBlIHtCb29sZWFufVxuXHQgKi9cblx0Z2V0IF9pc1VJSW5QYW5lbCgpIHtcblx0XHRyZXR1cm4gdGhpcy5faXNGb3JtSW5QYW5lbCB8fCB0aGlzLl9hcmVBY3Rpb25zSW5QYW5lbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIGB0cnVlYCB3aGVuIHtAbGluayAjYWN0aW9uc1ZpZXd9IG9yIHtAbGluayAjZm9ybVZpZXd9IGlzIGluIHRoZSB7QGxpbmsgI19iYWxsb29ufSBhbmQgaXQgaXNcblx0ICogY3VycmVudGx5IHZpc2libGUuXG5cdCAqXG5cdCAqIEByZWFkb25seVxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEB0eXBlIHtCb29sZWFufVxuXHQgKi9cblx0Z2V0IF9pc1VJVmlzaWJsZSgpIHtcblx0XHRjb25zdCB2aXNpYmxlVmlldyA9IHRoaXMuX2JhbGxvb24udmlzaWJsZVZpZXc7XG5cblx0XHRyZXR1cm4gdmlzaWJsZVZpZXcgPT0gdGhpcy5mb3JtVmlldyB8fCB0aGlzLl9hcmVBY3Rpb25zVmlzaWJsZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHBvc2l0aW9uaW5nIG9wdGlvbnMgZm9yIHRoZSB7QGxpbmsgI19iYWxsb29ufS4gVGhleSBjb250cm9sIHRoZSB3YXkgdGhlIGJhbGxvb24gaXMgYXR0YWNoZWRcblx0ICogdG8gdGhlIHRhcmdldCBlbGVtZW50IG9yIHNlbGVjdGlvbi5cblx0ICpcblx0ICogSWYgdGhlIHNlbGVjdGlvbiBpcyBjb2xsYXBzZWQgYW5kIGluc2lkZSBhIGxpbmsgZWxlbWVudCwgdGhlIHBhbmVsIHdpbGwgYmUgYXR0YWNoZWQgdG8gdGhlXG5cdCAqIGVudGlyZSBsaW5rIGVsZW1lbnQuIE90aGVyd2lzZSwgaXQgd2lsbCBiZSBhdHRhY2hlZCB0byB0aGUgc2VsZWN0aW9uLlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcmV0dXJucyB7bW9kdWxlOnV0aWxzL2RvbS9wb3NpdGlvbn5PcHRpb25zfVxuXHQgKi9cblx0X2dldEJhbGxvb25Qb3NpdGlvbkRhdGEoKSB7XG5cdFx0Y29uc3QgdmlldyA9IHRoaXMuZWRpdG9yLmVkaXRpbmcudmlldztcblx0XHRjb25zdCBtb2RlbCA9IHRoaXMuZWRpdG9yLm1vZGVsO1xuXHRcdGNvbnN0IHZpZXdEb2N1bWVudCA9IHZpZXcuZG9jdW1lbnQ7XG5cdFx0bGV0IHRhcmdldCA9IG51bGw7XG5cblx0XHRpZiAoIG1vZGVsLm1hcmtlcnMuaGFzKCBWSVNVQUxfU0VMRUNUSU9OX01BUktFUl9OQU1FICkgKSB7XG5cdFx0XHQvLyBUaGVyZSBhcmUgY2FzZXMgd2hlbiB3ZSBoaWdobGlnaHQgc2VsZWN0aW9uIHVzaW5nIGEgbWFya2VyICgjNzcwNSwgIzQ3MjEpLlxuXHRcdFx0Y29uc3QgbWFya2VyVmlld0VsZW1lbnRzID0gQXJyYXkuZnJvbSggdGhpcy5lZGl0b3IuZWRpdGluZy5tYXBwZXIubWFya2VyTmFtZVRvRWxlbWVudHMoIFZJU1VBTF9TRUxFQ1RJT05fTUFSS0VSX05BTUUgKSApO1xuXHRcdFx0Y29uc3QgbmV3UmFuZ2UgPSB2aWV3LmNyZWF0ZVJhbmdlKFxuXHRcdFx0XHR2aWV3LmNyZWF0ZVBvc2l0aW9uQmVmb3JlKCBtYXJrZXJWaWV3RWxlbWVudHNbIDAgXSApLFxuXHRcdFx0XHR2aWV3LmNyZWF0ZVBvc2l0aW9uQWZ0ZXIoIG1hcmtlclZpZXdFbGVtZW50c1sgbWFya2VyVmlld0VsZW1lbnRzLmxlbmd0aCAtIDEgXSApXG5cdFx0XHQpO1xuXG5cdFx0XHR0YXJnZXQgPSB2aWV3LmRvbUNvbnZlcnRlci52aWV3UmFuZ2VUb0RvbSggbmV3UmFuZ2UgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgdGFyZ2V0TGluayA9IHRoaXMuX2dldFNlbGVjdGVkTGlua0VsZW1lbnQoKTtcblx0XHRcdGNvbnN0IHJhbmdlID0gdmlld0RvY3VtZW50LnNlbGVjdGlvbi5nZXRGaXJzdFJhbmdlKCk7XG5cblx0XHRcdHRhcmdldCA9IHRhcmdldExpbmsgP1xuXHRcdFx0XHQvLyBXaGVuIHNlbGVjdGlvbiBpcyBpbnNpZGUgbGluayBlbGVtZW50LCB0aGVuIGF0dGFjaCBwYW5lbCB0byB0aGlzIGVsZW1lbnQuXG5cdFx0XHRcdHZpZXcuZG9tQ29udmVydGVyLm1hcFZpZXdUb0RvbSggdGFyZ2V0TGluayApIDpcblx0XHRcdFx0Ly8gT3RoZXJ3aXNlIGF0dGFjaCBwYW5lbCB0byB0aGUgc2VsZWN0aW9uLlxuXHRcdFx0XHR2aWV3LmRvbUNvbnZlcnRlci52aWV3UmFuZ2VUb0RvbSggcmFuZ2UgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4geyB0YXJnZXQgfTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBsaW5rIHtAbGluayBtb2R1bGU6ZW5naW5lL3ZpZXcvYXR0cmlidXRlZWxlbWVudH5BdHRyaWJ1dGVFbGVtZW50fSB1bmRlclxuXHQgKiB0aGUge0BsaW5rIG1vZHVsZTplbmdpbmUvdmlldy9kb2N1bWVudH5Eb2N1bWVudCBlZGl0aW5nIHZpZXcnc30gc2VsZWN0aW9uIG9yIGBudWxsYFxuXHQgKiBpZiB0aGVyZSBpcyBub25lLlxuXHQgKlxuXHQgKiAqKk5vdGUqKjogRm9yIGEgbm9u4oCTY29sbGFwc2VkIHNlbGVjdGlvbiwgdGhlIGxpbmsgZWxlbWVudCBpcyBvbmx5IHJldHVybmVkIHdoZW4gKipmdWxseSoqXG5cdCAqIHNlbGVjdGVkIGFuZCB0aGUgKipvbmx5KiogZWxlbWVudCB3aXRoaW4gdGhlIHNlbGVjdGlvbiBib3VuZGFyaWVzLlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcmV0dXJucyB7bW9kdWxlOmVuZ2luZS92aWV3L2F0dHJpYnV0ZWVsZW1lbnR+QXR0cmlidXRlRWxlbWVudHxudWxsfVxuXHQgKi9cblx0X2dldFNlbGVjdGVkTGlua0VsZW1lbnQoKSB7XG5cdFx0Y29uc3QgdmlldyA9IHRoaXMuZWRpdG9yLmVkaXRpbmcudmlldztcblx0XHRjb25zdCBzZWxlY3Rpb24gPSB2aWV3LmRvY3VtZW50LnNlbGVjdGlvbjtcblxuXHRcdGlmICggc2VsZWN0aW9uLmlzQ29sbGFwc2VkICkge1xuXHRcdFx0cmV0dXJuIGZpbmRMaW5rRWxlbWVudEFuY2VzdG9yKCBzZWxlY3Rpb24uZ2V0Rmlyc3RQb3NpdGlvbigpICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIFRoZSByYW5nZSBmb3IgZnVsbHkgc2VsZWN0ZWQgbGluayBpcyB1c3VhbGx5IGFuY2hvcmVkIGluIGFkamFjZW50IHRleHQgbm9kZXMuXG5cdFx0XHQvLyBUcmltIGl0IHRvIGdldCBjbG9zZXIgdG8gdGhlIGFjdHVhbCBsaW5rIGVsZW1lbnQuXG5cdFx0XHRjb25zdCByYW5nZSA9IHNlbGVjdGlvbi5nZXRGaXJzdFJhbmdlKCkuZ2V0VHJpbW1lZCgpO1xuXHRcdFx0Y29uc3Qgc3RhcnRMaW5rID0gZmluZExpbmtFbGVtZW50QW5jZXN0b3IoIHJhbmdlLnN0YXJ0ICk7XG5cdFx0XHRjb25zdCBlbmRMaW5rID0gZmluZExpbmtFbGVtZW50QW5jZXN0b3IoIHJhbmdlLmVuZCApO1xuXG5cdFx0XHRpZiAoICFzdGFydExpbmsgfHwgc3RhcnRMaW5rICE9IGVuZExpbmsgKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDaGVjayBpZiB0aGUgbGluayBlbGVtZW50IGlzIGZ1bGx5IHNlbGVjdGVkLlxuXHRcdFx0aWYgKCB2aWV3LmNyZWF0ZVJhbmdlSW4oIHN0YXJ0TGluayApLmdldFRyaW1tZWQoKS5pc0VxdWFsKCByYW5nZSApICkge1xuXHRcdFx0XHRyZXR1cm4gc3RhcnRMaW5rO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIERpc3BsYXlzIGEgZmFrZSB2aXN1YWwgc2VsZWN0aW9uIHdoZW4gdGhlIGNvbnRleHR1YWwgYmFsbG9vbiBpcyBkaXNwbGF5ZWQuXG5cdCAqXG5cdCAqIFRoaXMgYWRkcyBhICdsaW5rLXVpJyBtYXJrZXIgaW50byB0aGUgZG9jdW1lbnQgdGhhdCBpcyByZW5kZXJlZCBhcyBhIGhpZ2hsaWdodCBvbiBzZWxlY3RlZCB0ZXh0IGZyYWdtZW50LlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X3Nob3dGYWtlVmlzdWFsU2VsZWN0aW9uKCkge1xuXHRcdGNvbnN0IG1vZGVsID0gdGhpcy5lZGl0b3IubW9kZWw7XG5cblx0XHRtb2RlbC5jaGFuZ2UoIHdyaXRlciA9PiB7XG5cdFx0XHRjb25zdCByYW5nZSA9IG1vZGVsLmRvY3VtZW50LnNlbGVjdGlvbi5nZXRGaXJzdFJhbmdlKCk7XG5cblx0XHRcdGlmICggbW9kZWwubWFya2Vycy5oYXMoIFZJU1VBTF9TRUxFQ1RJT05fTUFSS0VSX05BTUUgKSApIHtcblx0XHRcdFx0d3JpdGVyLnVwZGF0ZU1hcmtlciggVklTVUFMX1NFTEVDVElPTl9NQVJLRVJfTkFNRSwgeyByYW5nZSB9ICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoIHJhbmdlLnN0YXJ0LmlzQXRFbmQgKSB7XG5cdFx0XHRcdFx0Y29uc3Qgc3RhcnRQb3NpdGlvbiA9IHJhbmdlLnN0YXJ0LmdldExhc3RNYXRjaGluZ1Bvc2l0aW9uKFxuXHRcdFx0XHRcdFx0KCB7IGl0ZW0gfSApID0+ICFtb2RlbC5zY2hlbWEuaXNDb250ZW50KCBpdGVtICksXG5cdFx0XHRcdFx0XHR7IGJvdW5kYXJpZXM6IHJhbmdlIH1cblx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0d3JpdGVyLmFkZE1hcmtlciggVklTVUFMX1NFTEVDVElPTl9NQVJLRVJfTkFNRSwge1xuXHRcdFx0XHRcdFx0dXNpbmdPcGVyYXRpb246IGZhbHNlLFxuXHRcdFx0XHRcdFx0YWZmZWN0c0RhdGE6IGZhbHNlLFxuXHRcdFx0XHRcdFx0cmFuZ2U6IHdyaXRlci5jcmVhdGVSYW5nZSggc3RhcnRQb3NpdGlvbiwgcmFuZ2UuZW5kIClcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0d3JpdGVyLmFkZE1hcmtlciggVklTVUFMX1NFTEVDVElPTl9NQVJLRVJfTkFNRSwge1xuXHRcdFx0XHRcdFx0dXNpbmdPcGVyYXRpb246IGZhbHNlLFxuXHRcdFx0XHRcdFx0YWZmZWN0c0RhdGE6IGZhbHNlLFxuXHRcdFx0XHRcdFx0cmFuZ2Vcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogSGlkZXMgdGhlIGZha2UgdmlzdWFsIHNlbGVjdGlvbiBjcmVhdGVkIGluIHtAbGluayAjX3Nob3dGYWtlVmlzdWFsU2VsZWN0aW9ufS5cblx0ICpcblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9oaWRlRmFrZVZpc3VhbFNlbGVjdGlvbigpIHtcblx0XHRjb25zdCBtb2RlbCA9IHRoaXMuZWRpdG9yLm1vZGVsO1xuXG5cdFx0aWYgKCBtb2RlbC5tYXJrZXJzLmhhcyggVklTVUFMX1NFTEVDVElPTl9NQVJLRVJfTkFNRSApICkge1xuXHRcdFx0bW9kZWwuY2hhbmdlKCB3cml0ZXIgPT4ge1xuXHRcdFx0XHR3cml0ZXIucmVtb3ZlTWFya2VyKCBWSVNVQUxfU0VMRUNUSU9OX01BUktFUl9OQU1FICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9XG59XG5cbi8vIFJldHVybnMgYSBsaW5rIGVsZW1lbnQgaWYgdGhlcmUncyBvbmUgYW1vbmcgdGhlIGFuY2VzdG9ycyBvZiB0aGUgcHJvdmlkZWQgYFBvc2l0aW9uYC5cbi8vXG4vLyBAcHJpdmF0ZVxuLy8gQHBhcmFtIHttb2R1bGU6ZW5naW5lL3ZpZXcvcG9zaXRpb25+UG9zaXRpb259IFZpZXcgcG9zaXRpb24gdG8gYW5hbHl6ZS5cbi8vIEByZXR1cm5zIHttb2R1bGU6ZW5naW5lL3ZpZXcvYXR0cmlidXRlZWxlbWVudH5BdHRyaWJ1dGVFbGVtZW50fG51bGx9IFRlbXBsYXRlIGVsZW1lbnQgYXQgdGhlIHBvc2l0aW9uIG9yIG51bGwuXG5mdW5jdGlvbiBmaW5kTGlua0VsZW1lbnRBbmNlc3RvciggcG9zaXRpb24gKSB7XG5cdHJldHVybiBwb3NpdGlvbi5nZXRBbmNlc3RvcnMoKS5maW5kKCBhbmNlc3RvciA9PiBpc0xpbmtFbGVtZW50KCBhbmNlc3RvciApICk7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlIENvcHlyaWdodCAoYykgMjAwMy0yMDIxLCBDS1NvdXJjZSAtIEZyZWRlcmljbyBLbmFiYmVuLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogRm9yIGxpY2Vuc2luZywgc2VlIExJQ0VOU0UubWQgb3IgaHR0cHM6Ly9ja2VkaXRvci5jb20vbGVnYWwvY2tlZGl0b3Itb3NzLWxpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGluay9saW5rXG4gKi9cblxuaW1wb3J0IFBsdWdpbiBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWNvcmUvc3JjL3BsdWdpbic7XG5pbXBvcnQgVGVtcGxhdGVFZGl0aW5nIGZyb20gJy4vdGVtcGxhdGUtZWRpdGluZyc7XG5pbXBvcnQgVGVtcGxhdGVVaSBmcm9tICcuL3RlbXBsYXRlLXVpJztcblxuLyoqXG4gKiBUaGUgbGluayBwbHVnaW4uXG4gKlxuICogVGhpcyBpcyBhIFwiZ2x1ZVwiIHBsdWdpbiB0aGF0IGxvYWRzIHRoZSB7QGxpbmsgbW9kdWxlOmxpbmsvbGlua2VkaXRpbmd+TGlua0VkaXRpbmcgbGluayBlZGl0aW5nIGZlYXR1cmV9XG4gKiBhbmQge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt1aX5UZW1wbGF0ZVVpIGxpbmsgVUkgZmVhdHVyZX0uXG4gKlxuICogQGV4dGVuZHMgbW9kdWxlOmNvcmUvcGx1Z2luflBsdWdpblxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZW1wbGF0ZSBleHRlbmRzIFBsdWdpbiB7XG5cdC8qKlxuXHQgKiBAaW5oZXJpdERvY1xuXHQgKi9cblx0c3RhdGljIGdldCByZXF1aXJlcygpIHtcblx0XHRyZXR1cm4gWyBUZW1wbGF0ZUVkaXRpbmcsIFRlbXBsYXRlVWkgXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5oZXJpdERvY1xuXHQgKi9cblx0c3RhdGljIGdldCBwbHVnaW5OYW1lKCkge1xuXHRcdHJldHVybiAnVGV4dFRlbXBsYXRpbmcnO1xuXHR9XG59XG5cbi8qKlxuICogVGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIHtAbGluayBtb2R1bGU6bGluay9saW5rfkxpbmt9IGZlYXR1cmUuXG4gKlxuICogUmVhZCBtb3JlIGluIHtAbGluayBtb2R1bGU6bGluay9saW5rfkxpbmtDb25maWd9LlxuICpcbiAqIEBtZW1iZXIge21vZHVsZTpsaW5rL2xpbmt+TGlua0NvbmZpZ30gbW9kdWxlOmNvcmUvZWRpdG9yL2VkaXRvcmNvbmZpZ35FZGl0b3JDb25maWcjbGlua1xuICovXG5cbi8qKlxuICogVGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIHtAbGluayBtb2R1bGU6bGluay9saW5rfkxpbmsgbGluayBmZWF0dXJlfS5cbiAqXG4gKlx0XHRDbGFzc2ljRWRpdG9yXG4gKlx0XHRcdC5jcmVhdGUoIGVkaXRvckVsZW1lbnQsIHtcbiAqIFx0XHRcdFx0bGluazogIC4uLiAvLyBUZW1wbGF0ZSBmZWF0dXJlIGNvbmZpZ3VyYXRpb24uXG4gKlx0XHRcdH0gKVxuICpcdFx0XHQudGhlbiggLi4uIClcbiAqXHRcdFx0LmNhdGNoKCAuLi4gKTtcbiAqXG4gKiBTZWUge0BsaW5rIG1vZHVsZTpjb3JlL2VkaXRvci9lZGl0b3Jjb25maWd+RWRpdG9yQ29uZmlnIGFsbCBlZGl0b3Igb3B0aW9uc30uXG4gKiBAaW50ZXJmYWNlIExpbmtDb25maWdcbiAqL1xuXG4vKipcbiAqIFdoZW4gc2V0LCB0aGUgZWRpdG9yIHdpbGwgYWRkIHRoZSBnaXZlbiBwcm90b2NvbCB0byB0aGUgbGluayB3aGVuIHRoZSB1c2VyIGNyZWF0ZXMgYSBsaW5rIHdpdGhvdXQgb25lLlxuICogRm9yIGV4YW1wbGUsIHdoZW4gdGhlIHVzZXIgaXMgY3JlYXRpbmcgYSBsaW5rIGFuZCB0eXBlcyBgY2tlZGl0b3IuY29tYCBpbiB0aGUgbGluayBmb3JtIGlucHV0LCBkdXJpbmcgbGluayBzdWJtaXNzaW9uXG4gKiB0aGUgZWRpdG9yIHdpbGwgYXV0b21hdGljYWxseSBhZGQgdGhlIGBodHRwOi8vYCBwcm90b2NvbCwgc28gdGhlIGxpbmsgd2lsbCBsb29rIGFzIGZvbGxvd3M6IGBodHRwOi8vY2tlZGl0b3IuY29tYC5cbiAqXG4gKiBUaGUgZmVhdHVyZSBhbHNvIHByb3ZpZGVzIGVtYWlsIGFkZHJlc3MgYXV0by1kZXRlY3Rpb24uIFdoZW4geW91IHN1Ym1pdCBgaGVsbG9AZXhhbXBsZS5jb21gLFxuICogdGhlIHBsdWdpbiB3aWxsIGF1dG9tYXRpY2FsbHkgY2hhbmdlIGl0IHRvIGBtYWlsdG86aGVsbG9AZXhhbXBsZS5jb21gLlxuICpcbiAqIFx0XHRDbGFzc2ljRWRpdG9yXG4gKlx0XHRcdC5jcmVhdGUoIGVkaXRvckVsZW1lbnQsIHtcbiAqIFx0XHRcdFx0bGluazoge1xuICogXHRcdFx0XHRcdGRlZmF1bHRQcm90b2NvbDogJ2h0dHA6Ly8nXG4gKiBcdFx0XHRcdH1cbiAqXHRcdFx0fSApXG4gKlx0XHRcdC50aGVuKCAuLi4gKVxuICpcdFx0XHQuY2F0Y2goIC4uLiApO1xuICpcbiAqICoqTk9URToqKiBJZiBubyBjb25maWd1cmF0aW9uIGlzIHByb3ZpZGVkLCB0aGUgZWRpdG9yIHdpbGwgbm90IGF1dG8tZml4IHRoZSBsaW5rcy5cbiAqXG4gKiBAbWVtYmVyIHtTdHJpbmd9IG1vZHVsZTpsaW5rL2xpbmt+TGlua0NvbmZpZyNkZWZhdWx0UHJvdG9jb2xcbiAqL1xuXG4vKipcbiAqIFdoZW4gc2V0IHRvIGB0cnVlYCwgdGhlIGB0YXJnZXQ9XCJibGFua1wiYCBhbmQgYHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcImAgYXR0cmlidXRlcyBhcmUgYXV0b21hdGljYWxseSBhZGRlZCB0byBhbGwgZXh0ZXJuYWwgbGlua3NcbiAqIGluIHRoZSBlZGl0b3IuIFwiRXh0ZXJuYWwgbGlua3NcIiBhcmUgYWxsIGxpbmtzIGluIHRoZSBlZGl0b3IgY29udGVudCBzdGFydGluZyB3aXRoIGBodHRwYCwgYGh0dHBzYCwgb3IgYC8vYC5cbiAqXG4gKlx0XHRDbGFzc2ljRWRpdG9yXG4gKlx0XHRcdC5jcmVhdGUoIGVkaXRvckVsZW1lbnQsIHtcbiAqXHRcdFx0XHRsaW5rOiB7XG4gKlx0XHRcdFx0XHRhZGRUYXJnZXRUb0V4dGVybmFsTGlua3M6IHRydWVcbiAqXHRcdFx0XHR9XG4gKlx0XHRcdH0gKVxuICpcdFx0XHQudGhlbiggLi4uIClcbiAqXHRcdFx0LmNhdGNoKCAuLi4gKTtcbiAqXG4gKiBJbnRlcm5hbGx5LCB0aGlzIG9wdGlvbiBhY3RpdmF0ZXMgYSBwcmVkZWZpbmVkIHtAbGluayBtb2R1bGU6bGluay9saW5rfkxpbmtDb25maWcjZGVjb3JhdG9ycyBhdXRvbWF0aWMgbGluayBkZWNvcmF0b3J9XG4gKiB0aGF0IGV4dGVuZHMgYWxsIGV4dGVybmFsIGxpbmtzIHdpdGggdGhlIGB0YXJnZXRgIGFuZCBgcmVsYCBhdHRyaWJ1dGVzLlxuICpcbiAqICoqTm90ZSoqOiBUbyBjb250cm9sIHRoZSBgdGFyZ2V0YCBhbmQgYHJlbGAgYXR0cmlidXRlcyBvZiBzcGVjaWZpYyBsaW5rcyBpbiB0aGUgZWRpdGVkIGNvbnRlbnQsIGEgZGVkaWNhdGVkXG4gKiB7QGxpbmsgbW9kdWxlOmxpbmsvbGlua35MaW5rRGVjb3JhdG9yTWFudWFsRGVmaW5pdGlvbiBtYW51YWx9IGRlY29yYXRvciBtdXN0IGJlIGRlZmluZWQgaW4gdGhlXG4gKiB7QGxpbmsgbW9kdWxlOmxpbmsvbGlua35MaW5rQ29uZmlnI2RlY29yYXRvcnMgYGNvbmZpZy5saW5rLmRlY29yYXRvcnNgfSBhcnJheS4gSW4gc3VjaCBzY2VuYXJpbyxcbiAqIHRoZSBgY29uZmlnLmxpbmsuYWRkVGFyZ2V0VG9FeHRlcm5hbExpbmtzYCBvcHRpb24gc2hvdWxkIHJlbWFpbiBgdW5kZWZpbmVkYCBvciBgZmFsc2VgIHRvIG5vdCBpbnRlcmZlcmUgd2l0aCB0aGUgbWFudWFsIGRlY29yYXRvci5cbiAqXG4gKiBJdCBpcyBwb3NzaWJsZSB0byBhZGQgb3RoZXIge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt+TGlua0RlY29yYXRvckF1dG9tYXRpY0RlZmluaXRpb24gYXV0b21hdGljfVxuICogb3Ige0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt+TGlua0RlY29yYXRvck1hbnVhbERlZmluaXRpb24gbWFudWFsfSBsaW5rIGRlY29yYXRvcnMgd2hlbiB0aGlzIG9wdGlvbiBpcyBhY3RpdmUuXG4gKlxuICogTW9yZSBpbmZvcm1hdGlvbiBhYm91dCBkZWNvcmF0b3JzIGNhbiBiZSBmb3VuZCBpbiB0aGUge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt+TGlua0NvbmZpZyNkZWNvcmF0b3JzIGRlY29yYXRvcnMgY29uZmlndXJhdGlvbn1cbiAqIHJlZmVyZW5jZS5cbiAqXG4gKiBAZGVmYXVsdCBmYWxzZVxuICogQG1lbWJlciB7Qm9vbGVhbn0gbW9kdWxlOmxpbmsvbGlua35MaW5rQ29uZmlnI2FkZFRhcmdldFRvRXh0ZXJuYWxMaW5rc1xuICovXG5cbi8qKlxuICogRGVjb3JhdG9ycyBwcm92aWRlIGFuIGVhc3kgd2F5IHRvIGNvbmZpZ3VyZSBhbmQgbWFuYWdlIGFkZGl0aW9uYWwgbGluayBhdHRyaWJ1dGVzIGluIHRoZSBlZGl0b3IgY29udGVudC4gVGhlcmUgYXJlXG4gKiB0d28gdHlwZXMgb2YgbGluayBkZWNvcmF0b3JzOlxuICpcbiAqICoge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt+TGlua0RlY29yYXRvckF1dG9tYXRpY0RlZmluaXRpb24gQXV0b21hdGljfSAmbmRhc2g7IFRoZXkgbWF0Y2ggbGlua3MgYWdhaW5zdCBwcmXigJNkZWZpbmVkIHJ1bGVzIGFuZFxuICogbWFuYWdlIHRoZWlyIGF0dHJpYnV0ZXMgYmFzZWQgb24gdGhlIHJlc3VsdHMuXG4gKiAqIHtAbGluayBtb2R1bGU6bGluay9saW5rfkxpbmtEZWNvcmF0b3JNYW51YWxEZWZpbml0aW9uIE1hbnVhbH0gJm5kYXNoOyBUaGV5IGFsbG93IHVzZXJzIHRvIGNvbnRyb2wgbGluayBhdHRyaWJ1dGVzIGluZGl2aWR1YWxseSxcbiAqICB1c2luZyB0aGUgZWRpdG9yIFVJLlxuICpcbiAqIFRlbXBsYXRlIGRlY29yYXRvcnMgYXJlIGRlZmluZWQgYXMgb2JqZWN0cyB3aXRoIGtleS12YWx1ZSBwYWlycywgd2hlcmUgdGhlIGtleSBpcyB0aGUgbmFtZSBwcm92aWRlZCBmb3IgYSBnaXZlbiBkZWNvcmF0b3IgYW5kIHRoZVxuICogdmFsdWUgaXMgdGhlIGRlY29yYXRvciBkZWZpbml0aW9uLlxuICpcbiAqIFRoZSBuYW1lIG9mIHRoZSBkZWNvcmF0b3IgYWxzbyBjb3JyZXNwb25kcyB0byB0aGUge0BnbGluayBmcmFtZXdvcmsvZ3VpZGVzL2FyY2hpdGVjdHVyZS9lZGl0aW5nLWVuZ2luZSN0ZXh0LWF0dHJpYnV0ZXMgdGV4dCBhdHRyaWJ1dGV9XG4gKiBpbiB0aGUgbW9kZWwuIEZvciBpbnN0YW5jZSwgdGhlIGBpc0V4dGVybmFsYCBkZWNvcmF0b3IgYmVsb3cgaXMgcmVwcmVzZW50ZWQgYXMgYSBgbGlua0lzRXh0ZXJuYWxgIGF0dHJpYnV0ZSBpbiB0aGUgbW9kZWwuXG4gKlxuICpcdFx0Q2xhc3NpY0VkaXRvclxuICpcdFx0XHQuY3JlYXRlKCBlZGl0b3JFbGVtZW50LCB7XG4gKlx0XHRcdFx0bGluazoge1xuICpcdFx0XHRcdFx0ZGVjb3JhdG9yczoge1xuICpcdFx0XHRcdFx0XHRpc0V4dGVybmFsOiB7XG4gKlx0XHRcdFx0XHRcdFx0bW9kZTogJ2F1dG9tYXRpYycsXG4gKlx0XHRcdFx0XHRcdFx0Y2FsbGJhY2s6IHVybCA9PiB1cmwuc3RhcnRzV2l0aCggJ2h0dHA6Ly8nICksXG4gKlx0XHRcdFx0XHRcdFx0YXR0cmlidXRlczoge1xuICpcdFx0XHRcdFx0XHRcdFx0dGFyZ2V0OiAnX2JsYW5rJyxcbiAqXHRcdFx0XHRcdFx0XHRcdHJlbDogJ25vb3BlbmVyIG5vcmVmZXJyZXInXG4gKlx0XHRcdFx0XHRcdFx0fVxuICpcdFx0XHRcdFx0XHR9LFxuICpcdFx0XHRcdFx0XHRpc0Rvd25sb2FkYWJsZToge1xuICpcdFx0XHRcdFx0XHRcdG1vZGU6ICdtYW51YWwnLFxuICpcdFx0XHRcdFx0XHRcdGxhYmVsOiAnRG93bmxvYWRhYmxlJyxcbiAqXHRcdFx0XHRcdFx0XHRhdHRyaWJ1dGVzOiB7XG4gKlx0XHRcdFx0XHRcdFx0XHRkb3dubG9hZDogJ2ZpbGUucG5nJyxcbiAqXHRcdFx0XHRcdFx0XHR9XG4gKlx0XHRcdFx0XHRcdH0sXG4gKlx0XHRcdFx0XHRcdC8vIC4uLlxuICpcdFx0XHRcdFx0fVxuICpcdFx0XHRcdH1cbiAqXHRcdFx0fSApXG4gKlx0XHRcdC50aGVuKCAuLi4gKVxuICpcdFx0XHQuY2F0Y2goIC4uLiApO1xuICpcbiAqIFRvIGxlYXJuIG1vcmUgYWJvdXQgdGhlIGNvbmZpZ3VyYXRpb24gc3ludGF4LCBjaGVjayBvdXQgdGhlIHtAbGluayBtb2R1bGU6bGluay9saW5rfkxpbmtEZWNvcmF0b3JBdXRvbWF0aWNEZWZpbml0aW9uIGF1dG9tYXRpY31cbiAqIGFuZCB7QGxpbmsgbW9kdWxlOmxpbmsvbGlua35MaW5rRGVjb3JhdG9yTWFudWFsRGVmaW5pdGlvbiBtYW51YWx9IGRlY29yYXRvciBvcHRpb24gcmVmZXJlbmNlLlxuICpcbiAqICoqV2FybmluZzoqKiBDdXJyZW50bHksIGxpbmsgZGVjb3JhdG9ycyB3b3JrIGluZGVwZW5kZW50bHkgb2Ygb25lIGFub3RoZXIgYW5kIG5vIGNvbmZsaWN0IHJlc29sdXRpb24gbWVjaGFuaXNtIGV4aXN0cy5cbiAqIEZvciBleGFtcGxlLCBjb25maWd1cmluZyB0aGUgYHRhcmdldGAgYXR0cmlidXRlIHVzaW5nIGJvdGggYW4gYXV0b21hdGljIGFuZCBhIG1hbnVhbCBkZWNvcmF0b3IgYXQgdGhlIHNhbWUgdGltZSBjb3VsZCBlbmQgdXAgd2l0aFxuICogcXVpcmt5IHJlc3VsdHMuIFRoZSBzYW1lIGFwcGxpZXMgaWYgbXVsdGlwbGUgbWFudWFsIG9yIGF1dG9tYXRpYyBkZWNvcmF0b3JzIHdlcmUgZGVmaW5lZCBmb3IgdGhlIHNhbWUgYXR0cmlidXRlLlxuICpcbiAqICoqTm90ZSoqOiBTaW5jZSB0aGUgYHRhcmdldGAgYXR0cmlidXRlIG1hbmFnZW1lbnQgZm9yIGV4dGVybmFsIGxpbmtzIGlzIGEgY29tbW9uIHVzZSBjYXNlLCB0aGVyZSBpcyBhIHByZWRlZmluZWQgYXV0b21hdGljIGRlY29yYXRvclxuICogZGVkaWNhdGVkIGZvciB0aGF0IHB1cnBvc2Ugd2hpY2ggY2FuIGJlIGVuYWJsZWQgYnkgdHVybmluZyBhIHNpbmdsZSBvcHRpb24gb24uIENoZWNrIG91dCB0aGVcbiAqIHtAbGluayBtb2R1bGU6bGluay9saW5rfkxpbmtDb25maWcjYWRkVGFyZ2V0VG9FeHRlcm5hbExpbmtzIGBjb25maWcubGluay5hZGRUYXJnZXRUb0V4dGVybmFsTGlua3NgfVxuICogY29uZmlndXJhdGlvbiBkZXNjcmlwdGlvbiB0byBsZWFybiBtb3JlLlxuICpcbiAqIFNlZSBhbHNvIHRoZSB7QGdsaW5rIGZlYXR1cmVzL2xpbmsjY3VzdG9tLWxpbmstYXR0cmlidXRlcy1kZWNvcmF0b3JzIGxpbmsgZmVhdHVyZSBndWlkZX0gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogQG1lbWJlciB7T2JqZWN0LjxTdHJpbmcsIG1vZHVsZTpsaW5rL2xpbmt+TGlua0RlY29yYXRvckRlZmluaXRpb24+fSBtb2R1bGU6bGluay9saW5rfkxpbmtDb25maWcjZGVjb3JhdG9yc1xuICovXG5cbi8qKlxuICogQSBsaW5rIGRlY29yYXRvciBkZWZpbml0aW9uLiBUd28gdHlwZXMgaW1wbGVtZW50IHRoaXMgZGVmaXRpb246XG4gKlxuICogKiB7QGxpbmsgbW9kdWxlOmxpbmsvbGlua35MaW5rRGVjb3JhdG9yTWFudWFsRGVmaW5pdGlvbn1cbiAqICoge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt+TGlua0RlY29yYXRvckF1dG9tYXRpY0RlZmluaXRpb259XG4gKlxuICogUmVmZXIgdG8gdGhlaXIgZG9jdW1lbnQgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgYXZhaWxhYmxlIG9wdGlvbnMgb3IgdG8gdGhlXG4gKiB7QGdsaW5rIGZlYXR1cmVzL2xpbmsjY3VzdG9tLWxpbmstYXR0cmlidXRlcy1kZWNvcmF0b3JzIGxpbmsgZmVhdHVyZSBndWlkZX0gZm9yIGdlbmVyYWwgaW5mb3JtYXRpb24uXG4gKlxuICogQGludGVyZmFjZSBMaW5rRGVjb3JhdG9yRGVmaW5pdGlvblxuICovXG5cbi8qKlxuICogVGVtcGxhdGUgZGVjb3JhdG9yIHR5cGUuXG4gKlxuICogQ2hlY2sgb3V0IHRoZSB7QGdsaW5rIGZlYXR1cmVzL2xpbmsjY3VzdG9tLWxpbmstYXR0cmlidXRlcy1kZWNvcmF0b3JzIGxpbmsgZmVhdHVyZSBndWlkZX0gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogQG1lbWJlciB7J21hbnVhbCd8J2F1dG9tYXRpYyd9IG1vZHVsZTpsaW5rL2xpbmt+TGlua0RlY29yYXRvckRlZmluaXRpb24jbW9kZVxuICovXG5cbi8qKlxuICogRGVzY3JpYmVzIGFuIGF1dG9tYXRpYyB7QGxpbmsgbW9kdWxlOmxpbmsvbGlua35MaW5rQ29uZmlnI2RlY29yYXRvcnMgbGluayBkZWNvcmF0b3J9LiBUaGlzIGRlY29yYXRvciB0eXBlIG1hdGNoZXNcbiAqIGFsbCBsaW5rcyBpbiB0aGUgZWRpdG9yIGNvbnRlbnQgYWdhaW5zdCBhIGZ1bmN0aW9uIHRoYXQgZGVjaWRlcyB3aGV0aGVyIHRoZSBsaW5rIHNob3VsZCByZWNlaXZlIGEgcHJl4oCTZGVmaW5lZCBzZXQgb2YgYXR0cmlidXRlcy5cbiAqXG4gKiBJdCB0YWtlcyBhbiBvYmplY3Qgd2l0aCBrZXktdmFsdWUgcGFpcnMgb2YgYXR0cmlidXRlcyBhbmQgYSBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IG11c3QgcmV0dXJuIGEgQm9vbGVhbiB2YWx1ZSBiYXNlZCBvbiB0aGUgbGluaydzXG4gKiBgaHJlZmAgKFVSTCkuIFdoZW4gdGhlIGNhbGxiYWNrIHJldHVybnMgYHRydWVgLCBhdHRyaWJ1dGVzIGFyZSBhcHBsaWVkIHRvIHRoZSBsaW5rLlxuICpcbiAqIEZvciBleGFtcGxlLCB0byBhZGQgdGhlIGB0YXJnZXQ9XCJfYmxhbmtcImAgYXR0cmlidXRlIHRvIGFsbCBsaW5rcyBpbiB0aGUgZWRpdG9yIHN0YXJ0aW5nIHdpdGggYGh0dHA6Ly9gLCB0aGVcbiAqIGNvbmZpZ3VyYXRpb24gY291bGQgbG9vayBsaWtlIHRoaXM6XG4gKlxuICpcdFx0e1xuICpcdFx0XHRtb2RlOiAnYXV0b21hdGljJyxcbiAqXHRcdFx0Y2FsbGJhY2s6IHVybCA9PiB1cmwuc3RhcnRzV2l0aCggJ2h0dHA6Ly8nICksXG4gKlx0XHRcdGF0dHJpYnV0ZXM6IHtcbiAqXHRcdFx0XHR0YXJnZXQ6ICdfYmxhbmsnXG4gKlx0XHRcdH1cbiAqXHRcdH1cbiAqXG4gKiAqKk5vdGUqKjogU2luY2UgdGhlIGB0YXJnZXRgIGF0dHJpYnV0ZSBtYW5hZ2VtZW50IGZvciBleHRlcm5hbCBsaW5rcyBpcyBhIGNvbW1vbiB1c2UgY2FzZSwgdGhlcmUgaXMgYSBwcmVkZWZpbmVkIGF1dG9tYXRpYyBkZWNvcmF0b3JcbiAqIGRlZGljYXRlZCBmb3IgdGhhdCBwdXJwb3NlIHRoYXQgY2FuIGJlIGVuYWJsZWQgYnkgdHVybmluZyBhIHNpbmdsZSBvcHRpb24gb24uIENoZWNrIG91dCB0aGVcbiAqIHtAbGluayBtb2R1bGU6bGluay9saW5rfkxpbmtDb25maWcjYWRkVGFyZ2V0VG9FeHRlcm5hbExpbmtzIGBjb25maWcubGluay5hZGRUYXJnZXRUb0V4dGVybmFsTGlua3NgfVxuICogY29uZmlndXJhdGlvbiBkZXNjcmlwdGlvbiB0byBsZWFybiBtb3JlLlxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IG1vZHVsZTpsaW5rL2xpbmt+TGlua0RlY29yYXRvckF1dG9tYXRpY0RlZmluaXRpb25cbiAqIEBwcm9wZXJ0eSB7J2F1dG9tYXRpYyd9IG1vZGUgVGVtcGxhdGUgZGVjb3JhdG9yIHR5cGUuIEl0IGlzIGAnYXV0b21hdGljJ2AgZm9yIGFsbCBhdXRvbWF0aWMgZGVjb3JhdG9ycy5cbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNhbGxiYWNrIFRha2VzIGEgYHVybGAgYXMgYSBwYXJhbWV0ZXIgYW5kIHJldHVybnMgYHRydWVgIGlmIHRoZSBgYXR0cmlidXRlc2Agc2hvdWxkIGJlIGFwcGxpZWQgdG8gdGhlIGxpbmsuXG4gKiBAcHJvcGVydHkge09iamVjdH0gYXR0cmlidXRlcyBLZXktdmFsdWUgcGFpcnMgdXNlZCBhcyBsaW5rIGF0dHJpYnV0ZXMgYWRkZWQgdG8gdGhlIG91dHB1dCBkdXJpbmcgdGhlXG4gKiB7QGdsaW5rIGZyYW1ld29yay9ndWlkZXMvYXJjaGl0ZWN0dXJlL2VkaXRpbmctZW5naW5lI2NvbnZlcnNpb24gZG93bmNhc3Rpbmd9LlxuICogQXR0cmlidXRlcyBzaG91bGQgZm9sbG93IHRoZSB7QGxpbmsgbW9kdWxlOmVuZ2luZS92aWV3L2VsZW1lbnRkZWZpbml0aW9ufkVsZW1lbnREZWZpbml0aW9ufSBzeW50YXguXG4gKi9cblxuLyoqXG4gKiBEZXNjcmliZXMgYSBtYW51YWwge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt+TGlua0NvbmZpZyNkZWNvcmF0b3JzIGxpbmsgZGVjb3JhdG9yfS4gVGhpcyBkZWNvcmF0b3IgdHlwZSBpcyByZXByZXNlbnRlZCBpblxuICogdGhlIGxpbmsgZmVhdHVyZSdzIHtAbGluayBtb2R1bGU6bGluay9saW5rdWkgdXNlciBpbnRlcmZhY2V9IGFzIGEgc3dpdGNoIHRoYXQgdGhlIHVzZXIgY2FuIHVzZSB0byBjb250cm9sIHRoZSBwcmVzZW5jZVxuICogb2YgYSBwcmVkZWZpbmVkIHNldCBvZiBhdHRyaWJ1dGVzLlxuICpcbiAqIEZvciBpbnN0YW5jZSwgdG8gYWxsb3cgdGhlIHVzZXJzIHRvIG1hbnVhbGx5IGNvbnRyb2wgdGhlIHByZXNlbmNlIG9mIHRoZSBgdGFyZ2V0PVwiX2JsYW5rXCJgIGFuZFxuICogYHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcImAgYXR0cmlidXRlcyBvbiBzcGVjaWZpYyBsaW5rcywgdGhlIGRlY29yYXRvciBjb3VsZCBsb29rIGFzIGZvbGxvd3M6XG4gKlxuICpcdFx0e1xuICpcdFx0XHRtb2RlOiAnbWFudWFsJyxcbiAqXHRcdFx0bGFiZWw6ICdPcGVuIGluIGEgbmV3IHRhYicsXG4gKlx0XHRcdGRlZmF1bHRWYWx1ZTogdHJ1ZSxcbiAqXHRcdFx0YXR0cmlidXRlczoge1xuICpcdFx0XHRcdHRhcmdldDogJ19ibGFuaycsXG4gKlx0XHRcdFx0cmVsOiAnbm9vcGVuZXIgbm9yZWZlcnJlcidcbiAqXHRcdFx0fVxuICpcdFx0fVxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IG1vZHVsZTpsaW5rL2xpbmt+TGlua0RlY29yYXRvck1hbnVhbERlZmluaXRpb25cbiAqIEBwcm9wZXJ0eSB7J21hbnVhbCd9IG1vZGUgVGVtcGxhdGUgZGVjb3JhdG9yIHR5cGUuIEl0IGlzIGAnbWFudWFsJ2AgZm9yIGFsbCBtYW51YWwgZGVjb3JhdG9ycy5cbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBsYWJlbCBUaGUgbGFiZWwgb2YgdGhlIFVJIGJ1dHRvbiB0aGF0IHRoZSB1c2VyIGNhbiB1c2UgdG8gY29udHJvbCB0aGUgcHJlc2VuY2Ugb2YgbGluayBhdHRyaWJ1dGVzLlxuICogQHByb3BlcnR5IHtPYmplY3R9IGF0dHJpYnV0ZXMgS2V5LXZhbHVlIHBhaXJzIHVzZWQgYXMgbGluayBhdHRyaWJ1dGVzIGFkZGVkIHRvIHRoZSBvdXRwdXQgZHVyaW5nIHRoZVxuICoge0BnbGluayBmcmFtZXdvcmsvZ3VpZGVzL2FyY2hpdGVjdHVyZS9lZGl0aW5nLWVuZ2luZSNjb252ZXJzaW9uIGRvd25jYXN0aW5nfS5cbiAqIEF0dHJpYnV0ZXMgc2hvdWxkIGZvbGxvdyB0aGUge0BsaW5rIG1vZHVsZTplbmdpbmUvdmlldy9lbGVtZW50ZGVmaW5pdGlvbn5FbGVtZW50RGVmaW5pdGlvbn0gc3ludGF4LlxuICogQHByb3BlcnR5IHtCb29sZWFufSBbZGVmYXVsdFZhbHVlXSBDb250cm9scyB3aGV0aGVyIHRoZSBkZWNvcmF0b3IgaXMgXCJvblwiIGJ5IGRlZmF1bHQuXG4gKi9cbiIsIi8qKlxuICogQGxpY2Vuc2UgQ29weXJpZ2h0IChjKSAyMDAzLTIwMjEsIENLU291cmNlIC0gRnJlZGVyaWNvIEtuYWJiZW4uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBGb3IgbGljZW5zaW5nLCBzZWUgTElDRU5TRS5tZCBvciBodHRwczovL2NrZWRpdG9yLmNvbS9sZWdhbC9ja2VkaXRvci1vc3MtbGljZW5zZVxuICovXG5cbi8qKlxuICogQG1vZHVsZSBsaW5rL3VpL2xpbmthY3Rpb25zdmlld1xuICovXG5cbmltcG9ydCB7IEJ1dHRvblZpZXcsIFZpZXcsIFZpZXdDb2xsZWN0aW9uLCBGb2N1c0N5Y2xlciB9IGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtdWkvc3JjJztcbmltcG9ydCB7IEZvY3VzVHJhY2tlciwgS2V5c3Ryb2tlSGFuZGxlciB9IGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtdXRpbHMvc3JjJztcbmltcG9ydCB7IGljb25zIH0gZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1jb3JlL3NyYyc7XG5cbmltcG9ydCB7IGVuc3VyZVNhZmVVcmwgfSBmcm9tICcuLi91dGlscyc7XG5cbi8vIFNlZTogIzg4MzMuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2tlZGl0b3I1LXJ1bGVzL2NrZWRpdG9yLWltcG9ydHNcbmltcG9ydCAnQGNrZWRpdG9yL2NrZWRpdG9yNS11aS90aGVtZS9jb21wb25lbnRzL3Jlc3BvbnNpdmUtZm9ybS9yZXNwb25zaXZlZm9ybS5jc3MnO1xuaW1wb3J0ICcuLi8uLi90aGVtZS90ZW1wbGF0ZWFjdGlvbnMuY3NzJztcblxuaW1wb3J0IHVubGlua0ljb24gZnJvbSAnLi4vLi4vdGhlbWUvaWNvbnMvdW5saW5rLnN2Zyc7XG5cbi8qKlxuICogVGhlIGxpbmsgYWN0aW9ucyB2aWV3IGNsYXNzLiBUaGlzIHZpZXcgZGlzcGxheXMgdGhlIGxpbmsgcHJldmlldywgYWxsb3dzXG4gKiB1bmxpbmtpbmcgb3IgZWRpdGluZyB0aGUgbGluay5cbiAqXG4gKiBAZXh0ZW5kcyBtb2R1bGU6dWkvdmlld35WaWV3XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlbXBsYXRlQWN0aW9uc1ZpZXcgZXh0ZW5kcyBWaWV3IHtcblx0LyoqXG5cdCAqIEBpbmhlcml0RG9jXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggbG9jYWxlICkge1xuXHRcdHN1cGVyKCBsb2NhbGUgKTtcblxuXHRcdGNvbnN0IHQgPSBsb2NhbGUudDtcblxuXHRcdC8qKlxuXHRcdCAqIFRyYWNrcyBpbmZvcm1hdGlvbiBhYm91dCBET00gZm9jdXMgaW4gdGhlIGFjdGlvbnMuXG5cdFx0ICpcblx0XHQgKiBAcmVhZG9ubHlcblx0XHQgKiBAbWVtYmVyIHttb2R1bGU6dXRpbHMvZm9jdXN0cmFja2VyfkZvY3VzVHJhY2tlcn1cblx0XHQgKi9cblx0XHR0aGlzLmZvY3VzVHJhY2tlciA9IG5ldyBGb2N1c1RyYWNrZXIoKTtcblxuXHRcdC8qKlxuXHRcdCAqIEFuIGluc3RhbmNlIG9mIHRoZSB7QGxpbmsgbW9kdWxlOnV0aWxzL2tleXN0cm9rZWhhbmRsZXJ+S2V5c3Ryb2tlSGFuZGxlcn0uXG5cdFx0ICpcblx0XHQgKiBAcmVhZG9ubHlcblx0XHQgKiBAbWVtYmVyIHttb2R1bGU6dXRpbHMva2V5c3Ryb2tlaGFuZGxlcn5LZXlzdHJva2VIYW5kbGVyfVxuXHRcdCAqL1xuXHRcdHRoaXMua2V5c3Ryb2tlcyA9IG5ldyBLZXlzdHJva2VIYW5kbGVyKCk7XG5cblx0XHQvKipcblx0XHQgKiBUaGUgaHJlZiBwcmV2aWV3IHZpZXcuXG5cdFx0ICpcblx0XHQgKiBAbWVtYmVyIHttb2R1bGU6dWkvdmlld35WaWV3fVxuXHRcdCAqL1xuXHRcdHRoaXMucHJldmlld0J1dHRvblZpZXcgPSB0aGlzLl9jcmVhdGVQcmV2aWV3QnV0dG9uKCk7XG5cblx0XHQvKipcblx0XHQgKiBUaGUgdW5saW5rIGJ1dHRvbiB2aWV3LlxuXHRcdCAqXG5cdFx0ICogQG1lbWJlciB7bW9kdWxlOnVpL2J1dHRvbi9idXR0b252aWV3fkJ1dHRvblZpZXd9XG5cdFx0ICovXG5cdFx0dGhpcy51bmxpbmtCdXR0b25WaWV3ID0gdGhpcy5fY3JlYXRlQnV0dG9uKCB0KCAnQ2FuY2VsIFRlbXBsYXRlIFZhcicgKSwgdW5saW5rSWNvbiwgJ2NhbmNlbFRlbXBsYXRlJyApO1xuXG5cdFx0LyoqXG5cdFx0ICogVGhlIGVkaXQgbGluayBidXR0b24gdmlldy5cblx0XHQgKlxuXHRcdCAqIEBtZW1iZXIge21vZHVsZTp1aS9idXR0b24vYnV0dG9udmlld35CdXR0b25WaWV3fVxuXHRcdCAqL1xuXHRcdHRoaXMuZWRpdEJ1dHRvblZpZXcgPSB0aGlzLl9jcmVhdGVCdXR0b24oIHQoICdFZGl0IFRlbXBsYXRlIFZhcicgKSwgaWNvbnMucGVuY2lsLCAnZWRpdCcgKTtcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSB2YWx1ZSBvZiB0aGUgXCJocmVmXCIgYXR0cmlidXRlIG9mIHRoZSBsaW5rIHRvIHVzZSBpbiB0aGUge0BsaW5rICNwcmV2aWV3QnV0dG9uVmlld30uXG5cdFx0ICpcblx0XHQgKiBAb2JzZXJ2YWJsZVxuXHRcdCAqIEBtZW1iZXIge1N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnNldCggJ2RhdGEtdGVtcGxhdGUtdmFyJyApO1xuXG5cdFx0LyoqXG5cdFx0ICogQSBjb2xsZWN0aW9uIG9mIHZpZXdzIHRoYXQgY2FuIGJlIGZvY3VzZWQgaW4gdGhlIHZpZXcuXG5cdFx0ICpcblx0XHQgKiBAcmVhZG9ubHlcblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQG1lbWJlciB7bW9kdWxlOnVpL3ZpZXdjb2xsZWN0aW9uflZpZXdDb2xsZWN0aW9ufVxuXHRcdCAqL1xuXHRcdHRoaXMuX2ZvY3VzYWJsZXMgPSBuZXcgVmlld0NvbGxlY3Rpb24oKTtcblxuXHRcdC8qKlxuXHRcdCAqIEhlbHBzIGN5Y2xpbmcgb3ZlciB7QGxpbmsgI19mb2N1c2FibGVzfSBpbiB0aGUgdmlldy5cblx0XHQgKlxuXHRcdCAqIEByZWFkb25seVxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAbWVtYmVyIHttb2R1bGU6dWkvZm9jdXNjeWNsZXJ+Rm9jdXNDeWNsZXJ9XG5cdFx0ICovXG5cdFx0dGhpcy5fZm9jdXNDeWNsZXIgPSBuZXcgRm9jdXNDeWNsZXIoIHtcblx0XHRcdGZvY3VzYWJsZXM6IHRoaXMuX2ZvY3VzYWJsZXMsXG5cdFx0XHRmb2N1c1RyYWNrZXI6IHRoaXMuZm9jdXNUcmFja2VyLFxuXHRcdFx0a2V5c3Ryb2tlSGFuZGxlcjogdGhpcy5rZXlzdHJva2VzLFxuXHRcdFx0YWN0aW9uczoge1xuXHRcdFx0XHQvLyBOYXZpZ2F0ZSBmaWVsZHMgYmFja3dhcmRzIHVzaW5nIHRoZSBTaGlmdCArIFRhYiBrZXlzdHJva2UuXG5cdFx0XHRcdGZvY3VzUHJldmlvdXM6ICdzaGlmdCArIHRhYicsXG5cblx0XHRcdFx0Ly8gTmF2aWdhdGUgZmllbGRzIGZvcndhcmRzIHVzaW5nIHRoZSBUYWIga2V5LlxuXHRcdFx0XHRmb2N1c05leHQ6ICd0YWInXG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0dGhpcy5zZXRUZW1wbGF0ZSgge1xuXHRcdFx0dGFnOiAnZGl2JyxcblxuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRjbGFzczogW1xuXHRcdFx0XHRcdCdjaycsXG5cdFx0XHRcdFx0J2NrLWxpbmstYWN0aW9ucycsXG5cdFx0XHRcdFx0J2NrLXJlc3BvbnNpdmUtZm9ybSdcblx0XHRcdFx0XSxcblxuXHRcdFx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vY2tlZGl0b3IvY2tlZGl0b3I1LWxpbmsvaXNzdWVzLzkwXG5cdFx0XHRcdHRhYmluZGV4OiAnLTEnXG5cdFx0XHR9LFxuXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHR0aGlzLnByZXZpZXdCdXR0b25WaWV3LFxuXHRcdFx0XHR0aGlzLmVkaXRCdXR0b25WaWV3LFxuXHRcdFx0XHR0aGlzLnVubGlua0J1dHRvblZpZXdcblx0XHRcdF1cblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogQGluaGVyaXREb2Ncblx0ICovXG5cdHJlbmRlcigpIHtcblx0XHRzdXBlci5yZW5kZXIoKTtcblxuXHRcdGNvbnN0IGNoaWxkVmlld3MgPSBbXG5cdFx0XHR0aGlzLnByZXZpZXdCdXR0b25WaWV3LFxuXHRcdFx0dGhpcy5lZGl0QnV0dG9uVmlldyxcblx0XHRcdHRoaXMudW5saW5rQnV0dG9uVmlld1xuXHRcdF07XG5cblx0XHRjaGlsZFZpZXdzLmZvckVhY2goIHYgPT4ge1xuXHRcdFx0Ly8gUmVnaXN0ZXIgdGhlIHZpZXcgYXMgZm9jdXNhYmxlLlxuXHRcdFx0dGhpcy5fZm9jdXNhYmxlcy5hZGQoIHYgKTtcblxuXHRcdFx0Ly8gUmVnaXN0ZXIgdGhlIHZpZXcgaW4gdGhlIGZvY3VzIHRyYWNrZXIuXG5cdFx0XHR0aGlzLmZvY3VzVHJhY2tlci5hZGQoIHYuZWxlbWVudCApO1xuXHRcdH0gKTtcblxuXHRcdC8vIFN0YXJ0IGxpc3RlbmluZyBmb3IgdGhlIGtleXN0cm9rZXMgY29taW5nIGZyb20gI2VsZW1lbnQuXG5cdFx0dGhpcy5rZXlzdHJva2VzLmxpc3RlblRvKCB0aGlzLmVsZW1lbnQgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBGb2N1c2VzIHRoZSBmaXN0IHtAbGluayAjX2ZvY3VzYWJsZXN9IGluIHRoZSBhY3Rpb25zLlxuXHQgKi9cblx0Zm9jdXMoKSB7XG5cdFx0dGhpcy5fZm9jdXNDeWNsZXIuZm9jdXNGaXJzdCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBidXR0b24gdmlldy5cblx0ICpcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IGxhYmVsIFRoZSBidXR0b24gbGFiZWwuXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBpY29uIFRoZSBidXR0b24gaWNvbi5cblx0ICogQHBhcmFtIHtTdHJpbmd9IFtldmVudE5hbWVdIEFuIGV2ZW50IG5hbWUgdGhhdCB0aGUgYEJ1dHRvblZpZXcjZXhlY3V0ZWAgZXZlbnQgd2lsbCBiZSBkZWxlZ2F0ZWQgdG8uXG5cdCAqIEByZXR1cm5zIHttb2R1bGU6dWkvYnV0dG9uL2J1dHRvbnZpZXd+QnV0dG9uVmlld30gVGhlIGJ1dHRvbiB2aWV3IGluc3RhbmNlLlxuXHQgKi9cblx0X2NyZWF0ZUJ1dHRvbiggbGFiZWwsIGljb24sIGV2ZW50TmFtZSApIHtcblx0XHRjb25zdCBidXR0b24gPSBuZXcgQnV0dG9uVmlldyggdGhpcy5sb2NhbGUgKTtcblxuXHRcdGJ1dHRvbi5zZXQoIHtcblx0XHRcdGxhYmVsLFxuXHRcdFx0aWNvbixcblx0XHRcdHRvb2x0aXA6IHRydWVcblx0XHR9ICk7XG5cblx0XHRidXR0b24uZGVsZWdhdGUoICdleGVjdXRlJyApLnRvKCB0aGlzLCBldmVudE5hbWUgKTtcblxuXHRcdHJldHVybiBidXR0b247XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIGxpbmsgaHJlZiBwcmV2aWV3IGJ1dHRvbi5cblx0ICpcblx0ICogQHByaXZhdGVcblx0ICogQHJldHVybnMge21vZHVsZTp1aS9idXR0b24vYnV0dG9udmlld35CdXR0b25WaWV3fSBUaGUgYnV0dG9uIHZpZXcgaW5zdGFuY2UuXG5cdCAqL1xuXHRfY3JlYXRlUHJldmlld0J1dHRvbigpIHtcblx0XHRjb25zdCBidXR0b24gPSBuZXcgQnV0dG9uVmlldyggdGhpcy5sb2NhbGUgKTtcblx0XHRjb25zdCBiaW5kID0gdGhpcy5iaW5kVGVtcGxhdGU7XG5cdFx0Y29uc3QgdCA9IHRoaXMudDtcblxuXHRcdGJ1dHRvbi5zZXQoIHtcblx0XHRcdHdpdGhUZXh0OiB0cnVlLFxuXHRcdFx0dG9vbHRpcDogdCggJ3RlbXBsYXRlIHZhbGlhYmxlIGlkJyApXG5cdFx0fSApO1xuXG5cdFx0YnV0dG9uLmV4dGVuZFRlbXBsYXRlKCB7XG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGNsYXNzOiBbXG5cdFx0XHRcdFx0J2NrJyxcblx0XHRcdFx0XHQnY2stbGluay1hY3Rpb25zX19wcmV2aWV3J1xuXHRcdFx0XHRdLFxuXHRcdFx0XHRpZDogYmluZC50byggJ2lkJywgaWQgPT4gaWQgICkgLFxuXHRcdFx0XHR0YXJnZXQ6ICdfYmxhbmsnLFxuXHRcdFx0XHRyZWw6ICdub29wZW5lciBub3JlZmVycmVyJ1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdGJ1dHRvbi5iaW5kKCAnbGFiZWwnICkudG8oIHRoaXMsICdkYXRhLXRlbXBsYXRlLXZhcicsIGlkID0+IHtcblx0XHRcdHJldHVybiBpZCB8fCB0KCAnVGhpcyB2YXJpYWJsZSBoYXMgbm8gaWQnICk7XG5cdFx0fSApO1xuXG5cdFx0YnV0dG9uLmJpbmQoICdpc0VuYWJsZWQnICkudG8oIHRoaXMsICdkYXRhLXRlbXBsYXRlLXZhcicsIGlkID0+ICEhaWQgKTtcblxuXHRcdGJ1dHRvbi50ZW1wbGF0ZS50YWcgPSAnc3Bhbic7XG5cdFx0YnV0dG9uLnRlbXBsYXRlLmV2ZW50TGlzdGVuZXJzID0ge307XG5cblx0XHRyZXR1cm4gYnV0dG9uO1xuXHR9XG59XG5cbi8qKlxuICogRmlyZWQgd2hlbiB0aGUge0BsaW5rICNlZGl0QnV0dG9uVmlld30gaXMgY2xpY2tlZC5cbiAqXG4gKiBAZXZlbnQgZWRpdFxuICovXG5cbi8qKlxuICogRmlyZWQgd2hlbiB0aGUge0BsaW5rICN1bmxpbmtCdXR0b25WaWV3fSBpcyBjbGlja2VkLlxuICpcbiAqIEBldmVudCB1bmxpbmtcbiAqL1xuIiwiLyoqXG4gKiBAbGljZW5zZSBDb3B5cmlnaHQgKGMpIDIwMDMtMjAyMSwgQ0tTb3VyY2UgLSBGcmVkZXJpY28gS25hYmJlbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIEZvciBsaWNlbnNpbmcsIHNlZSBMSUNFTlNFLm1kIG9yIGh0dHBzOi8vY2tlZGl0b3IuY29tL2xlZ2FsL2NrZWRpdG9yLW9zcy1saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGxpbmsvdWkvbGlua2Zvcm12aWV3XG4gKi9cblxuaW1wb3J0IHtcblx0QnV0dG9uVmlldyxcblx0Rm9jdXNDeWNsZXIsXG5cdExhYmVsZWRGaWVsZFZpZXcsXG5cdFN3aXRjaEJ1dHRvblZpZXcsXG5cdFZpZXcsXG5cdFZpZXdDb2xsZWN0aW9uLFxuXHRjcmVhdGVMYWJlbGVkSW5wdXRUZXh0LFxuXHRpbmplY3RDc3NUcmFuc2l0aW9uRGlzYWJsZXIsXG5cdHN1Ym1pdEhhbmRsZXIsXG5cdGFkZFRvb2xiYXJUb0Ryb3Bkb3duLFxuXHRjcmVhdGVEcm9wZG93blxufSBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LXVpL3NyYyc7XG5pbXBvcnQgU3BsaXRCdXR0b25WaWV3IGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtdWkvc3JjL2Ryb3Bkb3duL2J1dHRvbi9zcGxpdGJ1dHRvbnZpZXcnO1xuaW1wb3J0IHsgRm9jdXNUcmFja2VyLCBLZXlzdHJva2VIYW5kbGVyIH0gZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS11dGlscy9zcmMnO1xuaW1wb3J0IHsgaWNvbnMgfSBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWNvcmUvc3JjJztcbi8vIFNlZTogIzg4MzMuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2tlZGl0b3I1LXJ1bGVzL2NrZWRpdG9yLWltcG9ydHNcbmltcG9ydCAnQGNrZWRpdG9yL2NrZWRpdG9yNS11aS90aGVtZS9jb21wb25lbnRzL3Jlc3BvbnNpdmUtZm9ybS9yZXNwb25zaXZlZm9ybS5jc3MnO1xuaW1wb3J0ICcuLi8uLi90aGVtZS90ZW1wbGF0ZWZvcm0uY3NzJztcblxuLyoqXG4gKiBUaGUgbGluayBmb3JtIHZpZXcgY29udHJvbGxlciBjbGFzcy5cbiAqXG4gKiBTZWUge0BsaW5rIG1vZHVsZTpsaW5rL3VpL2xpbmtmb3Jtdmlld35MaW5rRm9ybVZpZXd9LlxuICpcbiAqIEBleHRlbmRzIG1vZHVsZTp1aS92aWV3flZpZXdcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVtcGxhdGVGb3JtVmlldyBleHRlbmRzIFZpZXcge1xuXHQvKipcblx0ICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiB0aGUge0BsaW5rIG1vZHVsZTpsaW5rL3VpL2xpbmtmb3Jtdmlld35MaW5rRm9ybVZpZXd9IGNsYXNzLlxuXHQgKlxuXHQgKiBBbHNvIHNlZSB7QGxpbmsgI3JlbmRlcn0uXG5cdCAqXG5cdCAqIEBwYXJhbSB7bW9kdWxlOnV0aWxzL2xvY2FsZX5Mb2NhbGV9IFtsb2NhbGVdIFRoZSBsb2NhbGl6YXRpb24gc2VydmljZXMgaW5zdGFuY2UuXG5cdCAqIEBwYXJhbSB7bW9kdWxlOmxpbmsvbGlua2NvbW1hbmR+TGlua0NvbW1hbmR9IGxpbmtDb21tYW5kIFJlZmVyZW5jZSB0byB7QGxpbmsgbW9kdWxlOmxpbmsvbGlua2NvbW1hbmR+TGlua0NvbW1hbmR9LlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gW3Byb3RvY29sXSBBIHZhbHVlIG9mIGEgcHJvdG9jb2wgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBpbnB1dCdzIHBsYWNlaG9sZGVyLlxuXHQgKi9cblx0Y29uc3RydWN0b3IoIGxvY2FsZSwgbGlua0NvbW1hbmQgKSB7XG5cdFx0c3VwZXIoIGxvY2FsZSApO1xuXG5cdFx0Y29uc3QgdCA9IGxvY2FsZS50O1xuXG5cdFx0LyoqXG5cdFx0ICogVHJhY2tzIGluZm9ybWF0aW9uIGFib3V0IERPTSBmb2N1cyBpbiB0aGUgZm9ybS5cblx0XHQgKlxuXHRcdCAqIEByZWFkb25seVxuXHRcdCAqIEBtZW1iZXIge21vZHVsZTp1dGlscy9mb2N1c3RyYWNrZXJ+Rm9jdXNUcmFja2VyfVxuXHRcdCAqL1xuXHRcdHRoaXMuZm9jdXNUcmFja2VyID0gbmV3IEZvY3VzVHJhY2tlcigpO1xuXG5cdFx0LyoqXG5cdFx0ICogQW4gaW5zdGFuY2Ugb2YgdGhlIHtAbGluayBtb2R1bGU6dXRpbHMva2V5c3Ryb2tlaGFuZGxlcn5LZXlzdHJva2VIYW5kbGVyfS5cblx0XHQgKlxuXHRcdCAqIEByZWFkb25seVxuXHRcdCAqIEBtZW1iZXIge21vZHVsZTp1dGlscy9rZXlzdHJva2VoYW5kbGVyfktleXN0cm9rZUhhbmRsZXJ9XG5cdFx0ICovXG5cdFx0dGhpcy5rZXlzdHJva2VzID0gbmV3IEtleXN0cm9rZUhhbmRsZXIoKTtcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBVUkwgaW5wdXQgdmlldy5cblx0XHQgKlxuXHRcdCAqIEBtZW1iZXIge21vZHVsZTp1aS9sYWJlbGVkZmllbGQvbGFiZWxlZGZpZWxkdmlld35MYWJlbGVkRmllbGRWaWV3fVxuXHRcdCAqL1xuXHRcdHRoaXMubGFiZWxJbnB1dFZpZXcgPSB0aGlzLl9jcmVhdGVUZXh0SW5wdXQoJ1NldCB2YXJpYWJsZSBJZCcpOy8qKlxuXHRcdCAqIFRoZSBVUkwgaW5wdXQgdmlldy5cblx0XHQgKlxuXHRcdCAqIEBtZW1iZXIge21vZHVsZTp1aS9sYWJlbGVkZmllbGQvbGFiZWxlZGZpZWxkdmlld35MYWJlbGVkRmllbGRWaWV3fVxuXHRcdCAqL1xuXHRcdHRoaXMudHlwZUlucHV0VmlldyA9IHRoaXMuX2NyZWF0ZURyb3BEb3duSW5wdXQoJ1RlbXBsYXRlIFZhcmlhYmxlIFR5cGUnKTsvKipcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBTYXZlIGJ1dHRvbiB2aWV3LlxuXHRcdCAqXG5cdFx0ICogQG1lbWJlciB7bW9kdWxlOnVpL2J1dHRvbi9idXR0b252aWV3fkJ1dHRvblZpZXd9XG5cdFx0ICovXG5cdFx0dGhpcy5zYXZlQnV0dG9uVmlldyA9IHRoaXMuX2NyZWF0ZUJ1dHRvbiggdCggJ1NhdmUnICksIGljb25zLmNoZWNrLCAnY2stYnV0dG9uLXNhdmUnICk7XG5cdFx0dGhpcy5zYXZlQnV0dG9uVmlldy50eXBlID0gJ3N1Ym1pdCc7XG5cblx0XHQvKipcblx0XHQgKiBUaGUgQ2FuY2VsIGJ1dHRvbiB2aWV3LlxuXHRcdCAqXG5cdFx0ICogQG1lbWJlciB7bW9kdWxlOnVpL2J1dHRvbi9idXR0b252aWV3fkJ1dHRvblZpZXd9XG5cdFx0ICovXG5cdFx0dGhpcy5jYW5jZWxCdXR0b25WaWV3ID0gdGhpcy5fY3JlYXRlQnV0dG9uKCB0KCAnQ2FuY2VsJyApLCBpY29ucy5jYW5jZWwsICdjay1idXR0b24tY2FuY2VsJywgJ2NhbmNlbCcgKTtcblxuXHRcdC8qKlxuXHRcdCAqIEEgY29sbGVjdGlvbiBvZiB7QGxpbmsgbW9kdWxlOnVpL2J1dHRvbi9zd2l0Y2hidXR0b252aWV3flN3aXRjaEJ1dHRvblZpZXd9LFxuXHRcdCAqIHdoaWNoIGNvcnJlc3BvbmRzIHRvIHtAbGluayBtb2R1bGU6bGluay9saW5rY29tbWFuZH5MaW5rQ29tbWFuZCNtYW51YWxEZWNvcmF0b3JzIG1hbnVhbCBkZWNvcmF0b3JzfVxuXHRcdCAqIGNvbmZpZ3VyZWQgaW4gdGhlIGVkaXRvci5cblx0XHQgKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICogQHJlYWRvbmx5XG5cdFx0ICogQHR5cGUge21vZHVsZTp1aS92aWV3Y29sbGVjdGlvbn5WaWV3Q29sbGVjdGlvbn1cblx0XHQgKi9cblx0XHR0aGlzLl9tYW51YWxEZWNvcmF0b3JTd2l0Y2hlcyA9IHRoaXMuX2NyZWF0ZU1hbnVhbERlY29yYXRvclN3aXRjaGVzKCBsaW5rQ29tbWFuZCApO1xuXG5cdFx0LyoqXG5cdFx0ICogQSBjb2xsZWN0aW9uIG9mIGNoaWxkIHZpZXdzIGluIHRoZSBmb3JtLlxuXHRcdCAqXG5cdFx0ICogQHJlYWRvbmx5XG5cdFx0ICogQHR5cGUge21vZHVsZTp1aS92aWV3Y29sbGVjdGlvbn5WaWV3Q29sbGVjdGlvbn1cblx0XHQgKi9cblx0XHR0aGlzLmNoaWxkcmVuID0gdGhpcy5fY3JlYXRlRm9ybUNoaWxkcmVuKCBsaW5rQ29tbWFuZC5tYW51YWxEZWNvcmF0b3JzICk7XG5cblx0XHQvKipcblx0XHQgKiBBIGNvbGxlY3Rpb24gb2Ygdmlld3MgdGhhdCBjYW4gYmUgZm9jdXNlZCBpbiB0aGUgZm9ybS5cblx0XHQgKlxuXHRcdCAqIEByZWFkb25seVxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAbWVtYmVyIHttb2R1bGU6dWkvdmlld2NvbGxlY3Rpb25+Vmlld0NvbGxlY3Rpb259XG5cdFx0ICovXG5cdFx0dGhpcy5fZm9jdXNhYmxlcyA9IG5ldyBWaWV3Q29sbGVjdGlvbigpO1xuXG5cdFx0LyoqXG5cdFx0ICogSGVscHMgY3ljbGluZyBvdmVyIHtAbGluayAjX2ZvY3VzYWJsZXN9IGluIHRoZSBmb3JtLlxuXHRcdCAqXG5cdFx0ICogQHJlYWRvbmx5XG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEBtZW1iZXIge21vZHVsZTp1aS9mb2N1c2N5Y2xlcn5Gb2N1c0N5Y2xlcn1cblx0XHQgKi9cblx0XHR0aGlzLl9mb2N1c0N5Y2xlciA9IG5ldyBGb2N1c0N5Y2xlcigge1xuXHRcdFx0Zm9jdXNhYmxlczogdGhpcy5fZm9jdXNhYmxlcyxcblx0XHRcdGZvY3VzVHJhY2tlcjogdGhpcy5mb2N1c1RyYWNrZXIsXG5cdFx0XHRrZXlzdHJva2VIYW5kbGVyOiB0aGlzLmtleXN0cm9rZXMsXG5cdFx0XHRhY3Rpb25zOiB7XG5cdFx0XHRcdC8vIE5hdmlnYXRlIGZvcm0gZmllbGRzIGJhY2t3YXJkcyB1c2luZyB0aGUgU2hpZnQgKyBUYWIga2V5c3Ryb2tlLlxuXHRcdFx0XHRmb2N1c1ByZXZpb3VzOiAnc2hpZnQgKyB0YWInLFxuXG5cdFx0XHRcdC8vIE5hdmlnYXRlIGZvcm0gZmllbGRzIGZvcndhcmRzIHVzaW5nIHRoZSBUYWIga2V5LlxuXHRcdFx0XHRmb2N1c05leHQ6ICd0YWInXG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0Y29uc3QgY2xhc3NMaXN0ID0gWyAnY2snLCAnY2stbGluay1mb3JtJywgJ2NrLXJlc3BvbnNpdmUtZm9ybScgXTtcblxuXHRcdGlmICggbGlua0NvbW1hbmQubWFudWFsRGVjb3JhdG9ycy5sZW5ndGggKSB7XG5cdFx0XHRjbGFzc0xpc3QucHVzaCggJ2NrLWxpbmstZm9ybV9sYXlvdXQtdmVydGljYWwnLCAnY2stdmVydGljYWwtZm9ybScgKTtcblx0XHR9XG5cblx0XHR0aGlzLnNldFRlbXBsYXRlKCB7XG5cdFx0XHR0YWc6ICdmb3JtJyxcblxuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRjbGFzczogY2xhc3NMaXN0LFxuXG5cdFx0XHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ja2VkaXRvci9ja2VkaXRvcjUtbGluay9pc3N1ZXMvOTBcblx0XHRcdFx0dGFiaW5kZXg6ICctMSdcblx0XHRcdH0sXG5cblx0XHRcdGNoaWxkcmVuOiB0aGlzLmNoaWxkcmVuXG5cdFx0fSApO1xuXG5cdFx0aW5qZWN0Q3NzVHJhbnNpdGlvbkRpc2FibGVyKCB0aGlzICk7XG5cdH1cblxuXHQvKipcblx0ICogT2J0YWlucyB0aGUgc3RhdGUgb2YgdGhlIHtAbGluayBtb2R1bGU6dWkvYnV0dG9uL3N3aXRjaGJ1dHRvbnZpZXd+U3dpdGNoQnV0dG9uVmlldyBzd2l0Y2ggYnV0dG9uc30gcmVwcmVzZW50aW5nXG5cdCAqIHtAbGluayBtb2R1bGU6bGluay9saW5rY29tbWFuZH5MaW5rQ29tbWFuZCNtYW51YWxEZWNvcmF0b3JzIG1hbnVhbCBsaW5rIGRlY29yYXRvcnN9XG5cdCAqIGluIHRoZSB7QGxpbmsgbW9kdWxlOmxpbmsvdWkvbGlua2Zvcm12aWV3fkxpbmtGb3JtVmlld30uXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtPYmplY3QuPFN0cmluZyxCb29sZWFuPn0gS2V5LXZhbHVlIHBhaXJzLCB3aGVyZSB0aGUga2V5IGlzIHRoZSBuYW1lIG9mIHRoZSBkZWNvcmF0b3IgYW5kIHRoZSB2YWx1ZSBpc1xuXHQgKiBpdHMgc3RhdGUuXG5cdCAqL1xuXHRnZXREZWNvcmF0b3JTd2l0Y2hlc1N0YXRlKCkge1xuXHRcdHJldHVybiBBcnJheS5mcm9tKCB0aGlzLl9tYW51YWxEZWNvcmF0b3JTd2l0Y2hlcyApLnJlZHVjZSggKCBhY2N1bXVsYXRvciwgc3dpdGNoQnV0dG9uICkgPT4ge1xuXHRcdFx0YWNjdW11bGF0b3JbIHN3aXRjaEJ1dHRvbi5uYW1lIF0gPSBzd2l0Y2hCdXR0b24uaXNPbjtcblx0XHRcdHJldHVybiBhY2N1bXVsYXRvcjtcblx0XHR9LCB7fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbmhlcml0RG9jXG5cdCAqL1xuXHRyZW5kZXIoKSB7XG5cdFx0c3VwZXIucmVuZGVyKCk7XG5cblx0XHRzdWJtaXRIYW5kbGVyKCB7XG5cdFx0XHR2aWV3OiB0aGlzXG5cdFx0fSApO1xuXG5cdFx0Y29uc3QgY2hpbGRWaWV3cyA9IFtcblx0XHRcdHRoaXMubGFiZWxJbnB1dFZpZXcsXG5cdFx0XHR0aGlzLnR5cGVJbnB1dFZpZXcsXG5cdFx0XHQuLi50aGlzLl9tYW51YWxEZWNvcmF0b3JTd2l0Y2hlcyxcblx0XHRcdHRoaXMuc2F2ZUJ1dHRvblZpZXcsXG5cdFx0XHR0aGlzLmNhbmNlbEJ1dHRvblZpZXdcblx0XHRdO1xuXG5cdFx0Y2hpbGRWaWV3cy5mb3JFYWNoKCB2ID0+IHtcblx0XHRcdC8vIFJlZ2lzdGVyIHRoZSB2aWV3IGFzIGZvY3VzYWJsZS5cblx0XHRcdHRoaXMuX2ZvY3VzYWJsZXMuYWRkKCB2ICk7XG5cblx0XHRcdC8vIFJlZ2lzdGVyIHRoZSB2aWV3IGluIHRoZSBmb2N1cyB0cmFja2VyLlxuXHRcdFx0dGhpcy5mb2N1c1RyYWNrZXIuYWRkKCB2LmVsZW1lbnQgKTtcblx0XHR9ICk7XG5cblx0XHQvLyBTdGFydCBsaXN0ZW5pbmcgZm9yIHRoZSBrZXlzdHJva2VzIGNvbWluZyBmcm9tICNlbGVtZW50LlxuXHRcdHRoaXMua2V5c3Ryb2tlcy5saXN0ZW5UbyggdGhpcy5lbGVtZW50ICk7XG5cdH1cblxuXHQvKipcblx0ICogRm9jdXNlcyB0aGUgZmlzdCB7QGxpbmsgI19mb2N1c2FibGVzfSBpbiB0aGUgZm9ybS5cblx0ICovXG5cdGZvY3VzKCkge1xuXHRcdHRoaXMuX2ZvY3VzQ3ljbGVyLmZvY3VzRmlyc3QoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgbGFiZWxlZCBpbnB1dCB2aWV3LlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcmV0dXJucyB7bW9kdWxlOnVpL2xhYmVsZWRmaWVsZC9sYWJlbGVkZmllbGR2aWV3fkxhYmVsZWRGaWVsZFZpZXd9IExhYmVsZWQgZmllbGQgdmlldyBpbnN0YW5jZS5cblx0ICovXG5cdF9jcmVhdGVUZXh0SW5wdXQobGFiZWwpIHtcblx0XHRjb25zdCB0ID0gdGhpcy5sb2NhbGUudDtcblx0XHRjb25zdCBsYWJlbGVkSW5wdXQgPSBuZXcgTGFiZWxlZEZpZWxkVmlldyggdGhpcy5sb2NhbGUsIGNyZWF0ZUxhYmVsZWRJbnB1dFRleHQgKTtcblxuXHRcdGxhYmVsZWRJbnB1dC5sYWJlbCA9IHQoIGxhYmVsICk7XG5cblx0XHRyZXR1cm4gbGFiZWxlZElucHV0O1xuXHR9XG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgbGFiZWxlZCBpbnB1dCB2aWV3LlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcmV0dXJucyB7bW9kdWxlOnVpL2xhYmVsZWRmaWVsZC9sYWJlbGVkZmllbGR2aWV3fkxhYmVsZWRGaWVsZFZpZXd9IExhYmVsZWQgZmllbGQgdmlldyBpbnN0YW5jZS5cblx0ICovXG5cdF9jcmVhdGVEcm9wRG93bklucHV0KGxhYmVsKSB7XG5cdFx0Y29uc3QgY3JlYXRlTGFiZWxlZERyb3Bkb3duID0gKCBsYWJlbGVkRmllbGRWaWV3LCB2aWV3VWlkLCBzdGF0dXNVaWQgKSA9PntcblxuXHRcdFx0Y29uc3QgZHJvcGRvd25WaWV3ID0gY3JlYXRlRHJvcGRvd24oIGxhYmVsZWRGaWVsZFZpZXcubG9jYWxlICwgU3BsaXRCdXR0b25WaWV3ICk7XG5cblx0XHRcdGRyb3Bkb3duVmlldy5zZXQoIHtcblx0XHRcdFx0aWQ6IHZpZXdVaWQsXG5cdFx0XHRcdGFyaWFEZXNjcmliZWRCeUlkOiBzdGF0dXNVaWRcblx0XHRcdH0gKTtcblx0XHRcdGRyb3Bkb3duVmlldy5idXR0b25WaWV3LnNldCgge1xuXHRcdFx0XHR0b29sdGlwOiB0cnVlLFxuXHRcdFx0XHR3aXRoVGV4dDogdHJ1ZSxcblx0XHRcdH0gKTtcblxuXHRcdFx0Y29uc3QgYnV0dG9ucyA9IFtdO1xuXHRcdFx0Ly8gQWRkIGFub3RoZXIgY29tcG9uZW50IHRvIHRoZSBhcnJheSBvZiB0b29sYmFyIGl0ZW1zLlxuXHRcdFx0YnV0dG9ucy5wdXNoKCB0aGlzLl9jcmVhdGVEcm9wZG93bkJ1dHRvbiggJ1Nob3J0IHRleHQnICkpO1xuXG5cdFx0XHQvLyBBZGQgYW5vdGhlciBjb21wb25lbnQgdG8gdGhlIGFycmF5IG9mIHRvb2xiYXIgaXRlbXMuXG5cdFx0XHRidXR0b25zLnB1c2goIHRoaXMuX2NyZWF0ZURyb3Bkb3duQnV0dG9uKCAgJ0xvbmcgdGV4dCcgKSApO1xuXG5cdFx0XHQvLyBDcmVhdGUgYSBkcm9wZG93biB3aXRoIGEgdG9vbGJhciBpbnNpZGUgdGhlIHBhbmVsLlxuXHRcdFx0YWRkVG9vbGJhclRvRHJvcGRvd24oIGRyb3Bkb3duVmlldywgYnV0dG9ucyApO1xuXG5cdFx0XHQvLyBUaGUgZGVmYXVsdCBpY29uIGlzIGFsaWduIGxlZnQgYXMgd2UgZG8gbm90IHN1cHBvcnQgUlRMIHlldCAoc2VlICMzKS5cblxuXHRcdFx0Ly8gQ2hhbmdlIGljb24gdG8gcmVmbGVjdCBjdXJyZW50IHNlbGVjdGlvbidzIGFsaWdubWVudC5cblx0XHRcdGRyb3Bkb3duVmlldy5iaW5kKCAnaXNFbmFibGVkJyApLnRvTWFueSggYnV0dG9ucywgJ2lzRW5hYmxlZCcsICggLi4uYXJlRW5hYmxlZCApID0+IGFyZUVuYWJsZWQuc29tZSggaXNFbmFibGVkID0+IGlzRW5hYmxlZCApICk7XG5cblx0XHRcdGRyb3Bkb3duVmlldy5idXR0b25WaWV3LmJpbmQoICdsYWJlbCcgKS50b01hbnkoIGJ1dHRvbnMsICdpc09uJywgKCAuLi5hcmVBY3RpdmUgKSA9PiB7XG5cdFx0XHRcdC8vIEdldCB0aGUgaW5kZXggb2YgYW4gYWN0aXZlIGJ1dHRvbi5cblx0XHRcdFx0Y29uc3QgaW5kZXggPSBhcmVBY3RpdmUuZmluZEluZGV4KCB2YWx1ZSA9PiB2YWx1ZSApO1xuXHRcdFx0XHQvLyBJZiBub25lIG9mIHRoZSBjb21tYW5kcyBpcyBhY3RpdmUsIGRpc3BsYXkgZWl0aGVyIGRlZmF1bHRJY29uIG9yIHRoZSBmaXJzdCBidXR0b24ncyBpY29uLlxuXHRcdFx0XHRpZiAoIGluZGV4IDwgMCApIHtcblx0XHRcdFx0XHRyZXR1cm4gYnV0dG9uc1sgMCBdLmxhYmVsO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gUmV0dXJuIGFjdGl2ZSBidXR0b24ncyBpY29uLlxuXHRcdFx0XHRyZXR1cm4gYnV0dG9uc1sgaW5kZXggXS5sYWJlbDtcblx0XHRcdH0gKTtcblx0XHRcdGRyb3Bkb3duVmlldy50b29sYmFyVmlldy5pc1ZlcnRpY2FsID0gdHJ1ZTtcblx0XHRcdC8vIEVuYWJsZSBidXR0b24gaWYgYW55IG9mIHRoZSBidXR0b25zIGlzIGVuYWJsZWQuXG5cdFx0XHRyZXR1cm4gZHJvcGRvd25WaWV3O1xuXHRcdH1cblx0XHRjb25zdCB0ID0gdGhpcy5sb2NhbGUudDtcblx0XHRjb25zdCBsYWJlbGVkSW5wdXQgPSBuZXcgTGFiZWxlZEZpZWxkVmlldyggdGhpcy5sb2NhbGUsIGNyZWF0ZUxhYmVsZWREcm9wZG93biApO1xuXG5cblxuXG5cdFx0cmV0dXJuIGxhYmVsZWRJbnB1dDtcblx0fVxuXHQvKipcblx0ICogQ3JlYXRlcyBhIGJ1dHRvbiB2aWV3LlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gbGFiZWwgVGhlIGJ1dHRvbiBsYWJlbC5cblx0ICogQHBhcmFtIHtTdHJpbmd9IGljb24gVGhlIGJ1dHRvbiBpY29uLlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIFRoZSBhZGRpdGlvbmFsIGJ1dHRvbiBDU1MgY2xhc3MgbmFtZS5cblx0ICogQHBhcmFtIHtTdHJpbmd9IFtldmVudE5hbWVdIEFuIGV2ZW50IG5hbWUgdGhhdCB0aGUgYEJ1dHRvblZpZXcjZXhlY3V0ZWAgZXZlbnQgd2lsbCBiZSBkZWxlZ2F0ZWQgdG8uXG5cdCAqIEByZXR1cm5zIHttb2R1bGU6dWkvYnV0dG9uL2J1dHRvbnZpZXd+QnV0dG9uVmlld30gVGhlIGJ1dHRvbiB2aWV3IGluc3RhbmNlLlxuXHQgKi9cblx0X2NyZWF0ZUJ1dHRvbiggbGFiZWwsIGljb24sIGNsYXNzTmFtZSwgZXZlbnROYW1lICkge1xuXHRcdGNvbnN0IGJ1dHRvbiA9IG5ldyBCdXR0b25WaWV3KCB0aGlzLmxvY2FsZSApO1xuXG5cdFx0YnV0dG9uLnNldCgge1xuXHRcdFx0bGFiZWwsXG5cdFx0XHRpY29uLFxuXHRcdFx0dG9vbHRpcDogdHJ1ZVxuXHRcdH0gKTtcblx0XHRpZiAodHlwZW9mIGNsYXNzTmFtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcblxuXHRcdFx0YnV0dG9uLmV4dGVuZFRlbXBsYXRlKCB7XG5cdFx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0XHRjbGFzczogY2xhc3NOYW1lXG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRpZiAoIGV2ZW50TmFtZSApIHtcblx0XHRcdGJ1dHRvbi5kZWxlZ2F0ZSggJ2V4ZWN1dGUnICkudG8oIHRoaXMsIGV2ZW50TmFtZSApO1xuXHRcdH1cblx0XHRyZXR1cm4gYnV0dG9uO1xuXHR9XG5cdF9jcmVhdGVEcm9wZG93bkJ1dHRvbiggbGFiZWwgKSB7XG5cdFx0Y29uc3QgYnV0dG9uID0gbmV3IEJ1dHRvblZpZXcoIHRoaXMubG9jYWxlICk7XG5cblx0XHRidXR0b24uc2V0KCB7XG5cdFx0XHRpc0VuYWJsZWQgOiB0cnVlLFxuXHRcdFx0bGFiZWwgOiBsYWJlbCxcblx0XHRcdHRvb2x0aXA6IHRydWUsXG5cdFx0XHR3aXRoVGV4dDogdHJ1ZVxuXHRcdH0gKTtcblx0XHQvLyBFeGVjdXRlIGNvbW1hbmQuXG5cdFx0dGhpcy5saXN0ZW5UbyggYnV0dG9uLCAnZXhlY3V0ZScsICgpID0+IHtcblx0XHRcdGJ1dHRvbi5pc09uID0gdHJ1ZTtcblx0XHR9ICk7XG5cdFx0cmV0dXJuIGJ1dHRvbjtcblx0fVxuXG5cdC8qKlxuXHQgKiBQb3B1bGF0ZXMge0BsaW5rIG1vZHVsZTp1aS92aWV3Y29sbGVjdGlvbn5WaWV3Q29sbGVjdGlvbn0gb2Yge0BsaW5rIG1vZHVsZTp1aS9idXR0b24vc3dpdGNoYnV0dG9udmlld35Td2l0Y2hCdXR0b25WaWV3fVxuXHQgKiBtYWRlIGJhc2VkIG9uIHtAbGluayBtb2R1bGU6bGluay9saW5rY29tbWFuZH5MaW5rQ29tbWFuZCNtYW51YWxEZWNvcmF0b3JzfS5cblx0ICpcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHttb2R1bGU6bGluay9saW5rY29tbWFuZH5MaW5rQ29tbWFuZH0gbGlua0NvbW1hbmQgQSByZWZlcmVuY2UgdG8gdGhlIGxpbmsgY29tbWFuZC5cblx0ICogQHJldHVybnMge21vZHVsZTp1aS92aWV3Y29sbGVjdGlvbn5WaWV3Q29sbGVjdGlvbn0gb2Ygc3dpdGNoIGJ1dHRvbnMuXG5cdCAqL1xuXHRfY3JlYXRlTWFudWFsRGVjb3JhdG9yU3dpdGNoZXMoIGxpbmtDb21tYW5kICkge1xuXHRcdGNvbnN0IHN3aXRjaGVzID0gdGhpcy5jcmVhdGVDb2xsZWN0aW9uKCk7XG5cblx0XHRmb3IgKCBjb25zdCBtYW51YWxEZWNvcmF0b3Igb2YgbGlua0NvbW1hbmQubWFudWFsRGVjb3JhdG9ycyApIHtcblx0XHRcdGNvbnN0IHN3aXRjaEJ1dHRvbiA9IG5ldyBTd2l0Y2hCdXR0b25WaWV3KCB0aGlzLmxvY2FsZSApO1xuXG5cdFx0XHRzd2l0Y2hCdXR0b24uc2V0KCB7XG5cdFx0XHRcdG5hbWU6IG1hbnVhbERlY29yYXRvci5pZCxcblx0XHRcdFx0bGFiZWw6IG1hbnVhbERlY29yYXRvci5sYWJlbCxcblx0XHRcdFx0d2l0aFRleHQ6IHRydWVcblx0XHRcdH0gKTtcblxuXHRcdFx0c3dpdGNoQnV0dG9uLmJpbmQoICdpc09uJyApLnRvTWFueSggWyBtYW51YWxEZWNvcmF0b3IsIGxpbmtDb21tYW5kIF0sICd2YWx1ZScsICggZGVjb3JhdG9yVmFsdWUsIGNvbW1hbmRWYWx1ZSApID0+IHtcblx0XHRcdFx0cmV0dXJuIGNvbW1hbmRWYWx1ZSA9PT0gdW5kZWZpbmVkICYmIGRlY29yYXRvclZhbHVlID09PSB1bmRlZmluZWQgPyBtYW51YWxEZWNvcmF0b3IuZGVmYXVsdFZhbHVlIDogZGVjb3JhdG9yVmFsdWU7XG5cdFx0XHR9ICk7XG5cblx0XHRcdHN3aXRjaEJ1dHRvbi5vbiggJ2V4ZWN1dGUnLCAoKSA9PiB7XG5cdFx0XHRcdG1hbnVhbERlY29yYXRvci5zZXQoICd2YWx1ZScsICFzd2l0Y2hCdXR0b24uaXNPbiApO1xuXHRcdFx0fSApO1xuXG5cdFx0XHRzd2l0Y2hlcy5hZGQoIHN3aXRjaEJ1dHRvbiApO1xuXHRcdH1cblxuXHRcdHJldHVybiBzd2l0Y2hlcztcblx0fVxuXG5cdC8qKlxuXHQgKiBQb3B1bGF0ZXMgdGhlIHtAbGluayAjY2hpbGRyZW59IGNvbGxlY3Rpb24gb2YgdGhlIGZvcm0uXG5cdCAqXG5cdCAqIElmIHtAbGluayBtb2R1bGU6bGluay9saW5rY29tbWFuZH5MaW5rQ29tbWFuZCNtYW51YWxEZWNvcmF0b3JzIG1hbnVhbCBkZWNvcmF0b3JzfSBhcmUgY29uZmlndXJlZCBpbiB0aGUgZWRpdG9yLCBpdCBjcmVhdGVzIGFuXG5cdCAqIGFkZGl0aW9uYWwgYFZpZXdgIHdyYXBwaW5nIGFsbCB7QGxpbmsgI19tYW51YWxEZWNvcmF0b3JTd2l0Y2hlc30gc3dpdGNoIGJ1dHRvbnMgY29ycmVzcG9uZGluZ1xuXHQgKiB0byB0aGVzZSBkZWNvcmF0b3JzLlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge21vZHVsZTp1dGlscy9jb2xsZWN0aW9ufkNvbGxlY3Rpb259IG1hbnVhbERlY29yYXRvcnMgQSByZWZlcmVuY2UgdG9cblx0ICogdGhlIGNvbGxlY3Rpb24gb2YgbWFudWFsIGRlY29yYXRvcnMgc3RvcmVkIGluIHRoZSBsaW5rIGNvbW1hbmQuXG5cdCAqIEByZXR1cm5zIHttb2R1bGU6dWkvdmlld2NvbGxlY3Rpb25+Vmlld0NvbGxlY3Rpb259IFRoZSBjaGlsZHJlbiBvZiBsaW5rIGZvcm0gdmlldy5cblx0ICovXG5cdF9jcmVhdGVGb3JtQ2hpbGRyZW4oIG1hbnVhbERlY29yYXRvcnMgKSB7XG5cdFx0Y29uc3QgY2hpbGRyZW4gPSB0aGlzLmNyZWF0ZUNvbGxlY3Rpb24oKTtcblxuXHRcdGNoaWxkcmVuLmFkZCggdGhpcy5sYWJlbElucHV0VmlldyApO1xuXHRcdGNoaWxkcmVuLmFkZCggdGhpcy50eXBlSW5wdXRWaWV3ICk7XG5cblx0XHRpZiAoIG1hbnVhbERlY29yYXRvcnMubGVuZ3RoICkge1xuXHRcdFx0Y29uc3QgYWRkaXRpb25hbEJ1dHRvbnNWaWV3ID0gbmV3IFZpZXcoKTtcblxuXHRcdFx0YWRkaXRpb25hbEJ1dHRvbnNWaWV3LnNldFRlbXBsYXRlKCB7XG5cdFx0XHRcdHRhZzogJ3VsJyxcblx0XHRcdFx0Y2hpbGRyZW46IHRoaXMuX21hbnVhbERlY29yYXRvclN3aXRjaGVzLm1hcCggc3dpdGNoQnV0dG9uID0+ICgge1xuXHRcdFx0XHRcdHRhZzogJ2xpJyxcblx0XHRcdFx0XHRjaGlsZHJlbjogWyBzd2l0Y2hCdXR0b24gXSxcblx0XHRcdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdFx0XHRjbGFzczogW1xuXHRcdFx0XHRcdFx0XHQnY2snLFxuXHRcdFx0XHRcdFx0XHQnY2stbGlzdF9faXRlbSdcblx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gKSApLFxuXHRcdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdFx0Y2xhc3M6IFtcblx0XHRcdFx0XHRcdCdjaycsXG5cdFx0XHRcdFx0XHQnY2stcmVzZXQnLFxuXHRcdFx0XHRcdFx0J2NrLWxpc3QnXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0XHRjaGlsZHJlbi5hZGQoIGFkZGl0aW9uYWxCdXR0b25zVmlldyApO1xuXHRcdH1cblxuXHRcdGNoaWxkcmVuLmFkZCggdGhpcy5zYXZlQnV0dG9uVmlldyApO1xuXHRcdGNoaWxkcmVuLmFkZCggdGhpcy5jYW5jZWxCdXR0b25WaWV3ICk7XG5cblx0XHRyZXR1cm4gY2hpbGRyZW47XG5cdH1cbn1cblxuLyoqXG4gKiBGaXJlZCB3aGVuIHRoZSBmb3JtIHZpZXcgaXMgc3VibWl0dGVkICh3aGVuIG9uZSBvZiB0aGUgY2hpbGRyZW4gdHJpZ2dlcmVkIHRoZSBzdWJtaXQgZXZlbnQpLFxuICogZm9yIGV4YW1wbGUgd2l0aCBhIGNsaWNrIG9uIHtAbGluayAjc2F2ZUJ1dHRvblZpZXd9LlxuICpcbiAqIEBldmVudCBzdWJtaXRcbiAqL1xuXG4vKipcbiAqIEZpcmVkIHdoZW4gdGhlIGZvcm0gdmlldyBpcyBjYW5jZWxlZCwgZm9yIGV4YW1wbGUgd2l0aCBhIGNsaWNrIG9uIHtAbGluayAjY2FuY2VsQnV0dG9uVmlld30uXG4gKlxuICogQGV2ZW50IGNhbmNlbFxuICovXG4iLCIvKipcbiAqIEBsaWNlbnNlIENvcHlyaWdodCAoYykgMjAwMy0yMDIxLCBDS1NvdXJjZSAtIEZyZWRlcmljbyBLbmFiYmVuLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogRm9yIGxpY2Vuc2luZywgc2VlIExJQ0VOU0UubWQgb3IgaHR0cHM6Ly9ja2VkaXRvci5jb20vbGVnYWwvY2tlZGl0b3Itb3NzLWxpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGluay91aS9saW5rYWN0aW9uc3ZpZXdcbiAqL1xuXG5pbXBvcnQgeyBCdXR0b25WaWV3LCBWaWV3LCBWaWV3Q29sbGVjdGlvbiwgRm9jdXNDeWNsZXIgfSBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LXVpL3NyYyc7XG5pbXBvcnQgeyBGb2N1c1RyYWNrZXIsIEtleXN0cm9rZUhhbmRsZXIgfSBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LXV0aWxzL3NyYyc7XG5pbXBvcnQgeyBpY29ucyB9IGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtY29yZS9zcmMnO1xuXG5pbXBvcnQgeyBlbnN1cmVTYWZlVXJsIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vLyBTZWU6ICM4ODMzLlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNrZWRpdG9yNS1ydWxlcy9ja2VkaXRvci1pbXBvcnRzXG5pbXBvcnQgJ0Bja2VkaXRvci9ja2VkaXRvcjUtdWkvdGhlbWUvY29tcG9uZW50cy9yZXNwb25zaXZlLWZvcm0vcmVzcG9uc2l2ZWZvcm0uY3NzJztcbmltcG9ydCAnLi4vLi4vdGhlbWUvdGVtcGxhdGVhY3Rpb25zLmNzcyc7XG5cbmltcG9ydCB1bmxpbmtJY29uIGZyb20gJy4uLy4uL3RoZW1lL2ljb25zL3VubGluay5zdmcnO1xuXG4vKipcbiAqIFRoZSBsaW5rIGFjdGlvbnMgdmlldyBjbGFzcy4gVGhpcyB2aWV3IGRpc3BsYXlzIHRoZSBsaW5rIHByZXZpZXcsIGFsbG93c1xuICogdW5saW5raW5nIG9yIGVkaXRpbmcgdGhlIGxpbmsuXG4gKlxuICogQGV4dGVuZHMgbW9kdWxlOnVpL3ZpZXd+Vmlld1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZW1wbGF0ZVNhdmVWaWV3IGV4dGVuZHMgVmlldyB7XG5cdC8qKlxuXHQgKiBAaW5oZXJpdERvY1xuXHQgKi9cblx0Y29uc3RydWN0b3IoIGxvY2FsZSApIHtcblx0XHRzdXBlciggbG9jYWxlICk7XG5cblx0XHRjb25zdCB0ID0gbG9jYWxlLnQ7XG5cblxuXG5cdFx0LyoqXG5cdFx0ICogQW4gaW5zdGFuY2Ugb2YgdGhlIHtAbGluayBtb2R1bGU6dXRpbHMva2V5c3Ryb2tlaGFuZGxlcn5LZXlzdHJva2VIYW5kbGVyfS5cblx0XHQgKlxuXHRcdCAqIEByZWFkb25seVxuXHRcdCAqIEBtZW1iZXIge21vZHVsZTp1dGlscy9rZXlzdHJva2VoYW5kbGVyfktleXN0cm9rZUhhbmRsZXJ9XG5cdFx0ICovXG5cdFx0dGhpcy5rZXlzdHJva2VzID0gbmV3IEtleXN0cm9rZUhhbmRsZXIoKTtcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBocmVmIHByZXZpZXcgdmlldy5cblx0XHQgKlxuXHRcdCAqIEBtZW1iZXIge21vZHVsZTp1aS92aWV3flZpZXd9XG5cdFx0ICovXG5cdFx0dGhpcy5wcmV2aWV3QnV0dG9uVmlldyA9IHRoaXMuX2NyZWF0ZVByZXZpZXdCdXR0b24oKTtcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSB1bmxpbmsgYnV0dG9uIHZpZXcuXG5cdFx0ICpcblx0XHQgKiBAbWVtYmVyIHttb2R1bGU6dWkvYnV0dG9uL2J1dHRvbnZpZXd+QnV0dG9uVmlld31cblx0XHQgKi9cblx0XHR0aGlzLnVubGlua0J1dHRvblZpZXcgPSB0aGlzLl9jcmVhdGVCdXR0b24oIHQoICdDYW5jZWwgVGVtcGxhdGUgVmFyJyApLCB1bmxpbmtJY29uLCAnY2FuY2VsVGVtcGxhdGUnICk7XG5cblx0XHQvKipcblx0XHQgKiBUaGUgZWRpdCBsaW5rIGJ1dHRvbiB2aWV3LlxuXHRcdCAqXG5cdFx0ICogQG1lbWJlciB7bW9kdWxlOnVpL2J1dHRvbi9idXR0b252aWV3fkJ1dHRvblZpZXd9XG5cdFx0ICovXG5cdFx0dGhpcy5lZGl0QnV0dG9uVmlldyA9IHRoaXMuX2NyZWF0ZUJ1dHRvbiggdCggJ0VkaXQgVGVtcGxhdGUgVmFyJyApLCBpY29ucy5wZW5jaWwsICdlZGl0JyApO1xuXG5cdFx0LyoqXG5cdFx0ICogVGhlIHZhbHVlIG9mIHRoZSBcImhyZWZcIiBhdHRyaWJ1dGUgb2YgdGhlIGxpbmsgdG8gdXNlIGluIHRoZSB7QGxpbmsgI3ByZXZpZXdCdXR0b25WaWV3fS5cblx0XHQgKlxuXHRcdCAqIEBvYnNlcnZhYmxlXG5cdFx0ICogQG1lbWJlciB7U3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0KCAnZGF0YS10ZW1wbGF0ZS12YXInICk7XG5cblxuXG5cdFx0dGhpcy5zZXRUZW1wbGF0ZSgge1xuXHRcdFx0dGFnOiAnZGl2JyxcblxuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRjbGFzczogW1xuXHRcdFx0XHRcdCdjaycsXG5cdFx0XHRcdFx0J2NrLWxpbmstYWN0aW9ucycsXG5cdFx0XHRcdFx0J2NrLXJlc3BvbnNpdmUtZm9ybSdcblx0XHRcdFx0XSxcblxuXHRcdFx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vY2tlZGl0b3IvY2tlZGl0b3I1LWxpbmsvaXNzdWVzLzkwXG5cdFx0XHRcdHRhYmluZGV4OiAnLTEnXG5cdFx0XHR9LFxuXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHR0aGlzLnByZXZpZXdCdXR0b25WaWV3LFxuXHRcdFx0XHR0aGlzLmVkaXRCdXR0b25WaWV3LFxuXHRcdFx0XHR0aGlzLnVubGlua0J1dHRvblZpZXdcblx0XHRcdF1cblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogQGluaGVyaXREb2Ncblx0ICovXG5cdHJlbmRlcigpIHtcblx0XHRzdXBlci5yZW5kZXIoKTtcblxuXHRcdGNvbnN0IGNoaWxkVmlld3MgPSBbXG5cdFx0XHR0aGlzLnByZXZpZXdCdXR0b25WaWV3LFxuXHRcdFx0dGhpcy5lZGl0QnV0dG9uVmlldyxcblx0XHRcdHRoaXMudW5saW5rQnV0dG9uVmlld1xuXHRcdF07XG5cblx0XHRjaGlsZFZpZXdzLmZvckVhY2goIHYgPT4ge1xuXHRcdH0gKTtcblxuXHRcdC8vIFN0YXJ0IGxpc3RlbmluZyBmb3IgdGhlIGtleXN0cm9rZXMgY29taW5nIGZyb20gI2VsZW1lbnQuXG5cdFx0dGhpcy5rZXlzdHJva2VzLmxpc3RlblRvKCB0aGlzLmVsZW1lbnQgKTtcblx0fVxuXG5cblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIGJ1dHRvbiB2aWV3LlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gbGFiZWwgVGhlIGJ1dHRvbiBsYWJlbC5cblx0ICogQHBhcmFtIHtTdHJpbmd9IGljb24gVGhlIGJ1dHRvbiBpY29uLlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gW2V2ZW50TmFtZV0gQW4gZXZlbnQgbmFtZSB0aGF0IHRoZSBgQnV0dG9uVmlldyNleGVjdXRlYCBldmVudCB3aWxsIGJlIGRlbGVnYXRlZCB0by5cblx0ICogQHJldHVybnMge21vZHVsZTp1aS9idXR0b24vYnV0dG9udmlld35CdXR0b25WaWV3fSBUaGUgYnV0dG9uIHZpZXcgaW5zdGFuY2UuXG5cdCAqL1xuXHRfY3JlYXRlQnV0dG9uKCBsYWJlbCwgaWNvbiwgZXZlbnROYW1lICkge1xuXHRcdGNvbnN0IGJ1dHRvbiA9IG5ldyBCdXR0b25WaWV3KCB0aGlzLmxvY2FsZSApO1xuXG5cdFx0YnV0dG9uLnNldCgge1xuXHRcdFx0bGFiZWwsXG5cdFx0XHRpY29uLFxuXHRcdFx0dG9vbHRpcDogdHJ1ZVxuXHRcdH0gKTtcblxuXHRcdGJ1dHRvbi5kZWxlZ2F0ZSggJ2V4ZWN1dGUnICkudG8oIHRoaXMsIGV2ZW50TmFtZSApO1xuXG5cdFx0cmV0dXJuIGJ1dHRvbjtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgbGluayBocmVmIHByZXZpZXcgYnV0dG9uLlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcmV0dXJucyB7bW9kdWxlOnVpL2J1dHRvbi9idXR0b252aWV3fkJ1dHRvblZpZXd9IFRoZSBidXR0b24gdmlldyBpbnN0YW5jZS5cblx0ICovXG5cdF9jcmVhdGVQcmV2aWV3QnV0dG9uKCkge1xuXHRcdGNvbnN0IGJ1dHRvbiA9IG5ldyBCdXR0b25WaWV3KCB0aGlzLmxvY2FsZSApO1xuXHRcdGNvbnN0IGJpbmQgPSB0aGlzLmJpbmRUZW1wbGF0ZTtcblx0XHRjb25zdCB0ID0gdGhpcy50O1xuXG5cdFx0YnV0dG9uLnNldCgge1xuXHRcdFx0d2l0aFRleHQ6IHRydWUsXG5cdFx0XHR0b29sdGlwOiB0KCAndGVtcGxhdGUgdmFsaWFibGUgaWQnIClcblx0XHR9ICk7XG5cblx0XHRidXR0b24uZXh0ZW5kVGVtcGxhdGUoIHtcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0Y2xhc3M6IFtcblx0XHRcdFx0XHQnY2snLFxuXHRcdFx0XHRcdCdjay1saW5rLWFjdGlvbnNfX3ByZXZpZXcnXG5cdFx0XHRcdF0sXG5cdFx0XHRcdGlkOiBiaW5kLnRvKCAnaWQnLCBpZCA9PiBpZCAgKSAsXG5cdFx0XHRcdHRhcmdldDogJ19ibGFuaycsXG5cdFx0XHRcdHJlbDogJ25vb3BlbmVyIG5vcmVmZXJyZXInXG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0YnV0dG9uLmJpbmQoICdsYWJlbCcgKS50byggdGhpcywgJ2RhdGEtdGVtcGxhdGUtdmFyJywgaWQgPT4ge1xuXHRcdFx0cmV0dXJuIGlkIHx8IHQoICdUaGlzIHZhcmlhYmxlIGhhcyBubyBpZCcgKTtcblx0XHR9ICk7XG5cblx0XHRidXR0b24uYmluZCggJ2lzRW5hYmxlZCcgKS50byggdGhpcywgJ2RhdGEtdGVtcGxhdGUtdmFyJywgaWQgPT4gISFpZCApO1xuXG5cdFx0YnV0dG9uLnRlbXBsYXRlLnRhZyA9ICdzcGFuJztcblx0XHRidXR0b24udGVtcGxhdGUuZXZlbnRMaXN0ZW5lcnMgPSB7fTtcblxuXHRcdHJldHVybiBidXR0b247XG5cdH1cbn1cblxuLyoqXG4gKiBGaXJlZCB3aGVuIHRoZSB7QGxpbmsgI2VkaXRCdXR0b25WaWV3fSBpcyBjbGlja2VkLlxuICpcbiAqIEBldmVudCBlZGl0XG4gKi9cblxuLyoqXG4gKiBGaXJlZCB3aGVuIHRoZSB7QGxpbmsgI3VubGlua0J1dHRvblZpZXd9IGlzIGNsaWNrZWQuXG4gKlxuICogQGV2ZW50IHVubGlua1xuICovXG4iLCIvKipcbiAqIEBsaWNlbnNlIENvcHlyaWdodCAoYykgMjAwMy0yMDIxLCBDS1NvdXJjZSAtIEZyZWRlcmljbyBLbmFiYmVuLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogRm9yIGxpY2Vuc2luZywgc2VlIExJQ0VOU0UubWQgb3IgaHR0cHM6Ly9ja2VkaXRvci5jb20vbGVnYWwvY2tlZGl0b3Itb3NzLWxpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGluay91dGlsc1xuICovXG5cbmltcG9ydCB7IHVwcGVyRmlyc3QgfSBmcm9tICdsb2Rhc2gtZXMnO1xuXG5jb25zdCBBVFRSSUJVVEVfV0hJVEVTUEFDRVMgPSAvW1xcdTAwMDAtXFx1MDAyMFxcdTAwQTBcXHUxNjgwXFx1MTgwRVxcdTIwMDAtXFx1MjAyOVxcdTIwNWZcXHUzMDAwXS9nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnRyb2wtcmVnZXhcbmNvbnN0IFNBRkVfVVJMID0gL14oPzooPzpodHRwcz98ZnRwcz98bWFpbHRvKTp8W15hLXpdfFthLXorLi1dKyg/OlteYS16Ky46LV18JCkpL2k7XG5cbi8vIFNpbXBsaWZpZWQgZW1haWwgdGVzdCAtIHNob3VsZCBiZSBydW4gb3ZlciBwcmV2aW91c2x5IGZvdW5kIFVSTC5cbmNvbnN0IEVNQUlMX1JFR19FWFAgPSAvXltcXFNdK0AoKD8hWy1fXSkoPzpbLVxcd1xcdTAwYTEtXFx1ZmZmZl17MCw2M31bXi1fXVxcLikpKyg/OlthLXpcXHUwMGExLVxcdWZmZmZdezIsfSkkL2k7XG5cbi8vIFRoZSByZWdleCBjaGVja3MgZm9yIHRoZSBwcm90b2NvbCBzeW50YXggKCd4eHh4Oi8vJyBvciAneHh4eDonKVxuLy8gb3Igbm9uLXdvcmQgY2hhcmFjdGVycyBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBsaW5rICgnLycsICcjJyBldGMuKS5cbmNvbnN0IFBST1RPQ09MX1JFR19FWFAgPSAvXigoXFx3KzooXFwvezIsfSk/KXwoXFxXKSkvaTtcbmNvbnN0IEhJR0hMSUdIVF9DTEFTUyA9ICdjay10ZW1wbGF0ZSc7XG4vKipcbiAqIEEga2V5c3Ryb2tlIHVzZWQgYnkgdGhlIHtAbGluayBtb2R1bGU6bGluay9saW5rdWl+VGVtcGxhdGVVaSBsaW5rIFVJIGZlYXR1cmV9LlxuICovXG5leHBvcnQgY29uc3QgVEVNUExBVEVfS0VZU1RST0tFID0gJ0N0cmwrRSc7XG5leHBvcnQgY29uc3QgU0FWRV9LRVlTVFJPS0UgPSAnQ3RybCtTaGlmdCtTJztcblxuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiBhIGdpdmVuIHZpZXcgbm9kZSBpcyB0aGUgbGluayBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmVuZ2luZS92aWV3L25vZGV+Tm9kZX0gbm9kZVxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xpbmtFbGVtZW50KCBub2RlICkge1xuXHRyZXR1cm4gbm9kZS5pcyggJ2F0dHJpYnV0ZUVsZW1lbnQnICkgJiYgISFub2RlLmdldEN1c3RvbVByb3BlcnR5KCAndGVtcGxhdGUnICk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGxpbmsge0BsaW5rIG1vZHVsZTplbmdpbmUvdmlldy9hdHRyaWJ1dGVlbGVtZW50fkF0dHJpYnV0ZUVsZW1lbnR9IHdpdGggdGhlIHByb3ZpZGVkIGBocmVmYCBhdHRyaWJ1dGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhyZWZcbiAqIEBwYXJhbSB7bW9kdWxlOmVuZ2luZS9jb252ZXJzaW9uL2Rvd25jYXN0ZGlzcGF0Y2hlcn5Eb3duY2FzdENvbnZlcnNpb25BcGl9IGNvbnZlcnNpb25BcGlcbiAqIEByZXR1cm5zIHttb2R1bGU6ZW5naW5lL3ZpZXcvYXR0cmlidXRlZWxlbWVudH5BdHRyaWJ1dGVFbGVtZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGVtcGxhdGVFbGVtZW50KCBpZCwgeyB3cml0ZXIgfSApIHtcblx0Ly9pZihpZCAhPT0gbnVsbCl7XG5cblx0XHQvLyBQcmlvcml0eSA1IC0gaHR0cHM6Ly9naXRodWIuY29tL2NrZWRpdG9yL2NrZWRpdG9yNS1saW5rL2lzc3Vlcy8xMjEuXG5cdFx0Y29uc3QgbGlua0VsZW1lbnQgPSB3cml0ZXIuY3JlYXRlQXR0cmlidXRlRWxlbWVudCggJ3NwYW4nLCAgeyBjbGFzczogSElHSExJR0hUX0NMQVNTICwgJ2RhdGEtdGVtcGxhdGUtdmFyJyA6IGlkIH0sIHsgcHJpb3JpdHk6IDUgfSApO1xuXHRcdHdyaXRlci5zZXRDdXN0b21Qcm9wZXJ0eSggJ3RlbXBsYXRlJywgdHJ1ZSwgbGlua0VsZW1lbnQgKTtcblxuXHRcdHJldHVybiBsaW5rRWxlbWVudDtcblx0Ly99XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHNhZmUgVVJMIGJhc2VkIG9uIGEgZ2l2ZW4gdmFsdWUuXG4gKlxuICogQSBVUkwgaXMgY29uc2lkZXJlZCBzYWZlIGlmIGl0IGlzIHNhZmUgZm9yIHRoZSB1c2VyIChkb2VzIG5vdCBjb250YWluIGFueSBtYWxpY2lvdXMgY29kZSkuXG4gKlxuICogSWYgYSBVUkwgaXMgY29uc2lkZXJlZCB1bnNhZmUsIGEgc2ltcGxlIGBcIiNcImAgaXMgcmV0dXJuZWQuXG4gKlxuICogQHByb3RlY3RlZFxuICogQHBhcmFtIHsqfSB1cmxcbiAqIEByZXR1cm5zIHtTdHJpbmd9IFNhZmUgVVJMLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5zdXJlU2FmZVVybCggdXJsICkge1xuXHR1cmwgPSBTdHJpbmcoIHVybCApO1xuXG5cdHJldHVybiBpc1NhZmVVcmwoIHVybCApID8gdXJsIDogJyMnO1xufVxuXG4vLyBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gVVJMIGlzIHNhZmUgZm9yIHRoZSB1c2VyIChkb2VzIG5vdCBjb250YWluIGFueSBtYWxpY2lvdXMgY29kZSkuXG4vL1xuLy8gQHBhcmFtIHtTdHJpbmd9IHVybCBVUkwgdG8gY2hlY2suXG5mdW5jdGlvbiBpc1NhZmVVcmwoIHVybCApIHtcblx0Y29uc3Qgbm9ybWFsaXplZFVybCA9IHVybC5yZXBsYWNlKCBBVFRSSUJVVEVfV0hJVEVTUEFDRVMsICcnICk7XG5cblx0cmV0dXJuIG5vcm1hbGl6ZWRVcmwubWF0Y2goIFNBRkVfVVJMICk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt+TGlua0NvbmZpZyNkZWNvcmF0b3JzIGBjb25maWcubGluay5kZWNvcmF0b3JzYH0gY29uZmlndXJhdGlvbiBwcm9jZXNzZWRcbiAqIHRvIHJlc3BlY3QgdGhlIGxvY2FsZSBvZiB0aGUgZWRpdG9yLCBpLmUuIHRvIGRpc3BsYXkgdGhlIHtAbGluayBtb2R1bGU6bGluay9saW5rfkxpbmtEZWNvcmF0b3JNYW51YWxEZWZpbml0aW9uIGxhYmVsfVxuICogaW4gdGhlIGNvcnJlY3QgbGFuZ3VhZ2UuXG4gKlxuICogKipOb3RlKio6IE9ubHkgdGhlIGZldyBtb3N0IGNvbW1vbmx5IHVzZWQgbGFiZWxzIGFyZSB0cmFuc2xhdGVkIGF1dG9tYXRpY2FsbHkuIE90aGVyIGxhYmVscyBzaG91bGQgYmUgbWFudWFsbHlcbiAqIHRyYW5zbGF0ZWQgaW4gdGhlIHtAbGluayBtb2R1bGU6bGluay9saW5rfkxpbmtDb25maWcjZGVjb3JhdG9ycyBgY29uZmlnLmxpbmsuZGVjb3JhdG9yc2B9IGNvbmZpZ3VyYXRpb24uXG4gKlxuICogQHBhcmFtIHttb2R1bGU6dXRpbHMvbG9jYWxlfkxvY2FsZSN0fSB0IHNob3J0aGFuZCBmb3Ige0BsaW5rIG1vZHVsZTp1dGlscy9sb2NhbGV+TG9jYWxlI3QgTG9jYWxlI3R9XG4gKiBAcGFyYW0ge0FycmF5Ljxtb2R1bGU6bGluay9saW5rfkxpbmtEZWNvcmF0b3JEZWZpbml0aW9uPn0gVGhlIGRlY29yYXRvciByZWZlcmVuY2VcbiAqIHdoZXJlIHRoZSBsYWJlbCB2YWx1ZXMgc2hvdWxkIGJlIGxvY2FsaXplZC5cbiAqIEByZXR1cm5zIHtBcnJheS48bW9kdWxlOmxpbmsvbGlua35MaW5rRGVjb3JhdG9yRGVmaW5pdGlvbj59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbGl6ZWREZWNvcmF0b3JzKCB0LCBkZWNvcmF0b3JzICkge1xuXHRjb25zdCBsb2NhbGl6ZWREZWNvcmF0b3JzTGFiZWxzID0ge1xuXHRcdCdPcGVuIGluIGEgbmV3IHRhYic6IHQoICdPcGVuIGluIGEgbmV3IHRhYicgKSxcblx0XHQnRG93bmxvYWRhYmxlJzogdCggJ0Rvd25sb2FkYWJsZScgKVxuXHR9O1xuXG5cdGRlY29yYXRvcnMuZm9yRWFjaCggZGVjb3JhdG9yID0+IHtcblx0XHRpZiAoIGRlY29yYXRvci5sYWJlbCAmJiBsb2NhbGl6ZWREZWNvcmF0b3JzTGFiZWxzWyBkZWNvcmF0b3IubGFiZWwgXSApIHtcblx0XHRcdGRlY29yYXRvci5sYWJlbCA9IGxvY2FsaXplZERlY29yYXRvcnNMYWJlbHNbIGRlY29yYXRvci5sYWJlbCBdO1xuXHRcdH1cblx0XHRyZXR1cm4gZGVjb3JhdG9yO1xuXHR9ICk7XG5cblx0cmV0dXJuIGRlY29yYXRvcnM7XG59XG5cbi8qKlxuICogQ29udmVydHMgYW4gb2JqZWN0IHdpdGggZGVmaW5lZCBkZWNvcmF0b3JzIHRvIGEgbm9ybWFsaXplZCBhcnJheSBvZiBkZWNvcmF0b3JzLiBUaGUgYGlkYCBrZXkgaXMgYWRkZWQgZm9yIGVhY2ggZGVjb3JhdG9yIGFuZFxuICogaXMgdXNlZCBhcyB0aGUgYXR0cmlidXRlJ3MgbmFtZSBpbiB0aGUgbW9kZWwuXG4gKlxuICogQHBhcmFtIHtPYmplY3QuPFN0cmluZywgbW9kdWxlOmxpbmsvbGlua35MaW5rRGVjb3JhdG9yRGVmaW5pdGlvbj59IGRlY29yYXRvcnNcbiAqIEByZXR1cm5zIHtBcnJheS48bW9kdWxlOmxpbmsvbGlua35MaW5rRGVjb3JhdG9yRGVmaW5pdGlvbj59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVEZWNvcmF0b3JzKCBkZWNvcmF0b3JzICkge1xuXHRjb25zdCByZXRBcnJheSA9IFtdO1xuXG5cdGlmICggZGVjb3JhdG9ycyApIHtcblx0XHRmb3IgKCBjb25zdCBbIGtleSwgdmFsdWUgXSBvZiBPYmplY3QuZW50cmllcyggZGVjb3JhdG9ycyApICkge1xuXHRcdFx0Y29uc3QgZGVjb3JhdG9yID0gT2JqZWN0LmFzc2lnbihcblx0XHRcdFx0e30sXG5cdFx0XHRcdHZhbHVlLFxuXHRcdFx0XHR7IGlkOiBgbGluayR7IHVwcGVyRmlyc3QoIGtleSApIH1gIH1cblx0XHRcdCk7XG5cdFx0XHRyZXRBcnJheS5wdXNoKCBkZWNvcmF0b3IgKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcmV0QXJyYXk7XG59XG5cbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHNwZWNpZmllZCBgZWxlbWVudGAgaXMgYW4gaW1hZ2UgYW5kIGl0IGNhbiBiZSBsaW5rZWQgKHRoZSBlbGVtZW50IGFsbG93cyBoYXZpbmcgdGhlIGBsaW5rSHJlZmAgYXR0cmlidXRlKS5cbiAqXG4gKiBAcGFyYW1zIHttb2R1bGU6ZW5naW5lL21vZGVsL2VsZW1lbnR+RWxlbWVudHxudWxsfSBlbGVtZW50XG4gKiBAcGFyYW1zIHttb2R1bGU6ZW5naW5lL21vZGVsL3NjaGVtYX5TY2hlbWF9IHNjaGVtYVxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0ltYWdlQWxsb3dlZCggZWxlbWVudCwgc2NoZW1hICkge1xuXHRpZiAoICFlbGVtZW50ICkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJldHVybiBlbGVtZW50LmlzKCAnZWxlbWVudCcsICdpbWFnZScgKSAmJiBzY2hlbWEuY2hlY2tBdHRyaWJ1dGUoICdpbWFnZScsICdsaW5rSHJlZicgKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgc3BlY2lmaWVkIGB2YWx1ZWAgaXMgYW4gZW1haWwuXG4gKlxuICogQHBhcmFtcyB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0VtYWlsKCB2YWx1ZSApIHtcblx0cmV0dXJuIEVNQUlMX1JFR19FWFAudGVzdCggdmFsdWUgKTtcbn1cblxuLyoqXG4gKiBBZGRzIHRoZSBwcm90b2NvbCBwcmVmaXggdG8gdGhlIHNwZWNpZmllZCBgbGlua2Agd2hlbjpcbiAqXG4gKiAqIGl0IGRvZXMgbm90IGNvbnRhaW4gaXQgYWxyZWFkeSwgYW5kIHRoZXJlIGlzIGEge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt+TGlua0NvbmZpZyNkZWZhdWx0UHJvdG9jb2wgYGRlZmF1bHRQcm90b2NvbGAgfVxuICogY29uZmlndXJhdGlvbiB2YWx1ZSBwcm92aWRlZCxcbiAqICogb3IgdGhlIGxpbmsgaXMgYW4gZW1haWwgYWRkcmVzcy5cbiAqXG4gKlxuICogQHBhcmFtcyB7U3RyaW5nfSBsaW5rXG4gKiBAcGFyYW1zIHtTdHJpbmd9IGRlZmF1bHRQcm90b2NvbFxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRMaW5rUHJvdG9jb2xJZkFwcGxpY2FibGUoIGxpbmssIGRlZmF1bHRQcm90b2NvbCApIHtcblx0Y29uc3QgcHJvdG9jb2wgPSBpc0VtYWlsKCBsaW5rICkgPyAnbWFpbHRvOicgOiBkZWZhdWx0UHJvdG9jb2w7XG5cdGNvbnN0IGlzUHJvdG9jb2xOZWVkZWQgPSAhIXByb3RvY29sICYmICFQUk9UT0NPTF9SRUdfRVhQLnRlc3QoIGxpbmsgKTtcblxuXHRyZXR1cm4gbGluayAmJiBpc1Byb3RvY29sTmVlZGVkID8gcHJvdG9jb2wgKyBsaW5rIDogbGluaztcbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG4vKipcbiAqIEEgcGx1Z2luIHRoYXQgY29udmVydHMgY3VzdG9tIGF0dHJpYnV0ZXMgZm9yIGVsZW1lbnRzIHRoYXQgYXJlIHdyYXBwZWQgaW4gPGZpZ3VyZT4gaW4gdGhlIHZpZXcuXG4gKi9cbmNsYXNzIEN1c3RvbUZpZ3VyZUF0dHJpYnV0ZXMge1xuXHQvKipcblx0ICogUGx1Z2luJ3MgY29uc3RydWN0b3IgLSByZWNlaXZlcyBhbiBlZGl0b3IgaW5zdGFuY2Ugb24gY3JlYXRpb24uXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggZWRpdG9yICkge1xuXHRcdC8vIFNhdmUgcmVmZXJlbmNlIHRvIHRoZSBlZGl0b3IuXG5cdFx0dGhpcy5lZGl0b3IgPSBlZGl0b3I7XG5cdH1cblxuXHQvKipcblx0ICogU2V0cyB0aGUgY29udmVyc2lvbiB1cCBhbmQgZXh0ZW5kcyB0aGUgdGFibGUgJiBpbWFnZSBmZWF0dXJlcyBzY2hlbWEuXG5cdCAqXG5cdCAqIFNjaGVtYSBleHRlbmRpbmcgbXVzdCBiZSBkb25lIGluIHRoZSBcImFmdGVySW5pdCgpXCIgY2FsbCBiZWNhdXNlIHBsdWdpbnMgZGVmaW5lIHRoZWlyIHNjaGVtYSBpbiBcImluaXQoKVwiLlxuXHQgKi9cblx0YWZ0ZXJJbml0KCkge1xuXHRcdGNvbnN0IGVkaXRvciA9IHRoaXMuZWRpdG9yO1xuXG5cdFx0Ly8gRGVmaW5lIG9uIHdoaWNoIGVsZW1lbnRzIHRoZSBDU1MgY2xhc3NlcyBzaG91bGQgYmUgcHJlc2VydmVkOlxuXHRcdHNldHVwQ3VzdG9tQ2xhc3NDb252ZXJzaW9uKCAnaW1nJywgJ2ltYWdlJywgZWRpdG9yICk7XG5cdFx0c2V0dXBDdXN0b21DbGFzc0NvbnZlcnNpb24oICd0YWJsZScsICd0YWJsZScsIGVkaXRvciApO1xuXG5cdFx0ZWRpdG9yLmNvbnZlcnNpb24uZm9yKCAndXBjYXN0JyApLmFkZCggdXBjYXN0Q3VzdG9tQ2xhc3NlcyggJ2ZpZ3VyZScgKSwgeyBwcmlvcml0eTogJ2xvdycgfSApO1xuXG5cdFx0Ly8gRGVmaW5lIGN1c3RvbSBhdHRyaWJ1dGVzIHRoYXQgc2hvdWxkIGJlIHByZXNlcnZlZC5cblx0XHRzZXR1cEN1c3RvbUF0dHJpYnV0ZUNvbnZlcnNpb24oICdpbWcnLCAnaW1hZ2UnLCAnaWQnLCBlZGl0b3IgKTtcblx0XHRzZXR1cEN1c3RvbUF0dHJpYnV0ZUNvbnZlcnNpb24oICd0YWJsZScsICd0YWJsZScsICdpZCcsIGVkaXRvciApO1xuXHR9XG59XG5cbi8qKlxuICogU2V0cyB1cCBhIGNvbnZlcnNpb24gdGhhdCBwcmVzZXJ2ZXMgY2xhc3NlcyBvbiA8aW1nPiBhbmQgPHRhYmxlPiBlbGVtZW50cy5cbiAqL1xuZnVuY3Rpb24gc2V0dXBDdXN0b21DbGFzc0NvbnZlcnNpb24oIHZpZXdFbGVtZW50TmFtZSwgbW9kZWxFbGVtZW50TmFtZSwgZWRpdG9yICkge1xuXHQvLyBUaGUgJ2N1c3RvbUNsYXNzJyBhdHRyaWJ1dGUgc3RvcmVzIGN1c3RvbSBjbGFzc2VzIGZyb20gdGhlIGRhdGEgaW4gdGhlIG1vZGVsIHNvIHRoYXQgc2NoZW1hIGRlZmluaXRpb25zIGFsbG93IHRoaXMgYXR0cmlidXRlLlxuXHRlZGl0b3IubW9kZWwuc2NoZW1hLmV4dGVuZCggbW9kZWxFbGVtZW50TmFtZSwgeyBhbGxvd0F0dHJpYnV0ZXM6IFsgJ2N1c3RvbUNsYXNzJyBdIH0gKTtcblxuXHQvLyBEZWZpbmVzIHVwY2FzdCBjb252ZXJ0ZXJzIGZvciB0aGUgPGltZz4gYW5kIDx0YWJsZT4gZWxlbWVudHMgd2l0aCBhIFwibG93XCIgcHJpb3JpdHkgc28gdGhleSBhcmUgcnVuIGFmdGVyIHRoZSBkZWZhdWx0IGNvbnZlcnRlcnMuXG5cdGVkaXRvci5jb252ZXJzaW9uLmZvciggJ3VwY2FzdCcgKS5hZGQoIHVwY2FzdEN1c3RvbUNsYXNzZXMoIHZpZXdFbGVtZW50TmFtZSApLCB7IHByaW9yaXR5OiAnbG93JyB9ICk7XG5cblx0Ly8gRGVmaW5lcyBkb3duY2FzdCBjb252ZXJ0ZXJzIGZvciBhIG1vZGVsIGVsZW1lbnQgd2l0aCBhIFwibG93XCIgcHJpb3JpdHkgc28gdGhleSBhcmUgcnVuIGFmdGVyIHRoZSBkZWZhdWx0IGNvbnZlcnRlcnMuXG5cdC8vIFVzZSBgZG93bmNhc3RDdXN0b21DbGFzc2VzVG9GaWd1cmVgIGlmIHlvdSB3YW50IHRvIGtlZXAgeW91ciBjbGFzc2VzIG9uIDxmaWd1cmU+IGVsZW1lbnQgb3IgYGRvd25jYXN0Q3VzdG9tQ2xhc3Nlc1RvQ2hpbGRgXG5cdC8vIGlmIHlvdSB3b3VsZCBsaWtlIHRvIGtlZXAgeW91ciBjbGFzc2VzIG9uIGEgPGZpZ3VyZT4gY2hpbGQgZWxlbWVudCwgaS5lLiA8aW1nPi5cblx0ZWRpdG9yLmNvbnZlcnNpb24uZm9yKCAnZG93bmNhc3QnICkuYWRkKCBkb3duY2FzdEN1c3RvbUNsYXNzZXNUb0ZpZ3VyZSggbW9kZWxFbGVtZW50TmFtZSApLCB7IHByaW9yaXR5OiAnbG93JyB9ICk7XG5cdC8vIGVkaXRvci5jb252ZXJzaW9uLmZvciggJ2Rvd25jYXN0JyApLmFkZCggZG93bmNhc3RDdXN0b21DbGFzc2VzVG9DaGlsZCggdmlld0VsZW1lbnROYW1lLCBtb2RlbEVsZW1lbnROYW1lICksIHsgcHJpb3JpdHk6ICdsb3cnIH0gKTtcbn1cblxuLyoqXG4gKiBTZXRzIHVwIGEgY29udmVyc2lvbiBmb3IgYSBjdXN0b20gYXR0cmlidXRlIG9uIHRoZSB2aWV3IGVsZW1lbnRzIGNvbnRhaW5lZCBpbnNpZGUgYSA8ZmlndXJlPi5cbiAqXG4gKiBUaGlzIG1ldGhvZDpcbiAqIC0gQWRkcyBwcm9wZXIgc2NoZW1hIHJ1bGVzLlxuICogLSBBZGRzIGFuIHVwY2FzdCBjb252ZXJ0ZXIuXG4gKiAtIEFkZHMgYSBkb3duY2FzdCBjb252ZXJ0ZXIuXG4gKi9cbmZ1bmN0aW9uIHNldHVwQ3VzdG9tQXR0cmlidXRlQ29udmVyc2lvbiggdmlld0VsZW1lbnROYW1lLCBtb2RlbEVsZW1lbnROYW1lLCB2aWV3QXR0cmlidXRlLCBlZGl0b3IgKSB7XG5cdC8vIEV4dGVuZHMgdGhlIHNjaGVtYSB0byBzdG9yZSBhbiBhdHRyaWJ1dGUgaW4gdGhlIG1vZGVsLlxuXHRjb25zdCBtb2RlbEF0dHJpYnV0ZSA9IGBjdXN0b20keyB2aWV3QXR0cmlidXRlIH1gO1xuXG5cdGVkaXRvci5tb2RlbC5zY2hlbWEuZXh0ZW5kKCBtb2RlbEVsZW1lbnROYW1lLCB7IGFsbG93QXR0cmlidXRlczogWyBtb2RlbEF0dHJpYnV0ZSBdIH0gKTtcblxuXHRlZGl0b3IuY29udmVyc2lvbi5mb3IoICd1cGNhc3QnICkuYWRkKCB1cGNhc3RBdHRyaWJ1dGUoIHZpZXdFbGVtZW50TmFtZSwgdmlld0F0dHJpYnV0ZSwgbW9kZWxBdHRyaWJ1dGUgKSApO1xuXHRlZGl0b3IuY29udmVyc2lvbi5mb3IoICdkb3duY2FzdCcgKS5hZGQoIGRvd25jYXN0QXR0cmlidXRlKCBtb2RlbEVsZW1lbnROYW1lLCB2aWV3RWxlbWVudE5hbWUsIHZpZXdBdHRyaWJ1dGUsIG1vZGVsQXR0cmlidXRlICkgKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIHVwY2FzdCBjb252ZXJ0ZXIgdGhhdCB3aWxsIHBhc3MgYWxsIGNsYXNzZXMgZnJvbSB0aGUgdmlldyBlbGVtZW50IHRvIHRoZSBtb2RlbCBlbGVtZW50LlxuICovXG5mdW5jdGlvbiB1cGNhc3RDdXN0b21DbGFzc2VzKCBlbGVtZW50TmFtZSApIHtcblx0cmV0dXJuIGRpc3BhdGNoZXIgPT4gZGlzcGF0Y2hlci5vbiggYGVsZW1lbnQ6JHsgZWxlbWVudE5hbWUgfWAsICggZXZ0LCBkYXRhLCBjb252ZXJzaW9uQXBpICkgPT4ge1xuXHRcdGNvbnN0IHZpZXdJdGVtID0gZGF0YS52aWV3SXRlbTtcblx0XHRjb25zdCBtb2RlbFJhbmdlID0gZGF0YS5tb2RlbFJhbmdlO1xuXG5cdFx0Y29uc3QgbW9kZWxFbGVtZW50ID0gbW9kZWxSYW5nZSAmJiBtb2RlbFJhbmdlLnN0YXJ0Lm5vZGVBZnRlcjtcblxuXHRcdGlmICggIW1vZGVsRWxlbWVudCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBUaGUgdXBjYXN0IGNvbnZlcnNpb24gcGlja3MgdXAgY2xhc3NlcyBmcm9tIHRoZSBiYXNlIGVsZW1lbnQgYW5kIGZyb20gdGhlIDxmaWd1cmU+IGVsZW1lbnQgc28gaXQgc2hvdWxkIGJlIGV4dGVuc2libGUuXG5cdFx0Y29uc3QgY3VycmVudEF0dHJpYnV0ZVZhbHVlID0gbW9kZWxFbGVtZW50LmdldEF0dHJpYnV0ZSggJ2N1c3RvbUNsYXNzJyApIHx8IFtdO1xuXG5cdFx0Y3VycmVudEF0dHJpYnV0ZVZhbHVlLnB1c2goIC4uLnZpZXdJdGVtLmdldENsYXNzTmFtZXMoKSApO1xuXG5cdFx0Y29udmVyc2lvbkFwaS53cml0ZXIuc2V0QXR0cmlidXRlKCAnY3VzdG9tQ2xhc3MnLCBjdXJyZW50QXR0cmlidXRlVmFsdWUsIG1vZGVsRWxlbWVudCApO1xuXHR9ICk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRvd25jYXN0IGNvbnZlcnRlciB0aGF0IGFkZHMgY2xhc3NlcyBkZWZpbmVkIGluIHRoZSBgY3VzdG9tQ2xhc3NgIGF0dHJpYnV0ZSB0byBhIDxmaWd1cmU+IGVsZW1lbnQuXG4gKlxuICogVGhpcyBjb252ZXJ0ZXIgZXhwZWN0cyB0aGF0IHRoZSB2aWV3IGVsZW1lbnQgaXMgbmVzdGVkIGluIGEgPGZpZ3VyZT4gZWxlbWVudC5cbiAqL1xuZnVuY3Rpb24gZG93bmNhc3RDdXN0b21DbGFzc2VzVG9GaWd1cmUoIG1vZGVsRWxlbWVudE5hbWUgKSB7XG5cdHJldHVybiBkaXNwYXRjaGVyID0+IGRpc3BhdGNoZXIub24oIGBpbnNlcnQ6JHsgbW9kZWxFbGVtZW50TmFtZSB9YCwgKCBldnQsIGRhdGEsIGNvbnZlcnNpb25BcGkgKSA9PiB7XG5cdFx0Y29uc3QgbW9kZWxFbGVtZW50ID0gZGF0YS5pdGVtO1xuXG5cdFx0Y29uc3Qgdmlld0ZpZ3VyZSA9IGNvbnZlcnNpb25BcGkubWFwcGVyLnRvVmlld0VsZW1lbnQoIG1vZGVsRWxlbWVudCApO1xuXG5cdFx0aWYgKCAhdmlld0ZpZ3VyZSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBUaGUgY29kZSBiZWxvdyBhc3N1bWVzIHRoYXQgY2xhc3NlcyBhcmUgc2V0IG9uIHRoZSA8ZmlndXJlPiBlbGVtZW50LlxuXHRcdGNvbnZlcnNpb25BcGkud3JpdGVyLmFkZENsYXNzKCBtb2RlbEVsZW1lbnQuZ2V0QXR0cmlidXRlKCAnY3VzdG9tQ2xhc3MnICksIHZpZXdGaWd1cmUgKTtcblx0fSApO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBkb3duY2FzdCBjb252ZXJ0ZXIgdGhhdCBhZGRzIGNsYXNzZXMgZGVmaW5lZCBpbiB0aGUgYGN1c3RvbUNsYXNzYCBhdHRyaWJ1dGUgdG8gYSA8ZmlndXJlPiBjaGlsZCBlbGVtZW50LlxuICpcbiAqIFRoaXMgY29udmVydGVyIGV4cGVjdHMgdGhhdCB0aGUgdmlldyBlbGVtZW50IGlzIG5lc3RlZCBpbiBhIDxmaWd1cmU+IGVsZW1lbnQuXG4gKi9cbmZ1bmN0aW9uIGRvd25jYXN0Q3VzdG9tQ2xhc3Nlc1RvQ2hpbGQoIHZpZXdFbGVtZW50TmFtZSwgbW9kZWxFbGVtZW50TmFtZSApIHtcblx0cmV0dXJuIGRpc3BhdGNoZXIgPT4gZGlzcGF0Y2hlci5vbiggYGluc2VydDokeyBtb2RlbEVsZW1lbnROYW1lIH1gLCAoIGV2dCwgZGF0YSwgY29udmVyc2lvbkFwaSApID0+IHtcblx0XHRjb25zdCBtb2RlbEVsZW1lbnQgPSBkYXRhLml0ZW07XG5cblx0XHRjb25zdCB2aWV3RmlndXJlID0gY29udmVyc2lvbkFwaS5tYXBwZXIudG9WaWV3RWxlbWVudCggbW9kZWxFbGVtZW50ICk7XG5cblx0XHRpZiAoICF2aWV3RmlndXJlICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIFRoZSBjb2RlIGJlbG93IGFzc3VtZXMgdGhhdCBjbGFzc2VzIGFyZSBzZXQgb24gdGhlIGVsZW1lbnQgaW5zaWRlIHRoZSA8ZmlndXJlPi5cblx0XHRjb25zdCB2aWV3RWxlbWVudCA9IGZpbmRWaWV3Q2hpbGQoIHZpZXdGaWd1cmUsIHZpZXdFbGVtZW50TmFtZSwgY29udmVyc2lvbkFwaSApO1xuXG5cdFx0Y29udmVyc2lvbkFwaS53cml0ZXIuYWRkQ2xhc3MoIG1vZGVsRWxlbWVudC5nZXRBdHRyaWJ1dGUoICdjdXN0b21DbGFzcycgKSwgdmlld0VsZW1lbnQgKTtcblx0fSApO1xufVxuXG4vKipcbiAqIEhlbHBlciBtZXRob2QgdGhhdCBzZWFyY2hlcyBmb3IgYSBnaXZlbiB2aWV3IGVsZW1lbnQgaW4gYWxsIGNoaWxkcmVuIG9mIHRoZSBtb2RlbCBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmVuZ2luZS92aWV3L2l0ZW1+SXRlbX0gdmlld0VsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSB2aWV3RWxlbWVudE5hbWVcbiAqIEBwYXJhbSB7bW9kdWxlOmVuZ2luZS9jb252ZXJzaW9uL2Rvd25jYXN0ZGlzcGF0Y2hlcn5Eb3duY2FzdENvbnZlcnNpb25BcGl9IGNvbnZlcnNpb25BcGlcbiAqIEByZXR1cm4ge21vZHVsZTplbmdpbmUvdmlldy9pdGVtfkl0ZW19XG4gKi9cbmZ1bmN0aW9uIGZpbmRWaWV3Q2hpbGQoIHZpZXdFbGVtZW50LCB2aWV3RWxlbWVudE5hbWUsIGNvbnZlcnNpb25BcGkgKSB7XG5cdGNvbnN0IHZpZXdDaGlsZHJlbiA9IEFycmF5LmZyb20oIGNvbnZlcnNpb25BcGkud3JpdGVyLmNyZWF0ZVJhbmdlSW4oIHZpZXdFbGVtZW50ICkuZ2V0SXRlbXMoKSApO1xuXG5cdHJldHVybiB2aWV3Q2hpbGRyZW4uZmluZCggaXRlbSA9PiBpdGVtLmlzKCAnZWxlbWVudCcsIHZpZXdFbGVtZW50TmFtZSApICk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgY3VzdG9tIGF0dHJpYnV0ZSB1cGNhc3QgY29udmVydGVyLlxuICovXG5mdW5jdGlvbiB1cGNhc3RBdHRyaWJ1dGUoIHZpZXdFbGVtZW50TmFtZSwgdmlld0F0dHJpYnV0ZSwgbW9kZWxBdHRyaWJ1dGUgKSB7XG5cdHJldHVybiBkaXNwYXRjaGVyID0+IGRpc3BhdGNoZXIub24oIGBlbGVtZW50OiR7IHZpZXdFbGVtZW50TmFtZSB9YCwgKCBldnQsIGRhdGEsIGNvbnZlcnNpb25BcGkgKSA9PiB7XG5cdFx0Y29uc3Qgdmlld0l0ZW0gPSBkYXRhLnZpZXdJdGVtO1xuXHRcdGNvbnN0IG1vZGVsUmFuZ2UgPSBkYXRhLm1vZGVsUmFuZ2U7XG5cblx0XHRjb25zdCBtb2RlbEVsZW1lbnQgPSBtb2RlbFJhbmdlICYmIG1vZGVsUmFuZ2Uuc3RhcnQubm9kZUFmdGVyO1xuXG5cdFx0aWYgKCAhbW9kZWxFbGVtZW50ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnZlcnNpb25BcGkud3JpdGVyLnNldEF0dHJpYnV0ZSggbW9kZWxBdHRyaWJ1dGUsIHZpZXdJdGVtLmdldEF0dHJpYnV0ZSggdmlld0F0dHJpYnV0ZSApLCBtb2RlbEVsZW1lbnQgKTtcblx0fSApO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGN1c3RvbSBhdHRyaWJ1dGUgZG93bmNhc3QgY29udmVydGVyLlxuICovXG5mdW5jdGlvbiBkb3duY2FzdEF0dHJpYnV0ZSggbW9kZWxFbGVtZW50TmFtZSwgdmlld0VsZW1lbnROYW1lLCB2aWV3QXR0cmlidXRlLCBtb2RlbEF0dHJpYnV0ZSApIHtcblx0cmV0dXJuIGRpc3BhdGNoZXIgPT4gZGlzcGF0Y2hlci5vbiggYGluc2VydDokeyBtb2RlbEVsZW1lbnROYW1lIH1gLCAoIGV2dCwgZGF0YSwgY29udmVyc2lvbkFwaSApID0+IHtcblx0XHRjb25zdCBtb2RlbEVsZW1lbnQgPSBkYXRhLml0ZW07XG5cblx0XHRjb25zdCB2aWV3RmlndXJlID0gY29udmVyc2lvbkFwaS5tYXBwZXIudG9WaWV3RWxlbWVudCggbW9kZWxFbGVtZW50ICk7XG5cdFx0Y29uc3Qgdmlld0VsZW1lbnQgPSBmaW5kVmlld0NoaWxkKCB2aWV3RmlndXJlLCB2aWV3RWxlbWVudE5hbWUsIGNvbnZlcnNpb25BcGkgKTtcblxuXHRcdGlmICggIXZpZXdFbGVtZW50ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnZlcnNpb25BcGkud3JpdGVyLnNldEF0dHJpYnV0ZSggdmlld0F0dHJpYnV0ZSwgbW9kZWxFbGVtZW50LmdldEF0dHJpYnV0ZSggbW9kZWxBdHRyaWJ1dGUgKSwgdmlld0VsZW1lbnQgKTtcblx0fSApO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZSBDb3B5cmlnaHQgKGMpIDIwMDMtMjAyMSwgQ0tTb3VyY2UgLSBGcmVkZXJpY28gS25hYmJlbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIEZvciBsaWNlbnNpbmcsIHNlZSBMSUNFTlNFLm1kIG9yIGh0dHBzOi8vY2tlZGl0b3IuY29tL2xlZ2FsL2NrZWRpdG9yLW9zcy1saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGxpbmsvdXRpbHNcbiAqL1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlTWl4aW4sIG1peCB9IGZyb20gJ2NrZWRpdG9yNS9zcmMvdXRpbHMnO1xuXG4vKipcbiAqIEhlbHBlciBjbGFzcyB0aGF0IHN0b3JlcyBtYW51YWwgZGVjb3JhdG9ycyB3aXRoIG9ic2VydmFibGUge0BsaW5rIG1vZHVsZTpsaW5rL3V0aWxzfk1hbnVhbERlY29yYXRvciN2YWx1ZX1cbiAqIHRvIHN1cHBvcnQgaW50ZWdyYXRpb24gd2l0aCB0aGUgVUkgc3RhdGUuIEFuIGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgaXMgYSBtb2RlbCB3aXRoIHRoZSBzdGF0ZSBvZiBpbmRpdmlkdWFsIG1hbnVhbCBkZWNvcmF0b3JzLlxuICogVGhlc2UgZGVjb3JhdG9ycyBhcmUga2VwdCBhcyBjb2xsZWN0aW9ucyBpbiB7QGxpbmsgbW9kdWxlOmxpbmsvbGlua2NvbW1hbmR+TGlua0NvbW1hbmQjbWFudWFsRGVjb3JhdG9yc30uXG4gKlxuICogQG1peGVzIG1vZHVsZTp1dGlscy9vYnNlcnZhYmxlbWl4aW5+T2JzZXJ2YWJsZU1peGluXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hbnVhbERlY29yYXRvciB7XG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHtAbGluayBtb2R1bGU6bGluay91dGlsc35NYW51YWxEZWNvcmF0b3J9LlxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcuaWQgVGhlIG5hbWUgb2YgdGhlIGF0dHJpYnV0ZSB1c2VkIGluIHRoZSBtb2RlbCB0aGF0IHJlcHJlc2VudHMgYSBnaXZlbiBtYW51YWwgZGVjb3JhdG9yLlxuXHQgKiBGb3IgZXhhbXBsZTogYCdsaW5rSXNFeHRlcm5hbCdgLlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLmxhYmVsIFRoZSBsYWJlbCB1c2VkIGluIHRoZSB1c2VyIGludGVyZmFjZSB0byB0b2dnbGUgdGhlIG1hbnVhbCBkZWNvcmF0b3IuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcuYXR0cmlidXRlcyBBIHNldCBvZiBhdHRyaWJ1dGVzIGFkZGVkIHRvIG91dHB1dCBkYXRhIHdoZW4gdGhlIGRlY29yYXRvciBpcyBhY3RpdmUgZm9yIGEgc3BlY2lmaWMgbGluay5cblx0ICogQXR0cmlidXRlcyBzaG91bGQga2VlcCB0aGUgZm9ybWF0IG9mIGF0dHJpYnV0ZXMgZGVmaW5lZCBpbiB7QGxpbmsgbW9kdWxlOmVuZ2luZS92aWV3L2VsZW1lbnRkZWZpbml0aW9ufkVsZW1lbnREZWZpbml0aW9ufS5cblx0ICogQHBhcmFtIHtCb29sZWFufSBbY29uZmlnLmRlZmF1bHRWYWx1ZV0gQ29udHJvbHMgd2hldGhlciB0aGUgZGVjb3JhdG9yIGlzIFwib25cIiBieSBkZWZhdWx0LlxuXHQgKi9cblx0Y29uc3RydWN0b3IoIHsgaWQsIGxhYmVsLCBhdHRyaWJ1dGVzLCBkZWZhdWx0VmFsdWUgfSApIHtcblx0XHQvKipcblx0XHQgKiBBbiBJRCBvZiBhIG1hbnVhbCBkZWNvcmF0b3Igd2hpY2ggaXMgdGhlIG5hbWUgb2YgdGhlIGF0dHJpYnV0ZSBpbiB0aGUgbW9kZWwsIGZvciBleGFtcGxlOiAnbGlua01hbnVhbERlY29yYXRvcjAnLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUge1N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLmlkID0gaWQ7XG5cblx0XHQvKipcblx0XHQgKiBUaGUgdmFsdWUgb2YgdGhlIGN1cnJlbnQgbWFudWFsIGRlY29yYXRvci4gSXQgcmVmbGVjdHMgaXRzIHN0YXRlIGZyb20gdGhlIFVJLlxuXHRcdCAqXG5cdFx0ICogQG9ic2VydmFibGVcblx0XHQgKiBAbWVtYmVyIHtCb29sZWFufSBtb2R1bGU6bGluay91dGlsc35NYW51YWxEZWNvcmF0b3IjdmFsdWVcblx0XHQgKi9cblx0XHR0aGlzLnNldCggJ3ZhbHVlJyApO1xuXG5cdFx0LyoqXG5cdFx0ICogVGhlIGRlZmF1bHQgdmFsdWUgb2YgbWFudWFsIGRlY29yYXRvci5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIHtCb29sZWFufVxuXHRcdCAqL1xuXHRcdHRoaXMuZGVmYXVsdFZhbHVlID0gZGVmYXVsdFZhbHVlO1xuXG5cdFx0LyoqXG5cdFx0ICogVGhlIGxhYmVsIHVzZWQgaW4gdGhlIHVzZXIgaW50ZXJmYWNlIHRvIHRvZ2dsZSB0aGUgbWFudWFsIGRlY29yYXRvci5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIHtTdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5sYWJlbCA9IGxhYmVsO1xuXG5cdFx0LyoqXG5cdFx0ICogQSBzZXQgb2YgYXR0cmlidXRlcyBhZGRlZCB0byBkb3duY2FzdGVkIGRhdGEgd2hlbiB0aGUgZGVjb3JhdG9yIGlzIGFjdGl2YXRlZCBmb3IgYSBzcGVjaWZpYyBsaW5rLlxuXHRcdCAqIEF0dHJpYnV0ZXMgc2hvdWxkIGJlIGFkZGVkIGluIGEgZm9ybSBvZiBhdHRyaWJ1dGVzIGRlZmluZWQgaW4ge0BsaW5rIG1vZHVsZTplbmdpbmUvdmlldy9lbGVtZW50ZGVmaW5pdGlvbn5FbGVtZW50RGVmaW5pdGlvbn0uXG5cdFx0ICpcblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxuXHRcdCAqL1xuXHRcdHRoaXMuYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXM7XG5cdH1cbn1cblxubWl4KCBNYW51YWxEZWNvcmF0b3IsIE9ic2VydmFibGVNaXhpbiApO1xuIiwiXG5pbXBvcnQgUGx1Z2luIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtY29yZS9zcmMvcGx1Z2luJztcbiBpbXBvcnQgVGV4dFdhdGNoZXIgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS10eXBpbmcvc3JjL3RleHR3YXRjaGVyJztcbiBpbXBvcnQgeyBlc2NhcGVSZWdFeHAgfSBmcm9tICdsb2Rhc2gtZXMnO1xuXG4vLyBBbGwgbmFtZWQgdHJhbnNmb3JtYXRpb25zLlxuY29uc3QgVFJBTlNGT1JNQVRJT05TID0ge1xuXHQvLyBDb21tb24gc3ltYm9sczpcblx0Y29weXJpZ2h0OiB7IGZyb206ICcoYyknLCB0bzogJ8KpJyB9LFxuXHRyZWdpc3RlcmVkVHJhZGVtYXJrOiB7IGZyb206ICcociknLCB0bzogJ8KuJyB9LFxuXHR0cmFkZW1hcms6IHsgZnJvbTogJyh0bSknLCB0bzogJ+KEoicgfSxcblxuXHQvLyBNYXRoZW1hdGljYWw6XG5cdG9uZUhhbGY6IHsgZnJvbTogJzEvMicsIHRvOiAnwr0nIH0sXG5cdG9uZVRoaXJkOiB7IGZyb206ICcxLzMnLCB0bzogJ+KFkycgfSxcblx0dHdvVGhpcmRzOiB7IGZyb206ICcyLzMnLCB0bzogJ+KFlCcgfSxcblx0b25lRm9ydGg6IHsgZnJvbTogJzEvNCcsIHRvOiAnwrwnIH0sXG5cdHRocmVlUXVhcnRlcnM6IHsgZnJvbTogJzMvNCcsIHRvOiAnwr4nIH0sXG5cdGxlc3NUaGFuT3JFcXVhbDogeyBmcm9tOiAnPD0nLCB0bzogJ+KJpCcgfSxcblx0Z3JlYXRlclRoYW5PckVxdWFsOiB7IGZyb206ICc+PScsIHRvOiAn4omlJyB9LFxuXHRub3RFcXVhbDogeyBmcm9tOiAnIT0nLCB0bzogJ+KJoCcgfSxcblx0YXJyb3dMZWZ0OiB7IGZyb206ICc8LScsIHRvOiAn4oaQJyB9LFxuXHRhcnJvd1JpZ2h0OiB7IGZyb206ICctPicsIHRvOiAn4oaSJyB9LFxuXG5cdC8vIFR5cG9ncmFwaHk6XG5cdGhvcml6b250YWxFbGxpcHNpczogeyBmcm9tOiAnLi4uJywgdG86ICfigKYnIH0sXG5cdGVuRGFzaDogeyBmcm9tOiAvKF58ICkoLS0pKCApJC8sIHRvOiBbIG51bGwsICfigJMnLCBudWxsIF0gfSxcblx0ZW1EYXNoOiB7IGZyb206IC8oXnwgKSgtLS0pKCApJC8sIHRvOiBbIG51bGwsICfigJQnLCBudWxsIF0gfSxcblx0Ly8gUXVvdGF0aW9uczpcblx0Ly8gRW5nbGlzaCwgVVNcblx0cXVvdGVzUHJpbWFyeTogeyBmcm9tOiBidWlsZFF1b3Rlc1JlZ0V4cCggJ1wiJyApLCB0bzogWyBudWxsLCAn4oCcJywgbnVsbCwgJ+KAnScgXSB9LFxuXHRxdW90ZXNTZWNvbmRhcnk6IHsgZnJvbTogYnVpbGRRdW90ZXNSZWdFeHAoICdcXCcnICksIHRvOiBbIG51bGwsICfigJgnLCBudWxsLCAn4oCZJyBdIH0sXG5cblx0Ly8gRW5nbGlzaCwgVUtcblx0cXVvdGVzUHJpbWFyeUVuR2I6IHsgZnJvbTogYnVpbGRRdW90ZXNSZWdFeHAoICdcXCcnICksIHRvOiBbIG51bGwsICfigJgnLCBudWxsLCAn4oCZJyBdIH0sXG5cdHF1b3Rlc1NlY29uZGFyeUVuR2I6IHsgZnJvbTogYnVpbGRRdW90ZXNSZWdFeHAoICdcIicgKSwgdG86IFsgbnVsbCwgJ+KAnCcsIG51bGwsICfigJ0nIF0gfSxcblxuXHQvLyBQb2xpc2hcblx0cXVvdGVzUHJpbWFyeVBsOiB7IGZyb206IGJ1aWxkUXVvdGVzUmVnRXhwKCAnXCInICksIHRvOiBbIG51bGwsICfigJ4nLCBudWxsLCAn4oCdJyBdIH0sXG5cdHF1b3Rlc1NlY29uZGFyeVBsOiB7IGZyb206IGJ1aWxkUXVvdGVzUmVnRXhwKCAnXFwnJyApLCB0bzogWyBudWxsLCAn4oCaJywgbnVsbCwgJ+KAmScgXSB9XG59O1xuXG4vLyBUcmFuc2Zvcm1hdGlvbiBncm91cHMuXG5jb25zdCBUUkFOU0ZPUk1BVElPTl9HUk9VUFMgPSB7XG5cdHN5bWJvbHM6IFsgJ2NvcHlyaWdodCcsICdyZWdpc3RlcmVkVHJhZGVtYXJrJywgJ3RyYWRlbWFyaycgXSxcblx0bWF0aGVtYXRpY2FsOiBbXG5cdFx0J29uZUhhbGYnLCAnb25lVGhpcmQnLCAndHdvVGhpcmRzJywgJ29uZUZvcnRoJywgJ3RocmVlUXVhcnRlcnMnLFxuXHRcdCdsZXNzVGhhbk9yRXF1YWwnLCAnZ3JlYXRlclRoYW5PckVxdWFsJywgJ25vdEVxdWFsJyxcblx0XHQnYXJyb3dMZWZ0JywgJ2Fycm93UmlnaHQnXG5cdF0sXG5cdHR5cG9ncmFwaHk6IFsgJ2hvcml6b250YWxFbGxpcHNpcycsICdlbkRhc2gnLCAnZW1EYXNoJyBdLFxuXHRxdW90ZXM6IFsgJ3F1b3Rlc1ByaW1hcnknLCAncXVvdGVzU2Vjb25kYXJ5JyBdXG59O1xuXG4vLyBBIHNldCBvZiBkZWZhdWx0IHRyYW5zZm9ybWF0aW9ucyBwcm92aWRlZCBieSB0aGUgZmVhdHVyZS5cbmNvbnN0IERFRkFVTFRfVFJBTlNGT1JNQVRJT05TID0gW1xuXHQnc3ltYm9scycsXG5cdCdtYXRoZW1hdGljYWwnLFxuXHQndHlwb2dyYXBoeScsXG5cdCdxdW90ZXMnXG5dO1xuXG4vKipcbiAqIFRoZSB0ZXh0IHRyYW5zZm9ybWF0aW9uIHBsdWdpbi5cbiAqXG4gKiBAZXh0ZW5kcyBtb2R1bGU6Y29yZS9wbHVnaW5+UGx1Z2luXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRUZW1wbGF0aW5nIGV4dGVuZHMgUGx1Z2luIHtcblx0LyoqXG5cdCAqIEBpbmhlcml0RG9jXG5cdCAqL1xuXHRzdGF0aWMgZ2V0IHBsdWdpbk5hbWUoKSB7XG5cdFx0cmV0dXJuICdUZXh0VGVtcGxhdGluZyc7XG5cdH1cblxuXHQvKipcblx0ICogQGluaGVyaXREb2Ncblx0ICovXG5cdGNvbnN0cnVjdG9yKCBlZGl0b3IgKSB7XG5cdFx0c3VwZXIoIGVkaXRvciApO1xuXG5cdFx0ZWRpdG9yLmNvbmZpZy5kZWZpbmUoICd0eXBpbmcnLCB7XG5cdFx0XHR0cmFuc2Zvcm1hdGlvbnM6IHtcblx0XHRcdFx0aW5jbHVkZTogREVGQVVMVF9UUkFOU0ZPUk1BVElPTlNcblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogQGluaGVyaXREb2Ncblx0ICovXG5cdGluaXQoKSB7XG5cdFx0Y29uc3QgbW9kZWwgPSB0aGlzLmVkaXRvci5tb2RlbDtcblx0XHRjb25zdCBtb2RlbFNlbGVjdGlvbiA9IG1vZGVsLmRvY3VtZW50LnNlbGVjdGlvbjtcblxuXHRcdG1vZGVsU2VsZWN0aW9uLm9uKCAnY2hhbmdlOnJhbmdlJywgKCkgPT4ge1xuXHRcdFx0Ly8gRGlzYWJsZSBwbHVnaW4gd2hlbiBzZWxlY3Rpb24gaXMgaW5zaWRlIGEgY29kZSBibG9jay5cblx0XHRcdHRoaXMuaXNFbmFibGVkID0gIW1vZGVsU2VsZWN0aW9uLmFuY2hvci5wYXJlbnQuaXMoICdlbGVtZW50JywgJ2NvZGVCbG9jaycgKTtcblx0XHR9ICk7XG5cblx0XHR0aGlzLl9lbmFibGVUcmFuc2Zvcm1hdGlvbldhdGNoZXJzKCk7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlIG5ldyBUZXh0V2F0Y2hlciBsaXN0ZW5pbmcgdG8gdGhlIGVkaXRvciBmb3IgdHlwaW5nIGFuZCBzZWxlY3Rpb24gZXZlbnRzLlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X2VuYWJsZVRyYW5zZm9ybWF0aW9uV2F0Y2hlcnMoKSB7XG5cdFx0Y29uc3QgZWRpdG9yID0gdGhpcy5lZGl0b3I7XG5cdFx0Y29uc3QgbW9kZWwgPSBlZGl0b3IubW9kZWw7XG5cdFx0Y29uc3QgaW5wdXQgPSBlZGl0b3IucGx1Z2lucy5nZXQoICdJbnB1dCcgKTtcblx0XHRjb25zdCBub3JtYWxpemVkVHJhbnNmb3JtYXRpb25zID0gbm9ybWFsaXplVHJhbnNmb3JtYXRpb25zKCBlZGl0b3IuY29uZmlnLmdldCggJ3R5cGluZy50cmFuc2Zvcm1hdGlvbnMnICkgKTtcblxuXHRcdGNvbnN0IHRlc3RDYWxsYmFjayA9IHRleHQgPT4ge1xuXHRcdFx0Zm9yICggY29uc3Qgbm9ybWFsaXplZFRyYW5zZm9ybWF0aW9uIG9mIG5vcm1hbGl6ZWRUcmFuc2Zvcm1hdGlvbnMgKSB7XG5cdFx0XHRcdGNvbnN0IGZyb20gPSBub3JtYWxpemVkVHJhbnNmb3JtYXRpb24uZnJvbTtcblx0XHRcdFx0Y29uc3QgbWF0Y2ggPSBmcm9tLnRlc3QoIHRleHQgKTtcblxuXHRcdFx0XHRpZiAoIG1hdGNoICkge1xuXHRcdFx0XHRcdHJldHVybiB7IG5vcm1hbGl6ZWRUcmFuc2Zvcm1hdGlvbiB9O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGNvbnN0IHdhdGNoZXJDYWxsYmFjayA9ICggZXZ0LCBkYXRhICkgPT4ge1xuXHRcdFx0aWYgKCAhaW5wdXQuaXNJbnB1dCggZGF0YS5iYXRjaCApICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHsgZnJvbSwgdG8gfSA9IGRhdGEubm9ybWFsaXplZFRyYW5zZm9ybWF0aW9uO1xuXG5cdFx0XHRjb25zdCBtYXRjaGVzID0gZnJvbS5leGVjKCBkYXRhLnRleHQgKTtcblx0XHRcdGNvbnN0IHJlcGxhY2VzID0gdG8oIG1hdGNoZXMuc2xpY2UoIDEgKSApO1xuXG5cdFx0XHRjb25zdCBtYXRjaGVkUmFuZ2UgPSBkYXRhLnJhbmdlO1xuXG5cdFx0XHRsZXQgY2hhbmdlSW5kZXggPSBtYXRjaGVzLmluZGV4O1xuXG5cdFx0XHRtb2RlbC5lbnF1ZXVlQ2hhbmdlKCB3cml0ZXIgPT4ge1xuXHRcdFx0XHRmb3IgKCBsZXQgaSA9IDE7IGkgPCBtYXRjaGVzLmxlbmd0aDsgaSsrICkge1xuXHRcdFx0XHRcdGNvbnN0IG1hdGNoID0gbWF0Y2hlc1sgaSBdO1xuXHRcdFx0XHRcdGNvbnN0IHJlcGxhY2VXaXRoID0gcmVwbGFjZXNbIGkgLSAxIF07XG5cdFx0XHRcdFx0Y29uc29sZS5sb2cobWF0Y2gpO1xuXHRcdFx0XHRcdGlmICggcmVwbGFjZVdpdGggPT0gbnVsbCApIHtcblx0XHRcdFx0XHRcdGNoYW5nZUluZGV4ICs9IG1hdGNoLmxlbmd0aDtcblxuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29uc3QgcmVwbGFjZVBvc2l0aW9uID0gbWF0Y2hlZFJhbmdlLnN0YXJ0LmdldFNoaWZ0ZWRCeSggY2hhbmdlSW5kZXggKTtcblx0XHRcdFx0XHRjb25zdCByZXBsYWNlUmFuZ2UgPSBtb2RlbC5jcmVhdGVSYW5nZSggcmVwbGFjZVBvc2l0aW9uLCByZXBsYWNlUG9zaXRpb24uZ2V0U2hpZnRlZEJ5KCBtYXRjaC5sZW5ndGggKSApO1xuXHRcdFx0XHRcdGNvbnN0IGF0dHJpYnV0ZXMgPSBnZXRUZXh0QXR0cmlidXRlc0FmdGVyUG9zaXRpb24oIHJlcGxhY2VQb3NpdGlvbiApO1xuXHRcdFx0XHRcdGNvbnN0IG9wdGlvbnMgPSB7IHJhbmdlIDogcmVwbGFjZVJhbmdlLCB1c2luZ09wZXJhdGlvbjogZmFsc2UgfVxuXHRcdFx0XHRcdHdyaXRlci5hZGRNYXJrZXIoIG1hdGNoLCBvcHRpb25zICk7XG5cdFx0XHRcdFx0bW9kZWwuaW5zZXJ0Q29udGVudCggd3JpdGVyLmNyZWF0ZVRleHQoIHJlcGxhY2VXaXRoLCBhdHRyaWJ1dGVzICksIHJlcGxhY2VSYW5nZSApO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGVkaXRvci5tb2RlbC5tYXJrZXJzKTtcblx0XHRcdFx0XHRjaGFuZ2VJbmRleCArPSByZXBsYWNlV2l0aC5sZW5ndGg7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9O1xuXG5cdFx0Y29uc3Qgd2F0Y2hlciA9IG5ldyBUZXh0V2F0Y2hlciggZWRpdG9yLm1vZGVsLCB0ZXN0Q2FsbGJhY2sgKTtcblxuXHRcdHdhdGNoZXIub24oICdtYXRjaGVkOmRhdGEnLCB3YXRjaGVyQ2FsbGJhY2sgKTtcblx0XHR3YXRjaGVyLmJpbmQoICdpc0VuYWJsZWQnICkudG8oIHRoaXMgKTtcblxuXHRcdC8vIHdhdGNoZXIub24oICd1bm1hdGNoZWQnLCB1bndhdGNoZXJDYWxsYmFjayApO1xuXHRcdC8vIGNvbnN0IHBhdHRlcm4gPSAvKFxcXFxbezJ9KShbYS16XSspKFxcXFxdezJ9KSQvO1xuXHRcdC8vXG5cdFx0Ly8gY29uc3QgbWF0Y2hlciA9IG5ldyBNYXRjaGVyKCBwYXR0ZXJuICk7XG5cdFx0Ly8gdmFyIGNoaWxkQ291bnQgPSBlZGl0b3IubW9kZWwuZG9jdW1lbnQuZ2V0Um9vdCgpLmNoaWxkQ291bnQ7XG5cdFx0Ly8gaWYgKGVkaXRvci5tb2RlbC5kb2N1bWVudC5nZXRSb290KCkuY2hpbGRDb3VudCA+IDApe1xuXHRcdC8vIFx0bGV0IGZvdW5kID0gbWF0Y2hlci5tYXRjaEFsbChlZGl0b3IubW9kZWwuZG9jdW1lbnQuZ2V0Um9vdCgpLmdldENoaWxkKGNoaWxkQ291bnQgLTEpKTtcblx0XHQvLyBcdGNvbnNvbGUubG9nKGVkaXRvci5tb2RlbC5kb2N1bWVudC5nZXRSb290KCkuZ2V0Q2hpbGQoY2hpbGRDb3VudCAtMSkpO1xuXHRcdC8vIFx0Y29uc29sZS5sb2cgKG1hdGNoZXIubWF0Y2hBbGwoZWRpdG9yLm1vZGVsLmRvY3VtZW50LmdldFJvb3QoKS5nZXRDaGlsZChjaGlsZENvdW50IC0xKSkpO1xuXHRcdC8vXG5cdFx0Ly8gfVxuXHR9XG59XG5cbi8vIE5vcm1hbGl6ZXMgdGhlIGNvbmZpZ3VyYXRpb24gYGZyb21gIHBhcmFtZXRlciB2YWx1ZS5cbi8vIFRoZSBub3JtYWxpemVkIHZhbHVlIGZvciB0aGUgYGZyb21gIHBhcmFtZXRlciBpcyBhIFJlZ0V4cCBpbnN0YW5jZS4gSWYgdGhlIHBhc3NlZCBgZnJvbWAgaXMgYWxyZWFkeSBhIFJlZ0V4cCBpbnN0YW5jZSxcbi8vIGl0IGlzIHJldHVybmVkIHVuY2hhbmdlZC5cbi8vXG4vLyBAcGFyYW0ge1N0cmluZ3xSZWdFeHB9IGZyb21cbi8vIEByZXR1cm5zIHtSZWdFeHB9XG5mdW5jdGlvbiBub3JtYWxpemVGcm9tKCBmcm9tICkge1xuXHRpZiAoIHR5cGVvZiBmcm9tID09ICdzdHJpbmcnICkge1xuXHRcdHJldHVybiBuZXcgUmVnRXhwKCBgKCR7IGVzY2FwZVJlZ0V4cCggZnJvbSApIH0pJGAgKTtcblx0fVxuXG5cdC8vIGBmcm9tYCBpcyBhbHJlYWR5IGEgcmVndWxhciBleHByZXNzaW9uLlxuXHRyZXR1cm4gZnJvbTtcbn1cblxuLy8gTm9ybWFsaXplcyB0aGUgY29uZmlndXJhdGlvbiBgdG9gIHBhcmFtZXRlciB2YWx1ZS5cbi8vIFRoZSBub3JtYWxpemVkIHZhbHVlIGZvciB0aGUgYHRvYCBwYXJhbWV0ZXIgaXMgYSBmdW5jdGlvbiB0aGF0IHRha2VzIGFuIGFycmF5IGFuZCByZXR1cm5zIGFuIGFycmF5LiBTZWUgbW9yZSBpbiB0aGVcbi8vIGNvbmZpZ3VyYXRpb24gZGVzY3JpcHRpb24uIElmIHRoZSBwYXNzZWQgYHRvYCBpcyBhbHJlYWR5IGEgZnVuY3Rpb24sIGl0IGlzIHJldHVybmVkIHVuY2hhbmdlZC5cbi8vXG4vLyBAcGFyYW0ge1N0cmluZ3xBcnJheS48bnVsbHxTdHJpbmc+fEZ1bmN0aW9ufSB0b1xuLy8gQHJldHVybnMge0Z1bmN0aW9ufVxuZnVuY3Rpb24gbm9ybWFsaXplVG8oIHRvICkge1xuXHRpZiAoIHR5cGVvZiB0byA9PSAnc3RyaW5nJyApIHtcblx0XHRyZXR1cm4gKCkgPT4gWyB0byBdO1xuXHR9IGVsc2UgaWYgKCB0byBpbnN0YW5jZW9mIEFycmF5ICkge1xuXHRcdHJldHVybiAoKSA9PiB0bztcblx0fVxuXG5cdC8vIGB0b2AgaXMgYWxyZWFkeSBhIGZ1bmN0aW9uLlxuXHRyZXR1cm4gdG87XG59XG5cbi8vIEZvciBnaXZlbiBgcG9zaXRpb25gIHJldHVybnMgYXR0cmlidXRlcyBmb3IgdGhlIHRleHQgdGhhdCBpcyBhZnRlciB0aGF0IHBvc2l0aW9uLlxuLy8gVGhlIHRleHQgY2FuIGJlIGluIHRoZSBzYW1lIHRleHQgbm9kZSBhcyB0aGUgcG9zaXRpb24gKGBmb29bXWJhcmApIG9yIGluIHRoZSBuZXh0IHRleHQgbm9kZSAoYGZvb1tdPCR0ZXh0IGJvbGQ9XCJ0cnVlXCI+YmFyPC8kdGV4dD5gKS5cbi8vXG4vLyBAcGFyYW0ge21vZHVsZTplbmdpbmUvbW9kZWwvcG9zaXRpb25+UG9zaXRpb259IHBvc2l0aW9uXG4vLyBAcmV0dXJucyB7SXRlcmFibGUuPCo+fVxuZnVuY3Rpb24gZ2V0VGV4dEF0dHJpYnV0ZXNBZnRlclBvc2l0aW9uKCBwb3NpdGlvbiApIHtcblx0Y29uc3QgdGV4dE5vZGUgPSBwb3NpdGlvbi50ZXh0Tm9kZSA/IHBvc2l0aW9uLnRleHROb2RlIDogcG9zaXRpb24ubm9kZUFmdGVyO1xuXG5cdHJldHVybiB0ZXh0Tm9kZS5nZXRBdHRyaWJ1dGVzKCk7XG59XG5cbi8vIFJldHVybnMgYSBSZWdFeHAgcGF0dGVybiBzdHJpbmcgdGhhdCBkZXRlY3RzIGEgc2VudGVuY2UgaW5zaWRlIGEgcXVvdGUuXG4vL1xuLy8gQHBhcmFtIHtTdHJpbmd9IHF1b3RlQ2hhcmFjdGVyIFRoZSBjaGFyYWN0ZXIgdG8gY3JlYXRlIGEgcGF0dGVybiBmb3IuXG4vLyBAcmV0dXJucyB7U3RyaW5nfVxuZnVuY3Rpb24gYnVpbGRRdW90ZXNSZWdFeHAoIHF1b3RlQ2hhcmFjdGVyICkge1xuXHRyZXR1cm4gbmV3IFJlZ0V4cCggYChefFxcXFxzKSgkeyBxdW90ZUNoYXJhY3RlciB9KShbXiR7IHF1b3RlQ2hhcmFjdGVyIH1dKikoJHsgcXVvdGVDaGFyYWN0ZXIgfSkkYCApO1xufVxuXG4vLyBSZWFkcyB0ZXh0IHRyYW5zZm9ybWF0aW9uIGNvbmZpZyBhbmQgcmV0dXJucyBub3JtYWxpemVkIGFycmF5IG9mIHRyYW5zZm9ybWF0aW9ucyBvYmplY3RzLlxuLy9cbi8vIEBwYXJhbSB7bW9kdWxlOnR5cGluZy90ZXh0VGVtcGxhdGluZ35UZXh0VGVtcGxhdGluZ0Rlc2NyaXB0aW9ufSBjb25maWdcbi8vIEByZXR1cm5zIHtBcnJheS48e2Zyb206U3RyaW5nLHRvOkZ1bmN0aW9ufT59XG5mdW5jdGlvbiBub3JtYWxpemVUcmFuc2Zvcm1hdGlvbnMoIGNvbmZpZyApIHtcblx0Y29uc3QgZXh0cmEgPSBjb25maWcuZXh0cmEgfHwgW107XG5cdGNvbnN0IHJlbW92ZSA9IGNvbmZpZy5yZW1vdmUgfHwgW107XG5cdGNvbnN0IGlzTm90UmVtb3ZlZCA9IHRyYW5zZm9ybWF0aW9uID0+ICFyZW1vdmUuaW5jbHVkZXMoIHRyYW5zZm9ybWF0aW9uICk7XG5cblx0Y29uc3QgY29uZmlndXJlZCA9IGNvbmZpZy5pbmNsdWRlLmNvbmNhdCggZXh0cmEgKS5maWx0ZXIoIGlzTm90UmVtb3ZlZCApO1xuXG5cdHJldHVybiBleHBhbmRHcm91cHNBbmRSZW1vdmVEdXBsaWNhdGVzKCBjb25maWd1cmVkIClcblx0XHQuZmlsdGVyKCBpc05vdFJlbW92ZWQgKSAvLyBGaWx0ZXIgb3V0ICdyZW1vdmUnIHRyYW5zZm9ybWF0aW9ucyBhcyB0aGV5IG1pZ2h0IGJlIHNldCBpbiBncm91cFxuXHRcdC5tYXAoIHRyYW5zZm9ybWF0aW9uID0+IFRSQU5TRk9STUFUSU9OU1sgdHJhbnNmb3JtYXRpb24gXSB8fCB0cmFuc2Zvcm1hdGlvbiApXG5cdFx0Lm1hcCggdHJhbnNmb3JtYXRpb24gPT4gKCB7XG5cdFx0XHRmcm9tOiBub3JtYWxpemVGcm9tKCB0cmFuc2Zvcm1hdGlvbi5mcm9tICksXG5cdFx0XHR0bzogbm9ybWFsaXplVG8oIHRyYW5zZm9ybWF0aW9uLnRvIClcblx0XHR9ICkgKTtcbn1cblxuLy8gUmVhZHMgZGVmaW5pdGlvbnMgYW5kIGV4cGFuZHMgbmFtZWQgZ3JvdXBzIGlmIG5lZWRlZCB0byB0cmFuc2Zvcm1hdGlvbiBuYW1lcy5cbi8vIFRoaXMgbWV0aG9kIGFsc28gcmVtb3ZlcyBkdXBsaWNhdGVkIG5hbWVkIHRyYW5zZm9ybWF0aW9ucyBpZiBhbnkuXG4vL1xuLy8gQHBhcmFtIHtBcnJheS48U3RyaW5nfE9iamVjdD59IGRlZmluaXRpb25zXG4vLyBAcmV0dXJucyB7QXJyYXkuPFN0cmluZ3xPYmplY3Q+fVxuZnVuY3Rpb24gZXhwYW5kR3JvdXBzQW5kUmVtb3ZlRHVwbGljYXRlcyggZGVmaW5pdGlvbnMgKSB7XG5cdC8vIFNldCBpcyB1c2luZyB0byBtYWtlIHN1cmUgdGhhdCB0cmFuc2Zvcm1hdGlvbiBuYW1lcyBhcmUgbm90IGR1cGxpY2F0ZWQuXG5cdGNvbnN0IGRlZmluZWRUcmFuc2Zvcm1hdGlvbnMgPSBuZXcgU2V0KCk7XG5cblx0Zm9yICggY29uc3QgdHJhbnNmb3JtYXRpb25Pckdyb3VwIG9mIGRlZmluaXRpb25zICkge1xuXHRcdGlmICggVFJBTlNGT1JNQVRJT05fR1JPVVBTWyB0cmFuc2Zvcm1hdGlvbk9yR3JvdXAgXSApIHtcblx0XHRcdGZvciAoIGNvbnN0IHRyYW5zZm9ybWF0aW9uIG9mIFRSQU5TRk9STUFUSU9OX0dST1VQU1sgdHJhbnNmb3JtYXRpb25Pckdyb3VwIF0gKSB7XG5cdFx0XHRcdGRlZmluZWRUcmFuc2Zvcm1hdGlvbnMuYWRkKCB0cmFuc2Zvcm1hdGlvbiApO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRkZWZpbmVkVHJhbnNmb3JtYXRpb25zLmFkZCggdHJhbnNmb3JtYXRpb25Pckdyb3VwICk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIEFycmF5LmZyb20oIGRlZmluZWRUcmFuc2Zvcm1hdGlvbnMgKTtcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBkZWZhdWx0IFwiPHN2ZyBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgZm9jdXNhYmxlPVxcXCJmYWxzZVxcXCIgZGF0YS1wcmVmaXg9XFxcImZhc1xcXCIgZGF0YS1pY29uPVxcXCJmaWxlLWV4cG9ydFxcXCIgY2xhc3M9XFxcInN2Zy1pbmxpbmUtLWZhIGZhLWZpbGUtZXhwb3J0IGZhLXctMThcXFwiIHJvbGU9XFxcImltZ1xcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgNTc2IDUxMlxcXCI+PHBhdGggZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiBkPVxcXCJNMzg0IDEyMS45YzAtNi4zLTIuNS0xMi40LTctMTYuOUwyNzkuMSA3Yy00LjUtNC41LTEwLjYtNy0xNy03SDI1NnYxMjhoMTI4ek01NzEgMzA4bC05NS43LTk2LjRjLTEwLjEtMTAuMS0yNy40LTMtMjcuNCAxMS4zVjI4OGgtNjR2NjRoNjR2NjUuMmMwIDE0LjMgMTcuMyAyMS40IDI3LjQgMTEuM0w1NzEgMzMyYzYuNi02LjYgNi42LTE3LjQgMC0yNHptLTM3OSAyOHYtMzJjMC04LjggNy4yLTE2IDE2LTE2aDE3NlYxNjBIMjQ4Yy0xMy4yIDAtMjQtMTAuOC0yNC0yNFYwSDI0QzEwLjcgMCAwIDEwLjcgMCAyNHY0NjRjMCAxMy4zIDEwLjcgMjQgMjQgMjRoMzM2YzEzLjMgMCAyNC0xMC43IDI0LTI0VjM1MkgyMDhjLTguOCAwLTE2LTcuMi0xNi0xNnpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsImV4cG9ydCBkZWZhdWx0IFwiPD94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiPz5cXG48IS0tIEdlbmVyYXRlZCBieSBJY29Nb29uLmlvIC0tPlxcbjwhRE9DVFlQRSBzdmcgUFVCTElDIFxcXCItLy9XM0MvL0RURCBTVkcgMS4xLy9FTlxcXCIgXFxcImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZFxcXCI+XFxuPHN2ZyB2ZXJzaW9uPVxcXCIxLjFcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHdpZHRoPVxcXCIxNlxcXCIgaGVpZ2h0PVxcXCIxNlxcXCIgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIj5cXG48cGF0aCBmaWxsPVxcXCIjNDQ0NDQ0XFxcIiBkPVxcXCJNMi4xIDMuMWMwLjIgMS4zIDAuNCAxLjYgMC40IDIuOSAwIDAuOC0xLjUgMS41LTEuNSAxLjV2MWMwIDAgMS41IDAuNyAxLjUgMS41IDAgMS4zLTAuMiAxLjYtMC40IDIuOS0wLjMgMi4xIDAuOCAzLjEgMS44IDMuMXMyLjEgMCAyLjEgMHYtMmMwIDAtMS44IDAuMi0xLjgtMSAwLTAuOSAwLjItMC45IDAuNC0yLjkgMC4xLTAuOS0wLjUtMS42LTEuMS0yLjEgMC42LTAuNSAxLjItMS4xIDEuMS0yLTAuMy0yLTAuNC0yLTAuNC0yLjkgMC0xLjIgMS44LTEuMSAxLjgtMS4xdi0yYzAgMC0xIDAtMi4xIDBzLTIuMSAxLTEuOCAzLjF6XFxcIj48L3BhdGg+XFxuPHBhdGggZmlsbD1cXFwiIzQ0NDQ0NFxcXCIgZD1cXFwiTTEzLjkgMy4xYy0wLjIgMS4zLTAuNCAxLjYtMC40IDIuOSAwIDAuOCAxLjUgMS41IDEuNSAxLjV2MWMwIDAtMS41IDAuNy0xLjUgMS41IDAgMS4zIDAuMiAxLjYgMC40IDIuOSAwLjMgMi4xLTAuOCAzLjEtMS44IDMuMXMtMi4xIDAtMi4xIDB2LTJjMCAwIDEuOCAwLjIgMS44LTEgMC0wLjktMC4yLTAuOS0wLjQtMi45LTAuMS0wLjkgMC41LTEuNiAxLjEtMi4xLTAuNi0wLjUtMS4yLTEuMS0xLjEtMiAwLjItMiAwLjQtMiAwLjQtMi45IDAtMS4yLTEuOC0xLjEtMS44LTEuMXYtMmMwIDAgMSAwIDIuMSAwczIuMSAxIDEuOCAzLjF6XFxcIj48L3BhdGg+XFxuPC9zdmc+XFxuXCIiLCJleHBvcnQgZGVmYXVsdCBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDIwIDIwXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIm0xMS4wNzcgMTUgLjk5MS0xLjQxNmEuNzUuNzUgMCAxIDEgMS4yMjkuODZsLTEuMTQ4IDEuNjRhLjc0OC43NDggMCAwIDEtLjIxNy4yMDYgNS4yNTEgNS4yNTEgMCAwIDEtOC41MDMtNS45NTUuNzQxLjc0MSAwIDAgMSAuMTItLjI3NGwxLjE0Ny0xLjYzOWEuNzUuNzUgMCAxIDEgMS4yMjguODZMNC45MzMgMTAuN2wuMDA2LjAwM2EzLjc1IDMuNzUgMCAwIDAgNi4xMzIgNC4yOTRsLjAwNi4wMDR6bTUuNDk0LTUuMzM1YS43NDguNzQ4IDAgMCAxLS4xMi4yNzRsLTEuMTQ3IDEuNjM5YS43NS43NSAwIDEgMS0xLjIyOC0uODZsLjg2LTEuMjNhMy43NSAzLjc1IDAgMCAwLTYuMTQ0LTQuMzAxbC0uODYgMS4yMjlhLjc1Ljc1IDAgMCAxLTEuMjI5LS44NmwxLjE0OC0xLjY0YS43NDguNzQ4IDAgMCAxIC4yMTctLjIwNiA1LjI1MSA1LjI1MSAwIDAgMSA4LjUwMyA1Ljk1NXptLTQuNTYzLTIuNTMyYS43NS43NSAwIDAgMSAuMTg0IDEuMDQ1bC0zLjE1NSA0LjUwNWEuNzUuNzUgMCAxIDEtMS4yMjktLjg2bDMuMTU1LTQuNTA2YS43NS43NSAwIDAgMSAxLjA0NS0uMTg0em00LjkxOSAxMC41NjItMS40MTQgMS40MTRhLjc1Ljc1IDAgMSAxLTEuMDYtMS4wNmwxLjQxNC0xLjQxNS0xLjQxNS0xLjQxNGEuNzUuNzUgMCAwIDEgMS4wNjEtMS4wNmwxLjQxNCAxLjQxNCAxLjQxNC0xLjQxNWEuNzUuNzUgMCAwIDEgMS4wNjEgMS4wNjFsLTEuNDE0IDEuNDE0IDEuNDE0IDEuNDE1YS43NS43NSAwIDAgMS0xLjA2IDEuMDZsLTEuNDE1LTEuNDE0elxcXCIvPjwvc3ZnPlwiIl0sInNvdXJjZVJvb3QiOiIifQ==