{
  var _ref = _skipFirstGeneratorNext(function*() {
    let _functionSent = yield;

    return _functionSent;
  });

  return function gen() {
    return _ref.apply(this, arguments);
  };
}
