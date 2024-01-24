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

/***/ "./components/organisms/ServiceItemGrid/ServiceItemGrid.jsx":
/*!******************************************************************!*\
  !*** ./components/organisms/ServiceItemGrid/ServiceItemGrid.jsx ***!
  \******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _molecules_ServiceItem_ServiceItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../molecules/ServiceItem/ServiceItem */ \"./components/molecules/ServiceItem/ServiceItem.jsx\");\n/* harmony import */ var _ServiceItemGrid_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ServiceItemGrid.module.scss */ \"./components/organisms/ServiceItemGrid/ServiceItemGrid.module.scss\");\n/* harmony import */ var _ServiceItemGrid_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ServiceItemGrid_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ \"./components/organisms/ServiceItemGrid/data.js\");\n/* harmony import */ var _atoms_Container_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../atoms/Container/Container */ \"./components/atoms/Container/Container.jsx\");\n/* harmony import */ var _atoms_Title_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../atoms/Title/Title */ \"./components/atoms/Title/Title.jsx\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/index.mjs\");\n\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ServiceItemGrid = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__.useInView)({\n        threshold: 0\n    }), refAnimation = ref.ref, inView = ref.inView;\n    var classAnimPlay = inView && (_ServiceItemGrid_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"anim-play\"]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_ServiceItemGrid_module_scss__WEBPACK_IMPORTED_MODULE_7___default().service),\n        ref: refAnimation,\n        id: \"servicio\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_Container_Container__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_Title_Title__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    color: \"white\",\n                    className: (_ServiceItemGrid_module_scss__WEBPACK_IMPORTED_MODULE_7___default().title),\n                    children: \"Contamos con la mejor Calidad y servicio\"\n                }, void 0, false, {\n                    fileName: \"/Users/emanuelacunagimenez/Desktop/rrh-matanegra/components/organisms/ServiceItemGrid/ServiceItemGrid.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_ServiceItemGrid_module_scss__WEBPACK_IMPORTED_MODULE_7___default().gridItems),\n                    children: _data__WEBPACK_IMPORTED_MODULE_3__.dataItem.map(function(card, index) {\n                        var classAnimDelay = (_ServiceItemGrid_module_scss__WEBPACK_IMPORTED_MODULE_7___default())[\"anim-delay-\".concat(+index + 1)];\n                        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_molecules_ServiceItem_ServiceItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _objectSpread({\n                            className: \"\".concat((_ServiceItemGrid_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"anim-fade-in-up\"]), \" \").concat(classAnimDelay, \" \").concat(classAnimPlay)\n                        }, card, {\n                            imageUrl: \"/assets/img/services\".concat(card.id, \".png\")\n                        }), index, false, {\n                            fileName: \"/Users/emanuelacunagimenez/Desktop/rrh-matanegra/components/organisms/ServiceItemGrid/ServiceItemGrid.jsx\",\n                            lineNumber: 26,\n                            columnNumber: 15\n                        }, _this1));\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/emanuelacunagimenez/Desktop/rrh-matanegra/components/organisms/ServiceItemGrid/ServiceItemGrid.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/emanuelacunagimenez/Desktop/rrh-matanegra/components/organisms/ServiceItemGrid/ServiceItemGrid.jsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/emanuelacunagimenez/Desktop/rrh-matanegra/components/organisms/ServiceItemGrid/ServiceItemGrid.jsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, _this));\n};\n_s(ServiceItemGrid, \"k/XFv7iB5Eo7Nii7ZwZMpKmCOOU=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__.useInView\n    ];\n});\n_c = ServiceItemGrid;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ServiceItemGrid);\nvar _c;\n$RefreshReg$(_c, \"ServiceItemGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL29yZ2FuaXNtcy9TZXJ2aWNlSXRlbUdyaWQvU2VydmljZUl0ZW1HcmlkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ3dDO0FBQ2Y7QUFDakI7QUFDc0I7QUFDWjtBQUNZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZELEdBQUssQ0FBQ08sZUFBZSxHQUFHLFFBQ3hCLEdBRDhCLENBQUM7OztJQUM3QixHQUFLLENBQWlDRCxHQUVwQyxHQUZvQ0Esc0VBQVMsQ0FBQyxDQUFDO1FBQy9DRSxTQUFTLEVBQUUsQ0FBQztJQUNkLENBQUMsR0FGWUMsWUFBWSxHQUFhSCxHQUVwQyxDQUZNSSxHQUFHLEVBQWdCQyxNQUFNLEdBQUtMLEdBRXBDLENBRnlCSyxNQUFNO0lBSWpDLEdBQUssQ0FBQ0MsYUFBYSxHQUFHRCxNQUFNLElBQUlULGtGQUFrQjtJQUVsRCxNQUFNLDZFQUNIVyxDQUFPO1FBQUNDLFNBQVMsRUFBRVosNkVBQWM7UUFBRVEsR0FBRyxFQUFFRCxZQUFZO1FBQUVPLEVBQUUsRUFBQyxDQUFVOzhGQUNqRVosa0VBQVM7OzRGQUNQQywwREFBSztvQkFBQ1ksS0FBSyxFQUFDLENBQU87b0JBQUNILFNBQVMsRUFBRVosMkVBQVk7OEJBQUUsQ0FFOUM7Ozs7Ozs0RkFDQ2lCLENBQUc7b0JBQUNMLFNBQVMsRUFBRVosK0VBQWdCOzhCQUM3QkMsK0NBQVksQ0FBQyxRQUFRLENBQVBtQixJQUFJLEVBQUVDLEtBQUssRUFBSyxDQUFDO3dCQUM5QixHQUFLLENBQUNDLGNBQWMsR0FBR3RCLHFFQUFNLENBQUUsQ0FBVyxhQUFhLFFBQVZxQixLQUFLLEdBQUcsQ0FBQzt3QkFDdEQsTUFBTSw2RUFDSHRCLDBFQUFXOzRCQUNWYSxTQUFTLEVBQUcsR0FBK0JVLE1BQWMsQ0FBM0N0Qix3RkFBd0IsRUFBRSxDQUFDLElBQW9CVSxNQUFhLENBQS9CWSxjQUFjLEVBQUMsQ0FBQyxJQUFnQixPQUFkWixhQUFhOzJCQUV0RVUsSUFBSTs0QkFDUkcsUUFBUSxFQUFHLENBQW9CLHNCQUFVLE1BQUksQ0FBWkgsSUFBSSxDQUFDTixFQUFFLEVBQUMsQ0FBSTs0QkFGeENPLEtBQUs7Ozs7O29CQUtoQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtYLENBQUM7R0E3QktoQixlQUFlOztRQUNtQkQsa0VBQVM7OztLQUQzQ0MsZUFBZTtBQStCckIsK0RBQWVBLGVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vcmdhbmlzbXMvU2VydmljZUl0ZW1HcmlkL1NlcnZpY2VJdGVtR3JpZC5qc3g/NGU2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgU2VydmljZUl0ZW0gZnJvbSAnLi4vLi4vbW9sZWN1bGVzL1NlcnZpY2VJdGVtL1NlcnZpY2VJdGVtJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NlcnZpY2VJdGVtR3JpZC5tb2R1bGUuc2NzcydcbmltcG9ydCB7IGRhdGFJdGVtIH0gZnJvbSAnLi9kYXRhJ1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi8uLi9hdG9tcy9Db250YWluZXIvQ29udGFpbmVyJ1xuaW1wb3J0IFRpdGxlIGZyb20gJy4uLy4uL2F0b21zL1RpdGxlL1RpdGxlJ1xuaW1wb3J0IHsgdXNlSW5WaWV3IH0gZnJvbSAncmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyJ1xuXG5jb25zdCBTZXJ2aWNlSXRlbUdyaWQgPSAoKSA9PiB7XG4gIGNvbnN0IHsgcmVmOiByZWZBbmltYXRpb24sIGluVmlldyB9ID0gdXNlSW5WaWV3KHtcbiAgICB0aHJlc2hvbGQ6IDAsXG4gIH0pXG5cbiAgY29uc3QgY2xhc3NBbmltUGxheSA9IGluVmlldyAmJiBzdHlsZXNbJ2FuaW0tcGxheSddXG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5zZXJ2aWNlfSByZWY9e3JlZkFuaW1hdGlvbn0gaWQ9XCJzZXJ2aWNpb1wiPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFRpdGxlIGNvbG9yPVwid2hpdGVcIiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgQ29udGFtb3MgY29uIGxhIG1lam9yIENhbGlkYWQgeSBzZXJ2aWNpb1xuICAgICAgICA8L1RpdGxlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRJdGVtc30+XG4gICAgICAgICAge2RhdGFJdGVtLm1hcCgoY2FyZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzQW5pbURlbGF5ID0gc3R5bGVzW2BhbmltLWRlbGF5LSR7K2luZGV4ICsgMX1gXVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFNlcnZpY2VJdGVtXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbJ2FuaW0tZmFkZS1pbi11cCddfSAke2NsYXNzQW5pbURlbGF5fSAke2NsYXNzQW5pbVBsYXl9YH1cbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIHsuLi5jYXJkfVxuICAgICAgICAgICAgICAgIGltYWdlVXJsPXtgL2Fzc2V0cy9pbWcvc2VydmljZXMke2NhcmQuaWR9LnBuZ2B9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VJdGVtR3JpZFxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiU2VydmljZUl0ZW0iLCJzdHlsZXMiLCJkYXRhSXRlbSIsIkNvbnRhaW5lciIsIlRpdGxlIiwidXNlSW5WaWV3IiwiU2VydmljZUl0ZW1HcmlkIiwidGhyZXNob2xkIiwicmVmQW5pbWF0aW9uIiwicmVmIiwiaW5WaWV3IiwiY2xhc3NBbmltUGxheSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJzZXJ2aWNlIiwiaWQiLCJjb2xvciIsInRpdGxlIiwiZGl2IiwiZ3JpZEl0ZW1zIiwibWFwIiwiY2FyZCIsImluZGV4IiwiY2xhc3NBbmltRGVsYXkiLCJpbWFnZVVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/organisms/ServiceItemGrid/ServiceItemGrid.jsx\n");

/***/ })

});