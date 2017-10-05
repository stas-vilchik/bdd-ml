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
      value: "(22)",
      done: false
    },
    g.throw(22)
  );
  assert.deepEqual(
    {
      value: 3,
      done: false
    },
    g.next()
  );
  assertThrownEquals(42, () => g.throw(42));
}
