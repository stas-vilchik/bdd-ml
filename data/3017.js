{
  var i = 0,
    n = shuffle((L = slice.call(L))).length,
    j = 0,
    B = [],
    p,
    e,
    k = 0;
  if (n)
    do {
      p = L[i];
      ++k;

      if (!(e && enclosesWeak(e, p))) {
        e = encloseBasis((B = extendBasis(B, p)));
        j = i;
      }

      i = (i + 1) % n;
    } while (i != j);
  return e;
}
