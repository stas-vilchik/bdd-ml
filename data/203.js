{
  function e(e) {
    var t = e;
    return (
      n && (o.setAttribute("href", t), (t = o.href)),
      o.setAttribute("href", t),
      {
        href: o.href,
        protocol: o.protocol ? o.protocol.replace(/:$/, "") : "",
        host: o.host,
        search: o.search ? o.search.replace(/^\?/, "") : "",
        hash: o.hash ? o.hash.replace(/^#/, "") : "",
        hostname: o.hostname,
        port: o.port,
        pathname: "/" === o.pathname.charAt(0) ? o.pathname : "/" + o.pathname
      }
    );
  }

  var t,
    n = /(msie|trident)/i.test(navigator.userAgent),
    o = document.createElement("a");
  return (
    (t = e(window.location.href)),
    function(n) {
      var o = r.isString(n) ? e(n) : n;
      return o.protocol === t.protocol && o.host === t.host;
    }
  );
}
