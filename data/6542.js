{
  var listeners = listenersTable.get(currentTarget);
  if (!listeners) return true;
  var target = overrideTarget || eventRetargetting(eventPath, currentTarget);

  if (target === currentTarget) {
    if (phase === CAPTURING_PHASE) return true;
    if (phase === BUBBLING_PHASE) phase = AT_TARGET;
  } else if (phase === BUBBLING_PHASE && !event.bubbles) {
    return true;
  }

  if ("relatedTarget" in event) {
    var originalEvent = unwrap(event);
    var unwrappedRelatedTarget = originalEvent.relatedTarget;

    if (unwrappedRelatedTarget) {
      if (
        unwrappedRelatedTarget instanceof Object &&
        unwrappedRelatedTarget.addEventListener
      ) {
        var relatedTarget = wrap(unwrappedRelatedTarget);
        var adjusted = relatedTargetResolution(
          event,
          currentTarget,
          relatedTarget
        );
        if (adjusted === target) return true;
      } else {
        adjusted = null;
      }

      relatedTargetTable.set(event, adjusted);
    }
  }

  eventPhaseTable.set(event, phase);
  var type = event.type;
  var anyRemoved = false;
  targetTable.set(event, target);
  currentTargetTable.set(event, currentTarget);
  listeners.depth++;

  for (var i = 0, len = listeners.length; i < len; i++) {
    var listener = listeners[i];

    if (listener.removed) {
      anyRemoved = true;
      continue;
    }

    if (
      listener.type !== type ||
      (!listener.capture && phase === CAPTURING_PHASE) ||
      (listener.capture && phase === BUBBLING_PHASE)
    ) {
      continue;
    }

    try {
      if (typeof listener.handler === "function")
        listener.handler.call(currentTarget, event);
      else listener.handler.handleEvent(event);
      if (stopImmediatePropagationTable.get(event)) return false;
    } catch (ex) {
      if (!pendingError) pendingError = ex;
    }
  }

  listeners.depth--;

  if (anyRemoved && listeners.depth === 0) {
    var copy = listeners.slice();
    listeners.length = 0;

    for (var i = 0; i < copy.length; i++) {
      if (!copy[i].removed) listeners.push(copy[i]);
    }
  }

  return !stopPropagationTable.get(event);
}
