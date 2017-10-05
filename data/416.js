{
  var enumerator = this;
  var promise = enumerator.promise;

  if (promise._state === lib$es6$promise$$internal$$PENDING) {
    enumerator._remaining--;

    if (state === lib$es6$promise$$internal$$REJECTED) {
      lib$es6$promise$$internal$$reject(promise, value);
    } else {
      enumerator._result[i] = value;
    }
  }

  if (enumerator._remaining === 0) {
    lib$es6$promise$$internal$$fulfill(promise, enumerator._result);
  }
}
