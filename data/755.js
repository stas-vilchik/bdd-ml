{
  var data = {
    foo: "bar"
  };
  axios.post("/foo", data);
  getAjaxRequest().then(function(request) {
    expect(request.params).toEqual('{"foo":"bar"}');
    done();
  });
}
