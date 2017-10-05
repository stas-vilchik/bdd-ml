{
  target = wrapIfNeeded(target);
  var newOptions = new MutationObserverOptions(options);
  var registration;
  var registrations = registrationsTable.get(target);
  if (!registrations) registrationsTable.set(target, (registrations = []));

  for (var i = 0; i < registrations.length; i++) {
    if (registrations[i].observer === this) {
      registration = registrations[i];
      registration.removeTransientObservers();
      registration.options = newOptions;
    }
  }

  if (!registration) {
    registration = new Registration(this, target, newOptions);
    registrations.push(registration);
    this.nodes_.push(target);
  }
}
