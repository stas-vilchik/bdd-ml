{
  function l(t) {}

  var f = (i && i.ns) || vs(t);
  Di && "svg" === f && (a = Nr(a));
  var p = {
    type: 1,
    tag: t,
    attrsList: a,
    attrsMap: Er(a),
    parent: i,
    children: []
  };
  f && (p.ns = f), Lr(p) && !qi() && (p.forbidden = !0);

  for (var d = 0; d < ls.length; d++) ls[d](p, e);

  if ((s || (hr(p), p.pre && (s = !0)), ps(p.tag) && (c = !0), s)) mr(p);
  else {
    _r(p),
      br(p),
      xr(p),
      yr(p),
      (p.plain = !p.key && !a.length),
      gr(p),
      Ar(p),
      kr(p);

    for (var v = 0; v < us.length; v++) us[v](p, e);

    Or(p);
  }
  if (
    (r
      ? o.length ||
        (r.if &&
          (p.elseif || p.else) &&
          (l(),
          wr(r, {
            exp: p.elseif,
            block: p
          })))
      : ((r = p), l()),
    i && !p.forbidden)
  )
    if (p.elseif || p.else) $r(p, i);
    else if (p.slotScope) {
      i.plain = !1;
      var h = p.slotTarget || '"default"';
      (i.scopedSlots || (i.scopedSlots = {}))[h] = p;
    } else i.children.push(p), (p.parent = i);
  u ? n(p) : ((i = p), o.push(p));

  for (var m = 0; m < fs.length; m++) fs[m](p, e);
}
