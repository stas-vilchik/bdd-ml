{
  if (Array.isArray(t) && c(e))
    return (t.length = Math.max(t.length, e)), t.splice(e, 1, n), n;
  if (d(t, e)) return (t[e] = n), n;
  var r = t.__ob__;
  return t._isVue || (r && r.vmCount)
    ? n
    : r ? (D(r.value, e, n), r.dep.notify(), n) : ((t[e] = n), n);
}
