/***/ "./src/components/EmergencyMode.jsx"
/*!******************************************!*\
  !*** ./src/components/EmergencyMode.jsx ***!
  \******************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EmergencyMode)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/AppContext */ "./src/context/AppContext.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4N6VE7H7.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/circle-check.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/octagon-alert.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/navigation.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/phone-call.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/route.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/x.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/app/frontend/src/components/EmergencyMode.jsx",
  _s = __webpack_require__.$Refresh$.signature();





const CONTACTS = [{
  name: "NDMA Emergency Operations",
  number: "011-26701728"
}, {
  name: "State Emergency Operations Centre",
  number: "1077"
}, {
  name: "Police Control Room",
  number: "100"
}, {
  name: "Ambulance",
  number: "102"
}, {
  name: "Fire & Rescue",
  number: "101"
}];
function EmergencyMode() {
  _s();
  var _emergency$score;
  const {
    emergency,
    setEmergency,
    t
  } = (0,_context_AppContext__WEBPACK_IMPORTED_MODULE_1__.useApp)();
  const [showContacts, setShowContacts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  if (!emergency) return null;
  const loc = emergency.location || "Mangan Ridge, Sikkim";
  const score = (_emergency$score = emergency.score) !== null && _emergency$score !== void 0 ? _emergency$score : 91;
  const go = path => {
    setEmergency(null);
    navigate(path);
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
    className: "fixed inset-0 z-[9998] bg-black emergency-frame overflow-y-auto",
    role: "alert",
    "aria-live": "assertive",
    "data-testid": "emergency-mode-screen",
    "x-file-name": "EmergencyMode",
    "x-line-number": "26",
    "x-column": "4",
    "x-component": "div",
    "x-id": "EmergencyMode_26_4",
    "x-dynamic": "false",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("button", {
      onClick: () => setEmergency(null),
      "data-testid": "emergency-close-btn",
      className: "absolute top-4 right-4 text-white/70 hover:text-white z-10",
      "x-file-name": "EmergencyMode",
      "x-line-number": "27",
      "x-column": "6",
      "x-component": "button",
      "x-id": "EmergencyMode_27_6",
      "x-dynamic": "false",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
        size: 28
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 80
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
      className: "min-h-full flex flex-col items-center justify-center p-6 text-center",
      "x-file-name": "EmergencyMode",
      "x-line-number": "29",
      "x-column": "6",
      "x-component": "div",
      "x-id": "EmergencyMode_29_6",
      "x-dynamic": "true",
      "x-source-type": "computed",
      "x-source-editable": "false",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
        size: 72,
        className: "text-red-500 animate-heartbeat",
        "x-file-name": "EmergencyMode",
        "x-line-number": "30",
        "x-column": "8",
        "x-component": "AlertOctagon",
        "x-id": "EmergencyMode_30_8",
        "x-dynamic": "false"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: "mt-4 text-red-500 font-display font-extrabold text-4xl sm:text-6xl tracking-tight animate-pulse-red",
        "x-file-name": "EmergencyMode",
        "x-line-number": "31",
        "x-column": "8",
        "x-component": "div",
        "x-id": "EmergencyMode_31_8",
        "x-dynamic": "true",
        "x-source-type": "computed",
        "x-source-editable": "false",
        children: ["\uD83D\uDEA8 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
          "data-ve-dynamic": "true",
          "x-excluded": "true",
          style: {
            display: "contents"
          },
          "x-file-name": "EmergencyMode",
          "x-line-number": "31",
          "x-column": "8",
          "x-component": "div",
          "x-id": "EmergencyMode_31_8_expr1",
          "x-dynamic": "true",
          "x-source-type": "computed",
          "x-source-editable": "false",
          children: t("emergencyWarning")
        }, void 0, false)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: "mt-4 flex items-center gap-3 flex-wrap justify-center",
        "x-file-name": "EmergencyMode",
        "x-line-number": "34",
        "x-column": "8",
        "x-component": "div",
        "x-id": "EmergencyMode_34_8",
        "x-dynamic": "false",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
          className: "px-4 py-1.5 bg-red-600 text-white font-bold rounded-sm text-lg",
          "x-file-name": "EmergencyMode",
          "x-line-number": "35",
          "x-column": "10",
          "x-component": "span",
          "x-id": "EmergencyMode_35_10",
          "x-dynamic": "true",
          "x-source-type": "computed",
          "x-source-editable": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
            "data-ve-dynamic": "true",
            "x-excluded": "true",
            style: {
              display: "contents"
            },
            "x-file-name": "EmergencyMode",
            "x-line-number": "35",
            "x-column": "10",
            "x-component": "span",
            "x-id": "EmergencyMode_35_10_expr0",
            "x-dynamic": "true",
            "x-source-type": "computed",
            "x-source-editable": "false",
            children: t("riskLevel")
          }, void 0, false), ": ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
            "data-ve-dynamic": "true",
            "x-excluded": "true",
            style: {
              display: "contents"
            },
            "x-file-name": "EmergencyMode",
            "x-line-number": "35",
            "x-column": "10",
            "x-component": "span",
            "x-id": "EmergencyMode_35_10_expr2",
            "x-dynamic": "true",
            "x-source-type": "computed",
            "x-source-editable": "false",
            children: t("critical")
          }, void 0, false)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
          className: "px-4 py-1.5 border border-red-500 text-red-400 font-mono2 rounded-sm",
          "x-file-name": "EmergencyMode",
          "x-line-number": "36",
          "x-column": "10",
          "x-component": "span",
          "x-id": "EmergencyMode_36_10",
          "x-dynamic": "true",
          "x-source-type": "computed",
          "x-source-editable": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
            "data-ve-dynamic": "true",
            "x-excluded": "true",
            style: {
              display: "contents"
            },
            "x-file-name": "EmergencyMode",
            "x-line-number": "36",
            "x-column": "10",
            "x-component": "span",
            "x-id": "EmergencyMode_36_10_expr0",
            "x-dynamic": "true",
            "x-source-type": "computed",
            "x-source-editable": "false",
            children: t("riskScore")
          }, void 0, false), ": ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
            "data-ve-dynamic": "true",
            "x-excluded": "true",
            style: {
              display: "contents"
            },
            "x-file-name": "EmergencyMode",
            "x-line-number": "36",
            "x-column": "10",
            "x-component": "span",
            "x-id": "EmergencyMode_36_10_expr2",
            "x-dynamic": "true",
            "x-source-type": "unknown",
            "x-source-var": "score",
            "x-source-editable": "false",
            children: score
          }, void 0, false), "/100"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: "mt-3 text-white/90 text-lg font-medium",
        "x-file-name": "EmergencyMode",
        "x-line-number": "38",
        "x-column": "8",
        "x-component": "div",
        "x-id": "EmergencyMode_38_8",
        "x-dynamic": "true",
        "x-source-type": "computed",
        "x-source-editable": "false",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
          "data-ve-dynamic": "true",
          "x-excluded": "true",
          style: {
            display: "contents"
          },
          "x-file-name": "EmergencyMode",
          "x-line-number": "38",
          "x-column": "8",
          "x-component": "div",
          "x-id": "EmergencyMode_38_8_expr0",
          "x-dynamic": "true",
          "x-source-type": "computed",
          "x-source-editable": "false",
          children: t("viewLocation")
        }, void 0, false), ": ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
          "data-ve-dynamic": "true",
          "x-excluded": "true",
          style: {
            display: "contents"
          },
          "x-file-name": "EmergencyMode",
          "x-line-number": "38",
          "x-column": "8",
          "x-component": "div",
          "x-id": "EmergencyMode_38_8_expr2",
          "x-dynamic": "true",
          "x-source-type": "unknown",
          "x-source-var": "loc",
          "x-source-editable": "false",
          children: loc
        }, void 0, false)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: "mt-8 w-full max-w-2xl text-left bg-red-950/40 border border-red-800 rounded-md p-6",
        "x-file-name": "EmergencyMode",
        "x-line-number": "40",
        "x-column": "8",
        "x-component": "div",
        "x-id": "EmergencyMode_40_8",
        "x-dynamic": "false",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
          className: "text-red-400 font-display font-bold text-xl mb-4",
          "x-file-name": "EmergencyMode",
          "x-line-number": "41",
          "x-column": "10",
          "x-component": "div",
          "x-id": "EmergencyMode_41_10",
          "x-dynamic": "true",
          "x-source-type": "computed",
          "x-source-editable": "false",
          children: t("immediateActions")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("ul", {
          className: "space-y-3 text-white text-base sm:text-lg",
          "x-file-name": "EmergencyMode",
          "x-line-number": "42",
          "x-column": "10",
          "x-component": "ul",
          "x-id": "EmergencyMode_42_10",
          "x-dynamic": "true",
          "x-source-type": "computed",
          "x-source-editable": "false",
          children: [t("actSlopes"), t("actRivers"), t("actRoads"), t("actCenter"), t("actAuthority")].map((a, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("li", {
            className: "flex gap-3",
            "x-file-name": "EmergencyMode",
            "x-line-number": "44",
            "x-column": "14",
            "x-component": "li",
            "x-id": "EmergencyMode_44_14",
            "x-dynamic": "true",
            "x-source-type": "static-local",
            "x-source-file": "/app/frontend/src/components/EmergencyMode.jsx",
            "x-source-file-abs": "/app/frontend/src/components/EmergencyMode.jsx",
            "x-source-line": "43",
            "x-source-editable": "true",
            "x-array-file": "/app/frontend/src/components/EmergencyMode.jsx",
            "x-array-line": "43",
            "x-array-item-param": "a",
            "x-array-inline": "true",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
              className: "text-red-500 font-bold",
              "x-file-name": "EmergencyMode",
              "x-line-number": "44",
              "x-column": "49",
              "x-component": "span",
              "x-id": "EmergencyMode_44_49",
              "x-dynamic": "true",
              "x-source-type": "computed",
              "x-source-editable": "false",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
                "data-ve-dynamic": "true",
                "x-excluded": "true",
                style: {
                  display: "contents"
                },
                "x-file-name": "EmergencyMode",
                "x-line-number": "44",
                "x-column": "49",
                "x-component": "span",
                "x-id": "EmergencyMode_44_49_expr0",
                "x-dynamic": "true",
                "x-source-type": "computed",
                "x-source-editable": "false",
                children: i + 1
              }, void 0, false), "."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 50
            }, this), a]
          }, i, true, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 15
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: "mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl",
        "x-file-name": "EmergencyMode",
        "x-line-number": "49",
        "x-column": "8",
        "x-component": "div",
        "x-id": "EmergencyMode_49_8",
        "x-dynamic": "false",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("button", {
          onClick: () => go("/evacuation"),
          "data-testid": "emergency-navigate-btn",
          className: "flex items-center justify-center gap-3 bg-white text-black font-bold text-lg py-5 rounded-md hover:bg-zinc-200 transition-colors",
          "x-file-name": "EmergencyMode",
          "x-line-number": "50",
          "x-column": "10",
          "x-component": "button",
          "x-id": "EmergencyMode_50_10",
          "x-dynamic": "true",
          "x-source-type": "computed",
          "x-source-editable": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
            size: 24,
            "x-file-name": "EmergencyMode",
            "x-line-number": "52",
            "x-column": "12",
            "x-component": "Navigation",
            "x-id": "EmergencyMode_52_12",
            "x-dynamic": "false"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, this), " ", t("navigateSafeZone")]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("button", {
          onClick: () => setShowContacts(!showContacts),
          "data-testid": "emergency-contacts-btn",
          className: "flex items-center justify-center gap-3 bg-zinc-800 text-white font-bold text-lg py-5 rounded-md border border-zinc-600 hover:bg-zinc-700 transition-colors",
          "x-file-name": "EmergencyMode",
          "x-line-number": "54",
          "x-column": "10",
          "x-component": "button",
          "x-id": "EmergencyMode_54_10",
          "x-dynamic": "true",
          "x-source-type": "computed",
          "x-source-editable": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
            size: 24,
            "x-file-name": "EmergencyMode",
            "x-line-number": "56",
            "x-column": "12",
            "x-component": "PhoneCall",
            "x-id": "EmergencyMode_56_12",
            "x-dynamic": "false"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, this), " ", t("emergencyContacts")]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("button", {
          onClick: () => go("/evacuation"),
          "data-testid": "emergency-route-btn",
          className: "flex items-center justify-center gap-3 bg-zinc-800 text-white font-bold text-lg py-5 rounded-md border border-zinc-600 hover:bg-zinc-700 transition-colors",
          "x-file-name": "EmergencyMode",
          "x-line-number": "58",
          "x-column": "10",
          "x-component": "button",
          "x-id": "EmergencyMode_58_10",
          "x-dynamic": "true",
          "x-source-type": "computed",
          "x-source-editable": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
            size: 24
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, this), " ", t("evacuationRoute")]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("button", {
          onClick: () => setEmergency(null),
          "data-testid": "emergency-acknowledge-btn",
          className: "flex items-center justify-center gap-3 bg-red-600 text-white font-bold text-lg py-5 rounded-md hover:bg-red-500 transition-colors",
          "x-file-name": "EmergencyMode",
          "x-line-number": "62",
          "x-column": "10",
          "x-component": "button",
          "x-id": "EmergencyMode_62_10",
          "x-dynamic": "true",
          "x-source-type": "computed",
          "x-source-editable": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
            size: 24,
            "x-file-name": "EmergencyMode",
            "x-line-number": "64",
            "x-column": "12",
            "x-component": "CheckCircle2",
            "x-id": "EmergencyMode_64_12",
            "x-dynamic": "false"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, this), " ", t("acknowledgeAlert")]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), showContacts && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: "mt-6 w-full max-w-2xl bg-zinc-900 border border-zinc-700 rounded-md p-5 text-left",
        "data-testid": "emergency-contacts-list",
        "x-file-name": "EmergencyMode",
        "x-line-number": "69",
        "x-column": "10",
        "x-component": "div",
        "x-id": "EmergencyMode_69_10",
        "x-dynamic": "true",
        "x-source-type": "computed",
        "x-source-editable": "false",
        children: CONTACTS.map(c => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
          className: "flex justify-between py-2 border-b border-zinc-800 last:border-0",
          "x-file-name": "EmergencyMode",
          "x-line-number": "71",
          "x-column": "14",
          "x-component": "div",
          "x-id": "EmergencyMode_71_14",
          "x-dynamic": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
            className: "text-white/90",
            "x-file-name": "EmergencyMode",
            "x-line-number": "72",
            "x-column": "16",
            "x-component": "span",
            "x-id": "EmergencyMode_72_16",
            "x-dynamic": "true",
            "x-source-type": "static-imported",
            "x-source-var": "CONTACTS",
            "x-source-file-abs": "/app/frontend/src/components/EmergencyMode.jsx",
            "x-source-line": "6",
            "x-source-path": "name",
            "x-source-editable": "true",
            "x-array-var": "CONTACTS",
            "x-array-line": "6",
            "x-array-item-param": "c",
            children: c.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
            href: `tel:${c.number}`,
            className: "font-mono2 text-emerald-400 font-bold",
            "x-file-name": "EmergencyMode",
            "x-line-number": "73",
            "x-column": "16",
            "x-component": "a",
            "x-id": "EmergencyMode_73_16",
            "x-dynamic": "true",
            "x-source-type": "static-imported",
            "x-source-var": "CONTACTS",
            "x-source-file-abs": "/app/frontend/src/components/EmergencyMode.jsx",
            "x-source-line": "6",
            "x-source-path": "number",
            "x-source-editable": "true",
            "x-array-var": "CONTACTS",
            "x-array-line": "6",
            "x-array-item-param": "c",
            children: c.number
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 17
          }, this)]
        }, c.number, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 15
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: "mt-8 text-white/40 text-xs font-mono2",
        "x-file-name": "EmergencyMode",
        "x-line-number": "78",
        "x-column": "8",
        "x-component": "div",
        "x-id": "EmergencyMode_78_8",
        "x-dynamic": "false",
        children: "PROTOTYPE \u2014 decision support only. Always follow official authority instructions."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, this);
}
_s(EmergencyMode, "S8rG/aQASfOLKzBJ6AbugYhJFzo=", false, function () {
  return [_context_AppContext__WEBPACK_IMPORTED_MODULE_1__.useApp, react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate];
});
_c = EmergencyMode;
var _c;
__webpack_require__.$Refresh$.register(_c, "EmergencyMode");

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

