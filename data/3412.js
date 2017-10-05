{
  var x = scale
    .scaleTime()
    .domain([
      date.local(2011, 0, 1, 14, 28, 27),
      date.local(2011, 0, 2, 1, 34, 12)
    ]);
  test.deepEqual(x.ticks(4), [
    date.local(2011, 0, 1, 15, 0),
    date.local(2011, 0, 1, 18, 0),
    date.local(2011, 0, 1, 21, 0),
    date.local(2011, 0, 2, 0, 0)
  ]);
  test.end();
}
