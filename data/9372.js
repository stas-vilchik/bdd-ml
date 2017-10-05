{
  T(this);
  var t,
    e = this.vm;

  try {
    t = this.getter.call(e, e);
  } catch (t) {
    if (!this.user) throw t;
    k(t, e, 'getter for watcher "' + this.expression + '"');
  } finally {
    this.deep && Mt(t), S(), this.cleanupDeps();
  }

  return t;
}
