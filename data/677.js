{
  axios("/foo", {
    headers: {
      "X-Requested-With": "XMLHttpRequest"
    }
  });
  getAjaxRequest().then(function(request) {
    expect(request.requestHeaders["X-Requested-With"]).toEqual(
      "XMLHttpRequest"
    );
    done();
  });
}
