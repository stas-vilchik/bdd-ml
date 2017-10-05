{
  var x = scale.scaleLog();
  test.deepEqual(x.ticks().map(x.tickFormat(5)), [
    "1e+0",
    "2e+0",
    "3e+0",
    "4e+0",
    "5e+0",
    "",
    "",
    "",
    "",
    "1e+1"
  ]);
  x.domain([100, 1]);
  test.deepEqual(x.ticks().map(x.tickFormat(10)), [
    "1e+2",
    "",
    "",
    "",
    "",
    "5e+1",
    "4e+1",
    "3e+1",
    "2e+1",
    "1e+1",
    "",
    "",
    "",
    "",
    "5e+0",
    "4e+0",
    "3e+0",
    "2e+0",
    "1e+0"
  ]);
  test.end();
}
