{
  var o = e[t],
    i = !d(n, t),
    a = n[t];

  if (
    (J(Boolean, o.type) &&
      (i && !d(o, "default")
        ? (a = !1)
        : J(String, o.type) || ("" !== a && a !== Jn(t)) || (a = !0)),
    void 0 === a)
  ) {
    a = K(r, o, t);
    var s = Er.shouldConvert;
    (Er.shouldConvert = !0), I(a), (Er.shouldConvert = s);
  }

  return a;
}
