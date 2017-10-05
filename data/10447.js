{
  var i = !!(
    o ||
    t.$options._renderChildren ||
    r.data.scopedSlots ||
    t.$scopedSlots !== nr
  );

  if (
    ((t.$options._parentVnode = r),
    (t.$vnode = r),
    t._vnode && (t._vnode.parent = r),
    (t.$options._renderChildren = o),
    (t.$attrs = (r.data && r.data.attrs) || nr),
    (t.$listeners = n || nr),
    e && t.$options.props)
  ) {
    Er.shouldConvert = !1;

    for (
      var a = t._props, s = t.$options._propKeys || [], c = 0;
      c < s.length;
      c++
    ) {
      var u = s[c];
      a[u] = q(u, t.$options.props, e, t);
    }

    (Er.shouldConvert = !0), (t.$options.propsData = e);
  }

  if (n) {
    var l = t.$options._parentListeners;
    (t.$options._parentListeners = n), yt(t, n, l);
  }

  i && ((t.$slots = _t(o, r.context)), t.$forceUpdate());
}
