{
  var data = {
    foo: "bar"
  };
  axios.post("/foo", data, {
    transformRequest: axios.defaults.transformRequest.concat(function(data) {
      return data.replace("bar", "baz");
    })
  });
  getAjaxRequest().then(function(request) {
    expect(request.params).toEqual('{"foo":"baz"}');
    done();
  });
}
