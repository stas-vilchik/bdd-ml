{
  var instance = axios.create({
    baseURL: "http://test.com/"
  });
  instance.interceptors.request.use(function(config) {
    config.baseURL = "http://rebase.com/";
    return config;
  });
  instance.get("/foo");
  getAjaxRequest().then(function(request) {
    expect(request.url).toBe("http://rebase.com/foo");
    done();
  });
}
