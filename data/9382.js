{
  var e = t.context,
    n = t.componentInstance;
  n._isMounted || ((n._isMounted = !0), Ot(n, "mounted")),
    t.data.keepAlive && (e._isMounted ? jt(n) : At(n, !0));
}
