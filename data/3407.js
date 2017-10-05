{
  var x = scale
    .scaleTime()
    .domain([
      date.local(2011, 0, 1, 12, 0, 27),
      date.local(2011, 0, 1, 12, 4, 12)
    ]);
  test.deepEqual(x.ticks(4), [
    date.local(2011, 0, 1, 12, 1),
    date.local(2011, 0, 1, 12, 2),
    date.local(2011, 0, 1, 12, 3),
    date.local(2011, 0, 1, 12, 4)
  ]);
  test.end();
}
