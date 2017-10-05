{
  function a() {
    i.apply(this, arguments), p(s.fns, a);
  }

  var s,
    c = r[o];
  t(c)
    ? (s = Y([a]))
    : e(c.fns) && n(c.merged) ? (s = c).fns.push(a) : (s = Y([c, a])),
    (s.merged = !0),
    (r[o] = s);
}
