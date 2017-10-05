{
  function bar() {
    return _bar.apply(this, arguments);
  }

  bar.toString = function() {
    return _bar.toString();
  };

  return bar;
}
