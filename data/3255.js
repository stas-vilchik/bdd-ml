{
  var s = scale.scaleLog(),
    t = s.domain([1e-1, 1e1]).ticks();
  test.deepEqual(t.map(s.tickFormat(10, "+")), [
    "+0.1",
    "+0.2",
    "+0.3",
    "+0.4",
    "+0.5",
    "",
    "",
    "",
    "",
    "+1",
    "+2",
    "+3",
    "+4",
    "+5",
    "",
    "",
    "",
    "",
    "+10"
  ]);
  test.end();
}
