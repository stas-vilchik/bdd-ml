{
  var x = scale
    .scaleTime()
    .domain([
      date.local(2011, 0, 1, 12, 0, 0),
      date.local(2011, 0, 1, 12, 1, 50)
    ]);
  test.deepEqual(x.ticks(4), [
    date.local(2011, 0, 1, 12, 0, 0),
    date.local(2011, 0, 1, 12, 0, 30),
    date.local(2011, 0, 1, 12, 1, 0),
    date.local(2011, 0, 1, 12, 1, 30)
  ]);
  test.end();
}
