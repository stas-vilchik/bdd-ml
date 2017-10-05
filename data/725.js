{
  var resolveSpy = jasmine.createSpy("resolve");
  var rejectSpy = jasmine.createSpy("reject");
  axios("/foo", {
    validateStatus: function(status) {
      return status === 500;
    }
  })
    .then(resolveSpy)
    .catch(rejectSpy)
    .then(function() {
      expect(resolveSpy).toHaveBeenCalled();
      expect(rejectSpy).not.toHaveBeenCalled();
      done();
    });
  getAjaxRequest().then(function(request) {
    request.respondWith({
      status: 500
    });
  });
}
