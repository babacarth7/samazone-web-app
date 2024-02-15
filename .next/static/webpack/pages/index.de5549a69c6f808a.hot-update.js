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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_store_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/store.context */ \"./utils/store.context.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Layout(param) {\n    let { title, children } = param;\n    _s();\n    const { state } = useContext(_utils_store_context__WEBPACK_IMPORTED_MODULE_4__.Store);\n    const { cart } = state;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: title ? title + \" - Samazone\" : \"Samazone\"\n                    }, void 0, false, {\n                        fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Ecommerce Website\"\n                    }, void 0, false, {\n                        fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex min-h-screen flex-col justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                            className: \"flex h-12 items-center px-4 justify-between shadow-md\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/\",\n                                    className: \"text-lg font-bold hover:text-blue-500\",\n                                    children: \"samazone\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                                    lineNumber: 19,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/\",\n                                            className: \"p-2 text-blue-500\",\n                                            children: \"Panier\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                                            lineNumber: 24,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/\",\n                                            className: \"p-2 text-blue-500\",\n                                            children: \"Se connecter\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                                            lineNumber: 27,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                                    lineNumber: 23,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: \"container m-auto mt-4 px-4\",\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                        className: \"flex h-10 justify-center items-center shadow-inner\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Copyright \\xa9 2024 Samazone\"\n                        }, void 0, false, {\n                            fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/babacarthiam/Desktop/samazone/components/layout.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Layout, \"1KanyRZ80sTgEeQF1ogKen7i0wM=\");\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDQTtBQUNIO0FBQ3FCO0FBRWhDLFNBQVNJLE9BQU8sS0FBbUI7UUFBbkIsRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUUsR0FBbkI7O0lBQzdCLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUdDLFdBQVdMLHVEQUFLQTtJQUNsQyxNQUFNLEVBQUVNLElBQUksRUFBRSxHQUFHRjtJQUNqQixxQkFDRTs7MEJBQ0UsOERBQUNQLGtEQUFJQTs7a0NBQ0gsOERBQUNLO2tDQUFPQSxRQUFRQSxRQUFRLGdCQUFnQjs7Ozs7O2tDQUN4Qyw4REFBQ0s7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7Ozs7Ozs7OzswQkFHbkMsOERBQUNDO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7a0NBQ0MsNEVBQUNDOzRCQUFJRixXQUFVOzs4Q0FDYiw4REFBQ2Isa0RBQUlBO29DQUFDZ0IsTUFBSztvQ0FBSUgsV0FBVTs4Q0FBd0M7Ozs7Ozs4Q0FJakUsOERBQUNEOztzREFDQyw4REFBQ1osa0RBQUlBOzRDQUFDZ0IsTUFBSzs0Q0FBSUgsV0FBVTtzREFBb0I7Ozs7OztzREFHN0MsOERBQUNiLGtEQUFJQTs0Q0FBQ2dCLE1BQUs7NENBQUlILFdBQVU7c0RBQW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FPbkQsOERBQUNJO3dCQUFLSixXQUFVO2tDQUE4QlI7Ozs7OztrQ0FFOUMsOERBQUNhO3dCQUFPTCxXQUFVO2tDQUNoQiw0RUFBQ007c0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLYjtHQXBDd0JoQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dC5qcz8yOWE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIi4uL3V0aWxzL3N0b3JlLmNvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgdGl0bGUsIGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgeyBzdGF0ZSB9ID0gdXNlQ29udGV4dChTdG9yZSk7XG4gIGNvbnN0IHsgY2FydCB9ID0gc3RhdGU7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3RpdGxlID8gdGl0bGUgKyBcIiAtIFNhbWF6b25lXCIgOiBcIlNhbWF6b25lXCJ9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkVjb21tZXJjZSBXZWJzaXRlXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXggaC0xMiBpdGVtcy1jZW50ZXIgcHgtNCBqdXN0aWZ5LWJldHdlZW4gc2hhZG93LW1kXCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIGhvdmVyOnRleHQtYmx1ZS01MDBcIj5cbiAgICAgICAgICAgICAgc2FtYXpvbmVcbiAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJwLTIgdGV4dC1ibHVlLTUwMFwiPlxuICAgICAgICAgICAgICAgIFBhbmllclxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwicC0yIHRleHQtYmx1ZS01MDBcIj5cbiAgICAgICAgICAgICAgICBTZSBjb25uZWN0ZXJcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lciBtLWF1dG8gbXQtNCBweC00XCI+e2NoaWxkcmVufTwvbWFpbj5cblxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZsZXggaC0xMCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgc2hhZG93LWlubmVyXCI+XG4gICAgICAgICAgPHA+Q29weXJpZ2h0ICZjb3B5OyAyMDI0IFNhbWF6b25lPC9wPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJMaW5rIiwiUmVhY3QiLCJTdG9yZSIsIkxheW91dCIsInRpdGxlIiwiY2hpbGRyZW4iLCJzdGF0ZSIsInVzZUNvbnRleHQiLCJjYXJ0IiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwibmF2IiwiaHJlZiIsIm1haW4iLCJmb290ZXIiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout.js\n"));

/***/ }),

/***/ "./utils/store.context.js":
/*!********************************!*\
  !*** ./utils/store.context.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Store: function() { return /* binding */ Store; },\n/* harmony export */   StoreProvider: function() { return /* binding */ StoreProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Store = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst initialState = {\n    cart: {\n        cartItems: []\n    }\n};\nfunction reducer(state, action) {\n    switch(action.type){\n        case \"CART_ADD_ITEM\":\n            {\n                const newItem = action.payload;\n                const existItem = state.cart.cartItems.find((item)=>item.slug === newItem.slug);\n                const cartItems = existItem ? state.cart.cartItems.map((item)=>item.name === existItem.name ? newItem : item) : [\n                    ...state.cart.cartItems,\n                    newItem\n                ];\n                return {\n                    ...state,\n                    cart: {\n                        ...state.cart,\n                        cartItems\n                    }\n                };\n            }\n        default:\n            return state;\n    }\n}\nfunction StoreProvider(param) {\n    let { children } = param;\n    _s();\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);\n    const value = {\n        state,\n        dispatch\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Store.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/babacarthiam/Desktop/samazone/utils/store.context.js\",\n        lineNumber: 31,\n        columnNumber: 10\n    }, this);\n}\n_s(StoreProvider, \"6JWkGZ32UPfojeNx+xqn8ZU8A0Q=\");\n_c = StoreProvider;\nvar _c;\n$RefreshReg$(_c, \"StoreProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9zdG9yZS5jb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWtEO0FBRTNDLE1BQU1FLHNCQUFRRixvREFBYUEsR0FBRztBQUVyQyxNQUFNRyxlQUFlO0lBQ25CQyxNQUFNO1FBQUVDLFdBQVcsRUFBRTtJQUFDO0FBQ3hCO0FBRUEsU0FBU0MsUUFBUUMsS0FBSyxFQUFFQyxNQUFNO0lBQzVCLE9BQVFBLE9BQU9DLElBQUk7UUFDakIsS0FBSztZQUFpQjtnQkFDcEIsTUFBTUMsVUFBVUYsT0FBT0csT0FBTztnQkFDOUIsTUFBTUMsWUFBWUwsTUFBTUgsSUFBSSxDQUFDQyxTQUFTLENBQUNRLElBQUksQ0FDekMsQ0FBQ0MsT0FBU0EsS0FBS0MsSUFBSSxLQUFLTCxRQUFRSyxJQUFJO2dCQUV0QyxNQUFNVixZQUFZTyxZQUNkTCxNQUFNSCxJQUFJLENBQUNDLFNBQVMsQ0FBQ1csR0FBRyxDQUFDLENBQUNGLE9BQ3hCQSxLQUFLRyxJQUFJLEtBQUtMLFVBQVVLLElBQUksR0FBR1AsVUFBVUksUUFFM0M7dUJBQUlQLE1BQU1ILElBQUksQ0FBQ0MsU0FBUztvQkFBRUs7aUJBQVE7Z0JBQ3RDLE9BQU87b0JBQUUsR0FBR0gsS0FBSztvQkFBRUgsTUFBTTt3QkFBRSxHQUFHRyxNQUFNSCxJQUFJO3dCQUFFQztvQkFBVTtnQkFBRTtZQUN4RDtRQUNBO1lBQ0UsT0FBT0U7SUFDWDtBQUNGO0FBRU8sU0FBU1csY0FBYyxLQUFZO1FBQVosRUFBRUMsUUFBUSxFQUFFLEdBQVo7O0lBQzVCLE1BQU0sQ0FBQ1osT0FBT2EsU0FBUyxHQUFHbkIsaURBQVVBLENBQUNLLFNBQVNIO0lBQzlDLE1BQU1rQixRQUFRO1FBQUVkO1FBQU9hO0lBQVM7SUFDaEMscUJBQU8sOERBQUNsQixNQUFNb0IsUUFBUTtRQUFDRCxPQUFPQTtrQkFBUUY7Ozs7OztBQUN4QztHQUpnQkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvc3RvcmUuY29udGV4dC5qcz82N2I4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IFN0b3JlID0gY3JlYXRlQ29udGV4dCgpO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGNhcnQ6IHsgY2FydEl0ZW1zOiBbXSB9LFxufTtcblxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiQ0FSVF9BRERfSVRFTVwiOiB7XG4gICAgICBjb25zdCBuZXdJdGVtID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBjb25zdCBleGlzdEl0ZW0gPSBzdGF0ZS5jYXJ0LmNhcnRJdGVtcy5maW5kKFxuICAgICAgICAoaXRlbSkgPT4gaXRlbS5zbHVnID09PSBuZXdJdGVtLnNsdWdcbiAgICAgICk7XG4gICAgICBjb25zdCBjYXJ0SXRlbXMgPSBleGlzdEl0ZW1cbiAgICAgICAgPyBzdGF0ZS5jYXJ0LmNhcnRJdGVtcy5tYXAoKGl0ZW0pID0+XG4gICAgICAgICAgICBpdGVtLm5hbWUgPT09IGV4aXN0SXRlbS5uYW1lID8gbmV3SXRlbSA6IGl0ZW1cbiAgICAgICAgICApXG4gICAgICAgIDogWy4uLnN0YXRlLmNhcnQuY2FydEl0ZW1zLCBuZXdJdGVtXTtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjYXJ0OiB7IC4uLnN0YXRlLmNhcnQsIGNhcnRJdGVtcyB9IH07XG4gICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFN0b3JlUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xuICBjb25zdCB2YWx1ZSA9IHsgc3RhdGUsIGRpc3BhdGNoIH07XG4gIHJldHVybiA8U3RvcmUuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT57Y2hpbGRyZW59PC9TdG9yZS5Qcm92aWRlcj47XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVJlZHVjZXIiLCJTdG9yZSIsImluaXRpYWxTdGF0ZSIsImNhcnQiLCJjYXJ0SXRlbXMiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwibmV3SXRlbSIsInBheWxvYWQiLCJleGlzdEl0ZW0iLCJmaW5kIiwiaXRlbSIsInNsdWciLCJtYXAiLCJuYW1lIiwiU3RvcmVQcm92aWRlciIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJ2YWx1ZSIsIlByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/store.context.js\n"));

/***/ })

});