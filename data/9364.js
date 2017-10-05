{
  if ((t === Ui && (t = void 0), e === Ui && (e = void 0), !e))
    return Object.create(t || null);
  if (!t) return e;
  var n = {};
  y(n, t);

  for (var r in e) {
    var i = n[r],
      o = e[r];
    i && !Array.isArray(i) && (i = [i]),
      (n[r] = i ? i.concat(o) : Array.isArray(o) ? o : [o]);
  }

  return n;
}
