{
  var g = W(G)();
  y.forEach(x =>
    assert.deepEqual(
      {
        value: x,
        done: false
      },
      g.next()
    )
  );
  assert.deepEqual(
    {
      value: r,
      done: true
    },
    g.next()
  );
  assertClosed(g);
}
