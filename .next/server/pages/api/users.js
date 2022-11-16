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

/***/ "(api)/./pages/api/users/index.js":
/*!**********************************!*\
  !*** ./pages/api/users/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);\n\nconst cors = cors__WEBPACK_IMPORTED_MODULE_0___default()({\n    origin: \"http://localhost:3000\"\n});\nconst runMiddleware = (req, res, fn)=>{\n    return new Promise((resolve, reject)=>{\n        fn(req, res, (result)=>{\n            if (result instanceof Error) {\n                return reject(result);\n            }\n            return resolve(result);\n        });\n    });\n};\nconst handler = async (req, res)=>{\n    await runMiddleware(req, res, cors);\n    let users = [\n        {\n            id: 1,\n            name: \"Bahar\"\n        },\n        {\n            id: 2,\n            name: \"John\"\n        }\n    ];\n    res.end(JSON.stringify({\n        data: users,\n        status: \"success\"\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdCO0FBRXhCLE1BQU1DLE9BQU9ELDJDQUFJQSxDQUFDO0lBQ2hCRSxRQUFRO0FBQ1Y7QUFFQSxNQUFNQyxnQkFBZ0IsQ0FBQ0MsS0FBS0MsS0FBS0MsS0FBTztJQUN0QyxPQUFPLElBQUlDLFFBQVEsQ0FBQ0MsU0FBU0MsU0FBVztRQUN0Q0gsR0FBR0YsS0FBS0MsS0FBSyxDQUFDSyxTQUFXO1lBQ3ZCLElBQUlBLGtCQUFrQkMsT0FBTztnQkFDM0IsT0FBT0YsT0FBT0M7WUFDaEIsQ0FBQztZQUNELE9BQU9GLFFBQVFFO1FBQ2pCO0lBQ0Y7QUFDRjtBQUVBLE1BQU1FLFVBQVUsT0FBT1IsS0FBS0MsTUFBUTtJQUNsQyxNQUFNRixjQUFjQyxLQUFLQyxLQUFLSjtJQUU5QixJQUFJWSxRQUFRO1FBQ1Y7WUFBRUMsSUFBSTtZQUFHQyxNQUFNO1FBQVE7UUFDdkI7WUFBRUQsSUFBSTtZQUFHQyxNQUFNO1FBQU87S0FDdkI7SUFFRFYsSUFBSVcsR0FBRyxDQUFDQyxLQUFLQyxTQUFTLENBQUM7UUFBRUMsTUFBTU47UUFBT08sUUFBUTtJQUFVO0FBQzFEO0FBRUEsaUVBQWVSLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0X2FwcC8uL3BhZ2VzL2FwaS91c2Vycy9pbmRleC5qcz8xZDhiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb3JzIGZyb20gJ2NvcnMnO1xuXG5jb25zdCBjb3JzID0gQ29ycyh7XG4gIG9yaWdpbjogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcsXG59KTtcblxuY29uc3QgcnVuTWlkZGxld2FyZSA9IChyZXEsIHJlcywgZm4pID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBmbihyZXEsIHJlcywgKHJlc3VsdCkgPT4ge1xuICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIHJldHVybiByZWplY3QocmVzdWx0KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXNvbHZlKHJlc3VsdCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgaGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBhd2FpdCBydW5NaWRkbGV3YXJlKHJlcSwgcmVzLCBjb3JzKTtcblxuICBsZXQgdXNlcnMgPSBbXG4gICAgeyBpZDogMSwgbmFtZTogJ0JhaGFyJyB9LFxuICAgIHsgaWQ6IDIsIG5hbWU6ICdKb2huJyB9LFxuICBdO1xuXG4gIHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkoeyBkYXRhOiB1c2Vycywgc3RhdHVzOiAnc3VjY2VzcycgfSkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiJdLCJuYW1lcyI6WyJDb3JzIiwiY29ycyIsIm9yaWdpbiIsInJ1bk1pZGRsZXdhcmUiLCJyZXEiLCJyZXMiLCJmbiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVzdWx0IiwiRXJyb3IiLCJoYW5kbGVyIiwidXNlcnMiLCJpZCIsIm5hbWUiLCJlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/index.js\n");

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