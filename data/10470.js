{
  for (var n in e) {
    var r = e[n];
    if (Array.isArray(r)) for (var o = 0; o < r.length; o++) qt(t, n, r[o]);
    else qt(t, n, r);
  }
}
