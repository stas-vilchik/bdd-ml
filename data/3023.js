{
  var i,
    n = shuffle((L = slice.call(L))).length,
    B = [],
    p,
    e;

  for (i = 0; i < n; ++i) {
    p = L[i];
    if (!(e && enclosesWeak(e, p))) e = encloseBasis((B = extendBasis(B, p)));
  }

  for (i = 0; i < n; ) {
    p = L[i];
    if (e && enclosesWeak(e, p)) ++i;
    else (e = encloseBasis((B = extendBasis(B, p)))), (i = 0);
  }

  return e;
}
