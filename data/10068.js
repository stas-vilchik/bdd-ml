{
  var vm = this;
  {
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
}
