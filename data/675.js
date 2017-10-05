{
  axios("/foo");
  getAjaxRequest().then(function(request) {
    expect(request.method).toBe("GET");
    done();
  });
}
