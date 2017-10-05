{
  var Constructor = this;

  if (
    object &&
    typeof object === "object" &&
    object.constructor === Constructor
  ) {
    return object;
  }

  var promise = new Constructor(lib$es6$promise$$internal$$noop);
  lib$es6$promise$$internal$$resolve(promise, object);
  return promise;
}
