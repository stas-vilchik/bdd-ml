{
  if (
    l &&
    (4 === l.readyState || m) &&
    (0 !== l.status || (l.responseURL && 0 === l.responseURL.indexOf("file:")))
  ) {
    var n = "getAllResponseHeaders" in l ? s(l.getAllResponseHeaders()) : null,
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
}
