{
  const mixedArray = [1, {}, []];
  expect(mixedArray).toEqual(mixedArray);
  expect([1, 2, 3]).toEqual([1, 2, 3]);
  expect([1]).not.toEqual([2]);
  expect([1, 2, 3]).not.toEqual([1, 2]);
  expect([1, 2, 3]).not.toEqual([1, 2, 3, 4]);
}
