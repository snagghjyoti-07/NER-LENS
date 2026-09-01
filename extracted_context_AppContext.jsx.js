/***/ "./src/context/AppContext.jsx"
/*!************************************!*\
  !*** ./src/context/AppContext.jsx ***!
  \************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppProvider: () => (/* binding */ AppProvider),
/* harmony export */   useApp: () => (/* binding */ useApp)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/api */ "./src/lib/api.js");
/* harmony import */ var _lib_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/i18n */ "./src/lib/i18n.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/app/frontend/src/context/AppContext.jsx",
  _s = __webpack_require__.$Refresh$.signature(),
  _s2 = __webpack_require__.$Refresh$.signature();




const AppContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
function AppProvider({
  children
}) {
  _s();
  const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [authChecked, setAuthChecked] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [lang, setLangState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(localStorage.getItem("ews_lang") || "en");
  const [network, setNetwork] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("online");
  const [simOffline, setSimOffline] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_lib_api__WEBPACK_IMPORTED_MODULE_1__.isSimOffline)());
  const [emergency, setEmergency] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [demoMode, setDemoMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [queueCount, setQueueCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const t = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(key => (0,_lib_i18n__WEBPACK_IMPORTED_MODULE_2__.translate)(lang, key), [lang]);
  const setLang = code => {
    localStorage.setItem("ews_lang", code);
    setLangState(code);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    _lib_api__WEBPACK_IMPORTED_MODULE_1__.api.get("/auth/me").then(r => setUser(r.data)).catch(() => setUser(false)).finally(() => setAuthChecked(true));
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const update = async () => {
      if ((0,_lib_api__WEBPACK_IMPORTED_MODULE_1__.isSimOffline)()) {
        setNetwork("offline");
        return;
      }
      if (!navigator.onLine) {
        setNetwork("offline");
        return;
      }
      try {
        const ctrl = new AbortController();
        const to = setTimeout(() => ctrl.abort(), 4000);
        await fetch(`${"https://slope-guardian-2.preview.emergentagent.com"}/api/health`, {
          signal: ctrl.signal
        });
        clearTimeout(to);
        setNetwork("online");
        const res = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__.flushQueue)();
        setQueueCount(res.remaining);
      } catch (e) {
        setNetwork("limited");
      }
    };
    update();
    const id = setInterval(update, 15000);
    window.addEventListener("online", update);
    window.addEventListener("offline", update);
    return () => {
      clearInterval(id);
      window.removeEventListener("online", update);
      window.removeEventListener("offline", update);
    };
  }, [simOffline]);
  const toggleSimOffline = () => {
    const next = !simOffline;
    localStorage.setItem("ews_sim_offline", next ? "1" : "0");
    setSimOffline(next);
    setNetwork(next ? "offline" : "online");
  };
  const login = async (email, password) => {
    const data = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__.apiPost)("/auth/login", {
      email,
      password
    });
    localStorage.setItem("ews_token", data.token);
    setUser(data.user);
    return data.user;
  };
  const register = async (name, email, password) => {
    const data = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__.apiPost)("/auth/register", {
      name,
      email,
      password
    });
    localStorage.setItem("ews_token", data.token);
    setUser(data.user);
    return data.user;
  };
  const logout = async () => {
    try {
      await (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__.apiPost)("/auth/logout", {});
    } catch (e) {}
    localStorage.removeItem("ews_token");
    setUser(false);
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(AppContext.Provider, {
    value: {
      user,
      authChecked,
      login,
      logout,
      register,
      lang,
      setLang,
      t,
      network,
      simOffline,
      toggleSimOffline,
      emergency,
      setEmergency,
      demoMode,
      setDemoMode,
      queueCount,
      setQueueCount
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 5
  }, this);
}
_s(AppProvider, "AmwdWjgI8ywGA3sokRQdT0NKLac=");
_c = AppProvider;
const useApp = () => {
  _s2();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(AppContext);
};
_s2(useApp, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__webpack_require__.$Refresh$.register(_c, "AppProvider");

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

