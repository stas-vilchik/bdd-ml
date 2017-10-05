{
  var user = "foo";
  var headers = {
    Authorization: "Bearer 1234"
  };
  axios
    .get("http://" + user + "@localhost:4444/", {
      headers: headers
    })
    .then(function(res) {
      var base64 = new Buffer(user + ":", "utf8").toString("base64");
      test.equal(res.data, "Basic " + base64);
      test.done();
    });
}
