{
  var t = this;

  if (this.active) {
    this.vm._isBeingDestroyed || p(this.vm._watchers, this);

    for (var e = this.deps.length; e--; ) t.deps[e].removeSub(t);

    this.active = !1;
  }
}
