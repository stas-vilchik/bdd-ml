{
  if (promise._state !== lib$es6$promise$$internal$$PENDING) {
    return;
  }

  promise._state = lib$es6$promise$$internal$$REJECTED;
  promise._result = reason;
  lib$es6$promise$asap$$asap(
    lib$es6$promise$$internal$$publishRejection,
    promise
  );
}
