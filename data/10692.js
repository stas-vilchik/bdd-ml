{
  for (var n, r = t; r; )
    e((n = r.context)) &&
      e((n = n.$options._scopeId)) &&
      T.setAttribute(t.elm, n, ""),
      (r = r.parent);

  e((n = Fr)) &&
    n !== t.context &&
    e((n = n.$options._scopeId)) &&
    T.setAttribute(t.elm, n, "");
}
