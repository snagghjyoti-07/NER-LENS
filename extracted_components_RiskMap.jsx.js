/***/ "./src/components/RiskMap.jsx"
/*!************************************!*\
  !*** ./src/components/RiskMap.jsx ***!
  \************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RiskMap)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/lib/CircleMarker.js");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/lib/MapContainer.js");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/lib/Polyline.js");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/lib/Popup.js");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/lib/TileLayer.js");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/lib/Tooltip.js");
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ "./node_modules/leaflet/dist/leaflet.css");
/* harmony import */ var _lib_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/i18n */ "./src/lib/i18n.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/app/frontend/src/components/RiskMap.jsx";





const SENSOR_COLOR = "#38BDF8";
const EVAC_COLOR = "#A78BFA";
const FACILITY_COLORS = {
  Hospital: "#F472B6",
  Police: "#60A5FA",
  "Evacuation Center": EVAC_COLOR,
  "Emergency Shelter": EVAC_COLOR
};
function RiskMap({
  locations = [],
  sensors = [],
  evac,
  events = [],
  selectedId,
  onSelectLocation,
  showSensors = true,
  showEvac = true,
  showRoads = true,
  showEvents = true,
  center = [26.2, 92.9],
  zoom = 7,
  height = "520px",
  route = null,
  altRoute = null
}) {
  var _evac$centers, _evac$facilities, _evac$blocked_roads;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
    style: {
      height
    },
    className: "rounded-md overflow-hidden border border-zinc-800",
    "data-testid": "risk-map",
    "x-file-name": "RiskMap",
    "x-line-number": "14",
    "x-column": "4",
    "x-component": "div",
    "x-id": "RiskMap_14_4",
    "x-dynamic": "false",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_2__.MapContainer, {
      center: center,
      zoom: zoom,
      style: {
        height: "100%",
        width: "100%"
      },
      scrollWheelZoom: true,
      "x-file-name": "RiskMap",
      "x-line-number": "15",
      "x-column": "6",
      "x-component": "MapContainer",
      "x-id": "RiskMap_15_6",
      "x-dynamic": "true",
      "x-source-type": "computed",
      "x-source-editable": "false",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_5__.TileLayer, {
        attribution: "\xA9 <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors",
        url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
        className: "map-tiles-dark",
        "x-file-name": "RiskMap",
        "x-line-number": "16",
        "x-column": "8",
        "x-component": "TileLayer",
        "x-id": "RiskMap_16_8",
        "x-dynamic": "false"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), locations.map(loc => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_1__.CircleMarker, {
          center: [loc.lat, loc.lng],
          radius: loc.risk.level === "CRITICAL" ? 26 : loc.risk.level === "HIGH" ? 20 : 15,
          pathOptions: {
            color: _lib_i18n__WEBPACK_IMPORTED_MODULE_8__.RISK_COLORS[loc.risk.level],
            weight: 1,
            opacity: 0.35,
            fillOpacity: 0.12,
            fillColor: _lib_i18n__WEBPACK_IMPORTED_MODULE_8__.RISK_COLORS[loc.risk.level]
          },
          "x-file-name": "RiskMap",
          "x-line-number": "20",
          "x-column": "12",
          "x-component": "CircleMarker",
          "x-id": "RiskMap_20_12",
          "x-dynamic": "true",
          "x-source-type": "external",
          "x-source-var": "locations",
          "x-source-editable": "false",
          "x-array-var": "locations",
          "x-array-item-param": "loc"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_1__.CircleMarker, {
          center: [loc.lat, loc.lng],
          radius: 7,
          eventHandlers: {
            click: () => onSelectLocation && onSelectLocation(loc)
          },
          pathOptions: {
            color: "#fff",
            weight: selectedId === loc.id ? 2.5 : 1,
            fillColor: _lib_i18n__WEBPACK_IMPORTED_MODULE_8__.RISK_COLORS[loc.risk.level],
            fillOpacity: 1
          },
          "x-file-name": "RiskMap",
          "x-line-number": "22",
          "x-column": "12",
          "x-component": "CircleMarker",
          "x-id": "RiskMap_22_12",
          "x-dynamic": "true",
          "x-source-type": "external",
          "x-source-var": "locations",
          "x-source-editable": "false",
          "x-array-var": "locations",
          "x-array-item-param": "loc",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.Tooltip, {
            direction: "top",
            offset: [0, -8],
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
              className: "font-semibold",
              "x-file-name": "RiskMap",
              "x-line-number": "26",
              "x-column": "16",
              "x-component": "span",
              "x-id": "RiskMap_26_16",
              "x-dynamic": "true",
              "x-source-type": "static-imported",
              "x-source-var": "locations",
              "x-source-path": "name",
              "x-source-editable": "false",
              "x-array-var": "locations",
              "x-array-item-param": "loc",
              children: loc.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("br", {
              "x-file-name": "RiskMap",
              "x-line-number": "26",
              "x-column": "65",
              "x-component": "br",
              "x-id": "RiskMap_26_65",
              "x-dynamic": "false"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 66
            }, this), loc.risk.level, " \xB7 ", loc.risk.score, "/100"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_4__.Popup, {
            "x-file-name": "RiskMap",
            "x-line-number": "28",
            "x-column": "14",
            "x-component": "Popup",
            "x-id": "RiskMap_28_14",
            "x-dynamic": "true",
            "x-source-type": "external",
            "x-source-var": "locations",
            "x-source-editable": "false",
            "x-array-var": "locations",
            "x-array-item-param": "loc",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
              className: "text-sm",
              "x-file-name": "RiskMap",
              "x-line-number": "29",
              "x-column": "16",
              "x-component": "div",
              "x-id": "RiskMap_29_16",
              "x-dynamic": "false",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                className: "font-bold",
                "x-file-name": "RiskMap",
                "x-line-number": "30",
                "x-column": "18",
                "x-component": "div",
                "x-id": "RiskMap_30_18",
                "x-dynamic": "true",
                "x-source-type": "static-imported",
                "x-source-var": "locations",
                "x-source-path": "name",
                "x-source-editable": "false",
                "x-array-var": "locations",
                "x-array-item-param": "loc",
                children: loc.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                "x-file-name": "RiskMap",
                "x-line-number": "31",
                "x-column": "18",
                "x-component": "div",
                "x-id": "RiskMap_31_18",
                "x-dynamic": "true",
                "x-source-type": "static-imported",
                "x-source-var": "locations",
                "x-source-path": "district",
                "x-source-editable": "false",
                "x-array-var": "locations",
                "x-array-item-param": "loc",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
                  "data-ve-dynamic": "true",
                  "x-excluded": "true",
                  style: {
                    display: "contents"
                  },
                  "x-file-name": "RiskMap",
                  "x-line-number": "31",
                  "x-column": "18",
                  "x-component": "div",
                  "x-id": "RiskMap_31_18_expr0",
                  "x-dynamic": "true",
                  "x-source-type": "static-imported",
                  "x-source-var": "locations",
                  "x-source-path": "district",
                  "x-source-editable": "false",
                  "x-array-var": "locations",
                  "x-array-item-param": "loc",
                  children: loc.district
                }, void 0, false), ", ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
                  "data-ve-dynamic": "true",
                  "x-excluded": "true",
                  style: {
                    display: "contents"
                  },
                  "x-file-name": "RiskMap",
                  "x-line-number": "31",
                  "x-column": "18",
                  "x-component": "div",
                  "x-id": "RiskMap_31_18_expr2",
                  "x-dynamic": "true",
                  "x-source-type": "static-imported",
                  "x-source-var": "locations",
                  "x-source-path": "state",
                  "x-source-editable": "false",
                  "x-array-var": "locations",
                  "x-array-item-param": "loc",
                  children: loc.state
                }, void 0, false)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                className: "mt-1",
                "x-file-name": "RiskMap",
                "x-line-number": "32",
                "x-column": "18",
                "x-component": "div",
                "x-id": "RiskMap_32_18",
                "x-dynamic": "true",
                "x-source-type": "static-imported",
                "x-source-var": "locations",
                "x-source-path": "risk.score",
                "x-source-editable": "false",
                "x-array-var": "locations",
                "x-array-item-param": "loc",
                children: ["Risk: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("b", {
                  style: {
                    color: _lib_i18n__WEBPACK_IMPORTED_MODULE_8__.RISK_COLORS[loc.risk.level]
                  },
                  "x-file-name": "RiskMap",
                  "x-line-number": "32",
                  "x-column": "46",
                  "x-component": "b",
                  "x-id": "RiskMap_32_46",
                  "x-dynamic": "true",
                  "x-source-type": "static-imported",
                  "x-source-var": "locations",
                  "x-source-path": "risk.level",
                  "x-source-editable": "false",
                  "x-array-var": "locations",
                  "x-array-item-param": "loc",
                  children: loc.risk.level
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 32,
                  columnNumber: 47
                }, this), " (", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
                  "data-ve-dynamic": "true",
                  "x-excluded": "true",
                  style: {
                    display: "contents"
                  },
                  "x-file-name": "RiskMap",
                  "x-line-number": "32",
                  "x-column": "18",
                  "x-component": "div",
                  "x-id": "RiskMap_32_18_expr3",
                  "x-dynamic": "true",
                  "x-source-type": "static-imported",
                  "x-source-var": "locations",
                  "x-source-path": "risk.score",
                  "x-source-editable": "false",
                  "x-array-var": "locations",
                  "x-array-item-param": "loc",
                  children: loc.risk.score
                }, void 0, false), "/100)"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                "x-file-name": "RiskMap",
                "x-line-number": "33",
                "x-column": "18",
                "x-component": "div",
                "x-id": "RiskMap_33_18",
                "x-dynamic": "true",
                "x-source-type": "static-imported",
                "x-source-var": "locations",
                "x-source-path": "readings.rainfall",
                "x-source-editable": "false",
                "x-array-var": "locations",
                "x-array-item-param": "loc",
                children: ["Rainfall: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
                  "data-ve-dynamic": "true",
                  "x-excluded": "true",
                  style: {
                    display: "contents"
                  },
                  "x-file-name": "RiskMap",
                  "x-line-number": "33",
                  "x-column": "18",
                  "x-component": "div",
                  "x-id": "RiskMap_33_18_expr1",
                  "x-dynamic": "true",
                  "x-source-type": "static-imported",
                  "x-source-var": "locations",
                  "x-source-path": "readings.rainfall",
                  "x-source-editable": "false",
                  "x-array-var": "locations",
                  "x-array-item-param": "loc",
                  children: loc.readings.rainfall
                }, void 0, false), " mm \xB7 Soil: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
                  "data-ve-dynamic": "true",
                  "x-excluded": "true",
                  style: {
                    display: "contents"
                  },
                  "x-file-name": "RiskMap",
                  "x-line-number": "33",
                  "x-column": "18",
                  "x-component": "div",
                  "x-id": "RiskMap_33_18_expr3",
                  "x-dynamic": "true",
                  "x-source-type": "static-imported",
                  "x-source-var": "locations",
                  "x-source-path": "readings.soil_moisture",
                  "x-source-editable": "false",
                  "x-array-var": "locations",
                  "x-array-item-param": "loc",
                  children: loc.readings.soil_moisture
                }, void 0, false), "%"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 13
        }, this)]
      }, loc.id, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }, this)), showSensors && sensors.map(s => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_1__.CircleMarker, {
        center: [s.lat, s.lng],
        radius: 3.5,
        pathOptions: {
          color: s.status === "ONLINE" ? SENSOR_COLOR : "#71717A",
          fillColor: s.status === "ONLINE" ? SENSOR_COLOR : "#71717A",
          fillOpacity: 0.9,
          weight: 0
        },
        "x-file-name": "RiskMap",
        "x-line-number": "40",
        "x-column": "10",
        "x-component": "CircleMarker",
        "x-id": "RiskMap_40_10",
        "x-dynamic": "true",
        "x-source-type": "external",
        "x-source-var": "sensors",
        "x-source-editable": "false",
        "x-array-var": "sensors",
        "x-array-item-param": "s",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.Tooltip, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("b", {
            "x-file-name": "RiskMap",
            "x-line-number": "42",
            "x-column": "21",
            "x-component": "b",
            "x-id": "RiskMap_42_21",
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
            lineNumber: 42,
            columnNumber: 22
          }, this), " \xB7 ", s.name, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("br", {
            "x-file-name": "RiskMap",
            "x-line-number": "42",
            "x-column": "45",
            "x-component": "br",
            "x-id": "RiskMap_42_45",
            "x-dynamic": "false"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 46
          }, this), s.status]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }, this)
      }, s.id, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }, this)), showEvac && (evac === null || evac === void 0 ? void 0 : (_evac$centers = evac.centers) === null || _evac$centers === void 0 ? void 0 : _evac$centers.map(c => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_1__.CircleMarker, {
        center: [c.lat, c.lng],
        radius: 6,
        pathOptions: {
          color: "#fff",
          weight: 1.5,
          fillColor: EVAC_COLOR,
          fillOpacity: 1
        },
        "x-file-name": "RiskMap",
        "x-line-number": "46",
        "x-column": "10",
        "x-component": "CircleMarker",
        "x-id": "RiskMap_46_10",
        "x-dynamic": "true",
        "x-source-type": "external",
        "x-source-var": "_evac$centers",
        "x-source-editable": "false",
        "x-array-var": "_evac$centers",
        "x-array-item-param": "c",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.Tooltip, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("b", {
            "x-file-name": "RiskMap",
            "x-line-number": "48",
            "x-column": "21",
            "x-component": "b",
            "x-id": "RiskMap_48_21",
            "x-dynamic": "true",
            "x-source-type": "static-imported",
            "x-source-var": "_evac$centers",
            "x-source-path": "name",
            "x-source-editable": "false",
            "x-array-var": "_evac$centers",
            "x-array-item-param": "c",
            children: c.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 22
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("br", {
            "x-file-name": "RiskMap",
            "x-line-number": "48",
            "x-column": "36",
            "x-component": "br",
            "x-id": "RiskMap_48_36",
            "x-dynamic": "false"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 37
          }, this), c.type, " \xB7 Capacity ", c.capacity]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 13
        }, this)
      }, c.id, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }, this))), showEvac && (evac === null || evac === void 0 ? void 0 : (_evac$facilities = evac.facilities) === null || _evac$facilities === void 0 ? void 0 : _evac$facilities.map(f => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_1__.CircleMarker, {
        center: [f.lat, f.lng],
        radius: 5,
        pathOptions: {
          color: "#fff",
          weight: 1,
          fillColor: FACILITY_COLORS[f.type] || "#999",
          fillOpacity: 1
        },
        "x-file-name": "RiskMap",
        "x-line-number": "52",
        "x-column": "10",
        "x-component": "CircleMarker",
        "x-id": "RiskMap_52_10",
        "x-dynamic": "true",
        "x-source-type": "external",
        "x-source-var": "_evac$facilities",
        "x-source-editable": "false",
        "x-array-var": "_evac$facilities",
        "x-array-item-param": "f",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.Tooltip, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("b", {
            "x-file-name": "RiskMap",
            "x-line-number": "54",
            "x-column": "21",
            "x-component": "b",
            "x-id": "RiskMap_54_21",
            "x-dynamic": "true",
            "x-source-type": "static-imported",
            "x-source-var": "_evac$facilities",
            "x-source-path": "name",
            "x-source-editable": "false",
            "x-array-var": "_evac$facilities",
            "x-array-item-param": "f",
            children: f.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 22
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("br", {
            "x-file-name": "RiskMap",
            "x-line-number": "54",
            "x-column": "36",
            "x-component": "br",
            "x-id": "RiskMap_54_36",
            "x-dynamic": "false"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 37
          }, this), f.type]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 13
        }, this)
      }, f.id, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }, this))), showRoads && (evac === null || evac === void 0 ? void 0 : (_evac$blocked_roads = evac.blocked_roads) === null || _evac$blocked_roads === void 0 ? void 0 : _evac$blocked_roads.map(r => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_1__.CircleMarker, {
        center: [r.lat, r.lng],
        radius: 6,
        pathOptions: {
          color: "#000",
          weight: 1.5,
          fillColor: "#FACC15",
          fillOpacity: 1
        },
        "x-file-name": "RiskMap",
        "x-line-number": "58",
        "x-column": "10",
        "x-component": "CircleMarker",
        "x-id": "RiskMap_58_10",
        "x-dynamic": "true",
        "x-source-type": "external",
        "x-source-var": "_evac$blocked_roads",
        "x-source-editable": "false",
        "x-array-var": "_evac$blocked_roads",
        "x-array-item-param": "r",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.Tooltip, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("b", {
            "x-file-name": "RiskMap",
            "x-line-number": "60",
            "x-column": "21",
            "x-component": "b",
            "x-id": "RiskMap_60_21",
            "x-dynamic": "true",
            "x-source-type": "static-imported",
            "x-source-var": "_evac$blocked_roads",
            "x-source-path": "name",
            "x-source-editable": "false",
            "x-array-var": "_evac$blocked_roads",
            "x-array-item-param": "r",
            children: r.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 22
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("br", {
            "x-file-name": "RiskMap",
            "x-line-number": "60",
            "x-column": "36",
            "x-component": "br",
            "x-id": "RiskMap_60_36",
            "x-dynamic": "false"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 37
          }, this), r.status, " \u2014 ", r.reason]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }, this)
      }, r.id, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }, this))), showEvents && events.map(e => e.coords && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_1__.CircleMarker, {
        center: e.coords,
        radius: 5,
        pathOptions: {
          color: "#E879F9",
          weight: 1.5,
          fillColor: "#E879F9",
          fillOpacity: 0.7,
          dashArray: "3 3"
        },
        "x-file-name": "RiskMap",
        "x-line-number": "64",
        "x-column": "22",
        "x-component": "CircleMarker",
        "x-id": "RiskMap_64_22",
        "x-dynamic": "true",
        "x-source-type": "external",
        "x-source-var": "events",
        "x-source-editable": "false",
        "x-array-var": "events",
        "x-array-item-param": "e",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.Tooltip, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("b", {
            "x-file-name": "RiskMap",
            "x-line-number": "66",
            "x-column": "21",
            "x-component": "b",
            "x-id": "RiskMap_66_21",
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
            lineNumber: 66,
            columnNumber: 22
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("br", {
            "x-file-name": "RiskMap",
            "x-line-number": "66",
            "x-column": "36",
            "x-component": "br",
            "x-id": "RiskMap_66_36",
            "x-dynamic": "false"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 37
          }, this), e.date, " (demo)"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 13
        }, this)
      }, e.id, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 23
      }, this)), route && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_3__.Polyline, {
        positions: route,
        pathOptions: {
          color: "#34D399",
          weight: 4,
          dashArray: "8 6"
        },
        "x-file-name": "RiskMap",
        "x-line-number": "69",
        "x-column": "18",
        "x-component": "Polyline",
        "x-id": "RiskMap_69_18",
        "x-dynamic": "false"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 19
      }, this), altRoute && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_3__.Polyline, {
        positions: altRoute,
        pathOptions: {
          color: "#60A5FA",
          weight: 3,
          dashArray: "2 6"
        },
        "x-file-name": "RiskMap",
        "x-line-number": "70",
        "x-column": "21",
        "x-component": "Polyline",
        "x-id": "RiskMap_70_21",
        "x-dynamic": "false"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 22
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
_c = RiskMap;
var _c;
__webpack_require__.$Refresh$.register(_c, "RiskMap");

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

