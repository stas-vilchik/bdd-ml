{
  var parent = this;
  var state = parent._state;

  if (
    (state === lib$es6$promise$$internal$$FULFILLED && !onFulfillment) ||
    (state === lib$es6$promise$$internal$$REJECTED && !onRejection)
  ) {
    return this;
  }

  var child = new this.constructor(lib$es6$promise$$internal$$noop);
  var result = parent._result;

  if (state) {
    var callback = arguments[state - 1];
    lib$es6$promise$asap$$asap(function() {
      lib$es6$promise$$internal$$invokeCallback(state, child, callback, result);
    });
  } else {
    lib$es6$promise$$internal$$subscribe(
      parent,
      child,
      onFulfillment,
      onRejection
    );
  }

  return child;
}
