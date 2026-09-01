/***/ "./src/pages/Architecture.jsx"
/*!************************************!*\
  !*** ./src/pages/Architecture.jsx ***!
  \************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Architecture)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/antenna.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/arrow-down.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/bell-ring.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/brain-circuit.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/cloud-rain.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/database.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/gauge.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/mountain.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/network.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/radio.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/satellite.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/server.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/siren.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/smartphone.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/users.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/wifi-off.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/app/frontend/src/pages/Architecture.jsx";



const FLOW = [{
  title: "Data Sources",
  items: ["Rain gauges", "Soil moisture probes", "Tilt / inclinometers", "IMD weather feeds", "Terrain & geology maps", "Historical landslide records", "Field reports"],
  icons: [lucide_react__WEBPACK_IMPORTED_MODULE_11__["default"], lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"]]
}, {
  title: "Data Processing",
  items: ["Validation & outlier detection", "Gap filling", "Feature extraction", "Data confidence scoring"],
  icons: [lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"]]
}, {
  title: "AI/ML Risk Prediction Engine",
  items: ["SIMULATED_HEURISTIC_V1 (prototype)", "Pluggable trained ML model/API", "Explainable factor contributions"],
  icons: [lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"]]
}, {
  title: "Risk Classification",
  items: ["LOW < 30", "MODERATE 30–55", "HIGH 55–75", "CRITICAL > 75"],
  icons: [lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"]]
}, {
  title: "Early Warning Engine",
  items: ["Threshold rules", "Alert lifecycle", "Escalation logic", "Audit trail"],
  icons: [lucide_react__WEBPACK_IMPORTED_MODULE_13__["default"]]
}, {
  title: "Communication Gateway",
  items: ["Internet push", "SMS", "Cell broadcast", "LoRa / RF gateway", "Local sirens", "Bluetooth mesh", "Edge devices"],
  icons: [lucide_react__WEBPACK_IMPORTED_MODULE_10__["default"], lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"]]
}, {
  title: "End Users",
  items: ["Disaster authorities", "District administration", "Field officers", "Rescue teams", "Communities"],
  icons: [lucide_react__WEBPACK_IMPORTED_MODULE_15__["default"]]
}];
const STACK = [["Frontend", "React + Tailwind CSS, Recharts, React-Leaflet, PWA (Service Worker), localStorage/IndexedDB caching"], ["Backend", "FastAPI REST API, JWT role-based auth, simulated risk engine (ML-service ready)"], ["Database", "MongoDB — users, locations, sensors, readings, predictions, alerts, events, reports, notifications, audit logs"], ["Edge Layer", "Offline queue, cached dashboards, gateway handoff protocol for SMS/LoRa/sirens"], ["Future ML", "Drop-in FastAPI ML service (e.g., gradient-boosted / LSTM rainfall-trigger models) replacing the heuristic engine"]];
function Architecture() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
    className: "space-y-5 max-w-4xl",
    "data-testid": "architecture-page",
    "x-file-name": "Architecture",
    "x-line-number": "25",
    "x-column": "4",
    "x-component": "div",
    "x-id": "Architecture_25_4",
    "x-dynamic": "false",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
      className: "flex items-center gap-3",
      "x-file-name": "Architecture",
      "x-line-number": "26",
      "x-column": "6",
      "x-component": "div",
      "x-id": "Architecture_26_6",
      "x-dynamic": "false",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_9__["default"], {
        size: 22,
        className: "text-emerald-400",
        "x-file-name": "Architecture",
        "x-line-number": "27",
        "x-column": "8",
        "x-component": "Network",
        "x-id": "Architecture_27_8",
        "x-dynamic": "false"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
        "x-file-name": "Architecture",
        "x-line-number": "28",
        "x-column": "8",
        "x-component": "div",
        "x-id": "Architecture_28_8",
        "x-dynamic": "false",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("h1", {
          className: "font-display font-bold text-xl cc-text tracking-tight",
          "x-file-name": "Architecture",
          "x-line-number": "29",
          "x-column": "10",
          "x-component": "h1",
          "x-id": "Architecture_29_10",
          "x-dynamic": "false",
          children: "System Architecture"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
          className: "text-xs cc-text-2",
          "x-file-name": "Architecture",
          "x-line-number": "30",
          "x-column": "10",
          "x-component": "div",
          "x-id": "Architecture_30_10",
          "x-dynamic": "false",
          children: "End-to-end pipeline \u2014 built to swap simulated components for production services"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
      className: "space-y-0",
      "x-file-name": "Architecture",
      "x-line-number": "34",
      "x-column": "6",
      "x-component": "div",
      "x-id": "Architecture_34_6",
      "x-dynamic": "true",
      "x-source-type": "computed",
      "x-source-editable": "false",
      children: FLOW.map((stage, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
          className: "cc-surface rounded-md p-5",
          "data-testid": `arch-stage-${i}`,
          "x-file-name": "Architecture",
          "x-line-number": "37",
          "x-column": "12",
          "x-component": "div",
          "x-id": "Architecture_37_12",
          "x-dynamic": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
            className: "flex items-center gap-3",
            "x-file-name": "Architecture",
            "x-line-number": "38",
            "x-column": "14",
            "x-component": "div",
            "x-id": "Architecture_38_14",
            "x-dynamic": "false",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
              className: "flex gap-1.5",
              "x-file-name": "Architecture",
              "x-line-number": "39",
              "x-column": "16",
              "x-component": "div",
              "x-id": "Architecture_39_16",
              "x-dynamic": "true",
              "x-source-type": "computed",
              "x-source-editable": "false",
              children: stage.icons.map((Icon, j) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
                className: "w-9 h-9 rounded-md cc-elevated flex items-center justify-center",
                "x-file-name": "Architecture",
                "x-line-number": "41",
                "x-column": "20",
                "x-component": "div",
                "x-id": "Architecture_41_20",
                "x-dynamic": "false",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(Icon, {
                  size: 17,
                  className: "text-emerald-400",
                  "x-file-name": "Architecture",
                  "x-line-number": "41",
                  "x-column": "109",
                  "x-component": "Icon",
                  "x-id": "Architecture_41_109",
                  "x-dynamic": "true",
                  "x-source-type": "external",
                  "x-source-var": "stage",
                  "x-source-editable": "false",
                  "x-array-var": "stage",
                  "x-array-item-param": "Icon"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 41,
                  columnNumber: 110
                }, this)
              }, j, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 21
              }, this))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
              className: "font-display font-bold cc-text",
              "x-file-name": "Architecture",
              "x-line-number": "44",
              "x-column": "16",
              "x-component": "div",
              "x-id": "Architecture_44_16",
              "x-dynamic": "true",
              "x-source-type": "computed",
              "x-source-editable": "false",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("span", {
                "data-ve-dynamic": "true",
                "x-excluded": "true",
                style: {
                  display: "contents"
                },
                "x-file-name": "Architecture",
                "x-line-number": "44",
                "x-column": "16",
                "x-component": "div",
                "x-id": "Architecture_44_16_expr0",
                "x-dynamic": "true",
                "x-source-type": "computed",
                "x-source-editable": "false",
                children: i + 1
              }, void 0, false), ". ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("span", {
                "data-ve-dynamic": "true",
                "x-excluded": "true",
                style: {
                  display: "contents"
                },
                "x-file-name": "Architecture",
                "x-line-number": "44",
                "x-column": "16",
                "x-component": "div",
                "x-id": "Architecture_44_16_expr2",
                "x-dynamic": "true",
                "x-source-type": "static-imported",
                "x-source-var": "FLOW",
                "x-source-file-abs": "/app/frontend/src/pages/Architecture.jsx",
                "x-source-line": "5",
                "x-source-path": "title",
                "x-source-editable": "true",
                "x-array-var": "FLOW",
                "x-array-line": "5",
                "x-array-item-param": "stage",
                children: stage.title
              }, void 0, false)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
            className: "flex flex-wrap gap-1.5 mt-3",
            "x-file-name": "Architecture",
            "x-line-number": "46",
            "x-column": "14",
            "x-component": "div",
            "x-id": "Architecture_46_14",
            "x-dynamic": "true",
            "x-source-type": "computed",
            "x-source-editable": "false",
            children: stage.items.map(it => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("span", {
              className: "text-[11px] px-2 py-1 rounded-sm cc-elevated cc-text-2",
              "x-file-name": "Architecture",
              "x-line-number": "48",
              "x-column": "18",
              "x-component": "span",
              "x-id": "Architecture_48_18",
              "x-dynamic": "true",
              "x-source-type": "static-imported",
              "x-source-var": "stage",
              "x-source-editable": "false",
              "x-array-var": "stage",
              "x-array-item-param": "it",
              children: it
            }, it, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 19
            }, this))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 13
        }, this), i < FLOW.length - 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
          className: "flex justify-center py-1",
          "x-file-name": "Architecture",
          "x-line-number": "52",
          "x-column": "36",
          "x-component": "div",
          "x-id": "Architecture_52_36",
          "x-dynamic": "false",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
            size: 16,
            className: "text-emerald-500",
            "x-file-name": "Architecture",
            "x-line-number": "52",
            "x-column": "78",
            "x-component": "ArrowDown",
            "x-id": "Architecture_52_78",
            "x-dynamic": "true",
            "x-source-type": "static-imported",
            "x-source-var": "FLOW",
            "x-source-file-abs": "/app/frontend/src/pages/Architecture.jsx",
            "x-source-line": "5",
            "x-source-editable": "true",
            "x-array-var": "FLOW",
            "x-array-line": "5",
            "x-array-item-param": "stage"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 79
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 37
        }, this)]
      }, stage.title, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
      className: "cc-surface rounded-md p-5 border-amber-500/40",
      "data-testid": "arch-offline-layer",
      "x-file-name": "Architecture",
      "x-line-number": "57",
      "x-column": "6",
      "x-component": "div",
      "x-id": "Architecture_57_6",
      "x-dynamic": "false",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
        className: "flex items-center gap-3 mb-3",
        "x-file-name": "Architecture",
        "x-line-number": "58",
        "x-column": "8",
        "x-component": "div",
        "x-id": "Architecture_58_8",
        "x-dynamic": "false",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
          className: "w-9 h-9 rounded-md cc-elevated flex items-center justify-center",
          "x-file-name": "Architecture",
          "x-line-number": "59",
          "x-column": "10",
          "x-component": "div",
          "x-id": "Architecture_59_10",
          "x-dynamic": "false",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_16__["default"], {
            size: 17,
            className: "text-amber-400",
            "x-file-name": "Architecture",
            "x-line-number": "59",
            "x-column": "91",
            "x-component": "WifiOff",
            "x-id": "Architecture_59_91",
            "x-dynamic": "false"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 92
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
          className: "font-display font-bold cc-text",
          "x-file-name": "Architecture",
          "x-line-number": "60",
          "x-column": "10",
          "x-component": "div",
          "x-id": "Architecture_60_10",
          "x-dynamic": "false",
          children: "Offline Edge Layer"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
        className: "flex flex-wrap items-center gap-2 text-xs font-mono2",
        "data-testid": "alert-queue-flow",
        "x-file-name": "Architecture",
        "x-line-number": "62",
        "x-column": "8",
        "x-component": "div",
        "x-id": "Architecture_62_8",
        "x-dynamic": "true",
        "x-source-type": "computed",
        "x-source-editable": "false",
        children: ["Alert generated", "Stored locally", "Waiting for gateway", "Gateway available", "Alert transmitted", "Delivery acknowledged"].map((s, i, arr) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("span", {
            className: "px-2.5 py-1.5 rounded-sm bg-amber-500/10 border border-amber-500/30 text-amber-300",
            "x-file-name": "Architecture",
            "x-line-number": "65",
            "x-column": "14",
            "x-component": "span",
            "x-id": "Architecture_65_14",
            "x-dynamic": "true",
            "x-source-type": "static-local",
            "x-source-file": "/app/frontend/src/pages/Architecture.jsx",
            "x-source-file-abs": "/app/frontend/src/pages/Architecture.jsx",
            "x-source-line": "63",
            "x-source-editable": "true",
            "x-array-file": "/app/frontend/src/pages/Architecture.jsx",
            "x-array-line": "63",
            "x-array-item-param": "s",
            "x-array-inline": "true",
            children: s
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 15
          }, this), i < arr.length - 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("span", {
            className: "text-amber-500",
            "x-file-name": "Architecture",
            "x-line-number": "66",
            "x-column": "37",
            "x-component": "span",
            "x-id": "Architecture_66_37",
            "x-dynamic": "false",
            children: "\u2193"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 38
          }, this)]
        }, s, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("p", {
        className: "text-xs cc-text-2 mt-3 leading-relaxed",
        "x-file-name": "Architecture",
        "x-line-number": "70",
        "x-column": "8",
        "x-component": "p",
        "x-id": "Architecture_70_8",
        "x-dynamic": "false",
        children: "A normal web app cannot transmit with zero connectivity. This prototype is honest about it: alerts queue locally on the device and hand off to whichever gateway becomes available \u2014 internet, SMS modem, cell broadcast integration, LoRa/RF relay, siren controller, Bluetooth mesh or an edge device. Delivery is simulated here; the queue and handoff protocol are real."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
      className: "cc-surface rounded-md p-5",
      "x-file-name": "Architecture",
      "x-line-number": "75",
      "x-column": "6",
      "x-component": "div",
      "x-id": "Architecture_75_6",
      "x-dynamic": "false",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
        className: "flex items-center gap-3 mb-4",
        "x-file-name": "Architecture",
        "x-line-number": "76",
        "x-column": "8",
        "x-component": "div",
        "x-id": "Architecture_76_8",
        "x-dynamic": "false",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
          className: "w-9 h-9 rounded-md cc-elevated flex items-center justify-center",
          "x-file-name": "Architecture",
          "x-line-number": "77",
          "x-column": "10",
          "x-component": "div",
          "x-id": "Architecture_77_10",
          "x-dynamic": "false",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_12__["default"], {
            size: 17,
            className: "text-emerald-400",
            "x-file-name": "Architecture",
            "x-line-number": "77",
            "x-column": "91",
            "x-component": "Server",
            "x-id": "Architecture_77_91",
            "x-dynamic": "false"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 92
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
          className: "font-display font-bold cc-text",
          "x-file-name": "Architecture",
          "x-line-number": "78",
          "x-column": "10",
          "x-component": "div",
          "x-id": "Architecture_78_10",
          "x-dynamic": "false",
          children: "Technology Stack"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
        className: "space-y-3",
        "x-file-name": "Architecture",
        "x-line-number": "80",
        "x-column": "8",
        "x-component": "div",
        "x-id": "Architecture_80_8",
        "x-dynamic": "true",
        "x-source-type": "computed",
        "x-source-editable": "false",
        children: STACK.map(([k, v]) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
          className: "grid sm:grid-cols-[140px_1fr] gap-2 cc-elevated rounded-md p-3",
          "x-file-name": "Architecture",
          "x-line-number": "82",
          "x-column": "12",
          "x-component": "div",
          "x-id": "Architecture_82_12",
          "x-dynamic": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("span", {
            className: "overline-tag self-center",
            "x-file-name": "Architecture",
            "x-line-number": "83",
            "x-column": "14",
            "x-component": "span",
            "x-id": "Architecture_83_14",
            "x-dynamic": "true",
            "x-source-type": "unknown",
            "x-source-var": "k",
            "x-source-editable": "false",
            children: k
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("span", {
            className: "text-xs cc-text-2 leading-relaxed",
            "x-file-name": "Architecture",
            "x-line-number": "84",
            "x-column": "14",
            "x-component": "span",
            "x-id": "Architecture_84_14",
            "x-dynamic": "true",
            "x-source-type": "unknown",
            "x-source-var": "v",
            "x-source-editable": "false",
            children: v
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 15
          }, this)]
        }, k, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
      className: "cc-surface rounded-md p-5",
      "x-file-name": "Architecture",
      "x-line-number": "90",
      "x-column": "6",
      "x-component": "div",
      "x-id": "Architecture_90_6",
      "x-dynamic": "false",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
        className: "flex items-center gap-3 mb-3",
        "x-file-name": "Architecture",
        "x-line-number": "91",
        "x-column": "8",
        "x-component": "div",
        "x-id": "Architecture_91_8",
        "x-dynamic": "false",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
          className: "w-9 h-9 rounded-md cc-elevated flex items-center justify-center",
          "x-file-name": "Architecture",
          "x-line-number": "92",
          "x-column": "10",
          "x-component": "div",
          "x-id": "Architecture_92_10",
          "x-dynamic": "false",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_14__["default"], {
            size: 17,
            className: "text-emerald-400",
            "x-file-name": "Architecture",
            "x-line-number": "92",
            "x-column": "91",
            "x-component": "Smartphone",
            "x-id": "Architecture_92_91",
            "x-dynamic": "false"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 92
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
          className: "font-display font-bold cc-text",
          "x-file-name": "Architecture",
          "x-line-number": "93",
          "x-column": "10",
          "x-component": "div",
          "x-id": "Architecture_93_10",
          "x-dynamic": "false",
          children: "PWA & Delivery"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
        className: "grid sm:grid-cols-3 gap-3 text-xs cc-text-2",
        "x-file-name": "Architecture",
        "x-line-number": "95",
        "x-column": "8",
        "x-component": "div",
        "x-id": "Architecture_95_8",
        "x-dynamic": "false",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
          className: "cc-elevated rounded-md p-3",
          "x-file-name": "Architecture",
          "x-line-number": "96",
          "x-column": "10",
          "x-component": "div",
          "x-id": "Architecture_96_10",
          "x-dynamic": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
            size: 15,
            className: "text-emerald-400 mb-1.5",
            "x-file-name": "Architecture",
            "x-line-number": "96",
            "x-column": "54",
            "x-component": "BellRing",
            "x-id": "Architecture_96_54",
            "x-dynamic": "false"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 55
          }, this), "Service worker caches the app shell and last API responses for offline dashboards."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
          className: "cc-elevated rounded-md p-3",
          "x-file-name": "Architecture",
          "x-line-number": "97",
          "x-column": "10",
          "x-component": "div",
          "x-id": "Architecture_97_10",
          "x-dynamic": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_16__["default"], {
            size: 15,
            className: "text-amber-400 mb-1.5",
            "x-file-name": "Architecture",
            "x-line-number": "97",
            "x-column": "54",
            "x-component": "WifiOff",
            "x-id": "Architecture_97_54",
            "x-dynamic": "false"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 55
          }, this), "Network indicator (online / limited / offline) drives cache-first rendering and the offline alert queue."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)("div", {
          className: "cc-elevated rounded-md p-3",
          "x-file-name": "Architecture",
          "x-line-number": "98",
          "x-column": "10",
          "x-component": "div",
          "x-id": "Architecture_98_10",
          "x-dynamic": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
            size: 15,
            className: "text-sky-400 mb-1.5",
            "x-file-name": "Architecture",
            "x-line-number": "98",
            "x-column": "54",
            "x-component": "Antenna",
            "x-id": "Architecture_98_54",
            "x-dynamic": "false"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 55
          }, this), "Multi-channel gateway abstraction ready for telecom, LoRa and siren integrations."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
}
_c = Architecture;
var _c;
__webpack_require__.$Refresh$.register(_c, "Architecture");

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

