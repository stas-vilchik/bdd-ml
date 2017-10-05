{
  for (var n in e) {
    var r = e[n];
    if (Array.isArray(r)) for (var i = 0; i < r.length; i++) Jt(t, n, r[i]);
    else Jt(t, n, r);
  }
}
