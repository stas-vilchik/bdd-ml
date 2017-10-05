{
  var vm = this;

  if (vm._isBeingDestroyed) {
    return;
  }

  callHook(vm, "beforeDestroy");
  vm._isBeingDestroyed = true;
  var parent = vm.$parent;

  if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
    remove(parent.$children, vm);
  }

  if (vm._watcher) {
    vm._watcher.teardown();
  }

  var i = vm._watchers.length;

  while (i--) {
    vm._watchers[i].teardown();
  }

  if (vm._data.__ob__) {
    vm._data.__ob__.vmCount--;
  }

  vm._isDestroyed = true;

  vm.__patch__(vm._vnode, null);

  callHook(vm, "destroyed");
  vm.$off();

  if (vm.$el) {
    vm.$el.__vue__ = null;
  }
}
