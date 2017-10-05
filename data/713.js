{
  axios({
    url: "/foo",
    method: "POST"
  }).then(function(response) {
    expect(response.config.method).toBe("post");
    done();
  });
  getAjaxRequest().then(function(request) {
    request.respondWith({
      status: 200
    });
  });
}
