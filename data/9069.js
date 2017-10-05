{
  var o = r.options.props;

  if (!t(o)) {
    var a = {},
      s = n.attrs,
      c = n.props;
    if (e(s) || e(c))
      for (var u in o) {
        var l = wi(u);
        it(a, c, u, l, !0) || it(a, s, u, l, !1);
      }
    return a;
  }
}
