babelHelpers
  .get(
    Foo.prototype.__proto__ || Object.getPrototypeOf(Foo.prototype),
    "test",
    _this
  )
  .call(_this);
