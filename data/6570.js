{
  if (!isValidListener(fun) || isMutationEvent(type)) return;
  var listener = new Listener(type, fun, capture);
  var listeners = listenersTable.get(this);

  if (!listeners) {
    listeners = [];
    listeners.depth = 0;
    listenersTable.set(this, listeners);
  } else {
    for (var i = 0; i < listeners.length; i++) {
      if (listener.equals(listeners[i])) return;
    }
  }

  listeners.push(listener);
  var target = getTargetToListenAt(this);
  target.addEventListener_(type, dispatchOriginalEvent, true);
}
