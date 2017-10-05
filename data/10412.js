{
  if (!Array.isArray(e)) return G(e) === G(t);

  for (var n = 0, r = e.length; n < r; n++) if (G(e[n]) === G(t)) return !0;

  return !1;
}
