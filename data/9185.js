{
  var n = Object.create(null);
  if (!t) return n;
  var r, i;

  for (r = 0; r < t.length; r++)
    (i = t[r]).modifiers || (i.modifiers = sa),
      (n[We(i)] = i),
      (i.def = K(e.$options, "directives", i.name, !0));

  return n;
}
