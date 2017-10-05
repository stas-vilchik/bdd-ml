{
  var o = (r = r || {}).delimiters ? String(r.delimiters) + n : n;
  if (e[o]) return e[o];
  var a = t(n, r),
    s = {},
    c = [];
  return (
    (s.render = pi(a.render, c)),
    (s.staticRenderFns = a.staticRenderFns.map(function(t) {
      return pi(t, c);
    })),
    (e[o] = s)
  );
}
