{
  if (!t.componentInstance || t.componentInstance._isDestroyed)
    (t.componentInstance = Xt(t, po, n, r)).$mount(e ? t.elm : void 0, e);
  else if (t.data.keepAlive) {
    var i = t;
    Ao.prepatch(i, i);
  }
}
