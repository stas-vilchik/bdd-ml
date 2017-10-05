{
  var _this2 = this;

  return babelHelpers.asyncToGenerator(function*() {
    console.log(_this2);
    setTimeout(
      (() => {
        var _ref2 = babelHelpers.asyncToGenerator(function*(arg) {
          console.log(_this2);
        });

        return function(_x) {
          return _ref2.apply(this, arguments);
        };
      })()
    );
  })();
}
