{
  for (; ancestor; ancestor = ancestor.parentNode) {
    var registrations = registrationsTable.get(ancestor);
    if (!registrations) continue;

    for (var i = 0; i < registrations.length; i++) {
      var registration = registrations[i];
      if (registration.options.subtree) registration.addTransientObserver(node);
    }
  }
}
