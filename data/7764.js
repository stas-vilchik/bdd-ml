{
  return new Proxy(constructor.apply(that, args), {
    set: function(target, prop, value) {
      if (
        prop !== "isPersistent" &&
        !target.constructor.Interface.hasOwnProperty(prop) &&
        shouldBeReleasedProperties.indexOf(prop) === -1
      ) {
        warning(
          didWarnForAddedNewProperty || target.isPersistent(),
          "This synthetic event is reused for performance reasons. If you're " +
            "seeing this, you're adding a new property in the synthetic event object. " +
            "The property is never released. See " +
            "https://fb.me/react-event-pooling for more information."
        );
        didWarnForAddedNewProperty = true;
      }

      target[prop] = value;
      return true;
    }
  });
}
