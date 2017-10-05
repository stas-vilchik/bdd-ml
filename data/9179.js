{
  if ("input" !== t.tag) return !0;
  var r,
    i = e((r = t.data)) && e((r = r.attrs)) && r.type,
    o = e((r = n.data)) && e((r = r.attrs)) && r.type;
  return i === o || (ea(i) && ea(o));
}
