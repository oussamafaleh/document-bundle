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
        console.log(document.querySelector('data-template-var=' + element.id)); //console.log(element);

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
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! jquery */ "../../../../../../node_modules/jquery/dist/jquery.js");
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
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! jquery */ "../../../../../../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_17__);
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "../../../../../../node_modules/jquery/dist/jquery.js");
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
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "../../../../../../node_modules/jquery/dist/jquery.js");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vfC9cXC4oanx0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9kb2NlZGl0b3JfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvZmlsZV9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9maWxlaWNvbl9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9mb2xkZXJfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvcnVsZV9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9Eb2NEZWNvdXBsZWRFZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ja2VkaXRvcjUtdGVtcGxhdGluZy9zcmMvY2FuY2VsdGVtcGxhdGVjb21tYW5kLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ja2VkaXRvcjUtdGVtcGxhdGluZy9zcmMvdGVtcGxhdGUtY29tbWFuZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY2tlZGl0b3I1LXRlbXBsYXRpbmcvc3JjL3RlbXBsYXRlLWVkaXRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NrZWRpdG9yNS10ZW1wbGF0aW5nL3NyYy90ZW1wbGF0ZS11aS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY2tlZGl0b3I1LXRlbXBsYXRpbmcvc3JjL3RlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ja2VkaXRvcjUtdGVtcGxhdGluZy9zcmMvdWkvdGVtcGxhdGUtYWN0aW9ucy12aWV3LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ja2VkaXRvcjUtdGVtcGxhdGluZy9zcmMvdWkvdGVtcGxhdGUtZm9ybS12aWV3LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ja2VkaXRvcjUtdGVtcGxhdGluZy9zcmMvdWkvdGVtcGxhdGUtc2F2ZS12aWV3LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ja2VkaXRvcjUtdGVtcGxhdGluZy9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NrZWRpdG9yNS10ZW1wbGF0aW5nL3NyYy91dGlscy9tYW51YWxkZWNvcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzPzNmYmEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NrZWRpdG9yNS10ZW1wbGF0aW5nL3RoZW1lL3RlbXBsYXRlLmNzcz9hYzgwIiwid2VicGFjazovLy8uL2Fzc2V0cy9ja2VkaXRvcjUtdGVtcGxhdGluZy90aGVtZS90ZW1wbGF0ZWFjdGlvbnMuY3NzPzY3NzciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NrZWRpdG9yNS10ZW1wbGF0aW5nL3RoZW1lL3RlbXBsYXRlZm9ybS5jc3M/ZDViNSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY2tlZGl0b3I1LXRlbXBsYXRpbmcvdGhlbWUvaWNvbnMvZmlsZS1leHBvcnQtc29saWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9ja2VkaXRvcjUtdGVtcGxhdGluZy90aGVtZS9pY29ucy90ZW1sYXRlSWNvbi5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NrZWRpdG9yNS10ZW1wbGF0aW5nL3RoZW1lL2ljb25zL3VubGluay5zdmciXSwibmFtZXMiOlsiVVJMX0JBU0UiLCJwcm9jZXNzIiwiRGVjb3VwbGVkRWRpdG9yIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidHlwaW5nIiwidHJhbnNmb3JtYXRpb25zIiwiZXh0cmEiLCJmcm9tIiwidG8iLCJtYXRjaGVzIiwiY2hhbmdlVGVtcGxhdGVJdGVtIiwidGhlbiIsImVkaXRvciIsInRvb2xiYXJDb250YWluZXIiLCJhcHBlbmRDaGlsZCIsInVpIiwidmlldyIsInRvb2xiYXIiLCJlbGVtZW50Iiwid2luZG93IiwibWF0Y2giLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJ0ZW1wRmlsZU5hbWUiLCJ2YWx1ZSIsImVkaXRvckRhdGEiLCJnZXREYXRhIiwiZmlsZSIsIkZpbGUiLCJ0eXBlIiwibGFzdE1vZGlmaWVkIiwiRGF0ZSIsImxvZyIsInVybCIsInhociIsIlhNTEh0dHBSZXF1ZXN0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJkYXRhIiwicmVzcG9uc2VUZXh0Iiwib3BlbiIsInNlbmQiLCJtYXRjaGVkVGFncyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JtIiwiZ2V0RWxlbWVudEJ5SWQiLCJBcnJheSIsIm1hcCIsImZvcm1Hcm91cCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJsYWJlbCIsImlubmVyVGV4dCIsImlubmVySFRNTCIsImdldEF0dHJpYnV0ZSIsImlucHV0IiwiaWQiLCJwbGFjZWhvbGRlciIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJmb3JFYWNoIiwiQ29udHJvbGxlciIsImFyZyIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJmaWxlcyIsInVzZXIiLCJKU09OIiwicGFyc2UiLCJzaG93Q2xhc3NpZmljYXRpb25zIiwicmVzdWx0cyIsImZpbGVuYW1lIiwiZ2V0SWNvbiIsImZpbGVOYW1lIiwiaXRlbSIsInByZXR0eUZpbGVJY29ucyIsImltZyIsInNyYyIsInNldEF0dHJpYnV0ZSIsIlN0cmluZyIsInN0b3BQcm9wYWdhdGlvbiIsImpRdWVyeSIsInJlYWR5IiwiJCIsIm1vdmVMRm9sZGVyTGlzdCIsImFqYXgiLCJtZXRob2QiLCJmb2xkZXJNb3ZpbmdJbiIsImluZGV4IiwidXNlcl9jb2RlIiwiZG9uZSIsInJlcyIsImVtcHR5IiwiYWRkQ2xhc3MiLCJ0ZXh0IiwicGFyZW50X2ZvbGRlciIsImFwcGVuZFRvIiwiZWFjaCIsInJvd3MiLCJpIiwibGlzdEl0ZW0iLCJsaUZvbGRlciIsImF0dHIiLCJmb2xkZXJUb01vdmUiLCJjb2RlIiwicGF0aCIsInJlcGxhY2UiLCJtb3ZlRm9ybSIsInN1Ym1pdEJ1dHRvbiIsIm9uIiwidmFsIiwiaXRlbV9jb2RlIiwic3RyaW5naWZ5IiwiZmFpbCIsInRleHRTdGF0dXMiLCJlcnJvclRocm93biIsInNoYXJlZEl0ZW1FbWFpbCIsInByZXZlbnREZWZhdWx0IiwiZW1haWwiLCJyb2xlcyIsInB1c2giLCJzaGFyZWRJdGVtTGluayIsImxpbmsiLCJpdGVtcyIsIlByaXNtIiwicGF0dGVybiIsImdldE9wZXJhdG9ycyIsIm9wZXJhdG9ycyIsInJ1bGVBdXRvY29tcGxldGUiLCJ0cmlidXRlIiwiVHJpYnV0ZSIsInZhbHVlcyIsInNlbGVjdFRlbXBsYXRlIiwib3JpZ2luYWwiLCJrZXkiLCJtZW51SXRlbVRlbXBsYXRlIiwic3RyaW5nIiwiYXV0b2NvbXBsZXRlTW9kZSIsImF0dGFjaCIsInJ1bGUiLCJmb2N1cyIsInN5bmNfc2Nyb2xsIiwiYmVmb3JlX3RhYiIsInNsaWNlIiwic2VsZWN0aW9uU3RhcnQiLCJhZnRlcl90YWIiLCJzZWxlY3Rpb25FbmQiLCJsZW5ndGgiLCJjdXJzb3JfcG9zIiwicmVzdWx0X2VsZW1lbnQiLCJzY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwiY2IiLCJVUkwiLCJib2R5IiwiZXhwcmVzc2lvbiIsInNob3dBbGVydHMiLCJzZXRSZXF1ZXN0SGVhZGVyIiwic2NvcGUiLCJhbGVydCIsInN0eWxlIiwiZGlzcGxheSIsInNldFRpbWVvdXQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJEZWNvdXBsZWRFZGl0b3JCYXNlIiwiYnVpbHRpblBsdWdpbnMiLCJFc3NlbnRpYWxzIiwiQWxpZ25tZW50IiwiRm9udFNpemUiLCJGb250RmFtaWx5IiwiRm9udENvbG9yIiwiRm9udEJhY2tncm91bmRDb2xvciIsIlVwbG9hZEFkYXB0ZXIiLCJBdXRvZm9ybWF0IiwiQm9sZCIsIkl0YWxpYyIsIlN0cmlrZXRocm91Z2giLCJVbmRlcmxpbmUiLCJCbG9ja1F1b3RlIiwiQ0tGaW5kZXIiLCJFYXN5SW1hZ2UiLCJIZWFkaW5nIiwiSW1hZ2UiLCJJbWFnZUNhcHRpb24iLCJJbWFnZVN0eWxlIiwiSW1hZ2VUb29sYmFyIiwiSW1hZ2VVcGxvYWQiLCJJbmRlbnQiLCJJbmRlbnRCbG9jayIsIkxpbmsiLCJMaXN0IiwiTWVkaWFFbWJlZCIsIlBhcmFncmFwaCIsIlBhc3RlRnJvbU9mZmljZSIsIlRhYmxlIiwiVGFibGVUb29sYmFyIiwiVGVtcGxhdGUiLCJQYWdlQnJlYWsiLCJDbG91ZFNlcnZpY2VzIiwiZGVmYXVsdENvbmZpZyIsImltYWdlIiwic3R5bGVzIiwidGFibGUiLCJjb250ZW50VG9vbGJhciIsImxhbmd1YWdlIiwicmVxdWlyZSIsImFwcCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJDYW5jZWxUZW1wbGF0ZUNvbW1hbmQiLCJtb2RlbCIsImRvYyIsInNlbGVjdGVkRWxlbWVudCIsImZpcnN0Iiwic2VsZWN0aW9uIiwiZ2V0U2VsZWN0ZWRCbG9ja3MiLCJpc0ltYWdlQWxsb3dlZCIsInNjaGVtYSIsImlzRW5hYmxlZCIsImNoZWNrQXR0cmlidXRlIiwiY2hlY2tBdHRyaWJ1dGVJblNlbGVjdGlvbiIsImxpbmtDb21tYW5kIiwiY29tbWFuZHMiLCJnZXQiLCJjaGFuZ2UiLCJ3cml0ZXIiLCJyYW5nZXNUb1VubGluayIsImlzQ29sbGFwc2VkIiwiZmluZEF0dHJpYnV0ZVJhbmdlIiwiZ2V0Rmlyc3RQb3NpdGlvbiIsImdldFZhbGlkUmFuZ2VzIiwiZ2V0UmFuZ2VzIiwicmFuZ2UiLCJtYW51YWxEZWNvcmF0b3JzIiwibWFudWFsRGVjb3JhdG9yIiwiQ29tbWFuZCIsIlRlbXBsYXRlQ29tbWFuZCIsIkNvbGxlY3Rpb24iLCJfZ2V0RGVjb3JhdG9yU3RhdGVGcm9tTW9kZWwiLCJ0ZW1wbGF0ZVZhciIsIm1hbnVhbERlY29yYXRvcklkcyIsInRydXRoeU1hbnVhbERlY29yYXRvcnMiLCJmYWxzeU1hbnVhbERlY29yYXRvcnMiLCJuYW1lIiwicG9zaXRpb24iLCJoYXNBdHRyaWJ1dGUiLCJ2YXJSYW5nZSIsInNldFNlbGVjdGlvbiIsImNyZWF0ZVBvc2l0aW9uQWZ0ZXIiLCJlbmQiLCJub2RlQmVmb3JlIiwiYXR0cmlidXRlcyIsInRvTWFwIiwiZ2V0QXR0cmlidXRlcyIsInNldCIsImluc2VydENvbnRlbnQiLCJjcmVhdGVUZXh0IiwicG9zaXRpb25BZnRlciIsInJlbW92ZVNlbGVjdGlvbkF0dHJpYnV0ZSIsInJhbmdlcyIsImFsbG93ZWRSYW5nZXMiLCJjcmVhdGVSYW5nZU9uIiwicmFuZ2VzVG9VcGRhdGUiLCJfaXNSYW5nZVRvVXBkYXRlIiwiZGVjb3JhdG9yTmFtZSIsImFsbG93ZWRSYW5nZSIsImNvbnRhaW5zUmFuZ2UiLCJISUdITElHSFRfU0VMRUNURURfQ0xBU1MiLCJERUNPUkFUT1JfTUFOVUFMIiwiVGVtcGxhdGVFZGl0aW5nIiwiY29uZmlnIiwiZGVmaW5lIiwiYWRkVGFyZ2V0VG9FeHRlcm5hbExpbmtzIiwiZXh0ZW5kIiwiYWxsb3dBdHRyaWJ1dGVzIiwiY29udmVyc2lvbiIsImF0dHJpYnV0ZVRvRWxlbWVudCIsImNyZWF0ZVRlbXBsYXRlRWxlbWVudCIsImNvbnZlcnNpb25BcGkiLCJjcmVhdGVBdHRyaWJ1dGVFbGVtZW50IiwicHJpb3JpdHkiLCJzZXRDdXN0b21Qcm9wZXJ0eSIsImVsZW1lbnRUb0F0dHJpYnV0ZSIsInZpZXdFbGVtZW50IiwiYWRkIiwibGlua0RlY29yYXRvcnMiLCJnZXRMb2NhbGl6ZWREZWNvcmF0b3JzIiwidCIsIm5vcm1hbGl6ZURlY29yYXRvcnMiLCJfZW5hYmxlTWFudWFsRGVjb3JhdG9ycyIsImZpbHRlciIsIm1vZGUiLCJ0d29TdGVwQ2FyZXRNb3ZlbWVudFBsdWdpbiIsInBsdWdpbnMiLCJUd29TdGVwQ2FyZXRNb3ZlbWVudCIsInJlZ2lzdGVyQXR0cmlidXRlIiwiaW5saW5lSGlnaGxpZ2h0IiwiX2VuYWJsZUluc2VydENvbnRlbnRTZWxlY3Rpb25BdHRyaWJ1dGVzRml4ZXIiLCJfZW5hYmxlQ2xpY2tpbmdBZnRlckxpbmsiLCJfZW5hYmxlVHlwaW5nT3ZlckxpbmsiLCJfaGFuZGxlRGVsZXRlQ29udGVudEFmdGVyTGluayIsIm1hbnVhbERlY29yYXRvckRlZmluaXRpb25zIiwiY29tbWFuZCIsImRlY29yYXRvciIsIk1hbnVhbERlY29yYXRvciIsIm1hbnVhbERlY29yYXRvck5hbWUiLCJsaXN0ZW5UbyIsImFuY2hvciIsIm5vZGVBZnRlciIsInJlbW92ZUxpbmtBdHRyaWJ1dGVzRnJvbVNlbGVjdGlvbiIsImVkaXRpbmciLCJhZGRPYnNlcnZlciIsIk1vdXNlT2JzZXJ2ZXIiLCJjbGlja2VkIiwibGlua1JhbmdlIiwiaXNUb3VjaGluZyIsInN0YXJ0Iiwic2VsZWN0aW9uQXR0cmlidXRlcyIsImRlbGV0ZWRDb250ZW50IiwiaXNUeXBpbmciLCJzaG91bGRDb3B5QXR0cmlidXRlcyIsImV2dCIsImF0dHJpYnV0ZSIsInNob3VsZFByZXNlcnZlQXR0cmlidXRlcyIsImhhc0JhY2tzcGFjZVByZXNzZWQiLCJkb21FdmVudCIsImtleUNvZGUiLCJrZXlDb2RlcyIsImNvbnRhaW5zUG9zaXRpb24iLCJpc0VxdWFsIiwiZW5xdWV1ZUNoYW5nZSIsIklucHV0IiwiQ2xpcGJvYXJkUGlwZWxpbmUiLCJQbHVnaW4iLCJmaXJzdFBvc2l0aW9uIiwibGFzdFBvc2l0aW9uIiwiZ2V0TGFzdFBvc2l0aW9uIiwibm9kZUF0Rmlyc3RQb3NpdGlvbiIsImlzIiwibm9kZUF0TGFzdFBvc2l0aW9uIiwidGV4dE5vZGUiLCJjcmVhdGVSYW5nZSIsImlzSW5wdXQiLCJiYXRjaCIsIlZJU1VBTF9TRUxFQ1RJT05fTUFSS0VSX05BTUUiLCJUZW1wbGF0ZVVpIiwiQ2xpY2tPYnNlcnZlciIsImFjdGlvbnNWaWV3IiwiX2NyZWF0ZUFjdGlvbnNWaWV3Iiwic2F2ZVZpZXciLCJfY3JlYXRlU2F2ZVZpZXciLCJmb3JtVmlldyIsIl9jcmVhdGVGb3JtVmlldyIsIl9iYWxsb29uIiwiQ29udGV4dHVhbEJhbGxvb24iLCJfcGFuZWwiLCJCYWxsb29uUGFuZWxWaWV3IiwiX2NyZWF0ZVRvb2xiYXJMaW5rQnV0dG9uIiwiX2VuYWJsZVVzZXJCYWxsb29uSW50ZXJhY3Rpb25zIiwibWFya2VyVG9IaWdobGlnaHQiLCJjbGFzc2VzIiwibWFya2VyVG9FbGVtZW50IiwiZGVzdHJveSIsIlRlbXBsYXRlQWN0aW9uc1ZpZXciLCJsb2NhbGUiLCJ0ZW1wbGF0ZUNvbW1hbmQiLCJjYW5jZWxUZW1wbGF0ZUNvbW1hbmQiLCJiaW5kIiwiZWRpdEJ1dHRvblZpZXciLCJ1bmxpbmtCdXR0b25WaWV3IiwiX2FkZEZvcm1WaWV3IiwiZXhlY3V0ZSIsIl9oaWRlVUkiLCJrZXlzdHJva2VzIiwiY2FuY2VsIiwiVEVNUExBVEVfS0VZU1RST0tFIiwiVGVtcGxhdGVTYXZlVmlldyIsIlRlbXBsYXRlRm9ybVZpZXciLCJsYWJlbElucHV0VmlldyIsImZpZWxkVmlldyIsInNhdmVCdXR0b25WaWV3IiwidHlwZUlucHV0VmlldyIsImJ1dHRvblZpZXciLCJnZXREZWNvcmF0b3JTd2l0Y2hlc1N0YXRlIiwiX2Nsb3NlRm9ybVZpZXciLCJrZXlFdnREYXRhIiwiX3Nob3dVSSIsImNvbXBvbmVudEZhY3RvcnkiLCJidXR0b24iLCJCdXR0b25WaWV3IiwiaWNvbiIsIlRlbWxhdGVJY29uIiwia2V5c3Ryb2tlIiwidG9vbHRpcCIsImlzVG9nZ2xlYWJsZSIsIlNhdmVUZW1wbGF0ZSIsIl9hZGRTYXZlVmlldyIsInZpZXdEb2N1bWVudCIsInBhcmVudExpbmsiLCJfZ2V0U2VsZWN0ZWRMaW5rRWxlbWVudCIsIl9hcmVBY3Rpb25zVmlzaWJsZSIsImZvY3VzVHJhY2tlciIsImlzRm9jdXNlZCIsIl9pc1VJVmlzaWJsZSIsImNsaWNrT3V0c2lkZUhhbmRsZXIiLCJlbWl0dGVyIiwiYWN0aXZhdG9yIiwiX2lzVUlJblBhbmVsIiwiY29udGV4dEVsZW1lbnRzIiwiY2FsbGJhY2siLCJfYXJlQWN0aW9uc0luUGFuZWwiLCJfZ2V0QmFsbG9vblBvc2l0aW9uRGF0YSIsInBvc2l0aW9ucyIsInRhcmdldCIsIm5vcnRoQXJyb3dTb3V0aCIsImNvbnRlbnQiLCJyZW5kZXIiLCJwaW4iLCJfaXNGb3JtSW5QYW5lbCIsImRpc2FibGVDc3NUcmFuc2l0aW9ucyIsInZpc2libGVWaWV3Iiwic2VsZWN0IiwiZW5hYmxlQ3NzVHJhbnNpdGlvbnMiLCJyZXN0b3JlTWFudWFsRGVjb3JhdG9yU3RhdGVzIiwidW5kZWZpbmVkIiwiX3JlbW92ZUZvcm1WaWV3IiwicmVtb3ZlIiwiX2hpZGVGYWtlVmlzdWFsU2VsZWN0aW9uIiwiZm9yY2VWaXNpYmxlIiwiX3Nob3dGYWtlVmlzdWFsU2VsZWN0aW9uIiwiX2FkZEFjdGlvbnNWaWV3Iiwic2hvd1N0YWNrIiwiX3N0YXJ0VXBkYXRpbmdVSSIsInN0b3BMaXN0ZW5pbmciLCJwcmV2U2VsZWN0ZWRMaW5rIiwicHJldlNlbGVjdGlvblBhcmVudCIsImdldFNlbGVjdGlvblBhcmVudCIsInVwZGF0ZSIsInNlbGVjdGVkTGluayIsInNlbGVjdGlvblBhcmVudCIsInVwZGF0ZVBvc2l0aW9uIiwiZ2V0QW5jZXN0b3JzIiwicmV2ZXJzZSIsImZpbmQiLCJub2RlIiwiaGFzVmlldyIsIm1hcmtlcnMiLCJoYXMiLCJtYXJrZXJWaWV3RWxlbWVudHMiLCJtYXBwZXIiLCJtYXJrZXJOYW1lVG9FbGVtZW50cyIsIm5ld1JhbmdlIiwiY3JlYXRlUG9zaXRpb25CZWZvcmUiLCJkb21Db252ZXJ0ZXIiLCJ2aWV3UmFuZ2VUb0RvbSIsInRhcmdldExpbmsiLCJnZXRGaXJzdFJhbmdlIiwibWFwVmlld1RvRG9tIiwiZmluZExpbmtFbGVtZW50QW5jZXN0b3IiLCJnZXRUcmltbWVkIiwic3RhcnRMaW5rIiwiZW5kTGluayIsImNyZWF0ZVJhbmdlSW4iLCJ1cGRhdGVNYXJrZXIiLCJpc0F0RW5kIiwic3RhcnRQb3NpdGlvbiIsImdldExhc3RNYXRjaGluZ1Bvc2l0aW9uIiwiaXNDb250ZW50IiwiYm91bmRhcmllcyIsImFkZE1hcmtlciIsInVzaW5nT3BlcmF0aW9uIiwiYWZmZWN0c0RhdGEiLCJyZW1vdmVNYXJrZXIiLCJhbmNlc3RvciIsImlzTGlua0VsZW1lbnQiLCJGb2N1c1RyYWNrZXIiLCJLZXlzdHJva2VIYW5kbGVyIiwicHJldmlld0J1dHRvblZpZXciLCJfY3JlYXRlUHJldmlld0J1dHRvbiIsIl9jcmVhdGVCdXR0b24iLCJ1bmxpbmtJY29uIiwiaWNvbnMiLCJfZm9jdXNhYmxlcyIsIlZpZXdDb2xsZWN0aW9uIiwiX2ZvY3VzQ3ljbGVyIiwiRm9jdXNDeWNsZXIiLCJmb2N1c2FibGVzIiwia2V5c3Ryb2tlSGFuZGxlciIsImFjdGlvbnMiLCJmb2N1c1ByZXZpb3VzIiwiZm9jdXNOZXh0Iiwic2V0VGVtcGxhdGUiLCJ0YWciLCJ0YWJpbmRleCIsImNoaWxkcmVuIiwiY2hpbGRWaWV3cyIsInYiLCJmb2N1c0ZpcnN0IiwiZXZlbnROYW1lIiwiZGVsZWdhdGUiLCJiaW5kVGVtcGxhdGUiLCJ3aXRoVGV4dCIsImV4dGVuZFRlbXBsYXRlIiwicmVsIiwidGVtcGxhdGUiLCJldmVudExpc3RlbmVycyIsIlZpZXciLCJfY3JlYXRlVGV4dElucHV0IiwiX2NyZWF0ZURyb3BEb3duSW5wdXQiLCJjYW5jZWxCdXR0b25WaWV3IiwiX21hbnVhbERlY29yYXRvclN3aXRjaGVzIiwiX2NyZWF0ZU1hbnVhbERlY29yYXRvclN3aXRjaGVzIiwiX2NyZWF0ZUZvcm1DaGlsZHJlbiIsImNsYXNzTGlzdCIsImluamVjdENzc1RyYW5zaXRpb25EaXNhYmxlciIsInJlZHVjZSIsImFjY3VtdWxhdG9yIiwic3dpdGNoQnV0dG9uIiwiaXNPbiIsInN1Ym1pdEhhbmRsZXIiLCJsYWJlbGVkSW5wdXQiLCJMYWJlbGVkRmllbGRWaWV3IiwiY3JlYXRlTGFiZWxlZElucHV0VGV4dCIsImNyZWF0ZUxhYmVsZWREcm9wZG93biIsImxhYmVsZWRGaWVsZFZpZXciLCJ2aWV3VWlkIiwic3RhdHVzVWlkIiwiZHJvcGRvd25WaWV3IiwiY3JlYXRlRHJvcGRvd24iLCJTcGxpdEJ1dHRvblZpZXciLCJhcmlhRGVzY3JpYmVkQnlJZCIsImJ1dHRvbnMiLCJfY3JlYXRlRHJvcGRvd25CdXR0b24iLCJhZGRUb29sYmFyVG9Ecm9wZG93biIsInRvTWFueSIsImFyZUVuYWJsZWQiLCJzb21lIiwiYXJlQWN0aXZlIiwiZmluZEluZGV4IiwidG9vbGJhclZpZXciLCJpc1ZlcnRpY2FsIiwic3dpdGNoZXMiLCJjcmVhdGVDb2xsZWN0aW9uIiwiU3dpdGNoQnV0dG9uVmlldyIsImRlY29yYXRvclZhbHVlIiwiY29tbWFuZFZhbHVlIiwiZGVmYXVsdFZhbHVlIiwiYWRkaXRpb25hbEJ1dHRvbnNWaWV3IiwiQVRUUklCVVRFX1dISVRFU1BBQ0VTIiwiU0FGRV9VUkwiLCJFTUFJTF9SRUdfRVhQIiwiUFJPVE9DT0xfUkVHX0VYUCIsIkhJR0hMSUdIVF9DTEFTUyIsIlNBVkVfS0VZU1RST0tFIiwiZ2V0Q3VzdG9tUHJvcGVydHkiLCJsaW5rRWxlbWVudCIsImVuc3VyZVNhZmVVcmwiLCJpc1NhZmVVcmwiLCJub3JtYWxpemVkVXJsIiwiZGVjb3JhdG9ycyIsImxvY2FsaXplZERlY29yYXRvcnNMYWJlbHMiLCJyZXRBcnJheSIsIk9iamVjdCIsImVudHJpZXMiLCJhc3NpZ24iLCJ1cHBlckZpcnN0IiwiaXNFbWFpbCIsInRlc3QiLCJhZGRMaW5rUHJvdG9jb2xJZkFwcGxpY2FibGUiLCJkZWZhdWx0UHJvdG9jb2wiLCJwcm90b2NvbCIsImlzUHJvdG9jb2xOZWVkZWQiLCJDdXN0b21GaWd1cmVBdHRyaWJ1dGVzIiwic2V0dXBDdXN0b21DbGFzc0NvbnZlcnNpb24iLCJ1cGNhc3RDdXN0b21DbGFzc2VzIiwic2V0dXBDdXN0b21BdHRyaWJ1dGVDb252ZXJzaW9uIiwidmlld0VsZW1lbnROYW1lIiwibW9kZWxFbGVtZW50TmFtZSIsImRvd25jYXN0Q3VzdG9tQ2xhc3Nlc1RvRmlndXJlIiwidmlld0F0dHJpYnV0ZSIsIm1vZGVsQXR0cmlidXRlIiwidXBjYXN0QXR0cmlidXRlIiwiZG93bmNhc3RBdHRyaWJ1dGUiLCJlbGVtZW50TmFtZSIsImRpc3BhdGNoZXIiLCJ2aWV3SXRlbSIsIm1vZGVsUmFuZ2UiLCJtb2RlbEVsZW1lbnQiLCJjdXJyZW50QXR0cmlidXRlVmFsdWUiLCJnZXRDbGFzc05hbWVzIiwidmlld0ZpZ3VyZSIsInRvVmlld0VsZW1lbnQiLCJkb3duY2FzdEN1c3RvbUNsYXNzZXNUb0NoaWxkIiwiZmluZFZpZXdDaGlsZCIsInZpZXdDaGlsZHJlbiIsImdldEl0ZW1zIiwibWl4IiwiT2JzZXJ2YWJsZU1peGluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEk7Ozs7Ozs7Ozs7Ozs7OztBQzFCQSxpRUFBZTtBQUNmLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNERDtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLHVCQUFqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O1dBS0ksbUJBQVU7QUFBQTs7QUFFTkMsc0VBQUEsQ0FDWUMsUUFBUSxDQUFDQyxhQUFULENBQXVCLDRCQUF2QixDQURaLEVBQ2tFO0FBRTFEQyxjQUFNLEVBQUU7QUFDSkMseUJBQWUsRUFBRTtBQUViQyxpQkFBSyxFQUFFLENBQ0g7QUFDSUMsa0JBQUksRUFBRSx5QkFEVjtBQUVJQyxnQkFBRSxFQUFFLFlBQUFDLE9BQU87QUFBQSx1QkFBSSxDQUFDLElBQUQsRUFBTyxLQUFJLENBQUNDLGtC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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdFBBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtDQUlBO0FBQ0E7O0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtB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ZSxFQUFMLEdBQVVBLEVBQVY7QUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0UsT0FBS3FNLEdBQUwsQ0FBVSxPQUFWO0FBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFDRSxPQUFLb1MsWUFBTCxHQUFvQkEsWUFBcEI7QUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUNFLE9BQUs5ZSxLQUFMLEdBQWFBLEtBQWI7QUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0UsT0FBS3VNLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsQzs7O0FBR0Z5Vix3REFBRyxDQUFFcFMsZUFBRixFQUFtQnFTLGdFQUFuQixDQUFILEM7Ozs7Ozs7Ozs7OztBQ3RFQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLGlFQUFlLHNuQjs7Ozs7Ozs7Ozs7Ozs7O0FDQWYsaUVBQWUsOC9COzs7Ozs7Ozs7Ozs7Ozs7QUNBZixpRUFBZSxvMEIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2RvY2VkaXRvcl9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvZG9jZWRpdG9yX2NvbnRyb2xsZXIuanNcIixcblx0XCIuL2ZpbGVfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2ZpbGVfY29udHJvbGxlci5qc1wiLFxuXHRcIi4vZmlsZWljb25fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2ZpbGVpY29uX2NvbnRyb2xsZXIuanNcIixcblx0XCIuL2ZvbGRlcl9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvZm9sZGVyX2NvbnRyb2xsZXIuanNcIixcblx0XCIuL3J1bGVfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL3J1bGVfY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC4oanx0KXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsImltcG9ydCB7Q29udHJvbGxlcn0gZnJvbSAnc3RpbXVsdXMnO1xuaW1wb3J0IERlY291cGxlZEVkaXRvciBmcm9tICcuLi9Eb2NEZWNvdXBsZWRFZGl0b3InO1xuaW1wb3J0IENLRWRpdG9ySW5zcGVjdG9yIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtaW5zcGVjdG9yJztcblxuY29uc3QgVVJMX0JBU0UgPSBwcm9jZXNzLmVudi51cmw7XG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBzdGF0aWMgdGFyZ2V0cyA9IFtcImRvYy12YXJpYWJsZXNcIl1cblxuXG4gICAgY29ubmVjdCgpIHtcblxuICAgICAgICBEZWNvdXBsZWRFZGl0b3JcbiAgICAgICAgICAgIC5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvY3VtZW50LWVkaXRvcl9fZWRpdGFibGUnKSwge1xuXG4gICAgICAgICAgICAgICAgdHlwaW5nOiB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybWF0aW9uczoge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogLyhcXFt7Mn0pKFthLXpdKykoXFxdezJ9KSQvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzogbWF0Y2hlcyA9PiBbbnVsbCwgdGhpcy5jaGFuZ2VUZW1wbGF0ZUl0ZW0obWF0Y2hlcyksIG51bGxdLy8gIC8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihlZGl0b3IgPT4ge1xuXG5cbiAgICAgICAgICAgICAgIC8vIENLRWRpdG9ySW5zcGVjdG9yLmF0dGFjaCggZWRpdG9yICk7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9vbGJhckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb2N1bWVudC1lZGl0b3JfX3Rvb2xiYXInKTtcbiAgICAgICAgICAgICAgICB0b29sYmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRvci51aS52aWV3LnRvb2xiYXIuZWxlbWVudCk7XG5cblxuICAgICAgICAgICAgICAgIHdpbmRvdy5lZGl0b3IgPSBlZGl0b3I7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0b3IgPSBlZGl0b3I7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXRjaCgpO1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgc2F2ZVRlbXBsYXRlKCl7XG4gICAgICAgICAgICBjb25zdCB0ZW1wRmlsZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcGxhdGVfbGFiZWwnKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGVkaXRvckRhdGEgPSB0aGlzLmVkaXRvci5nZXREYXRhKCk7XG4gICAgICAgICAgICB2YXIgZmlsZSA9IG5ldyBGaWxlKFtlZGl0b3JEYXRhXSwgdGVtcEZpbGVOYW1lK1wiLmh0bWxcIiwge3R5cGU6IFwidGV4dC9odG1sXCIsIGxhc3RNb2RpZmllZDogbmV3IERhdGUoKX0pXG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpbGUpO1xuICAgICAgICAgICAgdmFyIHVybCA9IFVSTF9CQVNFKycvYXBpL2ZpbGUvdXBsb2FkLXRlbXBsYXRlJztcbiAgICAgICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiZmlsZVwiLCBmaWxlKTtcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInBhcmVudF9jb2RlXCIsIFwiYjdkMzlmYzktMjk3ZS00ODllLWFlM2UtNTk1NzNiMTViNGYxXCIgKTtcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInVzZXJfY29kZVwiLCBcIjA5NzAyMjllLTQ4NjctNGFkYS1iMGFjLWExOTk0NDZjYmMyMVwiKTtcbiAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiAge1xuICAgICAgICAgICAgICAgIGlmKHhoci5yZWFkeVN0YXRlID09PSA0KXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAgeGhyLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0geGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCB1cmwgICk7XG4gICAgICAgICAgICB4aHIuc2VuZChmb3JtRGF0YSk7XG5cbiAgICAgICAgICAgIC8vIC4uLlxuXG4gICAgfVxuXG4gICAgbWF0Y2goKXtcbiAgICAgICAgbGV0IG1hdGNoZWRUYWdzID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW5bZGF0YS10ZW1wbGF0ZS12YXJdJyk7XG4gICAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZW1wbGF0ZS1mb3JtXCIpO1xuICAgICAgICBBcnJheS5mcm9tKG1hdGNoZWRUYWdzKS5tYXAoZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb3JtR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIgKTtcbiAgICAgICAgICAgIGZvcm1Hcm91cC5jbGFzc05hbWUgPSBcImZvcm0tZ3JvdXBcIjtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiICk7XG4gICAgICAgICAgICBsYWJlbC5pbm5lclRleHQgPSBlbGVtZW50LmlubmVySFRNTDtcbiAgICAgICAgICAgIGZvcm1Hcm91cC5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgICAgICBpZihlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZS10eXBlJykgPT0gJ1Nob3J0IHRleHQnKXtcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiApO1xuICAgICAgICAgICAgICAgIGlucHV0LmNsYXNzTmFtZSA9IFwiZm9ybS1jb250cm9sXCI7XG4gICAgICAgICAgICAgICAgaW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgICAgICAgICAgICAgIGlucHV0LmlkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUtdmFyJyk7XG4gICAgICAgICAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSBcImVudGVyXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZihlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZS10eXBlJykgPT0gJ0xvbmcgdGV4dCcpe1xuICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiICk7XG4gICAgICAgICAgICAgICAgaW5wdXQuY2xhc3NOYW1lID0gXCJmb3JtLWNvbnRyb2xcIjtcbiAgICAgICAgICAgICAgICBpbnB1dC5pZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlLXZhcicpO1xuICAgICAgICAgICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gXCJlbnRlclwiXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtR3JvdXApO1xuXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGZvcm1hdCgpe1xuICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcGxhdGUtZm9ybVwiKS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZm9ybS1jb250cm9sXCIpO1xuICAgICAgICBmb3JtLmZvckVhY2goIChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkYXRhLXRlbXBsYXRlLXZhcj0nK2VsZW1lbnQuaWQpKTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZWxlbWVudCk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzcGFuW2RhdGEtdGVtcGxhdGUtdmFyPScrZWxlbWVudC5pZCsnXScpLmlubmVyVGV4dCA9IGVsZW1lbnQudmFsdWU7XG4gICAgICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NwYW5bZGF0YS10ZW1wbGF0ZS12YXI9JytlbGVtZW50LmlkKyddJykucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlLXR5cGUnKTtcbiAgICAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3BhbltkYXRhLXRlbXBsYXRlLXZhcj0nK2VsZW1lbnQuaWQrJ10nKS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUtdmFyJyk7XG5cblxuXG5cbiAgICAgICAgfSlcblxuICAgIH1cbiAgICAvLyB0ZXh0VGVzdENhbGxiYWNrKHJhbmdlKSB7XG4gICAgLy8gICAgIGlmICghcmFuZ2UuY29sbGFwc2VkKSB7XG4gICAgLy8gICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAvLyAgICAgfVxuICAgIC8vXG4gICAgLy8gICAgIHJldHVybiBEZWNvdXBsZWRFZGl0b3IucGx1Z2lucy50ZXh0TWF0Y2gubWF0Y2gocmFuZ2UsIG1hdGNoQ2FsbGJhY2spO1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIG1hdGNoQ2FsbGJhY2sodGV4dCwgb2Zmc2V0KSB7XG4gICAgLy8gICAgIHZhciBwYXR0ZXJuID0gL1xcW3syfShbQS16XXxcXF0pKiQvLFxuICAgIC8vICAgICAgICAgbWF0Y2ggPSB0ZXh0LnNsaWNlKDAsIG9mZnNldClcbiAgICAvLyAgICAgICAgICAgICAubWF0Y2gocGF0dGVybik7XG4gICAgLy9cbiAgICAvLyAgICAgaWYgKCFtYXRjaCkge1xuICAgIC8vICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgLy8gICAgIH1cbiAgICAvL1xuICAgIC8vICAgICByZXR1cm4ge1xuICAgIC8vICAgICAgICAgc3RhcnQ6IG1hdGNoLmluZGV4LFxuICAgIC8vICAgICAgICAgZW5kOiBvZmZzZXRcbiAgICAvLyAgICAgfTtcbiAgICAvLyB9XG4gICAgLy9cbiAgICAvLyBkYXRhQ2FsbGJhY2sobWF0Y2hJbmZvLCBjYWxsYmFjaykge1xuICAgIC8vICAgICB2YXIgZGF0YSA9IFBMQUNFSE9MREVSUy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAvLyAgICAgICAgIHZhciBpdGVtTmFtZSA9ICdbWycgKyBpdGVtLm5hbWUgKyAnXV0nO1xuICAgIC8vICAgICAgICAgcmV0dXJuIGl0ZW1OYW1lLmluZGV4T2YobWF0Y2hJbmZvLnF1ZXJ5LnRvTG93ZXJDYXNlKCkpID09IDA7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vXG4gICAgLy8gICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIGNoYW5nZVRlbXBsYXRlSXRlbShtYXRjaCkge1xuICAgIC8vXG4gICAgLy8gICAgIHJldHVybiBtYXRjaFsxXTtcbiAgICAvLyB9XG4gICAgLy8gYWRkUGxlaG9sZGVyKCBpZCApe1xuICAgIC8vICAgICBjb25zdCBpdGVtID0ge1xuICAgIC8vICAgICAgICAgaWQgOiBpZCxcbiAgICAvLyAgICAgICAgIHF1ZXN0aW9uIDogXCJcIixcbiAgICAvLyAgICAgICAgIHR5cGUgOiBcImlucHV0XCJcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbn1cbiIsImltcG9ydCB7Q29udHJvbGxlcn0gZnJvbSAnc3RpbXVsdXMnO1xuY29uc3QgVVJMX0JBU0UgPSBwcm9jZXNzLmVudi51cmw7XG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuXG5cbiAgICB9XG4gICAgY2xhc3NpZnkoKXtcbiAgICAgICAgY29uc3QgYXJnID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0XG4gICAgICAgIGxldCBmaWxlID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZG9jdW1lbnRfZmlsZVwiKS5maWxlc1swXTtcbiAgICAgICAgdmFyIHVybCA9IFVSTF9CQVNFKycvYXBpL3J1bGUvZXZhbHVhdGUnO1xuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJmaWxlXCIsIGZpbGUpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ1c2VyX2NvZGVcIiwgYXJnLnVzZXIpO1xuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4gIHtcbiAgICAgICAgICAgIGlmKHhoci5yZWFkeVN0YXRlID09PSA0KXtcbiAgICAgICAgICAgICAgICBpZiAoICB4aHIuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NsYXNzaWZpY2F0aW9ucyhkYXRhLnJlc3VsdHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH1cbiAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIHVybCAgKTtcbiAgICAgICAgeGhyLnNlbmQoZm9ybURhdGEpO1xuICAgIH1cblxuXG4gICAgc2hvd0NsYXNzaWZpY2F0aW9ucyggZGF0YSApIHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICB9XG59XG4iLCJpbXBvcnQge0NvbnRyb2xsZXJ9IGZyb20gJ3N0aW11bHVzJztcblxuaW1wb3J0IHByZXR0eUZpbGVJY29ucyBmcm9tICdwcmV0dHktZmlsZS1pY29ucyc7XG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcblxuICAgIHN0YXRpYyB2YWx1ZXMgPSB7IGZpbGVuYW1lOiBTdHJpbmcgfVxuXG4gICAgY29ubmVjdCgpIHtcblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVuYW1lKTtcbiAgICAgICAgdGhpcy5nZXRJY29uKHRoaXMuZmlsZW5hbWUpO1xuICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2Nlc3MpO1xuICAgIH1cblxuXG4gICAgZ2V0SWNvbihmaWxlTmFtZSl7XG4gICAgICAgIHZhciBpdGVtID0gcHJldHR5RmlsZUljb25zLmdldEljb24odGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKSlcbiAgICAgICAgdmFyIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBpbWcuc3JjID0gJy9hc3NldHMvaW1nL3N2Zy8nICsgaXRlbSArICcuc3ZnJztcbiAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgaXRlbSk7XG4gICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgaXRlbSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChpbWcpIDtcblxuICAgIH1cbn1cbiIsImltcG9ydCB7Q29udHJvbGxlcn0gZnJvbSAnc3RpbXVsdXMnO1xuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG5cblxuXG4gICAgY29ubmVjdCgpIHtcbiAgICB9XG5cblxuXG4gICAgc3RvcFByb3BhZ2F0aW9uKGV2ZW50KSB7XG4gICAgICAgIC8vIFRoZSBldmVudCB3b24ndCBiZSBwcm9wYWdhdGVkIHVwIHRvIHRoZSBkb2N1bWVudCBOT0RFIGFuZFxuICAgICAgICAvLyB0aGVyZWZvcmUgZGVsZWdhdGVkIGV2ZW50cyB3b24ndCBiZSBmaXJlZFxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICBmb2xkZXJMaXN0RnVjbnRpb24oZXZlbnQpIHtcbiAgICAgICAgY29uc3QgYXJnID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgkKSB7XG4gICAgICAgICAgICB2YXIgbW92ZUxGb2xkZXJMaXN0ID0gJCgnZGl2I21vdmVfbGlzdCcpXG5cblxuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgdXJsOiBcIi9hcGkvZm9sZGVyL2xpc3Qtc3ViLWl0ZW0vXCIgKyBhcmcuZm9sZGVyTW92aW5nSW4sXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBpbmRleDogLTEsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZm9sZGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIHVzZXJfY29kZTogXCIwOTcwMjI5ZS00ODY3LTRhZGEtYjBhYy1hMTk5NDQ2Y2JjMjFcIlxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgbW92ZUxGb2xkZXJMaXN0LmVtcHR5KCk7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMucmVzdWx0cy5kYXRhO1xuXG4gICAgICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9maWxsIGRyb3Bkb3duIGxpc3Qgd2l0aCBmb2xkZXJzXG5cbiAgICAgICAgICAgICAgICAkKCc8c3Bhbi8+JylcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdkcm9wZG93bi1pdGVtIGRyb3Bkb3duLWhlYWRlcicpXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0KHJlcy5yZXN1bHRzLnBhcmVudF9mb2xkZXIpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhtb3ZlTEZvbGRlckxpc3QpO1xuICAgICAgICAgICAgICAgICQoJzxkaXYvPicpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnZHJvcGRvd24tZGl2aWRlcicpXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhtb3ZlTEZvbGRlckxpc3QpO1xuICAgICAgICAgICAgICAgICQuZWFjaChkYXRhLnJvd3MsIGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHZhciBpZCA9ICdtb3ZlX2xpc3QnICsgaTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxpc3RJdGVtID0gJCgnPGRpdi8+JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnZC1mbGV4ICBmbGV4LXJvdyBtLTIgYm9yZGVyLWJvdHRvbScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8obW92ZUxGb2xkZXJMaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgJCgnPGRpdi8+JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnZHJvcGRvd24tZGl2aWRlcicpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8obGlzdEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAkKCc8aS8+JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnZmFzIGZhLWZvbGRlciBtci0yJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhsaXN0SXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsaUZvbGRlciA9ICQoJzxhLz4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2hyZWYnLCBcIiNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWZvbGRlci10by1tb3ZlJywgYXJnLmZvbGRlclRvTW92ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWZvbGRlci1tb3ZpbmctaW4nLCBkYXRhLnJvd3NbaV0uY29kZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLWFjdGlvbicsIFwiY2xpY2stPmZvbGRlciNmb2xkZXJMaXN0RnVjbnRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KGRhdGEucm93c1tpXS5sYWJlbClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhsaXN0SXRlbSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLyogKioqKioqKipcbiAgICAgICAgICAgICAgICAgICAgICBtb3ZlIHRvIHNwZWNpZmljIGZvbGRlciBjb250ZW50IGluIGRyb3Bkb3duIGxpc3RcbiAgICAgICAgICAgICAgICAgICAgICBieSByZWZpbGxpbmcgdGhlIGRyb3Bkb3duIG1lbnUgICAgICAgKioqKioqKioqKioqKiAgKi9cblxuICAgICAgICAgICAgICAgICAgICBsZXQgdXJsID0gYXJnLnBhdGg7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IHVybC5yZXBsYWNlKFwiaXRlbUNcIiwgYXJnLmZvbGRlclRvTW92ZSk7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IHVybC5yZXBsYWNlKFwibmV3UGFyZW50Q1wiLCBkYXRhLnJvd3NbaV0uY29kZSk7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IHVybC5yZXBsYWNlKFwidXNlckNcIiwgXCIwOTcwMjI5ZS00ODY3LTRhZGEtYjBhYy1hMTk5NDQ2Y2JjMjFcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHVybClcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1vdmVGb3JtID0gJCgnPGZvcm0vPicpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ21sLWF1dG8nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FjdGlvbicsIHVybClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdtZXRob2QnLCAncG9zdCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8obGlzdEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3VibWl0QnV0dG9uID0gJCgnPGJ1dHRvbi8+JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnYnRuIGJ0bi1ibG9jayBidG4tb3V0bGluZS1zZWNvbmRhcnkgIHAtMCBtYi0xJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCd0eXBlJywgJ3N1Ym1pdCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8obW92ZUZvcm0pO1xuICAgICAgICAgICAgICAgICAgICAkKCc8aS8+JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnZmFzIGZhLWNoZXZyb24tY2lyY2xlLWRvd24gbXItMSBtbC0xJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhzdWJtaXRCdXR0b24pO1xuXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcblxuXG4gICAgfTtcblxuXG5cbiAgICBSZW5hbWUoZXZlbnQpIHtcbiAgICAgICAgXG4gICAgICAgICAgIFxuICAgICAgIC8vIGl0ZW1fY29kZSAsIHBhcmVudF9jb2RlXG4gICAgICAgICQoJ2J1dHRvbiNyZW5hbWVfYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGxhYmVsID0gJCgnaW5wdXQjbGFiZWwnKS52YWwoKVxuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICAgICAgICAgICAgICB1cmw6IFwiL2l0ZW0vcmVuYW1lSXRlbS9cIiArIGl0ZW1fY29kZSAsXG4gICAgICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe2xhYmVsOiBsYWJlbH0pLFxuICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuXG4gICAgICAgICAgICB9KS5mYWlsKGZ1bmN0aW9uIChYTUxIdHRwUmVxdWVzdCwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhYTUxIdHRwUmVxdWVzdC5yZXNwb25zZVRleHQpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgU2hhcmVFTWFpbCgpIHtcbiAgICAgICAgY29uc3QgYXJnID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgICAgICBsZXQgaXRlbV9jb2RlID0gYXJnLnNoYXJlZEl0ZW1FbWFpbDtcbiAgICAgIFxuICAgICAgICAkKFwiI2J0blNoYXJlXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBlbWFpbCA9ICQoJ2lucHV0I3NoYXJlX2VtYWlsJykudmFsKClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVtYWlsKVxuICAgICAgICAgICAgdmFyIHJvbGVzID0gW107XG4gICAgICAgICAgICAkKFwiI2ZpbmQtdGFibGUgaW5wdXQ6Y2hlY2tib3g6Y2hlY2tlZFwiKS5tYXAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJvbGVzLnB1c2goJCh0aGlzKS52YWwoKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJvbGVzKTtcblxuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgIHVybDogXCIvYXBpL2l0ZW0vc2hhcmVXaXRoT3RoZXJzL1wiICsgaXRlbV9jb2RlLFxuICAgICAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtlbWFpbDogZW1haWwsIHJvbGVzOiByb2xlc30pLFxuICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuXG4gICAgICAgICAgICB9KS5mYWlsKGZ1bmN0aW9uIChYTUxIdHRwUmVxdWVzdCwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhYTUxIdHRwUmVxdWVzdC5yZXNwb25zZVRleHQpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcblxuXG4gICAgfVxuXG4gICAgXG5cbiAgICBTaGFyZUxpbmsoKSB7XG5cbiAgICAgICAgY29uc3QgYXJnID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgICAgICBsZXQgaXRlbV9jb2RlID0gYXJnLnNoYXJlZEl0ZW1MaW5rO1xuICAgICAgXG4gICAgICAgICQoXCIjc2hhcmVMaW5rX2J0blwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgcm9sZXMgPSBBcnJheSgpO1xuXG4gICAgICAgICAgICAkKFwiI2ZpbmQtdGFibGVsaW5rIGlucHV0OmNoZWNrYm94OmNoZWNrZWRcIikubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgcm9sZXMucHVzaCgkKHRoaXMpLnZhbCgpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgKHJvbGVzKSlcbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICB1cmw6IFwiL2FwaS9pdGVtL3NoYXJlTGlua3MvXCIgKyBpdGVtX2NvZGUsXG4gICAgICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe3JvbGVzOiByb2xlc30pLFxuICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxpbmsgPSByZXMucmVzdWx0cy5kYXRhLmxpbms7XG4gICAgICAgICAgICAgICAgJChcIiNsaW5rLWRhdGFcIikuYXBwZW5kKEpTT04uc3RyaW5naWZ5KGxpbmspKTtcblxuICAgICAgICAgICAgfSkuZmFpbChmdW5jdGlvbiAoWE1MSHR0cFJlcXVlc3QsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coWE1MSHR0cFJlcXVlc3QucmVzcG9uc2VUZXh0KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG5cblxuICAgIH1cblxuXG4gICAgQ2FuY2VsU2hhcmVMaW5rKGl0ZW1fY29kZSkge1xuICAgICAgIFxuICAgICAgICQoJ2J1dHRvbiNjYW5jZWxfYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgICAgICAgICAgdXJsOiBcIi9hcGkvaXRlbS9DYW5jZWxzaGFyZUxpbmsvXCIgKyBpdGVtX2NvZGUgLFxuICAgICAgICAgICB9KS5kb25lKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcblxuICAgICAgICAgICB9KS5mYWlsKGZ1bmN0aW9uIChYTUxIdHRwUmVxdWVzdCwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFhNTEh0dHBSZXF1ZXN0LnJlc3BvbnNlVGV4dClcbiAgICAgICAgICAgfSlcbiAgICAgICB9KVxuICAgfTtcblxuXG5cbiAgIERvd25sb2FkWmlwKCkge1xuICAgICAgICBjb25zdCBhcmcgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgICAgIGNvbnNvbGUubG9nKGFyZylcbiAgICAgICAgJChcIiNidG5femlwXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBpdGVtcyA9IEFycmF5KCk7XG5cbiAgICAgICAgICBcbiAgICAgICAgICAgICQoXCIjZmluZC10YWJsZVppcCBpbnB1dDpjaGVja2JveDpjaGVja2VkXCIpLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2goJCh0aGlzKS52YWwoKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICBcbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgICAgIHVybDogXCIvYXBpL2l0ZW0vZG93bmxvYWRaaXBcIiAsXG4gICAgICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe2l0ZW1zOiBpdGVtc30pLFxuICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib2tcIilcbiAgICAgICAgICAgIH0pLmZhaWwoZnVuY3Rpb24gKFhNTEh0dHBSZXF1ZXN0LCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFhNTEh0dHBSZXF1ZXN0LnJlc3BvbnNlVGV4dClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuXG5cbiAgICB9O1xuXG5cblxuXG59XG4iLCJpbXBvcnQge0NvbnRyb2xsZXJ9IGZyb20gJ3N0aW11bHVzJztcbmltcG9ydCBQcmlzbSBmcm9tICdwcmlzbWpzJztcbmltcG9ydCBUcmlidXRlIGZyb20gXCJ0cmlidXRlanNcIjtcbmNvbnN0IFVSTF9CQVNFID0gcHJvY2Vzcy5lbnYudXJsO1xuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICBQcmlzbS5sYW5ndWFnZXMucnVsZSA9IHtcbiAgICAgICAgICAgICdudW1iZXInOntcbiAgICAgICAgICAgICAgICBwYXR0ZXJuIDogL1swLTldKyg/OlxcLlswLTldKyk/KFtFZV1bXFwrXFwtXVswLTldKyk/L1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdwdW5jdHVhdGlvbic6e1xuICAgICAgICAgICAgICAgIHBhdHRlcm4gOiAvWygpe307OixdL1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdzdHJpbmcnOntcbiAgICAgICAgICAgICAgICBwYXR0ZXJuIDogL1wiWzAtOWEtekEtWi1fXStcIi9cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnb3BlcmF0b3InOntcbiAgICAgICAgICAgICAgICBwYXR0ZXJuIDogL1xcYltBLVpfXStcXGIvLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nZXRPcGVyYXRvcnMoKG9wZXJhdG9ycyk9PntcblxuICAgICAgICAgICAgdGhpcy5ydWxlQXV0b2NvbXBsZXRlKG9wZXJhdG9ycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuICAgIHJ1bGVBdXRvY29tcGxldGUob3BlcmF0b3JzKXtcblxuICAgICAgICB2YXIgdHJpYnV0ZSA9IG5ldyBUcmlidXRlKHtcbiAgICAgICAgICAgIHZhbHVlczogb3BlcmF0b3JzLFxuICAgICAgICAgICAgc2VsZWN0VGVtcGxhdGU6IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gICBpdGVtLm9yaWdpbmFsLmtleTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIC8vICAgIGNvbnRhaW5lckNsYXNzOiBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB0cmlidXRlLWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgbWVudUl0ZW1UZW1wbGF0ZTogZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAgICc8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+JytpdGVtLnN0cmluZyArICc8aSBjbGFzcz1cImZhciBmYS1xdWVzdGlvbi1jaXJjbGUgaGVscFwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNtdWx0aUNvbGxhcHNlRXhhbXBsZTJcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWNvbnRyb2xzPVwibXVsdGlDb2xsYXBzZUV4YW1wbGUyXCI+PC9pPjwvZGl2Pic7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXV0b2NvbXBsZXRlTW9kZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgdHJpYnV0ZS5hdHRhY2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0aW5nXCIpKTtcbiAgICB9XG4gICAgaGlnaGxpZ2h0KCl7XG5cbiAgICAgICAgbGV0IHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRpbmdcIik7XG5cbiAgICAgICAgbGV0IHJ1bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpZ2hsaWdodGluZy1jb250ZW50XCIpO1xuXG4gICAgICAgIHJ1bGUuZm9jdXMoKTtcbiAgICAgICAgcnVsZS5pbm5lckhUTUwgPSBQcmlzbS5oaWdobGlnaHQodGV4dC52YWx1ZSwgUHJpc20ubGFuZ3VhZ2VzLnJ1bGUsICdydWxlJyk7XG4gICAgICAgIHRoaXMuc3luY19zY3JvbGwoIHRleHQgKTtcbiAgICB9XG5cbiAgICBjaGVja190YWIoIGV2ZW50KSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0aW5nXCIpO1xuICAgICAgICBsZXQgY29kZSA9IGVsZW1lbnQudmFsdWU7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT0gXCJUYWJcIikge1xuICAgICAgICAgICAgLyogVGFiIGtleSBwcmVzc2VkICovXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBzdG9wIG5vcm1hbFxuICAgICAgICAgICAgbGV0IGJlZm9yZV90YWIgPSBjb2RlLnNsaWNlKDAsIGVsZW1lbnQuc2VsZWN0aW9uU3RhcnQpOyAvLyB0ZXh0IGJlZm9yZSB0YWJcbiAgICAgICAgICAgIGxldCBhZnRlcl90YWIgPSBjb2RlLnNsaWNlKGVsZW1lbnQuc2VsZWN0aW9uRW5kLCBlbGVtZW50LnZhbHVlLmxlbmd0aCk7IC8vIHRleHQgYWZ0ZXIgdGFiXG4gICAgICAgICAgICBsZXQgY3Vyc29yX3BvcyA9IGVsZW1lbnQuc2VsZWN0aW9uRW5kICsgMjsgLy8gYWZ0ZXIgdGFiIHBsYWNlZCwgd2hlcmUgY3Vyc29yIG1vdmVzIHRvIC0gMiBmb3IgMiBzcGFjZXNcbiAgICAgICAgICAgIGVsZW1lbnQudmFsdWUgPSBiZWZvcmVfdGFiICsgXCIgIFwiICsgYWZ0ZXJfdGFiOyAvLyBhZGQgdGFiIGNoYXIgLSAyIHNwYWNlc1xuICAgICAgICAgICAgLy8gbW92ZSBjdXJzb3JcbiAgICAgICAgICAgIGVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSBjdXJzb3JfcG9zO1xuICAgICAgICAgICAgZWxlbWVudC5zZWxlY3Rpb25FbmQgPSBjdXJzb3JfcG9zO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgc3luY19zY3JvbGwoZWxlbWVudCkge1xuICAgICAgICAvKiBTY3JvbGwgcmVzdWx0IHRvIHNjcm9sbCBjb29yZHMgb2YgZXZlbnQgLSBzeW5jIHdpdGggdGV4dGFyZWEgKi9cbiAgICAgICAgbGV0IHJlc3VsdF9lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoaWdobGlnaHRpbmdcIik7XG4gICAgICAgIC8vIEdldCBhbmQgc2V0IHggYW5kIHlcbiAgICAgICAgcmVzdWx0X2VsZW1lbnQuc2Nyb2xsVG9wID0gZWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgIHJlc3VsdF9lbGVtZW50LnNjcm9sbExlZnQgPSBlbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgfVxuXG4gICAgZ2V0T3BlcmF0b3JzKCBjYikge1xuICAgICAgICB2YXIgVVJMID0gVVJMX0JBU0UrXCIvYXBpL3J1bGVcIjtcbiAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IFtdO1xuICAgICAgICAgICAgaWYoeGhyLnJlYWR5U3RhdGUgPT09IDQpe1xuICAgICAgICAgICAgICAgIGlmICggIHhoci5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpLnJlc3VsdHMub3BlcmF0b3JzO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh4aHIuc3RhdHVzID09PSA0MDMpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYihkYXRhKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9O1xuICAgICAgICB4aHIub3BlbihcIkdFVFwiLCBVUkwgLCBmYWxzZSk7XG4gICAgICAgIHhoci5zZW5kKCk7XG4gICAgfVxuICAgIGNvbXBpbGUoICkge1xuICAgICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdGluZ1wiKTtcblxuICAgICAgICB2YXIgdXJsID0gVVJMX0JBU0UrJy9hcGkvcnVsZS9jb21waWxlJztcbiAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB2YXIgYm9keSA9IHtcbiAgICAgICAgICAgIGV4cHJlc3Npb24gOiB0ZXh0LnZhbHVlXG4gICAgICAgIH1cbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+ICB7XG4gICAgICAgICAgICBpZih4aHIucmVhZHlTdGF0ZSA9PT0gNCl7XG4gICAgICAgICAgICAgICAgaWYgKCAgeGhyLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dBbGVydHMoZGF0YS5yZXN1bHRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgfVxuICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgdXJsICApO1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtdHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIik7XG4gICAgICAgIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KGJvZHkpKTtcbiAgICB9XG4gICAgIHNob3dBbGVydHMocmVzdWx0cykge1xuICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvb3RzdHJhcC1hbGVydCcpLmNsYXNzTmFtZSA9IFwiYWxlcnQgYWxlcnQtXCIrIHJlc3VsdHMuc2NvcGUgO1xuXG4gICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9vdHN0cmFwLWFsZXJ0JykuaW5uZXJIVE1MID0gcmVzdWx0cy5hbGVydCA7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib290c3RyYXAtYWxlcnQnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib290c3RyYXAtYWxlcnQnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnfSwgMTcwMDApO1xuICAgICAgICBpZihyZXN1bHRzLnNjb3BlID09ICdzdWNjZXNzJyl7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0LXJ1bGUnKS5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSA7XG4gICAgICAgIH1pZihyZXN1bHRzLnNjb3BlID09ICdkYW5nZXInKXtcbiAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0LXJ1bGUnKS5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLFwidHJ1ZVwiKSA7XG4gICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvLyBnZXRSdWxlVmFycyhhcmdzKSB7XG4gICAgLy9cbiAgICAvLyAgICAgbGV0IGV4cHJfYXJnID0gW107XG4gICAgLy8gICAgIGZvciAobGV0IGFyZyBvZiBhcmdzKSB7XG4gICAgLy8gICAgICAgICBleHByX2FyZy5wdXNoKGFyZy5sYWJlbCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgcmV0dXJuIGV4cHJfYXJnO1xuICAgIC8vIH1cbn1cblxuXG4iLCJpbXBvcnQgRGVjb3VwbGVkRWRpdG9yQmFzZSAgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1lZGl0b3ItZGVjb3VwbGVkL3NyYy9kZWNvdXBsZWRlZGl0b3InO1xuaW1wb3J0IFBhZ2VCcmVhayBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LXBhZ2UtYnJlYWsvc3JjL3BhZ2VicmVhayc7XG5pbXBvcnQgRXNzZW50aWFscyBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWVzc2VudGlhbHMvc3JjL2Vzc2VudGlhbHMnO1xuaW1wb3J0IEFsaWdubWVudCBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWFsaWdubWVudC9zcmMvYWxpZ25tZW50JztcbmltcG9ydCBGb250U2l6ZSBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWZvbnQvc3JjL2ZvbnRzaXplJztcbmltcG9ydCBGb250RmFtaWx5IGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtZm9udC9zcmMvZm9udGZhbWlseSc7XG5pbXBvcnQgRm9udENvbG9yIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtZm9udC9zcmMvZm9udGNvbG9yJztcbmltcG9ydCBGb250QmFja2dyb3VuZENvbG9yIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtZm9udC9zcmMvZm9udGJhY2tncm91bmRjb2xvcic7XG5pbXBvcnQgVXBsb2FkQWRhcHRlciBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWFkYXB0ZXItY2tmaW5kZXIvc3JjL3VwbG9hZGFkYXB0ZXInO1xuaW1wb3J0IEF1dG9mb3JtYXQgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1hdXRvZm9ybWF0L3NyYy9hdXRvZm9ybWF0JztcbmltcG9ydCBCb2xkIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtYmFzaWMtc3R5bGVzL3NyYy9ib2xkJztcbmltcG9ydCBJdGFsaWMgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1iYXNpYy1zdHlsZXMvc3JjL2l0YWxpYyc7XG5pbXBvcnQgU3RyaWtldGhyb3VnaCBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWJhc2ljLXN0eWxlcy9zcmMvc3RyaWtldGhyb3VnaCc7XG5pbXBvcnQgVW5kZXJsaW5lIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtYmFzaWMtc3R5bGVzL3NyYy91bmRlcmxpbmUnO1xuaW1wb3J0IEJsb2NrUXVvdGUgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1ibG9jay1xdW90ZS9zcmMvYmxvY2txdW90ZSc7XG5pbXBvcnQgQ0tGaW5kZXIgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1ja2ZpbmRlci9zcmMvY2tmaW5kZXInO1xuaW1wb3J0IEVhc3lJbWFnZSBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWVhc3ktaW1hZ2Uvc3JjL2Vhc3lpbWFnZSc7XG5pbXBvcnQgSGVhZGluZyBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWhlYWRpbmcvc3JjL2hlYWRpbmcnO1xuaW1wb3J0IEltYWdlIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtaW1hZ2Uvc3JjL2ltYWdlJztcbmltcG9ydCBJbWFnZUNhcHRpb24gZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1pbWFnZS9zcmMvaW1hZ2VjYXB0aW9uJztcbmltcG9ydCBJbWFnZVN0eWxlIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtaW1hZ2Uvc3JjL2ltYWdlc3R5bGUnO1xuaW1wb3J0IEltYWdlVG9vbGJhciBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWltYWdlL3NyYy9pbWFnZXRvb2xiYXInO1xuaW1wb3J0IEltYWdlVXBsb2FkIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtaW1hZ2Uvc3JjL2ltYWdldXBsb2FkJztcbmltcG9ydCBJbmRlbnQgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1pbmRlbnQvc3JjL2luZGVudCc7XG5pbXBvcnQgSW5kZW50QmxvY2sgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1pbmRlbnQvc3JjL2luZGVudGJsb2NrJztcbmltcG9ydCBUZW1wbGF0ZSBmcm9tICcuL2NrZWRpdG9yNS10ZW1wbGF0aW5nL3NyYy90ZW1wbGF0ZSc7XG5pbXBvcnQgTGluayBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWxpbmsvc3JjL2xpbmsnO1xuaW1wb3J0IExpc3QgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1saXN0L3NyYy9saXN0JztcbmltcG9ydCBNZWRpYUVtYmVkIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtbWVkaWEtZW1iZWQvc3JjL21lZGlhZW1iZWQnO1xuaW1wb3J0IFBhcmFncmFwaCBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LXBhcmFncmFwaC9zcmMvcGFyYWdyYXBoJztcbmltcG9ydCBQYXN0ZUZyb21PZmZpY2UgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1wYXN0ZS1mcm9tLW9mZmljZS9zcmMvcGFzdGVmcm9tb2ZmaWNlJztcbmltcG9ydCBUYWJsZSBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LXRhYmxlL3NyYy90YWJsZSc7XG5pbXBvcnQgVGFibGVUb29sYmFyIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtdGFibGUvc3JjL3RhYmxldG9vbGJhcic7XG5pbXBvcnQgQ2xvdWRTZXJ2aWNlcyBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWNsb3VkLXNlcnZpY2VzL3NyYy9jbG91ZHNlcnZpY2VzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVjb3VwbGVkRWRpdG9yIGV4dGVuZHMgRGVjb3VwbGVkRWRpdG9yQmFzZSB7fVxuXG4vLyBQbHVnaW5zIHRvIGluY2x1ZGUgaW4gdGhlIGJ1aWxkLlxuRGVjb3VwbGVkRWRpdG9yLmJ1aWx0aW5QbHVnaW5zID0gW1xuICAgIEVzc2VudGlhbHMsXG4gICAgQWxpZ25tZW50LFxuICAgIEZvbnRTaXplLFxuICAgIEZvbnRGYW1pbHksXG4gICAgRm9udENvbG9yLFxuICAgIEZvbnRCYWNrZ3JvdW5kQ29sb3IsXG4gICAgVXBsb2FkQWRhcHRlcixcbiAgICBBdXRvZm9ybWF0LFxuICAgIEJvbGQsXG4gICAgSXRhbGljLFxuICAgIFN0cmlrZXRocm91Z2gsXG4gICAgVW5kZXJsaW5lLFxuICAgIEJsb2NrUXVvdGUsXG4gICAgQ0tGaW5kZXIsXG4gICAgRWFzeUltYWdlLFxuICAgIEhlYWRpbmcsXG4gICAgSW1hZ2UsXG4gICAgSW1hZ2VDYXB0aW9uLFxuICAgIEltYWdlU3R5bGUsXG4gICAgSW1hZ2VUb29sYmFyLFxuICAgIEltYWdlVXBsb2FkLFxuICAgIEluZGVudCxcbiAgICBJbmRlbnRCbG9jayxcbiAgICBMaW5rLFxuICAgIExpc3QsXG4gICAgTWVkaWFFbWJlZCxcbiAgICBQYXJhZ3JhcGgsXG4gICAgUGFzdGVGcm9tT2ZmaWNlLFxuICAgIFRhYmxlLFxuICAgIFRhYmxlVG9vbGJhcixcbiAgICBUZW1wbGF0ZSxcbiAgICBQYWdlQnJlYWssXG4gICAgQ2xvdWRTZXJ2aWNlc1xuXG5dO1xuXG4vLyBFZGl0b3IgY29uZmlndXJhdGlvbi5cbkRlY291cGxlZEVkaXRvci5kZWZhdWx0Q29uZmlnID0ge1xuICAgIHRvb2xiYXI6IHtcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICd0ZW1wbGF0ZScsXG4gICAgICAgICAgICAndGVtcGxhdGUtc2F2ZScsXG4gICAgICAgICAgICAnfCcsXG4gICAgICAgICAgICAnaGVhZGluZycsXG4gICAgICAgICAgICAnfCcsXG4gICAgICAgICAgICAncGFnZUJyZWFrJyxcbiAgICAgICAgICAgICd8JyxcbiAgICAgICAgICAgICdmb250ZmFtaWx5JyxcbiAgICAgICAgICAgICdmb250c2l6ZScsXG4gICAgICAgICAgICAnZm9udENvbG9yJyxcbiAgICAgICAgICAgICdmb250QmFja2dyb3VuZENvbG9yJyxcbiAgICAgICAgICAgICd8JyxcbiAgICAgICAgICAgICdib2xkJyxcbiAgICAgICAgICAgICdpdGFsaWMnLFxuICAgICAgICAgICAgJ3VuZGVybGluZScsXG4gICAgICAgICAgICAnc3RyaWtldGhyb3VnaCcsXG4gICAgICAgICAgICAnfCcsXG4gICAgICAgICAgICAnYWxpZ25tZW50JyxcbiAgICAgICAgICAgICd8JyxcbiAgICAgICAgICAgICdudW1iZXJlZExpc3QnLFxuICAgICAgICAgICAgJ2J1bGxldGVkTGlzdCcsXG4gICAgICAgICAgICAnfCcsXG4gICAgICAgICAgICAnaW5kZW50JyxcbiAgICAgICAgICAgICdvdXRkZW50JyxcbiAgICAgICAgICAgICd8JyxcbiAgICAgICAgICAgICdibG9ja3F1b3RlJyxcbiAgICAgICAgICAgICdpbWFnZVVwbG9hZCcsXG4gICAgICAgICAgICAnaW5zZXJ0VGFibGUnLFxuICAgICAgICAgICAgJ21lZGlhRW1iZWQnLFxuICAgICAgICAgICAgJ3wnLFxuICAgICAgICAgICAgJ3VuZG8nLFxuICAgICAgICAgICAgJ3JlZG8nXG4gICAgICAgIF1cbiAgICB9LFxuICAgIGltYWdlOiB7XG4gICAgICAgIHN0eWxlczogW1xuICAgICAgICAgICAgJ2Z1bGwnLFxuICAgICAgICAgICAgJ2FsaWduTGVmdCcsXG4gICAgICAgICAgICAnYWxpZ25SaWdodCdcbiAgICAgICAgXSxcbiAgICAgICAgdG9vbGJhcjogW1xuICAgICAgICAgICAgJ2ltYWdlU3R5bGU6YWxpZ25MZWZ0JyxcbiAgICAgICAgICAgICdpbWFnZVN0eWxlOmZ1bGwnLFxuICAgICAgICAgICAgJ2ltYWdlU3R5bGU6YWxpZ25SaWdodCcsXG4gICAgICAgICAgICAnfCcsXG4gICAgICAgICAgICAnaW1hZ2VUZXh0QWx0ZXJuYXRpdmUnXG4gICAgICAgIF1cbiAgICB9LFxuICAgIHRhYmxlOiB7XG4gICAgICAgIGNvbnRlbnRUb29sYmFyOiBbXG4gICAgICAgICAgICAndGFibGVDb2x1bW4nLFxuICAgICAgICAgICAgJ3RhYmxlUm93JyxcbiAgICAgICAgICAgICdtZXJnZVRhYmxlQ2VsbHMnXG4gICAgICAgIF1cbiAgICB9LFxuICAgIC8vIFRoaXMgdmFsdWUgbXVzdCBiZSBrZXB0IGluIHN5bmMgd2l0aCB0aGUgbGFuZ3VhZ2UgZGVmaW5lZCBpbiB3ZWJwYWNrLmNvbmZpZy5qcy5cbiAgICBsYW5ndWFnZTogJ2VuJ1xufTtcbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuXG5cbmltcG9ydCAndHJpYnV0ZWpzJztcbmltcG9ydCAnYm9vdHN0cmFwJztcbmltcG9ydCAnLi9ib290c3RyYXAnO1xucmVxdWlyZSgncHJvY2VzcycpOyIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5Jztcbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLihqfHQpc3g/JC9cbikpO1xuXG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCIvKipcbiAqIEBsaWNlbnNlIENvcHlyaWdodCAoYykgMjAwMy0yMDIxLCBDS1NvdXJjZSAtIEZyZWRlcmljbyBLbmFiYmVuLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogRm9yIGxpY2Vuc2luZywgc2VlIExJQ0VOU0UubWQgb3IgaHR0cHM6Ly9ja2VkaXRvci5jb20vbGVnYWwvY2tlZGl0b3Itb3NzLWxpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGluay91bmxpbmtjb21tYW5kXG4gKi9cblxuaW1wb3J0ICBDb21tYW5kICBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWNvcmUvc3JjL2NvbW1hbmQnO1xuaW1wb3J0ICBmaW5kQXR0cmlidXRlUmFuZ2UgIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtdHlwaW5nL3NyYy91dGlscy9maW5kYXR0cmlidXRlcmFuZ2UnO1xuaW1wb3J0ICBmaXJzdCAgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS11dGlscy9zcmMvZmlyc3QnO1xuXG5pbXBvcnQgeyBpc0ltYWdlQWxsb3dlZCB9IGZyb20gJy4vdXRpbHMnO1xuXG4vKipcbiAqIFRoZSB1bmxpbmsgY29tbWFuZC4gSXQgaXMgdXNlZCBieSB0aGUge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt+TGluayBsaW5rIHBsdWdpbn0uXG4gKlxuICogQGV4dGVuZHMgbW9kdWxlOmNvcmUvY29tbWFuZH5Db21tYW5kXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbmNlbFRlbXBsYXRlQ29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xuXHQvKipcblx0ICogQGluaGVyaXREb2Ncblx0ICovXG5cdHJlZnJlc2goKSB7XG5cdFx0Y29uc3QgbW9kZWwgPSB0aGlzLmVkaXRvci5tb2RlbDtcblx0XHRjb25zdCBkb2MgPSBtb2RlbC5kb2N1bWVudDtcblxuXHRcdGNvbnN0IHNlbGVjdGVkRWxlbWVudCA9IGZpcnN0KCBkb2Muc2VsZWN0aW9uLmdldFNlbGVjdGVkQmxvY2tzKCkgKTtcblxuXHRcdC8vIEEgY2hlY2sgZm9yIHRoZSBgTGlua0ltYWdlYCBwbHVnaW4uIElmIHRoZSBzZWxlY3Rpb24gY29udGFpbnMgYW4gaW1hZ2UgZWxlbWVudCwgZ2V0IHZhbHVlcyBmcm9tIHRoZSBlbGVtZW50LlxuXHRcdC8vIEN1cnJlbnRseSB0aGUgc2VsZWN0aW9uIHJlYWRzIGF0dHJpYnV0ZXMgZnJvbSB0ZXh0IG5vZGVzIG9ubHkuIFNlZSAjNzQyOSBhbmQgIzc0NjUuXG5cdFx0aWYgKCBpc0ltYWdlQWxsb3dlZCggc2VsZWN0ZWRFbGVtZW50LCBtb2RlbC5zY2hlbWEgKSApIHtcblx0XHRcdHRoaXMuaXNFbmFibGVkID0gbW9kZWwuc2NoZW1hLmNoZWNrQXR0cmlidXRlKCBzZWxlY3RlZEVsZW1lbnQsICd0ZW1wbGF0ZVZhcicgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5pc0VuYWJsZWQgPSBtb2RlbC5zY2hlbWEuY2hlY2tBdHRyaWJ1dGVJblNlbGVjdGlvbiggZG9jLnNlbGVjdGlvbiwgJ3RlbXBsYXRlVmFyJyApO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBFeGVjdXRlcyB0aGUgY29tbWFuZC5cblx0ICpcblx0ICogV2hlbiB0aGUgc2VsZWN0aW9uIGlzIGNvbGxhcHNlZCwgaXQgcmVtb3ZlcyB0aGUgYGxpbmtIcmVmYCBhdHRyaWJ1dGUgZnJvbSBlYWNoIG5vZGUgd2l0aCB0aGUgc2FtZSBgbGlua0hyZWZgIGF0dHJpYnV0ZSB2YWx1ZS5cblx0ICogV2hlbiB0aGUgc2VsZWN0aW9uIGlzIG5vbi1jb2xsYXBzZWQsIGl0IHJlbW92ZXMgdGhlIGBsaW5rSHJlZmAgYXR0cmlidXRlIGZyb20gZWFjaCBub2RlIGluIHNlbGVjdGVkIHJhbmdlcy5cblx0ICpcblx0ICogIyBEZWNvcmF0b3JzXG5cdCAqXG5cdCAqIElmIHtAbGluayBtb2R1bGU6bGluay9saW5rfkxpbmtDb25maWcjZGVjb3JhdG9ycyBgY29uZmlnLmxpbmsuZGVjb3JhdG9yc2B9IGlzIHNwZWNpZmllZCxcblx0ICogYWxsIGNvbmZpZ3VyZWQgZGVjb3JhdG9ycyBhcmUgcmVtb3ZlZCB0b2dldGhlciB3aXRoIHRoZSBgbGlua0hyZWZgIGF0dHJpYnV0ZS5cblx0ICpcblx0ICogQGZpcmVzIGV4ZWN1dGVcblx0ICovXG5cdGV4ZWN1dGUoKSB7XG5cdFx0Y29uc3QgZWRpdG9yID0gdGhpcy5lZGl0b3I7XG5cdFx0Y29uc3QgbW9kZWwgPSB0aGlzLmVkaXRvci5tb2RlbDtcblx0XHRjb25zdCBzZWxlY3Rpb24gPSBtb2RlbC5kb2N1bWVudC5zZWxlY3Rpb247XG5cdFx0Y29uc3QgbGlua0NvbW1hbmQgPSBlZGl0b3IuY29tbWFuZHMuZ2V0KCAndGVtcGxhdGUnICk7XG5cblx0XHRtb2RlbC5jaGFuZ2UoIHdyaXRlciA9PiB7XG5cdFx0XHQvLyBHZXQgcmFuZ2VzIHRvIHVubGluay5cblx0XHRcdGNvbnN0IHJhbmdlc1RvVW5saW5rID0gc2VsZWN0aW9uLmlzQ29sbGFwc2VkID9cblx0XHRcdFx0WyBmaW5kQXR0cmlidXRlUmFuZ2UoXG5cdFx0XHRcdFx0c2VsZWN0aW9uLmdldEZpcnN0UG9zaXRpb24oKSxcblx0XHRcdFx0XHQndGVtcGxhdGVWYXInLFxuXHRcdFx0XHRcdHNlbGVjdGlvbi5nZXRBdHRyaWJ1dGUoICd0ZW1wbGF0ZVZhcicgKSxcblx0XHRcdFx0XHRtb2RlbFxuXHRcdFx0XHQpIF0gOlxuXHRcdFx0XHRtb2RlbC5zY2hlbWEuZ2V0VmFsaWRSYW5nZXMoIHNlbGVjdGlvbi5nZXRSYW5nZXMoKSwgJ3RlbXBsYXRlVmFyJyApO1xuXG5cdFx0XHQvLyBSZW1vdmUgYGxpbmtIcmVmYCBhdHRyaWJ1dGUgZnJvbSBzcGVjaWZpZWQgcmFuZ2VzLlxuXHRcdFx0Zm9yICggY29uc3QgcmFuZ2Ugb2YgcmFuZ2VzVG9VbmxpbmsgKSB7XG5cdFx0XHRcdHdyaXRlci5yZW1vdmVBdHRyaWJ1dGUoICd0ZW1wbGF0ZVZhcicsIHJhbmdlICk7XG5cdFx0XHRcdC8vIElmIHRoZXJlIGFyZSByZWdpc3RlcmVkIGN1c3RvbSBhdHRyaWJ1dGVzLCB0aGVuIHJlbW92ZSB0aGVtIGR1cmluZyB1bmxpbmsuXG5cdFx0XHRcdGlmICggbGlua0NvbW1hbmQgKSB7XG5cdFx0XHRcdFx0Zm9yICggY29uc3QgbWFudWFsRGVjb3JhdG9yIG9mIGxpbmtDb21tYW5kLm1hbnVhbERlY29yYXRvcnMgKSB7XG5cdFx0XHRcdFx0XHR3cml0ZXIucmVtb3ZlQXR0cmlidXRlKCBtYW51YWxEZWNvcmF0b3IuaWQsIHJhbmdlICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlIENvcHlyaWdodCAoYykgMjAwMy0yMDIxLCBDS1NvdXJjZSAtIEZyZWRlcmljbyBLbmFiYmVuLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogRm9yIGxpY2Vuc2luZywgc2VlIExJQ0VOU0UubWQgb3IgaHR0cHM6Ly9ja2VkaXRvci5jb20vbGVnYWwvY2tlZGl0b3Itb3NzLWxpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGluay9saW5rY29tbWFuZFxuICovXG5cbmltcG9ydCAgQ29tbWFuZCAgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1jb3JlL3NyYy9jb21tYW5kJztcbmltcG9ydCAgZmluZEF0dHJpYnV0ZVJhbmdlICBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LXR5cGluZy9zcmMvdXRpbHMvZmluZGF0dHJpYnV0ZXJhbmdlJztcbmltcG9ydCB7IENvbGxlY3Rpb24sIHRvTWFwLCBmaXJzdCB9IGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtdXRpbHMvc3JjLyc7XG5cbmltcG9ydCB7IGlzSW1hZ2VBbGxvd2VkIH0gZnJvbSAnLi91dGlscyc7XG5cbi8qKlxuICogVGhlIGxpbmsgY29tbWFuZC4gSXQgaXMgdXNlZCBieSB0aGUge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt+TGluayBsaW5rIGZlYXR1cmV9LlxuICpcbiAqIEBleHRlbmRzIG1vZHVsZTpjb3JlL2NvbW1hbmR+Q29tbWFuZFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZW1wbGF0ZUNvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcblx0LyoqXG5cdCAqIFRoZSB2YWx1ZSBvZiB0aGUgYCdsaW5rSHJlZidgIGF0dHJpYnV0ZSBpZiB0aGUgc3RhcnQgb2YgdGhlIHNlbGVjdGlvbiBpcyBsb2NhdGVkIGluIGEgbm9kZSB3aXRoIHRoaXMgYXR0cmlidXRlLlxuXHQgKlxuXHQgKiBAb2JzZXJ2YWJsZVxuXHQgKiBAcmVhZG9ubHlcblx0ICogQG1lbWJlciB7T2JqZWN0fHVuZGVmaW5lZH0gI3ZhbHVlXG5cdCAqL1xuXG5cdGNvbnN0cnVjdG9yKCBlZGl0b3IgKSB7XG5cdFx0c3VwZXIoIGVkaXRvciApO1xuXG5cdFx0LyoqXG5cdFx0ICogQSBjb2xsZWN0aW9uIG9mIHtAbGluayBtb2R1bGU6bGluay91dGlsc35NYW51YWxEZWNvcmF0b3IgbWFudWFsIGRlY29yYXRvcnN9XG5cdFx0ICogY29ycmVzcG9uZGluZyB0byB0aGUge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt+TGlua0NvbmZpZyNkZWNvcmF0b3JzIGRlY29yYXRvciBjb25maWd1cmF0aW9ufS5cblx0XHQgKlxuXHRcdCAqIFlvdSBjYW4gY29uc2lkZXIgaXQgYSBtb2RlbCB3aXRoIHN0YXRlcyBvZiBtYW51YWwgZGVjb3JhdG9ycyBhZGRlZCB0byB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGxpbmsuXG5cdFx0ICpcblx0XHQgKiBAcmVhZG9ubHlcblx0XHQgKiBAdHlwZSB7bW9kdWxlOnV0aWxzL2NvbGxlY3Rpb25+Q29sbGVjdGlvbn1cblx0XHQgKi9cblx0XHR0aGlzLm1hbnVhbERlY29yYXRvcnMgPSBuZXcgQ29sbGVjdGlvbigpO1xuXG5cblxuXHR9XG5cblx0LyoqXG5cdCAqIFN5bmNocm9uaXplcyB0aGUgc3RhdGUgb2Yge0BsaW5rICNtYW51YWxEZWNvcmF0b3JzfSB3aXRoIHRoZSBjdXJyZW50bHkgcHJlc2VudCBlbGVtZW50cyBpbiB0aGUgbW9kZWwuXG5cdCAqL1xuXHRyZXN0b3JlTWFudWFsRGVjb3JhdG9yU3RhdGVzKCkge1xuXHRcdGZvciAoIGNvbnN0IG1hbnVhbERlY29yYXRvciBvZiB0aGlzLm1hbnVhbERlY29yYXRvcnMgKSB7XG5cdFx0XHRtYW51YWxEZWNvcmF0b3IudmFsdWUgPSB0aGlzLl9nZXREZWNvcmF0b3JTdGF0ZUZyb21Nb2RlbCggbWFudWFsRGVjb3JhdG9yLmlkICk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEBpbmhlcml0RG9jXG5cdCAqL1xuXHRyZWZyZXNoKCkge1xuXHRcdGNvbnN0IG1vZGVsID0gdGhpcy5lZGl0b3IubW9kZWw7XG5cdFx0Y29uc3QgZG9jID0gbW9kZWwuZG9jdW1lbnQ7XG5cblx0XHRjb25zdCBzZWxlY3RlZEVsZW1lbnQgPSBmaXJzdCggZG9jLnNlbGVjdGlvbi5nZXRTZWxlY3RlZEJsb2NrcygpICk7XG5cblx0XHQvLyBBIGNoZWNrIGZvciB0aGUgYExpbmtJbWFnZWAgcGx1Z2luLiBJZiB0aGUgc2VsZWN0aW9uIGNvbnRhaW5zIGFuIGVsZW1lbnQsIGdldCB2YWx1ZXMgZnJvbSB0aGUgZWxlbWVudC5cblx0XHQvLyBDdXJyZW50bHkgdGhlIHNlbGVjdGlvbiByZWFkcyBhdHRyaWJ1dGVzIGZyb20gdGV4dCBub2RlcyBvbmx5LiBTZWUgIzc0MjkgYW5kICM3NDY1LlxuXHRcdGlmICggaXNJbWFnZUFsbG93ZWQoIHNlbGVjdGVkRWxlbWVudCwgbW9kZWwuc2NoZW1hICkgKSB7XG5cdFx0XHR0aGlzLnZhbHVlID0gc2VsZWN0ZWRFbGVtZW50LmdldEF0dHJpYnV0ZSggJ3RlbXBsYXRlVmFyJyApO1xuXHRcdFx0dGhpcy5pc0VuYWJsZWQgPSBtb2RlbC5zY2hlbWEuY2hlY2tBdHRyaWJ1dGUoIHNlbGVjdGVkRWxlbWVudCwgJ3RlbXBsYXRlVmFyJyApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnZhbHVlID0gZG9jLnNlbGVjdGlvbi5nZXRBdHRyaWJ1dGUoICd0ZW1wbGF0ZVZhcicgKTtcblx0XHRcdHRoaXMuaXNFbmFibGVkID0gbW9kZWwuc2NoZW1hLmNoZWNrQXR0cmlidXRlSW5TZWxlY3Rpb24oIGRvYy5zZWxlY3Rpb24sICd0ZW1wbGF0ZVZhcicgKTtcblx0XHR9XG5cblx0XHRmb3IgKCBjb25zdCBtYW51YWxEZWNvcmF0b3Igb2YgdGhpcy5tYW51YWxEZWNvcmF0b3JzICkge1xuXHRcdFx0bWFudWFsRGVjb3JhdG9yLnZhbHVlID0gdGhpcy5fZ2V0RGVjb3JhdG9yU3RhdGVGcm9tTW9kZWwoIG1hbnVhbERlY29yYXRvci5pZCApO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBFeGVjdXRlcyB0aGUgY29tbWFuZC5cblx0ICpcblx0ICogV2hlbiB0aGUgc2VsZWN0aW9uIGlzIG5vbi1jb2xsYXBzZWQsIHRoZSBgbGlua0hyZWZgIGF0dHJpYnV0ZSB3aWxsIGJlIGFwcGxpZWQgdG8gbm9kZXMgaW5zaWRlIHRoZSBzZWxlY3Rpb24sIGJ1dCBvbmx5IHRvXG5cdCAqIHRob3NlIG5vZGVzIHdoZXJlIHRoZSBgbGlua0hyZWZgIGF0dHJpYnV0ZSBpcyBhbGxvd2VkIChkaXNhbGxvd2VkIG5vZGVzIHdpbGwgYmUgb21pdHRlZCkuXG5cdCAqXG5cdCAqIFdoZW4gdGhlIHNlbGVjdGlvbiBpcyBjb2xsYXBzZWQgYW5kIGlzIG5vdCBpbnNpZGUgdGhlIHRleHQgd2l0aCB0aGUgYGxpbmtIcmVmYCBhdHRyaWJ1dGUsIGFcblx0ICogbmV3IHtAbGluayBtb2R1bGU6ZW5naW5lL21vZGVsL3RleHR+VGV4dCB0ZXh0IG5vZGV9IHdpdGggdGhlIGBsaW5rSHJlZmAgYXR0cmlidXRlIHdpbGwgYmUgaW5zZXJ0ZWQgaW4gcGxhY2Ugb2YgdGhlIGNhcmV0LCBidXRcblx0ICogb25seSBpZiBzdWNoIGVsZW1lbnQgaXMgYWxsb3dlZCBpbiB0aGlzIHBsYWNlLiBUaGUgYF9kYXRhYCBvZiB0aGUgaW5zZXJ0ZWQgdGV4dCB3aWxsIGVxdWFsIHRoZSBgaHJlZmAgcGFyYW1ldGVyLlxuXHQgKiBUaGUgc2VsZWN0aW9uIHdpbGwgYmUgdXBkYXRlZCB0byB3cmFwIHRoZSBqdXN0IGluc2VydGVkIHRleHQgbm9kZS5cblx0ICpcblx0ICogV2hlbiB0aGUgc2VsZWN0aW9uIGlzIGNvbGxhcHNlZCBhbmQgaW5zaWRlIHRoZSB0ZXh0IHdpdGggdGhlIGBsaW5rSHJlZmAgYXR0cmlidXRlLCB0aGUgYXR0cmlidXRlIHZhbHVlIHdpbGwgYmUgdXBkYXRlZC5cblx0ICpcblx0ICogIyBEZWNvcmF0b3JzIGFuZCBtb2RlbCBhdHRyaWJ1dGUgbWFuYWdlbWVudFxuXHQgKlxuXHQgKiBUaGVyZSBpcyBhbiBvcHRpb25hbCBhcmd1bWVudCB0byB0aGlzIGNvbW1hbmQgdGhhdCBhcHBsaWVzIG9yIHJlbW92ZXMgbW9kZWxcblx0ICoge0BnbGluayBmcmFtZXdvcmsvZ3VpZGVzL2FyY2hpdGVjdHVyZS9lZGl0aW5nLWVuZ2luZSN0ZXh0LWF0dHJpYnV0ZXMgdGV4dCBhdHRyaWJ1dGVzfSBicm91Z2h0IGJ5XG5cdCAqIHtAbGluayBtb2R1bGU6bGluay91dGlsc35NYW51YWxEZWNvcmF0b3IgbWFudWFsIGxpbmsgZGVjb3JhdG9yc30uXG5cdCAqXG5cdCAqIFRleHQgYXR0cmlidXRlIG5hbWVzIGluIHRoZSBtb2RlbCBjb3JyZXNwb25kIHRvIHRoZSBlbnRyaWVzIGluIHRoZSB7QGxpbmsgbW9kdWxlOmxpbmsvbGlua35MaW5rQ29uZmlnI2RlY29yYXRvcnMgY29uZmlndXJhdGlvbn0uXG5cdCAqIEZvciBldmVyeSBkZWNvcmF0b3IgY29uZmlndXJlZCwgYSBtb2RlbCB0ZXh0IGF0dHJpYnV0ZSBleGlzdHMgd2l0aCB0aGUgXCJsaW5rXCIgcHJlZml4LiBGb3IgZXhhbXBsZSwgYSBgJ2xpbmtNeURlY29yYXRvcidgIGF0dHJpYnV0ZVxuXHQgKiBjb3JyZXNwb25kcyB0byBgJ215RGVjb3JhdG9yJ2AgaW4gdGhlIGNvbmZpZ3VyYXRpb24uXG5cdCAqXG5cdCAqIFRvIGxlYXJuIG1vcmUgYWJvdXQgbGluayBkZWNvcmF0b3JzLCBjaGVjayBvdXQgdGhlIHtAbGluayBtb2R1bGU6bGluay9saW5rfkxpbmtDb25maWcjZGVjb3JhdG9ycyBgY29uZmlnLmxpbmsuZGVjb3JhdG9yc2B9XG5cdCAqIGRvY3VtZW50YXRpb24uXG5cdCAqXG5cdCAqIEhlcmUgaXMgaG93IHRvIG1hbmFnZSBkZWNvcmF0b3IgYXR0cmlidXRlcyB3aXRoIHRoZSBsaW5rIGNvbW1hbmQ6XG5cdCAqXG5cdCAqXHRcdGNvbnN0IGxpbmtDb21tYW5kID0gZWRpdG9yLmNvbW1hbmRzLmdldCggJ2xpbmsnICk7XG5cdCAqXG5cdCAqXHRcdC8vIEFkZGluZyBhIG5ldyBkZWNvcmF0b3IgYXR0cmlidXRlLlxuXHQgKlx0XHRsaW5rQ29tbWFuZC5leGVjdXRlKCAnaHR0cDovL2V4YW1wbGUuY29tJywge1xuXHQgKlx0XHRcdGxpbmtJc0V4dGVybmFsOiB0cnVlXG5cdCAqXHRcdH0gKTtcblx0ICpcblx0ICpcdFx0Ly8gUmVtb3ZpbmcgYSBkZWNvcmF0b3IgYXR0cmlidXRlIGZyb20gdGhlIHNlbGVjdGlvbi5cblx0ICpcdFx0bGlua0NvbW1hbmQuZXhlY3V0ZSggJ2h0dHA6Ly9leGFtcGxlLmNvbScsIHtcblx0ICpcdFx0XHRsaW5rSXNFeHRlcm5hbDogZmFsc2Vcblx0ICpcdFx0fSApO1xuXHQgKlxuXHQgKlx0XHQvLyBBZGRpbmcgbXVsdGlwbGUgZGVjb3JhdG9yIGF0dHJpYnV0ZXMgYXQgdGhlIHNhbWUgdGltZS5cblx0ICpcdFx0bGlua0NvbW1hbmQuZXhlY3V0ZSggJ2h0dHA6Ly9leGFtcGxlLmNvbScsIHtcblx0ICpcdFx0XHRsaW5rSXNFeHRlcm5hbDogdHJ1ZSxcblx0ICpcdFx0XHRsaW5rSXNEb3dubG9hZGFibGU6IHRydWUsXG5cdCAqXHRcdH0gKTtcblx0ICpcblx0ICpcdFx0Ly8gUmVtb3ZpbmcgYW5kIGFkZGluZyBkZWNvcmF0b3IgYXR0cmlidXRlcyBhdCB0aGUgc2FtZSB0aW1lLlxuXHQgKlx0XHRsaW5rQ29tbWFuZC5leGVjdXRlKCAnaHR0cDovL2V4YW1wbGUuY29tJywge1xuXHQgKlx0XHRcdGxpbmtJc0V4dGVybmFsOiBmYWxzZSxcblx0ICpcdFx0XHRsaW5rRm9vOiB0cnVlLFxuXHQgKlx0XHRcdGxpbmtJc0Rvd25sb2FkYWJsZTogZmFsc2UsXG5cdCAqXHRcdH0gKTtcblx0ICpcblx0ICogKipOb3RlKio6IElmIHRoZSBkZWNvcmF0b3IgYXR0cmlidXRlIG5hbWUgaXMgbm90IHNwZWNpZmllZCwgaXRzIHN0YXRlIHJlbWFpbnMgdW50b3VjaGVkLlxuXHQgKlxuXHQgKiAqKk5vdGUqKjoge0BsaW5rIG1vZHVsZTpsaW5rL3VubGlua2NvbW1hbmR+VW5saW5rQ29tbWFuZCNleGVjdXRlIGBDYW5jZWx0ZW1wbGF0ZWNvbW1hbmQjZXhlY3V0ZSgpYH0gcmVtb3ZlcyBhbGxcblx0ICogZGVjb3JhdG9yIGF0dHJpYnV0ZXMuXG5cdCAqXG5cdCAqIEBmaXJlcyBleGVjdXRlXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSB0ZW1wbGF0ZVZhciBUZW1wbGF0ZSBkZXN0aW5hdGlvbi5cblx0ICogQHBhcmFtIHtPYmplY3R9IFttYW51YWxEZWNvcmF0b3JJZHM9e31dIFRoZSBpbmZvcm1hdGlvbiBhYm91dCBtYW51YWwgZGVjb3JhdG9yIGF0dHJpYnV0ZXMgdG8gYmUgYXBwbGllZCBvciByZW1vdmVkIHVwb24gZXhlY3V0aW9uLlxuXHQgKi9cblx0ZXhlY3V0ZSggdGVtcGxhdGVWYXIsIG1hbnVhbERlY29yYXRvcklkcyA9IHt9ICkge1xuXG5cdFx0Y29uc3QgbW9kZWwgPSB0aGlzLmVkaXRvci5tb2RlbDtcblx0XHRjb25zdCBzZWxlY3Rpb24gPSBtb2RlbC5kb2N1bWVudC5zZWxlY3Rpb247XG5cdFx0Ly8gU3RvcmVzIGluZm9ybWF0aW9uIGFib3V0IG1hbnVhbCBkZWNvcmF0b3JzIHRvIHR1cm4gdGhlbSBvbi9vZmYgd2hlbiBjb21tYW5kIGlzIGFwcGxpZWQuXG5cdFx0Y29uc3QgdHJ1dGh5TWFudWFsRGVjb3JhdG9ycyA9IFtdO1xuXHRcdGNvbnN0IGZhbHN5TWFudWFsRGVjb3JhdG9ycyA9IFtdO1xuXG5cdFx0Zm9yICggY29uc3QgbmFtZSBpbiBtYW51YWxEZWNvcmF0b3JJZHMgKSB7XG5cdFx0XHRpZiAoIG1hbnVhbERlY29yYXRvcklkc1sgbmFtZSBdICkge1xuXHRcdFx0XHR0cnV0aHlNYW51YWxEZWNvcmF0b3JzLnB1c2goIG5hbWUgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZhbHN5TWFudWFsRGVjb3JhdG9ycy5wdXNoKCBuYW1lICk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdG1vZGVsLmNoYW5nZSggd3JpdGVyID0+IHtcblx0XHRcdC8vIElmIHNlbGVjdGlvbiBpcyBjb2xsYXBzZWQgdGhlbiB1cGRhdGUgc2VsZWN0ZWQgbGluayBvciBpbnNlcnQgbmV3IG9uZSBhdCB0aGUgcGxhY2Ugb2YgY2FyZXQuXG5cdFx0XHRpZiAoIHNlbGVjdGlvbi5pc0NvbGxhcHNlZCApIHtcblx0XHRcdFx0Y29uc3QgcG9zaXRpb24gPSBzZWxlY3Rpb24uZ2V0Rmlyc3RQb3NpdGlvbigpO1xuXG5cdFx0XHRcdC8vIFdoZW4gc2VsZWN0aW9uIGlzIGluc2lkZSB0ZXh0IHdpdGggYGxpbmtIcmVmYCBhdHRyaWJ1dGUuXG5cdFx0XHRcdGlmICggc2VsZWN0aW9uLmhhc0F0dHJpYnV0ZSggJ3RlbXBsYXRlVmFyJyApICkge1xuXHRcdFx0XHRcdC8vIFRoZW4gdXBkYXRlIGBsaW5rSHJlZmAgdmFsdWUuXG5cdFx0XHRcdFx0Y29uc3QgdmFyUmFuZ2UgPSBmaW5kQXR0cmlidXRlUmFuZ2UoIHBvc2l0aW9uLCAndGVtcGxhdGVWYXInLCBzZWxlY3Rpb24uZ2V0QXR0cmlidXRlKCAndGVtcGxhdGVWYXInICksIG1vZGVsICk7XG5cblx0XHRcdFx0XHR3cml0ZXIuc2V0QXR0cmlidXRlKCAndGVtcGxhdGVWYXInLCB0ZW1wbGF0ZVZhci5pZCwgdmFyUmFuZ2UgKTtcblx0XHRcdFx0XHR3cml0ZXIuc2V0QXR0cmlidXRlKCAndGVtcGxhdGVWYXItdHlwZScsIHRlbXBsYXRlVmFyLnR5cGUsIHZhclJhbmdlICk7XG5cblxuXG5cdFx0XHRcdFx0dHJ1dGh5TWFudWFsRGVjb3JhdG9ycy5mb3JFYWNoKCBpdGVtID0+IHtcblx0XHRcdFx0XHRcdHdyaXRlci5zZXRBdHRyaWJ1dGUoIGl0ZW0sIHRydWUsIHZhclJhbmdlICk7XG5cdFx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdFx0ZmFsc3lNYW51YWxEZWNvcmF0b3JzLmZvckVhY2goIGl0ZW0gPT4ge1xuXHRcdFx0XHRcdFx0d3JpdGVyLnJlbW92ZUF0dHJpYnV0ZSggaXRlbSwgdmFyUmFuZ2UgKTtcblx0XHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0XHQvLyBQdXQgdGhlIHNlbGVjdGlvbiBhdCB0aGUgZW5kIG9mIHRoZSB1cGRhdGVkIGxpbmsuXG5cdFx0XHRcdFx0d3JpdGVyLnNldFNlbGVjdGlvbiggd3JpdGVyLmNyZWF0ZVBvc2l0aW9uQWZ0ZXIoIHZhclJhbmdlLmVuZC5ub2RlQmVmb3JlICkgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBJZiBub3QgdGhlbiBpbnNlcnQgdGV4dCBub2RlIHdpdGggYGxpbmtIcmVmYCBhdHRyaWJ1dGUgaW4gcGxhY2Ugb2YgY2FyZXQuXG5cdFx0XHRcdC8vIEhvd2V2ZXIsIHNpbmNlIHNlbGVjdGlvbiBpcyBjb2xsYXBzZWQsIGF0dHJpYnV0ZSB2YWx1ZSB3aWxsIGJlIHVzZWQgYXMgZGF0YSBmb3IgdGV4dCBub2RlLlxuXHRcdFx0XHQvLyBTbywgaWYgYHRlbXBsYXRlVmFyLmxhYmVsYCBpcyBlbXB0eSwgZG8gbm90IGNyZWF0ZSB0ZXh0IG5vZGUuXG5cdFx0XHRcdGVsc2UgaWYgKCB0ZW1wbGF0ZVZhci5pZCAhPT0gJycgKSB7XG5cdFx0XHRcdFx0Y29uc3QgYXR0cmlidXRlcyA9IHRvTWFwKCBzZWxlY3Rpb24uZ2V0QXR0cmlidXRlcygpICk7XG5cblx0XHRcdFx0XHRhdHRyaWJ1dGVzLnNldCggJ3RlbXBsYXRlVmFyJywgdGVtcGxhdGVWYXIuaWQgKTtcblxuXHRcdFx0XHRcdGF0dHJpYnV0ZXMuc2V0KCAndGVtcGxhdGVWYXItdHlwZScsIHRlbXBsYXRlVmFyLnR5cGUgKTtcblx0XHRcdFx0XHR0cnV0aHlNYW51YWxEZWNvcmF0b3JzLmZvckVhY2goIGl0ZW0gPT4ge1xuXHRcdFx0XHRcdFx0YXR0cmlidXRlcy5zZXQoIGl0ZW0sIHRydWUgKTtcblx0XHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0XHRjb25zdCB7IGVuZDogcG9zaXRpb25BZnRlciB9ID0gbW9kZWwuaW5zZXJ0Q29udGVudCggd3JpdGVyLmNyZWF0ZVRleHQoIHRlbXBsYXRlVmFyLmlkLCBhdHRyaWJ1dGVzICksIHBvc2l0aW9uICk7XG5cblx0XHRcdFx0XHQvLyBQdXQgdGhlIHNlbGVjdGlvbiBhdCB0aGUgZW5kIG9mIHRoZSBpbnNlcnRlZCBsaW5rLlxuXHRcdFx0XHRcdC8vIFVzaW5nIGVuZCBvZiByYW5nZSByZXR1cm5lZCBmcm9tIGluc2VydENvbnRlbnQgaW4gY2FzZSBub2RlcyB3aXRoIHRoZSBzYW1lIGF0dHJpYnV0ZXMgZ290IG1lcmdlZC5cblx0XHRcdFx0XHR3cml0ZXIuc2V0U2VsZWN0aW9uKCBwb3NpdGlvbkFmdGVyICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBSZW1vdmUgdGhlIGBsaW5rSHJlZmAgYXR0cmlidXRlIGFuZCBhbGwgbGluayBkZWNvcmF0b3JzIGZyb20gdGhlIHNlbGVjdGlvbi5cblx0XHRcdFx0Ly8gSXQgc3RvcHMgYWRkaW5nIGEgbmV3IGNvbnRlbnQgaW50byB0aGUgbGluayBlbGVtZW50LlxuXHRcdFx0XHRbICd0ZW1wbGF0ZVZhcicsJ3RlbXBsYXRlVmFyLXR5cGUnLCAuLi50cnV0aHlNYW51YWxEZWNvcmF0b3JzLCAuLi5mYWxzeU1hbnVhbERlY29yYXRvcnMgXS5mb3JFYWNoKCBpdGVtID0+IHtcblx0XHRcdFx0XHR3cml0ZXIucmVtb3ZlU2VsZWN0aW9uQXR0cmlidXRlKCBpdGVtICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIElmIHNlbGVjdGlvbiBoYXMgbm9uLWNvbGxhcHNlZCByYW5nZXMsIHdlIGNoYW5nZSBhdHRyaWJ1dGUgb24gbm9kZXMgaW5zaWRlIHRob3NlIHJhbmdlc1xuXHRcdFx0XHQvLyBvbWl0dGluZyBub2RlcyB3aGVyZSB0aGUgYGxpbmtIcmVmYCBhdHRyaWJ1dGUgaXMgZGlzYWxsb3dlZC5cblx0XHRcdFx0Y29uc3QgcmFuZ2VzID0gbW9kZWwuc2NoZW1hLmdldFZhbGlkUmFuZ2VzKCBzZWxlY3Rpb24uZ2V0UmFuZ2VzKCksICd0ZW1wbGF0ZVZhcicgKTtcblxuXHRcdFx0XHQvLyBCdXQgZm9yIHRoZSBmaXJzdCwgY2hlY2sgd2hldGhlciB0aGUgYGxpbmtIcmVmYCBhdHRyaWJ1dGUgaXMgYWxsb3dlZCBvbiBzZWxlY3RlZCBibG9ja3MgKGUuZy4gdGhlIFwiaW1hZ2VcIiBlbGVtZW50KS5cblx0XHRcdFx0Y29uc3QgYWxsb3dlZFJhbmdlcyA9IFtdO1xuXG5cdFx0XHRcdGZvciAoIGNvbnN0IGVsZW1lbnQgb2Ygc2VsZWN0aW9uLmdldFNlbGVjdGVkQmxvY2tzKCkgKSB7XG5cdFx0XHRcdFx0aWYgKCBtb2RlbC5zY2hlbWEuY2hlY2tBdHRyaWJ1dGUoIGVsZW1lbnQsICd0ZW1wbGF0ZVZhcicgKSApIHtcblx0XHRcdFx0XHRcdGFsbG93ZWRSYW5nZXMucHVzaCggd3JpdGVyLmNyZWF0ZVJhbmdlT24oIGVsZW1lbnQgKSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFJhbmdlcyB0aGF0IGFjY2VwdCB0aGUgYGxpbmtIcmVmYCBhdHRyaWJ1dGUuIFNpbmNlIHdlIHdpbGwgaXRlcmF0ZSBvdmVyIGBhbGxvd2VkUmFuZ2VzYCwgbGV0J3MgY2xvbmUgaXQuXG5cdFx0XHRcdGNvbnN0IHJhbmdlc1RvVXBkYXRlID0gYWxsb3dlZFJhbmdlcy5zbGljZSgpO1xuXG5cdFx0XHRcdC8vIEZvciBhbGwgc2VsZWN0aW9uIHJhbmdlcyB3ZSB3YW50IHRvIGNoZWNrIHdoZXRoZXIgZ2l2ZW4gcmFuZ2UgaXMgaW5zaWRlIGFuIGVsZW1lbnQgdGhhdCBhY2NlcHRzIHRoZSBgbGlua0hyZWZgIGF0dHJpYnV0ZS5cblx0XHRcdFx0Ly8gSWYgc28sIHdlIGRvbid0IHdhbnQgdG8gcHJvcGFnYXRlIGFwcGx5aW5nIHRoZSBhdHRyaWJ1dGUgdG8gaXRzIGNoaWxkcmVuLlxuXHRcdFx0XHRmb3IgKCBjb25zdCByYW5nZSBvZiByYW5nZXMgKSB7XG5cdFx0XHRcdFx0aWYgKCB0aGlzLl9pc1JhbmdlVG9VcGRhdGUoIHJhbmdlLCBhbGxvd2VkUmFuZ2VzICkgKSB7XG5cdFx0XHRcdFx0XHRyYW5nZXNUb1VwZGF0ZS5wdXNoKCByYW5nZSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZvciAoIGNvbnN0IHJhbmdlIG9mIHJhbmdlc1RvVXBkYXRlICkge1xuXHRcdFx0XHRcdHdyaXRlci5zZXRBdHRyaWJ1dGUoICd0ZW1wbGF0ZVZhcicsIHRlbXBsYXRlVmFyLmlkLCByYW5nZSApO1xuXHRcdFx0XHRcdHdyaXRlci5zZXRBdHRyaWJ1dGUoICd0ZW1wbGF0ZVZhci10eXBlJywgdGVtcGxhdGVWYXIudHlwZSwgcmFuZ2UgKTtcblxuXG5cdFx0XHRcdFx0dHJ1dGh5TWFudWFsRGVjb3JhdG9ycy5mb3JFYWNoKCBpdGVtID0+IHtcblx0XHRcdFx0XHRcdHdyaXRlci5zZXRBdHRyaWJ1dGUoIGl0ZW0sIHRydWUsIHJhbmdlICk7XG5cdFx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdFx0ZmFsc3lNYW51YWxEZWNvcmF0b3JzLmZvckVhY2goIGl0ZW0gPT4ge1xuXHRcdFx0XHRcdFx0d3JpdGVyLnJlbW92ZUF0dHJpYnV0ZSggaXRlbSwgcmFuZ2UgKTtcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogUHJvdmlkZXMgaW5mb3JtYXRpb24gd2hldGhlciBhIGRlY29yYXRvciB3aXRoIGEgZ2l2ZW4gbmFtZSBpcyBwcmVzZW50IGluIHRoZSBjdXJyZW50bHkgcHJvY2Vzc2VkIHNlbGVjdGlvbi5cblx0ICpcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IGRlY29yYXRvck5hbWUgVGhlIG5hbWUgb2YgdGhlIG1hbnVhbCBkZWNvcmF0b3IgdXNlZCBpbiB0aGUgbW9kZWxcblx0ICogQHJldHVybnMge0Jvb2xlYW59IFRoZSBpbmZvcm1hdGlvbiB3aGV0aGVyIGEgZ2l2ZW4gZGVjb3JhdG9yIGlzIGN1cnJlbnRseSBwcmVzZW50IGluIHRoZSBzZWxlY3Rpb24uXG5cdCAqL1xuXHRfZ2V0RGVjb3JhdG9yU3RhdGVGcm9tTW9kZWwoIGRlY29yYXRvck5hbWUgKSB7XG5cdFx0Y29uc3QgbW9kZWwgPSB0aGlzLmVkaXRvci5tb2RlbDtcblx0XHRjb25zdCBkb2MgPSBtb2RlbC5kb2N1bWVudDtcblxuXHRcdGNvbnN0IHNlbGVjdGVkRWxlbWVudCA9IGZpcnN0KCBkb2Muc2VsZWN0aW9uLmdldFNlbGVjdGVkQmxvY2tzKCkgKTtcblxuXHRcdC8vIEEgY2hlY2sgZm9yIHRoZSBgTGlua0ltYWdlYCBwbHVnaW4uIElmIHRoZSBzZWxlY3Rpb24gY29udGFpbnMgYW4gZWxlbWVudCwgZ2V0IHZhbHVlcyBmcm9tIHRoZSBlbGVtZW50LlxuXHRcdC8vIEN1cnJlbnRseSB0aGUgc2VsZWN0aW9uIHJlYWRzIGF0dHJpYnV0ZXMgZnJvbSB0ZXh0IG5vZGVzIG9ubHkuIFNlZSAjNzQyOSBhbmQgIzc0NjUuXG5cdFx0aWYgKCBpc0ltYWdlQWxsb3dlZCggc2VsZWN0ZWRFbGVtZW50LCBtb2RlbC5zY2hlbWEgKSApIHtcblx0XHRcdHJldHVybiBzZWxlY3RlZEVsZW1lbnQuZ2V0QXR0cmlidXRlKCBkZWNvcmF0b3JOYW1lICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRvYy5zZWxlY3Rpb24uZ2V0QXR0cmlidXRlKCBkZWNvcmF0b3JOYW1lICk7XG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2tzIHdoZXRoZXIgc3BlY2lmaWVkIGByYW5nZWAgaXMgaW5zaWRlIGFuIGVsZW1lbnQgdGhhdCBhY2NlcHRzIHRoZSBgbGlua0hyZWZgIGF0dHJpYnV0ZS5cblx0ICpcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHttb2R1bGU6ZW5naW5lL3ZpZXcvcmFuZ2V+UmFuZ2V9IHJhbmdlIEEgcmFuZ2UgdG8gY2hlY2suXG5cdCAqIEBwYXJhbSB7QXJyYXkuPG1vZHVsZTplbmdpbmUvdmlldy9yYW5nZX5SYW5nZT59IGFsbG93ZWRSYW5nZXMgQW4gYXJyYXkgb2YgcmFuZ2VzIGNyZWF0ZWQgb24gZWxlbWVudHMgd2hlcmUgdGhlIGF0dHJpYnV0ZSBpcyBhY2NlcHRlZC5cblx0ICogQHJldHVybnMge0Jvb2xlYW59XG5cdCAqL1xuXHRfaXNSYW5nZVRvVXBkYXRlKCByYW5nZSwgYWxsb3dlZFJhbmdlcyApIHtcblx0XHRmb3IgKCBjb25zdCBhbGxvd2VkUmFuZ2Ugb2YgYWxsb3dlZFJhbmdlcyApIHtcblx0XHRcdC8vIEEgcmFuZ2UgaXMgaW5zaWRlIGFuIGVsZW1lbnQgdGhhdCB3aWxsIGhhdmUgdGhlIGBsaW5rSHJlZmAgYXR0cmlidXRlLiBEbyBub3QgbW9kaWZ5IGl0cyBub2Rlcy5cblx0XHRcdGlmICggYWxsb3dlZFJhbmdlLmNvbnRhaW5zUmFuZ2UoIHJhbmdlICkgKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZSBDb3B5cmlnaHQgKGMpIDIwMDMtMjAyMSwgQ0tTb3VyY2UgLSBGcmVkZXJpY28gS25hYmJlbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIEZvciBsaWNlbnNpbmcsIHNlZSBMSUNFTlNFLm1kIG9yIGh0dHBzOi8vY2tlZGl0b3IuY29tL2xlZ2FsL2NrZWRpdG9yLW9zcy1saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGxpbmsvbGlua2VkaXRpbmdcbiAqL1xuXG5pbXBvcnQgIFBsdWdpbiAgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1jb3JlL3NyYy9wbHVnaW4nO1xuaW1wb3J0ICBNb3VzZU9ic2VydmVyICBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWVuZ2luZS9zcmMvdmlldy9vYnNlcnZlci9tb3VzZW9ic2VydmVyJztcbmltcG9ydCB7IElucHV0LCBUd29TdGVwQ2FyZXRNb3ZlbWVudCwgaW5saW5lSGlnaGxpZ2h0LCBmaW5kQXR0cmlidXRlUmFuZ2UgfSBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LXR5cGluZy9zcmMnO1xuaW1wb3J0ICBDbGlwYm9hcmRQaXBlbGluZSAgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1jbGlwYm9hcmQvc3JjL2NsaXBib2FyZHBpcGVsaW5lJztcbmltcG9ydCB7IGtleUNvZGVzIH0gZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS11dGlscy9zcmMva2V5Ym9hcmQnO1xuXG5pbXBvcnQgVGVtcGxhdGVDb21tYW5kIGZyb20gJy4vdGVtcGxhdGUtY29tbWFuZC5qcyc7XG5pbXBvcnQgQ2FuY2VsVGVtcGxhdGVDb21tYW5kIGZyb20gJy4vY2FuY2VsdGVtcGxhdGVjb21tYW5kJztcbmltcG9ydCBNYW51YWxEZWNvcmF0b3IgZnJvbSAnLi91dGlscy9tYW51YWxkZWNvcmF0b3InO1xuaW1wb3J0IHtcblx0Y3JlYXRlVGVtcGxhdGVFbGVtZW50LFxuXHRnZXRMb2NhbGl6ZWREZWNvcmF0b3JzLFxuXHRub3JtYWxpemVEZWNvcmF0b3JzXG59IGZyb20gJy4vdXRpbHMnO1xuXG5pbXBvcnQgJy4uL3RoZW1lL3RlbXBsYXRlLmNzcyc7XG5cbmNvbnN0IEhJR0hMSUdIVF9TRUxFQ1RFRF9DTEFTUyA9ICdjay10ZW1wbGF0ZV9zZWxlY3RlZCc7XG5cbmNvbnN0IERFQ09SQVRPUl9NQU5VQUwgPSAnbWFudWFsJztcblxuLyoqXG4gKiBUaGUgbGluayBlbmdpbmUgZmVhdHVyZS5cbiAqXG4gKiBJdCBpbnRyb2R1Y2VzIHRoZSBgdGVtcGxhdGVWYXI9XCJ1cmxcImAgYXR0cmlidXRlIGluIHRoZSBtb2RlbCB3aGljaCByZW5kZXJzIHRvIHRoZSB2aWV3IGFzIGEgYDxhIGhyZWY9XCJ1cmxcIj5gIGVsZW1lbnRcbiAqIGFzIHdlbGwgYXMgYCd0ZW1wbGF0ZSdgIGFuZCBgJ3VubGluaydgIGNvbW1hbmRzLlxuICpcbiAqIEBleHRlbmRzIG1vZHVsZTpjb3JlL3BsdWdpbn5QbHVnaW5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVtcGxhdGVFZGl0aW5nIGV4dGVuZHMgUGx1Z2luIHtcblx0LyoqXG5cdCAqIEBpbmhlcml0RG9jXG5cdCAqL1xuXHRzdGF0aWMgZ2V0IHBsdWdpbk5hbWUoKSB7XG5cdFx0cmV0dXJuICdUZXh0VGVtcGxhdGVFZGl0aW5nJztcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5oZXJpdERvY1xuXHQgKi9cblx0c3RhdGljIGdldCByZXF1aXJlcygpIHtcblx0XHQvLyBDbGlwYm9hcmQgaXMgcmVxdWlyZWQgZm9yIGhhbmRsaW5nIGN1dCBhbmQgcGFzdGUgZXZlbnRzIHdoaWxlIHR5cGluZyBvdmVyIHRoZSBsaW5rLlxuXHRcdHJldHVybiBbIFR3b1N0ZXBDYXJldE1vdmVtZW50LCBJbnB1dCwgQ2xpcGJvYXJkUGlwZWxpbmUgXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5oZXJpdERvY1xuXHQgKi9cblx0Y29uc3RydWN0b3IoIGVkaXRvciApIHtcblx0XHRzdXBlciggZWRpdG9yICk7XG5cblx0XHRlZGl0b3IuY29uZmlnLmRlZmluZSggJ3RlbXBsYXRlJywge1xuXHRcdFx0YWRkVGFyZ2V0VG9FeHRlcm5hbExpbmtzOiBmYWxzZVxuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5oZXJpdERvY1xuXHQgKi9cblx0aW5pdCgpIHtcblx0XHRjb25zdCBlZGl0b3IgPSB0aGlzLmVkaXRvcjtcblxuXHRcdC8vIEFsbG93IGxpbmsgYXR0cmlidXRlIG9uIGFsbCBpbmxpbmUgbm9kZXMuXG5cdFx0ZWRpdG9yLm1vZGVsLnNjaGVtYS5leHRlbmQoICckdGV4dCcsIHsgYWxsb3dBdHRyaWJ1dGVzOiAndGVtcGxhdGVWYXInIH0gKTtcblxuXHRcdGVkaXRvci5tb2RlbC5zY2hlbWEuZXh0ZW5kKCAnJHRleHQnLCB7IGFsbG93QXR0cmlidXRlczogJ3RlbXBsYXRlVmFyLXR5cGUnIH0gKTtcblx0XHRlZGl0b3IuY29udmVyc2lvbi5mb3IoICdkYXRhRG93bmNhc3QnIClcblx0XHRcdC5hdHRyaWJ1dGVUb0VsZW1lbnQoIHsgbW9kZWw6ICd0ZW1wbGF0ZVZhcicsIHZpZXc6IGNyZWF0ZVRlbXBsYXRlRWxlbWVudCB9ICk7XG5cblx0XHRlZGl0b3IuY29udmVyc2lvbi5mb3IoICdlZGl0aW5nRG93bmNhc3QnIClcblx0XHRcdC5hdHRyaWJ1dGVUb0VsZW1lbnQoIHsgbW9kZWw6ICd0ZW1wbGF0ZVZhcicsIHZpZXc6ICggaWQsIGNvbnZlcnNpb25BcGkgKSA9PiB7XG5cblx0XHRcdFx0cmV0dXJuIGNyZWF0ZVRlbXBsYXRlRWxlbWVudCggIGlkICwgY29udmVyc2lvbkFwaSApO1xuXHRcdFx0fSB9ICk7XG5cblxuXHRcdGVkaXRvci5jb252ZXJzaW9uLmZvciggJ2Rvd25jYXN0JyApLmF0dHJpYnV0ZVRvRWxlbWVudCgge1xuXG5cdFx0XHRtb2RlbDogJ3RlbXBsYXRlVmFyLXR5cGUnLFxuXHRcdFx0dmlldzogKCB0eXBlLCB7IHdyaXRlciB9ICkgPT4ge1xuXG5cdFx0XHRcdFx0Y29uc3QgZWxlbWVudCA9IHdyaXRlci5jcmVhdGVBdHRyaWJ1dGVFbGVtZW50KCAnc3BhbicsIHsnZGF0YS10ZW1wbGF0ZS10eXBlJzp0eXBlfSwgeyBwcmlvcml0eTogNSB9ICk7XG5cdFx0XHRcdFx0d3JpdGVyLnNldEN1c3RvbVByb3BlcnR5KCAndGVtcGxhdGUnLCB0cnVlLCBlbGVtZW50ICk7XG5cdFx0XHRcdFx0cmV0dXJuIGVsZW1lbnQ7XG5cblx0XHRcdH0gfSApO1xuXG5cdFx0ZWRpdG9yLmNvbnZlcnNpb24uZm9yKCAndXBjYXN0JyApLmVsZW1lbnRUb0F0dHJpYnV0ZSgge1xuXHRcdFx0dmlldzoge1xuXHRcdFx0XHRuYW1lOiAnc3BhbicsXG5cdFx0XHRcdGF0dHJpYnV0ZXM6IFsnZGF0YS10ZW1wbGF0ZS10eXBlJ11cblxuXG5cdFx0XHR9LFxuXHRcdFx0bW9kZWw6IHtcblx0XHRcdFx0a2V5OiAndGVtcGxhdGVWYXItdHlwZScsXG5cdFx0XHRcdHZhbHVlOiB2aWV3RWxlbWVudCA9PiB2aWV3RWxlbWVudC5nZXRBdHRyaWJ1dGUoICdkYXRhLXRlbXBsYXRlLXR5cGUnIClcblx0XHRcdH1cblx0XHR9ICk7XG5cdFx0ZWRpdG9yLmNvbnZlcnNpb24uZm9yKCAndXBjYXN0JyApXG5cdFx0XHQuZWxlbWVudFRvQXR0cmlidXRlKCB7XG5cdFx0XHRcdHZpZXc6IHtcblx0XHRcdFx0XHRuYW1lOiAnc3BhbicsXG5cdFx0XHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRcdFx0J2RhdGEtdGVtcGxhdGUtdHlwZSc6IHRydWVcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG1vZGVsOiB7XG5cdFx0XHRcdFx0a2V5OiAndGVtcGxhdGVWYXItdHlwZScsXG5cdFx0XHRcdFx0dmFsdWU6IHZpZXdFbGVtZW50ID0+IHZpZXdFbGVtZW50LmdldEF0dHJpYnV0ZSggJ2RhdGEtdGVtcGxhdGUtdHlwZScgKVxuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0ZWRpdG9yLmNvbnZlcnNpb24uZm9yKCAndXBjYXN0JyApLmVsZW1lbnRUb0F0dHJpYnV0ZSgge1xuXHRcdFx0dmlldzoge1xuXHRcdFx0XHRuYW1lOiAnc3BhbicsXG5cdFx0XHRcdGF0dHJpYnV0ZXM6IFsnZGF0YS10ZW1wbGF0ZS12YXInXVxuXG5cblx0XHRcdH0sXG5cdFx0XHRtb2RlbDoge1xuXHRcdFx0XHRrZXk6ICd0ZW1wbGF0ZVZhcicsXG5cdFx0XHRcdHZhbHVlOiB2aWV3RWxlbWVudCA9PiB2aWV3RWxlbWVudC5nZXRBdHRyaWJ1dGUoICdkYXRhLXRlbXBsYXRlLXZhcicgKVxuXHRcdFx0fVxuXHRcdH0gKTtcblx0XHRlZGl0b3IuY29udmVyc2lvbi5mb3IoICd1cGNhc3QnIClcblx0XHRcdC5lbGVtZW50VG9BdHRyaWJ1dGUoIHtcblx0XHRcdFx0dmlldzoge1xuXHRcdFx0XHRcdG5hbWU6ICdzcGFuJyxcblx0XHRcdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdFx0XHQnZGF0YS10ZW1wbGF0ZS12YXInOiB0cnVlXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRtb2RlbDoge1xuXHRcdFx0XHRcdGtleTogJ3RlbXBsYXRlVmFyJyxcblx0XHRcdFx0XHR2YWx1ZTogdmlld0VsZW1lbnQgPT4gdmlld0VsZW1lbnQuZ2V0QXR0cmlidXRlKCAnZGF0YS10ZW1wbGF0ZS12YXInIClcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXG5cdFx0Ly8gQ3JlYXRlIGxpbmtpbmcgY29tbWFuZHMuXG5cdFx0ZWRpdG9yLmNvbW1hbmRzLmFkZCggJ3RlbXBsYXRlJywgbmV3IFRlbXBsYXRlQ29tbWFuZCggZWRpdG9yICkgKTtcblx0XHRlZGl0b3IuY29tbWFuZHMuYWRkKCAnY2FuY2VsdGVtcGxhdGUnLCBuZXcgQ2FuY2VsVGVtcGxhdGVDb21tYW5kKCBlZGl0b3IgKSApO1xuXG5cdFx0IGNvbnN0IGxpbmtEZWNvcmF0b3JzID0gZ2V0TG9jYWxpemVkRGVjb3JhdG9ycyggZWRpdG9yLnQsIG5vcm1hbGl6ZURlY29yYXRvcnMoIGVkaXRvci5jb25maWcuZ2V0KCAndGVtcGxhdGUuZGVjb3JhdG9ycycgKSApICk7XG5cdFx0Ly9cblx0XHQvL1xuXHRcdCB0aGlzLl9lbmFibGVNYW51YWxEZWNvcmF0b3JzKCBsaW5rRGVjb3JhdG9ycy5maWx0ZXIoIGl0ZW0gPT4gaXRlbS5tb2RlID09PSBERUNPUkFUT1JfTUFOVUFMICkgKTtcblxuXHRcdC8vIEVuYWJsZSB0d28tc3RlcCBjYXJldCBtb3ZlbWVudCBmb3IgYHRlbXBsYXRlVmFyYCBhdHRyaWJ1dGUuXG5cdFx0Y29uc3QgdHdvU3RlcENhcmV0TW92ZW1lbnRQbHVnaW4gPSBlZGl0b3IucGx1Z2lucy5nZXQoIFR3b1N0ZXBDYXJldE1vdmVtZW50ICk7XG5cdFx0dHdvU3RlcENhcmV0TW92ZW1lbnRQbHVnaW4ucmVnaXN0ZXJBdHRyaWJ1dGUoICd0ZW1wbGF0ZVZhcicgKTtcblxuXHRcdC8vIFNldHVwIGhpZ2hsaWdodCBvdmVyIHNlbGVjdGVkIGxpbmsuXG5cdFx0aW5saW5lSGlnaGxpZ2h0KCBlZGl0b3IsICd0ZW1wbGF0ZVZhcicsICdzcGFuJywgSElHSExJR0hUX1NFTEVDVEVEX0NMQVNTICk7XG5cblx0XHQvLyBDaGFuZ2UgdGhlIGF0dHJpYnV0ZXMgb2YgdGhlIHNlbGVjdGlvbiBpbiBjZXJ0YWluIHNpdHVhdGlvbnMgYWZ0ZXIgdGhlIGxpbmsgd2FzIGluc2VydGVkIGludG8gdGhlIGRvY3VtZW50LlxuXHRcdHRoaXMuX2VuYWJsZUluc2VydENvbnRlbnRTZWxlY3Rpb25BdHRyaWJ1dGVzRml4ZXIoKTtcblxuXHRcdC8vIEhhbmRsZSBhIGNsaWNrIGF0IHRoZSBiZWdpbm5pbmcvZW5kIG9mIGEgbGluayBlbGVtZW50LlxuXHRcdHRoaXMuX2VuYWJsZUNsaWNraW5nQWZ0ZXJMaW5rKCk7XG5cblx0XHQvLyBIYW5kbGUgdHlwaW5nIG92ZXIgdGhlIGxpbmsuXG5cdFx0dGhpcy5fZW5hYmxlVHlwaW5nT3ZlckxpbmsoKTtcblxuXHRcdC8vIEhhbmRsZSByZW1vdmluZyB0aGUgY29udGVudCBhZnRlciB0aGUgbGluayBlbGVtZW50LlxuXHRcdHRoaXMuX2hhbmRsZURlbGV0ZUNvbnRlbnRBZnRlckxpbmsoKTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIFByb2Nlc3NlcyBhbiBhcnJheSBvZiBjb25maWd1cmVkIHtAbGluayBtb2R1bGU6bGluay9saW5rfkxpbmtEZWNvcmF0b3JNYW51YWxEZWZpbml0aW9uIG1hbnVhbCBkZWNvcmF0b3JzfSxcblx0ICogdHJhbnNmb3JtcyB0aGVtIGludG8ge0BsaW5rIG1vZHVsZTpsaW5rL3V0aWxzfk1hbnVhbERlY29yYXRvcn0gaW5zdGFuY2VzIGFuZCBzdG9yZXMgdGhlbSBpbiB0aGVcblx0ICoge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmtjb21tYW5kflRlbXBsYXRlQ29tbWFuZCNtYW51YWxEZWNvcmF0b3JzfSBjb2xsZWN0aW9uIChhIG1vZGVsIGZvciBtYW51YWwgZGVjb3JhdG9ycyBzdGF0ZSkuXG5cdCAqXG5cdCAqIEFsc28gcmVnaXN0ZXJzIGFuIHtAbGluayBtb2R1bGU6ZW5naW5lL2NvbnZlcnNpb24vZG93bmNhc3RoZWxwZXJzfkRvd25jYXN0SGVscGVycyNhdHRyaWJ1dGVUb0VsZW1lbnQgYXR0cmlidXRlLXRvLWVsZW1lbnR9XG5cdCAqIGNvbnZlcnRlciBmb3IgZWFjaCBtYW51YWwgZGVjb3JhdG9yIGFuZCBleHRlbmRzIHRoZSB7QGxpbmsgbW9kdWxlOmVuZ2luZS9tb2RlbC9zY2hlbWF+U2NoZW1hIG1vZGVsJ3Mgc2NoZW1hfVxuXHQgKiB3aXRoIGFkZXF1YXRlIG1vZGVsIGF0dHJpYnV0ZXMuXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7QXJyYXkuPG1vZHVsZTpsaW5rL2xpbmt+TGlua0RlY29yYXRvck1hbnVhbERlZmluaXRpb24+fSBtYW51YWxEZWNvcmF0b3JEZWZpbml0aW9uc1xuXHQgKi9cblx0X2VuYWJsZU1hbnVhbERlY29yYXRvcnMoIG1hbnVhbERlY29yYXRvckRlZmluaXRpb25zICkge1xuXHRcdGlmICggIW1hbnVhbERlY29yYXRvckRlZmluaXRpb25zLmxlbmd0aCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBlZGl0b3IgPSB0aGlzLmVkaXRvcjtcblx0XHRjb25zdCBjb21tYW5kID0gZWRpdG9yLmNvbW1hbmRzLmdldCggJ3RlbXBsYXRlJyApO1xuXHRcdGNvbnN0IG1hbnVhbERlY29yYXRvcnMgPSBjb21tYW5kLm1hbnVhbERlY29yYXRvcnM7XG5cblx0XHRtYW51YWxEZWNvcmF0b3JEZWZpbml0aW9ucy5mb3JFYWNoKCBkZWNvcmF0b3IgPT4ge1xuXHRcdFx0ZWRpdG9yLm1vZGVsLnNjaGVtYS5leHRlbmQoICckdGV4dCcsIHsgYWxsb3dBdHRyaWJ1dGVzOiBkZWNvcmF0b3IuaWQgfSApO1xuXG5cdFx0XHQvLyBLZWVwcyByZWZlcmVuY2UgdG8gbWFudWFsIGRlY29yYXRvciB0byBkZWNvZGUgaXRzIG5hbWUgdG8gYXR0cmlidXRlcyBkdXJpbmcgZG93bmNhc3QuXG5cdFx0XHRtYW51YWxEZWNvcmF0b3JzLmFkZCggbmV3IE1hbnVhbERlY29yYXRvciggZGVjb3JhdG9yICkgKTtcblx0XHRcdGNvbnNvbGUubG9nKG1hbnVhbERlY29yYXRvcnMpO1xuXHRcdFx0ZWRpdG9yLmNvbnZlcnNpb24uZm9yKCAnZG93bmNhc3QnICkuYXR0cmlidXRlVG9FbGVtZW50KCB7XG5cblx0XHRcdFx0bW9kZWw6IGRlY29yYXRvci5pZCxcblx0XHRcdFx0dmlldzogKCBtYW51YWxEZWNvcmF0b3JOYW1lLCB7IHdyaXRlciB9ICkgPT4ge1xuXHRcdFx0XHRcdGlmICggbWFudWFsRGVjb3JhdG9yTmFtZSApIHtcblx0XHRcdFx0XHRcdGNvbnN0IGF0dHJpYnV0ZXMgPSBtYW51YWxEZWNvcmF0b3JzLmdldCggZGVjb3JhdG9yLmlkICkuYXR0cmlidXRlcztcblx0XHRcdFx0XHRcdGNvbnN0IGVsZW1lbnQgPSB3cml0ZXIuY3JlYXRlQXR0cmlidXRlRWxlbWVudCggJ3NwYW4nLCBhdHRyaWJ1dGVzLCB7IHByaW9yaXR5OiA1IH0gKTtcblx0XHRcdFx0XHRcdHdyaXRlci5zZXRDdXN0b21Qcm9wZXJ0eSggJ3RlbXBsYXRlJywgdHJ1ZSwgZWxlbWVudCApO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IH0gKTtcblxuXHRcdFx0ZWRpdG9yLmNvbnZlcnNpb24uZm9yKCAndXBjYXN0JyApLmVsZW1lbnRUb0F0dHJpYnV0ZSgge1xuXHRcdFx0XHR2aWV3OiB7XG5cdFx0XHRcdFx0bmFtZTogJ3NwYW4nLFxuXHRcdFx0XHRcdGF0dHJpYnV0ZXM6IG1hbnVhbERlY29yYXRvcnMuZ2V0KCBkZWNvcmF0b3IuaWQgKS5hdHRyaWJ1dGVzXG5cdFx0XHRcdH0sXG5cdFx0XHRcdG1vZGVsOiB7XG5cdFx0XHRcdFx0a2V5OiBkZWNvcmF0b3IuaWRcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTdGFydHMgbGlzdGVuaW5nIHRvIHtAbGluayBtb2R1bGU6ZW5naW5lL21vZGVsL21vZGVsfk1vZGVsI2V2ZW50Omluc2VydENvbnRlbnR9IGFuZCBjb3JyZWN0cyB0aGUgbW9kZWxcblx0ICogc2VsZWN0aW9uIGF0dHJpYnV0ZXMgaWYgdGhlIHNlbGVjdGlvbiBpcyBhdCB0aGUgZW5kIG9mIGEgbGluayBhZnRlciBpbnNlcnRpbmcgdGhlIGNvbnRlbnQuXG5cdCAqXG5cdCAqIFRoZSBwdXJwb3NlIG9mIHRoaXMgYWN0aW9uIGlzIHRvIGltcHJvdmUgdGhlIG92ZXJhbGwgVVggYmVjYXVzZSB0aGUgdXNlciBpcyBubyBsb25nZXIgXCJ0cmFwcGVkXCIgYnkgdGhlXG5cdCAqIGB0ZW1wbGF0ZVZhcmAgYXR0cmlidXRlIG9mIHRoZSBzZWxlY3Rpb24gYW5kIHRoZXkgY2FuIHR5cGUgYSBcImNsZWFuXCIgKGB0ZW1wbGF0ZVZhcmDigJNsZXNzKSB0ZXh0IHJpZ2h0IGF3YXkuXG5cdCAqXG5cdCAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vY2tlZGl0b3IvY2tlZGl0b3I1L2lzc3Vlcy82MDUzLlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X2VuYWJsZUluc2VydENvbnRlbnRTZWxlY3Rpb25BdHRyaWJ1dGVzRml4ZXIoKSB7XG5cdFx0Y29uc3QgZWRpdG9yID0gdGhpcy5lZGl0b3I7XG5cdFx0Y29uc3QgbW9kZWwgPSBlZGl0b3IubW9kZWw7XG5cdFx0Y29uc3Qgc2VsZWN0aW9uID0gbW9kZWwuZG9jdW1lbnQuc2VsZWN0aW9uO1xuXHRcdGNvbnN0IGxpbmtDb21tYW5kID0gZWRpdG9yLmNvbW1hbmRzLmdldCggJ3RlbXBsYXRlJyApO1xuXG5cdFx0dGhpcy5saXN0ZW5UbyggbW9kZWwsICdpbnNlcnRDb250ZW50JywgKCkgPT4ge1xuXHRcdFx0Y29uc3Qgbm9kZUJlZm9yZSA9IHNlbGVjdGlvbi5hbmNob3Iubm9kZUJlZm9yZTtcblx0XHRcdGNvbnN0IG5vZGVBZnRlciA9IHNlbGVjdGlvbi5hbmNob3Iubm9kZUFmdGVyO1xuXG5cdFx0XHQvLyBOT1RFOiDihrAgYW5kIOKGsSByZXByZXNlbnQgdGhlIGdyYXZpdHkgb2YgdGhlIHNlbGVjdGlvbi5cblxuXHRcdFx0Ly8gVGhlIG9ubHkgdHJ1bHkgdmFsaWQgY2FzZSBpczpcblx0XHRcdC8vXG5cdFx0XHQvL1x0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDihrBcblx0XHRcdC8vXHRcdC4uLjwkdGV4dCB0ZW1wbGF0ZVZhcj1cImZvb1wiPklOU0VSVEVEW108LyR0ZXh0PlxuXHRcdFx0Ly9cblx0XHRcdC8vIElmIHRoZSBzZWxlY3Rpb24gaXMgbm90IFwidHJhcHBlZFwiIGJ5IHRoZSBgdGVtcGxhdGVWYXJgIGF0dHJpYnV0ZSBhZnRlciBpbnNlcnRpbmcsIHRoZXJlJ3Mgbm90aGluZ1xuXHRcdFx0Ly8gdG8gZml4IHRoZXJlLlxuXHRcdFx0aWYgKCAhc2VsZWN0aW9uLmhhc0F0dHJpYnV0ZSggJ3RlbXBsYXRlVmFyJyApICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIEZpbHRlciBvdXQgdGhlIGZvbGxvd2luZyBjYXNlIHdoZXJlIGEgbGluayB3aXRoIHRoZSBzYW1lIGhyZWYgKGUuZy4gPGEgaHJlZj1cImZvb1wiPklOU0VSVEVEPC9hPikgaXMgaW5zZXJ0ZWRcblx0XHRcdC8vIGluIHRoZSBtaWRkbGUgb2YgYW4gZXhpc3RpbmcgbGluazpcblx0XHRcdC8vXG5cdFx0XHQvLyBCZWZvcmUgaW5zZXJ0aW9uOlxuXHRcdFx0Ly9cdFx0ICAgICAgICAgICAgICAgICAgICAgICDihrBcblx0XHRcdC8vXHRcdDwkdGV4dCB0ZW1wbGF0ZVZhcj1cImZvb1wiPmxbXWluazwvJHRleHQ+XG5cdFx0XHQvL1xuXHRcdFx0Ly8gRXhwZWN0ZWQgYWZ0ZXIgaW5zZXJ0aW9uOlxuXHRcdFx0Ly9cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKGsFxuXHRcdFx0Ly9cdFx0PCR0ZXh0IHRlbXBsYXRlVmFyPVwiZm9vXCI+bElOU0VSVEVEW11pbms8LyR0ZXh0PlxuXHRcdFx0Ly9cblx0XHRcdGlmICggIW5vZGVCZWZvcmUgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRmlsdGVyIG91dCB0aGUgZm9sbG93aW5nIGNhc2Ugd2hlcmUgdGhlIHNlbGVjdGlvbiBoYXMgdGhlIFwidGVtcGxhdGVWYXJcIiBhdHRyaWJ1dGUgYmVjYXVzZSB0aGVcblx0XHRcdC8vIGdyYXZpdHkgaXMgb3ZlcnJpZGRlbiBhbmQgc29tZSB0ZXh0IHdpdGggYW5vdGhlciBhdHRyaWJ1dGUgKGUuZy4gPGI+SU5TRVJURUQ8L2I+KSBpcyBpbnNlcnRlZDpcblx0XHRcdC8vXG5cdFx0XHQvLyBCZWZvcmUgaW5zZXJ0aW9uOlxuXHRcdFx0Ly9cblx0XHRcdC8vXHRcdCAgICAgICAgICAgICAgICAgICAgICAg4oaxXG5cdFx0XHQvL1x0XHQ8JHRleHQgdGVtcGxhdGVWYXI9XCJmb29cIj5bXWxpbms8LyR0ZXh0PlxuXHRcdFx0Ly9cblx0XHRcdC8vIEV4cGVjdGVkIGFmdGVyIGluc2VydGlvbjpcblx0XHRcdC8vXG5cdFx0XHQvL1x0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oaxXG5cdFx0XHQvL1x0XHQ8JHRleHQgYm9sZD1cInRydWVcIj5JTlNFUlRFRDwvJHRleHQ+PCR0ZXh0IHRlbXBsYXRlVmFyPVwiZm9vXCI+W11saW5rPC8kdGV4dD5cblx0XHRcdC8vXG5cdFx0XHRpZiAoICFub2RlQmVmb3JlLmhhc0F0dHJpYnV0ZSggJ3RlbXBsYXRlVmFyJyApICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIEZpbHRlciBvdXQgdGhlIGZvbGxvd2luZyBjYXNlIHdoZXJlIGEgbGluayBpcyBhIGluc2VydGVkIGluIHRoZSBtaWRkbGUgKG9yIGJlZm9yZSkgYW5vdGhlciBsaW5rXG5cdFx0XHQvLyAoZGlmZmVyZW50IFVSTHMsIHNvIHRoZXkgd2lsbCBub3QgbWVyZ2UpLiBJbiB0aGlzIChsZXQncyBzYXkgd2VpcmQpIGNhc2UsIHdlIGNhbiBsZWF2ZSB0aGUgc2VsZWN0aW9uXG5cdFx0XHQvLyBhdHRyaWJ1dGVzIGFzIHRoZXkgYXJlIGJlY2F1c2UgdGhlIHVzZXIgd2lsbCBlbmQgdXAgd3JpdGluZyBpbiBvbmUgbGluayBvciBhbm90aGVyIGFueXdheS5cblx0XHRcdC8vXG5cdFx0XHQvLyBCZWZvcmUgaW5zZXJ0aW9uOlxuXHRcdFx0Ly9cblx0XHRcdC8vXHRcdCAgICAgICAgICAgICAgICAgICAgICAg4oawXG5cdFx0XHQvL1x0XHQ8JHRleHQgdGVtcGxhdGVWYXI9XCJmb29cIj5sW11pbms8LyR0ZXh0PlxuXHRcdFx0Ly9cblx0XHRcdC8vIEV4cGVjdGVkIGFmdGVyIGluc2VydGlvbjpcblx0XHRcdC8vXG5cdFx0XHQvL1x0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oawXG5cdFx0XHQvL1x0XHQ8JHRleHQgdGVtcGxhdGVWYXI9XCJmb29cIj5sPC8kdGV4dD48JHRleHQgdGVtcGxhdGVWYXI9XCJiYXJcIj5JTlNFUlRFRFtdPC8kdGV4dD48JHRleHQgdGVtcGxhdGVWYXI9XCJmb29cIj5pbms8LyR0ZXh0PlxuXHRcdFx0Ly9cblx0XHRcdGlmICggbm9kZUFmdGVyICYmIG5vZGVBZnRlci5oYXNBdHRyaWJ1dGUoICd0ZW1wbGF0ZVZhcicgKSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRtb2RlbC5jaGFuZ2UoIHdyaXRlciA9PiB7XG5cdFx0XHRcdHJlbW92ZUxpbmtBdHRyaWJ1dGVzRnJvbVNlbGVjdGlvbiggd3JpdGVyLCBsaW5rQ29tbWFuZC5tYW51YWxEZWNvcmF0b3JzICk7XG5cdFx0XHR9ICk7XG5cdFx0fSwgeyBwcmlvcml0eTogJ2xvdycgfSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFN0YXJ0cyBsaXN0ZW5pbmcgdG8ge0BsaW5rIG1vZHVsZTplbmdpbmUvdmlldy9kb2N1bWVudH5Eb2N1bWVudCNldmVudDptb3VzZWRvd259IGFuZFxuXHQgKiB7QGxpbmsgbW9kdWxlOmVuZ2luZS92aWV3L2RvY3VtZW50fkRvY3VtZW50I2V2ZW50OnNlbGVjdGlvbkNoYW5nZX0gYW5kIHB1dHMgdGhlIHNlbGVjdGlvbiBiZWZvcmUvYWZ0ZXIgYSBsaW5rIG5vZGVcblx0ICogaWYgY2xpY2tlZCBhdCB0aGUgYmVnaW5uaW5nL2VuZGluZyBvZiB0aGUgbGluay5cblx0ICpcblx0ICogVGhlIHB1cnBvc2Ugb2YgdGhpcyBhY3Rpb24gaXMgdG8gYWxsb3cgdHlwaW5nIGFyb3VuZCB0aGUgbGluayBub2RlIGRpcmVjdGx5IGFmdGVyIGEgY2xpY2suXG5cdCAqXG5cdCAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vY2tlZGl0b3IvY2tlZGl0b3I1L2lzc3Vlcy8xMDE2LlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X2VuYWJsZUNsaWNraW5nQWZ0ZXJMaW5rKCkge1xuXHRcdGNvbnN0IGVkaXRvciA9IHRoaXMuZWRpdG9yO1xuXHRcdGNvbnN0IGxpbmtDb21tYW5kID0gZWRpdG9yLmNvbW1hbmRzLmdldCggJ3RlbXBsYXRlJyApO1xuXG5cdFx0ZWRpdG9yLmVkaXRpbmcudmlldy5hZGRPYnNlcnZlciggTW91c2VPYnNlcnZlciApO1xuXG5cdFx0bGV0IGNsaWNrZWQgPSBmYWxzZTtcblxuXHRcdC8vIERldGVjdCB0aGUgY2xpY2suXG5cdFx0dGhpcy5saXN0ZW5UbyggZWRpdG9yLmVkaXRpbmcudmlldy5kb2N1bWVudCwgJ21vdXNlZG93bicsICgpID0+IHtcblx0XHRcdGNsaWNrZWQgPSB0cnVlO1xuXHRcdH0gKTtcblxuXHRcdC8vIFdoZW4gdGhlIHNlbGVjdGlvbiBoYXMgY2hhbmdlZC4uLlxuXHRcdHRoaXMubGlzdGVuVG8oIGVkaXRvci5lZGl0aW5nLnZpZXcuZG9jdW1lbnQsICdzZWxlY3Rpb25DaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHRpZiAoICFjbGlja2VkICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIC4uLmFuZCBpdCB3YXMgY2F1c2VkIGJ5IHRoZSBjbGljay4uLlxuXHRcdFx0Y2xpY2tlZCA9IGZhbHNlO1xuXG5cdFx0XHRjb25zdCBzZWxlY3Rpb24gPSBlZGl0b3IubW9kZWwuZG9jdW1lbnQuc2VsZWN0aW9uO1xuXG5cdFx0XHQvLyAuLi5hbmQgbm8gdGV4dCBpcyBzZWxlY3RlZC4uLlxuXHRcdFx0aWYgKCAhc2VsZWN0aW9uLmlzQ29sbGFwc2VkICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIC4uLmFuZCBjbGlja2VkIHRleHQgaXMgdGhlIGxpbmsuLi5cblx0XHRcdGlmICggIXNlbGVjdGlvbi5oYXNBdHRyaWJ1dGUoICd0ZW1wbGF0ZVZhcicgKSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBwb3NpdGlvbiA9IHNlbGVjdGlvbi5nZXRGaXJzdFBvc2l0aW9uKCk7XG5cdFx0XHRjb25zdCBsaW5rUmFuZ2UgPSBmaW5kQXR0cmlidXRlUmFuZ2UoIHBvc2l0aW9uLCAndGVtcGxhdGVWYXInLCBzZWxlY3Rpb24uZ2V0QXR0cmlidXRlKCAndGVtcGxhdGVWYXInICksIGVkaXRvci5tb2RlbCApO1xuXG5cdFx0XHQvLyAuLi5jaGVjayB3aGV0aGVyIGNsaWNrZWQgc3RhcnQvZW5kIGJvdW5kYXJ5IG9mIHRoZSBsaW5rLlxuXHRcdFx0Ly8gSWYgc28sIHJlbW92ZSB0aGUgYHRlbXBsYXRlVmFyYCBhdHRyaWJ1dGUuXG5cdFx0XHRpZiAoIHBvc2l0aW9uLmlzVG91Y2hpbmcoIGxpbmtSYW5nZS5zdGFydCApIHx8IHBvc2l0aW9uLmlzVG91Y2hpbmcoIGxpbmtSYW5nZS5lbmQgKSApIHtcblx0XHRcdFx0ZWRpdG9yLm1vZGVsLmNoYW5nZSggd3JpdGVyID0+IHtcblx0XHRcdFx0XHRyZW1vdmVMaW5rQXR0cmlidXRlc0Zyb21TZWxlY3Rpb24oIHdyaXRlciwgbGlua0NvbW1hbmQubWFudWFsRGVjb3JhdG9ycyApO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFN0YXJ0cyBsaXN0ZW5pbmcgdG8ge0BsaW5rIG1vZHVsZTplbmdpbmUvbW9kZWwvbW9kZWx+TW9kZWwjZGVsZXRlQ29udGVudH0gYW5kIHtAbGluayBtb2R1bGU6ZW5naW5lL21vZGVsL21vZGVsfk1vZGVsI2luc2VydENvbnRlbnR9XG5cdCAqIGFuZCBjaGVja3Mgd2hldGhlciB0eXBpbmcgb3ZlciB0aGUgbGluay4gSWYgc28sIGF0dHJpYnV0ZXMgb2YgcmVtb3ZlZCB0ZXh0IGFyZSBwcmVzZXJ2ZWQgYW5kIGFwcGxpZWQgdG8gdGhlIGluc2VydGVkIHRleHQuXG5cdCAqXG5cdCAqIFRoZSBwdXJwb3NlIG9mIHRoaXMgYWN0aW9uIGlzIHRvIGFsbG93IG1vZGlmeWluZyBhIHRleHQgd2l0aG91dCBsb29zaW5nIHRoZSBgdGVtcGxhdGVWYXJgIGF0dHJpYnV0ZSAoYW5kIG90aGVyKS5cblx0ICpcblx0ICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ja2VkaXRvci9ja2VkaXRvcjUvaXNzdWVzLzQ3NjIuXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfZW5hYmxlVHlwaW5nT3ZlckxpbmsoKSB7XG5cdFx0Y29uc3QgZWRpdG9yID0gdGhpcy5lZGl0b3I7XG5cdFx0Y29uc3QgdmlldyA9IGVkaXRvci5lZGl0aW5nLnZpZXc7XG5cblx0XHQvLyBTZWxlY3Rpb24gYXR0cmlidXRlcyB3aGVuIHN0YXJ0ZWQgdHlwaW5nIG92ZXIgdGhlIGxpbmsuXG5cdFx0bGV0IHNlbGVjdGlvbkF0dHJpYnV0ZXM7XG5cblx0XHQvLyBXaGV0aGVyIHByZXNzZWQgYEJhY2tzcGFjZWAgb3IgYERlbGV0ZWAuIElmIHNvLCBhdHRyaWJ1dGVzIHNob3VsZCBub3QgYmUgcHJlc2VydmVkLlxuXHRcdGxldCBkZWxldGVkQ29udGVudDtcblxuXHRcdC8vIERldGVjdCBwcmVzc2luZyBgQmFja3NwYWNlYCAvIGBEZWxldGVgLlxuXHRcdHRoaXMubGlzdGVuVG8oIHZpZXcuZG9jdW1lbnQsICdkZWxldGUnLCAoKSA9PiB7XG5cdFx0XHRkZWxldGVkQ29udGVudCA9IHRydWU7XG5cdFx0fSwgeyBwcmlvcml0eTogJ2hpZ2gnIH0gKTtcblxuXHRcdC8vIExpc3RlbmluZyB0byBgbW9kZWwjZGVsZXRlQ29udGVudGAgYWxsb3dzIGRldGVjdGluZyB3aGV0aGVyIHNlbGVjdGVkIGNvbnRlbnQgd2FzIGEgbGluay5cblx0XHQvLyBJZiBzbywgYmVmb3JlIHJlbW92aW5nIHRoZSBlbGVtZW50LCB3ZSB3aWxsIGNvcHkgaXRzIGF0dHJpYnV0ZXMuXG5cdFx0dGhpcy5saXN0ZW5UbyggZWRpdG9yLm1vZGVsLCAnZGVsZXRlQ29udGVudCcsICgpID0+IHtcblx0XHRcdGNvbnN0IHNlbGVjdGlvbiA9IGVkaXRvci5tb2RlbC5kb2N1bWVudC5zZWxlY3Rpb247XG5cblx0XHRcdC8vIENvcHkgYXR0cmlidXRlcyBvbmx5IGlmIGFueXRoaW5nIGlzIHNlbGVjdGVkLlxuXHRcdFx0aWYgKCBzZWxlY3Rpb24uaXNDb2xsYXBzZWQgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gV2hlbiB0aGUgY29udGVudCB3YXMgZGVsZXRlZCwgZG8gbm90IHByZXNlcnZlIGF0dHJpYnV0ZXMuXG5cdFx0XHRpZiAoIGRlbGV0ZWRDb250ZW50ICkge1xuXHRcdFx0XHRkZWxldGVkQ29udGVudCA9IGZhbHNlO1xuXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRW5hYmxlZCBvbmx5IHdoZW4gdHlwaW5nLlxuXHRcdFx0aWYgKCAhaXNUeXBpbmcoIGVkaXRvciApICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmICggc2hvdWxkQ29weUF0dHJpYnV0ZXMoIGVkaXRvci5tb2RlbCApICkge1xuXHRcdFx0XHRzZWxlY3Rpb25BdHRyaWJ1dGVzID0gc2VsZWN0aW9uLmdldEF0dHJpYnV0ZXMoKTtcblx0XHRcdH1cblx0XHR9LCB7IHByaW9yaXR5OiAnaGlnaCcgfSApO1xuXG5cdFx0Ly8gTGlzdGVuaW5nIHRvIGBtb2RlbCNpbnNlcnRDb250ZW50YCBhbGxvd3MgZGV0ZWN0aW5nIHRoZSBjb250ZW50IGluc2VydGlvbi5cblx0XHQvLyBXZSB3YW50IHRvIGFwcGx5IGF0dHJpYnV0ZXMgdGhhdCB3ZXJlIHJlbW92ZWQgd2hpbGUgdHlwaW5nIG92ZXIgdGhlIGxpbmsuXG5cdFx0dGhpcy5saXN0ZW5UbyggZWRpdG9yLm1vZGVsLCAnaW5zZXJ0Q29udGVudCcsICggZXZ0LCBbIGVsZW1lbnQgXSApID0+IHtcblx0XHRcdGRlbGV0ZWRDb250ZW50ID0gZmFsc2U7XG5cblx0XHRcdC8vIEVuYWJsZWQgb25seSB3aGVuIHR5cGluZy5cblx0XHRcdGlmICggIWlzVHlwaW5nKCBlZGl0b3IgKSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoICFzZWxlY3Rpb25BdHRyaWJ1dGVzICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGVkaXRvci5tb2RlbC5jaGFuZ2UoIHdyaXRlciA9PiB7XG5cdFx0XHRcdGZvciAoIGNvbnN0IFsgYXR0cmlidXRlLCB2YWx1ZSBdIG9mIHNlbGVjdGlvbkF0dHJpYnV0ZXMgKSB7XG5cdFx0XHRcdFx0d3JpdGVyLnNldEF0dHJpYnV0ZSggYXR0cmlidXRlLCB2YWx1ZSwgZWxlbWVudCApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cblx0XHRcdHNlbGVjdGlvbkF0dHJpYnV0ZXMgPSBudWxsO1xuXHRcdH0sIHsgcHJpb3JpdHk6ICdoaWdoJyB9ICk7XG5cdH1cblxuXHQvKipcblx0ICogU3RhcnRzIGxpc3RlbmluZyB0byB7QGxpbmsgbW9kdWxlOmVuZ2luZS9tb2RlbC9tb2RlbH5Nb2RlbCNkZWxldGVDb250ZW50fSBhbmQgY2hlY2tzIHdoZXRoZXJcblx0ICogcmVtb3ZpbmcgYSBjb250ZW50IHJpZ2h0IGFmdGVyIHRoZSBcInRlbXBsYXRlVmFyXCIgYXR0cmlidXRlLlxuXHQgKlxuXHQgKiBJZiBzbywgdGhlIHNlbGVjdGlvbiBzaG91bGQgbm90IHByZXNlcnZlIHRoZSBgdGVtcGxhdGVWYXJgIGF0dHJpYnV0ZS4gSG93ZXZlciwgaWZcblx0ICogdGhlIHtAbGluayBtb2R1bGU6dHlwaW5nL3R3b3N0ZXBjYXJldG1vdmVtZW50flR3b1N0ZXBDYXJldE1vdmVtZW50fSBwbHVnaW4gaXMgYWN0aXZlIGFuZFxuXHQgKiB0aGUgc2VsZWN0aW9uIGhhcyB0aGUgXCJ0ZW1wbGF0ZVZhclwiIGF0dHJpYnV0ZSBkdWUgdG8gb3ZlcnJpZGVuIGdyYXZpdHkgKGF0IHRoZSBlbmQpLCB0aGUgYHRlbXBsYXRlVmFyYCBhdHRyaWJ1dGUgc2hvdWxkIHN0YXkgdW50b3VjaGVkLlxuXHQgKlxuXHQgKiBUaGUgcHVycG9zZSBvZiB0aGlzIGFjdGlvbiBpcyB0byBhbGxvdyByZW1vdmluZyB0aGUgbGluayB0ZXh0IGFuZCBrZWVwIHRoZSBzZWxlY3Rpb24gb3V0c2lkZSB0aGUgbGluay5cblx0ICpcblx0ICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ja2VkaXRvci9ja2VkaXRvcjUvaXNzdWVzLzc1MjEuXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfaGFuZGxlRGVsZXRlQ29udGVudEFmdGVyTGluaygpIHtcblx0XHRjb25zdCBlZGl0b3IgPSB0aGlzLmVkaXRvcjtcblx0XHRjb25zdCBtb2RlbCA9IGVkaXRvci5tb2RlbDtcblx0XHRjb25zdCBzZWxlY3Rpb24gPSBtb2RlbC5kb2N1bWVudC5zZWxlY3Rpb247XG5cdFx0Y29uc3QgdmlldyA9IGVkaXRvci5lZGl0aW5nLnZpZXc7XG5cdFx0Y29uc3QgbGlua0NvbW1hbmQgPSBlZGl0b3IuY29tbWFuZHMuZ2V0KCAndGVtcGxhdGUnICk7XG5cblx0XHQvLyBBIGZsYWcgd2hldGhlciBhdHRyaWJ1dGVzIGB0ZW1wbGF0ZVZhcmAgYXR0cmlidXRlIHNob3VsZCBiZSBwcmVzZXJ2ZWQuXG5cdFx0bGV0IHNob3VsZFByZXNlcnZlQXR0cmlidXRlcyA9IGZhbHNlO1xuXG5cdFx0Ly8gQSBmbGFnIHdoZXRoZXIgdGhlIGBCYWNrc3BhY2VgIGtleSB3YXMgcHJlc3NlZC5cblx0XHRsZXQgaGFzQmFja3NwYWNlUHJlc3NlZCA9IGZhbHNlO1xuXG5cdFx0Ly8gRGV0ZWN0IHByZXNzaW5nIGBCYWNrc3BhY2VgLlxuXHRcdHRoaXMubGlzdGVuVG8oIHZpZXcuZG9jdW1lbnQsICdkZWxldGUnLCAoIGV2dCwgZGF0YSApID0+IHtcblx0XHRcdGhhc0JhY2tzcGFjZVByZXNzZWQgPSBkYXRhLmRvbUV2ZW50LmtleUNvZGUgPT09IGtleUNvZGVzLmJhY2tzcGFjZTtcblx0XHR9LCB7IHByaW9yaXR5OiAnaGlnaCcgfSApO1xuXG5cdFx0Ly8gQmVmb3JlIHJlbW92aW5nIHRoZSBjb250ZW50LCBjaGVjayB3aGV0aGVyIHRoZSBzZWxlY3Rpb24gaXMgaW5zaWRlIGEgbGluayBvciBhdCB0aGUgZW5kIG9mIGxpbmsgYnV0IHdpdGggMi1TQ00gZW5hYmxlZC5cblx0XHQvLyBJZiBzbywgd2Ugd2FudCB0byBwcmVzZXJ2ZSBsaW5rIGF0dHJpYnV0ZXMuXG5cdFx0dGhpcy5saXN0ZW5UbyggbW9kZWwsICdkZWxldGVDb250ZW50JywgKCkgPT4ge1xuXHRcdFx0Ly8gUmVzZXQgdGhlIHN0YXRlLlxuXHRcdFx0c2hvdWxkUHJlc2VydmVBdHRyaWJ1dGVzID0gZmFsc2U7XG5cblx0XHRcdGNvbnN0IHBvc2l0aW9uID0gc2VsZWN0aW9uLmdldEZpcnN0UG9zaXRpb24oKTtcblx0XHRcdGNvbnN0IHRlbXBsYXRlVmFyID0gc2VsZWN0aW9uLmdldEF0dHJpYnV0ZSggJ3RlbXBsYXRlVmFyJyApO1xuXG5cdFx0XHRpZiAoICF0ZW1wbGF0ZVZhciApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBsaW5rUmFuZ2UgPSBmaW5kQXR0cmlidXRlUmFuZ2UoIHBvc2l0aW9uLCAndGVtcGxhdGVWYXInLCB0ZW1wbGF0ZVZhciwgbW9kZWwgKTtcblxuXHRcdFx0Ly8gUHJlc2VydmUgYHRlbXBsYXRlVmFyYCBhdHRyaWJ1dGUgaWYgdGhlIHNlbGVjdGlvbiBpcyBpbiB0aGUgbWlkZGxlIG9mIHRoZSBsaW5rIG9yXG5cdFx0XHQvLyB0aGUgc2VsZWN0aW9uIGlzIGF0IHRoZSBlbmQgb2YgdGhlIGxpbmsgYW5kIDItU0NNIGlzIGFjdGl2YXRlZC5cblx0XHRcdHNob3VsZFByZXNlcnZlQXR0cmlidXRlcyA9IGxpbmtSYW5nZS5jb250YWluc1Bvc2l0aW9uKCBwb3NpdGlvbiApIHx8IGxpbmtSYW5nZS5lbmQuaXNFcXVhbCggcG9zaXRpb24gKTtcblx0XHR9LCB7IHByaW9yaXR5OiAnaGlnaCcgfSApO1xuXG5cdFx0Ly8gQWZ0ZXIgcmVtb3ZpbmcgdGhlIGNvbnRlbnQsIGNoZWNrIHdoZXRoZXIgdGhlIGN1cnJlbnQgc2VsZWN0aW9uIHNob3VsZCBwcmVzZXJ2ZSB0aGUgYHRlbXBsYXRlVmFyYCBhdHRyaWJ1dGUuXG5cdFx0dGhpcy5saXN0ZW5UbyggbW9kZWwsICdkZWxldGVDb250ZW50JywgKCkgPT4ge1xuXHRcdFx0Ly8gSWYgZGlkbid0IHByZXNzIGBCYWNrc3BhY2VgLlxuXHRcdFx0aWYgKCAhaGFzQmFja3NwYWNlUHJlc3NlZCApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRoYXNCYWNrc3BhY2VQcmVzc2VkID0gZmFsc2U7XG5cblx0XHRcdC8vIERpc2FibGUgdGhlIG1lY2hhbmlzbSBpZiBpbnNpZGUgYSBsaW5rIChgPCR0ZXh0IHVybD1cImZvb1wiPkZbXW9vPC8kdGV4dD5gIG9yIDwkdGV4dCB1cmw9XCJmb29cIj5Gb29bXTwvJHRleHQ+YCkuXG5cdFx0XHRpZiAoIHNob3VsZFByZXNlcnZlQXR0cmlidXRlcyApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBVc2UgYG1vZGVsLmVucXVldWVDaGFuZ2UoKWAgaW4gb3JkZXIgdG8gZXhlY3V0ZSB0aGUgY2FsbGJhY2sgYXQgdGhlIGVuZCBvZiB0aGUgY2hhbmdlcyBwcm9jZXNzLlxuXHRcdFx0ZWRpdG9yLm1vZGVsLmVucXVldWVDaGFuZ2UoIHdyaXRlciA9PiB7XG5cdFx0XHRcdHJlbW92ZUxpbmtBdHRyaWJ1dGVzRnJvbVNlbGVjdGlvbiggd3JpdGVyLCBsaW5rQ29tbWFuZC5tYW51YWxEZWNvcmF0b3JzICk7XG5cdFx0XHR9ICk7XG5cdFx0fSwgeyBwcmlvcml0eTogJ2xvdycgfSApO1xuXHR9XG59XG5cbi8vIE1ha2UgdGhlIHNlbGVjdGlvbiBmcmVlIG9mIGxpbmstcmVsYXRlZCBtb2RlbCBhdHRyaWJ1dGVzLlxuLy8gQWxsIGxpbmstcmVsYXRlZCBtb2RlbCBhdHRyaWJ1dGVzIHN0YXJ0IHdpdGggXCJsaW5rXCIuIFRoYXQgaW5jbHVkZXMgbm90IG9ubHkgXCJ0ZW1wbGF0ZVZhclwiXG4vLyBidXQgYWxzbyBhbGwgZGVjb3JhdG9yIGF0dHJpYnV0ZXMgKHRoZXkgaGF2ZSBkeW5hbWljIG5hbWVzKS5cbi8vXG4vLyBAcGFyYW0ge21vZHVsZTplbmdpbmUvbW9kZWwvd3JpdGVyfldyaXRlcn0gd3JpdGVyXG4vLyBAcGFyYW0ge21vZHVsZTp1dGlscy9jb2xsZWN0aW9ufkNvbGxlY3Rpb259IG1hbnVhbERlY29yYXRvcnNcbmZ1bmN0aW9uIHJlbW92ZUxpbmtBdHRyaWJ1dGVzRnJvbVNlbGVjdGlvbiggd3JpdGVyLCBtYW51YWxEZWNvcmF0b3JzICkge1xuXHR3cml0ZXIucmVtb3ZlU2VsZWN0aW9uQXR0cmlidXRlKCAndGVtcGxhdGVWYXInICk7XG5cblx0Zm9yICggY29uc3QgZGVjb3JhdG9yIG9mIG1hbnVhbERlY29yYXRvcnMgKSB7XG5cdFx0d3JpdGVyLnJlbW92ZVNlbGVjdGlvbkF0dHJpYnV0ZSggZGVjb3JhdG9yLmlkICk7XG5cdH1cbn1cblxuLy8gQ2hlY2tzIHdoZXRoZXIgc2VsZWN0aW9uJ3MgYXR0cmlidXRlcyBzaG91bGQgYmUgY29waWVkIHRvIHRoZSBuZXcgaW5zZXJ0ZWQgdGV4dC5cbi8vXG4vLyBAcGFyYW0ge21vZHVsZTplbmdpbmUvbW9kZWwvbW9kZWx+TW9kZWx9IG1vZGVsXG4vLyBAcmV0dXJucyB7Qm9vbGVhbn1cbmZ1bmN0aW9uIHNob3VsZENvcHlBdHRyaWJ1dGVzKCBtb2RlbCApIHtcblx0Y29uc3Qgc2VsZWN0aW9uID0gbW9kZWwuZG9jdW1lbnQuc2VsZWN0aW9uO1xuXHRjb25zdCBmaXJzdFBvc2l0aW9uID0gc2VsZWN0aW9uLmdldEZpcnN0UG9zaXRpb24oKTtcblx0Y29uc3QgbGFzdFBvc2l0aW9uID0gc2VsZWN0aW9uLmdldExhc3RQb3NpdGlvbigpO1xuXHRjb25zdCBub2RlQXRGaXJzdFBvc2l0aW9uID0gZmlyc3RQb3NpdGlvbi5ub2RlQWZ0ZXI7XG5cblx0Ly8gVGhlIHRleHQgbGluayBub2RlIGRvZXMgbm90IGV4aXN0Li4uXG5cdGlmICggIW5vZGVBdEZpcnN0UG9zaXRpb24gKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Ly8gLi4ub3IgaXQgaXNuJ3QgdGhlIHRleHQgbm9kZS4uLlxuXHRpZiAoICFub2RlQXRGaXJzdFBvc2l0aW9uLmlzKCAnJHRleHQnICkgKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Ly8gLi4ub3IgaXNuJ3QgdGhlIGxpbmsuXG5cdGlmICggIW5vZGVBdEZpcnN0UG9zaXRpb24uaGFzQXR0cmlidXRlKCAndGVtcGxhdGVWYXInICkgKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Ly8gYHRleHROb2RlYCA9IHRoZSBwb3NpdGlvbiBpcyBpbnNpZGUgdGhlIGxpbmsgZWxlbWVudC5cblx0Ly8gYG5vZGVCZWZvcmVgID0gdGhlIHBvc2l0aW9uIGlzIGF0IHRoZSBlbmQgb2YgdGhlIGxpbmsgZWxlbWVudC5cblx0Y29uc3Qgbm9kZUF0TGFzdFBvc2l0aW9uID0gbGFzdFBvc2l0aW9uLnRleHROb2RlIHx8IGxhc3RQb3NpdGlvbi5ub2RlQmVmb3JlO1xuXG5cdC8vIElmIGJvdGggcmVmZXJlbmNlcyB0aGUgc2FtZSBub2RlIHNlbGVjdGlvbiBjb250YWlucyBhIHNpbmdsZSB0ZXh0IG5vZGUuXG5cdGlmICggbm9kZUF0Rmlyc3RQb3NpdGlvbiA9PT0gbm9kZUF0TGFzdFBvc2l0aW9uICkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0Ly8gSWYgbm9kZXMgYXJlIG5vdCBlcXVhbCwgbWF5YmUgdGhlIGxpbmsgbm9kZXMgaGFzIGRlZmluZWQgYWRkaXRpb25hbCBhdHRyaWJ1dGVzIGluc2lkZS5cblx0Ly8gRmlyc3QsIHdlIG5lZWQgdG8gZmluZCB0aGUgZW50aXJlIGxpbmsgcmFuZ2UuXG5cdGNvbnN0IGxpbmtSYW5nZSA9IGZpbmRBdHRyaWJ1dGVSYW5nZSggZmlyc3RQb3NpdGlvbiwgJ3RlbXBsYXRlVmFyJywgbm9kZUF0Rmlyc3RQb3NpdGlvbi5nZXRBdHRyaWJ1dGUoICd0ZW1wbGF0ZVZhcicgKSwgbW9kZWwgKTtcblxuXHQvLyBUaGVuIHdlIGNhbiBjaGVjayB3aGV0aGVyIHNlbGVjdGVkIHJhbmdlIGlzIGluc2lkZSB0aGUgZm91bmQgbGluayByYW5nZS4gSWYgc28sIGF0dHJpYnV0ZXMgc2hvdWxkIGJlIHByZXNlcnZlZC5cblx0cmV0dXJuIGxpbmtSYW5nZS5jb250YWluc1JhbmdlKCBtb2RlbC5jcmVhdGVSYW5nZSggZmlyc3RQb3NpdGlvbiwgbGFzdFBvc2l0aW9uICksIHRydWUgKTtcbn1cblxuLy8gQ2hlY2tzIHdoZXRoZXIgcHJvdmlkZWQgY2hhbmdlcyB3ZXJlIGNhdXNlZCBieSB0eXBpbmcuXG4vL1xuLy8gQHBhcmFtcyB7bW9kdWxlOmNvcmUvZWRpdG9yL2VkaXRvcn5FZGl0b3J9IGVkaXRvclxuLy8gQHJldHVybnMge0Jvb2xlYW59XG5mdW5jdGlvbiBpc1R5cGluZyggZWRpdG9yICkge1xuXHRjb25zdCBpbnB1dCA9IGVkaXRvci5wbHVnaW5zLmdldCggJ0lucHV0JyApO1xuXG5cdHJldHVybiBpbnB1dC5pc0lucHV0KCBlZGl0b3IubW9kZWwuY2hhbmdlKCB3cml0ZXIgPT4gd3JpdGVyLmJhdGNoICkgKTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2UgQ29weXJpZ2h0IChjKSAyMDAzLTIwMjEsIENLU291cmNlIC0gRnJlZGVyaWNvIEtuYWJiZW4uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBGb3IgbGljZW5zaW5nLCBzZWUgTElDRU5TRS5tZCBvciBodHRwczovL2NrZWRpdG9yLmNvbS9sZWdhbC9ja2VkaXRvci1vc3MtbGljZW5zZVxuICovXG5cbi8qKlxuICogQG1vZHVsZSBsaW5rL2xpbmt1aVxuICovXG5cbmltcG9ydCAgUGx1Z2luICBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWNvcmUvc3JjL3BsdWdpbic7XG5pbXBvcnQgIENsaWNrT2JzZXJ2ZXIgIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtZW5naW5lL3NyYy92aWV3L29ic2VydmVyL2NsaWNrb2JzZXJ2ZXInO1xuaW1wb3J0IHsgQnV0dG9uVmlldywgQ29udGV4dHVhbEJhbGxvb24sIGNsaWNrT3V0c2lkZUhhbmRsZXIgLEJhbGxvb25QYW5lbFZpZXd9IGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtdWkvc3JjJztcblxuaW1wb3J0IFRlbXBsYXRlRm9ybVZpZXcgZnJvbSAnLi91aS90ZW1wbGF0ZS1mb3JtLXZpZXcnO1xuaW1wb3J0IFRlbXBsYXRlQWN0aW9uc1ZpZXcgZnJvbSAnLi91aS90ZW1wbGF0ZS1hY3Rpb25zLXZpZXcnO1xuaW1wb3J0IFRlbXBsYXRlU2F2ZVZpZXcgZnJvbSAnLi91aS90ZW1wbGF0ZS1zYXZlLXZpZXcnO1xuaW1wb3J0IHsgIGlzTGlua0VsZW1lbnQsIFRFTVBMQVRFX0tFWVNUUk9LRSAsIFNBVkVfS0VZU1RST0tFIH0gZnJvbSAnLi91dGlscyc7XG5cbmltcG9ydCBUZW1sYXRlSWNvbiBmcm9tICcuLi90aGVtZS9pY29ucy90ZW1sYXRlSWNvbi5zdmcnO1xuaW1wb3J0IFNhdmVUZW1wbGF0ZSBmcm9tICcuLi90aGVtZS9pY29ucy9maWxlLWV4cG9ydC1zb2xpZC5zdmcnO1xuY29uc3QgVklTVUFMX1NFTEVDVElPTl9NQVJLRVJfTkFNRSA9ICd0ZW1wbGF0ZS11aSc7XG5cbi8qKlxuICogVGhlIGxpbmsgVUkgcGx1Z2luLiBJdCBpbnRyb2R1Y2VzIHRoZSBgJ3RlbXBsYXRlJ2AgYW5kIGAnY2FuY2VsdGVtcGxhdGUnYCBidXR0b25zIGFuZCBzdXBwb3J0IGZvciB0aGUgPGtiZD5DdHJsK0s8L2tiZD4ga2V5c3Ryb2tlLlxuICpcbiAqIEl0IHVzZXMgdGhlXG4gKiB7QGxpbmsgbW9kdWxlOnVpL3BhbmVsL2JhbGxvb24vY29udGV4dHVhbGJhbGxvb25+Q29udGV4dHVhbEJhbGxvb24gY29udGV4dHVhbCBiYWxsb29uIHBsdWdpbn0uXG4gKlxuICogQGV4dGVuZHMgbW9kdWxlOmNvcmUvcGx1Z2luflBsdWdpblxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZW1wbGF0ZVVpIGV4dGVuZHMgUGx1Z2luIHtcblx0LyoqXG5cdCAqIEBpbmhlcml0RG9jXG5cdCAqL1xuXHRzdGF0aWMgZ2V0IHJlcXVpcmVzKCkge1xuXHRcdHJldHVybiBbIENvbnRleHR1YWxCYWxsb29uICxCYWxsb29uUGFuZWxWaWV3XTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5oZXJpdERvY1xuXHQgKi9cblx0c3RhdGljIGdldCBwbHVnaW5OYW1lKCkge1xuXHRcdHJldHVybiAnVGV4dFRlbXBsYXRlVUknO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbmhlcml0RG9jXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdGNvbnN0IGVkaXRvciA9IHRoaXMuZWRpdG9yO1xuXG5cdFx0ZWRpdG9yLmVkaXRpbmcudmlldy5hZGRPYnNlcnZlciggQ2xpY2tPYnNlcnZlciApO1xuXG5cdFx0LyoqXG5cdFx0ICogVGhlIGFjdGlvbnMgdmlldyBkaXNwbGF5ZWQgaW5zaWRlIG9mIHRoZSBiYWxsb29uLlxuXHRcdCAqXG5cdFx0ICogQG1lbWJlciB7bW9kdWxlOmxpbmsvdWkvbGlua2FjdGlvbnN2aWV3flRlbXBsYXRlQWN0aW9uc1ZpZXd9XG5cdFx0ICovXG5cdFx0dGhpcy5hY3Rpb25zVmlldyA9IHRoaXMuX2NyZWF0ZUFjdGlvbnNWaWV3KCk7XG5cdFx0LyoqXG5cdFx0ICogVGhlIGFjdGlvbnMgdmlldyBkaXNwbGF5ZWQgaW5zaWRlIG9mIHRoZSBiYWxsb29uLlxuXHRcdCAqXG5cdFx0ICogQG1lbWJlciB7bW9kdWxlOmxpbmsvdWkvbGlua2FjdGlvbnN2aWV3flRlbXBsYXRlQWN0aW9uc1ZpZXd9XG5cdFx0ICovXG5cdFx0dGhpcy5zYXZlVmlldyA9IHRoaXMuX2NyZWF0ZVNhdmVWaWV3KCk7XG5cblx0XHQvKipcblx0XHQgKiBUaGUgZm9ybSB2aWV3IGRpc3BsYXllZCBpbnNpZGUgdGhlIGJhbGxvb24uXG5cdFx0ICpcblx0XHQgKiBAbWVtYmVyIHttb2R1bGU6bGluay91aS9saW5rZm9ybXZpZXd+TGlua0Zvcm1WaWV3fVxuXHRcdCAqL1xuXHRcdHRoaXMuZm9ybVZpZXcgPSB0aGlzLl9jcmVhdGVGb3JtVmlldygpO1xuXG5cdFx0LyoqXG5cdFx0ICogVGhlIGNvbnRleHR1YWwgYmFsbG9vbiBwbHVnaW4gaW5zdGFuY2UuXG5cdFx0ICpcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqIEBtZW1iZXIge21vZHVsZTp1aS9wYW5lbC9iYWxsb29uL2NvbnRleHR1YWxiYWxsb29ufkNvbnRleHR1YWxCYWxsb29ufVxuXHRcdCAqL1xuXHRcdHRoaXMuX2JhbGxvb24gPSBlZGl0b3IucGx1Z2lucy5nZXQoIENvbnRleHR1YWxCYWxsb29uICk7XG5cdFx0dGhpcy5fcGFuZWwgPSBlZGl0b3IucGx1Z2lucy5nZXQoIEJhbGxvb25QYW5lbFZpZXcgKTtcblxuXHRcdC8vIENyZWF0ZSB0b29sYmFyIGJ1dHRvbnMuXG5cdFx0dGhpcy5fY3JlYXRlVG9vbGJhckxpbmtCdXR0b24oKTtcblxuXHRcdC8vIEF0dGFjaCBsaWZlY3ljbGUgYWN0aW9ucyB0byB0aGUgdGhlIGJhbGxvb24uXG5cdFx0dGhpcy5fZW5hYmxlVXNlckJhbGxvb25JbnRlcmFjdGlvbnMoKTtcblxuXHRcdC8vIFJlbmRlcnMgYSBmYWtlIHZpc3VhbCBzZWxlY3Rpb24gbWFya2VyIG9uIGFuIGV4cGFuZGVkIHNlbGVjdGlvbi5cblx0XHRlZGl0b3IuY29udmVyc2lvbi5mb3IoICdlZGl0aW5nRG93bmNhc3QnICkubWFya2VyVG9IaWdobGlnaHQoIHtcblx0XHRcdG1vZGVsOiBWSVNVQUxfU0VMRUNUSU9OX01BUktFUl9OQU1FLFxuXHRcdFx0dmlldzoge1xuXHRcdFx0XHRjbGFzc2VzOiBbICdjay1mYWtlLWxpbmstc2VsZWN0aW9uJyBdXG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0Ly8gUmVuZGVycyBhIGZha2UgdmlzdWFsIHNlbGVjdGlvbiBtYXJrZXIgb24gYSBjb2xsYXBzZWQgc2VsZWN0aW9uLlxuXHRcdGVkaXRvci5jb252ZXJzaW9uLmZvciggJ2VkaXRpbmdEb3duY2FzdCcgKS5tYXJrZXJUb0VsZW1lbnQoIHtcblx0XHRcdG1vZGVsOiBWSVNVQUxfU0VMRUNUSU9OX01BUktFUl9OQU1FLFxuXHRcdFx0dmlldzoge1xuXHRcdFx0XHRuYW1lOiAnc3BhbicsXG5cdFx0XHRcdGNsYXNzZXM6IFsgJ2NrLWZha2UtbGluay1zZWxlY3Rpb24nLCAnY2stZmFrZS1saW5rLXNlbGVjdGlvbl9jb2xsYXBzZWQnIF1cblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogQGluaGVyaXREb2Ncblx0ICovXG5cdGRlc3Ryb3koKSB7XG5cdFx0c3VwZXIuZGVzdHJveSgpO1xuXG5cdFx0Ly8gRGVzdHJveSBjcmVhdGVkIFVJIGNvbXBvbmVudHMgYXMgdGhleSBhcmUgbm90IGF1dG9tYXRpY2FsbHkgZGVzdHJveWVkIChzZWUgY2tlZGl0b3I1IzEzNDEpLlxuXHRcdHRoaXMuZm9ybVZpZXcuZGVzdHJveSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgdGhlIHtAbGluayBtb2R1bGU6bGluay91aS9saW5rYWN0aW9uc3ZpZXd+VGVtcGxhdGVBY3Rpb25zVmlld30gaW5zdGFuY2UuXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEByZXR1cm5zIHttb2R1bGU6bGluay91aS9saW5rYWN0aW9uc3ZpZXd+VGVtcGxhdGVBY3Rpb25zVmlld30gVGhlIGxpbmsgYWN0aW9ucyB2aWV3IGluc3RhbmNlLlxuXHQgKi9cblx0X2NyZWF0ZUFjdGlvbnNWaWV3KCkge1xuXHRcdGNvbnN0IGVkaXRvciA9IHRoaXMuZWRpdG9yO1xuXHRcdGNvbnN0IGFjdGlvbnNWaWV3ID0gbmV3IFRlbXBsYXRlQWN0aW9uc1ZpZXcoIGVkaXRvci5sb2NhbGUgKTtcblx0XHRjb25zdCB0ZW1wbGF0ZUNvbW1hbmQgPSBlZGl0b3IuY29tbWFuZHMuZ2V0KCAndGVtcGxhdGUnICk7XG5cdFx0Y29uc3QgY2FuY2VsVGVtcGxhdGVDb21tYW5kID0gZWRpdG9yLmNvbW1hbmRzLmdldCggJ2NhbmNlbHRlbXBsYXRlJyApO1xuXG5cdFx0YWN0aW9uc1ZpZXcuYmluZCggJ2RhdGEtdGVtcGxhdGUtdmFyJyApLnRvKCB0ZW1wbGF0ZUNvbW1hbmQsICd2YWx1ZScgKTtcblx0XHRhY3Rpb25zVmlldy5lZGl0QnV0dG9uVmlldy5iaW5kKCAnaXNFbmFibGVkJyApLnRvKCB0ZW1wbGF0ZUNvbW1hbmQgKTtcblx0XHRhY3Rpb25zVmlldy51bmxpbmtCdXR0b25WaWV3LmJpbmQoICdpc0VuYWJsZWQnICkudG8oIGNhbmNlbFRlbXBsYXRlQ29tbWFuZCApO1xuXG5cdFx0Ly8gRXhlY3V0ZSB1bmxpbmsgY29tbWFuZCBhZnRlciBjbGlja2luZyBvbiB0aGUgXCJFZGl0XCIgYnV0dG9uLlxuXHRcdHRoaXMubGlzdGVuVG8oIGFjdGlvbnNWaWV3LCAnZWRpdCcsICgpID0+IHtcblx0XHRcdHRoaXMuX2FkZEZvcm1WaWV3KCk7XG5cdFx0fSApO1xuXG5cdFx0Ly8gRXhlY3V0ZSB1bmxpbmsgY29tbWFuZCBhZnRlciBjbGlja2luZyBvbiB0aGUgXCJVbmxpbmtcIiBidXR0b24uXG5cdFx0dGhpcy5saXN0ZW5UbyggYWN0aW9uc1ZpZXcsICdjYW5jZWx0ZW1wbGF0ZScsICgpID0+IHtcblx0XHRcdGVkaXRvci5leGVjdXRlKCAnY2FuY2VsdGVtcGxhdGUnICk7XG5cdFx0XHR0aGlzLl9oaWRlVUkoKTtcblx0XHR9ICk7XG5cblx0XHQvLyBDbG9zZSB0aGUgcGFuZWwgb24gZXNjIGtleSBwcmVzcyB3aGVuIHRoZSAqKmFjdGlvbnMgaGF2ZSBmb2N1cyoqLlxuXHRcdGFjdGlvbnNWaWV3LmtleXN0cm9rZXMuc2V0KCAnRXNjJywgKCBkYXRhLCBjYW5jZWwgKSA9PiB7XG5cdFx0XHR0aGlzLl9oaWRlVUkoKTtcblx0XHRcdGNhbmNlbCgpO1xuXHRcdH0gKTtcblxuXHRcdC8vIE9wZW4gdGhlIGZvcm0gdmlldyBvbiBDdHJsK0sgd2hlbiB0aGUgKiphY3Rpb25zIGhhdmUgZm9jdXMqKi4uXG5cdFx0YWN0aW9uc1ZpZXcua2V5c3Ryb2tlcy5zZXQoIFRFTVBMQVRFX0tFWVNUUk9LRSwgKCBkYXRhLCBjYW5jZWwgKSA9PiB7XG5cdFx0XHR0aGlzLl9hZGRGb3JtVmlldygpO1xuXHRcdFx0Y2FuY2VsKCk7XG5cdFx0fSApO1xuXG5cdFx0cmV0dXJuIGFjdGlvbnNWaWV3O1xuXHR9XG5cblx0X2NyZWF0ZVNhdmVWaWV3KCkge1xuXHRcdGNvbnN0IGVkaXRvciA9IHRoaXMuZWRpdG9yO1xuXHRcdGNvbnN0IGFjdGlvbnNWaWV3ID0gbmV3IFRlbXBsYXRlU2F2ZVZpZXcoIGVkaXRvci5sb2NhbGUgKTtcblxuXHRcdC8vIEV4ZWN1dGUgdW5saW5rIGNvbW1hbmQgYWZ0ZXIgY2xpY2tpbmcgb24gdGhlIFwiRWRpdFwiIGJ1dHRvbi5cblx0XHR0aGlzLmxpc3RlblRvKCBhY3Rpb25zVmlldywgJ3NhdmUnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLl9hZGRGb3JtVmlldygpO1xuXHRcdH0gKTtcblxuXHRcdC8vIEV4ZWN1dGUgdW5saW5rIGNvbW1hbmQgYWZ0ZXIgY2xpY2tpbmcgb24gdGhlIFwiVW5saW5rXCIgYnV0dG9uLlxuXHRcdHRoaXMubGlzdGVuVG8oIGFjdGlvbnNWaWV3LCAnY2FuY2VsdGVtcGxhdGUnLCAoKSA9PiB7XG5cdFx0XHRlZGl0b3IuZXhlY3V0ZSggJ2NhbmNlbHRlbXBsYXRlJyApO1xuXHRcdFx0dGhpcy5faGlkZVVJKCk7XG5cdFx0fSApO1xuXG5cdFx0Ly8gQ2xvc2UgdGhlIHBhbmVsIG9uIGVzYyBrZXkgcHJlc3Mgd2hlbiB0aGUgKiphY3Rpb25zIGhhdmUgZm9jdXMqKi5cblx0XHRhY3Rpb25zVmlldy5rZXlzdHJva2VzLnNldCggJ0VzYycsICggZGF0YSwgY2FuY2VsICkgPT4ge1xuXHRcdFx0dGhpcy5faGlkZVVJKCk7XG5cdFx0XHRjYW5jZWwoKTtcblx0XHR9ICk7XG5cblxuXG5cdFx0cmV0dXJuIGFjdGlvbnNWaWV3O1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgdGhlIHtAbGluayBtb2R1bGU6bGluay91aS9saW5rZm9ybXZpZXd+TGlua0Zvcm1WaWV3fSBpbnN0YW5jZS5cblx0ICpcblx0ICogQHByaXZhdGVcblx0ICogQHJldHVybnMge21vZHVsZTpsaW5rL3VpL2xpbmtmb3Jtdmlld35MaW5rRm9ybVZpZXd9IFRoZSBsaW5rIGZvcm0gdmlldyBpbnN0YW5jZS5cblx0ICovXG5cdF9jcmVhdGVGb3JtVmlldygpIHtcblx0XHRjb25zdCBlZGl0b3IgPSB0aGlzLmVkaXRvcjtcblx0XHRjb25zdCB0ZW1wbGF0ZUNvbW1hbmQgPSBlZGl0b3IuY29tbWFuZHMuZ2V0KCAndGVtcGxhdGUnICk7XG5cblx0XHRjb25zdCBmb3JtVmlldyA9IG5ldyBUZW1wbGF0ZUZvcm1WaWV3KCBlZGl0b3IubG9jYWxlLCB0ZW1wbGF0ZUNvbW1hbmQgKTtcblxuXHRcdGZvcm1WaWV3LmxhYmVsSW5wdXRWaWV3LmZpZWxkVmlldy5iaW5kKCAndmFsdWUnICkudG8oIHRlbXBsYXRlQ29tbWFuZCwgJ3ZhbHVlJyApO1xuXG5cdFx0Ly8gRm9ybSBlbGVtZW50cyBzaG91bGQgYmUgcmVhZC1vbmx5IHdoZW4gY29ycmVzcG9uZGluZyBjb21tYW5kcyBhcmUgZGlzYWJsZWQuXG5cdFx0Zm9ybVZpZXcubGFiZWxJbnB1dFZpZXcuYmluZCggJ2lzUmVhZE9ubHknICkudG8oIHRlbXBsYXRlQ29tbWFuZCwgJ2lzRW5hYmxlZCcsIHZhbHVlID0+ICF2YWx1ZSApO1xuXG5cdFx0Zm9ybVZpZXcuc2F2ZUJ1dHRvblZpZXcuYmluZCggJ2lzRW5hYmxlZCcgKS50byggdGVtcGxhdGVDb21tYW5kICk7XG5cblx0XHQvLyBFeGVjdXRlIGxpbmsgY29tbWFuZCBhZnRlciBjbGlja2luZyB0aGUgXCJTYXZlXCIgYnV0dG9uLlxuXHRcdHRoaXMubGlzdGVuVG8oIGZvcm1WaWV3LCAnc3VibWl0JywgKCkgPT4ge1xuXHRcdFx0Y29uc3Qge2xhYmVsfSAgPSBmb3JtVmlldy50eXBlSW5wdXRWaWV3LmZpZWxkVmlldy5idXR0b25WaWV3O1xuXHRcdFx0Y29uc3QgdGVtcGxhdGVWYXIgPSB7XG5cdFx0XHRcdGlkIDogZm9ybVZpZXcubGFiZWxJbnB1dFZpZXcuZmllbGRWaWV3LmVsZW1lbnQudmFsdWUsXG5cdFx0XHRcdHR5cGUgOiBsYWJlbFxuXHRcdFx0fVxuXHRcdFx0Ly8gY29uc3QgeyB2YWx1ZSB9ID0gZm9ybVZpZXcubGFiZWxJbnB1dFZpZXcuZmllbGRWaWV3LmVsZW1lbnQ7XG5cdFx0XHQvLyBjb25zdCBwYXJzZWRVcmwgPSBhZGRMaW5rUHJvdG9jb2xJZkFwcGxpY2FibGUoIHZhbHVlLCBkZWZhdWx0UHJvdG9jb2wgKTtcblx0XHRcdGVkaXRvci5leGVjdXRlKCAndGVtcGxhdGUnLCB0ZW1wbGF0ZVZhciwgZm9ybVZpZXcuZ2V0RGVjb3JhdG9yU3dpdGNoZXNTdGF0ZSgpICk7XG5cdFx0XHR0aGlzLl9jbG9zZUZvcm1WaWV3KCk7XG5cdFx0fSApO1xuXG5cdFx0Ly8gSGlkZSB0aGUgcGFuZWwgYWZ0ZXIgY2xpY2tpbmcgdGhlIFwiQ2FuY2VsXCIgYnV0dG9uLlxuXHRcdHRoaXMubGlzdGVuVG8oIGZvcm1WaWV3LCAnY2FuY2VsJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5fY2xvc2VGb3JtVmlldygpO1xuXHRcdH0gKTtcblxuXHRcdC8vIENsb3NlIHRoZSBwYW5lbCBvbiBlc2Mga2V5IHByZXNzIHdoZW4gdGhlICoqZm9ybSBoYXMgZm9jdXMqKi5cblx0XHRmb3JtVmlldy5rZXlzdHJva2VzLnNldCggJ0VzYycsICggZGF0YSwgY2FuY2VsICkgPT4ge1xuXHRcdFx0dGhpcy5fY2xvc2VGb3JtVmlldygpO1xuXHRcdFx0Y2FuY2VsKCk7XG5cdFx0fSApO1xuXG5cdFx0cmV0dXJuIGZvcm1WaWV3O1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSB0b29sYmFyIFRlbXBsYXRlIGJ1dHRvbi4gQ2xpY2tpbmcgdGhpcyBidXR0b24gd2lsbCBzaG93XG5cdCAqIGEge0BsaW5rICNfYmFsbG9vbn0gYXR0YWNoZWQgdG8gdGhlIHNlbGVjdGlvbi5cblx0ICpcblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9jcmVhdGVUb29sYmFyTGlua0J1dHRvbigpIHtcblx0XHRjb25zdCBlZGl0b3IgPSB0aGlzLmVkaXRvcjtcblx0XHRjb25zdCB0ZW1wbGF0ZUNvbW1hbmQgPSBlZGl0b3IuY29tbWFuZHMuZ2V0KCAndGVtcGxhdGUnICk7XG5cdFx0Y29uc3QgdCA9IGVkaXRvci50O1xuXG5cdFx0Ly8gSGFuZGxlIHRoZSBgQ3RybCtLYCBrZXlzdHJva2UgYW5kIHNob3cgdGhlIHBhbmVsLlxuXHRcdGVkaXRvci5rZXlzdHJva2VzLnNldCggVEVNUExBVEVfS0VZU1RST0tFLCAoIGtleUV2dERhdGEsIGNhbmNlbCApID0+IHtcblx0XHRcdC8vIFByZXZlbnQgZm9jdXNpbmcgdGhlIHNlYXJjaCBiYXIgaW4gRkYsIENocm9tZSBhbmQgRWRnZS4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ja2VkaXRvci9ja2VkaXRvcjUvaXNzdWVzLzQ4MTEuXG5cdFx0XHRjYW5jZWwoKTtcblxuXHRcdFx0aWYgKCB0ZW1wbGF0ZUNvbW1hbmQuaXNFbmFibGVkICkge1xuXHRcdFx0XHR0aGlzLl9zaG93VUkoIHRydWUgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0XHRlZGl0b3IudWkuY29tcG9uZW50RmFjdG9yeS5hZGQoICd0ZW1wbGF0ZScsIGxvY2FsZSA9PiB7XG5cdFx0XHRjb25zdCBidXR0b24gPSBuZXcgQnV0dG9uVmlldyggbG9jYWxlICk7XG5cblx0XHRcdGJ1dHRvbi5pc0VuYWJsZWQgPSB0cnVlO1xuXHRcdFx0YnV0dG9uLmxhYmVsID0gdCggJ1ZhciBEZWZpbmUnICk7XG5cdFx0XHRidXR0b24uaWNvbiA9IFRlbWxhdGVJY29uO1xuXHRcdFx0YnV0dG9uLmtleXN0cm9rZSA9IFRFTVBMQVRFX0tFWVNUUk9LRTtcblx0XHRcdGJ1dHRvbi50b29sdGlwID0gdHJ1ZTtcblx0XHRcdGJ1dHRvbi5pc1RvZ2dsZWFibGUgPSB0cnVlO1xuXG5cdFx0XHQvLyBCaW5kIGJ1dHRvbiB0byB0aGUgY29tbWFuZC5cblx0XHRcdGJ1dHRvbi5iaW5kKCAnaXNFbmFibGVkJyApLnRvKCB0ZW1wbGF0ZUNvbW1hbmQsICdpc0VuYWJsZWQnICk7XG5cdFx0XHRidXR0b24uYmluZCggJ2lzT24nICkudG8oIHRlbXBsYXRlQ29tbWFuZCwgJ3ZhbHVlJywgdmFsdWUgPT4gISF2YWx1ZSApO1xuXG5cdFx0XHQvLyBTaG93IHRoZSBwYW5lbCBvbiBidXR0b24gY2xpY2suXG5cdFx0XHR0aGlzLmxpc3RlblRvKCBidXR0b24sICdleGVjdXRlJywgKCkgPT4gdGhpcy5fc2hvd1VJKCB0cnVlICkgKTtcblxuXHRcdFx0cmV0dXJuIGJ1dHRvbjtcblx0XHR9ICk7XG5cdFx0ZWRpdG9yLnVpLmNvbXBvbmVudEZhY3RvcnkuYWRkKCAndGVtcGxhdGUtc2F2ZScsIGxvY2FsZSA9PiB7XG5cdFx0XHRjb25zdCBidXR0b24gPSBuZXcgQnV0dG9uVmlldyggbG9jYWxlICk7XG5cblx0XHRcdGJ1dHRvbi5pc0VuYWJsZWQgPSB0cnVlO1xuXHRcdFx0YnV0dG9uLmxhYmVsID0gdCggJ1NhdmUgVGVtcGxhdGUnICk7XG5cdFx0XHRidXR0b24uaWNvbiA9IFNhdmVUZW1wbGF0ZTtcblx0XHRcdGJ1dHRvbi50b29sdGlwID0gdHJ1ZTtcblx0XHRcdGJ1dHRvbi5pc1RvZ2dsZWFibGUgPSB0cnVlO1xuXG5cdFx0XHQvLyBCaW5kIGJ1dHRvbiB0byB0aGUgY29tbWFuZC5cblx0XHRcdGJ1dHRvbi5iaW5kKCAnaXNFbmFibGVkJyApLnRvKCB0ZW1wbGF0ZUNvbW1hbmQsICdpc0VuYWJsZWQnICk7XG5cdFx0XHRidXR0b24uYmluZCggJ2lzT24nICkudG8oIHRlbXBsYXRlQ29tbWFuZCwgJ3ZhbHVlJywgdmFsdWUgPT4gISF2YWx1ZSApO1xuXG5cdFx0XHQvLyBTaG93IHRoZSBwYW5lbCBvbiBidXR0b24gY2xpY2suXG5cdFx0XHR0aGlzLmxpc3RlblRvKCBidXR0b24sICdleGVjdXRlJywgKCkgPT4gdGhpcy5fYWRkU2F2ZVZpZXcoICkgKTtcblxuXHRcdFx0cmV0dXJuIGJ1dHRvbjtcblx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogQXR0YWNoZXMgYWN0aW9ucyB0aGF0IGNvbnRyb2wgd2hldGhlciB0aGUgYmFsbG9vbiBwYW5lbCBjb250YWluaW5nIHRoZVxuXHQgKiB7QGxpbmsgI2Zvcm1WaWV3fSBpcyB2aXNpYmxlIG9yIG5vdC5cblx0ICpcblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9lbmFibGVVc2VyQmFsbG9vbkludGVyYWN0aW9ucygpIHtcblx0XHRjb25zdCB2aWV3RG9jdW1lbnQgPSB0aGlzLmVkaXRvci5lZGl0aW5nLnZpZXcuZG9jdW1lbnQ7XG5cblx0XHQvLyBIYW5kbGUgY2xpY2sgb24gdmlldyBkb2N1bWVudCBhbmQgc2hvdyBwYW5lbCB3aGVuIHNlbGVjdGlvbiBpcyBwbGFjZWQgaW5zaWRlIHRoZSBsaW5rIGVsZW1lbnQuXG5cdFx0Ly8gS2VlcCBwYW5lbCBvcGVuIHVudGlsIHNlbGVjdGlvbiB3aWxsIGJlIGluc2lkZSB0aGUgc2FtZSBsaW5rIGVsZW1lbnQuXG5cdFx0dGhpcy5saXN0ZW5Ubyggdmlld0RvY3VtZW50LCAnY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRjb25zdCBwYXJlbnRMaW5rID0gdGhpcy5fZ2V0U2VsZWN0ZWRMaW5rRWxlbWVudCgpO1xuXG5cdFx0XHRpZiAoIHBhcmVudExpbmsgKSB7XG5cdFx0XHRcdC8vIFRoZW4gc2hvdyBwYW5lbCBidXQga2VlcCBmb2N1cyBpbnNpZGUgZWRpdG9yIGVkaXRhYmxlLlxuXHRcdFx0XHR0aGlzLl9zaG93VUkoKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0XHQvLyBGb2N1cyB0aGUgZm9ybSBpZiB0aGUgYmFsbG9vbiBpcyB2aXNpYmxlIGFuZCB0aGUgVGFiIGtleSBoYXMgYmVlbiBwcmVzc2VkLlxuXHRcdHRoaXMuZWRpdG9yLmtleXN0cm9rZXMuc2V0KCAnVGFiJywgKCBkYXRhLCBjYW5jZWwgKSA9PiB7XG5cdFx0XHRpZiAoIHRoaXMuX2FyZUFjdGlvbnNWaXNpYmxlICYmICF0aGlzLmFjdGlvbnNWaWV3LmZvY3VzVHJhY2tlci5pc0ZvY3VzZWQgKSB7XG5cdFx0XHRcdHRoaXMuYWN0aW9uc1ZpZXcuZm9jdXMoKTtcblx0XHRcdFx0Y2FuY2VsKCk7XG5cdFx0XHR9XG5cdFx0fSwge1xuXHRcdFx0Ly8gVXNlIHRoZSBoaWdoIHByaW9yaXR5IGJlY2F1c2UgdGhlIGxpbmsgVUkgbmF2aWdhdGlvbiBpcyBtb3JlIGltcG9ydGFudFxuXHRcdFx0Ly8gdGhhbiBvdGhlciBmZWF0dXJlJ3MgYWN0aW9ucywgZS5nLiBsaXN0IGluZGVudGF0aW9uLlxuXHRcdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL2NrZWRpdG9yL2NrZWRpdG9yNS1saW5rL2lzc3Vlcy8xNDZcblx0XHRcdHByaW9yaXR5OiAnaGlnaCdcblx0XHR9ICk7XG5cblx0XHQvLyBDbG9zZSB0aGUgcGFuZWwgb24gdGhlIEVzYyBrZXkgcHJlc3Mgd2hlbiB0aGUgZWRpdGFibGUgaGFzIGZvY3VzIGFuZCB0aGUgYmFsbG9vbiBpcyB2aXNpYmxlLlxuXHRcdHRoaXMuZWRpdG9yLmtleXN0cm9rZXMuc2V0KCAnRXNjJywgKCBkYXRhLCBjYW5jZWwgKSA9PiB7XG5cdFx0XHRpZiAoIHRoaXMuX2lzVUlWaXNpYmxlICkge1xuXHRcdFx0XHR0aGlzLl9oaWRlVUkoKTtcblx0XHRcdFx0Y2FuY2VsKCk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0Ly8gQ2xvc2Ugb24gY2xpY2sgb3V0c2lkZSBvZiBiYWxsb29uIHBhbmVsIGVsZW1lbnQuXG5cdFx0Y2xpY2tPdXRzaWRlSGFuZGxlcigge1xuXHRcdFx0ZW1pdHRlcjogdGhpcy5mb3JtVmlldyxcblx0XHRcdGFjdGl2YXRvcjogKCkgPT4gdGhpcy5faXNVSUluUGFuZWwsXG5cdFx0XHRjb250ZXh0RWxlbWVudHM6IFsgdGhpcy5fYmFsbG9vbi52aWV3LmVsZW1lbnQgXSxcblx0XHRcdGNhbGxiYWNrOiAoKSA9PiB0aGlzLl9oaWRlVUkoKVxuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBBZGRzIHRoZSB7QGxpbmsgI2FjdGlvbnNWaWV3fSB0byB0aGUge0BsaW5rICNfYmFsbG9vbn0uXG5cdCAqXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICovXG5cdF9hZGRBY3Rpb25zVmlldygpIHtcblx0XHRpZiAoIHRoaXMuX2FyZUFjdGlvbnNJblBhbmVsICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuX2JhbGxvb24uYWRkKCB7XG5cdFx0XHR2aWV3OiB0aGlzLmFjdGlvbnNWaWV3LFxuXHRcdFx0cG9zaXRpb246IHRoaXMuX2dldEJhbGxvb25Qb3NpdGlvbkRhdGEoKVxuXHRcdH0gKTtcblx0fVxuXHRfYWRkU2F2ZVZpZXcoKSB7XG5cblx0XHRjb25zdCBwb3NpdGlvbnMgPSBCYWxsb29uUGFuZWxWaWV3LmRlZmF1bHRQb3NpdGlvbnM7XG5cdFx0Y29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCAnLmRvY3VtZW50LWVkaXRvcicpO1xuXHRcdGNvbnNvbGUubG9nKHBvc2l0aW9ucy5ub3J0aEFycm93U291dGgpO1xuXHRcdHRoaXMuX3BhbmVsLmNvbnRlbnQuYWRkKHRoaXMuc2F2ZVZpZXdcblxuXG5cdFx0KTtcblx0XHR0aGlzLl9wYW5lbC5yZW5kZXIoKTtcblx0XHR0aGlzLl9wYW5lbC5waW4oIHtcblx0XHRcdHRhcmdldDogdGFyZ2V0LFxuXHRcdFx0cG9zaXRpb25zOiBbXG5cdFx0XHRcdHBvc2l0aW9ucy5ub3J0aEFycm93U291dGgsXG5cdFx0XHRdXG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEFkZHMgdGhlIHtAbGluayAjZm9ybVZpZXd9IHRvIHRoZSB7QGxpbmsgI19iYWxsb29ufS5cblx0ICpcblx0ICogQHByb3RlY3RlZFxuXHQgKi9cblx0X2FkZEZvcm1WaWV3KCkge1xuXHRcdGlmICggdGhpcy5faXNGb3JtSW5QYW5lbCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBlZGl0b3IgPSB0aGlzLmVkaXRvcjtcblx0XHRjb25zdCB0ZW1wbGF0ZUNvbW1hbmQgPSBlZGl0b3IuY29tbWFuZHMuZ2V0KCAndGVtcGxhdGUnICk7XG5cblx0XHR0aGlzLmZvcm1WaWV3LmRpc2FibGVDc3NUcmFuc2l0aW9ucygpO1xuXG5cdFx0dGhpcy5fYmFsbG9vbi5hZGQoIHtcblx0XHRcdHZpZXc6IHRoaXMuZm9ybVZpZXcsXG5cdFx0XHRwb3NpdGlvbjogdGhpcy5fZ2V0QmFsbG9vblBvc2l0aW9uRGF0YSgpXG5cdFx0fSApO1xuXG5cdFx0Ly8gU2VsZWN0IGlucHV0IHdoZW4gZm9ybSB2aWV3IGlzIGN1cnJlbnRseSB2aXNpYmxlLlxuXHRcdGlmICggdGhpcy5fYmFsbG9vbi52aXNpYmxlVmlldyA9PT0gdGhpcy5mb3JtVmlldyApIHtcblx0XHRcdHRoaXMuZm9ybVZpZXcubGFiZWxJbnB1dFZpZXcuZmllbGRWaWV3LnNlbGVjdCgpO1xuXHRcdH1cblxuXHRcdHRoaXMuZm9ybVZpZXcuZW5hYmxlQ3NzVHJhbnNpdGlvbnMoKTtcblxuXHRcdC8vIE1ha2Ugc3VyZSB0aGF0IGVhY2ggdGltZSB0aGUgcGFuZWwgc2hvd3MgdXAsIHRoZSBVUkwgZmllbGQgcmVtYWlucyBpbiBzeW5jIHdpdGggdGhlIHZhbHVlIG9mXG5cdFx0Ly8gdGhlIGNvbW1hbmQuIElmIHRoZSB1c2VyIHR5cGVkIGluIHRoZSBpbnB1dCwgdGhlbiBjYW5jZWxlZCB0aGUgYmFsbG9vbiAoYHVybElucHV0Vmlldy5maWVsZFZpZXcjdmFsdWVgIHN0YXlzXG5cdFx0Ly8gdW5hbHRlcmVkKSBhbmQgcmUtb3BlbmVkIGl0IHdpdGhvdXQgY2hhbmdpbmcgdGhlIHZhbHVlIG9mIHRoZSBsaW5rIGNvbW1hbmQgKGUuZy4gYmVjYXVzZSB0aGV5XG5cdFx0Ly8gY2xpY2tlZCB0aGUgc2FtZSBsaW5rKSwgdGhleSB3b3VsZCBzZWUgdGhlIG9sZCB2YWx1ZSBpbnN0ZWFkIG9mIHRoZSBhY3R1YWwgdmFsdWUgb2YgdGhlIGNvbW1hbmQuXG5cdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL2NrZWRpdG9yL2NrZWRpdG9yNS1saW5rL2lzc3Vlcy83OFxuXHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ja2VkaXRvci9ja2VkaXRvcjUtbGluay9pc3N1ZXMvMTIzXG5cdFx0dGhpcy5mb3JtVmlldy5sYWJlbElucHV0Vmlldy5maWVsZFZpZXcuZWxlbWVudC52YWx1ZSA9IHRlbXBsYXRlQ29tbWFuZC52YWx1ZSB8fCAnJztcblx0fVxuXG5cdC8qKlxuXHQgKiBDbG9zZXMgdGhlIGZvcm0gdmlldy4gRGVjaWRlcyB3aGV0aGVyIHRoZSBiYWxsb29uIHNob3VsZCBiZSBoaWRkZW4gY29tcGxldGVseSBvciBpZiB0aGUgYWN0aW9uIHZpZXcgc2hvdWxkIGJlIHNob3duLiBUaGlzIGlzXG5cdCAqIGRlY2lkZWQgdXBvbiB0aGUgbGluayBjb21tYW5kIHZhbHVlICh3aGljaCBoYXMgYSB2YWx1ZSBpZiB0aGUgZG9jdW1lbnQgc2VsZWN0aW9uIGlzIGluIHRoZSBsaW5rKS5cblx0ICpcblx0ICogQWRkaXRpb25hbGx5LCBpZiBhbnkge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt+TGlua0NvbmZpZyNkZWNvcmF0b3JzfSBhcmUgZGVmaW5lZCBpbiB0aGUgZWRpdG9yIGNvbmZpZ3VyYXRpb24sIHRoZSBzdGF0ZSBvZlxuXHQgKiBzd2l0Y2ggYnV0dG9ucyByZXNwb25zaWJsZSBmb3IgbWFudWFsIGRlY29yYXRvciBoYW5kbGluZyBpcyByZXN0b3JlZC5cblx0ICpcblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9jbG9zZUZvcm1WaWV3KCkge1xuXHRcdGNvbnN0IHRlbXBsYXRlQ29tbWFuZCA9IHRoaXMuZWRpdG9yLmNvbW1hbmRzLmdldCggJ3RlbXBsYXRlJyApO1xuXG5cdFx0Ly8gUmVzdG9yZSBtYW51YWwgZGVjb3JhdG9yIHN0YXRlcyB0byByZXByZXNlbnQgdGhlIGN1cnJlbnQgbW9kZWwgc3RhdGUuIFRoaXMgY2FzZSBpcyBpbXBvcnRhbnQgdG8gcmVzZXQgdGhlIHN3aXRjaCBidXR0b25zXG5cdFx0Ly8gd2hlbiB0aGUgdXNlciBjYW5jZWxzIHRoZSBlZGl0aW5nIGZvcm0uXG5cdFx0dGVtcGxhdGVDb21tYW5kLnJlc3RvcmVNYW51YWxEZWNvcmF0b3JTdGF0ZXMoKTtcblxuXHRcdGlmICggdGVtcGxhdGVDb21tYW5kLnZhbHVlICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHR0aGlzLl9yZW1vdmVGb3JtVmlldygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9oaWRlVUkoKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogUmVtb3ZlcyB0aGUge0BsaW5rICNmb3JtVmlld30gZnJvbSB0aGUge0BsaW5rICNfYmFsbG9vbn0uXG5cdCAqXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICovXG5cdF9yZW1vdmVGb3JtVmlldygpIHtcblx0XHRpZiAoIHRoaXMuX2lzRm9ybUluUGFuZWwgKSB7XG5cdFx0XHQvLyBCbHVyIHRoZSBpbnB1dCBlbGVtZW50IGJlZm9yZSByZW1vdmluZyBpdCBmcm9tIERPTSB0byBwcmV2ZW50IGlzc3VlcyBpbiBzb21lIGJyb3dzZXJzLlxuXHRcdFx0Ly8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ja2VkaXRvci9ja2VkaXRvcjUvaXNzdWVzLzE1MDEuXG5cdFx0XHR0aGlzLmZvcm1WaWV3LnNhdmVCdXR0b25WaWV3LmZvY3VzKCk7XG5cblx0XHRcdHRoaXMuX2JhbGxvb24ucmVtb3ZlKCB0aGlzLmZvcm1WaWV3ICk7XG5cblx0XHRcdC8vIEJlY2F1c2UgdGhlIGZvcm0gaGFzIGFuIGlucHV0IHdoaWNoIGhhcyBmb2N1cywgdGhlIGZvY3VzIG11c3QgYmUgYnJvdWdodCBiYWNrXG5cdFx0XHQvLyB0byB0aGUgZWRpdG9yLiBPdGhlcndpc2UsIGl0IHdvdWxkIGJlIGxvc3QuXG5cdFx0XHR0aGlzLmVkaXRvci5lZGl0aW5nLnZpZXcuZm9jdXMoKTtcblxuXHRcdFx0dGhpcy5faGlkZUZha2VWaXN1YWxTZWxlY3Rpb24oKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogU2hvd3MgdGhlIGNvcnJlY3QgVUkgdHlwZS4gSXQgaXMgZWl0aGVyIHtAbGluayAjZm9ybVZpZXd9IG9yIHtAbGluayAjYWN0aW9uc1ZpZXd9LlxuXHQgKlxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IGZvcmNlVmlzaWJsZVxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X3Nob3dVSSggZm9yY2VWaXNpYmxlID0gZmFsc2UgKSB7XG5cdFx0Ly8gV2hlbiB0aGVyZSdzIG5vIGxpbmsgdW5kZXIgdGhlIHNlbGVjdGlvbiwgZ28gc3RyYWlnaHQgdG8gdGhlIGVkaXRpbmcgVUkuXG5cdFx0aWYgKCAhdGhpcy5fZ2V0U2VsZWN0ZWRMaW5rRWxlbWVudCgpICkge1xuXHRcdFx0Ly8gU2hvdyB2aXN1YWwgc2VsZWN0aW9uIG9uIGEgdGV4dCB3aXRob3V0IGEgbGluayB3aGVuIHRoZSBjb250ZXh0dWFsIGJhbGxvb24gaXMgZGlzcGxheWVkLlxuXHRcdFx0Ly8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ja2VkaXRvci9ja2VkaXRvcjUvaXNzdWVzLzQ3MjEuXG5cdFx0XHR0aGlzLl9zaG93RmFrZVZpc3VhbFNlbGVjdGlvbigpO1xuXG5cdFx0XHR0aGlzLl9hZGRBY3Rpb25zVmlldygpO1xuXG5cdFx0XHQvLyBCZSBzdXJlIHBhbmVsIHdpdGggbGluayBpcyB2aXNpYmxlLlxuXHRcdFx0aWYgKCBmb3JjZVZpc2libGUgKSB7XG5cdFx0XHRcdHRoaXMuX2JhbGxvb24uc2hvd1N0YWNrKCAnbWFpbicgKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fYWRkRm9ybVZpZXcoKTtcblx0XHR9XG5cdFx0Ly8gSWYgdGhlcmUncyBhIGxpbmsgdW5kZXIgdGhlIHNlbGVjdGlvbi4uLlxuXHRcdGVsc2Uge1xuXHRcdFx0Ly8gR28gdG8gdGhlIGVkaXRpbmcgVUkgaWYgYWN0aW9ucyBhcmUgYWxyZWFkeSB2aXNpYmxlLlxuXHRcdFx0aWYgKCB0aGlzLl9hcmVBY3Rpb25zVmlzaWJsZSApIHtcblx0XHRcdFx0dGhpcy5fYWRkRm9ybVZpZXcoKTtcblx0XHRcdH1cblx0XHRcdC8vIE90aGVyd2lzZSBkaXNwbGF5IGp1c3QgdGhlIGFjdGlvbnMgVUkuXG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dGhpcy5fYWRkQWN0aW9uc1ZpZXcoKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQmUgc3VyZSBwYW5lbCB3aXRoIGxpbmsgaXMgdmlzaWJsZS5cblx0XHRcdGlmICggZm9yY2VWaXNpYmxlICkge1xuXHRcdFx0XHR0aGlzLl9iYWxsb29uLnNob3dTdGFjayggJ21haW4nICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQmVnaW4gcmVzcG9uZGluZyB0byB1aSN1cGRhdGUgb25jZSB0aGUgVUkgaXMgYWRkZWQuXG5cdFx0dGhpcy5fc3RhcnRVcGRhdGluZ1VJKCk7XG5cdH1cblxuXHQvKipcblx0ICogUmVtb3ZlcyB0aGUge0BsaW5rICNmb3JtVmlld30gZnJvbSB0aGUge0BsaW5rICNfYmFsbG9vbn0uXG5cdCAqXG5cdCAqIFNlZSB7QGxpbmsgI19hZGRGb3JtVmlld30sIHtAbGluayAjX2FkZEFjdGlvbnNWaWV3fS5cblx0ICpcblx0ICogQHByb3RlY3RlZFxuXHQgKi9cblx0X2hpZGVVSSgpIHtcblx0XHRpZiAoICF0aGlzLl9pc1VJSW5QYW5lbCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBlZGl0b3IgPSB0aGlzLmVkaXRvcjtcblxuXHRcdHRoaXMuc3RvcExpc3RlbmluZyggZWRpdG9yLnVpLCAndXBkYXRlJyApO1xuXHRcdHRoaXMuc3RvcExpc3RlbmluZyggdGhpcy5fYmFsbG9vbiwgJ2NoYW5nZTp2aXNpYmxlVmlldycgKTtcblxuXHRcdC8vIE1ha2Ugc3VyZSB0aGUgZm9jdXMgYWx3YXlzIGdldHMgYmFjayB0byB0aGUgZWRpdGFibGUgX2JlZm9yZV8gcmVtb3ZpbmcgdGhlIGZvY3VzZWQgZm9ybSB2aWV3LlxuXHRcdC8vIERvaW5nIG90aGVyd2lzZSBjYXVzZXMgaXNzdWVzIGluIHNvbWUgYnJvd3NlcnMuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vY2tlZGl0b3IvY2tlZGl0b3I1LWxpbmsvaXNzdWVzLzE5My5cblx0XHRlZGl0b3IuZWRpdGluZy52aWV3LmZvY3VzKCk7XG5cblx0XHQvLyBSZW1vdmUgZm9ybSBmaXJzdCBiZWNhdXNlIGl0J3Mgb24gdG9wIG9mIHRoZSBzdGFjay5cblx0XHR0aGlzLl9yZW1vdmVGb3JtVmlldygpO1xuXG5cdFx0Ly8gVGhlbiByZW1vdmUgdGhlIGFjdGlvbnMgdmlldyBiZWNhdXNlIGl0J3MgYmVuZWF0aCB0aGUgZm9ybS5cblx0XHR0aGlzLl9iYWxsb29uLnJlbW92ZSggdGhpcy5hY3Rpb25zVmlldyApO1xuXG5cdFx0dGhpcy5faGlkZUZha2VWaXN1YWxTZWxlY3Rpb24oKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBNYWtlcyB0aGUgVUkgcmVhY3QgdG8gdGhlIHtAbGluayBtb2R1bGU6Y29yZS9lZGl0b3IvZWRpdG9ydWl+RWRpdG9yVUkjZXZlbnQ6dXBkYXRlfSBldmVudCB0b1xuXHQgKiByZXBvc2l0aW9uIGl0c2VsZiB3aGVuIHRoZSBlZGl0b3IgVUkgc2hvdWxkIGJlIHJlZnJlc2hlZC5cblx0ICpcblx0ICogU2VlOiB7QGxpbmsgI19oaWRlVUl9IHRvIGxlYXJuIHdoZW4gdGhlIFVJIHN0b3BzIHJlYWN0aW5nIHRvIHRoZSBgdXBkYXRlYCBldmVudC5cblx0ICpcblx0ICogQHByb3RlY3RlZFxuXHQgKi9cblx0X3N0YXJ0VXBkYXRpbmdVSSgpIHtcblx0XHRjb25zdCBlZGl0b3IgPSB0aGlzLmVkaXRvcjtcblx0XHRjb25zdCB2aWV3RG9jdW1lbnQgPSBlZGl0b3IuZWRpdGluZy52aWV3LmRvY3VtZW50O1xuXG5cdFx0bGV0IHByZXZTZWxlY3RlZExpbmsgPSB0aGlzLl9nZXRTZWxlY3RlZExpbmtFbGVtZW50KCk7XG5cdFx0bGV0IHByZXZTZWxlY3Rpb25QYXJlbnQgPSBnZXRTZWxlY3Rpb25QYXJlbnQoKTtcblxuXHRcdGNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcblx0XHRcdGNvbnN0IHNlbGVjdGVkTGluayA9IHRoaXMuX2dldFNlbGVjdGVkTGlua0VsZW1lbnQoKTtcblx0XHRcdGNvbnN0IHNlbGVjdGlvblBhcmVudCA9IGdldFNlbGVjdGlvblBhcmVudCgpO1xuXG5cdFx0XHQvLyBIaWRlIHRoZSBwYW5lbCBpZjpcblx0XHRcdC8vXG5cdFx0XHQvLyAqIHRoZSBzZWxlY3Rpb24gd2VudCBvdXQgb2YgdGhlIEVYSVNUSU5HIGxpbmsgZWxlbWVudC4gRS5nLiB1c2VyIG1vdmVkIHRoZSBjYXJldCBvdXRcblx0XHRcdC8vICAgb2YgdGhlIGxpbmssXG5cdFx0XHQvLyAqIHRoZSBzZWxlY3Rpb24gd2VudCB0byBhIGRpZmZlcmVudCBwYXJlbnQgd2hlbiBjcmVhdGluZyBhIE5FVyBsaW5rLiBFLmcuIHNvbWVvbmVcblx0XHRcdC8vICAgZWxzZSBtb2RpZmllZCB0aGUgZG9jdW1lbnQuXG5cdFx0XHQvLyAqIHRoZSBzZWxlY3Rpb24gaGFzIGV4cGFuZGVkIChlLmcuIGRpc3BsYXlpbmcgbGluayBhY3Rpb25zIHRoZW4gcHJlc3NpbmcgU0hJRlQrUmlnaHQgYXJyb3cpLlxuXHRcdFx0Ly9cblx0XHRcdC8vIE5vdGU6ICNfZ2V0U2VsZWN0ZWRMaW5rRWxlbWVudCB3aWxsIHJldHVybiBhIGxpbmsgZm9yIGEgbm9uLWNvbGxhcHNlZCBzZWxlY3Rpb24gb25seVxuXHRcdFx0Ly8gd2hlbiBmdWxseSBzZWxlY3RlZC5cblx0XHRcdGlmICggKCBwcmV2U2VsZWN0ZWRMaW5rICYmICFzZWxlY3RlZExpbmsgKSB8fFxuXHRcdFx0XHQoICFwcmV2U2VsZWN0ZWRMaW5rICYmIHNlbGVjdGlvblBhcmVudCAhPT0gcHJldlNlbGVjdGlvblBhcmVudCApICkge1xuXHRcdFx0XHR0aGlzLl9oaWRlVUkoKTtcblx0XHRcdH1cblx0XHRcdC8vIFVwZGF0ZSB0aGUgcG9zaXRpb24gb2YgdGhlIHBhbmVsIHdoZW46XG5cdFx0XHQvLyAgKiBsaW5rIHBhbmVsIGlzIGluIHRoZSB2aXNpYmxlIHN0YWNrXG5cdFx0XHQvLyAgKiB0aGUgc2VsZWN0aW9uIHJlbWFpbnMgaW4gdGhlIG9yaWdpbmFsIGxpbmsgZWxlbWVudCxcblx0XHRcdC8vICAqIHRoZXJlIHdhcyBubyBsaW5rIGVsZW1lbnQgaW4gdGhlIGZpcnN0IHBsYWNlLCBpLmUuIGNyZWF0aW5nIGEgbmV3IGxpbmtcblx0XHRcdGVsc2UgaWYgKCB0aGlzLl9pc1VJVmlzaWJsZSApIHtcblx0XHRcdFx0Ly8gSWYgc3RpbGwgaW4gYSBsaW5rIGVsZW1lbnQsIHNpbXBseSB1cGRhdGUgdGhlIHBvc2l0aW9uIG9mIHRoZSBiYWxsb29uLlxuXHRcdFx0XHQvLyBJZiB0aGVyZSB3YXMgbm8gbGluayAoZS5nLiBpbnNlcnRpbmcgb25lKSwgdGhlIGJhbGxvb24gbXVzdCBiZSBtb3ZlZFxuXHRcdFx0XHQvLyB0byB0aGUgbmV3IHBvc2l0aW9uIGluIHRoZSBlZGl0aW5nIHZpZXcgKGEgbmV3IG5hdGl2ZSBET00gcmFuZ2UpLlxuXHRcdFx0XHR0aGlzLl9iYWxsb29uLnVwZGF0ZVBvc2l0aW9uKCB0aGlzLl9nZXRCYWxsb29uUG9zaXRpb25EYXRhKCkgKTtcblx0XHRcdH1cblxuXHRcdFx0cHJldlNlbGVjdGVkTGluayA9IHNlbGVjdGVkTGluaztcblx0XHRcdHByZXZTZWxlY3Rpb25QYXJlbnQgPSBzZWxlY3Rpb25QYXJlbnQ7XG5cdFx0fTtcblxuXHRcdGZ1bmN0aW9uIGdldFNlbGVjdGlvblBhcmVudCgpIHtcblx0XHRcdHJldHVybiB2aWV3RG9jdW1lbnQuc2VsZWN0aW9uLmZvY3VzLmdldEFuY2VzdG9ycygpXG5cdFx0XHRcdC5yZXZlcnNlKClcblx0XHRcdFx0LmZpbmQoIG5vZGUgPT4gbm9kZS5pcyggJ2VsZW1lbnQnICkgKTtcblx0XHR9XG5cblx0XHR0aGlzLmxpc3RlblRvKCBlZGl0b3IudWksICd1cGRhdGUnLCB1cGRhdGUgKTtcblx0XHR0aGlzLmxpc3RlblRvKCB0aGlzLl9iYWxsb29uLCAnY2hhbmdlOnZpc2libGVWaWV3JywgdXBkYXRlICk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBgdHJ1ZWAgd2hlbiB7QGxpbmsgI2Zvcm1WaWV3fSBpcyBpbiB0aGUge0BsaW5rICNfYmFsbG9vbn0uXG5cdCAqXG5cdCAqIEByZWFkb25seVxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEB0eXBlIHtCb29sZWFufVxuXHQgKi9cblx0Z2V0IF9pc0Zvcm1JblBhbmVsKCkge1xuXHRcdHJldHVybiB0aGlzLl9iYWxsb29uLmhhc1ZpZXcoIHRoaXMuZm9ybVZpZXcgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIGB0cnVlYCB3aGVuIHtAbGluayAjYWN0aW9uc1ZpZXd9IGlzIGluIHRoZSB7QGxpbmsgI19iYWxsb29ufS5cblx0ICpcblx0ICogQHJlYWRvbmx5XG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHR5cGUge0Jvb2xlYW59XG5cdCAqL1xuXHRnZXQgX2FyZUFjdGlvbnNJblBhbmVsKCkge1xuXHRcdHJldHVybiB0aGlzLl9iYWxsb29uLmhhc1ZpZXcoIHRoaXMuYWN0aW9uc1ZpZXcgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIGB0cnVlYCB3aGVuIHtAbGluayAjYWN0aW9uc1ZpZXd9IGlzIGluIHRoZSB7QGxpbmsgI19iYWxsb29ufSBhbmQgaXQgaXNcblx0ICogY3VycmVudGx5IHZpc2libGUuXG5cdCAqXG5cdCAqIEByZWFkb25seVxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEB0eXBlIHtCb29sZWFufVxuXHQgKi9cblx0Z2V0IF9hcmVBY3Rpb25zVmlzaWJsZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fYmFsbG9vbi52aXNpYmxlVmlldyA9PT0gdGhpcy5hY3Rpb25zVmlldztcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIGB0cnVlYCB3aGVuIHtAbGluayAjYWN0aW9uc1ZpZXd9IG9yIHtAbGluayAjZm9ybVZpZXd9IGlzIGluIHRoZSB7QGxpbmsgI19iYWxsb29ufS5cblx0ICpcblx0ICogQHJlYWRvbmx5XG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHR5cGUge0Jvb2xlYW59XG5cdCAqL1xuXHRnZXQgX2lzVUlJblBhbmVsKCkge1xuXHRcdHJldHVybiB0aGlzLl9pc0Zvcm1JblBhbmVsIHx8IHRoaXMuX2FyZUFjdGlvbnNJblBhbmVsO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgYHRydWVgIHdoZW4ge0BsaW5rICNhY3Rpb25zVmlld30gb3Ige0BsaW5rICNmb3JtVmlld30gaXMgaW4gdGhlIHtAbGluayAjX2JhbGxvb259IGFuZCBpdCBpc1xuXHQgKiBjdXJyZW50bHkgdmlzaWJsZS5cblx0ICpcblx0ICogQHJlYWRvbmx5XG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHR5cGUge0Jvb2xlYW59XG5cdCAqL1xuXHRnZXQgX2lzVUlWaXNpYmxlKCkge1xuXHRcdGNvbnN0IHZpc2libGVWaWV3ID0gdGhpcy5fYmFsbG9vbi52aXNpYmxlVmlldztcblxuXHRcdHJldHVybiB2aXNpYmxlVmlldyA9PSB0aGlzLmZvcm1WaWV3IHx8IHRoaXMuX2FyZUFjdGlvbnNWaXNpYmxlO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgcG9zaXRpb25pbmcgb3B0aW9ucyBmb3IgdGhlIHtAbGluayAjX2JhbGxvb259LiBUaGV5IGNvbnRyb2wgdGhlIHdheSB0aGUgYmFsbG9vbiBpcyBhdHRhY2hlZFxuXHQgKiB0byB0aGUgdGFyZ2V0IGVsZW1lbnQgb3Igc2VsZWN0aW9uLlxuXHQgKlxuXHQgKiBJZiB0aGUgc2VsZWN0aW9uIGlzIGNvbGxhcHNlZCBhbmQgaW5zaWRlIGEgbGluayBlbGVtZW50LCB0aGUgcGFuZWwgd2lsbCBiZSBhdHRhY2hlZCB0byB0aGVcblx0ICogZW50aXJlIGxpbmsgZWxlbWVudC4gT3RoZXJ3aXNlLCBpdCB3aWxsIGJlIGF0dGFjaGVkIHRvIHRoZSBzZWxlY3Rpb24uXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEByZXR1cm5zIHttb2R1bGU6dXRpbHMvZG9tL3Bvc2l0aW9ufk9wdGlvbnN9XG5cdCAqL1xuXHRfZ2V0QmFsbG9vblBvc2l0aW9uRGF0YSgpIHtcblx0XHRjb25zdCB2aWV3ID0gdGhpcy5lZGl0b3IuZWRpdGluZy52aWV3O1xuXHRcdGNvbnN0IG1vZGVsID0gdGhpcy5lZGl0b3IubW9kZWw7XG5cdFx0Y29uc3Qgdmlld0RvY3VtZW50ID0gdmlldy5kb2N1bWVudDtcblx0XHRsZXQgdGFyZ2V0ID0gbnVsbDtcblxuXHRcdGlmICggbW9kZWwubWFya2Vycy5oYXMoIFZJU1VBTF9TRUxFQ1RJT05fTUFSS0VSX05BTUUgKSApIHtcblx0XHRcdC8vIFRoZXJlIGFyZSBjYXNlcyB3aGVuIHdlIGhpZ2hsaWdodCBzZWxlY3Rpb24gdXNpbmcgYSBtYXJrZXIgKCM3NzA1LCAjNDcyMSkuXG5cdFx0XHRjb25zdCBtYXJrZXJWaWV3RWxlbWVudHMgPSBBcnJheS5mcm9tKCB0aGlzLmVkaXRvci5lZGl0aW5nLm1hcHBlci5tYXJrZXJOYW1lVG9FbGVtZW50cyggVklTVUFMX1NFTEVDVElPTl9NQVJLRVJfTkFNRSApICk7XG5cdFx0XHRjb25zdCBuZXdSYW5nZSA9IHZpZXcuY3JlYXRlUmFuZ2UoXG5cdFx0XHRcdHZpZXcuY3JlYXRlUG9zaXRpb25CZWZvcmUoIG1hcmtlclZpZXdFbGVtZW50c1sgMCBdICksXG5cdFx0XHRcdHZpZXcuY3JlYXRlUG9zaXRpb25BZnRlciggbWFya2VyVmlld0VsZW1lbnRzWyBtYXJrZXJWaWV3RWxlbWVudHMubGVuZ3RoIC0gMSBdIClcblx0XHRcdCk7XG5cblx0XHRcdHRhcmdldCA9IHZpZXcuZG9tQ29udmVydGVyLnZpZXdSYW5nZVRvRG9tKCBuZXdSYW5nZSApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCB0YXJnZXRMaW5rID0gdGhpcy5fZ2V0U2VsZWN0ZWRMaW5rRWxlbWVudCgpO1xuXHRcdFx0Y29uc3QgcmFuZ2UgPSB2aWV3RG9jdW1lbnQuc2VsZWN0aW9uLmdldEZpcnN0UmFuZ2UoKTtcblxuXHRcdFx0dGFyZ2V0ID0gdGFyZ2V0TGluayA/XG5cdFx0XHRcdC8vIFdoZW4gc2VsZWN0aW9uIGlzIGluc2lkZSBsaW5rIGVsZW1lbnQsIHRoZW4gYXR0YWNoIHBhbmVsIHRvIHRoaXMgZWxlbWVudC5cblx0XHRcdFx0dmlldy5kb21Db252ZXJ0ZXIubWFwVmlld1RvRG9tKCB0YXJnZXRMaW5rICkgOlxuXHRcdFx0XHQvLyBPdGhlcndpc2UgYXR0YWNoIHBhbmVsIHRvIHRoZSBzZWxlY3Rpb24uXG5cdFx0XHRcdHZpZXcuZG9tQ29udmVydGVyLnZpZXdSYW5nZVRvRG9tKCByYW5nZSApO1xuXHRcdH1cblxuXHRcdHJldHVybiB7IHRhcmdldCB9O1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIGxpbmsge0BsaW5rIG1vZHVsZTplbmdpbmUvdmlldy9hdHRyaWJ1dGVlbGVtZW50fkF0dHJpYnV0ZUVsZW1lbnR9IHVuZGVyXG5cdCAqIHRoZSB7QGxpbmsgbW9kdWxlOmVuZ2luZS92aWV3L2RvY3VtZW50fkRvY3VtZW50IGVkaXRpbmcgdmlldydzfSBzZWxlY3Rpb24gb3IgYG51bGxgXG5cdCAqIGlmIHRoZXJlIGlzIG5vbmUuXG5cdCAqXG5cdCAqICoqTm90ZSoqOiBGb3IgYSBub27igJNjb2xsYXBzZWQgc2VsZWN0aW9uLCB0aGUgbGluayBlbGVtZW50IGlzIG9ubHkgcmV0dXJuZWQgd2hlbiAqKmZ1bGx5Kipcblx0ICogc2VsZWN0ZWQgYW5kIHRoZSAqKm9ubHkqKiBlbGVtZW50IHdpdGhpbiB0aGUgc2VsZWN0aW9uIGJvdW5kYXJpZXMuXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEByZXR1cm5zIHttb2R1bGU6ZW5naW5lL3ZpZXcvYXR0cmlidXRlZWxlbWVudH5BdHRyaWJ1dGVFbGVtZW50fG51bGx9XG5cdCAqL1xuXHRfZ2V0U2VsZWN0ZWRMaW5rRWxlbWVudCgpIHtcblx0XHRjb25zdCB2aWV3ID0gdGhpcy5lZGl0b3IuZWRpdGluZy52aWV3O1xuXHRcdGNvbnN0IHNlbGVjdGlvbiA9IHZpZXcuZG9jdW1lbnQuc2VsZWN0aW9uO1xuXG5cdFx0aWYgKCBzZWxlY3Rpb24uaXNDb2xsYXBzZWQgKSB7XG5cdFx0XHRyZXR1cm4gZmluZExpbmtFbGVtZW50QW5jZXN0b3IoIHNlbGVjdGlvbi5nZXRGaXJzdFBvc2l0aW9uKCkgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gVGhlIHJhbmdlIGZvciBmdWxseSBzZWxlY3RlZCBsaW5rIGlzIHVzdWFsbHkgYW5jaG9yZWQgaW4gYWRqYWNlbnQgdGV4dCBub2Rlcy5cblx0XHRcdC8vIFRyaW0gaXQgdG8gZ2V0IGNsb3NlciB0byB0aGUgYWN0dWFsIGxpbmsgZWxlbWVudC5cblx0XHRcdGNvbnN0IHJhbmdlID0gc2VsZWN0aW9uLmdldEZpcnN0UmFuZ2UoKS5nZXRUcmltbWVkKCk7XG5cdFx0XHRjb25zdCBzdGFydExpbmsgPSBmaW5kTGlua0VsZW1lbnRBbmNlc3RvciggcmFuZ2Uuc3RhcnQgKTtcblx0XHRcdGNvbnN0IGVuZExpbmsgPSBmaW5kTGlua0VsZW1lbnRBbmNlc3RvciggcmFuZ2UuZW5kICk7XG5cblx0XHRcdGlmICggIXN0YXJ0TGluayB8fCBzdGFydExpbmsgIT0gZW5kTGluayApIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdC8vIENoZWNrIGlmIHRoZSBsaW5rIGVsZW1lbnQgaXMgZnVsbHkgc2VsZWN0ZWQuXG5cdFx0XHRpZiAoIHZpZXcuY3JlYXRlUmFuZ2VJbiggc3RhcnRMaW5rICkuZ2V0VHJpbW1lZCgpLmlzRXF1YWwoIHJhbmdlICkgKSB7XG5cdFx0XHRcdHJldHVybiBzdGFydExpbms7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogRGlzcGxheXMgYSBmYWtlIHZpc3VhbCBzZWxlY3Rpb24gd2hlbiB0aGUgY29udGV4dHVhbCBiYWxsb29uIGlzIGRpc3BsYXllZC5cblx0ICpcblx0ICogVGhpcyBhZGRzIGEgJ2xpbmstdWknIG1hcmtlciBpbnRvIHRoZSBkb2N1bWVudCB0aGF0IGlzIHJlbmRlcmVkIGFzIGEgaGlnaGxpZ2h0IG9uIHNlbGVjdGVkIHRleHQgZnJhZ21lbnQuXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfc2hvd0Zha2VWaXN1YWxTZWxlY3Rpb24oKSB7XG5cdFx0Y29uc3QgbW9kZWwgPSB0aGlzLmVkaXRvci5tb2RlbDtcblxuXHRcdG1vZGVsLmNoYW5nZSggd3JpdGVyID0+IHtcblx0XHRcdGNvbnN0IHJhbmdlID0gbW9kZWwuZG9jdW1lbnQuc2VsZWN0aW9uLmdldEZpcnN0UmFuZ2UoKTtcblxuXHRcdFx0aWYgKCBtb2RlbC5tYXJrZXJzLmhhcyggVklTVUFMX1NFTEVDVElPTl9NQVJLRVJfTkFNRSApICkge1xuXHRcdFx0XHR3cml0ZXIudXBkYXRlTWFya2VyKCBWSVNVQUxfU0VMRUNUSU9OX01BUktFUl9OQU1FLCB7IHJhbmdlIH0gKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICggcmFuZ2Uuc3RhcnQuaXNBdEVuZCApIHtcblx0XHRcdFx0XHRjb25zdCBzdGFydFBvc2l0aW9uID0gcmFuZ2Uuc3RhcnQuZ2V0TGFzdE1hdGNoaW5nUG9zaXRpb24oXG5cdFx0XHRcdFx0XHQoIHsgaXRlbSB9ICkgPT4gIW1vZGVsLnNjaGVtYS5pc0NvbnRlbnQoIGl0ZW0gKSxcblx0XHRcdFx0XHRcdHsgYm91bmRhcmllczogcmFuZ2UgfVxuXHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHR3cml0ZXIuYWRkTWFya2VyKCBWSVNVQUxfU0VMRUNUSU9OX01BUktFUl9OQU1FLCB7XG5cdFx0XHRcdFx0XHR1c2luZ09wZXJhdGlvbjogZmFsc2UsXG5cdFx0XHRcdFx0XHRhZmZlY3RzRGF0YTogZmFsc2UsXG5cdFx0XHRcdFx0XHRyYW5nZTogd3JpdGVyLmNyZWF0ZVJhbmdlKCBzdGFydFBvc2l0aW9uLCByYW5nZS5lbmQgKVxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR3cml0ZXIuYWRkTWFya2VyKCBWSVNVQUxfU0VMRUNUSU9OX01BUktFUl9OQU1FLCB7XG5cdFx0XHRcdFx0XHR1c2luZ09wZXJhdGlvbjogZmFsc2UsXG5cdFx0XHRcdFx0XHRhZmZlY3RzRGF0YTogZmFsc2UsXG5cdFx0XHRcdFx0XHRyYW5nZVxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIaWRlcyB0aGUgZmFrZSB2aXN1YWwgc2VsZWN0aW9uIGNyZWF0ZWQgaW4ge0BsaW5rICNfc2hvd0Zha2VWaXN1YWxTZWxlY3Rpb259LlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X2hpZGVGYWtlVmlzdWFsU2VsZWN0aW9uKCkge1xuXHRcdGNvbnN0IG1vZGVsID0gdGhpcy5lZGl0b3IubW9kZWw7XG5cblx0XHRpZiAoIG1vZGVsLm1hcmtlcnMuaGFzKCBWSVNVQUxfU0VMRUNUSU9OX01BUktFUl9OQU1FICkgKSB7XG5cdFx0XHRtb2RlbC5jaGFuZ2UoIHdyaXRlciA9PiB7XG5cdFx0XHRcdHdyaXRlci5yZW1vdmVNYXJrZXIoIFZJU1VBTF9TRUxFQ1RJT05fTUFSS0VSX05BTUUgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cdH1cbn1cblxuLy8gUmV0dXJucyBhIGxpbmsgZWxlbWVudCBpZiB0aGVyZSdzIG9uZSBhbW9uZyB0aGUgYW5jZXN0b3JzIG9mIHRoZSBwcm92aWRlZCBgUG9zaXRpb25gLlxuLy9cbi8vIEBwcml2YXRlXG4vLyBAcGFyYW0ge21vZHVsZTplbmdpbmUvdmlldy9wb3NpdGlvbn5Qb3NpdGlvbn0gVmlldyBwb3NpdGlvbiB0byBhbmFseXplLlxuLy8gQHJldHVybnMge21vZHVsZTplbmdpbmUvdmlldy9hdHRyaWJ1dGVlbGVtZW50fkF0dHJpYnV0ZUVsZW1lbnR8bnVsbH0gVGVtcGxhdGUgZWxlbWVudCBhdCB0aGUgcG9zaXRpb24gb3IgbnVsbC5cbmZ1bmN0aW9uIGZpbmRMaW5rRWxlbWVudEFuY2VzdG9yKCBwb3NpdGlvbiApIHtcblx0cmV0dXJuIHBvc2l0aW9uLmdldEFuY2VzdG9ycygpLmZpbmQoIGFuY2VzdG9yID0+IGlzTGlua0VsZW1lbnQoIGFuY2VzdG9yICkgKTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2UgQ29weXJpZ2h0IChjKSAyMDAzLTIwMjEsIENLU291cmNlIC0gRnJlZGVyaWNvIEtuYWJiZW4uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBGb3IgbGljZW5zaW5nLCBzZWUgTElDRU5TRS5tZCBvciBodHRwczovL2NrZWRpdG9yLmNvbS9sZWdhbC9ja2VkaXRvci1vc3MtbGljZW5zZVxuICovXG5cbi8qKlxuICogQG1vZHVsZSBsaW5rL2xpbmtcbiAqL1xuXG5pbXBvcnQgUGx1Z2luIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtY29yZS9zcmMvcGx1Z2luJztcbmltcG9ydCBUZW1wbGF0ZUVkaXRpbmcgZnJvbSAnLi90ZW1wbGF0ZS1lZGl0aW5nJztcbmltcG9ydCBUZW1wbGF0ZVVpIGZyb20gJy4vdGVtcGxhdGUtdWknO1xuXG4vKipcbiAqIFRoZSBsaW5rIHBsdWdpbi5cbiAqXG4gKiBUaGlzIGlzIGEgXCJnbHVlXCIgcGx1Z2luIHRoYXQgbG9hZHMgdGhlIHtAbGluayBtb2R1bGU6bGluay9saW5rZWRpdGluZ35MaW5rRWRpdGluZyBsaW5rIGVkaXRpbmcgZmVhdHVyZX1cbiAqIGFuZCB7QGxpbmsgbW9kdWxlOmxpbmsvbGlua3VpflRlbXBsYXRlVWkgbGluayBVSSBmZWF0dXJlfS5cbiAqXG4gKiBAZXh0ZW5kcyBtb2R1bGU6Y29yZS9wbHVnaW5+UGx1Z2luXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlbXBsYXRlIGV4dGVuZHMgUGx1Z2luIHtcblx0LyoqXG5cdCAqIEBpbmhlcml0RG9jXG5cdCAqL1xuXHRzdGF0aWMgZ2V0IHJlcXVpcmVzKCkge1xuXHRcdHJldHVybiBbIFRlbXBsYXRlRWRpdGluZywgVGVtcGxhdGVVaSBdO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbmhlcml0RG9jXG5cdCAqL1xuXHRzdGF0aWMgZ2V0IHBsdWdpbk5hbWUoKSB7XG5cdFx0cmV0dXJuICdUZXh0VGVtcGxhdGluZyc7XG5cdH1cbn1cblxuLyoqXG4gKiBUaGUgY29uZmlndXJhdGlvbiBvZiB0aGUge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt+TGlua30gZmVhdHVyZS5cbiAqXG4gKiBSZWFkIG1vcmUgaW4ge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt+TGlua0NvbmZpZ30uXG4gKlxuICogQG1lbWJlciB7bW9kdWxlOmxpbmsvbGlua35MaW5rQ29uZmlnfSBtb2R1bGU6Y29yZS9lZGl0b3IvZWRpdG9yY29uZmlnfkVkaXRvckNvbmZpZyNsaW5rXG4gKi9cblxuLyoqXG4gKiBUaGUgY29uZmlndXJhdGlvbiBvZiB0aGUge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt+TGluayBsaW5rIGZlYXR1cmV9LlxuICpcbiAqXHRcdENsYXNzaWNFZGl0b3JcbiAqXHRcdFx0LmNyZWF0ZSggZWRpdG9yRWxlbWVudCwge1xuICogXHRcdFx0XHRsaW5rOiAgLi4uIC8vIFRlbXBsYXRlIGZlYXR1cmUgY29uZmlndXJhdGlvbi5cbiAqXHRcdFx0fSApXG4gKlx0XHRcdC50aGVuKCAuLi4gKVxuICpcdFx0XHQuY2F0Y2goIC4uLiApO1xuICpcbiAqIFNlZSB7QGxpbmsgbW9kdWxlOmNvcmUvZWRpdG9yL2VkaXRvcmNvbmZpZ35FZGl0b3JDb25maWcgYWxsIGVkaXRvciBvcHRpb25zfS5cbiAqIEBpbnRlcmZhY2UgTGlua0NvbmZpZ1xuICovXG5cbi8qKlxuICogV2hlbiBzZXQsIHRoZSBlZGl0b3Igd2lsbCBhZGQgdGhlIGdpdmVuIHByb3RvY29sIHRvIHRoZSBsaW5rIHdoZW4gdGhlIHVzZXIgY3JlYXRlcyBhIGxpbmsgd2l0aG91dCBvbmUuXG4gKiBGb3IgZXhhbXBsZSwgd2hlbiB0aGUgdXNlciBpcyBjcmVhdGluZyBhIGxpbmsgYW5kIHR5cGVzIGBja2VkaXRvci5jb21gIGluIHRoZSBsaW5rIGZvcm0gaW5wdXQsIGR1cmluZyBsaW5rIHN1Ym1pc3Npb25cbiAqIHRoZSBlZGl0b3Igd2lsbCBhdXRvbWF0aWNhbGx5IGFkZCB0aGUgYGh0dHA6Ly9gIHByb3RvY29sLCBzbyB0aGUgbGluayB3aWxsIGxvb2sgYXMgZm9sbG93czogYGh0dHA6Ly9ja2VkaXRvci5jb21gLlxuICpcbiAqIFRoZSBmZWF0dXJlIGFsc28gcHJvdmlkZXMgZW1haWwgYWRkcmVzcyBhdXRvLWRldGVjdGlvbi4gV2hlbiB5b3Ugc3VibWl0IGBoZWxsb0BleGFtcGxlLmNvbWAsXG4gKiB0aGUgcGx1Z2luIHdpbGwgYXV0b21hdGljYWxseSBjaGFuZ2UgaXQgdG8gYG1haWx0bzpoZWxsb0BleGFtcGxlLmNvbWAuXG4gKlxuICogXHRcdENsYXNzaWNFZGl0b3JcbiAqXHRcdFx0LmNyZWF0ZSggZWRpdG9yRWxlbWVudCwge1xuICogXHRcdFx0XHRsaW5rOiB7XG4gKiBcdFx0XHRcdFx0ZGVmYXVsdFByb3RvY29sOiAnaHR0cDovLydcbiAqIFx0XHRcdFx0fVxuICpcdFx0XHR9IClcbiAqXHRcdFx0LnRoZW4oIC4uLiApXG4gKlx0XHRcdC5jYXRjaCggLi4uICk7XG4gKlxuICogKipOT1RFOioqIElmIG5vIGNvbmZpZ3VyYXRpb24gaXMgcHJvdmlkZWQsIHRoZSBlZGl0b3Igd2lsbCBub3QgYXV0by1maXggdGhlIGxpbmtzLlxuICpcbiAqIEBtZW1iZXIge1N0cmluZ30gbW9kdWxlOmxpbmsvbGlua35MaW5rQ29uZmlnI2RlZmF1bHRQcm90b2NvbFxuICovXG5cbi8qKlxuICogV2hlbiBzZXQgdG8gYHRydWVgLCB0aGUgYHRhcmdldD1cImJsYW5rXCJgIGFuZCBgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiYCBhdHRyaWJ1dGVzIGFyZSBhdXRvbWF0aWNhbGx5IGFkZGVkIHRvIGFsbCBleHRlcm5hbCBsaW5rc1xuICogaW4gdGhlIGVkaXRvci4gXCJFeHRlcm5hbCBsaW5rc1wiIGFyZSBhbGwgbGlua3MgaW4gdGhlIGVkaXRvciBjb250ZW50IHN0YXJ0aW5nIHdpdGggYGh0dHBgLCBgaHR0cHNgLCBvciBgLy9gLlxuICpcbiAqXHRcdENsYXNzaWNFZGl0b3JcbiAqXHRcdFx0LmNyZWF0ZSggZWRpdG9yRWxlbWVudCwge1xuICpcdFx0XHRcdGxpbms6IHtcbiAqXHRcdFx0XHRcdGFkZFRhcmdldFRvRXh0ZXJuYWxMaW5rczogdHJ1ZVxuICpcdFx0XHRcdH1cbiAqXHRcdFx0fSApXG4gKlx0XHRcdC50aGVuKCAuLi4gKVxuICpcdFx0XHQuY2F0Y2goIC4uLiApO1xuICpcbiAqIEludGVybmFsbHksIHRoaXMgb3B0aW9uIGFjdGl2YXRlcyBhIHByZWRlZmluZWQge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt+TGlua0NvbmZpZyNkZWNvcmF0b3JzIGF1dG9tYXRpYyBsaW5rIGRlY29yYXRvcn1cbiAqIHRoYXQgZXh0ZW5kcyBhbGwgZXh0ZXJuYWwgbGlua3Mgd2l0aCB0aGUgYHRhcmdldGAgYW5kIGByZWxgIGF0dHJpYnV0ZXMuXG4gKlxuICogKipOb3RlKio6IFRvIGNvbnRyb2wgdGhlIGB0YXJnZXRgIGFuZCBgcmVsYCBhdHRyaWJ1dGVzIG9mIHNwZWNpZmljIGxpbmtzIGluIHRoZSBlZGl0ZWQgY29udGVudCwgYSBkZWRpY2F0ZWRcbiAqIHtAbGluayBtb2R1bGU6bGluay9saW5rfkxpbmtEZWNvcmF0b3JNYW51YWxEZWZpbml0aW9uIG1hbnVhbH0gZGVjb3JhdG9yIG11c3QgYmUgZGVmaW5lZCBpbiB0aGVcbiAqIHtAbGluayBtb2R1bGU6bGluay9saW5rfkxpbmtDb25maWcjZGVjb3JhdG9ycyBgY29uZmlnLmxpbmsuZGVjb3JhdG9yc2B9IGFycmF5LiBJbiBzdWNoIHNjZW5hcmlvLFxuICogdGhlIGBjb25maWcubGluay5hZGRUYXJnZXRUb0V4dGVybmFsTGlua3NgIG9wdGlvbiBzaG91bGQgcmVtYWluIGB1bmRlZmluZWRgIG9yIGBmYWxzZWAgdG8gbm90IGludGVyZmVyZSB3aXRoIHRoZSBtYW51YWwgZGVjb3JhdG9yLlxuICpcbiAqIEl0IGlzIHBvc3NpYmxlIHRvIGFkZCBvdGhlciB7QGxpbmsgbW9kdWxlOmxpbmsvbGlua35MaW5rRGVjb3JhdG9yQXV0b21hdGljRGVmaW5pdGlvbiBhdXRvbWF0aWN9XG4gKiBvciB7QGxpbmsgbW9kdWxlOmxpbmsvbGlua35MaW5rRGVjb3JhdG9yTWFudWFsRGVmaW5pdGlvbiBtYW51YWx9IGxpbmsgZGVjb3JhdG9ycyB3aGVuIHRoaXMgb3B0aW9uIGlzIGFjdGl2ZS5cbiAqXG4gKiBNb3JlIGluZm9ybWF0aW9uIGFib3V0IGRlY29yYXRvcnMgY2FuIGJlIGZvdW5kIGluIHRoZSB7QGxpbmsgbW9kdWxlOmxpbmsvbGlua35MaW5rQ29uZmlnI2RlY29yYXRvcnMgZGVjb3JhdG9ycyBjb25maWd1cmF0aW9ufVxuICogcmVmZXJlbmNlLlxuICpcbiAqIEBkZWZhdWx0IGZhbHNlXG4gKiBAbWVtYmVyIHtCb29sZWFufSBtb2R1bGU6bGluay9saW5rfkxpbmtDb25maWcjYWRkVGFyZ2V0VG9FeHRlcm5hbExpbmtzXG4gKi9cblxuLyoqXG4gKiBEZWNvcmF0b3JzIHByb3ZpZGUgYW4gZWFzeSB3YXkgdG8gY29uZmlndXJlIGFuZCBtYW5hZ2UgYWRkaXRpb25hbCBsaW5rIGF0dHJpYnV0ZXMgaW4gdGhlIGVkaXRvciBjb250ZW50LiBUaGVyZSBhcmVcbiAqIHR3byB0eXBlcyBvZiBsaW5rIGRlY29yYXRvcnM6XG4gKlxuICogKiB7QGxpbmsgbW9kdWxlOmxpbmsvbGlua35MaW5rRGVjb3JhdG9yQXV0b21hdGljRGVmaW5pdGlvbiBBdXRvbWF0aWN9ICZuZGFzaDsgVGhleSBtYXRjaCBsaW5rcyBhZ2FpbnN0IHByZeKAk2RlZmluZWQgcnVsZXMgYW5kXG4gKiBtYW5hZ2UgdGhlaXIgYXR0cmlidXRlcyBiYXNlZCBvbiB0aGUgcmVzdWx0cy5cbiAqICoge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt+TGlua0RlY29yYXRvck1hbnVhbERlZmluaXRpb24gTWFudWFsfSAmbmRhc2g7IFRoZXkgYWxsb3cgdXNlcnMgdG8gY29udHJvbCBsaW5rIGF0dHJpYnV0ZXMgaW5kaXZpZHVhbGx5LFxuICogIHVzaW5nIHRoZSBlZGl0b3IgVUkuXG4gKlxuICogVGVtcGxhdGUgZGVjb3JhdG9ycyBhcmUgZGVmaW5lZCBhcyBvYmplY3RzIHdpdGgga2V5LXZhbHVlIHBhaXJzLCB3aGVyZSB0aGUga2V5IGlzIHRoZSBuYW1lIHByb3ZpZGVkIGZvciBhIGdpdmVuIGRlY29yYXRvciBhbmQgdGhlXG4gKiB2YWx1ZSBpcyB0aGUgZGVjb3JhdG9yIGRlZmluaXRpb24uXG4gKlxuICogVGhlIG5hbWUgb2YgdGhlIGRlY29yYXRvciBhbHNvIGNvcnJlc3BvbmRzIHRvIHRoZSB7QGdsaW5rIGZyYW1ld29yay9ndWlkZXMvYXJjaGl0ZWN0dXJlL2VkaXRpbmctZW5naW5lI3RleHQtYXR0cmlidXRlcyB0ZXh0IGF0dHJpYnV0ZX1cbiAqIGluIHRoZSBtb2RlbC4gRm9yIGluc3RhbmNlLCB0aGUgYGlzRXh0ZXJuYWxgIGRlY29yYXRvciBiZWxvdyBpcyByZXByZXNlbnRlZCBhcyBhIGBsaW5rSXNFeHRlcm5hbGAgYXR0cmlidXRlIGluIHRoZSBtb2RlbC5cbiAqXG4gKlx0XHRDbGFzc2ljRWRpdG9yXG4gKlx0XHRcdC5jcmVhdGUoIGVkaXRvckVsZW1lbnQsIHtcbiAqXHRcdFx0XHRsaW5rOiB7XG4gKlx0XHRcdFx0XHRkZWNvcmF0b3JzOiB7XG4gKlx0XHRcdFx0XHRcdGlzRXh0ZXJuYWw6IHtcbiAqXHRcdFx0XHRcdFx0XHRtb2RlOiAnYXV0b21hdGljJyxcbiAqXHRcdFx0XHRcdFx0XHRjYWxsYmFjazogdXJsID0+IHVybC5zdGFydHNXaXRoKCAnaHR0cDovLycgKSxcbiAqXHRcdFx0XHRcdFx0XHRhdHRyaWJ1dGVzOiB7XG4gKlx0XHRcdFx0XHRcdFx0XHR0YXJnZXQ6ICdfYmxhbmsnLFxuICpcdFx0XHRcdFx0XHRcdFx0cmVsOiAnbm9vcGVuZXIgbm9yZWZlcnJlcidcbiAqXHRcdFx0XHRcdFx0XHR9XG4gKlx0XHRcdFx0XHRcdH0sXG4gKlx0XHRcdFx0XHRcdGlzRG93bmxvYWRhYmxlOiB7XG4gKlx0XHRcdFx0XHRcdFx0bW9kZTogJ21hbnVhbCcsXG4gKlx0XHRcdFx0XHRcdFx0bGFiZWw6ICdEb3dubG9hZGFibGUnLFxuICpcdFx0XHRcdFx0XHRcdGF0dHJpYnV0ZXM6IHtcbiAqXHRcdFx0XHRcdFx0XHRcdGRvd25sb2FkOiAnZmlsZS5wbmcnLFxuICpcdFx0XHRcdFx0XHRcdH1cbiAqXHRcdFx0XHRcdFx0fSxcbiAqXHRcdFx0XHRcdFx0Ly8gLi4uXG4gKlx0XHRcdFx0XHR9XG4gKlx0XHRcdFx0fVxuICpcdFx0XHR9IClcbiAqXHRcdFx0LnRoZW4oIC4uLiApXG4gKlx0XHRcdC5jYXRjaCggLi4uICk7XG4gKlxuICogVG8gbGVhcm4gbW9yZSBhYm91dCB0aGUgY29uZmlndXJhdGlvbiBzeW50YXgsIGNoZWNrIG91dCB0aGUge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt+TGlua0RlY29yYXRvckF1dG9tYXRpY0RlZmluaXRpb24gYXV0b21hdGljfVxuICogYW5kIHtAbGluayBtb2R1bGU6bGluay9saW5rfkxpbmtEZWNvcmF0b3JNYW51YWxEZWZpbml0aW9uIG1hbnVhbH0gZGVjb3JhdG9yIG9wdGlvbiByZWZlcmVuY2UuXG4gKlxuICogKipXYXJuaW5nOioqIEN1cnJlbnRseSwgbGluayBkZWNvcmF0b3JzIHdvcmsgaW5kZXBlbmRlbnRseSBvZiBvbmUgYW5vdGhlciBhbmQgbm8gY29uZmxpY3QgcmVzb2x1dGlvbiBtZWNoYW5pc20gZXhpc3RzLlxuICogRm9yIGV4YW1wbGUsIGNvbmZpZ3VyaW5nIHRoZSBgdGFyZ2V0YCBhdHRyaWJ1dGUgdXNpbmcgYm90aCBhbiBhdXRvbWF0aWMgYW5kIGEgbWFudWFsIGRlY29yYXRvciBhdCB0aGUgc2FtZSB0aW1lIGNvdWxkIGVuZCB1cCB3aXRoXG4gKiBxdWlya3kgcmVzdWx0cy4gVGhlIHNhbWUgYXBwbGllcyBpZiBtdWx0aXBsZSBtYW51YWwgb3IgYXV0b21hdGljIGRlY29yYXRvcnMgd2VyZSBkZWZpbmVkIGZvciB0aGUgc2FtZSBhdHRyaWJ1dGUuXG4gKlxuICogKipOb3RlKio6IFNpbmNlIHRoZSBgdGFyZ2V0YCBhdHRyaWJ1dGUgbWFuYWdlbWVudCBmb3IgZXh0ZXJuYWwgbGlua3MgaXMgYSBjb21tb24gdXNlIGNhc2UsIHRoZXJlIGlzIGEgcHJlZGVmaW5lZCBhdXRvbWF0aWMgZGVjb3JhdG9yXG4gKiBkZWRpY2F0ZWQgZm9yIHRoYXQgcHVycG9zZSB3aGljaCBjYW4gYmUgZW5hYmxlZCBieSB0dXJuaW5nIGEgc2luZ2xlIG9wdGlvbiBvbi4gQ2hlY2sgb3V0IHRoZVxuICoge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt+TGlua0NvbmZpZyNhZGRUYXJnZXRUb0V4dGVybmFsTGlua3MgYGNvbmZpZy5saW5rLmFkZFRhcmdldFRvRXh0ZXJuYWxMaW5rc2B9XG4gKiBjb25maWd1cmF0aW9uIGRlc2NyaXB0aW9uIHRvIGxlYXJuIG1vcmUuXG4gKlxuICogU2VlIGFsc28gdGhlIHtAZ2xpbmsgZmVhdHVyZXMvbGluayNjdXN0b20tbGluay1hdHRyaWJ1dGVzLWRlY29yYXRvcnMgbGluayBmZWF0dXJlIGd1aWRlfSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAbWVtYmVyIHtPYmplY3QuPFN0cmluZywgbW9kdWxlOmxpbmsvbGlua35MaW5rRGVjb3JhdG9yRGVmaW5pdGlvbj59IG1vZHVsZTpsaW5rL2xpbmt+TGlua0NvbmZpZyNkZWNvcmF0b3JzXG4gKi9cblxuLyoqXG4gKiBBIGxpbmsgZGVjb3JhdG9yIGRlZmluaXRpb24uIFR3byB0eXBlcyBpbXBsZW1lbnQgdGhpcyBkZWZpdGlvbjpcbiAqXG4gKiAqIHtAbGluayBtb2R1bGU6bGluay9saW5rfkxpbmtEZWNvcmF0b3JNYW51YWxEZWZpbml0aW9ufVxuICogKiB7QGxpbmsgbW9kdWxlOmxpbmsvbGlua35MaW5rRGVjb3JhdG9yQXV0b21hdGljRGVmaW5pdGlvbn1cbiAqXG4gKiBSZWZlciB0byB0aGVpciBkb2N1bWVudCBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCBhdmFpbGFibGUgb3B0aW9ucyBvciB0byB0aGVcbiAqIHtAZ2xpbmsgZmVhdHVyZXMvbGluayNjdXN0b20tbGluay1hdHRyaWJ1dGVzLWRlY29yYXRvcnMgbGluayBmZWF0dXJlIGd1aWRlfSBmb3IgZ2VuZXJhbCBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAaW50ZXJmYWNlIExpbmtEZWNvcmF0b3JEZWZpbml0aW9uXG4gKi9cblxuLyoqXG4gKiBUZW1wbGF0ZSBkZWNvcmF0b3IgdHlwZS5cbiAqXG4gKiBDaGVjayBvdXQgdGhlIHtAZ2xpbmsgZmVhdHVyZXMvbGluayNjdXN0b20tbGluay1hdHRyaWJ1dGVzLWRlY29yYXRvcnMgbGluayBmZWF0dXJlIGd1aWRlfSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAbWVtYmVyIHsnbWFudWFsJ3wnYXV0b21hdGljJ30gbW9kdWxlOmxpbmsvbGlua35MaW5rRGVjb3JhdG9yRGVmaW5pdGlvbiNtb2RlXG4gKi9cblxuLyoqXG4gKiBEZXNjcmliZXMgYW4gYXV0b21hdGljIHtAbGluayBtb2R1bGU6bGluay9saW5rfkxpbmtDb25maWcjZGVjb3JhdG9ycyBsaW5rIGRlY29yYXRvcn0uIFRoaXMgZGVjb3JhdG9yIHR5cGUgbWF0Y2hlc1xuICogYWxsIGxpbmtzIGluIHRoZSBlZGl0b3IgY29udGVudCBhZ2FpbnN0IGEgZnVuY3Rpb24gdGhhdCBkZWNpZGVzIHdoZXRoZXIgdGhlIGxpbmsgc2hvdWxkIHJlY2VpdmUgYSBwcmXigJNkZWZpbmVkIHNldCBvZiBhdHRyaWJ1dGVzLlxuICpcbiAqIEl0IHRha2VzIGFuIG9iamVjdCB3aXRoIGtleS12YWx1ZSBwYWlycyBvZiBhdHRyaWJ1dGVzIGFuZCBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgbXVzdCByZXR1cm4gYSBCb29sZWFuIHZhbHVlIGJhc2VkIG9uIHRoZSBsaW5rJ3NcbiAqIGBocmVmYCAoVVJMKS4gV2hlbiB0aGUgY2FsbGJhY2sgcmV0dXJucyBgdHJ1ZWAsIGF0dHJpYnV0ZXMgYXJlIGFwcGxpZWQgdG8gdGhlIGxpbmsuXG4gKlxuICogRm9yIGV4YW1wbGUsIHRvIGFkZCB0aGUgYHRhcmdldD1cIl9ibGFua1wiYCBhdHRyaWJ1dGUgdG8gYWxsIGxpbmtzIGluIHRoZSBlZGl0b3Igc3RhcnRpbmcgd2l0aCBgaHR0cDovL2AsIHRoZVxuICogY29uZmlndXJhdGlvbiBjb3VsZCBsb29rIGxpa2UgdGhpczpcbiAqXG4gKlx0XHR7XG4gKlx0XHRcdG1vZGU6ICdhdXRvbWF0aWMnLFxuICpcdFx0XHRjYWxsYmFjazogdXJsID0+IHVybC5zdGFydHNXaXRoKCAnaHR0cDovLycgKSxcbiAqXHRcdFx0YXR0cmlidXRlczoge1xuICpcdFx0XHRcdHRhcmdldDogJ19ibGFuaydcbiAqXHRcdFx0fVxuICpcdFx0fVxuICpcbiAqICoqTm90ZSoqOiBTaW5jZSB0aGUgYHRhcmdldGAgYXR0cmlidXRlIG1hbmFnZW1lbnQgZm9yIGV4dGVybmFsIGxpbmtzIGlzIGEgY29tbW9uIHVzZSBjYXNlLCB0aGVyZSBpcyBhIHByZWRlZmluZWQgYXV0b21hdGljIGRlY29yYXRvclxuICogZGVkaWNhdGVkIGZvciB0aGF0IHB1cnBvc2UgdGhhdCBjYW4gYmUgZW5hYmxlZCBieSB0dXJuaW5nIGEgc2luZ2xlIG9wdGlvbiBvbi4gQ2hlY2sgb3V0IHRoZVxuICoge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt+TGlua0NvbmZpZyNhZGRUYXJnZXRUb0V4dGVybmFsTGlua3MgYGNvbmZpZy5saW5rLmFkZFRhcmdldFRvRXh0ZXJuYWxMaW5rc2B9XG4gKiBjb25maWd1cmF0aW9uIGRlc2NyaXB0aW9uIHRvIGxlYXJuIG1vcmUuXG4gKlxuICogQHR5cGVkZWYge09iamVjdH0gbW9kdWxlOmxpbmsvbGlua35MaW5rRGVjb3JhdG9yQXV0b21hdGljRGVmaW5pdGlvblxuICogQHByb3BlcnR5IHsnYXV0b21hdGljJ30gbW9kZSBUZW1wbGF0ZSBkZWNvcmF0b3IgdHlwZS4gSXQgaXMgYCdhdXRvbWF0aWMnYCBmb3IgYWxsIGF1dG9tYXRpYyBkZWNvcmF0b3JzLlxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY2FsbGJhY2sgVGFrZXMgYSBgdXJsYCBhcyBhIHBhcmFtZXRlciBhbmQgcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGBhdHRyaWJ1dGVzYCBzaG91bGQgYmUgYXBwbGllZCB0byB0aGUgbGluay5cbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBhdHRyaWJ1dGVzIEtleS12YWx1ZSBwYWlycyB1c2VkIGFzIGxpbmsgYXR0cmlidXRlcyBhZGRlZCB0byB0aGUgb3V0cHV0IGR1cmluZyB0aGVcbiAqIHtAZ2xpbmsgZnJhbWV3b3JrL2d1aWRlcy9hcmNoaXRlY3R1cmUvZWRpdGluZy1lbmdpbmUjY29udmVyc2lvbiBkb3duY2FzdGluZ30uXG4gKiBBdHRyaWJ1dGVzIHNob3VsZCBmb2xsb3cgdGhlIHtAbGluayBtb2R1bGU6ZW5naW5lL3ZpZXcvZWxlbWVudGRlZmluaXRpb25+RWxlbWVudERlZmluaXRpb259IHN5bnRheC5cbiAqL1xuXG4vKipcbiAqIERlc2NyaWJlcyBhIG1hbnVhbCB7QGxpbmsgbW9kdWxlOmxpbmsvbGlua35MaW5rQ29uZmlnI2RlY29yYXRvcnMgbGluayBkZWNvcmF0b3J9LiBUaGlzIGRlY29yYXRvciB0eXBlIGlzIHJlcHJlc2VudGVkIGluXG4gKiB0aGUgbGluayBmZWF0dXJlJ3Mge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt1aSB1c2VyIGludGVyZmFjZX0gYXMgYSBzd2l0Y2ggdGhhdCB0aGUgdXNlciBjYW4gdXNlIHRvIGNvbnRyb2wgdGhlIHByZXNlbmNlXG4gKiBvZiBhIHByZWRlZmluZWQgc2V0IG9mIGF0dHJpYnV0ZXMuXG4gKlxuICogRm9yIGluc3RhbmNlLCB0byBhbGxvdyB0aGUgdXNlcnMgdG8gbWFudWFsbHkgY29udHJvbCB0aGUgcHJlc2VuY2Ugb2YgdGhlIGB0YXJnZXQ9XCJfYmxhbmtcImAgYW5kXG4gKiBgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiYCBhdHRyaWJ1dGVzIG9uIHNwZWNpZmljIGxpbmtzLCB0aGUgZGVjb3JhdG9yIGNvdWxkIGxvb2sgYXMgZm9sbG93czpcbiAqXG4gKlx0XHR7XG4gKlx0XHRcdG1vZGU6ICdtYW51YWwnLFxuICpcdFx0XHRsYWJlbDogJ09wZW4gaW4gYSBuZXcgdGFiJyxcbiAqXHRcdFx0ZGVmYXVsdFZhbHVlOiB0cnVlLFxuICpcdFx0XHRhdHRyaWJ1dGVzOiB7XG4gKlx0XHRcdFx0dGFyZ2V0OiAnX2JsYW5rJyxcbiAqXHRcdFx0XHRyZWw6ICdub29wZW5lciBub3JlZmVycmVyJ1xuICpcdFx0XHR9XG4gKlx0XHR9XG4gKlxuICogQHR5cGVkZWYge09iamVjdH0gbW9kdWxlOmxpbmsvbGlua35MaW5rRGVjb3JhdG9yTWFudWFsRGVmaW5pdGlvblxuICogQHByb3BlcnR5IHsnbWFudWFsJ30gbW9kZSBUZW1wbGF0ZSBkZWNvcmF0b3IgdHlwZS4gSXQgaXMgYCdtYW51YWwnYCBmb3IgYWxsIG1hbnVhbCBkZWNvcmF0b3JzLlxuICogQHByb3BlcnR5IHtTdHJpbmd9IGxhYmVsIFRoZSBsYWJlbCBvZiB0aGUgVUkgYnV0dG9uIHRoYXQgdGhlIHVzZXIgY2FuIHVzZSB0byBjb250cm9sIHRoZSBwcmVzZW5jZSBvZiBsaW5rIGF0dHJpYnV0ZXMuXG4gKiBAcHJvcGVydHkge09iamVjdH0gYXR0cmlidXRlcyBLZXktdmFsdWUgcGFpcnMgdXNlZCBhcyBsaW5rIGF0dHJpYnV0ZXMgYWRkZWQgdG8gdGhlIG91dHB1dCBkdXJpbmcgdGhlXG4gKiB7QGdsaW5rIGZyYW1ld29yay9ndWlkZXMvYXJjaGl0ZWN0dXJlL2VkaXRpbmctZW5naW5lI2NvbnZlcnNpb24gZG93bmNhc3Rpbmd9LlxuICogQXR0cmlidXRlcyBzaG91bGQgZm9sbG93IHRoZSB7QGxpbmsgbW9kdWxlOmVuZ2luZS92aWV3L2VsZW1lbnRkZWZpbml0aW9ufkVsZW1lbnREZWZpbml0aW9ufSBzeW50YXguXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IFtkZWZhdWx0VmFsdWVdIENvbnRyb2xzIHdoZXRoZXIgdGhlIGRlY29yYXRvciBpcyBcIm9uXCIgYnkgZGVmYXVsdC5cbiAqL1xuIiwiLyoqXG4gKiBAbGljZW5zZSBDb3B5cmlnaHQgKGMpIDIwMDMtMjAyMSwgQ0tTb3VyY2UgLSBGcmVkZXJpY28gS25hYmJlbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIEZvciBsaWNlbnNpbmcsIHNlZSBMSUNFTlNFLm1kIG9yIGh0dHBzOi8vY2tlZGl0b3IuY29tL2xlZ2FsL2NrZWRpdG9yLW9zcy1saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGxpbmsvdWkvbGlua2FjdGlvbnN2aWV3XG4gKi9cblxuaW1wb3J0IHsgQnV0dG9uVmlldywgVmlldywgVmlld0NvbGxlY3Rpb24sIEZvY3VzQ3ljbGVyIH0gZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS11aS9zcmMnO1xuaW1wb3J0IHsgRm9jdXNUcmFja2VyLCBLZXlzdHJva2VIYW5kbGVyIH0gZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS11dGlscy9zcmMnO1xuaW1wb3J0IHsgaWNvbnMgfSBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWNvcmUvc3JjJztcblxuaW1wb3J0IHsgZW5zdXJlU2FmZVVybCB9IGZyb20gJy4uL3V0aWxzJztcblxuLy8gU2VlOiAjODgzMy5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBja2VkaXRvcjUtcnVsZXMvY2tlZGl0b3ItaW1wb3J0c1xuaW1wb3J0ICdAY2tlZGl0b3IvY2tlZGl0b3I1LXVpL3RoZW1lL2NvbXBvbmVudHMvcmVzcG9uc2l2ZS1mb3JtL3Jlc3BvbnNpdmVmb3JtLmNzcyc7XG5pbXBvcnQgJy4uLy4uL3RoZW1lL3RlbXBsYXRlYWN0aW9ucy5jc3MnO1xuXG5pbXBvcnQgdW5saW5rSWNvbiBmcm9tICcuLi8uLi90aGVtZS9pY29ucy91bmxpbmsuc3ZnJztcblxuLyoqXG4gKiBUaGUgbGluayBhY3Rpb25zIHZpZXcgY2xhc3MuIFRoaXMgdmlldyBkaXNwbGF5cyB0aGUgbGluayBwcmV2aWV3LCBhbGxvd3NcbiAqIHVubGlua2luZyBvciBlZGl0aW5nIHRoZSBsaW5rLlxuICpcbiAqIEBleHRlbmRzIG1vZHVsZTp1aS92aWV3flZpZXdcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVtcGxhdGVBY3Rpb25zVmlldyBleHRlbmRzIFZpZXcge1xuXHQvKipcblx0ICogQGluaGVyaXREb2Ncblx0ICovXG5cdGNvbnN0cnVjdG9yKCBsb2NhbGUgKSB7XG5cdFx0c3VwZXIoIGxvY2FsZSApO1xuXG5cdFx0Y29uc3QgdCA9IGxvY2FsZS50O1xuXG5cdFx0LyoqXG5cdFx0ICogVHJhY2tzIGluZm9ybWF0aW9uIGFib3V0IERPTSBmb2N1cyBpbiB0aGUgYWN0aW9ucy5cblx0XHQgKlxuXHRcdCAqIEByZWFkb25seVxuXHRcdCAqIEBtZW1iZXIge21vZHVsZTp1dGlscy9mb2N1c3RyYWNrZXJ+Rm9jdXNUcmFja2VyfVxuXHRcdCAqL1xuXHRcdHRoaXMuZm9jdXNUcmFja2VyID0gbmV3IEZvY3VzVHJhY2tlcigpO1xuXG5cdFx0LyoqXG5cdFx0ICogQW4gaW5zdGFuY2Ugb2YgdGhlIHtAbGluayBtb2R1bGU6dXRpbHMva2V5c3Ryb2tlaGFuZGxlcn5LZXlzdHJva2VIYW5kbGVyfS5cblx0XHQgKlxuXHRcdCAqIEByZWFkb25seVxuXHRcdCAqIEBtZW1iZXIge21vZHVsZTp1dGlscy9rZXlzdHJva2VoYW5kbGVyfktleXN0cm9rZUhhbmRsZXJ9XG5cdFx0ICovXG5cdFx0dGhpcy5rZXlzdHJva2VzID0gbmV3IEtleXN0cm9rZUhhbmRsZXIoKTtcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBocmVmIHByZXZpZXcgdmlldy5cblx0XHQgKlxuXHRcdCAqIEBtZW1iZXIge21vZHVsZTp1aS92aWV3flZpZXd9XG5cdFx0ICovXG5cdFx0dGhpcy5wcmV2aWV3QnV0dG9uVmlldyA9IHRoaXMuX2NyZWF0ZVByZXZpZXdCdXR0b24oKTtcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSB1bmxpbmsgYnV0dG9uIHZpZXcuXG5cdFx0ICpcblx0XHQgKiBAbWVtYmVyIHttb2R1bGU6dWkvYnV0dG9uL2J1dHRvbnZpZXd+QnV0dG9uVmlld31cblx0XHQgKi9cblx0XHR0aGlzLnVubGlua0J1dHRvblZpZXcgPSB0aGlzLl9jcmVhdGVCdXR0b24oIHQoICdDYW5jZWwgVGVtcGxhdGUgVmFyJyApLCB1bmxpbmtJY29uLCAnY2FuY2VsVGVtcGxhdGUnICk7XG5cblx0XHQvKipcblx0XHQgKiBUaGUgZWRpdCBsaW5rIGJ1dHRvbiB2aWV3LlxuXHRcdCAqXG5cdFx0ICogQG1lbWJlciB7bW9kdWxlOnVpL2J1dHRvbi9idXR0b252aWV3fkJ1dHRvblZpZXd9XG5cdFx0ICovXG5cdFx0dGhpcy5lZGl0QnV0dG9uVmlldyA9IHRoaXMuX2NyZWF0ZUJ1dHRvbiggdCggJ0VkaXQgVGVtcGxhdGUgVmFyJyApLCBpY29ucy5wZW5jaWwsICdlZGl0JyApO1xuXG5cdFx0LyoqXG5cdFx0ICogVGhlIHZhbHVlIG9mIHRoZSBcImhyZWZcIiBhdHRyaWJ1dGUgb2YgdGhlIGxpbmsgdG8gdXNlIGluIHRoZSB7QGxpbmsgI3ByZXZpZXdCdXR0b25WaWV3fS5cblx0XHQgKlxuXHRcdCAqIEBvYnNlcnZhYmxlXG5cdFx0ICogQG1lbWJlciB7U3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0KCAnZGF0YS10ZW1wbGF0ZS12YXInICk7XG5cblx0XHQvKipcblx0XHQgKiBBIGNvbGxlY3Rpb24gb2Ygdmlld3MgdGhhdCBjYW4gYmUgZm9jdXNlZCBpbiB0aGUgdmlldy5cblx0XHQgKlxuXHRcdCAqIEByZWFkb25seVxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAbWVtYmVyIHttb2R1bGU6dWkvdmlld2NvbGxlY3Rpb25+Vmlld0NvbGxlY3Rpb259XG5cdFx0ICovXG5cdFx0dGhpcy5fZm9jdXNhYmxlcyA9IG5ldyBWaWV3Q29sbGVjdGlvbigpO1xuXG5cdFx0LyoqXG5cdFx0ICogSGVscHMgY3ljbGluZyBvdmVyIHtAbGluayAjX2ZvY3VzYWJsZXN9IGluIHRoZSB2aWV3LlxuXHRcdCAqXG5cdFx0ICogQHJlYWRvbmx5XG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEBtZW1iZXIge21vZHVsZTp1aS9mb2N1c2N5Y2xlcn5Gb2N1c0N5Y2xlcn1cblx0XHQgKi9cblx0XHR0aGlzLl9mb2N1c0N5Y2xlciA9IG5ldyBGb2N1c0N5Y2xlcigge1xuXHRcdFx0Zm9jdXNhYmxlczogdGhpcy5fZm9jdXNhYmxlcyxcblx0XHRcdGZvY3VzVHJhY2tlcjogdGhpcy5mb2N1c1RyYWNrZXIsXG5cdFx0XHRrZXlzdHJva2VIYW5kbGVyOiB0aGlzLmtleXN0cm9rZXMsXG5cdFx0XHRhY3Rpb25zOiB7XG5cdFx0XHRcdC8vIE5hdmlnYXRlIGZpZWxkcyBiYWNrd2FyZHMgdXNpbmcgdGhlIFNoaWZ0ICsgVGFiIGtleXN0cm9rZS5cblx0XHRcdFx0Zm9jdXNQcmV2aW91czogJ3NoaWZ0ICsgdGFiJyxcblxuXHRcdFx0XHQvLyBOYXZpZ2F0ZSBmaWVsZHMgZm9yd2FyZHMgdXNpbmcgdGhlIFRhYiBrZXkuXG5cdFx0XHRcdGZvY3VzTmV4dDogJ3RhYidcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0XHR0aGlzLnNldFRlbXBsYXRlKCB7XG5cdFx0XHR0YWc6ICdkaXYnLFxuXG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGNsYXNzOiBbXG5cdFx0XHRcdFx0J2NrJyxcblx0XHRcdFx0XHQnY2stbGluay1hY3Rpb25zJyxcblx0XHRcdFx0XHQnY2stcmVzcG9uc2l2ZS1mb3JtJ1xuXHRcdFx0XHRdLFxuXG5cdFx0XHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ja2VkaXRvci9ja2VkaXRvcjUtbGluay9pc3N1ZXMvOTBcblx0XHRcdFx0dGFiaW5kZXg6ICctMSdcblx0XHRcdH0sXG5cblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdHRoaXMucHJldmlld0J1dHRvblZpZXcsXG5cdFx0XHRcdHRoaXMuZWRpdEJ1dHRvblZpZXcsXG5cdFx0XHRcdHRoaXMudW5saW5rQnV0dG9uVmlld1xuXHRcdFx0XVxuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5oZXJpdERvY1xuXHQgKi9cblx0cmVuZGVyKCkge1xuXHRcdHN1cGVyLnJlbmRlcigpO1xuXG5cdFx0Y29uc3QgY2hpbGRWaWV3cyA9IFtcblx0XHRcdHRoaXMucHJldmlld0J1dHRvblZpZXcsXG5cdFx0XHR0aGlzLmVkaXRCdXR0b25WaWV3LFxuXHRcdFx0dGhpcy51bmxpbmtCdXR0b25WaWV3XG5cdFx0XTtcblxuXHRcdGNoaWxkVmlld3MuZm9yRWFjaCggdiA9PiB7XG5cdFx0XHQvLyBSZWdpc3RlciB0aGUgdmlldyBhcyBmb2N1c2FibGUuXG5cdFx0XHR0aGlzLl9mb2N1c2FibGVzLmFkZCggdiApO1xuXG5cdFx0XHQvLyBSZWdpc3RlciB0aGUgdmlldyBpbiB0aGUgZm9jdXMgdHJhY2tlci5cblx0XHRcdHRoaXMuZm9jdXNUcmFja2VyLmFkZCggdi5lbGVtZW50ICk7XG5cdFx0fSApO1xuXG5cdFx0Ly8gU3RhcnQgbGlzdGVuaW5nIGZvciB0aGUga2V5c3Ryb2tlcyBjb21pbmcgZnJvbSAjZWxlbWVudC5cblx0XHR0aGlzLmtleXN0cm9rZXMubGlzdGVuVG8oIHRoaXMuZWxlbWVudCApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEZvY3VzZXMgdGhlIGZpc3Qge0BsaW5rICNfZm9jdXNhYmxlc30gaW4gdGhlIGFjdGlvbnMuXG5cdCAqL1xuXHRmb2N1cygpIHtcblx0XHR0aGlzLl9mb2N1c0N5Y2xlci5mb2N1c0ZpcnN0KCk7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIGJ1dHRvbiB2aWV3LlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gbGFiZWwgVGhlIGJ1dHRvbiBsYWJlbC5cblx0ICogQHBhcmFtIHtTdHJpbmd9IGljb24gVGhlIGJ1dHRvbiBpY29uLlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gW2V2ZW50TmFtZV0gQW4gZXZlbnQgbmFtZSB0aGF0IHRoZSBgQnV0dG9uVmlldyNleGVjdXRlYCBldmVudCB3aWxsIGJlIGRlbGVnYXRlZCB0by5cblx0ICogQHJldHVybnMge21vZHVsZTp1aS9idXR0b24vYnV0dG9udmlld35CdXR0b25WaWV3fSBUaGUgYnV0dG9uIHZpZXcgaW5zdGFuY2UuXG5cdCAqL1xuXHRfY3JlYXRlQnV0dG9uKCBsYWJlbCwgaWNvbiwgZXZlbnROYW1lICkge1xuXHRcdGNvbnN0IGJ1dHRvbiA9IG5ldyBCdXR0b25WaWV3KCB0aGlzLmxvY2FsZSApO1xuXG5cdFx0YnV0dG9uLnNldCgge1xuXHRcdFx0bGFiZWwsXG5cdFx0XHRpY29uLFxuXHRcdFx0dG9vbHRpcDogdHJ1ZVxuXHRcdH0gKTtcblxuXHRcdGJ1dHRvbi5kZWxlZ2F0ZSggJ2V4ZWN1dGUnICkudG8oIHRoaXMsIGV2ZW50TmFtZSApO1xuXG5cdFx0cmV0dXJuIGJ1dHRvbjtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgbGluayBocmVmIHByZXZpZXcgYnV0dG9uLlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcmV0dXJucyB7bW9kdWxlOnVpL2J1dHRvbi9idXR0b252aWV3fkJ1dHRvblZpZXd9IFRoZSBidXR0b24gdmlldyBpbnN0YW5jZS5cblx0ICovXG5cdF9jcmVhdGVQcmV2aWV3QnV0dG9uKCkge1xuXHRcdGNvbnN0IGJ1dHRvbiA9IG5ldyBCdXR0b25WaWV3KCB0aGlzLmxvY2FsZSApO1xuXHRcdGNvbnN0IGJpbmQgPSB0aGlzLmJpbmRUZW1wbGF0ZTtcblx0XHRjb25zdCB0ID0gdGhpcy50O1xuXG5cdFx0YnV0dG9uLnNldCgge1xuXHRcdFx0d2l0aFRleHQ6IHRydWUsXG5cdFx0XHR0b29sdGlwOiB0KCAndGVtcGxhdGUgdmFsaWFibGUgaWQnIClcblx0XHR9ICk7XG5cblx0XHRidXR0b24uZXh0ZW5kVGVtcGxhdGUoIHtcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0Y2xhc3M6IFtcblx0XHRcdFx0XHQnY2snLFxuXHRcdFx0XHRcdCdjay1saW5rLWFjdGlvbnNfX3ByZXZpZXcnXG5cdFx0XHRcdF0sXG5cdFx0XHRcdGlkOiBiaW5kLnRvKCAnZGF0YS10ZW1wbGF0ZS12YXInLCBpZCA9PiBpZCAgKSAsXG5cdFx0XHRcdHRhcmdldDogJ19ibGFuaycsXG5cdFx0XHRcdHJlbDogJ25vb3BlbmVyIG5vcmVmZXJyZXInXG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0YnV0dG9uLmJpbmQoICdsYWJlbCcgKS50byggdGhpcywgJ2RhdGEtdGVtcGxhdGUtdmFyJywgaWQgPT4ge1xuXHRcdFx0cmV0dXJuIGlkIHx8IHQoICdUaGlzIHZhcmlhYmxlIGhhcyBubyBpZCcgKTtcblx0XHR9ICk7XG5cblx0XHRidXR0b24uYmluZCggJ2lzRW5hYmxlZCcgKS50byggdGhpcywgJ2RhdGEtdGVtcGxhdGUtdmFyJywgaWQgPT4gISFpZCApO1xuXG5cdFx0YnV0dG9uLnRlbXBsYXRlLnRhZyA9ICdzcGFuJztcblx0XHRidXR0b24udGVtcGxhdGUuZXZlbnRMaXN0ZW5lcnMgPSB7fTtcblxuXHRcdHJldHVybiBidXR0b247XG5cdH1cbn1cblxuLyoqXG4gKiBGaXJlZCB3aGVuIHRoZSB7QGxpbmsgI2VkaXRCdXR0b25WaWV3fSBpcyBjbGlja2VkLlxuICpcbiAqIEBldmVudCBlZGl0XG4gKi9cblxuLyoqXG4gKiBGaXJlZCB3aGVuIHRoZSB7QGxpbmsgI3VubGlua0J1dHRvblZpZXd9IGlzIGNsaWNrZWQuXG4gKlxuICogQGV2ZW50IHVubGlua1xuICovXG4iLCIvKipcbiAqIEBsaWNlbnNlIENvcHlyaWdodCAoYykgMjAwMy0yMDIxLCBDS1NvdXJjZSAtIEZyZWRlcmljbyBLbmFiYmVuLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogRm9yIGxpY2Vuc2luZywgc2VlIExJQ0VOU0UubWQgb3IgaHR0cHM6Ly9ja2VkaXRvci5jb20vbGVnYWwvY2tlZGl0b3Itb3NzLWxpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGluay91aS9saW5rZm9ybXZpZXdcbiAqL1xuXG5pbXBvcnQge1xuXHRCdXR0b25WaWV3LFxuXHRGb2N1c0N5Y2xlcixcblx0TGFiZWxlZEZpZWxkVmlldyxcblx0U3dpdGNoQnV0dG9uVmlldyxcblx0Vmlldyxcblx0Vmlld0NvbGxlY3Rpb24sXG5cdGNyZWF0ZUxhYmVsZWRJbnB1dFRleHQsXG5cdGluamVjdENzc1RyYW5zaXRpb25EaXNhYmxlcixcblx0c3VibWl0SGFuZGxlcixcblx0YWRkVG9vbGJhclRvRHJvcGRvd24sXG5cdGNyZWF0ZURyb3Bkb3duXG59IGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtdWkvc3JjJztcbmltcG9ydCBTcGxpdEJ1dHRvblZpZXcgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS11aS9zcmMvZHJvcGRvd24vYnV0dG9uL3NwbGl0YnV0dG9udmlldyc7XG5pbXBvcnQgeyBGb2N1c1RyYWNrZXIsIEtleXN0cm9rZUhhbmRsZXIgfSBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LXV0aWxzL3NyYyc7XG5pbXBvcnQgeyBpY29ucyB9IGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtY29yZS9zcmMnO1xuLy8gU2VlOiAjODgzMy5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBja2VkaXRvcjUtcnVsZXMvY2tlZGl0b3ItaW1wb3J0c1xuaW1wb3J0ICdAY2tlZGl0b3IvY2tlZGl0b3I1LXVpL3RoZW1lL2NvbXBvbmVudHMvcmVzcG9uc2l2ZS1mb3JtL3Jlc3BvbnNpdmVmb3JtLmNzcyc7XG5pbXBvcnQgJy4uLy4uL3RoZW1lL3RlbXBsYXRlZm9ybS5jc3MnO1xuXG4vKipcbiAqIFRoZSBsaW5rIGZvcm0gdmlldyBjb250cm9sbGVyIGNsYXNzLlxuICpcbiAqIFNlZSB7QGxpbmsgbW9kdWxlOmxpbmsvdWkvbGlua2Zvcm12aWV3fkxpbmtGb3JtVmlld30uXG4gKlxuICogQGV4dGVuZHMgbW9kdWxlOnVpL3ZpZXd+Vmlld1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZW1wbGF0ZUZvcm1WaWV3IGV4dGVuZHMgVmlldyB7XG5cdC8qKlxuXHQgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIHRoZSB7QGxpbmsgbW9kdWxlOmxpbmsvdWkvbGlua2Zvcm12aWV3fkxpbmtGb3JtVmlld30gY2xhc3MuXG5cdCAqXG5cdCAqIEFsc28gc2VlIHtAbGluayAjcmVuZGVyfS5cblx0ICpcblx0ICogQHBhcmFtIHttb2R1bGU6dXRpbHMvbG9jYWxlfkxvY2FsZX0gW2xvY2FsZV0gVGhlIGxvY2FsaXphdGlvbiBzZXJ2aWNlcyBpbnN0YW5jZS5cblx0ICogQHBhcmFtIHttb2R1bGU6bGluay9saW5rY29tbWFuZH5MaW5rQ29tbWFuZH0gbGlua0NvbW1hbmQgUmVmZXJlbmNlIHRvIHtAbGluayBtb2R1bGU6bGluay9saW5rY29tbWFuZH5MaW5rQ29tbWFuZH0uXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBbcHJvdG9jb2xdIEEgdmFsdWUgb2YgYSBwcm90b2NvbCB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIGlucHV0J3MgcGxhY2Vob2xkZXIuXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggbG9jYWxlLCBsaW5rQ29tbWFuZCApIHtcblx0XHRzdXBlciggbG9jYWxlICk7XG5cblx0XHRjb25zdCB0ID0gbG9jYWxlLnQ7XG5cblx0XHQvKipcblx0XHQgKiBUcmFja3MgaW5mb3JtYXRpb24gYWJvdXQgRE9NIGZvY3VzIGluIHRoZSBmb3JtLlxuXHRcdCAqXG5cdFx0ICogQHJlYWRvbmx5XG5cdFx0ICogQG1lbWJlciB7bW9kdWxlOnV0aWxzL2ZvY3VzdHJhY2tlcn5Gb2N1c1RyYWNrZXJ9XG5cdFx0ICovXG5cdFx0dGhpcy5mb2N1c1RyYWNrZXIgPSBuZXcgRm9jdXNUcmFja2VyKCk7XG5cblx0XHQvKipcblx0XHQgKiBBbiBpbnN0YW5jZSBvZiB0aGUge0BsaW5rIG1vZHVsZTp1dGlscy9rZXlzdHJva2VoYW5kbGVyfktleXN0cm9rZUhhbmRsZXJ9LlxuXHRcdCAqXG5cdFx0ICogQHJlYWRvbmx5XG5cdFx0ICogQG1lbWJlciB7bW9kdWxlOnV0aWxzL2tleXN0cm9rZWhhbmRsZXJ+S2V5c3Ryb2tlSGFuZGxlcn1cblx0XHQgKi9cblx0XHR0aGlzLmtleXN0cm9rZXMgPSBuZXcgS2V5c3Ryb2tlSGFuZGxlcigpO1xuXG5cdFx0LyoqXG5cdFx0ICogVGhlIFVSTCBpbnB1dCB2aWV3LlxuXHRcdCAqXG5cdFx0ICogQG1lbWJlciB7bW9kdWxlOnVpL2xhYmVsZWRmaWVsZC9sYWJlbGVkZmllbGR2aWV3fkxhYmVsZWRGaWVsZFZpZXd9XG5cdFx0ICovXG5cdFx0dGhpcy5sYWJlbElucHV0VmlldyA9IHRoaXMuX2NyZWF0ZVRleHRJbnB1dCgnU2V0IHZhcmlhYmxlIElkJyk7LyoqXG5cdFx0ICogVGhlIFVSTCBpbnB1dCB2aWV3LlxuXHRcdCAqXG5cdFx0ICogQG1lbWJlciB7bW9kdWxlOnVpL2xhYmVsZWRmaWVsZC9sYWJlbGVkZmllbGR2aWV3fkxhYmVsZWRGaWVsZFZpZXd9XG5cdFx0ICovXG5cdFx0dGhpcy50eXBlSW5wdXRWaWV3ID0gdGhpcy5fY3JlYXRlRHJvcERvd25JbnB1dCgnVGVtcGxhdGUgVmFyaWFibGUgVHlwZScpOy8qKlxuXG5cdFx0LyoqXG5cdFx0ICogVGhlIFNhdmUgYnV0dG9uIHZpZXcuXG5cdFx0ICpcblx0XHQgKiBAbWVtYmVyIHttb2R1bGU6dWkvYnV0dG9uL2J1dHRvbnZpZXd+QnV0dG9uVmlld31cblx0XHQgKi9cblx0XHR0aGlzLnNhdmVCdXR0b25WaWV3ID0gdGhpcy5fY3JlYXRlQnV0dG9uKCB0KCAnU2F2ZScgKSwgaWNvbnMuY2hlY2ssICdjay1idXR0b24tc2F2ZScgKTtcblx0XHR0aGlzLnNhdmVCdXR0b25WaWV3LnR5cGUgPSAnc3VibWl0JztcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBDYW5jZWwgYnV0dG9uIHZpZXcuXG5cdFx0ICpcblx0XHQgKiBAbWVtYmVyIHttb2R1bGU6dWkvYnV0dG9uL2J1dHRvbnZpZXd+QnV0dG9uVmlld31cblx0XHQgKi9cblx0XHR0aGlzLmNhbmNlbEJ1dHRvblZpZXcgPSB0aGlzLl9jcmVhdGVCdXR0b24oIHQoICdDYW5jZWwnICksIGljb25zLmNhbmNlbCwgJ2NrLWJ1dHRvbi1jYW5jZWwnLCAnY2FuY2VsJyApO1xuXG5cdFx0LyoqXG5cdFx0ICogQSBjb2xsZWN0aW9uIG9mIHtAbGluayBtb2R1bGU6dWkvYnV0dG9uL3N3aXRjaGJ1dHRvbnZpZXd+U3dpdGNoQnV0dG9uVmlld30sXG5cdFx0ICogd2hpY2ggY29ycmVzcG9uZHMgdG8ge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmtjb21tYW5kfkxpbmtDb21tYW5kI21hbnVhbERlY29yYXRvcnMgbWFudWFsIGRlY29yYXRvcnN9XG5cdFx0ICogY29uZmlndXJlZCBpbiB0aGUgZWRpdG9yLlxuXHRcdCAqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKiBAcmVhZG9ubHlcblx0XHQgKiBAdHlwZSB7bW9kdWxlOnVpL3ZpZXdjb2xsZWN0aW9uflZpZXdDb2xsZWN0aW9ufVxuXHRcdCAqL1xuXHRcdHRoaXMuX21hbnVhbERlY29yYXRvclN3aXRjaGVzID0gdGhpcy5fY3JlYXRlTWFudWFsRGVjb3JhdG9yU3dpdGNoZXMoIGxpbmtDb21tYW5kICk7XG5cblx0XHQvKipcblx0XHQgKiBBIGNvbGxlY3Rpb24gb2YgY2hpbGQgdmlld3MgaW4gdGhlIGZvcm0uXG5cdFx0ICpcblx0XHQgKiBAcmVhZG9ubHlcblx0XHQgKiBAdHlwZSB7bW9kdWxlOnVpL3ZpZXdjb2xsZWN0aW9uflZpZXdDb2xsZWN0aW9ufVxuXHRcdCAqL1xuXHRcdHRoaXMuY2hpbGRyZW4gPSB0aGlzLl9jcmVhdGVGb3JtQ2hpbGRyZW4oIGxpbmtDb21tYW5kLm1hbnVhbERlY29yYXRvcnMgKTtcblxuXHRcdC8qKlxuXHRcdCAqIEEgY29sbGVjdGlvbiBvZiB2aWV3cyB0aGF0IGNhbiBiZSBmb2N1c2VkIGluIHRoZSBmb3JtLlxuXHRcdCAqXG5cdFx0ICogQHJlYWRvbmx5XG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEBtZW1iZXIge21vZHVsZTp1aS92aWV3Y29sbGVjdGlvbn5WaWV3Q29sbGVjdGlvbn1cblx0XHQgKi9cblx0XHR0aGlzLl9mb2N1c2FibGVzID0gbmV3IFZpZXdDb2xsZWN0aW9uKCk7XG5cblx0XHQvKipcblx0XHQgKiBIZWxwcyBjeWNsaW5nIG92ZXIge0BsaW5rICNfZm9jdXNhYmxlc30gaW4gdGhlIGZvcm0uXG5cdFx0ICpcblx0XHQgKiBAcmVhZG9ubHlcblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQG1lbWJlciB7bW9kdWxlOnVpL2ZvY3VzY3ljbGVyfkZvY3VzQ3ljbGVyfVxuXHRcdCAqL1xuXHRcdHRoaXMuX2ZvY3VzQ3ljbGVyID0gbmV3IEZvY3VzQ3ljbGVyKCB7XG5cdFx0XHRmb2N1c2FibGVzOiB0aGlzLl9mb2N1c2FibGVzLFxuXHRcdFx0Zm9jdXNUcmFja2VyOiB0aGlzLmZvY3VzVHJhY2tlcixcblx0XHRcdGtleXN0cm9rZUhhbmRsZXI6IHRoaXMua2V5c3Ryb2tlcyxcblx0XHRcdGFjdGlvbnM6IHtcblx0XHRcdFx0Ly8gTmF2aWdhdGUgZm9ybSBmaWVsZHMgYmFja3dhcmRzIHVzaW5nIHRoZSBTaGlmdCArIFRhYiBrZXlzdHJva2UuXG5cdFx0XHRcdGZvY3VzUHJldmlvdXM6ICdzaGlmdCArIHRhYicsXG5cblx0XHRcdFx0Ly8gTmF2aWdhdGUgZm9ybSBmaWVsZHMgZm9yd2FyZHMgdXNpbmcgdGhlIFRhYiBrZXkuXG5cdFx0XHRcdGZvY3VzTmV4dDogJ3RhYidcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0XHRjb25zdCBjbGFzc0xpc3QgPSBbICdjaycsICdjay1saW5rLWZvcm0nLCAnY2stcmVzcG9uc2l2ZS1mb3JtJyBdO1xuXG5cdFx0aWYgKCBsaW5rQ29tbWFuZC5tYW51YWxEZWNvcmF0b3JzLmxlbmd0aCApIHtcblx0XHRcdGNsYXNzTGlzdC5wdXNoKCAnY2stbGluay1mb3JtX2xheW91dC12ZXJ0aWNhbCcsICdjay12ZXJ0aWNhbC1mb3JtJyApO1xuXHRcdH1cblxuXHRcdHRoaXMuc2V0VGVtcGxhdGUoIHtcblx0XHRcdHRhZzogJ2Zvcm0nLFxuXG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGNsYXNzOiBjbGFzc0xpc3QsXG5cblx0XHRcdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL2NrZWRpdG9yL2NrZWRpdG9yNS1saW5rL2lzc3Vlcy85MFxuXHRcdFx0XHR0YWJpbmRleDogJy0xJ1xuXHRcdFx0fSxcblxuXHRcdFx0Y2hpbGRyZW46IHRoaXMuY2hpbGRyZW5cblx0XHR9ICk7XG5cblx0XHRpbmplY3RDc3NUcmFuc2l0aW9uRGlzYWJsZXIoIHRoaXMgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBPYnRhaW5zIHRoZSBzdGF0ZSBvZiB0aGUge0BsaW5rIG1vZHVsZTp1aS9idXR0b24vc3dpdGNoYnV0dG9udmlld35Td2l0Y2hCdXR0b25WaWV3IHN3aXRjaCBidXR0b25zfSByZXByZXNlbnRpbmdcblx0ICoge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmtjb21tYW5kfkxpbmtDb21tYW5kI21hbnVhbERlY29yYXRvcnMgbWFudWFsIGxpbmsgZGVjb3JhdG9yc31cblx0ICogaW4gdGhlIHtAbGluayBtb2R1bGU6bGluay91aS9saW5rZm9ybXZpZXd+TGlua0Zvcm1WaWV3fS5cblx0ICpcblx0ICogQHJldHVybnMge09iamVjdC48U3RyaW5nLEJvb2xlYW4+fSBLZXktdmFsdWUgcGFpcnMsIHdoZXJlIHRoZSBrZXkgaXMgdGhlIG5hbWUgb2YgdGhlIGRlY29yYXRvciBhbmQgdGhlIHZhbHVlIGlzXG5cdCAqIGl0cyBzdGF0ZS5cblx0ICovXG5cdGdldERlY29yYXRvclN3aXRjaGVzU3RhdGUoKSB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20oIHRoaXMuX21hbnVhbERlY29yYXRvclN3aXRjaGVzICkucmVkdWNlKCAoIGFjY3VtdWxhdG9yLCBzd2l0Y2hCdXR0b24gKSA9PiB7XG5cdFx0XHRhY2N1bXVsYXRvclsgc3dpdGNoQnV0dG9uLm5hbWUgXSA9IHN3aXRjaEJ1dHRvbi5pc09uO1xuXHRcdFx0cmV0dXJuIGFjY3VtdWxhdG9yO1xuXHRcdH0sIHt9ICk7XG5cdH1cblxuXHQvKipcblx0ICogQGluaGVyaXREb2Ncblx0ICovXG5cdHJlbmRlcigpIHtcblx0XHRzdXBlci5yZW5kZXIoKTtcblxuXHRcdHN1Ym1pdEhhbmRsZXIoIHtcblx0XHRcdHZpZXc6IHRoaXNcblx0XHR9ICk7XG5cblx0XHRjb25zdCBjaGlsZFZpZXdzID0gW1xuXHRcdFx0dGhpcy5sYWJlbElucHV0Vmlldyxcblx0XHRcdHRoaXMudHlwZUlucHV0Vmlldyxcblx0XHRcdC4uLnRoaXMuX21hbnVhbERlY29yYXRvclN3aXRjaGVzLFxuXHRcdFx0dGhpcy5zYXZlQnV0dG9uVmlldyxcblx0XHRcdHRoaXMuY2FuY2VsQnV0dG9uVmlld1xuXHRcdF07XG5cblx0XHRjaGlsZFZpZXdzLmZvckVhY2goIHYgPT4ge1xuXHRcdFx0Ly8gUmVnaXN0ZXIgdGhlIHZpZXcgYXMgZm9jdXNhYmxlLlxuXHRcdFx0dGhpcy5fZm9jdXNhYmxlcy5hZGQoIHYgKTtcblxuXHRcdFx0Ly8gUmVnaXN0ZXIgdGhlIHZpZXcgaW4gdGhlIGZvY3VzIHRyYWNrZXIuXG5cdFx0XHR0aGlzLmZvY3VzVHJhY2tlci5hZGQoIHYuZWxlbWVudCApO1xuXHRcdH0gKTtcblxuXHRcdC8vIFN0YXJ0IGxpc3RlbmluZyBmb3IgdGhlIGtleXN0cm9rZXMgY29taW5nIGZyb20gI2VsZW1lbnQuXG5cdFx0dGhpcy5rZXlzdHJva2VzLmxpc3RlblRvKCB0aGlzLmVsZW1lbnQgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBGb2N1c2VzIHRoZSBmaXN0IHtAbGluayAjX2ZvY3VzYWJsZXN9IGluIHRoZSBmb3JtLlxuXHQgKi9cblx0Zm9jdXMoKSB7XG5cdFx0dGhpcy5fZm9jdXNDeWNsZXIuZm9jdXNGaXJzdCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBsYWJlbGVkIGlucHV0IHZpZXcuXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEByZXR1cm5zIHttb2R1bGU6dWkvbGFiZWxlZGZpZWxkL2xhYmVsZWRmaWVsZHZpZXd+TGFiZWxlZEZpZWxkVmlld30gTGFiZWxlZCBmaWVsZCB2aWV3IGluc3RhbmNlLlxuXHQgKi9cblx0X2NyZWF0ZVRleHRJbnB1dChsYWJlbCkge1xuXHRcdGNvbnN0IHQgPSB0aGlzLmxvY2FsZS50O1xuXHRcdGNvbnN0IGxhYmVsZWRJbnB1dCA9IG5ldyBMYWJlbGVkRmllbGRWaWV3KCB0aGlzLmxvY2FsZSwgY3JlYXRlTGFiZWxlZElucHV0VGV4dCApO1xuXG5cdFx0bGFiZWxlZElucHV0LmxhYmVsID0gdCggbGFiZWwgKTtcblxuXHRcdHJldHVybiBsYWJlbGVkSW5wdXQ7XG5cdH1cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBsYWJlbGVkIGlucHV0IHZpZXcuXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEByZXR1cm5zIHttb2R1bGU6dWkvbGFiZWxlZGZpZWxkL2xhYmVsZWRmaWVsZHZpZXd+TGFiZWxlZEZpZWxkVmlld30gTGFiZWxlZCBmaWVsZCB2aWV3IGluc3RhbmNlLlxuXHQgKi9cblx0X2NyZWF0ZURyb3BEb3duSW5wdXQobGFiZWwpIHtcblx0XHRjb25zdCBjcmVhdGVMYWJlbGVkRHJvcGRvd24gPSAoIGxhYmVsZWRGaWVsZFZpZXcsIHZpZXdVaWQsIHN0YXR1c1VpZCApID0+e1xuXG5cdFx0XHRjb25zdCBkcm9wZG93blZpZXcgPSBjcmVhdGVEcm9wZG93biggbGFiZWxlZEZpZWxkVmlldy5sb2NhbGUgLCBTcGxpdEJ1dHRvblZpZXcgKTtcblxuXHRcdFx0ZHJvcGRvd25WaWV3LnNldCgge1xuXHRcdFx0XHRpZDogdmlld1VpZCxcblx0XHRcdFx0YXJpYURlc2NyaWJlZEJ5SWQ6IHN0YXR1c1VpZFxuXHRcdFx0fSApO1xuXHRcdFx0ZHJvcGRvd25WaWV3LmJ1dHRvblZpZXcuc2V0KCB7XG5cdFx0XHRcdHRvb2x0aXA6IHRydWUsXG5cdFx0XHRcdHdpdGhUZXh0OiB0cnVlLFxuXHRcdFx0fSApO1xuXG5cdFx0XHRjb25zdCBidXR0b25zID0gW107XG5cdFx0XHQvLyBBZGQgYW5vdGhlciBjb21wb25lbnQgdG8gdGhlIGFycmF5IG9mIHRvb2xiYXIgaXRlbXMuXG5cdFx0XHRidXR0b25zLnB1c2goIHRoaXMuX2NyZWF0ZURyb3Bkb3duQnV0dG9uKCAnU2hvcnQgdGV4dCcgKSk7XG5cblx0XHRcdC8vIEFkZCBhbm90aGVyIGNvbXBvbmVudCB0byB0aGUgYXJyYXkgb2YgdG9vbGJhciBpdGVtcy5cblx0XHRcdGJ1dHRvbnMucHVzaCggdGhpcy5fY3JlYXRlRHJvcGRvd25CdXR0b24oICAnTG9uZyB0ZXh0JyApICk7XG5cblx0XHRcdC8vIENyZWF0ZSBhIGRyb3Bkb3duIHdpdGggYSB0b29sYmFyIGluc2lkZSB0aGUgcGFuZWwuXG5cdFx0XHRhZGRUb29sYmFyVG9Ecm9wZG93biggZHJvcGRvd25WaWV3LCBidXR0b25zICk7XG5cblx0XHRcdC8vIFRoZSBkZWZhdWx0IGljb24gaXMgYWxpZ24gbGVmdCBhcyB3ZSBkbyBub3Qgc3VwcG9ydCBSVEwgeWV0IChzZWUgIzMpLlxuXG5cdFx0XHQvLyBDaGFuZ2UgaWNvbiB0byByZWZsZWN0IGN1cnJlbnQgc2VsZWN0aW9uJ3MgYWxpZ25tZW50LlxuXHRcdFx0ZHJvcGRvd25WaWV3LmJpbmQoICdpc0VuYWJsZWQnICkudG9NYW55KCBidXR0b25zLCAnaXNFbmFibGVkJywgKCAuLi5hcmVFbmFibGVkICkgPT4gYXJlRW5hYmxlZC5zb21lKCBpc0VuYWJsZWQgPT4gaXNFbmFibGVkICkgKTtcblxuXHRcdFx0ZHJvcGRvd25WaWV3LmJ1dHRvblZpZXcuYmluZCggJ2xhYmVsJyApLnRvTWFueSggYnV0dG9ucywgJ2lzT24nLCAoIC4uLmFyZUFjdGl2ZSApID0+IHtcblx0XHRcdFx0Ly8gR2V0IHRoZSBpbmRleCBvZiBhbiBhY3RpdmUgYnV0dG9uLlxuXHRcdFx0XHRjb25zdCBpbmRleCA9IGFyZUFjdGl2ZS5maW5kSW5kZXgoIHZhbHVlID0+IHZhbHVlICk7XG5cdFx0XHRcdC8vIElmIG5vbmUgb2YgdGhlIGNvbW1hbmRzIGlzIGFjdGl2ZSwgZGlzcGxheSBlaXRoZXIgZGVmYXVsdEljb24gb3IgdGhlIGZpcnN0IGJ1dHRvbidzIGljb24uXG5cdFx0XHRcdGlmICggaW5kZXggPCAwICkge1xuXHRcdFx0XHRcdHJldHVybiBidXR0b25zWyAwIF0ubGFiZWw7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBSZXR1cm4gYWN0aXZlIGJ1dHRvbidzIGljb24uXG5cdFx0XHRcdHJldHVybiBidXR0b25zWyBpbmRleCBdLmxhYmVsO1xuXHRcdFx0fSApO1xuXHRcdFx0ZHJvcGRvd25WaWV3LnRvb2xiYXJWaWV3LmlzVmVydGljYWwgPSB0cnVlO1xuXHRcdFx0Ly8gRW5hYmxlIGJ1dHRvbiBpZiBhbnkgb2YgdGhlIGJ1dHRvbnMgaXMgZW5hYmxlZC5cblx0XHRcdHJldHVybiBkcm9wZG93blZpZXc7XG5cdFx0fVxuXHRcdGNvbnN0IHQgPSB0aGlzLmxvY2FsZS50O1xuXHRcdGNvbnN0IGxhYmVsZWRJbnB1dCA9IG5ldyBMYWJlbGVkRmllbGRWaWV3KCB0aGlzLmxvY2FsZSwgY3JlYXRlTGFiZWxlZERyb3Bkb3duICk7XG5cblxuXG5cblx0XHRyZXR1cm4gbGFiZWxlZElucHV0O1xuXHR9XG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgYnV0dG9uIHZpZXcuXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBsYWJlbCBUaGUgYnV0dG9uIGxhYmVsLlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gaWNvbiBUaGUgYnV0dG9uIGljb24uXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgVGhlIGFkZGl0aW9uYWwgYnV0dG9uIENTUyBjbGFzcyBuYW1lLlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gW2V2ZW50TmFtZV0gQW4gZXZlbnQgbmFtZSB0aGF0IHRoZSBgQnV0dG9uVmlldyNleGVjdXRlYCBldmVudCB3aWxsIGJlIGRlbGVnYXRlZCB0by5cblx0ICogQHJldHVybnMge21vZHVsZTp1aS9idXR0b24vYnV0dG9udmlld35CdXR0b25WaWV3fSBUaGUgYnV0dG9uIHZpZXcgaW5zdGFuY2UuXG5cdCAqL1xuXHRfY3JlYXRlQnV0dG9uKCBsYWJlbCwgaWNvbiwgY2xhc3NOYW1lLCBldmVudE5hbWUgKSB7XG5cdFx0Y29uc3QgYnV0dG9uID0gbmV3IEJ1dHRvblZpZXcoIHRoaXMubG9jYWxlICk7XG5cblx0XHRidXR0b24uc2V0KCB7XG5cdFx0XHRsYWJlbCxcblx0XHRcdGljb24sXG5cdFx0XHR0b29sdGlwOiB0cnVlXG5cdFx0fSApO1xuXHRcdGlmICh0eXBlb2YgY2xhc3NOYW1lICE9PSAndW5kZWZpbmVkJykge1xuXG5cdFx0XHRidXR0b24uZXh0ZW5kVGVtcGxhdGUoIHtcblx0XHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRcdGNsYXNzOiBjbGFzc05hbWVcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdGlmICggZXZlbnROYW1lICkge1xuXHRcdFx0YnV0dG9uLmRlbGVnYXRlKCAnZXhlY3V0ZScgKS50byggdGhpcywgZXZlbnROYW1lICk7XG5cdFx0fVxuXHRcdHJldHVybiBidXR0b247XG5cdH1cblx0X2NyZWF0ZURyb3Bkb3duQnV0dG9uKCBsYWJlbCApIHtcblx0XHRjb25zdCBidXR0b24gPSBuZXcgQnV0dG9uVmlldyggdGhpcy5sb2NhbGUgKTtcblxuXHRcdGJ1dHRvbi5zZXQoIHtcblx0XHRcdGlzRW5hYmxlZCA6IHRydWUsXG5cdFx0XHRsYWJlbCA6IGxhYmVsLFxuXHRcdFx0dG9vbHRpcDogdHJ1ZSxcblx0XHRcdHdpdGhUZXh0OiB0cnVlXG5cdFx0fSApO1xuXHRcdC8vIEV4ZWN1dGUgY29tbWFuZC5cblx0XHR0aGlzLmxpc3RlblRvKCBidXR0b24sICdleGVjdXRlJywgKCkgPT4ge1xuXHRcdFx0YnV0dG9uLmlzT24gPSB0cnVlO1xuXHRcdH0gKTtcblx0XHRyZXR1cm4gYnV0dG9uO1xuXHR9XG5cblx0LyoqXG5cdCAqIFBvcHVsYXRlcyB7QGxpbmsgbW9kdWxlOnVpL3ZpZXdjb2xsZWN0aW9uflZpZXdDb2xsZWN0aW9ufSBvZiB7QGxpbmsgbW9kdWxlOnVpL2J1dHRvbi9zd2l0Y2hidXR0b252aWV3flN3aXRjaEJ1dHRvblZpZXd9XG5cdCAqIG1hZGUgYmFzZWQgb24ge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmtjb21tYW5kfkxpbmtDb21tYW5kI21hbnVhbERlY29yYXRvcnN9LlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge21vZHVsZTpsaW5rL2xpbmtjb21tYW5kfkxpbmtDb21tYW5kfSBsaW5rQ29tbWFuZCBBIHJlZmVyZW5jZSB0byB0aGUgbGluayBjb21tYW5kLlxuXHQgKiBAcmV0dXJucyB7bW9kdWxlOnVpL3ZpZXdjb2xsZWN0aW9uflZpZXdDb2xsZWN0aW9ufSBvZiBzd2l0Y2ggYnV0dG9ucy5cblx0ICovXG5cdF9jcmVhdGVNYW51YWxEZWNvcmF0b3JTd2l0Y2hlcyggbGlua0NvbW1hbmQgKSB7XG5cdFx0Y29uc3Qgc3dpdGNoZXMgPSB0aGlzLmNyZWF0ZUNvbGxlY3Rpb24oKTtcblxuXHRcdGZvciAoIGNvbnN0IG1hbnVhbERlY29yYXRvciBvZiBsaW5rQ29tbWFuZC5tYW51YWxEZWNvcmF0b3JzICkge1xuXHRcdFx0Y29uc3Qgc3dpdGNoQnV0dG9uID0gbmV3IFN3aXRjaEJ1dHRvblZpZXcoIHRoaXMubG9jYWxlICk7XG5cblx0XHRcdHN3aXRjaEJ1dHRvbi5zZXQoIHtcblx0XHRcdFx0bmFtZTogbWFudWFsRGVjb3JhdG9yLmlkLFxuXHRcdFx0XHRsYWJlbDogbWFudWFsRGVjb3JhdG9yLmxhYmVsLFxuXHRcdFx0XHR3aXRoVGV4dDogdHJ1ZVxuXHRcdFx0fSApO1xuXG5cdFx0XHRzd2l0Y2hCdXR0b24uYmluZCggJ2lzT24nICkudG9NYW55KCBbIG1hbnVhbERlY29yYXRvciwgbGlua0NvbW1hbmQgXSwgJ3ZhbHVlJywgKCBkZWNvcmF0b3JWYWx1ZSwgY29tbWFuZFZhbHVlICkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gY29tbWFuZFZhbHVlID09PSB1bmRlZmluZWQgJiYgZGVjb3JhdG9yVmFsdWUgPT09IHVuZGVmaW5lZCA/IG1hbnVhbERlY29yYXRvci5kZWZhdWx0VmFsdWUgOiBkZWNvcmF0b3JWYWx1ZTtcblx0XHRcdH0gKTtcblxuXHRcdFx0c3dpdGNoQnV0dG9uLm9uKCAnZXhlY3V0ZScsICgpID0+IHtcblx0XHRcdFx0bWFudWFsRGVjb3JhdG9yLnNldCggJ3ZhbHVlJywgIXN3aXRjaEJ1dHRvbi5pc09uICk7XG5cdFx0XHR9ICk7XG5cblx0XHRcdHN3aXRjaGVzLmFkZCggc3dpdGNoQnV0dG9uICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHN3aXRjaGVzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFBvcHVsYXRlcyB0aGUge0BsaW5rICNjaGlsZHJlbn0gY29sbGVjdGlvbiBvZiB0aGUgZm9ybS5cblx0ICpcblx0ICogSWYge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmtjb21tYW5kfkxpbmtDb21tYW5kI21hbnVhbERlY29yYXRvcnMgbWFudWFsIGRlY29yYXRvcnN9IGFyZSBjb25maWd1cmVkIGluIHRoZSBlZGl0b3IsIGl0IGNyZWF0ZXMgYW5cblx0ICogYWRkaXRpb25hbCBgVmlld2Agd3JhcHBpbmcgYWxsIHtAbGluayAjX21hbnVhbERlY29yYXRvclN3aXRjaGVzfSBzd2l0Y2ggYnV0dG9ucyBjb3JyZXNwb25kaW5nXG5cdCAqIHRvIHRoZXNlIGRlY29yYXRvcnMuXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7bW9kdWxlOnV0aWxzL2NvbGxlY3Rpb25+Q29sbGVjdGlvbn0gbWFudWFsRGVjb3JhdG9ycyBBIHJlZmVyZW5jZSB0b1xuXHQgKiB0aGUgY29sbGVjdGlvbiBvZiBtYW51YWwgZGVjb3JhdG9ycyBzdG9yZWQgaW4gdGhlIGxpbmsgY29tbWFuZC5cblx0ICogQHJldHVybnMge21vZHVsZTp1aS92aWV3Y29sbGVjdGlvbn5WaWV3Q29sbGVjdGlvbn0gVGhlIGNoaWxkcmVuIG9mIGxpbmsgZm9ybSB2aWV3LlxuXHQgKi9cblx0X2NyZWF0ZUZvcm1DaGlsZHJlbiggbWFudWFsRGVjb3JhdG9ycyApIHtcblx0XHRjb25zdCBjaGlsZHJlbiA9IHRoaXMuY3JlYXRlQ29sbGVjdGlvbigpO1xuXG5cdFx0Y2hpbGRyZW4uYWRkKCB0aGlzLmxhYmVsSW5wdXRWaWV3ICk7XG5cdFx0Y2hpbGRyZW4uYWRkKCB0aGlzLnR5cGVJbnB1dFZpZXcgKTtcblxuXHRcdGlmICggbWFudWFsRGVjb3JhdG9ycy5sZW5ndGggKSB7XG5cdFx0XHRjb25zdCBhZGRpdGlvbmFsQnV0dG9uc1ZpZXcgPSBuZXcgVmlldygpO1xuXG5cdFx0XHRhZGRpdGlvbmFsQnV0dG9uc1ZpZXcuc2V0VGVtcGxhdGUoIHtcblx0XHRcdFx0dGFnOiAndWwnLFxuXHRcdFx0XHRjaGlsZHJlbjogdGhpcy5fbWFudWFsRGVjb3JhdG9yU3dpdGNoZXMubWFwKCBzd2l0Y2hCdXR0b24gPT4gKCB7XG5cdFx0XHRcdFx0dGFnOiAnbGknLFxuXHRcdFx0XHRcdGNoaWxkcmVuOiBbIHN3aXRjaEJ1dHRvbiBdLFxuXHRcdFx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0XHRcdGNsYXNzOiBbXG5cdFx0XHRcdFx0XHRcdCdjaycsXG5cdFx0XHRcdFx0XHRcdCdjay1saXN0X19pdGVtJ1xuXHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSApICksXG5cdFx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0XHRjbGFzczogW1xuXHRcdFx0XHRcdFx0J2NrJyxcblx0XHRcdFx0XHRcdCdjay1yZXNldCcsXG5cdFx0XHRcdFx0XHQnY2stbGlzdCdcblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHRcdGNoaWxkcmVuLmFkZCggYWRkaXRpb25hbEJ1dHRvbnNWaWV3ICk7XG5cdFx0fVxuXG5cdFx0Y2hpbGRyZW4uYWRkKCB0aGlzLnNhdmVCdXR0b25WaWV3ICk7XG5cdFx0Y2hpbGRyZW4uYWRkKCB0aGlzLmNhbmNlbEJ1dHRvblZpZXcgKTtcblxuXHRcdHJldHVybiBjaGlsZHJlbjtcblx0fVxufVxuXG4vKipcbiAqIEZpcmVkIHdoZW4gdGhlIGZvcm0gdmlldyBpcyBzdWJtaXR0ZWQgKHdoZW4gb25lIG9mIHRoZSBjaGlsZHJlbiB0cmlnZ2VyZWQgdGhlIHN1Ym1pdCBldmVudCksXG4gKiBmb3IgZXhhbXBsZSB3aXRoIGEgY2xpY2sgb24ge0BsaW5rICNzYXZlQnV0dG9uVmlld30uXG4gKlxuICogQGV2ZW50IHN1Ym1pdFxuICovXG5cbi8qKlxuICogRmlyZWQgd2hlbiB0aGUgZm9ybSB2aWV3IGlzIGNhbmNlbGVkLCBmb3IgZXhhbXBsZSB3aXRoIGEgY2xpY2sgb24ge0BsaW5rICNjYW5jZWxCdXR0b25WaWV3fS5cbiAqXG4gKiBAZXZlbnQgY2FuY2VsXG4gKi9cbiIsIi8qKlxuICogQGxpY2Vuc2UgQ29weXJpZ2h0IChjKSAyMDAzLTIwMjEsIENLU291cmNlIC0gRnJlZGVyaWNvIEtuYWJiZW4uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBGb3IgbGljZW5zaW5nLCBzZWUgTElDRU5TRS5tZCBvciBodHRwczovL2NrZWRpdG9yLmNvbS9sZWdhbC9ja2VkaXRvci1vc3MtbGljZW5zZVxuICovXG5cbi8qKlxuICogQG1vZHVsZSBsaW5rL3VpL2xpbmthY3Rpb25zdmlld1xuICovXG5cbmltcG9ydCB7IEJ1dHRvblZpZXcsIFZpZXcsIFZpZXdDb2xsZWN0aW9uLCBGb2N1c0N5Y2xlciB9IGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtdWkvc3JjJztcbmltcG9ydCB7IEZvY3VzVHJhY2tlciwgS2V5c3Ryb2tlSGFuZGxlciB9IGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtdXRpbHMvc3JjJztcbmltcG9ydCB7IGljb25zIH0gZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1jb3JlL3NyYyc7XG5cbmltcG9ydCB7IGVuc3VyZVNhZmVVcmwgfSBmcm9tICcuLi91dGlscyc7XG5cbi8vIFNlZTogIzg4MzMuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2tlZGl0b3I1LXJ1bGVzL2NrZWRpdG9yLWltcG9ydHNcbmltcG9ydCAnQGNrZWRpdG9yL2NrZWRpdG9yNS11aS90aGVtZS9jb21wb25lbnRzL3Jlc3BvbnNpdmUtZm9ybS9yZXNwb25zaXZlZm9ybS5jc3MnO1xuaW1wb3J0ICcuLi8uLi90aGVtZS90ZW1wbGF0ZWFjdGlvbnMuY3NzJztcblxuaW1wb3J0IHVubGlua0ljb24gZnJvbSAnLi4vLi4vdGhlbWUvaWNvbnMvdW5saW5rLnN2Zyc7XG5cbi8qKlxuICogVGhlIGxpbmsgYWN0aW9ucyB2aWV3IGNsYXNzLiBUaGlzIHZpZXcgZGlzcGxheXMgdGhlIGxpbmsgcHJldmlldywgYWxsb3dzXG4gKiB1bmxpbmtpbmcgb3IgZWRpdGluZyB0aGUgbGluay5cbiAqXG4gKiBAZXh0ZW5kcyBtb2R1bGU6dWkvdmlld35WaWV3XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlbXBsYXRlU2F2ZVZpZXcgZXh0ZW5kcyBWaWV3IHtcblx0LyoqXG5cdCAqIEBpbmhlcml0RG9jXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggbG9jYWxlICkge1xuXHRcdHN1cGVyKCBsb2NhbGUgKTtcblxuXHRcdGNvbnN0IHQgPSBsb2NhbGUudDtcblxuXG5cblx0XHQvKipcblx0XHQgKiBBbiBpbnN0YW5jZSBvZiB0aGUge0BsaW5rIG1vZHVsZTp1dGlscy9rZXlzdHJva2VoYW5kbGVyfktleXN0cm9rZUhhbmRsZXJ9LlxuXHRcdCAqXG5cdFx0ICogQHJlYWRvbmx5XG5cdFx0ICogQG1lbWJlciB7bW9kdWxlOnV0aWxzL2tleXN0cm9rZWhhbmRsZXJ+S2V5c3Ryb2tlSGFuZGxlcn1cblx0XHQgKi9cblx0XHR0aGlzLmtleXN0cm9rZXMgPSBuZXcgS2V5c3Ryb2tlSGFuZGxlcigpO1xuXG5cdFx0LyoqXG5cdFx0ICogVGhlIGhyZWYgcHJldmlldyB2aWV3LlxuXHRcdCAqXG5cdFx0ICogQG1lbWJlciB7bW9kdWxlOnVpL3ZpZXd+Vmlld31cblx0XHQgKi9cblx0XHR0aGlzLnByZXZpZXdCdXR0b25WaWV3ID0gdGhpcy5fY3JlYXRlUHJldmlld0J1dHRvbigpO1xuXG5cdFx0LyoqXG5cdFx0ICogVGhlIHVubGluayBidXR0b24gdmlldy5cblx0XHQgKlxuXHRcdCAqIEBtZW1iZXIge21vZHVsZTp1aS9idXR0b24vYnV0dG9udmlld35CdXR0b25WaWV3fVxuXHRcdCAqL1xuXHRcdHRoaXMudW5saW5rQnV0dG9uVmlldyA9IHRoaXMuX2NyZWF0ZUJ1dHRvbiggdCggJ0NhbmNlbCBUZW1wbGF0ZSBWYXInICksIHVubGlua0ljb24sICdjYW5jZWxUZW1wbGF0ZScgKTtcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBlZGl0IGxpbmsgYnV0dG9uIHZpZXcuXG5cdFx0ICpcblx0XHQgKiBAbWVtYmVyIHttb2R1bGU6dWkvYnV0dG9uL2J1dHRvbnZpZXd+QnV0dG9uVmlld31cblx0XHQgKi9cblx0XHR0aGlzLmVkaXRCdXR0b25WaWV3ID0gdGhpcy5fY3JlYXRlQnV0dG9uKCB0KCAnRWRpdCBUZW1wbGF0ZSBWYXInICksIGljb25zLnBlbmNpbCwgJ2VkaXQnICk7XG5cblx0XHQvKipcblx0XHQgKiBUaGUgdmFsdWUgb2YgdGhlIFwiaHJlZlwiIGF0dHJpYnV0ZSBvZiB0aGUgbGluayB0byB1c2UgaW4gdGhlIHtAbGluayAjcHJldmlld0J1dHRvblZpZXd9LlxuXHRcdCAqXG5cdFx0ICogQG9ic2VydmFibGVcblx0XHQgKiBAbWVtYmVyIHtTdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5zZXQoICdkYXRhLXRlbXBsYXRlLXZhcicgKTtcblxuXG5cblx0XHR0aGlzLnNldFRlbXBsYXRlKCB7XG5cdFx0XHR0YWc6ICdkaXYnLFxuXG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGNsYXNzOiBbXG5cdFx0XHRcdFx0J2NrJyxcblx0XHRcdFx0XHQnY2stbGluay1hY3Rpb25zJyxcblx0XHRcdFx0XHQnY2stcmVzcG9uc2l2ZS1mb3JtJ1xuXHRcdFx0XHRdLFxuXG5cdFx0XHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ja2VkaXRvci9ja2VkaXRvcjUtbGluay9pc3N1ZXMvOTBcblx0XHRcdFx0dGFiaW5kZXg6ICctMSdcblx0XHRcdH0sXG5cblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdHRoaXMucHJldmlld0J1dHRvblZpZXcsXG5cdFx0XHRcdHRoaXMuZWRpdEJ1dHRvblZpZXcsXG5cdFx0XHRcdHRoaXMudW5saW5rQnV0dG9uVmlld1xuXHRcdFx0XVxuXHRcdH0gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5oZXJpdERvY1xuXHQgKi9cblx0cmVuZGVyKCkge1xuXHRcdHN1cGVyLnJlbmRlcigpO1xuXG5cdFx0Y29uc3QgY2hpbGRWaWV3cyA9IFtcblx0XHRcdHRoaXMucHJldmlld0J1dHRvblZpZXcsXG5cdFx0XHR0aGlzLmVkaXRCdXR0b25WaWV3LFxuXHRcdFx0dGhpcy51bmxpbmtCdXR0b25WaWV3XG5cdFx0XTtcblxuXHRcdGNoaWxkVmlld3MuZm9yRWFjaCggdiA9PiB7XG5cdFx0fSApO1xuXG5cdFx0Ly8gU3RhcnQgbGlzdGVuaW5nIGZvciB0aGUga2V5c3Ryb2tlcyBjb21pbmcgZnJvbSAjZWxlbWVudC5cblx0XHR0aGlzLmtleXN0cm9rZXMubGlzdGVuVG8oIHRoaXMuZWxlbWVudCApO1xuXHR9XG5cblxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgYnV0dG9uIHZpZXcuXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBsYWJlbCBUaGUgYnV0dG9uIGxhYmVsLlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gaWNvbiBUaGUgYnV0dG9uIGljb24uXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBbZXZlbnROYW1lXSBBbiBldmVudCBuYW1lIHRoYXQgdGhlIGBCdXR0b25WaWV3I2V4ZWN1dGVgIGV2ZW50IHdpbGwgYmUgZGVsZWdhdGVkIHRvLlxuXHQgKiBAcmV0dXJucyB7bW9kdWxlOnVpL2J1dHRvbi9idXR0b252aWV3fkJ1dHRvblZpZXd9IFRoZSBidXR0b24gdmlldyBpbnN0YW5jZS5cblx0ICovXG5cdF9jcmVhdGVCdXR0b24oIGxhYmVsLCBpY29uLCBldmVudE5hbWUgKSB7XG5cdFx0Y29uc3QgYnV0dG9uID0gbmV3IEJ1dHRvblZpZXcoIHRoaXMubG9jYWxlICk7XG5cblx0XHRidXR0b24uc2V0KCB7XG5cdFx0XHRsYWJlbCxcblx0XHRcdGljb24sXG5cdFx0XHR0b29sdGlwOiB0cnVlXG5cdFx0fSApO1xuXG5cdFx0YnV0dG9uLmRlbGVnYXRlKCAnZXhlY3V0ZScgKS50byggdGhpcywgZXZlbnROYW1lICk7XG5cblx0XHRyZXR1cm4gYnV0dG9uO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBsaW5rIGhyZWYgcHJldmlldyBidXR0b24uXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEByZXR1cm5zIHttb2R1bGU6dWkvYnV0dG9uL2J1dHRvbnZpZXd+QnV0dG9uVmlld30gVGhlIGJ1dHRvbiB2aWV3IGluc3RhbmNlLlxuXHQgKi9cblx0X2NyZWF0ZVByZXZpZXdCdXR0b24oKSB7XG5cdFx0Y29uc3QgYnV0dG9uID0gbmV3IEJ1dHRvblZpZXcoIHRoaXMubG9jYWxlICk7XG5cdFx0Y29uc3QgYmluZCA9IHRoaXMuYmluZFRlbXBsYXRlO1xuXHRcdGNvbnN0IHQgPSB0aGlzLnQ7XG5cblx0XHRidXR0b24uc2V0KCB7XG5cdFx0XHR3aXRoVGV4dDogdHJ1ZSxcblx0XHRcdHRvb2x0aXA6IHQoICd0ZW1wbGF0ZSB2YWxpYWJsZSBpZCcgKVxuXHRcdH0gKTtcblxuXHRcdGJ1dHRvbi5leHRlbmRUZW1wbGF0ZSgge1xuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRjbGFzczogW1xuXHRcdFx0XHRcdCdjaycsXG5cdFx0XHRcdFx0J2NrLWxpbmstYWN0aW9uc19fcHJldmlldydcblx0XHRcdFx0XSxcblx0XHRcdFx0aWQ6IGJpbmQudG8oICdpZCcsIGlkID0+IGlkICApICxcblx0XHRcdFx0dGFyZ2V0OiAnX2JsYW5rJyxcblx0XHRcdFx0cmVsOiAnbm9vcGVuZXIgbm9yZWZlcnJlcidcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0XHRidXR0b24uYmluZCggJ2xhYmVsJyApLnRvKCB0aGlzLCAnZGF0YS10ZW1wbGF0ZS12YXInLCBpZCA9PiB7XG5cdFx0XHRyZXR1cm4gaWQgfHwgdCggJ1RoaXMgdmFyaWFibGUgaGFzIG5vIGlkJyApO1xuXHRcdH0gKTtcblxuXHRcdGJ1dHRvbi5iaW5kKCAnaXNFbmFibGVkJyApLnRvKCB0aGlzLCAnZGF0YS10ZW1wbGF0ZS12YXInLCBpZCA9PiAhIWlkICk7XG5cblx0XHRidXR0b24udGVtcGxhdGUudGFnID0gJ3NwYW4nO1xuXHRcdGJ1dHRvbi50ZW1wbGF0ZS5ldmVudExpc3RlbmVycyA9IHt9O1xuXG5cdFx0cmV0dXJuIGJ1dHRvbjtcblx0fVxufVxuXG4vKipcbiAqIEZpcmVkIHdoZW4gdGhlIHtAbGluayAjZWRpdEJ1dHRvblZpZXd9IGlzIGNsaWNrZWQuXG4gKlxuICogQGV2ZW50IGVkaXRcbiAqL1xuXG4vKipcbiAqIEZpcmVkIHdoZW4gdGhlIHtAbGluayAjdW5saW5rQnV0dG9uVmlld30gaXMgY2xpY2tlZC5cbiAqXG4gKiBAZXZlbnQgdW5saW5rXG4gKi9cbiIsIi8qKlxuICogQGxpY2Vuc2UgQ29weXJpZ2h0IChjKSAyMDAzLTIwMjEsIENLU291cmNlIC0gRnJlZGVyaWNvIEtuYWJiZW4uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBGb3IgbGljZW5zaW5nLCBzZWUgTElDRU5TRS5tZCBvciBodHRwczovL2NrZWRpdG9yLmNvbS9sZWdhbC9ja2VkaXRvci1vc3MtbGljZW5zZVxuICovXG5cbi8qKlxuICogQG1vZHVsZSBsaW5rL3V0aWxzXG4gKi9cblxuaW1wb3J0IHsgdXBwZXJGaXJzdCB9IGZyb20gJ2xvZGFzaC1lcyc7XG5cbmNvbnN0IEFUVFJJQlVURV9XSElURVNQQUNFUyA9IC9bXFx1MDAwMC1cXHUwMDIwXFx1MDBBMFxcdTE2ODBcXHUxODBFXFx1MjAwMC1cXHUyMDI5XFx1MjA1ZlxcdTMwMDBdL2c7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29udHJvbC1yZWdleFxuY29uc3QgU0FGRV9VUkwgPSAvXig/Oig/Omh0dHBzP3xmdHBzP3xtYWlsdG8pOnxbXmEtel18W2EteisuLV0rKD86W15hLXorLjotXXwkKSkvaTtcblxuLy8gU2ltcGxpZmllZCBlbWFpbCB0ZXN0IC0gc2hvdWxkIGJlIHJ1biBvdmVyIHByZXZpb3VzbHkgZm91bmQgVVJMLlxuY29uc3QgRU1BSUxfUkVHX0VYUCA9IC9eW1xcU10rQCgoPyFbLV9dKSg/OlstXFx3XFx1MDBhMS1cXHVmZmZmXXswLDYzfVteLV9dXFwuKSkrKD86W2EtelxcdTAwYTEtXFx1ZmZmZl17Mix9KSQvaTtcblxuLy8gVGhlIHJlZ2V4IGNoZWNrcyBmb3IgdGhlIHByb3RvY29sIHN5bnRheCAoJ3h4eHg6Ly8nIG9yICd4eHh4OicpXG4vLyBvciBub24td29yZCBjaGFyYWN0ZXJzIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGxpbmsgKCcvJywgJyMnIGV0Yy4pLlxuY29uc3QgUFJPVE9DT0xfUkVHX0VYUCA9IC9eKChcXHcrOihcXC97Mix9KT8pfChcXFcpKS9pO1xuY29uc3QgSElHSExJR0hUX0NMQVNTID0gJ2NrLXRlbXBsYXRlJztcbi8qKlxuICogQSBrZXlzdHJva2UgdXNlZCBieSB0aGUge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt1aX5UZW1wbGF0ZVVpIGxpbmsgVUkgZmVhdHVyZX0uXG4gKi9cbmV4cG9ydCBjb25zdCBURU1QTEFURV9LRVlTVFJPS0UgPSAnQ3RybCtFJztcbmV4cG9ydCBjb25zdCBTQVZFX0tFWVNUUk9LRSA9ICdDdHJsK1NoaWZ0K1MnO1xuXG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIGEgZ2l2ZW4gdmlldyBub2RlIGlzIHRoZSBsaW5rIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6ZW5naW5lL3ZpZXcvbm9kZX5Ob2RlfSBub2RlXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTGlua0VsZW1lbnQoIG5vZGUgKSB7XG5cdHJldHVybiBub2RlLmlzKCAnYXR0cmlidXRlRWxlbWVudCcgKSAmJiAhIW5vZGUuZ2V0Q3VzdG9tUHJvcGVydHkoICd0ZW1wbGF0ZScgKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbGluayB7QGxpbmsgbW9kdWxlOmVuZ2luZS92aWV3L2F0dHJpYnV0ZWVsZW1lbnR+QXR0cmlidXRlRWxlbWVudH0gd2l0aCB0aGUgcHJvdmlkZWQgYGhyZWZgIGF0dHJpYnV0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaHJlZlxuICogQHBhcmFtIHttb2R1bGU6ZW5naW5lL2NvbnZlcnNpb24vZG93bmNhc3RkaXNwYXRjaGVyfkRvd25jYXN0Q29udmVyc2lvbkFwaX0gY29udmVyc2lvbkFwaVxuICogQHJldHVybnMge21vZHVsZTplbmdpbmUvdmlldy9hdHRyaWJ1dGVlbGVtZW50fkF0dHJpYnV0ZUVsZW1lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUZW1wbGF0ZUVsZW1lbnQoIGlkLCB7IHdyaXRlciB9ICkge1xuXHQvL2lmKGlkICE9PSBudWxsKXtcblxuXHRcdC8vIFByaW9yaXR5IDUgLSBodHRwczovL2dpdGh1Yi5jb20vY2tlZGl0b3IvY2tlZGl0b3I1LWxpbmsvaXNzdWVzLzEyMS5cblx0XHRjb25zdCBsaW5rRWxlbWVudCA9IHdyaXRlci5jcmVhdGVBdHRyaWJ1dGVFbGVtZW50KCAnc3BhbicsICB7IGNsYXNzOiBISUdITElHSFRfQ0xBU1MgLCAnZGF0YS10ZW1wbGF0ZS12YXInIDogaWQgfSwgeyBwcmlvcml0eTogNSB9ICk7XG5cdFx0d3JpdGVyLnNldEN1c3RvbVByb3BlcnR5KCAndGVtcGxhdGUnLCB0cnVlLCBsaW5rRWxlbWVudCApO1xuXG5cdFx0cmV0dXJuIGxpbmtFbGVtZW50O1xuXHQvL31cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc2FmZSBVUkwgYmFzZWQgb24gYSBnaXZlbiB2YWx1ZS5cbiAqXG4gKiBBIFVSTCBpcyBjb25zaWRlcmVkIHNhZmUgaWYgaXQgaXMgc2FmZSBmb3IgdGhlIHVzZXIgKGRvZXMgbm90IGNvbnRhaW4gYW55IG1hbGljaW91cyBjb2RlKS5cbiAqXG4gKiBJZiBhIFVSTCBpcyBjb25zaWRlcmVkIHVuc2FmZSwgYSBzaW1wbGUgYFwiI1wiYCBpcyByZXR1cm5lZC5cbiAqXG4gKiBAcHJvdGVjdGVkXG4gKiBAcGFyYW0geyp9IHVybFxuICogQHJldHVybnMge1N0cmluZ30gU2FmZSBVUkwuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbnN1cmVTYWZlVXJsKCB1cmwgKSB7XG5cdHVybCA9IFN0cmluZyggdXJsICk7XG5cblx0cmV0dXJuIGlzU2FmZVVybCggdXJsICkgPyB1cmwgOiAnIyc7XG59XG5cbi8vIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBVUkwgaXMgc2FmZSBmb3IgdGhlIHVzZXIgKGRvZXMgbm90IGNvbnRhaW4gYW55IG1hbGljaW91cyBjb2RlKS5cbi8vXG4vLyBAcGFyYW0ge1N0cmluZ30gdXJsIFVSTCB0byBjaGVjay5cbmZ1bmN0aW9uIGlzU2FmZVVybCggdXJsICkge1xuXHRjb25zdCBub3JtYWxpemVkVXJsID0gdXJsLnJlcGxhY2UoIEFUVFJJQlVURV9XSElURVNQQUNFUywgJycgKTtcblxuXHRyZXR1cm4gbm9ybWFsaXplZFVybC5tYXRjaCggU0FGRV9VUkwgKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSB7QGxpbmsgbW9kdWxlOmxpbmsvbGlua35MaW5rQ29uZmlnI2RlY29yYXRvcnMgYGNvbmZpZy5saW5rLmRlY29yYXRvcnNgfSBjb25maWd1cmF0aW9uIHByb2Nlc3NlZFxuICogdG8gcmVzcGVjdCB0aGUgbG9jYWxlIG9mIHRoZSBlZGl0b3IsIGkuZS4gdG8gZGlzcGxheSB0aGUge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt+TGlua0RlY29yYXRvck1hbnVhbERlZmluaXRpb24gbGFiZWx9XG4gKiBpbiB0aGUgY29ycmVjdCBsYW5ndWFnZS5cbiAqXG4gKiAqKk5vdGUqKjogT25seSB0aGUgZmV3IG1vc3QgY29tbW9ubHkgdXNlZCBsYWJlbHMgYXJlIHRyYW5zbGF0ZWQgYXV0b21hdGljYWxseS4gT3RoZXIgbGFiZWxzIHNob3VsZCBiZSBtYW51YWxseVxuICogdHJhbnNsYXRlZCBpbiB0aGUge0BsaW5rIG1vZHVsZTpsaW5rL2xpbmt+TGlua0NvbmZpZyNkZWNvcmF0b3JzIGBjb25maWcubGluay5kZWNvcmF0b3JzYH0gY29uZmlndXJhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTp1dGlscy9sb2NhbGV+TG9jYWxlI3R9IHQgc2hvcnRoYW5kIGZvciB7QGxpbmsgbW9kdWxlOnV0aWxzL2xvY2FsZX5Mb2NhbGUjdCBMb2NhbGUjdH1cbiAqIEBwYXJhbSB7QXJyYXkuPG1vZHVsZTpsaW5rL2xpbmt+TGlua0RlY29yYXRvckRlZmluaXRpb24+fSBUaGUgZGVjb3JhdG9yIHJlZmVyZW5jZVxuICogd2hlcmUgdGhlIGxhYmVsIHZhbHVlcyBzaG91bGQgYmUgbG9jYWxpemVkLlxuICogQHJldHVybnMge0FycmF5Ljxtb2R1bGU6bGluay9saW5rfkxpbmtEZWNvcmF0b3JEZWZpbml0aW9uPn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2FsaXplZERlY29yYXRvcnMoIHQsIGRlY29yYXRvcnMgKSB7XG5cdGNvbnN0IGxvY2FsaXplZERlY29yYXRvcnNMYWJlbHMgPSB7XG5cdFx0J09wZW4gaW4gYSBuZXcgdGFiJzogdCggJ09wZW4gaW4gYSBuZXcgdGFiJyApLFxuXHRcdCdEb3dubG9hZGFibGUnOiB0KCAnRG93bmxvYWRhYmxlJyApXG5cdH07XG5cblx0ZGVjb3JhdG9ycy5mb3JFYWNoKCBkZWNvcmF0b3IgPT4ge1xuXHRcdGlmICggZGVjb3JhdG9yLmxhYmVsICYmIGxvY2FsaXplZERlY29yYXRvcnNMYWJlbHNbIGRlY29yYXRvci5sYWJlbCBdICkge1xuXHRcdFx0ZGVjb3JhdG9yLmxhYmVsID0gbG9jYWxpemVkRGVjb3JhdG9yc0xhYmVsc1sgZGVjb3JhdG9yLmxhYmVsIF07XG5cdFx0fVxuXHRcdHJldHVybiBkZWNvcmF0b3I7XG5cdH0gKTtcblxuXHRyZXR1cm4gZGVjb3JhdG9ycztcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhbiBvYmplY3Qgd2l0aCBkZWZpbmVkIGRlY29yYXRvcnMgdG8gYSBub3JtYWxpemVkIGFycmF5IG9mIGRlY29yYXRvcnMuIFRoZSBgaWRgIGtleSBpcyBhZGRlZCBmb3IgZWFjaCBkZWNvcmF0b3IgYW5kXG4gKiBpcyB1c2VkIGFzIHRoZSBhdHRyaWJ1dGUncyBuYW1lIGluIHRoZSBtb2RlbC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdC48U3RyaW5nLCBtb2R1bGU6bGluay9saW5rfkxpbmtEZWNvcmF0b3JEZWZpbml0aW9uPn0gZGVjb3JhdG9yc1xuICogQHJldHVybnMge0FycmF5Ljxtb2R1bGU6bGluay9saW5rfkxpbmtEZWNvcmF0b3JEZWZpbml0aW9uPn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZURlY29yYXRvcnMoIGRlY29yYXRvcnMgKSB7XG5cdGNvbnN0IHJldEFycmF5ID0gW107XG5cblx0aWYgKCBkZWNvcmF0b3JzICkge1xuXHRcdGZvciAoIGNvbnN0IFsga2V5LCB2YWx1ZSBdIG9mIE9iamVjdC5lbnRyaWVzKCBkZWNvcmF0b3JzICkgKSB7XG5cdFx0XHRjb25zdCBkZWNvcmF0b3IgPSBPYmplY3QuYXNzaWduKFxuXHRcdFx0XHR7fSxcblx0XHRcdFx0dmFsdWUsXG5cdFx0XHRcdHsgaWQ6IGBsaW5rJHsgdXBwZXJGaXJzdCgga2V5ICkgfWAgfVxuXHRcdFx0KTtcblx0XHRcdHJldEFycmF5LnB1c2goIGRlY29yYXRvciApO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiByZXRBcnJheTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgc3BlY2lmaWVkIGBlbGVtZW50YCBpcyBhbiBpbWFnZSBhbmQgaXQgY2FuIGJlIGxpbmtlZCAodGhlIGVsZW1lbnQgYWxsb3dzIGhhdmluZyB0aGUgYGxpbmtIcmVmYCBhdHRyaWJ1dGUpLlxuICpcbiAqIEBwYXJhbXMge21vZHVsZTplbmdpbmUvbW9kZWwvZWxlbWVudH5FbGVtZW50fG51bGx9IGVsZW1lbnRcbiAqIEBwYXJhbXMge21vZHVsZTplbmdpbmUvbW9kZWwvc2NoZW1hflNjaGVtYX0gc2NoZW1hXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzSW1hZ2VBbGxvd2VkKCBlbGVtZW50LCBzY2hlbWEgKSB7XG5cdGlmICggIWVsZW1lbnQgKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIGVsZW1lbnQuaXMoICdlbGVtZW50JywgJ2ltYWdlJyApICYmIHNjaGVtYS5jaGVja0F0dHJpYnV0ZSggJ2ltYWdlJywgJ2xpbmtIcmVmJyApO1xufVxuXG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBzcGVjaWZpZWQgYHZhbHVlYCBpcyBhbiBlbWFpbC5cbiAqXG4gKiBAcGFyYW1zIHtTdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRW1haWwoIHZhbHVlICkge1xuXHRyZXR1cm4gRU1BSUxfUkVHX0VYUC50ZXN0KCB2YWx1ZSApO1xufVxuXG4vKipcbiAqIEFkZHMgdGhlIHByb3RvY29sIHByZWZpeCB0byB0aGUgc3BlY2lmaWVkIGBsaW5rYCB3aGVuOlxuICpcbiAqICogaXQgZG9lcyBub3QgY29udGFpbiBpdCBhbHJlYWR5LCBhbmQgdGhlcmUgaXMgYSB7QGxpbmsgbW9kdWxlOmxpbmsvbGlua35MaW5rQ29uZmlnI2RlZmF1bHRQcm90b2NvbCBgZGVmYXVsdFByb3RvY29sYCB9XG4gKiBjb25maWd1cmF0aW9uIHZhbHVlIHByb3ZpZGVkLFxuICogKiBvciB0aGUgbGluayBpcyBhbiBlbWFpbCBhZGRyZXNzLlxuICpcbiAqXG4gKiBAcGFyYW1zIHtTdHJpbmd9IGxpbmtcbiAqIEBwYXJhbXMge1N0cmluZ30gZGVmYXVsdFByb3RvY29sXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZExpbmtQcm90b2NvbElmQXBwbGljYWJsZSggbGluaywgZGVmYXVsdFByb3RvY29sICkge1xuXHRjb25zdCBwcm90b2NvbCA9IGlzRW1haWwoIGxpbmsgKSA/ICdtYWlsdG86JyA6IGRlZmF1bHRQcm90b2NvbDtcblx0Y29uc3QgaXNQcm90b2NvbE5lZWRlZCA9ICEhcHJvdG9jb2wgJiYgIVBST1RPQ09MX1JFR19FWFAudGVzdCggbGluayApO1xuXG5cdHJldHVybiBsaW5rICYmIGlzUHJvdG9jb2xOZWVkZWQgPyBwcm90b2NvbCArIGxpbmsgOiBsaW5rO1xufVxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8qKlxuICogQSBwbHVnaW4gdGhhdCBjb252ZXJ0cyBjdXN0b20gYXR0cmlidXRlcyBmb3IgZWxlbWVudHMgdGhhdCBhcmUgd3JhcHBlZCBpbiA8ZmlndXJlPiBpbiB0aGUgdmlldy5cbiAqL1xuY2xhc3MgQ3VzdG9tRmlndXJlQXR0cmlidXRlcyB7XG5cdC8qKlxuXHQgKiBQbHVnaW4ncyBjb25zdHJ1Y3RvciAtIHJlY2VpdmVzIGFuIGVkaXRvciBpbnN0YW5jZSBvbiBjcmVhdGlvbi5cblx0ICovXG5cdGNvbnN0cnVjdG9yKCBlZGl0b3IgKSB7XG5cdFx0Ly8gU2F2ZSByZWZlcmVuY2UgdG8gdGhlIGVkaXRvci5cblx0XHR0aGlzLmVkaXRvciA9IGVkaXRvcjtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXRzIHRoZSBjb252ZXJzaW9uIHVwIGFuZCBleHRlbmRzIHRoZSB0YWJsZSAmIGltYWdlIGZlYXR1cmVzIHNjaGVtYS5cblx0ICpcblx0ICogU2NoZW1hIGV4dGVuZGluZyBtdXN0IGJlIGRvbmUgaW4gdGhlIFwiYWZ0ZXJJbml0KClcIiBjYWxsIGJlY2F1c2UgcGx1Z2lucyBkZWZpbmUgdGhlaXIgc2NoZW1hIGluIFwiaW5pdCgpXCIuXG5cdCAqL1xuXHRhZnRlckluaXQoKSB7XG5cdFx0Y29uc3QgZWRpdG9yID0gdGhpcy5lZGl0b3I7XG5cblx0XHQvLyBEZWZpbmUgb24gd2hpY2ggZWxlbWVudHMgdGhlIENTUyBjbGFzc2VzIHNob3VsZCBiZSBwcmVzZXJ2ZWQ6XG5cdFx0c2V0dXBDdXN0b21DbGFzc0NvbnZlcnNpb24oICdpbWcnLCAnaW1hZ2UnLCBlZGl0b3IgKTtcblx0XHRzZXR1cEN1c3RvbUNsYXNzQ29udmVyc2lvbiggJ3RhYmxlJywgJ3RhYmxlJywgZWRpdG9yICk7XG5cblx0XHRlZGl0b3IuY29udmVyc2lvbi5mb3IoICd1cGNhc3QnICkuYWRkKCB1cGNhc3RDdXN0b21DbGFzc2VzKCAnZmlndXJlJyApLCB7IHByaW9yaXR5OiAnbG93JyB9ICk7XG5cblx0XHQvLyBEZWZpbmUgY3VzdG9tIGF0dHJpYnV0ZXMgdGhhdCBzaG91bGQgYmUgcHJlc2VydmVkLlxuXHRcdHNldHVwQ3VzdG9tQXR0cmlidXRlQ29udmVyc2lvbiggJ2ltZycsICdpbWFnZScsICdpZCcsIGVkaXRvciApO1xuXHRcdHNldHVwQ3VzdG9tQXR0cmlidXRlQ29udmVyc2lvbiggJ3RhYmxlJywgJ3RhYmxlJywgJ2lkJywgZWRpdG9yICk7XG5cdH1cbn1cblxuLyoqXG4gKiBTZXRzIHVwIGEgY29udmVyc2lvbiB0aGF0IHByZXNlcnZlcyBjbGFzc2VzIG9uIDxpbWc+IGFuZCA8dGFibGU+IGVsZW1lbnRzLlxuICovXG5mdW5jdGlvbiBzZXR1cEN1c3RvbUNsYXNzQ29udmVyc2lvbiggdmlld0VsZW1lbnROYW1lLCBtb2RlbEVsZW1lbnROYW1lLCBlZGl0b3IgKSB7XG5cdC8vIFRoZSAnY3VzdG9tQ2xhc3MnIGF0dHJpYnV0ZSBzdG9yZXMgY3VzdG9tIGNsYXNzZXMgZnJvbSB0aGUgZGF0YSBpbiB0aGUgbW9kZWwgc28gdGhhdCBzY2hlbWEgZGVmaW5pdGlvbnMgYWxsb3cgdGhpcyBhdHRyaWJ1dGUuXG5cdGVkaXRvci5tb2RlbC5zY2hlbWEuZXh0ZW5kKCBtb2RlbEVsZW1lbnROYW1lLCB7IGFsbG93QXR0cmlidXRlczogWyAnY3VzdG9tQ2xhc3MnIF0gfSApO1xuXG5cdC8vIERlZmluZXMgdXBjYXN0IGNvbnZlcnRlcnMgZm9yIHRoZSA8aW1nPiBhbmQgPHRhYmxlPiBlbGVtZW50cyB3aXRoIGEgXCJsb3dcIiBwcmlvcml0eSBzbyB0aGV5IGFyZSBydW4gYWZ0ZXIgdGhlIGRlZmF1bHQgY29udmVydGVycy5cblx0ZWRpdG9yLmNvbnZlcnNpb24uZm9yKCAndXBjYXN0JyApLmFkZCggdXBjYXN0Q3VzdG9tQ2xhc3Nlcyggdmlld0VsZW1lbnROYW1lICksIHsgcHJpb3JpdHk6ICdsb3cnIH0gKTtcblxuXHQvLyBEZWZpbmVzIGRvd25jYXN0IGNvbnZlcnRlcnMgZm9yIGEgbW9kZWwgZWxlbWVudCB3aXRoIGEgXCJsb3dcIiBwcmlvcml0eSBzbyB0aGV5IGFyZSBydW4gYWZ0ZXIgdGhlIGRlZmF1bHQgY29udmVydGVycy5cblx0Ly8gVXNlIGBkb3duY2FzdEN1c3RvbUNsYXNzZXNUb0ZpZ3VyZWAgaWYgeW91IHdhbnQgdG8ga2VlcCB5b3VyIGNsYXNzZXMgb24gPGZpZ3VyZT4gZWxlbWVudCBvciBgZG93bmNhc3RDdXN0b21DbGFzc2VzVG9DaGlsZGBcblx0Ly8gaWYgeW91IHdvdWxkIGxpa2UgdG8ga2VlcCB5b3VyIGNsYXNzZXMgb24gYSA8ZmlndXJlPiBjaGlsZCBlbGVtZW50LCBpLmUuIDxpbWc+LlxuXHRlZGl0b3IuY29udmVyc2lvbi5mb3IoICdkb3duY2FzdCcgKS5hZGQoIGRvd25jYXN0Q3VzdG9tQ2xhc3Nlc1RvRmlndXJlKCBtb2RlbEVsZW1lbnROYW1lICksIHsgcHJpb3JpdHk6ICdsb3cnIH0gKTtcblx0Ly8gZWRpdG9yLmNvbnZlcnNpb24uZm9yKCAnZG93bmNhc3QnICkuYWRkKCBkb3duY2FzdEN1c3RvbUNsYXNzZXNUb0NoaWxkKCB2aWV3RWxlbWVudE5hbWUsIG1vZGVsRWxlbWVudE5hbWUgKSwgeyBwcmlvcml0eTogJ2xvdycgfSApO1xufVxuXG4vKipcbiAqIFNldHMgdXAgYSBjb252ZXJzaW9uIGZvciBhIGN1c3RvbSBhdHRyaWJ1dGUgb24gdGhlIHZpZXcgZWxlbWVudHMgY29udGFpbmVkIGluc2lkZSBhIDxmaWd1cmU+LlxuICpcbiAqIFRoaXMgbWV0aG9kOlxuICogLSBBZGRzIHByb3BlciBzY2hlbWEgcnVsZXMuXG4gKiAtIEFkZHMgYW4gdXBjYXN0IGNvbnZlcnRlci5cbiAqIC0gQWRkcyBhIGRvd25jYXN0IGNvbnZlcnRlci5cbiAqL1xuZnVuY3Rpb24gc2V0dXBDdXN0b21BdHRyaWJ1dGVDb252ZXJzaW9uKCB2aWV3RWxlbWVudE5hbWUsIG1vZGVsRWxlbWVudE5hbWUsIHZpZXdBdHRyaWJ1dGUsIGVkaXRvciApIHtcblx0Ly8gRXh0ZW5kcyB0aGUgc2NoZW1hIHRvIHN0b3JlIGFuIGF0dHJpYnV0ZSBpbiB0aGUgbW9kZWwuXG5cdGNvbnN0IG1vZGVsQXR0cmlidXRlID0gYGN1c3RvbSR7IHZpZXdBdHRyaWJ1dGUgfWA7XG5cblx0ZWRpdG9yLm1vZGVsLnNjaGVtYS5leHRlbmQoIG1vZGVsRWxlbWVudE5hbWUsIHsgYWxsb3dBdHRyaWJ1dGVzOiBbIG1vZGVsQXR0cmlidXRlIF0gfSApO1xuXG5cdGVkaXRvci5jb252ZXJzaW9uLmZvciggJ3VwY2FzdCcgKS5hZGQoIHVwY2FzdEF0dHJpYnV0ZSggdmlld0VsZW1lbnROYW1lLCB2aWV3QXR0cmlidXRlLCBtb2RlbEF0dHJpYnV0ZSApICk7XG5cdGVkaXRvci5jb252ZXJzaW9uLmZvciggJ2Rvd25jYXN0JyApLmFkZCggZG93bmNhc3RBdHRyaWJ1dGUoIG1vZGVsRWxlbWVudE5hbWUsIHZpZXdFbGVtZW50TmFtZSwgdmlld0F0dHJpYnV0ZSwgbW9kZWxBdHRyaWJ1dGUgKSApO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gdXBjYXN0IGNvbnZlcnRlciB0aGF0IHdpbGwgcGFzcyBhbGwgY2xhc3NlcyBmcm9tIHRoZSB2aWV3IGVsZW1lbnQgdG8gdGhlIG1vZGVsIGVsZW1lbnQuXG4gKi9cbmZ1bmN0aW9uIHVwY2FzdEN1c3RvbUNsYXNzZXMoIGVsZW1lbnROYW1lICkge1xuXHRyZXR1cm4gZGlzcGF0Y2hlciA9PiBkaXNwYXRjaGVyLm9uKCBgZWxlbWVudDokeyBlbGVtZW50TmFtZSB9YCwgKCBldnQsIGRhdGEsIGNvbnZlcnNpb25BcGkgKSA9PiB7XG5cdFx0Y29uc3Qgdmlld0l0ZW0gPSBkYXRhLnZpZXdJdGVtO1xuXHRcdGNvbnN0IG1vZGVsUmFuZ2UgPSBkYXRhLm1vZGVsUmFuZ2U7XG5cblx0XHRjb25zdCBtb2RlbEVsZW1lbnQgPSBtb2RlbFJhbmdlICYmIG1vZGVsUmFuZ2Uuc3RhcnQubm9kZUFmdGVyO1xuXG5cdFx0aWYgKCAhbW9kZWxFbGVtZW50ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIFRoZSB1cGNhc3QgY29udmVyc2lvbiBwaWNrcyB1cCBjbGFzc2VzIGZyb20gdGhlIGJhc2UgZWxlbWVudCBhbmQgZnJvbSB0aGUgPGZpZ3VyZT4gZWxlbWVudCBzbyBpdCBzaG91bGQgYmUgZXh0ZW5zaWJsZS5cblx0XHRjb25zdCBjdXJyZW50QXR0cmlidXRlVmFsdWUgPSBtb2RlbEVsZW1lbnQuZ2V0QXR0cmlidXRlKCAnY3VzdG9tQ2xhc3MnICkgfHwgW107XG5cblx0XHRjdXJyZW50QXR0cmlidXRlVmFsdWUucHVzaCggLi4udmlld0l0ZW0uZ2V0Q2xhc3NOYW1lcygpICk7XG5cblx0XHRjb252ZXJzaW9uQXBpLndyaXRlci5zZXRBdHRyaWJ1dGUoICdjdXN0b21DbGFzcycsIGN1cnJlbnRBdHRyaWJ1dGVWYWx1ZSwgbW9kZWxFbGVtZW50ICk7XG5cdH0gKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgZG93bmNhc3QgY29udmVydGVyIHRoYXQgYWRkcyBjbGFzc2VzIGRlZmluZWQgaW4gdGhlIGBjdXN0b21DbGFzc2AgYXR0cmlidXRlIHRvIGEgPGZpZ3VyZT4gZWxlbWVudC5cbiAqXG4gKiBUaGlzIGNvbnZlcnRlciBleHBlY3RzIHRoYXQgdGhlIHZpZXcgZWxlbWVudCBpcyBuZXN0ZWQgaW4gYSA8ZmlndXJlPiBlbGVtZW50LlxuICovXG5mdW5jdGlvbiBkb3duY2FzdEN1c3RvbUNsYXNzZXNUb0ZpZ3VyZSggbW9kZWxFbGVtZW50TmFtZSApIHtcblx0cmV0dXJuIGRpc3BhdGNoZXIgPT4gZGlzcGF0Y2hlci5vbiggYGluc2VydDokeyBtb2RlbEVsZW1lbnROYW1lIH1gLCAoIGV2dCwgZGF0YSwgY29udmVyc2lvbkFwaSApID0+IHtcblx0XHRjb25zdCBtb2RlbEVsZW1lbnQgPSBkYXRhLml0ZW07XG5cblx0XHRjb25zdCB2aWV3RmlndXJlID0gY29udmVyc2lvbkFwaS5tYXBwZXIudG9WaWV3RWxlbWVudCggbW9kZWxFbGVtZW50ICk7XG5cblx0XHRpZiAoICF2aWV3RmlndXJlICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIFRoZSBjb2RlIGJlbG93IGFzc3VtZXMgdGhhdCBjbGFzc2VzIGFyZSBzZXQgb24gdGhlIDxmaWd1cmU+IGVsZW1lbnQuXG5cdFx0Y29udmVyc2lvbkFwaS53cml0ZXIuYWRkQ2xhc3MoIG1vZGVsRWxlbWVudC5nZXRBdHRyaWJ1dGUoICdjdXN0b21DbGFzcycgKSwgdmlld0ZpZ3VyZSApO1xuXHR9ICk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRvd25jYXN0IGNvbnZlcnRlciB0aGF0IGFkZHMgY2xhc3NlcyBkZWZpbmVkIGluIHRoZSBgY3VzdG9tQ2xhc3NgIGF0dHJpYnV0ZSB0byBhIDxmaWd1cmU+IGNoaWxkIGVsZW1lbnQuXG4gKlxuICogVGhpcyBjb252ZXJ0ZXIgZXhwZWN0cyB0aGF0IHRoZSB2aWV3IGVsZW1lbnQgaXMgbmVzdGVkIGluIGEgPGZpZ3VyZT4gZWxlbWVudC5cbiAqL1xuZnVuY3Rpb24gZG93bmNhc3RDdXN0b21DbGFzc2VzVG9DaGlsZCggdmlld0VsZW1lbnROYW1lLCBtb2RlbEVsZW1lbnROYW1lICkge1xuXHRyZXR1cm4gZGlzcGF0Y2hlciA9PiBkaXNwYXRjaGVyLm9uKCBgaW5zZXJ0OiR7IG1vZGVsRWxlbWVudE5hbWUgfWAsICggZXZ0LCBkYXRhLCBjb252ZXJzaW9uQXBpICkgPT4ge1xuXHRcdGNvbnN0IG1vZGVsRWxlbWVudCA9IGRhdGEuaXRlbTtcblxuXHRcdGNvbnN0IHZpZXdGaWd1cmUgPSBjb252ZXJzaW9uQXBpLm1hcHBlci50b1ZpZXdFbGVtZW50KCBtb2RlbEVsZW1lbnQgKTtcblxuXHRcdGlmICggIXZpZXdGaWd1cmUgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gVGhlIGNvZGUgYmVsb3cgYXNzdW1lcyB0aGF0IGNsYXNzZXMgYXJlIHNldCBvbiB0aGUgZWxlbWVudCBpbnNpZGUgdGhlIDxmaWd1cmU+LlxuXHRcdGNvbnN0IHZpZXdFbGVtZW50ID0gZmluZFZpZXdDaGlsZCggdmlld0ZpZ3VyZSwgdmlld0VsZW1lbnROYW1lLCBjb252ZXJzaW9uQXBpICk7XG5cblx0XHRjb252ZXJzaW9uQXBpLndyaXRlci5hZGRDbGFzcyggbW9kZWxFbGVtZW50LmdldEF0dHJpYnV0ZSggJ2N1c3RvbUNsYXNzJyApLCB2aWV3RWxlbWVudCApO1xuXHR9ICk7XG59XG5cbi8qKlxuICogSGVscGVyIG1ldGhvZCB0aGF0IHNlYXJjaGVzIGZvciBhIGdpdmVuIHZpZXcgZWxlbWVudCBpbiBhbGwgY2hpbGRyZW4gb2YgdGhlIG1vZGVsIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6ZW5naW5lL3ZpZXcvaXRlbX5JdGVtfSB2aWV3RWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IHZpZXdFbGVtZW50TmFtZVxuICogQHBhcmFtIHttb2R1bGU6ZW5naW5lL2NvbnZlcnNpb24vZG93bmNhc3RkaXNwYXRjaGVyfkRvd25jYXN0Q29udmVyc2lvbkFwaX0gY29udmVyc2lvbkFwaVxuICogQHJldHVybiB7bW9kdWxlOmVuZ2luZS92aWV3L2l0ZW1+SXRlbX1cbiAqL1xuZnVuY3Rpb24gZmluZFZpZXdDaGlsZCggdmlld0VsZW1lbnQsIHZpZXdFbGVtZW50TmFtZSwgY29udmVyc2lvbkFwaSApIHtcblx0Y29uc3Qgdmlld0NoaWxkcmVuID0gQXJyYXkuZnJvbSggY29udmVyc2lvbkFwaS53cml0ZXIuY3JlYXRlUmFuZ2VJbiggdmlld0VsZW1lbnQgKS5nZXRJdGVtcygpICk7XG5cblx0cmV0dXJuIHZpZXdDaGlsZHJlbi5maW5kKCBpdGVtID0+IGl0ZW0uaXMoICdlbGVtZW50Jywgdmlld0VsZW1lbnROYW1lICkgKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBjdXN0b20gYXR0cmlidXRlIHVwY2FzdCBjb252ZXJ0ZXIuXG4gKi9cbmZ1bmN0aW9uIHVwY2FzdEF0dHJpYnV0ZSggdmlld0VsZW1lbnROYW1lLCB2aWV3QXR0cmlidXRlLCBtb2RlbEF0dHJpYnV0ZSApIHtcblx0cmV0dXJuIGRpc3BhdGNoZXIgPT4gZGlzcGF0Y2hlci5vbiggYGVsZW1lbnQ6JHsgdmlld0VsZW1lbnROYW1lIH1gLCAoIGV2dCwgZGF0YSwgY29udmVyc2lvbkFwaSApID0+IHtcblx0XHRjb25zdCB2aWV3SXRlbSA9IGRhdGEudmlld0l0ZW07XG5cdFx0Y29uc3QgbW9kZWxSYW5nZSA9IGRhdGEubW9kZWxSYW5nZTtcblxuXHRcdGNvbnN0IG1vZGVsRWxlbWVudCA9IG1vZGVsUmFuZ2UgJiYgbW9kZWxSYW5nZS5zdGFydC5ub2RlQWZ0ZXI7XG5cblx0XHRpZiAoICFtb2RlbEVsZW1lbnQgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29udmVyc2lvbkFwaS53cml0ZXIuc2V0QXR0cmlidXRlKCBtb2RlbEF0dHJpYnV0ZSwgdmlld0l0ZW0uZ2V0QXR0cmlidXRlKCB2aWV3QXR0cmlidXRlICksIG1vZGVsRWxlbWVudCApO1xuXHR9ICk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgY3VzdG9tIGF0dHJpYnV0ZSBkb3duY2FzdCBjb252ZXJ0ZXIuXG4gKi9cbmZ1bmN0aW9uIGRvd25jYXN0QXR0cmlidXRlKCBtb2RlbEVsZW1lbnROYW1lLCB2aWV3RWxlbWVudE5hbWUsIHZpZXdBdHRyaWJ1dGUsIG1vZGVsQXR0cmlidXRlICkge1xuXHRyZXR1cm4gZGlzcGF0Y2hlciA9PiBkaXNwYXRjaGVyLm9uKCBgaW5zZXJ0OiR7IG1vZGVsRWxlbWVudE5hbWUgfWAsICggZXZ0LCBkYXRhLCBjb252ZXJzaW9uQXBpICkgPT4ge1xuXHRcdGNvbnN0IG1vZGVsRWxlbWVudCA9IGRhdGEuaXRlbTtcblxuXHRcdGNvbnN0IHZpZXdGaWd1cmUgPSBjb252ZXJzaW9uQXBpLm1hcHBlci50b1ZpZXdFbGVtZW50KCBtb2RlbEVsZW1lbnQgKTtcblx0XHRjb25zdCB2aWV3RWxlbWVudCA9IGZpbmRWaWV3Q2hpbGQoIHZpZXdGaWd1cmUsIHZpZXdFbGVtZW50TmFtZSwgY29udmVyc2lvbkFwaSApO1xuXG5cdFx0aWYgKCAhdmlld0VsZW1lbnQgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29udmVyc2lvbkFwaS53cml0ZXIuc2V0QXR0cmlidXRlKCB2aWV3QXR0cmlidXRlLCBtb2RlbEVsZW1lbnQuZ2V0QXR0cmlidXRlKCBtb2RlbEF0dHJpYnV0ZSApLCB2aWV3RWxlbWVudCApO1xuXHR9ICk7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlIENvcHlyaWdodCAoYykgMjAwMy0yMDIxLCBDS1NvdXJjZSAtIEZyZWRlcmljbyBLbmFiYmVuLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogRm9yIGxpY2Vuc2luZywgc2VlIExJQ0VOU0UubWQgb3IgaHR0cHM6Ly9ja2VkaXRvci5jb20vbGVnYWwvY2tlZGl0b3Itb3NzLWxpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGluay91dGlsc1xuICovXG5cbmltcG9ydCB7IE9ic2VydmFibGVNaXhpbiwgbWl4IH0gZnJvbSAnY2tlZGl0b3I1L3NyYy91dGlscyc7XG5cbi8qKlxuICogSGVscGVyIGNsYXNzIHRoYXQgc3RvcmVzIG1hbnVhbCBkZWNvcmF0b3JzIHdpdGggb2JzZXJ2YWJsZSB7QGxpbmsgbW9kdWxlOmxpbmsvdXRpbHN+TWFudWFsRGVjb3JhdG9yI3ZhbHVlfVxuICogdG8gc3VwcG9ydCBpbnRlZ3JhdGlvbiB3aXRoIHRoZSBVSSBzdGF0ZS4gQW4gaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBpcyBhIG1vZGVsIHdpdGggdGhlIHN0YXRlIG9mIGluZGl2aWR1YWwgbWFudWFsIGRlY29yYXRvcnMuXG4gKiBUaGVzZSBkZWNvcmF0b3JzIGFyZSBrZXB0IGFzIGNvbGxlY3Rpb25zIGluIHtAbGluayBtb2R1bGU6bGluay9saW5rY29tbWFuZH5MaW5rQ29tbWFuZCNtYW51YWxEZWNvcmF0b3JzfS5cbiAqXG4gKiBAbWl4ZXMgbW9kdWxlOnV0aWxzL29ic2VydmFibGVtaXhpbn5PYnNlcnZhYmxlTWl4aW5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFudWFsRGVjb3JhdG9yIHtcblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2Yge0BsaW5rIG1vZHVsZTpsaW5rL3V0aWxzfk1hbnVhbERlY29yYXRvcn0uXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcblx0ICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5pZCBUaGUgbmFtZSBvZiB0aGUgYXR0cmlidXRlIHVzZWQgaW4gdGhlIG1vZGVsIHRoYXQgcmVwcmVzZW50cyBhIGdpdmVuIG1hbnVhbCBkZWNvcmF0b3IuXG5cdCAqIEZvciBleGFtcGxlOiBgJ2xpbmtJc0V4dGVybmFsJ2AuXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcubGFiZWwgVGhlIGxhYmVsIHVzZWQgaW4gdGhlIHVzZXIgaW50ZXJmYWNlIHRvIHRvZ2dsZSB0aGUgbWFudWFsIGRlY29yYXRvci5cblx0ICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZy5hdHRyaWJ1dGVzIEEgc2V0IG9mIGF0dHJpYnV0ZXMgYWRkZWQgdG8gb3V0cHV0IGRhdGEgd2hlbiB0aGUgZGVjb3JhdG9yIGlzIGFjdGl2ZSBmb3IgYSBzcGVjaWZpYyBsaW5rLlxuXHQgKiBBdHRyaWJ1dGVzIHNob3VsZCBrZWVwIHRoZSBmb3JtYXQgb2YgYXR0cmlidXRlcyBkZWZpbmVkIGluIHtAbGluayBtb2R1bGU6ZW5naW5lL3ZpZXcvZWxlbWVudGRlZmluaXRpb25+RWxlbWVudERlZmluaXRpb259LlxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IFtjb25maWcuZGVmYXVsdFZhbHVlXSBDb250cm9scyB3aGV0aGVyIHRoZSBkZWNvcmF0b3IgaXMgXCJvblwiIGJ5IGRlZmF1bHQuXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggeyBpZCwgbGFiZWwsIGF0dHJpYnV0ZXMsIGRlZmF1bHRWYWx1ZSB9ICkge1xuXHRcdC8qKlxuXHRcdCAqIEFuIElEIG9mIGEgbWFudWFsIGRlY29yYXRvciB3aGljaCBpcyB0aGUgbmFtZSBvZiB0aGUgYXR0cmlidXRlIGluIHRoZSBtb2RlbCwgZm9yIGV4YW1wbGU6ICdsaW5rTWFudWFsRGVjb3JhdG9yMCcuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSB7U3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMuaWQgPSBpZDtcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSB2YWx1ZSBvZiB0aGUgY3VycmVudCBtYW51YWwgZGVjb3JhdG9yLiBJdCByZWZsZWN0cyBpdHMgc3RhdGUgZnJvbSB0aGUgVUkuXG5cdFx0ICpcblx0XHQgKiBAb2JzZXJ2YWJsZVxuXHRcdCAqIEBtZW1iZXIge0Jvb2xlYW59IG1vZHVsZTpsaW5rL3V0aWxzfk1hbnVhbERlY29yYXRvciN2YWx1ZVxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0KCAndmFsdWUnICk7XG5cblx0XHQvKipcblx0XHQgKiBUaGUgZGVmYXVsdCB2YWx1ZSBvZiBtYW51YWwgZGVjb3JhdG9yLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUge0Jvb2xlYW59XG5cdFx0ICovXG5cdFx0dGhpcy5kZWZhdWx0VmFsdWUgPSBkZWZhdWx0VmFsdWU7XG5cblx0XHQvKipcblx0XHQgKiBUaGUgbGFiZWwgdXNlZCBpbiB0aGUgdXNlciBpbnRlcmZhY2UgdG8gdG9nZ2xlIHRoZSBtYW51YWwgZGVjb3JhdG9yLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUge1N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLmxhYmVsID0gbGFiZWw7XG5cblx0XHQvKipcblx0XHQgKiBBIHNldCBvZiBhdHRyaWJ1dGVzIGFkZGVkIHRvIGRvd25jYXN0ZWQgZGF0YSB3aGVuIHRoZSBkZWNvcmF0b3IgaXMgYWN0aXZhdGVkIGZvciBhIHNwZWNpZmljIGxpbmsuXG5cdFx0ICogQXR0cmlidXRlcyBzaG91bGQgYmUgYWRkZWQgaW4gYSBmb3JtIG9mIGF0dHJpYnV0ZXMgZGVmaW5lZCBpbiB7QGxpbmsgbW9kdWxlOmVuZ2luZS92aWV3L2VsZW1lbnRkZWZpbml0aW9ufkVsZW1lbnREZWZpbml0aW9ufS5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICovXG5cdFx0dGhpcy5hdHRyaWJ1dGVzID0gYXR0cmlidXRlcztcblx0fVxufVxuXG5taXgoIE1hbnVhbERlY29yYXRvciwgT2JzZXJ2YWJsZU1peGluICk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgZGVmYXVsdCBcIjxzdmcgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIGZvY3VzYWJsZT1cXFwiZmFsc2VcXFwiIGRhdGEtcHJlZml4PVxcXCJmYXNcXFwiIGRhdGEtaWNvbj1cXFwiZmlsZS1leHBvcnRcXFwiIGNsYXNzPVxcXCJzdmctaW5saW5lLS1mYSBmYS1maWxlLWV4cG9ydCBmYS13LTE4XFxcIiByb2xlPVxcXCJpbWdcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDU3NiA1MTJcXFwiPjxwYXRoIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIgZD1cXFwiTTM4NCAxMjEuOWMwLTYuMy0yLjUtMTIuNC03LTE2LjlMMjc5LjEgN2MtNC41LTQuNS0xMC42LTctMTctN0gyNTZ2MTI4aDEyOHpNNTcxIDMwOGwtOTUuNy05Ni40Yy0xMC4xLTEwLjEtMjcuNC0zLTI3LjQgMTEuM1YyODhoLTY0djY0aDY0djY1LjJjMCAxNC4zIDE3LjMgMjEuNCAyNy40IDExLjNMNTcxIDMzMmM2LjYtNi42IDYuNi0xNy40IDAtMjR6bS0zNzkgMjh2LTMyYzAtOC44IDcuMi0xNiAxNi0xNmgxNzZWMTYwSDI0OGMtMTMuMiAwLTI0LTEwLjgtMjQtMjRWMEgyNEMxMC43IDAgMCAxMC43IDAgMjR2NDY0YzAgMTMuMyAxMC43IDI0IDI0IDI0aDMzNmMxMy4zIDAgMjQtMTAuNyAyNC0yNFYzNTJIMjA4Yy04LjggMC0xNi03LjItMTYtMTZ6XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJleHBvcnQgZGVmYXVsdCBcIjw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIj8+XFxuPCEtLSBHZW5lcmF0ZWQgYnkgSWNvTW9vbi5pbyAtLT5cXG48IURPQ1RZUEUgc3ZnIFBVQkxJQyBcXFwiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU5cXFwiIFxcXCJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGRcXFwiPlxcbjxzdmcgdmVyc2lvbj1cXFwiMS4xXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB3aWR0aD1cXFwiMTZcXFwiIGhlaWdodD1cXFwiMTZcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCI+XFxuPHBhdGggZmlsbD1cXFwiIzQ0NDQ0NFxcXCIgZD1cXFwiTTIuMSAzLjFjMC4yIDEuMyAwLjQgMS42IDAuNCAyLjkgMCAwLjgtMS41IDEuNS0xLjUgMS41djFjMCAwIDEuNSAwLjcgMS41IDEuNSAwIDEuMy0wLjIgMS42LTAuNCAyLjktMC4zIDIuMSAwLjggMy4xIDEuOCAzLjFzMi4xIDAgMi4xIDB2LTJjMCAwLTEuOCAwLjItMS44LTEgMC0wLjkgMC4yLTAuOSAwLjQtMi45IDAuMS0wLjktMC41LTEuNi0xLjEtMi4xIDAuNi0wLjUgMS4yLTEuMSAxLjEtMi0wLjMtMi0wLjQtMi0wLjQtMi45IDAtMS4yIDEuOC0xLjEgMS44LTEuMXYtMmMwIDAtMSAwLTIuMSAwcy0yLjEgMS0xLjggMy4xelxcXCI+PC9wYXRoPlxcbjxwYXRoIGZpbGw9XFxcIiM0NDQ0NDRcXFwiIGQ9XFxcIk0xMy45IDMuMWMtMC4yIDEuMy0wLjQgMS42LTAuNCAyLjkgMCAwLjggMS41IDEuNSAxLjUgMS41djFjMCAwLTEuNSAwLjctMS41IDEuNSAwIDEuMyAwLjIgMS42IDAuNCAyLjkgMC4zIDIuMS0wLjggMy4xLTEuOCAzLjFzLTIuMSAwLTIuMSAwdi0yYzAgMCAxLjggMC4yIDEuOC0xIDAtMC45LTAuMi0wLjktMC40LTIuOS0wLjEtMC45IDAuNS0xLjYgMS4xLTIuMS0wLjYtMC41LTEuMi0xLjEtMS4xLTIgMC4yLTIgMC40LTIgMC40LTIuOSAwLTEuMi0xLjgtMS4xLTEuOC0xLjF2LTJjMCAwIDEgMCAyLjEgMHMyLjEgMSAxLjggMy4xelxcXCI+PC9wYXRoPlxcbjwvc3ZnPlxcblwiIiwiZXhwb3J0IGRlZmF1bHQgXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAyMCAyMFxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJtMTEuMDc3IDE1IC45OTEtMS40MTZhLjc1Ljc1IDAgMSAxIDEuMjI5Ljg2bC0xLjE0OCAxLjY0YS43NDguNzQ4IDAgMCAxLS4yMTcuMjA2IDUuMjUxIDUuMjUxIDAgMCAxLTguNTAzLTUuOTU1Ljc0MS43NDEgMCAwIDEgLjEyLS4yNzRsMS4xNDctMS42MzlhLjc1Ljc1IDAgMSAxIDEuMjI4Ljg2TDQuOTMzIDEwLjdsLjAwNi4wMDNhMy43NSAzLjc1IDAgMCAwIDYuMTMyIDQuMjk0bC4wMDYuMDA0em01LjQ5NC01LjMzNWEuNzQ4Ljc0OCAwIDAgMS0uMTIuMjc0bC0xLjE0NyAxLjYzOWEuNzUuNzUgMCAxIDEtMS4yMjgtLjg2bC44Ni0xLjIzYTMuNzUgMy43NSAwIDAgMC02LjE0NC00LjMwMWwtLjg2IDEuMjI5YS43NS43NSAwIDAgMS0xLjIyOS0uODZsMS4xNDgtMS42NGEuNzQ4Ljc0OCAwIDAgMSAuMjE3LS4yMDYgNS4yNTEgNS4yNTEgMCAwIDEgOC41MDMgNS45NTV6bS00LjU2My0yLjUzMmEuNzUuNzUgMCAwIDEgLjE4NCAxLjA0NWwtMy4xNTUgNC41MDVhLjc1Ljc1IDAgMSAxLTEuMjI5LS44NmwzLjE1NS00LjUwNmEuNzUuNzUgMCAwIDEgMS4wNDUtLjE4NHptNC45MTkgMTAuNTYyLTEuNDE0IDEuNDE0YS43NS43NSAwIDEgMS0xLjA2LTEuMDZsMS40MTQtMS40MTUtMS40MTUtMS40MTRhLjc1Ljc1IDAgMCAxIDEuMDYxLTEuMDZsMS40MTQgMS40MTQgMS40MTQtMS40MTVhLjc1Ljc1IDAgMCAxIDEuMDYxIDEuMDYxbC0xLjQxNCAxLjQxNCAxLjQxNCAxLjQxNWEuNzUuNzUgMCAwIDEtMS4wNiAxLjA2bC0xLjQxNS0xLjQxNHpcXFwiLz48L3N2Zz5cIiJdLCJzb3VyY2VSb290IjoiIn0=