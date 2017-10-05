{
  var instance = axios.create({
    baseURL: "http://someurl.com/"
  });
  instance.get("http://someotherurl.com/");
  getAjaxRequest().then(function(request) {
    expect(request.url).toBe("http://someotherurl.com/");
    done();
  });
}
