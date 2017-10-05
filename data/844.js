{
  axios.get("http://localhost:4444/").then(function(res) {
    test.equal(res.data, str);
    test.done();
  });
}
