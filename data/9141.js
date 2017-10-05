{
  var n = this._staticTrees[t];
  return n && !e
    ? Array.isArray(n) ? Q(n) : Y(n)
    : ((n = this._staticTrees[t] = this.$options.staticRenderFns[t].call(
        this._renderProxy
      )),
      de(n, "__static__" + t, !1),
      n);
}
