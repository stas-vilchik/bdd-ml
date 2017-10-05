{
  var buf = new Buffer(1024);
  buf.fill("x");
  server = http
    .createServer(function(req, res) {
      test.equal(req.headers["content-length"], buf.length.toString());
      req.pipe(res);
    })
    .listen(4444, function() {
      axios
        .post("http://localhost:4444/", buf, {
          responseType: "stream"
        })
        .then(function(res) {
          var stream = res.data;
          var string = "";
          stream.on("data", function(chunk) {
            string += chunk.toString("utf8");
          });
          stream.on("end", function() {
            test.equal(string, buf.toString());
            test.done();
          });
        });
    });
}
