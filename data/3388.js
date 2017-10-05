{
  var x = scale
    .scaleTime()
    .domain([date.local(2001, 0, 1), date.local(2138, 0, 1)]);
  test.deepEqual(x.nice().domain(), [
    date.local(2000, 0, 1),
    date.local(2140, 0, 1)
  ]);
  test.end();
}
