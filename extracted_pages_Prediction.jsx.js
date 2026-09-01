/***/ "./src/pages/Prediction.jsx"
/*!**********************************!*\
  !*** ./src/pages/Prediction.jsx ***!
  \**********************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Prediction)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/api */ "./src/lib/api.js");
/* harmony import */ var _components_ui_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ui-helpers */ "./src/components/ui-helpers.jsx");
/* harmony import */ var _lib_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/i18n */ "./src/lib/i18n.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/brain-circuit.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/flask-conical.js");
/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sonner */ "./node_modules/sonner/dist/index.mjs");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/app/frontend/src/pages/Prediction.jsx",
  _s = __webpack_require__.$Refresh$.signature();







const FIELDS = [{
  key: "rainfall",
  label: "Rainfall (24h)",
  unit: "mm",
  min: 0,
  max: 300,
  step: 1,
  def: 120
}, {
  key: "rainfall_intensity",
  label: "Rainfall Intensity",
  unit: "mm/h",
  min: 0,
  max: 60,
  step: 1,
  def: 20
}, {
  key: "soil_moisture",
  label: "Soil Moisture",
  unit: "%",
  min: 0,
  max: 100,
  step: 1,
  def: 78
}, {
  key: "slope",
  label: "Slope",
  unit: "°",
  min: 0,
  max: 70,
  step: 1,
  def: 42
}, {
  key: "elevation",
  label: "Elevation",
  unit: "m",
  min: 0,
  max: 4000,
  step: 10,
  def: 1150
}, {
  key: "ground_movement",
  label: "Ground Movement",
  unit: "mm",
  min: 0,
  max: 15,
  step: 0.1,
  def: 4.5
}, {
  key: "historical_frequency",
  label: "Historical Landslide Frequency",
  unit: "/10",
  min: 0,
  max: 10,
  step: 1,
  def: 7
}, {
  key: "soil_susceptibility",
  label: "Soil / Geological Susceptibility",
  unit: "0–1",
  min: 0,
  max: 1,
  step: 0.05,
  def: 0.8
}];
function Prediction() {
  _s();
  const [inputs, setInputs] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(Object.fromEntries(FIELDS.map(f => [f.key, f.def])));
  const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [busy, setBusy] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const run = async () => {
    setBusy(true);
    try {
      const res = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__.apiPost)("/predict", inputs);
      setResult(res);
    } catch (e) {
      sonner__WEBPACK_IMPORTED_MODULE_6__.toast.error("Prediction engine unreachable (offline?). Try again when connected.");
    } finally {
      setBusy(false);
    }
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    className: "space-y-5",
    "data-testid": "prediction-page",
    "x-file-name": "Prediction",
    "x-line-number": "34",
    "x-column": "4",
    "x-component": "div",
    "x-id": "Prediction_34_4",
    "x-dynamic": "false",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: "flex items-center gap-3",
      "x-file-name": "Prediction",
      "x-line-number": "35",
      "x-column": "6",
      "x-component": "div",
      "x-id": "Prediction_35_6",
      "x-dynamic": "false",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
        size: 22,
        className: "text-emerald-400",
        "x-file-name": "Prediction",
        "x-line-number": "36",
        "x-column": "8",
        "x-component": "BrainCircuit",
        "x-id": "Prediction_36_8",
        "x-dynamic": "false"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        "x-file-name": "Prediction",
        "x-line-number": "37",
        "x-column": "8",
        "x-component": "div",
        "x-id": "Prediction_37_8",
        "x-dynamic": "false",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h1", {
          className: "font-display font-bold text-xl cc-text tracking-tight",
          "x-file-name": "Prediction",
          "x-line-number": "38",
          "x-column": "10",
          "x-component": "h1",
          "x-id": "Prediction_38_10",
          "x-dynamic": "false",
          children: "AI Risk Prediction Engine"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "text-xs cc-text-2 flex items-center gap-1.5",
          "x-file-name": "Prediction",
          "x-line-number": "39",
          "x-column": "10",
          "x-component": "div",
          "x-id": "Prediction_39_10",
          "x-dynamic": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
            size: 12,
            className: "text-amber-400",
            "x-file-name": "Prediction",
            "x-line-number": "39",
            "x-column": "71",
            "x-component": "FlaskConical",
            "x-id": "Prediction_39_71",
            "x-dynamic": "false"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 72
          }, this), " Prototype simulated AI prediction \u2014 plug-in architecture ready for a trained ML model/API"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: "grid grid-cols-1 lg:grid-cols-12 gap-4",
      "x-file-name": "Prediction",
      "x-line-number": "43",
      "x-column": "6",
      "x-component": "div",
      "x-id": "Prediction_43_6",
      "x-dynamic": "false",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: "lg:col-span-5 cc-surface rounded-md p-5",
        "x-file-name": "Prediction",
        "x-line-number": "44",
        "x-column": "8",
        "x-component": "div",
        "x-id": "Prediction_44_8",
        "x-dynamic": "false",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
          "x-file-name": "Prediction",
          "x-line-number": "45",
          "x-column": "10",
          "x-component": "SectionTitle",
          "x-id": "Prediction_45_10",
          "x-dynamic": "false",
          children: "Input Parameters"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "space-y-4",
          "x-file-name": "Prediction",
          "x-line-number": "46",
          "x-column": "10",
          "x-component": "div",
          "x-id": "Prediction_46_10",
          "x-dynamic": "true",
          "x-source-type": "computed",
          "x-source-editable": "false",
          children: FIELDS.map(f => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            "x-file-name": "Prediction",
            "x-line-number": "48",
            "x-column": "14",
            "x-component": "div",
            "x-id": "Prediction_48_14",
            "x-dynamic": "false",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
              className: "flex justify-between text-xs mb-1.5",
              "x-file-name": "Prediction",
              "x-line-number": "49",
              "x-column": "16",
              "x-component": "div",
              "x-id": "Prediction_49_16",
              "x-dynamic": "false",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
                className: "cc-text-2",
                "x-file-name": "Prediction",
                "x-line-number": "50",
                "x-column": "18",
                "x-component": "span",
                "x-id": "Prediction_50_18",
                "x-dynamic": "true",
                "x-source-type": "static-imported",
                "x-source-var": "FIELDS",
                "x-source-file-abs": "/app/frontend/src/pages/Prediction.jsx",
                "x-source-line": "8",
                "x-source-path": "label",
                "x-source-editable": "true",
                "x-array-var": "FIELDS",
                "x-array-line": "8",
                "x-array-item-param": "f",
                children: f.label
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
                className: "font-mono2 cc-text",
                "x-file-name": "Prediction",
                "x-line-number": "51",
                "x-column": "18",
                "x-component": "span",
                "x-id": "Prediction_51_18",
                "x-dynamic": "true",
                "x-source-type": "state",
                "x-source-var": "inputs",
                "x-source-editable": "false",
                children: [inputs[f.key], " ", f.unit]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
              type: "range",
              min: f.min,
              max: f.max,
              step: f.step,
              value: inputs[f.key],
              "data-testid": `predict-input-${f.key}`,
              onChange: e => setInputs({
                ...inputs,
                [f.key]: parseFloat(e.target.value)
              }),
              className: "w-full accent-emerald-500",
              "x-file-name": "Prediction",
              "x-line-number": "53",
              "x-column": "16",
              "x-component": "input",
              "x-id": "Prediction_53_16",
              "x-dynamic": "false"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 17
            }, this)]
          }, f.key, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 15
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
          onClick: run,
          disabled: busy,
          "data-testid": "run-prediction-btn",
          className: "mt-6 w-full bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-bold py-3 rounded-md transition-colors",
          "x-file-name": "Prediction",
          "x-line-number": "60",
          "x-column": "10",
          "x-component": "button",
          "x-id": "Prediction_60_10",
          "x-dynamic": "true",
          "x-source-type": "computed",
          "x-source-editable": "false",
          children: busy ? "Estimating risk…" : "Run Risk Estimation"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: "lg:col-span-7 space-y-4",
        "x-file-name": "Prediction",
        "x-line-number": "66",
        "x-column": "8",
        "x-component": "div",
        "x-id": "Prediction_66_8",
        "x-dynamic": "true",
        "x-source-type": "computed",
        "x-source-editable": "false",
        children: !result ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "cc-surface rounded-md p-10 text-center cc-text-2 text-sm",
          "data-testid": "prediction-empty",
          "x-file-name": "Prediction",
          "x-line-number": "68",
          "x-column": "12",
          "x-component": "div",
          "x-id": "Prediction_68_12",
          "x-dynamic": "false",
          children: "Configure parameters and run the engine to see a risk estimate with confidence and contributing factors."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 13
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "cc-surface rounded-md p-6",
            "data-testid": "prediction-result",
            "x-file-name": "Prediction",
            "x-line-number": "73",
            "x-column": "14",
            "x-component": "div",
            "x-id": "Prediction_73_14",
            "x-dynamic": "false",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
              className: "grid grid-cols-3 gap-4 text-center",
              "x-file-name": "Prediction",
              "x-line-number": "74",
              "x-column": "16",
              "x-component": "div",
              "x-id": "Prediction_74_16",
              "x-dynamic": "false",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                "x-file-name": "Prediction",
                "x-line-number": "75",
                "x-column": "18",
                "x-component": "div",
                "x-id": "Prediction_75_18",
                "x-dynamic": "false",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                  className: "overline-tag",
                  "x-file-name": "Prediction",
                  "x-line-number": "76",
                  "x-column": "20",
                  "x-component": "div",
                  "x-id": "Prediction_76_20",
                  "x-dynamic": "false",
                  children: "Risk Score"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                  className: "font-display font-extrabold text-5xl mt-2",
                  style: {
                    color: _lib_i18n__WEBPACK_IMPORTED_MODULE_3__.RISK_COLORS[result.level]
                  },
                  "data-testid": "prediction-score",
                  "x-file-name": "Prediction",
                  "x-line-number": "77",
                  "x-column": "20",
                  "x-component": "div",
                  "x-id": "Prediction_77_20",
                  "x-dynamic": "true",
                  "x-source-type": "computed",
                  "x-source-editable": "false",
                  children: [Math.round(result.score), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
                    className: "text-lg cc-text-2",
                    "x-file-name": "Prediction",
                    "x-line-number": "77",
                    "x-column": "181",
                    "x-component": "span",
                    "x-id": "Prediction_77_181",
                    "x-dynamic": "false",
                    children: "/100"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 77,
                    columnNumber: 182
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                "x-file-name": "Prediction",
                "x-line-number": "79",
                "x-column": "18",
                "x-component": "div",
                "x-id": "Prediction_79_18",
                "x-dynamic": "false",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                  className: "overline-tag",
                  "x-file-name": "Prediction",
                  "x-line-number": "80",
                  "x-column": "20",
                  "x-component": "div",
                  "x-id": "Prediction_80_20",
                  "x-dynamic": "false",
                  children: "Risk Level"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                  className: "mt-3",
                  "x-file-name": "Prediction",
                  "x-line-number": "81",
                  "x-column": "20",
                  "x-component": "div",
                  "x-id": "Prediction_81_20",
                  "x-dynamic": "false",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_2__.RiskBadge, {
                    level: result.level,
                    className: "text-base px-4 py-1.5",
                    "x-file-name": "Prediction",
                    "x-line-number": "81",
                    "x-column": "42",
                    "x-component": "RiskBadge",
                    "x-id": "Prediction_81_42",
                    "x-dynamic": "true"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                    columnNumber: 43
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                "x-file-name": "Prediction",
                "x-line-number": "83",
                "x-column": "18",
                "x-component": "div",
                "x-id": "Prediction_83_18",
                "x-dynamic": "false",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                  className: "overline-tag",
                  "x-file-name": "Prediction",
                  "x-line-number": "84",
                  "x-column": "20",
                  "x-component": "div",
                  "x-id": "Prediction_84_20",
                  "x-dynamic": "false",
                  children: "Confidence"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                  className: "font-display font-extrabold text-5xl mt-2 cc-text",
                  "data-testid": "prediction-confidence",
                  "x-file-name": "Prediction",
                  "x-line-number": "85",
                  "x-column": "20",
                  "x-component": "div",
                  "x-id": "Prediction_85_20",
                  "x-dynamic": "true",
                  "x-source-type": "state",
                  "x-source-var": "result",
                  "x-source-path": "confidence",
                  "x-source-editable": "false",
                  children: [result.confidence, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
                    className: "text-lg cc-text-2",
                    "x-file-name": "Prediction",
                    "x-line-number": "85",
                    "x-column": "142",
                    "x-component": "span",
                    "x-id": "Prediction_85_142",
                    "x-dynamic": "false",
                    children: "%"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 85,
                    columnNumber: 143
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
              className: "mt-4 text-[11px] cc-text-2 font-mono2 text-center",
              "x-file-name": "Prediction",
              "x-line-number": "88",
              "x-column": "16",
              "x-component": "div",
              "x-id": "Prediction_88_16",
              "x-dynamic": "true",
              "x-source-type": "state",
              "x-source-var": "result",
              "x-source-path": "engine",
              "x-source-editable": "false",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
                "data-ve-dynamic": "true",
                "x-excluded": "true",
                style: {
                  display: "contents"
                },
                "x-file-name": "Prediction",
                "x-line-number": "88",
                "x-column": "16",
                "x-component": "div",
                "x-id": "Prediction_88_16_expr1",
                "x-dynamic": "true",
                "x-source-type": "state",
                "x-source-var": "result",
                "x-source-path": "engine",
                "x-source-editable": "false",
                children: result.engine
              }, void 0, false), " \xB7 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
                "data-ve-dynamic": "true",
                "x-excluded": "true",
                style: {
                  display: "contents"
                },
                "x-file-name": "Prediction",
                "x-line-number": "88",
                "x-column": "16",
                "x-component": "div",
                "x-id": "Prediction_88_16_expr3",
                "x-dynamic": "true",
                "x-source-type": "computed",
                "x-source-editable": "false",
                children: new Date(result.timestamp).toLocaleString()
              }, void 0, false), " \xB7 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
                "data-ve-dynamic": "true",
                "x-excluded": "true",
                style: {
                  display: "contents"
                },
                "x-file-name": "Prediction",
                "x-line-number": "88",
                "x-column": "16",
                "x-component": "div",
                "x-id": "Prediction_88_16_expr5",
                "x-dynamic": "true",
                "x-source-type": "state",
                "x-source-var": "result",
                "x-source-path": "note",
                "x-source-editable": "false",
                children: result.note
              }, void 0, false)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "cc-surface rounded-md p-5",
            "x-file-name": "Prediction",
            "x-line-number": "92",
            "x-column": "14",
            "x-component": "div",
            "x-id": "Prediction_92_14",
            "x-dynamic": "true",
            "x-source-type": "computed",
            "x-source-editable": "false",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
              "x-file-name": "Prediction",
              "x-line-number": "93",
              "x-column": "16",
              "x-component": "SectionTitle",
              "x-id": "Prediction_93_16",
              "x-dynamic": "false",
              children: "Major Contributing Factors"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 17
            }, this), result.factors.slice(0, 5).map(f => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_2__.FactorBar, {
              name: f.name,
              value: f.contribution,
              "x-file-name": "Prediction",
              "x-line-number": "94",
              "x-column": "55",
              "x-component": "FactorBar",
              "x-id": "Prediction_94_55",
              "x-dynamic": "true",
              "x-source-type": "external",
              "x-source-editable": "false",
              "x-array-item-param": "f"
            }, f.name, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 56
            }, this))]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "cc-surface rounded-md p-5",
            "x-file-name": "Prediction",
            "x-line-number": "96",
            "x-column": "14",
            "x-component": "div",
            "x-id": "Prediction_96_14",
            "x-dynamic": "false",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
              "x-file-name": "Prediction",
              "x-line-number": "97",
              "x-column": "16",
              "x-component": "SectionTitle",
              "x-id": "Prediction_97_16",
              "x-dynamic": "false",
              children: "Risk Reasoning"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
              className: "flex flex-wrap gap-2",
              "x-file-name": "Prediction",
              "x-line-number": "98",
              "x-column": "16",
              "x-component": "div",
              "x-id": "Prediction_98_16",
              "x-dynamic": "true",
              "x-source-type": "computed",
              "x-source-editable": "false",
              children: result.reasons.map((r, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
                className: "text-xs px-3 py-1.5 rounded-md cc-elevated cc-text",
                "x-file-name": "Prediction",
                "x-line-number": "100",
                "x-column": "20",
                "x-component": "span",
                "x-id": "Prediction_100_20",
                "x-dynamic": "true",
                "x-source-type": "static-imported",
                "x-source-var": "result",
                "x-source-editable": "false",
                "x-array-var": "result",
                "x-array-item-param": "r",
                children: r
              }, i, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 21
              }, this))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 15
          }, this)]
        }, void 0, true)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, this);
}
_s(Prediction, "kKfn2Zg+ElWTbYd33XNH+zH7l44=");
_c = Prediction;
var _c;
__webpack_require__.$Refresh$.register(_c, "Prediction");

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

