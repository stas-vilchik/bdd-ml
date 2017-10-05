{
  var x = scale
    .scaleTime()
    .domain([
      date.local(2011, 0, 1, 12, 1, 0),
      date.local(2011, 0, 1, 12, 4, 4)
    ]);
  test.deepEqual(x.ticks(time.timeMinute), [
    date.local(2011, 0, 1, 12, 1),
    date.local(2011, 0, 1, 12, 2),
    date.local(2011, 0, 1, 12, 3),
    date.local(2011, 0, 1, 12, 4)
  ]);
  test.end();
}
