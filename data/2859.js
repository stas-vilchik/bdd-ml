{
  var x = 3;

  try {
    throw 5;
  } catch (e) {
    yield e * x;
  }
}