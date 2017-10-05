{
  var progressSpy = jasmine.createSpy("progress");
  var instance = axios.create({
    onUploadProgress: progressSpy
  });
  instance.get("/foo");
  getAjaxRequest().then(function(request) {
    done();
  });
}
