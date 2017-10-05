{
  var instance = axios.create({
    timeout: 1000
  });
  instance.get("/foo");
  getAjaxRequest().then(function(request) {
    expect(request.timeout).toBe(1000);
    done();
  });
}
