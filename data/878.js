{
  process.env.http_proxy = "http://does-not-exists.example.com:4242/";
  server = http
    .createServer(function(req, res) {
      res.setHeader("Content-Type", "text/html; charset=UTF-8");
      res.end("123456789");
    })
    .listen(4444, function() {
      axios
        .get("http://localhost:4444/", {
          proxy: false
        })
        .then(function(res) {
          test.equal(res.data, "123456789", "should not pass through proxy");
          test.done();
        });
    });
}
