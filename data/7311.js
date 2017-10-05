{
  if (!isAttributeNameSafe(name)) {
    return;
  }

  if (value == null) {
    node.removeAttribute(name);
  } else {
    node.setAttribute(name, "" + value);
  }

  if (__DEV__) {
    var payload = {};
    payload[name] = value;
    ReactInstrumentation.debugTool.onHostOperation({
      instanceID: ReactDOMComponentTree.getInstanceFromNode(node)._debugID,
      type: "update attribute",
      payload: payload
    });
  }
}
