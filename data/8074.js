{
  if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
    var child = (vnode.componentInstance = createComponentInstanceForVnode(
      vnode,
      activeInstance,
      parentElm,
      refElm
    ));
    child.$mount(hydrating ? vnode.elm : undefined, hydrating);
  } else if (vnode.data.keepAlive) {
    var mountedNode = vnode;
    componentVNodeHooks.prepatch(mountedNode, mountedNode);
  }
}
