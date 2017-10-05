{
  var s = scale.scaleOrdinal().domain(["red", "green"]),
    domain = s.domain();
  s("blue");
  test.deepEqual(domain, ["red", "green"]);
  test.end();
}
