{
  if ("input" !== t.tag) return !0;
  var r,
    o = e((r = t.data)) && e((r = r.attrs)) && r.type,
    i = e((r = n.data)) && e((r = r.attrs)) && r.type;
  return o === i || (go(o) && go(i));
}
