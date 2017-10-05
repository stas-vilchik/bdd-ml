{
  axios.defaults.baseURL = "http://example.com/";
  axios("/foo");
  getAjaxRequest().then(function(request) {
    expect(request.url).toBe("http://example.com/foo");
    done();
  });
}
