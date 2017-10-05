{
  babelHelpers.inherits(TestConstructorOnly, _ref2);

  function TestConstructorOnly() {
    babelHelpers.classCallCheck(this, TestConstructorOnly);
    return babelHelpers.possibleConstructorReturn(
      this,
      (TestConstructorOnly.__proto__ ||
        Object.getPrototypeOf(TestConstructorOnly)
      ).apply(this, arguments)
    );
  }

  return TestConstructorOnly;
}
