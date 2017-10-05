{
  function o() {
    $.cancelled ||
      (n.data.show ||
        ((a.parentNode._pending || (a.parentNode._pending = {}))[n.key] = n),
      v && v(a),
      b &&
        (hn(a, f),
        hn(a, d),
        vn(function() {
          hn(a, p),
            mn(a, f),
            $.cancelled || C || (wn(w) ? setTimeout($, w) : yn(a, u, $));
        })),
      h && h(a, $),
      b || C || $());
  }

  var a = n.elm;
  e(a._enterCb) && ((a._enterCb.cancelled = !0), a._enterCb());
  var s = dn(n.data.transition);
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
      _ = s.delayLeave,
      g = s.duration,
      b = !1 !== c && !ur,
      C = $n(h),
      w = l(i(g) ? g.leave : g),
      $ = (a._leaveCb = A(function() {
        a.parentNode &&
          a.parentNode._pending &&
          (a.parentNode._pending[n.key] = null),
          b && (mn(a, p), mn(a, d)),
          $.cancelled ? (b && mn(a, f), y && y(a)) : (r(), m && m(a)),
          (a._leaveCb = null);
      }));
    _ ? _(o) : o();
  }
}
