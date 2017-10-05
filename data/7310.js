{
  var propertyInfo = DOMProperty.getPropertyInfo(name);

  if (propertyInfo && DOMProperty.shouldSetAttribute(name, value)) {
    var mutationMethod = propertyInfo.mutationMethod;

    if (mutationMethod) {
      mutationMethod(node, value);
    } else if (shouldIgnoreValue(propertyInfo, value)) {
      DOMPropertyOperations.deleteValueForProperty(node, name);
      return;
    } else if (propertyInfo.mustUseProperty) {
      node[propertyInfo.propertyName] = value;
    } else {
      var attributeName = propertyInfo.attributeName;
      var namespace = propertyInfo.attributeNamespace;

      if (namespace) {
        node.setAttributeNS(namespace, attributeName, "" + value);
      } else if (
        propertyInfo.hasBooleanValue ||
        (propertyInfo.hasOverloadedBooleanValue && value === true)
      ) {
        node.setAttribute(attributeName, "");
      } else {
        node.setAttribute(attributeName, "" + value);
      }
    }
  } else {
    DOMPropertyOperations.setValueForAttribute(
      node,
      name,
      DOMProperty.shouldSetAttribute(name, value) ? value : null
    );
    return;
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
