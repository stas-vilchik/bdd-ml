{
  var this$1 = this;
  var vm = this;

  if (Array.isArray(event)) {
    for (var i = 0, l = event.length; i < l; i++) {
      this$1.$on(event[i], fn);
    }
  } else {
    (vm._events[event] || (vm._events[event] = [])).push(fn);

    if (hookRE.test(event)) {
      vm._hasHookEvent = true;
    }
  }

  return vm;
}
