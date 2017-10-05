{
  console.log(_this);
  setTimeout(
    babelHelpers.asyncToGenerator(function*() {
      console.log(_this);
    })
  );
}
