/***/ "./src/components/AppLayout.jsx"
/*!**************************************!*\
  !*** ./src/components/AppLayout.jsx ***!
  \**************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppLayout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4N6VE7H7.mjs");
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/AppContext */ "./src/context/AppContext.jsx");
/* harmony import */ var _lib_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/i18n */ "./src/lib/i18n.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/chart-column.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/triangle-alert.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/activity.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/bell.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/brain-circuit.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/file-warning.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/flask-conical.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/globe.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/history.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/layout-dashboard.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/life-buoy.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/log-out.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/menu.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/network.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/radio-tower.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/shield-check.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/siren.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/x.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/app/frontend/src/components/AppLayout.jsx",
  _s = __webpack_require__.$Refresh$.signature();






const NAV = [{
  to: "/dashboard",
  key: "dashboard",
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_13__["default"]
}, {
  to: "/warnings",
  key: "warnings",
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"]
}, {
  to: "/prediction",
  key: "prediction",
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"]
}, {
  to: "/replay",
  key: "replay",
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_12__["default"]
}, {
  to: "/evacuation",
  key: "evacuation",
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_14__["default"]
}, {
  to: "/sensors",
  key: "sensors",
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_18__["default"]
}, {
  to: "/data-health",
  key: "dataHealth",
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"]
}, {
  to: "/analytics",
  key: "analytics",
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"]
}, {
  to: "/notifications",
  key: "notifications",
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"]
}, {
  to: "/report",
  key: "reportHazard",
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_9__["default"]
}, {
  to: "/admin",
  key: "admin",
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_19__["default"]
}, {
  to: "/architecture",
  key: "architecture",
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_17__["default"]
}];
const NET_STYLE = {
  online: {
    color: "#10B981",
    key: "online"
  },
  limited: {
    color: "#F59E0B",
    key: "limited"
  },
  offline: {
    color: "#EF4444",
    key: "offline"
  }
};
function AppLayout({
  children
}) {
  _s();
  const {
    t,
    lang,
    setLang,
    network,
    simOffline,
    toggleSimOffline,
    user,
    logout,
    setEmergency,
    queueCount
  } = (0,_context_AppContext__WEBPACK_IMPORTED_MODULE_2__.useApp)();
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  const net = NET_STYLE[network];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)("div", {
    className: "min-h-screen cc-bg flex",
    "x-file-name": "AppLayout",
    "x-line-number": "36",
    "x-column": "4",
    "x-component": "div",
    "x-id": "AppLayout_36_4",
    "x-dynamic": "false",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)("aside", {
      className: `fixed lg:static z-40 inset-y-0 left-0 w-60 cc-surface border-r border-zinc-800 flex flex-col transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`,
      "x-file-name": "AppLayout",
      "x-line-number": "37",
      "x-column": "6",
      "x-component": "aside",
      "x-id": "AppLayout_37_6",
      "x-dynamic": "false",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)("div", {
        className: "p-4 border-b border-zinc-800 flex items-center justify-between",
        "x-file-name": "AppLayout",
        "x-line-number": "38",
        "x-column": "8",
        "x-component": "div",
        "x-id": "AppLayout_38_8",
        "x-dynamic": "false",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
          to: "/",
          className: "font-display font-bold cc-text text-sm leading-tight",
          "data-testid": "nav-brand",
          children: ["NER LANDSLIDE", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)("br", {
            "x-file-name": "AppLayout",
            "x-line-number": "40",
            "x-column": "25",
            "x-component": "br",
            "x-id": "AppLayout_40_25",
            "x-dynamic": "false"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 26
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)("span", {
            className: "text-emerald-400",
            "x-file-name": "AppLayout",
            "x-line-number": "40",
            "x-column": "31",
            "x-component": "span",
            "x-id": "AppLayout_40_31",
            "x-dynamic": "false",
            children: "EARLY WARNING"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 32
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)("button", {
          className: "lg:hidden cc-text",
          onClick: () => setOpen(false),
          "data-testid": "sidebar-close",
          "x-file-name": "AppLayout",
          "x-line-number": "42",
          "x-column": "10",
          "x-component": "button",
          "x-id": "AppLayout_42_10",
          "x-dynamic": "false",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_21__["default"], {
            size: 18
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 108
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)("nav", {
        className: "flex-1 overflow-y-auto py-2",
        "x-file-name": "AppLayout",
        "x-line-number": "44",
        "x-column": "8",
        "x-component": "nav",
        "x-id": "AppLayout_44_8",
        "x-dynamic": "true",
        "x-source-type": "computed",
        "x-source-editable": "false",
        children: NAV.map(({
          to,
          key,
          icon: Icon
        }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
          to: to,
          onClick: () => setOpen(false),
          "data-testid": `nav-${key}`,
          className: ({
            isActive
          }) => `flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${isActive ? "bg-zinc-800 text-white border-r-2 border-emerald-400" : "cc-text-2 hover:bg-zinc-800/60 hover:text-white"}`,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(Icon, {
            size: 16,
            "x-file-name": "AppLayout",
            "x-line-number": "48",
            "x-column": "14",
            "x-component": "Icon",
            "x-id": "AppLayout_48_14",
            "x-dynamic": "true"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 15
          }, this), " ", t(key)]
        }, to, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)("div", {
        className: "p-3 border-t border-zinc-800 text-xs cc-text-2",
        "x-file-name": "AppLayout",
        "x-line-number": "52",
        "x-column": "8",
        "x-component": "div",
        "x-id": "AppLayout_52_8",
        "x-dynamic": "false",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)("div", {
          className: "font-mono2",
          "x-file-name": "AppLayout",
          "x-line-number": "53",
          "x-column": "10",
          "x-component": "div",
          "x-id": "AppLayout_53_10",
          "x-dynamic": "false",
          children: "v0.9 PROTOTYPE"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)("div", {
          "x-file-name": "AppLayout",
          "x-line-number": "54",
          "x-column": "10",
          "x-component": "div",
          "x-id": "AppLayout_54_10",
          "x-dynamic": "false",
          children: "Simulated data \u2014 decision support only"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)("div", {
      className: "flex-1 flex flex-col min-w-0",
      "x-file-name": "AppLayout",
      "x-line-number": "58",
      "x-column": "6",
      "x-component": "div",
      "x-id": "AppLayout_58_6",
      "x-dynamic": "true",
      "x-source-type": "computed",
      "x-source-editable": "false",
      children: [network === "offline" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)("div", {
        className: "striped-warn text-white text-xs font-semibold text-center py-1.5",
        "data-testid": "offline-banner",
        "x-file-name": "AppLayout",
        "x-line-number": "60",
        "x-column": "10",
        "x-component": "div",
        "x-id": "AppLayout_60_10",
        "x-dynamic": "true",
        "x-source-type": "computed",
        "x-source-editable": "false",
        children: t("offlineBanner")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)("header", {
        className: "sticky top-0 z-30 backdrop-blur-xl bg-black/70 border-b border-zinc-800 px-4 py-2.5 flex items-center gap-3 flex-wrap",
        "x-file-name": "AppLayout",
        "x-line-number": "64",
        "x-column": "8",
        "x-component": "header",
        "x-id": "AppLayout_64_8",
        "x-dynamic": "false",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)("button", {
          className: "lg:hidden cc-text",
          onClick: () => setOpen(true),
          "data-testid": "sidebar-open",
          "x-file-name": "AppLayout",
          "x-line-number": "65",
          "x-column": "10",
          "x-component": "button",
          "x-id": "AppLayout_65_10",
          "x-dynamic": "false",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_16__["default"], {
            size: 20
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 106
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)("div", {
          className: "flex items-center gap-2",
          "data-testid": "network-indicator",
          "x-file-name": "AppLayout",
          "x-line-number": "66",
          "x-column": "10",
          "x-component": "div",
          "x-id": "AppLayout_66_10",
          "x-dynamic": "true",
          "x-source-type": "computed",
          "x-source-editable": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)("span", {
            className: "w-2.5 h-2.5 rounded-full",
            style: {
              backgroundColor: net.color,
              boxShadow: `0 0 8px ${net.color}`
            },
            "x-file-name": "AppLayout",
            "x-line-number": "67",
            "x-column": "12",
            "x-component": "span",
            "x-id": "AppLayout_67_12",
            "x-dynamic": "false"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)("span", {
            className: "text-xs font-mono2 font-semibold",
            style: {
              color: net.color
            },
            "x-file-name": "AppLayout",
            "x-line-number": "68",
            "x-column": "12",
            "x-component": "span",
            "x-id": "AppLayout_68_12",
            "x-dynamic": "true",
            "x-source-type": "computed",
            "x-source-editable": "false",
            children: t(net.key)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, this), queueCount > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)("span", {
            className: "text-[10px] cc-text-2",
            "x-file-name": "AppLayout",
            "x-line-number": "69",
            "x-column": "31",
            "x-component": "span",
            "x-id": "AppLayout_69_31",
            "x-dynamic": "true",
            "x-source-type": "unknown",
            "x-source-var": "queueCount",
            "x-source-editable": "false",
            children: ["\xB7 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)("span", {
              "data-ve-dynamic": "true",
              "x-excluded": "true",
              style: {
                display: "contents"
              },
              "x-file-name": "AppLayout",
              "x-line-number": "69",
              "x-column": "31",
              "x-component": "span",
              "x-id": "AppLayout_69_31_expr1",
              "x-dynamic": "true",
              "x-source-type": "unknown",
              "x-source-var": "queueCount",
              "x-source-editable": "false",
              children: queueCount
            }, void 0, false), " queued"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 32
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)("button", {
          onClick: toggleSimOffline,
          "data-testid": "simulate-offline-btn",
          className: "text-xs px-2 py-1 rounded-sm border border-zinc-700 cc-text-2 hover:text-white hover:border-zinc-500 transition-colors",
          "x-file-name": "AppLayout",
          "x-line-number": "71",
          "x-column": "10",
          "x-component": "button",
          "x-id": "AppLayout_71_10",
          "x-dynamic": "true",
          "x-source-type": "computed",
          "x-source-editable": "false",
          children: simOffline ? "Go Online" : "Simulate Offline"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)("div", {
          className: "ml-auto flex items-center gap-2 flex-wrap",
          "x-file-name": "AppLayout",
          "x-line-number": "75",
          "x-column": "10",
          "x-component": "div",
          "x-id": "AppLayout_75_10",
          "x-dynamic": "true",
          "x-source-type": "computed",
          "x-source-editable": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_11__["default"], {
            size: 15,
            className: "cc-text-2",
            "x-file-name": "AppLayout",
            "x-line-number": "76",
            "x-column": "12",
            "x-component": "Globe",
            "x-id": "AppLayout_76_12",
            "x-dynamic": "false"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)("select", {
            value: lang,
            onChange: e => setLang(e.target.value),
            "data-testid": "language-select",
            className: "bg-zinc-900 border border-zinc-700 text-xs cc-text rounded-sm px-2 py-1.5",
            "x-file-name": "AppLayout",
            "x-line-number": "77",
            "x-column": "12",
            "x-component": "select",
            "x-id": "AppLayout_77_12",
            "x-dynamic": "true",
            "x-source-type": "computed",
            "x-source-editable": "false",
            children: _lib_i18n__WEBPACK_IMPORTED_MODULE_3__.LANGUAGES.map(l => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)("option", {
              value: l.code,
              "x-file-name": "AppLayout",
              "x-line-number": "79",
              "x-column": "36",
              "x-component": "option",
              "x-id": "AppLayout_79_36",
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
              lineNumber: 79,
              columnNumber: 37
            }, this))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)("button", {
            onClick: () => navigate("/dashboard?demo=1"),
            "data-testid": "demo-mode-btn",
            className: "flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-sm border border-amber-500/50 text-amber-400 hover:bg-amber-500/10 transition-colors",
            "x-file-name": "AppLayout",
            "x-line-number": "81",
            "x-column": "12",
            "x-component": "button",
            "x-id": "AppLayout_81_12",
            "x-dynamic": "true",
            "x-source-type": "computed",
            "x-source-editable": "false",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_10__["default"], {
              size: 14,
              "x-file-name": "AppLayout",
              "x-line-number": "83",
              "x-column": "14",
              "x-component": "FlaskConical",
              "x-id": "AppLayout_83_14",
              "x-dynamic": "false"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, this), " ", t("demoMode")]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)("button", {
            onClick: () => setEmergency({
              source: "manual"
            }),
            "data-testid": "emergency-mode-btn",
            className: "flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-sm bg-red-600 text-white font-semibold hover:bg-red-500 transition-colors",
            "x-file-name": "AppLayout",
            "x-line-number": "85",
            "x-column": "12",
            "x-component": "button",
            "x-id": "AppLayout_85_12",
            "x-dynamic": "true",
            "x-source-type": "computed",
            "x-source-editable": "false",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_20__["default"], {
              size: 14,
              "x-file-name": "AppLayout",
              "x-line-number": "87",
              "x-column": "14",
              "x-component": "Siren",
              "x-id": "AppLayout_87_14",
              "x-dynamic": "false"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 15
            }, this), " ", t("emergencyMode")]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, this), user ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)("div", {
            className: "flex items-center gap-2",
            "x-file-name": "AppLayout",
            "x-line-number": "90",
            "x-column": "14",
            "x-component": "div",
            "x-id": "AppLayout_90_14",
            "x-dynamic": "false",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)("span", {
              className: "text-xs cc-text-2 hidden sm:inline",
              "x-file-name": "AppLayout",
              "x-line-number": "91",
              "x-column": "16",
              "x-component": "span",
              "x-id": "AppLayout_91_16",
              "x-dynamic": "true",
              "x-source-type": "unknown",
              "x-source-var": "user",
              "x-source-path": "name",
              "x-source-editable": "false",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)("span", {
                "data-ve-dynamic": "true",
                "x-excluded": "true",
                style: {
                  display: "contents"
                },
                "x-file-name": "AppLayout",
                "x-line-number": "91",
                "x-column": "16",
                "x-component": "span",
                "x-id": "AppLayout_91_16_expr0",
                "x-dynamic": "true",
                "x-source-type": "unknown",
                "x-source-var": "user",
                "x-source-path": "name",
                "x-source-editable": "false",
                children: user.name
              }, void 0, false), " \xB7 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)("span", {
                className: "font-mono2",
                "x-file-name": "AppLayout",
                "x-line-number": "91",
                "x-column": "83",
                "x-component": "span",
                "x-id": "AppLayout_91_83",
                "x-dynamic": "true",
                "x-source-type": "unknown",
                "x-source-var": "user",
                "x-source-path": "role",
                "x-source-editable": "false",
                children: user.role
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 84
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)("button", {
              onClick: logout,
              "data-testid": "logout-btn",
              className: "cc-text-2 hover:text-white transition-colors",
              "x-file-name": "AppLayout",
              "x-line-number": "92",
              "x-column": "16",
              "x-component": "button",
              "x-id": "AppLayout_92_16",
              "x-dynamic": "false",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_15__["default"], {
                size: 15,
                "x-file-name": "AppLayout",
                "x-line-number": "92",
                "x-column": "123",
                "x-component": "LogOut",
                "x-id": "AppLayout_92_123",
                "x-dynamic": "false"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 124
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 15
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
            to: "/login",
            "data-testid": "login-link",
            className: "text-xs px-3 py-1.5 rounded-sm bg-emerald-600 text-white font-semibold hover:bg-emerald-500 transition-colors",
            children: t("login")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxDEV)("main", {
        className: "flex-1 p-4 lg:p-6 min-w-0",
        "x-file-name": "AppLayout",
        "x-line-number": "99",
        "x-column": "8",
        "x-component": "main",
        "x-id": "AppLayout_99_8",
        "x-dynamic": "true",
        "x-source-type": "prop",
        "x-source-var": "children",
        "x-source-editable": "false",
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, this);
}
_s(AppLayout, "ObOKhHRyZ+YlUE0CYkNSBDJ1tig=", false, function () {
  return [_context_AppContext__WEBPACK_IMPORTED_MODULE_2__.useApp, react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate];
});
_c = AppLayout;
var _c;
__webpack_require__.$Refresh$.register(_c, "AppLayout");

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

