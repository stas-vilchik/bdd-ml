{
  var headers = axios.defaults.headers.common;
  axios.post("/foo", "fizz=buzz");
  getAjaxRequest().then(function(request) {
    for (var key in headers) {
      if (headers.hasOwnProperty(key)) {
        expect(request.requestHeaders[key]).toEqual(headers[key]);
      }
    }

    done();
  });
}
