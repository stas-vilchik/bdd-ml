{
  var a,
    s,
    c,
    u = [];

  for (a = 0; a < r.length; a++)
    t((s = r[a])) ||
      "boolean" == typeof s ||
      ((c = u[u.length - 1]),
      Array.isArray(s)
        ? u.push.apply(u, ct(s, (o || "") + "_" + a))
        : i(s)
          ? st(c) ? (c.text += String(s)) : "" !== s && u.push(Z(s))
          : st(s) && st(c)
            ? (u[u.length - 1] = Z(c.text + s.text))
            : (n(r._isVList) &&
                e(s.tag) &&
                t(s.key) &&
                e(o) &&
                (s.key = "__vlist" + o + "_" + a + "__"),
              u.push(s)));

  return u;
}
