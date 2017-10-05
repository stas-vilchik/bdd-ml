{
  var sealed = false;
  var error = lib$es6$promise$$internal$$tryThen(
    then,
    thenable,
    function(value) {
      if (sealed) {
        return;
      }

      sealed = true;

      if (thenable !== value) {
        lib$es6$promise$$internal$$resolve(promise, value);
      } else {
        lib$es6$promise$$internal$$fulfill(promise, value);
      }
    },
    function(reason) {
      if (sealed) {
        return;
      }

      sealed = true;
      lib$es6$promise$$internal$$reject(promise, reason);
    },
    "Settle: " + (promise._label || " unknown promise")
  );

  if (!sealed && error) {
    sealed = true;
    lib$es6$promise$$internal$$reject(promise, error);
  }
}
