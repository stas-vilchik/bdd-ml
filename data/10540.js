{
  var o = r.componentOptions;

  if (
    !(
      (e(o) && !1 === o.Ctor.options.inheritAttrs) ||
      (t(n.data.attrs) && t(r.data.attrs))
    )
  ) {
    var i,
      a,
      s = r.elm,
      c = n.data.attrs || {},
      u = r.data.attrs || {};
    e(u.__ob__) && (u = r.data.attrs = y({}, u));

    for (i in u) (a = u[i]), c[i] !== a && Ze(s, i, a);

    ur && u.value !== c.value && Ze(s, "value", u.value);

    for (i in c)
      t(u[i]) &&
        (lo(i)
          ? s.removeAttributeNS(uo, fo(i))
          : so(i) || s.removeAttribute(i));
  }
}
