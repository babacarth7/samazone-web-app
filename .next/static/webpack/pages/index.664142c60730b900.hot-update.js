"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_store_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/store.context */ \"./utils/store.context.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Layout(param) {\n    let { title, children } = param;\n    _s();\n    const { state } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(Store);\n    const { cart } = state;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: title ? title + \" - Samazone\" : \"Samazone\"\n                    }, void 0, false, {\n                        fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Ecommerce Website\"\n                    }, void 0, false, {\n                        fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex min-h-screen flex-col justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                            className: \"flex h-12 items-center px-4 justify-between shadow-md\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/\",\n                                    className: \"text-lg font-bold hover:text-blue-500\",\n                                    children: \"samazone\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                                    lineNumber: 19,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/\",\n                                            className: \"p-2 text-blue-500\",\n                                            children: [\n                                                \"Panier Cart\",\n                                                cart.cartItems.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white\",\n                                                    children: cart.cartItems.reduce((a, c)=>a + c.quantity, 0)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                                                    lineNumber: 28,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                                            lineNumber: 24,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/\",\n                                            className: \"p-2 text-blue-500\",\n                                            children: \"Se connecter\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                                            lineNumber: 33,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                                    lineNumber: 23,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: \"container m-auto mt-4 px-4\",\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                        className: \"flex h-10 justify-center items-center shadow-inner\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Copyright \\xa9 2024 Samazone\"\n                        }, void 0, false, {\n                            fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Layout, \"1KanyRZ80sTgEeQF1ogKen7i0wM=\");\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDQTtBQUNXO0FBQ2E7QUFFdEMsU0FBU0ssT0FBTyxLQUFtQjtRQUFuQixFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFuQjs7SUFDN0IsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR0wsaURBQVVBLENBQUNNO0lBQzdCLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdGO0lBQ2pCLHFCQUNFOzswQkFDRSw4REFBQ1Isa0RBQUlBOztrQ0FDSCw4REFBQ007a0NBQU9BLFFBQVFBLFFBQVEsZ0JBQWdCOzs7Ozs7a0NBQ3hDLDhEQUFDSzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7Ozs7Ozs7OzBCQUduQyw4REFBQ0M7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQztrQ0FDQyw0RUFBQ0M7NEJBQUlGLFdBQVU7OzhDQUNiLDhEQUFDZCxrREFBSUE7b0NBQUNpQixNQUFLO29DQUFJSCxXQUFVOzhDQUF3Qzs7Ozs7OzhDQUlqRSw4REFBQ0Q7O3NEQUNDLDhEQUFDYixrREFBSUE7NENBQUNpQixNQUFLOzRDQUFJSCxXQUFVOztnREFBb0I7Z0RBR3hDTCxLQUFLUyxTQUFTLENBQUNDLE1BQU0sR0FBRyxtQkFDdkIsOERBQUNDO29EQUFLTixXQUFVOzhEQUNiTCxLQUFLUyxTQUFTLENBQUNHLE1BQU0sQ0FBQyxDQUFDQyxHQUFHQyxJQUFNRCxJQUFJQyxFQUFFQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7OztzREFJekQsOERBQUN4QixrREFBSUE7NENBQUNpQixNQUFLOzRDQUFJSCxXQUFVO3NEQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBT25ELDhEQUFDVzt3QkFBS1gsV0FBVTtrQ0FBOEJSOzs7Ozs7a0NBRTlDLDhEQUFDb0I7d0JBQU9aLFdBQVU7a0NBQ2hCLDRFQUFDYTtzQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtiO0dBMUN3QnZCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0LmpzPzI5YTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDYXJ0Q29udGV4dCB9IGZyb20gXCIuLi91dGlscy9zdG9yZS5jb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IHRpdGxlLCBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IHsgc3RhdGUgfSA9IHVzZUNvbnRleHQoU3RvcmUpO1xuICBjb25zdCB7IGNhcnQgfSA9IHN0YXRlO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnt0aXRsZSA/IHRpdGxlICsgXCIgLSBTYW1hem9uZVwiIDogXCJTYW1hem9uZVwifTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJFY29tbWVyY2UgV2Vic2l0ZVwiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IGgtMTIgaXRlbXMtY2VudGVyIHB4LTQganVzdGlmeS1iZXR3ZWVuIHNoYWRvdy1tZFwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCBob3Zlcjp0ZXh0LWJsdWUtNTAwXCI+XG4gICAgICAgICAgICAgIHNhbWF6b25lXG4gICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwicC0yIHRleHQtYmx1ZS01MDBcIj5cbiAgICAgICAgICAgICAgICBQYW5pZXJcbiAgICAgICAgICAgICAgICBDYXJ0XG4gICAgICAgICAgICAgICAgICB7Y2FydC5jYXJ0SXRlbXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTEgcm91bmRlZC1mdWxsIGJnLXJlZC02MDAgcHgtMiBweS0xIHRleHQteHMgZm9udC1ib2xkIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7Y2FydC5jYXJ0SXRlbXMucmVkdWNlKChhLCBjKSA9PiBhICsgYy5xdWFudGl0eSwgMCl9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJwLTIgdGV4dC1ibHVlLTUwMFwiPlxuICAgICAgICAgICAgICAgIFNlIGNvbm5lY3RlclxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyIG0tYXV0byBtdC00IHB4LTRcIj57Y2hpbGRyZW59PC9tYWluPlxuXG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiZmxleCBoLTEwIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBzaGFkb3ctaW5uZXJcIj5cbiAgICAgICAgICA8cD5Db3B5cmlnaHQgJmNvcHk7IDIwMjQgU2FtYXpvbmU8L3A+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkxpbmsiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJDYXJ0Q29udGV4dCIsIkxheW91dCIsInRpdGxlIiwiY2hpbGRyZW4iLCJzdGF0ZSIsIlN0b3JlIiwiY2FydCIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsIm5hdiIsImhyZWYiLCJjYXJ0SXRlbXMiLCJsZW5ndGgiLCJzcGFuIiwicmVkdWNlIiwiYSIsImMiLCJxdWFudGl0eSIsIm1haW4iLCJmb290ZXIiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout.js\n"));

/***/ })

});