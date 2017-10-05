{
  var auth = {
    username: "foo",
    password: "bar"
  };
  var headers = {
    Authorization: "Bearer 1234"
  };
  axios
    .get("http://localhost:4444/", {
      auth: auth,
      headers: headers
    })
    .then(function(res) {
      var base64 = new Buffer("foo:bar", "utf8").toString("base64");
      test.equal(res.data, "Basic " + base64);
      test.done();
    });
}
