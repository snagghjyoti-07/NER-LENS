/***/ "./src/pages/LocationPage.jsx"
/*!************************************!*\
  !*** ./src/pages/LocationPage.jsx ***!
  \************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LocationPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4N6VE7H7.mjs");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/api */ "./src/lib/api.js");
/* harmony import */ var _components_ui_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ui-helpers */ "./src/components/ui-helpers.jsx");
/* harmony import */ var _lib_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/i18n */ "./src/lib/i18n.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/component/Tooltip.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/component/ResponsiveContainer.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/CartesianGrid.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/Line.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/Area.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/XAxis.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/YAxis.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/chart/LineChart.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/chart/AreaChart.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/arrow-left.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/equal.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/minus.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/plus.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/trending-down.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/trending-up.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/app/frontend/src/pages/LocationPage.jsx",
  _s = __webpack_require__.$Refresh$.signature();








const RANGES = ["6h", "24h", "7d", "30d"];
const PARAM_META = [["rainfall", "Rainfall (24h)", "mm"], ["rainfall_intensity", "Rainfall Intensity", "mm/h"], ["soil_moisture", "Soil Moisture", "%"], ["ground_movement", "Ground Movement", "mm"], ["temperature", "Temperature", "°C"], ["humidity", "Humidity", "%"]];
function LocationPage() {
  _s();
  var _history$points;
  const {
    id
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  const [loc, setLoc] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [range, setRange] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("24h");
  const [history, setHistory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__.apiGet)(`/locations/${id}`).then(r => setLoc(r.data)).catch(() => setLoc(false));
  }, [id]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setHistory(null);
    (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__.apiGet)(`/locations/${id}/history?range=${range}`).then(r => setHistory(r.data)).catch(() => setHistory({
      points: []
    }));
  }, [id, range]);
  if (loc === null) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_3__.Loading, {
    label: "Loading location\u2026",
    "x-file-name": "LocationPage",
    "x-line-number": "32",
    "x-column": "27",
    "x-component": "Loading",
    "x-id": "LocationPage_32_27",
    "x-dynamic": "true"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 28
  }, this);
  if (loc === false) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
    className: "cc-surface rounded-md p-8 cc-text",
    "x-file-name": "LocationPage",
    "x-line-number": "33",
    "x-column": "28",
    "x-component": "div",
    "x-id": "LocationPage_33_28",
    "x-dynamic": "false",
    children: "Location not found."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 29
  }, this);
  const chartData = (history === null || history === void 0 ? void 0 : (_history$points = history.points) === null || _history$points === void 0 ? void 0 : _history$points.map(p => ({
    ...p,
    label: range === "30d" ? new Date(p.t).toLocaleDateString([], {
      day: "2-digit",
      month: "short"
    }) : new Date(p.t).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    })
  }))) || [];
  const TrendIcon = (history === null || history === void 0 ? void 0 : history.trend) === "RISING" ? lucide_react__WEBPACK_IMPORTED_MODULE_19__["default"] : (history === null || history === void 0 ? void 0 : history.trend) === "FALLING" ? lucide_react__WEBPACK_IMPORTED_MODULE_18__["default"] : lucide_react__WEBPACK_IMPORTED_MODULE_16__["default"];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
    className: "space-y-5",
    "data-testid": "location-page",
    "x-file-name": "LocationPage",
    "x-line-number": "44",
    "x-column": "4",
    "x-component": "div",
    "x-id": "LocationPage_44_4",
    "x-dynamic": "false",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("button", {
      onClick: () => navigate("/dashboard"),
      "data-testid": "back-to-dashboard-btn",
      className: "flex items-center gap-1.5 text-xs cc-text-2 hover:text-white transition-colors",
      "x-file-name": "LocationPage",
      "x-line-number": "45",
      "x-column": "6",
      "x-component": "button",
      "x-id": "LocationPage_45_6",
      "x-dynamic": "false",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_14__["default"], {
        size: 14
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), " Back to Dashboard"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
      className: "grid grid-cols-1 lg:grid-cols-12 gap-4",
      "x-file-name": "LocationPage",
      "x-line-number": "50",
      "x-column": "6",
      "x-component": "div",
      "x-id": "LocationPage_50_6",
      "x-dynamic": "false",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
        className: "lg:col-span-8 space-y-4",
        "x-file-name": "LocationPage",
        "x-line-number": "51",
        "x-column": "8",
        "x-component": "div",
        "x-id": "LocationPage_51_8",
        "x-dynamic": "false",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
          className: "cc-surface rounded-md p-5",
          "x-file-name": "LocationPage",
          "x-line-number": "52",
          "x-column": "10",
          "x-component": "div",
          "x-id": "LocationPage_52_10",
          "x-dynamic": "false",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
            className: "flex flex-wrap items-start justify-between gap-4",
            "x-file-name": "LocationPage",
            "x-line-number": "53",
            "x-column": "12",
            "x-component": "div",
            "x-id": "LocationPage_53_12",
            "x-dynamic": "false",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
              "x-file-name": "LocationPage",
              "x-line-number": "54",
              "x-column": "14",
              "x-component": "div",
              "x-id": "LocationPage_54_14",
              "x-dynamic": "false",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("h1", {
                className: "font-display font-bold text-2xl cc-text tracking-tight",
                "data-testid": "location-name",
                "x-file-name": "LocationPage",
                "x-line-number": "55",
                "x-column": "16",
                "x-component": "h1",
                "x-id": "LocationPage_55_16",
                "x-dynamic": "true",
                "x-source-type": "state",
                "x-source-var": "loc",
                "x-source-path": "name",
                "x-source-editable": "false",
                children: loc.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
                className: "text-sm cc-text-2 mt-1",
                "x-file-name": "LocationPage",
                "x-line-number": "56",
                "x-column": "16",
                "x-component": "div",
                "x-id": "LocationPage_56_16",
                "x-dynamic": "true",
                "x-source-type": "state",
                "x-source-var": "loc",
                "x-source-path": "district",
                "x-source-editable": "false",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("span", {
                  "data-ve-dynamic": "true",
                  "x-excluded": "true",
                  style: {
                    display: "contents"
                  },
                  "x-file-name": "LocationPage",
                  "x-line-number": "56",
                  "x-column": "16",
                  "x-component": "div",
                  "x-id": "LocationPage_56_16_expr0",
                  "x-dynamic": "true",
                  "x-source-type": "state",
                  "x-source-var": "loc",
                  "x-source-path": "district",
                  "x-source-editable": "false",
                  children: loc.district
                }, void 0, false), ", ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("span", {
                  "data-ve-dynamic": "true",
                  "x-excluded": "true",
                  style: {
                    display: "contents"
                  },
                  "x-file-name": "LocationPage",
                  "x-line-number": "56",
                  "x-column": "16",
                  "x-component": "div",
                  "x-id": "LocationPage_56_16_expr2",
                  "x-dynamic": "true",
                  "x-source-type": "state",
                  "x-source-var": "loc",
                  "x-source-path": "state",
                  "x-source-editable": "false",
                  children: loc.state
                }, void 0, false), " \xB7 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("span", {
                  className: "font-mono2",
                  "x-file-name": "LocationPage",
                  "x-line-number": "56",
                  "x-column": "86",
                  "x-component": "span",
                  "x-id": "LocationPage_56_86",
                  "x-dynamic": "true",
                  "x-source-type": "computed",
                  "x-source-editable": "false",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("span", {
                    "data-ve-dynamic": "true",
                    "x-excluded": "true",
                    style: {
                      display: "contents"
                    },
                    "x-file-name": "LocationPage",
                    "x-line-number": "56",
                    "x-column": "86",
                    "x-component": "span",
                    "x-id": "LocationPage_56_86_expr0",
                    "x-dynamic": "true",
                    "x-source-type": "computed",
                    "x-source-editable": "false",
                    children: loc.lat.toFixed(4)
                  }, void 0, false), "\xB0N, ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("span", {
                    "data-ve-dynamic": "true",
                    "x-excluded": "true",
                    style: {
                      display: "contents"
                    },
                    "x-file-name": "LocationPage",
                    "x-line-number": "56",
                    "x-column": "86",
                    "x-component": "span",
                    "x-id": "LocationPage_56_86_expr2",
                    "x-dynamic": "true",
                    "x-source-type": "computed",
                    "x-source-editable": "false",
                    children: loc.lng.toFixed(4)
                  }, void 0, false), "\xB0E"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 87
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
                className: "text-xs cc-text-2 mt-1",
                "x-file-name": "LocationPage",
                "x-line-number": "57",
                "x-column": "16",
                "x-component": "div",
                "x-id": "LocationPage_57_16",
                "x-dynamic": "true",
                "x-source-type": "computed",
                "x-source-editable": "false",
                children: ["Updated ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("span", {
                  "data-ve-dynamic": "true",
                  "x-excluded": "true",
                  style: {
                    display: "contents"
                  },
                  "x-file-name": "LocationPage",
                  "x-line-number": "57",
                  "x-column": "16",
                  "x-component": "div",
                  "x-id": "LocationPage_57_16_expr1",
                  "x-dynamic": "true",
                  "x-source-type": "computed",
                  "x-source-editable": "false",
                  children: new Date(loc.last_updated).toLocaleString()
                }, void 0, false), " \xB7 Soil: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("span", {
                  "data-ve-dynamic": "true",
                  "x-excluded": "true",
                  style: {
                    display: "contents"
                  },
                  "x-file-name": "LocationPage",
                  "x-line-number": "57",
                  "x-column": "16",
                  "x-component": "div",
                  "x-id": "LocationPage_57_16_expr3",
                  "x-dynamic": "true",
                  "x-source-type": "state",
                  "x-source-var": "loc",
                  "x-source-path": "soil_type",
                  "x-source-editable": "false",
                  children: loc.soil_type
                }, void 0, false), " \xB7 Pop. ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("span", {
                  "data-ve-dynamic": "true",
                  "x-excluded": "true",
                  style: {
                    display: "contents"
                  },
                  "x-file-name": "LocationPage",
                  "x-line-number": "57",
                  "x-column": "16",
                  "x-component": "div",
                  "x-id": "LocationPage_57_16_expr5",
                  "x-dynamic": "true",
                  "x-source-type": "computed",
                  "x-source-editable": "false",
                  children: loc.population.toLocaleString()
                }, void 0, false)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
              className: "text-right",
              "x-file-name": "LocationPage",
              "x-line-number": "59",
              "x-column": "14",
              "x-component": "div",
              "x-id": "LocationPage_59_14",
              "x-dynamic": "true",
              "x-source-type": "computed",
              "x-source-editable": "false",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_3__.RiskBadge, {
                level: loc.risk.level,
                className: "text-sm px-3 py-1",
                "x-file-name": "LocationPage",
                "x-line-number": "60",
                "x-column": "16",
                "x-component": "RiskBadge",
                "x-id": "LocationPage_60_16",
                "x-dynamic": "true"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
                className: "mt-2 font-display font-extrabold text-4xl",
                style: {
                  color: _lib_i18n__WEBPACK_IMPORTED_MODULE_4__.RISK_COLORS[loc.risk.level]
                },
                "data-testid": "location-risk-score",
                "x-file-name": "LocationPage",
                "x-line-number": "61",
                "x-column": "16",
                "x-component": "div",
                "x-id": "LocationPage_61_16",
                "x-dynamic": "true",
                "x-source-type": "state",
                "x-source-var": "loc",
                "x-source-path": "risk.score",
                "x-source-editable": "false",
                children: [loc.risk.score, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("span", {
                  className: "text-base cc-text-2",
                  "x-file-name": "LocationPage",
                  "x-line-number": "62",
                  "x-column": "34",
                  "x-component": "span",
                  "x-id": "LocationPage_62_34",
                  "x-dynamic": "false",
                  children: "/100"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 35
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 17
              }, this), history && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
                className: "flex items-center gap-1 justify-end text-xs cc-text-2 mt-1",
                "data-testid": "location-trend",
                "x-file-name": "LocationPage",
                "x-line-number": "65",
                "x-column": "18",
                "x-component": "div",
                "x-id": "LocationPage_65_18",
                "x-dynamic": "true",
                "x-source-type": "state",
                "x-source-var": "history",
                "x-source-path": "trend",
                "x-source-editable": "false",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(TrendIcon, {
                  size: 14,
                  style: {
                    color: history.trend === "RISING" ? "#EF4444" : history.trend === "FALLING" ? "#10B981" : "#9CA3AF"
                  },
                  "x-file-name": "LocationPage",
                  "x-line-number": "66",
                  "x-column": "20",
                  "x-component": "TrendIcon",
                  "x-id": "LocationPage_66_20",
                  "x-dynamic": "false"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 21
                }, this), history.trend]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
          className: "grid grid-cols-2 sm:grid-cols-3 gap-3",
          "x-file-name": "LocationPage",
          "x-line-number": "74",
          "x-column": "10",
          "x-component": "div",
          "x-id": "LocationPage_74_10",
          "x-dynamic": "true",
          "x-source-type": "computed",
          "x-source-editable": "false",
          children: [PARAM_META.map(([key, label, unit]) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
            className: "cc-surface rounded-md p-3",
            "data-testid": `param-${key}`,
            "x-file-name": "LocationPage",
            "x-line-number": "76",
            "x-column": "14",
            "x-component": "div",
            "x-id": "LocationPage_76_14",
            "x-dynamic": "false",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
              className: "overline-tag",
              "x-file-name": "LocationPage",
              "x-line-number": "77",
              "x-column": "16",
              "x-component": "div",
              "x-id": "LocationPage_77_16",
              "x-dynamic": "true",
              "x-source-type": "unknown",
              "x-source-var": "label",
              "x-source-editable": "false",
              children: label
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
              className: "font-mono2 text-xl cc-text mt-1",
              "x-file-name": "LocationPage",
              "x-line-number": "78",
              "x-column": "16",
              "x-component": "div",
              "x-id": "LocationPage_78_16",
              "x-dynamic": "true",
              "x-source-type": "state",
              "x-source-var": "loc",
              "x-source-path": "readings.key",
              "x-source-editable": "false",
              children: [loc.readings[key], /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("span", {
                className: "text-xs cc-text-2 ml-1",
                "x-file-name": "LocationPage",
                "x-line-number": "78",
                "x-column": "84",
                "x-component": "span",
                "x-id": "LocationPage_78_84",
                "x-dynamic": "true",
                "x-source-type": "unknown",
                "x-source-var": "unit",
                "x-source-editable": "false",
                children: unit
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 85
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 17
            }, this)]
          }, key, true, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 15
          }, this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
            className: "cc-surface rounded-md p-3",
            "x-file-name": "LocationPage",
            "x-line-number": "81",
            "x-column": "12",
            "x-component": "div",
            "x-id": "LocationPage_81_12",
            "x-dynamic": "false",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
              className: "overline-tag",
              "x-file-name": "LocationPage",
              "x-line-number": "81",
              "x-column": "55",
              "x-component": "div",
              "x-id": "LocationPage_81_55",
              "x-dynamic": "false",
              children: "Slope"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 56
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
              className: "font-mono2 text-xl cc-text mt-1",
              "x-file-name": "LocationPage",
              "x-line-number": "81",
              "x-column": "96",
              "x-component": "div",
              "x-id": "LocationPage_81_96",
              "x-dynamic": "true",
              "x-source-type": "state",
              "x-source-var": "loc",
              "x-source-path": "slope",
              "x-source-editable": "false",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("span", {
                "data-ve-dynamic": "true",
                "x-excluded": "true",
                style: {
                  display: "contents"
                },
                "x-file-name": "LocationPage",
                "x-line-number": "81",
                "x-column": "96",
                "x-component": "div",
                "x-id": "LocationPage_81_96_expr0",
                "x-dynamic": "true",
                "x-source-type": "state",
                "x-source-var": "loc",
                "x-source-path": "slope",
                "x-source-editable": "false",
                children: loc.slope
              }, void 0, false), "\xB0"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 97
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
            className: "cc-surface rounded-md p-3",
            "x-file-name": "LocationPage",
            "x-line-number": "82",
            "x-column": "12",
            "x-component": "div",
            "x-id": "LocationPage_82_12",
            "x-dynamic": "false",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
              className: "overline-tag",
              "x-file-name": "LocationPage",
              "x-line-number": "82",
              "x-column": "55",
              "x-component": "div",
              "x-id": "LocationPage_82_55",
              "x-dynamic": "false",
              children: "Elevation"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 56
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
              className: "font-mono2 text-xl cc-text mt-1",
              "x-file-name": "LocationPage",
              "x-line-number": "82",
              "x-column": "100",
              "x-component": "div",
              "x-id": "LocationPage_82_100",
              "x-dynamic": "true",
              "x-source-type": "state",
              "x-source-var": "loc",
              "x-source-path": "elevation",
              "x-source-editable": "false",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("span", {
                "data-ve-dynamic": "true",
                "x-excluded": "true",
                style: {
                  display: "contents"
                },
                "x-file-name": "LocationPage",
                "x-line-number": "82",
                "x-column": "100",
                "x-component": "div",
                "x-id": "LocationPage_82_100_expr0",
                "x-dynamic": "true",
                "x-source-type": "state",
                "x-source-var": "loc",
                "x-source-path": "elevation",
                "x-source-editable": "false",
                children: loc.elevation
              }, void 0, false), " m"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 101
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
          className: "cc-surface rounded-md p-5",
          "x-file-name": "LocationPage",
          "x-line-number": "85",
          "x-column": "10",
          "x-component": "div",
          "x-id": "LocationPage_85_10",
          "x-dynamic": "true",
          "x-source-type": "computed",
          "x-source-editable": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {
            right: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
              className: "flex gap-1",
              "x-file-name": "LocationPage",
              "x-line-number": "87",
              "x-column": "14",
              "x-component": "div",
              "x-id": "LocationPage_87_14",
              "x-dynamic": "true",
              "x-source-type": "computed",
              "x-source-editable": "false",
              children: RANGES.map(r => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("button", {
                onClick: () => setRange(r),
                "data-testid": `range-${r}`,
                className: `text-xs px-2.5 py-1 rounded-sm font-mono2 transition-colors ${range === r ? "bg-emerald-600 text-white" : "cc-text-2 border border-zinc-700 hover:text-white"}`,
                "x-file-name": "LocationPage",
                "x-line-number": "89",
                "x-column": "18",
                "x-component": "button",
                "x-id": "LocationPage_89_18",
                "x-dynamic": "true",
                "x-source-type": "static-imported",
                "x-source-var": "RANGES",
                "x-source-file-abs": "/app/frontend/src/pages/LocationPage.jsx",
                "x-source-line": "9",
                "x-source-editable": "true",
                "x-array-var": "RANGES",
                "x-array-line": "9",
                "x-array-item-param": "r",
                children: r
              }, r, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 19
              }, this))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 15
            }, this),
            "x-file-name": "LocationPage",
            "x-line-number": "86",
            "x-column": "12",
            "x-component": "SectionTitle",
            "x-id": "LocationPage_86_12",
            "x-dynamic": "false",
            children: "Environmental History"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, this), !history ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_3__.Loading, {
            label: "Loading series\u2026",
            "x-file-name": "LocationPage",
            "x-line-number": "95",
            "x-column": "24",
            "x-component": "Loading",
            "x-id": "LocationPage_95_24",
            "x-dynamic": "true"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 25
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
            className: "grid grid-cols-1 xl:grid-cols-2 gap-4",
            "x-file-name": "LocationPage",
            "x-line-number": "96",
            "x-column": "14",
            "x-component": "div",
            "x-id": "LocationPage_96_14",
            "x-dynamic": "false",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
              "x-file-name": "LocationPage",
              "x-line-number": "97",
              "x-column": "16",
              "x-component": "div",
              "x-id": "LocationPage_97_16",
              "x-dynamic": "false",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
                className: "overline-tag mb-2",
                "x-file-name": "LocationPage",
                "x-line-number": "98",
                "x-column": "18",
                "x-component": "div",
                "x-id": "LocationPage_98_18",
                "x-dynamic": "false",
                children: "Risk Score Trend"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.ResponsiveContainer, {
                width: "100%",
                height: 180,
                "x-file-name": "LocationPage",
                "x-line-number": "99",
                "x-column": "18",
                "x-component": "ResponsiveContainer",
                "x-id": "LocationPage_99_18",
                "x-dynamic": "false",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_13__.AreaChart, {
                  data: chartData,
                  "x-file-name": "LocationPage",
                  "x-line-number": "100",
                  "x-column": "20",
                  "x-component": "AreaChart",
                  "x-id": "LocationPage_100_20",
                  "x-dynamic": "false",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("defs", {
                    "x-file-name": "LocationPage",
                    "x-line-number": "101",
                    "x-column": "22",
                    "x-component": "defs",
                    "x-id": "LocationPage_101_22",
                    "x-dynamic": "false",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("linearGradient", {
                      id: "rg",
                      x1: "0",
                      y1: "0",
                      x2: "0",
                      y2: "1",
                      "x-file-name": "LocationPage",
                      "x-line-number": "101",
                      "x-column": "28",
                      "x-component": "linearGradient",
                      "x-id": "LocationPage_101_28",
                      "x-dynamic": "false",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("stop", {
                        offset: "0%",
                        stopColor: "#EF4444",
                        stopOpacity: 0.4,
                        "x-file-name": "LocationPage",
                        "x-line-number": "102",
                        "x-column": "24",
                        "x-component": "stop",
                        "x-id": "LocationPage_102_24",
                        "x-dynamic": "false"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 102,
                        columnNumber: 25
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("stop", {
                        offset: "100%",
                        stopColor: "#EF4444",
                        stopOpacity: 0,
                        "x-file-name": "LocationPage",
                        "x-line-number": "102",
                        "x-column": "82",
                        "x-component": "stop",
                        "x-id": "LocationPage_102_82",
                        "x-dynamic": "false"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 102,
                        columnNumber: 83
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 101,
                      columnNumber: 29
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 101,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_7__.CartesianGrid, {
                    stroke: "#27272A",
                    "x-file-name": "LocationPage",
                    "x-line-number": "104",
                    "x-column": "22",
                    "x-component": "CartesianGrid",
                    "x-id": "LocationPage_104_22",
                    "x-dynamic": "false"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 104,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_10__.XAxis, {
                    dataKey: "label",
                    tick: {
                      fontSize: 10,
                      fill: "#9CA3AF"
                    },
                    interval: "preserveStartEnd",
                    "x-file-name": "LocationPage",
                    "x-line-number": "104",
                    "x-column": "56",
                    "x-component": "XAxis",
                    "x-id": "LocationPage_104_56",
                    "x-dynamic": "false"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 104,
                    columnNumber: 57
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_11__.YAxis, {
                    domain: [0, 100],
                    tick: {
                      fontSize: 10,
                      fill: "#9CA3AF"
                    },
                    "x-file-name": "LocationPage",
                    "x-line-number": "105",
                    "x-column": "22",
                    "x-component": "YAxis",
                    "x-id": "LocationPage_105_22",
                    "x-dynamic": "false"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 105,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {
                    contentStyle: {
                      background: "#141414",
                      border: "1px solid #27272A",
                      fontSize: 12
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 106,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_9__.Area, {
                    type: "monotone",
                    dataKey: "risk",
                    stroke: "#EF4444",
                    fill: "url(#rg)",
                    strokeWidth: 2,
                    "x-file-name": "LocationPage",
                    "x-line-number": "107",
                    "x-column": "22",
                    "x-component": "Area",
                    "x-id": "LocationPage_107_22",
                    "x-dynamic": "false"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 107,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 100,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
              "x-file-name": "LocationPage",
              "x-line-number": "111",
              "x-column": "16",
              "x-component": "div",
              "x-id": "LocationPage_111_16",
              "x-dynamic": "false",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
                className: "overline-tag mb-2",
                "x-file-name": "LocationPage",
                "x-line-number": "112",
                "x-column": "18",
                "x-component": "div",
                "x-id": "LocationPage_112_18",
                "x-dynamic": "false",
                children: "Rainfall (mm) vs Soil Moisture (%)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.ResponsiveContainer, {
                width: "100%",
                height: 180,
                "x-file-name": "LocationPage",
                "x-line-number": "113",
                "x-column": "18",
                "x-component": "ResponsiveContainer",
                "x-id": "LocationPage_113_18",
                "x-dynamic": "false",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_12__.LineChart, {
                  data: chartData,
                  "x-file-name": "LocationPage",
                  "x-line-number": "114",
                  "x-column": "20",
                  "x-component": "LineChart",
                  "x-id": "LocationPage_114_20",
                  "x-dynamic": "false",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_7__.CartesianGrid, {
                    stroke: "#27272A",
                    "x-file-name": "LocationPage",
                    "x-line-number": "115",
                    "x-column": "22",
                    "x-component": "CartesianGrid",
                    "x-id": "LocationPage_115_22",
                    "x-dynamic": "false"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 115,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_10__.XAxis, {
                    dataKey: "label",
                    tick: {
                      fontSize: 10,
                      fill: "#9CA3AF"
                    },
                    interval: "preserveStartEnd",
                    "x-file-name": "LocationPage",
                    "x-line-number": "115",
                    "x-column": "56",
                    "x-component": "XAxis",
                    "x-id": "LocationPage_115_56",
                    "x-dynamic": "false"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 115,
                    columnNumber: 57
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_11__.YAxis, {
                    tick: {
                      fontSize: 10,
                      fill: "#9CA3AF"
                    },
                    "x-file-name": "LocationPage",
                    "x-line-number": "116",
                    "x-column": "22",
                    "x-component": "YAxis",
                    "x-id": "LocationPage_116_22",
                    "x-dynamic": "false"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 116,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {
                    contentStyle: {
                      background: "#141414",
                      border: "1px solid #27272A",
                      fontSize: 12
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 117,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_8__.Line, {
                    type: "monotone",
                    dataKey: "rainfall",
                    stroke: "#38BDF8",
                    strokeWidth: 2,
                    dot: false,
                    "x-file-name": "LocationPage",
                    "x-line-number": "118",
                    "x-column": "22",
                    "x-component": "Line",
                    "x-id": "LocationPage_118_22",
                    "x-dynamic": "false"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 118,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_8__.Line, {
                    type: "monotone",
                    dataKey: "soil_moisture",
                    stroke: "#10B981",
                    strokeWidth: 2,
                    dot: false,
                    "x-file-name": "LocationPage",
                    "x-line-number": "119",
                    "x-column": "22",
                    "x-component": "Line",
                    "x-id": "LocationPage_119_22",
                    "x-dynamic": "false"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 119,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 114,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
              className: "xl:col-span-2",
              "x-file-name": "LocationPage",
              "x-line-number": "123",
              "x-column": "16",
              "x-component": "div",
              "x-id": "LocationPage_123_16",
              "x-dynamic": "false",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
                className: "overline-tag mb-2",
                "x-file-name": "LocationPage",
                "x-line-number": "124",
                "x-column": "18",
                "x-component": "div",
                "x-id": "LocationPage_124_18",
                "x-dynamic": "false",
                children: "Ground Movement (mm)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.ResponsiveContainer, {
                width: "100%",
                height: 140,
                "x-file-name": "LocationPage",
                "x-line-number": "125",
                "x-column": "18",
                "x-component": "ResponsiveContainer",
                "x-id": "LocationPage_125_18",
                "x-dynamic": "false",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_13__.AreaChart, {
                  data: chartData,
                  "x-file-name": "LocationPage",
                  "x-line-number": "126",
                  "x-column": "20",
                  "x-component": "AreaChart",
                  "x-id": "LocationPage_126_20",
                  "x-dynamic": "false",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_7__.CartesianGrid, {
                    stroke: "#27272A",
                    "x-file-name": "LocationPage",
                    "x-line-number": "127",
                    "x-column": "22",
                    "x-component": "CartesianGrid",
                    "x-id": "LocationPage_127_22",
                    "x-dynamic": "false"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 127,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_10__.XAxis, {
                    dataKey: "label",
                    tick: {
                      fontSize: 10,
                      fill: "#9CA3AF"
                    },
                    interval: "preserveStartEnd",
                    "x-file-name": "LocationPage",
                    "x-line-number": "127",
                    "x-column": "56",
                    "x-component": "XAxis",
                    "x-id": "LocationPage_127_56",
                    "x-dynamic": "false"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 127,
                    columnNumber: 57
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_11__.YAxis, {
                    tick: {
                      fontSize: 10,
                      fill: "#9CA3AF"
                    },
                    "x-file-name": "LocationPage",
                    "x-line-number": "128",
                    "x-column": "22",
                    "x-component": "YAxis",
                    "x-id": "LocationPage_128_22",
                    "x-dynamic": "false"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 128,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {
                    contentStyle: {
                      background: "#141414",
                      border: "1px solid #27272A",
                      fontSize: 12
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 129,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_9__.Area, {
                    type: "monotone",
                    dataKey: "ground_movement",
                    stroke: "#F59E0B",
                    fill: "#F59E0B22",
                    strokeWidth: 2,
                    "x-file-name": "LocationPage",
                    "x-line-number": "130",
                    "x-column": "22",
                    "x-component": "Area",
                    "x-id": "LocationPage_130_22",
                    "x-dynamic": "false"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 130,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
        className: "lg:col-span-4 space-y-4",
        "x-file-name": "LocationPage",
        "x-line-number": "139",
        "x-column": "8",
        "x-component": "div",
        "x-id": "LocationPage_139_8",
        "x-dynamic": "false",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
          className: "cc-surface rounded-md p-5",
          "data-testid": "why-at-risk-panel",
          "x-file-name": "LocationPage",
          "x-line-number": "140",
          "x-column": "10",
          "x-component": "div",
          "x-id": "LocationPage_140_10",
          "x-dynamic": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {
            "x-file-name": "LocationPage",
            "x-line-number": "141",
            "x-column": "12",
            "x-component": "SectionTitle",
            "x-id": "LocationPage_141_12",
            "x-dynamic": "false",
            children: "Why is this location at risk?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
            className: "space-y-0",
            "x-file-name": "LocationPage",
            "x-line-number": "142",
            "x-column": "12",
            "x-component": "div",
            "x-id": "LocationPage_142_12",
            "x-dynamic": "true",
            "x-source-type": "computed",
            "x-source-editable": "false",
            children: [loc.risk.reasons.map((r, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
                className: "cc-elevated rounded-md px-3 py-2.5 text-sm cc-text",
                "x-file-name": "LocationPage",
                "x-line-number": "145",
                "x-column": "18",
                "x-component": "div",
                "x-id": "LocationPage_145_18",
                "x-dynamic": "true",
                "x-source-type": "static-imported",
                "x-source-var": "loc",
                "x-source-editable": "false",
                "x-array-var": "loc",
                "x-array-item-param": "r",
                children: r
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 19
              }, this), i < loc.risk.reasons.length - 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
                className: "flex justify-center py-0.5",
                "x-file-name": "LocationPage",
                "x-line-number": "146",
                "x-column": "54",
                "x-component": "div",
                "x-id": "LocationPage_146_54",
                "x-dynamic": "false",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_17__["default"], {
                  size: 14,
                  className: "cc-text-2"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 146,
                  columnNumber: 99
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 55
              }, this)]
            }, i, true, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 17
            }, this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
              className: "flex justify-center py-1",
              "x-file-name": "LocationPage",
              "x-line-number": "149",
              "x-column": "14",
              "x-component": "div",
              "x-id": "LocationPage_149_14",
              "x-dynamic": "false",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_15__["default"], {
                size: 14,
                className: "cc-text-2",
                "x-file-name": "LocationPage",
                "x-line-number": "149",
                "x-column": "56",
                "x-component": "Equal",
                "x-id": "LocationPage_149_56",
                "x-dynamic": "false"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 57
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
              className: "rounded-md px-3 py-3 text-center font-display font-bold",
              style: {
                backgroundColor: `${_lib_i18n__WEBPACK_IMPORTED_MODULE_4__.RISK_COLORS[loc.risk.level]}1A`,
                color: _lib_i18n__WEBPACK_IMPORTED_MODULE_4__.RISK_COLORS[loc.risk.level],
                border: `1px solid ${_lib_i18n__WEBPACK_IMPORTED_MODULE_4__.RISK_COLORS[loc.risk.level]}55`
              },
              "x-file-name": "LocationPage",
              "x-line-number": "150",
              "x-column": "14",
              "x-component": "div",
              "x-id": "LocationPage_150_14",
              "x-dynamic": "true",
              "x-source-type": "state",
              "x-source-var": "loc",
              "x-source-path": "risk.level",
              "x-source-editable": "false",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("span", {
                "data-ve-dynamic": "true",
                "x-excluded": "true",
                style: {
                  display: "contents"
                },
                "x-file-name": "LocationPage",
                "x-line-number": "150",
                "x-column": "14",
                "x-component": "div",
                "x-id": "LocationPage_150_14_expr1",
                "x-dynamic": "true",
                "x-source-type": "state",
                "x-source-var": "loc",
                "x-source-path": "risk.level",
                "x-source-editable": "false",
                children: loc.risk.level
              }, void 0, false), " RISK \u2014 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("span", {
                "data-ve-dynamic": "true",
                "x-excluded": "true",
                style: {
                  display: "contents"
                },
                "x-file-name": "LocationPage",
                "x-line-number": "150",
                "x-column": "14",
                "x-component": "div",
                "x-id": "LocationPage_150_14_expr3",
                "x-dynamic": "true",
                "x-source-type": "state",
                "x-source-var": "loc",
                "x-source-path": "risk.score",
                "x-source-editable": "false",
                children: loc.risk.score
              }, void 0, false), "/100"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
          className: "cc-surface rounded-md p-5",
          "data-testid": "factor-panel",
          "x-file-name": "LocationPage",
          "x-line-number": "157",
          "x-column": "10",
          "x-component": "div",
          "x-id": "LocationPage_157_10",
          "x-dynamic": "true",
          "x-source-type": "computed",
          "x-source-editable": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {
            "x-file-name": "LocationPage",
            "x-line-number": "158",
            "x-column": "12",
            "x-component": "SectionTitle",
            "x-id": "LocationPage_158_12",
            "x-dynamic": "false",
            children: "Contributing Factors"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 13
          }, this), loc.risk.factors.map(f => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_3__.FactorBar, {
            name: f.name,
            value: f.contribution,
            "x-file-name": "LocationPage",
            "x-line-number": "159",
            "x-column": "41",
            "x-component": "FactorBar",
            "x-id": "LocationPage_159_41",
            "x-dynamic": "true",
            "x-source-type": "external",
            "x-source-var": "loc",
            "x-source-editable": "false",
            "x-array-var": "loc",
            "x-array-item-param": "f"
          }, f.name, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 42
          }, this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("div", {
            className: "text-[11px] cc-text-2 mt-3 font-mono2",
            "x-file-name": "LocationPage",
            "x-line-number": "160",
            "x-column": "12",
            "x-component": "div",
            "x-id": "LocationPage_160_12",
            "x-dynamic": "true",
            "x-source-type": "state",
            "x-source-var": "loc",
            "x-source-path": "risk.confidence",
            "x-source-editable": "false",
            children: ["Engine: SIMULATED_HEURISTIC_V1 \xB7 Confidence ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxDEV)("span", {
              "data-ve-dynamic": "true",
              "x-excluded": "true",
              style: {
                display: "contents"
              },
              "x-file-name": "LocationPage",
              "x-line-number": "160",
              "x-column": "12",
              "x-component": "div",
              "x-id": "LocationPage_160_12_expr1",
              "x-dynamic": "true",
              "x-source-type": "state",
              "x-source-var": "loc",
              "x-source-path": "risk.confidence",
              "x-source-editable": "false",
              children: loc.risk.confidence
            }, void 0, false), "%"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
  }, this);
}
_s(LocationPage, "v80X4L0BjnlCTYDOwvmsjQ3ZTew=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams, react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate];
});
_c = LocationPage;
var _c;
__webpack_require__.$Refresh$.register(_c, "LocationPage");

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

