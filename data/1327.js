{
  return _get(
    Other.prototype.__proto__ || Object.getPrototypeOf(Other.prototype),
    "test",
    _this
  );
}
