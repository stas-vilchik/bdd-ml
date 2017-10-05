{
  babelHelpers.classCallCheck(this, Foo);
  var parentOptions = {};

  parentOptions.init = function() {
    this;
  };

  return babelHelpers.possibleConstructorReturn(
    this,
    (Foo.__proto__ || Object.getPrototypeOf(Foo)).call(this, parentOptions)
  );
}
