{
  var e = this,
    n = e._events[t];

  if (n) {
    n = n.length > 1 ? m(n) : n;

    for (var r = m(arguments, 1), i = 0, o = n.length; i < o; i++)
      try {
        n[i].apply(e, r);
      } catch (n) {
        k(n, e, 'event handler for "' + t + '"');
      }
  }

  return e;
}
