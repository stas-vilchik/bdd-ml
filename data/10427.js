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
        ? u.push.apply(u, ct(s, (i || "") + "_" + a))
        : o(s)
          ? st(c) ? (c.text += String(s)) : "" !== s && u.push(Z(s))
          : st(s) && st(c)
            ? (u[u.length - 1] = Z(c.text + s.text))
            : (n(r._isVList) &&
                e(s.tag) &&
                t(s.key) &&
                e(i) &&
                (s.key = "__vlist" + i + "_" + a + "__"),
              u.push(s)));

  return u;
}
