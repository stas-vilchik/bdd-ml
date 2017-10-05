{
  var OriginalEvent = window[name];

  var GenericEvent = function(type, options) {
    if (type instanceof OriginalEvent) setWrapper(type, this);
    else return wrap(constructEvent(OriginalEvent, name, type, options));
  };

  GenericEvent.prototype = Object.create(SuperEvent.prototype);
  if (prototype) mixin(GenericEvent.prototype, prototype);

  if (OriginalEvent) {
    try {
      registerWrapper(OriginalEvent, GenericEvent, new OriginalEvent("temp"));
    } catch (ex) {
      registerWrapper(OriginalEvent, GenericEvent, document.createEvent(name));
    }
  }

  return GenericEvent;
}
