{
  var response;
  var contentType = "application/vnd.myapp.type+json";
  axios
    .post(
      "/foo",
      {
        prop: "value"
      },
      {
        headers: {
          "content-type": contentType
        }
      }
    )
    .then(function(res) {
      response = res;
    });
  getAjaxRequest().then(function(request) {
    expect(request.requestHeaders["Content-Type"]).toEqual(contentType);
    done();
  });
}
