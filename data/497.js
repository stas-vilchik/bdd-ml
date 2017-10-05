{
  var cancel;
  var token = new CancelToken(function(c) {
    cancel = c;
  });
  cancel("Operation has been canceled.");

  try {
    token.throwIfRequested();
    fail("Expected throwIfRequested to throw.");
  } catch (thrown) {
    if (!(thrown instanceof Cancel)) {
      fail(
        "Expected throwIfRequested to throw a Cancel, but it threw " +
          thrown +
          "."
      );
    }

    expect(thrown.message).toBe("Operation has been canceled.");
  }
}
