/***/ "./src/pages/Admin.jsx"
/*!*****************************!*\
  !*** ./src/pages/Admin.jsx ***!
  \*****************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Admin)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4N6VE7H7.mjs");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/api */ "./src/lib/api.js");
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/AppContext */ "./src/context/AppContext.jsx");
/* harmony import */ var _components_ui_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ui-helpers */ "./src/components/ui-helpers.jsx");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/shield-check.js");
/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sonner */ "./node_modules/sonner/dist/index.mjs");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/app/frontend/src/pages/Admin.jsx",
  _s = __webpack_require__.$Refresh$.signature();








const ROLES = ["admin", "disaster_officer", "field_officer", "community"];
const TABS = ["Users", "Add Location", "Thresholds", "System Logs"];
function Admin() {
  _s();
  const {
    user,
    authChecked
  } = (0,_context_AppContext__WEBPACK_IMPORTED_MODULE_3__.useApp)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  const [tab, setTab] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Users");
  const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [logs, setLogs] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [thresholds, setThresholds] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [locForm, setLocForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    name: "",
    district: "",
    state: "",
    lat: "",
    lng: "",
    slope: 30,
    elevation: 500
  });
  const isAdmin = user && user.role === "admin";
  const canThreshold = user && ["admin", "disaster_officer"].includes(user.role);
  const load = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    if (!isAdmin) return;
    try {
      const [u, l, th] = await Promise.all([(0,_lib_api__WEBPACK_IMPORTED_MODULE_2__.apiGet)("/admin/users"), (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__.apiGet)("/admin/logs"), (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__.apiGet)("/admin/thresholds")]);
      setUsers(u.data);
      setLogs(l.data);
      setThresholds(th.data);
    } catch (e) {
      sonner__WEBPACK_IMPORTED_MODULE_6__.toast.error((0,_lib_api__WEBPACK_IMPORTED_MODULE_2__.formatApiError)(e));
    }
  }, [isAdmin]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    load();
  }, [load]);
  if (!authChecked) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_4__.Loading, {
    "x-file-name": "Admin",
    "x-line-number": "34",
    "x-column": "27",
    "x-component": "Loading",
    "x-id": "Admin_34_27",
    "x-dynamic": "true"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 28
  }, this);
  if (!user) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    className: "cc-surface rounded-md p-10 text-center",
    "data-testid": "admin-login-required",
    "x-file-name": "Admin",
    "x-line-number": "36",
    "x-column": "4",
    "x-component": "div",
    "x-id": "Admin_36_4",
    "x-dynamic": "false",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
      className: "cc-text-2 text-sm mb-4",
      "x-file-name": "Admin",
      "x-line-number": "37",
      "x-column": "6",
      "x-component": "p",
      "x-id": "Admin_37_6",
      "x-dynamic": "false",
      children: "Sign in with an authority account to access the admin panel."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
      onClick: () => navigate("/login"),
      "data-testid": "admin-goto-login",
      className: "bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold px-5 py-2.5 rounded-md transition-colors",
      "x-file-name": "Admin",
      "x-line-number": "38",
      "x-column": "6",
      "x-component": "button",
      "x-id": "Admin_38_6",
      "x-dynamic": "false",
      children: "Sign In"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, this);
  if (!isAdmin) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    className: "cc-surface rounded-md p-10 text-center",
    "data-testid": "admin-forbidden",
    "x-file-name": "Admin",
    "x-line-number": "42",
    "x-column": "4",
    "x-component": "div",
    "x-id": "Admin_42_4",
    "x-dynamic": "false",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
      size: 32,
      className: "mx-auto text-zinc-600",
      "x-file-name": "Admin",
      "x-line-number": "43",
      "x-column": "6",
      "x-component": "ShieldCheck",
      "x-id": "Admin_43_6",
      "x-dynamic": "false"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
      className: "cc-text-2 text-sm mt-3",
      "x-file-name": "Admin",
      "x-line-number": "44",
      "x-column": "6",
      "x-component": "p",
      "x-id": "Admin_44_6",
      "x-dynamic": "false",
      children: ["Admin role required. Your role: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
        className: "font-mono2 cc-text",
        "x-file-name": "Admin",
        "x-line-number": "44",
        "x-column": "76",
        "x-component": "span",
        "x-id": "Admin_44_76",
        "x-dynamic": "true",
        "x-source-type": "unknown",
        "x-source-var": "user",
        "x-source-path": "role",
        "x-source-editable": "false",
        children: user.role
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 77
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
      className: "text-xs cc-text-2 mt-1",
      "x-file-name": "Admin",
      "x-line-number": "45",
      "x-column": "6",
      "x-component": "p",
      "x-id": "Admin_45_6",
      "x-dynamic": "false",
      children: "Field officers: use Report Hazard. Officers: manage alerts in Early Warnings."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, this);
  const setRole = async (u, role) => {
    try {
      await _lib_api__WEBPACK_IMPORTED_MODULE_2__.api.put(`/admin/users/${u.id}/role`, {
        role
      });
      sonner__WEBPACK_IMPORTED_MODULE_6__.toast.success(`${u.email} → ${role}`);
      load();
    } catch (e) {
      sonner__WEBPACK_IMPORTED_MODULE_6__.toast.error((0,_lib_api__WEBPACK_IMPORTED_MODULE_2__.formatApiError)(e));
    }
  };
  const saveThresholds = async () => {
    try {
      await _lib_api__WEBPACK_IMPORTED_MODULE_2__.api.put("/admin/thresholds", thresholds);
      sonner__WEBPACK_IMPORTED_MODULE_6__.toast.success("Thresholds updated");
    } catch (e) {
      sonner__WEBPACK_IMPORTED_MODULE_6__.toast.error((0,_lib_api__WEBPACK_IMPORTED_MODULE_2__.formatApiError)(e));
    }
  };
  const addLocation = async e => {
    e.preventDefault();
    try {
      await (0,_lib_api__WEBPACK_IMPORTED_MODULE_2__.apiPost)("/admin/locations", {
        ...locForm,
        lat: parseFloat(locForm.lat),
        lng: parseFloat(locForm.lng),
        slope: parseFloat(locForm.slope),
        elevation: parseFloat(locForm.elevation)
      });
      sonner__WEBPACK_IMPORTED_MODULE_6__.toast.success("Location added");
      setLocForm({
        name: "",
        district: "",
        state: "",
        lat: "",
        lng: "",
        slope: 30,
        elevation: 500
      });
    } catch (err) {
      sonner__WEBPACK_IMPORTED_MODULE_6__.toast.error((0,_lib_api__WEBPACK_IMPORTED_MODULE_2__.formatApiError)(err));
    }
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    className: "space-y-5",
    "data-testid": "admin-page",
    "x-file-name": "Admin",
    "x-line-number": "69",
    "x-column": "4",
    "x-component": "div",
    "x-id": "Admin_69_4",
    "x-dynamic": "true",
    "x-source-type": "computed",
    "x-source-editable": "false",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: "flex items-center gap-3",
      "x-file-name": "Admin",
      "x-line-number": "70",
      "x-column": "6",
      "x-component": "div",
      "x-id": "Admin_70_6",
      "x-dynamic": "false",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
        size: 22,
        className: "text-emerald-400",
        "x-file-name": "Admin",
        "x-line-number": "71",
        "x-column": "8",
        "x-component": "ShieldCheck",
        "x-id": "Admin_71_8",
        "x-dynamic": "false"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h1", {
        className: "font-display font-bold text-xl cc-text tracking-tight",
        "x-file-name": "Admin",
        "x-line-number": "72",
        "x-column": "8",
        "x-component": "h1",
        "x-id": "Admin_72_8",
        "x-dynamic": "false",
        children: "Admin / Authority Panel"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: "flex gap-2 flex-wrap",
      "x-file-name": "Admin",
      "x-line-number": "74",
      "x-column": "6",
      "x-component": "div",
      "x-id": "Admin_74_6",
      "x-dynamic": "true",
      "x-source-type": "computed",
      "x-source-editable": "false",
      children: TABS.map(t => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
        onClick: () => setTab(t),
        "data-testid": `admin-tab-${t.toLowerCase().replace(/ /g, "-")}`,
        className: `text-xs px-3 py-1.5 rounded-sm transition-colors ${tab === t ? "bg-emerald-600 text-white" : "cc-text-2 border border-zinc-700 hover:text-white"}`,
        "x-file-name": "Admin",
        "x-line-number": "76",
        "x-column": "10",
        "x-component": "button",
        "x-id": "Admin_76_10",
        "x-dynamic": "true",
        "x-source-type": "static-imported",
        "x-source-var": "TABS",
        "x-source-file-abs": "/app/frontend/src/pages/Admin.jsx",
        "x-source-line": "10",
        "x-source-editable": "true",
        "x-array-var": "TABS",
        "x-array-line": "10",
        "x-array-item-param": "t",
        children: t
      }, t, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, this), tab === "Users" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: "cc-surface rounded-md p-5",
      "data-testid": "admin-users-panel",
      "x-file-name": "Admin",
      "x-line-number": "82",
      "x-column": "8",
      "x-component": "div",
      "x-id": "Admin_82_8",
      "x-dynamic": "false",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_4__.SectionTitle, {
        "x-file-name": "Admin",
        "x-line-number": "83",
        "x-column": "10",
        "x-component": "SectionTitle",
        "x-id": "Admin_83_10",
        "x-dynamic": "false",
        children: "User Management"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: "overflow-x-auto",
        "x-file-name": "Admin",
        "x-line-number": "84",
        "x-column": "10",
        "x-component": "div",
        "x-id": "Admin_84_10",
        "x-dynamic": "false",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("table", {
          className: "w-full text-sm",
          "x-file-name": "Admin",
          "x-line-number": "85",
          "x-column": "12",
          "x-component": "table",
          "x-id": "Admin_85_12",
          "x-dynamic": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("thead", {
            "x-file-name": "Admin",
            "x-line-number": "86",
            "x-column": "14",
            "x-component": "thead",
            "x-id": "Admin_86_14",
            "x-dynamic": "false",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tr", {
              className: "text-left overline-tag border-b border-zinc-800",
              "x-file-name": "Admin",
              "x-line-number": "86",
              "x-column": "21",
              "x-component": "tr",
              "x-id": "Admin_86_21",
              "x-dynamic": "false",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                className: "py-2 pr-4",
                "x-file-name": "Admin",
                "x-line-number": "87",
                "x-column": "16",
                "x-component": "th",
                "x-id": "Admin_87_16",
                "x-dynamic": "false",
                children: "Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                className: "py-2 pr-4",
                "x-file-name": "Admin",
                "x-line-number": "87",
                "x-column": "51",
                "x-component": "th",
                "x-id": "Admin_87_51",
                "x-dynamic": "false",
                children: "Email"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 52
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                className: "py-2 pr-4",
                "x-file-name": "Admin",
                "x-line-number": "87",
                "x-column": "87",
                "x-component": "th",
                "x-id": "Admin_87_87",
                "x-dynamic": "false",
                children: "Role"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 88
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                className: "py-2",
                "x-file-name": "Admin",
                "x-line-number": "87",
                "x-column": "122",
                "x-component": "th",
                "x-id": "Admin_87_122",
                "x-dynamic": "false",
                children: "Change Role"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 123
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 22
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tbody", {
            "x-file-name": "Admin",
            "x-line-number": "89",
            "x-column": "14",
            "x-component": "tbody",
            "x-id": "Admin_89_14",
            "x-dynamic": "true",
            "x-source-type": "computed",
            "x-source-editable": "false",
            children: users.map(u => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tr", {
              className: "border-b border-zinc-800/60",
              "data-testid": `admin-user-${u.email}`,
              "x-file-name": "Admin",
              "x-line-number": "91",
              "x-column": "18",
              "x-component": "tr",
              "x-id": "Admin_91_18",
              "x-dynamic": "false",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                className: "py-2.5 pr-4 cc-text",
                "x-file-name": "Admin",
                "x-line-number": "92",
                "x-column": "20",
                "x-component": "td",
                "x-id": "Admin_92_20",
                "x-dynamic": "true",
                "x-source-type": "static-imported",
                "x-source-var": "users",
                "x-source-path": "name",
                "x-source-editable": "false",
                "x-array-var": "users",
                "x-array-item-param": "u",
                children: u.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 21
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                className: "py-2.5 pr-4 cc-text-2 font-mono2 text-xs",
                "x-file-name": "Admin",
                "x-line-number": "93",
                "x-column": "20",
                "x-component": "td",
                "x-id": "Admin_93_20",
                "x-dynamic": "true",
                "x-source-type": "static-imported",
                "x-source-var": "users",
                "x-source-path": "email",
                "x-source-editable": "false",
                "x-array-var": "users",
                "x-array-item-param": "u",
                children: u.email
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 21
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                className: "py-2.5 pr-4",
                "x-file-name": "Admin",
                "x-line-number": "94",
                "x-column": "20",
                "x-component": "td",
                "x-id": "Admin_94_20",
                "x-dynamic": "false",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
                  className: "text-xs font-mono2 text-emerald-400",
                  "x-file-name": "Admin",
                  "x-line-number": "94",
                  "x-column": "48",
                  "x-component": "span",
                  "x-id": "Admin_94_48",
                  "x-dynamic": "true",
                  "x-source-type": "static-imported",
                  "x-source-var": "users",
                  "x-source-path": "role",
                  "x-source-editable": "false",
                  "x-array-var": "users",
                  "x-array-item-param": "u",
                  children: u.role
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 49
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 21
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                className: "py-2.5",
                "x-file-name": "Admin",
                "x-line-number": "95",
                "x-column": "20",
                "x-component": "td",
                "x-id": "Admin_95_20",
                "x-dynamic": "false",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("select", {
                  value: u.role,
                  onChange: e => setRole(u, e.target.value),
                  "data-testid": `role-select-${u.email}`,
                  className: "bg-zinc-900 border border-zinc-700 text-xs cc-text rounded-sm px-2 py-1",
                  "x-file-name": "Admin",
                  "x-line-number": "96",
                  "x-column": "22",
                  "x-component": "select",
                  "x-id": "Admin_96_22",
                  "x-dynamic": "true",
                  "x-source-type": "computed",
                  "x-source-editable": "false",
                  children: ROLES.map(r => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("option", {
                    value: r,
                    "x-file-name": "Admin",
                    "x-line-number": "98",
                    "x-column": "42",
                    "x-component": "option",
                    "x-id": "Admin_98_42",
                    "x-dynamic": "true",
                    "x-source-type": "static-imported",
                    "x-source-var": "ROLES",
                    "x-source-file-abs": "/app/frontend/src/pages/Admin.jsx",
                    "x-source-line": "9",
                    "x-source-editable": "true",
                    "x-array-var": "ROLES",
                    "x-array-line": "9",
                    "x-array-item-param": "r",
                    children: r
                  }, r, false, {
                    fileName: _jsxFileName,
                    lineNumber: 98,
                    columnNumber: 43
                  }, this))
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 23
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 21
              }, this)]
            }, u.id, true, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 19
            }, this))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }, this), tab === "Add Location" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("form", {
      onSubmit: addLocation,
      className: "cc-surface rounded-md p-5 max-w-xl space-y-3",
      "data-testid": "admin-add-location-form",
      "x-file-name": "Admin",
      "x-line-number": "110",
      "x-column": "8",
      "x-component": "form",
      "x-id": "Admin_110_8",
      "x-dynamic": "true",
      "x-source-type": "computed",
      "x-source-editable": "false",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_4__.SectionTitle, {
        "x-file-name": "Admin",
        "x-line-number": "111",
        "x-column": "10",
        "x-component": "SectionTitle",
        "x-id": "Admin_111_10",
        "x-dynamic": "false",
        children: "Add Monitored Location"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 11
      }, this), [["name", "Location name"], ["district", "District"], ["state", "State"]].map(([k, ph]) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
        required: true,
        placeholder: ph,
        value: locForm[k],
        "data-testid": `addloc-${k}`,
        onChange: e => setLocForm({
          ...locForm,
          [k]: e.target.value
        }),
        className: "w-full bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2.5 text-sm cc-text focus:border-emerald-500 outline-none",
        "x-file-name": "Admin",
        "x-line-number": "113",
        "x-column": "12",
        "x-component": "input",
        "x-id": "Admin_113_12",
        "x-dynamic": "false"
      }, k, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 13
      }, this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: "grid grid-cols-2 gap-3",
        "x-file-name": "Admin",
        "x-line-number": "117",
        "x-column": "10",
        "x-component": "div",
        "x-id": "Admin_117_10",
        "x-dynamic": "false",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
          required: true,
          type: "number",
          step: "any",
          placeholder: "Latitude",
          value: locForm.lat,
          "data-testid": "addloc-lat",
          onChange: e => setLocForm({
            ...locForm,
            lat: e.target.value
          }),
          className: "bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2.5 text-sm cc-text focus:border-emerald-500 outline-none",
          "x-file-name": "Admin",
          "x-line-number": "118",
          "x-column": "12",
          "x-component": "input",
          "x-id": "Admin_118_12",
          "x-dynamic": "false"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
          required: true,
          type: "number",
          step: "any",
          placeholder: "Longitude",
          value: locForm.lng,
          "data-testid": "addloc-lng",
          onChange: e => setLocForm({
            ...locForm,
            lng: e.target.value
          }),
          className: "bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2.5 text-sm cc-text focus:border-emerald-500 outline-none",
          "x-file-name": "Admin",
          "x-line-number": "121",
          "x-column": "12",
          "x-component": "input",
          "x-id": "Admin_121_12",
          "x-dynamic": "false"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
          type: "number",
          placeholder: "Slope (\xB0)",
          value: locForm.slope,
          "data-testid": "addloc-slope",
          onChange: e => setLocForm({
            ...locForm,
            slope: e.target.value
          }),
          className: "bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2.5 text-sm cc-text focus:border-emerald-500 outline-none",
          "x-file-name": "Admin",
          "x-line-number": "124",
          "x-column": "12",
          "x-component": "input",
          "x-id": "Admin_124_12",
          "x-dynamic": "false"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
          type: "number",
          placeholder: "Elevation (m)",
          value: locForm.elevation,
          "data-testid": "addloc-elevation",
          onChange: e => setLocForm({
            ...locForm,
            elevation: e.target.value
          }),
          className: "bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2.5 text-sm cc-text focus:border-emerald-500 outline-none",
          "x-file-name": "Admin",
          "x-line-number": "127",
          "x-column": "12",
          "x-component": "input",
          "x-id": "Admin_127_12",
          "x-dynamic": "false"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
        "data-testid": "addloc-submit",
        className: "bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold px-5 py-2.5 rounded-md transition-colors",
        "x-file-name": "Admin",
        "x-line-number": "131",
        "x-column": "10",
        "x-component": "button",
        "x-id": "Admin_131_10",
        "x-dynamic": "false",
        children: "Add Location"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }, this), tab === "Thresholds" && thresholds && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: "cc-surface rounded-md p-5 max-w-xl space-y-4",
      "data-testid": "admin-thresholds-panel",
      "x-file-name": "Admin",
      "x-line-number": "136",
      "x-column": "8",
      "x-component": "div",
      "x-id": "Admin_136_8",
      "x-dynamic": "true",
      "x-source-type": "computed",
      "x-source-editable": "false",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_4__.SectionTitle, {
        "x-file-name": "Admin",
        "x-line-number": "137",
        "x-column": "10",
        "x-component": "SectionTitle",
        "x-id": "Admin_137_10",
        "x-dynamic": "false",
        children: "Alert Thresholds"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 11
      }, this), [["low", "LOW boundary (score)"], ["moderate", "MODERATE boundary"], ["high", "HIGH boundary"], ["rainfall_alert_mm", "Rainfall alert (mm/24h)"], ["soil_alert_pct", "Soil moisture alert (%)"], ["movement_alert_mm", "Ground movement alert (mm)"]].map(([k, label]) => {
        var _thresholds$k;
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "flex items-center justify-between gap-4",
          "x-file-name": "Admin",
          "x-line-number": "140",
          "x-column": "12",
          "x-component": "div",
          "x-id": "Admin_140_12",
          "x-dynamic": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
            className: "text-sm cc-text-2",
            "x-file-name": "Admin",
            "x-line-number": "141",
            "x-column": "14",
            "x-component": "label",
            "x-id": "Admin_141_14",
            "x-dynamic": "true",
            "x-source-type": "unknown",
            "x-source-var": "label",
            "x-source-editable": "false",
            children: label
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
            type: "number",
            value: (_thresholds$k = thresholds[k]) !== null && _thresholds$k !== void 0 ? _thresholds$k : "",
            "data-testid": `threshold-${k}`,
            onChange: e => setThresholds({
              ...thresholds,
              [k]: parseFloat(e.target.value)
            }),
            className: "w-28 bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2 text-sm cc-text font-mono2 focus:border-emerald-500 outline-none",
            "x-file-name": "Admin",
            "x-line-number": "142",
            "x-column": "14",
            "x-component": "input",
            "x-id": "Admin_142_14",
            "x-dynamic": "false"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 15
          }, this)]
        }, k, true, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 13
        }, this);
      }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
        onClick: saveThresholds,
        "data-testid": "thresholds-save-btn",
        className: "bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold px-5 py-2.5 rounded-md transition-colors",
        "x-file-name": "Admin",
        "x-line-number": "147",
        "x-column": "10",
        "x-component": "button",
        "x-id": "Admin_147_10",
        "x-dynamic": "false",
        children: "Save Thresholds"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }, this), tab === "System Logs" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      className: "cc-surface rounded-md p-5",
      "data-testid": "admin-logs-panel",
      "x-file-name": "Admin",
      "x-line-number": "153",
      "x-column": "8",
      "x-component": "div",
      "x-id": "Admin_153_8",
      "x-dynamic": "true",
      "x-source-type": "computed",
      "x-source-editable": "false",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_ui_helpers__WEBPACK_IMPORTED_MODULE_4__.SectionTitle, {
        "x-file-name": "Admin",
        "x-line-number": "154",
        "x-column": "10",
        "x-component": "SectionTitle",
        "x-id": "Admin_154_10",
        "x-dynamic": "false",
        children: "Audit Logs"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 11
      }, this), logs.length === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: "text-sm cc-text-2",
        "x-file-name": "Admin",
        "x-line-number": "155",
        "x-column": "32",
        "x-component": "div",
        "x-id": "Admin_155_32",
        "x-dynamic": "false",
        children: "No audit events yet."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 33
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: "space-y-1.5 max-h-96 overflow-y-auto",
        "x-file-name": "Admin",
        "x-line-number": "156",
        "x-column": "10",
        "x-component": "div",
        "x-id": "Admin_156_10",
        "x-dynamic": "true",
        "x-source-type": "computed",
        "x-source-editable": "false",
        children: logs.map(l => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "flex gap-3 text-xs cc-elevated rounded-md px-3 py-2 font-mono2 flex-wrap",
          "x-file-name": "Admin",
          "x-line-number": "158",
          "x-column": "14",
          "x-component": "div",
          "x-id": "Admin_158_14",
          "x-dynamic": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
            className: "cc-text-2",
            "x-file-name": "Admin",
            "x-line-number": "159",
            "x-column": "16",
            "x-component": "span",
            "x-id": "Admin_159_16",
            "x-dynamic": "true",
            "x-source-type": "computed",
            "x-source-editable": "false",
            children: new Date(l.timestamp).toLocaleString()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
            className: "text-emerald-400",
            "x-file-name": "Admin",
            "x-line-number": "160",
            "x-column": "16",
            "x-component": "span",
            "x-id": "Admin_160_16",
            "x-dynamic": "true",
            "x-source-type": "static-imported",
            "x-source-var": "logs",
            "x-source-path": "action",
            "x-source-editable": "false",
            "x-array-var": "logs",
            "x-array-item-param": "l",
            children: l.action
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
            className: "cc-text-2",
            "x-file-name": "Admin",
            "x-line-number": "161",
            "x-column": "16",
            "x-component": "span",
            "x-id": "Admin_161_16",
            "x-dynamic": "true",
            "x-source-type": "static-imported",
            "x-source-var": "logs",
            "x-source-path": "actor",
            "x-source-editable": "false",
            "x-array-var": "logs",
            "x-array-item-param": "l",
            children: l.actor
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
            className: "cc-text truncate",
            "x-file-name": "Admin",
            "x-line-number": "162",
            "x-column": "16",
            "x-component": "span",
            "x-id": "Admin_162_16",
            "x-dynamic": "true",
            "x-source-type": "static-imported",
            "x-source-var": "logs",
            "x-source-path": "detail",
            "x-source-editable": "false",
            "x-array-var": "logs",
            "x-array-item-param": "l",
            children: l.detail
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 17
          }, this)]
        }, l.id, true, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 15
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 5
  }, this);
}
_s(Admin, "rnjPpK7ntGHvgviC7cW6ChaM+X0=", false, function () {
  return [_context_AppContext__WEBPACK_IMPORTED_MODULE_3__.useApp, react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate];
});
_c = Admin;
var _c;
__webpack_require__.$Refresh$.register(_c, "Admin");

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

