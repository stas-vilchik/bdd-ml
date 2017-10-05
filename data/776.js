{
  var count = 0;
  forEach(
    function() {},
    function() {
      count++;
    }
  );
  expect(count).toEqual(1);
}
