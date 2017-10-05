{
  if (DOMProperty.isReservedProp(name)) {
    return true;
  }

  let propertyInfo = DOMProperty.getPropertyInfo(name);

  if (propertyInfo) {
    return (
      propertyInfo.hasBooleanValue ||
      propertyInfo.hasStringBooleanValue ||
      propertyInfo.hasOverloadedBooleanValue
    );
  }

  var prefix = name.toLowerCase().slice(0, 5);
  return prefix === "data-" || prefix === "aria-";
}
