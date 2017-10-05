{
  var join = "join";

  for (
    var _len5 = arguments.length,
      bar = new Array(_len5 > 1 ? _len5 - 1 : 0),
      _key5 = 1;
    _key5 < _len5;
    _key5++
  ) {
    bar[_key5 - 1] = arguments[_key5];
  }

  return bar[join];
}
