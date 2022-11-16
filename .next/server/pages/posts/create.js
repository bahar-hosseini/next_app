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
exports.id = "pages/posts/create";
exports.ids = ["pages/posts/create"];
exports.modules = {

/***/ "./pages/posts/create.js":
/*!*******************************!*\
  !*** ./pages/posts/create.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst CreatePost = ()=>{\n    const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        title: \"\",\n        body: \"\"\n    });\n    const changeHandler = (e)=>{\n        setForm({\n            ...form,\n            [e.target.name]: e.target.value\n        });\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        let res = await fetch(\"http://localhost:3000/api/posts/create\", {\n            method: \"POST\",\n            body: JSON.stringify(form),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        res = await res.json();\n        console.log(res);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"jsx-c050e9092314713d\",\n                children: \"Create Post\"\n            }, void 0, false, {\n                fileName: \"/Users/bahar/Documents/next_app/pages/posts/create.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"c050e9092314713d\",\n                children: \"label.jsx-c050e9092314713d{display:block}\"\n            }, void 0, false, void 0, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: \"jsx-c050e9092314713d\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-c050e9092314713d\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"jsx-c050e9092314713d\",\n                                children: \"Title\"\n                            }, void 0, false, {\n                                fileName: \"/Users/bahar/Documents/next_app/pages/posts/create.js\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"title\",\n                                value: form.title,\n                                onChange: changeHandler,\n                                className: \"jsx-c050e9092314713d\"\n                            }, void 0, false, {\n                                fileName: \"/Users/bahar/Documents/next_app/pages/posts/create.js\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bahar/Documents/next_app/pages/posts/create.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-c050e9092314713d\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"jsx-c050e9092314713d\",\n                                children: \"Body\"\n                            }, void 0, false, {\n                                fileName: \"/Users/bahar/Documents/next_app/pages/posts/create.js\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                type: \"text\",\n                                name: \"body\",\n                                value: form.body,\n                                rows: \"10\",\n                                cols: \"60\",\n                                onChange: changeHandler,\n                                className: \"jsx-c050e9092314713d\"\n                            }, void 0, false, {\n                                fileName: \"/Users/bahar/Documents/next_app/pages/posts/create.js\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bahar/Documents/next_app/pages/posts/create.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"jsx-c050e9092314713d\",\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bahar/Documents/next_app/pages/posts/create.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bahar/Documents/next_app/pages/posts/create.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreatePost);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9jcmVhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUFpQztBQUVqQyxNQUFNQyxhQUFhLElBQU07SUFDdkIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdILCtDQUFRQSxDQUFDO1FBQUVJLE9BQU87UUFBSUMsTUFBTTtJQUFHO0lBQ3ZELE1BQU1DLGdCQUFnQixDQUFDQyxJQUFNO1FBQzNCSixRQUFRO1lBQUUsR0FBR0QsSUFBSTtZQUFFLENBQUNLLEVBQUVDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLEVBQUVGLEVBQUVDLE1BQU0sQ0FBQ0UsS0FBSztRQUFDO0lBQ3JEO0lBQ0EsTUFBTUMsZUFBZSxPQUFPSixJQUFNO1FBQ2hDQSxFQUFFSyxjQUFjO1FBQ2hCLElBQUlDLE1BQU0sTUFBTUMsTUFBTSwwQ0FBMEM7WUFDOURDLFFBQVE7WUFDUlYsTUFBTVcsS0FBS0MsU0FBUyxDQUFDZjtZQUNyQmdCLFNBQVM7Z0JBQUUsZ0JBQWdCO1lBQW1CO1FBQ2hEO1FBQ0FMLE1BQU0sTUFBTUEsSUFBSU0sSUFBSTtRQUNwQkMsUUFBUUMsR0FBRyxDQUFDUjtJQUNkO0lBQ0EscUJBQ0U7OzBCQUNFLDhEQUFDUzs7MEJBQUc7Ozs7Ozs7Ozs7MEJBUUosOERBQUNwQjtnQkFBS3FCLFVBQVVaOzs7a0NBQ2QsOERBQUNhOzs7MENBQ0MsOERBQUNDOzswQ0FBTTs7Ozs7OzBDQUNQLDhEQUFDQztnQ0FDQ0MsTUFBSztnQ0FDTGxCLE1BQUs7Z0NBQ0xDLE9BQU9SLEtBQUtFLEtBQUs7Z0NBQ2pCd0IsVUFBVXRCOzs7Ozs7Ozs7Ozs7O2tDQUdkLDhEQUFDa0I7OzswQ0FDQyw4REFBQ0M7OzBDQUFNOzs7Ozs7MENBQ1AsOERBQUNJO2dDQUNDRixNQUFLO2dDQUNMbEIsTUFBSztnQ0FDTEMsT0FBT1IsS0FBS0csSUFBSTtnQ0FDaEJ5QixNQUFLO2dDQUNMQyxNQUFLO2dDQUNMSCxVQUFVdEI7Ozs7Ozs7Ozs7Ozs7a0NBR2QsOERBQUMwQjs7a0NBQU87Ozs7Ozs7Ozs7Ozs7O0FBSWhCO0FBRUEsaUVBQWUvQixVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dF9hcHAvLi9wYWdlcy9wb3N0cy9jcmVhdGUuanM/Y2RmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQ3JlYXRlUG9zdCA9ICgpID0+IHtcbiAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoeyB0aXRsZTogJycsIGJvZHk6ICcnIH0pO1xuICBjb25zdCBjaGFuZ2VIYW5kbGVyID0gKGUpID0+IHtcbiAgICBzZXRGb3JtKHsgLi4uZm9ybSwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Bvc3RzL2NyZWF0ZScsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybSksXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICB9KTtcbiAgICByZXMgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMT5DcmVhdGUgUG9zdDwvaDE+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWw+VGl0bGU8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgIG5hbWU9J3RpdGxlJ1xuICAgICAgICAgICAgdmFsdWU9e2Zvcm0udGl0bGV9XG4gICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWw+Qm9keTwvbGFiZWw+XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgbmFtZT0nYm9keSdcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtLmJvZHl9XG4gICAgICAgICAgICByb3dzPScxMCdcbiAgICAgICAgICAgIGNvbHM9JzYwJ1xuICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24+U2VuZDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlUG9zdDtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkNyZWF0ZVBvc3QiLCJmb3JtIiwic2V0Rm9ybSIsInRpdGxlIiwiYm9keSIsImNoYW5nZUhhbmRsZXIiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJoMSIsIm9uU3VibWl0IiwiZGl2IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsInRleHRhcmVhIiwicm93cyIsImNvbHMiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/create.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/posts/create.js"));
module.exports = __webpack_exports__;

})();