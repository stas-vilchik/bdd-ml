{
  var _temp, _this;

  babelHelpers.classCallCheck(this, B);
  return babelHelpers.possibleConstructorReturn(
    _this,
    ((_temp = _this = babelHelpers.possibleConstructorReturn(
      this,
      (B.__proto__ || Object.getPrototypeOf(B)).call(this, ...args)
    )),
    Object.defineProperty(_this, "foo", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: babelHelpers
        .get(
          B.prototype.__proto__ || Object.getPrototypeOf(B.prototype),
          "foo",
          _this
        )
        .call(_this)
    }),
    _temp)
  );
}
