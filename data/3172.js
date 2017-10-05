{
  var s = scale.scaleIdentity();
  test.deepEqual(s.ticks(1).map(s.tickFormat(1)), ["0", "1"]);
  test.deepEqual(s.ticks(2).map(s.tickFormat(2)), ["0.0", "0.5", "1.0"]);
  test.deepEqual(s.ticks(5).map(s.tickFormat(5)), [
    "0.0",
    "0.2",
    "0.4",
    "0.6",
    "0.8",
    "1.0"
  ]);
  test.deepEqual(s.ticks(10).map(s.tickFormat(10)), [
    "0.0",
    "0.1",
    "0.2",
    "0.3",
    "0.4",
    "0.5",
    "0.6",
    "0.7",
    "0.8",
    "0.9",
    "1.0"
  ]);
  s.domain([1, 0]);
  test.deepEqual(s.ticks(1).map(s.tickFormat(1)), ["0", "1"].reverse());
  test.deepEqual(
    s.ticks(2).map(s.tickFormat(2)),
    ["0.0", "0.5", "1.0"].reverse()
  );
  test.deepEqual(
    s.ticks(5).map(s.tickFormat(5)),
    ["0.0", "0.2", "0.4", "0.6", "0.8", "1.0"].reverse()
  );
  test.deepEqual(
    s.ticks(10).map(s.tickFormat(10)),
    [
      "0.0",
      "0.1",
      "0.2",
      "0.3",
      "0.4",
      "0.5",
      "0.6",
      "0.7",
      "0.8",
      "0.9",
      "1.0"
    ].reverse()
  );
  test.end();
}
