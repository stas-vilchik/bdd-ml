{
  var foo = function() {
    return bar.apply(void 0, arguments);
  };

  {
    var args = thing;
    foo(thing);
  }
}
