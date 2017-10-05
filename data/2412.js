{
  try {
    await new Promise(r => {
      resolve = r;
    });
  } finally {
    finallyVisited = true;
  }

  assert.isTrue(finallyVisited);
  done();
}