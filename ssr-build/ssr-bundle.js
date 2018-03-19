module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/wasmBoy/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "JkW7");
/******/ })
/************************************************************************/
/******/ ({

/***/ "5EQ/":
/***/ (function(module, exports, __webpack_require__) {

if (typeof indexedDB != 'undefined') {
  module.exports = __webpack_require__("a4gv");
} else {
  module.exports = {
    open: function open() {
      return Promise.reject('IDB requires a browser environment');
    },
    delete: function _delete() {
      return Promise.reject('IDB requires a browser environment');
    }
  };
}

/***/ }),

/***/ "EBst":
/***/ (function(module, exports, __webpack_require__) {

!function () {
  "use strict";
  function e() {}function t(t, n) {
    var o,
        r,
        i,
        l,
        a = E;for (l = arguments.length; l-- > 2;) {
      W.push(arguments[l]);
    }n && null != n.children && (W.length || W.push(n.children), delete n.children);while (W.length) {
      if ((r = W.pop()) && void 0 !== r.pop) for (l = r.length; l--;) {
        W.push(r[l]);
      } else "boolean" == typeof r && (r = null), (i = "function" != typeof t) && (null == r ? r = "" : "number" == typeof r ? r += "" : "string" != typeof r && (i = !1)), i && o ? a[a.length - 1] += r : a === E ? a = [r] : a.push(r), o = i;
    }var u = new e();return u.nodeName = t, u.children = a, u.attributes = null == n ? void 0 : n, u.key = null == n ? void 0 : n.key, void 0 !== S.vnode && S.vnode(u), u;
  }function n(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }function o(e, o) {
    return t(e.nodeName, n(n({}, e.attributes), o), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children);
  }function r(e) {
    !e.__d && (e.__d = !0) && 1 == A.push(e) && (S.debounceRendering || P)(i);
  }function i() {
    var e,
        t = A;A = [];while (e = t.pop()) {
      e.__d && k(e);
    }
  }function l(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && a(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
  }function a(e, t) {
    return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase();
  }function u(e) {
    var t = n({}, e.attributes);t.children = e.children;var o = e.nodeName.defaultProps;if (void 0 !== o) for (var r in o) {
      void 0 === t[r] && (t[r] = o[r]);
    }return t;
  }function _(e, t) {
    var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);return n.__n = e, n;
  }function p(e) {
    var t = e.parentNode;t && t.removeChild(e);
  }function c(e, t, n, o, r) {
    if ("className" === t && (t = "class"), "key" === t) ;else if ("ref" === t) n && n(null), o && o(e);else if ("class" !== t || r) {
      if ("style" === t) {
        if (o && "string" != typeof o && "string" != typeof n || (e.style.cssText = o || ""), o && "object" == typeof o) {
          if ("string" != typeof n) for (var i in n) {
            i in o || (e.style[i] = "");
          }for (var i in o) {
            e.style[i] = "number" == typeof o[i] && !1 === V.test(i) ? o[i] + "px" : o[i];
          }
        }
      } else if ("dangerouslySetInnerHTML" === t) o && (e.innerHTML = o.__html || "");else if ("o" == t[0] && "n" == t[1]) {
        var l = t !== (t = t.replace(/Capture$/, ""));t = t.toLowerCase().substring(2), o ? n || e.addEventListener(t, f, l) : e.removeEventListener(t, f, l), (e.__l || (e.__l = {}))[t] = o;
      } else if ("list" !== t && "type" !== t && !r && t in e) s(e, t, null == o ? "" : o), null != o && !1 !== o || e.removeAttribute(t);else {
        var a = r && t !== (t = t.replace(/^xlink\:?/, ""));null == o || !1 === o ? a ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof o && (a ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), o) : e.setAttribute(t, o));
      }
    } else e.className = o || "";
  }function s(e, t, n) {
    try {
      e[t] = n;
    } catch (e) {}
  }function f(e) {
    return this.__l[e.type](S.event && S.event(e) || e);
  }function d() {
    var e;while (e = D.pop()) {
      S.afterMount && S.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
  }function h(e, t, n, o, r, i) {
    H++ || (R = null != r && void 0 !== r.ownerSVGElement, j = null != e && !("__preactattr_" in e));var l = m(e, t, n, o, i);return r && l.parentNode !== r && r.appendChild(l), --H || (j = !1, i || d()), l;
  }function m(e, t, n, o, r) {
    var i = e,
        l = R;if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0))), i.__preactattr_ = !0, i;var u = t.nodeName;if ("function" == typeof u) return U(e, t, n, o);if (R = "svg" === u || "foreignObject" !== u && R, u += "", (!e || !a(e, u)) && (i = _(u, R), e)) {
      while (e.firstChild) {
        i.appendChild(e.firstChild);
      }e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0);
    }var p = i.firstChild,
        c = i.__preactattr_,
        s = t.children;if (null == c) {
      c = i.__preactattr_ = {};for (var f = i.attributes, d = f.length; d--;) {
        c[f[d].name] = f[d].value;
      }
    }return !j && s && 1 === s.length && "string" == typeof s[0] && null != p && void 0 !== p.splitText && null == p.nextSibling ? p.nodeValue != s[0] && (p.nodeValue = s[0]) : (s && s.length || null != p) && v(i, s, n, o, j || null != c.dangerouslySetInnerHTML), g(i, t.attributes, c), R = l, i;
  }function v(e, t, n, o, r) {
    var i,
        a,
        u,
        _,
        c,
        s = e.childNodes,
        f = [],
        d = {},
        h = 0,
        v = 0,
        y = s.length,
        g = 0,
        w = t ? t.length : 0;if (0 !== y) for (var C = 0; C < y; C++) {
      var x = s[C],
          N = x.__preactattr_,
          k = w && N ? x._component ? x._component.__k : N.key : null;null != k ? (h++, d[k] = x) : (N || (void 0 !== x.splitText ? !r || x.nodeValue.trim() : r)) && (f[g++] = x);
    }if (0 !== w) for (var C = 0; C < w; C++) {
      _ = t[C], c = null;var k = _.key;if (null != k) h && void 0 !== d[k] && (c = d[k], d[k] = void 0, h--);else if (!c && v < g) for (i = v; i < g; i++) {
        if (void 0 !== f[i] && l(a = f[i], _, r)) {
          c = a, f[i] = void 0, i === g - 1 && g--, i === v && v++;break;
        }
      }c = m(c, _, n, o), u = s[C], c && c !== e && c !== u && (null == u ? e.appendChild(c) : c === u.nextSibling ? p(u) : e.insertBefore(c, u));
    }if (h) for (var C in d) {
      void 0 !== d[C] && b(d[C], !1);
    }while (v <= g) {
      void 0 !== (c = f[g--]) && b(c, !1);
    }
  }function b(e, t) {
    var n = e._component;n ? L(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), !1 !== t && null != e.__preactattr_ || p(e), y(e));
  }function y(e) {
    e = e.lastChild;while (e) {
      var t = e.previousSibling;b(e, !0), e = t;
    }
  }function g(e, t, n) {
    var o;for (o in n) {
      t && null != t[o] || null == n[o] || c(e, o, n[o], n[o] = void 0, R);
    }for (o in t) {
      "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || c(e, o, n[o], n[o] = t[o], R);
    }
  }function w(e) {
    var t = e.constructor.name;(I[t] || (I[t] = [])).push(e);
  }function C(e, t, n) {
    var o,
        r = I[e.name];if (e.prototype && e.prototype.render ? (o = new e(t, n), T.call(o, t, n)) : (o = new T(t, n), o.constructor = e, o.render = x), r) for (var i = r.length; i--;) {
      if (r[i].constructor === e) {
        o.__b = r[i].__b, r.splice(i, 1);break;
      }
    }return o;
  }function x(e, t, n) {
    return this.constructor(e, n);
  }function N(e, t, n, o, i) {
    e.__x || (e.__x = !0, (e.__r = t.ref) && delete t.ref, (e.__k = t.key) && delete t.key, !e.base || i ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, o), o && o !== e.context && (e.__c || (e.__c = e.context), e.context = o), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== n && (1 !== n && !1 === S.syncComponentUpdates && e.base ? r(e) : k(e, 1, i)), e.__r && e.__r(e));
  }function k(e, t, o, r) {
    if (!e.__x) {
      var i,
          l,
          a,
          _ = e.props,
          p = e.state,
          c = e.context,
          s = e.__p || _,
          f = e.__s || p,
          m = e.__c || c,
          v = e.base,
          y = e.__b,
          g = v || y,
          w = e._component,
          x = !1;if (v && (e.props = s, e.state = f, e.context = m, 2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(_, p, c) ? x = !0 : e.componentWillUpdate && e.componentWillUpdate(_, p, c), e.props = _, e.state = p, e.context = c), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !x) {
        i = e.render(_, p, c), e.getChildContext && (c = n(n({}, c), e.getChildContext()));var U,
            T,
            M = i && i.nodeName;if ("function" == typeof M) {
          var W = u(i);l = w, l && l.constructor === M && W.key == l.__k ? N(l, W, 1, c, !1) : (U = l, e._component = l = C(M, W, c), l.__b = l.__b || y, l.__u = e, N(l, W, 0, c, !1), k(l, 1, o, !0)), T = l.base;
        } else a = g, U = w, U && (a = e._component = null), (g || 1 === t) && (a && (a._component = null), T = h(a, i, c, o || !v, g && g.parentNode, !0));if (g && T !== g && l !== w) {
          var E = g.parentNode;E && T !== E && (E.replaceChild(T, g), U || (g._component = null, b(g, !1)));
        }if (U && L(U), e.base = T, T && !r) {
          var P = e,
              V = e;while (V = V.__u) {
            (P = V).base = T;
          }T._component = P, T._componentConstructor = P.constructor;
        }
      }if (!v || o ? D.unshift(e) : x || (e.componentDidUpdate && e.componentDidUpdate(s, f, m), S.afterUpdate && S.afterUpdate(e)), null != e.__h) while (e.__h.length) {
        e.__h.pop().call(e);
      }H || r || d();
    }
  }function U(e, t, n, o) {
    var r = e && e._component,
        i = r,
        l = e,
        a = r && e._componentConstructor === t.nodeName,
        _ = a,
        p = u(t);while (r && !_ && (r = r.__u)) {
      _ = r.constructor === t.nodeName;
    }return r && _ && (!o || r._component) ? (N(r, p, 3, n, o), e = r.base) : (i && !a && (L(i), e = l = null), r = C(t.nodeName, p, n), e && !r.__b && (r.__b = e, l = null), N(r, p, 1, n, o), e = r.base, l && e !== l && (l._component = null, b(l, !1))), e;
  }function L(e) {
    S.beforeUnmount && S.beforeUnmount(e);var t = e.base;e.__x = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;var n = e._component;n ? L(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), e.__b = t, p(t), w(e), y(t)), e.__r && e.__r(null);
  }function T(e, t) {
    this.__d = !0, this.context = t, this.props = e, this.state = this.state || {};
  }function M(e, t, n) {
    return h(n, e, {}, !1, t, !1);
  }var S = {},
      W = [],
      E = [],
      P = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
      V = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      A = [],
      D = [],
      H = 0,
      R = !1,
      j = !1,
      I = {};n(T.prototype, { setState: function setState(e, t) {
      var o = this.state;this.__s || (this.__s = n({}, o)), n(o, "function" == typeof e ? e(o, this.props) : e), t && (this.__h = this.__h || []).push(t), r(this);
    }, forceUpdate: function forceUpdate(e) {
      e && (this.__h = this.__h || []).push(e), k(this, 2);
    }, render: function render() {} });var $ = { h: t, createElement: t, cloneElement: o, Component: T, render: M, rerender: i, options: S }; true ? module.exports = $ : self.preact = $;
}();
//# sourceMappingURL=preact.min.js.map

/***/ }),

/***/ "FWi5":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "H4yk":
/***/ (function(module, exports) {

module.exports = audioBufferToWav;
function audioBufferToWav(buffer, opt) {
  opt = opt || {};

  var numChannels = buffer.numberOfChannels;
  var sampleRate = buffer.sampleRate;
  var format = opt.float32 ? 3 : 1;
  var bitDepth = format === 3 ? 32 : 16;

  var result;
  if (numChannels === 2) {
    result = interleave(buffer.getChannelData(0), buffer.getChannelData(1));
  } else {
    result = buffer.getChannelData(0);
  }

  return encodeWAV(result, format, sampleRate, numChannels, bitDepth);
}

function encodeWAV(samples, format, sampleRate, numChannels, bitDepth) {
  var bytesPerSample = bitDepth / 8;
  var blockAlign = numChannels * bytesPerSample;

  var buffer = new ArrayBuffer(44 + samples.length * bytesPerSample);
  var view = new DataView(buffer);

  /* RIFF identifier */
  writeString(view, 0, 'RIFF');
  /* RIFF chunk length */
  view.setUint32(4, 36 + samples.length * bytesPerSample, true);
  /* RIFF type */
  writeString(view, 8, 'WAVE');
  /* format chunk identifier */
  writeString(view, 12, 'fmt ');
  /* format chunk length */
  view.setUint32(16, 16, true);
  /* sample format (raw) */
  view.setUint16(20, format, true);
  /* channel count */
  view.setUint16(22, numChannels, true);
  /* sample rate */
  view.setUint32(24, sampleRate, true);
  /* byte rate (sample rate * block align) */
  view.setUint32(28, sampleRate * blockAlign, true);
  /* block align (channel count * bytes per sample) */
  view.setUint16(32, blockAlign, true);
  /* bits per sample */
  view.setUint16(34, bitDepth, true);
  /* data chunk identifier */
  writeString(view, 36, 'data');
  /* data chunk length */
  view.setUint32(40, samples.length * bytesPerSample, true);
  if (format === 1) {
    // Raw PCM
    floatTo16BitPCM(view, 44, samples);
  } else {
    writeFloat32(view, 44, samples);
  }

  return buffer;
}

function interleave(inputL, inputR) {
  var length = inputL.length + inputR.length;
  var result = new Float32Array(length);

  var index = 0;
  var inputIndex = 0;

  while (index < length) {
    result[index++] = inputL[inputIndex];
    result[index++] = inputR[inputIndex];
    inputIndex++;
  }
  return result;
}

function writeFloat32(output, offset, input) {
  for (var i = 0; i < input.length; i++, offset += 4) {
    output.setFloat32(offset, input[i], true);
  }
}

function floatTo16BitPCM(output, offset, input) {
  for (var i = 0; i < input.length; i++, offset += 2) {
    var s = Math.max(-1, Math.min(1, input[i]));
    output.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
  }
}

function writeString(view, offset, string) {
  for (var i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i));
  }
}

/***/ }),

/***/ "JkW7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("EBst");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// EXTERNAL MODULE: ./style.css
var style = __webpack_require__("FWi5");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// CONCATENATED MODULE: ./node_modules/unfetch/dist/unfetch.es.js
var index = typeof fetch == 'function' ? fetch.bind() : function (url, options) {
	options = options || {};
	return new Promise(function (resolve, reject) {
		var request = new XMLHttpRequest();

		request.open(options.method || 'get', url);

		for (var i in options.headers) {
			request.setRequestHeader(i, options.headers[i]);
		}

		request.withCredentials = options.credentials == 'include';

		request.onload = function () {
			resolve(response());
		};

		request.onerror = reject;

		request.send(options.body);

		function response() {
			var _keys = [],
			    all = [],
			    headers = {},
			    header;

			request.getAllResponseHeaders().replace(/^(.*?):\s*([\s\S]*?)$/gm, function (m, key, value) {
				_keys.push(key = key.toLowerCase());
				all.push([key, value]);
				header = headers[key];
				headers[key] = header ? header + "," + value : value;
			});

			return {
				ok: (request.status / 200 | 0) == 1, // 200-299
				status: request.status,
				statusText: request.statusText,
				url: request.responseURL,
				clone: response,
				text: function text() {
					return Promise.resolve(request.responseText);
				},
				json: function json() {
					return Promise.resolve(request.responseText).then(JSON.parse);
				},
				blob: function blob() {
					return Promise.resolve(new Blob([request.response]));
				},
				headers: {
					keys: function keys() {
						return _keys;
					},
					entries: function entries() {
						return all;
					},
					get: function get(n) {
						return headers[n.toLowerCase()];
					},
					has: function has(n) {
						return n.toLowerCase() in headers;
					}
				}
			};
		}
	});
};

/* harmony default export */ var unfetch_es = (index);
//# sourceMappingURL=unfetch.es.js.map
// CONCATENATED MODULE: ./node_modules/promise-polyfill/src/index.js
// Store setTimeout reference so promise-polyfill will be unaffected by
// other code modifying setTimeout (like sinon.useFakeTimers())
var setTimeoutFunc = setTimeout;

function noop() {}

// Polyfill for Function.prototype.bind
function bind(fn, thisArg) {
  return function () {
    fn.apply(thisArg, arguments);
  };
}

function handle(self, deferred) {
  while (self._state === 3) {
    self = self._value;
  }
  if (self._state === 0) {
    self._deferreds.push(deferred);
    return;
  }
  self._handled = true;
  src_Promise._immediateFn(function () {
    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      (self._state === 1 ? src_resolve : src_reject)(deferred.promise, self._value);
      return;
    }
    var ret;
    try {
      ret = cb(self._value);
    } catch (e) {
      src_reject(deferred.promise, e);
      return;
    }
    src_resolve(deferred.promise, ret);
  });
}

function src_resolve(self, newValue) {
  try {
    // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
    if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
    if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
      var then = newValue.then;
      if (newValue instanceof src_Promise) {
        self._state = 3;
        self._value = newValue;
        finale(self);
        return;
      } else if (typeof then === 'function') {
        doResolve(bind(then, newValue), self);
        return;
      }
    }
    self._state = 1;
    self._value = newValue;
    finale(self);
  } catch (e) {
    src_reject(self, e);
  }
}

function src_reject(self, newValue) {
  self._state = 2;
  self._value = newValue;
  finale(self);
}

function finale(self) {
  if (self._state === 2 && self._deferreds.length === 0) {
    src_Promise._immediateFn(function () {
      if (!self._handled) {
        src_Promise._unhandledRejectionFn(self._value);
      }
    });
  }

  for (var i = 0, len = self._deferreds.length; i < len; i++) {
    handle(self, self._deferreds[i]);
  }
  self._deferreds = null;
}

function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, self) {
  var done = false;
  try {
    fn(function (value) {
      if (done) return;
      done = true;
      src_resolve(self, value);
    }, function (reason) {
      if (done) return;
      done = true;
      src_reject(self, reason);
    });
  } catch (ex) {
    if (done) return;
    done = true;
    src_reject(self, ex);
  }
}

function src_Promise(fn) {
  if (!(this instanceof src_Promise)) throw new TypeError('Promises must be constructed via new');
  if (typeof fn !== 'function') throw new TypeError('not a function');
  this._state = 0;
  this._handled = false;
  this._value = undefined;
  this._deferreds = [];

  doResolve(fn, this);
}

var _proto = src_Promise.prototype;
_proto.catch = function (onRejected) {
  return this.then(null, onRejected);
};

_proto.then = function (onFulfilled, onRejected) {
  var prom = new this.constructor(noop);

  handle(this, new Handler(onFulfilled, onRejected, prom));
  return prom;
};

src_Promise.all = function (arr) {
  return new src_Promise(function (resolve, reject) {
    if (!arr || typeof arr.length === 'undefined') throw new TypeError('Promise.all accepts an array');
    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      try {
        if (val && (typeof val === 'object' || typeof val === 'function')) {
          var then = val.then;
          if (typeof then === 'function') {
            then.call(val, function (val) {
              res(i, val);
            }, reject);
            return;
          }
        }
        args[i] = val;
        if (--remaining === 0) {
          resolve(args);
        }
      } catch (ex) {
        reject(ex);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

src_Promise.resolve = function (value) {
  if (value && typeof value === 'object' && value.constructor === src_Promise) {
    return value;
  }

  return new src_Promise(function (resolve) {
    resolve(value);
  });
};

src_Promise.reject = function (value) {
  return new src_Promise(function (resolve, reject) {
    reject(value);
  });
};

src_Promise.race = function (values) {
  return new src_Promise(function (resolve, reject) {
    for (var i = 0, len = values.length; i < len; i++) {
      values[i].then(resolve, reject);
    }
  });
};

// Use polyfill for setImmediate for performance gains
src_Promise._immediateFn = typeof setImmediate === 'function' && function (fn) {
  setImmediate(fn);
} || function (fn) {
  setTimeoutFunc(fn, 0);
};

src_Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
  if (typeof console !== 'undefined' && console) {
    console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
  }
};

/* harmony default export */ var src = (src_Promise);
// EXTERNAL MODULE: ./dist/wasm/index.untouched.wasm
var index_untouched = __webpack_require__("toTQ");
var index_untouched_default = /*#__PURE__*/__webpack_require__.n(index_untouched);

// CONCATENATED MODULE: ./lib/graphics/graphics.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



// Performance tips with canvas:
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas

// Declare Our Constants
var GAMEBOY_CAMERA_WIDTH = 160;
var GAMEBOY_CAMERA_HEIGHT = 144;
var WASMBOY_MEMORY_CURRENT_RENDERED_FRAME = 0x028400;
// Must be greater than 4, or else will have really weird performance
// noticed you get about 4 frames for every 4096 samples
var WASMBOY_MAX_FRAMES_IN_QUEUE = 6;

var graphics_WasmBoyGraphicsService = function () {
  function WasmBoyGraphicsService() {
    _classCallCheck(this, WasmBoyGraphicsService);

    this.wasmInstance = undefined;
    this.wasmByteMemory = undefined;

    this.frameQueue = undefined;
    this.frameQueueRenderPromise = undefined;

    this.canvasElement = undefined;
    this.canvasContext = undefined;
    this.canvasImageData = undefined;
  }

  WasmBoyGraphicsService.prototype.initialize = function initialize(canvasElement, wasmInstance, wasmByteMemory) {
    var _this = this;

    this.wasmInstance = wasmInstance;
    this.wasmByteMemory = wasmByteMemory;
    // Reset our frame queue and render promises
    this.frameQueue = [];

    return new src(function (resolve, reject) {
      try {
        // Prepare our canvas
        _this.canvasElement = canvasElement;
        _this.canvasContext = _this.canvasElement.getContext('2d');
        _this.canvasElement.width = GAMEBOY_CAMERA_WIDTH;
        _this.canvasElement.height = GAMEBOY_CAMERA_HEIGHT;
        _this.canvasImageData = _this.canvasContext.createImageData(GAMEBOY_CAMERA_WIDTH, GAMEBOY_CAMERA_HEIGHT);

        // Add some css for smooth 8-bit canvas scaling
        // https://stackoverflow.com/questions/7615009/disable-interpolation-when-scaling-a-canvas
        // https://caniuse.com/#feat=css-crisp-edges
        _this.canvasElement.style = '\n          image-rendering: optimizeSpeed;\n          image-rendering: -moz-crisp-edges;\n          image-rendering: -webkit-optimize-contrast;\n          image-rendering: -o-crisp-edges;\n          image-rendering: pixelated;\n          -ms-interpolation-mode: nearest-neighbor;\n        ';

        // Fill the canvas with a blank screen
        // using client width since we are not requiring a width and height oin the canvas
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth
        // TODO: Mention respopnsive canvas scaling in the docs
        _this.canvasContext.clearRect(0, 0, _this.canvasElement.width, _this.canvasElement.height);

        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };

  // Function to render a frame
  // Will add the frame to the frame queue to be rendered
  // Returns the promise from this.drawFrameQueue
  // Which resolves once all frames are rendered


  WasmBoyGraphicsService.prototype.renderFrame = function renderFrame() {
    var _this2 = this;

    return new src(function (resolve) {
      // Draw the pixels
      // 160x144
      // Split off our image Data
      var imageDataArray = new Uint8ClampedArray(GAMEBOY_CAMERA_HEIGHT * GAMEBOY_CAMERA_WIDTH * 4);

      for (var y = 0; y < GAMEBOY_CAMERA_HEIGHT; y++) {
        for (var x = 0; x < GAMEBOY_CAMERA_WIDTH; x++) {

          var color = _this2.wasmByteMemory[WASMBOY_MEMORY_CURRENT_RENDERED_FRAME + x + y * GAMEBOY_CAMERA_WIDTH];

          // Doing graphics using second answer on:
          // https://stackoverflow.com/questions/4899799/whats-the-best-way-to-set-a-single-pixel-in-an-html5-canvas
          // Image Data mapping
          var imageDataIndex = (x + y * GAMEBOY_CAMERA_WIDTH) * 4;

          // TODO: Allow other colors

          // The original gameboy had 4 colors going to use alpha to represent each
          var alpha = 0;

          if (color === 1) {
            // Alpha already set
          } else if (color === 2) {
            // 85 33% transparent
            alpha = 85;
          } else if (color === 3) {
            // 169 66% transparent
            alpha = 169;
          } else {
            // 255 no transparency
            alpha = 255;
          }

          imageDataArray[imageDataIndex] = 0;
          imageDataArray[imageDataIndex + 1] = 0;
          imageDataArray[imageDataIndex + 2] = 0;
          imageDataArray[imageDataIndex + 3] = alpha;
        }
      }

      // Add our new imageData
      for (var i = 0; i < imageDataArray.length; i++) {
        _this2.canvasImageData.data[i] = imageDataArray[i];
      }

      // TODO: Allow changing gameboy background color
      // https://designpieces.com/palette/game-boy-original-color-palette-hex-and-rgb/
      //this.canvasContext.fillStyle = "#9bbc0f";
      //this.canvasContext.fillRect(0, 0, this.canvasElement.clientWidth, this.canvasElement.clientHeight);

      _this2.canvasContext.clearRect(0, 0, GAMEBOY_CAMERA_WIDTH, GAMEBOY_CAMERA_HEIGHT);
      _this2.canvasContext.putImageData(_this2.canvasImageData, 0, 0);

      resolve();
    });
  };

  return WasmBoyGraphicsService;
}();

var WasmBoyGraphics = new graphics_WasmBoyGraphicsService();
// CONCATENATED MODULE: ./lib/audio/audio.js
function audio__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Tons of help from:
// https://binji.github.io/2017/02/27/binjgb-on-the-web-part-2.html
// https://github.com/binji/binjgb/blob/master/demo/demo.js
// Web Audio API is tricky!



// Define our performance constants
// Both of these make it sound off
// Latency controls how much delay audio has, larger = more delay, goal is to be as small as possible
// Time remaining controls how far ahead we can be., larger = more frames rendered before playing a new set of samples. goal is to be as small as possible. May want to adjust this number according to performance of device
// These magic numbers just come from preference, can be set as options
var DEFAULT_AUDIO_LATENCY_IN_MILLI = 100;
var WASMBOY_MIN_TIME_REMAINING_IN_MILLI = 75;

// https://docs.google.com/spreadsheets/d/17xrEzJk5-sCB9J2mMJcVnzhbE-XH_NvczVSQH9OHvRk/edit?usp=sharing
var WASMBOY_MEMORY_SOUND_INDEX = 0x053800;
var WASMBOY_SAMPLE_RATE = 48000;

// Some canstants that use the ones above that will allow for faster performance
var DEFAULT_AUDIO_LATENCY_IN_SECONDS = DEFAULT_AUDIO_LATENCY_IN_MILLI / 1000;
var WASMBOY_MIN_TIME_REMAINING_IN_SECONDS = WASMBOY_MIN_TIME_REMAINING_IN_MILLI / 1000;

var getUnsignedAudioSampleAsFloat = function getUnsignedAudioSampleAsFloat(audioSample) {
  // Subtract 1 as it is added so the value is not empty
  audioSample -= 1;
  // Divide by 127 to get back to our float scale
  audioSample = audioSample / 127;
  // Subtract 1 to regain our sign
  audioSample -= 1;

  // Because of the innacuracy of converting an unsigned int to a signed float
  // We will have some leftovers when doing the conversion.
  // When testing with Pokemon blue, when it is supposed to be complete silence in the intro,
  // It shows 0.007874015748031482, meaning we want to cut our values lower than this
  if (Math.abs(audioSample) < 0.008) {
    audioSample = 0;
  }

  // Return, but divide by lower volume, PCM is loouuuuddd
  return audioSample / 2.5;
};

var audio_WasmBoyAudioService = function () {
  function WasmBoyAudioService() {
    audio__classCallCheck(this, WasmBoyAudioService);

    // Wasmboy instance and memory
    this.wasmInstance = undefined;
    this.wasmByteMemory = undefined;

    this.audioContext = undefined;
    this.audioBuffer = undefined;
    // The play time for our audio samples
    this.audioPlaytime = undefined;
    this.audioSources = [];

    // Average fps for time stretching
    this.averageTimeStretchFps = [];
  }

  WasmBoyAudioService.prototype.initialize = function initialize(wasmInstance, wasmByteMemory) {
    this.wasmInstance = wasmInstance;
    this.wasmByteMemory = wasmByteMemory;

    this.audioSources = [];
    this.averageTimeStretchFps = [];

    // Get our Audio context
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    return src.resolve();
  };

  // Function to queue up and audio buyffer to be played
  // Returns a promise so that we may "sync by audio"
  // https://www.reddit.com/r/EmuDev/comments/5gkwi5/gb_apu_sound_emulation/dau8e2w/


  WasmBoyAudioService.prototype.playAudio = function playAudio(currentFps) {
    var _this = this;

    return new src(function (resolve) {

      // Find our averageFps
      var fps = currentFps || 60;
      // TODO Make this a constant
      var fpsCap = 59;
      if (currentFps && currentFps > 0 && currentFps < fpsCap) {
        _this.averageTimeStretchFps.push(currentFps);
        if (_this.averageTimeStretchFps.length > Math.floor(fpsCap * 3)) {
          _this.averageTimeStretchFps.shift();
        }
        fps = _this.averageTimeStretchFps.reduce(function (accumulator, currentValue) {
          return accumulator + currentValue;
        });
        fps = Math.floor(fps / _this.averageTimeStretchFps.length);
      } else {
        if (_this.averageTimeStretchFps.length > 0) {
          _this.cancelAllAudio();
        }
        _this.averageTimeStretchFps = [];
      }

      // Find if we should time stretch this sample or not from our current fps
      var playbackRate = 1.0;
      if (fps < fpsCap) {
        // Has to be 60 to get accurent playback regarless of fps cap
        playbackRate = playbackRate * (fps / 60);
        if (playbackRate <= 0) {
          playbackRate = 0.01;
        }
      }

      // Check if we need more samples yet
      var timeUntilNextSample = void 0;
      if (_this.audioPlaytime) {
        timeUntilNextSample = _this.audioPlaytime - _this.audioContext.currentTime;
        if (timeUntilNextSample > WASMBOY_MIN_TIME_REMAINING_IN_SECONDS) {
          resolve();
          return;
        }
      }

      // Check if we made it in time
      // Idea from: https://github.com/binji/binjgb/blob/master/demo/demo.js
      var audioContextCurrentTime = _this.audioContext.currentTime;
      var audioContextCurrentTimeWithLatency = audioContextCurrentTime + DEFAULT_AUDIO_LATENCY_IN_SECONDS;
      _this.audioPlaytime = _this.audioPlaytime || audioContextCurrentTimeWithLatency;

      if (_this.audioPlaytime < audioContextCurrentTime) {
        // We took too long, or something happen and hiccup'd the emulator, reset audio playback times
        console.log('[Wasmboy] Reseting Audio Playback time: ' + _this.audioPlaytime.toFixed(2) + ' < ' + audioContextCurrentTimeWithLatency.toFixed(2));
        _this.cancelAllAudio();
        _this.audioPlaytime = audioContextCurrentTimeWithLatency;
        resolve();
        return;
      }

      // Lastly, check if we even have any samples we can play
      if (_this.wasmInstance.exports.getAudioQueueIndex() < 4) {
        resolve();
        return true;
      }

      // We made it! Go ahead and grab and play the pcm samples
      var wasmBoyNumberOfSamples = _this.wasmInstance.exports.getAudioQueueIndex();

      _this.audioBuffer = _this.audioContext.createBuffer(2, wasmBoyNumberOfSamples, WASMBOY_SAMPLE_RATE);
      var leftChannelBuffer = _this.audioBuffer.getChannelData(0);
      var rightChannelBuffer = _this.audioBuffer.getChannelData(1);

      // Our index on our left/right buffers
      var bufferIndex = 0;

      // Our total number of stereo samples
      var wasmBoyNumberOfSamplesForStereo = wasmBoyNumberOfSamples * 2;

      // Left Channel
      for (var i = 0; i < wasmBoyNumberOfSamplesForStereo; i = i + 2) {
        leftChannelBuffer[bufferIndex] = getUnsignedAudioSampleAsFloat(_this.wasmByteMemory[i + WASMBOY_MEMORY_SOUND_INDEX]);
        bufferIndex++;
      }

      // Reset the buffer index
      bufferIndex = 0;

      // Right Channel
      for (var _i = 1; _i < wasmBoyNumberOfSamplesForStereo; _i = _i + 2) {
        rightChannelBuffer[bufferIndex] = getUnsignedAudioSampleAsFloat(_this.wasmByteMemory[_i + WASMBOY_MEMORY_SOUND_INDEX]);
        bufferIndex++;
      }

      // Reset the Audio Queue
      _this.wasmInstance.exports.resetAudioQueue();

      // Get an AudioBufferSourceNode.
      // This is the AudioNode to use when we want to play an AudioBuffer
      var source = _this.audioContext.createBufferSource();

      // set the buffer in the AudioBufferSourceNode
      source.buffer = _this.audioBuffer;

      // Set our playback rate for time resetretching
      source.playbackRate.setValueAtTime(playbackRate, _this.audioContext.currentTime);

      // connect the AudioBufferSourceNode to the
      // destination so we can hear the sound
      source.connect(_this.audioContext.destination);

      // start the source playing
      source.start(_this.audioPlaytime);

      // Set our new audio playtime goal
      var sourcePlaybackLength = wasmBoyNumberOfSamples / (WASMBOY_SAMPLE_RATE * playbackRate);
      _this.audioPlaytime = _this.audioPlaytime + sourcePlaybackLength;

      // Add the source so we can stop this if needed
      _this.audioSources.push({
        source: source,
        playTime: _this.audioPlaytime,
        fps: fps
      });

      // Shift ourselves out when finished
      var timeUntilSourceEnds = _this.audioPlaytime - _this.audioContext.currentTime + 500;
      setTimeout(function () {
        _this.audioSources.shift();
      }, timeUntilSourceEnds);

      resolve();
    });
  };

  WasmBoyAudioService.prototype.cancelAllAudio = function cancelAllAudio() {
    // Cancel all audio That was queued to play
    for (var i = 0; i < this.audioSources.length; i++) {
      if (this.audioSources[i].playTime > this.audioPlaytime) {
        this.audioSources[i].source.stop(this.audioPlaytime);
      }
    }

    // Reset our audioPlaytime
    this.audioPlaytime = this.audioContext.currentTime + DEFAULT_AUDIO_LATENCY_IN_SECONDS;
  };

  WasmBoyAudioService.prototype.debugSaveCurrentAudioBufferToWav = function debugSaveCurrentAudioBufferToWav() {

    if (!this.audioBuffer) {
      return;
    }

    // https://www.npmjs.com/package/audiobuffer-to-wav
    var toWav = __webpack_require__("H4yk");
    // https://github.com/Jam3/audiobuffer-to-wav/blob/master/demo/index.js

    var wav = toWav(this.audioBuffer);
    var blob = new window.Blob([new DataView(wav)], {
      type: 'audio/wav'
    });

    var url = window.URL.createObjectURL(blob);
    var anchor = document.createElement('a');
    document.body.appendChild(anchor);
    anchor.style = 'display: none';
    anchor.href = url;
    anchor.download = 'audio.wav';
    anchor.click();
    window.URL.revokeObjectURL(url);
  };

  return WasmBoyAudioService;
}();

var WasmBoyAudio = new audio_WasmBoyAudioService();
// CONCATENATED MODULE: ./node_modules/responsive-gamepad/dist/responsive-gamepad.esm.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Define a keyboard key schema
var keyInputSchema = {
  ACTIVE: false,
  KEY_CODE: undefined

  // Define a gamepad button schema
  // https://w3c.github.io/gamepad/#remapping
};var gamepadInputSchema = {
  ACTIVE: false,
  BUTTON_ID: undefined,
  JOYSTICK: {
    AXIS_ID: undefined,
    IS_POSITIVE: undefined
  }
};

var touchInputSchema = {
  ACTIVE: false,
  ELEMENT: undefined,
  TYPE: undefined,
  DIRECTION: undefined,
  EVENT_HANDLER: undefined,
  BOUNDING_RECT: undefined

  // Define our finaly kerboard schema here
};var keyMapSchema = {
  UP: {
    KEYBOARD: [],
    GAMEPAD: [],
    TOUCHPAD: []
  },
  RIGHT: {
    KEYBOARD: [],
    GAMEPAD: [],
    TOUCHPAD: []
  },
  DOWN: {
    KEYBOARD: [],
    GAMEPAD: [],
    TOUCHPAD: []
  },
  LEFT: {
    KEYBOARD: [],
    GAMEPAD: [],
    TOUCHPAD: []
  },
  A: {
    KEYBOARD: [],
    GAMEPAD: [],
    TOUCHPAD: []
  },
  B: {
    KEYBOARD: [],
    GAMEPAD: [],
    TOUCHPAD: []
  },
  SELECT: {
    KEYBOARD: [],
    GAMEPAD: [],
    TOUCHPAD: []
  },
  START: {
    KEYBOARD: [],
    GAMEPAD: [],
    TOUCHPAD: []
  }
};

function getKeyInput(keyCode) {
  var input = _extends({}, keyInputSchema);
  input.KEY_CODE = keyCode;
  return input;
}

function getGamepadInput(gamepadButtonId, axisId, axisIsPositive) {
  var input = _extends({}, gamepadInputSchema);
  input.JOYSTICK = _extends({}, gamepadInputSchema.JOYSTICK);
  if (gamepadButtonId || gamepadButtonId === 0) {
    input.BUTTON_ID = gamepadButtonId;
  } else if (axisId !== undefined && axisIsPositive !== undefined) {
    input.JOYSTICK.AXIS_ID = axisId;
    input.JOYSTICK.IS_POSITIVE = axisIsPositive;
  }
  return input;
}

function getTouchInput(element, type, direction, eventHandler) {
  var input = _extends({}, touchInputSchema);

  // TODO: Check the type for a valid type

  // Add our passed parameters
  input.ELEMENT = element;
  input.TYPE = type;
  input.DIRECTION = direction;
  input.EVENT_HANDLER = eventHandler;

  // Add our bounding rect
  var boundingRect = input.ELEMENT.getBoundingClientRect();
  input.BOUNDING_RECT = boundingRect;

  // Define our eventListener functions
  var eventListenerCallback = function eventListenerCallback(event) {
    if (input.EVENT_HANDLER) {
      input.EVENT_HANDLER(event);
    }
  };

  // Add event listeners to the element
  input.ELEMENT.addEventListener("touchstart", eventListenerCallback);
  input.ELEMENT.addEventListener("touchmove", eventListenerCallback);
  input.ELEMENT.addEventListener("touchend", eventListenerCallback);
  input.ELEMENT.addEventListener("mousedown", eventListenerCallback);
  input.ELEMENT.addEventListener("mouseup", eventListenerCallback);

  return input;
}

function KeyMapSchema() {
  return _extends({}, keyMapSchema);
}

var Key = {

  BACKSPACE: 8,
  TAB: 9,
  RETURN: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  ESCAPE: 27,
  SPACE: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,

  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,

  W: 87,
  A: 65,
  S: 83,
  D: 68,
  Q: 81,
  E: 69,
  X: 88,
  Z: 90,

  SEMI_COLON: 186,
  SINGLE_QUOTE: 222,
  BACK_SLASH: 220,

  NUMPAD_0: 96,
  NUMPAD_1: 97,
  NUMPAD_2: 98,
  NUMPAD_3: 99,
  NUMPAD_4: 100,
  NUMPAD_5: 101,
  NUMPAD_6: 102,
  NUMPAD_7: 103,
  NUMPAD_8: 104,
  NUMPAD_9: 105
};

var keymap = KeyMapSchema();

// Up
keymap.UP.KEYBOARD.push(getKeyInput(Key.ARROW_UP));
keymap.UP.KEYBOARD.push(getKeyInput(Key.W));
keymap.UP.KEYBOARD.push(getKeyInput(Key.NUMPAD_8));
keymap.UP.GAMEPAD.push(getGamepadInput(12));
keymap.UP.GAMEPAD.push(getGamepadInput(false, 1, false));
keymap.UP.GAMEPAD.push(getGamepadInput(false, 3, false));

// Right
keymap.RIGHT.KEYBOARD.push(getKeyInput(Key.ARROW_RIGHT));
keymap.RIGHT.KEYBOARD.push(getKeyInput(Key.D));
keymap.RIGHT.KEYBOARD.push(getKeyInput(Key.NUMPAD_6));
keymap.RIGHT.GAMEPAD.push(getGamepadInput(15));
keymap.RIGHT.GAMEPAD.push(getGamepadInput(false, 0, true));
keymap.RIGHT.GAMEPAD.push(getGamepadInput(false, 2, true));

// Down
keymap.DOWN.KEYBOARD.push(getKeyInput(Key.ARROW_DOWN));
keymap.DOWN.KEYBOARD.push(getKeyInput(Key.S));
keymap.DOWN.KEYBOARD.push(getKeyInput(Key.NUMPAD_5));
keymap.DOWN.KEYBOARD.push(getKeyInput(Key.NUMPAD_2));
keymap.DOWN.GAMEPAD.push(getGamepadInput(13));
keymap.DOWN.GAMEPAD.push(getGamepadInput(false, 1, true));
keymap.DOWN.GAMEPAD.push(getGamepadInput(false, 3, true));

// Left
keymap.LEFT.KEYBOARD.push(getKeyInput(Key.ARROW_LEFT));
keymap.LEFT.KEYBOARD.push(getKeyInput(Key.A));
keymap.LEFT.KEYBOARD.push(getKeyInput(Key.NUMPAD_4));
keymap.LEFT.GAMEPAD.push(getGamepadInput(14));
keymap.LEFT.GAMEPAD.push(getGamepadInput(false, 0, false));
keymap.LEFT.GAMEPAD.push(getGamepadInput(false, 2, false));

// A
keymap.A.KEYBOARD.push(getKeyInput(Key.X));
keymap.A.KEYBOARD.push(getKeyInput(Key.SEMI_COLON));
keymap.A.KEYBOARD.push(getKeyInput(Key.NUMPAD_7));
keymap.A.GAMEPAD.push(getGamepadInput(0));
keymap.A.GAMEPAD.push(getGamepadInput(1));

// B
keymap.B.KEYBOARD.push(getKeyInput(Key.Z));
keymap.B.KEYBOARD.push(getKeyInput(Key.ESCAPE));
keymap.B.KEYBOARD.push(getKeyInput(Key.SINGLE_QUOTE));
keymap.B.KEYBOARD.push(getKeyInput(Key.BACKSPACE));
keymap.B.KEYBOARD.push(getKeyInput(Key.NUMPAD_9));
keymap.B.GAMEPAD.push(getGamepadInput(2));
keymap.B.GAMEPAD.push(getGamepadInput(3));

// Start
keymap.START.KEYBOARD.push(getKeyInput(Key.RETURN));
keymap.START.KEYBOARD.push(getKeyInput(Key.SPACE));
keymap.START.KEYBOARD.push(getKeyInput(Key.NUMPAD_3));
keymap.START.GAMEPAD.push(getGamepadInput(9));

// Select
keymap.SELECT.KEYBOARD.push(getKeyInput(Key.SHIFT));
keymap.SELECT.KEYBOARD.push(getKeyInput(Key.TAB));
keymap.SELECT.KEYBOARD.push(getKeyInput(Key.BACK_SLASH));
keymap.SELECT.KEYBOARD.push(getKeyInput(Key.NUMPAD_1));
keymap.SELECT.GAMEPAD.push(getGamepadInput(8));

var KEYMAP = keymap;

var classCallCheck = function classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

// Helpers for accessing gamepad
// Similar to: https://github.com/torch2424/picoDeploy/blob/master/src/assets/3pLibs/pico8gamepad/pico8gamepad.js
function getAnalogStickAxis(gamepad, axisId) {
  return gamepad.axes[axisId] || 0.0;
}

function isButtonPressed(gamepad, buttonId) {
  return gamepad.buttons[buttonId] ? gamepad.buttons[buttonId].pressed : false;
}

var ResponsiveGamepadService = function () {
  function ResponsiveGamepadService() {
    classCallCheck(this, ResponsiveGamepadService);

    // Our settings
    this.gamepadAnalogStickDeadZone = 0.25;
    this.keyMapKeys = Object.keys(KeyMapSchema());
    this.keyMap = KEYMAP;
  }

  createClass(ResponsiveGamepadService, [{
    key: 'initialize',
    value: function initialize(keyMap) {
      var _this = this;

      // Add our key event listeners
      window.addEventListener('keyup', function (event) {
        _this.updateKeyboard(event);
      });
      window.addEventListener('keydown', function (event) {
        _this.updateKeyboard(event);
      });

      // Add a resize listen to update the gamepad rect on resize
      window.addEventListener("resize", function () {
        _this.updateTouchpadRect();
      });

      if (keyMap) {
        this.keyMap = keyMap;
      }
    }
  }, {
    key: 'addTouchInput',
    value: function addTouchInput(keyMapKey, element, type, direction) {
      var _this2 = this;

      // Declare our touch input
      // TODO: May have to add the event handler after getting the input
      var touchInput = void 0;
      touchInput = getTouchInput(element, type, direction, function (event) {
        _this2.updateTouchpad(keyMapKey, touchInput, event);
      });

      // Add the input to our keymap
      this.keyMap[keyMapKey].TOUCHPAD.push(touchInput);
    }
  }, {
    key: 'getState',
    value: function getState() {
      var _this3 = this;

      // Keyboard handled by listeners on window

      // Update the gamepad state
      this.updateGamepad();

      // Touch Handled by listeners on touchInputs

      // Create an abstracted controller state
      var controllerState = {};

      // Loop through our Keys, and quickly build our controller state
      this.keyMapKeys.forEach(function (key) {

        // Find if any of the keyboard, gamepad or touchpad buttons are pressed
        var keyboardState = _this3.keyMap[key].KEYBOARD.some(function (keyInput) {
          return keyInput.ACTIVE;
        });

        if (keyboardState) {
          controllerState[key] = true;
          return;
        }

        // Find if any of the keyboard, gamepad or touchpad buttons are pressed
        var gamepadState = _this3.keyMap[key].GAMEPAD.some(function (gamepadInput) {
          return gamepadInput.ACTIVE;
        });

        if (gamepadState) {
          controllerState[key] = true;
          return;
        }

        // Find if any of the keyboard, gamepad or touchpad buttons are pressed
        var touchState = _this3.keyMap[key].TOUCHPAD.some(function (touchInput) {
          return touchInput.ACTIVE;
        });

        if (touchState) {
          controllerState[key] = true;
          return;
        }

        controllerState[key] = false;
      });

      // Return the controller state in case we need something from it
      return controllerState;
    }

    // Function to handle keyboard update events

  }, {
    key: 'updateKeyboard',
    value: function updateKeyboard(keyEvent) {
      var _this4 = this;

      // Get the new state of the key
      var isPressed = false;
      if (keyEvent.type === 'keydown') {
        isPressed = true;
      }

      // Loop through our keys
      this.keyMapKeys.forEach(function (key) {
        _this4.keyMap[key].KEYBOARD.forEach(function (keyInput, index) {
          if (keyInput.KEY_CODE === keyEvent.keyCode) {
            _this4.keyMap[key].KEYBOARD[index].ACTIVE = isPressed;
          }
        });
      });
    }

    // Function to check the gamepad API for the gamepad state

  }, {
    key: 'updateGamepad',
    value: function updateGamepad() {
      var _this5 = this;

      // Similar to: https://github.com/torch2424/picoDeploy/blob/master/src/assets/3pLibs/pico8gamepad/pico8gamepad.js
      // Gampad Diagram: https://www.html5rocks.com/en/tutorials/doodles/gamepad/#toc-gamepadinfo
      var gamepads = navigator.getGamepads ? navigator.getGamepads() : [];

      var _loop = function _loop(i) {

        // Get our current gamepad
        var gamepad = gamepads[i];

        if (!gamepad) {
          return 'continue';
        }

        // Loop through our keys
        _this5.keyMapKeys.forEach(function (key) {
          _this5.keyMap[key].GAMEPAD.forEach(function (gamepadInput, index) {

            // Check if we are a gamepad button
            if (_this5.keyMap[key].GAMEPAD[index].BUTTON_ID || _this5.keyMap[key].GAMEPAD[index].BUTTON_ID === 0) {
              _this5.keyMap[key].GAMEPAD[index].ACTIVE = isButtonPressed(gamepad, _this5.keyMap[key].GAMEPAD[index].BUTTON_ID);
            }

            // Check if we are an axis
            if (_this5.keyMap[key].GAMEPAD[index].JOYSTICK.AXIS_ID !== undefined && _this5.keyMap[key].GAMEPAD[index].JOYSTICK.IS_POSITIVE !== undefined) {
              if (_this5.keyMap[key].GAMEPAD[index].JOYSTICK.IS_POSITIVE) {
                _this5.keyMap[key].GAMEPAD[index].ACTIVE = getAnalogStickAxis(gamepad, _this5.keyMap[key].GAMEPAD[index].JOYSTICK.AXIS_ID) > +_this5.gamepadAnalogStickDeadZone;
              } else {
                _this5.keyMap[key].GAMEPAD[index].ACTIVE = getAnalogStickAxis(gamepad, _this5.keyMap[key].GAMEPAD[index].JOYSTICK.AXIS_ID) < -_this5.gamepadAnalogStickDeadZone;
              }
            }
          });
        });
      };

      for (var i = 0; i < gamepads.length; i++) {
        var _ret = _loop(i);

        if (_ret === 'continue') continue;
      }
    }

    // Function to update button position and size

  }, {
    key: 'updateTouchpadRect',
    value: function updateTouchpadRect() {
      var _this6 = this;

      // Read from the DOM, and get each of our elements position, doing this here, as it is best to read from the dom in sequence
      // use element.getBoundingRect() top, bottom, left, right to get clientX and clientY in touch events :)
      // https://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element
      //console.log("GamepadComponent: Updating Rect()...");
      this.keyMapKeys.forEach(function (key) {
        _this6.keyMap[key].TOUCHPAD.forEach(function (touchInput, index) {
          var boundingRect = _this6.keyMap[key].TOUCHPAD[index].ELEMENT.getBoundingClientRect();
          _this6.keyMap[key].TOUCHPAD[index].BOUNDING_RECT = boundingRect;
        });
      });
    }

    // Reset all Diretion keys for a DPAD for touch Inputs

  }, {
    key: 'resetTouchDpad',
    value: function resetTouchDpad() {
      var _this7 = this;

      var dpadKeys = ['UP', 'RIGHT', 'DOWN', 'LEFT'];

      dpadKeys.forEach(function (dpadKey) {
        _this7.keyMap[dpadKey].TOUCHPAD.forEach(function (touchInput) {
          touchInput.ACTIVE = false;
        });
      });
    }

    // Function called on an event of a touchInput SVG Element

  }, {
    key: 'updateTouchpad',
    value: function updateTouchpad(keyMapKey, touchInput, event) {

      if (!event || event.type.includes('touch') && !event.touches) return;

      //event.stopPropagation();
      event.preventDefault();

      //this.debugCurrentTouch(event);

      // Check for active event types
      if (event.type === "touchstart" || event.type === "touchmove" || event.type === "mousedown") {
        // Active

        if (touchInput.TYPE === 'DPAD') {

          // Calculate for the correct key
          // Only using the first touch, since we shouldn't be having two fingers on the dpad
          var touch = void 0;
          if (event.type.includes('touch')) {
            touch = event.touches[0];
          } else if (event.type.includes('mouse')) {
            touch = event;
          }

          // Find if the horizontal or vertical influence is greater
          // Find our centers of our rectangles, and our unbiased X Y values on the rect
          var rectCenterX = (touchInput.BOUNDING_RECT.right - touchInput.BOUNDING_RECT.left) / 2;
          var rectCenterY = (touchInput.BOUNDING_RECT.bottom - touchInput.BOUNDING_RECT.top) / 2;
          var touchX = touch.clientX - touchInput.BOUNDING_RECT.left;
          var touchY = touch.clientY - touchInput.BOUNDING_RECT.top;

          // Lesson From: picoDeploy
          // Fix for shoot button causing the character to move right on multi touch error
          // + 50 for some buffer
          if (touchX > rectCenterX + touchInput.BOUNDING_RECT.width / 2 + 50) {
            // Ignore the event
            return;
          }

          // Create an additonal influece for horizontal, to make it feel better
          var horizontalInfluence = touchInput.BOUNDING_RECT.width / 8;

          // Determine if we are horizontal or vertical
          var isHorizontal = Math.abs(rectCenterX - touchX) + horizontalInfluence > Math.abs(rectCenterY - touchY);

          // Find if left or right from width, vice versa for height
          if (isHorizontal) {
            // Add a horizontal dead zone
            var deadzoneSize = touchInput.BOUNDING_RECT.width / 20;
            if (Math.abs(touchInput.BOUNDING_RECT.width / 2 - touchX) > deadzoneSize) {

              var isLeft = touchX < touchInput.BOUNDING_RECT.width / 2;

              if (isLeft && touchInput.DIRECTION === 'LEFT') {
                touchInput.ACTIVE = true;
              } else if (!isLeft && touchInput.DIRECTION === 'RIGHT') {
                touchInput.ACTIVE = true;
              } else {
                touchInput.ACTIVE = false;
              }
            }
          } else {
            var isUp = touchY < touchInput.BOUNDING_RECT.height / 2;
            if (isUp && touchInput.DIRECTION === 'UP') {
              touchInput.ACTIVE = true;
            } else if (!isUp && touchInput.DIRECTION === 'DOWN') {
              touchInput.ACTIVE = true;
            } else {
              touchInput.ACTIVE = false;
            }
          }
        }

        // Button Type
        if (touchInput.TYPE === 'BUTTON') {
          touchInput.ACTIVE = true;
        }
      } else {
        // Not active

        // Handle Dpad Type
        if (touchInput.TYPE === 'DPAD') {
          this.resetTouchDpad();
        }

        // Button Type
        if (touchInput.TYPE === 'BUTTON') {
          touchInput.ACTIVE = false;
        }
      }
    }
  }]);
  return ResponsiveGamepadService;
}();

// Exports


var ResponsiveGamepad = new ResponsiveGamepadService();


// CONCATENATED MODULE: ./lib/controller/controller.js
function controller__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


// https://github.com/torch2424/responsive-gamepad


var controller_WasmBoyControllerService = function () {
  function WasmBoyControllerService() {
    controller__classCallCheck(this, WasmBoyControllerService);

    // Our wasm instance
    this.wasmInstance = undefined;
  }

  WasmBoyControllerService.prototype.initialize = function initialize(wasmInstance) {
    this.wasmInstance = wasmInstance;

    ResponsiveGamepad.initialize();

    return src.resolve();
  };

  WasmBoyControllerService.prototype.addTouchInput = function addTouchInput(keyMapKey, element, type, direction) {
    ResponsiveGamepad.addTouchInput(keyMapKey, element, type, direction);
  };

  WasmBoyControllerService.prototype.updateController = function updateController() {

    // Create an abstracted controller state
    var controllerState = ResponsiveGamepad.getState();

    // Set the new controller state on the instance
    this.wasmInstance.exports.setJoypadState(controllerState.UP ? 1 : 0, controllerState.RIGHT ? 1 : 0, controllerState.DOWN ? 1 : 0, controllerState.LEFT ? 1 : 0, controllerState.A ? 1 : 0, controllerState.B ? 1 : 0, controllerState.SELECT ? 1 : 0, controllerState.START ? 1 : 0);

    // Return the controller state in case we need something from it
    return controllerState;
  };

  return WasmBoyControllerService;
}();

var WasmBoyController = new controller_WasmBoyControllerService();
// CONCATENATED MODULE: ./lib/memory/idb.js
// Get our idb instance, and initialize to asn idb-keyval
// This is so we don't get the default keyval DB name. And will allow
// Parent projects to use the slimmer idb keyval
// https://www.npmjs.com/package/idb
var idb = __webpack_require__("5EQ/");

var keyval = false;

// Get our idb dPromise
if (typeof window !== 'undefined') {
  var dbPromise = idb.open('wasmboy', 1, function (upgradeDB) {
    upgradeDB.createObjectStore('keyval');
  });

  // Get our idb-keyval instance
  keyval = {
    get: function get(key) {
      return dbPromise.then(function (db) {
        return db.transaction('keyval').objectStore('keyval').get(key);
      });
    },
    set: function set(key, val) {
      return dbPromise.then(function (db) {
        var tx = db.transaction('keyval', 'readwrite');
        tx.objectStore('keyval').put(val, key);
        return tx.complete;
      });
    },
    delete: function _delete(key) {
      return dbPromise.then(function (db) {
        var tx = db.transaction('keyval', 'readwrite');
        tx.objectStore('keyval').delete(key);
        return tx.complete;
      });
    },
    clear: function clear() {
      return dbPromise.then(function (db) {
        var tx = db.transaction('keyval', 'readwrite');
        tx.objectStore('keyval').clear();
        return tx.complete;
      });
    },
    keys: function keys() {
      return dbPromise.then(function (db) {
        var tx = db.transaction('keyval');
        var keys = [];
        var store = tx.objectStore('keyval');

        // This would be store.getAllKeys(), but it isn't supported by Edge or Safari.
        // openKeyCursor isn't supported by Safari, so we fall back
        (store.iterateKeyCursor || store.iterateCursor).call(store, function (cursor) {
          if (!cursor) return;
          keys.push(cursor.key);
          cursor.continue();
        });

        return tx.complete.then(function () {
          return keys;
        });
      });
    }
  };
}

var idbKeyval = keyval;
// CONCATENATED MODULE: ./lib/memory/memory.js
var memory__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function memory__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




// Going to set the key for idbKeyval as the cartridge header.
// Then, for each cartridge, it will return an object.
// there will be a cartridgeRam Key, settings Key, and a saveState key
// Not going to make one giant object, as we want to keep idb transactions light and fast

// Declare some memory constants
var MEMORY_ADDRESSES = {
  CARTRIDGE_RAM: 0x008400,
  CARTRIDGE_ROM: 0x073800,
  WASMBOY_INTERNAL_STATE: {
    LOCATION: 0x000000,
    SIZE: 0x000400
  },
  GAMEBOY_MEMORY: {
    LOCATION: 0x000400,
    SIZE: 0x008000
  }
};

var WASMBOY_UNLOAD_STORAGE = 'WASMBOY_UNLOAD_STORAGE';

//  Will save the state in parts, to easy memory map changes:
// https://docs.google.com/spreadsheets/d/17xrEzJk5-sCB9J2mMJcVnzhbE-XH_NvczVSQH9OHvRk/edit?usp=sharing
var WASMBOY_SAVE_STATE_SCHEMA = {
  wasmBoyMemory: {
    wasmBoyInternalState: [],
    gameBoyMemory: [],
    cartridgeRam: []
  },
  date: undefined,
  name: undefined,
  isAuto: undefined

  // Private function to get the cartridge header
};var getCartridgeHeader = function getCartridgeHeader(wasmByteMemory) {

  if (!wasmByteMemory) {
    return false;
  }

  // Header is at 0x0134 - 0x014F
  // http://gbdev.gg8.se/wiki/articles/The_Cartridge_Header
  var headerLength = 0x014F - 0x0134;
  var headerArray = new Uint8Array(headerLength);
  for (var i = 0; i <= headerLength; i++) {
    // Get the CARTRIDGE_ROM + the offset to point us at the header, plus the current byte
    headerArray[i] = wasmByteMemory[MEMORY_ADDRESSES.CARTRIDGE_ROM + 0x0134 + i];
  }

  return headerArray;
};

// Private function to get the caretridge ram
var getCartridgeRam = function getCartridgeRam(wasmByteMemory) {

  if (!wasmByteMemory) {
    return false;
  }

  // Depening on the rom type, we will have different ram sizes.
  // Due memory restrictions described in:
  // https://developers.google.com/web/fundamentals/instant-and-offline/web-storage/offline-for-pwa
  // We will make sure to only store as much as we need per ROM :)

  // Similar to `initializeCartridgeType()` in `wasm/memory/memory.ts`
  // We will determine our cartridge type
  // Get our game MBC type from the cartridge header
  // http://gbdev.gg8.se/wiki/articles/The_Cartridge_Header
  var cartridgeType = wasmByteMemory[MEMORY_ADDRESSES.CARTRIDGE_ROM + 0x0147];

  var ramSize = undefined;
  if (cartridgeType === 0x00) {
    // No memory for this rom type
    return false;
  } else if (cartridgeType >= 0x01 && cartridgeType <= 0x03) {
    // MBC1 32KB of Ram
    ramSize = 0x8000;
  } else if (cartridgeType >= 0x05 && cartridgeType <= 0x06) {
    // MBC2 512X4 Bytes, 2KB
    ramSize = 0x800;
  } else if (cartridgeType >= 0x0F && cartridgeType <= 0x13) {
    // MBC3 32KB of Ram
    ramSize = 0x8000;
  } else if (cartridgeType >= 0x19 && cartridgeType <= 0x1E) {
    // MBC5 128KB of Ram
    ramSize = 0x20000;
  }

  if (!ramSize) {
    return false;
  }

  // Finally fill our cartridgeRam from the ram in memory
  var cartridgeRam = new Uint8Array(ramSize);

  for (var i = 0; i < ramSize; i++) {
    cartridgeRam[i] = wasmByteMemory[MEMORY_ADDRESSES.CARTRIDGE_RAM + i];
  }

  return cartridgeRam;
};

// Function to return a save state of the current memory
var getSaveState = function getSaveState(wasmByteMemory) {
  // Simply read up to: 0x0083FF,
  // then append our catridge ram
  var cartridgeRam = getCartridgeRam(wasmByteMemory);

  var wasmBoyInternalState = new Uint8Array(MEMORY_ADDRESSES.WASMBOY_INTERNAL_STATE.SIZE);
  var gameBoyMemory = new Uint8Array(MEMORY_ADDRESSES.GAMEBOY_MEMORY.SIZE);

  for (var i = 0; i < MEMORY_ADDRESSES.WASMBOY_INTERNAL_STATE.SIZE; i++) {
    wasmBoyInternalState[i] = wasmByteMemory[i + MEMORY_ADDRESSES.WASMBOY_INTERNAL_STATE.LOCATION];
  }

  for (var _i = 0; _i < MEMORY_ADDRESSES.GAMEBOY_MEMORY.SIZE; _i++) {
    gameBoyMemory[_i] = wasmByteMemory[_i + MEMORY_ADDRESSES.GAMEBOY_MEMORY.LOCATION];
  }

  var saveState = memory__extends({}, WASMBOY_SAVE_STATE_SCHEMA);

  saveState.wasmBoyMemory.wasmBoyInternalState = wasmBoyInternalState;
  saveState.wasmBoyMemory.gameBoyMemory = gameBoyMemory;
  saveState.wasmBoyMemory.cartridgeRam = cartridgeRam;
  saveState.date = Date.now();

  return saveState;
};

var loadSaveState = function loadSaveState(wasmByteMemory, saveState) {

  for (var i = 0; i < MEMORY_ADDRESSES.WASMBOY_INTERNAL_STATE.SIZE; i++) {
    wasmByteMemory[i + MEMORY_ADDRESSES.WASMBOY_INTERNAL_STATE.LOCATION] = saveState.wasmBoyMemory.wasmBoyInternalState[i];
  }

  for (var _i2 = 0; _i2 < MEMORY_ADDRESSES.GAMEBOY_MEMORY.SIZE; _i2++) {
    wasmByteMemory[_i2 + MEMORY_ADDRESSES.GAMEBOY_MEMORY.LOCATION] = saveState.wasmBoyMemory.gameBoyMemory[_i2];
  }

  for (var _i3 = 0; _i3 < saveState.wasmBoyMemory.cartridgeRam.length; _i3++) {
    wasmByteMemory[_i3 + MEMORY_ADDRESSES.CARTRIDGE_RAM] = saveState.wasmBoyMemory.cartridgeRam[_i3];
  }

  return true;
};

var memory_WasmBoyMemoryService = function () {
  function WasmBoyMemoryService() {
    memory__classCallCheck(this, WasmBoyMemoryService);

    this.wasmInstance = undefined;
    this.wasmByteMemory = undefined;
    this.loadedCartridgeMemoryState = {
      ROM: false,
      RAM: false
    };
  }

  WasmBoyMemoryService.prototype.initialize = function initialize(wasmInstance, wasmByteMemory, includeBootRom) {
    var _this = this;

    this.wasmInstance = wasmInstance;
    this.wasmByteMemory = wasmByteMemory;

    // Set listeners to ensure we save our cartridge ram before closing
    window.addEventListener("beforeunload", function () {
      // Need to add a retrun value, and force all code in the block to be sync
      // https://stackoverflow.com/questions/7255649/window-onbeforeunload-not-working
      // http://vaughnroyko.com/idbonbeforeunload/
      // https://bugzilla.mozilla.org/show_bug.cgi?id=870645

      // Solution:
      // ~~Try to force sync: https://www.npmjs.com/package/deasync~~ Didn't work, requires fs
      // Save to local storage, and pick it back up in init: https://bugs.chromium.org/p/chromium/issues/detail?id=144862

      // TODO: Ensure that reloading without loading the game rom, and not the game ram will overwrite our saved ram

      // Get our cartridge ram and header
      var header = getCartridgeHeader(_this.wasmByteMemory);
      var cartridgeRam = getCartridgeRam(_this.wasmByteMemory);

      // Get our save state, and un type our arrays
      var saveState = getSaveState(_this.wasmByteMemory);
      var saveStateMemoryKeys = Object.keys(saveState.wasmBoyMemory);
      for (var i = 0; i < saveStateMemoryKeys.length; i++) {
        saveState.wasmBoyMemory[saveStateMemoryKeys[i]] = Array.prototype.slice.call(saveState.wasmBoyMemory[saveStateMemoryKeys[i]]);
      }

      // Set isAuto
      saveState.isAuto = true;

      // Need to vonert types arrays, and back, or selse wll get indexed JSON
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays
      localStorage.setItem(WASMBOY_UNLOAD_STORAGE, JSON.stringify({
        header: Array.prototype.slice.call(header),
        cartridgeRam: Array.prototype.slice.call(cartridgeRam),
        saveState: saveState
      }));

      return null;
    }, false);

    // Load any unloaded storage in our localStorage
    var unloadStorage = localStorage.getItem(WASMBOY_UNLOAD_STORAGE);
    if (unloadStorage) {
      var unloadStorageObject = JSON.parse(unloadStorage);
      localStorage.removeItem(WASMBOY_UNLOAD_STORAGE);

      var header = new Uint8Array(unloadStorageObject.header);
      var cartridgeRam = new Uint8Array(unloadStorageObject.cartridgeRam);

      // Get our save state, and re-type our array
      var saveState = unloadStorageObject.saveState;
      if (saveState) {
        var saveStateMemoryKeys = Object.keys(saveState.wasmBoyMemory);
        for (var i = 0; i < saveStateMemoryKeys.length; i++) {
          saveState.wasmBoyMemory[saveStateMemoryKeys[i]] = new Uint8Array(saveState.wasmBoyMemory[saveStateMemoryKeys[i]]);
        }
      }

      this.saveCartridgeRam(header, cartridgeRam).then(function () {
        _this.saveState(header, saveState).then(function () {
          return src.resolve();
        }).catch(function (error) {
          return src.reject(error);
        });
      }).catch(function (error) {
        return src.reject(error);
      });
    } else {
      return src.resolve();
    }
  };

  WasmBoyMemoryService.prototype.initializeHeadless = function initializeHeadless(wasmInstance, wasmByteMemory) {
    this.wasmInstance = wasmInstance;
    this.wasmByteMemory = wasmByteMemory;
  };

  WasmBoyMemoryService.prototype.getLoadedCartridgeMemoryState = function getLoadedCartridgeMemoryState() {
    return this.loadedCartridgeMemoryState;
  };

  WasmBoyMemoryService.prototype.clearMemory = function clearMemory() {
    // Clear Wasm memory
    // https://docs.google.com/spreadsheets/d/17xrEzJk5-sCB9J2mMJcVnzhbE-XH_NvczVSQH9OHvRk/edit?usp=sharing
    for (var i = 0; i <= this.wasmByteMemory.length; i++) {
      this.wasmByteMemory[i] = 0;
    }

    this.loadedCartridgeMemoryState.ROM = false;
    this.loadedCartridgeMemoryState.RAM = false;
  };

  WasmBoyMemoryService.prototype.loadCartridgeRom = function loadCartridgeRom(gameBytes, bootRom) {

    // Load the game data into actual memory
    for (var i = 0; i < gameBytes.length; i++) {
      if (gameBytes[i]) {
        this.wasmByteMemory[MEMORY_ADDRESSES.CARTRIDGE_ROM + i] = gameBytes[i];
      }
    }

    // TODO: Handle getting a boot rom
    this.wasmInstance.exports.initialize(0);

    this.loadedCartridgeMemoryState.ROM = true;
  };

  // Function to save the cartridge ram
  // This emulates the cartridge having a battery to
  // Keep things like Pokemon Save data in memory
  // Also allows passing in a a Uint8Array header and ram to be set manually


  WasmBoyMemoryService.prototype.saveCartridgeRam = function saveCartridgeRam(passedHeader, passedCartridgeRam) {
    var _this2 = this;

    return new src(function (resolve, reject) {
      // Get the entire header in byte memory
      // Each version of a rom can have similar title and checksums
      // Therefore comparing all of it should help with this :)
      // https://drive.google.com/file/d/0B7y-o-Uytiv9OThXWXFCM1FPbGs/view
      var header = void 0;
      var cartridgeRam = void 0;
      if (passedHeader && passedCartridgeRam) {
        header = passedHeader;
        cartridgeRam = passedCartridgeRam;
      } else {
        header = getCartridgeHeader(_this2.wasmByteMemory);
        cartridgeRam = getCartridgeRam(_this2.wasmByteMemory);
      }

      if (!header || !cartridgeRam) {
        console.error('Error parsing the cartridgeRam or cartridge header', header, cartridgeRam);
        reject('Error parsing the cartridgeRam or cartridge header');
      }

      // Get our cartridge object
      idbKeyval.get(header).then(function (cartridgeObject) {

        if (!cartridgeObject) {
          cartridgeObject = {};
        }

        // Set the cartridgeRam to our cartridgeObject
        cartridgeObject.cartridgeRam = cartridgeRam;

        idbKeyval.set(header, cartridgeObject).then(function () {
          resolve();
        }).catch(function (error) {
          reject(error);
        });
      }).catch(function (error) {
        reject(error);
      });
    });
  };

  // function to load the cartridge ram
  // opposite of above


  WasmBoyMemoryService.prototype.loadCartridgeRam = function loadCartridgeRam() {
    var _this3 = this;

    return new src(function (resolve, reject) {
      // Get the entire header in byte memory
      // Each version of a rom can have similar title and checksums
      // Therefore comparing all of it should help with this :)
      // https://drive.google.com/file/d/0B7y-o-Uytiv9OThXWXFCM1FPbGs/view
      var header = getCartridgeHeader(_this3.wasmByteMemory);

      if (!header) {
        reject('Error parsing the cartridge header');
      }

      idbKeyval.get(header).then(function (cartridgeObject) {

        if (!cartridgeObject || !cartridgeObject.cartridgeRam) {
          resolve();
          return;
        }

        // Set the cartridgeRam
        for (var i = 0; i < cartridgeObject.cartridgeRam.length; i++) {
          _this3.wasmByteMemory[MEMORY_ADDRESSES.CARTRIDGE_RAM + i] = cartridgeObject.cartridgeRam[i];
        }
        _this3.loadedCartridgeMemoryState.RAM = true;
        resolve();
      }).catch(function (error) {
        reject(error);
      });
    });
  };

  // Function to save the state to the indexeddb


  WasmBoyMemoryService.prototype.saveState = function saveState(passedHeader, passedSaveState) {
    var _this4 = this;

    return new src(function (resolve, reject) {

      // Save our internal wasmboy state to memory
      _this4.wasmInstance.exports.saveState();

      // Get our save state
      var saveState = void 0;
      var header = void 0;
      if (passedHeader && passedSaveState) {
        saveState = passedSaveState;
        header = passedHeader;
      } else {
        saveState = getSaveState(_this4.wasmByteMemory);
        header = getCartridgeHeader(_this4.wasmByteMemory);
      }

      if (!header) {
        reject('Error parsing the cartridge header');
      }

      idbKeyval.get(header).then(function (cartridgeObject) {

        if (!cartridgeObject) {
          cartridgeObject = {};
        }

        if (!cartridgeObject.saveStates) {
          cartridgeObject.saveStates = [];
        }

        cartridgeObject.saveStates.push(saveState);

        idbKeyval.set(header, cartridgeObject).then(function () {
          resolve();
        }).catch(function (error) {
          reject(error);
        });
      }).catch(function (error) {
        reject(error);
      });
    });
  };

  WasmBoyMemoryService.prototype.loadState = function loadState(saveStateIndex) {
    var _this5 = this;

    return new src(function (resolve, reject) {

      var header = getCartridgeHeader(_this5.wasmByteMemory);

      if (!header) {
        reject('Error parsing the cartridge header');
      }

      idbKeyval.get(header).then(function (cartridgeObject) {

        if (!cartridgeObject || !cartridgeObject.saveStates) {
          reject('No Cartridge Object or saveStates array found');
          return;
        }

        // Get a default saveStateIndex
        if (!saveStateIndex) {
          // Default to the latest save state, or but attempt to default to the first non-auto save state
          saveStateIndex = cartridgeObject.saveStates.length - 1;
          for (var i = cartridgeObject.saveStates.length - 1; i >= 0; i--) {
            if (!cartridgeObject.saveStates[i].isAuto) {
              saveStateIndex = i;
              i = -1;
            }
          }
        }
        loadSaveState(_this5.wasmByteMemory, cartridgeObject.saveStates[saveStateIndex]);

        // Load back out internal wasmboy state from memory
        _this5.wasmInstance.exports.loadState();

        resolve();
      }).catch(function (error) {
        reject(error);
      });
    });
  };

  // Function to return the current cartridge object


  WasmBoyMemoryService.prototype.getCartridgeObject = function getCartridgeObject() {
    var header = getCartridgeHeader(this.wasmByteMemory);
    return idbKeyval.get(header);
  };

  return WasmBoyMemoryService;
}();

// Create a singleton to export


var WasmBoyMemory = new memory_WasmBoyMemoryService();
// CONCATENATED MODULE: ./lib/wasmboy.js
function wasmboy__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }









// requestAnimationFrame() for headless mode
var raf = __webpack_require__("ommR");

// Constant to define wasm memory size on instantiation
var WASMBOY_MEMORY_SIZE = 0x87FFFF;

// Function to get performance timestamp
// This is to support node vs. Browser
var getPerformanceTimestamp = function getPerformanceTimestamp() {
  if (typeof window !== 'undefined') {
    return performance.now();
  }
  return Date.now();
};

var wasmboy_WasmBoyLib = function () {

  // Start the request to our wasm module
  function WasmBoyLib() {
    wasmboy__classCallCheck(this, WasmBoyLib);

    this.wasmInstance = undefined;
    this.wasmByteMemory = undefined;
    this.canvasElement = undefined;
    this.paused = false;
    this.ready = false;
    this.renderId = false;
    this.updateId = false;

    // Options, can't be undefined
    this.headless = false;
    this.isAudioEnabled = true;
    this.gameboyFrameRate = 60;
    this.gameboyFpsCap = 60;
    this.fpsTimeStamps = [];
    this.frameSkip = 0;
    this.frameSkipCounter = 0;

    // Options for wasm
    this.audioBatchProcessing = false;
    this.graphicsBatchProcessing = false;
    this.timersBatchProcessing = false;
    this.graphicsDisableScanlineRendering = false;
    this.audioAccumulateSamples = false;

    // Debug code
    this.logRequest = false;
    this.performanceTimestamps = {};
  }

  // Function to initialize our Wasmboy


  WasmBoyLib.prototype.initialize = function initialize(canvasElement, wasmBoyOptions) {
    var _this = this;

    // Get our canvas elements
    this.canvasElement = canvasElement;

    // Set our defaults
    this.headless = false;
    this.isAudioEnabled = true;
    this.gameboyFrameRate = 60;
    this.gameboyFpsCap = 60;
    this.fpsTimeStamps = [];
    this.frameSkip = 0;
    this.frameSkipCounter = 0;

    // Defaults for wasm
    this.audioBatchProcessing = false;
    this.graphicsBatchProcessing = false;
    this.timersBatchProcessing = false;
    this.graphicsDisableScanlineRendering = false;
    this.audioAccumulateSamples = false;

    // set our options
    if (wasmBoyOptions) {

      // Set all options
      Object.keys(wasmBoyOptions).forEach(function (key) {
        if (_this[key] !== undefined) {
          _this[key] = wasmBoyOptions[key];
        }
      });

      // Aliases
      // Gameboy Speed / Framerate
      if (wasmBoyOptions.gameboySpeed) {
        var gameboyFrameRate = Math.floor(wasmBoyOptions.gameboySpeed * 60);
        if (gameboyFrameRate <= 0) {
          gameboyFrameRate = 1;
        }
        this.gameboyFrameRate = gameboyFrameRate;
      }

      // Check some conflicting variables
      if (this.gameboyFrameRate > this.gameboyFpsCap) {
        this.gameboyFrameRate = this.gameboyFpsCap;
      }
    }
  };

  // Finish request for wasm module, and fetch game


  WasmBoyLib.prototype.loadGame = function loadGame(game) {
    var _this2 = this;

    // Getting started with wasm
    // http://webassembly.org/getting-started/js-api/
    this.ready = false;
    return new src(function (resolve, reject) {

      // Pause the game in case it was running
      _this2.pauseGame().then(function () {
        // Get our promises
        var initPromises = [_this2._fetchGameAsByteArray(game), _this2._getWasmInstance()];

        if (!_this2.headless && WasmBoyMemory.getLoadedCartridgeMemoryState().RAM) {
          initPromises.push(WasmBoyMemory.saveCartridgeRam());
        }

        src.all(initPromises).then(function (responses) {

          // Check if we are running headless
          if (_this2.headless) {

            WasmBoyMemory.initializeHeadless(_this2.wasmInstance, _this2.wasmByteMemory);

            // Clear what is currently in memory, then load the cartridge memory
            WasmBoyMemory.clearMemory();

            // TODO: Handle passing a boot rom
            WasmBoyMemory.loadCartridgeRom(responses[0], false);
            _this2.ready = true;

            resolve();
          } else {
            // Finally intialize all of our services
            // Initialize our services
            src.all([WasmBoyGraphics.initialize(_this2.canvasElement, _this2.wasmInstance, _this2.wasmByteMemory), WasmBoyAudio.initialize(_this2.wasmInstance, _this2.wasmByteMemory), WasmBoyController.initialize(_this2.wasmInstance), WasmBoyMemory.initialize(_this2.wasmInstance, _this2.wasmByteMemory)]).then(function () {

              // Clear what is currently in memory, then load the carttridge memory
              WasmBoyMemory.clearMemory();

              // TODO: Handle passing a boot rom
              WasmBoyMemory.loadCartridgeRom(responses[0], false);

              // Load the game's cartridge ram
              WasmBoyMemory.loadCartridgeRam().then(function () {
                _this2.ready = true;
                resolve();
              }).catch(function (error) {
                reject(error);
              });
            }).catch(function (error) {
              reject(error);
            });
          }
        }).catch(function (error) {
          reject(error);
        });
      });
    });
  };

  // Function to start the game


  WasmBoyLib.prototype.startGame = function startGame() {
    return this.resumeGame();
  };

  WasmBoyLib.prototype.resumeGame = function resumeGame() {
    var _this3 = this;

    if (!this.ready) {
      return false;
    }

    // Start our update and render process
    // Can't time by raf, as raf is not garunteed to be 60fps
    // Need to run like a web game, where updates to the state of the core are done a 60 fps
    // but we can render whenever the user would actually see the changes browser side in a raf
    // https://developer.mozilla.org/en-US/docs/Games/Anatomy
    this._emulatorUpdate();

    // Undo any pause
    this.paused = false;

    if (!this.updateId) {

      var intervalRate = 1000 / this.gameboyFrameRate;

      // Reset the frameTimeStamps
      this.fpsTimeStamps = [];

      // 1000 / 60 = 60fps
      this.updateId = setInterval(function () {
        _this3._emulatorUpdate();
      }, intervalRate);
    }

    if (!this.renderId && !this.headless) {
      this.renderId = raf(function () {
        _this3._emulatorRender();
      });
    }
  };

  // Function to pause the game, returns a promise
  // Will try to wait until the emulation sync is returned, and then will
  // Allow any actions


  WasmBoyLib.prototype.pauseGame = function pauseGame() {
    this.paused = true;

    // Cancel our update and render loop
    raf.cancel(this.renderId);
    this.renderId = false;
    clearInterval(this.updateId);
    this.updateId = false;

    // Wait a raf to ensure everything is done
    return new src(function (resolve) {
      raf(function () {
        resolve();
      });
    });
  };

  // http://www.growingwiththeweb.com/2017/12/fast-simple-js-fps-counter.html


  WasmBoyLib.prototype.getFps = function getFps() {
    return this.fpsTimeStamps.length;
  };

  // Function to return the current game object in memory


  WasmBoyLib.prototype.getWasmBoyMemoryForLoadedGame = function getWasmBoyMemoryForLoadedGame() {
    return WasmBoyMemory.getCartridgeObject();
  };

  WasmBoyLib.prototype.saveState = function saveState() {
    var _this4 = this;

    // Pause the game in case it was running
    this.pauseGame().then(function () {
      // Save our state to wasmMemory
      WasmBoyMemory.saveState().then(function () {
        _this4.resumeGame();
      });
    });
  };

  WasmBoyLib.prototype.loadState = function loadState() {
    var _this5 = this;

    // Pause the game in case it was running, and set to not ready
    this.pauseGame().then(function () {
      WasmBoyMemory.loadState().then(function () {
        _this5.resumeGame();
      });
    });
  };

  // Function to run an update on the emulator itself


  WasmBoyLib.prototype._emulatorUpdate = function _emulatorUpdate() {

    // Don't run if paused
    if (this.paused) {
      return true;
    }

    // Track our Fps
    // http://www.growingwiththeweb.com/2017/12/fast-simple-js-fps-counter.html
    var currentHighResTime = getPerformanceTimestamp();
    while (this.fpsTimeStamps[0] < currentHighResTime - 1000) {
      this.fpsTimeStamps.shift();
    }

    // Framecap at 60fps
    var currentFps = this.getFps();
    if (currentFps >= 60) {
      return true;
    } else {
      this.fpsTimeStamps.push(currentHighResTime);
    }

    // If audio is enabled, sync by audio
    // Check how many samples we have, and if we are getting too ahead, need to skip the update
    // Magic number is from experimenting and this seems to go good
    // TODO: Make this a preference, or calculate from perfrmance.now()
    if (this.isAudioEnabled && !this.headless && this.wasmInstance.exports.getAudioQueueIndex() > 12000) {
      // TODO: Waiting for time stretching to resolve may be causing this
      return true;
    }

    // Update (Execute a frame)
    var response = this.wasmInstance.exports.update();

    // Handle our update() response
    if (response > 0) {
      // See: wasm/cpu/opcodes update() function
      // 1 = render a frame
      // 2 = replace boot rom
      // TODO: Find what should go here
      switch (response) {
        case 1:
        case 2:
          break;
      }

      return true;
    } else {
      console.log('Wasmboy Crashed!');
      console.log('Program Counter: 0x' + this.wasmInstance.exports.getProgramCounter().toString(16));
      console.log('Opcode: 0x' + this.wasmByteMemory[this.wasmInstance.exports.getProgramCounter()].toString(16));
      this.pauseGame();
      return false;
    }
  };

  // Function to render our emulator output


  WasmBoyLib.prototype._emulatorRender = function _emulatorRender() {
    var _this6 = this;

    // Don't run if paused
    if (this.paused) {
      return true;
    }

    // Check if we have frameskip
    var shouldSkipRenderingFrame = false;
    if (this.frameSkip && this.frameSkip > 0) {
      this.frameSkipCounter++;

      if (this.frameSkipCounter < this.frameSkip) {
        shouldSkipRenderingFrame = true;
      } else {
        this.frameSkipCounter = 0;
      }
    }

    // Render the display
    if (!shouldSkipRenderingFrame) {
      WasmBoyGraphics.renderFrame();
    }

    // Play the audio
    if (this.isAudioEnabled) {
      WasmBoyAudio.playAudio(this.getFps());
    }

    // Update our controller
    WasmBoyController.updateController();

    this.renderId = raf(function () {
      _this6._emulatorRender();
    });
  };

  // Private funciton to returna promise to our wasmModule
  // This allow will re-load the wasm module, that way we can obtain a new wasm instance
  // For each time we load a game


  WasmBoyLib.prototype._getWasmInstance = function _getWasmInstance() {
    var _this7 = this;

    return new src(function (resolve, reject) {

      // Get our wasm instance from our wasmModule
      var memoryBase = index_untouched_default()({
        env: {
          log: function log(message, arg0, arg1, arg2, arg3, arg4, arg5) {
            // Grab our string
            var len = new Uint32Array(_this7.wasmInstance.exports.memory.buffer, message, 1)[0];
            var str = String.fromCharCode.apply(null, new Uint16Array(_this7.wasmInstance.exports.memory.buffer, message + 4, len));
            if (arg0) str = str.replace("$0", arg0);
            if (arg1) str = str.replace("$1", arg1);
            if (arg2) str = str.replace("$2", arg2);
            if (arg3) str = str.replace("$3", arg3);
            if (arg4) str = str.replace("$4", arg4);
            if (arg5) str = str.replace("$5", arg5);

            console.log("[WasmBoy] " + str);
          },
          hexLog: function hexLog(arg0, arg1, arg2, arg3, arg4, arg5) {

            if (!_this7.logRequest) {

              // Comment this line to disable throttle
              _this7.logRequest = true;

              // Grab our arguments, and log as hex
              var logString = '[WasmBoy]';
              if (arg0) logString += ' 0x' + arg0.toString(16) + ' ';
              if (arg1) logString += ' 0x' + arg1.toString(16) + ' ';
              if (arg2) logString += ' 0x' + arg2.toString(16) + ' ';
              if (arg3) logString += ' 0x' + arg3.toString(16) + ' ';
              if (arg4) logString += ' 0x' + arg4.toString(16) + ' ';
              if (arg5) logString += ' 0x' + arg5.toString(16) + ' ';

              setTimeout(function () {
                console.log(logString);
                _this7.logRequest = false;
              }, 250);
            }
          },
          performanceTimestamp: function performanceTimestamp(id, value) {
            if (!_this7.performanceTimestamps[id]) {
              _this7.performanceTimestamps[id] = {};
              _this7.performanceTimestamps[id].throttle = false;
              _this7.performanceTimestamps[id].totalTime = 0;
              _this7.performanceTimestamps[id].value = 0;
            }
            if (!_this7.performanceTimestamps[id].throttle) {
              if (_this7.performanceTimestamps[id].timestamp) {
                // sleep a millisecond for hopefully more accurate times
                var endTime = getPerformanceTimestamp();
                var timeDifference = endTime - _this7.performanceTimestamps[id].timestamp;
                _this7.performanceTimestamps[id].throttle = true;
                _this7.performanceTimestamps[id].totalTime += timeDifference;
                console.log('[WasmBoy] Performance Timestamp. ID: ' + id + ', Time: ' + timeDifference + ', value difference: ' + (value - _this7.performanceTimestamps[id].value) + ', total time: ' + _this7.performanceTimestamps[id].totalTime);
                _this7.performanceTimestamps[id].timestamp = false;
                setTimeout(function () {
                  _this7.performanceTimestamps[id].throttle = false;
                }, 100);
              } else {
                _this7.performanceTimestamps[id].timestamp = getPerformanceTimestamp();
                _this7.performanceTimestamps[id].value = value;
              }
            }
          }
        }
      }).then(function (instantiatedWasm) {
        // Using || since rollup and webpack wasm loaders will return differently
        var instance = _this7.wasmInstance = instantiatedWasm.instance || instantiatedWasm;
        var module = instantiatedWasm.module;

        // Get our memory from our wasm instance
        var memory = instance.exports.memory;

        // Grow memory to wasmboy memory map
        // https://docs.google.com/spreadsheets/d/17xrEzJk5-sCB9J2mMJcVnzhbE-XH_NvczVSQH9OHvRk/edit?usp=sharing
        // TODO: Scale Memory as needed with Cartridge size
        if (memory.buffer.byteLength < WASMBOY_MEMORY_SIZE) {
          memory.grow(136);
        }

        // Will stay in sync
        _this7.wasmByteMemory = new Uint8Array(_this7.wasmInstance.exports.memory.buffer);

        // Run our initialization on the core
        _this7.wasmInstance.exports.config(_this7.audioBatchProcessing ? 1 : 0, _this7.graphicsBatchProcessing ? 1 : 0, _this7.timersBatchProcessing ? 1 : 0, _this7.graphicsDisableScanlineRendering ? 1 : 0, _this7.audioAccumulateSamples ? 1 : 0);
        resolve(_this7.wasmInstance);
      });
    });
  };

  // Private function to fetch a game


  WasmBoyLib.prototype._fetchGameAsByteArray = function _fetchGameAsByteArray(game) {
    return new src(function (resolve, reject) {
      if (ArrayBuffer.isView(game) && game.constructor === Uint8Array) {
        // Simply resolve with the input
        resolve(game);
        return;
      } else if (typeof game === 'object' && game.size) {
        // Read the file object
        // https://www.javascripture.com/FileReader#readAsArrayBuffer_Blob
        var fileReader = new FileReader();
        fileReader.onload = function () {
          var byteArray = new Uint8Array(fileReader.result);
          resolve(byteArray);
        };
        fileReader.readAsArrayBuffer(game);
      } else {
        // Fetch the file
        unfetch_es(game).then(function (blob) {
          if (!blob.ok) {
            return src.reject(blob);
          }

          return blob.arrayBuffer();
        }).then(function (bytes) {
          var byteArray = new Uint8Array(bytes);
          resolve(byteArray);
        }).catch(function (error) {
          reject(error);
        });
      }
    });
  };

  return WasmBoyLib;
}();

var WasmBoy = new wasmboy_WasmBoyLib();



// TODO: Remove this, and consolidate public api in Wasmboy

// CONCATENATED MODULE: ./debugger/wasmboySystemControls.js


function wasmboySystemControls__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var wasmboySystemControls_WasmBoySystemControls = function (_Component) {
  _inherits(WasmBoySystemControls, _Component);

  function WasmBoySystemControls(props) {
    wasmboySystemControls__classCallCheck(this, WasmBoySystemControls);

    // set our state to if we are initialized or not
    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {};

    var _fpsCounter = void 0;
    _fpsCounter = function fpsCounter() {
      _this.setState({
        fps: props.wasmboy.getFps()
      });
      setTimeout(function () {
        _fpsCounter();
      }, 500);
    };
    _fpsCounter();
    return _this;
  }

  // Allow passing a file
  // https://gist.github.com/AshikNesin/e44b1950f6a24cfcd85330ffc1713513


  WasmBoySystemControls.prototype.loadGame = function loadGame(wasmboy, event) {
    wasmboy.loadGame(event.target.files[0]).then(function () {
      console.log('wasmboy Ready!');
    });
  };

  WasmBoySystemControls.prototype.render = function render(props) {
    var _this2 = this;

    return Object(preact_min["h"])(
      'div',
      { className: 'system-controls' },
      Object(preact_min["h"])('input', { type: 'file', onChange: function onChange(event) {
          _this2.loadGame(props.wasmboy, event);
        } }),
      Object(preact_min["h"])(
        'button',
        { onclick: function onclick() {
            props.wasmboy.startGame();
          } },
        'Start Game'
      ),
      Object(preact_min["h"])(
        'button',
        { onclick: function onclick() {
            props.wasmboy.pauseGame();
          } },
        'Pause Game'
      ),
      Object(preact_min["h"])(
        'button',
        { onclick: function onclick() {
            props.wasmboy.resumeGame();
          } },
        'Resume Game'
      ),
      Object(preact_min["h"])(
        'button',
        { onclick: function onclick() {
            props.wasmboy.saveState();
          } },
        'Save State'
      ),
      Object(preact_min["h"])(
        'button',
        { onclick: function onclick() {
            props.wasmboy.loadState();
          } },
        'Load State'
      ),
      Object(preact_min["h"])(
        'div',
        null,
        'Gameboy FPS: ',
        this.state.fps
      )
    );
  };

  return WasmBoySystemControls;
}(preact_min["Component"]);
// CONCATENATED MODULE: ./debugger/numberBaseTable.js


function numberBaseTable__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function numberBaseTable__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function numberBaseTable__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



// Component that takes in a JSON object, where the Keys are the column name,
// And the Rows will represent each base value of the number in the value of the key

var _ref = Object(preact_min["h"])('div', null);

var _ref2 = Object(preact_min["h"])('div', null);

var _ref3 = Object(preact_min["h"])(
  'th',
  null,
  'Value Base'
);

var _ref4 = Object(preact_min["h"])(
  'td',
  null,
  'Hexadecimal:'
);

var _ref5 = Object(preact_min["h"])(
  'td',
  null,
  'Decimal:'
);

var _ref6 = Object(preact_min["h"])(
  'td',
  null,
  'Binary:'
);

var numberBaseTable_NumberBaseTable = function (_Component) {
  numberBaseTable__inherits(NumberBaseTable, _Component);

  function NumberBaseTable() {
    numberBaseTable__classCallCheck(this, NumberBaseTable);

    var _this = numberBaseTable__possibleConstructorReturn(this, _Component.call(this));

    _this.state = {
      object: {}
    };
    return _this;
  }

  NumberBaseTable.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    this.setState({
      object: nextProps.object
    });
  };

  // Modifed from: https://ourcodeworld.com/articles/read/380/how-to-convert-a-binary-string-into-a-readable-string-and-vice-versa-with-javascript


  NumberBaseTable.prototype.numberToBinaryString = function numberToBinaryString(number) {
    // Simply Convert each place in hex to binary
    var hexString = number.toString(16);

    var binaryString = '';
    for (var i = 0; i < hexString.length; i++) {
      var valueAtIncrementer = parseInt(hexString.charAt(i), 16).toString(2);
      var paddedValueAtIncrementer = valueAtIncrementer;
      // Pad to 4 bits
      while (paddedValueAtIncrementer.length < 4) {
        paddedValueAtIncrementer = '0' + paddedValueAtIncrementer;
      }

      binaryString += paddedValueAtIncrementer;

      if (i !== hexString.length - 1) {
        binaryString += ' ';
      }
    }

    return binaryString;
  };

  NumberBaseTable.prototype.getTableCellsForValueWithBase = function getTableCellsForValueWithBase(valueBase) {
    var _this2 = this;

    var tableCells = [];
    Object.keys(this.state.object).forEach(function (key) {
      if (valueBase === 16) {
        tableCells.push(Object(preact_min["h"])(
          'td',
          null,
          '0x',
          _this2.state.object[key].toString(16)
        ));
      } else if (valueBase === 2) {
        tableCells.push(Object(preact_min["h"])(
          'td',
          null,
          _this2.numberToBinaryString(_this2.state.object[key])
        ));
      } else {
        tableCells.push(Object(preact_min["h"])(
          'td',
          null,
          _this2.state.object[key]
        ));
      }
    });

    return tableCells;
  };

  NumberBaseTable.prototype.getTableCellsForObjectKeys = function getTableCellsForObjectKeys() {
    if (!this.state.object) {
      return _ref;
    }

    var objectKeysAsTableCells = [];

    Object.keys(this.state.object).forEach(function (key) {
      objectKeysAsTableCells.push(Object(preact_min["h"])(
        'th',
        null,
        key
      ));
    });

    return objectKeysAsTableCells;
  };

  NumberBaseTable.prototype.render = function render() {

    if (!this.state.object || Object.keys(this.state.object).length < 1) {
      return _ref2;
    }

    return Object(preact_min["h"])(
      'div',
      { className: 'number-base-table-container' },
      Object(preact_min["h"])(
        'table',
        { className: 'number-base-table' },
        Object(preact_min["h"])(
          'tr',
          null,
          _ref3,
          this.getTableCellsForObjectKeys()
        ),
        Object(preact_min["h"])(
          'tr',
          null,
          _ref4,
          this.getTableCellsForValueWithBase(16)
        ),
        Object(preact_min["h"])(
          'tr',
          null,
          _ref5,
          this.getTableCellsForValueWithBase(10)
        ),
        Object(preact_min["h"])(
          'tr',
          null,
          _ref6,
          this.getTableCellsForValueWithBase(2)
        )
      )
    );
  };

  return NumberBaseTable;
}(preact_min["Component"]);
// CONCATENATED MODULE: ./debugger/wasmboyDebugger.js
var wasmboyDebugger__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function wasmboyDebugger__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function wasmboyDebugger__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function wasmboyDebugger__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




// Constants for the gameBoyInternalMemoryLocation
var WASMBOY_MEMORY_GAMEBOY_INTERNAL_MEMORY = 0x000400;

// Function to get a value in gameboy memory, to wasmboy memory
var getWasmBoyOffsetFromGameBoyOffset = function getWasmBoyOffsetFromGameBoyOffset(gameboyOffset) {
  return gameboyOffset - 0x8000 + WASMBOY_MEMORY_GAMEBOY_INTERNAL_MEMORY;
};

var wasmboyDebugger__ref = Object(preact_min["h"])(
  'h2',
  null,
  'Debugger:'
);

var wasmboyDebugger__ref2 = Object(preact_min["h"])(
  'h3',
  null,
  'Cpu Info:'
);

var wasmboyDebugger__ref3 = Object(preact_min["h"])(
  'h3',
  null,
  'PPU Info:'
);

var wasmboyDebugger__ref4 = Object(preact_min["h"])(
  'h3',
  null,
  'Timer Info:'
);

var wasmboyDebugger__ref5 = Object(preact_min["h"])(
  'h3',
  null,
  'Interrupt Info:'
);

var wasmboyDebugger_WasmBoyDebugger = function (_Component) {
  wasmboyDebugger__inherits(WasmBoyDebugger, _Component);

  function WasmBoyDebugger() {
    wasmboyDebugger__classCallCheck(this, WasmBoyDebugger);

    // set our state to if we are initialized or not
    var _this = wasmboyDebugger__possibleConstructorReturn(this, _Component.call(this));

    _this.state = {
      cpu: {},
      ppu: {},
      timers: {},
      interrupts: {}
    };
    return _this;
  }

  WasmBoyDebugger.prototype.stepOpcode = function stepOpcode(wasmboy, wasmboyGraphics, skipDebugOutput) {
    var numberOfCycles = wasmboy.wasmInstance.exports.emulationStep();

    if (numberOfCycles <= 0) {
      console.error('Opcode not recognized! Check wasm logs.');
      this.updateDebugInfo(wasmboy);
      throw new Error();
    }

    if (skipDebugOutput) {
      return;
    }
    wasmboyGraphics.renderFrame();
    this.updateDebugInfo(wasmboy);
  };

  WasmBoyDebugger.prototype.runNumberOfOpcodes = function runNumberOfOpcodes(wasmboy, wasmboyGraphics, numberOfOpcodes, stopAtOpcode, stopOpcodeShouldHaveValue) {
    // Keep stepping until highest opcode increases
    var opcodesToRun = 2000;
    if (numberOfOpcodes) {
      opcodesToRun = numberOfOpcodes;
    }
    for (var i = 0; i < opcodesToRun; i++) {
      this.stepOpcode(wasmboy, wasmboyGraphics, true);
      if (stopAtOpcode && stopAtOpcode === wasmboy.wasmInstance.exports.getProgramCounter()) {
        if (!stopOpcodeShouldHaveValue || stopOpcodeShouldHaveValue === wasmboy.wasmByteMemory[wasmboy.wasmInstance.exports.getProgramCounter()]) {
          i = opcodesToRun;
        }
      }
    }
    wasmboyGraphics.renderFrame();
    this.updateDebugInfo(wasmboy);
  };

  WasmBoyDebugger.prototype.breakPoint = function breakPoint(wasmboy, wasmboyGraphics, skipInitialStep) {
    var _this2 = this;

    // Set our opcode breakpoint
    var breakPoint = 0x401d;

    if (!skipInitialStep) {
      this.runNumberOfOpcodes(wasmboy, wasmboyGraphics, 1, breakPoint);
    }

    if (wasmboy.wasmInstance.exports.getProgramCounter() !== breakPoint) {
      requestAnimationFrame(function () {
        _this2.runNumberOfOpcodes(wasmboy, wasmboyGraphics, 2000, breakPoint, 0x34);
        _this2.breakPoint(wasmboy, wasmboyGraphics, true);
      });
    } else {
      wasmboyGraphics.renderFrame();
      requestAnimationFrame(function () {
        _this2.updateDebugInfo(wasmboy);
        console.log('Reached Breakpoint, that satisfies test inside runNumberOfOpcodes');
      });
    }
  };

  WasmBoyDebugger.prototype.updateDebugInfo = function updateDebugInfo(wasmboy) {

    // Log our memory
    console.log('[WasmBoy Debugger] Memory:', wasmboy.wasmByteMemory);

    // Create our new state object
    var state = {
      cpu: {},
      ppu: {},
      timers: {},
      interrupts: {}
    };

    // Update CPU State
    state.cpu['Program Counter (PC)'] = wasmboy.wasmInstance.exports.getProgramCounter();
    state.cpu['Opcode at PC'] = wasmboy.wasmInstance.exports.getOpcodeAtProgramCounter();
    state.cpu['Previous Opcode'] = wasmboy.wasmInstance.exports.getPreviousOpcode();
    state.cpu['Stack Pointer'] = wasmboy.wasmInstance.exports.getStackPointer();
    state.cpu['Register A'] = wasmboy.wasmInstance.exports.getRegisterA();
    state.cpu['Register F'] = wasmboy.wasmInstance.exports.getRegisterF();
    state.cpu['Register B'] = wasmboy.wasmInstance.exports.getRegisterB();
    state.cpu['Register C'] = wasmboy.wasmInstance.exports.getRegisterC();
    state.cpu['Register D'] = wasmboy.wasmInstance.exports.getRegisterD();
    state.cpu['Register E'] = wasmboy.wasmInstance.exports.getRegisterE();
    state.cpu['Register H'] = wasmboy.wasmInstance.exports.getRegisterH();
    state.cpu['Register L'] = wasmboy.wasmInstance.exports.getRegisterL();
    state.cpu = wasmboyDebugger__extends({}, state.cpu);

    // Update PPU State
    state.ppu['Scanline Register (LY) - 0xFF44'] = wasmboy.wasmByteMemory[getWasmBoyOffsetFromGameBoyOffset(0xFF44)];
    state.ppu['LCD Status (STAT) - 0xFF41'] = wasmboy.wasmByteMemory[getWasmBoyOffsetFromGameBoyOffset(0xFF41)];
    state.ppu['LCD Control (LCDC) - 0xFF40'] = wasmboy.wasmByteMemory[getWasmBoyOffsetFromGameBoyOffset(0xFF40)];
    state.ppu['Scroll X - 0xFF43'] = wasmboy.wasmByteMemory[getWasmBoyOffsetFromGameBoyOffset(0xFF43)];
    state.ppu['Scroll Y - 0xFF42'] = wasmboy.wasmByteMemory[getWasmBoyOffsetFromGameBoyOffset(0xFF42)];
    state.ppu['Window X - 0xFF4B'] = wasmboy.wasmByteMemory[getWasmBoyOffsetFromGameBoyOffset(0xFF4B)];
    state.ppu['Window Y - 0xFF4A'] = wasmboy.wasmByteMemory[getWasmBoyOffsetFromGameBoyOffset(0xFF4A)];

    // Update Timers State
    state.timers['TIMA - 0xFF05'] = wasmboy.wasmByteMemory[getWasmBoyOffsetFromGameBoyOffset(0xFF05)];
    state.timers['TMA - 0xFF06'] = wasmboy.wasmByteMemory[getWasmBoyOffsetFromGameBoyOffset(0xFF06)];
    state.timers['TIMC/TAC - 0xFF07'] = wasmboy.wasmByteMemory[getWasmBoyOffsetFromGameBoyOffset(0xFF07)];
    state.timers['DIV/Divider Register - 0xFF04'] = wasmboy.wasmByteMemory[getWasmBoyOffsetFromGameBoyOffset(0xFF04)];

    // Update interrupts state
    if (wasmboy.wasmInstance.exports.areInterruptsEnabled()) {
      state.interrupts['Interrupt Master Switch'] = 0x01;
    } else {
      state.interrupts['Interrupt Master Switch'] = 0x00;
    }
    state.interrupts['IE/Interrupt Enabled - 0xFFFF'] = wasmboy.wasmByteMemory[getWasmBoyOffsetFromGameBoyOffset(0xFFFF)];
    state.interrupts['IF/Interrupt Request - 0xFF0F'] = wasmboy.wasmByteMemory[getWasmBoyOffsetFromGameBoyOffset(0xFF0F)];

    // Clone our state, that it is immutable and will cause change detection
    this.setState(state);
  };

  WasmBoyDebugger.prototype.render = function render(props) {
    var _this3 = this;

    return Object(preact_min["h"])(
      'div',
      null,
      wasmboyDebugger__ref,
      Object(preact_min["h"])(
        'button',
        { onclick: function onclick() {
            _this3.updateDebugInfo(props.wasmboy);
          } },
        'Update Current Debug Info'
      ),
      Object(preact_min["h"])(
        'button',
        { onclick: function onclick() {
            _this3.stepOpcode(props.wasmboy, props.wasmboyGraphics);
          } },
        'Step Opcode'
      ),
      Object(preact_min["h"])(
        'button',
        { onclick: function onclick() {
            _this3.runNumberOfOpcodes(props.wasmboy, props.wasmboyGraphics);
          } },
        'Run Hardcoded number of opcodes loop'
      ),
      Object(preact_min["h"])(
        'button',
        { onclick: function onclick() {
            _this3.breakPoint(props.wasmboy, props.wasmboyGraphics);
          } },
        'Run Until hardcoded breakpoint'
      ),
      Object(preact_min["h"])(
        'button',
        { onclick: function onclick() {
            props.wasmboyAudio.debugSaveCurrentAudioBufferToWav();
          } },
        'Save Current Audio buffer to wav'
      ),
      wasmboyDebugger__ref2,
      Object(preact_min["h"])(numberBaseTable_NumberBaseTable, { object: this.state.cpu }),
      wasmboyDebugger__ref3,
      Object(preact_min["h"])(numberBaseTable_NumberBaseTable, { object: this.state.ppu }),
      wasmboyDebugger__ref4,
      Object(preact_min["h"])(numberBaseTable_NumberBaseTable, { object: this.state.timers }),
      wasmboyDebugger__ref5,
      Object(preact_min["h"])(numberBaseTable_NumberBaseTable, { object: this.state.interrupts })
    );
  };

  return WasmBoyDebugger;
}(preact_min["Component"]);
// CONCATENATED MODULE: ./debugger/index.js


// CONCATENATED MODULE: ./index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index_App; });


function index__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function index__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function index__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var index__ref = Object(preact_min["h"])(
	'h1',
	null,
	'WasmBoy'
);

var index__ref2 = Object(preact_min["h"])(
	'div',
	{ 'class': 'wasmboy__systemControls' },
	Object(preact_min["h"])(wasmboySystemControls_WasmBoySystemControls, { wasmboy: WasmBoy })
);

var index__ref3 = Object(preact_min["h"])(
	'div',
	{ className: 'wasmboy__canvas-container' },
	Object(preact_min["h"])('canvas', { className: 'wasmboy__canvas-container__canvas' })
);

var index__ref4 = Object(preact_min["h"])(
	'div',
	{ 'class': 'wasmboy__debugger' },
	Object(preact_min["h"])(wasmboyDebugger_WasmBoyDebugger, { wasmboy: WasmBoy, wasmboyGraphics: WasmBoyGraphics, wasmboyAudio: WasmBoyAudio })
);

var index__ref5 = Object(preact_min["h"])(
	'svg',
	{ id: 'gamepadDpad', height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
	Object(preact_min["h"])('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
	Object(preact_min["h"])('path', { d: 'M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z' })
);

var index__ref6 = Object(preact_min["h"])(
	'svg',
	{ id: 'gamepadStart', height: '24', viewBox: '6 6 12 12', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
	Object(preact_min["h"])('path', { d: 'M19 13H5v-2h14v2z' }),
	Object(preact_min["h"])('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
	Object(preact_min["h"])(
		'text',
		{ x: '21', y: '55', transform: 'scale(0.325)' },
		'Start'
	)
);

var _ref7 = Object(preact_min["h"])(
	'svg',
	{ id: 'gamepadSelect', height: '24', viewBox: '6 6 12 12', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
	Object(preact_min["h"])('path', { d: 'M19 13H5v-2h14v2z' }),
	Object(preact_min["h"])('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
	Object(preact_min["h"])(
		'text',
		{ x: '16', y: '55', transform: 'scale(0.325)' },
		'Select'
	)
);

var _ref8 = Object(preact_min["h"])(
	'svg',
	{ id: 'gamepadA', height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
	Object(preact_min["h"])('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z' }),
	Object(preact_min["h"])('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
	Object(preact_min["h"])(
		'text',
		{ x: '7.5', y: '16.25' },
		'A'
	)
);

var _ref9 = Object(preact_min["h"])(
	'svg',
	{ id: 'gamepadB', height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
	Object(preact_min["h"])('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z' }),
	Object(preact_min["h"])('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
	Object(preact_min["h"])(
		'text',
		{ x: '7.5', y: '17.25' },
		'B'
	)
);

var index_App = function (_Component) {
	index__inherits(App, _Component);

	function App() {
		index__classCallCheck(this, App);

		return index__possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	// Using componentDidMount to wait for the canvas element to be inserted in DOM
	App.prototype.componentDidMount = function componentDidMount() {
		// Get our canvas element
		var canvasElement = document.querySelector(".wasmboy__canvas-container__canvas");

		// Load our game
		WasmBoy.initialize(canvasElement, {
			frameSkip: 1,
			audioBatchProcessing: true,
			timersBatchProcessing: true,
			audioAccumulateSamples: true,
			graphicsDisableScanlineRendering: true
		});

		// Add our touch inputs
		// Add our touch inputs
		var dpadElement = document.getElementById('gamepadDpad');
		var startElement = document.getElementById('gamepadStart');
		var selectElement = document.getElementById('gamepadSelect');
		var aElement = document.getElementById('gamepadA');
		var bElement = document.getElementById('gamepadB');

		WasmBoyController.addTouchInput('UP', dpadElement, 'DPAD', 'UP');
		WasmBoyController.addTouchInput('RIGHT', dpadElement, 'DPAD', 'RIGHT');
		WasmBoyController.addTouchInput('DOWN', dpadElement, 'DPAD', 'DOWN');
		WasmBoyController.addTouchInput('LEFT', dpadElement, 'DPAD', 'LEFT');
		WasmBoyController.addTouchInput('A', aElement, 'BUTTON');
		WasmBoyController.addTouchInput('B', bElement, 'BUTTON');
		WasmBoyController.addTouchInput('START', startElement, 'BUTTON');
		WasmBoyController.addTouchInput('SELECT', selectElement, 'BUTTON');

		WasmBoy.loadGame('./games/linksawakening.gb').then(function () {
			console.log('Wasmboy Ready!');
		}).catch(function (error) {
			console.log('Load Game Error:', error);
		});
	};

	App.prototype.render = function render() {
		return Object(preact_min["h"])(
			'div',
			null,
			index__ref,
			index__ref2,
			index__ref3,
			index__ref4,
			Object(preact_min["h"])(
				'div',
				{ 'class': 'wasmboy__gamepad' },
				index__ref5,
				index__ref6,
				_ref7,
				_ref8,
				_ref9
			)
		);
	};

	return App;
}(preact_min["Component"]);



/***/ }),

/***/ "UGHC":
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.12.2
(function () {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if (typeof performance !== "undefined" && performance !== null && performance.now) {
    module.exports = function () {
      return performance.now();
    };
  } else if (typeof process !== "undefined" && process !== null && process.hrtime) {
    module.exports = function () {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function getNanoSeconds() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function () {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function () {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }
}).call(this);

//# sourceMappingURL=performance-now.js.map

/***/ }),

/***/ "a4gv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  function toArray(arr) {
    return Array.prototype.slice.call(arr);
  }

  function promisifyRequest(request) {
    return new Promise(function (resolve, reject) {
      request.onsuccess = function () {
        resolve(request.result);
      };

      request.onerror = function () {
        reject(request.error);
      };
    });
  }

  function promisifyRequestCall(obj, method, args) {
    var request;
    var p = new Promise(function (resolve, reject) {
      request = obj[method].apply(obj, args);
      promisifyRequest(request).then(resolve, reject);
    });

    p.request = request;
    return p;
  }

  function promisifyCursorRequestCall(obj, method, args) {
    var p = promisifyRequestCall(obj, method, args);
    return p.then(function (value) {
      if (!value) return;
      return new Cursor(value, p.request);
    });
  }

  function proxyProperties(ProxyClass, targetProp, properties) {
    properties.forEach(function (prop) {
      Object.defineProperty(ProxyClass.prototype, prop, {
        get: function get() {
          return this[targetProp][prop];
        },
        set: function set(val) {
          this[targetProp][prop] = val;
        }
      });
    });
  }

  function proxyRequestMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach(function (prop) {
      if (!(prop in Constructor.prototype)) return;
      ProxyClass.prototype[prop] = function () {
        return promisifyRequestCall(this[targetProp], prop, arguments);
      };
    });
  }

  function proxyMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach(function (prop) {
      if (!(prop in Constructor.prototype)) return;
      ProxyClass.prototype[prop] = function () {
        return this[targetProp][prop].apply(this[targetProp], arguments);
      };
    });
  }

  function proxyCursorRequestMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach(function (prop) {
      if (!(prop in Constructor.prototype)) return;
      ProxyClass.prototype[prop] = function () {
        return promisifyCursorRequestCall(this[targetProp], prop, arguments);
      };
    });
  }

  function Index(index) {
    this._index = index;
  }

  proxyProperties(Index, '_index', ['name', 'keyPath', 'multiEntry', 'unique']);

  proxyRequestMethods(Index, '_index', IDBIndex, ['get', 'getKey', 'getAll', 'getAllKeys', 'count']);

  proxyCursorRequestMethods(Index, '_index', IDBIndex, ['openCursor', 'openKeyCursor']);

  function Cursor(cursor, request) {
    this._cursor = cursor;
    this._request = request;
  }

  proxyProperties(Cursor, '_cursor', ['direction', 'key', 'primaryKey', 'value']);

  proxyRequestMethods(Cursor, '_cursor', IDBCursor, ['update', 'delete']);

  // proxy 'next' methods
  ['advance', 'continue', 'continuePrimaryKey'].forEach(function (methodName) {
    if (!(methodName in IDBCursor.prototype)) return;
    Cursor.prototype[methodName] = function () {
      var cursor = this;
      var args = arguments;
      return Promise.resolve().then(function () {
        cursor._cursor[methodName].apply(cursor._cursor, args);
        return promisifyRequest(cursor._request).then(function (value) {
          if (!value) return;
          return new Cursor(value, cursor._request);
        });
      });
    };
  });

  function ObjectStore(store) {
    this._store = store;
  }

  ObjectStore.prototype.createIndex = function () {
    return new Index(this._store.createIndex.apply(this._store, arguments));
  };

  ObjectStore.prototype.index = function () {
    return new Index(this._store.index.apply(this._store, arguments));
  };

  proxyProperties(ObjectStore, '_store', ['name', 'keyPath', 'indexNames', 'autoIncrement']);

  proxyRequestMethods(ObjectStore, '_store', IDBObjectStore, ['put', 'add', 'delete', 'clear', 'get', 'getAll', 'getKey', 'getAllKeys', 'count']);

  proxyCursorRequestMethods(ObjectStore, '_store', IDBObjectStore, ['openCursor', 'openKeyCursor']);

  proxyMethods(ObjectStore, '_store', IDBObjectStore, ['deleteIndex']);

  function Transaction(idbTransaction) {
    this._tx = idbTransaction;
    this.complete = new Promise(function (resolve, reject) {
      idbTransaction.oncomplete = function () {
        resolve();
      };
      idbTransaction.onerror = function () {
        reject(idbTransaction.error);
      };
      idbTransaction.onabort = function () {
        reject(idbTransaction.error);
      };
    });
  }

  Transaction.prototype.objectStore = function () {
    return new ObjectStore(this._tx.objectStore.apply(this._tx, arguments));
  };

  proxyProperties(Transaction, '_tx', ['objectStoreNames', 'mode']);

  proxyMethods(Transaction, '_tx', IDBTransaction, ['abort']);

  function UpgradeDB(db, oldVersion, transaction) {
    this._db = db;
    this.oldVersion = oldVersion;
    this.transaction = new Transaction(transaction);
  }

  UpgradeDB.prototype.createObjectStore = function () {
    return new ObjectStore(this._db.createObjectStore.apply(this._db, arguments));
  };

  proxyProperties(UpgradeDB, '_db', ['name', 'version', 'objectStoreNames']);

  proxyMethods(UpgradeDB, '_db', IDBDatabase, ['deleteObjectStore', 'close']);

  function DB(db) {
    this._db = db;
  }

  DB.prototype.transaction = function () {
    return new Transaction(this._db.transaction.apply(this._db, arguments));
  };

  proxyProperties(DB, '_db', ['name', 'version', 'objectStoreNames']);

  proxyMethods(DB, '_db', IDBDatabase, ['close']);

  // Add cursor iterators
  // TODO: remove this once browsers do the right thing with promises
  ['openCursor', 'openKeyCursor'].forEach(function (funcName) {
    [ObjectStore, Index].forEach(function (Constructor) {
      Constructor.prototype[funcName.replace('open', 'iterate')] = function () {
        var args = toArray(arguments);
        var callback = args[args.length - 1];
        var nativeObject = this._store || this._index;
        var request = nativeObject[funcName].apply(nativeObject, args.slice(0, -1));
        request.onsuccess = function () {
          callback(request.result);
        };
      };
    });
  });

  // polyfill getAll
  [Index, ObjectStore].forEach(function (Constructor) {
    if (Constructor.prototype.getAll) return;
    Constructor.prototype.getAll = function (query, count) {
      var instance = this;
      var items = [];

      return new Promise(function (resolve) {
        instance.iterateCursor(query, function (cursor) {
          if (!cursor) {
            resolve(items);
            return;
          }
          items.push(cursor.value);

          if (count !== undefined && items.length == count) {
            resolve(items);
            return;
          }
          cursor.continue();
        });
      });
    };
  });

  var exp = {
    open: function open(name, version, upgradeCallback) {
      var p = promisifyRequestCall(indexedDB, 'open', [name, version]);
      var request = p.request;

      request.onupgradeneeded = function (event) {
        if (upgradeCallback) {
          upgradeCallback(new UpgradeDB(request.result, event.oldVersion, request.transaction));
        }
      };

      return p.then(function (db) {
        return new DB(db);
      });
    },
    delete: function _delete(name) {
      return promisifyRequestCall(indexedDB, 'deleteDatabase', [name]);
    }
  };

  if (true) {
    module.exports = exp;
    module.exports.default = module.exports;
  } else {
    self.idb = exp;
  }
})();

/***/ }),

/***/ "ommR":
/***/ (function(module, exports, __webpack_require__) {

var now = __webpack_require__("UGHC"),
    root = typeof window === 'undefined' ? global : window,
    vendors = ['moz', 'webkit'],
    suffix = 'AnimationFrame',
    raf = root['request' + suffix],
    caf = root['cancel' + suffix] || root['cancelRequest' + suffix];

for (var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix];
  caf = root[vendors[i] + 'Cancel' + suffix] || root[vendors[i] + 'CancelRequest' + suffix];
}

// Some versions of FF have rAF but not cAF
if (!raf || !caf) {
  var last = 0,
      id = 0,
      queue = [],
      frameDuration = 1000 / 60;

  raf = function raf(callback) {
    if (queue.length === 0) {
      var _now = now(),
          next = Math.max(0, frameDuration - (_now - last));
      last = next + _now;
      setTimeout(function () {
        var cp = queue.slice(0);
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0;
        for (var i = 0; i < cp.length; i++) {
          if (!cp[i].cancelled) {
            try {
              cp[i].callback(last);
            } catch (e) {
              setTimeout(function () {
                throw e;
              }, 0);
            }
          }
        }
      }, Math.round(next));
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    });
    return id;
  };

  caf = function caf(handle) {
    for (var i = 0; i < queue.length; i++) {
      if (queue[i].handle === handle) {
        queue[i].cancelled = true;
      }
    }
  };
}

module.exports = function (fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn);
};
module.exports.cancel = function () {
  caf.apply(root, arguments);
};
module.exports.polyfill = function (object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf;
  object.cancelAnimationFrame = caf;
};

/***/ }),

/***/ "toTQ":
/***/ (function(module, exports) {

var buffer = new ArrayBuffer(31053);var uint8 = new Uint8Array(buffer);uint8.set([0,97,115,109,1,0,0,0,1,78,12,96,7,127,127,127,127,127,127,127,0,96,2,127,127,1,127,96,2,127,127,0,96,1,127,1,127,96,0,1,127,96,1,127,0,96,0,0,96,4,127,127,127,127,1,127,96,3,127,127,127,0,96,3,127,127,127,1,127,96,5,127,127,127,127,127,0,96,8,127,127,127,127,127,127,127,127,0,2,11,1,3,101,110,118,3,108,111,103,0,0,3,223,1,221,1,0,1,2,3,3,3,2,2,3,3,2,3,3,4,5,4,1,5,6,5,6,3,3,6,6,6,6,4,4,4,2,2,2,6,6,3,3,3,6,6,6,3,3,3,3,3,3,3,3,3,3,1,3,4,3,4,3,4,4,4,4,4,3,4,3,3,1,1,7,8,5,5,5,6,5,3,6,6,6,6,1,5,9,2,1,4,3,3,6,6,6,6,6,6,5,10,1,5,2,5,5,5,3,2,8,3,7,4,3,5,3,7,4,4,4,7,7,7,7,7,7,2,5,5,7,5,5,7,5,5,7,5,5,7,3,3,3,3,3,3,3,3,3,1,9,3,7,5,7,7,7,9,4,4,4,6,5,1,1,2,8,8,1,8,2,5,6,6,6,5,5,4,9,6,4,3,2,6,5,5,11,4,6,1,2,6,6,6,6,6,6,6,6,6,6,6,6,3,6,6,6,6,6,6,6,6,6,6,6,4,4,4,4,4,4,4,4,4,4,4,4,5,4,1,0,136,1,6,228,3,95,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,1,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,1,11,127,1,65,0,11,127,1,65,0,11,127,1,65,255,1,11,127,1,65,128,8,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,215,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,15,11,127,1,65,0,11,127,1,65,15,11,127,1,65,0,11,127,1,65,15,11,127,1,65,0,11,127,1,65,0,11,127,1,65,15,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,255,0,11,127,1,65,255,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,128,128,8,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,200,3,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,127,1,65,0,11,7,130,3,23,10,105,110,105,116,105,97,108,105,122,101,0,95,6,99,111,110,102,105,103,0,96,6,117,112,100,97,116,101,0,175,1,13,101,109,117,108,97,116,105,111,110,83,116,101,112,0,173,1,20,97,114,101,73,110,116,101,114,114,117,112,116,115,69,110,97,98,108,101,100,0,153,1,14,115,101,116,74,111,121,112,97,100,83,116,97,116,101,0,181,1,18,103,101,116,65,117,100,105,111,81,117,101,117,101,73,110,100,101,120,0,182,1,15,114,101,115,101,116,65,117,100,105,111,81,117,101,117,101,0,183,1,9,115,97,118,101,83,116,97,116,101,0,197,1,9,108,111,97,100,83,116,97,116,101,0,209,1,12,103,101,116,82,101,103,105,115,116,101,114,65,0,210,1,12,103,101,116,82,101,103,105,115,116,101,114,66,0,211,1,12,103,101,116,82,101,103,105,115,116,101,114,67,0,212,1,12,103,101,116,82,101,103,105,115,116,101,114,68,0,213,1,12,103,101,116,82,101,103,105,115,116,101,114,69,0,214,1,12,103,101,116,82,101,103,105,115,116,101,114,72,0,215,1,12,103,101,116,82,101,103,105,115,116,101,114,76,0,216,1,12,103,101,116,82,101,103,105,115,116,101,114,70,0,217,1,17,103,101,116,80,114,111,103,114,97,109,67,111,117,110,116,101,114,0,218,1,15,103,101,116,83,116,97,99,107,80,111,105,110,116,101,114,0,219,1,17,103,101,116,80,114,101,118,105,111,117,115,79,112,99,111,100,101,0,220,1,25,103,101,116,79,112,99,111,100,101,65,116,80,114,111,103,114,97,109,67,111,117,110,116,101,114,0,221,1,6,109,101,109,111,114,121,2,0,10,241,161,1,221,1,18,0,32,0,32,1,32,2,32,3,32,4,32,5,32,6,16,0,11,13,0,32,1,65,1,32,0,116,113,65,0,71,11,227,2,1,1,127,35,10,4,64,15,11,32,0,65,255,63,77,4,64,35,11,4,127,65,4,32,1,65,255,1,113,16,2,69,5,35,11,11,65,1,113,69,4,64,32,1,65,15,113,34,2,4,64,32,2,65,10,70,4,64,65,1,36,12,11,5,65,0,36,12,11,11,5,32,0,65,255,255,0,77,4,64,35,13,69,34,2,4,127,32,2,5,32,0,65,255,223,0,77,11,65,1,113,4,64,35,11,4,64,32,1,65,15,113,36,14,11,32,1,33,2,35,15,4,64,32,2,65,31,113,33,2,35,14,65,224,1,113,36,14,5,35,16,4,64,32,2,65,255,0,113,33,2,35,14,65,128,1,113,36,14,5,35,13,4,64,35,14,65,0,113,36,14,11,11,11,35,14,32,2,114,65,255,255,3,113,36,14,11,5,35,11,69,34,2,4,127,32,0,65,255,191,1,77,5,32,2,11,65,1,113,4,64,35,15,4,127,35,17,5,35,15,11,65,1,113,4,64,35,14,65,31,113,36,14,35,14,32,1,65,224,1,113,114,65,255,255,3,113,36,14,15,11,35,16,4,64,32,1,65,8,79,34,2,4,127,32,1,65,12,77,5,32,2,11,26,11,32,1,33,2,35,13,4,127,32,2,65,15,113,5,32,2,65,3,113,11,34,2,36,18,5,35,11,69,34,2,4,127,32,0,65,255,255,1,77,5,32,2,11,65,1,113,4,64,35,15,4,64,65,0,32,1,65,255,1,113,16,2,4,64,65,1,36,17,5,65,0,36,17,11,11,11,11,11,11,11,47,1,2,127,35,14,33,1,35,13,69,34,2,4,127,32,1,69,5,32,2,11,65,1,113,4,64,65,1,33,1,11,32,1,65,128,128,1,108,32,0,65,128,128,1,107,106,11,17,0,35,18,65,128,192,0,108,32,0,65,128,192,2,107,106,11,85,0,2,64,2,64,2,64,2,64,2,64,2,64,32,0,65,12,117,14,12,1,1,1,1,2,2,2,2,3,3,4,4,0,11,12,4,11,32,0,65,128,240,28,106,15,11,32,0,16,4,65,128,240,28,106,15,11,32,0,65,128,136,126,106,15,11,32,0,16,5,65,128,136,2,106,15,11,32,0,65,128,136,126,106,11,11,0,32,0,16,6,32,1,58,0,0,11,8,0,32,0,32,1,16,7,11,12,0,32,0,65,128,254,3,113,65,8,118,11,8,0,32,0,65,255,1,113,11,32,1,1,127,32,1,16,9,33,2,32,0,32,1,16,10,16,7,32,0,65,1,106,65,255,255,3,113,32,2,16,7,11,9,0,32,0,16,6,45,0,0,11,6,0,32,0,16,12,11,14,0,65,135,254,3,16,13,65,4,113,65,0,75,11,45,0,35,23,32,0,106,36,23,35,23,65,255,1,78,4,64,35,23,65,255,1,107,36,23,65,132,254,3,65,132,254,3,16,13,65,1,106,65,255,1,113,16,8,11,11,77,1,1,127,65,128,2,33,0,2,64,2,64,2,64,2,64,2,64,65,135,254,3,16,13,65,3,113,14,3,1,2,3,0,11,12,3,11,65,128,8,33,0,12,2,11,65,16,33,0,12,1,11,65,192,0,33,0,11,32,0,35,21,71,4,64,65,0,36,24,32,0,36,21,11,32,0,11,18,0,32,1,65,1,32,0,116,65,255,1,113,114,65,255,1,113,11,18,0,65,143,254,3,32,0,65,143,254,3,16,13,16,17,16,8,11,6,0,65,2,16,18,11,80,1,1,127,32,0,16,15,16,14,4,64,35,24,32,0,106,36,24,35,24,16,16,74,4,64,35,24,16,16,107,36,24,65,133,254,3,16,13,34,1,65,255,1,70,4,64,65,133,254,3,65,134,254,3,16,13,16,8,16,19,5,65,133,254,3,32,1,65,1,106,65,255,1,113,16,8,11,11,11,11,66,1,2,127,35,20,33,0,16,14,34,1,4,127,35,21,32,0,72,5,32,1,11,65,1,113,4,64,35,21,33,0,11,35,22,32,0,72,4,64,15,11,3,64,35,22,32,0,78,4,64,32,0,16,20,35,22,32,0,107,36,22,12,1,11,11,11,57,0,2,64,2,64,2,64,2,64,2,64,32,0,65,1,107,14,3,1,2,3,0,11,12,3,11,65,148,254,3,16,13,15,11,65,153,254,3,16,13,15,11,65,158,254,3,16,13,15,11,65,163,254,3,16,13,11,10,0,65,6,32,0,16,22,16,2,11,44,1,1,127,35,29,65,0,74,34,0,4,127,65,1,16,23,5,32,0,11,65,1,113,4,64,35,29,65,1,107,36,29,11,35,29,69,4,64,65,0,36,30,11,11,44,1,1,127,35,31,65,0,74,34,0,4,127,65,2,16,23,5,32,0,11,65,1,113,4,64,35,31,65,1,107,36,31,11,35,31,69,4,64,65,0,36,32,11,11,44,1,1,127,35,33,65,0,74,34,0,4,127,65,3,16,23,5,32,0,11,65,1,113,4,64,35,33,65,1,107,36,33,11,35,33,69,4,64,65,0,36,34,11,11,44,1,1,127,35,35,65,0,74,34,0,4,127,65,4,16,23,5,32,0,11,65,1,113,4,64,35,35,65,1,107,36,35,11,35,35,69,4,64,65,0,36,36,11,11,15,0,65,144,254,3,16,13,65,240,0,113,65,4,118,11,11,0,65,144,254,3,16,13,65,7,113,11,47,1,1,127,35,39,16,29,118,33,0,65,3,65,144,254,3,16,13,16,2,4,127,35,39,32,0,107,65,255,255,3,113,5,35,39,32,0,106,65,255,255,3,113,11,34,0,11,71,0,2,64,2,64,2,64,2,64,2,64,2,64,32,0,65,1,107,14,3,1,2,3,0,11,12,3,11,65,147,254,3,32,1,16,8,12,3,11,65,152,254,3,32,1,16,8,12,2,11,65,157,254,3,32,1,16,8,12,1,11,65,162,254,3,32,1,16,8,11,11,71,0,2,64,2,64,2,64,2,64,2,64,2,64,32,0,65,1,107,14,3,1,2,3,0,11,12,3,11,65,148,254,3,32,1,16,8,12,3,11,65,153,254,3,32,1,16,8,12,2,11,65,158,254,3,32,1,16,8,12,1,11,65,163,254,3,32,1,16,8,11,11,40,1,1,127,32,0,16,22,65,248,1,113,32,1,65,8,118,65,255,1,113,114,33,2,32,0,32,1,65,255,1,113,16,31,32,0,32,2,16,32,11,58,1,2,127,16,30,34,0,65,255,15,77,34,1,4,127,16,29,65,0,75,5,32,1,11,65,1,113,4,64,32,0,36,39,65,1,32,0,16,33,16,30,33,0,11,32,0,65,255,15,75,4,64,65,0,36,30,11,11,42,0,35,37,65,1,107,36,37,35,37,65,0,76,4,64,16,28,36,37,35,38,4,127,16,28,65,0,75,5,35,38,11,65,1,113,4,64,16,34,11,11,11,57,0,2,64,2,64,2,64,2,64,2,64,32,0,65,1,107,14,3,1,2,3,0,11,12,3,11,65,146,254,3,16,13,15,11,65,151,254,3,16,13,15,11,65,156,254,3,16,13,15,11,65,161,254,3,16,13,11,9,0,32,0,16,36,65,7,113,11,10,0,65,3,32,0,16,36,16,2,11,92,1,1,127,35,40,65,1,107,36,40,35,40,65,0,76,4,64,65,1,16,37,36,40,35,40,4,64,65,1,16,38,34,0,4,127,35,41,65,15,72,5,32,0,11,65,1,113,4,64,35,41,65,1,106,36,41,5,65,1,16,38,69,34,0,4,127,35,41,65,0,74,5,32,0,11,65,1,113,4,64,35,41,65,1,107,36,41,11,11,11,11,11,92,1,1,127,35,42,65,1,107,36,42,35,42,65,0,76,4,64,65,2,16,37,36,42,35,42,4,64,65,2,16,38,34,0,4,127,35,43,65,15,72,5,32,0,11,65,1,113,4,64,35,43,65,1,106,36,43,5,65,2,16,38,69,34,0,4,127,35,43,65,0,74,5,32,0,11,65,1,113,4,64,35,43,65,1,107,36,43,11,11,11,11,11,92,1,1,127,35,44,65,1,107,36,44,35,44,65,0,76,4,64,65,4,16,37,36,44,35,44,4,64,65,4,16,38,34,0,4,127,35,45,65,15,72,5,32,0,11,65,1,113,4,64,35,45,65,1,106,36,45,5,65,4,16,38,69,34,0,4,127,35,45,65,0,74,5,32,0,11,65,1,113,4,64,35,45,65,1,107,36,45,11,11,11,11,11,142,1,0,35,27,32,0,106,36,27,35,27,65,128,192,0,78,4,64,35,27,65,128,192,0,107,36,27,2,64,2,64,2,64,2,64,2,64,2,64,2,64,35,28,14,8,1,0,2,0,3,0,4,5,0,11,12,5,11,16,24,16,25,16,26,16,27,12,4,11,16,24,16,25,16,26,16,27,16,35,12,3,11,16,24,16,25,16,26,16,27,12,2,11,16,24,16,25,16,26,16,27,16,35,12,1,11,16,39,16,40,16,41,11,35,28,65,1,106,65,255,1,113,36,28,35,28,65,8,79,4,64,65,0,36,28,11,65,1,15,11,65,0,11,40,0,32,0,65,3,71,4,127,32,0,16,36,65,248,1,113,65,0,75,4,127,65,1,5,65,0,11,5,65,7,65,154,254,3,16,13,16,2,11,11,42,1,1,127,35,47,32,0,106,36,47,35,48,35,47,107,65,0,74,34,1,4,127,65,1,16,43,5,32,1,11,65,1,113,4,64,65,0,15,11,65,1,11,42,1,1,127,35,49,32,0,106,36,49,35,50,35,49,107,65,0,74,34,1,4,127,65,2,16,43,5,32,1,11,65,1,113,4,64,65,0,15,11,65,1,11,56,1,1,127,35,51,32,0,106,36,51,35,52,35,51,107,65,0,74,34,1,4,127,65,3,16,43,5,32,1,11,65,1,113,34,1,4,127,35,53,69,5,32,1,11,65,1,113,4,64,65,0,15,11,65,1,11,42,1,1,127,35,54,32,0,106,36,54,35,55,35,54,107,65,0,74,34,1,4,127,65,4,16,43,5,32,1,11,65,1,113,4,64,65,0,15,11,65,1,11,57,0,2,64,2,64,2,64,2,64,2,64,32,0,65,1,107,14,3,1,2,3,0,11,12,3,11,65,147,254,3,16,13,15,11,65,152,254,3,16,13,15,11,65,157,254,3,16,13,15,11,65,162,254,3,16,13,11,22,0,32,0,16,22,65,7,113,65,8,116,32,0,16,48,114,65,255,255,3,113,11,57,0,2,64,2,64,2,64,2,64,2,64,32,0,65,1,107,14,3,1,2,3,0,11,12,3,11,65,145,254,3,16,13,15,11,65,150,254,3,16,13,15,11,65,155,254,3,16,13,15,11,65,160,254,3,16,13,11,12,0,32,0,16,50,65,6,118,65,3,113,11,67,0,32,0,16,51,26,2,64,2,64,2,64,2,64,2,64,32,0,16,51,65,1,107,14,3,1,2,3,0,11,12,3,11,32,1,65,129,1,16,2,15,11,32,1,65,135,1,16,2,15,11,32,1,65,254,0,16,2,15,11,32,1,65,1,16,2,11,131,1,1,1,127,35,48,32,0,107,36,48,35,48,65,0,76,4,64,35,48,34,0,65,0,32,0,107,32,0,65,0,74,27,33,0,65,128,16,65,1,16,49,107,65,4,108,36,48,35,48,32,0,107,36,48,35,57,65,1,106,65,255,1,113,36,57,35,57,65,8,79,4,64,65,0,36,57,11,11,35,30,4,127,65,1,16,43,5,35,30,11,65,1,113,4,64,35,41,33,0,5,65,15,15,11,65,1,33,1,65,1,35,57,16,52,69,4,64,65,127,33,1,11,32,1,32,0,108,65,15,106,11,16,1,1,127,35,47,33,0,65,0,36,47,32,0,16,53,11,131,1,1,1,127,35,50,32,0,107,36,50,35,50,65,0,76,4,64,35,50,34,0,65,0,32,0,107,32,0,65,0,74,27,33,0,65,128,16,65,2,16,49,107,65,4,108,36,50,35,50,32,0,107,36,50,35,59,65,1,106,65,255,1,113,36,59,35,59,65,8,79,4,64,65,0,36,59,11,11,35,32,4,127,65,2,16,43,5,35,32,11,65,1,113,4,64,35,43,33,0,5,65,15,15,11,65,1,33,1,65,1,35,59,16,52,69,4,64,65,127,33,1,11,32,1,32,0,108,65,15,106,11,16,1,1,127,35,49,33,0,65,0,36,49,32,0,16,55,11,153,2,1,2,127,35,52,32,0,107,36,52,35,52,65,0,76,4,64,35,52,34,1,65,0,32,1,107,32,1,65,0,74,27,33,1,65,128,16,65,3,16,49,107,65,2,108,36,52,35,52,32,1,107,36,52,35,61,65,1,106,65,255,255,3,113,36,61,35,61,65,32,79,4,64,65,0,36,61,11,11,65,0,33,1,35,62,33,2,35,34,4,127,65,3,16,43,5,35,34,11,65,1,113,4,64,35,53,4,64,65,156,254,3,16,13,65,5,118,65,15,113,36,62,65,0,36,53,11,5,65,15,15,11,35,61,65,2,110,65,255,255,3,113,65,176,254,3,106,65,255,255,3,113,16,13,33,0,35,61,65,2,112,4,127,32,0,65,15,113,5,32,0,65,4,117,65,15,113,11,33,0,2,64,2,64,2,64,2,64,2,64,2,64,32,2,14,3,1,2,3,0,11,12,3,11,32,0,65,4,117,33,0,12,3,11,65,1,33,1,12,2,11,32,0,65,1,117,33,0,65,2,33,1,12,1,11,32,0,65,2,117,33,0,65,4,33,1,11,32,1,65,0,74,4,127,32,0,32,1,109,65,16,116,65,16,117,5,65,0,11,34,0,65,15,106,65,16,116,65,16,117,11,16,1,1,127,35,51,33,0,65,0,36,51,32,0,16,57,11,119,1,2,127,65,162,254,3,16,13,65,7,113,34,1,4,64,32,1,65,1,70,4,64,65,16,33,0,5,32,1,65,2,70,4,64,65,32,33,0,5,32,1,65,3,70,4,64,65,48,33,0,5,32,1,65,4,70,4,64,65,192,0,33,0,5,32,1,65,5,70,4,64,65,208,0,33,0,5,32,1,65,6,70,4,64,65,224,0,33,0,5,32,1,65,7,70,4,64,65,240,0,33,0,11,11,11,11,11,11,11,5,65,8,33,0,11,32,0,11,11,0,65,162,254,3,16,13,65,4,118,11,12,0,16,59,16,60,116,65,255,255,3,113,11,12,0,65,3,65,162,254,3,16,13,16,2,11,176,1,1,1,127,35,55,32,0,107,36,55,35,55,65,0,76,4,64,35,55,34,0,65,0,32,0,107,32,0,65,0,74,27,33,0,16,61,36,55,35,55,32,0,107,36,55,35,64,65,1,113,35,64,65,1,118,65,1,113,115,33,1,35,64,65,1,118,36,64,35,64,32,1,65,14,116,65,255,255,3,113,114,65,255,255,3,113,36,64,16,62,4,64,35,64,65,191,255,3,113,36,64,35,64,32,1,65,6,116,65,255,255,3,113,114,65,255,255,3,113,36,64,11,11,35,36,4,127,65,4,16,43,5,35,36,11,65,1,113,4,64,35,45,33,1,5,65,15,15,11,65,0,35,64,65,255,1,113,16,2,4,127,65,127,5,65,1,11,34,0,32,1,108,65,15,106,11,16,1,1,127,35,54,33,0,65,0,36,54,32,0,16,63,11,30,0,32,0,65,255,1,113,65,1,107,65,255,1,113,65,4,106,65,255,1,113,65,165,254,3,16,13,16,2,11,23,0,32,0,65,255,1,113,65,1,107,65,255,1,113,65,165,254,3,16,13,16,2,11,56,1,1,127,32,0,65,60,70,4,64,65,255,0,15,11,32,0,65,60,107,65,160,141,6,34,2,108,32,1,108,65,8,109,65,160,141,6,109,65,60,106,65,160,141,6,108,65,140,241,2,109,65,255,1,113,11,18,0,32,0,65,255,1,113,65,8,116,32,1,65,255,1,113,114,11,233,1,1,8,127,65,164,254,3,16,13,34,6,65,4,118,65,7,113,33,7,32,6,65,7,113,33,6,65,0,36,65,65,1,34,8,16,65,4,127,65,0,32,0,106,5,65,15,11,33,4,65,2,34,9,16,65,4,127,32,4,32,1,106,5,32,4,65,15,106,11,33,4,65,3,34,10,16,65,4,127,32,4,32,2,106,5,32,4,65,15,106,11,33,4,65,4,34,11,16,65,4,127,32,4,32,3,106,5,32,4,65,15,106,11,33,4,65,1,16,66,4,127,65,0,32,0,106,5,65,15,11,33,5,65,2,16,66,4,127,32,5,32,1,106,5,32,5,65,15,106,11,33,5,65,3,16,66,4,127,32,5,32,2,106,5,32,5,65,15,106,11,33,5,65,4,16,66,4,127,32,5,32,3,106,5,32,5,65,15,106,11,33,5,65,0,36,66,32,4,32,7,65,1,106,16,67,33,0,32,5,32,6,65,1,106,16,67,33,1,32,0,36,67,32,1,36,68,32,0,32,1,16,68,11,37,1,1,127,32,2,65,2,108,65,128,240,20,106,34,3,32,0,65,1,106,58,0,0,32,3,65,1,106,32,1,65,1,106,58,0,0,11,218,1,1,4,127,32,0,16,44,33,1,32,0,16,45,33,2,32,0,16,46,33,3,32,0,16,47,33,4,32,1,4,64,16,54,36,56,11,32,2,4,64,16,56,36,58,11,32,3,4,64,16,58,36,60,11,32,4,4,64,16,64,36,63,11,32,1,4,127,32,1,5,32,2,11,65,1,113,34,1,4,127,32,1,5,32,3,11,65,1,113,34,1,4,127,32,1,5,32,4,11,65,1,113,4,64,35,56,35,58,35,60,35,63,16,69,26,11,35,69,32,0,106,36,69,35,69,65,215,0,78,4,64,35,69,65,215,0,107,36,69,35,65,4,127,35,65,5,35,66,11,65,1,113,4,64,35,56,35,58,35,60,35,63,16,69,26,11,35,67,65,1,106,65,255,1,113,35,68,65,1,106,65,255,1,113,35,70,16,70,35,70,65,1,106,36,70,35,70,35,71,65,2,109,65,1,107,78,4,64,35,70,65,1,107,36,70,11,11,11,132,1,1,4,127,32,0,16,53,33,1,32,0,16,55,33,2,32,0,16,57,33,3,32,0,16,63,33,4,32,1,36,56,32,2,36,58,32,3,36,60,32,4,36,63,35,69,32,0,106,36,69,35,69,65,215,0,78,4,64,35,69,65,215,0,107,36,69,32,1,32,2,32,3,32,4,16,69,34,0,16,9,65,1,106,65,255,1,113,32,0,16,10,65,1,106,65,255,1,113,35,70,16,70,35,70,65,1,106,36,70,35,70,35,71,65,2,109,65,1,107,78,4,64,35,70,65,1,107,36,70,11,11,11,36,1,1,127,32,0,16,42,33,1,35,46,4,127,32,1,69,5,35,46,11,65,1,113,4,64,32,0,16,71,5,32,0,16,72,11,11,35,0,35,25,35,26,72,4,64,15,11,3,64,35,25,35,26,78,4,64,35,26,16,73,35,25,35,26,107,36,25,12,1,11,11,11,110,1,2,127,32,0,16,50,65,63,113,33,1,65,192,0,33,2,32,0,65,3,70,4,127,65,255,1,32,1,107,65,255,1,113,65,1,106,65,255,1,113,5,65,192,0,32,1,107,65,255,1,113,11,33,1,2,64,2,64,2,64,2,64,2,64,2,64,32,0,65,1,107,14,4,1,2,3,4,0,11,12,4,11,32,1,36,29,12,3,11,32,1,36,31,12,2,11,32,1,36,33,12,1,11,32,1,36,35,11,11,12,0,32,0,16,36,65,4,118,65,15,113,11,109,1,1,127,65,1,36,30,35,29,69,4,64,65,192,0,36,29,11,65,128,16,65,1,16,49,107,65,4,108,36,48,65,1,16,37,36,40,65,1,16,76,36,41,65,1,16,49,36,39,16,28,36,37,16,28,65,0,75,34,0,4,127,16,29,65,0,75,5,32,0,11,65,1,113,4,64,65,1,36,38,5,65,0,36,38,11,16,29,65,0,75,4,64,16,34,11,65,1,16,43,69,4,64,65,0,36,30,11,11,54,0,65,1,36,32,35,31,69,4,64,65,192,0,36,31,11,65,128,16,65,2,16,49,107,65,4,108,36,50,65,2,16,37,36,42,65,2,16,76,36,43,65,2,16,43,69,4,64,65,0,36,32,11,11,46,0,65,1,36,34,35,33,69,4,64,65,128,2,36,33,11,65,128,16,65,3,16,49,107,65,2,108,36,52,65,0,36,61,65,3,16,43,69,4,64,65,0,36,34,11,11,51,0,65,1,36,36,35,35,69,4,64,65,192,0,36,35,11,16,61,36,55,65,4,16,37,36,44,65,4,16,76,36,45,65,255,255,1,36,64,65,4,16,43,69,4,64,65,0,36,36,11,11,223,3,1,2,127,65,166,254,3,16,13,33,3,32,0,65,166,254,3,71,34,2,4,127,65,7,32,3,16,2,69,5,32,2,11,65,1,113,4,64,65,1,15,11,2,64,2,64,2,64,2,64,32,0,34,2,65,145,254,3,71,4,64,32,2,65,150,254,3,70,13,1,32,2,65,155,254,3,70,13,2,32,2,65,160,254,3,70,13,3,12,4,11,32,0,32,1,65,255,1,113,16,8,65,1,16,75,65,1,15,11,32,0,32,1,65,255,1,113,16,8,65,2,16,75,65,1,15,11,32,0,32,1,65,255,1,113,16,8,65,3,16,75,65,1,15,11,32,0,32,1,65,255,1,113,16,8,65,4,16,75,65,1,15,11,32,0,65,156,254,3,70,4,64,65,1,36,53,11,32,0,65,148,254,3,70,34,2,4,127,65,7,32,1,65,255,1,113,16,2,5,32,2,11,65,1,113,4,64,32,0,32,1,65,255,1,113,16,8,16,77,65,1,15,5,32,0,65,153,254,3,70,34,2,4,127,65,7,32,1,65,255,1,113,16,2,5,32,2,11,65,1,113,4,64,32,0,32,1,65,255,1,113,16,8,16,78,65,1,15,5,32,0,65,158,254,3,70,34,2,4,127,65,7,32,1,65,255,1,113,16,2,5,32,2,11,65,1,113,4,64,32,0,32,1,65,255,1,113,16,8,16,79,65,1,15,5,32,0,65,163,254,3,70,34,2,4,127,65,7,32,1,65,255,1,113,16,2,5,32,2,11,65,1,113,4,64,32,0,32,1,65,255,1,113,16,8,16,80,65,1,15,11,11,11,11,32,0,65,164,254,3,70,4,64,65,1,36,65,11,32,0,65,164,254,3,70,4,64,65,1,36,66,11,32,0,65,166,254,3,70,34,2,4,127,65,7,32,1,65,255,1,113,16,2,69,5,32,2,11,65,1,113,4,64,65,144,254,3,33,2,3,64,32,2,65,166,254,3,73,4,64,32,2,65,0,16,8,32,2,65,1,106,65,255,255,3,113,33,2,12,1,11,11,32,0,32,1,65,255,1,113,16,8,65,1,15,11,65,0,11,68,1,1,127,32,0,65,8,116,65,255,255,3,113,33,0,3,64,32,1,65,160,1,73,4,64,32,1,65,128,252,3,106,65,255,255,3,113,32,0,32,1,106,65,255,255,3,113,16,13,16,8,32,1,65,1,106,65,255,255,3,113,33,1,12,1,11,11,11,137,3,1,2,127,32,0,65,128,128,2,34,3,73,4,64,32,0,32,1,16,3,65,0,15,11,32,0,65,128,128,2,79,34,3,4,127,32,0,65,128,192,2,73,5,32,3,11,65,1,113,4,64,35,19,65,2,75,4,64,65,0,15,11,65,1,15,11,65,128,252,3,33,4,32,0,65,128,192,3,79,34,3,4,127,32,0,65,128,252,3,73,5,32,3,11,65,1,113,4,64,32,2,4,64,32,0,32,1,65,255,1,113,16,8,5,32,0,32,1,16,11,11,65,1,15,11,32,0,65,128,252,3,79,34,3,4,127,32,0,65,159,253,3,77,5,32,3,11,65,1,113,4,64,35,19,65,2,71,4,64,65,0,15,11,65,1,15,11,32,0,65,160,253,3,79,34,3,4,127,32,0,65,255,253,3,77,5,32,3,11,65,1,113,4,64,65,0,15,11,32,0,65,132,254,3,79,34,3,4,127,32,0,65,135,254,3,77,5,32,3,11,65,1,113,4,64,16,21,32,0,65,132,254,3,70,4,64,32,0,65,0,16,8,65,0,15,11,65,1,15,11,32,0,65,144,254,3,79,34,3,4,127,32,0,65,166,254,3,77,5,32,3,11,65,1,113,4,64,16,74,32,0,32,1,16,81,4,64,65,0,15,11,11,32,0,65,176,254,3,79,34,3,4,127,32,0,65,191,254,3,77,5,32,3,11,65,1,113,4,64,16,74,11,32,0,65,192,254,3,79,34,3,4,127,32,0,65,203,254,3,77,5,32,3,11,65,1,113,4,64,32,0,65,196,254,3,70,4,64,32,0,65,0,16,8,65,0,15,11,32,0,65,198,254,3,70,4,64,32,1,65,255,1,113,16,82,11,65,1,15,11,65,1,11,19,0,32,0,32,1,65,1,16,83,4,64,32,0,32,1,16,7,11,11,21,0,32,1,65,1,32,0,116,65,255,1,113,65,127,115,113,65,255,1,113,11,224,1,1,1,127,65,4,65,128,254,3,16,13,65,255,1,115,65,255,1,113,34,0,16,2,4,64,65,5,32,0,16,2,69,4,64,32,0,65,240,1,114,65,255,1,113,33,0,35,76,4,127,65,2,32,0,16,85,5,65,2,32,0,16,17,11,33,0,35,77,4,127,65,0,32,0,16,85,5,65,0,32,0,16,17,11,33,0,35,78,4,127,65,3,32,0,16,85,5,65,3,32,0,16,17,11,33,0,35,79,4,127,65,1,32,0,16,85,5,65,1,32,0,16,17,11,33,0,11,5,32,0,65,240,1,114,65,255,1,113,33,0,35,72,4,127,65,0,32,0,16,85,5,65,0,32,0,16,17,11,33,0,35,73,4,127,65,1,32,0,16,85,5,65,1,32,0,16,17,11,33,0,35,74,4,127,65,2,32,0,16,85,5,65,2,32,0,16,17,11,33,0,35,75,4,127,65,3,32,0,16,85,5,65,3,32,0,16,17,11,33,0,11,32,0,11,174,1,1,1,127,32,0,65,128,128,2,34,1,73,4,64,65,127,15,11,32,0,65,128,128,2,79,34,1,4,127,32,0,65,128,192,2,73,5,32,1,11,65,1,113,4,64,35,19,65,2,75,4,64,65,255,1,15,11,11,32,0,65,128,252,3,79,34,1,4,127,32,0,65,159,253,3,77,5,32,1,11,65,1,113,4,64,35,19,65,2,71,4,64,65,255,1,15,11,11,32,0,65,128,254,3,70,4,64,16,86,15,11,32,0,65,144,254,3,79,34,1,4,127,32,0,65,166,254,3,77,5,32,1,11,65,1,113,4,64,16,74,11,32,0,65,176,254,3,79,34,1,4,127,32,0,65,191,254,3,77,5,32,1,11,65,1,113,4,64,16,74,11,65,127,11,27,1,1,127,32,0,16,87,34,1,65,127,70,4,64,32,0,16,12,15,11,32,1,65,255,1,113,11,156,1,1,2,127,65,199,2,16,88,33,0,65,0,36,10,65,0,36,15,65,0,36,11,65,0,36,16,65,0,36,13,32,0,4,64,32,0,65,1,79,34,1,4,127,32,0,65,3,77,5,32,1,11,65,1,113,4,64,65,1,36,15,5,32,0,65,5,79,34,1,4,127,32,0,65,6,77,5,32,1,11,65,1,113,4,64,65,1,36,11,5,32,0,65,15,79,34,1,4,127,32,0,65,19,77,5,32,1,11,65,1,113,4,64,65,1,36,16,5,32,0,65,25,79,34,1,4,127,32,0,65,30,77,5,32,1,11,65,1,113,4,64,65,1,36,13,11,11,11,11,5,65,1,36,10,11,11,47,0,65,144,254,3,65,128,1,16,8,65,145,254,3,65,191,1,16,8,65,146,254,3,65,243,1,16,8,65,147,254,3,65,255,1,16,8,65,148,254,3,65,191,1,16,8,11,45,0,65,149,254,3,65,255,1,16,8,65,150,254,3,65,63,16,8,65,151,254,3,65,0,16,8,65,152,254,3,65,243,1,16,8,65,153,254,3,65,191,1,16,8,11,51,0,65,154,254,3,65,255,0,16,8,65,155,254,3,65,255,1,16,8,65,156,254,3,65,159,1,16,8,65,157,254,3,65,191,1,16,8,65,158,254,3,65,255,1,16,8,65,1,36,53,11,45,0,65,159,254,3,65,255,1,16,8,65,160,254,3,65,255,1,16,8,65,161,254,3,65,0,16,8,65,162,254,3,65,0,16,8,65,163,254,3,65,191,1,16,8,11,45,0,16,90,16,91,16,92,16,93,65,164,254,3,65,247,0,16,8,65,165,254,3,65,243,1,16,8,65,166,254,3,65,241,1,16,8,65,1,36,65,65,1,36,66,11,129,2,0,65,128,240,156,4,65,1,32,0,65,0,65,0,65,0,65,0,16,1,32,0,65,0,77,4,64,65,128,2,36,0,65,1,36,1,65,176,1,36,2,65,0,36,3,65,19,36,4,65,0,36,5,65,216,1,36,6,65,1,36,7,65,205,0,36,8,65,254,255,3,36,9,65,144,254,3,65,128,1,16,84,65,145,254,3,65,191,1,16,84,65,146,254,3,65,243,1,16,84,65,148,254,3,65,191,1,16,84,65,150,254,3,65,63,16,84,65,151,254,3,65,0,16,84,65,153,254,3,65,191,1,16,84,65,154,254,3,65,255,0,16,84,65,155,254,3,65,255,1,16,84,65,156,254,3,65,159,1,16,84,65,158,254,3,65,191,1,16,84,65,160,254,3,65,255,1,16,84,65,163,254,3,65,191,1,16,84,65,164,254,3,65,247,0,16,84,65,165,254,3,65,243,1,16,84,65,166,254,3,65,241,1,16,84,65,192,254,3,65,145,1,16,84,65,199,254,3,65,252,1,16,84,65,200,254,3,65,255,1,16,84,65,201,254,3,65,255,1,16,84,11,16,89,16,94,11,62,0,32,0,65,0,74,4,64,65,1,36,80,11,32,1,65,0,74,4,64,65,1,36,81,11,32,2,65,0,74,4,64,65,1,36,82,11,32,3,65,0,74,4,64,65,1,36,83,11,32,4,65,0,74,4,64,65,1,36,46,11,11,48,1,1,127,65,1,32,0,116,65,255,1,113,33,2,32,1,65,0,75,4,64,35,2,32,2,114,65,255,1,113,36,2,5,35,2,32,2,65,255,1,115,113,36,2,11,35,2,11,9,0,65,5,32,0,16,97,26,11,75,1,1,127,32,1,65,0,78,4,64,32,0,65,15,113,32,1,65,15,113,106,65,16,113,4,64,65,1,16,98,5,65,0,16,98,11,5,32,1,34,2,65,0,32,2,107,32,2,65,0,74,27,65,15,113,32,0,65,15,113,75,4,64,65,1,16,98,5,65,0,16,98,11,11,11,9,0,65,7,32,0,16,97,26,11,9,0,65,6,32,0,16,97,26,11,9,0,65,4,32,0,16,97,26,11,21,0,32,0,65,1,116,65,255,1,113,32,0,65,7,118,114,65,255,1,113,11,58,1,1,127,32,1,16,9,33,2,32,0,32,1,16,10,34,1,65,0,16,83,4,64,32,0,32,1,16,7,11,32,0,65,1,106,65,255,255,3,113,34,0,32,2,65,0,16,83,4,64,32,0,32,2,16,7,11,11,115,0,32,2,4,64,32,0,32,1,115,32,0,32,1,106,115,34,2,65,16,113,4,64,65,1,16,98,5,65,0,16,98,11,32,2,65,128,2,113,4,64,65,1,16,102,5,65,0,16,102,11,5,32,0,32,1,65,255,255,3,113,106,65,255,255,3,113,34,2,32,0,73,4,64,65,1,16,102,5,65,0,16,102,11,32,0,32,1,65,255,255,3,113,115,32,2,115,65,128,32,113,4,64,65,1,16,98,5,65,0,16,98,11,11,11,21,0,32,0,65,1,118,32,0,65,7,116,65,255,1,113,114,65,255,1,113,11,155,4,0,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,32,0,14,16,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,0,11,12,16,11,65,4,15,11,32,3,16,9,36,3,32,3,16,10,36,4,35,0,65,2,106,65,255,255,3,113,36,0,65,12,15,11,35,3,35,4,16,68,35,1,16,84,65,8,15,11,35,3,35,4,16,68,65,1,106,65,255,255,3,113,34,0,16,9,36,3,32,0,16,10,36,4,65,8,15,11,35,3,65,1,16,99,35,3,65,1,106,65,255,1,113,36,3,35,3,4,64,65,0,16,100,5,65,1,16,100,11,65,0,16,101,65,4,15,11,35,3,65,127,16,99,35,3,65,1,107,65,255,1,113,36,3,35,3,4,64,65,0,16,100,5,65,1,16,100,11,65,1,16,101,65,4,15,11,32,1,36,3,35,0,65,1,106,65,255,255,3,113,36,0,65,8,15,11,35,1,65,128,1,113,65,128,1,70,4,64,65,1,16,102,5,65,0,16,102,11,35,1,16,103,36,1,65,0,16,100,65,0,16,101,65,0,16,98,65,4,15,11,32,3,35,9,16,104,35,0,65,2,106,65,255,255,3,113,36,0,65,20,15,11,35,7,35,8,16,68,34,0,35,3,35,4,16,68,34,1,65,0,16,105,32,0,32,1,106,65,255,255,3,113,34,0,16,9,36,7,32,0,16,10,36,8,65,0,16,101,65,8,15,11,35,3,35,4,16,68,16,88,36,1,65,8,15,11,35,3,35,4,16,68,65,1,107,65,255,255,3,113,34,0,16,9,36,3,32,0,16,10,36,4,65,8,15,11,35,4,65,1,16,99,35,4,65,1,106,65,255,1,113,36,4,35,4,4,64,65,0,16,100,5,65,1,16,100,11,65,0,16,101,65,4,15,11,35,4,65,127,16,99,35,4,65,1,107,65,255,1,113,36,4,35,4,4,64,65,0,16,100,5,65,1,16,100,11,65,1,16,101,65,4,15,11,32,1,36,4,35,0,65,1,106,65,255,255,3,113,36,0,65,8,15,11,35,1,65,1,113,65,0,75,4,64,65,1,16,102,5,65,0,16,102,11,35,1,16,106,36,1,65,0,16,100,65,0,16,101,65,0,16,98,65,4,15,11,65,127,11,10,0,35,2,65,4,118,65,1,113,11,18,0,32,0,65,1,116,65,255,1,113,16,108,114,65,255,1,113,11,32,0,35,0,32,0,65,24,116,65,24,117,106,65,255,255,3,113,36,0,35,0,65,1,106,65,255,255,3,113,36,0,11,21,0,32,0,65,1,118,16,108,65,7,116,65,255,1,113,114,65,255,1,113,11,182,4,0,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,32,0,65,16,107,14,16,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,0,11,12,16,11,35,0,65,1,106,65,255,255,3,113,36,0,65,4,15,11,32,3,16,9,36,5,32,3,16,10,36,6,35,0,65,2,106,65,255,255,3,113,36,0,65,12,15,11,35,5,35,6,16,68,35,1,16,84,65,8,15,11,35,5,35,6,16,68,65,1,106,65,255,255,3,113,34,0,16,9,36,5,32,0,16,10,36,6,65,8,15,11,35,5,65,1,16,99,35,5,65,1,106,65,255,1,113,36,5,35,5,4,64,65,0,16,100,5,65,1,16,100,11,65,0,16,101,65,4,15,11,35,5,65,127,16,99,35,5,65,1,107,65,255,1,113,36,5,35,5,4,64,65,0,16,100,5,65,1,16,100,11,65,1,16,101,65,4,15,11,32,1,36,5,35,0,65,1,106,65,255,255,3,113,36,0,65,8,15,11,65,0,33,0,35,1,65,128,1,113,65,128,1,70,4,64,65,1,33,0,11,35,1,16,109,36,1,32,0,4,64,65,1,16,102,5,65,0,16,102,11,65,0,16,100,65,0,16,101,65,0,16,98,65,4,15,11,32,1,16,110,65,12,15,11,35,7,35,8,16,68,34,0,35,5,35,6,16,68,34,1,65,0,16,105,32,0,32,1,106,65,255,255,3,113,34,0,16,9,36,7,32,0,16,10,36,8,65,0,16,101,65,8,15,11,35,5,35,6,16,68,16,88,36,1,65,8,15,11,35,5,35,6,16,68,65,1,107,65,255,255,3,113,34,0,16,9,36,5,32,0,16,10,36,6,65,8,15,11,35,6,65,1,16,99,35,6,65,1,106,65,255,1,113,36,6,35,6,4,64,65,0,16,100,5,65,1,16,100,11,65,0,16,101,65,4,15,11,35,6,65,127,16,99,35,6,65,1,107,65,255,1,113,36,6,35,6,4,64,65,0,16,100,5,65,1,16,100,11,65,1,16,101,65,4,15,11,32,1,36,6,35,0,65,1,106,65,255,255,3,113,36,0,65,8,15,11,65,0,33,0,35,1,65,1,113,65,1,70,4,64,65,1,33,0,11,35,1,16,111,36,1,32,0,4,64,65,1,16,102,5,65,0,16,102,11,65,0,16,100,65,0,16,101,65,0,16,98,65,4,15,11,65,127,11,10,0,35,2,65,7,118,65,1,113,11,10,0,35,2,65,5,118,65,1,113,11,10,0,35,2,65,6,118,65,1,113,11,198,5,0,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,32,0,65,32,107,14,16,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,0,11,12,16,11,16,113,4,64,35,0,65,1,106,65,255,255,3,113,36,0,65,8,15,5,32,1,16,110,65,12,15,11,0,11,32,3,34,0,16,9,36,7,32,0,16,10,36,8,35,0,65,2,106,65,255,255,3,113,36,0,65,12,15,11,35,7,35,8,16,68,34,0,35,1,16,84,32,0,65,1,106,65,255,255,3,113,34,0,16,9,36,7,32,0,16,10,36,8,65,8,15,11,35,7,35,8,16,68,65,1,106,65,255,255,3,113,34,0,16,9,36,7,32,0,16,10,36,8,65,8,15,11,35,7,65,1,16,99,35,7,65,1,106,65,255,1,113,36,7,35,7,4,64,65,0,16,100,5,65,1,16,100,11,65,0,16,101,65,4,15,11,35,7,65,127,16,99,35,7,65,1,107,65,255,1,113,36,7,35,7,4,64,65,0,16,100,5,65,1,16,100,11,65,1,16,101,65,4,15,11,32,1,36,7,35,0,65,1,106,65,255,255,3,113,36,0,65,8,15,11,65,0,33,1,16,114,65,0,75,4,64,65,6,33,1,11,16,108,65,0,75,4,64,32,1,65,224,0,114,65,255,1,113,33,1,11,16,115,65,0,75,4,127,35,1,32,1,107,65,255,1,113,5,35,1,65,15,113,65,9,75,4,64,32,1,65,6,114,65,255,1,113,33,1,11,35,1,65,153,1,75,4,64,32,1,65,224,0,114,65,255,1,113,33,1,11,35,1,32,1,106,65,255,1,113,11,34,0,4,64,65,0,16,100,5,65,1,16,100,11,32,1,65,224,0,113,4,64,65,1,16,102,5,65,0,16,102,11,65,0,16,98,32,0,36,1,65,4,15,11,16,113,65,0,75,4,64,32,1,16,110,65,12,15,5,35,0,65,1,106,65,255,255,3,113,36,0,65,8,15,11,0,11,35,7,35,8,16,68,34,1,32,1,65,0,16,105,32,1,65,2,108,65,255,255,3,113,34,1,16,9,36,7,32,1,16,10,36,8,65,0,16,101,65,8,15,11,35,7,35,8,16,68,34,1,16,88,36,1,32,1,65,1,106,65,255,255,3,113,34,1,16,9,36,7,32,1,16,10,36,8,65,8,15,11,35,7,35,8,16,68,65,1,107,65,255,255,3,113,34,1,16,9,36,7,32,1,16,10,36,8,65,8,15,11,35,8,65,1,16,99,35,8,65,1,106,65,255,1,113,36,8,35,8,4,64,65,0,16,100,5,65,1,16,100,11,65,0,16,101,65,4,15,11,35,8,65,127,16,99,35,8,65,1,107,65,255,1,113,36,8,35,8,4,64,65,0,16,100,5,65,1,16,100,11,65,1,16,101,65,4,15,11,32,1,36,8,35,0,65,1,106,65,255,255,3,113,36,0,65,8,15,11,35,1,65,127,115,65,255,1,113,36,1,65,1,16,101,65,1,16,98,65,4,15,11,65,127,11,196,4,0,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,32,0,65,48,107,14,16,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,0,11,12,16,11,16,108,4,64,35,0,65,1,106,65,255,255,3,113,36,0,65,8,15,5,32,1,16,110,65,12,15,11,0,11,32,3,36,9,35,0,65,2,106,65,255,255,3,113,36,0,65,12,15,11,35,7,35,8,16,68,34,0,35,1,16,84,32,0,65,1,107,65,255,255,3,113,34,0,16,9,36,7,32,0,16,10,36,8,65,8,15,11,35,9,65,1,106,65,255,255,3,113,36,9,65,8,15,11,35,7,35,8,16,68,34,0,16,88,34,1,65,1,34,2,16,99,32,1,65,1,106,65,255,1,113,34,1,4,64,65,0,16,100,5,65,1,16,100,11,65,0,16,101,32,0,32,1,16,84,65,12,15,11,35,7,35,8,16,68,34,2,16,88,34,1,65,127,16,99,32,1,65,1,107,65,255,1,113,34,1,4,64,65,0,16,100,5,65,1,16,100,11,65,1,16,101,32,2,32,1,16,84,65,12,15,11,35,7,35,8,16,68,32,1,16,84,35,0,65,1,106,65,255,255,3,113,36,0,65,12,15,11,65,0,16,101,65,0,16,98,65,1,16,102,65,4,15,11,16,108,65,1,70,4,64,32,1,16,110,65,12,15,5,35,0,65,1,106,65,255,255,3,113,36,0,65,8,15,11,0,11,35,7,35,8,16,68,34,1,35,9,65,0,16,105,32,1,35,9,106,65,255,255,3,113,34,2,16,9,36,7,32,2,16,10,36,8,65,0,16,101,65,8,15,11,35,7,35,8,16,68,34,2,16,88,36,1,32,2,65,1,107,65,255,255,3,113,34,2,16,9,36,7,32,2,16,10,36,8,65,8,15,11,35,9,65,1,107,65,255,255,3,113,36,9,65,8,15,11,35,1,65,1,16,99,35,1,65,1,106,65,255,1,113,36,1,35,1,4,64,65,0,16,100,5,65,1,16,100,11,65,0,16,101,65,4,15,11,35,1,65,127,16,99,35,1,65,1,107,65,255,1,113,36,1,35,1,4,64,65,0,16,100,5,65,1,16,100,11,65,1,16,101,65,4,15,11,32,1,36,1,35,0,65,1,106,65,255,255,3,113,36,0,65,8,15,11,65,0,16,101,65,0,16,98,16,108,65,0,75,4,64,65,0,16,102,5,65,1,16,102,11,65,4,15,11,65,127,11,201,1,0,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,32,0,65,192,0,107,14,16,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,0,11,12,16,11,65,4,15,11,35,4,36,3,65,4,15,11,35,5,36,3,65,4,15,11,35,6,36,3,65,4,15,11,35,7,36,3,65,4,15,11,35,8,36,3,65,4,15,11,35,7,35,8,16,68,16,88,36,3,65,8,15,11,35,1,36,3,65,4,15,11,35,3,36,4,65,4,15,11,65,4,15,11,35,5,36,4,65,4,15,11,35,6,36,4,65,4,15,11,35,7,36,4,65,4,15,11,35,8,36,4,65,4,15,11,35,7,35,8,16,68,16,88,36,4,65,8,15,11,35,1,36,4,65,4,15,11,65,127,11,201,1,0,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,32,0,65,208,0,107,14,16,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,0,11,12,16,11,35,3,36,5,65,4,15,11,35,4,36,5,65,4,15,11,65,4,15,11,35,6,36,5,65,4,15,11,35,7,36,5,65,4,15,11,35,8,36,5,65,4,15,11,35,7,35,8,16,68,16,88,36,5,65,8,15,11,35,1,36,5,65,4,15,11,35,3,36,6,65,4,15,11,35,4,36,6,65,4,15,11,35,5,36,6,65,4,15,11,65,4,15,11,35,7,36,6,65,4,15,11,35,8,36,6,65,4,15,11,35,7,35,8,16,68,16,88,36,6,65,4,15,11,35,1,36,6,65,4,15,11,65,127,11,201,1,0,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,32,0,65,224,0,107,14,16,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,0,11,12,16,11,35,3,36,7,65,4,15,11,35,4,36,7,65,4,15,11,35,5,36,7,65,4,15,11,35,6,36,7,65,4,15,11,65,4,15,11,35,8,36,7,65,4,15,11,35,7,35,8,16,68,16,88,36,7,65,8,15,11,35,1,36,7,65,4,15,11,35,3,36,8,65,4,15,11,35,4,36,8,65,4,15,11,35,5,36,8,65,4,15,11,35,6,36,8,65,4,15,11,35,7,36,8,65,4,15,11,65,4,15,11,35,7,35,8,16,68,16,88,36,8,65,8,15,11,35,1,36,8,65,4,15,11,65,127,11,241,1,0,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,32,0,65,240,0,107,14,16,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,0,11,12,16,11,35,7,35,8,16,68,35,3,16,84,65,8,15,11,35,7,35,8,16,68,35,4,16,84,65,8,15,11,35,7,35,8,16,68,35,5,16,84,65,8,15,11,35,7,35,8,16,68,35,6,16,84,65,8,15,11,35,7,35,8,16,68,35,7,16,84,65,8,15,11,35,7,35,8,16,68,35,8,16,84,65,8,15,11,65,1,36,85,65,4,15,11,35,7,35,8,16,68,35,1,16,84,65,8,15,11,35,3,36,1,65,4,15,11,35,4,36,1,65,4,15,11,35,5,36,1,65,4,15,11,35,6,36,1,65,4,15,11,35,7,36,1,65,4,15,11,35,8,36,1,65,4,15,11,35,7,35,8,16,68,16,88,36,1,65,4,15,11,65,4,15,11,65,127,11,71,1,1,127,32,1,65,0,78,4,64,32,0,32,0,32,1,65,255,1,113,106,65,255,1,113,75,4,64,65,1,16,102,5,65,0,16,102,11,5,32,1,34,2,65,0,32,2,107,32,2,65,0,74,27,32,0,74,4,64,65,1,16,102,5,65,0,16,102,11,11,11,43,0,35,1,32,0,16,99,35,1,32,0,16,122,35,1,32,0,106,65,255,1,113,36,1,35,1,4,64,65,0,16,100,5,65,1,16,100,11,65,0,16,101,11,90,1,1,127,35,1,32,0,106,16,108,106,65,255,1,113,33,1,35,1,32,0,115,32,1,115,65,16,113,4,64,65,1,16,98,5,65,0,16,98,11,35,1,32,0,106,16,108,106,65,128,2,113,65,0,75,4,64,65,1,16,102,5,65,0,16,102,11,32,1,36,1,35,1,4,64,65,0,16,100,5,65,1,16,100,11,65,0,16,101,11,209,1,0,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,32,0,65,128,1,107,14,16,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,0,11,12,16,11,35,3,16,123,65,4,15,11,35,4,16,123,65,4,15,11,35,5,16,123,65,4,15,11,35,6,16,123,65,4,15,11,35,7,16,123,65,4,15,11,35,8,16,123,65,4,15,11,35,7,35,8,16,68,16,88,16,123,65,8,15,11,35,1,16,123,65,4,15,11,35,3,16,124,65,4,15,11,35,4,16,124,65,4,15,11,35,5,16,124,65,4,15,11,35,6,16,124,65,4,15,11,35,7,16,124,65,4,15,11,35,8,16,124,65,4,15,11,35,7,35,8,16,68,16,88,16,124,65,8,15,11,35,1,16,124,65,4,15,11,65,127,11,56,1,1,127,35,1,32,0,65,127,108,65,16,116,65,16,117,34,1,16,99,35,1,32,1,16,122,35,1,32,0,107,65,255,1,113,36,1,35,1,4,64,65,0,16,100,5,65,1,16,100,11,65,1,16,101,11,90,1,1,127,35,1,32,0,107,16,108,107,65,255,1,113,33,1,35,1,32,0,115,32,1,115,65,16,113,4,64,65,1,16,98,5,65,0,16,98,11,35,1,32,0,107,16,108,107,65,128,2,113,65,0,75,4,64,65,1,16,102,5,65,0,16,102,11,32,1,36,1,35,1,4,64,65,0,16,100,5,65,1,16,100,11,65,1,16,101,11,209,1,0,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,32,0,65,144,1,107,14,16,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,0,11,12,16,11,35,3,16,126,65,4,15,11,35,4,16,126,65,4,15,11,35,5,16,126,65,4,15,11,35,6,16,126,65,4,15,11,35,7,16,126,65,4,15,11,35,8,16,126,65,4,15,11,35,7,35,8,16,68,16,88,16,126,65,8,15,11,35,1,16,126,65,4,15,11,35,3,16,127,65,4,15,11,35,4,16,127,65,4,15,11,35,5,16,127,65,4,15,11,35,6,16,127,65,4,15,11,35,7,16,127,65,4,15,11,35,8,16,127,65,4,15,11,35,7,35,8,16,68,16,88,16,127,65,8,15,11,35,1,16,127,65,4,15,11,65,127,11,39,0,35,1,32,0,113,65,255,1,113,36,1,35,1,4,64,65,0,16,100,5,65,1,16,100,11,65,0,16,101,65,1,16,98,65,0,16,102,11,39,0,35,1,32,0,115,65,255,1,113,36,1,35,1,4,64,65,0,16,100,5,65,1,16,100,11,65,0,16,101,65,0,16,98,65,0,16,102,11,225,1,0,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,32,0,65,160,1,107,14,16,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,0,11,12,16,11,35,3,16,129,1,65,4,15,11,35,4,16,129,1,65,4,15,11,35,5,16,129,1,65,4,15,11,35,6,16,129,1,65,4,15,11,35,7,16,129,1,65,4,15,11,35,8,16,129,1,65,4,15,11,35,7,35,8,16,68,16,88,16,129,1,65,8,15,11,35,1,16,129,1,65,4,15,11,35,3,16,130,1,65,4,15,11,35,4,16,130,1,65,4,15,11,35,5,16,130,1,65,4,15,11,35,6,16,130,1,65,4,15,11,35,7,16,130,1,65,4,15,11,35,8,16,130,1,65,4,15,11,35,7,35,8,16,68,16,88,16,130,1,65,8,15,11,35,1,16,130,1,65,4,15,11,65,127,11,39,0,35,1,32,0,114,65,255,1,113,36,1,35,1,4,64,65,0,16,100,5,65,1,16,100,11,65,0,16,101,65,0,16,98,65,0,16,102,11,53,1,1,127,35,1,32,0,65,127,108,65,16,116,65,16,117,34,1,16,99,35,1,32,1,16,122,35,1,32,1,106,65,255,255,3,113,4,64,65,0,16,100,5,65,1,16,100,11,65,1,16,101,11,225,1,0,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,32,0,65,176,1,107,14,16,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,0,11,12,16,11,35,3,16,132,1,65,4,15,11,35,4,16,132,1,65,4,15,11,35,5,16,132,1,65,4,15,11,35,6,16,132,1,65,4,15,11,35,7,16,132,1,65,4,15,11,35,8,16,132,1,65,4,15,11,35,7,35,8,16,68,16,88,16,132,1,65,8,15,11,35,1,16,132,1,65,4,15,11,35,3,16,133,1,65,4,15,11,35,4,16,133,1,65,4,15,11,35,5,16,133,1,65,4,15,11,35,6,16,133,1,65,4,15,11,35,7,16,133,1,65,4,15,11,35,8,16,133,1,65,4,15,11,35,7,35,8,16,68,16,88,16,133,1,65,8,15,11,35,1,16,133,1,65,4,15,11,65,127,11,76,1,2,127,2,127,32,0,16,87,34,1,65,127,70,4,64,32,0,16,12,12,1,11,32,1,65,255,1,113,11,33,1,2,127,32,0,65,1,106,65,255,255,3,113,34,0,16,87,34,2,65,127,70,4,64,32,0,16,12,12,1,11,32,2,65,255,1,113,11,34,0,32,1,16,68,11,52,0,32,0,65,128,1,113,65,128,1,70,4,64,65,1,16,102,5,65,0,16,102,11,32,0,16,103,34,0,4,64,65,0,16,100,5,65,1,16,100,11,65,0,16,101,65,0,16,98,32,0,11,50,0,32,0,65,1,113,65,0,75,4,64,65,1,16,102,5,65,0,16,102,11,32,0,16,106,34,0,4,64,65,0,16,100,5,65,1,16,100,11,65,0,16,101,65,0,16,98,32,0,11,65,1,1,127,32,0,65,128,1,113,65,128,1,70,4,64,65,1,33,1,11,32,0,16,109,33,0,32,1,4,64,65,1,16,102,5,65,0,16,102,11,32,0,4,64,65,0,16,100,5,65,1,16,100,11,65,0,16,101,65,0,16,98,32,0,11,63,1,1,127,32,0,65,1,113,65,1,70,4,64,65,1,33,1,11,32,0,16,111,33,0,32,1,4,64,65,1,16,102,5,65,0,16,102,11,32,0,4,64,65,0,16,100,5,65,1,16,100,11,65,0,16,101,65,0,16,98,32,0,11,70,1,1,127,32,0,65,128,1,113,65,128,1,70,4,64,65,1,33,1,11,32,0,65,1,116,65,255,1,113,33,0,32,1,4,64,65,1,16,102,5,65,0,16,102,11,32,0,4,64,65,0,16,100,5,65,1,16,100,11,65,0,16,101,65,0,16,98,32,0,11,98,1,2,127,32,0,65,128,1,113,65,128,1,70,4,64,65,1,33,1,11,32,0,65,1,113,65,1,70,4,64,65,1,33,2,11,32,0,65,1,118,33,0,32,1,4,64,32,0,65,128,1,114,65,255,1,113,33,0,11,32,0,4,64,65,0,16,100,5,65,1,16,100,11,65,0,16,101,65,0,16,98,32,2,4,64,65,1,16,102,5,65,0,16,102,11,32,0,11,48,0,32,0,65,15,113,65,4,116,32,0,65,240,1,113,65,4,118,114,34,0,4,64,65,0,16,100,5,65,1,16,100,11,65,0,16,101,65,0,16,98,65,0,16,102,32,0,11,62,1,1,127,32,0,65,1,113,65,1,70,4,64,65,1,33,1,11,32,0,65,1,118,34,0,4,64,65,0,16,100,5,65,1,16,100,11,65,0,16,101,65,0,16,98,32,1,4,64,65,1,16,102,5,65,0,16,102,11,32,0,11,36,0,32,1,65,1,32,0,116,65,255,1,113,113,4,64,65,0,16,100,5,65,1,16,100,11,65,0,16,101,65,1,16,98,32,1,11,48,0,32,1,65,0,75,4,127,32,2,65,1,32,0,116,65,255,1,113,114,65,255,1,113,5,32,2,65,1,32,0,116,65,255,1,113,65,127,115,65,255,1,113,113,11,34,2,11,188,8,1,5,127,65,127,33,4,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,32,0,65,8,112,34,5,14,8,1,2,3,4,5,6,7,8,0,11,12,8,11,35,3,33,1,12,7,11,35,4,33,1,12,6,11,35,5,33,1,12,5,11,35,6,33,1,12,4,11,35,7,33,1,12,3,11,35,8,33,1,12,2,11,35,7,35,8,16,68,16,88,33,1,12,1,11,35,1,33,1,11,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,32,0,65,240,1,113,65,4,118,14,16,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,0,11,12,16,11,32,0,65,7,77,4,64,32,1,16,136,1,33,2,65,1,33,3,5,32,0,65,15,77,4,64,32,1,16,137,1,33,2,65,1,33,3,11,11,12,15,11,32,0,65,23,77,4,64,32,1,16,138,1,33,2,65,1,33,3,5,32,0,65,31,77,4,64,32,1,16,139,1,33,2,65,1,33,3,11,11,12,14,11,32,0,65,39,77,4,64,32,1,16,140,1,33,2,65,1,33,3,5,32,0,65,47,77,4,64,32,1,16,141,1,33,2,65,1,33,3,11,11,12,13,11,32,0,65,55,77,4,64,32,1,16,142,1,33,2,65,1,33,3,5,32,0,65,63,77,4,64,32,1,16,143,1,33,2,65,1,33,3,11,11,12,12,11,32,0,65,199,0,77,4,64,65,0,32,1,16,144,1,33,2,65,1,33,3,5,32,0,65,207,0,77,4,64,65,1,32,1,16,144,1,33,2,65,1,33,3,11,11,12,11,11,32,0,65,215,0,77,4,64,65,2,32,1,16,144,1,33,2,65,1,33,3,5,32,0,65,223,0,77,4,64,65,3,32,1,16,144,1,33,2,65,1,33,3,11,11,12,10,11,32,0,65,231,0,77,4,64,65,4,32,1,16,144,1,33,2,65,1,33,3,5,32,0,65,239,0,77,4,64,65,5,32,1,16,144,1,33,2,65,1,33,3,11,11,12,9,11,32,0,65,247,0,77,4,64,65,6,32,1,16,144,1,33,2,65,1,33,3,5,32,0,65,255,0,77,4,64,65,7,32,1,16,144,1,33,2,65,1,33,3,11,11,12,8,11,32,0,65,135,1,77,4,64,65,0,65,0,32,1,16,145,1,33,2,65,1,33,3,5,32,0,65,143,1,77,4,64,65,1,65,0,32,1,16,145,1,33,2,65,1,33,3,11,11,12,7,11,32,0,65,151,1,77,4,64,65,2,65,0,32,1,16,145,1,33,2,65,1,33,3,5,32,0,65,159,1,77,4,64,65,3,65,0,32,1,16,145,1,33,2,65,1,33,3,11,11,12,6,11,32,0,65,167,1,77,4,64,65,4,65,0,32,1,16,145,1,33,2,65,1,33,3,5,32,0,65,175,1,77,4,64,65,5,65,0,32,1,16,145,1,33,2,65,1,33,3,11,11,12,5,11,32,0,65,183,1,77,4,64,65,6,65,0,32,1,16,145,1,33,2,65,1,33,3,5,32,0,65,191,1,77,4,64,65,7,65,0,32,1,16,145,1,33,2,65,1,33,3,11,11,12,4,11,32,0,65,199,1,77,4,64,65,0,65,1,32,1,16,145,1,33,2,65,1,33,3,5,32,0,65,207,1,77,4,64,65,1,65,1,32,1,16,145,1,33,2,65,1,33,3,11,11,12,3,11,32,0,65,215,1,77,4,64,65,2,65,1,32,1,16,145,1,33,2,65,1,33,3,5,32,0,65,223,1,77,4,64,65,3,65,1,32,1,16,145,1,33,2,65,1,33,3,11,11,12,2,11,32,0,65,231,1,77,4,64,65,4,65,1,32,1,16,145,1,33,2,65,1,33,3,5,32,0,65,239,1,77,4,64,65,5,65,1,32,1,16,145,1,33,2,65,1,33,3,11,11,12,1,11,32,0,65,247,1,77,4,64,65,6,65,1,32,1,16,145,1,33,2,65,1,33,3,5,32,0,65,255,1,77,4,64,65,7,65,1,32,1,16,145,1,33,2,65,1,33,3,11,11,11,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,32,5,14,8,1,2,3,4,5,6,7,8,0,11,12,8,11,32,2,36,3,12,7,11,32,2,36,4,12,6,11,32,2,36,5,12,5,11,32,2,36,6,12,4,11,32,2,36,7,12,3,11,32,2,36,8,12,2,11,35,7,35,8,16,68,32,2,16,84,12,1,11,32,2,36,1,11,35,0,65,1,106,65,255,255,3,113,36,0,32,3,4,64,65,8,33,4,32,5,65,6,70,4,64,65,16,33,4,11,11,32,4,11,202,4,1,1,127,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,32,0,65,192,1,107,14,16,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,0,11,12,16,11,16,113,4,64,65,8,15,5,35,9,16,135,1,36,0,35,9,65,2,106,65,255,255,3,113,36,9,65,20,15,11,0,11,35,3,35,4,16,68,26,35,9,16,135,1,33,4,35,9,65,2,106,65,255,255,3,113,36,9,32,4,16,9,36,3,32,4,16,10,36,4,65,12,15,11,16,113,4,64,35,0,65,2,106,65,255,255,3,113,36,0,65,12,15,5,32,3,36,0,65,16,15,11,0,11,32,3,36,0,65,16,15,11,16,113,4,64,35,0,65,2,106,65,255,255,3,113,36,0,65,12,15,5,35,9,65,2,107,65,255,255,3,113,36,9,35,9,35,0,65,2,106,65,255,255,3,113,16,104,35,0,16,135,1,36,0,65,24,15,11,0,11,35,3,35,4,16,68,33,4,35,9,65,2,107,65,255,255,3,113,36,9,35,9,32,4,16,104,65,16,15,11,32,1,16,123,35,0,65,1,106,65,255,255,3,113,36,0,65,4,15,11,35,9,65,2,107,65,255,255,3,113,36,9,35,9,35,0,16,104,65,0,36,0,65,16,15,11,16,113,65,1,70,4,64,35,9,16,135,1,36,0,35,9,65,2,106,65,255,255,3,113,36,9,65,20,15,5,65,8,15,11,0,11,35,9,16,135,1,36,0,35,9,65,2,106,65,255,255,3,113,36,9,65,16,15,11,16,113,65,1,70,4,64,32,3,36,0,65,16,15,5,35,0,65,2,106,65,255,255,3,113,36,0,65,12,15,11,0,11,32,1,16,146,1,34,4,65,0,74,4,64,32,4,65,4,106,65,24,116,65,24,117,33,4,11,32,4,15,11,16,113,65,1,70,4,64,35,9,65,2,107,65,255,255,3,113,36,9,35,9,35,0,65,2,106,65,255,255,3,113,16,104,35,0,16,135,1,36,0,65,24,15,5,35,0,65,2,106,65,255,255,3,113,36,0,65,12,15,11,0,11,35,9,65,2,107,65,255,255,3,113,36,9,35,9,35,0,65,2,106,65,255,255,3,113,16,104,35,0,16,135,1,36,0,65,24,15,11,32,1,16,124,35,0,65,1,106,65,255,255,3,113,36,0,65,4,15,11,35,9,65,2,107,65,255,255,3,113,36,9,35,9,35,0,16,104,65,8,36,0,65,16,15,11,65,127,11,6,0,32,0,36,87,11,254,3,1,1,127,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,32,0,65,208,1,107,14,16,1,2,3,0,4,5,6,7,8,9,10,0,11,0,12,13,0,11,12,13,11,16,108,4,64,65,8,15,5,35,9,16,135,1,36,0,35,9,65,2,106,65,255,255,3,113,36,9,65,20,15,11,0,11,35,5,35,6,16,68,26,35,9,16,135,1,33,4,35,9,65,2,106,65,255,255,3,113,36,9,32,4,16,9,36,5,32,4,16,10,36,6,65,12,15,11,16,108,4,64,35,0,65,2,106,65,255,255,3,113,36,0,65,12,15,5,32,3,36,0,65,16,15,11,0,11,16,108,4,64,35,0,65,2,106,65,255,255,3,113,36,0,65,12,15,5,35,9,65,2,107,65,255,255,3,113,36,9,35,9,35,0,65,2,106,65,255,255,3,113,16,104,35,0,16,135,1,36,0,65,24,15,11,0,11,35,5,35,6,16,68,33,4,35,9,65,2,107,65,255,255,3,113,36,9,35,9,32,4,16,104,65,16,15,11,32,1,16,126,35,0,65,1,106,65,255,255,3,113,36,0,65,8,15,11,35,9,65,2,107,65,255,255,3,113,36,9,35,9,35,0,16,104,65,16,36,0,65,16,15,11,16,108,65,1,70,4,64,35,9,16,135,1,36,0,35,9,65,2,106,65,255,255,3,113,36,9,65,20,15,5,65,8,15,11,0,11,35,9,16,135,1,36,0,65,1,16,148,1,35,9,65,2,106,65,255,255,3,113,36,9,65,16,15,11,16,108,65,1,70,4,64,32,3,36,0,65,16,15,5,35,0,65,2,106,65,255,255,3,113,36,0,65,12,15,11,0,11,16,108,65,1,70,4,64,35,9,65,2,107,65,255,255,3,113,36,9,35,9,35,0,65,2,106,65,255,255,3,113,16,104,35,0,16,135,1,36,0,65,24,15,5,35,0,65,2,106,65,255,255,3,113,36,0,65,12,15,11,0,11,32,1,16,127,35,0,65,1,106,65,255,255,3,113,36,0,65,8,15,11,35,9,65,2,107,65,255,255,3,113,36,9,35,9,35,0,16,104,65,24,36,0,65,16,15,11,65,127,11,237,2,1,1,127,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,32,0,65,224,1,107,14,16,1,2,3,0,0,4,5,6,7,8,9,0,0,0,10,11,0,11,12,11,11,32,1,65,128,254,3,106,65,255,255,3,113,35,1,16,84,35,0,65,1,106,65,255,255,3,113,36,0,65,12,15,11,35,7,35,8,16,68,26,35,9,16,135,1,33,4,35,9,65,2,106,65,255,255,3,113,36,9,32,4,16,9,36,7,32,4,16,10,36,8,65,12,15,11,35,4,65,128,254,3,106,65,255,255,3,113,35,1,16,84,65,8,15,11,35,7,35,8,16,68,33,4,35,9,65,2,107,65,255,255,3,113,36,9,35,9,32,4,16,104,65,16,15,11,32,1,16,129,1,35,0,65,1,106,65,255,255,3,113,36,0,65,8,15,11,35,9,65,2,107,65,255,255,3,113,36,9,35,9,35,0,16,104,65,32,36,0,65,16,15,11,35,9,32,1,65,24,116,65,24,117,34,4,65,1,16,105,35,9,32,4,106,65,255,255,3,113,36,9,65,0,16,100,65,0,16,101,35,0,65,1,106,65,255,255,3,113,36,0,65,16,15,11,35,7,35,8,16,68,36,0,65,4,15,11,32,3,35,1,16,84,35,0,65,2,106,65,255,255,3,113,36,0,65,16,15,11,32,1,16,130,1,35,0,65,1,106,65,255,255,3,113,36,0,65,8,15,11,35,9,65,2,107,65,255,255,3,113,36,9,35,9,35,0,16,104,65,40,36,0,65,16,15,11,65,127,11,151,3,0,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,32,0,65,240,1,107,14,16,1,2,3,4,0,5,6,7,8,9,10,11,0,0,12,13,0,11,12,13,11,32,1,65,128,254,3,106,65,255,255,3,113,16,88,36,1,35,0,65,1,106,65,255,255,3,113,36,0,65,12,15,11,35,1,35,2,16,68,26,35,9,16,135,1,33,0,35,9,65,2,106,65,255,255,3,113,36,9,32,0,16,9,36,1,32,0,16,10,36,2,65,12,15,11,35,4,65,128,254,3,106,65,255,255,3,113,16,88,36,1,35,0,65,1,106,65,255,255,3,113,36,0,65,8,15,11,65,0,16,148,1,65,4,15,11,35,1,35,2,16,68,33,0,35,9,65,2,107,65,255,255,3,113,36,9,35,9,32,0,16,104,65,16,15,11,32,1,16,132,1,35,0,65,1,106,65,255,255,3,113,36,0,65,8,15,11,35,9,65,2,107,65,255,255,3,113,36,9,35,9,35,0,16,104,65,48,36,0,65,16,15,11,65,0,16,100,65,0,16,101,35,9,32,1,65,24,116,65,24,117,34,0,65,1,16,105,35,9,32,0,106,65,255,255,3,113,34,0,16,9,36,7,32,0,16,10,36,8,35,0,65,1,106,65,255,255,3,113,36,0,65,12,15,11,35,7,35,8,16,68,36,9,65,8,15,11,32,3,16,88,36,1,35,0,65,2,106,65,255,255,3,113,36,0,65,16,15,11,65,1,16,148,1,65,4,15,11,32,1,16,133,1,35,0,65,1,106,65,255,255,3,113,36,0,65,8,15,11,35,9,65,2,107,65,255,255,3,113,36,9,35,9,35,0,16,104,65,56,36,0,65,16,15,11,65,127,11,158,2,1,1,127,35,0,65,1,106,65,255,255,3,113,36,0,32,2,32,1,16,68,33,3,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,32,0,65,240,1,113,65,4,118,14,15,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0,11,12,15,11,32,0,32,1,32,2,32,3,16,107,15,11,32,0,32,1,32,2,32,3,16,112,15,11,32,0,32,1,32,2,32,3,16,116,15,11,32,0,32,1,32,2,32,3,16,117,15,11,32,0,32,1,32,2,32,3,16,118,15,11,32,0,32,1,32,2,32,3,16,119,15,11,32,0,32,1,32,2,32,3,16,120,15,11,32,0,32,1,32,2,32,3,16,121,15,11,32,0,32,1,32,2,32,3,16,125,15,11,32,0,32,1,32,2,32,3,16,128,1,15,11,32,0,32,1,32,2,32,3,16,131,1,15,11,32,0,32,1,32,2,32,3,16,134,1,15,11,32,0,32,1,32,2,32,3,16,147,1,15,11,32,0,32,1,32,2,32,3,16,149,1,15,11,32,0,32,1,32,2,32,3,16,150,1,15,11,32,0,32,1,32,2,32,3,16,151,1,11,4,0,35,87,11,27,0,65,143,254,3,16,13,65,255,255,3,16,13,113,65,255,1,113,4,127,65,1,5,65,0,11,11,12,0,65,7,65,192,254,3,16,13,16,2,11,6,0,65,1,16,18,11,249,1,1,3,127,65,193,254,3,16,13,33,1,32,0,69,4,64,65,0,36,88,65,196,254,3,65,0,16,8,65,0,65,1,32,1,16,85,16,85,33,1,65,0,36,19,65,193,254,3,32,1,16,8,15,11,32,1,65,3,113,65,196,254,3,16,13,34,3,65,144,1,79,4,127,65,4,65,0,65,1,32,1,16,85,16,17,34,1,16,2,33,2,65,1,5,35,88,65,248,2,78,4,127,65,5,65,1,65,0,32,1,16,85,16,17,34,1,16,2,33,2,65,2,5,35,88,65,249,1,78,4,127,65,1,65,0,32,1,16,17,16,17,33,1,65,3,5,65,3,65,1,65,0,32,1,16,85,16,85,34,1,16,2,33,2,65,0,11,11,11,34,0,71,4,64,32,2,4,64,16,156,1,11,32,0,69,34,2,4,127,32,3,65,197,254,3,16,13,70,5,32,2,11,65,1,113,4,64,65,6,65,2,32,1,16,17,34,1,16,2,4,64,16,156,1,11,5,65,2,32,1,16,85,33,1,11,11,32,0,36,19,65,193,254,3,32,1,16,8,11,87,1,1,127,32,0,65,128,144,2,70,4,127,32,1,65,128,1,106,65,255,1,113,33,2,65,7,32,1,16,2,4,64,32,1,65,128,1,107,65,16,116,65,16,117,33,2,11,32,0,32,2,65,16,108,65,16,116,65,16,117,65,255,255,3,113,106,65,255,255,3,113,5,32,0,32,1,65,16,108,106,65,255,255,3,113,11,11,19,0,32,1,16,13,32,0,65,2,108,65,255,1,113,118,65,3,113,11,12,0,32,0,32,1,65,1,106,58,0,0,11,154,2,1,7,127,65,195,254,3,16,13,33,7,32,0,65,194,254,3,16,13,106,65,255,255,3,113,34,5,65,128,2,79,4,64,32,5,65,128,2,107,65,255,255,3,113,33,5,11,32,0,65,160,1,108,65,128,188,11,106,33,8,3,64,32,4,65,160,1,72,4,64,32,4,32,7,106,34,3,65,128,2,78,4,64,32,3,65,128,2,107,33,3,11,32,1,32,2,32,5,65,3,118,65,32,108,65,255,255,3,113,106,32,3,65,3,117,65,255,255,3,113,106,65,255,255,3,113,16,13,16,158,1,34,0,32,5,65,8,112,34,6,65,2,108,65,255,255,3,113,106,65,255,255,3,113,16,13,33,9,32,0,32,6,65,2,108,65,255,255,3,113,106,65,1,106,65,255,255,3,113,16,13,33,6,65,0,33,0,32,3,65,16,116,65,16,117,65,8,111,65,7,107,65,16,116,65,16,117,65,127,108,65,16,116,65,16,117,65,255,1,113,34,3,32,6,16,2,4,64,65,2,33,0,11,32,3,32,9,16,2,4,64,32,0,65,1,106,65,255,1,113,33,0,11,32,8,32,4,106,32,0,65,199,254,3,16,159,1,16,160,1,32,4,65,1,106,33,4,12,1,11,11,11,173,2,1,7,127,65,203,254,3,16,13,33,5,32,0,65,202,254,3,16,13,34,3,65,255,1,113,73,4,64,15,11,32,0,32,3,107,65,255,255,3,113,33,7,32,0,65,160,1,108,65,128,188,11,106,33,8,32,5,65,7,107,65,255,255,3,113,34,5,33,3,3,64,32,3,65,160,1,73,4,64,32,3,32,5,107,65,255,255,3,113,34,4,65,128,2,79,4,64,32,4,65,128,2,107,65,255,255,3,113,33,4,11,32,1,32,2,32,7,65,3,118,65,32,108,65,255,255,3,113,106,32,4,65,3,118,106,65,255,255,3,113,16,13,16,158,1,34,0,32,7,65,8,112,34,6,65,2,108,65,255,255,3,113,106,65,255,255,3,113,16,13,33,9,32,0,32,6,65,2,108,65,255,255,3,113,106,65,1,106,65,255,255,3,113,16,13,33,6,65,0,33,0,32,4,65,16,116,65,16,117,65,8,111,65,7,107,65,16,116,65,16,117,65,127,108,65,16,116,65,16,117,65,255,1,113,34,4,32,6,16,2,4,64,65,2,33,0,11,32,4,32,9,16,2,4,64,32,0,65,1,106,65,255,1,113,33,0,11,32,8,32,3,106,32,0,65,199,254,3,16,159,1,16,160,1,32,3,65,1,106,65,255,255,3,113,33,3,12,1,11,11,11,19,0,32,1,65,160,1,108,65,128,188,11,106,32,0,106,45,0,0,11,24,0,32,1,65,160,1,108,65,128,188,11,106,32,0,106,32,2,65,1,106,58,0,0,11,205,3,1,11,127,3,64,32,5,65,40,72,4,64,32,5,65,4,108,65,255,255,3,113,34,2,65,128,252,3,106,65,255,255,3,113,16,13,65,16,107,65,255,1,113,33,4,32,2,65,129,252,3,106,65,255,255,3,113,16,13,65,8,107,65,255,1,113,33,9,32,2,65,130,252,3,106,65,255,255,3,113,16,13,33,6,65,7,32,2,65,131,252,3,106,65,255,255,3,113,16,13,34,2,16,2,33,10,65,6,32,2,16,2,33,7,65,5,32,2,16,2,33,11,65,200,254,3,33,8,65,4,32,2,16,2,4,64,65,201,254,3,33,8,11,65,8,33,3,32,1,4,64,65,16,33,3,11,32,0,32,4,79,34,2,4,127,32,0,32,4,32,3,106,65,255,1,113,73,5,32,2,11,65,1,113,4,64,32,0,32,4,107,65,255,1,113,33,2,32,7,4,64,32,2,32,3,107,65,16,116,65,16,117,65,127,108,65,16,116,65,16,117,33,2,11,65,128,128,2,32,6,16,158,1,32,2,65,2,108,65,16,116,65,16,117,106,65,255,255,3,113,34,2,16,13,33,6,32,2,65,1,106,65,255,255,3,113,16,13,33,7,65,7,33,2,3,64,32,2,65,0,78,4,64,32,2,33,4,32,11,4,64,32,4,65,7,107,65,24,116,65,24,117,65,127,108,65,24,116,65,24,117,33,4,11,65,0,33,3,32,4,65,255,1,113,32,7,16,2,4,64,65,2,33,3,11,32,4,65,255,1,113,32,6,16,2,4,64,32,3,65,1,106,65,255,1,113,33,3,11,32,3,4,64,32,3,32,8,16,159,1,33,3,32,9,65,7,32,2,65,255,1,113,107,65,255,1,113,106,65,255,1,113,33,4,32,10,69,34,12,4,127,32,12,5,32,4,32,0,16,163,1,65,1,77,11,65,1,113,4,64,32,4,32,0,32,3,16,164,1,11,11,32,2,65,1,107,65,24,116,65,24,117,33,2,12,1,11,11,11,32,5,65,1,106,33,5,12,1,11,11,11,129,1,1,3,127,65,128,144,2,33,3,65,4,65,192,254,3,16,13,34,1,16,2,4,64,65,128,128,2,33,3,11,65,0,32,1,16,2,4,64,65,128,176,2,33,2,65,3,32,1,16,2,4,64,65,128,184,2,33,2,11,32,0,32,3,32,2,16,161,1,11,65,5,32,1,16,2,4,64,65,128,176,2,33,2,65,6,32,1,16,2,4,64,65,128,184,2,33,2,11,32,0,32,3,32,2,16,162,1,11,65,1,32,1,16,2,4,64,32,0,65,2,32,1,16,2,16,165,1,11,11,34,1,1,127,3,64,32,0,65,144,1,77,4,64,32,0,16,166,1,32,0,65,1,106,65,255,1,113,33,0,12,1,11,11,11,96,1,4,127,65,128,136,10,33,2,65,128,188,11,33,3,3,64,32,0,65,144,1,72,4,64,65,0,33,1,3,64,32,1,65,160,1,72,4,64,65,128,136,10,32,1,106,32,0,65,160,1,108,106,65,128,188,11,32,0,65,160,1,108,106,32,1,106,45,0,0,58,0,0,32,1,65,1,106,33,1,12,1,11,11,32,0,65,1,106,33,0,12,1,11,11,11,6,0,65,0,16,18,11,126,1,1,127,16,155,1,34,1,16,157,1,32,1,4,64,35,88,32,0,106,36,88,35,88,65,200,3,78,4,64,35,88,65,200,3,107,36,88,65,196,254,3,16,13,34,0,65,144,1,70,4,64,35,83,4,64,16,167,1,5,32,0,16,166,1,11,16,168,1,16,169,1,5,32,0,65,144,1,73,4,64,35,83,69,4,64,32,0,16,166,1,11,11,11,65,196,254,3,32,0,65,153,1,75,4,127,65,0,5,32,0,65,1,106,65,255,1,113,11,34,0,16,8,11,11,11,101,0,65,0,16,148,1,65,143,254,3,32,0,65,143,254,3,16,13,16,85,16,8,35,9,65,2,107,65,255,255,3,113,36,9,35,9,35,0,16,11,2,64,2,64,2,64,2,64,2,64,2,64,32,0,14,5,1,2,3,0,4,0,11,12,4,11,65,192,0,36,0,12,3,11,65,200,0,36,0,12,2,11,65,208,0,36,0,12,1,11,65,224,0,36,0,11,65,0,36,85,11,186,1,1,4,127,35,87,4,64,65,143,254,3,16,13,33,2,65,255,255,3,16,13,33,3,32,2,65,0,75,4,64,65,0,32,2,16,2,34,0,4,127,65,0,32,3,16,2,5,32,0,11,65,1,113,4,64,65,0,16,171,1,65,1,33,1,5,65,1,32,2,16,2,34,0,4,127,65,1,32,3,16,2,5,32,0,11,65,1,113,4,64,65,1,16,171,1,65,1,33,1,5,65,2,32,2,16,2,34,0,4,127,65,2,32,3,16,2,5,32,0,11,65,1,113,4,64,65,2,16,171,1,65,1,33,1,5,65,4,32,2,16,2,34,0,4,127,65,4,32,3,16,2,5,32,0,11,65,1,113,4,64,65,4,16,171,1,65,1,33,1,11,11,11,11,11,32,1,4,64,65,20,15,11,11,65,0,11,229,1,1,3,127,65,4,33,3,35,85,69,34,5,4,127,35,86,69,5,32,5,11,65,1,113,4,64,35,0,16,88,34,4,35,0,65,1,106,65,255,255,3,113,16,88,35,0,65,2,106,65,255,255,3,113,16,88,16,152,1,33,3,5,35,85,4,127,16,153,1,69,5,35,85,11,65,1,113,34,5,4,127,16,154,1,5,32,5,11,65,1,113,4,64,65,0,36,85,65,0,36,86,35,0,16,88,34,4,35,0,16,88,35,0,65,1,106,65,255,255,3,113,16,88,16,152,1,33,3,35,0,65,1,107,65,255,255,3,113,36,0,11,11,35,2,65,240,1,113,36,2,32,2,69,4,64,32,3,16,20,11,35,86,69,4,64,32,1,69,4,64,32,3,16,170,1,11,32,0,69,4,64,32,3,16,73,11,11,32,3,16,172,1,106,65,24,116,65,24,117,34,3,65,0,76,4,64,65,196,240,156,4,65,1,32,4,65,0,65,0,65,0,65,0,16,1,11,32,3,11,36,0,35,89,35,90,72,4,64,15,11,3,64,35,89,35,90,78,4,64,35,90,16,170,1,35,89,35,90,107,36,89,12,1,11,11,11,153,1,1,5,127,35,80,33,1,35,81,33,2,35,82,33,3,3,64,32,4,69,34,0,4,127,35,84,65,145,162,4,72,5,32,0,11,65,1,113,4,64,32,1,32,2,32,3,16,173,1,34,0,65,0,78,4,64,35,84,32,0,106,36,84,32,1,4,64,35,25,32,0,106,36,25,11,32,2,4,64,35,89,32,0,106,36,89,16,174,1,11,32,3,4,64,35,22,32,0,106,36,22,16,21,11,35,22,32,0,106,36,22,5,65,1,33,4,11,12,1,11,11,35,84,65,145,162,4,78,4,64,65,0,36,84,65,1,15,11,35,0,65,1,107,65,255,255,3,113,36,0,65,127,11,73,0,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,32,0,14,8,1,2,3,4,5,6,7,8,0,11,12,8,11,35,76,15,11,35,77,15,11,35,78,15,11,35,79,15,11,35,72,15,11,35,73,15,11,35,74,15,11,35,75,15,11,65,0,11,93,0,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,2,64,32,0,14,8,1,2,3,4,5,6,7,8,0,11,12,8,11,32,1,36,76,12,7,11,32,1,36,77,12,6,11,32,1,36,78,12,5,11,32,1,36,79,12,4,11,32,1,36,72,12,3,11,32,1,36,73,12,2,11,32,1,36,74,12,1,11,32,1,36,75,11,11,6,0,65,4,16,18,11,120,1,3,127,65,0,36,86,32,0,16,176,1,69,4,64,65,1,33,1,11,32,0,65,1,16,177,1,32,1,4,64,65,0,33,1,32,0,65,3,77,4,64,65,1,33,1,11,65,0,33,0,65,4,65,128,254,3,16,13,34,3,16,2,34,2,4,127,32,1,5,32,2,11,65,1,113,4,64,65,1,33,0,11,65,5,32,3,16,2,34,2,4,127,32,1,69,5,32,2,11,65,1,113,4,64,65,1,33,0,11,32,0,4,64,16,178,1,11,11,11,9,0,32,0,65,0,16,177,1,11,154,1,0,32,0,65,0,74,4,64,65,0,16,179,1,5,65,0,16,180,1,11,32,1,65,0,74,4,64,65,1,16,179,1,5,65,1,16,180,1,11,32,2,65,0,74,4,64,65,2,16,179,1,5,65,2,16,180,1,11,32,3,65,0,74,4,64,65,3,16,179,1,5,65,3,16,180,1,11,32,4,65,0,74,4,64,65,4,16,179,1,5,65,4,16,180,1,11,32,5,65,0,74,4,64,65,5,16,179,1,5,65,5,16,180,1,11,32,6,65,0,74,4,64,65,6,16,179,1,5,65,6,16,180,1,11,32,7,65,0,74,4,64,65,7,16,179,1,5,65,7,16,180,1,11,11,4,0,35,70,11,6,0,65,0,36,70,11,20,0,32,0,32,1,65,50,108,65,255,255,3,113,106,65,255,255,3,113,11,22,0,32,1,4,64,32,0,65,1,58,0,0,5,32,0,65,0,58,0,0,11,11,158,1,0,65,0,65,0,16,184,1,35,1,58,0,0,65,1,65,0,16,184,1,35,3,58,0,0,65,2,65,0,16,184,1,35,4,58,0,0,65,3,65,0,16,184,1,35,5,58,0,0,65,4,65,0,16,184,1,35,6,58,0,0,65,5,65,0,16,184,1,35,7,58,0,0,65,6,65,0,16,184,1,35,8,58,0,0,65,7,65,0,16,184,1,35,2,58,0,0,65,8,65,0,16,184,1,35,9,59,1,0,65,10,65,0,16,184,1,35,0,59,1,0,65,12,65,0,16,184,1,35,84,54,2,0,65,17,65,0,16,184,1,35,85,16,185,1,65,18,65,0,16,184,1,35,86,16,185,1,11,26,0,65,0,65,1,16,184,1,35,88,54,2,0,65,4,65,1,16,184,1,35,19,58,0,0,11,26,0,65,0,65,2,16,184,1,35,87,16,185,1,65,1,65,2,16,184,1,35,91,16,185,1,11,3,0,1,11,110,0,65,0,65,4,16,184,1,35,14,59,1,0,65,2,65,4,16,184,1,35,18,59,1,0,65,4,65,4,16,184,1,35,12,16,185,1,65,5,65,4,16,184,1,35,17,16,185,1,65,6,65,4,16,184,1,35,10,16,185,1,65,7,65,4,16,184,1,35,15,16,185,1,65,8,65,4,16,184,1,35,11,16,185,1,65,9,65,4,16,184,1,35,16,16,185,1,65,10,65,4,16,184,1,35,13,16,185,1,11,38,0,65,0,65,5,16,184,1,35,24,54,2,0,65,4,65,5,16,184,1,35,21,54,2,0,65,8,65,5,16,184,1,35,23,54,2,0,11,38,0,65,0,65,6,16,184,1,35,27,54,2,0,65,4,65,6,16,184,1,35,69,58,0,0,65,5,65,6,16,184,1,35,28,58,0,0,11,122,0,65,0,65,7,16,184,1,35,30,16,185,1,65,1,65,7,16,184,1,35,48,54,2,0,65,5,65,7,16,184,1,35,40,54,2,0,65,9,65,7,16,184,1,35,29,54,2,0,65,14,65,7,16,184,1,35,41,54,2,0,65,19,65,7,16,184,1,35,92,58,0,0,65,20,65,7,16,184,1,35,57,58,0,0,65,25,65,7,16,184,1,35,38,16,185,1,65,26,65,7,16,184,1,35,37,54,2,0,65,31,65,7,16,184,1,35,39,59,1,0,11,86,0,65,0,65,8,16,184,1,35,32,16,185,1,65,1,65,8,16,184,1,35,50,54,2,0,65,5,65,8,16,184,1,35,42,54,2,0,65,9,65,8,16,184,1,35,31,54,2,0,65,14,65,8,16,184,1,35,43,54,2,0,65,19,65,8,16,184,1,35,93,58,0,0,65,20,65,8,16,184,1,35,59,58,0,0,11,50,0,65,0,65,9,16,184,1,35,34,16,185,1,65,1,65,9,16,184,1,35,52,54,2,0,65,5,65,9,16,184,1,35,33,54,2,0,65,9,65,9,16,184,1,35,61,59,1,0,11,74,0,65,0,65,10,16,184,1,35,36,16,185,1,65,1,65,10,16,184,1,35,55,54,2,0,65,5,65,10,16,184,1,35,44,54,2,0,65,9,65,10,16,184,1,35,35,54,2,0,65,14,65,10,16,184,1,35,45,54,2,0,65,19,65,10,16,184,1,35,64,59,1,0,11,35,0,16,186,1,16,187,1,16,188,1,16,189,1,16,190,1,16,191,1,16,192,1,16,193,1,16,194,1,16,195,1,16,196,1,11,18,0,32,0,45,0,0,65,0,75,4,64,65,1,15,11,65,0,11,158,1,0,65,0,65,0,16,184,1,45,0,0,36,1,65,1,65,0,16,184,1,45,0,0,36,3,65,2,65,0,16,184,1,45,0,0,36,4,65,3,65,0,16,184,1,45,0,0,36,5,65,4,65,0,16,184,1,45,0,0,36,6,65,5,65,0,16,184,1,45,0,0,36,7,65,6,65,0,16,184,1,45,0,0,36,8,65,7,65,0,16,184,1,45,0,0,36,2,65,8,65,0,16,184,1,47,1,0,36,9,65,10,65,0,16,184,1,47,1,0,36,0,65,12,65,0,16,184,1,40,2,0,36,84,65,17,65,0,16,184,1,16,198,1,36,85,65,18,65,0,16,184,1,16,198,1,36,86,11,26,0,65,0,65,1,16,184,1,40,2,0,36,88,65,4,65,1,16,184,1,45,0,0,36,19,11,26,0,65,0,65,2,16,184,1,16,198,1,36,87,65,1,65,2,16,184,1,16,198,1,36,91,11,110,0,65,0,65,4,16,184,1,47,1,0,36,14,65,2,65,4,16,184,1,47,1,0,36,18,65,4,65,4,16,184,1,16,198,1,36,12,65,5,65,4,16,184,1,16,198,1,36,17,65,6,65,4,16,184,1,16,198,1,36,10,65,7,65,4,16,184,1,16,198,1,36,15,65,8,65,4,16,184,1,16,198,1,36,11,65,9,65,4,16,184,1,16,198,1,36,16,65,10,65,4,16,184,1,16,198,1,36,13,11,38,0,65,0,65,5,16,184,1,40,2,0,36,24,65,4,65,5,16,184,1,40,2,0,36,21,65,8,65,5,16,184,1,40,2,0,36,23,11,41,0,65,0,65,6,16,184,1,40,2,0,36,27,65,4,65,6,16,184,1,45,0,0,36,69,65,5,65,6,16,184,1,45,0,0,36,28,16,183,1,11,122,0,65,0,65,7,16,184,1,16,198,1,36,30,65,1,65,7,16,184,1,40,2,0,36,48,65,5,65,7,16,184,1,40,2,0,36,40,65,9,65,7,16,184,1,40,2,0,36,29,65,14,65,7,16,184,1,40,2,0,36,41,65,19,65,7,16,184,1,45,0,0,36,92,65,20,65,7,16,184,1,45,0,0,36,57,65,25,65,7,16,184,1,16,198,1,36,38,65,26,65,7,16,184,1,40,2,0,36,37,65,31,65,7,16,184,1,47,1,0,36,39,11,86,0,65,0,65,8,16,184,1,16,198,1,36,32,65,1,65,8,16,184,1,40,2,0,36,50,65,5,65,8,16,184,1,40,2,0,36,42,65,9,65,8,16,184,1,40,2,0,36,31,65,14,65,8,16,184,1,40,2,0,36,43,65,19,65,8,16,184,1,45,0,0,36,93,65,20,65,8,16,184,1,45,0,0,36,59,11,50,0,65,0,65,9,16,184,1,16,198,1,36,34,65,1,65,9,16,184,1,40,2,0,36,52,65,5,65,9,16,184,1,40,2,0,36,33,65,9,65,9,16,184,1,47,1,0,36,61,11,74,0,65,0,65,10,16,184,1,16,198,1,36,36,65,1,65,10,16,184,1,40,2,0,36,55,65,5,65,10,16,184,1,40,2,0,36,44,65,9,65,10,16,184,1,40,2,0,36,35,65,14,65,10,16,184,1,40,2,0,36,45,65,19,65,10,16,184,1,47,1,0,36,64,11,35,0,16,199,1,16,200,1,16,201,1,16,189,1,16,202,1,16,203,1,16,204,1,16,205,1,16,206,1,16,207,1,16,208,1,11,4,0,35,1,11,4,0,35,3,11,4,0,35,4,11,4,0,35,5,11,4,0,35,6,11,4,0,35,7,11,4,0,35,8,11,4,0,35,2,11,4,0,35,0,11,4,0,35,9,11,4,0,35,94,11,6,0,35,0,16,88,11,11,125,2,0,65,128,240,156,4,11,67,32,0,0,0,105,0,110,0,105,0,116,0,105,0,97,0,108,0,105,0,122,0,105,0,110,0,103,0,32,0,40,0,105,0,110,0,99,0,108,0,117,0,100,0,101,0,66,0,111,0,111,0,116,0,82,0,111,0,109,0,61,0,36,0,48,0,41,0,65,196,240,156,4,11,41,19,0,0,0,79,0,112,0,99,0,111,0,100,0,101,0,32,0,97,0,116,0,32,0,99,0,114,0,97,0,115,0,104,0,58,0,32,0,36,0,48,0,234,69,4,110,97,109,101,1,226,69,222,1,0,26,119,97,115,109,47,104,101,108,112,101,114,115,47,105,110,100,101,120,47,101,110,118,46,108,111,103,1,22,119,97,115,109,47,104,101,108,112,101,114,115,47,105,110,100,101,120,47,108,111,103,2,33,119,97,115,109,47,104,101,108,112,101,114,115,47,105,110,100,101,120,47,99,104,101,99,107,66,105,116,79,110,66,121,116,101,3,33,119,97,115,109,47,109,101,109,111,114,121,47,98,97,110,107,105,110,103,47,104,97,110,100,108,101,66,97,110,107,105,110,103,4,37,119,97,115,109,47,109,101,109,111,114,121,47,98,97,110,107,105,110,103,47,103,101,116,82,111,109,66,97,110,107,65,100,100,114,101,115,115,5,37,119,97,115,109,47,109,101,109,111,114,121,47,98,97,110,107,105,110,103,47,103,101,116,82,97,109,66,97,110,107,65,100,100,114,101,115,115,6,55,119,97,115,109,47,109,101,109,111,114,121,47,109,101,109,111,114,121,77,97,112,47,103,101,116,87,97,115,109,66,111,121,79,102,102,115,101,116,70,114,111,109,71,97,109,101,66,111,121,79,102,102,115,101,116,7,49,119,97,115,109,47,109,101,109,111,114,121,47,115,116,111,114,101,47,95,101,105,103,104,116,66,105,116,83,116,111,114,101,73,110,116,111,87,97,115,109,66,111,121,77,101,109,111,114,121,8,52,119,97,115,109,47,109,101,109,111,114,121,47,115,116,111,114,101,47,101,105,103,104,116,66,105,116,83,116,111,114,101,73,110,116,111,71,66,77,101,109,111,114,121,83,107,105,112,84,114,97,112,115,9,32,119,97,115,109,47,104,101,108,112,101,114,115,47,105,110,100,101,120,47,115,112,108,105,116,72,105,103,104,66,121,116,101,10,31,119,97,115,109,47,104,101,108,112,101,114,115,47,105,110,100,101,120,47,115,112,108,105,116,76,111,119,66,121,116,101,11,54,119,97,115,109,47,109,101,109,111,114,121,47,115,116,111,114,101,47,115,105,120,116,101,101,110,66,105,116,83,116,111,114,101,73,110,116,111,71,66,77,101,109,111,114,121,83,107,105,112,84,114,97,112,115,12,47,119,97,115,109,47,109,101,109,111,114,121,47,108,111,97,100,47,95,101,105,103,104,116,66,105,116,76,111,97,100,70,114,111,109,87,97,115,109,66,111,121,77,101,109,111,114,121,13,50,119,97,115,109,47,109,101,109,111,114,121,47,108,111,97,100,47,101,105,103,104,116,66,105,116,76,111,97,100,70,114,111,109,71,66,77,101,109,111,114,121,83,107,105,112,84,114,97,112,115,14,33,119,97,115,109,47,116,105,109,101,114,115,47,105,110,100,101,120,47,95,105,115,84,105,109,101,114,69,110,97,98,108,101,100,15,39,119,97,115,109,47,116,105,109,101,114,115,47,105,110,100,101,120,47,95,99,104,101,99,107,68,105,118,105,100,101,114,82,101,103,105,115,116,101,114,16,50,119,97,115,109,47,116,105,109,101,114,115,47,105,110,100,101,120,47,95,103,101,116,67,117,114,114,101,110,116,67,121,99,108,101,67,111,117,110,116,101,114,70,114,101,113,117,101,110,99,121,17,31,119,97,115,109,47,104,101,108,112,101,114,115,47,105,110,100,101,120,47,115,101,116,66,105,116,79,110,66,121,116,101,18,39,119,97,115,109,47,105,110,116,101,114,114,117,112,116,115,47,105,110,100,101,120,47,95,114,101,113,117,101,115,116,73,110,116,101,114,114,117,112,116,19,43,119,97,115,109,47,105,110,116,101,114,114,117,112,116,115,47,105,110,100,101,120,47,114,101,113,117,101,115,116,84,105,109,101,114,73,110,116,101,114,114,117,112,116,20,30,119,97,115,109,47,116,105,109,101,114,115,47,105,110,100,101,120,47,117,112,100,97,116,101,84,105,109,101,114,115,21,36,119,97,115,109,47,116,105,109,101,114,115,47,105,110,100,101,120,47,98,97,116,99,104,80,114,111,99,101,115,115,84,105,109,101,114,115,22,42,119,97,115,109,47,115,111,117,110,100,47,114,101,103,105,115,116,101,114,115,47,103,101,116,82,101,103,105,115,116,101,114,52,79,102,67,104,97,110,110,101,108,23,40,119,97,115,109,47,115,111,117,110,100,47,108,101,110,103,116,104,47,105,115,67,104,97,110,110,101,108,76,101,110,103,116,104,69,110,97,98,108,101,100,24,41,119,97,115,109,47,115,111,117,110,100,47,99,104,97,110,110,101,108,49,47,67,104,97,110,110,101,108,49,46,117,112,100,97,116,101,76,101,110,103,116,104,25,41,119,97,115,109,47,115,111,117,110,100,47,99,104,97,110,110,101,108,50,47,67,104,97,110,110,101,108,50,46,117,112,100,97,116,101,76,101,110,103,116,104,26,41,119,97,115,109,47,115,111,117,110,100,47,99,104,97,110,110,101,108,51,47,67,104,97,110,110,101,108,51,46,117,112,100,97,116,101,76,101,110,103,116,104,27,41,119,97,115,109,47,115,111,117,110,100,47,99,104,97,110,110,101,108,52,47,67,104,97,110,110,101,108,52,46,117,112,100,97,116,101,76,101,110,103,116,104,28,34,119,97,115,109,47,115,111,117,110,100,47,99,104,97,110,110,101,108,49,47,103,101,116,83,119,101,101,112,80,101,114,105,111,100,29,33,119,97,115,109,47,115,111,117,110,100,47,99,104,97,110,110,101,108,49,47,103,101,116,83,119,101,101,112,83,104,105,102,116,30,44,119,97,115,109,47,115,111,117,110,100,47,99,104,97,110,110,101,108,49,47,103,101,116,78,101,119,70,114,101,113,117,101,110,99,121,70,114,111,109,83,119,101,101,112,31,42,119,97,115,109,47,115,111,117,110,100,47,114,101,103,105,115,116,101,114,115,47,115,101,116,82,101,103,105,115,116,101,114,51,79,102,67,104,97,110,110,101,108,32,42,119,97,115,109,47,115,111,117,110,100,47,114,101,103,105,115,116,101,114,115,47,115,101,116,82,101,103,105,115,116,101,114,52,79,102,67,104,97,110,110,101,108,33,40,119,97,115,109,47,115,111,117,110,100,47,102,114,101,113,117,101,110,99,121,47,115,101,116,67,104,97,110,110,101,108,70,114,101,113,117,101,110,99,121,34,50,119,97,115,109,47,115,111,117,110,100,47,99,104,97,110,110,101,108,49,47,99,97,108,99,117,108,97,116,101,83,119,101,101,112,65,110,100,67,104,101,99,107,79,118,101,114,102,108,111,119,35,40,119,97,115,109,47,115,111,117,110,100,47,99,104,97,110,110,101,108,49,47,67,104,97,110,110,101,108,49,46,117,112,100,97,116,101,83,119,101,101,112,36,42,119,97,115,109,47,115,111,117,110,100,47,114,101,103,105,115,116,101,114,115,47,103,101,116,82,101,103,105,115,116,101,114,50,79,102,67,104,97,110,110,101,108,37,44,119,97,115,109,47,115,111,117,110,100,47,101,110,118,101,108,111,112,101,47,103,101,116,67,104,97,110,110,101,108,69,110,118,101,108,111,112,101,80,101,114,105,111,100,38,45,119,97,115,109,47,115,111,117,110,100,47,101,110,118,101,108,111,112,101,47,103,101,116,67,104,97,110,110,101,108,69,110,118,101,108,111,112,101,65,100,100,77,111,100,101,39,43,119,97,115,109,47,115,111,117,110,100,47,99,104,97,110,110,101,108,49,47,67,104,97,110,110,101,108,49,46,117,112,100,97,116,101,69,110,118,101,108,111,112,101,40,43,119,97,115,109,47,115,111,117,110,100,47,99,104,97,110,110,101,108,50,47,67,104,97,110,110,101,108,50,46,117,112,100,97,116,101,69,110,118,101,108,111,112,101,41,43,119,97,115,109,47,115,111,117,110,100,47,99,104,97,110,110,101,108,52,47,67,104,97,110,110,101,108,52,46,117,112,100,97,116,101,69,110,118,101,108,111,112,101,42,37,119,97,115,109,47,115,111,117,110,100,47,115,111,117,110,100,47,117,112,100,97,116,101,70,114,97,109,101,83,101,113,117,101,110,99,101,114,43,40,119,97,115,109,47,115,111,117,110,100,47,114,101,103,105,115,116,101,114,115,47,105,115,67,104,97,110,110,101,108,68,97,99,69,110,97,98,108,101,100,44,46,119,97,115,109,47,115,111,117,110,100,47,99,104,97,110,110,101,108,49,47,67,104,97,110,110,101,108,49,46,119,105,108,108,67,104,97,110,110,101,108,85,112,100,97,116,101,45,46,119,97,115,109,47,115,111,117,110,100,47,99,104,97,110,110,101,108,50,47,67,104,97,110,110,101,108,50,46,119,105,108,108,67,104,97,110,110,101,108,85,112,100,97,116,101,46,46,119,97,115,109,47,115,111,117,110,100,47,99,104,97,110,110,101,108,51,47,67,104,97,110,110,101,108,51,46,119,105,108,108,67,104,97,110,110,101,108,85,112,100,97,116,101,47,46,119,97,115,109,47,115,111,117,110,100,47,99,104,97,110,110,101,108,52,47,67,104,97,110,110,101,108,52,46,119,105,108,108,67,104,97,110,110,101,108,85,112,100,97,116,101,48,42,119,97,115,109,47,115,111,117,110,100,47,114,101,103,105,115,116,101,114,115,47,103,101,116,82,101,103,105,115,116,101,114,51,79,102,67,104,97,110,110,101,108,49,40,119,97,115,109,47,115,111,117,110,100,47,102,114,101,113,117,101,110,99,121,47,103,101,116,67,104,97,110,110,101,108,70,114,101,113,117,101,110,99,121,50,42,119,97,115,109,47,115,111,117,110,100,47,114,101,103,105,115,116,101,114,115,47,103,101,116,82,101,103,105,115,116,101,114,49,79,102,67,104,97,110,110,101,108,51,30,119,97,115,109,47,115,111,117,110,100,47,100,117,116,121,47,103,101,116,67,104,97,110,110,101,108,68,117,116,121,52,61,119,97,115,109,47,115,111,117,110,100,47,100,117,116,121,47,105,115,68,117,116,121,67,121,99,108,101,67,108,111,99,107,80,111,115,105,116,105,118,101,79,114,78,101,103,97,116,105,118,101,70,111,114,87,97,118,101,102,111,114,109,53,38,119,97,115,109,47,115,111,117,110,100,47,99,104,97,110,110,101,108,49,47,67,104,97,110,110,101,108,49,46,103,101,116,83,97,109,112,108,101,54,54,119,97,115,109,47,115,111,117,110,100,47,99,104,97,110,110,101,108,49,47,67,104,97,110,110,101,108,49,46,103,101,116,83,97,109,112,108,101,70,114,111,109,67,121,99,108,101,67,111,117,110,116,101,114,55,38,119,97,115,109,47,115,111,117,110,100,47,99,104,97,110,110,101,108,50,47,67,104,97,110,110,101,108,50,46,103,101,116,83,97,109,112,108,101,56,54,119,97,115,109,47,115,111,117,110,100,47,99,104,97,110,110,101,108,50,47,67,104,97,110,110,101,108,50,46,103,101,116,83,97,109,112,108,101,70,114,111,109,67,121,99,108,101,67,111,117,110,116,101,114,57,38,119,97,115,109,47,115,111,117,110,100,47,99,104,97,110,110,101,108,51,47,67,104,97,110,110,101,108,51,46,103,101,116,83,97,109,112,108,101,58,54,119,97,115,109,47,115,111,117,110,100,47,99,104,97,110,110,101,108,51,47,67,104,97,110,110,101,108,51,46,103,101,116,83,97,109,112,108,101,70,114,111,109,67,121,99,108,101,67,111,117,110,116,101,114,59,66,119,97,115,109,47,115,111,117,110,100,47,99,104,97,110,110,101,108,52,47,67,104,97,110,110,101,108,52,46,103,101,116,78,111,105,115,101,67,104,97,110,110,101,108,68,105,118,105,115,111,114,70,114,111,109,68,105,118,105,115,111,114,67,111,100,101,60,54,119,97,115,109,47,115,111,117,110,100,47,99,104,97,110,110,101,108,52,47,67,104,97,110,110,101,108,52,46,103,101,116,78,111,105,115,101,67,104,97,110,110,101,108,67,108,111,99,107,83,104,105,102,116,61,59,119,97,115,109,47,115,111,117,110,100,47,99,104,97,110,110,101,108,52,47,67,104,97,110,110,101,108,52,46,103,101,116,78,111,105,115,101,67,104,97,110,110,101,108,70,114,101,113,117,101,110,99,121,80,101,114,105,111,100,62,55,119,97,115,109,47,115,111,117,110,100,47,99,104,97,110,110,101,108,52,47,67,104,97,110,110,101,108,52,46,105,115,78,111,105,115,101,67,104,97,110,110,101,108,87,105,100,116,104,77,111,100,101,83,101,116,63,38,119,97,115,109,47,115,111,117,110,100,47,99,104,97,110,110,101,108,52,47,67,104,97,110,110,101,108,52,46,103,101,116,83,97,109,112,108,101,64,54,119,97,115,109,47,115,111,117,110,100,47,99,104,97,110,110,101,108,52,47,67,104,97,110,110,101,108,52,46,103,101,116,83,97,109,112,108,101,70,114,111,109,67,121,99,108,101,67,111,117,110,116,101,114,65,49,119,97,115,109,47,115,111,117,110,100,47,114,101,103,105,115,116,101,114,115,47,105,115,67,104,97,110,110,101,108,69,110,97,98,108,101,100,79,110,76,101,102,116,79,117,116,112,117,116,66,50,119,97,115,109,47,115,111,117,110,100,47,114,101,103,105,115,116,101,114,115,47,105,115,67,104,97,110,110,101,108,69,110,97,98,108,101,100,79,110,82,105,103,104,116,79,117,116,112,117,116,67,40,119,97,115,109,47,115,111,117,110,100,47,115,111,117,110,100,47,103,101,116,83,97,109,112,108,101,65,115,85,110,115,105,103,110,101,100,66,121,116,101,68,35,119,97,115,109,47,104,101,108,112,101,114,115,47,105,110,100,101,120,47,99,111,110,99,97,116,101,110,97,116,101,66,121,116,101,115,69,34,119,97,115,109,47,115,111,117,110,100,47,115,111,117,110,100,47,109,105,120,67,104,97,110,110,101,108,83,97,109,112,108,101,115,70,53,119,97,115,109,47,109,101,109,111,114,121,47,109,101,109,111,114,121,47,115,101,116,76,101,102,116,65,110,100,82,105,103,104,116,79,117,116,112,117,116,70,111,114,65,117,100,105,111,81,117,101,117,101,71,32,119,97,115,109,47,115,111,117,110,100,47,115,111,117,110,100,47,97,99,99,117,109,117,108,97,116,101,83,111,117,110,100,72,31,119,97,115,109,47,115,111,117,110,100,47,115,111,117,110,100,47,99,97,108,99,117,108,97,116,101,83,111,117,110,100,73,28,119,97,115,109,47,115,111,117,110,100,47,115,111,117,110,100,47,117,112,100,97,116,101,83,111,117,110,100,74,34,119,97,115,109,47,115,111,117,110,100,47,115,111,117,110,100,47,98,97,116,99,104,80,114,111,99,101,115,115,65,117,100,105,111,75,41,119,97,115,109,47,115,111,117,110,100,47,108,101,110,103,116,104,47,115,101,116,67,104,97,110,110,101,108,76,101,110,103,116,104,67,111,117,110,116,101,114,76,45,119,97,115,109,47,115,111,117,110,100,47,114,101,103,105,115,116,101,114,115,47,103,101,116,67,104,97,110,110,101,108,83,116,97,114,116,105,110,103,86,111,108,117,109,101,77,36,119,97,115,109,47,115,111,117,110,100,47,99,104,97,110,110,101,108,49,47,67,104,97,110,110,101,108,49,46,116,114,105,103,103,101,114,78,36,119,97,115,109,47,115,111,117,110,100,47,99,104,97,110,110,101,108,50,47,67,104,97,110,110,101,108,50,46,116,114,105,103,103,101,114,79,36,119,97,115,109,47,115,111,117,110,100,47,99,104,97,110,110,101,108,51,47,67,104,97,110,110,101,108,51,46,116,114,105,103,103,101,114,80,36,119,97,115,109,47,115,111,117,110,100,47,99,104,97,110,110,101,108,52,47,67,104,97,110,110,101,108,52,46,116,114,105,103,103,101,114,81,48,119,97,115,109,47,115,111,117,110,100,47,114,101,103,105,115,116,101,114,115,47,104,97,110,100,108,101,100,87,114,105,116,101,84,111,83,111,117,110,100,82,101,103,105,115,116,101,114,82,35,119,97,115,109,47,109,101,109,111,114,121,47,119,114,105,116,101,84,114,97,112,115,47,95,100,109,97,84,114,97,110,115,102,101,114,83,38,119,97,115,109,47,109,101,109,111,114,121,47,119,114,105,116,101,84,114,97,112,115,47,99,104,101,99,107,87,114,105,116,101,84,114,97,112,115,84,43,119,97,115,109,47,109,101,109,111,114,121,47,115,116,111,114,101,47,101,105,103,104,116,66,105,116,83,116,111,114,101,73,110,116,111,71,66,77,101,109,111,114,121,85,33,119,97,115,109,47,104,101,108,112,101,114,115,47,105,110,100,101,120,47,114,101,115,101,116,66,105,116,79,110,66,121,116,101,86,32,119,97,115,109,47,106,111,121,112,97,100,47,105,110,100,101,120,47,103,101,116,74,111,121,112,97,100,83,116,97,116,101,87,36,119,97,115,109,47,109,101,109,111,114,121,47,114,101,97,100,84,114,97,112,115,47,99,104,101,99,107,82,101,97,100,84,114,97,112,115,88,41,119,97,115,109,47,109,101,109,111,114,121,47,108,111,97,100,47,101,105,103,104,116,66,105,116,76,111,97,100,70,114,111,109,71,66,77,101,109,111,114,121,89,38,119,97,115,109,47,109,101,109,111,114,121,47,109,101,109,111,114,121,47,105,110,105,116,105,97,108,105,122,101,67,97,114,116,114,105,100,103,101,90,39,119,97,115,109,47,115,111,117,110,100,47,99,104,97,110,110,101,108,49,47,67,104,97,110,110,101,108,49,46,105,110,105,116,105,97,108,105,122,101,91,39,119,97,115,109,47,115,111,117,110,100,47,99,104,97,110,110,101,108,50,47,67,104,97,110,110,101,108,50,46,105,110,105,116,105,97,108,105,122,101,92,39,119,97,115,109,47,115,111,117,110,100,47,99,104,97,110,110,101,108,51,47,67,104,97,110,110,101,108,51,46,105,110,105,116,105,97,108,105,122,101,93,39,119,97,115,109,47,115,111,117,110,100,47,99,104,97,110,110,101,108,52,47,67,104,97,110,110,101,108,52,46,105,110,105,116,105,97,108,105,122,101,94,32,119,97,115,109,47,115,111,117,110,100,47,115,111,117,110,100,47,105,110,105,116,105,97,108,105,122,101,83,111,117,110,100,95,23,119,97,115,109,47,99,112,117,47,99,112,117,47,105,110,105,116,105,97,108,105,122,101,96,18,119,97,115,109,47,99,111,110,102,105,103,47,99,111,110,102,105,103,97,25,119,97,115,109,47,99,112,117,47,102,108,97,103,115,47,115,101,116,70,108,97,103,66,105,116,98,31,119,97,115,109,47,99,112,117,47,102,108,97,103,115,47,115,101,116,72,97,108,102,67,97,114,114,121,70,108,97,103,99,47,119,97,115,109,47,99,112,117,47,102,108,97,103,115,47,99,104,101,99,107,65,110,100,83,101,116,69,105,103,104,116,66,105,116,72,97,108,102,67,97,114,114,121,70,108,97,103,100,26,119,97,115,109,47,99,112,117,47,102,108,97,103,115,47,115,101,116,90,101,114,111,70,108,97,103,101,30,119,97,115,109,47,99,112,117,47,102,108,97,103,115,47,115,101,116,83,117,98,116,114,97,99,116,70,108,97,103,102,27,119,97,115,109,47,99,112,117,47,102,108,97,103,115,47,115,101,116,67,97,114,114,121,70,108,97,103,103,33,119,97,115,109,47,104,101,108,112,101,114,115,47,105,110,100,101,120,47,114,111,116,97,116,101,66,121,116,101,76,101,102,116,104,45,119,97,115,109,47,109,101,109,111,114,121,47,115,116,111,114,101,47,115,105,120,116,101,101,110,66,105,116,83,116,111,114,101,73,110,116,111,71,66,77,101,109,111,114,121,105,52,119,97,115,109,47,99,112,117,47,102,108,97,103,115,47,99,104,101,99,107,65,110,100,83,101,116,83,105,120,116,101,101,110,66,105,116,70,108,97,103,115,65,100,100,79,118,101,114,102,108,111,119,106,34,119,97,115,109,47,104,101,108,112,101,114,115,47,105,110,100,101,120,47,114,111,116,97,116,101,66,121,116,101,82,105,103,104,116,107,31,119,97,115,109,47,99,112,117,47,111,112,99,111,100,101,115,47,104,97,110,100,108,101,79,112,99,111,100,101,48,120,108,27,119,97,115,109,47,99,112,117,47,102,108,97,103,115,47,103,101,116,67,97,114,114,121,70,108,97,103,109,45,119,97,115,109,47,104,101,108,112,101,114,115,47,105,110,100,101,120,47,114,111,116,97,116,101,66,121,116,101,76,101,102,116,84,104,114,111,117,103,104,67,97,114,114,121,110,25,119,97,115,109,47,99,112,117,47,99,112,117,47,114,101,108,97,116,105,118,101,74,117,109,112,111,46,119,97,115,109,47,104,101,108,112,101,114,115,47,105,110,100,101,120,47,114,111,116,97,116,101,66,121,116,101,82,105,103,104,116,84,104,114,111,117,103,104,67,97,114,114,121,112,31,119,97,115,109,47,99,112,117,47,111,112,99,111,100,101,115,47,104,97,110,100,108,101,79,112,99,111,100,101,49,120,113,26,119,97,115,109,47,99,112,117,47,102,108,97,103,115,47,103,101,116,90,101,114,111,70,108,97,103,114,31,119,97,115,109,47,99,112,117,47,102,108,97,103,115,47,103,101,116,72,97,108,102,67,97,114,114,121,70,108,97,103,115,30,119,97,115,109,47,99,112,117,47,102,108,97,103,115,47,103,101,116,83,117,98,116,114,97,99,116,70,108,97,103,116,31,119,97,115,109,47,99,112,117,47,111,112,99,111,100,101,115,47,104,97,110,100,108,101,79,112,99,111,100,101,50,120,117,31,119,97,115,109,47,99,112,117,47,111,112,99,111,100,101,115,47,104,97,110,100,108,101,79,112,99,111,100,101,51,120,118,31,119,97,115,109,47,99,112,117,47,111,112,99,111,100,101,115,47,104,97,110,100,108,101,79,112,99,111,100,101,52,120,119,31,119,97,115,109,47,99,112,117,47,111,112,99,111,100,101,115,47,104,97,110,100,108,101,79,112,99,111,100,101,53,120,120,31,119,97,115,109,47,99,112,117,47,111,112,99,111,100,101,115,47,104,97,110,100,108,101,79,112,99,111,100,101,54,120,121,31,119,97,115,109,47,99,112,117,47,111,112,99,111,100,101,115,47,104,97,110,100,108,101,79,112,99,111,100,101,55,120,122,43,119,97,115,109,47,99,112,117,47,102,108,97,103,115,47,99,104,101,99,107,65,110,100,83,101,116,69,105,103,104,116,66,105,116,67,97,114,114,121,70,108,97,103,123,34,119,97,115,109,47,99,112,117,47,105,110,115,116,114,117,99,116,105,111,110,115,47,97,100,100,65,82,101,103,105,115,116,101,114,124,46,119,97,115,109,47,99,112,117,47,105,110,115,116,114,117,99,116,105,111,110,115,47,97,100,100,65,84,104,114,111,117,103,104,67,97,114,114,121,82,101,103,105,115,116,101,114,125,31,119,97,115,109,47,99,112,117,47,111,112,99,111,100,101,115,47,104,97,110,100,108,101,79,112,99,111,100,101,56,120,126,34,119,97,115,109,47,99,112,117,47,105,110,115,116,114,117,99,116,105,111,110,115,47,115,117,98,65,82,101,103,105,115,116,101,114,127,46,119,97,115,109,47,99,112,117,47,105,110,115,116,114,117,99,116,105,111,110,115,47,115,117,98,65,84,104,114,111,117,103,104,67,97,114,114,121,82,101,103,105,115,116,101,114,128,1,31,119,97,115,109,47,99,112,117,47,111,112,99,111,100,101,115,47,104,97,110,100,108,101,79,112,99,111,100,101,57,120,129,1,34,119,97,115,109,47,99,112,117,47,105,110,115,116,114,117,99,116,105,111,110,115,47,97,110,100,65,82,101,103,105,115,116,101,114,130,1,34,119,97,115,109,47,99,112,117,47,105,110,115,116,114,117,99,116,105,111,110,115,47,120,111,114,65,82,101,103,105,115,116,101,114,131,1,31,119,97,115,109,47,99,112,117,47,111,112,99,111,100,101,115,47,104,97,110,100,108,101,79,112,99,111,100,101,65,120,132,1,33,119,97,115,109,47,99,112,117,47,105,110,115,116,114,117,99,116,105,111,110,115,47,111,114,65,82,101,103,105,115,116,101,114,133,1,33,119,97,115,109,47,99,112,117,47,105,110,115,116,114,117,99,116,105,111,110,115,47,99,112,65,82,101,103,105,115,116,101,114,134,1,31,119,97,115,109,47,99,112,117,47,111,112,99,111,100,101,115,47,104,97,110,100,108,101,79,112,99,111,100,101,66,120,135,1,43,119,97,115,109,47,109,101,109,111,114,121,47,108,111,97,100,47,115,105,120,116,101,101,110,66,105,116,76,111,97,100,70,114,111,109,71,66,77,101,109,111,114,121,136,1,40,119,97,115,109,47,99,112,117,47,105,110,115,116,114,117,99,116,105,111,110,115,47,114,111,116,97,116,101,82,101,103,105,115,116,101,114,76,101,102,116,137,1,41,119,97,115,109,47,99,112,117,47,105,110,115,116,114,117,99,116,105,111,110,115,47,114,111,116,97,116,101,82,101,103,105,115,116,101,114,82,105,103,104,116,138,1,52,119,97,115,109,47,99,112,117,47,105,110,115,116,114,117,99,116,105,111,110,115,47,114,111,116,97,116,101,82,101,103,105,115,116,101,114,76,101,102,116,84,104,114,111,117,103,104,67,97,114,114,121,139,1,53,119,97,115,109,47,99,112,117,47,105,110,115,116,114,117,99,116,105,111,110,115,47,114,111,116,97,116,101,82,101,103,105,115,116,101,114,82,105,103,104,116,84,104,114,111,117,103,104,67,97,114,114,121,140,1,39,119,97,115,109,47,99,112,117,47,105,110,115,116,114,117,99,116,105,111,110,115,47,115,104,105,102,116,76,101,102,116,82,101,103,105,115,116,101,114,141,1,50,119,97,115,109,47,99,112,117,47,105,110,115,116,114,117,99,116,105,111,110,115,47,115,104,105,102,116,82,105,103,104,116,65,114,105,116,104,109,101,116,105,99,82,101,103,105,115,116,101,114,142,1,43,119,97,115,109,47,99,112,117,47,105,110,115,116,114,117,99,116,105,111,110,115,47,115,119,97,112,78,105,98,98,108,101,115,79,110,82,101,103,105,115,116,101,114,143,1,47,119,97,115,109,47,99,112,117,47,105,110,115,116,114,117,99,116,105,111,110,115,47,115,104,105,102,116,82,105,103,104,116,76,111,103,105,99,97,108,82,101,103,105,115,116,101,114,144,1,39,119,97,115,109,47,99,112,117,47,105,110,115,116,114,117,99,116,105,111,110,115,47,116,101,115,116,66,105,116,79,110,82,101,103,105,115,116,101,114,145,1,38,119,97,115,109,47,99,112,117,47,105,110,115,116,114,117,99,116,105,111,110,115,47,115,101,116,66,105,116,79,110,82,101,103,105,115,116,101,114,146,1,33,119,97,115,109,47,99,112,117,47,99,98,79,112,99,111,100,101,115,47,104,97,110,100,108,101,67,98,79,112,99,111,100,101,147,1,31,119,97,115,109,47,99,112,117,47,111,112,99,111,100,101,115,47,104,97,110,100,108,101,79,112,99,111,100,101,67,120,148,1,35,119,97,115,109,47,105,110,116,101,114,114,117,112,116,115,47,105,110,100,101,120,47,115,101,116,73,110,116,101,114,114,117,112,116,115,149,1,31,119,97,115,109,47,99,112,117,47,111,112,99,111,100,101,115,47,104,97,110,100,108,101,79,112,99,111,100,101,68,120,150,1,31,119,97,115,109,47,99,112,117,47,111,112,99,111,100,101,115,47,104,97,110,100,108,101,79,112,99,111,100,101,69,120,151,1,31,119,97,115,109,47,99,112,117,47,111,112,99,111,100,101,115,47,104,97,110,100,108,101,79,112,99,111,100,101,70,120,152,1,30,119,97,115,109,47,99,112,117,47,111,112,99,111,100,101,115,47,101,120,101,99,117,116,101,79,112,99,111,100,101,153,1,42,119,97,115,109,47,105,110,116,101,114,114,117,112,116,115,47,105,110,100,101,120,47,97,114,101,73,110,116,101,114,114,117,112,116,115,69,110,97,98,108,101,100,154,1,42,119,97,115,109,47,105,110,116,101,114,114,117,112,116,115,47,105,110,100,101,120,47,97,114,101,73,110,116,101,114,114,117,112,116,115,80,101,110,100,105,110,103,155,1,30,119,97,115,109,47,103,114,97,112,104,105,99,115,47,108,99,100,47,105,115,76,99,100,69,110,97,98,108,101,100,156,1,41,119,97,115,109,47,105,110,116,101,114,114,117,112,116,115,47,105,110,100,101,120,47,114,101,113,117,101,115,116,76,99,100,73,110,116,101,114,114,117,112,116,157,1,30,119,97,115,109,47,103,114,97,112,104,105,99,115,47,108,99,100,47,115,101,116,76,99,100,83,116,97,116,117,115,158,1,44,119,97,115,109,47,103,114,97,112,104,105,99,115,47,114,101,110,100,101,114,85,116,105,108,115,47,103,101,116,84,105,108,101,68,97,116,97,65,100,100,114,101,115,115,159,1,45,119,97,115,109,47,103,114,97,112,104,105,99,115,47,114,101,110,100,101,114,85,116,105,108,115,47,103,101,116,67,111,108,111,114,70,114,111,109,80,97,108,101,116,116,101,160,1,54,119,97,115,109,47,109,101,109,111,114,121,47,109,101,109,111,114,121,47,115,101,116,80,105,120,101,108,79,110,70,114,97,109,101,68,105,114,101,99,116,108,121,84,111,87,97,115,109,77,101,109,111,114,121,161,1,41,119,97,115,109,47,103,114,97,112,104,105,99,115,47,98,97,99,107,103,114,111,117,110,100,47,114,101,110,100,101,114,66,97,99,107,103,114,111,117,110,100,162,1,33,119,97,115,109,47,103,114,97,112,104,105,99,115,47,119,105,110,100,111,119,47,114,101,110,100,101,114,87,105,110,100,111,119,163,1,34,119,97,115,109,47,109,101,109,111,114,121,47,109,101,109,111,114,121,47,103,101,116,80,105,120,101,108,79,110,70,114,97,109,101,164,1,34,119,97,115,109,47,109,101,109,111,114,121,47,109,101,109,111,114,121,47,115,101,116,80,105,120,101,108,79,110,70,114,97,109,101,165,1,35,119,97,115,109,47,103,114,97,112,104,105,99,115,47,115,112,114,105,116,101,115,47,114,101,110,100,101,114,83,112,114,105,116,101,115,166,1,36,119,97,115,109,47,103,114,97,112,104,105,99,115,47,103,114,97,112,104,105,99,115,47,95,100,114,97,119,83,99,97,110,108,105,110,101,167,1,41,119,97,115,109,47,103,114,97,112,104,105,99,115,47,103,114,97,112,104,105,99,115,47,95,114,101,110,100,101,114,69,110,116,105,114,101,70,114,97,109,101,168,1,41,119,97,115,109,47,109,101,109,111,114,121,47,109,101,109,111,114,121,47,115,116,111,114,101,70,114,97,109,101,84,111,66,101,82,101,110,100,101,114,101,100,169,1,44,119,97,115,109,47,105,110,116,101,114,114,117,112,116,115,47,105,110,100,101,120,47,114,101,113,117,101,115,116,86,66,108,97,110,107,73,110,116,101,114,114,117,112,116,170,1,37,119,97,115,109,47,103,114,97,112,104,105,99,115,47,103,114,97,112,104,105,99,115,47,117,112,100,97,116,101,71,114,97,112,104,105,99,115,171,1,38,119,97,115,109,47,105,110,116,101,114,114,117,112,116,115,47,105,110,100,101,120,47,95,104,97,110,100,108,101,73,110,116,101,114,114,117,112,116,172,1,37,119,97,115,109,47,105,110,116,101,114,114,117,112,116,115,47,105,110,100,101,120,47,99,104,101,99,107,73,110,116,101,114,114,117,112,116,115,173,1,30,119,97,115,109,47,99,112,117,47,111,112,99,111,100,101,115,47,101,109,117,108,97,116,105,111,110,83,116,101,112,174,1,43,119,97,115,109,47,103,114,97,112,104,105,99,115,47,103,114,97,112,104,105,99,115,47,98,97,116,99,104,80,114,111,99,101,115,115,71,114,97,112,104,105,99,115,175,1,23,119,97,115,109,47,99,112,117,47,111,112,99,111,100,101,115,47,117,112,100,97,116,101,176,1,51,119,97,115,109,47,106,111,121,112,97,100,47,105,110,100,101,120,47,95,103,101,116,74,111,121,112,97,100,66,117,116,116,111,110,83,116,97,116,101,70,114,111,109,66,117,116,116,111,110,73,100,177,1,51,119,97,115,109,47,106,111,121,112,97,100,47,105,110,100,101,120,47,95,115,101,116,74,111,121,112,97,100,66,117,116,116,111,110,83,116,97,116,101,70,114,111,109,66,117,116,116,111,110,73,100,178,1,44,119,97,115,109,47,105,110,116,101,114,114,117,112,116,115,47,105,110,100,101,120,47,114,101,113,117,101,115,116,74,111,121,112,97,100,73,110,116,101,114,114,117,112,116,179,1,36,119,97,115,109,47,106,111,121,112,97,100,47,105,110,100,101,120,47,95,112,114,101,115,115,74,111,121,112,97,100,66,117,116,116,111,110,180,1,38,119,97,115,109,47,106,111,121,112,97,100,47,105,110,100,101,120,47,95,114,101,108,101,97,115,101,74,111,121,112,97,100,66,117,116,116,111,110,181,1,32,119,97,115,109,47,106,111,121,112,97,100,47,105,110,100,101,120,47,115,101,116,74,111,121,112,97,100,83,116,97,116,101,182,1,35,119,97,115,109,47,115,111,117,110,100,47,115,111,117,110,100,47,103,101,116,65,117,100,105,111,81,117,101,117,101,73,110,100,101,120,183,1,32,119,97,115,109,47,115,111,117,110,100,47,115,111,117,110,100,47,114,101,115,101,116,65,117,100,105,111,81,117,101,117,101,184,1,43,119,97,115,109,47,109,101,109,111,114,121,47,109,101,109,111,114,121,47,103,101,116,83,97,118,101,83,116,97,116,101,77,101,109,111,114,121,79,102,102,115,101,116,185,1,50,119,97,115,109,47,109,101,109,111,114,121,47,115,116,111,114,101,47,115,116,111,114,101,66,111,111,108,101,97,110,68,105,114,101,99,116,108,121,84,111,87,97,115,109,77,101,109,111,114,121,186,1,26,119,97,115,109,47,99,112,117,47,99,112,117,47,67,112,117,46,115,97,118,101,83,116,97,116,101,187,1,41,119,97,115,109,47,103,114,97,112,104,105,99,115,47,103,114,97,112,104,105,99,115,47,71,114,97,112,104,105,99,115,46,115,97,118,101,83,116,97,116,101,188,1,42,119,97,115,109,47,105,110,116,101,114,114,117,112,116,115,47,105,110,100,101,120,47,73,110,116,101,114,114,117,112,116,115,46,115,97,118,101,83,116,97,116,101,189,1,34,119,97,115,109,47,106,111,121,112,97,100,47,105,110,100,101,120,47,74,111,121,112,97,100,46,115,97,118,101,83,116,97,116,101,190,1,35,119,97,115,109,47,109,101,109,111,114,121,47,109,101,109,111,114,121,47,77,101,109,111,114,121,46,115,97,118,101,83,116,97,116,101,191,1,34,119,97,115,109,47,116,105,109,101,114,115,47,105,110,100,101,120,47,84,105,109,101,114,115,46,115,97,118,101,83,116,97,116,101,192,1,32,119,97,115,109,47,115,111,117,110,100,47,115,111,117,110,100,47,83,111,117,110,100,46,115,97,118,101,83,116,97,116,101,193,1,38,119,97,115,109,47,115,111,117,110,100,47,99,104,97,110,110,101,108,49,47,67,104,97,110,110,101,108,49,46,115,97,118,101,83,116,97,116,101,194,1,38,119,97,115,109,47,115,111,117,110,100,47,99,104,97,110,110,101,108,50,47,67,104,97,110,110,101,108,50,46,115,97,118,101,83,116,97,116,101,195,1,38,119,97,115,109,47,115,111,117,110,100,47,99,104,97,110,110,101,108,51,47,67,104,97,110,110,101,108,51,46,115,97,118,101,83,116,97,116,101,196,1,38,119,97,115,109,47,115,111,117,110,100,47,99,104,97,110,110,101,108,52,47,67,104,97,110,110,101,108,52,46,115,97,118,101,83,116,97,116,101,197,1,20,119,97,115,109,47,105,110,100,101,120,47,115,97,118,101,83,116,97,116,101,198,1,50,119,97,115,109,47,109,101,109,111,114,121,47,108,111,97,100,47,108,111,97,100,66,111,111,108,101,97,110,68,105,114,101,99,116,108,121,70,114,111,109,87,97,115,109,77,101,109,111,114,121,199,1,26,119,97,115,109,47,99,112,117,47,99,112,117,47,67,112,117,46,108,111,97,100,83,116,97,116,101,200,1,41,119,97,115,109,47,103,114,97,112,104,105,99,115,47,103,114,97,112,104,105,99,115,47,71,114,97,112,104,105,99,115,46,108,111,97,100,83,116,97,116,101,201,1,42,119,97,115,109,47,105,110,116,101,114,114,117,112,116,115,47,105,110,100,101,120,47,73,110,116,101,114,114,117,112,116,115,46,108,111,97,100,83,116,97,116,101,202,1,35,119,97,115,109,47,109,101,109,111,114,121,47,109,101,109,111,114,121,47,77,101,109,111,114,121,46,108,111,97,100,83,116,97,116,101,203,1,34,119,97,115,109,47,116,105,109,101,114,115,47,105,110,100,101,120,47,84,105,109,101,114,115,46,108,111,97,100,83,116,97,116,101,204,1,32,119,97,115,109,47,115,111,117,110,100,47,115,111,117,110,100,47,83,111,117,110,100,46,108,111,97,100,83,116,97,116,101,205,1,38,119,97,115,109,47,115,111,117,110,100,47,99,104,97,110,110,101,108,49,47,67,104,97,110,110,101,108,49,46,108,111,97,100,83,116,97,116,101,206,1,38,119,97,115,109,47,115,111,117,110,100,47,99,104,97,110,110,101,108,50,47,67,104,97,110,110,101,108,50,46,108,111,97,100,83,116,97,116,101,207,1,38,119,97,115,109,47,115,111,117,110,100,47,99,104,97,110,110,101,108,51,47,67,104,97,110,110,101,108,51,46,108,111,97,100,83,116,97,116,101,208,1,38,119,97,115,109,47,115,111,117,110,100,47,99,104,97,110,110,101,108,52,47,67,104,97,110,110,101,108,52,46,108,111,97,100,83,116,97,116,101,209,1,20,119,97,115,109,47,105,110,100,101,120,47,108,111,97,100,83,116,97,116,101,210,1,23,119,97,115,109,47,105,110,100,101,120,47,103,101,116,82,101,103,105,115,116,101,114,65,211,1,23,119,97,115,109,47,105,110,100,101,120,47,103,101,116,82,101,103,105,115,116,101,114,66,212,1,23,119,97,115,109,47,105,110,100,101,120,47,103,101,116,82,101,103,105,115,116,101,114,67,213,1,23,119,97,115,109,47,105,110,100,101,120,47,103,101,116,82,101,103,105,115,116,101,114,68,214,1,23,119,97,115,109,47,105,110,100,101,120,47,103,101,116,82,101,103,105,115,116,101,114,69,215,1,23,119,97,115,109,47,105,110,100,101,120,47,103,101,116,82,101,103,105,115,116,101,114,72,216,1,23,119,97,115,109,47,105,110,100,101,120,47,103,101,116,82,101,103,105,115,116,101,114,76,217,1,23,119,97,115,109,47,105,110,100,101,120,47,103,101,116,82,101,103,105,115,116,101,114,70,218,1,28,119,97,115,109,47,105,110,100,101,120,47,103,101,116,80,114,111,103,114,97,109,67,111,117,110,116,101,114,219,1,26,119,97,115,109,47,105,110,100,101,120,47,103,101,116,83,116,97,99,107,80,111,105,110,116,101,114,220,1,28,119,97,115,109,47,105,110,100,101,120,47,103,101,116,80,114,101,118,105,111,117,115,79,112,99,111,100,101,221,1,36,119,97,115,109,47,105,110,100,101,120,47,103,101,116,79,112,99,111,100,101,65,116,80,114,111,103,114,97,109,67,111,117,110,116,101,114,0,49,16,115,111,117,114,99,101,77,97,112,112,105,110,103,85,82,76,31,97,115,115,101,116,115,47,105,110,100,101,120,46,117,110,116,111,117,99,104,101,100,46,119,97,115,109,46,109,97,112,]);// This file will not run on it's own

const {
  Module,
  instantiate,
  Memory,
  Table
} = WebAssembly;

const WebAssemblyModule = function(deps = {
  'global': {},
  'env': {
    'memory': new Memory({initial: 10, limit: 100}),
    'table': new Table({initial: 0, element: 'anyfunc'})
  }
}) {
  return instantiate(buffer, deps);
}

module.exports = WebAssemblyModule;


/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map