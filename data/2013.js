{
  for (
    var _len = arguments.length,
      bar = new Array(_len > 1 ? _len - 1 : 0),
      _key = 1;
    _key < _len;
    _key++
  ) {
    bar[_key - 1] = arguments[_key];
  }

  console.log(bar);
}
