{
  jest.resetModuleRegistry();
  EventPluginRegistry = require("EventPluginRegistry");

  createPlugin = function(properties) {
    return Object.assign(
      {
        extractEvents: function() {}
      },
      properties
    );
  };
}
