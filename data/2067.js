{
  for (
    var _len2 = arguments.length, b = new Array(_len2), _key2 = 0;
    _key2 < _len2;
    _key2++
  ) {
    b[_key2] = arguments[_key2];
  }

  foo.apply(void 0, [1].concat(b));
}
