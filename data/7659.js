{
  var OnePlugin = createPlugin({
    eventTypes: {
      click: {
        registrationName: "onClick"
      },
      focus: {
        registrationName: "onFocus"
      }
    }
  });
  var TwoPlugin = createPlugin({
    eventTypes: {
      magic: {
        phasedRegistrationNames: {
          bubbled: "onMagicBubble",
          captured: "onMagicCapture"
        }
      }
    }
  });
  EventPluginRegistry.injectEventPluginsByName({
    one: OnePlugin
  });
  EventPluginRegistry.injectEventPluginOrder(["one", "two"]);
  expect(Object.keys(EventPluginRegistry.registrationNameModules).length).toBe(
    2
  );
  expect(EventPluginRegistry.registrationNameModules.onClick).toBe(OnePlugin);
  expect(EventPluginRegistry.registrationNameModules.onFocus).toBe(OnePlugin);
  EventPluginRegistry.injectEventPluginsByName({
    two: TwoPlugin
  });
  expect(Object.keys(EventPluginRegistry.registrationNameModules).length).toBe(
    4
  );
  expect(EventPluginRegistry.registrationNameModules.onMagicBubble).toBe(
    TwoPlugin
  );
  expect(EventPluginRegistry.registrationNameModules.onMagicCapture).toBe(
    TwoPlugin
  );
}
