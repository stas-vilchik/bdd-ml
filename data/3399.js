{
  var x = scale.scaleTime().clamp(true);
  test.ok(x.invert(0) instanceof Date);
  test.ok(x.invert(0) !== x.invert(0));
  test.equal(+x.invert(-1), +x.domain()[0]);
  test.equal(+x.invert(0), +x.domain()[0]);
  test.equal(+x.invert(1), +x.domain()[1]);
  test.equal(+x.invert(2), +x.domain()[1]);
  test.end();
}
