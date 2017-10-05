{
  var x = scale.scaleLog().range(["0", "2"]);
  test.equal(typeof x.range()[0], "string");
  test.equal(typeof x.range()[1], "string");
  test.end();
}
