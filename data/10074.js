{
  var vm = this;

  if (vm._isMounted) {
    callHook(vm, "beforeUpdate");
  }

  var prevEl = vm.$el;
  var prevVnode = vm._vnode;
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  vm._vnode = vnode;

  if (!prevVnode) {
    vm.$el = vm.__patch__(
      vm.$el,
      vnode,
      hydrating,
      false,
      vm.$options._parentElm,
      vm.$options._refElm
    );
    vm.$options._parentElm = vm.$options._refElm = null;
  } else {
    vm.$el = vm.__patch__(prevVnode, vnode);
  }

  activeInstance = prevActiveInstance;

  if (prevEl) {
    prevEl.__vue__ = null;
  }

  if (vm.$el) {
    vm.$el.__vue__ = vm;
  }

  if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
    vm.$parent.$el = vm.$el;
  }
}
