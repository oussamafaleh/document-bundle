(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$":
/*!*****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.(j|t)sx?$ ***!
  \*****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./doceditor_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/doceditor_controller.js",
	"./file_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/file_controller.js",
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
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
/* harmony import */ var _DocDecoupledEditor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../DocDecoupledEditor */ "./assets/DocDecoupledEditor.js");
/* harmony import */ var _ckeditor_ckeditor5_inspector__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ckeditor/ckeditor5-inspector */ "./node_modules/@ckeditor/ckeditor5-inspector/build/inspector.js");
/* harmony import */ var _ckeditor_ckeditor5_inspector__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_inspector__WEBPACK_IMPORTED_MODULE_21__);
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




var URL_BASE = "http://localhost:8080";
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

      _DocDecoupledEditor__WEBPACK_IMPORTED_MODULE_20__.default.create(document.querySelector('.document-editor__editable'), {
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
        // CKEditorInspector.attach( editor );
        var toolbarContainer = document.querySelector('.document-editor__toolbar');
        toolbarContainer.appendChild(editor.ui.view.toolbar.element);
        window.editor = editor;
        _this.editor = editor;

        _this.match();
      })["catch"](function (err) {
        console.error(err);
      });
    }
  }, {
    key: "saveTemplate",
    value: function saveTemplate() {
      var tempFileName = document.querySelector('#template_label').value;
      var editorData = this.editor.getData();
      var file = new File([editorData], tempFileName + ".html", {
        type: "text/html",
        lastModified: new Date()
      });
      console.log(file);
      var url = URL_BASE + '/api/file/upload-template';
      var xhr = new XMLHttpRequest();
      var formData = new FormData();
      formData.append("file", file);
      formData.append("parent_code", "b7d39fc9-297e-489e-ae3e-59573b15b4f1");
      formData.append("user_code", "0970229e-4867-4ada-b0ac-a199446cbc21");

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status == 200) {
            var data = xhr.responseText;
            console.log(data);
          }
        }
      };

      xhr.open("POST", url);
      xhr.send(formData); // ...
    }
  }, {
    key: "match",
    value: function match() {
      var matchedTags = document.querySelectorAll('span[data-template-var]');
      var form = document.getElementById("template-form");
      Array.from(matchedTags).map(function (element) {
        var formGroup = document.createElement("div");
        formGroup.className = "form-group";
        var label = document.createElement("label");
        label.innerText = element.innerHTML;
        formGroup.appendChild(label);

        if (element.getAttribute('data-template-type') == 'Short text') {
          var input = document.createElement("input");
          input.className = "form-control";
          input.type = "text";
          input.id = element.getAttribute('data-template-var');
          input.placeholder = "enter";
        }

        ;

        if (element.getAttribute('data-template-type') == 'Long text') {
          var input = document.createElement("textarea");
          input.className = "form-control";
          input.id = element.getAttribute('data-template-var');
          input.placeholder = "enter";
        }

        ;
        formGroup.appendChild(input);
        form.appendChild(formGroup);
      });
    }
  }, {
    key: "format",
    value: function format() {
      var form = document.getElementById("template-form").getElementsByClassName("form-control");
      form.forEach(function (element) {
        console.log(document.querySelector('span[data-template-var=' + element.id + ']')); //console.log(element);

        document.querySelector('span[data-template-var=' + element.id + ']').innerText = element.value; // document.querySelector('span[data-template-var='+element.id+']').removeAttribute('data-template-type');
        // document.querySelector('span[data-template-var='+element.id+']').removeAttribute('data-template-var');
      });
    } // textTestCallback(range) {
    //     if (!range.collapsed) {
    //         return null;
    //     }
    //
    //     return DecoupledEditor.plugins.textMatch.match(range, matchCallback);
    // }
    //
    // matchCallback(text, offset) {
    //     var pattern = /\[{2}([A-z]|\])*$/,
    //         match = text.slice(0, offset)
    //             .match(pattern);
    //
    //     if (!match) {
    //         return null;
    //     }
    //
    //     return {
    //         start: match.index,
    //         end: offset
    //     };
    // }
    //
    // dataCallback(matchInfo, callback) {
    //     var data = PLACEHOLDERS.filter(function (item) {
    //         var itemName = '[[' + item.name + ']]';
    //         return itemName.indexOf(matchInfo.query.toLowerCase()) == 0;
    //     });
    //
    //     callback(data);
    // }
    //
    // changeTemplateItem(match) {
    //
    //     return match[1];
    // }
    // addPleholder( id ){
    //     const item = {
    //         id : id,
    //         question : "",
    //         type : "input"
    //     }
    // }

  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);

_defineProperty(_default, "targets", ["doc-variables"]);



/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/file_controller.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/file_controller.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
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
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
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


var URL_BASE = "http://localhost:8080";
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
    key: "classify",
    value: function classify() {
      var _this = this;

      var arg = event.currentTarget.dataset;
      var file = this.element.querySelector("#document_file").files[0];
      var url = URL_BASE + '/api/rule/evaluate';
      var xhr = new XMLHttpRequest();
      var formData = new FormData();
      formData.append("file", file);
      formData.append("user_code", arg.user);

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);

            _this.showClassifications(data.results);
          }
        }
      };

      xhr.open("POST", url);
      xhr.send(formData);
    }
  }, {
    key: "showClassifications",
    value: function showClassifications(data) {
      console.log(data);
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_12__.Controller);



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
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.link.js */ "./node_modules/core-js/modules/es.string.link.js");
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_3__);
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
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_17__);
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
  }, {
    key: "Rename",
    value: function Rename(event) {
      // item_code , parent_code
      jquery__WEBPACK_IMPORTED_MODULE_17___default()('button#rename_btn').on('click', function () {
        var label = jquery__WEBPACK_IMPORTED_MODULE_17___default()('input#label').val();
        jquery__WEBPACK_IMPORTED_MODULE_17___default().ajax({
          method: "PATCH",
          url: "/item/renameItem/" + item_code,
          data: JSON.stringify({
            label: label
          })
        }).done(function (res) {
          console.log(res);
        }).fail(function (XMLHttpRequest, textStatus, errorThrown) {
          console.log(XMLHttpRequest.responseText);
        });
      });
    } //-------------------

  }, {
    key: "ShareEMail",
    value: function ShareEMail() {
      var arg = event.currentTarget.dataset;
      var item_code = arg.sharedItemEmail;
      jquery__WEBPACK_IMPORTED_MODULE_17___default()("#btnShare").on('click', function (event) {
        event.preventDefault();
        var email = jquery__WEBPACK_IMPORTED_MODULE_17___default()('input#share_email').val();
        console.log(email);
        var roles = [];
        jquery__WEBPACK_IMPORTED_MODULE_17___default()("#find-table input:checkbox:checked").map(function () {
          roles.push(jquery__WEBPACK_IMPORTED_MODULE_17___default()(this).val());
        });
        console.log(roles);
        jquery__WEBPACK_IMPORTED_MODULE_17___default().ajax({
          method: "POST",
          url: "/api/item/shareWithOthers/" + item_code,
          data: JSON.stringify({
            email: email,
            roles: roles
          })
        }).done(function (res) {
          console.log(res);
        }).fail(function (XMLHttpRequest, textStatus, errorThrown) {
          console.log(XMLHttpRequest.responseText);
        });
      });
    }
  }, {
    key: "ShareLink",
    value: function ShareLink() {
      var arg = event.currentTarget.dataset;
      var item_code = arg.sharedItemLink;
      jquery__WEBPACK_IMPORTED_MODULE_17___default()("#shareLink_btn").on('click', function (event) {
        event.preventDefault();
        var roles = Array();
        jquery__WEBPACK_IMPORTED_MODULE_17___default()("#find-tablelink input:checkbox:checked").map(function (item) {
          roles.push(jquery__WEBPACK_IMPORTED_MODULE_17___default()(this).val());
        });
        console.log(_typeof(roles));
        jquery__WEBPACK_IMPORTED_MODULE_17___default().ajax({
          method: "POST",
          url: "/api/item/shareLinks/" + item_code,
          data: JSON.stringify({
            roles: roles
          })
        }).done(function (res) {
          var link = res.results.data.link;
          jquery__WEBPACK_IMPORTED_MODULE_17___default()("#link-data").append(JSON.stringify(link));
        }).fail(function (XMLHttpRequest, textStatus, errorThrown) {
          console.log(XMLHttpRequest.responseText);
        });
      });
    }
  }, {
    key: "CancelShareLink",
    value: function CancelShareLink(item_code) {
      jquery__WEBPACK_IMPORTED_MODULE_17___default()('button#cancel_btn').on('click', function () {
        jquery__WEBPACK_IMPORTED_MODULE_17___default().ajax({
          method: "DELETE",
          url: "/api/item/CancelshareLink/" + item_code
        }).done(function (res) {
          console.log(res);
        }).fail(function (XMLHttpRequest, textStatus, errorThrown) {
          console.log(XMLHttpRequest.responseText);
        });
      });
    }
  }, {
    key: "DownloadZip",
    value: function DownloadZip() {
      var arg = event.currentTarget.dataset;
      console.log(arg);
      jquery__WEBPACK_IMPORTED_MODULE_17___default()("#btn_zip").on('click', function (event) {
        event.preventDefault();
        var items = Array();
        jquery__WEBPACK_IMPORTED_MODULE_17___default()("#find-tableZip input:checkbox:checked").map(function (item) {
          items.push(jquery__WEBPACK_IMPORTED_MODULE_17___default()(this).val());
        });
        jquery__WEBPACK_IMPORTED_MODULE_17___default().ajax({
          method: "GET",
          url: "/api/item/downloadZip",
          data: JSON.stringify({
            items: items
          })
        }).done(function (res) {
          console.log(res);
          console.log("ok");
        }).fail(function (XMLHttpRequest, textStatus, errorThrown) {
          console.log(XMLHttpRequest.responseText);
        });
      });
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_16__.Controller);



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




var URL_BASE = "http://localhost:8080";
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
        'string': {
          pattern: /"[0-9a-zA-Z-_]+"/
        },
        'number': {
          pattern: /[0-9]+(?:\.[0-9]+)?([Ee][\+\-][0-9]+)?/
        },
        'punctuation': {
          pattern: /[(){};:,]/
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
      var URL = URL_BASE + "/api/rule";
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
      var url = URL_BASE + '/api/rule/compile';
      var xhr = new XMLHttpRequest();
      var body = {
        expression: text.value
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
    } // getRuleVars(args) {
    //
    //     let expr_arg = [];
    //     for (let arg of args) {
    //         expr_arg.push(arg.label);
    //     }
    //     return expr_arg;
    // }

  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_14__.Controller);



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
/* harmony import */ var _ckeditor5_templating_src_template__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./ckeditor5-templating/src/template */ "./assets/ckeditor5-templating/src/template.js");
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



DecoupledEditor.builtinPlugins = [_ckeditor_ckeditor5_essentials_src_essentials__WEBPACK_IMPORTED_MODULE_13__.default, _ckeditor_ckeditor5_alignment_src_alignment__WEBPACK_IMPORTED_MODULE_14__.default, _ckeditor_ckeditor5_font_src_fontsize__WEBPACK_IMPORTED_MODULE_15__.default, _ckeditor_ckeditor5_font_src_fontfamily__WEBPACK_IMPORTED_MODULE_16__.default, _ckeditor_ckeditor5_font_src_fontcolor__WEBPACK_IMPORTED_MODULE_17__.default, _ckeditor_ckeditor5_font_src_fontbackgroundcolor__WEBPACK_IMPORTED_MODULE_18__.default, _ckeditor_ckeditor5_adapter_ckfinder_src_uploadadapter__WEBPACK_IMPORTED_MODULE_19__.default, _ckeditor_ckeditor5_autoformat_src_autoformat__WEBPACK_IMPORTED_MODULE_20__.default, _ckeditor_ckeditor5_basic_styles_src_bold__WEBPACK_IMPORTED_MODULE_21__.default, _ckeditor_ckeditor5_basic_styles_src_italic__WEBPACK_IMPORTED_MODULE_22__.default, _ckeditor_ckeditor5_basic_styles_src_strikethrough__WEBPACK_IMPORTED_MODULE_23__.default, _ckeditor_ckeditor5_basic_styles_src_underline__WEBPACK_IMPORTED_MODULE_24__.default, _ckeditor_ckeditor5_block_quote_src_blockquote__WEBPACK_IMPORTED_MODULE_25__.default, _ckeditor_ckeditor5_ckfinder_src_ckfinder__WEBPACK_IMPORTED_MODULE_26__.default, _ckeditor_ckeditor5_easy_image_src_easyimage__WEBPACK_IMPORTED_MODULE_27__.default, _ckeditor_ckeditor5_heading_src_heading__WEBPACK_IMPORTED_MODULE_28__.default, _ckeditor_ckeditor5_image_src_image__WEBPACK_IMPORTED_MODULE_29__.default, _ckeditor_ckeditor5_image_src_imagecaption__WEBPACK_IMPORTED_MODULE_30__.default, _ckeditor_ckeditor5_image_src_imagestyle__WEBPACK_IMPORTED_MODULE_31__.default, _ckeditor_ckeditor5_image_src_imagetoolbar__WEBPACK_IMPORTED_MODULE_32__.default, _ckeditor_ckeditor5_image_src_imageupload__WEBPACK_IMPORTED_MODULE_33__.default, _ckeditor_ckeditor5_indent_src_indent__WEBPACK_IMPORTED_MODULE_34__.default, _ckeditor_ckeditor5_indent_src_indentblock__WEBPACK_IMPORTED_MODULE_35__.default, _ckeditor_ckeditor5_link_src_link__WEBPACK_IMPORTED_MODULE_37__.default, _ckeditor_ckeditor5_list_src_list__WEBPACK_IMPORTED_MODULE_38__.default, _ckeditor_ckeditor5_media_embed_src_mediaembed__WEBPACK_IMPORTED_MODULE_39__.default, _ckeditor_ckeditor5_paragraph_src_paragraph__WEBPACK_IMPORTED_MODULE_40__.default, _ckeditor_ckeditor5_paste_from_office_src_pastefromoffice__WEBPACK_IMPORTED_MODULE_41__.default, _ckeditor_ckeditor5_table_src_table__WEBPACK_IMPORTED_MODULE_42__.default, _ckeditor_ckeditor5_table_src_tabletoolbar__WEBPACK_IMPORTED_MODULE_43__.default, _ckeditor5_templating_src_template__WEBPACK_IMPORTED_MODULE_36__.default, _ckeditor_ckeditor5_page_break_src_pagebreak__WEBPACK_IMPORTED_MODULE_12__.default, _ckeditor_ckeditor5_cloud_services_src_cloudservices__WEBPACK_IMPORTED_MODULE_44__.default]; // Editor configuration.

DecoupledEditor.defaultConfig = {
  toolbar: {
    items: ['template', '|', 'heading', '|', 'pageBreak', '|', 'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor', '|', 'bold', 'italic', 'underline', 'strikethrough', '|', 'alignment', '|', 'numberedList', 'bulletedList', '|', 'indent', 'outdent', '|', 'blockquote', 'imageUpload', 'insertTable', 'mediaEmbed', '|', 'undo', 'redo']
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

/***/ "./assets/ckeditor5-templating/src/canceltemplatecommand.js":
/*!******************************************************************!*\
  !*** ./assets/ckeditor5-templating/src/canceltemplatecommand.js ***!
  \******************************************************************/
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./utils */ "./assets/ckeditor5-templating/src/utils.js");
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

/***/ "./assets/ckeditor5-templating/src/template-command.js":
/*!*************************************************************!*\
  !*** ./assets/ckeditor5-templating/src/template-command.js ***!
  \*************************************************************/
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./utils */ "./assets/ckeditor5-templating/src/utils.js");
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

/***/ "./assets/ckeditor5-templating/src/template-editing.js":
/*!*************************************************************!*\
  !*** ./assets/ckeditor5-templating/src/template-editing.js ***!
  \*************************************************************/
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
/* harmony import */ var _template_command_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./template-command.js */ "./assets/ckeditor5-templating/src/template-command.js");
/* harmony import */ var _canceltemplatecommand__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./canceltemplatecommand */ "./assets/ckeditor5-templating/src/canceltemplatecommand.js");
/* harmony import */ var _utils_manualdecorator__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./utils/manualdecorator */ "./assets/ckeditor5-templating/src/utils/manualdecorator.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./utils */ "./assets/ckeditor5-templating/src/utils.js");
/* harmony import */ var _theme_template_css__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../theme/template.css */ "./assets/ckeditor5-templating/theme/template.css");
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
            'data-template-type': true
          }
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
          attributes: ['data-template-var']
        },
        model: {
          key: 'templateVar',
          value: function value(viewElement) {
            return viewElement.getAttribute('data-template-var');
          }
        }
      });
      editor.conversion["for"]('upcast').elementToAttribute({
        view: {
          name: 'span',
          attributes: {
            'data-template-var': true
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

/***/ "./assets/ckeditor5-templating/src/template-ui.js":
/*!********************************************************!*\
  !*** ./assets/ckeditor5-templating/src/template-ui.js ***!
  \********************************************************/
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
/* harmony import */ var _ui_template_form_view__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ui/template-form-view */ "./assets/ckeditor5-templating/src/ui/template-form-view.js");
/* harmony import */ var _ui_template_actions_view__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ui/template-actions-view */ "./assets/ckeditor5-templating/src/ui/template-actions-view.js");
/* harmony import */ var _ui_template_save_view__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ui/template-save-view */ "./assets/ckeditor5-templating/src/ui/template-save-view.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./utils */ "./assets/ckeditor5-templating/src/utils.js");
/* harmony import */ var _theme_icons_temlateIcon_svg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../theme/icons/temlateIcon.svg */ "./assets/ckeditor5-templating/theme/icons/temlateIcon.svg");
/* harmony import */ var _theme_icons_file_export_solid_svg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../theme/icons/file-export-solid.svg */ "./assets/ckeditor5-templating/theme/icons/file-export-solid.svg");
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
      actionsView.bind('data-template-var').to(templateCommand, 'value');
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

/***/ "./assets/ckeditor5-templating/src/template.js":
/*!*****************************************************!*\
  !*** ./assets/ckeditor5-templating/src/template.js ***!
  \*****************************************************/
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
/* harmony import */ var _template_editing__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./template-editing */ "./assets/ckeditor5-templating/src/template-editing.js");
/* harmony import */ var _template_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./template-ui */ "./assets/ckeditor5-templating/src/template-ui.js");
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

/***/ "./assets/ckeditor5-templating/src/ui/template-actions-view.js":
/*!*********************************************************************!*\
  !*** ./assets/ckeditor5-templating/src/ui/template-actions-view.js ***!
  \*********************************************************************/
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../utils */ "./assets/ckeditor5-templating/src/utils.js");
/* harmony import */ var _ckeditor_ckeditor5_ui_theme_components_responsive_form_responsiveform_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ckeditor/ckeditor5-ui/theme/components/responsive-form/responsiveform.css */ "./node_modules/@ckeditor/ckeditor5-ui/theme/components/responsive-form/responsiveform.css");
/* harmony import */ var _theme_templateactions_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../theme/templateactions.css */ "./assets/ckeditor5-templating/theme/templateactions.css");
/* harmony import */ var _theme_icons_unlink_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../theme/icons/unlink.svg */ "./assets/ckeditor5-templating/theme/icons/unlink.svg");
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
          id: bind.to('data-template-var', function (id) {
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

/***/ "./assets/ckeditor5-templating/src/ui/template-form-view.js":
/*!******************************************************************!*\
  !*** ./assets/ckeditor5-templating/src/ui/template-form-view.js ***!
  \******************************************************************/
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
/* harmony import */ var _theme_templateform_css__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../theme/templateform.css */ "./assets/ckeditor5-templating/theme/templateform.css");
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

/***/ "./assets/ckeditor5-templating/src/ui/template-save-view.js":
/*!******************************************************************!*\
  !*** ./assets/ckeditor5-templating/src/ui/template-save-view.js ***!
  \******************************************************************/
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../utils */ "./assets/ckeditor5-templating/src/utils.js");
/* harmony import */ var _ckeditor_ckeditor5_ui_theme_components_responsive_form_responsiveform_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ckeditor/ckeditor5-ui/theme/components/responsive-form/responsiveform.css */ "./node_modules/@ckeditor/ckeditor5-ui/theme/components/responsive-form/responsiveform.css");
/* harmony import */ var _theme_templateactions_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../theme/templateactions.css */ "./assets/ckeditor5-templating/theme/templateactions.css");
/* harmony import */ var _theme_icons_unlink_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../theme/icons/unlink.svg */ "./assets/ckeditor5-templating/theme/icons/unlink.svg");
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

/***/ "./assets/ckeditor5-templating/src/utils.js":
/*!**************************************************!*\
  !*** ./assets/ckeditor5-templating/src/utils.js ***!
  \**************************************************/
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

/***/ "./assets/ckeditor5-templating/src/utils/manualdecorator.js":
/*!******************************************************************!*\
  !*** ./assets/ckeditor5-templating/src/utils/manualdecorator.js ***!
  \******************************************************************/
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

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/ckeditor5-templating/theme/template.css":
/*!********************************************************!*\
  !*** ./assets/ckeditor5-templating/theme/template.css ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/ckeditor5-templating/theme/templateactions.css":
/*!***************************************************************!*\
  !*** ./assets/ckeditor5-templating/theme/templateactions.css ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/ckeditor5-templating/theme/templateform.css":
/*!************************************************************!*\
  !*** ./assets/ckeditor5-templating/theme/templateform.css ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/ckeditor5-templating/theme/icons/file-export-solid.svg":
/*!***********************************************************************!*\
  !*** ./assets/ckeditor5-templating/theme/icons/file-export-solid.svg ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"file-export\" class=\"svg-inline--fa fa-file-export fa-w-18\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\"><path fill=\"currentColor\" d=\"M384 121.9c0-6.3-2.5-12.4-7-16.9L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128zM571 308l-95.7-96.4c-10.1-10.1-27.4-3-27.4 11.3V288h-64v64h64v65.2c0 14.3 17.3 21.4 27.4 11.3L571 332c6.6-6.6 6.6-17.4 0-24zm-379 28v-32c0-8.8 7.2-16 16-16h176V160H248c-13.2 0-24-10.8-24-24V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V352H208c-8.8 0-16-7.2-16-16z\"></path></svg>");

/***/ }),

/***/ "./assets/ckeditor5-templating/theme/icons/temlateIcon.svg":
/*!*****************************************************************!*\
  !*** ./assets/ckeditor5-templating/theme/icons/temlateIcon.svg ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generated by IcoMoon.io -->\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\">\n<path fill=\"#444444\" d=\"M2.1 3.1c0.2 1.3 0.4 1.6 0.4 2.9 0 0.8-1.5 1.5-1.5 1.5v1c0 0 1.5 0.7 1.5 1.5 0 1.3-0.2 1.6-0.4 2.9-0.3 2.1 0.8 3.1 1.8 3.1s2.1 0 2.1 0v-2c0 0-1.8 0.2-1.8-1 0-0.9 0.2-0.9 0.4-2.9 0.1-0.9-0.5-1.6-1.1-2.1 0.6-0.5 1.2-1.1 1.1-2-0.3-2-0.4-2-0.4-2.9 0-1.2 1.8-1.1 1.8-1.1v-2c0 0-1 0-2.1 0s-2.1 1-1.8 3.1z\"></path>\n<path fill=\"#444444\" d=\"M13.9 3.1c-0.2 1.3-0.4 1.6-0.4 2.9 0 0.8 1.5 1.5 1.5 1.5v1c0 0-1.5 0.7-1.5 1.5 0 1.3 0.2 1.6 0.4 2.9 0.3 2.1-0.8 3.1-1.8 3.1s-2.1 0-2.1 0v-2c0 0 1.8 0.2 1.8-1 0-0.9-0.2-0.9-0.4-2.9-0.1-0.9 0.5-1.6 1.1-2.1-0.6-0.5-1.2-1.1-1.1-2 0.2-2 0.4-2 0.4-2.9 0-1.2-1.8-1.1-1.8-1.1v-2c0 0 1 0 2.1 0s2.1 1 1.8 3.1z\"></path>\n</svg>\n");

/***/ }),

/***/ "./assets/ckeditor5-templating/theme/icons/unlink.svg":
/*!************************************************************!*\
  !*** ./assets/ckeditor5-templating/theme/icons/unlink.svg ***!
  \************************************************************/
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-6ea37d","vendors-node_modules_ckeditor_ckeditor5-adapter-ckfinder_src_uploadadapter_js-node_modules_ck-392f0f"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vfC9cXC4oanx0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9kb2NlZGl0b3JfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvZmlsZV9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9maWxlaWNvbl9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9mb2xkZXJfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvcnVsZV9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9Eb2NEZWNvdXBsZWRFZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ja2VkaXRvcjUtdGVtcGxhdGluZy9zcmMvY2FuY2VsdGVtcGxhdGVjb21tYW5kLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ja2VkaXRvcjUtdGVtcGxhdGluZy9zcmMvdGVtcGxhdGUtY29tbWFuZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY2tlZGl0b3I1LXRlbXBsYXRpbmcvc3JjL3RlbXBsYXRlLWVkaXRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NrZWRpdG9yNS10ZW1wbGF0aW5nL3NyYy90ZW1wbGF0ZS11aS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY2tlZGl0b3I1LXRlbXBsYXRpbmcvc3JjL3RlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ja2VkaXRvcjUtdGVtcGxhdGluZy9zcmMvdWkvdGVtcGxhdGUtYWN0aW9ucy12aWV3LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ja2VkaXRvcjUtdGVtcGxhdGluZy9zcmMvdWkvdGVtcGxhdGUtZm9ybS12aWV3LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ja2VkaXRvcjUtdGVtcGxhdGluZy9zcmMvdWkvdGVtcGxhdGUtc2F2ZS12aWV3LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ja2VkaXRvcjUtdGVtcGxhdGluZy9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NrZWRpdG9yNS10ZW1wbGF0aW5nL3NyYy91dGlscy9tYW51YWxkZWNvcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ja2VkaXRvcjUtdGVtcGxhdGluZy90aGVtZS90ZW1wbGF0ZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NrZWRpdG9yNS10ZW1wbGF0aW5nL3RoZW1lL3RlbXBsYXRlYWN0aW9ucy5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NrZWRpdG9yNS10ZW1wbGF0aW5nL3RoZW1lL3RlbXBsYXRlZm9ybS5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NrZWRpdG9yNS10ZW1wbGF0aW5nL3RoZW1lL2ljb25zL2ZpbGUtZXhwb3J0LXNvbGlkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY2tlZGl0b3I1LXRlbXBsYXRpbmcvdGhlbWUvaWNvbnMvdGVtbGF0ZUljb24uc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9ja2VkaXRvcjUtdGVtcGxhdGluZy90aGVtZS9pY29ucy91bmxpbmsuc3ZnIl0sIm5hbWVzIjpbIlVSTF9CQVNFIiwicHJvY2VzcyIsIkRlY291cGxlZEVkaXRvciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInR5cGluZyIsInRyYW5zZm9ybWF0aW9ucyIsImV4dHJhIiwiZnJvbSIsInRvIiwibWF0Y2hlcyIsImNoYW5nZVRlbXBsYXRlSXRlbSIsInRoZW4iLCJlZGl0b3IiLCJ0b29sYmFyQ29udGFpbmVyIiwiYXBwZW5kQ2hpbGQiLCJ1aSIsInZpZXciLCJ0b29sYmFyIiwiZWxlbWVudCIsIndpbmRvdyIsIm1hdGNoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwidGVtcEZpbGVOYW1lIiwidmFsdWUiLCJlZGl0b3JEYXRhIiwiZ2V0RGF0YSIsImZpbGUiLCJGaWxlIiwidHlwZSIsImxhc3RNb2RpZmllZCIsIkRhdGUiLCJsb2ciLCJ1cmwiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwiZGF0YSIsInJlc3BvbnNlVGV4dCIsIm9wZW4iLCJzZW5kIiwibWF0Y2hlZFRhZ3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9ybSIsImdldEVsZW1lbnRCeUlkIiwiQXJyYXkiLCJtYXAiLCJmb3JtR3JvdXAiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJpbm5lclRleHQiLCJpbm5lckhUTUwiLCJnZXRBdHRyaWJ1dGUiLCJpbnB1dCIsImlkIiwicGxhY2Vob2xkZXIiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZm9yRWFjaCIsIkNvbnRyb2xsZXIiLCJhcmciLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZmlsZXMiLCJ1c2VyIiwiSlNPTiIsInBhcnNlIiwic2hvd0NsYXNzaWZpY2F0aW9ucyIsInJlc3VsdHMiLCJmaWxlbmFtZSIsImdldEljb24iLCJmaWxlTmFtZSIsIml0ZW0iLCJwcmV0dHlGaWxlSWNvbnMiLCJpbWciLCJzcmMiLCJzZXRBdHRyaWJ1dGUiLCJTdHJpbmciLCJzdG9wUHJvcGFnYXRpb24iLCJqUXVlcnkiLCJyZWFkeSIsIiQiLCJtb3ZlTEZvbGRlckxpc3QiLCJhamF4IiwibWV0aG9kIiwiZm9sZGVyTW92aW5nSW4iLCJpbmRleCIsInVzZXJfY29kZSIsImRvbmUiLCJyZXMiLCJlbXB0eSIsImFkZENsYXNzIiwidGV4dCIsInBhcmVudF9mb2xkZXIiLCJhcHBlbmRUbyIsImVhY2giLCJyb3dzIiwiaSIsImxpc3RJdGVtIiwibGlGb2xkZXIiLCJhdHRyIiwiZm9sZGVyVG9Nb3ZlIiwiY29kZSIsInBhdGgiLCJyZXBsYWNlIiwibW92ZUZvcm0iLCJzdWJtaXRCdXR0b24iLCJvbiIsInZhbCIsIml0ZW1fY29kZSIsInN0cmluZ2lmeSIsImZhaWwiLCJ0ZXh0U3RhdHVzIiwiZXJyb3JUaHJvd24iLCJzaGFyZWRJdGVtRW1haWwiLCJwcmV2ZW50RGVmYXVsdCIsImVtYWlsIiwicm9sZXMiLCJwdXNoIiwic2hhcmVkSXRlbUxpbmsiLCJsaW5rIiwiaXRlbXMiLCJQcmlzbSIsInBhdHRlcm4iLCJnZXRPcGVyYXRvcnMiLCJvcGVyYXRvcnMiLCJydWxlQXV0b2NvbXBsZXRlIiwidHJpYnV0ZSIsIlRyaWJ1dGUiLCJ2YWx1ZXMiLCJzZWxlY3RUZW1wbGF0ZSIsIm9yaWdpbmFsIiwia2V5IiwibWVudUl0ZW1UZW1wbGF0ZSIsInN0cmluZyIsImF1dG9jb21wbGV0ZU1vZGUiLCJhdHRhY2giLCJydWxlIiwiZm9jdXMiLCJzeW5jX3Njcm9sbCIsImJlZm9yZV90YWIiLCJzbGljZSIsInNlbGVjdGlvblN0YXJ0IiwiYWZ0ZXJfdGFiIiwic2VsZWN0aW9uRW5kIiwibGVuZ3RoIiwiY3Vyc29yX3BvcyIsInJlc3VsdF9lbGVtZW50Iiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsImNiIiwiVVJMIiwiYm9keSIsImV4cHJlc3Npb24iLCJzaG93QWxlcnRzIiwic2V0UmVxdWVzdEhlYWRlciIsInNjb3BlIiwiYWxlcnQiLCJzdHlsZSIsImRpc3BsYXkiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQXR0cmlidXRlIiwiRGVjb3VwbGVkRWRpdG9yQmFzZSIsImJ1aWx0aW5QbHVnaW5zIiwiRXNzZW50aWFscyIsIkFsaWdubWVudCIsIkZvbnRTaXplIiwiRm9udEZhbWlseSIsIkZvbnRDb2xvciIsIkZvbnRCYWNrZ3JvdW5kQ29sb3IiLCJVcGxvYWRBZGFwdGVyIiwiQXV0b2Zvcm1hdCIsIkJvbGQiLCJJdGFsaWMiLCJTdHJpa2V0aHJvdWdoIiwiVW5kZXJsaW5lIiwiQmxvY2tRdW90ZSIsIkNLRmluZGVyIiwiRWFzeUltYWdlIiwiSGVhZGluZyIsIkltYWdlIiwiSW1hZ2VDYXB0aW9uIiwiSW1hZ2VTdHlsZSIsIkltYWdlVG9vbGJhciIsIkltYWdlVXBsb2FkIiwiSW5kZW50IiwiSW5kZW50QmxvY2siLCJMaW5rIiwiTGlzdCIsIk1lZGlhRW1iZWQiLCJQYXJhZ3JhcGgiLCJQYXN0ZUZyb21PZmZpY2UiLCJUYWJsZSIsIlRhYmxlVG9vbGJhciIsIlRlbXBsYXRlIiwiUGFnZUJyZWFrIiwiQ2xvdWRTZXJ2aWNlcyIsImRlZmF1bHRDb25maWciLCJpbWFnZSIsInN0eWxlcyIsInRhYmxlIiwiY29udGVudFRvb2xiYXIiLCJsYW5ndWFnZSIsInJlcXVpcmUiLCJhcHAiLCJzdGFydFN0aW11bHVzQXBwIiwiQ2FuY2VsVGVtcGxhdGVDb21tYW5kIiwibW9kZWwiLCJkb2MiLCJzZWxlY3RlZEVsZW1lbnQiLCJmaXJzdCIsInNlbGVjdGlvbiIsImdldFNlbGVjdGVkQmxvY2tzIiwiaXNJbWFnZUFsbG93ZWQiLCJzY2hlbWEiLCJpc0VuYWJsZWQiLCJjaGVja0F0dHJpYnV0ZSIsImNoZWNrQXR0cmlidXRlSW5TZWxlY3Rpb24iLCJsaW5rQ29tbWFuZCIsImNvbW1hbmRzIiwiZ2V0IiwiY2hhbmdlIiwid3JpdGVyIiwicmFuZ2VzVG9VbmxpbmsiLCJpc0NvbGxhcHNlZCIsImZpbmRBdHRyaWJ1dGVSYW5nZSIsImdldEZpcnN0UG9zaXRpb24iLCJnZXRWYWxpZFJhbmdlcyIsImdldFJhbmdlcyIsInJhbmdlIiwibWFudWFsRGVjb3JhdG9ycyIsIm1hbnVhbERlY29yYXRvciIsIkNvbW1hbmQiLCJUZW1wbGF0ZUNvbW1hbmQiLCJDb2xsZWN0aW9uIiwiX2dldERlY29yYXRvclN0YXRlRnJvbU1vZGVsIiwidGVtcGxhdGVWYXIiLCJtYW51YWxEZWNvcmF0b3JJZHMiLCJ0cnV0aHlNYW51YWxEZWNvcmF0b3JzIiwiZmFsc3lNYW51YWxEZWNvcmF0b3JzIiwibmFtZSIsInBvc2l0aW9uIiwiaGFzQXR0cmlidXRlIiwidmFyUmFuZ2UiLCJzZXRTZWxlY3Rpb24iLCJjcmVhdGVQb3NpdGlvbkFmdGVyIiwiZW5kIiwibm9kZUJlZm9yZSIsImF0dHJpYnV0ZXMiLCJ0b01hcCIsImdldEF0dHJpYnV0ZXMiLCJzZXQiLCJpbnNlcnRDb250ZW50IiwiY3JlYXRlVGV4dCIsInBvc2l0aW9uQWZ0ZXIiLCJyZW1vdmVTZWxlY3Rpb25BdHRyaWJ1dGUiLCJyYW5nZXMiLCJhbGxvd2VkUmFuZ2VzIiwiY3JlYXRlUmFuZ2VPbiIsInJhbmdlc1RvVXBkYXRlIiwiX2lzUmFuZ2VUb1VwZGF0ZSIsImRlY29yYXRvck5hbWUiLCJhbGxvd2VkUmFuZ2UiLCJjb250YWluc1JhbmdlIiwiSElHSExJR0hUX1NFTEVDVEVEX0NMQVNTIiwiREVDT1JBVE9SX01BTlVBTCIsIlRlbXBsYXRlRWRpdGluZyIsImNvbmZpZyIsImRlZmluZSIsImFkZFRhcmdldFRvRXh0ZXJuYWxMaW5rcyIsImV4dGVuZCIsImFsbG93QXR0cmlidXRlcyIsImNvbnZlcnNpb24iLCJhdHRyaWJ1dGVUb0VsZW1lbnQiLCJjcmVhdGVUZW1wbGF0ZUVsZW1lbnQiLCJjb252ZXJzaW9uQXBpIiwiY3JlYXRlQXR0cmlidXRlRWxlbWVudCIsInByaW9yaXR5Iiwic2V0Q3VzdG9tUHJvcGVydHkiLCJlbGVtZW50VG9BdHRyaWJ1dGUiLCJ2aWV3RWxlbWVudCIsImFkZCIsImxpbmtEZWNvcmF0b3JzIiwiZ2V0TG9jYWxpemVkRGVjb3JhdG9ycyIsInQiLCJub3JtYWxpemVEZWNvcmF0b3JzIiwiX2VuYWJsZU1hbnVhbERlY29yYXRvcnMiLCJmaWx0ZXIiLCJtb2RlIiwidHdvU3RlcENhcmV0TW92ZW1lbnRQbHVnaW4iLCJwbHVnaW5zIiwiVHdvU3RlcENhcmV0TW92ZW1lbnQiLCJyZWdpc3RlckF0dHJpYnV0ZSIsImlubGluZUhpZ2hsaWdodCIsIl9lbmFibGVJbnNlcnRDb250ZW50U2VsZWN0aW9uQXR0cmlidXRlc0ZpeGVyIiwiX2VuYWJsZUNsaWNraW5nQWZ0ZXJMaW5rIiwiX2VuYWJsZVR5cGluZ092ZXJMaW5rIiwiX2hhbmRsZURlbGV0ZUNvbnRlbnRBZnRlckxpbmsiLCJtYW51YWxEZWNvcmF0b3JEZWZpbml0aW9ucyIsImNvbW1hbmQiLCJkZWNvcmF0b3IiLCJNYW51YWxEZWNvcmF0b3IiLCJtYW51YWxEZWNvcmF0b3JOYW1lIiwibGlzdGVuVG8iLCJhbmNob3IiLCJub2RlQWZ0ZXIiLCJyZW1vdmVMaW5rQXR0cmlidXRlc0Zyb21TZWxlY3Rpb24iLCJlZGl0aW5nIiwiYWRkT2JzZXJ2ZXIiLCJNb3VzZU9ic2VydmVyIiwiY2xpY2tlZCIsImxpbmtSYW5nZSIsImlzVG91Y2hpbmciLCJzdGFydCIsInNlbGVjdGlvbkF0dHJpYnV0ZXMiLCJkZWxldGVkQ29udGVudCIsImlzVHlwaW5nIiwic2hvdWxkQ29weUF0dHJpYnV0ZXMiLCJldnQiLCJhdHRyaWJ1dGUiLCJzaG91bGRQcmVzZXJ2ZUF0dHJpYnV0ZXMiLCJoYXNCYWNrc3BhY2VQcmVzc2VkIiwiZG9tRXZlbnQiLCJrZXlDb2RlIiwia2V5Q29kZXMiLCJjb250YWluc1Bvc2l0aW9uIiwiaXNFcXVhbCIsImVucXVldWVDaGFuZ2UiLCJJbnB1dCIsIkNsaXBib2FyZFBpcGVsaW5lIiwiUGx1Z2luIiwiZmlyc3RQb3NpdGlvbiIsImxhc3RQb3NpdGlvbiIsImdldExhc3RQb3NpdGlvbiIsIm5vZGVBdEZpcnN0UG9zaXRpb24iLCJpcyIsIm5vZGVBdExhc3RQb3NpdGlvbiIsInRleHROb2RlIiwiY3JlYXRlUmFuZ2UiLCJpc0lucHV0IiwiYmF0Y2giLCJWSVNVQUxfU0VMRUNUSU9OX01BUktFUl9OQU1FIiwiVGVtcGxhdGVVaSIsIkNsaWNrT2JzZXJ2ZXIiLCJhY3Rpb25zVmlldyIsIl9jcmVhdGVBY3Rpb25zVmlldyIsInNhdmVWaWV3IiwiX2NyZWF0ZVNhdmVWaWV3IiwiZm9ybVZpZXciLCJfY3JlYXRlRm9ybVZpZXciLCJfYmFsbG9vbiIsIkNvbnRleHR1YWxCYWxsb29uIiwiX3BhbmVsIiwiQmFsbG9vblBhbmVsVmlldyIsIl9jcmVhdGVUb29sYmFyTGlua0J1dHRvbiIsIl9lbmFibGVVc2VyQmFsbG9vbkludGVyYWN0aW9ucyIsIm1hcmtlclRvSGlnaGxpZ2h0IiwiY2xhc3NlcyIsIm1hcmtlclRvRWxlbWVudCIsImRlc3Ryb3kiLCJUZW1wbGF0ZUFjdGlvbnNWaWV3IiwibG9jYWxlIiwidGVtcGxhdGVDb21tYW5kIiwiY2FuY2VsVGVtcGxhdGVDb21tYW5kIiwiYmluZCIsImVkaXRCdXR0b25WaWV3IiwidW5saW5rQnV0dG9uVmlldyIsIl9hZGRGb3JtVmlldyIsImV4ZWN1dGUiLCJfaGlkZVVJIiwia2V5c3Ryb2tlcyIsImNhbmNlbCIsIlRFTVBMQVRFX0tFWVNUUk9LRSIsIlRlbXBsYXRlU2F2ZVZpZXciLCJUZW1wbGF0ZUZvcm1WaWV3IiwibGFiZWxJbnB1dFZpZXciLCJmaWVsZFZpZXciLCJzYXZlQnV0dG9uVmlldyIsInR5cGVJbnB1dFZpZXciLCJidXR0b25WaWV3IiwiZ2V0RGVjb3JhdG9yU3dpdGNoZXNTdGF0ZSIsIl9jbG9zZUZvcm1WaWV3Iiwia2V5RXZ0RGF0YSIsIl9zaG93VUkiLCJjb21wb25lbnRGYWN0b3J5IiwiYnV0dG9uIiwiQnV0dG9uVmlldyIsImljb24iLCJUZW1sYXRlSWNvbiIsImtleXN0cm9rZSIsInRvb2x0aXAiLCJpc1RvZ2dsZWFibGUiLCJTYXZlVGVtcGxhdGUiLCJfYWRkU2F2ZVZpZXciLCJ2aWV3RG9jdW1lbnQiLCJwYXJlbnRMaW5rIiwiX2dldFNlbGVjdGVkTGlua0VsZW1lbnQiLCJfYXJlQWN0aW9uc1Zpc2libGUiLCJmb2N1c1RyYWNrZXIiLCJpc0ZvY3VzZWQiLCJfaXNVSVZpc2libGUiLCJjbGlja091dHNpZGVIYW5kbGVyIiwiZW1pdHRlciIsImFjdGl2YXRvciIsIl9pc1VJSW5QYW5lbCIsImNvbnRleHRFbGVtZW50cyIsImNhbGxiYWNrIiwiX2FyZUFjdGlvbnNJblBhbmVsIiwiX2dldEJhbGxvb25Qb3NpdGlvbkRhdGEiLCJwb3NpdGlvbnMiLCJ0YXJnZXQiLCJub3J0aEFycm93U291dGgiLCJjb250ZW50IiwicmVuZGVyIiwicGluIiwiX2lzRm9ybUluUGFuZWwiLCJkaXNhYmxlQ3NzVHJhbnNpdGlvbnMiLCJ2aXNpYmxlVmlldyIsInNlbGVjdCIsImVuYWJsZUNzc1RyYW5zaXRpb25zIiwicmVzdG9yZU1hbnVhbERlY29yYXRvclN0YXRlcyIsInVuZGVmaW5lZCIsIl9yZW1vdmVGb3JtVmlldyIsInJlbW92ZSIsIl9oaWRlRmFrZVZpc3VhbFNlbGVjdGlvbiIsImZvcmNlVmlzaWJsZSIsIl9zaG93RmFrZVZpc3VhbFNlbGVjdGlvbiIsIl9hZGRBY3Rpb25zVmlldyIsInNob3dTdGFjayIsIl9zdGFydFVwZGF0aW5nVUkiLCJzdG9wTGlzdGVuaW5nIiwicHJldlNlbGVjdGVkTGluayIsInByZXZTZWxlY3Rpb25QYXJlbnQiLCJnZXRTZWxlY3Rpb25QYXJlbnQiLCJ1cGRhdGUiLCJzZWxlY3RlZExpbmsiLCJzZWxlY3Rpb25QYXJlbnQiLCJ1cGRhdGVQb3NpdGlvbiIsImdldEFuY2VzdG9ycyIsInJldmVyc2UiLCJmaW5kIiwibm9kZSIsImhhc1ZpZXciLCJtYXJrZXJzIiwiaGFzIiwibWFya2VyVmlld0VsZW1lbnRzIiwibWFwcGVyIiwibWFya2VyTmFtZVRvRWxlbWVudHMiLCJuZXdSYW5nZSIsImNyZWF0ZVBvc2l0aW9uQmVmb3JlIiwiZG9tQ29udmVydGVyIiwidmlld1JhbmdlVG9Eb20iLCJ0YXJnZXRMaW5rIiwiZ2V0Rmlyc3RSYW5nZSIsIm1hcFZpZXdUb0RvbSIsImZpbmRMaW5rRWxlbWVudEFuY2VzdG9yIiwiZ2V0VHJpbW1lZCIsInN0YXJ0TGluayIsImVuZExpbmsiLCJjcmVhdGVSYW5nZUluIiwidXBkYXRlTWFya2VyIiwiaXNBdEVuZCIsInN0YXJ0UG9zaXRpb24iLCJnZXRMYXN0TWF0Y2hpbmdQb3NpdGlvbiIsImlzQ29udGVudCIsImJvdW5kYXJpZXMiLCJhZGRNYXJrZXIiLCJ1c2luZ09wZXJhdGlvbiIsImFmZmVjdHNEYXRhIiwicmVtb3ZlTWFya2VyIiwiYW5jZXN0b3IiLCJpc0xpbmtFbGVtZW50IiwiRm9jdXNUcmFja2VyIiwiS2V5c3Ryb2tlSGFuZGxlciIsInByZXZpZXdCdXR0b25WaWV3IiwiX2NyZWF0ZVByZXZpZXdCdXR0b24iLCJfY3JlYXRlQnV0dG9uIiwidW5saW5rSWNvbiIsImljb25zIiwiX2ZvY3VzYWJsZXMiLCJWaWV3Q29sbGVjdGlvbiIsIl9mb2N1c0N5Y2xlciIsIkZvY3VzQ3ljbGVyIiwiZm9jdXNhYmxlcyIsImtleXN0cm9rZUhhbmRsZXIiLCJhY3Rpb25zIiwiZm9jdXNQcmV2aW91cyIsImZvY3VzTmV4dCIsInNldFRlbXBsYXRlIiwidGFnIiwidGFiaW5kZXgiLCJjaGlsZHJlbiIsImNoaWxkVmlld3MiLCJ2IiwiZm9jdXNGaXJzdCIsImV2ZW50TmFtZSIsImRlbGVnYXRlIiwiYmluZFRlbXBsYXRlIiwid2l0aFRleHQiLCJleHRlbmRUZW1wbGF0ZSIsInJlbCIsInRlbXBsYXRlIiwiZXZlbnRMaXN0ZW5lcnMiLCJWaWV3IiwiX2NyZWF0ZVRleHRJbnB1dCIsIl9jcmVhdGVEcm9wRG93bklucHV0IiwiY2FuY2VsQnV0dG9uVmlldyIsIl9tYW51YWxEZWNvcmF0b3JTd2l0Y2hlcyIsIl9jcmVhdGVNYW51YWxEZWNvcmF0b3JTd2l0Y2hlcyIsIl9jcmVhdGVGb3JtQ2hpbGRyZW4iLCJjbGFzc0xpc3QiLCJpbmplY3RDc3NUcmFuc2l0aW9uRGlzYWJsZXIiLCJyZWR1Y2UiLCJhY2N1bXVsYXRvciIsInN3aXRjaEJ1dHRvbiIsImlzT24iLCJzdWJtaXRIYW5kbGVyIiwibGFiZWxlZElucHV0IiwiTGFiZWxlZEZpZWxkVmlldyIsImNyZWF0ZUxhYmVsZWRJbnB1dFRleHQiLCJjcmVhdGVMYWJlbGVkRHJvcGRvd24iLCJsYWJlbGVkRmllbGRWaWV3Iiwidmlld1VpZCIsInN0YXR1c1VpZCIsImRyb3Bkb3duVmlldyIsImNyZWF0ZURyb3Bkb3duIiwiU3BsaXRCdXR0b25WaWV3IiwiYXJpYURlc2NyaWJlZEJ5SWQiLCJidXR0b25zIiwiX2NyZWF0ZURyb3Bkb3duQnV0dG9uIiwiYWRkVG9vbGJhclRvRHJvcGRvd24iLCJ0b01hbnkiLCJhcmVFbmFibGVkIiwic29tZSIsImFyZUFjdGl2ZSIsImZpbmRJbmRleCIsInRvb2xiYXJWaWV3IiwiaXNWZXJ0aWNhbCIsInN3aXRjaGVzIiwiY3JlYXRlQ29sbGVjdGlvbiIsIlN3aXRjaEJ1dHRvblZpZXciLCJkZWNvcmF0b3JWYWx1ZSIsImNvbW1hbmRWYWx1ZSIsImRlZmF1bHRWYWx1ZSIsImFkZGl0aW9uYWxCdXR0b25zVmlldyIsIkFUVFJJQlVURV9XSElURVNQQUNFUyIsIlNBRkVfVVJMIiwiRU1BSUxfUkVHX0VYUCIsIlBST1RPQ09MX1JFR19FWFAiLCJISUdITElHSFRfQ0xBU1MiLCJTQVZFX0tFWVNUUk9LRSIsImdldEN1c3RvbVByb3BlcnR5IiwibGlua0VsZW1lbnQiLCJlbnN1cmVTYWZlVXJsIiwiaXNTYWZlVXJsIiwibm9ybWFsaXplZFVybCIsImRlY29yYXRvcnMiLCJsb2NhbGl6ZWREZWNvcmF0b3JzTGFiZWxzIiwicmV0QXJyYXkiLCJPYmplY3QiLCJlbnRyaWVzIiwiYXNzaWduIiwidXBwZXJGaXJzdCIsImlzRW1haWwiLCJ0ZXN0IiwiYWRkTGlua1Byb3RvY29sSWZBcHBsaWNhYmxlIiwiZGVmYXVsdFByb3RvY29sIiwicHJvdG9jb2wiLCJpc1Byb3RvY29sTmVlZGVkIiwiQ3VzdG9tRmlndXJlQXR0cmlidXRlcyIsInNldHVwQ3VzdG9tQ2xhc3NDb252ZXJzaW9uIiwidXBjYXN0Q3VzdG9tQ2xhc3NlcyIsInNldHVwQ3VzdG9tQXR0cmlidXRlQ29udmVyc2lvbiIsInZpZXdFbGVtZW50TmFtZSIsIm1vZGVsRWxlbWVudE5hbWUiLCJkb3duY2FzdEN1c3RvbUNsYXNzZXNUb0ZpZ3VyZSIsInZpZXdBdHRyaWJ1dGUiLCJtb2RlbEF0dHJpYnV0ZSIsInVwY2FzdEF0dHJpYnV0ZSIsImRvd25jYXN0QXR0cmlidXRlIiwiZWxlbWVudE5hbWUiLCJkaXNwYXRjaGVyIiwidmlld0l0ZW0iLCJtb2RlbFJhbmdlIiwibW9kZWxFbGVtZW50IiwiY3VycmVudEF0dHJpYnV0ZVZhbHVlIiwiZ2V0Q2xhc3NOYW1lcyIsInZpZXdGaWd1cmUiLCJ0b1ZpZXdFbGVtZW50IiwiZG93bmNhc3RDdXN0b21DbGFzc2VzVG9DaGlsZCIsImZpbmRWaWV3Q2hpbGQiLCJ2aWV3Q2hpbGRyZW4iLCJnZXRJdGVtcyIsIm1peCIsIk9ic2VydmFibGVNaXhpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBJOzs7Ozs7Ozs7Ozs7Ozs7QUMxQkEsaUVBQWU7QUFDZixDQUFDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREQ7QUFDQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHQyx1QkFBakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztXQUtJLG1CQUFVO0FBQUE7O0FBRU5DLHNFQUFBLENBQ1lDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qiw0QkFBdkIsQ0FEWixFQUNrRTtBQUUxREMsY0FBTSxFQUFFO0FBQ0pDLHlCQUFlLEVBQUU7QUFFYkMsaUJBQUssRUFBRSxDQUNIO0FBQ0lDLGtCQUFJLEVBQUUseUJBRFY7QUFFSUMsZ0JBQUUsRUFBRSxZQUFBQyxPQUFPO0FBQUEsdUJBQUksQ0FBQyxJQUFELEVBQU8sS0FBSSxDQUFDQyxrQkFBTCxDQUF3QkQsT0FBeEIsQ0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RQQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Q0FJQTtBQUNBOztBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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RUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNFLE9BQUtxTSxHQUFMLENBQVUsT0FBVjtBQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBQ0UsT0FBS29TLFlBQUwsR0FBb0JBLFlBQXBCO0FBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFDRSxPQUFLOWUsS0FBTCxHQUFhQSxLQUFiO0FBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNFLE9BQUt1TSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLEM7OztBQUdGeVYsd0RBQUcsQ0FBRXBTLGVBQUYsRUFBbUJxUyxnRUFBbkIsQ0FBSCxDOzs7Ozs7Ozs7Ozs7QUN0RUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxpRUFBZSxzbkI7Ozs7Ozs7Ozs7Ozs7OztBQ0FmLGlFQUFlLDgvQjs7Ozs7Ozs7Ozs7Ozs7O0FDQWYsaUVBQWUsbzBCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9kb2NlZGl0b3JfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2RvY2VkaXRvcl9jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9maWxlX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9maWxlX2NvbnRyb2xsZXIuanNcIixcblx0XCIuL2ZpbGVpY29uX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9maWxlaWNvbl9jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9mb2xkZXJfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2ZvbGRlcl9jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9ydWxlX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9ydWxlX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuKGp8dClzeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQge0NvbnRyb2xsZXJ9IGZyb20gJ3N0aW11bHVzJztcbmltcG9ydCBEZWNvdXBsZWRFZGl0b3IgZnJvbSAnLi4vRG9jRGVjb3VwbGVkRWRpdG9yJztcbmltcG9ydCBDS0VkaXRvckluc3BlY3RvciBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWluc3BlY3Rvcic7XG5cbmNvbnN0IFVSTF9CQVNFID0gcHJvY2Vzcy5lbnYudXJsO1xuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgc3RhdGljIHRhcmdldHMgPSBbXCJkb2MtdmFyaWFibGVzXCJdXG5cblxuICAgIGNvbm5lY3QoKSB7XG5cbiAgICAgICAgRGVjb3VwbGVkRWRpdG9yXG4gICAgICAgICAgICAuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb2N1bWVudC1lZGl0b3JfX2VkaXRhYmxlJyksIHtcblxuICAgICAgICAgICAgICAgIHR5cGluZzoge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1hdGlvbnM6IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmE6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb206IC8oXFxbezJ9KShbYS16XSspKFxcXXsyfSkkLyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IG1hdGNoZXMgPT4gW251bGwsIHRoaXMuY2hhbmdlVGVtcGxhdGVJdGVtKG1hdGNoZXMpLCBudWxsXS8vICAvL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZWRpdG9yID0+IHtcblxuXG4gICAgICAgICAgICAgICAvLyBDS0VkaXRvckluc3BlY3Rvci5hdHRhY2goIGVkaXRvciApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvb2xiYXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG9jdW1lbnQtZWRpdG9yX190b29sYmFyJyk7XG4gICAgICAgICAgICAgICAgdG9vbGJhckNvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0b3IudWkudmlldy50b29sYmFyLmVsZW1lbnQpO1xuXG5cbiAgICAgICAgICAgICAgICB3aW5kb3cuZWRpdG9yID0gZWRpdG9yO1xuICAgICAgICAgICAgICAgIHRoaXMuZWRpdG9yID0gZWRpdG9yO1xuICAgICAgICAgICAgICAgIHRoaXMubWF0Y2goKTtcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuICAgIHNhdmVUZW1wbGF0ZSgpe1xuICAgICAgICAgICAgY29uc3QgdGVtcEZpbGVOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXBsYXRlX2xhYmVsJykudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBlZGl0b3JEYXRhID0gdGhpcy5lZGl0b3IuZ2V0RGF0YSgpO1xuICAgICAgICAgICAgdmFyIGZpbGUgPSBuZXcgRmlsZShbZWRpdG9yRGF0YV0sIHRlbXBGaWxlTmFtZStcIi5odG1sXCIsIHt0eXBlOiBcInRleHQvaHRtbFwiLCBsYXN0TW9kaWZpZWQ6IG5ldyBEYXRlKCl9KVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmaWxlKTtcbiAgICAgICAgICAgIHZhciB1cmwgPSBVUkxfQkFTRSsnL2FwaS9maWxlL3VwbG9hZC10ZW1wbGF0ZSc7XG4gICAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImZpbGVcIiwgZmlsZSk7XG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJwYXJlbnRfY29kZVwiLCBcImI3ZDM5ZmM5LTI5N2UtNDg5ZS1hZTNlLTU5NTczYjE1YjRmMVwiICk7XG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ1c2VyX2NvZGVcIiwgXCIwOTcwMjI5ZS00ODY3LTRhZGEtYjBhYy1hMTk5NDQ2Y2JjMjFcIik7XG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4gIHtcbiAgICAgICAgICAgICAgICBpZih4aHIucmVhZHlTdGF0ZSA9PT0gNCl7XG4gICAgICAgICAgICAgICAgICAgIGlmICggIHhoci5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHhoci5yZXNwb25zZVRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgdXJsICApO1xuICAgICAgICAgICAgeGhyLnNlbmQoZm9ybURhdGEpO1xuXG4gICAgICAgICAgICAvLyAuLi5cblxuICAgIH1cblxuICAgIG1hdGNoKCl7XG4gICAgICAgIGxldCBtYXRjaGVkVGFncyA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuW2RhdGEtdGVtcGxhdGUtdmFyXScpO1xuICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcGxhdGUtZm9ybVwiKTtcbiAgICAgICAgQXJyYXkuZnJvbShtYXRjaGVkVGFncykubWFwKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9ybUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiICk7XG4gICAgICAgICAgICBmb3JtR3JvdXAuY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwXCI7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9ICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiApO1xuICAgICAgICAgICAgbGFiZWwuaW5uZXJUZXh0ID0gZWxlbWVudC5pbm5lckhUTUw7XG4gICAgICAgICAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgaWYoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUtdHlwZScpID09ICdTaG9ydCB0ZXh0Jyl7XG4gICAgICAgICAgICAgICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIgKTtcbiAgICAgICAgICAgICAgICBpbnB1dC5jbGFzc05hbWUgPSBcImZvcm0tY29udHJvbFwiO1xuICAgICAgICAgICAgICAgIGlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgICAgICAgICBpbnB1dC5pZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlLXZhcicpO1xuICAgICAgICAgICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gXCJlbnRlclwiXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUtdHlwZScpID09ICdMb25nIHRleHQnKXtcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiApO1xuICAgICAgICAgICAgICAgIGlucHV0LmNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCI7XG4gICAgICAgICAgICAgICAgaW5wdXQuaWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZS12YXInKTtcbiAgICAgICAgICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9IFwiZW50ZXJcIlxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZm9ybUdyb3VwLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybUdyb3VwKTtcblxuICAgICAgICB9KVxuICAgIH1cbiAgICBmb3JtYXQoKXtcbiAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXBsYXRlLWZvcm1cIikuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImZvcm0tY29udHJvbFwiKTtcbiAgICAgICAgZm9ybS5mb3JFYWNoKCAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3BhbltkYXRhLXRlbXBsYXRlLXZhcj0nK2VsZW1lbnQuaWQrJ10nKSk7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGVsZW1lbnQpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3BhbltkYXRhLXRlbXBsYXRlLXZhcj0nK2VsZW1lbnQuaWQrJ10nKS5pbm5lclRleHQgPSBlbGVtZW50LnZhbHVlO1xuICAgICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzcGFuW2RhdGEtdGVtcGxhdGUtdmFyPScrZWxlbWVudC5pZCsnXScpLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZS10eXBlJyk7XG4gICAgICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NwYW5bZGF0YS10ZW1wbGF0ZS12YXI9JytlbGVtZW50LmlkKyddJykucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlLXZhcicpO1xuXG5cblxuXG4gICAgICAgIH0pXG5cbiAgICB9XG4gICAgLy8gdGV4dFRlc3RDYWxsYmFjayhyYW5nZSkge1xuICAgIC8vICAgICBpZiAoIXJhbmdlLmNvbGxhcHNlZCkge1xuICAgIC8vICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgLy8gICAgIH1cbiAgICAvL1xuICAgIC8vICAgICByZXR1cm4gRGVjb3VwbGVkRWRpdG9yLnBsdWdpbnMudGV4dE1hdGNoLm1hdGNoKHJhbmdlLCBtYXRjaENhbGxiYWNrKTtcbiAgICAvLyB9XG4gICAgLy9cbiAgICAvLyBtYXRjaENhbGxiYWNrKHRleHQsIG9mZnNldCkge1xuICAgIC8vICAgICB2YXIgcGF0dGVybiA9IC9cXFt7Mn0oW0Etel18XFxdKSokLyxcbiAgICAvLyAgICAgICAgIG1hdGNoID0gdGV4dC5zbGljZSgwLCBvZmZzZXQpXG4gICAgLy8gICAgICAgICAgICAgLm1hdGNoKHBhdHRlcm4pO1xuICAgIC8vXG4gICAgLy8gICAgIGlmICghbWF0Y2gpIHtcbiAgICAvLyAgICAgICAgIHJldHVybiBudWxsO1xuICAgIC8vICAgICB9XG4gICAgLy9cbiAgICAvLyAgICAgcmV0dXJuIHtcbiAgICAvLyAgICAgICAgIHN0YXJ0OiBtYXRjaC5pbmRleCxcbiAgICAvLyAgICAgICAgIGVuZDogb2Zmc2V0XG4gICAgLy8gICAgIH07XG4gICAgLy8gfVxuICAgIC8vXG4gICAgLy8gZGF0YUNhbGxiYWNrKG1hdGNoSW5mbywgY2FsbGJhY2spIHtcbiAgICAvLyAgICAgdmFyIGRhdGEgPSBQTEFDRUhPTERFUlMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgLy8gICAgICAgICB2YXIgaXRlbU5hbWUgPSAnW1snICsgaXRlbS5uYW1lICsgJ11dJztcbiAgICAvLyAgICAgICAgIHJldHVybiBpdGVtTmFtZS5pbmRleE9mKG1hdGNoSW5mby5xdWVyeS50b0xvd2VyQ2FzZSgpKSA9PSAwO1xuICAgIC8vICAgICB9KTtcbiAgICAvL1xuICAgIC8vICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICAvLyB9XG4gICAgLy9cbiAgICAvLyBjaGFuZ2VUZW1wbGF0ZUl0ZW0obWF0Y2gpIHtcbiAgICAvL1xuICAgIC8vICAgICByZXR1cm4gbWF0Y2hbMV07XG4gICAgLy8gfVxuICAgIC8vIGFkZFBsZWhvbGRlciggaWQgKXtcbiAgICAvLyAgICAgY29uc3QgaXRlbSA9IHtcbiAgICAvLyAgICAgICAgIGlkIDogaWQsXG4gICAgLy8gICAgICAgICBxdWVzdGlvbiA6IFwiXCIsXG4gICAgLy8gICAgICAgICB0eXBlIDogXCJpbnB1dFwiXG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG59XG4iLCJpbXBvcnQge0NvbnRyb2xsZXJ9IGZyb20gJ3N0aW11bHVzJztcbmNvbnN0IFVSTF9CQVNFID0gcHJvY2Vzcy5lbnYudXJsO1xuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcblxuXG4gICAgfVxuICAgIGNsYXNzaWZ5KCl7XG4gICAgICAgIGNvbnN0IGFyZyA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldFxuICAgICAgICBsZXQgZmlsZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2RvY3VtZW50X2ZpbGVcIikuZmlsZXNbMF07XG4gICAgICAgIHZhciB1cmwgPSBVUkxfQkFTRSsnL2FwaS9ydWxlL2V2YWx1YXRlJztcbiAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiZmlsZVwiLCBmaWxlKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwidXNlcl9jb2RlXCIsIGFyZy51c2VyKTtcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+ICB7XG4gICAgICAgICAgICBpZih4aHIucmVhZHlTdGF0ZSA9PT0gNCl7XG4gICAgICAgICAgICAgICAgaWYgKCAgeGhyLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dDbGFzc2lmaWNhdGlvbnMoZGF0YS5yZXN1bHRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9XG4gICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCB1cmwgICk7XG4gICAgICAgIHhoci5zZW5kKGZvcm1EYXRhKTtcbiAgICB9XG5cblxuICAgIHNob3dDbGFzc2lmaWNhdGlvbnMoIGRhdGEgKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgfVxufVxuIiwiaW1wb3J0IHtDb250cm9sbGVyfSBmcm9tICdzdGltdWx1cyc7XG5cbmltcG9ydCBwcmV0dHlGaWxlSWNvbnMgZnJvbSAncHJldHR5LWZpbGUtaWNvbnMnO1xuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG5cbiAgICBzdGF0aWMgdmFsdWVzID0geyBmaWxlbmFtZTogU3RyaW5nIH1cblxuICAgIGNvbm5lY3QoKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5maWxlbmFtZSk7XG4gICAgICAgIHRoaXMuZ2V0SWNvbih0aGlzLmZpbGVuYW1lKTtcbiAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9jZXNzKTtcbiAgICB9XG5cblxuICAgIGdldEljb24oZmlsZU5hbWUpe1xuICAgICAgICB2YXIgaXRlbSA9IHByZXR0eUZpbGVJY29ucy5nZXRJY29uKHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJykpXG4gICAgICAgIHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaW1nLnNyYyA9ICcvYXNzZXRzL2ltZy9zdmcvJyArIGl0ZW0gKyAnLnN2Zyc7XG4gICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsIGl0ZW0pO1xuICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCd0aXRsZScsIGl0ZW0pO1xuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoaW1nKSA7XG5cbiAgICB9XG59XG4iLCJpbXBvcnQge0NvbnRyb2xsZXJ9IGZyb20gJ3N0aW11bHVzJztcbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuXG5cblxuICAgIGNvbm5lY3QoKSB7XG4gICAgfVxuXG5cblxuICAgIHN0b3BQcm9wYWdhdGlvbihldmVudCkge1xuICAgICAgICAvLyBUaGUgZXZlbnQgd29uJ3QgYmUgcHJvcGFnYXRlZCB1cCB0byB0aGUgZG9jdW1lbnQgTk9ERSBhbmRcbiAgICAgICAgLy8gdGhlcmVmb3JlIGRlbGVnYXRlZCBldmVudHMgd29uJ3QgYmUgZmlyZWRcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgZm9sZGVyTGlzdEZ1Y250aW9uKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGFyZyA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoJCkge1xuICAgICAgICAgICAgdmFyIG1vdmVMRm9sZGVyTGlzdCA9ICQoJ2RpdiNtb3ZlX2xpc3QnKVxuXG5cbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgICAgIHVybDogXCIvYXBpL2ZvbGRlci9saXN0LXN1Yi1pdGVtL1wiICsgYXJnLmZvbGRlck1vdmluZ0luLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IC0xLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImZvbGRlclwiLFxuICAgICAgICAgICAgICAgICAgICB1c2VyX2NvZGU6IFwiMDk3MDIyOWUtNDg2Ny00YWRhLWIwYWMtYTE5OTQ0NmNiYzIxXCJcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIG1vdmVMRm9sZGVyTGlzdC5lbXB0eSgpO1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLnJlc3VsdHMuZGF0YTtcblxuICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vZmlsbCBkcm9wZG93biBsaXN0IHdpdGggZm9sZGVyc1xuXG4gICAgICAgICAgICAgICAgJCgnPHNwYW4vPicpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnZHJvcGRvd24taXRlbSBkcm9wZG93bi1oZWFkZXInKVxuICAgICAgICAgICAgICAgICAgICAudGV4dChyZXMucmVzdWx0cy5wYXJlbnRfZm9sZGVyKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8obW92ZUxGb2xkZXJMaXN0KTtcbiAgICAgICAgICAgICAgICAkKCc8ZGl2Lz4nKVxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2Ryb3Bkb3duLWRpdmlkZXInKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8obW92ZUxGb2xkZXJMaXN0KTtcbiAgICAgICAgICAgICAgICAkLmVhY2goZGF0YS5yb3dzLCBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgICAgICAgICAvLyB2YXIgaWQgPSAnbW92ZV9saXN0JyArIGk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsaXN0SXRlbSA9ICQoJzxkaXYvPicpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2QtZmxleCAgZmxleC1yb3cgbS0yIGJvcmRlci1ib3R0b20nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKG1vdmVMRm9sZGVyTGlzdCk7XG4gICAgICAgICAgICAgICAgICAgICQoJzxkaXYvPicpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2Ryb3Bkb3duLWRpdmlkZXInKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKGxpc3RJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnPGkvPicpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2ZhcyBmYS1mb2xkZXIgbXItMicpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8obGlzdEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGlGb2xkZXIgPSAkKCc8YS8+JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdocmVmJywgXCIjXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1mb2xkZXItdG8tbW92ZScsIGFyZy5mb2xkZXJUb01vdmUpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1mb2xkZXItbW92aW5nLWluJywgZGF0YS5yb3dzW2ldLmNvZGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1hY3Rpb24nLCBcImNsaWNrLT5mb2xkZXIjZm9sZGVyTGlzdEZ1Y250aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGV4dChkYXRhLnJvd3NbaV0ubGFiZWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8obGlzdEl0ZW0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8qICoqKioqKioqXG4gICAgICAgICAgICAgICAgICAgICAgbW92ZSB0byBzcGVjaWZpYyBmb2xkZXIgY29udGVudCBpbiBkcm9wZG93biBsaXN0XG4gICAgICAgICAgICAgICAgICAgICAgYnkgcmVmaWxsaW5nIHRoZSBkcm9wZG93biBtZW51ICAgICAgICoqKioqKioqKioqKiogICovXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHVybCA9IGFyZy5wYXRoO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSB1cmwucmVwbGFjZShcIml0ZW1DXCIsIGFyZy5mb2xkZXJUb01vdmUpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSB1cmwucmVwbGFjZShcIm5ld1BhcmVudENcIiwgZGF0YS5yb3dzW2ldLmNvZGUpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSB1cmwucmVwbGFjZShcInVzZXJDXCIsIFwiMDk3MDIyOWUtNDg2Ny00YWRhLWIwYWMtYTE5OTQ0NmNiYzIxXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh1cmwpXG4gICAgICAgICAgICAgICAgICAgIGxldCBtb3ZlRm9ybSA9ICQoJzxmb3JtLz4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdtbC1hdXRvJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhY3Rpb24nLCB1cmwpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignbWV0aG9kJywgJ3Bvc3QnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKGxpc3RJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN1Ym1pdEJ1dHRvbiA9ICQoJzxidXR0b24vPicpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2J0biBidG4tYmxvY2sgYnRuLW91dGxpbmUtc2Vjb25kYXJ5ICBwLTAgbWItMScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cigndHlwZScsICdzdWJtaXQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKG1vdmVGb3JtKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnPGkvPicpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2ZhcyBmYS1jaGV2cm9uLWNpcmNsZS1kb3duIG1yLTEgbWwtMScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8oc3VibWl0QnV0dG9uKTtcblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG5cblxuICAgIH07XG5cblxuXG4gICAgUmVuYW1lKGV2ZW50KSB7XG4gICAgICAgIFxuICAgICAgICAgICBcbiAgICAgICAvLyBpdGVtX2NvZGUgLCBwYXJlbnRfY29kZVxuICAgICAgICAkKCdidXR0b24jcmVuYW1lX2J0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBsYWJlbCA9ICQoJ2lucHV0I2xhYmVsJykudmFsKClcbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXG4gICAgICAgICAgICAgICAgdXJsOiBcIi9pdGVtL3JlbmFtZUl0ZW0vXCIgKyBpdGVtX2NvZGUgLFxuICAgICAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtsYWJlbDogbGFiZWx9KSxcbiAgICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcblxuICAgICAgICAgICAgfSkuZmFpbChmdW5jdGlvbiAoWE1MSHR0cFJlcXVlc3QsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coWE1MSHR0cFJlcXVlc3QucmVzcG9uc2VUZXh0KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIFNoYXJlRU1haWwoKSB7XG4gICAgICAgIGNvbnN0IGFyZyA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICAgICAgbGV0IGl0ZW1fY29kZSA9IGFyZy5zaGFyZWRJdGVtRW1haWw7XG4gICAgICBcbiAgICAgICAgJChcIiNidG5TaGFyZVwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgZW1haWwgPSAkKCdpbnB1dCNzaGFyZV9lbWFpbCcpLnZhbCgpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlbWFpbClcbiAgICAgICAgICAgIHZhciByb2xlcyA9IFtdO1xuICAgICAgICAgICAgJChcIiNmaW5kLXRhYmxlIGlucHV0OmNoZWNrYm94OmNoZWNrZWRcIikubWFwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByb2xlcy5wdXNoKCQodGhpcykudmFsKCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyb2xlcyk7XG5cbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICB1cmw6IFwiL2FwaS9pdGVtL3NoYXJlV2l0aE90aGVycy9cIiArIGl0ZW1fY29kZSxcbiAgICAgICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7ZW1haWw6IGVtYWlsLCByb2xlczogcm9sZXN9KSxcbiAgICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcblxuICAgICAgICAgICAgfSkuZmFpbChmdW5jdGlvbiAoWE1MSHR0cFJlcXVlc3QsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coWE1MSHR0cFJlcXVlc3QucmVzcG9uc2VUZXh0KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG5cblxuICAgIH1cblxuICAgIFxuXG4gICAgU2hhcmVMaW5rKCkge1xuXG4gICAgICAgIGNvbnN0IGFyZyA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICAgICAgbGV0IGl0ZW1fY29kZSA9IGFyZy5zaGFyZWRJdGVtTGluaztcbiAgICAgIFxuICAgICAgICAkKFwiI3NoYXJlTGlua19idG5cIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIHJvbGVzID0gQXJyYXkoKTtcblxuICAgICAgICAgICAgJChcIiNmaW5kLXRhYmxlbGluayBpbnB1dDpjaGVja2JveDpjaGVja2VkXCIpLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJvbGVzLnB1c2goJCh0aGlzKS52YWwoKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2codHlwZW9mIChyb2xlcykpXG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgdXJsOiBcIi9hcGkvaXRlbS9zaGFyZUxpbmtzL1wiICsgaXRlbV9jb2RlLFxuICAgICAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtyb2xlczogcm9sZXN9KSxcbiAgICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIHZhciBsaW5rID0gcmVzLnJlc3VsdHMuZGF0YS5saW5rO1xuICAgICAgICAgICAgICAgICQoXCIjbGluay1kYXRhXCIpLmFwcGVuZChKU09OLnN0cmluZ2lmeShsaW5rKSk7XG5cbiAgICAgICAgICAgIH0pLmZhaWwoZnVuY3Rpb24gKFhNTEh0dHBSZXF1ZXN0LCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFhNTEh0dHBSZXF1ZXN0LnJlc3BvbnNlVGV4dClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuXG5cbiAgICB9XG5cblxuICAgIENhbmNlbFNoYXJlTGluayhpdGVtX2NvZGUpIHtcbiAgICAgICBcbiAgICAgICAkKCdidXR0b24jY2FuY2VsX2J0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgICAgICAgICAgIHVybDogXCIvYXBpL2l0ZW0vQ2FuY2Vsc2hhcmVMaW5rL1wiICsgaXRlbV9jb2RlICxcbiAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG5cbiAgICAgICAgICAgfSkuZmFpbChmdW5jdGlvbiAoWE1MSHR0cFJlcXVlc3QsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhYTUxIdHRwUmVxdWVzdC5yZXNwb25zZVRleHQpXG4gICAgICAgICAgIH0pXG4gICAgICAgfSlcbiAgIH07XG5cblxuXG4gICBEb3dubG9hZFppcCgpIHtcbiAgICAgICAgY29uc3QgYXJnID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgICAgICBjb25zb2xlLmxvZyhhcmcpXG4gICAgICAgICQoXCIjYnRuX3ppcFwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgaXRlbXMgPSBBcnJheSgpO1xuXG4gICAgICAgICAgXG4gICAgICAgICAgICAkKFwiI2ZpbmQtdGFibGVaaXAgaW5wdXQ6Y2hlY2tib3g6Y2hlY2tlZFwiKS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKCQodGhpcykudmFsKCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgXG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgICAgICB1cmw6IFwiL2FwaS9pdGVtL2Rvd25sb2FkWmlwXCIgLFxuICAgICAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtpdGVtczogaXRlbXN9KSxcbiAgICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9rXCIpXG4gICAgICAgICAgICB9KS5mYWlsKGZ1bmN0aW9uIChYTUxIdHRwUmVxdWVzdCwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhYTUxIdHRwUmVxdWVzdC5yZXNwb25zZVRleHQpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcblxuXG4gICAgfTtcblxuXG5cblxufVxuIiwiaW1wb3J0IHtDb250cm9sbGVyfSBmcm9tICdzdGltdWx1cyc7XG5pbXBvcnQgUHJpc20gZnJvbSAncHJpc21qcyc7XG5pbXBvcnQgVHJpYnV0ZSBmcm9tIFwidHJpYnV0ZWpzXCI7XG5jb25zdCBVUkxfQkFTRSA9IHByb2Nlc3MuZW52LnVybDtcbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgUHJpc20ubGFuZ3VhZ2VzLnJ1bGUgPSB7XG4gICAgICAgICAgICAnc3RyaW5nJzp7XG4gICAgICAgICAgICAgICAgcGF0dGVybiA6IC9cIlswLTlhLXpBLVotX10rXCIvXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ251bWJlcic6e1xuICAgICAgICAgICAgICAgIHBhdHRlcm4gOiAvWzAtOV0rKD86XFwuWzAtOV0rKT8oW0VlXVtcXCtcXC1dWzAtOV0rKT8vXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3B1bmN0dWF0aW9uJzp7XG4gICAgICAgICAgICAgICAgcGF0dGVybiA6IC9bKCl7fTs6LF0vXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ29wZXJhdG9yJzp7XG4gICAgICAgICAgICAgICAgcGF0dGVybiA6IC9cXGJbQS1aX10rXFxiLyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ2V0T3BlcmF0b3JzKChvcGVyYXRvcnMpPT57XG5cbiAgICAgICAgICAgIHRoaXMucnVsZUF1dG9jb21wbGV0ZShvcGVyYXRvcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbiAgICBydWxlQXV0b2NvbXBsZXRlKG9wZXJhdG9ycyl7XG5cbiAgICAgICAgdmFyIHRyaWJ1dGUgPSBuZXcgVHJpYnV0ZSh7XG4gICAgICAgICAgICB2YWx1ZXM6IG9wZXJhdG9ycyxcbiAgICAgICAgICAgIHNlbGVjdFRlbXBsYXRlOiBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICAgaXRlbS5vcmlnaW5hbC5rZXk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAvLyAgICBjb250YWluZXJDbGFzczogXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gdHJpYnV0ZS1jb250YWluZXJcIixcbiAgICAgICAgICAgIG1lbnVJdGVtVGVtcGxhdGU6IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gICAnPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPicraXRlbS5zdHJpbmcgKyAnPGkgY2xhc3M9XCJmYXIgZmEtcXVlc3Rpb24tY2lyY2xlIGhlbHBcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbXVsdGlDb2xsYXBzZUV4YW1wbGUyXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cIm11bHRpQ29sbGFwc2VFeGFtcGxlMlwiPjwvaT48L2Rpdj4nO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGF1dG9jb21wbGV0ZU1vZGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHRyaWJ1dGUuYXR0YWNoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdGluZ1wiKSk7XG4gICAgfVxuICAgIGhpZ2hsaWdodCgpe1xuXG4gICAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0aW5nXCIpO1xuXG4gICAgICAgIGxldCBydWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaWdobGlnaHRpbmctY29udGVudFwiKTtcblxuICAgICAgICBydWxlLmZvY3VzKCk7XG4gICAgICAgIHJ1bGUuaW5uZXJIVE1MID0gUHJpc20uaGlnaGxpZ2h0KHRleHQudmFsdWUsIFByaXNtLmxhbmd1YWdlcy5ydWxlLCAncnVsZScpO1xuICAgICAgICB0aGlzLnN5bmNfc2Nyb2xsKCB0ZXh0ICk7XG4gICAgfVxuXG4gICAgY2hlY2tfdGFiKCBldmVudCkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdGluZ1wiKTtcbiAgICAgICAgbGV0IGNvZGUgPSBlbGVtZW50LnZhbHVlO1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09IFwiVGFiXCIpIHtcbiAgICAgICAgICAgIC8qIFRhYiBrZXkgcHJlc3NlZCAqL1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gc3RvcCBub3JtYWxcbiAgICAgICAgICAgIGxldCBiZWZvcmVfdGFiID0gY29kZS5zbGljZSgwLCBlbGVtZW50LnNlbGVjdGlvblN0YXJ0KTsgLy8gdGV4dCBiZWZvcmUgdGFiXG4gICAgICAgICAgICBsZXQgYWZ0ZXJfdGFiID0gY29kZS5zbGljZShlbGVtZW50LnNlbGVjdGlvbkVuZCwgZWxlbWVudC52YWx1ZS5sZW5ndGgpOyAvLyB0ZXh0IGFmdGVyIHRhYlxuICAgICAgICAgICAgbGV0IGN1cnNvcl9wb3MgPSBlbGVtZW50LnNlbGVjdGlvbkVuZCArIDI7IC8vIGFmdGVyIHRhYiBwbGFjZWQsIHdoZXJlIGN1cnNvciBtb3ZlcyB0byAtIDIgZm9yIDIgc3BhY2VzXG4gICAgICAgICAgICBlbGVtZW50LnZhbHVlID0gYmVmb3JlX3RhYiArIFwiICBcIiArIGFmdGVyX3RhYjsgLy8gYWRkIHRhYiBjaGFyIC0gMiBzcGFjZXNcbiAgICAgICAgICAgIC8vIG1vdmUgY3Vyc29yXG4gICAgICAgICAgICBlbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gY3Vyc29yX3BvcztcbiAgICAgICAgICAgIGVsZW1lbnQuc2VsZWN0aW9uRW5kID0gY3Vyc29yX3BvcztcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHN5bmNfc2Nyb2xsKGVsZW1lbnQpIHtcbiAgICAgICAgLyogU2Nyb2xsIHJlc3VsdCB0byBzY3JvbGwgY29vcmRzIG9mIGV2ZW50IC0gc3luYyB3aXRoIHRleHRhcmVhICovXG4gICAgICAgIGxldCByZXN1bHRfZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGlnaGxpZ2h0aW5nXCIpO1xuICAgICAgICAvLyBHZXQgYW5kIHNldCB4IGFuZCB5XG4gICAgICAgIHJlc3VsdF9lbGVtZW50LnNjcm9sbFRvcCA9IGVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICByZXN1bHRfZWxlbWVudC5zY3JvbGxMZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgIH1cblxuICAgIGdldE9wZXJhdG9ycyggY2IpIHtcbiAgICAgICAgdmFyIFVSTCA9IFVSTF9CQVNFK1wiL2FwaS9ydWxlXCI7XG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBbXTtcbiAgICAgICAgICAgIGlmKHhoci5yZWFkeVN0YXRlID09PSA0KXtcbiAgICAgICAgICAgICAgICBpZiAoICB4aHIuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KS5yZXN1bHRzLm9wZXJhdG9ycztcblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoeGhyLnN0YXR1cyA9PT0gNDAzKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2IoZGF0YSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfTtcbiAgICAgICAgeGhyLm9wZW4oXCJHRVRcIiwgVVJMICwgZmFsc2UpO1xuICAgICAgICB4aHIuc2VuZCgpO1xuICAgIH1cbiAgICBjb21waWxlKCApIHtcbiAgICAgICAgbGV0IHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRpbmdcIik7XG5cbiAgICAgICAgdmFyIHVybCA9IFVSTF9CQVNFKycvYXBpL3J1bGUvY29tcGlsZSc7XG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgdmFyIGJvZHkgPSB7XG4gICAgICAgICAgICBleHByZXNzaW9uIDogdGV4dC52YWx1ZVxuICAgICAgICB9XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiAge1xuICAgICAgICAgICAgaWYoeGhyLnJlYWR5U3RhdGUgPT09IDQpe1xuICAgICAgICAgICAgICAgIGlmICggIHhoci5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93QWxlcnRzKGRhdGEucmVzdWx0cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIHVybCAgKTtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIpO1xuICAgICAgICB4aHIuc2VuZChKU09OLnN0cmluZ2lmeShib2R5KSk7XG4gICAgfVxuICAgICBzaG93QWxlcnRzKHJlc3VsdHMpIHtcbiAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib290c3RyYXAtYWxlcnQnKS5jbGFzc05hbWUgPSBcImFsZXJ0IGFsZXJ0LVwiKyByZXN1bHRzLnNjb3BlIDtcblxuICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvb3RzdHJhcC1hbGVydCcpLmlubmVySFRNTCA9IHJlc3VsdHMuYWxlcnQgO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9vdHN0cmFwLWFsZXJ0Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9vdHN0cmFwLWFsZXJ0Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJ30sIDE3MDAwKTtcbiAgICAgICAgaWYocmVzdWx0cy5zY29wZSA9PSAnc3VjY2Vzcycpe1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC1ydWxlJykucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIikgO1xuICAgICAgICB9aWYocmVzdWx0cy5zY29wZSA9PSAnZGFuZ2VyJyl7XG4gICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC1ydWxlJykuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIixcInRydWVcIikgO1xuICAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gZ2V0UnVsZVZhcnMoYXJncykge1xuICAgIC8vXG4gICAgLy8gICAgIGxldCBleHByX2FyZyA9IFtdO1xuICAgIC8vICAgICBmb3IgKGxldCBhcmcgb2YgYXJncykge1xuICAgIC8vICAgICAgICAgZXhwcl9hcmcucHVzaChhcmcubGFiZWwpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHJldHVybiBleHByX2FyZztcbiAgICAvLyB9XG59XG5cblxuIiwiaW1wb3J0IERlY291cGxlZEVkaXRvckJhc2UgIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtZWRpdG9yLWRlY291cGxlZC9zcmMvZGVjb3VwbGVkZWRpdG9yJztcbmltcG9ydCBQYWdlQnJlYWsgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1wYWdlLWJyZWFrL3NyYy9wYWdlYnJlYWsnO1xuaW1wb3J0IEVzc2VudGlhbHMgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1lc3NlbnRpYWxzL3NyYy9lc3NlbnRpYWxzJztcbmltcG9ydCBBbGlnbm1lbnQgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1hbGlnbm1lbnQvc3JjL2FsaWdubWVudCc7XG5pbXBvcnQgRm9udFNpemUgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1mb250L3NyYy9mb250c2l6ZSc7XG5pbXBvcnQgRm9udEZhbWlseSBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWZvbnQvc3JjL2ZvbnRmYW1pbHknO1xuaW1wb3J0IEZvbnRDb2xvciBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWZvbnQvc3JjL2ZvbnRjb2xvcic7XG5pbXBvcnQgRm9udEJhY2tncm91bmRDb2xvciBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWZvbnQvc3JjL2ZvbnRiYWNrZ3JvdW5kY29sb3InO1xuaW1wb3J0IFVwbG9hZEFkYXB0ZXIgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1hZGFwdGVyLWNrZmluZGVyL3NyYy91cGxvYWRhZGFwdGVyJztcbmltcG9ydCBBdXRvZm9ybWF0IGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtYXV0b2Zvcm1hdC9zcmMvYXV0b2Zvcm1hdCc7XG5pbXBvcnQgQm9sZCBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWJhc2ljLXN0eWxlcy9zcmMvYm9sZCc7XG5pbXBvcnQgSXRhbGljIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtYmFzaWMtc3R5bGVzL3NyYy9pdGFsaWMnO1xuaW1wb3J0IFN0cmlrZXRocm91Z2ggZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1iYXNpYy1zdHlsZXMvc3JjL3N0cmlrZXRocm91Z2gnO1xuaW1wb3J0IFVuZGVybGluZSBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWJhc2ljLXN0eWxlcy9zcmMvdW5kZXJsaW5lJztcbmltcG9ydCBCbG9ja1F1b3RlIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtYmxvY2stcXVvdGUvc3JjL2Jsb2NrcXVvdGUnO1xuaW1wb3J0IENLRmluZGVyIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtY2tmaW5kZXIvc3JjL2NrZmluZGVyJztcbmltcG9ydCBFYXN5SW1hZ2UgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1lYXN5LWltYWdlL3NyYy9lYXN5aW1hZ2UnO1xuaW1wb3J0IEhlYWRpbmcgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1oZWFkaW5nL3NyYy9oZWFkaW5nJztcbmltcG9ydCBJbWFnZSBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWltYWdlL3NyYy9pbWFnZSc7XG5pbXBvcnQgSW1hZ2VDYXB0aW9uIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtaW1hZ2Uvc3JjL2ltYWdlY2FwdGlvbic7XG5pbXBvcnQgSW1hZ2VTdHlsZSBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWltYWdlL3NyYy9pbWFnZXN0eWxlJztcbmltcG9ydCBJbWFnZVRvb2xiYXIgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1pbWFnZS9zcmMvaW1hZ2V0b29sYmFyJztcbmltcG9ydCBJbWFnZVVwbG9hZCBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWltYWdlL3NyYy9pbWFnZXVwbG9hZCc7XG5pbXBvcnQgSW5kZW50IGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtaW5kZW50L3NyYy9pbmRlbnQnO1xuaW1wb3J0IEluZGVudEJsb2NrIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtaW5kZW50L3NyYy9pbmRlbnRibG9jayc7XG5pbXBvcnQgVGVtcGxhdGUgZnJvbSAnLi9ja2VkaXRvcjUtdGVtcGxhdGluZy9zcmMvdGVtcGxhdGUnO1xuaW1wb3J0IExpbmsgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1saW5rL3NyYy9saW5rJztcbmltcG9ydCBMaXN0IGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtbGlzdC9zcmMvbGlzdCc7XG5pbXBvcnQgTWVkaWFFbWJlZCBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LW1lZGlhLWVtYmVkL3NyYy9tZWRpYWVtYmVkJztcbmltcG9ydCBQYXJhZ3JhcGggZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1wYXJhZ3JhcGgvc3JjL3BhcmFncmFwaCc7XG5pbXBvcnQgUGFzdGVGcm9tT2ZmaWNlIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtcGFzdGUtZnJvbS1vZmZpY2Uvc3JjL3Bhc3RlZnJvbW9mZmljZSc7XG5pbXBvcnQgVGFibGUgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS10YWJsZS9zcmMvdGFibGUnO1xuaW1wb3J0IFRhYmxlVG9vbGJhciBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LXRhYmxlL3NyYy90YWJsZXRvb2xiYXInO1xuaW1wb3J0IENsb3VkU2VydmljZXMgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1jbG91ZC1zZXJ2aWNlcy9zcmMvY2xvdWRzZXJ2aWNlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlY291cGxlZEVkaXRvciBleHRlbmRzIERlY291cGxlZEVkaXRvckJhc2Uge31cblxuLy8gUGx1Z2lucyB0byBpbmNsdWRlIGluIHRoZSBidWlsZC5cbkRlY291cGxlZEVkaXRvci5idWlsdGluUGx1Z2lucyA9IFtcbiAgICBFc3NlbnRpYWxzLFxuICAgIEFsaWdubWVudCxcbiAgICBGb250U2l6ZSxcbiAgICBGb250RmFtaWx5LFxuICAgIEZvbnRDb2xvcixcbiAgICBGb250QmFja2dyb3VuZENvbG9yLFxuICAgIFVwbG9hZEFkYXB0ZXIsXG4gICAgQXV0b2Zvcm1hdCxcbiAgICBCb2xkLFxuICAgIEl0YWxpYyxcbiAgICBTdHJpa2V0aHJvdWdoLFxuICAgIFVuZGVybGluZSxcbiAgICBCbG9ja1F1b3RlLFxuICAgIENLRmluZGVyLFxuICAgIEVhc3lJbWFnZSxcbiAgICBIZWFkaW5nLFxuICAgIEltYWdlLFxuICAgIEltYWdlQ2FwdGlvbixcbiAgICBJbWFnZVN0eWxlLFxuICAgIEltYWdlVG9vbGJhcixcbiAgICBJbWFnZVVwbG9hZCxcbiAgICBJbmRlbnQsXG4gICAgSW5kZW50QmxvY2ssXG4gICAgTGluayxcbiAgICBMaXN0LFxuICAgIE1lZGlhRW1iZWQsXG4gICAgUGFyYWdyYXBoLFxuICAgIFBhc3RlRnJvbU9mZmljZSxcbiAgICBUYWJsZSxcbiAgICBUYWJsZVRvb2xiYXIsXG4gICAgVGVtcGxhdGUsXG4gICAgUGFnZUJyZWFrLFxuICAgIENsb3VkU2VydmljZXNcblxuXTtcblxuLy8gRWRpdG9yIGNvbmZpZ3VyYXRpb24uXG5EZWNvdXBsZWRFZGl0b3IuZGVmYXVsdENvbmZpZyA9IHtcbiAgICB0b29sYmFyOiB7XG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAndGVtcGxhdGUnLFxuICAgICAgICAgICAgJ3wnLFxuICAgICAgICAgICAgJ2hlYWRpbmcnLFxuICAgICAgICAgICAgJ3wnLFxuICAgICAgICAgICAgJ3BhZ2VCcmVhaycsXG4gICAgICAgICAgICAnfCcsXG4gICAgICAgICAgICAnZm9udGZhbWlseScsXG4gICAgICAgICAgICAnZm9udHNpemUnLFxuICAgICAgICAgICAgJ2ZvbnRDb2xvcicsXG4gICAgICAgICAgICAnZm9udEJhY2tncm91bmRDb2xvcicsXG4gICAgICAgICAgICAnfCcsXG4gICAgICAgICAgICAnYm9sZCcsXG4gICAgICAgICAgICAnaXRhbGljJyxcbiAgICAgICAgICAgICd1bmRlcmxpbmUnLFxuICAgICAgICAgICAgJ3N0cmlrZXRocm91Z2gnLFxuICAgICAgICAgICAgJ3wnLFxuICAgICAgICAgICAgJ2FsaWdubWVudCcsXG4gICAgICAgICAgICAnfCcsXG4gICAgICAgICAgICAnbnVtYmVyZWRMaXN0JyxcbiAgICAgICAgICAgICdidWxsZXRlZExpc3QnLFxuICAgICAgICAgICAgJ3wnLFxuICAgICAgICAgICAgJ2luZGVudCcsXG4gICAgICAgICAgICAnb3V0ZGVudCcsXG4gICAgICAgICAgICAnfCcsXG4gICAgICAgICAgICAnYmxvY2txdW90ZScsXG4gICAgICAgICAgICAnaW1hZ2VVcGxvYWQnLFxuICAgICAgICAgICAgJ2luc2VydFRhYmxlJyxcbiAgICAgICAgICAgICdtZWRpYUVtYmVkJyxcbiAgICAgICAgICAgICd8JyxcbiAgICAgICAgICAgICd1bmRvJyxcbiAgICAgICAgICAgICdyZWRvJ1xuICAgICAgICBdXG4gICAgfSxcbiAgICBpbWFnZToge1xuICAgICAgICBzdHlsZXM6IFtcbiAgICAgICAgICAgICdmdWxsJyxcbiAgICAgICAgICAgICdhbGlnbkxlZnQnLFxuICAgICAgICAgICAgJ2FsaWduUmlnaHQnXG4gICAgICAgIF0sXG4gICAgICAgIHRvb2xiYXI6IFtcbiAgICAgICAgICAgICdpbWFnZVN0eWxlOmFsaWduTGVmdCcsXG4gICAgICAgICAgICAnaW1hZ2VTdHlsZTpmdWxsJyxcbiAgICAgICAgICAgICdpbWFnZVN0eWxlOmFsaWduUmlnaHQnLFxuICAgICAgICAgICAgJ3wnLFxuICAgICAgICAgICAgJ2ltYWdlVGV4dEFsdGVybmF0aXZlJ1xuICAgICAgICBdXG4gICAgfSxcbiAgICB0YWJsZToge1xuICAgICAgICBjb250ZW50VG9vbGJhcjogW1xuICAgICAgICAgICAgJ3RhYmxlQ29sdW1uJyxcbiAgICAgICAgICAgICd0YWJsZVJvdycsXG4gICAgICAgICAgICAnbWVyZ2VUYWJsZUNlbGxzJ1xuICAgICAgICBdXG4gICAgfSxcbiAgICAvLyBUaGlzIHZhbHVlIG11c3QgYmUga2VwdCBpbiBzeW5jIHdpdGggdGhlIGxhbmd1YWdlIGRlZmluZWQgaW4gd2VicGFjay5jb25maWcuanMuXG4gICAgbGFuZ3VhZ2U6ICdlbidcbn07XG4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcblxuXG5pbXBvcnQgJ3RyaWJ1dGVqcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcCc7XG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcbnJlcXVpcmUoJ3Byb2Nlc3MnKTsiLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC4oanx0KXN4PyQvXG4pKTtcblxuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiLyoqXG4gKiBAbGljZW5zZSBDb3B5cmlnaHQgKGMpIDIwMDMtMjAyMSwgQ0tTb3VyY2UgLSBGcmVkZXJpY28gS25hYmJlbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIEZvciBsaWNlbnNpbmcsIHNlZSBMSUNFTlNFLm1kIG9yIGh0dHBzOi8vY2tlZGl0b3IuY29tL2xlZ2FsL2NrZWRpdG9yLW9zcy1saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGxpbmsvdW5saW5rY29tbWFuZFxuICovXG5cbmltcG9ydCAgQ29tbWFuZCAgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1jb3JlL3NyYy9jb21tYW5kJztcbmltcG9ydCAgZmluZEF0dHJpYnV0ZVJhbmdlICBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LXR5cGluZy9zcmMvdXRpbHMvZmluZGF0dHJpYnV0ZXJhbmdlJztcbmltcG9ydCAgZmlyc3QgIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtdXRpbHMvc3JjL2ZpcnN0JztcblxuaW1wb3J0IHsgaXNJbWFnZUFsbG93ZWQgfSBmcm9tICcuL3V0aWxzJztcblxuLyoqXG4gKiBUaGUgdW5saW5rIGNvbW1hbmQuIEl0IGlzIHVzZWQgYnkgdGhlIHtAbGluayBtb2R1bGU6bGluay9saW5rfkxpbmsgbGluayBwbHVnaW59LlxuICpcbiAqIEBleHRlbmRzIG1vZHVsZTpjb3JlL2NvbW1hbmR+Q29tbWFuZFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW5jZWxUZW1wbGF0ZUNvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcblx0LyoqXG5cdCAqIEBpbmhlcml0RG9jXG5cdCAqL1xuXHRyZWZyZXNoKCkge1xuXHRcdGNvbnN0IG1vZGVsID0gdGhpcy5lZGl0b3IubW9kZWw7XG5cdFx0Y29uc3QgZG9jID0gbW9kZWwuZG9jdW1lbnQ7XG5cblx0XHRjb25zdCBzZWxlY3RlZEVsZW1lbnQgPSBmaXJzdCggZG9jLnNlbGVjdGlvbi5nZXRTZWxlY3RlZEJsb2NrcygpICk7XG5cblx0XHQvLyBBIGNoZWNrIGZvciB0aGUgYExpbmtJbWFnZWAgcGx1Z2luLiBJZiB0aGUgc2VsZWN0aW9uIGNvbnRhaW5zIGFuIGltYWdlIGVsZW1lbnQsIGdldCB2YWx1ZXMgZnJvbSB0aGUgZWxlbWVudC5cblx0XHQvLyBDdXJyZW50bHkgdGhlIHNlbGVjdGlvbiByZWFkcyBhdHRyaWJ1dGVzIGZyb20gdGV4dCBub2RlcyBvbmx5LiBTZWUgIzc0MjkgYW5kICM3NDY1LlxuXHRcdGlmICggaXNJbWFnZUFsbG93ZWQoIHNlbGVjdGVkRWxlbWVudCwgbW9kZWwuc2NoZW1hICkgKSB7XG5cdFx0XHR0aGlzLmlzRW5hYmxlZCA9IG1vZGVsLnNjaGVtYS5jaGVja0F0dHJpYnV0ZSggc2VsZWN0ZWRFbGVtZW50LCAndGVtcGxhdGVWYXInICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuaXNFbmFibGVkID0gbW9kZWwuc2NoZW1hLmNoZWNrQXR0cmlidXRlSW5TZWxlY3Rpb24oIGRvYy5zZWxlY3Rpb24sICd0ZW1wbGF0ZVZhcicgKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogRXhlY3V0ZXMgdGhlIGNvbW1hbmQuXG5cdCAqXG5cdCAqIFdoZW4gdGhlIHNlbGVjdGlvbiBpcyBjb2xsYXBzZWQsIGl0IHJlbW92ZXMgdGhlIGBsaW5rSHJlZmAgYXR0cmlidXRlIGZyb20gZWFjaCBub2RlIHdpdGggdGhlIHNhbWUgYGxpbmtIcmVmYCBhdHRyaWJ1dGUgdmFsdWUuXG5cdCAqIFdoZW4gdGhlIHNlbGVjdGlvbiBpcyBub24tY29sbGFwc2VkLCBpdCByZW1vdmVzIHRoZSBgbGlua0hyZWZgIGF0dHJpYnV0ZSBmcm9tIGVhY2ggbm9kZSBpbiBzZWxlY3RlZCByYW5nZXMuXG5cdCAqXG5cdCAqICMgRGVjb3JhdG9yc1xuXHQgKlxuXHQgKiBJZiB7QGxpbmsgbW9kdWxlOmxpbmsvbGlua35MaW5rQ29uZmlnI2RlY29yYXRvcnMgYGNvbmZpZy5saW5rLmRlY29yYXRvcnNgfSBpcyBzcGVjaWZpZWQsXG5cdCAqIGFsbCBjb25maWd1cmVkIGRlY29yYXRvcnMgYXJlIHJlbW92ZWQgdG9nZXRoZXIgd2l0aCB0aGUgYGxpbmtIcmVmYCBhdHRyaWJ1dGUuXG5cdCAqXG5cdCAqIEBmaXJlcyBleGVjdXRlXG5cdCAqL1xuXHRleGVjdXRlKCkge1xuXHRcdGNvbnN0IGVkaXRvciA9IHRoaXMuZWRpdG9yO1xuXHRcdGNvbnN0IG1vZGVsID0gdGhpcy5lZGl0b3IubW9kZWw7XG5cdFx0Y29uc3Qgc2VsZWN0aW9uID0gbW9kZWwuZG9jdW1lbnQuc2VsZWN0aW9uO1xuXHRcdGNvbnN0IGxpbmtDb21tYW5kID0gZWRpdG9yLmNvbW1hbmRzLmdldCggJ3RlbXBsYXRlJyApO1xuXG5cdFx0bW9kZWwuY2hhbmdlKCB3cml0ZXIgPT4ge1xuXHRcdFx0Ly8gR2V0IHJhbmdlcyB0byB1bmxpbmsuXG5cdFx0XHRjb25zdCByYW5nZXNUb1VubGluayA9IHNlbGVjdGlvbi5pc0NvbGxhcHNlZCA/XG5cdFx0XHRcdFsgZmluZEF0dHJpYnV0ZVJhbmdlKFxuXHRcdFx0XHRcdHNlbGVjdGlvbi5nZXRGaXJzdFBvc2l0aW9uKCksXG5cdFx0XHRcdFx0J3RlbXBsYXRlVmFyJyxcblx0XHRcdFx0XHRzZWxlY3Rpb24uZ2V0QXR0cmlidXRlKCAndGVtcGxhdGVWYXInICksXG5cdFx0XHRcdFx0bW9kZWxcblx0XHRcdFx0KSBdIDpcblx0XHRcdFx0bW9kZWwuc2NoZW1hLmdldFZhbGlkUmFuZ2VzKCBzZWxlY3Rpb24uZ2V0UmFuZ2VzKCksICd0ZW1wbGF0ZVZhcicgKTtcblxuXHRcdFx0Ly8gUmVtb3ZlIGBsaW5rSHJlZmAgYXR0cmlidXRlIGZyb20gc3BlY2lmaWVkIHJhbmdlcy5cblx0XHRcdGZvciAoIGNvbnN0IHJhbmdlIG9mIHJhbmdlc1RvVW5saW5rICkge1xuXHRcdFx0XHR3cml0ZXIucmVtb3ZlQXR0cmlidXRlKCAndGVtcGxhdGVWYXInLCByYW5nZSApO1xuXHRcdFx0XHQvLyBJZiB0aGVyZSBhcmUgcmVnaXN0ZXJlZCBjdXN0b20gYXR0cmlidXRlcywgdGhlbiByZW1vdmUgdGhlbSBkdXJpbmcgdW5saW5rLlxuXHRcdFx0XHRpZiAoIGxpbmtDb21tYW5kICkge1xuXHRcdFx0XHRcdGZvciAoIGNvbnN0IG1hbnVhbERlY29yYXRvciBvZiBsaW5rQ29tbWFuZC5tYW51YWxEZWNvcmF0b3JzICkge1xuXHRcdFx0XHRcdFx0d3JpdGVyLnJlbW92ZUF0dHJpYnV0ZSggbWFudWFsRGVjb3JhdG9yLmlkLCByYW5nZSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZSBDb3B5cmlnaHQgKGMpIDIwMDMtMjAyMSwgQ0tTb3VyY2UgLSBGcmVkZXJpY28gS25hYmJlbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIEZvciBsaWNlbnNpbmcsIHNlZSBMSUNFTlNFLm1kIG9yIGh0dHBzOi8vY2tlZGl0b3IuY29tL2xlZ2FsL2NrZWRpdG9yLW9zcy1saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGxpbmsvbGlua2NvbW1hbmRcbiAqL1xuXG5pbXBvcnQgIENvbW1hbmQgIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtY29yZS9zcmMvY29tbWFuZCc7XG5pbXBvcnQgIGZpbmRBdHRyaWJ1dGVSYW5nZSAgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS10eXBpbmcvc3JjL3V0aWxzL2ZpbmRhdHRyaWJ1dGVyYW5nZSc7XG5pbXBvcnQgeyBDb2xsZWN0aW9uLCB0b01hcCwgZmlyc3QgfSBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LXV0aWxzL3NyYy8nO1xuXG5pbXBvcnQgeyBpc0ltYWdlQWxsb3dlZCB9IGZyb20gJy4vdXRpbHMnO1xuXG4vKipcbiAqIFRoZSBsaW5rIGNvbW1hbmQuIEl0IGlzIHVzZWQgYnkgdGhlIHtAbGluayBtb2R1bGU6bGluay9saW5rfkxpbmsgbGluayBmZWF0dXJlfS5cbiAqXG4gKiBAZXh0ZW5kcyBtb2R1bGU6Y29yZS9jb21tYW5kfkNvbW1hbmRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVtcGxhdGVDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XG5cdC8qKlxuXHQgKiBUaGUgdmFsdWUgb2YgdGhlIGAnbGlua0hyZWYnYCBhdHRyaWJ1dGUgaWYgdGhlIHN0YXJ0IG9mIHRoZSBzZWxlY3Rpb24gaXMgbG9jYXRlZCBpbiBhIG5vZGUgd2l0aCB0aGlzIGF0dHJpYnV0ZS5cblx0ICpcblx0ICogQG9ic2VydmFibGVcblx0ICogQHJlYWRvbmx5XG5cdCAqIEBtZW1iZXIge09iamVjdHx1bmRlZmluZWR9ICN2YWx1ZVxuXHQgKi9cblxuXHRjb25zdHJ1Y3RvciggZWRpdG9yICkge1xuXHRcdHN1cGVyKCBlZGl0b3IgKTtcblxuXHRcdC8qKlxuXHRcdCAqIEEgY29sbGVjdGlvbiBvZiB7QGxpbmsgbW9kdWxlOmxpbmsvdXRpbHN+TWFudWFsRGVjb3JhdG9yIG1hbnVhbCBkZWNvcmF0b3JzfVxuXHRcdCAqIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHtAbGluayBtb2R1bGU6bGluay9saW5rfkxpbmtDb25maWcjZGVjb3JhdG9ycyBkZWNvcmF0b3IgY29uZmlndXJhdGlvbn0uXG5cdFx0ICpcblx0XHQgKiBZb3UgY2FuIGNvbnNpZGVyIGl0IGEgbW9kZWwgd2l0aCBzdGF0ZXMgb2YgbWFudWFsIGRlY29yYXRvcnMgYWRkZWQgdG8gdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBsaW5rLlxuXHRcdCAqXG5cdFx0ICogQHJlYWRvbmx5XG5cdFx0ICogQHR5cGUge21vZHVsZTp1dGlscy9jb2xsZWN0aW9ufkNvbGxlY3Rpb259XG5cdFx0ICovXG5cdFx0dGhpcy5tYW51YWxEZWNvcmF0b3JzID0gbmV3IENvbGxlY3Rpb24oKTtcblxuXG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTeW5jaHJvbml6ZXMgdGhlIHN0YXRlIG9mIHtAbGluayAjbWFudWFsRGVjb3JhdG9yc30gd2l0aCB0aGUgY3VycmVudGx5IHByZXNlbnQgZWxlbWVudHMgaW4gdGhlIG1vZGVsLlxuXHQgKi9cblx0cmVzdG9yZU1hbnVhbERlY29yYXRvclN0YXRlcygpIHtcblx0XHRmb3IgKCBjb25zdCBtYW51YWxEZWNvcmF0b3Igb2YgdGhpcy5tYW51YWxEZWNvcmF0b3JzICkge1xuXHRcdFx0bWFudWFsRGVjb3JhdG9yLnZhbHVlID0gdGhpcy5fZ2V0RGVjb3JhdG9yU3RhdGVGcm9tTW9kZWwoIG1hbnVhbERlY29yYXRvci5pZCApO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5oZXJpdERvY1xuXHQgKi9cblx0cmVmcmVzaCgpIHtcblx0XHRjb25zdCBtb2RlbCA9IHRoaXMuZWRpdG9yLm1vZGVsO1xuXHRcdGNvbnN0IGRvYyA9IG1vZGVsLmRvY3VtZW50O1xuXG5cdFx0Y29uc3Qgc2VsZWN0ZWRFbGVtZW50ID0gZmlyc3QoIGRvYy5zZWxlY3Rpb24uZ2V0U2VsZWN0ZWRCbG9ja3MoKSApO1xuXG5cdFx0Ly8gQSBjaGVjayBmb3IgdGhlIGBMaW5rSW1hZ2VgIHBsdWdpbi4gSWYgdGhlIHNlbGVjdGlvbiBjb250YWlucyBhbiBlbGVtZW50LCBnZXQgdmFsdWVzIGZyb20gdGhlIGVsZW1lbnQuXG5cdFx0Ly8gQ3VycmVudGx5IHRoZSBzZWxlY3Rpb24gcmVhZHMgYXR0cmlidXRlcyBmcm9tIHRleHQgbm9kZXMgb25seS4gU2VlICM3NDI5IGFuZCAjNzQ2NS5cblx0XHRpZiAoIGlzSW1hZ2VBbGxvd2VkKCBzZWxlY3RlZEVsZW1lbnQsIG1vZGVsLnNjaGVtYSApICkge1xuXHRcdFx0dGhpcy52YWx1ZSA9IHNlbGVjdGVkRWxlbWVudC5nZXRBdHRyaWJ1dGUoICd0ZW1wbGF0ZVZhcicgKTtcblx0XHRcdHRoaXMuaXNFbmFibGVkID0gbW9kZWwuc2NoZW1hLmNoZWNrQXR0cmlidXRlKCBzZWxlY3RlZEVsZW1lbnQsICd0ZW1wbGF0ZVZhcicgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy52YWx1ZSA9IGRvYy5zZWxlY3Rpb24uZ2V0QXR0cmlidXRlKCAndGVtcGxhdGVWYXInICk7XG5cdFx0XHR0aGlzLmlzRW5hYmxlZCA9IG1vZGVsLnNjaGVtYS5jaGVja0F0dHJpYnV0ZUluU2VsZWN0aW9uKCBkb2Muc2VsZWN0aW9uLCAndGVtcGxhdGVWYXInICk7XG5cdFx0fVxuXG5cdFx0Zm9yICggY29uc3QgbWFudWFsRGVjb3JhdG9yIG9mIHRoaXMubWFudWFsRGVjb3JhdG9ycyApIHtcblx0XHRcdG1hbnVhbERlY29yYXRvci52YWx1ZSA9IHRoaXMuX2dldERlY29yYXRvclN0YXRlRnJvbU1vZGVsKCBtYW51YWxEZWNvcmF0b3IuaWQgKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogRXhlY3V0ZXMgdGhlIGNvbW1hbmQuXG5cdCAqXG5cdCAqIFdoZW4gdGhlIHNlbGVjdGlvbiBpcyBub24tY29sbGFwc2VkLCB0aGUgYGxpbmtIcmVmYCBhdHRyaWJ1dGUgd2lsbCBiZSBhcHBsaWVkIHRvIG5vZGVzIGluc2lkZSB0aGUgc2VsZWN0aW9uLCBidXQgb25seSB0b1xuXHQgKiB0aG9zZSBub2RlcyB3aGVyZSB0aGUgYGxpbmtIcmVmYCBhdHRyaWJ1dGUgaXMgYWxsb3dlZCAoZGlzYWxsb3dlZCBub2RlcyB3aWxsIGJlIG9taXR0ZWQpLlxuXHQgKlxuXHQgKiBXaGVuIHRoZSBzZWxlY3Rpb24gaXMgY29sbGFwc2VkIGFuZCBpcyBub3QgaW5zaWRlIHRoZSB0ZXh0IHdpdGggdGhlIGBsaW5rSHJlZmAgYXR0cmlidXRlLCBhXG5cdCAqIG5ldyB7QGxpbmsgbW9kdWxlOmVuZ2luZS9tb2RlbC90ZXh0flRleHQgdGV4dCBub2RlfSB3aXRoIHRoZSBgbGlua0hyZWZgIGF0dHJpYnV0ZSB3aWxsIGJlIGluc2VydGVkIGluIHBsYWNlIG9mIHRoZSBjYXJldCwgYnV0XG5cdCAqIG9ubHkgaWYgc3VjaCBlbGVtZW50IGlzIGFsbG93ZWQgaW4gdGhpcyBwbGFjZS4gVGhlIGBfZGF0YWAgb2YgdGhlIGluc2VydGVkIHRleHQgd2lsbCBlcXVhbCB0aGUgYGhyZWZgIHBhcmFtZXRlci5cblx0ICogVGhlIHNlbGVjdGlvbiB3aWxsIGJlIHVwZGF0ZWQgdG8gd3JhcCB0aGUganVzdCBpbnNlcnRlZCB0ZXh0IG5vZGUuXG5cdCAqXG5cdCAqIFdoZW4gdGhlIHNlbGVjdGlvbiBpcyBjb2xsYXBzZWQgYW5kIGluc2lkZSB0aGUgdGV4dCB3aXRoIHRoZSBgbGlua0hyZWZgIGF0dHJpYnV0ZSwgdGhlIGF0dHJpYnV0ZSB2YWx1ZSB3aWxsIGJlIHVwZGF0ZWQuXG5cdCAqXG5cdCAqICMgRGVjb3JhdG9ycyBhbmQgbW9kZWwgYXR0cmlidXRlIG1hbmFnZW1lbnRcblx0ICpcblx0ICogVGhlcmUgaXMgYW4gb3B0aW9uYWwgYXJndW1lbnQgdG8gdGhpcyBjb21tYW5kIHRoYXQgYXBwbGllcyBvciByZW1vdmVzIG1vZGVsXG5cdCAqIHtAZ2xpbmsgZnJhbWV3b3JrL2d1aWRlcy9hcmNoaXRlY3R1cmUvZWRpdGluZy1lbmdpbmUjdGV4dC1hdHRyaWJ1dGVzIHRleHQgYXR0cmlidXRlc30gYnJvdWdodCBieVxuXHQgKiB7QGxpbmsgbW9kdWxlOmxpbmsvdXRpbHN+TWFudWFsRGVjb3JhdG9yIG1hbnVhbCBsaW5rIGRlY29yYXRvcnN9LlxuXHQgKlxuXHQgKiBUZXh0IGF0dHJpYnV0ZSBuYW1lcyBpbiB0aGUgbW9kZWwgY29ycmVzcG9uZCB0byB0aGUgZW50cmllcyBpbiB0aGUge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt+TGlua0NvbmZpZyNkZWNvcmF0b3JzIGNvbmZpZ3VyYXRpb259LlxuXHQgKiBGb3IgZXZlcnkgZGVjb3JhdG9yIGNvbmZpZ3VyZWQsIGEgbW9kZWwgdGV4dCBhdHRyaWJ1dGUgZXhpc3RzIHdpdGggdGhlIFwibGlua1wiIHByZWZpeC4gRm9yIGV4YW1wbGUsIGEgYCdsaW5rTXlEZWNvcmF0b3InYCBhdHRyaWJ1dGVcblx0ICogY29ycmVzcG9uZHMgdG8gYCdteURlY29yYXRvcidgIGluIHRoZSBjb25maWd1cmF0aW9uLlxuXHQgKlxuXHQgKiBUbyBsZWFybiBtb3JlIGFib3V0IGxpbmsgZGVjb3JhdG9ycywgY2hlY2sgb3V0IHRoZSB7QGxpbmsgbW9kdWxlOmxpbmsvbGlua35MaW5rQ29uZmlnI2RlY29yYXRvcnMgYGNvbmZpZy5saW5rLmRlY29yYXRvcnNgfVxuXHQgKiBkb2N1bWVudGF0aW9uLlxuXHQgKlxuXHQgKiBIZXJlIGlzIGhvdyB0byBtYW5hZ2UgZGVjb3JhdG9yIGF0dHJpYnV0ZXMgd2l0aCB0aGUgbGluayBjb21tYW5kOlxuXHQgKlxuXHQgKlx0XHRjb25zdCBsaW5rQ29tbWFuZCA9IGVkaXRvci5jb21tYW5kcy5nZXQoICdsaW5rJyApO1xuXHQgKlxuXHQgKlx0XHQvLyBBZGRpbmcgYSBuZXcgZGVjb3JhdG9yIGF0dHJpYnV0ZS5cblx0ICpcdFx0bGlua0NvbW1hbmQuZXhlY3V0ZSggJ2h0dHA6Ly9leGFtcGxlLmNvbScsIHtcblx0ICpcdFx0XHRsaW5rSXNFeHRlcm5hbDogdHJ1ZVxuXHQgKlx0XHR9ICk7XG5cdCAqXG5cdCAqXHRcdC8vIFJlbW92aW5nIGEgZGVjb3JhdG9yIGF0dHJpYnV0ZSBmcm9tIHRoZSBzZWxlY3Rpb24uXG5cdCAqXHRcdGxpbmtDb21tYW5kLmV4ZWN1dGUoICdodHRwOi8vZXhhbXBsZS5jb20nLCB7XG5cdCAqXHRcdFx0bGlua0lzRXh0ZXJuYWw6IGZhbHNlXG5cdCAqXHRcdH0gKTtcblx0ICpcblx0ICpcdFx0Ly8gQWRkaW5nIG11bHRpcGxlIGRlY29yYXRvciBhdHRyaWJ1dGVzIGF0IHRoZSBzYW1lIHRpbWUuXG5cdCAqXHRcdGxpbmtDb21tYW5kLmV4ZWN1dGUoICdodHRwOi8vZXhhbXBsZS5jb20nLCB7XG5cdCAqXHRcdFx0bGlua0lzRXh0ZXJuYWw6IHRydWUsXG5cdCAqXHRcdFx0bGlua0lzRG93bmxvYWRhYmxlOiB0cnVlLFxuXHQgKlx0XHR9ICk7XG5cdCAqXG5cdCAqXHRcdC8vIFJlbW92aW5nIGFuZCBhZGRpbmcgZGVjb3JhdG9yIGF0dHJpYnV0ZXMgYXQgdGhlIHNhbWUgdGltZS5cblx0ICpcdFx0bGlua0NvbW1hbmQuZXhlY3V0ZSggJ2h0dHA6Ly9leGFtcGxlLmNvbScsIHtcblx0ICpcdFx0XHRsaW5rSXNFeHRlcm5hbDogZmFsc2UsXG5cdCAqXHRcdFx0bGlua0ZvbzogdHJ1ZSxcblx0ICpcdFx0XHRsaW5rSXNEb3dubG9hZGFibGU6IGZhbHNlLFxuXHQgKlx0XHR9ICk7XG5cdCAqXG5cdCAqICoqTm90ZSoqOiBJZiB0aGUgZGVjb3JhdG9yIGF0dHJpYnV0ZSBuYW1lIGlzIG5vdCBzcGVjaWZpZWQsIGl0cyBzdGF0ZSByZW1haW5zIHVudG91Y2hlZC5cblx0ICpcblx0ICogKipOb3RlKio6IHtAbGluayBtb2R1bGU6bGluay91bmxpbmtjb21tYW5kflVubGlua0NvbW1hbmQjZXhlY3V0ZSBgQ2FuY2VsdGVtcGxhdGVjb21tYW5kI2V4ZWN1dGUoKWB9IHJlbW92ZXMgYWxsXG5cdCAqIGRlY29yYXRvciBhdHRyaWJ1dGVzLlxuXHQgKlxuXHQgKiBAZmlyZXMgZXhlY3V0ZVxuXHQgKiBAcGFyYW0ge09iamVjdH0gdGVtcGxhdGVWYXIgVGVtcGxhdGUgZGVzdGluYXRpb24uXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBbbWFudWFsRGVjb3JhdG9ySWRzPXt9XSBUaGUgaW5mb3JtYXRpb24gYWJvdXQgbWFudWFsIGRlY29yYXRvciBhdHRyaWJ1dGVzIHRvIGJlIGFwcGxpZWQgb3IgcmVtb3ZlZCB1cG9uIGV4ZWN1dGlvbi5cblx0ICovXG5cdGV4ZWN1dGUoIHRlbXBsYXRlVmFyLCBtYW51YWxEZWNvcmF0b3JJZHMgPSB7fSApIHtcblxuXHRcdGNvbnN0IG1vZGVsID0gdGhpcy5lZGl0b3IubW9kZWw7XG5cdFx0Y29uc3Qgc2VsZWN0aW9uID0gbW9kZWwuZG9jdW1lbnQuc2VsZWN0aW9uO1xuXHRcdC8vIFN0b3JlcyBpbmZvcm1hdGlvbiBhYm91dCBtYW51YWwgZGVjb3JhdG9ycyB0byB0dXJuIHRoZW0gb24vb2ZmIHdoZW4gY29tbWFuZCBpcyBhcHBsaWVkLlxuXHRcdGNvbnN0IHRydXRoeU1hbnVhbERlY29yYXRvcnMgPSBbXTtcblx0XHRjb25zdCBmYWxzeU1hbnVhbERlY29yYXRvcnMgPSBbXTtcblxuXHRcdGZvciAoIGNvbnN0IG5hbWUgaW4gbWFudWFsRGVjb3JhdG9ySWRzICkge1xuXHRcdFx0aWYgKCBtYW51YWxEZWNvcmF0b3JJZHNbIG5hbWUgXSApIHtcblx0XHRcdFx0dHJ1dGh5TWFudWFsRGVjb3JhdG9ycy5wdXNoKCBuYW1lICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmYWxzeU1hbnVhbERlY29yYXRvcnMucHVzaCggbmFtZSApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRtb2RlbC5jaGFuZ2UoIHdyaXRlciA9PiB7XG5cdFx0XHQvLyBJZiBzZWxlY3Rpb24gaXMgY29sbGFwc2VkIHRoZW4gdXBkYXRlIHNlbGVjdGVkIGxpbmsgb3IgaW5zZXJ0IG5ldyBvbmUgYXQgdGhlIHBsYWNlIG9mIGNhcmV0LlxuXHRcdFx0aWYgKCBzZWxlY3Rpb24uaXNDb2xsYXBzZWQgKSB7XG5cdFx0XHRcdGNvbnN0IHBvc2l0aW9uID0gc2VsZWN0aW9uLmdldEZpcnN0UG9zaXRpb24oKTtcblxuXHRcdFx0XHQvLyBXaGVuIHNlbGVjdGlvbiBpcyBpbnNpZGUgdGV4dCB3aXRoIGBsaW5rSHJlZmAgYXR0cmlidXRlLlxuXHRcdFx0XHRpZiAoIHNlbGVjdGlvbi5oYXNBdHRyaWJ1dGUoICd0ZW1wbGF0ZVZhcicgKSApIHtcblx0XHRcdFx0XHQvLyBUaGVuIHVwZGF0ZSBgbGlua0hyZWZgIHZhbHVlLlxuXHRcdFx0XHRcdGNvbnN0IHZhclJhbmdlID0gZmluZEF0dHJpYnV0ZVJhbmdlKCBwb3NpdGlvbiwgJ3RlbXBsYXRlVmFyJywgc2VsZWN0aW9uLmdldEF0dHJpYnV0ZSggJ3RlbXBsYXRlVmFyJyApLCBtb2RlbCApO1xuXG5cdFx0XHRcdFx0d3JpdGVyLnNldEF0dHJpYnV0ZSggJ3RlbXBsYXRlVmFyJywgdGVtcGxhdGVWYXIuaWQsIHZhclJhbmdlICk7XG5cdFx0XHRcdFx0d3JpdGVyLnNldEF0dHJpYnV0ZSggJ3RlbXBsYXRlVmFyLXR5cGUnLCB0ZW1wbGF0ZVZhci50eXBlLCB2YXJSYW5nZSApO1xuXG5cblxuXHRcdFx0XHRcdHRydXRoeU1hbnVhbERlY29yYXRvcnMuZm9yRWFjaCggaXRlbSA9PiB7XG5cdFx0XHRcdFx0XHR3cml0ZXIuc2V0QXR0cmlidXRlKCBpdGVtLCB0cnVlLCB2YXJSYW5nZSApO1xuXHRcdFx0XHRcdH0gKTtcblxuXHRcdFx0XHRcdGZhbHN5TWFudWFsRGVjb3JhdG9ycy5mb3JFYWNoKCBpdGVtID0+IHtcblx0XHRcdFx0XHRcdHdyaXRlci5yZW1vdmVBdHRyaWJ1dGUoIGl0ZW0sIHZhclJhbmdlICk7XG5cdFx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdFx0Ly8gUHV0IHRoZSBzZWxlY3Rpb24gYXQgdGhlIGVuZCBvZiB0aGUgdXBkYXRlZCBsaW5rLlxuXHRcdFx0XHRcdHdyaXRlci5zZXRTZWxlY3Rpb24oIHdyaXRlci5jcmVhdGVQb3NpdGlvbkFmdGVyKCB2YXJSYW5nZS5lbmQubm9kZUJlZm9yZSApICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gSWYgbm90IHRoZW4gaW5zZXJ0IHRleHQgbm9kZSB3aXRoIGBsaW5rSHJlZmAgYXR0cmlidXRlIGluIHBsYWNlIG9mIGNhcmV0LlxuXHRcdFx0XHQvLyBIb3dldmVyLCBzaW5jZSBzZWxlY3Rpb24gaXMgY29sbGFwc2VkLCBhdHRyaWJ1dGUgdmFsdWUgd2lsbCBiZSB1c2VkIGFzIGRhdGEgZm9yIHRleHQgbm9kZS5cblx0XHRcdFx0Ly8gU28sIGlmIGB0ZW1wbGF0ZVZhci5sYWJlbGAgaXMgZW1wdHksIGRvIG5vdCBjcmVhdGUgdGV4dCBub2RlLlxuXHRcdFx0XHRlbHNlIGlmICggdGVtcGxhdGVWYXIuaWQgIT09ICcnICkge1xuXHRcdFx0XHRcdGNvbnN0IGF0dHJpYnV0ZXMgPSB0b01hcCggc2VsZWN0aW9uLmdldEF0dHJpYnV0ZXMoKSApO1xuXG5cdFx0XHRcdFx0YXR0cmlidXRlcy5zZXQoICd0ZW1wbGF0ZVZhcicsIHRlbXBsYXRlVmFyLmlkICk7XG5cblx0XHRcdFx0XHRhdHRyaWJ1dGVzLnNldCggJ3RlbXBsYXRlVmFyLXR5cGUnLCB0ZW1wbGF0ZVZhci50eXBlICk7XG5cdFx0XHRcdFx0dHJ1dGh5TWFudWFsRGVjb3JhdG9ycy5mb3JFYWNoKCBpdGVtID0+IHtcblx0XHRcdFx0XHRcdGF0dHJpYnV0ZXMuc2V0KCBpdGVtLCB0cnVlICk7XG5cdFx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdFx0Y29uc3QgeyBlbmQ6IHBvc2l0aW9uQWZ0ZXIgfSA9IG1vZGVsLmluc2VydENvbnRlbnQoIHdyaXRlci5jcmVhdGVUZXh0KCB0ZW1wbGF0ZVZhci5pZCwgYXR0cmlidXRlcyApLCBwb3NpdGlvbiApO1xuXG5cdFx0XHRcdFx0Ly8gUHV0IHRoZSBzZWxlY3Rpb24gYXQgdGhlIGVuZCBvZiB0aGUgaW5zZXJ0ZWQgbGluay5cblx0XHRcdFx0XHQvLyBVc2luZyBlbmQgb2YgcmFuZ2UgcmV0dXJuZWQgZnJvbSBpbnNlcnRDb250ZW50IGluIGNhc2Ugbm9kZXMgd2l0aCB0aGUgc2FtZSBhdHRyaWJ1dGVzIGdvdCBtZXJnZWQuXG5cdFx0XHRcdFx0d3JpdGVyLnNldFNlbGVjdGlvbiggcG9zaXRpb25BZnRlciApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gUmVtb3ZlIHRoZSBgbGlua0hyZWZgIGF0dHJpYnV0ZSBhbmQgYWxsIGxpbmsgZGVjb3JhdG9ycyBmcm9tIHRoZSBzZWxlY3Rpb24uXG5cdFx0XHRcdC8vIEl0IHN0b3BzIGFkZGluZyBhIG5ldyBjb250ZW50IGludG8gdGhlIGxpbmsgZWxlbWVudC5cblx0XHRcdFx0WyAndGVtcGxhdGVWYXInLCd0ZW1wbGF0ZVZhci10eXBlJywgLi4udHJ1dGh5TWFudWFsRGVjb3JhdG9ycywgLi4uZmFsc3lNYW51YWxEZWNvcmF0b3JzIF0uZm9yRWFjaCggaXRlbSA9PiB7XG5cdFx0XHRcdFx0d3JpdGVyLnJlbW92ZVNlbGVjdGlvbkF0dHJpYnV0ZSggaXRlbSApO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBJZiBzZWxlY3Rpb24gaGFzIG5vbi1jb2xsYXBzZWQgcmFuZ2VzLCB3ZSBjaGFuZ2UgYXR0cmlidXRlIG9uIG5vZGVzIGluc2lkZSB0aG9zZSByYW5nZXNcblx0XHRcdFx0Ly8gb21pdHRpbmcgbm9kZXMgd2hlcmUgdGhlIGBsaW5rSHJlZmAgYXR0cmlidXRlIGlzIGRpc2FsbG93ZWQuXG5cdFx0XHRcdGNvbnN0IHJhbmdlcyA9IG1vZGVsLnNjaGVtYS5nZXRWYWxpZFJhbmdlcyggc2VsZWN0aW9uLmdldFJhbmdlcygpLCAndGVtcGxhdGVWYXInICk7XG5cblx0XHRcdFx0Ly8gQnV0IGZvciB0aGUgZmlyc3QsIGNoZWNrIHdoZXRoZXIgdGhlIGBsaW5rSHJlZmAgYXR0cmlidXRlIGlzIGFsbG93ZWQgb24gc2VsZWN0ZWQgYmxvY2tzIChlLmcuIHRoZSBcImltYWdlXCIgZWxlbWVudCkuXG5cdFx0XHRcdGNvbnN0IGFsbG93ZWRSYW5nZXMgPSBbXTtcblxuXHRcdFx0XHRmb3IgKCBjb25zdCBlbGVtZW50IG9mIHNlbGVjdGlvbi5nZXRTZWxlY3RlZEJsb2NrcygpICkge1xuXHRcdFx0XHRcdGlmICggbW9kZWwuc2NoZW1hLmNoZWNrQXR0cmlidXRlKCBlbGVtZW50LCAndGVtcGxhdGVWYXInICkgKSB7XG5cdFx0XHRcdFx0XHRhbGxvd2VkUmFuZ2VzLnB1c2goIHdyaXRlci5jcmVhdGVSYW5nZU9uKCBlbGVtZW50ICkgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBSYW5nZXMgdGhhdCBhY2NlcHQgdGhlIGBsaW5rSHJlZmAgYXR0cmlidXRlLiBTaW5jZSB3ZSB3aWxsIGl0ZXJhdGUgb3ZlciBgYWxsb3dlZFJhbmdlc2AsIGxldCdzIGNsb25lIGl0LlxuXHRcdFx0XHRjb25zdCByYW5nZXNUb1VwZGF0ZSA9IGFsbG93ZWRSYW5nZXMuc2xpY2UoKTtcblxuXHRcdFx0XHQvLyBGb3IgYWxsIHNlbGVjdGlvbiByYW5nZXMgd2Ugd2FudCB0byBjaGVjayB3aGV0aGVyIGdpdmVuIHJhbmdlIGlzIGluc2lkZSBhbiBlbGVtZW50IHRoYXQgYWNjZXB0cyB0aGUgYGxpbmtIcmVmYCBhdHRyaWJ1dGUuXG5cdFx0XHRcdC8vIElmIHNvLCB3ZSBkb24ndCB3YW50IHRvIHByb3BhZ2F0ZSBhcHBseWluZyB0aGUgYXR0cmlidXRlIHRvIGl0cyBjaGlsZHJlbi5cblx0XHRcdFx0Zm9yICggY29uc3QgcmFuZ2Ugb2YgcmFuZ2VzICkge1xuXHRcdFx0XHRcdGlmICggdGhpcy5faXNSYW5nZVRvVXBkYXRlKCByYW5nZSwgYWxsb3dlZFJhbmdlcyApICkge1xuXHRcdFx0XHRcdFx0cmFuZ2VzVG9VcGRhdGUucHVzaCggcmFuZ2UgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3IgKCBjb25zdCByYW5nZSBvZiByYW5nZXNUb1VwZGF0ZSApIHtcblx0XHRcdFx0XHR3cml0ZXIuc2V0QXR0cmlidXRlKCAndGVtcGxhdGVWYXInLCB0ZW1wbGF0ZVZhci5pZCwgcmFuZ2UgKTtcblx0XHRcdFx0XHR3cml0ZXIuc2V0QXR0cmlidXRlKCAndGVtcGxhdGVWYXItdHlwZScsIHRlbXBsYXRlVmFyLnR5cGUsIHJhbmdlICk7XG5cblxuXHRcdFx0XHRcdHRydXRoeU1hbnVhbERlY29yYXRvcnMuZm9yRWFjaCggaXRlbSA9PiB7XG5cdFx0XHRcdFx0XHR3cml0ZXIuc2V0QXR0cmlidXRlKCBpdGVtLCB0cnVlLCByYW5nZSApO1xuXHRcdFx0XHRcdH0gKTtcblxuXHRcdFx0XHRcdGZhbHN5TWFudWFsRGVjb3JhdG9ycy5mb3JFYWNoKCBpdGVtID0+IHtcblx0XHRcdFx0XHRcdHdyaXRlci5yZW1vdmVBdHRyaWJ1dGUoIGl0ZW0sIHJhbmdlICk7XG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFByb3ZpZGVzIGluZm9ybWF0aW9uIHdoZXRoZXIgYSBkZWNvcmF0b3Igd2l0aCBhIGdpdmVuIG5hbWUgaXMgcHJlc2VudCBpbiB0aGUgY3VycmVudGx5IHByb2Nlc3NlZCBzZWxlY3Rpb24uXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBkZWNvcmF0b3JOYW1lIFRoZSBuYW1lIG9mIHRoZSBtYW51YWwgZGVjb3JhdG9yIHVzZWQgaW4gdGhlIG1vZGVsXG5cdCAqIEByZXR1cm5zIHtCb29sZWFufSBUaGUgaW5mb3JtYXRpb24gd2hldGhlciBhIGdpdmVuIGRlY29yYXRvciBpcyBjdXJyZW50bHkgcHJlc2VudCBpbiB0aGUgc2VsZWN0aW9uLlxuXHQgKi9cblx0X2dldERlY29yYXRvclN0YXRlRnJvbU1vZGVsKCBkZWNvcmF0b3JOYW1lICkge1xuXHRcdGNvbnN0IG1vZGVsID0gdGhpcy5lZGl0b3IubW9kZWw7XG5cdFx0Y29uc3QgZG9jID0gbW9kZWwuZG9jdW1lbnQ7XG5cblx0XHRjb25zdCBzZWxlY3RlZEVsZW1lbnQgPSBmaXJzdCggZG9jLnNlbGVjdGlvbi5nZXRTZWxlY3RlZEJsb2NrcygpICk7XG5cblx0XHQvLyBBIGNoZWNrIGZvciB0aGUgYExpbmtJbWFnZWAgcGx1Z2luLiBJZiB0aGUgc2VsZWN0aW9uIGNvbnRhaW5zIGFuIGVsZW1lbnQsIGdldCB2YWx1ZXMgZnJvbSB0aGUgZWxlbWVudC5cblx0XHQvLyBDdXJyZW50bHkgdGhlIHNlbGVjdGlvbiByZWFkcyBhdHRyaWJ1dGVzIGZyb20gdGV4dCBub2RlcyBvbmx5LiBTZWUgIzc0MjkgYW5kICM3NDY1LlxuXHRcdGlmICggaXNJbWFnZUFsbG93ZWQoIHNlbGVjdGVkRWxlbWVudCwgbW9kZWwuc2NoZW1hICkgKSB7XG5cdFx0XHRyZXR1cm4gc2VsZWN0ZWRFbGVtZW50LmdldEF0dHJpYnV0ZSggZGVjb3JhdG9yTmFtZSApO1xuXHRcdH1cblxuXHRcdHJldHVybiBkb2Muc2VsZWN0aW9uLmdldEF0dHJpYnV0ZSggZGVjb3JhdG9yTmFtZSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrcyB3aGV0aGVyIHNwZWNpZmllZCBgcmFuZ2VgIGlzIGluc2lkZSBhbiBlbGVtZW50IHRoYXQgYWNjZXB0cyB0aGUgYGxpbmtIcmVmYCBhdHRyaWJ1dGUuXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7bW9kdWxlOmVuZ2luZS92aWV3L3JhbmdlflJhbmdlfSByYW5nZSBBIHJhbmdlIHRvIGNoZWNrLlxuXHQgKiBAcGFyYW0ge0FycmF5Ljxtb2R1bGU6ZW5naW5lL3ZpZXcvcmFuZ2V+UmFuZ2U+fSBhbGxvd2VkUmFuZ2VzIEFuIGFycmF5IG9mIHJhbmdlcyBjcmVhdGVkIG9uIGVsZW1lbnRzIHdoZXJlIHRoZSBhdHRyaWJ1dGUgaXMgYWNjZXB0ZWQuXG5cdCAqIEByZXR1cm5zIHtCb29sZWFufVxuXHQgKi9cblx0X2lzUmFuZ2VUb1VwZGF0ZSggcmFuZ2UsIGFsbG93ZWRSYW5nZXMgKSB7XG5cdFx0Zm9yICggY29uc3QgYWxsb3dlZFJhbmdlIG9mIGFsbG93ZWRSYW5nZXMgKSB7XG5cdFx0XHQvLyBBIHJhbmdlIGlzIGluc2lkZSBhbiBlbGVtZW50IHRoYXQgd2lsbCBoYXZlIHRoZSBgbGlua0hyZWZgIGF0dHJpYnV0ZS4gRG8gbm90IG1vZGlmeSBpdHMgbm9kZXMuXG5cdFx0XHRpZiAoIGFsbG93ZWRSYW5nZS5jb250YWluc1JhbmdlKCByYW5nZSApICkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2UgQ29weXJpZ2h0IChjKSAyMDAzLTIwMjEsIENLU291cmNlIC0gRnJlZGVyaWNvIEtuYWJiZW4uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBGb3IgbGljZW5zaW5nLCBzZWUgTElDRU5TRS5tZCBvciBodHRwczovL2NrZWRpdG9yLmNvbS9sZWdhbC9ja2VkaXRvci1vc3MtbGljZW5zZVxuICovXG5cbi8qKlxuICogQG1vZHVsZSBsaW5rL2xpbmtlZGl0aW5nXG4gKi9cblxuaW1wb3J0ICBQbHVnaW4gIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtY29yZS9zcmMvcGx1Z2luJztcbmltcG9ydCAgTW91c2VPYnNlcnZlciAgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1lbmdpbmUvc3JjL3ZpZXcvb2JzZXJ2ZXIvbW91c2VvYnNlcnZlcic7XG5pbXBvcnQgeyBJbnB1dCwgVHdvU3RlcENhcmV0TW92ZW1lbnQsIGlubGluZUhpZ2hsaWdodCwgZmluZEF0dHJpYnV0ZVJhbmdlIH0gZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS10eXBpbmcvc3JjJztcbmltcG9ydCAgQ2xpcGJvYXJkUGlwZWxpbmUgIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtY2xpcGJvYXJkL3NyYy9jbGlwYm9hcmRwaXBlbGluZSc7XG5pbXBvcnQgeyBrZXlDb2RlcyB9IGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtdXRpbHMvc3JjL2tleWJvYXJkJztcblxuaW1wb3J0IFRlbXBsYXRlQ29tbWFuZCBmcm9tICcuL3RlbXBsYXRlLWNvbW1hbmQuanMnO1xuaW1wb3J0IENhbmNlbFRlbXBsYXRlQ29tbWFuZCBmcm9tICcuL2NhbmNlbHRlbXBsYXRlY29tbWFuZCc7XG5pbXBvcnQgTWFudWFsRGVjb3JhdG9yIGZyb20gJy4vdXRpbHMvbWFudWFsZGVjb3JhdG9yJztcbmltcG9ydCB7XG5cdGNyZWF0ZVRlbXBsYXRlRWxlbWVudCxcblx0Z2V0TG9jYWxpemVkRGVjb3JhdG9ycyxcblx0bm9ybWFsaXplRGVjb3JhdG9yc1xufSBmcm9tICcuL3V0aWxzJztcblxuaW1wb3J0ICcuLi90aGVtZS90ZW1wbGF0ZS5jc3MnO1xuXG5jb25zdCBISUdITElHSFRfU0VMRUNURURfQ0xBU1MgPSAnY2stdGVtcGxhdGVfc2VsZWN0ZWQnO1xuXG5jb25zdCBERUNPUkFUT1JfTUFOVUFMID0gJ21hbnVhbCc7XG5cbi8qKlxuICogVGhlIGxpbmsgZW5naW5lIGZlYXR1cmUuXG4gKlxuICogSXQgaW50cm9kdWNlcyB0aGUgYHRlbXBsYXRlVmFyPVwidXJsXCJgIGF0dHJpYnV0ZSBpbiB0aGUgbW9kZWwgd2hpY2ggcmVuZGVycyB0byB0aGUgdmlldyBhcyBhIGA8YSBocmVmPVwidXJsXCI+YCBlbGVtZW50XG4gKiBhcyB3ZWxsIGFzIGAndGVtcGxhdGUnYCBhbmQgYCd1bmxpbmsnYCBjb21tYW5kcy5cbiAqXG4gKiBAZXh0ZW5kcyBtb2R1bGU6Y29yZS9wbHVnaW5+UGx1Z2luXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlbXBsYXRlRWRpdGluZyBleHRlbmRzIFBsdWdpbiB7XG5cdC8qKlxuXHQgKiBAaW5oZXJpdERvY1xuXHQgKi9cblx0c3RhdGljIGdldCBwbHVnaW5OYW1lKCkge1xuXHRcdHJldHVybiAnVGV4dFRlbXBsYXRlRWRpdGluZyc7XG5cdH1cblxuXHQvKipcblx0ICogQGluaGVyaXREb2Ncblx0ICovXG5cdHN0YXRpYyBnZXQgcmVxdWlyZXMoKSB7XG5cdFx0Ly8gQ2xpcGJvYXJkIGlzIHJlcXVpcmVkIGZvciBoYW5kbGluZyBjdXQgYW5kIHBhc3RlIGV2ZW50cyB3aGlsZSB0eXBpbmcgb3ZlciB0aGUgbGluay5cblx0XHRyZXR1cm4gWyBUd29TdGVwQ2FyZXRNb3ZlbWVudCwgSW5wdXQsIENsaXBib2FyZFBpcGVsaW5lIF07XG5cdH1cblxuXHQvKipcblx0ICogQGluaGVyaXREb2Ncblx0ICovXG5cdGNvbnN0cnVjdG9yKCBlZGl0b3IgKSB7XG5cdFx0c3VwZXIoIGVkaXRvciApO1xuXG5cdFx0ZWRpdG9yLmNvbmZpZy5kZWZpbmUoICd0ZW1wbGF0ZScsIHtcblx0XHRcdGFkZFRhcmdldFRvRXh0ZXJuYWxMaW5rczogZmFsc2Vcblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogQGluaGVyaXREb2Ncblx0ICovXG5cdGluaXQoKSB7XG5cdFx0Y29uc3QgZWRpdG9yID0gdGhpcy5lZGl0b3I7XG5cblx0XHQvLyBBbGxvdyBsaW5rIGF0dHJpYnV0ZSBvbiBhbGwgaW5saW5lIG5vZGVzLlxuXHRcdGVkaXRvci5tb2RlbC5zY2hlbWEuZXh0ZW5kKCAnJHRleHQnLCB7IGFsbG93QXR0cmlidXRlczogJ3RlbXBsYXRlVmFyJyB9ICk7XG5cblx0XHRlZGl0b3IubW9kZWwuc2NoZW1hLmV4dGVuZCggJyR0ZXh0JywgeyBhbGxvd0F0dHJpYnV0ZXM6ICd0ZW1wbGF0ZVZhci10eXBlJyB9ICk7XG5cdFx0ZWRpdG9yLmNvbnZlcnNpb24uZm9yKCAnZGF0YURvd25jYXN0JyApXG5cdFx0XHQuYXR0cmlidXRlVG9FbGVtZW50KCB7IG1vZGVsOiAndGVtcGxhdGVWYXInLCB2aWV3OiBjcmVhdGVUZW1wbGF0ZUVsZW1lbnQgfSApO1xuXG5cdFx0ZWRpdG9yLmNvbnZlcnNpb24uZm9yKCAnZWRpdGluZ0Rvd25jYXN0JyApXG5cdFx0XHQuYXR0cmlidXRlVG9FbGVtZW50KCB7IG1vZGVsOiAndGVtcGxhdGVWYXInLCB2aWV3OiAoIGlkLCBjb252ZXJzaW9uQXBpICkgPT4ge1xuXG5cdFx0XHRcdHJldHVybiBjcmVhdGVUZW1wbGF0ZUVsZW1lbnQoICBpZCAsIGNvbnZlcnNpb25BcGkgKTtcblx0XHRcdH0gfSApO1xuXG5cblx0XHRlZGl0b3IuY29udmVyc2lvbi5mb3IoICdkb3duY2FzdCcgKS5hdHRyaWJ1dGVUb0VsZW1lbnQoIHtcblxuXHRcdFx0bW9kZWw6ICd0ZW1wbGF0ZVZhci10eXBlJyxcblx0XHRcdHZpZXc6ICggdHlwZSwgeyB3cml0ZXIgfSApID0+IHtcblxuXHRcdFx0XHRcdGNvbnN0IGVsZW1lbnQgPSB3cml0ZXIuY3JlYXRlQXR0cmlidXRlRWxlbWVudCggJ3NwYW4nLCB7J2RhdGEtdGVtcGxhdGUtdHlwZSc6dHlwZX0sIHsgcHJpb3JpdHk6IDUgfSApO1xuXHRcdFx0XHRcdHdyaXRlci5zZXRDdXN0b21Qcm9wZXJ0eSggJ3RlbXBsYXRlJywgdHJ1ZSwgZWxlbWVudCApO1xuXHRcdFx0XHRcdHJldHVybiBlbGVtZW50O1xuXG5cdFx0XHR9IH0gKTtcblxuXHRcdGVkaXRvci5jb252ZXJzaW9uLmZvciggJ3VwY2FzdCcgKS5lbGVtZW50VG9BdHRyaWJ1dGUoIHtcblx0XHRcdHZpZXc6IHtcblx0XHRcdFx0bmFtZTogJ3NwYW4nLFxuXHRcdFx0XHRhdHRyaWJ1dGVzOiBbJ2RhdGEtdGVtcGxhdGUtdHlwZSddXG5cblxuXHRcdFx0fSxcblx0XHRcdG1vZGVsOiB7XG5cdFx0XHRcdGtleTogJ3RlbXBsYXRlVmFyLXR5cGUnLFxuXHRcdFx0XHR2YWx1ZTogdmlld0VsZW1lbnQgPT4gdmlld0VsZW1lbnQuZ2V0QXR0cmlidXRlKCAnZGF0YS10ZW1wbGF0ZS10eXBlJyApXG5cdFx0XHR9XG5cdFx0fSApO1xuXHRcdGVkaXRvci5jb252ZXJzaW9uLmZvciggJ3VwY2FzdCcgKVxuXHRcdFx0LmVsZW1lbnRUb0F0dHJpYnV0ZSgge1xuXHRcdFx0XHR2aWV3OiB7XG5cdFx0XHRcdFx0bmFtZTogJ3NwYW4nLFxuXHRcdFx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0XHRcdCdkYXRhLXRlbXBsYXRlLXR5cGUnOiB0cnVlXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRtb2RlbDoge1xuXHRcdFx0XHRcdGtleTogJ3RlbXBsYXRlVmFyLXR5cGUnLFxuXHRcdFx0XHRcdHZhbHVlOiB2aWV3RWxlbWVudCA9PiB2aWV3RWxlbWVudC5nZXRBdHRyaWJ1dGUoICdkYXRhLXRlbXBsYXRlLXR5cGUnIClcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdGVkaXRvci5jb252ZXJzaW9uLmZvciggJ3VwY2FzdCcgKS5lbGVtZW50VG9BdHRyaWJ1dGUoIHtcblx0XHRcdHZpZXc6IHtcblx0XHRcdFx0bmFtZTogJ3NwYW4nLFxuXHRcdFx0XHRhdHRyaWJ1dGVzOiBbJ2RhdGEtdGVtcGxhdGUtdmFyJ11cblxuXG5cdFx0XHR9LFxuXHRcdFx0bW9kZWw6IHtcblx0XHRcdFx0a2V5OiAndGVtcGxhdGVWYXInLFxuXHRcdFx0XHR2YWx1ZTogdmlld0VsZW1lbnQgPT4gdmlld0VsZW1lbnQuZ2V0QXR0cmlidXRlKCAnZGF0YS10ZW1wbGF0ZS12YXInIClcblx0XHRcdH1cblx0XHR9ICk7XG5cdFx0ZWRpdG9yLmNvbnZlcnNpb24uZm9yKCAndXBjYXN0JyApXG5cdFx0XHQuZWxlbWVudFRvQXR0cmlidXRlKCB7XG5cdFx0XHRcdHZpZXc6IHtcblx0XHRcdFx0XHRuYW1lOiAnc3BhbicsXG5cdFx0XHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRcdFx0J2RhdGEtdGVtcGxhdGUtdmFyJzogdHJ1ZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0bW9kZWw6IHtcblx0XHRcdFx0XHRrZXk6ICd0ZW1wbGF0ZVZhcicsXG5cdFx0XHRcdFx0dmFsdWU6IHZpZXdFbGVtZW50ID0+IHZpZXdFbGVtZW50LmdldEF0dHJpYnV0ZSggJ2RhdGEtdGVtcGxhdGUtdmFyJyApXG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblxuXHRcdC8vIENyZWF0ZSBsaW5raW5nIGNvbW1hbmRzLlxuXHRcdGVkaXRvci5jb21tYW5kcy5hZGQoICd0ZW1wbGF0ZScsIG5ldyBUZW1wbGF0ZUNvbW1hbmQoIGVkaXRvciApICk7XG5cdFx0ZWRpdG9yLmNvbW1hbmRzLmFkZCggJ2NhbmNlbHRlbXBsYXRlJywgbmV3IENhbmNlbFRlbXBsYXRlQ29tbWFuZCggZWRpdG9yICkgKTtcblxuXHRcdCBjb25zdCBsaW5rRGVjb3JhdG9ycyA9IGdldExvY2FsaXplZERlY29yYXRvcnMoIGVkaXRvci50LCBub3JtYWxpemVEZWNvcmF0b3JzKCBlZGl0b3IuY29uZmlnLmdldCggJ3RlbXBsYXRlLmRlY29yYXRvcnMnICkgKSApO1xuXHRcdC8vXG5cdFx0Ly9cblx0XHQgdGhpcy5fZW5hYmxlTWFudWFsRGVjb3JhdG9ycyggbGlua0RlY29yYXRvcnMuZmlsdGVyKCBpdGVtID0+IGl0ZW0ubW9kZSA9PT0gREVDT1JBVE9SX01BTlVBTCApICk7XG5cblx0XHQvLyBFbmFibGUgdHdvLXN0ZXAgY2FyZXQgbW92ZW1lbnQgZm9yIGB0ZW1wbGF0ZVZhcmAgYXR0cmlidXRlLlxuXHRcdGNvbnN0IHR3b1N0ZXBDYXJldE1vdmVtZW50UGx1Z2luID0gZWRpdG9yLnBsdWdpbnMuZ2V0KCBUd29TdGVwQ2FyZXRNb3ZlbWVudCApO1xuXHRcdHR3b1N0ZXBDYXJldE1vdmVtZW50UGx1Z2luLnJlZ2lzdGVyQXR0cmlidXRlKCAndGVtcGxhdGVWYXInICk7XG5cblx0XHQvLyBTZXR1cCBoaWdobGlnaHQgb3ZlciBzZWxlY3RlZCBsaW5rLlxuXHRcdGlubGluZUhpZ2hsaWdodCggZWRpdG9yLCAndGVtcGxhdGVWYXInLCAnc3BhbicsIEhJR0hMSUdIVF9TRUxFQ1RFRF9DTEFTUyApO1xuXG5cdFx0Ly8gQ2hhbmdlIHRoZSBhdHRyaWJ1dGVzIG9mIHRoZSBzZWxlY3Rpb24gaW4gY2VydGFpbiBzaXR1YXRpb25zIGFmdGVyIHRoZSBsaW5rIHdhcyBpbnNlcnRlZCBpbnRvIHRoZSBkb2N1bWVudC5cblx0XHR0aGlzLl9lbmFibGVJbnNlcnRDb250ZW50U2VsZWN0aW9uQXR0cmlidXRlc0ZpeGVyKCk7XG5cblx0XHQvLyBIYW5kbGUgYSBjbGljayBhdCB0aGUgYmVnaW5uaW5nL2VuZCBvZiBhIGxpbmsgZWxlbWVudC5cblx0XHR0aGlzLl9lbmFibGVDbGlja2luZ0FmdGVyTGluaygpO1xuXG5cdFx0Ly8gSGFuZGxlIHR5cGluZyBvdmVyIHRoZSBsaW5rLlxuXHRcdHRoaXMuX2VuYWJsZVR5cGluZ092ZXJMaW5rKCk7XG5cblx0XHQvLyBIYW5kbGUgcmVtb3ZpbmcgdGhlIGNvbnRlbnQgYWZ0ZXIgdGhlIGxpbmsgZWxlbWVudC5cblx0XHR0aGlzLl9oYW5kbGVEZWxldGVDb250ZW50QWZ0ZXJMaW5rKCk7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBQcm9jZXNzZXMgYW4gYXJyYXkgb2YgY29uZmlndXJlZCB7QGxpbmsgbW9kdWxlOmxpbmsvbGlua35MaW5rRGVjb3JhdG9yTWFudWFsRGVmaW5pdGlvbiBtYW51YWwgZGVjb3JhdG9yc30sXG5cdCAqIHRyYW5zZm9ybXMgdGhlbSBpbnRvIHtAbGluayBtb2R1bGU6bGluay91dGlsc35NYW51YWxEZWNvcmF0b3J9IGluc3RhbmNlcyBhbmQgc3RvcmVzIHRoZW0gaW4gdGhlXG5cdCAqIHtAbGluayBtb2R1bGU6bGluay9saW5rY29tbWFuZH5UZW1wbGF0ZUNvbW1hbmQjbWFudWFsRGVjb3JhdG9yc30gY29sbGVjdGlvbiAoYSBtb2RlbCBmb3IgbWFudWFsIGRlY29yYXRvcnMgc3RhdGUpLlxuXHQgKlxuXHQgKiBBbHNvIHJlZ2lzdGVycyBhbiB7QGxpbmsgbW9kdWxlOmVuZ2luZS9jb252ZXJzaW9uL2Rvd25jYXN0aGVscGVyc35Eb3duY2FzdEhlbHBlcnMjYXR0cmlidXRlVG9FbGVtZW50IGF0dHJpYnV0ZS10by1lbGVtZW50fVxuXHQgKiBjb252ZXJ0ZXIgZm9yIGVhY2ggbWFudWFsIGRlY29yYXRvciBhbmQgZXh0ZW5kcyB0aGUge0BsaW5rIG1vZHVsZTplbmdpbmUvbW9kZWwvc2NoZW1hflNjaGVtYSBtb2RlbCdzIHNjaGVtYX1cblx0ICogd2l0aCBhZGVxdWF0ZSBtb2RlbCBhdHRyaWJ1dGVzLlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge0FycmF5Ljxtb2R1bGU6bGluay9saW5rfkxpbmtEZWNvcmF0b3JNYW51YWxEZWZpbml0aW9uPn0gbWFudWFsRGVjb3JhdG9yRGVmaW5pdGlvbnNcblx0ICovXG5cdF9lbmFibGVNYW51YWxEZWNvcmF0b3JzKCBtYW51YWxEZWNvcmF0b3JEZWZpbml0aW9ucyApIHtcblx0XHRpZiAoICFtYW51YWxEZWNvcmF0b3JEZWZpbml0aW9ucy5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgZWRpdG9yID0gdGhpcy5lZGl0b3I7XG5cdFx0Y29uc3QgY29tbWFuZCA9IGVkaXRvci5jb21tYW5kcy5nZXQoICd0ZW1wbGF0ZScgKTtcblx0XHRjb25zdCBtYW51YWxEZWNvcmF0b3JzID0gY29tbWFuZC5tYW51YWxEZWNvcmF0b3JzO1xuXG5cdFx0bWFudWFsRGVjb3JhdG9yRGVmaW5pdGlvbnMuZm9yRWFjaCggZGVjb3JhdG9yID0+IHtcblx0XHRcdGVkaXRvci5tb2RlbC5zY2hlbWEuZXh0ZW5kKCAnJHRleHQnLCB7IGFsbG93QXR0cmlidXRlczogZGVjb3JhdG9yLmlkIH0gKTtcblxuXHRcdFx0Ly8gS2VlcHMgcmVmZXJlbmNlIHRvIG1hbnVhbCBkZWNvcmF0b3IgdG8gZGVjb2RlIGl0cyBuYW1lIHRvIGF0dHJpYnV0ZXMgZHVyaW5nIGRvd25jYXN0LlxuXHRcdFx0bWFudWFsRGVjb3JhdG9ycy5hZGQoIG5ldyBNYW51YWxEZWNvcmF0b3IoIGRlY29yYXRvciApICk7XG5cdFx0XHRjb25zb2xlLmxvZyhtYW51YWxEZWNvcmF0b3JzKTtcblx0XHRcdGVkaXRvci5jb252ZXJzaW9uLmZvciggJ2Rvd25jYXN0JyApLmF0dHJpYnV0ZVRvRWxlbWVudCgge1xuXG5cdFx0XHRcdG1vZGVsOiBkZWNvcmF0b3IuaWQsXG5cdFx0XHRcdHZpZXc6ICggbWFudWFsRGVjb3JhdG9yTmFtZSwgeyB3cml0ZXIgfSApID0+IHtcblx0XHRcdFx0XHRpZiAoIG1hbnVhbERlY29yYXRvck5hbWUgKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBhdHRyaWJ1dGVzID0gbWFudWFsRGVjb3JhdG9ycy5nZXQoIGRlY29yYXRvci5pZCApLmF0dHJpYnV0ZXM7XG5cdFx0XHRcdFx0XHRjb25zdCBlbGVtZW50ID0gd3JpdGVyLmNyZWF0ZUF0dHJpYnV0ZUVsZW1lbnQoICdzcGFuJywgYXR0cmlidXRlcywgeyBwcmlvcml0eTogNSB9ICk7XG5cdFx0XHRcdFx0XHR3cml0ZXIuc2V0Q3VzdG9tUHJvcGVydHkoICd0ZW1wbGF0ZScsIHRydWUsIGVsZW1lbnQgKTtcblx0XHRcdFx0XHRcdHJldHVybiBlbGVtZW50O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSB9ICk7XG5cblx0XHRcdGVkaXRvci5jb252ZXJzaW9uLmZvciggJ3VwY2FzdCcgKS5lbGVtZW50VG9BdHRyaWJ1dGUoIHtcblx0XHRcdFx0dmlldzoge1xuXHRcdFx0XHRcdG5hbWU6ICdzcGFuJyxcblx0XHRcdFx0XHRhdHRyaWJ1dGVzOiBtYW51YWxEZWNvcmF0b3JzLmdldCggZGVjb3JhdG9yLmlkICkuYXR0cmlidXRlc1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRtb2RlbDoge1xuXHRcdFx0XHRcdGtleTogZGVjb3JhdG9yLmlkXG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogU3RhcnRzIGxpc3RlbmluZyB0byB7QGxpbmsgbW9kdWxlOmVuZ2luZS9tb2RlbC9tb2RlbH5Nb2RlbCNldmVudDppbnNlcnRDb250ZW50fSBhbmQgY29ycmVjdHMgdGhlIG1vZGVsXG5cdCAqIHNlbGVjdGlvbiBhdHRyaWJ1dGVzIGlmIHRoZSBzZWxlY3Rpb24gaXMgYXQgdGhlIGVuZCBvZiBhIGxpbmsgYWZ0ZXIgaW5zZXJ0aW5nIHRoZSBjb250ZW50LlxuXHQgKlxuXHQgKiBUaGUgcHVycG9zZSBvZiB0aGlzIGFjdGlvbiBpcyB0byBpbXByb3ZlIHRoZSBvdmVyYWxsIFVYIGJlY2F1c2UgdGhlIHVzZXIgaXMgbm8gbG9uZ2VyIFwidHJhcHBlZFwiIGJ5IHRoZVxuXHQgKiBgdGVtcGxhdGVWYXJgIGF0dHJpYnV0ZSBvZiB0aGUgc2VsZWN0aW9uIGFuZCB0aGV5IGNhbiB0eXBlIGEgXCJjbGVhblwiIChgdGVtcGxhdGVWYXJg4oCTbGVzcykgdGV4dCByaWdodCBhd2F5LlxuXHQgKlxuXHQgKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2NrZWRpdG9yL2NrZWRpdG9yNS9pc3N1ZXMvNjA1My5cblx0ICpcblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9lbmFibGVJbnNlcnRDb250ZW50U2VsZWN0aW9uQXR0cmlidXRlc0ZpeGVyKCkge1xuXHRcdGNvbnN0IGVkaXRvciA9IHRoaXMuZWRpdG9yO1xuXHRcdGNvbnN0IG1vZGVsID0gZWRpdG9yLm1vZGVsO1xuXHRcdGNvbnN0IHNlbGVjdGlvbiA9IG1vZGVsLmRvY3VtZW50LnNlbGVjdGlvbjtcblx0XHRjb25zdCBsaW5rQ29tbWFuZCA9IGVkaXRvci5jb21tYW5kcy5nZXQoICd0ZW1wbGF0ZScgKTtcblxuXHRcdHRoaXMubGlzdGVuVG8oIG1vZGVsLCAnaW5zZXJ0Q29udGVudCcsICgpID0+IHtcblx0XHRcdGNvbnN0IG5vZGVCZWZvcmUgPSBzZWxlY3Rpb24uYW5jaG9yLm5vZGVCZWZvcmU7XG5cdFx0XHRjb25zdCBub2RlQWZ0ZXIgPSBzZWxlY3Rpb24uYW5jaG9yLm5vZGVBZnRlcjtcblxuXHRcdFx0Ly8gTk9URTog4oawIGFuZCDihrEgcmVwcmVzZW50IHRoZSBncmF2aXR5IG9mIHRoZSBzZWxlY3Rpb24uXG5cblx0XHRcdC8vIFRoZSBvbmx5IHRydWx5IHZhbGlkIGNhc2UgaXM6XG5cdFx0XHQvL1xuXHRcdFx0Ly9cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oawXG5cdFx0XHQvL1x0XHQuLi48JHRleHQgdGVtcGxhdGVWYXI9XCJmb29cIj5JTlNFUlRFRFtdPC8kdGV4dD5cblx0XHRcdC8vXG5cdFx0XHQvLyBJZiB0aGUgc2VsZWN0aW9uIGlzIG5vdCBcInRyYXBwZWRcIiBieSB0aGUgYHRlbXBsYXRlVmFyYCBhdHRyaWJ1dGUgYWZ0ZXIgaW5zZXJ0aW5nLCB0aGVyZSdzIG5vdGhpbmdcblx0XHRcdC8vIHRvIGZpeCB0aGVyZS5cblx0XHRcdGlmICggIXNlbGVjdGlvbi5oYXNBdHRyaWJ1dGUoICd0ZW1wbGF0ZVZhcicgKSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBGaWx0ZXIgb3V0IHRoZSBmb2xsb3dpbmcgY2FzZSB3aGVyZSBhIGxpbmsgd2l0aCB0aGUgc2FtZSBocmVmIChlLmcuIDxhIGhyZWY9XCJmb29cIj5JTlNFUlRFRDwvYT4pIGlzIGluc2VydGVkXG5cdFx0XHQvLyBpbiB0aGUgbWlkZGxlIG9mIGFuIGV4aXN0aW5nIGxpbms6XG5cdFx0XHQvL1xuXHRcdFx0Ly8gQmVmb3JlIGluc2VydGlvbjpcblx0XHRcdC8vXHRcdCAgICAgICAgICAgICAgICAgICAgICAg4oawXG5cdFx0XHQvL1x0XHQ8JHRleHQgdGVtcGxhdGVWYXI9XCJmb29cIj5sW11pbms8LyR0ZXh0PlxuXHRcdFx0Ly9cblx0XHRcdC8vIEV4cGVjdGVkIGFmdGVyIGluc2VydGlvbjpcblx0XHRcdC8vXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDihrBcblx0XHRcdC8vXHRcdDwkdGV4dCB0ZW1wbGF0ZVZhcj1cImZvb1wiPmxJTlNFUlRFRFtdaW5rPC8kdGV4dD5cblx0XHRcdC8vXG5cdFx0XHRpZiAoICFub2RlQmVmb3JlICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIEZpbHRlciBvdXQgdGhlIGZvbGxvd2luZyBjYXNlIHdoZXJlIHRoZSBzZWxlY3Rpb24gaGFzIHRoZSBcInRlbXBsYXRlVmFyXCIgYXR0cmlidXRlIGJlY2F1c2UgdGhlXG5cdFx0XHQvLyBncmF2aXR5IGlzIG92ZXJyaWRkZW4gYW5kIHNvbWUgdGV4dCB3aXRoIGFub3RoZXIgYXR0cmlidXRlIChlLmcuIDxiPklOU0VSVEVEPC9iPikgaXMgaW5zZXJ0ZWQ6XG5cdFx0XHQvL1xuXHRcdFx0Ly8gQmVmb3JlIGluc2VydGlvbjpcblx0XHRcdC8vXG5cdFx0XHQvL1x0XHQgICAgICAgICAgICAgICAgICAgICAgIOKGsVxuXHRcdFx0Ly9cdFx0PCR0ZXh0IHRlbXBsYXRlVmFyPVwiZm9vXCI+W11saW5rPC8kdGV4dD5cblx0XHRcdC8vXG5cdFx0XHQvLyBFeHBlY3RlZCBhZnRlciBpbnNlcnRpb246XG5cdFx0XHQvL1xuXHRcdFx0Ly9cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKGsVxuXHRcdFx0Ly9cdFx0PCR0ZXh0IGJvbGQ9XCJ0cnVlXCI+SU5TRVJURUQ8LyR0ZXh0PjwkdGV4dCB0ZW1wbGF0ZVZhcj1cImZvb1wiPltdbGluazwvJHRleHQ+XG5cdFx0XHQvL1xuXHRcdFx0aWYgKCAhbm9kZUJlZm9yZS5oYXNBdHRyaWJ1dGUoICd0ZW1wbGF0ZVZhcicgKSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBGaWx0ZXIgb3V0IHRoZSBmb2xsb3dpbmcgY2FzZSB3aGVyZSBhIGxpbmsgaXMgYSBpbnNlcnRlZCBpbiB0aGUgbWlkZGxlIChvciBiZWZvcmUpIGFub3RoZXIgbGlua1xuXHRcdFx0Ly8gKGRpZmZlcmVudCBVUkxzLCBzbyB0aGV5IHdpbGwgbm90IG1lcmdlKS4gSW4gdGhpcyAobGV0J3Mgc2F5IHdlaXJkKSBjYXNlLCB3ZSBjYW4gbGVhdmUgdGhlIHNlbGVjdGlvblxuXHRcdFx0Ly8gYXR0cmlidXRlcyBhcyB0aGV5IGFyZSBiZWNhdXNlIHRoZSB1c2VyIHdpbGwgZW5kIHVwIHdyaXRpbmcgaW4gb25lIGxpbmsgb3IgYW5vdGhlciBhbnl3YXkuXG5cdFx0XHQvL1xuXHRcdFx0Ly8gQmVmb3JlIGluc2VydGlvbjpcblx0XHRcdC8vXG5cdFx0XHQvL1x0XHQgICAgICAgICAgICAgICAgICAgICAgIOKGsFxuXHRcdFx0Ly9cdFx0PCR0ZXh0IHRlbXBsYXRlVmFyPVwiZm9vXCI+bFtdaW5rPC8kdGV4dD5cblx0XHRcdC8vXG5cdFx0XHQvLyBFeHBlY3RlZCBhZnRlciBpbnNlcnRpb246XG5cdFx0XHQvL1xuXHRcdFx0Ly9cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKGsFxuXHRcdFx0Ly9cdFx0PCR0ZXh0IHRlbXBsYXRlVmFyPVwiZm9vXCI+bDwvJHRleHQ+PCR0ZXh0IHRlbXBsYXRlVmFyPVwiYmFyXCI+SU5TRVJURURbXTwvJHRleHQ+PCR0ZXh0IHRlbXBsYXRlVmFyPVwiZm9vXCI+aW5rPC8kdGV4dD5cblx0XHRcdC8vXG5cdFx0XHRpZiAoIG5vZGVBZnRlciAmJiBub2RlQWZ0ZXIuaGFzQXR0cmlidXRlKCAndGVtcGxhdGVWYXInICkgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0bW9kZWwuY2hhbmdlKCB3cml0ZXIgPT4ge1xuXHRcdFx0XHRyZW1vdmVMaW5rQXR0cmlidXRlc0Zyb21TZWxlY3Rpb24oIHdyaXRlciwgbGlua0NvbW1hbmQubWFudWFsRGVjb3JhdG9ycyApO1xuXHRcdFx0fSApO1xuXHRcdH0sIHsgcHJpb3JpdHk6ICdsb3cnIH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTdGFydHMgbGlzdGVuaW5nIHRvIHtAbGluayBtb2R1bGU6ZW5naW5lL3ZpZXcvZG9jdW1lbnR+RG9jdW1lbnQjZXZlbnQ6bW91c2Vkb3dufSBhbmRcblx0ICoge0BsaW5rIG1vZHVsZTplbmdpbmUvdmlldy9kb2N1bWVudH5Eb2N1bWVudCNldmVudDpzZWxlY3Rpb25DaGFuZ2V9IGFuZCBwdXRzIHRoZSBzZWxlY3Rpb24gYmVmb3JlL2FmdGVyIGEgbGluayBub2RlXG5cdCAqIGlmIGNsaWNrZWQgYXQgdGhlIGJlZ2lubmluZy9lbmRpbmcgb2YgdGhlIGxpbmsuXG5cdCAqXG5cdCAqIFRoZSBwdXJwb3NlIG9mIHRoaXMgYWN0aW9uIGlzIHRvIGFsbG93IHR5cGluZyBhcm91bmQgdGhlIGxpbmsgbm9kZSBkaXJlY3RseSBhZnRlciBhIGNsaWNrLlxuXHQgKlxuXHQgKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2NrZWRpdG9yL2NrZWRpdG9yNS9pc3N1ZXMvMTAxNi5cblx0ICpcblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9lbmFibGVDbGlja2luZ0FmdGVyTGluaygpIHtcblx0XHRjb25zdCBlZGl0b3IgPSB0aGlzLmVkaXRvcjtcblx0XHRjb25zdCBsaW5rQ29tbWFuZCA9IGVkaXRvci5jb21tYW5kcy5nZXQoICd0ZW1wbGF0ZScgKTtcblxuXHRcdGVkaXRvci5lZGl0aW5nLnZpZXcuYWRkT2JzZXJ2ZXIoIE1vdXNlT2JzZXJ2ZXIgKTtcblxuXHRcdGxldCBjbGlja2VkID0gZmFsc2U7XG5cblx0XHQvLyBEZXRlY3QgdGhlIGNsaWNrLlxuXHRcdHRoaXMubGlzdGVuVG8oIGVkaXRvci5lZGl0aW5nLnZpZXcuZG9jdW1lbnQsICdtb3VzZWRvd24nLCAoKSA9PiB7XG5cdFx0XHRjbGlja2VkID0gdHJ1ZTtcblx0XHR9ICk7XG5cblx0XHQvLyBXaGVuIHRoZSBzZWxlY3Rpb24gaGFzIGNoYW5nZWQuLi5cblx0XHR0aGlzLmxpc3RlblRvKCBlZGl0b3IuZWRpdGluZy52aWV3LmRvY3VtZW50LCAnc2VsZWN0aW9uQ2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0aWYgKCAhY2xpY2tlZCApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyAuLi5hbmQgaXQgd2FzIGNhdXNlZCBieSB0aGUgY2xpY2suLi5cblx0XHRcdGNsaWNrZWQgPSBmYWxzZTtcblxuXHRcdFx0Y29uc3Qgc2VsZWN0aW9uID0gZWRpdG9yLm1vZGVsLmRvY3VtZW50LnNlbGVjdGlvbjtcblxuXHRcdFx0Ly8gLi4uYW5kIG5vIHRleHQgaXMgc2VsZWN0ZWQuLi5cblx0XHRcdGlmICggIXNlbGVjdGlvbi5pc0NvbGxhcHNlZCApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyAuLi5hbmQgY2xpY2tlZCB0ZXh0IGlzIHRoZSBsaW5rLi4uXG5cdFx0XHRpZiAoICFzZWxlY3Rpb24uaGFzQXR0cmlidXRlKCAndGVtcGxhdGVWYXInICkgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgcG9zaXRpb24gPSBzZWxlY3Rpb24uZ2V0Rmlyc3RQb3NpdGlvbigpO1xuXHRcdFx0Y29uc3QgbGlua1JhbmdlID0gZmluZEF0dHJpYnV0ZVJhbmdlKCBwb3NpdGlvbiwgJ3RlbXBsYXRlVmFyJywgc2VsZWN0aW9uLmdldEF0dHJpYnV0ZSggJ3RlbXBsYXRlVmFyJyApLCBlZGl0b3IubW9kZWwgKTtcblxuXHRcdFx0Ly8gLi4uY2hlY2sgd2hldGhlciBjbGlja2VkIHN0YXJ0L2VuZCBib3VuZGFyeSBvZiB0aGUgbGluay5cblx0XHRcdC8vIElmIHNvLCByZW1vdmUgdGhlIGB0ZW1wbGF0ZVZhcmAgYXR0cmlidXRlLlxuXHRcdFx0aWYgKCBwb3NpdGlvbi5pc1RvdWNoaW5nKCBsaW5rUmFuZ2Uuc3RhcnQgKSB8fCBwb3NpdGlvbi5pc1RvdWNoaW5nKCBsaW5rUmFuZ2UuZW5kICkgKSB7XG5cdFx0XHRcdGVkaXRvci5tb2RlbC5jaGFuZ2UoIHdyaXRlciA9PiB7XG5cdFx0XHRcdFx0cmVtb3ZlTGlua0F0dHJpYnV0ZXNGcm9tU2VsZWN0aW9uKCB3cml0ZXIsIGxpbmtDb21tYW5kLm1hbnVhbERlY29yYXRvcnMgKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTdGFydHMgbGlzdGVuaW5nIHRvIHtAbGluayBtb2R1bGU6ZW5naW5lL21vZGVsL21vZGVsfk1vZGVsI2RlbGV0ZUNvbnRlbnR9IGFuZCB7QGxpbmsgbW9kdWxlOmVuZ2luZS9tb2RlbC9tb2RlbH5Nb2RlbCNpbnNlcnRDb250ZW50fVxuXHQgKiBhbmQgY2hlY2tzIHdoZXRoZXIgdHlwaW5nIG92ZXIgdGhlIGxpbmsuIElmIHNvLCBhdHRyaWJ1dGVzIG9mIHJlbW92ZWQgdGV4dCBhcmUgcHJlc2VydmVkIGFuZCBhcHBsaWVkIHRvIHRoZSBpbnNlcnRlZCB0ZXh0LlxuXHQgKlxuXHQgKiBUaGUgcHVycG9zZSBvZiB0aGlzIGFjdGlvbiBpcyB0byBhbGxvdyBtb2RpZnlpbmcgYSB0ZXh0IHdpdGhvdXQgbG9vc2luZyB0aGUgYHRlbXBsYXRlVmFyYCBhdHRyaWJ1dGUgKGFuZCBvdGhlcikuXG5cdCAqXG5cdCAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vY2tlZGl0b3IvY2tlZGl0b3I1L2lzc3Vlcy80NzYyLlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X2VuYWJsZVR5cGluZ092ZXJMaW5rKCkge1xuXHRcdGNvbnN0IGVkaXRvciA9IHRoaXMuZWRpdG9yO1xuXHRcdGNvbnN0IHZpZXcgPSBlZGl0b3IuZWRpdGluZy52aWV3O1xuXG5cdFx0Ly8gU2VsZWN0aW9uIGF0dHJpYnV0ZXMgd2hlbiBzdGFydGVkIHR5cGluZyBvdmVyIHRoZSBsaW5rLlxuXHRcdGxldCBzZWxlY3Rpb25BdHRyaWJ1dGVzO1xuXG5cdFx0Ly8gV2hldGhlciBwcmVzc2VkIGBCYWNrc3BhY2VgIG9yIGBEZWxldGVgLiBJZiBzbywgYXR0cmlidXRlcyBzaG91bGQgbm90IGJlIHByZXNlcnZlZC5cblx0XHRsZXQgZGVsZXRlZENvbnRlbnQ7XG5cblx0XHQvLyBEZXRlY3QgcHJlc3NpbmcgYEJhY2tzcGFjZWAgLyBgRGVsZXRlYC5cblx0XHR0aGlzLmxpc3RlblRvKCB2aWV3LmRvY3VtZW50LCAnZGVsZXRlJywgKCkgPT4ge1xuXHRcdFx0ZGVsZXRlZENvbnRlbnQgPSB0cnVlO1xuXHRcdH0sIHsgcHJpb3JpdHk6ICdoaWdoJyB9ICk7XG5cblx0XHQvLyBMaXN0ZW5pbmcgdG8gYG1vZGVsI2RlbGV0ZUNvbnRlbnRgIGFsbG93cyBkZXRlY3Rpbmcgd2hldGhlciBzZWxlY3RlZCBjb250ZW50IHdhcyBhIGxpbmsuXG5cdFx0Ly8gSWYgc28sIGJlZm9yZSByZW1vdmluZyB0aGUgZWxlbWVudCwgd2Ugd2lsbCBjb3B5IGl0cyBhdHRyaWJ1dGVzLlxuXHRcdHRoaXMubGlzdGVuVG8oIGVkaXRvci5tb2RlbCwgJ2RlbGV0ZUNvbnRlbnQnLCAoKSA9PiB7XG5cdFx0XHRjb25zdCBzZWxlY3Rpb24gPSBlZGl0b3IubW9kZWwuZG9jdW1lbnQuc2VsZWN0aW9uO1xuXG5cdFx0XHQvLyBDb3B5IGF0dHJpYnV0ZXMgb25seSBpZiBhbnl0aGluZyBpcyBzZWxlY3RlZC5cblx0XHRcdGlmICggc2VsZWN0aW9uLmlzQ29sbGFwc2VkICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIFdoZW4gdGhlIGNvbnRlbnQgd2FzIGRlbGV0ZWQsIGRvIG5vdCBwcmVzZXJ2ZSBhdHRyaWJ1dGVzLlxuXHRcdFx0aWYgKCBkZWxldGVkQ29udGVudCApIHtcblx0XHRcdFx0ZGVsZXRlZENvbnRlbnQgPSBmYWxzZTtcblxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIEVuYWJsZWQgb25seSB3aGVuIHR5cGluZy5cblx0XHRcdGlmICggIWlzVHlwaW5nKCBlZGl0b3IgKSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHNob3VsZENvcHlBdHRyaWJ1dGVzKCBlZGl0b3IubW9kZWwgKSApIHtcblx0XHRcdFx0c2VsZWN0aW9uQXR0cmlidXRlcyA9IHNlbGVjdGlvbi5nZXRBdHRyaWJ1dGVzKCk7XG5cdFx0XHR9XG5cdFx0fSwgeyBwcmlvcml0eTogJ2hpZ2gnIH0gKTtcblxuXHRcdC8vIExpc3RlbmluZyB0byBgbW9kZWwjaW5zZXJ0Q29udGVudGAgYWxsb3dzIGRldGVjdGluZyB0aGUgY29udGVudCBpbnNlcnRpb24uXG5cdFx0Ly8gV2Ugd2FudCB0byBhcHBseSBhdHRyaWJ1dGVzIHRoYXQgd2VyZSByZW1vdmVkIHdoaWxlIHR5cGluZyBvdmVyIHRoZSBsaW5rLlxuXHRcdHRoaXMubGlzdGVuVG8oIGVkaXRvci5tb2RlbCwgJ2luc2VydENvbnRlbnQnLCAoIGV2dCwgWyBlbGVtZW50IF0gKSA9PiB7XG5cdFx0XHRkZWxldGVkQ29udGVudCA9IGZhbHNlO1xuXG5cdFx0XHQvLyBFbmFibGVkIG9ubHkgd2hlbiB0eXBpbmcuXG5cdFx0XHRpZiAoICFpc1R5cGluZyggZWRpdG9yICkgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCAhc2VsZWN0aW9uQXR0cmlidXRlcyApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRlZGl0b3IubW9kZWwuY2hhbmdlKCB3cml0ZXIgPT4ge1xuXHRcdFx0XHRmb3IgKCBjb25zdCBbIGF0dHJpYnV0ZSwgdmFsdWUgXSBvZiBzZWxlY3Rpb25BdHRyaWJ1dGVzICkge1xuXHRcdFx0XHRcdHdyaXRlci5zZXRBdHRyaWJ1dGUoIGF0dHJpYnV0ZSwgdmFsdWUsIGVsZW1lbnQgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXG5cdFx0XHRzZWxlY3Rpb25BdHRyaWJ1dGVzID0gbnVsbDtcblx0XHR9LCB7IHByaW9yaXR5OiAnaGlnaCcgfSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFN0YXJ0cyBsaXN0ZW5pbmcgdG8ge0BsaW5rIG1vZHVsZTplbmdpbmUvbW9kZWwvbW9kZWx+TW9kZWwjZGVsZXRlQ29udGVudH0gYW5kIGNoZWNrcyB3aGV0aGVyXG5cdCAqIHJlbW92aW5nIGEgY29udGVudCByaWdodCBhZnRlciB0aGUgXCJ0ZW1wbGF0ZVZhclwiIGF0dHJpYnV0ZS5cblx0ICpcblx0ICogSWYgc28sIHRoZSBzZWxlY3Rpb24gc2hvdWxkIG5vdCBwcmVzZXJ2ZSB0aGUgYHRlbXBsYXRlVmFyYCBhdHRyaWJ1dGUuIEhvd2V2ZXIsIGlmXG5cdCAqIHRoZSB7QGxpbmsgbW9kdWxlOnR5cGluZy90d29zdGVwY2FyZXRtb3ZlbWVudH5Ud29TdGVwQ2FyZXRNb3ZlbWVudH0gcGx1Z2luIGlzIGFjdGl2ZSBhbmRcblx0ICogdGhlIHNlbGVjdGlvbiBoYXMgdGhlIFwidGVtcGxhdGVWYXJcIiBhdHRyaWJ1dGUgZHVlIHRvIG92ZXJyaWRlbiBncmF2aXR5IChhdCB0aGUgZW5kKSwgdGhlIGB0ZW1wbGF0ZVZhcmAgYXR0cmlidXRlIHNob3VsZCBzdGF5IHVudG91Y2hlZC5cblx0ICpcblx0ICogVGhlIHB1cnBvc2Ugb2YgdGhpcyBhY3Rpb24gaXMgdG8gYWxsb3cgcmVtb3ZpbmcgdGhlIGxpbmsgdGV4dCBhbmQga2VlcCB0aGUgc2VsZWN0aW9uIG91dHNpZGUgdGhlIGxpbmsuXG5cdCAqXG5cdCAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vY2tlZGl0b3IvY2tlZGl0b3I1L2lzc3Vlcy83NTIxLlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X2hhbmRsZURlbGV0ZUNvbnRlbnRBZnRlckxpbmsoKSB7XG5cdFx0Y29uc3QgZWRpdG9yID0gdGhpcy5lZGl0b3I7XG5cdFx0Y29uc3QgbW9kZWwgPSBlZGl0b3IubW9kZWw7XG5cdFx0Y29uc3Qgc2VsZWN0aW9uID0gbW9kZWwuZG9jdW1lbnQuc2VsZWN0aW9uO1xuXHRcdGNvbnN0IHZpZXcgPSBlZGl0b3IuZWRpdGluZy52aWV3O1xuXHRcdGNvbnN0IGxpbmtDb21tYW5kID0gZWRpdG9yLmNvbW1hbmRzLmdldCggJ3RlbXBsYXRlJyApO1xuXG5cdFx0Ly8gQSBmbGFnIHdoZXRoZXIgYXR0cmlidXRlcyBgdGVtcGxhdGVWYXJgIGF0dHJpYnV0ZSBzaG91bGQgYmUgcHJlc2VydmVkLlxuXHRcdGxldCBzaG91bGRQcmVzZXJ2ZUF0dHJpYnV0ZXMgPSBmYWxzZTtcblxuXHRcdC8vIEEgZmxhZyB3aGV0aGVyIHRoZSBgQmFja3NwYWNlYCBrZXkgd2FzIHByZXNzZWQuXG5cdFx0bGV0IGhhc0JhY2tzcGFjZVByZXNzZWQgPSBmYWxzZTtcblxuXHRcdC8vIERldGVjdCBwcmVzc2luZyBgQmFja3NwYWNlYC5cblx0XHR0aGlzLmxpc3RlblRvKCB2aWV3LmRvY3VtZW50LCAnZGVsZXRlJywgKCBldnQsIGRhdGEgKSA9PiB7XG5cdFx0XHRoYXNCYWNrc3BhY2VQcmVzc2VkID0gZGF0YS5kb21FdmVudC5rZXlDb2RlID09PSBrZXlDb2Rlcy5iYWNrc3BhY2U7XG5cdFx0fSwgeyBwcmlvcml0eTogJ2hpZ2gnIH0gKTtcblxuXHRcdC8vIEJlZm9yZSByZW1vdmluZyB0aGUgY29udGVudCwgY2hlY2sgd2hldGhlciB0aGUgc2VsZWN0aW9uIGlzIGluc2lkZSBhIGxpbmsgb3IgYXQgdGhlIGVuZCBvZiBsaW5rIGJ1dCB3aXRoIDItU0NNIGVuYWJsZWQuXG5cdFx0Ly8gSWYgc28sIHdlIHdhbnQgdG8gcHJlc2VydmUgbGluayBhdHRyaWJ1dGVzLlxuXHRcdHRoaXMubGlzdGVuVG8oIG1vZGVsLCAnZGVsZXRlQ29udGVudCcsICgpID0+IHtcblx0XHRcdC8vIFJlc2V0IHRoZSBzdGF0ZS5cblx0XHRcdHNob3VsZFByZXNlcnZlQXR0cmlidXRlcyA9IGZhbHNlO1xuXG5cdFx0XHRjb25zdCBwb3NpdGlvbiA9IHNlbGVjdGlvbi5nZXRGaXJzdFBvc2l0aW9uKCk7XG5cdFx0XHRjb25zdCB0ZW1wbGF0ZVZhciA9IHNlbGVjdGlvbi5nZXRBdHRyaWJ1dGUoICd0ZW1wbGF0ZVZhcicgKTtcblxuXHRcdFx0aWYgKCAhdGVtcGxhdGVWYXIgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgbGlua1JhbmdlID0gZmluZEF0dHJpYnV0ZVJhbmdlKCBwb3NpdGlvbiwgJ3RlbXBsYXRlVmFyJywgdGVtcGxhdGVWYXIsIG1vZGVsICk7XG5cblx0XHRcdC8vIFByZXNlcnZlIGB0ZW1wbGF0ZVZhcmAgYXR0cmlidXRlIGlmIHRoZSBzZWxlY3Rpb24gaXMgaW4gdGhlIG1pZGRsZSBvZiB0aGUgbGluayBvclxuXHRcdFx0Ly8gdGhlIHNlbGVjdGlvbiBpcyBhdCB0aGUgZW5kIG9mIHRoZSBsaW5rIGFuZCAyLVNDTSBpcyBhY3RpdmF0ZWQuXG5cdFx0XHRzaG91bGRQcmVzZXJ2ZUF0dHJpYnV0ZXMgPSBsaW5rUmFuZ2UuY29udGFpbnNQb3NpdGlvbiggcG9zaXRpb24gKSB8fCBsaW5rUmFuZ2UuZW5kLmlzRXF1YWwoIHBvc2l0aW9uICk7XG5cdFx0fSwgeyBwcmlvcml0eTogJ2hpZ2gnIH0gKTtcblxuXHRcdC8vIEFmdGVyIHJlbW92aW5nIHRoZSBjb250ZW50LCBjaGVjayB3aGV0aGVyIHRoZSBjdXJyZW50IHNlbGVjdGlvbiBzaG91bGQgcHJlc2VydmUgdGhlIGB0ZW1wbGF0ZVZhcmAgYXR0cmlidXRlLlxuXHRcdHRoaXMubGlzdGVuVG8oIG1vZGVsLCAnZGVsZXRlQ29udGVudCcsICgpID0+IHtcblx0XHRcdC8vIElmIGRpZG4ndCBwcmVzcyBgQmFja3NwYWNlYC5cblx0XHRcdGlmICggIWhhc0JhY2tzcGFjZVByZXNzZWQgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aGFzQmFja3NwYWNlUHJlc3NlZCA9IGZhbHNlO1xuXG5cdFx0XHQvLyBEaXNhYmxlIHRoZSBtZWNoYW5pc20gaWYgaW5zaWRlIGEgbGluayAoYDwkdGV4dCB1cmw9XCJmb29cIj5GW11vbzwvJHRleHQ+YCBvciA8JHRleHQgdXJsPVwiZm9vXCI+Rm9vW108LyR0ZXh0PmApLlxuXHRcdFx0aWYgKCBzaG91bGRQcmVzZXJ2ZUF0dHJpYnV0ZXMgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gVXNlIGBtb2RlbC5lbnF1ZXVlQ2hhbmdlKClgIGluIG9yZGVyIHRvIGV4ZWN1dGUgdGhlIGNhbGxiYWNrIGF0IHRoZSBlbmQgb2YgdGhlIGNoYW5nZXMgcHJvY2Vzcy5cblx0XHRcdGVkaXRvci5tb2RlbC5lbnF1ZXVlQ2hhbmdlKCB3cml0ZXIgPT4ge1xuXHRcdFx0XHRyZW1vdmVMaW5rQXR0cmlidXRlc0Zyb21TZWxlY3Rpb24oIHdyaXRlciwgbGlua0NvbW1hbmQubWFudWFsRGVjb3JhdG9ycyApO1xuXHRcdFx0fSApO1xuXHRcdH0sIHsgcHJpb3JpdHk6ICdsb3cnIH0gKTtcblx0fVxufVxuXG4vLyBNYWtlIHRoZSBzZWxlY3Rpb24gZnJlZSBvZiBsaW5rLXJlbGF0ZWQgbW9kZWwgYXR0cmlidXRlcy5cbi8vIEFsbCBsaW5rLXJlbGF0ZWQgbW9kZWwgYXR0cmlidXRlcyBzdGFydCB3aXRoIFwibGlua1wiLiBUaGF0IGluY2x1ZGVzIG5vdCBvbmx5IFwidGVtcGxhdGVWYXJcIlxuLy8gYnV0IGFsc28gYWxsIGRlY29yYXRvciBhdHRyaWJ1dGVzICh0aGV5IGhhdmUgZHluYW1pYyBuYW1lcykuXG4vL1xuLy8gQHBhcmFtIHttb2R1bGU6ZW5naW5lL21vZGVsL3dyaXRlcn5Xcml0ZXJ9IHdyaXRlclxuLy8gQHBhcmFtIHttb2R1bGU6dXRpbHMvY29sbGVjdGlvbn5Db2xsZWN0aW9ufSBtYW51YWxEZWNvcmF0b3JzXG5mdW5jdGlvbiByZW1vdmVMaW5rQXR0cmlidXRlc0Zyb21TZWxlY3Rpb24oIHdyaXRlciwgbWFudWFsRGVjb3JhdG9ycyApIHtcblx0d3JpdGVyLnJlbW92ZVNlbGVjdGlvbkF0dHJpYnV0ZSggJ3RlbXBsYXRlVmFyJyApO1xuXG5cdGZvciAoIGNvbnN0IGRlY29yYXRvciBvZiBtYW51YWxEZWNvcmF0b3JzICkge1xuXHRcdHdyaXRlci5yZW1vdmVTZWxlY3Rpb25BdHRyaWJ1dGUoIGRlY29yYXRvci5pZCApO1xuXHR9XG59XG5cbi8vIENoZWNrcyB3aGV0aGVyIHNlbGVjdGlvbidzIGF0dHJpYnV0ZXMgc2hvdWxkIGJlIGNvcGllZCB0byB0aGUgbmV3IGluc2VydGVkIHRleHQuXG4vL1xuLy8gQHBhcmFtIHttb2R1bGU6ZW5naW5lL21vZGVsL21vZGVsfk1vZGVsfSBtb2RlbFxuLy8gQHJldHVybnMge0Jvb2xlYW59XG5mdW5jdGlvbiBzaG91bGRDb3B5QXR0cmlidXRlcyggbW9kZWwgKSB7XG5cdGNvbnN0IHNlbGVjdGlvbiA9IG1vZGVsLmRvY3VtZW50LnNlbGVjdGlvbjtcblx0Y29uc3QgZmlyc3RQb3NpdGlvbiA9IHNlbGVjdGlvbi5nZXRGaXJzdFBvc2l0aW9uKCk7XG5cdGNvbnN0IGxhc3RQb3NpdGlvbiA9IHNlbGVjdGlvbi5nZXRMYXN0UG9zaXRpb24oKTtcblx0Y29uc3Qgbm9kZUF0Rmlyc3RQb3NpdGlvbiA9IGZpcnN0UG9zaXRpb24ubm9kZUFmdGVyO1xuXG5cdC8vIFRoZSB0ZXh0IGxpbmsgbm9kZSBkb2VzIG5vdCBleGlzdC4uLlxuXHRpZiAoICFub2RlQXRGaXJzdFBvc2l0aW9uICkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIC4uLm9yIGl0IGlzbid0IHRoZSB0ZXh0IG5vZGUuLi5cblx0aWYgKCAhbm9kZUF0Rmlyc3RQb3NpdGlvbi5pcyggJyR0ZXh0JyApICkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIC4uLm9yIGlzbid0IHRoZSBsaW5rLlxuXHRpZiAoICFub2RlQXRGaXJzdFBvc2l0aW9uLmhhc0F0dHJpYnV0ZSggJ3RlbXBsYXRlVmFyJyApICkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIGB0ZXh0Tm9kZWAgPSB0aGUgcG9zaXRpb24gaXMgaW5zaWRlIHRoZSBsaW5rIGVsZW1lbnQuXG5cdC8vIGBub2RlQmVmb3JlYCA9IHRoZSBwb3NpdGlvbiBpcyBhdCB0aGUgZW5kIG9mIHRoZSBsaW5rIGVsZW1lbnQuXG5cdGNvbnN0IG5vZGVBdExhc3RQb3NpdGlvbiA9IGxhc3RQb3NpdGlvbi50ZXh0Tm9kZSB8fCBsYXN0UG9zaXRpb24ubm9kZUJlZm9yZTtcblxuXHQvLyBJZiBib3RoIHJlZmVyZW5jZXMgdGhlIHNhbWUgbm9kZSBzZWxlY3Rpb24gY29udGFpbnMgYSBzaW5nbGUgdGV4dCBub2RlLlxuXHRpZiAoIG5vZGVBdEZpcnN0UG9zaXRpb24gPT09IG5vZGVBdExhc3RQb3NpdGlvbiApIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdC8vIElmIG5vZGVzIGFyZSBub3QgZXF1YWwsIG1heWJlIHRoZSBsaW5rIG5vZGVzIGhhcyBkZWZpbmVkIGFkZGl0aW9uYWwgYXR0cmlidXRlcyBpbnNpZGUuXG5cdC8vIEZpcnN0LCB3ZSBuZWVkIHRvIGZpbmQgdGhlIGVudGlyZSBsaW5rIHJhbmdlLlxuXHRjb25zdCBsaW5rUmFuZ2UgPSBmaW5kQXR0cmlidXRlUmFuZ2UoIGZpcnN0UG9zaXRpb24sICd0ZW1wbGF0ZVZhcicsIG5vZGVBdEZpcnN0UG9zaXRpb24uZ2V0QXR0cmlidXRlKCAndGVtcGxhdGVWYXInICksIG1vZGVsICk7XG5cblx0Ly8gVGhlbiB3ZSBjYW4gY2hlY2sgd2hldGhlciBzZWxlY3RlZCByYW5nZSBpcyBpbnNpZGUgdGhlIGZvdW5kIGxpbmsgcmFuZ2UuIElmIHNvLCBhdHRyaWJ1dGVzIHNob3VsZCBiZSBwcmVzZXJ2ZWQuXG5cdHJldHVybiBsaW5rUmFuZ2UuY29udGFpbnNSYW5nZSggbW9kZWwuY3JlYXRlUmFuZ2UoIGZpcnN0UG9zaXRpb24sIGxhc3RQb3NpdGlvbiApLCB0cnVlICk7XG59XG5cbi8vIENoZWNrcyB3aGV0aGVyIHByb3ZpZGVkIGNoYW5nZXMgd2VyZSBjYXVzZWQgYnkgdHlwaW5nLlxuLy9cbi8vIEBwYXJhbXMge21vZHVsZTpjb3JlL2VkaXRvci9lZGl0b3J+RWRpdG9yfSBlZGl0b3Jcbi8vIEByZXR1cm5zIHtCb29sZWFufVxuZnVuY3Rpb24gaXNUeXBpbmcoIGVkaXRvciApIHtcblx0Y29uc3QgaW5wdXQgPSBlZGl0b3IucGx1Z2lucy5nZXQoICdJbnB1dCcgKTtcblxuXHRyZXR1cm4gaW5wdXQuaXNJbnB1dCggZWRpdG9yLm1vZGVsLmNoYW5nZSggd3JpdGVyID0+IHdyaXRlci5iYXRjaCApICk7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlIENvcHlyaWdodCAoYykgMjAwMy0yMDIxLCBDS1NvdXJjZSAtIEZyZWRlcmljbyBLbmFiYmVuLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogRm9yIGxpY2Vuc2luZywgc2VlIExJQ0VOU0UubWQgb3IgaHR0cHM6Ly9ja2VkaXRvci5jb20vbGVnYWwvY2tlZGl0b3Itb3NzLWxpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGluay9saW5rdWlcbiAqL1xuXG5pbXBvcnQgIFBsdWdpbiAgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1jb3JlL3NyYy9wbHVnaW4nO1xuaW1wb3J0ICBDbGlja09ic2VydmVyICBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWVuZ2luZS9zcmMvdmlldy9vYnNlcnZlci9jbGlja29ic2VydmVyJztcbmltcG9ydCB7IEJ1dHRvblZpZXcsIENvbnRleHR1YWxCYWxsb29uLCBjbGlja091dHNpZGVIYW5kbGVyICxCYWxsb29uUGFuZWxWaWV3fSBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LXVpL3NyYyc7XG5cbmltcG9ydCBUZW1wbGF0ZUZvcm1WaWV3IGZyb20gJy4vdWkvdGVtcGxhdGUtZm9ybS12aWV3JztcbmltcG9ydCBUZW1wbGF0ZUFjdGlvbnNWaWV3IGZyb20gJy4vdWkvdGVtcGxhdGUtYWN0aW9ucy12aWV3JztcbmltcG9ydCBUZW1wbGF0ZVNhdmVWaWV3IGZyb20gJy4vdWkvdGVtcGxhdGUtc2F2ZS12aWV3JztcbmltcG9ydCB7ICBpc0xpbmtFbGVtZW50LCBURU1QTEFURV9LRVlTVFJPS0UgLCBTQVZFX0tFWVNUUk9LRSB9IGZyb20gJy4vdXRpbHMnO1xuXG5pbXBvcnQgVGVtbGF0ZUljb24gZnJvbSAnLi4vdGhlbWUvaWNvbnMvdGVtbGF0ZUljb24uc3ZnJztcbmltcG9ydCBTYXZlVGVtcGxhdGUgZnJvbSAnLi4vdGhlbWUvaWNvbnMvZmlsZS1leHBvcnQtc29saWQuc3ZnJztcbmNvbnN0IFZJU1VBTF9TRUxFQ1RJT05fTUFSS0VSX05BTUUgPSAndGVtcGxhdGUtdWknO1xuXG4vKipcbiAqIFRoZSBsaW5rIFVJIHBsdWdpbi4gSXQgaW50cm9kdWNlcyB0aGUgYCd0ZW1wbGF0ZSdgIGFuZCBgJ2NhbmNlbHRlbXBsYXRlJ2AgYnV0dG9ucyBhbmQgc3VwcG9ydCBmb3IgdGhlIDxrYmQ+Q3RybCtLPC9rYmQ+IGtleXN0cm9rZS5cbiAqXG4gKiBJdCB1c2VzIHRoZVxuICoge0BsaW5rIG1vZHVsZTp1aS9wYW5lbC9iYWxsb29uL2NvbnRleHR1YWxiYWxsb29ufkNvbnRleHR1YWxCYWxsb29uIGNvbnRleHR1YWwgYmFsbG9vbiBwbHVnaW59LlxuICpcbiAqIEBleHRlbmRzIG1vZHVsZTpjb3JlL3BsdWdpbn5QbHVnaW5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVtcGxhdGVVaSBleHRlbmRzIFBsdWdpbiB7XG5cdC8qKlxuXHQgKiBAaW5oZXJpdERvY1xuXHQgKi9cblx0c3RhdGljIGdldCByZXF1aXJlcygpIHtcblx0XHRyZXR1cm4gWyBDb250ZXh0dWFsQmFsbG9vbiAsQmFsbG9vblBhbmVsVmlld107XG5cdH1cblxuXHQvKipcblx0ICogQGluaGVyaXREb2Ncblx0ICovXG5cdHN0YXRpYyBnZXQgcGx1Z2luTmFtZSgpIHtcblx0XHRyZXR1cm4gJ1RleHRUZW1wbGF0ZVVJJztcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5oZXJpdERvY1xuXHQgKi9cblx0aW5pdCgpIHtcblx0XHRjb25zdCBlZGl0b3IgPSB0aGlzLmVkaXRvcjtcblxuXHRcdGVkaXRvci5lZGl0aW5nLnZpZXcuYWRkT2JzZXJ2ZXIoIENsaWNrT2JzZXJ2ZXIgKTtcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBhY3Rpb25zIHZpZXcgZGlzcGxheWVkIGluc2lkZSBvZiB0aGUgYmFsbG9vbi5cblx0XHQgKlxuXHRcdCAqIEBtZW1iZXIge21vZHVsZTpsaW5rL3VpL2xpbmthY3Rpb25zdmlld35UZW1wbGF0ZUFjdGlvbnNWaWV3fVxuXHRcdCAqL1xuXHRcdHRoaXMuYWN0aW9uc1ZpZXcgPSB0aGlzLl9jcmVhdGVBY3Rpb25zVmlldygpO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBhY3Rpb25zIHZpZXcgZGlzcGxheWVkIGluc2lkZSBvZiB0aGUgYmFsbG9vbi5cblx0XHQgKlxuXHRcdCAqIEBtZW1iZXIge21vZHVsZTpsaW5rL3VpL2xpbmthY3Rpb25zdmlld35UZW1wbGF0ZUFjdGlvbnNWaWV3fVxuXHRcdCAqL1xuXHRcdHRoaXMuc2F2ZVZpZXcgPSB0aGlzLl9jcmVhdGVTYXZlVmlldygpO1xuXG5cdFx0LyoqXG5cdFx0ICogVGhlIGZvcm0gdmlldyBkaXNwbGF5ZWQgaW5zaWRlIHRoZSBiYWxsb29uLlxuXHRcdCAqXG5cdFx0ICogQG1lbWJlciB7bW9kdWxlOmxpbmsvdWkvbGlua2Zvcm12aWV3fkxpbmtGb3JtVmlld31cblx0XHQgKi9cblx0XHR0aGlzLmZvcm1WaWV3ID0gdGhpcy5fY3JlYXRlRm9ybVZpZXcoKTtcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBjb250ZXh0dWFsIGJhbGxvb24gcGx1Z2luIGluc3RhbmNlLlxuXHRcdCAqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKiBAbWVtYmVyIHttb2R1bGU6dWkvcGFuZWwvYmFsbG9vbi9jb250ZXh0dWFsYmFsbG9vbn5Db250ZXh0dWFsQmFsbG9vbn1cblx0XHQgKi9cblx0XHR0aGlzLl9iYWxsb29uID0gZWRpdG9yLnBsdWdpbnMuZ2V0KCBDb250ZXh0dWFsQmFsbG9vbiApO1xuXHRcdHRoaXMuX3BhbmVsID0gZWRpdG9yLnBsdWdpbnMuZ2V0KCBCYWxsb29uUGFuZWxWaWV3ICk7XG5cblx0XHQvLyBDcmVhdGUgdG9vbGJhciBidXR0b25zLlxuXHRcdHRoaXMuX2NyZWF0ZVRvb2xiYXJMaW5rQnV0dG9uKCk7XG5cblx0XHQvLyBBdHRhY2ggbGlmZWN5Y2xlIGFjdGlvbnMgdG8gdGhlIHRoZSBiYWxsb29uLlxuXHRcdHRoaXMuX2VuYWJsZVVzZXJCYWxsb29uSW50ZXJhY3Rpb25zKCk7XG5cblx0XHQvLyBSZW5kZXJzIGEgZmFrZSB2aXN1YWwgc2VsZWN0aW9uIG1hcmtlciBvbiBhbiBleHBhbmRlZCBzZWxlY3Rpb24uXG5cdFx0ZWRpdG9yLmNvbnZlcnNpb24uZm9yKCAnZWRpdGluZ0Rvd25jYXN0JyApLm1hcmtlclRvSGlnaGxpZ2h0KCB7XG5cdFx0XHRtb2RlbDogVklTVUFMX1NFTEVDVElPTl9NQVJLRVJfTkFNRSxcblx0XHRcdHZpZXc6IHtcblx0XHRcdFx0Y2xhc3NlczogWyAnY2stZmFrZS1saW5rLXNlbGVjdGlvbicgXVxuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdC8vIFJlbmRlcnMgYSBmYWtlIHZpc3VhbCBzZWxlY3Rpb24gbWFya2VyIG9uIGEgY29sbGFwc2VkIHNlbGVjdGlvbi5cblx0XHRlZGl0b3IuY29udmVyc2lvbi5mb3IoICdlZGl0aW5nRG93bmNhc3QnICkubWFya2VyVG9FbGVtZW50KCB7XG5cdFx0XHRtb2RlbDogVklTVUFMX1NFTEVDVElPTl9NQVJLRVJfTkFNRSxcblx0XHRcdHZpZXc6IHtcblx0XHRcdFx0bmFtZTogJ3NwYW4nLFxuXHRcdFx0XHRjbGFzc2VzOiBbICdjay1mYWtlLWxpbmstc2VsZWN0aW9uJywgJ2NrLWZha2UtbGluay1zZWxlY3Rpb25fY29sbGFwc2VkJyBdXG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbmhlcml0RG9jXG5cdCAqL1xuXHRkZXN0cm95KCkge1xuXHRcdHN1cGVyLmRlc3Ryb3koKTtcblxuXHRcdC8vIERlc3Ryb3kgY3JlYXRlZCBVSSBjb21wb25lbnRzIGFzIHRoZXkgYXJlIG5vdCBhdXRvbWF0aWNhbGx5IGRlc3Ryb3llZCAoc2VlIGNrZWRpdG9yNSMxMzQxKS5cblx0XHR0aGlzLmZvcm1WaWV3LmRlc3Ryb3koKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIHRoZSB7QGxpbmsgbW9kdWxlOmxpbmsvdWkvbGlua2FjdGlvbnN2aWV3flRlbXBsYXRlQWN0aW9uc1ZpZXd9IGluc3RhbmNlLlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcmV0dXJucyB7bW9kdWxlOmxpbmsvdWkvbGlua2FjdGlvbnN2aWV3flRlbXBsYXRlQWN0aW9uc1ZpZXd9IFRoZSBsaW5rIGFjdGlvbnMgdmlldyBpbnN0YW5jZS5cblx0ICovXG5cdF9jcmVhdGVBY3Rpb25zVmlldygpIHtcblx0XHRjb25zdCBlZGl0b3IgPSB0aGlzLmVkaXRvcjtcblx0XHRjb25zdCBhY3Rpb25zVmlldyA9IG5ldyBUZW1wbGF0ZUFjdGlvbnNWaWV3KCBlZGl0b3IubG9jYWxlICk7XG5cdFx0Y29uc3QgdGVtcGxhdGVDb21tYW5kID0gZWRpdG9yLmNvbW1hbmRzLmdldCggJ3RlbXBsYXRlJyApO1xuXHRcdGNvbnN0IGNhbmNlbFRlbXBsYXRlQ29tbWFuZCA9IGVkaXRvci5jb21tYW5kcy5nZXQoICdjYW5jZWx0ZW1wbGF0ZScgKTtcblxuXHRcdGFjdGlvbnNWaWV3LmJpbmQoICdkYXRhLXRlbXBsYXRlLXZhcicgKS50byggdGVtcGxhdGVDb21tYW5kLCAndmFsdWUnICk7XG5cdFx0YWN0aW9uc1ZpZXcuZWRpdEJ1dHRvblZpZXcuYmluZCggJ2lzRW5hYmxlZCcgKS50byggdGVtcGxhdGVDb21tYW5kICk7XG5cdFx0YWN0aW9uc1ZpZXcudW5saW5rQnV0dG9uVmlldy5iaW5kKCAnaXNFbmFibGVkJyApLnRvKCBjYW5jZWxUZW1wbGF0ZUNvbW1hbmQgKTtcblxuXHRcdC8vIEV4ZWN1dGUgdW5saW5rIGNvbW1hbmQgYWZ0ZXIgY2xpY2tpbmcgb24gdGhlIFwiRWRpdFwiIGJ1dHRvbi5cblx0XHR0aGlzLmxpc3RlblRvKCBhY3Rpb25zVmlldywgJ2VkaXQnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLl9hZGRGb3JtVmlldygpO1xuXHRcdH0gKTtcblxuXHRcdC8vIEV4ZWN1dGUgdW5saW5rIGNvbW1hbmQgYWZ0ZXIgY2xpY2tpbmcgb24gdGhlIFwiVW5saW5rXCIgYnV0dG9uLlxuXHRcdHRoaXMubGlzdGVuVG8oIGFjdGlvbnNWaWV3LCAnY2FuY2VsdGVtcGxhdGUnLCAoKSA9PiB7XG5cdFx0XHRlZGl0b3IuZXhlY3V0ZSggJ2NhbmNlbHRlbXBsYXRlJyApO1xuXHRcdFx0dGhpcy5faGlkZVVJKCk7XG5cdFx0fSApO1xuXG5cdFx0Ly8gQ2xvc2UgdGhlIHBhbmVsIG9uIGVzYyBrZXkgcHJlc3Mgd2hlbiB0aGUgKiphY3Rpb25zIGhhdmUgZm9jdXMqKi5cblx0XHRhY3Rpb25zVmlldy5rZXlzdHJva2VzLnNldCggJ0VzYycsICggZGF0YSwgY2FuY2VsICkgPT4ge1xuXHRcdFx0dGhpcy5faGlkZVVJKCk7XG5cdFx0XHRjYW5jZWwoKTtcblx0XHR9ICk7XG5cblx0XHQvLyBPcGVuIHRoZSBmb3JtIHZpZXcgb24gQ3RybCtLIHdoZW4gdGhlICoqYWN0aW9ucyBoYXZlIGZvY3VzKiouLlxuXHRcdGFjdGlvbnNWaWV3LmtleXN0cm9rZXMuc2V0KCBURU1QTEFURV9LRVlTVFJPS0UsICggZGF0YSwgY2FuY2VsICkgPT4ge1xuXHRcdFx0dGhpcy5fYWRkRm9ybVZpZXcoKTtcblx0XHRcdGNhbmNlbCgpO1xuXHRcdH0gKTtcblxuXHRcdHJldHVybiBhY3Rpb25zVmlldztcblx0fVxuXG5cdF9jcmVhdGVTYXZlVmlldygpIHtcblx0XHRjb25zdCBlZGl0b3IgPSB0aGlzLmVkaXRvcjtcblx0XHRjb25zdCBhY3Rpb25zVmlldyA9IG5ldyBUZW1wbGF0ZVNhdmVWaWV3KCBlZGl0b3IubG9jYWxlICk7XG5cblx0XHQvLyBFeGVjdXRlIHVubGluayBjb21tYW5kIGFmdGVyIGNsaWNraW5nIG9uIHRoZSBcIkVkaXRcIiBidXR0b24uXG5cdFx0dGhpcy5saXN0ZW5UbyggYWN0aW9uc1ZpZXcsICdzYXZlJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5fYWRkRm9ybVZpZXcoKTtcblx0XHR9ICk7XG5cblx0XHQvLyBFeGVjdXRlIHVubGluayBjb21tYW5kIGFmdGVyIGNsaWNraW5nIG9uIHRoZSBcIlVubGlua1wiIGJ1dHRvbi5cblx0XHR0aGlzLmxpc3RlblRvKCBhY3Rpb25zVmlldywgJ2NhbmNlbHRlbXBsYXRlJywgKCkgPT4ge1xuXHRcdFx0ZWRpdG9yLmV4ZWN1dGUoICdjYW5jZWx0ZW1wbGF0ZScgKTtcblx0XHRcdHRoaXMuX2hpZGVVSSgpO1xuXHRcdH0gKTtcblxuXHRcdC8vIENsb3NlIHRoZSBwYW5lbCBvbiBlc2Mga2V5IHByZXNzIHdoZW4gdGhlICoqYWN0aW9ucyBoYXZlIGZvY3VzKiouXG5cdFx0YWN0aW9uc1ZpZXcua2V5c3Ryb2tlcy5zZXQoICdFc2MnLCAoIGRhdGEsIGNhbmNlbCApID0+IHtcblx0XHRcdHRoaXMuX2hpZGVVSSgpO1xuXHRcdFx0Y2FuY2VsKCk7XG5cdFx0fSApO1xuXG5cblxuXHRcdHJldHVybiBhY3Rpb25zVmlldztcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIHRoZSB7QGxpbmsgbW9kdWxlOmxpbmsvdWkvbGlua2Zvcm12aWV3fkxpbmtGb3JtVmlld30gaW5zdGFuY2UuXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEByZXR1cm5zIHttb2R1bGU6bGluay91aS9saW5rZm9ybXZpZXd+TGlua0Zvcm1WaWV3fSBUaGUgbGluayBmb3JtIHZpZXcgaW5zdGFuY2UuXG5cdCAqL1xuXHRfY3JlYXRlRm9ybVZpZXcoKSB7XG5cdFx0Y29uc3QgZWRpdG9yID0gdGhpcy5lZGl0b3I7XG5cdFx0Y29uc3QgdGVtcGxhdGVDb21tYW5kID0gZWRpdG9yLmNvbW1hbmRzLmdldCggJ3RlbXBsYXRlJyApO1xuXG5cdFx0Y29uc3QgZm9ybVZpZXcgPSBuZXcgVGVtcGxhdGVGb3JtVmlldyggZWRpdG9yLmxvY2FsZSwgdGVtcGxhdGVDb21tYW5kICk7XG5cblx0XHRmb3JtVmlldy5sYWJlbElucHV0Vmlldy5maWVsZFZpZXcuYmluZCggJ3ZhbHVlJyApLnRvKCB0ZW1wbGF0ZUNvbW1hbmQsICd2YWx1ZScgKTtcblxuXHRcdC8vIEZvcm0gZWxlbWVudHMgc2hvdWxkIGJlIHJlYWQtb25seSB3aGVuIGNvcnJlc3BvbmRpbmcgY29tbWFuZHMgYXJlIGRpc2FibGVkLlxuXHRcdGZvcm1WaWV3LmxhYmVsSW5wdXRWaWV3LmJpbmQoICdpc1JlYWRPbmx5JyApLnRvKCB0ZW1wbGF0ZUNvbW1hbmQsICdpc0VuYWJsZWQnLCB2YWx1ZSA9PiAhdmFsdWUgKTtcblxuXHRcdGZvcm1WaWV3LnNhdmVCdXR0b25WaWV3LmJpbmQoICdpc0VuYWJsZWQnICkudG8oIHRlbXBsYXRlQ29tbWFuZCApO1xuXG5cdFx0Ly8gRXhlY3V0ZSBsaW5rIGNvbW1hbmQgYWZ0ZXIgY2xpY2tpbmcgdGhlIFwiU2F2ZVwiIGJ1dHRvbi5cblx0XHR0aGlzLmxpc3RlblRvKCBmb3JtVmlldywgJ3N1Ym1pdCcsICgpID0+IHtcblx0XHRcdGNvbnN0IHtsYWJlbH0gID0gZm9ybVZpZXcudHlwZUlucHV0Vmlldy5maWVsZFZpZXcuYnV0dG9uVmlldztcblx0XHRcdGNvbnN0IHRlbXBsYXRlVmFyID0ge1xuXHRcdFx0XHRpZCA6IGZvcm1WaWV3LmxhYmVsSW5wdXRWaWV3LmZpZWxkVmlldy5lbGVtZW50LnZhbHVlLFxuXHRcdFx0XHR0eXBlIDogbGFiZWxcblx0XHRcdH1cblx0XHRcdC8vIGNvbnN0IHsgdmFsdWUgfSA9IGZvcm1WaWV3LmxhYmVsSW5wdXRWaWV3LmZpZWxkVmlldy5lbGVtZW50O1xuXHRcdFx0Ly8gY29uc3QgcGFyc2VkVXJsID0gYWRkTGlua1Byb3RvY29sSWZBcHBsaWNhYmxlKCB2YWx1ZSwgZGVmYXVsdFByb3RvY29sICk7XG5cdFx0XHRlZGl0b3IuZXhlY3V0ZSggJ3RlbXBsYXRlJywgdGVtcGxhdGVWYXIsIGZvcm1WaWV3LmdldERlY29yYXRvclN3aXRjaGVzU3RhdGUoKSApO1xuXHRcdFx0dGhpcy5fY2xvc2VGb3JtVmlldygpO1xuXHRcdH0gKTtcblxuXHRcdC8vIEhpZGUgdGhlIHBhbmVsIGFmdGVyIGNsaWNraW5nIHRoZSBcIkNhbmNlbFwiIGJ1dHRvbi5cblx0XHR0aGlzLmxpc3RlblRvKCBmb3JtVmlldywgJ2NhbmNlbCcsICgpID0+IHtcblx0XHRcdHRoaXMuX2Nsb3NlRm9ybVZpZXcoKTtcblx0XHR9ICk7XG5cblx0XHQvLyBDbG9zZSB0aGUgcGFuZWwgb24gZXNjIGtleSBwcmVzcyB3aGVuIHRoZSAqKmZvcm0gaGFzIGZvY3VzKiouXG5cdFx0Zm9ybVZpZXcua2V5c3Ryb2tlcy5zZXQoICdFc2MnLCAoIGRhdGEsIGNhbmNlbCApID0+IHtcblx0XHRcdHRoaXMuX2Nsb3NlRm9ybVZpZXcoKTtcblx0XHRcdGNhbmNlbCgpO1xuXHRcdH0gKTtcblxuXHRcdHJldHVybiBmb3JtVmlldztcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgdG9vbGJhciBUZW1wbGF0ZSBidXR0b24uIENsaWNraW5nIHRoaXMgYnV0dG9uIHdpbGwgc2hvd1xuXHQgKiBhIHtAbGluayAjX2JhbGxvb259IGF0dGFjaGVkIHRvIHRoZSBzZWxlY3Rpb24uXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfY3JlYXRlVG9vbGJhckxpbmtCdXR0b24oKSB7XG5cdFx0Y29uc3QgZWRpdG9yID0gdGhpcy5lZGl0b3I7XG5cdFx0Y29uc3QgdGVtcGxhdGVDb21tYW5kID0gZWRpdG9yLmNvbW1hbmRzLmdldCggJ3RlbXBsYXRlJyApO1xuXHRcdGNvbnN0IHQgPSBlZGl0b3IudDtcblxuXHRcdC8vIEhhbmRsZSB0aGUgYEN0cmwrS2Aga2V5c3Ryb2tlIGFuZCBzaG93IHRoZSBwYW5lbC5cblx0XHRlZGl0b3Iua2V5c3Ryb2tlcy5zZXQoIFRFTVBMQVRFX0tFWVNUUk9LRSwgKCBrZXlFdnREYXRhLCBjYW5jZWwgKSA9PiB7XG5cdFx0XHQvLyBQcmV2ZW50IGZvY3VzaW5nIHRoZSBzZWFyY2ggYmFyIGluIEZGLCBDaHJvbWUgYW5kIEVkZ2UuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vY2tlZGl0b3IvY2tlZGl0b3I1L2lzc3Vlcy80ODExLlxuXHRcdFx0Y2FuY2VsKCk7XG5cblx0XHRcdGlmICggdGVtcGxhdGVDb21tYW5kLmlzRW5hYmxlZCApIHtcblx0XHRcdFx0dGhpcy5fc2hvd1VJKCB0cnVlICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0ZWRpdG9yLnVpLmNvbXBvbmVudEZhY3RvcnkuYWRkKCAndGVtcGxhdGUnLCBsb2NhbGUgPT4ge1xuXHRcdFx0Y29uc3QgYnV0dG9uID0gbmV3IEJ1dHRvblZpZXcoIGxvY2FsZSApO1xuXG5cdFx0XHRidXR0b24uaXNFbmFibGVkID0gdHJ1ZTtcblx0XHRcdGJ1dHRvbi5sYWJlbCA9IHQoICdWYXIgRGVmaW5lJyApO1xuXHRcdFx0YnV0dG9uLmljb24gPSBUZW1sYXRlSWNvbjtcblx0XHRcdGJ1dHRvbi5rZXlzdHJva2UgPSBURU1QTEFURV9LRVlTVFJPS0U7XG5cdFx0XHRidXR0b24udG9vbHRpcCA9IHRydWU7XG5cdFx0XHRidXR0b24uaXNUb2dnbGVhYmxlID0gdHJ1ZTtcblxuXHRcdFx0Ly8gQmluZCBidXR0b24gdG8gdGhlIGNvbW1hbmQuXG5cdFx0XHRidXR0b24uYmluZCggJ2lzRW5hYmxlZCcgKS50byggdGVtcGxhdGVDb21tYW5kLCAnaXNFbmFibGVkJyApO1xuXHRcdFx0YnV0dG9uLmJpbmQoICdpc09uJyApLnRvKCB0ZW1wbGF0ZUNvbW1hbmQsICd2YWx1ZScsIHZhbHVlID0+ICEhdmFsdWUgKTtcblxuXHRcdFx0Ly8gU2hvdyB0aGUgcGFuZWwgb24gYnV0dG9uIGNsaWNrLlxuXHRcdFx0dGhpcy5saXN0ZW5UbyggYnV0dG9uLCAnZXhlY3V0ZScsICgpID0+IHRoaXMuX3Nob3dVSSggdHJ1ZSApICk7XG5cblx0XHRcdHJldHVybiBidXR0b247XG5cdFx0fSApO1xuXHRcdGVkaXRvci51aS5jb21wb25lbnRGYWN0b3J5LmFkZCggJ3RlbXBsYXRlLXNhdmUnLCBsb2NhbGUgPT4ge1xuXHRcdFx0Y29uc3QgYnV0dG9uID0gbmV3IEJ1dHRvblZpZXcoIGxvY2FsZSApO1xuXG5cdFx0XHRidXR0b24uaXNFbmFibGVkID0gdHJ1ZTtcblx0XHRcdGJ1dHRvbi5sYWJlbCA9IHQoICdTYXZlIFRlbXBsYXRlJyApO1xuXHRcdFx0YnV0dG9uLmljb24gPSBTYXZlVGVtcGxhdGU7XG5cdFx0XHRidXR0b24udG9vbHRpcCA9IHRydWU7XG5cdFx0XHRidXR0b24uaXNUb2dnbGVhYmxlID0gdHJ1ZTtcblxuXHRcdFx0Ly8gQmluZCBidXR0b24gdG8gdGhlIGNvbW1hbmQuXG5cdFx0XHRidXR0b24uYmluZCggJ2lzRW5hYmxlZCcgKS50byggdGVtcGxhdGVDb21tYW5kLCAnaXNFbmFibGVkJyApO1xuXHRcdFx0YnV0dG9uLmJpbmQoICdpc09uJyApLnRvKCB0ZW1wbGF0ZUNvbW1hbmQsICd2YWx1ZScsIHZhbHVlID0+ICEhdmFsdWUgKTtcblxuXHRcdFx0Ly8gU2hvdyB0aGUgcGFuZWwgb24gYnV0dG9uIGNsaWNrLlxuXHRcdFx0dGhpcy5saXN0ZW5UbyggYnV0dG9uLCAnZXhlY3V0ZScsICgpID0+IHRoaXMuX2FkZFNhdmVWaWV3KCApICk7XG5cblx0XHRcdHJldHVybiBidXR0b247XG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEF0dGFjaGVzIGFjdGlvbnMgdGhhdCBjb250cm9sIHdoZXRoZXIgdGhlIGJhbGxvb24gcGFuZWwgY29udGFpbmluZyB0aGVcblx0ICoge0BsaW5rICNmb3JtVmlld30gaXMgdmlzaWJsZSBvciBub3QuXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfZW5hYmxlVXNlckJhbGxvb25JbnRlcmFjdGlvbnMoKSB7XG5cdFx0Y29uc3Qgdmlld0RvY3VtZW50ID0gdGhpcy5lZGl0b3IuZWRpdGluZy52aWV3LmRvY3VtZW50O1xuXG5cdFx0Ly8gSGFuZGxlIGNsaWNrIG9uIHZpZXcgZG9jdW1lbnQgYW5kIHNob3cgcGFuZWwgd2hlbiBzZWxlY3Rpb24gaXMgcGxhY2VkIGluc2lkZSB0aGUgbGluayBlbGVtZW50LlxuXHRcdC8vIEtlZXAgcGFuZWwgb3BlbiB1bnRpbCBzZWxlY3Rpb24gd2lsbCBiZSBpbnNpZGUgdGhlIHNhbWUgbGluayBlbGVtZW50LlxuXHRcdHRoaXMubGlzdGVuVG8oIHZpZXdEb2N1bWVudCwgJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0Y29uc3QgcGFyZW50TGluayA9IHRoaXMuX2dldFNlbGVjdGVkTGlua0VsZW1lbnQoKTtcblxuXHRcdFx0aWYgKCBwYXJlbnRMaW5rICkge1xuXHRcdFx0XHQvLyBUaGVuIHNob3cgcGFuZWwgYnV0IGtlZXAgZm9jdXMgaW5zaWRlIGVkaXRvciBlZGl0YWJsZS5cblx0XHRcdFx0dGhpcy5fc2hvd1VJKCk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0Ly8gRm9jdXMgdGhlIGZvcm0gaWYgdGhlIGJhbGxvb24gaXMgdmlzaWJsZSBhbmQgdGhlIFRhYiBrZXkgaGFzIGJlZW4gcHJlc3NlZC5cblx0XHR0aGlzLmVkaXRvci5rZXlzdHJva2VzLnNldCggJ1RhYicsICggZGF0YSwgY2FuY2VsICkgPT4ge1xuXHRcdFx0aWYgKCB0aGlzLl9hcmVBY3Rpb25zVmlzaWJsZSAmJiAhdGhpcy5hY3Rpb25zVmlldy5mb2N1c1RyYWNrZXIuaXNGb2N1c2VkICkge1xuXHRcdFx0XHR0aGlzLmFjdGlvbnNWaWV3LmZvY3VzKCk7XG5cdFx0XHRcdGNhbmNlbCgpO1xuXHRcdFx0fVxuXHRcdH0sIHtcblx0XHRcdC8vIFVzZSB0aGUgaGlnaCBwcmlvcml0eSBiZWNhdXNlIHRoZSBsaW5rIFVJIG5hdmlnYXRpb24gaXMgbW9yZSBpbXBvcnRhbnRcblx0XHRcdC8vIHRoYW4gb3RoZXIgZmVhdHVyZSdzIGFjdGlvbnMsIGUuZy4gbGlzdCBpbmRlbnRhdGlvbi5cblx0XHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ja2VkaXRvci9ja2VkaXRvcjUtbGluay9pc3N1ZXMvMTQ2XG5cdFx0XHRwcmlvcml0eTogJ2hpZ2gnXG5cdFx0fSApO1xuXG5cdFx0Ly8gQ2xvc2UgdGhlIHBhbmVsIG9uIHRoZSBFc2Mga2V5IHByZXNzIHdoZW4gdGhlIGVkaXRhYmxlIGhhcyBmb2N1cyBhbmQgdGhlIGJhbGxvb24gaXMgdmlzaWJsZS5cblx0XHR0aGlzLmVkaXRvci5rZXlzdHJva2VzLnNldCggJ0VzYycsICggZGF0YSwgY2FuY2VsICkgPT4ge1xuXHRcdFx0aWYgKCB0aGlzLl9pc1VJVmlzaWJsZSApIHtcblx0XHRcdFx0dGhpcy5faGlkZVVJKCk7XG5cdFx0XHRcdGNhbmNlbCgpO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdC8vIENsb3NlIG9uIGNsaWNrIG91dHNpZGUgb2YgYmFsbG9vbiBwYW5lbCBlbGVtZW50LlxuXHRcdGNsaWNrT3V0c2lkZUhhbmRsZXIoIHtcblx0XHRcdGVtaXR0ZXI6IHRoaXMuZm9ybVZpZXcsXG5cdFx0XHRhY3RpdmF0b3I6ICgpID0+IHRoaXMuX2lzVUlJblBhbmVsLFxuXHRcdFx0Y29udGV4dEVsZW1lbnRzOiBbIHRoaXMuX2JhbGxvb24udmlldy5lbGVtZW50IF0sXG5cdFx0XHRjYWxsYmFjazogKCkgPT4gdGhpcy5faGlkZVVJKClcblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogQWRkcyB0aGUge0BsaW5rICNhY3Rpb25zVmlld30gdG8gdGhlIHtAbGluayAjX2JhbGxvb259LlxuXHQgKlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHRfYWRkQWN0aW9uc1ZpZXcoKSB7XG5cdFx0aWYgKCB0aGlzLl9hcmVBY3Rpb25zSW5QYW5lbCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLl9iYWxsb29uLmFkZCgge1xuXHRcdFx0dmlldzogdGhpcy5hY3Rpb25zVmlldyxcblx0XHRcdHBvc2l0aW9uOiB0aGlzLl9nZXRCYWxsb29uUG9zaXRpb25EYXRhKClcblx0XHR9ICk7XG5cdH1cblx0X2FkZFNhdmVWaWV3KCkge1xuXG5cdFx0Y29uc3QgcG9zaXRpb25zID0gQmFsbG9vblBhbmVsVmlldy5kZWZhdWx0UG9zaXRpb25zO1xuXHRcdGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvciggJy5kb2N1bWVudC1lZGl0b3InKTtcblx0XHRjb25zb2xlLmxvZyhwb3NpdGlvbnMubm9ydGhBcnJvd1NvdXRoKTtcblx0XHR0aGlzLl9wYW5lbC5jb250ZW50LmFkZCh0aGlzLnNhdmVWaWV3XG5cblxuXHRcdCk7XG5cdFx0dGhpcy5fcGFuZWwucmVuZGVyKCk7XG5cdFx0dGhpcy5fcGFuZWwucGluKCB7XG5cdFx0XHR0YXJnZXQ6IHRhcmdldCxcblx0XHRcdHBvc2l0aW9uczogW1xuXHRcdFx0XHRwb3NpdGlvbnMubm9ydGhBcnJvd1NvdXRoLFxuXHRcdFx0XVxuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBBZGRzIHRoZSB7QGxpbmsgI2Zvcm1WaWV3fSB0byB0aGUge0BsaW5rICNfYmFsbG9vbn0uXG5cdCAqXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICovXG5cdF9hZGRGb3JtVmlldygpIHtcblx0XHRpZiAoIHRoaXMuX2lzRm9ybUluUGFuZWwgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgZWRpdG9yID0gdGhpcy5lZGl0b3I7XG5cdFx0Y29uc3QgdGVtcGxhdGVDb21tYW5kID0gZWRpdG9yLmNvbW1hbmRzLmdldCggJ3RlbXBsYXRlJyApO1xuXG5cdFx0dGhpcy5mb3JtVmlldy5kaXNhYmxlQ3NzVHJhbnNpdGlvbnMoKTtcblxuXHRcdHRoaXMuX2JhbGxvb24uYWRkKCB7XG5cdFx0XHR2aWV3OiB0aGlzLmZvcm1WaWV3LFxuXHRcdFx0cG9zaXRpb246IHRoaXMuX2dldEJhbGxvb25Qb3NpdGlvbkRhdGEoKVxuXHRcdH0gKTtcblxuXHRcdC8vIFNlbGVjdCBpbnB1dCB3aGVuIGZvcm0gdmlldyBpcyBjdXJyZW50bHkgdmlzaWJsZS5cblx0XHRpZiAoIHRoaXMuX2JhbGxvb24udmlzaWJsZVZpZXcgPT09IHRoaXMuZm9ybVZpZXcgKSB7XG5cdFx0XHR0aGlzLmZvcm1WaWV3LmxhYmVsSW5wdXRWaWV3LmZpZWxkVmlldy5zZWxlY3QoKTtcblx0XHR9XG5cblx0XHR0aGlzLmZvcm1WaWV3LmVuYWJsZUNzc1RyYW5zaXRpb25zKCk7XG5cblx0XHQvLyBNYWtlIHN1cmUgdGhhdCBlYWNoIHRpbWUgdGhlIHBhbmVsIHNob3dzIHVwLCB0aGUgVVJMIGZpZWxkIHJlbWFpbnMgaW4gc3luYyB3aXRoIHRoZSB2YWx1ZSBvZlxuXHRcdC8vIHRoZSBjb21tYW5kLiBJZiB0aGUgdXNlciB0eXBlZCBpbiB0aGUgaW5wdXQsIHRoZW4gY2FuY2VsZWQgdGhlIGJhbGxvb24gKGB1cmxJbnB1dFZpZXcuZmllbGRWaWV3I3ZhbHVlYCBzdGF5c1xuXHRcdC8vIHVuYWx0ZXJlZCkgYW5kIHJlLW9wZW5lZCBpdCB3aXRob3V0IGNoYW5naW5nIHRoZSB2YWx1ZSBvZiB0aGUgbGluayBjb21tYW5kIChlLmcuIGJlY2F1c2UgdGhleVxuXHRcdC8vIGNsaWNrZWQgdGhlIHNhbWUgbGluayksIHRoZXkgd291bGQgc2VlIHRoZSBvbGQgdmFsdWUgaW5zdGVhZCBvZiB0aGUgYWN0dWFsIHZhbHVlIG9mIHRoZSBjb21tYW5kLlxuXHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ja2VkaXRvci9ja2VkaXRvcjUtbGluay9pc3N1ZXMvNzhcblx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vY2tlZGl0b3IvY2tlZGl0b3I1LWxpbmsvaXNzdWVzLzEyM1xuXHRcdHRoaXMuZm9ybVZpZXcubGFiZWxJbnB1dFZpZXcuZmllbGRWaWV3LmVsZW1lbnQudmFsdWUgPSB0ZW1wbGF0ZUNvbW1hbmQudmFsdWUgfHwgJyc7XG5cdH1cblxuXHQvKipcblx0ICogQ2xvc2VzIHRoZSBmb3JtIHZpZXcuIERlY2lkZXMgd2hldGhlciB0aGUgYmFsbG9vbiBzaG91bGQgYmUgaGlkZGVuIGNvbXBsZXRlbHkgb3IgaWYgdGhlIGFjdGlvbiB2aWV3IHNob3VsZCBiZSBzaG93bi4gVGhpcyBpc1xuXHQgKiBkZWNpZGVkIHVwb24gdGhlIGxpbmsgY29tbWFuZCB2YWx1ZSAod2hpY2ggaGFzIGEgdmFsdWUgaWYgdGhlIGRvY3VtZW50IHNlbGVjdGlvbiBpcyBpbiB0aGUgbGluaykuXG5cdCAqXG5cdCAqIEFkZGl0aW9uYWxseSwgaWYgYW55IHtAbGluayBtb2R1bGU6bGluay9saW5rfkxpbmtDb25maWcjZGVjb3JhdG9yc30gYXJlIGRlZmluZWQgaW4gdGhlIGVkaXRvciBjb25maWd1cmF0aW9uLCB0aGUgc3RhdGUgb2Zcblx0ICogc3dpdGNoIGJ1dHRvbnMgcmVzcG9uc2libGUgZm9yIG1hbnVhbCBkZWNvcmF0b3IgaGFuZGxpbmcgaXMgcmVzdG9yZWQuXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfY2xvc2VGb3JtVmlldygpIHtcblx0XHRjb25zdCB0ZW1wbGF0ZUNvbW1hbmQgPSB0aGlzLmVkaXRvci5jb21tYW5kcy5nZXQoICd0ZW1wbGF0ZScgKTtcblxuXHRcdC8vIFJlc3RvcmUgbWFudWFsIGRlY29yYXRvciBzdGF0ZXMgdG8gcmVwcmVzZW50IHRoZSBjdXJyZW50IG1vZGVsIHN0YXRlLiBUaGlzIGNhc2UgaXMgaW1wb3J0YW50IHRvIHJlc2V0IHRoZSBzd2l0Y2ggYnV0dG9uc1xuXHRcdC8vIHdoZW4gdGhlIHVzZXIgY2FuY2VscyB0aGUgZWRpdGluZyBmb3JtLlxuXHRcdHRlbXBsYXRlQ29tbWFuZC5yZXN0b3JlTWFudWFsRGVjb3JhdG9yU3RhdGVzKCk7XG5cblx0XHRpZiAoIHRlbXBsYXRlQ29tbWFuZC52YWx1ZSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0dGhpcy5fcmVtb3ZlRm9ybVZpZXcoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5faGlkZVVJKCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFJlbW92ZXMgdGhlIHtAbGluayAjZm9ybVZpZXd9IGZyb20gdGhlIHtAbGluayAjX2JhbGxvb259LlxuXHQgKlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHRfcmVtb3ZlRm9ybVZpZXcoKSB7XG5cdFx0aWYgKCB0aGlzLl9pc0Zvcm1JblBhbmVsICkge1xuXHRcdFx0Ly8gQmx1ciB0aGUgaW5wdXQgZWxlbWVudCBiZWZvcmUgcmVtb3ZpbmcgaXQgZnJvbSBET00gdG8gcHJldmVudCBpc3N1ZXMgaW4gc29tZSBicm93c2Vycy5cblx0XHRcdC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vY2tlZGl0b3IvY2tlZGl0b3I1L2lzc3Vlcy8xNTAxLlxuXHRcdFx0dGhpcy5mb3JtVmlldy5zYXZlQnV0dG9uVmlldy5mb2N1cygpO1xuXG5cdFx0XHR0aGlzLl9iYWxsb29uLnJlbW92ZSggdGhpcy5mb3JtVmlldyApO1xuXG5cdFx0XHQvLyBCZWNhdXNlIHRoZSBmb3JtIGhhcyBhbiBpbnB1dCB3aGljaCBoYXMgZm9jdXMsIHRoZSBmb2N1cyBtdXN0IGJlIGJyb3VnaHQgYmFja1xuXHRcdFx0Ly8gdG8gdGhlIGVkaXRvci4gT3RoZXJ3aXNlLCBpdCB3b3VsZCBiZSBsb3N0LlxuXHRcdFx0dGhpcy5lZGl0b3IuZWRpdGluZy52aWV3LmZvY3VzKCk7XG5cblx0XHRcdHRoaXMuX2hpZGVGYWtlVmlzdWFsU2VsZWN0aW9uKCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFNob3dzIHRoZSBjb3JyZWN0IFVJIHR5cGUuIEl0IGlzIGVpdGhlciB7QGxpbmsgI2Zvcm1WaWV3fSBvciB7QGxpbmsgI2FjdGlvbnNWaWV3fS5cblx0ICpcblx0ICogQHBhcmFtIHtCb29sZWFufSBmb3JjZVZpc2libGVcblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9zaG93VUkoIGZvcmNlVmlzaWJsZSA9IGZhbHNlICkge1xuXHRcdC8vIFdoZW4gdGhlcmUncyBubyBsaW5rIHVuZGVyIHRoZSBzZWxlY3Rpb24sIGdvIHN0cmFpZ2h0IHRvIHRoZSBlZGl0aW5nIFVJLlxuXHRcdGlmICggIXRoaXMuX2dldFNlbGVjdGVkTGlua0VsZW1lbnQoKSApIHtcblx0XHRcdC8vIFNob3cgdmlzdWFsIHNlbGVjdGlvbiBvbiBhIHRleHQgd2l0aG91dCBhIGxpbmsgd2hlbiB0aGUgY29udGV4dHVhbCBiYWxsb29uIGlzIGRpc3BsYXllZC5cblx0XHRcdC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vY2tlZGl0b3IvY2tlZGl0b3I1L2lzc3Vlcy80NzIxLlxuXHRcdFx0dGhpcy5fc2hvd0Zha2VWaXN1YWxTZWxlY3Rpb24oKTtcblxuXHRcdFx0dGhpcy5fYWRkQWN0aW9uc1ZpZXcoKTtcblxuXHRcdFx0Ly8gQmUgc3VyZSBwYW5lbCB3aXRoIGxpbmsgaXMgdmlzaWJsZS5cblx0XHRcdGlmICggZm9yY2VWaXNpYmxlICkge1xuXHRcdFx0XHR0aGlzLl9iYWxsb29uLnNob3dTdGFjayggJ21haW4nICk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX2FkZEZvcm1WaWV3KCk7XG5cdFx0fVxuXHRcdC8vIElmIHRoZXJlJ3MgYSBsaW5rIHVuZGVyIHRoZSBzZWxlY3Rpb24uLi5cblx0XHRlbHNlIHtcblx0XHRcdC8vIEdvIHRvIHRoZSBlZGl0aW5nIFVJIGlmIGFjdGlvbnMgYXJlIGFscmVhZHkgdmlzaWJsZS5cblx0XHRcdGlmICggdGhpcy5fYXJlQWN0aW9uc1Zpc2libGUgKSB7XG5cdFx0XHRcdHRoaXMuX2FkZEZvcm1WaWV3KCk7XG5cdFx0XHR9XG5cdFx0XHQvLyBPdGhlcndpc2UgZGlzcGxheSBqdXN0IHRoZSBhY3Rpb25zIFVJLlxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHRoaXMuX2FkZEFjdGlvbnNWaWV3KCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEJlIHN1cmUgcGFuZWwgd2l0aCBsaW5rIGlzIHZpc2libGUuXG5cdFx0XHRpZiAoIGZvcmNlVmlzaWJsZSApIHtcblx0XHRcdFx0dGhpcy5fYmFsbG9vbi5zaG93U3RhY2soICdtYWluJyApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEJlZ2luIHJlc3BvbmRpbmcgdG8gdWkjdXBkYXRlIG9uY2UgdGhlIFVJIGlzIGFkZGVkLlxuXHRcdHRoaXMuX3N0YXJ0VXBkYXRpbmdVSSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlbW92ZXMgdGhlIHtAbGluayAjZm9ybVZpZXd9IGZyb20gdGhlIHtAbGluayAjX2JhbGxvb259LlxuXHQgKlxuXHQgKiBTZWUge0BsaW5rICNfYWRkRm9ybVZpZXd9LCB7QGxpbmsgI19hZGRBY3Rpb25zVmlld30uXG5cdCAqXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICovXG5cdF9oaWRlVUkoKSB7XG5cdFx0aWYgKCAhdGhpcy5faXNVSUluUGFuZWwgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgZWRpdG9yID0gdGhpcy5lZGl0b3I7XG5cblx0XHR0aGlzLnN0b3BMaXN0ZW5pbmcoIGVkaXRvci51aSwgJ3VwZGF0ZScgKTtcblx0XHR0aGlzLnN0b3BMaXN0ZW5pbmcoIHRoaXMuX2JhbGxvb24sICdjaGFuZ2U6dmlzaWJsZVZpZXcnICk7XG5cblx0XHQvLyBNYWtlIHN1cmUgdGhlIGZvY3VzIGFsd2F5cyBnZXRzIGJhY2sgdG8gdGhlIGVkaXRhYmxlIF9iZWZvcmVfIHJlbW92aW5nIHRoZSBmb2N1c2VkIGZvcm0gdmlldy5cblx0XHQvLyBEb2luZyBvdGhlcndpc2UgY2F1c2VzIGlzc3VlcyBpbiBzb21lIGJyb3dzZXJzLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2NrZWRpdG9yL2NrZWRpdG9yNS1saW5rL2lzc3Vlcy8xOTMuXG5cdFx0ZWRpdG9yLmVkaXRpbmcudmlldy5mb2N1cygpO1xuXG5cdFx0Ly8gUmVtb3ZlIGZvcm0gZmlyc3QgYmVjYXVzZSBpdCdzIG9uIHRvcCBvZiB0aGUgc3RhY2suXG5cdFx0dGhpcy5fcmVtb3ZlRm9ybVZpZXcoKTtcblxuXHRcdC8vIFRoZW4gcmVtb3ZlIHRoZSBhY3Rpb25zIHZpZXcgYmVjYXVzZSBpdCdzIGJlbmVhdGggdGhlIGZvcm0uXG5cdFx0dGhpcy5fYmFsbG9vbi5yZW1vdmUoIHRoaXMuYWN0aW9uc1ZpZXcgKTtcblxuXHRcdHRoaXMuX2hpZGVGYWtlVmlzdWFsU2VsZWN0aW9uKCk7XG5cdH1cblxuXHQvKipcblx0ICogTWFrZXMgdGhlIFVJIHJlYWN0IHRvIHRoZSB7QGxpbmsgbW9kdWxlOmNvcmUvZWRpdG9yL2VkaXRvcnVpfkVkaXRvclVJI2V2ZW50OnVwZGF0ZX0gZXZlbnQgdG9cblx0ICogcmVwb3NpdGlvbiBpdHNlbGYgd2hlbiB0aGUgZWRpdG9yIFVJIHNob3VsZCBiZSByZWZyZXNoZWQuXG5cdCAqXG5cdCAqIFNlZToge0BsaW5rICNfaGlkZVVJfSB0byBsZWFybiB3aGVuIHRoZSBVSSBzdG9wcyByZWFjdGluZyB0byB0aGUgYHVwZGF0ZWAgZXZlbnQuXG5cdCAqXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICovXG5cdF9zdGFydFVwZGF0aW5nVUkoKSB7XG5cdFx0Y29uc3QgZWRpdG9yID0gdGhpcy5lZGl0b3I7XG5cdFx0Y29uc3Qgdmlld0RvY3VtZW50ID0gZWRpdG9yLmVkaXRpbmcudmlldy5kb2N1bWVudDtcblxuXHRcdGxldCBwcmV2U2VsZWN0ZWRMaW5rID0gdGhpcy5fZ2V0U2VsZWN0ZWRMaW5rRWxlbWVudCgpO1xuXHRcdGxldCBwcmV2U2VsZWN0aW9uUGFyZW50ID0gZ2V0U2VsZWN0aW9uUGFyZW50KCk7XG5cblx0XHRjb25zdCB1cGRhdGUgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBzZWxlY3RlZExpbmsgPSB0aGlzLl9nZXRTZWxlY3RlZExpbmtFbGVtZW50KCk7XG5cdFx0XHRjb25zdCBzZWxlY3Rpb25QYXJlbnQgPSBnZXRTZWxlY3Rpb25QYXJlbnQoKTtcblxuXHRcdFx0Ly8gSGlkZSB0aGUgcGFuZWwgaWY6XG5cdFx0XHQvL1xuXHRcdFx0Ly8gKiB0aGUgc2VsZWN0aW9uIHdlbnQgb3V0IG9mIHRoZSBFWElTVElORyBsaW5rIGVsZW1lbnQuIEUuZy4gdXNlciBtb3ZlZCB0aGUgY2FyZXQgb3V0XG5cdFx0XHQvLyAgIG9mIHRoZSBsaW5rLFxuXHRcdFx0Ly8gKiB0aGUgc2VsZWN0aW9uIHdlbnQgdG8gYSBkaWZmZXJlbnQgcGFyZW50IHdoZW4gY3JlYXRpbmcgYSBORVcgbGluay4gRS5nLiBzb21lb25lXG5cdFx0XHQvLyAgIGVsc2UgbW9kaWZpZWQgdGhlIGRvY3VtZW50LlxuXHRcdFx0Ly8gKiB0aGUgc2VsZWN0aW9uIGhhcyBleHBhbmRlZCAoZS5nLiBkaXNwbGF5aW5nIGxpbmsgYWN0aW9ucyB0aGVuIHByZXNzaW5nIFNISUZUK1JpZ2h0IGFycm93KS5cblx0XHRcdC8vXG5cdFx0XHQvLyBOb3RlOiAjX2dldFNlbGVjdGVkTGlua0VsZW1lbnQgd2lsbCByZXR1cm4gYSBsaW5rIGZvciBhIG5vbi1jb2xsYXBzZWQgc2VsZWN0aW9uIG9ubHlcblx0XHRcdC8vIHdoZW4gZnVsbHkgc2VsZWN0ZWQuXG5cdFx0XHRpZiAoICggcHJldlNlbGVjdGVkTGluayAmJiAhc2VsZWN0ZWRMaW5rICkgfHxcblx0XHRcdFx0KCAhcHJldlNlbGVjdGVkTGluayAmJiBzZWxlY3Rpb25QYXJlbnQgIT09IHByZXZTZWxlY3Rpb25QYXJlbnQgKSApIHtcblx0XHRcdFx0dGhpcy5faGlkZVVJKCk7XG5cdFx0XHR9XG5cdFx0XHQvLyBVcGRhdGUgdGhlIHBvc2l0aW9uIG9mIHRoZSBwYW5lbCB3aGVuOlxuXHRcdFx0Ly8gICogbGluayBwYW5lbCBpcyBpbiB0aGUgdmlzaWJsZSBzdGFja1xuXHRcdFx0Ly8gICogdGhlIHNlbGVjdGlvbiByZW1haW5zIGluIHRoZSBvcmlnaW5hbCBsaW5rIGVsZW1lbnQsXG5cdFx0XHQvLyAgKiB0aGVyZSB3YXMgbm8gbGluayBlbGVtZW50IGluIHRoZSBmaXJzdCBwbGFjZSwgaS5lLiBjcmVhdGluZyBhIG5ldyBsaW5rXG5cdFx0XHRlbHNlIGlmICggdGhpcy5faXNVSVZpc2libGUgKSB7XG5cdFx0XHRcdC8vIElmIHN0aWxsIGluIGEgbGluayBlbGVtZW50LCBzaW1wbHkgdXBkYXRlIHRoZSBwb3NpdGlvbiBvZiB0aGUgYmFsbG9vbi5cblx0XHRcdFx0Ly8gSWYgdGhlcmUgd2FzIG5vIGxpbmsgKGUuZy4gaW5zZXJ0aW5nIG9uZSksIHRoZSBiYWxsb29uIG11c3QgYmUgbW92ZWRcblx0XHRcdFx0Ly8gdG8gdGhlIG5ldyBwb3NpdGlvbiBpbiB0aGUgZWRpdGluZyB2aWV3IChhIG5ldyBuYXRpdmUgRE9NIHJhbmdlKS5cblx0XHRcdFx0dGhpcy5fYmFsbG9vbi51cGRhdGVQb3NpdGlvbiggdGhpcy5fZ2V0QmFsbG9vblBvc2l0aW9uRGF0YSgpICk7XG5cdFx0XHR9XG5cblx0XHRcdHByZXZTZWxlY3RlZExpbmsgPSBzZWxlY3RlZExpbms7XG5cdFx0XHRwcmV2U2VsZWN0aW9uUGFyZW50ID0gc2VsZWN0aW9uUGFyZW50O1xuXHRcdH07XG5cblx0XHRmdW5jdGlvbiBnZXRTZWxlY3Rpb25QYXJlbnQoKSB7XG5cdFx0XHRyZXR1cm4gdmlld0RvY3VtZW50LnNlbGVjdGlvbi5mb2N1cy5nZXRBbmNlc3RvcnMoKVxuXHRcdFx0XHQucmV2ZXJzZSgpXG5cdFx0XHRcdC5maW5kKCBub2RlID0+IG5vZGUuaXMoICdlbGVtZW50JyApICk7XG5cdFx0fVxuXG5cdFx0dGhpcy5saXN0ZW5UbyggZWRpdG9yLnVpLCAndXBkYXRlJywgdXBkYXRlICk7XG5cdFx0dGhpcy5saXN0ZW5UbyggdGhpcy5fYmFsbG9vbiwgJ2NoYW5nZTp2aXNpYmxlVmlldycsIHVwZGF0ZSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgYHRydWVgIHdoZW4ge0BsaW5rICNmb3JtVmlld30gaXMgaW4gdGhlIHtAbGluayAjX2JhbGxvb259LlxuXHQgKlxuXHQgKiBAcmVhZG9ubHlcblx0ICogQHByb3RlY3RlZFxuXHQgKiBAdHlwZSB7Qm9vbGVhbn1cblx0ICovXG5cdGdldCBfaXNGb3JtSW5QYW5lbCgpIHtcblx0XHRyZXR1cm4gdGhpcy5fYmFsbG9vbi5oYXNWaWV3KCB0aGlzLmZvcm1WaWV3ICk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBgdHJ1ZWAgd2hlbiB7QGxpbmsgI2FjdGlvbnNWaWV3fSBpcyBpbiB0aGUge0BsaW5rICNfYmFsbG9vbn0uXG5cdCAqXG5cdCAqIEByZWFkb25seVxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEB0eXBlIHtCb29sZWFufVxuXHQgKi9cblx0Z2V0IF9hcmVBY3Rpb25zSW5QYW5lbCgpIHtcblx0XHRyZXR1cm4gdGhpcy5fYmFsbG9vbi5oYXNWaWV3KCB0aGlzLmFjdGlvbnNWaWV3ICk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBgdHJ1ZWAgd2hlbiB7QGxpbmsgI2FjdGlvbnNWaWV3fSBpcyBpbiB0aGUge0BsaW5rICNfYmFsbG9vbn0gYW5kIGl0IGlzXG5cdCAqIGN1cnJlbnRseSB2aXNpYmxlLlxuXHQgKlxuXHQgKiBAcmVhZG9ubHlcblx0ICogQHByb3RlY3RlZFxuXHQgKiBAdHlwZSB7Qm9vbGVhbn1cblx0ICovXG5cdGdldCBfYXJlQWN0aW9uc1Zpc2libGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2JhbGxvb24udmlzaWJsZVZpZXcgPT09IHRoaXMuYWN0aW9uc1ZpZXc7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBgdHJ1ZWAgd2hlbiB7QGxpbmsgI2FjdGlvbnNWaWV3fSBvciB7QGxpbmsgI2Zvcm1WaWV3fSBpcyBpbiB0aGUge0BsaW5rICNfYmFsbG9vbn0uXG5cdCAqXG5cdCAqIEByZWFkb25seVxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEB0eXBlIHtCb29sZWFufVxuXHQgKi9cblx0Z2V0IF9pc1VJSW5QYW5lbCgpIHtcblx0XHRyZXR1cm4gdGhpcy5faXNGb3JtSW5QYW5lbCB8fCB0aGlzLl9hcmVBY3Rpb25zSW5QYW5lbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIGB0cnVlYCB3aGVuIHtAbGluayAjYWN0aW9uc1ZpZXd9IG9yIHtAbGluayAjZm9ybVZpZXd9IGlzIGluIHRoZSB7QGxpbmsgI19iYWxsb29ufSBhbmQgaXQgaXNcblx0ICogY3VycmVudGx5IHZpc2libGUuXG5cdCAqXG5cdCAqIEByZWFkb25seVxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEB0eXBlIHtCb29sZWFufVxuXHQgKi9cblx0Z2V0IF9pc1VJVmlzaWJsZSgpIHtcblx0XHRjb25zdCB2aXNpYmxlVmlldyA9IHRoaXMuX2JhbGxvb24udmlzaWJsZVZpZXc7XG5cblx0XHRyZXR1cm4gdmlzaWJsZVZpZXcgPT0gdGhpcy5mb3JtVmlldyB8fCB0aGlzLl9hcmVBY3Rpb25zVmlzaWJsZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHBvc2l0aW9uaW5nIG9wdGlvbnMgZm9yIHRoZSB7QGxpbmsgI19iYWxsb29ufS4gVGhleSBjb250cm9sIHRoZSB3YXkgdGhlIGJhbGxvb24gaXMgYXR0YWNoZWRcblx0ICogdG8gdGhlIHRhcmdldCBlbGVtZW50IG9yIHNlbGVjdGlvbi5cblx0ICpcblx0ICogSWYgdGhlIHNlbGVjdGlvbiBpcyBjb2xsYXBzZWQgYW5kIGluc2lkZSBhIGxpbmsgZWxlbWVudCwgdGhlIHBhbmVsIHdpbGwgYmUgYXR0YWNoZWQgdG8gdGhlXG5cdCAqIGVudGlyZSBsaW5rIGVsZW1lbnQuIE90aGVyd2lzZSwgaXQgd2lsbCBiZSBhdHRhY2hlZCB0byB0aGUgc2VsZWN0aW9uLlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcmV0dXJucyB7bW9kdWxlOnV0aWxzL2RvbS9wb3NpdGlvbn5PcHRpb25zfVxuXHQgKi9cblx0X2dldEJhbGxvb25Qb3NpdGlvbkRhdGEoKSB7XG5cdFx0Y29uc3QgdmlldyA9IHRoaXMuZWRpdG9yLmVkaXRpbmcudmlldztcblx0XHRjb25zdCBtb2RlbCA9IHRoaXMuZWRpdG9yLm1vZGVsO1xuXHRcdGNvbnN0IHZpZXdEb2N1bWVudCA9IHZpZXcuZG9jdW1lbnQ7XG5cdFx0bGV0IHRhcmdldCA9IG51bGw7XG5cblx0XHRpZiAoIG1vZGVsLm1hcmtlcnMuaGFzKCBWSVNVQUxfU0VMRUNUSU9OX01BUktFUl9OQU1FICkgKSB7XG5cdFx0XHQvLyBUaGVyZSBhcmUgY2FzZXMgd2hlbiB3ZSBoaWdobGlnaHQgc2VsZWN0aW9uIHVzaW5nIGEgbWFya2VyICgjNzcwNSwgIzQ3MjEpLlxuXHRcdFx0Y29uc3QgbWFya2VyVmlld0VsZW1lbnRzID0gQXJyYXkuZnJvbSggdGhpcy5lZGl0b3IuZWRpdGluZy5tYXBwZXIubWFya2VyTmFtZVRvRWxlbWVudHMoIFZJU1VBTF9TRUxFQ1RJT05fTUFSS0VSX05BTUUgKSApO1xuXHRcdFx0Y29uc3QgbmV3UmFuZ2UgPSB2aWV3LmNyZWF0ZVJhbmdlKFxuXHRcdFx0XHR2aWV3LmNyZWF0ZVBvc2l0aW9uQmVmb3JlKCBtYXJrZXJWaWV3RWxlbWVudHNbIDAgXSApLFxuXHRcdFx0XHR2aWV3LmNyZWF0ZVBvc2l0aW9uQWZ0ZXIoIG1hcmtlclZpZXdFbGVtZW50c1sgbWFya2VyVmlld0VsZW1lbnRzLmxlbmd0aCAtIDEgXSApXG5cdFx0XHQpO1xuXG5cdFx0XHR0YXJnZXQgPSB2aWV3LmRvbUNvbnZlcnRlci52aWV3UmFuZ2VUb0RvbSggbmV3UmFuZ2UgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgdGFyZ2V0TGluayA9IHRoaXMuX2dldFNlbGVjdGVkTGlua0VsZW1lbnQoKTtcblx0XHRcdGNvbnN0IHJhbmdlID0gdmlld0RvY3VtZW50LnNlbGVjdGlvbi5nZXRGaXJzdFJhbmdlKCk7XG5cblx0XHRcdHRhcmdldCA9IHRhcmdldExpbmsgP1xuXHRcdFx0XHQvLyBXaGVuIHNlbGVjdGlvbiBpcyBpbnNpZGUgbGluayBlbGVtZW50LCB0aGVuIGF0dGFjaCBwYW5lbCB0byB0aGlzIGVsZW1lbnQuXG5cdFx0XHRcdHZpZXcuZG9tQ29udmVydGVyLm1hcFZpZXdUb0RvbSggdGFyZ2V0TGluayApIDpcblx0XHRcdFx0Ly8gT3RoZXJ3aXNlIGF0dGFjaCBwYW5lbCB0byB0aGUgc2VsZWN0aW9uLlxuXHRcdFx0XHR2aWV3LmRvbUNvbnZlcnRlci52aWV3UmFuZ2VUb0RvbSggcmFuZ2UgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4geyB0YXJnZXQgfTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBsaW5rIHtAbGluayBtb2R1bGU6ZW5naW5lL3ZpZXcvYXR0cmlidXRlZWxlbWVudH5BdHRyaWJ1dGVFbGVtZW50fSB1bmRlclxuXHQgKiB0aGUge0BsaW5rIG1vZHVsZTplbmdpbmUvdmlldy9kb2N1bWVudH5Eb2N1bWVudCBlZGl0aW5nIHZpZXcnc30gc2VsZWN0aW9uIG9yIGBudWxsYFxuXHQgKiBpZiB0aGVyZSBpcyBub25lLlxuXHQgKlxuXHQgKiAqKk5vdGUqKjogRm9yIGEgbm9u4oCTY29sbGFwc2VkIHNlbGVjdGlvbiwgdGhlIGxpbmsgZWxlbWVudCBpcyBvbmx5IHJldHVybmVkIHdoZW4gKipmdWxseSoqXG5cdCAqIHNlbGVjdGVkIGFuZCB0aGUgKipvbmx5KiogZWxlbWVudCB3aXRoaW4gdGhlIHNlbGVjdGlvbiBib3VuZGFyaWVzLlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcmV0dXJucyB7bW9kdWxlOmVuZ2luZS92aWV3L2F0dHJpYnV0ZWVsZW1lbnR+QXR0cmlidXRlRWxlbWVudHxudWxsfVxuXHQgKi9cblx0X2dldFNlbGVjdGVkTGlua0VsZW1lbnQoKSB7XG5cdFx0Y29uc3QgdmlldyA9IHRoaXMuZWRpdG9yLmVkaXRpbmcudmlldztcblx0XHRjb25zdCBzZWxlY3Rpb24gPSB2aWV3LmRvY3VtZW50LnNlbGVjdGlvbjtcblxuXHRcdGlmICggc2VsZWN0aW9uLmlzQ29sbGFwc2VkICkge1xuXHRcdFx0cmV0dXJuIGZpbmRMaW5rRWxlbWVudEFuY2VzdG9yKCBzZWxlY3Rpb24uZ2V0Rmlyc3RQb3NpdGlvbigpICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIFRoZSByYW5nZSBmb3IgZnVsbHkgc2VsZWN0ZWQgbGluayBpcyB1c3VhbGx5IGFuY2hvcmVkIGluIGFkamFjZW50IHRleHQgbm9kZXMuXG5cdFx0XHQvLyBUcmltIGl0IHRvIGdldCBjbG9zZXIgdG8gdGhlIGFjdHVhbCBsaW5rIGVsZW1lbnQuXG5cdFx0XHRjb25zdCByYW5nZSA9IHNlbGVjdGlvbi5nZXRGaXJzdFJhbmdlKCkuZ2V0VHJpbW1lZCgpO1xuXHRcdFx0Y29uc3Qgc3RhcnRMaW5rID0gZmluZExpbmtFbGVtZW50QW5jZXN0b3IoIHJhbmdlLnN0YXJ0ICk7XG5cdFx0XHRjb25zdCBlbmRMaW5rID0gZmluZExpbmtFbGVtZW50QW5jZXN0b3IoIHJhbmdlLmVuZCApO1xuXG5cdFx0XHRpZiAoICFzdGFydExpbmsgfHwgc3RhcnRMaW5rICE9IGVuZExpbmsgKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDaGVjayBpZiB0aGUgbGluayBlbGVtZW50IGlzIGZ1bGx5IHNlbGVjdGVkLlxuXHRcdFx0aWYgKCB2aWV3LmNyZWF0ZVJhbmdlSW4oIHN0YXJ0TGluayApLmdldFRyaW1tZWQoKS5pc0VxdWFsKCByYW5nZSApICkge1xuXHRcdFx0XHRyZXR1cm4gc3RhcnRMaW5rO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIERpc3BsYXlzIGEgZmFrZSB2aXN1YWwgc2VsZWN0aW9uIHdoZW4gdGhlIGNvbnRleHR1YWwgYmFsbG9vbiBpcyBkaXNwbGF5ZWQuXG5cdCAqXG5cdCAqIFRoaXMgYWRkcyBhICdsaW5rLXVpJyBtYXJrZXIgaW50byB0aGUgZG9jdW1lbnQgdGhhdCBpcyByZW5kZXJlZCBhcyBhIGhpZ2hsaWdodCBvbiBzZWxlY3RlZCB0ZXh0IGZyYWdtZW50LlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X3Nob3dGYWtlVmlzdWFsU2VsZWN0aW9uKCkge1xuXHRcdGNvbnN0IG1vZGVsID0gdGhpcy5lZGl0b3IubW9kZWw7XG5cblx0XHRtb2RlbC5jaGFuZ2UoIHdyaXRlciA9PiB7XG5cdFx0XHRjb25zdCByYW5nZSA9IG1vZGVsLmRvY3VtZW50LnNlbGVjdGlvbi5nZXRGaXJzdFJhbmdlKCk7XG5cblx0XHRcdGlmICggbW9kZWwubWFya2Vycy5oYXMoIFZJU1VBTF9TRUxFQ1RJT05fTUFSS0VSX05BTUUgKSApIHtcblx0XHRcdFx0d3JpdGVyLnVwZGF0ZU1hcmtlciggVklTVUFMX1NFTEVDVElPTl9NQVJLRVJfTkFNRSwgeyByYW5nZSB9ICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoIHJhbmdlLnN0YXJ0LmlzQXRFbmQgKSB7XG5cdFx0XHRcdFx0Y29uc3Qgc3RhcnRQb3NpdGlvbiA9IHJhbmdlLnN0YXJ0LmdldExhc3RNYXRjaGluZ1Bvc2l0aW9uKFxuXHRcdFx0XHRcdFx0KCB7IGl0ZW0gfSApID0+ICFtb2RlbC5zY2hlbWEuaXNDb250ZW50KCBpdGVtICksXG5cdFx0XHRcdFx0XHR7IGJvdW5kYXJpZXM6IHJhbmdlIH1cblx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0d3JpdGVyLmFkZE1hcmtlciggVklTVUFMX1NFTEVDVElPTl9NQVJLRVJfTkFNRSwge1xuXHRcdFx0XHRcdFx0dXNpbmdPcGVyYXRpb246IGZhbHNlLFxuXHRcdFx0XHRcdFx0YWZmZWN0c0RhdGE6IGZhbHNlLFxuXHRcdFx0XHRcdFx0cmFuZ2U6IHdyaXRlci5jcmVhdGVSYW5nZSggc3RhcnRQb3NpdGlvbiwgcmFuZ2UuZW5kIClcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0d3JpdGVyLmFkZE1hcmtlciggVklTVUFMX1NFTEVDVElPTl9NQVJLRVJfTkFNRSwge1xuXHRcdFx0XHRcdFx0dXNpbmdPcGVyYXRpb246IGZhbHNlLFxuXHRcdFx0XHRcdFx0YWZmZWN0c0RhdGE6IGZhbHNlLFxuXHRcdFx0XHRcdFx0cmFuZ2Vcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogSGlkZXMgdGhlIGZha2UgdmlzdWFsIHNlbGVjdGlvbiBjcmVhdGVkIGluIHtAbGluayAjX3Nob3dGYWtlVmlzdWFsU2VsZWN0aW9ufS5cblx0ICpcblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9oaWRlRmFrZVZpc3VhbFNlbGVjdGlvbigpIHtcblx0XHRjb25zdCBtb2RlbCA9IHRoaXMuZWRpdG9yLm1vZGVsO1xuXG5cdFx0aWYgKCBtb2RlbC5tYXJrZXJzLmhhcyggVklTVUFMX1NFTEVDVElPTl9NQVJLRVJfTkFNRSApICkge1xuXHRcdFx0bW9kZWwuY2hhbmdlKCB3cml0ZXIgPT4ge1xuXHRcdFx0XHR3cml0ZXIucmVtb3ZlTWFya2VyKCBWSVNVQUxfU0VMRUNUSU9OX01BUktFUl9OQU1FICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHR9XG59XG5cbi8vIFJldHVybnMgYSBsaW5rIGVsZW1lbnQgaWYgdGhlcmUncyBvbmUgYW1vbmcgdGhlIGFuY2VzdG9ycyBvZiB0aGUgcHJvdmlkZWQgYFBvc2l0aW9uYC5cbi8vXG4vLyBAcHJpdmF0ZVxuLy8gQHBhcmFtIHttb2R1bGU6ZW5naW5lL3ZpZXcvcG9zaXRpb25+UG9zaXRpb259IFZpZXcgcG9zaXRpb24gdG8gYW5hbHl6ZS5cbi8vIEByZXR1cm5zIHttb2R1bGU6ZW5naW5lL3ZpZXcvYXR0cmlidXRlZWxlbWVudH5BdHRyaWJ1dGVFbGVtZW50fG51bGx9IFRlbXBsYXRlIGVsZW1lbnQgYXQgdGhlIHBvc2l0aW9uIG9yIG51bGwuXG5mdW5jdGlvbiBmaW5kTGlua0VsZW1lbnRBbmNlc3RvciggcG9zaXRpb24gKSB7XG5cdHJldHVybiBwb3NpdGlvbi5nZXRBbmNlc3RvcnMoKS5maW5kKCBhbmNlc3RvciA9PiBpc0xpbmtFbGVtZW50KCBhbmNlc3RvciApICk7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlIENvcHlyaWdodCAoYykgMjAwMy0yMDIxLCBDS1NvdXJjZSAtIEZyZWRlcmljbyBLbmFiYmVuLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogRm9yIGxpY2Vuc2luZywgc2VlIExJQ0VOU0UubWQgb3IgaHR0cHM6Ly9ja2VkaXRvci5jb20vbGVnYWwvY2tlZGl0b3Itb3NzLWxpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGluay9saW5rXG4gKi9cblxuaW1wb3J0IFBsdWdpbiBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWNvcmUvc3JjL3BsdWdpbic7XG5pbXBvcnQgVGVtcGxhdGVFZGl0aW5nIGZyb20gJy4vdGVtcGxhdGUtZWRpdGluZyc7XG5pbXBvcnQgVGVtcGxhdGVVaSBmcm9tICcuL3RlbXBsYXRlLXVpJztcblxuLyoqXG4gKiBUaGUgbGluayBwbHVnaW4uXG4gKlxuICogVGhpcyBpcyBhIFwiZ2x1ZVwiIHBsdWdpbiB0aGF0IGxvYWRzIHRoZSB7QGxpbmsgbW9kdWxlOmxpbmsvbGlua2VkaXRpbmd+TGlua0VkaXRpbmcgbGluayBlZGl0aW5nIGZlYXR1cmV9XG4gKiBhbmQge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt1aX5UZW1wbGF0ZVVpIGxpbmsgVUkgZmVhdHVyZX0uXG4gKlxuICogQGV4dGVuZHMgbW9kdWxlOmNvcmUvcGx1Z2luflBsdWdpblxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZW1wbGF0ZSBleHRlbmRzIFBsdWdpbiB7XG5cdC8qKlxuXHQgKiBAaW5oZXJpdERvY1xuXHQgKi9cblx0c3RhdGljIGdldCByZXF1aXJlcygpIHtcblx0XHRyZXR1cm4gWyBUZW1wbGF0ZUVkaXRpbmcsIFRlbXBsYXRlVWkgXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5oZXJpdERvY1xuXHQgKi9cblx0c3RhdGljIGdldCBwbHVnaW5OYW1lKCkge1xuXHRcdHJldHVybiAnVGV4dFRlbXBsYXRpbmcnO1xuXHR9XG59XG5cbi8qKlxuICogVGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIHtAbGluayBtb2R1bGU6bGluay9saW5rfkxpbmt9IGZlYXR1cmUuXG4gKlxuICogUmVhZCBtb3JlIGluIHtAbGluayBtb2R1bGU6bGluay9saW5rfkxpbmtDb25maWd9LlxuICpcbiAqIEBtZW1iZXIge21vZHVsZTpsaW5rL2xpbmt+TGlua0NvbmZpZ30gbW9kdWxlOmNvcmUvZWRpdG9yL2VkaXRvcmNvbmZpZ35FZGl0b3JDb25maWcjbGlua1xuICovXG5cbi8qKlxuICogVGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIHtAbGluayBtb2R1bGU6bGluay9saW5rfkxpbmsgbGluayBmZWF0dXJlfS5cbiAqXG4gKlx0XHRDbGFzc2ljRWRpdG9yXG4gKlx0XHRcdC5jcmVhdGUoIGVkaXRvckVsZW1lbnQsIHtcbiAqIFx0XHRcdFx0bGluazogIC4uLiAvLyBUZW1wbGF0ZSBmZWF0dXJlIGNvbmZpZ3VyYXRpb24uXG4gKlx0XHRcdH0gKVxuICpcdFx0XHQudGhlbiggLi4uIClcbiAqXHRcdFx0LmNhdGNoKCAuLi4gKTtcbiAqXG4gKiBTZWUge0BsaW5rIG1vZHVsZTpjb3JlL2VkaXRvci9lZGl0b3Jjb25maWd+RWRpdG9yQ29uZmlnIGFsbCBlZGl0b3Igb3B0aW9uc30uXG4gKiBAaW50ZXJmYWNlIExpbmtDb25maWdcbiAqL1xuXG4vKipcbiAqIFdoZW4gc2V0LCB0aGUgZWRpdG9yIHdpbGwgYWRkIHRoZSBnaXZlbiBwcm90b2NvbCB0byB0aGUgbGluayB3aGVuIHRoZSB1c2VyIGNyZWF0ZXMgYSBsaW5rIHdpdGhvdXQgb25lLlxuICogRm9yIGV4YW1wbGUsIHdoZW4gdGhlIHVzZXIgaXMgY3JlYXRpbmcgYSBsaW5rIGFuZCB0eXBlcyBgY2tlZGl0b3IuY29tYCBpbiB0aGUgbGluayBmb3JtIGlucHV0LCBkdXJpbmcgbGluayBzdWJtaXNzaW9uXG4gKiB0aGUgZWRpdG9yIHdpbGwgYXV0b21hdGljYWxseSBhZGQgdGhlIGBodHRwOi8vYCBwcm90b2NvbCwgc28gdGhlIGxpbmsgd2lsbCBsb29rIGFzIGZvbGxvd3M6IGBodHRwOi8vY2tlZGl0b3IuY29tYC5cbiAqXG4gKiBUaGUgZmVhdHVyZSBhbHNvIHByb3ZpZGVzIGVtYWlsIGFkZHJlc3MgYXV0by1kZXRlY3Rpb24uIFdoZW4geW91IHN1Ym1pdCBgaGVsbG9AZXhhbXBsZS5jb21gLFxuICogdGhlIHBsdWdpbiB3aWxsIGF1dG9tYXRpY2FsbHkgY2hhbmdlIGl0IHRvIGBtYWlsdG86aGVsbG9AZXhhbXBsZS5jb21gLlxuICpcbiAqIFx0XHRDbGFzc2ljRWRpdG9yXG4gKlx0XHRcdC5jcmVhdGUoIGVkaXRvckVsZW1lbnQsIHtcbiAqIFx0XHRcdFx0bGluazoge1xuICogXHRcdFx0XHRcdGRlZmF1bHRQcm90b2NvbDogJ2h0dHA6Ly8nXG4gKiBcdFx0XHRcdH1cbiAqXHRcdFx0fSApXG4gKlx0XHRcdC50aGVuKCAuLi4gKVxuICpcdFx0XHQuY2F0Y2goIC4uLiApO1xuICpcbiAqICoqTk9URToqKiBJZiBubyBjb25maWd1cmF0aW9uIGlzIHByb3ZpZGVkLCB0aGUgZWRpdG9yIHdpbGwgbm90IGF1dG8tZml4IHRoZSBsaW5rcy5cbiAqXG4gKiBAbWVtYmVyIHtTdHJpbmd9IG1vZHVsZTpsaW5rL2xpbmt+TGlua0NvbmZpZyNkZWZhdWx0UHJvdG9jb2xcbiAqL1xuXG4vKipcbiAqIFdoZW4gc2V0IHRvIGB0cnVlYCwgdGhlIGB0YXJnZXQ9XCJibGFua1wiYCBhbmQgYHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcImAgYXR0cmlidXRlcyBhcmUgYXV0b21hdGljYWxseSBhZGRlZCB0byBhbGwgZXh0ZXJuYWwgbGlua3NcbiAqIGluIHRoZSBlZGl0b3IuIFwiRXh0ZXJuYWwgbGlua3NcIiBhcmUgYWxsIGxpbmtzIGluIHRoZSBlZGl0b3IgY29udGVudCBzdGFydGluZyB3aXRoIGBodHRwYCwgYGh0dHBzYCwgb3IgYC8vYC5cbiAqXG4gKlx0XHRDbGFzc2ljRWRpdG9yXG4gKlx0XHRcdC5jcmVhdGUoIGVkaXRvckVsZW1lbnQsIHtcbiAqXHRcdFx0XHRsaW5rOiB7XG4gKlx0XHRcdFx0XHRhZGRUYXJnZXRUb0V4dGVybmFsTGlua3M6IHRydWVcbiAqXHRcdFx0XHR9XG4gKlx0XHRcdH0gKVxuICpcdFx0XHQudGhlbiggLi4uIClcbiAqXHRcdFx0LmNhdGNoKCAuLi4gKTtcbiAqXG4gKiBJbnRlcm5hbGx5LCB0aGlzIG9wdGlvbiBhY3RpdmF0ZXMgYSBwcmVkZWZpbmVkIHtAbGluayBtb2R1bGU6bGluay9saW5rfkxpbmtDb25maWcjZGVjb3JhdG9ycyBhdXRvbWF0aWMgbGluayBkZWNvcmF0b3J9XG4gKiB0aGF0IGV4dGVuZHMgYWxsIGV4dGVybmFsIGxpbmtzIHdpdGggdGhlIGB0YXJnZXRgIGFuZCBgcmVsYCBhdHRyaWJ1dGVzLlxuICpcbiAqICoqTm90ZSoqOiBUbyBjb250cm9sIHRoZSBgdGFyZ2V0YCBhbmQgYHJlbGAgYXR0cmlidXRlcyBvZiBzcGVjaWZpYyBsaW5rcyBpbiB0aGUgZWRpdGVkIGNvbnRlbnQsIGEgZGVkaWNhdGVkXG4gKiB7QGxpbmsgbW9kdWxlOmxpbmsvbGlua35MaW5rRGVjb3JhdG9yTWFudWFsRGVmaW5pdGlvbiBtYW51YWx9IGRlY29yYXRvciBtdXN0IGJlIGRlZmluZWQgaW4gdGhlXG4gKiB7QGxpbmsgbW9kdWxlOmxpbmsvbGlua35MaW5rQ29uZmlnI2RlY29yYXRvcnMgYGNvbmZpZy5saW5rLmRlY29yYXRvcnNgfSBhcnJheS4gSW4gc3VjaCBzY2VuYXJpbyxcbiAqIHRoZSBgY29uZmlnLmxpbmsuYWRkVGFyZ2V0VG9FeHRlcm5hbExpbmtzYCBvcHRpb24gc2hvdWxkIHJlbWFpbiBgdW5kZWZpbmVkYCBvciBgZmFsc2VgIHRvIG5vdCBpbnRlcmZlcmUgd2l0aCB0aGUgbWFudWFsIGRlY29yYXRvci5cbiAqXG4gKiBJdCBpcyBwb3NzaWJsZSB0byBhZGQgb3RoZXIge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt+TGlua0RlY29yYXRvckF1dG9tYXRpY0RlZmluaXRpb24gYXV0b21hdGljfVxuICogb3Ige0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt+TGlua0RlY29yYXRvck1hbnVhbERlZmluaXRpb24gbWFudWFsfSBsaW5rIGRlY29yYXRvcnMgd2hlbiB0aGlzIG9wdGlvbiBpcyBhY3RpdmUuXG4gKlxuICogTW9yZSBpbmZvcm1hdGlvbiBhYm91dCBkZWNvcmF0b3JzIGNhbiBiZSBmb3VuZCBpbiB0aGUge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt+TGlua0NvbmZpZyNkZWNvcmF0b3JzIGRlY29yYXRvcnMgY29uZmlndXJhdGlvbn1cbiAqIHJlZmVyZW5jZS5cbiAqXG4gKiBAZGVmYXVsdCBmYWxzZVxuICogQG1lbWJlciB7Qm9vbGVhbn0gbW9kdWxlOmxpbmsvbGlua35MaW5rQ29uZmlnI2FkZFRhcmdldFRvRXh0ZXJuYWxMaW5rc1xuICovXG5cbi8qKlxuICogRGVjb3JhdG9ycyBwcm92aWRlIGFuIGVhc3kgd2F5IHRvIGNvbmZpZ3VyZSBhbmQgbWFuYWdlIGFkZGl0aW9uYWwgbGluayBhdHRyaWJ1dGVzIGluIHRoZSBlZGl0b3IgY29udGVudC4gVGhlcmUgYXJlXG4gKiB0d28gdHlwZXMgb2YgbGluayBkZWNvcmF0b3JzOlxuICpcbiAqICoge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt+TGlua0RlY29yYXRvckF1dG9tYXRpY0RlZmluaXRpb24gQXV0b21hdGljfSAmbmRhc2g7IFRoZXkgbWF0Y2ggbGlua3MgYWdhaW5zdCBwcmXigJNkZWZpbmVkIHJ1bGVzIGFuZFxuICogbWFuYWdlIHRoZWlyIGF0dHJpYnV0ZXMgYmFzZWQgb24gdGhlIHJlc3VsdHMuXG4gKiAqIHtAbGluayBtb2R1bGU6bGluay9saW5rfkxpbmtEZWNvcmF0b3JNYW51YWxEZWZpbml0aW9uIE1hbnVhbH0gJm5kYXNoOyBUaGV5IGFsbG93IHVzZXJzIHRvIGNvbnRyb2wgbGluayBhdHRyaWJ1dGVzIGluZGl2aWR1YWxseSxcbiAqICB1c2luZyB0aGUgZWRpdG9yIFVJLlxuICpcbiAqIFRlbXBsYXRlIGRlY29yYXRvcnMgYXJlIGRlZmluZWQgYXMgb2JqZWN0cyB3aXRoIGtleS12YWx1ZSBwYWlycywgd2hlcmUgdGhlIGtleSBpcyB0aGUgbmFtZSBwcm92aWRlZCBmb3IgYSBnaXZlbiBkZWNvcmF0b3IgYW5kIHRoZVxuICogdmFsdWUgaXMgdGhlIGRlY29yYXRvciBkZWZpbml0aW9uLlxuICpcbiAqIFRoZSBuYW1lIG9mIHRoZSBkZWNvcmF0b3IgYWxzbyBjb3JyZXNwb25kcyB0byB0aGUge0BnbGluayBmcmFtZXdvcmsvZ3VpZGVzL2FyY2hpdGVjdHVyZS9lZGl0aW5nLWVuZ2luZSN0ZXh0LWF0dHJpYnV0ZXMgdGV4dCBhdHRyaWJ1dGV9XG4gKiBpbiB0aGUgbW9kZWwuIEZvciBpbnN0YW5jZSwgdGhlIGBpc0V4dGVybmFsYCBkZWNvcmF0b3IgYmVsb3cgaXMgcmVwcmVzZW50ZWQgYXMgYSBgbGlua0lzRXh0ZXJuYWxgIGF0dHJpYnV0ZSBpbiB0aGUgbW9kZWwuXG4gKlxuICpcdFx0Q2xhc3NpY0VkaXRvclxuICpcdFx0XHQuY3JlYXRlKCBlZGl0b3JFbGVtZW50LCB7XG4gKlx0XHRcdFx0bGluazoge1xuICpcdFx0XHRcdFx0ZGVjb3JhdG9yczoge1xuICpcdFx0XHRcdFx0XHRpc0V4dGVybmFsOiB7XG4gKlx0XHRcdFx0XHRcdFx0bW9kZTogJ2F1dG9tYXRpYycsXG4gKlx0XHRcdFx0XHRcdFx0Y2FsbGJhY2s6IHVybCA9PiB1cmwuc3RhcnRzV2l0aCggJ2h0dHA6Ly8nICksXG4gKlx0XHRcdFx0XHRcdFx0YXR0cmlidXRlczoge1xuICpcdFx0XHRcdFx0XHRcdFx0dGFyZ2V0OiAnX2JsYW5rJyxcbiAqXHRcdFx0XHRcdFx0XHRcdHJlbDogJ25vb3BlbmVyIG5vcmVmZXJyZXInXG4gKlx0XHRcdFx0XHRcdFx0fVxuICpcdFx0XHRcdFx0XHR9LFxuICpcdFx0XHRcdFx0XHRpc0Rvd25sb2FkYWJsZToge1xuICpcdFx0XHRcdFx0XHRcdG1vZGU6ICdtYW51YWwnLFxuICpcdFx0XHRcdFx0XHRcdGxhYmVsOiAnRG93bmxvYWRhYmxlJyxcbiAqXHRcdFx0XHRcdFx0XHRhdHRyaWJ1dGVzOiB7XG4gKlx0XHRcdFx0XHRcdFx0XHRkb3dubG9hZDogJ2ZpbGUucG5nJyxcbiAqXHRcdFx0XHRcdFx0XHR9XG4gKlx0XHRcdFx0XHRcdH0sXG4gKlx0XHRcdFx0XHRcdC8vIC4uLlxuICpcdFx0XHRcdFx0fVxuICpcdFx0XHRcdH1cbiAqXHRcdFx0fSApXG4gKlx0XHRcdC50aGVuKCAuLi4gKVxuICpcdFx0XHQuY2F0Y2goIC4uLiApO1xuICpcbiAqIFRvIGxlYXJuIG1vcmUgYWJvdXQgdGhlIGNvbmZpZ3VyYXRpb24gc3ludGF4LCBjaGVjayBvdXQgdGhlIHtAbGluayBtb2R1bGU6bGluay9saW5rfkxpbmtEZWNvcmF0b3JBdXRvbWF0aWNEZWZpbml0aW9uIGF1dG9tYXRpY31cbiAqIGFuZCB7QGxpbmsgbW9kdWxlOmxpbmsvbGlua35MaW5rRGVjb3JhdG9yTWFudWFsRGVmaW5pdGlvbiBtYW51YWx9IGRlY29yYXRvciBvcHRpb24gcmVmZXJlbmNlLlxuICpcbiAqICoqV2FybmluZzoqKiBDdXJyZW50bHksIGxpbmsgZGVjb3JhdG9ycyB3b3JrIGluZGVwZW5kZW50bHkgb2Ygb25lIGFub3RoZXIgYW5kIG5vIGNvbmZsaWN0IHJlc29sdXRpb24gbWVjaGFuaXNtIGV4aXN0cy5cbiAqIEZvciBleGFtcGxlLCBjb25maWd1cmluZyB0aGUgYHRhcmdldGAgYXR0cmlidXRlIHVzaW5nIGJvdGggYW4gYXV0b21hdGljIGFuZCBhIG1hbnVhbCBkZWNvcmF0b3IgYXQgdGhlIHNhbWUgdGltZSBjb3VsZCBlbmQgdXAgd2l0aFxuICogcXVpcmt5IHJlc3VsdHMuIFRoZSBzYW1lIGFwcGxpZXMgaWYgbXVsdGlwbGUgbWFudWFsIG9yIGF1dG9tYXRpYyBkZWNvcmF0b3JzIHdlcmUgZGVmaW5lZCBmb3IgdGhlIHNhbWUgYXR0cmlidXRlLlxuICpcbiAqICoqTm90ZSoqOiBTaW5jZSB0aGUgYHRhcmdldGAgYXR0cmlidXRlIG1hbmFnZW1lbnQgZm9yIGV4dGVybmFsIGxpbmtzIGlzIGEgY29tbW9uIHVzZSBjYXNlLCB0aGVyZSBpcyBhIHByZWRlZmluZWQgYXV0b21hdGljIGRlY29yYXRvclxuICogZGVkaWNhdGVkIGZvciB0aGF0IHB1cnBvc2Ugd2hpY2ggY2FuIGJlIGVuYWJsZWQgYnkgdHVybmluZyBhIHNpbmdsZSBvcHRpb24gb24uIENoZWNrIG91dCB0aGVcbiAqIHtAbGluayBtb2R1bGU6bGluay9saW5rfkxpbmtDb25maWcjYWRkVGFyZ2V0VG9FeHRlcm5hbExpbmtzIGBjb25maWcubGluay5hZGRUYXJnZXRUb0V4dGVybmFsTGlua3NgfVxuICogY29uZmlndXJhdGlvbiBkZXNjcmlwdGlvbiB0byBsZWFybiBtb3JlLlxuICpcbiAqIFNlZSBhbHNvIHRoZSB7QGdsaW5rIGZlYXR1cmVzL2xpbmsjY3VzdG9tLWxpbmstYXR0cmlidXRlcy1kZWNvcmF0b3JzIGxpbmsgZmVhdHVyZSBndWlkZX0gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogQG1lbWJlciB7T2JqZWN0LjxTdHJpbmcsIG1vZHVsZTpsaW5rL2xpbmt+TGlua0RlY29yYXRvckRlZmluaXRpb24+fSBtb2R1bGU6bGluay9saW5rfkxpbmtDb25maWcjZGVjb3JhdG9yc1xuICovXG5cbi8qKlxuICogQSBsaW5rIGRlY29yYXRvciBkZWZpbml0aW9uLiBUd28gdHlwZXMgaW1wbGVtZW50IHRoaXMgZGVmaXRpb246XG4gKlxuICogKiB7QGxpbmsgbW9kdWxlOmxpbmsvbGlua35MaW5rRGVjb3JhdG9yTWFudWFsRGVmaW5pdGlvbn1cbiAqICoge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt+TGlua0RlY29yYXRvckF1dG9tYXRpY0RlZmluaXRpb259XG4gKlxuICogUmVmZXIgdG8gdGhlaXIgZG9jdW1lbnQgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgYXZhaWxhYmxlIG9wdGlvbnMgb3IgdG8gdGhlXG4gKiB7QGdsaW5rIGZlYXR1cmVzL2xpbmsjY3VzdG9tLWxpbmstYXR0cmlidXRlcy1kZWNvcmF0b3JzIGxpbmsgZmVhdHVyZSBndWlkZX0gZm9yIGdlbmVyYWwgaW5mb3JtYXRpb24uXG4gKlxuICogQGludGVyZmFjZSBMaW5rRGVjb3JhdG9yRGVmaW5pdGlvblxuICovXG5cbi8qKlxuICogVGVtcGxhdGUgZGVjb3JhdG9yIHR5cGUuXG4gKlxuICogQ2hlY2sgb3V0IHRoZSB7QGdsaW5rIGZlYXR1cmVzL2xpbmsjY3VzdG9tLWxpbmstYXR0cmlidXRlcy1kZWNvcmF0b3JzIGxpbmsgZmVhdHVyZSBndWlkZX0gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogQG1lbWJlciB7J21hbnVhbCd8J2F1dG9tYXRpYyd9IG1vZHVsZTpsaW5rL2xpbmt+TGlua0RlY29yYXRvckRlZmluaXRpb24jbW9kZVxuICovXG5cbi8qKlxuICogRGVzY3JpYmVzIGFuIGF1dG9tYXRpYyB7QGxpbmsgbW9kdWxlOmxpbmsvbGlua35MaW5rQ29uZmlnI2RlY29yYXRvcnMgbGluayBkZWNvcmF0b3J9LiBUaGlzIGRlY29yYXRvciB0eXBlIG1hdGNoZXNcbiAqIGFsbCBsaW5rcyBpbiB0aGUgZWRpdG9yIGNvbnRlbnQgYWdhaW5zdCBhIGZ1bmN0aW9uIHRoYXQgZGVjaWRlcyB3aGV0aGVyIHRoZSBsaW5rIHNob3VsZCByZWNlaXZlIGEgcHJl4oCTZGVmaW5lZCBzZXQgb2YgYXR0cmlidXRlcy5cbiAqXG4gKiBJdCB0YWtlcyBhbiBvYmplY3Qgd2l0aCBrZXktdmFsdWUgcGFpcnMgb2YgYXR0cmlidXRlcyBhbmQgYSBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IG11c3QgcmV0dXJuIGEgQm9vbGVhbiB2YWx1ZSBiYXNlZCBvbiB0aGUgbGluaydzXG4gKiBgaHJlZmAgKFVSTCkuIFdoZW4gdGhlIGNhbGxiYWNrIHJldHVybnMgYHRydWVgLCBhdHRyaWJ1dGVzIGFyZSBhcHBsaWVkIHRvIHRoZSBsaW5rLlxuICpcbiAqIEZvciBleGFtcGxlLCB0byBhZGQgdGhlIGB0YXJnZXQ9XCJfYmxhbmtcImAgYXR0cmlidXRlIHRvIGFsbCBsaW5rcyBpbiB0aGUgZWRpdG9yIHN0YXJ0aW5nIHdpdGggYGh0dHA6Ly9gLCB0aGVcbiAqIGNvbmZpZ3VyYXRpb24gY291bGQgbG9vayBsaWtlIHRoaXM6XG4gKlxuICpcdFx0e1xuICpcdFx0XHRtb2RlOiAnYXV0b21hdGljJyxcbiAqXHRcdFx0Y2FsbGJhY2s6IHVybCA9PiB1cmwuc3RhcnRzV2l0aCggJ2h0dHA6Ly8nICksXG4gKlx0XHRcdGF0dHJpYnV0ZXM6IHtcbiAqXHRcdFx0XHR0YXJnZXQ6ICdfYmxhbmsnXG4gKlx0XHRcdH1cbiAqXHRcdH1cbiAqXG4gKiAqKk5vdGUqKjogU2luY2UgdGhlIGB0YXJnZXRgIGF0dHJpYnV0ZSBtYW5hZ2VtZW50IGZvciBleHRlcm5hbCBsaW5rcyBpcyBhIGNvbW1vbiB1c2UgY2FzZSwgdGhlcmUgaXMgYSBwcmVkZWZpbmVkIGF1dG9tYXRpYyBkZWNvcmF0b3JcbiAqIGRlZGljYXRlZCBmb3IgdGhhdCBwdXJwb3NlIHRoYXQgY2FuIGJlIGVuYWJsZWQgYnkgdHVybmluZyBhIHNpbmdsZSBvcHRpb24gb24uIENoZWNrIG91dCB0aGVcbiAqIHtAbGluayBtb2R1bGU6bGluay9saW5rfkxpbmtDb25maWcjYWRkVGFyZ2V0VG9FeHRlcm5hbExpbmtzIGBjb25maWcubGluay5hZGRUYXJnZXRUb0V4dGVybmFsTGlua3NgfVxuICogY29uZmlndXJhdGlvbiBkZXNjcmlwdGlvbiB0byBsZWFybiBtb3JlLlxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IG1vZHVsZTpsaW5rL2xpbmt+TGlua0RlY29yYXRvckF1dG9tYXRpY0RlZmluaXRpb25cbiAqIEBwcm9wZXJ0eSB7J2F1dG9tYXRpYyd9IG1vZGUgVGVtcGxhdGUgZGVjb3JhdG9yIHR5cGUuIEl0IGlzIGAnYXV0b21hdGljJ2AgZm9yIGFsbCBhdXRvbWF0aWMgZGVjb3JhdG9ycy5cbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNhbGxiYWNrIFRha2VzIGEgYHVybGAgYXMgYSBwYXJhbWV0ZXIgYW5kIHJldHVybnMgYHRydWVgIGlmIHRoZSBgYXR0cmlidXRlc2Agc2hvdWxkIGJlIGFwcGxpZWQgdG8gdGhlIGxpbmsuXG4gKiBAcHJvcGVydHkge09iamVjdH0gYXR0cmlidXRlcyBLZXktdmFsdWUgcGFpcnMgdXNlZCBhcyBsaW5rIGF0dHJpYnV0ZXMgYWRkZWQgdG8gdGhlIG91dHB1dCBkdXJpbmcgdGhlXG4gKiB7QGdsaW5rIGZyYW1ld29yay9ndWlkZXMvYXJjaGl0ZWN0dXJlL2VkaXRpbmctZW5naW5lI2NvbnZlcnNpb24gZG93bmNhc3Rpbmd9LlxuICogQXR0cmlidXRlcyBzaG91bGQgZm9sbG93IHRoZSB7QGxpbmsgbW9kdWxlOmVuZ2luZS92aWV3L2VsZW1lbnRkZWZpbml0aW9ufkVsZW1lbnREZWZpbml0aW9ufSBzeW50YXguXG4gKi9cblxuLyoqXG4gKiBEZXNjcmliZXMgYSBtYW51YWwge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt+TGlua0NvbmZpZyNkZWNvcmF0b3JzIGxpbmsgZGVjb3JhdG9yfS4gVGhpcyBkZWNvcmF0b3IgdHlwZSBpcyByZXByZXNlbnRlZCBpblxuICogdGhlIGxpbmsgZmVhdHVyZSdzIHtAbGluayBtb2R1bGU6bGluay9saW5rdWkgdXNlciBpbnRlcmZhY2V9IGFzIGEgc3dpdGNoIHRoYXQgdGhlIHVzZXIgY2FuIHVzZSB0byBjb250cm9sIHRoZSBwcmVzZW5jZVxuICogb2YgYSBwcmVkZWZpbmVkIHNldCBvZiBhdHRyaWJ1dGVzLlxuICpcbiAqIEZvciBpbnN0YW5jZSwgdG8gYWxsb3cgdGhlIHVzZXJzIHRvIG1hbnVhbGx5IGNvbnRyb2wgdGhlIHByZXNlbmNlIG9mIHRoZSBgdGFyZ2V0PVwiX2JsYW5rXCJgIGFuZFxuICogYHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcImAgYXR0cmlidXRlcyBvbiBzcGVjaWZpYyBsaW5rcywgdGhlIGRlY29yYXRvciBjb3VsZCBsb29rIGFzIGZvbGxvd3M6XG4gKlxuICpcdFx0e1xuICpcdFx0XHRtb2RlOiAnbWFudWFsJyxcbiAqXHRcdFx0bGFiZWw6ICdPcGVuIGluIGEgbmV3IHRhYicsXG4gKlx0XHRcdGRlZmF1bHRWYWx1ZTogdHJ1ZSxcbiAqXHRcdFx0YXR0cmlidXRlczoge1xuICpcdFx0XHRcdHRhcmdldDogJ19ibGFuaycsXG4gKlx0XHRcdFx0cmVsOiAnbm9vcGVuZXIgbm9yZWZlcnJlcidcbiAqXHRcdFx0fVxuICpcdFx0fVxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IG1vZHVsZTpsaW5rL2xpbmt+TGlua0RlY29yYXRvck1hbnVhbERlZmluaXRpb25cbiAqIEBwcm9wZXJ0eSB7J21hbnVhbCd9IG1vZGUgVGVtcGxhdGUgZGVjb3JhdG9yIHR5cGUuIEl0IGlzIGAnbWFudWFsJ2AgZm9yIGFsbCBtYW51YWwgZGVjb3JhdG9ycy5cbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBsYWJlbCBUaGUgbGFiZWwgb2YgdGhlIFVJIGJ1dHRvbiB0aGF0IHRoZSB1c2VyIGNhbiB1c2UgdG8gY29udHJvbCB0aGUgcHJlc2VuY2Ugb2YgbGluayBhdHRyaWJ1dGVzLlxuICogQHByb3BlcnR5IHtPYmplY3R9IGF0dHJpYnV0ZXMgS2V5LXZhbHVlIHBhaXJzIHVzZWQgYXMgbGluayBhdHRyaWJ1dGVzIGFkZGVkIHRvIHRoZSBvdXRwdXQgZHVyaW5nIHRoZVxuICoge0BnbGluayBmcmFtZXdvcmsvZ3VpZGVzL2FyY2hpdGVjdHVyZS9lZGl0aW5nLWVuZ2luZSNjb252ZXJzaW9uIGRvd25jYXN0aW5nfS5cbiAqIEF0dHJpYnV0ZXMgc2hvdWxkIGZvbGxvdyB0aGUge0BsaW5rIG1vZHVsZTplbmdpbmUvdmlldy9lbGVtZW50ZGVmaW5pdGlvbn5FbGVtZW50RGVmaW5pdGlvbn0gc3ludGF4LlxuICogQHByb3BlcnR5IHtCb29sZWFufSBbZGVmYXVsdFZhbHVlXSBDb250cm9scyB3aGV0aGVyIHRoZSBkZWNvcmF0b3IgaXMgXCJvblwiIGJ5IGRlZmF1bHQuXG4gKi9cbiIsIi8qKlxuICogQGxpY2Vuc2UgQ29weXJpZ2h0IChjKSAyMDAzLTIwMjEsIENLU291cmNlIC0gRnJlZGVyaWNvIEtuYWJiZW4uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBGb3IgbGljZW5zaW5nLCBzZWUgTElDRU5TRS5tZCBvciBodHRwczovL2NrZWRpdG9yLmNvbS9sZWdhbC9ja2VkaXRvci1vc3MtbGljZW5zZVxuICovXG5cbi8qKlxuICogQG1vZHVsZSBsaW5rL3VpL2xpbmthY3Rpb25zdmlld1xuICovXG5cbmltcG9ydCB7IEJ1dHRvblZpZXcsIFZpZXcsIFZpZXdDb2xsZWN0aW9uLCBGb2N1c0N5Y2xlciB9IGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtdWkvc3JjJztcbmltcG9ydCB7IEZvY3VzVHJhY2tlciwgS2V5c3Ryb2tlSGFuZGxlciB9IGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtdXRpbHMvc3JjJztcbmltcG9ydCB7IGljb25zIH0gZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1jb3JlL3NyYyc7XG5cbmltcG9ydCB7IGVuc3VyZVNhZmVVcmwgfSBmcm9tICcuLi91dGlscyc7XG5cbi8vIFNlZTogIzg4MzMuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2tlZGl0b3I1LXJ1bGVzL2NrZWRpdG9yLWltcG9ydHNcbmltcG9ydCAnQGNrZWRpdG9yL2NrZWRpdG9yNS11aS90aGVtZS9jb21wb25lbnRzL3Jlc3BvbnNpdmUtZm9ybS9yZXNwb25zaXZlZm9ybS5jc3MnO1xuaW1wb3J0ICcuLi8uLi90aGVtZS90ZW1wbGF0ZWFjdGlvbnMuY3NzJztcblxuaW1wb3J0IHVubGlua0ljb24gZnJvbSAnLi4vLi4vdGhlbWUvaWNvbnMvdW5saW5rLnN2Zyc7XG5cbi8qKlxuICogVGhlIGxpbmsgYWN0aW9ucyB2aWV3IGNsYXNzLiBUaGlzIHZpZXcgZGlzcGxheXMgdGhlIGxpbmsgcHJldmlldywgYWxsb3dzXG4gKiB1bmxpbmtpbmcgb3IgZWRpdGluZyB0aGUgbGluay5cbiAqXG4gKiBAZXh0ZW5kcyBtb2R1bGU6dWkvdmlld35WaWV3XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlbXBsYXRlQWN0aW9uc1ZpZXcgZXh0ZW5kcyBWaWV3IHtcblx0LyoqXG5cdCAqIEBpbmhlcml0RG9jXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggbG9jYWxlICkge1xuXHRcdHN1cGVyKCBsb2NhbGUgKTtcblxuXHRcdGNvbnN0IHQgPSBsb2NhbGUudDtcblxuXHRcdC8qKlxuXHRcdCAqIFRyYWNrcyBpbmZvcm1hdGlvbiBhYm91dCBET00gZm9jdXMgaW4gdGhlIGFjdGlvbnMuXG5cdFx0ICpcblx0XHQgKiBAcmVhZG9ubHlcblx0XHQgKiBAbWVtYmVyIHttb2R1bGU6dXRpbHMvZm9jdXN0cmFja2VyfkZvY3VzVHJhY2tlcn1cblx0XHQgKi9cblx0XHR0aGlzLmZvY3VzVHJhY2tlciA9IG5ldyBGb2N1c1RyYWNrZXIoKTtcblxuXHRcdC8qKlxuXHRcdCAqIEFuIGluc3RhbmNlIG9mIHRoZSB7QGxpbmsgbW9kdWxlOnV0aWxzL2tleXN0cm9rZWhhbmRsZXJ+S2V5c3Ryb2tlSGFuZGxlcn0uXG5cdFx0ICpcblx0XHQgKiBAcmVhZG9ubHlcblx0XHQgKiBAbWVtYmVyIHttb2R1bGU6dXRpbHMva2V5c3Ryb2tlaGFuZGxlcn5LZXlzdHJva2VIYW5kbGVyfVxuXHRcdCAqL1xuXHRcdHRoaXMua2V5c3Ryb2tlcyA9IG5ldyBLZXlzdHJva2VIYW5kbGVyKCk7XG5cblx0XHQvKipcblx0XHQgKiBUaGUgaHJlZiBwcmV2aWV3IHZpZXcuXG5cdFx0ICpcblx0XHQgKiBAbWVtYmVyIHttb2R1bGU6dWkvdmlld35WaWV3fVxuXHRcdCAqL1xuXHRcdHRoaXMucHJldmlld0J1dHRvblZpZXcgPSB0aGlzLl9jcmVhdGVQcmV2aWV3QnV0dG9uKCk7XG5cblx0XHQvKipcblx0XHQgKiBUaGUgdW5saW5rIGJ1dHRvbiB2aWV3LlxuXHRcdCAqXG5cdFx0ICogQG1lbWJlciB7bW9kdWxlOnVpL2J1dHRvbi9idXR0b252aWV3fkJ1dHRvblZpZXd9XG5cdFx0ICovXG5cdFx0dGhpcy51bmxpbmtCdXR0b25WaWV3ID0gdGhpcy5fY3JlYXRlQnV0dG9uKCB0KCAnQ2FuY2VsIFRlbXBsYXRlIFZhcicgKSwgdW5saW5rSWNvbiwgJ2NhbmNlbFRlbXBsYXRlJyApO1xuXG5cdFx0LyoqXG5cdFx0ICogVGhlIGVkaXQgbGluayBidXR0b24gdmlldy5cblx0XHQgKlxuXHRcdCAqIEBtZW1iZXIge21vZHVsZTp1aS9idXR0b24vYnV0dG9udmlld35CdXR0b25WaWV3fVxuXHRcdCAqL1xuXHRcdHRoaXMuZWRpdEJ1dHRvblZpZXcgPSB0aGlzLl9jcmVhdGVCdXR0b24oIHQoICdFZGl0IFRlbXBsYXRlIFZhcicgKSwgaWNvbnMucGVuY2lsLCAnZWRpdCcgKTtcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSB2YWx1ZSBvZiB0aGUgXCJocmVmXCIgYXR0cmlidXRlIG9mIHRoZSBsaW5rIHRvIHVzZSBpbiB0aGUge0BsaW5rICNwcmV2aWV3QnV0dG9uVmlld30uXG5cdFx0ICpcblx0XHQgKiBAb2JzZXJ2YWJsZVxuXHRcdCAqIEBtZW1iZXIge1N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnNldCggJ2RhdGEtdGVtcGxhdGUtdmFyJyApO1xuXG5cdFx0LyoqXG5cdFx0ICogQSBjb2xsZWN0aW9uIG9mIHZpZXdzIHRoYXQgY2FuIGJlIGZvY3VzZWQgaW4gdGhlIHZpZXcuXG5cdFx0ICpcblx0XHQgKiBAcmVhZG9ubHlcblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQG1lbWJlciB7bW9kdWxlOnVpL3ZpZXdjb2xsZWN0aW9uflZpZXdDb2xsZWN0aW9ufVxuXHRcdCAqL1xuXHRcdHRoaXMuX2ZvY3VzYWJsZXMgPSBuZXcgVmlld0NvbGxlY3Rpb24oKTtcblxuXHRcdC8qKlxuXHRcdCAqIEhlbHBzIGN5Y2xpbmcgb3ZlciB7QGxpbmsgI19mb2N1c2FibGVzfSBpbiB0aGUgdmlldy5cblx0XHQgKlxuXHRcdCAqIEByZWFkb25seVxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAbWVtYmVyIHttb2R1bGU6dWkvZm9jdXNjeWNsZXJ+Rm9jdXNDeWNsZXJ9XG5cdFx0ICovXG5cdFx0dGhpcy5fZm9jdXNDeWNsZXIgPSBuZXcgRm9jdXNDeWNsZXIoIHtcblx0XHRcdGZvY3VzYWJsZXM6IHRoaXMuX2ZvY3VzYWJsZXMsXG5cdFx0XHRmb2N1c1RyYWNrZXI6IHRoaXMuZm9jdXNUcmFja2VyLFxuXHRcdFx0a2V5c3Ryb2tlSGFuZGxlcjogdGhpcy5rZXlzdHJva2VzLFxuXHRcdFx0YWN0aW9uczoge1xuXHRcdFx0XHQvLyBOYXZpZ2F0ZSBmaWVsZHMgYmFja3dhcmRzIHVzaW5nIHRoZSBTaGlmdCArIFRhYiBrZXlzdHJva2UuXG5cdFx0XHRcdGZvY3VzUHJldmlvdXM6ICdzaGlmdCArIHRhYicsXG5cblx0XHRcdFx0Ly8gTmF2aWdhdGUgZmllbGRzIGZvcndhcmRzIHVzaW5nIHRoZSBUYWIga2V5LlxuXHRcdFx0XHRmb2N1c05leHQ6ICd0YWInXG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0dGhpcy5zZXRUZW1wbGF0ZSgge1xuXHRcdFx0dGFnOiAnZGl2JyxcblxuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRjbGFzczogW1xuXHRcdFx0XHRcdCdjaycsXG5cdFx0XHRcdFx0J2NrLWxpbmstYWN0aW9ucycsXG5cdFx0XHRcdFx0J2NrLXJlc3BvbnNpdmUtZm9ybSdcblx0XHRcdFx0XSxcblxuXHRcdFx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vY2tlZGl0b3IvY2tlZGl0b3I1LWxpbmsvaXNzdWVzLzkwXG5cdFx0XHRcdHRhYmluZGV4OiAnLTEnXG5cdFx0XHR9LFxuXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHR0aGlzLnByZXZpZXdCdXR0b25WaWV3LFxuXHRcdFx0XHR0aGlzLmVkaXRCdXR0b25WaWV3LFxuXHRcdFx0XHR0aGlzLnVubGlua0J1dHRvblZpZXdcblx0XHRcdF1cblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogQGluaGVyaXREb2Ncblx0ICovXG5cdHJlbmRlcigpIHtcblx0XHRzdXBlci5yZW5kZXIoKTtcblxuXHRcdGNvbnN0IGNoaWxkVmlld3MgPSBbXG5cdFx0XHR0aGlzLnByZXZpZXdCdXR0b25WaWV3LFxuXHRcdFx0dGhpcy5lZGl0QnV0dG9uVmlldyxcblx0XHRcdHRoaXMudW5saW5rQnV0dG9uVmlld1xuXHRcdF07XG5cblx0XHRjaGlsZFZpZXdzLmZvckVhY2goIHYgPT4ge1xuXHRcdFx0Ly8gUmVnaXN0ZXIgdGhlIHZpZXcgYXMgZm9jdXNhYmxlLlxuXHRcdFx0dGhpcy5fZm9jdXNhYmxlcy5hZGQoIHYgKTtcblxuXHRcdFx0Ly8gUmVnaXN0ZXIgdGhlIHZpZXcgaW4gdGhlIGZvY3VzIHRyYWNrZXIuXG5cdFx0XHR0aGlzLmZvY3VzVHJhY2tlci5hZGQoIHYuZWxlbWVudCApO1xuXHRcdH0gKTtcblxuXHRcdC8vIFN0YXJ0IGxpc3RlbmluZyBmb3IgdGhlIGtleXN0cm9rZXMgY29taW5nIGZyb20gI2VsZW1lbnQuXG5cdFx0dGhpcy5rZXlzdHJva2VzLmxpc3RlblRvKCB0aGlzLmVsZW1lbnQgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBGb2N1c2VzIHRoZSBmaXN0IHtAbGluayAjX2ZvY3VzYWJsZXN9IGluIHRoZSBhY3Rpb25zLlxuXHQgKi9cblx0Zm9jdXMoKSB7XG5cdFx0dGhpcy5fZm9jdXNDeWNsZXIuZm9jdXNGaXJzdCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBidXR0b24gdmlldy5cblx0ICpcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IGxhYmVsIFRoZSBidXR0b24gbGFiZWwuXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBpY29uIFRoZSBidXR0b24gaWNvbi5cblx0ICogQHBhcmFtIHtTdHJpbmd9IFtldmVudE5hbWVdIEFuIGV2ZW50IG5hbWUgdGhhdCB0aGUgYEJ1dHRvblZpZXcjZXhlY3V0ZWAgZXZlbnQgd2lsbCBiZSBkZWxlZ2F0ZWQgdG8uXG5cdCAqIEByZXR1cm5zIHttb2R1bGU6dWkvYnV0dG9uL2J1dHRvbnZpZXd+QnV0dG9uVmlld30gVGhlIGJ1dHRvbiB2aWV3IGluc3RhbmNlLlxuXHQgKi9cblx0X2NyZWF0ZUJ1dHRvbiggbGFiZWwsIGljb24sIGV2ZW50TmFtZSApIHtcblx0XHRjb25zdCBidXR0b24gPSBuZXcgQnV0dG9uVmlldyggdGhpcy5sb2NhbGUgKTtcblxuXHRcdGJ1dHRvbi5zZXQoIHtcblx0XHRcdGxhYmVsLFxuXHRcdFx0aWNvbixcblx0XHRcdHRvb2x0aXA6IHRydWVcblx0XHR9ICk7XG5cblx0XHRidXR0b24uZGVsZWdhdGUoICdleGVjdXRlJyApLnRvKCB0aGlzLCBldmVudE5hbWUgKTtcblxuXHRcdHJldHVybiBidXR0b247XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIGxpbmsgaHJlZiBwcmV2aWV3IGJ1dHRvbi5cblx0ICpcblx0ICogQHByaXZhdGVcblx0ICogQHJldHVybnMge21vZHVsZTp1aS9idXR0b24vYnV0dG9udmlld35CdXR0b25WaWV3fSBUaGUgYnV0dG9uIHZpZXcgaW5zdGFuY2UuXG5cdCAqL1xuXHRfY3JlYXRlUHJldmlld0J1dHRvbigpIHtcblx0XHRjb25zdCBidXR0b24gPSBuZXcgQnV0dG9uVmlldyggdGhpcy5sb2NhbGUgKTtcblx0XHRjb25zdCBiaW5kID0gdGhpcy5iaW5kVGVtcGxhdGU7XG5cdFx0Y29uc3QgdCA9IHRoaXMudDtcblxuXHRcdGJ1dHRvbi5zZXQoIHtcblx0XHRcdHdpdGhUZXh0OiB0cnVlLFxuXHRcdFx0dG9vbHRpcDogdCggJ3RlbXBsYXRlIHZhbGlhYmxlIGlkJyApXG5cdFx0fSApO1xuXG5cdFx0YnV0dG9uLmV4dGVuZFRlbXBsYXRlKCB7XG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGNsYXNzOiBbXG5cdFx0XHRcdFx0J2NrJyxcblx0XHRcdFx0XHQnY2stbGluay1hY3Rpb25zX19wcmV2aWV3J1xuXHRcdFx0XHRdLFxuXHRcdFx0XHRpZDogYmluZC50byggJ2RhdGEtdGVtcGxhdGUtdmFyJywgaWQgPT4gaWQgICkgLFxuXHRcdFx0XHR0YXJnZXQ6ICdfYmxhbmsnLFxuXHRcdFx0XHRyZWw6ICdub29wZW5lciBub3JlZmVycmVyJ1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdGJ1dHRvbi5iaW5kKCAnbGFiZWwnICkudG8oIHRoaXMsICdkYXRhLXRlbXBsYXRlLXZhcicsIGlkID0+IHtcblx0XHRcdHJldHVybiBpZCB8fCB0KCAnVGhpcyB2YXJpYWJsZSBoYXMgbm8gaWQnICk7XG5cdFx0fSApO1xuXG5cdFx0YnV0dG9uLmJpbmQoICdpc0VuYWJsZWQnICkudG8oIHRoaXMsICdkYXRhLXRlbXBsYXRlLXZhcicsIGlkID0+ICEhaWQgKTtcblxuXHRcdGJ1dHRvbi50ZW1wbGF0ZS50YWcgPSAnc3Bhbic7XG5cdFx0YnV0dG9uLnRlbXBsYXRlLmV2ZW50TGlzdGVuZXJzID0ge307XG5cblx0XHRyZXR1cm4gYnV0dG9uO1xuXHR9XG59XG5cbi8qKlxuICogRmlyZWQgd2hlbiB0aGUge0BsaW5rICNlZGl0QnV0dG9uVmlld30gaXMgY2xpY2tlZC5cbiAqXG4gKiBAZXZlbnQgZWRpdFxuICovXG5cbi8qKlxuICogRmlyZWQgd2hlbiB0aGUge0BsaW5rICN1bmxpbmtCdXR0b25WaWV3fSBpcyBjbGlja2VkLlxuICpcbiAqIEBldmVudCB1bmxpbmtcbiAqL1xuIiwiLyoqXG4gKiBAbGljZW5zZSBDb3B5cmlnaHQgKGMpIDIwMDMtMjAyMSwgQ0tTb3VyY2UgLSBGcmVkZXJpY28gS25hYmJlbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIEZvciBsaWNlbnNpbmcsIHNlZSBMSUNFTlNFLm1kIG9yIGh0dHBzOi8vY2tlZGl0b3IuY29tL2xlZ2FsL2NrZWRpdG9yLW9zcy1saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGxpbmsvdWkvbGlua2Zvcm12aWV3XG4gKi9cblxuaW1wb3J0IHtcblx0QnV0dG9uVmlldyxcblx0Rm9jdXNDeWNsZXIsXG5cdExhYmVsZWRGaWVsZFZpZXcsXG5cdFN3aXRjaEJ1dHRvblZpZXcsXG5cdFZpZXcsXG5cdFZpZXdDb2xsZWN0aW9uLFxuXHRjcmVhdGVMYWJlbGVkSW5wdXRUZXh0LFxuXHRpbmplY3RDc3NUcmFuc2l0aW9uRGlzYWJsZXIsXG5cdHN1Ym1pdEhhbmRsZXIsXG5cdGFkZFRvb2xiYXJUb0Ryb3Bkb3duLFxuXHRjcmVhdGVEcm9wZG93blxufSBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LXVpL3NyYyc7XG5pbXBvcnQgU3BsaXRCdXR0b25WaWV3IGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtdWkvc3JjL2Ryb3Bkb3duL2J1dHRvbi9zcGxpdGJ1dHRvbnZpZXcnO1xuaW1wb3J0IHsgRm9jdXNUcmFja2VyLCBLZXlzdHJva2VIYW5kbGVyIH0gZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS11dGlscy9zcmMnO1xuaW1wb3J0IHsgaWNvbnMgfSBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWNvcmUvc3JjJztcbi8vIFNlZTogIzg4MzMuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2tlZGl0b3I1LXJ1bGVzL2NrZWRpdG9yLWltcG9ydHNcbmltcG9ydCAnQGNrZWRpdG9yL2NrZWRpdG9yNS11aS90aGVtZS9jb21wb25lbnRzL3Jlc3BvbnNpdmUtZm9ybS9yZXNwb25zaXZlZm9ybS5jc3MnO1xuaW1wb3J0ICcuLi8uLi90aGVtZS90ZW1wbGF0ZWZvcm0uY3NzJztcblxuLyoqXG4gKiBUaGUgbGluayBmb3JtIHZpZXcgY29udHJvbGxlciBjbGFzcy5cbiAqXG4gKiBTZWUge0BsaW5rIG1vZHVsZTpsaW5rL3VpL2xpbmtmb3Jtdmlld35MaW5rRm9ybVZpZXd9LlxuICpcbiAqIEBleHRlbmRzIG1vZHVsZTp1aS92aWV3flZpZXdcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVtcGxhdGVGb3JtVmlldyBleHRlbmRzIFZpZXcge1xuXHQvKipcblx0ICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiB0aGUge0BsaW5rIG1vZHVsZTpsaW5rL3VpL2xpbmtmb3Jtdmlld35MaW5rRm9ybVZpZXd9IGNsYXNzLlxuXHQgKlxuXHQgKiBBbHNvIHNlZSB7QGxpbmsgI3JlbmRlcn0uXG5cdCAqXG5cdCAqIEBwYXJhbSB7bW9kdWxlOnV0aWxzL2xvY2FsZX5Mb2NhbGV9IFtsb2NhbGVdIFRoZSBsb2NhbGl6YXRpb24gc2VydmljZXMgaW5zdGFuY2UuXG5cdCAqIEBwYXJhbSB7bW9kdWxlOmxpbmsvbGlua2NvbW1hbmR+TGlua0NvbW1hbmR9IGxpbmtDb21tYW5kIFJlZmVyZW5jZSB0byB7QGxpbmsgbW9kdWxlOmxpbmsvbGlua2NvbW1hbmR+TGlua0NvbW1hbmR9LlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gW3Byb3RvY29sXSBBIHZhbHVlIG9mIGEgcHJvdG9jb2wgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBpbnB1dCdzIHBsYWNlaG9sZGVyLlxuXHQgKi9cblx0Y29uc3RydWN0b3IoIGxvY2FsZSwgbGlua0NvbW1hbmQgKSB7XG5cdFx0c3VwZXIoIGxvY2FsZSApO1xuXG5cdFx0Y29uc3QgdCA9IGxvY2FsZS50O1xuXG5cdFx0LyoqXG5cdFx0ICogVHJhY2tzIGluZm9ybWF0aW9uIGFib3V0IERPTSBmb2N1cyBpbiB0aGUgZm9ybS5cblx0XHQgKlxuXHRcdCAqIEByZWFkb25seVxuXHRcdCAqIEBtZW1iZXIge21vZHVsZTp1dGlscy9mb2N1c3RyYWNrZXJ+Rm9jdXNUcmFja2VyfVxuXHRcdCAqL1xuXHRcdHRoaXMuZm9jdXNUcmFja2VyID0gbmV3IEZvY3VzVHJhY2tlcigpO1xuXG5cdFx0LyoqXG5cdFx0ICogQW4gaW5zdGFuY2Ugb2YgdGhlIHtAbGluayBtb2R1bGU6dXRpbHMva2V5c3Ryb2tlaGFuZGxlcn5LZXlzdHJva2VIYW5kbGVyfS5cblx0XHQgKlxuXHRcdCAqIEByZWFkb25seVxuXHRcdCAqIEBtZW1iZXIge21vZHVsZTp1dGlscy9rZXlzdHJva2VoYW5kbGVyfktleXN0cm9rZUhhbmRsZXJ9XG5cdFx0ICovXG5cdFx0dGhpcy5rZXlzdHJva2VzID0gbmV3IEtleXN0cm9rZUhhbmRsZXIoKTtcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBVUkwgaW5wdXQgdmlldy5cblx0XHQgKlxuXHRcdCAqIEBtZW1iZXIge21vZHVsZTp1aS9sYWJlbGVkZmllbGQvbGFiZWxlZGZpZWxkdmlld35MYWJlbGVkRmllbGRWaWV3fVxuXHRcdCAqL1xuXHRcdHRoaXMubGFiZWxJbnB1dFZpZXcgPSB0aGlzLl9jcmVhdGVUZXh0SW5wdXQoJ1NldCB2YXJpYWJsZSBJZCcpOy8qKlxuXHRcdCAqIFRoZSBVUkwgaW5wdXQgdmlldy5cblx0XHQgKlxuXHRcdCAqIEBtZW1iZXIge21vZHVsZTp1aS9sYWJlbGVkZmllbGQvbGFiZWxlZGZpZWxkdmlld35MYWJlbGVkRmllbGRWaWV3fVxuXHRcdCAqL1xuXHRcdHRoaXMudHlwZUlucHV0VmlldyA9IHRoaXMuX2NyZWF0ZURyb3BEb3duSW5wdXQoJ1RlbXBsYXRlIFZhcmlhYmxlIFR5cGUnKTsvKipcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBTYXZlIGJ1dHRvbiB2aWV3LlxuXHRcdCAqXG5cdFx0ICogQG1lbWJlciB7bW9kdWxlOnVpL2J1dHRvbi9idXR0b252aWV3fkJ1dHRvblZpZXd9XG5cdFx0ICovXG5cdFx0dGhpcy5zYXZlQnV0dG9uVmlldyA9IHRoaXMuX2NyZWF0ZUJ1dHRvbiggdCggJ1NhdmUnICksIGljb25zLmNoZWNrLCAnY2stYnV0dG9uLXNhdmUnICk7XG5cdFx0dGhpcy5zYXZlQnV0dG9uVmlldy50eXBlID0gJ3N1Ym1pdCc7XG5cblx0XHQvKipcblx0XHQgKiBUaGUgQ2FuY2VsIGJ1dHRvbiB2aWV3LlxuXHRcdCAqXG5cdFx0ICogQG1lbWJlciB7bW9kdWxlOnVpL2J1dHRvbi9idXR0b252aWV3fkJ1dHRvblZpZXd9XG5cdFx0ICovXG5cdFx0dGhpcy5jYW5jZWxCdXR0b25WaWV3ID0gdGhpcy5fY3JlYXRlQnV0dG9uKCB0KCAnQ2FuY2VsJyApLCBpY29ucy5jYW5jZWwsICdjay1idXR0b24tY2FuY2VsJywgJ2NhbmNlbCcgKTtcblxuXHRcdC8qKlxuXHRcdCAqIEEgY29sbGVjdGlvbiBvZiB7QGxpbmsgbW9kdWxlOnVpL2J1dHRvbi9zd2l0Y2hidXR0b252aWV3flN3aXRjaEJ1dHRvblZpZXd9LFxuXHRcdCAqIHdoaWNoIGNvcnJlc3BvbmRzIHRvIHtAbGluayBtb2R1bGU6bGluay9saW5rY29tbWFuZH5MaW5rQ29tbWFuZCNtYW51YWxEZWNvcmF0b3JzIG1hbnVhbCBkZWNvcmF0b3JzfVxuXHRcdCAqIGNvbmZpZ3VyZWQgaW4gdGhlIGVkaXRvci5cblx0XHQgKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICogQHJlYWRvbmx5XG5cdFx0ICogQHR5cGUge21vZHVsZTp1aS92aWV3Y29sbGVjdGlvbn5WaWV3Q29sbGVjdGlvbn1cblx0XHQgKi9cblx0XHR0aGlzLl9tYW51YWxEZWNvcmF0b3JTd2l0Y2hlcyA9IHRoaXMuX2NyZWF0ZU1hbnVhbERlY29yYXRvclN3aXRjaGVzKCBsaW5rQ29tbWFuZCApO1xuXG5cdFx0LyoqXG5cdFx0ICogQSBjb2xsZWN0aW9uIG9mIGNoaWxkIHZpZXdzIGluIHRoZSBmb3JtLlxuXHRcdCAqXG5cdFx0ICogQHJlYWRvbmx5XG5cdFx0ICogQHR5cGUge21vZHVsZTp1aS92aWV3Y29sbGVjdGlvbn5WaWV3Q29sbGVjdGlvbn1cblx0XHQgKi9cblx0XHR0aGlzLmNoaWxkcmVuID0gdGhpcy5fY3JlYXRlRm9ybUNoaWxkcmVuKCBsaW5rQ29tbWFuZC5tYW51YWxEZWNvcmF0b3JzICk7XG5cblx0XHQvKipcblx0XHQgKiBBIGNvbGxlY3Rpb24gb2Ygdmlld3MgdGhhdCBjYW4gYmUgZm9jdXNlZCBpbiB0aGUgZm9ybS5cblx0XHQgKlxuXHRcdCAqIEByZWFkb25seVxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAbWVtYmVyIHttb2R1bGU6dWkvdmlld2NvbGxlY3Rpb25+Vmlld0NvbGxlY3Rpb259XG5cdFx0ICovXG5cdFx0dGhpcy5fZm9jdXNhYmxlcyA9IG5ldyBWaWV3Q29sbGVjdGlvbigpO1xuXG5cdFx0LyoqXG5cdFx0ICogSGVscHMgY3ljbGluZyBvdmVyIHtAbGluayAjX2ZvY3VzYWJsZXN9IGluIHRoZSBmb3JtLlxuXHRcdCAqXG5cdFx0ICogQHJlYWRvbmx5XG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEBtZW1iZXIge21vZHVsZTp1aS9mb2N1c2N5Y2xlcn5Gb2N1c0N5Y2xlcn1cblx0XHQgKi9cblx0XHR0aGlzLl9mb2N1c0N5Y2xlciA9IG5ldyBGb2N1c0N5Y2xlcigge1xuXHRcdFx0Zm9jdXNhYmxlczogdGhpcy5fZm9jdXNhYmxlcyxcblx0XHRcdGZvY3VzVHJhY2tlcjogdGhpcy5mb2N1c1RyYWNrZXIsXG5cdFx0XHRrZXlzdHJva2VIYW5kbGVyOiB0aGlzLmtleXN0cm9rZXMsXG5cdFx0XHRhY3Rpb25zOiB7XG5cdFx0XHRcdC8vIE5hdmlnYXRlIGZvcm0gZmllbGRzIGJhY2t3YXJkcyB1c2luZyB0aGUgU2hpZnQgKyBUYWIga2V5c3Ryb2tlLlxuXHRcdFx0XHRmb2N1c1ByZXZpb3VzOiAnc2hpZnQgKyB0YWInLFxuXG5cdFx0XHRcdC8vIE5hdmlnYXRlIGZvcm0gZmllbGRzIGZvcndhcmRzIHVzaW5nIHRoZSBUYWIga2V5LlxuXHRcdFx0XHRmb2N1c05leHQ6ICd0YWInXG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0Y29uc3QgY2xhc3NMaXN0ID0gWyAnY2snLCAnY2stbGluay1mb3JtJywgJ2NrLXJlc3BvbnNpdmUtZm9ybScgXTtcblxuXHRcdGlmICggbGlua0NvbW1hbmQubWFudWFsRGVjb3JhdG9ycy5sZW5ndGggKSB7XG5cdFx0XHRjbGFzc0xpc3QucHVzaCggJ2NrLWxpbmstZm9ybV9sYXlvdXQtdmVydGljYWwnLCAnY2stdmVydGljYWwtZm9ybScgKTtcblx0XHR9XG5cblx0XHR0aGlzLnNldFRlbXBsYXRlKCB7XG5cdFx0XHR0YWc6ICdmb3JtJyxcblxuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRjbGFzczogY2xhc3NMaXN0LFxuXG5cdFx0XHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ja2VkaXRvci9ja2VkaXRvcjUtbGluay9pc3N1ZXMvOTBcblx0XHRcdFx0dGFiaW5kZXg6ICctMSdcblx0XHRcdH0sXG5cblx0XHRcdGNoaWxkcmVuOiB0aGlzLmNoaWxkcmVuXG5cdFx0fSApO1xuXG5cdFx0aW5qZWN0Q3NzVHJhbnNpdGlvbkRpc2FibGVyKCB0aGlzICk7XG5cdH1cblxuXHQvKipcblx0ICogT2J0YWlucyB0aGUgc3RhdGUgb2YgdGhlIHtAbGluayBtb2R1bGU6dWkvYnV0dG9uL3N3aXRjaGJ1dHRvbnZpZXd+U3dpdGNoQnV0dG9uVmlldyBzd2l0Y2ggYnV0dG9uc30gcmVwcmVzZW50aW5nXG5cdCAqIHtAbGluayBtb2R1bGU6bGluay9saW5rY29tbWFuZH5MaW5rQ29tbWFuZCNtYW51YWxEZWNvcmF0b3JzIG1hbnVhbCBsaW5rIGRlY29yYXRvcnN9XG5cdCAqIGluIHRoZSB7QGxpbmsgbW9kdWxlOmxpbmsvdWkvbGlua2Zvcm12aWV3fkxpbmtGb3JtVmlld30uXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtPYmplY3QuPFN0cmluZyxCb29sZWFuPn0gS2V5LXZhbHVlIHBhaXJzLCB3aGVyZSB0aGUga2V5IGlzIHRoZSBuYW1lIG9mIHRoZSBkZWNvcmF0b3IgYW5kIHRoZSB2YWx1ZSBpc1xuXHQgKiBpdHMgc3RhdGUuXG5cdCAqL1xuXHRnZXREZWNvcmF0b3JTd2l0Y2hlc1N0YXRlKCkge1xuXHRcdHJldHVybiBBcnJheS5mcm9tKCB0aGlzLl9tYW51YWxEZWNvcmF0b3JTd2l0Y2hlcyApLnJlZHVjZSggKCBhY2N1bXVsYXRvciwgc3dpdGNoQnV0dG9uICkgPT4ge1xuXHRcdFx0YWNjdW11bGF0b3JbIHN3aXRjaEJ1dHRvbi5uYW1lIF0gPSBzd2l0Y2hCdXR0b24uaXNPbjtcblx0XHRcdHJldHVybiBhY2N1bXVsYXRvcjtcblx0XHR9LCB7fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbmhlcml0RG9jXG5cdCAqL1xuXHRyZW5kZXIoKSB7XG5cdFx0c3VwZXIucmVuZGVyKCk7XG5cblx0XHRzdWJtaXRIYW5kbGVyKCB7XG5cdFx0XHR2aWV3OiB0aGlzXG5cdFx0fSApO1xuXG5cdFx0Y29uc3QgY2hpbGRWaWV3cyA9IFtcblx0XHRcdHRoaXMubGFiZWxJbnB1dFZpZXcsXG5cdFx0XHR0aGlzLnR5cGVJbnB1dFZpZXcsXG5cdFx0XHQuLi50aGlzLl9tYW51YWxEZWNvcmF0b3JTd2l0Y2hlcyxcblx0XHRcdHRoaXMuc2F2ZUJ1dHRvblZpZXcsXG5cdFx0XHR0aGlzLmNhbmNlbEJ1dHRvblZpZXdcblx0XHRdO1xuXG5cdFx0Y2hpbGRWaWV3cy5mb3JFYWNoKCB2ID0+IHtcblx0XHRcdC8vIFJlZ2lzdGVyIHRoZSB2aWV3IGFzIGZvY3VzYWJsZS5cblx0XHRcdHRoaXMuX2ZvY3VzYWJsZXMuYWRkKCB2ICk7XG5cblx0XHRcdC8vIFJlZ2lzdGVyIHRoZSB2aWV3IGluIHRoZSBmb2N1cyB0cmFja2VyLlxuXHRcdFx0dGhpcy5mb2N1c1RyYWNrZXIuYWRkKCB2LmVsZW1lbnQgKTtcblx0XHR9ICk7XG5cblx0XHQvLyBTdGFydCBsaXN0ZW5pbmcgZm9yIHRoZSBrZXlzdHJva2VzIGNvbWluZyBmcm9tICNlbGVtZW50LlxuXHRcdHRoaXMua2V5c3Ryb2tlcy5saXN0ZW5UbyggdGhpcy5lbGVtZW50ICk7XG5cdH1cblxuXHQvKipcblx0ICogRm9jdXNlcyB0aGUgZmlzdCB7QGxpbmsgI19mb2N1c2FibGVzfSBpbiB0aGUgZm9ybS5cblx0ICovXG5cdGZvY3VzKCkge1xuXHRcdHRoaXMuX2ZvY3VzQ3ljbGVyLmZvY3VzRmlyc3QoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgbGFiZWxlZCBpbnB1dCB2aWV3LlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcmV0dXJucyB7bW9kdWxlOnVpL2xhYmVsZWRmaWVsZC9sYWJlbGVkZmllbGR2aWV3fkxhYmVsZWRGaWVsZFZpZXd9IExhYmVsZWQgZmllbGQgdmlldyBpbnN0YW5jZS5cblx0ICovXG5cdF9jcmVhdGVUZXh0SW5wdXQobGFiZWwpIHtcblx0XHRjb25zdCB0ID0gdGhpcy5sb2NhbGUudDtcblx0XHRjb25zdCBsYWJlbGVkSW5wdXQgPSBuZXcgTGFiZWxlZEZpZWxkVmlldyggdGhpcy5sb2NhbGUsIGNyZWF0ZUxhYmVsZWRJbnB1dFRleHQgKTtcblxuXHRcdGxhYmVsZWRJbnB1dC5sYWJlbCA9IHQoIGxhYmVsICk7XG5cblx0XHRyZXR1cm4gbGFiZWxlZElucHV0O1xuXHR9XG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgbGFiZWxlZCBpbnB1dCB2aWV3LlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcmV0dXJucyB7bW9kdWxlOnVpL2xhYmVsZWRmaWVsZC9sYWJlbGVkZmllbGR2aWV3fkxhYmVsZWRGaWVsZFZpZXd9IExhYmVsZWQgZmllbGQgdmlldyBpbnN0YW5jZS5cblx0ICovXG5cdF9jcmVhdGVEcm9wRG93bklucHV0KGxhYmVsKSB7XG5cdFx0Y29uc3QgY3JlYXRlTGFiZWxlZERyb3Bkb3duID0gKCBsYWJlbGVkRmllbGRWaWV3LCB2aWV3VWlkLCBzdGF0dXNVaWQgKSA9PntcblxuXHRcdFx0Y29uc3QgZHJvcGRvd25WaWV3ID0gY3JlYXRlRHJvcGRvd24oIGxhYmVsZWRGaWVsZFZpZXcubG9jYWxlICwgU3BsaXRCdXR0b25WaWV3ICk7XG5cblx0XHRcdGRyb3Bkb3duVmlldy5zZXQoIHtcblx0XHRcdFx0aWQ6IHZpZXdVaWQsXG5cdFx0XHRcdGFyaWFEZXNjcmliZWRCeUlkOiBzdGF0dXNVaWRcblx0XHRcdH0gKTtcblx0XHRcdGRyb3Bkb3duVmlldy5idXR0b25WaWV3LnNldCgge1xuXHRcdFx0XHR0b29sdGlwOiB0cnVlLFxuXHRcdFx0XHR3aXRoVGV4dDogdHJ1ZSxcblx0XHRcdH0gKTtcblxuXHRcdFx0Y29uc3QgYnV0dG9ucyA9IFtdO1xuXHRcdFx0Ly8gQWRkIGFub3RoZXIgY29tcG9uZW50IHRvIHRoZSBhcnJheSBvZiB0b29sYmFyIGl0ZW1zLlxuXHRcdFx0YnV0dG9ucy5wdXNoKCB0aGlzLl9jcmVhdGVEcm9wZG93bkJ1dHRvbiggJ1Nob3J0IHRleHQnICkpO1xuXG5cdFx0XHQvLyBBZGQgYW5vdGhlciBjb21wb25lbnQgdG8gdGhlIGFycmF5IG9mIHRvb2xiYXIgaXRlbXMuXG5cdFx0XHRidXR0b25zLnB1c2goIHRoaXMuX2NyZWF0ZURyb3Bkb3duQnV0dG9uKCAgJ0xvbmcgdGV4dCcgKSApO1xuXG5cdFx0XHQvLyBDcmVhdGUgYSBkcm9wZG93biB3aXRoIGEgdG9vbGJhciBpbnNpZGUgdGhlIHBhbmVsLlxuXHRcdFx0YWRkVG9vbGJhclRvRHJvcGRvd24oIGRyb3Bkb3duVmlldywgYnV0dG9ucyApO1xuXG5cdFx0XHQvLyBUaGUgZGVmYXVsdCBpY29uIGlzIGFsaWduIGxlZnQgYXMgd2UgZG8gbm90IHN1cHBvcnQgUlRMIHlldCAoc2VlICMzKS5cblxuXHRcdFx0Ly8gQ2hhbmdlIGljb24gdG8gcmVmbGVjdCBjdXJyZW50IHNlbGVjdGlvbidzIGFsaWdubWVudC5cblx0XHRcdGRyb3Bkb3duVmlldy5iaW5kKCAnaXNFbmFibGVkJyApLnRvTWFueSggYnV0dG9ucywgJ2lzRW5hYmxlZCcsICggLi4uYXJlRW5hYmxlZCApID0+IGFyZUVuYWJsZWQuc29tZSggaXNFbmFibGVkID0+IGlzRW5hYmxlZCApICk7XG5cblx0XHRcdGRyb3Bkb3duVmlldy5idXR0b25WaWV3LmJpbmQoICdsYWJlbCcgKS50b01hbnkoIGJ1dHRvbnMsICdpc09uJywgKCAuLi5hcmVBY3RpdmUgKSA9PiB7XG5cdFx0XHRcdC8vIEdldCB0aGUgaW5kZXggb2YgYW4gYWN0aXZlIGJ1dHRvbi5cblx0XHRcdFx0Y29uc3QgaW5kZXggPSBhcmVBY3RpdmUuZmluZEluZGV4KCB2YWx1ZSA9PiB2YWx1ZSApO1xuXHRcdFx0XHQvLyBJZiBub25lIG9mIHRoZSBjb21tYW5kcyBpcyBhY3RpdmUsIGRpc3BsYXkgZWl0aGVyIGRlZmF1bHRJY29uIG9yIHRoZSBmaXJzdCBidXR0b24ncyBpY29uLlxuXHRcdFx0XHRpZiAoIGluZGV4IDwgMCApIHtcblx0XHRcdFx0XHRyZXR1cm4gYnV0dG9uc1sgMCBdLmxhYmVsO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gUmV0dXJuIGFjdGl2ZSBidXR0b24ncyBpY29uLlxuXHRcdFx0XHRyZXR1cm4gYnV0dG9uc1sgaW5kZXggXS5sYWJlbDtcblx0XHRcdH0gKTtcblx0XHRcdGRyb3Bkb3duVmlldy50b29sYmFyVmlldy5pc1ZlcnRpY2FsID0gdHJ1ZTtcblx0XHRcdC8vIEVuYWJsZSBidXR0b24gaWYgYW55IG9mIHRoZSBidXR0b25zIGlzIGVuYWJsZWQuXG5cdFx0XHRyZXR1cm4gZHJvcGRvd25WaWV3O1xuXHRcdH1cblx0XHRjb25zdCB0ID0gdGhpcy5sb2NhbGUudDtcblx0XHRjb25zdCBsYWJlbGVkSW5wdXQgPSBuZXcgTGFiZWxlZEZpZWxkVmlldyggdGhpcy5sb2NhbGUsIGNyZWF0ZUxhYmVsZWREcm9wZG93biApO1xuXG5cblxuXG5cdFx0cmV0dXJuIGxhYmVsZWRJbnB1dDtcblx0fVxuXHQvKipcblx0ICogQ3JlYXRlcyBhIGJ1dHRvbiB2aWV3LlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gbGFiZWwgVGhlIGJ1dHRvbiBsYWJlbC5cblx0ICogQHBhcmFtIHtTdHJpbmd9IGljb24gVGhlIGJ1dHRvbiBpY29uLlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIFRoZSBhZGRpdGlvbmFsIGJ1dHRvbiBDU1MgY2xhc3MgbmFtZS5cblx0ICogQHBhcmFtIHtTdHJpbmd9IFtldmVudE5hbWVdIEFuIGV2ZW50IG5hbWUgdGhhdCB0aGUgYEJ1dHRvblZpZXcjZXhlY3V0ZWAgZXZlbnQgd2lsbCBiZSBkZWxlZ2F0ZWQgdG8uXG5cdCAqIEByZXR1cm5zIHttb2R1bGU6dWkvYnV0dG9uL2J1dHRvbnZpZXd+QnV0dG9uVmlld30gVGhlIGJ1dHRvbiB2aWV3IGluc3RhbmNlLlxuXHQgKi9cblx0X2NyZWF0ZUJ1dHRvbiggbGFiZWwsIGljb24sIGNsYXNzTmFtZSwgZXZlbnROYW1lICkge1xuXHRcdGNvbnN0IGJ1dHRvbiA9IG5ldyBCdXR0b25WaWV3KCB0aGlzLmxvY2FsZSApO1xuXG5cdFx0YnV0dG9uLnNldCgge1xuXHRcdFx0bGFiZWwsXG5cdFx0XHRpY29uLFxuXHRcdFx0dG9vbHRpcDogdHJ1ZVxuXHRcdH0gKTtcblx0XHRpZiAodHlwZW9mIGNsYXNzTmFtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcblxuXHRcdFx0YnV0dG9uLmV4dGVuZFRlbXBsYXRlKCB7XG5cdFx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0XHRjbGFzczogY2xhc3NOYW1lXG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRpZiAoIGV2ZW50TmFtZSApIHtcblx0XHRcdGJ1dHRvbi5kZWxlZ2F0ZSggJ2V4ZWN1dGUnICkudG8oIHRoaXMsIGV2ZW50TmFtZSApO1xuXHRcdH1cblx0XHRyZXR1cm4gYnV0dG9uO1xuXHR9XG5cdF9jcmVhdGVEcm9wZG93bkJ1dHRvbiggbGFiZWwgKSB7XG5cdFx0Y29uc3QgYnV0dG9uID0gbmV3IEJ1dHRvblZpZXcoIHRoaXMubG9jYWxlICk7XG5cblx0XHRidXR0b24uc2V0KCB7XG5cdFx0XHRpc0VuYWJsZWQgOiB0cnVlLFxuXHRcdFx0bGFiZWwgOiBsYWJlbCxcblx0XHRcdHRvb2x0aXA6IHRydWUsXG5cdFx0XHR3aXRoVGV4dDogdHJ1ZVxuXHRcdH0gKTtcblx0XHQvLyBFeGVjdXRlIGNvbW1hbmQuXG5cdFx0dGhpcy5saXN0ZW5UbyggYnV0dG9uLCAnZXhlY3V0ZScsICgpID0+IHtcblx0XHRcdGJ1dHRvbi5pc09uID0gdHJ1ZTtcblx0XHR9ICk7XG5cdFx0cmV0dXJuIGJ1dHRvbjtcblx0fVxuXG5cdC8qKlxuXHQgKiBQb3B1bGF0ZXMge0BsaW5rIG1vZHVsZTp1aS92aWV3Y29sbGVjdGlvbn5WaWV3Q29sbGVjdGlvbn0gb2Yge0BsaW5rIG1vZHVsZTp1aS9idXR0b24vc3dpdGNoYnV0dG9udmlld35Td2l0Y2hCdXR0b25WaWV3fVxuXHQgKiBtYWRlIGJhc2VkIG9uIHtAbGluayBtb2R1bGU6bGluay9saW5rY29tbWFuZH5MaW5rQ29tbWFuZCNtYW51YWxEZWNvcmF0b3JzfS5cblx0ICpcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHttb2R1bGU6bGluay9saW5rY29tbWFuZH5MaW5rQ29tbWFuZH0gbGlua0NvbW1hbmQgQSByZWZlcmVuY2UgdG8gdGhlIGxpbmsgY29tbWFuZC5cblx0ICogQHJldHVybnMge21vZHVsZTp1aS92aWV3Y29sbGVjdGlvbn5WaWV3Q29sbGVjdGlvbn0gb2Ygc3dpdGNoIGJ1dHRvbnMuXG5cdCAqL1xuXHRfY3JlYXRlTWFudWFsRGVjb3JhdG9yU3dpdGNoZXMoIGxpbmtDb21tYW5kICkge1xuXHRcdGNvbnN0IHN3aXRjaGVzID0gdGhpcy5jcmVhdGVDb2xsZWN0aW9uKCk7XG5cblx0XHRmb3IgKCBjb25zdCBtYW51YWxEZWNvcmF0b3Igb2YgbGlua0NvbW1hbmQubWFudWFsRGVjb3JhdG9ycyApIHtcblx0XHRcdGNvbnN0IHN3aXRjaEJ1dHRvbiA9IG5ldyBTd2l0Y2hCdXR0b25WaWV3KCB0aGlzLmxvY2FsZSApO1xuXG5cdFx0XHRzd2l0Y2hCdXR0b24uc2V0KCB7XG5cdFx0XHRcdG5hbWU6IG1hbnVhbERlY29yYXRvci5pZCxcblx0XHRcdFx0bGFiZWw6IG1hbnVhbERlY29yYXRvci5sYWJlbCxcblx0XHRcdFx0d2l0aFRleHQ6IHRydWVcblx0XHRcdH0gKTtcblxuXHRcdFx0c3dpdGNoQnV0dG9uLmJpbmQoICdpc09uJyApLnRvTWFueSggWyBtYW51YWxEZWNvcmF0b3IsIGxpbmtDb21tYW5kIF0sICd2YWx1ZScsICggZGVjb3JhdG9yVmFsdWUsIGNvbW1hbmRWYWx1ZSApID0+IHtcblx0XHRcdFx0cmV0dXJuIGNvbW1hbmRWYWx1ZSA9PT0gdW5kZWZpbmVkICYmIGRlY29yYXRvclZhbHVlID09PSB1bmRlZmluZWQgPyBtYW51YWxEZWNvcmF0b3IuZGVmYXVsdFZhbHVlIDogZGVjb3JhdG9yVmFsdWU7XG5cdFx0XHR9ICk7XG5cblx0XHRcdHN3aXRjaEJ1dHRvbi5vbiggJ2V4ZWN1dGUnLCAoKSA9PiB7XG5cdFx0XHRcdG1hbnVhbERlY29yYXRvci5zZXQoICd2YWx1ZScsICFzd2l0Y2hCdXR0b24uaXNPbiApO1xuXHRcdFx0fSApO1xuXG5cdFx0XHRzd2l0Y2hlcy5hZGQoIHN3aXRjaEJ1dHRvbiApO1xuXHRcdH1cblxuXHRcdHJldHVybiBzd2l0Y2hlcztcblx0fVxuXG5cdC8qKlxuXHQgKiBQb3B1bGF0ZXMgdGhlIHtAbGluayAjY2hpbGRyZW59IGNvbGxlY3Rpb24gb2YgdGhlIGZvcm0uXG5cdCAqXG5cdCAqIElmIHtAbGluayBtb2R1bGU6bGluay9saW5rY29tbWFuZH5MaW5rQ29tbWFuZCNtYW51YWxEZWNvcmF0b3JzIG1hbnVhbCBkZWNvcmF0b3JzfSBhcmUgY29uZmlndXJlZCBpbiB0aGUgZWRpdG9yLCBpdCBjcmVhdGVzIGFuXG5cdCAqIGFkZGl0aW9uYWwgYFZpZXdgIHdyYXBwaW5nIGFsbCB7QGxpbmsgI19tYW51YWxEZWNvcmF0b3JTd2l0Y2hlc30gc3dpdGNoIGJ1dHRvbnMgY29ycmVzcG9uZGluZ1xuXHQgKiB0byB0aGVzZSBkZWNvcmF0b3JzLlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge21vZHVsZTp1dGlscy9jb2xsZWN0aW9ufkNvbGxlY3Rpb259IG1hbnVhbERlY29yYXRvcnMgQSByZWZlcmVuY2UgdG9cblx0ICogdGhlIGNvbGxlY3Rpb24gb2YgbWFudWFsIGRlY29yYXRvcnMgc3RvcmVkIGluIHRoZSBsaW5rIGNvbW1hbmQuXG5cdCAqIEByZXR1cm5zIHttb2R1bGU6dWkvdmlld2NvbGxlY3Rpb25+Vmlld0NvbGxlY3Rpb259IFRoZSBjaGlsZHJlbiBvZiBsaW5rIGZvcm0gdmlldy5cblx0ICovXG5cdF9jcmVhdGVGb3JtQ2hpbGRyZW4oIG1hbnVhbERlY29yYXRvcnMgKSB7XG5cdFx0Y29uc3QgY2hpbGRyZW4gPSB0aGlzLmNyZWF0ZUNvbGxlY3Rpb24oKTtcblxuXHRcdGNoaWxkcmVuLmFkZCggdGhpcy5sYWJlbElucHV0VmlldyApO1xuXHRcdGNoaWxkcmVuLmFkZCggdGhpcy50eXBlSW5wdXRWaWV3ICk7XG5cblx0XHRpZiAoIG1hbnVhbERlY29yYXRvcnMubGVuZ3RoICkge1xuXHRcdFx0Y29uc3QgYWRkaXRpb25hbEJ1dHRvbnNWaWV3ID0gbmV3IFZpZXcoKTtcblxuXHRcdFx0YWRkaXRpb25hbEJ1dHRvbnNWaWV3LnNldFRlbXBsYXRlKCB7XG5cdFx0XHRcdHRhZzogJ3VsJyxcblx0XHRcdFx0Y2hpbGRyZW46IHRoaXMuX21hbnVhbERlY29yYXRvclN3aXRjaGVzLm1hcCggc3dpdGNoQnV0dG9uID0+ICgge1xuXHRcdFx0XHRcdHRhZzogJ2xpJyxcblx0XHRcdFx0XHRjaGlsZHJlbjogWyBzd2l0Y2hCdXR0b24gXSxcblx0XHRcdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdFx0XHRjbGFzczogW1xuXHRcdFx0XHRcdFx0XHQnY2snLFxuXHRcdFx0XHRcdFx0XHQnY2stbGlzdF9faXRlbSdcblx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gKSApLFxuXHRcdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdFx0Y2xhc3M6IFtcblx0XHRcdFx0XHRcdCdjaycsXG5cdFx0XHRcdFx0XHQnY2stcmVzZXQnLFxuXHRcdFx0XHRcdFx0J2NrLWxpc3QnXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0XHRjaGlsZHJlbi5hZGQoIGFkZGl0aW9uYWxCdXR0b25zVmlldyApO1xuXHRcdH1cblxuXHRcdGNoaWxkcmVuLmFkZCggdGhpcy5zYXZlQnV0dG9uVmlldyApO1xuXHRcdGNoaWxkcmVuLmFkZCggdGhpcy5jYW5jZWxCdXR0b25WaWV3ICk7XG5cblx0XHRyZXR1cm4gY2hpbGRyZW47XG5cdH1cbn1cblxuLyoqXG4gKiBGaXJlZCB3aGVuIHRoZSBmb3JtIHZpZXcgaXMgc3VibWl0dGVkICh3aGVuIG9uZSBvZiB0aGUgY2hpbGRyZW4gdHJpZ2dlcmVkIHRoZSBzdWJtaXQgZXZlbnQpLFxuICogZm9yIGV4YW1wbGUgd2l0aCBhIGNsaWNrIG9uIHtAbGluayAjc2F2ZUJ1dHRvblZpZXd9LlxuICpcbiAqIEBldmVudCBzdWJtaXRcbiAqL1xuXG4vKipcbiAqIEZpcmVkIHdoZW4gdGhlIGZvcm0gdmlldyBpcyBjYW5jZWxlZCwgZm9yIGV4YW1wbGUgd2l0aCBhIGNsaWNrIG9uIHtAbGluayAjY2FuY2VsQnV0dG9uVmlld30uXG4gKlxuICogQGV2ZW50IGNhbmNlbFxuICovXG4iLCIvKipcbiAqIEBsaWNlbnNlIENvcHlyaWdodCAoYykgMjAwMy0yMDIxLCBDS1NvdXJjZSAtIEZyZWRlcmljbyBLbmFiYmVuLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogRm9yIGxpY2Vuc2luZywgc2VlIExJQ0VOU0UubWQgb3IgaHR0cHM6Ly9ja2VkaXRvci5jb20vbGVnYWwvY2tlZGl0b3Itb3NzLWxpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGluay91aS9saW5rYWN0aW9uc3ZpZXdcbiAqL1xuXG5pbXBvcnQgeyBCdXR0b25WaWV3LCBWaWV3LCBWaWV3Q29sbGVjdGlvbiwgRm9jdXNDeWNsZXIgfSBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LXVpL3NyYyc7XG5pbXBvcnQgeyBGb2N1c1RyYWNrZXIsIEtleXN0cm9rZUhhbmRsZXIgfSBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LXV0aWxzL3NyYyc7XG5pbXBvcnQgeyBpY29ucyB9IGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtY29yZS9zcmMnO1xuXG5pbXBvcnQgeyBlbnN1cmVTYWZlVXJsIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vLyBTZWU6ICM4ODMzLlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNrZWRpdG9yNS1ydWxlcy9ja2VkaXRvci1pbXBvcnRzXG5pbXBvcnQgJ0Bja2VkaXRvci9ja2VkaXRvcjUtdWkvdGhlbWUvY29tcG9uZW50cy9yZXNwb25zaXZlLWZvcm0vcmVzcG9uc2l2ZWZvcm0uY3NzJztcbmltcG9ydCAnLi4vLi4vdGhlbWUvdGVtcGxhdGVhY3Rpb25zLmNzcyc7XG5cbmltcG9ydCB1bmxpbmtJY29uIGZyb20gJy4uLy4uL3RoZW1lL2ljb25zL3VubGluay5zdmcnO1xuXG4vKipcbiAqIFRoZSBsaW5rIGFjdGlvbnMgdmlldyBjbGFzcy4gVGhpcyB2aWV3IGRpc3BsYXlzIHRoZSBsaW5rIHByZXZpZXcsIGFsbG93c1xuICogdW5saW5raW5nIG9yIGVkaXRpbmcgdGhlIGxpbmsuXG4gKlxuICogQGV4dGVuZHMgbW9kdWxlOnVpL3ZpZXd+Vmlld1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZW1wbGF0ZVNhdmVWaWV3IGV4dGVuZHMgVmlldyB7XG5cdC8qKlxuXHQgKiBAaW5oZXJpdERvY1xuXHQgKi9cblx0Y29uc3RydWN0b3IoIGxvY2FsZSApIHtcblx0XHRzdXBlciggbG9jYWxlICk7XG5cblx0XHRjb25zdCB0ID0gbG9jYWxlLnQ7XG5cblxuXG5cdFx0LyoqXG5cdFx0ICogQW4gaW5zdGFuY2Ugb2YgdGhlIHtAbGluayBtb2R1bGU6dXRpbHMva2V5c3Ryb2tlaGFuZGxlcn5LZXlzdHJva2VIYW5kbGVyfS5cblx0XHQgKlxuXHRcdCAqIEByZWFkb25seVxuXHRcdCAqIEBtZW1iZXIge21vZHVsZTp1dGlscy9rZXlzdHJva2VoYW5kbGVyfktleXN0cm9rZUhhbmRsZXJ9XG5cdFx0ICovXG5cdFx0dGhpcy5rZXlzdHJva2VzID0gbmV3IEtleXN0cm9rZUhhbmRsZXIoKTtcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBocmVmIHByZXZpZXcgdmlldy5cblx0XHQgKlxuXHRcdCAqIEBtZW1iZXIge21vZHVsZTp1aS92aWV3flZpZXd9XG5cdFx0ICovXG5cdFx0dGhpcy5wcmV2aWV3QnV0dG9uVmlldyA9IHRoaXMuX2NyZWF0ZVByZXZpZXdCdXR0b24oKTtcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSB1bmxpbmsgYnV0dG9uIHZpZXcuXG5cdFx0ICpcblx0XHQgKiBAbWVtYmVyIHttb2R1bGU6dWkvYnV0dG9uL2J1dHRvbnZpZXd+QnV0dG9uVmlld31cblx0XHQgKi9cblx0XHR0aGlzLnVubGlua0J1dHRvblZpZXcgPSB0aGlzLl9jcmVhdGVCdXR0b24oIHQoICdDYW5jZWwgVGVtcGxhdGUgVmFyJyApLCB1bmxpbmtJY29uLCAnY2FuY2VsVGVtcGxhdGUnICk7XG5cblx0XHQvKipcblx0XHQgKiBUaGUgZWRpdCBsaW5rIGJ1dHRvbiB2aWV3LlxuXHRcdCAqXG5cdFx0ICogQG1lbWJlciB7bW9kdWxlOnVpL2J1dHRvbi9idXR0b252aWV3fkJ1dHRvblZpZXd9XG5cdFx0ICovXG5cdFx0dGhpcy5lZGl0QnV0dG9uVmlldyA9IHRoaXMuX2NyZWF0ZUJ1dHRvbiggdCggJ0VkaXQgVGVtcGxhdGUgVmFyJyApLCBpY29ucy5wZW5jaWwsICdlZGl0JyApO1xuXG5cdFx0LyoqXG5cdFx0ICogVGhlIHZhbHVlIG9mIHRoZSBcImhyZWZcIiBhdHRyaWJ1dGUgb2YgdGhlIGxpbmsgdG8gdXNlIGluIHRoZSB7QGxpbmsgI3ByZXZpZXdCdXR0b25WaWV3fS5cblx0XHQgKlxuXHRcdCAqIEBvYnNlcnZhYmxlXG5cdFx0ICogQG1lbWJlciB7U3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0KCAnZGF0YS10ZW1wbGF0ZS12YXInICk7XG5cblxuXG5cdFx0dGhpcy5zZXRUZW1wbGF0ZSgge1xuXHRcdFx0dGFnOiAnZGl2JyxcblxuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRjbGFzczogW1xuXHRcdFx0XHRcdCdjaycsXG5cdFx0XHRcdFx0J2NrLWxpbmstYWN0aW9ucycsXG5cdFx0XHRcdFx0J2NrLXJlc3BvbnNpdmUtZm9ybSdcblx0XHRcdFx0XSxcblxuXHRcdFx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vY2tlZGl0b3IvY2tlZGl0b3I1LWxpbmsvaXNzdWVzLzkwXG5cdFx0XHRcdHRhYmluZGV4OiAnLTEnXG5cdFx0XHR9LFxuXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHR0aGlzLnByZXZpZXdCdXR0b25WaWV3LFxuXHRcdFx0XHR0aGlzLmVkaXRCdXR0b25WaWV3LFxuXHRcdFx0XHR0aGlzLnVubGlua0J1dHRvblZpZXdcblx0XHRcdF1cblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogQGluaGVyaXREb2Ncblx0ICovXG5cdHJlbmRlcigpIHtcblx0XHRzdXBlci5yZW5kZXIoKTtcblxuXHRcdGNvbnN0IGNoaWxkVmlld3MgPSBbXG5cdFx0XHR0aGlzLnByZXZpZXdCdXR0b25WaWV3LFxuXHRcdFx0dGhpcy5lZGl0QnV0dG9uVmlldyxcblx0XHRcdHRoaXMudW5saW5rQnV0dG9uVmlld1xuXHRcdF07XG5cblx0XHRjaGlsZFZpZXdzLmZvckVhY2goIHYgPT4ge1xuXHRcdH0gKTtcblxuXHRcdC8vIFN0YXJ0IGxpc3RlbmluZyBmb3IgdGhlIGtleXN0cm9rZXMgY29taW5nIGZyb20gI2VsZW1lbnQuXG5cdFx0dGhpcy5rZXlzdHJva2VzLmxpc3RlblRvKCB0aGlzLmVsZW1lbnQgKTtcblx0fVxuXG5cblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIGJ1dHRvbiB2aWV3LlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gbGFiZWwgVGhlIGJ1dHRvbiBsYWJlbC5cblx0ICogQHBhcmFtIHtTdHJpbmd9IGljb24gVGhlIGJ1dHRvbiBpY29uLlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gW2V2ZW50TmFtZV0gQW4gZXZlbnQgbmFtZSB0aGF0IHRoZSBgQnV0dG9uVmlldyNleGVjdXRlYCBldmVudCB3aWxsIGJlIGRlbGVnYXRlZCB0by5cblx0ICogQHJldHVybnMge21vZHVsZTp1aS9idXR0b24vYnV0dG9udmlld35CdXR0b25WaWV3fSBUaGUgYnV0dG9uIHZpZXcgaW5zdGFuY2UuXG5cdCAqL1xuXHRfY3JlYXRlQnV0dG9uKCBsYWJlbCwgaWNvbiwgZXZlbnROYW1lICkge1xuXHRcdGNvbnN0IGJ1dHRvbiA9IG5ldyBCdXR0b25WaWV3KCB0aGlzLmxvY2FsZSApO1xuXG5cdFx0YnV0dG9uLnNldCgge1xuXHRcdFx0bGFiZWwsXG5cdFx0XHRpY29uLFxuXHRcdFx0dG9vbHRpcDogdHJ1ZVxuXHRcdH0gKTtcblxuXHRcdGJ1dHRvbi5kZWxlZ2F0ZSggJ2V4ZWN1dGUnICkudG8oIHRoaXMsIGV2ZW50TmFtZSApO1xuXG5cdFx0cmV0dXJuIGJ1dHRvbjtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgbGluayBocmVmIHByZXZpZXcgYnV0dG9uLlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcmV0dXJucyB7bW9kdWxlOnVpL2J1dHRvbi9idXR0b252aWV3fkJ1dHRvblZpZXd9IFRoZSBidXR0b24gdmlldyBpbnN0YW5jZS5cblx0ICovXG5cdF9jcmVhdGVQcmV2aWV3QnV0dG9uKCkge1xuXHRcdGNvbnN0IGJ1dHRvbiA9IG5ldyBCdXR0b25WaWV3KCB0aGlzLmxvY2FsZSApO1xuXHRcdGNvbnN0IGJpbmQgPSB0aGlzLmJpbmRUZW1wbGF0ZTtcblx0XHRjb25zdCB0ID0gdGhpcy50O1xuXG5cdFx0YnV0dG9uLnNldCgge1xuXHRcdFx0d2l0aFRleHQ6IHRydWUsXG5cdFx0XHR0b29sdGlwOiB0KCAndGVtcGxhdGUgdmFsaWFibGUgaWQnIClcblx0XHR9ICk7XG5cblx0XHRidXR0b24uZXh0ZW5kVGVtcGxhdGUoIHtcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0Y2xhc3M6IFtcblx0XHRcdFx0XHQnY2snLFxuXHRcdFx0XHRcdCdjay1saW5rLWFjdGlvbnNfX3ByZXZpZXcnXG5cdFx0XHRcdF0sXG5cdFx0XHRcdGlkOiBiaW5kLnRvKCAnaWQnLCBpZCA9PiBpZCAgKSAsXG5cdFx0XHRcdHRhcmdldDogJ19ibGFuaycsXG5cdFx0XHRcdHJlbDogJ25vb3BlbmVyIG5vcmVmZXJyZXInXG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0YnV0dG9uLmJpbmQoICdsYWJlbCcgKS50byggdGhpcywgJ2RhdGEtdGVtcGxhdGUtdmFyJywgaWQgPT4ge1xuXHRcdFx0cmV0dXJuIGlkIHx8IHQoICdUaGlzIHZhcmlhYmxlIGhhcyBubyBpZCcgKTtcblx0XHR9ICk7XG5cblx0XHRidXR0b24uYmluZCggJ2lzRW5hYmxlZCcgKS50byggdGhpcywgJ2RhdGEtdGVtcGxhdGUtdmFyJywgaWQgPT4gISFpZCApO1xuXG5cdFx0YnV0dG9uLnRlbXBsYXRlLnRhZyA9ICdzcGFuJztcblx0XHRidXR0b24udGVtcGxhdGUuZXZlbnRMaXN0ZW5lcnMgPSB7fTtcblxuXHRcdHJldHVybiBidXR0b247XG5cdH1cbn1cblxuLyoqXG4gKiBGaXJlZCB3aGVuIHRoZSB7QGxpbmsgI2VkaXRCdXR0b25WaWV3fSBpcyBjbGlja2VkLlxuICpcbiAqIEBldmVudCBlZGl0XG4gKi9cblxuLyoqXG4gKiBGaXJlZCB3aGVuIHRoZSB7QGxpbmsgI3VubGlua0J1dHRvblZpZXd9IGlzIGNsaWNrZWQuXG4gKlxuICogQGV2ZW50IHVubGlua1xuICovXG4iLCIvKipcbiAqIEBsaWNlbnNlIENvcHlyaWdodCAoYykgMjAwMy0yMDIxLCBDS1NvdXJjZSAtIEZyZWRlcmljbyBLbmFiYmVuLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogRm9yIGxpY2Vuc2luZywgc2VlIExJQ0VOU0UubWQgb3IgaHR0cHM6Ly9ja2VkaXRvci5jb20vbGVnYWwvY2tlZGl0b3Itb3NzLWxpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGluay91dGlsc1xuICovXG5cbmltcG9ydCB7IHVwcGVyRmlyc3QgfSBmcm9tICdsb2Rhc2gtZXMnO1xuXG5jb25zdCBBVFRSSUJVVEVfV0hJVEVTUEFDRVMgPSAvW1xcdTAwMDAtXFx1MDAyMFxcdTAwQTBcXHUxNjgwXFx1MTgwRVxcdTIwMDAtXFx1MjAyOVxcdTIwNWZcXHUzMDAwXS9nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnRyb2wtcmVnZXhcbmNvbnN0IFNBRkVfVVJMID0gL14oPzooPzpodHRwcz98ZnRwcz98bWFpbHRvKTp8W15hLXpdfFthLXorLi1dKyg/OlteYS16Ky46LV18JCkpL2k7XG5cbi8vIFNpbXBsaWZpZWQgZW1haWwgdGVzdCAtIHNob3VsZCBiZSBydW4gb3ZlciBwcmV2aW91c2x5IGZvdW5kIFVSTC5cbmNvbnN0IEVNQUlMX1JFR19FWFAgPSAvXltcXFNdK0AoKD8hWy1fXSkoPzpbLVxcd1xcdTAwYTEtXFx1ZmZmZl17MCw2M31bXi1fXVxcLikpKyg/OlthLXpcXHUwMGExLVxcdWZmZmZdezIsfSkkL2k7XG5cbi8vIFRoZSByZWdleCBjaGVja3MgZm9yIHRoZSBwcm90b2NvbCBzeW50YXggKCd4eHh4Oi8vJyBvciAneHh4eDonKVxuLy8gb3Igbm9uLXdvcmQgY2hhcmFjdGVycyBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBsaW5rICgnLycsICcjJyBldGMuKS5cbmNvbnN0IFBST1RPQ09MX1JFR19FWFAgPSAvXigoXFx3KzooXFwvezIsfSk/KXwoXFxXKSkvaTtcbmNvbnN0IEhJR0hMSUdIVF9DTEFTUyA9ICdjay10ZW1wbGF0ZSc7XG4vKipcbiAqIEEga2V5c3Ryb2tlIHVzZWQgYnkgdGhlIHtAbGluayBtb2R1bGU6bGluay9saW5rdWl+VGVtcGxhdGVVaSBsaW5rIFVJIGZlYXR1cmV9LlxuICovXG5leHBvcnQgY29uc3QgVEVNUExBVEVfS0VZU1RST0tFID0gJ0N0cmwrRSc7XG5leHBvcnQgY29uc3QgU0FWRV9LRVlTVFJPS0UgPSAnQ3RybCtTaGlmdCtTJztcblxuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiBhIGdpdmVuIHZpZXcgbm9kZSBpcyB0aGUgbGluayBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmVuZ2luZS92aWV3L25vZGV+Tm9kZX0gbm9kZVxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xpbmtFbGVtZW50KCBub2RlICkge1xuXHRyZXR1cm4gbm9kZS5pcyggJ2F0dHJpYnV0ZUVsZW1lbnQnICkgJiYgISFub2RlLmdldEN1c3RvbVByb3BlcnR5KCAndGVtcGxhdGUnICk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGxpbmsge0BsaW5rIG1vZHVsZTplbmdpbmUvdmlldy9hdHRyaWJ1dGVlbGVtZW50fkF0dHJpYnV0ZUVsZW1lbnR9IHdpdGggdGhlIHByb3ZpZGVkIGBocmVmYCBhdHRyaWJ1dGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhyZWZcbiAqIEBwYXJhbSB7bW9kdWxlOmVuZ2luZS9jb252ZXJzaW9uL2Rvd25jYXN0ZGlzcGF0Y2hlcn5Eb3duY2FzdENvbnZlcnNpb25BcGl9IGNvbnZlcnNpb25BcGlcbiAqIEByZXR1cm5zIHttb2R1bGU6ZW5naW5lL3ZpZXcvYXR0cmlidXRlZWxlbWVudH5BdHRyaWJ1dGVFbGVtZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGVtcGxhdGVFbGVtZW50KCBpZCwgeyB3cml0ZXIgfSApIHtcblx0Ly9pZihpZCAhPT0gbnVsbCl7XG5cblx0XHQvLyBQcmlvcml0eSA1IC0gaHR0cHM6Ly9naXRodWIuY29tL2NrZWRpdG9yL2NrZWRpdG9yNS1saW5rL2lzc3Vlcy8xMjEuXG5cdFx0Y29uc3QgbGlua0VsZW1lbnQgPSB3cml0ZXIuY3JlYXRlQXR0cmlidXRlRWxlbWVudCggJ3NwYW4nLCAgeyBjbGFzczogSElHSExJR0hUX0NMQVNTICwgJ2RhdGEtdGVtcGxhdGUtdmFyJyA6IGlkIH0sIHsgcHJpb3JpdHk6IDUgfSApO1xuXHRcdHdyaXRlci5zZXRDdXN0b21Qcm9wZXJ0eSggJ3RlbXBsYXRlJywgdHJ1ZSwgbGlua0VsZW1lbnQgKTtcblxuXHRcdHJldHVybiBsaW5rRWxlbWVudDtcblx0Ly99XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHNhZmUgVVJMIGJhc2VkIG9uIGEgZ2l2ZW4gdmFsdWUuXG4gKlxuICogQSBVUkwgaXMgY29uc2lkZXJlZCBzYWZlIGlmIGl0IGlzIHNhZmUgZm9yIHRoZSB1c2VyIChkb2VzIG5vdCBjb250YWluIGFueSBtYWxpY2lvdXMgY29kZSkuXG4gKlxuICogSWYgYSBVUkwgaXMgY29uc2lkZXJlZCB1bnNhZmUsIGEgc2ltcGxlIGBcIiNcImAgaXMgcmV0dXJuZWQuXG4gKlxuICogQHByb3RlY3RlZFxuICogQHBhcmFtIHsqfSB1cmxcbiAqIEByZXR1cm5zIHtTdHJpbmd9IFNhZmUgVVJMLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5zdXJlU2FmZVVybCggdXJsICkge1xuXHR1cmwgPSBTdHJpbmcoIHVybCApO1xuXG5cdHJldHVybiBpc1NhZmVVcmwoIHVybCApID8gdXJsIDogJyMnO1xufVxuXG4vLyBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gVVJMIGlzIHNhZmUgZm9yIHRoZSB1c2VyIChkb2VzIG5vdCBjb250YWluIGFueSBtYWxpY2lvdXMgY29kZSkuXG4vL1xuLy8gQHBhcmFtIHtTdHJpbmd9IHVybCBVUkwgdG8gY2hlY2suXG5mdW5jdGlvbiBpc1NhZmVVcmwoIHVybCApIHtcblx0Y29uc3Qgbm9ybWFsaXplZFVybCA9IHVybC5yZXBsYWNlKCBBVFRSSUJVVEVfV0hJVEVTUEFDRVMsICcnICk7XG5cblx0cmV0dXJuIG5vcm1hbGl6ZWRVcmwubWF0Y2goIFNBRkVfVVJMICk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt+TGlua0NvbmZpZyNkZWNvcmF0b3JzIGBjb25maWcubGluay5kZWNvcmF0b3JzYH0gY29uZmlndXJhdGlvbiBwcm9jZXNzZWRcbiAqIHRvIHJlc3BlY3QgdGhlIGxvY2FsZSBvZiB0aGUgZWRpdG9yLCBpLmUuIHRvIGRpc3BsYXkgdGhlIHtAbGluayBtb2R1bGU6bGluay9saW5rfkxpbmtEZWNvcmF0b3JNYW51YWxEZWZpbml0aW9uIGxhYmVsfVxuICogaW4gdGhlIGNvcnJlY3QgbGFuZ3VhZ2UuXG4gKlxuICogKipOb3RlKio6IE9ubHkgdGhlIGZldyBtb3N0IGNvbW1vbmx5IHVzZWQgbGFiZWxzIGFyZSB0cmFuc2xhdGVkIGF1dG9tYXRpY2FsbHkuIE90aGVyIGxhYmVscyBzaG91bGQgYmUgbWFudWFsbHlcbiAqIHRyYW5zbGF0ZWQgaW4gdGhlIHtAbGluayBtb2R1bGU6bGluay9saW5rfkxpbmtDb25maWcjZGVjb3JhdG9ycyBgY29uZmlnLmxpbmsuZGVjb3JhdG9yc2B9IGNvbmZpZ3VyYXRpb24uXG4gKlxuICogQHBhcmFtIHttb2R1bGU6dXRpbHMvbG9jYWxlfkxvY2FsZSN0fSB0IHNob3J0aGFuZCBmb3Ige0BsaW5rIG1vZHVsZTp1dGlscy9sb2NhbGV+TG9jYWxlI3QgTG9jYWxlI3R9XG4gKiBAcGFyYW0ge0FycmF5Ljxtb2R1bGU6bGluay9saW5rfkxpbmtEZWNvcmF0b3JEZWZpbml0aW9uPn0gVGhlIGRlY29yYXRvciByZWZlcmVuY2VcbiAqIHdoZXJlIHRoZSBsYWJlbCB2YWx1ZXMgc2hvdWxkIGJlIGxvY2FsaXplZC5cbiAqIEByZXR1cm5zIHtBcnJheS48bW9kdWxlOmxpbmsvbGlua35MaW5rRGVjb3JhdG9yRGVmaW5pdGlvbj59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbGl6ZWREZWNvcmF0b3JzKCB0LCBkZWNvcmF0b3JzICkge1xuXHRjb25zdCBsb2NhbGl6ZWREZWNvcmF0b3JzTGFiZWxzID0ge1xuXHRcdCdPcGVuIGluIGEgbmV3IHRhYic6IHQoICdPcGVuIGluIGEgbmV3IHRhYicgKSxcblx0XHQnRG93bmxvYWRhYmxlJzogdCggJ0Rvd25sb2FkYWJsZScgKVxuXHR9O1xuXG5cdGRlY29yYXRvcnMuZm9yRWFjaCggZGVjb3JhdG9yID0+IHtcblx0XHRpZiAoIGRlY29yYXRvci5sYWJlbCAmJiBsb2NhbGl6ZWREZWNvcmF0b3JzTGFiZWxzWyBkZWNvcmF0b3IubGFiZWwgXSApIHtcblx0XHRcdGRlY29yYXRvci5sYWJlbCA9IGxvY2FsaXplZERlY29yYXRvcnNMYWJlbHNbIGRlY29yYXRvci5sYWJlbCBdO1xuXHRcdH1cblx0XHRyZXR1cm4gZGVjb3JhdG9yO1xuXHR9ICk7XG5cblx0cmV0dXJuIGRlY29yYXRvcnM7XG59XG5cbi8qKlxuICogQ29udmVydHMgYW4gb2JqZWN0IHdpdGggZGVmaW5lZCBkZWNvcmF0b3JzIHRvIGEgbm9ybWFsaXplZCBhcnJheSBvZiBkZWNvcmF0b3JzLiBUaGUgYGlkYCBrZXkgaXMgYWRkZWQgZm9yIGVhY2ggZGVjb3JhdG9yIGFuZFxuICogaXMgdXNlZCBhcyB0aGUgYXR0cmlidXRlJ3MgbmFtZSBpbiB0aGUgbW9kZWwuXG4gKlxuICogQHBhcmFtIHtPYmplY3QuPFN0cmluZywgbW9kdWxlOmxpbmsvbGlua35MaW5rRGVjb3JhdG9yRGVmaW5pdGlvbj59IGRlY29yYXRvcnNcbiAqIEByZXR1cm5zIHtBcnJheS48bW9kdWxlOmxpbmsvbGlua35MaW5rRGVjb3JhdG9yRGVmaW5pdGlvbj59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVEZWNvcmF0b3JzKCBkZWNvcmF0b3JzICkge1xuXHRjb25zdCByZXRBcnJheSA9IFtdO1xuXG5cdGlmICggZGVjb3JhdG9ycyApIHtcblx0XHRmb3IgKCBjb25zdCBbIGtleSwgdmFsdWUgXSBvZiBPYmplY3QuZW50cmllcyggZGVjb3JhdG9ycyApICkge1xuXHRcdFx0Y29uc3QgZGVjb3JhdG9yID0gT2JqZWN0LmFzc2lnbihcblx0XHRcdFx0e30sXG5cdFx0XHRcdHZhbHVlLFxuXHRcdFx0XHR7IGlkOiBgbGluayR7IHVwcGVyRmlyc3QoIGtleSApIH1gIH1cblx0XHRcdCk7XG5cdFx0XHRyZXRBcnJheS5wdXNoKCBkZWNvcmF0b3IgKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcmV0QXJyYXk7XG59XG5cbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHNwZWNpZmllZCBgZWxlbWVudGAgaXMgYW4gaW1hZ2UgYW5kIGl0IGNhbiBiZSBsaW5rZWQgKHRoZSBlbGVtZW50IGFsbG93cyBoYXZpbmcgdGhlIGBsaW5rSHJlZmAgYXR0cmlidXRlKS5cbiAqXG4gKiBAcGFyYW1zIHttb2R1bGU6ZW5naW5lL21vZGVsL2VsZW1lbnR+RWxlbWVudHxudWxsfSBlbGVtZW50XG4gKiBAcGFyYW1zIHttb2R1bGU6ZW5naW5lL21vZGVsL3NjaGVtYX5TY2hlbWF9IHNjaGVtYVxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0ltYWdlQWxsb3dlZCggZWxlbWVudCwgc2NoZW1hICkge1xuXHRpZiAoICFlbGVtZW50ICkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJldHVybiBlbGVtZW50LmlzKCAnZWxlbWVudCcsICdpbWFnZScgKSAmJiBzY2hlbWEuY2hlY2tBdHRyaWJ1dGUoICdpbWFnZScsICdsaW5rSHJlZicgKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgc3BlY2lmaWVkIGB2YWx1ZWAgaXMgYW4gZW1haWwuXG4gKlxuICogQHBhcmFtcyB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0VtYWlsKCB2YWx1ZSApIHtcblx0cmV0dXJuIEVNQUlMX1JFR19FWFAudGVzdCggdmFsdWUgKTtcbn1cblxuLyoqXG4gKiBBZGRzIHRoZSBwcm90b2NvbCBwcmVmaXggdG8gdGhlIHNwZWNpZmllZCBgbGlua2Agd2hlbjpcbiAqXG4gKiAqIGl0IGRvZXMgbm90IGNvbnRhaW4gaXQgYWxyZWFkeSwgYW5kIHRoZXJlIGlzIGEge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt+TGlua0NvbmZpZyNkZWZhdWx0UHJvdG9jb2wgYGRlZmF1bHRQcm90b2NvbGAgfVxuICogY29uZmlndXJhdGlvbiB2YWx1ZSBwcm92aWRlZCxcbiAqICogb3IgdGhlIGxpbmsgaXMgYW4gZW1haWwgYWRkcmVzcy5cbiAqXG4gKlxuICogQHBhcmFtcyB7U3RyaW5nfSBsaW5rXG4gKiBAcGFyYW1zIHtTdHJpbmd9IGRlZmF1bHRQcm90b2NvbFxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRMaW5rUHJvdG9jb2xJZkFwcGxpY2FibGUoIGxpbmssIGRlZmF1bHRQcm90b2NvbCApIHtcblx0Y29uc3QgcHJvdG9jb2wgPSBpc0VtYWlsKCBsaW5rICkgPyAnbWFpbHRvOicgOiBkZWZhdWx0UHJvdG9jb2w7XG5cdGNvbnN0IGlzUHJvdG9jb2xOZWVkZWQgPSAhIXByb3RvY29sICYmICFQUk9UT0NPTF9SRUdfRVhQLnRlc3QoIGxpbmsgKTtcblxuXHRyZXR1cm4gbGluayAmJiBpc1Byb3RvY29sTmVlZGVkID8gcHJvdG9jb2wgKyBsaW5rIDogbGluaztcbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG4vKipcbiAqIEEgcGx1Z2luIHRoYXQgY29udmVydHMgY3VzdG9tIGF0dHJpYnV0ZXMgZm9yIGVsZW1lbnRzIHRoYXQgYXJlIHdyYXBwZWQgaW4gPGZpZ3VyZT4gaW4gdGhlIHZpZXcuXG4gKi9cbmNsYXNzIEN1c3RvbUZpZ3VyZUF0dHJpYnV0ZXMge1xuXHQvKipcblx0ICogUGx1Z2luJ3MgY29uc3RydWN0b3IgLSByZWNlaXZlcyBhbiBlZGl0b3IgaW5zdGFuY2Ugb24gY3JlYXRpb24uXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggZWRpdG9yICkge1xuXHRcdC8vIFNhdmUgcmVmZXJlbmNlIHRvIHRoZSBlZGl0b3IuXG5cdFx0dGhpcy5lZGl0b3IgPSBlZGl0b3I7XG5cdH1cblxuXHQvKipcblx0ICogU2V0cyB0aGUgY29udmVyc2lvbiB1cCBhbmQgZXh0ZW5kcyB0aGUgdGFibGUgJiBpbWFnZSBmZWF0dXJlcyBzY2hlbWEuXG5cdCAqXG5cdCAqIFNjaGVtYSBleHRlbmRpbmcgbXVzdCBiZSBkb25lIGluIHRoZSBcImFmdGVySW5pdCgpXCIgY2FsbCBiZWNhdXNlIHBsdWdpbnMgZGVmaW5lIHRoZWlyIHNjaGVtYSBpbiBcImluaXQoKVwiLlxuXHQgKi9cblx0YWZ0ZXJJbml0KCkge1xuXHRcdGNvbnN0IGVkaXRvciA9IHRoaXMuZWRpdG9yO1xuXG5cdFx0Ly8gRGVmaW5lIG9uIHdoaWNoIGVsZW1lbnRzIHRoZSBDU1MgY2xhc3NlcyBzaG91bGQgYmUgcHJlc2VydmVkOlxuXHRcdHNldHVwQ3VzdG9tQ2xhc3NDb252ZXJzaW9uKCAnaW1nJywgJ2ltYWdlJywgZWRpdG9yICk7XG5cdFx0c2V0dXBDdXN0b21DbGFzc0NvbnZlcnNpb24oICd0YWJsZScsICd0YWJsZScsIGVkaXRvciApO1xuXG5cdFx0ZWRpdG9yLmNvbnZlcnNpb24uZm9yKCAndXBjYXN0JyApLmFkZCggdXBjYXN0Q3VzdG9tQ2xhc3NlcyggJ2ZpZ3VyZScgKSwgeyBwcmlvcml0eTogJ2xvdycgfSApO1xuXG5cdFx0Ly8gRGVmaW5lIGN1c3RvbSBhdHRyaWJ1dGVzIHRoYXQgc2hvdWxkIGJlIHByZXNlcnZlZC5cblx0XHRzZXR1cEN1c3RvbUF0dHJpYnV0ZUNvbnZlcnNpb24oICdpbWcnLCAnaW1hZ2UnLCAnaWQnLCBlZGl0b3IgKTtcblx0XHRzZXR1cEN1c3RvbUF0dHJpYnV0ZUNvbnZlcnNpb24oICd0YWJsZScsICd0YWJsZScsICdpZCcsIGVkaXRvciApO1xuXHR9XG59XG5cbi8qKlxuICogU2V0cyB1cCBhIGNvbnZlcnNpb24gdGhhdCBwcmVzZXJ2ZXMgY2xhc3NlcyBvbiA8aW1nPiBhbmQgPHRhYmxlPiBlbGVtZW50cy5cbiAqL1xuZnVuY3Rpb24gc2V0dXBDdXN0b21DbGFzc0NvbnZlcnNpb24oIHZpZXdFbGVtZW50TmFtZSwgbW9kZWxFbGVtZW50TmFtZSwgZWRpdG9yICkge1xuXHQvLyBUaGUgJ2N1c3RvbUNsYXNzJyBhdHRyaWJ1dGUgc3RvcmVzIGN1c3RvbSBjbGFzc2VzIGZyb20gdGhlIGRhdGEgaW4gdGhlIG1vZGVsIHNvIHRoYXQgc2NoZW1hIGRlZmluaXRpb25zIGFsbG93IHRoaXMgYXR0cmlidXRlLlxuXHRlZGl0b3IubW9kZWwuc2NoZW1hLmV4dGVuZCggbW9kZWxFbGVtZW50TmFtZSwgeyBhbGxvd0F0dHJpYnV0ZXM6IFsgJ2N1c3RvbUNsYXNzJyBdIH0gKTtcblxuXHQvLyBEZWZpbmVzIHVwY2FzdCBjb252ZXJ0ZXJzIGZvciB0aGUgPGltZz4gYW5kIDx0YWJsZT4gZWxlbWVudHMgd2l0aCBhIFwibG93XCIgcHJpb3JpdHkgc28gdGhleSBhcmUgcnVuIGFmdGVyIHRoZSBkZWZhdWx0IGNvbnZlcnRlcnMuXG5cdGVkaXRvci5jb252ZXJzaW9uLmZvciggJ3VwY2FzdCcgKS5hZGQoIHVwY2FzdEN1c3RvbUNsYXNzZXMoIHZpZXdFbGVtZW50TmFtZSApLCB7IHByaW9yaXR5OiAnbG93JyB9ICk7XG5cblx0Ly8gRGVmaW5lcyBkb3duY2FzdCBjb252ZXJ0ZXJzIGZvciBhIG1vZGVsIGVsZW1lbnQgd2l0aCBhIFwibG93XCIgcHJpb3JpdHkgc28gdGhleSBhcmUgcnVuIGFmdGVyIHRoZSBkZWZhdWx0IGNvbnZlcnRlcnMuXG5cdC8vIFVzZSBgZG93bmNhc3RDdXN0b21DbGFzc2VzVG9GaWd1cmVgIGlmIHlvdSB3YW50IHRvIGtlZXAgeW91ciBjbGFzc2VzIG9uIDxmaWd1cmU+IGVsZW1lbnQgb3IgYGRvd25jYXN0Q3VzdG9tQ2xhc3Nlc1RvQ2hpbGRgXG5cdC8vIGlmIHlvdSB3b3VsZCBsaWtlIHRvIGtlZXAgeW91ciBjbGFzc2VzIG9uIGEgPGZpZ3VyZT4gY2hpbGQgZWxlbWVudCwgaS5lLiA8aW1nPi5cblx0ZWRpdG9yLmNvbnZlcnNpb24uZm9yKCAnZG93bmNhc3QnICkuYWRkKCBkb3duY2FzdEN1c3RvbUNsYXNzZXNUb0ZpZ3VyZSggbW9kZWxFbGVtZW50TmFtZSApLCB7IHByaW9yaXR5OiAnbG93JyB9ICk7XG5cdC8vIGVkaXRvci5jb252ZXJzaW9uLmZvciggJ2Rvd25jYXN0JyApLmFkZCggZG93bmNhc3RDdXN0b21DbGFzc2VzVG9DaGlsZCggdmlld0VsZW1lbnROYW1lLCBtb2RlbEVsZW1lbnROYW1lICksIHsgcHJpb3JpdHk6ICdsb3cnIH0gKTtcbn1cblxuLyoqXG4gKiBTZXRzIHVwIGEgY29udmVyc2lvbiBmb3IgYSBjdXN0b20gYXR0cmlidXRlIG9uIHRoZSB2aWV3IGVsZW1lbnRzIGNvbnRhaW5lZCBpbnNpZGUgYSA8ZmlndXJlPi5cbiAqXG4gKiBUaGlzIG1ldGhvZDpcbiAqIC0gQWRkcyBwcm9wZXIgc2NoZW1hIHJ1bGVzLlxuICogLSBBZGRzIGFuIHVwY2FzdCBjb252ZXJ0ZXIuXG4gKiAtIEFkZHMgYSBkb3duY2FzdCBjb252ZXJ0ZXIuXG4gKi9cbmZ1bmN0aW9uIHNldHVwQ3VzdG9tQXR0cmlidXRlQ29udmVyc2lvbiggdmlld0VsZW1lbnROYW1lLCBtb2RlbEVsZW1lbnROYW1lLCB2aWV3QXR0cmlidXRlLCBlZGl0b3IgKSB7XG5cdC8vIEV4dGVuZHMgdGhlIHNjaGVtYSB0byBzdG9yZSBhbiBhdHRyaWJ1dGUgaW4gdGhlIG1vZGVsLlxuXHRjb25zdCBtb2RlbEF0dHJpYnV0ZSA9IGBjdXN0b20keyB2aWV3QXR0cmlidXRlIH1gO1xuXG5cdGVkaXRvci5tb2RlbC5zY2hlbWEuZXh0ZW5kKCBtb2RlbEVsZW1lbnROYW1lLCB7IGFsbG93QXR0cmlidXRlczogWyBtb2RlbEF0dHJpYnV0ZSBdIH0gKTtcblxuXHRlZGl0b3IuY29udmVyc2lvbi5mb3IoICd1cGNhc3QnICkuYWRkKCB1cGNhc3RBdHRyaWJ1dGUoIHZpZXdFbGVtZW50TmFtZSwgdmlld0F0dHJpYnV0ZSwgbW9kZWxBdHRyaWJ1dGUgKSApO1xuXHRlZGl0b3IuY29udmVyc2lvbi5mb3IoICdkb3duY2FzdCcgKS5hZGQoIGRvd25jYXN0QXR0cmlidXRlKCBtb2RlbEVsZW1lbnROYW1lLCB2aWV3RWxlbWVudE5hbWUsIHZpZXdBdHRyaWJ1dGUsIG1vZGVsQXR0cmlidXRlICkgKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIHVwY2FzdCBjb252ZXJ0ZXIgdGhhdCB3aWxsIHBhc3MgYWxsIGNsYXNzZXMgZnJvbSB0aGUgdmlldyBlbGVtZW50IHRvIHRoZSBtb2RlbCBlbGVtZW50LlxuICovXG5mdW5jdGlvbiB1cGNhc3RDdXN0b21DbGFzc2VzKCBlbGVtZW50TmFtZSApIHtcblx0cmV0dXJuIGRpc3BhdGNoZXIgPT4gZGlzcGF0Y2hlci5vbiggYGVsZW1lbnQ6JHsgZWxlbWVudE5hbWUgfWAsICggZXZ0LCBkYXRhLCBjb252ZXJzaW9uQXBpICkgPT4ge1xuXHRcdGNvbnN0IHZpZXdJdGVtID0gZGF0YS52aWV3SXRlbTtcblx0XHRjb25zdCBtb2RlbFJhbmdlID0gZGF0YS5tb2RlbFJhbmdlO1xuXG5cdFx0Y29uc3QgbW9kZWxFbGVtZW50ID0gbW9kZWxSYW5nZSAmJiBtb2RlbFJhbmdlLnN0YXJ0Lm5vZGVBZnRlcjtcblxuXHRcdGlmICggIW1vZGVsRWxlbWVudCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBUaGUgdXBjYXN0IGNvbnZlcnNpb24gcGlja3MgdXAgY2xhc3NlcyBmcm9tIHRoZSBiYXNlIGVsZW1lbnQgYW5kIGZyb20gdGhlIDxmaWd1cmU+IGVsZW1lbnQgc28gaXQgc2hvdWxkIGJlIGV4dGVuc2libGUuXG5cdFx0Y29uc3QgY3VycmVudEF0dHJpYnV0ZVZhbHVlID0gbW9kZWxFbGVtZW50LmdldEF0dHJpYnV0ZSggJ2N1c3RvbUNsYXNzJyApIHx8IFtdO1xuXG5cdFx0Y3VycmVudEF0dHJpYnV0ZVZhbHVlLnB1c2goIC4uLnZpZXdJdGVtLmdldENsYXNzTmFtZXMoKSApO1xuXG5cdFx0Y29udmVyc2lvbkFwaS53cml0ZXIuc2V0QXR0cmlidXRlKCAnY3VzdG9tQ2xhc3MnLCBjdXJyZW50QXR0cmlidXRlVmFsdWUsIG1vZGVsRWxlbWVudCApO1xuXHR9ICk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRvd25jYXN0IGNvbnZlcnRlciB0aGF0IGFkZHMgY2xhc3NlcyBkZWZpbmVkIGluIHRoZSBgY3VzdG9tQ2xhc3NgIGF0dHJpYnV0ZSB0byBhIDxmaWd1cmU+IGVsZW1lbnQuXG4gKlxuICogVGhpcyBjb252ZXJ0ZXIgZXhwZWN0cyB0aGF0IHRoZSB2aWV3IGVsZW1lbnQgaXMgbmVzdGVkIGluIGEgPGZpZ3VyZT4gZWxlbWVudC5cbiAqL1xuZnVuY3Rpb24gZG93bmNhc3RDdXN0b21DbGFzc2VzVG9GaWd1cmUoIG1vZGVsRWxlbWVudE5hbWUgKSB7XG5cdHJldHVybiBkaXNwYXRjaGVyID0+IGRpc3BhdGNoZXIub24oIGBpbnNlcnQ6JHsgbW9kZWxFbGVtZW50TmFtZSB9YCwgKCBldnQsIGRhdGEsIGNvbnZlcnNpb25BcGkgKSA9PiB7XG5cdFx0Y29uc3QgbW9kZWxFbGVtZW50ID0gZGF0YS5pdGVtO1xuXG5cdFx0Y29uc3Qgdmlld0ZpZ3VyZSA9IGNvbnZlcnNpb25BcGkubWFwcGVyLnRvVmlld0VsZW1lbnQoIG1vZGVsRWxlbWVudCApO1xuXG5cdFx0aWYgKCAhdmlld0ZpZ3VyZSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBUaGUgY29kZSBiZWxvdyBhc3N1bWVzIHRoYXQgY2xhc3NlcyBhcmUgc2V0IG9uIHRoZSA8ZmlndXJlPiBlbGVtZW50LlxuXHRcdGNvbnZlcnNpb25BcGkud3JpdGVyLmFkZENsYXNzKCBtb2RlbEVsZW1lbnQuZ2V0QXR0cmlidXRlKCAnY3VzdG9tQ2xhc3MnICksIHZpZXdGaWd1cmUgKTtcblx0fSApO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBkb3duY2FzdCBjb252ZXJ0ZXIgdGhhdCBhZGRzIGNsYXNzZXMgZGVmaW5lZCBpbiB0aGUgYGN1c3RvbUNsYXNzYCBhdHRyaWJ1dGUgdG8gYSA8ZmlndXJlPiBjaGlsZCBlbGVtZW50LlxuICpcbiAqIFRoaXMgY29udmVydGVyIGV4cGVjdHMgdGhhdCB0aGUgdmlldyBlbGVtZW50IGlzIG5lc3RlZCBpbiBhIDxmaWd1cmU+IGVsZW1lbnQuXG4gKi9cbmZ1bmN0aW9uIGRvd25jYXN0Q3VzdG9tQ2xhc3Nlc1RvQ2hpbGQoIHZpZXdFbGVtZW50TmFtZSwgbW9kZWxFbGVtZW50TmFtZSApIHtcblx0cmV0dXJuIGRpc3BhdGNoZXIgPT4gZGlzcGF0Y2hlci5vbiggYGluc2VydDokeyBtb2RlbEVsZW1lbnROYW1lIH1gLCAoIGV2dCwgZGF0YSwgY29udmVyc2lvbkFwaSApID0+IHtcblx0XHRjb25zdCBtb2RlbEVsZW1lbnQgPSBkYXRhLml0ZW07XG5cblx0XHRjb25zdCB2aWV3RmlndXJlID0gY29udmVyc2lvbkFwaS5tYXBwZXIudG9WaWV3RWxlbWVudCggbW9kZWxFbGVtZW50ICk7XG5cblx0XHRpZiAoICF2aWV3RmlndXJlICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIFRoZSBjb2RlIGJlbG93IGFzc3VtZXMgdGhhdCBjbGFzc2VzIGFyZSBzZXQgb24gdGhlIGVsZW1lbnQgaW5zaWRlIHRoZSA8ZmlndXJlPi5cblx0XHRjb25zdCB2aWV3RWxlbWVudCA9IGZpbmRWaWV3Q2hpbGQoIHZpZXdGaWd1cmUsIHZpZXdFbGVtZW50TmFtZSwgY29udmVyc2lvbkFwaSApO1xuXG5cdFx0Y29udmVyc2lvbkFwaS53cml0ZXIuYWRkQ2xhc3MoIG1vZGVsRWxlbWVudC5nZXRBdHRyaWJ1dGUoICdjdXN0b21DbGFzcycgKSwgdmlld0VsZW1lbnQgKTtcblx0fSApO1xufVxuXG4vKipcbiAqIEhlbHBlciBtZXRob2QgdGhhdCBzZWFyY2hlcyBmb3IgYSBnaXZlbiB2aWV3IGVsZW1lbnQgaW4gYWxsIGNoaWxkcmVuIG9mIHRoZSBtb2RlbCBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOmVuZ2luZS92aWV3L2l0ZW1+SXRlbX0gdmlld0VsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSB2aWV3RWxlbWVudE5hbWVcbiAqIEBwYXJhbSB7bW9kdWxlOmVuZ2luZS9jb252ZXJzaW9uL2Rvd25jYXN0ZGlzcGF0Y2hlcn5Eb3duY2FzdENvbnZlcnNpb25BcGl9IGNvbnZlcnNpb25BcGlcbiAqIEByZXR1cm4ge21vZHVsZTplbmdpbmUvdmlldy9pdGVtfkl0ZW19XG4gKi9cbmZ1bmN0aW9uIGZpbmRWaWV3Q2hpbGQoIHZpZXdFbGVtZW50LCB2aWV3RWxlbWVudE5hbWUsIGNvbnZlcnNpb25BcGkgKSB7XG5cdGNvbnN0IHZpZXdDaGlsZHJlbiA9IEFycmF5LmZyb20oIGNvbnZlcnNpb25BcGkud3JpdGVyLmNyZWF0ZVJhbmdlSW4oIHZpZXdFbGVtZW50ICkuZ2V0SXRlbXMoKSApO1xuXG5cdHJldHVybiB2aWV3Q2hpbGRyZW4uZmluZCggaXRlbSA9PiBpdGVtLmlzKCAnZWxlbWVudCcsIHZpZXdFbGVtZW50TmFtZSApICk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgY3VzdG9tIGF0dHJpYnV0ZSB1cGNhc3QgY29udmVydGVyLlxuICovXG5mdW5jdGlvbiB1cGNhc3RBdHRyaWJ1dGUoIHZpZXdFbGVtZW50TmFtZSwgdmlld0F0dHJpYnV0ZSwgbW9kZWxBdHRyaWJ1dGUgKSB7XG5cdHJldHVybiBkaXNwYXRjaGVyID0+IGRpc3BhdGNoZXIub24oIGBlbGVtZW50OiR7IHZpZXdFbGVtZW50TmFtZSB9YCwgKCBldnQsIGRhdGEsIGNvbnZlcnNpb25BcGkgKSA9PiB7XG5cdFx0Y29uc3Qgdmlld0l0ZW0gPSBkYXRhLnZpZXdJdGVtO1xuXHRcdGNvbnN0IG1vZGVsUmFuZ2UgPSBkYXRhLm1vZGVsUmFuZ2U7XG5cblx0XHRjb25zdCBtb2RlbEVsZW1lbnQgPSBtb2RlbFJhbmdlICYmIG1vZGVsUmFuZ2Uuc3RhcnQubm9kZUFmdGVyO1xuXG5cdFx0aWYgKCAhbW9kZWxFbGVtZW50ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnZlcnNpb25BcGkud3JpdGVyLnNldEF0dHJpYnV0ZSggbW9kZWxBdHRyaWJ1dGUsIHZpZXdJdGVtLmdldEF0dHJpYnV0ZSggdmlld0F0dHJpYnV0ZSApLCBtb2RlbEVsZW1lbnQgKTtcblx0fSApO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGN1c3RvbSBhdHRyaWJ1dGUgZG93bmNhc3QgY29udmVydGVyLlxuICovXG5mdW5jdGlvbiBkb3duY2FzdEF0dHJpYnV0ZSggbW9kZWxFbGVtZW50TmFtZSwgdmlld0VsZW1lbnROYW1lLCB2aWV3QXR0cmlidXRlLCBtb2RlbEF0dHJpYnV0ZSApIHtcblx0cmV0dXJuIGRpc3BhdGNoZXIgPT4gZGlzcGF0Y2hlci5vbiggYGluc2VydDokeyBtb2RlbEVsZW1lbnROYW1lIH1gLCAoIGV2dCwgZGF0YSwgY29udmVyc2lvbkFwaSApID0+IHtcblx0XHRjb25zdCBtb2RlbEVsZW1lbnQgPSBkYXRhLml0ZW07XG5cblx0XHRjb25zdCB2aWV3RmlndXJlID0gY29udmVyc2lvbkFwaS5tYXBwZXIudG9WaWV3RWxlbWVudCggbW9kZWxFbGVtZW50ICk7XG5cdFx0Y29uc3Qgdmlld0VsZW1lbnQgPSBmaW5kVmlld0NoaWxkKCB2aWV3RmlndXJlLCB2aWV3RWxlbWVudE5hbWUsIGNvbnZlcnNpb25BcGkgKTtcblxuXHRcdGlmICggIXZpZXdFbGVtZW50ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnZlcnNpb25BcGkud3JpdGVyLnNldEF0dHJpYnV0ZSggdmlld0F0dHJpYnV0ZSwgbW9kZWxFbGVtZW50LmdldEF0dHJpYnV0ZSggbW9kZWxBdHRyaWJ1dGUgKSwgdmlld0VsZW1lbnQgKTtcblx0fSApO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZSBDb3B5cmlnaHQgKGMpIDIwMDMtMjAyMSwgQ0tTb3VyY2UgLSBGcmVkZXJpY28gS25hYmJlbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIEZvciBsaWNlbnNpbmcsIHNlZSBMSUNFTlNFLm1kIG9yIGh0dHBzOi8vY2tlZGl0b3IuY29tL2xlZ2FsL2NrZWRpdG9yLW9zcy1saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGxpbmsvdXRpbHNcbiAqL1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlTWl4aW4sIG1peCB9IGZyb20gJ2NrZWRpdG9yNS9zcmMvdXRpbHMnO1xuXG4vKipcbiAqIEhlbHBlciBjbGFzcyB0aGF0IHN0b3JlcyBtYW51YWwgZGVjb3JhdG9ycyB3aXRoIG9ic2VydmFibGUge0BsaW5rIG1vZHVsZTpsaW5rL3V0aWxzfk1hbnVhbERlY29yYXRvciN2YWx1ZX1cbiAqIHRvIHN1cHBvcnQgaW50ZWdyYXRpb24gd2l0aCB0aGUgVUkgc3RhdGUuIEFuIGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgaXMgYSBtb2RlbCB3aXRoIHRoZSBzdGF0ZSBvZiBpbmRpdmlkdWFsIG1hbnVhbCBkZWNvcmF0b3JzLlxuICogVGhlc2UgZGVjb3JhdG9ycyBhcmUga2VwdCBhcyBjb2xsZWN0aW9ucyBpbiB7QGxpbmsgbW9kdWxlOmxpbmsvbGlua2NvbW1hbmR+TGlua0NvbW1hbmQjbWFudWFsRGVjb3JhdG9yc30uXG4gKlxuICogQG1peGVzIG1vZHVsZTp1dGlscy9vYnNlcnZhYmxlbWl4aW5+T2JzZXJ2YWJsZU1peGluXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hbnVhbERlY29yYXRvciB7XG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHtAbGluayBtb2R1bGU6bGluay91dGlsc35NYW51YWxEZWNvcmF0b3J9LlxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcuaWQgVGhlIG5hbWUgb2YgdGhlIGF0dHJpYnV0ZSB1c2VkIGluIHRoZSBtb2RlbCB0aGF0IHJlcHJlc2VudHMgYSBnaXZlbiBtYW51YWwgZGVjb3JhdG9yLlxuXHQgKiBGb3IgZXhhbXBsZTogYCdsaW5rSXNFeHRlcm5hbCdgLlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLmxhYmVsIFRoZSBsYWJlbCB1c2VkIGluIHRoZSB1c2VyIGludGVyZmFjZSB0byB0b2dnbGUgdGhlIG1hbnVhbCBkZWNvcmF0b3IuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcuYXR0cmlidXRlcyBBIHNldCBvZiBhdHRyaWJ1dGVzIGFkZGVkIHRvIG91dHB1dCBkYXRhIHdoZW4gdGhlIGRlY29yYXRvciBpcyBhY3RpdmUgZm9yIGEgc3BlY2lmaWMgbGluay5cblx0ICogQXR0cmlidXRlcyBzaG91bGQga2VlcCB0aGUgZm9ybWF0IG9mIGF0dHJpYnV0ZXMgZGVmaW5lZCBpbiB7QGxpbmsgbW9kdWxlOmVuZ2luZS92aWV3L2VsZW1lbnRkZWZpbml0aW9ufkVsZW1lbnREZWZpbml0aW9ufS5cblx0ICogQHBhcmFtIHtCb29sZWFufSBbY29uZmlnLmRlZmF1bHRWYWx1ZV0gQ29udHJvbHMgd2hldGhlciB0aGUgZGVjb3JhdG9yIGlzIFwib25cIiBieSBkZWZhdWx0LlxuXHQgKi9cblx0Y29uc3RydWN0b3IoIHsgaWQsIGxhYmVsLCBhdHRyaWJ1dGVzLCBkZWZhdWx0VmFsdWUgfSApIHtcblx0XHQvKipcblx0XHQgKiBBbiBJRCBvZiBhIG1hbnVhbCBkZWNvcmF0b3Igd2hpY2ggaXMgdGhlIG5hbWUgb2YgdGhlIGF0dHJpYnV0ZSBpbiB0aGUgbW9kZWwsIGZvciBleGFtcGxlOiAnbGlua01hbnVhbERlY29yYXRvcjAnLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUge1N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLmlkID0gaWQ7XG5cblx0XHQvKipcblx0XHQgKiBUaGUgdmFsdWUgb2YgdGhlIGN1cnJlbnQgbWFudWFsIGRlY29yYXRvci4gSXQgcmVmbGVjdHMgaXRzIHN0YXRlIGZyb20gdGhlIFVJLlxuXHRcdCAqXG5cdFx0ICogQG9ic2VydmFibGVcblx0XHQgKiBAbWVtYmVyIHtCb29sZWFufSBtb2R1bGU6bGluay91dGlsc35NYW51YWxEZWNvcmF0b3IjdmFsdWVcblx0XHQgKi9cblx0XHR0aGlzLnNldCggJ3ZhbHVlJyApO1xuXG5cdFx0LyoqXG5cdFx0ICogVGhlIGRlZmF1bHQgdmFsdWUgb2YgbWFudWFsIGRlY29yYXRvci5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIHtCb29sZWFufVxuXHRcdCAqL1xuXHRcdHRoaXMuZGVmYXVsdFZhbHVlID0gZGVmYXVsdFZhbHVlO1xuXG5cdFx0LyoqXG5cdFx0ICogVGhlIGxhYmVsIHVzZWQgaW4gdGhlIHVzZXIgaW50ZXJmYWNlIHRvIHRvZ2dsZSB0aGUgbWFudWFsIGRlY29yYXRvci5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIHtTdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5sYWJlbCA9IGxhYmVsO1xuXG5cdFx0LyoqXG5cdFx0ICogQSBzZXQgb2YgYXR0cmlidXRlcyBhZGRlZCB0byBkb3duY2FzdGVkIGRhdGEgd2hlbiB0aGUgZGVjb3JhdG9yIGlzIGFjdGl2YXRlZCBmb3IgYSBzcGVjaWZpYyBsaW5rLlxuXHRcdCAqIEF0dHJpYnV0ZXMgc2hvdWxkIGJlIGFkZGVkIGluIGEgZm9ybSBvZiBhdHRyaWJ1dGVzIGRlZmluZWQgaW4ge0BsaW5rIG1vZHVsZTplbmdpbmUvdmlldy9lbGVtZW50ZGVmaW5pdGlvbn5FbGVtZW50RGVmaW5pdGlvbn0uXG5cdFx0ICpcblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxuXHRcdCAqL1xuXHRcdHRoaXMuYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXM7XG5cdH1cbn1cblxubWl4KCBNYW51YWxEZWNvcmF0b3IsIE9ic2VydmFibGVNaXhpbiApO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZXhwb3J0IGRlZmF1bHQgXCI8c3ZnIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiBmb2N1c2FibGU9XFxcImZhbHNlXFxcIiBkYXRhLXByZWZpeD1cXFwiZmFzXFxcIiBkYXRhLWljb249XFxcImZpbGUtZXhwb3J0XFxcIiBjbGFzcz1cXFwic3ZnLWlubGluZS0tZmEgZmEtZmlsZS1leHBvcnQgZmEtdy0xOFxcXCIgcm9sZT1cXFwiaW1nXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCA1NzYgNTEyXFxcIj48cGF0aCBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIGQ9XFxcIk0zODQgMTIxLjljMC02LjMtMi41LTEyLjQtNy0xNi45TDI3OS4xIDdjLTQuNS00LjUtMTAuNi03LTE3LTdIMjU2djEyOGgxMjh6TTU3MSAzMDhsLTk1LjctOTYuNGMtMTAuMS0xMC4xLTI3LjQtMy0yNy40IDExLjNWMjg4aC02NHY2NGg2NHY2NS4yYzAgMTQuMyAxNy4zIDIxLjQgMjcuNCAxMS4zTDU3MSAzMzJjNi42LTYuNiA2LjYtMTcuNCAwLTI0em0tMzc5IDI4di0zMmMwLTguOCA3LjItMTYgMTYtMTZoMTc2VjE2MEgyNDhjLTEzLjIgMC0yNC0xMC44LTI0LTI0VjBIMjRDMTAuNyAwIDAgMTAuNyAwIDI0djQ2NGMwIDEzLjMgMTAuNyAyNCAyNCAyNGgzMzZjMTMuMyAwIDI0LTEwLjcgMjQtMjRWMzUySDIwOGMtOC44IDAtMTYtNy4yLTE2LTE2elxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwiZXhwb3J0IGRlZmF1bHQgXCI8P3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJ1dGYtOFxcXCI/PlxcbjwhLS0gR2VuZXJhdGVkIGJ5IEljb01vb24uaW8gLS0+XFxuPCFET0NUWVBFIHN2ZyBQVUJMSUMgXFxcIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOXFxcIiBcXFwiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkXFxcIj5cXG48c3ZnIHZlcnNpb249XFxcIjEuMVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgd2lkdGg9XFxcIjE2XFxcIiBoZWlnaHQ9XFxcIjE2XFxcIiB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiPlxcbjxwYXRoIGZpbGw9XFxcIiM0NDQ0NDRcXFwiIGQ9XFxcIk0yLjEgMy4xYzAuMiAxLjMgMC40IDEuNiAwLjQgMi45IDAgMC44LTEuNSAxLjUtMS41IDEuNXYxYzAgMCAxLjUgMC43IDEuNSAxLjUgMCAxLjMtMC4yIDEuNi0wLjQgMi45LTAuMyAyLjEgMC44IDMuMSAxLjggMy4xczIuMSAwIDIuMSAwdi0yYzAgMC0xLjggMC4yLTEuOC0xIDAtMC45IDAuMi0wLjkgMC40LTIuOSAwLjEtMC45LTAuNS0xLjYtMS4xLTIuMSAwLjYtMC41IDEuMi0xLjEgMS4xLTItMC4zLTItMC40LTItMC40LTIuOSAwLTEuMiAxLjgtMS4xIDEuOC0xLjF2LTJjMCAwLTEgMC0yLjEgMHMtMi4xIDEtMS44IDMuMXpcXFwiPjwvcGF0aD5cXG48cGF0aCBmaWxsPVxcXCIjNDQ0NDQ0XFxcIiBkPVxcXCJNMTMuOSAzLjFjLTAuMiAxLjMtMC40IDEuNi0wLjQgMi45IDAgMC44IDEuNSAxLjUgMS41IDEuNXYxYzAgMC0xLjUgMC43LTEuNSAxLjUgMCAxLjMgMC4yIDEuNiAwLjQgMi45IDAuMyAyLjEtMC44IDMuMS0xLjggMy4xcy0yLjEgMC0yLjEgMHYtMmMwIDAgMS44IDAuMiAxLjgtMSAwLTAuOS0wLjItMC45LTAuNC0yLjktMC4xLTAuOSAwLjUtMS42IDEuMS0yLjEtMC42LTAuNS0xLjItMS4xLTEuMS0yIDAuMi0yIDAuNC0yIDAuNC0yLjkgMC0xLjItMS44LTEuMS0xLjgtMS4xdi0yYzAgMCAxIDAgMi4xIDBzMi4xIDEgMS44IDMuMXpcXFwiPjwvcGF0aD5cXG48L3N2Zz5cXG5cIiIsImV4cG9ydCBkZWZhdWx0IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMjAgMjBcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6bTQuOTE5IDEwLjU2Mi0xLjQxNCAxLjQxNGEuNzUuNzUgMCAxIDEtMS4wNi0xLjA2bDEuNDE0LTEuNDE1LTEuNDE1LTEuNDE0YS43NS43NSAwIDAgMSAxLjA2MS0xLjA2bDEuNDE0IDEuNDE0IDEuNDE0LTEuNDE1YS43NS43NSAwIDAgMSAxLjA2MSAxLjA2MWwtMS40MTQgMS40MTQgMS40MTQgMS40MTVhLjc1Ljc1IDAgMCAxLTEuMDYgMS4wNmwtMS40MTUtMS40MTR6XFxcIi8+PC9zdmc+XCIiXSwic291cmNlUm9vdCI6IiJ9