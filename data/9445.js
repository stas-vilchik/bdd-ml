{
  if (!t(i)) {
    var f = !1,
      p = [];
    if (t(r)) (f = !0), c(i, p, u, l);
    else {
      var d = e(r.nodeType);
      if (!d && Ue(r, i)) x(r, i, p, s);
      else {
        if (d) {
          if (
            (1 === r.nodeType &&
              r.hasAttribute(ki) &&
              (r.removeAttribute(ki), (a = !0)),
            n(a) && k(r, i, p))
          )
            return A(i, p, !0), r;
          r = o(r);
        }

        var v = r.elm,
          m = j.parentNode(v);
        if ((c(i, p, v._leaveCb ? null : m, j.nextSibling(v)), e(i.parent)))
          for (var y = i.parent, g = h(i); y; ) {
            for (var $ = 0; $ < S.destroy.length; ++$) S.destroy[$](y);

            if (((y.elm = i.elm), g)) {
              for (var C = 0; C < S.create.length; ++C) S.create[C](ia, y);

              var w = y.data.hook.insert;
              if (w.merged) for (var O = 1; O < w.fns.length; O++) w.fns[O]();
            }

            y = y.parent;
          }
        e(m) ? b(m, [r], 0, 0) : e(r.tag) && _(r);
      }
    }
    return A(i, p, f), i.elm;
  }

  e(r) && _(r);
}
