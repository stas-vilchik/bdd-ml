{
  var params = new URLSearchParams();
  params.append("param1", "value1");
  params.append("param2", "value2");
  axios.post("/foo", params);
  getAjaxRequest().then(function(request) {
    expect(request.requestHeaders["Content-Type"]).toBe(
      "application/x-www-form-urlencoded;charset=utf-8"
    );
    expect(request.params).toBe("param1=value1&param2=value2");
    done();
  });
}
