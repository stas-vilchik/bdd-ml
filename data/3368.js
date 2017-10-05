{
  var s = scale
    .scaleQuantize()
    .domain([4.2, 6.2])
    .range(array.range(10));
  s.range().forEach(function(y) {
    var e = s.invertExtent(y);
    test.equal(s(e[0]), y);
    test.equal(s(e[1]), y < 9 ? y + 1 : y);
  });
  test.end();
}
