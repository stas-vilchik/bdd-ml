{
  for (var n = t.data, r = t, o = t; e(o.componentInstance); )
    (o = o.componentInstance._vnode).data && (n = De(o.data, n));

  for (; e((r = r.parent)); ) r.data && (n = De(n, r.data));

  return Le(n.staticClass, n.class);
}
