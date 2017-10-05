{
  var x = scale
    .scaleTime()
    .domain([
      date.local(2011, 0, 1, 12, 0, 0),
      date.local(2011, 0, 1, 12, 0, 4)
    ]);
  test.deepEqual(x.ticks(4), [
    date.local(2011, 0, 1, 12, 0, 0),
    date.local(2011, 0, 1, 12, 0, 1),
    date.local(2011, 0, 1, 12, 0, 2),
    date.local(2011, 0, 1, 12, 0, 3),
    date.local(2011, 0, 1, 12, 0, 4)
  ]);
  test.end();
}
