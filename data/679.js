{
  axios("/foo", {
    params: {
      foo: 123,
      bar: 456
    }
  });
  getAjaxRequest().then(function(request) {
    expect(request.url).toBe("/foo?foo=123&bar=456");
    done();
  });
}
