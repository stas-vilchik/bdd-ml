{
  (t.prototype._update = function(t, e) {
    var n = this;
    n._isMounted && Ot(n, "beforeUpdate");
    var r = n.$el,
      i = n._vnode,
      o = po;
    (po = n),
      (n._vnode = t),
      i
        ? (n.$el = n.__patch__(i, t))
        : ((n.$el = n.__patch__(
            n.$el,
            t,
            e,
            !1,
            n.$options._parentElm,
            n.$options._refElm
          )),
          (n.$options._parentElm = n.$options._refElm = null)),
      (po = o),
      r && (r.__vue__ = null),
      n.$el && (n.$el.__vue__ = n),
      n.$vnode &&
        n.$parent &&
        n.$vnode === n.$parent._vnode &&
        (n.$parent.$el = n.$el);
  }),
    (t.prototype.$forceUpdate = function() {
      var t = this;
      t._watcher && t._watcher.update();
    }),
    (t.prototype.$destroy = function() {
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
    });
}
