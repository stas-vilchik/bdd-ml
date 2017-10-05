{
  var r, o, a, s, c;
  if (Array.isArray(t) || "string" == typeof t)
    for (r = new Array(t.length), o = 0, a = t.length; o < a; o++)
      r[o] = n(t[o], o);
  else if ("number" == typeof t)
    for (r = new Array(t), o = 0; o < t; o++) r[o] = n(o + 1, o);
  else if (i(t))
    for (
      s = Object.keys(t), r = new Array(s.length), o = 0, a = s.length;
      o < a;
      o++
    )
      (c = s[o]), (r[o] = n(t[c], c, o));
  return e(r) && (r._isVList = !0), r;
}
