{
  if (__DEV__) {
    if (!isAttributeNameSafe(name)) {
      return;
    }

    if (!node.hasAttribute(name)) {
      return expected === undefined ? undefined : null;
    }

    var value = node.getAttribute(name);

    if (value === "" + expected) {
      return expected;
    }

    return value;
  }
}
