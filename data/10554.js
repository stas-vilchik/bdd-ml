{
  var n,
    r = {};
  if (e)
    for (var o = t; o.componentInstance; )
      (o = o.componentInstance._vnode).data && (n = sn(o.data)) && y(r, n);
  (n = sn(t.data)) && y(r, n);

  for (var i = t; (i = i.parent); ) i.data && (n = sn(i.data)) && y(r, n);

  return r;
}
