{
  if (!e) return t;

  for (var n, r, o, i = Object.keys(e), s = 0; s < i.length; s++)
    (r = t[(n = i[s])]),
      (o = e[n]),
      d(t, n) ? a(r) && a(o) && N(r, o) : L(t, n, o);

  return t;
}
