/***/ "./src/pages/DataHealth.jsx"
/*!**********************************!*\
  !*** ./src/pages/DataHealth.jsx ***!
  \**********************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DataHealth)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/api */ "./src/lib/api.js");
/* harmony import */ var _components_ui_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ui-helpers */ "./src/components/ui-helpers.jsx");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/circle-alert.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/activity.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/app/frontend/src/pages/DataHealth.jsx",
  _s = __webpack_require__.$Refresh$.signature();





function DataHealth() {
  _s();
  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__.apiGet)("/data-health").then(r => setData(r.data)).catch(() => setData(false));
  }, []);
  if (!data) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_2__.Loading, {
    label: "Assessing data health\u2026",
    "x-file-name": "DataHealth",
    "x-line-number": "9",
    "x-column": "20",
    "x-component": "Loading",
    "x-id": "DataHealth_9_20",
    "x-dynamic": "true"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 21
  }, this);
  if (data === false) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: "cc-surface rounded-md p-8 cc-text",
    "x-file-name": "DataHealth",
    "x-line-number": "10",
    "x-column": "29",
    "x-component": "div",
    "x-id": "DataHealth_10_29",
    "x-dynamic": "false",
    children: "Data health unavailable offline without cache."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 30
  }, this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: "space-y-5",
    "data-testid": "data-health-page",
    "x-file-name": "DataHealth",
    "x-line-number": "13",
    "x-column": "4",
    "x-component": "div",
    "x-id": "DataHealth_13_4",
    "x-dynamic": "false",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "flex items-center gap-3",
      "x-file-name": "DataHealth",
      "x-line-number": "14",
      "x-column": "6",
      "x-component": "div",
      "x-id": "DataHealth_14_6",
      "x-dynamic": "false",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
        size: 22,
        className: "text-emerald-400",
        "x-file-name": "DataHealth",
        "x-line-number": "15",
        "x-column": "8",
        "x-component": "Activity",
        "x-id": "DataHealth_15_8",
        "x-dynamic": "false"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        "x-file-name": "DataHealth",
        "x-line-number": "16",
        "x-column": "8",
        "x-component": "div",
        "x-id": "DataHealth_16_8",
        "x-dynamic": "false",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
          className: "font-display font-bold text-xl cc-text tracking-tight",
          "x-file-name": "DataHealth",
          "x-line-number": "17",
          "x-column": "10",
          "x-component": "h1",
          "x-id": "DataHealth_17_10",
          "x-dynamic": "false",
          children: "Data Health"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "text-xs cc-text-2",
          "x-file-name": "DataHealth",
          "x-line-number": "18",
          "x-column": "10",
          "x-component": "div",
          "x-id": "DataHealth_18_10",
          "x-dynamic": "false",
          children: "Coverage, missing streams, outlier detection and prediction confidence"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-3",
      "x-file-name": "DataHealth",
      "x-line-number": "22",
      "x-column": "6",
      "x-component": "div",
      "x-id": "DataHealth_22_6",
      "x-dynamic": "false",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_2__.StatCard, {
        label: "Sensor Coverage",
        value: `${data.coverage_pct}%`,
        testId: "dh-coverage",
        "x-file-name": "DataHealth",
        "x-line-number": "23",
        "x-column": "8",
        "x-component": "StatCard",
        "x-id": "DataHealth_23_8",
        "x-dynamic": "true"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_2__.StatCard, {
        label: "Data Confidence",
        value: `${data.data_confidence}%`,
        color: data.data_confidence > 80 ? "#10B981" : "#F59E0B",
        testId: "dh-confidence",
        "x-file-name": "DataHealth",
        "x-line-number": "24",
        "x-column": "8",
        "x-component": "StatCard",
        "x-id": "DataHealth_24_8",
        "x-dynamic": "true"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_2__.StatCard, {
        label: "Online",
        value: data.online,
        color: "#10B981",
        testId: "dh-online",
        "x-file-name": "DataHealth",
        "x-line-number": "25",
        "x-column": "8",
        "x-component": "StatCard",
        "x-id": "DataHealth_25_8",
        "x-dynamic": "true"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_2__.StatCard, {
        label: "Warning",
        value: data.warning,
        color: "#F59E0B",
        testId: "dh-warning",
        "x-file-name": "DataHealth",
        "x-line-number": "26",
        "x-column": "8",
        "x-component": "StatCard",
        "x-id": "DataHealth_26_8",
        "x-dynamic": "true"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_2__.StatCard, {
        label: "Failed / Offline",
        value: data.offline,
        color: "#EF4444",
        testId: "dh-offline",
        "x-file-name": "DataHealth",
        "x-line-number": "27",
        "x-column": "8",
        "x-component": "StatCard",
        "x-id": "DataHealth_27_8",
        "x-dynamic": "true"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_2__.StatCard, {
        label: "Missing Streams",
        value: data.missing_data_streams,
        color: "#F97316",
        testId: "dh-missing",
        "x-file-name": "DataHealth",
        "x-line-number": "28",
        "x-column": "8",
        "x-component": "StatCard",
        "x-id": "DataHealth_28_8",
        "x-dynamic": "true"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "cc-surface rounded-md p-5",
      "x-file-name": "DataHealth",
      "x-line-number": "31",
      "x-column": "6",
      "x-component": "div",
      "x-id": "DataHealth_31_6",
      "x-dynamic": "false",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "flex justify-between text-xs mb-2",
        "x-file-name": "DataHealth",
        "x-line-number": "32",
        "x-column": "8",
        "x-component": "div",
        "x-id": "DataHealth_32_8",
        "x-dynamic": "false",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          className: "overline-tag",
          "x-file-name": "DataHealth",
          "x-line-number": "33",
          "x-column": "10",
          "x-component": "span",
          "x-id": "DataHealth_33_10",
          "x-dynamic": "false",
          children: "Prediction confidence from sensor availability"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          className: "font-mono2 cc-text",
          "x-file-name": "DataHealth",
          "x-line-number": "34",
          "x-column": "10",
          "x-component": "span",
          "x-id": "DataHealth_34_10",
          "x-dynamic": "true",
          "x-source-type": "state",
          "x-source-var": "data",
          "x-source-path": "data_confidence",
          "x-source-editable": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
            "data-ve-dynamic": "true",
            "x-excluded": "true",
            style: {
              display: "contents"
            },
            "x-file-name": "DataHealth",
            "x-line-number": "34",
            "x-column": "10",
            "x-component": "span",
            "x-id": "DataHealth_34_10_expr0",
            "x-dynamic": "true",
            "x-source-type": "state",
            "x-source-var": "data",
            "x-source-path": "data_confidence",
            "x-source-editable": "false",
            children: data.data_confidence
          }, void 0, false), "%"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "h-3 rounded-sm bg-zinc-800 overflow-hidden",
        "x-file-name": "DataHealth",
        "x-line-number": "36",
        "x-column": "8",
        "x-component": "div",
        "x-id": "DataHealth_36_8",
        "x-dynamic": "false",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "h-full rounded-sm transition-[width] duration-700",
          style: {
            width: `${data.data_confidence}%`,
            backgroundColor: data.data_confidence > 80 ? "#10B981" : "#F59E0B"
          },
          "x-file-name": "DataHealth",
          "x-line-number": "37",
          "x-column": "10",
          "x-component": "div",
          "x-id": "DataHealth_37_10",
          "x-dynamic": "false"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "text-xs cc-text-2 mt-2",
        "x-file-name": "DataHealth",
        "x-line-number": "40",
        "x-column": "8",
        "x-component": "div",
        "x-id": "DataHealth_40_8",
        "x-dynamic": "true",
        "x-source-type": "computed",
        "x-source-editable": "false",
        children: ["Last synchronization: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          "data-ve-dynamic": "true",
          "x-excluded": "true",
          style: {
            display: "contents"
          },
          "x-file-name": "DataHealth",
          "x-line-number": "40",
          "x-column": "8",
          "x-component": "div",
          "x-id": "DataHealth_40_8_expr1",
          "x-dynamic": "true",
          "x-source-type": "computed",
          "x-source-editable": "false",
          children: new Date(data.last_sync).toLocaleString()
        }, void 0, false)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "cc-surface rounded-md p-5",
      "x-file-name": "DataHealth",
      "x-line-number": "43",
      "x-column": "6",
      "x-component": "div",
      "x-id": "DataHealth_43_6",
      "x-dynamic": "true",
      "x-source-type": "computed",
      "x-source-editable": "false",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
        "x-file-name": "DataHealth",
        "x-line-number": "44",
        "x-column": "8",
        "x-component": "SectionTitle",
        "x-id": "DataHealth_44_8",
        "x-dynamic": "false",
        children: "Outliers & Issues"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this), data.issues.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "text-sm text-emerald-400",
        "x-file-name": "DataHealth",
        "x-line-number": "46",
        "x-column": "10",
        "x-component": "div",
        "x-id": "DataHealth_46_10",
        "x-dynamic": "false",
        children: "No outliers detected in the current window."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "space-y-2",
        "data-testid": "dh-issues-list",
        "x-file-name": "DataHealth",
        "x-line-number": "48",
        "x-column": "10",
        "x-component": "div",
        "x-id": "DataHealth_48_10",
        "x-dynamic": "true",
        "x-source-type": "computed",
        "x-source-editable": "false",
        children: data.issues.map((i, idx) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "flex items-center gap-3 cc-elevated rounded-md p-3",
          "x-file-name": "DataHealth",
          "x-line-number": "50",
          "x-column": "14",
          "x-component": "div",
          "x-id": "DataHealth_50_14",
          "x-dynamic": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
            size: 15,
            className: "text-amber-400 shrink-0",
            "x-file-name": "DataHealth",
            "x-line-number": "51",
            "x-column": "16",
            "x-component": "AlertCircle",
            "x-id": "DataHealth_51_16",
            "x-dynamic": "true",
            "x-source-type": "external",
            "x-source-var": "data",
            "x-source-editable": "false",
            "x-array-var": "data",
            "x-array-item-param": "i"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
            className: "font-mono2 text-sm cc-text",
            "x-file-name": "DataHealth",
            "x-line-number": "52",
            "x-column": "16",
            "x-component": "span",
            "x-id": "DataHealth_52_16",
            "x-dynamic": "true",
            "x-source-type": "static-imported",
            "x-source-var": "data",
            "x-source-path": "issues.sensor",
            "x-source-editable": "false",
            "x-array-var": "data",
            "x-array-item-param": "i",
            children: i.sensor
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
            className: "text-xs cc-text-2 flex-1",
            "x-file-name": "DataHealth",
            "x-line-number": "53",
            "x-column": "16",
            "x-component": "span",
            "x-id": "DataHealth_53_16",
            "x-dynamic": "true",
            "x-source-type": "static-imported",
            "x-source-var": "data",
            "x-source-path": "issues.location",
            "x-source-editable": "false",
            "x-array-var": "data",
            "x-array-item-param": "i",
            children: i.location
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
            className: "text-xs text-amber-400",
            "x-file-name": "DataHealth",
            "x-line-number": "54",
            "x-column": "16",
            "x-component": "span",
            "x-id": "DataHealth_54_16",
            "x-dynamic": "true",
            "x-source-type": "static-imported",
            "x-source-var": "data",
            "x-source-path": "issues.issue",
            "x-source-editable": "false",
            "x-array-var": "data",
            "x-array-item-param": "i",
            children: i.issue
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 17
          }, this)]
        }, idx, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 15
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "text-[11px] cc-text-2 mt-4 font-mono2",
        "x-file-name": "DataHealth",
        "x-line-number": "59",
        "x-column": "8",
        "x-component": "div",
        "x-id": "DataHealth_59_8",
        "x-dynamic": "true",
        "x-source-type": "state",
        "x-source-var": "data",
        "x-source-path": "note",
        "x-source-editable": "false",
        children: data.note
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
_s(DataHealth, "fQZRxy/+nAZ7NLS1X4dVhrlp8Go=");
_c = DataHealth;
var _c;
__webpack_require__.$Refresh$.register(_c, "DataHealth");

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

