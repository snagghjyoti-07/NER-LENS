/***/ "./src/pages/ReportHazard.jsx"
/*!************************************!*\
  !*** ./src/pages/ReportHazard.jsx ***!
  \************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReportHazard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4N6VE7H7.mjs");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/api */ "./src/lib/api.js");
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/AppContext */ "./src/context/AppContext.jsx");
/* harmony import */ var _components_ui_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ui-helpers */ "./src/components/ui-helpers.jsx");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/camera.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/file-warning.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/map-pin.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/wifi-off.js");
/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sonner */ "./node_modules/sonner/dist/index.mjs");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/app/frontend/src/pages/ReportHazard.jsx",
  _s = __webpack_require__.$Refresh$.signature();








const TYPES = ["Landslide", "Crack", "Rockfall", "Road Blockage", "Heavy Rainfall", "Flooding", "Ground Movement"];
const SEVERITIES = ["LOW", "MEDIUM", "HIGH", "CRITICAL"];
function ReportHazard() {
  _s();
  const {
    user,
    network,
    setQueueCount
  } = (0,_context_AppContext__WEBPACK_IMPORTED_MODULE_3__.useApp)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    type: "Landslide",
    severity: "MEDIUM",
    description: "",
    lat: "",
    lng: "",
    location_name: "",
    photo: null
  });
  const [photoName, setPhotoName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [reports, setReports] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [busy, setBusy] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const loadReports = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    if (!user) {
      setReports([]);
      return;
    }
    try {
      const r = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__.apiGet)("/reports");
      setReports(r.data);
    } catch (e) {
      setReports([]);
    }
  }, [user]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    loadReports();
  }, [loadReports]);
  const useGPS = () => {
    if (!navigator.geolocation) {
      sonner__WEBPACK_IMPORTED_MODULE_9__.toast.error("Geolocation not supported");
      return;
    }
    navigator.geolocation.getCurrentPosition(p => {
      setForm(f => ({
        ...f,
        lat: p.coords.latitude.toFixed(5),
        lng: p.coords.longitude.toFixed(5)
      }));
      sonner__WEBPACK_IMPORTED_MODULE_9__.toast.success("GPS location captured");
    }, () => sonner__WEBPACK_IMPORTED_MODULE_9__.toast.error("Could not get GPS position"));
  };
  const onPhoto = e => {
    var _e$target$files;
    const file = (_e$target$files = e.target.files) === null || _e$target$files === void 0 ? void 0 : _e$target$files[0];
    if (!file) return;
    setPhotoName(file.name);
    const reader = new FileReader();
    reader.onload = () => setForm(f => ({
      ...f,
      photo: reader.result.slice(0, 120000)
    }));
    reader.readAsDataURL(file);
  };
  const submit = async e => {
    e.preventDefault();
    setBusy(true);
    const payload = {
      ...form,
      lat: parseFloat(form.lat) || 0,
      lng: parseFloat(form.lng) || 0
    };
    if (network === "offline" || (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__.isSimOffline)()) {
      const n = (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__.queueOffline)({
        kind: "hazard_report",
        payload
      });
      setQueueCount(n);
      sonner__WEBPACK_IMPORTED_MODULE_9__.toast.success("Stored locally — will sync when connectivity returns", {
        icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
          size: 15,
          "x-file-name": "ReportHazard",
          "x-line-number": "49",
          "x-column": "84",
          "x-component": "WifiOff",
          "x-id": "ReportHazard_49_84",
          "x-dynamic": "false"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 85
        }, this)
      });
      setBusy(false);
      return;
    }
    if (!user) {
      sonner__WEBPACK_IMPORTED_MODULE_9__.toast.error("Sign in to submit a report");
      navigate("/login");
      setBusy(false);
      return;
    }
    try {
      await (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__.apiPost)("/reports", payload);
      sonner__WEBPACK_IMPORTED_MODULE_9__.toast.success("Hazard report submitted to authorities");
      setForm({
        type: "Landslide",
        severity: "MEDIUM",
        description: "",
        lat: "",
        lng: "",
        location_name: "",
        photo: null
      });
      setPhotoName("");
      loadReports();
    } catch (err) {
      sonner__WEBPACK_IMPORTED_MODULE_9__.toast.error((0,_lib_api__WEBPACK_IMPORTED_MODULE_2__.formatApiError)(err));
    } finally {
      setBusy(false);
    }
  };
  if (reports === null) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_4__.Loading, {
    "x-file-name": "ReportHazard",
    "x-line-number": "64",
    "x-column": "31",
    "x-component": "Loading",
    "x-id": "ReportHazard_64_31",
    "x-dynamic": "true"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 32
  }, this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
    className: "space-y-5",
    "data-testid": "report-page",
    "x-file-name": "ReportHazard",
    "x-line-number": "67",
    "x-column": "4",
    "x-component": "div",
    "x-id": "ReportHazard_67_4",
    "x-dynamic": "false",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
      className: "flex items-center gap-3",
      "x-file-name": "ReportHazard",
      "x-line-number": "68",
      "x-column": "6",
      "x-component": "div",
      "x-id": "ReportHazard_68_6",
      "x-dynamic": "false",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
        size: 22,
        className: "text-amber-400",
        "x-file-name": "ReportHazard",
        "x-line-number": "69",
        "x-column": "8",
        "x-component": "FileWarning",
        "x-id": "ReportHazard_69_8",
        "x-dynamic": "false"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        "x-file-name": "ReportHazard",
        "x-line-number": "70",
        "x-column": "8",
        "x-component": "div",
        "x-id": "ReportHazard_70_8",
        "x-dynamic": "false",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h1", {
          className: "font-display font-bold text-xl cc-text tracking-tight",
          "x-file-name": "ReportHazard",
          "x-line-number": "71",
          "x-column": "10",
          "x-component": "h1",
          "x-id": "ReportHazard_71_10",
          "x-dynamic": "false",
          children: "Report Hazard"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "text-xs cc-text-2",
          "x-file-name": "ReportHazard",
          "x-line-number": "72",
          "x-column": "10",
          "x-component": "div",
          "x-id": "ReportHazard_72_10",
          "x-dynamic": "false",
          children: "Field & community reporting \u2014 stored locally when offline, synced on reconnect"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
      className: "grid grid-cols-1 lg:grid-cols-12 gap-4",
      "x-file-name": "ReportHazard",
      "x-line-number": "76",
      "x-column": "6",
      "x-component": "div",
      "x-id": "ReportHazard_76_6",
      "x-dynamic": "false",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("form", {
        onSubmit: submit,
        className: "lg:col-span-5 cc-surface rounded-md p-5 space-y-4",
        "data-testid": "report-form",
        "x-file-name": "ReportHazard",
        "x-line-number": "77",
        "x-column": "8",
        "x-component": "form",
        "x-id": "ReportHazard_77_8",
        "x-dynamic": "false",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_4__.SectionTitle, {
          "x-file-name": "ReportHazard",
          "x-line-number": "78",
          "x-column": "10",
          "x-component": "SectionTitle",
          "x-id": "ReportHazard_78_10",
          "x-dynamic": "false",
          children: "New Report"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          "x-file-name": "ReportHazard",
          "x-line-number": "79",
          "x-column": "10",
          "x-component": "div",
          "x-id": "ReportHazard_79_10",
          "x-dynamic": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "overline-tag mb-2",
            "x-file-name": "ReportHazard",
            "x-line-number": "80",
            "x-column": "12",
            "x-component": "div",
            "x-id": "ReportHazard_80_12",
            "x-dynamic": "false",
            children: "Hazard Type"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "grid grid-cols-2 gap-1.5",
            "x-file-name": "ReportHazard",
            "x-line-number": "81",
            "x-column": "12",
            "x-component": "div",
            "x-id": "ReportHazard_81_12",
            "x-dynamic": "true",
            "x-source-type": "computed",
            "x-source-editable": "false",
            children: TYPES.map(tp => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
              type: "button",
              onClick: () => setForm({
                ...form,
                type: tp
              }),
              "data-testid": `report-type-${tp.toLowerCase().replace(/ /g, "-")}`,
              className: `text-xs px-2 py-2 rounded-md border transition-colors text-left ${form.type === tp ? "border-amber-500/60 text-amber-400 bg-amber-500/10" : "border-zinc-700 cc-text-2 hover:text-white"}`,
              "x-file-name": "ReportHazard",
              "x-line-number": "83",
              "x-column": "16",
              "x-component": "button",
              "x-id": "ReportHazard_83_16",
              "x-dynamic": "true",
              "x-source-type": "static-imported",
              "x-source-var": "TYPES",
              "x-source-file-abs": "/app/frontend/src/pages/ReportHazard.jsx",
              "x-source-line": "9",
              "x-source-editable": "true",
              "x-array-var": "TYPES",
              "x-array-line": "9",
              "x-array-item-param": "tp",
              children: tp
            }, tp, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 17
            }, this))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          "x-file-name": "ReportHazard",
          "x-line-number": "88",
          "x-column": "10",
          "x-component": "div",
          "x-id": "ReportHazard_88_10",
          "x-dynamic": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "overline-tag mb-2",
            "x-file-name": "ReportHazard",
            "x-line-number": "89",
            "x-column": "12",
            "x-component": "div",
            "x-id": "ReportHazard_89_12",
            "x-dynamic": "false",
            children: "Severity"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "flex gap-1.5",
            "x-file-name": "ReportHazard",
            "x-line-number": "90",
            "x-column": "12",
            "x-component": "div",
            "x-id": "ReportHazard_90_12",
            "x-dynamic": "true",
            "x-source-type": "computed",
            "x-source-editable": "false",
            children: SEVERITIES.map(s => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
              type: "button",
              onClick: () => setForm({
                ...form,
                severity: s
              }),
              "data-testid": `report-severity-${s.toLowerCase()}`,
              className: `flex-1 text-xs px-2 py-2 rounded-md border font-mono2 transition-colors ${form.severity === s ? "border-amber-500/60 text-amber-400 bg-amber-500/10" : "border-zinc-700 cc-text-2 hover:text-white"}`,
              "x-file-name": "ReportHazard",
              "x-line-number": "92",
              "x-column": "16",
              "x-component": "button",
              "x-id": "ReportHazard_92_16",
              "x-dynamic": "true",
              "x-source-type": "static-imported",
              "x-source-var": "SEVERITIES",
              "x-source-file-abs": "/app/frontend/src/pages/ReportHazard.jsx",
              "x-source-line": "10",
              "x-source-editable": "true",
              "x-array-var": "SEVERITIES",
              "x-array-line": "10",
              "x-array-item-param": "s",
              children: s
            }, s, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 17
            }, this))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("input", {
          placeholder: "Nearest place / landmark",
          value: form.location_name,
          "data-testid": "report-location-input",
          onChange: e => setForm({
            ...form,
            location_name: e.target.value
          }),
          className: "w-full bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2.5 text-sm cc-text focus:border-amber-500 outline-none",
          "x-file-name": "ReportHazard",
          "x-line-number": "97",
          "x-column": "10",
          "x-component": "input",
          "x-id": "ReportHazard_97_10",
          "x-dynamic": "false"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "flex gap-2",
          "x-file-name": "ReportHazard",
          "x-line-number": "100",
          "x-column": "10",
          "x-component": "div",
          "x-id": "ReportHazard_100_10",
          "x-dynamic": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("input", {
            placeholder: "Latitude",
            value: form.lat,
            "data-testid": "report-lat-input",
            onChange: e => setForm({
              ...form,
              lat: e.target.value
            }),
            className: "flex-1 bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2.5 text-sm cc-text focus:border-amber-500 outline-none",
            "x-file-name": "ReportHazard",
            "x-line-number": "101",
            "x-column": "12",
            "x-component": "input",
            "x-id": "ReportHazard_101_12",
            "x-dynamic": "false"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("input", {
            placeholder: "Longitude",
            value: form.lng,
            "data-testid": "report-lng-input",
            onChange: e => setForm({
              ...form,
              lng: e.target.value
            }),
            className: "flex-1 bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2.5 text-sm cc-text focus:border-amber-500 outline-none",
            "x-file-name": "ReportHazard",
            "x-line-number": "104",
            "x-column": "12",
            "x-component": "input",
            "x-id": "ReportHazard_104_12",
            "x-dynamic": "false"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
            type: "button",
            onClick: useGPS,
            "data-testid": "report-gps-btn",
            className: "px-3 rounded-md border border-zinc-700 cc-text-2 hover:text-white transition-colors",
            "x-file-name": "ReportHazard",
            "x-line-number": "107",
            "x-column": "12",
            "x-component": "button",
            "x-id": "ReportHazard_107_12",
            "x-dynamic": "false",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
              size: 16,
              "x-file-name": "ReportHazard",
              "x-line-number": "108",
              "x-column": "110",
              "x-component": "MapPin",
              "x-id": "ReportHazard_108_110",
              "x-dynamic": "false"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 111
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("textarea", {
          placeholder: "Describe what you observed\u2026",
          rows: 3,
          value: form.description,
          "data-testid": "report-description-input",
          onChange: e => setForm({
            ...form,
            description: e.target.value
          }),
          className: "w-full bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2.5 text-sm cc-text focus:border-amber-500 outline-none resize-none",
          "x-file-name": "ReportHazard",
          "x-line-number": "110",
          "x-column": "10",
          "x-component": "textarea",
          "x-id": "ReportHazard_110_10",
          "x-dynamic": "false"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("label", {
          className: "flex items-center gap-2 text-xs cc-text-2 border border-dashed border-zinc-700 rounded-md px-3 py-3 cursor-pointer hover:border-amber-500/60 transition-colors",
          "data-testid": "report-photo-label",
          "x-file-name": "ReportHazard",
          "x-line-number": "113",
          "x-column": "10",
          "x-component": "label",
          "x-id": "ReportHazard_113_10",
          "x-dynamic": "true",
          "x-source-type": "computed",
          "x-source-editable": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
            size: 15,
            "x-file-name": "ReportHazard",
            "x-line-number": "114",
            "x-column": "12",
            "x-component": "Camera",
            "x-id": "ReportHazard_114_12",
            "x-dynamic": "false"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 13
          }, this), " ", photoName || "Attach photo (optional)", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("input", {
            type: "file",
            accept: "image/*",
            className: "hidden",
            onChange: onPhoto,
            "data-testid": "report-photo-input",
            "x-file-name": "ReportHazard",
            "x-line-number": "115",
            "x-column": "12",
            "x-component": "input",
            "x-id": "ReportHazard_115_12",
            "x-dynamic": "false"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
          disabled: busy,
          "data-testid": "report-submit-btn",
          className: "w-full bg-amber-600 hover:bg-amber-500 disabled:opacity-50 text-white font-bold py-3 rounded-md transition-colors",
          "x-file-name": "ReportHazard",
          "x-line-number": "117",
          "x-column": "10",
          "x-component": "button",
          "x-id": "ReportHazard_117_10",
          "x-dynamic": "true",
          "x-source-type": "computed",
          "x-source-editable": "false",
          children: busy ? "Submitting…" : network === "offline" ? "Store Locally (Offline Queue)" : "Submit Report"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: "lg:col-span-7 cc-surface rounded-md p-5",
        "x-file-name": "ReportHazard",
        "x-line-number": "123",
        "x-column": "8",
        "x-component": "div",
        "x-id": "ReportHazard_123_8",
        "x-dynamic": "true",
        "x-source-type": "computed",
        "x-source-editable": "false",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_4__.SectionTitle, {
          "x-file-name": "ReportHazard",
          "x-line-number": "124",
          "x-column": "10",
          "x-component": "SectionTitle",
          "x-id": "ReportHazard_124_10",
          "x-dynamic": "false",
          children: "Recent Field Reports"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, this), !user && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "text-sm cc-text-2 mb-3",
          "x-file-name": "ReportHazard",
          "x-line-number": "125",
          "x-column": "20",
          "x-component": "div",
          "x-id": "ReportHazard_125_20",
          "x-dynamic": "false",
          children: "Sign in to view and submit reports."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 21
        }, this), reports.length === 0 && user && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "text-sm cc-text-2",
          "x-file-name": "ReportHazard",
          "x-line-number": "126",
          "x-column": "43",
          "x-component": "div",
          "x-id": "ReportHazard_126_43",
          "x-dynamic": "false",
          children: "No reports yet \u2014 be the first to report a hazard."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 44
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "space-y-2 max-h-[520px] overflow-y-auto",
          "data-testid": "reports-list",
          "x-file-name": "ReportHazard",
          "x-line-number": "127",
          "x-column": "10",
          "x-component": "div",
          "x-id": "ReportHazard_127_10",
          "x-dynamic": "true",
          "x-source-type": "computed",
          "x-source-editable": "false",
          children: reports.map(r => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "cc-elevated rounded-md p-4",
            "x-file-name": "ReportHazard",
            "x-line-number": "129",
            "x-column": "14",
            "x-component": "div",
            "x-id": "ReportHazard_129_14",
            "x-dynamic": "true",
            "x-source-type": "computed",
            "x-source-editable": "false",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "flex items-center justify-between gap-2 flex-wrap",
              "x-file-name": "ReportHazard",
              "x-line-number": "130",
              "x-column": "16",
              "x-component": "div",
              "x-id": "ReportHazard_130_16",
              "x-dynamic": "false",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                className: "text-sm cc-text font-semibold",
                "x-file-name": "ReportHazard",
                "x-line-number": "131",
                "x-column": "18",
                "x-component": "span",
                "x-id": "ReportHazard_131_18",
                "x-dynamic": "true",
                "x-source-type": "static-imported",
                "x-source-var": "reports",
                "x-source-path": "type",
                "x-source-editable": "false",
                "x-array-var": "reports",
                "x-array-item-param": "r",
                children: r.type
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                className: "flex items-center gap-2",
                "x-file-name": "ReportHazard",
                "x-line-number": "132",
                "x-column": "18",
                "x-component": "div",
                "x-id": "ReportHazard_132_18",
                "x-dynamic": "false",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_4__.RiskBadge, {
                  level: r.severity === "MEDIUM" ? "MODERATE" : r.severity,
                  "x-file-name": "ReportHazard",
                  "x-line-number": "133",
                  "x-column": "20",
                  "x-component": "RiskBadge",
                  "x-id": "ReportHazard_133_20",
                  "x-dynamic": "true",
                  "x-source-type": "external",
                  "x-source-var": "reports",
                  "x-source-editable": "false",
                  "x-array-var": "reports",
                  "x-array-item-param": "r"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                  className: `text-[10px] font-mono2 px-1.5 py-0.5 rounded-sm border ${r.status === "VERIFIED" ? "text-emerald-400 border-emerald-500/40" : "text-amber-400 border-amber-500/40"}`,
                  "x-file-name": "ReportHazard",
                  "x-line-number": "134",
                  "x-column": "20",
                  "x-component": "span",
                  "x-id": "ReportHazard_134_20",
                  "x-dynamic": "true",
                  "x-source-type": "static-imported",
                  "x-source-var": "reports",
                  "x-source-path": "status",
                  "x-source-editable": "false",
                  "x-array-var": "reports",
                  "x-array-item-param": "r",
                  children: r.status
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 17
            }, this), r.description && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "text-xs cc-text-2 mt-1.5",
              "x-file-name": "ReportHazard",
              "x-line-number": "137",
              "x-column": "34",
              "x-component": "div",
              "x-id": "ReportHazard_137_34",
              "x-dynamic": "true",
              "x-source-type": "static-imported",
              "x-source-var": "reports",
              "x-source-path": "description",
              "x-source-editable": "false",
              "x-array-var": "reports",
              "x-array-item-param": "r",
              children: r.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 35
            }, this), r.photo && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("img", {
              src: r.photo,
              alt: "hazard",
              className: "mt-2 rounded-md max-h-32 object-cover",
              "x-file-name": "ReportHazard",
              "x-line-number": "138",
              "x-column": "28",
              "x-component": "img",
              "x-id": "ReportHazard_138_28",
              "x-dynamic": "false"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "text-[11px] cc-text-2 font-mono2 mt-2",
              "x-file-name": "ReportHazard",
              "x-line-number": "139",
              "x-column": "16",
              "x-component": "div",
              "x-id": "ReportHazard_139_16",
              "x-dynamic": "true",
              "x-source-type": "computed",
              "x-source-editable": "false",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                "data-ve-dynamic": "true",
                "x-excluded": "true",
                style: {
                  display: "contents"
                },
                "x-file-name": "ReportHazard",
                "x-line-number": "139",
                "x-column": "16",
                "x-component": "div",
                "x-id": "ReportHazard_139_16_expr1",
                "x-dynamic": "true",
                "x-source-type": "computed",
                "x-source-editable": "false",
                children: r.location_name && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                  "x-file-name": "ReportHazard",
                  "x-line-number": "140",
                  "x-column": "38",
                  "x-component": "span",
                  "x-id": "ReportHazard_140_38",
                  "x-dynamic": "true",
                  "x-source-type": "static-imported",
                  "x-source-var": "reports",
                  "x-source-path": "location_name",
                  "x-source-editable": "false",
                  "x-array-var": "reports",
                  "x-array-item-param": "r",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                    "data-ve-dynamic": "true",
                    "x-excluded": "true",
                    style: {
                      display: "contents"
                    },
                    "x-file-name": "ReportHazard",
                    "x-line-number": "140",
                    "x-column": "38",
                    "x-component": "span",
                    "x-id": "ReportHazard_140_38_expr0",
                    "x-dynamic": "true",
                    "x-source-type": "static-imported",
                    "x-source-var": "reports",
                    "x-source-path": "location_name",
                    "x-source-editable": "false",
                    "x-array-var": "reports",
                    "x-array-item-param": "r",
                    children: r.location_name
                  }, void 0, false), " \xB7 "]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 140,
                  columnNumber: 39
                }, this)
              }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                "data-ve-dynamic": "true",
                "x-excluded": "true",
                style: {
                  display: "contents"
                },
                "x-file-name": "ReportHazard",
                "x-line-number": "139",
                "x-column": "16",
                "x-component": "div",
                "x-id": "ReportHazard_139_16_expr3",
                "x-dynamic": "true",
                "x-source-type": "computed",
                "x-source-editable": "false",
                children: r.lat ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                  "x-file-name": "ReportHazard",
                  "x-line-number": "141",
                  "x-column": "27",
                  "x-component": "span",
                  "x-id": "ReportHazard_141_27",
                  "x-dynamic": "true",
                  "x-source-type": "static-imported",
                  "x-source-var": "reports",
                  "x-source-path": "lat",
                  "x-source-editable": "false",
                  "x-array-var": "reports",
                  "x-array-item-param": "r",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                    "data-ve-dynamic": "true",
                    "x-excluded": "true",
                    style: {
                      display: "contents"
                    },
                    "x-file-name": "ReportHazard",
                    "x-line-number": "141",
                    "x-column": "27",
                    "x-component": "span",
                    "x-id": "ReportHazard_141_27_expr0",
                    "x-dynamic": "true",
                    "x-source-type": "static-imported",
                    "x-source-var": "reports",
                    "x-source-path": "lat",
                    "x-source-editable": "false",
                    "x-array-var": "reports",
                    "x-array-item-param": "r",
                    children: r.lat
                  }, void 0, false), ", ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                    "data-ve-dynamic": "true",
                    "x-excluded": "true",
                    style: {
                      display: "contents"
                    },
                    "x-file-name": "ReportHazard",
                    "x-line-number": "141",
                    "x-column": "27",
                    "x-component": "span",
                    "x-id": "ReportHazard_141_27_expr2",
                    "x-dynamic": "true",
                    "x-source-type": "static-imported",
                    "x-source-var": "reports",
                    "x-source-path": "lng",
                    "x-source-editable": "false",
                    "x-array-var": "reports",
                    "x-array-item-param": "r",
                    children: r.lng
                  }, void 0, false), " \xB7 "]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 28
                }, this) : null
              }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                "data-ve-dynamic": "true",
                "x-excluded": "true",
                style: {
                  display: "contents"
                },
                "x-file-name": "ReportHazard",
                "x-line-number": "139",
                "x-column": "16",
                "x-component": "div",
                "x-id": "ReportHazard_139_16_expr5",
                "x-dynamic": "true",
                "x-source-type": "static-imported",
                "x-source-var": "reports",
                "x-source-path": "reported_by",
                "x-source-editable": "false",
                "x-array-var": "reports",
                "x-array-item-param": "r",
                children: r.reported_by
              }, void 0, false), " \xB7 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                "data-ve-dynamic": "true",
                "x-excluded": "true",
                style: {
                  display: "contents"
                },
                "x-file-name": "ReportHazard",
                "x-line-number": "139",
                "x-column": "16",
                "x-component": "div",
                "x-id": "ReportHazard_139_16_expr7",
                "x-dynamic": "true",
                "x-source-type": "computed",
                "x-source-editable": "false",
                children: new Date(r.timestamp).toLocaleString()
              }, void 0, false)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 17
            }, this)]
          }, r.id, true, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 15
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 5
  }, this);
}
_s(ReportHazard, "OXnoBphaRhpPNrD/qaqsb8Y1u9o=", false, function () {
  return [_context_AppContext__WEBPACK_IMPORTED_MODULE_3__.useApp, react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate];
});
_c = ReportHazard;
var _c;
__webpack_require__.$Refresh$.register(_c, "ReportHazard");

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

