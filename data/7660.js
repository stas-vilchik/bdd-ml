{
  var OnePlugin = createPlugin({
    eventTypes: {
      photoCapture: {
        registrationName: "onPhotoCapture"
      }
    }
  });
  var TwoPlugin = createPlugin({
    eventTypes: {
      photo: {
        phasedRegistrationNames: {
          bubbled: "onPhotoBubble",
          captured: "onPhotoCapture"
        }
      }
    }
  });
  EventPluginRegistry.injectEventPluginsByName({
    one: OnePlugin,
    two: TwoPlugin
  });
  expect(function() {
    EventPluginRegistry.injectEventPluginOrder(["one", "two"]);
  }).toThrowError(
    "EventPluginHub: More than one plugin attempted to publish the same " +
      "registration name, `onPhotoCapture`."
  );
}
