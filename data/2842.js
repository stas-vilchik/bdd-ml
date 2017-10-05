{
  x = 0;
  y = 0;
  yield 1;

  try {
    yield 2;

    try {
      yield 3;
    } finally {
      x = 4;
    }

    yield x;
  } finally {
    y = 5;
  }

  yield y;
}