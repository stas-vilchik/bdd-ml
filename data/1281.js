{
  babelHelpers.inherits(Foo, _Bar);

  function Foo() {
    var _temp, _this;

    babelHelpers.classCallCheck(this, Foo);
    foo(
      ((_temp = _this = babelHelpers.possibleConstructorReturn(
        this,
        (Foo.__proto__ || Object.getPrototypeOf(Foo)).call(this)
      )),
      Object.defineProperty(_this, "bar", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: "foo"
      }),
      _temp)
    );
    return _this;
  }

  return Foo;
}
