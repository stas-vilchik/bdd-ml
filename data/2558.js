{
  var count = 0;

  for (let x of [0]) {
    for (let x of [1]) {
      for (let x of [2]) {
        count++;
        assert.equal(2, x);
      }
    }
  }

  assert.equal(1, count);
}
