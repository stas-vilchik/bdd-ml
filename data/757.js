{
  var response;
  axios("/foo").then(function(data) {
    response = data;
  });
  getAjaxRequest().then(function(request) {
    request.respondWith({
      status: 200,
      responseText: '{"foo": "bar"}'
    });
    setTimeout(function() {
      expect(typeof response.data).toEqual("object");
      expect(response.data.foo).toEqual("bar");
      done();
    }, 100);
  });
}
