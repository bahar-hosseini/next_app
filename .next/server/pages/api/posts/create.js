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
exports.id = "pages/api/posts/create";
exports.ids = ["pages/api/posts/create"];
exports.modules = {

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ "(api)/./pages/api/posts/create.js":
/*!***********************************!*\
  !*** ./pages/api/posts/create.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__]);\nnext_connect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nhandler.post((req, res)=>{\n    console.log(req.body);\n    res.end(JSON.stringify({\n        data: \"post created\",\n        status: \"success\"\n    }));\n});\n// export default (req, res) => {\n//   if (req.method === 'POST') {\n//     res.statusCode = 200;\n//     res.setHeader('Content-Type', 'application/json');\n//     res.end(JSON.stringify({ data: 'post created', status: 'success' }));\n//   } else {\n//     res.statusCode = 404;\n//     res.setHeader('Content-Type', 'application/json');\n//     res.end(JSON.stringify({ status: 'error' }));\n//   }\n// };\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9zdHMvY3JlYXRlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQThCO0FBRTlCLE1BQU1DLFVBQVVELHdEQUFFQTtBQUVsQkMsUUFBUUMsSUFBSSxDQUFDLENBQUNDLEtBQUtDLE1BQVE7SUFDekJDLFFBQVFDLEdBQUcsQ0FBQ0gsSUFBSUksSUFBSTtJQUNwQkgsSUFBSUksR0FBRyxDQUFDQyxLQUFLQyxTQUFTLENBQUM7UUFBRUMsTUFBTTtRQUFnQkMsUUFBUTtJQUFVO0FBQ25FO0FBRUEsaUNBQWlDO0FBQ2pDLGlDQUFpQztBQUNqQyw0QkFBNEI7QUFDNUIseURBQXlEO0FBQ3pELDRFQUE0RTtBQUM1RSxhQUFhO0FBQ2IsNEJBQTRCO0FBQzVCLHlEQUF5RDtBQUN6RCxvREFBb0Q7QUFDcEQsTUFBTTtBQUNOLEtBQUs7QUFDTCxpRUFBZVgsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRfYXBwLy4vcGFnZXMvYXBpL3Bvc3RzL2NyZWF0ZS5qcz82ZjMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBuYyBmcm9tICduZXh0LWNvbm5lY3QnO1xuXG5jb25zdCBoYW5kbGVyID0gbmMoKTtcblxuaGFuZGxlci5wb3N0KChyZXEsIHJlcykgPT4ge1xuICBjb25zb2xlLmxvZyhyZXEuYm9keSk7XG4gIHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkoeyBkYXRhOiAncG9zdCBjcmVhdGVkJywgc3RhdHVzOiAnc3VjY2VzcycgfSkpO1xufSk7XG5cbi8vIGV4cG9ydCBkZWZhdWx0IChyZXEsIHJlcykgPT4ge1xuLy8gICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4vLyAgICAgcmVzLnN0YXR1c0NvZGUgPSAyMDA7XG4vLyAgICAgcmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbi8vICAgICByZXMuZW5kKEpTT04uc3RyaW5naWZ5KHsgZGF0YTogJ3Bvc3QgY3JlYXRlZCcsIHN0YXR1czogJ3N1Y2Nlc3MnIH0pKTtcbi8vICAgfSBlbHNlIHtcbi8vICAgICByZXMuc3RhdHVzQ29kZSA9IDQwNDtcbi8vICAgICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuLy8gICAgIHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkoeyBzdGF0dXM6ICdlcnJvcicgfSkpO1xuLy8gICB9XG4vLyB9O1xuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiJdLCJuYW1lcyI6WyJuYyIsImhhbmRsZXIiLCJwb3N0IiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/posts/create.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/posts/create.js"));
module.exports = __webpack_exports__;

})();