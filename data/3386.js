{
  var x = scale
    .scaleTime()
    .domain([date.local(2009, 0, 1, 0, 17), date.local(2009, 0, 1, 23, 42)]);
  test.deepEqual(x.nice().domain(), [
    date.local(2009, 0, 1),
    date.local(2009, 0, 2)
  ]);
  test.end();
}
