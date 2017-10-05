{
  if (Array.isArray(t))
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      if (e(r) && (e(r.componentOptions) || pt(r))) return r;
    }
}
