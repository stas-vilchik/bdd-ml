{
  var _this = this;

  () => this;

  function f() {
    () => this;
  }

  babelHelpers.asyncToGenerator(function* () {
    _this;
    yield 1;
  });
  yield babelHelpers.asyncGenerator.await(1);
}