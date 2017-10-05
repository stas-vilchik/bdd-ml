{
  var i = vnode.data;

  if (isDef(i)) {
    var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;

    if (isDef((i = i.hook)) && isDef((i = i.init))) {
      i(vnode, false, parentElm, refElm);
    }

    if (isDef(vnode.componentInstance)) {
      initComponent(vnode, insertedVnodeQueue);

      if (isTrue(isReactivated)) {
        reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
      }

      return true;
    }
  }
}
