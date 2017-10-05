{
  function foo() {
    return this;
  }

  function bar() {
    return foo.call(this);
  }

  console.log(_this2, k);
}
