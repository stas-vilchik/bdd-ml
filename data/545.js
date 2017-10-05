{
  var instance = axios.create();
  axios.defaults.baseURL = "http://example.org/";
  instance.get("/foo");
  getAjaxRequest().then(function(request) {
    expect(request.url).toBe("http://example.org/foo");
    done();
  });
}
