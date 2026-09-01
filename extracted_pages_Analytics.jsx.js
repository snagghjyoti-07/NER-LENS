/***/ "./src/pages/Analytics.jsx"
/*!*********************************!*\
  !*** ./src/pages/Analytics.jsx ***!
  \*********************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Analytics)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/api */ "./src/lib/api.js");
/* harmony import */ var _components_ui_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ui-helpers */ "./src/components/ui-helpers.jsx");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/chart-column.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/component/Legend.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/component/Tooltip.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/component/ResponsiveContainer.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/component/Cell.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/polar/Pie.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/CartesianGrid.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/Area.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/Bar.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/Scatter.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/XAxis.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/YAxis.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/ZAxis.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/chart/BarChart.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/chart/PieChart.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/chart/ScatterChart.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/chart/AreaChart.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/app/frontend/src/pages/Analytics.jsx",
  _s = __webpack_require__.$Refresh$.signature();






const SEV_COLORS = {
  CRITICAL: "#EF4444",
  HIGH: "#F97316",
  MODERATE: "#F59E0B",
  INFO: "#38BDF8"
};
const tooltipStyle = {
  background: "#141414",
  border: "1px solid #27272A",
  fontSize: 12
};
function Analytics() {
  _s();
  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__.apiGet)("/analytics").then(r => setData(r.data)).catch(() => setData(false));
  }, []);
  if (!data) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_2__.Loading, {
    label: "Computing analytics\u2026",
    "x-file-name": "Analytics",
    "x-line-number": "14",
    "x-column": "20",
    "x-component": "Loading",
    "x-id": "Analytics_14_20",
    "x-dynamic": "true"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 21
  }, this);
  if (data === false) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
    className: "cc-surface rounded-md p-8 cc-text",
    "x-file-name": "Analytics",
    "x-line-number": "15",
    "x-column": "29",
    "x-component": "div",
    "x-id": "Analytics_15_29",
    "x-dynamic": "false",
    children: "Analytics unavailable offline without cache."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 30
  }, this);
  const uptimeData = [{
    name: "Uptime",
    value: data.sensor_uptime
  }, {
    name: "Downtime",
    value: 100 - data.sensor_uptime
  }];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
    className: "space-y-5",
    "data-testid": "analytics-page",
    "x-file-name": "Analytics",
    "x-line-number": "20",
    "x-column": "4",
    "x-component": "div",
    "x-id": "Analytics_20_4",
    "x-dynamic": "false",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
      className: "flex items-center gap-3",
      "x-file-name": "Analytics",
      "x-line-number": "21",
      "x-column": "6",
      "x-component": "div",
      "x-id": "Analytics_21_6",
      "x-dynamic": "false",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
        size: 22,
        className: "text-emerald-400",
        "x-file-name": "Analytics",
        "x-line-number": "22",
        "x-column": "8",
        "x-component": "BarChart3",
        "x-id": "Analytics_22_8",
        "x-dynamic": "false"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
        "x-file-name": "Analytics",
        "x-line-number": "23",
        "x-column": "8",
        "x-component": "div",
        "x-id": "Analytics_23_8",
        "x-dynamic": "false",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("h1", {
          className: "font-display font-bold text-xl cc-text tracking-tight",
          "x-file-name": "Analytics",
          "x-line-number": "24",
          "x-column": "10",
          "x-component": "h1",
          "x-id": "Analytics_24_10",
          "x-dynamic": "false",
          children: "Analytics"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
          className: "text-xs cc-text-2",
          "x-file-name": "Analytics",
          "x-line-number": "25",
          "x-column": "10",
          "x-component": "div",
          "x-id": "Analytics_25_10",
          "x-dynamic": "false",
          children: "Aggregated operational metrics \u2014 simulated historical baseline"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
      className: "grid grid-cols-2 md:grid-cols-4 gap-3",
      "x-file-name": "Analytics",
      "x-line-number": "29",
      "x-column": "6",
      "x-component": "div",
      "x-id": "Analytics_29_6",
      "x-dynamic": "false",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_2__.StatCard, {
        label: "Total Alerts (30d)",
        value: data.total_alerts,
        testId: "an-alerts",
        "x-file-name": "Analytics",
        "x-line-number": "30",
        "x-column": "8",
        "x-component": "StatCard",
        "x-id": "Analytics_30_8",
        "x-dynamic": "true"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_2__.StatCard, {
        label: "Warning Accuracy",
        value: `${data.warning_accuracy}%`,
        sub: "simulated",
        testId: "an-accuracy",
        "x-file-name": "Analytics",
        "x-line-number": "31",
        "x-column": "8",
        "x-component": "StatCard",
        "x-id": "Analytics_31_8",
        "x-dynamic": "true"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_2__.StatCard, {
        label: "Sensor Uptime",
        value: `${data.sensor_uptime}%`,
        color: "#10B981",
        testId: "an-uptime",
        "x-file-name": "Analytics",
        "x-line-number": "32",
        "x-column": "8",
        "x-component": "StatCard",
        "x-id": "Analytics_32_8",
        "x-dynamic": "true"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_2__.StatCard, {
        label: "Centers Ready",
        value: data.evacuation_stats.centers_ready,
        sub: `${data.evacuation_stats.people_trained} trained`,
        testId: "an-evac",
        "x-file-name": "Analytics",
        "x-line-number": "33",
        "x-column": "8",
        "x-component": "StatCard",
        "x-id": "Analytics_33_8",
        "x-dynamic": "true"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
      className: "grid grid-cols-1 lg:grid-cols-2 gap-4",
      "x-file-name": "Analytics",
      "x-line-number": "36",
      "x-column": "6",
      "x-component": "div",
      "x-id": "Analytics_36_6",
      "x-dynamic": "false",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
        className: "cc-surface rounded-md p-5",
        "x-file-name": "Analytics",
        "x-line-number": "37",
        "x-column": "8",
        "x-component": "div",
        "x-id": "Analytics_37_8",
        "x-dynamic": "false",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
          "x-file-name": "Analytics",
          "x-line-number": "38",
          "x-column": "10",
          "x-component": "SectionTitle",
          "x-id": "Analytics_38_10",
          "x-dynamic": "false",
          children: "Risk Trend & Alerts (30 days)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.ResponsiveContainer, {
          width: "100%",
          height: 220,
          "x-file-name": "Analytics",
          "x-line-number": "39",
          "x-column": "10",
          "x-component": "ResponsiveContainer",
          "x-id": "Analytics_39_10",
          "x-dynamic": "false",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_19__.AreaChart, {
            data: data.risk_trend,
            "x-file-name": "Analytics",
            "x-line-number": "40",
            "x-column": "12",
            "x-component": "AreaChart",
            "x-id": "Analytics_40_12",
            "x-dynamic": "false",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("defs", {
              "x-file-name": "Analytics",
              "x-line-number": "41",
              "x-column": "14",
              "x-component": "defs",
              "x-id": "Analytics_41_14",
              "x-dynamic": "false",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("linearGradient", {
                id: "ag",
                x1: "0",
                y1: "0",
                x2: "0",
                y2: "1",
                "x-file-name": "Analytics",
                "x-line-number": "41",
                "x-column": "20",
                "x-component": "linearGradient",
                "x-id": "Analytics_41_20",
                "x-dynamic": "false",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("stop", {
                  offset: "0%",
                  stopColor: "#F97316",
                  stopOpacity: 0.35,
                  "x-file-name": "Analytics",
                  "x-line-number": "42",
                  "x-column": "16",
                  "x-component": "stop",
                  "x-id": "Analytics_42_16",
                  "x-dynamic": "false"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 42,
                  columnNumber: 17
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("stop", {
                  offset: "100%",
                  stopColor: "#F97316",
                  stopOpacity: 0,
                  "x-file-name": "Analytics",
                  "x-line-number": "42",
                  "x-column": "75",
                  "x-component": "stop",
                  "x-id": "Analytics_42_75",
                  "x-dynamic": "false"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 42,
                  columnNumber: 76
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_9__.CartesianGrid, {
              stroke: "#27272A",
              "x-file-name": "Analytics",
              "x-line-number": "44",
              "x-column": "14",
              "x-component": "CartesianGrid",
              "x-id": "Analytics_44_14",
              "x-dynamic": "false"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_13__.XAxis, {
              dataKey: "date",
              tick: {
                fontSize: 10,
                fill: "#9CA3AF"
              },
              interval: 5,
              "x-file-name": "Analytics",
              "x-line-number": "44",
              "x-column": "48",
              "x-component": "XAxis",
              "x-id": "Analytics_44_48",
              "x-dynamic": "false"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 49
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_14__.YAxis, {
              tick: {
                fontSize: 10,
                fill: "#9CA3AF"
              },
              "x-file-name": "Analytics",
              "x-line-number": "45",
              "x-column": "14",
              "x-component": "YAxis",
              "x-id": "Analytics_45_14",
              "x-dynamic": "false"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {
              contentStyle: tooltipStyle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 65
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_10__.Area, {
              type: "monotone",
              dataKey: "avg_risk",
              stroke: "#F97316",
              fill: "url(#ag)",
              strokeWidth: 2,
              "x-file-name": "Analytics",
              "x-line-number": "46",
              "x-column": "14",
              "x-component": "Area",
              "x-id": "Analytics_46_14",
              "x-dynamic": "false"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
        className: "cc-surface rounded-md p-5",
        "x-file-name": "Analytics",
        "x-line-number": "51",
        "x-column": "8",
        "x-component": "div",
        "x-id": "Analytics_51_8",
        "x-dynamic": "false",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
          "x-file-name": "Analytics",
          "x-line-number": "52",
          "x-column": "10",
          "x-component": "SectionTitle",
          "x-id": "Analytics_52_10",
          "x-dynamic": "false",
          children: "Rainfall vs Landslide Risk (by zone)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.ResponsiveContainer, {
          width: "100%",
          height: 220,
          "x-file-name": "Analytics",
          "x-line-number": "53",
          "x-column": "10",
          "x-component": "ResponsiveContainer",
          "x-id": "Analytics_53_10",
          "x-dynamic": "false",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_18__.ScatterChart, {
            "x-file-name": "Analytics",
            "x-line-number": "54",
            "x-column": "12",
            "x-component": "ScatterChart",
            "x-id": "Analytics_54_12",
            "x-dynamic": "false",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_9__.CartesianGrid, {
              stroke: "#27272A",
              "x-file-name": "Analytics",
              "x-line-number": "55",
              "x-column": "14",
              "x-component": "CartesianGrid",
              "x-id": "Analytics_55_14",
              "x-dynamic": "false"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_13__.XAxis, {
              dataKey: "rainfall",
              name: "Rainfall",
              unit: " mm",
              tick: {
                fontSize: 10,
                fill: "#9CA3AF"
              },
              "x-file-name": "Analytics",
              "x-line-number": "56",
              "x-column": "14",
              "x-component": "XAxis",
              "x-id": "Analytics_56_14",
              "x-dynamic": "false"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_14__.YAxis, {
              dataKey: "risk",
              name: "Risk",
              domain: [0, 100],
              tick: {
                fontSize: 10,
                fill: "#9CA3AF"
              },
              "x-file-name": "Analytics",
              "x-line-number": "57",
              "x-column": "14",
              "x-component": "YAxis",
              "x-id": "Analytics_57_14",
              "x-dynamic": "false"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_15__.ZAxis, {
              range: [60, 60],
              "x-file-name": "Analytics",
              "x-line-number": "58",
              "x-column": "14",
              "x-component": "ZAxis",
              "x-id": "Analytics_58_14",
              "x-dynamic": "false"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {
              contentStyle: tooltipStyle,
              cursor: {
                strokeDasharray: "3 3"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_12__.Scatter, {
              data: data.rain_vs_risk,
              fill: "#38BDF8",
              name: "Zones",
              "x-file-name": "Analytics",
              "x-line-number": "60",
              "x-column": "14",
              "x-component": "Scatter",
              "x-id": "Analytics_60_14",
              "x-dynamic": "false"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
        className: "cc-surface rounded-md p-5",
        "x-file-name": "Analytics",
        "x-line-number": "65",
        "x-column": "8",
        "x-component": "div",
        "x-id": "Analytics_65_8",
        "x-dynamic": "false",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
          "x-file-name": "Analytics",
          "x-line-number": "66",
          "x-column": "10",
          "x-component": "SectionTitle",
          "x-id": "Analytics_66_10",
          "x-dynamic": "false",
          children: "Alerts by Severity"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.ResponsiveContainer, {
          width: "100%",
          height: 200,
          "x-file-name": "Analytics",
          "x-line-number": "67",
          "x-column": "10",
          "x-component": "ResponsiveContainer",
          "x-id": "Analytics_67_10",
          "x-dynamic": "false",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_16__.BarChart, {
            data: data.alerts_by_severity,
            "x-file-name": "Analytics",
            "x-line-number": "68",
            "x-column": "12",
            "x-component": "BarChart",
            "x-id": "Analytics_68_12",
            "x-dynamic": "false",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_9__.CartesianGrid, {
              stroke: "#27272A",
              "x-file-name": "Analytics",
              "x-line-number": "69",
              "x-column": "14",
              "x-component": "CartesianGrid",
              "x-id": "Analytics_69_14",
              "x-dynamic": "false"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_13__.XAxis, {
              dataKey: "name",
              tick: {
                fontSize: 10,
                fill: "#9CA3AF"
              },
              "x-file-name": "Analytics",
              "x-line-number": "69",
              "x-column": "48",
              "x-component": "XAxis",
              "x-id": "Analytics_69_48",
              "x-dynamic": "false"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 49
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_14__.YAxis, {
              tick: {
                fontSize: 10,
                fill: "#9CA3AF"
              },
              allowDecimals: false,
              "x-file-name": "Analytics",
              "x-line-number": "70",
              "x-column": "14",
              "x-component": "YAxis",
              "x-id": "Analytics_70_14",
              "x-dynamic": "false"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {
              contentStyle: tooltipStyle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 87
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_11__.Bar, {
              dataKey: "value",
              radius: [3, 3, 0, 0],
              "x-file-name": "Analytics",
              "x-line-number": "71",
              "x-column": "14",
              "x-component": "Bar",
              "x-id": "Analytics_71_14",
              "x-dynamic": "true",
              "x-source-type": "computed",
              "x-source-editable": "false",
              children: data.alerts_by_severity.map(e => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_7__.Cell, {
                fill: SEV_COLORS[e.name],
                "x-file-name": "Analytics",
                "x-line-number": "72",
                "x-column": "52",
                "x-component": "Cell",
                "x-id": "Analytics_72_52",
                "x-dynamic": "true",
                "x-source-type": "external",
                "x-source-var": "data",
                "x-source-editable": "false",
                "x-array-var": "data",
                "x-array-item-param": "e"
              }, e.name, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 53
              }, this))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
        className: "cc-surface rounded-md p-5",
        "x-file-name": "Analytics",
        "x-line-number": "78",
        "x-column": "8",
        "x-component": "div",
        "x-id": "Analytics_78_8",
        "x-dynamic": "false",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
          "x-file-name": "Analytics",
          "x-line-number": "79",
          "x-column": "10",
          "x-component": "SectionTitle",
          "x-id": "Analytics_79_10",
          "x-dynamic": "false",
          children: "Sensor Uptime"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.ResponsiveContainer, {
          width: "100%",
          height: 200,
          "x-file-name": "Analytics",
          "x-line-number": "80",
          "x-column": "10",
          "x-component": "ResponsiveContainer",
          "x-id": "Analytics_80_10",
          "x-dynamic": "false",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_17__.PieChart, {
            "x-file-name": "Analytics",
            "x-line-number": "81",
            "x-column": "12",
            "x-component": "PieChart",
            "x-id": "Analytics_81_12",
            "x-dynamic": "false",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_8__.Pie, {
              data: uptimeData,
              dataKey: "value",
              innerRadius: 55,
              outerRadius: 80,
              startAngle: 90,
              endAngle: -270,
              "x-file-name": "Analytics",
              "x-line-number": "82",
              "x-column": "14",
              "x-component": "Pie",
              "x-id": "Analytics_82_14",
              "x-dynamic": "false",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_7__.Cell, {
                fill: "#10B981",
                "x-file-name": "Analytics",
                "x-line-number": "83",
                "x-column": "16",
                "x-component": "Cell",
                "x-id": "Analytics_83_16",
                "x-dynamic": "false"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_7__.Cell, {
                fill: "#27272A",
                "x-file-name": "Analytics",
                "x-line-number": "83",
                "x-column": "39",
                "x-component": "Cell",
                "x-id": "Analytics_83_39",
                "x-dynamic": "false"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 40
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {
              contentStyle: tooltipStyle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_4__.Legend, {
              wrapperStyle: {
                fontSize: 11
              },
              "x-file-name": "Analytics",
              "x-line-number": "86",
              "x-column": "14",
              "x-component": "Legend",
              "x-id": "Analytics_86_14",
              "x-dynamic": "false"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
        className: "cc-surface rounded-md p-5",
        "x-file-name": "Analytics",
        "x-line-number": "91",
        "x-column": "8",
        "x-component": "div",
        "x-id": "Analytics_91_8",
        "x-dynamic": "false",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
          "x-file-name": "Analytics",
          "x-line-number": "92",
          "x-column": "10",
          "x-component": "SectionTitle",
          "x-id": "Analytics_92_10",
          "x-dynamic": "false",
          children: "Alert Response Times (simulated)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.ResponsiveContainer, {
          width: "100%",
          height: 200,
          "x-file-name": "Analytics",
          "x-line-number": "93",
          "x-column": "10",
          "x-component": "ResponsiveContainer",
          "x-id": "Analytics_93_10",
          "x-dynamic": "false",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_16__.BarChart, {
            data: data.response_times,
            layout: "vertical",
            "x-file-name": "Analytics",
            "x-line-number": "94",
            "x-column": "12",
            "x-component": "BarChart",
            "x-id": "Analytics_94_12",
            "x-dynamic": "false",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_9__.CartesianGrid, {
              stroke: "#27272A",
              "x-file-name": "Analytics",
              "x-line-number": "95",
              "x-column": "14",
              "x-component": "CartesianGrid",
              "x-id": "Analytics_95_14",
              "x-dynamic": "false"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_13__.XAxis, {
              type: "number",
              unit: " min",
              tick: {
                fontSize: 10,
                fill: "#9CA3AF"
              },
              "x-file-name": "Analytics",
              "x-line-number": "95",
              "x-column": "48",
              "x-component": "XAxis",
              "x-id": "Analytics_95_48",
              "x-dynamic": "false"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 49
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_14__.YAxis, {
              type: "category",
              dataKey: "event",
              width: 110,
              tick: {
                fontSize: 10,
                fill: "#9CA3AF"
              },
              "x-file-name": "Analytics",
              "x-line-number": "96",
              "x-column": "14",
              "x-component": "YAxis",
              "x-id": "Analytics_96_14",
              "x-dynamic": "false"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {
              contentStyle: tooltipStyle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_11__.Bar, {
              dataKey: "minutes",
              fill: "#A78BFA",
              radius: [0, 3, 3, 0],
              "x-file-name": "Analytics",
              "x-line-number": "98",
              "x-column": "14",
              "x-component": "Bar",
              "x-id": "Analytics_98_14",
              "x-dynamic": "false"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
        className: "cc-surface rounded-md p-5",
        "x-file-name": "Analytics",
        "x-line-number": "103",
        "x-column": "8",
        "x-component": "div",
        "x-id": "Analytics_103_8",
        "x-dynamic": "false",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
          "x-file-name": "Analytics",
          "x-line-number": "104",
          "x-column": "10",
          "x-component": "SectionTitle",
          "x-id": "Analytics_104_10",
          "x-dynamic": "false",
          children: "Highest Risk Locations"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
          className: "space-y-2",
          "data-testid": "an-highrisk-list",
          "x-file-name": "Analytics",
          "x-line-number": "105",
          "x-column": "10",
          "x-component": "div",
          "x-id": "Analytics_105_10",
          "x-dynamic": "true",
          "x-source-type": "computed",
          "x-source-editable": "false",
          children: data.high_risk_locations.map((l, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
            className: "flex items-center gap-3",
            "x-file-name": "Analytics",
            "x-line-number": "107",
            "x-column": "14",
            "x-component": "div",
            "x-id": "Analytics_107_14",
            "x-dynamic": "false",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("span", {
              className: "font-mono2 text-xs cc-text-2 w-5",
              "x-file-name": "Analytics",
              "x-line-number": "108",
              "x-column": "16",
              "x-component": "span",
              "x-id": "Analytics_108_16",
              "x-dynamic": "true",
              "x-source-type": "computed",
              "x-source-editable": "false",
              children: ["#", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("span", {
                "data-ve-dynamic": "true",
                "x-excluded": "true",
                style: {
                  display: "contents"
                },
                "x-file-name": "Analytics",
                "x-line-number": "108",
                "x-column": "16",
                "x-component": "span",
                "x-id": "Analytics_108_16_expr1",
                "x-dynamic": "true",
                "x-source-type": "computed",
                "x-source-editable": "false",
                children: i + 1
              }, void 0, false)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("span", {
              className: "text-sm cc-text flex-1 truncate",
              "x-file-name": "Analytics",
              "x-line-number": "109",
              "x-column": "16",
              "x-component": "span",
              "x-id": "Analytics_109_16",
              "x-dynamic": "true",
              "x-source-type": "static-imported",
              "x-source-var": "data",
              "x-source-path": "high_risk_locations.name",
              "x-source-editable": "false",
              "x-array-var": "data",
              "x-array-item-param": "l",
              children: l.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
              className: "w-32 h-2 rounded-sm bg-zinc-800 overflow-hidden",
              "x-file-name": "Analytics",
              "x-line-number": "110",
              "x-column": "16",
              "x-component": "div",
              "x-id": "Analytics_110_16",
              "x-dynamic": "false",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
                className: "h-full rounded-sm",
                style: {
                  width: `${l.score}%`,
                  backgroundColor: l.score > 75 ? "#EF4444" : l.score > 55 ? "#F97316" : "#F59E0B"
                },
                "x-file-name": "Analytics",
                "x-line-number": "111",
                "x-column": "18",
                "x-component": "div",
                "x-id": "Analytics_111_18",
                "x-dynamic": "false"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("span", {
              className: "font-mono2 text-sm cc-text w-10 text-right",
              "x-file-name": "Analytics",
              "x-line-number": "113",
              "x-column": "16",
              "x-component": "span",
              "x-id": "Analytics_113_16",
              "x-dynamic": "true",
              "x-source-type": "static-imported",
              "x-source-var": "data",
              "x-source-path": "high_risk_locations.score",
              "x-source-editable": "false",
              "x-array-var": "data",
              "x-array-item-param": "l",
              children: l.score
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 17
            }, this)]
          }, l.name, true, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 15
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
          className: "mt-5 grid grid-cols-3 gap-3 text-center",
          "x-file-name": "Analytics",
          "x-line-number": "117",
          "x-column": "10",
          "x-component": "div",
          "x-id": "Analytics_117_10",
          "x-dynamic": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
            className: "cc-elevated rounded-md p-3",
            "x-file-name": "Analytics",
            "x-line-number": "118",
            "x-column": "12",
            "x-component": "div",
            "x-id": "Analytics_118_12",
            "x-dynamic": "false",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
              className: "overline-tag",
              "x-file-name": "Analytics",
              "x-line-number": "118",
              "x-column": "56",
              "x-component": "div",
              "x-id": "Analytics_118_56",
              "x-dynamic": "false",
              children: "Drills"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 57
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
              className: "font-display font-bold text-xl cc-text mt-1",
              "x-file-name": "Analytics",
              "x-line-number": "118",
              "x-column": "98",
              "x-component": "div",
              "x-id": "Analytics_118_98",
              "x-dynamic": "true",
              "x-source-type": "state",
              "x-source-var": "data",
              "x-source-path": "evacuation_stats.drills",
              "x-source-editable": "false",
              children: data.evacuation_stats.drills
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 99
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
            className: "cc-elevated rounded-md p-3",
            "x-file-name": "Analytics",
            "x-line-number": "119",
            "x-column": "12",
            "x-component": "div",
            "x-id": "Analytics_119_12",
            "x-dynamic": "false",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
              className: "overline-tag",
              "x-file-name": "Analytics",
              "x-line-number": "119",
              "x-column": "56",
              "x-component": "div",
              "x-id": "Analytics_119_56",
              "x-dynamic": "false",
              children: "People Trained"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 57
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
              className: "font-display font-bold text-xl cc-text mt-1",
              "x-file-name": "Analytics",
              "x-line-number": "119",
              "x-column": "106",
              "x-component": "div",
              "x-id": "Analytics_119_106",
              "x-dynamic": "true",
              "x-source-type": "state",
              "x-source-var": "data",
              "x-source-path": "evacuation_stats.people_trained",
              "x-source-editable": "false",
              children: data.evacuation_stats.people_trained
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 107
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
            className: "cc-elevated rounded-md p-3",
            "x-file-name": "Analytics",
            "x-line-number": "120",
            "x-column": "12",
            "x-component": "div",
            "x-id": "Analytics_120_12",
            "x-dynamic": "false",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
              className: "overline-tag",
              "x-file-name": "Analytics",
              "x-line-number": "120",
              "x-column": "56",
              "x-component": "div",
              "x-id": "Analytics_120_56",
              "x-dynamic": "false",
              children: "Historical Events"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 57
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
              className: "font-display font-bold text-xl cc-text mt-1",
              "x-file-name": "Analytics",
              "x-line-number": "120",
              "x-column": "109",
              "x-component": "div",
              "x-id": "Analytics_120_109",
              "x-dynamic": "false",
              children: "3"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 110
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
_s(Analytics, "fQZRxy/+nAZ7NLS1X4dVhrlp8Go=");
_c = Analytics;
var _c;
__webpack_require__.$Refresh$.register(_c, "Analytics");

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

