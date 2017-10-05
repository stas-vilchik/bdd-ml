{
  const numbers = [1, 2, 3, 4];
  const setOfNumbers = new Set(numbers);
  expect(setOfNumbers).not.toEqual(new Set());
  expect(setOfNumbers).not.toBe(numbers);
  expect(setOfNumbers).not.toEqual([1, 2]);
  expect(setOfNumbers).not.toEqual([1, 2, 3]);
  expect(setOfNumbers).toEqual(new Set(numbers));
  const nestedSets = new Set([new Set([1, 2])]);
  expect(nestedSets).not.toEqual(new Set([new Set([1, 4])]));
  expect(nestedSets).toEqual(new Set([new Set([1, 2])]));
}
