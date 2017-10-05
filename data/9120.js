{
  var e = Gt(t.$options.inject, t);
  e &&
    ((ro.shouldConvert = !1),
    Object.keys(e).forEach(function(n) {
      N(t, n, e[n]);
    }),
    (ro.shouldConvert = !0));
}
