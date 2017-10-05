{
  var success = false,
    failure = false,
    error;
  axios
    .get("http://localhost:4444/", {
      maxContentLength: 2000
    })
    .then(function(res) {
      success = true;
    })
    .catch(function(err) {
      error = err;
      failure = true;
    });
  setTimeout(function() {
    test.equal(success, false, "request should not succeed");
    test.equal(failure, true, "request should fail");
    test.equal(error.message, "maxContentLength size of 2000 exceeded");
    test.done();
  }, 100);
}
