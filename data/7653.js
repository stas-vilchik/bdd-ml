{
  var OnePlugin = createPlugin();
  var RandomPlugin = createPlugin();
  EventPluginRegistry.injectEventPluginOrder(["one"]);
  expect(function() {
    EventPluginRegistry.injectEventPluginsByName({
      one: OnePlugin,
      random: RandomPlugin
    });
  }).toThrowError(
    "EventPluginRegistry: Cannot inject event plugins that do not exist " +
      "in the plugin ordering, `random`."
  );
}
