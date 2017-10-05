{
  var y;

  try {
    y = 13;

    try {
      yield y;
    } finally {
      y = 17;
    }

    yield y;
  } finally {
    y = 23;
  }

  yield y;
}