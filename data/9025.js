{
  if (t === e) return !0;
  var n = o(t),
    r = o(e);
  if (!n || !r) return !n && !r && String(t) === String(e);

  try {
    var i = Array.isArray(t),
      a = Array.isArray(e);
    if (i && a)
      return (
        t.length === e.length &&
        t.every(function(t, n) {
          return b(t, e[n]);
        })
      );
    if (i || a) return !1;
    var s = Object.keys(t),
      c = Object.keys(e);
    return (
      s.length === c.length &&
      s.every(function(n) {
        return b(t[n], e[n]);
      })
    );
  } catch (t) {
    return !1;
  }
}
