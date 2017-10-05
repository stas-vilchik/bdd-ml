{
  var t = dt(this.$slots.default),
    e = t && t.componentOptions;

  if (e) {
    var n = Se(e);
    if (
      n &&
      ((this.include && !Ee(this.include, n)) ||
        (this.exclude && Ee(this.exclude, n)))
    )
      return t;
    var r = null == t.key ? e.Ctor.cid + (e.tag ? "::" + e.tag : "") : t.key;
    this.cache[r]
      ? (t.componentInstance = this.cache[r].componentInstance)
      : (this.cache[r] = t),
      (t.data.keepAlive = !0);
  }

  return t;
}
