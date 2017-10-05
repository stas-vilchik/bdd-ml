{
  for (var n, r = t; r; )
    e((n = r.context)) &&
      e((n = n.$options._scopeId)) &&
      j.setAttribute(t.elm, n, ""),
      (r = r.parent);

  e((n = po)) &&
    n !== t.context &&
    e((n = n.$options._scopeId)) &&
    j.setAttribute(t.elm, n, "");
}
