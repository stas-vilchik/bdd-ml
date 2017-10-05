{
  var n = Object.create(null);
  if (!t) return n;
  var r, o;

  for (r = 0; r < t.length; r++)
    (o = t[r]).modifiers || (o.modifiers = xo),
      (n[Ke(o)] = o),
      (o.def = W(e.$options, "directives", o.name, !0));

  return n;
}
