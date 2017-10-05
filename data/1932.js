{
  return babelHelpers.get(
    _obj.__proto__ || Object.getPrototypeOf(_obj),
    "x",
    this
  );
}
