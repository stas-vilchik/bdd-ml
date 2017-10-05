{
  var response;
  axios.interceptors.response.use(function(data) {
    data.data = data.data + "1";
    return data;
  });
  axios.interceptors.response.use(function(data) {
    data.data = data.data + "2";
    return data;
  });
  axios.interceptors.response.use(function(data) {
    data.data = data.data + "3";
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
      expect(response.data).toBe("OK123");
      done();
    }, 100);
  });
}
