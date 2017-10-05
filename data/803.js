{
  document.cookie = axios.defaults.xsrfCookieName + "=12345";
  axios("/foo");
  getAjaxRequest().then(function(request) {
    expect(request.requestHeaders[axios.defaults.xsrfHeaderName]).toEqual(
      "12345"
    );
    done();
  });
}
