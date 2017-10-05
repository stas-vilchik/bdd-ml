{
  var this$1 = this;
  var vm = this;

  if (!arguments.length) {
    vm._events = Object.create(null);
    return vm;
  }

  if (Array.isArray(event)) {
    for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
      this$1.$off(event[i$1], fn);
    }

    return vm;
  }

  var cbs = vm._events[event];

  if (!cbs) {
    return vm;
  }

  if (arguments.length === 1) {
    vm._events[event] = null;
    return vm;
  }

  var cb;
  var i = cbs.length;

  while (i--) {
    cb = cbs[i];

    if (cb === fn || cb.fn === fn) {
      cbs.splice(i, 1);
      break;
    }
  }

  return vm;
}
