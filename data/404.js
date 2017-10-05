{
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child,
    callback,
    detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      lib$es6$promise$$internal$$invokeCallback(
        settled,
        child,
        callback,
        detail
      );
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}
