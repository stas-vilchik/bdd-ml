{
  axios("/foo", {
    baseURL: "http://www.example.com"
  });
  getAjaxRequest().then(function(request) {
    expect(request.url).toBe("http://www.example.com/foo");
    done();
  });
}
