{
  var e = t.$options.data;
  a((e = t._data = "function" == typeof e ? Ut(e, t) : e || {})) || (e = {});

  for (
    var n = Object.keys(e),
      r = t.$options.props,
      o = (t.$options.methods, n.length);
    o--;

  ) {
    var i = n[o];
    (r && d(r, i)) || w(i) || Mt(t, "_data", i);
  }

  I(e, !0);
}
