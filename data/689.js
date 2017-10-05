{
  var progressSpy = jasmine.createSpy("progress");
  axios("/foo", {
    onDownloadProgress: progressSpy
  });
  getAjaxRequest().then(function(request) {
    request.respondWith({
      status: 200,
      responseText: '{"foo": "bar"}'
    });
    expect(progressSpy).toHaveBeenCalled();
    done();
  });
}
