{
  var instance = axios.create();
  instance.get("/foo");
  getAjaxRequest().then(function(request) {
    expect(request.url).toBe("/foo");
    done();
  });
}
