{
  server = http
    .createServer(function(req, res) {
      res.setHeader("Content-Type", "application/json;charset=utf-8");
      res.setHeader("Content-Encoding", "gzip");
      res.end("invalid response");
    })
    .listen(4444, function() {
      axios.get("http://localhost:4444/").catch(function(error) {
        test.done();
      });
    });
}
