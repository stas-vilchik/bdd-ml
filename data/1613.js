{
  var _this;

  babelHelpers.classCallCheck(this, Foo);
  babelHelpers
    .get(
      Foo.prototype.__proto__ || Object.getPrototypeOf(Foo.prototype),
      (_this = babelHelpers.possibleConstructorReturn(
        this,
        (Foo.__proto__ || Object.getPrototypeOf(Foo)).call(this)
      )).method,
      _this
    )
    .call(_this);
  return _this;
}
