{
  var pluginOrdering = [];
  EventPluginRegistry.injectEventPluginOrder(pluginOrdering);
  expect(function() {
    EventPluginRegistry.injectEventPluginOrder(pluginOrdering);
  }).toThrowError(
    "EventPluginRegistry: Cannot inject event plugin ordering more than " +
      "once. You are likely trying to load more than one copy of React."
  );
}
