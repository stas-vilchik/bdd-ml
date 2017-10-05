{
  var n = (t._computedWatchers = Object.create(null)),
    r = gr();

  for (var o in e) {
    var i = e[o],
      a = "function" == typeof i ? i : i.get;
    r || (n[o] = new qr(t, a || g, g, Jr)), o in t || Bt(t, o, i);
  }
}
