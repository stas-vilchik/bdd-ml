{
  (this.vm = t),
    t._watchers.push(this),
    r
      ? ((this.deep = !!r.deep),
        (this.user = !!r.user),
        (this.lazy = !!r.lazy),
        (this.sync = !!r.sync))
      : (this.deep = this.user = this.lazy = this.sync = !1),
    (this.cb = n),
    (this.id = ++bo),
    (this.active = !0),
    (this.dirty = this.lazy),
    (this.deps = []),
    (this.newDeps = []),
    (this.depIds = new Ji()),
    (this.newDepIds = new Ji()),
    (this.expression = ""),
    "function" == typeof e
      ? (this.getter = e)
      : ((this.getter = A(e)), this.getter || (this.getter = function() {})),
    (this.value = this.lazy ? void 0 : this.get());
}
