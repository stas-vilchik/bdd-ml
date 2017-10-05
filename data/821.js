{
  axios.get("http://localhost:4444/").then(function(res) {
    test.deepEqual(res.data, data);
    test.done();
  });
}
