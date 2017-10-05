{
  var i,
    o,
    a = {};

  for (i = n; i <= r; ++i) e((o = t[i].key)) && (a[o] = i);

  return a;
}
