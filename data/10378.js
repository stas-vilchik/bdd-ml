{
  if (t === e) return !0;
  var n = i(t),
    r = i(e);
  if (!n || !r) return !n && !r && String(t) === String(e);

  try {
    var o = Array.isArray(t),
      a = Array.isArray(e);
    if (o && a)
      return (
        t.length === e.length &&
        t.every(function(t, n) {
          return b(t, e[n]);
        })
      );
    if (o || a) return !1;
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
