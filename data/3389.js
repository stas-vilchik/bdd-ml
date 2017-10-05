{
  var x = scale
    .scaleTime()
    .domain([date.local(2009, 0, 1, 0, 12), date.local(2009, 0, 1, 0, 12)]);
  test.deepEqual(x.nice().domain(), [
    date.local(2009, 0, 1, 0, 12),
    date.local(2009, 0, 1, 0, 12)
  ]);
  test.end();
}
