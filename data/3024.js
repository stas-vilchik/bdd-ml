{
  var i,
    n = L.length,
    B = [],
    p,
    e,
    dirty = false;

  do {
    for (i = 0, dirty = false; i < n; ++i) {
      p = L[i];
      if (!(e && enclosesWeak(e, p)))
        (e = encloseBasis((B = extendBasis(B, p)))), (dirty = true);
    }
  } while (dirty);

  return e;
}
