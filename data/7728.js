{
  ComponentTree = Injected;

  if (__DEV__) {
    warning(
      Injected && Injected.getNodeFromInstance && Injected.getInstanceFromNode,
      "EventPluginUtils.injection.injectComponentTree(...): Injected " +
        "module is missing getNodeFromInstance or getInstanceFromNode."
    );
  }
}
