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

/***/ "(api)/./pages/api/posts/create.js":
/*!***********************************!*\
  !*** ./pages/api/posts/create.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res)=>{\n    if (req.method === \"POST\") {\n        res.statusCode = 200;\n        res.setHeader(\"Content-Type\", \"application/json\");\n        res.end(JSON.stringify({\n            data: \"post created\",\n            status: \"success\"\n        }));\n    } else {\n        res.statusCode = 404;\n        res.setHeader(\"Content-Type\", \"application/json\");\n        res.end(JSON.stringify({\n            status: \"error\"\n        }));\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9zdHMvY3JlYXRlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxpRUFBZSxDQUFDQSxLQUFLQyxNQUFRO0lBQzNCLElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3pCRCxJQUFJRSxVQUFVLEdBQUc7UUFDakJGLElBQUlHLFNBQVMsQ0FBQyxnQkFBZ0I7UUFDOUJILElBQUlJLEdBQUcsQ0FBQ0MsS0FBS0MsU0FBUyxDQUFDO1lBQUVDLE1BQU07WUFBZ0JDLFFBQVE7UUFBVTtJQUNuRSxPQUFPO1FBQ0xSLElBQUlFLFVBQVUsR0FBRztRQUNqQkYsSUFBSUcsU0FBUyxDQUFDLGdCQUFnQjtRQUM5QkgsSUFBSUksR0FBRyxDQUFDQyxLQUFLQyxTQUFTLENBQUM7WUFBRUUsUUFBUTtRQUFRO0lBQzNDLENBQUM7QUFDSCxHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dF9hcHAvLi9wYWdlcy9hcGkvcG9zdHMvY3JlYXRlLmpzPzZmMzIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKHJlcSwgcmVzKSA9PiB7XG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICByZXMuc3RhdHVzQ29kZSA9IDIwMDtcbiAgICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgIHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkoeyBkYXRhOiAncG9zdCBjcmVhdGVkJywgc3RhdHVzOiAnc3VjY2VzcycgfSkpO1xuICB9IGVsc2Uge1xuICAgIHJlcy5zdGF0dXNDb2RlID0gNDA0O1xuICAgIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgcmVzLmVuZChKU09OLnN0cmluZ2lmeSh7IHN0YXR1czogJ2Vycm9yJyB9KSk7XG4gIH1cbn07XG4iXSwibmFtZXMiOlsicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzQ29kZSIsInNldEhlYWRlciIsImVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/posts/create.js\n");

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