{
  let bar = (() => {
    var _ref2 = _asyncToGenerator(function* () {
      return Promise.resolve();
    });

    return function bar() {
      return _ref2.apply(this, arguments);
    };
  })();

  let Promise;
  yield bar();
}