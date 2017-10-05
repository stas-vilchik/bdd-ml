{
  var OnePlugin = createPlugin();
  var TwoPlugin = createPlugin();
  var ThreePlugin = createPlugin();
  EventPluginRegistry.injectEventPluginOrder(["one", "two", "three"]);
  EventPluginRegistry.injectEventPluginsByName({
    one: OnePlugin,
    two: TwoPlugin
  });
  EventPluginRegistry.injectEventPluginsByName({
    three: ThreePlugin
  });
  expect(EventPluginRegistry.plugins.length).toBe(3);
  expect(EventPluginRegistry.plugins[0]).toBe(OnePlugin);
  expect(EventPluginRegistry.plugins[1]).toBe(TwoPlugin);
  expect(EventPluginRegistry.plugins[2]).toBe(ThreePlugin);
}
