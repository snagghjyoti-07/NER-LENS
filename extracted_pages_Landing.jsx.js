/***/ "./src/pages/Landing.jsx"
/*!*******************************!*\
  !*** ./src/pages/Landing.jsx ***!
  \*******************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Landing)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4N6VE7H7.mjs");
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/AppContext */ "./src/context/AppContext.jsx");
/* harmony import */ var _lib_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/i18n */ "./src/lib/i18n.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/arrow-right.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/brain-circuit.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/chevron-right.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/globe.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/languages.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/map-pin.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/mountain.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/radio-tower.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/satellite.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/shield-alert.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/siren.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/wifi-off.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/app/frontend/src/pages/Landing.jsx",
  _s = __webpack_require__.$Refresh$.signature();






const HERO_IMG = "https://images.unsplash.com/photo-1633323773493-71920ed75215?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzOTB8MHwxfHNlYXJjaHw0fHxub3J0aGVhc3QlMjBpbmRpYSUyMG1vdW50YWluc3xlbnwwfHx8fDE3ODgwOTE0NTR8MA&ixlib=rb-4.1.0&q=85";
const SLIDE_IMG = "https://images.unsplash.com/photo-1780229700245-20eef598cb36?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHw0fHxsYW5kc2xpZGUlMjB0ZXJyYWlufGVufDB8fHx8MTc4ODA5MTQ1M3ww&ixlib=rb-4.1.0&q=85";
const CMD_IMG = "https://images.unsplash.com/photo-1762846700143-4f3a47400986?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwyfHxjb21tYW5kJTIwY2VudGVyJTIwc2NyZWVufGVufDB8fHx8MTc4ODA5MTQ1M3ww&ixlib=rb-4.1.0&q=85";
const FEATURES = [{
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"],
  title: "AI-Assisted Risk Estimation",
  desc: "Multi-parameter heuristic engine estimates landslide probability with confidence scores and explainable contributing factors. Architecture-ready for trained ML models."
}, {
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_9__["default"],
  title: "NER-Focused Monitoring",
  desc: "Purpose-built for the terrain, geology and rainfall patterns of all 8 North Eastern states — from Sikkim's glacial valleys to Mizoram's laterite ridges."
}, {
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_15__["default"],
  title: "Offline-First Operation",
  desc: "PWA with service worker caching, local risk data storage and an offline alert queue. Keeps working where connectivity fails — because disasters do."
}, {
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_14__["default"],
  title: "Emergency Warning Workflow",
  desc: "Full alert lifecycle: generate → queue → gateway → transmit → acknowledge. Multi-channel delivery incl. SMS, cell broadcast, LoRa and sirens."
}, {
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"],
  title: "9-Language Interface",
  desc: "Alerts and evacuation instructions in English, Hindi, Assamese, Bengali, Nepali, Meitei, Mizo, Khasi and Garo."
}, {
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_11__["default"],
  title: "Sensor & Field Integration",
  desc: "Rain gauges, inclinometers, tilt sensors and crowd-sourced field reports feed a single operational picture."
}];
const STEPS = [{
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_12__["default"],
  title: "Sense",
  desc: "IoT sensors, weather feeds, terrain data and satellite indicators stream into the platform."
}, {
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"],
  title: "Estimate",
  desc: "The risk engine fuses rainfall, soil moisture, slope, movement and history into a 0–100 risk score."
}, {
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_13__["default"],
  title: "Classify",
  desc: "Zones are classified LOW → MODERATE → HIGH → CRITICAL with explainable factors."
}, {
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_14__["default"],
  title: "Warn",
  desc: "Alerts route through internet, SMS, cell broadcast or offline gateways to authorities and communities."
}];
function Landing() {
  _s();
  const {
    t,
    lang,
    setLang,
    setEmergency
  } = (0,_context_AppContext__WEBPACK_IMPORTED_MODULE_2__.useApp)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
    className: "min-h-screen bg-[#F8F9FA] text-[#111827] noise-overlay",
    "x-file-name": "Landing",
    "x-line-number": "31",
    "x-column": "4",
    "x-component": "div",
    "x-id": "Landing_31_4",
    "x-dynamic": "false",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("header", {
      className: "sticky top-0 z-40 backdrop-blur-xl bg-white/75 border-b border-[#E5E7EB]",
      "x-file-name": "Landing",
      "x-line-number": "32",
      "x-column": "6",
      "x-component": "header",
      "x-id": "Landing_32_6",
      "x-dynamic": "false",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
        className: "max-w-6xl mx-auto px-6 py-3 flex items-center gap-4",
        "x-file-name": "Landing",
        "x-line-number": "33",
        "x-column": "8",
        "x-component": "div",
        "x-id": "Landing_33_8",
        "x-dynamic": "false",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
          className: "flex items-center gap-2.5",
          "x-file-name": "Landing",
          "x-line-number": "34",
          "x-column": "10",
          "x-component": "div",
          "x-id": "Landing_34_10",
          "x-dynamic": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
            className: "w-9 h-9 rounded-md bg-[#0F172A] flex items-center justify-center",
            "x-file-name": "Landing",
            "x-line-number": "35",
            "x-column": "12",
            "x-component": "div",
            "x-id": "Landing_35_12",
            "x-dynamic": "false",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_10__["default"], {
              size: 20,
              className: "text-emerald-400",
              "x-file-name": "Landing",
              "x-line-number": "35",
              "x-column": "94",
              "x-component": "Mountain",
              "x-id": "Landing_35_94",
              "x-dynamic": "false"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 95
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
            className: "font-display font-bold text-sm leading-tight",
            "x-file-name": "Landing",
            "x-line-number": "36",
            "x-column": "12",
            "x-component": "div",
            "x-id": "Landing_36_12",
            "x-dynamic": "false",
            children: ["NER LANDSLIDE", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("br", {
              "x-file-name": "Landing",
              "x-line-number": "36",
              "x-column": "87",
              "x-component": "br",
              "x-id": "Landing_36_87",
              "x-dynamic": "false"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 88
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("span", {
              className: "text-emerald-700",
              "x-file-name": "Landing",
              "x-line-number": "36",
              "x-column": "93",
              "x-component": "span",
              "x-id": "Landing_36_93",
              "x-dynamic": "false",
              children: "EARLY WARNING SYSTEM"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 94
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
          className: "ml-auto flex items-center gap-3",
          "x-file-name": "Landing",
          "x-line-number": "38",
          "x-column": "10",
          "x-component": "div",
          "x-id": "Landing_38_10",
          "x-dynamic": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
            size: 15,
            className: "text-gray-500",
            "x-file-name": "Landing",
            "x-line-number": "39",
            "x-column": "12",
            "x-component": "Globe",
            "x-id": "Landing_39_12",
            "x-dynamic": "false"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("select", {
            value: lang,
            onChange: e => setLang(e.target.value),
            "data-testid": "landing-language-select",
            className: "border border-gray-300 rounded-md text-xs px-2 py-1.5 bg-white",
            "x-file-name": "Landing",
            "x-line-number": "40",
            "x-column": "12",
            "x-component": "select",
            "x-id": "Landing_40_12",
            "x-dynamic": "true",
            "x-source-type": "computed",
            "x-source-editable": "false",
            children: _lib_i18n__WEBPACK_IMPORTED_MODULE_3__.LANGUAGES.map(l => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("option", {
              value: l.code,
              "x-file-name": "Landing",
              "x-line-number": "42",
              "x-column": "36",
              "x-component": "option",
              "x-id": "Landing_42_36",
              "x-dynamic": "true",
              "x-source-type": "static-imported",
              "x-source-var": "LANGUAGES",
              "x-source-file": "../lib/i18n",
              "x-source-file-abs": "/app/frontend/src/lib/i18n.js",
              "x-source-line": "1",
              "x-source-path": "label",
              "x-source-editable": "true",
              "x-array-var": "LANGUAGES",
              "x-array-file": "../lib/i18n",
              "x-array-line": "1",
              "x-array-item-param": "l",
              children: l.label
            }, l.code, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 37
            }, this))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
            to: "/login",
            "data-testid": "landing-login-btn",
            className: "text-xs font-semibold px-4 py-2 rounded-md border border-[#0F172A] hover:bg-[#0F172A] hover:text-white transition-colors",
            children: t("login")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("section", {
      className: "relative overflow-hidden",
      "x-file-name": "Landing",
      "x-line-number": "49",
      "x-column": "6",
      "x-component": "section",
      "x-id": "Landing_49_6",
      "x-dynamic": "false",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("img", {
        src: HERO_IMG,
        alt: "North East India hills",
        className: "absolute inset-0 w-full h-full object-cover",
        "x-file-name": "Landing",
        "x-line-number": "50",
        "x-column": "8",
        "x-component": "img",
        "x-id": "Landing_50_8",
        "x-dynamic": "false"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
        className: "absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/75 to-[#0F172A]/30",
        "x-file-name": "Landing",
        "x-line-number": "51",
        "x-column": "8",
        "x-component": "div",
        "x-id": "Landing_51_8",
        "x-dynamic": "false"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
        className: "relative max-w-6xl mx-auto px-6 py-24 lg:py-36 text-white",
        "x-file-name": "Landing",
        "x-line-number": "52",
        "x-column": "8",
        "x-component": "div",
        "x-id": "Landing_52_8",
        "x-dynamic": "false",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
          className: "uppercase tracking-[0.25em] text-emerald-400 text-xs font-semibold mb-4",
          "data-testid": "hero-overline",
          "x-file-name": "Landing",
          "x-line-number": "53",
          "x-column": "10",
          "x-component": "div",
          "x-id": "Landing_53_10",
          "x-dynamic": "false",
          children: "North Eastern Region \xB7 Disaster Decision Support"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("h1", {
          className: "font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight max-w-3xl leading-[1.05]",
          "data-testid": "hero-title",
          "x-file-name": "Landing",
          "x-line-number": "54",
          "x-column": "10",
          "x-component": "h1",
          "x-id": "Landing_54_10",
          "x-dynamic": "false",
          children: ["AI-Based Early Warning &", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("br", {
            "x-file-name": "Landing",
            "x-line-number": "55",
            "x-column": "36",
            "x-component": "br",
            "x-id": "Landing_55_36",
            "x-dynamic": "false"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 37
          }, this), "Landslide Risk Monitoring"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("p", {
          className: "mt-4 font-display text-2xl text-emerald-300 font-semibold",
          "data-testid": "hero-tagline",
          "x-file-name": "Landing",
          "x-line-number": "57",
          "x-column": "10",
          "x-component": "p",
          "x-id": "Landing_57_10",
          "x-dynamic": "true",
          "x-source-type": "computed",
          "x-source-editable": "false",
          children: t("tagline")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("p", {
          className: "mt-4 max-w-xl text-gray-300 leading-relaxed",
          "x-file-name": "Landing",
          "x-line-number": "58",
          "x-column": "10",
          "x-component": "p",
          "x-id": "Landing_58_10",
          "x-dynamic": "false",
          children: "Every monsoon, slope failures across the NER cut off roads, isolate villages and cost lives. This platform fuses rainfall, soil moisture, ground movement, terrain and historical data to estimate landslide risk \u2014 and warn before slopes fail."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
          className: "mt-8 flex flex-wrap gap-4",
          "x-file-name": "Landing",
          "x-line-number": "61",
          "x-column": "10",
          "x-component": "div",
          "x-id": "Landing_61_10",
          "x-dynamic": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
            to: "/dashboard",
            "data-testid": "open-dashboard-btn",
            className: "inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-[#0F172A] font-bold px-7 py-3.5 rounded-md transition-colors",
            children: ["Open Monitoring Dashboard ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
              size: 18
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 41
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("button", {
            onClick: () => setEmergency({
              source: "manual"
            }),
            "data-testid": "landing-emergency-btn",
            className: "inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold px-7 py-3.5 rounded-md transition-colors",
            "x-file-name": "Landing",
            "x-line-number": "66",
            "x-column": "12",
            "x-component": "button",
            "x-id": "Landing_66_12",
            "x-dynamic": "false",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_14__["default"], {
              size: 18,
              "x-file-name": "Landing",
              "x-line-number": "68",
              "x-column": "14",
              "x-component": "Siren",
              "x-id": "Landing_68_14",
              "x-dynamic": "false"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 15
            }, this), " Emergency Mode"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
          className: "mt-10 flex gap-8 flex-wrap text-sm text-gray-300",
          "x-file-name": "Landing",
          "x-line-number": "71",
          "x-column": "10",
          "x-component": "div",
          "x-id": "Landing_71_10",
          "x-dynamic": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
            "x-file-name": "Landing",
            "x-line-number": "72",
            "x-column": "12",
            "x-component": "div",
            "x-id": "Landing_72_12",
            "x-dynamic": "false",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("span", {
              className: "font-display font-bold text-2xl text-white",
              "x-file-name": "Landing",
              "x-line-number": "72",
              "x-column": "17",
              "x-component": "span",
              "x-id": "Landing_72_17",
              "x-dynamic": "false",
              children: "12"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 18
            }, this), " monitored zones"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
            "x-file-name": "Landing",
            "x-line-number": "73",
            "x-column": "12",
            "x-component": "div",
            "x-id": "Landing_73_12",
            "x-dynamic": "false",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("span", {
              className: "font-display font-bold text-2xl text-white",
              "x-file-name": "Landing",
              "x-line-number": "73",
              "x-column": "17",
              "x-component": "span",
              "x-id": "Landing_73_17",
              "x-dynamic": "false",
              children: "8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 18
            }, this), " NER states"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
            "x-file-name": "Landing",
            "x-line-number": "74",
            "x-column": "12",
            "x-component": "div",
            "x-id": "Landing_74_12",
            "x-dynamic": "false",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("span", {
              className: "font-display font-bold text-2xl text-white",
              "x-file-name": "Landing",
              "x-line-number": "74",
              "x-column": "17",
              "x-component": "span",
              "x-id": "Landing_74_17",
              "x-dynamic": "false",
              children: "7"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 18
            }, this), " alert channels"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
            "x-file-name": "Landing",
            "x-line-number": "75",
            "x-column": "12",
            "x-component": "div",
            "x-id": "Landing_75_12",
            "x-dynamic": "false",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("span", {
              className: "font-display font-bold text-2xl text-white",
              "x-file-name": "Landing",
              "x-line-number": "75",
              "x-column": "17",
              "x-component": "span",
              "x-id": "Landing_75_17",
              "x-dynamic": "false",
              children: "9"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 18
            }, this), " languages"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("section", {
      className: "max-w-6xl mx-auto px-6 py-20",
      "x-file-name": "Landing",
      "x-line-number": "80",
      "x-column": "6",
      "x-component": "section",
      "x-id": "Landing_80_6",
      "x-dynamic": "false",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
        className: "grid lg:grid-cols-12 gap-8 items-start",
        "x-file-name": "Landing",
        "x-line-number": "81",
        "x-column": "8",
        "x-component": "div",
        "x-id": "Landing_81_8",
        "x-dynamic": "false",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
          className: "lg:col-span-5",
          "x-file-name": "Landing",
          "x-line-number": "82",
          "x-column": "10",
          "x-component": "div",
          "x-id": "Landing_82_10",
          "x-dynamic": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
            className: "uppercase tracking-[0.2em] text-xs text-gray-500 font-semibold",
            "x-file-name": "Landing",
            "x-line-number": "83",
            "x-column": "12",
            "x-component": "div",
            "x-id": "Landing_83_12",
            "x-dynamic": "false",
            children: "The Problem"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("h2", {
            className: "font-display font-bold text-2xl sm:text-3xl tracking-tight mt-2",
            "x-file-name": "Landing",
            "x-line-number": "84",
            "x-column": "12",
            "x-component": "h2",
            "x-id": "Landing_84_12",
            "x-dynamic": "false",
            children: "Landslides in the NER are frequent, deadly \u2014 and often foreseeable"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("p", {
            className: "mt-4 text-gray-600 leading-relaxed",
            "x-file-name": "Landing",
            "x-line-number": "85",
            "x-column": "12",
            "x-component": "p",
            "x-id": "Landing_85_12",
            "x-dynamic": "false",
            children: "The North Eastern Region combines steep young geology, extreme monsoon rainfall and rapid road cutting. District administrations rarely get more than minutes of warning. An early warning system doesn't just predict \u2014 it buys time for evacuation."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
            className: "mt-6 space-y-3",
            "x-file-name": "Landing",
            "x-line-number": "88",
            "x-column": "12",
            "x-component": "div",
            "x-id": "Landing_88_12",
            "x-dynamic": "true",
            "x-source-type": "computed",
            "x-source-editable": "false",
            children: [["CloudRain", "Some NER stations receive >2,000 mm of monsoon rainfall"], ["Waves", "Saturated soils lose shear strength and fail on steep slopes"], ["Mountain", "Fragile Himalayan & Purvanchal geology amplifies susceptibility"]].map(([Icon, txt], i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
              className: "flex gap-3 items-start bg-white border border-gray-200 rounded-md p-4",
              "x-file-name": "Landing",
              "x-line-number": "92",
              "x-column": "16",
              "x-component": "div",
              "x-id": "Landing_92_16",
              "x-dynamic": "false",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(Icon, {
                size: 20,
                className: "text-emerald-700 shrink-0 mt-0.5",
                "x-file-name": "Landing",
                "x-line-number": "93",
                "x-column": "18",
                "x-component": "Icon",
                "x-id": "Landing_93_18",
                "x-dynamic": "true"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("span", {
                className: "text-sm text-gray-700",
                "x-file-name": "Landing",
                "x-line-number": "94",
                "x-column": "18",
                "x-component": "span",
                "x-id": "Landing_94_18",
                "x-dynamic": "true",
                "x-source-type": "unknown",
                "x-source-var": "txt",
                "x-source-editable": "false",
                children: txt
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 19
              }, this)]
            }, i, true, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 17
            }, this))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
          className: "lg:col-span-7 relative",
          "x-file-name": "Landing",
          "x-line-number": "99",
          "x-column": "10",
          "x-component": "div",
          "x-id": "Landing_99_10",
          "x-dynamic": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("img", {
            src: SLIDE_IMG,
            alt: "Landslide blocking a road",
            className: "rounded-md w-full object-cover h-[420px]",
            "x-file-name": "Landing",
            "x-line-number": "100",
            "x-column": "12",
            "x-component": "img",
            "x-id": "Landing_100_12",
            "x-dynamic": "false"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
            className: "absolute -bottom-6 -left-2 sm:-left-6 bg-[#0F172A] text-white rounded-md p-5 max-w-xs shadow-xl",
            "x-file-name": "Landing",
            "x-line-number": "101",
            "x-column": "12",
            "x-component": "div",
            "x-id": "Landing_101_12",
            "x-dynamic": "false",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
              className: "text-red-400 font-display font-bold",
              "x-file-name": "Landing",
              "x-line-number": "102",
              "x-column": "14",
              "x-component": "div",
              "x-id": "Landing_102_14",
              "x-dynamic": "false",
              children: "The cost of no warning"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("p", {
              className: "text-sm text-gray-300 mt-1",
              "x-file-name": "Landing",
              "x-line-number": "103",
              "x-column": "14",
              "x-component": "p",
              "x-id": "Landing_103_14",
              "x-dynamic": "false",
              children: "Blocked lifeline roads, buried homes, stranded communities. Hours of advance warning change outcomes."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("section", {
      className: "bg-white border-y border-gray-200",
      "x-file-name": "Landing",
      "x-line-number": "109",
      "x-column": "6",
      "x-component": "section",
      "x-id": "Landing_109_6",
      "x-dynamic": "false",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
        className: "max-w-6xl mx-auto px-6 py-20",
        "x-file-name": "Landing",
        "x-line-number": "110",
        "x-column": "8",
        "x-component": "div",
        "x-id": "Landing_110_8",
        "x-dynamic": "false",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
          className: "uppercase tracking-[0.2em] text-xs text-gray-500 font-semibold",
          "x-file-name": "Landing",
          "x-line-number": "111",
          "x-column": "10",
          "x-component": "div",
          "x-id": "Landing_111_10",
          "x-dynamic": "false",
          children: "How the system works"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("h2", {
          className: "font-display font-bold text-2xl sm:text-3xl tracking-tight mt-2 mb-10",
          "x-file-name": "Landing",
          "x-line-number": "112",
          "x-column": "10",
          "x-component": "h2",
          "x-id": "Landing_112_10",
          "x-dynamic": "false",
          children: "From sensor to siren in four stages"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
          className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5",
          "x-file-name": "Landing",
          "x-line-number": "113",
          "x-column": "10",
          "x-component": "div",
          "x-id": "Landing_113_10",
          "x-dynamic": "true",
          "x-source-type": "computed",
          "x-source-editable": "false",
          children: STEPS.map((s, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
            className: "relative bg-[#F8F9FA] border border-gray-200 rounded-md p-6 hover:border-emerald-600 transition-colors",
            "x-file-name": "Landing",
            "x-line-number": "115",
            "x-column": "14",
            "x-component": "div",
            "x-id": "Landing_115_14",
            "x-dynamic": "true",
            "x-source-type": "computed",
            "x-source-editable": "false",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
              className: "font-mono2 text-xs text-gray-400",
              "x-file-name": "Landing",
              "x-line-number": "116",
              "x-column": "16",
              "x-component": "div",
              "x-id": "Landing_116_16",
              "x-dynamic": "true",
              "x-source-type": "computed",
              "x-source-editable": "false",
              children: ["0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("span", {
                "data-ve-dynamic": "true",
                "x-excluded": "true",
                style: {
                  display: "contents"
                },
                "x-file-name": "Landing",
                "x-line-number": "116",
                "x-column": "16",
                "x-component": "div",
                "x-id": "Landing_116_16_expr1",
                "x-dynamic": "true",
                "x-source-type": "computed",
                "x-source-editable": "false",
                children: i + 1
              }, void 0, false)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(s.icon, {
              size: 28,
              className: "text-emerald-700 mt-3",
              "x-file-name": "Landing",
              "x-line-number": "117",
              "x-column": "16",
              "x-component": "icon",
              "x-id": "Landing_117_16",
              "x-dynamic": "false"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
              className: "font-display font-bold text-lg mt-3",
              "x-file-name": "Landing",
              "x-line-number": "118",
              "x-column": "16",
              "x-component": "div",
              "x-id": "Landing_118_16",
              "x-dynamic": "true",
              "x-source-type": "static-imported",
              "x-source-var": "STEPS",
              "x-source-file-abs": "/app/frontend/src/pages/Landing.jsx",
              "x-source-line": "21",
              "x-source-path": "title",
              "x-source-editable": "true",
              "x-array-var": "STEPS",
              "x-array-line": "21",
              "x-array-item-param": "s",
              children: s.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("p", {
              className: "text-sm text-gray-600 mt-2 leading-relaxed",
              "x-file-name": "Landing",
              "x-line-number": "119",
              "x-column": "16",
              "x-component": "p",
              "x-id": "Landing_119_16",
              "x-dynamic": "true",
              "x-source-type": "static-imported",
              "x-source-var": "STEPS",
              "x-source-file-abs": "/app/frontend/src/pages/Landing.jsx",
              "x-source-line": "21",
              "x-source-path": "desc",
              "x-source-editable": "true",
              "x-array-var": "STEPS",
              "x-array-line": "21",
              "x-array-item-param": "s",
              children: s.desc
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 17
            }, this), i < 3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
              className: "hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 text-gray-300",
              size: 20
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 27
            }, this)]
          }, i, true, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 15
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("section", {
      className: "max-w-6xl mx-auto px-6 py-20",
      "x-file-name": "Landing",
      "x-line-number": "127",
      "x-column": "6",
      "x-component": "section",
      "x-id": "Landing_127_6",
      "x-dynamic": "false",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
        className: "uppercase tracking-[0.2em] text-xs text-gray-500 font-semibold",
        "x-file-name": "Landing",
        "x-line-number": "128",
        "x-column": "8",
        "x-component": "div",
        "x-id": "Landing_128_8",
        "x-dynamic": "false",
        children: "Capabilities"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("h2", {
        className: "font-display font-bold text-2xl sm:text-3xl tracking-tight mt-2 mb-10",
        "x-file-name": "Landing",
        "x-line-number": "129",
        "x-column": "8",
        "x-component": "h2",
        "x-id": "Landing_129_8",
        "x-dynamic": "false",
        children: "Built for authorities, field teams and communities"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
        className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5",
        "x-file-name": "Landing",
        "x-line-number": "130",
        "x-column": "8",
        "x-component": "div",
        "x-id": "Landing_130_8",
        "x-dynamic": "true",
        "x-source-type": "computed",
        "x-source-editable": "false",
        children: FEATURES.map((f, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
          className: "bg-white border border-gray-200 rounded-md p-6 hover:shadow-md hover:border-gray-300 transition-all",
          "x-file-name": "Landing",
          "x-line-number": "132",
          "x-column": "12",
          "x-component": "div",
          "x-id": "Landing_132_12",
          "x-dynamic": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(f.icon, {
            size: 26,
            className: "text-emerald-700",
            "x-file-name": "Landing",
            "x-line-number": "133",
            "x-column": "14",
            "x-component": "icon",
            "x-id": "Landing_133_14",
            "x-dynamic": "false"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
            className: "font-display font-bold mt-3",
            "x-file-name": "Landing",
            "x-line-number": "134",
            "x-column": "14",
            "x-component": "div",
            "x-id": "Landing_134_14",
            "x-dynamic": "true",
            "x-source-type": "static-imported",
            "x-source-var": "FEATURES",
            "x-source-file-abs": "/app/frontend/src/pages/Landing.jsx",
            "x-source-line": "12",
            "x-source-path": "title",
            "x-source-editable": "true",
            "x-array-var": "FEATURES",
            "x-array-line": "12",
            "x-array-item-param": "f",
            children: f.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("p", {
            className: "text-sm text-gray-600 mt-2 leading-relaxed",
            "x-file-name": "Landing",
            "x-line-number": "135",
            "x-column": "14",
            "x-component": "p",
            "x-id": "Landing_135_14",
            "x-dynamic": "true",
            "x-source-type": "static-imported",
            "x-source-var": "FEATURES",
            "x-source-file-abs": "/app/frontend/src/pages/Landing.jsx",
            "x-source-line": "12",
            "x-source-path": "desc",
            "x-source-editable": "true",
            "x-array-var": "FEATURES",
            "x-array-line": "12",
            "x-array-item-param": "f",
            children: f.desc
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 15
          }, this)]
        }, i, true, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("section", {
      className: "bg-[#0F172A] text-white",
      "x-file-name": "Landing",
      "x-line-number": "141",
      "x-column": "6",
      "x-component": "section",
      "x-id": "Landing_141_6",
      "x-dynamic": "false",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
        className: "max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center",
        "x-file-name": "Landing",
        "x-line-number": "142",
        "x-column": "8",
        "x-component": "div",
        "x-id": "Landing_142_8",
        "x-dynamic": "false",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
          "x-file-name": "Landing",
          "x-line-number": "143",
          "x-column": "10",
          "x-component": "div",
          "x-id": "Landing_143_10",
          "x-dynamic": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
            className: "uppercase tracking-[0.2em] text-xs text-emerald-400 font-semibold",
            "x-file-name": "Landing",
            "x-line-number": "144",
            "x-column": "12",
            "x-component": "div",
            "x-id": "Landing_144_12",
            "x-dynamic": "false",
            children: "Command Center Preview"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("h2", {
            className: "font-display font-bold text-2xl sm:text-3xl tracking-tight mt-2",
            "x-file-name": "Landing",
            "x-line-number": "145",
            "x-column": "12",
            "x-component": "h2",
            "x-id": "Landing_145_12",
            "x-dynamic": "false",
            children: "A live operational picture of every monitored slope"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("p", {
            className: "mt-4 text-gray-400 leading-relaxed",
            "x-file-name": "Landing",
            "x-line-number": "146",
            "x-column": "12",
            "x-component": "p",
            "x-id": "Landing_146_12",
            "x-dynamic": "false",
            children: "Interactive risk map, AI prediction panel, historical event replay, sensor health and a full early-warning workflow \u2014 in a single dark command interface designed for control rooms and field devices alike."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
            to: "/dashboard",
            "data-testid": "preview-dashboard-btn",
            className: "mt-6 inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-[#0F172A] font-bold px-6 py-3 rounded-md transition-colors",
            children: ["Explore the Dashboard ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
              size: 18
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("img", {
          src: CMD_IMG,
          alt: "Command center screens",
          className: "rounded-md border border-zinc-700 w-full object-cover h-[340px]",
          "x-file-name": "Landing",
          "x-line-number": "152",
          "x-column": "10",
          "x-component": "img",
          "x-id": "Landing_152_10",
          "x-dynamic": "false"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("footer", {
      className: "bg-white border-t border-gray-200",
      "x-file-name": "Landing",
      "x-line-number": "156",
      "x-column": "6",
      "x-component": "footer",
      "x-id": "Landing_156_6",
      "x-dynamic": "false",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
        className: "max-w-6xl mx-auto px-6 py-10 flex flex-wrap gap-6 justify-between items-center text-sm text-gray-500",
        "x-file-name": "Landing",
        "x-line-number": "157",
        "x-column": "8",
        "x-component": "div",
        "x-id": "Landing_157_8",
        "x-dynamic": "false",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
          className: "font-display font-bold text-[#0F172A]",
          "x-file-name": "Landing",
          "x-line-number": "158",
          "x-column": "10",
          "x-component": "div",
          "x-id": "Landing_158_10",
          "x-dynamic": "false",
          children: "NER LANDSLIDE EWS \u2014 SIH Prototype"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
          className: "max-w-md text-xs leading-relaxed",
          "x-file-name": "Landing",
          "x-line-number": "159",
          "x-column": "10",
          "x-component": "div",
          "x-id": "Landing_159_10",
          "x-dynamic": "false",
          children: "Risk estimation and decision support only. This prototype uses simulated/demo data and does not guarantee landslide prediction. Not an official government system."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
          to: "/architecture",
          "data-testid": "footer-architecture-link",
          className: "text-emerald-700 font-semibold hover:underline",
          children: "System Architecture \u2192"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, this);
}
_s(Landing, "JyAPK7ITTzcs7m+LdMgs5MHNKNQ=", false, function () {
  return [_context_AppContext__WEBPACK_IMPORTED_MODULE_2__.useApp];
});
_c = Landing;
var _c;
__webpack_require__.$Refresh$.register(_c, "Landing");

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

