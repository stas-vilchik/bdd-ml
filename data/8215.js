{
  if (
    process.env.NODE_ENV !== "production" &&
    warn &&
    modifiers &&
    modifiers.prevent &&
    modifiers.passive
  ) {
    warn(
      "passive and prevent can't be used together. " +
        "Passive handler can't prevent default event."
    );
  }

  if (modifiers && modifiers.capture) {
    delete modifiers.capture;
    name = "!" + name;
  }

  if (modifiers && modifiers.once) {
    delete modifiers.once;
    name = "~" + name;
  }

  if (modifiers && modifiers.passive) {
    delete modifiers.passive;
    name = "&" + name;
  }

  var events;

  if (modifiers && modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = {
    value: value,
    modifiers: modifiers
  };
  var handlers = events[name];

  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }
}
