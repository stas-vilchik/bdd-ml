{
  axios.post("/foo", false);
  getAjaxRequest().then(function(request) {
    testHeaderValue(
      request.requestHeaders,
      "Content-Type",
      "application/x-www-form-urlencoded"
    );
    done();
  });
}
