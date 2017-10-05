{
  var o = this.$scopedSlots[t];
  if (o) return (n = n || {}), r && (n = y(y({}, r), n)), o(n) || e;
  var i = this.$slots[t];
  return i || e;
}
