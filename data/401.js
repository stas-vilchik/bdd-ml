{
  if (promise._state !== lib$es6$promise$$internal$$PENDING) {
    return;
  }

  promise._result = value;
  promise._state = lib$es6$promise$$internal$$FULFILLED;

  if (promise._subscribers.length !== 0) {
    lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, promise);
  }
}
