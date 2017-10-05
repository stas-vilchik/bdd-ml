{
  axios.defaults.headers.get["X-CUSTOM-HEADER"] = "foo";
  axios.get("/foo");
  getAjaxRequest().then(function(request) {
    expect(request.requestHeaders["X-CUSTOM-HEADER"]).toBe("foo");
    done();
  });
}
