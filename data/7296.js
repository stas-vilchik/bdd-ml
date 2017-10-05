{
  var propertyInfo = DOMProperty.getPropertyInfo(name);

  if (propertyInfo) {
    if (shouldIgnoreValue(propertyInfo, value)) {
      return "";
    }

    var attributeName = propertyInfo.attributeName;

    if (
      propertyInfo.hasBooleanValue ||
      (propertyInfo.hasOverloadedBooleanValue && value === true)
    ) {
      return attributeName + '=""';
    } else if (
      typeof value !== "boolean" ||
      DOMProperty.shouldAttributeAcceptBooleanValue(name)
    ) {
      return attributeName + "=" + quoteAttributeValueForBrowser(value);
    }
  } else if (DOMProperty.shouldSetAttribute(name, value)) {
    if (value == null) {
      return "";
    }

    return name + "=" + quoteAttributeValueForBrowser(value);
  }

  return null;
}
