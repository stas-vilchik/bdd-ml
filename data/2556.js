{
  var count = 0;

  for (let x = 0; x < 1; x++) {
    for (let x = 1; x < 2; x++) {
      for (let x = 2; x < 3; x++) {
        count++;
        assert.equal(2, x);
      }
    }
  }

  assert.equal(1, count);
}
