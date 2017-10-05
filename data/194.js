{
  ("use strict");

  function r(e) {
    return encodeURIComponent(e)
      .replace(/%40/gi, "@")
      .replace(/%3A/gi, ":")
      .replace(/%24/g, "$")
      .replace(/%2C/gi, ",")
      .replace(/%20/g, "+")
      .replace(/%5B/gi, "[")
      .replace(/%5D/gi, "]");
  }

  var o = n(2);

  e.exports = function(e, t, n) {
    if (!t) return e;
    var i;
    if (n) i = n(t);
    else if (o.isURLSearchParams(t)) i = t.toString();
    else {
      var s = [];
      o.forEach(t, function(e, t) {
        null !== e &&
          "undefined" != typeof e &&
          (o.isArray(e) && (t += "[]"),
          o.isArray(e) || (e = [e]),
          o.forEach(e, function(e) {
            o.isDate(e)
              ? (e = e.toISOString())
              : o.isObject(e) && (e = JSON.stringify(e)),
              s.push(r(t) + "=" + r(e));
          }));
      }),
        (i = s.join("&"));
    }
    return i && (e += (e.indexOf("?") === -1 ? "?" : "&") + i), e;
  };
}
