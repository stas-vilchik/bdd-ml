{
  var e = t.$options.data;
  a((e = t._data = "function" == typeof e ? Ht(e, t) : e || {})) || (e = {});

  for (
    var n = Object.keys(e),
      r = t.$options.props,
      i = (t.$options.methods, n.length);
    i--;

  ) {
    var o = n[i];
    (r && d(r, o)) || w(o) || Dt(t, "_data", o);
  }

  L(e, !0);
}
