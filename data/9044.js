{
  if (!e) return t;

  for (var n, r, i, o = Object.keys(e), s = 0; s < o.length; s++)
    (r = t[(n = o[s])]),
      (i = e[n]),
      d(t, n) ? a(r) && a(i) && P(r, i) : M(t, n, i);

  return t;
}
