{
  var _ref;

  var _temp, _this;

  _classCallCheck(this, Other);

  for (
    var _len = arguments.length, args = new Array(_len), _key = 0;
    _key < _len;
    _key++
  ) {
    args[_key] = arguments[_key];
  }

  return _possibleConstructorReturn(
    _this,
    ((_temp = _this = _possibleConstructorReturn(
      this,
      (_ref = Other.__proto__ || Object.getPrototypeOf(Other)).call.apply(
        _ref,
        [this].concat(args)
      )
    )),
    Object.defineProperty(_this, "a", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return _get(
          Other.prototype.__proto__ || Object.getPrototypeOf(Other.prototype),
          "test",
          _this
        );
      }
    }),
    _temp)
  );
}
