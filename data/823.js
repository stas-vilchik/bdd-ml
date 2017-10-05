{
  var str = "test response";
  server = http
    .createServer(function(req, res) {
      var parsed = url.parse(req.url);

      if (parsed.pathname === "/one") {
        res.setHeader("Location", "/two");
        res.statusCode = 302;
        res.end();
      } else {
        res.end(str);
      }
    })
    .listen(4444, function() {
      axios.get("http://localhost:4444/one").then(function(res) {
        test.equal(res.data, str);
        test.equal(res.request.path, "/two");
        test.done();
      });
    });
}
