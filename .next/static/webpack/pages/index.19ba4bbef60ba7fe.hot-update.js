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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined;\nvar Video = function() {\n    // const videoRef = useRef(null);\n    // useEffect(() => {\n    //   const videoElement = videoRef.current;\n    //   const playVideo = () => {\n    //     if (videoElement.paused) {\n    //       videoElement.play();\n    //     }\n    //   };\n    //   const restartVideo = () => {\n    //     videoElement.currentTime = 0;\n    //   };\n    //   // Agregar eventos al cargar el componente\n    //   videoElement.addEventListener('ended', restartVideo);\n    //   // Iniciar el video cuando el componente se monta\n    //   playVideo();\n    //   // Limpiar los eventos cuando el componente se desmonta\n    //   return () => {\n    //     videoElement.removeEventListener('ended', restartVideo);\n    //   };\n    // }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n            width: \"640\",\n            height: \"360\",\n            controls: true,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                    src: \"/assets/video/video-hero.mp4\",\n                    type: \"video/mp4\"\n                }, void 0, false, {\n                    fileName: \"/Users/emanuelacunagimenez/Desktop/rrh-matanegra/components/atoms/Video/Video.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 7\n                }, _this),\n                \"Tu navegador no soporta el elemento de video.\"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/emanuelacunagimenez/Desktop/rrh-matanegra/components/atoms/Video/Video.jsx\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/emanuelacunagimenez/Desktop/rrh-matanegra/components/atoms/Video/Video.jsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, _this));\n};\n_c = Video;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Video);\nvar _c;\n$RefreshReg$(_c, \"Video\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2F0b21zL1ZpZGVvL1ZpZGVvLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0Q7O0FBRWhELEdBQUssQ0FBQ0csS0FBSyxHQUFHLFFBQ2QsR0FEb0IsQ0FBQztJQUNuQixFQUFpQztJQUVqQyxFQUFvQjtJQUNwQixFQUEyQztJQUUzQyxFQUE4QjtJQUM5QixFQUFpQztJQUNqQyxFQUE2QjtJQUM3QixFQUFRO0lBQ1IsRUFBTztJQUVQLEVBQWlDO0lBQ2pDLEVBQW9DO0lBQ3BDLEVBQU87SUFFUCxFQUErQztJQUMvQyxFQUEwRDtJQUUxRCxFQUFzRDtJQUN0RCxFQUFpQjtJQUVqQixFQUE0RDtJQUM1RCxFQUFtQjtJQUNuQixFQUErRDtJQUMvRCxFQUFPO0lBQ1AsRUFBVTtJQUVWLE1BQU0sNkVBQ0hDLENBQUc7OEZBQ0RDLENBQUs7WUFBQ0MsS0FBSyxFQUFDLENBQUs7WUFBQ0MsTUFBTSxFQUFDLENBQUs7WUFBQ0MsUUFBUTs7NEZBQ3ZDQyxDQUFNO29CQUFDQyxHQUFHLEVBQUMsQ0FBOEI7b0JBQUNDLElBQUksRUFBQyxDQUFXOzs7Ozs7Z0JBQUcsQ0FFOUQ7Ozs7Ozs7Ozs7OztBQUdOLENBQUM7S0FwQ0tSLEtBQUs7QUFzQ1gsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2F0b21zL1ZpZGVvL1ZpZGVvLmpzeD81YTJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgVmlkZW8gPSAoKSA9PiB7XG4gIC8vIGNvbnN0IHZpZGVvUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgY29uc3QgdmlkZW9FbGVtZW50ID0gdmlkZW9SZWYuY3VycmVudDtcblxuICAvLyAgIGNvbnN0IHBsYXlWaWRlbyA9ICgpID0+IHtcbiAgLy8gICAgIGlmICh2aWRlb0VsZW1lbnQucGF1c2VkKSB7XG4gIC8vICAgICAgIHZpZGVvRWxlbWVudC5wbGF5KCk7XG4gIC8vICAgICB9XG4gIC8vICAgfTtcblxuICAvLyAgIGNvbnN0IHJlc3RhcnRWaWRlbyA9ICgpID0+IHtcbiAgLy8gICAgIHZpZGVvRWxlbWVudC5jdXJyZW50VGltZSA9IDA7XG4gIC8vICAgfTtcblxuICAvLyAgIC8vIEFncmVnYXIgZXZlbnRvcyBhbCBjYXJnYXIgZWwgY29tcG9uZW50ZVxuICAvLyAgIHZpZGVvRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsIHJlc3RhcnRWaWRlbyk7XG5cbiAgLy8gICAvLyBJbmljaWFyIGVsIHZpZGVvIGN1YW5kbyBlbCBjb21wb25lbnRlIHNlIG1vbnRhXG4gIC8vICAgcGxheVZpZGVvKCk7XG5cbiAgLy8gICAvLyBMaW1waWFyIGxvcyBldmVudG9zIGN1YW5kbyBlbCBjb21wb25lbnRlIHNlIGRlc21vbnRhXG4gIC8vICAgcmV0dXJuICgpID0+IHtcbiAgLy8gICAgIHZpZGVvRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdlbmRlZCcsIHJlc3RhcnRWaWRlbyk7XG4gIC8vICAgfTtcbiAgLy8gfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDx2aWRlbyB3aWR0aD1cIjY0MFwiIGhlaWdodD1cIjM2MFwiIGNvbnRyb2xzPlxuICAgICAgPHNvdXJjZSBzcmM9XCIvYXNzZXRzL3ZpZGVvL3ZpZGVvLWhlcm8ubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiIC8+XG4gICAgICAgIFR1IG5hdmVnYWRvciBubyBzb3BvcnRhIGVsIGVsZW1lbnRvIGRlIHZpZGVvLlxuICAgICAgPC92aWRlbz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZpZGVvOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsIlZpZGVvIiwiZGl2IiwidmlkZW8iLCJ3aWR0aCIsImhlaWdodCIsImNvbnRyb2xzIiwic291cmNlIiwic3JjIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/atoms/Video/Video.jsx\n");

/***/ })

});