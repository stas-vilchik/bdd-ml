{
  var i = r.options.props;

  if (!t(i)) {
    var a = {},
      s = n.attrs,
      c = n.props;
    if (e(s) || e(c))
      for (var u in i) {
        var l = Jn(u);
        ot(a, c, u, l, !0) || ot(a, s, u, l, !1);
      }
    return a;
  }
}
