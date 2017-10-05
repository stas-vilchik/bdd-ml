{
  var s = scale
    .scalePow()
    .domain([-10, 0, 100])
    .range(["red", "white", "green"]);
  test.deepEqual(s.domain(), [-10, 0, 100]);
  test.equal(s(-5), "rgb(255, 128, 128)");
  test.equal(s(50), "rgb(128, 192, 128)");
  test.equal(s(75), "rgb(64, 160, 64)");
  s.domain([4, 2, 1]).range([1, 2, 4]);
  test.equal(s(1.5), 3);
  test.equal(s(3), 1.5);
  test.equal(s.invert(1.5), 3);
  test.equal(s.invert(3), 1.5);
  s.domain([1, 2, 4]).range([4, 2, 1]);
  test.equal(s(1.5), 3);
  test.equal(s(3), 1.5);
  test.equal(s.invert(1.5), 3);
  test.equal(s.invert(3), 1.5);
  test.end();
}
