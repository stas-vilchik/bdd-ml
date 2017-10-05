{
  var n = t.data.ref;

  if (n) {
    var r = t.context,
      i = t.componentInstance || t.elm,
      o = r.$refs;
    e
      ? Array.isArray(o[n]) ? p(o[n], i) : o[n] === i && (o[n] = void 0)
      : t.data.refInFor
        ? Array.isArray(o[n])
          ? o[n].indexOf(i) < 0 && o[n].push(i)
          : (o[n] = [i])
        : (o[n] = i);
  }
}
