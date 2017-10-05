{
  for (var n = t.data, r = t, i = t; e(i.componentInstance); )
    (i = i.componentInstance._vnode).data && (n = Ne(i.data, n));

  for (; e((r = r.parent)); ) r.data && (n = Ne(n, r.data));

  return Me(n.staticClass, n.class);
}
