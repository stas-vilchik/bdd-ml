{
  axios
    .get("http://localhost:4444/", {
      maxRedirects: 3
    })
    .catch(function(error) {
      test.done();
    });
}
