{
  jest.resetModules();

  const ReactDOM = require("react-dom");

  const ReactDOMUnstableNativeDependencies = require("react-dom/unstable-native-dependencies");

  EventPluginHub =
    ReactDOM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.EventPluginHub;
  const injectComponentTree =
    ReactDOMUnstableNativeDependencies.injectComponentTree;
  ResponderEventPlugin =
    ReactDOMUnstableNativeDependencies.ResponderEventPlugin;
  deleteAllListeners(GRANDPARENT_INST);
  deleteAllListeners(PARENT_INST);
  deleteAllListeners(CHILD_INST);
  deleteAllListeners(CHILD_INST2);
  injectComponentTree({
    getInstanceFromNode,
    getNodeFromInstance
  });
}
