{
  ("use strict");

  function r(e, t) {
    !i.isUndefined(e) &&
      i.isUndefined(e["Content-Type"]) &&
      (e["Content-Type"] = t);
  }

  function o() {
    var e;
    return (
      "undefined" != typeof XMLHttpRequest
        ? (e = n(8))
        : "undefined" != typeof process && (e = n(8)),
      e
    );
  }

  var i = n(2),
    s = n(7),
    u = {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    a = {
      adapter: o(),
      transformRequest: [
        function(e, t) {
          return (
            s(t, "Content-Type"),
            i.isFormData(e) ||
            i.isArrayBuffer(e) ||
            i.isBuffer(e) ||
            i.isStream(e) ||
            i.isFile(e) ||
            i.isBlob(e)
              ? e
              : i.isArrayBufferView(e)
                ? e.buffer
                : i.isURLSearchParams(e)
                  ? (r(t, "application/x-www-form-urlencoded;charset=utf-8"),
                    e.toString())
                  : i.isObject(e)
                    ? (r(t, "application/json;charset=utf-8"),
                      JSON.stringify(e))
                    : e
          );
        }
      ],
      transformResponse: [
        function(e) {
          if ("string" == typeof e)
            try {
              e = JSON.parse(e);
            } catch (e) {}
          return e;
        }
      ],
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      validateStatus: function(e) {
        return e >= 200 && e < 300;
      }
    };
  (a.headers = {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }),
    i.forEach(["delete", "get", "head"], function(e) {
      a.headers[e] = {};
    }),
    i.forEach(["post", "put", "patch"], function(e) {
      a.headers[e] = i.merge(u);
    }),
    (e.exports = a);
}
