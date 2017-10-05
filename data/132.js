{
  ("use strict");

  function r(e) {
    return "[object Array]" === R.call(e);
  }

  function o(e) {
    return "[object ArrayBuffer]" === R.call(e);
  }

  function i(e) {
    return "undefined" != typeof FormData && e instanceof FormData;
  }

  function s(e) {
    var t;
    return (t =
      "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
        ? ArrayBuffer.isView(e)
        : e && e.buffer && e.buffer instanceof ArrayBuffer);
  }

  function u(e) {
    return "string" == typeof e;
  }

  function a(e) {
    return "number" == typeof e;
  }

  function c(e) {
    return "undefined" == typeof e;
  }

  function f(e) {
    return null !== e && "object" == typeof e;
  }

  function p(e) {
    return "[object Date]" === R.call(e);
  }

  function d(e) {
    return "[object File]" === R.call(e);
  }

  function l(e) {
    return "[object Blob]" === R.call(e);
  }

  function h(e) {
    return "[object Function]" === R.call(e);
  }

  function m(e) {
    return f(e) && h(e.pipe);
  }

  function y(e) {
    return (
      "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
    );
  }

  function w(e) {
    return e.replace(/^\s*/, "").replace(/\s*$/, "");
  }

  function v() {
    return (
      ("undefined" == typeof navigator ||
        "ReactNative" !== navigator.product) &&
      "undefined" != typeof window &&
      "undefined" != typeof document
    );
  }

  function g(e, t) {
    if (null !== e && "undefined" != typeof e)
      if (("object" == typeof e || r(e) || (e = [e]), r(e)))
        for (var n = 0, o = e.length; n < o; n++) t.call(null, e[n], n, e);
      else
        for (var i in e)
          Object.prototype.hasOwnProperty.call(e, i) &&
            t.call(null, e[i], i, e);
  }

  function x() {
    function e(e, n) {
      "object" == typeof t[n] && "object" == typeof e
        ? (t[n] = x(t[n], e))
        : (t[n] = e);
    }

    for (var t = {}, n = 0, r = arguments.length; n < r; n++)
      g(arguments[n], e);

    return t;
  }

  function b(e, t, n) {
    return (
      g(t, function(t, r) {
        n && "function" == typeof t ? (e[r] = E(t, n)) : (e[r] = t);
      }),
      e
    );
  }

  var E = n(3),
    C = n(4),
    R = Object.prototype.toString;
  e.exports = {
    isArray: r,
    isArrayBuffer: o,
    isBuffer: C,
    isFormData: i,
    isArrayBufferView: s,
    isString: u,
    isNumber: a,
    isObject: f,
    isUndefined: c,
    isDate: p,
    isFile: d,
    isBlob: l,
    isFunction: h,
    isStream: m,
    isURLSearchParams: y,
    isStandardBrowserEnv: v,
    forEach: g,
    merge: x,
    extend: b,
    trim: w
  };
}
