{
  var _ref;

  return (
    (_ref = _get(_obj.__proto__ || Object.getPrototypeOf(_obj), "baz", this)),
    _set(
      _obj.__proto__ || Object.getPrototypeOf(_obj),
      "baz",
      Math.pow(_ref, 12),
      this
    )
  );
}
