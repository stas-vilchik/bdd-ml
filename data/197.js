{
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
}
