{
  var i = 1;
  server = http
    .createServer(function(req, res) {
      res.setHeader("Location", "/" + i);
      res.statusCode = 302;
      res.end();
      i++;
    })
    .listen(4444, function() {
      axios
        .get("http://localhost:4444/", {
          maxRedirects: 3
        })
        .catch(function(error) {
          test.done();
        });
    });
}
