{
  var i;
  var ancestor = vnode;

  while (ancestor) {
    if (isDef((i = ancestor.context)) && isDef((i = i.$options._scopeId))) {
      nodeOps.setAttribute(vnode.elm, i, "");
    }

    ancestor = ancestor.parent;
  }

  if (
    isDef((i = activeInstance)) &&
    i !== vnode.context &&
    isDef((i = i.$options._scopeId))
  ) {
    nodeOps.setAttribute(vnode.elm, i, "");
  }
}
