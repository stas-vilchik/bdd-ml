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
      value: undefined,
      done: true
    },
    g.next()
  );
}
