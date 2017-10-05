{
  function* g() {
    try {
      yield 1;
      yield 2;
    } finally {
      yield 3;
    }
  }

  yield * g();
}
