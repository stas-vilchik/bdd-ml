{
  axios.interceptors.request.use(function(config) {
    config.headers.test = "added by interceptor";
    return config;
  });
  axios("/foo");
  getAjaxRequest().then(function(request) {
    request.respondWith({
      status: 200,
      responseText: "OK"
    });
    expect(request.requestHeaders.test).toBe("added by interceptor");
    done();
  });
}
