{
  assert.deepEqual(
    {
      value: 1,
      done: false
    },
    g.next()
  );
  assert.deepEqual(
    {
      value: 2,
      done: false
    },
    g.next()
  );
  assert.deepEqual(
    {
      value: 3,
      done: false
    },
    g.next()
  );
  assert.deepEqual(
    {
      value: undefined,
      done: true
    },
    g.next()
  );
}
