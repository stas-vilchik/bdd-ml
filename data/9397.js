{
  var t = this;

  if (!t._isBeingDestroyed) {
    Ot(t, "beforeDestroy"), (t._isBeingDestroyed = !0);
    var e = t.$parent;
    !e || e._isBeingDestroyed || t.$options.abstract || p(e.$children, t),
      t._watcher && t._watcher.teardown();

    for (var n = t._watchers.length; n--; ) t._watchers[n].teardown();

    t._data.__ob__ && t._data.__ob__.vmCount--,
      (t._isDestroyed = !0),
      t.__patch__(t._vnode, null),
      Ot(t, "destroyed"),
      t.$off(),
      t.$el && (t.$el.__vue__ = null);
  }
}
