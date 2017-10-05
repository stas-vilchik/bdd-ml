{
  return (
    value == null ||
    (propertyInfo.hasBooleanValue && !value) ||
    (propertyInfo.hasNumericValue && isNaN(value)) ||
    (propertyInfo.hasPositiveNumericValue && value < 1) ||
    (propertyInfo.hasOverloadedBooleanValue && value === false)
  );
}
