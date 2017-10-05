{
  for (; t.componentInstance; ) t = t.componentInstance._vnode;

  return e(t.tag);
}
