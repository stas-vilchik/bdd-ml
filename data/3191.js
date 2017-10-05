{
  var s = scale.scaleLinear().range(["0px", "2px"]);
  test.deepEqual(s.range(), ["0px", "2px"]);
  test.equal(s(0.5), "1px");
  test.end();
}
