{
  var options = vnode.componentOptions;
  var child = (vnode.componentInstance = oldVnode.componentInstance);
  updateChildComponent(
    child,
    options.propsData,
    options.listeners,
    vnode,
    options.children
  );
}
