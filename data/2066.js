{
  for (
    var _len = arguments.length,
      b = new Array(_len > 1 ? _len - 1 : 0),
      _key = 1;
    _key < _len;
    _key++
  ) {
    b[_key - 1] = arguments[_key];
  }

  foo.apply(void 0, b);
}
