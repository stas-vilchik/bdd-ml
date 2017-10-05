{
  var _ref2 = babelHelpers.asyncToGenerator(function*() {
    if (noNeedToWork) return 0;

    for (
      var _len = arguments.length, rest = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      rest[_key] = arguments[_key];
    }

    return rest;
  });

  return function x() {
    return _ref2.apply(this, arguments);
  };
}
