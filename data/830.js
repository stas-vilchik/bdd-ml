{
  test.equal(res.status, 302);
  test.equal(res.headers["location"], "/foo");
  test.done();
}
