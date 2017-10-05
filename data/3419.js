{
  var x = scale
    .scaleTime()
    .domain([date.local(2010, 11, 18), date.local(2011, 10, 2)]);
  test.deepEqual(x.ticks(4), [
    date.local(2011, 0, 1, 0, 0),
    date.local(2011, 3, 1, 0, 0),
    date.local(2011, 6, 1, 0, 0),
    date.local(2011, 9, 1, 0, 0)
  ]);
  test.end();
}
