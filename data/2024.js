{
  for (
    var _len9 = arguments.length, rest = new Array(_len9), _key9 = 0;
    _key9 < _len9;
    _key9++
  ) {
    rest[_key9] = arguments[_key9];
  }

  for (rest[0] in this) {
    foo(rest[0]);
  }
}
