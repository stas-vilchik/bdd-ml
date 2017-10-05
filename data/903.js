{
  var base64 = new Buffer("user:pass", "utf8").toString("base64");
  test.equal(
    res.data,
    "Basic " + base64,
    "should authenticate to the proxy set by process.env.http_proxy"
  );
  test.done();
}
