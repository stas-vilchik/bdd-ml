{
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true;
    }
  }
}
