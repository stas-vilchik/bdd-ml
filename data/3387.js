{
  var x = scale
    .scaleTime()
    .domain([
      date.local(2013, 0, 1, 12, 0, 0, 0),
      date.local(2013, 0, 1, 12, 0, 0, 128)
    ]);
  test.deepEqual(x.nice().domain(), [
    date.local(2013, 0, 1, 12, 0, 0, 0),
    date.local(2013, 0, 1, 12, 0, 0, 130)
  ]);
  test.end();
}
