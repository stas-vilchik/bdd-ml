{
  var a = t.data;

  if (e(a)) {
    var s = e(t.componentInstance) && a.keepAlive;
    if (
      (e((a = a.hook)) && e((a = a.init)) && a(t, !1, o, i),
      e(t.componentInstance))
    )
      return l(t, r), n(s) && p(t, r, o, i), !0;
  }
}
