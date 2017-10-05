{
  axios.interceptors.request.use(function(config) {
    config.headers.test1 = "1";
    return config;
  });
  axios.interceptors.request.use(function(config) {
    config.headers.test2 = "2";
    return config;
  });
  axios.interceptors.request.use(function(config) {
    config.headers.test3 = "3";
    return config;
  });
  axios("/foo");
  getAjaxRequest().then(function(request) {
    expect(request.requestHeaders.test1).toBe("1");
    expect(request.requestHeaders.test2).toBe("2");
    expect(request.requestHeaders.test3).toBe("3");
    done();
  });
}
