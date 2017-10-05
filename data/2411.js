{
  try {
    v = await p;
  } finally {
    finallyVisited = true;
  }

  assert.equal(42, v);
  assert.isTrue(finallyVisited);
  done();
}