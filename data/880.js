{
  axios
    .get("http://localhost:4444/", {
      proxy: false
    })
    .then(function(res) {
      test.equal(res.data, "123456789", "should not pass through proxy");
      test.done();
    });
}
