{
  var _this4 = this;

  return babelHelpers.asyncToGenerator(function*() {
    console.log(_this4);
    setTimeout(
      (() => {
        var _ref4 = babelHelpers.asyncToGenerator(function*(arg) {
          console.log(_this4);
        });

        return function(_x2) {
          return _ref4.apply(this, arguments);
        };
      })()
    );
  })();
}
