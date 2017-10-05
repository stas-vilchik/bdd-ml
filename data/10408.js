{
  if ("string" == typeof n) {
    var o = t[e];
    if (d(o, n)) return o[n];
    var i = qn(n);
    if (d(o, i)) return o[i];
    var a = Kn(i);
    if (d(o, a)) return o[a];
    var s = o[n] || o[i] || o[a];
    return s;
  }
}
