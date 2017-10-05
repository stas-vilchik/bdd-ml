{
  axios.post("/foo/bar", {
    firstName: "foo",
    lastName: "bar"
  });
  getAjaxRequest().then(function(request) {
    testHeaderValue(
      request.requestHeaders,
      "Content-Type",
      "application/json;charset=utf-8"
    );
    done();
  });
}
