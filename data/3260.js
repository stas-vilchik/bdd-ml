{
  var x = scale.scaleLog().domain([1e10, 1]);
  test.deepEqual(x.ticks().map(x.tickFormat()), [
    "1e+10",
    "1e+9",
    "1e+8",
    "1e+7",
    "1e+6",
    "1e+5",
    "1e+4",
    "1e+3",
    "1e+2",
    "1e+1",
    "1e+0"
  ]);
  x.domain([1e-29, 1e-1]);
  test.deepEqual(x.ticks().map(x.tickFormat()), [
    "1e-28",
    "1e-26",
    "1e-24",
    "1e-22",
    "1e-20",
    "1e-18",
    "1e-16",
    "1e-14",
    "1e-12",
    "1e-10",
    "1e-8",
    "1e-6",
    "1e-4",
    "1e-2"
  ]);
  test.end();
}
