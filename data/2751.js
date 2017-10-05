{
  var actualError;

  try {
    func();
  } catch (err) {
    actualError = err;
  }

  assert.equal(x, actualError);
}
