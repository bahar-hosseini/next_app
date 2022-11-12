"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/posts/[id]";
exports.ids = ["pages/posts/[id]"];
exports.modules = {

/***/ "./pages/posts/[id].js":
/*!*****************************!*\
  !*** ./pages/posts/[id].js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst SinglePost = (props)=>{\n    const { post  } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: post.title\n            }, void 0, false, {\n                fileName: \"/Users/bahar/Documents/next_app/pages/posts/[id].js\",\n                lineNumber: 5,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: post.body\n            }, void 0, false, {\n                fileName: \"/Users/bahar/Documents/next_app/pages/posts/[id].js\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\nasync function getServerSideProps({ params  }) {\n    let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);\n    let post = await res.json();\n    return {\n        props: {\n            post\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SinglePost);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUFBLE1BQU1BLGFBQWEsQ0FBQ0MsUUFBVTtJQUM1QixNQUFNLEVBQUVDLEtBQUksRUFBRSxHQUFHRDtJQUNqQixxQkFDRTs7MEJBQ0UsOERBQUNFOzBCQUFJRCxLQUFLRSxLQUFLOzs7Ozs7MEJBQ2YsOERBQUNDOzBCQUFHSCxLQUFLSSxJQUFJOzs7Ozs7OztBQUduQjtBQUVPLGVBQWVDLG1CQUFtQixFQUFFQyxPQUFNLEVBQUUsRUFBRTtJQUNuRCxJQUFJQyxNQUFNLE1BQU1DLE1BQ2QsQ0FBQywyQ0FBMkMsRUFBRUYsT0FBT0csRUFBRSxDQUFDLENBQUM7SUFFM0QsSUFBSVQsT0FBTyxNQUFNTyxJQUFJRyxJQUFJO0lBRXpCLE9BQU87UUFDTFgsT0FBTztZQUNMQztRQUNGO0lBQ0Y7QUFDRixDQUFDO0FBRUQsaUVBQWVGLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0X2FwcC8uL3BhZ2VzL3Bvc3RzL1tpZF0uanM/Nzk2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTaW5nbGVQb3N0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBwb3N0IH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGgyPntwb3N0LnRpdGxlfTwvaDI+XHJcbiAgICAgIDxwPntwb3N0LmJvZHl9PC9wPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gIGxldCByZXMgPSBhd2FpdCBmZXRjaChcclxuICAgIGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvJHtwYXJhbXMuaWR9YFxyXG4gICk7XHJcbiAgbGV0IHBvc3QgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcG9zdCxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlUG9zdDtcclxuIl0sIm5hbWVzIjpbIlNpbmdsZVBvc3QiLCJwcm9wcyIsInBvc3QiLCJoMiIsInRpdGxlIiwicCIsImJvZHkiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJwYXJhbXMiLCJyZXMiLCJmZXRjaCIsImlkIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts/[id].js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/posts/[id].js"));
module.exports = __webpack_exports__;

})();