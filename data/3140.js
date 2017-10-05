{
  var s = scale.scaleBand().domain(["red", "green"]),
    domain = s.domain();
  test.deepEqual(domain, ["red", "green"]);
  domain.push("blue");
  test.deepEqual(s.domain(), ["red", "green"]);
  test.end();
}
