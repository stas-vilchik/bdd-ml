{
  if (isDef(rm) || isDef(vnode.data)) {
    var i;
    var listeners = cbs.remove.length + 1;

    if (isDef(rm)) {
      rm.listeners += listeners;
    } else {
      rm = createRmCb(vnode.elm, listeners);
    }

    if (
      isDef((i = vnode.componentInstance)) &&
      isDef((i = i._vnode)) &&
      isDef(i.data)
    ) {
      removeAndInvokeRemoveHook(i, rm);
    }

    for (i = 0; i < cbs.remove.length; ++i) {
      cbs.remove[i](vnode, rm);
    }

    if (isDef((i = vnode.data.hook)) && isDef((i = i.remove))) {
      i(vnode, rm);
    } else {
      rm();
    }
  } else {
    removeNode(vnode.elm);
  }
}
