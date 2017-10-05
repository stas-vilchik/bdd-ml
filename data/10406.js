{
  function r(r) {
    var o = Tr[r] || Ir;
    c[r] = o(t[r], e[r], n, r);
  }

  "function" == typeof e && (e = e.options), V(e), B(e), H(e);
  var o = e.extends;
  if ((o && (t = z(t, o, n)), e.mixins))
    for (var i = 0, a = e.mixins.length; i < a; i++) t = z(t, e.mixins[i], n);
  var s,
    c = {};

  for (s in t) r(s);

  for (s in e) d(t, s) || r(s);

  return c;
}
