{
  t._watchers = [];
  var e = t.$options;
  e.props && Ft(t, e.props),
    e.methods && zt(t, e.methods),
    e.data ? Rt(t) : I((t._data = {}), !0),
    e.computed && Vt(t, e.computed),
    e.watch && e.watch !== vr && Wt(t, e.watch);
}
