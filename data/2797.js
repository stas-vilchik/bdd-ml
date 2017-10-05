{
  function* g() {
    try {
      yield 11;
      yield 22;
    } finally {
      yield 33;
      f14.x = 44;
      yield 55;
    }
  }

  return yield * g();
}
