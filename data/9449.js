{
  if ("select" === n.tag) {
    Gn(t, e, n.context);
    var r = t._vOptions,
      i = (t._vOptions = [].map.call(t.options, Qn));
    i.some(function(t, e) {
      return !b(t, r[e]);
    }) &&
      (t.multiple
        ? e.value.some(function(t) {
            return Yn(t, i);
          })
        : e.value !== e.oldValue && Yn(e.value, i)) &&
      er(t, "change");
  }
}
