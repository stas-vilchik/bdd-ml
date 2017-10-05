{
  var success = false,
    failure = false;
  var error;
  axios
    .get("http://localhost:4444/", {
      timeout: 250
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
    test.equal(error.code, "ECONNABORTED");
    test.equal(error.message, "timeout of 250ms exceeded");
    test.done();
  }, 300);
}
