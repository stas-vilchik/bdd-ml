{
  if (DOMProperty.isReservedProp(name)) {
    return false;
  }

  if (
    (name[0] === "o" || name[0] === "O") &&
    (name[1] === "n" || name[1] === "N")
  ) {
    return false;
  }

  if (value === null) {
    return true;
  }

  switch (typeof value) {
    case "boolean":
      return DOMProperty.shouldAttributeAcceptBooleanValue(name);

    case "undefined":
    case "number":
    case "string":
    case "object":
      return true;

    default:
      return false;
  }
}
