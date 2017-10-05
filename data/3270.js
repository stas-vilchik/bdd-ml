{
  var domain = ["red", "green"],
    s = scale.scaleOrdinal().domain(domain);
  domain.push("blue");
  test.deepEqual(s.domain(), ["red", "green"]);
  test.end();
}
