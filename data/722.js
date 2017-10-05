{
  var resolveSpy = jasmine.createSpy("resolve");
  var rejectSpy = jasmine.createSpy("reject");
  axios("/foo", {
    validateStatus: function(status) {
      return status !== 500;
    }
  })
    .then(resolveSpy)
    .catch(rejectSpy)
    .then(function() {
      expect(resolveSpy).not.toHaveBeenCalled();
      expect(rejectSpy).toHaveBeenCalled();
      var reason = rejectSpy.calls.first().args[0];
      expect(reason instanceof Error).toBe(true);
      expect(reason.message).toBe("Request failed with status code 500");
      expect(reason.config.method).toBe("get");
      expect(reason.config.url).toBe("/foo");
      expect(reason.response.status).toBe(500);
      done();
    });
  getAjaxRequest().then(function(request) {
    request.respondWith({
      status: 500
    });
  });
}
