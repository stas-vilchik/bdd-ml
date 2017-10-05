{
  var this$1 = this;
  var vm = this;

  if (!arguments.length) {
    vm._events = Object.create(null);
    return vm;
  }

  if (Array.isArray(event)) {
    for (var i = 0, l = event.length; i < l; i++) {
      this$1.$off(event[i], fn);
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

  if (fn) {
    var cb;
    var i$1 = cbs.length;

    while (i$1--) {
      cb = cbs[i$1];

      if (cb === fn || cb.fn === fn) {
        cbs.splice(i$1, 1);
        break;
      }
    }
  }

  return vm;
}
