{
  var fn = function() {
    var fn2 = function() {
      return arguments[0];
    };

    return fn2("foobar");
  };

  return fn();
}
