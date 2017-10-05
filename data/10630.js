{
  S(this);
  var t,
    e = this.vm;

  try {
    t = this.getter.call(e, e);
  } catch (t) {
    if (!this.user) throw t;
    k(t, e, 'getter for watcher "' + this.expression + '"');
  } finally {
    this.deep && Lt(t), E(), this.cleanupDeps();
  }

  return t;
}
