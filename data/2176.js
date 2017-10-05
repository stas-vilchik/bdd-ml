{
  return _skipFirstGeneratorNext(function*() {
    let _functionSent = yield;

    return _functionSent;
  })();
}
