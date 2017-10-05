{
  var n = t.data.ref;

  if (n) {
    var r = t.context,
      o = t.componentInstance || t.elm,
      i = r.$refs;
    e
      ? Array.isArray(i[n]) ? p(i[n], o) : i[n] === o && (i[n] = void 0)
      : t.data.refInFor
        ? Array.isArray(i[n])
          ? i[n].indexOf(o) < 0 && i[n].push(o)
          : (i[n] = [o])
        : (i[n] = o);
  }
}
