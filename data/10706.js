{
  if ("select" === n.tag) {
    kn(t, e, n.context);
    var r = t._vOptions,
      o = (t._vOptions = [].map.call(t.options, En));
    o.some(function(t, e) {
      return !b(t, r[e]);
    }) &&
      (t.multiple
        ? e.value.some(function(t) {
            return Sn(t, o);
          })
        : e.value !== e.oldValue && Sn(e.value, o)) &&
      In(t, "change");
  }
}
