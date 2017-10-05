{
  if (thenable._state === lib$es6$promise$$internal$$FULFILLED) {
    lib$es6$promise$$internal$$fulfill(promise, thenable._result);
  } else if (thenable._state === lib$es6$promise$$internal$$REJECTED) {
    lib$es6$promise$$internal$$reject(promise, thenable._result);
  } else {
    lib$es6$promise$$internal$$subscribe(
      thenable,
      undefined,
      function(value) {
        lib$es6$promise$$internal$$resolve(promise, value);
      },
      function(reason) {
        lib$es6$promise$$internal$$reject(promise, reason);
      }
    );
  }
}
