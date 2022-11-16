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
exports.id = "pages/api/users";
exports.ids = ["pages/api/users"];
exports.modules = {

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ "(api)/./pages/api/users/index.js":
/*!**********************************!*\
  !*** ./pages/api/users/index.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-connect */ \"next-connect\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_1__]);\nnext_connect__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nhandler.use(cors__WEBPACK_IMPORTED_MODULE_0___default()({\n    origin: \"http://localhost:3000\"\n}));\nhandler.get(async (req, res)=>{\n    let users = [\n        {\n            id: 1,\n            name: \"Bahar\"\n        },\n        {\n            id: 2,\n            name: \"John\"\n        }\n    ];\n    res.end(JSON.stringify({\n        data: users,\n        status: \"success\"\n    }));\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF3QjtBQUNNO0FBRTlCLE1BQU1FLFVBQVVELHdEQUFFQTtBQUVsQkMsUUFBUUMsR0FBRyxDQUNUSCwyQ0FBSUEsQ0FBQztJQUNISSxRQUFRO0FBQ1Y7QUFFRkYsUUFBUUcsR0FBRyxDQUFDLE9BQU9DLEtBQUtDLE1BQVE7SUFDOUIsSUFBSUMsUUFBUTtRQUNWO1lBQUVDLElBQUk7WUFBR0MsTUFBTTtRQUFRO1FBQ3ZCO1lBQUVELElBQUk7WUFBR0MsTUFBTTtRQUFPO0tBQ3ZCO0lBRURILElBQUlJLEdBQUcsQ0FBQ0MsS0FBS0MsU0FBUyxDQUFDO1FBQUVDLE1BQU1OO1FBQU9PLFFBQVE7SUFBVTtBQUMxRDtBQUVBLGlFQUFlYixPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dF9hcHAvLi9wYWdlcy9hcGkvdXNlcnMvaW5kZXguanM/MWQ4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29ycyBmcm9tICdjb3JzJztcbmltcG9ydCBuYyBmcm9tICduZXh0LWNvbm5lY3QnO1xuXG5jb25zdCBoYW5kbGVyID0gbmMoKTtcblxuaGFuZGxlci51c2UoXG4gIGNvcnMoe1xuICAgIG9yaWdpbjogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcsXG4gIH0pXG4pO1xuaGFuZGxlci5nZXQoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGxldCB1c2VycyA9IFtcbiAgICB7IGlkOiAxLCBuYW1lOiAnQmFoYXInIH0sXG4gICAgeyBpZDogMiwgbmFtZTogJ0pvaG4nIH0sXG4gIF07XG5cbiAgcmVzLmVuZChKU09OLnN0cmluZ2lmeSh7IGRhdGE6IHVzZXJzLCBzdGF0dXM6ICdzdWNjZXNzJyB9KSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiJdLCJuYW1lcyI6WyJjb3JzIiwibmMiLCJoYW5kbGVyIiwidXNlIiwib3JpZ2luIiwiZ2V0IiwicmVxIiwicmVzIiwidXNlcnMiLCJpZCIsIm5hbWUiLCJlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users/index.js"));
module.exports = __webpack_exports__;

})();