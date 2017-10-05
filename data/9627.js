{
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  var listeners = vm.$options._parentListeners;

  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}
