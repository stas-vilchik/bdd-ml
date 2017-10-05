{
  var context = vnode.context;
  var componentInstance = vnode.componentInstance;

  if (!componentInstance._isMounted) {
    componentInstance._isMounted = true;
    callHook(componentInstance, "mounted");
  }

  if (vnode.data.keepAlive) {
    if (context._isMounted) {
      queueActivatedComponent(componentInstance);
    } else {
      activateChildComponent(componentInstance, true);
    }
  }
}
