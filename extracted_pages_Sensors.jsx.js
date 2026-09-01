/***/ "./src/pages/Sensors.jsx"
/*!*******************************!*\
  !*** ./src/pages/Sensors.jsx ***!
  \*******************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sensors)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/api */ "./src/lib/api.js");
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/AppContext */ "./src/context/AppContext.jsx");
/* harmony import */ var _components_ui_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ui-helpers */ "./src/components/ui-helpers.jsx");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/battery-full.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/battery-low.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/battery-medium.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/radio-tower.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/refresh-cw.js");
/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sonner */ "./node_modules/sonner/dist/index.mjs");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/app/frontend/src/pages/Sensors.jsx",
  _s = __webpack_require__.$Refresh$.signature();







const STATUS_STYLE = {
  ONLINE: "text-emerald-400 border-emerald-500/40 bg-emerald-500/10",
  OFFLINE: "text-red-400 border-red-500/40 bg-red-500/10",
  WARNING: "text-amber-400 border-amber-500/40 bg-amber-500/10",
  MAINTENANCE: "text-blue-400 border-blue-500/40 bg-blue-500/10"
};
const BatteryIcon = ({
  level
}) => level > 60 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
  size: 15,
  className: "text-emerald-400",
  "x-file-name": "Sensors",
  "x-line-number": "16",
  "x-column": "15",
  "x-component": "BatteryFull",
  "x-id": "Sensors_16_15",
  "x-dynamic": "false"
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 16,
  columnNumber: 16
}, undefined) : level > 25 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
  size: 15,
  className: "text-amber-400",
  "x-file-name": "Sensors",
  "x-line-number": "17",
  "x-column": "15",
  "x-component": "BatteryMedium",
  "x-id": "Sensors_17_15",
  "x-dynamic": "false"
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 17,
  columnNumber: 16
}, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
  size: 15,
  className: "text-red-400",
  "x-file-name": "Sensors",
  "x-line-number": "18",
  "x-column": "2",
  "x-component": "BatteryLow",
  "x-id": "Sensors_18_2",
  "x-dynamic": "false"
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 18,
  columnNumber: 3
}, undefined);
_c = BatteryIcon;
function Sensors() {
  _s();
  const [sensors, setSensors] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [spinning, setSpinning] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    user
  } = (0,_context_AppContext__WEBPACK_IMPORTED_MODULE_2__.useApp)();
  const canManage = user && ["admin", "disaster_officer"].includes(user.role);
  const load = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (manual = false) => {
    if (manual) setSpinning(true);
    try {
      const r = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__.apiGet)("/sensors");
      setSensors(r.data);
    } catch (e) {
      if (!sensors) setSensors([]);
    } finally {
      setSpinning(false);
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    load();
    const id = setInterval(() => load(), 8000);
    return () => clearInterval(id);
  }, [load]);
  const setStatus = async (s, status) => {
    try {
      await _lib_api__WEBPACK_IMPORTED_MODULE_1__.api.put(`/sensors/${s.id}`, {
        status
      });
      sonner__WEBPACK_IMPORTED_MODULE_9__.toast.success(`${s.id} → ${status}`);
      load();
    } catch (e) {
      sonner__WEBPACK_IMPORTED_MODULE_9__.toast.error((0,_lib_api__WEBPACK_IMPORTED_MODULE_1__.formatApiError)(e));
    }
  };
  if (!sensors) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_3__.Loading, {
    label: "Polling sensor network\u2026",
    "x-file-name": "Sensors",
    "x-line-number": "39",
    "x-column": "23",
    "x-component": "Loading",
    "x-id": "Sensors_39_23",
    "x-dynamic": "true"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 24
  }, this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
    className: "space-y-5",
    "data-testid": "sensors-page",
    "x-file-name": "Sensors",
    "x-line-number": "42",
    "x-column": "4",
    "x-component": "div",
    "x-id": "Sensors_42_4",
    "x-dynamic": "false",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
      className: "flex items-center gap-3 flex-wrap",
      "x-file-name": "Sensors",
      "x-line-number": "43",
      "x-column": "6",
      "x-component": "div",
      "x-id": "Sensors_43_6",
      "x-dynamic": "false",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
        size: 22,
        className: "text-sky-400",
        "x-file-name": "Sensors",
        "x-line-number": "44",
        "x-column": "8",
        "x-component": "RadioTower",
        "x-id": "Sensors_44_8",
        "x-dynamic": "false"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: "flex-1",
        "x-file-name": "Sensors",
        "x-line-number": "45",
        "x-column": "8",
        "x-component": "div",
        "x-id": "Sensors_45_8",
        "x-dynamic": "false",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h1", {
          className: "font-display font-bold text-xl cc-text tracking-tight",
          "x-file-name": "Sensors",
          "x-line-number": "46",
          "x-column": "10",
          "x-component": "h1",
          "x-id": "Sensors_46_10",
          "x-dynamic": "false",
          children: "Sensor Network"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "text-xs cc-text-2",
          "x-file-name": "Sensors",
          "x-line-number": "47",
          "x-column": "10",
          "x-component": "div",
          "x-id": "Sensors_47_10",
          "x-dynamic": "false",
          children: "Live simulated telemetry \u2014 values refresh automatically"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
        onClick: () => load(true),
        "data-testid": "refresh-sensors-btn",
        className: "flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-sm border border-zinc-700 cc-text-2 hover:text-white transition-colors",
        "x-file-name": "Sensors",
        "x-line-number": "49",
        "x-column": "8",
        "x-component": "button",
        "x-id": "Sensors_49_8",
        "x-dynamic": "false",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
          size: 13,
          className: spinning ? "animate-spin" : "",
          "x-file-name": "Sensors",
          "x-line-number": "51",
          "x-column": "10",
          "x-component": "RefreshCw",
          "x-id": "Sensors_51_10",
          "x-dynamic": "false"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, this), " Refresh"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
      className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3",
      "x-file-name": "Sensors",
      "x-line-number": "55",
      "x-column": "6",
      "x-component": "div",
      "x-id": "Sensors_55_6",
      "x-dynamic": "true",
      "x-source-type": "computed",
      "x-source-editable": "false",
      children: sensors.map(s => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: "cc-surface rounded-md p-4 animate-fade-in",
        "data-testid": `sensor-card-${s.id}`,
        "x-file-name": "Sensors",
        "x-line-number": "57",
        "x-column": "10",
        "x-component": "div",
        "x-id": "Sensors_57_10",
        "x-dynamic": "true",
        "x-source-type": "computed",
        "x-source-editable": "false",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "flex items-center justify-between gap-2",
          "x-file-name": "Sensors",
          "x-line-number": "58",
          "x-column": "12",
          "x-component": "div",
          "x-id": "Sensors_58_12",
          "x-dynamic": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
            className: "font-mono2 text-sm font-semibold cc-text",
            "x-file-name": "Sensors",
            "x-line-number": "59",
            "x-column": "14",
            "x-component": "span",
            "x-id": "Sensors_59_14",
            "x-dynamic": "true",
            "x-source-type": "static-imported",
            "x-source-var": "sensors",
            "x-source-path": "id",
            "x-source-editable": "false",
            "x-array-var": "sensors",
            "x-array-item-param": "s",
            children: s.id
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
            className: `text-[10px] font-mono2 px-2 py-0.5 rounded-sm border ${STATUS_STYLE[s.status]}`,
            "data-testid": `sensor-status-${s.id}`,
            "x-file-name": "Sensors",
            "x-line-number": "60",
            "x-column": "14",
            "x-component": "span",
            "x-id": "Sensors_60_14",
            "x-dynamic": "true",
            "x-source-type": "static-imported",
            "x-source-var": "sensors",
            "x-source-path": "status",
            "x-source-editable": "false",
            "x-array-var": "sensors",
            "x-array-item-param": "s",
            children: s.status
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "text-sm cc-text mt-1.5",
          "x-file-name": "Sensors",
          "x-line-number": "62",
          "x-column": "12",
          "x-component": "div",
          "x-id": "Sensors_62_12",
          "x-dynamic": "true",
          "x-source-type": "static-imported",
          "x-source-var": "sensors",
          "x-source-path": "name",
          "x-source-editable": "false",
          "x-array-var": "sensors",
          "x-array-item-param": "s",
          children: s.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "text-xs cc-text-2",
          "x-file-name": "Sensors",
          "x-line-number": "63",
          "x-column": "12",
          "x-component": "div",
          "x-id": "Sensors_63_12",
          "x-dynamic": "true",
          "x-source-type": "static-imported",
          "x-source-var": "sensors",
          "x-source-path": "location_name",
          "x-source-editable": "false",
          "x-array-var": "sensors",
          "x-array-item-param": "s",
          children: s.location_name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "grid grid-cols-2 gap-x-4 gap-y-2 mt-3 text-xs",
          "x-file-name": "Sensors",
          "x-line-number": "64",
          "x-column": "12",
          "x-component": "div",
          "x-id": "Sensors_64_12",
          "x-dynamic": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "flex items-center gap-1.5 cc-text-2",
            "x-file-name": "Sensors",
            "x-line-number": "65",
            "x-column": "14",
            "x-component": "div",
            "x-id": "Sensors_65_14",
            "x-dynamic": "false",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(BatteryIcon, {
              level: s.battery,
              "x-file-name": "Sensors",
              "x-line-number": "65",
              "x-column": "67",
              "x-component": "BatteryIcon",
              "x-id": "Sensors_65_67",
              "x-dynamic": "true",
              "x-source-type": "external",
              "x-source-var": "sensors",
              "x-source-editable": "false",
              "x-array-var": "sensors",
              "x-array-item-param": "s"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 68
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
              className: "font-mono2",
              "x-file-name": "Sensors",
              "x-line-number": "65",
              "x-column": "100",
              "x-component": "span",
              "x-id": "Sensors_65_100",
              "x-dynamic": "true",
              "x-source-type": "static-imported",
              "x-source-var": "sensors",
              "x-source-path": "battery",
              "x-source-editable": "false",
              "x-array-var": "sensors",
              "x-array-item-param": "s",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                "data-ve-dynamic": "true",
                "x-excluded": "true",
                style: {
                  display: "contents"
                },
                "x-file-name": "Sensors",
                "x-line-number": "65",
                "x-column": "100",
                "x-component": "span",
                "x-id": "Sensors_65_100_expr0",
                "x-dynamic": "true",
                "x-source-type": "static-imported",
                "x-source-var": "sensors",
                "x-source-path": "battery",
                "x-source-editable": "false",
                "x-array-var": "sensors",
                "x-array-item-param": "s",
                children: s.battery
              }, void 0, false), "%"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 101
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "cc-text-2",
            "x-file-name": "Sensors",
            "x-line-number": "66",
            "x-column": "14",
            "x-component": "div",
            "x-id": "Sensors_66_14",
            "x-dynamic": "false",
            children: ["Signal: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
              className: "font-mono2 cc-text",
              "x-file-name": "Sensors",
              "x-line-number": "66",
              "x-column": "49",
              "x-component": "span",
              "x-id": "Sensors_66_49",
              "x-dynamic": "true",
              "x-source-type": "static-imported",
              "x-source-var": "sensors",
              "x-source-path": "signal",
              "x-source-editable": "false",
              "x-array-var": "sensors",
              "x-array-item-param": "s",
              children: s.signal
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 50
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "cc-text-2",
            "x-file-name": "Sensors",
            "x-line-number": "67",
            "x-column": "14",
            "x-component": "div",
            "x-id": "Sensors_67_14",
            "x-dynamic": "false",
            children: ["Reading: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
              className: "font-mono2 cc-text",
              "data-testid": `sensor-reading-${s.id}`,
              "x-file-name": "Sensors",
              "x-line-number": "67",
              "x-column": "50",
              "x-component": "span",
              "x-id": "Sensors_67_50",
              "x-dynamic": "true",
              "x-source-type": "static-imported",
              "x-source-var": "sensors",
              "x-source-path": "last_reading",
              "x-source-editable": "false",
              "x-array-var": "sensors",
              "x-array-item-param": "s",
              children: [s.last_reading, " ", s.unit]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 51
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "cc-text-2",
            "x-file-name": "Sensors",
            "x-line-number": "68",
            "x-column": "14",
            "x-component": "div",
            "x-id": "Sensors_68_14",
            "x-dynamic": "false",
            children: ["Sync: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
              className: "font-mono2 cc-text",
              "x-file-name": "Sensors",
              "x-line-number": "68",
              "x-column": "47",
              "x-component": "span",
              "x-id": "Sensors_68_47",
              "x-dynamic": "true",
              "x-source-type": "computed",
              "x-source-editable": "false",
              children: new Date(s.last_sync).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit"
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 48
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 13
        }, this), s.status !== "ONLINE" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "mt-2.5 text-[11px] text-amber-400/90 bg-amber-500/10 border border-amber-500/20 rounded-sm px-2 py-1.5",
          "x-file-name": "Sensors",
          "x-line-number": "71",
          "x-column": "14",
          "x-component": "div",
          "x-id": "Sensors_71_14",
          "x-dynamic": "false",
          children: "Sensor unavailable \u2014 prediction confidence reduced for this zone."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 15
        }, this), canManage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "flex gap-1.5 mt-3",
          "x-file-name": "Sensors",
          "x-line-number": "76",
          "x-column": "14",
          "x-component": "div",
          "x-id": "Sensors_76_14",
          "x-dynamic": "true",
          "x-source-type": "computed",
          "x-source-editable": "false",
          children: ["ONLINE", "WARNING", "MAINTENANCE", "OFFLINE"].filter(x => x !== s.status).map(st => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
            onClick: () => setStatus(s, st),
            "data-testid": `sensor-set-${st.toLowerCase()}-${s.id}`,
            className: "text-[10px] font-mono2 px-1.5 py-1 rounded-sm border border-zinc-700 cc-text-2 hover:text-white hover:border-zinc-500 transition-colors",
            "x-file-name": "Sensors",
            "x-line-number": "78",
            "x-column": "18",
            "x-component": "button",
            "x-id": "Sensors_78_18",
            "x-dynamic": "true",
            "x-source-type": "static-imported",
            "x-source-editable": "false",
            "x-array-item-param": "st",
            children: st
          }, st, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 19
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 15
        }, this)]
      }, s.id, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, this);
}
_s(Sensors, "zxtHlc3rVSBnMzG8iHTqFJdPp58=", false, function () {
  return [_context_AppContext__WEBPACK_IMPORTED_MODULE_2__.useApp];
});
_c2 = Sensors;
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "BatteryIcon");
__webpack_require__.$Refresh$.register(_c2, "Sensors");

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

