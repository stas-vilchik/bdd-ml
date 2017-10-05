{
  document.cookie = axios.defaults.xsrfCookieName + "=12345";
  axios("/foo", {
    xsrfCookieName: null
  });
  getAjaxRequest().then(function(request) {
    expect(request.requestHeaders[axios.defaults.xsrfHeaderName]).toEqual(
      undefined
    );
    done();
  });
}
