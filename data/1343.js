{
  var _arguments2 = arguments;

  var inner = function() {
    return _arguments2;
  };

  var another = function() {
    var _arguments3 = arguments;

    var inner2 = function() {
      return _arguments3;
    };
  };

  return [].slice.call(inner());
}
