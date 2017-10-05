{
  var e = /^hook:/;
  (t.prototype.$on = function(t, n) {
    var r = this,
      o = this;
    if (Array.isArray(t))
      for (var i = 0, a = t.length; i < a; i++) r.$on(t[i], n);
    else
      (o._events[t] || (o._events[t] = [])).push(n),
        e.test(t) && (o._hasHookEvent = !0);
    return o;
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
    }),
    (t.prototype.$emit = function(t) {
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
    });
}
