{
  var n = this,
    r = this;
  if (!arguments.length) return (r._events = Object.create(null)), r;

  if (Array.isArray(t)) {
    for (var o = 0, i = t.length; o < i; o++) n.$off(t[o], e);

    return r;
  }

  var a = r._events[t];
  if (!a) return r;
  if (1 === arguments.length) return (r._events[t] = null), r;
  if (e)
    for (var s, c = a.length; c--; )
      if ((s = a[c]) === e || s.fn === e) {
        a.splice(c, 1);
        break;
      }
  return r;
}
