{
  e = e || {};

  for (var n = 0; n < t.length; n++)
    Array.isArray(t[n]) ? bt(t[n], e) : (e[t[n].key] = t[n].fn);

  return e;
}
