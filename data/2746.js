{
  return function*() {
    var r = yield* G();
    return r;
  };
}
