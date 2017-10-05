{
  document.cookie = axios.defaults.xsrfCookieName + "=12345";
  axios("http://example.com/", {
    withCredentials: true
  });
  getAjaxRequest().then(function(request) {
    expect(request.requestHeaders[axios.defaults.xsrfHeaderName]).toEqual(
      "12345"
    );
    done();
  });
}
