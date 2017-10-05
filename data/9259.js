{
  return !t.componentInstance || (t.data && t.data.transition)
    ? t
    : nr(t.componentInstance._vnode);
}
