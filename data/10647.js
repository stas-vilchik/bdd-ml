{
  var r = this,
    o = this;
  if (Array.isArray(t))
    for (var i = 0, a = t.length; i < a; i++) r.$on(t[i], n);
  else
    (o._events[t] || (o._events[t] = [])).push(n),
      e.test(t) && (o._hasHookEvent = !0);
  return o;
}
