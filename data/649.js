{
  var response;
  axios.interceptors.response.use(function(data) {
    return new Promise(function(resolve) {
      setTimeout(function() {
        data.data = "you have been promised!";
        resolve(data);
      }, 10);
    });
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
      expect(response.data).toBe("you have been promised!");
      done();
    }, 100);
  });
}
