{
  var a = {},
    s = t.options.props;
  if (e(s)) for (var c in s) a[c] = q(c, s, n || nr);
  else e(r.attrs) && Qt(a, r.attrs), e(r.props) && Qt(a, r.props);
  var u = Object.create(o),
    l = t.options.render.call(
      null,
      function(t, e, n, r) {
        return re(u, t, e, n, r, !0);
      },
      {
        data: r,
        props: a,
        children: i,
        parent: o,
        listeners: r.on || nr,
        injections: Jt(t.options.inject, o),
        slots: function() {
          return _t(i, o);
        }
      }
    );
  return (
    l instanceof Dr &&
      ((l.functionalContext = o),
      (l.functionalOptions = t.options),
      r.slot && ((l.data || (l.data = {})).slot = r.slot)),
    l
  );
}
