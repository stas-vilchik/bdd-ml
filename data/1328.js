{
  return _get(
    Test.prototype.__proto__ || Object.getPrototypeOf(Test.prototype),
    "test",
    _this2
  );
}
