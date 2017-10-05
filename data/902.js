{
  process.env.http_proxy = "http://user:pass@localhost:4000/";
  axios.get("http://localhost:4444/").then(function(res) {
    var base64 = new Buffer("user:pass", "utf8").toString("base64");
    test.equal(
      res.data,
      "Basic " + base64,
      "should authenticate to the proxy set by process.env.http_proxy"
    );
    test.done();
  });
}
