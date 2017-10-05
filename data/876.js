{
  axios
    .get("http://localhost:4444/", {
      proxy: {
        host: "localhost",
        port: 4000
      }
    })
    .then(function(res) {
      test.equal(res.data, "123456789", "should pass through proxy");
      test.done();
    });
}
