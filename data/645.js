{
  var response;
  axios.interceptors.response.use(function() {
    return {
      data: "stuff"
    };
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
      expect(response.data).toBe("stuff");
      done();
    }, 100);
  });
}
