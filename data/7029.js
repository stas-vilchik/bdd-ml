{
  var registrations = registrationsTable.get(node);

  for (var i = 0; i < registrations.length; i++) {
    var registration = registrations[i];

    if (registration.observer === this) {
      registration.removeListeners();
      registrations.splice(i, 1);
      break;
    }
  }
}
