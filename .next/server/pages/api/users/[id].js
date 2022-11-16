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
exports.id = "pages/api/users/[id]";
exports.ids = ["pages/api/users/[id]"];
exports.modules = {

/***/ "(api)/./pages/api/users/[id].js":
/*!*********************************!*\
  !*** ./pages/api/users/[id].js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res)=>{\n    const { query: { id  }  } = req;\n    let user = {\n        id,\n        name: \"Bahar\"\n    };\n    res.statusCode = 200;\n    res.setHeader(\"Content-Type\", \"application/json\");\n    res.end(JSON.stringify({\n        data: user,\n        status: \"success\"\n    }));\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUVBQWUsQ0FBQ0EsS0FBS0MsTUFBUTtJQUMzQixNQUFNLEVBQ0pDLE9BQU8sRUFBRUMsR0FBRSxFQUFFLEdBQ2QsR0FBR0g7SUFFSixJQUFJSSxPQUFPO1FBQUVEO1FBQUlFLE1BQU07SUFBUTtJQUMvQkosSUFBSUssVUFBVSxHQUFHO0lBQ2pCTCxJQUFJTSxTQUFTLENBQUMsZ0JBQWdCO0lBQzlCTixJQUFJTyxHQUFHLENBQUNDLEtBQUtDLFNBQVMsQ0FBQztRQUFFQyxNQUFNUDtRQUFNUSxRQUFRO0lBQVU7QUFDekQsR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRfYXBwLy4vcGFnZXMvYXBpL3VzZXJzL1tpZF0uanM/YWVkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAocmVxLCByZXMpID0+IHtcbiAgY29uc3Qge1xuICAgIHF1ZXJ5OiB7IGlkIH0sXG4gIH0gPSByZXE7XG5cbiAgbGV0IHVzZXIgPSB7IGlkLCBuYW1lOiAnQmFoYXInIH07XG4gIHJlcy5zdGF0dXNDb2RlID0gMjAwO1xuICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICByZXMuZW5kKEpTT04uc3RyaW5naWZ5KHsgZGF0YTogdXNlciwgc3RhdHVzOiAnc3VjY2VzcycgfSkpO1xufTtcbiJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJxdWVyeSIsImlkIiwidXNlciIsIm5hbWUiLCJzdGF0dXNDb2RlIiwic2V0SGVhZGVyIiwiZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/[id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users/[id].js"));
module.exports = __webpack_exports__;

})();