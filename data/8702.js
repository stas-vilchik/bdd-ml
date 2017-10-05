{
  pruneCache(this.cache, this._vnode, function(name) {
    return matches(val, name);
  });
}
