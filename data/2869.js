{
  var x;

  try {
    x = yield 1;
  } catch (ex) {
    yield ex;
  }

  return 2;
}