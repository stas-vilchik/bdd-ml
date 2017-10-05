{
  var OnePlugin = createPlugin({
    eventTypes: {
      badEvent: {}
    }
  });
  EventPluginRegistry.injectEventPluginsByName({
    one: OnePlugin
  });
  expect(function() {
    EventPluginRegistry.injectEventPluginOrder(["one"]);
  }).toThrowError(
    "EventPluginRegistry: Failed to publish event `badEvent` for plugin " +
      "`one`."
  );
}
