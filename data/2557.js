{
  var count = 0;

  for (let x in {
    0: 0
  }) {
    for (let x in {
      1: 1
    }) {
      for (let x in {
        2: 2
      }) {
        count++;
        assert.equal("2", x);
      }
    }
  }

  assert.equal(1, count);
}
