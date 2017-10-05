{
  var x = scale
    .scaleThreshold()
    .domain(["10", "2"])
    .range([0, 1, 2]);
  test.strictEqual(x.domain()[0], "10");
  test.strictEqual(x.domain()[1], "2");
  test.equal(x("0"), 0);
  test.equal(x("12"), 1);
  test.equal(x("3"), 2);
  test.end();
}
