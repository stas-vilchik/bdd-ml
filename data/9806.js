{
  var i;
  var innerNode = vnode;

  while (innerNode.componentInstance) {
    innerNode = innerNode.componentInstance._vnode;

    if (isDef((i = innerNode.data)) && isDef((i = i.transition))) {
      for (i = 0; i < cbs.activate.length; ++i) {
        cbs.activate[i](emptyNode, innerNode);
      }

      insertedVnodeQueue.push(innerNode);
      break;
    }
  }

  insert(parentElm, vnode.elm, refElm);
}
