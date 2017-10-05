{
  (t.$el = e),
    t.$options.render || (t.$options.render = Mr),
    Ot(t, "beforeMount");
  var r;
  return (
    (r = function() {
      t._update(t._render(), n);
    }),
    (t._watcher = new qr(t, r, g)),
    (n = !1),
    null == t.$vnode && ((t._isMounted = !0), Ot(t, "mounted")),
    t
  );
}
