{
  var _this;

  babelHelpers.classCallCheck(this, Test);
  _this = babelHelpers.possibleConstructorReturn(
    this,
    (Test.__proto__ || Object.getPrototypeOf(Test)).call(this)
  );
  babelHelpers
    .get(
      Test.prototype.__proto__ || Object.getPrototypeOf(Test.prototype),
      "test",
      _this
    )
    .whatever();
  babelHelpers
    .get(
      Test.prototype.__proto__ || Object.getPrototypeOf(Test.prototype),
      "test",
      _this
    )
    .call(_this);
  return _this;
}
