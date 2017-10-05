{
  for (
    var s,
      u,
      l,
      f = 0,
      p = 0,
      d = r.length - 1,
      v = r[0],
      h = r[d],
      m = o.length - 1,
      y = o[0],
      g = o[m],
      C = !a;
    f <= d && p <= m;

  )
    t(v)
      ? (v = r[++f])
      : t(h)
        ? (h = r[--d])
        : Ve(v, y)
          ? ($(v, y, i), (v = r[++f]), (y = o[++p]))
          : Ve(h, g)
            ? ($(h, g, i), (h = r[--d]), (g = o[--m]))
            : Ve(v, g)
              ? ($(v, g, i),
                C && T.insertBefore(n, v.elm, T.nextSibling(h.elm)),
                (v = r[++f]),
                (g = o[--m]))
              : Ve(h, y)
                ? ($(h, y, i),
                  C && T.insertBefore(n, h.elm, v.elm),
                  (h = r[--d]),
                  (y = o[++p]))
                : (t(s) && (s = He(r, f, d)),
                  t((u = e(y.key) ? s[y.key] : w(y, r, f, d)))
                    ? c(y, i, n, v.elm)
                    : Ve((l = r[u]), y)
                      ? ($(l, y, i),
                        (r[u] = void 0),
                        C && T.insertBefore(n, l.elm, v.elm))
                      : c(y, i, n, v.elm),
                  (y = o[++p]));

  f > d
    ? _(n, t(o[m + 1]) ? null : o[m + 1].elm, o, p, m, i)
    : p > m && b(n, r, f, d);
}
