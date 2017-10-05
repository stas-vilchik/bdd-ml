{
  var names = getOwnPropertyNames(source);

  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    if (name === "polymerBlackList_") continue;
    if (name in target) continue;
    if (source.polymerBlackList_ && source.polymerBlackList_[name]) continue;

    if (isFirefox) {
      source.__lookupGetter__(name);
    }

    var descriptor = getDescriptor(source, name);
    var getter, setter;

    if (allowMethod && typeof descriptor.value === "function") {
      target[name] = getMethod(name);
      continue;
    }

    var isEvent = isEventHandlerName(name);
    if (isEvent) getter = scope.getEventHandlerGetter(name);
    else getter = getGetter(name);

    if (descriptor.writable || descriptor.set || isBrokenSafari) {
      if (isEvent) setter = scope.getEventHandlerSetter(name);
      else setter = getSetter(name);
    }

    defineProperty(target, name, {
      get: getter,
      set: setter,
      configurable: descriptor.configurable,
      enumerable: descriptor.enumerable
    });
  }
}
