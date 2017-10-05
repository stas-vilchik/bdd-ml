{
  var x = 1;
  var y;

  try {
    try {
      yield x;
      throw 7;
      x = 2;
    } finally {
      x = 3;
    }
  } catch (e) {
    y = e;
  }

  yield x * y;

  try {
    y = 11;
    yield y;
  } finally {
    y = 3;
  }

  yield y;
}