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

/***/ "./components/atoms/Video/Video.jsx":
/*!******************************************!*\
  !*** ./components/atoms/Video/Video.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Video = function() {\n    _s();\n    var videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var videoElement = videoRef.current;\n        var playVideo = function() {\n            if (videoElement.paused) {\n                videoElement.play();\n            }\n        };\n        // Iniciar el video cuando el componente se monta\n        playVideo();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n            ref: videoRef,\n            autoPlay: true,\n            loop: true,\n            muted: true,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                    src: \"/assets/video/video-hero.mp4\",\n                    type: \"video/mp4\"\n                }, void 0, false, {\n                    fileName: \"/Users/emanuelacunagimenez/Desktop/rrh-matanegra/components/atoms/Video/Video.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 7\n                }, _this),\n                \"Tu navegador no soporta el elemento de video.\"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/emanuelacunagimenez/Desktop/rrh-matanegra/components/atoms/Video/Video.jsx\",\n            lineNumber: 21,\n            columnNumber: 10\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/emanuelacunagimenez/Desktop/rrh-matanegra/components/atoms/Video/Video.jsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, _this));\n};\n_s(Video, \"PdMsmLAy5JKU3vCrhAlqGYQfKuA=\");\n_c = Video;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Video);\nvar _c;\n$RefreshReg$(_c, \"Video\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2F0b21zL1ZpZGVvL1ZpZGVvLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0Q7OztBQUVoRCxHQUFLLENBQUNHLEtBQUssR0FBRyxRQUNkLEdBRG9CLENBQUM7O0lBQ25CLEdBQUssQ0FBQ0MsUUFBUSxHQUFHRiw2Q0FBTSxDQUFDLElBQUk7SUFFNUJELGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2YsR0FBSyxDQUFDSSxZQUFZLEdBQUdELFFBQVEsQ0FBQ0UsT0FBTztRQUVyQyxHQUFLLENBQUNDLFNBQVMsR0FBRyxRQUN0QixHQUQ0QixDQUFDO1lBQ3ZCLEVBQUUsRUFBRUYsWUFBWSxDQUFDRyxNQUFNLEVBQUUsQ0FBQztnQkFDeEJILFlBQVksQ0FBQ0ksSUFBSTtZQUNuQixDQUFDO1FBQ0gsQ0FBQztRQUVELEVBQWlEO1FBQ2pERixTQUFTO0lBQ1gsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLE1BQU0sNkVBQ0hHLENBQUc7OEZBQ0VDLENBQUs7WUFBQ0MsR0FBRyxFQUFFUixRQUFRO1lBQUVTLFFBQVE7WUFBQ0MsSUFBSTtZQUFDQyxLQUFLOzs0RkFDM0NDLENBQU07b0JBQUNDLEdBQUcsRUFBQyxDQUE4QjtvQkFBQ0MsSUFBSSxFQUFDLENBQVc7Ozs7OztnQkFBRyxDQUU5RDs7Ozs7Ozs7Ozs7O0FBR04sQ0FBQztHQXhCS2YsS0FBSztLQUFMQSxLQUFLO0FBMEJYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy9WaWRlby9WaWRlby5qc3g/NWEyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFZpZGVvID0gKCkgPT4ge1xuICBjb25zdCB2aWRlb1JlZiA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHZpZGVvRWxlbWVudCA9IHZpZGVvUmVmLmN1cnJlbnQ7XG5cbiAgICBjb25zdCBwbGF5VmlkZW8gPSAoKSA9PiB7XG4gICAgICBpZiAodmlkZW9FbGVtZW50LnBhdXNlZCkge1xuICAgICAgICB2aWRlb0VsZW1lbnQucGxheSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBJbmljaWFyIGVsIHZpZGVvIGN1YW5kbyBlbCBjb21wb25lbnRlIHNlIG1vbnRhXG4gICAgcGxheVZpZGVvKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgICA8dmlkZW8gcmVmPXt2aWRlb1JlZn0gYXV0b1BsYXkgbG9vcCBtdXRlZD5cbiAgICAgIDxzb3VyY2Ugc3JjPVwiL2Fzc2V0cy92aWRlby92aWRlby1oZXJvLm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIiAvPlxuICAgICAgICBUdSBuYXZlZ2Fkb3Igbm8gc29wb3J0YSBlbCBlbGVtZW50byBkZSB2aWRlby5cbiAgICAgIDwvdmlkZW8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBWaWRlbzsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJWaWRlbyIsInZpZGVvUmVmIiwidmlkZW9FbGVtZW50IiwiY3VycmVudCIsInBsYXlWaWRlbyIsInBhdXNlZCIsInBsYXkiLCJkaXYiLCJ2aWRlbyIsInJlZiIsImF1dG9QbGF5IiwibG9vcCIsIm11dGVkIiwic291cmNlIiwic3JjIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/atoms/Video/Video.jsx\n");

/***/ })

});