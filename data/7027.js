{
  target = wrapIfNeeded(target);

  if (
    (!options.childList && !options.attributes && !options.characterData) ||
    (options.attributeOldValue && !options.attributes) ||
    (options.attributeFilter &&
      options.attributeFilter.length &&
      !options.attributes) ||
    (options.characterDataOldValue && !options.characterData)
  ) {
    throw new SyntaxError();
  }

  var registrations = registrationsTable.get(target);
  if (!registrations) registrationsTable.set(target, (registrations = []));
  var registration;

  for (var i = 0; i < registrations.length; i++) {
    if (registrations[i].observer === this) {
      registration = registrations[i];
      registration.removeListeners();
      registration.options = options;
      break;
    }
  }

  if (!registration) {
    registration = new Registration(this, target, options);
    registrations.push(registration);
    this.nodes_.push(target);
  }

  registration.addListeners();
}
