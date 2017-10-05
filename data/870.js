{
  server = http
    .createServer(function(req, res) {
      res.setHeader("Content-Type", "text/html; charset=UTF-8");
      res.end("12345");
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
              response.end(body + "6789");
            });
          });
        })
        .listen(4000, function() {
          axios
            .get("http://localhost:4444/", {
              proxy: {
                host: "localhost",
                port: 4000
              }
            })
            .then(function(res) {
              test.equal(res.data, "123456789", "should pass through proxy");
              test.done();
            });
        });
    });
}
