{
  var max = NA;

  var searchForMax = function(nodeConfig) {
    for (var readableID in nodeConfig) {
      var order = nodeConfig[readableID].order;
      max = order > max ? order : max;
    }
  };

  for (var eventName in config) {
    var eventConfig = config[eventName];

    if (eventConfig.bubbled) {
      searchForMax(eventConfig.bubbled);
      searchForMax(eventConfig.captured);
    } else {
      searchForMax(eventConfig);
    }
  }

  var runData = registerTestHandlers(config, hierarchyConfig);
  var extractedEvents = ResponderEventPlugin.extractEvents(
    nativeEventConfig.topLevelType,
    nativeEventConfig.targetInst,
    nativeEventConfig.nativeEvent,
    nativeEventConfig.target
  );
  EventPluginHub.enqueueEvents(extractedEvents);
  EventPluginHub.processEventQueue(true);
  expect("number of events dispatched:" + runData.dispatchCount).toBe(
    "number of events dispatched:" + (max + 1)
  );
}
