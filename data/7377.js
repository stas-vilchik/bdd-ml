{
  var isListening = getListeningForDocument(mountAt);
  var dependencies =
    EventPluginRegistry.registrationNameDependencies[registrationName];

  for (var i = 0; i < dependencies.length; i++) {
    var dependency = dependencies[i];

    if (!(isListening.hasOwnProperty(dependency) && isListening[dependency])) {
      return false;
    }
  }

  return true;
}
