{
  var e,
    n,
    r,
    i,
    o,
    a,
    s,
    c = t.attrsList;

  for (e = 0, n = c.length; e < n; e++)
    if (((r = i = c[e].name), (o = c[e].value), As.test(r))) {
      if (
        ((t.hasBindings = !0),
        (a = Sr(r)) && (r = r.replace(Es, "")),
        Ss.test(r))
      )
        (r = r.replace(Ss, "")),
          (o = Xe(o)),
          (s = !1),
          a &&
            (a.prop &&
              ((s = !0), "innerHtml" === (r = bi(r)) && (r = "innerHTML")),
            a.camel && (r = bi(r)),
            a.sync && sn(t, "update:" + bi(r), fn(o, "$event"))),
          s || (!t.component && ds(t.tag, t.attrsMap.type, r))
            ? rn(t, r, o)
            : on(t, r, o);
      else if (xs.test(r)) sn(t, (r = r.replace(xs, "")), o, a, !1, ss);
      else {
        var u = (r = r.replace(As, "")).match(Ts),
          l = u && u[1];
        l && (r = r.slice(0, -(l.length + 1))), an(t, r, i, o, l, a);
      }
    } else on(t, r, JSON.stringify(o));
}
