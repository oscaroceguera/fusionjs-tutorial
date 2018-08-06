if(process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {if ('development' === 'production') {throw new Error(`NODE_ENV (${process.env.NODE_ENV}) does not match value for compiled assets: development`);} else {console.warn('Overriding NODE_ENV: ' + process.env.NODE_ENV + ' to development in order to match value for compiled assets');process.env.NODE_ENV = 'development';}} else {process.env.NODE_ENV = 'development';}
require('/Users/oscaroceguera/Documents/Repos/Examples/fusionjs/Empezando/my-fusion-app/node_modules/source-map-support/source-map-support.js').install();
exports.id = "main";
exports.modules = {

/***/ "./node_modules/@nadiia/file-loader/dist/cjs.js?storeFile=true&storeFileTarget=node!./src/components/my-image.jpeg":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@nadiia/file-loader/dist/cjs.js?storeFile=true&storeFileTarget=node!./src/components/my-image.jpeg ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "72b727e5dd53f80d72ffafe30e541fe2.jpeg";

/***/ }),

/***/ "./src/components/root.js":
/*!********************************!*\
  !*** ./src/components/root.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fusion-plugin-styletron-react */ "fusion-plugin-styletron-react");
/* harmony import */ var fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fusion-core */ "fusion-core");
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fusion_core__WEBPACK_IMPORTED_MODULE_2__);



const Panel = Object(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('div', {
  background: 'silver'
});
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Panel, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  src: Object(fusion_core__WEBPACK_IMPORTED_MODULE_2__["assetUrl"])(__webpack_require__(/*! __SECRET_FILE_LOADER__?storeFile=true&storeFileTarget=node!./my-image.jpeg */ "./node_modules/@nadiia/file-loader/dist/cjs.js?storeFile=true&storeFileTarget=node!./src/components/my-image.jpeg"))
})));

/***/ })

};
//# sourceMappingURL=main.63f62fc966446a0a77ea.hot-update.js.map