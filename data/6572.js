{
  var nativeEvent = unwrap(event);
  var eventType = nativeEvent.type;
  handledEventsTable.set(nativeEvent, false);
  scope.renderAllPending();
  var tempListener;

  if (!hasListenerInAncestors(this, eventType)) {
    tempListener = function() {};

    this.addEventListener(eventType, tempListener, true);
  }

  try {
    return unwrap(this).dispatchEvent_(nativeEvent);
  } finally {
    if (tempListener) this.removeEventListener(eventType, tempListener, true);
  }
}
