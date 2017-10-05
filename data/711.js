{
  axios("/foo");
  getAjaxRequest().then(function(request) {
    expect(request.url).toBe("/foo");
    expect(request.method).toBe("GET");
    done();
  });
}
