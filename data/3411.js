{
  var x = scale
    .scaleTime()
    .domain([
      date.local(2011, 0, 1, 12, 28, 27),
      date.local(2011, 0, 1, 16, 34, 12)
    ]);
  test.deepEqual(x.ticks(4), [
    date.local(2011, 0, 1, 13, 0),
    date.local(2011, 0, 1, 14, 0),
    date.local(2011, 0, 1, 15, 0),
    date.local(2011, 0, 1, 16, 0)
  ]);
  test.end();
}
