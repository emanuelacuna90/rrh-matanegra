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

/***/ "./components/organisms/LogosSlider/LogosSlider.jsx":
/*!**********************************************************!*\
  !*** ./components/organisms/LogosSlider/LogosSlider.jsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _LogosSlider_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LogosSlider.module.scss */ \"./components/organisms/LogosSlider/LogosSlider.module.scss\");\n/* harmony import */ var _LogosSlider_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_LogosSlider_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swiper_css_effect_fade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/effect-fade */ \"./node_modules/swiper/modules/effect-fade/effect-fade.min.css\");\n/* harmony import */ var swiper_css_effect_fade__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css_effect_fade__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data */ \"./components/organisms/LogosSlider/data.js\");\n/* harmony import */ var _molecules_Logos_Logos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../molecules/Logos/Logos */ \"./components/molecules/Logos/Logos.jsx\");\n/* harmony import */ var _atoms_Title_Title__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../atoms/Title/Title */ \"./components/atoms/Title/Title.jsx\");\n\n\n\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar LogosSlider = function() {\n    var _this1 = _this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_LogosSlider_module_scss__WEBPACK_IMPORTED_MODULE_9___default().hero),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_Title_Title__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                text: _data__WEBPACK_IMPORTED_MODULE_6__.slides.text\n            }, void 0, false, {\n                fileName: \"/Users/emanuelacunagimenez/Desktop/rrh-matanegra/components/organisms/LogosSlider/LogosSlider.jsx\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, _objectSpread({}, _data__WEBPACK_IMPORTED_MODULE_6__.swiperProps, {\n                modules: [\n                    swiper__WEBPACK_IMPORTED_MODULE_2__.Autoplay,\n                    swiper__WEBPACK_IMPORTED_MODULE_2__.EffectFade,\n                    swiper__WEBPACK_IMPORTED_MODULE_2__.Pagination\n                ],\n                children: _data__WEBPACK_IMPORTED_MODULE_6__.slides.map(function(param) {\n                    var id = param.id, text = param.text;\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_molecules_Logos_Logos__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            imageUrl: \"/assets/img/hero/bg\".concat(id, \".jpg\")\n                        }, void 0, false, {\n                            fileName: \"/Users/emanuelacunagimenez/Desktop/rrh-matanegra/components/organisms/LogosSlider/LogosSlider.jsx\",\n                            lineNumber: 18,\n                            columnNumber: 13\n                        }, _this1)\n                    }, id, false, {\n                        fileName: \"/Users/emanuelacunagimenez/Desktop/rrh-matanegra/components/organisms/LogosSlider/LogosSlider.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, _this1);\n                })\n            }), void 0, false, {\n                fileName: \"/Users/emanuelacunagimenez/Desktop/rrh-matanegra/components/organisms/LogosSlider/LogosSlider.jsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/emanuelacunagimenez/Desktop/rrh-matanegra/components/organisms/LogosSlider/LogosSlider.jsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, _this));\n};\n_c = LogosSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LogosSlider);\nvar _c;\n$RefreshReg$(_c, \"LogosSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL29yZ2FuaXNtcy9Mb2dvc1NsaWRlci9Mb2dvc1NsaWRlci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFDSTtBQUNPO0FBQ3RDO0FBQ1c7QUFDQztBQUNhO0FBQ0c7QUFDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNDLEdBQUssQ0FBQ1UsV0FBVyxHQUFHLFFBQ3BCLEdBRDBCLENBQUM7O0lBQ3pCLE1BQU0sNkVBQ0hDLENBQU87UUFBQ0MsU0FBUyxFQUFFWixzRUFBVzs7d0ZBQzFCUywwREFBSztnQkFBQ0ssSUFBSSxFQUFFUiw4Q0FBVzs7Ozs7O3dGQUN6QkwsZ0RBQU0sb0JBQUtNLDhDQUFXO2dCQUFFUSxPQUFPLEVBQUUsQ0FBQ1o7b0JBQUFBLDRDQUFRO29CQUFFQyw4Q0FBVTtvQkFBRUMsOENBQVU7Z0JBQUEsQ0FBQzswQkFDakVDLDZDQUFVLENBQUMsUUFBUTt3QkFBTFcsRUFBRSxTQUFGQSxFQUFFLEVBQUVILElBQUksU0FBSkEsSUFBSTtrQ0FDckIsTUFBTSwrREFBTFoscURBQVc7OEdBQ1RNLDhEQUFLOzRCQUFDVSxRQUFRLEVBQUcsQ0FBbUIscUJBQUssTUFBSSxDQUFQRCxFQUFFLEVBQUMsQ0FBSTs7Ozs7O3VCQUQ5QkEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPOUIsQ0FBQztLQWJLUCxXQUFXO0FBZWpCLCtEQUFlQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvb3JnYW5pc21zL0xvZ29zU2xpZGVyL0xvZ29zU2xpZGVyLmpzeD9jNDAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9Mb2dvc1NsaWRlci5tb2R1bGUuc2NzcydcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tICdzd2lwZXIvcmVhY3QnXG5pbXBvcnQgeyBBdXRvcGxheSwgRWZmZWN0RmFkZSwgUGFnaW5hdGlvbiB9IGZyb20gJ3N3aXBlcidcbmltcG9ydCAnc3dpcGVyL2NzcydcbmltcG9ydCAnc3dpcGVyL2Nzcy9wYWdpbmF0aW9uJ1xuaW1wb3J0ICdzd2lwZXIvY3NzL2VmZmVjdC1mYWRlJ1xuaW1wb3J0IHsgc2xpZGVzLCBzd2lwZXJQcm9wcyB9IGZyb20gJy4vZGF0YSdcbmltcG9ydCBMb2dvcyBmcm9tICcuLi8uLi9tb2xlY3VsZXMvTG9nb3MvTG9nb3MnXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi4vLi4vYXRvbXMvVGl0bGUvVGl0bGUnXG5cbmNvbnN0IExvZ29zU2xpZGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmhlcm99PlxuICAgICAgICA8VGl0bGUgdGV4dD17c2xpZGVzLnRleHR9Lz5cbiAgICAgIDxTd2lwZXIgey4uLnN3aXBlclByb3BzfSBtb2R1bGVzPXtbQXV0b3BsYXksIEVmZmVjdEZhZGUsIFBhZ2luYXRpb25dfT5cbiAgICAgICAge3NsaWRlcy5tYXAoKHsgaWQsIHRleHQgfSkgPT4gKFxuICAgICAgICAgIDxTd2lwZXJTbGlkZSBrZXk9e2lkfT5cbiAgICAgICAgICAgIDxMb2dvcyBpbWFnZVVybD17YC9hc3NldHMvaW1nL2hlcm8vYmcke2lkfS5qcGdgfSAvPlxuICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XG4gICAgICAgICkpfVxuICAgICAgPC9Td2lwZXI+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ29zU2xpZGVyIl0sIm5hbWVzIjpbInN0eWxlcyIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwiQXV0b3BsYXkiLCJFZmZlY3RGYWRlIiwiUGFnaW5hdGlvbiIsInNsaWRlcyIsInN3aXBlclByb3BzIiwiTG9nb3MiLCJUaXRsZSIsIkxvZ29zU2xpZGVyIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImhlcm8iLCJ0ZXh0IiwibW9kdWxlcyIsIm1hcCIsImlkIiwiaW1hZ2VVcmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/organisms/LogosSlider/LogosSlider.jsx\n");

/***/ })

});