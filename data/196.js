{
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
}
