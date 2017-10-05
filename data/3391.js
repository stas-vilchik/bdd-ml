{
  var x = scale
    .scaleTime()
    .domain([date.local(2009, 0, 1, 0, 12), date.local(2009, 0, 1, 23, 48)]);
  test.deepEqual(x.nice(time.timeDay).domain(), [
    date.local(2009, 0, 1),
    date.local(2009, 0, 2)
  ]);
  test.deepEqual(x.nice(time.timeWeek).domain(), [
    date.local(2008, 11, 28),
    date.local(2009, 0, 4)
  ]);
  test.deepEqual(x.nice(time.timeMonth).domain(), [
    date.local(2008, 11, 1),
    date.local(2009, 1, 1)
  ]);
  test.deepEqual(x.nice(time.timeYear).domain(), [
    date.local(2008, 0, 1),
    date.local(2010, 0, 1)
  ]);
  test.end();
}
