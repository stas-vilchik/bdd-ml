{
  var s = scale.scaleOrdinal();
  test.deepEqual(s.domain(), []);
  test.deepEqual(s.range(), []);
  test.equal(s(0), undefined);
  test.equal(s.unknown(), scale.scaleImplicit);
  test.deepEqual(s.domain(), [0]);
  test.end();
}
