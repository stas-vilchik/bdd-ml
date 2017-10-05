{
  var x = scale.scaleLog().domain([new Date(1990, 0, 1), new Date(1991, 0, 1)]);
  test.equal(typeof x.domain()[0], "number");
  test.equal(typeof x.domain()[1], "number");
  test.inDelta(x(new Date(1989, 9, 20)), -0.2061048);
  test.inDelta(x(new Date(1990, 0, 1)), 0.0);
  test.inDelta(x(new Date(1990, 2, 15)), 0.2039385);
  test.inDelta(x(new Date(1990, 4, 27)), 0.4057544);
  test.inDelta(x(new Date(1991, 0, 1)), 1.0);
  test.inDelta(x(new Date(1991, 2, 15)), 1.1942797);
  x.domain(["1", "10"]);
  test.equal(typeof x.domain()[0], "number");
  test.equal(typeof x.domain()[1], "number");
  test.inDelta(x(5), 0.69897);
  x.domain([new Number(1), new Number(10)]);
  test.equal(typeof x.domain()[0], "number");
  test.equal(typeof x.domain()[1], "number");
  test.inDelta(x(5), 0.69897);
  test.end();
}
