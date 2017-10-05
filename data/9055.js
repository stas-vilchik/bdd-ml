{
  if ("string" == typeof n) {
    var i = t[e];
    if (d(i, n)) return i[n];
    var o = bi(n);
    if (d(i, o)) return i[o];
    var a = $i(o);
    if (d(i, a)) return i[a];
    var s = i[n] || i[o] || i[a];
    return s;
  }
}
