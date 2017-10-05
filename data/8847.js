{
  if (vnode.data.show !== true) {
    leave(vnode, rm);
  } else {
    rm();
  }
}
