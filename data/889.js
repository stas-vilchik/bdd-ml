{
  test.equal(
    res.data,
    "45671234",
    "should use proxy set by process.env.http_proxy"
  );
  test.done();
}
