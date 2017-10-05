{
  axios.get("http://localhost:4444/one").then(function(res) {
    test.equal(res.data, str);
    test.equal(res.request.path, "/two");
    test.done();
  });
}
