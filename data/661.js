{
  var response, intercept;
  axios.interceptors.response.use(function(data) {
    data.data = data.data + "1";
    return data;
  });
  intercept = axios.interceptors.response.use(function(data) {
    data.data = data.data + "2";
    return data;
  });
  axios.interceptors.response.use(function(data) {
    data.data = data.data + "3";
    return data;
  });
  axios.interceptors.response.eject(intercept);
  axios("/foo").then(function(data) {
    response = data;
  });
  getAjaxRequest().then(function(request) {
    request.respondWith({
      status: 200,
      responseText: "OK"
    });
    setTimeout(function() {
      expect(response.data).toBe("OK13");
      done();
    }, 100);
  });
}
