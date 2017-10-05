{
  var _ref = _asyncGenerator.wrap(
    _skipFirstGeneratorNext(function*() {
      let _functionSent = yield;

      _functionSent = yield _asyncGenerator.await(_functionSent);
    })
  );

  return function foo() {
    return _ref.apply(this, arguments);
  };
}
