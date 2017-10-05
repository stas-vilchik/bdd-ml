{
  var hasCallback = lib$es6$promise$utils$$isFunction(callback),
    value,
    error,
    succeeded,
    failed;

  if (hasCallback) {
    value = lib$es6$promise$$internal$$tryCatch(callback, detail);

    if (value === lib$es6$promise$$internal$$TRY_CATCH_ERROR) {
      failed = true;
      error = value.error;
      value = null;
    } else {
      succeeded = true;
    }

    if (promise === value) {
      lib$es6$promise$$internal$$reject(
        promise,
        lib$es6$promise$$internal$$cannotReturnOwn()
      );
      return;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (promise._state !== lib$es6$promise$$internal$$PENDING) {
  } else if (hasCallback && succeeded) {
    lib$es6$promise$$internal$$resolve(promise, value);
  } else if (failed) {
    lib$es6$promise$$internal$$reject(promise, error);
  } else if (settled === lib$es6$promise$$internal$$FULFILLED) {
    lib$es6$promise$$internal$$fulfill(promise, value);
  } else if (settled === lib$es6$promise$$internal$$REJECTED) {
    lib$es6$promise$$internal$$reject(promise, value);
  }
}
