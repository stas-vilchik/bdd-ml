{
  var _ref, _babelHelpers$get;

  var _this;

  babelHelpers.classCallCheck(this, Test);
  woops.super.test();
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
    .call(_this);
  _this = babelHelpers.possibleConstructorReturn(
    this,
    (Test.__proto__ || Object.getPrototypeOf(Test)).apply(this, arguments)
  );
  _this = babelHelpers.possibleConstructorReturn(
    this,
    (_ref = Test.__proto__ || Object.getPrototypeOf(Test)).call.apply(
      _ref,
      [this, "test"].concat(Array.prototype.slice.call(arguments))
    )
  );
  babelHelpers
    .get(
      Test.prototype.__proto__ || Object.getPrototypeOf(Test.prototype),
      "test",
      _this
    )
    .apply(_this, arguments);

  (_babelHelpers$get = babelHelpers.get(
    Test.prototype.__proto__ || Object.getPrototypeOf(Test.prototype),
    "test",
    _this
  )).call.apply(
    _babelHelpers$get,
    [_this, "test"].concat(Array.prototype.slice.call(arguments))
  );

  return _this;
}
