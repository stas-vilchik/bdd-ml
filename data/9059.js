{
  if (!Array.isArray(e)) return W(e) === W(t);

  for (var n = 0, r = e.length; n < r; n++) if (W(e[n]) === W(t)) return !0;

  return !1;
}
