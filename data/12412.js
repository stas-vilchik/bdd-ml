{
  if (oldVnode.data.ref !== vnode.data.ref) {
    registerRef(oldVnode, true);
    registerRef(vnode);
  }
}
