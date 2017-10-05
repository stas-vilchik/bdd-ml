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
      m = i.length - 1,
      y = i[0],
      _ = i[m],
      $ = !a;
    f <= d && p <= m;

  )
    t(v)
      ? (v = r[++f])
      : t(h)
        ? (h = r[--d])
        : Ue(v, y)
          ? (x(v, y, o), (v = r[++f]), (y = i[++p]))
          : Ue(h, _)
            ? (x(h, _, o), (h = r[--d]), (_ = i[--m]))
            : Ue(v, _)
              ? (x(v, _, o),
                $ && j.insertBefore(n, v.elm, j.nextSibling(h.elm)),
                (v = r[++f]),
                (_ = i[--m]))
              : Ue(h, y)
                ? (x(h, y, o),
                  $ && j.insertBefore(n, h.elm, v.elm),
                  (h = r[--d]),
                  (y = i[++p]))
                : (t(s) && (s = ze(r, f, d)),
                  t((u = e(y.key) ? s[y.key] : w(y, r, f, d)))
                    ? c(y, o, n, v.elm)
                    : Ue((l = r[u]), y)
                      ? (x(l, y, o),
                        (r[u] = void 0),
                        $ && j.insertBefore(n, l.elm, v.elm))
                      : c(y, o, n, v.elm),
                  (y = i[++p]));

  f > d
    ? g(n, t(i[m + 1]) ? null : i[m + 1].elm, i, p, m, o)
    : p > m && b(n, r, f, d);
}
