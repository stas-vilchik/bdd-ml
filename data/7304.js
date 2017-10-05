{
  if (validatedAttributeNameCache.hasOwnProperty(attributeName)) {
    return true;
  }

  if (illegalAttributeNameCache.hasOwnProperty(attributeName)) {
    return false;
  }

  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
    validatedAttributeNameCache[attributeName] = true;
    return true;
  }

  illegalAttributeNameCache[attributeName] = true;

  if (__DEV__) {
    warning(false, "Invalid attribute name: `%s`", attributeName);
  }

  return false;
}
