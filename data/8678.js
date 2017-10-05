{
  var vm = this;
  vm._uid = uid$1++;
  var startTag, endTag;

  if ("development" !== "production" && config.performance && mark) {
    startTag = "vue-perf-init:" + vm._uid;
    endTag = "vue-perf-end:" + vm._uid;
    mark(startTag);
  }

  vm._isVue = true;

  if (options && options._isComponent) {
    initInternalComponent(vm, options);
  } else {
    vm.$options = mergeOptions(
      resolveConstructorOptions(vm.constructor),
      options || {},
      vm
    );
  }

  {
    initProxy(vm);
  }
  vm._self = vm;
  initLifecycle(vm);
  initEvents(vm);
  initRender(vm);
  callHook(vm, "beforeCreate");
  initInjections(vm);
  initState(vm);
  initProvide(vm);
  callHook(vm, "created");

  if ("development" !== "production" && config.performance && mark) {
    vm._name = formatComponentName(vm, false);
    mark(endTag);
    measure(vm._name + " init", startTag, endTag);
  }

  if (vm.$options.el) {
    vm.$mount(vm.$options.el);
  }
}
