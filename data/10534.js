{
  var n,
    r,
    o,
    i = t === Ao,
    a = e === Ao,
    s = qe(t.data.directives, t.context),
    c = qe(e.data.directives, e.context),
    u = [],
    l = [];

  for (n in c)
    (r = s[n]),
      (o = c[n]),
      r
        ? ((o.oldValue = r.value),
          Ge(o, "update", e, t),
          o.def && o.def.componentUpdated && l.push(o))
        : (Ge(o, "bind", e, t), o.def && o.def.inserted && u.push(o));

  if (u.length) {
    var f = function() {
      for (var n = 0; n < u.length; n++) Ge(u[n], "inserted", e, t);
    };

    i ? nt(e.data.hook || (e.data.hook = {}), "insert", f) : f();
  }

  if (
    (l.length &&
      nt(e.data.hook || (e.data.hook = {}), "postpatch", function() {
        for (var n = 0; n < l.length; n++) Ge(l[n], "componentUpdated", e, t);
      }),
    !i)
  )
    for (n in s) c[n] || Ge(s[n], "unbind", t, t, a);
}
