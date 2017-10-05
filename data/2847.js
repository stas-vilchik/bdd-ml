{
  var x;

  try {
    yield 1;
    throw 2;
    yield 3;
  } catch (e) {
    x = e;
  }

  yield x;
}