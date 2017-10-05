{
  if (process.env.NODE_ENV !== "production") {
    isUpdatingChildComponent = true;
  }

  var hasChildren = !!(
    renderChildren ||
    vm.$options._renderChildren ||
    parentVnode.data.scopedSlots ||
    vm.$scopedSlots !== emptyObject
  );
  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode;

  if (vm._vnode) {
    vm._vnode.parent = parentVnode;
  }

  vm.$options._renderChildren = renderChildren;
  vm.$attrs = (parentVnode.data && parentVnode.data.attrs) || emptyObject;
  vm.$listeners = listeners || emptyObject;

  if (propsData && vm.$options.props) {
    observerState.shouldConvert = false;
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];

    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      props[key] = validateProp(key, vm.$options.props, propsData, vm);
    }

    observerState.shouldConvert = true;
    vm.$options.propsData = propsData;
  }

  if (listeners) {
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);
  }

  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (process.env.NODE_ENV !== "production") {
    isUpdatingChildComponent = false;
  }
}
