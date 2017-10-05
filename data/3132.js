{
  var s = scale.scaleBand().domain(["a", "b", "c"]);
  test.equal(s("d"), undefined);
  test.equal(s("e"), undefined);
  test.equal(s("f"), undefined);
  test.end();
}
