{
  function i(t) {
    return n ? n(t, e) : t.once ? Jr(t, e) : zr(t, e);
  }

  if (!t.length) return r || "_e()";
  var o = t.shift();
  return o.exp
    ? "(" + o.exp + ")?" + i(o.block) + ":" + Wr(t, e, n, r)
    : "" + i(o.block);
}
