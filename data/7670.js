{
  var events;
  var plugins = EventPluginRegistry.plugins;

  for (var i = 0; i < plugins.length; i++) {
    var possiblePlugin = plugins[i];

    if (possiblePlugin) {
      var extractedEvents = possiblePlugin.extractEvents(
        topLevelType,
        targetInst,
        nativeEvent,
        nativeEventTarget
      );

      if (extractedEvents) {
        events = accumulateInto(events, extractedEvents);
      }
    }
  }

  return events;
}
