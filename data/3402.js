{
  var x = scale
    .scaleTime()
    .domain([
      date.local(2011, 0, 1, 12, 0, 0),
      date.local(2011, 0, 1, 12, 0, 1)
    ]);
  test.deepEqual(x.ticks(4), [
    date.local(2011, 0, 1, 12, 0, 0, 0),
    date.local(2011, 0, 1, 12, 0, 0, 200),
    date.local(2011, 0, 1, 12, 0, 0, 400),
    date.local(2011, 0, 1, 12, 0, 0, 600),
    date.local(2011, 0, 1, 12, 0, 0, 800),
    date.local(2011, 0, 1, 12, 0, 1, 0)
  ]);
  test.end();
}
