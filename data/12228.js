{
  var valid;
  var expectedType = getType(type);

  if (simpleCheckRE.test(expectedType)) {
    valid = typeof value === expectedType.toLowerCase();
  } else if (expectedType === "Object") {
    valid = isPlainObject(value);
  } else if (expectedType === "Array") {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }

  return {
    valid: valid,
    expectedType: expectedType
  };
}
