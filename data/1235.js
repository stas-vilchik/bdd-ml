{
  var _this = this;

  return babelHelpers.asyncToGenerator(function*() {
    console.log(_this);
    setTimeout(
      babelHelpers.asyncToGenerator(function*() {
        console.log(_this);
      })
    );
  })();
}
