{
  var x = scale
    .scaleTime()
    .domain([date.local(2009, 0, 1, 0, 12), date.local(2009, 0, 1, 0, 12)]);
  test.deepEqual(x.nice(time.timeDay).domain(), [
    date.local(2009, 0, 1),
    date.local(2009, 0, 2)
  ]);
  test.end();
}
