{
  var e = this,
    n = e._events[t];

  if (n) {
    n = n.length > 1 ? m(n) : n;

    for (var r = m(arguments, 1), o = 0, i = n.length; o < i; o++)
      try {
        n[o].apply(e, r);
      } catch (n) {
        k(n, e, 'event handler for "' + t + '"');
      }
  }

  return e;
}
