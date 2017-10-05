{
  var t = this,
    e = t.$options,
    n = e.render,
    r = e.staticRenderFns,
    o = e._parentVnode;
  if (t._isMounted)
    for (var i in t.$slots) {
      var a = t.$slots[i];
      a._rendered && (t.$slots[i] = X(a, !0));
    }
  (t.$scopedSlots = (o && o.data.scopedSlots) || nr),
    r && !t._staticTrees && (t._staticTrees = []),
    (t.$vnode = o);
  var s;

  try {
    s = n.call(t._renderProxy, t.$createElement);
  } catch (e) {
    k(e, t, "render function"), (s = t._vnode);
  }

  return s instanceof Dr || (s = Mr()), (s.parent = o), s;
}
