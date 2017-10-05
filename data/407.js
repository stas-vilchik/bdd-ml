{
  try {
    resolver(
      function resolvePromise(value) {
        lib$es6$promise$$internal$$resolve(promise, value);
      },
      function rejectPromise(reason) {
        lib$es6$promise$$internal$$reject(promise, reason);
      }
    );
  } catch (e) {
    lib$es6$promise$$internal$$reject(promise, e);
  }
}
