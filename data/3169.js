{
  var s = scale
    .scaleIdentity()
    .domain([new Date(1990, 0, 1), new Date(1991, 0, 1)]);
  test.equal(typeof s.domain()[0], "number");
  test.equal(typeof s.domain()[1], "number");
  test.equal(s.domain()[0], +new Date(1990, 0, 1));
  test.equal(s.domain()[1], +new Date(1991, 0, 1));
  test.equal(typeof s(new Date(1989, 9, 20)), "number");
  test.equal(s(new Date(1989, 9, 20)), +new Date(1989, 9, 20));
  s.domain(["0", "1"]);
  test.equal(typeof s.domain()[0], "number");
  test.equal(typeof s.domain()[1], "number");
  test.equal(s(0.5), 0.5);
  s.domain([new Number(0), new Number(1)]);
  test.equal(typeof s.domain()[0], "number");
  test.equal(typeof s.domain()[1], "number");
  test.equal(s(0.5), 0.5);
  s.range([new Date(1990, 0, 1), new Date(1991, 0, 1)]);
  test.equal(typeof s.range()[0], "number");
  test.equal(typeof s.range()[1], "number");
  test.equal(s.range()[0], +new Date(1990, 0, 1));
  test.equal(s.range()[1], +new Date(1991, 0, 1));
  test.equal(typeof s(new Date(1989, 9, 20)), "number");
  test.equal(s(new Date(1989, 9, 20)), +new Date(1989, 9, 20));
  s.range(["0", "1"]);
  test.equal(typeof s.range()[0], "number");
  test.equal(typeof s.range()[1], "number");
  test.equal(s(0.5), 0.5);
  s.range([new Number(0), new Number(1)]);
  test.equal(typeof s.range()[0], "number");
  test.equal(typeof s.range()[1], "number");
  test.equal(s(0.5), 0.5);
  test.end();
}
