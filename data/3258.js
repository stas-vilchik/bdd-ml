{
  var x = scale.scaleLog();
  test.deepEqual(x.ticks().map(x.tickFormat(Infinity)), [
    "1e+0",
    "2e+0",
    "3e+0",
    "4e+0",
    "5e+0",
    "6e+0",
    "7e+0",
    "8e+0",
    "9e+0",
    "1e+1"
  ]);
  x.domain([100, 1]);
  test.deepEqual(x.ticks().map(x.tickFormat(Infinity)), [
    "1e+2",
    "9e+1",
    "8e+1",
    "7e+1",
    "6e+1",
    "5e+1",
    "4e+1",
    "3e+1",
    "2e+1",
    "1e+1",
    "9e+0",
    "8e+0",
    "7e+0",
    "6e+0",
    "5e+0",
    "4e+0",
    "3e+0",
    "2e+0",
    "1e+0"
  ]);
  x.domain([0.49999, 0.006029505943610648]);
  test.deepEqual(x.ticks().map(x.tickFormat(Infinity)), [
    "4e-1",
    "3e-1",
    "2e-1",
    "1e-1",
    "9e-2",
    "8e-2",
    "7e-2",
    "6e-2",
    "5e-2",
    "4e-2",
    "3e-2",
    "2e-2",
    "1e-2",
    "9e-3",
    "8e-3",
    "7e-3"
  ]);
  x.domain([0.95, 1.05e8]);
  test.deepEqual(
    x
      .ticks()
      .map(x.tickFormat(8))
      .filter(String),
    ["1e+0", "1e+1", "1e+2", "1e+3", "1e+4", "1e+5", "1e+6", "1e+7", "1e+8"]
  );
  test.end();
}
