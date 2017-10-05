{
  var response;
  axios("/foo").then(function(res) {
    response = res;
  });
  getAjaxRequest().then(function(request) {
    request.respondWith({
      status: 1223,
      statusText: "Unknown"
    });
    setTimeout(function() {
      expect(response.status).toEqual(204);
      expect(response.statusText).toEqual("No Content");
      done();
    }, 100);
  });
}
