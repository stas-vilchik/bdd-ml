{
  if (__DEV__ && element != null && typeof element.type === "string") {
    validateProperties(element.type, element.props, debugID);
  }
}
