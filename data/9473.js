{
  Fo = n;
  var r = e.value,
    i = e.modifiers,
    o = t.tag,
    a = t.attrsMap.type;
  if (t.component) return ln(t, r, i), !1;
  if ("select" === o) bn(t, r, i);
  else if ("input" === o && "checkbox" === a) gn(t, r, i);
  else if ("input" === o && "radio" === a) _n(t, r, i);
  else if ("input" === o || "textarea" === o) $n(t, r, i);
  else if (!Si.isReservedTag(o)) return ln(t, r, i), !1;
  return !0;
}
