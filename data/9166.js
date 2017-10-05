{
  for (var r in t) {
    var i = t[r];

    if (i) {
      var o = Te(i.componentOptions);
      o && !n(o) && (i !== e && je(i), (t[r] = null));
    }
  }
}
