/***/ "./src/components/ui-helpers.jsx"
/*!***************************************!*\
  !*** ./src/components/ui-helpers.jsx ***!
  \***************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptyState: () => (/* binding */ EmptyState),
/* harmony export */   FactorBar: () => (/* binding */ FactorBar),
/* harmony export */   Loading: () => (/* binding */ Loading),
/* harmony export */   RiskBadge: () => (/* binding */ RiskBadge),
/* harmony export */   SectionTitle: () => (/* binding */ SectionTitle),
/* harmony export */   StatCard: () => (/* binding */ StatCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/i18n */ "./src/lib/i18n.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/app/frontend/src/components/ui-helpers.jsx";



const RiskBadge = ({
  level,
  className = ""
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
  "data-testid": `risk-badge-${level === null || level === void 0 ? void 0 : level.toLowerCase()}`,
  className: `inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm text-xs font-semibold font-mono2 ${className}`,
  style: {
    color: _lib_i18n__WEBPACK_IMPORTED_MODULE_1__.RISK_COLORS[level],
    backgroundColor: `${_lib_i18n__WEBPACK_IMPORTED_MODULE_1__.RISK_COLORS[level]}1A`,
    border: `1px solid ${_lib_i18n__WEBPACK_IMPORTED_MODULE_1__.RISK_COLORS[level]}55`
  },
  "x-file-name": "ui-helpers",
  "x-line-number": "5",
  "x-column": "2",
  "x-component": "span",
  "x-id": "ui-helpers_5_2",
  "x-dynamic": "true",
  "x-source-type": "prop",
  "x-source-var": "level",
  "x-source-editable": "false",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
    className: "w-1.5 h-1.5 rounded-full",
    style: {
      backgroundColor: _lib_i18n__WEBPACK_IMPORTED_MODULE_1__.RISK_COLORS[level]
    },
    "x-file-name": "ui-helpers",
    "x-line-number": "8",
    "x-column": "4",
    "x-component": "span",
    "x-id": "ui-helpers_8_4",
    "x-dynamic": "false"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined), level]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 5,
  columnNumber: 3
}, undefined);
_c = RiskBadge;
const StatCard = ({
  label,
  value,
  sub,
  color,
  testId
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
  "data-testid": testId,
  className: "cc-surface rounded-md p-4 animate-fade-in",
  "x-file-name": "ui-helpers",
  "x-line-number": "14",
  "x-column": "2",
  "x-component": "div",
  "x-id": "ui-helpers_14_2",
  "x-dynamic": "false",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "overline-tag",
    "x-file-name": "ui-helpers",
    "x-line-number": "15",
    "x-column": "4",
    "x-component": "div",
    "x-id": "ui-helpers_15_4",
    "x-dynamic": "true",
    "x-source-type": "prop",
    "x-source-var": "label",
    "x-source-editable": "false",
    children: label
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "mt-2 flex items-baseline gap-2",
    "x-file-name": "ui-helpers",
    "x-line-number": "16",
    "x-column": "4",
    "x-component": "div",
    "x-id": "ui-helpers_16_4",
    "x-dynamic": "true",
    "x-source-type": "computed",
    "x-source-editable": "false",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
      className: "font-display text-3xl font-bold cc-text",
      style: color ? {
        color
      } : undefined,
      "x-file-name": "ui-helpers",
      "x-line-number": "17",
      "x-column": "6",
      "x-component": "span",
      "x-id": "ui-helpers_17_6",
      "x-dynamic": "true",
      "x-source-type": "prop",
      "x-source-var": "value",
      "x-source-editable": "false",
      children: value
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), sub && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
      className: "text-xs cc-text-2",
      "x-file-name": "ui-helpers",
      "x-line-number": "18",
      "x-column": "14",
      "x-component": "span",
      "x-id": "ui-helpers_18_14",
      "x-dynamic": "true",
      "x-source-type": "prop",
      "x-source-var": "sub",
      "x-source-editable": "false",
      children: sub
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 15
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 14,
  columnNumber: 3
}, undefined);
_c2 = StatCard;
const SectionTitle = ({
  children,
  right
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
  className: "flex items-center justify-between mb-3",
  "x-file-name": "ui-helpers",
  "x-line-number": "24",
  "x-column": "2",
  "x-component": "div",
  "x-id": "ui-helpers_24_2",
  "x-dynamic": "true",
  "x-source-type": "prop",
  "x-source-var": "right",
  "x-source-editable": "false",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
    className: "font-display text-lg font-semibold cc-text tracking-tight",
    "x-file-name": "ui-helpers",
    "x-line-number": "25",
    "x-column": "4",
    "x-component": "h2",
    "x-id": "ui-helpers_25_4",
    "x-dynamic": "true",
    "x-source-type": "prop",
    "x-source-var": "children",
    "x-source-editable": "false",
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, undefined), right]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 24,
  columnNumber: 3
}, undefined);
_c3 = SectionTitle;
const FactorBar = ({
  name,
  value
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
  className: "mb-2.5",
  "x-file-name": "ui-helpers",
  "x-line-number": "31",
  "x-column": "2",
  "x-component": "div",
  "x-id": "ui-helpers_31_2",
  "x-dynamic": "false",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "flex justify-between text-xs mb-1",
    "x-file-name": "ui-helpers",
    "x-line-number": "32",
    "x-column": "4",
    "x-component": "div",
    "x-id": "ui-helpers_32_4",
    "x-dynamic": "false",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
      className: "cc-text-2",
      "x-file-name": "ui-helpers",
      "x-line-number": "33",
      "x-column": "6",
      "x-component": "span",
      "x-id": "ui-helpers_33_6",
      "x-dynamic": "true",
      "x-source-type": "prop",
      "x-source-var": "name",
      "x-source-editable": "false",
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
      className: "font-mono2 cc-text",
      "x-file-name": "ui-helpers",
      "x-line-number": "34",
      "x-column": "6",
      "x-component": "span",
      "x-id": "ui-helpers_34_6",
      "x-dynamic": "true",
      "x-source-type": "prop",
      "x-source-var": "value",
      "x-source-editable": "false",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
        "data-ve-dynamic": "true",
        "x-excluded": "true",
        style: {
          display: "contents"
        },
        "x-file-name": "ui-helpers",
        "x-line-number": "34",
        "x-column": "6",
        "x-component": "span",
        "x-id": "ui-helpers_34_6_expr0",
        "x-dynamic": "true",
        "x-source-type": "prop",
        "x-source-var": "value",
        "x-source-editable": "false",
        children: value
      }, void 0, false), "%"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "h-2 rounded-sm bg-zinc-800 overflow-hidden",
    "x-file-name": "ui-helpers",
    "x-line-number": "36",
    "x-column": "4",
    "x-component": "div",
    "x-id": "ui-helpers_36_4",
    "x-dynamic": "false",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "h-full rounded-sm transition-[width] duration-700",
      style: {
        width: `${value}%`,
        backgroundColor: value > 75 ? "#EF4444" : value > 50 ? "#F97316" : value > 30 ? "#F59E0B" : "#10B981"
      },
      "x-file-name": "ui-helpers",
      "x-line-number": "37",
      "x-column": "6",
      "x-component": "div",
      "x-id": "ui-helpers_37_6",
      "x-dynamic": "false"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 31,
  columnNumber: 3
}, undefined);
_c4 = FactorBar;
const EmptyState = ({
  message
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
  className: "cc-surface rounded-md p-8 text-center cc-text-2 text-sm",
  "data-testid": "empty-state",
  "x-file-name": "ui-helpers",
  "x-line-number": "44",
  "x-column": "2",
  "x-component": "div",
  "x-id": "ui-helpers_44_2",
  "x-dynamic": "true",
  "x-source-type": "prop",
  "x-source-var": "message",
  "x-source-editable": "false",
  children: message
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 44,
  columnNumber: 3
}, undefined);
_c5 = EmptyState;
const Loading = ({
  label = "Loading data…"
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
  className: "cc-surface rounded-md p-8 text-center cc-text-2 text-sm animate-pulse",
  "data-testid": "loading-state",
  "x-file-name": "ui-helpers",
  "x-line-number": "48",
  "x-column": "2",
  "x-component": "div",
  "x-id": "ui-helpers_48_2",
  "x-dynamic": "true",
  "x-source-type": "prop",
  "x-source-var": "label",
  "x-source-editable": "false",
  children: label
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 48,
  columnNumber: 3
}, undefined);
_c6 = Loading;
var _c, _c2, _c3, _c4, _c5, _c6;
__webpack_require__.$Refresh$.register(_c, "RiskBadge");
__webpack_require__.$Refresh$.register(_c2, "StatCard");
__webpack_require__.$Refresh$.register(_c3, "SectionTitle");
__webpack_require__.$Refresh$.register(_c4, "FactorBar");
__webpack_require__.$Refresh$.register(_c5, "EmptyState");
__webpack_require__.$Refresh$.register(_c6, "Loading");

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

