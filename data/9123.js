{
  var a = {},
    s = t.options.props;
  if (e(s)) for (var c in s) a[c] = J(c, s, n || Ei);
  else e(r.attrs) && Yt(a, r.attrs), e(r.props) && Yt(a, r.props);
  var u = Object.create(i),
    l = t.options.render.call(
      null,
      function(t, e, n, r) {
        return re(u, t, e, n, r, !0);
      },
      {
        data: r,
        props: a,
        children: o,
        parent: i,
        listeners: r.on || Ei,
        injections: Gt(t.options.inject, i),
        slots: function() {
          return gt(o, i);
        }
      }
    );
  return (
    l instanceof so &&
      ((l.functionalContext = i),
      (l.functionalOptions = t.options),
      r.slot && ((l.data || (l.data = {})).slot = r.slot)),
    l
  );
}
