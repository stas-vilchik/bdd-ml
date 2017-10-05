{
  var progressSpy = jasmine.createSpy("progress");
  axios("/foo", {
    onUploadProgress: progressSpy
  });
  getAjaxRequest().then(function(request) {
    done();
  });
}
