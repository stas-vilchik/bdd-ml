{
  var enumerator = this;
  lib$es6$promise$$internal$$subscribe(
    promise,
    undefined,
    function(value) {
      enumerator._settledAt(lib$es6$promise$$internal$$FULFILLED, i, value);
    },
    function(reason) {
      enumerator._settledAt(lib$es6$promise$$internal$$REJECTED, i, reason);
    }
  );
}
