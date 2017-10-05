{
  var x = scale.scaleLog().domain([0.1, 1000]);
  test.deepEqual(x.domain(), [0.1, 1000]);
  test.end();
}
