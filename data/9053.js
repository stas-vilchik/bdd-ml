{
  function r(r) {
    var i = oo[r] || ao;
    c[r] = i(t[r], e[r], n, r);
  }

  "function" == typeof e && (e = e.options), B(e), U(e), V(e);
  var i = e.extends;
  if ((i && (t = z(t, i, n)), e.mixins))
    for (var o = 0, a = e.mixins.length; o < a; o++) t = z(t, e.mixins[o], n);
  var s,
    c = {};

  for (s in t) r(s);

  for (s in e) d(t, s) || r(s);

  return c;
}
