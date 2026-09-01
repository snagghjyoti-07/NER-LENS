/***/ "./src/pages/Login.jsx"
/*!*****************************!*\
  !*** ./src/pages/Login.jsx ***!
  \*****************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Login)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-4N6VE7H7.mjs");
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/AppContext */ "./src/context/AppContext.jsx");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/api */ "./src/lib/api.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/mountain.js");
/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sonner */ "./node_modules/sonner/dist/index.mjs");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/app/frontend/src/pages/Login.jsx",
  _s = __webpack_require__.$Refresh$.signature();







const DEMO_ACCOUNTS = [{
  label: "Admin",
  email: "satyamsnagghjyoti@gmail.com",
  password: "Admin@123"
}, {
  label: "Disaster Officer",
  email: "officer@ndma.gov.in",
  password: "Officer@123"
}, {
  label: "Field Officer",
  email: "field@ner.gov.in",
  password: "Field@123"
}, {
  label: "Community User",
  email: "community@ner.gov.in",
  password: "Community@123"
}];
function Login() {
  _s();
  const {
    login,
    register
  } = (0,_context_AppContext__WEBPACK_IMPORTED_MODULE_2__.useApp)();
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("login");
  const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    name: "",
    email: "",
    password: ""
  });
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [busy, setBusy] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const submit = async e => {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      if (mode === "login") await login(form.email, form.password);else await register(form.name, form.email, form.password);
      sonner__WEBPACK_IMPORTED_MODULE_5__.toast.success(mode === "login" ? "Logged in" : "Account created");
      navigate("/dashboard");
    } catch (err) {
      setError((0,_lib_api__WEBPACK_IMPORTED_MODULE_3__.formatApiError)(err));
    } finally {
      setBusy(false);
    }
  };
  const quick = async acc => {
    setBusy(true);
    setError("");
    try {
      await login(acc.email, acc.password);
      sonner__WEBPACK_IMPORTED_MODULE_5__.toast.success(`Logged in as ${acc.label}`);
      navigate("/dashboard");
    } catch (err) {
      setError((0,_lib_api__WEBPACK_IMPORTED_MODULE_3__.formatApiError)(err));
    } finally {
      setBusy(false);
    }
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    className: "min-h-screen cc-bg flex items-center justify-center p-6",
    "x-file-name": "Login",
    "x-line-number": "44",
    "x-column": "4",
    "x-component": "div",
    "x-id": "Login_44_4",
    "x-dynamic": "false",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "w-full max-w-md",
      "x-file-name": "Login",
      "x-line-number": "45",
      "x-column": "6",
      "x-component": "div",
      "x-id": "Login_45_6",
      "x-dynamic": "false",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
        to: "/",
        className: "flex items-center gap-2.5 mb-8 justify-center",
        "data-testid": "login-brand",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "w-10 h-10 rounded-md bg-emerald-600 flex items-center justify-center",
          "x-file-name": "Login",
          "x-line-number": "47",
          "x-column": "10",
          "x-component": "div",
          "x-id": "Login_47_10",
          "x-dynamic": "false",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
            size: 22,
            className: "text-white",
            "x-file-name": "Login",
            "x-line-number": "47",
            "x-column": "96",
            "x-component": "Mountain",
            "x-id": "Login_47_96",
            "x-dynamic": "false"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 97
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "font-display font-bold cc-text text-sm leading-tight",
          "x-file-name": "Login",
          "x-line-number": "48",
          "x-column": "10",
          "x-component": "div",
          "x-id": "Login_48_10",
          "x-dynamic": "false",
          children: ["NER LANDSLIDE", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {
            "x-file-name": "Login",
            "x-line-number": "48",
            "x-column": "93",
            "x-component": "br",
            "x-id": "Login_48_93",
            "x-dynamic": "false"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 94
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
            className: "text-emerald-400",
            "x-file-name": "Login",
            "x-line-number": "48",
            "x-column": "99",
            "x-component": "span",
            "x-id": "Login_48_99",
            "x-dynamic": "false",
            children: "EARLY WARNING"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 100
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "cc-surface rounded-md p-7",
        "x-file-name": "Login",
        "x-line-number": "50",
        "x-column": "8",
        "x-component": "div",
        "x-id": "Login_50_8",
        "x-dynamic": "false",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
          className: "font-display font-bold text-xl cc-text",
          "data-testid": "login-title",
          "x-file-name": "Login",
          "x-line-number": "51",
          "x-column": "10",
          "x-component": "h1",
          "x-id": "Login_51_10",
          "x-dynamic": "true",
          "x-source-type": "computed",
          "x-source-editable": "false",
          children: mode === "login" ? "Authority Sign In" : "Create Community Account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          className: "text-xs cc-text-2 mt-1",
          "x-file-name": "Login",
          "x-line-number": "52",
          "x-column": "10",
          "x-component": "p",
          "x-id": "Login_52_10",
          "x-dynamic": "false",
          children: "Role-based access \xB7 Admin / Officer / Field / Community"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("form", {
          onSubmit: submit,
          className: "mt-6 space-y-4",
          "x-file-name": "Login",
          "x-line-number": "53",
          "x-column": "10",
          "x-component": "form",
          "x-id": "Login_53_10",
          "x-dynamic": "true",
          "x-source-type": "computed",
          "x-source-editable": "false",
          children: [mode === "register" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
            required: true,
            placeholder: "Full name",
            value: form.name,
            "data-testid": "register-name-input",
            onChange: e => setForm({
              ...form,
              name: e.target.value
            }),
            className: "w-full bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2.5 text-sm cc-text focus:border-emerald-500 outline-none",
            "x-file-name": "Login",
            "x-line-number": "55",
            "x-column": "14",
            "x-component": "input",
            "x-id": "Login_55_14",
            "x-dynamic": "false"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
            required: true,
            type: "email",
            placeholder: "Email",
            value: form.email,
            "data-testid": "login-email-input",
            onChange: e => setForm({
              ...form,
              email: e.target.value
            }),
            className: "w-full bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2.5 text-sm cc-text focus:border-emerald-500 outline-none",
            "x-file-name": "Login",
            "x-line-number": "59",
            "x-column": "12",
            "x-component": "input",
            "x-id": "Login_59_12",
            "x-dynamic": "false"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
            required: true,
            type: "password",
            placeholder: "Password",
            value: form.password,
            "data-testid": "login-password-input",
            onChange: e => setForm({
              ...form,
              password: e.target.value
            }),
            className: "w-full bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2.5 text-sm cc-text focus:border-emerald-500 outline-none",
            "x-file-name": "Login",
            "x-line-number": "62",
            "x-column": "12",
            "x-component": "input",
            "x-id": "Login_62_12",
            "x-dynamic": "false"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, this), error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "text-red-400 text-xs bg-red-500/10 border border-red-500/30 rounded-md p-2.5",
            "data-testid": "login-error",
            "x-file-name": "Login",
            "x-line-number": "65",
            "x-column": "22",
            "x-component": "div",
            "x-id": "Login_65_22",
            "x-dynamic": "true",
            "x-source-type": "state",
            "x-source-var": "error",
            "x-source-editable": "false",
            children: error
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 23
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
            disabled: busy,
            "data-testid": "login-submit-btn",
            className: "w-full bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-bold py-2.5 rounded-md transition-colors",
            "x-file-name": "Login",
            "x-line-number": "66",
            "x-column": "12",
            "x-component": "button",
            "x-id": "Login_66_12",
            "x-dynamic": "true",
            "x-source-type": "computed",
            "x-source-editable": "false",
            children: busy ? "Please wait…" : mode === "login" ? "Sign In" : "Create Account"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
          onClick: () => setMode(mode === "login" ? "register" : "login"),
          "data-testid": "toggle-auth-mode-btn",
          className: "mt-4 text-xs text-emerald-400 hover:underline",
          "x-file-name": "Login",
          "x-line-number": "71",
          "x-column": "10",
          "x-component": "button",
          "x-id": "Login_71_10",
          "x-dynamic": "true",
          "x-source-type": "computed",
          "x-source-editable": "false",
          children: mode === "login" ? "New community user? Create account" : "Already have an account? Sign in"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "mt-6 pt-5 border-t border-zinc-800",
          "x-file-name": "Login",
          "x-line-number": "75",
          "x-column": "10",
          "x-component": "div",
          "x-id": "Login_75_10",
          "x-dynamic": "false",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "overline-tag mb-3",
            "x-file-name": "Login",
            "x-line-number": "76",
            "x-column": "12",
            "x-component": "div",
            "x-id": "Login_76_12",
            "x-dynamic": "false",
            children: "One-click demo accounts"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "grid grid-cols-2 gap-2",
            "x-file-name": "Login",
            "x-line-number": "77",
            "x-column": "12",
            "x-component": "div",
            "x-id": "Login_77_12",
            "x-dynamic": "true",
            "x-source-type": "computed",
            "x-source-editable": "false",
            children: DEMO_ACCOUNTS.map(a => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
              onClick: () => quick(a),
              disabled: busy,
              "data-testid": `demo-login-${a.label.toLowerCase().replace(/ /g, "-")}`,
              className: "text-xs px-2 py-2 rounded-md border border-zinc-700 cc-text-2 hover:text-white hover:border-emerald-600 transition-colors disabled:opacity-50",
              "x-file-name": "Login",
              "x-line-number": "79",
              "x-column": "16",
              "x-component": "button",
              "x-id": "Login_79_16",
              "x-dynamic": "true",
              "x-source-type": "static-imported",
              "x-source-var": "DEMO_ACCOUNTS",
              "x-source-file-abs": "/app/frontend/src/pages/Login.jsx",
              "x-source-line": "8",
              "x-source-path": "label",
              "x-source-editable": "true",
              "x-array-var": "DEMO_ACCOUNTS",
              "x-array-line": "8",
              "x-array-item-param": "a",
              children: a.label
            }, a.email, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 17
            }, this))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
  }, this);
}
_s(Login, "j9IfJ2RMUMhpZBH7rHC+lGLEiYM=", false, function () {
  return [_context_AppContext__WEBPACK_IMPORTED_MODULE_2__.useApp, react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate];
});
_c = Login;
var _c;
__webpack_require__.$Refresh$.register(_c, "Login");

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

