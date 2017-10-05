{
  function i() {
    x.cancelled ||
      (n.data.show ||
        ((a.parentNode._pending || (a.parentNode._pending = {}))[n.key] = n),
      v && v(a),
      b &&
        (Fn(a, f),
        Fn(a, d),
        Pn(function() {
          Fn(a, p),
            Rn(a, f),
            x.cancelled || $ || (Jn(w) ? setTimeout(x, w) : Hn(a, u, x));
        })),
      h && h(a, x),
      b || $ || x());
  }

  var a = n.elm;
  e(a._enterCb) && ((a._enterCb.cancelled = !0), a._enterCb());
  var s = Dn(n.data.transition);
  if (t(s)) return r();

  if (!e(a._leaveCb) && 1 === a.nodeType) {
    var c = s.css,
      u = s.type,
      f = s.leaveClass,
      p = s.leaveToClass,
      d = s.leaveActiveClass,
      v = s.beforeLeave,
      h = s.leave,
      m = s.afterLeave,
      y = s.leaveCancelled,
      g = s.delayLeave,
      _ = s.duration,
      b = !1 !== c && !Pi,
      $ = qn(h),
      w = l(o(_) ? _.leave : _),
      x = (a._leaveCb = C(function() {
        a.parentNode &&
          a.parentNode._pending &&
          (a.parentNode._pending[n.key] = null),
          b && (Rn(a, p), Rn(a, d)),
          x.cancelled ? (b && Rn(a, f), y && y(a)) : (r(), m && m(a)),
          (a._leaveCb = null);
      }));
    g ? g(i) : i();
  }
}
