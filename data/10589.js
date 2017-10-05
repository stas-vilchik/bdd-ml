{
  return !t.componentInstance || (t.data && t.data.transition)
    ? t
    : Dn(t.componentInstance._vnode);
}
