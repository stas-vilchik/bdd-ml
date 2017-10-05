{
  axios.post("/foo");
  getAjaxRequest().then(function(request) {
    testHeaderValue(request.requestHeaders, "Content-Type", undefined);
    done();
  });
}
