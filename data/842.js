{
  var str = Array(100000).join("ж");
  server = http
    .createServer(function(req, res) {
      res.setHeader("Content-Type", "text/html; charset=UTF-8");
      res.end(str);
    })
    .listen(4444, function() {
      axios.get("http://localhost:4444/").then(function(res) {
        test.equal(res.data, str);
        test.done();
      });
    });
}
