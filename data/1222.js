{
  var _ref = _asyncToGenerator(function*(_ref2) {
    let a = _ref2.a,
      _ref2$b = _ref2.b,
      b = _ref2$b === void 0 ? mandatory("b") : _ref2$b;
    return Promise.resolve(b);
  });

  return function foo(_x) {
    return _ref.apply(this, arguments);
  };
}
