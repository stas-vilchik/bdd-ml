{
  axios.interceptors.request.use(function(config) {
    config.data.baz = "qux";
    return config;
  });
  axios.post("/foo", {
    foo: "bar"
  });
  getAjaxRequest().then(function(request) {
    expect(request.params).toEqual('{"foo":"bar","baz":"qux"}');
    done();
  });
}
