{
  document.cookie = axios.defaults.xsrfCookieName + "=12345";
  axios("http://example.com/");
  getAjaxRequest().then(function(request) {
    expect(request.requestHeaders[axios.defaults.xsrfHeaderName]).toEqual(
      undefined
    );
    done();
  });
}
