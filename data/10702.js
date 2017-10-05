{
  if (!t(o)) {
    var f = !1,
      p = [];
    if (t(r)) (f = !0), c(o, p, u, l);
    else {
      var d = e(r.nodeType);
      if (!d && Ve(r, o)) $(r, o, p, s);
      else {
        if (d) {
          if (
            (1 === r.nodeType &&
              r.hasAttribute(Xn) &&
              (r.removeAttribute(Xn), (a = !0)),
            n(a) && k(r, o, p))
          )
            return x(o, p, !0), r;
          r = i(r);
        }

        var v = r.elm,
          m = T.parentNode(v);
        if ((c(o, p, v._leaveCb ? null : m, T.nextSibling(v)), e(o.parent)))
          for (var y = o.parent, _ = h(o); y; ) {
            for (var C = 0; C < E.destroy.length; ++C) E.destroy[C](y);

            if (((y.elm = o.elm), _)) {
              for (var A = 0; A < E.create.length; ++A) E.create[A](Ao, y);

              var w = y.data.hook.insert;
              if (w.merged) for (var O = 1; O < w.fns.length; O++) w.fns[O]();
            }

            y = y.parent;
          }
        e(m) ? b(m, [r], 0, 0) : e(r.tag) && g(r);
      }
    }
    return x(o, p, f), o.elm;
  }

  e(r) && g(r);
}
