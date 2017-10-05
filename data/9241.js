{
  var i = n.elm;
  e(i._leaveCb) && ((i._leaveCb.cancelled = !0), i._leaveCb());
  var a = Dn(n.data.transition);

  if (!t(a) && !e(i._enterCb) && 1 === i.nodeType) {
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
        g = a.afterEnter,
        _ = a.enterCancelled,
        b = a.beforeAppear,
        $ = a.appear,
        w = a.afterAppear,
        x = a.appearCancelled,
        A = a.duration,
        k = po,
        O = po.$vnode;
      O && O.parent;

    )
      k = (O = O.parent).context;

    var T = !k._isMounted || !n.isRootInsert;

    if (!T || $ || "" === $) {
      var S = T && d ? d : u,
        E = T && h ? h : p,
        j = T && v ? v : f,
        L = T ? b || m : m,
        N = T && "function" == typeof $ ? $ : y,
        M = T ? w || g : g,
        I = T ? x || _ : _,
        D = l(o(A) ? A.enter : A),
        P = !1 !== s && !Pi,
        F = qn(N),
        R = (i._enterCb = C(function() {
          P && (Rn(i, j), Rn(i, E)),
            R.cancelled ? (P && Rn(i, S), I && I(i)) : M && M(i),
            (i._enterCb = null);
        }));
      n.data.show ||
        nt(n.data.hook || (n.data.hook = {}), "insert", function() {
          var t = i.parentNode,
            e = t && t._pending && t._pending[n.key];
          e && e.tag === n.tag && e.elm._leaveCb && e.elm._leaveCb(),
            N && N(i, R);
        }),
        L && L(i),
        P &&
          (Fn(i, S),
          Fn(i, E),
          Pn(function() {
            Fn(i, j),
              Rn(i, S),
              R.cancelled || F || (Jn(D) ? setTimeout(R, D) : Hn(i, c, R));
          })),
        n.data.show && (r && r(), N && N(i, R)),
        P || F || R();
    }
  }
}
