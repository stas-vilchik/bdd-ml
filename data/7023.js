{
  var registrations = registrationsTable.get(node);
  if (!registrations) return;
  registrations.forEach(function(registration) {
    if (registration.observer === observer)
      registration.removeTransientObservers();
  });
}
