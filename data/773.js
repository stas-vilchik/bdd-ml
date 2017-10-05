{
  var sum = 0;
  forEach([1, 2, 3, 4, 5], function(val) {
    sum += val;
  });
  expect(sum).toEqual(15);
}
