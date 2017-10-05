{
  var enumerator = this;
  enumerator._instanceConstructor = Constructor;
  enumerator.promise = new Constructor(lib$es6$promise$$internal$$noop);

  if (enumerator._validateInput(input)) {
    enumerator._input = input;
    enumerator.length = input.length;
    enumerator._remaining = input.length;

    enumerator._init();

    if (enumerator.length === 0) {
      lib$es6$promise$$internal$$fulfill(
        enumerator.promise,
        enumerator._result
      );
    } else {
      enumerator.length = enumerator.length || 0;

      enumerator._enumerate();

      if (enumerator._remaining === 0) {
        lib$es6$promise$$internal$$fulfill(
          enumerator.promise,
          enumerator._result
        );
      }
    }
  } else {
    lib$es6$promise$$internal$$reject(
      enumerator.promise,
      enumerator._validationError()
    );
  }
}
