{
  if (t(n)) return !1;
  var r = n.fns;
  return e(r) ? qn(Array.isArray(r) ? r[0] : r) : (n._length || n.length) > 1;
}
