{
  spyOn(cookies, "read");
  axios("/foo", {
    xsrfCookieName: null
  });
  getAjaxRequest().then(function(request) {
    expect(cookies.read).not.toHaveBeenCalled();
    done();
  });
}
