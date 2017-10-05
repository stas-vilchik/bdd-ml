{
  var e = t.componentInstance;
  e._isDestroyed || (t.data.keepAlive ? kt(e, !0) : e.$destroy());
}
