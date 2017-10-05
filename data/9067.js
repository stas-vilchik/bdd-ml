{
  function a() {
    o.apply(this, arguments), p(s.fns, a);
  }

  var s,
    c = r[i];
  t(c)
    ? (s = X([a]))
    : e(c.fns) && n(c.merged) ? (s = c).fns.push(a) : (s = X([c, a])),
    (s.merged = !0),
    (r[i] = s);
}
