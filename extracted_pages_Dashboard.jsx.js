/***/ "./src/pages/Dashboard.jsx"
/*!*********************************!*\
  !*** ./src/pages/Dashboard.jsx ***!
  \*********************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Dashboard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4N6VE7H7.mjs");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/api */ "./src/lib/api.js");
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/AppContext */ "./src/context/AppContext.jsx");
/* harmony import */ var _components_RiskMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/RiskMap */ "./src/components/RiskMap.jsx");
/* harmony import */ var _components_ui_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ui-helpers */ "./src/components/ui-helpers.jsx");
/* harmony import */ var _lib_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/i18n */ "./src/lib/i18n.js");
/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sonner */ "./node_modules/sonner/dist/index.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/flask-conical.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/rotate-ccw.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/wifi.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/app/frontend/src/pages/Dashboard.jsx",
  _s = __webpack_require__.$Refresh$.signature();










const SCENARIOS = [{
  n: 1,
  label: "Normal rainfall → Low",
  color: "#10B981"
}, {
  n: 2,
  label: "Heavy rainfall → Moderate",
  color: "#F59E0B"
}, {
  n: 3,
  label: "Heavy rain + saturated soil → High",
  color: "#F97316"
}, {
  n: 4,
  label: "Rain + soil + ground movement → Critical",
  color: "#EF4444"
}];
function Dashboard() {
  _s();
  const [stats, setStats] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [locations, setLocations] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [sensors, setSensors] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [evac, setEvac] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [alerts, setAlerts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [fromCache, setFromCache] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [scenarioBusy, setScenarioBusy] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [params] = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useSearchParams)();
  const demoOpen = params.get("demo") === "1";
  const {
    setEmergency,
    network,
    user
  } = (0,_context_AppContext__WEBPACK_IMPORTED_MODULE_3__.useApp)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  const load = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    try {
      const [s, l, sen, ev, al] = await Promise.all([(0,_lib_api__WEBPACK_IMPORTED_MODULE_2__.apiGet)("/stats"), (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__.apiGet)("/locations"), (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__.apiGet)("/sensors"), (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__.apiGet)("/evacuation"), (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__.apiGet)("/alerts")]);
      setStats(s.data);
      setLocations(l.data);
      setSensors(sen.data);
      setEvac(ev.data);
      setAlerts(al.data);
      setFromCache(s.fromCache || l.fromCache);
    } catch (e) {
      sonner__WEBPACK_IMPORTED_MODULE_7__.toast.error("Could not load dashboard data");
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    load();
    const id = setInterval(load, 30000);
    return () => clearInterval(id);
  }, [load]);
  const runScenario = async n => {
    setScenarioBusy(n);
    try {
      const res = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__.apiPost)(`/demo/scenario/${n}`, {});
      sonner__WEBPACK_IMPORTED_MODULE_7__.toast.success(`Scenario ${n} applied — ${res.label}. ${res.location.name}: ${res.location.risk.level} (${res.location.risk.score}/100)`);
      await load();
      if (res.alert) {
        if (res.location.risk.level === "CRITICAL") {
          setEmergency({
            location: res.alert.location_name,
            score: res.alert.risk_score,
            source: "demo"
          });
        } else {
          sonner__WEBPACK_IMPORTED_MODULE_7__.toast.warning(`ALERT GENERATED: ${res.alert.location_name} — ${res.alert.severity}`);
        }
      }
    } catch (e) {
      sonner__WEBPACK_IMPORTED_MODULE_7__.toast.error("Scenario failed — are you online?");
    } finally {
      setScenarioBusy(0);
    }
  };
  const resetDemo = async () => {
    try {
      await (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__.apiPost)("/demo/reset", {});
      sonner__WEBPACK_IMPORTED_MODULE_7__.toast.success("Demo data reset");
      await load();
    } catch (e) {
      sonner__WEBPACK_IMPORTED_MODULE_7__.toast.error("Reset failed");
    }
  };
  if (!stats) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_5__.Loading, {
    label: "Synchronizing monitoring network\u2026",
    "x-file-name": "Dashboard",
    "x-line-number": "67",
    "x-column": "21",
    "x-component": "Loading",
    "x-id": "Dashboard_67_21",
    "x-dynamic": "true"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 22
  }, this);
  const activeAlerts = alerts.filter(a => ["ACTIVE", "ESCALATED", "ACKNOWLEDGED"].includes(a.status));
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
    className: "space-y-5",
    "data-testid": "dashboard-page",
    "x-file-name": "Dashboard",
    "x-line-number": "71",
    "x-column": "4",
    "x-component": "div",
    "x-id": "Dashboard_71_4",
    "x-dynamic": "true",
    "x-source-type": "computed",
    "x-source-editable": "false",
    children: [fromCache && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
      className: "cc-surface rounded-md px-4 py-2.5 text-xs text-amber-400 border-amber-500/40 flex items-center gap-2",
      "data-testid": "cache-notice",
      "x-file-name": "Dashboard",
      "x-line-number": "73",
      "x-column": "8",
      "x-component": "div",
      "x-id": "Dashboard_73_8",
      "x-dynamic": "true",
      "x-source-type": "computed",
      "x-source-editable": "false",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_10__["default"], {
        size: 14,
        "x-file-name": "Dashboard",
        "x-line-number": "74",
        "x-column": "10",
        "x-component": "Wifi",
        "x-id": "Dashboard_74_10",
        "x-dynamic": "false"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 11
      }, this), " Offline Mode \u2014 Showing last synchronized data (", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("span", {
        "data-ve-dynamic": "true",
        "x-excluded": "true",
        style: {
          display: "contents"
        },
        "x-file-name": "Dashboard",
        "x-line-number": "73",
        "x-column": "8",
        "x-component": "div",
        "x-id": "Dashboard_73_8_expr3",
        "x-dynamic": "true",
        "x-source-type": "computed",
        "x-source-editable": "false",
        children: stats.last_sync ? new Date(stats.last_sync).toLocaleString() : "cached"
      }, void 0, false), ")"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
      className: "grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-3",
      "x-file-name": "Dashboard",
      "x-line-number": "78",
      "x-column": "6",
      "x-component": "div",
      "x-id": "Dashboard_78_6",
      "x-dynamic": "false",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_5__.StatCard, {
        label: "Monitored Zones",
        value: stats.total_zones,
        testId: "stat-total-zones",
        "x-file-name": "Dashboard",
        "x-line-number": "79",
        "x-column": "8",
        "x-component": "StatCard",
        "x-id": "Dashboard_79_8",
        "x-dynamic": "true"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_5__.StatCard, {
        label: "Low Risk",
        value: stats.levels.LOW,
        color: _lib_i18n__WEBPACK_IMPORTED_MODULE_6__.RISK_COLORS.LOW,
        testId: "stat-low",
        "x-file-name": "Dashboard",
        "x-line-number": "80",
        "x-column": "8",
        "x-component": "StatCard",
        "x-id": "Dashboard_80_8",
        "x-dynamic": "true"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_5__.StatCard, {
        label: "Moderate",
        value: stats.levels.MODERATE,
        color: _lib_i18n__WEBPACK_IMPORTED_MODULE_6__.RISK_COLORS.MODERATE,
        testId: "stat-moderate",
        "x-file-name": "Dashboard",
        "x-line-number": "81",
        "x-column": "8",
        "x-component": "StatCard",
        "x-id": "Dashboard_81_8",
        "x-dynamic": "true"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_5__.StatCard, {
        label: "High Risk",
        value: stats.levels.HIGH,
        color: _lib_i18n__WEBPACK_IMPORTED_MODULE_6__.RISK_COLORS.HIGH,
        testId: "stat-high",
        "x-file-name": "Dashboard",
        "x-line-number": "82",
        "x-column": "8",
        "x-component": "StatCard",
        "x-id": "Dashboard_82_8",
        "x-dynamic": "true"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_5__.StatCard, {
        label: "Critical",
        value: stats.levels.CRITICAL,
        color: _lib_i18n__WEBPACK_IMPORTED_MODULE_6__.RISK_COLORS.CRITICAL,
        testId: "stat-critical",
        "x-file-name": "Dashboard",
        "x-line-number": "83",
        "x-column": "8",
        "x-component": "StatCard",
        "x-id": "Dashboard_83_8",
        "x-dynamic": "true"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_5__.StatCard, {
        label: "Active Warnings",
        value: stats.active_warnings,
        testId: "stat-warnings",
        "x-file-name": "Dashboard",
        "x-line-number": "84",
        "x-column": "8",
        "x-component": "StatCard",
        "x-id": "Dashboard_84_8",
        "x-dynamic": "true"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_5__.StatCard, {
        label: "Sensors",
        value: `${stats.sensors_online}/${stats.sensors_total}`,
        sub: "online",
        testId: "stat-sensors",
        "x-file-name": "Dashboard",
        "x-line-number": "85",
        "x-column": "8",
        "x-component": "StatCard",
        "x-id": "Dashboard_85_8",
        "x-dynamic": "true"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_5__.StatCard, {
        label: "Last Sync",
        value: new Date(stats.last_sync).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        }),
        testId: "stat-last-sync",
        "x-file-name": "Dashboard",
        "x-line-number": "86",
        "x-column": "8",
        "x-component": "StatCard",
        "x-id": "Dashboard_86_8",
        "x-dynamic": "true"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, this), (demoOpen || true) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
      className: "cc-surface rounded-md p-4 border-amber-500/30",
      "data-testid": "demo-panel",
      "x-file-name": "Dashboard",
      "x-line-number": "90",
      "x-column": "8",
      "x-component": "div",
      "x-id": "Dashboard_90_8",
      "x-dynamic": "false",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
        className: "flex items-center gap-2 mb-3",
        "x-file-name": "Dashboard",
        "x-line-number": "91",
        "x-column": "10",
        "x-component": "div",
        "x-id": "Dashboard_91_10",
        "x-dynamic": "false",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
          size: 16,
          className: "text-amber-400",
          "x-file-name": "Dashboard",
          "x-line-number": "92",
          "x-column": "12",
          "x-component": "FlaskConical",
          "x-id": "Dashboard_92_12",
          "x-dynamic": "false"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("span", {
          className: "font-display font-semibold text-amber-400 text-sm",
          "x-file-name": "Dashboard",
          "x-line-number": "93",
          "x-column": "12",
          "x-component": "span",
          "x-id": "Dashboard_93_12",
          "x-dynamic": "false",
          children: "SIH DEMO MODE \u2014 Scenario Simulator (Mangan Ridge, Sikkim)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("button", {
          onClick: resetDemo,
          "data-testid": "demo-reset-btn",
          className: "ml-auto flex items-center gap-1 text-xs cc-text-2 hover:text-white border border-zinc-700 rounded-sm px-2 py-1 transition-colors",
          "x-file-name": "Dashboard",
          "x-line-number": "94",
          "x-column": "12",
          "x-component": "button",
          "x-id": "Dashboard_94_12",
          "x-dynamic": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_9__["default"], {
            size: 12,
            "x-file-name": "Dashboard",
            "x-line-number": "95",
            "x-column": "14",
            "x-component": "RotateCcw",
            "x-id": "Dashboard_95_14",
            "x-dynamic": "false"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 15
          }, this), " Reset"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2",
        "x-file-name": "Dashboard",
        "x-line-number": "98",
        "x-column": "10",
        "x-component": "div",
        "x-id": "Dashboard_98_10",
        "x-dynamic": "true",
        "x-source-type": "computed",
        "x-source-editable": "false",
        children: SCENARIOS.map(s => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("button", {
          onClick: () => runScenario(s.n),
          disabled: scenarioBusy > 0 || network === "offline",
          "data-testid": `demo-scenario-${s.n}`,
          className: "text-left text-xs px-3 py-2.5 rounded-md border transition-all hover:scale-[1.02] disabled:opacity-50",
          style: {
            borderColor: `${s.color}66`,
            color: s.color,
            backgroundColor: `${s.color}0F`
          },
          "x-file-name": "Dashboard",
          "x-line-number": "100",
          "x-column": "14",
          "x-component": "button",
          "x-id": "Dashboard_100_14",
          "x-dynamic": "true",
          "x-source-type": "static-imported",
          "x-source-var": "SCENARIOS",
          "x-source-file-abs": "/app/frontend/src/pages/Dashboard.jsx",
          "x-source-line": "11",
          "x-source-path": "label",
          "x-source-editable": "true",
          "x-array-var": "SCENARIOS",
          "x-array-line": "11",
          "x-array-item-param": "s",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("span", {
            className: "font-mono2 font-bold",
            "x-file-name": "Dashboard",
            "x-line-number": "104",
            "x-column": "16",
            "x-component": "span",
            "x-id": "Dashboard_104_16",
            "x-dynamic": "true",
            "x-source-type": "static-imported",
            "x-source-var": "SCENARIOS",
            "x-source-file-abs": "/app/frontend/src/pages/Dashboard.jsx",
            "x-source-line": "11",
            "x-source-path": "n",
            "x-source-editable": "true",
            "x-array-var": "SCENARIOS",
            "x-array-line": "11",
            "x-array-item-param": "s",
            children: ["S", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("span", {
              "data-ve-dynamic": "true",
              "x-excluded": "true",
              style: {
                display: "contents"
              },
              "x-file-name": "Dashboard",
              "x-line-number": "104",
              "x-column": "16",
              "x-component": "span",
              "x-id": "Dashboard_104_16_expr1",
              "x-dynamic": "true",
              "x-source-type": "static-imported",
              "x-source-var": "SCENARIOS",
              "x-source-file-abs": "/app/frontend/src/pages/Dashboard.jsx",
              "x-source-line": "11",
              "x-source-path": "n",
              "x-source-editable": "true",
              "x-array-var": "SCENARIOS",
              "x-array-line": "11",
              "x-array-item-param": "s",
              children: s.n
            }, void 0, false)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 17
          }, this), " \xB7 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("span", {
            "data-ve-dynamic": "true",
            "x-excluded": "true",
            style: {
              display: "contents"
            },
            "x-file-name": "Dashboard",
            "x-line-number": "100",
            "x-column": "14",
            "x-component": "button",
            "x-id": "Dashboard_100_14_expr3",
            "x-dynamic": "true",
            "x-source-type": "static-imported",
            "x-source-var": "SCENARIOS",
            "x-source-file-abs": "/app/frontend/src/pages/Dashboard.jsx",
            "x-source-line": "11",
            "x-source-path": "label",
            "x-source-editable": "true",
            "x-array-var": "SCENARIOS",
            "x-array-line": "11",
            "x-array-item-param": "s",
            children: s.label
          }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("span", {
            "data-ve-dynamic": "true",
            "x-excluded": "true",
            style: {
              display: "contents"
            },
            "x-file-name": "Dashboard",
            "x-line-number": "100",
            "x-column": "14",
            "x-component": "button",
            "x-id": "Dashboard_100_14_expr5",
            "x-dynamic": "true",
            "x-source-type": "computed",
            "x-source-editable": "false",
            children: scenarioBusy === s.n && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("span", {
              className: "block mt-1 animate-pulse",
              "x-file-name": "Dashboard",
              "x-line-number": "105",
              "x-column": "41",
              "x-component": "span",
              "x-id": "Dashboard_105_41",
              "x-dynamic": "false",
              children: "Applying\u2026"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 42
            }, this)
          }, void 0, false)]
        }, s.n, true, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 15
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
      className: "grid grid-cols-1 lg:grid-cols-12 gap-4",
      "x-file-name": "Dashboard",
      "x-line-number": "112",
      "x-column": "6",
      "x-component": "div",
      "x-id": "Dashboard_112_6",
      "x-dynamic": "false",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
        className: "lg:col-span-8",
        "x-file-name": "Dashboard",
        "x-line-number": "113",
        "x-column": "8",
        "x-component": "div",
        "x-id": "Dashboard_113_8",
        "x-dynamic": "false",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_5__.SectionTitle, {
          right: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("span", {
            className: "text-xs cc-text-2 font-mono2",
            "x-file-name": "Dashboard",
            "x-line-number": "114",
            "x-column": "31",
            "x-component": "span",
            "x-id": "Dashboard_114_31",
            "x-dynamic": "false",
            children: "OSM \xB7 risk zones \xB7 sensors \xB7 evacuation"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 32
          }, this),
          "x-file-name": "Dashboard",
          "x-line-number": "114",
          "x-column": "10",
          "x-component": "SectionTitle",
          "x-id": "Dashboard_114_10",
          "x-dynamic": "false",
          children: "Live Risk Map \u2014 North Eastern Region"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_RiskMap__WEBPACK_IMPORTED_MODULE_4__["default"], {
          locations: locations,
          sensors: sensors,
          evac: evac,
          onSelectLocation: loc => navigate(`/location/${loc.id}`),
          "x-file-name": "Dashboard",
          "x-line-number": "117",
          "x-column": "10",
          "x-component": "RiskMap",
          "x-id": "Dashboard_117_10",
          "x-dynamic": "true",
          "x-excluded": "true"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
          className: "flex gap-4 mt-2 text-[11px] cc-text-2 flex-wrap",
          "data-testid": "map-legend",
          "x-file-name": "Dashboard",
          "x-line-number": "119",
          "x-column": "10",
          "x-component": "div",
          "x-id": "Dashboard_119_10",
          "x-dynamic": "true",
          "x-source-type": "computed",
          "x-source-editable": "false",
          children: [Object.entries(_lib_i18n__WEBPACK_IMPORTED_MODULE_6__.RISK_COLORS).map(([k, v]) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("span", {
            className: "flex items-center gap-1.5",
            "x-file-name": "Dashboard",
            "x-line-number": "121",
            "x-column": "14",
            "x-component": "span",
            "x-id": "Dashboard_121_14",
            "x-dynamic": "true",
            "x-source-type": "unknown",
            "x-source-var": "k",
            "x-source-editable": "false",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("span", {
              className: "w-2.5 h-2.5 rounded-full",
              style: {
                backgroundColor: v
              },
              "x-file-name": "Dashboard",
              "x-line-number": "121",
              "x-column": "66",
              "x-component": "span",
              "x-id": "Dashboard_121_66",
              "x-dynamic": "false"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 67
            }, this), k]
          }, k, true, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 15
          }, this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("span", {
            className: "flex items-center gap-1.5",
            "x-file-name": "Dashboard",
            "x-line-number": "123",
            "x-column": "12",
            "x-component": "span",
            "x-id": "Dashboard_123_12",
            "x-dynamic": "false",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("span", {
              className: "w-2 h-2 rounded-full bg-sky-400",
              "x-file-name": "Dashboard",
              "x-line-number": "123",
              "x-column": "56",
              "x-component": "span",
              "x-id": "Dashboard_123_56",
              "x-dynamic": "false"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 57
            }, this), "Sensor"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("span", {
            className: "flex items-center gap-1.5",
            "x-file-name": "Dashboard",
            "x-line-number": "124",
            "x-column": "12",
            "x-component": "span",
            "x-id": "Dashboard_124_12",
            "x-dynamic": "false",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("span", {
              className: "w-2.5 h-2.5 rounded-full bg-violet-400",
              "x-file-name": "Dashboard",
              "x-line-number": "124",
              "x-column": "56",
              "x-component": "span",
              "x-id": "Dashboard_124_56",
              "x-dynamic": "false"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 57
            }, this), "Evacuation"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("span", {
            className: "flex items-center gap-1.5",
            "x-file-name": "Dashboard",
            "x-line-number": "125",
            "x-column": "12",
            "x-component": "span",
            "x-id": "Dashboard_125_12",
            "x-dynamic": "false",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("span", {
              className: "w-2.5 h-2.5 rounded-full bg-yellow-400",
              "x-file-name": "Dashboard",
              "x-line-number": "125",
              "x-column": "56",
              "x-component": "span",
              "x-id": "Dashboard_125_56",
              "x-dynamic": "false"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 57
            }, this), "Blocked Road"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
        className: "lg:col-span-4 space-y-4",
        "x-file-name": "Dashboard",
        "x-line-number": "129",
        "x-column": "8",
        "x-component": "div",
        "x-id": "Dashboard_129_8",
        "x-dynamic": "false",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
          className: "cc-surface rounded-md p-4",
          "x-file-name": "Dashboard",
          "x-line-number": "130",
          "x-column": "10",
          "x-component": "div",
          "x-id": "Dashboard_130_10",
          "x-dynamic": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_5__.SectionTitle, {
            "x-file-name": "Dashboard",
            "x-line-number": "131",
            "x-column": "12",
            "x-component": "SectionTitle",
            "x-id": "Dashboard_131_12",
            "x-dynamic": "false",
            children: "Active Warnings"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
            className: "space-y-2 max-h-64 overflow-y-auto",
            "data-testid": "dashboard-alerts-list",
            "x-file-name": "Dashboard",
            "x-line-number": "132",
            "x-column": "12",
            "x-component": "div",
            "x-id": "Dashboard_132_12",
            "x-dynamic": "true",
            "x-source-type": "computed",
            "x-source-editable": "false",
            children: [activeAlerts.length === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
              className: "text-xs cc-text-2",
              "x-file-name": "Dashboard",
              "x-line-number": "133",
              "x-column": "44",
              "x-component": "div",
              "x-id": "Dashboard_133_44",
              "x-dynamic": "false",
              children: "No active warnings."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 45
            }, this), activeAlerts.map(a => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("button", {
              onClick: () => navigate(`/location/${a.location_id}`),
              "data-testid": `dash-alert-${a.id}`,
              className: "w-full text-left cc-elevated rounded-md p-3 hover:border-zinc-600 transition-colors",
              "x-file-name": "Dashboard",
              "x-line-number": "135",
              "x-column": "16",
              "x-component": "button",
              "x-id": "Dashboard_135_16",
              "x-dynamic": "false",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
                className: "flex items-center justify-between gap-2",
                "x-file-name": "Dashboard",
                "x-line-number": "137",
                "x-column": "18",
                "x-component": "div",
                "x-id": "Dashboard_137_18",
                "x-dynamic": "false",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("span", {
                  className: "text-sm font-semibold cc-text truncate",
                  "x-file-name": "Dashboard",
                  "x-line-number": "138",
                  "x-column": "20",
                  "x-component": "span",
                  "x-id": "Dashboard_138_20",
                  "x-dynamic": "true",
                  "x-source-type": "static-imported",
                  "x-source-var": "activeAlerts",
                  "x-source-path": "location_name",
                  "x-source-editable": "false",
                  "x-array-var": "activeAlerts",
                  "x-array-item-param": "a",
                  children: a.location_name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 138,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_5__.RiskBadge, {
                  level: a.severity === "INFO" ? "LOW" : a.severity,
                  "x-file-name": "Dashboard",
                  "x-line-number": "139",
                  "x-column": "20",
                  "x-component": "RiskBadge",
                  "x-id": "Dashboard_139_20",
                  "x-dynamic": "true",
                  "x-source-type": "external",
                  "x-source-var": "activeAlerts",
                  "x-source-editable": "false",
                  "x-array-var": "activeAlerts",
                  "x-array-item-param": "a"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
                className: "text-xs cc-text-2 mt-1 line-clamp-2",
                "x-file-name": "Dashboard",
                "x-line-number": "141",
                "x-column": "18",
                "x-component": "div",
                "x-id": "Dashboard_141_18",
                "x-dynamic": "true",
                "x-source-type": "static-imported",
                "x-source-var": "activeAlerts",
                "x-source-path": "trigger",
                "x-source-editable": "false",
                "x-array-var": "activeAlerts",
                "x-array-item-param": "a",
                children: a.trigger
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 141,
                columnNumber: 19
              }, this)]
            }, a.id, true, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 17
            }, this))]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
          className: "cc-surface rounded-md p-4",
          "x-file-name": "Dashboard",
          "x-line-number": "146",
          "x-column": "10",
          "x-component": "div",
          "x-id": "Dashboard_146_10",
          "x-dynamic": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_5__.SectionTitle, {
            "x-file-name": "Dashboard",
            "x-line-number": "147",
            "x-column": "12",
            "x-component": "SectionTitle",
            "x-id": "Dashboard_147_12",
            "x-dynamic": "false",
            children: "Highest Risk Zones"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
            className: "space-y-1.5",
            "data-testid": "dashboard-toprisk-list",
            "x-file-name": "Dashboard",
            "x-line-number": "148",
            "x-column": "12",
            "x-component": "div",
            "x-id": "Dashboard_148_12",
            "x-dynamic": "true",
            "x-source-type": "computed",
            "x-source-editable": "false",
            children: [...locations].sort((a, b) => b.risk.score - a.risk.score).slice(0, 6).map(l => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("button", {
              onClick: () => navigate(`/location/${l.id}`),
              "data-testid": `dash-loc-${l.id}`,
              className: "w-full flex items-center gap-3 px-2 py-2 rounded-md hover:bg-zinc-800/60 transition-colors text-left",
              "x-file-name": "Dashboard",
              "x-line-number": "150",
              "x-column": "16",
              "x-component": "button",
              "x-id": "Dashboard_150_16",
              "x-dynamic": "false",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("span", {
                className: "w-2 h-2 rounded-full shrink-0",
                style: {
                  backgroundColor: _lib_i18n__WEBPACK_IMPORTED_MODULE_6__.RISK_COLORS[l.risk.level]
                },
                "x-file-name": "Dashboard",
                "x-line-number": "152",
                "x-column": "18",
                "x-component": "span",
                "x-id": "Dashboard_152_18",
                "x-dynamic": "false"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 152,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("span", {
                className: "text-sm cc-text truncate flex-1",
                "x-file-name": "Dashboard",
                "x-line-number": "153",
                "x-column": "18",
                "x-component": "span",
                "x-id": "Dashboard_153_18",
                "x-dynamic": "true",
                "x-source-type": "static-imported",
                "x-source-path": "name",
                "x-source-editable": "false",
                "x-array-item-param": "l",
                children: l.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("span", {
                className: "font-mono2 text-sm",
                style: {
                  color: _lib_i18n__WEBPACK_IMPORTED_MODULE_6__.RISK_COLORS[l.risk.level]
                },
                "x-file-name": "Dashboard",
                "x-line-number": "154",
                "x-column": "18",
                "x-component": "span",
                "x-id": "Dashboard_154_18",
                "x-dynamic": "true",
                "x-source-type": "static-imported",
                "x-source-path": "risk.score",
                "x-source-editable": "false",
                "x-array-item-param": "l",
                children: l.risk.score
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 154,
                columnNumber: 19
              }, this)]
            }, l.id, true, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 17
            }, this))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 5
  }, this);
}
_s(Dashboard, "JAlRXUvBn5R5Oyh6XgNKRzH3MEo=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useSearchParams, _context_AppContext__WEBPACK_IMPORTED_MODULE_3__.useApp, react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate];
});
_c = Dashboard;
var _c;
__webpack_require__.$Refresh$.register(_c, "Dashboard");

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

