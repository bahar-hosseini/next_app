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

/***/ "(api)/./src/pages/api/users/index.js":
/*!**************************************!*\
  !*** ./src/pages/api/users/index.js ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-connect */ \"next-connect\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_1__]);\nnext_connect__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nhandler.use(cors__WEBPACK_IMPORTED_MODULE_0___default()({\n    origin: \"http://localhost:3000\"\n}));\nhandler.get(async (req, res)=>{\n    let users = [\n        {\n            id: 1,\n            name: \"Bahar\"\n        },\n        {\n            id: 2,\n            name: \"John\"\n        }\n    ];\n    res.end(JSON.stringify({\n        data: users,\n        status: \"success\"\n    }));\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3VzZXJzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0I7QUFDTTtBQUU5QixNQUFNRSxVQUFVRCx3REFBRUE7QUFFbEJDLFFBQVFDLEdBQUcsQ0FDVEgsMkNBQUlBLENBQUM7SUFDSEksUUFBUTtBQUNWO0FBRUZGLFFBQVFHLEdBQUcsQ0FBQyxPQUFPQyxLQUFLQyxNQUFRO0lBQzlCLElBQUlDLFFBQVE7UUFDVjtZQUFFQyxJQUFJO1lBQUdDLE1BQU07UUFBUTtRQUN2QjtZQUFFRCxJQUFJO1lBQUdDLE1BQU07UUFBTztLQUN2QjtJQUVESCxJQUFJSSxHQUFHLENBQUNDLEtBQUtDLFNBQVMsQ0FBQztRQUFFQyxNQUFNTjtRQUFPTyxRQUFRO0lBQVU7QUFDMUQ7QUFFQSxpRUFBZWIsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRfYXBwLy4vc3JjL3BhZ2VzL2FwaS91c2Vycy9pbmRleC5qcz9iMGI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb3JzIGZyb20gJ2NvcnMnO1xuaW1wb3J0IG5jIGZyb20gJ25leHQtY29ubmVjdCc7XG5cbmNvbnN0IGhhbmRsZXIgPSBuYygpO1xuXG5oYW5kbGVyLnVzZShcbiAgY29ycyh7XG4gICAgb3JpZ2luOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyxcbiAgfSlcbik7XG5oYW5kbGVyLmdldChhc3luYyAocmVxLCByZXMpID0+IHtcbiAgbGV0IHVzZXJzID0gW1xuICAgIHsgaWQ6IDEsIG5hbWU6ICdCYWhhcicgfSxcbiAgICB7IGlkOiAyLCBuYW1lOiAnSm9obicgfSxcbiAgXTtcblxuICByZXMuZW5kKEpTT04uc3RyaW5naWZ5KHsgZGF0YTogdXNlcnMsIHN0YXR1czogJ3N1Y2Nlc3MnIH0pKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIl0sIm5hbWVzIjpbImNvcnMiLCJuYyIsImhhbmRsZXIiLCJ1c2UiLCJvcmlnaW4iLCJnZXQiLCJyZXEiLCJyZXMiLCJ1c2VycyIsImlkIiwibmFtZSIsImVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/users/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/users/index.js"));
module.exports = __webpack_exports__;

})();