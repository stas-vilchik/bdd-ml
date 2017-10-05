{
  var n,
    r,
    i,
    o = t === ia,
    a = e === ia,
    s = qe(t.data.directives, t.context),
    c = qe(e.data.directives, e.context),
    u = [],
    l = [];

  for (n in c)
    (r = s[n]),
      (i = c[n]),
      r
        ? ((i.oldValue = r.value),
          Ge(i, "update", e, t),
          i.def && i.def.componentUpdated && l.push(i))
        : (Ge(i, "bind", e, t), i.def && i.def.inserted && u.push(i));

  if (u.length) {
    var f = function() {
      for (var n = 0; n < u.length; n++) Ge(u[n], "inserted", e, t);
    };

    o ? nt(e.data.hook || (e.data.hook = {}), "insert", f) : f();
  }

  if (
    (l.length &&
      nt(e.data.hook || (e.data.hook = {}), "postpatch", function() {
        for (var n = 0; n < l.length; n++) Ge(l[n], "componentUpdated", e, t);
      }),
    !o)
  )
    for (n in s) c[n] || Ge(s[n], "unbind", t, t, a);
}
