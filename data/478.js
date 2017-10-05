{
  var source = CancelToken.source();
  axios
    .get("/foo", {
      cancelToken: source.token
    })
    .then(function() {
      window.addEventListener("unhandledrejection", function() {
        done.fail("Unhandled rejection.");
      });
      source.cancel();
      setTimeout(done, 100);
    });
  getAjaxRequest().then(function(request) {
    request.respondWith({
      status: 200,
      responseText: "OK"
    });
  });
}
