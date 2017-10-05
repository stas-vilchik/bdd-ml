{
  yield *
    (function*() {
      yield [1, 2, 3];
      yield* [4, 5, 6];
    })();
}
