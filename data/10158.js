{
  vm._vnode = null;
  vm._staticTrees = null;
  var parentVnode = (vm.$vnode = vm.$options._parentVnode);
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;

  vm._c = function(a, b, c, d) {
    return createElement(vm, a, b, c, d, false);
  };

  vm.$createElement = function(a, b, c, d) {
    return createElement(vm, a, b, c, d, true);
  };

  var parentData = parentVnode && parentVnode.data;
  {
    defineReactive$$1(
      vm,
      "$attrs",
      (parentData && parentData.attrs) || emptyObject,
      function() {
        !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
      },
      true
    );
    defineReactive$$1(
      vm,
      "$listeners",
      vm.$options._parentListeners || emptyObject,
      function() {
        !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
      },
      true
    );
  }
}
