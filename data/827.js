{
  server = http
    .createServer(function(req, res) {
      res.setHeader("Location", "/foo");
      res.statusCode = 302;
      res.end();
    })
    .listen(4444, function() {
      axios
        .get("http://localhost:4444/", {
          maxRedirects: 0,
          validateStatus: function() {
            return true;
          }
        })
        .then(function(res) {
          test.equal(res.status, 302);
          test.equal(res.headers["location"], "/foo");
          test.done();
        });
    });
}
