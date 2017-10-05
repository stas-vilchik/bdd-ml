{
  var sequence = fibonacci();
  assert.deepEqual(
    {
      value: 1,
      done: false
    },
    sequence.next()
  );
  assert.deepEqual(
    {
      value: 1,
      done: false
    },
    next(sequence)
  );
  assert.deepEqual(
    {
      value: 2,
      done: false
    },
    next(sequence)
  );
  assert.deepEqual(
    {
      value: 3,
      done: false
    },
    next(sequence)
  );
  assert.deepEqual(
    {
      value: 5,
      done: false
    },
    next(sequence)
  );
  assert.deepEqual(
    {
      value: 8,
      done: false
    },
    next(sequence)
  );
  assert.deepEqual(
    {
      value: 13,
      done: false
    },
    next(sequence)
  );
  assert.deepEqual(
    {
      value: 1,
      done: false
    },
    send(sequence, true)
  );
  assert.deepEqual(
    {
      value: 1,
      done: false
    },
    next(sequence)
  );
  assert.deepEqual(
    {
      value: 2,
      done: false
    },
    next(sequence)
  );
  assert.deepEqual(
    {
      value: 3,
      done: false
    },
    next(sequence)
  );
}
