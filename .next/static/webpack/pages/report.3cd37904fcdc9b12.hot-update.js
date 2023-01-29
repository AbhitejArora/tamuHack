"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/report",{

/***/ "./pages/report.js":
/*!*************************!*\
  !*** ./pages/report.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Report; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chart.js/auto */ \"./node_modules/chart.js/auto/auto.js\");\n\n\n\n\n\n\n\n\nconst doughData = {\n    backgroundColor: [\n        \"rgb(2,88,255)\",\n        \"rgb(249,151,0)\",\n        \"rgb(255,199,0)\",\n        \"rgb(32,214,152)\"\n    ],\n    labels: [\n        \"Medial Error\",\n        \"Incompetence\",\n        \"Fatigue\",\n        \"Medicial Error\"\n    ],\n    datasets: [\n        {\n            label: \"My first Dataset\",\n            data: [\n                3,\n                7,\n                2,\n                4\n            ],\n            backgroundColor: [\n                \"rgb(2,88,255)\",\n                \"rgb(249,151,0)\",\n                \"rgb(255,199,0)\",\n                \"rgb(32,214,152)\"\n            ],\n            hoverOffset: 1\n        }\n    ]\n};\nconst doughOptions = {\n    elements: {\n        arc: {\n            weight: 0.05,\n            borderWidth: 1\n        }\n    },\n    cutout: 100\n};\nconst data = {\n    labels: [\n        \"5 mins\",\n        \"10 mins\",\n        \"20 mins\",\n        \"25 mins\"\n    ],\n    datasets: [\n        {\n            data: [\n                3,\n                5,\n                6,\n                7\n            ]\n        }\n    ]\n};\nconst options = {\n    plugins: {\n        legend: {\n            display: false\n        }\n    },\n    elements: {\n        line: {\n            tension: 0,\n            borderWidth: 2,\n            pby: 50,\n            borderColor: \"rgba(47,97,68,1)\",\n            fill: \"start\",\n            backgroundColor: \"rgba(47,97,68,0.3)\"\n        },\n        point: {\n            radius: 0,\n            hitRadius: 0\n        }\n    },\n    scales: {\n        xAxis: {\n            display: false\n        },\n        yAxis: {\n            display: false\n        }\n    }\n};\nfunction Report() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Report\"\n                }, void 0, false, {\n                    fileName: \"/Users/apple/Desktop/try/tamuHack/pages/report.js\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/apple/Desktop/try/tamuHack/pages/report.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"images/smalll.jpg\",\n                \"content-center\": true\n            }, void 0, false, {\n                fileName: \"/Users/apple/Desktop/try/tamuHack/pages/report.js\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                class: \"text-[#008CA4] text-4xl text-left\",\n                children: \"Analytics\"\n            }, void 0, false, {\n                fileName: \"/Users/apple/Desktop/try/tamuHack/pages/report.js\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \" grid w-xl grid-cols-3 gap-2 mt-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \" max-w-sm rounded overflow-hidden shadow-md mb-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"m-1\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"font-bold text-xl m-2 \",\n                                    children: \"Total time spent on last operation\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/apple/Desktop/try/tamuHack/pages/report.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    class: \"text-gray-700 text-base m-2\",\n                                    children: \" 43 minutes \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/apple/Desktop/try/tamuHack/pages/report.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/apple/Desktop/try/tamuHack/pages/report.js\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/apple/Desktop/try/tamuHack/pages/report.js\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \" max-w-sm rounded overflow-hidden shadow-md mb-10\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"font-bold text-xl m-2\",\n                                children: \"Possible fatigue errors\"\n                            }, void 0, false, {\n                                fileName: \"/Users/apple/Desktop/try/tamuHack/pages/report.js\",\n                                lineNumber: 102,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                class: \"text-gray-700 text-base m-2\",\n                                children: \" 5 \"\n                            }, void 0, false, {\n                                fileName: \"/Users/apple/Desktop/try/tamuHack/pages/report.js\",\n                                lineNumber: 103,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/apple/Desktop/try/tamuHack/pages/report.js\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \" max-w-sm rounded overflow-hidden shadow-md mb-10\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"font-bold text-xl m-2\",\n                                children: \"Possible equipment/human error\"\n                            }, void 0, false, {\n                                fileName: \"/Users/apple/Desktop/try/tamuHack/pages/report.js\",\n                                lineNumber: 106,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                class: \"text-gray-700 text-base m-2\",\n                                children: \" 5 \"\n                            }, void 0, false, {\n                                fileName: \"/Users/apple/Desktop/try/tamuHack/pages/report.js\",\n                                lineNumber: 107,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/apple/Desktop/try/tamuHack/pages/report.js\",\n                        lineNumber: 105,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/apple/Desktop/try/tamuHack/pages/report.js\",\n                lineNumber: 92,\n                columnNumber: 6\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \" flex-box m-10 text-base grid w-full max-w-screen-xl d grid-cols-1 gap-5 px-2 md:grid-cols-2 xl:px-3 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"item\",\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__.Line, {\n                                data: data,\n                                width: 100,\n                                height: 40,\n                                options: options\n                            }, void 0, false, {\n                                fileName: \"/Users/apple/Desktop/try/tamuHack/pages/report.js\",\n                                lineNumber: 111,\n                                columnNumber: 30\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/apple/Desktop/try/tamuHack/pages/report.js\",\n                        lineNumber: 111,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"item\",\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__.Doughnut, {\n                                data: doughData,\n                                width: 10,\n                                height: 10,\n                                options: doughOptions\n                            }, void 0, false, {\n                                fileName: \"/Users/apple/Desktop/try/tamuHack/pages/report.js\",\n                                lineNumber: 113,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/apple/Desktop/try/tamuHack/pages/report.js\",\n                        lineNumber: 113,\n                        columnNumber: 6\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/apple/Desktop/try/tamuHack/pages/report.js\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/apple/Desktop/try/tamuHack/pages/report.js\",\n        lineNumber: 84,\n        columnNumber: 5\n    }, this);\n}\n_c = Report;\nvar _c;\n$RefreshReg$(_c, \"Report\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZXBvcnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNBO0FBQ0k7QUFDUztBQUM0QjtBQUNwQztBQUNhO0FBRS9DLE1BQU1XLFlBQVk7SUFDaEJDLGlCQUFnQjtRQUNkO1FBQ0E7UUFDQTtRQUNBO0tBQ0Q7SUFDREMsUUFBUTtRQUFDO1FBQWdCO1FBQWdCO1FBQVc7S0FBaUI7SUFDckVDLFVBQVU7UUFDUjtZQUNFQyxPQUFPO1lBQ1BDLE1BQU07Z0JBQUM7Z0JBQUc7Z0JBQUc7Z0JBQUc7YUFBRTtZQUNsQkosaUJBQWlCO2dCQUNmO2dCQUNKO2dCQUNBO2dCQUNBO2FBQ0c7WUFDREssYUFBYTtRQUNmO0tBQ0Q7QUFDRDtBQUVBLE1BQU1DLGVBQWU7SUFDbkJDLFVBQVU7UUFDUkMsS0FBSztZQUNIQyxRQUFRO1lBQ1JDLGFBQWE7UUFDZjtJQUNGO0lBQ0FDLFFBQVE7QUFDVjtBQUNGLE1BQU1QLE9BQU87SUFDWEgsUUFBUTtRQUFDO1FBQVU7UUFBVztRQUFXO0tBQVU7SUFDbkRDLFVBQVU7UUFDUjtZQUNFRSxNQUFNO2dCQUFDO2dCQUFHO2dCQUFHO2dCQUFHO2FBQUU7UUFDcEI7S0FDRDtBQUNIO0FBR0EsTUFBTVEsVUFBVTtJQUNkQyxTQUFTO1FBQ1BDLFFBQVE7WUFDTkMsU0FBUyxLQUFLO1FBQ2hCO0lBQ0Y7SUFDQVIsVUFBVTtRQUNSUyxNQUFNO1lBQ0pDLFNBQVM7WUFDVFAsYUFBYTtZQUNiUSxLQUFLO1lBQ0xDLGFBQWE7WUFDYkMsTUFBTTtZQUNOcEIsaUJBQWlCO1FBQ25CO1FBQ0FxQixPQUFPO1lBQ0xDLFFBQVE7WUFDUkMsV0FBVztRQUNiO0lBQ0Y7SUFFQUMsUUFBUTtRQUNOQyxPQUFPO1lBQ0xWLFNBQVMsS0FBSztRQUNoQjtRQUNBVyxPQUFPO1lBQ0xYLFNBQVMsS0FBSztRQUNoQjtJQUNGO0FBQ0Y7QUFFZSxTQUFTWSxTQUFTO0lBQy9CLHFCQUNFLDhEQUFDcEMsMERBQU1BOzswQkFHTCw4REFBQ0Ysa0RBQUlBOzBCQUNILDRFQUFDdUM7OEJBQU07Ozs7Ozs7Ozs7OzBCQUVULDhEQUFDQztnQkFBSUMsS0FBTTtnQkFBb0JDLGdCQUFjOzs7Ozs7MEJBQzdDLDhEQUFDQztnQkFBRUMsT0FBTTswQkFBb0M7Ozs7OzswQkFDOUMsOERBQUNDO2dCQUFJRCxPQUFNOztrQ0FDUiw4REFBQ0M7d0JBQUlELE9BQU07a0NBQ1QsNEVBQUNDOzRCQUFJRCxPQUFNOzs4Q0FDUCw4REFBQ0M7b0NBQUlELE9BQU07OENBQXlCOzs7Ozs7OENBQ3BDLDhEQUFDRDtvQ0FBRUMsT0FBTTs4Q0FBOEI7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUs3Qyw4REFBQ0M7d0JBQUlELE9BQU07OzBDQUNMLDhEQUFDQztnQ0FBSUQsT0FBTTswQ0FBd0I7Ozs7OzswQ0FDbkMsOERBQUNEO2dDQUFFQyxPQUFNOzBDQUE4Qjs7Ozs7Ozs7Ozs7O2tDQUUzQyw4REFBQ0M7d0JBQUlELE9BQU07OzBDQUNQLDhEQUFDQztnQ0FBSUQsT0FBTTswQ0FBd0I7Ozs7OzswQ0FDbkMsOERBQUNEO2dDQUFFQyxPQUFNOzBDQUE4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUcvQyw4REFBQ0M7Z0JBQUlELE9BQU07O2tDQUNYLDhEQUFDQzt3QkFBSUMsV0FBVTs7NEJBQU87MENBQUMsOERBQUMxQyxpREFBSUE7Z0NBQUNXLE1BQU1BO2dDQUFNZ0MsT0FBTztnQ0FBS0MsUUFBUTtnQ0FBSXpCLFNBQVNBOzs7Ozs7Ozs7Ozs7a0NBRTNFLDhEQUFDc0I7d0JBQUlDLFdBQVU7OzRCQUFPOzBDQUFDLDhEQUFDdkMscURBQVFBO2dDQUFDUSxNQUFPTDtnQ0FBV3FDLE9BQU87Z0NBQUlDLFFBQVM7Z0NBQUl6QixTQUFTTjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3pGLENBQUM7S0F0Q3VCcUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVwb3J0LmpzP2VmYWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgU2NyaXB0IGZyb20gJ25leHQvc2NyaXB0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnO1xuaW1wb3J0IHsgQmFyLCBMaW5lLCBTY2F0dGVyLCBCdWJibGUsIERvdWdobnV0IH0gZnJvbSBcInJlYWN0LWNoYXJ0anMtMlwiXG5pbXBvcnQgQ2hhcnQgZnJvbSAnY2hhcnQuanMvYXV0byc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBkb3VnaERhdGEgPSB7XG4gIGJhY2tncm91bmRDb2xvcjpbXG4gICAgXCJyZ2IoMiw4OCwyNTUpXCIsXG4gICAgXCJyZ2IoMjQ5LDE1MSwwKVwiLFxuICAgIFwicmdiKDI1NSwxOTksMClcIixcbiAgICBcInJnYigzMiwyMTQsMTUyKVwiLFxuICBdLFxuICBsYWJlbHM6IFtcIk1lZGlhbCBFcnJvclwiLCBcIkluY29tcGV0ZW5jZVwiLCBcIkZhdGlndWVcIiwgXCJNZWRpY2lhbCBFcnJvclwiXSxcbiAgZGF0YXNldHM6IFtcbiAgICB7XG4gICAgICBsYWJlbDogXCJNeSBmaXJzdCBEYXRhc2V0XCIsXG4gICAgICBkYXRhOiBbMywgNywgMiwgNF0sXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcbiAgICAgICAgXCJyZ2IoMiw4OCwyNTUpXCIsXG4gICAgXCJyZ2IoMjQ5LDE1MSwwKVwiLFxuICAgIFwicmdiKDI1NSwxOTksMClcIixcbiAgICBcInJnYigzMiwyMTQsMTUyKVwiLFxuICAgICAgXSxcbiAgICAgIGhvdmVyT2Zmc2V0OiAxLFxuICAgIH0sXG4gIF0sXG4gIH07XG4gIFxuICBjb25zdCBkb3VnaE9wdGlvbnMgPSB7XG4gICAgZWxlbWVudHM6IHtcbiAgICAgIGFyYzoge1xuICAgICAgICB3ZWlnaHQ6IDAuMDUsXG4gICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGN1dG91dDogMTAwLFxuICB9O1xuY29uc3QgZGF0YSA9IHtcbiAgbGFiZWxzOiBbXCI1IG1pbnNcIiwgXCIxMCBtaW5zXCIsIFwiMjAgbWluc1wiLCBcIjI1IG1pbnNcIl0sXG4gIGRhdGFzZXRzOiBbXG4gICAge1xuICAgICAgZGF0YTogWzMsIDUsIDYsIDddLFxuICAgIH0sXG4gIF0sXG59O1xuXG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIHBsdWdpbnM6IHtcbiAgICBsZWdlbmQ6IHtcbiAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgIH0sXG4gIH0sXG4gIGVsZW1lbnRzOiB7XG4gICAgbGluZToge1xuICAgICAgdGVuc2lvbjogMCxcbiAgICAgIGJvcmRlcldpZHRoOiAyLFxuICAgICAgcGJ5OiA1MCxcbiAgICAgIGJvcmRlckNvbG9yOiBcInJnYmEoNDcsOTcsNjgsMSlcIixcbiAgICAgIGZpbGw6IFwic3RhcnRcIixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDQ3LDk3LDY4LDAuMylcIixcbiAgICB9LFxuICAgIHBvaW50OiB7XG4gICAgICByYWRpdXM6IDAsXG4gICAgICBoaXRSYWRpdXM6IDAsXG4gICAgfSxcbiAgfSxcblxuICBzY2FsZXM6IHtcbiAgICB4QXhpczoge1xuICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgfSxcbiAgICB5QXhpczoge1xuICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlcG9ydCgpIHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuXG5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UmVwb3J0PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxpbWcgc3JjID0gXCJpbWFnZXMvc21hbGxsLmpwZ1wiIGNvbnRlbnQtY2VudGVyIC8+XG4gICAgICA8cCBjbGFzcz1cInRleHQtWyMwMDhDQTRdIHRleHQtNHhsIHRleHQtbGVmdFwiPkFuYWx5dGljczwvcD5cbiAgICAgPGRpdiBjbGFzcz1cIiBncmlkIHcteGwgIGdyaWQtY29scy0zIGdhcC0yIG10LTVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIiBtYXgtdy1zbSByb3VuZGVkIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctbWQgbWItMTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibS0xXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250LWJvbGQgdGV4dC14bCBtLTIgXCI+VG90YWwgdGltZSBzcGVudCBvbiBsYXN0IG9wZXJhdGlvbjwvZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtZ3JheS03MDAgdGV4dC1iYXNlIG0tMlwiPiA0MyBtaW51dGVzIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIiBtYXgtdy1zbSByb3VuZGVkIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctbWQgbWItMTBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnQtYm9sZCB0ZXh0LXhsIG0tMlwiPlBvc3NpYmxlIGZhdGlndWUgZXJyb3JzPC9kaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1ncmF5LTcwMCB0ZXh0LWJhc2UgbS0yXCI+IDUgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCIgbWF4LXctc20gcm91bmRlZCBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LW1kIG1iLTEwXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250LWJvbGQgdGV4dC14bCBtLTJcIj5Qb3NzaWJsZSBlcXVpcG1lbnQvaHVtYW4gZXJyb3I8L2Rpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWdyYXktNzAwIHRleHQtYmFzZSBtLTJcIj4gNSA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCIgZmxleC1ib3ggbS0xMCB0ZXh0LWJhc2UgZ3JpZCB3LWZ1bGwgbWF4LXctc2NyZWVuLXhsIGQgZ3JpZC1jb2xzLTEgZ2FwLTUgcHgtMiBtZDpncmlkLWNvbHMtMiB4bDpweC0zIFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2l0ZW0nPiA8TGluZSBkYXRhPXtkYXRhfSB3aWR0aD17MTAwfSBoZWlnaHQ9ezQwfSBvcHRpb25zPXtvcHRpb25zfSAvPlxuICAgICA8L2Rpdj5cbiAgICAgPGRpdiBjbGFzc05hbWU9J2l0ZW0nPiA8RG91Z2hudXQgZGF0YSA9e2RvdWdoRGF0YX0gd2lkdGg9ezEwfSBoZWlnaHQ9IHsxMH0gb3B0aW9ucz17ZG91Z2hPcHRpb25zfSAvPjwvZGl2PlxuXG4gICAgICAgICAgICBcbiAgICAgIDwvZGl2PlxuXG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTGluayIsIkhlYWQiLCJTY3JpcHQiLCJMYXlvdXQiLCJCYXIiLCJMaW5lIiwiU2NhdHRlciIsIkJ1YmJsZSIsIkRvdWdobnV0IiwiQ2hhcnQiLCJzdHlsZXMiLCJkb3VnaERhdGEiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImxhYmVsIiwiZGF0YSIsImhvdmVyT2Zmc2V0IiwiZG91Z2hPcHRpb25zIiwiZWxlbWVudHMiLCJhcmMiLCJ3ZWlnaHQiLCJib3JkZXJXaWR0aCIsImN1dG91dCIsIm9wdGlvbnMiLCJwbHVnaW5zIiwibGVnZW5kIiwiZGlzcGxheSIsImxpbmUiLCJ0ZW5zaW9uIiwicGJ5IiwiYm9yZGVyQ29sb3IiLCJmaWxsIiwicG9pbnQiLCJyYWRpdXMiLCJoaXRSYWRpdXMiLCJzY2FsZXMiLCJ4QXhpcyIsInlBeGlzIiwiUmVwb3J0IiwidGl0bGUiLCJpbWciLCJzcmMiLCJjb250ZW50LWNlbnRlciIsInAiLCJjbGFzcyIsImRpdiIsImNsYXNzTmFtZSIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/report.js\n"));

/***/ })

});