{
  var progressSpy = jasmine.createSpy("progress");
  var instance = axios.create({
    onDownloadProgress: progressSpy
  });
  instance.get("/foo");
  getAjaxRequest().then(function(request) {
    request.respondWith({
      status: 200,
      responseText: '{"foo": "bar"}'
    });
    expect(progressSpy).toHaveBeenCalled();
    done();
  });
}
