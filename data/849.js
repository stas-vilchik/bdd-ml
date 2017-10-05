{
  var base64 = new Buffer(user + ":", "utf8").toString("base64");
  test.equal(res.data, "Basic " + base64);
  test.done();
}
