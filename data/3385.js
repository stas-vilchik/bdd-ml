{
  var x = scale.scaleTime().domain([-1e50, 1e50]);
  test.equal(isNaN(x.domain()[0]), true);
  test.equal(isNaN(x.domain()[1]), true);
  test.deepEqual(x.ticks(10), []);
  test.end();
}
