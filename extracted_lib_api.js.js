/***/ "./src/lib/api.js"
/*!************************!*\
  !*** ./src/lib/api.js ***!
  \************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   api: () => (/* binding */ api),
/* harmony export */   apiGet: () => (/* binding */ apiGet),
/* harmony export */   apiPost: () => (/* binding */ apiPost),
/* harmony export */   flushQueue: () => (/* binding */ flushQueue),
/* harmony export */   formatApiError: () => (/* binding */ formatApiError),
/* harmony export */   getQueue: () => (/* binding */ getQueue),
/* harmony export */   isSimOffline: () => (/* binding */ isSimOffline),
/* harmony export */   queueOffline: () => (/* binding */ queueOffline)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


const API = `${"https://slope-guardian-2.preview.emergentagent.com"}/api`;
const api = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
  baseURL: API,
  withCredentials: true,
  timeout: 15000
});
api.interceptors.request.use(config => {
  const token = localStorage.getItem("ews_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
const isSimOffline = () => localStorage.getItem("ews_sim_offline") === "1";
const cacheKey = url => `ews_cache:${url}`;
async function apiGet(url, config) {
  if (isSimOffline() || !navigator.onLine) {
    const cached = localStorage.getItem(cacheKey(url));
    if (cached) return {
      data: JSON.parse(cached),
      fromCache: true
    };
    throw new Error("offline-no-cache");
  }
  try {
    const res = await api.get(url, config);
    try {
      localStorage.setItem(cacheKey(url), JSON.stringify(res.data));
    } catch (e) {}
    return {
      data: res.data,
      fromCache: false
    };
  } catch (e) {
    const cached = localStorage.getItem(cacheKey(url));
    if (cached) return {
      data: JSON.parse(cached),
      fromCache: true
    };
    throw e;
  }
}
async function apiPost(url, body, config) {
  const res = await api.post(url, body, config);
  return res.data;
}
const QUEUE_KEY = "ews_offline_queue";
function getQueue() {
  try {
    return JSON.parse(localStorage.getItem(QUEUE_KEY) || "[]");
  } catch (e) {
    return [];
  }
}
function queueOffline(item) {
  const q = getQueue();
  q.push({
    ...item,
    queued_at: new Date().toISOString(),
    status: "QUEUED"
  });
  localStorage.setItem(QUEUE_KEY, JSON.stringify(q));
  return q.length;
}
async function flushQueue() {
  if (isSimOffline() || !navigator.onLine) return {
    sent: 0,
    remaining: getQueue().length
  };
  const q = getQueue();
  const remaining = [];
  let sent = 0;
  for (const item of q) {
    try {
      if (item.kind === "hazard_report") {
        await apiPost("/reports", item.payload);
      } else if (item.kind === "alert_delivery") {
        await new Promise(r => setTimeout(r, 400));
      }
      sent++;
    } catch (e) {
      remaining.push(item);
    }
  }
  localStorage.setItem(QUEUE_KEY, JSON.stringify(remaining));
  return {
    sent,
    remaining: remaining.length
  };
}
function formatApiError(e) {
  var _e$response, _e$response$data;
  const detail = e === null || e === void 0 ? void 0 : (_e$response = e.response) === null || _e$response === void 0 ? void 0 : (_e$response$data = _e$response.data) === null || _e$response$data === void 0 ? void 0 : _e$response$data.detail;
  if (typeof detail === "string") return detail;
  if (Array.isArray(detail)) return detail.map(x => (x === null || x === void 0 ? void 0 : x.msg) || JSON.stringify(x)).join(" ");
  return (e === null || e === void 0 ? void 0 : e.message) || "Something went wrong";
}

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

