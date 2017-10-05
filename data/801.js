{
  axios("/foo");
  getAjaxRequest().then(function(request) {
    expect(request.requestHeaders[axios.defaults.xsrfHeaderName]).toEqual(
      undefined
    );
    done();
  });
}
