{
  var _this;

  babelHelpers.classCallCheck(this, Foo);
  _this = babelHelpers.possibleConstructorReturn(
    this,
    (Foo.__proto__ || Object.getPrototypeOf(Foo)).call(this)
  );
  Object.defineProperty(_this, "bar", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: "foo"
  });
  return _this;
}
