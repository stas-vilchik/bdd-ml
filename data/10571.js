{
  var o = n.elm;
  e(o._leaveCb) && ((o._leaveCb.cancelled = !0), o._leaveCb());
  var a = dn(n.data.transition);

  if (!t(a) && !e(o._enterCb) && 1 === o.nodeType) {
    for (
      var s = a.css,
        c = a.type,
        u = a.enterClass,
        f = a.enterToClass,
        p = a.enterActiveClass,
        d = a.appearClass,
        v = a.appearToClass,
        h = a.appearActiveClass,
        m = a.beforeEnter,
        y = a.enter,
        _ = a.afterEnter,
        g = a.enterCancelled,
        b = a.beforeAppear,
        C = a.appear,
        w = a.afterAppear,
        $ = a.appearCancelled,
        x = a.duration,
        k = Fr,
        O = Fr.$vnode;
      O && O.parent;

    )
      k = (O = O.parent).context;

    var S = !k._isMounted || !n.isRootInsert;

    if (!S || C || "" === C) {
      var E = S && d ? d : u,
        j = S && h ? h : p,
        T = S && v ? v : f,
        I = S ? b || m : m,
        D = S && "function" == typeof C ? C : y,
        L = S ? w || _ : _,
        P = S ? $ || g : g,
        M = l(i(x) ? x.enter : x),
        N = !1 !== s && !ur,
        F = $n(D),
        R = (o._enterCb = A(function() {
          N && (mn(o, T), mn(o, j)),
            R.cancelled ? (N && mn(o, E), P && P(o)) : L && L(o),
            (o._enterCb = null);
        }));
      n.data.show ||
        nt(n.data.hook || (n.data.hook = {}), "insert", function() {
          var t = o.parentNode,
            e = t && t._pending && t._pending[n.key];
          e && e.tag === n.tag && e.elm._leaveCb && e.elm._leaveCb(),
            D && D(o, R);
        }),
        I && I(o),
        N &&
          (hn(o, E),
          hn(o, j),
          vn(function() {
            hn(o, T),
              mn(o, E),
              R.cancelled || F || (wn(M) ? setTimeout(R, M) : yn(o, c, R));
          })),
        n.data.show && (r && r(), D && D(o, R)),
        N || F || R();
    }
  }
}
