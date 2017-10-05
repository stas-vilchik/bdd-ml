{
  var eventType = name.slice(2);
  return function(value) {
    var inlineEventHandlers = eventHandlersTable.get(this);

    if (!inlineEventHandlers) {
      inlineEventHandlers = Object.create(null);
      eventHandlersTable.set(this, inlineEventHandlers);
    }

    var old = inlineEventHandlers[name];
    if (old) this.removeEventListener(eventType, old.wrapped, false);

    if (typeof value === "function") {
      var wrapped = function(e) {
        var rv = value.call(this, e);
        if (rv === false) e.preventDefault();
        else if (name === "onbeforeunload" && typeof rv === "string")
          e.returnValue = rv;
      };

      this.addEventListener(eventType, wrapped, false);
      inlineEventHandlers[name] = {
        value: value,
        wrapped: wrapped
      };
    }
  };
}
