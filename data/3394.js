{
  var x = scale
    .scaleTime()
    .domain([date.local(2009, 0, 1, 0, 12), date.local(2009, 0, 1, 23, 48)]);
  test.deepEqual(x.nice(time.timeDay, 3).domain(), [
    date.local(2009, 0, 1),
    date.local(2009, 0, 4)
  ]);
  test.deepEqual(x.nice(time.timeWeek, 2).domain(), [
    date.local(2008, 11, 21),
    date.local(2009, 0, 4)
  ]);
  test.deepEqual(x.nice(time.timeMonth, 3).domain(), [
    date.local(2008, 9, 1),
    date.local(2009, 3, 1)
  ]);
  test.deepEqual(x.nice(time.timeYear, 10).domain(), [
    date.local(2000, 0, 1),
    date.local(2010, 0, 1)
  ]);
  test.end();
}
