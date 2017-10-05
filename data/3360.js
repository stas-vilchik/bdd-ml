{
  var s = scale.scaleQuantize().domain(["-1.20", "2.40"]);
  test.deepEqual(s.domain(), [-1.2, 2.4]);
  test.equal(s(-1.2), 0);
  test.equal(s(0.5), 0);
  test.equal(s(0.7), 1);
  test.equal(s(2.4), 1);
  test.end();
}
