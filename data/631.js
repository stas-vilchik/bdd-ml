{
  axios.interceptors.request.use(function(config) {
    return new Promise(function(resolve) {
      setTimeout(function() {
        config.headers.async = "promise";
        resolve(config);
      }, 100);
    });
  });
  axios("/foo");
  getAjaxRequest().then(function(request) {
    expect(request.requestHeaders.async).toBe("promise");
    done();
  });
}
