{
  test.ok(
    thrown instanceof axios.Cancel,
    "Promise must be rejected with a Cancel obejct"
  );
  test.equal(thrown.message, "Operation has been canceled.");
  test.done();
}
