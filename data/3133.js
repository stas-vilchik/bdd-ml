{
  var s = scale.scaleBand().domain(["a", "b", "c"]);
  s("d");
  s("e");
  test.deepEqual(s.domain(), ["a", "b", "c"]);
  test.end();
}
