{
  if (hasProxy) {
    var options = vm.$options;
    var handlers =
      options.render && options.render._withStripped ? getHandler : hasHandler;
    vm._renderProxy = new Proxy(vm, handlers);
  } else {
    vm._renderProxy = vm;
  }
}
