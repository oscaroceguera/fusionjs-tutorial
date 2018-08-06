if(process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {if ('development' === 'production') {throw new Error(`NODE_ENV (${process.env.NODE_ENV}) does not match value for compiled assets: development`);} else {console.warn('Overriding NODE_ENV: ' + process.env.NODE_ENV + ' to development in order to match value for compiled assets');process.env.NODE_ENV = 'development';}} else {process.env.NODE_ENV = 'development';}
require('/Users/oscaroceguera/Documents/Repos/Examples/fusionjs/Empezando/my-fusion-app/node_modules/source-map-support/source-map-support.js').install();
exports.id = "main";
exports.modules = {

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


const Panel = Object(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('div', {
  background: 'silver'
});
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Panel, null, "Hello"));

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fusion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fusion-react */ "fusion-react");
/* harmony import */ var fusion_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fusion_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fusion-plugin-react-router */ "fusion-plugin-react-router");
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fusion-plugin-styletron-react */ "fusion-plugin-styletron-react");
/* harmony import */ var fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/root */ "./src/components/root.js");




/* harmony default export */ __webpack_exports__["default"] = (() => {
  const app = new fusion_react__WEBPACK_IMPORTED_MODULE_0___default.a(React.createElement("div", null, "Hello world alv"));
  app.register(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_2___default.a); // app.register(Router)

  return app;
});

/***/ }),

/***/ "./src/pages/home.js":
false,

/***/ "./src/pages/pageNotFound.js":
false,

/***/ "./src/root.js":
false

};
//# sourceMappingURL=main.a99e33edf1d40841142a.hot-update.js.map