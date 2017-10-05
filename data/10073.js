{
  Vue.prototype._update = function(vnode, hydrating) {
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
  };

  Vue.prototype.$forceUpdate = function() {
    var vm = this;

    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function() {
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
  };
}
