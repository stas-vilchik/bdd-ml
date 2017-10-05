{
  var t = this,
    e = t.$options,
    n = e.render,
    r = e.staticRenderFns,
    i = e._parentVnode;
  if (t._isMounted)
    for (var o in t.$slots) {
      var a = t.$slots[o];
      a._rendered && (t.$slots[o] = Q(a, !0));
    }
  (t.$scopedSlots = (i && i.data.scopedSlots) || Ei),
    r && !t._staticTrees && (t._staticTrees = []),
    (t.$vnode = i);
  var s;

  try {
    s = n.call(t._renderProxy, t.$createElement);
  } catch (e) {
    k(e, t, "render function"), (s = t._vnode);
  }

  return s instanceof so || (s = lo()), (s.parent = i), s;
}
