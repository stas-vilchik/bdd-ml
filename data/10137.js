{
  var componentInstance = vnode.componentInstance;

  if (!componentInstance._isDestroyed) {
    if (!vnode.data.keepAlive) {
      componentInstance.$destroy();
    } else {
      deactivateChildComponent(componentInstance, true);
    }
  }
}
