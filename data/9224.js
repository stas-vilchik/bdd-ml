{
  var n,
    r = {};
  if (e)
    for (var i = t; i.componentInstance; )
      (i = i.componentInstance._vnode).data && (n = En(i.data)) && y(r, n);
  (n = En(t.data)) && y(r, n);

  for (var o = t; (o = o.parent); ) o.data && (n = En(o.data)) && y(r, n);

  return r;
}
