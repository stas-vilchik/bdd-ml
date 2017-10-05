{
  var a = [1, 2];
  var b = [3, 4];
  accumulateInto(a, b);
  expect(a).toEqual([1, 2, 3, 4]);
  expect(b).toEqual([3, 4]);
  var c = [1];
  accumulateInto(c, 2);
  expect(c).toEqual([1, 2]);
}
