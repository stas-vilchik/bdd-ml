{
  axios
    .post("http://localhost:4444/", buf, {
      responseType: "stream"
    })
    .then(function(res) {
      var stream = res.data;
      var string = "";
      stream.on("data", function(chunk) {
        string += chunk.toString("utf8");
      });
      stream.on("end", function() {
        test.equal(string, buf.toString());
        test.done();
      });
    });
}
