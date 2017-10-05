{
  axios
    .get("http://localhost:4444/", {
      maxRedirects: 0,
      validateStatus: function() {
        return true;
      }
    })
    .then(function(res) {
      test.equal(res.status, 302);
      test.equal(res.headers["location"], "/foo");
      test.done();
    });
}
