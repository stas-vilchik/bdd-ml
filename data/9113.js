{
  var r = !qi();
  "function" == typeof n
    ? ((wo.get = r ? Vt(e) : n), (wo.set = _))
    : ((wo.get = n.get ? (r && !1 !== n.cache ? Vt(e) : n.get) : _),
      (wo.set = n.set ? n.set : _)),
    Object.defineProperty(t, e, wo);
}
