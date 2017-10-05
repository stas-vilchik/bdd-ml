{
  (t._vnode = null), (t._staticTrees = null);
  var e = (t.$vnode = t.$options._parentVnode),
    n = e && e.context;
  (t.$slots = gt(t.$options._renderChildren, n)),
    (t.$scopedSlots = Ei),
    (t._c = function(e, n, r, i) {
      return re(t, e, n, r, i, !1);
    }),
    (t.$createElement = function(e, n, r, i) {
      return re(t, e, n, r, i, !0);
    });
  var r = e && e.data;
  N(t, "$attrs", (r && r.attrs) || Ei, null, !0),
    N(t, "$listeners", t.$options._parentListeners || Ei, null, !0);
}
