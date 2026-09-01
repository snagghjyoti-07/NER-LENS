/***/ "./src/pages/Replay.jsx"
/*!******************************!*\
  !*** ./src/pages/Replay.jsx ***!
  \******************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Replay)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/api */ "./src/lib/api.js");
/* harmony import */ var _components_ui_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ui-helpers */ "./src/components/ui-helpers.jsx");
/* harmony import */ var _lib_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/i18n */ "./src/lib/i18n.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/history.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/play.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/component/Tooltip.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/component/ResponsiveContainer.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/ReferenceDot.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/CartesianGrid.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/Area.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/XAxis.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/YAxis.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/chart/AreaChart.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/app/frontend/src/pages/Replay.jsx",
  _s = __webpack_require__.$Refresh$.signature();







function Replay() {
  _s();
  var _evt$timeline;
  const [events, setEvents] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [evt, setEvt] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [step, setStep] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [playing, setPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__.apiGet)("/historical-events").then(r => {
      setEvents(r.data);
      if (r.data[0]) select(r.data[0].id);
    }).catch(() => setEvents([]));
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!playing || !evt) return;
    const id = setInterval(() => {
      setStep(s => {
        if (s >= evt.timeline.length - 1) {
          setPlaying(false);
          return s;
        }
        return s + 1;
      });
    }, 1600);
    return () => clearInterval(id);
  }, [playing, evt]);
  const select = async id => {
    const r = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__.apiGet)(`/historical-events/${id}`);
    setEvt(r.data);
    setStep(0);
    setPlaying(false);
  };
  if (!events) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_2__.Loading, {
    label: "Loading historical archive\u2026",
    "x-file-name": "Replay",
    "x-line-number": "29",
    "x-column": "22",
    "x-component": "Loading",
    "x-id": "Replay_29_22",
    "x-dynamic": "true"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 23
  }, this);
  const cur = evt === null || evt === void 0 ? void 0 : (_evt$timeline = evt.timeline) === null || _evt$timeline === void 0 ? void 0 : _evt$timeline[step];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
    className: "space-y-5",
    "data-testid": "replay-page",
    "x-file-name": "Replay",
    "x-line-number": "33",
    "x-column": "4",
    "x-component": "div",
    "x-id": "Replay_33_4",
    "x-dynamic": "false",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
      className: "flex items-center gap-3",
      "x-file-name": "Replay",
      "x-line-number": "34",
      "x-column": "6",
      "x-component": "div",
      "x-id": "Replay_34_6",
      "x-dynamic": "false",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
        size: 22,
        className: "text-fuchsia-400",
        "x-file-name": "Replay",
        "x-line-number": "35",
        "x-column": "8",
        "x-component": "History",
        "x-id": "Replay_35_8",
        "x-dynamic": "false"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
        "x-file-name": "Replay",
        "x-line-number": "36",
        "x-column": "8",
        "x-component": "div",
        "x-id": "Replay_36_8",
        "x-dynamic": "false",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("h1", {
          className: "font-display font-bold text-xl cc-text tracking-tight",
          "x-file-name": "Replay",
          "x-line-number": "37",
          "x-column": "10",
          "x-component": "h1",
          "x-id": "Replay_37_10",
          "x-dynamic": "false",
          children: "Historical Landslide Replay"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
          className: "text-xs cc-text-2",
          "x-file-name": "Replay",
          "x-line-number": "38",
          "x-column": "10",
          "x-component": "div",
          "x-id": "Replay_38_10",
          "x-dynamic": "false",
          children: "DEMO DATA \u2014 simulated reconstruction for evaluation. Replace with verified datasets for production."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
      className: "grid grid-cols-1 lg:grid-cols-12 gap-4",
      "x-file-name": "Replay",
      "x-line-number": "42",
      "x-column": "6",
      "x-component": "div",
      "x-id": "Replay_42_6",
      "x-dynamic": "true",
      "x-source-type": "computed",
      "x-source-editable": "false",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
        className: "lg:col-span-4 space-y-2",
        "x-file-name": "Replay",
        "x-line-number": "43",
        "x-column": "8",
        "x-component": "div",
        "x-id": "Replay_43_8",
        "x-dynamic": "true",
        "x-source-type": "computed",
        "x-source-editable": "false",
        children: events.map(e => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("button", {
          onClick: () => select(e.id),
          "data-testid": `event-${e.id}`,
          className: `w-full text-left cc-surface rounded-md p-4 transition-colors hover:border-fuchsia-500/50 ${(evt === null || evt === void 0 ? void 0 : evt.id) === e.id ? "border-fuchsia-500/60" : ""}`,
          "x-file-name": "Replay",
          "x-line-number": "45",
          "x-column": "12",
          "x-component": "button",
          "x-id": "Replay_45_12",
          "x-dynamic": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
            className: "flex items-center justify-between gap-2",
            "x-file-name": "Replay",
            "x-line-number": "47",
            "x-column": "14",
            "x-component": "div",
            "x-id": "Replay_47_14",
            "x-dynamic": "false",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("span", {
              className: "font-semibold cc-text text-sm",
              "x-file-name": "Replay",
              "x-line-number": "48",
              "x-column": "16",
              "x-component": "span",
              "x-id": "Replay_48_16",
              "x-dynamic": "true",
              "x-source-type": "static-imported",
              "x-source-var": "events",
              "x-source-path": "name",
              "x-source-editable": "false",
              "x-array-var": "events",
              "x-array-item-param": "e",
              children: e.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("span", {
              className: "text-[10px] px-1.5 py-0.5 rounded-sm bg-amber-500/15 text-amber-400 border border-amber-500/30 font-mono2",
              "x-file-name": "Replay",
              "x-line-number": "49",
              "x-column": "16",
              "x-component": "span",
              "x-id": "Replay_49_16",
              "x-dynamic": "false",
              children: "DEMO"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
            className: "text-xs cc-text-2 mt-1",
            "x-file-name": "Replay",
            "x-line-number": "51",
            "x-column": "14",
            "x-component": "div",
            "x-id": "Replay_51_14",
            "x-dynamic": "true",
            "x-source-type": "static-imported",
            "x-source-var": "events",
            "x-source-path": "location",
            "x-source-editable": "false",
            "x-array-var": "events",
            "x-array-item-param": "e",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("span", {
              "data-ve-dynamic": "true",
              "x-excluded": "true",
              style: {
                display: "contents"
              },
              "x-file-name": "Replay",
              "x-line-number": "51",
              "x-column": "14",
              "x-component": "div",
              "x-id": "Replay_51_14_expr0",
              "x-dynamic": "true",
              "x-source-type": "static-imported",
              "x-source-var": "events",
              "x-source-path": "location",
              "x-source-editable": "false",
              "x-array-var": "events",
              "x-array-item-param": "e",
              children: e.location
            }, void 0, false), " \xB7 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("span", {
              "data-ve-dynamic": "true",
              "x-excluded": "true",
              style: {
                display: "contents"
              },
              "x-file-name": "Replay",
              "x-line-number": "51",
              "x-column": "14",
              "x-component": "div",
              "x-id": "Replay_51_14_expr2",
              "x-dynamic": "true",
              "x-source-type": "static-imported",
              "x-source-var": "events",
              "x-source-path": "date",
              "x-source-editable": "false",
              "x-array-var": "events",
              "x-array-item-param": "e",
              children: e.date
            }, void 0, false)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 15
          }, this)]
        }, e.id, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), evt && cur && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
        className: "lg:col-span-8 space-y-4",
        "x-file-name": "Replay",
        "x-line-number": "57",
        "x-column": "10",
        "x-component": "div",
        "x-id": "Replay_57_10",
        "x-dynamic": "false",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
          className: "cc-surface rounded-md p-5",
          "x-file-name": "Replay",
          "x-line-number": "58",
          "x-column": "12",
          "x-component": "div",
          "x-id": "Replay_58_12",
          "x-dynamic": "true",
          "x-source-type": "computed",
          "x-source-editable": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
            className: "flex flex-wrap items-center justify-between gap-3",
            "x-file-name": "Replay",
            "x-line-number": "59",
            "x-column": "14",
            "x-component": "div",
            "x-id": "Replay_59_14",
            "x-dynamic": "false",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
              "x-file-name": "Replay",
              "x-line-number": "60",
              "x-column": "16",
              "x-component": "div",
              "x-id": "Replay_60_16",
              "x-dynamic": "false",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                className: "font-display font-bold text-lg cc-text",
                "x-file-name": "Replay",
                "x-line-number": "61",
                "x-column": "18",
                "x-component": "div",
                "x-id": "Replay_61_18",
                "x-dynamic": "true",
                "x-source-type": "state",
                "x-source-var": "evt",
                "x-source-path": "name",
                "x-source-editable": "false",
                children: evt.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                className: "text-xs cc-text-2",
                "x-file-name": "Replay",
                "x-line-number": "62",
                "x-column": "18",
                "x-component": "div",
                "x-id": "Replay_62_18",
                "x-dynamic": "true",
                "x-source-type": "state",
                "x-source-var": "evt",
                "x-source-path": "date",
                "x-source-editable": "false",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("span", {
                  "data-ve-dynamic": "true",
                  "x-excluded": "true",
                  style: {
                    display: "contents"
                  },
                  "x-file-name": "Replay",
                  "x-line-number": "62",
                  "x-column": "18",
                  "x-component": "div",
                  "x-id": "Replay_62_18_expr0",
                  "x-dynamic": "true",
                  "x-source-type": "state",
                  "x-source-var": "evt",
                  "x-source-path": "date",
                  "x-source-editable": "false",
                  children: evt.date
                }, void 0, false), " \xB7 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("span", {
                  "data-ve-dynamic": "true",
                  "x-excluded": "true",
                  style: {
                    display: "contents"
                  },
                  "x-file-name": "Replay",
                  "x-line-number": "62",
                  "x-column": "18",
                  "x-component": "div",
                  "x-id": "Replay_62_18_expr2",
                  "x-dynamic": "true",
                  "x-source-type": "state",
                  "x-source-var": "evt",
                  "x-source-path": "location",
                  "x-source-editable": "false",
                  children: evt.location
                }, void 0, false)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
              className: "flex items-center gap-3",
              "x-file-name": "Replay",
              "x-line-number": "64",
              "x-column": "16",
              "x-component": "div",
              "x-id": "Replay_64_16",
              "x-dynamic": "false",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_2__.RiskBadge, {
                level: cur.level,
                className: "text-sm px-3 py-1",
                "x-file-name": "Replay",
                "x-line-number": "65",
                "x-column": "18",
                "x-component": "RiskBadge",
                "x-id": "Replay_65_18",
                "x-dynamic": "true"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("span", {
                className: "font-mono2 text-2xl font-bold",
                style: {
                  color: _lib_i18n__WEBPACK_IMPORTED_MODULE_3__.RISK_COLORS[cur.level]
                },
                "data-testid": "replay-score",
                "x-file-name": "Replay",
                "x-line-number": "66",
                "x-column": "18",
                "x-component": "span",
                "x-id": "Replay_66_18",
                "x-dynamic": "true",
                "x-source-type": "unknown",
                "x-source-var": "cur",
                "x-source-path": "score",
                "x-source-editable": "false",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("span", {
                  "data-ve-dynamic": "true",
                  "x-excluded": "true",
                  style: {
                    display: "contents"
                  },
                  "x-file-name": "Replay",
                  "x-line-number": "66",
                  "x-column": "18",
                  "x-component": "span",
                  "x-id": "Replay_66_18_expr0",
                  "x-dynamic": "true",
                  "x-source-type": "unknown",
                  "x-source-var": "cur",
                  "x-source-path": "score",
                  "x-source-editable": "false",
                  children: cur.score
                }, void 0, false), "/100"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
            className: "mt-6",
            "x-file-name": "Replay",
            "x-line-number": "70",
            "x-column": "14",
            "x-component": "div",
            "x-id": "Replay_70_14",
            "x-dynamic": "false",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
              className: "flex justify-between items-center mb-2",
              "x-file-name": "Replay",
              "x-line-number": "71",
              "x-column": "16",
              "x-component": "div",
              "x-id": "Replay_71_16",
              "x-dynamic": "false",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("span", {
                className: "overline-tag",
                "x-file-name": "Replay",
                "x-line-number": "72",
                "x-column": "18",
                "x-component": "span",
                "x-id": "Replay_72_18",
                "x-dynamic": "true",
                "x-source-type": "unknown",
                "x-source-var": "cur",
                "x-source-path": "t",
                "x-source-editable": "false",
                children: ["Pre-Event Timeline \u2014 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("span", {
                  "data-ve-dynamic": "true",
                  "x-excluded": "true",
                  style: {
                    display: "contents"
                  },
                  "x-file-name": "Replay",
                  "x-line-number": "72",
                  "x-column": "18",
                  "x-component": "span",
                  "x-id": "Replay_72_18_expr1",
                  "x-dynamic": "true",
                  "x-source-type": "unknown",
                  "x-source-var": "cur",
                  "x-source-path": "t",
                  "x-source-editable": "false",
                  children: cur.t
                }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("span", {
                  "data-ve-dynamic": "true",
                  "x-excluded": "true",
                  style: {
                    display: "contents"
                  },
                  "x-file-name": "Replay",
                  "x-line-number": "72",
                  "x-column": "18",
                  "x-component": "span",
                  "x-id": "Replay_72_18_expr2",
                  "x-dynamic": "true",
                  "x-source-type": "computed",
                  "x-source-editable": "false",
                  children: cur.event ? ` · ${cur.event}` : ""
                }, void 0, false)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("button", {
                onClick: () => {
                  if (step >= evt.timeline.length - 1) setStep(0);
                  setPlaying(!playing);
                },
                "data-testid": "replay-play-btn",
                className: "flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-sm bg-fuchsia-600 text-white font-semibold hover:bg-fuchsia-500 transition-colors",
                "x-file-name": "Replay",
                "x-line-number": "73",
                "x-column": "18",
                "x-component": "button",
                "x-id": "Replay_73_18",
                "x-dynamic": "true",
                "x-source-type": "computed",
                "x-source-editable": "false",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  size: 12,
                  "x-file-name": "Replay",
                  "x-line-number": "76",
                  "x-column": "20",
                  "x-component": "Play",
                  "x-id": "Replay_76_20",
                  "x-dynamic": "false"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 21
                }, this), " ", playing ? "Pause" : "Play Simulation"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("input", {
              type: "range",
              min: 0,
              max: evt.timeline.length - 1,
              value: step,
              onChange: e => {
                setStep(parseInt(e.target.value));
                setPlaying(false);
              },
              "data-testid": "replay-slider",
              className: "w-full accent-fuchsia-500",
              "x-file-name": "Replay",
              "x-line-number": "79",
              "x-column": "16",
              "x-component": "input",
              "x-id": "Replay_79_16",
              "x-dynamic": "false"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
              className: "flex justify-between mt-1",
              "x-file-name": "Replay",
              "x-line-number": "82",
              "x-column": "16",
              "x-component": "div",
              "x-id": "Replay_82_16",
              "x-dynamic": "true",
              "x-source-type": "computed",
              "x-source-editable": "false",
              children: evt.timeline.map((t, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("button", {
                onClick: () => setStep(i),
                "data-testid": `replay-step-${i}`,
                className: `text-[10px] font-mono2 transition-colors ${i === step ? "text-fuchsia-400 font-bold" : "cc-text-2"}`,
                "x-file-name": "Replay",
                "x-line-number": "84",
                "x-column": "20",
                "x-component": "button",
                "x-id": "Replay_84_20",
                "x-dynamic": "true",
                "x-source-type": "static-imported",
                "x-source-var": "evt",
                "x-source-path": "timeline.t",
                "x-source-editable": "false",
                "x-array-var": "evt",
                "x-array-item-param": "t",
                children: t.t
              }, t.t, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 21
              }, this))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
            className: "grid grid-cols-3 gap-3 mt-5",
            "x-file-name": "Replay",
            "x-line-number": "90",
            "x-column": "14",
            "x-component": "div",
            "x-id": "Replay_90_14",
            "x-dynamic": "true",
            "x-source-type": "computed",
            "x-source-editable": "false",
            children: [["Rainfall", cur.rainfall, "mm"], ["Soil Moisture", cur.soil_moisture, "%"], ["Ground Movement", cur.movement, "mm"]].map(([l, v, u]) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
              className: "cc-elevated rounded-md p-3 text-center",
              "x-file-name": "Replay",
              "x-line-number": "92",
              "x-column": "18",
              "x-component": "div",
              "x-id": "Replay_92_18",
              "x-dynamic": "false",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                className: "overline-tag",
                "x-file-name": "Replay",
                "x-line-number": "93",
                "x-column": "20",
                "x-component": "div",
                "x-id": "Replay_93_20",
                "x-dynamic": "true",
                "x-source-type": "unknown",
                "x-source-var": "l",
                "x-source-editable": "false",
                children: l
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 21
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                className: "font-mono2 text-xl cc-text mt-1",
                "x-file-name": "Replay",
                "x-line-number": "94",
                "x-column": "20",
                "x-component": "div",
                "x-id": "Replay_94_20",
                "x-dynamic": "true",
                "x-source-type": "unknown",
                "x-source-var": "v",
                "x-source-editable": "false",
                children: [v, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("span", {
                  className: "text-xs cc-text-2 ml-1",
                  "x-file-name": "Replay",
                  "x-line-number": "94",
                  "x-column": "72",
                  "x-component": "span",
                  "x-id": "Replay_94_72",
                  "x-dynamic": "true",
                  "x-source-type": "unknown",
                  "x-source-var": "u",
                  "x-source-editable": "false",
                  children: u
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 73
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 21
              }, this)]
            }, l, true, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 19
            }, this))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 15
          }, this), cur.event && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
            className: "mt-4 rounded-md border border-red-500/60 bg-red-500/10 p-4 text-center animate-pulse-red",
            "data-testid": "replay-event-marker",
            "x-file-name": "Replay",
            "x-line-number": "99",
            "x-column": "16",
            "x-component": "div",
            "x-id": "Replay_99_16",
            "x-dynamic": "false",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("span", {
              className: "text-red-400 font-display font-bold text-lg",
              "x-file-name": "Replay",
              "x-line-number": "100",
              "x-column": "18",
              "x-component": "span",
              "x-id": "Replay_100_18",
              "x-dynamic": "true",
              "x-source-type": "unknown",
              "x-source-var": "cur",
              "x-source-path": "event",
              "x-source-editable": "false",
              children: cur.event
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
          className: "cc-surface rounded-md p-5",
          "x-file-name": "Replay",
          "x-line-number": "105",
          "x-column": "12",
          "x-component": "div",
          "x-id": "Replay_105_12",
          "x-dynamic": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
            "x-file-name": "Replay",
            "x-line-number": "106",
            "x-column": "14",
            "x-component": "SectionTitle",
            "x-id": "Replay_106_14",
            "x-dynamic": "false",
            children: "Risk Build-Up"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_7__.ResponsiveContainer, {
            width: "100%",
            height: 200,
            "x-file-name": "Replay",
            "x-line-number": "107",
            "x-column": "14",
            "x-component": "ResponsiveContainer",
            "x-id": "Replay_107_14",
            "x-dynamic": "false",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_13__.AreaChart, {
              data: evt.timeline,
              "x-file-name": "Replay",
              "x-line-number": "108",
              "x-column": "16",
              "x-component": "AreaChart",
              "x-id": "Replay_108_16",
              "x-dynamic": "false",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("defs", {
                "x-file-name": "Replay",
                "x-line-number": "109",
                "x-column": "18",
                "x-component": "defs",
                "x-id": "Replay_109_18",
                "x-dynamic": "false",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("linearGradient", {
                  id: "replayG",
                  x1: "0",
                  y1: "0",
                  x2: "0",
                  y2: "1",
                  "x-file-name": "Replay",
                  "x-line-number": "109",
                  "x-column": "24",
                  "x-component": "linearGradient",
                  "x-id": "Replay_109_24",
                  "x-dynamic": "false",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("stop", {
                    offset: "0%",
                    stopColor: "#E879F9",
                    stopOpacity: 0.35,
                    "x-file-name": "Replay",
                    "x-line-number": "110",
                    "x-column": "20",
                    "x-component": "stop",
                    "x-id": "Replay_110_20",
                    "x-dynamic": "false"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 110,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("stop", {
                    offset: "100%",
                    stopColor: "#E879F9",
                    stopOpacity: 0,
                    "x-file-name": "Replay",
                    "x-line-number": "110",
                    "x-column": "79",
                    "x-component": "stop",
                    "x-id": "Replay_110_79",
                    "x-dynamic": "false"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 110,
                    columnNumber: 80
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 109,
                  columnNumber: 25
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_9__.CartesianGrid, {
                stroke: "#27272A",
                "x-file-name": "Replay",
                "x-line-number": "112",
                "x-column": "18",
                "x-component": "CartesianGrid",
                "x-id": "Replay_112_18",
                "x-dynamic": "false"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_11__.XAxis, {
                dataKey: "t",
                tick: {
                  fontSize: 11,
                  fill: "#9CA3AF"
                },
                "x-file-name": "Replay",
                "x-line-number": "113",
                "x-column": "18",
                "x-component": "XAxis",
                "x-id": "Replay_113_18",
                "x-dynamic": "false"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_12__.YAxis, {
                domain: [0, 100],
                tick: {
                  fontSize: 11,
                  fill: "#9CA3AF"
                },
                "x-file-name": "Replay",
                "x-line-number": "114",
                "x-column": "18",
                "x-component": "YAxis",
                "x-id": "Replay_114_18",
                "x-dynamic": "false"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.Tooltip, {
                contentStyle: {
                  background: "#141414",
                  border: "1px solid #27272A",
                  fontSize: 12
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_10__.Area, {
                type: "monotone",
                dataKey: "score",
                stroke: "#E879F9",
                fill: "url(#replayG)",
                strokeWidth: 2,
                "x-file-name": "Replay",
                "x-line-number": "116",
                "x-column": "18",
                "x-component": "Area",
                "x-id": "Replay_116_18",
                "x-dynamic": "false"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_8__.ReferenceDot, {
                x: cur.t,
                y: cur.score,
                r: 6,
                fill: "#E879F9",
                stroke: "#fff",
                "x-file-name": "Replay",
                "x-line-number": "117",
                "x-column": "18",
                "x-component": "ReferenceDot",
                "x-id": "Replay_117_18",
                "x-dynamic": "false"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
          className: "cc-surface rounded-md p-5 space-y-3 text-sm",
          "x-file-name": "Replay",
          "x-line-number": "122",
          "x-column": "12",
          "x-component": "div",
          "x-id": "Replay_122_12",
          "x-dynamic": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
            "x-file-name": "Replay",
            "x-line-number": "123",
            "x-column": "14",
            "x-component": "div",
            "x-id": "Replay_123_14",
            "x-dynamic": "false",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("span", {
              className: "overline-tag block mb-1",
              "x-file-name": "Replay",
              "x-line-number": "123",
              "x-column": "19",
              "x-component": "span",
              "x-id": "Replay_123_19",
              "x-dynamic": "false",
              children: "What happened"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 20
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("span", {
              className: "cc-text-2 leading-relaxed",
              "x-file-name": "Replay",
              "x-line-number": "123",
              "x-column": "81",
              "x-component": "span",
              "x-id": "Replay_123_81",
              "x-dynamic": "true",
              "x-source-type": "state",
              "x-source-var": "evt",
              "x-source-path": "summary",
              "x-source-editable": "false",
              children: evt.summary
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 82
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
            className: "grid sm:grid-cols-3 gap-3",
            "x-file-name": "Replay",
            "x-line-number": "124",
            "x-column": "14",
            "x-component": "div",
            "x-id": "Replay_124_14",
            "x-dynamic": "false",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
              className: "cc-elevated rounded-md p-3",
              "x-file-name": "Replay",
              "x-line-number": "125",
              "x-column": "16",
              "x-component": "div",
              "x-id": "Replay_125_16",
              "x-dynamic": "false",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                className: "overline-tag",
                "x-file-name": "Replay",
                "x-line-number": "125",
                "x-column": "60",
                "x-component": "div",
                "x-id": "Replay_125_60",
                "x-dynamic": "false",
                children: "Rainfall before event"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 61
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                className: "cc-text mt-1 text-xs",
                "x-file-name": "Replay",
                "x-line-number": "125",
                "x-column": "117",
                "x-component": "div",
                "x-id": "Replay_125_117",
                "x-dynamic": "true",
                "x-source-type": "state",
                "x-source-var": "evt",
                "x-source-path": "rainfall_before",
                "x-source-editable": "false",
                children: evt.rainfall_before
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 118
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
              className: "cc-elevated rounded-md p-3",
              "x-file-name": "Replay",
              "x-line-number": "126",
              "x-column": "16",
              "x-component": "div",
              "x-id": "Replay_126_16",
              "x-dynamic": "false",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                className: "overline-tag",
                "x-file-name": "Replay",
                "x-line-number": "126",
                "x-column": "60",
                "x-component": "div",
                "x-id": "Replay_126_60",
                "x-dynamic": "false",
                children: "Soil conditions"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 61
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                className: "cc-text mt-1 text-xs",
                "x-file-name": "Replay",
                "x-line-number": "126",
                "x-column": "111",
                "x-component": "div",
                "x-id": "Replay_126_111",
                "x-dynamic": "true",
                "x-source-type": "state",
                "x-source-var": "evt",
                "x-source-path": "soil_condition",
                "x-source-editable": "false",
                children: evt.soil_condition
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 112
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
              className: "cc-elevated rounded-md p-3",
              "x-file-name": "Replay",
              "x-line-number": "127",
              "x-column": "16",
              "x-component": "div",
              "x-id": "Replay_127_16",
              "x-dynamic": "false",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                className: "overline-tag",
                "x-file-name": "Replay",
                "x-line-number": "127",
                "x-column": "60",
                "x-component": "div",
                "x-id": "Replay_127_60",
                "x-dynamic": "false",
                children: "Warning status"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 61
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
                className: "cc-text mt-1 text-xs",
                "x-file-name": "Replay",
                "x-line-number": "127",
                "x-column": "110",
                "x-component": "div",
                "x-id": "Replay_127_110",
                "x-dynamic": "true",
                "x-source-type": "state",
                "x-source-var": "evt",
                "x-source-path": "warning_status",
                "x-source-editable": "false",
                children: evt.warning_status
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 111
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, this);
}
_s(Replay, "4ILZlsMkAMVvBAhFAYbxID6f5YA=");
_c = Replay;
var _c;
__webpack_require__.$Refresh$.register(_c, "Replay");

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

