{
  var events = EventPluginHub.extractEvents(
    topLevelType,
    targetInst,
    nativeEvent,
    nativeEventTarget
  );
  runEventQueueInBatch(events);
}
