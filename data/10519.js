{
  for (var r in t) {
    var o = t[r];

    if (o) {
      var i = Se(o.componentOptions);
      i && !n(i) && (o !== e && Te(o), (t[r] = null));
    }
  }
}
