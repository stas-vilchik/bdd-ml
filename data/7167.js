{
  if (
    element.__upgraded__ &&
    (element.attachedCallback || element.detachedCallback)
  ) {
    if (element.__attached && !inDocument(element)) {
      element.__attached = false;

      if (element.detachedCallback) {
        element.detachedCallback();
      }
    }
  }
}
