{
  var response;
  axios.interceptors.response.use(function(data) {
    data.data = data.data + " - modified by interceptor";
    return data;
  });
  axios("/foo").then(function(data) {
    response = data;
  });
  getAjaxRequest().then(function(request) {
    request.respondWith({
      status: 200,
      responseText: "OK"
    });
    setTimeout(function() {
      expect(response.data).toBe("OK - modified by interceptor");
      done();
    }, 100);
  });
}
