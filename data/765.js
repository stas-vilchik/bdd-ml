{
  var token = Math.floor(Math.random() * Math.pow(2, 64)).toString(36);
  axios("/foo", {
    transformRequest: function(data, headers) {
      headers["X-Authorization"] = token;
    }
  });
  getAjaxRequest().then(function(request) {
    expect(request.requestHeaders["X-Authorization"]).toEqual(token);
    done();
  });
}
