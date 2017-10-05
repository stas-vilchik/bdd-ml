{
  var source = CancelToken.source();
  axios
    .get("/foo/bar", {
      cancelToken: source.token
    })
    .catch(function(thrown) {
      expect(thrown).toEqual(jasmine.any(Cancel));
      expect(thrown.message).toBe("Operation has been canceled.");
      done();
    });
  getAjaxRequest().then(function(request) {
    source.cancel("Operation has been canceled.");
    request.respondWith({
      status: 200,
      responseText: "OK"
    });
  });
}
