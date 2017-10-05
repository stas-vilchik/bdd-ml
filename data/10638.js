{
  if (!t.componentInstance || t.componentInstance._isDestroyed)
    (t.componentInstance = Yt(t, Fr, n, r)).$mount(e ? t.elm : void 0, e);
  else if (t.data.keepAlive) {
    var o = t;
    Zr.prepatch(o, o);
  }
}
