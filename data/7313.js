{
  var propertyInfo = DOMProperty.getPropertyInfo(name);

  if (propertyInfo) {
    var mutationMethod = propertyInfo.mutationMethod;

    if (mutationMethod) {
      mutationMethod(node, undefined);
    } else if (propertyInfo.mustUseProperty) {
      var propName = propertyInfo.propertyName;

      if (propertyInfo.hasBooleanValue) {
        node[propName] = false;
      } else {
        node[propName] = "";
      }
    } else {
      node.removeAttribute(propertyInfo.attributeName);
    }
  } else {
    node.removeAttribute(name);
  }

  if (__DEV__) {
    ReactInstrumentation.debugTool.onHostOperation({
      instanceID: ReactDOMComponentTree.getInstanceFromNode(node)._debugID,
      type: "remove attribute",
      payload: name
    });
  }
}
