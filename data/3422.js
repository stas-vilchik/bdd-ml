{
  var x = scale
    .scaleTime()
    .domain([date.local(2014, 2, 2), date.local(2014, 2, 2)]);
  test.deepEqual(x.ticks(6), []);
  test.end();
}
