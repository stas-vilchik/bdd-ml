{
  var i = this.$scopedSlots[t];
  if (i) return (n = n || {}), r && (n = y(y({}, r), n)), i(n) || e;
  var o = this.$slots[t];
  return o || e;
}
