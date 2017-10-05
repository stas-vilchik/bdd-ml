{
  var downloadProgressSpy = jasmine.createSpy("downloadProgress");
  var uploadProgressSpy = jasmine.createSpy("uploadProgress");
  var instance = axios.create({
    onDownloadProgress: downloadProgressSpy,
    onUploadProgress: uploadProgressSpy
  });
  instance.get("/foo");
  getAjaxRequest().then(function(request) {
    expect(downloadProgressSpy).not.toHaveBeenCalled();
    request.respondWith({
      status: 200,
      responseText: '{"foo": "bar"}'
    });
    expect(downloadProgressSpy).toHaveBeenCalled();
    done();
  });
}
