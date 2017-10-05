{
  yield z;

  for (var _len2 = arguments.length, innerArgs = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    innerArgs[_key2 - 2] = arguments[_key2];
  }

  console.log(_this, innerArgs, _arguments);
  return _this.x;
}