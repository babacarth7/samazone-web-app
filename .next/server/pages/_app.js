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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_Store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Store */ \"./utils/Store.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @paypal/react-paypal-js */ \"@paypal/react-paypal-js\");\n/* harmony import */ var _paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_Store__WEBPACK_IMPORTED_MODULE_3__]);\n_utils_Store__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nfunction MyApp({ Component, pageProps: { session, ...pageProps } }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_2__.SessionProvider, {\n        session: session,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_Store__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_5__.PayPalScriptProvider, {\n                children: Component.auth ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Auth, {\n                    adminOnly: Component.auth.adminOnly,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/babacarthiam/Desktop/samazone/pages/_app.js\",\n                        lineNumber: 14,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/babacarthiam/Desktop/samazone/pages/_app.js\",\n                    lineNumber: 13,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/babacarthiam/Desktop/samazone/pages/_app.js\",\n                    lineNumber: 17,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/babacarthiam/Desktop/samazone/pages/_app.js\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/babacarthiam/Desktop/samazone/pages/_app.js\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/babacarthiam/Desktop/samazone/pages/_app.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\nfunction Auth({ children, adminOnly }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { status, data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)({\n        required: true,\n        onUnauthenticated () {\n            router.push(\"/unauthorized?message=login required\");\n        }\n    });\n    if (status === \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/babacarthiam/Desktop/samazone/pages/_app.js\",\n            lineNumber: 34,\n            columnNumber: 12\n        }, this);\n    }\n    if (adminOnly && !session.user.isAdmin) {\n        router.push(\"/unauthorized?message=admin login required\");\n    }\n    return children;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDK0I7QUFDbkI7QUFDSDtBQUN1QjtBQUUvRCxTQUFTSyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUUsR0FBR0QsV0FBVyxFQUFFO0lBQ2hFLHFCQUNFLDhEQUFDUCw0REFBZUE7UUFBQ1EsU0FBU0E7a0JBQ3hCLDRFQUFDTixvREFBYUE7c0JBQ1osNEVBQUNFLHlFQUFvQkE7MEJBQ3BCRSxVQUFVRyxJQUFJLGlCQUNiLDhEQUFDQztvQkFBS0MsV0FBV0wsVUFBVUcsSUFBSSxDQUFDRSxTQUFTOzhCQUN2Qyw0RUFBQ0w7d0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozt5Q0FHMUIsOERBQUNEO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1sQztBQUVBLFNBQVNHLEtBQUssRUFBRUUsUUFBUSxFQUFFRCxTQUFTLEVBQUU7SUFDbkMsTUFBTUUsU0FBU1Ysc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRVcsTUFBTSxFQUFFQyxNQUFNUCxPQUFPLEVBQUUsR0FBR1AsMkRBQVVBLENBQUM7UUFDM0NlLFVBQVU7UUFDVkM7WUFDRUosT0FBT0ssSUFBSSxDQUFDO1FBQ2Q7SUFDRjtJQUNBLElBQUlKLFdBQVcsV0FBVztRQUN4QixxQkFBTyw4REFBQ0s7c0JBQUk7Ozs7OztJQUNkO0lBRUEsSUFBSVIsYUFBYSxDQUFDSCxRQUFRWSxJQUFJLENBQUNDLE9BQU8sRUFBRTtRQUN0Q1IsT0FBT0ssSUFBSSxDQUFDO0lBQ2Q7SUFFQSxPQUFPTjtBQUNUO0FBRUEsaUVBQWVQLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lLWNvbW1lcmNlLWFwcC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB7IFNlc3Npb25Qcm92aWRlciwgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCBTdG9yZVByb3ZpZGVyIGZyb20gXCIuLi91dGlscy9TdG9yZVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBQYXlQYWxTY3JpcHRQcm92aWRlciB9IGZyb20gXCJAcGF5cGFsL3JlYWN0LXBheXBhbC1qc1wiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzOiB7IHNlc3Npb24sIC4uLnBhZ2VQcm9wcyB9IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8U2Vzc2lvblByb3ZpZGVyIHNlc3Npb249e3Nlc3Npb259PlxuICAgICAgPFN0b3JlUHJvdmlkZXI+XG4gICAgICAgIDxQYXlQYWxTY3JpcHRQcm92aWRlcj5cbiAgICAgICAge0NvbXBvbmVudC5hdXRoID8gKFxuICAgICAgICAgIDxBdXRoIGFkbWluT25seT17Q29tcG9uZW50LmF1dGguYWRtaW5Pbmx5fT5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICA8L0F1dGg+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICApfVxuICAgICAgICA8L1BheVBhbFNjcmlwdFByb3ZpZGVyPlxuICAgICAgPC9TdG9yZVByb3ZpZGVyPlxuICAgIDwvU2Vzc2lvblByb3ZpZGVyPlxuICApO1xufVxuXG5mdW5jdGlvbiBBdXRoKHsgY2hpbGRyZW4sIGFkbWluT25seSB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IHN0YXR1cywgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbih7XG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgb25VbmF1dGhlbnRpY2F0ZWQoKSB7XG4gICAgICByb3V0ZXIucHVzaChcIi91bmF1dGhvcml6ZWQ/bWVzc2FnZT1sb2dpbiByZXF1aXJlZFwiKTtcbiAgICB9LFxuICB9KTtcbiAgaWYgKHN0YXR1cyA9PT0gXCJsb2FkaW5nXCIpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG5cbiAgaWYgKGFkbWluT25seSAmJiAhc2Vzc2lvbi51c2VyLmlzQWRtaW4pIHtcbiAgICByb3V0ZXIucHVzaChcIi91bmF1dGhvcml6ZWQ/bWVzc2FnZT1hZG1pbiBsb2dpbiByZXF1aXJlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiU2Vzc2lvblByb3ZpZGVyIiwidXNlU2Vzc2lvbiIsIlN0b3JlUHJvdmlkZXIiLCJ1c2VSb3V0ZXIiLCJQYXlQYWxTY3JpcHRQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic2Vzc2lvbiIsImF1dGgiLCJBdXRoIiwiYWRtaW5Pbmx5IiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJzdGF0dXMiLCJkYXRhIiwicmVxdWlyZWQiLCJvblVuYXV0aGVudGljYXRlZCIsInB1c2giLCJkaXYiLCJ1c2VyIiwiaXNBZG1pbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./utils/Store.js":
/*!************************!*\
  !*** ./utils/Store.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Store: () => (/* binding */ Store),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_2__]);\njs_cookie__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst Store = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst initialState = {\n    cart: js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"cart\") ? JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"cart\")) : {\n        cartItems: [],\n        shippingAddress: {}\n    }\n};\nfunction reducer(state, action) {\n    switch(action.type){\n        case \"CART_ADD_ITEM\":\n            {\n                const newItem = action.payload;\n                const existItem = state.cart.cartItems.find((item)=>item.slug === newItem.slug);\n                const cartItems = existItem ? state.cart.cartItems.map((item)=>item.name === existItem.name ? newItem : item) : [\n                    ...state.cart.cartItems,\n                    newItem\n                ];\n                js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"cart\", JSON.stringify({\n                    ...state.cart,\n                    cartItems\n                }));\n                return {\n                    ...state,\n                    cart: {\n                        ...state.cart,\n                        cartItems\n                    }\n                };\n            }\n        case \"CART_REMOVE_ITEM\":\n            {\n                const cartItems = state.cart.cartItems.filter((item)=>item.slug !== action.payload.slug);\n                js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"cart\", JSON.stringify({\n                    ...state.cart,\n                    cartItems\n                }));\n                return {\n                    ...state,\n                    cart: {\n                        ...state.cart,\n                        cartItems\n                    }\n                };\n            }\n        case \"CART_RESET\":\n            return {\n                ...state,\n                cart: {\n                    cartItems: [],\n                    shippingAddress: {\n                        location: {}\n                    },\n                    paymentMethod: \"\"\n                }\n            };\n        case \"CART_CLEAR_ITEMS\":\n            return {\n                ...state,\n                cart: {\n                    ...state.cart,\n                    cartItems: []\n                }\n            };\n        case \"SAVE_SHIPPING_ADDRESS\":\n            return {\n                ...state,\n                cart: {\n                    ...state.cart,\n                    shippingAddress: {\n                        ...state.cart.shippingAddress,\n                        ...action.payload\n                    }\n                }\n            };\n        case \"SAVE_PAYMENT_METHOD\":\n            return {\n                ...state,\n                cart: {\n                    ...state.cart,\n                    paymentMethod: action.payload\n                }\n            };\n        default:\n            return state;\n    }\n}\nfunction StoreProvider({ children }) {\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);\n    const value = {\n        state,\n        dispatch\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Store.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/babacarthiam/Desktop/samazone/utils/Store.js\",\n        lineNumber: 74,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StoreProvider);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c291cmNlcyI6WyJ3ZWJwYWNrOi8vZS1jb21tZXJjZS1hcHAvLi91dGlscy9TdG9yZS5qcz84YjhiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcblxuZXhwb3J0IGNvbnN0IFN0b3JlID0gY3JlYXRlQ29udGV4dCgpO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGNhcnQ6IENvb2tpZXMuZ2V0KFwiY2FydFwiKVxuICAgID8gSlNPTi5wYXJzZShDb29raWVzLmdldChcImNhcnRcIikpXG4gICAgOiB7IGNhcnRJdGVtczogW10sIHNoaXBwaW5nQWRkcmVzczoge30gfSxcbn07XG5cbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBcIkNBUlRfQUREX0lURU1cIjoge1xuICAgICAgY29uc3QgbmV3SXRlbSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgY29uc3QgZXhpc3RJdGVtID0gc3RhdGUuY2FydC5jYXJ0SXRlbXMuZmluZChcbiAgICAgICAgKGl0ZW0pID0+IGl0ZW0uc2x1ZyA9PT0gbmV3SXRlbS5zbHVnXG4gICAgICApO1xuICAgICAgY29uc3QgY2FydEl0ZW1zID0gZXhpc3RJdGVtXG4gICAgICAgID8gc3RhdGUuY2FydC5jYXJ0SXRlbXMubWFwKChpdGVtKSA9PlxuICAgICAgICAgICAgaXRlbS5uYW1lID09PSBleGlzdEl0ZW0ubmFtZSA/IG5ld0l0ZW0gOiBpdGVtXG4gICAgICAgICAgKVxuICAgICAgICA6IFsuLi5zdGF0ZS5jYXJ0LmNhcnRJdGVtcywgbmV3SXRlbV07XG4gICAgICBDb29raWVzLnNldChcImNhcnRcIiwgSlNPTi5zdHJpbmdpZnkoeyAuLi5zdGF0ZS5jYXJ0LCBjYXJ0SXRlbXMgfSkpO1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNhcnQ6IHsgLi4uc3RhdGUuY2FydCwgY2FydEl0ZW1zIH0gfTtcbiAgICB9XG5cbiAgICBjYXNlIFwiQ0FSVF9SRU1PVkVfSVRFTVwiOiB7XG4gICAgICBjb25zdCBjYXJ0SXRlbXMgPSBzdGF0ZS5jYXJ0LmNhcnRJdGVtcy5maWx0ZXIoXG4gICAgICAgIChpdGVtKSA9PiBpdGVtLnNsdWcgIT09IGFjdGlvbi5wYXlsb2FkLnNsdWdcbiAgICAgICk7XG4gICAgICBDb29raWVzLnNldChcImNhcnRcIiwgSlNPTi5zdHJpbmdpZnkoeyAuLi5zdGF0ZS5jYXJ0LCBjYXJ0SXRlbXMgfSkpO1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNhcnQ6IHsgLi4uc3RhdGUuY2FydCwgY2FydEl0ZW1zIH0gfTtcbiAgICB9XG4gICAgY2FzZSBcIkNBUlRfUkVTRVRcIjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXJ0OiB7XG4gICAgICAgICAgY2FydEl0ZW1zOiBbXSxcbiAgICAgICAgICBzaGlwcGluZ0FkZHJlc3M6IHsgbG9jYXRpb246IHt9IH0sXG4gICAgICAgICAgcGF5bWVudE1ldGhvZDogXCJcIixcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgY2FzZSBcIkNBUlRfQ0xFQVJfSVRFTVNcIjpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjYXJ0OiB7IC4uLnN0YXRlLmNhcnQsIGNhcnRJdGVtczogW10gfSB9O1xuXG4gICAgY2FzZSBcIlNBVkVfU0hJUFBJTkdfQUREUkVTU1wiOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcnQ6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5jYXJ0LFxuICAgICAgICAgIHNoaXBwaW5nQWRkcmVzczoge1xuICAgICAgICAgICAgLi4uc3RhdGUuY2FydC5zaGlwcGluZ0FkZHJlc3MsXG4gICAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICBjYXNlIFwiU0FWRV9QQVlNRU5UX01FVEhPRFwiOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcnQ6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5jYXJ0LFxuICAgICAgICAgIHBheW1lbnRNZXRob2Q6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIFN0b3JlUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xuICBjb25zdCB2YWx1ZSA9IHsgc3RhdGUsIGRpc3BhdGNoIH07XG4gIHJldHVybiA8U3RvcmUuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT57Y2hpbGRyZW59PC9TdG9yZS5Qcm92aWRlcj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JlUHJvdmlkZXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVJlZHVjZXIiLCJDb29raWVzIiwiU3RvcmUiLCJpbml0aWFsU3RhdGUiLCJjYXJ0IiwiZ2V0IiwiSlNPTiIsInBhcnNlIiwiY2FydEl0ZW1zIiwic2hpcHBpbmdBZGRyZXNzIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIm5ld0l0ZW0iLCJwYXlsb2FkIiwiZXhpc3RJdGVtIiwiZmluZCIsIml0ZW0iLCJzbHVnIiwibWFwIiwibmFtZSIsInNldCIsInN0cmluZ2lmeSIsImZpbHRlciIsImxvY2F0aW9uIiwicGF5bWVudE1ldGhvZCIsIlN0b3JlUHJvdmlkZXIiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwidmFsdWUiLCJQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/Store.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@paypal/react-paypal-js":
/*!******************************************!*\
  !*** external "@paypal/react-paypal-js" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@paypal/react-paypal-js");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();