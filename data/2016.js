{
  for (
    var _len3 = arguments.length,
      bar = new Array(_len3 > 1 ? _len3 - 1 : 0),
      _key3 = 1;
    _key3 < _len3;
    _key3++
  ) {
    bar[_key3 - 1] = arguments[_key3];
  }

  var x = function() {
    bar[1] = 5;
  };
}
