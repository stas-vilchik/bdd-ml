{
  var r = this,
    i = this;
  if (Array.isArray(t))
    for (var o = 0, a = t.length; o < a; o++) r.$on(t[o], n);
  else
    (i._events[t] || (i._events[t] = [])).push(n),
      e.test(t) && (i._hasHookEvent = !0);
  return i;
}
