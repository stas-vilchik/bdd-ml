{
  var listeners = listenersTable.get(node);

  if (listeners) {
    for (var i = 0; i < listeners.length; i++) {
      if (!listeners[i].removed && listeners[i].type === type) return true;
    }
  }

  return false;
}
