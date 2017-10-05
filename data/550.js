{
  var headers = axios.defaults.headers.common;
  axios("/foo");
  getAjaxRequest().then(function(request) {
    for (var key in headers) {
      if (headers.hasOwnProperty(key)) {
        expect(request.requestHeaders[key]).toEqual(headers[key]);
      }
    }

    done();
  });
}
