{
  let g = (() => {
    var _ref2 = babelHelpers.asyncGenerator.wrap(function* () {
      yield babelHelpers.asyncGenerator.await(2);
      yield 3;
    });

    return function g() {
      return _ref2.apply(this, arguments);
    };
  })();

  yield 1;
}