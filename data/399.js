{
  if (promise === value) {
    lib$es6$promise$$internal$$reject(
      promise,
      lib$es6$promise$$internal$$selfFulfillment()
    );
  } else if (lib$es6$promise$utils$$objectOrFunction(value)) {
    lib$es6$promise$$internal$$handleMaybeThenable(promise, value);
  } else {
    lib$es6$promise$$internal$$fulfill(promise, value);
  }
}
