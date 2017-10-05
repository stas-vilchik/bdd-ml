{
  var n = (t._computedWatchers = Object.create(null)),
    r = qi();

  for (var i in e) {
    var o = e[i],
      a = "function" == typeof o ? o : o.get;
    r || (n[i] = new $o(t, a || _, _, xo)), i in t || Ut(t, i, o);
  }
}
