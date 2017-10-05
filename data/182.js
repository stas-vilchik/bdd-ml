{
  var p = e.data,
    d = e.headers;
  r.isFormData(p) && delete d["Content-Type"];
  var l = new XMLHttpRequest(),
    h = "onreadystatechange",
    m = !1;

  if (
    ("undefined" == typeof window ||
      !window.XDomainRequest ||
      "withCredentials" in l ||
      u(e.url) ||
      ((l = new window.XDomainRequest()),
      (h = "onload"),
      (m = !0),
      (l.onprogress = function() {}),
      (l.ontimeout = function() {})),
    e.auth)
  ) {
    var y = e.auth.username || "",
      w = e.auth.password || "";
    d.Authorization = "Basic " + c(y + ":" + w);
  }

  if (
    (l.open(e.method.toUpperCase(), i(e.url, e.params, e.paramsSerializer), !0),
    (l.timeout = e.timeout),
    (l[h] = function() {
      if (
        l &&
        (4 === l.readyState || m) &&
        (0 !== l.status ||
          (l.responseURL && 0 === l.responseURL.indexOf("file:")))
      ) {
        var n =
            "getAllResponseHeaders" in l ? s(l.getAllResponseHeaders()) : null,
          r =
            e.responseType && "text" !== e.responseType
              ? l.response
              : l.responseText,
          i = {
            data: r,
            status: 1223 === l.status ? 204 : l.status,
            statusText: 1223 === l.status ? "No Content" : l.statusText,
            headers: n,
            config: e,
            request: l
          };
        o(t, f, i), (l = null);
      }
    }),
    (l.onerror = function() {
      f(a("Network Error", e, null, l)), (l = null);
    }),
    (l.ontimeout = function() {
      f(a("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", l)),
        (l = null);
    }),
    r.isStandardBrowserEnv())
  ) {
    var v = n(16),
      g =
        (e.withCredentials || u(e.url)) && e.xsrfCookieName
          ? v.read(e.xsrfCookieName)
          : void 0;
    g && (d[e.xsrfHeaderName] = g);
  }

  if (
    ("setRequestHeader" in l &&
      r.forEach(d, function(e, t) {
        "undefined" == typeof p && "content-type" === t.toLowerCase()
          ? delete d[t]
          : l.setRequestHeader(t, e);
      }),
    e.withCredentials && (l.withCredentials = !0),
    e.responseType)
  )
    try {
      l.responseType = e.responseType;
    } catch (t) {
      if ("json" !== e.responseType) throw t;
    }
  "function" == typeof e.onDownloadProgress &&
    l.addEventListener("progress", e.onDownloadProgress),
    "function" == typeof e.onUploadProgress &&
      l.upload &&
      l.upload.addEventListener("progress", e.onUploadProgress),
    e.cancelToken &&
      e.cancelToken.promise.then(function(e) {
        l && (l.abort(), f(e), (l = null));
      }),
    void 0 === p && (p = null),
    l.send(p);
}
