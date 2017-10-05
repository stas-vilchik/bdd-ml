{
  var data = {
    foo: "bar"
  };
  axios.post("/foo", data, {
    transformRequest: function(data) {
      return data;
    }
  });
  getAjaxRequest().then(function(request) {
    expect(typeof request.params).toEqual("object");
    done();
  });
}
