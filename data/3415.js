{
  var x = scale
    .scaleTime()
    .domain([
      date.local(2011, 0, 1, 16, 28, 27),
      date.local(2011, 0, 5, 21, 34, 12)
    ]);
  test.deepEqual(x.ticks(4), [
    date.local(2011, 0, 2, 0, 0),
    date.local(2011, 0, 3, 0, 0),
    date.local(2011, 0, 4, 0, 0),
    date.local(2011, 0, 5, 0, 0)
  ]);
  test.end();
}
