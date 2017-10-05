{
  var a,
    s,
    c,
    u,
    l = [],
    f = !1;

  for (a in e)
    (s = e[a]),
      (c = n[a]),
      (u = fo(a)).plain || (f = !0),
      t(s) ||
        (t(c)
          ? (t(s.fns) && (s = e[a] = X(s)), (u.handler = s), l.push(u))
          : s !== c && ((c.fns = s), (e[a] = c)));

  if (l.length) {
    f && l.sort(tt);

    for (var p = 0; p < l.length; p++) {
      var d = l[p];
      r(d.name, d.handler, d.once, d.capture, d.passive);
    }
  }

  for (a in n) t(e[a]) && i((u = fo(a)).name, n[a], u.capture);
}
