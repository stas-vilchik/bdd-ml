{
  axios.defaults.headers.post["X-CUSTOM-HEADER"] = "foo";
  axios.post("/foo", {});
  getAjaxRequest().then(function(request) {
    expect(request.requestHeaders["X-CUSTOM-HEADER"]).toBe("foo");
    done();
  });
}
