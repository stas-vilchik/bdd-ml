{
  function* f() {
    try {
      yield 'pear';
    } finally {
      yield 'strawberry';
    }
  }

  try {
    return 'cherry';
  } finally {
    f13.x = yield* f();
    yield 'banana';
  }
}