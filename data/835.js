{
  server = http
    .createServer(function(req, res) {
      res.setHeader("Content-Type", "application/json;charset=utf-8");
      res.setHeader("Content-Encoding", "gzip");
      res.end(zipped);
    })
    .listen(4444, function() {
      axios.get("http://localhost:4444/").then(function(res) {
        test.deepEqual(res.data, data);
        test.done();
      });
    });
}
