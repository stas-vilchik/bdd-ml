{
  var source = CancelToken.source();
  source.cancel("Operation has been canceled.");
  axios
    .get("/foo", {
      cancelToken: source.token
    })
    .catch(function(thrown) {
      expect(thrown).toEqual(jasmine.any(Cancel));
      expect(thrown.message).toBe("Operation has been canceled.");
      done();
    });
}
