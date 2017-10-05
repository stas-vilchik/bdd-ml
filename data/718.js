{
  axios("/foo");
  getAjaxRequest().then(function(request) {
    expect(request.url).toBe("/foo");
    done();
  });
}
