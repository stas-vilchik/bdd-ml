{
  for (
    var _len4 = arguments.length,
      bar = new Array(_len4 > 1 ? _len4 - 1 : 0),
      _key4 = 1;
    _key4 < _len4;
    _key4++
  ) {
    bar[_key4 - 1] = arguments[_key4];
  }

  return bar.join(",");
}
