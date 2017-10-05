{
  var _arguments = arguments;

  var inner = function() {
    return _arguments;
  };

  return [].slice.call(inner());
}
