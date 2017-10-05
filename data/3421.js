{
  var x = scale
    .scaleTime()
    .domain([date.local(0, 11, 18), date.local(2014, 2, 2)]);
  test.deepEqual(x.ticks(6), [
    date.local(500, 0, 1, 0, 0),
    date.local(1000, 0, 1, 0, 0),
    date.local(1500, 0, 1, 0, 0),
    date.local(2000, 0, 1, 0, 0)
  ]);
  test.end();
}
