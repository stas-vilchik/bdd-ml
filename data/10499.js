{
  (t._vnode = null), (t._staticTrees = null);
  var e = (t.$vnode = t.$options._parentVnode),
    n = e && e.context;
  (t.$slots = _t(t.$options._renderChildren, n)),
    (t.$scopedSlots = nr),
    (t._c = function(e, n, r, o) {
      return re(t, e, n, r, o, !1);
    }),
    (t.$createElement = function(e, n, r, o) {
      return re(t, e, n, r, o, !0);
    });
  var r = e && e.data;
  D(t, "$attrs", (r && r.attrs) || nr, null, !0),
    D(t, "$listeners", t.$options._parentListeners || nr, null, !0);
}
