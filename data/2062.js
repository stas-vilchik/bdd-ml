{
  babelHelpers.inherits(Foo, _Bar);

  function Foo() {
    babelHelpers.classCallCheck(this, Foo);
    return babelHelpers.possibleConstructorReturn(
      this,
      (Foo.__proto__ || Object.getPrototypeOf(Foo)).apply(this, arguments)
    );
  }

  return Foo;
}
