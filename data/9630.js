{
  var hookRE = /^hook:/;

  Vue.prototype.$on = function(event, fn) {
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
  };

  Vue.prototype.$once = function(event, fn) {
    var vm = this;

    function on() {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }

    on.fn = fn;
    vm.$on(event, on);
    return vm;
  };

  Vue.prototype.$off = function(event, fn) {
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
  };

  Vue.prototype.$emit = function(event) {
    var vm = this;

    if (process.env.NODE_ENV !== "production") {
      var lowerCaseEvent = event.toLowerCase();

      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          'Event "' +
            lowerCaseEvent +
            '" is emitted in component ' +
            formatComponentName(vm) +
            ' but the handler is registered for "' +
            event +
            '". ' +
            "Note that HTML attributes are case-insensitive and you cannot use " +
            "v-on to listen to camelCase events when using in-DOM templates. " +
            'You should probably use "' +
            hyphenate(event) +
            '" instead of "' +
            event +
            '".'
        );
      }
    }

    var cbs = vm._events[event];

    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);

      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, 'event handler for "' + event + '"');
        }
      }
    }

    return vm;
  };
}
