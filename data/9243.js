{
  var t = i.parentNode,
    e = t && t._pending && t._pending[n.key];
  e && e.tag === n.tag && e.elm._leaveCb && e.elm._leaveCb(), N && N(i, R);
}
