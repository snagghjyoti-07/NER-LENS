/***/ "./src/pages/Notifications.jsx"
/*!*************************************!*\
  !*** ./src/pages/Notifications.jsx ***!
  \*************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Notifications)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4N6VE7H7.mjs");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/api */ "./src/lib/api.js");
/* harmony import */ var _components_ui_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ui-helpers */ "./src/components/ui-helpers.jsx");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/bell.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/app/frontend/src/pages/Notifications.jsx",
  _s = __webpack_require__.$Refresh$.signature();






const SEVERITIES = [{
  key: "ALL",
  label: "All",
  color: "#9CA3AF"
}, {
  key: "CRITICAL",
  label: "Critical",
  color: "#EF4444"
}, {
  key: "HIGH",
  label: "High",
  color: "#F97316"
}, {
  key: "MODERATE",
  label: "Moderate",
  color: "#F59E0B"
}, {
  key: "INFO",
  label: "Information",
  color: "#38BDF8"
}];
function Notifications() {
  _s();
  const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [sev, setSev] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("ALL");
  const [locFilter, setLocFilter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const q = sev === "ALL" ? "" : `?severity=${sev}`;
    (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__.apiGet)(`/notifications${q}`).then(r => setItems(r.data)).catch(() => setItems([]));
  }, [sev]);
  if (!items) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_3__.Loading, {
    label: "Loading notifications\u2026",
    "x-file-name": "Notifications",
    "x-line-number": "26",
    "x-column": "21",
    "x-component": "Loading",
    "x-id": "Notifications_26_21",
    "x-dynamic": "true"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 22
  }, this);
  const filtered = items.filter(i => {
    var _i$location_name;
    return !locFilter || ((_i$location_name = i.location_name) === null || _i$location_name === void 0 ? void 0 : _i$location_name.toLowerCase().includes(locFilter.toLowerCase()));
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: "space-y-5",
    "data-testid": "notifications-page",
    "x-file-name": "Notifications",
    "x-line-number": "30",
    "x-column": "4",
    "x-component": "div",
    "x-id": "Notifications_30_4",
    "x-dynamic": "true",
    "x-source-type": "computed",
    "x-source-editable": "false",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "flex items-center gap-3",
      "x-file-name": "Notifications",
      "x-line-number": "31",
      "x-column": "6",
      "x-component": "div",
      "x-id": "Notifications_31_6",
      "x-dynamic": "false",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
        size: 22,
        className: "text-sky-400",
        "x-file-name": "Notifications",
        "x-line-number": "32",
        "x-column": "8",
        "x-component": "Bell",
        "x-id": "Notifications_32_8",
        "x-dynamic": "false"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
        className: "font-display font-bold text-xl cc-text tracking-tight",
        "x-file-name": "Notifications",
        "x-line-number": "33",
        "x-column": "8",
        "x-component": "h1",
        "x-id": "Notifications_33_8",
        "x-dynamic": "false",
        children: "Notification Center"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "flex gap-2 flex-wrap items-center",
      "x-file-name": "Notifications",
      "x-line-number": "35",
      "x-column": "6",
      "x-component": "div",
      "x-id": "Notifications_35_6",
      "x-dynamic": "true",
      "x-source-type": "computed",
      "x-source-editable": "false",
      children: [SEVERITIES.map(s => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
        onClick: () => setSev(s.key),
        "data-testid": `notif-filter-${s.key.toLowerCase()}`,
        className: `text-xs px-3 py-1.5 rounded-sm font-mono2 transition-colors border ${sev === s.key ? "text-white border-transparent" : "cc-text-2 border-zinc-700 hover:text-white"}`,
        style: sev === s.key ? {
          backgroundColor: s.color
        } : {},
        "x-file-name": "Notifications",
        "x-line-number": "37",
        "x-column": "10",
        "x-component": "button",
        "x-id": "Notifications_37_10",
        "x-dynamic": "true",
        "x-source-type": "static-imported",
        "x-source-var": "SEVERITIES",
        "x-source-file-abs": "/app/frontend/src/pages/Notifications.jsx",
        "x-source-line": "7",
        "x-source-path": "label",
        "x-source-editable": "true",
        "x-array-var": "SEVERITIES",
        "x-array-line": "7",
        "x-array-item-param": "s",
        children: s.label
      }, s.key, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }, this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
        placeholder: "Filter by location\u2026",
        value: locFilter,
        onChange: e => setLocFilter(e.target.value),
        "data-testid": "notif-location-filter",
        className: "ml-auto bg-zinc-900 border border-zinc-700 rounded-sm px-3 py-1.5 text-xs cc-text focus:border-emerald-500 outline-none",
        "x-file-name": "Notifications",
        "x-line-number": "43",
        "x-column": "8",
        "x-component": "input",
        "x-id": "Notifications_43_8",
        "x-dynamic": "false"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), filtered.length === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_3__.EmptyState, {
      message: "No notifications for this filter.",
      "x-file-name": "Notifications",
      "x-line-number": "47",
      "x-column": "32",
      "x-component": "EmptyState",
      "x-id": "Notifications_47_32",
      "x-dynamic": "true"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 33
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "space-y-2",
      "x-file-name": "Notifications",
      "x-line-number": "48",
      "x-column": "6",
      "x-component": "div",
      "x-id": "Notifications_48_6",
      "x-dynamic": "true",
      "x-source-type": "computed",
      "x-source-editable": "false",
      children: filtered.map(n => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
        onClick: () => navigate(`/location/${n.location_id}`),
        "data-testid": `notif-${n.id}`,
        className: "w-full text-left cc-surface rounded-md p-4 flex items-center gap-4 hover:border-zinc-600 transition-colors",
        "x-file-name": "Notifications",
        "x-line-number": "50",
        "x-column": "10",
        "x-component": "button",
        "x-id": "Notifications_50_10",
        "x-dynamic": "false",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_3__.RiskBadge, {
          level: n.severity === "INFO" ? "LOW" : n.severity,
          "x-file-name": "Notifications",
          "x-line-number": "52",
          "x-column": "12",
          "x-component": "RiskBadge",
          "x-id": "Notifications_52_12",
          "x-dynamic": "true",
          "x-source-type": "external",
          "x-source-var": "filtered",
          "x-source-editable": "false",
          "x-array-var": "filtered",
          "x-array-item-param": "n"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "flex-1 min-w-0",
          "x-file-name": "Notifications",
          "x-line-number": "53",
          "x-column": "12",
          "x-component": "div",
          "x-id": "Notifications_53_12",
          "x-dynamic": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "text-sm cc-text font-semibold truncate",
            "x-file-name": "Notifications",
            "x-line-number": "54",
            "x-column": "14",
            "x-component": "div",
            "x-id": "Notifications_54_14",
            "x-dynamic": "true",
            "x-source-type": "static-imported",
            "x-source-var": "filtered",
            "x-source-path": "location_name",
            "x-source-editable": "false",
            "x-array-var": "filtered",
            "x-array-item-param": "n",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
              "data-ve-dynamic": "true",
              "x-excluded": "true",
              style: {
                display: "contents"
              },
              "x-file-name": "Notifications",
              "x-line-number": "54",
              "x-column": "14",
              "x-component": "div",
              "x-id": "Notifications_54_14_expr0",
              "x-dynamic": "true",
              "x-source-type": "static-imported",
              "x-source-var": "filtered",
              "x-source-path": "location_name",
              "x-source-editable": "false",
              "x-array-var": "filtered",
              "x-array-item-param": "n",
              children: n.location_name
            }, void 0, false), " \u2014 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
              "data-ve-dynamic": "true",
              "x-excluded": "true",
              style: {
                display: "contents"
              },
              "x-file-name": "Notifications",
              "x-line-number": "54",
              "x-column": "14",
              "x-component": "div",
              "x-id": "Notifications_54_14_expr2",
              "x-dynamic": "true",
              "x-source-type": "static-imported",
              "x-source-var": "filtered",
              "x-source-path": "trigger",
              "x-source-editable": "false",
              "x-array-var": "filtered",
              "x-array-item-param": "n",
              children: n.trigger
            }, void 0, false)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "text-xs cc-text-2 font-mono2 mt-0.5",
            "x-file-name": "Notifications",
            "x-line-number": "55",
            "x-column": "14",
            "x-component": "div",
            "x-id": "Notifications_55_14",
            "x-dynamic": "true",
            "x-source-type": "computed",
            "x-source-editable": "false",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
              "data-ve-dynamic": "true",
              "x-excluded": "true",
              style: {
                display: "contents"
              },
              "x-file-name": "Notifications",
              "x-line-number": "55",
              "x-column": "14",
              "x-component": "div",
              "x-id": "Notifications_55_14_expr0",
              "x-dynamic": "true",
              "x-source-type": "computed",
              "x-source-editable": "false",
              children: new Date(n.timestamp).toLocaleString()
            }, void 0, false), " \xB7 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
              "data-ve-dynamic": "true",
              "x-excluded": "true",
              style: {
                display: "contents"
              },
              "x-file-name": "Notifications",
              "x-line-number": "55",
              "x-column": "14",
              "x-component": "div",
              "x-id": "Notifications_55_14_expr2",
              "x-dynamic": "true",
              "x-source-type": "static-imported",
              "x-source-var": "filtered",
              "x-source-path": "status",
              "x-source-editable": "false",
              "x-array-var": "filtered",
              "x-array-item-param": "n",
              children: n.status
            }, void 0, false)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 13
        }, this)]
      }, n.id, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, this);
}
_s(Notifications, "/IspiLTwJoC839micnn2wl4uCG4=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate];
});
_c = Notifications;
var _c;
__webpack_require__.$Refresh$.register(_c, "Notifications");

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

