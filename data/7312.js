{
  node.removeAttribute(name);

  if (__DEV__) {
    ReactInstrumentation.debugTool.onHostOperation({
      instanceID: ReactDOMComponentTree.getInstanceFromNode(node)._debugID,
      type: "remove attribute",
      payload: name
    });
  }
}
