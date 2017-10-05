{
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  lib$es6$promise$$internal$$publish(promise);
}
