{
  var x = scale
    .scaleTime()
    .domain([
      date.local(2011, 0, 1, 12, 3, 27),
      date.local(2011, 0, 1, 12, 21, 12)
    ]);
  test.deepEqual(x.ticks(4), [
    date.local(2011, 0, 1, 12, 5),
    date.local(2011, 0, 1, 12, 10),
    date.local(2011, 0, 1, 12, 15),
    date.local(2011, 0, 1, 12, 20)
  ]);
  test.end();
}
