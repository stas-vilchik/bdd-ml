{
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
      axios
        .get("http://localhost:4444/", {
          proxy: {
            host: "localhost",
            port: 4000,
            auth: {
              username: "user",
              password: "pass"
            }
          },
          headers: {
            "Proxy-Authorization": "Basic abc123"
          }
        })
        .then(function(res) {
          var base64 = new Buffer("user:pass", "utf8").toString("base64");
          test.equal(
            res.data,
            "Basic " + base64,
            "should authenticate to the proxy"
          );
          test.done();
        });
    });
}
