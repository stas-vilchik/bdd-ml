{
  var subscribers = parent._subscribers;
  var length = subscribers.length;
  parent._onerror = null;
  subscribers[length] = child;
  subscribers[length + lib$es6$promise$$internal$$FULFILLED] = onFulfillment;
  subscribers[length + lib$es6$promise$$internal$$REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, parent);
  }
}
