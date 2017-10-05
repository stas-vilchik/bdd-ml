{
  ReactTestUtils.Simulate = {};
  var eventType;

  for (eventType in EventPluginRegistry.eventNameDispatchConfigs) {
    ReactTestUtils.Simulate[eventType] = makeSimulator(eventType);
  }
}
