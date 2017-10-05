{
  if (maybeThenable.constructor === promise.constructor) {
    lib$es6$promise$$internal$$handleOwnThenable(promise, maybeThenable);
  } else {
    var then = lib$es6$promise$$internal$$getThen(maybeThenable);

    if (then === lib$es6$promise$$internal$$GET_THEN_ERROR) {
      lib$es6$promise$$internal$$reject(
        promise,
        lib$es6$promise$$internal$$GET_THEN_ERROR.error
      );
    } else if (then === undefined) {
      lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
    } else if (lib$es6$promise$utils$$isFunction(then)) {
      lib$es6$promise$$internal$$handleForeignThenable(
        promise,
        maybeThenable,
        then
      );
    } else {
      lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
    }
  }
}
