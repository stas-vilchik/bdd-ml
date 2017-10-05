{
  axios.defaults.baseURL = "http://example.org/";
  var instance = axios.create();
  instance.get("/foo");
  getAjaxRequest().then(function(request) {
    expect(request.url).toBe("http://example.org/foo");
    done();
  });
}
