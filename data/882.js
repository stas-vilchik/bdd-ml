{
  server = http
    .createServer(function(req, res) {
      res.setHeader("Content-Type", "text/html; charset=UTF-8");
      res.end("4567");
    })
    .listen(4444, function() {
      proxy = http
        .createServer(function(request, response) {
          var parsed = url.parse(request.url);
          var opts = {
            host: parsed.hostname,
            port: parsed.port,
            path: parsed.path
          };
          http.get(opts, function(res) {
            var body = "";
            res.on("data", function(data) {
              body += data;
            });
            res.on("end", function() {
              response.setHeader("Content-Type", "text/html; charset=UTF-8");
              response.end(body + "1234");
            });
          });
        })
        .listen(4000, function() {
          process.env.http_proxy = "http://localhost:4000/";
          axios.get("http://localhost:4444/").then(function(res) {
            test.equal(
              res.data,
              "45671234",
              "should use proxy set by process.env.http_proxy"
            );
            test.done();
          });
        });
    });
}
