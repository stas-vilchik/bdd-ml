{
  var e = t.context,
    n = t.componentInstance;
  n._isMounted || ((n._isMounted = !0), Ot(n, "mounted")),
    t.data.keepAlive && (e._isMounted ? Tt(n) : xt(n, !0));
}
