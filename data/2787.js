{
  function* g() {
    try {
      yield 1;
      yield 2;
    } finally {
      return 10;
    }
  }

  yield * g();
}
