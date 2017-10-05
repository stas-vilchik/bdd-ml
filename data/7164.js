{
  if (
    element.__upgraded__ &&
    (element.attachedCallback || element.detachedCallback)
  ) {
    if (!element.__attached && inDocument(element)) {
      element.__attached = true;

      if (element.attachedCallback) {
        element.attachedCallback();
      }
    }
  }
}
