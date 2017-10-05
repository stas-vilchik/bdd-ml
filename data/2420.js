{
  var value;

  try {
    value = await asyncThrow(1);
    fail("shouldn't get here");
  } catch (e) {
    assert.equal(1, e);
  }

  done();
}