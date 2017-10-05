{
  if (__DEV__) {
    var propertyInfo = DOMProperty.getPropertyInfo(name);

    if (propertyInfo) {
      var mutationMethod = propertyInfo.mutationMethod;

      if (mutationMethod || propertyInfo.mustUseProperty) {
        return node[propertyInfo.propertyName];
      } else {
        var attributeName = propertyInfo.attributeName;
        var stringValue = null;

        if (propertyInfo.hasOverloadedBooleanValue) {
          if (node.hasAttribute(attributeName)) {
            var value = node.getAttribute(attributeName);

            if (value === "") {
              return true;
            }

            if (shouldIgnoreValue(propertyInfo, expected)) {
              return value;
            }

            if (value === "" + expected) {
              return expected;
            }

            return value;
          }
        } else if (node.hasAttribute(attributeName)) {
          if (shouldIgnoreValue(propertyInfo, expected)) {
            return node.getAttribute(attributeName);
          }

          if (propertyInfo.hasBooleanValue) {
            return expected;
          }

          stringValue = node.getAttribute(attributeName);
        }

        if (shouldIgnoreValue(propertyInfo, expected)) {
          return stringValue === null ? expected : stringValue;
        } else if (stringValue === "" + expected) {
          return expected;
        } else {
          return stringValue;
        }
      }
    }
  }
}
