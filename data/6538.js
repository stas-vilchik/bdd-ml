{
  if (currentlyDispatchingEvents.get(event))
    throw new Error("InvalidStateError");
  currentlyDispatchingEvents.set(event, true);
  scope.renderAllPending();
  var eventPath;
  var overrideTarget;
  var win;

  if (isLoadLikeEvent(event) && !event.bubbles) {
    var doc = originalWrapperTarget;

    if (doc instanceof wrappers.Document && (win = doc.defaultView)) {
      overrideTarget = doc;
      eventPath = [];
    }
  }

  if (!eventPath) {
    if (originalWrapperTarget instanceof wrappers.Window) {
      win = originalWrapperTarget;
      eventPath = [];
    } else {
      eventPath = getEventPath(originalWrapperTarget, event);

      if (!isLoadLikeEvent(event)) {
        var doc = eventPath[eventPath.length - 1];
        if (doc instanceof wrappers.Document) win = doc.defaultView;
      }
    }
  }

  eventPathTable.set(event, eventPath);

  if (dispatchCapturing(event, eventPath, win, overrideTarget)) {
    if (dispatchAtTarget(event, eventPath, win, overrideTarget)) {
      dispatchBubbling(event, eventPath, win, overrideTarget);
    }
  }

  eventPhaseTable.set(event, NONE);
  currentTargetTable.delete(event, null);
  currentlyDispatchingEvents.delete(event);
  return event.defaultPrevented;
}
