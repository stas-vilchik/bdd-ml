{
  var count = 0;
  var data = Object.create(null);
  data.foo = "bar";
  forEach(data, function() {
    count++;
  });
  expect(count).toEqual(1);
}
