{
  var i = r.componentOptions;

  if (
    !(
      (e(i) && !1 === i.Ctor.options.inheritAttrs) ||
      (t(n.data.attrs) && t(r.data.attrs))
    )
  ) {
    var o,
      a,
      s = r.elm,
      c = n.data.attrs || {},
      u = r.data.attrs || {};
    e(u.__ob__) && (u = r.data.attrs = y({}, u));

    for (o in u) (a = u[o]), c[o] !== a && Ye(s, o, a);

    Pi && u.value !== c.value && Ye(s, "value", u.value);

    for (o in c)
      t(u[o]) &&
        (qo(o)
          ? s.removeAttributeNS(Jo, Wo(o))
          : zo(o) || s.removeAttribute(o));
  }
}
