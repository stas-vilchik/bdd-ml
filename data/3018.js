{
  var i = 0,
    j,
    n = (L = slice.call(L)).length,
    B = [],
    p,
    e;

  while (i < n) {
    (p = L[(j = i + ((Math.random() * (n - i)) | 0))]),
      (L[j] = L[i]),
      (L[i] = p);
    if (e && enclosesWeak(e, p)) ++i;
    else (e = encloseBasis((B = extendBasis(B, p)))), (i = 0);
  }

  return e;
}
