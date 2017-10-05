{
  server = http
    .createServer(function(req, res) {
      res.end();
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
          var proxyAuth = request.headers["proxy-authorization"];
          http.get(opts, function(res) {
            var body = "";
            res.on("data", function(data) {
              body += data;
            });
            res.on("end", function() {
              response.setHeader("Content-Type", "text/html; charset=UTF-8");
              response.end(proxyAuth);
            });
          });
        })
        .listen(4000, function() {
          process.env.http_proxy = "http://user:pass@localhost:4000/";
          axios.get("http://localhost:4444/").then(function(res) {
            var base64 = new Buffer("user:pass", "utf8").toString("base64");
            test.equal(
              res.data,
              "Basic " + base64,
              "should authenticate to the proxy set by process.env.http_proxy"
            );
            test.done();
          });
        });
    });
}
