{
  tests.forEach(([G, y, r]) => {
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
  });
  g = W(G6)();
  assert.deepEqual(
    {
      value: 1000,
      done: false
    },
    g.next()
  );
  assert.deepEqual(
    {
      value: 43,
      done: true
    },
    g.throw()
  );
}
