{
  for (var node = target; node; node = node.parentNode) {
    var registrations = registrationsTable.get(node);

    if (registrations) {
      for (var j = 0; j < registrations.length; j++) {
        var registration = registrations[j];
        var options = registration.options;
        if (node !== target && !options.subtree) continue;
        var record = callback(options);
        if (record) registration.enqueue(record);
      }
    }
  }
}
