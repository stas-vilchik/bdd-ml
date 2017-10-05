{
  function foo2() {
    return _foo.apply(this, arguments);
  }

  foo2.toString = function() {
    return _foo.toString();
  };

  return foo2;
}
