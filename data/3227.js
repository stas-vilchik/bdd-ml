{
  var x = scale.scaleLog().domain([-100, -1]);
  test.deepEqual(x.ticks().map(x.tickFormat(Infinity)), [
    "-1e+2",
    "-9e+1",
    "-8e+1",
    "-7e+1",
    "-6e+1",
    "-5e+1",
    "-4e+1",
    "-3e+1",
    "-2e+1",
    "-1e+1",
    "-9e+0",
    "-8e+0",
    "-7e+0",
    "-6e+0",
    "-5e+0",
    "-4e+0",
    "-3e+0",
    "-2e+0",
    "-1e+0"
  ]);
  test.inDelta(x(-50), 0.150515);
  test.end();
}
