{
  capture = Boolean(capture);
  var listeners = listenersTable.get(this);
  if (!listeners) return;
  var count = 0,
    found = false;

  for (var i = 0; i < listeners.length; i++) {
    if (listeners[i].type === type && listeners[i].capture === capture) {
      count++;

      if (listeners[i].handler === fun) {
        found = true;
        listeners[i].remove();
      }
    }
  }

  if (found && count === 1) {
    var target = getTargetToListenAt(this);
    target.removeEventListener_(type, dispatchOriginalEvent, true);
  }
}
