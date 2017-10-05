{
  var count = 0;
  forEach(undefined, function() {
    count++;
  });
  expect(count).toEqual(0);
}
