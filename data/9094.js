{
  var o = !!(
    i ||
    t.$options._renderChildren ||
    r.data.scopedSlots ||
    t.$scopedSlots !== Ei
  );

  if (
    ((t.$options._parentVnode = r),
    (t.$vnode = r),
    t._vnode && (t._vnode.parent = r),
    (t.$options._renderChildren = i),
    (t.$attrs = (r.data && r.data.attrs) || Ei),
    (t.$listeners = n || Ei),
    e && t.$options.props)
  ) {
    ro.shouldConvert = !1;

    for (
      var a = t._props, s = t.$options._propKeys || [], c = 0;
      c < s.length;
      c++
    ) {
      var u = s[c];
      a[u] = J(u, t.$options.props, e, t);
    }

    (ro.shouldConvert = !0), (t.$options.propsData = e);
  }

  if (n) {
    var l = t.$options._parentListeners;
    (t.$options._parentListeners = n), yt(t, n, l);
  }

  o && ((t.$slots = gt(i, r.context)), t.$forceUpdate());
}
