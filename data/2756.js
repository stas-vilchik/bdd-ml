{
  g = W(G2)();
  closeMethod(g);

  for (var i = 0; i < 8; i++) {
    assert.deepEqual(
      {
        value: undefined,
        done: true
      },
      g.next()
    );
  }
}
