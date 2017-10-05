{
  if (Array.isArray(t))
    for (var r = 0; r < t.length; r++)
      t[r] && "string" != typeof t[r] && ve(t[r], e + "_" + r, n);
  else ve(t, e, n);
}
