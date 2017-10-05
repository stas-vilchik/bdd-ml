{
  for (
    var _len2 = arguments.length,
      args = new Array(_len2 > 2 ? _len2 - 2 : 0),
      _key2 = 2;
    _key2 < _len2;
    _key2++
  ) {
    args[_key2 - 2] = arguments[_key2];
  }

  console.log(args[0]);
  args.pop();
  console.log(args[1]);
}
