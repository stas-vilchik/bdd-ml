{
  var _babelHelpers$get2;

  babelHelpers
    .get(
      Test.prototype.__proto__ || Object.getPrototypeOf(Test.prototype),
      "test",
      this
    )
    .call(this);
  babelHelpers
    .get(
      Test.prototype.__proto__ || Object.getPrototypeOf(Test.prototype),
      "test",
      this
    )
    .apply(this, arguments);

  (_babelHelpers$get2 = babelHelpers.get(
    Test.prototype.__proto__ || Object.getPrototypeOf(Test.prototype),
    "test",
    this
  )).call.apply(
    _babelHelpers$get2,
    [this, "test"].concat(Array.prototype.slice.call(arguments))
  );
}
