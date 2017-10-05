{
  var stream = res.data;
  var string = "";
  stream.on("data", function(chunk) {
    string += chunk.toString("utf8");
  });
  stream.on("end", function() {
    test.equal(string, fs.readFileSync(__filename, "utf8"));
    test.done();
  });
}
