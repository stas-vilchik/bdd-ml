{
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
}
