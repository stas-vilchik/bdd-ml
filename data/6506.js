{
  for (var i = 0; i < observer.nodes_.length; i++) {
    var node = observer.nodes_[i];
    var registrations = registrationsTable.get(node);
    if (!registrations) return;

    for (var j = 0; j < registrations.length; j++) {
      var registration = registrations[j];
      if (registration.observer === observer)
        registration.removeTransientObservers();
    }
  }
}
