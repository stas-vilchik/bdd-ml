{
  var x = scale.scaleTime();
  test.deepEqual(
    x.domain([date.local(2014, 2, 2), date.local(2010, 11, 18)]).ticks(4),
    [
      date.local(2014, 0, 1, 0, 0),
      date.local(2013, 0, 1, 0, 0),
      date.local(2012, 0, 1, 0, 0),
      date.local(2011, 0, 1, 0, 0)
    ]
  );
  test.deepEqual(
    x.domain([date.local(2011, 10, 2), date.local(2010, 11, 18)]).ticks(4),
    [
      date.local(2011, 9, 1, 0, 0),
      date.local(2011, 6, 1, 0, 0),
      date.local(2011, 3, 1, 0, 0),
      date.local(2011, 0, 1, 0, 0)
    ]
  );
  test.end();
}
