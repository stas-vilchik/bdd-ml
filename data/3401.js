{
  var x = scale
    .scaleTime()
    .domain([
      date.local(2011, 0, 1, 12, 0, 0),
      date.local(2011, 0, 1, 12, 33, 4)
    ]);
  test.deepEqual(x.ticks(time.timeMinute, 10), [
    date.local(2011, 0, 1, 12, 0),
    date.local(2011, 0, 1, 12, 10),
    date.local(2011, 0, 1, 12, 20),
    date.local(2011, 0, 1, 12, 30)
  ]);
  test.end();
}
