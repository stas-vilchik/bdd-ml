{
  var BadPlugin = {};
  EventPluginRegistry.injectEventPluginOrder(["bad"]);
  expect(function() {
    EventPluginRegistry.injectEventPluginsByName({
      bad: BadPlugin
    });
  }).toThrowError(
    "EventPluginRegistry: Event plugins must implement an `extractEvents` " +
      "method, but `bad` does not."
  );
}
