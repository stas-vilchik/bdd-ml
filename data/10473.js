{
  var e = Jt(t.$options.inject, t);
  e &&
    ((Er.shouldConvert = !1),
    Object.keys(e).forEach(function(n) {
      D(t, n, e[n]);
    }),
    (Er.shouldConvert = !0));
}
