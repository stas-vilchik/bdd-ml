{
  process.env.http_proxy = "http://localhost:4000/";
  axios.get("http://localhost:4444/").then(function(res) {
    test.equal(
      res.data,
      "45671234",
      "should use proxy set by process.env.http_proxy"
    );
    test.done();
  });
}
