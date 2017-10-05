{
  var Constructor = this;
  var promise = new Constructor(lib$es6$promise$$internal$$noop);
  lib$es6$promise$$internal$$reject(promise, reason);
  return promise;
}
