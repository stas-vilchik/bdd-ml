{
  var OnePlugin = createPlugin();
  var TwoPlugin = createPlugin();
  EventPluginRegistry.injectEventPluginsByName({
    same: OnePlugin
  });
  expect(function() {
    EventPluginRegistry.injectEventPluginsByName({
      same: TwoPlugin
    });
  }).toThrowError(
    "EventPluginRegistry: Cannot inject two different event plugins using " +
      "the same name, `same`."
  );
}
