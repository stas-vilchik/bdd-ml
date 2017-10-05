{
  axios("/foo", {
    headers: {
      Accept: "foo/bar"
    }
  });
  getAjaxRequest().then(function(request) {
    expect(request.requestHeaders["Accept"]).toEqual("foo/bar");
    done();
  });
}
