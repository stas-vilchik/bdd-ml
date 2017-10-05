{
  axios
    .get("http://localhost:4444/", {
      proxy: {
        host: "localhost",
        port: 4000,
        auth: {
          username: "user",
          password: "pass"
        }
      }
    })
    .then(function(res) {
      var base64 = new Buffer("user:pass", "utf8").toString("base64");
      test.equal(
        res.data,
        "Basic " + base64,
        "should authenticate to the proxy"
      );
      test.done();
    });
}
