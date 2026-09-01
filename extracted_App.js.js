/***/ "./src/App.js"
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/App.css */ "./src/App.css");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4N6VE7H7.mjs");
/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sonner */ "./node_modules/sonner/dist/index.mjs");
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context/AppContext */ "./src/context/AppContext.jsx");
/* harmony import */ var _components_EmergencyMode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/EmergencyMode */ "./src/components/EmergencyMode.jsx");
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/AppLayout */ "./src/components/AppLayout.jsx");
/* harmony import */ var _pages_Landing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/Landing */ "./src/pages/Landing.jsx");
/* harmony import */ var _pages_Login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/Login */ "./src/pages/Login.jsx");
/* harmony import */ var _pages_Dashboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/Dashboard */ "./src/pages/Dashboard.jsx");
/* harmony import */ var _pages_LocationPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/LocationPage */ "./src/pages/LocationPage.jsx");
/* harmony import */ var _pages_Prediction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/Prediction */ "./src/pages/Prediction.jsx");
/* harmony import */ var _pages_Replay__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/Replay */ "./src/pages/Replay.jsx");
/* harmony import */ var _pages_Warnings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/Warnings */ "./src/pages/Warnings.jsx");
/* harmony import */ var _pages_Evacuation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/Evacuation */ "./src/pages/Evacuation.jsx");
/* harmony import */ var _pages_Sensors__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/Sensors */ "./src/pages/Sensors.jsx");
/* harmony import */ var _pages_DataHealth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/DataHealth */ "./src/pages/DataHealth.jsx");
/* harmony import */ var _pages_Analytics__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/Analytics */ "./src/pages/Analytics.jsx");
/* harmony import */ var _pages_Notifications__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/Notifications */ "./src/pages/Notifications.jsx");
/* harmony import */ var _pages_Admin__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/Admin */ "./src/pages/Admin.jsx");
/* harmony import */ var _pages_ReportHazard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/ReportHazard */ "./src/pages/ReportHazard.jsx");
/* harmony import */ var _pages_Architecture__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/Architecture */ "./src/pages/Architecture.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/app/frontend/src/App.js",
  _s = __webpack_require__.$Refresh$.signature();























const L = ({
  children
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(_components_AppLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
  "x-file-name": "App",
  "x-line-number": "24",
  "x-column": "28",
  "x-component": "AppLayout",
  "x-id": "App_24_28",
  "x-dynamic": "true",
  "x-source-type": "prop",
  "x-source-var": "children",
  "x-source-editable": "false",
  children: children
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 24,
  columnNumber: 29
}, undefined);
_c = L;
function App() {
  _s();
  const {
    emergency
  } = (0,_context_AppContext__WEBPACK_IMPORTED_MODULE_4__.useApp)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)("div", {
    className: "App",
    "x-file-name": "App",
    "x-line-number": "29",
    "x-column": "4",
    "x-component": "div",
    "x-id": "App_29_4",
    "x-dynamic": "false",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.BrowserRouter, {
      "x-file-name": "App",
      "x-line-number": "30",
      "x-column": "6",
      "x-component": "BrowserRouter",
      "x-id": "App_30_6",
      "x-dynamic": "true",
      "x-source-type": "computed",
      "x-source-editable": "false",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Routes, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
          path: "/",
          element: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(_pages_Landing__WEBPACK_IMPORTED_MODULE_7__["default"], {
            "x-file-name": "App",
            "x-line-number": "32",
            "x-column": "35",
            "x-component": "Landing",
            "x-id": "App_32_35",
            "x-dynamic": "true"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 36
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
          path: "/login",
          element: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(_pages_Login__WEBPACK_IMPORTED_MODULE_8__["default"], {
            "x-file-name": "App",
            "x-line-number": "33",
            "x-column": "40",
            "x-component": "Login",
            "x-id": "App_33_40",
            "x-dynamic": "true"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 41
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
          path: "/dashboard",
          element: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(L, {
            "x-file-name": "App",
            "x-line-number": "34",
            "x-column": "44",
            "x-component": "L",
            "x-id": "App_34_44",
            "x-dynamic": "false",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(_pages_Dashboard__WEBPACK_IMPORTED_MODULE_9__["default"], {
              "x-file-name": "App",
              "x-line-number": "34",
              "x-column": "47",
              "x-component": "Dashboard",
              "x-id": "App_34_47",
              "x-dynamic": "true"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 48
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 45
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
          path: "/location/:id",
          element: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(L, {
            "x-file-name": "App",
            "x-line-number": "35",
            "x-column": "47",
            "x-component": "L",
            "x-id": "App_35_47",
            "x-dynamic": "false",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(_pages_LocationPage__WEBPACK_IMPORTED_MODULE_10__["default"], {
              "x-file-name": "App",
              "x-line-number": "35",
              "x-column": "50",
              "x-component": "LocationPage",
              "x-id": "App_35_50",
              "x-dynamic": "true",
              "x-excluded": "true"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 51
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 48
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
          path: "/prediction",
          element: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(L, {
            "x-file-name": "App",
            "x-line-number": "36",
            "x-column": "45",
            "x-component": "L",
            "x-id": "App_36_45",
            "x-dynamic": "false",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(_pages_Prediction__WEBPACK_IMPORTED_MODULE_11__["default"], {
              "x-file-name": "App",
              "x-line-number": "36",
              "x-column": "48",
              "x-component": "Prediction",
              "x-id": "App_36_48",
              "x-dynamic": "true"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 49
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 46
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
          path: "/predict",
          element: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Navigate, {
            to: "/prediction",
            replace: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 43
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
          path: "/replay",
          element: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(L, {
            "x-file-name": "App",
            "x-line-number": "38",
            "x-column": "41",
            "x-component": "L",
            "x-id": "App_38_41",
            "x-dynamic": "false",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(_pages_Replay__WEBPACK_IMPORTED_MODULE_12__["default"], {
              "x-file-name": "App",
              "x-line-number": "38",
              "x-column": "44",
              "x-component": "Replay",
              "x-id": "App_38_44",
              "x-dynamic": "true",
              "x-excluded": "true"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 45
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 42
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
          path: "/warnings",
          element: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(L, {
            "x-file-name": "App",
            "x-line-number": "39",
            "x-column": "43",
            "x-component": "L",
            "x-id": "App_39_43",
            "x-dynamic": "false",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(_pages_Warnings__WEBPACK_IMPORTED_MODULE_13__["default"], {
              "x-file-name": "App",
              "x-line-number": "39",
              "x-column": "46",
              "x-component": "Warnings",
              "x-id": "App_39_46",
              "x-dynamic": "true"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 47
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 44
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
          path: "/evacuation",
          element: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(L, {
            "x-file-name": "App",
            "x-line-number": "40",
            "x-column": "45",
            "x-component": "L",
            "x-id": "App_40_45",
            "x-dynamic": "false",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(_pages_Evacuation__WEBPACK_IMPORTED_MODULE_14__["default"], {
              "x-file-name": "App",
              "x-line-number": "40",
              "x-column": "48",
              "x-component": "Evacuation",
              "x-id": "App_40_48",
              "x-dynamic": "true"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 49
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 46
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
          path: "/sensors",
          element: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(L, {
            "x-file-name": "App",
            "x-line-number": "41",
            "x-column": "42",
            "x-component": "L",
            "x-id": "App_41_42",
            "x-dynamic": "false",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(_pages_Sensors__WEBPACK_IMPORTED_MODULE_15__["default"], {
              "x-file-name": "App",
              "x-line-number": "41",
              "x-column": "45",
              "x-component": "Sensors",
              "x-id": "App_41_45",
              "x-dynamic": "true"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 46
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 43
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
          path: "/data-health",
          element: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(L, {
            "x-file-name": "App",
            "x-line-number": "42",
            "x-column": "46",
            "x-component": "L",
            "x-id": "App_42_46",
            "x-dynamic": "false",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(_pages_DataHealth__WEBPACK_IMPORTED_MODULE_16__["default"], {
              "x-file-name": "App",
              "x-line-number": "42",
              "x-column": "49",
              "x-component": "DataHealth",
              "x-id": "App_42_49",
              "x-dynamic": "true"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 50
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 47
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
          path: "/analytics",
          element: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(L, {
            "x-file-name": "App",
            "x-line-number": "43",
            "x-column": "44",
            "x-component": "L",
            "x-id": "App_43_44",
            "x-dynamic": "false",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(_pages_Analytics__WEBPACK_IMPORTED_MODULE_17__["default"], {
              "x-file-name": "App",
              "x-line-number": "43",
              "x-column": "47",
              "x-component": "Analytics",
              "x-id": "App_43_47",
              "x-dynamic": "true",
              "x-excluded": "true"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 48
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 45
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
          path: "/notifications",
          element: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(L, {
            "x-file-name": "App",
            "x-line-number": "44",
            "x-column": "48",
            "x-component": "L",
            "x-id": "App_44_48",
            "x-dynamic": "false",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(_pages_Notifications__WEBPACK_IMPORTED_MODULE_18__["default"], {
              "x-file-name": "App",
              "x-line-number": "44",
              "x-column": "51",
              "x-component": "Notifications",
              "x-id": "App_44_51",
              "x-dynamic": "true"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 52
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 49
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
          path: "/admin",
          element: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(L, {
            "x-file-name": "App",
            "x-line-number": "45",
            "x-column": "40",
            "x-component": "L",
            "x-id": "App_45_40",
            "x-dynamic": "false",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(_pages_Admin__WEBPACK_IMPORTED_MODULE_19__["default"], {
              "x-file-name": "App",
              "x-line-number": "45",
              "x-column": "43",
              "x-component": "Admin",
              "x-id": "App_45_43",
              "x-dynamic": "true"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 44
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 41
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
          path: "/report",
          element: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(L, {
            "x-file-name": "App",
            "x-line-number": "46",
            "x-column": "41",
            "x-component": "L",
            "x-id": "App_46_41",
            "x-dynamic": "false",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(_pages_ReportHazard__WEBPACK_IMPORTED_MODULE_20__["default"], {
              "x-file-name": "App",
              "x-line-number": "46",
              "x-column": "44",
              "x-component": "ReportHazard",
              "x-id": "App_46_44",
              "x-dynamic": "true"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 45
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 42
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
          path: "/architecture",
          element: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(L, {
            "x-file-name": "App",
            "x-line-number": "47",
            "x-column": "47",
            "x-component": "L",
            "x-id": "App_47_47",
            "x-dynamic": "false",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(_pages_Architecture__WEBPACK_IMPORTED_MODULE_21__["default"], {
              "x-file-name": "App",
              "x-line-number": "47",
              "x-column": "50",
              "x-component": "Architecture",
              "x-id": "App_47_50",
              "x-dynamic": "true"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 51
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 48
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
          path: "*",
          element: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Navigate, {
            to: "/",
            replace: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 36
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), emergency && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(_components_EmergencyMode__WEBPACK_IMPORTED_MODULE_5__["default"], {
        "x-file-name": "App",
        "x-line-number": "50",
        "x-column": "22",
        "x-component": "EmergencyMode",
        "x-id": "App_50_22",
        "x-dynamic": "true"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 23
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(sonner__WEBPACK_IMPORTED_MODULE_3__.Toaster, {
      theme: "dark",
      position: "top-right",
      richColors: true,
      "x-file-name": "App",
      "x-line-number": "52",
      "x-column": "6",
      "x-component": "Toaster",
      "x-id": "App_52_6",
      "x-dynamic": "false"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, this);
}
_s(App, "1fW8r/F3hJ4rFLhXruiM0a3lv/4=", false, function () {
  return [_context_AppContext__WEBPACK_IMPORTED_MODULE_4__.useApp];
});
_c2 = App;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "L");
__webpack_require__.$Refresh$.register(_c2, "App");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ },

