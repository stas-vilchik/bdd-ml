{
  axios
    .get("http://localhost:4444/", {
      cancelToken: source.token
    })
    .catch(function(thrown) {
      test.ok(
        thrown instanceof axios.Cancel,
        "Promise must be rejected with a Cancel obejct"
      );
      test.equal(thrown.message, "Operation has been canceled.");
      test.done();
    });
}
