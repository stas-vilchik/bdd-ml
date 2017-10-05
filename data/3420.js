{
  var x = scale
    .scaleTime()
    .domain([date.local(2010, 11, 18), date.local(2014, 2, 2)]);
  test.deepEqual(x.ticks(4), [
    date.local(2011, 0, 1, 0, 0),
    date.local(2012, 0, 1, 0, 0),
    date.local(2013, 0, 1, 0, 0),
    date.local(2014, 0, 1, 0, 0)
  ]);
  test.end();
}
