{
  axios.post("/foo");
  getAjaxRequest().then(function(request) {
    expect(request.url).toBe("/foo");
    expect(request.method).toBe("POST");
    done();
  });
}
