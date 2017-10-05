{
  var i = e[t],
    o = !d(n, t),
    a = n[t];

  if (
    (G(Boolean, i.type) &&
      (o && !d(i, "default")
        ? (a = !1)
        : G(String, i.type) || ("" !== a && a !== wi(t)) || (a = !0)),
    void 0 === a)
  ) {
    a = q(r, i, t);
    var s = ro.shouldConvert;
    (ro.shouldConvert = !0), L(a), (ro.shouldConvert = s);
  }

  return a;
}
