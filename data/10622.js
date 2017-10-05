{
  if ((t === vr && (t = void 0), e === vr && (e = void 0), !e))
    return Object.create(t || null);
  if (!t) return e;
  var n = {};
  y(n, t);

  for (var r in e) {
    var o = n[r],
      i = e[r];
    o && !Array.isArray(o) && (o = [o]),
      (n[r] = o ? o.concat(i) : Array.isArray(i) ? i : [i]);
  }

  return n;
}
