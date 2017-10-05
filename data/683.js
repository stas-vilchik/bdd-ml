{
  var instance = axios.create({
    baseURL: "http://test.com/"
  });
  instance.get("/foo");
  getAjaxRequest().then(function(request) {
    expect(request.url).toBe("http://test.com/foo");
    done();
  });
}
