{
  babelHelpers.inheritsLoose(Test, _Foo);

  function Test() {
    return _Foo.apply(this, arguments) || this;
  }

  return Test;
}
