{
  var value = spread(function(a, b) {
    return a * b;
  })([5, 10]);
  expect(value).toEqual(50);
}
