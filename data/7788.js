{
  var a = [2];
  expect(accumulateInto(1, a)).toEqual([1, 2]);
  expect(a).toEqual([2]);
  expect(accumulateInto(1, 2)).toEqual([1, 2]);
}
