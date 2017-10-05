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
    (this.id = ++Wr),
    (this.active = !0),
    (this.dirty = this.lazy),
    (this.deps = []),
    (this.newDeps = []),
    (this.depIds = new _r()),
    (this.newDepIds = new _r()),
    (this.expression = ""),
    "function" == typeof e
      ? (this.getter = e)
      : ((this.getter = x(e)), this.getter || (this.getter = function() {})),
    (this.value = this.lazy ? void 0 : this.get());
}
