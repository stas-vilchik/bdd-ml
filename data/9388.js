{
  var e = /^hook:/;
  (t.prototype.$on = function(t, n) {
    var r = this,
      i = this;
    if (Array.isArray(t))
      for (var o = 0, a = t.length; o < a; o++) r.$on(t[o], n);
    else
      (i._events[t] || (i._events[t] = [])).push(n),
        e.test(t) && (i._hasHookEvent = !0);
    return i;
  }),
    (t.prototype.$once = function(t, e) {
      function n() {
        r.$off(t, n), e.apply(r, arguments);
      }

      var r = this;
      return (n.fn = e), r.$on(t, n), r;
    }),
    (t.prototype.$off = function(t, e) {
      var n = this,
        r = this;
      if (!arguments.length) return (r._events = Object.create(null)), r;

      if (Array.isArray(t)) {
        for (var i = 0, o = t.length; i < o; i++) n.$off(t[i], e);

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
    }),
    (t.prototype.$emit = function(t) {
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
    });
}
