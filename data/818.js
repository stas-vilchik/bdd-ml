{
  test.equal(success, false, "request should not succeed");
  test.equal(failure, true, "request should fail");
  test.equal(error.code, "ECONNABORTED");
  test.equal(error.message, "timeout of 250ms exceeded");
  test.done();
}
