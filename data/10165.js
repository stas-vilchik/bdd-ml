{
  var vm = this;
  var ref = vm.$options;
  var render = ref.render;
  var staticRenderFns = ref.staticRenderFns;
  var _parentVnode = ref._parentVnode;

  if (vm._isMounted) {
    for (var key in vm.$slots) {
      var slot = vm.$slots[key];

      if (slot._rendered) {
        vm.$slots[key] = cloneVNodes(slot, true);
      }
    }
  }

  vm.$scopedSlots =
    (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject;

  if (staticRenderFns && !vm._staticTrees) {
    vm._staticTrees = [];
  }

  vm.$vnode = _parentVnode;
  var vnode;

  try {
    vnode = render.call(vm._renderProxy, vm.$createElement);
  } catch (e) {
    handleError(e, vm, "render function");
    {
      vnode = vm.$options.renderError
        ? vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e)
        : vm._vnode;
    }
  }

  if (!(vnode instanceof VNode)) {
    if ("development" !== "production" && Array.isArray(vnode)) {
      warn(
        "Multiple root nodes returned from render function. Render function " +
          "should return a single root node.",
        vm
      );
    }

    vnode = createEmptyVNode();
  }

  vnode.parent = _parentVnode;
  return vnode;
}
