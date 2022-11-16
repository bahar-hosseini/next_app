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

/***/ "(api)/./pages/api/users.js":
/*!****************************!*\
  !*** ./pages/api/users.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst handler = (req, res)=>{\n    let users = [\n        {\n            id: 1,\n            name: \"Bahar\"\n        },\n        {\n            id: 2,\n            name: \"John\"\n        }\n    ];\n    res.end(JSON.stringify({\n        data: users,\n        status: \"success\"\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFVBQVUsQ0FBQ0MsS0FBS0MsTUFBUTtJQUM1QixJQUFJQyxRQUFRO1FBQ1Y7WUFBRUMsSUFBSTtZQUFHQyxNQUFNO1FBQVE7UUFDdkI7WUFBRUQsSUFBSTtZQUFHQyxNQUFNO1FBQU87S0FDdkI7SUFFREgsSUFBSUksR0FBRyxDQUFDQyxLQUFLQyxTQUFTLENBQUM7UUFBRUMsTUFBTU47UUFBT08sUUFBUTtJQUFVO0FBQzFEO0FBRUEsaUVBQWVWLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0X2FwcC8uL3BhZ2VzL2FwaS91c2Vycy5qcz80OWY2Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGhhbmRsZXIgPSAocmVxLCByZXMpID0+IHtcbiAgbGV0IHVzZXJzID0gW1xuICAgIHsgaWQ6IDEsIG5hbWU6ICdCYWhhcicgfSxcbiAgICB7IGlkOiAyLCBuYW1lOiAnSm9obicgfSxcbiAgXTtcblxuICByZXMuZW5kKEpTT04uc3RyaW5naWZ5KHsgZGF0YTogdXNlcnMsIHN0YXR1czogJ3N1Y2Nlc3MnIH0pKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4iXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsInVzZXJzIiwiaWQiLCJuYW1lIiwiZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/users.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users.js"));
module.exports = __webpack_exports__;

})();