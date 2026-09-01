/***/ "./src/pages/Evacuation.jsx"
/*!**********************************!*\
  !*** ./src/pages/Evacuation.jsx ***!
  \**********************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Evacuation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/api */ "./src/lib/api.js");
/* harmony import */ var _components_RiskMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/RiskMap */ "./src/components/RiskMap.jsx");
/* harmony import */ var _components_ui_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ui-helpers */ "./src/components/ui-helpers.jsx");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/circle-alert.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/life-buoy.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/route.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/app/frontend/src/pages/Evacuation.jsx",
  _s = __webpack_require__.$Refresh$.signature();






function dist(a, b) {
  return Math.hypot(a.lat - b.lat, a.lng - b.lng);
}
function Evacuation() {
  _s();
  var _ref, _data$blocked_roads$f;
  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [locations, setLocations] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    Promise.all([(0,_lib_api__WEBPACK_IMPORTED_MODULE_1__.apiGet)("/evacuation"), (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__.apiGet)("/locations")]).then(([ev, lc]) => {
      setData(ev.data);
      setLocations(lc.data);
      const risky = [...lc.data].sort((a, b) => b.risk.score - a.risk.score)[0];
      setSelected(risky);
    }).catch(() => setData({
      centers: [],
      facilities: [],
      blocked_roads: []
    }));
  }, []);
  if (!data) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_3__.Loading, {
    label: "Loading evacuation network\u2026",
    "x-file-name": "Evacuation",
    "x-line-number": "22",
    "x-column": "20",
    "x-component": "Loading",
    "x-id": "Evacuation_22_20",
    "x-dynamic": "true"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 21
  }, this);
  const nearest = selected ? [...data.centers].sort((a, b) => dist(selected, a) - dist(selected, b))[0] : null;
  const second = selected ? [...data.centers].sort((a, b) => dist(selected, a) - dist(selected, b))[1] : null;
  const routeBlocked = data.blocked_roads.some(r => selected && dist(r, selected) < 0.15);
  const route = selected && nearest ? [[selected.lat, selected.lng], [nearest.lat, nearest.lng]] : null;
  const altRoute = selected && second ? [[selected.lat, selected.lng], [(selected.lat + second.lat) / 2 + 0.02, (selected.lng + second.lng) / 2 + 0.02], [second.lat, second.lng]] : null;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    className: "space-y-5",
    "data-testid": "evacuation-page",
    "x-file-name": "Evacuation",
    "x-line-number": "31",
    "x-column": "4",
    "x-component": "div",
    "x-id": "Evacuation_31_4",
    "x-dynamic": "false",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: "flex items-center gap-3",
      "x-file-name": "Evacuation",
      "x-line-number": "32",
      "x-column": "6",
      "x-component": "div",
      "x-id": "Evacuation_32_6",
      "x-dynamic": "false",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
        size: 22,
        className: "text-violet-400",
        "x-file-name": "Evacuation",
        "x-line-number": "33",
        "x-column": "8",
        "x-component": "LifeBuoy",
        "x-id": "Evacuation_33_8",
        "x-dynamic": "false"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        "x-file-name": "Evacuation",
        "x-line-number": "34",
        "x-column": "8",
        "x-component": "div",
        "x-id": "Evacuation_34_8",
        "x-dynamic": "false",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h1", {
          className: "font-display font-bold text-xl cc-text tracking-tight",
          "x-file-name": "Evacuation",
          "x-line-number": "35",
          "x-column": "10",
          "x-component": "h1",
          "x-id": "Evacuation_35_10",
          "x-dynamic": "false",
          children: "Evacuation & Safe Zones"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "text-xs cc-text-2",
          "x-file-name": "Evacuation",
          "x-line-number": "36",
          "x-column": "10",
          "x-component": "div",
          "x-id": "Evacuation_36_10",
          "x-dynamic": "false",
          children: "Safe routes are simulated \u2014 verify with ground teams before operational use"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: "grid grid-cols-1 lg:grid-cols-12 gap-4",
      "x-file-name": "Evacuation",
      "x-line-number": "40",
      "x-column": "6",
      "x-component": "div",
      "x-id": "Evacuation_40_6",
      "x-dynamic": "false",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: "lg:col-span-8",
        "x-file-name": "Evacuation",
        "x-line-number": "41",
        "x-column": "8",
        "x-component": "div",
        "x-id": "Evacuation_41_8",
        "x-dynamic": "true",
        "x-source-type": "computed",
        "x-source-editable": "false",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_RiskMap__WEBPACK_IMPORTED_MODULE_2__["default"], {
          locations: locations,
          evac: data,
          sensors: [],
          showSensors: false,
          selectedId: selected === null || selected === void 0 ? void 0 : selected.id,
          onSelectLocation: setSelected,
          route: routeBlocked ? null : route,
          altRoute: routeBlocked ? altRoute : null,
          center: selected ? [selected.lat, selected.lng] : [26.2, 92.9],
          zoom: selected ? 10 : 7,
          height: "560px",
          "x-file-name": "Evacuation",
          "x-line-number": "42",
          "x-column": "10",
          "x-component": "RiskMap",
          "x-id": "Evacuation_42_10",
          "x-dynamic": "true",
          "x-excluded": "true"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this), selected && nearest && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "mt-3 cc-surface rounded-md p-4",
          "data-testid": "route-info",
          "x-file-name": "Evacuation",
          "x-line-number": "47",
          "x-column": "12",
          "x-component": "div",
          "x-id": "Evacuation_47_12",
          "x-dynamic": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "flex items-center gap-2 text-sm cc-text font-semibold",
            "x-file-name": "Evacuation",
            "x-line-number": "48",
            "x-column": "14",
            "x-component": "div",
            "x-id": "Evacuation_48_14",
            "x-dynamic": "true",
            "x-source-type": "computed",
            "x-source-editable": "false",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
              size: 15,
              className: "text-emerald-400"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 17
            }, this), routeBlocked ? "Primary route unavailable — alternative shown" : "Safest available route (simulated)"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "text-xs cc-text-2 mt-1.5",
            "x-file-name": "Evacuation",
            "x-line-number": "52",
            "x-column": "14",
            "x-component": "div",
            "x-id": "Evacuation_52_14",
            "x-dynamic": "true",
            "x-source-type": "computed",
            "x-source-editable": "false",
            children: ["From ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("b", {
              className: "cc-text",
              "x-file-name": "Evacuation",
              "x-line-number": "53",
              "x-column": "21",
              "x-component": "b",
              "x-id": "Evacuation_53_21",
              "x-dynamic": "true",
              "x-source-type": "state",
              "x-source-var": "selected",
              "x-source-path": "name",
              "x-source-editable": "false",
              children: selected.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 22
            }, this), " \u2192 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("b", {
              className: "cc-text",
              "x-file-name": "Evacuation",
              "x-line-number": "53",
              "x-column": "66",
              "x-component": "b",
              "x-id": "Evacuation_53_66",
              "x-dynamic": "true",
              "x-source-type": "unknown",
              "x-source-editable": "false",
              children: (_ref = routeBlocked ? second : nearest) === null || _ref === void 0 ? void 0 : _ref.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 67
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
              "data-ve-dynamic": "true",
              "x-excluded": "true",
              style: {
                display: "contents"
              },
              "x-file-name": "Evacuation",
              "x-line-number": "52",
              "x-column": "14",
              "x-component": "div",
              "x-id": "Evacuation_52_14_expr5",
              "x-dynamic": "true",
              "x-source-type": "computed",
              "x-source-editable": "false",
              children: routeBlocked && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
                className: "text-amber-400",
                "x-file-name": "Evacuation",
                "x-line-number": "54",
                "x-column": "33",
                "x-component": "span",
                "x-id": "Evacuation_54_33",
                "x-dynamic": "true",
                "x-source-type": "unknown",
                "x-source-editable": "false",
                children: [" \xB7 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
                  "data-ve-dynamic": "true",
                  "x-excluded": "true",
                  style: {
                    display: "contents"
                  },
                  "x-file-name": "Evacuation",
                  "x-line-number": "54",
                  "x-column": "33",
                  "x-component": "span",
                  "x-id": "Evacuation_54_33_expr1",
                  "x-dynamic": "true",
                  "x-source-type": "unknown",
                  "x-source-editable": "false",
                  children: (_data$blocked_roads$f = data.blocked_roads.find(r => dist(r, selected) < 0.15)) === null || _data$blocked_roads$f === void 0 ? void 0 : _data$blocked_roads$f.name
                }, void 0, false), " is blocked \u2014 rerouted"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 34
              }, this)
            }, void 0, false)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: "lg:col-span-4 space-y-4",
        "x-file-name": "Evacuation",
        "x-line-number": "60",
        "x-column": "8",
        "x-component": "div",
        "x-id": "Evacuation_60_8",
        "x-dynamic": "true",
        "x-source-type": "computed",
        "x-source-editable": "false",
        children: [selected && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "cc-surface rounded-md p-4",
          "x-file-name": "Evacuation",
          "x-line-number": "62",
          "x-column": "12",
          "x-component": "div",
          "x-id": "Evacuation_62_12",
          "x-dynamic": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "overline-tag mb-1",
            "x-file-name": "Evacuation",
            "x-line-number": "63",
            "x-column": "14",
            "x-component": "div",
            "x-id": "Evacuation_63_14",
            "x-dynamic": "false",
            children: "Selected risk zone"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "flex items-center justify-between",
            "x-file-name": "Evacuation",
            "x-line-number": "64",
            "x-column": "14",
            "x-component": "div",
            "x-id": "Evacuation_64_14",
            "x-dynamic": "false",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
              className: "font-semibold cc-text text-sm",
              "x-file-name": "Evacuation",
              "x-line-number": "65",
              "x-column": "16",
              "x-component": "span",
              "x-id": "Evacuation_65_16",
              "x-dynamic": "true",
              "x-source-type": "state",
              "x-source-var": "selected",
              "x-source-path": "name",
              "x-source-editable": "false",
              children: selected.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_3__.RiskBadge, {
              level: selected.risk.level,
              "x-file-name": "Evacuation",
              "x-line-number": "66",
              "x-column": "16",
              "x-component": "RiskBadge",
              "x-id": "Evacuation_66_16",
              "x-dynamic": "true"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "cc-surface rounded-md p-4",
          "x-file-name": "Evacuation",
          "x-line-number": "70",
          "x-column": "10",
          "x-component": "div",
          "x-id": "Evacuation_70_10",
          "x-dynamic": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {
            "x-file-name": "Evacuation",
            "x-line-number": "71",
            "x-column": "12",
            "x-component": "SectionTitle",
            "x-id": "Evacuation_71_12",
            "x-dynamic": "false",
            children: "Evacuation Centers & Shelters"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "space-y-2 max-h-56 overflow-y-auto",
            "data-testid": "evac-centers-list",
            "x-file-name": "Evacuation",
            "x-line-number": "72",
            "x-column": "12",
            "x-component": "div",
            "x-id": "Evacuation_72_12",
            "x-dynamic": "true",
            "x-source-type": "computed",
            "x-source-editable": "false",
            children: data.centers.map(c => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
              className: "cc-elevated rounded-md p-3",
              "x-file-name": "Evacuation",
              "x-line-number": "74",
              "x-column": "16",
              "x-component": "div",
              "x-id": "Evacuation_74_16",
              "x-dynamic": "false",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                className: "text-sm cc-text font-semibold",
                "x-file-name": "Evacuation",
                "x-line-number": "75",
                "x-column": "18",
                "x-component": "div",
                "x-id": "Evacuation_75_18",
                "x-dynamic": "true",
                "x-source-type": "static-imported",
                "x-source-var": "data",
                "x-source-path": "centers.name",
                "x-source-editable": "false",
                "x-array-var": "data",
                "x-array-item-param": "c",
                children: c.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                className: "text-xs cc-text-2",
                "x-file-name": "Evacuation",
                "x-line-number": "76",
                "x-column": "18",
                "x-component": "div",
                "x-id": "Evacuation_76_18",
                "x-dynamic": "true",
                "x-source-type": "static-imported",
                "x-source-var": "data",
                "x-source-path": "centers.type",
                "x-source-editable": "false",
                "x-array-var": "data",
                "x-array-item-param": "c",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
                  "data-ve-dynamic": "true",
                  "x-excluded": "true",
                  style: {
                    display: "contents"
                  },
                  "x-file-name": "Evacuation",
                  "x-line-number": "76",
                  "x-column": "18",
                  "x-component": "div",
                  "x-id": "Evacuation_76_18_expr0",
                  "x-dynamic": "true",
                  "x-source-type": "static-imported",
                  "x-source-var": "data",
                  "x-source-path": "centers.type",
                  "x-source-editable": "false",
                  "x-array-var": "data",
                  "x-array-item-param": "c",
                  children: c.type
                }, void 0, false), " \xB7 Capacity ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
                  "data-ve-dynamic": "true",
                  "x-excluded": "true",
                  style: {
                    display: "contents"
                  },
                  "x-file-name": "Evacuation",
                  "x-line-number": "76",
                  "x-column": "18",
                  "x-component": "div",
                  "x-id": "Evacuation_76_18_expr2",
                  "x-dynamic": "true",
                  "x-source-type": "static-imported",
                  "x-source-var": "data",
                  "x-source-path": "centers.capacity",
                  "x-source-editable": "false",
                  "x-array-var": "data",
                  "x-array-item-param": "c",
                  children: c.capacity
                }, void 0, false)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 19
              }, this)]
            }, c.id, true, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 17
            }, this))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "cc-surface rounded-md p-4",
          "x-file-name": "Evacuation",
          "x-line-number": "81",
          "x-column": "10",
          "x-component": "div",
          "x-id": "Evacuation_81_10",
          "x-dynamic": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {
            "x-file-name": "Evacuation",
            "x-line-number": "82",
            "x-column": "12",
            "x-component": "SectionTitle",
            "x-id": "Evacuation_82_12",
            "x-dynamic": "false",
            children: "Hospitals & Police"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "space-y-2 max-h-48 overflow-y-auto",
            "data-testid": "facilities-list",
            "x-file-name": "Evacuation",
            "x-line-number": "83",
            "x-column": "12",
            "x-component": "div",
            "x-id": "Evacuation_83_12",
            "x-dynamic": "true",
            "x-source-type": "computed",
            "x-source-editable": "false",
            children: data.facilities.map(f => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
              className: "flex justify-between cc-elevated rounded-md p-3",
              "x-file-name": "Evacuation",
              "x-line-number": "85",
              "x-column": "16",
              "x-component": "div",
              "x-id": "Evacuation_85_16",
              "x-dynamic": "false",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
                className: "text-sm cc-text",
                "x-file-name": "Evacuation",
                "x-line-number": "86",
                "x-column": "18",
                "x-component": "span",
                "x-id": "Evacuation_86_18",
                "x-dynamic": "true",
                "x-source-type": "static-imported",
                "x-source-var": "data",
                "x-source-path": "facilities.name",
                "x-source-editable": "false",
                "x-array-var": "data",
                "x-array-item-param": "f",
                children: f.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
                className: `text-[10px] font-mono2 ${f.type === "Hospital" ? "text-pink-400" : "text-blue-400"}`,
                "x-file-name": "Evacuation",
                "x-line-number": "87",
                "x-column": "18",
                "x-component": "span",
                "x-id": "Evacuation_87_18",
                "x-dynamic": "true",
                "x-source-type": "computed",
                "x-source-editable": "false",
                children: f.type.toUpperCase()
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 19
              }, this)]
            }, f.id, true, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 17
            }, this))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "cc-surface rounded-md p-4 border-amber-500/40",
          "x-file-name": "Evacuation",
          "x-line-number": "92",
          "x-column": "10",
          "x-component": "div",
          "x-id": "Evacuation_92_10",
          "x-dynamic": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {
            "x-file-name": "Evacuation",
            "x-line-number": "93",
            "x-column": "12",
            "x-component": "SectionTitle",
            "x-id": "Evacuation_93_12",
            "x-dynamic": "false",
            children: "Blocked / Restricted Roads"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "space-y-2",
            "data-testid": "blocked-roads-list",
            "x-file-name": "Evacuation",
            "x-line-number": "94",
            "x-column": "12",
            "x-component": "div",
            "x-id": "Evacuation_94_12",
            "x-dynamic": "true",
            "x-source-type": "computed",
            "x-source-editable": "false",
            children: data.blocked_roads.map(r => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
              className: "flex gap-2.5 cc-elevated rounded-md p-3",
              "x-file-name": "Evacuation",
              "x-line-number": "96",
              "x-column": "16",
              "x-component": "div",
              "x-id": "Evacuation_96_16",
              "x-dynamic": "false",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
                size: 15,
                className: "text-amber-400 shrink-0 mt-0.5",
                "x-file-name": "Evacuation",
                "x-line-number": "97",
                "x-column": "18",
                "x-component": "AlertCircle",
                "x-id": "Evacuation_97_18",
                "x-dynamic": "true",
                "x-source-type": "external",
                "x-source-var": "data",
                "x-source-editable": "false",
                "x-array-var": "data",
                "x-array-item-param": "r"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                "x-file-name": "Evacuation",
                "x-line-number": "98",
                "x-column": "18",
                "x-component": "div",
                "x-id": "Evacuation_98_18",
                "x-dynamic": "false",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                  className: "text-sm cc-text",
                  "x-file-name": "Evacuation",
                  "x-line-number": "99",
                  "x-column": "20",
                  "x-component": "div",
                  "x-id": "Evacuation_99_20",
                  "x-dynamic": "true",
                  "x-source-type": "static-imported",
                  "x-source-var": "data",
                  "x-source-path": "blocked_roads.name",
                  "x-source-editable": "false",
                  "x-array-var": "data",
                  "x-array-item-param": "r",
                  children: r.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                  className: "text-xs cc-text-2",
                  "x-file-name": "Evacuation",
                  "x-line-number": "100",
                  "x-column": "20",
                  "x-component": "div",
                  "x-id": "Evacuation_100_20",
                  "x-dynamic": "true",
                  "x-source-type": "static-imported",
                  "x-source-var": "data",
                  "x-source-path": "blocked_roads.status",
                  "x-source-editable": "false",
                  "x-array-var": "data",
                  "x-array-item-param": "r",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
                    "data-ve-dynamic": "true",
                    "x-excluded": "true",
                    style: {
                      display: "contents"
                    },
                    "x-file-name": "Evacuation",
                    "x-line-number": "100",
                    "x-column": "20",
                    "x-component": "div",
                    "x-id": "Evacuation_100_20_expr0",
                    "x-dynamic": "true",
                    "x-source-type": "static-imported",
                    "x-source-var": "data",
                    "x-source-path": "blocked_roads.status",
                    "x-source-editable": "false",
                    "x-array-var": "data",
                    "x-array-item-param": "r",
                    children: r.status
                  }, void 0, false), " \u2014 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
                    "data-ve-dynamic": "true",
                    "x-excluded": "true",
                    style: {
                      display: "contents"
                    },
                    "x-file-name": "Evacuation",
                    "x-line-number": "100",
                    "x-column": "20",
                    "x-component": "div",
                    "x-id": "Evacuation_100_20_expr2",
                    "x-dynamic": "true",
                    "x-source-type": "static-imported",
                    "x-source-var": "data",
                    "x-source-path": "blocked_roads.reason",
                    "x-source-editable": "false",
                    "x-array-var": "data",
                    "x-array-item-param": "r",
                    children: r.reason
                  }, void 0, false)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 100,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 19
              }, this)]
            }, r.id, true, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 17
            }, this))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, this);
}
_s(Evacuation, "eGULYlyN3+Dn27HoVWE7Z+IU2E8=");
_c = Evacuation;
var _c;
__webpack_require__.$Refresh$.register(_c, "Evacuation");

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

