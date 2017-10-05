{
  var x = 9;

  function* g() {
    try {
      yield 1;
      yield 2;
    } finally {
      x = 10;
    }
  }

  try {
    yield* g();
  } finally {
    yield x;
  }
}