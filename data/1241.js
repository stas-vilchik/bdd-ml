{
  var _this3 = this;

  return babelHelpers.asyncToGenerator(function*() {
    console.log(_this3);
    setTimeout(
      babelHelpers.asyncToGenerator(function*() {
        console.log(_this3);
      })
    );
  })();
}
