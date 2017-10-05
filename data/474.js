{
  var source = CancelToken.source();
  var request;
  axios
    .get("/foo/bar", {
      cancelToken: source.token
    })
    .catch(function() {
      expect(request.statusText).toBe("abort");
      done();
    });
  getAjaxRequest().then(function(req) {
    source.cancel();
    request = req;
  });
}
