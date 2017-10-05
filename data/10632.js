{
  for (var t = this, e = this.deps.length; e--; ) {
    var n = t.deps[e];
    t.newDepIds.has(n.id) || n.removeSub(t);
  }

  var r = this.depIds;
  (this.depIds = this.newDepIds),
    (this.newDepIds = r),
    this.newDepIds.clear(),
    (r = this.deps),
    (this.deps = this.newDeps),
    (this.newDeps = r),
    (this.newDeps.length = 0);
}
