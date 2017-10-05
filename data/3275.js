{
  var s = scale
    .scaleOrdinal()
    .domain(["__proto__", "hasOwnProperty"])
    .range([42, 43]);
  test.equal(s("__proto__"), 42);
  test.equal(s("hasOwnProperty"), 43);
  test.deepEqual(s.domain(), ["__proto__", "hasOwnProperty"]);
  test.end();
}
