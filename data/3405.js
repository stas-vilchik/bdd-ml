{
  var x = scale
    .scaleTime()
    .domain([
      date.local(2011, 0, 1, 12, 0, 0),
      date.local(2011, 0, 1, 12, 0, 50)
    ]);
  test.deepEqual(x.ticks(4), [
    date.local(2011, 0, 1, 12, 0, 0),
    date.local(2011, 0, 1, 12, 0, 15),
    date.local(2011, 0, 1, 12, 0, 30),
    date.local(2011, 0, 1, 12, 0, 45)
  ]);
  test.end();
}
