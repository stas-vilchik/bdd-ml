{
  axios
    .post("http://localhost:4444/", fs.createReadStream(__filename), {
      responseType: "stream"
    })
    .then(function(res) {
      var stream = res.data;
      var string = "";
      stream.on("data", function(chunk) {
        string += chunk.toString("utf8");
      });
      stream.on("end", function() {
        test.equal(string, fs.readFileSync(__filename, "utf8"));
        test.done();
      });
    });
}
