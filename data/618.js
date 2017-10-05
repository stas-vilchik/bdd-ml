{
  axios.interceptors.request.use(function(config) {
    config.foo = true;
    return config;
  });
  var instance = axios.create();
  instance.interceptors.request.use(function(config) {
    config.bar = true;
    return config;
  });
  var response;
  instance.get("/foo").then(function(res) {
    response = res;
  });
  getAjaxRequest().then(function(request) {
    request.respondWith({
      status: 200
    });
    setTimeout(function() {
      expect(response.config.foo).toEqual(undefined);
      expect(response.config.bar).toEqual(true);
      done();
    }, 100);
  });
}
