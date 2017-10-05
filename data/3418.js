{
  var x = scale
    .scaleTime()
    .domain([date.local(2011, 0, 18), date.local(2011, 4, 2)]);
  test.deepEqual(x.ticks(4), [
    date.local(2011, 1, 1, 0, 0),
    date.local(2011, 2, 1, 0, 0),
    date.local(2011, 3, 1, 0, 0),
    date.local(2011, 4, 1, 0, 0)
  ]);
  test.end();
}
