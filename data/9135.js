{
  var r, i, a, s, c;
  if (Array.isArray(t) || "string" == typeof t)
    for (r = new Array(t.length), i = 0, a = t.length; i < a; i++)
      r[i] = n(t[i], i);
  else if ("number" == typeof t)
    for (r = new Array(t), i = 0; i < t; i++) r[i] = n(i + 1, i);
  else if (o(t))
    for (
      s = Object.keys(t), r = new Array(s.length), i = 0, a = s.length;
      i < a;
      i++
    )
      (c = s[i]), (r[i] = n(t[c], c, i));
  return e(r) && (r._isVList = !0), r;
}
