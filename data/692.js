{
  var downloadProgressSpy = jasmine.createSpy("downloadProgress");
  var uploadProgressSpy = jasmine.createSpy("uploadProgress");
  axios("/foo", {
    onDownloadProgress: downloadProgressSpy,
    onUploadProgress: uploadProgressSpy
  });
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
