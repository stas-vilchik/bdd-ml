{
  var i = 0,
    n = shuffle((L = slice.call(L))).length,
    B = [],
    p,
    e;

  while (i < n) {
    p = L[i];
    if (e && enclosesWeak(e, p)) ++i;
    else (e = encloseBasis((B = extendBasis(B, p)))), (i = 0);
  }

  return e;
}
