{
  t._watchers = [];
  var e = t.$options;
  e.props && Ft(t, e.props),
    e.methods && zt(t, e.methods),
    e.data ? Rt(t) : L((t._data = {}), !0),
    e.computed && Bt(t, e.computed),
    e.watch && e.watch !== Ui && Kt(t, e.watch);
}
