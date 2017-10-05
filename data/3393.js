{
  var x = scale
    .scaleTime()
    .domain([
      date.local(2009, 0, 1, 0, 12),
      date.local(2009, 0, 1, 23, 48),
      date.local(2009, 0, 2, 23, 48)
    ])
    .nice(time.timeDay);
  test.deepEqual(x.domain(), [
    date.local(2009, 0, 1),
    date.local(2009, 0, 1, 23, 48),
    date.local(2009, 0, 3)
  ]);
  test.end();
}
