{
  function Foo() {
    babelHelpers.classCallCheck(this, Foo);
  }

  babelHelpers.createClass(Foo, [
    {
      key: Symbol(),
      value: function value() {}
    },
    {
      key: Symbol(),
      value: function value() {}
    }
  ]);
  return Foo;
}
