{
  var instance = axios.create({
    xsrfCookieName: XSRF_COOKIE_NAME,
    xsrfHeaderName: "X-CUSTOM-XSRF-TOKEN"
  });
  document.cookie = instance.defaults.xsrfCookieName + "=foobarbaz";
  instance.get("/foo");
  getAjaxRequest().then(function(request) {
    expect(request.requestHeaders[instance.defaults.xsrfHeaderName]).toEqual(
      "foobarbaz"
    );
    done();
  });
}
