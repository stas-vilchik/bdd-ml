{
  var _babelHelpers$get3;

  babelHelpers
    .get(Test.__proto__ || Object.getPrototypeOf(Test), "foo", this)
    .call(this);
  babelHelpers
    .get(Test.__proto__ || Object.getPrototypeOf(Test), "foo", this)
    .apply(this, arguments);

  (_babelHelpers$get3 = babelHelpers.get(
    Test.__proto__ || Object.getPrototypeOf(Test),
    "foo",
    this
  )).call.apply(
    _babelHelpers$get3,
    [this, "test"].concat(Array.prototype.slice.call(arguments))
  );
}
