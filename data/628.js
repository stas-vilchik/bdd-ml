{
  axios.interceptors.request.use(function() {
    return {
      url: "/bar",
      method: "post"
    };
  });
  axios("/foo");
  getAjaxRequest().then(function(request) {
    expect(request.method).toBe("POST");
    expect(request.url).toBe("/bar");
    done();
  });
}
